import React, { useEffect, useMemo, useRef, useState } from "react";
import { twMerge } from "tailwind-merge";
import { useInView } from "framer-motion";
import { tweets } from "~/const";
import { Badge } from "./Badge";
import { QuoteIcon } from "./Icons";

function Tweet({
  className,
  ...props
}: {
  className?: string;
} & typeof tweets[number]) {
  const animationDelay = useMemo(() => {
    const possibleAnimationDelays = [
      "0s",
      "0.15s",
      "0.25s",
      "0.35s",
      "0.45s",
      "0.55s",
    ];
    return possibleAnimationDelays[
      Math.floor(Math.random() * possibleAnimationDelays.length)
    ];
  }, []);

  const isBuilder = props.type === "builder";

  return (
    <figure
      className={twMerge(
        "animate-fade-in space-y-8 rounded-2xl border-2 border-honey-200 bg-honey-25 p-10 opacity-0 shadow-md shadow-honey-900/5",
        className
      )}
      style={{ animationDelay }}
    >
      <div className="flex items-center justify-between">
        <QuoteIcon />
        <Badge
          name={props.type}
          size="sm"
          bgColor={isBuilder ? "bg-tr-blue/10" : "bg-tr-green/10"}
          textColor={isBuilder ? "text-tr-blue" : "text-tr-green"}
          className="rounded-[4px]"
        />
      </div>
      <blockquote>
        <props.tweet />
      </blockquote>
      <figcaption className="flex text-sm text-gray-600">
        <img
          src={props.profileImage}
          className={twMerge(
            "h-16 w-16 rounded-full object-cover",
            isBuilder && "rounded-md"
          )}
          alt={`${props.username}'s profile`}
        />
        <div className="ml-4 flex flex-col justify-center">
          <p>{props.username}</p>
          <p>{props.handle}</p>
        </div>
      </figcaption>
    </figure>
  );
}

function splitArray<T>(array: T[], numParts: number): T[][] {
  const result: T[][] = [];
  for (let i = 0; i < array.length; i++) {
    const index = i % numParts;
    if (!result[index]) {
      result[index] = [];
    }
    result[index].push(array[i]);
  }
  return result;
}

function TweetsColumn({
  className,
  reviews,
  msPerPixel = 0,
}: {
  className?: string;
  reviews: typeof tweets[number][];
  msPerPixel?: number;
}) {
  const columnRef = useRef<HTMLDivElement | null>(null);
  const [columnHeight, setColumnHeight] = useState(0);
  const duration = `${columnHeight * msPerPixel}ms`;

  useEffect(() => {
    if (columnRef.current) {
      const column = columnRef.current;
      const resizeObserver = new window.ResizeObserver(() => {
        setColumnHeight(column.offsetHeight);
      });

      resizeObserver.observe(columnRef.current);

      return () => {
        resizeObserver.disconnect();
      };
    }
  }, []);

  return (
    <div
      ref={columnRef}
      className={twMerge(
        "hover:pause animate-marquee3 space-y-8 py-4",
        className
      )}
      style={{ "--marquee-duration": duration } as React.CSSProperties}
    >
      {reviews.concat(reviews).map((review, reviewIndex) => (
        <Tweet key={reviewIndex} {...review} />
      ))}
    </div>
  );
}

function TweetsGrid() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.4 });
  const splitColumns = splitArray([...tweets], 3);

  return (
    <div
      ref={containerRef}
      className="relative -mx-4 mt-16 grid h-[49rem] max-h-[150vh] grid-cols-1 items-start gap-8 overflow-hidden px-4 [mask-image:linear-gradient(to_bottom,#0000,#000_20%,#000_80%,#0000)] sm:mt-20 md:grid-cols-2 lg:grid-cols-3"
    >
      {isInView && (
        <>
          <TweetsColumn
            reviews={[
              ...splitColumns[0],
              ...splitColumns[2],
              ...splitColumns[1],
            ]}
            msPerPixel={30}
          />
          <TweetsColumn
            reviews={[...splitColumns[1], ...splitColumns[2]]}
            className="hidden md:block"
            msPerPixel={25}
          />
          <TweetsColumn
            reviews={splitColumns[2]}
            className="hidden lg:block"
            msPerPixel={30}
          />
        </>
      )}
    </div>
  );
}

export function Reviews() {
  return (
    <section
      id="reviews"
      aria-labelledby="reviews-title"
      className="bg-honey-50 pt-20 pb-16 sm:pt-32 sm:pb-24"
    >
      <div className="mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:max-w-8xl lg:px-12">
        <div className="flex flex-col-reverse items-center sm:flex-row sm:items-start sm:justify-between">
          <p className="mt-12 text-center text-2xl font-bold text-night-900 sm:mt-0 sm:text-left sm:text-4xl">
            Enjoyed by many (and counting)
          </p>
          <Badge name="Wall Of Love" />
        </div>
        <TweetsGrid />
      </div>
    </section>
  );
}
