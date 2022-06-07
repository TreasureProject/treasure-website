import type {
  LinksFunction,
  LoaderFunction,
  MetaFunction,
} from "@remix-run/cloudflare";
import { json } from "@remix-run/cloudflare";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  useLoaderData,
} from "@remix-run/react";

import { getEnvVariable } from "./utils/env";

import type { CloudFlareEnv, CloudFlareEnvVar } from "./types";

import styles from "./styles/tailwind.css";

type RootLoaderData = {
  ENV: Partial<CloudFlareEnv>;
};

export const links: LinksFunction = () => [{ rel: "stylesheet", href: styles }];

export const meta: MetaFunction = () => ({
  charset: "utf-8",
  title: "Treasure",
  viewport: "width=device-width,initial-scale=1",
});

export const loader: LoaderFunction = async ({ context }) => {
  const env = context as CloudFlareEnv;
  return json<RootLoaderData>({
    ENV: Object.keys(env).reduce(
      (envVars, key) => ({
        ...envVars,
        [key]: getEnvVariable(key as CloudFlareEnvVar, context),
      }),
      {}
    ),
  });
};

export default function App() {
  const { ENV } = useLoaderData<RootLoaderData>();

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <Meta />
        <Links />
      </head>
      <body className="antialiased">
        <div className="border-2 border-t border-ruby-900" />
        <Outlet />
        <Scripts />
        {ENV.NODE_ENV === "development" ? <LiveReload /> : null}
        {/* env available anywhere on your app */}
        <script
          dangerouslySetInnerHTML={{
            __html: `window.env = ${JSON.stringify(ENV)};`,
          }}
        />
      </body>
    </html>
  );
}
