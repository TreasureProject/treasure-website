import Legion1Img from "../../public/img/legion1.png";

import { ExternalLinkIcon } from "@heroicons/react/solid";
import BWTextSvg from "../../public/img/bridgeworld-text.svg";
import { CTAButton, InternalCTAButton } from "~/components/Button";
import { BridgeworldInfrastructures } from "~/const";
import InfrastuctureImg from "../../public/img/Infrastucture.png";

import type { HeadersFunction, MetaFunction } from "@remix-run/cloudflare";
import type { RootLoaderData } from "~/root";
import { generateTitle, getSocialMetas, getUrl } from "~/utils/seo";
import { commonHeaders } from "~/utils/misc.server";

export const meta: MetaFunction = ({ parentsData }) => {
  const {
    root: { requestInfo },
  } = parentsData as {
    root: RootLoaderData;
  };

  return {
    ...getSocialMetas({
      description:
        "Treasure is the decentralized video game console connecting games and communities together through imagination, $MAGIC, and NFTs.",
      keywords: "treasure, NFT, DeFi, games, community, imagination, magic",
      title: generateTitle("/bridgeworld"),
      origin: requestInfo.origin,
      url: getUrl(requestInfo),
      imgPath: "/bridgeworld",
    }),
  };
};

export const headers: HeadersFunction = commonHeaders;

export default function About() {
  return (
    <main>
      <div className="relative bg-[url('/img/bridgeworld-bg.png')] bg-cover bg-center bg-no-repeat py-16 sm:py-32 xl:bg-fixed">
        <div className="mx-auto max-w-md px-8 text-center sm:max-w-5xl sm:px-6 lg:px-12">
          <img src={BWTextSvg} className="w-[62rem]" alt="Bridgeworld" />
          <a
            href="https://bridgeworld.treasure.lol"
            rel="noopener noreferrer"
            target="_blank"
            className="mt-12 inline-flex items-center rounded-button bg-ruby-900 px-7 py-4 font-semibold text-white shadow-sm transition-colors duration-500 hover:bg-ruby-1000 focus:outline-none focus:ring-2 focus:ring-ruby-500 focus:ring-offset-2"
          >
            Visit Bridgeworld
            <ExternalLinkIcon className="ml-1.5 h-4 w-4" aria-hidden="true" />
          </a>
        </div>
      </div>
      <div className="relative bg-night-900 pt-16 pb-72 sm:py-24">
        <div className="mx-auto max-w-sm px-4 text-center sm:max-w-4xl sm:px-28 lg:px-20">
          <div className="relative rounded-2.5xl border-2 border-night-800 bg-[#131D2E] px-4 pt-20 pb-48 text-base text-night-600 sm:px-14 sm:text-xl md:py-20">
            <div className="space-y-4">
              <p>
                <span className="font-semibold text-honey-200">
                  Bridgeworld
                </span>{" "}
                is a game of strategic commerce, trade and social coordination
                forming a base economy layer for the Treasure ecosystem.
              </p>

              <p>
                Sitting at the epicenter of the Treasure ecosystem, Bridgeworld
                serves as the fabric between all other worlds. As the only known
                natural source of MAGIC in the universe, Bridgeworld brings
                forth a dynamic and perpetual conquest for resource acquisition
                through social coordination.
              </p>

              <p>
                This allows for the emergence of unique group dynamics informed
                by how communities cooperate or work against each other as
                users, guilds, and globally across the entire system.
              </p>
            </div>
            <div className="mt-8 flex flex-col justify-center space-y-4 lg:flex-row lg:space-y-0 lg:space-x-5">
              <div>
                <CTAButton href="https://docs.treasure.lol/bridgeworld/bridgeworld-litepaper">
                  Read the guide
                </CTAButton>
              </div>
              <div>
                <CTAButton href="https://lore.treasure.lol/">
                  Discover its lore
                </CTAButton>
              </div>
            </div>

            <img
              src={Legion1Img}
              alt="Legion 1"
              className="absolute -bottom-52 w-72 md:-bottom-12 md:-right-24 md:w-56"
            />
          </div>
        </div>
      </div>
      <div className="relative bg-honey-200 py-16 sm:py-24">
        <div className="mx-auto max-w-xl px-8 text-center sm:px-6 lg:max-w-3xl lg:px-12">
          <h2 className="text-center text-3xl font-bold tracking-tight text-night-900 sm:text-5xl">
            Economic infrastructure powering the Treasure ecosystem
          </h2>
        </div>
        <div className="mx-auto mt-12 grid max-w-5xl gap-8 px-8 sm:mt-24 sm:grid-cols-2 sm:px-6 lg:px-12">
          {BridgeworldInfrastructures.map((Infrastructure) => (
            <div
              key={Infrastructure.name}
              className="rounded-2xl bg-honey-300 p-12"
            >
              {Infrastructure.icon}
              <div className="mt-6 flex flex-col space-y-2">
                <p className="text-2xl font-semibold text-night-800">
                  {Infrastructure.name}
                </p>
                <p className="text-night-700">{Infrastructure.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="relative bg-night-900 py-16 sm:py-24">
        <div className="mx-auto max-w-3xl px-8 sm:px-6 lg:max-w-9xl lg:px-12">
          <div className="grid auto-rows-[12rem] grid-cols-1 rounded-2.5xl border-2 border-night-800 p-6 [background:linear-gradient(0deg,#131D2E,#131D2E),#101827] sm:grid-cols-7 sm:p-10 xl:auto-rows-[28rem]">
            <div className="order-1 col-span-4 flex flex-col justify-center space-y-4 px-4 sm:space-y-6 sm:px-14 xl:space-y-8 xl:px-28">
              <p className="text-lg font-bold text-honey-200 sm:text-2xl xl:text-4xl">
                Discover other games
              </p>
              <p className="text-sm text-night-500 sm:text-base xl:text-2xl">
                Building a cartridge on Treasure and MAGIC? Apply to become a
                partner cartridge today.
              </p>
              <div>
                <InternalCTAButton to="/cartridges">
                  Visit Cartridges
                </InternalCTAButton>
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
          <div className="mt-12 grid auto-rows-[12rem] grid-cols-1 rounded-2.5xl border-2 border-night-800 p-6 [background:linear-gradient(0deg,#131D2E,#131D2E),#101827] sm:grid-cols-7 sm:p-10 xl:auto-rows-[28rem]">
            <div className="order-2 col-span-4 flex flex-col justify-center space-y-4 px-4 sm:space-y-6 sm:px-14 xl:space-y-8 xl:px-28">
              <p className="text-lg font-bold text-honey-200 sm:text-2xl xl:text-4xl">
                Infrastructure
              </p>
              <p className="text-sm text-night-500 sm:text-base xl:text-2xl">
                The economic engine and tooling powering Treasure
              </p>
              <div>
                <InternalCTAButton to="/infrastructure">
                  Explore Infrastructure
                </InternalCTAButton>
              </div>
            </div>
            <div className="-order-1 col-span-3 overflow-hidden rounded-xl md:order-1">
              <img
                className="h-full w-full object-cover"
                src={InfrastuctureImg}
                alt="Infrastructure"
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
    href: "/Bridgeworld",
    title: "Bridgeworld",
  },
};
