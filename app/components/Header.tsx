import { Popover, Transition, Disclosure } from "@headlessui/react";
import {
  MenuIcon,
  ChevronDownIcon,
  XIcon,
  ExternalLinkIcon,
  ChevronRightIcon,
} from "@heroicons/react/solid";
import { Link, useLocation, useMatches } from "@remix-run/react";
import { Fragment } from "react";
import { navigation, socials } from "~/const";
import { MagicIcon, TroveRevertedIcon } from "./Icons";
import LogoImg from "../../public/img/logo.png";

import classNames from "clsx";
import { Player } from "@lottiefiles/react-lottie-player";
import DataJson from "../lotties/data.json";
import { useTranslation } from "react-i18next";

export const Header = ({ openModal }: { openModal: () => void }) => {
  const matches = useMatches();

  const { t } = useTranslation("index", {
    keyPrefix: "common",
  });

  const isLeafPage = matches.some((match) => !!match.handle?.breadcrumb);

  const isBlogPage = matches.some((match) => match.id.includes("$slug"));

  const location = useLocation();

  return (
    <>
      <Popover as="header" className="sticky top-0 z-20 lg:relative">
        <div className="bg-honey-100 py-4 sm:py-0">
          <div className="relative mx-auto flex max-w-9xl items-center justify-center px-4 lg:py-8 lg:px-0">
            <div className="flex w-full items-center justify-between lg:absolute lg:left-12 lg:w-auto">
              <Link to="/">
                <span className="sr-only">Home</span>
                <Player
                  keepLastFrame
                  src={DataJson}
                  autoplay
                  className="h-16 w-40 xl:h-20 xl:w-auto"
                />
              </Link>
              <div className="-mr-2 flex items-center lg:hidden">
                <Popover.Button className="focus-ring-inset inline-flex items-center justify-center rounded-md bg-honey-200 p-2 text-ruby-900 hover:bg-honey-800 focus:outline-none focus:ring-2 focus:ring-honey-50">
                  <span className="sr-only">Open main menu</span>
                  <MenuIcon className="h-6 w-6" aria-hidden="true" />
                </Popover.Button>
              </div>
            </div>
            <Popover.Group as="nav" className="hidden space-x-6 lg:flex">
              {navigation.map((item) => {
                if (item.links) {
                  return (
                    <Popover className="relative z-20" key={item.name}>
                      {({ open }) => (
                        <>
                          <Popover.Button className="group inline-flex items-center rounded-md text-base font-medium text-night-900 focus:outline-none focus:ring-2 focus:ring-honey-500 focus:ring-offset-2">
                            <span>{t(item.name)}</span>
                            <ChevronDownIcon
                              className={classNames(
                                open ? "text-ruby-600" : "text-ruby-900",
                                "ml-1 h-5 w-5 group-hover:text-ruby-700"
                              )}
                              aria-hidden="true"
                            />
                          </Popover.Button>

                          <Transition
                            as={Fragment}
                            enter="transition ease-out duration-200"
                            enterFrom="opacity-0 translate-y-1"
                            enterTo="opacity-100 translate-y-0"
                            leave="transition ease-in duration-150"
                            leaveFrom="opacity-100 translate-y-0"
                            leaveTo="opacity-0 translate-y-1"
                          >
                            <Popover.Panel className="absolute left-1/2 z-10 mt-3 w-screen max-w-xs -translate-x-1/2 transform px-2 sm:px-0">
                              <div className="overflow-hidden rounded-lg shadow-lg shadow-honey-500/30 ring-1 ring-black ring-opacity-5">
                                <div className="relative grid gap-6 bg-honey-50 px-5 py-6 sm:gap-8 sm:p-8">
                                  {item.links.map((link) => {
                                    if (link.isExternal) {
                                      return (
                                        <Popover.Button
                                          as="a"
                                          key={link.name}
                                          href={link.href}
                                          target="_blank"
                                          rel="noopener noreferrer"
                                          className="-m-3 flex items-center rounded-md p-3 transition duration-150 ease-in-out hover:bg-honey-200"
                                        >
                                          <span className="text-base font-medium text-night-900">
                                            {t(link.name)}
                                          </span>
                                          <ExternalLinkIcon className="ml-1 h-4 w-4 text-ruby-900" />
                                        </Popover.Button>
                                      );
                                    }
                                    return (
                                      <Popover.Button
                                        as={Link}
                                        key={link.name}
                                        to={link.href}
                                        prefetch="render"
                                        className="-m-3 block rounded-md p-3 transition duration-150 ease-in-out hover:bg-honey-200"
                                      >
                                        <p className="text-base font-medium text-night-900">
                                          {t(link.name)}
                                        </p>
                                      </Popover.Button>
                                    );
                                  })}
                                </div>
                              </div>
                            </Popover.Panel>
                          </Transition>
                        </>
                      )}
                    </Popover>
                  );
                }

                return (
                  <a
                    key={item.name}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-base font-medium text-night-900 hover:text-night-700"
                  >
                    {t(item.name)}
                  </a>
                );
              })}
            </Popover.Group>
            <div className="absolute right-4 hidden items-center sm:right-8 lg:right-12 lg:flex xl:space-x-8">
              <div className="hidden divide-x divide-honey-300 xl:flex">
                {socials.map((social) => (
                  <a
                    key={social.name}
                    className="px-4 text-night-800 hover:text-night-900"
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="sr-only">{social.name}</span>
                    <social.icon className="h-6 w-6" aria-hidden="true" />
                  </a>
                ))}
              </div>
              <button
                onClick={openModal}
                className="inline-flex items-center space-x-2 rounded-button border border-transparent bg-ruby-900 py-3.25 px-6.5 text-base font-medium text-white hover:bg-ruby-1000"
              >
                <span className="font-semibold">Buy</span>
                <MagicIcon />
              </button>
            </div>
          </div>
        </div>

        <Transition
          as={Fragment}
          enter="duration-150 ease-out"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="duration-100 ease-in"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <Popover.Panel
            focus
            className="absolute inset-x-0 top-0 z-10 origin-top transform transition lg:hidden"
          >
            <div className="overflow-hidden bg-honey-50 shadow-md ring-1 ring-black ring-opacity-5">
              <div className="flex items-center justify-between px-4 pt-4 sm:px-8 sm:pt-6">
                <div>
                  <img
                    className="h-8 w-auto xl:h-10"
                    src={LogoImg}
                    alt="Treasure"
                  />
                </div>
                <div className="-mr-2">
                  <Popover.Button className="inline-flex items-center justify-center rounded-md bg-honey-200 p-2 text-ruby-900 hover:bg-honey-800 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-honey-50">
                    <span className="sr-only">Close menu</span>
                    <XIcon className="h-6 w-6" aria-hidden="true" />
                  </Popover.Button>
                </div>
              </div>
              <div className="pt-5 pb-6">
                <nav className="space-y-1 px-2">
                  {navigation.map((item) => {
                    if (item.links) {
                      return (
                        <Disclosure key={item.name}>
                          {({ open }) => (
                            <>
                              <Disclosure.Button
                                className={classNames(
                                  open && "bg-honey-200",
                                  "group flex w-full items-center justify-between rounded-1.5xl px-4 py-2 text-left font-medium text-night-900 focus:outline-none focus-visible:ring focus-visible:ring-honey-500 focus-visible:ring-opacity-75"
                                )}
                              >
                                <span>{t(item.name)}</span>
                                <ChevronDownIcon
                                  className={classNames(
                                    open ? "text-ruby-600" : "text-ruby-900",
                                    "h-5 w-5 group-hover:text-ruby-700"
                                  )}
                                />
                              </Disclosure.Button>
                              <Disclosure.Panel className="px-4 py-2 text-sm text-night-500">
                                {item.links.map((link) => {
                                  if (link.isExternal) {
                                    return (
                                      <Popover.Button
                                        as="a"
                                        key={link.name}
                                        href={link.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center px-3 py-2 font-medium text-night-900"
                                      >
                                        <span>{t(link.name)}</span>
                                        <ExternalLinkIcon className="ml-1 h-3 w-3 text-ruby-900" />
                                      </Popover.Button>
                                    );
                                  }
                                  return (
                                    <Popover.Button
                                      as={Link}
                                      key={link.name}
                                      to={link.href}
                                      prefetch="render"
                                      className="block px-3 py-2 font-medium text-night-900"
                                    >
                                      {t(link.name)}
                                    </Popover.Button>
                                  );
                                })}
                              </Disclosure.Panel>
                            </>
                          )}
                        </Disclosure>
                      );
                    }

                    return (
                      <a
                        href={item.href}
                        key={item.name}
                        rel="noopener noreferrer"
                        target="_blank"
                        className="group flex items-center justify-between px-4 py-2 text-left font-medium text-night-900"
                      >
                        {t(item.name)}
                        <ExternalLinkIcon className="h-4 w-4 text-ruby-900 group-hover:text-ruby-700" />
                      </a>
                    );
                  })}
                </nav>
                <div className="mt-6 px-5">
                  <button
                    onClick={openModal}
                    className="inline-flex w-full items-center justify-center space-x-2 rounded-button border border-transparent bg-ruby-900 py-3.25 px-6.5 text-base font-medium text-white hover:bg-ruby-1000"
                  >
                    <span className="font-semibold">Buy</span>
                    <MagicIcon />
                  </button>
                </div>
              </div>
            </div>
          </Popover.Panel>
        </Transition>
      </Popover>
      {/* breadcrumbs only on route other than index */}
      {isLeafPage ? (
        <div className="sticky top-0 z-10 hidden bg-ruby-900 py-3.5 lg:block">
          <div className="mx-auto flex w-full max-w-9xl justify-between px-4 lg:px-12">
            <nav aria-label="Breadcrumb">
              <ol className="flex h-full space-x-4">
                <li className="flex">
                  <div className="flex items-center">
                    <Link
                      to="/"
                      className="inline-block w-max rounded-tag bg-ruby-1000 px-2.5 py-1.5 transition-colors hover:bg-ruby-1400"
                    >
                      <h3 className="font-mono text-sm font-medium text-ruby-100">
                        Home
                      </h3>
                    </Link>
                  </div>
                </li>
                {isBlogPage ? (
                  <li className="flex">
                    <div className="flex items-center">
                      <ChevronRightIcon
                        className="h-full w-6 flex-shrink-0 text-ruby-1000"
                        aria-hidden="true"
                      />
                      <Link
                        to="/blog"
                        className="ml-4 inline-block w-max rounded-tag bg-ruby-1000 px-2.5 py-1.5 transition-colors hover:bg-ruby-1400"
                      >
                        <h3 className="font-mono text-sm font-medium text-ruby-100">
                          Blog
                        </h3>
                      </Link>
                    </div>
                  </li>
                ) : null}
                {matches
                  .filter((match) => !!match.handle.breadcrumb)
                  .map((match) => {
                    let href: string, title: string;

                    if (typeof match.handle.breadcrumb === "object") {
                      href = match.handle.breadcrumb.href as string;
                      title = match.handle.breadcrumb.title as string;
                    } else {
                      const { href: breadcrumbHref, title: breadcrumbTitle } =
                        match.handle.breadcrumb(match.params) as {
                          href: string;
                          title: string;
                        };
                      href = breadcrumbHref;
                      title = breadcrumbTitle;
                    }

                    const currentPath = location.pathname === href;

                    return (
                      <li key={match.id} className="flex">
                        <div className="flex items-center">
                          <ChevronRightIcon
                            className="h-full w-6 flex-shrink-0 text-ruby-1000"
                            aria-hidden="true"
                          />
                          <Link
                            to={href}
                            className="ml-4 inline-block w-max rounded-tag bg-honey-100 px-2.5 py-1.5 transition-colors hover:bg-honey-200"
                            aria-current={currentPath ? "page" : undefined}
                          >
                            <h3 className="font-mono text-sm font-medium text-ruby-900">
                              {typeof match.handle.breadcrumb === "function"
                                ? title
                                : t(title)}
                            </h3>
                          </Link>
                        </div>
                      </li>
                    );
                  })}
              </ol>
            </nav>
            <a
              href="https://trove.treasure.lol"
              rel="noopener noreferrer"
              target="_blank"
              className="inline-flex items-center rounded-button bg-ruby-1000 px-5 py-3 text-sm font-bold text-white shadow-sm transition-colors duration-500 hover:bg-ruby-1400/50 focus:outline-none focus:ring-2 focus:ring-ruby-900 focus:ring-offset-2 sm:text-base"
            >
              {t("Marketplace")}
              <TroveRevertedIcon
                className="ml-4 h-6 w-6 text-white"
                aria-hidden="true"
              />
            </a>
          </div>
        </div>
      ) : null}
    </>
  );
};
