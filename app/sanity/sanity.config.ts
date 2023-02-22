import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";

import schema from "~/sanity/schema";
import { projectDetails } from "./projectDetails";

export const config = defineConfig({
  ...projectDetails(),
  name: "sanity-remix",
  title: "Sanity Remix",
  plugins: [deskTool()],
  basePath: `/studio`,
  schema: {
    types: schema,
  },
});
