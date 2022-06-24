import { Badge } from "~/components/Badge";
import RedStarImg from "../../public/img/red-star.png";
import LegionImg from "../../public/img/legion1.png";
import GoldCoinImg from "../../public/img/gold-coin.png";
import RedRupeeImg from "../../public/img/red-rupee.png";
import { WhyTreasureCardList } from "~/const";
import { CTAButton } from "~/components/Button";

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
        "Treasure is the decentralized video game console connecting games and communities together through imagination, $MAGIC, and NFTs.",
      keywords: "treasure, NFT, DeFi, games, community, imagination, magic",
      title: generateTitle("Why Treasure?"),
      origin: requestInfo.origin,
      url: getUrl(requestInfo),
      imgPath: "/why-treasure",
    }),
  };
};

export default function WhyTreasure() {
  return (
    <main>
      <div className="relative bg-honey-100 py-16 sm:py-24">
        <div className="mx-auto max-w-md px-8 text-center sm:max-w-3xl sm:px-6 lg:px-12">
          <Badge name="Why Treasure?" bgColor="bg-honey-200" />
          <h2 className="mt-12 text-3xl font-bold tracking-tight text-ruby-900 sm:text-5xl">
            Creating MAGIC together with a vibrant ecosystem of games and
            builders{" "}
          </h2>
        </div>
        <div className="mx-auto mt-16 max-w-sm px-4 text-center sm:max-w-5xl sm:px-8 lg:px-20">
          <div className="flex flex-col items-center rounded-2.5xl border-2 border-honey-200 bg-honey-50 px-4 pb-16 pt-8 sm:px-20">
            <img
              src={RedStarImg}
              className="h-36 w-36 sm:h-48 sm:w-48"
              alt="MAGIC"
            />
            <ol className="mt-24 list-none space-y-20 text-sm text-gray-500 [counter-reset:line] sm:mt-6 sm:ml-12 sm:space-y-4 sm:text-lg">
              <li className="relative text-center before:absolute before:-top-14 before:left-0 before:right-0 before:mx-auto before:inline-flex before:h-8 before:w-8 before:items-center before:justify-center before:rounded-full before:bg-ruby-900 before:p-2.5 before:tabular-nums before:text-honey-300 before:[counter-increment:line] before:![content:counter(line)] sm:text-left before:sm:top-1.5 before:sm:-left-16 before:sm:mx-0 before:sm:h-10 before:sm:w-10">
                Onboard into one of the most vibrant and passionate grass-roots
                communities of builders, talent and users (ie. community
                bootstrapping).
              </li>
              <li className="relative text-center before:absolute before:-top-14 before:left-0 before:right-0 before:mx-auto before:inline-flex before:h-8 before:w-8 before:items-center before:justify-center before:rounded-full before:bg-ruby-900 before:p-2.5 before:tabular-nums before:text-honey-300 before:[counter-increment:line] before:![content:counter(line)] sm:text-left before:sm:top-1.5 before:sm:-left-16 before:sm:mx-0 before:sm:h-10 before:sm:w-10">
                Contribute to and benefit from significant network effects
                driven from cross-game NFT/token composability, shared
                infrastructure (eg. marketplace, AMM) and a unified unit of
                account (MAGIC).
              </li>
              <li className="relative text-center before:absolute before:-top-14 before:left-0 before:right-0 before:mx-auto before:inline-flex before:h-8 before:w-8 before:items-center before:justify-center before:rounded-full before:bg-ruby-900 before:p-2.5 before:tabular-nums before:text-honey-300 before:[counter-increment:line] before:![content:counter(line)] sm:text-left before:sm:top-1.5 before:sm:-left-16 before:sm:mx-0 before:sm:h-10 before:sm:w-10">
                Leverage a high growth ecosystem with scale (eg. volume,
                liquidity, users, TVL, resources) and depth and breadth of
                capabilities.
              </li>
              <li className="relative text-center before:absolute before:-top-14 before:left-0 before:right-0 before:mx-auto before:inline-flex before:h-8 before:w-8 before:items-center before:justify-center before:rounded-full before:bg-ruby-900 before:p-2.5 before:tabular-nums before:text-honey-300 before:[counter-increment:line] before:![content:counter(line)] sm:text-left before:sm:top-1.5 before:sm:-left-16 before:sm:mx-0 before:sm:h-10 before:sm:w-10">
                Bootstrap operations and/or enrich game attractiveness by
                accessing a highly desired token with multi-layered demand
                (MAGIC) via grants.
              </li>
              <li className="relative text-center before:absolute before:-top-14 before:left-0 before:right-0 before:mx-auto before:inline-flex before:h-8 before:w-8 before:items-center before:justify-center before:rounded-full before:bg-ruby-900 before:p-2.5 before:tabular-nums before:text-honey-300 before:[counter-increment:line] before:![content:counter(line)] sm:text-left before:sm:top-1.5 before:sm:-left-16 before:sm:mx-0 before:sm:h-10 before:sm:w-10">
                Access demand on the largest NFT marketplace on Arbitrum and one
                of the strongest on L2.
              </li>
            </ol>
          </div>
        </div>
      </div>
      <div className="relative bg-night-900 py-16 sm:py-24">
        <div className="mx-auto max-w-md px-4 text-center sm:max-w-3xl sm:px-6 lg:px-12">
          <h2 className="mt-12 text-3xl font-bold tracking-tight text-honey-300 sm:text-5xl">
            How can we partner?
          </h2>
        </div>
        <div className="mx-auto mt-12 max-w-md px-4 sm:mt-24 sm:max-w-3xl sm:px-6 lg:max-w-9xl lg:px-12">
          <div className="grid gap-8 xl:grid-cols-3">
            <div className="space-y-10 rounded-2.5xl border-2 border-night-800 p-14 [background:linear-gradient(0deg,#131D2E,#131D2E),#101827]">
              <img
                src={GoldCoinImg}
                alt="Gold Coin"
                className="h-16 w-16 sm:h-20 sm:w-20"
              />
              <p className="text-xl font-semibold text-honey-600 sm:text-3xl">
                Bootstrapped Liquidity and Funding
              </p>
              <div className="space-y-4 text-base text-night-600 sm:text-xl">
                <p>
                  Help bootstrap the project with capital in its initial stages
                  as to complement existing go to market strategies. This would
                  be in the form of vesting MAGIC with key performance
                  milestones.
                </p>
              </div>
            </div>
            <div className="space-y-10 rounded-2.5xl border-2 border-night-800 p-14 [background:linear-gradient(0deg,#131D2E,#131D2E),#101827]">
              <img
                src={RedRupeeImg}
                alt="Red Rupee"
                className="h-16 w-16 sm:h-20 sm:w-20"
              />
              <p className="text-xl font-semibold text-honey-600 sm:text-3xl">
                MAGIC Emissions
              </p>
              <p className="text-base text-night-600 sm:text-xl">
                MAGIC and Treasure NFTs are woven deeply into the game mechanics
                and purpose of the project by complementing or seeding rewards
                in your metaverse, or raising funds or re-investing your
                treasury to form a metaverse guild.
              </p>
            </div>
            <div className="space-y-10 rounded-2.5xl border-2 border-night-800 p-14 [background:linear-gradient(0deg,#131D2E,#131D2E),#101827]">
              <img
                src={LegionImg}
                alt="Legion"
                className="h-16 w-16 sm:h-20 sm:w-20"
              />
              <p className="text-xl font-semibold text-honey-600 sm:text-3xl">
                Marketplace Listing
              </p>
              <p className="text-base text-night-600 sm:text-xl">
                All NFTs within an integrated project are listed on the Treasure
                Marketplace and denominated in MAGIC. Royalties received could
                go towards funding operations, ongoing in-game rewards and/or
                participation in Bridgeworld.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="relative bg-honey-100 py-16 sm:py-24">
        <div className="mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:max-w-9xl lg:px-12">
          <div className="grid gap-8 xl:grid-cols-2">
            {WhyTreasureCardList.map((card) => (
              <div
                key={card.name}
                className="flex flex-col justify-between space-y-8 rounded-2.5xl bg-honey-50 p-16"
              >
                <p className="text-xl font-bold text-ruby-900 sm:text-4xl">
                  {card.name}
                </p>
                <p className="text-base text-night-700 sm:text-2xl">
                  {card.description}
                </p>
                <div>
                  <CTAButton href={card.href}>
                    {card.buttonDescription}
                  </CTAButton>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}

export const handle = {
  breadcrumb: {
    href: "/why-treasure",
    title: "Why Treasure",
  },
};
