import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/solid";
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import { CartridgesIcon } from "~/components/Icons";
import { NewTreasureStats } from "~/components/TreasureStats";
import HeroImg from "../../public/img/bg-hero.jpg";

export default function Build() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const maskImage = useMotionTemplate`radial-gradient(200px at ${mouseX}px ${mouseY}px, transparent, rgba(13, 20, 32, 0.95))`;
  const style = { maskImage, WebkitMaskImage: maskImage };

  return (
    <main>
      <section
        id="build-with-treasure"
        aria-labelledby="build-with-treasure"
        onMouseMove={({ currentTarget, clientX, clientY }) => {
          const { left, top } = currentTarget.getBoundingClientRect();
          mouseX.set(clientX - left);
          mouseY.set(clientY - top);
        }}
        className="group relative bg-night-800"
      >
        <div className="grid [grid-template-areas:'overlay']">
          <motion.img
            src={HeroImg}
            className="h-full w-full object-cover [grid-area:overlay]"
            alt=""
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
              transition: {
                delay: 0.5,
                duration: 0.5,
              },
            }}
          />
          <motion.div
            style={{
              backgroundImage:
                "linear-gradient(to bottom, rgba(13, 20, 32, 0.95) 40%, rgba(13, 20, 32, 0.96) 50%, rgba(13, 20, 32, 0.97) 60%, rgba(13, 20, 32, 1) 100%)",
            }}
            className="relative z-10 [grid-area:overlay]"
          ></motion.div>
          <motion.div
            style={style}
            className="relative z-20 bg-gradient-to-r from-[#0D1420] to-[#101827] opacity-0 transition duration-300 [grid-area:overlay] group-hover:opacity-100"
          ></motion.div>
          <div className="relative z-30 py-16 [grid-area:overlay] sm:py-24">
            <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-12">
              <div className="text-center">
                <p className="text-xl font-semibold text-honey-200 sm:text-4xl">
                  Build with Treasure
                </p>
                <div className="mt-4 text-night-300 sm:text-xl">
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
            <div className="mx-auto mt-10 max-w-md px-6 sm:max-w-3xl lg:max-w-8xl lg:px-12">
              <div className="grid grid-cols-4 grid-rows-2 gap-6 overflow-hidden rounded-xl bg-[#101827] sm:gap-4 lg:gap-1">
                <div className="relative col-span-4 bg-[#131D2E] px-8 py-7 sm:col-span-2 lg:col-start-1 lg:col-end-3">
                  <div className="flex flex-col items-start">
                    <CartridgesIcon className="h-12 w-12" aria-hidden="true" />
                    <p className="mt-3 text-lg font-semibold text-honey-200 sm:text-2xl">
                      Game Builders Program
                    </p>
                    <p className="mt-1.5 text-night-500 sm:text-xl">
                      Let’s partner to grow together over the long-term
                    </p>
                  </div>
                  <ArrowTopRightOnSquareIcon className="absolute top-7 right-8 h-4 w-4 fill-night-600 [&>path]:stroke-night-600 [&>path]:stroke-[1]" />
                </div>
                <div className="relative col-span-4 bg-[#131D2E] px-8 py-7 sm:col-span-2 lg:col-start-3 lg:col-end-4">
                  <div className="flex flex-col items-start">
                    <CartridgesIcon className="h-12 w-12" aria-hidden="true" />
                    <p className="mt-3 text-lg font-semibold text-honey-200 sm:text-2xl">
                      Open Source
                    </p>
                    <p className="mt-1.5 text-night-500 sm:text-xl">
                      Shared code to help you bring your ideas to life
                    </p>
                  </div>
                  <ArrowTopRightOnSquareIcon className="absolute top-7 right-8 h-4 w-4 fill-night-600 [&>path]:stroke-night-600 [&>path]:stroke-[1]" />
                </div>
                <div className="relative col-span-4 bg-[#131D2E] px-8 py-7 sm:col-span-2 lg:col-start-4 lg:col-end-5">
                  <div className="flex flex-col items-start">
                    <CartridgesIcon className="h-12 w-12" aria-hidden="true" />
                    <p className="mt-3 text-lg font-semibold text-honey-200 sm:text-2xl">
                      Documentation
                    </p>
                    <p className="mt-1.5 text-night-500 sm:text-xl">
                      Go under the hood for all things Treasure
                    </p>
                  </div>
                  <ArrowTopRightOnSquareIcon className="absolute top-7 right-8 h-4 w-4 fill-night-600 [&>path]:stroke-night-600 [&>path]:stroke-[1]" />
                </div>

                <div className="relative col-span-4 bg-[#131D2E] px-8 py-7 sm:col-span-2 lg:col-start-1 lg:col-end-2">
                  <div className="flex flex-col items-start">
                    <CartridgesIcon className="h-12 w-12" aria-hidden="true" />
                    <p className="mt-3 text-lg font-semibold text-honey-200 sm:text-2xl">
                      Infrastructure
                    </p>
                    <p className="mt-1.5 text-night-500 sm:text-xl">
                      Tap into powerful tools and infra built by Treasure
                    </p>
                  </div>
                  <ArrowTopRightOnSquareIcon className="absolute top-7 right-8 h-4 w-4 fill-night-600 [&>path]:stroke-night-600 [&>path]:stroke-[1]" />
                </div>
                <div className="relative col-span-4 bg-[#131D2E] px-8 py-7 sm:col-span-2 lg:col-start-2 lg:col-end-4">
                  <div className="flex flex-col items-start">
                    <CartridgesIcon className="h-12 w-12" aria-hidden="true" />
                    <p className="mt-3 text-lg font-semibold text-honey-200 sm:text-2xl">
                      Interoperability
                    </p>
                    <p className="mt-1.5 text-night-500 sm:text-xl">
                      Derive network value through a vibrant ecosystem of
                      connected communities and shared gaming experiences
                    </p>
                  </div>
                  <ArrowTopRightOnSquareIcon className="absolute top-7 right-8 h-4 w-4 fill-night-600 [&>path]:stroke-night-600 [&>path]:stroke-[1]" />
                </div>
                <div className="relative col-span-4 flex items-center bg-[#131D2E] px-8 py-7 sm:col-span-2 lg:col-start-4 lg:col-end-5">
                  <div className="flex flex-col items-start">
                    <p className="text-lg font-semibold text-honey-200 sm:text-2xl">
                      Learn more
                    </p>
                    <p className="mt-1.5 text-night-500 sm:text-xl">
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
      <NewTreasureStats type="secondary" />
    </main>
  );
}

export const handle = {
  breadcrumb: {
    href: "/build",
    title: "Build",
  },
};
