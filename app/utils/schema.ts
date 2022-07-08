import category from "./admin/category";
import post from "./admin/post";
import member from "./admin/member";
import { type WorkspaceOptions } from "sanity";
import { CONFIG } from "./sanity/config";
import { deskTool } from "sanity/lib/dts/src/desk";

const config = {
  basePath: "/admin",
  projectId: CONFIG.projectId,
  dataset: CONFIG.dataset,
  plugins: [deskTool()],
  name: "Treasure Blog",
  schema: {
    types: [post, member, category],
  },
} as WorkspaceOptions;

export default config;
