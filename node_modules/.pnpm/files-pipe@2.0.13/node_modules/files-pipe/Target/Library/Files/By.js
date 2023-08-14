import f from"fast-glob";var p=async(n,e,t)=>{for(const[o,a]of e)for(const r of await f(n,{cwd:o,onlyFiles:!0}))t.set(`${a}${r}`,`${o}${r}`);return t};export{p as default};
