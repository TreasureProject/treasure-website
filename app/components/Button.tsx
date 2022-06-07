export const CTAButton = (props: React.HTMLAttributes<HTMLAnchorElement>) => (
  <a
    className="inline-flex items-center rounded-2xl border-2 border-ruby-900 bg-honey-100 px-5 py-2 text-sm font-bold text-ruby-900 shadow-sm transition-colors duration-500 hover:bg-ruby-900 hover:text-white focus:outline-none focus:ring-2 focus:ring-ruby-500 focus:ring-offset-2"
    {...props}
  >
    {props.children}
  </a>
);
