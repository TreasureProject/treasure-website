import category from "./admin/category";
import post from "./admin/post";
import member from "./admin/member";
import { deskTool } from "sanity/desk";
import { type WorkspaceOptions } from "sanity";
import type { CloudFlareEnv } from "~/types";

const config = (env: Partial<CloudFlareEnv>): WorkspaceOptions => ({
  basePath: "/admin",
  projectId: env.PROJECT_ID ?? "",
  dataset: "production",
  plugins: [deskTool()],
  name: "Treasure Blog",
  schema: {
    types: [post, member, category],
  },
});

export default config;
