import type { HeadersFunction, LinksFunction } from "@remix-run/node";
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
import Chain from "~/components/new-landing/sections/Chain";
import Platform from "~/components/new-landing/sections/Platform";
import BuildOnTreasure from "~/components/new-landing/sections/BuildOnTreasure";

import swiperCSS from "swiper/css";
import swiperNavigationCSS from "swiper/css/navigation";

export const headers: HeadersFunction = commonHeaders;

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: keenSliderCSS },
  { rel: "stylesheet", href: swiperCSS },
  { rel: "stylesheet", href: swiperNavigationCSS },
];

export default function Home() {
  const { t } = useTranslation("index", {
    keyPrefix: "index",
  });

  return (
    <NewLayout>
      <main className="bg-new-night-1300 ">
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
