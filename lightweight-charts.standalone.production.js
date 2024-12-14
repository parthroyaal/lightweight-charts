!function () { "use strict"; var t, i; function n(t, i) { var n, h = ((n = {})[0] = [], n[1] = [t.lineWidth, t.lineWidth], n[2] = [2 * t.lineWidth, 2 * t.lineWidth], n[3] = [6 * t.lineWidth, 6 * t.lineWidth], n[4] = [t.lineWidth, 4 * t.lineWidth], n)[i]; t.setLineDash(h) } function h(t, i, n, h) { t.beginPath(); var s = t.lineWidth % 2 ? .5 : 0; t.moveTo(n, i + s), t.lineTo(h, i + s), t.stroke() } !function (t) { t[t.Simple = 0] = "Simple", t[t.WithSteps = 1] = "WithSteps" }(t || (t = {})), function (t) { t[t.Solid = 0] = "Solid", t[t.Dotted = 1] = "Dotted", t[t.Dashed = 2] = "Dashed", t[t.LargeDashed = 3] = "LargeDashed", t[t.SparseDotted = 4] = "SparseDotted" }(i || (i = {})); var s = function (t, i) { return (s = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (t, i) { t.__proto__ = i } || function (t, i) { for (var n in i) Object.prototype.hasOwnProperty.call(i, n) && (t[n] = i[n]) })(t, i) }; function r(t, i) { if ("function" != typeof i && null !== i) throw new TypeError("Class extends value " + String(i) + " is not a constructor or null"); function n() { this.constructor = t } s(t, i), t.prototype = null === i ? Object.create(i) : (n.prototype = i.prototype, new n) } var e = function () { return (e = Object.assign || function (t) { for (var i, n = 1, h = arguments.length; n < h; n++)for (var s in i = arguments[n]) Object.prototype.hasOwnProperty.call(i, s) && (t[s] = i[s]); return t }).apply(this, arguments) }; function u(t, i) { for (var n = 0, h = i.length, s = t.length; n < h; n++, s++)t[s] = i[n]; return t } function a(t, i) { if (!t) throw new Error("Assertion failed" + (i ? ": " + i : "")) } function o(t) { if (void 0 === t) throw new Error("Value is undefined"); return t } function l(t) { if (null === t) throw new Error("Value is null"); return t } function f(t) { return l(o(t)) } function c(t) { for (var i = [], n = 1; n < arguments.length; n++)i[n - 1] = arguments[n]; for (var h = 0, s = i; h < s.length; h++) { var r = s[h]; for (var e in r) void 0 !== r[e] && ("object" != typeof r[e] || void 0 === t[e] ? t[e] = r[e] : c(t[e], r[e])) } return t } function v(t) { return "number" == typeof t && isFinite(t) } function _(t) { return "number" == typeof t && t % 1 == 0 } function d(t) { return "string" == typeof t } function w(t) { return "boolean" == typeof t } function M(t) { var i, n, h, s = t; if (!s || "object" != typeof s) return s; for (n in i = Array.isArray(s) ? [] : {}, s) s.hasOwnProperty(n) && (h = s[n], i[n] = h && "object" == typeof h ? M(h) : h); return i } function b(t) { return null !== t } function m(t) { return null === t ? void 0 : t } var g = function () { function t() { this.t = [] } return t.prototype.i = function (t) { this.t = t }, t.prototype.h = function (t, i, n, h) { this.t.forEach((function (s) { t.save(), s.h(t, i, n, h), t.restore() })) }, t }(), p = function () { function t() { } return t.prototype.h = function (t, i, n, h) { t.save(), t.scale(i, i), this.u(t, n, h), t.restore() }, t.prototype.o = function (t, i, n, h) { t.save(), t.scale(i, i), this.l(t, n, h), t.restore() }, t.prototype.l = function (t, i, n) { }, t }(), y = function (t) { function i() { var i = null !== t && t.apply(this, arguments) || this; return i.v = null, i } return r(i, t), i.prototype._ = function (t) { this.v = t }, i.prototype.u = function (t) { if (null !== this.v && null !== this.v.M) { var i = this.v.M, n = this.v, h = function (h) { t.beginPath(); for (var s = i.to - 1; s >= i.from; --s) { var r = n.m[s]; t.moveTo(r.g, r.p), t.arc(r.g, r.p, h, 0, 2 * Math.PI) } t.fill() }; t.fillStyle = n.k, h(n.N + 2), t.fillStyle = n.S, h(n.N) } }, i }(p); var k = { from: 0, to: 1 }, x = function () { function t(t, i) { this.C = new g, this.D = [], this.T = [], this.L = new Map, this.B = t, this.A = i, this.C.i(this.D) } return t.prototype.V = function (t) { var i = this, n = this.B.O(); n.length !== this.D.length && (this.T = n.map((function () { return { m: [{ g: 0, p: 0, P: 0, F: 0 }], S: "", k: i.B.I().layout.backgroundColor, N: 0, M: null } })), this.D = this.T.map((function (t) { 