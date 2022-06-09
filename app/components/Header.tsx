import { Popover, Transition, Disclosure } from "@headlessui/react";
import {
  MenuIcon,
  ChevronDownIcon,
  XIcon,
  ExternalLinkIcon,
  HomeIcon,
  ArrowRightIcon,
  ChevronRightIcon,
} from "@heroicons/react/solid";
import { Link, useLocation, useMatches } from "@remix-run/react";
import { Fragment } from "react";
import { navigation, socials } from "~/const";
import { MagicIcon, TroveIcon } from "./Icons";
import LogoImg from "../../public/img/logo.png";

import classNames from "clsx";

export const Header = () => {
  const matches = useMatches();

  const isLeafPage = matches.some((match) => !!match.handle);

  const location = useLocation();

  return (
    <Popover as="header" className="relative">
      <div className="bg-honey-100 py-6">
        <div className="relative mx-auto flex max-w-9xl items-center justify-between px-4 lg:px-12">
          <div className="flex w-full items-center justify-between lg:w-auto">
            <Link to="#">
              <span className="sr-only">Treasure</span>
              <img className="h-8 w-auto xl:h-10" src={LogoImg} alt="Logo" />
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
                  <Popover className="relative" key={item.name}>
                    {({ open }) => (
                      <>
                        <Popover.Button className="group inline-flex items-center rounded-md text-base font-medium text-night-900 focus:outline-none focus:ring-2 focus:ring-honey-500 focus:ring-offset-2">
                          <span>{item.name}</span>
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
                            <div className="overflow-hidden rounded-lg shadow-lg shadow-honey-500/50 ring-1 ring-black ring-opacity-5">
                              <div className="relative grid gap-6 bg-honey-50 px-5 py-6 sm:gap-8 sm:p-8">
                                {item.links.map((link) => (
                                  <a
                                    key={link.name}
                                    href={link.href}
                                    className="-m-3 block rounded-md p-3 transition duration-150 ease-in-out hover:bg-honey-200"
                                  >
                                    <p className="text-base font-medium text-night-900">
                                      {link.name}
                                    </p>
                                    {/* <p className="mt-1 text-sm text-gray-500">{item.description}</p> */}
                                  </a>
                                ))}
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
                  className="text-base font-medium text-night-900 hover:text-night-700"
                >
                  {item.name}
                </a>
              );
            })}
          </Popover.Group>
          <div className="flex items-center xl:space-x-8">
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
            <a
              href="#"
              className="hidden items-center space-x-2 rounded-button border border-transparent bg-ruby-900 py-3.25 px-6.5 text-base font-medium text-white hover:bg-ruby-1000 lg:inline-flex"
            >
              <span className="font-semibold">Buy</span>
              <MagicIcon />
            </a>
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
            <div className="flex items-center justify-between px-5 pt-4">
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
                                "group flex w-full justify-between rounded-xl px-4 py-2 text-left text-sm font-medium text-night-900 focus:outline-none focus-visible:ring focus-visible:ring-honey-500 focus-visible:ring-opacity-75"
                              )}
                            >
                              <span>{item.name}</span>
                              <ChevronDownIcon
                                className={classNames(
                                  open ? "text-ruby-600" : "text-ruby-900",
                                  "h-5 w-5 group-hover:text-ruby-700"
                                )}
                              />
                            </Disclosure.Button>
                            <Disclosure.Panel className="px-4 py-2 text-sm text-night-500">
                              {item.links.map((link) => (
                                <a
                                  key={link.name}
                                  href={link.href}
                                  className="block px-3 py-2 font-medium text-night-900"
                                >
                                  {link.name}
                                </a>
                              ))}
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
                      className="flex justify-between px-4 py-2 text-left text-sm font-medium text-night-900"
                    >
                      {item.name}
                      <ExternalLinkIcon className="h-4 w-4 text-ruby-900" />
                    </a>
                  );
                })}
              </nav>
              <div className="mt-6 px-5">
                <a
                  href="#"
                  className="inline-flex w-full items-center justify-center space-x-2 rounded-button border border-transparent bg-ruby-900 py-3.25 px-6.5 text-base font-medium text-white hover:bg-ruby-1000"
                >
                  <span className="font-semibold">Buy</span>
                  <MagicIcon />
                </a>
              </div>
            </div>
          </div>
        </Popover.Panel>
      </Transition>

      {/* breadcrumbs only on route other than index */}
      {isLeafPage ? (
        <div className="hidden bg-ruby-900 px-12 py-6 lg:block">
          <div className="mx-auto flex w-full max-w-9xl justify-between">
            <nav aria-label="Breadcrumb">
              <ol className="flex h-full space-x-4">
                <li className="flex">
                  <div className="flex items-center">
                    <Link
                      to="/"
                      className="inline-block w-max rounded-tag bg-ruby-1000 px-2.5 py-1.5 transition-colors hover:bg-ruby-1400"
                    >
                      <h3 className="font-mono text-sm font-medium tracking-wider text-ruby-100">
                        Home
                      </h3>
                    </Link>
                  </div>
                </li>
                {matches
                  .filter((match) => !!match.handle)
                  .map((match) => {
                    const { href, title } = match.handle.breadcrumb as {
                      href: string;
                      title: string;
                    };

                    const currentPath = location.pathname === href;

                    return (
                      <li key={match.id} className="flex">
                        <div className="flex items-center">
                          <ChevronRightIcon
                            className="h-full w-6 flex-shrink-0 text-ruby-1000"
                            aria-hidden="true"
                          />
                          <Link
                            to="/"
                            className="ml-4 inline-block w-max rounded-tag bg-honey-100 px-2.5 py-1.5 transition-colors hover:bg-honey-200"
                            aria-current={currentPath ? "page" : undefined}
                          >
                            <h3 className="font-mono text-sm font-medium tracking-wider text-ruby-900">
                              {title}
                            </h3>
                          </Link>
                        </div>
                      </li>
                    );
                  })}
              </ol>
            </nav>
            <TroveIcon
              className="h-10 w-10 text-ruby-1000"
              aria-hidden="true"
            />
          </div>
        </div>
      ) : null}
    </Popover>
  );
};
