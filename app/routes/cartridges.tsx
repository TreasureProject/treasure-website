import { Badge } from "~/components/Badge";
import { CTAButton } from "~/components/Button";
import { CoreCartridges } from "~/components/CoreCartridges";
import { PartnerCartridge } from "~/components/PartnerCartridge";
import { partnerCartridges } from "~/const";
import BecomeAPartnerImg from "../../public/img/BecomeAPartner.png";

import type { HeadersFunction, MetaFunction } from "@remix-run/cloudflare";
import type { RootLoaderData } from "~/root";
import { generateTitle, getSocialMetas, getUrl } from "~/utils/seo";
import { commonHeaders } from "~/utils/misc.server";

export const meta: MetaFunction = ({ parentsData }) => {
  const {
    root: { requestInfo },
  } = parentsData as {
    root: RootLoaderData;
  };

  return {
    ...getSocialMetas({
      description:
        "Treasure is the decentralized video game console connecting games and communities together through imagination, $MAGIC, and NFTs.",
      keywords: "treasure, NFT, DeFi, games, community, imagination, magic",
      title: generateTitle("/cartridges"),
      origin: requestInfo.origin,
      url: getUrl(requestInfo),
      imgPath: "/cartridges",
    }),
  };
};

export const headers: HeadersFunction = commonHeaders;

export default function Cartridges() {
  return (
    <main>
      <div className="relative bg-night-900 py-16 sm:py-24">
        <div className="mx-auto max-w-md px-4 text-center sm:max-w-3xl sm:px-6 lg:max-w-8xl lg:px-12">
          <Badge
            name="Core Cartridges"
            bgColor="bg-night-800"
            textColor="text-night-200"
          />
          <h2 className="mx-auto mt-12 max-w-xl text-3xl font-bold tracking-tight text-honey-200 sm:text-5xl">
            Games and worlds that delight the masses
          </h2>
          <div className="mt-20">
            <CoreCartridges />
          </div>
        </div>
      </div>
      <div className="relative bg-night-900 py-16 sm:py-24">
        <div className="mx-auto max-w-md px-4 text-center sm:max-w-3xl sm:px-6 lg:max-w-9xl lg:px-12">
          <div className="inline-block rounded-1.9xl bg-night-800 px-3 py-2">
            <h2 className="font-mono text-base font-medium text-night-200">
              Partner Cartridges
            </h2>
          </div>
          <div className="mx-auto mt-14 max-w-sm px-4 text-center sm:max-w-3xl sm:px-28 lg:px-20">
            <div className="rounded-2.5xl border-2 border-night-800 bg-[#131D2E] p-14">
              <p className="text-sm text-night-600 sm:text-xl">
                Treasure’s grassroots formation has already inspired dozens of
                community-led projects to launch and integrate MAGIC. We are
                proud to be home to a thriving ecosystem that comprises a wide
                spectrum of builders – professional game studios, seasoned
                developers, and hobbyists.
              </p>
            </div>
          </div>
          <div className="parter-cartridge-container mt-12 grid auto-rows-[200px] grid-cols-1 gap-8 px-4 sm:mt-[7.5rem] sm:auto-rows-[300px] xl:grid-cols-3 xl:px-0">
            {partnerCartridges.map((cartridge) => (
              <PartnerCartridge cartridge={cartridge} key={cartridge.name} />
            ))}
          </div>
        </div>
      </div>
      <div className="relative bg-night-900 py-16 sm:py-24">
        <div className="mx-auto max-w-3xl px-8 sm:px-6 lg:max-w-9xl lg:px-12">
          <div className="mt-12 grid auto-rows-[12rem] grid-cols-1 rounded-2.5xl border-2 border-night-800 p-6 [background:linear-gradient(0deg,#131D2E,#131D2E),#101827] sm:grid-cols-7 sm:p-10 xl:auto-rows-[28rem]">
            <div className="order-1 col-span-4 flex flex-col justify-center space-y-4 px-4 sm:space-y-6 sm:px-14 xl:space-y-8 xl:px-28">
              <p className="text-lg font-semibold text-honey-200 sm:text-2xl xl:text-4xl">
                Become a Partner
              </p>
              <p className="text-xs text-night-500 sm:text-base lg:text-lg xl:text-2xl">
                Building a cartridge on Treasure and MAGIC? Apply to become a
                partner cartridge today.
              </p>
              <div>
                <CTAButton href="https://docs.google.com/forms/d/e/1FAIpQLSe_4Luv3wXGli-mR3GB-eOyjEU47r61qsjfDvBKISEggafz4Q/viewform">
                  Apply here
                </CTAButton>
              </div>
            </div>
            <div className="-order-1 col-span-3 overflow-hidden rounded-xl md:order-2">
              <img
                className="h-full w-full object-cover"
                src={BecomeAPartnerImg}
                alt="Become a Partner"
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export const handle = {
  breadcrumb: {
    href: "/cartridges",
    title: "Cartridges",
  },
};
