import type { LoaderFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import { getTotalSupply, getUtilization } from "~/utils/stats";
import type { SitemapFunction } from "remix-sitemap";

export const sitemap: SitemapFunction = () => ({
  exclude: true,
});

const fallback = 48_352_024;

type LoaderData = number;

export const loader: LoaderFunction = async () => {
  const totalSupply = await getTotalSupply();
  const utilization = await getUtilization();
  return json<LoaderData>(totalSupply * utilization || fallback, {
    status: 200,
  });
};
