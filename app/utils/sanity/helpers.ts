import imageUrlBuilder from "@sanity/image-url";
import type { SanityImageSource } from "@sanity/image-url/lib/types/types";
import { CONFIG } from "./config";

export const urlFor = (source: SanityImageSource) => {
  return imageUrlBuilder(CONFIG).image(source);
};
