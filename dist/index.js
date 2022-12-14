import{pipeline as t}from"@nikolarhristov/pipeline";var r=(o={})=>({name:"astro-compress",hooks:{"astro:build:done":async()=>{await new t(o).compress()}}});export{r as default};
