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
import { LINKS, SOCIAL } from "./misc/const";

const FooterLinks = [
  {
    title: "Build",
    links: [
      {
        title: "Build with Treasure",
        url: "/build",
        external: false,
      },
      {
        title: "Game Builders Program",
        url: LINKS.DEVELOPERS,
        external: true,
      },
      {
        title: "Open Source",
        url: LINKS.GITHUB,
        external: true,
      },
      {
        title: "Apply to Partner",
        url: LINKS.PARTNER,
        external: true,
      },
    ],
  },
  {
    title: "Play",
    links: [
      {
        title: "Games",
        url: LINKS.GAMES,
        external: true,
      },
      {
        title: "Platform",
        url: LINKS.APP,
        external: true,
      },
      {
        title: "Creator Program",
        url: "/create",
        external: false,
      },
    ],
  },
  {
    title: "About",
    links: [
      {
        title: "About",
        url: "/about",
        external: false,
      },
      {
        title: "Team",
        url: "/team",
        external: false,
      },
      {
        title: "Brand Assets",
        url: "/brand-assets",
        external: false,
      },
      {
        title: "What is MAGIC",
        url: LINKS.WHAT_IS_MAGIC,
        external: true,
      },
      {
        title: "Newsletter",
        url: LINKS.SUBSTACK,
        external: true,
      },
      {
        title: "Documentation",
        url: LINKS.DOCUMENTATION,
        external: true,
      },
      {
        title: "Careers",
        url: LINKS.CAREERS,
        external: true,
      },
      {
        title: "Governance Forum",
        url: LINKS.GOVERNANCE,
        external: true,
      },
      {
        title: "Snapshot",
        url: LINKS.SNAPSHOT,
        external: true,
      },
    ],
  },
];

const Footer = () => {
  return (
    <div className="space-y-12 bg-new-night-1200 py-12 md:space-y-14 md:py-20">
      <div className="container relative flex w-full flex-col justify-between gap-14 xl:flex-row">
        <div className="space-y-auto">
          <Logo className="w-[172px]" />
          <h1 className="bottom-0 mt-auto hidden w-max text-5xl font-bold leading-[120%] md:absolute md:block">
            The magic <br /> of play.
          </h1>
        </div>
        <div className="flex flex-col gap-10 xl:flex-row">
          <div className="flex flex-col gap-10 md:flex-row">
            {FooterLinks.map((linkSection) => (
              <div className="flex-auto space-y-5" key={linkSection.title}>
                <p className="font-semibold text-new-night-100">
                  {linkSection.title}
                </p>
                <div className="space-y-3">
                  {linkSection.links.map((link) => (
                    <Link
                      to={link.url}
                      target={link.external ? "_blank" : "_self"}
                      key={link.title}
                      className=" flex cursor-pointer items-center gap-1.5 text-new-night-400 transition-colors hover:text-new-night-100"
                    >
                      {link.title}
                      {link.external && (
                        <ExternalIcon className="block w-3 text-new-night-600 group-hover:text-night-100" />
                      )}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div className="relative bottom-0 right-0 flex flex-col gap-6 md:items-end md:pl-24">
            <div className="w-max space-y-4">
              <Button as="a" color="ruby" href={LINKS.GAMES}>
                Start Playing
              </Button>
              <Button color="honey" to="/build">
                Start Building
              </Button>
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
              to="/terms-of-service"
              className="cursor-pointer text-new-night-500 hover:text-new-night-100"
            >
              Terms of Service
            </Link>
            <Link
              to="/privacy-policy"
              className="cursor-pointer text-new-night-500 hover:text-new-night-100"
            >
              Privacy Policy
            </Link>
          </div>
          <p className="text-new-night-500">
            © 2024 Treasure Technology Foundation
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
