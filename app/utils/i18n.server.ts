import Backend from "i18next-fs-backend";
import { RemixI18Next } from "remix-i18next";
import { supportedLngs } from "../const";
import { i18nCookie } from "./cookie";
import { resolve } from "node:path";

export const i18n = new RemixI18Next({
  detection: {
    cookie: i18nCookie,
    supportedLanguages: supportedLngs,
    fallbackLanguage: "en",
  },
  i18next: {
    backend: { loadPath: resolve("./public/locales/{{lng}}/{{ns}}.json") },
  },
  backend: Backend,
});
