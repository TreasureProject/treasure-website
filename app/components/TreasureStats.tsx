import { MagicLogoIcon } from "./Icons";
import { useEffect, useState } from "react";
import {
  getMagicPrice,
  getTotalMarketplaceVolume,
  getUniqueAddressCount,
  getTotalLockedAmount,
} from "~/utils/stats";

export const TreasureStats = () => {
  // const data = useRouteData<RootLoaderData>("root");
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState<{
    magicPrice: Awaited<ReturnType<typeof getMagicPrice>>;
    totalLocked: Awaited<ReturnType<typeof getTotalLockedAmount>>;
    totalMarketplaceVolume: Awaited<
      ReturnType<typeof getTotalMarketplaceVolume>
    >;
    uniqueAddresses: Awaited<ReturnType<typeof getUniqueAddressCount>>;
  } | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const [magicPrice, totalMarketplaceVolume, uniqueAddresses, totalLocked] =
        await Promise.all([
          getMagicPrice(),
          getTotalMarketplaceVolume(),
          getUniqueAddressCount(),
          getTotalLockedAmount(),
        ]);
      setData({
        magicPrice,
        totalLocked,
        uniqueAddresses,
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
              Magic Price
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
              Total Marketplace Volume
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
              Total Value Locked
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
              Unique Wallets
            </p>
            <p className="text-2xl font-bold md:text-xl lg:text-3xl">
              {isLoading ? " --" : data?.uniqueAddresses}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
