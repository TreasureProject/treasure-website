import {
  ClipboardDocumentCheckIcon,
  ClipboardIcon,
} from "@heroicons/react/24/solid";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import treasureTheme from "@treasure-dev/tailwind-config";
import React from "react";
import { useHydrated } from "remix-utils/use-hydrated";

import { Badge } from "./Badge";

const ColorNames = {
  ruby: "Ruby",
  honey: "Honey",
  silver: "Silver",
  night: "Night",
  sapphire: "Sapphire",
  nebula: "Nebula",
  emerald: "Emerald",
} as const;

const iterateColors = [100, 200, 300, 400, 500, 600, 700, 800, 900, 1000];

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
    if (copied) {
      const id = setTimeout(() => setCopied(false), 2000);
      return () => clearTimeout(id);
    }
  }, [copied]);

  return (
    <div className="overflow-hidden rounded bg-honey-25">
      <button
        type="button"
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
          <ClipboardDocumentCheckIcon className="h-4 w-4 rotate-[-8deg] text-white sm:h-6 sm:w-6" />
        ) : (
          <ClipboardIcon className="h-4 w-4 text-white opacity-0 transition-opacity group-hover:opacity-100 sm:h-6 sm:w-6" />
        )}
      </button>

      <div className="px-4 py-3.5 text-silver-800 xl:flex xl:justify-between">
        <div className="font-medium">{value}</div>
        <div className="font-mono">{color}</div>
      </div>
    </div>
  );
};

export const ColorPalette = () => {
  const colors = Object.keys(treasureTheme.theme.extend.colors);
  return (
    <div className="grid grid-cols-1 gap-8">
      {colors.map((color) => {
        const palette = treasureTheme.theme.extend.colors[color] as Record<
          number,
          string
        >;
        return (
          <div key={color} className="space-y-4 text-[0.6rem] md:text-base">
            <Badge
              name={ColorNames[color as keyof typeof ColorNames]}
              bgColor="bg-honey-100"
              textColor="text-ruby"
              size="sm"
              className="rounded-1.5xl"
            />
            <div className="grid min-w-0 flex-1 grid-cols-3 gap-x-6 gap-y-5 lg:grid-cols-5 lg:gap-x-11 lg:gap-y-10">
              {(Object.keys(palette) as unknown as (keyof typeof palette)[])
                .reverse()
                .map((value) => {
                  const color = palette[value];

                  if (!color || !iterateColors.includes(Number(value)))
                    return null;

                  return (
                    <ColorPaletteItem key={value} value={value} color={color} />
                  );
                })}
            </div>
          </div>
        );
      })}
    </div>
  );
};
