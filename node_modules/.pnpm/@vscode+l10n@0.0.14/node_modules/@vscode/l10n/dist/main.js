"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// node_modules/request-light/lib/node/main.js
var require_main = __commonJS({
  "node_modules/request-light/lib/node/main.js"(exports) {
    (() => {
      var e = { 46: (e2, t3) => {
        "use strict";
        Object.defineProperty(t3, "__esModule", { value: true }), t3.default = function(e3, t4, { signal: o2 } = {}) {
          return new Promise((r2, n2) => {
            function s() {
              null == o2 || o2.removeEventListener("abort", s), e3.removeListener(t4, a), e3.removeListener("error", u);
            }
            function a(...e4) {
              s(), r2(e4);
            }
            function u(e4) {
              s(), n2(e4);
            }
            null == o2 || o2.addEventListener("abort", s), e3.on(t4, a), e3.on("error", u);
          });
        };
      }, 54: function(e2, t3, o2) {
        "use strict";
        var r2 = this && this.__importDefault || function(e3) {
          return e3 && e3.__esModule ? e3 : { default: e3 };
        };
        const n2 = o2(361), s = r2(o2(374)), a = r2(o2(304)), u = s.default("agent-base");
        function i() {
          const { stack: e3 } = new Error();
          return "string" == typeof e3 && e3.split("\n").some((e4) => -1 !== e4.indexOf("(https.js:") || -1 !== e4.indexOf("node:https:"));
        }
        function c(e3, t4) {
          return new c.Agent(e3, t4);
        }
        !function(e3) {
          class t4 extends n2.EventEmitter {
            constructor(e4, t5) {
              super();
              let o3 = t5;
              "function" == typeof e4 ? this.callback = e4 : e4 && (o3 = e4), this.timeout = null, o3 && "number" == typeof o3.timeout && (this.timeout = o3.timeout), this.maxFreeSockets = 1, this.maxSockets = 1, this.maxTotalSockets = 1 / 0, this.sockets = {}, this.freeSockets = {}, this.requests = {}, this.options = {};
            }
            get defaultPort() {
              return "number" == typeof this.explicitDefaultPort ? this.explicitDefaultPort : i() ? 443 : 80;
            }
            set defaultPort(e4) {
              this.explicitDefaultPort = e4;
            }
            get protocol() {
              return "string" == typeof this.explicitProtocol ? this.explicitProtocol : i() ? "https:" : "http:";
            }
            set protocol(e4) {
              this.explicitProtocol = e4;
            }
            callback(e4, t5, o3) {
              throw new Error('"agent-base" has no default implementation, you must subclass and override `callback()`');
            }
            addRequest(e4, t5) {
              const o3 = Object.assign({}, t5);
              "boolean" != typeof o3.secureEndpoint && (o3.secureEndpoint = i()), null == o3.host && (o3.host = "localhost"), null == o3.port && (o3.port = o3.secureEndpoint ? 443 : 80), null == o3.protocol && (o3.protocol = o3.secureEndpoint ? "https:" : "http:"), o3.host && o3.path && delete o3.path, delete o3.agent, delete o3.hostname, delete o3._defaultAgent, delete o3.defaultPort, delete o3.createConnection, e4._last = true, e4.shouldKeepAlive = false;
              let r3 = false, n3 = null;
              const s2 = o3.timeout || this.timeout, c2 = (t6) => {
                e4._hadError || (e4.emit("error", t6), e4._hadError = true);
              }, l = () => {
                n3 = null, r3 = true;
                const e5 = new Error(`A "socket" was not created for HTTP request before ${s2}ms`);
                e5.code = "ETIMEOUT", c2(e5);
              }, d = (e5) => {
                r3 || (null !== n3 && (clearTimeout(n3), n3 = null), c2(e5));
              }, f = (t6) => {
                if (r3)
                  return;
                if (null != n3 && (clearTimeout(n3), n3 = null), s3 = t6, Boolean(s3) && "function" == typeof s3.addRequest)
                  return u("Callback returned another Agent instance %o", t6.constructor.name), void t6.addRequest(e4, o3);
                var s3;
                if (t6)
                  return t6.once("free", () => {
                    this.freeSocket(t6, o3);
                  }), void e4.onSocket(t6);
                const a2 = new Error(`no Duplex stream was returned to agent-base for \`${e4.method} ${e4.path}\``);
                c2(a2);
              };
              if ("function" == typeof this.callback) {
                this.promisifiedCallback || (this.callback.length >= 3 ? (u("Converting legacy callback function to promise"), this.promisifiedCallback = a.default(this.callback)) : this.promisifiedCallback = this.callback), "number" == typeof s2 && s2 > 0 && (n3 = setTimeout(l, s2)), "port" in o3 && "number" != typeof o3.port && (o3.port = Number(o3.port));
                try {
                  u("Resolving socket for %o request: %o", o3.protocol, `${e4.method} ${e4.path}`), Promise.resolve(this.promisifiedCallback(e4, o3)).then(f, d);
                } catch (e5) {
                  Promise.reject(e5).catch(d);
                }
              } else
                c2(new Error("`callback` is not defined"));
            }
            freeSocket(e4, t5) {
              u("Freeing socket %o %o", e4.constructor.name, t5), e4.destroy();
            }
            destroy() {
              u("Destroying agent %o", this.constructor.name);
            }
          }
          e3.Agent = t4, e3.prototype = e3.Agent.prototype;
        }(c || (c = {})), e2.exports = c;
      }, 304: (e2, t3) => {
        "use strict";
        Object.defineProperty(t3, "__esModule", { value: true }), t3.default = function(e3) {
          return function(t4, o2) {
            return new Promise((r2, n2) => {
              e3.call(this, t4, o2, (e4, t5) => {
                e4 ? n2(e4) : r2(t5);
              });
            });
          };
        };
      }, 370: function(e2, t3, o2) {
        "use strict";
        var r2 = this && this.__awaiter || function(e3, t4, o3, r3) {
          return new (o3 || (o3 = Promise))(function(n3, s2) {
            function a2(e4) {
              try {
                i2(r3.next(e4));
              } catch (e5) {
                s2(e5);
              }
            }
            function u2(e4) {
              try {
                i2(r3.throw(e4));
              } catch (e5) {
                s2(e5);
              }
            }
            function i2(e4) {
              var t5;
              e4.done ? n3(e4.value) : (t5 = e4.value, t5 instanceof o3 ? t5 : new o3(function(e5) {
                e5(t5);
              })).then(a2, u2);
            }
            i2((r3 = r3.apply(e3, t4 || [])).next());
          });
        }, n2 = this && this.__importDefault || function(e3) {
          return e3 && e3.__esModule ? e3 : { default: e3 };
        };
        Object.defineProperty(t3, "__esModule", { value: true });
        const s = n2(o2(808)), a = n2(o2(404)), u = n2(o2(310)), i = n2(o2(374)), c = n2(o2(46)), l = o2(54), d = (0, i.default)("http-proxy-agent");
        class f extends l.Agent {
          constructor(e3) {
            let t4;
            if (t4 = "string" == typeof e3 ? u.default.parse(e3) : e3, !t4)
              throw new Error("an HTTP(S) proxy server `host` and `port` must be specified!");
            d("Creating new HttpProxyAgent instance: %o", t4), super(t4);
            const o3 = Object.assign({}, t4);
            var r3;
            this.secureProxy = t4.secureProxy || "string" == typeof (r3 = o3.protocol) && /^https:?$/i.test(r3), o3.host = o3.hostname || o3.host, "string" == typeof o3.port && (o3.port = parseInt(o3.port, 10)), !o3.port && o3.host && (o3.port = this.secureProxy ? 443 : 80), o3.host && o3.path && (delete o3.path, delete o3.pathname), this.proxy = o3;
          }
          callback(e3, t4) {
            return r2(this, void 0, void 0, function* () {
              const { proxy: o3, secureProxy: r3 } = this, n3 = u.default.parse(e3.path);
              let i2;
              if (n3.protocol || (n3.protocol = "http:"), n3.hostname || (n3.hostname = t4.hostname || t4.host || null), null == n3.port && (t4.port, 1) && (n3.port = String(t4.port)), "80" === n3.port && (n3.port = ""), e3.path = u.default.format(n3), o3.auth && e3.setHeader("Proxy-Authorization", `Basic ${Buffer.from(o3.auth).toString("base64")}`), r3 ? (d("Creating `tls.Socket`: %o", o3), i2 = a.default.connect(o3)) : (d("Creating `net.Socket`: %o", o3), i2 = s.default.connect(o3)), e3._header) {
                let t5, o4;
                d("Regenerating stored HTTP header string for request"), e3._header = null, e3._implicitHeader(), e3.output && e3.output.length > 0 ? (d("Patching connection write() output buffer with updated header"), t5 = e3.output[0], o4 = t5.indexOf("\r\n\r\n") + 4, e3.output[0] = e3._header + t5.substring(o4), d("Output buffer: %o", e3.output)) : e3.outputData && e3.outputData.length > 0 && (d("Patching connection write() output buffer with updated header"), t5 = e3.outputData[0].data, o4 = t5.indexOf("\r\n\r\n") + 4, e3.outputData[0].data = e3._header + t5.substring(o4), d("Output buffer: %o", e3.outputData[0].data));
              }
              return yield (0, c.default)(i2, "connect"), i2;
            });
          }
        }
        t3.default = f;
      }, 201: function(e2, t3, o2) {
        "use strict";
        const r2 = (this && this.__importDefault || function(e3) {
          return e3 && e3.__esModule ? e3 : { default: e3 };
        })(o2(370));
        function n2(e3) {
          return new r2.default(e3);
        }
        !function(e3) {
          e3.HttpProxyAgent = r2.default, e3.prototype = r2.default.prototype;
        }(n2 || (n2 = {})), e2.exports = n2;
      }, 146: function(e2, t3, o2) {
        "use strict";
        var r2 = this && this.__awaiter || function(e3, t4, o3, r3) {
          return new (o3 || (o3 = Promise))(function(n3, s2) {
            function a2(e4) {
              try {
                i2(r3.next(e4));
              } catch (e5) {
                s2(e5);
              }
            }
            function u2(e4) {
              try {
                i2(r3.throw(e4));
              } catch (e5) {
                s2(e5);
              }
            }
            function i2(e4) {
              var t5;
              e4.done ? n3(e4.value) : (t5 = e4.value, t5 instanceof o3 ? t5 : new o3(function(e5) {
                e5(t5);
              })).then(a2, u2);
            }
            i2((r3 = r3.apply(e3, t4 || [])).next());
          });
        }, n2 = this && this.__importDefault || function(e3) {
          return e3 && e3.__esModule ? e3 : { default: e3 };
        };
        Object.defineProperty(t3, "__esModule", { value: true });
        const s = n2(o2(808)), a = n2(o2(404)), u = n2(o2(310)), i = n2(o2(491)), c = n2(o2(374)), l = o2(54), d = n2(o2(829)), f = c.default("https-proxy-agent:agent");
        class p extends l.Agent {
          constructor(e3) {
            let t4;
            if (t4 = "string" == typeof e3 ? u.default.parse(e3) : e3, !t4)
              throw new Error("an HTTP(S) proxy server `host` and `port` must be specified!");
            f("creating new HttpsProxyAgent instance: %o", t4), super(t4);
            const o3 = Object.assign({}, t4);
            var r3;
            this.secureProxy = t4.secureProxy || "string" == typeof (r3 = o3.protocol) && /^https:?$/i.test(r3), o3.host = o3.hostname || o3.host, "string" == typeof o3.port && (o3.port = parseInt(o3.port, 10)), !o3.port && o3.host && (o3.port = this.secureProxy ? 443 : 80), this.secureProxy && !("ALPNProtocols" in o3) && (o3.ALPNProtocols = ["http 1.1"]), o3.host && o3.path && (delete o3.path, delete o3.pathname), this.proxy = o3;
          }
          callback(e3, t4) {
            return r2(this, void 0, void 0, function* () {
              const { proxy: o3, secureProxy: r3 } = this;
              let n3;
              r3 ? (f("Creating `tls.Socket`: %o", o3), n3 = a.default.connect(o3)) : (f("Creating `net.Socket`: %o", o3), n3 = s.default.connect(o3));
              const u2 = Object.assign({}, o3.headers);
              let c2 = `CONNECT ${t4.host}:${t4.port} HTTP/1.1\r
`;
              o3.auth && (u2["Proxy-Authorization"] = `Basic ${Buffer.from(o3.auth).toString("base64")}`);
              let { host: l2, port: p2, secureEndpoint: g } = t4;
              (function(e4, t5) {
                return Boolean(!t5 && 80 === e4 || t5 && 443 === e4);
              })(p2, g) || (l2 += `:${p2}`), u2.Host = l2, u2.Connection = "close";
              for (const e4 of Object.keys(u2))
                c2 += `${e4}: ${u2[e4]}\r
`;
              const v = d.default(n3);
              n3.write(`${c2}\r
`);
              const { statusCode: m, buffered: y } = yield v;
              if (200 === m) {
                if (e3.once("socket", h), t4.secureEndpoint) {
                  f("Upgrading socket connection to TLS");
                  const e4 = t4.servername || t4.host;
                  return a.default.connect(Object.assign(Object.assign({}, function(e5, ...t5) {
                    const o4 = {};
                    let r4;
                    for (r4 in e5)
                      t5.includes(r4) || (o4[r4] = e5[r4]);
                    return o4;
                  }(t4, "host", "hostname", "path", "port")), { socket: n3, servername: e4 }));
                }
                return n3;
              }
              n3.destroy();
              const b = new s.default.Socket({ writable: false });
              return b.readable = true, e3.once("socket", (e4) => {
                f("replaying proxy buffer for failed request"), i.default(e4.listenerCount("data") > 0), e4.push(y), e4.push(null);
              }), b;
            });
          }
        }
        function h(e3) {
          e3.resume();
        }
        t3.default = p;
      }, 18: function(e2, t3, o2) {
        "use strict";
        const r2 = (this && this.__importDefault || function(e3) {
          return e3 && e3.__esModule ? e3 : { default: e3 };
        })(o2(146));
        function n2(e3) {
          return new r2.default(e3);
        }
        !function(e3) {
          e3.HttpsProxyAgent = r2.default, e3.prototype = r2.default.prototype;
        }(n2 || (n2 = {})), e2.exports = n2;
      }, 829: function(e2, t3, o2) {
        "use strict";
        var r2 = this && this.__importDefault || function(e3) {
          return e3 && e3.__esModule ? e3 : { default: e3 };
        };
        Object.defineProperty(t3, "__esModule", { value: true });
        const n2 = r2(o2(374)).default("https-proxy-agent:parse-proxy-response");
        t3.default = function(e3) {
          return new Promise((t4, o3) => {
            let r3 = 0;
            const s = [];
            function a() {
              const o4 = e3.read();
              o4 ? function(e4) {
                s.push(e4), r3 += e4.length;
                const o5 = Buffer.concat(s, r3);
                if (-1 === o5.indexOf("\r\n\r\n"))
                  return n2("have not received end of HTTP headers yet..."), void a();
                const u2 = o5.toString("ascii", 0, o5.indexOf("\r\n")), i2 = +u2.split(" ")[1];
                n2("got proxy server response: %o", u2), t4({ statusCode: i2, buffered: o5 });
              }(o4) : e3.once("readable", a);
            }
            function u(e4) {
              n2("onclose had error %o", e4);
            }
            function i() {
              n2("onend");
            }
            e3.on("error", function t5(r4) {
              e3.removeListener("end", i), e3.removeListener("error", t5), e3.removeListener("close", u), e3.removeListener("readable", a), n2("onerror %o", r4), o3(r4);
            }), e3.on("close", u), e3.on("end", i), a();
          });
        };
      }, 539: function(e2, t3, o2) {
        "use strict";
        var r2, n2 = this && this.__extends || (r2 = function(e3, t4) {
          return r2 = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(e4, t5) {
            e4.__proto__ = t5;
          } || function(e4, t5) {
            for (var o3 in t5)
              Object.prototype.hasOwnProperty.call(t5, o3) && (e4[o3] = t5[o3]);
          }, r2(e3, t4);
        }, function(e3, t4) {
          if ("function" != typeof t4 && null !== t4)
            throw new TypeError("Class extends value " + String(t4) + " is not a constructor or null");
          function o3() {
            this.constructor = e3;
          }
          r2(e3, t4), e3.prototype = null === t4 ? Object.create(t4) : (o3.prototype = t4.prototype, new o3());
        }), s = this && this.__assign || function() {
          return s = Object.assign || function(e3) {
            for (var t4, o3 = 1, r3 = arguments.length; o3 < r3; o3++)
              for (var n3 in t4 = arguments[o3])
                Object.prototype.hasOwnProperty.call(t4, n3) && (e3[n3] = t4[n3]);
            return e3;
          }, s.apply(this, arguments);
        };
        Object.defineProperty(t3, "__esModule", { value: true }), t3.getErrorStatusDescription = t3.xhr = t3.configure = void 0;
        var a = o2(685), u = o2(687), i = o2(310), c = o2(472), l = o2(796), d = o2(201), f = o2(18);
        if (process.env.VSCODE_NLS_CONFIG) {
          var p = process.env.VSCODE_NLS_CONFIG;
          c.config(JSON.parse(p));
        }
        var h = c.loadMessageBundle(), g = void 0, v = true;
        function m(e3) {
          var t4;
          return new Promise(function(o3, r3) {
            var n3 = (0, i.parse)(e3.url), s2 = { hostname: n3.hostname, agent: !!e3.agent && e3.agent, port: n3.port ? parseInt(n3.port) : "https:" === n3.protocol ? 443 : 80, path: n3.path, method: e3.type || "GET", headers: e3.headers, rejectUnauthorized: "boolean" != typeof e3.strictSSL || e3.strictSSL };
            e3.user && e3.password && (s2.auth = e3.user + ":" + e3.password);
            var c2 = function(r4) {
              if (r4.statusCode >= 300 && r4.statusCode < 400 && e3.followRedirects && e3.followRedirects > 0 && r4.headers.location) {
                var s3 = r4.headers.location;
                s3.startsWith("/") && (s3 = (0, i.format)({ protocol: n3.protocol, hostname: n3.hostname, port: n3.port, pathname: s3 })), o3(m(function(e4) {
                  for (var t5 = [], o4 = 1; o4 < arguments.length; o4++)
                    t5[o4 - 1] = arguments[o4];
                  return t5.forEach(function(t6) {
                    return Object.keys(t6).forEach(function(o5) {
                      return e4[o5] = t6[o5];
                    });
                  }), e4;
                }({}, e3, { url: s3, followRedirects: e3.followRedirects - 1 })));
              } else
                o3({ req: t4, res: r4 });
            };
            (t4 = "https:" === n3.protocol ? u.request(s2, c2) : a.request(s2, c2)).on("error", r3), e3.timeout && t4.setTimeout(e3.timeout), e3.data && t4.write(e3.data), t4.end(), e3.token && (e3.token.isCancellationRequested && t4.destroy(new y()), e3.token.onCancellationRequested(function() {
              t4.destroy(new y());
            }));
          });
        }
        t3.configure = function(e3, t4) {
          g = e3, v = t4;
        }, t3.xhr = function(e3) {
          return "boolean" != typeof (e3 = s({}, e3)).strictSSL && (e3.strictSSL = v), e3.agent || (e3.agent = function(e4, t4) {
            void 0 === t4 && (t4 = {});
            var o3 = (0, i.parse)(e4), r3 = t4.proxyUrl || function(e5) {
              return "http:" === e5.protocol ? process.env.HTTP_PROXY || process.env.http_proxy || null : "https:" === e5.protocol && (process.env.HTTPS_PROXY || process.env.https_proxy || process.env.HTTP_PROXY || process.env.http_proxy) || null;
            }(o3);
            if (!r3)
              return null;
            var n3 = (0, i.parse)(r3);
            if (!/^https?:$/.test(n3.protocol))
              return null;
            var s2 = { host: n3.hostname, port: Number(n3.port), auth: n3.auth, rejectUnauthorized: "boolean" != typeof t4.strictSSL || t4.strictSSL, protocol: n3.protocol };
            return "http:" === o3.protocol ? d(s2) : f(s2);
          }(e3.url, { proxyUrl: g, strictSSL: v })), "number" != typeof e3.followRedirects && (e3.followRedirects = 5), m(e3).then(function(o3) {
            return new Promise(function(r3, n3) {
              var s2, a2, u2 = o3.res, c2 = u2, d2 = false, f2 = u2.headers && u2.headers["content-encoding"];
              if (f2 && (s2 = e3.type, a2 = o3.res.statusCode, !("HEAD" === s2 || a2 >= 100 && a2 < 200 || 204 === a2 || 304 === a2))) {
                var p2 = { flush: l.constants.Z_SYNC_FLUSH, finishFlush: l.constants.Z_SYNC_FLUSH };
                if ("gzip" === f2) {
                  var g2 = l.createGunzip(p2);
                  u2.pipe(g2), c2 = g2;
                } else if ("deflate" === f2) {
                  var v2 = l.createInflate(p2);
                  u2.pipe(v2), c2 = v2;
                }
              }
              var m2 = [];
              c2.on("data", function(e4) {
                return m2.push(e4);
              }), c2.on("end", function() {
                if (!d2) {
                  if (d2 = true, e3.followRedirects > 0 && (u2.statusCode >= 300 && u2.statusCode <= 303 || 307 === u2.statusCode)) {
                    var o4 = u2.headers.location;
                    if (o4.startsWith("/")) {
                      var s3 = (0, i.parse)(e3.url);
                      o4 = (0, i.format)({ protocol: s3.protocol, hostname: s3.hostname, port: s3.port, pathname: o4 });
                    }
                    if (o4) {
                      var a3 = { type: e3.type, url: o4, user: e3.user, password: e3.password, headers: e3.headers, timeout: e3.timeout, followRedirects: e3.followRedirects - 1, data: e3.data, token: e3.token };
                      return void (0, t3.xhr)(a3).then(r3, n3);
                    }
                  }
                  var c3 = Buffer.concat(m2), l2 = { responseText: c3.toString(), body: c3, status: u2.statusCode, headers: u2.headers || {} };
                  u2.statusCode >= 200 && u2.statusCode < 300 || 1223 === u2.statusCode ? r3(l2) : n3(l2);
                }
              }), c2.on("error", function(t4) {
                var o4;
                o4 = y.is(t4) ? t4 : { responseText: h("error", "Unable to access {0}. Error: {1}", e3.url, t4.message), body: Buffer.concat(m2), status: 500, headers: {} }, d2 = true, n3(o4);
              }), e3.token && (e3.token.isCancellationRequested && c2.destroy(new y()), e3.token.onCancellationRequested(function() {
                c2.destroy(new y());
              }));
            });
          }, function(t4) {
            var o3;
            return o3 = y.is(t4) ? t4 : { responseText: e3.agent ? h("error.cannot.connect.proxy", "Unable to connect to {0} through a proxy. Error: {1}", e3.url, t4.message) : h("error.cannot.connect", "Unable to connect to {0}. Error: {1}", e3.url, t4.message), body: Buffer.concat([]), status: 404, headers: {} }, Promise.reject(o3);
          });
        }, t3.getErrorStatusDescription = function(e3) {
          if (!(e3 < 400))
            switch (e3) {
              case 400:
                return h("status.400", "Bad request. The request cannot be fulfilled due to bad syntax.");
              case 401:
                return h("status.401", "Unauthorized. The server is refusing to respond.");
              case 403:
                return h("status.403", "Forbidden. The server is refusing to respond.");
              case 404:
                return h("status.404", "Not Found. The requested location could not be found.");
              case 405:
                return h("status.405", "Method not allowed. A request was made using a request method not supported by that location.");
              case 406:
                return h("status.406", "Not Acceptable. The server can only generate a response that is not accepted by the client.");
              case 407:
                return h("status.407", "Proxy Authentication Required. The client must first authenticate itself with the proxy.");
              case 408:
                return h("status.408", "Request Timeout. The server timed out waiting for the request.");
              case 409:
                return h("status.409", "Conflict. The request could not be completed because of a conflict in the request.");
              case 410:
                return h("status.410", "Gone. The requested page is no longer available.");
              case 411:
                return h("status.411", 'Length Required. The "Content-Length" is not defined.');
              case 412:
                return h("status.412", "Precondition Failed. The precondition given in the request evaluated to false by the server.");
              case 413:
                return h("status.413", "Request Entity Too Large. The server will not accept the request, because the request entity is too large.");
              case 414:
                return h("status.414", "Request-URI Too Long. The server will not accept the request, because the URL is too long.");
              case 415:
                return h("status.415", "Unsupported Media Type. The server will not accept the request, because the media type is not supported.");
              case 500:
                return h("status.500", "Internal Server Error.");
              case 501:
                return h("status.501", "Not Implemented. The server either does not recognize the request method, or it lacks the ability to fulfill the request.");
              case 503:
                return h("status.503", "Service Unavailable. The server is currently unavailable (overloaded or down).");
              default:
                return h("status.416", "HTTP status code {0}", e3);
            }
        };
        var y = function(e3) {
          function t4() {
            var o3 = e3.call(this, "The user aborted a request") || this;
            return o3.name = "AbortError", Object.setPrototypeOf(o3, t4.prototype), o3;
          }
          return n2(t4, e3), t4.is = function(e4) {
            return e4 instanceof t4;
          }, t4;
        }(Error);
      }, 800: (e2, t3, o2) => {
        "use strict";
        Object.defineProperty(t3, "__esModule", { value: true }), t3.config = t3.loadMessageBundle = t3.localize = t3.format = t3.setPseudo = t3.isPseudo = t3.isDefined = t3.BundleFormat = t3.MessageFormat = void 0;
        var r2, n2, s, a = o2(926);
        function u(e3) {
          return void 0 !== e3;
        }
        function i(e3, o3) {
          return t3.isPseudo && (e3 = "\uFF3B" + e3.replace(/[aouei]/g, "$&$&") + "\uFF3D"), 0 === o3.length ? e3 : e3.replace(/\{(\d+)\}/g, function(e4, t4) {
            var r3 = t4[0], n3 = o3[r3], s2 = e4;
            return "string" == typeof n3 ? s2 = n3 : "number" != typeof n3 && "boolean" != typeof n3 && null != n3 || (s2 = String(n3)), s2;
          });
        }
        (s = t3.MessageFormat || (t3.MessageFormat = {})).file = "file", s.bundle = "bundle", s.both = "both", (n2 = t3.BundleFormat || (t3.BundleFormat = {})).standalone = "standalone", n2.languagePack = "languagePack", function(e3) {
          e3.is = function(e4) {
            var t4 = e4;
            return t4 && u(t4.key) && u(t4.comment);
          };
        }(r2 || (r2 = {})), t3.isDefined = u, t3.isPseudo = false, t3.setPseudo = function(e3) {
          t3.isPseudo = e3;
        }, t3.format = i, t3.localize = function(e3, t4) {
          for (var o3 = [], r3 = 2; r3 < arguments.length; r3++)
            o3[r3 - 2] = arguments[r3];
          return i(t4, o3);
        }, t3.loadMessageBundle = function(e3) {
          return (0, a.default)().loadMessageBundle(e3);
        }, t3.config = function(e3) {
          return (0, a.default)().config(e3);
        };
      }, 926: (e2, t3) => {
        "use strict";
        var o2;
        function r2() {
          if (void 0 === o2)
            throw new Error("No runtime abstraction layer installed");
          return o2;
        }
        Object.defineProperty(t3, "__esModule", { value: true }), function(e3) {
          e3.install = function(e4) {
            if (void 0 === e4)
              throw new Error("No runtime abstraction layer provided");
            o2 = e4;
          };
        }(r2 || (r2 = {})), t3.default = r2;
      }, 472: (e2, t3, o2) => {
        "use strict";
        Object.defineProperty(t3, "__esModule", { value: true }), t3.config = t3.loadMessageBundle = t3.BundleFormat = t3.MessageFormat = void 0;
        var r2 = o2(17), n2 = o2(147), s = o2(926), a = o2(800), u = o2(800);
        Object.defineProperty(t3, "MessageFormat", { enumerable: true, get: function() {
          return u.MessageFormat;
        } }), Object.defineProperty(t3, "BundleFormat", { enumerable: true, get: function() {
          return u.BundleFormat;
        } });
        var i, c, l = Object.prototype.toString;
        function d(e3) {
          return "[object Number]" === l.call(e3);
        }
        function f(e3) {
          return "[object String]" === l.call(e3);
        }
        function p(e3) {
          return JSON.parse(n2.readFileSync(e3, "utf8"));
        }
        function h(e3) {
          return function(t4, o3) {
            for (var r3 = [], n3 = 2; n3 < arguments.length; n3++)
              r3[n3 - 2] = arguments[n3];
            return d(t4) ? t4 >= e3.length ? void console.error("Broken localize call found. Index out of bounds. Stacktrace is\n: ".concat(new Error("").stack)) : (0, a.format)(e3[t4], r3) : f(o3) ? (console.warn("Message ".concat(o3, " didn't get externalized correctly.")), (0, a.format)(o3, r3)) : void console.error("Broken localize call found. Stacktrace is\n: ".concat(new Error("").stack));
          };
        }
        function g(e3, t4) {
          return i[e3] = t4, t4;
        }
        function v(e3) {
          try {
            return function(e4) {
              var t4 = p(r2.join(e4, "nls.metadata.json")), o3 = /* @__PURE__ */ Object.create(null);
              for (var n3 in t4) {
                var s2 = t4[n3];
                o3[n3] = s2.messages;
              }
              return o3;
            }(e3);
          } catch (e4) {
            return void console.log("Generating default bundle from meta data failed.", e4);
          }
        }
        function m(e3, t4) {
          var o3;
          if (true === c.languagePackSupport && void 0 !== c.cacheRoot && void 0 !== c.languagePackId && void 0 !== c.translationsConfigFile && void 0 !== c.translationsConfig)
            try {
              o3 = function(e4, t5) {
                var o4, s3, a2, u2 = r2.join(c.cacheRoot, "".concat(e4.id, "-").concat(e4.hash, ".json")), i2 = false, l2 = false;
                try {
                  return o4 = JSON.parse(n2.readFileSync(u2, { encoding: "utf8", flag: "r" })), s3 = u2, a2 = new Date(), n2.utimes(s3, a2, a2, function() {
                  }), o4;
                } catch (e5) {
                  if ("ENOENT" === e5.code)
                    l2 = true;
                  else {
                    if (!(e5 instanceof SyntaxError))
                      throw e5;
                    console.log("Syntax error parsing message bundle: ".concat(e5.message, ".")), n2.unlink(u2, function(e6) {
                      e6 && console.error("Deleting corrupted bundle ".concat(u2, " failed."));
                    }), i2 = true;
                  }
                }
                if (o4 = function(e5, t6) {
                  var o5 = c.translationsConfig[e5.id];
                  if (o5) {
                    var n3 = p(o5).contents, s4 = p(r2.join(t6, "nls.metadata.json")), a3 = /* @__PURE__ */ Object.create(null);
                    for (var u3 in s4) {
                      var i3 = s4[u3], l3 = n3["".concat(e5.outDir, "/").concat(u3)];
                      if (l3) {
                        for (var d2 = [], h2 = 0; h2 < i3.keys.length; h2++) {
                          var g2 = i3.keys[h2], v2 = l3[f(g2) ? g2 : g2.key];
                          void 0 === v2 && (v2 = i3.messages[h2]), d2.push(v2);
                        }
                        a3[u3] = d2;
                      } else
                        a3[u3] = i3.messages;
                    }
                    return a3;
                  }
                }(e4, t5), !o4 || i2)
                  return o4;
                if (l2)
                  try {
                    n2.writeFileSync(u2, JSON.stringify(o4), { encoding: "utf8", flag: "wx" });
                  } catch (e5) {
                    if ("EEXIST" === e5.code)
                      return o4;
                    throw e5;
                  }
                return o4;
              }(e3, t4);
            } catch (e4) {
              console.log("Load or create bundle failed ", e4);
            }
          if (!o3) {
            if (c.languagePackSupport)
              return v(t4);
            var s2 = function(e4) {
              for (var t5 = c.language; t5; ) {
                var o4 = r2.join(e4, "nls.bundle.".concat(t5, ".json"));
                if (n2.existsSync(o4))
                  return o4;
                var s3 = t5.lastIndexOf("-");
                t5 = s3 > 0 ? t5.substring(0, s3) : void 0;
              }
              if (void 0 === t5 && (o4 = r2.join(e4, "nls.bundle.json"), n2.existsSync(o4)))
                return o4;
            }(t4);
            if (s2)
              try {
                return p(s2);
              } catch (e4) {
                console.log("Loading in the box message bundle failed.", e4);
              }
            o3 = v(t4);
          }
          return o3;
        }
        function y(e3) {
          if (!e3)
            return a.localize;
          var t4 = r2.extname(e3);
          if (t4 && (e3 = e3.substr(0, e3.length - t4.length)), c.messageFormat === a.MessageFormat.both || c.messageFormat === a.MessageFormat.bundle) {
            var o3 = function(e4) {
              for (var t5, o4 = r2.dirname(e4); t5 = r2.join(o4, "nls.metadata.header.json"), !n2.existsSync(t5); ) {
                var s3 = r2.dirname(o4);
                if (s3 === o4) {
                  t5 = void 0;
                  break;
                }
                o4 = s3;
              }
              return t5;
            }(e3);
            if (o3) {
              var s2 = r2.dirname(o3), u2 = i[s2];
              if (void 0 === u2)
                try {
                  var l2 = JSON.parse(n2.readFileSync(o3, "utf8"));
                  try {
                    var d2 = m(l2, s2);
                    u2 = g(s2, d2 ? { header: l2, nlsBundle: d2 } : null);
                  } catch (e4) {
                    console.error("Failed to load nls bundle", e4), u2 = g(s2, null);
                  }
                } catch (e4) {
                  console.error("Failed to read header file", e4), u2 = g(s2, null);
                }
              if (u2) {
                var f2 = e3.substr(s2.length + 1).replace(/\\/g, "/"), v2 = u2.nlsBundle[f2];
                return void 0 === v2 ? (console.error("Messages for file ".concat(e3, " not found. See console for details.")), function() {
                  return "Messages not found.";
                }) : h(v2);
              }
            }
          }
          if (c.messageFormat === a.MessageFormat.both || c.messageFormat === a.MessageFormat.file)
            try {
              var y2 = p(function(e4) {
                var t5;
                if (c.cacheLanguageResolution && t5)
                  ;
                else {
                  if (a.isPseudo || !c.language)
                    t5 = ".nls.json";
                  else
                    for (var o4 = c.language; o4; ) {
                      var r3 = ".nls." + o4 + ".json";
                      if (n2.existsSync(e4 + r3)) {
                        t5 = r3;
                        break;
                      }
                      var s3 = o4.lastIndexOf("-");
                      s3 > 0 ? o4 = o4.substring(0, s3) : (t5 = ".nls.json", o4 = null);
                    }
                  c.cacheLanguageResolution;
                }
                return e4 + t5;
              }(e3));
              return Array.isArray(y2) ? h(y2) : (0, a.isDefined)(y2.messages) && (0, a.isDefined)(y2.keys) ? h(y2.messages) : (console.error("String bundle '".concat(e3, "' uses an unsupported format.")), function() {
                return "File bundle has unsupported format. See console for details";
              });
            } catch (e4) {
              "ENOENT" !== e4.code && console.error("Failed to load single file bundle", e4);
            }
          return console.error("Failed to load message bundle for file ".concat(e3)), function() {
            return "Failed to load message bundle. See console for details.";
          };
        }
        function b(e3) {
          return e3 && (f(e3.locale) && (c.locale = e3.locale.toLowerCase(), c.language = c.locale, i = /* @__PURE__ */ Object.create(null)), void 0 !== e3.messageFormat && (c.messageFormat = e3.messageFormat), e3.bundleFormat === a.BundleFormat.standalone && true === c.languagePackSupport && (c.languagePackSupport = false)), (0, a.setPseudo)("pseudo" === c.locale), y;
        }
        !function() {
          if (c = { locale: void 0, language: void 0, languagePackSupport: false, cacheLanguageResolution: true, messageFormat: a.MessageFormat.bundle }, f(process.env.VSCODE_NLS_CONFIG))
            try {
              var e3 = JSON.parse(process.env.VSCODE_NLS_CONFIG), t4 = void 0;
              if (e3.availableLanguages) {
                var o3 = e3.availableLanguages["*"];
                f(o3) && (t4 = o3);
              }
              if (f(e3.locale) && (c.locale = e3.locale.toLowerCase()), void 0 === t4 ? c.language = c.locale : "en" !== t4 && (c.language = t4), function(e4) {
                return true === e4 || false === e4;
              }(e3._languagePackSupport) && (c.languagePackSupport = e3._languagePackSupport), f(e3._cacheRoot) && (c.cacheRoot = e3._cacheRoot), f(e3._languagePackId) && (c.languagePackId = e3._languagePackId), f(e3._translationsConfigFile)) {
                c.translationsConfigFile = e3._translationsConfigFile;
                try {
                  c.translationsConfig = p(c.translationsConfigFile);
                } catch (t5) {
                  if (e3._corruptedFile) {
                    var s2 = r2.dirname(e3._corruptedFile);
                    n2.exists(s2, function(t6) {
                      t6 && n2.writeFile(e3._corruptedFile, "corrupted", "utf8", function(e4) {
                        console.error(e4);
                      });
                    });
                  }
                }
              }
            } catch (e4) {
            }
          (0, a.setPseudo)("pseudo" === c.locale), i = /* @__PURE__ */ Object.create(null);
        }(), t3.loadMessageBundle = y, t3.config = b, s.default.install(Object.freeze({ loadMessageBundle: y, config: b }));
      }, 374: (e2, t3) => {
        function o2() {
        }
        Object.defineProperty(t3, "__esModule", { value: true }), t3.default = function(e3) {
          return o2;
        };
      }, 491: (e2) => {
        "use strict";
        e2.exports = require("assert");
      }, 361: (e2) => {
        "use strict";
        e2.exports = require("events");
      }, 147: (e2) => {
        "use strict";
        e2.exports = require("fs");
      }, 685: (e2) => {
        "use strict";
        e2.exports = require("http");
      }, 687: (e2) => {
        "use strict";
        e2.exports = require("https");
      }, 808: (e2) => {
        "use strict";
        e2.exports = require("net");
      }, 17: (e2) => {
        "use strict";
        e2.exports = require("path");
      }, 404: (e2) => {
        "use strict";
        e2.exports = require("tls");
      }, 310: (e2) => {
        "use strict";
        e2.exports = require("url");
      }, 796: (e2) => {
        "use strict";
        e2.exports = require("zlib");
      } }, t2 = {}, o = function o2(r2) {
        var n2 = t2[r2];
        if (void 0 !== n2)
          return n2.exports;
        var s = t2[r2] = { exports: {} };
        return e[r2].call(s.exports, s, s.exports, o2), s.exports;
      }(539), r = exports;
      for (var n in o)
        r[n] = o[n];
      o.__esModule && Object.defineProperty(r, "__esModule", { value: true });
    })();
  }
});

