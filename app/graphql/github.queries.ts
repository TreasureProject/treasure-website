import gql from "graphql-tag";

const NodeFragment = gql`
  fragment NodeFragment on Node {
    ... on Issue {
      title
      bodyHTML
      bodyText
      updatedAt
      createdAt
      author {
        avatarUrl
        login
      }
      labels(first: 100) {
        edges {
          node {
            name
          }
        }
      }
    }
  }
`;

export const getPost = gql`
  ${NodeFragment}
  query GetPost($query: String!) {
    search(query: $query, type: ISSUE, first: 100) {
      nodes {
        ...NodeFragment
      }
    }
  }
`;

export const getAllPosts = gql`
  ${NodeFragment}

  query GetAllPosts {
    search(
      query: "repo:TreasureProject/treasure-new-website label:post"
      type: ISSUE
      first: 100
    ) {
      nodes {
        ...NodeFragment
      }
    }
  }
`;
