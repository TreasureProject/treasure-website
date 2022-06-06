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
import BattleFlyImg from "../../public/img/battlefly.png";

import {
  BWTextIcon,
  DiscordIcon,
  MagicLogoIcon,
  MagicTextIcon,
  SmolverseTextIcon,
  TwitterIcon,
} from "~/components/Icons";

import classNames from "clsx";
import { Link } from "@remix-run/react";
import { Badge } from "~/components/Badge";
import { CTAButton } from "~/components/Button";

const communities = [
  {
    name: "Governance (DAO)",
    description:
      "Showcasing projects and initiatives built by and with the community.",
    buttonDescription: "Button CTA",
    href: "#",
  },
  {
    name: "Guilds",
    description:
      "Showcasing projects and initiatives built by and with the community.",
    buttonDescription: "Join a Guild",
    href: "#",
  },
  {
    name: "Community Initiatives",
    description:
      "Showcasing projects and initiatives built by and with the community.",
    buttonDescription: "Button CTA",
    href: "#",
  },
  {
    name: "Bounty Board",
    description:
      "Showcasing projects and initiatives built by and with the community.",
    buttonDescription: "View Initiatives",
    href: "#",
  },
];

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

const partnerCartridges = [
  {
    name: "Battlefly",
    image: BattleFlyImg,
    discordLink: "#",
    twitterLink: "#",
  },
  {
    name: "The Lost Donkeys",
    image: BattleFlyImg,
    discordLink: "#",
    twitterLink: "#",
  },
  {
    name: "Toadstoolz",
    image: BattleFlyImg,
    discordLink: "#",
    twitterLink: "#",
  },
  {
    name: "Peek-A-Boo!",
    image: BattleFlyImg,
    discordLink: "#",
    twitterLink: "#",
  },
  {
    name: "The Lost Samurise",
    image: BattleFlyImg,
    discordLink: "#",
    twitterLink: "#",
  },
  {
    name: "Tales of Elleria",
    image: BattleFlyImg,
    discordLink: "#",
    twitterLink: "#",
  },
];

