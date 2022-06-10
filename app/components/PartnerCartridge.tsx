import type { CartridgeT } from "~/const";
import { DiscordIcon, TwitterIcon } from "./Icons";
import classNames from "clsx";
import { Badge } from "./Badge";

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
      "relative w-full shrink-0 overflow-hidden rounded-xl transition-transform duration-300 before:absolute before:right-0 before:bottom-0 before:left-0 before:h-96 before:bg-gradient-to-t before:from-night-900 before:via-transparent before:to-transparent before:transition-colors before:duration-500 hover:-translate-y-1 hover:shadow-inner before:hover:bg-night-900/30 motion-reduce:before:transition-none"
    )}
  >
    <img
      className="h-full w-full object-cover"
      alt={cartridge.name}
      src={cartridge.image}
    />
    <div className="absolute bottom-0 left-0 right-0 flex h-full flex-col items-center justify-center">
      <Badge
        name={cartridge.name}
        bgColor="bg-ruby-900"
        textColor="text-white"
      />
    </div>
    <div className="absolute bottom-0 left-0 right-0 mx-auto mb-6 mt-2 flex w-min items-center justify-center space-x-3 rounded-xl bg-night-900 p-2">
      <a
        className="text-night-600 hover:text-night-800"
        href={cartridge.discordLink}
        target="_blank"
        rel="noopener noreferrer"
      >
        <span className="sr-only">{cartridge.name} Discord Link</span>
        <DiscordIcon className="h-6 w-6" aria-hidden="true" />
      </a>
      <a
        className="text-night-600 hover:text-night-800"
        href={cartridge.twitterLink}
        target="_blank"
        rel="noopener noreferrer"
      >
        <span className="sr-only">{cartridge.name} Twitter Link</span>
        <TwitterIcon className="h-6 w-6" aria-hidden="true" />
      </a>
    </div>
  </div>
);
