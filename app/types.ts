export type EnvVar = "LOOP_ENDPOINT_ID";

export type Env = {
  [key in EnvVar]: string;
};
