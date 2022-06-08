import { ExternalLinkIcon, ArrowUpIcon } from "@heroicons/react/solid";
import { Link } from "@remix-run/react";
import { socials, navigation } from "~/const";
import { Badge } from "./Badge";
import { MagicIcon } from "./Icons";
import LogoImg from "../../public/img/logo.png";

export const Footer = () => (
  <footer className="bg-honey-50" aria-labelledby="footer-heading">
    <h2 id="footer-heading" className="sr-only">
      Footer
    </h2>
    <div className="mx-auto max-w-9xl px-4 pt-12 sm:px-6 lg:px-12 lg:pt-16">
      <div className="xl:grid xl:grid-cols-5 xl:gap-8">
        <div className="flex flex-col items-center justify-center space-y-8 sm:block xl:col-span-1">
          <img className="h-10" src={LogoImg} alt="Treasure" />
          <div className="flex space-x-6">
            {socials.map((social) => (
              <a
                key={social.name}
                className="text-night-800 hover:text-night-900"
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="sr-only">{social.name}</span>
                <social.icon className="h-6 w-6" aria-hidden="true" />
              </a>
            ))}
          </div>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4 xl:col-span-3 xl:mt-0">
          {navigation
            .filter((item) => Boolean(item.links))
            .map((item) => {
              const { name, links } = item;
              if (links) {
                return (
                  <div
                    key={name}
                    className="space-y-6 text-center sm:text-left"
                  >
                    <Badge name={name} />
                    <ul className="space-y-4">
                      {links.map(({ name, isExternal, href }) => (
                        <li
                          key={name}
                          className="flex items-center justify-center space-x-1 sm:justify-start"
                        >
                          {isExternal ? (
                            <a
                              href={href}
                              className="text-night-800 hover:text-night-700"
                            >
                              {name}
                            </a>
                          ) : (
                            <Link
                              to={href}
                              className="text-night-800 hover:text-night-700"
                            >
                              {name}
                            </Link>
                          )}
                          {isExternal ? (
                            <ExternalLinkIcon className="h-3 w-3 text-ruby-900" />
                          ) : null}
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              }

              return null;
            })}
        </div>
        <div className="mt-12 text-left xl:mt-0 xl:text-right">
          <a
            href="#"
            className="inline-flex w-full items-center justify-center space-x-2 rounded-button border border-transparent bg-ruby-900 py-3.25 px-6.5 text-base font-medium text-white hover:bg-ruby-1000 sm:w-auto"
          >
            <span className="font-semibold">Buy</span>
            <MagicIcon />
          </a>
        </div>
      </div>
      <div className="mt-12 flex flex-col-reverse items-center justify-between border-t border-honey-300 py-8 sm:flex-row">
        <p className="mt-12 text-sm text-night-700 sm:mt-0">
          &copy; 2021-2022 TreasureDAO
        </p>
        <div className="inline-block">
          <a
            href="/#top"
            className="inline-flex items-center space-x-2 rounded-button bg-honey-100 px-3 py-2.5 font-mono font-medium text-ruby-900 transition-colors duration-500 hover:bg-honey-300"
          >
            <span className="text-xs leading-5">To the surface</span>{" "}
            <ArrowUpIcon className="h-3 w-3 stroke-current stroke-1" />
          </a>
        </div>
      </div>
    </div>
  </footer>
);
