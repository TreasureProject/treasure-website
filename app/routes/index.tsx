import { Fragment } from "react";
import { Disclosure, Popover, Transition } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import {
  ExternalLinkIcon,
  ChevronDownIcon,
  ArrowUpIcon,
} from "@heroicons/react/solid";
import type { LinksFunction, LoaderFunction } from "@remix-run/cloudflare";
import { json } from "@remix-run/cloudflare";
import HeroImg from "../../public/img/hero.png";
import LogoImg from "../../public/img/logo.png";

import {
  BWTextIcon,
  DiscordIcon,
  MagicLogoIcon,
  MagicTextIcon,
  SmolverseTextIcon,
  TwitterIcon,
} from "~/components/Icons";

import classNames from "clsx";
import { Link, useLoaderData } from "@remix-run/react";
import { Badge } from "~/components/Badge";
import { CTAButton } from "~/components/Button";
import { TwitterCard } from "~/components/TwitterCard";
import {
  communities,
  Infrastructures,
  navigation,
  partnerCartridges,
  partners,
  socials,
  tweets,
} from "~/const";
import { getPosts } from "~/utils/posts.server";

type LoaderData = {
  data: Awaited<ReturnType<typeof getPosts>>;
};

export const loader: LoaderFunction = async () => {
  return json<LoaderData>({
    data: await getPosts(),
  });
};

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
  ];
};

