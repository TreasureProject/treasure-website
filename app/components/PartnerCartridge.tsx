import type { CartridgeT } from "~/const";
import classNames from "clsx";
import { Badge } from "./Badge";
import { GlobeAltIcon } from "@heroicons/react/24/solid";

export const PartnerCartridge = ({
  cartridge,
  className,
}: {
  cartridge: CartridgeT;
  className?: string;
}) => (
  <div
    className={classNames(
      className,
      "partner-hover-target relative w-full shrink-0 overflow-hidden rounded-xl transition-transform duration-300 before:absolute before:right-0 before:bottom-0 before:left-0 before:h-96 before:bg-gradient-to-t before:from-night-900 before:via-transparent before:to-transparent before:transition-colors before:duration-500 hover:shadow-inner motion-reduce:before:transition-none xl:translate-y-2 hover:xl:translate-y-0"
    )}
  >
    <img
      className="h-full w-full object-cover"
      alt={cartridge.name}
      src={cartridge.image}
    />
    <div>
      <div className="absolute bottom-0 left-0 right-0 flex h-full flex-col items-center justify-center">
        <a
          className="text-night-600 hover:text-night-700"
          href={cartridge.websiteLink}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Badge
            name={cartridge.name}
            bgColor="bg-ruby-900"
            textColor="text-white"
          />
        </a>
      </div>
      <div className="absolute bottom-0 left-0 right-0 mx-auto mb-6 mt-2 flex w-min items-center justify-center space-x-3 rounded-xl bg-night-900 p-2">
        <a
          className="text-night-600 hover:text-night-700"
          href={cartridge.websiteLink}
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="sr-only">{cartridge.name} Website Link</span>
          <GlobeAltIcon className="h-6 w-6" aria-hidden="true" />
        </a>
      </div>
    </div>
  </div>
);
