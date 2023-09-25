import React from "react";
import { Link } from "@remix-run/react";
import { Layout } from "~/components/Layout";

import { TreasureLogo } from "~/components/Svgs";
import game_tile_image from "../../public/img/illustrations/game_tiles.png";
import game_tile_mobile_image from "../../public/img/illustrations/game_tiles_mobile.png";
import community_illustration_image from "../../public/img/illustrations/community_illustration.png";
import platform_illustration_image from "../../public/img/illustrations/platform_illustration.png";
import reward_illustration_image from "../../public/img/illustrations/reward_illustration.png";
import texture_background_image from "../../public/img/illustrations/texture_background.png";
import partner_badge_image from "../../public/img/icons/partner_badge.png";

import TileGrid from "~/components/decoration/TileGrid";
import { twMerge } from "tailwind-merge";

const MAX_W_CLASS = "relative mx-auto max-w-8xl px-4 sm:px-5 md:px-8";
const FORM_URL =
  "https://forms.clickup.com/9003025951/f/8c9yhgz-3182/QBO3G2H9GDHUXBZ7K5";

const Testimonials = [
  {
    text: "I have found so many fun games since joining the Treasure Create program. I love creating content around them and the team has been awesome to work with.",
    name: "Sanjay",
    twitter: "FlyeKitesJay",
  },
  {
    text: "Being part of the Treasure Create program is a blast! Getting to collaborate and develop relationships with other creators and game developers has been an amazing experience! I look forward to the future of Treasure!",
    name: "Attis",
    twitter: "Attis_gaming",
  },
  {
    text: "Stepping into the world of Treasure Create felt like I’d won the golden ticket to Willy Wonka’s game factory! The campaigns are super organized. And the game developers? Always ready to chat, answer my zillion questions, and above all, value my feedback.",
    name: "HdOlivares",
    twitter: "hd_olivares",
  },
];

const ApplyNowButton = () => (
  <a
    href={FORM_URL}
    target="_blank"
    rel="noreferrer"
    className="text-md mt-6 flex h-10 w-max items-center rounded-md border border-ruby-900 bg-ruby-900 px-4 font-medium transition-colors hover:bg-transparent hover:text-ruby-900 md:mt-14 md:h-14 md:rounded-lg md:px-8 md:text-lg"
  >
    Apply now
  </a>
);

const TestimonialCard = ({
  testimonial,
}: {
  testimonial: { text: string; name: string; twitter: string };
}) => (
  <div className="flex  w-[300px] flex-col justify-between rounded-3xl border border-white p-4 sm:h-[360px] md:w-[460px] md:min-w-[460px] md:p-10 ">
    <p className="sm:text-md font-[Satoshi] text-sm leading-[160%] md:text-lg">
      “{testimonial.text}“
    </p>
    <div className="flex items-center gap-3 sm:gap-4 md:gap-5">
      <img
        src={`./img/testimonial-images/${testimonial.name}.png`}
        alt={`Avatar of user ${testimonial.name}`}
        className="h-11 w-11 rounded-full sm:h-14 sm:w-14 md:h-[72px] md:w-[72px]"
      />
      <div>
        <p className="md:text-md text-sm font-bold leading-[160%] tracking-wider">
          {testimonial.name}
        </p>
        <a
          href={`https://twitter.com/${testimonial.twitter}`}
          className="md:text-md text-sm transition-colors hover:text-ruby-800 hover:underline"
        >
          @{testimonial.twitter}
        </a>
      </div>
    </div>
  </div>
);

