import React from "react";
import { TreasureLogo } from "../Icons";
import {
  DiscordIcon,
  ExternalIcon,
  TwitchIcon,
  TwitterIcon,
  YoutubeIcon,
} from "./misc/Icons";
import { Logo } from "./misc/Logo";
import { Link } from "@remix-run/react";
import Button from "./Button";
import { SOCIAL } from "./misc/const";

const FooterLinks = [
  {
    title: "About",
    links: [
      {
        title: "About Treasure",
        url: "/",
        external: false,
      },
      {
        title: "Team",
        url: "/",
        external: false,
      },
      {
        title: "Brand Assets",
        url: "/",
        external: false,
      },
      {
        title: "What is MAGIC",
        url: "/",
        external: true,
      },
      {
        title: "Newsletter",
        url: "/",
        external: true,
      },
      {
        title: "Documentation",
        url: "/",
        external: true,
      },
      {
        title: "Careers",
        url: "/",
        external: true,
      },
      {
        title: "Governance Forum",
        url: "/",
        external: true,
      },
      {
        title: "Snapshot",
        url: "/",
        external: true,
      },
    ],
  },
  {
    title: "Build",
    links: [
      {
        title: "Build with Treasure",
        url: "/",
        external: false,
      },
      {
        title: "Infrastructure",
        url: "/",
        external: false,
      },
      {
        title: "Game Builders Program",
        url: "/",
        external: true,
      },
      {
        title: "Open Source",
        url: "/",
        external: true,
      },
      {
        title: "Apply to Partner",
        url: "/",
        external: true,
      },
    ],
  },
  {
    title: "Play",
    links: [
      {
        title: "Games",
        url: "/",
        external: true,
      },
      {
        title: "Platform",
        url: "/",
        external: true,
      },
      {
        title: "Launcher",
        url: "/",
        external: true,
      },
    ],
  },
];

const Footer = () => {
  return (
    <div className="space-y-12 bg-new-night-1200 py-12 md:space-y-14 md:py-20">
      <div className="container flex w-full flex-col justify-between gap-14 xl:flex-row">
        <div className="space-y-auto relative ">
          <Logo className="w-[172px]" />
          <h1 className="absolute bottom-0 left-0 mt-auto hidden w-max text-5xl font-bold leading-[120%] xl:block">
            The magic <br /> of play.
          </h1>
        </div>
        <div className="flex flex-col gap-10 xl:flex-row">
          <div className="flex flex-col gap-10 md:flex-row">
            {FooterLinks.map((linkSection) => (
              <div className="space-y-5" key={linkSection.title}>
                <p className="font-semibold text-new-night-100">
                  {linkSection.title}
                </p>
                <div className="space-y-3">
                  {linkSection.links.map((link) =>
                    !link.external ? (
                      <Link
                        to={link.url}
                        key={link.title}
                        className="block cursor-pointer text-new-night-400 transition-colors hover:text-new-night-100"
                      >
                        {link.title}
                      </Link>
                    ) : (
                      <a
                        href={link.url}
                        key={link.title}
                        className="group flex cursor-pointer gap-1 text-new-night-400 transition-colors hover:text-new-night-100"
                      >
                        {link.title}
                        <ExternalIcon className="block w-3 text-new-night-600 group-hover:text-night-100" />
                      </a>
                    )
                  )}
                </div>
              </div>
            ))}
          </div>
          <div className="relative bottom-0 right-0 flex flex-col gap-6 md:items-end">
            <div className="w-max space-y-4">
              <Button color="ruby">Start Playing</Button>
              <Button color="ruby">Start Building</Button>
            </div>
            <div className="bottom-0 right-0 flex gap-1.5 xl:absolute">
              <a
                href={SOCIAL.DISCORD}
                target="_blank"
                rel="noreferrer"
                className="text-new-night-100 "
              >
                <DiscordIcon className="w-6" />
              </a>
              <a
                href={SOCIAL.TWITTER}
                target="_blank"
                rel="noreferrer"
                className="text-new-night-100 "
              >
                <TwitterIcon className="w-6" />
              </a>
              <a
                href={SOCIAL.YOUTUBE}
                target="_blank"
                rel="noreferrer"
                className="text-new-night-100 "
              >
                <YoutubeIcon className="w-6" />
              </a>
              <a
                href={SOCIAL.TWITCH}
                target="_blank"
                rel="noreferrer"
                className="text-new-night-100 "
              >
                <TwitchIcon className="w-6" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="flex flex-col  gap-4 border-t border-new-night-800 pt-6 md:flex-row md:items-center md:justify-between">
          <div className="flex gap-6">
            <Link
              to="/"
              className="cursor-pointer text-new-night-500 hover:text-new-night-100"
            >
              Terms of Service
            </Link>
            <Link
              to="/"
              className="cursor-pointer text-new-night-500 hover:text-new-night-100"
            >
              Privacy Policy
            </Link>
          </div>
          <p className="text-new-night-500">
            © 2021-2022 Treasure Technology Foundation
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
