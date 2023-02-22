import { defineDocument } from "sanity-typed-queries";
import { category } from "./category";
import { member } from "./member";

const { document, builder, post } = defineDocument(
  "post",
  {
    title: {
      type: "string",
      title: "Title",
      validation: (Rule) => Rule.required().max(100),
    },
    subtitle: {
      type: "string",
      title: "Subtitle",
      validation: (Rule) => Rule.required().max(100),
    },
    slug: {
      type: "slug",
      title: "Slug",
      description: "Used in the URL for the post",
      options: {
        source: "title",
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    },
    member: {
      type: "reference",
      title: "Member",
      to: [{ type: "member" }],
      validation: (Rule) => Rule.required(),
    },
    mainImage: {
      type: "image",
      title: "Main image",
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: "caption",
          type: "string",
          title: "Caption",
        },
      ],
      validation: (Rule) => Rule.required(),
    },
    categories: {
      type: "array",
      title: "Categories",
      of: [
        {
          type: "reference",
          to: [{ type: "category" }],
        },
      ],
      validation: (Rule) => Rule.required(),
    },
    publishedAt: {
      type: "datetime",
      title: "Published at",
      validation: (Rule) => Rule.required(),
    },
    body: {
      type: "array",
      title: "Body",
      of: [
        {
          type: "block",
          title: "Block",
          styles: [
            { title: "Normal", value: "normal" },
            { title: "H1", value: "h1" },
            { title: "H2", value: "h2" },
            { title: "H3", value: "h3" },
            { title: "H4", value: "h4" },
            { title: "Quote", value: "blockquote" },
          ],
          lists: [
            { title: "Bullet", value: "bullet" },
            {
              title: "Number",
              value: "number",
            },
          ],
          marks: {
            decorators: [
              { title: "Strong", value: "strong" },
              { title: "Emphasis", value: "em" },
            ],
            annotations: [
              {
                title: "URL",
                name: "link",
                type: "object",
                fields: [
                  {
                    title: "URL",
                    name: "href",
                    type: "url",
                  },
                ],
              },
            ],
          },
        },
        {
          type: "image",
          options: { hotspot: true },
          fields: [
            {
              name: "caption",
              type: "string",
              title: "Caption",
            },
          ],
        },
      ],
      validation: (Rule) => Rule.required(),
    },
  },
  [member, category]
);

export { builder, post };

export default document;
