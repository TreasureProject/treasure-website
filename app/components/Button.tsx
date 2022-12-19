import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/solid";
import { Link } from "@remix-run/react";
import type { RemixLinkProps } from "@remix-run/react/dist/components";
import type { AnchorHTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

type BaseProps = {
  children: React.ReactNode;
  className?: string;
  type?: "primary" | "secondary";
};

export type ButtonAsLink = BaseProps &
  Omit<RemixLinkProps, keyof BaseProps> & {
    as?: "link";
  };

type ButtonAsExternal = BaseProps &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, keyof BaseProps> & {
    as: "a";
    hideExternalIcon?: boolean;
    href: string;
  };

type ButtonProps = ButtonAsExternal | ButtonAsLink;

export const CTAButton = (props: ButtonProps) => {
  const style = twMerge(
    "inline-flex max-w-max cursor-pointer items-center rounded-lg border-2 border-ruby-900 bg-honey-100 px-5 py-2 text-xs font-semibold text-ruby-900 shadow-sm transition-colors duration-500 hover:bg-ruby-900 hover:text-white focus:outline-none focus:ring-2 focus:ring-ruby-500 focus:ring-offset-2 sm:text-base",
    props.type === "primary" && "bg-ruby-900 text-white hover:bg-ruby-1000",
    props.className
  );

  if (props.as === "a") {
    const { hideExternalIcon, as: _, ...rest } = props;
    return (
      <a {...rest} className={style} rel="noopener noreferrer" target="_blank">
        {props.children}
        {!props.hideExternalIcon && (
          <ArrowTopRightOnSquareIcon
            className={twMerge(
              "ml-1.5 h-4 w-4 [&>path]:stroke-ruby-900 [&>path]:stroke-[1]",
              props.type === "primary" && "[&>path]:stroke-white"
            )}
            aria-hidden="true"
          />
        )}
      </a>
    );
  }

  return (
    <Link {...props} className={style}>
      {props.children}
    </Link>
  );
};
