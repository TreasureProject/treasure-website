import { Badge } from "~/components/Badge";
import { Card } from "~/components/Card";
import { Infrastructures } from "~/components/Infrastructures";
import { communityInfrastructure } from "~/const";

import type { MetaFunction } from "@remix-run/cloudflare";
import type { RootLoaderData } from "~/root";
import { generateTitle, getSocialMetas, getUrl } from "~/utils/seo";

export const meta: MetaFunction = ({ parentsData }) => {
  const {
    root: { requestInfo },
  } = parentsData as {
    root: RootLoaderData;
  };

  return {
    ...getSocialMetas({
      description:
        "Treasure is a decentralized video game console connecting games and communities together through imagination, $MAGIC, and NFTs.",
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
      <div className="relative bg-honey-900 py-16 sm:py-24">
        <div className="mx-auto max-w-md px-8 text-center sm:max-w-3xl sm:px-6 lg:px-12">
          <Badge name="Infrastructure" bgColor="bg-honey-200" />
          <h2 className="mt-12 text-center text-3xl font-bold tracking-tight text-night-900 sm:text-5xl">
            The economic engine and tooling to make your imagination a reality.
          </h2>
        </div>
        <div className="mx-auto mt-20 max-w-md px-4 sm:max-w-3xl sm:px-6 lg:max-w-6xl lg:px-12">
          <Infrastructures />
        </div>
      </div>
      <div className="relative bg-honey-100 py-16 sm:py-24">
        <div className="mx-auto max-w-md px-4 text-center sm:max-w-3xl sm:px-6 lg:px-12">
          <h2 className="mt-12 text-3xl font-bold tracking-tight text-night-900 sm:text-5xl">
            Community-built infrastructure
          </h2>
        </div>
        <div className="mx-auto mt-12 max-w-md px-4 sm:mt-24 sm:max-w-3xl sm:px-6 lg:max-w-9xl lg:px-12">
          <div className="grid gap-8 sm:grid-cols-2">
            {communityInfrastructure.map((infrastructure) => (
              <Card key={infrastructure.name} card={infrastructure} />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}

export const handle = {
  breadcrumb: {
    href: "/infrastructure",
    title: "Infrastructure",
  },
};
