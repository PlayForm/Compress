function matchRoute(pathname, manifest) {
  return manifest.routes.find((route) => route.pattern.test(decodeURI(pathname)));
}
function matchAllRoutes(pathname, manifest) {
  return manifest.routes.filter((route) => route.pattern.test(pathname));
}
export {
  matchAllRoutes,
  matchRoute
};
