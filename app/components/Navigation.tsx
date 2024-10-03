import * as RA from "@radix-ui/react-accordion";
import { Link } from "@remix-run/react";
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useScroll,
} from "framer-motion";
import { useState } from "react";
import { twMerge } from "tailwind-merge";

import Button from "./new-landing/Button";
import {
  ChevronDownIcon,
  DiscordIcon,
  ExternalIcon,
  TwitchIcon,
  TwitterIcon,
  YoutubeIcon,
} from "./new-landing/misc/Icons";
import { Logo } from "./new-landing/misc/Logo";
import { LINKS, SOCIAL } from "./new-landing/misc/const";

type Type = "internal" | "external";

type DropDownItems = {
  label: string;
  target?: string;
  type?: Type;
  items?: DropDownItem[];
};

interface DropDownItem {
  label: string;
  type: Type;
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
        label: "What is MAGIC?",
        type: "external",
        target: LINKS.WHAT_IS_MAGIC,
      },
      // {
      //   label: "Infrastructure",
      //   type: "internal",
      //   target: "/infrastructure",
      // },
      {
        label: "Team",
        type: "internal",
        target: "/team",
      },
      {
        label: "Careers",
        type: "external",
        target: LINKS.CAREERS,
      },
      {
        label: "Brand Assets",
        type: "internal",
        target: "/brand-assets",
      },
    ],
  },
  {
    label: "Play",
    target: LINKS.APP,
    type: "external",
  },
  {
    label: "Build",
    target: "/build",
    type: "internal",
  },
  {
    label: "Ecosystem",
    items: [
      {
        label: "Treasure App",
        type: "external",
        target: LINKS.APP,
      },
      {
        label: "Treasure Market",
        type: "external",
        target: LINKS.MARKET,
      },
      {
        label: "Magicswap",
        type: "external",
        target: LINKS.MAGICSWAP,
      },
      {
        label: "Developer Documentation",
        type: "external",
        target: LINKS.DOCUMENTATION,
      },
    ],
  },
  {
    label: "Community",
    items: [
      {
        label: "Creator Program",
        type: "internal",
        target: "/create",
      },
      {
        label: "Newsletter",
        type: "external",
        target: LINKS.SUBSTACK,
      },
      {
        label: "Governance Forum",
        type: "external",
        target: LINKS.GOVERNANCE,
      },
      {
        label: "Snapshot",
        type: "external",
        target: LINKS.SNAPSHOT,
      },
    ],
  },
];

