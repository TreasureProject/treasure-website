import React, { useMemo } from "react";
import { PortableText } from "@portabletext/react";
import type { TypedObject } from "sanity";
import slugify from "slugify";
import { useRouteData } from "remix-utils";
import type { RootLoaderData } from "~/root";
import { urlFor } from "~/utils/sanity/helpers";

export default function ProseableText({
  value = [],
}: {
  value: TypedObject[];
}) {
  const rootData = useRouteData<RootLoaderData>("root");

  const valueGroups = useMemo(
    () =>
      value
        ? value.reduce<[TypedObject[]]>(
            (acc, item) => {
              const lastIdx = acc.length - 1;

              if (
                acc[lastIdx].length === 0 ||
                acc[lastIdx][0]._type === item._type
              ) {
                acc[lastIdx].push(item);
              } else {
                acc.push([item]);
              }

              return acc;
            },
            [[]]
          )
        : [],
    [value]
  );

  if (!valueGroups?.length) return null;

  return (
    <>
      {valueGroups.map((group) =>
        group[0]._type === "block" ? (
          <div
            key={group[0]._key as string}
            className="prose prose-night mx-auto hover:prose-a:text-ruby-900 prose-blockquote:border-l-ruby-400 prose-li:marker:text-ruby-300 lg:prose-lg"
          >
            <PortableText
              value={group}
              components={{
                block: {
                  h2: ({ children, value }) => {
                    const text = value.children[0].text;
                    if (text !== "") {
                      return (
                        <h2
                          id={slugify(text, {
                            lower: true,
                          })}
                          className="scroll-mt-20 sm:scroll-mt-28"
                        >
                          {children}
                        </h2>
                      );
                    }
                    return <h2>{children}</h2>;
                  },
                },
                marks: {
                  link: ({ value, children }) => {
                    return (
                      <a
                        href={value?.href}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {children}
                      </a>
                    );
                  },
                },
              }}
            />
          </div>
        ) : (
          <PortableText
            key={group[0]._key as string}
            value={group}
            components={{
              types: {
                image: ({ value }) => {
                  if (!value.asset) return null;

                  return (
                    <figure>
                      <img
                        src={urlFor(value, rootData?.ENV)
                          .fit("max")
                          .auto("format")
                          .url()}
                        alt={value.caption || " "}
                        loading="lazy"
                      />
                      <figcaption className="text-center text-sm text-night-400">
                        {value.caption}
                      </figcaption>
                    </figure>
                  );
                },
              },
            }}
          />
        )
      )}
    </>
  );
}
