import { partners } from "~/const";
import { Badge } from "./Badge";

const Partner = ({ partner }: { partner: (typeof partners)[number] }) => {
  return (
    <div
      key={partner.name}
      className="mx-4 flex w-56 items-center justify-center rounded-[15px] bg-black/25 px-7 py-3"
    >
      <img src={partner.image} alt={partner.name} />
    </div>
  );
};
export const Partners = () => {
  return (
    <section
      id="partners"
      aria-labelledby="partners-list"
      className="relative bg-night-900 py-16 sm:py-24"
    >
      <div className="mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:max-w-9xl lg:px-12">
        <div className="flex flex-col-reverse items-center sm:flex-row sm:items-start sm:justify-between">
          <p className="mt-12 max-w-lg text-center text-2xl font-bold text-honey-200 sm:mt-0 sm:text-left sm:text-4xl">
            An evergrowing roster of partners and supporters
          </p>
          <Badge
            name="Partners"
            bgColor="bg-night-800"
            textColor="text-night-200"
          />
        </div>
      </div>
      <div className="relative mt-12 flex overflow-x-hidden [-webkit-mask-image:linear-gradient(to_right,#0000,#000_30%,#000_70%,#0000)] sm:mt-24">
        <div className="flex animate-marquee whitespace-nowrap">
          {partners.map((partner) => (
            <Partner partner={partner} key={partner.name} />
          ))}
        </div>
        {/* Needed for infinity loop */}
        <div className="absolute top-0 flex animate-marquee2 whitespace-nowrap">
          {partners.map((partner) => (
            <Partner partner={partner} key={partner.name} />
          ))}
        </div>
      </div>
    </section>
  );
};
