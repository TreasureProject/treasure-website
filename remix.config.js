/**
 * @type {import('@remix-run/dev').AppConfig}
 */
module.exports = {
  ignoredRouteFiles: ["**/.*"],
  serverDependenciesToBundle: [
    "swiper/react",
    "swiper/css",
    "swiper/css/navigation",
    "swiper/modules",
  ],
  future: {
    v2_routeConvention: true,
    unstable_postcss: true,
  },
  // appDirectory: "app",
  // assetsBuildDirectory: "public/build",
  // serverBuildPath: "functions/[[path]].js",
  // publicPath: "/build/",
};
