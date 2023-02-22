import type {
  HeadersFunction,
  LinksFunction,
  MetaFunction,
} from "@remix-run/node";
import type { RootLoaderData } from "~/root";
import { generateTitle, getSocialMetas, getUrl } from "~/utils/seo";
import { commonHeaders } from "~/utils/misc.server";
import { useState } from "react";
import { sliderCartridges, coreCartridges } from "~/const";
import { motion } from "framer-motion";
import React from "react";
import { useKeenSlider } from "keen-slider/react";
import keenSliderCSS from "keen-slider/keen-slider.min.css";
import { SpinnerIcon } from "~/components/Icons";
import { twMerge } from "tailwind-merge";
import { CTAButton } from "~/components/Button";
import { Arrow } from "~/components/Arrow";
import DefaultIconImg from "@/img/games/icons/default.webp";

import { BuildWithTreasure } from "~/components/BuildWithTreasure";

export const meta: MetaFunction = ({ parentsData }) => {
  const {
    root: { requestInfo },
  } = parentsData as {
    root: RootLoaderData;
  };

  return {
    ...getSocialMetas({
      description:
        "Treasure is the decentralized gaming ecosystem bringing games and players together through MAGIC.",
      keywords: "treasure, NFT, DeFi, games, community, imagination, magic",
      title: generateTitle("/games"),
      origin: requestInfo.origin,
      url: getUrl(requestInfo),
      imgPath: "/games",
    }),
  };
};

export const headers: HeadersFunction = commonHeaders;

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: keenSliderCSS },
];

const headerAnimation = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 0.3, delay: 0.3 } },
};

