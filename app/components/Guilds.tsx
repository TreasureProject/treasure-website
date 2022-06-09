import { communities } from "~/const";
import { CTAButton } from "./Button";
import HeroImg from "../../public/img/hero.png";

export const Guilds = () => (
  <div className="grid gap-8 sm:grid-cols-2">
    {communities.map((community) => (
      <div
        key={community.name}
        className="relative flex flex-col rounded-2xl bg-honey-50 px-2 pt-6 xl:flex-row"
      >
        <div className="flex basis-7/12 flex-col items-start justify-between space-y-4 pl-8 pr-20 pt-2 pb-8">
          <p className="text-2xl font-semibold text-night-800">
            {community.name}
          </p>
          <p className="text-night-700">{community.description}</p>
          <CTAButton>{community.buttonDescription}</CTAButton>
        </div>
        <div className="flex flex-1">
          <img src={HeroImg} alt="Hero" />
        </div>
      </div>
    ))}
  </div>
);
