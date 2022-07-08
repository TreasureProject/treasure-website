import PicoSanity from "picosanity";
import type { CloudFlareEnv } from "../../types";
import type { PicoSanity as PicoSanityT } from "picosanity";
import { CONFIG } from "./config";

const client = new PicoSanity(CONFIG);

let previewClient: PicoSanityT | null = null;

export const getClient = (usePreview = false, env: CloudFlareEnv) => {
  if (!previewClient) {
    previewClient = new PicoSanity({
      ...CONFIG,
      token: env.SANITY_API_TOKEN ?? ``,
    });
  }

  return usePreview ? previewClient : client;
};
