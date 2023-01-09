import type { CardT } from "~/const";

export const Card = ({ card }: { card: CardT }) => (
  <div
    key={card.name}
    className="relative flex flex-col rounded-2.5xl border-2 border-honey-200 bg-honey-50 px-2 xl:flex-row"
  >
    <div className="flex basis-7/12 flex-col items-start space-y-4 pt-8 pl-8 pr-14 sm:py-8">
      <p className="text-2xl font-bold text-night-800">{card.name}</p>
      <p className="text-sm text-night-600 sm:text-base lg:text-lg">
        {card.description}
      </p>
    </div>
    <div className="flex items-end">
      <img
        src={card.image}
        className="w-full max-w-sm object-cover lg:max-w-full xl:h-56"
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
    <div className="relative z-10 max-w-[15rem]">
      <p className="text-2xl font-bold text-ruby-900 lg:text-3xl 2xl:text-4xl">
        {title}
      </p>
      <p className="mt-2.5 text-sm text-night-600 sm:text-base lg:text-lg">
        {description}
      </p>
    </div>
    <div className="relative z-10 mt-8">{children}</div>
    <div className="absolute -bottom-1 right-0">
      <img src={image} className="ml-auto w-1/4 md:w-5/12" alt={title} />
    </div>
  </div>
);
