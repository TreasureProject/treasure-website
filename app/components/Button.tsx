import { ExternalLinkIcon } from "@heroicons/react/solid";
import { Link } from "@remix-run/react";
import type { RemixLinkProps } from "@remix-run/react/components";

export const CTAButton = ({
  children,
  ...rest
}: {
  children: React.ReactNode;
} & React.AnchorHTMLAttributes<HTMLAnchorElement>) => (
  <a
    className="inline-flex cursor-pointer items-center rounded-button border-2 border-ruby-900 bg-honey-100 px-5 py-2 text-xs font-bold text-ruby-900 shadow-sm transition-colors duration-500 hover:bg-ruby-900 hover:text-white focus:outline-none focus:ring-2 focus:ring-ruby-500 focus:ring-offset-2 sm:text-base"
    rel="noopener noreferrer"
    target="_blank"
    {...rest}
  >
    {children}
    <ExternalLinkIcon className="ml-1.5 h-4 w-4" aria-hidden="true" />
  </a>
);

export const InternalCTAButton = (
  props: RemixLinkProps & React.RefAttributes<HTMLAnchorElement>
) => (
  <Link
    prefetch="render"
    className="inline-flex cursor-pointer items-center rounded-button border-2 border-ruby-900 bg-honey-100 px-5 py-2 text-xs font-bold text-ruby-900 shadow-sm transition-colors duration-500 hover:bg-ruby-900 hover:text-white focus:outline-none focus:ring-2 focus:ring-ruby-500 focus:ring-offset-2 sm:text-base"
    {...props}
  >
    {props.children}
  </Link>
);
