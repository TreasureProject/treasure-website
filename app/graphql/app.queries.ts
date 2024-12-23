import gql from "graphql-tag";

const ITEMS_FRAGMENT = gql`
  fragment ItemsFragment on BlogPost {
    authorCollection(limit: 5) {
      items {
        name
        title
        twitterLink
        discordLink
        image {
          url
        }
      }
    }
    category
    title
    subtitle
    slug
    date
    keywords
    coverImage {
      url
    }
  }
`;

export const getAllBlogPosts = gql`
  ${ITEMS_FRAGMENT}
  query getAllBlogPosts($preview: Boolean!, $category: String) {
    blogPostCollection(
      where: { hidden: false, category: $category }
      order: date_DESC
      preview: $preview
    ) {
      total
      items {
        ...ItemsFragment
      }
    }
  }
`;

export const findBlogById = gql`
  query findBlogById($id: String!, $preview: Boolean!) {
    blogPost(id: $id, preview: $preview) {
      slug
    }
  }
`;

export const getBlogPost = gql`
  ${ITEMS_FRAGMENT}
  query getBlogPost($slug: String!, $preview: Boolean!) {
    blogPostCollection(where: { slug: $slug }, limit: 1, preview: $preview) {
      items {
        ...ItemsFragment
        text {
          json
          links {
            entries {
              block {
                ... on CodeBlock {
                  __typename
                  title
                  lang
                  code
                  sys {
                    id
                  }
                }
              }
            }
            assets {
              block {
                title
                url
                height
                width
                sys {
                  id
                }
              }
            }
          }
        }
      }
    }
  }
`;

export const additionalBlogPosts = gql`
  ${ITEMS_FRAGMENT}
  query additionalBlogPosts(
    $preview: Boolean!
    $category: String!
    $currentSlug: String!
  ) {
    blogPostCollection(
      where: { category: $category, slug_not: $currentSlug, hidden: false }
      limit: 3
      preview: $preview
    ) {
      items {
        ...ItemsFragment
      }
    }
  }
`;
