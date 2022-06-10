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
} from "@remix-run/react";

import { getEnvVariable } from "./utils/env";

import type { CloudFlareEnv, CloudFlareEnvVar } from "./types";

import styles from "./styles/tailwind.css";

import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { getPosts } from "./utils/posts.server";
import type { Posts } from "./utils/posts.server";
import { Dialog, Transition } from "@headlessui/react";
import { XIcon } from "@heroicons/react/outline";
import { MagicIcon } from "./components/Icons";
import { magicPurchaseLinks } from "./const";

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
  const [openPurchaseMagicModal, setOpenPurchaseMagicModal] =
    React.useState(false);

  const openModal = () => setOpenPurchaseMagicModal(true);
  const closeModal = () => setOpenPurchaseMagicModal(false);

  return (
    <html lang="en" className="scroll-smooth">
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
        <Transition.Root show={openPurchaseMagicModal} as={React.Fragment}>
          <Dialog as="div" className="relative z-30" onClose={closeModal}>
            <Transition.Child
              as={React.Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-night-900 bg-opacity-75 transition-opacity" />
            </Transition.Child>

            <div className="fixed inset-0 z-10 overflow-y-auto">
              <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                <Transition.Child
                  as={React.Fragment}
                  enter="ease-out duration-300"
                  enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                  enterTo="opacity-100 translate-y-0 sm:scale-100"
                  leave="ease-in duration-200"
                  leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                  leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                >
                  <Dialog.Panel className="relative w-full transform overflow-hidden rounded-1.9xl border border-night-800 bg-night-900 p-4 text-left shadow-xl transition-all sm:max-w-2xl sm:p-6">
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
                    <div className="mt-4 grid auto-rows-fr grid-cols-1 gap-4 sm:mt-8 sm:grid-cols-2 sm:gap-8">
                      {magicPurchaseLinks.map((link) => (
                        <div
                          key={link.name}
                          className="relative flex items-center justify-between rounded-1.5xl border-2 border-night-800 bg-white/[0.02] p-5 shadow-md hover:bg-white/[0.05]"
                        >
                          <p className="text-base font-bold text-white sm:text-xl">
                            <a
                              href={link.url}
                              rel="noopener noreferrer"
                              target="_blank"
                            >
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
                    <div className="mt-8 mb-4 text-center sm:mt-12 sm:mb-6">
                      <p className="text-white">
                        New to Magic?{" "}
                        <a
                          href="#"
                          className="text-ruby-900 decoration-ruby-900 hover:underline"
                        >
                          Learn more
                        </a>
                      </p>
                    </div>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </Dialog>
        </Transition.Root>
        {/* <Transition.Root show={openPurchaseMagicModal} as={React.Fragment}>
          <Dialog
            as="div"
            className="fixed inset-0 z-30 overflow-y-auto"
            onClose={() => setOpenPurchaseMagicModal(false)}
          >
            <div className="flex min-h-screen items-end justify-center px-4 py-4 text-center sm:block sm:p-0">
              <Transition.Child
                as={React.Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <Dialog.Overlay className="fixed inset-0 bg-night-900 bg-opacity-50 transition-opacity" />
              </Transition.Child>

              <span
                className="hidden sm:inline-block sm:h-screen sm:align-middle"
                aria-hidden="true"
              >
                &#8203;
              </span>
              <Transition.Child
                as={React.Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                enterTo="opacity-100 translate-y-0 sm:scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              >
                <div className="relative inline-block w-full transform overflow-hidden rounded-lg bg-gray-800 px-4 pt-5 pb-4 text-left align-bottom shadow-xl transition-all sm:my-8 sm:max-w-sm sm:p-6 sm:align-middle">
                  sup world
                </div>
              </Transition.Child>
            </div>
          </Dialog>
        </Transition.Root> */}

        <Scripts />
        <ScrollRestoration />
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
