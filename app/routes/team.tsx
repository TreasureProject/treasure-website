import { Badge } from "~/components/Badge";
import { CTAButton } from "~/components/Button";
import { TwitterIcon } from "~/components/Icons";

const TeamCard = () => {
  return (
    <div className="border-2 border-honey-300 bg-honey-50 px-9 py-8">
      <img
        className="w-full object-contain"
        src="https://via.placeholder.com/150"
        alt="Test"
      />
      <div className="mt-7 space-y-2 text-center">
        <p className="text-black-900 font-mono text-3xl font-semibold">t1dev</p>
        <div className="inline-block rounded-1.5xl bg-honey-100 px-4 py-2.5">
          <h3 className="font-mono font-medium text-ruby-900">
            Economist | Product, Bridgeworld
          </h3>
        </div>
      </div>
      <div className="mt-7 flex justify-center">
        <TwitterIcon className="h-8 w-8 text-twitter" />
      </div>
    </div>
  );
};

export default function Team() {
  return (
    <main>
      <div className="relative bg-honey-200 py-16 sm:py-24">
        <div className="mx-auto max-w-md px-8 text-center sm:max-w-xl sm:px-6 lg:px-12">
          <Badge name="Contributors" bgColor="bg-honey-100" />
          <h2 className="mt-12 text-center text-3xl font-bold tracking-tight text-ruby-900 sm:text-5xl">
            Meet the builders behind TreasureDAO
          </h2>
        </div>
        <div className="mx-auto mt-16 max-w-sm px-4 text-center sm:max-w-5xl sm:px-8 lg:px-20">
          <div className="space-y-4 rounded-2.5xl border-2 border-honey-300 bg-honey-50 p-14 text-xl text-night-700">
            <p>
              We are a collective of seasoned builders growing the expansive
              platform and decentralized game console that is Treasure.{" "}
            </p>

            <p>
              With many members joining directly from the community, Treasure
              comprises a globally distributed team of developers, product
              managers, artists and designers, marketers, and economists. All
              supported by a wealth of DAO contributors and passionate community
              members.
            </p>
          </div>
        </div>
      </div>
      <div className="relative bg-honey-100 py-16 sm:py-24">
        <div className="mx-auto max-w-3xl px-8 sm:px-6 lg:max-w-8xl lg:px-12">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-4">
            {Array.from({ length: 25 }).map((_, i) => (
              <TeamCard key={i} />
            ))}
          </div>
        </div>
      </div>
      <div className="relative bg-honey-200 py-16 sm:py-24">
        <div className="mx-auto max-w-3xl px-8 sm:px-6 lg:max-w-9xl lg:px-12">
          <div className="grid auto-rows-[12rem] grid-cols-1 rounded-2.5xl border-2 border-honey-300 bg-honey-100 p-6 sm:grid-cols-7 sm:p-10 xl:auto-rows-[28rem]">
            <div className="order-1 col-span-4 flex flex-col justify-center space-y-4 px-4 sm:space-y-6 sm:px-14 xl:space-y-8 xl:px-28">
              <p className="text-lg font-semibold text-ruby-900 sm:text-2xl xl:text-4xl">
                Join the team
              </p>
              <p className="text-xs text-night-700 sm:text-base lg:text-lg xl:text-2xl">
                Building a cartridge on Treasure and MAGIC? Apply to become a
                partner cartridge today.
              </p>
              <div>
                <CTAButton>See roles</CTAButton>
              </div>
            </div>
            <div className="-order-1 col-span-3 overflow-hidden rounded-xl md:order-2">
              <img
                className="h-full w-full object-cover"
                src="/img/bridgeworld-legions.jpeg"
                alt=""
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
    href: "/team",
    title: "Team",
  },
};
