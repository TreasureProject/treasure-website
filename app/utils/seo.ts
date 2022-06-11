export function getSocialMetas({
  url,
  title = "Testing123",
  description = "testingdescription",
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

export function generateTitle(title?: string) {
  return title ? `${title} | Treasure DAO` : "Treasure DAO";
}

function removeTrailingSlash(s: string) {
  return s.endsWith("/") ? s.slice(0, -1) : s;
}

export function getUrl(requestInfo?: { origin: string; path: string }) {
  return removeTrailingSlash(
    `${requestInfo?.origin ?? "https://treasure.lol"}${requestInfo?.path ?? ""}`
  );
}
