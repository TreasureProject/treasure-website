import type { HeadersFunction, MetaFunction } from "@remix-run/node";

import GetMagicImg from "@/img/illustrations/get-magic.webp";
import JoinCommunityImg from "@/img/illustrations/join-community.webp";

import { Badge } from "~/components/Badge";
import { CTAButton } from "~/components/Button";
import { Card } from "~/components/Card";
import { MagicIcon } from "~/components/Icons";
import { Layout } from "~/components/Layout";
import { TreasureStats } from "~/components/TreasureStats";
import { socials } from "~/const";
import { useAppContext } from "~/context/App";
import type { RootLoaderData } from "~/root";
import { commonHeaders } from "~/utils/misc.server";
import {
  generateTitle,
  genericImagePath,
  getSocialMetas,
  getUrl,
} from "~/utils/seo";

export const meta: MetaFunction = ({ matches }) => {
  const rootLoaderData = matches[0]?.data as RootLoaderData | undefined;
  return getSocialMetas({
    title: generateTitle("/about"),
    url: getUrl(rootLoaderData?.origin, rootLoaderData?.path),
    image: genericImagePath(rootLoaderData?.origin, "about"),
  });
};

export const headers: HeadersFunction = commonHeaders;

export default function About() {
  const { openModal } = useAppContext();
  return (
    <Layout>
      <div className="relative bg-night-900 py-16 pt-32 sm:py-24 sm:pt-48">
        <div className="mx-auto max-w-md px-8 text-center sm:max-w-5xl sm:px-6 lg:px-12">
          <Badge
            name="About Treasure"
            bgColor="bg-night-800"
            textColor="text-night-200"
          />
          <h2 className="mt-12 font-bold text-3xl text-honey-200 tracking-tight sm:text-5xl">
            The decentralized game console
          </h2>
        </div>
        <div className="mx-auto mt-16 max-w-sm px-4 text-center sm:max-w-4xl sm:px-8 lg:px-20">
          <div className="rounded-2xl border-2 border-night-800 px-4 py-20 sm:p-20">
            <p className="font-bold text-base text-night-500 sm:text-2xl">
              Treasure is building the decentralized game console to bring games
              and IP born out of web3 into the mainstream.
            </p>
            <ol className="mt-24 list-none space-y-20 text-gray-500 text-sm [counter-reset:line] sm:mt-10 sm:ml-12 sm:space-y-4 sm:text-lg">
              <li className="before:-top-14 before:![content:counter(line)] before:sm:-left-16 relative text-center before:absolute before:right-0 before:left-0 before:mx-auto before:inline-flex before:h-8 before:w-8 before:items-center before:justify-center before:rounded-full before:bg-ruby-900 before:p-2.5 before:text-honey-300 before:tabular-nums sm:text-left before:sm:top-1.5 before:sm:mx-0 before:sm:h-10 before:sm:w-10 before:[counter-increment:line]">
                <span className="font-bold text-honey-50">Games:</span> Games
                built from the ground up by Treasure and seasoned builders, all
                connected by MAGIC.
              </li>
              <li className="before:-top-14 before:![content:counter(line)] before:sm:-left-16 relative text-center before:absolute before:right-0 before:left-0 before:mx-auto before:inline-flex before:h-8 before:w-8 before:items-center before:justify-center before:rounded-full before:bg-ruby-900 before:p-2.5 before:text-honey-300 before:tabular-nums sm:text-left before:sm:top-1.5 before:sm:mx-0 before:sm:h-10 before:sm:w-10 before:[counter-increment:line]">
                <span className="font-bold text-honey-50">Community:</span>{" "}
                Composite of many smaller communities, connected through lore,
                guilds, resources, and MAGIC.
              </li>
              <li className="before:-top-14 before:![content:counter(line)] before:sm:-left-16 relative text-center before:absolute before:right-0 before:left-0 before:mx-auto before:inline-flex before:h-8 before:w-8 before:items-center before:justify-center before:rounded-full before:bg-ruby-900 before:p-2.5 before:text-honey-300 before:tabular-nums sm:text-left before:sm:top-1.5 before:sm:mx-0 before:sm:h-10 before:sm:w-10 before:[counter-increment:line]">
                <span className="font-bold text-honey-50">Infrastructure:</span>{" "}
                Decentralized infrastructure and tooling that arms builders and
                game makers to bring their imagination to life.
              </li>
            </ol>
            <p className="mt-10 px-4 font-bold text-honey-200 text-sm sm:text-xl">
              All connected by:
            </p>
            <div className="mx-auto mt-10 block w-full rounded-tag bg-night-800 px-2.5 py-3 sm:w-max sm:py-1.5">
              <h3 className="flex items-center justify-center space-x-2 font-bold text-sm text-white sm:text-lg">
                <MagicIcon />
                <span>which powers everything</span>
              </h3>
            </div>
          </div>
        </div>
      </div>
      <TreasureStats type="secondary" />
      <section
        id="info"
        aria-labelledby="other-information"
        className="relative bg-honey-100 py-16"
      >
        <div className="mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:max-w-9xl lg:px-12">
          <div className="grid auto-rows-[15rem] grid-cols-1 gap-10 sm:auto-rows-[20rem] xl:grid-cols-3">
            <div className="relative flex flex-col justify-between overflow-hidden rounded-2.5xl border-2 border-honey-300 bg-[linear-gradient(to_right,#101827ed_30%,#10182790),url('/img/bg-hero.jpg')] bg-center bg-cover bg-honey-50 bg-no-repeat p-10">
              <div className="space-y-2.5">
                <p className="font-bold text-2xl text-honey-100 lg:text-3xl 2xl:text-4xl">
                  Build with Treasure
                </p>
                <p className="text-night-100 text-sm sm:text-base lg:text-lg">
                  Apply to join Treasure's Builders Program to supercharge your
                  project.
                </p>
              </div>
              <div className="mt-8">
                <CTAButton
                  as="a"
                  href="https://treasure.deform.cc/ecosystem-application"
                >
                  Start building
                </CTAButton>
              </div>
            </div>
            <Card
              title="Get MAGIC"
              description="Our token MAGIC is your way to discover and access the Treasure ecosystem."
              image={GetMagicImg}
            >
              <CTAButton as="button" onClick={openModal} type="primary">
                Get MAGIC
              </CTAButton>
            </Card>
            <Card
              title="Join the community"
              description="Become a member of Treasure's vibrant community!"
              image={JoinCommunityImg}
            >
              <div className="flex space-x-6">
                {socials.map((social) => (
                  <a
                    key={social.name}
                    className="text-night-800 hover:text-night-900"
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="sr-only">{social.name}</span>
                    <social.icon
                      className="h-6 w-6 sm:h-8 sm:w-8"
                      aria-hidden="true"
                    />
                  </a>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </section>
    </Layout>
  );
}

export const handle = {
  breadcrumb: {
    href: "/about",
    title: "About",
  },
};
