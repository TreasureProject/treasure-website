import type {
  HeadersFunction,
  LoaderArgs,
  MetaFunction,
} from "@remix-run/node";
import { json } from "@remix-run/node";
import { Links, Meta, Outlet, useCatch } from "@remix-run/react";

import { BlogLayout } from "~/components/BlogLayout";

import { formatDate } from "~/utils/lib";
import { cacheHeader } from "pretty-cache-header";
import { contenfulDeliverySdk } from "~/utils/client.server";
import { ThemeBody, ThemeHead, ThemeProvider } from "~/utils/theme-provider";
import type { RootLoaderData } from "~/root";
import {
  getSocialMetas,
  generateTitle,
  getUrl,
  genericImagePath,
} from "~/utils/seo";

export const headers: HeadersFunction = ({ loaderHeaders }) => {
  const headers = new Headers();

  if (loaderHeaders.has("Cache-Control")) {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    headers.set("Cache-Control", loaderHeaders.get("Cache-Control")!);
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    headers.set("CDN-Cache-Control", loaderHeaders.get("Cache-Control")!);
  }
  return headers;
};

export const meta: MetaFunction = (args) => {
  const { requestInfo } = args.parentsData.root as RootLoaderData;

  return getSocialMetas({
    title: generateTitle("/blog"),
    url: getUrl(requestInfo),
    description:
      "The magic of play. Get the latest news and updates from Treasure, the decentralized gaming ecosystem.",
    image: genericImagePath(requestInfo.origin, "blog"),
  });
};

export const loader = async ({ request }: LoaderArgs) => {
  const requestUrl = new URL(request.url);

  const preview =
    requestUrl?.searchParams?.get("preview") === process.env.PREVIEW_SECRET;

  const data = await contenfulDeliverySdk(preview).getAllBlogPosts({
    preview,
  });

  const posts = data.blogPostCollection?.items ?? [];

  const headers = {
    "Cache-Control": preview
      ? cacheHeader({
          public: true,
          noCache: true,
        })
      : cacheHeader({
          public: true,
          maxAge: "1hour",
          staleWhileRevalidate: "1min",
        }),
  };

  return json(
    {
      preview,
      posts: posts.map((post) => ({
        ...post,
        date: formatDate(post?.date),
      })),
    },
    { status: 200, headers }
  );
};

export default function App() {
  return (
    <BlogLayout>
      <Outlet />
    </BlogLayout>
  );
}

export function CatchBoundary() {
  const caught = useCatch();

  const theme = caught.data.theme;

  return (
    <ThemeProvider specifiedTheme={theme}>
      <html lang="en" className={`h-full ${theme ?? ""}`}>
        <head>
          <title>Oops!</title>
          <Meta />
          <Links />
          <ThemeHead ssrTheme={Boolean(theme)} />
        </head>
        <body className="h-full bg-honey-50 antialiased dark:bg-night-900">
          <ThemeBody ssrTheme={Boolean(theme)} />
          <BlogLayout>
            <div className="container mt-12 flex flex-1 flex-col items-center justify-center space-y-2">
              <h1 className="text-4xl font-bold text-night-900 dark:text-honey-25">
                Oops!
              </h1>
              <p className="text-lg text-night-600 dark:text-honey-500">
                {caught.data.message}
              </p>
            </div>
          </BlogLayout>
        </body>
      </html>
    </ThemeProvider>
  );
}
