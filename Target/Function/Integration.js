let f;var x=(...[s={}])=>{Object.entries(s).forEach(([a,e])=>Object.defineProperty(s,a,{value:e===!0?u[a]:s[a]}));const{Path:n,Cache:c,Logger:h,Map:d,Exclude:S,Action:g,CSS:b,HTML:j,Image:A,JavaScript:P,SVG:T,Parser:w}=m(u,s),p=new Set;return typeof n<"u"&&(Array.isArray(n)||n instanceof Set)&&n.forEach(a=>p.add(a)),typeof w=="object"&&Object.entries(w).forEach(([a,e])=>Object.defineProperty(w,a,{value:Array.isArray(e)?e:[e]})),{name:"@playform/compress",hooks:{"astro:config:done":async({config:{outDir:{pathname:a}}})=>{f=(await import("path")).parse(a).dir.replace(/\\/g,"/"),f.startsWith("/")&&(f=f.substring(1))},"astro:build:done":async({dir:a})=>{if(console.log(`
${(await import("kleur/colors")).bgGreen((await import("kleur/colors")).black(" Compress "))}`),typeof d=="object"){p.size||p.add(a),typeof c=="object"&&c.Search===I&&(c.Search=a);for(const[e,r]of Object.entries({CSS:b,HTML:j,Image:A,JavaScript:P,SVG:T}))if(!(!(r&&d[e])||typeof r!="object")){y=m(g,m(g,{Wrote:async({Buffer:t,Input:o})=>{switch(e){case"CSS":return(await import("csso")).minify(t.toString(),r.csso).css;case"HTML":return await(await import("html-minifier-terser")).minify(t.toString(),r["html-minifier-terser"]);case"JavaScript":return(await(await import("terser")).minify(t.toString(),r.terser)).code??t;case"Image":try{return t instanceof l?await(await import("./Image/Writesharp.js")).default(r.sharp,{Buffer:t,Input:o}):t}catch(i){return console.log(i),t}case"SVG":return(await import("svgo")).optimize(t.toString(),r.svgo).data??t;default:return t}},Fulfilled:async({File:t,Info:{Total:o}})=>t>0?`${(await import("kleur/colors")).green(`\u2713\u2000Successfully compressed a total of ${t} ${e} ${t===1?"file":"files"} for ${await(await import("@playform/pipe/Target/Function/Bytes.js")).default(o)}.`)}`:!1})),e==="Image"&&(y=m(y,{Read:async({Input:t,Buffer:o})=>{try{const{format:i}=await l(t).metadata();return l(t,{failOn:"error",sequentialRead:!0,unlimited:!1,animated:i==="webp"||i==="gif"})}catch(i){return console.log(i),o}}}));for(const t of p)await(await(await(await new(await import("@playform/pipe")).default(c,h).In(t)).By(d[e]??"**/*")).Not(S)).Pipe(y)}}}}}};const{default:u}=await import("../Variable/Option.js"),{default:{Cache:{Search:I}}}=await import("@playform/pipe/Target/Variable/Option.js"),{default:m}=await import("./Merge.js"),{default:l}=await import("sharp");l.cache(!1);let y;export{u as Default,l as Defaultsharp,m as Merge,I as Search,f as System,y as _Action,x as default};
