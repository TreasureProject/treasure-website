import type { CloudFlareEnv } from "~/types";
import { getClient } from "./getClient";
import { builder as postBuilder } from "../admin/post";
import { builder as categoryBuilder } from "../admin/category";

const getUniquePosts = <T>(posts: T): T => {
  const slugs = new Set();
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  return posts.filter((post) => {
    if (slugs.has(post.slug)) {
      return false;
    } else {
      slugs.add(post.slug);
      return true;
    }
  });
};

export async function getAllPostsForHome(preview: boolean, env: CloudFlareEnv) {
  const [query, type] = postBuilder
    .orderBy("publishedAt", "desc")
    .map((h) => ({
      date: h.publishedAt.use(),
      slug: h.slug.current.use(),
      coverImage: h.mainImage.use(),
      authorName: h.member.resolve("name").use(),
      authorRole: h.member.resolve("role").use(),
      authorImage: h.member.resolve("image").asset.resolve("url").use(),
      categories: h.categories.resolveIn("title").use(),
    }))
    .pick([
      "_id",
      "title",
      "subtitle",
      "date",
      "slug",
      "coverImage",
      "authorName",
      "authorRole",
      "authorImage",
      "categories",
    ])
    .use();

  const [categoryQuery, categoryType] = categoryBuilder.pick(["title"]).use();

  const client = getClient(preview, env);

  const [posts, categories] = await Promise.all([
    client.fetch<typeof type>(query),
    client.fetch<typeof categoryType>(categoryQuery),
  ]);

  return {
    posts: getUniquePosts<typeof type>(posts),
    categories,
    categoryQuery,
    query,
  };
}

export async function getPostAndMorePosts(
  slug: string,
  preview: boolean,
  env: CloudFlareEnv
) {
  const [postQuery, postType] = postBuilder
    .filter(`slug.current == '${slug}'`)
    .orderBy("_updatedAt", "desc")
    .map((h) => ({
      date: h.publishedAt.use(),
      slug: h.slug.current.use(),
      coverImage: h.mainImage.use(),
      authorName: h.member.resolve("name").use(),
      authorRole: h.member.resolve("role").use(),
      authorImage: h.member.resolve("image").asset.resolve("url").use(),
      timeToRead: "round(length(pt::text(body)) / 5)" as unknown as number,
    }))
    .pick([
      "_id",
      "title",
      "date",
      "slug",
      "coverImage",
      "authorName",
      "authorRole",
      "authorImage",
      "body",
      "timeToRead",
    ])
    .use();

  const [morePostsQuery, morePostsType] = postBuilder
    .filter(`slug.current != '${slug}'`)
    .orderBy("_updatedAt", "desc")
    .orderBy("publishedAt", "desc")
    .map((h) => ({
      date: h.publishedAt.use(),
      slug: h.slug.current.use(),
      coverImage: h.mainImage.use(),
      authorName: h.member.resolve("name").use(),
      authorImage: h.member.resolve("image").asset.resolve("url").use(),
    }))
    .pick([
      "_id",
      "title",
      "date",
      "slug",
      "coverImage",
      "authorName",
      "authorImage",
      "body",
    ])
    .select(0, 2)
    .use();

  const client = getClient(preview, env);

  const [posts, morePosts] = await Promise.all([
    client.fetch<typeof postType>(postQuery),
    client.fetch<typeof morePostsType>(morePostsQuery),
  ]);

  return { posts, morePosts: getUniquePosts(morePosts), query: postQuery };
}
