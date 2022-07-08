import PicoSanity from "picosanity";
import type { CloudFlareEnv } from "../../types";
import type { PicoSanity as PicoSanityT } from "picosanity";
import { CONFIG } from "./config";

let client: PicoSanityT | null = null;

let previewClient: PicoSanityT | null = null;

export const getClient = (usePreview = false, env: CloudFlareEnv) => {
  const config = {
    ...CONFIG,
    projectId: env.PROJECT_ID,
  };

  if (!client) {
    client = new PicoSanity(config);
  }

  if (!previewClient) {
    previewClient = new PicoSanity({
      ...config,
      token: env.SANITY_API_TOKEN ?? ``,
    });
  }

  return usePreview ? previewClient : client;
};
