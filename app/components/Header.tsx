import { Popover, Transition, Disclosure } from "@headlessui/react";
import {
  Bars3Icon,
  ChevronDownIcon,
  XMarkIcon,
  ArrowTopRightOnSquareIcon,
} from "@heroicons/react/24/solid";
import { Link } from "@remix-run/react";
import { Fragment } from "react";
import { navigation, socials } from "~/const";
import LogoImg from "../../public/img/logo.png";

import classNames from "clsx";
import { Player } from "@lottiefiles/react-lottie-player";
import DataJson from "../lotties/data.json";
import { useTranslation } from "react-i18next";
import { useAppContext } from "~/context/App";

export const Header = () => {
  const { t } = useTranslation("index", {
    keyPrefix: "common",
  });
  const { openModal } = useAppContext();

  return (
    <>
      <Popover as="header" className="sticky top-0 z-[60] xl:relative">
        <div className="hidden bg-night-900 px-14 py-3 xl:block">
          <div className="mx-auto max-w-9xl">
            <div className="ml-auto flex max-w-max items-center space-x-8 px-0 2xl:px-12">
              <div className="space-x-8">
                {/* add blog later */}
                <a
                  href="https://magicswap.lol/"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="text-xs text-ruby-100 hover:text-ruby-200"
                >
                  MagicSwap
                </a>
                <button
                  onClick={openModal}
                  className="text-xs text-ruby-100 hover:text-ruby-200"
                >
                  Buy MAGIC
                </button>
              </div>
              <div className="flex space-x-6">
                {socials.map((social) => (
                  <a
                    key={social.name}
                    className="text-honey-200 hover:text-honey-400"
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="sr-only">{social.name}</span>
                    <social.icon className="h-5 w-5" aria-hidden="true" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="border-2 border-t border-ruby-900 sm:hidden" />
        <div className="bg-honey-25">
          <div className="relative mx-auto flex max-w-9xl items-center justify-center px-4 xl:py-8 xl:px-0">
            <div className="flex w-full items-center justify-between xl:absolute xl:left-12 xl:w-auto">
              <Link to="/">
                <span className="sr-only">Home</span>
                <Player
                  keepLastFrame
                  src={DataJson}
                  autoplay
                  className="h-16 w-40 xl:h-20 xl:w-auto"
                />
              </Link>
              <div className="-mr-2 flex items-center xl:hidden">
                <Popover.Button className="focus-ring-inset inline-flex items-center justify-center rounded-md bg-honey-200 p-2 text-ruby-900 focus:outline-none focus:ring-2 focus:ring-honey-50 hover:bg-honey-800">
                  <span className="sr-only">Open main menu</span>
                  <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                </Popover.Button>
              </div>
            </div>
            <Popover.Group
              as="nav"
              className="hidden space-x-8 xl:flex xl:space-x-16"
            >
              {navigation.map((item) => {
                if (item.links) {
                  return (
                    <Popover className="relative z-50" key={item.name}>
                      {({ open }) => (
                        <>
                          <Popover.Button className="group inline-flex items-center rounded-md text-base font-bold text-night-900 focus:outline-none focus:ring-2 focus:ring-honey-500 focus:ring-offset-2">
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
                            <Popover.Panel className="absolute left-1/2 z-40 mt-3 w-screen max-w-max -translate-x-1/2 transform px-2 sm:px-0">
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
                                          <ArrowTopRightOnSquareIcon className="ml-1.5 h-4 w-4 fill-ruby-900 [&>path]:stroke-ruby-900 [&>path]:stroke-[1]" />
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

                if (item.isExternal) {
                  return (
                    <a
                      key={item.name}
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between text-base font-bold text-night-900 hover:text-night-700"
                    >
                      {t(item.name)}
                      <ArrowTopRightOnSquareIcon className="ml-1.5 h-4 w-4 fill-ruby-900 [&>path]:stroke-ruby-900 [&>path]:stroke-[1] group-hover:[&>path]:stroke-ruby-600" />
                    </a>
                  );
                }

                return (
                  <Link
                    to={item.href}
                    key={item.name}
                    prefetch="render"
                    className="text-base font-bold text-night-900 hover:text-night-700"
                  >
                    {t(item.name)}
                  </Link>
                );
              })}
            </Popover.Group>
            <div className="absolute right-4 hidden items-center sm:right-8 xl:right-12 xl:flex xl:space-x-8">
              <Link
                to="/build"
                className="inline-flex items-center space-x-2 rounded-lg border border-transparent bg-ruby-900 py-3.25 px-6.5 text-base font-bold text-white hover:bg-ruby-1000"
              >
                Build with Treasure
              </Link>
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
            className="absolute inset-x-0 top-0 z-40 origin-top transform transition xl:hidden"
          >
            <div className="border-2 border-t border-ruby-900 sm:hidden" />
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
                  <Popover.Button className="inline-flex items-center justify-center rounded-md bg-honey-200 p-2 text-ruby-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-honey-50 hover:bg-honey-800">
                    <span className="sr-only">Close menu</span>
                    <XMarkIcon className="h-6 w-6" aria-hidden="true" />
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
                                  "group flex w-full items-center justify-between rounded-1.5xl px-4 py-2 text-left font-bold text-night-900 focus:outline-none focus-visible:ring focus-visible:ring-honey-500 focus-visible:ring-opacity-75"
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
                                        <ArrowTopRightOnSquareIcon className="ml-1.5 h-3 w-3 fill-ruby-900 [&>path]:stroke-ruby-900 [&>path]:stroke-[1]" />
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

                    if (item.isExternal) {
                      return (
                        <a
                          href={item.href}
                          key={item.name}
                          rel="noopener noreferrer"
                          target="_blank"
                          className="group flex items-center justify-between px-4 py-2 text-left font-bold text-night-900"
                        >
                          {t(item.name)}
                          <ArrowTopRightOnSquareIcon className="h-4 w-4 fill-ruby-900 [&>path]:stroke-ruby-900 [&>path]:stroke-[1] group-hover:[&>path]:stroke-ruby-600" />
                        </a>
                      );
                    }

                    return (
                      <Popover.Button
                        as={Link}
                        to={item.href}
                        key={item.name}
                        prefetch="render"
                        className="group flex items-center justify-between px-4 py-2 text-left font-bold text-night-900"
                      >
                        {t(item.name)}
                      </Popover.Button>
                    );
                  })}
                </nav>
                <div className="mt-6 px-5">
                  <Link
                    to="/build"
                    className="inline-flex w-full items-center justify-center space-x-2 rounded-lg border border-transparent bg-ruby-900 py-3.25 px-6.5 text-base font-bold text-white hover:bg-ruby-1000"
                  >
                    Build with Treasure
                  </Link>
                </div>
              </div>
            </div>
          </Popover.Panel>
        </Transition>
      </Popover>
    </>
  );
};
