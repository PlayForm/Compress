import{minify as f}from"csso";import{minify as c}from"html-minifier-terser";import p from"sharp";import{optimize as m}from"svgo";import{minify as n}from"terser";import e from"./parse.js";import h from"./sharp-read.js";var d=async(r,s=2)=>{for(const i in r)if(Object.prototype.hasOwnProperty.call(r,i)){const o=r[i];if(!o)continue;switch(i){case"css":await e(`${r.path}**/*.css`,s,i,a=>f(a,o).css);break;case"html":await e(`${r.path}**/*.html`,s,i,async a=>await c(a,o));break;case"js":await e(`${r.path}**/*.{js,mjs,cjs}`,s,i,async a=>(await n(a,o)).code);break;case"img":await e(`${r.path}**/*.{avci,avcs,avif,avifs,gif,heic,heics,heif,heifs,jfif,jif,jpe,jpeg,jpg,png,raw,tiff,webp}`,s,i,async a=>await h(a,o),async a=>p(a));break;case"svg":await e(`${r.path}**/*.svg`,s,i,async a=>{const t=m(a,o);if(typeof t.error<"u")console.log(t.error);else return t.data});break;default:break}}};export{d as default};
