export const decimalToTime = (minutes: number) =>
  `${
    minutes < 1
      ? `${Math.round(minutes * 60)} sec`
      : `${Math.round(minutes)} min`
  } read`;

export const unslugify = (slug: string) => {
  const result = slug.replace(/-/g, " ");
  return result.replace(/\w\S*/g, function (txt) {
    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
  });
};
