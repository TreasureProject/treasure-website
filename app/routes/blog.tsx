import * as React from "react";
import type { LoaderFunction } from "@remix-run/cloudflare";
import { Link, useLoaderData, useSearchParams } from "@remix-run/react";
import { json } from "@remix-run/cloudflare";
import type { CloudFlareEnv } from "~/types";
import { getEnvVariable } from "~/utils/env";
import { getAllPostsForHome } from "~/utils/sanity/api.server";
import usePreview from "~/hooks/usePreview";
import { urlFor } from "~/utils/sanity/helpers";
import { BookOpenIcon } from "@heroicons/react/solid";
import classNames from "clsx";
import { Preview } from "~/components/Preview";

type LoaderData = {
  posts: Awaited<ReturnType<typeof getAllPostsForHome>>["posts"];
  categories: Awaited<ReturnType<typeof getAllPostsForHome>>["categories"];
  categoryQuery: string | null;
  preview: boolean;
  query: string | null;
};

export const loader: LoaderFunction = async ({ context, request }) => {
  const requestUrl = new URL(request.url);
  const previewSecret = getEnvVariable("SANITY_PREVIEW_SECRET", context);

  const preview = requestUrl?.searchParams?.get("preview") === previewSecret;

  const env = context as CloudFlareEnv;

  const { posts, query, categories, categoryQuery } = await getAllPostsForHome(
    preview,
    env
  );

  return json({
    posts,
    categories,
    query: preview ? query : null,
    categoryQuery: preview ? categoryQuery : null,
    preview,
  });
};

export default function Blog() {
  const { posts, query, categories, categoryQuery, preview } =
    useLoaderData<LoaderData>();
  const [data, setData] = React.useState(posts);
  const [categoryData, setCategoryData] = React.useState(categories);
  const [searchParams] = useSearchParams();

  const [filter, setFilter] = React.useState<string[] | null>(null);

  const latestPost = data?.[0];

  usePreview({
    data: data,
    setData: setData,
    query: query,
  });

  usePreview({
    data: categoryData,
    setData: setCategoryData,
    query: categoryQuery,
  });

  return (
    <main className="bg-night-900">
      {preview ? <Preview /> : null}
      <div className="mx-auto max-w-md px-4 py-16 sm:max-w-4xl sm:px-6 lg:max-w-8xl lg:px-12">
        <div className="grid grid-cols-1 rounded-1.9xl bg-[#131D2E] p-12 lg:grid-cols-7">
          <div className="order-1 col-span-4 space-y-5 pt-6 sm:space-y-7 sm:py-12 sm:pl-8 sm:pr-16">
            <h1 className="text-lg font-bold text-honey-200 sm:text-2xl xl:text-4xl">
              {latestPost?.title}
            </h1>
            <div className="flex items-center">
              <span className="relative inline-block flex-shrink-0">
                <img
                  src={latestPost?.authorImage || ""}
                  alt={latestPost?.authorName || "Author"}
                  className="h-10 w-10 rounded-full bg-honey-900 ring-1 ring-honey-500 sm:h-16 sm:w-16"
                />
              </span>
              <div className="ml-4 truncate">
                <p className="truncate text-base font-bold text-honey-800 sm:text-lg">
                  {latestPost?.authorName}
                </p>
                <p className="truncate text-base text-honey-300 sm:text-lg">
                  {latestPost?.authorRole}
                </p>
              </div>
            </div>
            <p className="text-base text-night-500 sm:text-2xl">
              {latestPost?.subtitle}
            </p>
            <Link
              className="group inline-flex cursor-pointer items-center rounded-button border-2 border-ruby-900 bg-honey-100 px-5 py-2 text-xs font-bold text-ruby-900 shadow-sm transition-colors duration-500 hover:bg-ruby-900 hover:text-white focus:outline-none focus:ring-2 focus:ring-ruby-500 focus:ring-offset-2 sm:text-base"
              to={`/blog/${latestPost?.slug}?${searchParams.toString()}`}
            >
              Read more
              <BookOpenIcon
                className="ml-1.5 h-4 w-4 fill-white stroke-ruby-900 stroke-[1.95] group-hover:fill-ruby-900 group-hover:stroke-white"
                aria-hidden="true"
              />
            </Link>
          </div>
          <div className="-order-1 col-span-3 lg:order-2">
            <img
              src={
                latestPost?.coverImage
                  ? urlFor(latestPost?.coverImage)
                      .fit("max")
                      .auto("format")
                      .url()
                  : ""
              }
              alt={latestPost?.coverImage?.caption || ""}
              className="h-full w-full overflow-hidden rounded-1.9xl object-cover"
            />
          </div>
        </div>
        <div className="mt-24">
          <div className="flex items-center justify-between">
            <span className="text-2xl font-bold text-honey-100">Filter by</span>
            <div className="flex items-center space-x-6">
              {categoryData.map((category) => {
                const active = filter?.includes(category.title) ?? false;
                return (
                  <button
                    key={category.title}
                    onClick={() => {
                      if (filter) {
                        setFilter(
                          active
                            ? filter.filter((f) => f !== category.title)
                            : [...filter, category.title]
                        );
                      } else {
                        setFilter([category.title]);
                      }
                    }}
                    className={classNames(
                      active && "ring-1 ring-night-300",
                      "inline-block w-max rounded-1.9xl bg-night-800 px-2.5 py-1.5 hover:bg-[#131D2E]"
                    )}
                  >
                    <span className="font-mono text-sm font-medium text-night-200">
                      {category.title}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        <ul className="mt-12 grid auto-rows-fr grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {data
            ?.filter((post) =>
              filter && filter.length > 0
                ? post.categories.some((c) => filter.includes(c))
                : true
            )
            .map((post) => (
              <li key={post.slug}>
                <Link
                  to={`/blog/${post.slug}?${searchParams.toString()}`}
                  className="h-full"
                >
                  <div className="flex h-full flex-col rounded-1.9xl bg-[#131D2E] p-10">
                    <div className="flex-shrink-0">
                      <img
                        src={
                          post?.coverImage
                            ? urlFor(post.coverImage)
                                .fit("max")
                                .auto("format")
                                .url()
                            : ""
                        }
                        alt={post?.coverImage?.caption || ""}
                        className="h-48 w-full rounded-xl object-cover"
                      />
                    </div>
                    <div className="mt-10 space-y-5">
                      <span className="text-night-600">
                        {new Intl.DateTimeFormat("en-US", {
                          month: "short",
                          day: "numeric",
                        }).format(new Date(post?.date))}
                      </span>
                      <h2 className="text-2xl font-bold text-honey-200">
                        {post.title}
                      </h2>
                      <p className="text-night-600">{post.subtitle}</p>
                    </div>
                  </div>
                </Link>
              </li>
            ))}
        </ul>
      </div>
    </main>
  );
}

export const handle = {
  breadcrumb: {
    href: "/blog",
    title: "Blog",
  },
};
