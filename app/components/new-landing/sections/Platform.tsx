import Button from "../Button";
import { PlatformGrid } from "../misc/Svgs";

import APP_SCREEN_IMAGE from "~/../public/img/new-landing/platform/app-screen.webp";
import CHEST_IMAGE from "~/../public/img/new-landing/platform/chest.webp";
import GEM_IMAGE from "~/../public/img/new-landing/platform/gem.webp";
import APP_LOGO from "~/../public/img/new-landing/platform/app-logo.svg";
import MARKET_LOGO from "~/../public/img/new-landing/platform/market-logo.svg";
import MARKET_SCREEN_IMAGE from "~/../public/img/new-landing/platform/market-screen.webp";
import MAGICSWAP_LOGO from "~/../public/img/new-landing/platform/magicswap-logo.svg";
import MAGICSWAP_SCREEN_IMAGE from "~/../public/img/new-landing/platform/magicswap-screen.webp";
import { LINKS } from "../misc/const";

const Platform = () => {
  return (
    <div
      className="relative overflow-hidden border-b border-new-ruby-900 py-12 sm:py-20"
      style={{
        background: "linear-gradient(149deg, #0D1420 49.11%, #DC2626 165.09%)",
      }}
    >
      <div className="absolute top-0 left-0 h-24 w-full bg-gradient-to-t from-transparent to-new-night-1300" />
      <PlatformGrid className="absolute left-1/2 bottom-0 h-[960px] -translate-x-1/2" />
      <div className="container relative z-10 grid grid-cols-1 gap-10 sm:gap-16 xl:grid-cols-3 xl:flex-row xl:items-center xl:gap-40 ">
        <div className="flex flex-col items-center space-y-7 text-center xl:items-start xl:text-left">
          <img
            src={APP_LOGO}
            alt="Treasure App"
            className="inline-block h-[42px]"
          />
          <h1 className="text-3xl font-black leading-[105%] sm:text-5xl">
            Discover <br className="hidden xl:block" /> the magic
          </h1>
          <p className="inline-block max-w-md leading-[150%] text-night-400">
            Play, collect rewards, and discover our ecosystem on the App – our
            destination for games. <em>Desktop launcher coming soon!</em>
          </p>
          <div className="flex gap-3 sm:flex-row">
            <Button as="a" color="ruby" href={LINKS.APP}>
              Launch App
            </Button>
            {/* <Button color="honey" className="w-max">
              Download Launcher{" "}
              <div className="flex ">
                <WindowsIcon className="w-5" />
                <AppleIcon className="w-5" />
              </div>
            </Button> */}
          </div>
        </div>
        <div className="relative z-10 mx-auto h-[342px] w-full sm:h-auto sm:w-[600px] lg:col-span-2 xl:mx-0 xl:w-full xl:flex-row xl:items-center ">
          <img
            src={CHEST_IMAGE}
            alt="Chest"
            className="absolute top-[35%] right-[10%] z-10 hidden w-[60%] translate-x-1/2 sm:block md:w-[40%] xl:right-[3rem]"
          />
          <img
            src={GEM_IMAGE}
            alt="Gem"
            className="absolute top-[15%] left-[4%] z-10 hidden w-[25%] -translate-x-1/2 sm:block md:w-[20%] xl:left-0"
          />
          <img
            src={APP_SCREEN_IMAGE}
            alt="Treasure App Screenshot"
            className="relative w-full drop-shadow-[0_0px_40px_rgba(220,38,38,0.25)] sm:relative sm:h-auto xl:w-auto"
          />
        </div>
      </div>
      <div className="container relative z-10 mt-32 grid grid-cols-1 gap-10 sm:gap-16 xl:grid-cols-3 xl:flex-row xl:items-center xl:gap-40 ">
        <div className="flex flex-col items-center space-y-7 text-center xl:order-last xl:items-start xl:text-left">
          <img
            src={MARKET_LOGO}
            alt="Treasure App"
            className="inline-block h-[42px]"
          />
          <h1 className="text-3xl font-black leading-[105%] sm:text-5xl">
            Gotta collect
            <br className="hidden xl:block" /> 'em all
          </h1>
          <p className="inline-block max-w-md leading-[150%] text-night-400">
            Discover the ultimate marketplace to collect, trade, and sell NFTs
            and in-game items.
          </p>
          <div className="flex gap-3 sm:flex-row">
            <Button as="a" color="ruby" href={LINKS.MARKET}>
              Visit Market
            </Button>
          </div>
        </div>
        <div className="relative z-10 mx-auto h-[342px] w-full sm:h-auto sm:w-[600px] lg:col-span-2 xl:mx-0 xl:w-full xl:flex-row xl:items-center ">
          <img
            src={MARKET_SCREEN_IMAGE}
            alt="Treasure Market Screesnhot"
            className="relative w-full drop-shadow-[0_0px_40px_rgba(220,38,38,0.25)] sm:relative sm:h-auto xl:w-auto"
          />
        </div>
      </div>
      <div className="container relative z-10 mt-32 grid grid-cols-1 gap-10 sm:gap-16 xl:grid-cols-3 xl:flex-row xl:items-center xl:gap-40">
        <div className="flex flex-col items-center space-y-7 text-center xl:items-start xl:text-left">
          <img
            src={MAGICSWAP_LOGO}
            alt="Magicswap"
            className="inline-block h-[42px]"
          />
          <h1 className="text-3xl font-black leading-[105%] sm:text-5xl">
            The Imagination AMM
          </h1>
          <p className="inline-block max-w-md leading-[150%] text-night-400">
            Permissionless AMM with universal token compatibility. Powering
            in-game exchanges (GEX), NFT memecoins, and more.
          </p>
          <div className="flex gap-3 sm:flex-row">
            <Button as="a" color="ruby" href={LINKS.MAGICSWAP}>
              Start Trading
            </Button>
            <Button as="a" color="honey" href={LINKS.MAGICSWAP_DOCS}>
              Learn More{" "}
            </Button>
          </div>
        </div>
        <div className="relative z-10 mx-auto h-[342px] w-full sm:h-auto sm:w-[600px] lg:col-span-2 xl:mx-0 xl:w-full xl:flex-row xl:items-center ">
          <img
            src={MAGICSWAP_SCREEN_IMAGE}
            alt="Magicswap Screenshot"
            className="relative w-full drop-shadow-[0_0px_40px_rgba(220,38,38,0.25)] sm:relative sm:h-auto xl:w-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default Platform;