export default function Games() {
  return (
    <main>
      <section
        id="games-slider"
        aria-labelledby="games-slider"
        className="relative bg-night-900 py-16 sm:py-24"
      >
        <div className="mx-auto hidden max-w-9xl px-4 sm:px-12 lg:block">
          <PartnerSlideDesktop />
        </div>
        <div className="block lg:hidden">
          <PartnerSlideMobile />
        </div>
      </section>
      <section
        id="powered-by-treasure-games-list"
        aria-labelledby="powered-by-treasure-games-list"
        className="relative bg-night-900 py-8 sm:py-16"
      >
        <div className="mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:max-w-9xl lg:px-12">
          <div className="flex flex-col items-center justify-center sm:flex-row sm:items-start sm:justify-between">
            <div className="max-w-min space-y-5">
              <p className="whitespace-nowrap text-xl font-bold text-honey-200 sm:text-4xl">
                Powered by Treasure
              </p>
              <p className="text-center text-xs text-night-500 sm:text-left sm:text-xl">
                Games powered by Treasure through MAGIC, imagination, and
                interoperability.
              </p>
            </div>
            <div className="mt-4 flex flex-col items-center space-y-1 rounded-1.5xl border-2 border-night-800 px-5 py-3.5 sm:mt-0">
              <p className="text-xs text-night-600 sm:text-sm">
                Integrated games
              </p>
              <span className="text-base font-bold text-honey-300 sm:text-xl">
                +10
              </span>
            </div>
          </div>
          <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 md:gap-8 lg:grid-cols-4 lg:gap-10 xl:grid-cols-5">
            {coreCartridges.map((cartridge) => {
              return (
                <a
                  href={cartridge.websiteLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group grid overflow-hidden rounded-lg border border-night-900/50 shadow-2xl shadow-black/25 [grid-template-areas:'overlay']"
                  key={cartridge.name}
                >
                  <div
                    className="relative z-10 [grid-area:overlay]"
                    style={{
                      backgroundImage:
                        "linear-gradient(180deg, rgba(0, 0, 0, 0.6) 0%, #0000 20%, #0000 80%, rgba(0, 0, 0, 0.6) 99%), linear-gradient(0deg, rgba(0, 0, 0, 0.25), rgba(0, 0, 0, 0.25))",
                    }}
                  ></div>
                  <div className="relative aspect-auto [grid-area:overlay] [background-image:linear-gradient(to_bottom,#000,#0000_70%)]">
                    <img
                      src={cartridge.image}
                      className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-110"
                      alt=""
                    />
                  </div>
                  <div className="relative z-20 flex flex-col justify-between p-6 [grid-area:overlay]">
                    <p className="sm:text-md max-w-[70%] font-bold leading-5 text-honey-25 lg:text-xl lg:leading-6 xl:text-2xl">
                      {cartridge.name}
                    </p>
                  </div>
                </a>
              );
            })}
          </div>
        </div>
      </section>
      <BuildWithTreasure />
    </main>
  );
}

const PartnerSlideMobile = () => {
  const [currentSlide, setCurrentSlide] = React.useState(0);
  const [loaded, setLoaded] = useState(false);

  const [slideRef, instanceRef] = useKeenSlider({
    slides: {
      origin: "center",
      perView: 1,
      spacing: 20,
    },
    created() {
      setLoaded(true);
    },
    slideChanged(s) {
      setCurrentSlide(s.track.details.rel);
    },
  });

  const currentSlideInfo = sliderCartridges[currentSlide];

  return (
    <div className="relative">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: loaded ? 1 : 0,
          transition: { duration: 0.3, delay: 0.5 },
        }}
        ref={slideRef}
        className="keen-slider"
      >
        {sliderCartridges.map((feature) => (
          <div key={feature.name} className="keen-slider__slide px-16 sm:px-24">
            <img
              className="h-[20rem] w-full rounded-2xl border-2 border-night-800 object-cover [mask-image:linear-gradient(to_bottom,#000,#0000_70%)] sm:h-[32rem]"
              src={feature.sliderImage ?? ""}
              alt=""
            />
          </div>
        ))}
        {instanceRef.current ? (
          <>
            <Arrow
              dir="left"
              className="left-4 sm:left-6"
              onClick={() => instanceRef.current?.prev()}
              disabled={currentSlide === 0}
            />
            <Arrow
              className="right-4 sm:right-6"
              onClick={() => instanceRef.current?.next()}
              disabled={
                currentSlide ===
                instanceRef.current.track.details.slides.length - 1
              }
            />
          </>
        ) : null}
      </motion.div>
      <div className="mt-6 flex justify-center gap-3">
        {instanceRef.current?.track.details.slides.map((_, index) => (
          <button
            type="button"
            key={index}
            className={twMerge(
              "relative h-0.5 w-4 rounded-full",
              index === currentSlide ? "bg-ruby-1000" : "bg-honey-25"
            )}
            aria-label={`Go to slide ${index + 1}`}
            onClick={() => {
              instanceRef.current?.moveToIdx(index);
            }}
          >
            <span className="absolute -inset-x-1.5 -inset-y-3" />
          </button>
        ))}
      </div>
      <motion.div
        key={currentSlide}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 text-center text-white sm:bottom-12"
        variants={headerAnimation}
        initial="initial"
        animate="animate"
      >
        {currentSlideInfo.logo ? (
          <img
            src={currentSlideInfo.logo}
            className="mx-auto w-32 sm:w-48"
            alt={currentSlideInfo.name}
          />
        ) : null}
        <div className="mt-3 space-y-2">
          <p className="text-xs text-night-100 sm:text-sm">
            {currentSlideInfo.description}
          </p>
        </div>
        <div className="mt-3 flex justify-center space-x-2 sm:mt-6 sm:space-x-3.5">
          <CTAButton
            as="a"
            href={currentSlideInfo.websiteLink}
            type="primary"
            className="text-xs sm:text-sm"
          >
            View game
          </CTAButton>
        </div>
      </motion.div>
    </div>
  );
};

