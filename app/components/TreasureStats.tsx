import { MagicLogoIcon } from "./Icons";

export const TreasureStats = () => (
  <div className="relative bg-ruby-900 py-6 text-honey-25 lg:py-8">
    <div className="mx-auto grid grid-cols-2 place-items-start gap-4 px-8 sm:grid-cols-4 sm:place-items-center lg:max-w-3xl lg:px-0 xl:max-w-4xl xl:gap-12">
      <div className="flex items-center space-x-2">
        <MagicLogoIcon />
        <div>
          <p className="text-sm font-bold lg:text-base">Magic Price</p>
          <p className="text-xl font-bold lg:text-3xl">$0.40</p>
        </div>
      </div>
      <div className="flex items-center space-x-2">
        <MagicLogoIcon />
        <div>
          <p className="text-sm font-bold lg:text-base">Total Transactions</p>
          <p className="text-xl font-bold lg:text-3xl">98.8M</p>
        </div>
      </div>
      <div className="flex items-center space-x-2">
        <MagicLogoIcon />
        <div>
          <p className="text-sm font-bold lg:text-base">Total Market Cap</p>
          <p className="text-xl font-bold lg:text-3xl">$28.5M</p>
        </div>
      </div>
      <div className="flex items-center space-x-2">
        <MagicLogoIcon />
        <div>
          <p className="text-sm font-bold lg:text-base">24 Hour Volume</p>
          <p className="text-xl font-bold lg:text-3xl">$2.4M</p>
        </div>
      </div>
    </div>
  </div>
);