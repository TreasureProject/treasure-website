import type { HeadersFunction, SerializeFrom } from "@remix-run/node";
import { json } from "@remix-run/node";
import {
  Link,
  useLoaderData,
  useRouteLoaderData,
  useSearchParams,
} from "@remix-run/react";

import { cn, createUrl, getAuthors, toWebp } from "~/utils/lib";
import type { loader as blogLoader } from "./blog";
import { motion } from "framer-motion";
import { Badge, BlogBadge } from "~/components/Badge";

export const headers: HeadersFunction = ({ parentHeaders }) => {
  const headers = new Headers();

  if (parentHeaders.has("Cache-Control")) {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    headers.set("Cache-Control", parentHeaders.get("Cache-Control")!);
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    headers.set("CDN-Cache-Control", parentHeaders.get("Cache-Control")!);
  }
  return headers;
};

export default function Index() {
  const { posts, allCategories } = useRouteLoaderData(
    "routes/blog"
  ) as SerializeFrom<typeof blogLoader>;

  const [searchParams] = useSearchParams();

  const activeCategory = searchParams.get("category");

  const latestPost = posts[0];

  const authors = getAuthors(latestPost);

  const coverPhoto = toWebp(latestPost?.coverImage?.url || "");

  const preview = searchParams.get("preview");

  const search = (category: string) => {
    const searchParams = new URLSearchParams();
    if (preview) {
      searchParams.set("preview", preview);
    }
    searchParams.set("category", category);
    return `/blog/?${searchParams.toString()}`;
  };

  return (
    <main className="container py-8 xl:py-16">
      {/* latest blog post */}
      <Link
        to={createUrl(`/blog/${latestPost?.slug}`, preview)}
        className="latestPost relative gap-4 py-8"
        prefetch="render"
      >
        <figure className="relative [grid-area:image]">
          <img
            src={coverPhoto}
            className="h-full w-full rounded-xl object-cover"
            alt={latestPost?.title || "Latest blog post"}
          />
          <div className="absolute inset-0 z-10 rounded-xl ring-1 ring-inset ring-transparent dark:ring-night-500/10"></div>
          <img
            src={coverPhoto}
            className="absolute -inset-y-4 inset-x-0 hidden h-[110%] w-full scale-105 opacity-20 blur-3xl brightness-110 dark:block"
            aria-hidden="true"
            alt="backdrop"
          />
        </figure>

        <div className="flex items-center space-x-2 [grid-area:info] lg:pl-8">
          <BlogBadge name={latestPost?.category} />
          <span className="font-mono text-sm font-medium text-night-600 dark:text-night-500">
            <span>{latestPost?.date}</span>
          </span>
        </div>

        <h2 className="relative text-lg font-bold text-night-900 [grid-area:title] dark:text-honey-200 lg:pl-8 lg:text-2xl xl:text-3xl">
          {latestPost?.title}
        </h2>
        <p className="relative text-sm text-night-700 [grid-area:excerpt] dark:text-night-500 lg:pl-8 lg:pr-24 lg:text-lg">
          {latestPost?.subtitle}
        </p>
        <div className="relative flex items-center space-x-3 [grid-area:author] lg:pl-8">
          <figure className="flex items-center gap-2">
            {authors.length === 1 ? (
              <>
                <img
                  src={toWebp(authors[0]?.image?.url || "")}
                  className="h-6 w-6 rounded-full bg-honey-400 ring-2 ring-honey-500 lg:h-8 lg:w-8"
                  alt={`Avatar for ${authors[0]?.name}`}
                />
                <figcaption className="flex flex-col text-xs font-medium text-night-800 dark:text-night-200 sm:text-sm">
                  <span>{authors[0]?.name}</span>
                </figcaption>
              </>
            ) : (
              <div className="flex -space-x-2">
                {authors.map((author) => (
                  <img
                    key={author?.name}
                    src={toWebp(author?.image?.url || "")}
                    className="inline-block h-6 w-6 rounded-full bg-honey-400 ring-2 ring-honey-500 lg:h-8 lg:w-8"
                    alt={`Avatar for ${author?.name}`}
                  />
                ))}
              </div>
            )}
          </figure>
        </div>
        <p className="relative text-sm font-semibold text-ruby-900 [grid-area:readMore] lg:pl-8">
          Read more →
        </p>
      </Link>

      {/* posts */}
      <div className="min-h-[48rem] lg:mt-12">
        <div className="lg:grid lg:grid-cols-6 lg:gap-10">
          <aside className="col-span-2 hidden lg:block">
            <div className="sticky top-12">
              {/* categories */}
              <ul className="mt-6 flex flex-col space-y-2">
                <li className="relative">
                  <Link
                    to={search("all")}
                    preventScrollReset
                    className={cn(
                      "relative z-10 inline-flex w-full px-3.5 py-2.5 text-xs font-semibold text-night-700 transition-colors hover:text-night-800 dark:text-night-400 dark:hover:text-night-300 sm:text-base",
                      {
                        "text-night-900 dark:text-night-200":
                          !activeCategory || activeCategory === "all",
                      }
                    )}
                  >
                    <span className="capitalize">All</span>
                  </Link>
                  {!activeCategory || activeCategory === "all" ? (
                    <motion.div
                      layoutId="activeCategory"
                      className="absolute inset-0 rounded-lg bg-honey-200 px-3.5 py-2.5 outline outline-1 outline-honey-200/20 dark:bg-night-800/30 dark:outline-night-800/20"
                    />
                  ) : null}
                </li>
                {allCategories?.map((category) => {
                  return (
                    <li key={category} className="relative">
                      <Link
                        preventScrollReset
                        to={search(category)}
                        className={cn(
                          "relative z-10 inline-flex w-full px-3.5 py-2.5 text-xs font-semibold text-night-700 transition-colors hover:text-night-800 dark:text-night-400 dark:hover:text-night-300 sm:text-base",
                          {
                            "text-night-900 dark:text-night-200":
                              category === activeCategory,
                          }
                        )}
                      >
                        <span className="capitalize">{category}</span>
                      </Link>
                      {category === activeCategory && (
                        <motion.div
                          layoutId="activeCategory"
                          className="absolute inset-0 rounded-lg bg-honey-200 px-3.5 py-2.5 outline outline-1 outline-honey-200/20 dark:bg-night-800/30 dark:outline-night-800/20"
                        />
                      )}
                    </li>
                  );
                })}
              </ul>
            </div>
          </aside>
          <div className="col-span-4 mt-6 grid grid-cols-1 gap-8 sm:gap-x-8 sm:gap-y-12 lg:grid-cols-2">
            {posts.map((post) => {
              const authors = post?.authorCollection?.items || [];
              return (
                <Link
                  prefetch="intent"
                  to={createUrl(`/blog/${post?.slug}`, preview)}
                  key={post?.slug}
                  className="post relative gap-3"
                >
                  <figure className="relative h-64 [grid-area:image]">
                    <img
                      src={toWebp(post?.coverImage?.url || "")}
                      className="h-full w-full rounded-xl object-cover shadow-sm"
                      alt={`Cover for ${post?.title}`}
                    />
                    <div className="absolute inset-0 rounded-xl ring-1 ring-inset ring-transparent dark:ring-night-500/10"></div>
                  </figure>
                  <div className="flex items-center justify-between px-2 [grid-area:info]">
                    <BlogBadge name={post?.category} />
                    <span className="font-mono text-sm font-medium text-night-600 dark:text-night-500">
                      <span>{post?.date}</span>
                    </span>
                  </div>
                  <h3 className="overflow-hidden px-2 text-base font-semibold leading-6 text-night-900 [grid-area:title] [display:-webkit-box] [-webkit-box-orient:vertical] [-webkit-line-clamp:3] dark:text-honey-200 sm:text-lg">
                    {post?.title}
                  </h3>
                  <div className="flex items-center space-x-3 px-2 [grid-area:author]">
                    <figure className="flex items-center gap-2">
                      {post?.authorCollection?.items.length === 1 ? (
                        <>
                          <img
                            src={toWebp(getAuthors(post)[0]?.image?.url || "")}
                            className="h-6 w-6 rounded-full bg-honey-400 ring-2 ring-honey-500"
                            alt={`Avatar for ${getAuthors(post)[0]?.name}`}
                          />
                          <figcaption className="text-xs font-medium text-night-800 dark:text-night-200">
                            <span>{getAuthors(post)[0]?.name}</span>
                          </figcaption>
                        </>
                      ) : (
                        <div className="flex -space-x-2">
                          {authors.map((author) => (
                            <img
                              key={author?.name}
                              src={toWebp(author?.image?.url || "")}
                              className="inline-block h-6 w-6 rounded-full bg-honey-400 ring-2 ring-honey-500"
                              alt={`Avatar for ${author?.name}`}
                            />
                          ))}
                        </div>
                      )}
                    </figure>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </main>
  );
}
