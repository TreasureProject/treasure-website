import { stats } from "~/const";
import { twMerge } from "tailwind-merge";

const Stat = ({
  data,
  isSecondary,
}: {
  data: (typeof stats)[number];
  isSecondary: boolean;
}) => (
  <div
    className={twMerge(
      "mx-4 flex w-[18rem] items-center justify-center space-x-4 rounded-lg bg-honey-100 p-4",
      isSecondary && "bg-[#131D2E]"
    )}
  >
    <img src={data.icon} className="w-8" alt="Icon" />
    <div className="flex-col justify-center space-y-1">
      <p
        className={twMerge(
          "text-base font-bold lg:text-3xl",
          isSecondary && "text-honey-200"
        )}
      >
        {data.value}
      </p>
      <p
        className={twMerge(
          "break-word text-sm text-night-600 lg:text-base lg:leading-5",
          isSecondary && "text-night-400"
        )}
      >
        {data.title}
      </p>
    </div>
  </div>
);

export const NewTreasureStats = ({
  type = "primary",
}: {
  type?: "primary" | "secondary";
}) => {
  const isSecondary = type === "secondary";
  return (
    <div
      className={twMerge(
        "group relative bg-honey-50 py-8",
        isSecondary && "bg-night-900"
      )}
    >
      <div
        className={twMerge(
          "absolute inset-0 z-10 bg-honey-50 [-webkit-mask-image:linear-gradient(to_right,#000_0%,#0000_30%,#0000_70%,#000_100%)]",
          isSecondary && "bg-night-900"
        )}
      ></div>
      <div className="relative flex overflow-x-hidden">
        <div className="group-hover:pause flex animate-marquee">
          {stats.map((data) => (
            <Stat key={data.title} data={data} isSecondary={isSecondary} />
          ))}
        </div>
        {/* Needed for infinity loop */}
        <div className="group-hover:pause absolute top-0 ml-4 flex animate-marquee2">
          {stats.map((data) => (
            <Stat key={data.title} data={data} isSecondary={isSecondary} />
          ))}
        </div>
      </div>
    </div>
  );
};
