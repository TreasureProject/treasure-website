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
import { LINKS, SOCIAL } from "../misc/const";

const Ctas = () => {
  return (
    <div className="relative bg-new-ruby-900 py-8 2xl:py-20">
      <CtasCutOff className="absolute top-[1px] left-0 hidden w-[144px] -translate-y-[100%] 2xl:block" />
      <div className="container grid grid-cols-1 grid-rows-[auto_1px] gap-y-10 gap-x-16 md:grid-cols-[1fr_1px_1fr] 2xl:grid-cols-[1fr_1px_1fr_1px_1fr_1px_1fr] 2xl:gap-y-0">
        <div className="space-y-4 md:h-60 2xl:space-y-6">
          <h1 className="text-xl font-bold text-new-night-100 lg:text-3xl">
            For Studios <br className="hidden xl:block" /> and Developers
          </h1>
          <p className="pb-4 md:pb-0">
            Apply to join our curated portfolio of indie games and pioneer a new
            era of gaming with Treasure.
          </p>
          <Button color="outline" className="w-max" to="/build">
            Learn More
          </Button>
        </div>
        <div className="bg-new-night-100/40" />
        <div className="relative space-y-4 md:h-60 2xl:space-y-6">
          <h1 className="text-xl font-bold text-new-night-100 lg:text-3xl">
            For Content Creators
          </h1>
          <p className="">
            Passionate about creating content and playing Treasure games? Join
            our leading creator program.
          </p>
          <div className="bottom-0 left-0 flex gap-4 pt-4 md:absolute md:pt-0">
            <Button color="outline" className="w-max" href={LINKS.CREATORS}>
              Apply Now
            </Button>
            <Button color="outline" className="w-max" to="/create">
              Learn More
            </Button>
          </div>
        </div>
        <div className="h-[1px] w-full bg-new-night-100/40 md:col-span-3  md:h-auto  2xl:col-span-1 2xl:w-auto" />
        <div className="relative space-y-6 md:h-60">
          <h1 className="max-w-[300px] text-xl font-bold text-new-night-100 md:max-w-none lg:text-3xl">
            Get the latest Treasure news
          </h1>

          <div className="bottom-0 left-0 md:absolute">
            <Button color="outline" className="w-max" href={LINKS.SUBSTACK}>
              Subscribe
              <ExternalIcon className="w-4 " />
            </Button>
          </div>
        </div>
        <div className="h-[1px] w-full bg-new-night-100/40 md:h-auto md:w-auto" />
        <div className="relative space-y-6 md:h-60">
          <h1 className="text-xl font-bold text-new-night-100 lg:text-3xl">
            Join an unmatched community
          </h1>

          <div className="bottom-0 left-0 flex gap-4 md:absolute">
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
