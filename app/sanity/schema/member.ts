import { defineDocument } from "sanity-typed-queries";

const { document, member, builder } = defineDocument("member", {
  name: {
    type: "string",
    title: "Name",
    validation: (Rule) => Rule.required(),
  },
  image: {
    type: "image",
    title: "image",
    options: {
      hotspot: true,
    },
    validation: (Rule) => Rule.required(),
  },
  role: {
    type: "string",
    title: "Role",
    validation: (Rule) => Rule.required(),
  },
});

export { member, builder };

export default {
  ...document,
  preview: {
    select: {
      title: "name",
      media: "image",
    },
  },
};
