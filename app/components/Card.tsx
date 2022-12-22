import type { CardT } from "~/const";

export const Card = ({ card }: { card: CardT }) => (
  <div
    key={card.name}
    className="relative flex flex-col rounded-2.5xl border-2 border-honey-200 bg-honey-50 px-2 xl:flex-row"
  >
    <div className="flex basis-7/12 flex-col items-start space-y-4 py-8 pl-8 pr-14">
      <p className="text-base font-bold !leading-[1.6rem] text-night-800 sm:text-2xl">
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

export const NewCard = ({
  title,
  description,
  children,
  image,
}: {
  title: string;
  description: string;
  children: React.ReactNode;
  image: string;
}) => (
  <div className="relative flex flex-col justify-between overflow-hidden rounded-2.5xl border-2 border-honey-300 bg-honey-50 p-10">
    <div className="max-w-[15rem]">
      <p className="text-2xl font-bold text-ruby-900 sm:text-4xl">{title}</p>
      <p className="mt-2.5 text-sm text-night-500 sm:text-lg">{description}</p>
    </div>
    <div className="z-10 mt-8">{children}</div>
    <div className="absolute -bottom-1 right-0">
      <img src={image} className="ml-auto w-5/12" alt="Hero" />
    </div>
  </div>
);
