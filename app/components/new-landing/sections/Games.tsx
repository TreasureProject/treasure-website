import { useState } from "react";
import { Link } from "@remix-run/react";
import type { SwiperClass } from "swiper/react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Keyboard } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

import BEACON_COVER from "~/../public/img/new-landing/game-covers/The_Beacon_Game_Cover.png";
import BEACON_BACKGROUND from "~/../public/img/new-landing/game-backgrounds/The_Beacon_Game_Background.png";

import KAIJU_CARDS_COVER from "~/../public/img/new-landing/game-covers/The_Kaiju_Cards_Game_Cover.png";
import KAIJU_CARDS_BACKGROUND from "~/../public/img/new-landing/game-backgrounds/The_Kaiju_Cards_Game_Background.png";

import KOTE_COVER from "~/../public/img/new-landing/game-covers/The_KOTE_Game_Cover.png";
import KOTE_BACKGROUND from "~/../public/img/new-landing/game-backgrounds/The_KOTE_Game_Background.png";

import KURORO_BEAST_COVER from "~/../public/img/new-landing/game-covers/The_Kuroro_Game_Cover_2.png";
import KURORO_BEAST_BACKGROUND from "~/../public/img/new-landing/game-backgrounds/The_Kuroro_Game_Background.png";

import MAH_COVER from "~/../public/img/new-landing/game-covers/The_MAH_Game_Cover.png";
import MAH_BACKGROUND from "~/../public/img/new-landing/game-backgrounds/The_MAH_Game_Background.png";

import ZEEVERSE_COVER from "~/../public/img/new-landing/game-covers/The_Zeeverse_Game_Cover.png";
import ZEEVERSE_BACKGROUND from "~/../public/img/new-landing/game-backgrounds/The_Zeeverse_Game_Background.png";

import BITMATES_COVER from "~/../public/img/new-landing/game-covers/The_Bitmates_Game_Cover.png";
import BITMATES_BACKGROUND from "~/../public/img/new-landing/game-backgrounds/The_Bitmates_Game_Background.png";

import REALM_COVER from "~/../public/img/new-landing/game-covers/The_Realm_Game_Cover.png";
import REALM_BACKGROUND from "~/../public/img/new-landing/game-backgrounds/The_Realm_Game_Background.png";

import TOE_COVER from "~/../public/img/new-landing/game-covers/The_Toe_Game_Cover.png";
import TOE_BACKGROUND from "~/../public/img/new-landing/game-backgrounds/The_ToE_Game_Background.png";

import { twMerge } from "tailwind-merge";
import { ChevronRightIcon } from "../misc/Icons";

const games = [
  {
    name: "Beacon",
    cover: BEACON_COVER,
    background: BEACON_BACKGROUND,
  },
  {
    name: "Kaiju Cards",
    cover: KAIJU_CARDS_COVER,
    background: KAIJU_CARDS_BACKGROUND,
  },
  {
    name: "KOTE",
    cover: KOTE_COVER,
    background: KOTE_BACKGROUND,
  },
  {
    name: "Kuroro Beast",
    cover: KURORO_BEAST_COVER,
    background: KURORO_BEAST_BACKGROUND,
  },
  {
    name: "MAH",
    cover: MAH_COVER,
    background: MAH_BACKGROUND,
  },
  {
    name: "Zeeverse",
    cover: ZEEVERSE_COVER,
    background: ZEEVERSE_BACKGROUND,
  },
  {
    name: "Bitmates",
    cover: BITMATES_COVER,
    background: BITMATES_BACKGROUND,
  },
  {
    name: "Realm",
    cover: REALM_COVER,
    background: REALM_BACKGROUND,
  },
  {
    name: "TOE",
    cover: TOE_COVER,
    background: TOE_BACKGROUND,
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

  return (
    <div className="relative w-full pt-32 pb-10">
      {/* Background image */}
      <img
        src={games[activeGame].background}
        alt="Background"
        className="absolute inset-0 h-full w-full object-cover object-center"
      />

      {/* Carousel container */}
      <div className="relative z-50  bg-blue-50/10">
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
          slidesPerView="auto"
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
          {Array.from({ length: 40 }).map((_, i) => {
            return (
              <SwiperSlide key={i}>
                <a
                  className="aspect-square w-5 rounded-2xl border-2 border-new-night-100/10 bg-red-50 p-4"
                  href="/"
                  target="_blank"
                  rel="noreferrer"
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

      {/* Navigation dots */}
      <div className="container relative z-10  flex w-full items-center justify-center gap-2">
        {games.map((game, index) => (
          <button
            key={game.name}
            className={twMerge(
              "h-1 w-8 rounded-full bg-night-800",
              index === activeGame && "bg-new-night-100"
            )}
            onClick={() => setActiveGame(index)}
          />
        ))}
      </div>

      {/* View All Games link */}
      <Link
        to="/games"
        className="relative z-10 mt-8 flex w-full items-center justify-center gap-1.5 font-semibold leading-[160%]"
      >
        View All Games <ChevronRightIcon className="w-4" />
      </Link>
    </div>
  );
};

export default Games;
