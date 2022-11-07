import * as React from "react";
import type {
  HeadersFunction,
  LoaderFunction,
  MetaFunction,
} from "@remix-run/cloudflare";
import {
  Link,
  useLoaderData,
  useParams,
  useSearchParams,
} from "@remix-run/react";
import { notFound, useHydrated } from "remix-utils";
import invariant from "tiny-invariant";
import { json } from "@remix-run/cloudflare";
import { getEnvVariable } from "~/utils/env";

import classNames from "clsx";
import slugify from "slugify";
import { decimalToTime, normalizePosts, unslugify } from "~/utils/blog";
import { CalendarIcon, ClockIcon } from "@heroicons/react/solid";
import { Badge } from "~/components/Badge";
import { Preview } from "~/components/Preview";
import { getPost } from "~/utils/github.server";
import type { CloudFlareEnv } from "~/types";
import type { RootLoaderData } from "~/root";
import { commonHeaders } from "~/utils/misc.server";
import { generateTitle, getSocialMetas, getUrl } from "~/utils/seo";

type LoaderData = {
  post: Awaited<ReturnType<typeof normalizePosts>>;
  preview: boolean;
};

export const loader: LoaderFunction = async ({ context, params, request }) => {
  const requestUrl = new URL(request.url);
  const previewSecret = getEnvVariable("PREVIEW_SECRET", context);

  const preview = requestUrl?.searchParams?.get("preview") === previewSecret;

  invariant(params.slug, "slug is required");

  const slug = params.slug;

  const env = context as CloudFlareEnv;

  const post = await getPost(unslugify(slug), env);

  const normedPost = normalizePosts(post.data, preview);

  if (!normedPost || normedPost.length === 0) {
    throw notFound({
      message: `Post with slug "/${slug}" not found`,
    });
  }

  return json<LoaderData>({
    post: normedPost,
    preview,
  });
};

export const meta: MetaFunction = ({ parentsData, data }) => {
  const {
    root: { requestInfo },
  } = parentsData as {
    root: RootLoaderData;
  };

  const { post } = data as LoaderData;

  const article = post?.[0];

  return {
    ...getSocialMetas({
      description:
        article?.title ??
        "Treasure is the decentralized video game console connecting games and communities together through imagination, MAGIC, and NFTs.",
      keywords: "treasure, NFT, DeFi, games, community, imagination, magic",
      title: generateTitle(`/${article?.title}`),
      origin: requestInfo.origin,
      url: getUrl(requestInfo),
      imgPath: "/blog",
    }),
  };
};

export const headers: HeadersFunction = commonHeaders;

export default function Blog() {
  const { post, preview } = useLoaderData<LoaderData>();

  const params = useParams();
  const [searchParams] = useSearchParams();
  const [ids, setIds] = React.useState<{ id: string; name: string }[]>([]);
  const isHydrated = useHydrated();
  const currentHash = isHydrated ? location.hash.replace("#", "") : "";

  const article = post?.[0];

  React.useEffect(() => {
    const container = document.getElementById("content");

    // get all h3s
    const h3s = Array.from(container ? container.querySelectorAll("h3") : []);

    // get all anchors
    const anchors = Array.from(
      container ? container.querySelectorAll("a") : []
    );

    // set target to _blank and add rel noopener no referrer
    anchors.forEach((anchor) => {
      anchor.target = "_blank";
      anchor.rel = "noopener noreferrer";
    });

    // set id attribute to h3s
    h3s.forEach((h3) => {
      setIds((ids) => [
        ...ids,
        {
          id: h3.id,
          name: h3.innerText,
        },
      ]);
      const id = slugify(h3.innerText, { lower: true });
      h3.id = id;
      h3.className = "scroll-mt-20 sm:scroll-mt-28";
    });
  }, []);

  return (
    <main className="relative">
      {preview ? <Preview /> : null}
      <div className="bg-night-900">
        <div className="mx-auto max-w-md p-8 sm:max-w-9xl xl:p-24">
          <div className="flex flex-col space-y-10 xl:flex-row xl:space-y-0">
            <div className="flex flex-1 items-center overflow-hidden">
              <img
                src={article?.coverImage}
                alt={article?.title || ""}
                className="w-full rounded-xl object-contain"
              />
            </div>
            <div className="space-y-5 p-0 sm:space-y-10 xl:basis-[42rem] xl:py-20 xl:pl-20">
              <h1 className="text-2xl font-bold text-honey-200 sm:text-4xl">
                {article?.title}
              </h1>
              <div className="flex items-center">
                <span className="relative inline-block flex-shrink-0">
                  <img
                    src={article?.author?.avatarUrl || ""}
                    alt={article?.author?.login || "Author"}
                    className="h-10 w-10 rounded-full bg-honey-900 ring-1 ring-honey-500 sm:h-16 sm:w-16"
                  />
                </span>
                <div className="ml-4 truncate">
                  <p className="truncate text-base font-bold text-honey-800 sm:text-lg">
                    {article?.author?.login}
                  </p>
                </div>
              </div>
              <dl className="flex flex-col sm:flex-row sm:flex-wrap">
                <dt className="sr-only">Time to read</dt>
                <dd className="flex items-center text-xs font-medium text-white sm:mr-6 sm:text-sm">
                  <ClockIcon className="mr-2 h-4 w-4 text-ruby-1000" />
                  {decimalToTime(
                    (article?.bodyText?.length || 0) / 5 / 180 || 0
                  )}
                </dd>
                <dt className="sr-only">Publish Date</dt>
                <dd className="mt-2 flex items-center text-xs font-medium text-white sm:mr-6 sm:mt-0 sm:text-sm">
                  <CalendarIcon className="mr-2 h-4 w-4 text-ruby-1000" />
                  {new Intl.DateTimeFormat("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  }).format(new Date(article?.createdAt))}
                </dd>
              </dl>
            </div>
          </div>
        </div>
      </div>
      <div className="mx-auto my-16 max-w-md px-4 sm:max-w-7xl sm:px-20">
        <div className="grid lg:grid-cols-8 lg:gap-10">
          <div
            className="prose prose-night col-span-5 mx-auto hover:prose-a:text-ruby-900 prose-blockquote:border-l-ruby-400 prose-li:marker:text-ruby-300 lg:prose-lg"
            id="content"
            dangerouslySetInnerHTML={{
              __html: article?.bodyHTML || "",
            }}
          />
          <aside className="col-span-2 col-start-7 hidden lg:block">
            <div className="sticky top-40 rounded-1.9xl border-2 border-honey-200 bg-honey-100 p-10">
              <Badge
                name="Content"
                bgColor="bg-honey-200"
                textColor="text-ruby-900"
                size="sm"
                className="rounded-[10px]"
              />
              <ul className="mt-10 border-l-2 border-honey-600">
                {ids.map((item) => {
                  return (
                    <li
                      key={item.name}
                      className={classNames(
                        currentHash === item.id
                          ? "border-ruby-900 font-bold text-ruby-900"
                          : "border-transparent text-night-700",
                        "-ml-[2px] overflow-hidden text-ellipsis whitespace-nowrap border-l-2 py-1 pl-4 hover:border-ruby-700 hover:text-ruby-800"
                      )}
                    >
                      <Link
                        to={`/blog/${params.slug}?${searchParams.toString()}#${
                          item.id
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
