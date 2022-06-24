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
} from "@remix-run/react";

import { getEnvVariable } from "./utils/env";

import type { CloudFlareEnv, CloudFlareEnvVar } from "./types";

import styles from "./styles/tailwind.css";

import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { getPosts } from "./utils/posts.server";
import type { Posts } from "./utils/posts.server";
import { Dialog } from "@headlessui/react";
import { XIcon } from "@heroicons/react/outline";
import { MagicIcon } from "./components/Icons";
import { magicPurchaseLinks } from "./const";
import { getDomainUrl } from "./utils/misc.server";
import { generateTitle, getSocialMetas, getUrl } from "./utils/seo";
import { ExternalLinkIcon } from "@heroicons/react/solid";
import NProgress from "nprogress";
import nProgressStyles from "./styles/nProgress.css";
import { Modal } from "./components/Modal";
import { i18n } from "./utils/i18n.server";
import { useTranslation } from "react-i18next";
import { useChangeLanguage } from "remix-i18next";
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
    href: "/img/bridgeworld-bg.png",
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
        "Treasure is the decentralized video game console connecting games and communities together through imagination, $MAGIC, and NFTs.",
      keywords:
        "treasure, NFT, DeFi, games, gamefi, ethereum, community, imagination, magic",
      title: generateTitle(),
      origin: requestInfo?.origin ?? "",
      url: getUrl(requestInfo),
      imgPath: "/home",
    }),
  };
};

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
    ENV: Object.keys(env).reduce(
      (envVars, key) => ({
        ...envVars,
        [key]: getEnvVariable(key as CloudFlareEnvVar, context),
      }),
      {}
    ),
  });
};

export const handle = {
  i18n: ["index"],
};

export default function App() {
  const { ENV, locale } = useLoaderData<RootLoaderData>();

  const [openPurchaseMagicModal, setOpenPurchaseMagicModal] =
    React.useState(false);

  const { i18n } = useTranslation();

  const openModal = () => setOpenPurchaseMagicModal(true);
  const closeModal = () => setOpenPurchaseMagicModal(false);

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
      <body className="bg-honey-25 antialiased" id="top">
        <div className="border-2 border-t border-ruby-900" />
        <Header openModal={openModal} />
        <Outlet />
        <Footer openModal={openModal} />

        {/* Magic Purchase Modal */}
        <Modal show={openPurchaseMagicModal} onClose={closeModal}>
          <div className="flex justify-between">
            <Dialog.Title
              as="h3"
              className="inline-flex items-center justify-center space-x-2 text-2xl font-bold text-honey-25"
            >
              <span className="font-bold">Buy</span>
              <MagicIcon />
            </Dialog.Title>
            <button
              type="button"
              className="rounded-md bg-night-800 p-2.5 text-honey-50 hover:bg-night-900/50 focus:outline-none focus:ring-2 focus:ring-night-800 focus:ring-offset-2"
              onClick={closeModal}
            >
              <span className="sr-only">Close</span>
              <XIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-4 grid grid-cols-1 gap-2 sm:mt-8 sm:gap-4">
            {magicPurchaseLinks.map((link) => (
              <div
                key={link.name}
                className="relative flex items-center justify-between rounded-1.5xl border-2 border-night-800 bg-white/[0.02] p-5 shadow-md hover:bg-white/[0.05]"
              >
                <p className="text-base font-bold text-white sm:text-xl">
                  <a href={link.url} rel="noopener noreferrer" target="_blank">
                    <span className="absolute inset-0 h-full w-full"></span>
                    {link.name}
                  </a>
                </p>
                <div>
                  <img
                    className="w-8 sm:w-auto"
                    src={link.icon}
                    alt={link.name}
                  />
                </div>
              </div>
            ))}
          </div>
          <div className="mt-8 mb-4 text-center text-sm sm:mt-16 sm:mb-6 sm:text-base">
            <p className="text-white">
              New to MAGIC?{" "}
              <a
                href="https://docs.treasure.lol/getting-started/what-is-magic"
                rel="noopener noreferrer"
                target="_blank"
                className="inline-flex items-center text-ruby-900 decoration-ruby-900 hover:underline"
              >
                <span>Learn more</span>
                <ExternalLinkIcon className="ml-1 h-3 w-3" />
              </a>
            </p>
          </div>
        </Modal>
        <Scripts />
        <ScrollRestoration />
        {ENV.NODE_ENV === "development" ? <LiveReload /> : null}
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
        />
      </body>
    </html>
  );
}
