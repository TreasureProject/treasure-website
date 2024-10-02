// Investors
import AcadArenaImg from "../public/img/partners/AcadArena.svg";
import AndrewGreenImg from "../public/img/partners/AndrewGreen.svg";
import BlackPoolImg from "../public/img/partners/BlackPool.svg";
import DefiVaderImg from "../public/img/partners/DefiVader.svg";
import IncentiveDesignTheoryImg from "../public/img/partners/IncentiveDesignTheory.svg";
import JasonChoiImg from "../public/img/partners/JasonChoi.svg";
import JihoImg from "../public/img/partners/Jiho.svg";
import MeritCircleImg from "../public/img/partners/MeritCircle.svg";
import ReadyPlayerImg from "../public/img/partners/ReadyPlayer.svg";
import RyanDelphiImg from "../public/img/partners/RyanDelphi.svg";
import NeonImg from "../public/img/partners/Neon.svg";
import Metat8Img from "../public/img/partners/Metat8.svg";
import OnekxImg from "../public/img/partners/1kx.svg";
import DigitalStrategiesImg from "../public/img/partners/DigitalStrategies.png";

// MAGIC
import SushiSwapImg from "../public/img/magic-list/sushiswap.svg";
import CoinbaseImg from "../public/img/magic-list/coinbase.svg";
import MoonPayImg from "../public/img/magic-list/moonpay.svg";
import BinanceImg from "../public/img/magic-list/binance.svg";

// Stat Icons
import IconArbitrumImg from "../public/img/icons/Arbitrum.svg";
import IconGrowthImg from "../public/img/icons/Growth.svg";
import IconSushiImg from "../public/img/icons/Sushi.svg";
import IconGamesImg from "../public/img/icons/Games.svg";
import IconMagicImg from "../public/img/icons/Magic.svg";
import IconCommunityImg from "../public/img/icons/Community.svg";

// Twitter
import OfficialAbengerImg from "../public/img/twitter/OfficialAbenger.webp";
import SquareJordanImg from "../public/img/twitter/SquareJordan.webp";
import SmasheImg from "../public/img/twitter/Smashe.webp";
import DiegoImg from "../public/img/twitter/Diego.webp";
import FlookImg from "../public/img/twitter/Flook.webp";
import ApixImg from "@/img/twitter/Apix.webp";
import CartjackedImg from "@/img/twitter/Cartjacked.webp";
import DmitriyImg from "@/img/twitter/Dmitriy.webp";
import HunterImg from "@/img/twitter/Hunter.webp";
import SageImg from "@/img/twitter/Sage.webp";

// Arbitrum Partners
import ArbitrumPartnerImg from "@/img/arbitrum-partners/Partners.webp";
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

