import { Badge } from "~/components/Badge";

import { Icon } from "@radix-ui/react-select";
import type { HeadersFunction, MetaFunction } from "@remix-run/node";
import { useSearchParams } from "@remix-run/react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "~/components/Dropdown";
import { Layout } from "~/components/Layout";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "~/components/Select";
import Button from "~/components/new-landing/Button";
import { ecosystem } from "~/data/ecosystem";
import type { RootLoaderData } from "~/root";
import { commonHeaders } from "~/utils/misc.server";
import {
  generateTitle,
  genericImagePath,
  getSocialMetas,
  getUrl,
} from "~/utils/seo";

export const headers: HeadersFunction = commonHeaders;

// extract type from ecosystem, remove duplicates
const extractTypeFromEcosystem = [...new Set(ecosystem.map((app) => app.type))];

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
      href={`https://${app.gameUrl ? app.gameUrl : app.url}`}
      target="_blank"
      rel="noopener noreferrer"
    >
      <div className="flex flex-row justify-between">
        <img
          className="flex w-[64px] flex-row bg-honey-100"
          src={app.image}
          alt={`${app.name} Logo`}
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
  const [searchParams, setSearchParams] = useSearchParams();
  const type = searchParams.get("type") || "all";
  const search = searchParams.get("search") || "";

  const filteredEcosystem = (
    type === "all"
      ? ecosystem
      : ecosystem.filter((app) => app.type.toLowerCase() === type.toLowerCase())
  ).filter((app) => app.name.toLowerCase().includes(search.toLowerCase()));

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
        <div className="relative max-w-3xl space-y-4 bg-honey-100 py-16 px-8 sm:py-24 sm:px-6 lg:max-w-9xl lg:px-12">
          <div className="flex items-center justify-end gap-4">
            <input
              id="search"
              name="search"
              placeholder="Search"
              value={search}
              onChange={(e) => {
                const params = new URLSearchParams(searchParams);
                params.set("search", e.target.value);
                setSearchParams(params, {
                  preventScrollReset: true,
                });
              }}
              className="h-9 w-[250px] rounded-lg border-2 border-honey-700 bg-honey-100 px-3 text-sm font-semibold text-night-800 placeholder:font-normal placeholder:text-night-500 focus-within:border-honey-900 focus-within:outline-none focus-visible:outline-none"
            />
            <Select
              defaultValue={type}
              onValueChange={(type) => {
                const params = new URLSearchParams(searchParams);
                params.set("type", type);
                setSearchParams(params, {
                  preventScrollReset: true,
                });
              }}
            >
              <SelectTrigger className="w-max space-x-1.5 border-honey-500 bg-honey-300 text-night-900">
                <SelectValue placeholder="Select a type" />
              </SelectTrigger>
              <SelectContent
                align="end"
                className="border-honey-500 bg-honey-200 p-2 text-new-night-700 shadow-honey-100/10"
              >
                <SelectItem key="all" value="all">
                  All
                </SelectItem>
                {extractTypeFromEcosystem.map((type) => {
                  return (
                    <SelectItem key={type} value={type.toLowerCase()}>
                      {type}
                    </SelectItem>
                  );
                })}
              </SelectContent>
            </Select>
          </div>

          {filteredEcosystem.length > 0 ? (
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-4 lg:grid-cols-3 xl:grid-cols-4">
              {filteredEcosystem.map((app) => (
                <Card key={app.name} app={app} />
              ))}
            </div>
          ) : (
            <div className="flex h-full flex-col items-center justify-center">
              <p className="text-lg font-bold text-new-night-700">
                No apps found
              </p>
            </div>
          )}
        </div>
      </main>
    </Layout>
  );
}
