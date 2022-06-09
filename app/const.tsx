import BattleFlyImg from "../public/img/projects/battlefly.jpg";
import BridgeworldImg from "../public/img/projects/bridgeworld.jpg";
import KnightsOfTheEtherImg from "../public/img/projects/knightsofether.jpg";
import LifeImg from "../public/img/projects/life.jpg";
import LostSamuriseImg from "../public/img/projects/lostsamurise.jpg";
import PeekABooImg from "../public/img/projects/peekaboo.jpg";
import RealmImg from "../public/img/projects/realm.jpg";
import SmithyDaoImg from "../public/img/projects/smithydao.jpg";
import ToadStoolzImg from "../public/img/projects/toadstoolz.jpg";

import AcadArenaImg from "../public/img/partners/AcadArena.svg";
import AndrewGreenImg from "../public/img/partners/AndrewGreen.svg";
import BlackPoolImg from "../public/img/partners/BlackPool.svg";
import DefiVaderImg from "../public/img/partners/DefiVader.svg";
import IncentiveDesignTheoryImg from "../public/img/partners/IncentiveDesignTheory.svg";
import JasonChoiImg from "../public/img/partners/JasonChoi.svg";
import JihoImg from "../public/img/partners/Jiho.svg";
import MeritCircleImg from "../public/img/partners/MeritCircle.svg";
import ReadyPlayerImg from "../public/img/partners/ReadyPlayer.svg";

import {
  AMMIcon,
  BridgeIcon,
  CartridgesIcon,
  DiscordIcon,
  EconomyIcon,
  GlobalIcon,
  GuildsIcon,
  TroveIcon,
  TwitterIcon,
  UsersIcon,
} from "~/components/Icons";

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

export const tweets = [
  {
    profileImage:
      "https://pbs.twimg.com/profile_images/1531228011302989829/_VtNcCUp_200x200.jpg",
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
          $MAGIC
        </TwitterLink>{" "}
        all while developing an engaging social network and fun gaming ecosystem
        driven by the community ✨
      </>
    ),
    image: null,
    isOfficial: false,
    date: "3:49 AM · June 2, 2022",
  },
  {
    profileImage:
      "https://pbs.twimg.com/profile_images/1508930945956601862/CBiWlBZx_200x200.jpg",
    username: "mariogotze.eth",
    handle: "@MarioGoetze",
    link: "https://twitter.com/mariogoetze/status/1478801150883377153",
    tweet: () => <>Making smol steps in the crypto space</>,
    image:
      "https://pbs.twimg.com/media/FIXBzxaXMAwBeB2?format=jpg&name=360x360",
    isOfficial: true,
    date: "3:50 AM · Jan 6, 2022",
  },

  {
    profileImage:
      "https://pbs.twimg.com/profile_images/1526836155420844033/N8wDSH1E_200x200.jpg",
    username: "Uncle Pennybags 🦍",
    handle: "@realpennybags",
    link: "https://twitter.com/realpennybags/status/1485856084258549762",
    tweet: () => (
      <>
        1/ Many ppl have been asking me why i aped 300+ eth into an illiquid l2
        nft topping some of the highest sales vs{" "}
        <TwitterLink href="https://twitter.com/CyberKongz">
          @CyberKongz
        </TwitterLink>{" "}
        and{" "}
        <TwitterLink href="https://twitter.com/coolcatsnft">
          @coolcatsnft
        </TwitterLink>{" "}
        amidst a bear market that doesnt even have a game out atm
        <br />
        <br /> Below is my story 👇
      </>
    ),
    image: "https://pbs.twimg.com/media/FJ7SMgAXMAEsWCU?format=jpg&name=small",
    isOfficial: false,
    date: "3:04 PM · Jan 25, 2022",
  },
  {
    profileImage:
      "https://pbs.twimg.com/profile_images/1463417539958951941/H0fwRrw4_200x200.jpg",
    username: "Mike_Crypto (🪄,🧠)",
    handle: "@Mike_Crypto",
    link: "https://twitter.com/Mike_Crypto/status/1506323131077697543",
    tweet: () => (
      <>
        I think the exponential growth of the{" "}
        <TwitterLink href="https://twitter.com/Treasure_DAO">
          @Treasure_DAO
        </TwitterLink>{" "}
        network will start to become very clear over the next few months. With
        dozens of games in progress, it is becoming more and more clear that the
        TreasureDAO ecosystem can support hundreds of thriving games powered by{" "}
        <TwitterLink href="https://twitter.com/search?q=$MAGIC">
          $MAGIC
        </TwitterLink>
        .
      </>
    ),
    image: null,
    isOfficial: false,
    date: "2:33 AM · Mar 23, 2022",
  },

  {
    profileImage:
      "https://pbs.twimg.com/profile_images/1497859492029288448/4ioYZ3pS_200x200.jpg",
    username: "OfficialAbenger (3,3) ( 🪄,🌙)",
    handle: "@officialabenger",
    link: "https://twitter.com/officialabenger/status/1512088847865495552",
    tweet: () => (
      <>
        I can't find another crypto ecosystem that has as many creative teams
        building at speed as{" "}
        <TwitterLink href="https://twitter.com/Treasure_DAO">
          @Treasure_DAO
        </TwitterLink>{" "}
        does right now. <br />
        <br /> Decentralized, coordinated and boundless creativity will lead to
        something very special -- a metaverse that people actually want to spend
        time in.
      </>
    ),
    image: null,
    isOfficial: false,
    date: "12:24 AM · Apr 8, 2022",
  },
  {
    profileImage:
      "https://pbs.twimg.com/profile_images/1518546576066547713/5ym8Z942_200x200.jpg",
    username: "Teng",
    handle: "@0xPrismatic",
    link: "https://twitter.com/0xPrismatic/status/1508081582044856326",
    tweet: () => (
      <>
        I’ve spent weeks deep in the weeds in{" "}
        <TwitterLink href="https://twitter.com/Treasure_DAO">
          @Treasure_DAO
        </TwitterLink>{" "}
        ($MAGIC). Here’s why I think it's a fascinating socio-economic
        experiment happening in real-time & something to watch for this year.
        <br />
        <br />
        🧵👇
      </>
    ),
    image: null,
    isOfficial: false,
    date: "11:00 PM · Mar 27, 2022",
  },
];

