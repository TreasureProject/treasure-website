export type CloudFlareEnvVar =
  | "NODE_ENV"
  | "PROJECT_ID"
  | "SANITY_API_TOKEN"
  | "SANITY_PREVIEW_SECRET";

export type CloudFlareEnv = {
  [key in CloudFlareEnvVar]: string;
};

export type Optional<T> = T | undefined;
