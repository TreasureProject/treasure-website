import { Link } from "@remix-run/react";
import { useEffect, useRef, useState } from "react";
import { Keyboard } from "swiper/modules";
import type { SwiperClass } from "swiper/react";
import { Swiper, SwiperSlide } from "swiper/react";

import BEACON_BACKGROUND from "public/img/new-landing/game-backgrounds/The_Beacon_Game_Background.webp";
import BEACON_COVER from "public/img/new-landing/game-covers/The_Beacon_Game_Cover.webp";

import SMOLBOUND_CARDS_BACKGROUND from "public/img/new-landing/game-backgrounds/The_Smolbound_Game_Background.webp";
import SMOLBOUND_CARDS_COVER from "public/img/new-landing/game-covers/The_Smolbound_Game_Cover.webp";

import KOTE_BACKGROUND from "public/img/new-landing/game-backgrounds/The_KOTE_Game_Background.webp";
import KOTE_COVER from "public/img/new-landing/game-covers/The_KOTE_Game_Cover.webp";

import ZEEVERSE_BACKGROUND from "public/img/new-landing/game-backgrounds/The_Zeeverse_Game_Background.webp";
import ZEEVERSE_COVER from "public/img/new-landing/game-covers/The_Zeeverse_Game_Cover.webp";

import BITMATES_BACKGROUND from "public/img/new-landing/game-backgrounds/The_Bitmates_Game_Background.webp";
import BITMATES_COVER from "public/img/new-landing/game-covers/The_Bitmates_Game_Cover.webp";

import REALM_BACKGROUND from "public/img/new-landing/game-backgrounds/The_Realm_Game_Background.webp";
import REALM_COVER from "public/img/new-landing/game-covers/The_Realm_Game_Cover.webp";

import SYNERGY_LAND_BACKGROUND from "public/img/new-landing/game-backgrounds/Synergy_Land_Game_Background.webp";
import SYNERGY_LAND_COVER from "public/img/new-landing/game-covers/Synergy_Land_Cover.webp";

import { AnimatePresence, motion } from "framer-motion";
import { twMerge } from "tailwind-merge";
import { ChevronRightIcon } from "../misc/Icons";
import { GamesGrid } from "../misc/Svgs";
import { LINKS } from "../misc/const";

const games = [
  {
    name: "Beacon",
    cover: BEACON_COVER,
    background: BEACON_BACKGROUND,
    link: "https://app.treasure.lol/games/the-beacon",
  },
  {
    name: "Smolbound",
    cover: SMOLBOUND_CARDS_COVER,
    background: SMOLBOUND_CARDS_BACKGROUND,
    link: "https://app.treasure.lol/games/smolverse",
  },
  {
    name: "Synergy Land",
    cover: SYNERGY_LAND_COVER,
    background: SYNERGY_LAND_BACKGROUND,
    link: "https://app.treasure.lol/games/synergy-land",
  },
  {
    name: "Bitmates",
    cover: BITMATES_COVER,
    background: BITMATES_BACKGROUND,
    link: "https://app.treasure.lol/games/bitmates",
  },
  {
    name: "Realm",
    cover: REALM_COVER,
    background: REALM_BACKGROUND,
    link: "https://app.treasure.lol/games/realm",
  },
  {
    name: "Zeeverse",
    cover: ZEEVERSE_COVER,
    background: ZEEVERSE_BACKGROUND,
    link: "https://app.treasure.lol/games/zeeverse",
  },

  {
    name: "KOTE",
    cover: KOTE_COVER,
    background: KOTE_BACKGROUND,
    link: "https://app.treasure.lol/games/kote",
  },
] as const;

const gameByIndex = (index: number) => games[index % games.length];
const scaleStep = 0.15;

function getSlideScale(progress: number) {
  return 1 - Math.abs(progress) * scaleStep;
}

function getTranslateOffsetStep(progress: number): number {
  if (progress < 1) {
    return 0;
  }
  return 1 - getSlideScale(progress) + getTranslateOffsetStep(progress - 1);
}

function getTranslateOffset(progress: number) {
  if (progress < 1) {
    return 0;
  }
  return (
    (1 - getSlideScale(progress)) * 0.5 + getTranslateOffsetStep(progress - 1)
  );
}

const Games = () => {
  const [activeGame, setActiveGame] = useState<number>(0);

  const swiperRef = useRef<SwiperClass | null>(null);

  useEffect(() => {
    if (!swiperRef.current) return;

    setActiveGame(swiperRef.current.activeIndex);
  }, []);

  return (
    <div className="relative w-full pt-32 pb-10">
      {/* Background image */}
      <AnimatePresence>
        <motion.img
          src={games[activeGame]?.background}
          key={games[activeGame]?.name}
          alt="Background"
          className="absolute inset-0 h-full w-full object-cover object-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        />
      </AnimatePresence>

      {/* Carousel container */}
      <div className="relative z-50">
        <Swiper
          modules={[Keyboard]}
          keyboard={{
            enabled: true,
          }}
          grabCursor={true}
          centeredSlides={true}
          loop={true}
          watchSlidesProgress={true}
          spaceBetween={10}
          onSlideChange={(swiper: SwiperClass) => {
            setActiveGame(swiper.realIndex);
          }}
          slidesPerView="auto"
          onSwiper={(swiper: SwiperClass) => {
            swiperRef.current = swiper;
          }}
          onProgress={(swiper: SwiperClass) => {
            const zIndexMax = swiper.slides.length;
            for (let i = 0; i < swiper.slides.length; i++) {
              const slideEl = swiper.slides[i];
              if (!slideEl) {
                continue;
              }

              // eslint-disable-next-line @typescript-eslint/ban-ts-comment
              // @ts-ignore
              const slideProgress = swiper.slides[i].progress;
              const absProgress = Math.abs(slideProgress);
              const progressSign =
                absProgress === 0 ? 0 : Math.sign(slideProgress);
              const translate = `${
                progressSign * getTranslateOffset(absProgress) * 100
              }%`;

              const scale = getSlideScale(slideProgress);
              const zIndex = zIndexMax - Math.abs(Math.round(slideProgress));

              slideEl.style.transform = `translateX(${translate}) scale(${scale})`;
              slideEl.style.zIndex = String(zIndex);
              if (absProgress > 3) {
                slideEl.style.opacity = "0";
              } else {
                slideEl.style.opacity = "1";
              }
            }
          }}
        >
          {games.map((game, i) => {
            return (
              <SwiperSlide key={game.name}>
                <a
                  href={game.link}
                  target="_blank"
                  rel="noreferrer"
                  className={twMerge(
                    "overflow-hidden rounded-2xl border-2 border-silver-800",
                    activeGame === i && "border-silver-400",
                  )}
                >
                  <img
                    className="h-full w-full object-cover object-center"
                    alt={gameByIndex(i)?.name}
                    src={gameByIndex(i)?.cover}
                  />
                </a>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-night-900 to-transaprent" />
      <GamesGrid className="absolute inset-0 z-[5] min-h-[600px] opacity-25" />
      {/* View All Games link */}
      <Link
        to={LINKS.GAMES}
        target="_blank"
        className="relative z-10 mt-8 flex w-full items-center justify-center gap-1.5 font-semibold leading-[160%] transition-opacity hover:opacity-75"
      >
        View All Games <ChevronRightIcon className="w-4" />
      </Link>
    </div>
  );
};

export default Games;
