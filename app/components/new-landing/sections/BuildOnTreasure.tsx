import React from "react";
import Button from "../Button";
import { twMerge } from "tailwind-merge";
import { ChevronRightIcon, DiscordIcon, TwitterIcon } from "../misc/Icons";
import {
  Badge,
  BoTGraphicFour,
  BoTGraphicOne,
  BoTGraphicThree,
  BoTGraphicTwo,
  LandingCutOff,
} from "../misc/Svgs";

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
    name: "John#0000",
    rank: 3,
  },
  {
    image: AVATAR_KAREL_IMAGE,
    name: "Gamer#0000",
    rank: 16,
  },
  {
    image: AVATAR_SAMBINO_IMAGE,
    name: "Sambino#0000",
    rank: 11,
  },
  {
    image: AVATAR_SIMMAYOR_IMAGE,
    name: "Simmayor#0000",
    rank: 23,
  },
  {
    image: AVATAR_ZAK_IMAGE,
    name: "Zak#0000",
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
      "relative h-[300px] rounded-2xl border border-new-honey-1100 bg-new-honey-400 p-6 sm:p-12 lg:h-[460px] lg:p-8 xl:p-12",
      className
    )}
  >
    {children}
    <h1 className="landing-h2 relative z-20 pb-4 text-new-ruby-900 sm:pb-6">
      {title}
    </h1>
    <p className="relative z-20 max-w-[480px] text-lg leading-[150%] text-new-night-700">
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
  <div className="ml-4 h-[120px] w-[280px] space-y-3.5 rounded-2xl border border-new-honey-1100 bg-new-honey-400 p-3.5 shadow-lg ">
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
        <DiscordIcon className="w-5" />
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
            We empower indie games to reach their full potential. Our
            community-driven ethos and novel approach to game building ensures
            developers have the tools to [operate]
          </p>
          <div className="flex gap-6">
            <Button color="ruby" className="w-max">
              Read Litepaper
            </Button>
            <Button color="float" className="w-max text-new-ruby-900">
              Learn More
              <ChevronRightIcon className="w-4" />
            </Button>
          </div>
        </div>
        <div className="grid-cols-7 gap-6 space-y-6 lg:grid lg:space-y-0">
          <BaseCard
            title="L2 and L3 Chains"
            description="Cheap, fast powered through Treasure’s Infinity Chains."
            className="col-span-3"
          >
            <div className="absolute inset-0 overflow-hidden rounded-2xl">
              <BoTGraphicOne className="absolute left-1/2 -top-[50%] w-[110%%] -translate-x-1/2 text-new-light-background  lg:-top-[10%]" />
            </div>
          </BaseCard>
          <BaseCard
            title="Treasure Development Kit"
            description="Access multi-platform support for popular game engines (Unity, Unreal, Godot), deployable smart contracts for tokens and gameplay logic. Manage player identities, view reports, and tap into a wide range of LiveOps features. "
            className="col-span-4"
          >
            <div className="absolute inset-0 h-full overflow-hidden rounded-2xl">
              <BoTGraphicTwo className="absolute bottom-0 left-1/2 w-full -translate-x-1/2  text-new-light-background opacity-50 lg:h-full lg:w-auto lg:opacity-100" />
            </div>
          </BaseCard>

          <BaseCard
            title="Treasure Identity & Login"
            description="Drive UA and retention through frictionless onboarding wih familiar authentication, and segment your audiences for customized player experiences."
            className="col-span-4"
          >
            <div className="absolute inset-0 overflow-hidden rounded-2xl">
              <div className="absolute -bottom-10 z-20 sm:-bottom-8 lg:-bottom-[64px]">
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
              <BoTGraphicThree className="absolute left-1/2 w-[200%] -translate-x-1/2 lg:bottom-0 lg:h-[100%] lg:w-auto " />
            </div>
          </BaseCard>
          <BaseCard
            title="... and much more"
            description="Our Treasure Platform hosts a native marketplace, decentralized exchange (AMM), seamless payments and onramps for fiat and crypto, analytics, and LiveOps campaigns."
            className="col-span-3"
          >
            <div className="absolute inset-0 overflow-hidden rounded-2xl">
              <BoTGraphicFour className="absolute bottom-0 left-1/2  w-[108%] -translate-x-1/2 lg:h-[100%] lg:w-auto " />
            </div>
          </BaseCard>
        </div>
      </div>
    </div>
  );
};

export default BuildOnTreasure;
