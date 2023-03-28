import { motion } from "framer-motion";
import { forwardRef, useState } from "react";
import { MagicIcon } from "~/components/Icons";

function randomBetween(min, max) {
  return Math.random() * (max - min) + min;
}

const Svg = forwardRef(({ className }: { className?: string }, ref) => (
  <svg
    width="7"
    height="8"
    viewBox="0 0 7 8"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    ref={ref}
  >
    <path
      d="M0.912593 3.56851L1.80755 3.86603C2.13702 3.9764 2.38288 4.24512 2.45173 4.58103L2.83036 6.40452C2.8402 6.45251 2.87954 6.4861 2.92871 6.4861C2.97788 6.4861 3.01722 6.45251 3.02705 6.40452L3.40569 4.58103C3.47454 4.24992 3.7204 3.9764 4.04986 3.86603L4.94483 3.56851C4.98416 3.55412 5.01367 3.51573 5.01367 3.47254C5.01367 3.42935 4.98416 3.39096 4.94483 3.37657L4.04986 3.07905C3.7204 2.96868 3.47454 2.69996 3.40569 2.36405L3.02705 0.540562C3.01722 0.492575 2.97788 0.458984 2.92871 0.458984C2.87954 0.458984 2.8402 0.492575 2.83036 0.540562L2.45173 2.36405C2.38288 2.69516 2.13702 2.96868 1.80755 3.07905L0.912593 3.37657C0.873254 3.39096 0.84375 3.42935 0.84375 3.47254C0.84375 3.51573 0.873254 3.55412 0.912593 3.56851Z"
      fill="#FFFDF7"
      fillOpacity="0.45"
    />
  </svg>
));

const MotionSvg = motion(Svg);

export default function Test() {
  const [hovered, setHovered] = useState(false);
  return (
    <div className="p-24">
      <div className="relative w-min">
        <motion.button
          initial={{
            opacity: 0.7,
          }}
          whileHover={{ scale: 1.5, opacity: 1 }}
          className="relative z-10 inline-flex w-max items-center justify-center rounded-lg px-7 py-3.5"
          style={{
            background:
              "radial-gradient(187.93% 141.67% at 50% 99.04%, rgba(255, 255, 255, 0.35) 0%, rgba(255, 0, 0, 0) 40.62%), #DC2626",
          }}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >
          <span className="font-bold">Buy</span>
          <MagicIcon className="ml-2 fill-ruby-900" />
        </motion.button>
        <motion.span
          className="absolute top-1/2 left-1/2 -z-20 inline-block h-[400%] w-[200%] -translate-x-1/2 -translate-y-1/2 [-webkit-mask-image:radial-gradient(white,transparent_65%)]"
          initial={false}
          animate={{
            opacity: hovered ? 1 : 0,
            background:
              "radial-gradient(80% 50% at center, rgba(220,38,38,1) 10%, rgba(0,0,0,0) 70%)",
          }}
          transition={{
            duration: 0.5,
          }}
        />
        <span className="absolute top-1/2 left-1/2 -z-10 inline-block h-[400%] w-[200%] -translate-x-1/2 -translate-y-1/2 [-webkit-mask-image:radial-gradient(white,transparent_100%)]">
          {Array.from({ length: 40 }).map((_, i) => (
            <MotionSvg
              key={i}
              className="absolute inset-0 left-1/2 top-1/2 aspect-square opacity-0"
              animate={
                hovered
                  ? {
                      opacity: 1,
                      width: `${randomBetween(0.5, 1)}rem`,
                      height: "auto",
                      top: `${randomBetween(10, 90)}%`,
                      left: `${randomBetween(10, 90)}%`,
                      transformOrigin: `${randomBetween(
                        -500,
                        500
                      )}% ${randomBetween(-500, 500)}%`,
                    }
                  : {
                      opacity: 0,
                    }
              }
              // transition={{
              //   rotate: {
              //     repeat: Infinity,
              //     duration: randomBetween(5, 12),
              //     repeatType: "reverse",
              //   },
              // }}
            />
          ))}
        </span>
      </div>
    </div>
  );
}
