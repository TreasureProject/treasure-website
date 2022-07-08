import PicoSanity from "picosanity";
import type { CloudFlareEnv } from "../../types";
import type { PicoSanity as PicoSanityT } from "picosanity";
import { CONFIG } from "./config";

export const getClient = (usePreview = false, env: CloudFlareEnv) => {
  const client = new PicoSanity(CONFIG);

  const previewClient = new PicoSanity({
    ...CONFIG,
    token: env.SANITY_API_TOKEN ?? ``,
  });

  return usePreview ? previewClient : client;
};
