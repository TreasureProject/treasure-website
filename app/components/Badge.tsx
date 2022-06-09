import classNames from "clsx";

export const Badge = ({
  name,
  bgColor,
  textColor,
}: {
  name: string;
  bgColor?: string;
  textColor?: string;
}) => {
  return (
    <div
      className={classNames(
        bgColor ?? "bg-honey-200",
        "inline-block w-max rounded-1.9xl px-4 py-2.5"
      )}
    >
      <h3
        className={classNames(
          textColor ?? "text-ruby-900",
          "font-mono font-medium tracking-wider"
        )}
      >
        {name}
      </h3>
    </div>
  );
};
