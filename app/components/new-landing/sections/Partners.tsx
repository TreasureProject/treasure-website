import React from "react";
import { PartnersBottom } from "../misc/Svgs";

const Partners = () => {
  return (
    <div className="relative w-full bg-new-ruby-900 py-4">
      <PartnersBottom className="absolute  left-1/2 right-0 bottom-[1px] z-10 w-48 translate-y-[100%] -translate-x-1/2" />
      {/* <div className="relative flex overflow-x-hidden">
        <div className="flex animate-marquee whitespace-nowrap">
          {partners.map((partner) => (
            <Partner partner={partner} key={partner.name} />
          ))}
        </div>
        <div className="absolute top-0 flex animate-marquee2 whitespace-nowrap">
          {partners.map((partner) => (
            <Partner partner={partner} key={partner.name} />
          ))}
        </div>
      </div> */}
    </div>
  );
};

export default Partners;
