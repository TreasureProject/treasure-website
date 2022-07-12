export type CloudFlareEnvVar =
  | "NODE_ENV"
  | "GITHUB_API_TOKEN"
  | "PROXY_ENDPOINT"
  | "PREVIEW_SECRET";

export type CloudFlareEnv = {
  [key in CloudFlareEnvVar]: string;
};

export type Optional<T> = T | undefined;
