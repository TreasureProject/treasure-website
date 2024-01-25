import React, { useState } from "react";
import * as RA from "@radix-ui/react-accordion";
import * as RDM from "@radix-ui/react-dropdown-menu";
import { Logo } from "./new-landing/misc/Logo";
import {
  ChevronDownIcon,
  ExternalIcon,
  DiscordIcon,
  TwitterIcon,
  TwitchIcon,
  YoutubeIcon,
} from "./new-landing/misc/Icons";
import { twMerge } from "tailwind-merge";
import Button from "./new-landing/Button";
import { Link } from "@remix-run/react";
import { SOCIAL } from "./new-landing/misc/const";
import { AnimatePresence, motion } from "framer-motion";

type DropDownItems = {
  label: string;
  items?: DropDownItem[];
};

interface DropDownItem {
  label: string;
  type: "internal" | "external";
  target: string;
}

const dropdownItems: DropDownItems[] = [
  {
    label: "About",
    items: [
      {
        label: "About Us",
        type: "internal",
        target: "/about",
      },
      {
        label: "Story / MAGIC",
        type: "internal",
        target: "/about",
      },
      {
        label: "Interoperability",
        type: "internal",
        target: "/about",
      },
      {
        label: "Team",
        type: "internal",
        target: "/about",
      },
      {
        label: "Careers",
        type: "internal",
        target: "/about",
      },
      {
        label: "Media",
        type: "internal",
        target: "/about",
      },
    ],
  },
  {
    label: "Play",
  },
  {
    label: "Build",
  },
  {
    label: "Solutions",
    items: [
      {
        label: "All Solutions",
        type: "internal",
        target: "/about",
      },
      {
        label: "Platform",
        type: "external",
        target: "/about",
      },
      {
        label: "Marketplace",
        type: "external",
        target: "/about",
      },
      {
        label: "Proof of Play",
        type: "external",
        target: "/about",
      },
      {
        label: "AMM",
        type: "external",
        target: "/about",
      },
      {
        label: "Guilds",
        type: "external",
        target: "/about",
      },
      {
        label: "Game Developer SDK",
        type: "external",
        target: "/about",
      },
    ],
  },
  {
    label: "Community",
    items: [
      {
        label: "Connect",
        type: "internal",
        target: "/about",
      },
      {
        label: "Ecosystem Projects",
        type: "external",
        target: "/about",
      },
      {
        label: "Ecosystem Careers",
        type: "external",
        target: "/about",
      },
      {
        label: "Governance",
        type: "external",
        target: "/about",
      },
    ],
  },
];

