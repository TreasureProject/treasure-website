export function getSocialMetas({
  url,
  title = "Treasure",
  description = "Treasure is the decentralized video game console connecting games and communities together through imagination, $MAGIC, and NFTs.",
  origin,
  imgPath,
  image = origin + "/img/meta" + imgPath + ".jpg",
  keywords = "",
}: {
  origin: string;
  image?: string;
  url: string;
  title?: string;
  imgPath: string;
  description?: string;
  keywords?: string;
}) {
  return {
    title,
    description,
    keywords,
    image,
    "og:url": url,
    "og:title": title,
    "og:description": description,
    "og:image": image,
    "twitter:card": image ? "summary_large_image" : "summary",
    "twitter:creator": "@Treasure_DAO",
    "twitter:site": "@Treasure_DAO",
    "twitter:title": title,
    "twitter:description": description,
    "twitter:image": image,
    "twitter:alt": title,
  };
}

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
    : "Treasure - The Decentralized Game Console";
}

function removeTrailingSlash(s: string) {
  return s.endsWith("/") ? s.slice(0, -1) : s;
}

export function getUrl(requestInfo?: { origin: string; path: string }) {
  return removeTrailingSlash(
    `${requestInfo?.origin ?? "https://treasure.lol"}${requestInfo?.path ?? ""}`
  );
}
