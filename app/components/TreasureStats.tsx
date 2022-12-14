import { MagicLogoIcon } from "./Icons";
import { useEffect, useState } from "react";
import {
  getMagicPrice,
  getTotalMarketplaceVolume,
  getPercentLocked,
  getTotalLockedAmount,
} from "~/utils/stats";
import { useTranslation } from "react-i18next";
import MagicLogoImg from "../../public/img/resources/magic/logomark-dark.png";

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

// #1
// Gaming and NFT ecosystem on Arbitrum

// 95%+
// of all gaming and NFT txns on Arbitrum

// $267M
// Total marketplace volume

// 267k
// Unique MAGIC holders

// #1
// Gaming and top 5 overall liquidity on Sushi

// 10+
// Games powered by Treasure

// 100k+
// Engaged player community

const HARDCODED_DATA = [
  {
    title: "Gaming and NFT ecosystem on Arbitrum",
    value: "#1",
  },
  {
    title: "of all gaming and NFT txns on Arbitrum",
    value: "95%",
  },
  {
    title: "Total marketplace volume",
    value: "$267M",
  },
  {
    title: "Unique MAGIC holders",
    value: "267k",
  },
  {
    title: "Gaming and top 5 overall liquidity on Sushi",
    value: "#1",
  },
  {
    title: "Games powered by Treasure",

    value: "10+",
  },
  {
    title: "Engaged player community",
    value: "100k+",
  },
] as const;

const Stat = ({ data }: { data: typeof HARDCODED_DATA[number] }) => (
  <div className="mx-4 flex w-[15rem] flex-col justify-center space-y-1 rounded-lg bg-honey-100 p-4">
    <p className="text-base font-semibold lg:text-2xl">{data.value}</p>
    <p className="break-word text-sm text-night-600 lg:text-base">
      {data.title}
    </p>
  </div>
);

export const NewTreasureStats = () => {
  return (
    <div className="relative bg-honey-50 py-8 [mask-image:linear-gradient(to_right,#0000,#000_30%,#000_70%,#0000)]">
      <div className="relative flex overflow-x-hidden">
        <div className="flex animate-marquee">
          {HARDCODED_DATA.map((data) => (
            <Stat key={data.title} data={data} />
          ))}
        </div>
        {/* Needed for infinity loop */}
        <div className="absolute top-0 ml-4 flex animate-marquee2">
          {HARDCODED_DATA.map((data) => (
            <Stat key={data.title} data={data} />
          ))}
        </div>
      </div>
    </div>
  );
};
