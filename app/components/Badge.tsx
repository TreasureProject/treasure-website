import classNames from "clsx";

export const Badge = ({
  name,
  bgColor,
  textColor,
  size = "md",
  className,
}: {
  name: string;
  bgColor?: string;
  textColor?: string;
  size?: "md" | "sm";
  className?: string;
}) => {
  return (
    <div
      className={classNames(
        className,
        bgColor ?? "bg-honey-200",
        size === "sm" ? "px-2.5 py-1.5" : "px-4 py-2.5",
        "inline-block w-max rounded-lg",
      )}
    >
      <h3
        className={classNames(
          textColor ?? "text-ruby",
          size === "sm" ? "text-sm" : "text-base",
          "font-medium font-mono uppercase",
        )}
      >
        {name}
      </h3>
    </div>
  );
};