const Partner = () => {
  return (
    <Layout>
      <div className=" w-full overflow-x-hidden bg-partner-background">
        <div className="relative  mb-24 w-full overflow-hidden bg-gradient-partner-hero">
          <div className={MAX_W_CLASS}>
            <div className="relative z-40 mt-14 flex flex-col items-center lg:items-start lg:pt-[240px] lg:pl-16">
              <h1 className="font-[Millik] text-[38px] sm:text-[42px]  md:text-[64px] lg:leading-[80px]">
                Become
              </h1>
              <h1 className="max-w-lg text-center text-[38px] leading-[48px] md:text-[64px] md:leading-[80px] lg:text-start">
                A Treasure <br /> Create Partner
              </h1>
              <ApplyNowButton />
            </div>
            <div className=" -20 absolute -right-1/2 top-[180%] w-screen -translate-x-1/2 -translate-y-1/2 sm:top-[140%] lg:top-[80%] lg:-right-16 lg:w-[960px] lg:translate-x-0 lg:translate-y-0">
              <TreasureLogo className="absolute top-1/2 left-1/2 z-[25] w-16 -translate-x-1/2 -translate-y-1/2 lg:w-[120px]" />
              <TreasureLogo className="absolute top-1/2 left-1/2 w-[96px] -translate-x-1/2 -translate-y-1/2 animate-pulse opacity-75 blur-[28px] lg:w-[160px] lg:blur-[64px]" />
              <img
                src={game_tile_mobile_image}
                alt=""
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 scale-[1.4] lg:hidden"
              />
              <img
                src={game_tile_image}
                alt="A selection of various Treasure Ecosystem games"
                className="absolute left-0 hidden -translate-y-1/2 lg:block"
              />
            </div>
          </div>
          <div className="absolute left-0 bottom-0 z-30 h-1/2 w-screen  bg-gradient-to-t from-partner-background via-partner-background to-transparent" />

          <div className="absolute top-1/4 right-0 z-10 hidden translate-x-1/2 opacity-60 lg:block">
            <TileGrid />
          </div>
          <div
            className={twMerge(
              MAX_W_CLASS,
              "z-40 mt-[320px] flex flex-col items-center gap-8 lg:flex-row lg:gap-16"
            )}
          >
            <div className="flex aspect-video w-full items-center justify-center overflow-hidden rounded-2xl bg-gradient-partner-placeholder md:rounded-[40px]">
              <img
                src={partner_badge_image}
                alt="Badge for Partners"
                className="w-[80px] sm:w-[96px] xl:w-[120px]"
              />
            </div>
            <p className="max-w-lg px-4 font-[Satoshi] text-sm font-light leading-[160%] text-[white] sm:px-0 md:text-lg">
              Welcome to Treasure Create, your gateway to web3 gaming! Join our
              exclusive creator program to champion Treasure games, boost your
              online presence, and explore unique opportunities in the web3
              gaming world. Whether you create videos, write game reviews, or
              cosplay, there's a place for you here!
            </p>
          </div>
        </div>
      </div>
      <div className="space-y-24 bg-partner-background py-20 md:space-y-8">
        <div
          className={twMerge(
            "flex flex-col items-center justify-center gap-6 md:flex-row md:gap-12",
            MAX_W_CLASS,
            "max-w-[512px] sm:max-w-[580px] md:max-w-8xl"
          )}
        >
          <div className="flex w-full items-center justify-center">
            <img
              src={platform_illustration_image}
              alt="Platform Illustration"
              className="w-full"
            />
          </div>
          <div className="flex w-full md:justify-end ">
            <div className="max-w-md space-y-6  ">
              <h1 className="font-[Millik] text-xl leading-[120%] md:text-2xl lg:text-3xl">
                Grow Your Platform
              </h1>
              <p className="sm:text-md font-[satoshi] text-sm font-light leading-[160%]">
                Join our exclusive content creator program to connect with over
                150k players, access early playtests, and amplify your reach
                through promotion on official Treasure channels.
              </p>
            </div>
          </div>
        </div>
        <div
          className={twMerge(
            "flex flex-col items-center justify-center gap-6 md:flex-row-reverse md:gap-12",
            MAX_W_CLASS,
            "max-w-[512px] sm:max-w-[580px] md:max-w-8xl"
          )}
        >
          <div className="flex w-full  items-center justify-center">
            <img
              src={reward_illustration_image}
              alt="Platform Illustration"
              className="w-full"
            />
          </div>
          <div className="flex w-full justify-start ">
            <div className="max-w-sm space-y-6  ">
              <h1 className="font-[Millik] text-xl leading-[120%] md:text-2xl lg:text-3xl">
                Unlock Rewards
              </h1>
              <p className="sm:text-md font-[satoshi] text-sm font-light leading-[160%]">
                Gain <span className="text-ruby-800">MAGIC</span> compensation,
                exclusive in-game items, and priority beta access, celebrating
                your dedication to Treasure games.
              </p>
            </div>
          </div>
        </div>
        <div
          className={twMerge(
            "flex flex-col items-center justify-center gap-12 md:flex-row",
            MAX_W_CLASS,
            "max-w-[512px] sm:max-w-[580px] md:max-w-8xl"
          )}
        >
          <div className="flex w-full flex-col items-center justify-center md:flex-row">
            <img
              src={community_illustration_image}
              alt="Reward Illustration"
              className="w-full"
            />
          </div>
          <div className="flex w-full md:justify-end ">
            <div className="max-w-md space-y-3 sm:space-y-6  ">
              <h1 className="font-[Millik] text-xl leading-[120%] md:text-2xl lg:text-3xl">
                Join an exciting community
              </h1>
              <p className="sm:text-md font-[satoshi] text-sm font-light leading-[160%]">
                Immerse yourself in a vibrant creator community, connect with
                game devs, participate in game nights and unique events, and
                forge unforgettable gaming moments together!
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-partner-background py-12 pt-0 sm:py-14 sm:pt-14 md:py-20 md:pt-20">
        <div className={MAX_W_CLASS}>
          <div
            className="space-y-8 rounded-2xl p-5 md:space-y-10 md:rounded-3xl md:p-12 md:px-12"
            style={{ background: `url(${texture_background_image})` }}
          >
            <h1 className="pt-4 text-center font-[Millik] text-xl sm:text-start md:pt-0 md:text-3xl">
              Testimonials
            </h1>
            <div className="group relative">
              <div className="relative flex gap-5 overflow-x-hidden">
                <div className="group-hover:pause flex animate-marquee gap-5">
                  {Testimonials.map((testimonial, i) => (
                    <TestimonialCard testimonial={testimonial} key={i} />
                  ))}
                </div>
                <div className="group-hover:pause absolute top-0 ml-4 flex animate-marquee2 gap-5">
                  {Testimonials.map((testimonial, i) => (
                    <TestimonialCard testimonial={testimonial} key={i} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="py-12   sm:py-16 md:py-24"
        style={{ background: `url(${texture_background_image})` }}
      >
        <div className={MAX_W_CLASS}>
          <div className="flex flex-col items-center justify-center rounded-2xl bg-gradient-partner-hero p-12 sm:p-16 md:rounded-[32px]">
            <h1 className="mb-4 text-center font-[Millik]  text-2xl leading-[120%] md:text-3xl">
              Become a Treasure Create Partner
            </h1>
            <p className="text-center text-sm leading-[160%] sm:text-xl lg:text-2xl">
              Unlock, reap, shape: Your gaming future starts here.
            </p>
            <ApplyNowButton />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Partner;
