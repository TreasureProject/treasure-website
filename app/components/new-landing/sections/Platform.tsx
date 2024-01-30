import Button from "../Button";
import { AppleIcon, PlatformGrid, WindowsIcon } from "../misc/Svgs";

import UI_IMAGE from "~/../public/img/new-landing/platform/UI.webp";
import BADGE_IMAGE from "~/../public/img/new-landing/platform/Quest_Tile_Badge.webp";
import GEM_IMAGE from "~/../public/img/new-landing/platform/gem.webp";
import { LINKS } from "../misc/const";

const Platform = () => {
  return (
    <div
      className=" relative overflow-hidden border-b border-new-ruby-900 py-12 sm:py-20"
      style={{
        background: "linear-gradient(149deg, #0D1420 49.11%, #DC2626 165.09%)",
      }}
    >
      <div className="absolute top-0 left-0 h-24 w-full bg-gradient-to-t from-transparent to-new-night-1300" />
      <PlatformGrid className="absolute left-1/2 -bottom-4 h-[960px] -translate-x-1/2 xl:bottom-auto xl:top-0" />
      <div className="container relative z-10 flex flex-col gap-10  sm:gap-16 xl:flex-row xl:items-center xl:gap-40">
        <div className=" space-y-7">
          <h1 className="text-3xl font-black leading-[105%] sm:text-5xl">
            Discover the magic
          </h1>
          <p className="max-w-md leading-[150%] text-night-400">
            Play, compete, and unlock rewards all on the app – the destination
            for Treasure games.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Button color="ruby" className="w-max" href={LINKS.APP}>
              Start Playing
            </Button>
            {/* <Button color="honey" className="w-max">
              Download Launcher{" "}
              <div className="flex ">
                <WindowsIcon className="w-5" />
                <AppleIcon className="w-5" />
              </div>
            </Button> */}
          </div>
        </div>
        <div className="relative z-10 h-[342px] w-[600px] sm:h-auto sm:w-full">
          <img
            src={BADGE_IMAGE}
            alt="Gem"
            className="absolute top-1/4 right-[10%] z-10 hidden w-[60%] translate-x-1/2 sm:block md:w-[40%] xl:right-20"
          />
          <img
            src={GEM_IMAGE}
            alt="Gem"
            className="absolute top-1/2 left-[4%] z-10 hidden w-[25%] -translate-x-1/2 sm:block md:w-[20%] xl:left-0"
          />
          <img
            src={UI_IMAGE}
            alt="Platform UI"
            className="absolute  h-[342px] rounded-lg border-2 border-white/40 sm:relative sm:h-auto sm:w-full sm:rounded-xl lg:rounded-2xl xl:w-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default Platform;