export const communities = [
  {
    name: "Governance (DAO)",
    description:
      "Showcasing projects and initiatives built by and with the community.",
    buttonDescription: "Button CTA",
    href: "#",
  },
  {
    name: "Guilds",
    description:
      "Showcasing projects and initiatives built by and with the community.",
    buttonDescription: "Join a Guild",
    href: "#",
  },
  {
    name: "Community Initiatives",
    description:
      "Showcasing projects and initiatives built by and with the community.",
    buttonDescription: "Button CTA",
    href: "#",
  },
  {
    name: "Bounty Board",
    description:
      "Showcasing projects and initiatives built by and with the community.",
    buttonDescription: "View Initiatives",
    href: "#",
  },
];

export const partners = [
  {
    name: "Acad Arena",
    image: AcadArenaImg,
  },
  {
    name: "Andrew Green",
    image: AndrewGreenImg,
  },
  {
    name: "Black Pool",
    image: BlackPoolImg,
  },
  {
    name: "Defi Vader",
    image: DefiVaderImg,
  },
  {
    name: "Incentive Design Theory",
    image: IncentiveDesignTheoryImg,
  },
  {
    name: "Jason Choi",
    image: JasonChoiImg,
  },
  {
    name: "Jiho",
    image: JihoImg,
  },
  {
    name: "Merit Circle",
    image: MeritCircleImg,
  },
  {
    name: "Ready Player",
    image: ReadyPlayerImg,
  },
];

export const Infrastructures = [
  {
    name: "Marketplace",
    icon: <TroveIcon className="h-10 w-10 text-ruby-900" aria-hidden="true" />,
    description:
      "Showcasing projects and initiatives built by and with the community.",
    buttonDescription: "View Marketplace",
    href: "#",
  },
  {
    name: "AMM",
    icon: <AMMIcon className="h-10 w-10" aria-hidden="true" />,
    description:
      "Showcasing projects and initiatives built by and with the community.",
    buttonDescription: "Button CTA",
    href: "#",
  },
  {
    name: "Economy",
    icon: <EconomyIcon className="h-10 w-10" aria-hidden="true" />,
    description:
      "Showcasing projects and initiatives built by and with the community.",
    buttonDescription: "Button CTA",
    href: "#",
  },
  {
    name: "Bridging",
    icon: <BridgeIcon className="h-10 w-10" aria-hidden="true" />,
    description:
      "Showcasing projects and initiatives built by and with the community.",
    buttonDescription: "Button CTA",
    href: "#",
  },
];

