import { Link, useLocation } from "@remix-run/react";
import { Badge } from "~/components/Badge";
import classNames from "clsx";
import { useHydrated } from "remix-utils";

// Logos
import treasureLogoKnockoutImg from "../../public/img/resources/treasure/logo-knockout.png";
import troveLogoKnockoutImg from "../../public/img/resources/trove/logo-knockout.png";

import treasureLogoDarkImg from "../../public/img/resources/treasure/logo-dark.png";
import magicLogoDarkImg from "../../public/img/resources/magic/logo-dark.png";
import troveLogoDarkImg from "../../public/img/resources/trove/logo-dark.png";

import treasureLogoLightImg from "../../public/img/resources/treasure/logo-light.png";
import magicLogoLightImg from "../../public/img/resources/magic/logo-light.png";
import troveLogoLightImg from "../../public/img/resources/trove/logo-light.png";

// Logomarks
import treasureLogomarkImg from "../../public/img/resources/treasure/logomark.png";
import troveLogomarkImg from "../../public/img/resources/trove/logomark.png";
import magicLogomarkDarkImg from "../../public/img/resources/magic/logomark-dark.png";
import magicLogomarkLightImg from "../../public/img/resources/magic/logomark-light.png";

// Spacing
import treasureSpacingImg from "../../public/img/resources/treasure/spacing.png";
import troveSpacingImg from "../../public/img/resources/trove/spacing.png";
import magicSpacingImg from "../../public/img/resources/magic/spacing.png";
import { ColorPalette } from "~/components/ColorPalette";

import BW from "../../public/img/bridgeworld-legions.jpeg";
import { DownloadIcon } from "@heroicons/react/outline";
import { HashtagIcon } from "@heroicons/react/solid";

const ResourceNavigation = [
  {
    name: "Treasure",
    hash: "treasure",
  },
  {
    name: "Trove",
    hash: "trove",
  },
  {
    name: "Magic",
    hash: "magic",
  },
  {
    name: "Colors",
    hash: "colors",
  },
  {
    name: "Media Kit Download",
    hash: "media-kit",
  },
];

const Assets = {
  Treasure: {
    Logo: [
      {
        downloadLink: "img/resources/treasure/logo-dark.png",
        size: "50KB",
        image: treasureLogoDarkImg,
        bg: "bg-honey-25",
        alt: "Dark treasure logo on light background",
      },
      {
        downloadLink: "img/resources/treasure/logo-light.png",
        size: "50KB",
        image: treasureLogoLightImg,
        bg: "bg-night-900",
        alt: "Light treasure logo on dark background",
      },
      {
        downloadLink: "img/resources/treasure/logo-knockout.png",
        size: "4KB",
        image: treasureLogoKnockoutImg,
        bg: "bg-night-900",
        alt: "Knockout treasure logo on dark background",
      },
    ],
    "Logo Mark": [
      {
        downloadLink: "img/resources/treasure/logomark.png",
        size: "14KB",
        image: treasureLogomarkImg,
        bg: "bg-night-900",
        alt: "Treasure logo mark on dark background",
      },
      {
        downloadLink: "img/resources/treasure/logomark.png",
        size: "14KB",
        image: treasureLogomarkImg,
        bg: "bg-honey-25",
        alt: "Treasure logo mark on light background",
      },
    ],
    Spacing: treasureSpacingImg,
  },
  Trove: {
    Logo: [
      {
        downloadLink: "img/resources/trove/logo-dark.png",
        size: "39KB",
        image: troveLogoDarkImg,
        bg: "bg-honey-25",
        alt: "Dark trove logo on light background",
      },
      {
        downloadLink: "img/resources/trove/logo-light.png",
        size: "39KB",
        image: troveLogoLightImg,
        bg: "bg-night-900",
        alt: "Light trove logo on dark background",
      },
      {
        downloadLink: "img/resources/trove/logo-knockout.png",
        size: "3KB",
        image: troveLogoKnockoutImg,
        bg: "bg-night-900",
        alt: "Knockout trove logo on dark background",
      },
    ],
    "Logo Mark": [
      {
        downloadLink: "img/resources/trove/logomark.png",
        size: "15KB",
        image: troveLogomarkImg,
        bg: "bg-night-900",
        alt: "Trove logo mark on dark background",
      },
      {
        downloadLink: "img/resources/trove/logomark.png",
        size: "15KB",
        image: troveLogomarkImg,
        bg: "bg-honey-25",
        alt: "Trove logo mark on light background",
      },
    ],
    Spacing: troveSpacingImg,
  },
  Magic: {
    Logo: [
      {
        downloadLink: "img/resources/magic/logo-dark.png",
        size: "36KB",
        image: magicLogoLightImg,
        bg: "bg-night-900",
        alt: "Light magic logo on dark background",
      },
      {
        downloadLink: "img/resources/magic/logo-light.png",
        size: "35KB",
        image: magicLogoDarkImg,
        bg: "bg-honey-25",
        alt: "Dark magic logo on light background",
      },
    ],
    "Logo Mark": [
      {
        downloadLink: "img/resources/magic/logomark-dark.png",
        size: "9KB",
        image: magicLogomarkLightImg,
        bg: "bg-honey-25",
        alt: "Red magic logo mark on light background",
      },
      {
        downloadLink: "img/resources/magic/logomark-light.png",
        size: "9KB",
        image: magicLogomarkDarkImg,
        bg: "bg-night-900",
        alt: "White magic logo mark on dark background",
      },
    ],
    Spacing: magicSpacingImg,
  },
} as const;

