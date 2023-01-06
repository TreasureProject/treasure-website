import { Badge } from "~/components/Badge";
import { CTAButton } from "~/components/Button";
import { DiscordIcon, TwitterIcon } from "~/components/Icons";
import type { MemberT } from "~/const";
import {
  teamCoFounders,
  teamTreasure,
  teamTrove,
  teamBridgeworld,
  teamSmolverse,
  teamGameStudio,
} from "~/const";
import classNames from "clsx";
import TreasureTeamImg from "@/img/TreasureTeam.png";
import DefaultPfpImg from "@/img/pfps/default.png";

import type { HeadersFunction, MetaFunction } from "@remix-run/cloudflare";
import type { RootLoaderData } from "~/root";
import { generateTitle, getSocialMetas, getUrl } from "~/utils/seo";
import { commonHeaders } from "~/utils/misc.server";

export const headers: HeadersFunction = commonHeaders;

export const meta: MetaFunction = ({ parentsData }) => {
  const {
    root: { requestInfo },
  } = parentsData as {
    root: RootLoaderData;
  };

  return {
    ...getSocialMetas({
      description:
        "Treasure is the decentralized gaming ecosystem bringing games and players together through MAGIC.",
      keywords: "treasure, NFT, DeFi, games, community, imagination, magic",
      title: generateTitle("/team"),
      origin: requestInfo.origin,
      url: getUrl(requestInfo),
      imgPath: "/team",
    }),
  };
};

const TeamCard = ({ member }: { member: MemberT }) => {
  const hasSocials = member.twitterLink || member.discordLink;
  return (
    <div className="flex flex-col rounded-lg border-2 border-honey-300 bg-honey-50 px-4 py-3 md:px-9 md:py-8">
      <img
        className="w-full bg-honey-100 object-contain"
        src={member.image ?? DefaultPfpImg}
        alt={member.name}
      />
      <div
        className={classNames(
          !hasSocials && "flex flex-col",
          "mt-5 space-y-3 text-center md:mt-7"
        )}
      >
        <p className="text-lg font-bold text-night-900 md:text-xl lg:text-2xl">
          {member.name}
        </p>
        <div className="items-center justify-center rounded-1.5xl bg-honey-100 px-4 py-2.5">
          <h3 className="font-mono text-sm font-medium text-ruby-900 md:text-base">
            {member.title}
          </h3>
        </div>
      </div>
      {hasSocials ? (
        <div className="mt-4 flex flex-1 items-end justify-center space-x-4 md:mt-8">
          {member.twitterLink ? (
            <a
              href={member.twitterLink}
              rel="noopener noreferrer"
              target="_blank"
            >
              <TwitterIcon className="h-6 w-6 w-8 text-twitter md:h-8" />
            </a>
          ) : null}
          {member.discordLink ? (
            <a
              href={member.discordLink}
              rel="noopener noreferrer"
              target="_blank"
            >
              <DiscordIcon className="h-6 w-6 w-8 text-discord md:h-8" />
            </a>
          ) : null}
        </div>
      ) : null}
    </div>
  );
};

