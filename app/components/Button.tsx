import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/solid";
import { Link } from "@remix-run/react";
import type { RemixLinkProps } from "@remix-run/react/dist/components";
import type { AnchorHTMLAttributes, ButtonHTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

type BaseProps = {
  children: React.ReactNode;
  className?: string;
  type?: "primary" | "secondary";
};

type ButtonAsLink = BaseProps &
  Omit<RemixLinkProps, keyof BaseProps> & {
    as?: "link";
  };

type ButtonAsButton = BaseProps &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, keyof BaseProps> & {
    as: "button";
  };

type ButtonAsExternal = BaseProps &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, keyof BaseProps> & {
    as: "a";
    hideExternalIcon?: boolean;
    href: string;
  };

type ButtonProps = ButtonAsExternal | ButtonAsLink | ButtonAsButton;

export const CTAButton = (props: ButtonProps) => {
  const style = twMerge(
    "inline-flex max-w-max cursor-pointer group items-center rounded-lg border-2 border-ruby bg-honey-100 px-5 py-2 text-xs font-bold text-ruby shadow-sm transition-colors duration-500 hover:bg-ruby hover:text-white focus:outline-none focus:ring-2 focus:ring-ruby-500 focus:ring-offset-2 sm:text-base",
    props.type === "primary" && "bg-ruby text-white hover:bg-ruby-1000",
    props.className,
  );

  if (props.as === "button") {
    const { type: _, ...rest } = props;
    return (
      <button {...rest} className={style}>
        {props.children}
      </button>
    );
  }

  if (props.as === "a") {
    const { hideExternalIcon, as: _, ...rest } = props;
    return (
      <a {...rest} className={style} rel="noopener noreferrer" target="_blank">
        {props.children}
        {!hideExternalIcon && (
          <ArrowTopRightOnSquareIcon
            className={twMerge(
              "ml-1.5 h-4 w-4 transition-colors [&>path]:stroke-[1] [&>path]:stroke-ruby group-hover:[&>path]:stroke-white",
              props.type === "primary" && "[&>path]:stroke-white",
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
