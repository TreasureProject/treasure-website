import {
  ArrowDownIcon,
  ArrowTopRightOnSquareIcon,
  CheckCircleIcon,
} from "@heroicons/react/24/solid";
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import { Badge } from "~/components/Badge";
import { CTAButton } from "~/components/Button";
import { NewCard } from "~/components/Card";
import { Tweet } from "~/components/Reviews";
import { NewTreasureStats } from "~/components/TreasureStats";
import { ecosystem } from "~/data/ecosystem";
import LogomarkImg from "@/img/resources/treasure/logomark.png";
import BgHeroImg from "@/img/bg-hero.jpg";
import Balancer from "react-wrap-balancer";

import { Link } from "@remix-run/react";
import TreasureTeamImg from "@/img/TreasureTeam.webp";
import EcosystemFlywheelImg from "@/img/illustrations/Ecosystem_Flywheel.webp";
import InfrastructureImg from "@/img/illustrations/Infrastructure.webp";
import InfrastructureMobileImg from "@/img/illustrations/Infrastructure-mobile.webp";
import GamingExperiencesImg from "@/img/illustrations/Gaming_Experiences.webp";
import GamingExperiencesMobileImg from "@/img/illustrations/Gaming_Experiences-mobile.webp";

// Icons
import OpenSourceIcon from "@/img/icons/Badge_Open_Source.svg";
import UsersIcon from "@/img/icons/Users.svg";
import InfraIcon from "@/img/icons/Infra.svg";
import InteropIcon from "@/img/icons/Interop.svg";
import DocIcon from "@/img/icons/Docs.svg";
import { ClientOnly } from "remix-utils";

import type { HeadersFunction, MetaFunction } from "@remix-run/node";
import type { RootLoaderData } from "~/root";
import {
  generateTitle,
  genericImagePath,
  getSocialMetas,
  getUrl,
} from "~/utils/seo";
import { commonHeaders } from "~/utils/misc.server";
import { twMerge } from "tailwind-merge";
import { Layout } from "~/components/Layout";

export const meta: MetaFunction = ({ parentsData }) => {
  const {
    root: { requestInfo },
  } = parentsData as {
    root: RootLoaderData;
  };

  return getSocialMetas({
    title: generateTitle("/build"),
    url: getUrl(requestInfo),
    image: genericImagePath(requestInfo.origin, "build"),
  });
};

export const headers: HeadersFunction = commonHeaders;

const EcosystemApp = ({
  app,
  index,
}: {
  app: (typeof ecosystem)[number];
  index: number;
}) => {
  return (
    <div key={app.name} className="mx-3 w-16 lg:mx-4">
      <img src={app.image} alt={`App ${index}`} />
    </div>
  );
};

const AppMarquee = ({ to = "left" }: { to?: "left" | "right" }) => {
  const filteredEcosystem = ecosystem.filter(
    (app) => app.type.toLowerCase() != "game"
  );

  return (
    <div className="relative flex flex-1 overflow-x-hidden [-webkit-mask-image:linear-gradient(to_right,#0000,#000_30%,#000_70%,#0000)]">
      <div
        className={twMerge(
          "flex whitespace-nowrap",
          to === "left" ? "animate-marquee" : "animate-marquee-left"
        )}
      >
        {filteredEcosystem
          .sort(() => Math.random() - 0.5)
          .map((app, i) => (
            <EcosystemApp app={app} key={app} index={i} />
          ))}
      </div>
      {/* Needed for infinity loop */}
      <div
        className={twMerge(
          "absolute top-0 flex whitespace-nowrap",
          to === "left" ? "animate-marquee2" : "animate-marquee-left2"
        )}
      >
        {filteredEcosystem.map((app, i) => (
          <EcosystemApp app={app} key={app} index={i} />
        ))}
      </div>
    </div>
  );
};

