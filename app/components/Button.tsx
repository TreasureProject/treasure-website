import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/solid";
import { Link } from "@remix-run/react";
import type { RemixLinkProps } from "@remix-run/react/dist/components";
import { twMerge } from "tailwind-merge";

export const CTAButton = ({
  children,
  className,
  type = "secondary",
  hideExternalIcon = false,
  ...rest
}: {
  children: React.ReactNode;
  hideExternalIcon?: boolean;
  type?: "primary" | "secondary";
} & React.AnchorHTMLAttributes<HTMLAnchorElement>) => (
  <a
    className={twMerge(
      "inline-flex w-max cursor-pointer items-center rounded-lg border-2 border-ruby-900 bg-honey-100 px-5 py-2 text-xs font-semibold text-ruby-900 shadow-sm transition-colors duration-500 hover:bg-ruby-900 hover:text-white focus:outline-none focus:ring-2 focus:ring-ruby-500 focus:ring-offset-2 sm:text-base",
      type === "primary" && "bg-ruby-900 text-white hover:bg-ruby-1000",
      className
    )}
    rel="noopener noreferrer"
    target="_blank"
    {...rest}
  >
    {children}
    {!hideExternalIcon && (
      <ArrowTopRightOnSquareIcon
        className={twMerge(
          "ml-1.5 h-4 w-4 [&>path]:stroke-ruby-900 [&>path]:stroke-[1]",
          type === "primary" && "[&>path]:stroke-white"
        )}
        aria-hidden="true"
      />
    )}
  </a>
);

export const InternalCTAButton = ({
  children,
  className,
  ...rest
}: {
  children: React.ReactNode;
} & RemixLinkProps &
  React.RefAttributes<HTMLAnchorElement>) => (
  <Link
    className={twMerge(
      "inline-flex w-max cursor-pointer items-center rounded-button border-2 border-ruby-900 bg-honey-100 px-5 py-2 text-xs font-bold text-ruby-900 shadow-sm transition-colors duration-500 hover:bg-ruby-900 hover:text-white focus:outline-none focus:ring-2 focus:ring-ruby-500 focus:ring-offset-2 sm:text-base",
      className
    )}
    {...rest}
  >
    {children}
  </Link>
);
