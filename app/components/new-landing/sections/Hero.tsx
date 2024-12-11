import React from "react";

import SPLASHART_IMAGE from "~/../public/img/new-landing/Treasure_new_splash_final_extended_canvas_LR.webp";
import Button from "../Button";
import { LandingCutOff } from "../misc/Svgs";
import { LINKS } from "../misc/const";

const Hero = () => {
  return (
    <div className="relative h-screen max-h-[1024px] w-screen">
      <div className="container relative z-30 flex h-full flex-col justify-between pb-12 pt-32 sm:pb-20 sm:pt-48">
        <h1 className="max-w-[240px] text-5xl font-bold leading-[105%] text-new-night-100 sm:max-w-lg sm:text-8xl">
          The magic of play.
        </h1>

        <div className="max-w-md space-y-6">
          <p className="text-xl leading-[120%] sm:text-[28px]">
            Treasure is the decentralized game console.
          </p>
          <div className="flex gap-4">
            <Button as="a" color="ruby" href={LINKS.APP}>
              Launch App
            </Button>
          </div>
        </div>
      </div>
      <LandingCutOff className="absolute right-0 -bottom-[1px] z-20 w-[80px] text-new-light-background sm:w-[128px]" />
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
