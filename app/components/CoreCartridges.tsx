import BWTextSvg from "../../public/img/bridgeworld-text.svg";
import SmolverseTextSvg from "../../public/img/smolverse-text.svg";
import { DiscordIcon, TwitterIcon } from "./Icons";

export const CoreCartridges = () => (
  <div className="mt-12 flex flex-col justify-center xl:flex-row">
    <div className="group relative overflow-hidden md:flex md:justify-center">
      <div className="relative h-96 bg-[url('/img/bridgeworld.png')] bg-cover bg-no-repeat [mask-repeat:no-repeat] [mask-image:url('/img/union.svg')] [mask-size:contain] [mask-position:center] before:absolute before:right-0 before:bottom-0 before:left-0 before:h-96 before:bg-gradient-to-t before:from-night-900 before:via-transparent before:to-transparent before:transition-colors before:duration-500 before:group-hover:bg-night-800/50 motion-reduce:before:transition-none md:h-[46rem] md:w-[34rem] md:[mask-image:url('/img/union-big.svg')] before:md:h-[46rem]">
        <div className="absolute bottom-0 left-0 right-0 flex flex-col items-center justify-center pb-4 lg:pb-16">
          <img src={BWTextSvg} alt="Bridgeworld" className="w-48 md:w-80" />
          <div className="mt-2 flex space-x-3 rounded-xl bg-night-900 p-2">
            <a
              className="text-night-600 hover:text-night-700"
              href="#"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="sr-only">Bridgeworld Discord Link</span>
              <DiscordIcon className="h-6 w-6" aria-hidden="true" />
            </a>
            <a
              className="text-night-600 hover:text-night-700"
              href="#"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="sr-only">Bridgeworld Twitter Link</span>
              <TwitterIcon className="h-6 w-6" aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
    </div>
    <div className="group relative mt-20 overflow-hidden md:flex md:justify-center xl:mt-0">
      <div className="relative h-96 bg-[url('/img/smolverse.png')] bg-[length:550px_750px] bg-bottom bg-no-repeat [mask-repeat:no-repeat] [mask-image:url('/img/union.svg')] [mask-size:contain] [mask-position:center] before:absolute before:right-0 before:bottom-0 before:left-0 before:h-96 before:bg-gradient-to-t before:from-night-900 before:via-transparent before:to-transparent before:transition-colors before:duration-500 before:group-hover:bg-night-800/50 motion-reduce:before:transition-none md:h-[46rem] md:w-[34rem] md:[mask-image:url('/img/union-big.svg')] before:md:h-[46rem]">
        <div className="absolute bottom-0 left-0 right-0 flex flex-col items-center justify-center pb-4 lg:pb-16">
          <img
            src={SmolverseTextSvg}
            alt="Bridgeworld"
            className="w-48 md:w-80"
          />
          <div className="mt-2 flex space-x-3 rounded-xl bg-night-900 p-2">
            <a
              className="text-night-600 hover:text-night-800"
              href="#"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="sr-only">Smolverse Discord Link</span>
              <DiscordIcon className="h-6 w-6" aria-hidden="true" />
            </a>
            <a
              className="text-night-600 hover:text-night-800"
              href="#"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="sr-only">Smolverse Twitter Link</span>
              <TwitterIcon className="h-6 w-6" aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
);