const PartnerSlideDesktop = () => {
  const [currentSlide, setCurrentSlide] = React.useState(0);
  const [loaded, setLoaded] = useState(false);

  const [slideRef, instanceRef] = useKeenSlider(
    {
      slides: {
        origin: "center",
        perView: 1,
        spacing: 0,
      },
      loop: true,
      drag: false,
      created() {
        setLoaded(true);
      },
      vertical: true,
      slideChanged(s) {
        setCurrentSlide(s.track.details.rel);
      },
    },
    [
      (slider) => {
        let timeout: ReturnType<typeof setTimeout>;
        let mouseOver = false;
        function clearNextTimeout() {
          clearTimeout(timeout);
        }
        function nextTimeout() {
          clearTimeout(timeout);
          if (mouseOver) return;
          timeout = setTimeout(() => {
            slider.next();
          }, 10000);
        }
        slider.on("created", () => {
          slider.container.addEventListener("mouseover", () => {
            mouseOver = true;
            clearNextTimeout();
          });
          slider.container.addEventListener("mouseout", () => {
            mouseOver = false;
            nextTimeout();
          });
          nextTimeout();
        });
        slider.on("dragStarted", clearNextTimeout);
        slider.on("animationEnded", nextTimeout);
        slider.on("updated", nextTimeout);
      },
    ]
  );

  const currentSlideInfo = sliderCartridges[currentSlide];

  return (
    <div className="grid grid-cols-12 items-center gap-8">
      <div className="relative z-10 order-last col-span-4 h-0 min-h-full space-y-6 overflow-hidden xl:col-span-3">
        <div className="h-[24rem] space-y-3 overflow-y-auto scrollbar-thin scrollbar-track-night-800 scrollbar-thumb-night-700 lg:pr-8 xl:h-[32rem] 2xl:h-[36rem]">
          {sliderCartridges.map((feature, featureIndex) => (
            <div
              key={feature.name}
              className="relative rounded-2xl transition-colors hover:bg-night-800/30"
            >
              {featureIndex === currentSlide && (
                <motion.div
                  layoutId="activeBackground"
                  className="absolute inset-0 rounded-lg border-2 border-night-800 bg-[#1F2737]"
                  initial={{ borderRadius: 16 }}
                />
              )}
              <div className="relative z-10 flex items-center space-x-3.5 px-4 py-3.5">
                <img
                  src={feature.iconImage || DefaultIconImg}
                  className="h-16 w-16 rounded-lg object-cover"
                  alt={feature.name}
                />
                <h3 className="font-bold text-night-100">
                  <button
                    onClick={() => instanceRef.current?.moveToIdx(featureIndex)}
                    className="text-left [&:not(:focus-visible)]:focus:outline-none"
                  >
                    <span className="absolute inset-0 rounded-2xl" />
                    {feature.name}
                  </button>
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="relative col-span-8 h-[24rem] overflow-hidden rounded-2xl border-2 border-night-800 xl:col-span-9 xl:h-[32rem] 2xl:h-[36rem]">
        <SpinnerIcon
          className={twMerge(
            "mx-auto h-full w-6 text-night-500",
            loaded && "hidden"
          )}
        />
        <div ref={slideRef} className="keen-slider h-full">
          {sliderCartridges.map((feature) => (
            <div key={feature.name} className="keen-slider__slide aspect-video">
              <img
                className="h-full w-full object-cover object-center [mask-image:linear-gradient(to_left,#000_10%,#0000_90%)] xl:[mask-image:linear-gradient(to_left,#000_20%,#0000_90%)]"
                src={feature.sliderImage ?? ""}
                alt=""
              />
            </div>
          ))}
        </div>
        <motion.div
          key={currentSlide}
          className="absolute bottom-12 left-12 text-white"
          variants={headerAnimation}
          initial="initial"
          animate="animate"
        >
          {currentSlideInfo.logo ? (
            <img
              src={currentSlideInfo.logo}
              className="h-12"
              alt={currentSlideInfo.name}
            />
          ) : null}
          <div className="mt-6 max-w-md space-y-3.5 lg:max-w-sm">
            <p className="text-sm text-night-100 sm:text-sm xl:text-base">
              {currentSlideInfo.description}
            </p>
          </div>
          <div className="mt-6 flex space-x-3.5">
            <CTAButton
              as="a"
              href={currentSlideInfo.websiteLink}
              type="primary"
              className="text-[0.6rem] sm:text-sm"
            >
              View game
            </CTAButton>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export const handle = {
  breadcrumb: {
    href: "/games",
    title: "Games",
  },
};
