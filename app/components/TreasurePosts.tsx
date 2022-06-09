import { ExternalLinkIcon } from "@heroicons/react/solid";
import { Badge } from "./Badge";
import type { RootLoaderData } from "~/root";
import { useRouteData } from "remix-utils";

export const TreasurePosts = () => {
  const routeData = useRouteData<RootLoaderData>("root");

  return (
    <div className="relative bg-honey-100 py-16 sm:py-24">
      <div className="mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:max-w-8xl lg:px-12">
        <div className="flex flex-col-reverse items-center sm:flex-row sm:items-start sm:justify-between">
          <p className="mt-12 text-center text-2xl font-bold text-night-900 sm:mt-0 sm:text-left sm:text-4xl">
            Posts from TreasureDAO
          </p>
          <Badge name="Latest" />
        </div>
      </div>
      <div className="mt-12 flex snap-x snap-mandatory gap-4 overflow-x-auto px-6 pb-10 sm:mt-24 sm:px-0">
        {routeData?.data?.map((post) => (
          <div
            key={post.title}
            className="relative flex h-56 w-full snap-center flex-col justify-between rounded-2xl border border-transparent bg-honey-50 p-6 transition-colors duration-500 hover:border-honey-200 sm:h-80 first-of-type:sm:ml-6 last-of-type:sm:mr-6 first-of-type:lg:ml-12 last-of-type:lg:mr-12 first-of-type:xl:ml-16 last-of-type:xl:mr-16"
          >
            <div className="flex flex-1">
              <div className="flex w-64 flex-col space-y-2 px-4 sm:w-96 sm:space-y-5">
                <span className="text-xs">{post.published}</span>
                <p className="break-words text-lg font-bold leading-none text-night-900 line-clamp-2 sm:text-2xl sm:line-clamp-3">
                  <a href={post.link} target="_blank" rel="noopener noreferrer">
                    <span className="absolute inset-0 h-full w-full"></span>
                    {post.title}
                  </a>
                </p>
                <p className="text-xs text-night-700 line-clamp-2 sm:text-sm sm:line-clamp-2">
                  {post.content}
                </p>
              </div>
              {post.thumbnail ? (
                <div className="h-24 w-24 sm:h-48 sm:w-48">
                  <img
                    className="h-full w-full rounded-md object-cover"
                    src={post.thumbnail}
                    alt={post.title}
                  />
                </div>
              ) : null}
            </div>
            <div className="mt-6 flex items-center justify-between">
              <Badge name="Medium Article" />
              <ExternalLinkIcon className="h-5 w-5 text-ruby-900" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
