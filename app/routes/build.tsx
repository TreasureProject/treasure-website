import {
  ArrowTopRightOnSquareIcon,
  CheckCircleIcon,
} from "@heroicons/react/24/solid";
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import { Badge } from "~/components/Badge";
import { CTAButton } from "~/components/Button";
import { NewCard } from "~/components/Card";
import { CartridgesIcon } from "~/components/Icons";
import { Tweet } from "~/components/Reviews";
import { NewTreasureStats } from "~/components/TreasureStats";
import { builderTweets, core5Cartridges } from "~/const";
import BridgeworldImg from "@/img/bridgeworld.webp";
import LogomarkImg from "@/img/resources/treasure/logomark.png";
import HeroImg from "@/img/hero.png";
import BgHeroImg from "@/img/bg-hero.jpg";

import PartnerImg from "@/img/partner.webp";
import JoinCommunityImg from "@/img/illustrations/join-community.webp";
import { Link } from "@remix-run/react";

export default function Build() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const maskImage = useMotionTemplate`radial-gradient(200px at ${mouseX}px ${mouseY}px, transparent, rgba(13, 20, 32, 0.95))`;
  const style = { maskImage, WebkitMaskImage: maskImage };

  return (
    <main>
      <section
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
          <motion.div
            style={{
              backgroundImage:
                "linear-gradient(to bottom, rgba(13, 20, 32, 0.95) 40%, rgba(13, 20, 32, 0.96) 50%, rgba(13, 20, 32, 0.97) 60%, rgba(13, 20, 32, 1) 100%)",
            }}
            className="relative z-10 [grid-area:overlay]"
          ></motion.div>
          <motion.div
            style={style}
            className="relative z-20 bg-gradient-to-r from-[#0D1420] to-[#101827] opacity-0 transition duration-300 [grid-area:overlay] group-hover:opacity-100"
          ></motion.div>
          <div className="relative z-30 py-16 [grid-area:overlay] sm:py-24">
            <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-12">
              <div className="text-center">
                <p className="text-xl font-semibold text-honey-200 sm:text-4xl">
                  Build with Treasure
                </p>
                <div className="mt-4 text-night-300 sm:text-xl">
                  <p>
                    Vibrant community of builders and players. Immersive gaming
                    experiences.
                  </p>
                  <p>
                    Tools to enable and accelerate your journey.{" "}
                    <span className="font-bold">Everything</span> you need to
                    supercharge your game.
                  </p>
                </div>
              </div>
            </div>
            <div className="mx-auto mt-10 max-w-md px-6 sm:max-w-3xl lg:max-w-8xl lg:px-12">
              <div className="grid grid-cols-4 grid-rows-2 gap-6 rounded-xl bg-[#101827] sm:gap-4 lg:gap-1">
                <a
                  href="https://docs.treasure.lol/games/ecosystem-integration-framework"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative col-span-4 rounded-tl-lg border-2 border-transparent bg-[#131D2E] px-8 py-7 transition-colors duration-500 hover:border-night-800 sm:col-span-2 lg:col-start-1 lg:col-end-3"
                >
                  <div className="flex flex-col items-start">
                    <CartridgesIcon className="h-12 w-12" aria-hidden="true" />
                    <p className="mt-3 text-lg font-semibold text-honey-200 sm:text-2xl">
                      Ecosystem Integration Framework
                    </p>
                    <p className="mt-1.5 text-night-500 sm:text-xl">
                      Let’s partner to grow together over the long-term
                    </p>
                  </div>
                  <ArrowTopRightOnSquareIcon className="absolute top-7 right-8 h-4 w-4 fill-night-600 [&>path]:stroke-night-600 [&>path]:stroke-[1]" />
                </a>
                <a
                  href="https://github.com/TreasureProject"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative col-span-4 border-2 border-transparent bg-[#131D2E] px-8 py-7 duration-500 hover:border-night-800 sm:col-span-2 lg:col-start-3 lg:col-end-4"
                >
                  <div className="flex flex-col items-start">
                    <CartridgesIcon className="h-12 w-12" aria-hidden="true" />
                    <p className="mt-3 text-lg font-semibold text-honey-200 sm:text-2xl">
                      Open Source
                    </p>
                    <p className="mt-1.5 text-night-500 sm:text-xl">
                      Shared code to help you bring your ideas to life
                    </p>
                  </div>
                  <ArrowTopRightOnSquareIcon className="absolute top-7 right-8 h-4 w-4 fill-night-600 [&>path]:stroke-night-600 [&>path]:stroke-[1]" />
                </a>
                <a
                  href="https://docs.treasure.lol/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative col-span-4 rounded-tr-lg border-2 border-transparent bg-[#131D2E] px-8 py-7 duration-500 hover:border-night-800 sm:col-span-2 lg:col-start-4 lg:col-end-5"
                >
                  <div className="flex flex-col items-start">
                    <CartridgesIcon className="h-12 w-12" aria-hidden="true" />
                    <p className="mt-3 text-lg font-semibold text-honey-200 sm:text-2xl">
                      Documentation
                    </p>
                    <p className="mt-1.5 text-night-500 sm:text-xl">
                      Go under the hood for all things Treasure
                    </p>
                  </div>
                  <ArrowTopRightOnSquareIcon className="absolute top-7 right-8 h-4 w-4 fill-night-600 [&>path]:stroke-night-600 [&>path]:stroke-[1]" />
                </a>

                <Link
                  to="/infrastructure"
                  prefetch="intent"
                  className="relative col-span-4 rounded-bl-lg border-2 border-transparent bg-[#131D2E] px-8 py-7 duration-500 hover:border-night-800 sm:col-span-2 lg:col-start-1 lg:col-end-2"
                >
                  <div className="flex flex-col items-start">
                    <CartridgesIcon className="h-12 w-12" aria-hidden="true" />
                    <p className="mt-3 text-lg font-semibold text-honey-200 sm:text-2xl">
                      Infrastructure
                    </p>
                    <p className="mt-1.5 text-night-500 sm:text-xl">
                      Tap into powerful tools and infra built by Treasure
                    </p>
                  </div>
                  <ArrowTopRightOnSquareIcon className="absolute top-7 right-8 h-4 w-4 fill-night-600 [&>path]:stroke-night-600 [&>path]:stroke-[1]" />
                </Link>
                <Link
                  to="/interoperability"
                  prefetch="intent"
                  className="relative col-span-4 border-2 border-transparent bg-[#131D2E] px-8 py-7 duration-500 hover:border-night-800 sm:col-span-2 lg:col-start-2 lg:col-end-4"
                >
                  <div className="flex flex-col items-start">
                    <CartridgesIcon className="h-12 w-12" aria-hidden="true" />
                    <p className="mt-3 text-lg font-semibold text-honey-200 sm:text-2xl">
                      Interoperability
                    </p>
                    <p className="mt-1.5 text-night-500 sm:text-xl">
                      Derive network value through a vibrant ecosystem of
                      connected communities and shared gaming experiences
                    </p>
                  </div>
                  <ArrowTopRightOnSquareIcon className="absolute top-7 right-8 h-4 w-4 fill-night-600 [&>path]:stroke-night-600 [&>path]:stroke-[1]" />
                </Link>
                <a
                  href="/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative col-span-4 flex items-center rounded-br-lg border-2 border-transparent bg-[#131D2E] px-8 py-7 duration-500 hover:border-night-800 sm:col-span-2 lg:col-start-4 lg:col-end-5"
                >
                  <div className="flex flex-col items-start">
                    <p className="text-lg font-semibold text-honey-200 sm:text-2xl">
                      Learn more
                    </p>
                    <p className="mt-1.5 text-night-500 sm:text-xl">
                      Discover how we supercharge games
                    </p>
                  </div>
                  <ArrowTopRightOnSquareIcon className="absolute top-7 right-8 h-4 w-4 fill-night-600 [&>path]:stroke-night-600 [&>path]:stroke-[1]" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <NewTreasureStats type="secondary" />
      <section
        id="information"
        aria-labelledby="information"
        className="group relative bg-honey-50 py-16 sm:py-24"
      >
        <div className="mx-auto max-w-3xl px-8 sm:px-6 lg:max-w-8xl lg:px-12">
          <div className="space-y-12 sm:space-y-20">
            <div className="relative lg:grid lg:grid-flow-row-dense lg:grid-cols-8 lg:gap-8">
              <div className="mb-12 flex items-center justify-center lg:col-span-4 lg:mb-0">
                <img
                  className="h-full w-full rounded-2xl object-cover"
                  src={BridgeworldImg}
                  alt="Bridgeworld"
                />
              </div>
              <div className="p-14 lg:col-span-4">
                <h3 className="text-xl font-semibold sm:text-4xl">
                  Join a vibrant and intimate ecosystem
                </h3>
                <ol className="mt-10 space-y-4 text-base sm:text-xl">
                  <li className="flex items-center space-x-2.5">
                    <CheckCircleIcon className="h-6 w-6 flex-shrink-0 text-ruby-900 [&>path]:stroke-white [&>path]:stroke-[1]" />
                    <p className="text-xl">
                      Tap into the most engaged community to bootstrap adoption
                    </p>
                  </li>
                  <li className="flex items-center space-x-2.5">
                    <CheckCircleIcon className="h-6 w-6 flex-shrink-0 text-ruby-900 [&>path]:stroke-white [&>path]:stroke-[1]" />
                    <p className="text-xl">
                      Build together with game developers working towards common
                      goals
                    </p>
                  </li>
                  <li className="flex items-center space-x-2.5">
                    <CheckCircleIcon className="h-6 w-6 flex-shrink-0 text-ruby-900 [&>path]:stroke-white [&>path]:stroke-[1]" />
                    <p className="text-xl">
                      Never work in isolation and benefit from success of the
                      ecosystem
                    </p>
                  </li>
                </ol>
              </div>
            </div>
            <div className="relative lg:grid lg:grid-flow-row-dense lg:grid-cols-8 lg:gap-8">
              <div className="mb-12 flex items-center justify-center lg:order-last lg:col-span-4 lg:mb-0">
                <img
                  className="h-full w-full rounded-2xl object-cover"
                  src={BridgeworldImg}
                  alt="Treasures"
                />
              </div>
              <div className="p-14 lg:col-span-4">
                <h3 className="text-xl font-semibold sm:text-4xl">
                  Leverage immersive gaming experiences
                </h3>
                <ol className="mt-10 space-y-4 text-base sm:text-xl">
                  <li className="flex items-center space-x-2.5">
                    <CheckCircleIcon className="h-6 w-6 flex-shrink-0 text-ruby-900 [&>path]:stroke-white [&>path]:stroke-[1]" />
                    <p className="text-xl">
                      Form deeper connections with your community through
                      meta-progression and game player funnels
                    </p>
                  </li>
                  <li className="flex items-center space-x-2.5">
                    <CheckCircleIcon className="h-6 w-6 flex-shrink-0 text-ruby-900 [&>path]:stroke-white [&>path]:stroke-[1]" />
                    <p className="text-xl">
                      Tap into powerful cross-game trading with MagicSwap
                    </p>
                  </li>
                  <li className="flex items-center space-x-2.5">
                    <CheckCircleIcon className="h-6 w-6 flex-shrink-0 text-ruby-900 [&>path]:stroke-white [&>path]:stroke-[1]" />
                    <p className="text-xl">
                      Enhance player retention and engagement through cross-game
                      resources and interoperability
                    </p>
                  </li>
                </ol>
              </div>
            </div>
            <div className="relative lg:grid lg:grid-flow-row-dense lg:grid-cols-8 lg:gap-8">
              <div className="mb-12 flex items-center justify-center lg:col-span-4 lg:mb-0">
                <img
                  className="h-full w-full rounded-2xl object-cover"
                  src={BridgeworldImg}
                  alt="Bridgeworld"
                />
              </div>
              <div className="p-14 lg:col-span-4">
                <h3 className="text-xl font-semibold sm:text-4xl">
                  Access powerful enablers and accelerants
                </h3>
                <ol className="mt-10 space-y-4 text-base sm:text-xl">
                  <li className="flex items-center space-x-2.5">
                    <CheckCircleIcon className="h-6 w-6 flex-shrink-0 text-ruby-900 [&>path]:stroke-white [&>path]:stroke-[1]" />
                    <p className="text-xl">
                      Elevate your game with expert advisory and incentives
                      through the Ecosystem Integration Framework
                    </p>
                  </li>
                  <li className="flex items-center space-x-2.5">
                    <CheckCircleIcon className="h-6 w-6 flex-shrink-0 text-ruby-900 [&>path]:stroke-white [&>path]:stroke-[1]" />
                    <p className="text-xl">
                      Supercharge your go-to-market through extensive reach,
                      authentic content and deep audience understanding
                    </p>
                  </li>
                  <li className="flex items-center space-x-2.5">
                    <CheckCircleIcon className="h-6 w-6 flex-shrink-0 text-ruby-900 [&>path]:stroke-white [&>path]:stroke-[1]" />
                    <p className="text-xl">
                      Build faster with our toolkit and infrastructure for game
                      builders
                    </p>
                  </li>
                </ol>
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
          <motion.div
            className="absolute inset-0 rounded-2xl"
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
            className="relative h-8"
          />
          <motion.span
            variants={{
              hover: {
                color: "#fff",
              },
            }}
            className="relative text-2xl font-semibold text-night-900"
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
        <div className="px-4 sm:px-6 lg:px-24">
          <div className="flex flex-col items-center justify-center sm:flex-row sm:items-start sm:justify-between">
            <div className="max-w-min space-y-5">
              <p className="whitespace-nowrap text-xl font-semibold text-honey-200 sm:text-4xl">
                Featured Games
              </p>
              <p className="text-center text-xs text-night-500 sm:text-left sm:text-xl">
                Games powered by Treasure through MAGIC, imagination, and
                interoperability.
              </p>
            </div>
            <div className="mt-4 flex flex-col items-center space-y-1 rounded-1.5xl border-2 border-night-800 px-5 py-3.5 sm:mt-0">
              <p className="text-xs text-night-600 sm:text-sm">
                Integrated games
              </p>
              <span className="text-base font-semibold text-honey-300 sm:text-xl">
                +40
              </span>
            </div>
          </div>
          <div className="mt-10 grid auto-rows-[350px] grid-cols-1 gap-10 sm:grid-cols-3 xl:grid-cols-5">
            {core5Cartridges.map((cartridge) => {
              return (
                <div
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
                  <div className="relative [grid-area:overlay] [background-image:linear-gradient(to_bottom,#000,#0000_70%)]">
                    <img
                      src={cartridge.image}
                      className="h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      alt=""
                    />
                  </div>
                  <div className="relative z-20 flex flex-col justify-between p-6 [grid-area:overlay]">
                    <p className="max-w-[70%] text-2xl font-semibold text-honey-25">
                      {cartridge.name}
                    </p>
                    <div className="mt-5 space-x-2.5">
                      {cartridge.tags.map((tag) => (
                        <span
                          key={tag}
                          className="inline-block rounded-md bg-night-800/50 px-2.5 py-1 text-xs font-medium uppercase leading-4 text-night-400 backdrop-blur-sm"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      <section
        id="reviews"
        aria-labelledby="reviews-title"
        className="relative bg-honey-50 py-16 sm:py-24"
      >
        <div className="mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:max-w-8xl lg:px-12">
          <div className="flex flex-col-reverse items-center sm:flex-row sm:items-start sm:justify-between">
            <p className="mt-12 text-center text-xl font-bold text-night-900 sm:mt-0 sm:text-left sm:text-3xl">
              What our game partners are saying about us
            </p>
            <Badge className="flex-shrink-0" name="Partner Testimonials" />
          </div>
          <div className="mt-16 grid grid-cols-1 items-center gap-10 xl:grid-cols-3">
            {builderTweets.map((tweet) => (
              <Tweet {...tweet} key={tweet.username} />
            ))}
          </div>
        </div>
      </section>
      <section
        id="cta"
        aria-labelledby="cta"
        className="relative bg-honey-200 py-16 sm:py-24"
      >
        <div className="mx-auto max-w-3xl px-8 sm:px-6 lg:max-w-9xl lg:px-12">
          <div className="grid grid-cols-1 rounded-2.5xl border-2 border-honey-300 bg-honey-50 p-6 sm:grid-cols-7 sm:p-10">
            <div className="order-last col-span-4 mt-4 flex flex-col justify-center space-y-4 px-4 sm:mt-0 sm:space-y-6 sm:px-14 xl:space-y-8 xl:px-28">
              <p className="text-base font-semibold text-ruby-900 lg:text-2xl xl:text-4xl">
                Become a partner
              </p>
              <p className="text-xs text-night-700 sm:text-base lg:text-lg xl:text-2xl">
                Building a cartridge on Treasure and MAGIC? Apply to become a
                partner cartridge today.
              </p>
              <div>
                <CTAButton as="a" href="https://discord.gg/treasuredao">
                  Apply here
                </CTAButton>
              </div>
            </div>
            <div className="col-span-3 overflow-hidden rounded-xl md:order-2">
              <img
                className="h-full w-full object-cover"
                src={PartnerImg}
                alt=""
              />
            </div>
          </div>
          <div className="mt-14 grid auto-rows-[15rem] grid-cols-1 gap-10 sm:auto-rows-[20rem] lg:grid-cols-2">
            <NewCard
              title="Build with Treasure"
              description="Apply to our Game Builders Program to supercharge your game."
              image={HeroImg}
            >
              <CTAButton to="/build" type="primary" hideExternalIcon>
                Learn more
              </CTAButton>
            </NewCard>
            <NewCard
              title="Ecosystem Careers"
              description="Join the team at Treasure and our games to build the future of gaming in web3."
              image={JoinCommunityImg}
            >
              <CTAButton as="a" href="#" type="primary" hideExternalIcon>
                See open jobs
              </CTAButton>
            </NewCard>
          </div>
        </div>
      </section>
    </main>
  );
}

export const handle = {
  breadcrumb: {
    href: "/build",
    title: "Build",
  },
};
