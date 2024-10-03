import { Link, useLocation } from "@remix-run/react";
import classNames from "clsx";
import { useHydrated } from "remix-utils/use-hydrated";
import { Badge } from "~/components/Badge";

// Logos
import treasureLogoKnockoutImg from "@/img/resources/treasure/logo-knockout.png";

import magicLogoDarkImg from "@/img/resources/magic/logo-dark.png";
import treasureLogoDarkImg from "@/img/resources/treasure/logo-dark.png";

import magicLogoLightImg from "@/img/resources/magic/logo-light.png";
import treasureLogoLightImg from "@/img/resources/treasure/logo-light.png";

import magicLogomarkDarkImg from "@/img/resources/magic/logomark-dark.png";
import magicLogomarkLightImg from "@/img/resources/magic/logomark-light.png";
import treasureLogomarkKnockoutImg from "@/img/resources/treasure/logomark-knockout.png";
// Logomarks
import treasureLogomarkImg from "@/img/resources/treasure/logomark.png";

import magicSpacingImg from "@/img/resources/magic/spacing.png";
// Spacing
import treasureSpacingImg from "@/img/resources/treasure/spacing.png";
import { ColorPalette } from "~/components/ColorPalette";

import mediaKitImg from "@/img/media-kit.jpg";

import { ArrowDownTrayIcon } from "@heroicons/react/24/outline";
import { HashtagIcon } from "@heroicons/react/24/solid";

import type { HeadersFunction, MetaFunction } from "@remix-run/node";
import { Layout } from "~/components/Layout";
import type { RootLoaderData } from "~/root";
import { commonHeaders } from "~/utils/misc.server";
import {
  generateTitle,
  genericImagePath,
  getSocialMetas,
  getUrl,
} from "~/utils/seo";

const ResourceNavigation = [
  {
    name: "Treasure Logo",
    hash: "logo",
  },
  {
    name: "MAGIC",
    hash: "magic",
  },
  {
    name: "Colors",
    hash: "colors",
  },
  {
    name: "Media Kit",
    hash: "media-kit",
  },
];

const Assets = {
  Treasure: {
    Logo: [
      {
        downloadLink:
          "https://drive.google.com/uc?export=download&id=1GJYgZa0x01XnP81N7ISQ-mpu9RM5bIsf",
        size: "635KB",
        image: treasureLogoDarkImg,
        bg: "bg-honey-25",
        alt: "Dark treasure logo on light background",
      },
      {
        downloadLink:
          "https://drive.google.com/uc?export=download&id=1CsXHsAtYHN7EG4p7wOj-lCCaPWQNj6-H",
        size: "635KB",
        image: treasureLogoLightImg,
        bg: "bg-night-900",
        alt: "Light treasure logo on dark background",
      },
      {
        downloadLink:
          "https://drive.google.com/uc?export=download&id=1gWsQxT9i3T0iXbZ_9Iq_7qCwDlG1rWj1",
        size: "610KB",
        image: treasureLogoKnockoutImg,
        bg: "bg-night-900",
        alt: "Knockout treasure logo on dark background",
      },
    ],
    Logomark: [
      {
        downloadLink:
          "https://drive.google.com/uc?export=download&id=1Y3wetCCwToqgYbTbcCUNDPX046bdg_4C",
        size: "583KB",
        image: treasureLogomarkImg,
        bg: "bg-honey-25",
        alt: "Treasure logomark on light background",
      },
      {
        downloadLink:
          "https://drive.google.com/uc?export=download&id=1GApvcAcNRwvXohwA4UY8mFl_v33B7gU6",
        size: "551KB",
        image: treasureLogomarkKnockoutImg,
        bg: "bg-night-900",
        alt: "Treasure logomark on dark background",
      },
    ],
    Spacing: treasureSpacingImg,
  },
  Magic: {
    Logo: [
      {
        downloadLink:
          "https://drive.google.com/uc?export=download&id=1JSl-DJG4glrXqnaNU2F57f4I0OfqNaoN",
        size: "616KB",
        image: magicLogoDarkImg,
        bg: "bg-honey-25",
        alt: "Dark MAGIC logo on light background",
      },
      {
        downloadLink:
          "https://drive.google.com/uc?export=download&id=1H6WC0Cb8zyvOYpMvAYKMbW_xU9lZ9yRy",
        size: "594KB",
        image: magicLogoLightImg,
        bg: "bg-night-900",
        alt: "Light MAGIC logo on dark background",
      },
    ],
    Logomark: [
      {
        downloadLink:
          "https://drive.google.com/uc?export=download&id=1X0_URqRcw5wZAK7VYy5Ps9SKh_zgCTa4",
        size: "573KB",
        image: magicLogomarkLightImg,
        bg: "bg-honey-25",
        alt: "Red MAGIC logomark on light background",
      },
      {
        downloadLink:
          "https://drive.google.com/uc?export=download&id=1cP2zeRmIOnFzG-Ch8IrQeW0LgwPGPKK1",
        size: "545KB",
        image: magicLogomarkDarkImg,
        bg: "bg-night-900",
        alt: "White MAGIC logomark on dark background",
      },
    ],
    Spacing: magicSpacingImg,
  },
} as const;

