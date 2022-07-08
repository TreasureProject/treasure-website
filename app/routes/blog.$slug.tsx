import * as React from "react";
import type { LoaderFunction } from "@remix-run/cloudflare";
import {
  Link,
  useLoaderData,
  useParams,
  useSearchParams,
} from "@remix-run/react";
import { notFound, useHydrated } from "remix-utils";
import invariant from "tiny-invariant";
import type { CloudFlareEnv } from "~/types";
import { getPostAndMorePosts } from "~/utils/sanity/api";
import { json } from "@remix-run/cloudflare";
import { getEnvVariable } from "~/utils/env";
import usePreview from "~/hooks/usePreview";
import ProseableText from "~/components/ProsableText";
import classNames from "clsx";
import slugify from "slugify";
import { urlFor } from "~/utils/sanity/helpers";
import { decimalToTime, unslugify } from "~/utils/blog";
import { CalendarIcon, ClockIcon } from "@heroicons/react/solid";
import { Badge } from "~/components/Badge";
import { Preview } from "~/components/Preview";

type LoaderData = {
  posts: Awaited<ReturnType<typeof getPostAndMorePosts>>["posts"];
  morePosts: Awaited<ReturnType<typeof getPostAndMorePosts>>["morePosts"];
  preview: boolean;
  query: string | null;
};

export const loader: LoaderFunction = async ({ context, params, request }) => {
  const requestUrl = new URL(request.url);
  const previewSecret = getEnvVariable("SANITY_PREVIEW_SECRET", context);

  const preview = requestUrl?.searchParams?.get("preview") === previewSecret;

  invariant(params.slug, "slug is required");

  const slug = params.slug;

  const env = context as CloudFlareEnv;

  const { posts, morePosts, query } = await getPostAndMorePosts(
    slug,
    preview,
    env
  );

  if (posts.length === 0) {
    throw notFound({
      message: `Post with slug "/${slug}" not found`,
    });
  }

  return json<LoaderData>({
    posts,
    morePosts,
    preview,
    query: preview ? query : null,
  });
};

const generateSidebarNavigation = (body: any[]) =>
  body.reduce<
    {
      name: string;
      hash: string;
    }[]
  >((acc, node) => {
    if (node.style === "h2" && node.children[0].text !== "") {
      acc.push({
        name: node.children[0].text,
        hash: slugify(node.children[0].text, {
          lower: true,
        }),
      });
    }
    return acc;
  }, []);

export default function Blog() {
  const { posts, preview, query } = useLoaderData<LoaderData>();

  const params = useParams();
  const [searchParams] = useSearchParams();

  const isHydrated = useHydrated();
  const currentHash = isHydrated ? location.hash.replace("#", "") : "";

  const [data, setData] = React.useState(posts);

  const article = data[0];

  usePreview({
    data: data,
    setData: setData,
    query: query,
  });

  return (
    <main className="relative">
      {preview ? <Preview /> : null}
      <div className="bg-night-900">
        <div className="mx-auto max-w-md p-8 sm:max-w-9xl xl:p-24">
          <div className="flex flex-col space-y-10 xl:flex-row xl:space-y-0">
            <div className="flex items-center overflow-hidden">
              <img
                src={urlFor(article?.coverImage)
                  .width(600)
                  .fit("max")
                  .auto("format")
                  .url()}
                alt={article?.coverImage.caption || ""}
                className="w-full rounded-xl object-contain"
              />
            </div>
            <div className="flex-1 space-y-5 p-0 sm:space-y-10 xl:py-20 xl:pl-20">
              <h1 className="text-2xl font-bold text-honey-200 sm:text-4xl">
                {article?.title}
              </h1>
              <div className="flex items-center">
                <span className="relative inline-block flex-shrink-0">
                  <img
                    src={article?.authorImage || ""}
                    alt={article?.authorName || "Author"}
                    className="h-10 w-10 rounded-full bg-honey-900 ring-1 ring-honey-500 sm:h-16 sm:w-16"
                  />
                </span>
                <div className="ml-4 truncate">
                  <p className="truncate text-base font-bold text-honey-800 sm:text-lg">
                    {article?.authorName}
                  </p>
                  <p className="truncate text-base text-honey-300 sm:text-lg">
                    {article?.authorRole}
                  </p>
                </div>
              </div>
              <dl className="flex flex-col sm:flex-row sm:flex-wrap">
                <dt className="sr-only">Time to read</dt>
                <dd className="flex items-center text-xs font-medium text-white sm:mr-6 sm:text-sm">
                  <ClockIcon className="mr-2 h-4 w-4 text-ruby-1000" />
                  {decimalToTime(article?.timeToRead / 180 || 0)}
                </dd>
                <dt className="sr-only">Publish Date</dt>
                <dd className="mt-2 flex items-center text-xs font-medium text-white sm:mr-6 sm:mt-0 sm:text-sm">
                  <CalendarIcon className="mr-2 h-4 w-4 text-ruby-1000" />
                  {new Intl.DateTimeFormat("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  }).format(new Date(article?.date))}
                </dd>
              </dl>
            </div>
          </div>
        </div>
      </div>
      <div className="mx-auto my-16 max-w-md px-4 sm:max-w-7xl sm:px-20">
        <div className="grid lg:grid-cols-8 lg:gap-10">
          <div className="col-span-5">
            <ProseableText value={article?.body} />
          </div>
          <aside className="col-span-2 col-start-7 hidden lg:block">
            <div className="sticky top-14 rounded-1.9xl border-2 border-honey-200 bg-honey-100 p-10">
              <Badge
                name="Content"
                bgColor="bg-honey-200"
                textColor="text-ruby-900"
                size="sm"
                className="rounded-[10px]"
              />
              <ul className="mt-10 border-l-2 border-honey-600">
                {generateSidebarNavigation(article?.body).map((item) => {
                  return (
                    <li
                      key={item.name}
                      className={classNames(
                        currentHash === item.hash
                          ? "border-ruby-900 font-bold text-ruby-900"
                          : "border-transparent text-night-700",
                        "-ml-[2px] overflow-hidden text-ellipsis whitespace-nowrap border-l-2 py-1 pl-4 hover:border-ruby-700 hover:text-ruby-800"
                      )}
                    >
                      <Link
                        to={`/blog/${params.slug}?${searchParams.toString()}#${
                          item.hash
                        }`}
                      >
                        {item.name}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
}

export const handle = {
  breadcrumb: (params: { slug: string }) => {
    return {
      title: unslugify(params.slug),
      href: `/blog/${params.slug}`,
    };
  },
};
