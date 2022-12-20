import type {
  HeadersFunction,
  LinksFunction,
  MetaFunction,
} from "@remix-run/cloudflare";
import type { RootLoaderData } from "~/root";
import { generateTitle, getSocialMetas, getUrl } from "~/utils/seo";
import { commonHeaders } from "~/utils/misc.server";
import { useState } from "react";
import { cartridges, socials } from "~/const";
import { motion } from "framer-motion";
import React from "react";
import { useKeenSlider } from "keen-slider/react";
import keenSliderCSS from "keen-slider/keen-slider.min.css";
import { SpinnerIcon } from "~/components/Icons";
import { twMerge } from "tailwind-merge";
import { CTAButton } from "~/components/Button";
import { Arrow } from "~/components/Arrow";
import { NewCard } from "~/components/Card";
import GetMagicImg from "../../public/img/illustrations/get-magic.webp";
import JoinCommunityImg from "../../public/img/illustrations/join-community.webp";
import HeroImg from "../../public/img/hero.png";

export const headers: HeadersFunction = commonHeaders;

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: keenSliderCSS },
];

export const meta: MetaFunction = ({ parentsData }) => {
  const {
    root: { requestInfo },
  } = parentsData as {
    root: RootLoaderData;
  };

  return {
    ...getSocialMetas({
      description:
        "Treasure is the decentralized video game console connecting games and communities together through imagination, MAGIC, and NFTs.",
      keywords: "treasure, NFT, DeFi, games, community, imagination, magic",
      title: generateTitle("/infrastructure"),
      origin: requestInfo.origin,
      url: getUrl(requestInfo),
      imgPath: "/infrastructure",
    }),
  };
};

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
        <div className="hidden px-24 lg:block">
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
        <div className="px-4 sm:px-6 lg:px-24">
          <div className="flex flex-col items-center justify-center sm:flex-row sm:items-start sm:justify-between">
            <div className="max-w-min space-y-5">
              <p className="whitespace-nowrap text-xl font-semibold text-honey-200 sm:text-4xl">
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
              <span className="text-base font-semibold text-honey-300 sm:text-xl">
                +40
              </span>
            </div>
          </div>
          <div className="mt-10 grid auto-rows-[350px] grid-cols-1 gap-10 sm:grid-cols-3 xl:grid-cols-5">
            {cartridges.map((cartridge) => {
              return (
                <div
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
                  <div className="relative [grid-area:overlay] [background-image:linear-gradient(to_bottom,#000,#0000_70%)]">
                    <img
                      src={cartridge.image}
                      className="h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      alt=""
                    />
                  </div>
                  <div className="relative z-20 flex flex-col justify-between p-6 [grid-area:overlay]">
                    <p className="max-w-[70%] text-2xl font-semibold text-honey-25">
                      {cartridge.name}
                    </p>
                    <div className="mt-5 space-x-2.5">
                      {cartridge.tags.map((tag) => (
                        <span
                          key={tag}
                          className="inline-block rounded-md bg-night-800/50 px-2.5 py-1 text-xs font-medium uppercase leading-4 text-night-400 backdrop-blur-sm"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      <section
        id="games-list"
        aria-labelledby="games-list"
        className="relative bg-night-900 py-8 sm:py-16"
      >
        <div className="px-4 sm:px-6 lg:px-24">
          <p className="mx-auto w-min whitespace-nowrap text-xl font-semibold text-honey-200 sm:mx-0 sm:text-4xl">
            Games
          </p>

          <div className="mt-10 grid auto-rows-[350px] grid-cols-1 gap-10 sm:grid-cols-3 xl:grid-cols-5">
            {cartridges.map((cartridge) => {
              return (
                <div
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
                  <div className="relative [grid-area:overlay] [background-image:linear-gradient(to_bottom,#000,#0000_70%)]">
                    <img
                      src={cartridge.image}
                      className="h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      alt=""
                    />
                  </div>
                  <div className="relative z-20 flex flex-col justify-between p-6 [grid-area:overlay]">
                    <p className="max-w-[70%] text-2xl font-semibold text-honey-25">
                      {cartridge.name}
                    </p>
                    <div className="mt-5 space-x-2.5">
                      {cartridge.tags.map((tag) => (
                        <span
                          key={tag}
                          className="inline-block rounded-md bg-night-800/50 px-2.5 py-1 text-xs font-medium uppercase leading-4 text-night-400 backdrop-blur-sm"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      <section
        id="info"
        aria-labelledby="other-information"
        className="relative bg-honey-100 py-16"
      >
        <div className="px-4 sm:px-6 lg:px-24">
          <div className="grid auto-rows-[15rem] grid-cols-1 gap-10 sm:auto-rows-[20rem] lg:grid-cols-3">
            <NewCard
              title="Build with Treasure"
              description="Games on Treasure"
              image={HeroImg}
            >
              <CTAButton as="a" href="#" type="primary" hideExternalIcon>
                Discover More
              </CTAButton>
            </NewCard>
            <NewCard
              title="Get Magic"
              description="Games on Treasure"
              image={GetMagicImg}
            >
              <CTAButton as="a" href="#" type="primary" hideExternalIcon>
                Discover More
              </CTAButton>
            </NewCard>
            <NewCard
              title="Join the community"
              description="Take part in the conversation!"
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
                    <social.icon className="h-8 w-8" aria-hidden="true" />
                  </a>
                ))}
              </div>
            </NewCard>
          </div>
        </div>
      </section>
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

  const currentSlideInfo = cartridges[currentSlide];

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
        {cartridges.map((feature) => (
          <div key={feature.name} className="keen-slider__slide px-16 sm:px-24">
            <img
              className="h-64 w-full rounded-2xl border-2 border-night-800 object-cover [mask-image:linear-gradient(to_bottom,#000,#0000_70%)] sm:h-96"
              src={feature.image}
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
        <img
          src={currentSlideInfo.logo}
          className="mx-auto w-32 sm:w-48"
          alt={currentSlideInfo.name}
        />
        <div className="mt-3 space-y-2">
          <p className="text-xs font-semibold text-night-100 sm:text-base">
            {currentSlideInfo.title}
          </p>
          <p className="text-[0.6rem] text-night-100 sm:text-xs">
            {currentSlideInfo.description}
          </p>
        </div>
        <div className="mt-3 flex justify-center space-x-2 sm:mt-6 sm:space-x-3.5">
          <CTAButton
            as="a"
            href="#"
            type="primary"
            className="text-[0.6rem] sm:text-xs"
            hideExternalIcon
          >
            View
          </CTAButton>
          <CTAButton
            as="a"
            href="#"
            hideExternalIcon
            className="border-night-700 bg-night-900/50 text-[0.6rem] text-honey-50 backdrop-blur-md hover:bg-night-900 hover:text-white focus:ring-honey-500 sm:text-xs"
          >
            Learn More
          </CTAButton>
        </div>
      </motion.div>
    </div>
  );
};

const PartnerSlideDesktop = () => {
  const [currentSlide, setCurrentSlide] = React.useState(0);
  const [loaded, setLoaded] = useState(false);

  const [slideRef, instanceRef] = useKeenSlider({
    slides: {
      origin: "center",
      perView: 1,
      spacing: 0,
    },
    drag: false,
    created() {
      setLoaded(true);
    },
    vertical: true,
    slideChanged(s) {
      setCurrentSlide(s.track.details.rel);
    },
  });

  const currentSlideInfo = cartridges[currentSlide];

  return (
    <div className="grid grid-cols-12 items-center gap-8">
      <div className="relative z-10 order-last col-span-4 h-0 min-h-full space-y-6 overflow-hidden">
        <div className="h-[28rem] space-y-3 overflow-y-auto xl:h-[34rem]">
          {cartridges.map((feature, featureIndex) => (
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
                  src={feature.image}
                  className="h-16 w-16 rounded-lg object-cover"
                  alt={feature.name}
                />
                <h3 className="font-semibold text-night-100">
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
      <div className="relative col-span-8 h-[28rem] overflow-hidden rounded-2xl border-2 border-night-800 xl:h-[34rem]">
        <SpinnerIcon
          className={twMerge(
            "mx-auto h-full w-6 text-night-500",
            loaded && "hidden"
          )}
        />
        <div ref={slideRef} className="keen-slider h-full">
          {cartridges.map((feature) => (
            <div key={feature.name} className="keen-slider__slide">
              <img
                className="h-full w-full object-cover [mask-image:linear-gradient(to_left,#000_10%,#0000_90%)] xl:[mask-image:linear-gradient(to_left,#000_20%,#0000_90%)]"
                src={feature.image}
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
          <img
            src={currentSlideInfo.logo}
            className="w-80"
            alt={currentSlideInfo.name}
          />
          <div className="mt-6 max-w-min space-y-3.5">
            <p className="whitespace-nowrap text-4xl font-semibold text-night-100">
              {currentSlideInfo.title}
            </p>
            <p className="text-night-100">{currentSlideInfo.description}</p>
          </div>
          <div className="mt-6 flex space-x-3.5">
            <CTAButton
              as="a"
              href="#"
              type="primary"
              className="sm:text-sm"
              hideExternalIcon
            >
              View
            </CTAButton>
            <CTAButton
              as="a"
              href="#"
              hideExternalIcon
              className="border-night-700 bg-night-900/50 text-honey-50 backdrop-blur-md hover:bg-night-900 hover:text-white focus:ring-honey-500 sm:text-sm"
            >
              Learn More
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
