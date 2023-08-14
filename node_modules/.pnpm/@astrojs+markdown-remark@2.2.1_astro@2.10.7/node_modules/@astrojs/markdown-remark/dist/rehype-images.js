import { visit } from "unist-util-visit";
function rehypeImages() {
  return () => function(tree, file) {
    visit(tree, (node) => {
      var _a, _b;
      if (node.type !== "element")
        return;
      if (node.tagName !== "img")
        return;
      if ((_a = node.properties) == null ? void 0 : _a.src) {
        if ((_b = file.data.imagePaths) == null ? void 0 : _b.has(node.properties.src)) {
          node.properties["__ASTRO_IMAGE_"] = node.properties.src;
          delete node.properties.src;
        }
      }
    });
  };
}
export {
  rehypeImages
};
