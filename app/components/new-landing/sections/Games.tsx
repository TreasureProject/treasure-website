import { useEffect, useRef, useState } from "react";
import { Link } from "@remix-run/react";
import type { SwiperClass } from "swiper/react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Keyboard } from "swiper/modules";

import BEACON_COVER from "~/../public/img/new-landing/game-covers/The_Beacon_Game_Cover.webp";
import BEACON_BACKGROUND from "~/../public/img/new-landing/game-backgrounds/The_Beacon_Game_Background.webp";

import SMOL_CARDS_COVER from "~/../public/img/new-landing/game-covers/The_Smolbound_Game_cover.webp";
import SMOL_CARDS_BACKGROUND from "~/../public/img/new-landing/game-backgrounds/The_Smolbound_Game_Background.webp";

import KOTE_COVER from "~/../public/img/new-landing/game-covers/The_KOTE_Game_cover.webp";
import KOTE_BACKGROUND from "~/../public/img/new-landing/game-backgrounds/The_KOTE_Game_Background.webp";

import KURORO_BEAST_COVER from "~/../public/img/new-landing/game-covers/The_Kuroro_Game_Cover_2.webp";
import KURORO_BEAST_BACKGROUND from "~/../public/img/new-landing/game-backgrounds/The_Kuroro_Game_Background.webp";

import MAH_COVER from "~/../public/img/new-landing/game-covers/The_MAH_Game_Cover.webp";
import MAH_BACKGROUND from "~/../public/img/new-landing/game-backgrounds/The_MAH_Game_Background.webp";

import ZEEVERSE_COVER from "~/../public/img/new-landing/game-covers/The_Zeeverse_Game_Cover.webp";
import ZEEVERSE_BACKGROUND from "~/../public/img/new-landing/game-backgrounds/The_Zeeverse_Game_Background.webp";

import BITMATES_COVER from "~/../public/img/new-landing/game-covers/The_Bitmates_Game_Cover.webp";
import BITMATES_BACKGROUND from "~/../public/img/new-landing/game-backgrounds/The_Bitmates_Game_Background.webp";

import REALM_COVER from "~/../public/img/new-landing/game-covers/The_Realm_Game_Cover.webp";
import REALM_BACKGROUND from "~/../public/img/new-landing/game-backgrounds/The_Realm_Game_Background.webp";

import TOE_COVER from "~/../public/img/new-landing/game-covers/The_Toe_Game_Cover.webp";
import TOE_BACKGROUND from "~/../public/img/new-landing/game-backgrounds/The_ToE_Game_Background.webp";

import { twMerge } from "tailwind-merge";
import { ChevronRightIcon } from "../misc/Icons";
import { GamesGrid } from "../misc/Svgs";
import { LINKS } from "../misc/const";
import { AnimatePresence, motion } from "framer-motion";

const games = [
  {
    name: "Beacon",
    cover: BEACON_COVER,
    background: BEACON_BACKGROUND,
    link: "https://app.treasure.lol/games/the-beacon",
  },
  {
    name: "Smol Bound",
    cover: SMOL_CARDS_COVER,
    background: SMOL_CARDS_BACKGROUND,
    link: "https://app.treasure.lol/games/smolverse",
  },
  {
    name: "Kuroro Beast",
    cover: KURORO_BEAST_COVER,
    background: KURORO_BEAST_BACKGROUND,
    link: "https://app.treasure.lol/games/kuroro-beasts",
  },
  {
    name: "MAH",
    cover: MAH_COVER,
    background: MAH_BACKGROUND,
    link: "https://app.treasure.lol/games/mighty-action-heroes",
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
    name: "TOE",
    cover: TOE_COVER,
    background: TOE_BACKGROUND,
    link: "https://app.treasure.lol/games/tales-of-elleria",
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
          src={games[activeGame].background}
          key={games[activeGame].name}
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
          onSwiper={(swiper: SwiperClass) => (swiperRef.current = swiper)}
          onProgress={(swiper: SwiperClass) => {
            const zIndexMax = swiper.slides.length;
            for (let i = 0; i < swiper.slides.length; i++) {
              const slideEl = swiper.slides[i];

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
                    "overflow-hidden rounded-2xl border-2 border-new-night-700",
                    activeGame === i && "border-new-night-500"
                  )}
                >
                  <img
                    className="h-full w-full object-cover object-center"
                    alt={gameByIndex(i).name}
                    src={gameByIndex(i).cover}
                  />
                </a>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
      <div className="to-transaprent absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-new-night-1300" />
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
