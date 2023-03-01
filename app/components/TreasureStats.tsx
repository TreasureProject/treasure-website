import { MagicLogoIcon } from "./Icons";
import { useEffect, useState } from "react";
import {
  getMagicPrice,
  getTotalMarketplaceVolume,
  getPercentLocked,
  getTotalLockedAmount,
} from "~/utils/stats";
import { useTranslation } from "react-i18next";
import { stats } from "~/const";
import MagicLogoImg from "../../public/img/resources/magic/logomark-dark.png";
import { twMerge } from "tailwind-merge";

export const TreasureStats = () => {
  // const data = useRouteData<RootLoaderData>("root");
  const { t } = useTranslation("index", {
    keyPrefix: "common.stats",
  });

  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState<{
    magicPrice: Awaited<ReturnType<typeof getMagicPrice>>;
    totalLocked: Awaited<ReturnType<typeof getTotalLockedAmount>>;
    totalMarketplaceVolume: Awaited<
      ReturnType<typeof getTotalMarketplaceVolume>
    >;
    percentLocked: Awaited<ReturnType<typeof getPercentLocked>>;
  } | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const [magicPrice, totalMarketplaceVolume, percentLocked, totalLocked] =
        await Promise.all([
          getMagicPrice(),
          getTotalMarketplaceVolume(),
          getPercentLocked(),
          getTotalLockedAmount(),
        ]);
      setData({
        magicPrice,
        totalLocked,
        percentLocked,
        totalMarketplaceVolume,
      });
      setIsLoading(false);
    };
    fetchData();
  }, []);

  return (
    <div className="relative bg-ruby-900 py-6 text-honey-25 lg:py-8">
      <div className="mx-auto gap-4 px-8 md:grid md:max-w-3xl md:grid-cols-2 md:place-items-start lg:px-0 xl:max-w-6xl xl:grid-cols-4 xl:place-items-center xl:gap-16">
        <div className="flex items-center space-x-2">
          <MagicLogoIcon />
          <div>
            <p className="text-base font-bold md:text-sm lg:text-base">
              {t("magicPrice")}
            </p>
            <p className="text-2xl font-bold md:text-xl lg:text-3xl">
              ${isLoading ? " --" : data?.magicPrice}
            </p>
          </div>
        </div>
        <div className="mt-6 flex items-center space-x-2 md:mt-0">
          <MagicLogoIcon />
          <div>
            <p className="text-base font-bold md:text-sm lg:text-base">
              {t("totalMPVolume")}
            </p>
            <p className="text-2xl font-bold md:text-xl lg:text-3xl">
              {isLoading ? (
                " --"
              ) : (
                <div>
                  $264M
                  <div className="ml-1 inline-flex items-center text-sm">
                    ({" "}
                    <img
                      src={MagicLogoImg}
                      alt="Magic Logo"
                      className="mr-0.5 h-2 w-2"
                    />
                    {data?.totalMarketplaceVolume})
                  </div>
                </div>
              )}
            </p>
          </div>
        </div>
        <div className="mt-6 flex items-center space-x-2 md:mt-0">
          <MagicLogoIcon />
          <div>
            <p className="text-base font-bold md:text-sm lg:text-base">
              {t("totalValueLocked")}
            </p>
            <p className="text-2xl font-bold md:text-xl lg:text-3xl">
              {isLoading ? " --" : data?.totalLocked}
            </p>
          </div>
        </div>
        <div className="mt-6 flex items-center space-x-2 md:mt-0">
          <MagicLogoIcon />
          <div>
            <p className="text-base font-bold md:text-sm lg:text-base">
              {t("percentCirculatingSupply")}
            </p>
            <p className="text-2xl font-bold md:text-xl lg:text-3xl">
              {isLoading ? " --" : data?.percentLocked}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

const Stat = ({
  data,
  isSecondary,
}: {
  data: typeof stats[number];
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
