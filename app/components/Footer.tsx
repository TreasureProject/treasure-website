import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/solid";
import { Link } from "@remix-run/react";
import { socials, navigation } from "~/const";
import { MagicIcon } from "./Icons";
import LogoImg from "../../public/img/logo.png";
import { useTranslation } from "react-i18next";
import React from "react";

const groupedNavigation = navigation.reduce<typeof navigation[number][]>(
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

export const Footer = ({ openModal }: { openModal: () => void }) => {
  const { t } = useTranslation("index", {
    keyPrefix: "common",
  });

  return (
    <footer className="bg-honey-25" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="mx-auto max-w-9xl px-4 pt-12 sm:px-6 lg:px-12 lg:pt-16">
        <div className="xl:grid xl:grid-cols-[1fr,1fr,1fr,1fr,1fr,max-content] xl:gap-8">
          <div className="flex flex-col items-center justify-center sm:block xl:col-span-1">
            <Link to="/">
              <span className="sr-only">Treasure</span>
              <img className="h-10" src={LogoImg} alt="Treasure" />
            </Link>
            <div className="mt-3.5 w-2/3 sm:w-1/3 xl:w-full">
              <p className="text-center text-xs text-night-700 sm:text-left">
                Treasure is the decentralized gaming ecosystem bringing games
                and players together through MAGIC.
              </p>
            </div>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:col-span-4 xl:mt-0">
            {groupedNavigation.map((item) => {
              const { name, links, href, isExternal } = item;
              if (links) {
                return (
                  <div
                    key={name}
                    className="space-y-6 text-center sm:text-left"
                  >
                    <h3 className="font-bold text-ruby-900">{t(name)}</h3>
                    <ul className="space-y-4">
                      {links.map(({ name, isExternal, href }) => (
                        <li
                          key={name}
                          className="flex items-center justify-center space-x-1 sm:justify-start"
                        >
                          {isExternal ? (
                            <a
                              href={href}
                              rel="noopener noreferrer"
                              target="_blank"
                              className="text-night-800 hover:text-night-700"
                            >
                              {t(name)}
                            </a>
                          ) : (
                            <Link
                              to={href}
                              className="text-night-800 hover:text-night-700"
                            >
                              {t(name)}
                            </Link>
                          )}
                          {isExternal ? (
                            <ArrowTopRightOnSquareIcon className="h-3 w-3 fill-ruby-900 [&>path]:stroke-ruby-900 [&>path]:stroke-[1]" />
                          ) : null}
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              }

              return (
                <div key={name} className="space-y-6 text-center sm:text-left">
                  <h3 className="font-bold text-ruby-900">{t(name)}</h3>
                  <ul className="space-y-4">
                    <li className="flex items-center justify-center space-x-1 sm:justify-start">
                      {isExternal ? (
                        <a
                          href={href}
                          rel="noopener noreferrer"
                          target="_blank"
                          className="text-night-800 hover:text-night-700"
                        >
                          {t(name)}
                        </a>
                      ) : (
                        <Link
                          to={href}
                          className="text-night-800 hover:text-night-700"
                        >
                          {t(name)}
                        </Link>
                      )}
                      {isExternal ? (
                        <ArrowTopRightOnSquareIcon className="h-3 w-3 fill-ruby-900 [&>path]:stroke-ruby-900 [&>path]:stroke-[1]" />
                      ) : null}
                    </li>
                  </ul>
                </div>
              );
            })}
          </div>
          <div className="mt-8 flex flex-col items-end space-y-3.5 text-right sm:mt-12 sm:flex-row sm:space-y-0 sm:space-x-3.5 xl:col-span-1 xl:mt-0 xl:flex-col xl:space-y-3.5 xl:space-x-0">
            <Link
              to="/build"
              className="inline-flex w-full items-center justify-center space-x-2 whitespace-nowrap rounded-lg border border-transparent bg-ruby-900 py-3.25 px-6.5 text-base font-bold text-white hover:bg-ruby-1000 sm:w-auto"
            >
              Build with Treasure
            </Link>
            <button
              onClick={openModal}
              className="inline-flex w-full items-center justify-center space-x-2 rounded-lg border-2 border-ruby-900 bg-honey-50 py-3.25 px-6.5 text-base font-medium text-ruby-900 hover:bg-honey-200 sm:w-auto"
            >
              <span className="font-bold">Buy</span>
              <MagicIcon className="fill-ruby-900" />
            </button>
          </div>
        </div>
        <div className="mt-12 flex flex-col-reverse items-center justify-between border-t border-honey-300 py-8 sm:flex-row">
          <p className="mt-12 text-sm text-night-700 sm:mt-0">
            &copy; 2021-2022 Treasure
          </p>
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
                <social.icon
                  className="h-6 w-6 sm:h-8 sm:w-8"
                  aria-hidden="true"
                />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};
