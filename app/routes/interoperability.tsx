import { CheckCircleIcon } from "@heroicons/react/24/solid";
import { BridgeIcon } from "~/components/Icons";
import BridgeworldImg from "@/img/bridgeworld.webp";
import Balancer from "react-wrap-balancer";
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
        "Treasure is the decentralized gaming ecosystem bringing games and players together through MAGIC.",
      keywords: "treasure, NFT, DeFi, games, community, imagination, magic",
      title: generateTitle("/interoperability"),
      origin: requestInfo.origin,
      url: getUrl(requestInfo),
      imgPath: "/interoperability",
    }),
  };
};

export const headers: HeadersFunction = commonHeaders;

const interoperableList = [
  "Character Personas ability to transfer between more than 1 game",
  "Currency Ability to transfer money between more than 1 game",
  "Asset Ability to use assets between more than 1 game",
  'IP: Stories/Brand/Universe/Monetization Interop of brand at a whole view / building in the same "universe"',
  "Game loop / economic A user flow that spans across more than 1 game",
  "Rewards Receiving something in return for doing X",
  "Item Drop Qualifier: A type of reward given in return for owning X",
  "Meta-game",
  "Shared tooling / game mechanics Shared code for world building",
];

export default function Interoperability() {
  return (
    <main>
      <section
        id="interoperability"
        aria-labelledby="interoperability-title"
        className="relative bg-honey-100 py-16 sm:py-24"
      >
        <div className="mx-auto w-min max-w-md px-8 text-center sm:max-w-5xl sm:px-6 lg:px-12">
          <div className="space-y-5">
            <h2 className="inline-block whitespace-nowrap text-2xl font-bold tracking-tight text-night-900 sm:text-4xl">
              Enter a new world of gaming
            </h2>
            <p className="text-base text-night-700 sm:text-xl">
              Treasure fosters an open, interoperable ecosystem allowing
              characters, assets, game loops, and more to flow from one world to
              the next.
            </p>
            <BridgeIcon className="mx-auto h-12 w-12" />
          </div>
        </div>
      </section>
      <section
        id="information"
        aria-labelledby="information"
        className="group relative bg-honey-50 py-16 sm:py-24"
      >
        <div className="mx-auto max-w-3xl px-8 sm:px-6 lg:max-w-8xl lg:px-12">
          <div className="space-y-12 sm:space-y-20">
            <div className="relative lg:grid lg:grid-flow-row-dense lg:grid-cols-8 lg:gap-8">
              <div className="mb-12 flex items-center justify-center lg:col-span-4 lg:mb-0">
                <img
                  className="rh-full w-full rounded-2xl object-cover"
                  src={BridgeworldImg}
                  alt="Bridgeworld"
                />
              </div>
              <div className="p-0 sm:p-14 lg:col-span-4">
                <h3 className="text-xl font-bold text-night-900 sm:text-3xl">
                  Build with an interoperable ecosystem of builders
                </h3>
                <ol className="mt-10 space-y-4 text-base text-night-800 sm:text-xl">
                  <li className="flex items-center space-x-2.5">
                    <CheckCircleIcon className="h-6 w-6 flex-shrink-0 text-ruby-900 [&>path]:stroke-white [&>path]:stroke-[1]" />
                    <p className="text-base sm:text-xl">
                      Create new game formats and unique player experiences
                    </p>
                  </li>
                  <li className="flex items-center space-x-2.5">
                    <CheckCircleIcon className="h-6 w-6 flex-shrink-0 text-ruby-900 [&>path]:stroke-white [&>path]:stroke-[1]" />
                    <p className="text-base sm:text-xl">
                      Gain access to a dedicated and passionate player base
                    </p>
                  </li>
                  <li className="flex items-center space-x-2.5">
                    <CheckCircleIcon className="h-6 w-6 flex-shrink-0 text-ruby-900 [&>path]:stroke-white [&>path]:stroke-[1]" />
                    <p className="text-base sm:text-xl">
                      Collaborate with a community of builders driving
                      continuous development of player content
                    </p>
                  </li>
                  <li className="flex items-center space-x-2.5">
                    <CheckCircleIcon className="h-6 w-6 flex-shrink-0 text-ruby-900 [&>path]:stroke-white [&>path]:stroke-[1]" />
                    <p className="text-base sm:text-xl">
                      Leverage cross-game partnerships and promotions to drive
                      player engagement and retention
                    </p>
                  </li>
                </ol>
              </div>
            </div>
            <div className="relative lg:grid lg:grid-flow-row-dense lg:grid-cols-8 lg:gap-8">
              <div className="mb-12 flex items-center justify-center lg:order-last lg:col-span-4 lg:mb-0">
                <img
                  className="h-full w-full rounded-2xl object-cover"
                  src={BridgeworldImg}
                  alt="Treasures"
                />
              </div>
              <div className="p-0 sm:p-14 lg:col-span-4">
                <h3 className="text-xl font-bold text-night-900 sm:text-3xl">
                  What are the benefits of interoperability for game builders?
                </h3>
                <ol className="mt-10 space-y-4 text-base text-night-800 sm:text-xl">
                  <li className="flex items-center space-x-2.5">
                    <CheckCircleIcon className="h-6 w-6 flex-shrink-0 text-ruby-900 [&>path]:stroke-white [&>path]:stroke-[1]" />
                    <p className="text-base sm:text-xl">
                      More than a buzz word: games are truly connected and
                      interwoven within Treasure.
                    </p>
                  </li>
                  <li className="flex items-center space-x-2.5">
                    <CheckCircleIcon className="h-6 w-6 flex-shrink-0 text-ruby-900 [&>path]:stroke-white [&>path]:stroke-[1]" />
                    <p className="text-base sm:text-xl">
                      Shared resources and assets across games
                    </p>
                  </li>
                  <li className="flex items-center space-x-2.5">
                    <CheckCircleIcon className="h-6 w-6 flex-shrink-0 text-ruby-900 [&>path]:stroke-white [&>path]:stroke-[1]" />
                    <p className="text-base sm:text-xl">
                      Game mechanics that tie together
                    </p>
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        id="how-to-make-their-game-interoperable"
        aria-labelledby="how-to-make-their-game-interoperable"
        className="group relative bg-night-900 py-16 sm:py-24"
      >
        <div className="mx-auto max-w-3xl px-8 sm:px-6 lg:max-w-8xl lg:px-12">
          <h2 className="px-20 text-center text-xl font-bold tracking-tight text-honey-200 sm:text-3xl">
            <Balancer>How can builders make their game interoperable?</Balancer>
          </h2>
          <div className="mt-14 grid grid-cols-1 gap-3.5 sm:grid-cols-2 xl:grid-cols-3">
            {interoperableList.map((item) => (
              <div
                className="flex items-center space-x-2.5 rounded-lg border border-night-800 bg-[#1F2737] p-6"
                key={item}
              >
                <CheckCircleIcon className="h-6 w-6 flex-shrink-0 text-ruby-900" />
                <p className="text-sm text-honey-50 sm:text-base">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
