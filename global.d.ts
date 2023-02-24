export {};

declare global {
  /**
   * To make typescript stop complaining when trying to access window.env
   */
  interface Window {
    ENV: Partial<typeof process.env>;
  }

  namespace NodeJS {
    /**
     * Extend process.env with our custom environment variables.
     */
    interface ProcessEnv {
      NODE_ENV: "development" | "production" | "test";
      PREVIEW_SECRET: string;
      SANITY_READ_TOKEN: string;
      SANITY_PUBLIC_PROJECT_ID: string;
      SANITY_PUBLIC_DATASET: string;
      SANITY_PUBLIC_API_VERSION: string;
      PORT: string;
    }
  }
}
