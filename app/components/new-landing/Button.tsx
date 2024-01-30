import type { ReactNode } from "react";
import { twMerge } from "tailwind-merge";
import { Link } from "@remix-run/react";

const colors = {
  ruby: "bg-new-ruby-900 border border-new-ruby-800 text-new-honey-100  hover:bg-new-ruby-800 hover:border-new-ruby-700 hover:text-new-honey-100",
  honey: "bg-new-honey-800  text-new-night-1200 ",
  outline:
    "bg-transparent border border-new-night-100 text-new-night-100 hover:bg-new-night-100 hover:text-new-night-1000",
  float: "bg-transparent text-new-night-100 hover:bg-new-night-100/5",
};

interface Props {
  color: "ruby" | "honey" | "outline" | "float";
  to?: string;
  href?: string;
  children: ReactNode;
  className?: string;
}

const Button = ({ color = "ruby", children, className, to, href }: Props) => {
  if (to || href) {
    return (
      <Link
        to={`${to ? to : href}`}
        target={href ? "_blank" : "self"}
        className={twMerge(
          " flex h-12 cursor-pointer items-center justify-center gap-1 rounded-md px-4 text-center font-medium transition-colors focus:outline-none",
          colors[color],
          className
        )}
      >
        <p className="flex items-center justify-center gap-1 text-center font-semibold">
          {children}
        </p>
      </Link>
    );
  }

  return (
    <div
      className={twMerge(
        " flex h-12 cursor-pointer items-center justify-center gap-1 rounded-md px-4 text-center font-medium transition-colors focus:outline-none",
        colors[color],
        className
      )}
    >
      <p className="flex items-center justify-center gap-1 text-center font-semibold">
        {children}
      </p>
    </div>
  );
};

export default Button;
