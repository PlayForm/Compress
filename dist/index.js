import{pipeline as t}from"files-pipeline";var e=(o={})=>({name:"astro-compress",hooks:{"astro:build:done":async()=>{await new t(o).compress()}}});export{e as default};
