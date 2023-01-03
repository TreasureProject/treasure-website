import { Badge } from "~/components/Badge";
import { IndexCTA, partners, socials } from "~/const";
import { NewTreasureStats } from "~/components/TreasureStats";

import { Build } from "~/components/Build";
import { Fragment, useState } from "react";
import { Trans } from "react-i18next";

import ReactPlayer from "react-player/youtube";
import { Dialog, Transition } from "@headlessui/react";
import type { HeadersFunction, LinksFunction } from "@remix-run/cloudflare";
import { commonHeaders } from "~/utils/misc.server";
import { useTranslation } from "react-i18next";
import { Link } from "@remix-run/react";
import { Reviews } from "~/components/Reviews";
import keenSliderCSS from "keen-slider/keen-slider.min.css";
import { CartridgeSlider } from "~/components/CartridgeSlider";
import { CTAButton } from "~/components/Button";
import { NewCard } from "~/components/Card";
import GetMagicImg from "@/img/illustrations/get-magic.webp";
import JoinCommunityImg from "@/img/illustrations/join-community.webp";
import { Partners } from "~/components/Partners";
import BuildFutureImg from "@/img/build-future.webp";
import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/solid";

export const headers: HeadersFunction = commonHeaders;

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: keenSliderCSS },
];

export default function Home() {
  const [isOpenYoutubeModal, setIsOpenYoutubeModal] = useState(false);
  const { t } = useTranslation("index", {
    keyPrefix: "index",
  });

  const onClose = () => setIsOpenYoutubeModal(false);

  return (
    <>
      <main className="overflow-hidden">
        <div className="relative bg-[#212f5e] py-24 lg:overflow-hidden lg:py-0">
          <div className="relative z-20 lg:px-12">
            <div className="lg:grid lg:grid-cols-7 lg:gap-8">
              <div className="col-span-3 mx-auto max-w-md px-4 sm:px-6 lg:flex lg:items-center lg:px-0 lg:text-left xl:max-w-sm">
                <div className="text-center lg:py-32 lg:text-left xl:pb-48 xl:pt-40">
                  <h1 className="mt-4 text-5xl font-bold tracking-tight text-white sm:mt-0 sm:text-7xl xl:text-[5rem]">
                    {t("title")}
                  </h1>
                  <div className="mt-12 rounded-1.9xl border-2 border-black/10 bg-black/10 p-5 backdrop-blur-sm lg:max-w-sm">
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
          <div className="mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:max-w-8xl lg:px-12">
            <div className="grid grid-cols-2 gap-6 lg:grid-cols-4">
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
                      <p className="mt-1 break-words text-sm text-night-700 xl:text-lg">
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
                    <p className="mt-1 break-words text-sm text-night-700 xl:text-lg">
                      {cta.description}
                    </p>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
        <div className="relative bg-night-900 py-16 sm:py-24">
          <div className="mx-auto max-w-md px-4 text-center sm:max-w-3xl sm:px-6 lg:max-w-8xl lg:px-12">
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
                <p className="text-base font-bold text-honey-200 lg:text-2xl xl:text-4xl">
                  Build the future of gaming with us
                </p>
                <p className="text-xs text-night-500 sm:text-base lg:text-lg xl:text-xl">
                  Apply to our Ecosystem Integration Framework to supercharge
                  your game and build with a vibrant community and ecosystem of
                  builders, and receive curated long-term support and
                  incentives.
                </p>
                <div>
                  <CTAButton
                    as="a"
                    href="https://docs.treasure.lol/games/ecosystem-integration-framework"
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

        <Reviews />

        <Partners />
        <section
          id="info"
          aria-labelledby="other-information"
          className="relative bg-honey-100 py-16"
        >
          <div className="mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:max-w-8xl lg:px-12">
            <div className="grid auto-rows-[15rem] grid-cols-1 gap-10 sm:auto-rows-[20rem] xl:grid-cols-3">
              <div className="relative flex flex-col justify-between overflow-hidden rounded-2.5xl border-2 border-honey-300 bg-honey-50 bg-[linear-gradient(to_right,#101827ed_30%,#10182790),url('/img/bg-hero.jpg')] bg-cover bg-center bg-no-repeat p-10">
                <div className="space-y-2.5">
                  <p className="text-2xl font-bold text-honey-100 sm:text-4xl">
                    Build with Treasure
                  </p>
                  <p className="text-sm text-night-100 sm:text-lg">
                    Apply to the Ecosystem Integration Framework to supercharge
                    your game.
                  </p>
                </div>
                <div className="mt-8">
                  <CTAButton to="/build" type="primary" hideExternalIcon>
                    Start building
                  </CTAButton>
                </div>
              </div>
              <NewCard
                title="Get Magic"
                description="Our native token MAGIC is your access pass to games powered by Treasure."
                image={GetMagicImg}
              >
                <CTAButton as="a" href="#" type="primary" hideExternalIcon>
                  Discover more
                </CTAButton>
              </NewCard>
              <NewCard
                title="Join the community"
                description="Enter the Treasureverse!"
                image={JoinCommunityImg}
              >
                <div className="flex space-x-6">
                  {socials.map((social) => (
                    <a
                      key={social.name}
                      className="text-night-800 hover:text-night-900"
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span className="sr-only">{social.name}</span>
                      <social.icon
                        className="h-6 w-6 sm:h-8 sm:w-8"
                        aria-hidden="true"
                      />
                    </a>
                  ))}
                </div>
              </NewCard>
            </div>
          </div>
        </section>
      </main>
      <Transition.Root show={isOpenYoutubeModal} as={Fragment}>
        <Dialog as="div" className="relative z-30" onClose={onClose}>
          <Transition.Child
            as={Fragment}
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
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                enterTo="opacity-100 translate-y-0 sm:scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              >
                <Dialog.Panel className="relative w-full sm:max-w-2xl">
                  <ReactPlayer
                    playing={true}
                    controls={true}
                    url="https://www.youtube.com/watch?v=hR0hKprs0iM"
                    width="100%"
                    height="360px"
                  />
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
    </>
  );
}