export default function Team() {
  return (
    <main>
      <div className="relative bg-honey-200 py-16 sm:py-24">
        <div className="mx-auto max-w-md px-8 text-center sm:max-w-xl sm:px-6 lg:px-12">
          <Badge name="Contributors" bgColor="bg-honey-100" />
          <h2 className="mt-12 text-center text-3xl font-bold tracking-tight text-ruby-900 sm:text-5xl">
            Meet the builders behind Treasure
          </h2>
        </div>
        <div className="mx-auto mt-16 max-w-sm px-4 text-center sm:max-w-5xl sm:px-8 lg:px-20">
          <div className="space-y-4 rounded-2.5xl border-2 border-honey-300 bg-honey-50 px-14 pt-14 text-base text-night-700 sm:text-xl">
            <p>
              We are a collective of seasoned builders growing the expansive
              platform and decentralized game console that is Treasure.
            </p>

            <p>
              Treasure comprises a globally distributed team of developers,
              product managers, artists, brand builders, marketers, economists,
              and gamers. All supported by a intimate and vibrant network of DAO
              contributors and passionate community members.
            </p>
            <img src={TreasureTeamImg} alt="Treasure Team" className="w-full" />
          </div>
        </div>
      </div>
      <div className="relative space-y-16 bg-honey-100 py-16 sm:py-24">
        <div className="mx-auto max-w-3xl px-8 sm:px-6 lg:max-w-9xl lg:px-12">
          <p className="mb-4 text-left text-2xl font-bold text-night-900 sm:mt-0 sm:text-4xl md:mb-8">
            Founders
          </p>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-8 lg:grid-cols-4">
            {teamCoFounders.map((member) => (
              <TeamCard key={member.name} member={member} />
            ))}
          </div>
        </div>
        <div className="mx-auto max-w-3xl px-8 sm:px-6 lg:max-w-9xl lg:px-12">
          <p className="mb-4 text-left text-2xl font-bold text-night-900 sm:mt-0 sm:text-4xl md:mb-8">
            Treasure
          </p>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-8 lg:grid-cols-4">
            {teamTreasure.map((member) => (
              <TeamCard key={member.name} member={member} />
            ))}
          </div>
        </div>
        <div className="mx-auto max-w-3xl px-8 sm:px-6 lg:max-w-9xl lg:px-12">
          <p className="mb-4 text-left text-2xl font-bold text-night-900 sm:mt-0 sm:text-4xl md:mb-8">
            Trove
          </p>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-8 lg:grid-cols-4">
            {teamTrove.map((member) => (
              <TeamCard key={member.name} member={member} />
            ))}
          </div>
        </div>
        <div className="mx-auto max-w-3xl px-8 sm:px-6 lg:max-w-9xl lg:px-12">
          <p className="mb-4 text-left text-2xl font-bold text-night-900 sm:mt-0 sm:text-4xl md:mb-8">
            Bridgeworld
          </p>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-8 lg:grid-cols-4">
            {teamBridgeworld.map((member) => (
              <TeamCard key={member.name} member={member} />
            ))}
          </div>
        </div>
        <div className="mx-auto max-w-3xl px-8 sm:px-6 lg:max-w-9xl lg:px-12">
          <p className="mb-4 text-left text-2xl font-bold text-night-900 sm:mt-0 sm:text-4xl md:mb-8">
            Smolverse
          </p>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-8 lg:grid-cols-4">
            {teamSmolverse.map((member) => (
              <TeamCard key={member.name} member={member} />
            ))}
          </div>
        </div>
        <div className="mx-auto max-w-3xl px-8 sm:px-6 lg:max-w-9xl lg:px-12">
          <p className="mb-4 text-left text-2xl font-bold text-night-900 sm:mt-0 sm:text-4xl md:mb-8">
            Game Studio
          </p>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-8 lg:grid-cols-4">
            {teamGameStudio.map((member) => (
              <TeamCard key={member.name} member={member} />
            ))}
          </div>
        </div>
      </div>
      <div className="relative bg-honey-200 py-16 sm:py-24">
        <div className="mx-auto max-w-3xl px-8 sm:px-6 lg:max-w-9xl lg:px-12">
          <div className="grid auto-rows-[12rem] grid-cols-1 rounded-2.5xl border-2 border-honey-300 bg-honey-100 p-6 sm:grid-cols-7 sm:p-10 xl:auto-rows-[28rem]">
            <div className="order-1 col-span-4 flex flex-col justify-center space-y-4 px-4 sm:space-y-6 sm:px-14 xl:space-y-8 xl:px-28">
              <p className="text-lg font-bold text-ruby-900 sm:text-2xl xl:text-4xl">
                Join the team
              </p>
              <p className="text-xs text-night-700 sm:text-base lg:text-lg xl:text-2xl">
                Building a cartridge on Treasure and MAGIC? Apply to become a
                partner cartridge today.
              </p>
              <div>
                <CTAButton
                  as="a"
                  href="https://www.notion.so/treasure-dao/f5b2da6fd6ab44dfaad357ea88b8d5f7?v=585f76c3244a411ab672347a73a5ffa7"
                >
                  See roles
                </CTAButton>
              </div>
            </div>
            <div className="-order-1 col-span-3 overflow-hidden rounded-xl md:order-2">
              <img
                className="h-full w-full object-contain"
                src={TreasureTeamImg}
                alt="Treasure Team"
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export const handle = {
  breadcrumb: {
    href: "/team",
    title: "Team",
  },
};
