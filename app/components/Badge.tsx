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
        "inline-block w-max rounded-tag px-2.5 py-1.5"
      )}
    >
      <h3
        className={classNames(
          textColor ?? "text-ruby-900",
          "font-mono text-sm font-medium tracking-wider"
        )}
      >
        {name}
      </h3>
    </div>
  );
};
