import type { LoaderFunction } from "@remix-run/cloudflare";
import { json } from "@remix-run/cloudflare";
import { getTotalSupply, getUtilization } from "~/utils/stats";

const fallback = 48_352_024;

type LoaderData = number;

export const loader: LoaderFunction = async () => {
  const totalSupply = await getTotalSupply();
  const utilization = await getUtilization();
  return json<LoaderData>(totalSupply * utilization || fallback, {
    status: 200,
  });
};
