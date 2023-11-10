import { IndexCTA } from "~/const";
import { NewTreasureStats } from "~/components/TreasureStats";

import { Trans } from "react-i18next";

import type { HeadersFunction, LinksFunction } from "@remix-run/node";
import { commonHeaders } from "~/utils/misc.server";
import { useTranslation } from "react-i18next";
import { Link } from "@remix-run/react";
import { Reviews } from "~/components/Reviews";
import keenSliderCSS from "keen-slider/keen-slider.min.css";
import { Partners } from "~/components/Partners";
import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/solid";
import { BuildWithTreasure } from "~/components/BuildWithTreasure";
import { Layout } from "~/components/Layout";

export const headers: HeadersFunction = commonHeaders;

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: keenSliderCSS },
];

export default function Home() {
  const { t } = useTranslation("index", {
    keyPrefix: "index",
  });

  return (
    <Layout>
      <main className="overflow-hidden">
        <div className="relative bg-[#212f5e] py-24 lg:overflow-hidden lg:py-0">
          <div className="relative z-20 lg:px-12">
            <div className="lg:grid lg:grid-cols-7 lg:gap-8">
              <div className="col-span-3 mx-auto max-w-md px-4 sm:px-6 lg:flex lg:items-center lg:px-0 lg:text-left xl:max-w-sm">
                <div className="text-center lg:py-32 lg:text-left xl:pb-48 xl:pt-40">
                  <h1 className="mt-4 text-5xl font-bold tracking-tight text-white sm:mt-0 sm:text-7xl xl:text-[5rem]">
                    The magic of <br className="inline-block sm:hidden" />
                    play.
                  </h1>
                  <div className="mt-12 rounded-1.9xl border-2 border-black/10 bg-black/10 p-5 backdrop-blur-lg lg:max-w-sm">
                    <p className="text-base text-white sm:text-lg">
                      <Trans i18nKey="index:subtitle">
                        Treasure is the decentralized gaming ecosystem bringing
                        games and players together through{" "}
                        <span className="font-bold">MAGIC.</span>
                      </Trans>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="absolute top-0 left-0 h-full w-full bg-[linear-gradient(0deg,#212f5e99,#212f5e99),url('/img/bg-hero.jpg')] bg-cover bg-center bg-no-repeat lg:bg-[linear-gradient(to_right,#212f5e_10%,transparent_70%),url('/img/bg-hero.jpg')] xl:bg-[linear-gradient(to_right,#212f5e_40%,transparent_90%),url('/img/bg-hero.jpg')] xl:[background-position:-15rem] 2xl:bg-[linear-gradient(to_right,#212f5e_10%,transparent_70%),url('/img/bg-hero.jpg')] 2xl:[background-position:5rem]"></div>
        </div>
        <NewTreasureStats type="secondary" />
        <div className="relative bg-honey-100 py-6 lg:py-10">
          <div className="mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:max-w-9xl lg:px-12">
            <div className="grid grid-cols-2 gap-6 lg:grid-cols-3">
              {IndexCTA.map((cta) => {
                if (cta.isExternal) {
                  return (
                    <a
                      key={cta.name}
                      href={cta.href}
                      className="relative flex flex-col rounded-2xl border border-honey-300 bg-honey-50 p-5 transition-all hover:scale-105 lg:p-7"
                    >
                      {cta.icon}
                      <p className="mt-3 text-base font-bold text-night-900 xl:text-xl">
                        {cta.name}
                      </p>
                      <p className="mt-1 break-words text-sm text-night-700 xl:text-lg xl:leading-6">
                        {cta.description}
                      </p>
                      <ArrowTopRightOnSquareIcon className="absolute right-5 top-5 h-5 w-5 fill-night-700 transition-opacity duration-500 lg:right-7 lg:top-7 [&>path]:stroke-night-700 [&>path]:stroke-[1]" />
                    </a>
                  );
                }

                return (
                  <Link
                    key={cta.name}
                    to={cta.href}
                    className="flex flex-col rounded-2xl border border-honey-300 bg-honey-50 p-5 transition-all hover:scale-105 lg:p-7"
                  >
                    {cta.icon}
                    <p className="mt-3 text-base font-bold text-night-900 xl:text-xl">
                      {cta.name}
                    </p>
                    <p className="mt-1 break-words text-sm text-night-700 xl:text-lg xl:leading-6">
                      {cta.description}
                    </p>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
        {/*
        <div className="relative bg-night-900 py-16 sm:py-24">
          <div className="mx-auto max-w-md px-4 text-center sm:max-w-3xl sm:px-6 lg:max-w-9xl lg:px-12">
            <Badge
              name="Games"
              bgColor="bg-night-800"
              textColor="text-night-200"
            />
            <p className="mx-auto mt-12 max-w-xl text-3xl font-bold tracking-tight text-honey-200 sm:text-5xl">
              Games and worlds that delight the masses
            </p>
          </div>
          <CartridgeSlider />
        </div>
        <div className="relative bg-honey-100 py-16 sm:py-24">
          <div className="mx-auto max-w-md px-4 text-center sm:max-w-3xl sm:px-6 lg:max-w-9xl lg:px-12">
            <Badge name="Build" />
            <p className="mx-auto mt-12 max-w-xl text-2xl font-bold tracking-tight text-night-900 sm:text-4xl">
              The future of web3 gaming is powered by Treasure.
            </p>
            <div className="mt-12">
              <Build />
            </div>
          </div>
        </div>
        <section
          id="cta"
          aria-labelledby="cta"
          className="relative bg-night-900 py-16 sm:py-24"
        >
          <div className="mx-auto max-w-3xl px-8 sm:px-6 lg:max-w-9xl lg:px-12">
            <div className="grid grid-cols-1 rounded-2.5xl border-2 border-[#1D232E] bg-[#131D2E] p-6 sm:grid-cols-7 sm:p-10">
              <div className="order-last col-span-4 mt-4 flex flex-col justify-center space-y-4 px-4 sm:mt-0 sm:space-y-6 sm:px-14 xl:space-y-8 xl:px-20">
                <p className="text-2xl font-bold !leading-[1.6rem] text-honey-200 lg:text-3xl 2xl:text-4xl">
                  Build the future of gaming with us
                </p>
                <p className="text-sm text-night-500 sm:text-lg">
                  Apply to become an official Treasure Game Partner to
                  supercharge your game by building with a vibrant community and
                  ecosystem of builders.
                </p>
                <div>
                  <CTAButton
                    as="a"
                    href="https://docs.google.com/forms/d/e/1FAIpQLSeeom1s9R48ZGRXzx5B-MeYahfVa2DoKVBqS8hu63wwLxykpQ/viewform"
                  >
                    Start building
                  </CTAButton>
                </div>
              </div>
              <div className="col-span-3 overflow-hidden rounded-xl md:order-2">
                <img
                  className="h-full w-full object-cover"
                  src={BuildFutureImg}
                  alt="Build the future of gaming with us"
                />
              </div>
            </div>
          </div>
        </section>
        */}

        <Reviews />

        <Partners />
        <BuildWithTreasure />
      </main>
    </Layout>
  );
}
