import { Link } from "@remix-run/react";
import { Badge } from "~/components/Badge";
import { MagicIcon } from "~/components/Icons";
import { TreasurePosts } from "~/components/TreasurePosts";
import { TreasureStats } from "~/components/TreasureStats";
import MagicImg from "../../public/img/magic.png";
import TreasureImg from "../../public/img/treasures.png";

export default function About() {
  return (
    <main>
      <div className="relative bg-night-900 py-16 sm:py-24">
        <div className="mx-auto max-w-md px-8 text-center sm:max-w-5xl sm:px-6 lg:px-12">
          <Badge
            name="About Treasure"
            bgColor="bg-night-800"
            textColor="text-night-200"
          />
          <h2 className="mt-12 text-3xl font-bold tracking-tight text-honey-200 sm:text-5xl">
            The decentralized game console
          </h2>
        </div>
        <div className="mx-auto mt-16 max-w-sm px-4 text-center sm:max-w-4xl sm:px-8 lg:px-20">
          <div className="rounded-2.5xl border-2 border-night-800 px-4 py-20 sm:p-20">
            <p className="text-2xl font-semibold text-night-500">
              Treasure is building a decentralized 'game console' and publisher
              stack.
            </p>
            <ol className="mt-24 list-none space-y-20 text-lg text-gray-500 [counter-reset:line] sm:mt-10 sm:ml-12 sm:space-y-4">
              <li className="relative text-center before:absolute before:-top-16 before:left-0 before:right-0 before:mx-auto before:inline-flex before:h-10 before:w-10 before:items-center before:justify-center before:rounded-full before:bg-ruby-900 before:p-2.5 before:tabular-nums before:text-honey-300 before:[counter-increment:line] before:![content:counter(line)] sm:text-left before:sm:top-1.5 before:sm:-left-16 before:sm:mx-0">
                Cartridges: Games and metaverses built from the ground up by
                Treasure and seasoned builders, all connected by $MAGIC.
              </li>
              <li className="relative text-center before:absolute before:-top-16 before:left-0 before:right-0 before:mx-auto before:inline-flex before:h-10 before:w-10 before:items-center before:justify-center before:rounded-full before:bg-ruby-900 before:p-2.5 before:tabular-nums before:text-honey-300 before:[counter-increment:line] before:![content:counter(line)] sm:text-left before:sm:top-1.5 before:sm:-left-16 before:sm:mx-0">
                Community: Composite of many smaller communities, connected
                through lore, guilds, resources, and $MAGIC.
              </li>
              <li className="relative text-center before:absolute before:-top-16 before:left-0 before:right-0 before:mx-auto before:inline-flex before:h-10 before:w-10 before:items-center before:justify-center before:rounded-full before:bg-ruby-900 before:p-2.5 before:tabular-nums before:text-honey-300 before:[counter-increment:line] before:![content:counter(line)] sm:text-left before:sm:top-1.5 before:sm:-left-16 before:sm:mx-0">
                Infrastructure: The shared economic engine, tooling and
                resources that powers the ecosystem and empowers builders.
              </li>
            </ol>
            <p className="mt-10 px-4 text-xl font-semibold text-honey-200">
              All connected by a dual resource model:
            </p>
            <div className="mx-auto mt-10 block w-full rounded-tag bg-night-800 px-2.5 py-1.5 sm:w-max">
              <h3 className="flex items-center justify-center space-x-2 text-lg font-semibold tracking-wider text-white">
                <MagicIcon />
                <span>Powers everything</span>
              </h3>
            </div>
            <div className="mx-auto mt-5 block rounded-tag bg-night-800 px-2.5 py-1.5 sm:w-max">
              <h3 className="text-lg font-semibold tracking-wider text-honey-50">
                Treasures as composable resources
              </h3>
            </div>
          </div>
        </div>
      </div>
      <TreasureStats />
      <div className="relative bg-honey-25 py-16 sm:py-24">
        <div className="mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:max-w-8xl lg:px-12">
          <div className="grid gap-8 xl:grid-cols-2">
            <div className="rounded-2.5xl border-2 border-honey-100 bg-honey-50 p-14">
              <h3 className="text-3xl font-semibold text-ruby-900 sm:text-5xl">
                The Problem
              </h3>
              <p className="mt-5 text-lg text-night-700 sm:mt-10">
                Most P2E games today are unsustainable by design. Adoption of
                the game lasts as long as speculation over the native token
                continues. After yield has been exhausted, users move on to new
                projects and tokens. Builders and games are separated from one
                another, left in isolation to deal with evaporating revenue,
                community attrition, and token illiquidity.
              </p>
            </div>
            <div className="rounded-2.5xl border-2 border-honey-100 bg-honey-50 p-14">
              <h3 className="text-3xl font-semibold text-ruby-900 sm:text-5xl">
                The Solution
              </h3>
              <p className="mt-5 text-lg text-night-700 sm:mt-10">
                Most P2E games today are unsustainable by design. Adoption of
                the game lasts as long as speculation over the native token
                continues. After yield has been exhausted, users move on to new
                projects and tokens. Builders and games are separated from one
                another, left in isolation to deal with evaporating revenue,
                community attrition, and token illiquidity.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="relative bg-honey-100 py-16 sm:py-24">
        <div className="mx-auto max-w-3xl px-8 text-center sm:px-6 lg:max-w-7xl lg:px-12">
          <h2 className="text-center text-3xl font-bold tracking-tight text-ruby-900 sm:text-5xl">
            How Treasure Works
          </h2>

          <div className="relative mt-16 lg:grid lg:grid-flow-row-dense lg:grid-cols-7 lg:items-center lg:gap-8">
            <div className="mb-12 flex items-center justify-center lg:col-span-3 lg:col-start-1 lg:mb-0">
              <img
                className="h-80 w-80 object-cover"
                src={MagicImg}
                alt="Magic"
              />
            </div>
            <div className="rounded-2.5xl border-2 border-honey-200 bg-honey-50 p-14 text-left lg:col-span-4">
              <h3 className="text-3xl font-extrabold text-ruby-900 sm:text-4xl">
                $Magic as currency
              </h3>
              <div className="mt-6 space-y-4 text-night-700">
                <p>
                  MAGIC is the currency of Treasure that serves as
                  cross-metaverse monies within the common economic layer.
                </p>
                <p>
                  MAGIC was designed to be increasingly scarce (emissions
                  declining as complexity of the economy increases), as it
                  weaves an ever-growing web of narrative bridges within
                  Treasure’s ecosystem of metaverses.
                </p>
                <p>
                  Players are able to earn $MAGIC through playing Bridgeworld
                  (one of Treasure’s flagship products) and other game
                  cartridges. The Treasure ecosystem, therefore, is governed by
                  MAGIC holders through TreasureDAO.
                </p>
              </div>
            </div>
          </div>
          <div className="relative mt-12 lg:mt-20 lg:grid lg:grid-flow-row-dense lg:grid-cols-7 lg:items-center lg:gap-8">
            <div className="mb-12 flex items-center justify-center lg:order-1 lg:col-span-3 lg:col-start-5 lg:mb-0">
              <img
                className="h-80 w-80 object-cover"
                src={TreasureImg}
                alt="Treasures"
              />
            </div>
            <div className="rounded-2.5xl border-2 border-honey-200 bg-honey-50 p-14 text-left lg:order-2 lg:col-span-4">
              <h3 className="text-3xl font-semibold text-ruby-900 sm:text-4xl">
                Treasures as resources
              </h3>
              <div className="mt-6 space-y-4 text-night-700">
                <p>
                  Treasures (NFTs) are a set of economic resources shared across
                  metaverses. As such, each NFT carries with them a unique story
                  that weaves between different worlds. They are lore of other
                  worlds, and they, themselves are the bridges between them.
                </p>
                <p>
                  It began with Bridgeworld but utility for Treasures will
                  continue to be introduced to other game cartridges,
                  reinforcing our interoperability thesis of NFTs shared across
                  metaverses.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <TreasurePosts />
    </main>
  );
}

export const handle = {
  breadcrumb: {
    href: "/about",
    title: "About",
  },
};
