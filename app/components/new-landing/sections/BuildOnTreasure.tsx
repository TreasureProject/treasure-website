import React from "react";
import Button from "../Button";
import { twMerge } from "tailwind-merge";
import {
  ChevronRightIcon,
  DiscordIcon,
  SteamIcon,
  TwitterIcon,
} from "../misc/Icons";
import {
  Badge,
  BoTGraphicFour,
  BoTGraphicOne,
  BoTGraphicThree,
  BoTGraphicTwo,
  LandingCutOff,
} from "../misc/Svgs";
import { LINKS } from "../misc/const";

import AVATAR_GAMER_IMAGE from "~/../public/img/new-landing/avatars/avatar_gamer.jpg";
import AVATAR_JOHN_IMAGE from "~/../public/img/new-landing/avatars/avatar_john.jpg";
import AVATAR_KAREL_IMAGE from "~/../public/img/new-landing/avatars/avatar_karel.jpg";
import AVATAR_SAMBINO_IMAGE from "~/../public/img/new-landing/avatars/avatar_sambino.jpg";
import AVATAR_SIMMAYOR_IMAGE from "~/../public/img/new-landing/avatars/avatar_simmayor.jpg";
import AVATAR_ZAK_IMAGE from "~/../public/img/new-landing/avatars/avatar_zak.jpg";

const users = [
  {
    image: AVATAR_GAMER_IMAGE,
    name: "Gamer#0000",
    rank: 2,
  },
  {
    image: AVATAR_JOHN_IMAGE,
    name: "John#1337",
    rank: 3,
  },
  {
    image: AVATAR_KAREL_IMAGE,
    name: "Karel#7171",
    rank: 16,
  },
  {
    image: AVATAR_SAMBINO_IMAGE,
    name: "Sambino#4201",
    rank: 11,
  },
  {
    image: AVATAR_SIMMAYOR_IMAGE,
    name: "Simmayor#6969",
    rank: 23,
  },
  {
    image: AVATAR_ZAK_IMAGE,
    name: "Zak#8888",
    rank: 7,
  },
];

const BaseCard = ({
  className,
  title,
  description,
  children,
}: {
  className?: string;
  title: string;
  description: string;
  children?: React.ReactNode;
}) => (
  <div
    className={twMerge(
      "relative rounded-2xl border border-new-honey-1100 bg-new-honey-400 p-6 sm:p-12 md:h-[460px] lg:p-8 xl:p-12",
      className
    )}
  >
    {children}
    <h1 className="lg:max-w-auto relative z-20 max-w-[80%] pb-4 text-2xl font-bold leading-[105%] text-new-ruby-900 sm:pb-6 md:text-3xl">
      {title}
    </h1>
    <p className="relative z-20 text-lg leading-[150%] text-new-night-700 md:text-xl">
      {description}
    </p>
  </div>
);

const SocialCard = ({
  image,
  rank,
  username,
}: {
  image: string;
  rank: number;
  username: string;
}) => (
  <div className="ml-4 h-[120px] w-[280px] space-y-3.5 rounded-2xl border border-new-honey-1100 bg-new-honey-400 p-3.5  ">
    <div className="flex gap-3">
      <img
        src={image}
        alt={`${username} avatar`}
        className="aspect-square w-12 rounded-md"
      />
      <div className="flex items-center gap-1">
        <div className="relative">
          <p className="text-new-background-light absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-sm font-bold">
            {rank}
          </p>
          <Badge className="w-5 text-new-ruby-900" />
        </div>
        <p className="text text-new-ruby-900">{username}</p>
      </div>
    </div>
    <div className="flex gap-1 text-new-ruby-900">
      <div className="flex aspect-square h-8 items-center justify-center rounded-md border border-new-honey-1100">
        <TwitterIcon className="w-5" />
      </div>
      <div className="flex aspect-square h-8 items-center justify-center rounded-md border border-new-honey-1100">
        <DiscordIcon className="w-5" />
      </div>
      <div className="flex aspect-square h-8 items-center justify-center rounded-md border border-new-honey-1100">
        <SteamIcon className="w-5" />
      </div>
    </div>
  </div>
);

