const visibleDirective = (load, _options, el) => {
  const cb = async () => {
    const hydrate = await load();
    await hydrate();
  };
  const io = new IntersectionObserver((entries) => {
    for (const entry of entries) {
      if (!entry.isIntersecting)
        continue;
      io.disconnect();
      cb();
      break;
    }
  });
  for (const child of el.children) {
    io.observe(child);
  }
};
var visible_default = visibleDirective;
export {
  visible_default as default
};
