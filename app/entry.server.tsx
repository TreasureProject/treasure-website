import { RemixServer } from "@remix-run/react";
import type { EntryContext } from "@remix-run/cloudflare";
import { createInstance } from "i18next";
import Backend from "i18next-fetch-backend";
import { renderToString } from "react-dom/server";
import { I18nextProvider, initReactI18next } from "react-i18next";
import { i18n } from "./utils/i18n.server";

export default async function handleRequest(
  request: Request,
  statusCode: number,
  headers: Headers,
  context: EntryContext
) {
  const instance = createInstance();

  const lng = await i18n.getLocale(request);

  const ns = i18n.getRouteNamespaces(context);

  await instance
    .use(initReactI18next)
    .use(Backend)
    .init({
      supportedLngs: ["es", "en"],
      defaultNS: "common",
      fallbackLng: "en",
      react: { useSuspense: false },
      lng,
      ns,
      backend: {
        loadPath: `${new URL(request.url).origin}/locales/{{lng}}/{{ns}}.json`,
      },
    });

  const markup = renderToString(
    <I18nextProvider i18n={instance}>
      <RemixServer context={context} url={request.url} />
    </I18nextProvider>
  );

  headers.set("Content-Type", "text/html");

  return new Response("<!DOCTYPE html>" + markup, {
    status: statusCode,
    headers: headers,
  });
}
