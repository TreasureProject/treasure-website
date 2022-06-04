import { Fragment } from "react";
import { Disclosure, Popover, Transition } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import {
  ExternalLinkIcon,
  ChevronDownIcon,
  ArrowUpIcon,
} from "@heroicons/react/solid";
import type { LinksFunction } from "@remix-run/cloudflare";
import HeroImg from "../../public/img/hero.png";
import LogoImg from "../../public/img/logo.png";
import { MagicLogoIcon, MagicTextIcon } from "~/components/Icons";

import classNames from "clsx";
import { Link } from "@remix-run/react";

const navigation = [
  {
    name: "Learn",
    links: [
      {
        name: "About",
        href: "/about",
        isExternal: false,
      },
      {
        name: "Team",
        href: "/team",
        isExternal: false,
      },
      {
        name: "Documentation",
        href: "#",
        isExternal: true,
      },
    ],
  },
  {
    name: "Discover",
    links: [
      {
        name: "Bridgeworld",
        href: "#",
        isExternal: false,
      },
      {
        name: "Cartridges",
        href: "#",
        isExternal: false,
      },
      {
        name: "Community",
        href: "#",
        isExternal: false,
      },
      {
        name: "Infrastructure",
        href: "#",
        isExternal: false,
      },
    ],
  },
  {
    name: "Build",
    links: [
      {
        name: "Why Treasure",
        href: "#",
        isExternal: false,
      },
      {
        name: "Apply for partnership",
        href: "#",
        isExternal: true,
      },
    ],
  },
  {
    name: "Contribute",
    links: [
      {
        name: "Forum",
        href: "https://bridgeworld.treasure.lol",
        isExternal: true,
      },
      {
        name: "Vote on Snapshot",
        href: "#",
        isExternal: true,
      },
      {
        name: "Bounty Board",
        href: "#",
        isExternal: true,
      },
      {
        name: "Guilds",
        href: "#",
        isExternal: true,
      },
      {
        name: "Initiatives",
        href: "#",
        isExternal: true,
      },
      {
        name: "Talent",
        href: "#",
        isExternal: true,
      },
    ],
  },
  { name: "Marketplace", href: "#", isExternal: true },
  { name: "LP", href: "#", isExternal: true },
];

const socials = [
  {
    name: "Discord",
    href: "#",
    icon: (props: { className?: string }) => (
      <svg
        fill="currentColor"
        width="30pt"
        height="24pt"
        viewBox="0 0 30 24"
        {...props}
      >
        <g id="surface1">
          <path d="M 25.394531 2.136719 C 23.484375 1.230469 21.433594 0.5625 19.289062 0.179688 C 19.25 0.175781 19.210938 0.191406 19.191406 0.230469 C 18.929688 0.714844 18.636719 1.34375 18.429688 1.84375 C 16.125 1.484375 13.832031 1.484375 11.574219 1.84375 C 11.367188 1.335938 11.066406 0.714844 10.800781 0.230469 C 10.78125 0.195312 10.742188 0.175781 10.703125 0.179688 C 8.558594 0.5625 6.507812 1.230469 4.597656 2.136719 C 4.578125 2.144531 4.566406 2.15625 4.554688 2.171875 C 0.667969 8.171875 -0.398438 14.027344 0.125 19.808594 C 0.125 19.835938 0.140625 19.863281 0.164062 19.878906 C 2.730469 21.824219 5.214844 23.007812 7.652344 23.789062 C 7.691406 23.800781 7.734375 23.789062 7.757812 23.753906 C 8.335938 22.941406 8.851562 22.082031 9.292969 21.179688 C 9.316406 21.128906 9.292969 21.066406 9.238281 21.042969 C 8.425781 20.722656 7.648438 20.335938 6.898438 19.890625 C 6.839844 19.855469 6.835938 19.769531 6.890625 19.726562 C 7.046875 19.605469 7.203125 19.480469 7.355469 19.351562 C 7.382812 19.328125 7.421875 19.324219 7.453125 19.335938 C 12.363281 21.652344 17.675781 21.652344 22.527344 19.335938 C 22.5625 19.320312 22.597656 19.328125 22.625 19.351562 C 22.777344 19.476562 22.933594 19.605469 23.09375 19.726562 C 23.148438 19.769531 23.144531 19.855469 23.085938 19.890625 C 22.335938 20.34375 21.558594 20.722656 20.742188 21.042969 C 20.691406 21.0625 20.667969 21.128906 20.691406 21.179688 C 21.144531 22.082031 21.65625 22.941406 22.222656 23.753906 C 22.246094 23.789062 22.289062 23.800781 22.328125 23.789062 C 24.78125 23.007812 27.265625 21.824219 29.832031 19.878906 C 29.855469 19.863281 29.867188 19.835938 29.871094 19.808594 C 30.496094 13.125 28.824219 7.320312 25.433594 2.175781 C 25.425781 2.15625 25.414062 2.144531 25.394531 2.136719 Z M 10.023438 16.289062 C 8.546875 16.289062 7.328125 14.886719 7.328125 13.164062 C 7.328125 11.445312 8.523438 10.042969 10.023438 10.042969 C 11.539062 10.042969 12.746094 11.457031 12.722656 13.164062 C 12.722656 14.886719 11.527344 16.289062 10.023438 16.289062 Z M 19.992188 16.289062 C 18.515625 16.289062 17.296875 14.886719 17.296875 13.164062 C 17.296875 11.445312 18.492188 10.042969 19.992188 10.042969 C 21.507812 10.042969 22.714844 11.457031 22.691406 13.164062 C 22.691406 14.886719 21.507812 16.289062 19.992188 16.289062 Z M 19.992188 16.289062 " />
        </g>
      </svg>
    ),
  },
  {
    name: "Twitter",
    href: "#",
    icon: (props: { className?: string }) => (
      <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
        <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
      </svg>
    ),
  },
];

