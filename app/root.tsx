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
  useMatches,
} from "@remix-run/react";

import { getEnvVariable } from "./utils/env";

import type { CloudFlareEnv, CloudFlareEnvVar } from "./types";

import styles from "./styles/tailwind.css";

import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { getPosts } from "./utils/posts.server";
import type { Posts } from "./utils/posts.server";

export type RootLoaderData = {
  data: Posts;
  ENV: Partial<CloudFlareEnv>;
};

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: styles },
  {
    rel: "apple-touch-icon",
    sizes: "180x180",
    href: "/apple-touch-icon.png",
  },
  {
    rel: "icon",
    type: "image/png",
    sizes: "32x32",
    href: "/favicon-32x32.png",
  },
  {
    rel: "icon",
    type: "image/png",
    sizes: "16x16",
    href: "/favicon-16x16.png",
  },
  {
    rel: "manifest",
    href: "/site.webmanifest",
  },
  {
    rel: "mask-icon",
    href: "/safari-pinned-tab.svg",
    color: "#dc2626",
  },
  {
    rel: "preload",
    href: "/img/bridgeworld-bg.png",
    as: "image",
  },
];

export const meta: MetaFunction = () => ({
  charset: "utf-8",
  title: "Treasure",
  viewport: "width=device-width,initial-scale=1",
  "theme-color": "#ffffff",
  "msapplication-TileColor": "#ffc40d",
});

export const loader: LoaderFunction = async ({ context }) => {
  const env = context as CloudFlareEnv;
  return json<RootLoaderData>({
    data: await getPosts(),
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
      <body className="bg-honey-25 antialiased" id="top">
        <div className="border-2 border-t border-ruby-900" />
        <Header />
        <Outlet />
        <Footer />
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
