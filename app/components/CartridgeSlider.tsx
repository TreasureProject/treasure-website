import React from "react";
import { useKeenSlider } from "keen-slider/react";
import { motion } from "framer-motion";
import { twMerge } from "tailwind-merge";
import { CTAButton } from "./Button";
import { Arrow } from "./Arrow";
import { coreCartridges } from "~/const";

const INITIAL_SLIDE = 5;

export const CartridgeSlider = () => {
  const [currentSlide, setCurrentSlide] = React.useState(INITIAL_SLIDE);

  const [slideRef, instanceRef] = useKeenSlider({
    initial: INITIAL_SLIDE,
    loop: true,
    slides: {
      origin: "center",
      perView: "auto",
      spacing: 50,
    },
    slideChanged(s) {
      setCurrentSlide(s.track.details.rel);
    },
  });

  return (
    <div className="mt-12">
      <div className="relative sm:mt-2 xl:mt-4">
        <div
          ref={slideRef}
          className="keen-slider [mask-image:linear-gradient(to_left,#0000,#000_20%,#000_80%,#0000)]"
        >
          {coreCartridges.map((cartridge, index) => {
            const currentIndex = index === currentSlide;

            const isNearCurrentIndex = Math.abs(index - currentSlide) <= 1;

            const opacity = currentIndex ? 1 : isNearCurrentIndex ? 0.7 : 0.5;

            return (
              <motion.div
                key={`${cartridge.name}-${index}`}
                animate={{
                  opacity,
                }}
              >
                <div className="keen-slider__slide !min-w-[24rem] !max-w-[24rem] [mask-image:url(/img/gem.webp)] [mask-size:contain] [mask-repeat:no-repeat] [mask-position:center]">
                  <img
                    className="h-full w-full [mask-image:linear-gradient(to_bottom,#000_25%,#0000_100%)]"
                    src={cartridge.image}
                    alt={cartridge.name}
                  />
                  <div className="absolute left-1/2 bottom-24 flex -translate-x-1/2 flex-col items-center space-y-3.5 xl:bottom-24 2xl:bottom-36">
                    <p className="whitespace-nowrap text-2xl font-bold text-honey-25">
                      {cartridge.name}
                    </p>
                    <CTAButton
                      as="a"
                      href={cartridge.websiteLink}
                      hideExternalIcon
                      className="border-night-700 bg-night-900/50 text-honey-50 backdrop-blur-md hover:bg-night-900 hover:text-white focus:ring-honey-500 sm:text-sm"
                    >
                      View Game
                    </CTAButton>
                  </div>
                  {/* <div className="absolute bottom-6 flex w-full justify-center border-t border-honey-25/10 xl:bottom-12">
                      <div className="mt-5 space-x-2.5">
                        {cartridge.tags.map((tag) => (
                          <span
                            key={tag}
                            className="inline-block rounded-md bg-night-800/80 px-2.5 py-1 text-xs font-medium uppercase leading-4 text-night-400 backdrop-blur-sm"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div> */}
                </div>
              </motion.div>
            );
          })}
        </div>
        {instanceRef.current ? (
          <>
            <Arrow dir="left" onClick={() => instanceRef.current?.prev()} />
            <Arrow onClick={() => instanceRef.current?.next()} />
          </>
        ) : null}
      </div>
      <div className="mt-6 flex flex-wrap justify-center gap-3 px-12">
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
      <div className="mt-12 flex justify-center">
        <CTAButton as="link" type="primary" to="/games" className="mx-auto">
          View all games
        </CTAButton>
      </div>
    </div>
  );
};
