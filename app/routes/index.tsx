import { Badge } from "~/components/Badge";
import { IndexCTA, partners } from "~/const";
import { NewTreasureStats } from "~/components/TreasureStats";
import { TreasurePosts } from "~/components/TreasurePosts";

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
import GetMagicImg from "../../public/img/illustrations/get-magic.webp";

export const headers: HeadersFunction = commonHeaders;

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: keenSliderCSS },
];

export default function Home() {
  const [isOpenYoutubeModal, setIsOpenYoutubeModal] = useState(false);
  const { t } = useTranslation("index", {
    keyPrefix: "index",
  });

  console.log(keenSliderCSS);
  const onClose = () => setIsOpenYoutubeModal(false);

  return (
    <>
      <main className="overflow-hidden">
        <div className="relative py-24 lg:overflow-hidden lg:py-0">
          <div className="relative z-20 lg:px-12">
            <div className="lg:grid lg:grid-cols-7 lg:gap-8">
              <div className="col-span-3 mx-auto max-w-lg px-4 sm:px-6 lg:flex lg:items-center lg:px-0 lg:text-left">
                <div className="lg:py-32 xl:pb-48 xl:pt-40">
                  <h1 className="mt-4 text-7xl font-bold tracking-tight text-white sm:mt-0 xl:text-8xl">
                    {t("title")}
                  </h1>
                  <div className="mt-12 rounded-1.9xl border-2 border-black/10 bg-black/10 p-7.5 backdrop-blur-sm lg:max-w-sm">
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

          <div className="absolute top-0 left-0 h-full w-full bg-[linear-gradient(0deg,#212f5e99,#212f5e99),url('/img/bg-hero.jpg')] bg-cover bg-center lg:bg-[linear-gradient(to_right,#212f5e_10%,transparent_70%),url('/img/bg-hero.jpg')] 2xl:bg-left"></div>
        </div>
        <NewTreasureStats />
        <div className="relative bg-honey-100 py-6 lg:py-10">
          <div className="mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:max-w-8xl lg:px-12">
            <div className="grid grid-cols-2 gap-6 lg:grid-cols-4">
              {IndexCTA.map((cta) => (
                <Link
                  key={cta.name}
                  to={"/"}
                  className="flex max-w-[22rem] flex-1 flex-col rounded-2xl border border-honey-300 bg-honey-50 p-5 lg:p-7"
                >
                  {cta.icon}
                  <p className="mt-3 text-lg font-semibold text-night-900 xl:text-2xl">
                    {cta.name}
                  </p>
                  <p className="mt-1 break-words text-base text-night-700 xl:text-xl">
                    {cta.description}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </div>
        <div className="relative bg-night-900 py-16 sm:py-24">
          <div className="mx-auto max-w-md px-4 text-center sm:max-w-3xl sm:px-6 lg:max-w-8xl lg:px-12">
            <Badge
              name="Core Cartridges"
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
        <TreasurePosts />

        <Reviews />

        <div className="relative bg-night-900 py-16 sm:py-24">
          <div className="mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:max-w-8xl lg:px-12">
            <div className="flex flex-col-reverse items-center sm:flex-row sm:items-start sm:justify-between">
              <p className="mt-12 max-w-lg text-center text-2xl font-bold text-honey-25 sm:mt-0 sm:text-left sm:text-4xl">
                An evergrowing roster of partners and supporters
              </p>
              <Badge
                name="Partners"
                bgColor="bg-night-800"
                textColor="text-night-200"
              />
            </div>
          </div>
          <div className="relative mt-12 flex overflow-x-hidden sm:mt-24">
            <div className="flex animate-marquee whitespace-nowrap">
              {partners.map((partner) => (
                <div
                  key={partner.name}
                  className="mx-4 flex w-56 items-center justify-center rounded-[15px] bg-black/25 px-7 py-3"
                >
                  <img src={partner.image} alt={partner.name} />
                </div>
              ))}
            </div>
            {/* Needed for infinity loop */}
            <div className="absolute top-0 flex animate-marquee2 whitespace-nowrap">
              {partners.map((partner) => (
                <div
                  key={partner.name}
                  className="mx-4 flex w-56 items-center justify-center rounded-[15px] bg-black/25 px-7 py-3"
                >
                  <img src={partner.image} alt={partner.name} />
                </div>
              ))}
            </div>
          </div>
        </div>
        <section
          id="info"
          aria-labelledby="other-information"
          className="relative bg-honey-100 py-16"
        >
          <div className="mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:max-w-8xl lg:px-12">
            <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
              <NewCard
                title="Get Magic"
                description="Games on Treasure"
                image={GetMagicImg}
              >
                <CTAButton type="primary" hideExternalIcon>
                  Discover More
                </CTAButton>
              </NewCard>
              <NewCard
                title="Join the community"
                description="Take part in the conversation!"
                image={GetMagicImg}
              >
                <CTAButton type="primary" hideExternalIcon>
                  Discover More
                </CTAButton>
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
