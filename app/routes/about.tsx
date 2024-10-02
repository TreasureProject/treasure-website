import type { HeadersFunction, MetaFunction } from "@remix-run/node";
import { Badge } from "~/components/Badge";
import { BuildWithTreasure } from "~/components/BuildWithTreasure";
import { MagicIcon } from "~/components/Icons";
import { Layout } from "~/components/Layout";
import { NewTreasureStats } from "~/components/TreasureStats";
import type { RootLoaderData } from "~/root";
import { commonHeaders } from "~/utils/misc.server";
import {
  generateTitle,
  genericImagePath,
  getSocialMetas,
  getUrl,
} from "~/utils/seo";

export const meta: MetaFunction = ({ matches }) => {
  const rootLoaderData = matches[0]?.data as RootLoaderData | undefined;
  return getSocialMetas({
    title: generateTitle("/about"),
    url: getUrl(rootLoaderData?.origin, rootLoaderData?.path),
    image: genericImagePath(rootLoaderData?.origin, "about"),
  });
};

export const headers: HeadersFunction = commonHeaders;

export default function About() {
  return (
    <Layout>
      <main>
        <div className="relative bg-night-900 py-16 pt-32 sm:py-24 sm:pt-48">
          <div className="mx-auto max-w-md px-8 text-center sm:max-w-5xl sm:px-6 lg:px-12">
            <Badge
              name="About Treasure"
              bgColor="bg-night-800"
              textColor="text-night-200"
            />
            <h2 className="mt-12 font-bold text-3xl text-honey-200 tracking-tight sm:text-5xl">
              The decentralized game console
            </h2>
          </div>
          <div className="mx-auto mt-16 max-w-sm px-4 text-center sm:max-w-4xl sm:px-8 lg:px-20">
            <div className="rounded-2xl border-2 border-night-800 px-4 py-20 sm:p-20">
              <p className="font-bold text-base text-night-500 sm:text-2xl">
                Treasure is building the decentralized game console to bring
                games and IP born out of web3 into the mainstream.
              </p>
              <ol className="mt-24 list-none space-y-20 text-gray-500 text-sm [counter-reset:line] sm:mt-10 sm:ml-12 sm:space-y-4 sm:text-lg">
                <li className="before:-top-14 before:![content:counter(line)] before:sm:-left-16 relative text-center before:absolute before:right-0 before:left-0 before:mx-auto before:inline-flex before:h-8 before:w-8 before:items-center before:justify-center before:rounded-full before:bg-ruby-900 before:p-2.5 before:text-honey-300 before:tabular-nums sm:text-left before:sm:top-1.5 before:sm:mx-0 before:sm:h-10 before:sm:w-10 before:[counter-increment:line]">
                  <span className="font-bold text-honey-50">Games:</span> Games
                  built from the ground up by Treasure and seasoned builders,
                  all connected by MAGIC.
                </li>
                <li className="before:-top-14 before:![content:counter(line)] before:sm:-left-16 relative text-center before:absolute before:right-0 before:left-0 before:mx-auto before:inline-flex before:h-8 before:w-8 before:items-center before:justify-center before:rounded-full before:bg-ruby-900 before:p-2.5 before:text-honey-300 before:tabular-nums sm:text-left before:sm:top-1.5 before:sm:mx-0 before:sm:h-10 before:sm:w-10 before:[counter-increment:line]">
                  <span className="font-bold text-honey-50">Community:</span>{" "}
                  Composite of many smaller communities, connected through lore,
                  guilds, resources, and MAGIC.
                </li>
                <li className="before:-top-14 before:![content:counter(line)] before:sm:-left-16 relative text-center before:absolute before:right-0 before:left-0 before:mx-auto before:inline-flex before:h-8 before:w-8 before:items-center before:justify-center before:rounded-full before:bg-ruby-900 before:p-2.5 before:text-honey-300 before:tabular-nums sm:text-left before:sm:top-1.5 before:sm:mx-0 before:sm:h-10 before:sm:w-10 before:[counter-increment:line]">
                  <span className="font-bold text-honey-50">
                    Infrastructure:
                  </span>{" "}
                  Decentralized infrastructure and tooling that arms builders
                  and game makers to bring their imagination to life.
                </li>
              </ol>
              <p className="mt-10 px-4 font-bold text-honey-200 text-sm sm:text-xl">
                All connected by:
              </p>
              <div className="mx-auto mt-10 block w-full rounded-tag bg-night-800 px-2.5 py-3 sm:w-max sm:py-1.5">
                <h3 className="flex items-center justify-center space-x-2 font-bold text-sm text-white sm:text-lg">
                  <MagicIcon />
                  <span>which powers everything</span>
                </h3>
              </div>
            </div>
          </div>
        </div>
        <NewTreasureStats type="secondary" />

        {/*
        <div className="relative bg-honey-100 pt-16">
          <div className="mx-auto max-w-3xl px-8 text-center sm:px-6 lg:max-w-7xl lg:px-12">
            <h2 className="text-center text-3xl font-bold tracking-tight text-ruby-900 sm:text-5xl">
              Shared Resources
            </h2>

            <div className="relative mt-16 py-16 lg:grid lg:grid-flow-row-dense lg:grid-cols-7 lg:items-center lg:gap-8">
              <div className="mb-12 flex items-center justify-center lg:col-span-3 lg:col-start-1 lg:mb-0">
                <img
                  className="h-48 w-48 object-cover md:h-80 md:w-80 lg:h-[26rem] lg:w-[26rem]"
                  src={RedStarImg}
                  alt="MAGIC"
                />
              </div>
              <div className="rounded-2.5xl border-2 border-honey-200 bg-honey-50 p-14 text-left lg:col-span-4">
                <h3 className="text-xl font-extrabold text-ruby-900 sm:text-4xl">
                  MAGIC as currency
                </h3>
                <div className="mt-6 space-y-4 text-sm text-night-700 sm:text-base">
                  <p>
                    MAGIC is the currency of the Treasure ecosystem that serves
                    as cross-metaverse monies within the common economic layer.
                  </p>
                  <p>
                    MAGIC was designed to be increasingly scarce (emissions
                    declining as complexity of the economy increases), as it
                    weaves an ever-growing web of narrative bridges within
                    Treasure's ecosystem of metaverses.
                  </p>
                  <p>
                    Players are able to earn and use MAGIC through playing
                    Bridgeworld (one of Treasure's flagship products) and other
                    game cartridges. Staked MAGIC in the Atlas Mine also enables
                    holders to govern the broader Treasure ecosystem.
                  </p>
                </div>
              </div>
            </div>
            <div className="relative mt-12 border-b border-night-900/10 pb-16 lg:grid lg:grid-flow-row-dense lg:grid-cols-7 lg:items-center lg:gap-8">
              <div className="mb-12 flex items-center justify-center lg:order-1 lg:col-span-3 lg:col-start-5 lg:mb-0">
                <img
                  className="h-48 w-48 object-cover md:h-80 md:w-80 lg:h-[26rem] lg:w-[26rem]"
                  src={TreasureImg}
                  alt="Treasures"
                />
              </div>
              <div className="rounded-2.5xl border-2 border-honey-200 bg-honey-50 p-14 text-left lg:order-2 lg:col-span-4">
                <h3 className="text-xl font-bold text-ruby-900 sm:text-4xl">
                  Treasures as resources
                </h3>
                <div className="mt-6 space-y-4 text-sm text-night-700 sm:text-base">
                  <p>
                    Treasures are MAGIC-infused assets with varying uses across
                    Bridgeworld and the rest of the Treasure ecosystem.
                  </p>
                  <p>
                    Beyond Treasures, resources from other games also exist to
                    create bridges between game worlds.
                  </p>
                  <p>
                    All reinforcing Treasure's thesis of true and novel form of
                    interoperability.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
         */}
        <BuildWithTreasure />
      </main>
    </Layout>
  );
}

export const handle = {
  breadcrumb: {
    href: "/about",
    title: "About",
  },
};
