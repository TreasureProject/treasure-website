import { format } from "date-fns";

type ResponseT = {
  status: string;
  feed: {
    url: string;
    title: string;
    link: string;
    author: string;
    description: string;
    image: string;
  };
  items?: Items[] | null;
};

type Items = {
  title: string;
  pubDate: string;
  link: string;
  guid: string;
  author: string;
  thumbnail: string;
  description: string;
  content: string;
  categories?: (string | null)[] | null;
};

const stripeHtml = (html: string) => html.replace(/<[^>]+>/g, "").trim();

export const getPosts = async () => {
  try {
    const data: ResponseT = await (
      await fetch(
        "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@Treasure_DAO"
      )
    ).json();

    const items = data.items ?? [];

    return items.map((d) => ({
      ...d,
      pubDate: format(new Date(d.pubDate), "MMM dd"),
      description: stripeHtml(d.description),
    }));
  } catch (e) {
    if (e instanceof Error) {
      throw new Error(e.message);
    }
  }
};
