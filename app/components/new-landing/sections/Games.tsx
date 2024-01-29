import { useState } from "react";
import { Link } from "@remix-run/react";

import { motion, AnimatePresence } from "framer-motion";

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
import { GamesGrid } from "../misc/Svgs";

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

const Games = () => {
  const [activeGame, setActiveGame] = useState<number>(0);

  const handleCardClick = (index: number) => {
    if (activeGame === index) {
      // Open link for the active game (replace '#' with your actual link)
      window.location.href = "#";
    } else {
      // Move to the next card
      setActiveGame(index);
    }
  };

  const Card = ({
    game,
    index,
  }: {
    game: (typeof games)[number];
    index: number;
  }) => (
    <div
      className={`relative h-[520px] w-[360px] transform cursor-pointer rounded-2xl border-[2px] border-new-night-700 object-center transition-all duration-300 ease-in-out ${
        activeGame === index && "scale-[105%] border-new-night-400"
      }`}
      style={{
        backgroundPosition: "center",
        backgroundSize: "cover",
        background: `url(${game.cover})`,
      }}
      onClick={() => handleCardClick(index)}
    />
  );

  return (
    <div className="relative w-full pt-32 pb-16">
      <GamesGrid className="absolute inset-0 z-[2] opacity-20" />
      <div className="container relative h-[520px]">
        <div
          className="container absolute inset-0 z-20 flex w-full gap-6 transition-all"
          style={{
            left: `-${(100 / games.length) * 3.25 * activeGame}%`,
          }}
        >
          {games.map((game, index) => (
            <div key={index}>
              <Card game={game} index={index} />
            </div>
          ))}
        </div>
      </div>
      <div className="absolute inset-x-0 bottom-0 z-10 h-20 w-full bg-gradient-to-t from-new-night-1300 to-transparent"></div>
      <img
        src={games[activeGame].background}
        alt="Background"
        className="absolute inset-0 h-full w-full object-cover object-center"
      />
      <div className="space-y-12 pt-24">
        <div className="relative z-20 flex w-full items-center justify-center gap-2">
          {games.map((game, index) => (
            <div
              key={game.name}
              onClick={() => setActiveGame(index)}
              className={twMerge(
                "colors h-1 w-8 cursor-pointer rounded-full bg-new-night-400/25 transition",
                activeGame === index && "bg-new-night-400"
              )}
            />
          ))}
        </div>
        <div className="relative z-10 flex w-full items-center justify-center">
          <Link
            to="/games"
            className="flex items-center gap-1 font-bold text-new-night-100 transition-colors hover:text-new-night-400"
          >
            View All Games <ChevronRightIcon className="w-5" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Games;
