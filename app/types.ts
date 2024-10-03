export type EnvVar = "SESSION_SECRET" | "LOOP_ENDPOINT_ID";

export type Env = {
  [key in EnvVar]: string;
};
