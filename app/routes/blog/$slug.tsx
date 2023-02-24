import type { LoaderFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import invariant from "tiny-invariant";
import { getPostAndMorePosts } from "~/sanity/api.server";

export const loader: LoaderFunction = async ({ request, params }) => {
  invariant(params.slug, "slug is required");

  const slug = params.slug;

  const { posts, morePosts, query } = await getPostAndMorePosts(slug, false);

  return json({
    posts,
  });
};
