import { Badge } from "~/components/Badge";

import type { HeadersFunction, MetaFunction } from "@remix-run/node";
import type { RootLoaderData } from "~/root";
import {
  generateTitle,
  genericImagePath,
  getSocialMetas,
  getUrl,
} from "~/utils/seo";
import { commonHeaders } from "~/utils/misc.server";
import { Layout } from "~/components/Layout";
import ecosystemApps from "~/data/ecosystem.json";

export const headers: HeadersFunction = commonHeaders;

export const meta: MetaFunction = ({ parentsData }) => {
  const {
    root: { requestInfo },
  } = parentsData as {
    root: RootLoaderData;
  };

  return getSocialMetas({
    title: generateTitle("/ecosystem"),
    url: getUrl(requestInfo),
    image: genericImagePath(requestInfo.origin, "ecosystem"),
  });
};

const Card = ({ app }: { app: App }) => {
  return (
    <a
      className="flex flex-col rounded-lg border-2 border-honey-300 bg-honey-50 px-4 py-3 leading-normal transition-all  hover:border-honey-500 hover:bg-white md:px-9 md:py-8"
      href={"https://" + (app.gameUrl ? app.gameUrl : app.url)}
      target="_blank"
      rel="noopener noreferrer"
    >
      <div className="flex flex-row justify-between">
        <img
          className="flex w-[64px] flex-row bg-honey-100"
          src={app.image}
          alt={app.name + " Logo"}
        />

        <div className="flex flex-col items-end">
          <span className="inline-block w-max rounded-lg border-honey-700 bg-honey-200 px-2.5 py-1 font-mono text-[0.75rem] font-medium uppercase text-ruby-900">
            {app.type}
          </span>
        </div>
      </div>

      <div className="mt-4 flex flex-col">
        <p className="text-lg font-bold text-night-900 md:text-xl">
          {app.name}
        </p>
        <p className="text-sm font-normal text-night-600 md:text-base">
          {app.url}
        </p>
        <p className="mt-4 text-xs text-night-900 md:text-sm">
          {app.description}
        </p>
      </div>
    </a>
  );
};

type App = {
  name: string;
  description: string;
  type: string;
  url: string;
  gameUrl?: string;
  image: string;
};

export default function Team() {
  return (
    <Layout>
      <main>
        <div className="relative bg-night-900 pb-16 pt-32 sm:pb-24 sm:pt-48">
          <div className="mx-auto grid max-w-md grid-cols-1 place-items-center px-8 sm:max-w-2xl sm:px-6 lg:px-12">
            <Badge
              name="Ecosystem"
              bgColor="bg-honey-100"
              className="flex flex-row border border-honey-700"
            />
            <h2 className="mt-12 flex-row text-center text-3xl font-bold tracking-tight text-honey-200 sm:text-5xl">
              The Treasure ecosystem is full of apps, games, and integrations.
            </h2>
            <a
              href="https://github.com/TreasureProject/treasure-website?tab=readme-ov-file"
              target="_blank"
              rel="noreferrer"
              className="text-md mt-6 flex h-10 w-max items-center rounded-md border border-ruby-900 bg-ruby-900 px-4 text-center font-semibold transition-colors hover:bg-ruby-1000 md:mt-14 md:h-14 md:rounded-lg md:px-8 md:text-lg"
            >
              Submit App
            </a>
          </div>
        </div>
        <div className="relative space-y-16 bg-honey-100 py-16 sm:py-24">
          <div className="mx-auto max-w-3xl px-8 sm:px-6 lg:max-w-9xl lg:px-12">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-4 lg:grid-cols-3 xl:grid-cols-4">
              {ecosystemApps.map((app) => (
                <Card key={app.name} app={app} />
              ))}
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
}
