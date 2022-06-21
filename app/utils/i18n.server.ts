import Backend from "i18next-fetch-backend";
import { RemixI18Next } from "remix-i18next";

export const i18n = new RemixI18Next({
  detection: {
    supportedLanguages: ["en", "ja-JP"],
    fallbackLanguage: "en",
  },
  i18next: {
    backend: { loadPath: "locales/{{lng}}/{{ns}}.json" },
  },
  backend: Backend,
});
