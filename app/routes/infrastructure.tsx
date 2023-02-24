import { Card } from "~/components/Card";
import { Infrastructures } from "~/components/Infrastructures";
import { communityInfrastructure } from "~/const";

import type { HeadersFunction, MetaFunction } from "@remix-run/node";
import type { RootLoaderData } from "~/root";
import { generateTitle, getSocialMetas, getUrl } from "~/utils/seo";
import { commonHeaders } from "~/utils/misc.server";
import { BuildWithTreasure } from "~/components/BuildWithTreasure";

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
        "Treasure is the decentralized gaming ecosystem bringing games and players together through MAGIC.",
      keywords: "treasure, NFT, DeFi, games, community, imagination, magic",
      title: generateTitle("/infrastructure"),
      origin: requestInfo.origin,
      url: getUrl(requestInfo),
      imgPath: "/infrastructure",
    }),
  };
};

export default function Infrastructure() {
  return (
    <main>
      <div className="relative bg-night-900 py-16 sm:py-24">
        <div className="mx-auto max-w-md px-8 text-center sm:max-w-3xl sm:px-6 lg:px-12">
          <h2 className="text-xl font-bold text-honey-200 sm:text-4xl">
            The economic engine and tooling to make your imagination a reality.
          </h2>
        </div>
        <div className="mx-auto mt-12 max-w-md px-4 sm:max-w-3xl sm:px-6 lg:mt-20 lg:max-w-9xl lg:px-12">
          <Infrastructures />
        </div>
      </div>
      <div className="relative bg-honey-100 pt-16">
        <div className="mx-auto max-w-md px-4 text-center sm:max-w-3xl sm:px-6 lg:px-12">
          <h2 className="text-xl font-bold text-night-900 sm:text-4xl">
            Community-built infrastructure
          </h2>
        </div>
        <div className="mx-auto mt-8 max-w-md px-4 sm:mt-12 sm:max-w-3xl sm:px-6 lg:max-w-9xl lg:px-12">
          <div className="grid gap-8 border-b border-night-900/10 pb-16 sm:grid-cols-2">
            {communityInfrastructure.map((infrastructure) => (
              <Card key={infrastructure.name} card={infrastructure} />
            ))}
          </div>
        </div>
      </div>
      <BuildWithTreasure />
    </main>
  );
}

export const handle = {
  breadcrumb: {
    href: "/infrastructure",
    title: "Infrastructure",
  },
};
