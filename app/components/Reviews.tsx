import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/solid";
import { useMemo } from "react";
import { twMerge } from "tailwind-merge";

import type { tweets } from "~/const";
import { QuoteIcon } from "./Icons";

export function Tweet({
  className,
  ...props
}: {
  className?: string;
} & (typeof tweets)[number]) {
  const animationDelay = useMemo(() => {
    const possibleAnimationDelays = [
      "0s",
      "0.1s",
      "0.15s",
      "0.25s",
      "0.3s",
      "0.4s",
    ];
    return possibleAnimationDelays[
      Math.floor(Math.random() * possibleAnimationDelays.length)
    ];
  }, []);

  return (
    <a
      href={props.link}
      target="_blank"
      rel="noopener noreferrer"
      className={twMerge(
        "group block animate-fade-in rounded-2xl border-2 border-honey-200 bg-honey-25 p-10 opacity-0 shadow-honey-900/5 shadow-md transition-all hover:scale-105",
        className,
      )}
      style={{ animationDelay }}
    >
      <figure className="space-y-8">
        <QuoteIcon />

        <blockquote className="text-night-800 text-sm sm:text-xl">
          <props.tweet />
        </blockquote>
        <figcaption className="flex text-gray-600 text-sm">
          <img
            src={props.profileImage}
            className="h-16 w-16 rounded-md object-cover"
            alt={`${props.username}'s profile`}
          />
          <div className="ml-4 flex flex-col justify-center">
            <p className="font-bold">{props.username}</p>
            <p>{props.handle}</p>
          </div>
        </figcaption>
        <ArrowTopRightOnSquareIcon className="absolute right-10 bottom-10 h-5 w-5 fill-honey-900 opacity-0 transition-opacity duration-500 group-hover:opacity-100 [&>path]:stroke-[1] [&>path]:stroke-honey-900" />
      </figure>
    </a>
  );
}
