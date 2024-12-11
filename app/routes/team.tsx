import { Badge } from "~/components/Badge";
import { CTAButton } from "~/components/Button";
import { DiscordIcon, XIcon } from "~/components/Icons";
import classNames from "clsx";
import TreasureTeamImg from "@/img/TreasureTeam.webp";

import type { HeadersFunction, MetaFunction } from "@remix-run/node";
import type { RootLoaderData } from "~/root";
import {
  generateTitle,
  genericImagePath,
  getSocialMetas,
  getUrl,
} from "~/utils/seo";
import { commonHeaders } from "~/utils/misc.server";
import { Layout } from "~/components/Layout";
import { useLoaderData } from "@remix-run/react";

export const headers: HeadersFunction = commonHeaders;

export const meta: MetaFunction = ({ parentsData }) => {
  const {
    root: { requestInfo },
  } = parentsData as {
    root: RootLoaderData;
  };

  return getSocialMetas({
    title: generateTitle("/team"),
    url: getUrl(requestInfo),
    image: genericImagePath(requestInfo.origin, "team"),
  });
};

const TeamCard = ({ member }: { member: Member }) => {
  const hasSocials = member.twitterLink || member.discordLink;
  return (
    <div className="flex flex-col rounded-lg border-2 border-honey-300 bg-honey-50 px-4 py-3 md:px-9 md:py-8">
      <img
        className="w-full bg-honey-100 object-contain"
        src={member.image}
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
          <h3 className="font-mono text-xs font-medium text-ruby-900 md:text-base">
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
              <XIcon className="h-4 w-4 text-twitter sm:h-6 sm:w-6 md:h-8" />
            </a>
          ) : null}
          {member.discordLink ? (
            <a
              href={member.discordLink}
              rel="noopener noreferrer"
              target="_blank"
            >
              <DiscordIcon className="h-4 w-4 text-discord sm:w-6 md:h-8" />
            </a>
          ) : null}
        </div>
      ) : null}
    </div>
  );
};

type Member = {
  name: string;
  title: string;
  twitterLink?: string;
  discordLink?: string;
  image: string;
};

type GroupedMembers = {
  [group: string]: Member[];
};

function parseIssueContent(issueContent: string): GroupedMembers {
  const groups: GroupedMembers = {};
  let currentGroup = "";
  let currentMember: Partial<Member> = {};

  const lines = issueContent.split("\n");

  for (const line of lines) {
    const trimmedLine = line.trim();

    // Handle new group
    if (trimmedLine.startsWith("## ")) {
      if (currentGroup && currentMember.name) {
        groups[currentGroup].push(currentMember as Member);
      }
      currentGroup = trimmedLine.replace("## ", "");
      groups[currentGroup] = [];
      currentMember = {};

      // Handle new member
    } else if (trimmedLine.startsWith("### ")) {
      if (currentMember.name) {
        groups[currentGroup].push(currentMember as Member);
      }
      currentMember = { name: trimmedLine.replace("### ", "") };

      // Handle member details
    } else if (trimmedLine.startsWith("- **Title**:")) {
      currentMember.title = trimmedLine.split(": ")[1].trim();
    } else if (trimmedLine.startsWith("- **Image**:")) {
      currentMember.image = trimmedLine.split(": ")[1].trim();
    } else if (trimmedLine.startsWith("- **Twitter**:")) {
      currentMember.twitterLink = trimmedLine.split(": ")[1].trim();
    } else if (trimmedLine.startsWith("- **Discord**:")) {
      currentMember.discordLink = trimmedLine.split(": ")[1].trim();
    }
  }

  // Add the last member to the current group
  if (currentGroup && currentMember.name) {
    groups[currentGroup].push(currentMember as Member);
  }

  return groups;
}

export const loader = async () => {
  const response = await fetch(
    "https://api.github.com/repos/treasureProject/treasure-website/issues/290",
    {
      headers: {
        Accept: "application/vnd.github.v3+json",
        Authorization: `Bearer ${process.env.GITHUB_ACCESS_TOKEN}`,
      },
    }
  );

  const res = await response.json();

  return { teamMembers: parseIssueContent(res.body) };
};

export default function Team() {
  const { teamMembers } = useLoaderData<typeof loader>();

  return (
    <Layout>
      <main>
        <div className="relative bg-honey-200 pb-16 pt-32 sm:pb-24 sm:pt-48">
          <div className="mx-auto max-w-md px-8 text-center sm:max-w-xl sm:px-6 lg:px-12">
            <Badge name="Team" bgColor="bg-honey-100" />
            <h2 className="mt-12 text-center text-3xl font-bold tracking-tight text-ruby-900 sm:text-5xl">
              Meet the people behind Treasure
            </h2>
          </div>
          <div className="mx-auto mt-16 max-w-sm px-4 text-center sm:max-w-5xl sm:px-8 lg:px-20">
            <div className="space-y-4 rounded-2.5xl border-2 border-honey-300 bg-honey-50 p-14 text-base text-night-700 sm:text-xl">
              <p>
                We are a collective of seasoned builders growing the expansive
                platform and decentralized game console that is Treasure.
              </p>

              <p>
                Treasure comprises a globally distributed team of developers,
                product managers, artists, brand builders, marketers,
                economists, and gamers. All supported by a intimate and vibrant
                network of DAO contributors and passionate community members.
              </p>
            </div>
          </div>
        </div>
        <div className="relative space-y-16 bg-honey-100 py-16 sm:py-24">
          {Object.entries(teamMembers).map(([team, members]) => (
            <div
              key={team}
              className="mx-auto max-w-3xl px-8 sm:px-6 lg:max-w-9xl lg:px-12"
            >
              <div className="grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-4 lg:grid-cols-5">
                {members.map((member) => (
                  <TeamCard key={member.name} member={member} />
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="relative bg-honey-200 py-16 sm:py-24">
          <div className="mx-auto max-w-3xl px-8 sm:px-6 lg:max-w-9xl lg:px-12">
            <div className="grid auto-rows-[12rem] grid-cols-1 rounded-2.5xl border-2 border-honey-300 bg-honey-100 p-6 sm:grid-cols-7 sm:p-10 xl:auto-rows-[28rem]">
              <div className="order-1 col-span-4 flex flex-col justify-center space-y-4 px-4 sm:space-y-6 sm:px-14 xl:space-y-8 xl:px-28">
                <p className="text-lg font-bold text-ruby-900 sm:text-2xl xl:text-4xl">
                  Join the team
                </p>
                <p className="text-xs text-night-700 sm:text-base lg:text-lg xl:text-2xl">
                  Want to contribute to Treasure and have a ton of fun while
                  doing it? We'd love to chat!
                </p>
                <div>
                  <CTAButton as="a" href="https://jobs.treasure.lol">
                    See open roles
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
    </Layout>
  );
}

export const handle = {
  breadcrumb: {
    href: "/team",
    title: "Team",
  },
};