const NewNavigation = () => {
  const SOCIAL_LINK_CLASS =
    "bg-transparent h-9 w-9 justify-center hover:bg-new-night-100/5  text-new-night-100 flex cursor-pointer items-center rounded-md transition-colors ";
  const MOBILE_ITEM_CLASS =
    "hover:bg-new-night-100/10 h-10 w-full cursor-pointer rounded-lg px-4 text-start font-bold text-white transition-colors";
  const GENERIC_HAMBURGER_LINE = `h-[3px] w-5 my-[2px] rounded-full bg-new-night-100 transition ease transform duration-300`;

  const [openHamburger, setOpenHamburger] = useState(false);

  return (
    <div className="justify-centerp-0 fixed top-0 left-1/2 z-40 mx-auto flex max-h-screen w-screen max-w-9xl -translate-x-1/2 flex-col items-center lg:p-6">
      <div className="relative z-[900] flex h-16 w-full items-center justify-between border-white/5 bg-new-night-1200/25 px-6 backdrop-blur-lg md:px-4 lg:h-20 lg:rounded-2xl lg:border lg:px-6">
        <div className="flex items-center gap-0 sm:gap-9">
          <Link to="/">
            <Logo className="w-[148px] xl:w-[160px]" />
          </Link>
          <div className="hidden lg:flex">
            {dropdownItems.map((item, index) => {
              if (item.items) {
                return (
                  <button
                    className="group relative flex h-9 cursor-pointer items-center gap-2.5  rounded-lg px-3.5 font-semibold text-new-night-100 transition-colors focus:outline-none hover:bg-new-night-100/10"
                    key={item.label}
                  >
                    {item.label}
                    <ChevronDownIcon className="w-3 transition-transform group-hover:-rotate-180" />
                    <div className="absolute top-0 left-0 hidden pt-[72px] group-hover:block">
                      <div className="rounded-lg border border-new-night-800 bg-new-night-1000/80 p-2 backdrop-blur-lg">
                        {item.items &&
                          item.items.map((item, index) => (
                            <div
                              className={twMerge(
                                "flex h-11  cursor-pointer items-center gap-3 whitespace-nowrap rounded-md bg-transparent px-2.5 text-new-night-400 transition-colors focus:outline-none hover:bg-new-night-100/5 hover:text-new-night-100",
                                item.type === "external" && "justify-between"
                              )}
                              key={index}
                            >
                              {item.label}
                              {item.type === "external" && (
                                <ExternalIcon className="w-3" />
                              )}
                            </div>
                          ))}
                      </div>
                    </div>
                  </button>
                );
              }
              return (
                <a
                  href="/"
                  key={index}
                  className="flex h-9 items-center gap-2.5 rounded-lg px-3.5 font-semibold text-new-night-100 transition-colors focus:outline-none hover:bg-new-night-100/10"
                >
                  {item.label}
                </a>
              );
            })}
          </div>
        </div>
        <div className="hidden gap-4 lg:flex">
          <div className="flex items-center">
            <a
              href={SOCIAL.DISCORD}
              target="_blank"
              rel="noreferrer"
              className={SOCIAL_LINK_CLASS}
            >
              <DiscordIcon className="w-6" />
            </a>
            <a
              href={SOCIAL.TWITTER}
              target="_blank"
              rel="noreferrer"
              className={SOCIAL_LINK_CLASS}
            >
              <TwitterIcon className="w-6" />
            </a>
            <a
              href={SOCIAL.YOUTUBE}
              target="_blank"
              rel="noreferrer"
              className={SOCIAL_LINK_CLASS}
            >
              <YoutubeIcon className="w-6" />
            </a>
            <a
              href={SOCIAL.TWITCH}
              target="_blank"
              rel="noreferrer"
              className={twMerge(SOCIAL_LINK_CLASS, "hidden xl:flex")}
            >
              <TwitchIcon className="w-6" />
            </a>
          </div>
          <Button color="ruby">Start Playing</Button>
        </div>
        <button
          className="group flex h-11 w-11 cursor-pointer flex-col items-center justify-center rounded-lg bg-new-night-1200/20 lg:hidden"
          onClick={() => setOpenHamburger(!openHamburger)}
        >
          <div
            className={`${GENERIC_HAMBURGER_LINE} ${
              !openHamburger && "translate-y-[7px] rotate-45"
            }`}
          />
          <div
            className={`${GENERIC_HAMBURGER_LINE} ${
              !openHamburger && "opacity-0"
            }`}
          />
          <div
            className={`${GENERIC_HAMBURGER_LINE} ${
              !openHamburger && "-translate-y-[7px] -rotate-45"
            }`}
          />
        </button>
      </div>
      <AnimatePresence>
        {!openHamburger && (
          <motion.div
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -100 }}
            transition={{
              type: "linear",
              duration: 0.3,
              ease: "easeInOut",
            }}
            className="z-[800] flex h-[calc(100vh-64px)] w-full flex-col bg-new-night-1200/25 py-6  backdrop-blur-lg lg:hidden"
          >
            <div className=" flex-1 space-y-6 overflow-hidden px-3 pb-3 sm:px-8">
              <div className="max-h-full w-full overflow-scroll">
                {dropdownItems.map((item, index) => (
                  <>
                    {item.items ? (
                      <RA.Root
                        type="single"
                        key={index}
                        defaultValue="item-1"
                        collapsible
                      >
                        <RA.Item value={item.label}>
                          <RA.Header className={MOBILE_ITEM_CLASS}>
                            <RA.Trigger className="group flex h-full w-full items-center justify-between">
                              {item.label}
                              <ChevronDownIcon className="w-4 text-new-night-400 transition-transform group-data-[state=open]:-rotate-180" />
                            </RA.Trigger>
                          </RA.Header>
                          <RA.Content className="space-y-1 overflow-hidden pt-2 data-[state=open]:animate-slideDown data-[state=closed]:animate-slideUp">
                            {item.items.map((item, index) => (
                              <div
                                key={index}
                                className={twMerge(
                                  MOBILE_ITEM_CLASS,
                                  "flex items-center gap-2 font-medium text-new-night-100/80"
                                )}
                              >
                                {item.label}
                                {item.type === "external" && (
                                  <ExternalIcon className="w-4 text-new-night-400" />
                                )}
                              </div>
                            ))}
                          </RA.Content>
                        </RA.Item>
                      </RA.Root>
                    ) : (
                      <button className={MOBILE_ITEM_CLASS} key={index}>
                        {item.label}
                      </button>
                    )}
                  </>
                ))}
              </div>
            </div>
            <div className="space-y-2 border-t border-white/5 p-6 pb-0 sm:p-8">
              <Button color="ruby">Start Building</Button>
              <Button color="ruby">Start Playing</Button>
              <Button color="honey">Read Litepaper</Button>
              <div className="flex items-center gap-4 pt-2 text-new-night-100">
                <a href={SOCIAL.DISCORD} target="_blank" rel="noreferrer">
                  <DiscordIcon className="w-6" />
                </a>
                <a href={SOCIAL.TWITTER} target="_blank" rel="noreferrer">
                  <TwitterIcon className="w-6" />
                </a>
                <a href={SOCIAL.YOUTUBE} target="_blank" rel="noreferrer">
                  <YoutubeIcon className="w-6" />
                </a>
                <a href={SOCIAL.TWITCH} target="_blank" rel="noreferrer">
                  <TwitchIcon className="w-6" />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default NewNavigation;
