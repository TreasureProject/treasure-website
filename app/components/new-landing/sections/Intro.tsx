import { Link } from "@remix-run/react";
import PLACEHOLDER_IMAGE from "~/../public/img/new-landing/PLR_enSG_1920x1080_SOCIAL_MAHmovieposter3.webp";
import VIDEO from "~/../public/img/new-landing/trailer.mp4";

import { ChevronRightIcon } from "../misc/Icons";
import { VideoCutOff } from "../misc/Svgs";
import Button from "../Button";
import { LINKS } from "../misc/const";

const Intro = () => {
  return (
    <div className="w-full bg-new-light-background">
      <div className="container flex flex-col justify-between gap-10 py-12 sm:py-14 md:flex-row md:gap-16 md:py-20 xl:items-center">
        <div className="items-between flex-h-full flex max-w-lg grow flex-col gap-4 sm:gap-6 md:gap-16 ">
          <h1 className="max-w-[300px]  text-3xl font-bold leading-[107%] text-ruby-900 sm:max-w-none  sm:text-[60px]">
            Pioneering a new era of gaming
          </h1>
          <p className="font-semibold uppercase leading-[150%] text-ruby-900">
            Powered by $MAGIC
          </p>
        </div>
        <div className="max-w-md space-y-7 md:space-y-12">
          <p className="leading-[150%] text-new-night-700">
            We’re shaping a future where developers, creators, and players can
            build new experiences together. Where you can truly own your assets.
            And share in the collective growth of our ecosystem.
            <br />
            <br /> All made possible by the blockchain.
          </p>
        </div>
      </div>
      <div className="relative block flex-1 overflow-hidden xl:hidden xl:rounded-tl-3xl">
        <VideoCutOff className="absolute -right-[1px] -top-[1px] z-20 hidden w-[80px] sm:w-[128px] xl:block" />
        <video
          autoPlay
          muted
          playsInline
          src={VIDEO}
          loop
          className="aspect-video w-full"
        />
      </div>
      <div className="container flex flex-col items-center gap-10 py-12 sm:py-14 md:gap-32 xl:flex-row  xl:py-0 ">
        <div className="relative hidden flex-1 overflow-hidden xl:block xl:rounded-tl-3xl">
          <VideoCutOff className="absolute -right-[1px] -top-[1px] z-20 hidden w-[80px] text-new-light-background sm:w-[128px] xl:block" />
          <video
            autoPlay
            muted
            src={VIDEO}
            loop
            className="aspect-video w-full min-w-[560px]"
          />
        </div>
        <div className=" w-full items-center gap-7  space-y-7 xl:max-w-md ">
          <h1 className="max-w-sm  text-3xl font-bold leading-[107%] text-ruby-900 sm:text-5xl">
            We level up game builders
          </h1>
          <p className="leading-[150%] text-new-night-700">
            We empower games to reach their full potential. Our community-driven
            ethos, publishing stack, and novel approach to game building gives
            developers everything they need to be successful.
          </p>
          <Button color="ruby" className="w-max" to="/build">
            Build with Treasure
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Intro;
