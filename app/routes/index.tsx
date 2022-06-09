import { ExternalLinkIcon } from "@heroicons/react/solid";
import type { LinksFunction } from "@remix-run/cloudflare";
import HeroImg from "../../public/img/hero.png";

import { DiscordIcon, TwitterIcon } from "~/components/Icons";

import { Badge } from "~/components/Badge";
import { CTAButton } from "~/components/Button";
import { TwitterCard } from "~/components/TwitterCard";
import { partnerCartridges, partners, tweets } from "~/const";
import { TreasureStats } from "~/components/TreasureStats";
import { TreasurePosts } from "~/components/TreasurePosts";
import { CoreCartridges } from "~/components/CoreCartridges";
import { PartnerCartridge } from "~/components/PartnerCartridge";
import { Guilds } from "~/components/Guilds";
import { Infrastructures } from "~/components/Infrastructures";

export default function Home() {
  return (
    <main>
      <div className="bg-honey-100 pt-10 sm:pt-16 lg:overflow-hidden lg:pt-8">
        <div className="mx-auto max-w-9xl lg:px-12">
          <div className="lg:grid lg:grid-cols-7 lg:gap-8">
            <div className="col-span-3 mx-auto max-w-lg px-4 sm:px-6 lg:flex lg:items-center lg:px-0 lg:text-left">
              <div className="lg:py-12 xl:py-24">
                <h1 className="mt-4 text-7xl font-bold tracking-tight text-ruby-900 sm:mt-5 lg:mt-6 xl:text-8xl">
                  The magic of play.
                </h1>
                <div className="mt-12 rounded-3xl border border-honey-200 bg-honey-50 px-12 py-11 lg:max-w-sm">
                  <p className="text-night-700">
                    Treasure is a decentralized video game console connecting
                    games and communities together through imagination,{" "}
                    <span className="font-bold">$MAGIC</span>, and NFTs
                  </p>
                </div>
              </div>
            </div>
            <div className="col-span-4 m-0 mt-12 lg:relative lg:-mb-12 xl:-mb-2">
              <div className="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 lg:px-0">
                <img
                  className="w-full object-contain lg:absolute lg:inset-y-0 lg:left-0 lg:h-full lg:max-w-none"
                  src={HeroImg}
                  alt="Hero"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <TreasureStats />
      <div className="relative bg-night-900 py-16 sm:py-24">
        <div className="mx-auto max-w-md px-4 text-center sm:max-w-3xl sm:px-6 lg:max-w-8xl lg:px-12">
          <div className="inline-block rounded-2xl bg-night-800 px-3 py-2">
            <h2 className="font-mono text-base font-medium text-night-200">
              Core Cartridges
            </h2>
          </div>
          <p className="mx-auto mt-12 max-w-xl text-3xl font-bold tracking-tight text-honey-200 sm:text-5xl">
            Games and worlds that delight the masses
          </p>
          <div className="mt-12">
            <CoreCartridges />
          </div>
          <div className="mt-14 inline-block rounded-2xl bg-night-800 px-3 py-2">
            <h2 className="font-mono text-base font-medium text-night-200">
              Partner Cartridges
            </h2>
          </div>
        </div>
        <div className="relative mt-12 px-6 before:absolute before:left-0 before:bottom-0 before:top-0 before:bg-gradient-to-r before:from-night-900 before:to-night-900/10 after:absolute after:right-0 after:bottom-0 after:top-0 after:bg-gradient-to-l after:from-night-900 after:to-night-900/10 sm:px-0 before:sm:w-6 after:sm:w-6">
          <div className="flex w-full snap-x snap-mandatory gap-6 overflow-x-auto pb-12">
            <div className="h-48 shrink-0"></div>
            {partnerCartridges.map((cartridge) => (
              <PartnerCartridge
                cartridge={cartridge}
                key={cartridge.name}
                className="h-48 snap-center sm:w-80"
              />
            ))}
            <div className="h-48 shrink-0"></div>
          </div>
        </div>
      </div>
      <div className="relative bg-honey-100 py-16 sm:py-24">
        <div className="mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:max-w-8xl lg:px-12">
          <div className="flex flex-col-reverse items-center sm:flex-row sm:items-start sm:justify-between">
            <p className="mt-12 max-w-lg text-center text-2xl font-bold text-night-900 sm:mt-0 sm:text-left sm:text-4xl">
              The common thread that connects us all - community and good times.
            </p>
            <Badge name="Community" />
          </div>
          <div className="mt-12">
            <Guilds />
          </div>
        </div>
      </div>
      <div className="relative bg-honey-900 py-16 sm:py-24">
        <div className="mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:max-w-8xl lg:px-12">
          <div className="flex flex-col-reverse items-center sm:flex-row sm:items-start sm:justify-between">
            <p className="mt-12 max-w-lg text-center text-2xl font-bold text-night-900 sm:mt-0 sm:text-left sm:text-4xl">
              We provide the tools to make your imagination a reality.
            </p>
            <Badge name="Infrastructure" />
          </div>
          <div className="mt-12">
            <Infrastructures />
          </div>
        </div>
      </div>
      <div className="relative bg-honey-25 py-16 sm:py-24">
        <div className="mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:max-w-8xl lg:px-12">
          <div className="flex flex-col-reverse items-center sm:flex-row sm:items-start sm:justify-between">
            <p className="mt-12 text-center text-2xl font-bold text-night-900 sm:mt-0 sm:text-left sm:text-4xl">
              Enjoyed by many (and counting)
            </p>
            <Badge name="Wall Of Love" />
          </div>
          <div className="mt-12 sm:mt-24">
            <div className="hidden justify-items-center gap-4 lg:grid lg:grid-cols-2 lg:overflow-x-hidden lg:pb-0 xl:grid-cols-3">
              <ul className="space-y-4">
                {tweets.slice(0, 2).map((tweet) => (
                  <TwitterCard {...tweet} key={tweet.date} />
                ))}
              </ul>
              <ul className="space-y-4">
                {tweets.slice(2, 4).map((tweet) => (
                  <TwitterCard {...tweet} key={tweet.date} />
                ))}
              </ul>
              <ul className="hidden space-y-4 xl:block">
                {tweets.slice(4, 6).map((tweet) => (
                  <TwitterCard {...tweet} key={tweet.date} />
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-12 flex snap-x snap-mandatory place-items-center gap-4 overflow-x-auto px-8 sm:px-0 lg:hidden">
          {tweets
            .filter((tweet) => !tweet.image)
            .map((tweet) => (
              <TwitterCard
                {...tweet}
                key={tweet.date}
                className="first-of-type:ml-6 last-of-type:mr-6"
              />
            ))}
        </div>
      </div>
      <div className="relative bg-night-900 py-16 sm:py-24">
        <div className="mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:max-w-8xl lg:px-12">
          <div className="flex flex-col-reverse items-center sm:flex-row sm:items-start sm:justify-between">
            <p className="mt-12 max-w-lg text-center text-2xl font-bold text-honey-25 sm:mt-0 sm:text-left sm:text-4xl">
              An evergrowing roster of partners and supporters
            </p>
            <Badge
              name="Partners"
              bgColor="bg-night-800"
              textColor="text-night-200"
            />
          </div>
        </div>
        <div className="relative mt-12 flex overflow-x-hidden sm:mt-24">
          <div className="flex animate-marquee whitespace-nowrap">
            {partners.map((partner) => (
              <div
                key={partner.name}
                className="mx-4 flex w-56 items-center justify-center rounded-[15px] bg-black/25 px-7 py-3"
              >
                <img src={partner.image} alt={partner.name} />
              </div>
            ))}
          </div>
          {/* Needed for infinity loop */}
          <div className="absolute top-0 flex animate-marquee2 whitespace-nowrap">
            {partners.map((partner) => (
              <div
                key={partner.name}
                className="mx-4 flex w-56 items-center justify-center rounded-[15px] bg-black/25 px-7 py-3"
              >
                <img src={partner.image} alt={partner.name} />
              </div>
            ))}
          </div>
        </div>
      </div>
      <TreasurePosts />
    </main>
  );
}
