// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

// https://github.com/SimeonGriggs/sanity-remix-preview/tree/main/web/app

import { useEffect, useState } from "react";
import { CONFIG } from "../utils/sanity/config";

export function usePreviewSubscription(query, subscriptionOptions) {
  const { initialData } = subscriptionOptions;
  const [data, setData] = useState(initialData);

  useEffect(() => {
    let sub;
    let store;

    async function createStore() {
      // For more details about configuring groq-store see:
      // https://www.npmjs.com/package/@sanity/groq-store
      const {
        default: { groqStore },
      } = await import("@sanity/groq-store");

      const { projectId, dataset } = CONFIG;

      store = groqStore({
        projectId,
        dataset,
        listen: true,
        overlayDrafts: true,
        documentLimit: 1000,
      });

      store.subscribe(query, {}, (err, result) => {
        if (err) {
          console.error("Oh no, an error:", err);
          return;
        }
        setData(result);
      });
    }

    if (!store) {
      createStore();
    }

    return () => {
      if (sub?.unsubscribe()) sub.unsubscribe();
      if (store) store.close();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { data };
}
