import slugify from "slugify";
import type {
  GetAllPostsQuery,
  GetPostQuery,
  NodeFragmentFragment,
} from "~/graphql/github.generated";
import TreasureLogo from "../../public/img/resources/treasure/logo-light.png";

export const decimalToTime = (minutes: number) =>
  `${
    minutes < 1
      ? `${Math.round(minutes * 60)} sec`
      : `${Math.round(minutes)} min`
  } read`;

export const unslugify = (slug: string) => {
  const result = slug.replace(/-/g, " ");
  return result.replace(/\w\S*/g, function (txt) {
    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
  });
};

export const normalize = (node: NodeFragmentFragment) => {
  if (node?.__typename === "Issue") {
    return {
      ...node,
      slug: slugify(node.title, { lower: true }),
      coverImage:
        node.bodyHTML.match(
          /https:\/\/user-images.githubusercontent.com\/[^"]+/g
        )?.[0] ?? TreasureLogo,
    };
  }
};

export const normalizePosts = (
  posts: GetAllPostsQuery | GetPostQuery,
  preview?: boolean
) => {
  const result = posts.search.nodes
    ?.filter((post) => {
      if (!preview && post?.__typename === "Issue") {
        const isPublished =
          post.labels?.edges?.some(
            (label) => label?.node?.name === "published"
          ) ?? false;

        return isPublished;
      }
      return post;
    })
    .map((node) => node && normalize(node));

  return result;
};
