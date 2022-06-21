import { MagicLogoIcon } from "./Icons";
import { useEffect, useState } from "react";
import {
  getMagicPrice,
  getTotalMarketplaceVolume,
  getPercentLocked,
  getTotalLockedAmount,
} from "~/utils/stats";
import { useTranslation } from "react-i18next";

export const TreasureStats = () => {
  // const data = useRouteData<RootLoaderData>("root");
  const { t } = useTranslation("common");

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
              {t("stats.magicPrice")}
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
              {t("stats.totalMPVolume")}
            </p>
            <p className="text-2xl font-bold md:text-xl lg:text-3xl">
              {isLoading ? " --" : data?.totalMarketplaceVolume}
            </p>
          </div>
        </div>
        <div className="mt-6 flex items-center space-x-2 md:mt-0">
          <MagicLogoIcon />
          <div>
            <p className="text-base font-bold md:text-sm lg:text-base">
              {t("stats.totalValueLocked")}
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
              {t("stats.percentCirculatingSupply")}
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
