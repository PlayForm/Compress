import { visit } from "unist-util-visit";
function remarkCollectImages() {
  return function(tree, vfile) {
    if (typeof (vfile == null ? void 0 : vfile.path) !== "string")
      return;
    const imagePaths = /* @__PURE__ */ new Set();
    visit(tree, "image", (node) => {
      if (shouldOptimizeImage(node.url))
        imagePaths.add(node.url);
    });
    vfile.data.imagePaths = imagePaths;
  };
}
function shouldOptimizeImage(src) {
  return !isValidUrl(src) && !src.startsWith("/");
}
function isValidUrl(str) {
  try {
    new URL(str);
    return true;
  } catch {
    return false;
  }
}
export {
  remarkCollectImages
};
