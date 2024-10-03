import { Link } from "@remix-run/react";
import type { RemixLinkProps } from "@remix-run/react/dist/components";
import type { AnchorHTMLAttributes, ButtonHTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";
import { ExternalIcon } from "./misc/Icons";

const colors = {
  ruby: "bg-ruby border border-ruby-800 text-honey-100  hover:bg-ruby-800 hover:border-ruby-700 hover:text-honey-100",
  honey: "bg-honey text-night-800 ",
  outline:
    "bg-transparent border border-night-100 text-cream hover:bg-night-100 hover:text-cream0",
  float: "bg-transparent text-cream hover:bg-night-100/5",
};

type BaseProps = {
  children: React.ReactNode;
  className?: string;
  color: "ruby" | "honey" | "outline" | "float";
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

const Button = (props: ButtonProps) => {
  const style = twMerge(
    "flex h-12 cursor-pointer items-center justify-center gap-1 rounded-md px-4 text-center font-medium transition-colors focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed",
    colors[props.color],
    props.className,
  );
  if (props.as === "a") {
    const { hideExternalIcon, as: _, ...rest } = props;
    return (
      <a {...rest} rel="noopender noreferrer" target="_blank" className={style}>
        {props.children}
        {!hideExternalIcon && <ExternalIcon className="w-4" />}
      </a>
    );
  }

  if (props.as === "button") {
    const { as: _, ...rest } = props;
    return (
      <button {...rest} className={style}>
        {props.children}
      </button>
    );
  }

  const { as: __, ...rest } = props;

  return (
    <Link {...rest} className={style}>
      {props.children}
    </Link>
  );
};

export default Button;