const socials = [
  {
    name: "Discord",
    href: "#",
    icon: (props: { className?: string }) => <DiscordIcon {...props} />,
  },
  {
    name: "Twitter",
    href: "#",
    icon: (props: { className?: string }) => <TwitterIcon {...props} />,
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
      href: "/img/battlefly.png",
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
            <div className="relative mx-auto flex max-w-9xl items-center justify-between px-4 lg:px-12">
              <div className="flex w-full items-center justify-between lg:w-auto">
                <Link to="#">
                  <span className="sr-only">Treasure</span>
                  <img
                    className="h-6 w-auto sm:h-8 xl:h-10"
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
                <div className="hidden space-x-4 xl:flex">
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
                <a
                  href="#"
                  className="hidden items-center space-x-2 rounded-2xl border border-transparent bg-ruby-900 py-3.5 px-7 text-base font-medium text-white hover:bg-ruby-1000 lg:inline-flex"
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
              <div className="overflow-hidden bg-honey-50 shadow-md ring-1 ring-black ring-opacity-5">
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
                      className="inline-flex w-full items-center justify-center space-x-2 rounded-2xl border border-transparent bg-ruby-900 py-3.5 px-7 text-base font-medium text-white hover:bg-ruby-1000"
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
            <div className="mx-auto max-w-9xl lg:px-12">
              <div className="lg:grid lg:grid-cols-7 lg:gap-8">
                <div className="col-span-3 mx-auto max-w-lg px-4 sm:px-6 lg:flex lg:items-center lg:px-0 lg:text-left">
                  <div className="lg:py-12 xl:py-24">
                    <h1 className="mt-4 text-7xl font-bold tracking-tight text-ruby-900 sm:mt-5 lg:mt-6 xl:text-8xl">
                      The magic of play.
                    </h1>
                    <div className="mt-12 rounded-3xl border border-honey-200 bg-honey-50 px-12 py-11 lg:max-w-sm">
                      <p className="text-night-700">
                        Treasure is a decentralized video game console
                        connecting games and communities together through
                        imagination, <span className="font-bold">$MAGIC</span>,
                        and NFTs
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-span-4 m-0 mt-12 lg:relative lg:-mb-12 xl:-mb-2">
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
            <div className="mx-auto max-w-md px-4 text-center sm:max-w-3xl sm:px-6 lg:max-w-9xl lg:px-12">
              <div className="inline-block rounded-2xl bg-night-800 px-3 py-2">
                <h2 className="font-mono text-base font-medium text-night-200">
                  Core Cartridges
                </h2>
              </div>
              <p className="mx-auto mt-12 max-w-xl text-3xl font-bold tracking-tight text-honey-200 sm:text-5xl">
                Games and worlds that delight the masses
              </p>
              <div className="mt-12 flex flex-col justify-center lg:flex-row">
                <div className="group relative overflow-hidden">
                  <div className="relative h-96 bg-[url('/img/bridgeworld.png')] bg-cover bg-no-repeat [mask-repeat:no-repeat] [mask-image:url('/img/union.svg')] [mask-size:contain] [mask-position:center] before:absolute before:right-0 before:bottom-0 before:left-0 before:h-96 before:bg-gradient-to-t before:from-night-900 before:via-transparent before:to-transparent before:transition-colors before:duration-500 before:group-hover:bg-night-800/50 motion-reduce:before:transition-none lg:h-[28rem] lg:w-[28rem] before:lg:h-[28rem]">
                    <div className="absolute bottom-0 left-0 right-0 flex flex-col items-center justify-center pb-4">
                      <BWTextIcon className="w-48 lg:w-60" />
                      <div className="mt-2 flex space-x-3 rounded-xl bg-night-900 p-2">
                        <a
                          className="text-night-600 hover:text-night-700"
                          href="#"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <span className="sr-only">
                            Bridgeworld Discord Link
                          </span>
                          <DiscordIcon className="h-6 w-6" aria-hidden="true" />
                        </a>
                        <a
                          className="text-night-600 hover:text-night-700"
                          href="#"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <span className="sr-only">
                            Bridgeworld Twitter Link
                          </span>
                          <TwitterIcon className="h-6 w-6" aria-hidden="true" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="group relative overflow-hidden lg:-ml-24">
                  <div className="relative h-96 bg-[url('/img/smolverse.png')] bg-[length:310px_470px] bg-bottom bg-no-repeat [mask-repeat:no-repeat] [mask-image:url('/img/union.svg')] [mask-size:contain] [mask-position:center] before:absolute before:right-0 before:bottom-0 before:left-0 before:h-96 before:bg-gradient-to-t before:from-night-900 before:via-transparent before:to-transparent before:transition-colors before:duration-500 before:group-hover:bg-night-800/50 motion-reduce:before:transition-none lg:h-[28rem] lg:w-[28rem] before:lg:h-[28rem]">
                    <div className="absolute bottom-0 left-0 right-0 flex flex-col items-center justify-center pb-4">
                      <SmolverseTextIcon className="w-48 lg:w-60" />
                      <div className="mt-2 flex space-x-3 rounded-xl bg-night-900 p-2">
                        <a
                          className="text-night-600 hover:text-night-800"
                          href="#"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <span className="sr-only">
                            Smolverse Discord Link
                          </span>
                          <DiscordIcon className="h-6 w-6" aria-hidden="true" />
                        </a>
                        <a
                          className="text-night-600 hover:text-night-800"
                          href="#"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <span className="sr-only">
                            Smolverse Twitter Link
                          </span>
                          <TwitterIcon className="h-6 w-6" aria-hidden="true" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-14 inline-block rounded-2xl bg-night-800 px-3 py-2">
                <h2 className="font-mono text-base font-medium text-night-200">
                  Partner Cartridges
                </h2>
              </div>
            </div>
            <div className="relative mt-12 before:absolute before:left-0 before:bottom-0 before:top-0 before:bg-gradient-to-r before:from-night-900 before:to-night-900/10 after:absolute after:right-0 after:bottom-0 after:top-0 after:bg-gradient-to-l after:from-night-900 after:to-night-900/10 before:sm:w-6 after:sm:w-6">
              <div className="flex w-full snap-x snap-mandatory gap-6 overflow-x-auto pb-12">
                <div className="shrink-0 snap-center">
                  <div></div>
                </div>
                {partnerCartridges.map((cartridge) => (
                  <div
                    key={cartridge.name}
                    className="relative shrink-0 snap-center overflow-hidden rounded-xl before:absolute before:right-0 before:bottom-0 before:left-0 before:h-96 before:bg-gradient-to-t before:from-night-900 before:via-transparent before:to-transparent before:transition-colors before:duration-500 before:hover:bg-night-900/30 motion-reduce:before:transition-none"
                  >
                    <img className="object-contain" src={cartridge.image} />
                    <div className="absolute bottom-0 left-0 right-0 flex h-full flex-col items-center justify-center">
                      <div className="rounded-xl bg-ruby-900 px-2.5 py-1.5 font-mono text-white">
                        {cartridge.name}
                      </div>
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 mx-auto mb-6 mt-2 flex w-min items-center justify-center space-x-3 rounded-xl bg-night-900 p-2">
                      <a
                        className="text-night-600 hover:text-night-800"
                        href={cartridge.discordLink}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <span className="sr-only">
                          {cartridge.name} Discord Link
                        </span>
                        <DiscordIcon className="h-6 w-6" aria-hidden="true" />
                      </a>
                      <a
                        className="text-night-600 hover:text-night-800"
                        href={cartridge.twitterLink}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <span className="sr-only">
                          {cartridge.name} Twitter Link
                        </span>
                        <TwitterIcon className="h-6 w-6" aria-hidden="true" />
                      </a>
                    </div>
                  </div>
                ))}
                <div className="shrink-0 snap-center">
                  <div></div>
                </div>
              </div>
            </div>
          </div>
          <div className="relative bg-honey-100 pt-16 pb-24">
            <div className="mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:max-w-9xl lg:px-12">
              <div className="flex flex-col-reverse items-center sm:flex-row sm:items-start sm:justify-between">
                <p className="mt-12 max-w-lg text-center text-2xl font-bold text-night-900 sm:mt-0 sm:text-left sm:text-4xl">
                  The common thread that connects us all - community and good
                  times.
                </p>
                <Badge name="Community" />
              </div>
              <div className="mt-12 grid gap-x-11 gap-y-12 sm:grid-cols-2">
                {communities.map((community) => (
                  <div
                    key={community.name}
                    className="relative flex flex-col rounded-2xl bg-honey-50 px-2 pt-6 xl:flex-row"
                  >
                    <div className="flex basis-7/12 flex-col items-start justify-between space-y-6 pl-8 pr-20 pt-2 pb-8">
                      <p className="text-2xl font-semibold text-night-800">
                        {community.name}
                      </p>
                      <p className="text-night-700">{community.description}</p>
                      <CTAButton>
                        <div className="flex items-center space-x-1">
                          <span>{community.buttonDescription}</span>
                          <ExternalLinkIcon className="h-4 w-4 text-ruby-900" />
                        </div>
                      </CTAButton>
                    </div>
                    <div className="flex-1">
                      <img className="h-full" src={HeroImg} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </main>
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
                  className="inline-flex w-full items-center justify-center space-x-2 rounded-2xl border border-transparent bg-ruby-900 py-3.5 px-7 text-base font-medium text-white hover:bg-ruby-1000 sm:w-auto"
                >
                  <span className="font-semibold">Buy</span>
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
