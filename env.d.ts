/// <reference types="vite/client" />
/// <reference types="@remix-run/node" />

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      readonly LOOP_ENDPOINT_ID: string;
    }
  }
}

export type {};