export default function Resources() {
  const location = useLocation();
  const isHydrated = useHydrated();
  const currentHash = isHydrated ? location.hash.replace("#", "") : "";

  return (
    <main>
      <div className="relative bg-honey-50 py-16 sm:py-24">
        <div className="mx-auto max-w-md px-8 text-center sm:max-w-5xl sm:px-6 lg:px-12">
          <h2 className="mt-12 text-3xl font-bold tracking-tight text-ruby-900 sm:text-5xl">
            Treasure Brand Assets
          </h2>
        </div>
        <div className="mx-auto mt-16 max-w-md px-4 sm:max-w-9xl sm:px-20">
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
                <ul className="mt-10 border-l-2 border-honey-600">
                  {ResourceNavigation.map((item) => {
                    return (
                      <li
                        key={item.name}
                        className={classNames(
                          currentHash === item.hash
                            ? "border-ruby-900 font-bold text-ruby-900"
                            : "border-transparent text-night-700",
                          "-ml-[2px] border-l-2 py-1 pl-4 hover:border-ruby-700 hover:text-ruby-800"
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
            <div className="col-span-6 col-start-3">
              <div className="space-y-20 divide-y-2 divide-honey-300 sm:space-y-28">
                {(Object.keys(Assets) as (keyof typeof Assets)[]).map(
                  (asset, i) => {
                    const assetTypes = Assets[asset];

                    const assetTypekeys = Object.keys(
                      assetTypes
                    ) as (keyof typeof assetTypes)[];

                    return (
                      <div
                        key={asset}
                        className={classNames(
                          i > 0 && "[&>*]:mt-20 [&>*]:sm:mt-28",
                          "space-y-12 sm:space-y-20"
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
                                  className="group inline-flex items-center text-xl font-bold text-night-900 sm:text-3xl"
                                >
                                  <span>
                                    {asset} {type}
                                  </span>
                                  <HashtagIcon className="ml-2 inline-block h-7 w-7 text-night-900/50 opacity-0 group-hover:opacity-100" />
                                </Link>
                              ) : (
                                <h3 className="group text-xl font-bold text-night-900 sm:text-3xl">
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
                                          "flex h-60 items-center justify-center rounded-1.5xl border-2 border-honey-100 px-8"
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
                                          <DownloadIcon className="ml-2 inline-block h-5 w-5" />
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
                  }
                )}
                <div className="space-y-20 [&>*]:mt-28">
                  <div id="colors" className="scroll-mt-28">
                    <h3 className="text-3xl font-bold text-night-900">
                      Colors
                    </h3>
                    <p className="mt-5 text-xl text-night-600">Write Copy</p>
                  </div>
                  <ColorPalette />
                </div>
              </div>
              <div className="mt-28 scroll-mt-28 space-y-14" id="media-kit">
                <div className="grid auto-rows-[12rem] grid-cols-1 rounded-2.5xl border-2 border-honey-300 bg-honey-100 p-6 sm:grid-cols-9 sm:p-10 xl:auto-rows-[23rem]">
                  <div className="order-1 col-span-6 flex flex-col justify-center space-y-4 px-4 sm:space-y-6 sm:px-14 xl:space-y-8">
                    <p className="text-lg font-semibold text-ruby-900 xl:text-4xl">
                      Brand Guidelines
                    </p>
                    <p className="text-xs text-night-700 xl:text-2xl">
                      Building a cartridge on Treasure and MAGIC? Apply to
                      become a partner cartridge today.
                    </p>
                    <div>
                      <a
                        className="inline-flex cursor-pointer items-center rounded-button border-2 border-ruby-900 bg-honey-100 px-5 py-2 text-xs font-bold text-ruby-900 shadow-sm transition-colors duration-500 hover:bg-ruby-900 hover:text-white focus:outline-none focus:ring-2 focus:ring-ruby-500 focus:ring-offset-2 sm:text-base"
                        href="img/resources.zip"
                        download
                      >
                        Download
                        <DownloadIcon
                          className="ml-1.5 h-4 w-4"
                          aria-hidden="true"
                        />
                      </a>
                    </div>
                  </div>
                  <div className="-order-1 col-span-3 overflow-hidden rounded-xl md:order-2">
                    <img
                      className="h-full w-full object-cover"
                      src={BW}
                      alt="Treasure Team"
                    />
                  </div>
                </div>
                <div className="grid auto-rows-[12rem] grid-cols-1 rounded-2.5xl border-2 border-honey-300 bg-honey-100 p-6 sm:grid-cols-9 sm:p-10 xl:auto-rows-[23rem]">
                  <div className="order-1 col-span-6 flex flex-col justify-center space-y-4 px-4 sm:space-y-6 sm:px-14 xl:space-y-8">
                    <p className="text-lg font-semibold text-ruby-900 xl:text-4xl">
                      Media Kit
                    </p>
                    <p className="text-xs text-night-700 xl:text-2xl">
                      Building a cartridge on Treasure and MAGIC? Apply to
                      become a partner cartridge today.
                    </p>
                    <div>
                      <a
                        className="inline-flex cursor-pointer items-center rounded-button border-2 border-ruby-900 bg-honey-100 px-5 py-2 text-xs font-bold text-ruby-900 shadow-sm transition-colors duration-500 hover:bg-ruby-900 hover:text-white focus:outline-none focus:ring-2 focus:ring-ruby-500 focus:ring-offset-2 sm:text-base"
                        href="img/resources.zip"
                        download
                      >
                        Download
                        <DownloadIcon
                          className="ml-1.5 h-4 w-4"
                          aria-hidden="true"
                        />
                      </a>
                    </div>
                  </div>
                  <div className="-order-1 col-span-3 overflow-hidden rounded-xl md:order-2">
                    <img
                      className="h-full w-full object-cover"
                      src={BW}
                      alt="Treasure Team"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export const handle = {
  breadcrumb: {
    href: "/brand-assets",
    title: "Brand Assets",
  },
};
