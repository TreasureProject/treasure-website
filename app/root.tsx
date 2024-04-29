import * as React from "react";
import type {
  HtmlMetaDescriptor,
  LinksFunction,
  LoaderArgs,
  MetaFunction,
  SerializeFrom,
} from "@remix-run/node";
import { json } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData,
  useFetchers,
  useCatch,
  useNavigation,
} from "@remix-run/react";

import styles from "./styles/tailwind.css";
import newlandingStyles from "./styles/new-landing.css";
import nProgressStyles from "./styles/nProgress.css";

import { getDomainUrl } from "./utils/misc.server";
import { genericImagePath, getSocialMetas, getUrl } from "./utils/seo";
import NProgress from "nprogress";
import { i18n } from "./utils/i18n.server";
import { useTranslation } from "react-i18next";
import { NewLayout } from "./components/new-landing/NewLayout";
import { i18nCookie } from "./utils/cookie";
import {
  ThemeBody,
  ThemeHead,
  ThemeProvider,
  useTheme,
} from "./utils/theme-provider";
import { getThemeSession } from "./utils/theme.server";
import { AppContextProvider } from "./context/App";

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: styles },
  { rel: "stylesheet", href: nProgressStyles },
  { rel: "stylesheet", href: newlandingStyles },
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
  let tags: HtmlMetaDescriptor = {
    robots: "index, follow",
    charset: "utf-8",
    viewport: "width=device-width,initial-scale=1",
    "theme-color": "#ffffff",
    "msapplication-TileColor": "#ffc40d",
  };

  if (data) {
    const { requestInfo } = data as RootLoaderData;
    if (requestInfo) {
      tags = {
        ...tags,
        ...getSocialMetas({
          url: getUrl(requestInfo),
          image: genericImagePath(requestInfo.origin, "home"),
        }),
      };
    }
  }

  return tags;
};

function useChangeLanguage(locale: string) {
  const { i18n } = useTranslation();
  React.useEffect(() => {
    i18n.changeLanguage(locale);
  }, [locale, i18n]);
}

export const loader = async ({ request }: LoaderArgs) => {
  const themeSession = await getThemeSession(request);
  const locale = await i18n.getLocale(request);

  return json(
    {
      locale,
      requestInfo: {
        origin: getDomainUrl(request),
        path: new URL(request.url).pathname,
      },
      theme: themeSession.getTheme(),
    },
    {
      headers: {
        "Set-Cookie": await i18nCookie.serialize(locale),
      },
    }
  );
};

export type RootLoaderData = SerializeFrom<typeof loader>;

export const handle = {
  i18n: ["index"],
};

function App() {
  const data = useLoaderData<RootLoaderData>();

  const { i18n } = useTranslation();
  const [theme] = useTheme();

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
    [transition.state, fetchers]
  );

  useChangeLanguage(data.locale);

  React.useEffect(() => {
    // and when it's something else it means it's either submitting a form or
    // waiting for the loaders of the next location so we start it
    if (state === "loading") NProgress.start();
    // when the state is idle then we can to complete the progress bar
    if (state === "idle") NProgress.done();
  }, [state, transition.state]);

  return (
    <html
      lang={data.locale}
      dir={i18n.dir()}
      className={`h-full ${theme ?? ""}`}
    >
      <head>
        <Meta />
        <Links />
        <ThemeHead ssrTheme={Boolean(data.theme)} />
      </head>
      <body
        className="max-w-screen h-full overflow-x-hidden bg-honey-50 antialiased selection:bg-honey-900 dark:bg-[#0B111C]"
        id="top"
      >
        <AppContextProvider>
          <Outlet />
        </AppContextProvider>
        <ThemeBody ssrTheme={Boolean(data.theme)} />
        <Scripts />
        <ScrollRestoration />
        <LiveReload />
        <script
          src="https://efficient-bloc-party.treasure.lol/script.js"
          data-site="XBZCEUKN"
          defer
          data-auto="false"
        />
        {process.env.NODE_ENV === "production" ? (
          <script
            dangerouslySetInnerHTML={{
              __html: `
            window.addEventListener('load', function() {
             if (!window.location.host === "treasure-website-staging.fly.dev" && !new URLSearchParams(window.location.search).has('preview')) {
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
  let message: string | undefined;
  try {
    message = message = JSON.parse(caught.data)?.message;
  } catch (err) {
    console.warn("Error parsing catch boundary data", err);
  }
  if (caught.status === 404) {
    return (
      <html>
        <head>
          <Meta />
          <Links />
        </head>
        <body className="bg-honey-25 antialiased" id="top">
          <AppContextProvider>
            <NewLayout>
              <div className="flex h-full flex-col items-center justify-center pt-48 pb-24">
                <p className="text-3xl font-bold leading-[105%] text-honey-900 sm:text-6xl">
                  {message ? message : "Page not found"}
                </p>
              </div>
            </NewLayout>
          </AppContextProvider>
          <Scripts />
        </body>
      </html>
    );
  }
  throw new Error(`Unhandled error: ${caught.status}`);
}

export default function AppWithProviders() {
  const data = useLoaderData<typeof loader>();

  return (
    <ThemeProvider specifiedTheme={data.theme}>
      <App />
    </ThemeProvider>
  );
}
