import VIDEO from "~/../public/img/new-landing/Treasure_Trailer_Website_02102024.mp4";

import { VideoCutOff } from "../misc/Svgs";
import Button from "../Button";
import { Link } from "@remix-run/react";

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
            {/* We’re creating a new paradigm where builders and players can create
            new experiences together. Where value is unlocked, flowing across
            the ecosystem. And where the future of interactive entertainment
            will live.
            <br />
            <br />  */}
            Treasure is a powerful EVM blockchain built for the next generation
            of gaming. Leading tech. A global, passionate community. Governed by
            the ecosystem.
            <br />
            <br />
            Treasure is powered by its ecosystem token{" "}
            <Link
              to="https://docs.treasure.lol/magic"
              className="text-black underline underline-offset-4"
            >
              MAGIC
            </Link>{" "}
            and is a member of the ZKsync Elastic Chain.
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
          className=" aspect-video w-full bg-red-50"
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
            playsInline
            className="aspect-video w-full min-w-[560px]"
          />
        </div>
        <div className=" flex w-full flex-col items-center space-y-7 xl:max-w-md xl:items-start">
          <h1 className="text-center text-3xl font-bold leading-[107%] text-ruby-900 sm:text-5xl xl:max-w-sm xl:text-left">
            We level up game makers
          </h1>
          <p className="max-w-lg text-center leading-[150%] text-new-night-700 xl:max-w-full xl:text-left">
            Our end-to-end tech stack and distribution flywheel gives game
            builders everything they need to win.
          </p>
          <Button color="ruby" className="w-max" to="/build">
            Build on Treasure
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Intro;
