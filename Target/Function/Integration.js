
var T = (o = {}) => {
	for (const a in o)
		Object.prototype.hasOwnProperty.call(o, a) &&
			o[a] === !0 &&
			(o[a] = d[a]);
	const {
			Path: n,
			Cache: s,
			Logger: u,
			Map: m,
			Exclude: w,
			Action: S,
			CSS: g,
			HTML: h,
			Image: I,
			JavaScript: j,
			SVG: A,
		} = p(d, o),
		c = new Set();
	if (typeof n < "u" && (n instanceof Array || n instanceof Set))
		for (const a of n) c.add(a);
	return {
		name: "astro-compress",
		hooks: {
			"astro:build:done": async ({ dir: a }) => {
				if (typeof m == "object") {
					c.size || c.add(a),
						typeof s == "object" &&
							s.Search === M &&
							(s.Search = a);
					for (const [r, e] of Object.entries({
						CSS: g,
						HTML: h,
						Image: I,
						JavaScript: j,
						SVG: A,
					})) {
						if (!(e && m[r])) return;
						(f = p(
							S,
							p(S, {
								Wrote: async ({ Buffer: t, Input: i }) => {
									switch (r) {
										case "CSS":
											return (
												await import("csso")
											).minify(t.toString(), e).css;
										case "HTML":
											return await (
												await import(
													"html-minifier-terser"
												)
											).minify(t.toString(), e);
										case "JavaScript":
											try {
												return (
													(
														await (
															await import(
																"terser"
															)
														).minify(
															t.toString(),
															e
														)
													).code ?? t
												);
											} catch (l) {
												return (
													console.log(i),
													console.log(l),
													t
												);
											}
										case "Image":
											return (
												await import(
													"../Function/Image.js"
												)
											).default(e, {
												Buffer: t,
												Input: i,
											});
										case "SVG": {
											const { data: l } = (
												await import("svgo")
											).optimize(t.toString(), e);
											return l ?? t;
										}
										default:
											return t;
									}
								},
								Fulfilled: async (t) =>
									t.Files > 0
										? `Successfully compressed a total of ${
												t.Files
										  } ${r} ${
												t.Files === 1 ? "file" : "files"
										  } for ${await (
												await import(
													"files-pipe/Target/Function/Bytes.js"
												)
										  ).default(t.Info.Total)}.`
										: !1,
							})
						)),
							r === "Image" &&
								(f = p(f, {
									Read: async ({ Input: t }) => {
										const { format: i } =
											await y(t).metadata();
										return y(t, {
											failOn: "none",
											sequentialRead: !0,
											unlimited: !0,
											animated:
												i === "webp" || i === "gif",
										});
									},
								})),


							x({}, {});


						for (const t of c)
							await (
								await (
									await (
										await new O(s, u).In(t)
									).By(m[r] ?? "**/*")
								).Not(w)
							).Pipe(f);
					}
				}
			},
		},
	};
};
const { default: d } = await import("../Variable/Option.js"),
	{
		default: {
			Cache: { Search: M },
		},
	} = await import("files-pipe/Target/Variable/Option.js"),
	{ default: p } = await import(
		"typescript-esbuild/Target/Function/Merge.js"
	);
import x from "typescript-esbuild/Target/Function/Merge.js";
const { default: y } = await import("sharp");
let f;
const { default: O } = await import("files-pipe");
export {
	d as Default,
	O as Files,
	p as Merge,
	M as Search,
	f as _Action,
	T as default,
	y as sharp,
};
