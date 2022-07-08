import category from "./admin/category";
import post from "./admin/post";
import member from "./admin/member";
// import { deskTool } from "sanity/desk";
import { type WorkspaceOptions } from "sanity";
import { CONFIG } from "./sanity/config";

const config = {
  basePath: "/admin",
  projectId: CONFIG.projectId,
  dataset: CONFIG.dataset,
  plugins: [],
  name: "Treasure Blog",
  schema: {
    types: [post, member, category],
  },
} as WorkspaceOptions;

export default config;
