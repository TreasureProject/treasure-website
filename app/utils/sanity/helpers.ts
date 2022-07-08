import imageUrlBuilder from "@sanity/image-url";
import type { SanityImageSource } from "@sanity/image-url/lib/types/types";
import type { CloudFlareEnv } from "~/types";
import { CONFIG } from "./config";

export const urlFor = (
  source: SanityImageSource,
  env: Partial<CloudFlareEnv> | undefined
) => {
  const config = {
    ...CONFIG,
    projectId: env?.PROJECT_ID ?? "",
  };

  return imageUrlBuilder(config).image(source);
};
