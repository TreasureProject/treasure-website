import type { MetaFunction } from "@remix-run/cloudflare";
import { useRouteData } from "remix-utils";
import { Studio } from "sanity/lib/dts/src/studio";
import type { RootLoaderData } from "~/root";
import config from "~/utils/schema";

export const meta: MetaFunction = () => {
  return {
    charset: "utf-8",
    viewport: "width=device-width,initial-scale=1",
    robots: "noindex,nofollow",
  };
};

export default function Admin() {
  const data = useRouteData<RootLoaderData>("root");

  if (data) {
    return (
      <div style={{ height: "100vh" }}>
        <Studio config={config} />
      </div>
    );
  }
}
