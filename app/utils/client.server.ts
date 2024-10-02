import { GraphQLClient } from "graphql-request";

import { getSdk as getExchangeSdk } from "~/graphql/app.generated";

// contentful API
export const contenfulDeliverySdk = (preview = false) =>
  getExchangeSdk(
    new GraphQLClient(process.env.CONTENTFUL_ENDPOINT as string, {
      headers: {
        Authorization: `Bearer ${
          preview
            ? process.env.CONTENTFUL_DELIVERY_PREVIEW_TOKEN
            : process.env.CONTENTFUL_DELIVERY_TOKEN
        }`,
      },
    })
  );
