import type {
  GetAllPostsQuery,
  GetPostQuery,
} from "~/graphql/github.generated";
import type { CloudFlareEnv } from "~/types";

export const getAllPosts = async (env: CloudFlareEnv) => {
  const res = await fetch(`${env.PROXY_ENDPOINT}/get-all-posts`);

  const posts = (await res.json()) as { data: GetAllPostsQuery };

  return posts;
};

export const getPost = async (title: string, env: CloudFlareEnv) => {
  const res = await fetch(`${env.PROXY_ENDPOINT}/post/${title}`);

  const post = (await res.json()) as { data: GetPostQuery };

  return post;
};
