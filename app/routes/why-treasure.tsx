import { Badge } from "~/components/Badge";
import MagicImg from "../../public/img/magic.png";
import LegionImg from "../../public/img/legion1.png";
import GoldCoinImg from "../../public/img/gold-coin.png";
import RedRupeeImg from "../../public/img/red-rupee.png";
import { WhyTreasureCardList } from "~/const";
import { CTAButton } from "~/components/Button";

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
            <img src={MagicImg} className="h-48 w-48" alt="Magic" />
            <ol className="mt-24 list-none space-y-20 text-lg text-gray-500 [counter-reset:line] sm:mt-6 sm:ml-12 sm:space-y-4">
              <li className="relative text-center before:absolute before:-top-16 before:left-0 before:right-0 before:mx-auto before:inline-flex before:h-10 before:w-10 before:items-center before:justify-center before:rounded-full before:bg-ruby-900 before:p-2.5 before:tabular-nums before:text-honey-300 before:[counter-increment:line] before:![content:counter(line)] sm:text-left before:sm:top-1.5 before:sm:-left-16 before:sm:mx-0">
                Onboard into one of the most vibrant and passionate grass-roots
                communities of builders, talent and users (ie. community
                bootstrapping).
              </li>
              <li className="relative text-center before:absolute before:-top-16 before:left-0 before:right-0 before:mx-auto before:inline-flex before:h-10 before:w-10 before:items-center before:justify-center before:rounded-full before:bg-ruby-900 before:p-2.5 before:tabular-nums before:text-honey-300 before:[counter-increment:line] before:![content:counter(line)] sm:text-left before:sm:top-1.5 before:sm:-left-16 before:sm:mx-0">
                Contribute to and benefit from significant network effects
                driven from cross-game NFT/token composability, shared
                infrastructure (eg. marketplace, AMM) and a unified unit of
                account (MAGIC).
              </li>
              <li className="relative text-center before:absolute before:-top-16 before:left-0 before:right-0 before:mx-auto before:inline-flex before:h-10 before:w-10 before:items-center before:justify-center before:rounded-full before:bg-ruby-900 before:p-2.5 before:tabular-nums before:text-honey-300 before:[counter-increment:line] before:![content:counter(line)] sm:text-left before:sm:top-1.5 before:sm:-left-16 before:sm:mx-0">
                Leverage a high growth ecosystem with scale (eg. volume,
                liquidity, users, TVL, resources) and depth and breadth of
                capabilities.
              </li>
              <li className="relative text-center before:absolute before:-top-16 before:left-0 before:right-0 before:mx-auto before:inline-flex before:h-10 before:w-10 before:items-center before:justify-center before:rounded-full before:bg-ruby-900 before:p-2.5 before:tabular-nums before:text-honey-300 before:[counter-increment:line] before:![content:counter(line)] sm:text-left before:sm:top-1.5 before:sm:-left-16 before:sm:mx-0">
                Bootstrap operations and/or enrich game attractiveness by
                accessing a highly desired token with multi-layered demand
                (MAGIC) via grants.
              </li>
              <li className="relative text-center before:absolute before:-top-16 before:left-0 before:right-0 before:mx-auto before:inline-flex before:h-10 before:w-10 before:items-center before:justify-center before:rounded-full before:bg-ruby-900 before:p-2.5 before:tabular-nums before:text-honey-300 before:[counter-increment:line] before:![content:counter(line)] sm:text-left before:sm:top-1.5 before:sm:-left-16 before:sm:mx-0">
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
              <img src={GoldCoinImg} alt="Gold Coin" className="h-20 w-20" />
              <p className="text-3xl font-semibold text-honey-600">
                Bootstrapped Liquidity and Funding
              </p>
              <div className="space-y-4 text-xl text-night-600">
                <p>
                  Most P2E games today are unsustainable by design. Adoption of
                  the game lasts as long as speculation over the native token
                  continues. After yield has been exhausted, users move on to
                  new projects and tokens.
                </p>

                <p>
                  Builders and games are separated from one another, left in
                  isolation to deal with evaporating revenue, community
                  attrition, and token illiquidity.
                </p>
              </div>
            </div>
            <div className="space-y-10 rounded-2.5xl border-2 border-night-800 p-14 [background:linear-gradient(0deg,#131D2E,#131D2E),#101827]">
              <img src={RedRupeeImg} alt="Red Rupee" className="h-20 w-20" />
              <p className="text-3xl font-semibold text-honey-600">
                MAGIC Emissions
              </p>
              <p className="text-xl text-night-600">
                MAGIC and Treasure NFTs are woven deeply into the game mechanics
                and purpose of the project by complementing or seeding rewards
                in your metaverse, or raising funds or re-investing your
                treasury to form a metaverse guild.
              </p>
            </div>
            <div className="space-y-10 rounded-2.5xl border-2 border-night-800 p-14 [background:linear-gradient(0deg,#131D2E,#131D2E),#101827]">
              <img src={LegionImg} alt="Legion" className="h-20 w-20" />
              <p className="text-3xl font-semibold text-honey-600">
                Marketplace Listing
              </p>
              <p className="text-xl text-night-600">
                All NFTs within an integrated project are listed on Trove and
                denominated in MAGIC. Royalties received would go towards
                funding ongoing in-game rewards and/or participation in
                Bridgeworld.
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
                <p className="text-xl font-semibold text-ruby-900 sm:text-4xl">
                  {card.name}
                </p>
                <p className="text-base text-night-700 sm:text-2xl">
                  {card.description}
                </p>
                <div>
                  <CTAButton>{card.buttonDescription}</CTAButton>
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
