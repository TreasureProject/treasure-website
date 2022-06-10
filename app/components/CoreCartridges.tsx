import { useState } from "react";
import BWTextSvg from "../../public/img/bridgeworld-text.svg";
import SmolverseTextSvg from "../../public/img/smolverse-text.svg";
import { DiscordIcon, TwitterIcon } from "./Icons";
import classNames from "clsx";
import { GlobeAltIcon } from "@heroicons/react/solid";

export const CoreCartridges = () => {
  const [hoveredCartridge, setHoveredCartridge] = useState<
    "smol" | "bw" | null
  >(null);

  console.log(hoveredCartridge);
  return (
    <div className="mt-12 flex flex-col justify-center xl:flex-row">
      <div
        className="group relative overflow-hidden md:flex md:items-end md:justify-center"
        onMouseOver={() => setHoveredCartridge("bw")}
        onMouseOut={() => setHoveredCartridge(null)}
      >
        <div
          className={classNames(
            hoveredCartridge === "smol" && "before:bg-night-800/75",
            "relative h-96 bg-[url('/img/bridgeworld.png')] bg-cover bg-no-repeat transition-transform duration-300 [mask-repeat:no-repeat] [mask-image:url('/img/union.svg')] [mask-size:contain] [mask-position:center] before:absolute before:right-0 before:bottom-0 before:left-0 before:h-96 before:bg-gradient-to-t before:from-night-900 before:via-transparent before:to-transparent before:transition-colors before:duration-500 before:group-hover:bg-night-800/50 peer-hover:bg-black/50 motion-reduce:before:transition-none md:h-[45rem] md:w-[34rem] md:[mask-image:url('/img/union-big.svg')] before:md:h-[45rem] xl:translate-y-4 group-hover:xl:translate-y-2"
          )}
        >
          <div className="absolute bottom-0 left-0 right-0 flex flex-col items-center justify-center pb-4 lg:pb-16">
            <img
              src={BWTextSvg}
              alt="Bridgeworld"
              className={classNames(
                hoveredCartridge === "smol" &&
                  "opacity-30 transition-all duration-500",
                "w-48 md:w-80"
              )}
            />
            <div className="mt-4 flex space-x-3 rounded-xl bg-night-900 p-2">
              <a
                className="text-night-600 hover:text-night-700"
                href="https://discord.gg/treasuredao"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="sr-only">Bridgeworld Discord Link</span>
                <DiscordIcon className="h-6 w-6" aria-hidden="true" />
              </a>
              <a
                className="text-night-600 hover:text-night-700"
                href="https://twitter.com/playbridgeworld"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="sr-only">Bridgeworld Twitter Link</span>
                <TwitterIcon className="h-6 w-6" aria-hidden="true" />
              </a>
              <a
                className="text-night-600 hover:text-night-800"
                href="https://bridgeworld.treasure.lol/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="sr-only">Bridgeworld Website Link</span>
                <GlobeAltIcon className="h-6 w-6" aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div
        className="group relative mt-20 overflow-hidden md:flex md:items-end md:justify-center xl:mt-0"
        onMouseOver={() => setHoveredCartridge("smol")}
        onMouseOut={() => setHoveredCartridge(null)}
      >
        <div
          className={classNames(
            hoveredCartridge === "bw" && "before:bg-night-800/75",
            "relative h-96 bg-[url('/img/smolverse.png')] bg-[length:400px_600px] bg-bottom bg-no-repeat transition-transform duration-300 [mask-repeat:no-repeat] [mask-image:url('/img/union.svg')] [mask-size:contain] [mask-position:center] before:absolute before:right-0 before:bottom-0 before:left-0 before:h-96 before:bg-gradient-to-t before:from-night-900 before:via-transparent before:to-transparent before:transition-colors before:duration-500 before:group-hover:bg-night-800/50 motion-reduce:before:transition-none sm:bg-[length:500px_850px] md:h-[45rem] md:w-[34rem] md:[mask-image:url('/img/union-big.svg')] before:md:h-[45rem] xl:translate-y-4 group-hover:xl:translate-y-2"
          )}
        >
          <div className="absolute bottom-0 left-0 right-0 flex flex-col items-center justify-center pb-4 lg:pb-16">
            <img
              src={SmolverseTextSvg}
              alt="Bridgeworld"
              className={classNames(
                hoveredCartridge === "bw" &&
                  "opacity-30 transition-all duration-500",
                "w-48 md:w-80"
              )}
            />
            <div className="mt-4 flex space-x-3 rounded-xl bg-night-900 p-2">
              <a
                className="text-night-600 hover:text-night-800"
                href="https://discord.gg/smolbrains"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="sr-only">Smolverse Discord Link</span>
                <DiscordIcon className="h-6 w-6" aria-hidden="true" />
              </a>
              <a
                className="text-night-600 hover:text-night-800"
                href="https://twitter.com/SmolBrainsNFT"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="sr-only">Smolverse Twitter Link</span>
                <TwitterIcon className="h-6 w-6" aria-hidden="true" />
              </a>
              <a
                className="text-night-600 hover:text-night-800"
                href="https://www.smolverse.lol/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="sr-only">Smolverse Website Link</span>
                <GlobeAltIcon className="h-6 w-6" aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