// src/main.ts
var main_exports = {};
__export(main_exports, {
  config: () => config,
  t: () => t
});
module.exports = __toCommonJS(main_exports);

// src/node/reader.ts
var import_fs = require("fs");
var import_promises = require("fs/promises");
var import_request_light = __toESM(require_main());
async function readFileFromUri(uri) {
  if (uri.protocol === "file:") {
    return await (0, import_promises.readFile)(uri, "utf8");
  }
  if (uri.protocol === "http:" || uri.protocol === "https:") {
    try {
      const res = await (0, import_request_light.xhr)({
        url: uri.toString(),
        followRedirects: 5,
        headers: {
          "Accept-Encoding": "gzip, deflate",
          "Accept": "application/json"
        }
      });
      const decoded = new TextDecoder().decode(res.body);
      return decoded;
    } catch (e) {
      throw new Error(e.responseText ?? (0, import_request_light.getErrorStatusDescription)(e.status) ?? e.toString());
    }
  }
  throw new Error("Unsupported protocol");
}
function readFileFromFsPath(fsPath) {
  return (0, import_fs.readFileSync)(fsPath, "utf8");
}

// src/main.ts
var bundle;
function config(config2) {
  if ("contents" in config2) {
    if (typeof config2.contents === "string") {
      bundle = JSON.parse(config2.contents);
    } else {
      bundle = config2.contents;
    }
    return;
  }
  if ("fsPath" in config2) {
    const fileContent = readFileFromFsPath(config2.fsPath);
    const content = JSON.parse(fileContent);
    bundle = isBuiltinExtension(content) ? content.contents.bundle : content;
    return;
  }
  if (config2.uri) {
    let uri = config2.uri;
    if (typeof config2.uri === "string") {
      uri = new URL(config2.uri);
    }
    return new Promise((resolve, reject) => {
      const p = readFileFromUri(uri).then((uriContent) => {
        try {
          const content = JSON.parse(uriContent);
          bundle = isBuiltinExtension(content) ? content.contents.bundle : content;
        } catch (err) {
          reject(err);
        }
      }).catch((err) => {
        reject(err);
      });
      resolve(p);
    });
  }
}
function t(...args) {
  const firstArg = args[0];
  let key;
  let message;
  let formatArgs;
  if (typeof firstArg === "string") {
    key = firstArg;
    message = firstArg;
    args.splice(0, 1);
    formatArgs = !args || typeof args[0] !== "object" ? args : args[0];
  } else if (firstArg instanceof Array) {
    const replacements = args.slice(1);
    if (firstArg.length !== replacements.length + 1) {
      throw new Error("expected a string as the first argument to l10n.t");
    }
    let str = firstArg[0];
    for (let i = 1; i < firstArg.length; i++) {
      str += `{${i - 1}}` + firstArg[i];
    }
    return t(str, ...replacements);
  } else {
    message = firstArg.message;
    key = message;
    if (firstArg.comment && firstArg.comment.length > 0) {
      key += `/${Array.isArray(firstArg.comment) ? firstArg.comment.join("") : firstArg.comment}`;
    }
    formatArgs = firstArg.args ?? {};
  }
  const messageFromBundle = bundle?.[key];
  if (!messageFromBundle) {
    return format(message, formatArgs);
  }
  if (typeof messageFromBundle === "string") {
    return format(messageFromBundle, formatArgs);
  }
  if (messageFromBundle.comment) {
    return format(messageFromBundle.message, formatArgs);
  }
  return format(message, formatArgs);
}
var _format2Regexp = /{([^}]+)}/g;
function format(template, values) {
  return template.replace(_format2Regexp, (match, group) => values[group] ?? match);
}
function isBuiltinExtension(json) {
  return !!(typeof json?.contents?.bundle === "object" && typeof json?.version === "string");
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  config,
  t
});
