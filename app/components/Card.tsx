import type { CardT } from "~/const";
import HeroImg from "../../public/img/hero.png";
import { CTAButton } from "./Button";

export const Card = ({ card }: { card: CardT }) => (
  <div
    key={card.name}
    className="relative flex flex-col rounded-2.5xl bg-honey-50 px-2 pt-6 xl:flex-row"
  >
    <div className="flex basis-7/12 flex-col items-start justify-between space-y-4 pl-8 pr-20 pt-2 pb-8">
      <p className="text-2xl font-semibold text-night-800">{card.name}</p>
      <p className="text-night-700">{card.description}</p>
      <CTAButton>{card.buttonDescription}</CTAButton>
    </div>
    <div className="flex flex-1">
      <img src={HeroImg} alt="Hero" />
    </div>
  </div>
);
