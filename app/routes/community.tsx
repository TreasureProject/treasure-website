import { Badge } from "~/components/Badge";
import { CTAButton } from "~/components/Button";
import { Build } from "~/components/Build";
import { GuildsIcon } from "~/components/Icons";
import { TwitterCard } from "~/components/TwitterCard";
import { tweets } from "~/const";

import type { HeadersFunction, MetaFunction } from "@remix-run/cloudflare";
import type { RootLoaderData } from "~/root";
import { generateTitle, getSocialMetas, getUrl } from "~/utils/seo";
import { commonHeaders } from "~/utils/misc.server";
import { Reviews } from "~/components/Reviews";

export const meta: MetaFunction = ({ parentsData }) => {
  const {
    root: { requestInfo },
  } = parentsData as {
    root: RootLoaderData;
  };

  return {
    ...getSocialMetas({
      description:
        "Treasure is the decentralized video game console connecting games and communities together through imagination, MAGIC, and NFTs.",
      keywords: "treasure, NFT, DeFi, games, community, imagination, magic",
      title: generateTitle("/community"),
      origin: requestInfo.origin,
      url: getUrl(requestInfo),
      imgPath: "/community",
    }),
  };
};

export const headers: HeadersFunction = commonHeaders;

export default function Community() {
  return (
    <main>
      <div className="relative bg-night-900 py-16 sm:py-24">
        <div className="mx-auto max-w-md px-8 text-center sm:max-w-4.5xl sm:px-6 lg:px-12">
          <Badge
            name="Community"
            bgColor="bg-night-800"
            textColor="text-night-200"
          />
          <h2 className="mt-12 text-3xl font-bold tracking-tight text-honey-200 sm:text-5xl">
            The common thread that connects us all – community and good times.
          </h2>
        </div>
        <div className="mx-auto mt-16 max-w-sm px-4 text-center sm:max-w-4xl sm:px-8 lg:px-20">
          <div className="relative rounded-2.5xl border-2 border-night-800 bg-[#131D2E] p-10 sm:p-20">
            <div className="flex flex-col items-center">
              <p className="text-base font-bold text-night-500 sm:text-2xl">
                Treasure comprises a composite of many smaller communities, all
                connected through lore, guilds, resources, and MAGIC.
              </p>

              <GuildsIcon className="mt-10 h-12 w-12" aria-hidden="true" />
            </div>
          </div>
        </div>
      </div>
      <div className="relative bg-honey-200 py-16 sm:py-20">
        <div className="mx-auto grid grid-cols-2 place-items-center gap-8 px-8 lg:max-w-4xl lg:grid-cols-4 lg:gap-20">
          <div className="flex flex-col items-center justify-center">
            <p className="text-4xl font-bold text-ruby-900 sm:text-5xl">30+</p>
            <p className="mt-2.5 text-center text-xl text-night-900">
              Community Initiatives
            </p>
          </div>
          <div className="flex flex-col items-center justify-center">
            <p className="text-4xl font-bold text-ruby-900 sm:text-5xl">10+</p>
            <p className="mt-2.5 text-center text-xl text-night-900">
              Guilds playing Bridgeworld
            </p>
          </div>
          <div className="flex flex-col items-center justify-center">
            <p className="text-4xl font-bold text-ruby-900 sm:text-5xl">83K</p>
            <p className="mt-2.5 text-center text-xl text-night-900">
              Twitter Followers
            </p>
          </div>
          <div className="flex flex-col items-center justify-center">
            <p className="text-4xl font-bold text-ruby-900 sm:text-5xl">26K</p>
            <p className="mt-2.5 text-center text-xl text-night-900">
              Discord Members
            </p>
          </div>
        </div>
      </div>
      <div className="relative bg-honey-100 py-16 sm:py-24">
        <div className="mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:max-w-8xl lg:px-12">
          <Build />
        </div>
      </div>
      <Reviews />
      <div className="relative bg-honey-200 py-16 sm:py-24">
        <div className="mx-auto max-w-3xl px-8 sm:px-6 lg:max-w-9xl lg:px-12">
          <div className="grid auto-rows-[12rem] grid-cols-1 rounded-2.5xl border-2 border-honey-300 bg-honey-100 p-6 sm:grid-cols-7 sm:p-10 xl:auto-rows-[28rem]">
            <div className="order-1 col-span-4 flex flex-col justify-center space-y-4 px-4 sm:space-y-6 sm:px-14 xl:space-y-8 xl:px-28">
              <p className="text-base font-bold text-ruby-900 lg:text-2xl xl:text-4xl">
                Join the community on Discord
              </p>
              <p className="text-xs text-night-700 sm:text-base lg:text-lg xl:text-2xl">
                Building a cartridge on Treasure and MAGIC? Apply to become a
                partner cartridge today.
              </p>
              <div>
                <CTAButton href="https://discord.gg/treasuredao">
                  Join Now
                </CTAButton>
              </div>
            </div>
            <div className="-order-1 col-span-3 overflow-hidden rounded-xl md:order-2">
              <img
                className="h-full w-full object-cover"
                src="/img/bridgeworld-legions.jpeg"
                alt=""
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
    href: "/community",
    title: "Community",
  },
};