export default function Build() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const maskImage = useMotionTemplate`radial-gradient(200px at ${mouseX}px ${mouseY}px, transparent, #0d142095)`;
  const style = {
    maskImage,
    WebkitMaskImage: maskImage,
  };

  return (
    <Layout>
      <main>
        <motion.section
          id="build-with-treasure"
          aria-labelledby="build-with-treasure"
          onMouseMove={({ currentTarget, clientX, clientY }) => {
            const { left, top } = currentTarget.getBoundingClientRect();
            mouseX.set(clientX - left);
            mouseY.set(clientY - top);
          }}
          className="group relative overflow-hidden bg-[#101827]"
        >
          <div className="grid [grid-template-areas:'overlay']">
            <motion.img
              src={BgHeroImg}
              className="h-full w-full object-cover [grid-area:overlay]"
              alt=""
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
                transition: {
                  delay: 0.5,
                  duration: 0.5,
                },
              }}
            />
            <div className="relative z-10 bg-gradient-to-b from-[#0D142098] to-[#101827] [grid-area:overlay]"></div>
            <motion.div
              style={style}
              className="relative z-20 bg-[linear-gradient(to_bottom,#0d142095_40%,#0d142096_50%,#0d142097_60%,#0d1420_100%)] [grid-area:overlay]"
            ></motion.div>
            <div className="relative z-30 py-16 [grid-area:overlay] sm:py-24">
              <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-12">
                <div className="text-center">
                  <p className="pt-16 text-xl font-bold text-honey-200 sm:pt-24 sm:text-4xl">
                    Build on Treasure
                  </p>
                  <div className="mt-4 text-night-300 sm:text-xl">
                    <p>
                      <Balancer>
                        The next generation of games will be onchain and
                        player-driven.
                        <br className="hidden lg:inline-block" /> And you're
                        going to build it.
                      </Balancer>
                    </p>
                  </div>
                </div>
              </div>
              <div className="mx-auto mt-10 max-w-md px-6 sm:max-w-3xl lg:max-w-9xl lg:px-12">
                <div className="grid grid-cols-4 grid-rows-2 gap-1 rounded-xl bg-[#101827]">
                  <a
                    href="https://docs.treasure.lol?utm_source=marketing_site"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative col-span-4 rounded-tl-lg bg-[#131D2E] px-8 py-7 transition-colors duration-500 hover:bg-[#182438] sm:col-span-2 lg:col-start-1 lg:col-end-3"
                  >
                    <div className="flex flex-col items-start">
                      <img
                        src={OpenSourceIcon}
                        className="h-12"
                        alt="Game Partner Icon"
                      />
                      <p className="mt-3 text-lg font-bold text-honey-200 sm:text-2xl">
                        Developer Docs
                      </p>
                      <p className="lg:text-md mt-1.5 text-sm text-night-500 md:text-base md:leading-6 2xl:text-lg">
                        Dive into Treasure's documentation to get started
                        quickly
                      </p>
                    </div>
                    <ArrowTopRightOnSquareIcon className="absolute top-7 right-8 h-4 w-4 fill-night-600 [&>path]:stroke-night-600 [&>path]:stroke-[1]" />
                  </a>
                  <a
                    href="https://github.com/TreasureProject"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative col-span-4 bg-[#131D2E] px-8 py-7 duration-500 hover:bg-[#182438] sm:col-span-2 lg:col-start-3 lg:col-end-4"
                  >
                    <div className="flex flex-col items-start">
                      <img
                        src={UsersIcon}
                        className="h-12"
                        alt="Open Source Icon"
                      />
                      <p className="mt-3 text-lg font-bold text-honey-200 sm:text-2xl">
                        Open Source
                      </p>
                      <p className="lg:text-md mt-1.5 text-sm text-night-500 md:text-base md:leading-6 2xl:text-lg">
                        Contribute to the ecosystem and go from 0 to 1
                      </p>
                    </div>
                    <ArrowTopRightOnSquareIcon className="absolute top-7 right-8 h-4 w-4 fill-night-600 [&>path]:stroke-night-600 [&>path]:stroke-[1]" />
                  </a>
                  <a
                    href="https://treasurescan.io?utm_source=marketing_site"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative col-span-4 rounded-tr-lg bg-[#131D2E] px-8 py-7 duration-500 hover:bg-[#182438] sm:col-span-2 lg:col-start-4 lg:col-end-5"
                  >
                    <div className="flex flex-col items-start">
                      <img
                        src={DocIcon}
                        className="h-12"
                        alt="Documentation Icon"
                      />
                      <p className="mt-3 text-lg font-bold text-honey-200 sm:text-2xl">
                        Block Explorer
                      </p>
                      <p className="lg:text-md mt-1.5 text-sm text-night-500 md:text-base md:leading-6 2xl:text-lg">
                        Explore transactions, contracts, tokens, and more on
                        Treasurescan
                      </p>
                    </div>
                    <ArrowTopRightOnSquareIcon className="absolute top-7 right-8 h-4 w-4 fill-night-600 [&>path]:stroke-night-600 [&>path]:stroke-[1]" />
                  </a>
                  <Link
                    to="https://app.treasure.lol/chain/overview?utm_source=marketing_site"
                    target="_blank"
                    rel="noopener noreferrer"
                    prefetch="intent"
                    className="relative col-span-4 rounded-bl-lg bg-[#131D2E] px-8 py-7 duration-500 hover:bg-[#182438] sm:col-span-2 lg:col-start-1 lg:col-end-2"
                  >
                    <div className="flex flex-col items-start">
                      <img
                        src={InteropIcon}
                        className="h-12"
                        alt="Chain Icon"
                      />
                      <p className="mt-3 text-lg font-bold text-honey-200 sm:text-2xl">
                        Treasure
                      </p>
                      <p className="lg:text-md mt-1.5 text-sm text-night-500 md:text-base md:leading-6 2xl:text-lg">
                        Explore and build on the Treasure L2
                      </p>
                    </div>
                    <ArrowTopRightOnSquareIcon className="absolute top-7 right-8 h-4 w-4 fill-night-600 [&>path]:stroke-night-600 [&>path]:stroke-[1]" />
                  </Link>
                  <Link
                    to="https://docs.treasure.lol/tdk?utm_source=marketing_site"
                    target="_blank"
                    rel="noopener noreferrer"
                    prefetch="intent"
                    className="relative col-span-4 bg-[#131D2E] px-8 py-7 duration-500 hover:bg-[#182438] sm:col-span-2 lg:col-start-2 lg:col-end-4"
                  >
                    <div className="flex flex-col items-start">
                      <img src={InfraIcon} className="h-12" alt="TDK Icon" />
                      <p className="mt-3 text-lg font-bold text-honey-200 sm:text-2xl">
                        Treasure Development Kit
                      </p>
                      <p className="lg:text-md mt-1.5 text-sm text-night-500 md:text-base md:leading-6 2xl:text-lg">
                        Leverage the Treasure Development Kit (TDK) to bring
                        Treasure's platform features in-game
                      </p>
                    </div>
                    <ArrowTopRightOnSquareIcon className="absolute top-7 right-8 h-4 w-4 fill-night-600 [&>path]:stroke-night-600 [&>path]:stroke-[1]" />
                  </Link>
                  <div className="relative col-span-4 flex items-center rounded-br-lg bg-[#131D2E] px-8 py-7 duration-500 hover:bg-[#182438] sm:col-span-2 lg:col-start-4 lg:col-end-5">
                    <div className="flex flex-col items-start">
                      <p className="text-lg font-bold text-honey-200 sm:text-2xl">
                        Learn more
                      </p>
                      <p className="lg:text-md mt-1.5 text-sm text-night-500 md:text-base md:leading-6 2xl:text-lg">
                        Discover how we supercharge games
                      </p>
                    </div>
                    <ArrowDownIcon className="absolute top-7 right-8 h-4 w-4 fill-night-600 [&>path]:stroke-night-600 [&>path]:stroke-[1]" />
                    <button
                      className="absolute inset-0 h-full w-full"
                      onClick={() => {
                        // scroll to #information
                        const information =
                          document.querySelector("#information");
                        information?.scrollIntoView({ behavior: "smooth" });
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.section>
        <section
          id="ecosystem"
          aria-labelledby="ecosystem"
          className="relative bg-honey-200 py-16 sm:py-24"
        >
          <div className="mx-auto max-w-3xl px-8 sm:px-6 lg:max-w-9xl lg:px-12">
            <div className="grid grid-cols-1 rounded-2.5xl border-2 border-new-honey-1100 bg-new-honey-600 p-6 sm:grid-cols-7 sm:p-10">
              <div className="order-last col-span-4 mt-4 flex flex-col justify-center space-y-4 px-4 sm:mt-0 sm:space-y-6 sm:px-14 xl:space-y-8 xl:px-20">
                <p className="text-2xl font-bold text-new-ruby-800 xl:text-4xl">
                  Everything you need is on Treasure
                </p>
                <p className="text-sm text-night-700 sm:text-base">
                  The Treasure ecosystem is full of rich apps, developer tools,
                  and games. And we're just getting started.
                </p>
                <div>
                  <CTAButton as="link" to="/ecosystem">
                    Explore the Ecosystem
                  </CTAButton>
                </div>
              </div>
              <div className="col-span-3 flex flex-col justify-evenly space-y-5 rounded-xl md:order-2 lg:space-y-10">
                <AppMarquee />
                <AppMarquee to="right" />
                <AppMarquee />
              </div>
            </div>
          </div>
        </section>
        {/*
        <NewTreasureStats type="secondary" />
        <section
          id="information"
          aria-labelledby="information"
          className="group relative bg-honey-50 py-16 sm:py-24"
        >
          <div className="mx-auto max-w-3xl px-8 sm:px-6 lg:max-w-9xl lg:px-12">
            <div className="space-y-12 lg:space-y-16">
              <div className="relative lg:grid lg:grid-flow-row-dense lg:grid-cols-8 lg:gap-8">
                <div className="mb-12 flex items-center justify-center lg:col-span-4 lg:mb-0">
                  <img
                    className="w-full max-w-md lg:max-w-full"
                    src={EcosystemFlywheelImg}
                    alt="Ecosystem"
                  />
                </div>
                <div className="flex items-center justify-center p-0 lg:col-span-4 lg:p-14">
                  <div>
                    <h3 className="text-xl font-bold text-night-900 sm:text-3xl">
                      Join a vibrant and intimate ecosystem
                    </h3>
                    <ol className="mt-10 space-y-4 text-base text-night-800 sm:text-xl">
                      <li className="flex items-center space-x-2.5">
                        <CheckCircleIcon className="h-6 w-6 flex-shrink-0 text-ruby-900 [&>path]:stroke-white [&>path]:stroke-[1]" />
                        <p className="text-base sm:text-xl">
                          Tap into the most engaged community to bootstrap
                          adoption
                        </p>
                      </li>
                      <li className="flex items-center space-x-2.5">
                        <CheckCircleIcon className="h-6 w-6 flex-shrink-0 text-ruby-900 [&>path]:stroke-white [&>path]:stroke-[1]" />
                        <p className="text-base sm:text-xl">
                          Build together with game developers working towards
                          common goals
                        </p>
                      </li>
                      <li className="flex items-center space-x-2.5">
                        <CheckCircleIcon className="h-6 w-6 flex-shrink-0 text-ruby-900 [&>path]:stroke-white [&>path]:stroke-[1]" />
                        <p className="text-base sm:text-xl">
                          Never work in isolation and benefit from success of
                          the ecosystem
                        </p>
                      </li>
                    </ol>
                  </div>
                </div>
              </div>
              <div className="relative lg:grid lg:grid-flow-row-dense lg:grid-cols-8 lg:gap-8">
                <div className="mb-12 flex items-center justify-center lg:order-last lg:col-span-4 lg:mb-0">
                  <img
                    className="hidden w-full lg:block"
                    src={GamingExperiencesImg}
                    alt="Gaming Experiences"
                  />
                  <img
                    className="block w-full max-w-md lg:hidden lg:max-w-full"
                    src={GamingExperiencesMobileImg}
                    alt="Gaming Experiences"
                  />
                </div>
                <div className="flex items-center justify-center p-0 lg:col-span-4 lg:p-14">
                  <div>
                    <h3 className="text-xl font-bold text-night-900 sm:text-3xl">
                      Leverage immersive gaming experiences
                    </h3>
                    <ol className="mt-10 space-y-4 text-base text-night-800 sm:text-xl">
                      <li className="flex items-center space-x-2.5">
                        <CheckCircleIcon className="h-6 w-6 flex-shrink-0 text-ruby-900 [&>path]:stroke-white [&>path]:stroke-[1]" />
                        <p className="text-base sm:text-xl">
                          Form deeper connections with your community through
                          meta-progression and game player funnels
                        </p>
                      </li>
                      <li className="flex items-center space-x-2.5">
                        <CheckCircleIcon className="h-6 w-6 flex-shrink-0 text-ruby-900 [&>path]:stroke-white [&>path]:stroke-[1]" />
                        <p className="text-base sm:text-xl">
                          Tap into powerful cross-game trading with Magicswap
                        </p>
                      </li>
                      <li className="flex items-center space-x-2.5">
                        <CheckCircleIcon className="h-6 w-6 flex-shrink-0 text-ruby-900 [&>path]:stroke-white [&>path]:stroke-[1]" />
                        <p className="text-base sm:text-xl">
                          Enhance player retention and engagement through
                          cross-game resources and interoperability
                        </p>
                      </li>
                    </ol>
                  </div>
                </div>
              </div>
              <div className="relative lg:grid lg:grid-flow-row-dense lg:grid-cols-8 lg:gap-8">
                <div className="mb-12 flex items-center justify-center lg:col-span-4 lg:mb-0">
                  <img
                    className="hidden w-full lg:block"
                    src={InfrastructureImg}
                    alt="Infrastructure"
                  />
                  <img
                    className="block w-full max-w-md lg:hidden lg:max-w-full"
                    src={InfrastructureMobileImg}
                    alt="Infrastructure"
                  />
                </div>
                <div className="flex items-center justify-center p-0 lg:col-span-4 lg:p-14">
                  <div>
                    <h3 className="text-xl font-bold text-night-900 sm:text-3xl">
                      Access powerful enablers and accelerants
                    </h3>
                    <ol className="mt-10 space-y-4 text-base text-night-800 sm:text-xl">
                      <li className="flex items-center space-x-2.5">
                        <CheckCircleIcon className="h-6 w-6 flex-shrink-0 text-ruby-900 [&>path]:stroke-white [&>path]:stroke-[1]" />
                        <p className="text-base sm:text-xl">
                          Elevate your game with expert advisory and incentives
                          through the Game Builders Program
                        </p>
                      </li>
                      <li className="flex items-center space-x-2.5">
                        <CheckCircleIcon className="h-6 w-6 flex-shrink-0 text-ruby-900 [&>path]:stroke-white [&>path]:stroke-[1]" />
                        <p className="text-base sm:text-xl">
                          Supercharge your go-to-market through extensive reach,
                          authentic content and deep audience understanding
                        </p>
                      </li>
                      <li className="flex items-center space-x-2.5">
                        <CheckCircleIcon className="h-6 w-6 flex-shrink-0 text-ruby-900 [&>path]:stroke-white [&>path]:stroke-[1]" />
                        <p className="text-base sm:text-xl">
                          Build faster with our toolkit and infrastructure for
                          game builders
                        </p>
                      </li>
                    </ol>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section
          id="powered-by-treasure"
          aria-labelledby="powered-by-treasure"
          className="relative bg-honey-100 py-16"
        >
          <motion.div
            whileHover="hover"
            variants={{
              hover: {
                scale: 1.05,
              },
            }}
            className="relative mx-auto flex w-max items-center space-x-2.5 rounded-2xl border-2 border-honey-200 bg-honey-50 px-8 py-5"
          >
            <motion.a
              href="https://twitter.com/search?q=%23PoweredByTreasure&src=typed_query"
              target="_blank"
              rel="noreferrer"
              className="absolute inset-0 z-10 rounded-2xl"
              initial={{
                opacity: 0,
              }}
              variants={{
                hover: {
                  scale: 1.05,
                  background:
                    "linear-gradient(60deg,#61dafb 0%,#d6cbf6 30%,#f2056f 70%)",
                  opacity: 1,
                },
              }}
            ></motion.a>
            <motion.div
              initial={{
                opacity: 0,
              }}
              variants={{
                hover: {
                  opacity: 1,
                },
              }}
              className="absolute right-4 -bottom-4 h-9 w-1/2 bg-red-500 blur-xl"
            ></motion.div>
            <motion.div
              initial={{
                opacity: 0,
              }}
              variants={{
                hover: {
                  opacity: 1,
                },
              }}
              className="absolute left-4 -bottom-4 h-9 w-1/2 bg-blue-500 blur-xl"
            ></motion.div>
            <img
              src={LogomarkImg}
              alt="Treasure Logomark"
              className="pointer-events-none relative z-10 h-8"
            />
            <motion.span
              variants={{
                hover: {
                  color: "#fff",
                },
              }}
              className="pointer-events-none relative z-10 text-2xl font-bold text-night-900"
            >
              #PoweredByTreasure
            </motion.span>
          </motion.div>
        </section>
        <section
          id="powered-by-treasure-games-list"
          aria-labelledby="powered-by-treasure-games-list"
          className="relative bg-night-900 py-8 sm:py-16"
        >
          <div className="mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:max-w-9xl lg:px-12">
            <div className="flex flex-col items-center justify-center sm:flex-row sm:items-start sm:justify-between">
              <div className="space-y-5 text-center sm:max-w-sm sm:text-left">
                <p className="whitespace-nowrap text-xl font-bold text-honey-200 sm:text-4xl">
                  Featured Games
                </p>
                <p className="text-sm text-night-500 sm:text-lg">
                  Games powered by Treasure through MAGIC, imagination, and
                  interoperability.
                </p>
              </div>
              <div className="mt-4 flex flex-col items-center space-y-1 rounded-1.5xl border-2 border-night-800 px-5 py-3.5 sm:mt-0">
                <p className="text-xs text-night-600 sm:text-sm">
                  Integrated games
                </p>
                <span className="text-base font-bold text-honey-300 sm:text-xl">
                  +10
                </span>
              </div>
            </div>
            <div className="mt-10 grid grid-cols-1 gap-10 sm:grid-cols-2 xl:grid-cols-3">
              {featuredCartridges.map((cartridge) => {
                return (
                  <a
                    href={cartridge.websiteLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group grid overflow-hidden rounded-lg border border-night-900/50 shadow-2xl shadow-black/25 [grid-template-areas:'overlay']"
                    key={cartridge.name}
                  >
                    <div
                      className="relative z-10 [grid-area:overlay]"
                      style={{
                        backgroundImage:
                          "linear-gradient(180deg, rgba(0, 0, 0, 0.6) 0%, #0000 20%, #0000 80%, rgba(0, 0, 0, 0.6) 99%), linear-gradient(0deg, rgba(0, 0, 0, 0.25), rgba(0, 0, 0, 0.25))",
                      }}
                    ></div>
                    <div className="relative aspect-square [grid-area:overlay] [background-image:linear-gradient(to_bottom,#000,#0000_70%)] sm:aspect-auto">
                      <img
                        src={cartridge.image}
                        className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-110"
                        alt=""
                      />
                    </div>
                    <div className="relative z-20 flex flex-col justify-between p-6 [grid-area:overlay]">
                      <p className="max-w-[70%] text-2xl font-bold text-honey-25">
                        {cartridge.name}
                      </p>
                    </div>
                  </a>
                );
              })}
            </div>
            <div className="mt-12 flex justify-center">
              <CTAButton
                as="link"
                type="primary"
                to="/games"
                className="mx-auto"
              >
                View all games
              </CTAButton>
            </div>
          </div>
        </section>
        <section
          id="reviews"
          aria-labelledby="reviews-title"
          className="relative bg-honey-50 py-16 sm:py-24"
        >
          <div className="mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:max-w-9xl lg:px-12">
            <div className="flex flex-col-reverse items-center sm:flex-row sm:items-start sm:justify-between">
              <p className="mt-12 text-center text-xl font-bold text-night-900 sm:mt-0 sm:text-left sm:text-3xl">
                What our game partners are saying about us
              </p>
              <Badge className="flex-shrink-0" name="Partner Testimonials" />
            </div>
            <div className="mt-16 grid grid-cols-1 items-center gap-10 xl:grid-cols-3">
              <ClientOnly>
                {() =>
                  builderTweets.map((tweet) => (
                    <Tweet {...tweet} key={tweet.username} />
                  ))
                }
              </ClientOnly>
            </div>
          </div>
        </section>
        <section
          id="cta"
          aria-labelledby="cta"
          className="relative bg-honey-200 py-16 sm:py-24"
        >
          <div className="mx-auto max-w-3xl px-8 sm:px-6 lg:max-w-9xl lg:px-12">
            <div className="grid auto-rows-[15rem] grid-cols-1 gap-10 sm:auto-rows-[20rem] lg:grid-cols-2">
              <div className="relative flex flex-col justify-between overflow-hidden rounded-2.5xl border-2 border-honey-300 bg-honey-50 bg-[linear-gradient(to_right,#101827ed_30%,#10182790),url('/img/bg-hero.jpg')] bg-cover bg-center bg-no-repeat p-10">
                <div className="space-y-2.5">
                  <p className="text-2xl font-bold text-honey-100 sm:text-4xl">
                    Build on Treasure
                  </p>
                  <p className="text-sm text-night-100 sm:text-lg">
                    Apply to join Treasure's Builders Program to supercharge
                    your project.
                  </p>
                </div>
                <div className="mt-8">
                  <CTAButton
                    as="a"
                    href="https://treasure.deform.cc/ecosystem-application"
                    type="primary"
                  >
                    Start building
                  </CTAButton>
                </div>
              </div>
              <NewCard
                title="Careers"
                description="Join the team at Treasure and our games to build the future of gaming in web3."
                image={TreasureTeamImg}
              >
                <CTAButton
                  as="a"
                  href="https://treasuredao.pallet.com/jobs"
                  type="primary"
                >
                  See open jobs
                </CTAButton>
              </NewCard>
            </div>
          </div>
        </section> */}
      </main>
    </Layout>
  );
}

export const handle = {
  breadcrumb: {
    href: "/build",
    title: "Build",
  },
};
