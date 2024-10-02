import type { MetaDescriptor } from "@remix-run/node";

export function getSocialMetas({
  url,
  title = generateTitle(),
  description = "Treasure is building a gaming and entertainment powerhouse, built and owned by all.",
  keywords = "Treasure, gaming, games, web3, NFT, DeFi, GameFi, community, DAO, TreasureDAO",
  image,
}: {
  image?: string;
  url: string;
  title?: string;
  description?: string;
  keywords?: string;
}): MetaDescriptor[] {
  return [
    { title },
    { name: "description", content: description },
    { name: "keywords", content: keywords },
    { name: "image", content: image },
    { property: "og:url", content: url },
    { property: "og:title", content: title },
    { property: "og:description", content: description },
    { property: "og:image", content: image },
    {
      property: "twitter:card",
      content: image ? "summary_large_image" : "summary",
    },
    { property: "twitter:creator", content: "@Treasure_DAO" },
    { property: "twitter:site", content: "@Treasure_DAO" },
    { property: "twitter:title", content: title },
    { property: "twitter:description", content: description },
    { property: "twitter:image", content: image },
    { property: "twitter:alt", content: title },
  ];
}

export const genericImagePath = (
  origin = "https://treasure.lol",
  pathname = "home",
) => `${origin}/img/meta/${pathname}.jpg`;

function prettify(str: string) {
  return str.replace(
    /(-|^)([^-]?)/g,
    (_, prep, letter) => (prep && " ") + letter.toUpperCase(),
  );
}

function removeStartingSlash(s: string) {
  return s.startsWith("/") ? s.slice(1) : s;
}

export function generateTitle(title?: string) {
  const prettifiedTitle = prettify(removeStartingSlash(title || ""));
  return prettifiedTitle !== ""
    ? `${prettifiedTitle} | Treasure`
    : "Treasure | The Decentralized Gaming Ecosystem";
}

function removeTrailingSlash(s: string) {
  return s.endsWith("/") ? s.slice(0, -1) : s;
}

export function getUrl(origin = "https://treasure.lol", path = "") {
  return removeTrailingSlash(origin + path);
}
