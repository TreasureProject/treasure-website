import { Layout } from "~/components/Layout";

import tc_intro_video from "@/img/TC_INTRO.mp4";
// Assets
import { TreasureLogo } from "~/components/Icons";

import CREATE_LOGO_IMAGE from "@/img/create/Logomark.png";
import AVATAR_1_IMAGE from "@/img/create/avatar_1.png";
import AVATAR_2_IMAGE from "@/img/create/avatar_2.png";
import AVATAR_3_IMAGE from "@/img/create/avatar_3.png";

// Asset Parts for animations
import a_01_image from "@/img/partner-components/A_01.png";
import a_02_image from "@/img/partner-components/A_02.png";
import b_01_image from "@/img/partner-components/B_01.png";
import c_01_image from "@/img/partner-components/C_01.png";
import c_02_image from "@/img/partner-components/C_02.png";
import c_03_image from "@/img/partner-components/C_03.png";
import red_diamond_gif from "@/img/partner-components/red_diamond.gif";
import tile_01_desktop_image from "@/img/partner-components/tiles/TILE_01_DESKTOP.png";
import tile_01_mobile_image from "@/img/partner-components/tiles/TILE_01_MOBILE.png";
import tile_02_desktop_image from "@/img/partner-components/tiles/TILE_02_DESKTOP.png";
import tile_02_mobile_image from "@/img/partner-components/tiles/TILE_02_MOBILE.png";
import tile_03_desktop_image from "@/img/partner-components/tiles/TILE_03_DESKTOP.png";
import tile_03_mobile_image from "@/img/partner-components/tiles/TILE_03_MOBILE.png";
import tile_04_desktop_image from "@/img/partner-components/tiles/TILE_04_DESKTOP.png";
import tile_04_mobile_image from "@/img/partner-components/tiles/TILE_04_MOBILE.png";
import tile_05_desktop_image from "@/img/partner-components/tiles/TILE_05_DESKTOP.png";
import tile_05_mobile_image from "@/img/partner-components/tiles/TILE_05_MOBILE.png";