export const Navigation = () => {
  const [visible, setVisible] = useState(true);
  const [openHamburger, setOpenHamburger] = useState(false);
  const [latestScroll, setLatestScroll] = useState(0);
  const { scrollY } = useScroll();
  const SOCIAL_LINK_CLASS =
    "bg-transparent h-9 w-9 justify-center hover:bg-new-night-100/5  text-new-night-100 flex cursor-pointer items-center rounded-md transition-colors";
  const MOBILE_ITEM_CLASS =
    "hover:bg-new-night-100/10 h-10 w-full cursor-pointer rounded-lg px-4 text-start font-bold text-white transition-colors";
  const GENERIC_HAMBURGER_LINE =
    "h-[3px] w-5 my-[2px] rounded-full bg-new-night-100 transition ease transform duration-300";

  const ScrollDelay = 200;

  useMotionValueEvent(scrollY, "change", (latest: number) => {
    if (openHamburger) return;
    if (latest - ScrollDelay > latestScroll) {
      setLatestScroll(latest);
      setVisible(false);
    } else if (latest + ScrollDelay < latestScroll) {
      setLatestScroll(latest);
      setVisible(true);
    }
  });

  return (
    <div
      className={twMerge(
        "-translate-x-1/2 fixed top-0 left-1/2 z-[999] mx-auto flex max-h-screen w-screen max-w-9xl flex-col items-center justify-center p-3 opacity-100 transition-opacity lg:p-6",
        openHamburger && "bg-new-night-1200 lg:bg-transparent",
        !visible && "pointer-events-none opacity-0",
      )}
    >
      <div className="relative z-[900] flex h-16 w-full items-center justify-between rounded-2xl border border-white/5 bg-new-night-1200/25 px-6 backdrop-blur-lg md:px-4 lg:h-20">
        <div className="flex items-center gap-0 sm:gap-9">
          <Link to="/">
            <Logo className="w-[148px] xl:w-[160px]" />
          </Link>
          <div className="hidden lg:flex">
            {dropdownItems.map((item) => {
              if (item.items) {
                return (
                  <button
                    type="button"
                    className="group relative flex h-9 cursor-pointer items-center gap-2.5 rounded-lg px-3.5 font-semibold text-new-night-100 transition-colors hover:bg-new-night-100/10 focus:outline-none"
                    key={item.label}
                  >
                    {item.label}
                    <ChevronDownIcon className="group-hover:-rotate-180 w-3 transition-transform" />
                    <div className="absolute top-0 left-0 hidden pt-[72px] group-hover:block">
                      <div className="rounded-lg border border-new-night-800 bg-new-night-1000/80 p-2 backdrop-blur-2xl lg:backdrop-blur-lg">
                        {item.items?.map((item) => (
                          <Link
                            to={item.target}
                            target={
                              item.type === "external" ? "_blank" : "_self"
                            }
                            className={twMerge(
                              "flex h-11 cursor-pointer items-center gap-3 whitespace-nowrap rounded-md bg-transparent px-2.5 text-new-night-400 transition-colors hover:bg-new-night-100/5 hover:text-new-night-100 focus:outline-none",
                              item.type === "external" && "justify-between",
                            )}
                            key={item.label}
                          >
                            {item.label}
                            {item.type === "external" && (
                              <ExternalIcon className="w-4" />
                            )}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </button>
                );
              }
              return (
                <Link
                  to={item.target ? item.target : "/"}
                  target={item.type === "external" ? "_blank" : "_self"}
                  key={item.label}
                  className="flex h-9 items-center gap-1.5 rounded-lg px-3.5 font-semibold text-new-night-100 transition-colors hover:bg-new-night-100/10 focus:outline-none"
                >
                  {item.label}
                  {item.type === "external" && <ExternalIcon className="w-4" />}
                </Link>
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
          <Button as="a" color="ruby" href={LINKS.APP}>
            Start Playing
          </Button>
        </div>
        <button
          type="button"
          className="group flex h-11 w-11 cursor-pointer flex-col items-center justify-center rounded-lg bg-new-night-1200/20 lg:hidden"
          onClick={() => setOpenHamburger(!openHamburger)}
        >
          <div
            className={`${GENERIC_HAMBURGER_LINE}${
              openHamburger && "translate-y-[7px] rotate-45"
            }`}
          />
          <div
            className={`${GENERIC_HAMBURGER_LINE}${
              openHamburger && "opacity-0"
            }`}
          />
          <div
            className={`${GENERIC_HAMBURGER_LINE}${
              openHamburger && "-translate-y-[7px] -rotate-45"
            }`}
          />
        </button>
      </div>
      <AnimatePresence>
        {openHamburger && (
          <motion.div
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -100 }}
            transition={{
              type: "linear",
              duration: 0.3,
              ease: "easeInOut",
            }}
            className="z-[800] flex h-[calc(100vh-64px)] w-full flex-col bg-new-night-1200 py-6 backdrop-blur-2xl lg:hidden"
          >
            <div className=" flex-1 space-y-6 overflow-hidden px-3 pb-3 sm:px-8">
              <div className="scrollbar-hide max-h-full w-full overflow-scroll">
                {dropdownItems.map((item) => (
                  <>
                    {item.items ? (
                      <RA.Root
                        type="single"
                        key={item.label}
                        defaultValue="item-1"
                        collapsible
                      >
                        <RA.Item value={item.label}>
                          <RA.Header className={MOBILE_ITEM_CLASS}>
                            <RA.Trigger className="group flex h-full w-full items-center justify-between">
                              {item.label}
                              <ChevronDownIcon className="group-data-[state=open]:-rotate-180 w-4 text-new-night-400 transition-transform" />
                            </RA.Trigger>
                          </RA.Header>
                          <RA.Content className="space-y-1 overflow-hidden pt-2 data-[state=closed]:animate-slideUp data-[state=open]:animate-slideDown">
                            {item.items.map((item) => (
                              <Link
                                to={item.target}
                                target={
                                  item.type === "external" ? "_blank" : "_self"
                                }
                                key={item.label}
                                className={twMerge(
                                  MOBILE_ITEM_CLASS,
                                  "flex items-center gap-2 font-medium text-new-night-100/80",
                                )}
                              >
                                {item.label}
                                {item.type === "external" && (
                                  <ExternalIcon className="w-4 text-new-night-400" />
                                )}
                              </Link>
                            ))}
                          </RA.Content>
                        </RA.Item>
                      </RA.Root>
                    ) : (
                      <button
                        type="button"
                        className={MOBILE_ITEM_CLASS}
                        key={item.label}
                      >
                        {item.label}
                      </button>
                    )}
                  </>
                ))}
              </div>
            </div>
            <div className="space-y-2 border-white/5 border-t p-6 pb-0 sm:p-8">
              <Button as="a" color="ruby" href={LINKS.APP}>
                Start Playing{" "}
              </Button>
              <Button color="honey" to="/build">
                Start Building
              </Button>
              {/* <Button color="honey">Read Litepaper</Button> */}
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
