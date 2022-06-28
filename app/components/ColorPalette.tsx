import { ClipboardCheckIcon, ClipboardIcon } from "@heroicons/react/solid";
import React from "react";
import { useHydrated } from "remix-utils";
import { colors } from "../../const";
import { Badge } from "./Badge";

const ColorNames = {
  ruby: "Ruby Red",
  honey: "Honey Gold",
  night: "Night",
} as const;

const ColorPaletteItem = ({
  value,
  color,
}: {
  value: number;
  color: string;
}) => {
  const [copied, setCopied] = React.useState(false);
  const hydrated = useHydrated();

  React.useEffect(() => {
    const id = setTimeout(() => setCopied(false), 2000);
    return () => clearTimeout(id);
  }, [copied]);

  return (
    <div className="overflow-hidden rounded bg-honey-25">
      <button
        disabled={!hydrated}
        style={{ backgroundColor: color }}
        className="group flex h-16 w-full items-center justify-center lg:h-20"
        onClick={() => {
          navigator.clipboard.writeText(color);
          setCopied(true);
        }}
      >
        <span className="sr-only">Copy to clipboard</span>
        {copied ? (
          <ClipboardCheckIcon className="h-4 w-4 rotate-[-8deg] text-white sm:h-6 sm:w-6" />
        ) : (
          <ClipboardIcon className="h-4 w-4 text-white opacity-0 transition-opacity group-hover:opacity-100 sm:h-6 sm:w-6" />
        )}
      </button>

      <div className="px-4 py-3.5 text-night-700 xl:flex xl:justify-between">
        <div className="font-medium">{value}</div>
        <div className="font-mono">{color}</div>
      </div>
    </div>
  );
};

export const ColorPalette = () => {
  return (
    <div className="grid grid-cols-1 gap-8 space-y-20">
      {(Object.keys(colors) as (keyof typeof colors)[]).map((color, i) => {
        const palette = colors[color];
        const colorName = ColorNames[color];
        return (
          <div key={i}>
            <div className="flex flex-col space-y-9 text-[0.6rem] md:text-base">
              <Badge
                name={colorName}
                bgColor="bg-honey-100"
                textColor="text-ruby-900"
                size="sm"
                className="rounded-1.5xl"
              />
              <div className="grid min-w-0 flex-1 grid-cols-3 gap-x-6 gap-y-5 lg:grid-cols-5 lg:gap-y-10 lg:gap-x-11">
                {(
                  Object.keys(palette) as unknown as (keyof typeof palette)[]
                ).map((value, j) => {
                  const color = palette[value];
                  return (
                    <ColorPaletteItem key={j} value={value} color={color} />
                  );
                })}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
