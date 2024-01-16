import { useState } from "react";
import { Link } from "@remix-run/react";

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
];

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
      <div className="relative z-10 mb-20 flex cursor-pointer gap-12">
        {games.map((game) => (
          <div
            className="h-[600px] w-[416px] min-w-[416px] overflow-hidden rounded-2xl border border-night-100/40"
            key={game.name}
          >
            <img
              src={game.cover}
              alt="Cover"
              className="h-full w-full object-cover object-center"
            />
          </div>
        ))}
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
