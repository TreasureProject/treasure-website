import * as React from "react";
import type { MetaFunction } from "@remix-run/cloudflare";
import config from "~/utils/schema";

export const meta: MetaFunction = () => {
  return {
    charset: "utf-8",
    viewport: "width=device-width,initial-scale=1",
    robots: "noindex,nofollow",
  };
};

export default function Admin() {
  React.useEffect(() => {
    async function loadTestComponent() {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      const { renderStudio } = await import("sanity");
      renderStudio(document.getElementById("root"), config);
    }

    loadTestComponent();
  }, []);
}
