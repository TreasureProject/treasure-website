import React from "react";
import type { TrackDetails, KeenSliderPlugin } from "keen-slider/react";
import { useKeenSlider } from "keen-slider/react";
import BWCartridgeImg from "../../public/img/cartridges/bw.png";
import { motion } from "framer-motion";
import { twMerge } from "tailwind-merge";
import { ArrowRightIcon } from "@heroicons/react/24/solid";
import { CTAButton } from "./Button";

const WheelControls: KeenSliderPlugin = (slider) => {
  let touchTimeout: ReturnType<typeof setTimeout>;
  let position: {
    x: number;
    y: number;
  };
  let wheelActive: boolean;

  function dispatch(e: WheelEvent, name: string) {
    position.x -= e.deltaX;
    position.y -= e.deltaY;
    slider.container.dispatchEvent(
      new CustomEvent(name, {
        detail: {
          x: position.x,
          y: position.y,
        },
      })
    );
  }

  function wheelStart(e: WheelEvent) {
    position = {
      x: e.pageX,
      y: e.pageY,
    };
    dispatch(e, "ksDragStart");
  }

  function wheel(e: WheelEvent) {
    dispatch(e, "ksDrag");
  }

  function wheelEnd(e: WheelEvent) {
    dispatch(e, "ksDragEnd");
  }

  function eventWheel(e: WheelEvent) {
    e.preventDefault();
    if (!wheelActive) {
      wheelStart(e);
      wheelActive = true;
    }
    wheel(e);
    clearTimeout(touchTimeout);
    touchTimeout = setTimeout(() => {
      wheelActive = false;
      wheelEnd(e);
    }, 50);
  }

  slider.on("created", () => {
    slider.container.addEventListener("wheel", eventWheel, {
      passive: false,
    });
  });
};

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

  const [slideRef, instanceRef] = useKeenSlider(
    {
      initial: INITIAL_SLIDE,
      slides: {
        origin: "center",
        perView: 3,
        spacing: 8,
      },
      slideChanged(s) {
        setCurrentSlide(s.track.details.rel);
      },
      breakpoints: {
        "(min-width: 1024px)": {
          slides: {
            origin: "center",
            perView: 5,
            spacing: 30,
          },
        },
      },
    },
    [WheelControls]
  );

  return (
    <div className="mt-12">
      <div className="relative">
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

const Arrow = ({
  dir = "right",
  ...props
}: {
  dir?: "left" | "right";
} & React.ButtonHTMLAttributes<HTMLButtonElement>) => {
  return (
    <button
      className={twMerge(
        "absolute top-1/2 inline-block -translate-y-1/2 rounded-lg border-2 border-night-900 bg-night-800 p-2 disabled:opacity-50 sm:rounded-2xl sm:p-4",
        dir === "left"
          ? "left-16 sm:left-40 xl:left-60 2xl:left-96"
          : "right-16 sm:right-40 xl:right-60 2xl:right-96"
      )}
      {...props}
    >
      <ArrowRightIcon
        className={twMerge(
          "h-3 w-3 sm:h-6 sm:w-6 [&>path]:stroke-night-100 [&>path]:stroke-[2]",
          dir === "left" && "rotate-180"
        )}
      />
    </button>
  );
};
