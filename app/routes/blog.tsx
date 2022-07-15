import * as React from "react";
import type {
  HeadersFunction,
  LoaderFunction,
  MetaFunction,
} from "@remix-run/cloudflare";
import { Link, useLoaderData, useSearchParams } from "@remix-run/react";
import { json } from "@remix-run/cloudflare";
import { getEnvVariable } from "~/utils/env";
import { BookOpenIcon } from "@heroicons/react/solid";
import { Preview } from "~/components/Preview";
import { getAllPosts } from "~/utils/github.server";
import { normalizePosts } from "~/utils/blog";
import { notFound } from "remix-utils";
import { generateTitle, getSocialMetas, getUrl } from "~/utils/seo";
import { commonHeaders } from "~/utils/misc.server";
import type { RootLoaderData } from "~/root";

type LoaderData = {
  posts: ReturnType<typeof normalizePosts>;
  preview: boolean;
};

export const meta: MetaFunction = ({ parentsData }) => {
  const {
    root: { requestInfo },
  } = parentsData as {
    root: RootLoaderData;
  };

  return {
    ...getSocialMetas({
      description:
        "Treasure is the decentralized video game console connecting games and communities together through imagination, $MAGIC, and NFTs.",
      keywords: "treasure, NFT, DeFi, games, community, imagination, magic",
      title: generateTitle("/blog"),
      origin: requestInfo.origin,
      url: getUrl(requestInfo),
      imgPath: "/blog",
    }),
  };
};

export const headers: HeadersFunction = commonHeaders;

export const loader: LoaderFunction = async ({ context, request }) => {
  const requestUrl = new URL(request.url);
  const previewSecret = getEnvVariable("PREVIEW_SECRET", context);

  const preview = requestUrl?.searchParams?.get("preview") === previewSecret;

  const posts = await getAllPosts(context);

  const normedPosts = normalizePosts(posts.data, preview);

  if (!normedPosts || normedPosts.length === 0) {
    throw notFound({
      message: `No posts found`,
    });
  }

  return json({
    posts: normedPosts,
    preview,
  });
};

export default function Blog() {
  const { posts, preview } = useLoaderData<LoaderData>();
  const [searchParams] = useSearchParams();

  const latestPost = posts?.[0]?.__typename === "Issue" ? posts[0] : null;

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
                  src={latestPost?.author?.avatarUrl || ""}
                  alt={latestPost?.author?.login || "Author Unavailable"}
                  className="h-10 w-10 rounded-full bg-honey-900 ring-1 ring-honey-500 sm:h-16 sm:w-16"
                />
              </span>
              <div className="ml-4 truncate">
                <p className="truncate text-base font-bold text-honey-800 sm:text-lg">
                  {latestPost?.author?.login || "Author Unavailable"}
                </p>
              </div>
            </div>
            <p className="truncate text-base text-night-500 sm:text-2xl">
              {latestPost?.title}
            </p>
            <Link
              className="group inline-flex cursor-pointer items-center rounded-button border-2 border-ruby-900 bg-honey-100 px-5 py-2 text-xs font-bold text-ruby-900 shadow-sm transition-colors duration-500 hover:bg-ruby-900 hover:text-white focus:outline-none focus:ring-2 focus:ring-ruby-500 focus:ring-offset-2 sm:text-base"
              to={`/blog/${latestPost?.slug}?${searchParams.toString()}`}
            >
              Read more
              <BookOpenIcon className="ml-1.5 h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
          <div className="-order-1 col-span-3 lg:order-2">
            <img
              src={latestPost?.coverImage}
              alt={latestPost?.title || ""}
              className="h-full w-full overflow-hidden rounded-1.9xl object-cover"
            />
          </div>
        </div>
        {/* <div className="mt-24">
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
        </div> */}

        {/* ?.filter((post) =>
            filter && filter.length > 0
              ? post.categories.some((c) => filter.includes(c))
              : true
          ) */}
        <ul className="mt-12 grid auto-rows-fr grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {posts?.map((post) => (
            <li key={post?.slug}>
              <Link
                to={`/blog/${post?.slug}?${searchParams.toString()}`}
                className="h-full"
              >
                <div className="flex h-full flex-col rounded-1.9xl bg-[#131D2E] p-10">
                  <div className="flex-shrink-0">
                    <img
                      src={post?.coverImage}
                      alt={post?.title || ""}
                      className="h-48 w-full rounded-xl object-cover"
                    />
                  </div>
                  <div className="mt-10 space-y-5">
                    <span className="text-night-600">
                      {new Intl.DateTimeFormat("en-US", {
                        month: "short",
                        day: "numeric",
                      }).format(new Date(post?.createdAt))}
                    </span>
                    <h2 className="text-2xl font-bold text-honey-200">
                      {post?.title}
                    </h2>
                    <p className="text-night-600">{post?.title}</p>
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