const BuildOnTreasure = () => {
  return (
    <div className="bg-new-honey-200 py-10 md:py-20 ">
      <div className="container space-y-10">
        <div className="mx-auto flex max-w-2xl flex-col items-center space-y-7">
          <h1 className="landing-h1  text-new-ruby-900">Build on Treasure</h1>
          <p className="text-center leading-[150%] text-new-night-700">
            It's inevitable — the next generation of games will be onchain and
            player-driven. And you're going to build it on Treasure.
          </p>
          <div className="flex gap-6">
            <Button color="ruby" className="w-max" to="/build">
              Start Building
            </Button>
          </div>
        </div>
        <div className="grid-cols-7 gap-6 space-y-6 lg:grid lg:space-y-0">
          <BaseCard
            title="Treasure Chain"
            description="L2 built for next gen gaming. Fully integrated tech stack. Fast. Affordable. And packed with players."
            className="col-span-3"
          >
            <div className="absolute inset-0 overflow-hidden rounded-2xl">
              <BoTGraphicOne className="absolute left-1/2 -bottom-[48%] w-[110%%] -translate-x-1/2 text-new-light-background  opacity-30 md:opacity-100 lg:-top-[10%]" />
            </div>
          </BaseCard>
          <BaseCard
            title="Treasure Development Kit"
            description="Bring the blockchain in-game. Don't just do what's already been done before, move the needle on Treasure."
            className="col-span-4"
          >
            <div className="absolute inset-0 h-full overflow-hidden rounded-2xl">
              <BoTGraphicTwo className="absolute -bottom-[5%] left-1/2  h-auto w-[180%] -translate-x-1/2 text-new-light-background opacity-30 md:opacity-100 lg:bottom-0 lg:h-full lg:w-auto" />
            </div>
          </BaseCard>

          <BaseCard
            title="Treasure Connect"
            description="Seamless, familiar onboarding for players of all stripes. Make a great game and bring it to the world."
            className="col-span-4"
          >
            <div className="absolute inset-0 overflow-hidden rounded-2xl">
              <div className="absolute bottom-10 z-20 hidden md:block lg:-bottom-[64px]">
                <div className="space-y-4">
                  <div className="relative hidden overflow-x-hidden lg:flex">
                    <div className="flex animate-marquee whitespace-nowrap pl-4">
                      {users.map((user) => (
                        <SocialCard
                          username={user.name}
                          image={user.image}
                          rank={user.rank}
                          key={user.name}
                        />
                      ))}
                    </div>
                    <div className="absolute top-0 flex animate-marquee2 whitespace-nowrap">
                      {users.map((user) => (
                        <SocialCard
                          username={user.name}
                          image={user.image}
                          rank={user.rank}
                          key={user.name}
                        />
                      ))}
                    </div>
                  </div>
                  <div className="relative flex overflow-x-hidden">
                    <div className="flex animate-marquee-left2 whitespace-nowrap pl-4">
                      {users.map((user) => (
                        <SocialCard
                          username={user.name}
                          image={user.image}
                          rank={user.rank}
                          key={user.name}
                        />
                      ))}
                    </div>
                    <div className="absolute top-0 flex animate-marquee-left whitespace-nowrap">
                      {users.map((user) => (
                        <SocialCard
                          username={user.name}
                          image={user.image}
                          rank={user.rank}
                          key={user.name}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              <BoTGraphicThree className="absolute left-1/2 -bottom-10 w-[200%] -translate-x-1/2 opacity-30 md:opacity-100 lg:bottom-0 lg:h-[100%] lg:w-auto" />
            </div>
          </BaseCard>
          <BaseCard
            title="... and much more"
            description="Seamless interoperability, massive distribution, in-game exchanges, powerful builder-player flywheel... the list goes on."
            className="col-span-3"
          >
            <div className="absolute inset-0 overflow-hidden rounded-2xl">
              <BoTGraphicFour className="absolute bottom-0 left-1/2  w-[108%] -translate-x-1/2 opacity-30 md:opacity-100 lg:h-[100%] lg:w-auto" />
            </div>
          </BaseCard>
        </div>
      </div>
    </div>
  );
};

export default BuildOnTreasure;
