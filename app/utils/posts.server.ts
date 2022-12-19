import { format } from "date-fns";
import { XMLParser } from "fast-xml-parser";

const parser = new XMLParser();

const escapeHtml = (html: string) => html.replace(/<[^>]+>/g, "").trim();

const parse = async (url: string) => {
  const res = await fetch(url);

  const data = await res.text();

  const result = parser.parse(data);

  let channel =
    result.rss && result.rss.channel ? result.rss.channel : result.feed;
  if (Array.isArray(channel)) channel = channel[0];

  const rss = [];

  let items = channel.item || channel.entry;
  if (items && !Array.isArray(items)) items = [items];

  for (let i = 0; i < items.length; i++) {
    const val = items[i];

    const content =
      val.content && val.content.$text
        ? val.content.$text
        : val["content:encoded"];

    const obj: {
      title: string;
      link: string;
      author: string;
      published: string;
      content: string;
      thumbnail: string | null;
    } = {
      title: val.title && val.title.$text ? val.title.$text : val.title,
      link: val.link && val.link.href ? val.link.href : val.link,
      author:
        val.author && val.author.name ? val.author.name : val["dc:creator"],
      published: format(
        val.created
          ? Date.parse(val.created)
          : val.pubDate
          ? Date.parse(val.pubDate)
          : Date.now(),
        "MMM dd, yyyy"
      ),
      thumbnail:
        content.match(/https:\/\/cdn-images-1.medium.com\/[^"]+/g)?.[0] ?? null,
      content: escapeHtml(content),
    };

    rss.push(obj);
  }

  return rss;
};

export const getPosts = async () => {
  try {
    const data = await parse("https://medium.com/feed/@Treasure_DAO");

    return data;
  } catch (e) {
    if (e instanceof Error) {
      throw new Error(e.message);
    }
  }
};

export type Posts = Awaited<ReturnType<typeof getPosts>>;
