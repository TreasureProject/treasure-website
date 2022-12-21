import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/solid";
import { Badge } from "./Badge";
import type { RootLoaderData } from "~/root";
import { useRouteData } from "remix-utils";
import classNames from "clsx";
import { CalendarIcon } from "./Icons";
import { motion } from "framer-motion";

export const TreasurePosts = () => {
  const routeData = useRouteData<RootLoaderData>("root");

  const latest4Posts = routeData?.data?.slice(0, 4);

  return (
    <div className="relative bg-honey-25 py-16 sm:py-24">
      <p className="text-center text-xl font-bold text-night-900 sm:text-4xl">
        Get the latest news and updates
      </p>
      <div className="mt-14 grid grid-cols-1 gap-10 px-14 sm:grid-cols-2 sm:px-28 xl:grid-cols-4">
        {latest4Posts?.map((post) => (
          <a
            href={post.link}
            target="_blank"
            rel="noopener noreferrer"
            key={post.title}
            className="group relative flex flex-col justify-between rounded-xl border-2 border-transparent p-0 transition-colors duration-500 hover:border-honey-200 hover:bg-honey-50 xl:p-4"
          >
            <div>
              {post.thumbnail && (
                <div className="h-40 2xl:h-80">
                  <img
                    className="h-full w-full rounded-md object-cover object-center"
                    src={post.thumbnail}
                    alt={post.title}
                  />
                </div>
              )}
              <h3 className="mt-5 text-base font-bold text-night-900 sm:text-xl">
                {post.title}
              </h3>
            </div>
            <div className="mt-3 sm:mt-5">
              <div className="flex items-center space-x-2.5">
                <CalendarIcon className="mr-1 inline-block h-4 w-4 text-ruby-900" />
                <span className="font-mono text-xs font-medium text-night-700 sm:text-sm">
                  {post.published}
                </span>
              </div>
            </div>
            <ArrowTopRightOnSquareIcon className="absolute right-4 bottom-4 h-4 w-4 fill-honey-900 opacity-0 transition-opacity duration-500 group-hover:opacity-100 [&>path]:stroke-honey-900 [&>path]:stroke-[1]" />
          </a>
        ))}
      </div>
    </div>
  );
};
