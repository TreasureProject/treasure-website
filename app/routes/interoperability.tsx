import { CheckCircleIcon } from "@heroicons/react/24/solid";
import Balancer from "react-wrap-balancer";
import type { HeadersFunction, MetaFunction } from "@remix-run/cloudflare";
import type { RootLoaderData } from "~/root";
import { generateTitle, getSocialMetas, getUrl } from "~/utils/seo";
import { commonHeaders } from "~/utils/misc.server";
import InteropIcon from "@/img/icons/Interop.svg";
import { BuildWithTreasure } from "~/components/BuildWithTreasure";
import GameBuildersProgramIcon from "@/img/icons/Badge_Diamond.webp";
import IconGamesImg from "@/img/stat-icons/Games.svg";
import MagicLogomarkImg from "@/img/magic-logomark.webp";
import { stats } from "~/const";

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

// hardcode the above array to an object with the key being the first word of the string

const interoperableList = {
  "Character Personas":
    "Make your characters transferable between multiple games. ",
  Currency: "Leverage shared currencies across games. ",
  Asset: "Use assets across multiple games.",
  IP: "Monetize your brand, stories, and universe with interoperable IP.",
  "Game loop / Economic": "User flow spanning multiple games. ",
  Rewards:
    "Issue rewards to players for completing specific actions across games.",
  "Item Drop Qualifier":
    "Reward players for owning items across games to drive further retention and engagement.",
  "Meta-game": "Gameplay beyond the main game.",
  "Shared tooling / Game Mechanics":
    "Elevate your world building with shared tooling and game mechanics.",
} as const;

const builders = [
  "Create new game formats and unique player experiences",
  "Gain access to a dedicated and passionate player base",
  "Collaborate with a community of builders driving continuous development of player content",
  "Leverage cross-game partnerships and promotions to drive player engagement and retention",
];

const players = [
  "Enjoy fun, new player experiences and never-ending gameplay",
  "Seamlessly explore and transition between games in the ecosystem",
  "Interact and play with other players in a more seamless and integrated way",
  "Derive greater value from your gaming assets across multiple games",
];

