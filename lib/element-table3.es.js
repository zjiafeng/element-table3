import { getCurrentScope as ss, onScopeDispose as is, watch as J, unref as O, ref as T, defineComponent as G, openBlock as P, createElementBlock as I, createElementVNode as V, warn as us, getCurrentInstance as be, computed as A, provide as tt, inject as ue, onMounted as Ue, toRef as Vt, onUnmounted as Ko, isRef as Lr, onBeforeUnmount as Ot, onBeforeMount as qo, mergeProps as $t, renderSlot as pe, useAttrs as cs, useSlots as ds, shallowRef as yn, nextTick as he, onUpdated as Zn, withDirectives as ke, normalizeClass as M, normalizeStyle as Ee, createCommentVNode as q, Fragment as He, createBlock as Y, withCtx as X, resolveDynamicComponent as Lt, withModifiers as it, createVNode as me, toDisplayString as ve, vShow as Mt, Transition as eo, resolveComponent as ae, reactive as pn, cloneVNode as fs, Text as ps, Comment as Nr, Teleport as hs, createTextVNode as Kt, readonly as vs, vModelCheckbox as Kn, toRefs as An, h as Z, toRaw as zr, triggerRef as gn, resolveDirective as to, renderList as qt, withKeys as Ze, vModelText as gs, createSlots as ms, watchEffect as tn } from "vue";
process.env.NODE_ENV !== "production" && Object.freeze({});
process.env.NODE_ENV !== "production" && Object.freeze([]);
const Mr = () => {
}, bs = Object.prototype.hasOwnProperty, Ut = (e, t) => bs.call(e, t), ys = Array.isArray, Rn = (e) => typeof e == "function", Wt = (e) => typeof e == "string", Rt = (e) => e !== null && typeof e == "object", ws = Object.prototype.toString, Rr = (e) => ws.call(e), co = (e) => Rr(e).slice(8, -1), Cs = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return (n) => t[n] || (t[n] = e(n));
}, Ss = /-(\w)/g, $s = Cs((e) => e.replace(Ss, (t, n) => n ? n.toUpperCase() : ""));
function Es(e, t) {
  return e.sort((n, o) => {
    if (n[t] && o[t])
      return n[t].localeCompare(o[t]);
  });
}
function fo(e, t) {
  let n = [], o = [];
  return e.forEach((l) => {
    Number(l[t]) ? n.push(l) : o.push(l);
  }), [...n.sort((l, a) => l[t] - a[t]), ...Es(o, t)];
}
const Os = (e, t) => {
  if (e.install = (n) => {
    for (const o of [e, ...Object.values(t != null ? t : {})])
      n.component(o.name, o);
  }, t)
    for (const [n, o] of Object.entries(t))
      e[n] = o;
  return e;
};
var Ts = typeof global == "object" && global && global.Object === Object && global;
const Ir = Ts;
var Ps = typeof self == "object" && self && self.Object === Object && self, As = Ir || Ps || Function("return this")();
const mt = As;
var ks = mt.Symbol;
const It = ks;
var Hr = Object.prototype, Ls = Hr.hasOwnProperty, Ns = Hr.toString, mn = It ? It.toStringTag : void 0;
function zs(e) {
  var t = Ls.call(e, mn), n = e[mn];
  try {
    e[mn] = void 0;
    var o = !0;
  } catch {
  }
  var l = Ns.call(e);
  return o && (t ? e[mn] = n : delete e[mn]), l;
}
var Ms = Object.prototype, Rs = Ms.toString;
function Is(e) {
  return Rs.call(e);
}
var Hs = "[object Null]", Fs = "[object Undefined]", $l = It ? It.toStringTag : void 0;
function hn(e) {
  return e == null ? e === void 0 ? Fs : Hs : $l && $l in Object(e) ? zs(e) : Is(e);
}
function nn(e) {
  return e != null && typeof e == "object";
}
var Bs = "[object Symbol]";
function no(e) {
  return typeof e == "symbol" || nn(e) && hn(e) == Bs;
}
function _s(e, t) {
  for (var n = -1, o = e == null ? 0 : e.length, l = Array(o); ++n < o; )
    l[n] = t(e[n], n, e);
  return l;
}
var Ds = Array.isArray;
const Gt = Ds;
var xs = 1 / 0, El = It ? It.prototype : void 0, Ol = El ? El.toString : void 0;
function Fr(e) {
  if (typeof e == "string")
    return e;
  if (Gt(e))
    return _s(e, Fr) + "";
  if (no(e))
    return Ol ? Ol.call(e) : "";
  var t = e + "";
  return t == "0" && 1 / e == -xs ? "-0" : t;
}
var Ws = /\s/;
function js(e) {
  for (var t = e.length; t-- && Ws.test(e.charAt(t)); )
    ;
  return t;
}
var Vs = /^\s+/;
function Ks(e) {
  return e && e.slice(0, js(e) + 1).replace(Vs, "");
}
function Yt(e) {
  var t = typeof e;
  return e != null && (t == "object" || t == "function");
}
var Tl = 0 / 0, qs = /^[-+]0x[0-9a-f]+$/i, Us = /^0b[01]+$/i, Gs = /^0o[0-7]+$/i, Ys = parseInt;
function Pl(e) {
  if (typeof e == "number")
    return e;
  if (no(e))
    return Tl;
  if (Yt(e)) {
    var t = typeof e.valueOf == "function" ? e.valueOf() : e;
    e = Yt(t) ? t + "" : t;
  }
  if (typeof e != "string")
    return e === 0 ? e : +e;
  e = Ks(e);
  var n = Us.test(e);
  return n || Gs.test(e) ? Ys(e.slice(2), n ? 2 : 8) : qs.test(e) ? Tl : +e;
}
var Xs = "[object AsyncFunction]", Js = "[object Function]", Qs = "[object GeneratorFunction]", Zs = "[object Proxy]";
function Br(e) {
  if (!Yt(e))
    return !1;
  var t = hn(e);
  return t == Js || t == Qs || t == Xs || t == Zs;
}
var ei = mt["__core-js_shared__"];
const po = ei;
var Al = function() {
  var e = /[^.]+$/.exec(po && po.keys && po.keys.IE_PROTO || "");
  return e ? "Symbol(src)_1." + e : "";
}();
function ti(e) {
  return !!Al && Al in e;
}
var ni = Function.prototype, oi = ni.toString;
function Qt(e) {
  if (e != null) {
    try {
      return oi.call(e);
    } catch {
    }
    try {
      return e + "";
    } catch {
    }
  }
  return "";
}
var li = /[\\^$.*+?()[\]{}|]/g, ri = /^\[object .+?Constructor\]$/, ai = Function.prototype, si = Object.prototype, ii = ai.toString, ui = si.hasOwnProperty, ci = RegExp(
  "^" + ii.call(ui).replace(li, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function di(e) {
  if (!Yt(e) || ti(e))
    return !1;
  var t = Br(e) ? ci : ri;
  return t.test(Qt(e));
}
function fi(e, t) {
  return e == null ? void 0 : e[t];
}
function Zt(e, t) {
  var n = fi(e, t);
  return di(n) ? n : void 0;
}
var pi = Zt(mt, "WeakMap");
const Co = pi;
var hi = function() {
  try {
    var e = Zt(Object, "defineProperty");
    return e({}, "", {}), e;
  } catch {
  }
}();
const kl = hi;
var vi = 9007199254740991, gi = /^(?:0|[1-9]\d*)$/;
function _r(e, t) {
  var n = typeof e;
  return t = t == null ? vi : t, !!t && (n == "number" || n != "symbol" && gi.test(e)) && e > -1 && e % 1 == 0 && e < t;
}
function mi(e, t, n) {
  t == "__proto__" && kl ? kl(e, t, {
    configurable: !0,
    enumerable: !0,
    value: n,
    writable: !0
  }) : e[t] = n;
}
function Uo(e, t) {
  return e === t || e !== e && t !== t;
}
var bi = Object.prototype, yi = bi.hasOwnProperty;
function wi(e, t, n) {
  var o = e[t];
  (!(yi.call(e, t) && Uo(o, n)) || n === void 0 && !(t in e)) && mi(e, t, n);
}
var Ci = 9007199254740991;
function Dr(e) {
  return typeof e == "number" && e > -1 && e % 1 == 0 && e <= Ci;
}
function Si(e) {
  return e != null && Dr(e.length) && !Br(e);
}
var $i = Object.prototype;
function Ei(e) {
  var t = e && e.constructor, n = typeof t == "function" && t.prototype || $i;
  return e === n;
}
function Oi(e, t) {
  for (var n = -1, o = Array(e); ++n < e; )
    o[n] = t(n);
  return o;
}
var Ti = "[object Arguments]";
function Ll(e) {
  return nn(e) && hn(e) == Ti;
}
var xr = Object.prototype, Pi = xr.hasOwnProperty, Ai = xr.propertyIsEnumerable, ki = Ll(function() {
  return arguments;
}()) ? Ll : function(e) {
  return nn(e) && Pi.call(e, "callee") && !Ai.call(e, "callee");
};
const Li = ki;
function Ni() {
  return !1;
}
var Wr = typeof exports == "object" && exports && !exports.nodeType && exports, Nl = Wr && typeof module == "object" && module && !module.nodeType && module, zi = Nl && Nl.exports === Wr, zl = zi ? mt.Buffer : void 0, Mi = zl ? zl.isBuffer : void 0, Ri = Mi || Ni;
const So = Ri;
var Ii = "[object Arguments]", Hi = "[object Array]", Fi = "[object Boolean]", Bi = "[object Date]", _i = "[object Error]", Di = "[object Function]", xi = "[object Map]", Wi = "[object Number]", ji = "[object Object]", Vi = "[object RegExp]", Ki = "[object Set]", qi = "[object String]", Ui = "[object WeakMap]", Gi = "[object ArrayBuffer]", Yi = "[object DataView]", Xi = "[object Float32Array]", Ji = "[object Float64Array]", Qi = "[object Int8Array]", Zi = "[object Int16Array]", eu = "[object Int32Array]", tu = "[object Uint8Array]", nu = "[object Uint8ClampedArray]", ou = "[object Uint16Array]", lu = "[object Uint32Array]", ye = {};
ye[Xi] = ye[Ji] = ye[Qi] = ye[Zi] = ye[eu] = ye[tu] = ye[nu] = ye[ou] = ye[lu] = !0;
ye[Ii] = ye[Hi] = ye[Gi] = ye[Fi] = ye[Yi] = ye[Bi] = ye[_i] = ye[Di] = ye[xi] = ye[Wi] = ye[ji] = ye[Vi] = ye[Ki] = ye[qi] = ye[Ui] = !1;
function ru(e) {
  return nn(e) && Dr(e.length) && !!ye[hn(e)];
}
function au(e) {
  return function(t) {
    return e(t);
  };
}
var jr = typeof exports == "object" && exports && !exports.nodeType && exports, wn = jr && typeof module == "object" && module && !module.nodeType && module, su = wn && wn.exports === jr, ho = su && Ir.process, iu = function() {
  try {
    var e = wn && wn.require && wn.require("util").types;
    return e || ho && ho.binding && ho.binding("util");
  } catch {
  }
}();
const Ml = iu;
var Rl = Ml && Ml.isTypedArray, uu = Rl ? au(Rl) : ru;
const Vr = uu;
var cu = Object.prototype, du = cu.hasOwnProperty;
function fu(e, t) {
  var n = Gt(e), o = !n && Li(e), l = !n && !o && So(e), a = !n && !o && !l && Vr(e), r = n || o || l || a, i = r ? Oi(e.length, String) : [], s = i.length;
  for (var u in e)
    (t || du.call(e, u)) && !(r && (u == "length" || l && (u == "offset" || u == "parent") || a && (u == "buffer" || u == "byteLength" || u == "byteOffset") || _r(u, s))) && i.push(u);
  return i;
}
function pu(e, t) {
  return function(n) {
    return e(t(n));
  };
}
var hu = pu(Object.keys, Object);
const vu = hu;
var gu = Object.prototype, mu = gu.hasOwnProperty;
function bu(e) {
  if (!Ei(e))
    return vu(e);
  var t = [];
  for (var n in Object(e))
    mu.call(e, n) && n != "constructor" && t.push(n);
  return t;
}
function yu(e) {
  return Si(e) ? fu(e) : bu(e);
}
var wu = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, Cu = /^\w*$/;
function Su(e, t) {
  if (Gt(e))
    return !1;
  var n = typeof e;
  return n == "number" || n == "symbol" || n == "boolean" || e == null || no(e) ? !0 : Cu.test(e) || !wu.test(e) || t != null && e in Object(t);
}
var $u = Zt(Object, "create");
const En = $u;
function Eu() {
  this.__data__ = En ? En(null) : {}, this.size = 0;
}
function Ou(e) {
  var t = this.has(e) && delete this.__data__[e];
  return this.size -= t ? 1 : 0, t;
}
var Tu = "__lodash_hash_undefined__", Pu = Object.prototype, Au = Pu.hasOwnProperty;
function ku(e) {
  var t = this.__data__;
  if (En) {
    var n = t[e];
    return n === Tu ? void 0 : n;
  }
  return Au.call(t, e) ? t[e] : void 0;
}
var Lu = Object.prototype, Nu = Lu.hasOwnProperty;
function zu(e) {
  var t = this.__data__;
  return En ? t[e] !== void 0 : Nu.call(t, e);
}
var Mu = "__lodash_hash_undefined__";
function Ru(e, t) {
  var n = this.__data__;
  return this.size += this.has(e) ? 0 : 1, n[e] = En && t === void 0 ? Mu : t, this;
}
function Xt(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var o = e[t];
    this.set(o[0], o[1]);
  }
}
Xt.prototype.clear = Eu;
Xt.prototype.delete = Ou;
Xt.prototype.get = ku;
Xt.prototype.has = zu;
Xt.prototype.set = Ru;
function Iu() {
  this.__data__ = [], this.size = 0;
}
function oo(e, t) {
  for (var n = e.length; n--; )
    if (Uo(e[n][0], t))
      return n;
  return -1;
}
var Hu = Array.prototype, Fu = Hu.splice;
function Bu(e) {
  var t = this.__data__, n = oo(t, e);
  if (n < 0)
    return !1;
  var o = t.length - 1;
  return n == o ? t.pop() : Fu.call(t, n, 1), --this.size, !0;
}
function _u(e) {
  var t = this.__data__, n = oo(t, e);
  return n < 0 ? void 0 : t[n][1];
}
function Du(e) {
  return oo(this.__data__, e) > -1;
}
function xu(e, t) {
  var n = this.__data__, o = oo(n, e);
  return o < 0 ? (++this.size, n.push([e, t])) : n[o][1] = t, this;
}
function Tt(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var o = e[t];
    this.set(o[0], o[1]);
  }
}
Tt.prototype.clear = Iu;
Tt.prototype.delete = Bu;
Tt.prototype.get = _u;
Tt.prototype.has = Du;
Tt.prototype.set = xu;
var Wu = Zt(mt, "Map");
const On = Wu;
function ju() {
  this.size = 0, this.__data__ = {
    hash: new Xt(),
    map: new (On || Tt)(),
    string: new Xt()
  };
}
function Vu(e) {
  var t = typeof e;
  return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null;
}
function lo(e, t) {
  var n = e.__data__;
  return Vu(t) ? n[typeof t == "string" ? "string" : "hash"] : n.map;
}
function Ku(e) {
  var t = lo(this, e).delete(e);
  return this.size -= t ? 1 : 0, t;
}
function qu(e) {
  return lo(this, e).get(e);
}
function Uu(e) {
  return lo(this, e).has(e);
}
function Gu(e, t) {
  var n = lo(this, e), o = n.size;
  return n.set(e, t), this.size += n.size == o ? 0 : 1, this;
}
function Pt(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var o = e[t];
    this.set(o[0], o[1]);
  }
}
Pt.prototype.clear = ju;
Pt.prototype.delete = Ku;
Pt.prototype.get = qu;
Pt.prototype.has = Uu;
Pt.prototype.set = Gu;
var Yu = "Expected a function";
function Go(e, t) {
  if (typeof e != "function" || t != null && typeof t != "function")
    throw new TypeError(Yu);
  var n = function() {
    var o = arguments, l = t ? t.apply(this, o) : o[0], a = n.cache;
    if (a.has(l))
      return a.get(l);
    var r = e.apply(this, o);
    return n.cache = a.set(l, r) || a, r;
  };
  return n.cache = new (Go.Cache || Pt)(), n;
}
Go.Cache = Pt;
var Xu = 500;
function Ju(e) {
  var t = Go(e, function(o) {
    return n.size === Xu && n.clear(), o;
  }), n = t.cache;
  return t;
}
var Qu = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, Zu = /\\(\\)?/g, ec = Ju(function(e) {
  var t = [];
  return e.charCodeAt(0) === 46 && t.push(""), e.replace(Qu, function(n, o, l, a) {
    t.push(l ? a.replace(Zu, "$1") : o || n);
  }), t;
});
const tc = ec;
function nc(e) {
  return e == null ? "" : Fr(e);
}
function Kr(e, t) {
  return Gt(e) ? e : Su(e, t) ? [e] : tc(nc(e));
}
var oc = 1 / 0;
function qr(e) {
  if (typeof e == "string" || no(e))
    return e;
  var t = e + "";
  return t == "0" && 1 / e == -oc ? "-0" : t;
}
function lc(e, t) {
  t = Kr(t, e);
  for (var n = 0, o = t.length; e != null && n < o; )
    e = e[qr(t[n++])];
  return n && n == o ? e : void 0;
}
function xe(e, t, n) {
  var o = e == null ? void 0 : lc(e, t);
  return o === void 0 ? n : o;
}
function rc(e, t) {
  for (var n = -1, o = t.length, l = e.length; ++n < o; )
    e[l + n] = t[n];
  return e;
}
function ac() {
  this.__data__ = new Tt(), this.size = 0;
}
function sc(e) {
  var t = this.__data__, n = t.delete(e);
  return this.size = t.size, n;
}
function ic(e) {
  return this.__data__.get(e);
}
function uc(e) {
  return this.__data__.has(e);
}
var cc = 200;
function dc(e, t) {
  var n = this.__data__;
  if (n instanceof Tt) {
    var o = n.__data__;
    if (!On || o.length < cc - 1)
      return o.push([e, t]), this.size = ++n.size, this;
    n = this.__data__ = new Pt(o);
  }
  return n.set(e, t), this.size = n.size, this;
}
function zt(e) {
  var t = this.__data__ = new Tt(e);
  this.size = t.size;
}
zt.prototype.clear = ac;
zt.prototype.delete = sc;
zt.prototype.get = ic;
zt.prototype.has = uc;
zt.prototype.set = dc;
function fc(e, t) {
  for (var n = -1, o = e == null ? 0 : e.length, l = 0, a = []; ++n < o; ) {
    var r = e[n];
    t(r, n, e) && (a[l++] = r);
  }
  return a;
}
function pc() {
  return [];
}
var hc = Object.prototype, vc = hc.propertyIsEnumerable, Il = Object.getOwnPropertySymbols, gc = Il ? function(e) {
  return e == null ? [] : (e = Object(e), fc(Il(e), function(t) {
    return vc.call(e, t);
  }));
} : pc;
const mc = gc;
function bc(e, t, n) {
  var o = t(e);
  return Gt(e) ? o : rc(o, n(e));
}
function Hl(e) {
  return bc(e, yu, mc);
}
var yc = Zt(mt, "DataView");
const $o = yc;
var wc = Zt(mt, "Promise");
const Eo = wc;
var Cc = Zt(mt, "Set");
const Oo = Cc;
var Fl = "[object Map]", Sc = "[object Object]", Bl = "[object Promise]", _l = "[object Set]", Dl = "[object WeakMap]", xl = "[object DataView]", $c = Qt($o), Ec = Qt(On), Oc = Qt(Eo), Tc = Qt(Oo), Pc = Qt(Co), Bt = hn;
($o && Bt(new $o(new ArrayBuffer(1))) != xl || On && Bt(new On()) != Fl || Eo && Bt(Eo.resolve()) != Bl || Oo && Bt(new Oo()) != _l || Co && Bt(new Co()) != Dl) && (Bt = function(e) {
  var t = hn(e), n = t == Sc ? e.constructor : void 0, o = n ? Qt(n) : "";
  if (o)
    switch (o) {
      case $c:
        return xl;
      case Ec:
        return Fl;
      case Oc:
        return Bl;
      case Tc:
        return _l;
      case Pc:
        return Dl;
    }
  return t;
});
const Wl = Bt;
var Ac = mt.Uint8Array;
const jl = Ac;
var kc = "__lodash_hash_undefined__";
function Lc(e) {
  return this.__data__.set(e, kc), this;
}
function Nc(e) {
  return this.__data__.has(e);
}
function qn(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.__data__ = new Pt(); ++t < n; )
    this.add(e[t]);
}
qn.prototype.add = qn.prototype.push = Lc;
qn.prototype.has = Nc;
function zc(e, t) {
  for (var n = -1, o = e == null ? 0 : e.length; ++n < o; )
    if (t(e[n], n, e))
      return !0;
  return !1;
}
function Mc(e, t) {
  return e.has(t);
}
var Rc = 1, Ic = 2;
function Ur(e, t, n, o, l, a) {
  var r = n & Rc, i = e.length, s = t.length;
  if (i != s && !(r && s > i))
    return !1;
  var u = a.get(e), c = a.get(t);
  if (u && c)
    return u == t && c == e;
  var p = -1, f = !0, m = n & Ic ? new qn() : void 0;
  for (a.set(e, t), a.set(t, e); ++p < i; ) {
    var d = e[p], g = t[p];
    if (o)
      var b = r ? o(g, d, p, t, e, a) : o(d, g, p, e, t, a);
    if (b !== void 0) {
      if (b)
        continue;
      f = !1;
      break;
    }
    if (m) {
      if (!zc(t, function(S, y) {
        if (!Mc(m, y) && (d === S || l(d, S, n, o, a)))
          return m.push(y);
      })) {
        f = !1;
        break;
      }
    } else if (!(d === g || l(d, g, n, o, a))) {
      f = !1;
      break;
    }
  }
  return a.delete(e), a.delete(t), f;
}
function Hc(e) {
  var t = -1, n = Array(e.size);
  return e.forEach(function(o, l) {
    n[++t] = [l, o];
  }), n;
}
function Fc(e) {
  var t = -1, n = Array(e.size);
  return e.forEach(function(o) {
    n[++t] = o;
  }), n;
}
var Bc = 1, _c = 2, Dc = "[object Boolean]", xc = "[object Date]", Wc = "[object Error]", jc = "[object Map]", Vc = "[object Number]", Kc = "[object RegExp]", qc = "[object Set]", Uc = "[object String]", Gc = "[object Symbol]", Yc = "[object ArrayBuffer]", Xc = "[object DataView]", Vl = It ? It.prototype : void 0, vo = Vl ? Vl.valueOf : void 0;
function Jc(e, t, n, o, l, a, r) {
  switch (n) {
    case Xc:
      if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset)
        return !1;
      e = e.buffer, t = t.buffer;
    case Yc:
      return !(e.byteLength != t.byteLength || !a(new jl(e), new jl(t)));
    case Dc:
    case xc:
    case Vc:
      return Uo(+e, +t);
    case Wc:
      return e.name == t.name && e.message == t.message;
    case Kc:
    case Uc:
      return e == t + "";
    case jc:
      var i = Hc;
    case qc:
      var s = o & Bc;
      if (i || (i = Fc), e.size != t.size && !s)
        return !1;
      var u = r.get(e);
      if (u)
        return u == t;
      o |= _c, r.set(e, t);
      var c = Ur(i(e), i(t), o, l, a, r);
      return r.delete(e), c;
    case Gc:
      if (vo)
        return vo.call(e) == vo.call(t);
  }
  return !1;
}
var Qc = 1, Zc = Object.prototype, ed = Zc.hasOwnProperty;
function td(e, t, n, o, l, a) {
  var r = n & Qc, i = Hl(e), s = i.length, u = Hl(t), c = u.length;
  if (s != c && !r)
    return !1;
  for (var p = s; p--; ) {
    var f = i[p];
    if (!(r ? f in t : ed.call(t, f)))
      return !1;
  }
  var m = a.get(e), d = a.get(t);
  if (m && d)
    return m == t && d == e;
  var g = !0;
  a.set(e, t), a.set(t, e);
  for (var b = r; ++p < s; ) {
    f = i[p];
    var S = e[f], y = t[f];
    if (o)
      var v = r ? o(y, S, f, t, e, a) : o(S, y, f, e, t, a);
    if (!(v === void 0 ? S === y || l(S, y, n, o, a) : v)) {
      g = !1;
      break;
    }
    b || (b = f == "constructor");
  }
  if (g && !b) {
    var h = e.constructor, $ = t.constructor;
    h != $ && "constructor" in e && "constructor" in t && !(typeof h == "function" && h instanceof h && typeof $ == "function" && $ instanceof $) && (g = !1);
  }
  return a.delete(e), a.delete(t), g;
}
var nd = 1, Kl = "[object Arguments]", ql = "[object Array]", In = "[object Object]", od = Object.prototype, Ul = od.hasOwnProperty;
function ld(e, t, n, o, l, a) {
  var r = Gt(e), i = Gt(t), s = r ? ql : Wl(e), u = i ? ql : Wl(t);
  s = s == Kl ? In : s, u = u == Kl ? In : u;
  var c = s == In, p = u == In, f = s == u;
  if (f && So(e)) {
    if (!So(t))
      return !1;
    r = !0, c = !1;
  }
  if (f && !c)
    return a || (a = new zt()), r || Vr(e) ? Ur(e, t, n, o, l, a) : Jc(e, t, s, n, o, l, a);
  if (!(n & nd)) {
    var m = c && Ul.call(e, "__wrapped__"), d = p && Ul.call(t, "__wrapped__");
    if (m || d) {
      var g = m ? e.value() : e, b = d ? t.value() : t;
      return a || (a = new zt()), l(g, b, n, o, a);
    }
  }
  return f ? (a || (a = new zt()), td(e, t, n, o, l, a)) : !1;
}
function Gr(e, t, n, o, l) {
  return e === t ? !0 : e == null || t == null || !nn(e) && !nn(t) ? e !== e && t !== t : ld(e, t, n, o, Gr, l);
}
var rd = function() {
  return mt.Date.now();
};
const go = rd;
var ad = "Expected a function", sd = Math.max, id = Math.min;
function on(e, t, n) {
  var o, l, a, r, i, s, u = 0, c = !1, p = !1, f = !0;
  if (typeof e != "function")
    throw new TypeError(ad);
  t = Pl(t) || 0, Yt(n) && (c = !!n.leading, p = "maxWait" in n, a = p ? sd(Pl(n.maxWait) || 0, t) : a, f = "trailing" in n ? !!n.trailing : f);
  function m(w) {
    var C = o, N = l;
    return o = l = void 0, u = w, r = e.apply(N, C), r;
  }
  function d(w) {
    return u = w, i = setTimeout(S, t), c ? m(w) : r;
  }
  function g(w) {
    var C = w - s, N = w - u, H = t - C;
    return p ? id(H, a - N) : H;
  }
  function b(w) {
    var C = w - s, N = w - u;
    return s === void 0 || C >= t || C < 0 || p && N >= a;
  }
  function S() {
    var w = go();
    if (b(w))
      return y(w);
    i = setTimeout(S, g(w));
  }
  function y(w) {
    return i = void 0, f && o ? m(w) : (o = l = void 0, r);
  }
  function v() {
    i !== void 0 && clearTimeout(i), u = 0, o = s = l = i = void 0;
  }
  function h() {
    return i === void 0 ? r : y(go());
  }
  function $() {
    var w = go(), C = b(w);
    if (o = arguments, l = this, s = w, C) {
      if (i === void 0)
        return d(s);
      if (p)
        return clearTimeout(i), i = setTimeout(S, t), m(s);
    }
    return i === void 0 && (i = setTimeout(S, t)), r;
  }
  return $.cancel = v, $.flush = h, $;
}
function Yr(e) {
  for (var t = -1, n = e == null ? 0 : e.length, o = {}; ++t < n; ) {
    var l = e[t];
    o[l[0]] = l[1];
  }
  return o;
}
function To(e, t) {
  return Gr(e, t);
}
function ud(e) {
  return e == null;
}
function cd(e, t, n, o) {
  if (!Yt(e))
    return e;
  t = Kr(t, e);
  for (var l = -1, a = t.length, r = a - 1, i = e; i != null && ++l < a; ) {
    var s = qr(t[l]), u = n;
    if (s === "__proto__" || s === "constructor" || s === "prototype")
      return e;
    if (l != r) {
      var c = i[s];
      u = o ? o(c, s, i) : void 0, u === void 0 && (u = Yt(c) ? c : _r(t[l + 1]) ? [] : {});
    }
    wi(i, s, u), i = i[s];
  }
  return e;
}
function dd(e, t, n) {
  return e == null ? e : cd(e, t, n);
}
const Un = (e, t, n, o = !1) => {
  e && t && n && (e == null || e.addEventListener(t, n, o));
}, Gn = (e, t, n, o = !1) => {
  e && t && n && (e == null || e.removeEventListener(t, n, o));
}, St = (e, t, { checkForDefaultPrevented: n = !0 } = {}) => (l) => {
  const a = e == null ? void 0 : e(l);
  if (n === !1 || !a)
    return t == null ? void 0 : t(l);
};
var Gl;
const Oe = typeof window < "u", Po = (e) => typeof e == "boolean", ut = (e) => typeof e == "number", fd = (e) => typeof e == "string", mo = () => {
};
Oe && ((Gl = window == null ? void 0 : window.navigator) == null ? void 0 : Gl.userAgent) && /iP(ad|hone|od)/.test(window.navigator.userAgent);
function Yo(e) {
  return ss() ? (is(e), !0) : !1;
}
function Nt(e) {
  var t;
  const n = O(e);
  return (t = n == null ? void 0 : n.$el) != null ? t : n;
}
const Xo = Oe ? window : void 0;
function Dt(...e) {
  let t, n, o, l;
  if (fd(e[0]) ? ([n, o, l] = e, t = Xo) : [t, n, o, l] = e, !t)
    return mo;
  let a = mo;
  const r = J(() => Nt(t), (s) => {
    a(), s && (s.addEventListener(n, o, l), a = () => {
      s.removeEventListener(n, o, l), a = mo;
    });
  }, { immediate: !0, flush: "post" }), i = () => {
    r(), a();
  };
  return Yo(i), i;
}
function pd(e, t, n = {}) {
  const { window: o = Xo, ignore: l, capture: a = !0, detectIframe: r = !1 } = n;
  if (!o)
    return;
  const i = T(!0);
  let s;
  const u = (f) => {
    o.clearTimeout(s);
    const m = Nt(e), d = f.composedPath();
    !m || m === f.target || d.includes(m) || !i.value || l && l.length > 0 && l.some((g) => {
      const b = Nt(g);
      return b && (f.target === b || d.includes(b));
    }) || t(f);
  }, c = [
    Dt(o, "click", u, { passive: !0, capture: a }),
    Dt(o, "pointerdown", (f) => {
      const m = Nt(e);
      i.value = !!m && !f.composedPath().includes(m);
    }, { passive: !0 }),
    Dt(o, "pointerup", (f) => {
      if (f.button === 0) {
        const m = f.composedPath();
        f.composedPath = () => m, s = o.setTimeout(() => u(f), 50);
      }
    }, { passive: !0 }),
    r && Dt(o, "blur", (f) => {
      var m;
      const d = Nt(e);
      ((m = document.activeElement) == null ? void 0 : m.tagName) === "IFRAME" && !(d != null && d.contains(document.activeElement)) && t(f);
    })
  ].filter(Boolean);
  return () => c.forEach((f) => f());
}
const Ao = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, ko = "__vueuse_ssr_handlers__";
Ao[ko] = Ao[ko] || {};
Ao[ko];
var Yl = Object.getOwnPropertySymbols, hd = Object.prototype.hasOwnProperty, vd = Object.prototype.propertyIsEnumerable, gd = (e, t) => {
  var n = {};
  for (var o in e)
    hd.call(e, o) && t.indexOf(o) < 0 && (n[o] = e[o]);
  if (e != null && Yl)
    for (var o of Yl(e))
      t.indexOf(o) < 0 && vd.call(e, o) && (n[o] = e[o]);
  return n;
};
function Xr(e, t, n = {}) {
  const o = n, { window: l = Xo } = o, a = gd(o, ["window"]);
  let r;
  const i = l && "ResizeObserver" in l, s = () => {
    r && (r.disconnect(), r = void 0);
  }, u = J(() => Nt(e), (p) => {
    s(), i && l && p && (r = new ResizeObserver(t), r.observe(p, a));
  }, { immediate: !0, flush: "post" }), c = () => {
    s(), u();
  };
  return Yo(c), {
    isSupported: i,
    stop: c
  };
}
var Xl;
(function(e) {
  e.UP = "UP", e.RIGHT = "RIGHT", e.DOWN = "DOWN", e.LEFT = "LEFT", e.NONE = "NONE";
})(Xl || (Xl = {}));
const md = function(e) {
  for (const t of e) {
    const n = t.target.__resizeListeners__ || [];
    n.length && n.forEach((o) => {
      o();
    });
  }
}, Jo = function(e, t) {
  !Oe || !e || (e.__resizeListeners__ || (e.__resizeListeners__ = [], e.__ro__ = new ResizeObserver(md), e.__ro__.observe(e)), e.__resizeListeners__.push(t));
}, Qo = function(e, t) {
  var n;
  !e || !e.__resizeListeners__ || (e.__resizeListeners__.splice(e.__resizeListeners__.indexOf(t), 1), e.__resizeListeners__.length || (n = e.__ro__) == null || n.disconnect());
}, Lo = (e) => e === void 0, Jr = (e) => typeof Element > "u" ? !1 : e instanceof Element, bd = (e = "") => e.replace(/[|\\{}()[\]^$+*?.]/g, "\\$&").replace(/-/g, "\\x2d"), Jl = (e) => Object.keys(e), yd = (e, t, n) => ({
  get value() {
    return xe(e, t, n);
  },
  set value(o) {
    dd(e, t, o);
  }
});
class Qr extends Error {
  constructor(t) {
    super(t), this.name = "ElementPlusError";
  }
}
function wd(e, t) {
  throw new Qr(`[${e}] ${t}`);
}
function Le(e, t) {
  if (process.env.NODE_ENV !== "production") {
    const n = Wt(e) ? new Qr(`[${e}] ${t}`) : e;
    console.warn(n);
  }
}
const Cd = "utils/dom/style", Zr = (e = "") => e.split(" ").filter((t) => !!t.trim()), Bn = (e, t) => {
  if (!e || !t)
    return !1;
  if (t.includes(" "))
    throw new Error("className should not contain space.");
  return e.classList.contains(t);
}, ea = (e, t) => {
  !e || !t.trim() || e.classList.add(...Zr(t));
}, No = (e, t) => {
  !e || !t.trim() || e.classList.remove(...Zr(t));
}, Ql = (e, t) => {
  var n;
  if (!Oe || !e || !t)
    return "";
  $s(t);
  try {
    const o = e.style[t];
    if (o)
      return o;
    const l = (n = document.defaultView) == null ? void 0 : n.getComputedStyle(e, "");
    return l ? l[t] : "";
  } catch {
    return e.style[t];
  }
};
function zo(e, t = "px") {
  if (!e)
    return "";
  if (Wt(e))
    return e;
  if (ut(e))
    return `${e}${t}`;
  Le(Cd, "binding value must be a string or number");
}
function Sd(e, t) {
  if (!Oe)
    return;
  if (!t) {
    e.scrollTop = 0;
    return;
  }
  const n = [];
  let o = t.offsetParent;
  for (; o !== null && e !== o && e.contains(o); )
    n.push(o), o = o.offsetParent;
  const l = t.offsetTop + n.reduce((s, u) => s + u.offsetTop, 0), a = l + t.offsetHeight, r = e.scrollTop, i = r + e.clientHeight;
  l < r ? e.scrollTop = l : a > i && (e.scrollTop = a - e.clientHeight);
}
var Xe = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [o, l] of t)
    n[o] = l;
  return n;
};
const $d = G({
  name: "ArrowDown"
}), Ed = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, Od = /* @__PURE__ */ V("path", {
  fill: "currentColor",
  d: "M831.872 340.864 512 652.672 192.128 340.864a30.592 30.592 0 0 0-42.752 0 29.12 29.12 0 0 0 0 41.6L489.664 714.24a32 32 0 0 0 44.672 0l340.288-331.712a29.12 29.12 0 0 0 0-41.728 30.592 30.592 0 0 0-42.752 0z"
}, null, -1), Td = [
  Od
];
function Pd(e, t, n, o, l, a) {
  return P(), I("svg", Ed, Td);
}
var Ad = /* @__PURE__ */ Xe($d, [["render", Pd]]);
const kd = G({
  name: "ArrowLeft"
}), Ld = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, Nd = /* @__PURE__ */ V("path", {
  fill: "currentColor",
  d: "M609.408 149.376 277.76 489.6a32 32 0 0 0 0 44.672l331.648 340.352a29.12 29.12 0 0 0 41.728 0 30.592 30.592 0 0 0 0-42.752L339.264 511.936l311.872-319.872a30.592 30.592 0 0 0 0-42.688 29.12 29.12 0 0 0-41.728 0z"
}, null, -1), zd = [
  Nd
];
function Md(e, t, n, o, l, a) {
  return P(), I("svg", Ld, zd);
}
var Rd = /* @__PURE__ */ Xe(kd, [["render", Md]]);
const Id = G({
  name: "ArrowRight"
}), Hd = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, Fd = /* @__PURE__ */ V("path", {
  fill: "currentColor",
  d: "M340.864 149.312a30.592 30.592 0 0 0 0 42.752L652.736 512 340.864 831.872a30.592 30.592 0 0 0 0 42.752 29.12 29.12 0 0 0 41.728 0L714.24 534.336a32 32 0 0 0 0-44.672L382.592 149.376a29.12 29.12 0 0 0-41.728 0z"
}, null, -1), Bd = [
  Fd
];
function _d(e, t, n, o, l, a) {
  return P(), I("svg", Hd, Bd);
}
var Zo = /* @__PURE__ */ Xe(Id, [["render", _d]]);
const Dd = G({
  name: "ArrowUp"
}), xd = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, Wd = /* @__PURE__ */ V("path", {
  fill: "currentColor",
  d: "m488.832 344.32-339.84 356.672a32 32 0 0 0 0 44.16l.384.384a29.44 29.44 0 0 0 42.688 0l320-335.872 319.872 335.872a29.44 29.44 0 0 0 42.688 0l.384-.384a32 32 0 0 0 0-44.16L535.168 344.32a32 32 0 0 0-46.336 0z"
}, null, -1), jd = [
  Wd
];
function Vd(e, t, n, o, l, a) {
  return P(), I("svg", xd, jd);
}
var ta = /* @__PURE__ */ Xe(Dd, [["render", Vd]]);
const Kd = G({
  name: "CircleCheck"
}), qd = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, Ud = /* @__PURE__ */ V("path", {
  fill: "currentColor",
  d: "M512 896a384 384 0 1 0 0-768 384 384 0 0 0 0 768zm0 64a448 448 0 1 1 0-896 448 448 0 0 1 0 896z"
}, null, -1), Gd = /* @__PURE__ */ V("path", {
  fill: "currentColor",
  d: "M745.344 361.344a32 32 0 0 1 45.312 45.312l-288 288a32 32 0 0 1-45.312 0l-160-160a32 32 0 1 1 45.312-45.312L480 626.752l265.344-265.408z"
}, null, -1), Yd = [
  Ud,
  Gd
];
function Xd(e, t, n, o, l, a) {
  return P(), I("svg", qd, Yd);
}
var Jd = /* @__PURE__ */ Xe(Kd, [["render", Xd]]);
const Qd = G({
  name: "CircleClose"
}), Zd = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, ef = /* @__PURE__ */ V("path", {
  fill: "currentColor",
  d: "m466.752 512-90.496-90.496a32 32 0 0 1 45.248-45.248L512 466.752l90.496-90.496a32 32 0 1 1 45.248 45.248L557.248 512l90.496 90.496a32 32 0 1 1-45.248 45.248L512 557.248l-90.496 90.496a32 32 0 0 1-45.248-45.248L466.752 512z"
}, null, -1), tf = /* @__PURE__ */ V("path", {
  fill: "currentColor",
  d: "M512 896a384 384 0 1 0 0-768 384 384 0 0 0 0 768zm0 64a448 448 0 1 1 0-896 448 448 0 0 1 0 896z"
}, null, -1), nf = [
  ef,
  tf
];
function of(e, t, n, o, l, a) {
  return P(), I("svg", Zd, nf);
}
var el = /* @__PURE__ */ Xe(Qd, [["render", of]]);
const lf = G({
  name: "Close"
}), rf = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, af = /* @__PURE__ */ V("path", {
  fill: "currentColor",
  d: "M764.288 214.592 512 466.88 259.712 214.592a31.936 31.936 0 0 0-45.12 45.12L466.752 512 214.528 764.224a31.936 31.936 0 1 0 45.12 45.184L512 557.184l252.288 252.288a31.936 31.936 0 0 0 45.12-45.12L557.12 512.064l252.288-252.352a31.936 31.936 0 1 0-45.12-45.184z"
}, null, -1), sf = [
  af
];
function uf(e, t, n, o, l, a) {
  return P(), I("svg", rf, sf);
}
var Zl = /* @__PURE__ */ Xe(lf, [["render", uf]]);
const cf = G({
  name: "DArrowLeft"
}), df = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, ff = /* @__PURE__ */ V("path", {
  fill: "currentColor",
  d: "M529.408 149.376a29.12 29.12 0 0 1 41.728 0 30.592 30.592 0 0 1 0 42.688L259.264 511.936l311.872 319.936a30.592 30.592 0 0 1-.512 43.264 29.12 29.12 0 0 1-41.216-.512L197.76 534.272a32 32 0 0 1 0-44.672l331.648-340.224zm256 0a29.12 29.12 0 0 1 41.728 0 30.592 30.592 0 0 1 0 42.688L515.264 511.936l311.872 319.936a30.592 30.592 0 0 1-.512 43.264 29.12 29.12 0 0 1-41.216-.512L453.76 534.272a32 32 0 0 1 0-44.672l331.648-340.224z"
}, null, -1), pf = [
  ff
];
function hf(e, t, n, o, l, a) {
  return P(), I("svg", df, pf);
}
var vf = /* @__PURE__ */ Xe(cf, [["render", hf]]);
const gf = G({
  name: "DArrowRight"
}), mf = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, bf = /* @__PURE__ */ V("path", {
  fill: "currentColor",
  d: "M452.864 149.312a29.12 29.12 0 0 1 41.728.064L826.24 489.664a32 32 0 0 1 0 44.672L494.592 874.624a29.12 29.12 0 0 1-41.728 0 30.592 30.592 0 0 1 0-42.752L764.736 512 452.864 192a30.592 30.592 0 0 1 0-42.688zm-256 0a29.12 29.12 0 0 1 41.728.064L570.24 489.664a32 32 0 0 1 0 44.672L238.592 874.624a29.12 29.12 0 0 1-41.728 0 30.592 30.592 0 0 1 0-42.752L508.736 512 196.864 192a30.592 30.592 0 0 1 0-42.688z"
}, null, -1), yf = [
  bf
];
function wf(e, t, n, o, l, a) {
  return P(), I("svg", mf, yf);
}
var Cf = /* @__PURE__ */ Xe(gf, [["render", wf]]);
const Sf = G({
  name: "Hide"
}), $f = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, Ef = /* @__PURE__ */ V("path", {
  d: "M876.8 156.8c0-9.6-3.2-16-9.6-22.4-6.4-6.4-12.8-9.6-22.4-9.6-9.6 0-16 3.2-22.4 9.6L736 220.8c-64-32-137.6-51.2-224-60.8-160 16-288 73.6-377.6 176C44.8 438.4 0 496 0 512s48 73.6 134.4 176c22.4 25.6 44.8 48 73.6 67.2l-86.4 89.6c-6.4 6.4-9.6 12.8-9.6 22.4 0 9.6 3.2 16 9.6 22.4 6.4 6.4 12.8 9.6 22.4 9.6 9.6 0 16-3.2 22.4-9.6l704-710.4c3.2-6.4 6.4-12.8 6.4-22.4Zm-646.4 528c-76.8-70.4-128-128-153.6-172.8 28.8-48 80-105.6 153.6-172.8C304 272 400 230.4 512 224c64 3.2 124.8 19.2 176 44.8l-54.4 54.4C598.4 300.8 560 288 512 288c-64 0-115.2 22.4-160 64s-64 96-64 160c0 48 12.8 89.6 35.2 124.8L256 707.2c-9.6-6.4-19.2-16-25.6-22.4Zm140.8-96c-12.8-22.4-19.2-48-19.2-76.8 0-44.8 16-83.2 48-112 32-28.8 67.2-48 112-48 28.8 0 54.4 6.4 73.6 19.2L371.2 588.8ZM889.599 336c-12.8-16-28.8-28.8-41.6-41.6l-48 48c73.6 67.2 124.8 124.8 150.4 169.6-28.8 48-80 105.6-153.6 172.8-73.6 67.2-172.8 108.8-284.8 115.2-51.2-3.2-99.2-12.8-140.8-28.8l-48 48c57.6 22.4 118.4 38.4 188.8 44.8 160-16 288-73.6 377.6-176C979.199 585.6 1024 528 1024 512s-48.001-73.6-134.401-176Z",
  fill: "currentColor"
}, null, -1), Of = /* @__PURE__ */ V("path", {
  d: "M511.998 672c-12.8 0-25.6-3.2-38.4-6.4l-51.2 51.2c28.8 12.8 57.6 19.2 89.6 19.2 64 0 115.2-22.4 160-64 41.6-41.6 64-96 64-160 0-32-6.4-64-19.2-89.6l-51.2 51.2c3.2 12.8 6.4 25.6 6.4 38.4 0 44.8-16 83.2-48 112-32 28.8-67.2 48-112 48Z",
  fill: "currentColor"
}, null, -1), Tf = [
  Ef,
  Of
];
function Pf(e, t, n, o, l, a) {
  return P(), I("svg", $f, Tf);
}
var Af = /* @__PURE__ */ Xe(Sf, [["render", Pf]]);
const kf = G({
  name: "Loading"
}), Lf = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, Nf = /* @__PURE__ */ V("path", {
  fill: "currentColor",
  d: "M512 64a32 32 0 0 1 32 32v192a32 32 0 0 1-64 0V96a32 32 0 0 1 32-32zm0 640a32 32 0 0 1 32 32v192a32 32 0 1 1-64 0V736a32 32 0 0 1 32-32zm448-192a32 32 0 0 1-32 32H736a32 32 0 1 1 0-64h192a32 32 0 0 1 32 32zm-640 0a32 32 0 0 1-32 32H96a32 32 0 0 1 0-64h192a32 32 0 0 1 32 32zM195.2 195.2a32 32 0 0 1 45.248 0L376.32 331.008a32 32 0 0 1-45.248 45.248L195.2 240.448a32 32 0 0 1 0-45.248zm452.544 452.544a32 32 0 0 1 45.248 0L828.8 783.552a32 32 0 0 1-45.248 45.248L647.744 692.992a32 32 0 0 1 0-45.248zM828.8 195.264a32 32 0 0 1 0 45.184L692.992 376.32a32 32 0 0 1-45.248-45.248l135.808-135.808a32 32 0 0 1 45.248 0zm-452.544 452.48a32 32 0 0 1 0 45.248L240.448 828.8a32 32 0 0 1-45.248-45.248l135.808-135.808a32 32 0 0 1 45.248 0z"
}, null, -1), zf = [
  Nf
];
function Mf(e, t, n, o, l, a) {
  return P(), I("svg", Lf, zf);
}
var na = /* @__PURE__ */ Xe(kf, [["render", Mf]]);
const Rf = G({
  name: "MoreFilled"
}), If = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, Hf = /* @__PURE__ */ V("path", {
  fill: "currentColor",
  d: "M176 416a112 112 0 1 1 0 224 112 112 0 0 1 0-224zm336 0a112 112 0 1 1 0 224 112 112 0 0 1 0-224zm336 0a112 112 0 1 1 0 224 112 112 0 0 1 0-224z"
}, null, -1), Ff = [
  Hf
];
function Bf(e, t, n, o, l, a) {
  return P(), I("svg", If, Ff);
}
var _f = /* @__PURE__ */ Xe(Rf, [["render", Bf]]);
const Df = G({
  name: "View"
}), xf = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, Wf = /* @__PURE__ */ V("path", {
  fill: "currentColor",
  d: "M512 160c320 0 512 352 512 352S832 864 512 864 0 512 0 512s192-352 512-352zm0 64c-225.28 0-384.128 208.064-436.8 288 52.608 79.872 211.456 288 436.8 288 225.28 0 384.128-208.064 436.8-288-52.608-79.872-211.456-288-436.8-288zm0 64a224 224 0 1 1 0 448 224 224 0 0 1 0-448zm0 64a160.192 160.192 0 0 0-160 160c0 88.192 71.744 160 160 160s160-71.808 160-160-71.744-160-160-160z"
}, null, -1), jf = [
  Wf
];
function Vf(e, t, n, o, l, a) {
  return P(), I("svg", xf, jf);
}
var Kf = /* @__PURE__ */ Xe(Df, [["render", Vf]]);
const Mo = Symbol(), er = "__elPropsReservedKey";
function ro(e, t) {
  if (!Rt(e) || !!e[er])
    return e;
  const { values: n, required: o, default: l, type: a, validator: r } = e, i = n || r ? (u) => {
    let c = !1, p = [];
    if (n && (p = Array.from(n), Ut(e, "default") && p.push(l), c || (c = p.includes(u))), r && (c || (c = r(u))), !c && p.length > 0) {
      const f = [...new Set(p)].map((m) => JSON.stringify(m)).join(", ");
      us(`Invalid prop: validation failed${t ? ` for prop "${t}"` : ""}. Expected one of [${f}], got value ${JSON.stringify(u)}.`);
    }
    return c;
  } : void 0, s = {
    type: Rt(a) && Object.getOwnPropertySymbols(a).includes(Mo) ? a[Mo] : a,
    required: !!o,
    validator: i,
    [er]: !0
  };
  return Ut(e, "default") && (s.default = l), s;
}
const Me = (e) => Yr(Object.entries(e).map(([t, n]) => [
  t,
  ro(n, t)
])), we = (e) => ({ [Mo]: e }), tr = we([
  String,
  Object,
  Function
]), qf = {
  validating: na,
  success: Jd,
  error: el
}, ct = (e, t) => {
  if (e.install = (n) => {
    for (const o of [e, ...Object.values(t != null ? t : {})])
      n.component(o.name, o);
  }, t)
    for (const [n, o] of Object.entries(t))
      e[n] = o;
  return e;
}, kn = (e) => (e.install = Mr, e), Yn = {
  tab: "Tab",
  enter: "Enter",
  space: "Space",
  left: "ArrowLeft",
  up: "ArrowUp",
  right: "ArrowRight",
  down: "ArrowDown",
  esc: "Escape",
  delete: "Delete",
  backspace: "Backspace",
  numpadEnter: "NumpadEnter",
  pageUp: "PageUp",
  pageDown: "PageDown",
  home: "Home",
  end: "End"
}, Ie = "update:modelValue", oa = "change", ao = ["", "default", "small", "large"], Uf = {
  large: 40,
  default: 32,
  small: 24
}, Gf = (e) => Uf[e || "default"], tl = (e) => ["", ...ao].includes(e), la = (e) => /([(\uAC00-\uD7AF)|(\u3130-\u318F)])+/gi.test(e), Yf = () => Math.floor(Math.random() * 1e4), nl = (e) => e, Xf = ["class", "style"], Jf = /^on[A-Z]/, Qf = (e = {}) => {
  const { excludeListeners: t = !1, excludeKeys: n = [] } = e, o = n.concat(Xf), l = be();
  return l ? A(() => {
    var a;
    return Yr(Object.entries((a = l.proxy) == null ? void 0 : a.$attrs).filter(([r]) => !o.includes(r) && !(t && Jf.test(r))));
  }) : (Le("use-attrs", "getCurrentInstance() returned null. useAttrs() must be called at the top of a setup function"), A(() => ({})));
}, ra = Symbol(), Ln = Symbol("formContextKey"), ln = Symbol("formItemContextKey"), aa = Symbol("elPaginationKey"), sa = Symbol("scrollbarContextKey"), ol = Symbol("popper"), ia = Symbol("popperContent"), ua = (e) => {
  const t = be();
  return A(() => {
    var n, o;
    return (o = (n = t.proxy) == null ? void 0 : n.$props[e]) != null ? o : void 0;
  });
}, Xn = T();
function Nn(e, t = void 0) {
  const n = be() ? ue(ra, Xn) : Xn;
  return e ? A(() => {
    var o, l;
    return (l = (o = n.value) == null ? void 0 : o[e]) != null ? l : t;
  }) : n;
}
const Zf = (e, t, n = !1) => {
  var o;
  const l = !!be(), a = l ? Nn() : void 0, r = (o = t == null ? void 0 : t.provide) != null ? o : l ? tt : void 0;
  if (!r) {
    Le("provideGlobalConfig", "provideGlobalConfig() can only be used inside setup().");
    return;
  }
  const i = A(() => {
    const s = O(e);
    return a != null && a.value ? ep(a.value, s) : s;
  });
  return r(ra, i), (n || !Xn.value) && (Xn.value = i.value), i;
}, ep = (e, t) => {
  var n;
  const o = [.../* @__PURE__ */ new Set([...Jl(e), ...Jl(t)])], l = {};
  for (const a of o)
    l[a] = (n = t[a]) != null ? n : e[a];
  return l;
}, tp = ro({
  type: String,
  values: ao,
  required: !1
}), Jt = (e, t = {}) => {
  const n = T(void 0), o = t.prop ? n : ua("size"), l = t.global ? n : Nn("size"), a = t.form ? { size: void 0 } : ue(Ln, void 0), r = t.formItem ? { size: void 0 } : ue(ln, void 0);
  return A(() => o.value || O(e) || (r == null ? void 0 : r.size) || (a == null ? void 0 : a.size) || l.value || "");
}, np = (e) => {
  const t = ua("disabled"), n = ue(Ln, void 0);
  return A(() => t.value || O(e) || (n == null ? void 0 : n.disabled) || !1);
}, op = (e) => ({
  focus: () => {
    var t, n;
    (n = (t = e.value) == null ? void 0 : t.focus) == null || n.call(t);
  }
}), nr = {
  prefix: Math.floor(Math.random() * 1e4),
  current: 0
}, lp = Symbol("elIdInjection"), ca = (e) => {
  const t = ue(lp, nr);
  return !Oe && t === nr && Le("IdInjection", `Looks like you are using server rendering, you must provide a id provider to ensure the hydration process to be succeed
usage: app.provide(ID_INJECTION_KEY, {
  prefix: number,
  current: number,
})`), A(() => O(e) || `el-id-${t.prefix}-${t.current++}`);
}, rp = () => {
  const e = ue(Ln, void 0), t = ue(ln, void 0);
  return {
    form: e,
    formItem: t
  };
}, ll = (e, {
  formItemContext: t,
  disableIdGeneration: n,
  disableIdManagement: o
}) => {
  n || (n = T(!1)), o || (o = T(!1));
  const l = T();
  let a;
  const r = A(() => {
    var i;
    return !!(!e.label && t && t.inputIds && ((i = t.inputIds) == null ? void 0 : i.length) <= 1);
  });
  return Ue(() => {
    a = J([Vt(e, "id"), n], ([i, s]) => {
      const u = i != null ? i : s ? void 0 : ca().value;
      u !== l.value && (t != null && t.removeInputId && (l.value && t.removeInputId(l.value), !(o != null && o.value) && !s && u && t.addInputId(u)), l.value = u);
    }, { immediate: !0 });
  }), Ko(() => {
    a && a(), t != null && t.removeInputId && l.value && t.removeInputId(l.value);
  }), {
    isLabeledByFormItem: r,
    inputId: l
  };
};
var ap = {
  name: "en",
  el: {
    colorpicker: {
      confirm: "OK",
      clear: "Clear",
      defaultLabel: "color picker",
      description: "current color is {color}. press enter to select a new color."
    },
    datepicker: {
      now: "Now",
      today: "Today",
      cancel: "Cancel",
      clear: "Clear",
      confirm: "OK",
      selectDate: "Select date",
      selectTime: "Select time",
      startDate: "Start Date",
      startTime: "Start Time",
      endDate: "End Date",
      endTime: "End Time",
      prevYear: "Previous Year",
      nextYear: "Next Year",
      prevMonth: "Previous Month",
      nextMonth: "Next Month",
      year: "",
      month1: "January",
      month2: "February",
      month3: "March",
      month4: "April",
      month5: "May",
      month6: "June",
      month7: "July",
      month8: "August",
      month9: "September",
      month10: "October",
      month11: "November",
      month12: "December",
      week: "week",
      weeks: {
        sun: "Sun",
        mon: "Mon",
        tue: "Tue",
        wed: "Wed",
        thu: "Thu",
        fri: "Fri",
        sat: "Sat"
      },
      months: {
        jan: "Jan",
        feb: "Feb",
        mar: "Mar",
        apr: "Apr",
        may: "May",
        jun: "Jun",
        jul: "Jul",
        aug: "Aug",
        sep: "Sep",
        oct: "Oct",
        nov: "Nov",
        dec: "Dec"
      }
    },
    inputNumber: {
      decrease: "decrease number",
      increase: "increase number"
    },
    select: {
      loading: "Loading",
      noMatch: "No matching data",
      noData: "No data",
      placeholder: "Select"
    },
    cascader: {
      noMatch: "No matching data",
      loading: "Loading",
      placeholder: "Select",
      noData: "No data"
    },
    pagination: {
      goto: "Go to",
      pagesize: "/page",
      total: "Total {total}",
      pageClassifier: "",
      deprecationWarning: "Deprecated usages detected, please refer to the el-pagination documentation for more details"
    },
    messagebox: {
      title: "Message",
      confirm: "OK",
      cancel: "Cancel",
      error: "Illegal input"
    },
    upload: {
      deleteTip: "press delete to remove",
      delete: "Delete",
      preview: "Preview",
      continue: "Continue"
    },
    slider: {
      defaultLabel: "slider between {min} and {max}",
      defaultRangeStartLabel: "pick start value",
      defaultRangeEndLabel: "pick end value"
    },
    table: {
      emptyText: "No Data",
      confirmFilter: "Confirm",
      resetFilter: "Reset",
      clearFilter: "All",
      sumText: "Sum"
    },
    tree: {
      emptyText: "No Data"
    },
    transfer: {
      noMatch: "No matching data",
      noData: "No data",
      titles: ["List 1", "List 2"],
      filterPlaceholder: "Enter keyword",
      noCheckedFormat: "{total} items",
      hasCheckedFormat: "{checked}/{total} checked"
    },
    image: {
      error: "FAILED"
    },
    pageHeader: {
      title: "Back"
    },
    popconfirm: {
      confirmButtonText: "Yes",
      cancelButtonText: "No"
    }
  }
};
const sp = (e) => (t, n) => ip(t, n, O(e)), ip = (e, t, n) => xe(n, e, e).replace(/\{(\w+)\}/g, (o, l) => {
  var a;
  return `${(a = t == null ? void 0 : t[l]) != null ? a : `{${l}}`}`;
}), up = (e) => {
  const t = A(() => O(e).name), n = Lr(e) ? e : T(e);
  return {
    lang: t,
    locale: n,
    t: sp(e)
  };
}, At = () => {
  const e = Nn("locale");
  return up(A(() => e.value || ap));
}, cp = ro({
  type: we(Boolean),
  default: null
}), dp = ro({
  type: we(Function)
}), fp = (e) => {
  const t = {
    [e]: cp,
    [`onUpdate:${e}`]: dp
  }, n = [`update:${e}`];
  return {
    useModelToggle: ({
      indicator: l,
      shouldHideWhenRouteChanges: a,
      shouldProceed: r,
      onShow: i,
      onHide: s
    }) => {
      const u = be(), c = u.props, { emit: p } = u, f = `update:${e}`, m = A(() => Rn(c[`onUpdate:${e}`])), d = A(() => c[e] === null), g = () => {
        l.value !== !0 && (l.value = !0, Rn(i) && i());
      }, b = () => {
        l.value !== !1 && (l.value = !1, Rn(s) && s());
      }, S = () => {
        if (c.disabled === !0 || Rn(r) && !r())
          return;
        const $ = m.value && Oe;
        $ && p(f, !0), (d.value || !$) && g();
      }, y = () => {
        if (c.disabled === !0 || !Oe)
          return;
        const $ = m.value && Oe;
        $ && p(f, !1), (d.value || !$) && b();
      }, v = ($) => {
        !Po($) || (c.disabled && $ ? m.value && p(f, !1) : l.value !== $ && ($ ? g() : b()));
      }, h = () => {
        l.value ? y() : S();
      };
      return J(() => c[e], v), a && u.appContext.config.globalProperties.$route !== void 0 && J(() => ({
        ...u.proxy.$route
      }), () => {
        a.value && l.value && y();
      }), Ue(() => {
        v(c[e]);
      }), {
        hide: y,
        show: S,
        toggle: h
      };
    },
    useModelToggleProps: t,
    useModelToggleEmits: n
  };
};
function pp() {
  let e;
  const t = (o, l) => {
    n(), e = window.setTimeout(o, l);
  }, n = () => window.clearTimeout(e);
  return Yo(() => n()), {
    registerTimeout: t,
    cancelTimeout: n
  };
}
const hp = (e) => {
  const t = (n) => {
    const o = n;
    o.key === Yn.esc && (e == null || e(o));
  };
  Ue(() => {
    Un(document, "keydown", t);
  }), Ot(() => {
    Gn(document, "keydown", t);
  });
};
let or;
const da = `el-popper-container-${Yf()}`, fa = `#${da}`, vp = () => {
  const e = document.createElement("div");
  return e.id = da, document.body.appendChild(e), e;
}, gp = () => {
  qo(() => {
    !Oe || (process.env.NODE_ENV === "test" || !or || !document.body.querySelector(fa)) && (or = vp());
  });
}, mp = Me({
  showAfter: {
    type: Number,
    default: 0
  },
  hideAfter: {
    type: Number,
    default: 200
  }
}), bp = ({
  showAfter: e,
  hideAfter: t,
  open: n,
  close: o
}) => {
  const { registerTimeout: l } = pp();
  return {
    onOpen: () => {
      l(() => {
        n();
      }, O(e));
    },
    onClose: () => {
      l(() => {
        o();
      }, O(t));
    }
  };
}, pa = Symbol("elForwardRef"), yp = (e) => {
  tt(pa, {
    setForwardRef: (n) => {
      e.value = n;
    }
  });
}, wp = (e) => ({
  mounted(t) {
    e(t);
  },
  updated(t) {
    e(t);
  },
  unmounted() {
    e(null);
  }
}), Cp = "el", Sp = "is-", Ft = (e, t, n, o, l) => {
  let a = `${e}-${t}`;
  return n && (a += `-${n}`), o && (a += `__${o}`), l && (a += `--${l}`), a;
}, ce = (e) => {
  const t = Nn("namespace"), n = A(() => t.value || Cp);
  return {
    namespace: n,
    b: (g = "") => Ft(O(n), e, g, "", ""),
    e: (g) => g ? Ft(O(n), e, "", g, "") : "",
    m: (g) => g ? Ft(O(n), e, "", "", g) : "",
    be: (g, b) => g && b ? Ft(O(n), e, g, b, "") : "",
    em: (g, b) => g && b ? Ft(O(n), e, "", g, b) : "",
    bm: (g, b) => g && b ? Ft(O(n), e, g, "", b) : "",
    bem: (g, b, S) => g && b && S ? Ft(O(n), e, g, b, S) : "",
    is: (g, ...b) => {
      const S = b.length >= 1 ? b[0] : !0;
      return g && S ? `${Sp}${g}` : "";
    },
    cssVar: (g) => {
      const b = {};
      for (const S in g)
        b[`--${n.value}-${S}`] = g[S];
      return b;
    },
    cssVarName: (g) => `--${n.value}-${g}`,
    cssVarBlock: (g) => {
      const b = {};
      for (const S in g)
        b[`--${n.value}-${e}-${S}`] = g[S];
      return b;
    },
    cssVarBlockName: (g) => `--${n.value}-${e}-${g}`
  };
}, lr = T(0), ha = () => {
  const e = Nn("zIndex", 2e3), t = A(() => e.value + lr.value);
  return {
    initialZIndex: e,
    currentZIndex: t,
    nextZIndex: () => (lr.value++, t.value)
  };
};
function $p(e) {
  const t = T();
  function n() {
    if (e.value == null)
      return;
    const { selectionStart: l, selectionEnd: a, value: r } = e.value;
    if (l == null || a == null)
      return;
    const i = r.slice(0, Math.max(0, l)), s = r.slice(Math.max(0, a));
    t.value = {
      selectionStart: l,
      selectionEnd: a,
      value: r,
      beforeTxt: i,
      afterTxt: s
    };
  }
  function o() {
    if (e.value == null || t.value == null)
      return;
    const { value: l } = e.value, { beforeTxt: a, afterTxt: r, selectionStart: i } = t.value;
    if (a == null || r == null || i == null)
      return;
    let s = l.length;
    if (l.endsWith(r))
      s = l.length - r.length;
    else if (l.startsWith(a))
      s = a.length;
    else {
      const u = a[i - 1], c = l.indexOf(u, i - 1);
      c !== -1 && (s = c + 1);
    }
    e.value.setSelectionRange(s, s);
  }
  return [n, o];
}
var ge = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [o, l] of t)
    n[o] = l;
  return n;
};
const Ep = Me({
  size: {
    type: we([Number, String])
  },
  color: {
    type: String
  }
}), Op = {
  name: "ElIcon",
  inheritAttrs: !1
}, Tp = /* @__PURE__ */ G({
  ...Op,
  props: Ep,
  setup(e) {
    const t = e, n = ce("icon"), o = A(() => !t.size && !t.color ? {} : {
      fontSize: Lo(t.size) ? void 0 : zo(t.size),
      "--color": t.color
    });
    return (l, a) => (P(), I("i", $t({
      class: O(n).b(),
      style: O(o)
    }, l.$attrs), [
      pe(l.$slots, "default")
    ], 16));
  }
});
var Pp = /* @__PURE__ */ ge(Tp, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/icon/src/icon.vue"]]);
const Ye = ct(Pp);
let st;
const Ap = `
  height:0 !important;
  visibility:hidden !important;
  overflow:hidden !important;
  position:absolute !important;
  z-index:-1000 !important;
  top:0 !important;
  right:0 !important;
`, kp = [
  "letter-spacing",
  "line-height",
  "padding-top",
  "padding-bottom",
  "font-family",
  "font-weight",
  "font-size",
  "text-rendering",
  "text-transform",
  "width",
  "text-indent",
  "padding-left",
  "padding-right",
  "border-width",
  "box-sizing"
];
function Lp(e) {
  const t = window.getComputedStyle(e), n = t.getPropertyValue("box-sizing"), o = Number.parseFloat(t.getPropertyValue("padding-bottom")) + Number.parseFloat(t.getPropertyValue("padding-top")), l = Number.parseFloat(t.getPropertyValue("border-bottom-width")) + Number.parseFloat(t.getPropertyValue("border-top-width"));
  return { contextStyle: kp.map((r) => `${r}:${t.getPropertyValue(r)}`).join(";"), paddingSize: o, borderSize: l, boxSizing: n };
}
function rr(e, t = 1, n) {
  var o;
  st || (st = document.createElement("textarea"), document.body.appendChild(st));
  const { paddingSize: l, borderSize: a, boxSizing: r, contextStyle: i } = Lp(e);
  st.setAttribute("style", `${i};${Ap}`), st.value = e.value || e.placeholder || "";
  let s = st.scrollHeight;
  const u = {};
  r === "border-box" ? s = s + a : r === "content-box" && (s = s - l), st.value = "";
  const c = st.scrollHeight - l;
  if (ut(t)) {
    let p = c * t;
    r === "border-box" && (p = p + l + a), s = Math.max(p, s), u.minHeight = `${p}px`;
  }
  if (ut(n)) {
    let p = c * n;
    r === "border-box" && (p = p + l + a), s = Math.min(p, s);
  }
  return u.height = `${s}px`, (o = st.parentNode) == null || o.removeChild(st), st = void 0, u;
}
const Np = Me({
  id: {
    type: String,
    default: void 0
  },
  size: tp,
  disabled: Boolean,
  modelValue: {
    type: we([
      String,
      Number,
      Object
    ]),
    default: ""
  },
  type: {
    type: String,
    default: "text"
  },
  resize: {
    type: String,
    values: ["none", "both", "horizontal", "vertical"]
  },
  autosize: {
    type: we([Boolean, Object]),
    default: !1
  },
  autocomplete: {
    type: String,
    default: "off"
  },
  formatter: {
    type: Function
  },
  parser: {
    type: Function
  },
  placeholder: {
    type: String
  },
  form: {
    type: String,
    default: ""
  },
  readonly: {
    type: Boolean,
    default: !1
  },
  clearable: {
    type: Boolean,
    default: !1
  },
  showPassword: {
    type: Boolean,
    default: !1
  },
  showWordLimit: {
    type: Boolean,
    default: !1
  },
  suffixIcon: {
    type: tr,
    default: ""
  },
  prefixIcon: {
    type: tr,
    default: ""
  },
  label: {
    type: String,
    default: void 0
  },
  tabindex: {
    type: [String, Number],
    default: 0
  },
  validateEvent: {
    type: Boolean,
    default: !0
  },
  inputStyle: {
    type: we([Object, Array, String]),
    default: () => nl({})
  }
}), zp = {
  [Ie]: (e) => Wt(e),
  input: (e) => Wt(e),
  change: (e) => Wt(e),
  focus: (e) => e instanceof FocusEvent,
  blur: (e) => e instanceof FocusEvent,
  clear: () => !0,
  mouseleave: (e) => e instanceof MouseEvent,
  mouseenter: (e) => e instanceof MouseEvent,
  keydown: (e) => e instanceof Event,
  compositionstart: (e) => e instanceof CompositionEvent,
  compositionupdate: (e) => e instanceof CompositionEvent,
  compositionend: (e) => e instanceof CompositionEvent
}, Mp = ["id", "type", "disabled", "formatter", "parser", "readonly", "autocomplete", "tabindex", "aria-label", "placeholder"], Rp = ["id", "tabindex", "disabled", "readonly", "autocomplete", "aria-label", "placeholder"], Ip = {
  name: "ElInput",
  inheritAttrs: !1
}, Hp = /* @__PURE__ */ G({
  ...Ip,
  props: Np,
  emits: zp,
  setup(e, { expose: t, emit: n }) {
    const o = e, l = {
      suffix: "append",
      prefix: "prepend"
    }, a = be(), r = cs(), i = ds(), s = Qf(), { form: u, formItem: c } = rp(), { inputId: p } = ll(o, {
      formItemContext: c
    }), f = Jt(), m = np(), d = ce("input"), g = ce("textarea"), b = yn(), S = yn(), y = T(!1), v = T(!1), h = T(!1), $ = T(!1), w = T(), C = yn(o.inputStyle), N = A(() => b.value || S.value), H = A(() => {
      var z;
      return (z = u == null ? void 0 : u.statusIcon) != null ? z : !1;
    }), _ = A(() => (c == null ? void 0 : c.validateState) || ""), B = A(() => qf[_.value]), D = A(() => $.value ? Kf : Af), W = A(() => [
      r.style,
      o.inputStyle
    ]), K = A(() => [
      o.inputStyle,
      C.value,
      { resize: o.resize }
    ]), ne = A(() => ud(o.modelValue) ? "" : String(o.modelValue)), oe = A(() => o.clearable && !m.value && !o.readonly && !!ne.value && (y.value || v.value)), U = A(() => o.showPassword && !m.value && !o.readonly && (!!ne.value || y.value)), k = A(() => o.showWordLimit && !!s.value.maxlength && (o.type === "text" || o.type === "textarea") && !m.value && !o.readonly && !o.showPassword), F = A(() => Array.from(ne.value).length), Q = A(() => !!k.value && F.value > Number(s.value.maxlength)), ee = A(() => !!i.suffix || !!o.suffixIcon || oe.value || o.showPassword || k.value || !!_.value && H.value), [se, le] = $p(b);
    Xr(S, (z) => {
      if (!k.value || o.resize !== "both")
        return;
      const te = z[0], { width: Ae } = te.contentRect;
      w.value = {
        right: `calc(100% - ${Ae + 15 + 6}px)`
      };
    });
    const de = () => {
      const { type: z, autosize: te } = o;
      if (!(!Oe || z !== "textarea"))
        if (te) {
          const Ae = Rt(te) ? te.minRows : void 0, Te = Rt(te) ? te.maxRows : void 0;
          C.value = {
            ...rr(S.value, Ae, Te)
          };
        } else
          C.value = {
            minHeight: rr(S.value).minHeight
          };
    }, re = () => {
      const z = N.value;
      !z || z.value === ne.value || (z.value = ne.value);
    }, Se = (z) => {
      const { el: te } = a.vnode;
      if (!te)
        return;
      const Te = Array.from(te.querySelectorAll(`.${d.e(z)}`)).find((j) => j.parentNode === te);
      if (!Te)
        return;
      const ht = l[z];
      i[ht] ? Te.style.transform = `translateX(${z === "suffix" ? "-" : ""}${te.querySelector(`.${d.be("group", ht)}`).offsetWidth}px)` : Te.removeAttribute("style");
    }, fe = () => {
      Se("prefix"), Se("suffix");
    }, Ce = async (z) => {
      se();
      let { value: te } = z.target;
      o.formatter && (te = o.parser ? o.parser(te) : te, te = o.formatter(te)), !h.value && te !== ne.value && (n(Ie, te), n("input", te), await he(), re(), le());
    }, We = (z) => {
      n("change", z.target.value);
    }, lt = (z) => {
      n("compositionstart", z), h.value = !0;
    }, Fe = (z) => {
      var te;
      n("compositionupdate", z);
      const Ae = (te = z.target) == null ? void 0 : te.value, Te = Ae[Ae.length - 1] || "";
      h.value = !la(Te);
    }, Ge = (z) => {
      n("compositionend", z), h.value && (h.value = !1, Ce(z));
    }, rt = () => {
      $.value = !$.value, ft();
    }, ft = async () => {
      var z;
      await he(), (z = N.value) == null || z.focus();
    }, yt = () => {
      var z;
      return (z = N.value) == null ? void 0 : z.blur();
    }, Be = (z) => {
      y.value = !0, n("focus", z);
    }, Je = (z) => {
      var te;
      y.value = !1, n("blur", z), o.validateEvent && ((te = c == null ? void 0 : c.validate) == null || te.call(c, "blur").catch((Ae) => Le(Ae)));
    }, wt = (z) => {
      v.value = !1, n("mouseleave", z);
    }, pt = (z) => {
      v.value = !0, n("mouseenter", z);
    }, Re = (z) => {
      n("keydown", z);
    }, Qe = () => {
      var z;
      (z = N.value) == null || z.select();
    }, at = () => {
      n(Ie, ""), n("change", ""), n("clear"), n("input", "");
    };
    return J(() => o.modelValue, () => {
      var z;
      he(() => de()), o.validateEvent && ((z = c == null ? void 0 : c.validate) == null || z.call(c, "change").catch((te) => Le(te)));
    }), J(ne, () => re()), J(() => o.type, async () => {
      await he(), re(), de(), fe();
    }), Ue(async () => {
      !o.formatter && o.parser && Le("ElInput", "If you set the parser, you also need to set the formatter."), re(), fe(), await he(), de();
    }), Zn(async () => {
      await he(), fe();
    }), t({
      input: b,
      textarea: S,
      ref: N,
      textareaStyle: K,
      autosize: Vt(o, "autosize"),
      focus: ft,
      blur: yt,
      select: Qe,
      clear: at,
      resizeTextarea: de
    }), (z, te) => ke((P(), I("div", {
      class: M([
        z.type === "textarea" ? O(g).b() : O(d).b(),
        O(d).m(O(f)),
        O(d).is("disabled", O(m)),
        O(d).is("exceed", O(Q)),
        {
          [O(d).b("group")]: z.$slots.prepend || z.$slots.append,
          [O(d).bm("group", "append")]: z.$slots.append,
          [O(d).bm("group", "prepend")]: z.$slots.prepend,
          [O(d).m("prefix")]: z.$slots.prefix || z.prefixIcon,
          [O(d).m("suffix")]: z.$slots.suffix || z.suffixIcon || z.clearable || z.showPassword,
          [O(d).bm("suffix", "password-clear")]: O(oe) && O(U)
        },
        z.$attrs.class
      ]),
      style: Ee(O(W)),
      onMouseenter: pt,
      onMouseleave: wt
    }, [
      q(" input "),
      z.type !== "textarea" ? (P(), I(He, { key: 0 }, [
        q(" prepend slot "),
        z.$slots.prepend ? (P(), I("div", {
          key: 0,
          class: M(O(d).be("group", "prepend"))
        }, [
          pe(z.$slots, "prepend")
        ], 2)) : q("v-if", !0),
        V("div", {
          class: M([O(d).e("wrapper"), O(d).is("focus", y.value)])
        }, [
          q(" prefix slot "),
          z.$slots.prefix || z.prefixIcon ? (P(), I("span", {
            key: 0,
            class: M(O(d).e("prefix"))
          }, [
            V("span", {
              class: M(O(d).e("prefix-inner"))
            }, [
              pe(z.$slots, "prefix"),
              z.prefixIcon ? (P(), Y(O(Ye), {
                key: 0,
                class: M(O(d).e("icon"))
              }, {
                default: X(() => [
                  (P(), Y(Lt(z.prefixIcon)))
                ]),
                _: 1
              }, 8, ["class"])) : q("v-if", !0)
            ], 2)
          ], 2)) : q("v-if", !0),
          V("input", $t({
            id: O(p),
            ref_key: "input",
            ref: b,
            class: O(d).e("inner")
          }, O(s), {
            type: z.showPassword ? $.value ? "text" : "password" : z.type,
            disabled: O(m),
            formatter: z.formatter,
            parser: z.parser,
            readonly: z.readonly,
            autocomplete: z.autocomplete,
            tabindex: z.tabindex,
            "aria-label": z.label,
            placeholder: z.placeholder,
            style: z.inputStyle,
            onCompositionstart: lt,
            onCompositionupdate: Fe,
            onCompositionend: Ge,
            onInput: Ce,
            onFocus: Be,
            onBlur: Je,
            onChange: We,
            onKeydown: Re
          }), null, 16, Mp),
          q(" suffix slot "),
          O(ee) ? (P(), I("span", {
            key: 1,
            class: M(O(d).e("suffix"))
          }, [
            V("span", {
              class: M(O(d).e("suffix-inner"))
            }, [
              !O(oe) || !O(U) || !O(k) ? (P(), I(He, { key: 0 }, [
                pe(z.$slots, "suffix"),
                z.suffixIcon ? (P(), Y(O(Ye), {
                  key: 0,
                  class: M(O(d).e("icon"))
                }, {
                  default: X(() => [
                    (P(), Y(Lt(z.suffixIcon)))
                  ]),
                  _: 1
                }, 8, ["class"])) : q("v-if", !0)
              ], 64)) : q("v-if", !0),
              O(oe) ? (P(), Y(O(Ye), {
                key: 1,
                class: M([O(d).e("icon"), O(d).e("clear")]),
                onMousedown: te[0] || (te[0] = it(() => {
                }, ["prevent"])),
                onClick: at
              }, {
                default: X(() => [
                  me(O(el))
                ]),
                _: 1
              }, 8, ["class"])) : q("v-if", !0),
              O(U) ? (P(), Y(O(Ye), {
                key: 2,
                class: M([O(d).e("icon"), O(d).e("password")]),
                onClick: rt
              }, {
                default: X(() => [
                  (P(), Y(Lt(O(D))))
                ]),
                _: 1
              }, 8, ["class"])) : q("v-if", !0),
              O(k) ? (P(), I("span", {
                key: 3,
                class: M(O(d).e("count"))
              }, [
                V("span", {
                  class: M(O(d).e("count-inner"))
                }, ve(O(F)) + " / " + ve(O(s).maxlength), 3)
              ], 2)) : q("v-if", !0),
              O(_) && O(B) && O(H) ? (P(), Y(O(Ye), {
                key: 4,
                class: M([
                  O(d).e("icon"),
                  O(d).e("validateIcon"),
                  O(d).is("loading", O(_) === "validating")
                ])
              }, {
                default: X(() => [
                  (P(), Y(Lt(O(B))))
                ]),
                _: 1
              }, 8, ["class"])) : q("v-if", !0)
            ], 2)
          ], 2)) : q("v-if", !0)
        ], 2),
        q(" append slot "),
        z.$slots.append ? (P(), I("div", {
          key: 1,
          class: M(O(d).be("group", "append"))
        }, [
          pe(z.$slots, "append")
        ], 2)) : q("v-if", !0)
      ], 64)) : (P(), I(He, { key: 1 }, [
        q(" textarea "),
        V("textarea", $t({
          id: O(p),
          ref_key: "textarea",
          ref: S,
          class: O(g).e("inner")
        }, O(s), {
          tabindex: z.tabindex,
          disabled: O(m),
          readonly: z.readonly,
          autocomplete: z.autocomplete,
          style: O(K),
          "aria-label": z.label,
          placeholder: z.placeholder,
          onCompositionstart: lt,
          onCompositionupdate: Fe,
          onCompositionend: Ge,
          onInput: Ce,
          onFocus: Be,
          onBlur: Je,
          onChange: We,
          onKeydown: Re
        }), null, 16, Rp),
        O(k) ? (P(), I("span", {
          key: 0,
          style: Ee(w.value),
          class: M(O(d).e("count"))
        }, ve(O(F)) + " / " + ve(O(s).maxlength), 7)) : q("v-if", !0)
      ], 64))
    ], 38)), [
      [Mt, z.type !== "hidden"]
    ]);
  }
});
var Fp = /* @__PURE__ */ ge(Hp, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/input/src/input.vue"]]);
const va = ct(Fp), Bp = {
  vertical: {
    offset: "offsetHeight",
    scroll: "scrollTop",
    scrollSize: "scrollHeight",
    size: "height",
    key: "vertical",
    axis: "Y",
    client: "clientY",
    direction: "top"
  },
  horizontal: {
    offset: "offsetWidth",
    scroll: "scrollLeft",
    scrollSize: "scrollWidth",
    size: "width",
    key: "horizontal",
    axis: "X",
    client: "clientX",
    direction: "left"
  }
}, _p = ({ move: e, size: t, bar: n }) => ({
  [n.size]: t,
  transform: `translate${n.axis}(${e}%)`
}), Dp = Me({
  vertical: Boolean,
  size: String,
  move: Number,
  ratio: {
    type: Number,
    required: !0
  },
  always: Boolean
}), ar = "Thumb", xp = G({
  name: ar,
  props: Dp,
  setup(e) {
    const t = ue(sa), n = ce("scrollbar");
    t || wd(ar, "can not inject scrollbar context");
    const o = T(), l = T(), a = T({}), r = T(!1);
    let i = !1, s = !1, u = Oe ? document.onselectstart : null;
    const c = A(() => Bp[e.vertical ? "vertical" : "horizontal"]), p = A(() => _p({
      size: e.size,
      move: e.move,
      bar: c.value
    })), f = A(() => o.value[c.value.offset] ** 2 / t.wrapElement[c.value.scrollSize] / e.ratio / l.value[c.value.offset]), m = ($) => {
      var w;
      if ($.stopPropagation(), $.ctrlKey || [1, 2].includes($.button))
        return;
      (w = window.getSelection()) == null || w.removeAllRanges(), g($);
      const C = $.currentTarget;
      !C || (a.value[c.value.axis] = C[c.value.offset] - ($[c.value.client] - C.getBoundingClientRect()[c.value.direction]));
    }, d = ($) => {
      if (!l.value || !o.value || !t.wrapElement)
        return;
      const w = Math.abs($.target.getBoundingClientRect()[c.value.direction] - $[c.value.client]), C = l.value[c.value.offset] / 2, N = (w - C) * 100 * f.value / o.value[c.value.offset];
      t.wrapElement[c.value.scroll] = N * t.wrapElement[c.value.scrollSize] / 100;
    }, g = ($) => {
      $.stopImmediatePropagation(), i = !0, document.addEventListener("mousemove", b), document.addEventListener("mouseup", S), u = document.onselectstart, document.onselectstart = () => !1;
    }, b = ($) => {
      if (!o.value || !l.value || i === !1)
        return;
      const w = a.value[c.value.axis];
      if (!w)
        return;
      const C = (o.value.getBoundingClientRect()[c.value.direction] - $[c.value.client]) * -1, N = l.value[c.value.offset] - w, H = (C - N) * 100 * f.value / o.value[c.value.offset];
      t.wrapElement[c.value.scroll] = H * t.wrapElement[c.value.scrollSize] / 100;
    }, S = () => {
      i = !1, a.value[c.value.axis] = 0, document.removeEventListener("mousemove", b), document.removeEventListener("mouseup", S), h(), s && (r.value = !1);
    }, y = () => {
      s = !1, r.value = !!e.size;
    }, v = () => {
      s = !0, r.value = i;
    };
    Ot(() => {
      h(), document.removeEventListener("mouseup", S);
    });
    const h = () => {
      document.onselectstart !== u && (document.onselectstart = u);
    };
    return Dt(Vt(t, "scrollbarElement"), "mousemove", y), Dt(Vt(t, "scrollbarElement"), "mouseleave", v), {
      ns: n,
      instance: o,
      thumb: l,
      bar: c,
      thumbStyle: p,
      visible: r,
      clickTrackHandler: d,
      clickThumbHandler: m
    };
  }
});
function Wp(e, t, n, o, l, a) {
  return P(), Y(eo, {
    name: e.ns.b("fade")
  }, {
    default: X(() => [
      ke(V("div", {
        ref: "instance",
        class: M([e.ns.e("bar"), e.ns.is(e.bar.key)]),
        onMousedown: t[1] || (t[1] = (...r) => e.clickTrackHandler && e.clickTrackHandler(...r))
      }, [
        V("div", {
          ref: "thumb",
          class: M(e.ns.e("thumb")),
          style: Ee(e.thumbStyle),
          onMousedown: t[0] || (t[0] = (...r) => e.clickThumbHandler && e.clickThumbHandler(...r))
        }, null, 38)
      ], 34), [
        [Mt, e.always || e.visible]
      ])
    ]),
    _: 1
  }, 8, ["name"]);
}
var jp = /* @__PURE__ */ ge(xp, [["render", Wp], ["__file", "/home/runner/work/element-plus/element-plus/packages/components/scrollbar/src/thumb.vue"]]);
const Vp = Me({
  always: {
    type: Boolean,
    default: !0
  },
  width: {
    type: String,
    default: ""
  },
  height: {
    type: String,
    default: ""
  },
  ratioX: {
    type: Number,
    default: 1
  },
  ratioY: {
    type: Number,
    default: 1
  }
}), Kp = G({
  components: {
    Thumb: jp
  },
  props: Vp,
  setup(e) {
    const t = T(0), n = T(0), o = 4;
    return {
      handleScroll: (a) => {
        if (a) {
          const r = a.offsetHeight - o, i = a.offsetWidth - o;
          n.value = a.scrollTop * 100 / r * e.ratioY, t.value = a.scrollLeft * 100 / i * e.ratioX;
        }
      },
      moveX: t,
      moveY: n
    };
  }
});
function qp(e, t, n, o, l, a) {
  const r = ae("thumb");
  return P(), I(He, null, [
    me(r, {
      move: e.moveX,
      ratio: e.ratioX,
      size: e.width,
      always: e.always
    }, null, 8, ["move", "ratio", "size", "always"]),
    me(r, {
      move: e.moveY,
      ratio: e.ratioY,
      size: e.height,
      vertical: "",
      always: e.always
    }, null, 8, ["move", "ratio", "size", "always"])
  ], 64);
}
var Up = /* @__PURE__ */ ge(Kp, [["render", qp], ["__file", "/home/runner/work/element-plus/element-plus/packages/components/scrollbar/src/bar.vue"]]);
const Gp = Me({
  height: {
    type: [String, Number],
    default: ""
  },
  maxHeight: {
    type: [String, Number],
    default: ""
  },
  native: {
    type: Boolean,
    default: !1
  },
  wrapStyle: {
    type: we([String, Object, Array]),
    default: ""
  },
  wrapClass: {
    type: [String, Array],
    default: ""
  },
  viewClass: {
    type: [String, Array],
    default: ""
  },
  viewStyle: {
    type: [String, Array, Object],
    default: ""
  },
  noresize: Boolean,
  tag: {
    type: String,
    default: "div"
  },
  always: {
    type: Boolean,
    default: !1
  },
  minSize: {
    type: Number,
    default: 20
  }
}), Yp = {
  scroll: ({
    scrollTop: e,
    scrollLeft: t
  }) => ut(e) && ut(t)
}, Xp = G({
  name: "ElScrollbar",
  components: {
    Bar: Up
  },
  props: Gp,
  emits: Yp,
  setup(e, { emit: t }) {
    const n = ce("scrollbar");
    let o, l;
    const a = T(), r = T(), i = T(), s = T("0"), u = T("0"), c = T(), p = T(0), f = T(0), m = T(1), d = T(1), g = "ElScrollbar", b = 4, S = A(() => {
      const C = {};
      return e.height && (C.height = zo(e.height)), e.maxHeight && (C.maxHeight = zo(e.maxHeight)), [e.wrapStyle, C];
    }), y = () => {
      var C;
      r.value && ((C = c.value) == null || C.handleScroll(r.value), t("scroll", {
        scrollTop: r.value.scrollTop,
        scrollLeft: r.value.scrollLeft
      }));
    };
    function v(C, N) {
      Rt(C) ? r.value.scrollTo(C) : ut(C) && ut(N) && r.value.scrollTo(C, N);
    }
    const h = (C) => {
      if (!ut(C)) {
        Le(g, "value must be a number");
        return;
      }
      r.value.scrollTop = C;
    }, $ = (C) => {
      if (!ut(C)) {
        Le(g, "value must be a number");
        return;
      }
      r.value.scrollLeft = C;
    }, w = () => {
      if (!r.value)
        return;
      const C = r.value.offsetHeight - b, N = r.value.offsetWidth - b, H = C ** 2 / r.value.scrollHeight, _ = N ** 2 / r.value.scrollWidth, B = Math.max(H, e.minSize), D = Math.max(_, e.minSize);
      m.value = H / (C - H) / (B / (C - B)), d.value = _ / (N - _) / (D / (N - D)), u.value = B + b < C ? `${B}px` : "", s.value = D + b < N ? `${D}px` : "";
    };
    return J(() => e.noresize, (C) => {
      C ? (o == null || o(), l == null || l()) : ({ stop: o } = Xr(i, w), l = Dt("resize", w));
    }, { immediate: !0 }), J(() => [e.maxHeight, e.height], () => {
      e.native || he(() => {
        var C;
        w(), r.value && ((C = c.value) == null || C.handleScroll(r.value));
      });
    }), tt(sa, pn({
      scrollbarElement: a,
      wrapElement: r
    })), Ue(() => {
      e.native || he(() => w());
    }), Zn(() => w()), {
      ns: n,
      scrollbar$: a,
      wrap$: r,
      resize$: i,
      barRef: c,
      moveX: p,
      moveY: f,
      ratioX: d,
      ratioY: m,
      sizeWidth: s,
      sizeHeight: u,
      style: S,
      update: w,
      handleScroll: y,
      scrollTo: v,
      setScrollTop: h,
      setScrollLeft: $
    };
  }
});
function Jp(e, t, n, o, l, a) {
  const r = ae("bar");
  return P(), I("div", {
    ref: "scrollbar$",
    class: M(e.ns.b())
  }, [
    V("div", {
      ref: "wrap$",
      class: M([
        e.wrapClass,
        e.ns.e("wrap"),
        { [e.ns.em("wrap", "hidden-default")]: !e.native }
      ]),
      style: Ee(e.style),
      onScroll: t[0] || (t[0] = (...i) => e.handleScroll && e.handleScroll(...i))
    }, [
      (P(), Y(Lt(e.tag), {
        ref: "resize$",
        class: M([e.ns.e("view"), e.viewClass]),
        style: Ee(e.viewStyle)
      }, {
        default: X(() => [
          pe(e.$slots, "default")
        ]),
        _: 3
      }, 8, ["class", "style"]))
    ], 38),
    e.native ? q("v-if", !0) : (P(), Y(r, {
      key: 0,
      ref: "barRef",
      height: e.sizeHeight,
      width: e.sizeWidth,
      always: e.always,
      "ratio-x": e.ratioX,
      "ratio-y": e.ratioY
    }, null, 8, ["height", "width", "always", "ratio-x", "ratio-y"]))
  ], 2);
}
var Qp = /* @__PURE__ */ ge(Xp, [["render", Jp], ["__file", "/home/runner/work/element-plus/element-plus/packages/components/scrollbar/src/scrollbar.vue"]]);
const rl = ct(Qp), Zp = {
  name: "ElPopperRoot",
  inheritAttrs: !1
}, eh = /* @__PURE__ */ G({
  ...Zp,
  setup(e, { expose: t }) {
    const n = T(), o = T(), l = T(), a = T(), r = {
      triggerRef: n,
      popperInstanceRef: o,
      contentRef: l,
      referenceRef: a
    };
    return t(r), tt(ol, r), (i, s) => pe(i.$slots, "default");
  }
});
var th = /* @__PURE__ */ ge(eh, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/popper/src/popper.vue"]]);
const ga = Me({
  arrowOffset: {
    type: Number,
    default: 5
  }
}), nh = {
  name: "ElPopperArrow",
  inheritAttrs: !1
}, oh = /* @__PURE__ */ G({
  ...nh,
  props: ga,
  setup(e, { expose: t }) {
    const n = e, o = ce("popper"), { arrowOffset: l, arrowRef: a } = ue(ia, void 0);
    return J(() => n.arrowOffset, (r) => {
      l.value = r;
    }), Ot(() => {
      a.value = void 0;
    }), t({
      arrowRef: a
    }), (r, i) => (P(), I("span", {
      ref_key: "arrowRef",
      ref: a,
      class: M(O(o).e("arrow")),
      "data-popper-arrow": ""
    }, null, 2));
  }
});
var lh = /* @__PURE__ */ ge(oh, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/popper/src/arrow.vue"]]);
const bo = "ElOnlyChild", rh = G({
  name: bo,
  setup(e, {
    slots: t,
    attrs: n
  }) {
    var o;
    const l = ue(pa), a = wp((o = l == null ? void 0 : l.setForwardRef) != null ? o : Mr);
    return () => {
      var r;
      const i = (r = t.default) == null ? void 0 : r.call(t, n);
      if (!i)
        return null;
      if (i.length > 1)
        return Le(bo, "requires exact only one valid child."), null;
      const s = ma(i);
      return s ? ke(fs(s, n), [[a]]) : (Le(bo, "no valid child node found"), null);
    };
  }
});
function ma(e) {
  if (!e)
    return null;
  const t = e;
  for (const n of t) {
    if (Rt(n))
      switch (n.type) {
        case Nr:
          continue;
        case ps:
          return yo(n);
        case "svg":
          return yo(n);
        case He:
          return ma(n.children);
        default:
          return n;
      }
    return yo(n);
  }
  return null;
}
function yo(e) {
  return me("span", {
    class: "el-only-child__content"
  }, [e]);
}
const ba = Me({
  virtualRef: {
    type: we(Object)
  },
  virtualTriggering: Boolean,
  onMouseenter: Function,
  onMouseleave: Function,
  onClick: Function,
  onKeydown: Function,
  onFocus: Function,
  onBlur: Function,
  onContextmenu: Function,
  id: String,
  open: Boolean
}), ah = {
  name: "ElPopperTrigger",
  inheritAttrs: !1
}, sh = /* @__PURE__ */ G({
  ...ah,
  props: ba,
  setup(e, { expose: t }) {
    const n = e, { triggerRef: o } = ue(ol, void 0);
    return yp(o), Ue(() => {
      J(() => n.virtualRef, (l) => {
        l && (o.value = Nt(l));
      }, {
        immediate: !0
      }), J(() => o.value, (l, a) => {
        Jr(l) && [
          "onMouseenter",
          "onMouseleave",
          "onClick",
          "onKeydown",
          "onFocus",
          "onBlur",
          "onContextmenu"
        ].forEach((r) => {
          var i;
          const s = n[r];
          s && (l.addEventListener(r.slice(2).toLowerCase(), s), (i = a == null ? void 0 : a.removeEventListener) == null || i.call(a, r.slice(2).toLowerCase(), s));
        });
      }, {
        immediate: !0
      });
    }), t({
      triggerRef: o
    }), (l, a) => l.virtualTriggering ? q("v-if", !0) : (P(), Y(O(rh), $t({ key: 0 }, l.$attrs, {
      "aria-describedby": l.open ? l.id : void 0
    }), {
      default: X(() => [
        pe(l.$slots, "default")
      ]),
      _: 3
    }, 16, ["aria-describedby"]));
  }
});
var ih = /* @__PURE__ */ ge(sh, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/popper/src/trigger.vue"]]), Ke = "top", nt = "bottom", ot = "right", qe = "left", al = "auto", zn = [Ke, nt, ot, qe], rn = "start", Tn = "end", uh = "clippingParents", ya = "viewport", bn = "popper", ch = "reference", sr = zn.reduce(function(e, t) {
  return e.concat([t + "-" + rn, t + "-" + Tn]);
}, []), sl = [].concat(zn, [al]).reduce(function(e, t) {
  return e.concat([t, t + "-" + rn, t + "-" + Tn]);
}, []), dh = "beforeRead", fh = "read", ph = "afterRead", hh = "beforeMain", vh = "main", gh = "afterMain", mh = "beforeWrite", bh = "write", yh = "afterWrite", wh = [dh, fh, ph, hh, vh, gh, mh, bh, yh];
function gt(e) {
  return e ? (e.nodeName || "").toLowerCase() : null;
}
function dt(e) {
  if (e == null)
    return window;
  if (e.toString() !== "[object Window]") {
    var t = e.ownerDocument;
    return t && t.defaultView || window;
  }
  return e;
}
function an(e) {
  var t = dt(e).Element;
  return e instanceof t || e instanceof Element;
}
function et(e) {
  var t = dt(e).HTMLElement;
  return e instanceof t || e instanceof HTMLElement;
}
function il(e) {
  if (typeof ShadowRoot > "u")
    return !1;
  var t = dt(e).ShadowRoot;
  return e instanceof t || e instanceof ShadowRoot;
}
function Ch(e) {
  var t = e.state;
  Object.keys(t.elements).forEach(function(n) {
    var o = t.styles[n] || {}, l = t.attributes[n] || {}, a = t.elements[n];
    !et(a) || !gt(a) || (Object.assign(a.style, o), Object.keys(l).forEach(function(r) {
      var i = l[r];
      i === !1 ? a.removeAttribute(r) : a.setAttribute(r, i === !0 ? "" : i);
    }));
  });
}
function Sh(e) {
  var t = e.state, n = { popper: { position: t.options.strategy, left: "0", top: "0", margin: "0" }, arrow: { position: "absolute" }, reference: {} };
  return Object.assign(t.elements.popper.style, n.popper), t.styles = n, t.elements.arrow && Object.assign(t.elements.arrow.style, n.arrow), function() {
    Object.keys(t.elements).forEach(function(o) {
      var l = t.elements[o], a = t.attributes[o] || {}, r = Object.keys(t.styles.hasOwnProperty(o) ? t.styles[o] : n[o]), i = r.reduce(function(s, u) {
        return s[u] = "", s;
      }, {});
      !et(l) || !gt(l) || (Object.assign(l.style, i), Object.keys(a).forEach(function(s) {
        l.removeAttribute(s);
      }));
    });
  };
}
var wa = { name: "applyStyles", enabled: !0, phase: "write", fn: Ch, effect: Sh, requires: ["computeStyles"] };
function vt(e) {
  return e.split("-")[0];
}
var jt = Math.max, Jn = Math.min, sn = Math.round;
function un(e, t) {
  t === void 0 && (t = !1);
  var n = e.getBoundingClientRect(), o = 1, l = 1;
  if (et(e) && t) {
    var a = e.offsetHeight, r = e.offsetWidth;
    r > 0 && (o = sn(n.width) / r || 1), a > 0 && (l = sn(n.height) / a || 1);
  }
  return { width: n.width / o, height: n.height / l, top: n.top / l, right: n.right / o, bottom: n.bottom / l, left: n.left / o, x: n.left / o, y: n.top / l };
}
function ul(e) {
  var t = un(e), n = e.offsetWidth, o = e.offsetHeight;
  return Math.abs(t.width - n) <= 1 && (n = t.width), Math.abs(t.height - o) <= 1 && (o = t.height), { x: e.offsetLeft, y: e.offsetTop, width: n, height: o };
}
function Ca(e, t) {
  var n = t.getRootNode && t.getRootNode();
  if (e.contains(t))
    return !0;
  if (n && il(n)) {
    var o = t;
    do {
      if (o && e.isSameNode(o))
        return !0;
      o = o.parentNode || o.host;
    } while (o);
  }
  return !1;
}
function Et(e) {
  return dt(e).getComputedStyle(e);
}
function $h(e) {
  return ["table", "td", "th"].indexOf(gt(e)) >= 0;
}
function Ht(e) {
  return ((an(e) ? e.ownerDocument : e.document) || window.document).documentElement;
}
function so(e) {
  return gt(e) === "html" ? e : e.assignedSlot || e.parentNode || (il(e) ? e.host : null) || Ht(e);
}
function ir(e) {
  return !et(e) || Et(e).position === "fixed" ? null : e.offsetParent;
}
function Eh(e) {
  var t = navigator.userAgent.toLowerCase().indexOf("firefox") !== -1, n = navigator.userAgent.indexOf("Trident") !== -1;
  if (n && et(e)) {
    var o = Et(e);
    if (o.position === "fixed")
      return null;
  }
  var l = so(e);
  for (il(l) && (l = l.host); et(l) && ["html", "body"].indexOf(gt(l)) < 0; ) {
    var a = Et(l);
    if (a.transform !== "none" || a.perspective !== "none" || a.contain === "paint" || ["transform", "perspective"].indexOf(a.willChange) !== -1 || t && a.willChange === "filter" || t && a.filter && a.filter !== "none")
      return l;
    l = l.parentNode;
  }
  return null;
}
function Mn(e) {
  for (var t = dt(e), n = ir(e); n && $h(n) && Et(n).position === "static"; )
    n = ir(n);
  return n && (gt(n) === "html" || gt(n) === "body" && Et(n).position === "static") ? t : n || Eh(e) || t;
}
function cl(e) {
  return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
}
function Cn(e, t, n) {
  return jt(e, Jn(t, n));
}
function Oh(e, t, n) {
  var o = Cn(e, t, n);
  return o > n ? n : o;
}
function Sa() {
  return { top: 0, right: 0, bottom: 0, left: 0 };
}
function $a(e) {
  return Object.assign({}, Sa(), e);
}
function Ea(e, t) {
  return t.reduce(function(n, o) {
    return n[o] = e, n;
  }, {});
}
var Th = function(e, t) {
  return e = typeof e == "function" ? e(Object.assign({}, t.rects, { placement: t.placement })) : e, $a(typeof e != "number" ? e : Ea(e, zn));
};
function Ph(e) {
  var t, n = e.state, o = e.name, l = e.options, a = n.elements.arrow, r = n.modifiersData.popperOffsets, i = vt(n.placement), s = cl(i), u = [qe, ot].indexOf(i) >= 0, c = u ? "height" : "width";
  if (!(!a || !r)) {
    var p = Th(l.padding, n), f = ul(a), m = s === "y" ? Ke : qe, d = s === "y" ? nt : ot, g = n.rects.reference[c] + n.rects.reference[s] - r[s] - n.rects.popper[c], b = r[s] - n.rects.reference[s], S = Mn(a), y = S ? s === "y" ? S.clientHeight || 0 : S.clientWidth || 0 : 0, v = g / 2 - b / 2, h = p[m], $ = y - f[c] - p[d], w = y / 2 - f[c] / 2 + v, C = Cn(h, w, $), N = s;
    n.modifiersData[o] = (t = {}, t[N] = C, t.centerOffset = C - w, t);
  }
}
function Ah(e) {
  var t = e.state, n = e.options, o = n.element, l = o === void 0 ? "[data-popper-arrow]" : o;
  l != null && (typeof l == "string" && (l = t.elements.popper.querySelector(l), !l) || !Ca(t.elements.popper, l) || (t.elements.arrow = l));
}
var kh = { name: "arrow", enabled: !0, phase: "main", fn: Ph, effect: Ah, requires: ["popperOffsets"], requiresIfExists: ["preventOverflow"] };
function cn(e) {
  return e.split("-")[1];
}
var Lh = { top: "auto", right: "auto", bottom: "auto", left: "auto" };
function Nh(e) {
  var t = e.x, n = e.y, o = window, l = o.devicePixelRatio || 1;
  return { x: sn(t * l) / l || 0, y: sn(n * l) / l || 0 };
}
function ur(e) {
  var t, n = e.popper, o = e.popperRect, l = e.placement, a = e.variation, r = e.offsets, i = e.position, s = e.gpuAcceleration, u = e.adaptive, c = e.roundOffsets, p = e.isFixed, f = r.x, m = f === void 0 ? 0 : f, d = r.y, g = d === void 0 ? 0 : d, b = typeof c == "function" ? c({ x: m, y: g }) : { x: m, y: g };
  m = b.x, g = b.y;
  var S = r.hasOwnProperty("x"), y = r.hasOwnProperty("y"), v = qe, h = Ke, $ = window;
  if (u) {
    var w = Mn(n), C = "clientHeight", N = "clientWidth";
    if (w === dt(n) && (w = Ht(n), Et(w).position !== "static" && i === "absolute" && (C = "scrollHeight", N = "scrollWidth")), w = w, l === Ke || (l === qe || l === ot) && a === Tn) {
      h = nt;
      var H = p && w === $ && $.visualViewport ? $.visualViewport.height : w[C];
      g -= H - o.height, g *= s ? 1 : -1;
    }
    if (l === qe || (l === Ke || l === nt) && a === Tn) {
      v = ot;
      var _ = p && w === $ && $.visualViewport ? $.visualViewport.width : w[N];
      m -= _ - o.width, m *= s ? 1 : -1;
    }
  }
  var B = Object.assign({ position: i }, u && Lh), D = c === !0 ? Nh({ x: m, y: g }) : { x: m, y: g };
  if (m = D.x, g = D.y, s) {
    var W;
    return Object.assign({}, B, (W = {}, W[h] = y ? "0" : "", W[v] = S ? "0" : "", W.transform = ($.devicePixelRatio || 1) <= 1 ? "translate(" + m + "px, " + g + "px)" : "translate3d(" + m + "px, " + g + "px, 0)", W));
  }
  return Object.assign({}, B, (t = {}, t[h] = y ? g + "px" : "", t[v] = S ? m + "px" : "", t.transform = "", t));
}
function zh(e) {
  var t = e.state, n = e.options, o = n.gpuAcceleration, l = o === void 0 ? !0 : o, a = n.adaptive, r = a === void 0 ? !0 : a, i = n.roundOffsets, s = i === void 0 ? !0 : i, u = { placement: vt(t.placement), variation: cn(t.placement), popper: t.elements.popper, popperRect: t.rects.popper, gpuAcceleration: l, isFixed: t.options.strategy === "fixed" };
  t.modifiersData.popperOffsets != null && (t.styles.popper = Object.assign({}, t.styles.popper, ur(Object.assign({}, u, { offsets: t.modifiersData.popperOffsets, position: t.options.strategy, adaptive: r, roundOffsets: s })))), t.modifiersData.arrow != null && (t.styles.arrow = Object.assign({}, t.styles.arrow, ur(Object.assign({}, u, { offsets: t.modifiersData.arrow, position: "absolute", adaptive: !1, roundOffsets: s })))), t.attributes.popper = Object.assign({}, t.attributes.popper, { "data-popper-placement": t.placement });
}
var Oa = { name: "computeStyles", enabled: !0, phase: "beforeWrite", fn: zh, data: {} }, Hn = { passive: !0 };
function Mh(e) {
  var t = e.state, n = e.instance, o = e.options, l = o.scroll, a = l === void 0 ? !0 : l, r = o.resize, i = r === void 0 ? !0 : r, s = dt(t.elements.popper), u = [].concat(t.scrollParents.reference, t.scrollParents.popper);
  return a && u.forEach(function(c) {
    c.addEventListener("scroll", n.update, Hn);
  }), i && s.addEventListener("resize", n.update, Hn), function() {
    a && u.forEach(function(c) {
      c.removeEventListener("scroll", n.update, Hn);
    }), i && s.removeEventListener("resize", n.update, Hn);
  };
}
var Ta = { name: "eventListeners", enabled: !0, phase: "write", fn: function() {
}, effect: Mh, data: {} }, Rh = { left: "right", right: "left", bottom: "top", top: "bottom" };
function _n(e) {
  return e.replace(/left|right|bottom|top/g, function(t) {
    return Rh[t];
  });
}
var Ih = { start: "end", end: "start" };
function cr(e) {
  return e.replace(/start|end/g, function(t) {
    return Ih[t];
  });
}
function dl(e) {
  var t = dt(e), n = t.pageXOffset, o = t.pageYOffset;
  return { scrollLeft: n, scrollTop: o };
}
function fl(e) {
  return un(Ht(e)).left + dl(e).scrollLeft;
}
function Hh(e) {
  var t = dt(e), n = Ht(e), o = t.visualViewport, l = n.clientWidth, a = n.clientHeight, r = 0, i = 0;
  return o && (l = o.width, a = o.height, /^((?!chrome|android).)*safari/i.test(navigator.userAgent) || (r = o.offsetLeft, i = o.offsetTop)), { width: l, height: a, x: r + fl(e), y: i };
}
function Fh(e) {
  var t, n = Ht(e), o = dl(e), l = (t = e.ownerDocument) == null ? void 0 : t.body, a = jt(n.scrollWidth, n.clientWidth, l ? l.scrollWidth : 0, l ? l.clientWidth : 0), r = jt(n.scrollHeight, n.clientHeight, l ? l.scrollHeight : 0, l ? l.clientHeight : 0), i = -o.scrollLeft + fl(e), s = -o.scrollTop;
  return Et(l || n).direction === "rtl" && (i += jt(n.clientWidth, l ? l.clientWidth : 0) - a), { width: a, height: r, x: i, y: s };
}
function pl(e) {
  var t = Et(e), n = t.overflow, o = t.overflowX, l = t.overflowY;
  return /auto|scroll|overlay|hidden/.test(n + l + o);
}
function Pa(e) {
  return ["html", "body", "#document"].indexOf(gt(e)) >= 0 ? e.ownerDocument.body : et(e) && pl(e) ? e : Pa(so(e));
}
function Sn(e, t) {
  var n;
  t === void 0 && (t = []);
  var o = Pa(e), l = o === ((n = e.ownerDocument) == null ? void 0 : n.body), a = dt(o), r = l ? [a].concat(a.visualViewport || [], pl(o) ? o : []) : o, i = t.concat(r);
  return l ? i : i.concat(Sn(so(r)));
}
function Ro(e) {
  return Object.assign({}, e, { left: e.x, top: e.y, right: e.x + e.width, bottom: e.y + e.height });
}
function Bh(e) {
  var t = un(e);
  return t.top = t.top + e.clientTop, t.left = t.left + e.clientLeft, t.bottom = t.top + e.clientHeight, t.right = t.left + e.clientWidth, t.width = e.clientWidth, t.height = e.clientHeight, t.x = t.left, t.y = t.top, t;
}
function dr(e, t) {
  return t === ya ? Ro(Hh(e)) : an(t) ? Bh(t) : Ro(Fh(Ht(e)));
}
function _h(e) {
  var t = Sn(so(e)), n = ["absolute", "fixed"].indexOf(Et(e).position) >= 0, o = n && et(e) ? Mn(e) : e;
  return an(o) ? t.filter(function(l) {
    return an(l) && Ca(l, o) && gt(l) !== "body";
  }) : [];
}
function Dh(e, t, n) {
  var o = t === "clippingParents" ? _h(e) : [].concat(t), l = [].concat(o, [n]), a = l[0], r = l.reduce(function(i, s) {
    var u = dr(e, s);
    return i.top = jt(u.top, i.top), i.right = Jn(u.right, i.right), i.bottom = Jn(u.bottom, i.bottom), i.left = jt(u.left, i.left), i;
  }, dr(e, a));
  return r.width = r.right - r.left, r.height = r.bottom - r.top, r.x = r.left, r.y = r.top, r;
}
function Aa(e) {
  var t = e.reference, n = e.element, o = e.placement, l = o ? vt(o) : null, a = o ? cn(o) : null, r = t.x + t.width / 2 - n.width / 2, i = t.y + t.height / 2 - n.height / 2, s;
  switch (l) {
    case Ke:
      s = { x: r, y: t.y - n.height };
      break;
    case nt:
      s = { x: r, y: t.y + t.height };
      break;
    case ot:
      s = { x: t.x + t.width, y: i };
      break;
    case qe:
      s = { x: t.x - n.width, y: i };
      break;
    default:
      s = { x: t.x, y: t.y };
  }
  var u = l ? cl(l) : null;
  if (u != null) {
    var c = u === "y" ? "height" : "width";
    switch (a) {
      case rn:
        s[u] = s[u] - (t[c] / 2 - n[c] / 2);
        break;
      case Tn:
        s[u] = s[u] + (t[c] / 2 - n[c] / 2);
        break;
    }
  }
  return s;
}
function Pn(e, t) {
  t === void 0 && (t = {});
  var n = t, o = n.placement, l = o === void 0 ? e.placement : o, a = n.boundary, r = a === void 0 ? uh : a, i = n.rootBoundary, s = i === void 0 ? ya : i, u = n.elementContext, c = u === void 0 ? bn : u, p = n.altBoundary, f = p === void 0 ? !1 : p, m = n.padding, d = m === void 0 ? 0 : m, g = $a(typeof d != "number" ? d : Ea(d, zn)), b = c === bn ? ch : bn, S = e.rects.popper, y = e.elements[f ? b : c], v = Dh(an(y) ? y : y.contextElement || Ht(e.elements.popper), r, s), h = un(e.elements.reference), $ = Aa({ reference: h, element: S, strategy: "absolute", placement: l }), w = Ro(Object.assign({}, S, $)), C = c === bn ? w : h, N = { top: v.top - C.top + g.top, bottom: C.bottom - v.bottom + g.bottom, left: v.left - C.left + g.left, right: C.right - v.right + g.right }, H = e.modifiersData.offset;
  if (c === bn && H) {
    var _ = H[l];
    Object.keys(N).forEach(function(B) {
      var D = [ot, nt].indexOf(B) >= 0 ? 1 : -1, W = [Ke, nt].indexOf(B) >= 0 ? "y" : "x";
      N[B] += _[W] * D;
    });
  }
  return N;
}
function xh(e, t) {
  t === void 0 && (t = {});
  var n = t, o = n.placement, l = n.boundary, a = n.rootBoundary, r = n.padding, i = n.flipVariations, s = n.allowedAutoPlacements, u = s === void 0 ? sl : s, c = cn(o), p = c ? i ? sr : sr.filter(function(d) {
    return cn(d) === c;
  }) : zn, f = p.filter(function(d) {
    return u.indexOf(d) >= 0;
  });
  f.length === 0 && (f = p);
  var m = f.reduce(function(d, g) {
    return d[g] = Pn(e, { placement: g, boundary: l, rootBoundary: a, padding: r })[vt(g)], d;
  }, {});
  return Object.keys(m).sort(function(d, g) {
    return m[d] - m[g];
  });
}
function Wh(e) {
  if (vt(e) === al)
    return [];
  var t = _n(e);
  return [cr(e), t, cr(t)];
}
function jh(e) {
  var t = e.state, n = e.options, o = e.name;
  if (!t.modifiersData[o]._skip) {
    for (var l = n.mainAxis, a = l === void 0 ? !0 : l, r = n.altAxis, i = r === void 0 ? !0 : r, s = n.fallbackPlacements, u = n.padding, c = n.boundary, p = n.rootBoundary, f = n.altBoundary, m = n.flipVariations, d = m === void 0 ? !0 : m, g = n.allowedAutoPlacements, b = t.options.placement, S = vt(b), y = S === b, v = s || (y || !d ? [_n(b)] : Wh(b)), h = [b].concat(v).reduce(function(de, re) {
      return de.concat(vt(re) === al ? xh(t, { placement: re, boundary: c, rootBoundary: p, padding: u, flipVariations: d, allowedAutoPlacements: g }) : re);
    }, []), $ = t.rects.reference, w = t.rects.popper, C = /* @__PURE__ */ new Map(), N = !0, H = h[0], _ = 0; _ < h.length; _++) {
      var B = h[_], D = vt(B), W = cn(B) === rn, K = [Ke, nt].indexOf(D) >= 0, ne = K ? "width" : "height", oe = Pn(t, { placement: B, boundary: c, rootBoundary: p, altBoundary: f, padding: u }), U = K ? W ? ot : qe : W ? nt : Ke;
      $[ne] > w[ne] && (U = _n(U));
      var k = _n(U), F = [];
      if (a && F.push(oe[D] <= 0), i && F.push(oe[U] <= 0, oe[k] <= 0), F.every(function(de) {
        return de;
      })) {
        H = B, N = !1;
        break;
      }
      C.set(B, F);
    }
    if (N)
      for (var Q = d ? 3 : 1, ee = function(de) {
        var re = h.find(function(Se) {
          var fe = C.get(Se);
          if (fe)
            return fe.slice(0, de).every(function(Ce) {
              return Ce;
            });
        });
        if (re)
          return H = re, "break";
      }, se = Q; se > 0; se--) {
        var le = ee(se);
        if (le === "break")
          break;
      }
    t.placement !== H && (t.modifiersData[o]._skip = !0, t.placement = H, t.reset = !0);
  }
}
var Vh = { name: "flip", enabled: !0, phase: "main", fn: jh, requiresIfExists: ["offset"], data: { _skip: !1 } };
function fr(e, t, n) {
  return n === void 0 && (n = { x: 0, y: 0 }), { top: e.top - t.height - n.y, right: e.right - t.width + n.x, bottom: e.bottom - t.height + n.y, left: e.left - t.width - n.x };
}
function pr(e) {
  return [Ke, ot, nt, qe].some(function(t) {
    return e[t] >= 0;
  });
}
function Kh(e) {
  var t = e.state, n = e.name, o = t.rects.reference, l = t.rects.popper, a = t.modifiersData.preventOverflow, r = Pn(t, { elementContext: "reference" }), i = Pn(t, { altBoundary: !0 }), s = fr(r, o), u = fr(i, l, a), c = pr(s), p = pr(u);
  t.modifiersData[n] = { referenceClippingOffsets: s, popperEscapeOffsets: u, isReferenceHidden: c, hasPopperEscaped: p }, t.attributes.popper = Object.assign({}, t.attributes.popper, { "data-popper-reference-hidden": c, "data-popper-escaped": p });
}
var qh = { name: "hide", enabled: !0, phase: "main", requiresIfExists: ["preventOverflow"], fn: Kh };
function Uh(e, t, n) {
  var o = vt(e), l = [qe, Ke].indexOf(o) >= 0 ? -1 : 1, a = typeof n == "function" ? n(Object.assign({}, t, { placement: e })) : n, r = a[0], i = a[1];
  return r = r || 0, i = (i || 0) * l, [qe, ot].indexOf(o) >= 0 ? { x: i, y: r } : { x: r, y: i };
}
function Gh(e) {
  var t = e.state, n = e.options, o = e.name, l = n.offset, a = l === void 0 ? [0, 0] : l, r = sl.reduce(function(c, p) {
    return c[p] = Uh(p, t.rects, a), c;
  }, {}), i = r[t.placement], s = i.x, u = i.y;
  t.modifiersData.popperOffsets != null && (t.modifiersData.popperOffsets.x += s, t.modifiersData.popperOffsets.y += u), t.modifiersData[o] = r;
}
var Yh = { name: "offset", enabled: !0, phase: "main", requires: ["popperOffsets"], fn: Gh };
function Xh(e) {
  var t = e.state, n = e.name;
  t.modifiersData[n] = Aa({ reference: t.rects.reference, element: t.rects.popper, strategy: "absolute", placement: t.placement });
}
var ka = { name: "popperOffsets", enabled: !0, phase: "read", fn: Xh, data: {} };
function Jh(e) {
  return e === "x" ? "y" : "x";
}
function Qh(e) {
  var t = e.state, n = e.options, o = e.name, l = n.mainAxis, a = l === void 0 ? !0 : l, r = n.altAxis, i = r === void 0 ? !1 : r, s = n.boundary, u = n.rootBoundary, c = n.altBoundary, p = n.padding, f = n.tether, m = f === void 0 ? !0 : f, d = n.tetherOffset, g = d === void 0 ? 0 : d, b = Pn(t, { boundary: s, rootBoundary: u, padding: p, altBoundary: c }), S = vt(t.placement), y = cn(t.placement), v = !y, h = cl(S), $ = Jh(h), w = t.modifiersData.popperOffsets, C = t.rects.reference, N = t.rects.popper, H = typeof g == "function" ? g(Object.assign({}, t.rects, { placement: t.placement })) : g, _ = typeof H == "number" ? { mainAxis: H, altAxis: H } : Object.assign({ mainAxis: 0, altAxis: 0 }, H), B = t.modifiersData.offset ? t.modifiersData.offset[t.placement] : null, D = { x: 0, y: 0 };
  if (w) {
    if (a) {
      var W, K = h === "y" ? Ke : qe, ne = h === "y" ? nt : ot, oe = h === "y" ? "height" : "width", U = w[h], k = U + b[K], F = U - b[ne], Q = m ? -N[oe] / 2 : 0, ee = y === rn ? C[oe] : N[oe], se = y === rn ? -N[oe] : -C[oe], le = t.elements.arrow, de = m && le ? ul(le) : { width: 0, height: 0 }, re = t.modifiersData["arrow#persistent"] ? t.modifiersData["arrow#persistent"].padding : Sa(), Se = re[K], fe = re[ne], Ce = Cn(0, C[oe], de[oe]), We = v ? C[oe] / 2 - Q - Ce - Se - _.mainAxis : ee - Ce - Se - _.mainAxis, lt = v ? -C[oe] / 2 + Q + Ce + fe + _.mainAxis : se + Ce + fe + _.mainAxis, Fe = t.elements.arrow && Mn(t.elements.arrow), Ge = Fe ? h === "y" ? Fe.clientTop || 0 : Fe.clientLeft || 0 : 0, rt = (W = B == null ? void 0 : B[h]) != null ? W : 0, ft = U + We - rt - Ge, yt = U + lt - rt, Be = Cn(m ? Jn(k, ft) : k, U, m ? jt(F, yt) : F);
      w[h] = Be, D[h] = Be - U;
    }
    if (i) {
      var Je, wt = h === "x" ? Ke : qe, pt = h === "x" ? nt : ot, Re = w[$], Qe = $ === "y" ? "height" : "width", at = Re + b[wt], z = Re - b[pt], te = [Ke, qe].indexOf(S) !== -1, Ae = (Je = B == null ? void 0 : B[$]) != null ? Je : 0, Te = te ? at : Re - C[Qe] - N[Qe] - Ae + _.altAxis, ht = te ? Re + C[Qe] + N[Qe] - Ae - _.altAxis : z, j = m && te ? Oh(Te, Re, ht) : Cn(m ? Te : at, Re, m ? ht : z);
      w[$] = j, D[$] = j - Re;
    }
    t.modifiersData[o] = D;
  }
}
var Zh = { name: "preventOverflow", enabled: !0, phase: "main", fn: Qh, requiresIfExists: ["offset"] };
function ev(e) {
  return { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop };
}
function tv(e) {
  return e === dt(e) || !et(e) ? dl(e) : ev(e);
}
function nv(e) {
  var t = e.getBoundingClientRect(), n = sn(t.width) / e.offsetWidth || 1, o = sn(t.height) / e.offsetHeight || 1;
  return n !== 1 || o !== 1;
}
function ov(e, t, n) {
  n === void 0 && (n = !1);
  var o = et(t), l = et(t) && nv(t), a = Ht(t), r = un(e, l), i = { scrollLeft: 0, scrollTop: 0 }, s = { x: 0, y: 0 };
  return (o || !o && !n) && ((gt(t) !== "body" || pl(a)) && (i = tv(t)), et(t) ? (s = un(t, !0), s.x += t.clientLeft, s.y += t.clientTop) : a && (s.x = fl(a))), { x: r.left + i.scrollLeft - s.x, y: r.top + i.scrollTop - s.y, width: r.width, height: r.height };
}
function lv(e) {
  var t = /* @__PURE__ */ new Map(), n = /* @__PURE__ */ new Set(), o = [];
  e.forEach(function(a) {
    t.set(a.name, a);
  });
  function l(a) {
    n.add(a.name);
    var r = [].concat(a.requires || [], a.requiresIfExists || []);
    r.forEach(function(i) {
      if (!n.has(i)) {
        var s = t.get(i);
        s && l(s);
      }
    }), o.push(a);
  }
  return e.forEach(function(a) {
    n.has(a.name) || l(a);
  }), o;
}
function rv(e) {
  var t = lv(e);
  return wh.reduce(function(n, o) {
    return n.concat(t.filter(function(l) {
      return l.phase === o;
    }));
  }, []);
}
function av(e) {
  var t;
  return function() {
    return t || (t = new Promise(function(n) {
      Promise.resolve().then(function() {
        t = void 0, n(e());
      });
    })), t;
  };
}
function sv(e) {
  var t = e.reduce(function(n, o) {
    var l = n[o.name];
    return n[o.name] = l ? Object.assign({}, l, o, { options: Object.assign({}, l.options, o.options), data: Object.assign({}, l.data, o.data) }) : o, n;
  }, {});
  return Object.keys(t).map(function(n) {
    return t[n];
  });
}
var hr = { placement: "bottom", modifiers: [], strategy: "absolute" };
function vr() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  return !t.some(function(o) {
    return !(o && typeof o.getBoundingClientRect == "function");
  });
}
function hl(e) {
  e === void 0 && (e = {});
  var t = e, n = t.defaultModifiers, o = n === void 0 ? [] : n, l = t.defaultOptions, a = l === void 0 ? hr : l;
  return function(r, i, s) {
    s === void 0 && (s = a);
    var u = { placement: "bottom", orderedModifiers: [], options: Object.assign({}, hr, a), modifiersData: {}, elements: { reference: r, popper: i }, attributes: {}, styles: {} }, c = [], p = !1, f = { state: u, setOptions: function(g) {
      var b = typeof g == "function" ? g(u.options) : g;
      d(), u.options = Object.assign({}, a, u.options, b), u.scrollParents = { reference: an(r) ? Sn(r) : r.contextElement ? Sn(r.contextElement) : [], popper: Sn(i) };
      var S = rv(sv([].concat(o, u.options.modifiers)));
      return u.orderedModifiers = S.filter(function(y) {
        return y.enabled;
      }), m(), f.update();
    }, forceUpdate: function() {
      if (!p) {
        var g = u.elements, b = g.reference, S = g.popper;
        if (vr(b, S)) {
          u.rects = { reference: ov(b, Mn(S), u.options.strategy === "fixed"), popper: ul(S) }, u.reset = !1, u.placement = u.options.placement, u.orderedModifiers.forEach(function(N) {
            return u.modifiersData[N.name] = Object.assign({}, N.data);
          });
          for (var y = 0; y < u.orderedModifiers.length; y++) {
            if (u.reset === !0) {
              u.reset = !1, y = -1;
              continue;
            }
            var v = u.orderedModifiers[y], h = v.fn, $ = v.options, w = $ === void 0 ? {} : $, C = v.name;
            typeof h == "function" && (u = h({ state: u, options: w, name: C, instance: f }) || u);
          }
        }
      }
    }, update: av(function() {
      return new Promise(function(g) {
        f.forceUpdate(), g(u);
      });
    }), destroy: function() {
      d(), p = !0;
    } };
    if (!vr(r, i))
      return f;
    f.setOptions(s).then(function(g) {
      !p && s.onFirstUpdate && s.onFirstUpdate(g);
    });
    function m() {
      u.orderedModifiers.forEach(function(g) {
        var b = g.name, S = g.options, y = S === void 0 ? {} : S, v = g.effect;
        if (typeof v == "function") {
          var h = v({ state: u, name: b, instance: f, options: y }), $ = function() {
          };
          c.push(h || $);
        }
      });
    }
    function d() {
      c.forEach(function(g) {
        return g();
      }), c = [];
    }
    return f;
  };
}
hl();
var iv = [Ta, ka, Oa, wa];
hl({ defaultModifiers: iv });
var uv = [Ta, ka, Oa, wa, Yh, Vh, Zh, kh, qh], La = hl({ defaultModifiers: uv });
const cv = ["fixed", "absolute"], dv = Me({
  boundariesPadding: {
    type: Number,
    default: 0
  },
  fallbackPlacements: {
    type: we(Array),
    default: () => []
  },
  gpuAcceleration: {
    type: Boolean,
    default: !0
  },
  offset: {
    type: Number,
    default: 12
  },
  placement: {
    type: String,
    values: sl,
    default: "bottom"
  },
  popperOptions: {
    type: we(Object),
    default: () => ({})
  },
  strategy: {
    type: String,
    values: cv,
    default: "absolute"
  }
}), Na = Me({
  ...dv,
  style: { type: we([String, Array, Object]) },
  className: { type: we([String, Array, Object]) },
  effect: {
    type: String,
    default: "dark"
  },
  visible: Boolean,
  enterable: {
    type: Boolean,
    default: !0
  },
  pure: Boolean,
  popperClass: {
    type: we([String, Array, Object])
  },
  popperStyle: {
    type: we([String, Array, Object])
  },
  referenceEl: {
    type: we(Object)
  },
  stopPopperMouseEvent: {
    type: Boolean,
    default: !0
  },
  zIndex: Number
}), gr = (e, t) => {
  const { placement: n, strategy: o, popperOptions: l } = e, a = {
    placement: n,
    strategy: o,
    ...l,
    modifiers: pv(e)
  };
  return hv(a, t), vv(a, l == null ? void 0 : l.modifiers), a;
}, fv = (e) => {
  if (!!Oe)
    return Nt(e);
};
function pv(e) {
  const { offset: t, gpuAcceleration: n, fallbackPlacements: o } = e;
  return [
    {
      name: "offset",
      options: {
        offset: [0, t != null ? t : 12]
      }
    },
    {
      name: "preventOverflow",
      options: {
        padding: {
          top: 2,
          bottom: 2,
          left: 5,
          right: 5
        }
      }
    },
    {
      name: "flip",
      options: {
        padding: 5,
        fallbackPlacements: o != null ? o : []
      }
    },
    {
      name: "computeStyles",
      options: {
        gpuAcceleration: n,
        adaptive: n
      }
    }
  ];
}
function hv(e, { arrowEl: t, arrowOffset: n }) {
  e.modifiers.push({
    name: "arrow",
    options: {
      element: t,
      padding: n != null ? n : 5
    }
  });
}
function vv(e, t) {
  t && (e.modifiers = [...e.modifiers, ...t != null ? t : []]);
}
const gv = {
  name: "ElPopperContent"
}, mv = /* @__PURE__ */ G({
  ...gv,
  props: Na,
  emits: ["mouseenter", "mouseleave"],
  setup(e, { expose: t }) {
    const n = e, { popperInstanceRef: o, contentRef: l, triggerRef: a } = ue(ol, void 0), r = ue(ln, void 0), { nextZIndex: i } = ha(), s = ce("popper"), u = T(), c = T(), p = T();
    tt(ia, {
      arrowRef: c,
      arrowOffset: p
    }), tt(ln, {
      ...r,
      addInputId: () => {
      },
      removeInputId: () => {
      }
    });
    const f = T(n.zIndex || i()), m = A(() => fv(n.referenceEl) || O(a)), d = A(() => [{ zIndex: O(f) }, n.popperStyle]), g = A(() => [
      s.b(),
      s.is("pure", n.pure),
      s.is(n.effect),
      n.popperClass
    ]), b = ({ referenceEl: v, popperContentEl: h, arrowEl: $ }) => {
      const w = gr(n, {
        arrowEl: $,
        arrowOffset: O(p)
      });
      return La(v, h, w);
    }, S = (v = !0) => {
      var h;
      (h = O(o)) == null || h.update(), v && (f.value = n.zIndex || i());
    }, y = () => {
      var v, h;
      const $ = { name: "eventListeners", enabled: n.visible };
      (h = (v = O(o)) == null ? void 0 : v.setOptions) == null || h.call(v, (w) => ({
        ...w,
        modifiers: [...w.modifiers || [], $]
      })), S(!1);
    };
    return Ue(() => {
      let v;
      J(m, (h) => {
        var $;
        v == null || v();
        const w = O(o);
        if (($ = w == null ? void 0 : w.destroy) == null || $.call(w), h) {
          const C = O(u);
          l.value = C, o.value = b({
            referenceEl: h,
            popperContentEl: C,
            arrowEl: O(c)
          }), v = J(() => h.getBoundingClientRect(), () => S(), {
            immediate: !0
          });
        } else
          o.value = void 0;
      }, {
        immediate: !0
      }), J(() => n.visible, y, { immediate: !0 }), J(() => gr(n, {
        arrowEl: O(c),
        arrowOffset: O(p)
      }), (h) => {
        var $;
        return ($ = o.value) == null ? void 0 : $.setOptions(h);
      });
    }), t({
      popperContentRef: u,
      popperInstanceRef: o,
      updatePopper: S,
      contentStyle: d
    }), (v, h) => (P(), I("div", {
      ref_key: "popperContentRef",
      ref: u,
      style: Ee(O(d)),
      class: M(O(g)),
      role: "tooltip",
      onMouseenter: h[0] || (h[0] = ($) => v.$emit("mouseenter", $)),
      onMouseleave: h[1] || (h[1] = ($) => v.$emit("mouseleave", $))
    }, [
      pe(v.$slots, "default")
    ], 38));
  }
});
var bv = /* @__PURE__ */ ge(mv, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/popper/src/content.vue"]]);
const yv = ct(th), wv = G({
  name: "ElVisuallyHidden",
  props: {
    style: {
      type: [String, Object, Array]
    }
  },
  setup(e) {
    return {
      computedStyle: A(() => [
        e.style,
        {
          position: "absolute",
          border: 0,
          width: 1,
          height: 1,
          padding: 0,
          margin: -1,
          overflow: "hidden",
          clip: "rect(0, 0, 0, 0)",
          whiteSpace: "nowrap",
          wordWrap: "normal"
        }
      ])
    };
  }
});
function Cv(e, t, n, o, l, a) {
  return P(), I("span", $t(e.$attrs, { style: e.computedStyle }), [
    pe(e.$slots, "default")
  ], 16);
}
var Sv = /* @__PURE__ */ ge(wv, [["render", Cv], ["__file", "/home/runner/work/element-plus/element-plus/packages/components/visual-hidden/src/visual-hidden.vue"]]);
const vl = Me({
  ...mp,
  ...Na,
  appendTo: {
    type: we([String, Object]),
    default: fa
  },
  content: {
    type: String,
    default: ""
  },
  rawContent: {
    type: Boolean,
    default: !1
  },
  persistent: Boolean,
  ariaLabel: String,
  visible: {
    type: we(Boolean),
    default: null
  },
  transition: {
    type: String,
    default: "el-fade-in-linear"
  },
  teleported: {
    type: Boolean,
    default: !0
  },
  disabled: {
    type: Boolean
  }
}), za = Me({
  ...ba,
  disabled: Boolean,
  trigger: {
    type: we([String, Array]),
    default: "hover"
  }
}), $v = Me({
  openDelay: {
    type: Number
  },
  visibleArrow: {
    type: Boolean,
    default: void 0
  },
  hideAfter: {
    type: Number,
    default: 200
  },
  showArrow: {
    type: Boolean,
    default: !0
  }
}), gl = Symbol("elTooltip"), Ev = G({
  name: "ElTooltipContent",
  components: {
    ElPopperContent: bv,
    ElVisuallyHidden: Sv
  },
  inheritAttrs: !1,
  props: vl,
  setup(e) {
    const t = T(null), n = T(!1), o = T(!1), l = T(!1), a = T(!1), {
      controlled: r,
      id: i,
      open: s,
      trigger: u,
      onClose: c,
      onOpen: p,
      onShow: f,
      onHide: m,
      onBeforeShow: d,
      onBeforeHide: g
    } = ue(gl, void 0), b = A(() => process.env.NODE_ENV === "test" ? !0 : e.persistent);
    Ot(() => {
      a.value = !0;
    });
    const S = A(() => O(b) ? !0 : O(s)), y = A(() => e.disabled ? !1 : O(s)), v = A(() => {
      var W;
      return (W = e.style) != null ? W : {};
    }), h = A(() => !O(s));
    hp(c);
    const $ = () => {
      m();
    }, w = () => {
      if (O(r))
        return !0;
    }, C = St(w, () => {
      e.enterable && O(u) === "hover" && p();
    }), N = St(w, () => {
      O(u) === "hover" && c();
    }), H = () => {
      var W, K;
      (K = (W = t.value) == null ? void 0 : W.updatePopper) == null || K.call(W), d == null || d();
    }, _ = () => {
      g == null || g();
    }, B = () => {
      f();
    };
    let D;
    return J(() => O(s), (W) => {
      W ? D = pd(A(() => {
        var K;
        return (K = t.value) == null ? void 0 : K.popperContentRef;
      }), () => {
        if (O(r))
          return;
        O(u) !== "hover" && c();
      }) : D == null || D();
    }, {
      flush: "post"
    }), {
      ariaHidden: h,
      entering: o,
      leaving: l,
      id: i,
      intermediateOpen: n,
      contentStyle: v,
      contentRef: t,
      destroyed: a,
      shouldRender: S,
      shouldShow: y,
      open: s,
      onAfterShow: B,
      onBeforeEnter: H,
      onBeforeLeave: _,
      onContentEnter: C,
      onContentLeave: N,
      onTransitionLeave: $
    };
  }
});
function Ov(e, t, n, o, l, a) {
  const r = ae("el-visually-hidden"), i = ae("el-popper-content");
  return P(), Y(hs, {
    disabled: !e.teleported,
    to: e.appendTo
  }, [
    me(eo, {
      name: e.transition,
      onAfterLeave: e.onTransitionLeave,
      onBeforeEnter: e.onBeforeEnter,
      onAfterEnter: e.onAfterShow,
      onBeforeLeave: e.onBeforeLeave
    }, {
      default: X(() => [
        e.shouldRender ? ke((P(), Y(i, $t({
          key: 0,
          ref: "contentRef"
        }, e.$attrs, {
          "aria-hidden": e.ariaHidden,
          "boundaries-padding": e.boundariesPadding,
          "fallback-placements": e.fallbackPlacements,
          "gpu-acceleration": e.gpuAcceleration,
          offset: e.offset,
          placement: e.placement,
          "popper-options": e.popperOptions,
          strategy: e.strategy,
          effect: e.effect,
          enterable: e.enterable,
          pure: e.pure,
          "popper-class": e.popperClass,
          "popper-style": [e.popperStyle, e.contentStyle],
          "reference-el": e.referenceEl,
          visible: e.shouldShow,
          "z-index": e.zIndex,
          onMouseenter: e.onContentEnter,
          onMouseleave: e.onContentLeave
        }), {
          default: X(() => [
            q(" Workaround bug #6378 "),
            e.destroyed ? q("v-if", !0) : (P(), I(He, { key: 0 }, [
              pe(e.$slots, "default"),
              me(r, {
                id: e.id,
                role: "tooltip"
              }, {
                default: X(() => [
                  Kt(ve(e.ariaLabel), 1)
                ]),
                _: 1
              }, 8, ["id"])
            ], 64))
          ]),
          _: 3
        }, 16, ["aria-hidden", "boundaries-padding", "fallback-placements", "gpu-acceleration", "offset", "placement", "popper-options", "strategy", "effect", "enterable", "pure", "popper-class", "popper-style", "reference-el", "visible", "z-index", "onMouseenter", "onMouseleave"])), [
          [Mt, e.shouldShow]
        ]) : q("v-if", !0)
      ]),
      _: 3
    }, 8, ["name", "onAfterLeave", "onBeforeEnter", "onAfterEnter", "onBeforeLeave"])
  ], 8, ["disabled", "to"]);
}
var Tv = /* @__PURE__ */ ge(Ev, [["render", Ov], ["__file", "/home/runner/work/element-plus/element-plus/packages/components/tooltip/src/content.vue"]]);
const Pv = (e, t) => ys(e) ? e.includes(t) : e === t, en = (e, t, n) => (o) => {
  Pv(O(e), t) && n(o);
}, Av = G({
  name: "ElTooltipTrigger",
  components: {
    ElPopperTrigger: ih
  },
  props: za,
  setup(e) {
    const t = ce("tooltip"), { controlled: n, id: o, open: l, onOpen: a, onClose: r, onToggle: i } = ue(gl, void 0), s = T(null), u = () => {
      if (O(n) || e.disabled)
        return !0;
    }, c = Vt(e, "trigger"), p = St(u, en(c, "hover", a)), f = St(u, en(c, "hover", r)), m = St(u, en(c, "click", (y) => {
      y.button === 0 && i(y);
    })), d = St(u, en(c, "focus", a)), g = St(u, en(c, "focus", r)), b = St(u, en(c, "contextmenu", (y) => {
      y.preventDefault(), i(y);
    })), S = St(u, (y) => {
      const { code: v } = y;
      (v === Yn.enter || v === Yn.space) && i(y);
    });
    return {
      onBlur: g,
      onContextMenu: b,
      onFocus: d,
      onMouseenter: p,
      onMouseleave: f,
      onClick: m,
      onKeydown: S,
      open: l,
      id: o,
      triggerRef: s,
      ns: t
    };
  }
});
function kv(e, t, n, o, l, a) {
  const r = ae("el-popper-trigger");
  return P(), Y(r, {
    id: e.id,
    "virtual-ref": e.virtualRef,
    open: e.open,
    "virtual-triggering": e.virtualTriggering,
    class: M(e.ns.e("trigger")),
    onBlur: e.onBlur,
    onClick: e.onClick,
    onContextmenu: e.onContextMenu,
    onFocus: e.onFocus,
    onMouseenter: e.onMouseenter,
    onMouseleave: e.onMouseleave,
    onKeydown: e.onKeydown
  }, {
    default: X(() => [
      pe(e.$slots, "default")
    ]),
    _: 3
  }, 8, ["id", "virtual-ref", "open", "virtual-triggering", "class", "onBlur", "onClick", "onContextmenu", "onFocus", "onMouseenter", "onMouseleave", "onKeydown"]);
}
var Lv = /* @__PURE__ */ ge(Av, [["render", kv], ["__file", "/home/runner/work/element-plus/element-plus/packages/components/tooltip/src/trigger.vue"]]);
const { useModelToggleProps: Nv, useModelToggle: zv, useModelToggleEmits: Mv } = fp("visible"), Rv = G({
  name: "ElTooltip",
  components: {
    ElPopper: yv,
    ElPopperArrow: lh,
    ElTooltipContent: Tv,
    ElTooltipTrigger: Lv
  },
  props: {
    ...Nv,
    ...vl,
    ...za,
    ...ga,
    ...$v
  },
  emits: [...Mv, "before-show", "before-hide", "show", "hide"],
  setup(e, { emit: t }) {
    gp();
    const n = A(() => (Lo(e.openDelay) || Le("ElTooltip", "open-delay is about to be deprecated in the next major version, please use `show-after` instead"), e.openDelay || e.showAfter)), o = A(() => (Lo(e.visibleArrow) || Le("ElTooltip", "`visible-arrow` is about to be deprecated in the next major version, please use `show-arrow` instead"), Po(e.visibleArrow) ? e.visibleArrow : e.showArrow)), l = ca(), a = T(null), r = () => {
      var m;
      const d = O(a);
      d && ((m = d.popperInstanceRef) == null || m.update());
    }, i = T(!1), { show: s, hide: u } = zv({
      indicator: i
    }), { onOpen: c, onClose: p } = bp({
      showAfter: n,
      hideAfter: Vt(e, "hideAfter"),
      open: s,
      close: u
    }), f = A(() => Po(e.visible));
    return tt(gl, {
      controlled: f,
      id: l,
      open: vs(i),
      trigger: Vt(e, "trigger"),
      onOpen: c,
      onClose: p,
      onToggle: () => {
        O(i) ? p() : c();
      },
      onShow: () => {
        t("show");
      },
      onHide: () => {
        t("hide");
      },
      onBeforeShow: () => {
        t("before-show");
      },
      onBeforeHide: () => {
        t("before-hide");
      },
      updatePopper: r
    }), J(() => e.disabled, (m) => {
      m && i.value && (i.value = !1);
    }), {
      compatShowAfter: n,
      compatShowArrow: o,
      popperRef: a,
      open: i,
      hide: u,
      updatePopper: r,
      onOpen: c,
      onClose: p
    };
  }
}), Iv = ["innerHTML"], Hv = { key: 1 };
function Fv(e, t, n, o, l, a) {
  const r = ae("el-tooltip-trigger"), i = ae("el-popper-arrow"), s = ae("el-tooltip-content"), u = ae("el-popper");
  return P(), Y(u, { ref: "popperRef" }, {
    default: X(() => [
      me(r, {
        disabled: e.disabled,
        trigger: e.trigger,
        "virtual-ref": e.virtualRef,
        "virtual-triggering": e.virtualTriggering
      }, {
        default: X(() => [
          e.$slots.default ? pe(e.$slots, "default", { key: 0 }) : q("v-if", !0)
        ]),
        _: 3
      }, 8, ["disabled", "trigger", "virtual-ref", "virtual-triggering"]),
      me(s, {
        "aria-label": e.ariaLabel,
        "boundaries-padding": e.boundariesPadding,
        content: e.content,
        disabled: e.disabled,
        effect: e.effect,
        enterable: e.enterable,
        "fallback-placements": e.fallbackPlacements,
        "hide-after": e.hideAfter,
        "gpu-acceleration": e.gpuAcceleration,
        offset: e.offset,
        persistent: e.persistent,
        "popper-class": e.popperClass,
        "popper-style": e.popperStyle,
        placement: e.placement,
        "popper-options": e.popperOptions,
        pure: e.pure,
        "raw-content": e.rawContent,
        "reference-el": e.referenceEl,
        "show-after": e.compatShowAfter,
        strategy: e.strategy,
        teleported: e.teleported,
        transition: e.transition,
        "z-index": e.zIndex,
        "append-to": e.appendTo
      }, {
        default: X(() => [
          pe(e.$slots, "content", {}, () => [
            e.rawContent ? (P(), I("span", {
              key: 0,
              innerHTML: e.content
            }, null, 8, Iv)) : (P(), I("span", Hv, ve(e.content), 1))
          ]),
          e.compatShowArrow ? (P(), Y(i, {
            key: 0,
            "arrow-offset": e.arrowOffset
          }, null, 8, ["arrow-offset"])) : q("v-if", !0)
        ]),
        _: 3
      }, 8, ["aria-label", "boundaries-padding", "content", "disabled", "effect", "enterable", "fallback-placements", "hide-after", "gpu-acceleration", "offset", "persistent", "popper-class", "popper-style", "placement", "popper-options", "pure", "raw-content", "reference-el", "show-after", "strategy", "teleported", "transition", "z-index", "append-to"])
    ]),
    _: 3
  }, 512);
}
var Bv = /* @__PURE__ */ ge(Rv, [["render", Fv], ["__file", "/home/runner/work/element-plus/element-plus/packages/components/tooltip/src/tooltip.vue"]]);
const Ma = ct(Bv);
function _v(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
const kt = /* @__PURE__ */ new Map();
let mr;
Oe && (document.addEventListener("mousedown", (e) => mr = e), document.addEventListener("mouseup", (e) => {
  for (const t of kt.values())
    for (const { documentHandler: n } of t)
      n(e, mr);
}));
function br(e, t) {
  let n = [];
  return Array.isArray(t.arg) ? n = t.arg : Jr(t.arg) && n.push(t.arg), function(o, l) {
    const a = t.instance.popperRef, r = o.target, i = l == null ? void 0 : l.target, s = !t || !t.instance, u = !r || !i, c = e.contains(r) || e.contains(i), p = e === r, f = n.length && n.some((d) => d == null ? void 0 : d.contains(r)) || n.length && n.includes(i), m = a && (a.contains(r) || a.contains(i));
    s || u || c || p || f || m || t.value(o, l);
  };
}
const Ra = {
  beforeMount(e, t) {
    kt.has(e) || kt.set(e, []), kt.get(e).push({
      documentHandler: br(e, t),
      bindingFn: t.value
    });
  },
  updated(e, t) {
    kt.has(e) || kt.set(e, []);
    const n = kt.get(e), o = n.findIndex((a) => a.bindingFn === t.oldValue), l = {
      documentHandler: br(e, t),
      bindingFn: t.value
    };
    o >= 0 ? n.splice(o, 1, l) : n.push(l);
  },
  unmounted(e) {
    kt.delete(e);
  }
};
var yr = !1, _t, Io, Ho, Dn, xn, Ia, Wn, Fo, Bo, _o, Ha, Do, xo, Fa, Ba;
function Ve() {
  if (!yr) {
    yr = !0;
    var e = navigator.userAgent, t = /(?:MSIE.(\d+\.\d+))|(?:(?:Firefox|GranParadiso|Iceweasel).(\d+\.\d+))|(?:Opera(?:.+Version.|.)(\d+\.\d+))|(?:AppleWebKit.(\d+(?:\.\d+)?))|(?:Trident\/\d+\.\d+.*rv:(\d+\.\d+))/.exec(e), n = /(Mac OS X)|(Windows)|(Linux)/.exec(e);
    if (Do = /\b(iPhone|iP[ao]d)/.exec(e), xo = /\b(iP[ao]d)/.exec(e), _o = /Android/i.exec(e), Fa = /FBAN\/\w+;/i.exec(e), Ba = /Mobile/i.exec(e), Ha = !!/Win64/.exec(e), t) {
      _t = t[1] ? parseFloat(t[1]) : t[5] ? parseFloat(t[5]) : NaN, _t && document && document.documentMode && (_t = document.documentMode);
      var o = /(?:Trident\/(\d+.\d+))/.exec(e);
      Ia = o ? parseFloat(o[1]) + 4 : _t, Io = t[2] ? parseFloat(t[2]) : NaN, Ho = t[3] ? parseFloat(t[3]) : NaN, Dn = t[4] ? parseFloat(t[4]) : NaN, Dn ? (t = /(?:Chrome\/(\d+\.\d+))/.exec(e), xn = t && t[1] ? parseFloat(t[1]) : NaN) : xn = NaN;
    } else
      _t = Io = Ho = xn = Dn = NaN;
    if (n) {
      if (n[1]) {
        var l = /(?:Mac OS X (\d+(?:[._]\d+)?))/.exec(e);
        Wn = l ? parseFloat(l[1].replace("_", ".")) : !0;
      } else
        Wn = !1;
      Fo = !!n[2], Bo = !!n[3];
    } else
      Wn = Fo = Bo = !1;
  }
}
var Wo = { ie: function() {
  return Ve() || _t;
}, ieCompatibilityMode: function() {
  return Ve() || Ia > _t;
}, ie64: function() {
  return Wo.ie() && Ha;
}, firefox: function() {
  return Ve() || Io;
}, opera: function() {
  return Ve() || Ho;
}, webkit: function() {
  return Ve() || Dn;
}, safari: function() {
  return Wo.webkit();
}, chrome: function() {
  return Ve() || xn;
}, windows: function() {
  return Ve() || Fo;
}, osx: function() {
  return Ve() || Wn;
}, linux: function() {
  return Ve() || Bo;
}, iphone: function() {
  return Ve() || Do;
}, mobile: function() {
  return Ve() || Do || xo || _o || Ba;
}, nativeApp: function() {
  return Ve() || Fa;
}, android: function() {
  return Ve() || _o;
}, ipad: function() {
  return Ve() || xo;
} }, Dv = Wo, Fn = !!(typeof window < "u" && window.document && window.document.createElement), xv = { canUseDOM: Fn, canUseWorkers: typeof Worker < "u", canUseEventListeners: Fn && !!(window.addEventListener || window.attachEvent), canUseViewport: Fn && !!window.screen, isInWorker: !Fn }, _a = xv, Da;
_a.canUseDOM && (Da = document.implementation && document.implementation.hasFeature && document.implementation.hasFeature("", "") !== !0);
function Wv(e, t) {
  if (!_a.canUseDOM || t && !("addEventListener" in document))
    return !1;
  var n = "on" + e, o = n in document;
  if (!o) {
    var l = document.createElement("div");
    l.setAttribute(n, "return;"), o = typeof l[n] == "function";
  }
  return !o && Da && e === "wheel" && (o = document.implementation.hasFeature("Events.wheel", "3.0")), o;
}
var jv = Wv, wr = 10, Cr = 40, Sr = 800;
function xa(e) {
  var t = 0, n = 0, o = 0, l = 0;
  return "detail" in e && (n = e.detail), "wheelDelta" in e && (n = -e.wheelDelta / 120), "wheelDeltaY" in e && (n = -e.wheelDeltaY / 120), "wheelDeltaX" in e && (t = -e.wheelDeltaX / 120), "axis" in e && e.axis === e.HORIZONTAL_AXIS && (t = n, n = 0), o = t * wr, l = n * wr, "deltaY" in e && (l = e.deltaY), "deltaX" in e && (o = e.deltaX), (o || l) && e.deltaMode && (e.deltaMode == 1 ? (o *= Cr, l *= Cr) : (o *= Sr, l *= Sr)), o && !t && (t = o < 1 ? -1 : 1), l && !n && (n = l < 1 ? -1 : 1), { spinX: t, spinY: n, pixelX: o, pixelY: l };
}
xa.getEventType = function() {
  return Dv.firefox() ? "DOMMouseScroll" : jv("wheel") ? "wheel" : "mousewheel";
};
var Vv = xa;
/**
* Checks if an event is supported in the current execution environment.
*
* NOTE: This will not work correctly for non-generic events such as `change`,
* `reset`, `load`, `error`, and `select`.
*
* Borrows from Modernizr.
*
* @param {string} eventNameSuffix Event name, e.g. "click".
* @param {?boolean} capture Check if the capture phase is supported.
* @return {boolean} True if the event is supported.
* @internal
* @license Modernizr 3.0.0pre (Custom Build) | MIT
*/
const Kv = function(e, t) {
  if (e && e.addEventListener) {
    const n = function(o) {
      const l = Vv(o);
      t && Reflect.apply(t, this, [o, l]);
    };
    e.addEventListener("wheel", n, { passive: !0 });
  }
}, qv = {
  beforeMount(e, t) {
    Kv(e, t.value);
  }
}, Uv = {
  modelValue: {
    type: Array,
    default: () => []
  },
  disabled: Boolean,
  min: {
    type: Number,
    default: void 0
  },
  max: {
    type: Number,
    default: void 0
  },
  size: {
    type: String,
    validator: tl
  },
  id: {
    type: String,
    default: void 0
  },
  label: {
    type: String,
    default: void 0
  },
  fill: {
    type: String,
    default: void 0
  },
  textColor: {
    type: String,
    default: void 0
  },
  tag: {
    type: String,
    default: "div"
  }
}, Wa = {
  modelValue: {
    type: [Number, String, Boolean],
    default: () => {
    }
  },
  label: {
    type: [String, Boolean, Number, Object]
  },
  indeterminate: Boolean,
  disabled: Boolean,
  checked: Boolean,
  name: {
    type: String,
    default: void 0
  },
  trueLabel: {
    type: [String, Number],
    default: void 0
  },
  falseLabel: {
    type: [String, Number],
    default: void 0
  },
  id: {
    type: String,
    default: void 0
  },
  controls: {
    type: String,
    default: void 0
  },
  border: Boolean,
  size: {
    type: String,
    validator: tl
  },
  tabindex: [String, Number]
}, vn = () => {
  const e = ue(Ln, {}), t = ue(ln, {}), n = ue("CheckboxGroup", {}), o = A(() => n && (n == null ? void 0 : n.name) === "ElCheckboxGroup"), l = A(() => t.size);
  return {
    isGroup: o,
    checkboxGroup: n,
    elForm: e,
    elFormItemSize: l,
    elFormItem: t
  };
}, Gv = (e, { elFormItem: t }) => {
  const { inputId: n, isLabeledByFormItem: o } = ll(e, {
    formItemContext: t
  });
  return {
    isLabeledByFormItem: o,
    groupId: n
  };
}, Yv = (e) => {
  const t = T(!1), { emit: n } = be(), { isGroup: o, checkboxGroup: l, elFormItem: a } = vn(), r = T(!1);
  return {
    model: A({
      get() {
        var s, u;
        return o.value ? (s = l.modelValue) == null ? void 0 : s.value : (u = e.modelValue) != null ? u : t.value;
      },
      set(s) {
        var u;
        o.value && Array.isArray(s) ? (r.value = l.max !== void 0 && s.length > l.max.value, r.value === !1 && ((u = l == null ? void 0 : l.changeEvent) == null || u.call(l, s))) : (n(Ie, s), t.value = s);
      }
    }),
    isGroup: o,
    isLimitExceeded: r,
    elFormItem: a
  };
}, Xv = (e, t, { model: n }) => {
  const { isGroup: o, checkboxGroup: l } = vn(), a = T(!1), r = Jt(l == null ? void 0 : l.checkboxGroupSize, { prop: !0 }), i = A(() => {
    const c = n.value;
    return Rr(c) === "[object Boolean]" ? c : Array.isArray(c) ? c.includes(e.label) : c != null ? c === e.trueLabel : !!c;
  }), s = Jt(A(() => {
    var c;
    return o.value ? (c = l == null ? void 0 : l.checkboxGroupSize) == null ? void 0 : c.value : void 0;
  })), u = A(() => !!(t.default || e.label));
  return {
    isChecked: i,
    focus: a,
    size: r,
    checkboxSize: s,
    hasOwnLabel: u
  };
}, Jv = (e, {
  model: t,
  isChecked: n
}) => {
  const { elForm: o, isGroup: l, checkboxGroup: a } = vn(), r = A(() => {
    var s, u;
    const c = (s = a.max) == null ? void 0 : s.value, p = (u = a.min) == null ? void 0 : u.value;
    return !!(c || p) && t.value.length >= c && !n.value || t.value.length <= p && n.value;
  });
  return {
    isDisabled: A(() => {
      var s, u;
      const c = e.disabled || (o == null ? void 0 : o.disabled);
      return (u = l.value ? ((s = a.disabled) == null ? void 0 : s.value) || c || r.value : c) != null ? u : !1;
    }),
    isLimitDisabled: r
  };
}, Qv = (e, { model: t }) => {
  function n() {
    Array.isArray(t.value) && !t.value.includes(e.label) ? t.value.push(e.label) : t.value = e.trueLabel || !0;
  }
  e.checked && n();
}, Zv = (e, {
  model: t,
  isLimitExceeded: n,
  hasOwnLabel: o,
  isDisabled: l,
  isLabeledByFormItem: a
}) => {
  const { elFormItem: r } = vn(), { emit: i } = be();
  function s(f) {
    var m, d;
    return f === e.trueLabel || f === !0 ? (m = e.trueLabel) != null ? m : !0 : (d = e.falseLabel) != null ? d : !1;
  }
  function u(f, m) {
    i("change", s(f), m);
  }
  function c(f) {
    if (n.value)
      return;
    const m = f.target;
    i("change", s(m.checked), f);
  }
  async function p(f) {
    n.value || !o.value && !l.value && a.value && (t.value = s([!1, e.falseLabel].includes(t.value)), await he(), u(t.value, f));
  }
  return J(() => e.modelValue, () => {
    var f;
    (f = r == null ? void 0 : r.validate) == null || f.call(r, "change").catch((m) => Le(m));
  }), {
    handleChange: c,
    onClickRoot: p
  };
}, ja = (e, t) => {
  const { model: n, isGroup: o, isLimitExceeded: l, elFormItem: a } = Yv(e), { focus: r, size: i, isChecked: s, checkboxSize: u, hasOwnLabel: c } = Xv(e, t, {
    model: n
  }), { isDisabled: p } = Jv(e, { model: n, isChecked: s }), { inputId: f, isLabeledByFormItem: m } = ll(e, {
    formItemContext: a,
    disableIdGeneration: c,
    disableIdManagement: o
  }), { handleChange: d, onClickRoot: g } = Zv(e, {
    model: n,
    isLimitExceeded: l,
    hasOwnLabel: c,
    isDisabled: p,
    isLabeledByFormItem: m
  });
  return Qv(e, { model: n }), {
    elFormItem: a,
    inputId: f,
    isLabeledByFormItem: m,
    isChecked: s,
    isDisabled: p,
    isGroup: o,
    checkboxSize: u,
    hasOwnLabel: c,
    model: n,
    handleChange: d,
    onClickRoot: g,
    focus: r,
    size: i
  };
}, eg = G({
  name: "ElCheckbox",
  props: Wa,
  emits: [Ie, "change"],
  setup(e, { slots: t }) {
    return {
      ns: ce("checkbox"),
      ...ja(e, t)
    };
  }
}), tg = ["tabindex", "role", "aria-checked"], ng = ["id", "aria-hidden", "name", "tabindex", "disabled", "true-value", "false-value"], og = ["id", "aria-hidden", "disabled", "value", "name", "tabindex"];
function lg(e, t, n, o, l, a) {
  return P(), Y(Lt(!e.hasOwnLabel && e.isLabeledByFormItem ? "span" : "label"), {
    class: M([
      e.ns.b(),
      e.ns.m(e.checkboxSize),
      e.ns.is("disabled", e.isDisabled),
      e.ns.is("bordered", e.border),
      e.ns.is("checked", e.isChecked)
    ]),
    "aria-controls": e.indeterminate ? e.controls : null,
    onClick: e.onClickRoot
  }, {
    default: X(() => [
      V("span", {
        class: M([
          e.ns.e("input"),
          e.ns.is("disabled", e.isDisabled),
          e.ns.is("checked", e.isChecked),
          e.ns.is("indeterminate", e.indeterminate),
          e.ns.is("focus", e.focus)
        ]),
        tabindex: e.indeterminate ? 0 : void 0,
        role: e.indeterminate ? "checkbox" : void 0,
        "aria-checked": e.indeterminate ? "mixed" : void 0
      }, [
        V("span", {
          class: M(e.ns.e("inner"))
        }, null, 2),
        e.trueLabel || e.falseLabel ? ke((P(), I("input", {
          key: 0,
          id: e.inputId,
          "onUpdate:modelValue": t[0] || (t[0] = (r) => e.model = r),
          class: M(e.ns.e("original")),
          type: "checkbox",
          "aria-hidden": e.indeterminate ? "true" : "false",
          name: e.name,
          tabindex: e.tabindex,
          disabled: e.isDisabled,
          "true-value": e.trueLabel,
          "false-value": e.falseLabel,
          onChange: t[1] || (t[1] = (...r) => e.handleChange && e.handleChange(...r)),
          onFocus: t[2] || (t[2] = (r) => e.focus = !0),
          onBlur: t[3] || (t[3] = (r) => e.focus = !1)
        }, null, 42, ng)), [
          [Kn, e.model]
        ]) : ke((P(), I("input", {
          key: 1,
          id: e.inputId,
          "onUpdate:modelValue": t[4] || (t[4] = (r) => e.model = r),
          class: M(e.ns.e("original")),
          type: "checkbox",
          "aria-hidden": e.indeterminate ? "true" : "false",
          disabled: e.isDisabled,
          value: e.label,
          name: e.name,
          tabindex: e.tabindex,
          onChange: t[5] || (t[5] = (...r) => e.handleChange && e.handleChange(...r)),
          onFocus: t[6] || (t[6] = (r) => e.focus = !0),
          onBlur: t[7] || (t[7] = (r) => e.focus = !1)
        }, null, 42, og)), [
          [Kn, e.model]
        ])
      ], 10, tg),
      e.hasOwnLabel ? (P(), I("span", {
        key: 0,
        class: M(e.ns.e("label"))
      }, [
        pe(e.$slots, "default"),
        e.$slots.default ? q("v-if", !0) : (P(), I(He, { key: 0 }, [
          Kt(ve(e.label), 1)
        ], 2112))
      ], 2)) : q("v-if", !0)
    ]),
    _: 3
  }, 8, ["class", "aria-controls", "onClick"]);
}
var rg = /* @__PURE__ */ ge(eg, [["render", lg], ["__file", "/home/runner/work/element-plus/element-plus/packages/components/checkbox/src/checkbox.vue"]]);
const ag = G({
  name: "ElCheckboxButton",
  props: Wa,
  emits: [Ie, "change"],
  setup(e, { slots: t }) {
    const { focus: n, isChecked: o, isDisabled: l, size: a, model: r, handleChange: i } = ja(e, t), { checkboxGroup: s } = vn(), u = ce("checkbox"), c = A(() => {
      var p, f, m, d;
      const g = (f = (p = s == null ? void 0 : s.fill) == null ? void 0 : p.value) != null ? f : "";
      return {
        backgroundColor: g,
        borderColor: g,
        color: (d = (m = s == null ? void 0 : s.textColor) == null ? void 0 : m.value) != null ? d : "",
        boxShadow: g ? `-1px 0 0 0 ${g}` : null
      };
    });
    return {
      focus: n,
      isChecked: o,
      isDisabled: l,
      model: r,
      handleChange: i,
      activeStyle: c,
      size: a,
      ns: u
    };
  }
}), sg = ["name", "tabindex", "disabled", "true-value", "false-value"], ig = ["name", "tabindex", "disabled", "value"];
function ug(e, t, n, o, l, a) {
  return P(), I("label", {
    class: M([
      e.ns.b("button"),
      e.ns.bm("button", e.size),
      e.ns.is("disabled", e.isDisabled),
      e.ns.is("checked", e.isChecked),
      e.ns.is("focus", e.focus)
    ])
  }, [
    e.trueLabel || e.falseLabel ? ke((P(), I("input", {
      key: 0,
      "onUpdate:modelValue": t[0] || (t[0] = (r) => e.model = r),
      class: M(e.ns.be("button", "original")),
      type: "checkbox",
      name: e.name,
      tabindex: e.tabindex,
      disabled: e.isDisabled,
      "true-value": e.trueLabel,
      "false-value": e.falseLabel,
      onChange: t[1] || (t[1] = (...r) => e.handleChange && e.handleChange(...r)),
      onFocus: t[2] || (t[2] = (r) => e.focus = !0),
      onBlur: t[3] || (t[3] = (r) => e.focus = !1)
    }, null, 42, sg)), [
      [Kn, e.model]
    ]) : ke((P(), I("input", {
      key: 1,
      "onUpdate:modelValue": t[4] || (t[4] = (r) => e.model = r),
      class: M(e.ns.be("button", "original")),
      type: "checkbox",
      name: e.name,
      tabindex: e.tabindex,
      disabled: e.isDisabled,
      value: e.label,
      onChange: t[5] || (t[5] = (...r) => e.handleChange && e.handleChange(...r)),
      onFocus: t[6] || (t[6] = (r) => e.focus = !0),
      onBlur: t[7] || (t[7] = (r) => e.focus = !1)
    }, null, 42, ig)), [
      [Kn, e.model]
    ]),
    e.$slots.default || e.label ? (P(), I("span", {
      key: 2,
      class: M(e.ns.be("button", "inner")),
      style: Ee(e.isChecked ? e.activeStyle : null)
    }, [
      pe(e.$slots, "default", {}, () => [
        Kt(ve(e.label), 1)
      ])
    ], 6)) : q("v-if", !0)
  ], 2);
}
var Va = /* @__PURE__ */ ge(ag, [["render", ug], ["__file", "/home/runner/work/element-plus/element-plus/packages/components/checkbox/src/checkbox-button.vue"]]);
const cg = G({
  name: "ElCheckboxGroup",
  props: Uv,
  emits: [Ie, "change"],
  setup(e, { emit: t, slots: n }) {
    const { elFormItem: o } = vn(), { groupId: l, isLabeledByFormItem: a } = Gv(e, {
      elFormItem: o
    }), r = Jt(), i = ce("checkbox"), s = (c) => {
      t(Ie, c), he(() => {
        t("change", c);
      });
    }, u = A({
      get() {
        return e.modelValue;
      },
      set(c) {
        s(c);
      }
    });
    return tt("CheckboxGroup", {
      name: "ElCheckboxGroup",
      modelValue: u,
      ...An(e),
      checkboxGroupSize: r,
      changeEvent: s
    }), J(() => e.modelValue, () => {
      var c;
      (c = o.validate) == null || c.call(o, "change").catch((p) => Le(p));
    }), () => Z(e.tag, {
      id: l.value,
      class: i.b("group"),
      role: "group",
      "aria-label": a.value ? void 0 : e.label || "checkbox-group",
      "aria-labelledby": a.value ? o.labelId : void 0
    }, [pe(n, "default")]);
  }
});
var Ka = /* @__PURE__ */ ge(cg, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/checkbox/src/checkbox-group.vue"]]);
const dn = ct(rg, {
  CheckboxButton: Va,
  CheckboxGroup: Ka
});
kn(Va);
kn(Ka);
const qa = Me({
  closable: Boolean,
  type: {
    type: String,
    values: ["success", "info", "warning", "danger", ""],
    default: ""
  },
  hit: Boolean,
  disableTransitions: Boolean,
  color: {
    type: String,
    default: ""
  },
  size: {
    type: String,
    values: ao,
    default: ""
  },
  effect: {
    type: String,
    values: ["dark", "light", "plain"],
    default: "light"
  },
  round: Boolean
}), dg = {
  close: (e) => e instanceof MouseEvent,
  click: (e) => e instanceof MouseEvent
}, fg = {
  name: "ElTag"
}, pg = /* @__PURE__ */ G({
  ...fg,
  props: qa,
  emits: dg,
  setup(e, { emit: t }) {
    const n = e, o = Jt(), l = ce("tag"), a = A(() => {
      const { type: s, hit: u, effect: c, closable: p, round: f } = n;
      return [
        l.b(),
        l.is("closable", p),
        l.m(s),
        l.m(o.value),
        l.m(c),
        l.is("hit", u),
        l.is("round", f)
      ];
    }), r = (s) => {
      s.stopPropagation(), t("close", s);
    }, i = (s) => {
      t("click", s);
    };
    return (s, u) => s.disableTransitions ? (P(), Y(eo, {
      key: 1,
      name: `${O(l).namespace.value}-zoom-in-center`
    }, {
      default: X(() => [
        V("span", {
          class: M(O(a)),
          style: Ee({ backgroundColor: s.color }),
          onClick: i
        }, [
          V("span", {
            class: M(O(l).e("content"))
          }, [
            pe(s.$slots, "default")
          ], 2),
          s.closable ? (P(), Y(O(Ye), {
            key: 0,
            class: M(O(l).e("close")),
            onClick: r
          }, {
            default: X(() => [
              me(O(Zl))
            ]),
            _: 1
          }, 8, ["class"])) : q("v-if", !0)
        ], 6)
      ]),
      _: 3
    }, 8, ["name"])) : (P(), I("span", {
      key: 0,
      class: M(O(a)),
      style: Ee({ backgroundColor: s.color }),
      onClick: i
    }, [
      V("span", {
        class: M(O(l).e("content"))
      }, [
        pe(s.$slots, "default")
      ], 2),
      s.closable ? (P(), Y(O(Ye), {
        key: 0,
        class: M(O(l).e("close")),
        onClick: r
      }, {
        default: X(() => [
          me(O(Zl))
        ]),
        _: 1
      }, 8, ["class"])) : q("v-if", !0)
    ], 6));
  }
});
var hg = /* @__PURE__ */ ge(pg, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/tag/src/tag.vue"]]);
const vg = ct(hg), gg = {}, mg = Me({
  a11y: {
    type: Boolean,
    default: !0
  },
  locale: {
    type: we(Object)
  },
  size: {
    type: String,
    values: ao,
    default: ""
  },
  button: {
    type: we(Object)
  },
  experimentalFeatures: {
    type: we(Object)
  },
  keyboardNavigation: {
    type: Boolean,
    default: !0
  },
  message: {
    type: we(Object)
  },
  zIndex: {
    type: Number
  },
  namespace: {
    type: String,
    default: "el"
  }
});
var bg = G({
  name: "ElConfigProvider",
  props: mg,
  setup(e, { slots: t }) {
    J(() => e.message, (o) => {
      Object.assign(gg, o != null ? o : {});
    }, { immediate: !0, deep: !0 });
    const n = Zf(e);
    return () => pe(t, "default", { config: n == null ? void 0 : n.value });
  }
});
const yg = ct(bg), wg = {
  disabled: Boolean,
  currentPage: {
    type: Number,
    default: 1
  },
  prevText: {
    type: String,
    default: ""
  }
}, Cg = G({
  name: "ElPaginationPrev",
  components: {
    ElIcon: Ye,
    ArrowLeft: Rd
  },
  props: wg,
  emits: ["click"],
  setup(e) {
    return {
      internalDisabled: A(() => e.disabled || e.currentPage <= 1)
    };
  }
}), Sg = ["disabled", "aria-disabled"], $g = { key: 0 };
function Eg(e, t, n, o, l, a) {
  const r = ae("arrow-left"), i = ae("el-icon");
  return P(), I("button", {
    type: "button",
    class: "btn-prev",
    disabled: e.internalDisabled,
    "aria-disabled": e.internalDisabled,
    onClick: t[0] || (t[0] = (s) => e.$emit("click", s))
  }, [
    e.prevText ? (P(), I("span", $g, ve(e.prevText), 1)) : (P(), Y(i, { key: 1 }, {
      default: X(() => [
        me(r)
      ]),
      _: 1
    }))
  ], 8, Sg);
}
var Og = /* @__PURE__ */ ge(Cg, [["render", Eg], ["__file", "/home/runner/work/element-plus/element-plus/packages/components/pagination/src/components/prev.vue"]]);
const Tg = {
  disabled: Boolean,
  currentPage: {
    type: Number,
    default: 1
  },
  pageCount: {
    type: Number,
    default: 50
  },
  nextText: {
    type: String,
    default: ""
  }
}, Pg = G({
  name: "ElPaginationNext",
  components: {
    ElIcon: Ye,
    ArrowRight: Zo
  },
  props: Tg,
  emits: ["click"],
  setup(e) {
    return {
      internalDisabled: A(() => e.disabled || e.currentPage === e.pageCount || e.pageCount === 0)
    };
  }
}), Ag = ["disabled", "aria-disabled"], kg = { key: 0 };
function Lg(e, t, n, o, l, a) {
  const r = ae("arrow-right"), i = ae("el-icon");
  return P(), I("button", {
    type: "button",
    class: "btn-next",
    disabled: e.internalDisabled,
    "aria-disabled": e.internalDisabled,
    onClick: t[0] || (t[0] = (s) => e.$emit("click", s))
  }, [
    e.nextText ? (P(), I("span", kg, ve(e.nextText), 1)) : (P(), Y(i, { key: 1 }, {
      default: X(() => [
        me(r)
      ]),
      _: 1
    }))
  ], 8, Ag);
}
var Ng = /* @__PURE__ */ ge(Pg, [["render", Lg], ["__file", "/home/runner/work/element-plus/element-plus/packages/components/pagination/src/components/next.vue"]]);
const Ua = "ElSelectGroup", io = "ElSelect";
function zg(e, t) {
  const n = ue(io), o = ue(Ua, { disabled: !1 }), l = A(() => Object.prototype.toString.call(e.value).toLowerCase() === "[object object]"), a = A(() => n.props.multiple ? p(n.props.modelValue, e.value) : f(e.value, n.props.modelValue)), r = A(() => {
    if (n.props.multiple) {
      const g = n.props.modelValue || [];
      return !a.value && g.length >= n.props.multipleLimit && n.props.multipleLimit > 0;
    } else
      return !1;
  }), i = A(() => e.label || (l.value ? "" : e.value)), s = A(() => e.value || e.label || ""), u = A(() => e.disabled || t.groupDisabled || r.value), c = be(), p = (g = [], b) => {
    if (l.value) {
      const S = n.props.valueKey;
      return g && g.some((y) => xe(y, S) === xe(b, S));
    } else
      return g && g.includes(b);
  }, f = (g, b) => {
    if (l.value) {
      const { valueKey: S } = n.props;
      return xe(g, S) === xe(b, S);
    } else
      return g === b;
  }, m = () => {
    !e.disabled && !o.disabled && (n.hoverIndex = n.optionsArray.indexOf(c.proxy));
  };
  J(() => i.value, () => {
    !e.created && !n.props.remote && n.setSelected();
  }), J(() => e.value, (g, b) => {
    const { remote: S, valueKey: y } = n.props;
    if (!e.created && !S) {
      if (y && typeof g == "object" && typeof b == "object" && g[y] === b[y])
        return;
      n.setSelected();
    }
  }), J(() => o.disabled, () => {
    t.groupDisabled = o.disabled;
  }, { immediate: !0 });
  const { queryChange: d } = zr(n);
  return J(d, (g) => {
    const { query: b } = O(g), S = new RegExp(bd(b), "i");
    t.visible = S.test(i.value) || e.created, t.visible || n.filteredOptionsCount--;
  }), {
    select: n,
    currentLabel: i,
    currentValue: s,
    itemSelected: a,
    isDisabled: u,
    hoverItem: m
  };
}
const Mg = G({
  name: "ElOption",
  componentName: "ElOption",
  props: {
    value: {
      required: !0,
      type: [String, Number, Boolean, Object]
    },
    label: [String, Number],
    created: Boolean,
    disabled: {
      type: Boolean,
      default: !1
    }
  },
  setup(e) {
    const t = ce("select"), n = pn({
      index: -1,
      groupDisabled: !1,
      visible: !0,
      hitState: !1,
      hover: !1
    }), { currentLabel: o, itemSelected: l, isDisabled: a, select: r, hoverItem: i } = zg(e, n), { visible: s, hover: u } = An(n), c = be().proxy, p = c.value;
    r.onOptionCreate(c), Ot(() => {
      const { selected: m } = r, g = (r.props.multiple ? m : [m]).some((b) => b.value === c.value);
      r.cachedOptions.get(p) === c && !g && he(() => {
        r.cachedOptions.delete(p);
      }), r.onOptionDestroy(p, c);
    });
    function f() {
      e.disabled !== !0 && n.groupDisabled !== !0 && r.handleOptionSelect(c, !0);
    }
    return {
      ns: t,
      currentLabel: o,
      itemSelected: l,
      isDisabled: a,
      select: r,
      hoverItem: i,
      visible: s,
      hover: u,
      selectOptionClick: f,
      states: n
    };
  }
});
function Rg(e, t, n, o, l, a) {
  return ke((P(), I("li", {
    class: M([
      e.ns.be("dropdown", "item"),
      e.ns.is("disabled", e.isDisabled),
      {
        selected: e.itemSelected,
        hover: e.hover
      }
    ]),
    onMouseenter: t[0] || (t[0] = (...r) => e.hoverItem && e.hoverItem(...r)),
    onClick: t[1] || (t[1] = it((...r) => e.selectOptionClick && e.selectOptionClick(...r), ["stop"]))
  }, [
    pe(e.$slots, "default", {}, () => [
      V("span", null, ve(e.currentLabel), 1)
    ])
  ], 34)), [
    [Mt, e.visible]
  ]);
}
var ml = /* @__PURE__ */ ge(Mg, [["render", Rg], ["__file", "/home/runner/work/element-plus/element-plus/packages/components/select/src/option.vue"]]);
const Ig = G({
  name: "ElSelectDropdown",
  componentName: "ElSelectDropdown",
  setup() {
    const e = ue(io), t = ce("select"), n = A(() => e.props.popperClass), o = A(() => e.props.multiple), l = A(() => e.props.fitInputWidth), a = T("");
    function r() {
      var i;
      a.value = `${(i = e.selectWrapper) == null ? void 0 : i.getBoundingClientRect().width}px`;
    }
    return Ue(() => {
      r(), Jo(e.selectWrapper, r);
    }), Ot(() => {
      Qo(e.selectWrapper, r);
    }), {
      ns: t,
      minWidth: a,
      popperClass: n,
      isMultiple: o,
      isFitInputWidth: l
    };
  }
});
function Hg(e, t, n, o, l, a) {
  return P(), I("div", {
    class: M([e.ns.b("dropdown"), e.ns.is("multiple", e.isMultiple), e.popperClass]),
    style: Ee({ [e.isFitInputWidth ? "width" : "minWidth"]: e.minWidth })
  }, [
    pe(e.$slots, "default")
  ], 6);
}
var Fg = /* @__PURE__ */ ge(Ig, [["render", Hg], ["__file", "/home/runner/work/element-plus/element-plus/packages/components/select/src/select-dropdown.vue"]]);
function Bg(e) {
  const { t } = At();
  return pn({
    options: /* @__PURE__ */ new Map(),
    cachedOptions: /* @__PURE__ */ new Map(),
    createdLabel: null,
    createdSelected: !1,
    selected: e.multiple ? [] : {},
    inputLength: 20,
    inputWidth: 0,
    initialInputHeight: 0,
    optionsCount: 0,
    filteredOptionsCount: 0,
    visible: !1,
    softFocus: !1,
    selectedLabel: "",
    hoverIndex: -1,
    query: "",
    previousQuery: null,
    inputHovering: !1,
    cachedPlaceHolder: "",
    currentPlaceholder: t("el.select.placeholder"),
    menuVisibleOnFocus: !1,
    isOnComposition: !1,
    isSilentBlur: !1,
    prefixWidth: 11,
    tagInMultiLine: !1
  });
}
const _g = (e, t, n) => {
  const { t: o } = At(), l = ce("select"), a = T(null), r = T(null), i = T(null), s = T(null), u = T(null), c = T(null), p = T(-1), f = yn({ query: "" }), m = yn(""), d = ue(Ln, {}), g = ue(ln, {}), b = A(() => !e.filterable || e.multiple || !t.visible), S = A(() => e.disabled || d.disabled), y = A(() => {
    const E = e.multiple ? Array.isArray(e.modelValue) && e.modelValue.length > 0 : e.modelValue !== void 0 && e.modelValue !== null && e.modelValue !== "";
    return e.clearable && !S.value && t.inputHovering && E;
  }), v = A(() => e.remote && e.filterable ? "" : e.suffixIcon), h = A(() => l.is("reverse", v.value && t.visible)), $ = A(() => e.remote ? 300 : 0), w = A(() => e.loading ? e.loadingText || o("el.select.loading") : e.remote && t.query === "" && t.options.size === 0 ? !1 : e.filterable && t.query && t.options.size > 0 && t.filteredOptionsCount === 0 ? e.noMatchText || o("el.select.noMatch") : t.options.size === 0 ? e.noDataText || o("el.select.noData") : null), C = A(() => Array.from(t.options.values())), N = A(() => Array.from(t.cachedOptions.values())), H = A(() => {
    const E = C.value.filter((L) => !L.created).some((L) => L.currentLabel === t.query);
    return e.filterable && e.allowCreate && t.query !== "" && !E;
  }), _ = Jt(), B = A(() => ["small"].includes(_.value) ? "small" : "default"), D = A({
    get() {
      return t.visible && w.value !== !1;
    },
    set(E) {
      t.visible = E;
    }
  });
  J([() => S.value, () => _.value, () => d.size], () => {
    he(() => {
      W();
    });
  }), J(() => e.placeholder, (E) => {
    t.cachedPlaceHolder = t.currentPlaceholder = E;
  }), J(() => e.modelValue, (E, L) => {
    var R;
    e.multiple && (W(), E && E.length > 0 || r.value && t.query !== "" ? t.currentPlaceholder = "" : t.currentPlaceholder = t.cachedPlaceHolder, e.filterable && !e.reserveKeyword && (t.query = "", K(t.query))), U(), e.filterable && !e.multiple && (t.inputLength = 20), To(E, L) || (R = g.validate) == null || R.call(g, "change").catch((x) => Le(x));
  }, {
    flush: "post",
    deep: !0
  }), J(() => t.visible, (E) => {
    var L, R, x;
    E ? ((R = (L = i.value) == null ? void 0 : L.updatePopper) == null || R.call(L), e.filterable && (t.filteredOptionsCount = t.optionsCount, t.query = e.remote ? "" : t.selectedLabel, e.multiple ? (x = r.value) == null || x.focus() : t.selectedLabel && (t.currentPlaceholder = `${t.selectedLabel}`, t.selectedLabel = ""), K(t.query), !e.multiple && !e.remote && (f.value.query = "", gn(f), gn(m)))) : (r.value && r.value.blur(), t.query = "", t.previousQuery = null, t.selectedLabel = "", t.inputLength = 20, t.menuVisibleOnFocus = !1, F(), he(() => {
      r.value && r.value.value === "" && t.selected.length === 0 && (t.currentPlaceholder = t.cachedPlaceHolder);
    }), e.multiple || (t.selected && (e.filterable && e.allowCreate && t.createdSelected && t.createdLabel ? t.selectedLabel = t.createdLabel : t.selectedLabel = t.selected.currentLabel, e.filterable && (t.query = t.selectedLabel)), e.filterable && (t.currentPlaceholder = t.cachedPlaceHolder))), n.emit("visible-change", E);
  }), J(() => t.options.entries(), () => {
    var E, L, R;
    if (!Oe)
      return;
    (L = (E = i.value) == null ? void 0 : E.updatePopper) == null || L.call(E), e.multiple && W();
    const x = ((R = u.value) == null ? void 0 : R.querySelectorAll("input")) || [];
    Array.from(x).includes(document.activeElement) || U(), e.defaultFirstOption && (e.filterable || e.remote) && t.filteredOptionsCount && oe();
  }, {
    flush: "post"
  }), J(() => t.hoverIndex, (E) => {
    typeof E == "number" && E > -1 && (p.value = C.value[E] || {}), C.value.forEach((L) => {
      L.hover = p.value === L;
    });
  });
  const W = () => {
    e.collapseTags && !e.filterable || he(() => {
      var E, L;
      if (!a.value)
        return;
      const R = a.value.$el.querySelector("input"), x = s.value, ie = t.initialInputHeight || Gf(_.value || d.size);
      R.style.height = t.selected.length === 0 ? `${ie}px` : `${Math.max(x ? x.clientHeight + (x.clientHeight > ie ? 6 : 0) : 0, ie)}px`, t.tagInMultiLine = Number.parseFloat(R.style.height) >= ie, t.visible && w.value !== !1 && ((L = (E = i.value) == null ? void 0 : E.updatePopper) == null || L.call(E));
    });
  }, K = (E) => {
    if (!(t.previousQuery === E || t.isOnComposition)) {
      if (t.previousQuery === null && (typeof e.filterMethod == "function" || typeof e.remoteMethod == "function")) {
        t.previousQuery = E;
        return;
      }
      t.previousQuery = E, he(() => {
        var L, R;
        t.visible && ((R = (L = i.value) == null ? void 0 : L.updatePopper) == null || R.call(L));
      }), t.hoverIndex = -1, e.multiple && e.filterable && he(() => {
        const L = r.value.value.length * 15 + 20;
        t.inputLength = e.collapseTags ? Math.min(50, L) : L, ne(), W();
      }), e.remote && typeof e.remoteMethod == "function" ? (t.hoverIndex = -1, e.remoteMethod(E)) : typeof e.filterMethod == "function" ? (e.filterMethod(E), gn(m)) : (t.filteredOptionsCount = t.optionsCount, f.value.query = E, gn(f), gn(m)), e.defaultFirstOption && (e.filterable || e.remote) && t.filteredOptionsCount && oe();
    }
  }, ne = () => {
    t.currentPlaceholder !== "" && (t.currentPlaceholder = r.value.value ? "" : t.cachedPlaceHolder);
  }, oe = () => {
    const E = C.value.filter((x) => x.visible && !x.disabled && !x.states.groupDisabled), L = E.find((x) => x.created), R = E[0];
    t.hoverIndex = lt(C.value, L || R);
  }, U = () => {
    var E;
    if (e.multiple)
      t.selectedLabel = "";
    else {
      const R = k(e.modelValue);
      (E = R.props) != null && E.created ? (t.createdLabel = R.props.value, t.createdSelected = !0) : t.createdSelected = !1, t.selectedLabel = R.currentLabel, t.selected = R, e.filterable && (t.query = t.selectedLabel);
      return;
    }
    const L = [];
    Array.isArray(e.modelValue) && e.modelValue.forEach((R) => {
      L.push(k(R));
    }), t.selected = L, he(() => {
      W();
    });
  }, k = (E) => {
    let L;
    const R = co(E).toLowerCase() === "object", x = co(E).toLowerCase() === "null", ie = co(E).toLowerCase() === "undefined";
    for (let Pe = t.cachedOptions.size - 1; Pe >= 0; Pe--) {
      const je = N.value[Pe];
      if (R ? xe(je.value, e.valueKey) === xe(E, e.valueKey) : je.value === E) {
        L = {
          value: E,
          currentLabel: je.currentLabel,
          isDisabled: je.isDisabled
        };
        break;
      }
    }
    if (L)
      return L;
    const $e = R ? E.label : !x && !ie ? E : "", _e = {
      value: E,
      currentLabel: $e
    };
    return e.multiple && (_e.hitState = !1), _e;
  }, F = () => {
    setTimeout(() => {
      const E = e.valueKey;
      e.multiple ? t.selected.length > 0 ? t.hoverIndex = Math.min.apply(null, t.selected.map((L) => C.value.findIndex((R) => xe(R, E) === xe(L, E)))) : t.hoverIndex = -1 : t.hoverIndex = C.value.findIndex((L) => Te(L) === Te(t.selected));
    }, 300);
  }, Q = () => {
    var E, L;
    ee(), (L = (E = i.value) == null ? void 0 : E.updatePopper) == null || L.call(E), e.multiple && !e.filterable && W();
  }, ee = () => {
    var E;
    t.inputWidth = (E = a.value) == null ? void 0 : E.$el.getBoundingClientRect().width;
  }, se = () => {
    e.filterable && t.query !== t.selectedLabel && (t.query = t.selectedLabel, K(t.query));
  }, le = on(() => {
    se();
  }, $.value), de = on((E) => {
    K(E.target.value);
  }, $.value), re = (E) => {
    To(e.modelValue, E) || n.emit(oa, E);
  }, Se = (E) => {
    if (E.target.value.length <= 0 && !Be()) {
      const L = e.modelValue.slice();
      L.pop(), n.emit(Ie, L), re(L);
    }
    E.target.value.length === 1 && e.modelValue.length === 0 && (t.currentPlaceholder = t.cachedPlaceHolder);
  }, fe = (E, L) => {
    const R = t.selected.indexOf(L);
    if (R > -1 && !S.value) {
      const x = e.modelValue.slice();
      x.splice(R, 1), n.emit(Ie, x), re(x), n.emit("remove-tag", L.value);
    }
    E.stopPropagation();
  }, Ce = (E) => {
    E.stopPropagation();
    const L = e.multiple ? [] : "";
    if (typeof L != "string")
      for (const R of t.selected)
        R.isDisabled && L.push(R.value);
    n.emit(Ie, L), re(L), t.visible = !1, n.emit("clear");
  }, We = (E, L) => {
    var R;
    if (e.multiple) {
      const x = (e.modelValue || []).slice(), ie = lt(x, E.value);
      ie > -1 ? x.splice(ie, 1) : (e.multipleLimit <= 0 || x.length < e.multipleLimit) && x.push(E.value), n.emit(Ie, x), re(x), E.created && (t.query = "", K(""), t.inputLength = 20), e.filterable && ((R = r.value) == null || R.focus());
    } else
      n.emit(Ie, E.value), re(E.value), t.visible = !1;
    t.isSilentBlur = L, Fe(), !t.visible && he(() => {
      Ge(E);
    });
  }, lt = (E = [], L) => {
    if (!Rt(L))
      return E.indexOf(L);
    const R = e.valueKey;
    let x = -1;
    return E.some((ie, $e) => xe(ie, R) === xe(L, R) ? (x = $e, !0) : !1), x;
  }, Fe = () => {
    t.softFocus = !0;
    const E = r.value || a.value;
    E && (E == null || E.focus());
  }, Ge = (E) => {
    var L, R, x, ie, $e;
    const _e = Array.isArray(E) ? E[0] : E;
    let Pe = null;
    if (_e != null && _e.value) {
      const je = C.value.filter((Ne) => Ne.value === _e.value);
      je.length > 0 && (Pe = je[0].$el);
    }
    if (i.value && Pe) {
      const je = (ie = (x = (R = (L = i.value) == null ? void 0 : L.popperRef) == null ? void 0 : R.contentRef) == null ? void 0 : x.querySelector) == null ? void 0 : ie.call(x, `.${l.be("dropdown", "wrap")}`);
      je && Sd(je, Pe);
    }
    ($e = c.value) == null || $e.handleScroll();
  }, rt = (E) => {
    t.optionsCount++, t.filteredOptionsCount++, t.options.set(E.value, E), t.cachedOptions.set(E.value, E);
  }, ft = (E, L) => {
    t.options.get(E) === L && (t.optionsCount--, t.filteredOptionsCount--, t.options.delete(E));
  }, yt = (E) => {
    E.code !== Yn.backspace && Be(!1), t.inputLength = r.value.value.length * 15 + 20, W();
  }, Be = (E) => {
    if (!Array.isArray(t.selected))
      return;
    const L = t.selected[t.selected.length - 1];
    if (!!L)
      return E === !0 || E === !1 ? (L.hitState = E, E) : (L.hitState = !L.hitState, L.hitState);
  }, Je = (E) => {
    const L = E.target.value;
    if (E.type === "compositionend")
      t.isOnComposition = !1, he(() => K(L));
    else {
      const R = L[L.length - 1] || "";
      t.isOnComposition = !la(R);
    }
  }, wt = () => {
    he(() => Ge(t.selected));
  }, pt = (E) => {
    t.softFocus ? t.softFocus = !1 : ((e.automaticDropdown || e.filterable) && (e.filterable && !t.visible && (t.menuVisibleOnFocus = !0), t.visible = !0), n.emit("focus", E));
  }, Re = () => {
    var E;
    t.visible = !1, (E = a.value) == null || E.blur();
  }, Qe = (E) => {
    he(() => {
      t.isSilentBlur ? t.isSilentBlur = !1 : n.emit("blur", E);
    }), t.softFocus = !1;
  }, at = (E) => {
    Ce(E);
  }, z = () => {
    t.visible = !1;
  }, te = () => {
    var E;
    e.automaticDropdown || S.value || (t.menuVisibleOnFocus ? t.menuVisibleOnFocus = !1 : t.visible = !t.visible, t.visible && ((E = r.value || a.value) == null || E.focus()));
  }, Ae = () => {
    t.visible ? C.value[t.hoverIndex] && We(C.value[t.hoverIndex], void 0) : te();
  }, Te = (E) => Rt(E.value) ? xe(E.value, e.valueKey) : E.value, ht = A(() => C.value.filter((E) => E.visible).every((E) => E.disabled)), j = (E) => {
    if (!t.visible) {
      t.visible = !0;
      return;
    }
    if (!(t.options.size === 0 || t.filteredOptionsCount === 0) && !t.isOnComposition && !ht.value) {
      E === "next" ? (t.hoverIndex++, t.hoverIndex === t.options.size && (t.hoverIndex = 0)) : E === "prev" && (t.hoverIndex--, t.hoverIndex < 0 && (t.hoverIndex = t.options.size - 1));
      const L = C.value[t.hoverIndex];
      (L.disabled === !0 || L.states.groupDisabled === !0 || !L.visible) && j(E), he(() => Ge(p.value));
    }
  };
  return {
    optionsArray: C,
    selectSize: _,
    handleResize: Q,
    debouncedOnInputChange: le,
    debouncedQueryChange: de,
    deletePrevTag: Se,
    deleteTag: fe,
    deleteSelected: Ce,
    handleOptionSelect: We,
    scrollToOption: Ge,
    readonly: b,
    resetInputHeight: W,
    showClose: y,
    iconComponent: v,
    iconReverse: h,
    showNewOption: H,
    collapseTagSize: B,
    setSelected: U,
    managePlaceholder: ne,
    selectDisabled: S,
    emptyText: w,
    toggleLastOptionHitState: Be,
    resetInputState: yt,
    handleComposition: Je,
    onOptionCreate: rt,
    onOptionDestroy: ft,
    handleMenuEnter: wt,
    handleFocus: pt,
    blur: Re,
    handleBlur: Qe,
    handleClearClick: at,
    handleClose: z,
    toggleMenu: te,
    selectOption: Ae,
    getValueKey: Te,
    navigateOptions: j,
    dropMenuVisible: D,
    queryChange: f,
    groupQueryChange: m,
    reference: a,
    input: r,
    tooltipRef: i,
    tags: s,
    selectWrapper: u,
    scrollbar: c
  };
}, $r = "ElSelect", Dg = G({
  name: $r,
  componentName: $r,
  components: {
    ElInput: va,
    ElSelectMenu: Fg,
    ElOption: ml,
    ElTag: vg,
    ElScrollbar: rl,
    ElTooltip: Ma,
    ElIcon: Ye
  },
  directives: { ClickOutside: Ra },
  props: {
    name: String,
    id: String,
    modelValue: {
      type: [Array, String, Number, Boolean, Object],
      default: void 0
    },
    autocomplete: {
      type: String,
      default: "off"
    },
    automaticDropdown: Boolean,
    size: {
      type: String,
      validator: tl
    },
    effect: {
      type: String,
      default: "light"
    },
    disabled: Boolean,
    clearable: Boolean,
    filterable: Boolean,
    allowCreate: Boolean,
    loading: Boolean,
    popperClass: {
      type: String,
      default: ""
    },
    remote: Boolean,
    loadingText: String,
    noMatchText: String,
    noDataText: String,
    remoteMethod: Function,
    filterMethod: Function,
    multiple: Boolean,
    multipleLimit: {
      type: Number,
      default: 0
    },
    placeholder: {
      type: String
    },
    defaultFirstOption: Boolean,
    reserveKeyword: {
      type: Boolean,
      default: !0
    },
    valueKey: {
      type: String,
      default: "value"
    },
    collapseTags: Boolean,
    collapseTagsTooltip: {
      type: Boolean,
      default: !1
    },
    teleported: vl.teleported,
    persistent: {
      type: Boolean,
      default: !0
    },
    clearIcon: {
      type: [String, Object],
      default: el
    },
    fitInputWidth: {
      type: Boolean,
      default: !1
    },
    suffixIcon: {
      type: [String, Object],
      default: ta
    },
    tagType: { ...qa.type, default: "info" }
  },
  emits: [
    Ie,
    oa,
    "remove-tag",
    "clear",
    "visible-change",
    "focus",
    "blur"
  ],
  setup(e, t) {
    const n = ce("select"), o = ce("input"), { t: l } = At(), a = Bg(e), {
      optionsArray: r,
      selectSize: i,
      readonly: s,
      handleResize: u,
      collapseTagSize: c,
      debouncedOnInputChange: p,
      debouncedQueryChange: f,
      deletePrevTag: m,
      deleteTag: d,
      deleteSelected: g,
      handleOptionSelect: b,
      scrollToOption: S,
      setSelected: y,
      resetInputHeight: v,
      managePlaceholder: h,
      showClose: $,
      selectDisabled: w,
      iconComponent: C,
      iconReverse: N,
      showNewOption: H,
      emptyText: _,
      toggleLastOptionHitState: B,
      resetInputState: D,
      handleComposition: W,
      onOptionCreate: K,
      onOptionDestroy: ne,
      handleMenuEnter: oe,
      handleFocus: U,
      blur: k,
      handleBlur: F,
      handleClearClick: Q,
      handleClose: ee,
      toggleMenu: se,
      selectOption: le,
      getValueKey: de,
      navigateOptions: re,
      dropMenuVisible: Se,
      reference: fe,
      input: Ce,
      tooltipRef: We,
      tags: lt,
      selectWrapper: Fe,
      scrollbar: Ge,
      queryChange: rt,
      groupQueryChange: ft
    } = _g(e, a, t), { focus: yt } = op(fe), {
      inputWidth: Be,
      selected: Je,
      inputLength: wt,
      filteredOptionsCount: pt,
      visible: Re,
      softFocus: Qe,
      selectedLabel: at,
      hoverIndex: z,
      query: te,
      inputHovering: Ae,
      currentPlaceholder: Te,
      menuVisibleOnFocus: ht,
      isOnComposition: j,
      isSilentBlur: E,
      options: L,
      cachedOptions: R,
      optionsCount: x,
      prefixWidth: ie,
      tagInMultiLine: $e
    } = An(a), _e = A(() => {
      const Ne = [n.b()], Ct = O(i);
      return Ct && Ne.push(n.m(Ct)), e.disabled && Ne.push(n.m("disabled")), Ne;
    }), Pe = A(() => ({
      maxWidth: `${O(Be) - 32}px`,
      width: "100%"
    }));
    tt(io, pn({
      props: e,
      options: L,
      optionsArray: r,
      cachedOptions: R,
      optionsCount: x,
      filteredOptionsCount: pt,
      hoverIndex: z,
      handleOptionSelect: b,
      onOptionCreate: K,
      onOptionDestroy: ne,
      selectWrapper: Fe,
      selected: Je,
      setSelected: y,
      queryChange: rt,
      groupQueryChange: ft
    })), Ue(() => {
      if (a.cachedPlaceHolder = Te.value = e.placeholder || l("el.select.placeholder"), e.multiple && Array.isArray(e.modelValue) && e.modelValue.length > 0 && (Te.value = ""), Jo(Fe.value, u), fe.value && fe.value.$el) {
        const Ne = fe.value.input;
        a.initialInputHeight = Ne.getBoundingClientRect().height;
      }
      e.remote && e.multiple && v(), he(() => {
        const Ne = fe.value && fe.value.$el;
        if (!!Ne && (Be.value = Ne.getBoundingClientRect().width, t.slots.prefix)) {
          const Ct = Ne.querySelector(`.${o.e("prefix")}`);
          ie.value = Math.max(Ct.getBoundingClientRect().width + 5, 30);
        }
      }), y();
    }), Ot(() => {
      Qo(Fe.value, u);
    }), e.multiple && !Array.isArray(e.modelValue) && t.emit(Ie, []), !e.multiple && Array.isArray(e.modelValue) && t.emit(Ie, "");
    const je = A(() => {
      var Ne, Ct;
      return (Ct = (Ne = We.value) == null ? void 0 : Ne.popperRef) == null ? void 0 : Ct.contentRef;
    });
    return {
      tagInMultiLine: $e,
      prefixWidth: ie,
      selectSize: i,
      readonly: s,
      handleResize: u,
      collapseTagSize: c,
      debouncedOnInputChange: p,
      debouncedQueryChange: f,
      deletePrevTag: m,
      deleteTag: d,
      deleteSelected: g,
      handleOptionSelect: b,
      scrollToOption: S,
      inputWidth: Be,
      selected: Je,
      inputLength: wt,
      filteredOptionsCount: pt,
      visible: Re,
      softFocus: Qe,
      selectedLabel: at,
      hoverIndex: z,
      query: te,
      inputHovering: Ae,
      currentPlaceholder: Te,
      menuVisibleOnFocus: ht,
      isOnComposition: j,
      isSilentBlur: E,
      options: L,
      resetInputHeight: v,
      managePlaceholder: h,
      showClose: $,
      selectDisabled: w,
      iconComponent: C,
      iconReverse: N,
      showNewOption: H,
      emptyText: _,
      toggleLastOptionHitState: B,
      resetInputState: D,
      handleComposition: W,
      handleMenuEnter: oe,
      handleFocus: U,
      blur: k,
      handleBlur: F,
      handleClearClick: Q,
      handleClose: ee,
      toggleMenu: se,
      selectOption: le,
      getValueKey: de,
      navigateOptions: re,
      dropMenuVisible: Se,
      focus: yt,
      reference: fe,
      input: Ce,
      tooltipRef: We,
      popperPaneRef: je,
      tags: lt,
      selectWrapper: Fe,
      scrollbar: Ge,
      wrapperKls: _e,
      selectTagsStyle: Pe,
      nsSelect: n
    };
  }
}), xg = { class: "select-trigger" }, Wg = ["disabled", "autocomplete"], jg = { style: { height: "100%", display: "flex", "justify-content": "center", "align-items": "center" } };
function Vg(e, t, n, o, l, a) {
  const r = ae("el-tag"), i = ae("el-tooltip"), s = ae("el-icon"), u = ae("el-input"), c = ae("el-option"), p = ae("el-scrollbar"), f = ae("el-select-menu"), m = to("click-outside");
  return ke((P(), I("div", {
    ref: "selectWrapper",
    class: M(e.wrapperKls),
    onClick: t[24] || (t[24] = it((...d) => e.toggleMenu && e.toggleMenu(...d), ["stop"]))
  }, [
    me(i, {
      ref: "tooltipRef",
      visible: e.dropMenuVisible,
      "onUpdate:visible": t[23] || (t[23] = (d) => e.dropMenuVisible = d),
      placement: "bottom-start",
      teleported: e.teleported,
      "popper-class": [e.nsSelect.e("popper"), e.popperClass],
      "fallback-placements": ["bottom-start", "top-start", "right", "left"],
      effect: e.effect,
      pure: "",
      trigger: "click",
      transition: `${e.nsSelect.namespace.value}-zoom-in-top`,
      "stop-popper-mouse-event": !1,
      "gpu-acceleration": !1,
      persistent: e.persistent,
      onShow: e.handleMenuEnter
    }, {
      default: X(() => [
        V("div", xg, [
          e.multiple ? (P(), I("div", {
            key: 0,
            ref: "tags",
            class: M(e.nsSelect.e("tags")),
            style: Ee(e.selectTagsStyle)
          }, [
            e.collapseTags && e.selected.length ? (P(), I("span", {
              key: 0,
              class: M([
                e.nsSelect.b("tags-wrapper"),
                { "has-prefix": e.prefixWidth && e.selected.length }
              ])
            }, [
              me(r, {
                closable: !e.selectDisabled && !e.selected[0].isDisabled,
                size: e.collapseTagSize,
                hit: e.selected[0].hitState,
                type: e.tagType,
                "disable-transitions": "",
                onClose: t[0] || (t[0] = (d) => e.deleteTag(d, e.selected[0]))
              }, {
                default: X(() => [
                  V("span", {
                    class: M(e.nsSelect.e("tags-text")),
                    style: Ee({ maxWidth: e.inputWidth - 123 + "px" })
                  }, ve(e.selected[0].currentLabel), 7)
                ]),
                _: 1
              }, 8, ["closable", "size", "hit", "type"]),
              e.selected.length > 1 ? (P(), Y(r, {
                key: 0,
                closable: !1,
                size: e.collapseTagSize,
                type: e.tagType,
                "disable-transitions": ""
              }, {
                default: X(() => [
                  e.collapseTagsTooltip ? (P(), Y(i, {
                    key: 0,
                    disabled: e.dropMenuVisible,
                    "fallback-placements": ["bottom", "top", "right", "left"],
                    effect: e.effect,
                    placement: "bottom",
                    teleported: !1
                  }, {
                    default: X(() => [
                      V("span", {
                        class: M(e.nsSelect.e("tags-text"))
                      }, "+ " + ve(e.selected.length - 1), 3)
                    ]),
                    content: X(() => [
                      V("div", {
                        class: M(e.nsSelect.e("collapse-tags"))
                      }, [
                        (P(!0), I(He, null, qt(e.selected, (d, g) => (P(), I("div", {
                          key: g,
                          class: M(e.nsSelect.e("collapse-tag"))
                        }, [
                          (P(), Y(r, {
                            key: e.getValueKey(d),
                            class: "in-tooltip",
                            closable: !e.selectDisabled && !d.isDisabled,
                            size: e.collapseTagSize,
                            hit: d.hitState,
                            type: e.tagType,
                            "disable-transitions": "",
                            style: { margin: "2px" },
                            onClose: (b) => e.deleteTag(b, d)
                          }, {
                            default: X(() => [
                              V("span", {
                                class: M(e.nsSelect.e("tags-text")),
                                style: Ee({
                                  maxWidth: e.inputWidth - 75 + "px"
                                })
                              }, ve(d.currentLabel), 7)
                            ]),
                            _: 2
                          }, 1032, ["closable", "size", "hit", "type", "onClose"]))
                        ], 2))), 128))
                      ], 2)
                    ]),
                    _: 1
                  }, 8, ["disabled", "effect"])) : (P(), I("span", {
                    key: 1,
                    class: M(e.nsSelect.e("tags-text"))
                  }, "+ " + ve(e.selected.length - 1), 3))
                ]),
                _: 1
              }, 8, ["size", "type"])) : q("v-if", !0)
            ], 2)) : q("v-if", !0),
            q(" <div> "),
            e.collapseTags ? q("v-if", !0) : (P(), Y(eo, {
              key: 1,
              onAfterLeave: e.resetInputHeight
            }, {
              default: X(() => [
                V("span", {
                  class: M([
                    e.nsSelect.b("tags-wrapper"),
                    { "has-prefix": e.prefixWidth && e.selected.length }
                  ])
                }, [
                  (P(!0), I(He, null, qt(e.selected, (d) => (P(), Y(r, {
                    key: e.getValueKey(d),
                    closable: !e.selectDisabled && !d.isDisabled,
                    size: e.collapseTagSize,
                    hit: d.hitState,
                    type: e.tagType,
                    "disable-transitions": "",
                    onClose: (g) => e.deleteTag(g, d)
                  }, {
                    default: X(() => [
                      V("span", {
                        class: M(e.nsSelect.e("tags-text")),
                        style: Ee({ maxWidth: e.inputWidth - 75 + "px" })
                      }, ve(d.currentLabel), 7)
                    ]),
                    _: 2
                  }, 1032, ["closable", "size", "hit", "type", "onClose"]))), 128))
                ], 2)
              ]),
              _: 1
            }, 8, ["onAfterLeave"])),
            q(" </div> "),
            e.filterable ? ke((P(), I("input", {
              key: 2,
              ref: "input",
              "onUpdate:modelValue": t[1] || (t[1] = (d) => e.query = d),
              type: "text",
              class: M([e.nsSelect.e("input"), e.nsSelect.is(e.selectSize)]),
              disabled: e.selectDisabled,
              autocomplete: e.autocomplete,
              style: Ee({
                marginLeft: e.prefixWidth && !e.selected.length || e.tagInMultiLine ? `${e.prefixWidth}px` : "",
                flexGrow: 1,
                width: `${e.inputLength / (e.inputWidth - 32)}%`,
                maxWidth: `${e.inputWidth - 42}px`
              }),
              onFocus: t[2] || (t[2] = (...d) => e.handleFocus && e.handleFocus(...d)),
              onBlur: t[3] || (t[3] = (...d) => e.handleBlur && e.handleBlur(...d)),
              onKeyup: t[4] || (t[4] = (...d) => e.managePlaceholder && e.managePlaceholder(...d)),
              onKeydown: [
                t[5] || (t[5] = (...d) => e.resetInputState && e.resetInputState(...d)),
                t[6] || (t[6] = Ze(it((d) => e.navigateOptions("next"), ["prevent"]), ["down"])),
                t[7] || (t[7] = Ze(it((d) => e.navigateOptions("prev"), ["prevent"]), ["up"])),
                t[8] || (t[8] = Ze(it((d) => e.visible = !1, ["stop", "prevent"]), ["esc"])),
                t[9] || (t[9] = Ze(it((...d) => e.selectOption && e.selectOption(...d), ["stop", "prevent"]), ["enter"])),
                t[10] || (t[10] = Ze((...d) => e.deletePrevTag && e.deletePrevTag(...d), ["delete"])),
                t[11] || (t[11] = Ze((d) => e.visible = !1, ["tab"]))
              ],
              onCompositionstart: t[12] || (t[12] = (...d) => e.handleComposition && e.handleComposition(...d)),
              onCompositionupdate: t[13] || (t[13] = (...d) => e.handleComposition && e.handleComposition(...d)),
              onCompositionend: t[14] || (t[14] = (...d) => e.handleComposition && e.handleComposition(...d)),
              onInput: t[15] || (t[15] = (...d) => e.debouncedQueryChange && e.debouncedQueryChange(...d))
            }, null, 46, Wg)), [
              [gs, e.query]
            ]) : q("v-if", !0)
          ], 6)) : q("v-if", !0),
          me(u, {
            id: e.id,
            ref: "reference",
            modelValue: e.selectedLabel,
            "onUpdate:modelValue": t[16] || (t[16] = (d) => e.selectedLabel = d),
            type: "text",
            placeholder: e.currentPlaceholder,
            name: e.name,
            autocomplete: e.autocomplete,
            size: e.selectSize,
            disabled: e.selectDisabled,
            readonly: e.readonly,
            "validate-event": !1,
            class: M([e.nsSelect.is("focus", e.visible)]),
            tabindex: e.multiple && e.filterable ? -1 : void 0,
            onFocus: e.handleFocus,
            onBlur: e.handleBlur,
            onInput: e.debouncedOnInputChange,
            onPaste: e.debouncedOnInputChange,
            onCompositionstart: e.handleComposition,
            onCompositionupdate: e.handleComposition,
            onCompositionend: e.handleComposition,
            onKeydown: [
              t[17] || (t[17] = Ze(it((d) => e.navigateOptions("next"), ["stop", "prevent"]), ["down"])),
              t[18] || (t[18] = Ze(it((d) => e.navigateOptions("prev"), ["stop", "prevent"]), ["up"])),
              Ze(it(e.selectOption, ["stop", "prevent"]), ["enter"]),
              t[19] || (t[19] = Ze(it((d) => e.visible = !1, ["stop", "prevent"]), ["esc"])),
              t[20] || (t[20] = Ze((d) => e.visible = !1, ["tab"]))
            ],
            onMouseenter: t[21] || (t[21] = (d) => e.inputHovering = !0),
            onMouseleave: t[22] || (t[22] = (d) => e.inputHovering = !1)
          }, ms({
            suffix: X(() => [
              e.iconComponent && !e.showClose ? (P(), Y(s, {
                key: 0,
                class: M([e.nsSelect.e("caret"), e.nsSelect.e("icon"), e.iconReverse])
              }, {
                default: X(() => [
                  (P(), Y(Lt(e.iconComponent)))
                ]),
                _: 1
              }, 8, ["class"])) : q("v-if", !0),
              e.showClose && e.clearIcon ? (P(), Y(s, {
                key: 1,
                class: M([e.nsSelect.e("caret"), e.nsSelect.e("icon")]),
                onClick: e.handleClearClick
              }, {
                default: X(() => [
                  (P(), Y(Lt(e.clearIcon)))
                ]),
                _: 1
              }, 8, ["class", "onClick"])) : q("v-if", !0)
            ]),
            _: 2
          }, [
            e.$slots.prefix ? {
              name: "prefix",
              fn: X(() => [
                V("div", jg, [
                  pe(e.$slots, "prefix")
                ])
              ])
            } : void 0
          ]), 1032, ["id", "modelValue", "placeholder", "name", "autocomplete", "size", "disabled", "readonly", "class", "tabindex", "onFocus", "onBlur", "onInput", "onPaste", "onCompositionstart", "onCompositionupdate", "onCompositionend", "onKeydown"])
        ])
      ]),
      content: X(() => [
        me(f, null, {
          default: X(() => [
            ke(me(p, {
              ref: "scrollbar",
              tag: "ul",
              "wrap-class": e.nsSelect.be("dropdown", "wrap"),
              "view-class": e.nsSelect.be("dropdown", "list"),
              class: M([
                e.nsSelect.is("empty", !e.allowCreate && Boolean(e.query) && e.filteredOptionsCount === 0)
              ])
            }, {
              default: X(() => [
                e.showNewOption ? (P(), Y(c, {
                  key: 0,
                  value: e.query,
                  created: !0
                }, null, 8, ["value"])) : q("v-if", !0),
                pe(e.$slots, "default")
              ]),
              _: 3
            }, 8, ["wrap-class", "view-class", "class"]), [
              [Mt, e.options.size > 0 && !e.loading]
            ]),
            e.emptyText && (!e.allowCreate || e.loading || e.allowCreate && e.options.size === 0) ? (P(), I(He, { key: 0 }, [
              e.$slots.empty ? pe(e.$slots, "empty", { key: 0 }) : (P(), I("p", {
                key: 1,
                class: M(e.nsSelect.be("dropdown", "empty"))
              }, ve(e.emptyText), 3))
            ], 2112)) : q("v-if", !0)
          ]),
          _: 3
        })
      ]),
      _: 3
    }, 8, ["visible", "teleported", "popper-class", "effect", "transition", "persistent", "onShow"])
  ], 2)), [
    [m, e.handleClose, e.popperPaneRef]
  ]);
}
var Kg = /* @__PURE__ */ ge(Dg, [["render", Vg], ["__file", "/home/runner/work/element-plus/element-plus/packages/components/select/src/select.vue"]]);
const qg = G({
  name: "ElOptionGroup",
  componentName: "ElOptionGroup",
  props: {
    label: String,
    disabled: {
      type: Boolean,
      default: !1
    }
  },
  setup(e) {
    const t = ce("select"), n = T(!0), o = be(), l = T([]);
    tt(Ua, pn({
      ...An(e)
    }));
    const a = ue(io);
    Ue(() => {
      l.value = r(o.subTree);
    });
    const r = (s) => {
      const u = [];
      return Array.isArray(s.children) && s.children.forEach((c) => {
        var p;
        c.type && c.type.name === "ElOption" && c.component && c.component.proxy ? u.push(c.component.proxy) : (p = c.children) != null && p.length && u.push(...r(c));
      }), u;
    }, { groupQueryChange: i } = zr(a);
    return J(i, () => {
      n.value = l.value.some((s) => s.visible === !0);
    }), {
      visible: n,
      ns: t
    };
  }
});
function Ug(e, t, n, o, l, a) {
  return ke((P(), I("ul", {
    class: M(e.ns.be("group", "wrap"))
  }, [
    V("li", {
      class: M(e.ns.be("group", "title"))
    }, ve(e.label), 3),
    V("li", null, [
      V("ul", {
        class: M(e.ns.b("group"))
      }, [
        pe(e.$slots, "default")
      ], 2)
    ])
  ], 2)), [
    [Mt, e.visible]
  ]);
}
var Ga = /* @__PURE__ */ ge(qg, [["render", Ug], ["__file", "/home/runner/work/element-plus/element-plus/packages/components/select/src/option-group.vue"]]);
const Gg = ct(Kg, {
  Option: ml,
  OptionGroup: Ga
}), Yg = kn(ml);
kn(Ga);
const bl = () => ue(aa, {}), Xg = Me({
  pageSize: {
    type: Number,
    required: !0
  },
  pageSizes: {
    type: we(Array),
    default: () => nl([10, 20, 30, 40, 50, 100])
  },
  popperClass: {
    type: String,
    default: ""
  },
  disabled: Boolean,
  size: {
    type: String,
    default: "default"
  }
}), Jg = G({
  name: "ElPaginationSizes",
  components: {
    ElSelect: Gg,
    ElOption: Yg
  },
  props: Xg,
  emits: ["page-size-change"],
  setup(e, { emit: t }) {
    const { t: n } = At(), o = ce("pagination"), l = bl(), a = T(e.pageSize);
    J(() => e.pageSizes, (s, u) => {
      if (!To(s, u) && Array.isArray(s)) {
        const c = s.includes(e.pageSize) ? e.pageSize : e.pageSizes[0];
        t("page-size-change", c);
      }
    }), J(() => e.pageSize, (s) => {
      a.value = s;
    });
    const r = A(() => e.pageSizes);
    function i(s) {
      var u;
      s !== a.value && (a.value = s, (u = l.handleSizeChange) == null || u.call(l, Number(s)));
    }
    return {
      ns: o,
      innerPageSizes: r,
      innerPageSize: a,
      t: n,
      handleChange: i
    };
  }
});
function Qg(e, t, n, o, l, a) {
  const r = ae("el-option"), i = ae("el-select");
  return P(), I("span", {
    class: M(e.ns.e("sizes"))
  }, [
    me(i, {
      "model-value": e.innerPageSize,
      disabled: e.disabled,
      "popper-class": e.popperClass,
      size: e.size,
      onChange: e.handleChange
    }, {
      default: X(() => [
        (P(!0), I(He, null, qt(e.innerPageSizes, (s) => (P(), Y(r, {
          key: s,
          value: s,
          label: s + e.t("el.pagination.pagesize")
        }, null, 8, ["value", "label"]))), 128))
      ]),
      _: 1
    }, 8, ["model-value", "disabled", "popper-class", "size", "onChange"])
  ], 2);
}
var Zg = /* @__PURE__ */ ge(Jg, [["render", Qg], ["__file", "/home/runner/work/element-plus/element-plus/packages/components/pagination/src/components/sizes.vue"]]);
const em = G({
  name: "ElPaginationJumper",
  components: {
    ElInput: va
  },
  setup() {
    const { t: e } = At(), t = ce("pagination"), { pageCount: n, disabled: o, currentPage: l, changeEvent: a } = bl(), r = T(), i = A(() => {
      var c;
      return (c = r.value) != null ? c : l == null ? void 0 : l.value;
    });
    function s(c) {
      r.value = +c;
    }
    function u(c) {
      c = Math.trunc(+c), a == null || a(+c), r.value = void 0;
    }
    return {
      ns: t,
      pageCount: n,
      disabled: o,
      innerValue: i,
      t: e,
      handleInput: s,
      handleChange: u
    };
  }
}), tm = ["disabled"];
function nm(e, t, n, o, l, a) {
  const r = ae("el-input");
  return P(), I("span", {
    class: M(e.ns.e("jump")),
    disabled: e.disabled
  }, [
    Kt(ve(e.t("el.pagination.goto")) + " ", 1),
    me(r, {
      size: "small",
      class: M([e.ns.e("editor"), e.ns.is("in-pagination")]),
      min: 1,
      max: e.pageCount,
      disabled: e.disabled,
      "model-value": e.innerValue,
      type: "number",
      "onUpdate:modelValue": e.handleInput,
      onChange: e.handleChange
    }, null, 8, ["class", "max", "disabled", "model-value", "onUpdate:modelValue", "onChange"]),
    Kt(" " + ve(e.t("el.pagination.pageClassifier")), 1)
  ], 10, tm);
}
var om = /* @__PURE__ */ ge(em, [["render", nm], ["__file", "/home/runner/work/element-plus/element-plus/packages/components/pagination/src/components/jumper.vue"]]);
const lm = {
  total: {
    type: Number,
    default: 1e3
  }
}, rm = G({
  name: "ElPaginationTotal",
  props: lm,
  setup() {
    const { t: e } = At(), t = ce("pagination"), { disabled: n } = bl();
    return {
      t: e,
      ns: t,
      disabled: n
    };
  }
}), am = ["disabled"];
function sm(e, t, n, o, l, a) {
  return P(), I("span", {
    class: M(e.ns.e("total")),
    disabled: e.disabled
  }, ve(e.t("el.pagination.total", {
    total: e.total
  })), 11, am);
}
var im = /* @__PURE__ */ ge(rm, [["render", sm], ["__file", "/home/runner/work/element-plus/element-plus/packages/components/pagination/src/components/total.vue"]]);
const um = {
  currentPage: {
    type: Number,
    default: 1
  },
  pageCount: {
    type: Number,
    required: !0
  },
  pagerCount: {
    type: Number,
    default: 7
  },
  disabled: Boolean
}, cm = G({
  name: "ElPaginationPager",
  components: {
    DArrowLeft: vf,
    DArrowRight: Cf,
    MoreFilled: _f
  },
  props: um,
  emits: ["change"],
  setup(e, { emit: t }) {
    const n = ce("pager"), o = ce("icon"), l = T(!1), a = T(!1), r = T(!1), i = T(!1), s = A(() => {
      const f = e.pagerCount, m = (f - 1) / 2, d = Number(e.currentPage), g = Number(e.pageCount);
      let b = !1, S = !1;
      g > f && (d > f - m && (b = !0), d < g - m && (S = !0));
      const y = [];
      if (b && !S) {
        const v = g - (f - 2);
        for (let h = v; h < g; h++)
          y.push(h);
      } else if (!b && S)
        for (let v = 2; v < f; v++)
          y.push(v);
      else if (b && S) {
        const v = Math.floor(f / 2) - 1;
        for (let h = d - v; h <= d + v; h++)
          y.push(h);
      } else
        for (let v = 2; v < g; v++)
          y.push(v);
      return y;
    });
    tn(() => {
      const f = (e.pagerCount - 1) / 2;
      l.value = !1, a.value = !1, e.pageCount > e.pagerCount && (e.currentPage > e.pagerCount - f && (l.value = !0), e.currentPage < e.pageCount - f && (a.value = !0));
    });
    function u(f) {
      e.disabled || (f === "left" ? r.value = !0 : i.value = !0);
    }
    function c(f) {
      const m = f.target;
      if (m.tagName.toLowerCase() === "li" && Array.from(m.classList).includes("number")) {
        const d = Number(m.textContent);
        d !== e.currentPage && t("change", d);
      }
    }
    function p(f) {
      const m = f.target;
      if (m.tagName.toLowerCase() === "ul" || e.disabled)
        return;
      let d = Number(m.textContent);
      const g = e.pageCount, b = e.currentPage, S = e.pagerCount - 2;
      m.className.includes("more") && (m.className.includes("quickprev") ? d = b - S : m.className.includes("quicknext") && (d = b + S)), Number.isNaN(+d) || (d < 1 && (d = 1), d > g && (d = g)), d !== b && t("change", d);
    }
    return {
      showPrevMore: l,
      showNextMore: a,
      quickPrevHover: r,
      quickNextHover: i,
      pagers: s,
      nsPager: n,
      nsIcon: o,
      onMouseenter: u,
      onPagerClick: p,
      onEnter: c
    };
  }
}), dm = ["aria-current"], fm = ["aria-current"], pm = ["aria-current"];
function hm(e, t, n, o, l, a) {
  const r = ae("d-arrow-left"), i = ae("more-filled"), s = ae("d-arrow-right");
  return P(), I("ul", {
    class: M(e.nsPager.b()),
    onClick: t[4] || (t[4] = (...u) => e.onPagerClick && e.onPagerClick(...u)),
    onKeyup: t[5] || (t[5] = Ze((...u) => e.onEnter && e.onEnter(...u), ["enter"]))
  }, [
    e.pageCount > 0 ? (P(), I("li", {
      key: 0,
      class: M([[
        e.nsPager.is("active", e.currentPage === 1),
        e.nsPager.is("disabled", e.disabled)
      ], "number"]),
      "aria-current": e.currentPage === 1,
      tabindex: "0"
    }, " 1 ", 10, dm)) : q("v-if", !0),
    e.showPrevMore ? (P(), I("li", {
      key: 1,
      class: M([
        "more",
        "btn-quickprev",
        e.nsIcon.b(),
        e.nsPager.is("disabled", e.disabled)
      ]),
      onMouseenter: t[0] || (t[0] = (u) => e.onMouseenter("left")),
      onMouseleave: t[1] || (t[1] = (u) => e.quickPrevHover = !1)
    }, [
      e.quickPrevHover ? (P(), Y(r, { key: 0 })) : (P(), Y(i, { key: 1 }))
    ], 34)) : q("v-if", !0),
    (P(!0), I(He, null, qt(e.pagers, (u) => (P(), I("li", {
      key: u,
      class: M([[
        e.nsPager.is("active", e.currentPage === u),
        e.nsPager.is("disabled", e.disabled)
      ], "number"]),
      "aria-current": e.currentPage === u,
      tabindex: "0"
    }, ve(u), 11, fm))), 128)),
    e.showNextMore ? (P(), I("li", {
      key: 2,
      class: M([
        "more",
        "btn-quicknext",
        e.nsIcon.b(),
        e.nsPager.is("disabled", e.disabled)
      ]),
      onMouseenter: t[2] || (t[2] = (u) => e.onMouseenter("right")),
      onMouseleave: t[3] || (t[3] = (u) => e.quickNextHover = !1)
    }, [
      e.quickNextHover ? (P(), Y(s, { key: 0 })) : (P(), Y(i, { key: 1 }))
    ], 34)) : q("v-if", !0),
    e.pageCount > 1 ? (P(), I("li", {
      key: 3,
      class: M([[
        e.nsPager.is("active", e.currentPage === e.pageCount),
        e.nsPager.is("disabled", e.disabled)
      ], "number"]),
      "aria-current": e.currentPage === e.pageCount,
      tabindex: "0"
    }, ve(e.pageCount), 11, pm)) : q("v-if", !0)
  ], 34);
}
var vm = /* @__PURE__ */ ge(cm, [["render", hm], ["__file", "/home/runner/work/element-plus/element-plus/packages/components/pagination/src/components/pager.vue"]]);
const De = (e) => typeof e != "number", gm = Me({
  total: Number,
  pageSize: Number,
  defaultPageSize: Number,
  currentPage: Number,
  defaultCurrentPage: Number,
  pageCount: Number,
  pagerCount: {
    type: Number,
    validator: (e) => typeof e == "number" && Math.trunc(e) === e && e > 4 && e < 22 && e % 2 === 1,
    default: 7
  },
  layout: {
    type: String,
    default: ["prev", "pager", "next", "jumper", "->", "total"].join(", ")
  },
  pageSizes: {
    type: we(Array),
    default: () => nl([10, 20, 30, 40, 50, 100])
  },
  popperClass: {
    type: String,
    default: ""
  },
  prevText: {
    type: String,
    default: ""
  },
  nextText: {
    type: String,
    default: ""
  },
  small: Boolean,
  background: Boolean,
  disabled: Boolean,
  hideOnSinglePage: Boolean
}), mm = {
  "update:current-page": (e) => typeof e == "number",
  "update:page-size": (e) => typeof e == "number",
  "size-change": (e) => typeof e == "number",
  "current-change": (e) => typeof e == "number",
  "prev-click": (e) => typeof e == "number",
  "next-click": (e) => typeof e == "number"
}, Er = "ElPagination";
var bm = G({
  name: Er,
  props: gm,
  emits: mm,
  setup(e, { emit: t, slots: n }) {
    const { t: o } = At(), l = ce("pagination"), a = be().vnode.props || {}, r = "onUpdate:currentPage" in a || "onUpdate:current-page" in a || "onCurrentChange" in a, i = "onUpdate:pageSize" in a || "onUpdate:page-size" in a || "onSizeChange" in a, s = A(() => {
      if (De(e.total) && De(e.pageCount) || !De(e.currentPage) && !r)
        return !1;
      if (e.layout.includes("sizes")) {
        if (De(e.pageCount)) {
          if (!De(e.total) && !De(e.pageSize) && !i)
            return !1;
        } else if (!i)
          return !1;
      }
      return !0;
    }), u = T(De(e.defaultPageSize) ? 10 : e.defaultPageSize), c = T(De(e.defaultCurrentPage) ? 1 : e.defaultCurrentPage), p = A({
      get() {
        return De(e.pageSize) ? u.value : e.pageSize;
      },
      set(v) {
        De(e.pageSize) && (u.value = v), i && (t("update:page-size", v), t("size-change", v));
      }
    }), f = A(() => {
      let v = 0;
      return De(e.pageCount) ? De(e.total) || (v = Math.max(1, Math.ceil(e.total / p.value))) : v = e.pageCount, v;
    }), m = A({
      get() {
        return De(e.currentPage) ? c.value : e.currentPage;
      },
      set(v) {
        let h = v;
        v < 1 ? h = 1 : v > f.value && (h = f.value), De(e.currentPage) && (c.value = h), r && (t("update:current-page", h), t("current-change", h));
      }
    });
    J(f, (v) => {
      m.value > v && (m.value = v);
    });
    function d(v) {
      m.value = v;
    }
    function g(v) {
      p.value = v;
      const h = f.value;
      m.value > h && (m.value = h);
    }
    function b() {
      e.disabled || (m.value -= 1, t("prev-click", m.value));
    }
    function S() {
      e.disabled || (m.value += 1, t("next-click", m.value));
    }
    function y(v, h) {
      v && (v.props || (v.props = {}), v.props.class = [v.props.class, h].join(" "));
    }
    return tt(aa, {
      pageCount: f,
      disabled: A(() => e.disabled),
      currentPage: m,
      changeEvent: d,
      handleSizeChange: g
    }), () => {
      var v, h;
      if (!s.value)
        return Le(Er, o("el.pagination.deprecationWarning")), null;
      if (!e.layout || e.hideOnSinglePage && f.value <= 1)
        return null;
      const $ = [], w = [], C = Z("div", { class: l.e("rightwrapper") }, w), N = {
        prev: Z(Og, {
          disabled: e.disabled,
          currentPage: m.value,
          prevText: e.prevText,
          onClick: b
        }),
        jumper: Z(om),
        pager: Z(vm, {
          currentPage: m.value,
          pageCount: f.value,
          pagerCount: e.pagerCount,
          onChange: d,
          disabled: e.disabled
        }),
        next: Z(Ng, {
          disabled: e.disabled,
          currentPage: m.value,
          pageCount: f.value,
          nextText: e.nextText,
          onClick: S
        }),
        sizes: Z(Zg, {
          pageSize: p.value,
          pageSizes: e.pageSizes,
          popperClass: e.popperClass,
          disabled: e.disabled,
          size: e.small ? "small" : "default"
        }),
        slot: (h = (v = n == null ? void 0 : n.default) == null ? void 0 : v.call(n)) != null ? h : null,
        total: Z(im, { total: De(e.total) ? 0 : e.total })
      }, H = e.layout.split(",").map((B) => B.trim());
      let _ = !1;
      return H.forEach((B) => {
        if (B === "->") {
          _ = !0;
          return;
        }
        _ ? w.push(N[B]) : $.push(N[B]);
      }), y($[0], l.is("first")), y($[$.length - 1], l.is("last")), _ && w.length > 0 && (y(w[0], l.is("first")), y(w[w.length - 1], l.is("last")), $.push(C)), Z("div", {
        role: "pagination",
        "aria-label": "pagination",
        class: [
          l.b(),
          l.is("background", e.background),
          {
            [l.m("small")]: e.small
          }
        ]
      }, $);
    };
  }
});
const ym = ct(bm);
/*!
 * escape-html
 * Copyright(c) 2012-2013 TJ Holowaychuk
 * Copyright(c) 2015 Andreas Lubbe
 * Copyright(c) 2015 Tiancheng "Timothy" Gu
 * MIT Licensed
 */
var wm = /["'&<>]/, Cm = Sm;
function Sm(e) {
  var t = "" + e, n = wm.exec(t);
  if (!n)
    return t;
  var o, l = "", a = 0, r = 0;
  for (a = n.index; a < t.length; a++) {
    switch (t.charCodeAt(a)) {
      case 34:
        o = "&quot;";
        break;
      case 38:
        o = "&amp;";
        break;
      case 39:
        o = "&#39;";
        break;
      case 60:
        o = "&lt;";
        break;
      case 62:
        o = "&gt;";
        break;
      default:
        continue;
    }
    r !== a && (l += t.substring(r, a)), r = a + 1, l += o;
  }
  return r !== a ? l + t.substring(r, a) : l;
}
const wo = function(e) {
  let t = e.target;
  for (; t && t.tagName.toUpperCase() !== "HTML"; ) {
    if (t.tagName.toUpperCase() === "TD")
      return t;
    t = t.parentNode;
  }
  return null;
}, Or = function(e) {
  return e !== null && typeof e == "object";
}, $m = function(e, t, n, o, l) {
  if (!t && !o && (!l || Array.isArray(l) && !l.length))
    return e;
  typeof n == "string" ? n = n === "descending" ? -1 : 1 : n = n && n < 0 ? -1 : 1;
  const a = o ? null : function(i, s) {
    return l ? (Array.isArray(l) || (l = [l]), l.map((u) => typeof u == "string" ? xe(i, u) : u(i, s, e))) : (t !== "$key" && Or(i) && "$value" in i && (i = i.$value), [Or(i) ? xe(i, t) : i]);
  }, r = function(i, s) {
    if (o)
      return o(i.value, s.value);
    for (let u = 0, c = i.key.length; u < c; u++) {
      if (i.key[u] < s.key[u])
        return -1;
      if (i.key[u] > s.key[u])
        return 1;
    }
    return 0;
  };
  return e.map((i, s) => ({
    value: i,
    index: s,
    key: a ? a(i, s) : null
  })).sort((i, s) => {
    let u = r(i, s);
    return u || (u = i.index - s.index), u * +n;
  }).map((i) => i.value);
}, Ya = function(e, t) {
  let n = null;
  return e.columns.forEach((o) => {
    o.id === t && (n = o);
  }), n;
}, Em = function(e, t) {
  let n = null;
  for (let o = 0; o < e.columns.length; o++) {
    const l = e.columns[o];
    if (l.columnKey === t) {
      n = l;
      break;
    }
  }
  return n;
}, Tr = function(e, t, n) {
  const o = (t.className || "").match(new RegExp(`${n}-table_[^\\s]+`, "gm"));
  return o ? Ya(e, o[0]) : null;
}, ze = (e, t) => {
  if (!e)
    throw new Error("Row is required when get row identity");
  if (typeof t == "string") {
    if (!t.includes("."))
      return `${e[t]}`;
    const n = t.split(".");
    let o = e;
    for (const l of n)
      o = o[l];
    return `${o}`;
  } else if (typeof t == "function")
    return t.call(null, e);
}, xt = function(e, t) {
  const n = {};
  return (e || []).forEach((o, l) => {
    n[ze(o, t)] = { row: o, index: l };
  }), n;
};
function Om(e, t) {
  const n = {};
  let o;
  for (o in e)
    n[o] = e[o];
  for (o in t)
    if (Ut(t, o)) {
      const l = t[o];
      typeof l < "u" && (n[o] = l);
    }
  return n;
}
function yl(e) {
  return e === "" || e !== void 0 && (e = Number.parseInt(e, 10), Number.isNaN(e) && (e = "")), e;
}
function Xa(e) {
  return e === "" || e !== void 0 && (e = yl(e), Number.isNaN(e) && (e = 80)), e;
}
function jo(e) {
  return typeof e == "number" ? e : typeof e == "string" ? /^\d+(?:px)?$/.test(e) ? Number.parseInt(e, 10) : e : null;
}
function Tm(...e) {
  return e.length === 0 ? (t) => t : e.length === 1 ? e[0] : e.reduce((t, n) => (...o) => t(n(...o)));
}
function jn(e, t, n) {
  let o = !1;
  const l = e.indexOf(t), a = l !== -1, r = () => {
    e.push(t), o = !0;
  }, i = () => {
    e.splice(l, 1), o = !0;
  };
  return typeof n == "boolean" ? n && !a ? r() : !n && a && i() : a ? i() : r(), o;
}
function Pm(e, t, n = "children", o = "hasChildren") {
  const l = (r) => !(Array.isArray(r) && r.length);
  function a(r, i, s) {
    t(r, i, s), i.forEach((u) => {
      if (u[o]) {
        t(u, null, s + 1);
        return;
      }
      const c = u[n];
      l(c) || a(u, c, s + 1);
    });
  }
  e.forEach((r) => {
    if (r[o]) {
      t(r, null, 0);
      return;
    }
    const i = r[n];
    l(i) || a(r, i, 0);
  });
}
let Qn;
function Am(e, t, n, o) {
  const { nextZIndex: l } = ha();
  function a() {
    const p = o === "light", f = document.createElement("div");
    return f.className = `el-popper ${p ? "is-light" : "is-dark"}`, t = Cm(t), f.innerHTML = t, f.style.zIndex = String(l()), document.body.appendChild(f), f;
  }
  function r() {
    const p = document.createElement("div");
    return p.className = "el-popper__arrow", p;
  }
  function i() {
    s && s.update();
  }
  Qn = function p() {
    try {
      s && s.destroy(), u && document.body.removeChild(u), Gn(e, "mouseenter", i), Gn(e, "mouseleave", p);
    } catch {
    }
  };
  let s = null;
  const u = a(), c = r();
  return u.appendChild(c), s = La(e, u, {
    modifiers: [
      {
        name: "offset",
        options: {
          offset: [0, 8]
        }
      },
      {
        name: "arrow",
        options: {
          element: c,
          padding: 10
        }
      }
    ],
    ...n
  }), Un(e, "mouseenter", i), Un(e, "mouseleave", Qn), s;
}
const Ja = (e, t, n, o) => {
  let l = 0, a = e;
  if (o) {
    if (o[e].colSpan > 1)
      return {};
    for (let s = 0; s < e; s++)
      l += o[s].colSpan;
    a = l + o[e].colSpan - 1;
  } else
    l = e;
  let r;
  const i = n.states.columns;
  switch (t) {
    case "left":
      a < n.states.fixedLeafColumnsLength.value && (r = "left");
      break;
    case "right":
      l >= i.value.length - n.states.rightFixedLeafColumnsLength.value && (r = "right");
      break;
    default:
      a < n.states.fixedLeafColumnsLength.value ? r = "left" : l >= i.value.length - n.states.rightFixedLeafColumnsLength.value && (r = "right");
  }
  return r ? {
    direction: r,
    start: l,
    after: a
  } : {};
}, wl = (e, t, n, o, l) => {
  const a = [], { direction: r, start: i } = Ja(t, n, o, l);
  if (r) {
    const s = r === "left";
    a.push(`${e}-fixed-column--${r}`), s && i === o.states.fixedLeafColumnsLength.value - 1 ? a.push("is-last-column") : !s && i === o.states.columns.value.length - o.states.rightFixedLeafColumnsLength.value && a.push("is-first-column");
  }
  return a;
};
function Pr(e, t) {
  return e + (t.realWidth === null || Number.isNaN(t.realWidth) ? Number(t.width) : t.realWidth);
}
const Cl = (e, t, n, o) => {
  const { direction: l, start: a = 0 } = Ja(e, t, n, o);
  if (!l)
    return;
  const r = {}, i = l === "left", s = n.states.columns.value;
  return i ? r.left = s.slice(0, e).reduce(Pr, 0) : r.right = s.slice(a + 1).reverse().reduce(Pr, 0), r;
}, fn = (e, t) => {
  !e || Number.isNaN(e[t]) || (e[t] = `${e[t]}px`);
};
function km(e) {
  const t = be(), n = T(!1), o = T([]);
  return {
    updateExpandRows: () => {
      const s = e.data.value || [], u = e.rowKey.value;
      if (n.value)
        o.value = s.slice();
      else if (u) {
        const c = xt(o.value, u);
        o.value = s.reduce((p, f) => {
          const m = ze(f, u);
          return c[m] && p.push(f), p;
        }, []);
      } else
        o.value = [];
    },
    toggleRowExpansion: (s, u) => {
      jn(o.value, s, u) && t.emit("expand-change", s, o.value.slice());
    },
    setExpandRowKeys: (s) => {
      t.store.assertRowKey();
      const u = e.data.value || [], c = e.rowKey.value, p = xt(u, c);
      o.value = s.reduce((f, m) => {
        const d = p[m];
        return d && f.push(d.row), f;
      }, []);
    },
    isRowExpanded: (s) => {
      const u = e.rowKey.value;
      return u ? !!xt(o.value, u)[ze(s, u)] : o.value.includes(s);
    },
    states: {
      expandRows: o,
      defaultExpandAll: n
    }
  };
}
function Lm(e) {
  const t = be(), n = T(null), o = T(null), l = (u) => {
    t.store.assertRowKey(), n.value = u, r(u);
  }, a = () => {
    n.value = null;
  }, r = (u) => {
    const { data: c, rowKey: p } = e;
    let f = null;
    p.value && (f = (O(c) || []).find((m) => ze(m, p.value) === u)), o.value = f, t.emit("current-change", o.value, null);
  };
  return {
    setCurrentRowKey: l,
    restoreCurrentRowKey: a,
    setCurrentRowByKey: r,
    updateCurrentRow: (u) => {
      const c = o.value;
      if (u && u !== c) {
        o.value = u, t.emit("current-change", o.value, c);
        return;
      }
      !u && c && (o.value = null, t.emit("current-change", null, c));
    },
    updateCurrentRowData: () => {
      const u = e.rowKey.value, c = e.data.value || [], p = o.value;
      if (!c.includes(p) && p) {
        if (u) {
          const f = ze(p, u);
          r(f);
        } else
          o.value = null;
        o.value === null && t.emit("current-change", null, p);
      } else
        n.value && (r(n.value), a());
    },
    states: {
      _currentRowKey: n,
      currentRow: o
    }
  };
}
function Nm(e) {
  const t = T([]), n = T({}), o = T(16), l = T(!1), a = T({}), r = T("hasChildren"), i = T("children"), s = be(), u = A(() => {
    if (!e.rowKey.value)
      return {};
    const S = e.data.value || [];
    return p(S);
  }), c = A(() => {
    const S = e.rowKey.value, y = Object.keys(a.value), v = {};
    return y.length && y.forEach((h) => {
      if (a.value[h].length) {
        const $ = { children: [] };
        a.value[h].forEach((w) => {
          const C = ze(w, S);
          $.children.push(C), w[r.value] && !v[C] && (v[C] = { children: [] });
        }), v[h] = $;
      }
    }), v;
  }), p = (S) => {
    const y = e.rowKey.value, v = {};
    return Pm(S, (h, $, w) => {
      const C = ze(h, y);
      Array.isArray($) ? v[C] = {
        children: $.map((N) => ze(N, y)),
        level: w
      } : l.value && (v[C] = {
        children: [],
        lazy: !0,
        level: w
      });
    }, i.value, r.value), v;
  }, f = (S = !1, y = ((v) => (v = s.store) == null ? void 0 : v.states.defaultExpandAll.value)()) => {
    var v;
    const h = u.value, $ = c.value, w = Object.keys(h), C = {};
    if (w.length) {
      const N = O(n), H = [], _ = (D, W) => {
        if (S)
          return t.value ? y || t.value.includes(W) : !!(y || (D == null ? void 0 : D.expanded));
        {
          const K = y || t.value && t.value.includes(W);
          return !!((D == null ? void 0 : D.expanded) || K);
        }
      };
      w.forEach((D) => {
        const W = N[D], K = { ...h[D] };
        if (K.expanded = _(W, D), K.lazy) {
          const { loaded: ne = !1, loading: oe = !1 } = W || {};
          K.loaded = !!ne, K.loading = !!oe, H.push(D);
        }
        C[D] = K;
      });
      const B = Object.keys($);
      l.value && B.length && H.length && B.forEach((D) => {
        const W = N[D], K = $[D].children;
        if (H.includes(D)) {
          if (C[D].children.length !== 0)
            throw new Error("[ElTable]children must be an empty array.");
          C[D].children = K;
        } else {
          const { loaded: ne = !1, loading: oe = !1 } = W || {};
          C[D] = {
            lazy: !0,
            loaded: !!ne,
            loading: !!oe,
            expanded: _(W, D),
            children: K,
            level: ""
          };
        }
      });
    }
    n.value = C, (v = s.store) == null || v.updateTableScrollY();
  };
  J(() => t.value, () => {
    f(!0);
  }), J(() => u.value, () => {
    f();
  }), J(() => c.value, () => {
    f();
  });
  const m = (S) => {
    t.value = S, f();
  }, d = (S, y) => {
    s.store.assertRowKey();
    const v = e.rowKey.value, h = ze(S, v), $ = h && n.value[h];
    if (h && $ && "expanded" in $) {
      const w = $.expanded;
      y = typeof y > "u" ? !$.expanded : y, n.value[h].expanded = y, w !== y && s.emit("expand-change", S, y), s.store.updateTableScrollY();
    }
  }, g = (S) => {
    s.store.assertRowKey();
    const y = e.rowKey.value, v = ze(S, y), h = n.value[v];
    l.value && h && "loaded" in h && !h.loaded ? b(S, v, h) : d(S, void 0);
  }, b = (S, y, v) => {
    const { load: h } = s.props;
    h && !n.value[y].loaded && (n.value[y].loading = !0, h(S, v, ($) => {
      if (!Array.isArray($))
        throw new TypeError("[ElTable] data must be an array");
      n.value[y].loading = !1, n.value[y].loaded = !0, n.value[y].expanded = !0, $.length && (a.value[y] = $), s.emit("expand-change", S, !0);
    }));
  };
  return {
    loadData: b,
    loadOrToggle: g,
    toggleTreeExpansion: d,
    updateTreeExpandKeys: m,
    updateTreeData: f,
    normalize: p,
    states: {
      expandRowKeys: t,
      treeData: n,
      indent: o,
      lazy: l,
      lazyTreeNodeMap: a,
      lazyColumnIdentifier: r,
      childrenColumnName: i
    }
  };
}
const zm = (e, t) => {
  const n = t.sortingColumn;
  return !n || typeof n.sortable == "string" ? e : $m(e, t.sortProp, t.sortOrder, n.sortMethod, n.sortBy);
}, Vn = (e) => {
  const t = [];
  return e.forEach((n) => {
    n.children ? t.push.apply(t, Vn(n.children)) : t.push(n);
  }), t;
};
function Mm() {
  var e;
  const t = be(), { size: n } = An((e = t.proxy) == null ? void 0 : e.$props), o = T(null), l = T([]), a = T([]), r = T(!1), i = T([]), s = T([]), u = T([]), c = T([]), p = T([]), f = T([]), m = T([]), d = T([]), g = T(0), b = T(0), S = T(0), y = T(!1), v = T([]), h = T(!1), $ = T(!1), w = T(null), C = T({}), N = T(null), H = T(null), _ = T(null), B = T(null), D = T(null);
  J(l, () => t.state && ne(!1), {
    deep: !0
  });
  const W = () => {
    if (!o.value)
      throw new Error("[ElTable] prop row-key is required");
  }, K = () => {
    c.value = i.value.filter((x) => x.fixed === !0 || x.fixed === "left"), p.value = i.value.filter((x) => x.fixed === "right"), c.value.length > 0 && i.value[0] && i.value[0].type === "selection" && !i.value[0].fixed && (i.value[0].fixed = !0, c.value.unshift(i.value[0]));
    const j = i.value.filter((x) => !x.fixed);
    s.value = [].concat(c.value).concat(j).concat(p.value);
    const E = Vn(j), L = Vn(c.value), R = Vn(p.value);
    g.value = E.length, b.value = L.length, S.value = R.length, u.value = [].concat(L).concat(E).concat(R), r.value = c.value.length > 0 || p.value.length > 0;
  }, ne = (j, E = !1) => {
    j && K(), E ? t.state.doLayout() : t.state.debouncedUpdateLayout();
  }, oe = (j) => v.value.includes(j), U = () => {
    y.value = !1, v.value.length && (v.value = [], t.emit("selection-change", []));
  }, k = () => {
    let j;
    if (o.value) {
      j = [];
      const E = xt(v.value, o.value), L = xt(l.value, o.value);
      for (const R in E)
        Ut(E, R) && !L[R] && j.push(E[R].row);
    } else
      j = v.value.filter((E) => !l.value.includes(E));
    if (j.length) {
      const E = v.value.filter((L) => !j.includes(L));
      v.value = E, t.emit("selection-change", E.slice());
    }
  }, F = () => (v.value || []).slice(), Q = (j, E = void 0, L = !0) => {
    if (jn(v.value, j, E)) {
      const x = (v.value || []).slice();
      L && t.emit("select", x, j), t.emit("selection-change", x);
    }
  }, ee = () => {
    var j, E;
    const L = $.value ? !y.value : !(y.value || v.value.length);
    y.value = L;
    let R = !1, x = 0;
    const ie = (E = (j = t == null ? void 0 : t.store) == null ? void 0 : j.states) == null ? void 0 : E.rowKey.value;
    l.value.forEach(($e, _e) => {
      const Pe = _e + x;
      w.value ? w.value.call(null, $e, Pe) && jn(v.value, $e, L) && (R = !0) : jn(v.value, $e, L) && (R = !0), x += de(ze($e, ie));
    }), R && t.emit("selection-change", v.value ? v.value.slice() : []), t.emit("select-all", v.value);
  }, se = () => {
    const j = xt(v.value, o.value);
    l.value.forEach((E) => {
      const L = ze(E, o.value), R = j[L];
      R && (v.value[R.index] = E);
    });
  }, le = () => {
    var j, E, L;
    if (((j = l.value) == null ? void 0 : j.length) === 0) {
      y.value = !1;
      return;
    }
    let R;
    o.value && (R = xt(v.value, o.value));
    const x = function(Pe) {
      return R ? !!R[ze(Pe, o.value)] : v.value.includes(Pe);
    };
    let ie = !0, $e = 0, _e = 0;
    for (let Pe = 0, je = (l.value || []).length; Pe < je; Pe++) {
      const Ne = (L = (E = t == null ? void 0 : t.store) == null ? void 0 : E.states) == null ? void 0 : L.rowKey.value, Ct = Pe + _e, uo = l.value[Pe], as = w.value && w.value.call(null, uo, Ct);
      if (x(uo))
        $e++;
      else if (!w.value || as) {
        ie = !1;
        break;
      }
      _e += de(ze(uo, Ne));
    }
    $e === 0 && (ie = !1), y.value = ie;
  }, de = (j) => {
    var E;
    if (!t || !t.store)
      return 0;
    const { treeData: L } = t.store.states;
    let R = 0;
    const x = (E = L.value[j]) == null ? void 0 : E.children;
    return x && (R += x.length, x.forEach((ie) => {
      R += de(ie);
    })), R;
  }, re = (j, E) => {
    Array.isArray(j) || (j = [j]);
    const L = {};
    return j.forEach((R) => {
      C.value[R.id] = E, L[R.columnKey || R.id] = E;
    }), L;
  }, Se = (j, E, L) => {
    H.value && H.value !== j && (H.value.order = null), H.value = j, _.value = E, B.value = L;
  }, fe = () => {
    let j = O(a);
    Object.keys(C.value).forEach((E) => {
      const L = C.value[E];
      if (!L || L.length === 0)
        return;
      const R = Ya({
        columns: u.value
      }, E);
      R && R.filterMethod && (j = j.filter((x) => L.some((ie) => R.filterMethod.call(null, ie, x, R))));
    }), N.value = j;
  }, Ce = () => {
    l.value = zm(N.value, {
      sortingColumn: H.value,
      sortProp: _.value,
      sortOrder: B.value
    });
  }, We = (j = void 0) => {
    j && j.filter || fe(), Ce();
  }, lt = (j) => {
    const { tableHeaderRef: E } = t.refs;
    if (!E)
      return;
    const L = Object.assign({}, E.filterPanels), R = Object.keys(L);
    if (!!R.length)
      if (typeof j == "string" && (j = [j]), Array.isArray(j)) {
        const x = j.map((ie) => Em({
          columns: u.value
        }, ie));
        R.forEach((ie) => {
          const $e = x.find((_e) => _e.id === ie);
          $e && ($e.filteredValue = []);
        }), t.store.commit("filterChange", {
          column: x,
          values: [],
          silent: !0,
          multi: !0
        });
      } else
        R.forEach((x) => {
          const ie = u.value.find(($e) => $e.id === x);
          ie && (ie.filteredValue = []);
        }), C.value = {}, t.store.commit("filterChange", {
          column: {},
          values: [],
          silent: !0
        });
  }, Fe = () => {
    !H.value || (Se(null, null, null), t.store.commit("changeSortCondition", {
      silent: !0
    }));
  }, {
    setExpandRowKeys: Ge,
    toggleRowExpansion: rt,
    updateExpandRows: ft,
    states: yt,
    isRowExpanded: Be
  } = km({
    data: l,
    rowKey: o
  }), {
    updateTreeExpandKeys: Je,
    toggleTreeExpansion: wt,
    updateTreeData: pt,
    loadOrToggle: Re,
    states: Qe
  } = Nm({
    data: l,
    rowKey: o
  }), {
    updateCurrentRowData: at,
    updateCurrentRow: z,
    setCurrentRowKey: te,
    states: Ae
  } = Lm({
    data: l,
    rowKey: o
  });
  return {
    assertRowKey: W,
    updateColumns: K,
    scheduleLayout: ne,
    isSelected: oe,
    clearSelection: U,
    cleanSelection: k,
    getSelectionRows: F,
    toggleRowSelection: Q,
    _toggleAllSelection: ee,
    toggleAllSelection: null,
    updateSelectionByRowKey: se,
    updateAllSelected: le,
    updateFilters: re,
    updateCurrentRow: z,
    updateSort: Se,
    execFilter: fe,
    execSort: Ce,
    execQuery: We,
    clearFilter: lt,
    clearSort: Fe,
    toggleRowExpansion: rt,
    setExpandRowKeysAdapter: (j) => {
      Ge(j), Je(j);
    },
    setCurrentRowKey: te,
    toggleRowExpansionAdapter: (j, E) => {
      u.value.some(({ type: R }) => R === "expand") ? rt(j, E) : wt(j, E);
    },
    isRowExpanded: Be,
    updateExpandRows: ft,
    updateCurrentRowData: at,
    loadOrToggle: Re,
    updateTreeData: pt,
    states: {
      tableSize: n,
      rowKey: o,
      data: l,
      _data: a,
      isComplex: r,
      _columns: i,
      originColumns: s,
      columns: u,
      fixedColumns: c,
      rightFixedColumns: p,
      leafColumns: f,
      fixedLeafColumns: m,
      rightFixedLeafColumns: d,
      leafColumnsLength: g,
      fixedLeafColumnsLength: b,
      rightFixedLeafColumnsLength: S,
      isAllSelected: y,
      selection: v,
      reserveSelection: h,
      selectOnIndeterminate: $,
      selectable: w,
      filters: C,
      filteredData: N,
      sortingColumn: H,
      sortProp: _,
      sortOrder: B,
      hoverRow: D,
      ...yt,
      ...Qe,
      ...Ae
    }
  };
}
function Vo(e, t) {
  return e.map((n) => {
    var o;
    return n.id === t.id ? t : ((o = n.children) != null && o.length && (n.children = Vo(n.children, t)), n);
  });
}
function Qa(e) {
  e.forEach((t) => {
    var n, o;
    t.no = (n = t.getColumnIndex) == null ? void 0 : n.call(t), (o = t.children) != null && o.length && Qa(t.children);
  }), e.sort((t, n) => t.no - n.no);
}
function Rm() {
  const e = be(), t = Mm();
  return {
    ns: ce("table"),
    ...t,
    mutations: {
      setData(r, i) {
        const s = O(r._data) !== i;
        r.data.value = i, r._data.value = i, e.store.execQuery(), e.store.updateCurrentRowData(), e.store.updateExpandRows(), e.store.updateTreeData(e.store.states.defaultExpandAll.value), O(r.reserveSelection) ? (e.store.assertRowKey(), e.store.updateSelectionByRowKey()) : s ? e.store.clearSelection() : e.store.cleanSelection(), e.store.updateAllSelected(), e.$ready && e.store.scheduleLayout();
      },
      insertColumn(r, i, s) {
        const u = O(r._columns);
        let c = [];
        s ? (s && !s.children && (s.children = []), s.children.push(i), c = Vo(u, s)) : (u.push(i), c = u), Qa(c), r._columns.value = c, i.type === "selection" && (r.selectable.value = i.selectable, r.reserveSelection.value = i.reserveSelection), e.$ready && (e.store.updateColumns(), e.store.scheduleLayout());
      },
      removeColumn(r, i, s) {
        const u = O(r._columns) || [];
        if (s)
          s.children.splice(s.children.findIndex((c) => c.id === i.id), 1), s.children.length === 0 && delete s.children, r._columns.value = Vo(u, s);
        else {
          const c = u.indexOf(i);
          c > -1 && (u.splice(c, 1), r._columns.value = u);
        }
        e.$ready && (e.store.updateColumns(), e.store.scheduleLayout());
      },
      sort(r, i) {
        const { prop: s, order: u, init: c } = i;
        if (s) {
          const p = O(r.columns).find((f) => f.property === s);
          p && (p.order = u, e.store.updateSort(p, s, u), e.store.commit("changeSortCondition", { init: c }));
        }
      },
      changeSortCondition(r, i) {
        const { sortingColumn: s, sortProp: u, sortOrder: c } = r;
        O(c) === null && (r.sortingColumn.value = null, r.sortProp.value = null);
        const p = { filter: !0 };
        e.store.execQuery(p), (!i || !(i.silent || i.init)) && e.emit("sort-change", {
          column: O(s),
          prop: O(u),
          order: O(c)
        }), e.store.updateTableScrollY();
      },
      filterChange(r, i) {
        const { column: s, values: u, silent: c } = i, p = e.store.updateFilters(s, u);
        e.store.execQuery(), c || e.emit("filter-change", p), e.store.updateTableScrollY();
      },
      toggleAllSelection() {
        e.store.toggleAllSelection();
      },
      rowSelectedChanged(r, i) {
        e.store.toggleRowSelection(i), e.store.updateAllSelected();
      },
      setHoverRow(r, i) {
        r.hoverRow.value = i;
      },
      setCurrentRow(r, i) {
        e.store.updateCurrentRow(i);
      }
    },
    commit: function(r, ...i) {
      const s = e.store.mutations;
      if (s[r])
        s[r].apply(e, [e.store.states].concat(i));
      else
        throw new Error(`Action not found: ${r}`);
    },
    updateTableScrollY: function() {
      he(() => e.layout.updateScrollY.apply(e.layout));
    }
  };
}
const $n = {
  rowKey: "rowKey",
  defaultExpandAll: "defaultExpandAll",
  selectOnIndeterminate: "selectOnIndeterminate",
  indent: "indent",
  lazy: "lazy",
  data: "data",
  ["treeProps.hasChildren"]: {
    key: "lazyColumnIdentifier",
    default: "hasChildren"
  },
  ["treeProps.children"]: {
    key: "childrenColumnName",
    default: "children"
  }
};
function Im(e, t) {
  if (!e)
    throw new Error("Table is required.");
  const n = Rm();
  return n.toggleAllSelection = on(n._toggleAllSelection, 10), Object.keys($n).forEach((o) => {
    Za(es(t, o), o, n);
  }), Hm(n, t), n;
}
function Hm(e, t) {
  Object.keys($n).forEach((n) => {
    J(() => es(t, n), (o) => {
      Za(o, n, e);
    });
  });
}
function Za(e, t, n) {
  let o = e, l = $n[t];
  typeof $n[t] == "object" && (l = l.key, o = o || $n[t].default), n.states[l].value = o;
}
function es(e, t) {
  if (t.includes(".")) {
    const n = t.split(".");
    let o = e;
    return n.forEach((l) => {
      o = o[l];
    }), o;
  } else
    return e[t];
}
class Fm {
  constructor(t) {
    this.observers = [], this.table = null, this.store = null, this.columns = [], this.fit = !0, this.showHeader = !0, this.height = T(null), this.scrollX = T(!1), this.scrollY = T(!1), this.bodyWidth = T(null), this.fixedWidth = T(null), this.rightFixedWidth = T(null), this.tableHeight = T(null), this.headerHeight = T(44), this.appendHeight = T(0), this.footerHeight = T(44), this.viewportHeight = T(null), this.bodyHeight = T(null), this.bodyScrollHeight = T(0), this.fixedBodyHeight = T(null), this.gutterWidth = 0;
    for (const n in t)
      Ut(t, n) && (Lr(this[n]) ? this[n].value = t[n] : this[n] = t[n]);
    if (!this.table)
      throw new Error("Table is required for Table Layout");
    if (!this.store)
      throw new Error("Store is required for Table Layout");
  }
  updateScrollY() {
    if (this.height.value === null)
      return !1;
    const n = this.table.refs.bodyWrapper;
    if (this.table.vnode.el && n) {
      let o = !0;
      const l = this.scrollY.value;
      return this.bodyHeight.value === null ? o = !1 : o = n.scrollHeight > this.bodyHeight.value, this.scrollY.value = o, l !== o;
    }
    return !1;
  }
  setHeight(t, n = "height") {
    if (!Oe)
      return;
    const o = this.table.vnode.el;
    if (t = jo(t), this.height.value = Number(t), !o && (t || t === 0))
      return he(() => this.setHeight(t, n));
    typeof t == "number" ? (o.style[n] = `${t}px`, this.updateElsHeight()) : typeof t == "string" && (o.style[n] = t, this.updateElsHeight());
  }
  setMaxHeight(t) {
    this.setHeight(t, "max-height");
  }
  getFlattenColumns() {
    const t = [];
    return this.table.store.states.columns.value.forEach((o) => {
      o.isColumnGroup ? t.push.apply(t, o.columns) : t.push(o);
    }), t;
  }
  updateElsHeight() {
    var t, n;
    if (!this.table.$ready)
      return he(() => this.updateElsHeight());
    const {
      tableWrapper: o,
      headerWrapper: l,
      appendWrapper: a,
      footerWrapper: r,
      tableHeader: i,
      tableBody: s
    } = this.table.refs;
    if (o && o.style.display === "none")
      return;
    const { tableLayout: u } = this.table.props;
    if (this.appendHeight.value = a ? a.offsetHeight : 0, this.showHeader && !l && u === "fixed")
      return;
    const c = i || null, p = this.headerDisplayNone(c), f = (l == null ? void 0 : l.offsetHeight) || 0, m = this.headerHeight.value = this.showHeader ? f : 0;
    if (this.showHeader && !p && f > 0 && (this.table.store.states.columns.value || []).length > 0 && m < 2)
      return he(() => this.updateElsHeight());
    const d = this.tableHeight.value = (n = (t = this.table) == null ? void 0 : t.vnode.el) == null ? void 0 : n.clientHeight, g = this.footerHeight.value = r ? r.offsetHeight : 0;
    this.height.value !== null && (this.bodyHeight.value === null && requestAnimationFrame(() => this.updateElsHeight()), this.bodyHeight.value = d - m - g + (r ? 1 : 0), this.bodyScrollHeight.value = s == null ? void 0 : s.scrollHeight), this.fixedBodyHeight.value = this.scrollX.value ? this.bodyHeight.value - this.gutterWidth : this.bodyHeight.value, this.viewportHeight.value = this.scrollX.value ? d - this.gutterWidth : d, this.updateScrollY(), this.notifyObservers("scrollable");
  }
  headerDisplayNone(t) {
    if (!t)
      return !0;
    let n = t;
    for (; n.tagName !== "DIV"; ) {
      if (getComputedStyle(n).display === "none")
        return !0;
      n = n.parentElement;
    }
    return !1;
  }
  updateColumnsWidth() {
    if (!Oe)
      return;
    const t = this.fit, n = this.table.vnode.el.clientWidth;
    let o = 0;
    const l = this.getFlattenColumns(), a = l.filter((s) => typeof s.width != "number");
    if (l.forEach((s) => {
      typeof s.width == "number" && s.realWidth && (s.realWidth = null);
    }), a.length > 0 && t) {
      if (l.forEach((s) => {
        o += Number(s.width || s.minWidth || 80);
      }), o <= n) {
        this.scrollX.value = !1;
        const s = n - o;
        if (a.length === 1)
          a[0].realWidth = Number(a[0].minWidth || 80) + s;
        else {
          const u = a.reduce((f, m) => f + Number(m.minWidth || 80), 0), c = s / u;
          let p = 0;
          a.forEach((f, m) => {
            if (m === 0)
              return;
            const d = Math.floor(Number(f.minWidth || 80) * c);
            p += d, f.realWidth = Number(f.minWidth || 80) + d;
          }), a[0].realWidth = Number(a[0].minWidth || 80) + s - p;
        }
      } else
        this.scrollX.value = !0, a.forEach((s) => {
          s.realWidth = Number(s.minWidth);
        });
      this.bodyWidth.value = Math.max(o, n), this.table.state.resizeState.value.width = this.bodyWidth.value;
    } else
      l.forEach((s) => {
        !s.width && !s.minWidth ? s.realWidth = 80 : s.realWidth = Number(s.width || s.minWidth), o += s.realWidth;
      }), this.scrollX.value = o > n, this.bodyWidth.value = o;
    const r = this.store.states.fixedColumns.value;
    if (r.length > 0) {
      let s = 0;
      r.forEach((u) => {
        s += Number(u.realWidth || u.width);
      }), this.fixedWidth.value = s;
    }
    const i = this.store.states.rightFixedColumns.value;
    if (i.length > 0) {
      let s = 0;
      i.forEach((u) => {
        s += Number(u.realWidth || u.width);
      }), this.rightFixedWidth.value = s;
    }
    this.notifyObservers("columns");
  }
  addObserver(t) {
    this.observers.push(t);
  }
  removeObserver(t) {
    const n = this.observers.indexOf(t);
    n !== -1 && this.observers.splice(n, 1);
  }
  notifyObservers(t) {
    this.observers.forEach((o) => {
      var l, a;
      switch (t) {
        case "columns":
          (l = o.state) == null || l.onColumnsChange(this);
          break;
        case "scrollable":
          (a = o.state) == null || a.onScrollableChange(this);
          break;
        default:
          throw new Error(`Table Layout don't have event ${t}.`);
      }
    });
  }
}
const { CheckboxGroup: Bm } = dn, _m = G({
  name: "ElTableFilterPanel",
  components: {
    ElCheckbox: dn,
    ElCheckboxGroup: Bm,
    ElScrollbar: rl,
    ElTooltip: Ma,
    ElIcon: Ye,
    ArrowDown: Ad,
    ArrowUp: ta
  },
  directives: { ClickOutside: Ra },
  props: {
    placement: {
      type: String,
      default: "bottom-start"
    },
    store: {
      type: Object
    },
    column: {
      type: Object
    },
    upDataColumn: {
      type: Function
    }
  },
  setup(e) {
    const t = be(), { t: n } = At(), o = ce("table-filter"), l = t == null ? void 0 : t.parent;
    l.filterPanels.value[e.column.id] || (l.filterPanels.value[e.column.id] = t);
    const a = T(!1), r = T(null), i = A(() => e.column && e.column.filters), s = A({
      get: () => {
        var h;
        return (((h = e.column) == null ? void 0 : h.filteredValue) || [])[0];
      },
      set: (h) => {
        u.value && (typeof h < "u" && h !== null ? u.value.splice(0, 1, h) : u.value.splice(0, 1));
      }
    }), u = A({
      get() {
        return e.column ? e.column.filteredValue || [] : [];
      },
      set(h) {
        e.column && e.upDataColumn("filteredValue", h);
      }
    }), c = A(() => e.column ? e.column.filterMultiple : !0), p = (h) => h.value === s.value, f = () => {
      a.value = !1;
    }, m = (h) => {
      h.stopPropagation(), a.value = !a.value;
    }, d = () => {
      a.value = !1;
    }, g = () => {
      y(u.value), f();
    }, b = () => {
      u.value = [], y(u.value), f();
    }, S = (h) => {
      s.value = h, y(typeof h < "u" && h !== null ? u.value : []), f();
    }, y = (h) => {
      e.store.commit("filterChange", {
        column: e.column,
        values: h
      }), e.store.updateAllSelected();
    };
    J(a, (h) => {
      e.column && e.upDataColumn("filterOpened", h);
    }, {
      immediate: !0
    });
    const v = A(() => {
      var h, $;
      return ($ = (h = r.value) == null ? void 0 : h.popperRef) == null ? void 0 : $.contentRef;
    });
    return {
      tooltipVisible: a,
      multiple: c,
      filteredValue: u,
      filterValue: s,
      filters: i,
      handleConfirm: g,
      handleReset: b,
      handleSelect: S,
      isActive: p,
      t: n,
      ns: o,
      showFilterPanel: m,
      hideFilterPanel: d,
      popperPaneRef: v,
      tooltip: r
    };
  }
}), Dm = { key: 0 }, xm = ["disabled"], Wm = ["label", "onClick"];
function jm(e, t, n, o, l, a) {
  const r = ae("el-checkbox"), i = ae("el-checkbox-group"), s = ae("el-scrollbar"), u = ae("arrow-up"), c = ae("arrow-down"), p = ae("el-icon"), f = ae("el-tooltip"), m = to("click-outside");
  return P(), Y(f, {
    ref: "tooltip",
    visible: e.tooltipVisible,
    "onUpdate:visible": t[5] || (t[5] = (d) => e.tooltipVisible = d),
    offset: 0,
    placement: e.placement,
    "show-arrow": !1,
    "stop-popper-mouse-event": !1,
    teleported: "",
    effect: "light",
    pure: "",
    "popper-class": e.ns.b(),
    persistent: ""
  }, {
    content: X(() => [
      e.multiple ? (P(), I("div", Dm, [
        V("div", {
          class: M(e.ns.e("content"))
        }, [
          me(s, {
            "wrap-class": e.ns.e("wrap")
          }, {
            default: X(() => [
              me(i, {
                modelValue: e.filteredValue,
                "onUpdate:modelValue": t[0] || (t[0] = (d) => e.filteredValue = d),
                class: M(e.ns.e("checkbox-group"))
              }, {
                default: X(() => [
                  (P(!0), I(He, null, qt(e.filters, (d) => (P(), Y(r, {
                    key: d.value,
                    label: d.value
                  }, {
                    default: X(() => [
                      Kt(ve(d.text), 1)
                    ]),
                    _: 2
                  }, 1032, ["label"]))), 128))
                ]),
                _: 1
              }, 8, ["modelValue", "class"])
            ]),
            _: 1
          }, 8, ["wrap-class"])
        ], 2),
        V("div", {
          class: M(e.ns.e("bottom"))
        }, [
          V("button", {
            class: M({ [e.ns.is("disabled")]: e.filteredValue.length === 0 }),
            disabled: e.filteredValue.length === 0,
            type: "button",
            onClick: t[1] || (t[1] = (...d) => e.handleConfirm && e.handleConfirm(...d))
          }, ve(e.t("el.table.confirmFilter")), 11, xm),
          V("button", {
            type: "button",
            onClick: t[2] || (t[2] = (...d) => e.handleReset && e.handleReset(...d))
          }, ve(e.t("el.table.resetFilter")), 1)
        ], 2)
      ])) : (P(), I("ul", {
        key: 1,
        class: M(e.ns.e("list"))
      }, [
        V("li", {
          class: M([
            e.ns.e("list-item"),
            {
              [e.ns.is("active")]: e.filterValue === void 0 || e.filterValue === null
            }
          ]),
          onClick: t[3] || (t[3] = (d) => e.handleSelect(null))
        }, ve(e.t("el.table.clearFilter")), 3),
        (P(!0), I(He, null, qt(e.filters, (d) => (P(), I("li", {
          key: d.value,
          class: M([e.ns.e("list-item"), e.ns.is("active", e.isActive(d))]),
          label: d.value,
          onClick: (g) => e.handleSelect(d.value)
        }, ve(d.text), 11, Wm))), 128))
      ], 2))
    ]),
    default: X(() => [
      ke((P(), I("span", {
        class: M([
          `${e.ns.namespace.value}-table__column-filter-trigger`,
          `${e.ns.namespace.value}-none-outline`
        ]),
        onClick: t[4] || (t[4] = (...d) => e.showFilterPanel && e.showFilterPanel(...d))
      }, [
        me(p, null, {
          default: X(() => [
            e.column.filterOpened ? (P(), Y(u, { key: 0 })) : (P(), Y(c, { key: 1 }))
          ]),
          _: 1
        })
      ], 2)), [
        [m, e.hideFilterPanel, e.popperPaneRef]
      ])
    ]),
    _: 1
  }, 8, ["visible", "placement", "popper-class"]);
}
var Vm = /* @__PURE__ */ ge(_m, [["render", jm], ["__file", "/home/runner/work/element-plus/element-plus/packages/components/table/src/filter-panel.vue"]]);
function ts(e) {
  const t = be();
  qo(() => {
    n.value.addObserver(t);
  }), Ue(() => {
    o(n.value), l(n.value);
  }), Zn(() => {
    o(n.value), l(n.value);
  }), Ko(() => {
    n.value.removeObserver(t);
  });
  const n = A(() => {
    const a = e.layout;
    if (!a)
      throw new Error("Can not find table layout.");
    return a;
  }), o = (a) => {
    var r;
    const i = ((r = e.vnode.el) == null ? void 0 : r.querySelectorAll("colgroup > col")) || [];
    if (!i.length)
      return;
    const s = a.getFlattenColumns(), u = {};
    s.forEach((c) => {
      u[c.id] = c;
    });
    for (let c = 0, p = i.length; c < p; c++) {
      const f = i[c], m = f.getAttribute("name"), d = u[m];
      d && f.setAttribute("width", d.realWidth || d.width);
    }
  }, l = (a) => {
    var r, i;
    const s = ((r = e.vnode.el) == null ? void 0 : r.querySelectorAll("colgroup > col[name=gutter]")) || [];
    for (let c = 0, p = s.length; c < p; c++)
      s[c].setAttribute("width", a.scrollY.value ? a.gutterWidth : "0");
    const u = ((i = e.vnode.el) == null ? void 0 : i.querySelectorAll("th.gutter")) || [];
    for (let c = 0, p = u.length; c < p; c++) {
      const f = u[c];
      f.style.width = a.scrollY.value ? `${a.gutterWidth}px` : "0", f.style.display = a.scrollY.value ? "" : "none";
    }
  };
  return {
    tableLayout: n.value,
    onColumnsChange: o,
    onScrollableChange: l
  };
}
const bt = Symbol("ElTable");
function Km(e, t) {
  const n = be(), o = ue(bt), l = (g) => {
    g.stopPropagation();
  }, a = (g, b) => {
    !b.filters && b.sortable ? d(g, b, !1) : b.filterable && !b.sortable && l(g), o == null || o.emit("header-click", b, g);
  }, r = (g, b) => {
    o == null || o.emit("header-contextmenu", b, g);
  }, i = T(null), s = T(!1), u = T({}), c = (g, b) => {
    if (!!Oe && !(b.children && b.children.length > 0) && i.value && e.border) {
      s.value = !0;
      const S = o;
      t("set-drag-visible", !0);
      const v = (S == null ? void 0 : S.vnode.el).getBoundingClientRect().left, h = n.vnode.el.querySelector(`th.${b.id}`), $ = h.getBoundingClientRect(), w = $.left - v + 30;
      ea(h, "noclick"), u.value = {
        startMouseLeft: g.clientX,
        startLeft: $.right - v,
        startColumnLeft: $.left - v,
        tableLeft: v
      };
      const C = S == null ? void 0 : S.refs.resizeProxy;
      C.style.left = `${u.value.startLeft}px`, document.onselectstart = function() {
        return !1;
      }, document.ondragstart = function() {
        return !1;
      };
      const N = (_) => {
        const B = _.clientX - u.value.startMouseLeft, D = u.value.startLeft + B;
        C.style.left = `${Math.max(w, D)}px`;
      }, H = () => {
        if (s.value) {
          const { startColumnLeft: _, startLeft: B } = u.value, W = Number.parseInt(C.style.left, 10) - _;
          b.width = b.realWidth = W, S == null || S.emit("header-dragend", b.width, B - _, b, g), requestAnimationFrame(() => {
            e.store.scheduleLayout(!1, !0);
          }), document.body.style.cursor = "", s.value = !1, i.value = null, u.value = {}, t("set-drag-visible", !1);
        }
        document.removeEventListener("mousemove", N), document.removeEventListener("mouseup", H), document.onselectstart = null, document.ondragstart = null, setTimeout(() => {
          No(h, "noclick");
        }, 0);
      };
      document.addEventListener("mousemove", N), document.addEventListener("mouseup", H);
    }
  }, p = (g, b) => {
    if (b.children && b.children.length > 0)
      return;
    let S = g.target;
    for (; S && S.tagName !== "TH"; )
      S = S.parentNode;
    if (!(!b || !b.resizable) && !s.value && e.border) {
      const y = S.getBoundingClientRect(), v = document.body.style;
      y.width > 12 && y.right - g.pageX < 8 ? (v.cursor = "col-resize", Bn(S, "is-sortable") && (S.style.cursor = "col-resize"), i.value = b) : s.value || (v.cursor = "", Bn(S, "is-sortable") && (S.style.cursor = "pointer"), i.value = null);
    }
  }, f = () => {
    !Oe || (document.body.style.cursor = "");
  }, m = ({ order: g, sortOrders: b }) => {
    if (g === "")
      return b[0];
    const S = b.indexOf(g || null);
    return b[S > b.length - 2 ? 0 : S + 1];
  }, d = (g, b, S) => {
    g.stopPropagation();
    const y = b.order === S ? null : S || m(b);
    let v = g.target;
    for (; v && v.tagName !== "TH"; )
      v = v.parentNode;
    if (v && v.tagName === "TH" && Bn(v, "noclick")) {
      No(v, "noclick");
      return;
    }
    if (!b.sortable)
      return;
    const h = e.store.states;
    let $ = h.sortProp.value, w;
    const C = h.sortingColumn.value;
    (C !== b || C === b && C.order === null) && (C && (C.order = null), h.sortingColumn.value = b, $ = b.property), y ? w = b.order = y : w = b.order = null, h.sortProp.value = $, h.sortOrder.value = w, o == null || o.store.commit("changeSortCondition");
  };
  return {
    handleHeaderClick: a,
    handleHeaderContextMenu: r,
    handleMouseDown: c,
    handleMouseMove: p,
    handleMouseOut: f,
    handleSortClick: d,
    handleFilterClick: l
  };
}
function qm(e) {
  const t = ue(bt), n = ce("table");
  return {
    getHeaderRowStyle: (i) => {
      const s = t == null ? void 0 : t.props.headerRowStyle;
      return typeof s == "function" ? s.call(null, { rowIndex: i }) : s;
    },
    getHeaderRowClass: (i) => {
      const s = [], u = t == null ? void 0 : t.props.headerRowClassName;
      return typeof u == "string" ? s.push(u) : typeof u == "function" && s.push(u.call(null, { rowIndex: i })), s.join(" ");
    },
    getHeaderCellStyle: (i, s, u, c) => {
      var p;
      let f = (p = t == null ? void 0 : t.props.headerCellStyle) != null ? p : {};
      typeof f == "function" && (f = f.call(null, {
        rowIndex: i,
        columnIndex: s,
        row: u,
        column: c
      }));
      const m = c.isSubColumn ? null : Cl(s, c.fixed, e.store, u);
      return fn(m, "left"), fn(m, "right"), Object.assign({}, f, m);
    },
    getHeaderCellClass: (i, s, u, c) => {
      const p = c.isSubColumn ? [] : wl(n.b(), s, c.fixed, e.store, u), f = [
        c.id,
        c.order,
        c.headerAlign,
        c.className,
        c.labelClassName,
        ...p
      ];
      c.children || f.push("is-leaf"), c.sortable && f.push("is-sortable");
      const m = t == null ? void 0 : t.props.headerCellClassName;
      return typeof m == "string" ? f.push(m) : typeof m == "function" && f.push(m.call(null, {
        rowIndex: i,
        columnIndex: s,
        row: u,
        column: c
      })), f.push(n.e("cell")), f.filter((d) => Boolean(d)).join(" ");
    }
  };
}
const ns = (e) => {
  const t = [];
  return e.forEach((n) => {
    n.children ? (t.push(n), t.push.apply(t, ns(n.children))) : t.push(n);
  }), t;
}, Um = (e) => {
  let t = 1;
  const n = (a, r) => {
    if (r && (a.level = r.level + 1, t < a.level && (t = a.level)), a.children) {
      let i = 0;
      a.children.forEach((s) => {
        n(s, a), i += s.colSpan;
      }), a.colSpan = i;
    } else
      a.colSpan = 1;
  };
  e.forEach((a) => {
    a.level = 1, n(a, void 0);
  });
  const o = [];
  for (let a = 0; a < t; a++)
    o.push([]);
  return ns(e).forEach((a) => {
    a.children ? (a.rowSpan = 1, a.children.forEach((r) => r.isSubColumn = !0)) : a.rowSpan = t - a.level + 1, o[a.level - 1].push(a);
  }), o;
};
function Gm(e) {
  const t = ue(bt), n = A(() => Um(e.store.states.originColumns.value));
  return {
    isGroup: A(() => {
      const a = n.value.length > 1;
      return a && t && (t.state.isGroup.value = !0), a;
    }),
    toggleAllSelection: (a) => {
      a.stopPropagation(), t == null || t.store.commit("toggleAllSelection");
    },
    columnRows: n
  };
}
var Ym = G({
  name: "ElTableHeader",
  components: {
    ElCheckbox: dn
  },
  props: {
    fixed: {
      type: String,
      default: ""
    },
    store: {
      required: !0,
      type: Object
    },
    border: Boolean,
    defaultSort: {
      type: Object,
      default: () => ({
        prop: "",
        order: ""
      })
    }
  },
  setup(e, { emit: t }) {
    const n = be(), o = ue(bt), l = ce("table"), a = T({}), { onColumnsChange: r, onScrollableChange: i } = ts(o);
    Ue(async () => {
      await he(), await he();
      const { prop: w, order: C } = e.defaultSort;
      o == null || o.store.commit("sort", { prop: w, order: C, init: !0 });
    });
    const {
      handleHeaderClick: s,
      handleHeaderContextMenu: u,
      handleMouseDown: c,
      handleMouseMove: p,
      handleMouseOut: f,
      handleSortClick: m,
      handleFilterClick: d
    } = Km(e, t), {
      getHeaderRowStyle: g,
      getHeaderRowClass: b,
      getHeaderCellStyle: S,
      getHeaderCellClass: y
    } = qm(e), { isGroup: v, toggleAllSelection: h, columnRows: $ } = Gm(e);
    return n.state = {
      onColumnsChange: r,
      onScrollableChange: i
    }, n.filterPanels = a, {
      ns: l,
      filterPanels: a,
      onColumnsChange: r,
      onScrollableChange: i,
      columnRows: $,
      getHeaderRowClass: b,
      getHeaderRowStyle: g,
      getHeaderCellClass: y,
      getHeaderCellStyle: S,
      handleHeaderClick: s,
      handleHeaderContextMenu: u,
      handleMouseDown: c,
      handleMouseMove: p,
      handleMouseOut: f,
      handleSortClick: m,
      handleFilterClick: d,
      isGroup: v,
      toggleAllSelection: h
    };
  },
  render() {
    const {
      ns: e,
      isGroup: t,
      columnRows: n,
      getHeaderCellStyle: o,
      getHeaderCellClass: l,
      getHeaderRowClass: a,
      getHeaderRowStyle: r,
      handleHeaderClick: i,
      handleHeaderContextMenu: s,
      handleMouseDown: u,
      handleMouseMove: c,
      handleSortClick: p,
      handleMouseOut: f,
      store: m,
      $parent: d
    } = this;
    let g = 1;
    return Z("thead", {
      class: { [e.is("group")]: t }
    }, n.map((b, S) => Z("tr", {
      class: a(S),
      key: S,
      style: r(S)
    }, b.map((y, v) => (y.rowSpan > g && (g = y.rowSpan), Z("th", {
      class: l(S, v, b, y),
      colspan: y.colSpan,
      key: `${y.id}-thead`,
      rowspan: y.rowSpan,
      style: o(S, v, b, y),
      onClick: (h) => i(h, y),
      onContextmenu: (h) => s(h, y),
      onMousedown: (h) => u(h, y),
      onMousemove: (h) => c(h, y),
      onMouseout: f
    }, [
      Z("div", {
        class: [
          "cell",
          y.filteredValue && y.filteredValue.length > 0 ? "highlight" : "",
          y.labelClassName
        ]
      }, [
        y.renderHeader ? y.renderHeader({
          column: y,
          $index: v,
          store: m,
          _self: d
        }) : y.label,
        y.sortable && Z("span", {
          onClick: (h) => p(h, y),
          class: "caret-wrapper"
        }, [
          Z("i", {
            onClick: (h) => p(h, y, "ascending"),
            class: "sort-caret ascending"
          }),
          Z("i", {
            onClick: (h) => p(h, y, "descending"),
            class: "sort-caret descending"
          })
        ]),
        y.filterable && Z(Vm, {
          store: m,
          placement: y.filterPlacement || "bottom-start",
          column: y,
          upDataColumn: (h, $) => {
            y[h] = $;
          }
        })
      ])
    ]))))));
  }
});
function Xm(e) {
  const t = ue(bt), n = T(""), o = T(Z("div")), l = (f, m, d) => {
    var g;
    const b = t, S = wo(f);
    let y;
    const v = (g = b == null ? void 0 : b.vnode.el) == null ? void 0 : g.dataset.prefix;
    S && (y = Tr({
      columns: e.store.states.columns.value
    }, S, v), y && (b == null || b.emit(`cell-${d}`, m, y, S, f))), b == null || b.emit(`row-${d}`, m, y, f);
  }, a = (f, m) => {
    l(f, m, "dblclick");
  }, r = (f, m) => {
    e.store.commit("setCurrentRow", m), l(f, m, "click");
  }, i = (f, m) => {
    l(f, m, "contextmenu");
  }, s = on((f) => {
    e.store.commit("setHoverRow", f);
  }, 30), u = on(() => {
    e.store.commit("setHoverRow", null);
  }, 30);
  return {
    handleDoubleClick: a,
    handleClick: r,
    handleContextMenu: i,
    handleMouseEnter: s,
    handleMouseLeave: u,
    handleCellMouseEnter: (f, m) => {
      var d;
      const g = t, b = wo(f), S = (d = g == null ? void 0 : g.vnode.el) == null ? void 0 : d.dataset.prefix;
      if (b) {
        const w = Tr({
          columns: e.store.states.columns.value
        }, b, S), C = g.hoverState = { cell: b, column: w, row: m };
        g == null || g.emit("cell-mouse-enter", C.row, C.column, C.cell, f);
      }
      const y = f.target.querySelector(".cell");
      if (!(Bn(y, `${S}-tooltip`) && y.childNodes.length))
        return;
      const v = document.createRange();
      v.setStart(y, 0), v.setEnd(y, y.childNodes.length);
      const h = v.getBoundingClientRect().width, $ = (Number.parseInt(Ql(y, "paddingLeft"), 10) || 0) + (Number.parseInt(Ql(y, "paddingRight"), 10) || 0);
      (h + $ > y.offsetWidth || y.scrollWidth > y.offsetWidth) && Am(b, b.innerText || b.textContent, {
        placement: "top",
        strategy: "fixed"
      }, m.tooltipEffect);
    },
    handleCellMouseLeave: (f) => {
      if (!wo(f))
        return;
      const d = t == null ? void 0 : t.hoverState;
      t == null || t.emit("cell-mouse-leave", d == null ? void 0 : d.row, d == null ? void 0 : d.column, d == null ? void 0 : d.cell, f);
    },
    tooltipContent: n,
    tooltipTrigger: o
  };
}
function Jm(e) {
  const t = ue(bt), n = ce("table");
  return {
    getRowStyle: (u, c) => {
      const p = t == null ? void 0 : t.props.rowStyle;
      return typeof p == "function" ? p.call(null, {
        row: u,
        rowIndex: c
      }) : p || null;
    },
    getRowClass: (u, c) => {
      const p = [n.e("row")];
      (t == null ? void 0 : t.props.highlightCurrentRow) && u === e.store.states.currentRow.value && p.push("current-row"), e.stripe && c % 2 === 1 && p.push(n.em("row", "striped"));
      const f = t == null ? void 0 : t.props.rowClassName;
      return typeof f == "string" ? p.push(f) : typeof f == "function" && p.push(f.call(null, {
        row: u,
        rowIndex: c
      })), p;
    },
    getCellStyle: (u, c, p, f) => {
      const m = t == null ? void 0 : t.props.cellStyle;
      let d = m != null ? m : {};
      typeof m == "function" && (d = m.call(null, {
        rowIndex: u,
        columnIndex: c,
        row: p,
        column: f
      }));
      const g = f.isSubColumn ? null : Cl(c, e == null ? void 0 : e.fixed, e.store);
      return fn(g, "left"), fn(g, "right"), Object.assign({}, d, g);
    },
    getCellClass: (u, c, p, f) => {
      const m = f.isSubColumn ? [] : wl(n.b(), c, e == null ? void 0 : e.fixed, e.store), d = [f.id, f.align, f.className, ...m], g = t == null ? void 0 : t.props.cellClassName;
      return typeof g == "string" ? d.push(g) : typeof g == "function" && d.push(g.call(null, {
        rowIndex: u,
        columnIndex: c,
        row: p,
        column: f
      })), d.push(n.e("cell")), d.filter((b) => Boolean(b)).join(" ");
    },
    getSpan: (u, c, p, f) => {
      let m = 1, d = 1;
      const g = t == null ? void 0 : t.props.spanMethod;
      if (typeof g == "function") {
        const b = g({
          row: u,
          column: c,
          rowIndex: p,
          columnIndex: f
        });
        Array.isArray(b) ? (m = b[0], d = b[1]) : typeof b == "object" && (m = b.rowspan, d = b.colspan);
      }
      return { rowspan: m, colspan: d };
    },
    getColspanRealWidth: (u, c, p) => {
      if (c < 1)
        return u[p].realWidth;
      const f = u.map(({ realWidth: m, width: d }) => m || d).slice(p, p + c);
      return Number(f.reduce((m, d) => Number(m) + Number(d), -1));
    }
  };
}
function Qm(e) {
  const t = ue(bt), {
    handleDoubleClick: n,
    handleClick: o,
    handleContextMenu: l,
    handleMouseEnter: a,
    handleMouseLeave: r,
    handleCellMouseEnter: i,
    handleCellMouseLeave: s,
    tooltipContent: u,
    tooltipTrigger: c
  } = Xm(e), {
    getRowStyle: p,
    getRowClass: f,
    getCellStyle: m,
    getCellClass: d,
    getSpan: g,
    getColspanRealWidth: b
  } = Jm(e), S = A(() => e.store.states.columns.value.findIndex(({ type: w }) => w === "default")), y = (w, C) => {
    const N = t.props.rowKey;
    return N ? ze(w, N) : C;
  }, v = (w, C, N, H = !1) => {
    const { tooltipEffect: _, store: B } = e, { indent: D, columns: W } = B.states, K = f(w, C);
    let ne = !0;
    return N && (K.push(`el-table__row--level-${N.level}`), ne = N.display), Z("tr", {
      style: [ne ? null : {
        display: "none"
      }, p(w, C)],
      class: K,
      key: y(w, C),
      onDblclick: (U) => n(U, w),
      onClick: (U) => o(U, w),
      onContextmenu: (U) => l(U, w),
      onMouseenter: () => a(C),
      onMouseleave: r
    }, W.value.map((U, k) => {
      const { rowspan: F, colspan: Q } = g(w, U, C, k);
      if (!F || !Q)
        return null;
      const ee = { ...U };
      ee.realWidth = b(W.value, Q, k);
      const se = {
        store: e.store,
        _self: e.context || t,
        column: ee,
        row: w,
        $index: C,
        cellIndex: k,
        expanded: H
      };
      k === S.value && N && (se.treeNode = {
        indent: N.level * D.value,
        level: N.level
      }, typeof N.expanded == "boolean" && (se.treeNode.expanded = N.expanded, "loading" in N && (se.treeNode.loading = N.loading), "noLazyChildren" in N && (se.treeNode.noLazyChildren = N.noLazyChildren)));
      const le = `${C},${k}`, de = ee.columnKey || ee.rawColumnKey || "", re = h(k, U, se);
      return Z("td", {
        style: m(C, k, w, U),
        class: d(C, k, w, U),
        key: `${de}${le}`,
        rowspan: F,
        colspan: Q,
        onMouseenter: (Se) => i(Se, { ...w, tooltipEffect: _ }),
        onMouseleave: s
      }, [re]);
    }));
  }, h = (w, C, N) => C.renderCell(N);
  return {
    wrappedRowRender: (w, C) => {
      const N = e.store, { isRowExpanded: H, assertRowKey: _ } = N, { treeData: B, lazyTreeNodeMap: D, childrenColumnName: W, rowKey: K } = N.states, ne = N.states.columns.value;
      if (ne.some(({ type: U }) => U === "expand")) {
        const U = H(w), k = v(w, C, void 0, U), F = t.renderExpanded;
        return U ? F ? [
          [
            k,
            Z("tr", {
              key: `expanded-row__${k.key}`
            }, [
              Z("td", {
                colspan: ne.length,
                class: "el-table__cell el-table__expanded-cell"
              }, [F({ row: w, $index: C, store: N, expanded: U })])
            ])
          ]
        ] : (console.error("[Element Error]renderExpanded is required."), k) : [[k]];
      } else if (Object.keys(B.value).length) {
        _();
        const U = ze(w, K.value);
        let k = B.value[U], F = null;
        k && (F = {
          expanded: k.expanded,
          level: k.level,
          display: !0
        }, typeof k.lazy == "boolean" && (typeof k.loaded == "boolean" && k.loaded && (F.noLazyChildren = !(k.children && k.children.length)), F.loading = k.loading));
        const Q = [v(w, C, F)];
        if (k) {
          let ee = 0;
          const se = (de, re) => {
            !(de && de.length && re) || de.forEach((Se) => {
              const fe = {
                display: re.display && re.expanded,
                level: re.level + 1,
                expanded: !1,
                noLazyChildren: !1,
                loading: !1
              }, Ce = ze(Se, K.value);
              if (Ce == null)
                throw new Error("For nested data item, row-key is required.");
              if (k = { ...B.value[Ce] }, k && (fe.expanded = k.expanded, k.level = k.level || fe.level, k.display = !!(k.expanded && fe.display), typeof k.lazy == "boolean" && (typeof k.loaded == "boolean" && k.loaded && (fe.noLazyChildren = !(k.children && k.children.length)), fe.loading = k.loading)), ee++, Q.push(v(Se, C + ee, fe)), k) {
                const We = D.value[Ce] || Se[W.value];
                se(We, k);
              }
            });
          };
          k.display = !0;
          const le = D.value[U] || w[W.value];
          se(le, k);
        }
        return Q;
      } else
        return v(w, C, void 0);
    },
    tooltipContent: u,
    tooltipTrigger: c
  };
}
const Zm = {
  store: {
    required: !0,
    type: Object
  },
  stripe: Boolean,
  tooltipEffect: String,
  context: {
    default: () => ({}),
    type: Object
  },
  rowClassName: [String, Function],
  rowStyle: [Object, Function],
  fixed: {
    type: String,
    default: ""
  },
  highlight: Boolean
};
var eb = G({
  name: "ElTableBody",
  props: Zm,
  setup(e) {
    const t = be(), n = ue(bt), o = ce("table"), { wrappedRowRender: l, tooltipContent: a, tooltipTrigger: r } = Qm(e), { onColumnsChange: i, onScrollableChange: s } = ts(n);
    return J(e.store.states.hoverRow, (u, c) => {
      if (!e.store.states.isComplex.value || !Oe)
        return;
      let p = window.requestAnimationFrame;
      p || (p = (f) => window.setTimeout(f, 16)), p(() => {
        var f;
        const m = (f = t == null ? void 0 : t.vnode.el) == null ? void 0 : f.querySelectorAll(`.${o.e("row")}`), d = m[c], g = m[u];
        d && No(d, "hover-row"), g && ea(g, "hover-row");
      });
    }), Ko(() => {
      var u;
      (u = Qn) == null || u();
    }), Zn(() => {
      var u;
      (u = Qn) == null || u();
    }), {
      ns: o,
      onColumnsChange: i,
      onScrollableChange: s,
      wrappedRowRender: l,
      tooltipContent: a,
      tooltipTrigger: r
    };
  },
  render() {
    const { wrappedRowRender: e, store: t } = this, n = t.states.data.value || [];
    return Z("tbody", {}, [
      n.reduce((o, l) => o.concat(e(l, o.length)), [])
    ]);
  }
});
function Sl(e) {
  const t = e.tableLayout === "auto";
  let n = e.columns || [];
  t && n.every((l) => l.width === void 0) && (n = []);
  const o = (l) => {
    const a = {
      key: `${e.tableLayout}_${l.id}`,
      style: {},
      name: void 0
    };
    return t ? a.style = {
      width: `${l.width}px`
    } : a.name = l.id, a;
  };
  return Z("colgroup", {}, n.map((l) => Z("col", o(l))));
}
Sl.props = ["columns", "tableLayout"];
function tb() {
  const e = ue(bt), t = e == null ? void 0 : e.store, n = A(() => t.states.fixedLeafColumnsLength.value), o = A(() => t.states.rightFixedColumns.value.length), l = A(() => t.states.columns.value.length), a = A(() => t.states.fixedColumns.value.length), r = A(() => t.states.rightFixedColumns.value.length);
  return {
    leftFixedLeafCount: n,
    rightFixedLeafCount: o,
    columnsCount: l,
    leftFixedCount: a,
    rightFixedCount: r,
    columns: t.states.columns
  };
}
function nb(e) {
  const { columns: t } = tb(), n = ce("table");
  return {
    getCellClasses: (a, r) => {
      const i = a[r], s = [
        n.e("cell"),
        i.id,
        i.align,
        i.labelClassName,
        ...wl(n.b(), r, i.fixed, e.store)
      ];
      return i.className && s.push(i.className), i.children || s.push(n.is("leaf")), s;
    },
    getCellStyles: (a, r) => {
      const i = Cl(r, a.fixed, e.store);
      return fn(i, "left"), fn(i, "right"), i;
    },
    columns: t
  };
}
var ob = G({
  name: "ElTableFooter",
  props: {
    fixed: {
      type: String,
      default: ""
    },
    store: {
      required: !0,
      type: Object
    },
    summaryMethod: Function,
    sumText: String,
    border: Boolean,
    defaultSort: {
      type: Object,
      default: () => ({
        prop: "",
        order: ""
      })
    }
  },
  setup(e) {
    const { getCellClasses: t, getCellStyles: n, columns: o } = nb(e);
    return {
      ns: ce("table"),
      getCellClasses: t,
      getCellStyles: n,
      columns: o
    };
  },
  render() {
    const {
      columns: e,
      getCellStyles: t,
      getCellClasses: n,
      summaryMethod: o,
      sumText: l,
      ns: a
    } = this, r = this.store.states.data.value;
    let i = [];
    return o ? i = o({
      columns: e,
      data: r
    }) : e.forEach((s, u) => {
      if (u === 0) {
        i[u] = l;
        return;
      }
      const c = r.map((d) => Number(d[s.property])), p = [];
      let f = !0;
      c.forEach((d) => {
        if (!Number.isNaN(+d)) {
          f = !1;
          const g = `${d}`.split(".")[1];
          p.push(g ? g.length : 0);
        }
      });
      const m = Math.max.apply(null, p);
      f ? i[u] = "" : i[u] = c.reduce((d, g) => {
        const b = Number(g);
        return Number.isNaN(+b) ? d : Number.parseFloat((d + g).toFixed(Math.min(m, 20)));
      }, 0);
    }), Z("table", {
      class: a.e("footer"),
      cellspacing: "0",
      cellpadding: "0",
      border: "0"
    }, [
      Sl({
        columns: e
      }),
      Z("tbody", [
        Z("tr", {}, [
          ...e.map((s, u) => Z("td", {
            key: u,
            colspan: s.colSpan,
            rowspan: s.rowSpan,
            class: n(e, u),
            style: t(s, u)
          }, [
            Z("div", {
              class: ["cell", s.labelClassName]
            }, [i[u]])
          ]))
        ])
      ])
    ]);
  }
});
function lb(e) {
  return {
    setCurrentRow: (c) => {
      e.commit("setCurrentRow", c);
    },
    getSelectionRows: () => e.getSelectionRows(),
    toggleRowSelection: (c, p) => {
      e.toggleRowSelection(c, p, !1), e.updateAllSelected();
    },
    clearSelection: () => {
      e.clearSelection();
    },
    clearFilter: (c) => {
      e.clearFilter(c);
    },
    toggleAllSelection: () => {
      e.commit("toggleAllSelection");
    },
    toggleRowExpansion: (c, p) => {
      e.toggleRowExpansionAdapter(c, p);
    },
    clearSort: () => {
      e.clearSort();
    },
    sort: (c, p) => {
      e.commit("sort", { prop: c, order: p });
    }
  };
}
function rb(e, t, n, o) {
  const l = T(!1), a = T(null), r = T(!1), i = (k) => {
    r.value = k;
  }, s = T({
    width: null,
    height: null
  }), u = T(!1), c = {
    display: "inline-block",
    verticalAlign: "middle"
  }, p = T();
  tn(() => {
    t.setHeight(e.height);
  }), tn(() => {
    t.setMaxHeight(e.maxHeight);
  }), J(() => [e.currentRowKey, n.states.rowKey], ([k, F]) => {
    !O(F) || n.setCurrentRowKey(`${k}`);
  }, {
    immediate: !0
  }), J(() => e.data, (k) => {
    o.store.commit("setData", k);
  }, {
    immediate: !0,
    deep: !0
  }), tn(() => {
    e.expandRowKeys && n.setExpandRowKeysAdapter(e.expandRowKeys);
  });
  const f = () => {
    o.store.commit("setHoverRow", null), o.hoverState && (o.hoverState = null);
  }, m = (k, F) => {
    const { pixelX: Q, pixelY: ee } = F;
    Math.abs(Q) >= Math.abs(ee) && (o.refs.bodyWrapper.scrollLeft += F.pixelX / 5);
  }, d = A(() => e.height || e.maxHeight || n.states.fixedColumns.value.length > 0 || n.states.rightFixedColumns.value.length > 0), g = A(() => ({
    width: t.bodyWidth.value ? `${t.bodyWidth.value}px` : ""
  })), b = () => {
    d.value && t.updateElsHeight(), t.updateColumnsWidth(), requestAnimationFrame(h);
  };
  Ue(async () => {
    await he(), n.updateColumns(), $(), requestAnimationFrame(b), s.value = {
      width: p.value = o.vnode.el.offsetWidth,
      height: o.vnode.el.offsetHeight
    }, n.states.columns.value.forEach((k) => {
      k.filteredValue && k.filteredValue.length && o.store.commit("filterChange", {
        column: k,
        values: k.filteredValue,
        silent: !0
      });
    }), o.$ready = !0;
  });
  const S = (k, F) => {
    if (!k)
      return;
    const Q = Array.from(k.classList).filter((ee) => !ee.startsWith("is-scrolling-"));
    Q.push(t.scrollX.value ? F : "is-scrolling-none"), k.className = Q.join(" ");
  }, y = (k) => {
    const { tableWrapper: F } = o.refs;
    S(F, k);
  }, v = (k) => {
    const { tableWrapper: F } = o.refs;
    return !!(F && F.classList.contains(k));
  }, h = function() {
    if (!o.refs.scrollBarRef)
      return;
    if (!t.scrollX.value) {
      const re = "is-scrolling-none";
      v(re) || y(re);
      return;
    }
    const k = o.refs.scrollBarRef.wrap$;
    if (!k)
      return;
    const { scrollLeft: F, offsetWidth: Q, scrollWidth: ee } = k, { headerWrapper: se, footerWrapper: le } = o.refs;
    se && (se.scrollLeft = F), le && (le.scrollLeft = F);
    const de = ee - Q - 1;
    F >= de ? y("is-scrolling-right") : y(F === 0 ? "is-scrolling-left" : "is-scrolling-middle");
  }, $ = () => {
    var k;
    !o.refs.scrollBarRef || ((k = o.refs.scrollBarRef.wrap$) == null || k.addEventListener("scroll", h, {
      passive: !0
    }), e.fit ? Jo(o.vnode.el, C) : Un(window, "resize", b));
  };
  Ot(() => {
    w();
  });
  const w = () => {
    var k;
    (k = o.refs.scrollBarRef.wrap$) == null || k.removeEventListener("scroll", h, !0), e.fit ? Qo(o.vnode.el, C) : Gn(window, "resize", b);
  }, C = () => {
    if (!o.$ready)
      return;
    let k = !1;
    const F = o.vnode.el, { width: Q, height: ee } = s.value, se = p.value = F.offsetWidth;
    Q !== se && (k = !0);
    const le = F.offsetHeight;
    (e.height || d.value) && ee !== le && (k = !0), k && (s.value = {
      width: se,
      height: le
    }, b());
  }, N = Jt(), H = A(() => {
    const { bodyWidth: k, scrollY: F, gutterWidth: Q } = t;
    return k.value ? `${k.value - (F.value ? Q : 0)}px` : "";
  }), _ = A(() => e.maxHeight ? "fixed" : e.tableLayout);
  function B(k, F, Q) {
    const ee = jo(k), se = e.showHeader ? Q : 0;
    if (ee !== null)
      return Wt(ee) ? `calc(${ee} - ${F}px - ${se}px)` : ee - F - se;
  }
  const D = A(() => {
    const k = t.headerHeight.value || 0, F = t.bodyHeight.value, Q = t.footerHeight.value || 0;
    if (e.height)
      return F || void 0;
    if (e.maxHeight)
      return B(e.maxHeight, Q, k);
  }), W = A(() => {
    const k = t.headerHeight.value || 0, F = t.bodyHeight.value, Q = t.footerHeight.value || 0;
    if (e.height)
      return {
        height: F ? `${F}px` : ""
      };
    if (e.maxHeight) {
      const ee = B(e.maxHeight, Q, k);
      if (ee !== null)
        return {
          "max-height": `${ee}${ut(ee) ? "px" : ""}`
        };
    }
    return {};
  }), K = A(() => {
    if (e.data && e.data.length)
      return null;
    let k = "100%";
    return t.appendHeight.value && (k = `calc(100% - ${t.appendHeight.value}px)`), {
      width: p.value ? `${p.value}px` : "",
      height: k
    };
  }), ne = (k, F) => {
    const Q = o.refs.bodyWrapper;
    if (Math.abs(F.spinY) > 0) {
      const ee = Q.scrollTop;
      F.pixelY < 0 && ee !== 0 && k.preventDefault(), F.pixelY > 0 && Q.scrollHeight - Q.clientHeight > ee && k.preventDefault(), Q.scrollTop += Math.ceil(F.pixelY / 5);
    } else
      Q.scrollLeft += Math.ceil(F.pixelX / 5);
  }, oe = A(() => e.maxHeight ? e.showSummary ? {
    bottom: 0
  } : {
    bottom: t.scrollX.value && e.data.length ? `${t.gutterWidth}px` : ""
  } : e.showSummary ? {
    height: t.tableHeight.value ? `${t.tableHeight.value}px` : ""
  } : {
    height: t.viewportHeight.value ? `${t.viewportHeight.value}px` : ""
  }), U = A(() => {
    if (e.height)
      return {
        height: t.fixedBodyHeight.value ? `${t.fixedBodyHeight.value}px` : ""
      };
    if (e.maxHeight) {
      let k = jo(e.maxHeight);
      if (typeof k == "number")
        return k = t.scrollX.value ? k - t.gutterWidth : k, e.showHeader && (k -= t.headerHeight.value), k -= t.footerHeight.value, {
          "max-height": `${k}px`
        };
    }
    return {};
  });
  return {
    isHidden: l,
    renderExpanded: a,
    setDragVisible: i,
    isGroup: u,
    handleMouseLeave: f,
    handleHeaderFooterMousewheel: m,
    tableSize: N,
    bodyHeight: W,
    height: D,
    emptyBlockStyle: K,
    handleFixedMousewheel: ne,
    fixedHeight: oe,
    fixedBodyHeight: U,
    resizeProxyVisible: r,
    bodyWidth: H,
    resizeState: s,
    doLayout: b,
    tableBodyStyles: g,
    tableLayout: _,
    scrollbarViewStyle: c
  };
}
var ab = {
  data: {
    type: Array,
    default: () => []
  },
  size: String,
  width: [String, Number],
  height: [String, Number],
  maxHeight: [String, Number],
  fit: {
    type: Boolean,
    default: !0
  },
  stripe: Boolean,
  border: Boolean,
  rowKey: [String, Function],
  showHeader: {
    type: Boolean,
    default: !0
  },
  showSummary: Boolean,
  sumText: String,
  summaryMethod: Function,
  rowClassName: [String, Function],
  rowStyle: [Object, Function],
  cellClassName: [String, Function],
  cellStyle: [Object, Function],
  headerRowClassName: [String, Function],
  headerRowStyle: [Object, Function],
  headerCellClassName: [String, Function],
  headerCellStyle: [Object, Function],
  highlightCurrentRow: Boolean,
  currentRowKey: [String, Number],
  emptyText: String,
  expandRowKeys: Array,
  defaultExpandAll: Boolean,
  defaultSort: Object,
  tooltipEffect: String,
  spanMethod: Function,
  selectOnIndeterminate: {
    type: Boolean,
    default: !0
  },
  indent: {
    type: Number,
    default: 16
  },
  treeProps: {
    type: Object,
    default: () => ({
      hasChildren: "hasChildren",
      children: "children"
    })
  },
  lazy: Boolean,
  load: Function,
  style: {
    type: Object,
    default: () => ({})
  },
  className: {
    type: String,
    default: ""
  },
  tableLayout: {
    type: String,
    default: "fixed"
  },
  scrollbarAlwaysOn: {
    type: Boolean,
    default: !1
  }
};
const sb = () => {
  const e = T(), t = (a, r) => {
    const i = e.value;
    i && i.scrollTo(a, r);
  }, n = (a, r) => {
    const i = e.value;
    i && ut(r) && ["Top", "Left"].includes(a) && i[`setScroll${a}`](r);
  };
  return {
    scrollBarRef: e,
    scrollTo: t,
    setScrollTop: (a) => n("Top", a),
    setScrollLeft: (a) => n("Left", a)
  };
};
let ib = 1;
const ub = G({
  name: "ElTable",
  directives: {
    Mousewheel: qv
  },
  components: {
    TableHeader: Ym,
    TableBody: eb,
    TableFooter: ob,
    ElScrollbar: rl,
    hColgroup: Sl
  },
  props: ab,
  emits: [
    "select",
    "select-all",
    "selection-change",
    "cell-mouse-enter",
    "cell-mouse-leave",
    "cell-contextmenu",
    "cell-click",
    "cell-dblclick",
    "row-click",
    "row-contextmenu",
    "row-dblclick",
    "header-click",
    "header-contextmenu",
    "sort-change",
    "filter-change",
    "current-change",
    "header-dragend",
    "expand-change"
  ],
  setup(e) {
    const { t } = At(), n = ce("table"), o = be();
    tt(bt, o);
    const l = Im(o, e);
    o.store = l;
    const a = new Fm({
      store: o.store,
      table: o,
      fit: e.fit,
      showHeader: e.showHeader
    });
    o.layout = a;
    const r = A(() => (l.states.data.value || []).length === 0), {
      setCurrentRow: i,
      getSelectionRows: s,
      toggleRowSelection: u,
      clearSelection: c,
      clearFilter: p,
      toggleAllSelection: f,
      toggleRowExpansion: m,
      clearSort: d,
      sort: g
    } = lb(l), {
      isHidden: b,
      renderExpanded: S,
      setDragVisible: y,
      isGroup: v,
      handleMouseLeave: h,
      handleHeaderFooterMousewheel: $,
      tableSize: w,
      bodyHeight: C,
      height: N,
      emptyBlockStyle: H,
      handleFixedMousewheel: _,
      fixedHeight: B,
      fixedBodyHeight: D,
      resizeProxyVisible: W,
      bodyWidth: K,
      resizeState: ne,
      doLayout: oe,
      tableBodyStyles: U,
      tableLayout: k,
      scrollbarViewStyle: F
    } = rb(e, a, l, o), { scrollBarRef: Q, scrollTo: ee, setScrollLeft: se, setScrollTop: le } = sb(), de = on(oe, 50), re = `el-table_${ib++}`;
    o.tableId = re, o.state = {
      isGroup: v,
      resizeState: ne,
      doLayout: oe,
      debouncedUpdateLayout: de
    };
    const Se = A(() => e.sumText || t("el.table.sumText")), fe = A(() => e.emptyText || t("el.table.emptyText"));
    return {
      ns: n,
      layout: a,
      store: l,
      handleHeaderFooterMousewheel: $,
      handleMouseLeave: h,
      tableId: re,
      tableSize: w,
      isHidden: b,
      isEmpty: r,
      renderExpanded: S,
      resizeProxyVisible: W,
      resizeState: ne,
      isGroup: v,
      bodyWidth: K,
      bodyHeight: C,
      height: N,
      tableBodyStyles: U,
      emptyBlockStyle: H,
      debouncedUpdateLayout: de,
      handleFixedMousewheel: _,
      fixedHeight: B,
      fixedBodyHeight: D,
      setCurrentRow: i,
      getSelectionRows: s,
      toggleRowSelection: u,
      clearSelection: c,
      clearFilter: p,
      toggleAllSelection: f,
      toggleRowExpansion: m,
      clearSort: d,
      doLayout: oe,
      sort: g,
      t,
      setDragVisible: y,
      context: o,
      computedSumText: Se,
      computedEmptyText: fe,
      tableLayout: k,
      scrollbarViewStyle: F,
      scrollBarRef: Q,
      scrollTo: ee,
      setScrollLeft: se,
      setScrollTop: le
    };
  }
}), cb = ["data-prefix"], db = {
  ref: "hiddenColumns",
  class: "hidden-columns"
};
function fb(e, t, n, o, l, a) {
  const r = ae("hColgroup"), i = ae("table-header"), s = ae("table-body"), u = ae("el-scrollbar"), c = ae("table-footer"), p = to("mousewheel");
  return P(), I("div", {
    ref: "tableWrapper",
    class: M([
      {
        [e.ns.m("fit")]: e.fit,
        [e.ns.m("striped")]: e.stripe,
        [e.ns.m("border")]: e.border || e.isGroup,
        [e.ns.m("hidden")]: e.isHidden,
        [e.ns.m("group")]: e.isGroup,
        [e.ns.m("fluid-height")]: e.maxHeight,
        [e.ns.m("scrollable-x")]: e.layout.scrollX.value,
        [e.ns.m("scrollable-y")]: e.layout.scrollY.value,
        [e.ns.m("enable-row-hover")]: !e.store.states.isComplex.value,
        [e.ns.m("enable-row-transition")]: (e.store.states.data.value || []).length !== 0 && (e.store.states.data.value || []).length < 100,
        "has-footer": e.showSummary
      },
      e.ns.m(e.tableSize),
      e.className,
      e.ns.b(),
      e.ns.m(`layout-${e.tableLayout}`)
    ]),
    style: Ee(e.style),
    "data-prefix": e.ns.namespace.value,
    onMouseleave: t[0] || (t[0] = (f) => e.handleMouseLeave())
  }, [
    V("div", {
      class: M(e.ns.e("inner-wrapper"))
    }, [
      V("div", db, [
        pe(e.$slots, "default")
      ], 512),
      e.showHeader && e.tableLayout === "fixed" ? ke((P(), I("div", {
        key: 0,
        ref: "headerWrapper",
        class: M(e.ns.e("header-wrapper"))
      }, [
        V("table", {
          ref: "tableHeader",
          class: M(e.ns.e("header")),
          style: Ee(e.tableBodyStyles),
          border: "0",
          cellpadding: "0",
          cellspacing: "0"
        }, [
          me(r, {
            columns: e.store.states.columns.value,
            "table-layout": e.tableLayout
          }, null, 8, ["columns", "table-layout"]),
          me(i, {
            ref: "tableHeaderRef",
            border: e.border,
            "default-sort": e.defaultSort,
            store: e.store,
            onSetDragVisible: e.setDragVisible
          }, null, 8, ["border", "default-sort", "store", "onSetDragVisible"])
        ], 6)
      ], 2)), [
        [p, e.handleHeaderFooterMousewheel]
      ]) : q("v-if", !0),
      V("div", {
        ref: "bodyWrapper",
        style: Ee(e.bodyHeight),
        class: M(e.ns.e("body-wrapper"))
      }, [
        me(u, {
          ref: "scrollBarRef",
          height: e.maxHeight ? void 0 : e.height,
          "max-height": e.maxHeight ? e.height : void 0,
          "view-style": e.scrollbarViewStyle,
          always: e.scrollbarAlwaysOn
        }, {
          default: X(() => [
            V("table", {
              ref: "tableBody",
              class: M(e.ns.e("body")),
              cellspacing: "0",
              cellpadding: "0",
              border: "0",
              style: Ee({
                width: e.bodyWidth,
                tableLayout: e.tableLayout
              })
            }, [
              me(r, {
                columns: e.store.states.columns.value,
                "table-layout": e.tableLayout
              }, null, 8, ["columns", "table-layout"]),
              e.showHeader && e.tableLayout === "auto" ? (P(), Y(i, {
                key: 0,
                border: e.border,
                "default-sort": e.defaultSort,
                store: e.store,
                onSetDragVisible: e.setDragVisible
              }, null, 8, ["border", "default-sort", "store", "onSetDragVisible"])) : q("v-if", !0),
              me(s, {
                context: e.context,
                highlight: e.highlightCurrentRow,
                "row-class-name": e.rowClassName,
                "tooltip-effect": e.tooltipEffect,
                "row-style": e.rowStyle,
                store: e.store,
                stripe: e.stripe
              }, null, 8, ["context", "highlight", "row-class-name", "tooltip-effect", "row-style", "store", "stripe"])
            ], 6),
            e.isEmpty ? (P(), I("div", {
              key: 0,
              ref: "emptyBlock",
              style: Ee(e.emptyBlockStyle),
              class: M(e.ns.e("empty-block"))
            }, [
              V("span", {
                class: M(e.ns.e("empty-text"))
              }, [
                pe(e.$slots, "empty", {}, () => [
                  Kt(ve(e.computedEmptyText), 1)
                ])
              ], 2)
            ], 6)) : q("v-if", !0),
            e.$slots.append ? (P(), I("div", {
              key: 1,
              ref: "appendWrapper",
              class: M(e.ns.e("append-wrapper"))
            }, [
              pe(e.$slots, "append")
            ], 2)) : q("v-if", !0)
          ]),
          _: 3
        }, 8, ["height", "max-height", "view-style", "always"])
      ], 6),
      e.border || e.isGroup ? (P(), I("div", {
        key: 1,
        class: M(e.ns.e("border-left-patch"))
      }, null, 2)) : q("v-if", !0)
    ], 2),
    e.showSummary ? ke((P(), I("div", {
      key: 0,
      ref: "footerWrapper",
      class: M(e.ns.e("footer-wrapper"))
    }, [
      me(c, {
        border: e.border,
        "default-sort": e.defaultSort,
        store: e.store,
        style: Ee(e.tableBodyStyles),
        "sum-text": e.computedSumText,
        "summary-method": e.summaryMethod
      }, null, 8, ["border", "default-sort", "store", "style", "sum-text", "summary-method"])
    ], 2)), [
      [Mt, !e.isEmpty],
      [p, e.handleHeaderFooterMousewheel]
    ]) : q("v-if", !0),
    ke(V("div", {
      ref: "resizeProxy",
      class: M(e.ns.e("column-resize-proxy"))
    }, null, 2), [
      [Mt, e.resizeProxyVisible]
    ])
  ], 46, cb);
}
var pb = /* @__PURE__ */ ge(ub, [["render", fb], ["__file", "/home/runner/work/element-plus/element-plus/packages/components/table/src/table.vue"]]);
const hb = {
  selection: "table-column--selection",
  expand: "table__expand-column"
}, vb = {
  default: {
    order: ""
  },
  selection: {
    width: 48,
    minWidth: 48,
    realWidth: 48,
    order: ""
  },
  expand: {
    width: 48,
    minWidth: 48,
    realWidth: 48,
    order: ""
  },
  index: {
    width: 48,
    minWidth: 48,
    realWidth: 48,
    order: ""
  }
}, gb = (e) => hb[e] || "", mb = {
  selection: {
    renderHeader({ store: e }) {
      function t() {
        return e.states.data.value && e.states.data.value.length === 0;
      }
      return Z(dn, {
        disabled: t(),
        size: e.states.tableSize.value,
        indeterminate: e.states.selection.value.length > 0 && !e.states.isAllSelected.value,
        "onUpdate:modelValue": e.toggleAllSelection,
        modelValue: e.states.isAllSelected.value
      });
    },
    renderCell({
      row: e,
      column: t,
      store: n,
      $index: o
    }) {
      return Z(dn, {
        disabled: t.selectable ? !t.selectable.call(null, e, o) : !1,
        size: n.states.tableSize.value,
        onChange: () => {
          n.commit("rowSelectedChanged", e);
        },
        onClick: (l) => l.stopPropagation(),
        modelValue: n.isSelected(e)
      });
    },
    sortable: !1,
    resizable: !1
  },
  index: {
    renderHeader({ column: e }) {
      return e.label || "#";
    },
    renderCell({
      column: e,
      $index: t
    }) {
      let n = t + 1;
      const o = e.index;
      return typeof o == "number" ? n = t + o : typeof o == "function" && (n = o(t)), Z("div", {}, [n]);
    },
    sortable: !1
  },
  expand: {
    renderHeader({ column: e }) {
      return e.label || "";
    },
    renderCell({
      row: e,
      store: t,
      expanded: n
    }) {
      const { ns: o } = t, l = [o.e("expand-icon")];
      return n && l.push(o.em("expand-icon", "expanded")), Z("div", {
        class: l,
        onClick: function(r) {
          r.stopPropagation(), t.toggleRowExpansion(e);
        }
      }, {
        default: () => [
          Z(Ye, null, {
            default: () => [Z(Zo)]
          })
        ]
      });
    },
    sortable: !1,
    resizable: !1
  }
};
function bb({
  row: e,
  column: t,
  $index: n
}) {
  var o;
  const l = t.property, a = l && yd(e, l).value;
  return t && t.formatter ? t.formatter(e, t, a, n) : ((o = a == null ? void 0 : a.toString) == null ? void 0 : o.call(a)) || "";
}
function yb({
  row: e,
  treeNode: t,
  store: n
}, o = !1) {
  const { ns: l } = n;
  if (!t)
    return o ? [
      Z("span", {
        class: l.e("placeholder")
      })
    ] : null;
  const a = [], r = function(i) {
    i.stopPropagation(), n.loadOrToggle(e);
  };
  if (t.indent && a.push(Z("span", {
    class: l.e("indent"),
    style: { "padding-left": `${t.indent}px` }
  })), typeof t.expanded == "boolean" && !t.noLazyChildren) {
    const i = [
      l.e("expand-icon"),
      t.expanded ? l.em("expand-icon", "expanded") : ""
    ];
    let s = Zo;
    t.loading && (s = na), a.push(Z("div", {
      class: i,
      onClick: r
    }, {
      default: () => [
        Z(Ye, { class: { [l.is("loading")]: t.loading } }, {
          default: () => [Z(s)]
        })
      ]
    }));
  } else
    a.push(Z("span", {
      class: l.e("placeholder")
    }));
  return a;
}
function Ar(e, t) {
  return e.reduce((n, o) => (n[o] = o, n), t);
}
function wb(e, t) {
  const n = be();
  return {
    registerComplexWatchers: () => {
      const a = ["fixed"], r = {
        realWidth: "width",
        realMinWidth: "minWidth"
      }, i = Ar(a, r);
      Object.keys(i).forEach((s) => {
        const u = r[s];
        Ut(t, u) && J(() => t[u], (c) => {
          let p = c;
          u === "width" && s === "realWidth" && (p = yl(c)), u === "minWidth" && s === "realMinWidth" && (p = Xa(c)), n.columnConfig.value[u] = p, n.columnConfig.value[s] = p;
          const f = u === "fixed";
          e.value.store.scheduleLayout(f);
        });
      });
    },
    registerNormalWatchers: () => {
      const a = [
        "label",
        "filters",
        "filterMultiple",
        "sortable",
        "index",
        "formatter",
        "className",
        "labelClassName",
        "showOverflowTooltip"
      ], r = {
        property: "prop",
        align: "realAlign",
        headerAlign: "realHeaderAlign"
      }, i = Ar(a, r);
      Object.keys(i).forEach((s) => {
        const u = r[s];
        Ut(t, u) && J(() => t[u], (c) => {
          n.columnConfig.value[s] = c;
        });
      });
    }
  };
}
function Cb(e, t, n) {
  const o = be(), l = T(""), a = T(!1), r = T(), i = T(), s = ce("table");
  tn(() => {
    r.value = e.align ? `is-${e.align}` : null, r.value;
  }), tn(() => {
    i.value = e.headerAlign ? `is-${e.headerAlign}` : r.value, i.value;
  });
  const u = A(() => {
    let v = o.vnode.vParent || o.parent;
    for (; v && !v.tableId && !v.columnId; )
      v = v.vnode.vParent || v.parent;
    return v;
  }), c = A(() => {
    const { store: v } = o.parent;
    if (!v)
      return !1;
    const { treeData: h } = v.states, $ = h.value;
    return $ && Object.keys($).length > 0;
  }), p = T(yl(e.width)), f = T(Xa(e.minWidth)), m = (v) => (p.value && (v.width = p.value), f.value && (v.minWidth = f.value), v.minWidth || (v.minWidth = 80), v.realWidth = Number(v.width === void 0 ? v.minWidth : v.width), v), d = (v) => {
    const h = v.type, $ = mb[h] || {};
    Object.keys($).forEach((C) => {
      const N = $[C];
      C !== "className" && N !== void 0 && (v[C] = N);
    });
    const w = gb(h);
    if (w) {
      const C = `${O(s.namespace)}-${w}`;
      v.className = v.className ? `${v.className} ${C}` : C;
    }
    return v;
  }, g = (v) => {
    Array.isArray(v) ? v.forEach(($) => h($)) : h(v);
    function h($) {
      var w;
      ((w = $ == null ? void 0 : $.type) == null ? void 0 : w.name) === "ElTableColumn" && ($.vParent = o);
    }
  };
  return {
    columnId: l,
    realAlign: r,
    isSubColumn: a,
    realHeaderAlign: i,
    columnOrTableParent: u,
    setColumnWidth: m,
    setColumnForcedProps: d,
    setColumnRenders: (v) => {
      e.renderHeader ? Le("TableColumn", "Comparing to render-header, scoped-slot header is easier to use. We recommend users to use scoped-slot header.") : v.type !== "selection" && (v.renderHeader = (w) => {
        o.columnConfig.value.label;
        const C = t.header;
        return C ? C(w) : v.label;
      });
      let h = v.renderCell;
      const $ = c.value;
      return v.type === "expand" ? (v.renderCell = (w) => Z("div", {
        class: "cell"
      }, [h(w)]), n.value.renderExpanded = (w) => t.default ? t.default(w) : t.default) : (h = h || bb, v.renderCell = (w) => {
        let C = null;
        if (t.default) {
          const B = t.default(w);
          C = B.some((D) => D.type !== Nr) ? B : h(w);
        } else
          C = h(w);
        const N = $ && w.cellIndex === 0, H = yb(w, N), _ = {
          class: "cell",
          style: {}
        };
        return v.showOverflowTooltip && (_.class = `${_.class} ${O(s.namespace)}-tooltip`, _.style = {
          width: `${(w.column.realWidth || Number(w.column.width)) - 1}px`
        }), g(C), Z("div", _, [H, C]);
      }), v;
    },
    getPropsData: (...v) => v.reduce((h, $) => (Array.isArray($) && $.forEach((w) => {
      h[w] = e[w];
    }), h), {}),
    getColumnElIndex: (v, h) => Array.prototype.indexOf.call(v, h)
  };
}
var Sb = {
  type: {
    type: String,
    default: "default"
  },
  label: String,
  className: String,
  labelClassName: String,
  property: String,
  prop: String,
  width: {
    type: [String, Number],
    default: ""
  },
  minWidth: {
    type: [String, Number],
    default: ""
  },
  renderHeader: Function,
  sortable: {
    type: [Boolean, String],
    default: !1
  },
  sortMethod: Function,
  sortBy: [String, Function, Array],
  resizable: {
    type: Boolean,
    default: !0
  },
  columnKey: String,
  align: String,
  headerAlign: String,
  showTooltipWhenOverflow: Boolean,
  showOverflowTooltip: Boolean,
  fixed: [Boolean, String],
  formatter: Function,
  selectable: Function,
  reserveSelection: Boolean,
  filterMethod: Function,
  filteredValue: Array,
  filters: Array,
  filterPlacement: String,
  filterMultiple: {
    type: Boolean,
    default: !0
  },
  index: [Number, Function],
  sortOrders: {
    type: Array,
    default: () => ["ascending", "descending", null],
    validator: (e) => e.every((t) => ["ascending", "descending", null].includes(t))
  }
};
let $b = 1;
var os = G({
  name: "ElTableColumn",
  components: {
    ElCheckbox: dn
  },
  props: Sb,
  setup(e, { slots: t }) {
    const n = be(), o = T({}), l = A(() => {
      let y = n.parent;
      for (; y && !y.tableId; )
        y = y.parent;
      return y;
    }), { registerNormalWatchers: a, registerComplexWatchers: r } = wb(l, e), {
      columnId: i,
      isSubColumn: s,
      realHeaderAlign: u,
      columnOrTableParent: c,
      setColumnWidth: p,
      setColumnForcedProps: f,
      setColumnRenders: m,
      getPropsData: d,
      getColumnElIndex: g,
      realAlign: b
    } = Cb(e, t, l), S = c.value;
    i.value = `${S.tableId || S.columnId}_column_${$b++}`, qo(() => {
      s.value = l.value !== S;
      const y = e.type || "default", v = e.sortable === "" ? !0 : e.sortable, h = {
        ...vb[y],
        id: i.value,
        type: y,
        property: e.prop || e.property,
        align: b,
        headerAlign: u,
        showOverflowTooltip: e.showOverflowTooltip || e.showTooltipWhenOverflow,
        filterable: e.filters || e.filterMethod,
        filteredValue: [],
        filterPlacement: "",
        isColumnGroup: !1,
        isSubColumn: !1,
        filterOpened: !1,
        sortable: v,
        index: e.index,
        rawColumnKey: n.vnode.key
      };
      let H = d([
        "columnKey",
        "label",
        "className",
        "labelClassName",
        "type",
        "renderHeader",
        "formatter",
        "fixed",
        "resizable"
      ], ["sortMethod", "sortBy", "sortOrders"], ["selectable", "reserveSelection"], [
        "filterMethod",
        "filters",
        "filterMultiple",
        "filterOpened",
        "filteredValue",
        "filterPlacement"
      ]);
      H = Om(h, H), H = Tm(m, p, f)(H), o.value = H, a(), r();
    }), Ue(() => {
      var y;
      const v = c.value, h = s.value ? v.vnode.el.children : (y = v.refs.hiddenColumns) == null ? void 0 : y.children, $ = () => g(h || [], n.vnode.el);
      o.value.getColumnIndex = $, $() > -1 && l.value.store.commit("insertColumn", o.value, s.value ? v.columnConfig.value : null);
    }), Ot(() => {
      l.value.store.commit("removeColumn", o.value, s.value ? S.columnConfig.value : null);
    }), n.columnId = i.value, n.columnConfig = o;
  },
  render() {
    var e, t, n;
    try {
      const o = (t = (e = this.$slots).default) == null ? void 0 : t.call(e, {
        row: {},
        column: {},
        $index: -1
      }), l = [];
      if (Array.isArray(o))
        for (const r of o)
          ((n = r.type) == null ? void 0 : n.name) === "ElTableColumn" || r.shapeFlag & 2 ? l.push(r) : r.type === He && Array.isArray(r.children) && r.children.forEach((i) => {
            (i == null ? void 0 : i.patchFlag) !== 1024 && !Wt(i == null ? void 0 : i.children) && l.push(i);
          });
      return Z("div", l);
    } catch {
      return Z("div", []);
    }
  }
});
const Eb = ct(pb, {
  TableColumn: os
}), Ob = kn(os);
var ls = {}, rs = {};
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 });
  var t = {
    name: "zh-cn",
    el: {
      colorpicker: {
        confirm: "\u786E\u5B9A",
        clear: "\u6E05\u7A7A"
      },
      datepicker: {
        now: "\u6B64\u523B",
        today: "\u4ECA\u5929",
        cancel: "\u53D6\u6D88",
        clear: "\u6E05\u7A7A",
        confirm: "\u786E\u5B9A",
        selectDate: "\u9009\u62E9\u65E5\u671F",
        selectTime: "\u9009\u62E9\u65F6\u95F4",
        startDate: "\u5F00\u59CB\u65E5\u671F",
        startTime: "\u5F00\u59CB\u65F6\u95F4",
        endDate: "\u7ED3\u675F\u65E5\u671F",
        endTime: "\u7ED3\u675F\u65F6\u95F4",
        prevYear: "\u524D\u4E00\u5E74",
        nextYear: "\u540E\u4E00\u5E74",
        prevMonth: "\u4E0A\u4E2A\u6708",
        nextMonth: "\u4E0B\u4E2A\u6708",
        year: "\u5E74",
        month1: "1 \u6708",
        month2: "2 \u6708",
        month3: "3 \u6708",
        month4: "4 \u6708",
        month5: "5 \u6708",
        month6: "6 \u6708",
        month7: "7 \u6708",
        month8: "8 \u6708",
        month9: "9 \u6708",
        month10: "10 \u6708",
        month11: "11 \u6708",
        month12: "12 \u6708",
        weeks: {
          sun: "\u65E5",
          mon: "\u4E00",
          tue: "\u4E8C",
          wed: "\u4E09",
          thu: "\u56DB",
          fri: "\u4E94",
          sat: "\u516D"
        },
        months: {
          jan: "\u4E00\u6708",
          feb: "\u4E8C\u6708",
          mar: "\u4E09\u6708",
          apr: "\u56DB\u6708",
          may: "\u4E94\u6708",
          jun: "\u516D\u6708",
          jul: "\u4E03\u6708",
          aug: "\u516B\u6708",
          sep: "\u4E5D\u6708",
          oct: "\u5341\u6708",
          nov: "\u5341\u4E00\u6708",
          dec: "\u5341\u4E8C\u6708"
        }
      },
      select: {
        loading: "\u52A0\u8F7D\u4E2D",
        noMatch: "\u65E0\u5339\u914D\u6570\u636E",
        noData: "\u65E0\u6570\u636E",
        placeholder: "\u8BF7\u9009\u62E9"
      },
      cascader: {
        noMatch: "\u65E0\u5339\u914D\u6570\u636E",
        loading: "\u52A0\u8F7D\u4E2D",
        placeholder: "\u8BF7\u9009\u62E9",
        noData: "\u6682\u65E0\u6570\u636E"
      },
      pagination: {
        goto: "\u524D\u5F80",
        pagesize: "\u6761/\u9875",
        total: "\u5171 {total} \u6761",
        pageClassifier: "\u9875",
        deprecationWarning: "\u4F60\u4F7F\u7528\u4E86\u4E00\u4E9B\u5DF2\u88AB\u5E9F\u5F03\u7684\u7528\u6CD5\uFF0C\u8BF7\u53C2\u8003 el-pagination \u7684\u5B98\u65B9\u6587\u6863"
      },
      messagebox: {
        title: "\u63D0\u793A",
        confirm: "\u786E\u5B9A",
        cancel: "\u53D6\u6D88",
        error: "\u8F93\u5165\u7684\u6570\u636E\u4E0D\u5408\u6CD5!"
      },
      upload: {
        deleteTip: "\u6309 delete \u952E\u53EF\u5220\u9664",
        delete: "\u5220\u9664",
        preview: "\u67E5\u770B\u56FE\u7247",
        continue: "\u7EE7\u7EED\u4E0A\u4F20"
      },
      table: {
        emptyText: "\u6682\u65E0\u6570\u636E",
        confirmFilter: "\u7B5B\u9009",
        resetFilter: "\u91CD\u7F6E",
        clearFilter: "\u5168\u90E8",
        sumText: "\u5408\u8BA1"
      },
      tree: {
        emptyText: "\u6682\u65E0\u6570\u636E"
      },
      transfer: {
        noMatch: "\u65E0\u5339\u914D\u6570\u636E",
        noData: "\u65E0\u6570\u636E",
        titles: ["\u5217\u8868 1", "\u5217\u8868 2"],
        filterPlaceholder: "\u8BF7\u8F93\u5165\u641C\u7D22\u5185\u5BB9",
        noCheckedFormat: "\u5171 {total} \u9879",
        hasCheckedFormat: "\u5DF2\u9009 {checked}/{total} \u9879"
      },
      image: {
        error: "\u52A0\u8F7D\u5931\u8D25"
      },
      pageHeader: {
        title: "\u8FD4\u56DE"
      },
      popconfirm: {
        confirmButtonText: "\u786E\u5B9A",
        cancelButtonText: "\u53D6\u6D88"
      }
    }
  };
  e.default = t;
})(rs);
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 });
  var t = rs;
  e.default = t.default;
})(ls);
const Tb = /* @__PURE__ */ _v(ls), Pb = G({
  name: "elementTable3"
}), Ab = /* @__PURE__ */ G({
  ...Pb,
  props: {
    tableData: {
      type: Array
    },
    tableConfig: {
      type: Object
    },
    handleRowClick: {
      type: Function
    },
    handleRowDbClick: {
      type: Function
    },
    total: {
      type: Number
    },
    current: {
      type: Number,
      default: 1
    },
    pageSize: {
      type: Number,
      default: 10
    }
  },
  emits: ["tableChange"],
  setup(e, { expose: t, emit: n }) {
    const o = e, l = T(null), a = T(Tb), r = pn({
      multipleSelection: [],
      currentRow: {},
      sortColumn: {},
      spanArr: [],
      pos: 0,
      loading: !0
    }), i = {
      elTableHeaderStyle: {
        background: "#E5F4FF",
        color: "rgba(0, 0, 0, 0.85)",
        padding: "8px 0px"
      },
      paginationAlign: "right",
      pageSizes: [10, 20, 50, 100]
    }, s = A(() => {
      var $, w, C, N, H;
      let h = o.tableData;
      if (!!Array.isArray(h))
        return r.loading = !1, h = fo(
          h,
          (C = (w = ($ = o.tableConfig) == null ? void 0 : $.parameter) == null ? void 0 : w.defaultSort) == null ? void 0 : C.prop
        ).reverse(), ((N = r.sortColumn) == null ? void 0 : N.order) === "ascending" ? h = fo(h, (H = r.sortColumn) == null ? void 0 : H.prop) : r.sortColumn.order === "descending" && (h = fo(h, r.sortColumn.prop).reverse()), h.length <= o.pageSize ? h : h.length <= o.current * o.pageSize ? h.slice((o.current - 1) * o.pageSize) : h.slice(
          (o.current - 1) * o.pageSize,
          o.current * o.pageSize
        );
    }), u = A(() => {
      var h, $, w;
      if (!!Array.isArray((h = o.tableConfig) == null ? void 0 : h.columns))
        return (w = ($ = o.tableConfig) == null ? void 0 : $.columns) == null ? void 0 : w.map((C) => (C.formatterName, C));
    }), c = A(() => Array.isArray(o.tableData) ? o.tableData.length : 0), p = (h) => h ? "default" : "other", f = (h) => {
      r.loading = !0, n("tableChange", { page: h, size: o.pageSize });
    }, m = (h) => {
      r.loading = !0, n("tableChange", { page: 1, size: h });
    }, d = (h) => {
      r.sortColumn = h;
    }, g = (h, $, w) => {
      r.currentRow = h, o.handleRowClick !== void 0 && o.handleRowClick(h, $, w);
    }, b = (h, $, w) => {
      r.currentRow = h, o.handleRowDbClick !== void 0 && o.handleRowDbClick(h, $, w);
    }, S = (h) => {
      r.multipleSelection = h;
    }, y = () => {
      var w, C;
      if (!Array.isArray(o.tableData))
        return;
      let h = ((w = o.tableConfig) == null ? void 0 : w.parameter) && ((C = o.tableConfig.parameter) == null ? void 0 : C.mergeColumnName);
      if (h) {
        let N = o.tableData;
        r.spanArr = [], r.pos = 0;
        for (var $ = 0; $ < o.tableData.length; $++)
          $ === 0 ? (r.spanArr.push(1), r.pos = 0) : N[$][h] === N[$ - 1][h] ? (r.spanArr[r.pos] += 1, r.spanArr.push(0)) : (r.spanArr.push(1), r.pos = $);
      }
    };
    J(
      [() => o.tableData],
      () => {
        y();
      },
      { deep: !0, immediate: !0 }
    );
    const v = ({
      row: h,
      column: $,
      rowIndex: w,
      columnIndex: C
    }) => {
      var H, _, B, D;
      if (((H = o.tableConfig) == null ? void 0 : H.parameter) && ((_ = o.tableConfig.parameter) == null ? void 0 : _.mergeColumnName) && r.spanArr.length) {
        let W = ((D = (B = o.tableConfig) == null ? void 0 : B.parameter) == null ? void 0 : D.mergeColumnNum) || 1;
        if (C < W) {
          const K = r.spanArr[w], ne = K > 0 ? 1 : 0;
          return {
            rowspan: K,
            colspan: ne
          };
        } else
          return [1, 1];
      } else
        return [1, 1];
    };
    return t({
      setLoading: (h) => r.loading = h
    }), (h, $) => {
      const w = Ob, C = Eb, N = ym, H = yg, _ = to("loading");
      return P(), Y(H, { locale: a.value }, {
        default: X(() => {
          var B, D, W, K, ne, oe, U, k;
          return [
            pe(h.$slots, "tableButtons", {
              mainTable: h.$refs.mainTable,
              multipleSelection: r.multipleSelection
            }, void 0, !0),
            ke((P(), Y(C, $t({
              ref_key: "mainTable",
              ref: l,
              class: "base-table",
              "span-method": v,
              data: O(s),
              "tooltip-effect": "light",
              "header-cell-style": i.elTableHeaderStyle,
              onSortChange: d,
              onSelectionChange: S,
              onRowDblclick: b,
              onCurrentChange: g,
              border: ""
            }, ((B = e.tableConfig) == null ? void 0 : B.parameter) && ((D = e.tableConfig.parameter) == null ? void 0 : D.extendTable), { stripe: "" }), {
              default: X(() => {
                var F, Q, ee, se;
                return [
                  ((F = e.tableConfig) == null ? void 0 : F.parameter) && ((Q = e.tableConfig.parameter) == null ? void 0 : Q.selection) ? (P(), Y(w, {
                    key: 0,
                    type: "selection",
                    width: "55"
                  })) : q("", !0),
                  ((ee = e.tableConfig) == null ? void 0 : ee.parameter) && ((se = e.tableConfig.parameter) == null ? void 0 : se.index) ? (P(), Y(w, {
                    key: 1,
                    label: "\u5E8F\u53F7",
                    type: "index",
                    width: "55"
                  }, {
                    default: X((le) => [
                      V("span", null, ve(le.$index + 1 + (e.current - 1) * e.pageSize), 1)
                    ]),
                    _: 1
                  })) : q("", !0),
                  (P(!0), I(He, null, qt(O(u), (le, de) => (P(), Y(w, $t({
                    key: de,
                    prop: le.prop,
                    label: le.label,
                    sortable: le.sortable,
                    width: le.width,
                    formatter: le.formatterFun,
                    "show-overflow-tooltip": !!le.showOverflowTooltip,
                    align: le.align,
                    fixed: le.fixed
                  }, le == null ? void 0 : le.extendTableColumn), {
                    [p(le.slotName)]: X((re) => [
                      pe(h.$slots, le.slotName, { scope: re }, void 0, !0)
                    ]),
                    _: 2
                  }, 1040, ["prop", "label", "sortable", "width", "formatter", "show-overflow-tooltip", "align", "fixed"]))), 128))
                ];
              }),
              _: 3
            }, 16, ["data", "header-cell-style"])), [
              [_, r.loading]
            ]),
            ((W = e.tableConfig) == null ? void 0 : W.parameter) && ((K = e.tableConfig.parameter) == null ? void 0 : K.pagination) && O(c) ? (P(), Y(N, $t(
              {
                key: 0,
                style: `justify-content:${((oe = (ne = e.tableConfig.parameter) == null ? void 0 : ne.extendPagination) == null ? void 0 : oe.paginationAlign) || i.paginationAlign}`,
                "page-size": e.pageSize,
                "current-page": e.current,
                "page-sizes": i.pageSizes,
                layout: "total, sizes, prev, pager, next, jumper",
                total: e.total || O(c),
                onCurrentChange: f,
                onSizeChange: m,
                background: ""
              },
              ((U = e.tableConfig) == null ? void 0 : U.parameter) && ((k = e.tableConfig.parameter) == null ? void 0 : k.extendPagination)
            ), null, 16, ["style", "page-size", "current-page", "page-sizes", "total"])) : q("", !0)
          ];
        }),
        _: 3
      }, 8, ["locale"]);
    };
  }
});
const kb = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [o, l] of t)
    n[o] = l;
  return n;
}, Lb = /* @__PURE__ */ kb(Ab, [["__scopeId", "data-v-abb281e5"]]), Nb = Os(Lb), zb = [
  Nb
], kr = Symbol("INSTALLED_KEY"), Mb = (e = []) => ({
  install: (n) => {
    n[kr] || (n[kr] = !0, e.forEach((o) => n.use(o)));
  }
}), Ib = Mb([...zb]);
export {
  Ib as default,
  Mb as makeInstaller
};
