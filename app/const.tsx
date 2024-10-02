import OnekxImg from "../public/img/partners/1kx.svg";
// Investors
import AcadArenaImg from "../public/img/partners/AcadArena.svg";
import AndrewGreenImg from "../public/img/partners/AndrewGreen.svg";
import BlackPoolImg from "../public/img/partners/BlackPool.svg";
import DefiVaderImg from "../public/img/partners/DefiVader.svg";
import DigitalStrategiesImg from "../public/img/partners/DigitalStrategies.png";
import IncentiveDesignTheoryImg from "../public/img/partners/IncentiveDesignTheory.svg";
import JasonChoiImg from "../public/img/partners/JasonChoi.svg";
import JihoImg from "../public/img/partners/Jiho.svg";
import MeritCircleImg from "../public/img/partners/MeritCircle.svg";
import Metat8Img from "../public/img/partners/Metat8.svg";
import NeonImg from "../public/img/partners/Neon.svg";
import ReadyPlayerImg from "../public/img/partners/ReadyPlayer.svg";
import RyanDelphiImg from "../public/img/partners/RyanDelphi.svg";

import BinanceImg from "../public/img/magic-list/binance.svg";
import CoinbaseImg from "../public/img/magic-list/coinbase.svg";
import MoonPayImg from "../public/img/magic-list/moonpay.svg";
// MAGIC
import SushiSwapImg from "../public/img/magic-list/sushiswap.svg";

// Stat Icons
import IconArbitrumImg from "../public/img/icons/Arbitrum.svg";
import IconCommunityImg from "../public/img/icons/Community.svg";
import IconGamesImg from "../public/img/icons/Games.svg";
import IconGrowthImg from "../public/img/icons/Growth.svg";
import IconMagicImg from "../public/img/icons/Magic.svg";
import IconSushiImg from "../public/img/icons/Sushi.svg";

import DiegoImg from "../public/img/twitter/Diego.webp";
import FlookImg from "../public/img/twitter/Flook.webp";
// Twitter
import SmasheImg from "../public/img/twitter/Smashe.webp";

import ArbitrumPartner1Img from "@/img/arbitrum-partners/Partners-1.webp";
import ArbitrumPartner2Img from "@/img/arbitrum-partners/Partners-2.webp";
import ArbitrumPartner3Img from "@/img/arbitrum-partners/Partners-3.webp";
import ArbitrumPartner4Img from "@/img/arbitrum-partners/Partners-4.webp";
import ArbitrumPartner5Img from "@/img/arbitrum-partners/Partners-5.webp";
import ArbitrumPartner6Img from "@/img/arbitrum-partners/Partners-6.webp";
import ArbitrumPartner7Img from "@/img/arbitrum-partners/Partners-7.webp";
import ArbitrumPartner8Img from "@/img/arbitrum-partners/Partners-8.webp";
import ArbitrumPartner9Img from "@/img/arbitrum-partners/Partners-9.webp";
import ArbitrumPartner10Img from "@/img/arbitrum-partners/Partners-10.webp";
import ArbitrumPartner11Img from "@/img/arbitrum-partners/Partners-11.webp";
import ArbitrumPartner12Img from "@/img/arbitrum-partners/Partners-12.webp";
import ArbitrumPartner13Img from "@/img/arbitrum-partners/Partners-13.webp";
import ArbitrumPartner14Img from "@/img/arbitrum-partners/Partners-14.webp";
import ArbitrumPartner15Img from "@/img/arbitrum-partners/Partners-15.webp";
// Arbitrum Partners
import ArbitrumPartnerImg from "@/img/arbitrum-partners/Partners.webp";

import { DiscordIcon, XIcon } from "~/components/Icons";

export const magicPurchaseLinks = [
  {
    name: "Sushi",
    url: "https://www.sushi.com/swap?%24%7B=&fromChainId=42161&fromCurrency=NATIVE&toChainId=42161&toCurrency=0x539bdE0d7Dbd336b79148AA742883198BBF60342",
    icon: SushiSwapImg,
  },
  {
    name: "MoonPay",
    url: "https://app.treasure.lol/manage-funds",
    icon: MoonPayImg,
  },
  {
    name: "Binance",
    url: "https://www.binance.com/en/trade/MAGIC_USDT?theme=dark&type=spot?ref=546318140",
    icon: BinanceImg,
  },
  {
    name: "Coinbase",
    url: "https://exchange.coinbase.com/trade/MAGIC-USD",
    icon: CoinbaseImg,
  },
];