import { Link } from "@remix-run/react";
import type { MotionValue } from "framer-motion";
import {
  motion,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from "framer-motion";
import { useRef } from "react";
import { twMerge } from "tailwind-merge";
import TileGrid from "~/components/decoration/TileGrid";
import Button from "~/components/new-landing/Button";
import { CreateFrame, CreateGrid } from "~/components/new-landing/misc/Svgs";

const FORM_URL =
  "https://noteforms.com/forms/treasure-create-program-application-v5jlfp";

const Testimonials = [
  {
    text: "I have found so many fun games since joining the Treasure Create program. I love creating content around them and the team has been awesome to work with.",
    name: "Sanjay",
    twitter: "FlyeKitesJay",
  },
  {
    text: "Being part of the Treasure Create program is a blast! Getting to collaborate and develop relationships with other creators and game developers has been an amazing experience! I look forward to the future of Treasure!",
    name: "Attis",
    twitter: "Attis_gaming",
  },
  {
    text: "Stepping into the world of Treasure Create felt like I'd won the golden ticket to Willy Wonka's game factory! The campaigns are super organized. And the game developers? Always ready to chat, answer my zillion questions, and above all, value my feedback.",
    name: "HdOlivares",
    twitter: "hd_olivares",
  },
  {
    text: "I've really enjoyed exploring new games as part of Treasure Create. Getting insights from the team has made covering the Treasure games more valuable",
    name: "Gaspode",
    twitter: "GaspodeWD",
  },
  {
    text: "Treasure Create Campaigns have been instrumental in supporting my aspirations as a content creator. The program offers valuable financial support along with essential educational resources tailored to our needs as creators.",
    name: "RevGuyOfficial",
    twitter: "RevGuyOfficial",
  },
];

const ApplyNowButton = () => (
  <a
    href={FORM_URL}
    target="_blank"
    rel="noreferrer"
    className="mt-6 flex h-10 w-max items-center rounded-md border border-ruby-900 bg-ruby-900 px-4 font-semibold text-md transition-colors hover:bg-transparent hover:text-ruby-900 md:mt-14 md:h-14 md:rounded-lg md:px-8 md:text-lg"
  >
    Apply Now
  </a>
);

const TestimonialCard = ({
  testimonial,
}: {
  testimonial: { text: string; name: string; twitter: string };
}) => (
  <div className="flex h-[280px] w-[300px] flex-col justify-between rounded-3xl border border-white p-4 sm:h-[400px] md:w-[460px] md:min-w-[460px] md:p-10 ">
    <p className="text-sm leading-[160%] sm:text-md md:text-lg">
      “{testimonial.text}“
    </p>
    <div className="flex items-center gap-3 sm:gap-4 md:gap-5">
      <img
        src={`./img/testimonial-images/${testimonial.name}.png`}
        alt={`Avatar of user ${testimonial.name}`}
        className="h-11 w-11 rounded-full sm:h-14 sm:w-14 md:h-[72px] md:w-[72px]"
      />
      <div>
        <p className="font-bold text-sm leading-[160%] tracking-wider md:text-md">
          {testimonial.name}
        </p>
        <a
          href={`https://twitter.com/${testimonial.twitter}`}
          className="text-sm transition-colors hover:text-ruby-800 hover:underline md:text-md"
        >
          @{testimonial.twitter}
        </a>
      </div>
    </div>
  </div>
);

function useParallax(value: MotionValue<number>, distance: number) {
  return useTransform(value, [0, 1], [-distance, distance]);
}

const Partner = () => {
  const DESKTOP_TILE_CLASS = "absolute left-0 hidden -translate-y-1/2 lg:block";
  const MOBILE_TILE_CLASS =
    "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 scale-[1.4] lg:hidden";
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: heroRef });
  const y = useParallax(scrollYProgress, 100);
  useMotionValueEvent(y, "change", (val) => console.log(val));

  return (
    <Layout>
      <div className=" w-full overflow-x-hidden bg-partner-background">
        <div
          className="relative mb-24 w-full overflow-hidden bg-gradient-partner-hero"
          ref={heroRef}
        >
          <div className="wrapper">
            <div className="relative z-40 mt-14 flex flex-col items-center lg:items-start lg:pt-[240px] lg:pl-16">
              <h1 className="font-[Millik] text-[38px] sm:text-[42px] md:text-[64px] lg:leading-[80px]">
                Become
              </h1>
              <h1 className="max-w-lg text-center text-[38px] leading-[48px] md:text-[64px] md:leading-[80px] lg:text-start">
                A Treasure <br /> Create Partner
              </h1>
              <ApplyNowButton />
            </div>
            <div className=" -20 -right-1/2 -translate-x-1/2 -translate-y-1/2 lg:-right-16 absolute top-[180%] w-screen sm:top-[140%] lg:top-[80%] lg:w-[960px] lg:translate-x-0 lg:translate-y-0">
              {" "}
              <TreasureLogo className="-translate-x-1/2 -translate-y-1/2 absolute top-1/2 left-1/2 z-[25] w-16 lg:w-[120px]" />
              <TreasureLogo className="-translate-x-1/2 -translate-y-1/2 absolute top-1/2 left-1/2 w-[96px] animate-pulse opacity-75 blur-[28px] lg:w-[160px] lg:blur-[64px]" />
              <motion.img
                src={tile_01_desktop_image}
                alt=""
                className={DESKTOP_TILE_CLASS}
              />
              <motion.img
                src={tile_02_desktop_image}
                alt=""
                className={DESKTOP_TILE_CLASS}
              />
              <motion.img
                src={tile_03_desktop_image}
                alt=""
                className={DESKTOP_TILE_CLASS}
              />
              <motion.img
                src={tile_04_desktop_image}
                alt=""
                className={DESKTOP_TILE_CLASS}
              />
              <motion.img
                src={tile_05_desktop_image}
                alt=""
                className={DESKTOP_TILE_CLASS}
              />
              <motion.img
                src={tile_01_mobile_image}
                alt=""
                className={MOBILE_TILE_CLASS}
              />
              <motion.img
                src={tile_02_mobile_image}
                alt=""
                className={MOBILE_TILE_CLASS}
              />
              <motion.img
                src={tile_03_mobile_image}
                alt=""
                className={MOBILE_TILE_CLASS}
              />
              <motion.img
                src={tile_04_mobile_image}
                alt=""
                className={MOBILE_TILE_CLASS}
              />
              <motion.img
                src={tile_05_mobile_image}
                alt=""
                className={MOBILE_TILE_CLASS}
              />
            </div>
          </div>
          <div className="absolute bottom-0 left-0 z-30 h-1/2 w-screen bg-gradient-to-t from-partner-background via-partner-background to-transparent" />

          <div className="absolute top-1/4 right-0 z-10 hidden translate-x-1/2 opacity-60 lg:block">
            <TileGrid />
          </div>
          <div className="wrapper z-40 mt-[320px] flex flex-col items-center gap-8 lg:flex-row lg:gap-16">
            <div className="flex aspect-video w-full items-center justify-center overflow-hidden rounded-2xl bg-gradient-partner-placeholder md:rounded-[40px]">
              <video src={tc_intro_video} autoPlay muted />
            </div>
            <p className="max-w-lg px-4 font-[Satoshi] font-light text-[white] text-base leading-[160%] sm:px-0 md:text-lg">
              Welcome to Treasure Create, your gateway to web3 gaming! Join our
              exclusive creator program to champion Treasure games, boost your
              online presence, and explore unique opportunities in the web3
              gaming world. Whether you create videos, write game reviews, or
              cosplay, there's a place for you here!
            </p>
          </div>
        </div>
      </div>
      <div className="space-y-24 bg-partner-background py-20 md:space-y-8">
        <div className="wrapper flex max-w-[512px] flex-col items-center justify-center gap-6 sm:max-w-[580px] md:max-w-8xl md:flex-row md:gap-12">
          <div className="relative flex w-full items-center justify-center">
            <img src={a_02_image} alt="" className="" />
            <div className="-translate-x-1/2 -translate-y-1/2 absolute top-1/2 left-1/2 w-full">
              <img src={a_01_image} alt="" className="animate-move-up-down" />
            </div>
          </div>
          <div className="flex w-full md:pl-10 ">
            <div className="max-w-md space-y-6">
              <h1 className="font-[Millik] text-xl leading-[120%] md:text-2xl lg:text-3xl">
                Grow Your Platform
              </h1>
              <p className="font-[satoshi] font-light text-base leading-[160%] sm:text-md">
                Join our exclusive content creator program to connect with over
                300k players, access early playtests, and amplify your reach
                through promotion on official Treasure channels.
              </p>
            </div>
          </div>
        </div>
        <div className="wrapper flex max-w-[512px] flex-col items-center justify-center gap-6 sm:max-w-[580px] md:max-w-8xl md:flex-row-reverse md:gap-12">
          <div className="relative flex w-full items-center justify-center">
            <div className="absolute right-1/2 left-1/2 h-0 w-0">
              <div className="absolute top-0 left-0 h-0 w-0 border-transparent border-t-8 border-r-4 border-l-4 border-solid" />
              <div className="absolute top-0 left-0 h-0 w-0 border-t-6 border-r-2 border-l-2 bg-red-500" />
            </div>
            {/* This width here */}
            <div className="absolute top-[24.5%] left-[5%] z-20 h-[52%] w-[67%] flex-items-center justify-center rounded-xl bg-gradient-partner-hero md:w-[58%] md:rounded-[16px] lg:left-[11%] lg:h-[50%]">
              <img
                src={red_diamond_gif}
                alt=""
                className="-translate-y-1/2 -translate-x-1/2 absolute top-1/2 left-1/2 w-[33%]"
              />
              <div className="absolute top-[8%] left-[5%] flex h-[4%] w-[10%] items-center gap-[4px] md:top-[5%] md:left-[3%] ">
                <div className="aspect-square h-full rounded-full bg-[#396AF3]" />
                <div className="h-full animate-stretch rounded-full bg-[#396AF3]" />
              </div>
              <div className="absolute top-[8%] right-[5%] z-10 h-[4%] w-[8%] animate-pulse2 rounded-full bg-[#396AF3] md:top-[5%] md:right-[3%]" />
            </div>
            <img
              src={b_01_image}
              className="translate-y-[5%] scale-[1.1] transform"
              alt="Platform Illustration"
            />
          </div>
          <div className="flex w-full md:pl-10 ">
            <div className="max-w-sm space-y-6">
              <h1 className="font-[Millik] text-xl leading-[120%] md:text-2xl lg:text-3xl">
                Unlock Rewards
              </h1>
              <p className="create-paragraph sm:text-md">
                Gain <span className="text-ruby-800">MAGIC</span> compensation,
                exclusive in-game items, and priority beta access, celebrating
                your dedication to Treasure games.
              </p>
            </div>
          </div>
        </div>
        <div
          className={twMerge(
            "wrapper flex max-w-[512px] flex-col items-center justify-center gap-12 sm:max-w-[580px] md:max-w-8xl md:flex-row",
          )}
        >
          <div className="relative flex w-full flex-col items-center justify-center md:flex-row">
            <img src={c_01_image} alt="Reward Illustration" />
            <img
              src={c_02_image}
              alt=""
              className="absolute animate-move-up-down2"
            />
            <img src={c_03_image} alt="" className="absolute " />
          </div>
          <div className="flex w-full md:pl-10">
            <div className="max-w-md space-y-3 sm:space-y-6">
              <h1 className="font-[Millik] text-xl leading-[120%] md:text-2xl lg:text-3xl">
                Join an exciting community
              </h1>
              <p className="create-paragraph sm:text-md">
                Immerse yourself in a vibrant creator community, connect with
                game devs, participate in game nights and unique events, and
                forge unforgettable gaming moments together!
              </p>
            </div>
          </div>
        </div>
        <div className="wrapper flex max-w-[512px] flex-col items-center justify-center gap-12 sm:max-w-[580px] md:max-w-8xl md:flex-row-reverse">
          {/* here starts the graphic for this section */}
          <div className="relative flex w-full flex-col items-center justify-end md:flex-row">
            {/* here starts the tiles part */}
            <div className="-translate-y-[40px] absolute top-[62%] right-0 left-0 w-full translate-x-[6px] sm:right-0 md:top-1/2 md:left-auto md:min-w-[420px] md:translate-x-0 md:translate-y-0 lg:min-w-[512px] xl:right-0 xl:min-w-[720px]">
              {/* Cantelope */}
              <Link
                className="-left-[14%] -translate-y-1/2 sm:-left-[10%] absolute top-1/2 transition-transform hover:scale-105 md:left-0"
                to="https://twitter.com/TheCantelope"
                target="_blank"
              >
                <img
                  className="-translate-x-1/2 -translate-y-1/2 absolute top-1/2 left-1/2 z-10 w-[65%]"
                  src={AVATAR_2_IMAGE}
                  alt=""
                />
                <CreateFrame className="w-[240px] sm:w-[280px] md:w-[200px] lg:w-[240px] xl:w-[320px]" />
              </Link>
              {/* Alliestrasza */}
              <Link
                className="-translate-x-1/2 -translate-y-1/2 absolute top-1/2 left-1/2 z-30 transition-all hover:scale-105"
                to="https://twitter.com/Alliestrasza"
                target="_blank"
              >
                <img
                  className="-translate-x-1/2 -translate-y-1/2 absolute top-1/2 left-1/2 z-10 w-[65%]"
                  src={AVATAR_1_IMAGE}
                  alt=""
                />
                <CreateFrame className="w-[280px] sm:w-[320px] md:w-[232px] lg:w-[264px] xl:w-[360px]" />
              </Link>
              {/* Juicy */}

              <Link
                className="-right-[10%] -translate-y-1/2 absolute top-1/2 transition-all hover:scale-105 md:right-0"
                to="https://twitter.com/JuicyJCR"
                target="_blank"
              >
                <img
                  className="-translate-x-1/2 -translate-y-1/2 absolute top-1/2 left-1/2 z-10 w-[65%]"
                  src={AVATAR_3_IMAGE}
                  alt=""
                />
                <CreateFrame className="w-[240px] sm:w-[280px] md:w-[200px] lg:w-[240px] xl:w-[320px]" />
              </Link>
            </div>
            <CreateGrid className="w-full md:w-[360px] lg:w-[440px] xl:w-[512px]" />
          </div>
          <div className="flex w-full md:pl-10 ">
            <div className="max-w-md space-y-3 sm:space-y-10">
              <div className="space-y-4">
                <div className="space-y-2">
                  <div className="-translate-x-2 flex items-center gap-2">
                    <img
                      src={CREATE_LOGO_IMAGE}
                      alt="Create Logo"
                      className="w-12"
                    />
                    <p className="rounded-md bg-gradient-create-shiny px-3 py-2 text-new-night-1300 text-sm">
                      A-LIST
                    </p>
                  </div>
                  <h1 className="font-[Millik] text-xl leading-[120%] md:text-2xl lg:text-3xl">
                    Discover The A-List
                  </h1>
                </div>
                <p className="create-paragraph sm:text-md">
                  Our new elite tier within Treasure Create offers established
                  creators unmatched access, premium paid opportunities, and
                  exposure to indie and web3 gaming. Join us to shape the future
                  of gaming with Treasure.
                </p>
              </div>
              <Button
                as="a"
                color="ruby"
                className="w-max"
                href="mailto:create@treasure.lol"
              >
                Contact us
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-partner-background py-12 pt-0 sm:py-14 sm:pt-14 md:py-20 md:pt-20">
        <div className="wrapper">
          <div className="space-y-8 rounded-2xl bg-[url(/img/illustrations/texture_background.png)] p-5 md:space-y-10 md:rounded-3xl md:p-12 md:px-12">
            <h1 className="pt-4 text-center font-[Millik] text-xl sm:text-start md:pt-0 md:text-3xl">
              Testimonials
            </h1>
            <div className="group relative [-webkit-mask-image:linear-gradient(to_right,#0000_0%,#000_30%,#000_70%,#0000_100%)]">
              <div className="relative flex gap-5 overflow-x-hidden">
                <div className="group-hover:pause flex animate-[marquee_20s_linear_infinite] gap-5 sm:animate-[marquee_20s_linear_infinite]">
                  {Testimonials.map((testimonial) => (
                    <TestimonialCard
                      testimonial={testimonial}
                      key={testimonial.name}
                    />
                  ))}
                </div>
                <div className="group-hover:pause absolute top-0 ml-4 flex animate-[marquee2_20s_linear_infinite] gap-5 sm:animate-[marquee2_20s_linear_infinite]">
                  {Testimonials.map((testimonial) => (
                    <TestimonialCard
                      testimonial={testimonial}
                      key={testimonial.name}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[url(/img/illustrations/texture_background.png)] bg-cover py-12 sm:py-16 md:py-24">
        <div className="wrapper">
          <div className="flex flex-col items-center justify-center rounded-2xl bg-gradient-partner-hero p-12 sm:p-16 md:rounded-[32px]">
            <h1 className="mb-4 text-center font-[Millik] text-2xl leading-[120%] md:text-3xl">
              Become a Treasure Create Partner
            </h1>
            <p className="text-center text-sm leading-[160%] sm:text-xl lg:text-2xl">
              Unlock, reap, shape: Your gaming future starts here.
            </p>
            <ApplyNowButton />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Partner;
