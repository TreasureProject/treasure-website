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
import treasureLogomarkKnockoutImg from "../../public/img/resources/treasure/logomark-knockout.png";
import troveLogomarkImg from "../../public/img/resources/trove/logomark.png";
import troveLogomarkKnockoutImg from "../../public/img/resources/trove/logomark-knockout.png";
import magicLogomarkDarkImg from "../../public/img/resources/magic/logomark-dark.png";
import magicLogomarkLightImg from "../../public/img/resources/magic/logomark-light.png";

// Spacing
import treasureSpacingImg from "../../public/img/resources/treasure/spacing.png";
import troveSpacingImg from "../../public/img/resources/trove/spacing.png";
import magicSpacingImg from "../../public/img/resources/magic/spacing.png";
import { ColorPalette } from "~/components/ColorPalette";

import brandGuidelinesImg from "../../public/img/brand-guidelines.png";
import mediaKitImg from "../../public/img/media-kit.png";

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
  Trove: {
    Logo: [
      {
        downloadLink:
          "https://drive.google.com/uc?export=download&id=1y9uWJm1qECE0h7108Raelpr0aSquQR6r",
        size: "647KB",
        image: troveLogoDarkImg,
        bg: "bg-honey-25",
        alt: "Dark trove logo on light background",
      },
      {
        downloadLink:
          "https://drive.google.com/uc?export=download&id=1-AK9rMs-_Oza1YqYKNLfBPlgQbB7RT-l",
        size: "602KB",
        image: troveLogoLightImg,
        bg: "bg-night-900",
        alt: "Light trove logo on dark background",
      },
      {
        downloadLink:
          "https://drive.google.com/uc?export=download&id=1luiWONJALKWyxG6laqk79i3x1mhIfK-2",
        size: "587KB",
        image: troveLogoKnockoutImg,
        bg: "bg-night-900",
        alt: "Knockout trove logo on dark background",
      },
    ],
    Logomark: [
      {
        downloadLink:
          "https://drive.google.com/uc?export=download&id=1brIJxBYhAU-lR2YPpJWo4fR-J4v4sd8K",
        size: "582KB",
        image: troveLogomarkImg,
        bg: "bg-honey-25",
        alt: "Trove logomark on light background",
      },
      {
        downloadLink:
          "https://drive.google.com/uc?export=download&id=1msyb70x5vpugXsiy7UBYLMcIH42pklrG",
        size: "587KB",
        image: troveLogomarkKnockoutImg,
        bg: "bg-night-900",
        alt: "Trove logomark on dark background",
      },
    ],
    Spacing: troveSpacingImg,
  },
  Magic: {
    Logo: [
      {
        downloadLink:
          "https://drive.google.com/uc?export=download&id=1JSl-DJG4glrXqnaNU2F57f4I0OfqNaoN",
        size: "616KB",
        image: magicLogoDarkImg,
        bg: "bg-honey-25",
        alt: "Dark magic logo on light background",
      },
      {
        downloadLink:
          "https://drive.google.com/uc?export=download&id=1H6WC0Cb8zyvOYpMvAYKMbW_xU9lZ9yRy",
        size: "594KB",
        image: magicLogoLightImg,
        bg: "bg-night-900",
        alt: "Light magic logo on dark background",
      },
    ],
    Logomark: [
      {
        downloadLink:
          "https://drive.google.com/uc?export=download&id=1X0_URqRcw5wZAK7VYy5Ps9SKh_zgCTa4",
        size: "573KB",
        image: magicLogomarkLightImg,
        bg: "bg-honey-25",
        alt: "Red magic logomark on light background",
      },
      {
        downloadLink:
          "https://drive.google.com/uc?export=download&id=1cP2zeRmIOnFzG-Ch8IrQeW0LgwPGPKK1",
        size: "545KB",
        image: magicLogomarkDarkImg,
        bg: "bg-night-900",
        alt: "White magic logomark on dark background",
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
                        href="https://drive.google.com/uc?export=download&id=18j-7mAXpcVgZZBCxQnwAuHvbqbUZir1N"
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
                      src={brandGuidelinesImg}
                      alt="Brand Guidelines"
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
                        href="https://drive.google.com/uc?export=download&id=1HMkqE2QPzUUnJD8-3WV8cOZo8LmnXfO5"
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
    </main>
  );
}

export const handle = {
  breadcrumb: {
    href: "/brand-assets",
    title: "Brand Assets",
  },
};
