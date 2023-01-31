import m from"./lib/format-bytes.js";import o from"files-pipeline/dist/lib/deepmerge.js";import{optimize as c}from"svgo";import u from"files-pipeline/dist/options/index.js";import f from"./options/index.js";import{files as l}from"files-pipeline";import{minify as d}from"csso";import{minify as h}from"html-minifier-terser";import n from"sharp";import{minify as g}from"terser";import y from"./lib/sharp-read.js";var I=(t={})=>{for(const r in t)Object.prototype.hasOwnProperty.call(t,r)&&t[r]===!0&&(t[r]=f[r]);t=o(f,t);const s=new Set;if(typeof t.path<"u")if(t.path instanceof Array||t.path instanceof Set)for(const r of t.path)s.add(r);else s.add(t.path);return{name:"astro-compress",hooks:{"astro:build:done":async()=>{for(const[r,i]of Object.entries(t))if(i)for(const p of s)await(await(await(await new l(t.logger).in(p)).by((()=>{switch(r){case"css":return"**/*.css";case"html":return"**/*.html";case"js":return"**/*.{js,mjs,cjs}";case"img":return"**/*.{avci,avcs,avif,avifs,gif,heic,heics,heif,heifs,jfif,jif,jpe,jpeg,jpg,apng,png,raw,tiff,webp}";case"svg":return"**/*.svg"}})())).not(t.exclude)).pipeline(o(f.pipeline,{wrote:async e=>{switch(r){case"css":return d(e.buffer.toString(),i).css;case"html":return await h(e.buffer.toString(),i);case"js":{const{code:a}=await g(e.buffer.toString(),i);return a||e.buffer}case"img":return y(i,e);case"svg":{const{data:a}=c(e.buffer.toString(),i);return typeof a<"u"?a:e.buffer}default:return e.buffer}},read:async e=>{switch(r){case"img":{const{format:a}=await n(e.inputPath).metadata();return n(e.inputPath,{failOn:"none",sequentialRead:!0,unlimited:!0,animated:a==="webp"||a==="gif"})}default:return await u.pipeline.read(e)}},fulfilled:async e=>e.files>0?`Successfully compressed a total of ${e.files} ${r.toUpperCase()} ${e.files===1?"file":"files"} for ${await m(e.info.total)}.`:!1}))}}}};export{I as default};
