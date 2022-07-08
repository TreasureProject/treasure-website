import { defineDocument } from "sanity-typed-queries";

const { document, category, builder } = defineDocument("category", {
  title: {
    type: "string",
    title: "Title",
    validation: (Rule) => Rule.required(),
  },
});

export { category, builder };

export default document;
