import { Badge } from "~/components/Badge";
import { CTAButton } from "~/components/Button";
import { DiscordIcon, TwitterIcon } from "~/components/Icons";
import type { MemberT } from "~/const";
import { teamMembers } from "~/const";
import classNames from "clsx";
import TreasureTeamImg from "../../public/img/TreasureTeam.png";

const TeamCard = ({ member }: { member: MemberT }) => {
  const hasSocials = member.twitterLink || member.discordLink;
  return (
    <div className="flex flex-col rounded-lg border-2 border-honey-300 bg-honey-50 px-9 py-8">
      <img
        className="w-full bg-honey-100 object-contain"
        src={member.image ?? "https://via.placeholder.com/150"}
        alt={member.name}
      />
      <div
        className={classNames(
          !hasSocials && "flex flex-1 flex-col",
          "mt-7 space-y-3 text-center"
        )}
      >
        <p className="text-black-900 text-3xl font-bold">{member.name}</p>
        <div className="inline-flex flex-1 items-center justify-center rounded-1.5xl bg-honey-100 px-4 py-2.5">
          <h3 className="font-mono font-medium text-ruby-900">
            {member.title}
          </h3>
        </div>
      </div>
      {hasSocials ? (
        <div className="flex flex-1 items-end justify-center space-x-4">
          {member.twitterLink ? (
            <a
              href={member.twitterLink}
              rel="noopener noreferrer"
              target="_blank"
              className="mt-8"
            >
              <TwitterIcon className="h-8 w-8 text-twitter" />
            </a>
          ) : null}
          {member.discordLink ? (
            <a
              href={member.discordLink}
              rel="noopener noreferrer"
              target="_blank"
            >
              <DiscordIcon className="h-8 w-8 text-discord" />
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
            Meet the builders behind TreasureDAO
          </h2>
        </div>
        <div className="mx-auto mt-16 max-w-sm px-4 text-center sm:max-w-5xl sm:px-8 lg:px-20">
          <div className="space-y-4 rounded-2.5xl border-2 border-honey-300 bg-honey-50 px-14 pt-14 text-base text-night-700 sm:text-xl">
            <p>
              We are a collective of seasoned builders growing the expansive
              platform and decentralized game console that is Treasure.{" "}
            </p>

            <p>
              With many members joining directly from the community, Treasure
              comprises a globally distributed team of developers, product
              managers, artists and designers, marketers, and economists. All
              supported by a wealth of DAO contributors and passionate community
              members.
            </p>
            <img src={TreasureTeamImg} alt="Treasure Team" className="w-full" />
          </div>
        </div>
      </div>
      <div className="relative bg-honey-100 py-16 sm:py-24">
        <div className="mx-auto max-w-3xl px-8 sm:px-6 lg:max-w-8xl lg:px-12">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-4">
            {teamMembers.map((member) => (
              <TeamCard key={member.name} member={member} />
            ))}
          </div>
        </div>
      </div>
      <div className="relative bg-honey-200 py-16 sm:py-24">
        <div className="mx-auto max-w-3xl px-8 sm:px-6 lg:max-w-9xl lg:px-12">
          <div className="grid auto-rows-[12rem] grid-cols-1 rounded-2.5xl border-2 border-honey-300 bg-honey-100 p-6 sm:grid-cols-7 sm:p-10 xl:auto-rows-[28rem]">
            <div className="order-1 col-span-4 flex flex-col justify-center space-y-4 px-4 sm:space-y-6 sm:px-14 xl:space-y-8 xl:px-28">
              <p className="text-lg font-semibold text-ruby-900 sm:text-2xl xl:text-4xl">
                Join the team
              </p>
              <p className="text-xs text-night-700 sm:text-base lg:text-lg xl:text-2xl">
                Building a cartridge on Treasure and MAGIC? Apply to become a
                partner cartridge today.
              </p>
              <div>
                <CTAButton>See roles</CTAButton>
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
