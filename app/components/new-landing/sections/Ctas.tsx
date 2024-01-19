import React from "react";
import { CtasCutOff } from "../misc/Svgs";
import Button from "../Button";
import {
  ExternalIcon,
  TwitchIcon,
  DiscordIcon,
  TwitterIcon,
  YoutubeIcon,
} from "../misc/Icons";
import { SOCIAL } from "../misc/const";

const Ctas = () => {
  return (
    <div className="relative bg-new-ruby-900  py-20">
      <CtasCutOff className="absolute top-[1px] left-0 hidden w-[144px] -translate-y-[100%] 2xl:block" />
      <div className=" container grid grid-cols-1 grid-rows-[auto_1px_auto] gap-y-16 gap-x-16 sm:grid-cols-[1fr_1px_1fr]  2xl:grid-cols-[1fr_1px_1fr_1px_1fr_1px_1fr] 2xl:gap-y-0">
        <div className="h-60 space-y-6 ">
          <h1 className="text-3xl font-bold text-new-night-100">
            For Studios and Developers
          </h1>
          <p className="">
            Apply to join our curated portfolio of indie games and pioneer a new
            era of gaming with Treasure.
          </p>
          <Button color="outline" className="w-max">
            Learn More
          </Button>
        </div>
        <div className="bg-new-night-100 " />
        <div className="relative h-60 space-y-6">
          <h1 className="text-3xl font-bold text-new-night-100">
            For Content Creators
          </h1>
          <p className="">
            Passionate about creating content and Treasure games? Join our
            leading creator program.
          </p>
          <div className="absolute bottom-0 left-0 flex gap-4">
            <Button color="outline" className="w-max">
              Apply Now
            </Button>
            <Button color="outline" className="w-max">
              Learn More
            </Button>
          </div>
        </div>
        <div className="h-[1px] w-full bg-new-night-100 sm:col-span-3  sm:h-auto  2xl:col-span-1 2xl:w-auto" />
        <div className="relative h-60">
          <h1 className="text-3xl font-bold text-new-night-100">
            Get the latest Treasure news
          </h1>

          <div className="absolute bottom-0 left-0">
            <Button color="outline" className="w-max">
              Subscribe
              <ExternalIcon className="w-4 " />
            </Button>
          </div>
        </div>
        <div className="h-[1px] w-full bg-new-night-100 sm:h-auto sm:w-auto" />
        <div className="relative h-60">
          <h1 className="text-3xl font-bold text-new-night-100">
            Join an unmatched community
          </h1>

          <div className="absolute bottom-0 left-0 flex gap-4">
            <a
              href={SOCIAL.DISCORD}
              target="_blank"
              rel="noreferrer"
              className="text-new-night-100"
            >
              <DiscordIcon className="w-10" />
            </a>
            <a
              href={SOCIAL.TWITTER}
              target="_blank"
              rel="noreferrer"
              className="text-new-night-100"
            >
              <TwitterIcon className="w-10" />
            </a>
            <a
              href={SOCIAL.YOUTUBE}
              target="_blank"
              rel="noreferrer"
              className="text-new-night-100"
            >
              <YoutubeIcon className="w-10" />
            </a>
            <a
              href={SOCIAL.TWITCH}
              target="_blank"
              rel="noreferrer"
              className="text-new-night-100"
            >
              <TwitchIcon className="w-10" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ctas;
