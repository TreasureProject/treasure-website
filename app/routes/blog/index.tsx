import type { LoaderFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import { getAllPostsForHome } from "~/sanity/api.server";

export const loader: LoaderFunction = async ({ request }) => {
  const posts = await getAllPostsForHome(false);

  return json({
    data: posts,
  });
};
