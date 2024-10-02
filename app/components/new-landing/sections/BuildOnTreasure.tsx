import type React from "react";
import { twMerge } from "tailwind-merge";
import Button from "../Button";
import { DiscordIcon, SteamIcon, TwitterIcon } from "../misc/Icons";
import {
  Badge,
  BoTGraphicFour,
  BoTGraphicOne,
  BoTGraphicThree,
  BoTGraphicTwo,
} from "../misc/Svgs";
import { LINKS } from "../misc/const";

import AVATAR_GAMER_IMAGE from "@/img/new-landing/avatars/avatar_gamer.jpg";
import AVATAR_JOHN_IMAGE from "@/img/new-landing/avatars/avatar_john.jpg";
import AVATAR_KAREL_IMAGE from "@/img/new-landing/avatars/avatar_karel.jpg";
import AVATAR_SAMBINO_IMAGE from "@/img/new-landing/avatars/avatar_sambino.jpg";
import AVATAR_SIMMAYOR_IMAGE from "@/img/new-landing/avatars/avatar_simmayor.jpg";
import AVATAR_ZAK_IMAGE from "@/img/new-landing/avatars/avatar_zak.jpg";

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
      className,
    )}
  >
    {children}
    <h1 className="relative z-20 max-w-[80%] pb-4 font-bold text-2xl text-new-ruby-900 leading-[105%] sm:pb-6 md:text-3xl lg:max-w-auto">
      {title}
    </h1>
    <p className="relative z-20 max-w-[480px] text-base text-new-night-700 leading-[150%] md:text-lg">
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
  <div className="ml-4 h-[120px] w-[280px] space-y-3.5 rounded-2xl border border-new-honey-1100 bg-new-honey-400 p-3.5 ">
    <div className="flex gap-3">
      <img
        src={image}
        alt={`${username} avatar`}
        className="aspect-square w-12 rounded-md"
      />
      <div className="flex items-center gap-1">
        <div className="relative">
          <p className="-translate-x-1/2 -translate-y-1/2 absolute top-1/2 left-1/2 font-bold text-new-background-light text-sm">
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
          <h1 className="landing-h1 text-new-ruby-900">Build on Treasure</h1>
          <p className="text-center text-new-night-700 leading-[150%]">
            Arming developers and game makers with everything they need to be
            successful since 2021.
          </p>
          <div className="flex gap-6">
            <Button color="ruby" className="w-max" to="/build">
              Start Building
            </Button>
            <Button
              as="a"
              color="float"
              className="w-max text-new-ruby-900"
              href={LINKS.LITEPAPER}
            >
              Read Litepaper
            </Button>
          </div>
        </div>
        <div className="grid-cols-7 gap-6 space-y-6 lg:grid lg:space-y-0">
          <BaseCard
            title="Gaming L2"
            description="Fast, affordable, and powered by the Treasure Chain and a new network of Infinity Chains."
            className="col-span-3"
          >
            <div className="absolute inset-0 overflow-hidden rounded-2xl">
              <BoTGraphicOne className="-bottom-[48%] -translate-x-1/2 lg:-top-[10%] absolute left-1/2 w-[110%%] text-new-light-background opacity-30 md:opacity-100" />
            </div>
          </BaseCard>
          <BaseCard
            title="Treasure Development Kit"
            description="Enabling Treasure's platform features in-game with multi-platform support, deployable smart contracts, and access to identity, analytics, and LiveOps tooling."
            className="col-span-4"
          >
            <div className="absolute inset-0 h-full overflow-hidden rounded-2xl">
              <BoTGraphicTwo className="-bottom-[5%] -translate-x-1/2 absolute left-1/2 h-auto w-[180%] text-new-light-background opacity-30 md:opacity-100 lg:bottom-0 lg:h-full lg:w-auto" />
            </div>
          </BaseCard>

          <BaseCard
            title="Treasure Identity & Login"
            description="Seamless onboarding to bring players into your game. Powerful segmentation tools to personalize player experiences."
            className="col-span-4"
          >
            <div className="absolute inset-0 overflow-hidden rounded-2xl">
              <div className="lg:-bottom-[64px] absolute bottom-10 z-20 hidden md:block">
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
              <BoTGraphicThree className="-bottom-10 -translate-x-1/2 absolute left-1/2 w-[200%] opacity-30 md:opacity-100 lg:bottom-0 lg:h-[100%] lg:w-auto" />
            </div>
          </BaseCard>
          <BaseCard
            title="... and much more"
            description="Native marketplace built specifically for gaming, a powerful next generation AMM, streamlined payments, robust analytics... the list goes on."
            className="col-span-3"
          >
            <div className="absolute inset-0 overflow-hidden rounded-2xl">
              <BoTGraphicFour className="-translate-x-1/2 absolute bottom-0 left-1/2 w-[108%] opacity-30 md:opacity-100 lg:h-[100%] lg:w-auto" />
            </div>
          </BaseCard>
        </div>
      </div>
    </div>
  );
};

export default BuildOnTreasure;
