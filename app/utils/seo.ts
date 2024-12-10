export function getSocialMetas({
  url,
  title = generateTitle(),
  description = "The decentralized game console. Discover the magic of play on Treasure.",
  keywords = "Treasure, games, web3 gaming, play to earn, P2E, NFT, DeFi, GameFi, community, DAO, TreasureDAO, crypto gaming, metaverse",
  image,
}: {
  image?: string;
  url: string;
  title?: string;
  description?: string;
  keywords?: string;
}) {
  return {
    title,
    description,
    keywords,
    image,
    "og:title": title,
    "og:description": description,
    "og:image": image,
    "og:type": "website",
    "og:site_name": "Treasure",
    "og:url": url,
    "twitter:card": image ? "summary_large_image" : "summary",
    "twitter:creator": "@Treasure_DAO",
    "twitter:site": "@Treasure_DAO",
    "twitter:title": title,
    "twitter:description": description,
    "twitter:image": image,
    "twitter:alt": title,
  };
}

export const genericImagePath = (origin: string, pathname: string) =>
  `${origin}/img/meta/${pathname}.jpg`;

function prettify(str: string) {
  return str.replace(/(-|^)([^-]?)/g, function (_, prep, letter) {
    return (prep && " ") + letter.toUpperCase();
  });
}

function removeStartingSlash(s: string) {
  return s.startsWith("/") ? s.slice(1) : s;
}

export function generateTitle(title?: string) {
  const prettifiedTitle = prettify(removeStartingSlash(title || ""));
  return prettifiedTitle !== ""
    ? `${prettifiedTitle} | Treasure`
    : "Treasure | Decentralized Game Console";
}

function removeTrailingSlash(s: string) {
  return s.endsWith("/") ? s.slice(0, -1) : s;
}

export function getUrl(requestInfo?: { origin: string; path: string }) {
  return removeTrailingSlash(
    `${requestInfo?.origin ?? "https://treasure.lol"}${requestInfo?.path ?? ""}`
  );
}
