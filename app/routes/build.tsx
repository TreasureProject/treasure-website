import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/solid";
import { CartridgesIcon } from "~/components/Icons";
import HeroImg from "../../public/img/bg-hero.jpg";

export default function Build() {
  return (
    <main>
      <section
        id="build-with-treasure"
        aria-labelledby="build-with-treasure"
        className="relative bg-night-800"
      >
        <div className="grid [grid-template-areas:'overlay']">
          <img
            src={HeroImg}
            className="object-cover [grid-area:overlay]"
            alt=""
          />
          <div
            className="relative z-10 [grid-area:overlay]"
            style={{
              backgroundImage:
                "linear-gradient(to bottom, rgba(13, 20, 32, 0.95) 40%, rgba(13, 20, 32, 0.96) 50%, rgba(13, 20, 32, 0.97) 60%, rgba(13, 20, 32, 1) 100%)",
            }}
          ></div>
          <div className="relative z-20 py-16 [grid-area:overlay] sm:py-24">
            <div className="mx-auto max-w-4xl">
              <div className="text-center">
                <p className="text-4xl font-semibold text-honey-200">
                  Build with Treasure
                </p>
                <div className="mt-4 text-xl text-night-300">
                  <p>
                    Vibrant community of builders and players. Immersive gaming
                    experiences.
                  </p>
                  <p>
                    Tools to enable and accelerate your journey.{" "}
                    <span className="font-bold">Everything</span> you need to
                    supercharge your game.
                  </p>
                </div>
              </div>
            </div>
            <div className="mx-auto mt-10 max-w-md px-4 sm:max-w-3xl sm:px-6 lg:max-w-8xl lg:px-12">
              <div className="grid grid-cols-4 grid-rows-2 gap-1 overflow-hidden rounded-xl bg-[#101827]">
                <div className="relative col-start-1 col-end-3 bg-[#131D2E] px-8 py-7">
                  <div className="flex flex-col items-start">
                    <CartridgesIcon className="h-12 w-12" aria-hidden="true" />
                    <p className="mt-3 text-2xl font-semibold text-honey-200">
                      Game Builders Program
                    </p>
                    <p className="mt-1.5 text-xl text-night-500">
                      Let’s partner to grow together over the long-term
                    </p>
                  </div>
                  <ArrowTopRightOnSquareIcon className="absolute top-7 right-8 h-4 w-4 fill-night-600 [&>path]:stroke-night-600 [&>path]:stroke-[1]" />
                </div>
                <div className="relative col-start-3 col-end-4 bg-[#131D2E] px-8 py-7">
                  <div className="flex flex-col items-start">
                    <CartridgesIcon className="h-12 w-12" aria-hidden="true" />
                    <p className="mt-3 text-2xl font-semibold text-honey-200">
                      Open Source
                    </p>
                    <p className="mt-1.5 text-xl text-night-500">
                      Shared code to help you bring your ideas to life
                    </p>
                  </div>
                  <ArrowTopRightOnSquareIcon className="absolute top-7 right-8 h-4 w-4 fill-night-600 [&>path]:stroke-night-600 [&>path]:stroke-[1]" />
                </div>
                <div className="relative col-start-4 col-end-5 bg-[#131D2E] px-8 py-7">
                  <div className="flex flex-col items-start">
                    <CartridgesIcon className="h-12 w-12" aria-hidden="true" />
                    <p className="mt-3 text-2xl font-semibold text-honey-200">
                      Documentation
                    </p>
                    <p className="mt-1.5 text-xl text-night-500">
                      Go under the hood for all things Treasure
                    </p>
                  </div>
                  <ArrowTopRightOnSquareIcon className="absolute top-7 right-8 h-4 w-4 fill-night-600 [&>path]:stroke-night-600 [&>path]:stroke-[1]" />
                </div>

                <div className="relative col-start-1 col-end-2 bg-[#131D2E] px-8 py-7">
                  <div className="flex flex-col items-start">
                    <CartridgesIcon className="h-12 w-12" aria-hidden="true" />
                    <p className="mt-3 text-2xl font-semibold text-honey-200">
                      Infrastructure
                    </p>
                    <p className="mt-1.5 text-xl text-night-500">
                      Tap into powerful tools and infra built by Treasure
                    </p>
                  </div>
                  <ArrowTopRightOnSquareIcon className="absolute top-7 right-8 h-4 w-4 fill-night-600 [&>path]:stroke-night-600 [&>path]:stroke-[1]" />
                </div>
                <div className="relative col-start-2 col-end-4 bg-[#131D2E] px-8 py-7">
                  <div className="flex flex-col items-start">
                    <CartridgesIcon className="h-12 w-12" aria-hidden="true" />
                    <p className="mt-3 text-2xl font-semibold text-honey-200">
                      Interoperability
                    </p>
                    <p className="mt-1.5 text-xl text-night-500">
                      Derive network value through a vibrant ecosystem of
                      connected communities and shared gaming experiences
                    </p>
                  </div>
                  <ArrowTopRightOnSquareIcon className="absolute top-7 right-8 h-4 w-4 fill-night-600 [&>path]:stroke-night-600 [&>path]:stroke-[1]" />
                </div>
                <div className="relative col-start-4 col-end-5 flex items-center bg-[#131D2E] px-8 py-7">
                  <div className="flex flex-col items-start">
                    <p className="text-2xl font-semibold text-honey-200">
                      Learn more
                    </p>
                    <p className="mt-1.5 text-xl text-night-500">
                      Discover how we supercharge games
                    </p>
                  </div>
                  <ArrowTopRightOnSquareIcon className="absolute top-7 right-8 h-4 w-4 fill-night-600 [&>path]:stroke-night-600 [&>path]:stroke-[1]" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
