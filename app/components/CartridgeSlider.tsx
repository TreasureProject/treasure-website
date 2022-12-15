import React from "react";
import { useKeenSlider } from "keen-slider/react";
import BWCartridgeImg from "../../public/img/cartridges/bw.png";
import { motion } from "framer-motion";
import { twMerge } from "tailwind-merge";
import { CTAButton } from "./Button";
import { Arrow } from "./Arrow";

// TODO: replace this with the one in the const file
const CARTRIDGE_LIST = [
  {
    name: "BridgeWorld",
    link: "https://bridgeworld.treasure.lol",
    tags: ["P2E", "Fantasy"],
    image: BWCartridgeImg,
  },
  {
    name: "BridgeWorld",
    link: "https://bridgeworld.treasure.lol",
    tags: ["P2E", "Fantasy"],
    image: BWCartridgeImg,
  },
  {
    name: "BridgeWorld",
    link: "https://bridgeworld.treasure.lol",
    tags: ["P2E", "Fantasy"],
    image: BWCartridgeImg,
  },
  {
    name: "BridgeWorld",
    link: "https://bridgeworld.treasure.lol",
    tags: ["P2E", "Fantasy"],
    image: BWCartridgeImg,
  },
  {
    name: "BridgeWorld",
    link: "https://bridgeworld.treasure.lol",
    tags: ["P2E", "Fantasy"],
    image: BWCartridgeImg,
  },
  {
    name: "BridgeWorld",
    link: "https://bridgeworld.treasure.lol",
    tags: ["P2E", "Fantasy"],
    image: BWCartridgeImg,
  },
  {
    name: "BridgeWorld",
    link: "https://bridgeworld.treasure.lol",
    tags: ["P2E", "Fantasy"],
    image: BWCartridgeImg,
  },
] as const;

const INITIAL_SLIDE = 3;

export const CartridgeSlider = () => {
  const [currentSlide, setCurrentSlide] = React.useState(INITIAL_SLIDE);

  const [slideRef, instanceRef] = useKeenSlider({
    initial: INITIAL_SLIDE,
    slides: {
      origin: "center",
      perView: 1,
      spacing: 8,
    },
    slideChanged(s) {
      setCurrentSlide(s.track.details.rel);
    },
    breakpoints: {
      "(min-width: 640px)": {
        slides: {
          origin: "center",
          perView: 3,
          spacing: 15,
        },
      },
      "(min-width: 1280px)": {
        slides: {
          origin: "center",
          perView: 5,
          spacing: 30,
        },
      },
    },
  });

  return (
    <div className="mt-12">
      <div className="relative sm:mt-2 xl:mt-4">
        <div
          ref={slideRef}
          className="keen-slider [mask-image:linear-gradient(to_left,#0000,#000_20%,#000_80%,#0000)]"
        >
          {CARTRIDGE_LIST.map((cartridge, index) => {
            const currentIndex = index === currentSlide;

            const isNearCurrentIndex = Math.abs(index - currentSlide) <= 1;

            const scale = currentIndex ? 1 : isNearCurrentIndex ? 0.9 : 0.7;
            const opacity = currentIndex ? 1 : isNearCurrentIndex ? 0.9 : 0.5;

            return (
              <motion.div
                key={`${cartridge.name}-${index}`}
                animate={{
                  opacity,
                }}
              >
                <div className="keen-slider__slide">
                  <motion.div
                    animate={{
                      scale,
                    }}
                  >
                    <img
                      className="h-full w-full [mask-image:linear-gradient(to_bottom,#000_70%,#0000_100%)]"
                      src={cartridge.image}
                      alt={cartridge.name}
                    />
                    <CTAButton
                      hideExternalIcon
                      className="absolute left-1/2 bottom-24 -translate-x-1/2 border-night-700 bg-night-900/50 text-honey-50 backdrop-blur-md hover:bg-night-900 hover:text-white focus:ring-honey-500 sm:text-sm xl:bottom-36"
                    >
                      View Game
                    </CTAButton>
                    <div className="absolute bottom-6 flex w-full justify-center border-t border-honey-25/10 xl:bottom-12">
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
                  </motion.div>
                </div>
              </motion.div>
            );
          })}
        </div>
        {instanceRef.current ? (
          <>
            <Arrow
              dir="left"
              onClick={() => instanceRef.current?.prev()}
              disabled={currentSlide === 0}
            />
            <Arrow
              onClick={() => instanceRef.current?.next()}
              disabled={
                currentSlide ===
                instanceRef.current.track.details.slides.length - 1
              }
            />
          </>
        ) : null}
      </div>
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
    </div>
  );
};