export const BridgeworldInfrastructures = [
  {
    name: "Users",
    icon: <UsersIcon className="h-14 w-14 text-ruby-900" aria-hidden="true" />,
    description:
      "Individual players explore Bridgeworld and the worlds beyond by questing, crafting, and more.",
  },
  {
    name: "Guilds",
    icon: <GuildsIcon className="h-14 w-14" aria-hidden="true" />,
    description:
      "Collectives of players have formed, allowing for the coordination and competition for emissions between groups.",
  },
  {
    name: "Global",
    icon: <GlobalIcon className="h-14 w-14" aria-hidden="true" />,
    description:
      "Showcasing projects and initiatives built by and with the community.",
  },
  {
    name: "Cartridges",
    icon: <CartridgesIcon className="h-14 w-14" aria-hidden="true" />,
    description:
      "Serving as the interplay between games and guilds, cartridges (games) can form “nations” to exert influence over Bridgeworld.",
  },
];

export const navigation = [
  {
    name: "Learn",
    links: [
      {
        name: "About",
        href: "/about",
        isExternal: false,
      },
      {
        name: "Team",
        href: "/team",
        isExternal: false,
      },
      {
        name: "Documentation",
        href: "#",
        isExternal: true,
      },
    ],
  },
  {
    name: "Discover",
    links: [
      {
        name: "Bridgeworld",
        href: "/bridgeworld",
        isExternal: false,
      },
      {
        name: "Cartridges",
        href: "#",
        isExternal: false,
      },
      {
        name: "Community",
        href: "#",
        isExternal: false,
      },
      {
        name: "Infrastructure",
        href: "#",
        isExternal: false,
      },
    ],
  },
  {
    name: "Build",
    links: [
      {
        name: "Why Treasure",
        href: "#",
        isExternal: false,
      },
      {
        name: "Apply for partnership",
        href: "#",
        isExternal: true,
      },
    ],
  },
  {
    name: "Contribute",
    links: [
      {
        name: "Forum",
        href: "https://bridgeworld.treasure.lol",
        isExternal: true,
      },
      {
        name: "Vote on Snapshot",
        href: "#",
        isExternal: true,
      },
      {
        name: "Bounty Board",
        href: "#",
        isExternal: true,
      },
      {
        name: "Guilds",
        href: "#",
        isExternal: true,
      },
      {
        name: "Initiatives",
        href: "#",
        isExternal: true,
      },
      {
        name: "Talent",
        href: "#",
        isExternal: true,
      },
    ],
  },
  { name: "Marketplace", href: "#", isExternal: true },
  { name: "LP", href: "#", isExternal: true },
];

export const partnerCartridges = [
  {
    name: "Battlefly",
    image: BattleFlyImg,
    discordLink: "#",
    twitterLink: "#",
  },
  {
    name: "The Lost Donkeys",
    image: BattleFlyImg,
    discordLink: "#",
    twitterLink: "#",
  },
  {
    name: "Toadstoolz",
    image: ToadStoolzImg,
    discordLink: "#",
    twitterLink: "#",
  },
  {
    name: "Peek-A-Boo!",
    image: PeekABooImg,
    discordLink: "#",
    twitterLink: "#",
  },
  {
    name: "The Lost Samurise",
    image: LostSamuriseImg,
    discordLink: "#",
    twitterLink: "#",
  },
  {
    name: "Tales of Elleria",
    image: BattleFlyImg,
    discordLink: "#",
    twitterLink: "#",
  },
  {
    name: "Bridgeworld",
    image: BridgeworldImg,
    discordLink: "#",
    twitterLink: "#",
  },
  {
    name: "Knights of the Ether",
    image: KnightsOfTheEtherImg,
    discordLink: "#",
    twitterLink: "#",
  },
  {
    name: "LifeDAO",
    image: LifeImg,
    discordLink: "#",
    twitterLink: "#",
  },
  {
    name: "SmithyDAO",
    image: SmithyDaoImg,
    discordLink: "#",
    twitterLink: "#",
  },
  {
    name: "Realm",
    image: RealmImg,
    discordLink: "#",
    twitterLink: "#",
  },
];

export const socials = [
  {
    name: "Discord",
    href: "#",
    icon: (props: { className?: string }) => <DiscordIcon {...props} />,
  },
  {
    name: "Twitter",
    href: "#",
    icon: (props: { className?: string }) => <TwitterIcon {...props} />,
  },
];
