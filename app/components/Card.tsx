import type { CardT } from "~/const";

export const Card = ({ card }: { card: CardT }) => (
  <div
    key={card.name}
    className="relative flex flex-col rounded-2.5xl bg-honey-50 px-2 xl:flex-row"
  >
    <div className="flex basis-7/12 flex-col items-start space-y-4 py-8 pl-8 pr-14">
      <p className="text-base font-semibold text-night-800 sm:text-2xl">
        {card.name}
      </p>
      <p className="text-sm text-night-700 xl:text-base">{card.description}</p>
    </div>
    <div className="flex items-end">
      <img
        src={card.image}
        className="w-full object-cover xl:h-56"
        alt="Hero"
      />
    </div>
  </div>
);
