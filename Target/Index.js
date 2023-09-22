import h from"./Library/SharpRead.js";import p from"./Option/Index.js";import{minify as d}from"csso";import l,{Bytes as y,Merge as n,Default as c}from"files-pipe";import{minify as S}from"html-minifier-terser";import u from"sharp";import{optimize as w}from"svgo";import{minify as g}from"terser";import"url";var j=(i={})=>{for(const a in i)Object.prototype.hasOwnProperty.call(i,a)&&i[a]===!0&&(i[a]=p[a]);const e=n(p,i),f=new Set;if(typeof e.Path<"u"&&(e.Path instanceof Array||e.Path instanceof Set))for(const a of e.Path)f.add(a);return{name:"astro-compress",hooks:{"astro:build:done":async({dir:a})=>{f.size||f.add(a),c.Cache&&e.Cache&&e.Cache.Search===c.Cache.Search&&(e.Cache.Search=a);for(const[s,o]of Object.entries(e))if(o)for(const m of f)await(await(await(await new l(e.Cache,e.Logger).In(m)).By(typeof e.Map=="object"?e.Map[s]:"")).Not(e.Exclude)).Pipe(n(e.Action,n(e.Action,{Wrote:async t=>{switch(s){case"CSS":return d(t.Buffer.toString(),o).css;case"HTML":return await S(t.Buffer.toString(),o);case"JavaScript":{const{code:r}=await g(t.Buffer.toString(),o);return r||t.Buffer}case"Image":return h(o,t);case"SVG":{const{data:r}=w(t.Buffer.toString(),o);return typeof r<"u"?r:t.Buffer}default:return t.Buffer}},Read:async t=>{switch(s){case"Image":{const{format:r}=await u(t.Input).metadata();return u(t.Input,{failOn:"none",sequentialRead:!0,unlimited:!0,animated:r==="webp"||r==="gif"})}default:return await c.Action.Read(t)}},Fulfilled:async t=>t.Files>0?`Successfully compressed a total of ${t.Files} ${s} ${t.Files===1?"file":"files"} for ${await y(t.Info.Total)}.`:!1})))}}}};export{j as default};
