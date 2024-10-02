import type {
  ActionFunction,
  HeadersFunction,
  LinksFunction,
} from "@remix-run/node";
import { json } from "@remix-run/node";
import keenSliderCSS from "keen-slider/keen-slider.min.css";
import swiperCSS from "swiper/swiper-bundle.css";
import { ValiError, email, object, parse, string } from "valibot";

import { NewLayout } from "~/components/new-landing/NewLayout";
import Bridgeworld from "~/components/new-landing/sections/Bridgeworld";
import BuildOnTreasure from "~/components/new-landing/sections/BuildOnTreasure";
import Ctas from "~/components/new-landing/sections/Ctas";
import Games from "~/components/new-landing/sections/Games";
import Hero from "~/components/new-landing/sections/Hero";
import Intro from "~/components/new-landing/sections/Intro";
import Partners from "~/components/new-landing/sections/Partners";
import Platform from "~/components/new-landing/sections/Platform";
import { commonHeaders } from "~/utils/misc.server";

export const headers: HeadersFunction = commonHeaders;

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: keenSliderCSS },
  { rel: "stylesheet", href: swiperCSS },
];

export const action: ActionFunction = async ({ request }) => {
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
      },
    );

    if (res.status === 200) {
      return json({ success: true });
    }
    throw new Error(`form not submitted ${res.status}`);
  } catch (e) {
    if (e instanceof ValiError) {
      console.error(`form not submitted ${e}`);
      return json({ success: false, error: e.message });
    }
    return json({ success: false, error: (e as Error).message as string });
  }
};

export default function Home() {
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
