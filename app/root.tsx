import type {
  LinksFunction,
  LoaderFunctionArgs,
  MetaFunction,
  SerializeFrom,
} from "@remix-run/node";
import { json } from "@remix-run/node";
import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  isRouteErrorResponse,
  useFetchers,
  useLoaderData,
  useNavigation,
  useRouteError,
} from "@remix-run/react";
import * as React from "react";

import "keen-slider/keen-slider.min.css";
import "swiper/css";
import "swiper/css/navigation";
import "./styles/nProgress.css";
import "./styles/tailwind.css";

import NProgress from "nprogress";
import { useTranslation } from "react-i18next";
import { Layout } from "./components/Layout";
import { AppContextProvider } from "./context/App";
import { i18nCookie } from "./utils/cookie";
import { i18n } from "./utils/i18n.server";
import { getDomainUrl } from "./utils/misc.server";
import { genericImagePath, getSocialMetas, getUrl } from "./utils/seo";

export const links: LinksFunction = () => [
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
  const loaderData = data as RootLoaderData | undefined;
  return getSocialMetas({
    url: getUrl(loaderData?.origin, loaderData?.path),
    image: genericImagePath(loaderData?.origin, "home"),
  });
};

function useChangeLanguage(locale: string) {
  const { i18n } = useTranslation();
  React.useEffect(() => {
    i18n.changeLanguage(locale);
  }, [locale, i18n]);
}

export const loader = async ({ request }: LoaderFunctionArgs) => {
  const locale = await i18n.getLocale(request);
  return json(
    {
      locale,
      origin: getDomainUrl(request),
      path: new URL(request.url).pathname,
    },
    {
      headers: {
        "Set-Cookie": await i18nCookie.serialize(locale),
      },
    },
  );
};

export type RootLoaderData = SerializeFrom<typeof loader>;

export const handle = {
  i18n: ["index"],
};

export default function App() {
  const data = useLoaderData<RootLoaderData>();
  const { i18n } = useTranslation();
  const transition = useNavigation();
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
    [transition.state, fetchers],
  );

  useChangeLanguage(data.locale);

  React.useEffect(() => {
    // and when it's something else it means it's either submitting a form or
    // waiting for the loaders of the next location so we start it
    if (state === "loading") NProgress.start();
    // when the state is idle then we can to complete the progress bar
    if (state === "idle") NProgress.done();
  }, [state]);

  return (
    <html lang={data.locale} dir={i18n.dir()} className="h-full">
      <head>
        <meta name="robots" content="index, follow" />
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <meta name="theme-color" content="#ffffff" />
        <meta name="msapplication-TileColor" content="#ffc40d" />
        <Meta />
        <Links />
        <link rel="canonical" href="https://treasure.lol/" />
        {process.env.NODE_ENV === "production" ? (
          <script
            dangerouslySetInnerHTML={{
              __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-M5MRRZJ');`,
            }}
          />
        ) : null}
      </head>
      <body
        className="h-full max-w-screen overflow-x-hidden bg-honey-50 antialiased selection:bg-honey-900 dark:bg-[#0B111C]"
        id="top"
      >
        {process.env.NODE_ENV === "production" ? (
          <noscript>
            <iframe
              title="Google Tag Manager"
              src="https://www.googletagmanager.com/ns.html?id=GTM-M5MRRZJ"
              height="0"
              width="0"
              className="invisible hidden"
            />
          </noscript>
        ) : null}
        <AppContextProvider>
          <Outlet />
        </AppContextProvider>
        <Scripts />
        <ScrollRestoration />
      </body>
    </html>
  );
}

export function CatchBoundary() {
  const error = useRouteError();

  if (isRouteErrorResponse(error) && error.status === 404) {
    return (
      <html lang="en">
        <head>
          <Meta />
          <Links />
        </head>
        <body className="bg-honey-25 antialiased" id="top">
          <AppContextProvider>
            <Layout>
              <div className="flex h-full flex-col items-center justify-center pt-48 pb-24">
                <p className="font-bold text-3xl text-honey-900 leading-[105%] sm:text-6xl">
                  {error.data.message ?? "Page not found"}
                </p>
              </div>
            </Layout>
          </AppContextProvider>
          <Scripts />
        </body>
      </html>
    );
  }

  throw new Error(`Unhandled error: ${error}`);
}