export const headers: HeadersFunction = commonHeaders;

export const meta: MetaFunction = ({ matches }) => {
  const rootLoaderData = matches[0]?.data as RootLoaderData | undefined;
  return getSocialMetas({
    title: generateTitle("Brand Assets"),
    url: getUrl(rootLoaderData?.origin, rootLoaderData?.path),
    image: genericImagePath(rootLoaderData?.origin, "brand-assets"),
  });
};

export default function Resources() {
  const location = useLocation();
  const isHydrated = useHydrated();
  const currentHash = isHydrated ? location.hash.replace("#", "") : "";

  return (
    <Layout>
      <div className="relative bg-night-900 py-8 pt-32 sm:py-16 sm:pt-48">
        <div className="mx-auto max-w-md px-8 text-center sm:max-w-5xl sm:px-6 lg:px-12">
          <h2 className="mt-12 font-bold text-3xl text-honey-200 tracking-tight sm:text-5xl">
            Treasure Brand Assets
          </h2>
        </div>
      </div>
      <div className="relative bg-honey-50 py-8 sm:py-24">
        <div className="mx-auto max-w-md px-4 sm:max-w-9xl sm:px-20">
          <div className="grid py-12 xl:grid-cols-8 xl:gap-24">
            <aside className="col-span-2 hidden w-max xl:block">
              <div className="sticky top-28 rounded-1.9xl border-2 border-honey-200 bg-honey-100 p-10">
                <Badge
                  name="Content"
                  bgColor="bg-honey-200"
                  textColor="text-ruby-900"
                  size="sm"
                  className="rounded-[10px]"
                />
                <ul className="mt-10 border-honey-600 border-l-2">
                  {ResourceNavigation.map((item) => {
                    return (
                      <li
                        key={item.name}
                        className={classNames(
                          currentHash === item.hash
                            ? "border-ruby-900 font-bold text-ruby-900"
                            : "border-transparent text-night-700",
                          "-ml-[2px] border-l-2 py-1 pl-4 hover:border-ruby-700 hover:text-ruby-800",
                        )}
                      >
                        <Link to={`/brand-assets#${item.hash}`}>
                          {item.name}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </aside>
            <div id="logo" className="col-span-6 col-start-3 scroll-mt-28">
              <div className="space-y-20 divide-y-2 divide-honey-300 sm:space-y-28">
                {(Object.keys(Assets) as (keyof typeof Assets)[]).map(
                  (asset, i) => {
                    const assetTypes = Assets[asset];

                    const assetTypekeys = Object.keys(
                      assetTypes,
                    ) as (keyof typeof assetTypes)[];

                    return (
                      <div
                        key={asset}
                        className={classNames(
                          i > 0 && "[&>*]:mt-20 [&>*]:sm:mt-28",
                          "space-y-12 sm:space-y-20",
                        )}
                      >
                        {assetTypekeys.map((type, i) => {
                          const images = assetTypes[type];

                          return (
                            <div
                              key={`${asset}-${type}`}
                              {...(i === 0 ? { id: asset.toLowerCase() } : {})}
                              className="scroll-mt-20 sm:scroll-mt-28"
                            >
                              {i === 0 ? (
                                <Link
                                  to={`/brand-assets#${asset.toLowerCase()}`}
                                  className="group inline-flex items-center font-bold text-night-900 text-xl sm:text-3xl"
                                >
                                  <span>
                                    {asset} {type}
                                  </span>
                                  <HashtagIcon className="ml-2 inline-block h-7 w-7 text-night-900/50 opacity-0 group-hover:opacity-100" />
                                </Link>
                              ) : (
                                <h3 className="group font-bold text-night-900 text-xl sm:text-3xl">
                                  {asset} {type}
                                </h3>
                              )}
                              <p className="mt-5 text-base text-night-600 sm:text-xl">
                                {type !== "Spacing"
                                  ? `Please do not edit, change, distort, recolor, or reconfigure the ${asset} logo.`
                                  : `When using the ${asset} logo, make sure to leave a healthy space around to maintain integrity and limit any obstructions that might end up distorting the readbility and confuse the user.`}
                              </p>
                              {typeof images !== "string" ? (
                                <div className="mt-12 grid gap-10 lg:grid-cols-3">
                                  {images.map((image) => (
                                    <div
                                      key={image.downloadLink}
                                      className="flex flex-col"
                                    >
                                      <div
                                        className={classNames(
                                          image.bg,
                                          "flex h-60 items-center justify-center rounded-1.5xl border-2 border-honey-100 px-8",
                                        )}
                                      >
                                        <img
                                          src={image.image}
                                          className="h-1/3 w-2/3 object-contain"
                                          alt={image.alt}
                                        />
                                      </div>
                                      <div className="mt-5 flex justify-between">
                                        <a
                                          href={image.downloadLink}
                                          className="flex items-center text-ruby-900"
                                          download
                                        >
                                          <span className="font-bold">
                                            Download
                                          </span>
                                          <ArrowDownTrayIcon className="ml-2 inline-block h-5 w-5" />
                                        </a>
                                        <Badge
                                          name={image.size}
                                          bgColor="bg-honey-200"
                                          textColor="text-ruby-900"
                                          size="sm"
                                          className="rounded-[10px]"
                                        />
                                      </div>
                                    </div>
                                  ))}
                                </div>
                              ) : (
                                <div className="mt-12">
                                  <img
                                    src={images}
                                    className="h-full w-full object-contain"
                                    alt={`${asset} spacing information`}
                                  />
                                </div>
                              )}
                            </div>
                          );
                        })}
                      </div>
                    );
                  },
                )}
                <div className="[&>*]:mt-20 [&>*]:sm:mt-28">
                  <div id="colors" className="scroll-mt-28">
                    <h3 className="font-bold text-3xl text-night-900">
                      Colors
                    </h3>

                    <div className="mt-12">
                      <ColorPalette />
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-28 scroll-mt-28 space-y-14" id="media-kit">
                {/*
                  <div className="grid auto-rows-[12rem] grid-cols-1 rounded-2.5xl border-2 border-honey-300 bg-honey-100 p-6 sm:grid-cols-9 sm:p-10 xl:auto-rows-[23rem]">
                    <div className="order-1 col-span-6 flex flex-col justify-center space-y-4 px-4 sm:space-y-6 sm:px-14 xl:space-y-8">
                      <p className="text-lg font-bold text-ruby-900 xl:text-4xl">
                        Brand Guidelines
                      </p>
                      <p className="text-xs text-night-700 xl:text-2xl">
                        Building products related to our brand? Check out our
                        brand guidelines.
                      </p>
                      <div>
                        <a
                          className="inline-flex cursor-pointer items-center rounded-lg border-2 border-ruby-900 bg-honey-100 px-5 py-2 text-xs font-bold text-ruby-900 shadow-sm transition-colors duration-500 focus:outline-none focus:ring-2 focus:ring-ruby-500 focus:ring-offset-2 hover:bg-ruby-900 hover:text-white sm:text-base"
                          href="https://drive.google.com/uc?export=download&id=18j-7mAXpcVgZZBCxQnwAuHvbqbUZir1N"
                          download
                        >
                          Download
                          <ArrowDownTrayIcon
                            className="ml-1.5 h-4 w-4"
                            aria-hidden="true"
                          />
                        </a>
                      </div>
                    </div>
                    <div className="-order-1 col-span-3 overflow-hidden rounded-xl md:order-2">
                      <img
                        className="h-full w-full object-cover"
                        src={brandGuidelinesImg}
                        alt="Brand Guidelines"
                      />
                    </div>
                  </div>
                  */}
                <div className="grid auto-rows-[12rem] grid-cols-1 rounded-2.5xl border-2 border-honey-300 bg-honey-100 p-6 sm:grid-cols-9 sm:p-10 xl:auto-rows-[23rem]">
                  <div className="order-1 col-span-6 flex flex-col justify-center space-y-4 px-4 sm:space-y-6 sm:px-14 xl:space-y-8">
                    <p className="font-bold text-lg text-ruby-900 xl:text-4xl">
                      Media Kit
                    </p>
                    <p className="text-night-700 text-xs xl:text-2xl">
                      Download our media kit and receive all logo variations for
                      Treasure and MAGIC.
                    </p>
                    <div>
                      <a
                        className="inline-flex cursor-pointer items-center rounded-lg border-2 border-ruby-900 bg-honey-100 px-5 py-2 font-bold text-ruby-900 text-xs shadow-sm transition-colors duration-500 hover:bg-ruby-900 hover:text-white focus:outline-none focus:ring-2 focus:ring-ruby-500 focus:ring-offset-2 sm:text-base"
                        href="https://drive.google.com/uc?export=download&id=1HMkqE2QPzUUnJD8-3WV8cOZo8LmnXfO5"
                        download
                      >
                        Download
                        <ArrowDownTrayIcon
                          className="ml-1.5 h-4 w-4"
                          aria-hidden="true"
                        />
                      </a>
                    </div>
                  </div>
                  <div className="-order-1 col-span-3 overflow-hidden rounded-xl md:order-2">
                    <img
                      className="h-full w-full object-cover"
                      src={mediaKitImg}
                      alt="Media Kit"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export const handle = {
  breadcrumb: {
    href: "/brand-assets",
    title: "Brand Assets",
  },
};
