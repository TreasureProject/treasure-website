import {
  ArrowTopRightOnSquareIcon,
  ChevronDownIcon,
  LanguageIcon,
} from "@heroicons/react/24/solid";
import { Link, useLocation } from "@remix-run/react";
import { socials, navigation, languages } from "~/const";
import { useTranslation } from "react-i18next";
import { Menu, Transition } from "@headlessui/react";
import { Fragment } from "react";
import TreasureLogo from "@/img/TreasureLogo.svg";
import TreasureText from "@/img/TreasureText.svg";
import { MagicButton } from "./MagicButton";

const currentYear = new Date().getFullYear();

const groupedNavigation = navigation.reduce<(typeof navigation)[number][]>(
  (acc, item) => {
    if (item.group) {
      const group = acc.find((group) => group.name === item.group);
      if (group && group.links) {
        group.links.push(item);
      } else {
        acc.push({
          name: item.group,
          links: [item],
        });
      }
    } else {
      acc.push(item);
    }
    return acc;
  },
  []
);

export const Footer = () => {
  const { t } = useTranslation("index", {
    keyPrefix: "common",
  });

  const location = useLocation();

  return (
    <footer
      className="overflow-hidden bg-honey-25 dark:bg-night-900"
      aria-labelledby="footer-heading"
    >
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="mx-auto max-w-9xl px-4 pt-12 sm:px-6 lg:px-12 lg:pt-16">
        <div className="xl:grid xl:grid-cols-[1fr,1fr,1fr,1fr,1fr,max-content] xl:gap-8">
          <div className="flex flex-col items-center justify-center sm:block xl:col-span-1">
            <Link to="/" className="flex max-w-none items-center space-x-2">
              <span className="sr-only">Treasure</span>
              <img src={TreasureLogo} alt="Compass Logo" />
              <img
                src={TreasureText}
                alt="Compass Text Logo"
                className="invert dark:invert-0"
              />
            </Link>
            <Menu as="div" className="relative mt-4 inline-block text-left">
              <div>
                <Menu.Button className="inline-flex w-full justify-center rounded-md border border-honey-400/50 bg-honey-900 bg-opacity-20 px-4 py-2 text-sm font-medium text-night-800 transition-opacity focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 hover:bg-opacity-30 hover:text-night-900 dark:border-night-600 dark:bg-night-900 dark:text-night-200">
                  <LanguageIcon className="h-5 w-5" />
                  <ChevronDownIcon
                    className="ml-2 -mr-1 h-5 w-5"
                    aria-hidden="true"
                  />
                </Menu.Button>
              </div>
              <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
              >
                <Menu.Items className="absolute left-0 mt-2 w-56 origin-top-left rounded-md bg-white shadow-lg shadow-honey-900/10 ring-1 ring-honey-300 ring-opacity-5 focus:outline-none">
                  <div className="px-1 py-1">
                    {(Object.keys(languages) as (keyof typeof languages)[]).map(
                      (lang) => (
                        <Menu.Item key={lang}>
                          {({ active }) => {
                            return (
                              <Link
                                className={`${
                                  active
                                    ? "bg-honey-200/30 text-night-900"
                                    : "text-night-900"
                                } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                                to={`${
                                  location.pathname === "/"
                                    ? ""
                                    : location.pathname
                                }/?lng=${lang}`}
                              >
                                {languages[lang]}
                              </Link>
                            );
                          }}
                        </Menu.Item>
                      )
                    )}
                  </div>
                </Menu.Items>
              </Transition>
            </Menu>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:col-span-4 xl:mt-0">
            {groupedNavigation.map((item) => {
              const { name, links, href, isExternal } = item;
              if (links) {
                return (
                  <div
                    key={name}
                    className="space-y-5 text-center sm:text-left"
                  >
                    <h3 className="font-bold text-ruby-900 dark:text-[#FFFDF7]">
                      {t(name)}
                    </h3>
                    <ul className="space-y-3">
                      {links.map(({ name, isExternal, href }) => (
                        <li
                          key={name}
                          className="items-center justify-center space-x-2 sm:justify-start"
                        >
                          {isExternal ? (
                            <a
                              href={href}
                              rel="noopener noreferrer"
                              target="_blank"
                              className="text-night-800 hover:text-night-900 dark:text-[#888C93]"
                            >
                              {t(name)}
                            </a>
                          ) : (
                            <Link
                              to={href}
                              className="text-night-800 hover:text-night-900 dark:text-[#888C93]"
                            >
                              {t(name)}
                            </Link>
                          )}
                          {isExternal ? (
                            <ArrowTopRightOnSquareIcon className="inline-block h-3 w-3 fill-ruby-900 dark:fill-[#FFFDF7] [&>path]:stroke-ruby-900 [&>path]:stroke-[1] dark:[&>path]:stroke-[#FFFDF7]" />
                          ) : null}
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              }

              return (
                <div key={name} className="space-y-5 text-center sm:text-left">
                  <h3 className="font-bold text-ruby-900">{t(name)}</h3>
                  <ul className="space-y-3">
                    <li className="items-center justify-center space-x-1 sm:justify-start">
                      {isExternal ? (
                        <a
                          href={href}
                          rel="noopener noreferrer"
                          target="_blank"
                          className="text-night-800 hover:text-night-900"
                        >
                          {t(name)}
                        </a>
                      ) : (
                        <Link
                          to={href}
                          className="text-night-800 hover:text-night-900"
                        >
                          {t(name)}
                        </Link>
                      )}
                      {isExternal ? (
                        <ArrowTopRightOnSquareIcon className="inline-block h-3 w-3 fill-ruby-900 [&>path]:stroke-ruby-900 [&>path]:stroke-[1]" />
                      ) : null}
                    </li>
                  </ul>
                </div>
              );
            })}
          </div>
          <div className="mt-8 flex flex-col items-center space-y-3.5 text-right sm:mt-12 sm:flex-row sm:space-y-0 sm:space-x-3.5 xl:col-span-1 xl:mt-0 xl:flex-col xl:items-end xl:space-y-8 xl:space-x-0">
            <MagicButton />
            <div className="z-10 mx-auto flex space-x-6 py-3 sm:mx-0 sm:pl-5 xl:pl-0">
              {socials.map((social) => (
                <a
                  key={social.name}
                  className="text-night-800 hover:text-night-900 dark:text-[#FFFDF7] dark:hover:text-[#FFFDF7]/50"
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="sr-only">{social.name}</span>
                  <social.icon className="h-8 w-8" aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-12 flex flex-col-reverse items-center justify-between border-t border-honey-300 py-8 dark:border-[#1D232F] sm:flex-row">
          <p className="mt-12 text-sm text-night-700 dark:text-[#888C93] sm:mt-0">
            &copy; 2021-{currentYear} Treasure. All Rights Reserved.
          </p>
          <div className="flex items-center space-x-4 lg:space-x-6">
            <Link
              className="text-sm text-night-700 hover:text-night-900 dark:text-[#888C93] dark:hover:text-night-600"
              to="/terms-of-service"
            >
              Terms of Service
            </Link>

            <Link
              className="text-sm text-night-700 hover:text-night-900 dark:text-[#888C93] dark:hover:text-night-600"
              to="/privacy-policy"
            >
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