const TwitterLink = ({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) => (
  <a
    className="text-twitter decoration-twitter decoration-1 hover:underline"
    href={href}
    rel="noopener noreferrer"
    target="_blank"
  >
    {children}
  </a>
);

const tweets = [
  {
    profileImage: SquareJordanImg,
    username: "Square Jordan",
    handle: "@SquareJordan",
    link: "https://twitter.com/SquareJordan/status/1532071817556676608",
    tweet: () => (
      <>
        It's really quite incredible what{" "}
        <TwitterLink href="https://twitter.com/Treasure_DAO">
          @Treasure_DAO
        </TwitterLink>{" "}
        is buidling during a bear market... The infrastructure, tools and engine
        to create a sustainable virtual economy powered by{" "}
        <TwitterLink href="https://twitter.com/search?q=$MAGIC">
          MAGIC
        </TwitterLink>{" "}
        all while developing an engaging social network and fun gaming ecosystem
        driven by the community ✨
      </>
    ),
    type: "player",
  },

  {
    profileImage: OfficialAbengerImg,
    username: "OfficialAbenger",
    handle: "@officialabenger",
    link: "https://twitter.com/officialabenger/status/1598879884427677696",
    tweet: () => (
      <>
        I’m part of the team building{" "}
        <TwitterLink href="https://twitter.com/BattleFlyGame">
          @BattleFlyGame
        </TwitterLink>{" "}
        on Treasure and continue to be impressed by the vision, community and
        emerging interoperability of the ecosystem. The community is like
        nothing else in web3 imho.
      </>
    ),
    type: "player",
  },
  {
    profileImage: HunterImg,
    username: "hunter",
    handle: "@BFreshHB",
    link: "https://twitter.com/BFreshHB/status/1598744138534379520",
    tweet: () => (
      <>
        Truly impressed and proud of{" "}
        <TwitterLink href="https://twitter.com/Treasure_DAO">
          @Treasure_DAO
        </TwitterLink>{" "}
        and the community they’ve cultivated.
        <br />
        <br /> Very rare to see a project get insane hype and attention in the
        beginning, build through the lows and FUD, to re-emerge as a leader in
        their vertical - sustainably building for the future ✨
      </>
    ),
    type: "player",
  },
  {
    profileImage: CartjackedImg,
    username: "cartjacked (💙,🧡)",
    handle: "@cartjacked",
    link: "https://twitter.com/cartjacked/status/1598863589598986240",
    tweet: () => (
      <>
        Treasure/Arbitrum offers very strong network effects and leverages a
        very tight knit genuine community. The amount of marketing push given by
        Treasure and its community put The Beacon’s launch on steroids. Future
        interoperability across these games will be massive as well.
      </>
    ),
    type: "player",
  },
  {
    profileImage: DmitriyImg,
    username: "Dmitriy Berenzon",
    handle: "@dberenzon",
    link: "https://twitter.com/dberenzon/status/1599894360513912832",
    tweet: () => (
      <>
        Pay attention to the strength of communities over the next year - the
        ones who make it through this bear will be 100x larger in the next bull.
        <br />
        <br />
        <TwitterLink href="https://twitter.com/Treasure_DAO">
          @Treasure_DAO
        </TwitterLink>{" "}
        is a great example ✨
      </>
    ),
    type: "player",
  },
  {
    profileImage: SageImg,
    username: "sage | Kuroro CEO",
    handle: "@kurorosage",
    link: "https://twitter.com/kurorosage/status/1598869040700628993",
    tweet: () => (
      <>
        ngl I’m impressed by{" "}
        <TwitterLink href="https://twitter.com/arbitrum">
          @arbitrum's
        </TwitterLink>{" "}
        &{" "}
        <TwitterLink href="https://twitter.com/Treasure_DAO">
          @Treasure_DAO
        </TwitterLink>{" "}
        communities
        <br />
        <br />
        It’s crazy to see a community rallying behind a chain like this, creates
        super powerful network effects for projects into their ecosystem
      </>
    ),
    type: "player",
  },
  {
    profileImage: DiegoImg,
    username: "Diego Vidaurre",
    handle: "@DiegoVidaurres",
    link: "https://twitter.com/DiegoVidaurres/status/1596363046145822725",
    tweet: () => (
      <>
        Off to bed after a really exciting day.
        <br />
        <br />
        Me and the the at{" "}
        <TwitterLink href="https://twitter.com/The_Beacon_GG">
          @The_Beacon_GG
        </TwitterLink>{" "}
        couldn’t be more thrilled to see the game come alive in the way it did
        today.
        <br />
        <br />
        iBig shout out to to our friends at{" "}
        <TwitterLink href="https://twitter.com/Treasure_DAO">
          @Treasure_DAO
        </TwitterLink>{" "}
        and{" "}
        <TwitterLink href="https://twitter.com/arbitrum">@arbitrum</TwitterLink>{" "}
        . We’re proud to be part of this amazing ecosystem
      </>
    ),
    type: "player",
  },
  {
    profileImage: ApixImg,
    username: "apix 🎮",
    handle: "@apixtwts",
    link: "https://twitter.com/apixtwts/status/1599107703627911168",
    tweet: () => (
      <>
        The{" "}
        <TwitterLink href="https://twitter.com/Treasure_DAO">
          @Treasure_DAO
        </TwitterLink>{" "}
        community has impressed me 1000% the last few weeks.
        <br />
        <br />
        <ul className="list-inside list-disc space-y-1">
          <li>The community is super tight knit</li>
          <li>
            Strong performing bluechip in{" "}
            <TwitterLink href="https://twitter.com/smolverse">
              @Treasure_DAO
            </TwitterLink>{" "}
            for over a year
          </li>

          <li>Leading ecosystem on Arbitrum</li>
          <li>
            Hard focus on gaming, which will be a core part of the future of
            web3
          </li>
        </ul>
      </>
    ),
    type: "player",
  },
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
    type: "builder",
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
    type: "builder",
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
    type: "builder",
  },
] as const;

export const playerTweets = tweets.filter((tweet) => tweet.type === "player");

export const builderTweets = tweets.filter((tweet) => tweet.type === "builder");

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
