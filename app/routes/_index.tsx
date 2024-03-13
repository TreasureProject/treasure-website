import type {
  ActionArgs,
  ActionFunction,
  HeadersFunction,
  LinksFunction,
} from "@remix-run/node";
import { json } from "@remix-run/node";
import { commonHeaders } from "~/utils/misc.server";
import { useTranslation } from "react-i18next";
import keenSliderCSS from "keen-slider/keen-slider.min.css";
import { NewLayout } from "~/components/new-landing/NewLayout";

import Hero from "~/components/new-landing/sections/Hero";
import Intro from "~/components/new-landing/sections/Intro";
import Partners from "~/components/new-landing/sections/Partners";
import Games from "~/components/new-landing/sections/Games";
import Ctas from "~/components/new-landing/sections/Ctas";
import Bridgeworld from "~/components/new-landing/sections/Bridgeworld";
import Platform from "~/components/new-landing/sections/Platform";
import BuildOnTreasure from "~/components/new-landing/sections/BuildOnTreasure";

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import swiperCSS from "swiper/css";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import swiperNavigationCSS from "swiper/css/navigation";

import { email, object, Output, parse, string, ValiError } from "valibot"; // 1.54 kB
import { useActionData } from "@remix-run/react";

export const headers: HeadersFunction = commonHeaders;

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: keenSliderCSS },
  { rel: "stylesheet", href: swiperCSS },
  { rel: "stylesheet", href: swiperNavigationCSS },
];

export const action = async ({ request }: ActionArgs) => {
  const formPayload = Object.fromEntries(await request.formData());

  const Schema = object({
    email: string([email()]),
    source: string(),
  });

  try {
    const parsed = parse(Schema, formPayload);

    const params = new URLSearchParams(parsed).toString();

    const res = await fetch(
      `https://app.loops.so/api/newsletter-form/${process.env.LOOP_ENDPOINT_ID}`,
      {
        method: "POST",
        body: params,
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      }
    );

    if (res.status === 200) {
      return json({ success: true });
    } else {
      throw new Error(`form not submitted ${res.status}`);
    }
  } catch (e) {
    if (e instanceof ValiError) {
      console.error(`form not submitted ${e}`);
      return json({ success: false, error: e.message });
    }
    return json({ success: false, error: (e as any).message as string });
  }
};

export default function Home() {
  const { t } = useTranslation("index", {
    keyPrefix: "index",
  });

  return (
    <NewLayout>
      <main className="bg-new-night-1300">
        <Hero />
        <Intro />
        <Partners />
        <Games />
        <Platform />
        <BuildOnTreasure />
        <Bridgeworld />
        <Ctas />
      </main>
    </NewLayout>
  );
}
