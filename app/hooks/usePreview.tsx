import { useEffect } from "react";

import { usePreviewSubscription } from "./usePreviewSubscription";

// https://github.com/SimeonGriggs/sanity-remix-preview/tree/main/web/app

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
export default function usePreview({ data, setData, query }) {
  const { data: previewData } = usePreviewSubscription(query, {
    initialData: data,
  });

  useEffect(() => setData(previewData), [previewData, setData]);
}