export default function Home() {
  const { data } = useLoaderData<LoaderData>();

  console.log(data);

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
                    className="h-8 w-auto xl:h-10"
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
                  <p className="text-sm font-bold">Magic Price</p>
                  <p className="text-xl font-bold lg:text-2xl">$0.40</p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <MagicLogoIcon />
                <div>
                  <p className="text-sm font-bold">Total Transactions</p>
                  <p className="text-xl font-bold lg:text-2xl">98.8M</p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <MagicLogoIcon />
                <div>
                  <p className="text-sm font-bold">Total Market Cap</p>
                  <p className="text-xl font-bold lg:text-2xl">$28.5M</p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <MagicLogoIcon />
                <div>
                  <p className="text-sm font-bold">24 Hour Volume</p>
                  <p className="text-xl font-bold lg:text-2xl">$2.4M</p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative bg-night-900 py-16 sm:py-24">
            <div className="mx-auto max-w-md px-4 text-center sm:max-w-3xl sm:px-6 lg:max-w-8xl lg:px-12">
              <div className="inline-block rounded-2xl bg-night-800 px-3 py-2">
                <h2 className="font-mono text-base font-medium text-night-200">
                  Core Cartridges
                </h2>
              </div>
              <p className="mx-auto mt-12 max-w-xl text-3xl font-bold tracking-tight text-honey-200 sm:text-5xl">
                Games and worlds that delight the masses
              </p>
              <div className="mt-12 flex flex-col justify-center xl:flex-row">
                <div className="group relative overflow-hidden md:flex md:justify-center">
                  <div className="relative h-96 bg-[url('/img/bridgeworld.png')] bg-cover bg-no-repeat [mask-repeat:no-repeat] [mask-image:url('/img/union.svg')] [mask-size:contain] [mask-position:center] before:absolute before:right-0 before:bottom-0 before:left-0 before:h-96 before:bg-gradient-to-t before:from-night-900 before:via-transparent before:to-transparent before:transition-colors before:duration-500 before:group-hover:bg-night-800/50 motion-reduce:before:transition-none md:h-[46rem] md:w-[34rem] md:[mask-image:url('/img/union-big.svg')] before:md:h-[46rem]">
                    <div className="absolute bottom-0 left-0 right-0 flex flex-col items-center justify-center pb-4 lg:pb-16">
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
                <div className="group relative mt-20 overflow-hidden md:flex md:justify-center xl:mt-0">
                  <div className="relative h-96 bg-[url('/img/smolverse.png')] bg-[length:550px_750px] bg-bottom bg-no-repeat [mask-repeat:no-repeat] [mask-image:url('/img/union.svg')] [mask-size:contain] [mask-position:center] before:absolute before:right-0 before:bottom-0 before:left-0 before:h-96 before:bg-gradient-to-t before:from-night-900 before:via-transparent before:to-transparent before:transition-colors before:duration-500 before:group-hover:bg-night-800/50 motion-reduce:before:transition-none md:h-[46rem] md:w-[34rem] md:[mask-image:url('/img/union-big.svg')] before:md:h-[46rem]">
                    <div className="absolute bottom-0 left-0 right-0 flex flex-col items-center justify-center pb-4 lg:pb-16">
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
            <div className="relative mt-12 px-6 before:absolute before:left-0 before:bottom-0 before:top-0 before:bg-gradient-to-r before:from-night-900 before:to-night-900/10 after:absolute after:right-0 after:bottom-0 after:top-0 after:bg-gradient-to-l after:from-night-900 after:to-night-900/10 before:sm:w-6 after:sm:w-6">
              <div className="flex w-full snap-x snap-mandatory gap-6 overflow-x-auto pb-12">
                {partnerCartridges.map((cartridge) => (
                  <div
                    key={cartridge.name}
                    className="relative h-48 w-full shrink-0 snap-center overflow-hidden rounded-xl before:absolute before:right-0 before:bottom-0 before:left-0 before:h-96 before:bg-gradient-to-t before:from-night-900 before:via-transparent before:to-transparent before:transition-colors before:duration-500 before:hover:bg-night-900/30 motion-reduce:before:transition-none sm:w-80"
                  >
                    <img
                      className="h-full w-full object-cover"
                      alt={cartridge.name}
                      src={cartridge.image}
                    />
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
              </div>
            </div>
          </div>
          <div className="relative bg-honey-100 py-16 sm:py-24">
            <div className="mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:max-w-8xl lg:px-12">
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
                    <div className="flex basis-7/12 flex-col items-start justify-between space-y-4 pl-8 pr-20 pt-2 pb-8">
                      <p className="text-2xl font-semibold text-night-800">
                        {community.name}
                      </p>
                      <p className="text-night-700">{community.description}</p>
                      <CTAButton>
                        <div className="flex items-center space-x-1">
                          <span>{community.buttonDescription}</span>
                          <ExternalLinkIcon className="h-4 w-4" />
                        </div>
                      </CTAButton>
                    </div>
                    <div className="flex flex-1">
                      <img src={HeroImg} alt="Hero" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="relative bg-honey-900 py-16 sm:py-24">
            <div className="mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:max-w-8xl lg:px-12">
              <div className="flex flex-col-reverse items-center sm:flex-row sm:items-start sm:justify-between">
                <p className="mt-12 max-w-lg text-center text-2xl font-bold text-night-900 sm:mt-0 sm:text-left sm:text-4xl">
                  We provide the tools to make your imagination a reality.
                </p>
                <Badge name="Infrastructure" />
              </div>
              <div className="mx-auto mt-12 grid max-w-3xl gap-x-11 gap-y-12 sm:mt-24 sm:grid-cols-2">
                {Infrastructures.map((Infrastructure) => (
                  <div
                    key={Infrastructure.name}
                    className="rounded-2xl bg-honey-700 p-12"
                  >
                    {Infrastructure.icon}
                    <div className="my-6 flex flex-col space-y-2">
                      <p className="text-2xl font-semibold text-night-800">
                        {Infrastructure.name}
                      </p>
                      <p className="text-night-700">
                        {Infrastructure.description}
                      </p>
                    </div>
                    <div>
                      <CTAButton>
                        <div className="flex items-center space-x-1">
                          <span>{Infrastructure.buttonDescription}</span>
                          <ExternalLinkIcon className="h-4 w-4" />
                        </div>
                      </CTAButton>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="relative bg-honey-25 py-16 sm:py-24">
            <div className="mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:max-w-8xl lg:px-12">
              <div className="flex flex-col-reverse items-center sm:flex-row sm:items-start sm:justify-between">
                <p className="mt-12 text-center text-2xl font-bold text-night-900 sm:mt-0 sm:text-left sm:text-4xl">
                  Enjoyed by many (and counting)
                </p>
                <Badge name="Wall Of Love" />
              </div>
              <div className="mt-12 flex snap-x snap-mandatory place-items-center gap-4 overflow-x-auto pb-12 sm:mt-24 lg:grid lg:grid-cols-2 lg:overflow-x-hidden lg:pb-0 xl:grid-cols-3">
                {tweets.map((tweet, i) => (
                  <TwitterCard {...tweet} key={i} />
                ))}
              </div>
            </div>
          </div>
          <div className="relative bg-night-900 py-16 sm:py-24">
            <div className="mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:max-w-8xl lg:px-12">
              <div className="flex flex-col-reverse items-center sm:flex-row sm:items-start sm:justify-between">
                <p className="mt-12 max-w-lg text-center text-2xl font-bold text-honey-25 sm:mt-0 sm:text-left sm:text-4xl">
                  An evergrowing roster of partners and supporters
                </p>
                <div className="inline-block w-max rounded-tag bg-night-800 px-2.5 py-1.5">
                  <h3 className="font-mono text-sm font-medium tracking-wider text-night-200">
                    Partners
                  </h3>
                </div>
              </div>
            </div>
            <div className="relative mt-12 flex overflow-x-hidden sm:mt-24">
              <div className="flex animate-marquee whitespace-nowrap">
                {partners.map((partner) => (
                  <div
                    key={partner.name}
                    className="mx-4 flex w-56 items-center justify-center rounded-[15px] bg-black/25 px-7 py-3"
                  >
                    <img src={partner.image} alt={partner.name} />
                  </div>
                ))}
              </div>
              {/* Needed for infinity loop */}
              <div className="absolute top-0 flex animate-marquee2 whitespace-nowrap">
                {partners.map((partner) => (
                  <div
                    key={partner.name}
                    className="mx-4 flex w-56 items-center justify-center rounded-[15px] bg-black/25 px-7 py-3"
                  >
                    <img src={partner.image} alt={partner.name} />
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="relative bg-honey-100 py-16 sm:py-24">
            <div className="mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:max-w-8xl lg:px-12">
              <div className="flex flex-col-reverse items-center sm:flex-row sm:items-start sm:justify-between">
                <p className="mt-12 text-center text-2xl font-bold text-night-900 sm:mt-0 sm:text-left sm:text-4xl">
                  Posts from TreasureDAO
                </p>
                <Badge name="Latest" />
              </div>
            </div>
            <div className="mt-12 flex snap-x snap-mandatory gap-4 overflow-x-auto px-6 pb-10 sm:mt-24 sm:px-0">
              {data?.map((post) => (
                <div
                  key={post.title}
                  className="relative flex h-56 w-full snap-center flex-col justify-between rounded-2xl border border-transparent bg-honey-50 p-6 transition-colors duration-500 hover:border-honey-200 sm:h-80 first-of-type:sm:ml-6 last-of-type:sm:mr-6 first-of-type:lg:ml-12 last-of-type:lg:mr-12 first-of-type:xl:ml-16 last-of-type:xl:mr-16"
                >
                  <div className="flex flex-1">
                    <div className="flex w-64 flex-col space-y-2 px-4 sm:w-96 sm:space-y-5">
                      <span className="text-xs">{post.pubDate}</span>
                      <p className="break-words text-lg font-bold leading-none text-night-900 line-clamp-2 sm:text-2xl sm:line-clamp-3">
                        <a
                          href={post.link}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <span className="absolute inset-0 h-full w-full"></span>
                          {post.title}
                        </a>
                      </p>
                      <p className="text-xs text-night-700 line-clamp-2 sm:text-sm sm:line-clamp-2">
                        {post.description}
                      </p>
                    </div>
                    <div className="h-24 w-24 sm:h-48 sm:w-48">
                      <img
                        className="h-full w-full rounded-md object-cover"
                        src={post.thumbnail}
                        alt={post.title}
                      />
                    </div>
                  </div>
                  <div className="mt-6 flex items-center justify-between">
                    <Badge name="Medium Article" />
                    <ExternalLinkIcon className="h-5 w-5 text-ruby-900" />
                  </div>
                </div>
              ))}
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
                  className="inline-flex w-full items-center justify-center space-x-2 rounded-button border border-transparent bg-ruby-900 py-3.25 px-6.5 text-base font-medium text-white hover:bg-ruby-1000 sm:w-auto"
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
                  className="inline-flex items-center space-x-2 rounded-button bg-honey-100 px-3 py-2.5 font-mono font-medium text-ruby-900 transition-colors duration-500 hover:bg-honey-300"
                >
                  <span className="text-xs leading-5">To the surface</span>{" "}
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
