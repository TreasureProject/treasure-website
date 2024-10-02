import type { AnchorHTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";
import { ExternalIcon } from "./misc/Icons";

const colors = {
  ruby: "bg-new-ruby-900 border border-new-ruby-800 text-new-honey-100  hover:bg-new-ruby-800 hover:border-new-ruby-700 hover:text-new-honey-100",
  honey: "bg-new-honey-800  text-new-night-1200 ",
  outline:
    "bg-transparent border border-new-night-100 text-new-night-100 hover:bg-new-night-100 hover:text-new-night-1000",
  float: "bg-transparent text-new-night-100 hover:bg-new-night-100/5",
};

type BaseProps = {
  children: React.ReactNode;
  className?: string;
  color: "ruby" | "honey" | "outline" | "float";
};

type ButtonAsExternal = BaseProps &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, keyof BaseProps> & {
    as: "a";
    hideExternalIcon?: boolean;
    href: string;
  };

type ButtonProps = ButtonAsExternal;

const Button = (props: ButtonProps) => {
  const style = twMerge(
    "flex h-12 cursor-pointer items-center justify-center gap-1 rounded-md px-4 text-center font-medium transition-colors focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed",
    colors[props.color],
    props.className
  );
  const { hideExternalIcon, as: _, ...rest } = props;
  return (
    <a {...rest} rel="noopender noreferrer" target="_blank" className={style}>
      {props.children}
      {!hideExternalIcon && <ExternalIcon className="w-4" />}
    </a>
  );
};

export default Button;