export const tweets = [
  {
    profileImage: DiegoImg,
    username: "The Beacon",
    userlink: "https://twitter.com/DiegoVidaurres",
    handle: "Zeelex - Co Founder",
    link: "https://twitter.com/The_Beacon_GG",
    tweet: () => (
      <>
        Treasure has been the perfect place to build upon for us. Not only do
        they provide crucial and top tier infrastructure to build your game on
        top of, they also have the most active and enthusiastic community that
        shares the overall vision and ethos. The team is also incredibly
        supportive and proactive in terms of marketing, product design and
        overall community fostering.
      </>
    ),
  },
  {
    profileImage: FlookImg,
    username: "Knights of the Ether",
    userlink: "https://twitter.com/Flook_eth",
    handle: "Flook - Co Founder",
    link: "https://twitter.com/KnightsOfTheEth",
    tweet: () => (
      <>
        Reliable, transparent and consummate builders, Treasure is everything a
        founder could want in a partner to help bring their game to the masses.
      </>
    ),
  },
  {
    profileImage: SmasheImg,
    username: "Tales of Elleria",
    userlink: "https://twitter.com/Smashe__",
    handle: "Smashe - Co Founder",
    link: "https://twitter.com/TalesofElleria",
    tweet: () => (
      <>
        Building with Treasure has been a fantastic experience. The sincerity
        behind their support, as well as opportunities provided is unparalleled
        throughout web3. From social outreach to marketplace integration,
        Treasure has been swift and helpful in all aspects.
      </>
    ),
  },
] as const;

export const partners = [
  {
    name: "1kx",
    image: OnekxImg,
  },
  {
    name: "BlackPool",
    image: BlackPoolImg,
  },
  {
    name: "NEON DAO",
    image: NeonImg,
  },
  {
    name: "AcadArena",
    image: AcadArenaImg,
  },
  {
    name: "Ready Player DAO",
    image: ReadyPlayerImg,
  },
  {
    name: "Merit Circle",
    image: MeritCircleImg,
  },
  {
    name: "Incentive Design Theory",
    image: IncentiveDesignTheoryImg,
  },
  {
    name: "Jiho",
    image: JihoImg,
  },
  {
    name: "Jason Choi",
    image: JasonChoiImg,
  },
  {
    name: "Ryan Delphi",
    image: RyanDelphiImg,
  },
  {
    name: "Andrew Green",
    image: AndrewGreenImg,
  },
  {
    name: "Defi Vader",
    image: DefiVaderImg,
  },
  {
    name: "Metat8",
    image: Metat8Img,
  },
  {
    name: "Digital Strategies",
    image: DigitalStrategiesImg,
  },
];

export const socials = [
  {
    name: "Discord",
    href: "http://discord.gg/treasuredao",
    icon: (props: { className?: string }) => <DiscordIcon {...props} />,
  },
  {
    name: "X",
    href: "https://x.com/Treasure_DAO",
    icon: (props: { className?: string }) => <XIcon {...props} />,
  },
];

export const stats = [
  {
    title: "Gaming and NFT ecosystem on Arbitrum",
    value: "#1",
    icon: IconArbitrumImg,
  },
  {
    title: "Total marketplace volume",
    value: "$280M",
    icon: IconMagicImg,
  },
  {
    title: "Games powered by Treasure",
    value: "15+",
    icon: IconGamesImg,
  },
  {
    title: "Gaming and top 5 overall liquidity on Sushi",
    value: "#1",
    icon: IconSushiImg,
  },
  {
    title: "Engaged player community",
    value: "150k+",
    icon: IconCommunityImg,
  },
  {
    title: "Quarter-on-quarter growth (weekly active users)",
    value: "101%",
    icon: IconGrowthImg,
  },
  {
    title: "of all gaming and NFT txns on Arbitrum",
    value: "95%",
    icon: IconArbitrumImg,
  },
] as const;

export const supportedLngs = ["en", "ja-JP", "zh-CN"];

export const arbitrumPartners = [
  ArbitrumPartnerImg,
  ArbitrumPartner1Img,
  ArbitrumPartner2Img,
  ArbitrumPartner3Img,
  ArbitrumPartner4Img,
  ArbitrumPartner5Img,
  ArbitrumPartner6Img,
  ArbitrumPartner7Img,
  ArbitrumPartner8Img,
  ArbitrumPartner9Img,
  ArbitrumPartner10Img,
  ArbitrumPartner11Img,
  ArbitrumPartner12Img,
  ArbitrumPartner13Img,
  ArbitrumPartner14Img,
  ArbitrumPartner15Img,
];
