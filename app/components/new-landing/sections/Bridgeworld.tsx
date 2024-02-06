import { useRef, useState } from "react";

import BACKGROUND_IMAGE from "~/../public/img/new-landing/bridgeworld/BW_WorldMap_shrouded_blurred_with_mask.webp";
import ISLAND_IMAGE from "~/../public/img/new-landing/bridgeworld/Bridgeworld_Meem_Portal_Island.webp";
import ROCK_1_IMAGE from "~/../public/img/new-landing/bridgeworld/Floating_Rock_1.webp";
import ROCK_2_IMAGE from "~/../public/img/new-landing/bridgeworld/Floating_Rock_2.webp";
import ROCK_3_IMAGE from "~/../public/img/new-landing/bridgeworld/Floating_Rock_3.webp";
import ROCK_4_IMAGE from "~/../public/img/new-landing/bridgeworld/Floating_Rock_4.webp";
import ROCK_5_IMAGE from "~/../public/img/new-landing/bridgeworld/Floating_Rock_5.webp";
import MAGIC_IMAGE from "~/../public/img/new-landing/bridgeworld/Magic_Illustration.webp";
import Button from "../Button";
import { MagicLogo } from "../misc/Svgs";
import { ChevronRightIcon } from "../misc/Icons";
import { useMotionValueEvent, useScroll } from "framer-motion";
import { useAppContext } from "~/context/App";
import { LINKS } from "../misc/const";

const Bridgeworld = () => {
  const containerRef = useRef(null);
  const [scrollPercent, setScrollPercent] = useState<number>(0);
  const { scrollY } = useScroll({
    target: containerRef,
    offset: ["end end", "end end"],
  });
  useMotionValueEvent(scrollY, "change", (latest: number) => {
    setScrollPercent(convertRange(latest, 3000, 4000));
  });

  const convertRange = (value: number, min: number, max: number) => {
    if (value < min) return 0;
    if (value > max) return 100;
    return (100 * (value - min)) / (max - min);
  };

  const { openModal } = useAppContext();

  return (
    <div
      ref={containerRef}
      className="relative h-[1400px] w-screen py-12 px-7 md:h-[1580px] md:py-20 md:px-14 xl:h-[1140px] xl:px-20 xl:py-0 xl:pt-48"
    >
      <div className="absolute inset-0 z-10 block bg-gradient-landing-bridgeworld bg-blend-multiply md:hidden" />
      <div className="container relative h-full">
        <div className="absolute top-1/2 left-[35%] z-[90] aspect-square min-w-[680px] max-w-[880px] -translate-x-1/2 -translate-y-1/2 sm:top-[55%] sm:left-[45%] sm:min-w-[800px] md:top-1/2 md:w-full lg:top-[55%] lg:max-w-[960px] xl:top-1/2 xl:left-0 xl:w-[72%]  xl:-translate-x-1/4">
          <div className="translate-y-[72px] xl:-translate-y-0">
            <div
              className="t relative h-max 2xl:min-w-[1100px]"
              style={{
                transform: `translateY(-${scrollPercent * 0.2}%)`,
              }}
            >
              <img
                src={ROCK_1_IMAGE}
                alt="Rock 1"
                className="absolute inset-0 z-[6]"
                style={{
                  transform: `translateY(${
                    convertRange(scrollPercent, 0, 20) * 0.01
                  }%)`,
                }}
              />
              <img
                src={ROCK_2_IMAGE}
                alt="Rock 2"
                className="absolute inset-0 z-[5]"
                style={{
                  transform: `translateY(${
                    convertRange(scrollPercent, 10, 30) * 0.05
                  }%)`,
                }}
              />
              <img
                src={ROCK_3_IMAGE}
                alt="Rock 3"
                className="absolute inset-0 z-[4]"
                style={{
                  transform: `translateY(${
                    convertRange(-scrollPercent, 10, 80) * 0.1
                  }%)`,
                }}
              />
              <img
                src={ROCK_4_IMAGE}
                alt="Rock 4"
                className="absolute inset-0 z-[3]"
                style={{
                  transform: `translateY(${
                    convertRange(scrollPercent, 10, 30) * 0.1
                  }%)`,
                }}
              />
              <img
                src={ROCK_5_IMAGE}
                alt="Rock 5"
                className="absolute inset-0 z-[2]"
                style={{
                  transform: `translateY(${
                    convertRange(scrollPercent, 10, 20) * 0.07
                  }%)`,
                }}
              />
              <img src={ISLAND_IMAGE} alt="BG" className="relative z-[1]" />
            </div>
          </div>
        </div>
        <div className="right-0 top-1/2 z-10 space-y-20 pr-20 xl:absolute xl:max-w-lg xl:-translate-y-1/2 xl:pb-48">
          <div className="absolute left-0 top-0 z-10 max-w-[560px] space-y-7 xl:relative">
            <div>
              <h1 className="text-lg font-bold leading-[105%] text-new-night-100 md:text-2xl">
                Welcome to
              </h1>
              <h1 className="text-3xl font-bold leading-[105%] text-new-night-100 md:text-5xl">
                Bridgeworld
              </h1>
            </div>
            <p className="font-medium leading-[150%]">
              Bridgeworld is the center of the Treasure multiverse connecting
              all our ecosystem’s our loved IP and game communities together
              through stories and gameplay.
            </p>
            <Button className="w-max" color="ruby" href={LINKS.BRIDGEWORLD}>
              Explore Bridgeworld
            </Button>
          </div>
          <div className="p absolute bottom-0 left-0 z-10 w-full max-w-[560px] space-y-6 xl:relative">
            <div className="flex items-center gap-7">
              <img src={MAGIC_IMAGE} alt="Magic" className="w-24 md:w-40" />
              <div className="border-l border-new-night-100 pl-7">
                <p className="leading-[150%]">Powered By</p>
                <MagicLogo className="w-44" />
              </div>
            </div>
            <p className="font-medium leading-[150%]">
              Flowing through all of Treasure is a little bit of $MAGIC – a
              token that powers the ecosystem and connects our network of games
              and players together.
            </p>
            <div className="flex gap-6">
              <button onClick={openModal}>
                <Button className="w-max" color="ruby">
                  Get $MAGIC
                </Button>
              </button>
              <Button
                className="w-max"
                color="float"
                href={LINKS.WHAT_IS_MAGIC}
              >
                Learn More
                <ChevronRightIcon className="w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
      <img
        src={BACKGROUND_IMAGE}
        alt="Background"
        className="absolute inset-0 h-full w-full object-cover object-center"
      />
    </div>
  );
};

export default Bridgeworld;
