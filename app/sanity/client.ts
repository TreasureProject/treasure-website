import { createClient } from "@sanity/client";
import { projectDetails } from "./projectDetails";

export const client = createClient({
  ...projectDetails(),
  useCdn: true,
});

export const previewClient = createClient({
  ...projectDetails(),
  useCdn: false,
  token: process.env.SANITY_READ_TOKEN,
});

export const getClient = (previewMode = false) => {
  return previewMode ? previewClient : client;
};
