import{pipeline as i}from"@nikolarhristov/pipeline";var t=(o={})=>({name:"astro-compress",hooks:{"astro:build:done":async()=>{await new i(o).compress()}}});export{t as default};
