import * as React from "react";
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
  ScrollRestoration,
  useLoaderData,
  useTransition,
  useFetchers,
  useCatch,
} from "@remix-run/react";

import { getEnvVariable } from "./utils/env";

import type { CloudFlareEnv, CloudFlareEnvVar } from "./types";

import styles from "./styles/tailwind.css";

import { getPosts } from "./utils/posts.server";
import type { Posts } from "./utils/posts.server";

import { getDomainUrl } from "./utils/misc.server";
import { generateTitle, getSocialMetas, getUrl } from "./utils/seo";
import NProgress from "nprogress";
import nProgressStyles from "./styles/nProgress.css";
import { i18n } from "./utils/i18n.server";
import { useTranslation } from "react-i18next";
import { useChangeLanguage } from "remix-i18next";
import { Layout } from "./components/Layout";

// import {
//   getMagicPrice,
//   getTotalMarketplaceVolume,
//   getUniqueAddressCount,
//   getUtilization,
// } from "./utils/stats";

export type RootLoaderData = {
  data: Posts;
  requestInfo: {
    origin: string;
    path: string;
  };
  ENV: Partial<CloudFlareEnv>;
  locale: string;
  // magicPrice: Awaited<ReturnType<typeof getMagicPrice>>;
  // totalLocked: Awaited<ReturnType<typeof getUtilization>>;
  // totalMarketplaceVolume: Awaited<ReturnType<typeof getTotalMarketplaceVolume>>;
  // uniqueAddresses: Awaited<ReturnType<typeof getUniqueAddressCount>>;
};

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: styles },
  { rel: "stylesheet", href: nProgressStyles },
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
    href: "/img/bridgeworld-bg.webp",
    as: "image",
  },
  {
    rel: "preload",
    as: "font",
    href: "/fonts/ABCWhyte-Bold.otf",
    type: "font/otf",
    crossOrigin: "anonymous",
  },
  {
    rel: "preload",
    as: "font",
    href: "/fonts/ABCWhyte-Medium.otf",
    type: "font/otf",
    crossOrigin: "anonymous",
  },
  {
    rel: "preload",
    as: "font",
    href: "/fonts/ABCWhyte-Regular.otf",
    type: "font/otf",
    crossOrigin: "anonymous",
  },
  {
    rel: "preload",
    as: "font",
    href: "/fonts/ABCMonumentGroteskSemi-Mono-Medium.otf",
    type: "font/otf",
    crossOrigin: "anonymous",
  },
];

export const meta: MetaFunction = ({ data }) => {
  const requestInfo = (data as RootLoaderData | undefined)?.requestInfo;

  return {
    charset: "utf-8",
    viewport: "width=device-width,initial-scale=1",
    "theme-color": "#ffffff",
    "msapplication-TileColor": "#ffc40d",
    ...getSocialMetas({
      description:
        "Treasure is the decentralized video game console connecting games and communities together through imagination, MAGIC, and NFTs.",
      keywords:
        "treasure, NFT, DeFi, games, gamefi, ethereum, community, imagination, magic",
      title: generateTitle(),
      origin: requestInfo?.origin ?? "",
      url: getUrl(requestInfo),
      imgPath: "/home",
    }),
  };
};

const SECRET_ENV = ["GITHUB_API_TOKEN"] as CloudFlareEnvVar[];

export const loader: LoaderFunction = async ({ context, request }) => {
  const env = context as CloudFlareEnv;

  /* TODO: figure out why this wasn't workign in production. gave me an application error
   saying "SyntaxError: Unexpected token e in JSON at position 0" and couldn't debug.
   I resorted to doing a client-side fetch to get the data.
  */

  // const [magicPrice, totalLocked, uniqueAddresses, totalMarketplaceVolume] = await Promise.all([
  // getMagicPrice(),
  // getUtilization(),
  // getUniqueAddressCount(),
  // getTotalMarketplaceVolume(),
  // ]);
  const locale = await i18n.getLocale(request);

  return json<RootLoaderData>({
    // magicPrice,
    // totalLocked,
    // uniqueAddresses,
    // totalMarketplaceVolume,
    locale,
    data: await getPosts(),
    requestInfo: {
      origin: getDomainUrl(request),
      path: new URL(request.url).pathname,
    },
    ENV: (Object.keys(env) as (keyof typeof env)[]).reduce((envVars, key) => {
      if (!SECRET_ENV.includes(key)) {
        return {
          ...envVars,
          [key]: getEnvVariable(key as CloudFlareEnvVar, env),
        };
      }

      return envVars;
    }, {}),
  });
};

export const handle = {
  i18n: ["index"],
};

export default function App() {
  const { ENV, locale } = useLoaderData<RootLoaderData>();

  const { i18n } = useTranslation();

  const transition = useTransition();

  const fetchers = useFetchers();

  const state = React.useMemo<"idle" | "loading">(
    function getGlobalState() {
      const states = [
        transition.state,
        ...fetchers.map((fetcher) => fetcher.state),
      ];
      if (states.every((state) => state === "idle")) return "idle";
      return "loading";
    },
    [transition.state, fetchers]
  );

  useChangeLanguage(locale);

  React.useEffect(() => {
    // and when it's something else it means it's either submitting a form or
    // waiting for the loaders of the next location so we start it
    if (state === "loading") NProgress.start();
    // when the state is idle then we can to complete the progress bar
    if (state === "idle") NProgress.done();
  }, [state, transition.state]);

  return (
    <html lang={locale} dir={i18n.dir()} className="scroll-smooth">
      <head>
        <Meta />
        <Links />
      </head>
      <body className="bg-honey-25 antialiased selection:bg-honey-900" id="top">
        <Layout>
          <Outlet />
        </Layout>
        <Scripts />
        <ScrollRestoration />
        {ENV.ENV === "development" ? <LiveReload /> : null}
        {/* env available anywhere on your app */}
        <script
          dangerouslySetInnerHTML={{
            __html: `window.env = ${JSON.stringify(ENV)};`,
          }}
        />
        <script
          src="https://efficient-bloc-party.treasure.lol/script.js"
          data-site="XBZCEUKN"
          defer
          data-auto="false"
        />
        {ENV.ENV === "production" ? (
          <script
            dangerouslySetInnerHTML={{
              __html: `
            window.addEventListener('load', function() {
             if (!new URLSearchParams(window.location.search).has('preview')) {
              window.fathom.trackPageview();
             }
            })
          `,
            }}
          />
        ) : null}
      </body>
    </html>
  );
}

export function CatchBoundary() {
  const caught = useCatch();
  const message = JSON.parse(caught.data)?.message;
  if (caught.status === 404) {
    return (
      <html>
        <head>
          <Meta />
          <Links />
        </head>
        <body className="bg-honey-25 antialiased" id="top">
          <Layout>
            <div className="flex h-full flex-col items-center justify-center py-24">
              <p className="text-[0.6rem] text-night-500 sm:text-base">
                {message ? message : "Page not found"}
              </p>
            </div>
          </Layout>
          <Scripts />
        </body>
      </html>
    );
  }
  throw new Error(`Unhandled error: ${caught.status}`);
}