export const links: LinksFunction = () => {
  return [
    {
      rel: "preload",
      href: "/img/hero.png",
      as: "image",
    },
    {
      rel: "preload",
      href: "/img/logo.png",
      as: "image",
    },
    {
      rel: "preload",
      href: "/img/union.svg",
      as: "image",
    },
  ];
};

export default function Home() {
  return (
    <div className="bg-honey-25" id="top">
      <div className="relative overflow-hidden">
        <Popover as="header" className="relative">
          <div className="bg-honey-100 pt-6">
            <div className="relative mx-auto flex max-w-[96rem] items-center justify-between px-4 lg:px-6">
              <div className="flex w-full items-center justify-between lg:w-auto">
                <Link to="#">
                  <span className="sr-only">Treasure</span>
                  <img
                    className="h-8 w-auto sm:h-10"
                    src={LogoImg}
                    alt="Logo"
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
                      <Popover className="relative">
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
                                        className="-m-3 block rounded-md p-3 transition duration-150 ease-in-out hover:bg-gray-50"
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
              <a
                href="#"
                className="hidden items-center space-x-2 rounded-2xl border border-transparent bg-ruby-900 py-4 px-7 text-base font-medium text-white lg:inline-flex"
              >
                <span className="font-semibold">Buy</span>
                <span className="inline-flex space-x-1">
                  <MagicLogoIcon />
                  <MagicTextIcon />
                </span>
              </a>
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
              className="absolute inset-x-0 top-0 origin-top transform transition lg:hidden"
            >
              <div className="overflow-hidden rounded-lg bg-honey-50 shadow-md ring-1 ring-black ring-opacity-5">
                <div className="flex items-center justify-between px-5 pt-4">
                  <div>
                    <img className="h-8 w-auto" src={LogoImg} alt="Treasure" />
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
                          <Disclosure>
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
                          key={item.name}
                          href={item.href}
                          className="block px-3 py-2 font-medium text-night-900"
                        >
                          {item.name}
                        </a>
                      );
                    })}
                  </nav>
                  <div className="mt-6 px-5">
                    <a
                      href="#"
                      className="inline-flex w-full items-center justify-center space-x-2 rounded-2xl border border-transparent bg-ruby-900 py-4 px-7 text-base font-medium text-white"
                    >
                      <span className="font-semibold">Buy</span>
                      <span className="inline-flex space-x-1">
                        <MagicLogoIcon />
                        <MagicTextIcon />
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </Popover.Panel>
          </Transition>
        </Popover>
        <main>
          <div className="bg-honey-100 pt-10 sm:pt-16 lg:overflow-hidden lg:pt-8">
            <div className="mx-auto max-w-[96rem] lg:px-8">
              <div className="lg:grid lg:grid-cols-7 lg:gap-8">
                <div className="col-span-3 mx-auto max-w-lg px-4 sm:px-6 lg:flex lg:items-center lg:px-0 lg:text-left">
                  <div className="lg:py-24">
                    <h1 className="mt-4 text-7xl font-bold tracking-tight text-ruby-900 sm:mt-5 lg:mt-6 xl:text-8xl">
                      The magic of play.
                    </h1>
                    <div className="mt-12 rounded-3xl border border-honey-200 bg-honey-50 p-4 lg:max-w-xs">
                      <p className="text-night-700">
                        Treasure is a decentralized video game console
                        connecting games and communities together through
                        imagination, <span className="font-bold">$MAGIC</span>,
                        and NFTs
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-span-4 m-0 mt-12 lg:relative lg:-mb-20 xl:-mb-2">
                  <div className="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 lg:px-0">
                    <img
                      className="w-full object-contain lg:absolute lg:inset-y-0 lg:left-0 lg:h-full lg:max-w-none"
                      src={HeroImg}
                      alt="Hero"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="relative bg-ruby-900 py-6 text-honey-25 lg:py-8">
            <div className="mx-auto grid grid-cols-2 place-items-start gap-4 px-8 sm:grid-cols-4 sm:place-items-center lg:max-w-3xl xl:max-w-4xl xl:gap-12">
              <div className="flex items-center space-x-2">
                <MagicLogoIcon />
                <div>
                  <p className="text-xs font-medium">Magic Price</p>
                  <p className="text-xl font-bold lg:text-2xl">$0.40</p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <MagicLogoIcon />
                <div>
                  <p className="text-xs font-medium">Total Transactions</p>
                  <p className="text-xl font-bold lg:text-2xl">98.8M</p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <MagicLogoIcon />
                <div>
                  <p className="text-xs font-medium">Total Market Cap</p>
                  <p className="text-xl font-bold lg:text-2xl">$28.5M</p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <MagicLogoIcon />
                <div>
                  <p className="text-xs font-medium">24 Hour Volume</p>
                  <p className="text-xl font-bold lg:text-2xl">$2.4M</p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative bg-night-900 pt-16 sm:pt-24 lg:pt-32">
            <div className="mx-auto max-w-md px-4 text-center sm:max-w-3xl sm:px-6 lg:max-w-7xl lg:px-8">
              <div className="inline-block rounded-2xl bg-night-800 px-3 py-2">
                <h2 className="font-mono text-base font-medium text-night-200">
                  Core Cartridges
                </h2>
              </div>
              <p className="mx-auto mt-12 max-w-xl text-3xl font-bold tracking-tight text-honey-200 sm:text-5xl">
                Games and worlds that delight the masses
              </p>
              <div className="mt-12 flex flex-col justify-center sm:flex-row">
                <div className="relative overflow-hidden">
                  <div className="mask relative h-96 w-96 bg-[url('/img/bridgeworld.png')] bg-cover bg-no-repeat before:absolute before:right-0 before:bottom-0 before:left-0 before:h-96 before:bg-gradient-to-t before:from-night-900 before:via-transparent before:to-transparent lg:h-[28rem] lg:w-[28rem] before:lg:h-[28rem]">
                    <div className="absolute bottom-0 left-0 right-0 pb-24 text-white">
                      Bridgeworld
                    </div>
                  </div>
                </div>
                <div className="relative overflow-hidden lg:-ml-24">
                  <div className="mask relative h-96 w-96 bg-[url('/img/bridgeworld.png')] bg-cover bg-no-repeat before:absolute before:right-0 before:bottom-0 before:left-0 before:h-96 before:bg-gradient-to-t before:from-night-900 before:via-transparent before:to-transparent lg:h-[28rem] lg:w-[28rem] before:lg:h-[28rem]">
                    <div className="absolute bottom-0 left-0 right-0 pb-24 text-white">
                      Bridgeworld
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
        <footer className="bg-honey-50" aria-labelledby="footer-heading">
          <h2 id="footer-heading" className="sr-only">
            Footer
          </h2>
          <div className="mx-auto max-w-md px-4 pt-12 sm:max-w-[96rem] sm:px-6 lg:px-8 lg:pt-16">
            <div className="xl:grid xl:grid-cols-5 xl:gap-8">
              <div className="flex flex-col items-center justify-center space-y-8 sm:block xl:col-span-1">
                <img className="h-10" src={LogoImg} alt="Treasure" />
                <div className="flex space-x-6">
                  {socials.map((social) => (
                    <a
                      key={social.name}
                      className="text-ruby-900 hover:text-ruby-800"
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
              <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-4 xl:col-span-3 xl:mt-0">
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
                          <div className="inline-block rounded-xl bg-honey-100 px-2.5 py-1.5">
                            <h3 className="font-mono text-sm font-medium tracking-wider text-ruby-900">
                              {name}
                            </h3>
                          </div>
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
                  className="inline-flex w-full items-center justify-center space-x-2 rounded-2xl border border-transparent bg-ruby-900 py-4 px-7 text-base font-medium text-white sm:w-auto"
                >
                  <span className="font- font-semibold">Buy</span>
                  <span className="inline-flex space-x-1">
                    <MagicLogoIcon />
                    <MagicTextIcon />
                  </span>
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
                  className="inline-flex items-center space-x-2 rounded-xl bg-honey-100 px-3 py-2.5 font-mono font-medium text-ruby-900"
                >
                  <span>To the surface</span>{" "}
                  <ArrowUpIcon className="h-3 w-3 stroke-current stroke-1" />
                </a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