export default function Interoperability() {
  return (
    <main>
      <section
        id="interoperability"
        aria-labelledby="interoperability-title"
        className="relative bg-night-900 py-16 sm:py-24"
      >
        <div className="mx-auto w-min max-w-md px-8 text-center sm:max-w-5xl sm:px-6 lg:px-12">
          <div className="space-y-5">
            <img
              src={InteropIcon}
              alt="Interoperability"
              className="mx-auto h-12 w-12"
            />
            <h2 className="inline-block whitespace-nowrap text-base font-bold tracking-tight text-honey-200 sm:text-4xl">
              The future of gaming is here with Treasure
            </h2>
            <p className="text-xs text-night-300 sm:text-xl">
              <Balancer>
                Our open ecosystem lets characters, assets, game loops, and more
                flow freely between worlds. Discover what sets us apart from
                other gaming publishers and ecosystems with our groundbreaking
                interoperability solutions.
              </Balancer>
            </p>
          </div>
        </div>
      </section>
      <section className="group relative bg-[url('/img/bg-hero.jpg')] bg-cover bg-fixed bg-center bg-no-repeat py-16 sm:py-24">
        <div className="mx-auto max-w-sm px-4 text-center sm:max-w-4xl sm:px-8 lg:px-20">
          <div className="space-y-8 rounded-2xl bg-night-900/90 p-8 backdrop-blur-xl sm:p-20">
            <p className="text-base font-bold text-honey-200 sm:text-3xl">
              Treasure Thesis
            </p>
            <p className="text-sm text-night-300 sm:text-xl">
              Games and players that build together will create a stronger
              universe and unlock new, better gaming experiences.
            </p>
            <ol className="space-y-4 text-left text-xs text-night-200 sm:text-xl">
              <li className="flex items-center space-x-2.5">
                <CheckCircleIcon className="h-6 w-6 flex-shrink-0 text-ruby-900" />
                <p>Create new game formats and unique player experiences</p>
              </li>
              <li className="flex items-center space-x-2.5">
                <CheckCircleIcon className="h-6 w-6 flex-shrink-0 text-ruby-900" />
                <p>Gain access to a dedicated and passionate player base</p>
              </li>
            </ol>
            <div className="space-y-4 text-left text-xs text-night-300 sm:text-base">
              <p>
                It provides games and players an open economy where value is
                grown and accrued across participants in one meta-ecosystem,
                driving compounding network effects.
              </p>
              <p>
                While we are still early, exciting new opportunities for
                interoperability are being discovered across every segment of
                game development from design and economics to marketing and
                storytelling.
              </p>
              <p>
                And we are uniquely placed to explore this through a vibrant and
                intimate collective of connected games, communities and builders
                united around a common purpose.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section
        id="interconnected-gaming"
        aria-labelledby="interconnected-gaming"
        className="group relative bg-honey-100 py-16 sm:py-24"
      >
        <div className="mx-auto max-w-3xl px-8 sm:px-6 lg:max-w-9xl lg:px-12">
          <h2 className="text-center text-xl font-bold tracking-tight text-night-900 sm:text-3xl">
            1 + 1 = 3.
            <br /> Experience the power of interconnected gaming
          </h2>
          <div className="mt-16 grid grid-cols-1 gap-10 xl:grid-cols-2">
            <div className="space-y-6 rounded-2xl border-2 border-honey-200 bg-honey-50 p-8 sm:space-y-10 sm:p-12">
              <div className="flex items-center space-x-3 sm:space-x-5">
                <img
                  src={GameBuildersProgramIcon}
                  className="h-6 sm:h-10"
                  alt="Builders logo"
                />
                <h3 className="text-lg font-bold text-night-900 sm:text-4xl">
                  Builders
                </h3>
              </div>
              <ol className="space-y-4 text-xs text-night-800 sm:text-xl">
                {builders.map((text) => (
                  <li key={text} className="flex items-center space-x-2.5">
                    <CheckCircleIcon className="h-6 w-6 flex-shrink-0 text-ruby-900" />
                    <p>{text}</p>
                  </li>
                ))}
              </ol>
            </div>
            <div className="space-y-6 rounded-2xl border-2 border-honey-200 bg-honey-50 p-8 sm:space-y-10 sm:p-12">
              <div className="flex items-center space-x-3 sm:space-x-5">
                <img
                  src={IconGamesImg}
                  className="h-6 sm:h-10"
                  alt="Players logo"
                />
                <h3 className="text-lg font-bold text-night-900 sm:text-4xl">
                  Players
                </h3>
              </div>
              <ol className="space-y-4 text-xs text-night-800 sm:text-xl">
                {players.map((text) => (
                  <li key={text} className="flex items-center space-x-2.5">
                    <CheckCircleIcon className="h-6 w-6 flex-shrink-0 text-ruby-900" />
                    <p>{text}</p>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </section>
      <section
        id="how-to-make-their-game-interoperable"
        aria-labelledby="how-to-make-their-game-interoperable"
        className="group relative bg-[linear-gradient(0deg,#101827,#101827d1),url('/img/background/A2.webp')] bg-cover bg-fixed bg-center bg-no-repeat py-16 sm:py-24"
      >
        <div className="mx-auto max-w-3xl px-8 sm:px-6 lg:max-w-9xl lg:px-12">
          <div className="space-y-14">
            <h2 className="mx-auto max-w-xl px-20 text-center text-xl font-bold tracking-tight text-honey-200 sm:text-3xl">
              <Balancer>
                How can builders make their game interoperable?
              </Balancer>
            </h2>
            <p className="mx-auto max-w-3xl text-center text-gray-100">
              <Balancer>
                Unlock endless possibilities with interoperability across
                Treasure. The examples provided are just the tip of the iceberg
                — explore the unique opportunities it can bring to your game and
                players!
              </Balancer>
            </p>
            <div className="grid grid-cols-1 gap-3.5 sm:grid-cols-2 xl:grid-cols-3">
              {(
                Object.keys(
                  interoperableList
                ) as (keyof typeof interoperableList)[]
              ).map((title) => {
                const text = interoperableList[title];
                return (
                  <div
                    className="flex items-center space-x-2.5 rounded-lg border border-night-100/5 bg-night-100/5 p-6 backdrop-blur-lg"
                    key={title}
                  >
                    <CheckCircleIcon className="h-6 w-6 flex-shrink-0 text-ruby-900" />
                    <p className="text-sm text-honey-50 sm:text-base">
                      <span className="font-bold">{title}:</span> {text}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
      <section
        id="why-treasure"
        aria-labelledby="why-treasure"
        className="group relative bg-[linear-gradient(0deg,#101827,#101827d1),url('/img/background/C1.webp')] bg-cover bg-fixed bg-center bg-no-repeat py-16 sm:py-24"
      >
        <div className="mx-auto max-w-3xl px-8 sm:px-6 lg:max-w-9xl lg:px-12">
          <div className="space-y-14">
            <h2 className="mx-auto max-w-xl px-20 text-center text-xl font-bold tracking-tight text-honey-200 sm:text-3xl">
              Why Treasure?
            </h2>

            <div className="grid grid-cols-1 gap-3.5 sm:grid-cols-2 xl:grid-cols-4">
              {stats.map((stat) => {
                return (
                  <div
                    className="flex items-center space-x-5 rounded-lg border border-night-100/5 bg-night-100/5 p-6 backdrop-blur-lg"
                    key={stat.title}
                  >
                    <img src={stat.icon} className="w-12" alt="Icon" />
                    <div className="flex-col justify-center space-y-1">
                      <p className="text-base font-bold text-[#FFFDF7] lg:text-3xl">
                        {stat.value}
                      </p>
                      <p className="break-word text-sm text-night-400 lg:text-base lg:leading-5">
                        {stat.title}
                      </p>
                    </div>
                  </div>
                );
              })}
              <div className="flex items-center space-x-5 rounded-lg border border-[#C62222] bg-ruby-900 p-6">
                <img src={MagicLogomarkImg} className="w-12" alt="Icon" />
                <div className="flex-col justify-center space-y-1">
                  <p className="text-base font-bold text-[#FFFDF7] lg:text-3xl">
                    267k
                  </p>
                  <p className="break-word text-sm text-[#FFFDF7] lg:text-base lg:leading-5">
                    Unique MAGIC holders
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <BuildWithTreasure />
    </main>
  );
}
