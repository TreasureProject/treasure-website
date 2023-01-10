import { twMerge } from "tailwind-merge";
import { ArrowRightIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";

const ArrowRight = motion(ArrowRightIcon);

export const Arrow = ({
  dir = "right",
  className,
  ...props
}: {
  dir?: "left" | "right";
  className?: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement>) => {
  return (
    <button
      className={twMerge(
        "absolute top-1/2 inline-block -translate-y-1/2 rounded-lg border-2 border-night-900 bg-night-800 p-2 shadow-lg shadow-night-900/50 transition-colors disabled:opacity-50 hover:bg-night-800/95 sm:rounded-2xl sm:p-4",
        dir === "left"
          ? "left-4 sm:left-40 xl:left-60 2xl:left-96"
          : "right-4 sm:right-40 xl:right-60 2xl:right-96",
        className
      )}
      {...props}
    >
      <ArrowRight
        initial={false}
        animate={{
          rotate: dir === "left" ? 180 : 0,
        }}
        whileHover={{ scale: 1.1 }}
        className="h-4 w-4 sm:h-6 sm:w-6 [&>path]:stroke-night-100 [&>path]:stroke-[2]"
      />
    </button>
  );
};
