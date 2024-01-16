import React from "react";
import { PartnersBottom } from "../misc/Svgs";
import { partners } from "~/const";

const Partner = ({ partner }: { partner: (typeof partners)[number] }) => {
  return (
    <div
      key={partner.name}
      className="max-w-24 mx-2 flex h-24 w-max items-center  justify-center rounded-lg bg-new-ruby-1000 px-7 py-3 sm:mx-3 md:mx-4"
    >
      <img
        src={partner.image}
        alt={partner.name}
        className="h-full max-h-14 max-w-[160px] object-contain object-center"
      />
    </div>
  );
};

const Partners = () => {
  return (
    <div className="relative w-full bg-new-ruby-900 py-12">
      <PartnersBottom className="absolute  left-1/2 right-0 bottom-[1px] z-10 w-48 translate-y-[100%] -translate-x-1/2" />
      <div className="relative flex overflow-x-hidden">
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
    </div>
  );
};

export default Partners;
