import VIDEO from "@/img/new-landing/Treasure_Trailer_Website_02102024.mp4";

import Button from "../Button";
import { VideoCutOff } from "../misc/Svgs";

const Intro = () => {
  return (
    <div className="w-full bg-honey-100">
      <div className="container flex flex-col justify-between gap-10 py-12 sm:py-14 md:flex-row md:gap-16 md:py-20 xl:items-center">
        <div className="items-between flex max-w-lg flex-h-full grow flex-col gap-4 sm:gap-6 md:gap-16 ">
          <h1 className="max-w-[300px] font-bold text-3xl text-ruby leading-[107%] sm:max-w-none sm:text-[60px]">
            Pioneering a new era of gaming
          </h1>
          <p className="font-semibold text-ruby uppercase leading-[150%]">
            Powered by $MAGIC
          </p>
        </div>
        <div className="max-w-md space-y-7 md:space-y-12">
          <p className="text-silver-800 leading-[150%]">
            We're shaping a future where developers, creators, and players can
            build new experiences together. Where you can truly own your assets.
            And share in the collective growth of our ecosystem.
            <br />
            <br /> All made possible at Treasure.
          </p>
        </div>
      </div>
      <div className="relative block flex-1 overflow-hidden xl:hidden xl:rounded-tl-3xl">
        <VideoCutOff className="-right-[1px] -top-[1px] absolute z-20 hidden w-[80px] sm:w-[128px] xl:block" />
        <video
          autoPlay
          muted
          playsInline
          src={VIDEO}
          loop
          className=" aspect-video w-full bg-red-50"
        />
      </div>
      <div className="container flex flex-col items-center gap-10 py-12 sm:py-14 md:gap-32 xl:flex-row xl:py-0 ">
        <div className="relative hidden flex-1 overflow-hidden xl:block xl:rounded-tl-3xl">
          <VideoCutOff className="-right-[1px] -top-[1px] absolute z-20 hidden w-[80px] text-honey-100 sm:w-[128px] xl:block" />
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
          <h1 className="text-center font-bold text-3xl text-ruby leading-[107%] sm:text-5xl xl:max-w-sm xl:text-left">
            We level up game makers
          </h1>
          <p className="max-w-lg text-center text-silver-800 leading-[150%] xl:max-w-full xl:text-left">
            Our community, end-to-end tech stack, and novel approach to
            publishing gives independent game builders everything they need to
            be successful.
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
