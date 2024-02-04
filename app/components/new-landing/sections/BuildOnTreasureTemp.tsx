import React from "react";
import Button from "../Button";
import { CirclesGraphic } from "../misc/Svgs";

const Chain = () => {
  return (
    <div className="relative overflow-hidden bg-new-honey-200 py-12 md:py-14 xl:py-20">
      <div className="container relative z-10 flex flex-col gap-7 md:items-center">
        <div className="flex flex-col gap-4 md:items-center">
          <h1 className="text-4xl font-black leading-[105%] text-new-ruby-900 sm:text-5xl">
            Build on Treasure
          </h1>
        </div>
        <p className="max-w-2xl leading-[150%] text-new-night-700 md:text-center">
          We equip our game developers with the tools they need to be
          successful. Everything from publishing tools, bottom-up distribution
          through a passionate community, and shoulder-to-shoulder game advisory
          and support.
        </p>
        <Button color="ruby" className="w-max" to="/build">
          Learn More
        </Button>
      </div>
      <CirclesGraphic className="absolute top-1/2 w-[1540px] -translate-x-1/2 -translate-y-1/2 md:left-1/2" />
    </div>
  );
};

export default Chain;
