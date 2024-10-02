import React from "react";

import SPLASHART_IMAGE from "~/../public/img/new-landing/Treasure_new_splash_final_extended_canvas_LR.webp";
import Button from "../Button";
import { LandingCutOff } from "../misc/Svgs";
import { LINKS } from "../misc/const";

const Hero = () => {
  return (
    <div className="relative h-screen max-h-[1024px] w-screen">
      <div className="container relative z-30 flex h-full flex-col justify-between pt-32 pb-12 sm:pt-48 sm:pb-20">
        <h1 className="max-w-[240px] font-bold text-5xl text-new-night-100 leading-[105%] sm:max-w-lg sm:text-8xl">
          The magic of play.
        </h1>

        <div className="max-w-md space-y-6">
          <p className="text-xl leading-[120%] sm:text-[28px]">
            Treasure is the decentralized game console.
          </p>
          <div className="flex gap-4">
            <Button as="a" color="ruby" href={LINKS.APP}>
              Start Playing
            </Button>
            <Button as="a" color="honey" href={LINKS.LITEPAPER}>
              Read Litepaper
            </Button>
          </div>
        </div>
      </div>
      <LandingCutOff className="-bottom-[1px] absolute right-0 z-20 w-[80px] text-new-light-background sm:w-[128px]" />
      <div className=" absolute inset-0 z-10 h-full w-full bg-gradient-landing-hero" />
      <img
        src={SPLASHART_IMAGE}
        alt="Hero Background"
        className="absolute inset-0 h-full w-full object-cover object-center"
      />
    </div>
  );
};

export default Hero;
