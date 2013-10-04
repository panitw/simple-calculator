function d(a) {
  throw a;
}
var g = void 0, i = !0, k = null, m = !1;
function aa() {
  return function(a) {
    return a
  }
}
function p() {
  return function() {
  }
}
function ba(a) {
  return function(b) {
    this[a] = b
  }
}
function q(a) {
  return function() {
    return this[a]
  }
}
function r(a) {
  return function() {
    return a
  }
}
var s, ca = ca || {}, da = this;
window.EikonLocale ? window.goog.LOCALE = window.EikonLocale : window.dojo && (window.goog.LOCALE = window.dojo.locale);
function ea(a) {
  for(var a = a.split("."), b = da, c;c = a.shift();) {
    if(w(b[c])) {
      b = b[c]
    }else {
      return k
    }
  }
  return b
}
function fa() {
}
function x(a) {
  a.g = function() {
    return a.xT || (a.xT = new a)
  }
}
function ga(a) {
  var b = typeof a;
  if(b == "object") {
    if(a) {
      if(a instanceof Array) {
        return"array"
      }
      if(a instanceof Object) {
        return b
      }
      var c = Object.prototype.toString.call(a);
      if(c == "[object Window]") {
        return"object"
      }
      if(c == "[object Array]" || typeof a.length == "number" && typeof a.splice != "undefined" && typeof a.propertyIsEnumerable != "undefined" && !a.propertyIsEnumerable("splice")) {
        return"array"
      }
      if(c == "[object Function]" || typeof a.call != "undefined" && typeof a.propertyIsEnumerable != "undefined" && !a.propertyIsEnumerable("call")) {
        return"function"
      }
    }else {
      return"null"
    }
  }else {
    if(b == "function" && typeof a.call == "undefined") {
      return"object"
    }
  }
  return b
}
function z(a) {
  return a !== g
}
function w(a) {
  return a != k
}
function ha(a) {
  return ga(a) == "array"
}
function ja(a) {
  var b = ga(a);
  return b == "array" || b == "object" && typeof a.length == "number"
}
function ka(a) {
  return typeof a == "string"
}
function la(a) {
  return typeof a == "number"
}
function ma(a) {
  return ga(a) == "function"
}
function na(a) {
  a = ga(a);
  return a == "object" || a == "array" || a == "function"
}
function pa(a) {
  return a[qa] || (a[qa] = ++ra)
}
var qa = "closure_uid_" + Math.floor(2147483648 * Math.random()).toString(36), ra = 0;
function sa(a, b, c) {
  return a.call.apply(a.bind, arguments)
}
function ta(a, b, c) {
  a || d(Error());
  if(arguments.length > 2) {
    var e = Array.prototype.slice.call(arguments, 2);
    return function() {
      var c = Array.prototype.slice.call(arguments);
      Array.prototype.unshift.apply(c, e);
      return a.apply(b, c)
    }
  }
  return function() {
    return a.apply(b, arguments)
  }
}
function A(a, b, c) {
  A = Function.prototype.bind && Function.prototype.bind.toString().indexOf("native code") != -1 ? sa : ta;
  return A.apply(k, arguments)
}
function ua(a, b) {
  var c = Array.prototype.slice.call(arguments, 1);
  return function() {
    var b = Array.prototype.slice.call(arguments);
    b.unshift.apply(b, c);
    return a.apply(this, b)
  }
}
var va = Date.now || function() {
  return+new Date
};
function B(a, b) {
  var c = a.split("."), e = da;
  !(c[0] in e) && e.execScript && e.execScript("var " + c[0]);
  for(var f;c.length && (f = c.shift());) {
    !c.length && z(b) ? e[f] = b : e = e[f] ? e[f] : e[f] = {}
  }
}
function C(a, b) {
  function c() {
  }
  c.prototype = b.prototype;
  a.e = b.prototype;
  a.prototype = new c;
  a.prototype.constructor = a
}
;function wa(a, b) {
  return 0 == a.lastIndexOf(b, 0)
}
function xa(a) {
  return/^[\s\xa0]*$/.test(a == k ? "" : "" + a)
}
function ya(a) {
  return a.replace(/[\t\r\n ]+/g, " ").replace(/^[\t\r\n ]+|[\t\r\n ]+$/g, "")
}
function za(a) {
  return a.replace(/^[\s\xa0]+|[\s\xa0]+$/g, "")
}
var Aa = /^[a-zA-Z0-9\-_.!~*'()]*$/;
function Ba(a) {
  a = "" + a;
  return!Aa.test(a) ? encodeURIComponent(a) : a
}
function Ca(a) {
  if(!Da.test(a)) {
    return a
  }
  -1 != a.indexOf("&") && (a = a.replace(Ea, "&amp;"));
  -1 != a.indexOf("<") && (a = a.replace(Fa, "&lt;"));
  -1 != a.indexOf(">") && (a = a.replace(Ga, "&gt;"));
  -1 != a.indexOf('"') && (a = a.replace(Ha, "&quot;"));
  return a
}
var Ea = /&/g, Fa = /</g, Ga = />/g, Ha = /\"/g, Da = /[&<>\"]/;
function Ia(a) {
  var b = {"&amp;":"&", "&lt;":"<", "&gt;":">", "&quot;":'"'}, c = document.createElement("div");
  return a.replace(Ja, function(a, f) {
    var h = b[a];
    if(h) {
      return h
    }
    if("#" == f.charAt(0)) {
      var j = Number("0" + f.substr(1));
      isNaN(j) || (h = String.fromCharCode(j))
    }
    h || (c.innerHTML = a + " ", h = c.firstChild.nodeValue.slice(0, -1));
    return b[a] = h
  })
}
function Ka(a) {
  return a.replace(/&([^;]+);/g, function(a, c) {
    switch(c) {
      case "amp":
        return"&";
      case "lt":
        return"<";
      case "gt":
        return">";
      case "quot":
        return'"';
      default:
        if("#" == c.charAt(0)) {
          var e = Number("0" + c.substr(1));
          if(!isNaN(e)) {
            return String.fromCharCode(e)
          }
        }
        return a
    }
  })
}
var Ja = /&([^;\s<&]+);?/g;
function La(a, b) {
  return-1 != a.indexOf(b)
}
function Ma(a) {
  return("" + a).replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g, "\\$1").replace(/\x08/g, "\\x08")
}
function Na(a, b) {
  var c = z(g) ? a.toFixed(g) : "" + a, e = c.indexOf(".");
  -1 == e && (e = c.length);
  e = Math.max(0, b - e);
  return Array(e + 1).join("0") + c
}
function Oa(a) {
  return Array.prototype.join.call(arguments, "")
}
function Qa(a) {
  var b = Number(a);
  return 0 == b && /^[\s\xa0]*$/.test(a) ? NaN : b
}
var Ra = {};
function Sa(a) {
  return Ra[a] || (Ra[a] = ("" + a).replace(/\-([a-z])/g, function(a, c) {
    return c.toUpperCase()
  }))
}
;var Ta = Array.prototype, Ua = Ta.indexOf ? function(a, b, c) {
  return Ta.indexOf.call(a, b, c)
} : function(a, b, c) {
  c = c == k ? 0 : 0 > c ? Math.max(0, a.length + c) : c;
  if(ka(a)) {
    return!ka(b) || 1 != b.length ? -1 : a.indexOf(b, c)
  }
  for(;c < a.length;c++) {
    if(c in a && a[c] === b) {
      return c
    }
  }
  return-1
}, Va = Ta.forEach ? function(a, b, c) {
  Ta.forEach.call(a, b, c)
} : function(a, b, c) {
  for(var e = a.length, f = ka(a) ? a.split("") : a, h = 0;h < e;h++) {
    h in f && b.call(c, f[h], h, a)
  }
}, Wa = Ta.filter ? function(a, b, c) {
  return Ta.filter.call(a, b, c)
} : function(a, b, c) {
  for(var e = a.length, f = [], h = 0, j = ka(a) ? a.split("") : a, l = 0;l < e;l++) {
    if(l in j) {
      var n = j[l];
      b.call(c, n, l, a) && (f[h++] = n)
    }
  }
  return f
}, Xa = Ta.map ? function(a, b, c) {
  return Ta.map.call(a, b, c)
} : function(a, b, c) {
  for(var e = a.length, f = Array(e), h = ka(a) ? a.split("") : a, j = 0;j < e;j++) {
    j in h && (f[j] = b.call(c, h[j], j, a))
  }
  return f
}, Za = Ta.some ? function(a, b, c) {
  return Ta.some.call(a, b, c)
} : function(a, b, c) {
  for(var e = a.length, f = ka(a) ? a.split("") : a, h = 0;h < e;h++) {
    if(h in f && b.call(c, f[h], h, a)) {
      return i
    }
  }
  return m
}, $a = Ta.every ? function(a, b, c) {
  return Ta.every.call(a, b, c)
} : function(a, b, c) {
  for(var e = a.length, f = ka(a) ? a.split("") : a, h = 0;h < e;h++) {
    if(h in f && !b.call(c, f[h], h, a)) {
      return m
    }
  }
  return i
};
function ab(a, b) {
  return 0 <= Ua(a, b)
}
function bb(a, b) {
  var c = Ua(a, b), e;
  (e = 0 <= c) && cb(a, c);
  return e
}
function cb(a, b) {
  return 1 == Ta.splice.call(a, b, 1).length
}
function db(a, b, c) {
  a: {
    for(var e = a.length, f = ka(a) ? a.split("") : a, h = 0;h < e;h++) {
      if(h in f && b.call(c, f[h], h, a)) {
        b = h;
        break a
      }
    }
    b = -1
  }
  return 0 <= b ? (cb(a, b), i) : m
}
function eb(a) {
  return Ta.concat.apply(Ta, arguments)
}
function fb(a) {
  if(ha(a)) {
    return eb(a)
  }
  for(var b = [], c = 0, e = a.length;c < e;c++) {
    b[c] = a[c]
  }
  return b
}
function gb(a, b) {
  for(var c = 1;c < arguments.length;c++) {
    var e = arguments[c], f;
    if(ha(e) || (f = ja(e)) && e.hasOwnProperty("callee")) {
      a.push.apply(a, e)
    }else {
      if(f) {
        for(var h = a.length, j = e.length, l = 0;l < j;l++) {
          a[h + l] = e[l]
        }
      }else {
        a.push(e)
      }
    }
  }
}
function hb(a, b, c, e) {
  Ta.splice.apply(a, ib(arguments, 1))
}
function ib(a, b, c) {
  return 2 >= arguments.length ? Ta.slice.call(a, b) : Ta.slice.call(a, b, c)
}
;var kb;
function lb(a) {
  return(a = a.className) && "function" == typeof a.split ? a.split(/\s+/) : []
}
function D(a, b) {
  var c = lb(a), e = ib(arguments, 1), e = mb(c, e);
  a.className = c.join(" ");
  return e
}
function E(a, b) {
  var c = lb(a), e = ib(arguments, 1), e = nb(c, e);
  a.className = c.join(" ");
  return e
}
function mb(a, b) {
  for(var c = 0, e = 0;e < b.length;e++) {
    ab(a, b[e]) || (a.push(b[e]), c++)
  }
  return c == b.length
}
function nb(a, b) {
  for(var c = 0, e = 0;e < a.length;e++) {
    ab(b, a[e]) && (hb(a, e--, 1), c++)
  }
  return c == b.length
}
function ob(a, b, c) {
  var e = lb(a);
  ka(b) ? bb(e, b) : ha(b) && nb(e, b);
  ka(c) && !ab(e, c) ? e.push(c) : ha(c) && mb(e, c);
  a.className = e.join(" ")
}
function F(a, b, c) {
  c ? D(a, b) : E(a, b)
}
;function pb(a, b, c) {
  for(var e in a) {
    b.call(c, a[e], e, a)
  }
}
function qb(a) {
  var b = [], c = 0, e;
  for(e in a) {
    b[c++] = a[e]
  }
  return b
}
function rb(a) {
  var b = [], c = 0, e;
  for(e in a) {
    b[c++] = e
  }
  return b
}
function sb(a) {
  for(var b in a) {
    return m
  }
  return i
}
function tb(a, b) {
  var c;
  (c = b in a) && delete a[b];
  return c
}
function ub(a, b, c) {
  b in a && d(Error('The object already contains the key "' + b + '"'));
  a[b] = c
}
function vb(a) {
  var b = {}, c;
  for(c in a) {
    b[a[c]] = c
  }
  return b
}
var wb = "constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",");
function xb(a, b) {
  for(var c, e, f = 1;f < arguments.length;f++) {
    e = arguments[f];
    for(c in e) {
      a[c] = e[c]
    }
    for(var h = 0;h < wb.length;h++) {
      c = wb[h], Object.prototype.hasOwnProperty.call(e, c) && (a[c] = e[c])
    }
  }
}
function yb(a) {
  var b = arguments.length;
  if(1 == b && ha(arguments[0])) {
    return yb.apply(k, arguments[0])
  }
  b % 2 && d(Error("Uneven number of arguments"));
  for(var c = {}, e = 0;e < b;e += 2) {
    c[arguments[e]] = arguments[e + 1]
  }
  return c
}
function zb(a) {
  var b = arguments.length;
  if(1 == b && ha(arguments[0])) {
    return zb.apply(k, arguments[0])
  }
  for(var c = {}, e = 0;e < b;e++) {
    c[arguments[e]] = i
  }
  return c
}
;var Ab, Cb, Eb, Fb, Gb, Hb, Ib;
function Jb() {
  return da.navigator ? da.navigator.userAgent : k
}
function Kb() {
  return da.navigator
}
Gb = Fb = Eb = Cb = Ab = m;
var Lb;
if(Lb = Jb()) {
  var Mb = Kb();
  Ab = 0 == Lb.indexOf("Opera");
  Cb = !Ab && -1 != Lb.indexOf("MSIE");
  Fb = (Eb = !Ab && -1 != Lb.indexOf("WebKit")) && -1 != Lb.indexOf("Mobile");
  Gb = !Ab && !Eb && "Gecko" == Mb.product
}
var Nb = Ab, Ob = Cb, Pb = Gb, Qb = Eb, Rb = Fb, Sb, Tb = Kb();
Sb = Tb && Tb.platform || "";
Hb = La(Sb, "Mac");
Ib = La(Sb, "Win");
La(Sb, "Linux");
var Ub = !!Kb() && La(Kb().appVersion || "", "X11"), Wb;
a: {
  var Xb = "", Yb;
  if(Nb && da.opera) {
    var Zb = da.opera.version, Xb = "function" == typeof Zb ? Zb() : Zb
  }else {
    if(Pb ? Yb = /rv\:([^\);]+)(\)|;)/ : Ob ? Yb = /MSIE\s+([^\);]+)(\)|;)/ : Qb && (Yb = /WebKit\/(\S+)/), Yb) {
      var $b = Yb.exec(Jb()), Xb = $b ? $b[1] : ""
    }
  }
  if(Ob) {
    var ac, bc = da.document;
    ac = bc ? bc.documentMode : g;
    if(ac > parseFloat(Xb)) {
      Wb = "" + ac;
      break a
    }
  }
  Wb = Xb
}
var cc = {};
function dc(a) {
  var b;
  if(!(b = cc[a])) {
    b = 0;
    for(var c = za("" + Wb).split("."), e = za("" + a).split("."), f = Math.max(c.length, e.length), h = 0;0 == b && h < f;h++) {
      var j = c[h] || "", l = e[h] || "", n = RegExp("(\\d*)(\\D*)", "g"), o = RegExp("(\\d*)(\\D*)", "g");
      do {
        var u = n.exec(j) || ["", "", ""], t = o.exec(l) || ["", "", ""];
        if(0 == u[0].length && 0 == t[0].length) {
          break
        }
        b = ((0 == u[1].length ? 0 : parseInt(u[1], 10)) < (0 == t[1].length ? 0 : parseInt(t[1], 10)) ? -1 : (0 == u[1].length ? 0 : parseInt(u[1], 10)) > (0 == t[1].length ? 0 : parseInt(t[1], 10)) ? 1 : 0) || ((0 == u[2].length) < (0 == t[2].length) ? -1 : (0 == u[2].length) > (0 == t[2].length) ? 1 : 0) || (u[2] < t[2] ? -1 : u[2] > t[2] ? 1 : 0)
      }while(0 == b)
    }
    b = cc[a] = 0 <= b
  }
  return b
}
var ec = {};
function fc(a) {
  return ec[a] || (ec[a] = Ob && document.documentMode && document.documentMode >= a)
}
;function gc(a, b) {
  this.width = a;
  this.height = b
}
s = gc.prototype;
s.clone = function() {
  return new gc(this.width, this.height)
};
s.di = function() {
  return!(this.width * this.height)
};
s.ceil = function() {
  this.width = Math.ceil(this.width);
  this.height = Math.ceil(this.height);
  return this
};
s.floor = function() {
  this.width = Math.floor(this.width);
  this.height = Math.floor(this.height);
  return this
};
s.round = function() {
  this.width = Math.round(this.width);
  this.height = Math.round(this.height);
  return this
};
s.scale = function(a) {
  this.width *= a;
  this.height *= a;
  return this
};
var hc = !Ob || fc(9), ic = !Pb && !Ob || Ob && fc(9) || Pb && dc("1.9.1"), jc = Ob && !dc("9");
function kc(a, b) {
  this.x = z(a) ? a : 0;
  this.y = z(b) ? b : 0
}
kc.prototype.clone = function() {
  return new kc(this.x, this.y)
};
function lc(a, b) {
  return new kc(a.x - b.x, a.y - b.y)
}
;function mc(a) {
  return a ? new oc(pc(a)) : kb || (kb = new oc)
}
function qc(a) {
  return ka(a) ? document.getElementById(a) : a
}
function rc(a, b, c) {
  return sc(document, a, b, c)
}
function sc(a, b, c, e) {
  a = e || a;
  b = b && "*" != b ? b.toUpperCase() : "";
  if(a.querySelectorAll && a.querySelector && (!Qb || tc(document) || dc("528")) && (b || c)) {
    return a.querySelectorAll(b + (c ? "." + c : ""))
  }
  if(c && a.getElementsByClassName) {
    a = a.getElementsByClassName(c);
    if(b) {
      for(var e = {}, f = 0, h = 0, j;j = a[h];h++) {
        b == j.nodeName && (e[f++] = j)
      }
      e.length = f;
      return e
    }
    return a
  }
  a = a.getElementsByTagName(b || "*");
  if(c) {
    e = {};
    for(h = f = 0;j = a[h];h++) {
      b = j.className, "function" == typeof b.split && ab(b.split(/\s+/), c) && (e[f++] = j)
    }
    e.length = f;
    return e
  }
  return a
}
function uc(a, b) {
  pb(b, function(b, e) {
    "style" == e ? a.style.cssText = b : "class" == e ? a.className = b : "for" == e ? a.htmlFor = b : e in vc ? a.setAttribute(vc[e], b) : wa(e, "aria-") ? a.setAttribute(e, b) : a[e] = b
  })
}
var vc = {cellpadding:"cellPadding", cellspacing:"cellSpacing", colspan:"colSpan", rowspan:"rowSpan", valign:"vAlign", height:"height", width:"width", usemap:"useMap", frameborder:"frameBorder", maxlength:"maxLength", type:"type"};
function wc(a) {
  var b = a.document;
  if(Qb && !dc("500") && !Rb) {
    "undefined" == typeof a.innerHeight && (a = window);
    var b = a.innerHeight, c = a.document.documentElement.scrollHeight;
    a == a.top && c < b && (b -= 15);
    return new gc(a.innerWidth, b)
  }
  a = tc(b) ? b.documentElement : b.body;
  return new gc(a.clientWidth, a.clientHeight)
}
function xc(a) {
  var b = yc(a), a = a.parentWindow || a.defaultView;
  return new kc(a.pageXOffset || b.scrollLeft, a.pageYOffset || b.scrollTop)
}
function yc(a) {
  return!Qb && tc(a) ? a.documentElement : a.body
}
function zc(a) {
  return a ? a.parentWindow || a.defaultView : window
}
function Ac(a, b, c) {
  return Bc(document, arguments)
}
function Bc(a, b) {
  var c = b[0], e = b[1];
  if(!hc && e && (e.name || e.type)) {
    c = ["<", c];
    e.name && c.push(' name="', Ca(e.name), '"');
    if(e.type) {
      c.push(' type="', Ca(e.type), '"');
      var f = {};
      xb(f, e);
      e = f;
      delete e.type
    }
    c.push(">");
    c = c.join("")
  }
  c = a.createElement(c);
  e && (ka(e) ? c.className = e : ha(e) ? D.apply(k, [c].concat(e)) : uc(c, e));
  2 < b.length && Cc(a, c, b, 2);
  return c
}
function Cc(a, b, c, e) {
  function f(c) {
    c && b.appendChild(ka(c) ? a.createTextNode(c) : c)
  }
  for(;e < c.length;e++) {
    var h = c[e];
    ja(h) && !(na(h) && 0 < h.nodeType) ? Va(Dc(h) ? fb(h) : h, f) : f(h)
  }
}
function Ec() {
  return document.createElement("div")
}
function tc(a) {
  return"CSS1Compat" == a.compatMode
}
function Gc(a, b) {
  Cc(pc(a), a, arguments, 1)
}
function Hc(a) {
  for(var b;b = a.firstChild;) {
    a.removeChild(b)
  }
}
function Ic(a, b) {
  b.parentNode && b.parentNode.insertBefore(a, b)
}
function Jc(a, b) {
  b.parentNode && b.parentNode.insertBefore(a, b.nextSibling)
}
function Kc(a) {
  return a && a.parentNode ? a.parentNode.removeChild(a) : k
}
function Lc(a) {
  return ic && a.children != g ? a.children : Wa(a.childNodes, function(a) {
    return 1 == a.nodeType
  })
}
function Mc(a) {
  return a.firstElementChild != g ? a.firstElementChild : Nc(a.firstChild, i)
}
function Nc(a, b) {
  for(;a && 1 != a.nodeType;) {
    a = b ? a.nextSibling : a.previousSibling
  }
  return a
}
function Oc(a, b) {
  if(a.contains && 1 == b.nodeType) {
    return a == b || a.contains(b)
  }
  if("undefined" != typeof a.compareDocumentPosition) {
    return a == b || Boolean(a.compareDocumentPosition(b) & 16)
  }
  for(;b && a != b;) {
    b = b.parentNode
  }
  return b == a
}
function pc(a) {
  return 9 == a.nodeType ? a : a.ownerDocument || a.document
}
function Pc(a, b) {
  if("textContent" in a) {
    a.textContent = b
  }else {
    if(a.firstChild && 3 == a.firstChild.nodeType) {
      for(;a.lastChild != a.firstChild;) {
        a.removeChild(a.lastChild)
      }
      a.firstChild.data = b
    }else {
      Hc(a), a.appendChild(pc(a).createTextNode(b))
    }
  }
}
var Qc = {SCRIPT:1, STYLE:1, HEAD:1, IFRAME:1, OBJECT:1}, Rc = {IMG:" ", BR:"\n"};
function Sc(a) {
  var b = a.getAttributeNode("tabindex");
  return b && b.specified ? (a = a.tabIndex, la(a) && 0 <= a && 32768 > a) : m
}
function Tc(a, b) {
  b ? a.tabIndex = 0 : (a.tabIndex = -1, a.removeAttribute("tabIndex"))
}
function Uc(a) {
  if(jc && "innerText" in a) {
    a = a.innerText.replace(/(\r\n|\r|\n)/g, "\n")
  }else {
    var b = [];
    Vc(a, b, i);
    a = b.join("")
  }
  a = a.replace(/ \xAD /g, " ").replace(/\xAD/g, "");
  a = a.replace(/\u200B/g, "");
  jc || (a = a.replace(/ +/g, " "));
  " " != a && (a = a.replace(/^\s*/, ""));
  return a
}
function Wc(a) {
  var b = [];
  Vc(a, b, m);
  return b.join("")
}
function Vc(a, b, c) {
  if(!(a.nodeName in Qc)) {
    if(3 == a.nodeType) {
      c ? b.push(("" + a.nodeValue).replace(/(\r\n|\r|\n)/g, "")) : b.push(a.nodeValue)
    }else {
      if(a.nodeName in Rc) {
        b.push(Rc[a.nodeName])
      }else {
        for(a = a.firstChild;a;) {
          Vc(a, b, c), a = a.nextSibling
        }
      }
    }
  }
}
function Dc(a) {
  if(a && "number" == typeof a.length) {
    if(na(a)) {
      return"function" == typeof a.item || "string" == typeof a.item
    }
    if(ma(a)) {
      return"function" == typeof a.item
    }
  }
  return m
}
function Xc(a) {
  try {
    return a && a.activeElement
  }catch(b) {
  }
  return k
}
function oc(a) {
  this.Lb = a || da.document || document
}
s = oc.prototype;
s.u = mc;
function Yc(a) {
  return a.Lb
}
s.b = function(a) {
  return ka(a) ? this.Lb.getElementById(a) : a
};
s.Ns = uc;
function Zc(a) {
  return wc(a.Pf() || window)
}
s.m = function(a, b, c) {
  return Bc(this.Lb, arguments)
};
s.createElement = function(a) {
  return this.Lb.createElement(a)
};
s.createTextNode = function(a) {
  return this.Lb.createTextNode(a)
};
function $c(a) {
  return tc(a.Lb)
}
s.Pf = function() {
  return this.Lb.parentWindow || this.Lb.defaultView
};
function ad(a) {
  return xc(a.Lb)
}
s.appendChild = function(a, b) {
  a.appendChild(b)
};
s.append = Gc;
s.JN = Hc;
s.YL = Ic;
s.removeNode = Kc;
s.fL = Mc;
s.contains = Oc;
function bd(a, b, c, e) {
  this.top = a;
  this.right = b;
  this.bottom = c;
  this.left = e
}
bd.prototype.clone = function() {
  return new bd(this.top, this.right, this.bottom, this.left)
};
bd.prototype.contains = function(a) {
  return!this || !a ? m : a instanceof bd ? a.left >= this.left && a.right <= this.right && a.top >= this.top && a.bottom <= this.bottom : a.x >= this.left && a.x <= this.right && a.y >= this.top && a.y <= this.bottom
};
function cd(a, b, c, e) {
  this.left = a;
  this.top = b;
  this.width = c;
  this.height = e
}
cd.prototype.clone = function() {
  return new cd(this.left, this.top, this.width, this.height)
};
cd.prototype.contains = function(a) {
  return a instanceof cd ? this.left <= a.left && this.left + this.width >= a.left + a.width && this.top <= a.top && this.top + this.height >= a.top + a.height : a.x >= this.left && a.x <= this.left + this.width && a.y >= this.top && a.y <= this.top + this.height
};
function dd(a, b, c) {
  ka(b) ? ed(a, c, b) : pb(b, ua(ed, a))
}
function ed(a, b, c) {
  a.style[Sa(c)] = b
}
function fd(a, b) {
  return a.style[Sa(b)] || ""
}
function gd(a, b) {
  var c = pc(a);
  return c.defaultView && c.defaultView.getComputedStyle && (c = c.defaultView.getComputedStyle(a, k)) ? c[b] || c.getPropertyValue(b) : ""
}
function hd(a, b) {
  return a.currentStyle ? a.currentStyle[b] : k
}
function id(a, b) {
  return gd(a, b) || hd(a, b) || a.style && a.style[b]
}
function jd(a) {
  return id(a, "position")
}
function kd(a, b, c) {
  var e, f = Pb && (Hb || Ub) && dc("1.9");
  b instanceof kc ? (e = b.x, b = b.y) : (e = b, b = c);
  a.style.left = ld(e, f);
  a.style.top = ld(b, f)
}
function md(a) {
  a = a ? 9 == a.nodeType ? a : pc(a) : document;
  return Ob && !fc(9) && !$c(mc(a)) ? a.body : a.documentElement
}
function nd(a) {
  var b = a.getBoundingClientRect();
  Ob && (a = a.ownerDocument, b.left -= a.documentElement.clientLeft + a.body.clientLeft, b.top -= a.documentElement.clientTop + a.body.clientTop);
  return b
}
function od(a) {
  if(Ob && !fc(8)) {
    return a.offsetParent
  }
  for(var b = pc(a), c = id(a, "position"), e = "fixed" == c || "absolute" == c, a = a.parentNode;a && a != b;a = a.parentNode) {
    if(c = id(a, "position"), e = e && "static" == c && a != b.documentElement && a != b.body, !e && (a.scrollWidth > a.clientWidth || a.scrollHeight > a.clientHeight || "fixed" == c || "static" == c || "absolute" == c || "relative" == c)) {
      return a
    }
  }
  return k
}
function pd(a) {
  for(var b = new bd(0, Infinity, Infinity, 0), c = mc(a), e = c.Lb.body, f = c.Lb.documentElement, h = yc(c.Lb);a = od(a);) {
    if((!Ob || 0 != a.clientWidth) && (!Qb || 0 != a.clientHeight || a != e) && a != e && a != f && "visible" != id(a, "overflow")) {
      var j = qd(a), l;
      l = a;
      if(Pb && !dc("1.9")) {
        var n = parseFloat(gd(l, "borderLeftWidth"));
        if(rd(l)) {
          var o = l.offsetWidth - l.clientWidth - n - parseFloat(gd(l, "borderRightWidth")), n = n + o
        }
        l = new kc(n, parseFloat(gd(l, "borderTopWidth")))
      }else {
        l = new kc(l.clientLeft, l.clientTop)
      }
      j.x += l.x;
      j.y += l.y;
      b.top = Math.max(b.top, j.y);
      b.right = Math.min(b.right, j.x + a.clientWidth);
      b.bottom = Math.min(b.bottom, j.y + a.clientHeight);
      b.left = Math.max(b.left, j.x)
    }
  }
  e = h.scrollLeft;
  h = h.scrollTop;
  b.left = Math.max(b.left, e);
  b.top = Math.max(b.top, h);
  c = Zc(c);
  b.right = Math.min(b.right, e + c.width);
  b.bottom = Math.min(b.bottom, h + c.height);
  return 0 <= b.top && 0 <= b.left && b.bottom > b.top && b.right > b.left ? b : k
}
function qd(a) {
  var b, c = pc(a), e = id(a, "position"), f = Pb && c.getBoxObjectFor && !a.getBoundingClientRect && "absolute" == e && (b = c.getBoxObjectFor(a)) && (0 > b.screenX || 0 > b.screenY), h = new kc(0, 0), j = md(c);
  if(a == j) {
    return h
  }
  if(a.getBoundingClientRect) {
    b = nd(a), a = ad(mc(c)), h.x = b.left + a.x, h.y = b.top + a.y
  }else {
    if(c.getBoxObjectFor && !f) {
      b = c.getBoxObjectFor(a), a = c.getBoxObjectFor(j), h.x = b.screenX - a.screenX, h.y = b.screenY - a.screenY
    }else {
      b = a;
      do {
        h.x += b.offsetLeft;
        h.y += b.offsetTop;
        b != a && (h.x += b.clientLeft || 0, h.y += b.clientTop || 0);
        if(Qb && "fixed" == jd(b)) {
          h.x += c.body.scrollLeft;
          h.y += c.body.scrollTop;
          break
        }
        b = b.offsetParent
      }while(b && b != a);
      if(Nb || Qb && "absolute" == e) {
        h.y -= c.body.offsetTop
      }
      for(b = a;(b = od(b)) && b != c.body && b != j;) {
        if(h.x -= b.scrollLeft, !Nb || "TR" != b.tagName) {
          h.y -= b.scrollTop
        }
      }
    }
  }
  return h
}
function sd(a, b) {
  var c = td(a), e = td(b);
  return new kc(c.x - e.x, c.y - e.y)
}
function td(a) {
  var b = new kc;
  if(1 == a.nodeType) {
    if(a.getBoundingClientRect) {
      a = nd(a), b.x = a.left, b.y = a.top
    }else {
      var c = ad(mc(a)), a = qd(a);
      b.x = a.x - c.x;
      b.y = a.y - c.y
    }
  }else {
    var c = ma(a.FR), e = a;
    a.targetTouches ? e = a.targetTouches[0] : c && a.Rd.targetTouches && (e = a.Rd.targetTouches[0]);
    b.x = e.clientX;
    b.y = e.clientY
  }
  return b
}
function ud(a, b, c) {
  var e = qd(a);
  b instanceof kc && (c = b.y, b = b.x);
  kd(a, a.offsetLeft + (b - e.x), a.offsetTop + (c - e.y))
}
function vd(a, b, c) {
  b instanceof gc ? (c = b.height, b = b.width) : c == g && d(Error("missing height argument"));
  wd(a, b);
  xd(a, c)
}
function ld(a, b) {
  "number" == typeof a && (a = (b ? Math.round(a) : a) + "px");
  return a
}
function xd(a, b) {
  a.style.height = ld(b, i)
}
function wd(a, b) {
  a.style.width = ld(b, i)
}
function yd(a) {
  if("none" != id(a, "display")) {
    return zd(a)
  }
  var b = a.style, c = b.display, e = b.visibility, f = b.position;
  b.visibility = "hidden";
  b.position = "absolute";
  b.display = "inline";
  a = zd(a);
  b.display = c;
  b.position = f;
  b.visibility = e;
  return a
}
function zd(a) {
  var b = a.offsetWidth, c = a.offsetHeight, e = Qb && !b && !c;
  return(!z(b) || e) && a.getBoundingClientRect ? (a = nd(a), new gc(a.right - a.left, a.bottom - a.top)) : new gc(b, c)
}
function Ad(a) {
  var b = qd(a), a = yd(a);
  return new cd(b.x, b.y, a.width, a.height)
}
function Bd(a, b) {
  var c = a.style;
  "opacity" in c ? c.opacity = b : "MozOpacity" in c ? c.MozOpacity = b : "filter" in c && (c.filter = "" === b ? "" : "alpha(opacity=" + 100 * b + ")")
}
function Cd(a, b) {
  a.style.display = b ? "" : "none"
}
function Dd(a) {
  a = a.style;
  a.position = "relative";
  Ob && !dc("8") ? (a.zoom = "1", a.display = "inline") : a.display = Pb ? dc("1.9a") ? "inline-block" : "-moz-inline-box" : "inline-block"
}
function rd(a) {
  return"rtl" == id(a, "direction")
}
var Ed = Pb ? "MozUserSelect" : Qb ? "WebkitUserSelect" : k;
function Fd(a, b, c) {
  c = !c ? a.getElementsByTagName("*") : k;
  if(Ed) {
    if(b = b ? "none" : "", a.style[Ed] = b, c) {
      for(var a = 0, e;e = c[a];a++) {
        e.style[Ed] = b
      }
    }
  }else {
    if(Ob || Nb) {
      if(b = b ? "on" : "", a.setAttribute("unselectable", b), c) {
        for(a = 0;e = c[a];a++) {
          e.setAttribute("unselectable", b)
        }
      }
    }
  }
}
function Gd(a, b) {
  if(/^\d+px?$/.test(b)) {
    return parseInt(b, 10)
  }
  var c = a.style.left, e = a.runtimeStyle.left;
  a.runtimeStyle.left = a.currentStyle.left;
  a.style.left = b;
  var f = a.style.pixelLeft;
  a.style.left = c;
  a.runtimeStyle.left = e;
  return f
}
var Hd = {thin:2, medium:4, thick:6};
function Id(a, b) {
  if("none" == hd(a, b + "Style")) {
    return 0
  }
  var c = hd(a, b + "Width");
  return c in Hd ? Hd[c] : Gd(a, c)
}
function Jd(a) {
  if(Ob) {
    var b = Id(a, "borderLeft"), c = Id(a, "borderRight"), e = Id(a, "borderTop"), a = Id(a, "borderBottom");
    return new bd(e, c, a, b)
  }
  b = gd(a, "borderLeftWidth");
  c = gd(a, "borderRightWidth");
  e = gd(a, "borderTopWidth");
  a = gd(a, "borderBottomWidth");
  return new bd(parseFloat(e), parseFloat(c), parseFloat(a), parseFloat(b))
}
;function Kd(a) {
  if("function" == typeof a.ge) {
    return a.ge()
  }
  if(ka(a)) {
    return a.split("")
  }
  if(ja(a)) {
    for(var b = [], c = a.length, e = 0;e < c;e++) {
      b.push(a[e])
    }
    return b
  }
  return qb(a)
}
function Ld(a) {
  if("function" == typeof a.Zh) {
    return a.Zh()
  }
  if("function" != typeof a.ge) {
    if(ja(a) || ka(a)) {
      for(var b = [], a = a.length, c = 0;c < a;c++) {
        b.push(c)
      }
      return b
    }
    return rb(a)
  }
}
function Md(a, b, c) {
  if("function" == typeof a.forEach) {
    a.forEach(b, c)
  }else {
    if(ja(a) || ka(a)) {
      Va(a, b, c)
    }else {
      for(var e = Ld(a), f = Kd(a), h = f.length, j = 0;j < h;j++) {
        b.call(c, f[j], e && e[j], a)
      }
    }
  }
}
;var Nd = "StopIteration" in da ? da.StopIteration : Error("StopIteration");
function Od() {
}
Od.prototype.next = function() {
  d(Nd)
};
Od.prototype.aC = function() {
  return this
};
function Pd(a) {
  if(a instanceof Od) {
    return a
  }
  if("function" == typeof a.aC) {
    return a.aC(m)
  }
  if(ja(a)) {
    var b = 0, c = new Od;
    c.next = function() {
      for(;;) {
        b >= a.length && d(Nd);
        if(b in a) {
          return a[b++]
        }
        b++
      }
    };
    return c
  }
  d(Error("Not implemented"))
}
function Qd(a, b, c) {
  if(ja(a)) {
    try {
      Va(a, b, c)
    }catch(e) {
      e !== Nd && d(e)
    }
  }else {
    a = Pd(a);
    try {
      for(;;) {
        b.call(c, a.next(), g, a)
      }
    }catch(f) {
      f !== Nd && d(f)
    }
  }
}
;function Rd(a, b) {
  this.Mc = {};
  this.xz = {};
  var c = arguments.length;
  if(1 < c) {
    c % 2 && d(Error("Uneven number of arguments"));
    for(var e = 0;e < c;e += 2) {
      this.set(arguments[e], arguments[e + 1])
    }
  }else {
    if(a) {
      a instanceof Rd ? (c = a.Zh(), e = a.ge()) : (c = rb(a), e = qb(a));
      for(var f = 0;f < c.length;f++) {
        this.set(c[f], e[f])
      }
    }
  }
}
s = Rd.prototype;
s.pa = 0;
s.yw = 0;
s.Da = q("pa");
s.ge = function() {
  var a = [], b;
  for(b in this.Mc) {
    ":" == b.charAt(0) && a.push(this.Mc[b])
  }
  return a
};
s.Zh = function() {
  var a = [], b;
  for(b in this.Mc) {
    ":" == b.charAt(0) && a.push(Sd(this, b))
  }
  return a
};
s.Oh = function(a) {
  return":" + a in this.Mc
};
s.ay = function(a, b) {
  if(this === a) {
    return i
  }
  if(this.pa != a.Da()) {
    return m
  }
  var c = b || Td, e;
  for(e in this.Mc) {
    if(e = Sd(this, e), !c(this.get(e), a.get(e))) {
      return m
    }
  }
  return i
};
function Td(a, b) {
  return a === b
}
s.di = function() {
  return 0 == this.pa
};
s.clear = function() {
  this.Mc = {};
  this.yw = this.pa = 0;
  this.xz = {}
};
s.remove = function(a) {
  a = ":" + a;
  return tb(this.Mc, a) ? (delete this.xz[a], this.pa--, this.yw++, i) : m
};
s.get = function(a, b) {
  var c = ":" + a;
  return c in this.Mc ? this.Mc[c] : b
};
s.set = function(a, b) {
  var c = ":" + a;
  c in this.Mc || (this.yw++, this.pa++, la(a) && (this.xz[c] = i));
  this.Mc[c] = b
};
s.clone = function() {
  return new Rd(this)
};
s.Hi = function() {
  var a = new Rd, b;
  for(b in this.Mc) {
    a.set(this.Mc[b], Sd(this, b))
  }
  return a
};
s.aC = function(a) {
  var b = 0, c = this.Zh(), e = this.Mc, f = this.yw, h = this, j = new Od;
  j.next = function() {
    for(;;) {
      f != h.yw && d(Error("The map has changed since the iterator was created"));
      b >= c.length && d(Nd);
      var j = c[b++];
      return a ? j : e[":" + j]
    }
  };
  return j
};
function Sd(a, b) {
  var c = b.substring(1);
  return a.xz[b] ? Number(c) : c
}
;function Ud(a) {
  return Vd(a || arguments.callee.caller, [])
}
function Vd(a, b) {
  var c = [];
  if(ab(b, a)) {
    c.push("[...circular reference...]")
  }else {
    if(a && 50 > b.length) {
      c.push(Wd(a) + "(");
      for(var e = a.arguments, f = 0;f < e.length;f++) {
        0 < f && c.push(", ");
        var h;
        h = e[f];
        switch(typeof h) {
          case "object":
            h = h ? "object" : "null";
            break;
          case "string":
            break;
          case "number":
            h = "" + h;
            break;
          case "boolean":
            h = h ? "true" : "false";
            break;
          case "function":
            h = (h = Wd(h)) ? h : "[fn]";
            break;
          default:
            h = typeof h
        }
        40 < h.length && (h = h.substr(0, 40) + "...");
        c.push(h)
      }
      b.push(a);
      c.push(")\n");
      try {
        c.push(Vd(a.caller, b))
      }catch(j) {
        c.push("[exception trying to get caller]\n")
      }
    }else {
      a ? c.push("[...long stack...]") : c.push("[end]")
    }
  }
  return c.join("")
}
function Wd(a) {
  if(Xd[a]) {
    return Xd[a]
  }
  a = "" + a;
  if(!Xd[a]) {
    var b = /function ([^\(]+)/.exec(a);
    Xd[a] = b ? b[1] : "[Anonymous]"
  }
  return Xd[a]
}
var Xd = {};
function Yd() {
}
Yd.prototype.mD = m;
Yd.prototype.Ku = q("mD");
Yd.prototype.ba = function() {
  this.mD || (this.mD = i, this.n())
};
Yd.prototype.n = function() {
  this.iR && Zd.apply(k, this.iR)
};
function $d(a) {
  a && "function" == typeof a.ba && a.ba()
}
function Zd(a) {
  for(var b = 0, c = arguments.length;b < c;++b) {
    var e = arguments[b];
    ja(e) ? Zd.apply(k, e) : $d(e)
  }
}
;function ae(a, b) {
  this.Bg = b;
  this.Wt = [];
  a > this.Bg && d(Error("[goog.structs.SimplePool] Initial cannot be greater than max"));
  for(var c = 0;c < a;c++) {
    this.Wt.push(this.Ex())
  }
}
C(ae, Yd);
s = ae.prototype;
s.dK = k;
s.GK = k;
function be(a, b) {
  a.Wt.length < a.Bg ? a.Wt.push(b) : a.lD(b)
}
s.Ex = function() {
  return this.dK ? this.dK() : {}
};
s.lD = function(a) {
  if(this.GK) {
    this.GK(a)
  }else {
    if(na(a)) {
      if(ma(a.ba)) {
        a.ba()
      }else {
        for(var b in a) {
          delete a[b]
        }
      }
    }
  }
};
s.n = function() {
  ae.e.n.call(this);
  for(var a = this.Wt;a.length;) {
    this.lD(a.pop())
  }
  delete this.Wt
};
function ce(a, b, c, e, f) {
  this.reset(a, b, c, e, f)
}
ce.prototype.FD = k;
ce.prototype.ED = k;
var de = 0;
ce.prototype.reset = function(a, b, c, e, f) {
  "number" == typeof f || de++;
  this.aP = e || va();
  this.tf = a;
  this.VM = b;
  this.GT = c;
  delete this.FD;
  delete this.ED
};
ce.prototype.qH = ba("tf");
function ee(a) {
  this.Bk = a
}
ee.prototype.Ta = k;
ee.prototype.tf = k;
ee.prototype.fb = k;
ee.prototype.yu = k;
function fe(a, b) {
  this.name = a;
  this.value = b
}
fe.prototype.toString = q("name");
var ge = new fe("SHOUT", 1200), he = new fe("SEVERE", 1E3), ie = new fe("WARNING", 900), je = new fe("INFO", 800), ke = new fe("CONFIG", 700), le = new fe("FINE", 500);
s = ee.prototype;
s.getName = q("Bk");
s.getParent = q("Ta");
s.aL = function() {
  this.fb || (this.fb = {});
  return this.fb
};
s.qH = ba("tf");
function me(a) {
  return a.tf ? a.tf : a.Ta ? me(a.Ta) : k
}
s.log = function(a, b, c) {
  if(a.value >= me(this).value) {
    a = this.gS(a, b, c);
    b = "log:" + a.VM;
    da.console && (da.console.timeStamp ? da.console.timeStamp(b) : da.console.markTimeline && da.console.markTimeline(b));
    da.msWriteProfilerMark && da.msWriteProfilerMark(b);
    for(b = this;b;) {
      var c = b, e = a;
      if(c.yu) {
        for(var f = 0, h = g;h = c.yu[f];f++) {
          h(e)
        }
      }
      b = b.getParent()
    }
  }
};
s.gS = function(a, b, c) {
  var e = new ce(a, "" + b, this.Bk);
  if(c) {
    e.FD = c;
    var f;
    var h = arguments.callee.caller;
    try {
      var j;
      var l = ea("window.location.href");
      if(ka(c)) {
        j = {message:c, name:"Unknown error", lineNumber:"Not available", fileName:l, stack:"Not available"}
      }else {
        var n, o, u = m;
        try {
          n = c.lineNumber || c.LY || "Not available"
        }catch(t) {
          n = "Not available", u = i
        }
        try {
          o = c.fileName || c.filename || c.sourceURL || l
        }catch(v) {
          o = "Not available", u = i
        }
        j = u || !c.lineNumber || !c.fileName || !c.stack ? {message:c.message, name:c.name, lineNumber:n, fileName:o, stack:c.stack || "Not available"} : c
      }
      f = "Message: " + Ca(j.message) + '\nUrl: <a href="view-source:' + j.fileName + '" target="_new">' + j.fileName + "</a>\nLine: " + j.lineNumber + "\n\nBrowser stack:\n" + Ca(j.stack + "-> ") + "[end]\n\nJS stack traversal:\n" + Ca(Ud(h) + "-> ")
    }catch(y) {
      f = "Exception trying to expose exception! You win, we lose. " + y
    }
    e.ED = f
  }
  return e
};
s.yO = function(a, b) {
  this.log(ge, a, b)
};
s.jt = function(a, b) {
  this.log(ie, a, b)
};
s.info = function(a, b) {
  this.log(je, a, b)
};
function ne(a, b) {
  a.log(le, b, g)
}
var oe = {}, pe = k;
function qe() {
  pe || (pe = new ee(""), oe[""] = pe, pe.qH(ke))
}
function re(a) {
  qe();
  var b;
  if(!(b = oe[a])) {
    b = new ee(a);
    var c = a.lastIndexOf("."), e = a.substr(c + 1), c = re(a.substr(0, c));
    c.aL()[e] = b;
    b.Ta = c;
    oe[a] = b
  }
  return b
}
;function se() {
  this.Cl = [];
  this.yG = new Rd;
  this.gP = this.hP = this.iP = this.OO = 0;
  this.fw = new Rd;
  this.WJ = this.fP = 0;
  this.vz = 1;
  this.CD = new ae(0, 4E3);
  this.CD.Ex = function() {
    return new te
  };
  this.PO = new ae(0, 50);
  this.PO.Ex = function() {
    return new ue
  };
  var a = this;
  this.PE = new ae(0, 2E3);
  this.PE.Ex = function() {
    return"" + a.vz++
  };
  this.PE.lD = p()
}
se.prototype.gb = re("goog.debug.Trace");
function ue() {
  this.rI = this.time = this.count = 0
}
ue.prototype.toString = function() {
  var a = [];
  a.push(this.type, " ", this.count, " (", Math.round(10 * this.time) / 10, " ms)");
  this.rI && a.push(" [VarAlloc = ", this.rI, "]");
  return a.join("")
};
function te() {
}
function ve(a, b, c, e) {
  var f = [];
  -1 == c ? f.push("    ") : f.push(we(a.MK - c));
  f.push(" ", xe(a.MK - b));
  0 == a.DD ? f.push(" Start        ") : 1 == a.DD ? (f.push(" Done "), f.push(we(a.WY - a.startTime), " ms ")) : f.push(" Comment      ");
  f.push(e, a);
  0 < a.KW && f.push("[VarAlloc ", a.KW, "] ");
  return f.join("")
}
te.prototype.toString = function() {
  return this.type == k ? this.RQ : "[" + this.type + "] " + this.RQ
};
se.prototype.reset = function() {
  for(var a = 0;a < this.Cl.length;a++) {
    var b = this.CD.id;
    b && be(this.PE, b);
    be(this.CD, this.Cl[a])
  }
  this.Cl.length = 0;
  this.yG.clear();
  this.OO = va();
  this.WJ = this.fP = this.gP = this.hP = this.iP = 0;
  b = this.fw.Zh();
  for(a = 0;a < b.length;a++) {
    var c = this.fw.get(b[a]);
    c.count = 0;
    c.time = 0;
    c.rI = 0;
    be(this.PO, c)
  }
  this.fw.clear()
};
se.prototype.toString = function() {
  for(var a = [], b = -1, c = [], e = 0;e < this.Cl.length;e++) {
    var f = this.Cl[e];
    1 == f.DD && c.pop();
    a.push(" ", ve(f, this.OO, b, c.join("")));
    b = f.MK;
    a.push("\n");
    0 == f.DD && c.push("|  ")
  }
  if(0 != this.yG.Da()) {
    var h = va();
    a.push(" Unstopped timers:\n");
    Qd(this.yG, function(b) {
      a.push("  ", b, " (", h - b.startTime, " ms, started at ", xe(b.startTime), ")\n")
    })
  }
  b = this.fw.Zh();
  for(e = 0;e < b.length;e++) {
    c = this.fw.get(b[e]), 1 < c.count && a.push(" TOTAL ", c, "\n")
  }
  a.push("Total tracers created ", this.fP, "\n", "Total comments created ", this.WJ, "\n", "Overhead start: ", this.iP, " ms\n", "Overhead end: ", this.hP, " ms\n", "Overhead comment: ", this.gP, " ms\n");
  return a.join("")
};
function we(a) {
  var a = Math.round(a), b = "";
  1E3 > a && (b = " ");
  100 > a && (b = "  ");
  10 > a && (b = "   ");
  return b + a
}
function xe(a) {
  a = Math.round(a);
  return("" + (100 + a / 1E3 % 60)).substring(1, 3) + "." + ("" + (1E3 + a % 1E3)).substring(1, 4)
}
new se;
function ye() {
}
var ze = 0;
s = ye.prototype;
s.key = 0;
s.aq = m;
s.CC = m;
s.init = function(a, b, c, e, f, h) {
  ma(a) ? this.nM = i : a && a.handleEvent && ma(a.handleEvent) ? this.nM = m : d(Error("Invalid listener argument"));
  this.ls = a;
  this.proxy = b;
  this.src = c;
  this.type = e;
  this.capture = !!f;
  this.Hy = h;
  this.CC = m;
  this.key = ++ze;
  this.aq = m
};
s.handleEvent = function(a) {
  return this.nM ? this.ls.call(this.Hy || this.src, a) : this.ls.handleEvent.call(this.ls, a)
};
var Ae = !Ob || fc(9), Be = !Ob || fc(9), Ce = Ob && !dc("8");
!Qb || dc("528");
Pb && dc("1.9b") || Ob && dc("8") || Nb && dc("9.5") || Qb && dc("528");
!Pb || dc("8");
var De = {oX:"click", wX:"dblclick", WX:"mousedown", $X:"mouseup", ZX:"mouseover", YX:"mouseout", XX:"mousemove", oY:"selectstart", RX:"keypress", QX:"keydown", SX:"keyup", jX:"blur", HX:"focus", xX:"deactivate", IX:Ob ? "focusin" : "DOMFocusIn", JX:Ob ? "focusout" : "DOMFocusOut", mX:"change", nY:"select", pY:"submit", PX:"input", hY:"propertychange", BX:"dragstart", yX:"dragenter", AX:"dragover", zX:"dragleave", CX:"drop", uY:"touchstart", tY:"touchmove", sY:"touchend", rY:"touchcancel", fY:"createTouch" in 
document ? "touchstart" : "mousedown", eY:"createTouch" in document ? "touchmove" : "mousemove", dY:"createTouch" in document ? "touchend" : "mouseup", qX:"contextmenu", EX:"error", OX:"help", TX:"load", UX:"losecapture", jY:"readystatechange", kY:"resize", mY:"scroll", AY:"unload", NX:"hashchange", aY:"pagehide", bY:"pageshow", gY:"popstate", rX:"copy", cY:"paste", tX:"cut", gX:"beforecopy", hX:"beforecut", iX:"beforepaste", VX:"message", pX:"connect", vY:Qb ? "webkitTransitionEnd" : Nb ? "oTransitionEnd" : 
"transitionend"};
function Ee(a, b) {
  this.type = a;
  this.currentTarget = this.target = b
}
C(Ee, Yd);
s = Ee.prototype;
s.n = function() {
  delete this.type;
  delete this.target;
  delete this.currentTarget
};
s.nm = m;
s.Es = i;
s.stopPropagation = function() {
  this.nm = i
};
s.preventDefault = function() {
  this.Es = m
};
function Fe(a) {
  a.preventDefault()
}
;function Ge(a) {
  Ge[" "](a);
  return a
}
Ge[" "] = fa;
function Ke(a, b) {
  a && this.init(a, b)
}
C(Ke, Ee);
var Le = [1, 4, 2];
s = Ke.prototype;
s.target = k;
s.relatedTarget = k;
s.offsetX = 0;
s.offsetY = 0;
s.clientX = 0;
s.clientY = 0;
s.screenX = 0;
s.screenY = 0;
s.button = 0;
s.keyCode = 0;
s.charCode = 0;
s.ctrlKey = m;
s.altKey = m;
s.shiftKey = m;
s.metaKey = m;
s.CG = m;
s.Rd = k;
s.init = function(a, b) {
  var c = this.type = a.type;
  Ee.call(this, c);
  this.target = a.target || a.srcElement;
  this.currentTarget = b;
  var e = a.relatedTarget;
  if(e) {
    if(Pb) {
      var f;
      a: {
        try {
          Ge(e.nodeName);
          f = i;
          break a
        }catch(h) {
        }
        f = m
      }
      f || (e = k)
    }
  }else {
    "mouseover" == c ? e = a.fromElement : "mouseout" == c && (e = a.toElement)
  }
  this.relatedTarget = e;
  this.offsetX = a.offsetX !== g ? a.offsetX : a.layerX;
  this.offsetY = a.offsetY !== g ? a.offsetY : a.layerY;
  this.clientX = a.clientX !== g ? a.clientX : a.pageX;
  this.clientY = a.clientY !== g ? a.clientY : a.pageY;
  this.screenX = a.screenX || 0;
  this.screenY = a.screenY || 0;
  this.button = a.button;
  this.keyCode = a.keyCode || 0;
  this.charCode = a.charCode || ("keypress" == c ? a.keyCode : 0);
  this.ctrlKey = a.ctrlKey;
  this.altKey = a.altKey;
  this.shiftKey = a.shiftKey;
  this.metaKey = a.metaKey;
  this.CG = Hb ? a.metaKey : a.ctrlKey;
  this.state = a.state;
  this.Rd = a;
  delete this.Es;
  delete this.nm
};
function Me(a) {
  return(Ae ? 0 == a.Rd.button : "click" == a.type ? i : !!(a.Rd.button & Le[0])) && !(Qb && Hb && a.ctrlKey)
}
s.stopPropagation = function() {
  Ke.e.stopPropagation.call(this);
  this.Rd.stopPropagation ? this.Rd.stopPropagation() : this.Rd.cancelBubble = i
};
s.preventDefault = function() {
  Ke.e.preventDefault.call(this);
  var a = this.Rd;
  if(a.preventDefault) {
    a.preventDefault()
  }else {
    if(a.returnValue = m, Ce) {
      try {
        if(a.ctrlKey || 112 <= a.keyCode && 123 >= a.keyCode) {
          a.keyCode = -1
        }
      }catch(b) {
      }
    }
  }
};
s.FR = q("Rd");
s.n = function() {
  Ke.e.n.call(this);
  this.relatedTarget = this.currentTarget = this.target = this.Rd = k
};
var Ne = {}, Oe = {}, Qe = {}, Re = {};
function G(a, b, c, e, f) {
  if(b) {
    if(ha(b)) {
      for(var h = 0;h < b.length;h++) {
        G(a, b[h], c, e, f)
      }
      return k
    }
    var e = !!e, j = Oe;
    b in j || (j[b] = {pa:0, ti:0});
    j = j[b];
    e in j || (j[e] = {pa:0, ti:0}, j.pa++);
    var j = j[e], l = pa(a), n;
    j.ti++;
    if(j[l]) {
      n = j[l];
      for(h = 0;h < n.length;h++) {
        if(j = n[h], j.ls == c && j.Hy == f) {
          if(j.aq) {
            break
          }
          return n[h].key
        }
      }
    }else {
      n = j[l] = [], j.pa++
    }
    h = Se();
    h.src = a;
    j = new ye;
    j.init(c, h, a, b, e, f);
    c = j.key;
    h.key = c;
    n.push(j);
    Ne[c] = j;
    Qe[l] || (Qe[l] = []);
    Qe[l].push(j);
    a.addEventListener ? (a == da || !a.wK) && a.addEventListener(b, h, e) : a.attachEvent(b in Re ? Re[b] : Re[b] = "on" + b, h);
    return c
  }
  d(Error("Invalid event type"))
}
function Se() {
  var a = Te, b = Be ? function(c) {
    return a.call(b.src, b.key, c)
  } : function(c) {
    c = a.call(b.src, b.key, c);
    if(!c) {
      return c
    }
  };
  return b
}
function Ue(a, b, c, e, f) {
  if(ha(b)) {
    for(var h = 0;h < b.length;h++) {
      Ue(a, b[h], c, e, f)
    }
    return k
  }
  a = G(a, b, c, e, f);
  Ne[a].CC = i;
  return a
}
function Ve(a, b, c, e, f) {
  if(ha(b)) {
    for(var h = 0;h < b.length;h++) {
      Ve(a, b[h], c, e, f)
    }
  }else {
    if(e = !!e, a = We(a, b, e)) {
      for(h = 0;h < a.length;h++) {
        if(a[h].ls == c && a[h].capture == e && a[h].Hy == f) {
          Xe(a[h].key);
          break
        }
      }
    }
  }
}
function Xe(a) {
  if(!Ne[a]) {
    return m
  }
  var b = Ne[a];
  if(b.aq) {
    return m
  }
  var c = b.src, e = b.type, f = b.proxy, h = b.capture;
  c.removeEventListener ? (c == da || !c.wK) && c.removeEventListener(e, f, h) : c.detachEvent && c.detachEvent(e in Re ? Re[e] : Re[e] = "on" + e, f);
  c = pa(c);
  f = Oe[e][h][c];
  if(Qe[c]) {
    var j = Qe[c];
    bb(j, b);
    0 == j.length && delete Qe[c]
  }
  b.aq = i;
  f.XM = i;
  Ye(e, h, c, f);
  delete Ne[a];
  return i
}
function Ye(a, b, c, e) {
  if(!e.lz && e.XM) {
    for(var f = 0, h = 0;f < e.length;f++) {
      e[f].aq ? e[f].proxy.src = k : (f != h && (e[h] = e[f]), h++)
    }
    e.length = h;
    e.XM = m;
    0 == h && (delete Oe[a][b][c], Oe[a][b].pa--, 0 == Oe[a][b].pa && (delete Oe[a][b], Oe[a].pa--), 0 == Oe[a].pa && delete Oe[a])
  }
}
function Ze(a, b) {
  var c, e = 0, f = b == k, h = c == k;
  c = !!c;
  if(a == k) {
    pb(Qe, function(a) {
      for(var j = a.length - 1;0 <= j;j--) {
        var l = a[j];
        if((f || b == l.type) && (h || c == l.capture)) {
          Xe(l.key), e++
        }
      }
    })
  }else {
    var j = pa(a);
    if(Qe[j]) {
      for(var j = Qe[j], l = j.length - 1;0 <= l;l--) {
        var n = j[l];
        if((f || b == n.type) && (h || c == n.capture)) {
          Xe(n.key), e++
        }
      }
    }
  }
}
function We(a, b, c) {
  var e = Oe;
  return b in e && (e = e[b], c in e && (e = e[c], a = pa(a), e[a])) ? e[a] : k
}
function $e(a) {
  var a = pa(a), b = Qe[a];
  if(b) {
    var c = z(g), e = z(g);
    return c && e ? (b = Oe[g], !!b && !!b[g] && a in b[g]) : !c && !e ? i : Za(b, function(a) {
      return c && a.type == g || e && a.capture == g
    })
  }
  return m
}
function af(a, b, c, e) {
  var f = Oe;
  b in f && (f = f[b], c in f && bf(f[c], a, b, c, e))
}
function bf(a, b, c, e, f) {
  var h = 1, b = pa(b);
  if(a[b]) {
    a.ti--;
    a = a[b];
    a.lz ? a.lz++ : a.lz = 1;
    try {
      for(var j = a.length, l = 0;l < j;l++) {
        var n = a[l];
        n && !n.aq && (h &= cf(n, f) !== m)
      }
    }catch(o) {
      d(o)
    }finally {
      a.lz--, Ye(c, e, b, a)
    }
  }
  return Boolean(h)
}
function cf(a, b) {
  var c = a.handleEvent(b);
  a.CC && Xe(a.key);
  return c
}
function Te(a, b) {
  if(!Ne[a]) {
    return i
  }
  var c = Ne[a], e = c.type, f = Oe;
  if(!(e in f)) {
    return i
  }
  var f = f[e], h, j;
  if(!Be) {
    h = b || ea("window.event");
    var l = i in f, n = m in f;
    if(l) {
      if(0 > h.keyCode || h.returnValue != g) {
        return i
      }
      a: {
        var o = m;
        if(0 == h.keyCode) {
          try {
            h.keyCode = -1;
            break a
          }catch(u) {
            o = i
          }
        }
        if(o || h.returnValue == g) {
          h.returnValue = i
        }
      }
    }
    o = new Ke;
    o.init(h, this);
    h = i;
    try {
      if(l) {
        for(var t = [], v = o.currentTarget;v;v = v.parentNode) {
          t.push(v)
        }
        j = f[i];
        j.ti = j.pa;
        for(var y = t.length - 1;!o.nm && 0 <= y && j.ti;y--) {
          o.currentTarget = t[y], h &= bf(j, t[y], e, i, o)
        }
        if(n) {
          j = f[m];
          j.ti = j.pa;
          for(y = 0;!o.nm && y < t.length && j.ti;y++) {
            o.currentTarget = t[y], h &= bf(j, t[y], e, m, o)
          }
        }
      }else {
        h = cf(c, o)
      }
    }catch(J) {
      d(J)
    }finally {
      t && (t.length = 0), o.ba()
    }
    return h
  }
  e = new Ke(b, this);
  try {
    h = cf(c, e)
  }catch(M) {
    d(M)
  }finally {
    e.ba()
  }
  return h
}
var df = 0;
function ef(a) {
  return a + "_" + df++
}
;function ff(a) {
  this.xe = a;
  this.Qu = []
}
C(ff, Yd);
var gf = [];
ff.prototype.i = function(a, b, c, e, f) {
  ha(b) || (gf[0] = b, b = gf);
  for(var h = 0;h < b.length;h++) {
    this.Qu.push(G(a, b[h], c || this, e || m, f || this.xe || this))
  }
  return this
};
function hf(a, b, c, e, f, h) {
  if(ha(c)) {
    for(var j = 0;j < c.length;j++) {
      hf(a, b, c[j], e, f, h)
    }
  }else {
    a.Qu.push(Ue(b, c, e || a, f, h || a.xe || a))
  }
}
ff.prototype.H = function(a, b, c, e, f) {
  if(ha(b)) {
    for(var h = 0;h < b.length;h++) {
      this.H(a, b[h], c, e, f)
    }
  }else {
    a: {
      c = c || this;
      f = f || this.xe || this;
      e = !!e;
      if(a = We(a, b, e)) {
        for(b = 0;b < a.length;b++) {
          if(!a[b].aq && a[b].ls == c && a[b].capture == e && a[b].Hy == f) {
            a = a[b];
            break a
          }
        }
      }
      a = k
    }
    a && (a = a.key, Xe(a), bb(this.Qu, a))
  }
  return this
};
function jf(a) {
  Va(a.Qu, Xe);
  a.Qu.length = 0
}
ff.prototype.n = function() {
  ff.e.n.call(this);
  jf(this)
};
ff.prototype.handleEvent = function() {
  d(Error("EventHandler.handleEvent not implemented"))
};
function kf() {
}
x(kf);
kf.prototype.vz = 0;
kf.prototype.ty = function() {
  return":" + (this.vz++).toString(36)
};
kf.g();
function lf() {
}
C(lf, Yd);
s = lf.prototype;
s.wK = i;
s.Pn = k;
s.tH = ba("Pn");
s.addEventListener = function(a, b, c, e) {
  G(this, a, b, c, e)
};
s.removeEventListener = function(a, b, c, e) {
  Ve(this, a, b, c, e)
};
s.dispatchEvent = function(a) {
  var b = a.type || a, c = Oe;
  if(b in c) {
    if(ka(a)) {
      a = new Ee(a, this)
    }else {
      if(a instanceof Ee) {
        a.target = a.target || this
      }else {
        var e = a, a = new Ee(b, this);
        xb(a, e)
      }
    }
    var e = 1, f, c = c[b], b = i in c, h;
    if(b) {
      f = [];
      for(h = this;h;h = h.Pn) {
        f.push(h)
      }
      h = c[i];
      h.ti = h.pa;
      for(var j = f.length - 1;!a.nm && 0 <= j && h.ti;j--) {
        a.currentTarget = f[j], e &= bf(h, f[j], a.type, i, a) && a.Es != m
      }
    }
    if(m in c) {
      if(h = c[m], h.ti = h.pa, b) {
        for(j = 0;!a.nm && j < f.length && h.ti;j++) {
          a.currentTarget = f[j], e &= bf(h, f[j], a.type, m, a) && a.Es != m
        }
      }else {
        for(f = this;!a.nm && f && h.ti;f = f.Pn) {
          a.currentTarget = f, e &= bf(h, f, a.type, m, a) && a.Es != m
        }
      }
    }
    a = Boolean(e)
  }else {
    a = i
  }
  return a
};
s.n = function() {
  lf.e.n.call(this);
  Ze(this);
  this.Pn = k
};
function mf(a) {
  this.qa = a || mc();
  this.wv = nf
}
C(mf, lf);
mf.prototype.tT = kf.g();
var nf = k;
function of(a, b) {
  switch(a) {
    case 1:
      return b ? "disable" : "enable";
    case 2:
      return b ? "highlight" : "unhighlight";
    case 4:
      return b ? "activate" : "deactivate";
    case 8:
      return b ? "select" : "unselect";
    case 16:
      return b ? "check" : "uncheck";
    case 32:
      return b ? "focus" : "blur";
    case 64:
      return b ? "open" : "close"
  }
  d(Error("Invalid component state"))
}
s = mf.prototype;
s.ha = k;
s.Ra = m;
s.s = k;
s.wv = k;
s.q = k;
s.Ta = k;
s.fb = k;
s.Mh = k;
s.tP = m;
s.P = function() {
  return this.ha || (this.ha = this.tT.ty())
};
s.mq = function(a) {
  this.Ta && this.Ta.Mh && (tb(this.Ta.Mh, this.ha), ub(this.Ta.Mh, a, this));
  this.ha = a
};
s.b = q("s");
s.ma = function() {
  return this.Or || (this.Or = new ff(this))
};
s.wh = function(a) {
  this == a && d(Error("Unable to set parent component"));
  a && this.Ta && this.ha && this.Ta.op(this.ha) && this.Ta != a && d(Error("Unable to set parent component"));
  this.Ta = a;
  mf.e.tH.call(this, a)
};
s.getParent = q("Ta");
s.tH = function(a) {
  this.Ta && this.Ta != a && d(Error("Method not supported"));
  mf.e.tH.call(this, a)
};
s.u = q("qa");
s.m = function() {
  this.s = this.qa.createElement("div")
};
s.Na = function(a) {
  this.bq(a)
};
s.bq = function(a, b) {
  this.Ra && d(Error("Component already rendered"));
  this.s || this.m();
  a ? a.insertBefore(this.s, b || k) : this.qa.Lb.body.appendChild(this.s);
  (!this.Ta || this.Ta.Ra) && this.k()
};
s.Ka = function(a) {
  this.Ra && d(Error("Component already rendered"));
  if(a && this.rb(a)) {
    this.tP = i;
    if(!this.qa || this.qa.Lb != pc(a)) {
      this.qa = mc(a)
    }
    this.l(a);
    this.k()
  }else {
    d(Error("Invalid element to decorate"))
  }
};
s.rb = r(i);
s.l = ba("s");
s.k = function() {
  this.Ra = i;
  pf(this, function(a) {
    !a.Ra && a.b() && a.k()
  })
};
s.nb = function() {
  pf(this, function(a) {
    a.Ra && a.nb()
  });
  this.Or && jf(this.Or);
  this.Ra = m
};
s.n = function() {
  mf.e.n.call(this);
  this.Ra && this.nb();
  this.Or && (this.Or.ba(), delete this.Or);
  pf(this, function(a) {
    a.ba()
  });
  !this.tP && this.s && Kc(this.s);
  this.Ta = this.q = this.s = this.Mh = this.fb = k
};
s.a = q("q");
s.Bd = ba("q");
s.Ca = function(a, b) {
  this.Df(a, qf(this), b)
};
s.Df = function(a, b, c) {
  a.Ra && (c || !this.Ra) && d(Error("Component already rendered"));
  (0 > b || b > qf(this)) && d(Error("Child component index out of bounds"));
  if(!this.Mh || !this.fb) {
    this.Mh = {}, this.fb = []
  }
  a.getParent() == this ? (this.Mh[a.P()] = a, bb(this.fb, a)) : ub(this.Mh, a.P(), a);
  a.wh(this);
  hb(this.fb, b, 0, a);
  a.Ra && this.Ra && a.getParent() == this ? (c = this.La(), c.insertBefore(a.b(), c.children[b] || k)) : c ? (this.s || this.m(), b = rf(this, b + 1), a.bq(this.La(), b ? b.s : k)) : this.Ra && !a.Ra && a.s && a.k()
};
s.La = q("s");
function sf(a) {
  a.wv == k && (a.wv = rd(a.Ra ? a.s : a.qa.Lb.body));
  return a.wv
}
s.Os = function(a) {
  this.Ra && d(Error("Component already rendered"));
  this.wv = a
};
function tf(a) {
  return!!a.fb && 0 != a.fb.length
}
function qf(a) {
  return a.fb ? a.fb.length : 0
}
s.op = function(a) {
  return this.Mh && a ? (a in this.Mh ? this.Mh[a] : g) || k : k
};
function rf(a, b) {
  return a.fb ? a.fb[b] || k : k
}
function pf(a, b, c) {
  a.fb && Va(a.fb, b, c)
}
function uf(a, b) {
  return a.fb && b ? Ua(a.fb, b) : -1
}
s.removeChild = function(a, b) {
  if(a) {
    var c = ka(a) ? a : a.P(), a = this.op(c);
    c && a && (tb(this.Mh, c), bb(this.fb, a), b && (a.nb(), a.s && Kc(a.s)), a.wh(k))
  }
  a || d(Error("Child is not in parent component"));
  return a
};
function vf(a, b, c) {
  return a.removeChild(rf(a, b), c)
}
s.JN = function(a) {
  for(;tf(this);) {
    vf(this, 0, a)
  }
};
function wf(a, b) {
  a.setAttribute("role", b);
  a.RY = b
}
function xf(a, b, c) {
  a.setAttribute("aria-" + b, c)
}
;function yf() {
}
var zf;
x(yf);
s = yf.prototype;
s.Of = p();
s.m = function(a) {
  var b = a.u().m("div", this.ej(a).join(" "), a.jd());
  this.cA(a, b);
  return b
};
s.La = aa();
s.aj = function(a, b, c) {
  if(a = a.b ? a.b() : a) {
    if(Ob && !dc("7")) {
      var e = Af(lb(a), b);
      e.push(b);
      ua(c ? D : E, a).apply(k, e)
    }else {
      F(a, b, c)
    }
  }
};
s.rb = r(i);
s.Ka = function(a, b) {
  b.id && a.mq(b.id);
  var c = this.La(b);
  c && c.firstChild ? Bf(a, c.firstChild.nextSibling ? fb(c.childNodes) : c.firstChild) : a.Jd = k;
  var e = 0, f = this.J(), h = this.J(), j = m, l = m, c = m, n = lb(b);
  Va(n, function(a) {
    !j && a == f ? (j = i, h == f && (l = i)) : !l && a == h ? l = i : e |= this.mE(a)
  }, this);
  a.Wa = e;
  j || (n.push(f), h == f && (l = i));
  l || n.push(h);
  var o = a.bj;
  o && n.push.apply(n, o);
  if(Ob && !dc("7")) {
    var u = Af(n);
    0 < u.length && (n.push.apply(n, u), c = i)
  }
  if(!j || !l || o || c) {
    b.className = n.join(" ")
  }
  this.cA(a, b);
  return b
};
s.vk = function(a) {
  sf(a) && this.Os(a.b(), i);
  a.isEnabled() && this.ef(a, a.w())
};
s.cA = function(a, b) {
  a.isEnabled() || this.Og(b, 1, i);
  a.uc() && this.Og(b, 8, i);
  a.rd & 16 && this.Og(b, 16, a.ie());
  a.rd & 64 && this.Og(b, 64, a.Uf())
};
s.gc = function(a, b) {
  Fd(a, !b, !Ob && !Nb)
};
s.Os = function(a, b) {
  this.aj(a, this.J() + "-rtl", b)
};
s.Dn = function(a) {
  var b;
  return a.rd & 32 && (b = a.na()) ? Sc(b) : m
};
s.ef = function(a, b) {
  var c;
  if(a.rd & 32 && (c = a.na())) {
    if(!b && a.Wa & 32) {
      try {
        c.blur()
      }catch(e) {
      }
      a.Wa & 32 && a.bi(k)
    }
    Sc(c) != b && Tc(c, b)
  }
};
s.F = function(a, b) {
  Cd(a, b)
};
s.He = function(a, b, c) {
  var e = a.b();
  if(e) {
    var f = this.au(b);
    f && this.aj(a, f, c);
    this.Og(e, b, c)
  }
};
s.Og = function(a, b, c) {
  zf || (zf = {1:"disabled", 8:"selected", 16:"checked", 64:"expanded"});
  (b = zf[b]) && xf(a, b, c)
};
s.Nc = function(a, b) {
  var c = this.La(a);
  if(c && (Hc(c), b)) {
    if(ka(b)) {
      Pc(c, b)
    }else {
      var e = function(a) {
        if(a) {
          var b = pc(c);
          c.appendChild(ka(a) ? b.createTextNode(a) : a)
        }
      };
      ha(b) ? Va(b, e) : ja(b) && !("nodeType" in b) ? Va(fb(b), e) : e(b)
    }
  }
};
s.na = function(a) {
  return a.b()
};
s.J = r("goog-control");
s.ej = function(a) {
  var b = this.J(), c = [b], e = this.J();
  e != b && c.push(e);
  b = a.Wa;
  for(e = [];b;) {
    var f = b & -b;
    e.push(this.au(f));
    b &= ~f
  }
  c.push.apply(c, e);
  (a = a.bj) && c.push.apply(c, a);
  Ob && !dc("7") && c.push.apply(c, Af(c));
  return c
};
function Af(a, b) {
  var c = [];
  b && (a = a.concat([b]));
  Va([], function(e) {
    $a(e, ua(ab, a)) && (!b || ab(e, b)) && c.push(e.join("_"))
  });
  return c
}
s.au = function(a) {
  this.ox || Cf(this);
  return this.ox[a]
};
s.mE = function(a) {
  this.QO || (this.ox || Cf(this), this.QO = vb(this.ox));
  a = parseInt(this.QO[a], 10);
  return isNaN(a) ? 0 : a
};
function Cf(a) {
  var b = a.J();
  a.ox = {1:b + "-disabled", 2:b + "-hover", 4:b + "-active", 8:b + "-selected", 16:b + "-checked", 32:b + "-focused", 64:b + "-open"}
}
;function Df() {
}
C(Df, yf);
x(Df);
s = Df.prototype;
s.m = function() {
  return Ac("div", {"class":"etk-control " + this.J(), "data-etk-type":"Column", "data-etk-ctor":"{}", "data-etk-behaviors":"{}", "data-etk-events":"{}"})
};
s.rb = r(i);
s.xa = p();
s.vA = p();
s.zH = function(a, b) {
  F(a, this.J() + "-background", b)
};
s.BH = function(a, b) {
  F(a, this.J() + "-stretch", b)
};
s.Jv = p();
function Ef() {
  this.Mx = {nt:29, fl:6, eX:8, qY:16}
}
x(Ef);
function Ff() {
}
C(Ff, Df);
x(Ff);
Ff.prototype.xa = function(a, b, c) {
  var e = Ef.g();
  b ? (a.style.removeProperty("width"), a.style.setProperty("-webkit-flex", c.toString())) : (a.style.removeProperty("-webkit-flex"), a.style.setProperty("width", c * e.Mx.nt + (c - 1) * e.Mx.fl + "px"))
};
Ff.prototype.Ms = function(a, b) {
  b ? ob(a, Gf, Hf) : ob(a, Hf, Gf)
};
Ff.prototype.Jv = function(a, b) {
  F(a, If, b)
};
Ff.prototype.J = function() {
  return Hf
};
var If = "etk-column-margin", Hf = "etk-column-flexible", Gf = "etk-column-not-flexible";
function Jf(a, b, c, e, f, h, j, l) {
  var n, o = c.offsetParent;
  if(o) {
    var u = "HTML" == o.tagName || "BODY" == o.tagName;
    if(!u || "static" != jd(o)) {
      n = qd(o), u || (n = lc(n, new kc(o.scrollLeft, o.scrollTop)))
    }
  }
  o = Ad(a);
  if(u = pd(a)) {
    var t = new cd(u.left, u.top, u.right - u.left, u.bottom - u.top), u = Math.max(o.left, t.left), v = Math.min(o.left + o.width, t.left + t.width);
    if(u <= v) {
      var y = Math.max(o.top, t.top), t = Math.min(o.top + o.height, t.top + t.height);
      y <= t && (o.left = u, o.top = y, o.width = v - u, o.height = t - y)
    }
  }
  u = mc(a);
  y = mc(c);
  if(u.Lb != y.Lb) {
    var v = u.Lb.body, y = y.Pf(), t = new kc(0, 0), J = zc(pc(v)), M = v;
    do {
      var oa = J == y ? qd(M) : td(M);
      t.x += oa.x;
      t.y += oa.y
    }while(J && J != y && (M = J.frameElement) && (J = J.parent));
    v = lc(t, qd(v));
    Ob && !$c(u) && (v = lc(v, ad(u)));
    o.left += v.x;
    o.top += v.y
  }
  a = (b & 4 && rd(a) ? b ^ 2 : b) & -5;
  b = new kc(a & 2 ? o.left + o.width : o.left, a & 1 ? o.top + o.height : o.top);
  n && (b = lc(b, n));
  f && (b.x += (a & 2 ? -1 : 1) * f.x, b.y += (a & 1 ? -1 : 1) * f.y);
  var Q;
  if(j && (Q = pd(c)) && n) {
    Q.top -= n.y, Q.right -= n.x, Q.bottom -= n.y, Q.left -= n.x
  }
  return Kf(b, c, e, h, Q, j, l)
}
function Kf(a, b, c, e, f, h, j) {
  var a = a.clone(), l = 0, n = (c & 4 && rd(b) ? c ^ 2 : c) & -5, c = yd(b), j = j ? j.clone() : c.clone();
  if(e || 0 != n) {
    (n & 2 ? a.x -= j.width + (e ? e.right : 0) : e && (a.x += e.left), n & 1) ? a.y -= j.height + (e ? e.bottom : 0) : e && (a.y += e.top)
  }
  if(h) {
    if(f) {
      l = a;
      e = 0;
      if(65 == (h & 65) && (l.x < f.left || l.x >= f.right)) {
        h &= -2
      }
      if(132 == (h & 132) && (l.y < f.top || l.y >= f.bottom)) {
        h &= -5
      }
      l.x < f.left && h & 1 && (l.x = f.left, e |= 1);
      l.x < f.left && l.x + j.width > f.right && h & 16 && (j.width -= l.x + j.width - f.right, e |= 4);
      l.x + j.width > f.right && h & 1 && (l.x = Math.max(f.right - j.width, f.left), e |= 1);
      h & 2 && (e |= (l.x < f.left ? 16 : 0) | (l.x + j.width > f.right ? 32 : 0));
      l.y < f.top && h & 4 && (l.y = f.top, e |= 2);
      l.y >= f.top && l.y + j.height > f.bottom && h & 32 && (j.height -= l.y + j.height - f.bottom, e |= 8);
      l.y + j.height > f.bottom && h & 4 && (l.y = Math.max(f.bottom - j.height, f.top), e |= 2);
      h & 8 && (e |= (l.y < f.top ? 64 : 0) | (l.y + j.height > f.bottom ? 128 : 0));
      l = e
    }else {
      l = 256
    }
    if(l & 496) {
      return l
    }
  }
  kd(b, a);
  if(!(c == j || (!c || !j ? 0 : c.width == j.width && c.height == j.height))) {
    f = $c(mc(pc(b))), Ob && (!f || !dc("8")) ? (a = b.style, f ? (Ob ? (f = Gd(b, hd(b, "paddingLeft")), c = Gd(b, hd(b, "paddingRight")), h = Gd(b, hd(b, "paddingTop")), e = Gd(b, hd(b, "paddingBottom")), f = new bd(h, c, e, f)) : (f = gd(b, "paddingLeft"), c = gd(b, "paddingRight"), h = gd(b, "paddingTop"), e = gd(b, "paddingBottom"), f = new bd(parseFloat(h), parseFloat(c), parseFloat(e), parseFloat(f))), b = Jd(b), a.pixelWidth = j.width - b.left - f.left - f.right - b.right, a.pixelHeight = 
    j.height - b.top - f.top - f.bottom - b.bottom) : (a.pixelWidth = j.width, a.pixelHeight = j.height)) : (b = b.style, Pb ? b.MozBoxSizing = "border-box" : Qb ? b.WebkitBoxSizing = "border-box" : b.boxSizing = "border-box", b.width = j.width + "px", b.height = j.height + "px")
  }
  return l
}
;function Lf() {
}
Lf.prototype.Jb = p();
function Mf(a, b) {
  this.element = a;
  this.TC = b
}
C(Mf, Lf);
Mf.prototype.Jb = function(a, b, c) {
  Jf(this.element, this.TC, a, b, g, c)
};
function Nf(a, b, c) {
  Mf.call(this, a, b);
  this.xQ = c
}
C(Nf, Mf);
Nf.prototype.mL = r(5);
Nf.prototype.Jb = function(a, b, c, e) {
  var f = Jf(this.element, this.TC, a, b, k, c, 10, e);
  if(f & 496) {
    var h = Of(f, this.TC), b = Of(f, b), f = Jf(this.element, h, a, b, k, c, 10, e);
    f & 496 && (h = Of(f, h), b = Of(f, b), this.xQ ? Jf(this.element, h, a, b, k, c, this.mL(), e) : Jf(this.element, h, a, b, k, c, 0, e))
  }
};
function Of(a, b) {
  a & 48 && (b ^= 2);
  a & 192 && (b ^= 1);
  return b
}
;function Pf(a, b, c, e) {
  Nf.call(this, a, b, c || e);
  this.wV = e
}
C(Pf, Nf);
Pf.prototype.mL = function() {
  return 65 | (this.wV ? 32 : 132)
};
function Qf(a, b) {
  this.zx = a instanceof kc ? a : new kc(a, b)
}
C(Qf, Lf);
Qf.prototype.Jb = function(a, b, c, e) {
  var f = md(a);
  Jf(f, 0, a, b, new kc(this.zx.x + f.scrollLeft, this.zx.y + f.scrollTop), c, k, e)
};
function Rf(a, b) {
  Qf.call(this, a, b)
}
C(Rf, Qf);
Rf.prototype.FM = 0;
Rf.prototype.kA = ba("FM");
Rf.prototype.Jb = function(a, b, c, e) {
  var f = md(a), f = pd(f), h;
  h = mc(a);
  h = yc(h.Lb);
  h = new kc(this.zx.x + h.scrollLeft, this.zx.y + h.scrollTop);
  var j = b, l = Kf(h, a, j, c, f, 10, e);
  if(0 != (l & 496)) {
    if(l & 16 || l & 32) {
      j ^= 2
    }
    if(l & 64 || l & 128) {
      j ^= 1
    }
    l = Kf(h, a, j, c, f, 10, e);
    0 != (l & 496) && Kf(h, a, b, c, f, this.FM, e)
  }
};
function Sf(a, b) {
  this.Iu = a || 1;
  this.kw = b || Tf;
  this.yC = A(this.GW, this);
  this.FF = va()
}
C(Sf, lf);
Sf.prototype.enabled = m;
var Tf = da.window;
s = Sf.prototype;
s.Qa = k;
s.setInterval = function(a) {
  this.Iu = a;
  this.Qa && this.enabled ? (this.stop(), this.start()) : this.Qa && this.stop()
};
s.GW = function() {
  if(this.enabled) {
    var a = va() - this.FF;
    0 < a && a < 0.8 * this.Iu ? this.Qa = this.kw.setTimeout(this.yC, this.Iu - a) : (this.dispatchEvent(Uf), this.enabled && (this.Qa = this.kw.setTimeout(this.yC, this.Iu), this.FF = va()))
  }
};
s.start = function() {
  this.enabled = i;
  this.Qa || (this.Qa = this.kw.setTimeout(this.yC, this.Iu), this.FF = va())
};
s.stop = function() {
  this.enabled = m;
  this.Qa && (this.kw.clearTimeout(this.Qa), this.Qa = k)
};
s.n = function() {
  Sf.e.n.call(this);
  this.stop();
  delete this.kw
};
var Uf = "tick";
function Vf(a, b, c) {
  ma(a) ? c && (a = A(a, c)) : a && "function" == typeof a.handleEvent ? a = A(a.handleEvent, a) : d(Error("Invalid listener argument"));
  return 2147483647 < b ? -1 : Tf.setTimeout(a, b || 0)
}
function Wf(a) {
  Tf.clearTimeout(a)
}
;function Xf(a, b, c, e, f) {
  if(!Ob && (!Qb || !dc("525"))) {
    return i
  }
  if(Hb && f) {
    return Yf(a)
  }
  if(f && !e || !c && (17 == b || 18 == b) || Ob && e && b == a) {
    return m
  }
  switch(a) {
    case 13:
      return!(Ob && fc(9));
    case 27:
      return!Qb
  }
  return Yf(a)
}
function Yf(a) {
  if(48 <= a && 57 >= a || 96 <= a && 106 >= a || 65 <= a && 90 >= a || Qb && 0 == a) {
    return i
  }
  switch(a) {
    case 32:
    ;
    case 63:
    ;
    case 107:
    ;
    case 109:
    ;
    case 110:
    ;
    case 111:
    ;
    case 186:
    ;
    case 59:
    ;
    case 189:
    ;
    case 187:
    ;
    case 188:
    ;
    case 190:
    ;
    case 191:
    ;
    case 192:
    ;
    case 222:
    ;
    case 219:
    ;
    case 220:
    ;
    case 221:
      return i;
    default:
      return m
  }
}
;function Zf(a, b) {
  this.xe = new ff(this);
  var c = a || k;
  $f(this);
  this.s = c;
  b && (this.Ii = b)
}
C(Zf, lf);
s = Zf.prototype;
s.s = k;
s.vJ = i;
s.uJ = k;
s.Gp = m;
s.nW = m;
s.CF = -1;
s.AF = -1;
s.GL = m;
s.lR = i;
s.Ii = "toggle_display";
s.wg = q("Ii");
s.b = q("s");
function $f(a) {
  a.Gp && d(Error("Can not change this state of the popup while showing."))
}
s.w = q("Gp");
s.F = function(a) {
  this.Yv && this.Yv.stop();
  this.Cu && this.Cu.stop();
  a ? this.LH() : this.Tr()
};
s.Jb = fa;
s.LH = function() {
  if(!this.Gp && this.dispatchEvent("beforeshow")) {
    this.s || d(Error("Caller must call setElement before trying to show the popup"));
    this.Jb();
    var a = pc(this.s);
    this.GL && this.xe.i(a, "keydown", this.hU, i);
    if(this.vJ) {
      if(this.xe.i(a, "mousedown", this.Dz, i), Ob) {
        var b;
        try {
          b = a.activeElement
        }catch(c) {
        }
        for(;b && "IFRAME" == b.nodeName;) {
          try {
            var e = b.contentDocument || b.contentWindow.document
          }catch(f) {
            break
          }
          a = e;
          b = a.activeElement
        }
        this.xe.i(a, "mousedown", this.Dz, i);
        this.xe.i(a, "deactivate", this.dN)
      }else {
        this.xe.i(a, "blur", this.dN)
      }
    }
    "toggle_display" == this.Ii ? (this.s.style.visibility = "visible", Cd(this.s, i)) : "move_offscreen" == this.Ii && this.Jb();
    this.Gp = i;
    this.Yv ? (Ue(this.Yv, "end", this.qN, m, this), this.Yv.play()) : this.qN()
  }
};
s.Tr = function(a) {
  if(!this.Gp || !this.dispatchEvent({type:"beforehide", target:a})) {
    return m
  }
  this.xe && jf(this.xe);
  this.Cu ? (Ue(this.Cu, "end", ua(this.$J, a), m, this), this.Cu.play()) : this.$J(a);
  return i
};
s.$J = function(a) {
  "toggle_display" == this.Ii ? this.nW ? Vf(this.HL, 0, this) : this.HL() : "move_offscreen" == this.Ii && (this.s.style.left = "-200px", this.s.style.top = "-200px");
  this.Gp = m;
  this.AF = va();
  this.dispatchEvent({type:"hide", target:a})
};
s.HL = function() {
  this.s.style.visibility = "hidden";
  Cd(this.s, m)
};
s.qN = function() {
  this.CF = va();
  this.AF = -1;
  this.dispatchEvent("show")
};
s.Dz = function(a) {
  a = a.target;
  !Oc(this.s, a) && (!this.uJ || Oc(this.uJ, a)) && !(150 > va() - this.CF) && this.Tr(a)
};
s.hU = function(a) {
  27 == a.keyCode && this.Tr(a.target) && (a.preventDefault(), a.stopPropagation())
};
s.dN = function(a) {
  if(this.lR) {
    var b = pc(this.s);
    if(Ob || Nb) {
      if(a = b.activeElement, !a || Oc(this.s, a) || "BODY" == a.tagName) {
        return
      }
    }else {
      if(a.target != b) {
        return
      }
    }
    150 > va() - this.CF || this.Tr()
  }
};
s.n = function() {
  Zf.e.n.call(this);
  this.xe.ba();
  $d(this.Yv);
  $d(this.Cu);
  delete this.s;
  delete this.xe
};
function ag(a, b) {
  ma(a) || d(Error("Invalid component class " + a));
  ma(b) || d(Error("Invalid renderer class " + b));
  var c = pa(a);
  bg[c] = b
}
function cg(a, b) {
  a || d(Error("Invalid class name " + a));
  ma(b) || d(Error("Invalid decorator function " + b));
  dg[a] = b
}
var bg = {}, dg = {};
function eg(a, b) {
  a && this.qb(a, b)
}
C(eg, lf);
s = eg.prototype;
s.s = k;
s.ez = k;
s.xF = k;
s.fz = k;
s.Hn = -1;
s.Gn = -1;
var fg = {3:13, 12:144, 63232:38, 63233:40, 63234:37, 63235:39, 63236:112, 63237:113, 63238:114, 63239:115, 63240:116, 63241:117, 63242:118, 63243:119, 63244:120, 63245:121, 63246:122, 63247:123, 63248:44, 63272:46, 63273:36, 63275:35, 63276:33, 63277:34, 63289:144, 63302:45}, gg = {Up:38, Down:40, Left:37, Right:39, Enter:13, F1:112, F2:113, F3:114, F4:115, F5:116, F6:117, F7:118, F8:119, F9:120, F10:121, F11:122, F12:123, "U+007F":46, Home:36, End:35, PageUp:33, PageDown:34, Insert:45}, hg = {61:187, 
59:186}, ig = Ob || Qb && dc("525");
s = eg.prototype;
s.Rr = function(a) {
  if(Qb && (17 == this.Hn && !a.ctrlKey || 18 == this.Hn && !a.altKey)) {
    this.Gn = this.Hn = -1
  }
  ig && !Xf(a.keyCode, this.Hn, a.shiftKey, a.ctrlKey, a.altKey) ? this.handleEvent(a) : this.Gn = Pb && a.keyCode in hg ? hg[a.keyCode] : a.keyCode
};
s.cT = function() {
  this.Gn = this.Hn = -1
};
s.handleEvent = function(a) {
  var b = a.Rd, c, e;
  Ob && "keypress" == a.type ? (c = this.Gn, e = 13 != c && 27 != c ? b.keyCode : 0) : Qb && "keypress" == a.type ? (c = this.Gn, e = 0 <= b.charCode && 63232 > b.charCode && Yf(c) ? b.charCode : 0) : Nb ? (c = this.Gn, e = Yf(c) ? b.keyCode : 0) : (c = b.keyCode || this.Gn, e = b.charCode || 0, Hb && 63 == e && !c && (c = 191));
  var f = c, h = b.keyIdentifier;
  c ? 63232 <= c && c in fg ? f = fg[c] : 25 == c && a.shiftKey && (f = 9) : h && h in gg && (f = gg[h]);
  a = f == this.Hn;
  this.Hn = f;
  b = new jg(f, e, a, b);
  try {
    this.dispatchEvent(b)
  }finally {
    b.ba()
  }
};
s.b = q("s");
s.qb = function(a, b) {
  this.fz && this.detach();
  this.s = a;
  this.ez = G(this.s, "keypress", this, b);
  this.xF = G(this.s, "keydown", this.Rr, b, this);
  this.fz = G(this.s, "keyup", this.cT, b, this)
};
s.detach = function() {
  this.ez && (Xe(this.ez), Xe(this.xF), Xe(this.fz), this.fz = this.xF = this.ez = k);
  this.s = k;
  this.Gn = this.Hn = -1
};
s.n = function() {
  eg.e.n.call(this);
  this.detach()
};
function jg(a, b, c, e) {
  e && this.init(e, g);
  this.type = "key";
  this.keyCode = a;
  this.charCode = b;
  this.repeat = c
}
C(jg, Ke);
function kg(a, b, c) {
  mf.call(this, c);
  if(!b) {
    for(var b = this.constructor, e;b;) {
      e = pa(b);
      if(e = bg[e]) {
        break
      }
      b = b.e ? b.e.constructor : k
    }
    b = e ? ma(e.g) ? e.g() : new e : k
  }
  this.fa = b;
  this.Jd = a
}
C(kg, mf);
s = kg.prototype;
s.Jd = k;
s.Wa = 0;
s.rd = 39;
s.rC = 255;
s.QH = 0;
s.mb = i;
s.bj = k;
s.BE = i;
s.Rw = m;
s.Kz = k;
s.qF = q("BE");
function lg(a, b) {
  a.Ra && b != a.BE && mg(a, b);
  a.BE = b
}
s.na = function() {
  return this.fa.na(this)
};
s.nn = function() {
  return this.vc || (this.vc = new eg)
};
s.qO = function(a) {
  this.Ra && d(Error("Component already rendered"));
  this.b() && (this.s = k);
  this.fa = a
};
function ng(a, b) {
  b && (a.bj ? ab(a.bj, b) || a.bj.push(b) : a.bj = [b], a.fa.aj(a, b, i))
}
s.aj = function(a, b) {
  b ? ng(this, a) : a && this.bj && (bb(this.bj, a), 0 == this.bj.length && (this.bj = k), this.fa.aj(this, a, m))
};
s.m = function() {
  var a = this.fa.m(this);
  this.s = a;
  var b = this.Kz || this.fa.Of();
  b && wf(a, b);
  this.Rw || this.fa.gc(a, m);
  this.w() || this.fa.F(a, m)
};
s.La = function() {
  return this.fa.La(this.b())
};
s.rb = function(a) {
  return this.fa.rb(a)
};
s.l = function(a) {
  this.s = a = this.fa.Ka(this, a);
  var b = this.Kz || this.fa.Of();
  b && wf(a, b);
  this.Rw || this.fa.gc(a, m);
  this.mb = "none" != a.style.display
};
s.k = function() {
  kg.e.k.call(this);
  this.fa.vk(this);
  if(this.rd & -2 && (this.qF() && mg(this, i), this.rd & 32)) {
    var a = this.na();
    if(a) {
      var b = this.nn();
      b.qb(a);
      this.ma().i(b, "key", this.Ld).i(a, "focus", this.xn).i(a, "blur", this.bi)
    }
  }
};
function mg(a, b) {
  var c = a.ma(), e = a.b();
  b ? (c.i(e, "mouseover", a.yn).i(e, "mousedown", a.pk).i(e, "mouseup", a.zn).i(e, "mouseout", a.Gy), Ob && c.i(e, "dblclick", a.yL)) : (c.H(e, "mouseover", a.yn).H(e, "mousedown", a.pk).H(e, "mouseup", a.zn).H(e, "mouseout", a.Gy), Ob && c.H(e, "dblclick", a.yL))
}
s.nb = function() {
  kg.e.nb.call(this);
  this.vc && this.vc.detach();
  this.w() && this.isEnabled() && this.fa.ef(this, m)
};
s.n = function() {
  kg.e.n.call(this);
  this.vc && (this.vc.ba(), delete this.vc);
  delete this.fa;
  this.bj = this.Jd = k
};
s.jd = q("Jd");
s.Nc = function(a) {
  this.fa.Nc(this.b(), a);
  this.Jd = a
};
function Bf(a, b) {
  a.Jd = b
}
s.pc = function() {
  var a = this.jd();
  if(!a) {
    return""
  }
  a = ka(a) ? a : ha(a) ? Xa(a, Wc).join("") : Uc(a);
  return ya(a)
};
s.Od = function(a) {
  this.Nc(a)
};
s.Os = function(a) {
  kg.e.Os.call(this, a);
  var b = this.b();
  b && this.fa.Os(b, a)
};
s.gc = function(a) {
  this.Rw = a;
  var b = this.b();
  b && this.fa.gc(b, a)
};
s.w = q("mb");
s.F = function(a, b) {
  if(b || this.mb != a && this.dispatchEvent(a ? "show" : "hide")) {
    var c = this.b();
    c && this.fa.F(c, a);
    this.isEnabled() && this.fa.ef(this, a);
    this.mb = a;
    return i
  }
  return m
};
s.isEnabled = function() {
  return!(this.Wa & 1)
};
s.Oa = function(a) {
  var b = this.getParent();
  if((!b || "function" != typeof b.isEnabled || b.isEnabled()) && og(this, 1, !a)) {
    a || (this.setActive(m), this.Fe(m)), this.w() && this.fa.ef(this, a), this.He(1, !a)
  }
};
s.Fe = function(a) {
  og(this, 2, a) && this.He(2, a)
};
s.es = function() {
  return!!(this.Wa & 4)
};
s.setActive = function(a) {
  og(this, 4, a) && this.He(4, a)
};
s.uc = function() {
  return!!(this.Wa & 8)
};
s.oq = function(a) {
  og(this, 8, a) && this.He(8, a)
};
s.ie = function() {
  return!!(this.Wa & 16)
};
s.Hv = function(a) {
  og(this, 16, a) && this.He(16, a)
};
s.Pk = function(a) {
  og(this, 32, a) && this.He(32, a)
};
s.Uf = function() {
  return!!(this.Wa & 64)
};
s.Ac = function(a) {
  og(this, 64, a) && this.He(64, a)
};
s.He = function(a, b) {
  this.rd & a && b != !!(this.Wa & a) && (this.fa.He(this, a, b), this.Wa = b ? this.Wa | a : this.Wa & ~a)
};
function pg(a, b, c) {
  a.Ra && a.Wa & b && !c && d(Error("Component already rendered"));
  !c && a.Wa & b && a.He(b, m);
  a.rd = c ? a.rd | b : a.rd & ~b
}
function qg(a, b) {
  return!!(a.rC & b) && !!(a.rd & b)
}
function rg(a, b) {
  a.QH |= b
}
function og(a, b, c) {
  return!!(a.rd & b) && !!(a.Wa & b) != c && (!(a.QH & b) || a.dispatchEvent(of(b, c))) && !a.Ku()
}
s.yn = function(a) {
  !sg(a, this.b()) && this.dispatchEvent("enter") && this.isEnabled() && qg(this, 2) && this.Fe(i)
};
s.Gy = function(a) {
  !sg(a, this.b()) && this.dispatchEvent("leave") && (qg(this, 4) && this.setActive(m), qg(this, 2) && this.Fe(m))
};
function sg(a, b) {
  return!!a.relatedTarget && Oc(b, a.relatedTarget)
}
s.pk = function(a) {
  this.isEnabled() && (qg(this, 2) && this.Fe(i), Me(a) && (qg(this, 4) && this.setActive(i), this.fa.Dn(this) && this.na().focus()));
  !this.Rw && Me(a) && a.preventDefault()
};
s.zn = function(a) {
  this.isEnabled() && (qg(this, 2) && this.Fe(i), this.es() && this.si(a) && qg(this, 4) && this.setActive(m))
};
s.yL = function(a) {
  this.isEnabled() && this.si(a)
};
s.si = function(a) {
  qg(this, 16) && this.Hv(!this.ie());
  qg(this, 8) && this.oq(i);
  qg(this, 64) && this.Ac(!this.Uf());
  var b = new Ee("action", this);
  a && (b.altKey = a.altKey, b.ctrlKey = a.ctrlKey, b.metaKey = a.metaKey, b.shiftKey = a.shiftKey, b.CG = a.CG);
  return this.dispatchEvent(b)
};
s.xn = function() {
  qg(this, 32) && this.Pk(i)
};
s.bi = function() {
  qg(this, 4) && this.setActive(m);
  qg(this, 32) && this.Pk(m)
};
s.Ld = function(a) {
  return this.w() && this.isEnabled() && this.lj(a) ? (a.preventDefault(), a.stopPropagation(), i) : m
};
s.lj = function(a) {
  return 13 == a.keyCode && this.si(a)
};
ag(kg, yf);
cg("goog-control", function() {
  return new kg(k)
});
function tg() {
}
C(tg, yf);
x(tg);
tg.prototype.m = function(a) {
  return a.u().m("div", this.J())
};
tg.prototype.Ka = function(a, b) {
  b.id && a.mq(b.id);
  if("HR" == b.tagName) {
    var c = b, b = this.m(a);
    Ic(b, c);
    Kc(c)
  }else {
    D(b, this.J())
  }
  return b
};
tg.prototype.Nc = p();
tg.prototype.J = r("goog-menuseparator");
function ug(a, b) {
  kg.call(this, k, a || tg.g(), b);
  pg(this, 1, m);
  pg(this, 2, m);
  pg(this, 4, m);
  pg(this, 32, m);
  this.Wa = 1
}
C(ug, kg);
ug.prototype.k = function() {
  ug.e.k.call(this);
  wf(this.b(), "separator")
};
cg("goog-menuseparator", function() {
  return new ug
});
function vg() {
}
x(vg);
s = vg.prototype;
s.Of = p();
function wg(a, b) {
  a && (a.tabIndex = b ? 0 : -1)
}
s.m = function(a) {
  return a.u().m("div", this.ej(a).join(" "))
};
s.La = aa();
s.rb = function(a) {
  return"DIV" == a.tagName
};
s.Ka = function(a, b) {
  b.id && a.mq(b.id);
  var c = this.J(), e = m, f = lb(b);
  f && Va(f, function(b) {
    b == c ? e = i : b && this.AH(a, b, c)
  }, this);
  e || D(b, c);
  xg(this, a, this.La(b));
  return b
};
s.AH = function(a, b, c) {
  b == c + "-disabled" ? a.Oa(m) : b == c + "-horizontal" ? a.Qk(yg) : b == c + "-vertical" && a.Qk(zg)
};
function xg(a, b, c) {
  if(c) {
    for(var e = c.firstChild, f;e && e.parentNode == c;) {
      f = e.nextSibling;
      if(1 == e.nodeType) {
        var h = a.WD(e);
        h && (h.s = e, b.isEnabled() || h.Oa(m), b.Ca(h), h.Ka(e))
      }else {
        (!e.nodeValue || "" == za(e.nodeValue)) && c.removeChild(e)
      }
      e = f
    }
  }
}
s.WD = function(a) {
  a: {
    for(var b = lb(a), c = 0, e = b.length;c < e;c++) {
      if(a = b[c] in dg ? dg[b[c]]() : k) {
        break a
      }
    }
    a = k
  }
  return a
};
s.vk = function(a) {
  a = a.b();
  Fd(a, i, Pb);
  Ob && (a.hideFocus = i);
  var b = this.Of();
  b && wf(a, b)
};
s.na = function(a) {
  return a.b()
};
s.J = r("goog-container");
s.ej = function(a) {
  var b = this.J(), c = a.Ol() == yg, c = [b, c ? b + "-horizontal" : b + "-vertical"];
  a.isEnabled() || c.push(b + "-disabled");
  return c
};
function Ag() {
}
C(Ag, vg);
x(Ag);
s = Ag.prototype;
s.Of = r("menu");
s.rb = function(a) {
  return"UL" == a.tagName || Ag.e.rb.call(this, a)
};
s.WD = function(a) {
  return"HR" == a.tagName ? new ug : Ag.e.WD.call(this, a)
};
s.Vg = function(a, b) {
  return Oc(a.b(), b)
};
s.J = r("goog-menu");
s.vk = function(a) {
  Ag.e.vk.call(this, a);
  a = a.b();
  xf(a, "haspopup", "true")
};
function Bg(a) {
  ug.call(this, tg.g(), a)
}
C(Bg, ug);
cg("goog-menuseparator", function() {
  return new ug
});
function Cg() {
  this.Dt = []
}
C(Cg, yf);
x(Cg);
function Dg(a, b) {
  var c = a.Dt[b];
  if(!c) {
    switch(b) {
      case 0:
        c = a.J() + "-highlight";
        break;
      case 1:
        c = a.J() + "-checkbox";
        break;
      case 2:
        c = a.J() + "-content"
    }
    a.Dt[b] = c
  }
  return c
}
s = Cg.prototype;
s.Of = r("menuitem");
s.m = function(a) {
  var b = a.u().m("div", this.ej(a).join(" "), Eg(this, a.jd(), a.u()));
  Fg(this, a, b, !!(a.rd & 8) || !!(a.rd & 16));
  return b
};
s.La = function(a) {
  return a && a.firstChild
};
s.Ka = function(a, b) {
  var c = Mc(b), e = Dg(this, 2);
  c && -1 != c.className.indexOf(e) || b.appendChild(Eg(this, b.childNodes, a.u()));
  ab(lb(b), "goog-option") && (a.fA(i), this.fA(a, b, i));
  return Cg.e.Ka.call(this, a, b)
};
s.Nc = function(a, b) {
  var c = this.La(a), e = Gg(this, a) ? c.firstChild : k;
  Cg.e.Nc.call(this, a, b);
  e && !Gg(this, a) && c.insertBefore(e, c.firstChild || k)
};
function Eg(a, b, c) {
  a = Dg(a, 2);
  return c.m("div", a, b)
}
s.wH = function(a, b, c) {
  b && (wf(b, c ? "menuitemradio" : this.Of()), Fg(this, a, b, c))
};
s.fA = function(a, b, c) {
  b && (wf(b, c ? "menuitemcheckbox" : this.Of()), Fg(this, a, b, c))
};
function Gg(a, b) {
  var c = a.La(b);
  if(c) {
    var c = c.firstChild, e = Dg(a, 1);
    return!!c && !!c.className && -1 != c.className.indexOf(e)
  }
  return m
}
function Fg(a, b, c, e) {
  e != Gg(a, c) && (F(c, "goog-option", e), c = a.La(c), e ? (a = Dg(a, 1), c.insertBefore(b.u().m("div", a), c.firstChild || k)) : c.removeChild(c.firstChild))
}
s.au = function(a) {
  switch(a) {
    case 2:
      return Dg(this, 0);
    case 16:
    ;
    case 8:
      return"goog-option-selected";
    default:
      return Cg.e.au.call(this, a)
  }
};
s.mE = function(a) {
  var b = Dg(this, 0);
  switch(a) {
    case "goog-option-selected":
      return 16;
    case b:
      return 2;
    default:
      return Cg.e.mE.call(this, a)
  }
};
s.J = r("goog-menuitem");
function Hg(a, b, c, e) {
  kg.call(this, a, e || Cg.g(), c);
  this.ka(b)
}
C(Hg, kg);
s = Hg.prototype;
s.I = function() {
  var a = this.a();
  return a != k ? a : this.pc()
};
s.ka = function(a) {
  this.Bd(a)
};
s.wH = function(a) {
  pg(this, 8, a);
  this.ie() && !a && this.Hv(m);
  var b = this.b();
  b && this.fa.wH(this, b, a)
};
s.fA = function(a) {
  pg(this, 16, a);
  var b = this.b();
  b && this.fa.fA(this, b, a)
};
s.pc = function() {
  var a = this.jd();
  return ha(a) ? (a = Xa(a, function(a) {
    return ab(lb(a), "goog-menuitem-accel") ? "" : Wc(a)
  }).join(""), ya(a)) : Hg.e.pc.call(this)
};
s.zn = function(a) {
  var b = this.getParent();
  if(b) {
    var c = b.tN;
    b.tN = k;
    if(b = c && la(a.clientX)) {
      b = new kc(a.clientX, a.clientY), b = c == b ? i : !c || !b ? m : c.x == b.x && c.y == b.y
    }
    if(b) {
      return
    }
  }
  Hg.e.zn.call(this, a)
};
s.lj = function(a) {
  return a.keyCode == this.uz && this.si(a) ? i : Hg.e.lj.call(this, a)
};
s.kS = q("uz");
cg("goog-menuitem", function() {
  return new Hg(k)
});
function Ig(a, b, c) {
  mf.call(this, c);
  this.fa = b || vg.g();
  this.Rp = a || zg
}
C(Ig, mf);
var yg = "horizontal", zg = "vertical";
s = Ig.prototype;
s.yF = k;
s.vc = k;
s.fa = k;
s.Rp = k;
s.mb = i;
s.Sb = i;
s.KD = i;
s.qf = -1;
s.je = k;
s.ji = m;
s.fJ = m;
s.cV = i;
s.nl = k;
s.na = function() {
  return this.yF || this.fa.na(this)
};
s.nn = function() {
  return this.vc || (this.vc = new eg(this.na()))
};
s.qO = function(a) {
  this.b() && d(Error("Component already rendered"));
  this.fa = a
};
s.m = function() {
  this.s = this.fa.m(this)
};
s.La = function() {
  return this.fa.La(this.b())
};
s.rb = function(a) {
  return this.fa.rb(a)
};
s.l = function(a) {
  this.s = this.fa.Ka(this, a);
  "none" == a.style.display && (this.mb = m)
};
s.k = function() {
  Ig.e.k.call(this);
  pf(this, function(a) {
    a.Ra && Jg(this, a)
  }, this);
  var a = this.b();
  this.fa.vk(this);
  this.F(this.mb, i);
  this.ma().i(this, "enter", this.vE).i(this, "highlight", this.wE).i(this, "unhighlight", this.CE).i(this, "open", this.hT).i(this, "close", this.SS).i(a, "mousedown", this.pk).i(pc(a), "mouseup", this.US).i(a, ["mousedown", "mouseup", "mouseover", "mouseout"], this.QS);
  this.Dn() && Kg(this, i)
};
function Kg(a, b) {
  var c = a.ma(), e = a.na();
  b ? c.i(e, "focus", a.xn).i(e, "blur", a.bi).i(a.nn(), "key", a.Ld) : c.H(e, "focus", a.xn).H(e, "blur", a.bi).H(a.nn(), "key", a.Ld)
}
s.nb = function() {
  Lg(this, -1);
  this.je && this.je.Ac(m);
  this.ji = m;
  Ig.e.nb.call(this)
};
s.n = function() {
  Ig.e.n.call(this);
  this.vc && (this.vc.ba(), this.vc = k);
  this.fa = this.je = this.nl = this.yF = k
};
s.vE = r(i);
s.wE = function(a) {
  var b = uf(this, a.target);
  if(-1 < b && b != this.qf) {
    var c = Mg(this);
    c && c.Fe(m);
    this.qf = b;
    c = Mg(this);
    this.ji && c.setActive(i);
    this.cV && this.je && c != this.je && (c.rd & 64 ? c.Ac(i) : this.je.Ac(m))
  }
  xf(this.b(), "activedescendant", a.target.b().id)
};
s.CE = function(a) {
  a.target == Mg(this) && (this.qf = -1);
  xf(this.b(), "activedescendant", "")
};
s.hT = function(a) {
  if((a = a.target) && a != this.je && a.getParent() == this) {
    this.je && this.je.Ac(m), this.je = a
  }
};
s.SS = function(a) {
  a.target == this.je && (this.je = k)
};
s.pk = function(a) {
  this.Sb && (this.ji = i);
  var b = this.na();
  b && Sc(b) ? b.focus() : a.preventDefault()
};
s.US = function() {
  this.ji = m
};
s.QS = function(a) {
  var b;
  a: {
    b = a.target;
    if(this.nl) {
      for(var c = this.b();b && b !== c;) {
        var e = b.id;
        if(e in this.nl) {
          b = this.nl[e];
          break a
        }
        b = b.parentNode
      }
    }
    b = k
  }
  if(b) {
    switch(a.type) {
      case "mousedown":
        b.pk(a);
        break;
      case "mouseup":
        b.zn(a);
        break;
      case "mouseover":
        b.yn(a);
        break;
      case "mouseout":
        b.Gy(a)
    }
  }
};
s.xn = p();
s.bi = function() {
  Lg(this, -1);
  this.ji = m;
  this.je && this.je.Ac(m)
};
s.Ld = function(a) {
  return this.isEnabled() && this.w() && (0 != qf(this) || this.yF) && this.lj(a) ? (a.preventDefault(), a.stopPropagation(), i) : m
};
s.lj = function(a) {
  var b = Mg(this);
  if(b && "function" == typeof b.Ld && b.Ld(a) || this.je && this.je != b && "function" == typeof this.je.Ld && this.je.Ld(a)) {
    return i
  }
  if(a.shiftKey || a.ctrlKey || a.metaKey || a.altKey) {
    return m
  }
  switch(a.keyCode) {
    case 27:
      if(this.Dn()) {
        this.na().blur()
      }else {
        return m
      }
      break;
    case 36:
      Ng(this);
      break;
    case 35:
      Og(this);
      break;
    case 38:
      if(this.Rp == zg) {
        Pg(this)
      }else {
        return m
      }
      break;
    case 37:
      if(this.Rp == yg) {
        sf(this) ? Qg(this) : Pg(this)
      }else {
        return m
      }
      break;
    case 40:
      if(this.Rp == zg) {
        Qg(this)
      }else {
        return m
      }
      break;
    case 39:
      if(this.Rp == yg) {
        sf(this) ? Pg(this) : Qg(this)
      }else {
        return m
      }
      break;
    default:
      return m
  }
  return i
};
function Jg(a, b) {
  var c = b.b(), c = c.id || (c.id = b.P());
  a.nl || (a.nl = {});
  a.nl[c] = b
}
s.Ca = function(a, b) {
  Ig.e.Ca.call(this, a, b)
};
s.Df = function(a, b, c) {
  rg(a, 2);
  rg(a, 64);
  (this.Dn() || !this.fJ) && pg(a, 32, m);
  lg(a, m);
  Ig.e.Df.call(this, a, b, c);
  a.Ra && this.Ra && Jg(this, a);
  b <= this.qf && this.qf++
};
s.removeChild = function(a, b) {
  if(a = ka(a) ? this.op(a) : a) {
    var c = uf(this, a);
    -1 != c && (c == this.qf ? a.Fe(m) : c < this.qf && this.qf--);
    (c = a.b()) && c.id && this.nl && tb(this.nl, c.id)
  }
  a = Ig.e.removeChild.call(this, a, b);
  lg(a, i);
  return a
};
s.Ol = q("Rp");
s.Qk = function(a) {
  this.b() && d(Error("Component already rendered"));
  this.Rp = a
};
s.w = q("mb");
s.F = function(a, b) {
  if(b || this.mb != a && this.dispatchEvent(a ? "show" : "hide")) {
    this.mb = a;
    var c = this.b();
    c && (Cd(c, a), this.Dn() && wg(this.na(), this.Sb && this.mb), b || this.dispatchEvent(this.mb ? "aftershow" : "afterhide"));
    return i
  }
  return m
};
s.isEnabled = q("Sb");
s.Oa = function(a) {
  if(this.Sb != a && this.dispatchEvent(a ? "enable" : "disable")) {
    a ? (this.Sb = i, pf(this, function(a) {
      a.uP ? delete a.uP : a.Oa(i)
    })) : (pf(this, function(a) {
      a.isEnabled() ? a.Oa(m) : a.uP = i
    }), this.ji = this.Sb = m), this.Dn() && wg(this.na(), a && this.mb)
  }
};
s.Dn = q("KD");
s.ef = function(a) {
  a != this.KD && this.Ra && Kg(this, a);
  this.KD = a;
  this.Sb && this.mb && wg(this.na(), a)
};
function Lg(a, b) {
  var c = rf(a, b);
  c ? c.Fe(i) : -1 < a.qf && Mg(a).Fe(m)
}
s.Fe = function(a) {
  Lg(this, uf(this, a))
};
function Mg(a) {
  return rf(a, a.qf)
}
function Ng(a) {
  Rg(a, function(a, c) {
    return(a + 1) % c
  }, qf(a) - 1)
}
function Og(a) {
  Rg(a, function(a, c) {
    a--;
    return 0 > a ? c - 1 : a
  }, 0)
}
function Qg(a) {
  Rg(a, function(a, c) {
    return(a + 1) % c
  }, a.qf)
}
function Pg(a) {
  Rg(a, function(a, c) {
    a--;
    return 0 > a ? c - 1 : a
  }, a.qf)
}
function Rg(a, b, c) {
  for(var c = 0 > c ? uf(a, a.je) : c, e = qf(a), c = b.call(a, c, e), f = 0;f <= e;) {
    var h = rf(a, c);
    if(h && a.FJ(h)) {
      a.lH(c);
      break
    }
    f++;
    c = b.call(a, c, e)
  }
}
s.FJ = function(a) {
  return a.w() && a.isEnabled() && !!(a.rd & 2)
};
s.lH = function(a) {
  Lg(this, a)
};
function Sg() {
}
C(Sg, yf);
x(Sg);
Sg.prototype.J = r("goog-menuheader");
function Tg(a, b, c) {
  kg.call(this, a, c || Sg.g(), b);
  pg(this, 1, m);
  pg(this, 2, m);
  pg(this, 4, m);
  pg(this, 32, m);
  this.Wa = 1
}
C(Tg, kg);
cg("goog-menuheader", function() {
  return new Tg(k)
});
function Ug(a, b) {
  Ig.call(this, zg, b || Ag.g(), a);
  this.ef(m)
}
C(Ug, Ig);
s = Ug.prototype;
s.Jo = i;
s.hJ = m;
s.J = function() {
  return this.fa.J()
};
s.Vg = function(a) {
  if(this.fa.Vg(this, a)) {
    return i
  }
  for(var b = 0, c = qf(this);b < c;b++) {
    var e = rf(this, b);
    if("function" == typeof e.Vg && e.Vg(a)) {
      return i
    }
  }
  return m
};
s.jg = function(a) {
  this.Ca(a, i)
};
s.Qg = function(a, b) {
  this.Df(a, b, i)
};
s.removeItem = function(a) {
  (a = this.removeChild(a, i)) && a.ba()
};
s.Bj = function(a) {
  (a = vf(this, a, i)) && a.ba()
};
s.Hc = function(a) {
  return rf(this, a)
};
s.ij = function() {
  return qf(this)
};
s.Tb = function() {
  var a = [];
  pf(this, function(b) {
    a.push(b)
  });
  return a
};
s.uH = function(a, b) {
  var c = this.w();
  c || Cd(this.b(), i);
  ud(this.b(), a, b);
  c || Cd(this.b(), m)
};
s.jq = function(a) {
  (this.Jo = a) && this.ef(i)
};
s.F = function(a, b, c) {
  (b = Ug.e.F.call(this, a, b)) && a && this.Ra && this.Jo && this.na().focus();
  this.tN = a && c && la(c.clientX) ? new kc(c.clientX, c.clientY) : k;
  return b
};
s.vE = function(a) {
  this.Jo && this.na().focus();
  return Ug.e.vE.call(this, a)
};
s.FJ = function(a) {
  return(this.hJ || a.isEnabled()) && a.w() && !!(a.rd & 2)
};
s.l = function(a) {
  var b = this.fa, c;
  c = this.u();
  c = sc(c.Lb, "div", b.J() + "-content", a);
  for(var e = c.length, f = 0;f < e;f++) {
    xg(b, this, c[f])
  }
  Ug.e.l.call(this, a)
};
s.lj = function(a) {
  var b = Ug.e.lj.call(this, a);
  b || pf(this, function(c) {
    !b && c.kS && c.uz == a.keyCode && (this.isEnabled() && this.Fe(c), b = c.Ld(a))
  }, this);
  return b
};
function Vg(a, b) {
  Ug.call(this, a, b);
  this.jq(i);
  this.F(m, i);
  this.Fi = new Rd
}
C(Vg, Ug);
s = Vg.prototype;
s.JW = m;
s.CM = 0;
s.Fx = k;
s.l = function(a) {
  Vg.e.l.call(this, a);
  (a = a.getAttribute("for") || a.htmlFor) && this.qb(this.u().b(a), 1)
};
s.k = function() {
  Vg.e.k.call(this);
  Md(this.Fi, this.sJ, this);
  var a = this.ma();
  a.i(this, "action", this.UT);
  a.i(Yc(this.u()), "mousedown", this.gG, i);
  Qb && a.i(Yc(this.u()), "contextmenu", this.gG, i)
};
s.qb = function(a, b, c, e, f) {
  if(!a || !this.Fi.Oh(pa(a))) {
    a ? (b = {s:a, WO:b, LT:c, NK:e ? "contextmenu" : "mousedown", OM:f}, this.Fi.set(pa(a), b), a = b) : a = k, this.Ra && this.sJ(a)
  }
};
s.sJ = function(a) {
  this.ma().i(a.s, a.NK, this.vG)
};
s.detach = function(a) {
  (!a || !this.Fi.Oh(pa(a))) && d(Error("Menu not attached to provided element, unable to detach."));
  a = pa(a);
  if(this.Ra) {
    var b = this.Fi.get(a);
    this.ma().H(b.s, b.NK, this.vG)
  }
  this.Fi.remove(a)
};
s.GH = function(a, b, c) {
  b = z(a.WO) ? new Nf(a.s, a.WO, i) : new Rf(b, c);
  b.kA && b.kA(5);
  var e = a.LT, c = a.OM, f = a.s;
  if(((a = this.w()) || 150 > va() - this.CM) && this.JW) {
    this.hide()
  }else {
    if(this.Fx = f || k, this.dispatchEvent("beforeshow")) {
      e = "undefined" != typeof e ? e : 4, a || (this.b().style.visibility = "hidden"), Cd(this.b(), i), b.Jb(this.b(), e, c), a || (this.b().style.visibility = "visible"), Lg(this, -1), this.F(i)
    }
  }
};
s.hide = function() {
  this.w() && (this.F(m), this.w() || (this.CM = va(), this.Fx = k))
};
s.UT = function() {
  this.hide()
};
s.vG = function(a) {
  for(var b = this.Fi.Zh(), c = 0;c < b.length;c++) {
    var e = this.Fi.get(b[c]);
    if(e.s == a.currentTarget) {
      this.GH(e, a.clientX, a.clientY);
      a.preventDefault();
      a.stopPropagation();
      break
    }
  }
};
s.gG = function(a) {
  this.w() && !this.Vg(a.target) && this.hide()
};
s.bi = function(a) {
  Vg.e.bi.call(this, a);
  this.hide()
};
s.n = function() {
  Vg.e.n.call(this);
  this.Fi && (this.Fi.clear(), delete this.Fi)
};
function Wg() {
  Vg.call(this);
  this.extend()
}
C(Wg, Vg);
Vg.prototype.extend = function() {
  this.vG = p();
  this.bi = p();
  this.gG = function(a) {
    this.w() && !this.Vg(a.target) && !(a.target == this.Fx || Oc(this.Fx, a.target)) && this.hide()
  }
};
Wg.prototype.k = function() {
  Wg.e.k.call(this);
  var a = this.ma();
  this.na();
  a.i(this.nn(), "key", this.ZS)
};
Wg.prototype.ZS = function(a) {
  (27 == a.keyCode || 9 == a.keyCode) && this.hide();
  return m
};
Wg.prototype.WC = function() {
  return new Wg
};
function Xg(a, b) {
  this.type = a;
  this.currentTarget = this.target = b
}
xb(Xg.prototype, Ee.prototype);
function Yg(a, b, c, e, f) {
  a = new Xg(a, b);
  a.button = c || 0;
  c = e;
  if(!c && a.target && 1 == a.target.nodeType) {
    try {
      c = td(a.target)
    }catch(h) {
    }
  }
  a.clientX = c ? c.x : 0;
  a.clientY = c ? c.y : 0;
  a.screenX = a.clientX;
  a.screenY = a.clientY;
  f && xb(a, f);
  a.Es = i;
  f = [];
  for(c = a.target;c;c = c.parentNode) {
    f.push(c)
  }
  for(c = f.length - 1;0 <= c && !a.nm;c--) {
    af(f[c], a.type, i, new Ke(a, f[c]))
  }
  for(c = 0;c < f.length && !a.nm;c++) {
    af(f[c], a.type, m, new Ke(a, f[c]))
  }
}
;function Zg() {
}
C(Zg, yf);
x(Zg);
Zg.prototype.m = function() {
  var a = Ec();
  a.id = "etk-bl";
  a.style.setProperty("position", "absolute");
  a.style.setProperty("display", "none");
  a.style.setProperty("top", "0px");
  a.style.setProperty("left", "0px");
  a.style.setProperty("height", "10px");
  a.style.setProperty("width", "10px");
  a.style.setProperty("z-index", "99");
  a.style.setProperty("border-style", "solid");
  a.style.setProperty("border-width", "8 px");
  a.style.setProperty("border-color", "red");
  document.body.appendChild(a);
  return a
};
Zg.prototype.J = function() {
  return $g
};
Zg.prototype.rb = r(m);
var $g = "tr-blockinglayer";
function ah() {
  kg.call(this, k)
}
C(ah, kg);
B("tr.ui.BlockingLayer", ah);
ag(ah, Zg);
x(ah);
B("tr.ui.BlockingLayer", ah);
var bh = 1E4, ch = 2E4;
ah.prototype.Qa = k;
ah.prototype.Xy = m;
ah.prototype.oM = i;
ah.prototype.Mg = -1;
function dh(a) {
  a.oM && (a.oM = m, a = document.querySelector("[data-etk-type=App]"), a != k && (a.style.display = "block"))
}
ah.setTimeouts = function(a, b) {
  ch = a;
  bh = b
};
function eh(a, b, c) {
  if(a.Xy = b) {
    var e = c, e = w(e) ? e : m, e = e == i ? ch : bh;
    a.Mg = window.setTimeout(A(a.IW, a), e);
    fh.g().log("BlockingLayer is now blocking. Timer set for " + e + "ms.")
  }else {
    -1 !== a.Mg && (window.clearTimeout(a.Mg), fh.g().log("allowInput_ called. Timer cleared off."));
    for(a.F(m);0 < a.JG.length;) {
      var b = a.JG.shift(), f = b.event, h = b.type, b = document.elementFromPoint(f.clientX, f.clientY), c = new kc(f.clientX, f.clientY), j = f.button, l = "altKey,charCode,ctrlKey,keyCode,metaKey,platformModifierKey,shiftKey".split(","), n = {};
      for(e in l) {
        n[e] = f[e]
      }
      "mousemove" != h && fh.g().log("Replaying " + h + " at " + c.x + ", " + c.y);
      switch(h) {
        case "mouseup":
          f = j || 0;
          f = !Ae ? Le[f] : f;
          Yg("mouseup", b, f, c, n);
          break;
        case "mousedown":
          f = j || 0;
          f = !Ae ? Le[f] : f;
          Yg("mousedown", b, f, c, n);
          break;
        case "click":
          Yg("click", b, j, c, n)
      }
      if(a.Xy) {
        break
      }
    }
  }
}
ah.prototype.k = function() {
  this.F(m, i);
  var a = [], b;
  for(b in De) {
    a.push(De[b])
  }
  b = document.getElementsByTagName("html")[0];
  this.ma().i(b, a, A(this.VT, this), i)
};
ah.prototype.JG = [];
ah.prototype.VT = function(a) {
  var b = i;
  if(this.Xy) {
    switch(a.type) {
      case "mouseup":
      ;
      case "mousedown":
      ;
      case "click":
        fh.g().log("BlockingLayer had an event! " + a.type + " at " + a.clientX + ", " + a.clientY);
        a.type = a.type;
        this.JG.push({type:a.type, event:a});
        break;
      case "keydown":
        if(a.shiftKey && a.ctrlKey && 74 == a.keyCode || 123 == a.keyCode || 116 == a.keyCode) {
          b = m
        }
    }
    b && (a.stopPropagation(), a.preventDefault())
  }
};
ah.prototype.IW = function() {
  fh.g().log("Timer Elapsed.");
  H.g().Xv("No response from AppServer - the BlockingLayer timer expired")
};
function gh(a, b) {
  this.Rd = a;
  this.aa = b
}
s = gh.prototype;
s.type = "etk_event";
s.Rd = k;
s.dL = q("Rd");
s.aa = k;
s.iE = q("aa");
gh.prototype.getSender = gh.prototype.iE;
function hh(a, b) {
  this.Us = [];
  a !== g && (this.er = 0 < a ? a : 0);
  b !== g && (this.Kh = b);
  this.On = A(this.On, this)
}
s = hh.prototype;
s.HB = 10;
s.Kh = k;
s.Us = k;
s.er = 0;
s.lx = -1;
s.Fu = 1;
s.as = 0;
s.zr = k;
s.Wa = 0;
s.Mg = -1;
s.toString = function() {
  var a = "inputCount: " + this.as;
  this.zr !== k && (a += " firstIdle: " + this.zr.toISOString());
  return a += " allow: " + this.Fu + " max: " + this.lx + " timeLimit " + this.er
};
function ih(a) {
  0 !== a.Wa && (a.as = 0, a.Wa = 0, a.zr = k, jh(a, 0));
  if(0 < a.Us.length) {
    var b = a.Us.concat();
    a.Us.length = 0;
    return b
  }
  return k
}
function kh(a, b) {
  if(!(0 >= a.er || 0 === a.lx || 3 === a.Wa)) {
    ++a.as;
    var c = k;
    if(0 !== a.Wa) {
      1 === a.Wa && 0 <= a.lx && a.as > a.lx + a.Fu && (a.Wa = 2, jh(a, 0))
    }else {
      var e = 0;
      0 < a.Fu && (c = new Date, e = a.zr !== k ? c.getTime() - a.zr.getTime() : a.er, e >= a.er && (a.zr = c, a.Us.length = 0, a.as = 1));
      a.as > a.Fu && (a.Wa = 1, jh(a, a.er - e))
    }
    b !== g && (c === k && (c = new Date), b !== g && (e = {}, e.data = b, c !== g && (e.time = c), a.Us.push(e)))
  }
}
function jh(a, b) {
  if(window !== g && window !== k && (0 <= a.Mg && (window.clearTimeout(a.Mg), a.Mg = -1), 0 < b)) {
    a.Mg = window.setTimeout(a.On, b)
  }
}
s.On = function() {
  this.Mg = -1;
  this.Kh !== k && (this.Wa = 3, this.Kh());
  ih(this)
};
function lh(a) {
  if(w(this.Pf().externalHost)) {
    var b = function(b) {
      a(b.data)
    };
    w(this.Pf().externalHost.onmessage) && (this.OK = this.Pf().externalHost.onmessage, b = function(b) {
      this.OK(b);
      a(b.data)
    });
    this.Pf().externalHost.onmessage = A(b, this)
  }
}
lh.prototype.OK = k;
lh.prototype.Pf = function() {
  return window
};
lh.prototype.send = function(a) {
  this.Pf().externalHost && this.Pf().externalHost.postMessage(a)
};
function mh() {
  this.ah = []
}
s = mh.prototype;
s.Tl = 0;
s.Aq = 0;
s.dequeue = function() {
  if(this.Tl != this.Aq) {
    var a = this.ah[this.Tl];
    delete this.ah[this.Tl];
    this.Tl++;
    return a
  }
};
s.Da = function() {
  return this.Aq - this.Tl
};
s.di = function() {
  return 0 == this.Aq - this.Tl
};
s.clear = function() {
  this.Aq = this.Tl = this.ah.length = 0
};
s.contains = function(a) {
  return ab(this.ah, a)
};
s.remove = function(a) {
  a = Ua(this.ah, a);
  if(0 > a) {
    return m
  }
  a == this.Tl ? this.dequeue() : (cb(this.ah, a), this.Aq--);
  return i
};
s.ge = function() {
  return this.ah.slice(this.Tl, this.Aq)
};
function nh(a) {
  this.Pf().cefAppSrv && (this.Pf().cefAppSrv.onmessage = function(b) {
    a(b)
  })
}
nh.prototype.Pf = function() {
  return window
};
nh.prototype.send = function(a) {
  this.Pf().cefAppSrv.send(a)
};
re("goog.net.WebSocket");
ef("closed");
ef("error");
ef("message");
ef("opened");
function oh() {
  this.Bl = new mh;
  this.ov = new hh(1, A(this.Jz, this));
  this.ov.Fu = 0;
  this.SM = window.cefAppSrv ? new nh(A(this.lN, this)) : new lh(A(this.lN, this))
}
x(oh);
B("tr.ui.MessageRouterReal", oh);
s = oh.prototype;
s.SM = k;
s.Bl = k;
s.rv = m;
s.ov = k;
s.aJ = {};
s.postMessage = function(a, b, c) {
  fh.g().log("MessageRouter: queuing message " + JSON.stringify(a));
  var e = this.Bl;
  e.ah[e.Aq++] = a;
  this.rv = this.rv || b;
  (a = (a = ph(this.cj())) && a.Xy) && fh.g().log("WARNING: Message posted while the blocking layer is turned on - queued for later. The javascript control should use scope!");
  0 == this.Zn && this.rv && !a && this.Jz(c)
};
function qh(a, b, c) {
  try {
    var e = JSON.stringify(b);
    fh.g().log("MessageRouter: Sending out message: " + e);
    a.SM.send(e);
    var f = ph(a.cj());
    f && eh(f, i, c)
  }catch(h) {
    fh.g().log(h)
  }
}
s.Jz = function(a) {
  if(!a) {
    kh(this.ov);
    if(1 === this.ov.Wa) {
      return
    }
    ih(this.ov)
  }
  fh.g().log("MessageRouter: postQueueMessage() called with " + this.Bl.Da() + " in queue");
  this.rv = m;
  if(1 == this.Bl.Da()) {
    a = this.Bl.dequeue(), qh(this, a)
  }else {
    if(1 < this.Bl.Da()) {
      for(a = [];!this.Bl.di();) {
        var b = this.Bl.dequeue();
        a.push(JSON.stringify(b))
      }
      a = {gl:"", Ed:"event", Xf:{em:"BatchEvent", Ed:"string", Ji:JSON.stringify(a)}};
      qh(this, a, m)
    }
  }
};
s.Zn = 0;
function rh() {
  var a = oh.g();
  a.Zn--;
  0 > a.Zn && (fh.g().log("WARNING: MessageRouterReal.decrementScope() going below zero! This indicates a coding mishap."), a.Zn = 0);
  fh.g().log("MessageRouter: scope decremented to " + a.Zn);
  0 == a.Zn && !a.Bl.di() && a.rv && a.Jz()
}
s.lN = function(a) {
  try {
    var b;
    try {
      b = JSON.parse(a)
    }catch(c) {
      b = a
    }
    if("queue" == b.Ed) {
      for(var e = b.Xf, a = 0;a < e.length;a++) {
        sh(this, e[a])
      }
    }else {
      sh(this, b)
    }
  }catch(f) {
    this.cj().Xv(f), fh.g().log("Error processing message in messageRouter.onMessage()"), fh.g().log(f)
  }
};
function sh(a, b) {
  switch(b.Ed) {
    case "set":
      var c = b.Xf.em, e = b.Xf.Ji, f = b.Xf.Ed;
      if("CreateControl_Method" == c) {
        e = JSON.parse(e);
        c = e.type;
        f = JSON.stringify({appServerId:e.id});
        e = e.model;
        w(e) && (f = e);
        th(a.cj(), c, f, k, i);
        break
      }
      var h = a.aJ[b.gl];
      if(h) {
        if("bool" === f) {
          a: {
            if(w(e)) {
              if("boolean" == typeof e) {
                break a
              }
              if("false" === e.toLowerCase()) {
                e = m;
                break a
              }
            }
            e = i
          }
        }else {
          if("date" === f) {
            if(e) {
              var j = e.match(/\d+/)[0];
              (j = new Date(+j)) && (e = new uh(j.getFullYear(), j.getMonth(), j.getDate()))
            }else {
              e = new uh
            }
          }
        }
        a.cj().setProperty(h, c, e, f)
      }
      break;
    case "done":
      fh.g().log("MessageRouter: Received done.");
      e = ph(a.cj());
      eh(e, m);
      dh(e);
      a.Jz();
      break;
    case "error":
      e = "Exception from AppServer: " + b.Xf.em.toString() + "\n" + b.Xf.Ji.toString();
      w(ph(a.cj())) && (c = ph(a.cj()), eh(c, m), dh(c), a.cj().Xv(e));
      break;
    case "JET":
      a.yM || (JET && JET.GJ && JET.GJ.KY && (a.wF = JET.GJ), a.yM = i);
      a.wF && a.wF.XY(b.Xf);
      break;
    default:
      fh.g().log("tr.ui.MessageRouterReal: unrecognized message type: " + b.Ed)
  }
}
s.wF = k;
s.yM = m;
s.$p = function(a) {
  this.aJ[a.P()] = a
};
s.cj = function() {
  return H.g()
};
s.bA = function(a) {
  this.postMessage({gl:"", Ed:"init", Xf:a}, i, i)
};
s.Ev = function(a, b, c) {
  c === g && (c = m);
  this.postMessage({gl:a, Ed:"event", Xf:{em:b}}, c)
};
s.Nd = function(a, b, c, e) {
  this.postMessage({gl:a, Ed:"event", Xf:{em:b, Ed:"string", Ji:c}}, e)
};
s.iq = function(a, b, c, e) {
  this.postMessage({gl:a, Ed:"event", Xf:{em:b, Ed:"int", Ji:c}}, e)
};
s.Dv = function(a, b, c, e) {
  this.postMessage({gl:a, Ed:"event", Xf:{em:b, Ed:"float", Ji:c}}, e)
};
s.hq = function(a, b, c, e) {
  this.postMessage({gl:a, Ed:"event", Xf:{em:b, Ed:"bool", Ji:c}}, e)
};
s.fH = oh.prototype.hq;
s.$z = function(a, b, c, e) {
  this.postMessage({gl:a, Ed:"event", Xf:{em:b, Ed:"date", Ji:c}}, e)
};
s.aA = function(a, b, c, e) {
  this.postMessage({gl:a, Ed:"event", Xf:{em:b, Ed:"date", Ji:c.getTime()}}, e)
};
function vh() {
}
x(vh);
B("tr.ui.MessageRouterDummy", vh);
s = vh.prototype;
s.postMessage = p();
s.$p = p();
s.bA = p();
s.Ev = p();
s.Nd = p();
s.iq = p();
s.Dv = p();
s.hq = p();
s.fH = vh.prototype.hq;
s.$z = p();
s.aA = p();
s.cj = function() {
  return H.g()
};
B("tr.Environment", {DEFAULT:0, FULL_TOOLKIT:1, ASPNET:2});
window.tr.CURRENT_ENVIRONMENT = 0;
function wh() {
}
x(wh);
B("tr.ui.MessageRouter", wh);
function xh() {
  return vh.g()
}
s = wh.prototype;
s.postMessage = function(a, b, c) {
  xh().postMessage(a, b, c)
};
s.$p = function(a) {
  xh().$p(a)
};
s.bA = function(a) {
  xh().bA(a)
};
s.Ev = function(a, b, c) {
  xh().Ev(a, b, c)
};
s.Nd = function(a, b, c, e) {
  xh().Nd(a, b, c, e)
};
s.iq = function(a, b, c, e) {
  xh().iq(a, b, c, e)
};
s.Dv = function(a, b, c, e) {
  xh().Dv(a, b, c, e)
};
s.hq = function(a, b, c, e) {
  xh().hq(a, b, c, e)
};
s.fH = wh.prototype.hq;
s.$z = function(a, b, c, e) {
  xh().$z(a, b, c, e)
};
s.aA = function(a, b, c, e) {
  xh().aA(a, b, c, e)
};
s.cj = function() {
  return H.g()
};
function I(a, b, c, e, f) {
  this.B = new lf;
  w(a) && (this.aa = a);
  w(b) && (this.Fc = b);
  w(e) && (this.Kc = e);
  w(c) && (this.md = c);
  w(f) && (this.jJ = f)
}
s = I.prototype;
s.Fc = "";
s.aa = k;
s.jJ = m;
s.Kc = m;
s.md = m;
s.Tu = k;
s.nL = function() {
  w(this.Tu) || (this.Tu = new yh(k, "listenerChanged"));
  return this.Tu
};
I.prototype.getListenerChangedEvent = I.prototype.nL;
function zh(a) {
  w(a.Tu) && a.Tu.v(new Ee("listenersChanged"))
}
I.prototype.i = function(a, b) {
  G(this.B, "etk_event", a, g, b);
  zh(this)
};
I.prototype.listen = I.prototype.i;
I.prototype.H = function(a, b) {
  Ve(this.B, "etk_event", a, g, b);
  zh(this)
};
I.prototype.unlisten = I.prototype.H;
I.prototype.la = function() {
  Ze(this.B, "etk_event");
  zh(this)
};
I.prototype.unlistenAll = I.prototype.la;
I.prototype.eL = q("Fc");
I.prototype.iE = q("aa");
I.prototype.getSender = I.prototype.iE;
function Ah(a) {
  return 0 == H.g().Rg || a.jJ ? i : m
}
;function yh(a, b, c, e) {
  I.call(this, a, b, c, e)
}
C(yh, I);
yh.prototype.v = function(a) {
  a = new gh(a, this.aa);
  Ah(this) && (this.B.dispatchEvent(a), this.md == i && wh.g().Ev(this.aa.P(), this.Fc, this.Kc))
};
function Bh(a) {
  var b = oh.g();
  b.Zn++;
  fh.g().log("MessageRouter: scope incremented to " + b.Zn);
  try {
    a()
  }catch(c) {
    rh(), d(c)
  }
  rh()
}
;function Ch(a, b, c, e) {
  gh.call(this, a, e);
  this.X = b;
  this.Ga = c
}
C(Ch, gh);
Ch.prototype.type = "etk_String_changed";
Ch.prototype.X = "";
Ch.prototype.Jc = q("X");
Ch.prototype.getPrevious = Ch.prototype.Jc;
Ch.prototype.Ga = "";
Ch.prototype.qc = q("Ga");
Ch.prototype.getCurrent = Ch.prototype.qc;
function Dh(a, b, c, e) {
  I.call(this, a, w(b) ? b : "Changed", c, e)
}
C(Dh, I);
Dh.prototype.X = "";
Dh.prototype.i = function(a, b) {
  G(this.B, "etk_String_changed", a, g, b)
};
Dh.prototype.listen = Dh.prototype.i;
Dh.prototype.H = function(a, b) {
  Ve(this.B, "etk_String_changed", a, g, b)
};
Dh.prototype.unlisten = Dh.prototype.H;
Dh.prototype.la = function() {
  Ze(this.B, "etk_String_changed")
};
Dh.prototype.unlistenAll = Dh.prototype.la;
Dh.prototype.v = function(a, b) {
  var c = new Ch(b, this.X, a, this.aa);
  this.X = a;
  Ah(this) && (this.B.dispatchEvent(c), this.md == i && wh.g().Nd(this.aa.P(), this.Fc, a, this.Kc))
};
function Eh(a, b, c, e) {
  gh.call(this, a, e);
  this.X = b;
  this.Ga = c
}
C(Eh, gh);
Eh.prototype.type = "etk_AppState_changed";
Eh.prototype.X = 0;
Eh.prototype.Jc = q("X");
Eh.prototype.getPrevious = Eh.prototype.Jc;
Eh.prototype.Ga = 0;
Eh.prototype.qc = q("Ga");
Eh.prototype.getCurrent = Eh.prototype.qc;
function Fh(a, b, c, e) {
  I.call(this, a, w(b) ? b : "Changed", c, e)
}
C(Fh, I);
s = Fh.prototype;
s.X = 0;
s.i = function(a, b) {
  G(this.B, "etk_AppState_changed", a, g, b)
};
s.H = function(a, b) {
  Ve(this.B, "etk_AppState_changed", a, g, b)
};
s.la = function() {
  Ze(this.B, "etk_AppState_changed")
};
s.v = function(a, b) {
  var c = new Eh(b, this.X, a, this.aa);
  this.X = a;
  this.B.dispatchEvent(c)
};
function Gh() {
  this.GN = va()
}
var Hh = new Gh;
Gh.prototype.set = ba("GN");
Gh.prototype.reset = function() {
  this.set(va())
};
Gh.prototype.get = q("GN");
function Ih(a) {
  this.iV = a || "";
  this.xW = Hh
}
s = Ih.prototype;
s.zO = i;
s.qW = i;
s.pW = i;
s.BO = m;
s.rW = m;
function Jh(a) {
  a = new Date(a.aP);
  return Kh(a.getFullYear() - 2E3) + Kh(a.getMonth() + 1) + Kh(a.getDate()) + " " + Kh(a.getHours()) + ":" + Kh(a.getMinutes()) + ":" + Kh(a.getSeconds()) + "." + Kh(Math.floor(a.getMilliseconds() / 10))
}
function Kh(a) {
  return 10 > a ? "0" + a : "" + a
}
function Lh(a, b) {
  var c = (a.aP - b) / 1E3, e = c.toFixed(3), f = 0;
  if(1 > c) {
    f = 2
  }else {
    for(;100 > c;) {
      f++, c *= 10
    }
  }
  for(;0 < f--;) {
    e = " " + e
  }
  return e
}
function Mh(a) {
  Ih.call(this, a)
}
C(Mh, Ih);
function Nh() {
  this.nV = A(this.sQ, this);
  this.OD = new Mh;
  this.OD.zO = m;
  this.fM = this.OD.BO = m;
  this.NM = ""
}
Nh.prototype.sQ = function(a) {
  var b;
  b = this.OD;
  var c = [];
  c.push(b.iV, " ");
  b.zO && c.push("[", Jh(a), "] ");
  b.qW && c.push("[", Lh(a, b.xW.get()), "s] ");
  b.pW && c.push("[", a.GT, "] ");
  b.rW && c.push("[", a.tf.name, "] ");
  c.push(a.VM, "\n");
  b.BO && a.FD && c.push(a.ED, "\n");
  b = c.join("");
  if(window.console && window.console.firebug) {
    switch(a.tf) {
      case ge:
        window.console.info(b);
        break;
      case he:
        window.console.error(b);
        break;
      case ie:
        window.console.warn(b);
        break;
      default:
        window.console.debug(b)
    }
  }else {
    window.console ? window.console.log(b) : window.opera ? window.opera.postError(b) : this.NM += b
  }
};
var Oh = k;
function fh() {
  if(Oh == k) {
    var a = Oh = new Nh;
    if(i != a.fM) {
      qe();
      var b = pe, c = a.nV;
      b.yu || (b.yu = []);
      b.yu.push(c);
      a.fM = i
    }
    this.gb = re("tr")
  }
}
x(fh);
s = fh.prototype;
s.enabled = i;
s.gb = k;
s.log = function(a, b, c) {
  if(this.enabled) {
    switch(w(b) || (b = je), b) {
      case he:
        this.gb.log(he, a, c);
        break;
      case ge:
        this.gb.yO(a, c);
        break;
      case ie:
        this.gb.jt(a, c);
      default:
        this.gb.log(je, a)
    }
  }
};
s.info = function(a) {
  this.enabled && this.log(a, je)
};
s.error = function(a, b) {
  this.enabled && this.log(a, he, b)
};
s.jt = function(a, b) {
  this.enabled && this.log(a, ie, b)
};
s.yO = function(a, b) {
  this.enabled && this.log(a, ge, b)
};
fh.g().gb.qH(he);
var Ph = RegExp("^(?:([^:/?#.]+):)?(?://(?:([^/?#]*)@)?([\\w\\d\\-\\u0100-\\uffff.%]*)(?::([0-9]+))?)?([^?#]+)?(?:\\?([^#]*))?(?:#(.*))?$");
function Qh(a, b) {
  var c;
  a instanceof Qh ? (this.Ls(b == k ? a.uk : b), this.ro(a.rm), Rh(this, a.ww), Sh(this, a.$o), Th(this, a.ys), Uh(this, a.Tp), Vh(this, a.Ik.clone()), Wh(this, a.Vt)) : a && (c = ("" + a).match(Ph)) ? (this.Ls(!!b), this.ro(c[1] || "", i), Rh(this, c[2] || "", i), Sh(this, c[3] || "", i), Th(this, c[4]), Uh(this, c[5] || "", i), Vh(this, c[6] || "", i), Wh(this, c[7] || "", i)) : (this.Ls(!!b), this.Ik = new Xh(k, this, this.uk))
}
s = Qh.prototype;
s.rm = "";
s.ww = "";
s.$o = "";
s.ys = k;
s.Tp = "";
s.Vt = "";
s.zT = m;
s.uk = m;
s.toString = function() {
  if(this.Si) {
    return this.Si
  }
  var a = [];
  this.rm && a.push(Yh(this.rm, Zh), ":");
  this.$o && (a.push("//"), this.ww && a.push(Yh(this.ww, Zh), "@"), a.push(ka(this.$o) ? encodeURIComponent(this.$o) : k), this.ys != k && a.push(":", "" + this.ys));
  this.Tp && (this.$o && "/" != this.Tp.charAt(0) && a.push("/"), a.push(Yh(this.Tp, "/" == this.Tp.charAt(0) ? $h : ai)));
  var b = "" + this.Ik;
  b && a.push("?", b);
  this.Vt && a.push("#", Yh(this.Vt, bi));
  return this.Si = a.join("")
};
s.clone = function() {
  var a = this.rm, b = this.ww, c = this.$o, e = this.ys, f = this.Tp, h = this.Ik.clone(), j = this.Vt, l = new Qh(k, this.uk);
  a && l.ro(a);
  b && Rh(l, b);
  c && Sh(l, c);
  e && Th(l, e);
  f && Uh(l, f);
  h && Vh(l, h);
  j && Wh(l, j);
  return l
};
s.ro = function(a, b) {
  ci(this);
  delete this.Si;
  if(this.rm = b ? a ? decodeURIComponent(a) : "" : a) {
    this.rm = this.rm.replace(/:$/, "")
  }
  return this
};
function Rh(a, b, c) {
  ci(a);
  delete a.Si;
  a.ww = c ? b ? decodeURIComponent(b) : "" : b
}
function Sh(a, b, c) {
  ci(a);
  delete a.Si;
  a.$o = c ? b ? decodeURIComponent(b) : "" : b
}
function Th(a, b) {
  ci(a);
  delete a.Si;
  b ? (b = Number(b), (isNaN(b) || 0 > b) && d(Error("Bad port number " + b)), a.ys = b) : a.ys = k
}
function Uh(a, b, c) {
  ci(a);
  delete a.Si;
  a.Tp = c ? b ? decodeURIComponent(b) : "" : b
}
function Vh(a, b, c) {
  ci(a);
  delete a.Si;
  b instanceof Xh ? (a.Ik = b, a.Ik.nI = a, a.Ik.Ls(a.uk)) : (c || (b = Yh(b, di)), a.Ik = new Xh(b, a, a.uk))
}
function ei(a, b, c) {
  ci(a);
  delete a.Si;
  a.Ik.set(b, c)
}
function Wh(a, b, c) {
  ci(a);
  delete a.Si;
  a.Vt = c ? b ? decodeURIComponent(b) : "" : b
}
function ci(a) {
  a.zT && d(Error("Tried to modify a read-only Uri"))
}
s.Ls = function(a) {
  this.uk = a;
  this.Ik && this.Ik.Ls(a);
  return this
};
var fi = /^[a-zA-Z0-9\-_.!~*'():\/;?]*$/;
function Yh(a, b) {
  var c = k;
  ka(a) && (c = a, fi.test(c) || (c = encodeURI(a)), 0 <= c.search(b) && (c = c.replace(b, gi)));
  return c
}
function gi(a) {
  a = a.charCodeAt(0);
  return"%" + (a >> 4 & 15).toString(16) + (a & 15).toString(16)
}
var Zh = /[#\/\?@]/g, ai = /[\#\?:]/g, $h = /[\#\?]/g, di = /[\#\?@]/g, bi = /#/g;
function Xh(a, b, c) {
  this.zl = a || k;
  this.nI = b || k;
  this.uk = !!c
}
function hi(a) {
  if(!a.lc && (a.lc = new Rd, a.pa = 0, a.zl)) {
    for(var b = a.zl.split("&"), c = 0;c < b.length;c++) {
      var e = b[c].indexOf("="), f = k, h = k;
      0 <= e ? (f = b[c].substring(0, e), h = b[c].substring(e + 1)) : f = b[c];
      f = decodeURIComponent(f.replace(/\+/g, " "));
      f = ii(a, f);
      a.add(f, h ? decodeURIComponent(h.replace(/\+/g, " ")) : "")
    }
  }
}
s = Xh.prototype;
s.lc = k;
s.pa = k;
s.Da = function() {
  hi(this);
  return this.pa
};
s.add = function(a, b) {
  hi(this);
  ji(this);
  a = ii(this, a);
  if(this.Oh(a)) {
    var c = this.lc.get(a);
    ha(c) ? c.push(b) : this.lc.set(a, [c, b])
  }else {
    this.lc.set(a, b)
  }
  this.pa++;
  return this
};
s.remove = function(a) {
  hi(this);
  a = ii(this, a);
  if(this.lc.Oh(a)) {
    ji(this);
    var b = this.lc.get(a);
    ha(b) ? this.pa -= b.length : this.pa--;
    return this.lc.remove(a)
  }
  return m
};
s.clear = function() {
  ji(this);
  this.lc && this.lc.clear();
  this.pa = 0
};
s.di = function() {
  hi(this);
  return 0 == this.pa
};
s.Oh = function(a) {
  hi(this);
  a = ii(this, a);
  return this.lc.Oh(a)
};
s.Zh = function() {
  hi(this);
  for(var a = this.lc.ge(), b = this.lc.Zh(), c = [], e = 0;e < b.length;e++) {
    var f = a[e];
    if(ha(f)) {
      for(var h = 0;h < f.length;h++) {
        c.push(b[e])
      }
    }else {
      c.push(b[e])
    }
  }
  return c
};
s.ge = function(a) {
  hi(this);
  if(a) {
    if(a = ii(this, a), this.Oh(a)) {
      var b = this.lc.get(a);
      if(ha(b)) {
        return b
      }
      a = [];
      a.push(b)
    }else {
      a = []
    }
  }else {
    for(var b = this.lc.ge(), a = [], c = 0;c < b.length;c++) {
      var e = b[c];
      ha(e) ? gb(a, e) : a.push(e)
    }
  }
  return a
};
s.set = function(a, b) {
  hi(this);
  ji(this);
  a = ii(this, a);
  if(this.Oh(a)) {
    var c = this.lc.get(a);
    ha(c) ? this.pa -= c.length : this.pa--
  }
  this.lc.set(a, b);
  this.pa++;
  return this
};
s.get = function(a, b) {
  hi(this);
  a = ii(this, a);
  if(this.Oh(a)) {
    var c = this.lc.get(a);
    return ha(c) ? c[0] : c
  }
  return b
};
s.Sk = function(a, b) {
  hi(this);
  ji(this);
  a = ii(this, a);
  if(this.Oh(a)) {
    var c = this.lc.get(a);
    ha(c) ? this.pa -= c.length : this.pa--
  }
  0 < b.length && (this.lc.set(a, b), this.pa += b.length)
};
s.toString = function() {
  if(this.zl) {
    return this.zl
  }
  if(!this.lc) {
    return""
  }
  for(var a = [], b = 0, c = this.lc.Zh(), e = 0;e < c.length;e++) {
    var f = c[e], h = Ba(f), f = this.lc.get(f);
    if(ha(f)) {
      for(var j = 0;j < f.length;j++) {
        0 < b && a.push("&"), a.push(h), "" !== f[j] && a.push("=", Ba(f[j])), b++
      }
    }else {
      0 < b && a.push("&"), a.push(h), "" !== f && a.push("=", Ba(f)), b++
    }
  }
  return this.zl = a.join("")
};
function ji(a) {
  delete a.jD;
  delete a.zl;
  a.nI && delete a.nI.Si
}
s.clone = function() {
  var a = new Xh;
  this.jD && (a.jD = this.jD);
  this.zl && (a.zl = this.zl);
  this.lc && (a.lc = this.lc.clone());
  return a
};
function ii(a, b) {
  var c = "" + b;
  a.uk && (c = c.toLowerCase());
  return c
}
s.Ls = function(a) {
  a && !this.uk && (hi(this), ji(this), Md(this.lc, function(a, c) {
    var e = c.toLowerCase();
    c != e && (this.remove(c), this.add(e, a))
  }, this));
  this.uk = a
};
s.extend = function(a) {
  for(var b = 0;b < arguments.length;b++) {
    Md(arguments[b], function(a, b) {
      this.add(b, a)
    }, this)
  }
};
function ki(a) {
  return eval("(" + a + ")")
}
;function li() {
}
li.prototype.BJ = k;
li.prototype.ee = function() {
  var a;
  if(!(a = this.BJ)) {
    a = {}, mi(this) && (a[0] = i, a[1] = i), a = this.BJ = a
  }
  return a
};
var ni;
function oi() {
}
C(oi, li);
function pi(a) {
  return(a = mi(a)) ? new ActiveXObject(a) : new XMLHttpRequest
}
oi.prototype.RE = k;
function mi(a) {
  if(!a.RE && "undefined" == typeof XMLHttpRequest && "undefined" != typeof ActiveXObject) {
    for(var b = ["MSXML2.XMLHTTP.6.0", "MSXML2.XMLHTTP.3.0", "MSXML2.XMLHTTP", "Microsoft.XMLHTTP"], c = 0;c < b.length;c++) {
      var e = b[c];
      try {
        return new ActiveXObject(e), a.RE = e
      }catch(f) {
      }
    }
    d(Error("Could not create ActiveXObject. ActiveX might be disabled, or MSXML might not be installed"))
  }
  return a.RE
}
ni = new oi;
function qi(a) {
  this.headers = new Rd;
  this.qB = a || k
}
C(qi, lf);
qi.prototype.gb = re("goog.net.XhrIo");
var ri = /^https?:?$/i;
s = qi.prototype;
s.Hm = m;
s.Kb = k;
s.pB = k;
s.Su = "";
s.EM = "";
s.Ru = "";
s.AD = m;
s.Py = m;
s.VE = m;
s.Bp = m;
s.VA = 0;
s.Bq = k;
s.VN = "";
s.$W = m;
s.send = function(a, b, c, e) {
  this.Kb && d(Error("[goog.net.XhrIo] Object is active with another request"));
  b = b ? b.toUpperCase() : "GET";
  this.Su = a;
  this.Ru = "";
  this.EM = b;
  this.AD = m;
  this.Hm = i;
  this.Kb = this.qB ? pi(this.qB) : pi(ni);
  this.pB = this.qB ? this.qB.ee() : ni.ee();
  this.Kb.onreadystatechange = A(this.nN, this);
  try {
    ne(this.gb, si(this, "Opening Xhr")), this.VE = i, this.Kb.open(b, a, i), this.VE = m
  }catch(f) {
    ne(this.gb, si(this, "Error opening Xhr: " + f.message));
    ti(this, f);
    return
  }
  var a = c || "", h = this.headers.clone();
  e && Md(e, function(a, b) {
    h.set(b, a)
  });
  "POST" == b && !h.Oh("Content-Type") && h.set("Content-Type", "application/x-www-form-urlencoded;charset=utf-8");
  Md(h, function(a, b) {
    this.Kb.setRequestHeader(b, a)
  }, this);
  this.VN && (this.Kb.responseType = this.VN);
  "withCredentials" in this.Kb && (this.Kb.withCredentials = this.$W);
  try {
    this.Bq && (Tf.clearTimeout(this.Bq), this.Bq = k), 0 < this.VA && (ne(this.gb, si(this, "Will abort after " + this.VA + "ms if incomplete")), this.Bq = Tf.setTimeout(A(this.HW, this), this.VA)), ne(this.gb, si(this, "Sending request")), this.Py = i, this.Kb.send(a), this.Py = m
  }catch(j) {
    ne(this.gb, si(this, "Send error: " + j.message)), ti(this, j)
  }
};
s.HW = function() {
  "undefined" != typeof ca && this.Kb && (this.Ru = "Timed out after " + this.VA + "ms, aborting", ne(this.gb, si(this, this.Ru)), this.dispatchEvent("timeout"), this.abort(8))
};
function ti(a, b) {
  a.Hm = m;
  a.Kb && (a.Bp = i, a.Kb.abort(), a.Bp = m);
  a.Ru = b;
  ui(a);
  vi(a)
}
function ui(a) {
  a.AD || (a.AD = i, a.dispatchEvent("complete"), a.dispatchEvent("error"))
}
s.abort = function() {
  this.Kb && this.Hm && (ne(this.gb, si(this, "Aborting")), this.Hm = m, this.Bp = i, this.Kb.abort(), this.Bp = m, this.dispatchEvent("complete"), this.dispatchEvent("abort"), vi(this))
};
s.n = function() {
  this.Kb && (this.Hm && (this.Hm = m, this.Bp = i, this.Kb.abort(), this.Bp = m), vi(this, i));
  qi.e.n.call(this)
};
s.nN = function() {
  !this.VE && !this.Py && !this.Bp ? this.GU() : wi(this)
};
s.GU = function() {
  wi(this)
};
function wi(a) {
  if(a.Hm && "undefined" != typeof ca) {
    if(a.pB[1] && 4 == xi(a) && 2 == yi(a)) {
      ne(a.gb, si(a, "Local request error detected and ignored"))
    }else {
      if(a.Py && 4 == xi(a)) {
        Tf.setTimeout(A(a.nN, a), 0)
      }else {
        if(a.dispatchEvent("readystatechange"), 4 == xi(a)) {
          ne(a.gb, si(a, "Request complete"));
          a.Hm = m;
          var b = yi(a), c;
          a: {
            switch(b) {
              case 200:
              ;
              case 201:
              ;
              case 202:
              ;
              case 204:
              ;
              case 304:
              ;
              case 1223:
                c = i;
                break a;
              default:
                c = m
            }
          }
          if(!c) {
            if(b = 0 === b) {
              b = ka(a.Su) ? a.Su.match(Ph)[1] || k : a.Su.rm, b = !(b ? ri.test(b) : self.location ? ri.test(self.location.protocol) : 1)
            }
            c = b
          }
          if(c) {
            a.dispatchEvent("complete"), a.dispatchEvent("success")
          }else {
            var e;
            try {
              e = 2 < xi(a) ? a.Kb.statusText : ""
            }catch(f) {
              ne(a.gb, "Can not get status: " + f.message), e = ""
            }
            a.Ru = e + " [" + yi(a) + "]";
            ui(a)
          }
          vi(a)
        }
      }
    }
  }
}
function vi(a, b) {
  if(a.Kb) {
    var c = a.Kb, e = a.pB[0] ? fa : k;
    a.Kb = k;
    a.pB = k;
    a.Bq && (Tf.clearTimeout(a.Bq), a.Bq = k);
    b || a.dispatchEvent("ready");
    try {
      c.onreadystatechange = e
    }catch(f) {
      a.gb.log(he, "Problem encountered resetting onreadystatechange: " + f.message, g)
    }
  }
}
s.es = function() {
  return!!this.Kb
};
function xi(a) {
  return a.Kb ? a.Kb.readyState : 0
}
function yi(a) {
  try {
    return 2 < xi(a) ? a.Kb.status : -1
  }catch(b) {
    return a.gb.jt("Can not get status: " + b.message), -1
  }
}
function si(a, b) {
  return b + " [" + a.EM + " " + a.Su + " " + yi(a) + "]"
}
;function zi() {
}
var Ai = "";
function Bi(a, b) {
  return function(c) {
    if(b && "function" === typeof b && (c = JSON.parse(c.target.Kb.responseText))) {
      c = JSON.parse(c.GX), b.call(a, c)
    }
  }
}
;function Ci() {
  this.GV = new zi
}
Ci.prototype.send = function(a, b, c, e, f) {
  var h = this.GV, e = Di(this, e), f = Di(this, f), a = {uri:"http://nycskplus03.amers.ime.reuters.com/snapshot/snapshot.asmx", method:"POST", soapEnvelopeAttributes:'xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/" xmlns="http://schemas.reuters.com/ns/2007/07/snapshot"', soapHeader:'<soap:Header><userIdentity xmlns="http://schemas.reuters.com/ns/2005/08/infrastructure/tornado_soap"><UUID xmlns="http://schemas.reuters.com/ns/2007/10/cp/user_identity">PADACT-002</UUID></userIdentity></soap:Header>', 
  soapBody:JSON.stringify({selectReq:{attributes:{productID:"PLINK"}, formula:a, identifiers:b, output:c}}), httpHeaders:JSON.stringify({"Content-Type":"text/xml", SOAPAction:"http://schemas.reuters.com/soapaction?type=selectReq&ns=http://schemas.reuters.com/ns/2007/07/snapshot"}), cookies:k}, b = new qi;
  b.addEventListener("success", Bi(h, e));
  b.addEventListener("error", Bi(h, f));
  b.send(Ai + "ExecuteSoapRequest", "POST", JSON.stringify(a), {"Content-Type":"application/json"})
};
function Di(a, b) {
  return function(c) {
    b && "function" === typeof b && c && b.call(a, c.FX.kX.UY.PY)
  }
}
;var Ei = {"0":1E3};
function Fi() {
}
Fi.prototype.fs = i;
Fi.prototype.Mz = function(a, b) {
  if(a.ua) {
    var c = a.Ia().b();
    this.fs && (this.fs = m, E(c, "etk-color-notick", "etk-color-up", "etk-color-down", "etk-color-unchanged"));
    var e = Gi;
    0 < parseFloat(b) ? e = Hi : 0 > parseFloat(b) && (e = Ii);
    e !== this.pv && (F(c, this.pv, m), F(c, e, i), this.pv = e)
  }
};
var Hi = "etk-color-up", Ii = "etk-color-down", Gi = "etk-color-unchanged";
function Ji() {
}
Ji.prototype.fs = i;
Ji.prototype.Mz = function(a, b) {
  if(a.ua) {
    var c = a.Ia().b();
    this.fs && (this.fs = m, E(c, "etk-color-notick", "etk-color-up", "etk-color-down", "etk-color-unchanged"));
    var e = Ki[b];
    e !== this.pv && (F(c, this.pv, m), F(c, e, i), this.pv = e)
  }
};
var Ki = {"0":"etk-color-notick", 1:"etk-color-up", 2:"etk-color-down", 3:"etk-color-unchanged"};
function Li() {
}
Li.prototype.Mz = function(a, b) {
  if(a.ua) {
    var c = a.ly();
    if(z(c) && c != k) {
      try {
        b = c.ul(b)
      }catch(e) {
        fh.g().log("UpdateTextProcessor.process - Error converting value = " + b)
      }
    }
    c = a.wy();
    a.Ia()["set" + c.substring(0, 1).toUpperCase() + c.substring(1, c.length)](b)
  }
};
function Mi(a) {
  this.Qa = new Sf(Ei[a.a().IL] || 1E3);
  this.Qa.addEventListener(Uf, this.WU, m, this);
  this.uC = a
}
s = Mi.prototype;
s.fs = i;
s.Nm = "etk-blink-unchanged";
s.s = k;
s.uC = k;
s.Mz = function(a) {
  a.ua && (a = this.uC.Ia(), this.Qa.stop(), a.Td() === Ni && a.bc(Oi), this.Qa.start())
};
s.WU = function() {
  this.Qa.stop();
  this.uC.Ia().bc(Ni)
};
function Pi() {
  JET.init({ID:"Toolkit", VI:"StreamingService"})
}
s = Pi.prototype;
s.Ky = 0;
s.qd = {};
s.hw = {};
s.vv = {};
s.xk = m;
s.xf = function(a) {
  var b = [];
  if(a) {
    for(var c = {}, e = 0, f = a.length;e < f;e++) {
      var h = a[e], j = h.a().Fs;
      if(j) {
        c[j] || (c[j] = {ric:j, rawFields:[], formattedFields:[]});
        var l = h.Jl();
        if(l) {
          Qi(this, j, l, h, new Li, m);
          var n = c[j];
          ab(n.formattedFields, l) || n.formattedFields.push(l);
          var o = h.a().field;
          h.a().JL ? w(o) ? ("CF_TICK" === o || "PRCTCK_1" === o || Qi(this, j, o, h, new Mi(h), i), ab(n.rawFields, o) || n.rawFields.push(o)) : Qi(this, j, l, h, new Mi(h), i) : w(o) && ("CF_TICK" === o || "PRCTCK_1" === o ? Qi(this, j, o, h, new Ji, i) : Qi(this, j, o, h, new Fi, i), ab(n.rawFields, o) || n.rawFields.push(o))
        }
      }
    }
    for(var u in c) {
      try {
        var t = c[u], v = this.vv[u];
        if(v) {
          v.stop(), v.formattedFields(t.formattedFields).rawFields(t.rawFields), v.start()
        }else {
          var y = this.Ky++;
          this.hw[y] = u;
          v = JET.Quotes.create(y).rics(u).formattedFields(t.formattedFields).rawFields(t.rawFields).onUpdate(A(this.Aj, this)).start();
          this.vv[u] = v;
          b.push(v)
        }
      }catch(J) {
        fh.g().log("StreamingService.Subscribe - Error subscribing to JET: " + J)
      }
    }
  }
  return b
};
function Ri(a, b) {
  for(var c = 0, e = b.length;c < e;c++) {
    var f = b[c], h = f.a().Fs, j = f.Jl(), l = a.qd[h][j];
    l && (Si(f, l), 0 == l.length && delete a.qd[h][j]);
    if(j = f.a().field) {
      if(l = a.qd[h][j]) {
        Si(f, l), 0 == l.length && delete a.qd[h][j]
      }
    }
    var f = m, n;
    for(n in a.qd[h]) {
      f = i;
      break
    }
    f || a.Ys([a.vv[h]])
  }
}
s.Ys = function(a) {
  for(var b = 0, c = a.length;b < c;b++) {
    var e = a[b];
    if(e != g && e != k) {
      e.stop();
      var f = this.hw[e.id];
      delete this.qd[f];
      delete this.hw[e.id];
      delete this.vv[f]
    }
  }
};
s.zo = function() {
  for(var a in this.hw) {
    var b = JET.Quotes.get(a);
    b && this.Ys(b)
  }
};
s.ba = function() {
  this.xk = i;
  this.zo();
  delete this.qd;
  delete this.hw
};
s.Ku = q("xk");
s.Aj = function(a, b, c) {
  if(c.Fo) {
    if(4 === c.Fo.om) {
      var b = this.qd[b], c = [], e;
      for(e in b) {
        for(var f = b[e], a = 0, h = f.length;a < h;a++) {
          ab(c, f[a].Zw) || c.push(f[a].Zw)
        }
      }
      0 < c.length && Ri(this, c)
    }
  }else {
    for(e in c) {
      var j = this.qd[b][e];
      if(j) {
        a = 0;
        for(h = j.length;a < h;a++) {
          try {
            for(var f = j[a], l = c[e], n = 0;n < f.CN.length;n++) {
              f.CN[n].Mz(f.Zw, l.om ? l.om : l.Br)
            }
          }catch(o) {
            fh.g().log("StreamingService.onUpdate - Error in executing processor" + o)
          }
        }
      }
    }
  }
};
function Si(a, b) {
  for(var c = 0, e = b.length;c < e;c++) {
    if(b[c].Zw.Lo == a.Lo) {
      b.splice(c, 1);
      break
    }
  }
}
s.cp = function(a) {
  (a = this.vv[a]) && this.Ys([a])
};
function Qi(a, b, c, e, f, h) {
  a.qd[b] || (a.qd[b] = {});
  a.qd[b][c] || (a.qd[b][c] = []);
  a = a.qd[b][c];
  if(h) {
    if(0 === a.length) {
      a.push({behavior:e, processors:[f]})
    }else {
      h = 0;
      for(b = a.length;h < b;h++) {
        if(c = a[h], c.Zw.Lo === e.Lo) {
          c.CN.push(f);
          break
        }
      }
    }
  }else {
    a.push({behavior:e, processors:[f]})
  }
}
;function Ti() {
}
x(Ti);
Ti.prototype.Pq = [];
function Ui(a) {
  var b = Ti.g(), c = b.Pq[a];
  c || ("IStreamingService" === a ? (c = new Pi, b.Pq.push(c)) : "ISnapshotService" === a && (c = new Ci, b.Pq.push(c)));
  return c
}
Ti.prototype.ba = function() {
  for(var a = 0, b = this.Pq.length;a < b;a++) {
    try {
      this.Pq[a].ba()
    }catch(c) {
    }
  }
  delete this.Pq
};
function Vi() {
  this.eo = Ui("ISnapshotService")
}
x(Vi);
s = Vi.prototype;
s.eo = k;
s.ga = [];
s.Eu = {};
s.hy = {};
s.qd = {};
s.Cb = m;
s.qb = function(a) {
  a && (this.Cb || this.ga.push(a))
};
s.detach = function(a) {
  if(a) {
    for(var b = this.ga, c = 0;c < b.length;c++) {
      if(b[c].P() == a.P()) {
        b.splice(c, 1);
        break
      }
    }
  }
};
s.SU = function(a) {
  for(var b in this.qd) {
    for(var c in this.qd[b]) {
      var e = k, e = a instanceof Array ? a[b].Ji[c] : a.Ji instanceof Array ? a.Ji[c] : a.Ji, f = this.qd[b][c];
      if(f) {
        for(var h = 0, j = f.length;h < j;h++) {
          var l = f[h], n = l.wy();
          l.Ia()["set" + n.substring(0, 1).toUpperCase() + n.substring(1, n.length)](e)
        }
      }
    }
  }
};
s.iU = function() {
  fh.g().log("SnapshotBehaviorManager - Error occured requesting data from Snapshot Service")
};
s.start = function() {
  if(!this.Cb && (this.Cb = i, 0 < this.ga.length)) {
    var a = this.ga;
    this.hy = {};
    this.Eu = {};
    var b = [], c = [], e = 0, f = 0;
    this.qd = {};
    for(var h = 0, j = a.length;h < j;h++) {
      var l = a[h], n = l.Cr, o = l.QE;
      if(this.Eu[o] === g) {
        c.push(o);
        var u = f++;
        this.Eu[o] = u;
        this.qd[u] = {}
      }
      this.hy[n] === g && (b.push(n), u = e++, this.hy[n] = u, this.qd[this.Eu[o]][u] = []);
      o = this.Eu[o];
      n = this.hy[n];
      (u = this.qd[o]) && u[n] === g && (u[n] = []);
      this.qd[o][n].push(l)
    }
    0 < b.length && 0 < c.length && this.eo.send(b.join(), c.join(), "Col,|Va", A(this.SU, this), A(this.iU, this))
  }
};
s.stop = function() {
  this.Cb && (this.Cb = m, this.ga = [])
};
function Wi() {
  this.eo = Ui("IStreamingService")
}
x(Wi);
s = Wi.prototype;
s.eo = k;
s.ga = [];
s.Cb = m;
s.qb = function(a) {
  a && (this.Cb ? this.eo.xf([a]) : this.ga.push(a))
};
s.detach = function(a) {
  if(a) {
    for(var b = this.ga, c = 0;c < b.length;c++) {
      if(b[c].Lo == a.Lo) {
        b.splice(c, 1);
        break
      }
    }
    this.Cb && a.ua && Ri(this.eo, [a])
  }
};
s.start = function() {
  JET.Nn(A(this.dw, this))
};
s.dw = function() {
  if(!this.Cb && (this.Cb = i, 0 < this.ga.length)) {
    for(var a = 0, b = this.eo.xf(this.ga).length;a < b;a++) {
    }
  }
};
s.stop = function() {
  this.Cb && (this.Cb = m, this.eo.zo(), this.ga = [])
};
var Xi = {EI:["BC", "AD"], KP:["Before Christ", "Anno Domini"], UP:"J,F,M,A,M,J,J,A,S,O,N,D".split(","), gQ:"J,F,M,A,M,J,J,A,S,O,N,D".split(","), Mq:"January,February,March,April,May,June,July,August,September,October,November,December".split(","), fQ:"January,February,March,April,May,June,July,August,September,October,November,December".split(","), RI:"Jan,Feb,Mar,Apr,May,Jun,Jul,Aug,Sep,Oct,Nov,Dec".split(","), iQ:"Jan,Feb,Mar,Apr,May,Jun,Jul,Aug,Sep,Oct,Nov,Dec".split(","), YI:"Sunday,Monday,Tuesday,Wednesday,Thursday,Friday,Saturday".split(","), 
kQ:"Sunday,Monday,Tuesday,Wednesday,Thursday,Friday,Saturday".split(","), QB:"Sun,Mon,Tue,Wed,Thu,Fri,Sat".split(","), jQ:"Sun,Mon,Tue,Wed,Thu,Fri,Sat".split(","), VP:"S,M,T,W,T,F,S".split(","), hQ:"S,M,T,W,T,F,S".split(","), SI:["Q1", "Q2", "Q3", "Q4"], OI:["1st quarter", "2nd quarter", "3rd quarter", "4th quarter"], yI:["AM", "PM"], Tj:["EEEE, MMMM d, y", "MMMM d, y", "MMM d, y", "M/d/yy"], Iw:["h:mm:ss a zzzz", "h:mm:ss a z", "h:mm:ss a", "h:mm a"], GI:6, ZI:[5, 6], HI:2};
function Yi(a, b) {
  switch(b) {
    case 1:
      return 0 == a % 4 && (0 != a % 100 || 0 == a % 400) ? 29 : 28;
    case 5:
    ;
    case 8:
    ;
    case 10:
    ;
    case 3:
      return 30
  }
  return 31
}
function Zi(a, b, c, e, f, h) {
  ka(a) ? (this.Fh = a == $i ? b : 0, this.jh = a == aj ? b : 0, this.Xg = a == bj ? b : 0, this.Ad = a == cj ? b : 0, this.ze = a == dj ? b : 0, this.Ee = a == ej ? b : 0) : (this.Fh = a || 0, this.jh = b || 0, this.Xg = c || 0, this.Ad = e || 0, this.ze = f || 0, this.Ee = h || 0)
}
Zi.prototype.mw = function(a) {
  var b = Math.min(this.Fh, this.jh, this.Xg, this.Ad, this.ze, this.Ee), c = Math.max(this.Fh, this.jh, this.Xg, this.Ad, this.ze, this.Ee);
  if(0 > b && 0 < c) {
    return k
  }
  if(!a && 0 == b && 0 == c) {
    return"PT0S"
  }
  c = [];
  0 > b && c.push("-");
  c.push("P");
  (this.Fh || a) && c.push(Math.abs(this.Fh) + "Y");
  (this.jh || a) && c.push(Math.abs(this.jh) + "M");
  (this.Xg || a) && c.push(Math.abs(this.Xg) + "D");
  if(this.Ad || this.ze || this.Ee || a) {
    c.push("T"), (this.Ad || a) && c.push(Math.abs(this.Ad) + "H"), (this.ze || a) && c.push(Math.abs(this.ze) + "M"), (this.Ee || a) && c.push(Math.abs(this.Ee) + "S")
  }
  return c.join("")
};
Zi.prototype.ay = function(a) {
  return a.Fh == this.Fh && a.jh == this.jh && a.Xg == this.Xg && a.Ad == this.Ad && a.ze == this.ze && a.Ee == this.Ee
};
Zi.prototype.clone = function() {
  return new Zi(this.Fh, this.jh, this.Xg, this.Ad, this.ze, this.Ee)
};
var $i = "y", aj = "m", bj = "d", cj = "h", dj = "n", ej = "s";
Zi.prototype.add = function(a) {
  this.Fh += a.Fh;
  this.jh += a.jh;
  this.Xg += a.Xg;
  this.Ad += a.Ad;
  this.ze += a.ze;
  this.Ee += a.Ee
};
function uh(a, b, c) {
  la(a) ? (this.W = new Date(a, b || 0, c || 1), fj(this, c || 1)) : na(a) ? (this.W = new Date(a.getFullYear(), a.getMonth(), a.getDate()), fj(this, a.getDate())) : (this.W = new Date, this.W.setHours(0), this.W.setMinutes(0), this.W.setSeconds(0), this.W.setMilliseconds(0))
}
s = uh.prototype;
s.El = Xi.GI;
s.Ar = Xi.HI;
s.clone = function() {
  var a = new uh(this.W);
  a.El = this.El;
  a.Ar = this.Ar;
  return a
};
s.getFullYear = function() {
  return this.W.getFullYear()
};
s.getYear = function() {
  return this.getFullYear()
};
s.getMonth = function() {
  return this.W.getMonth()
};
s.getDate = function() {
  return this.W.getDate()
};
s.getTime = function() {
  return this.W.getTime()
};
s.getDay = function() {
  return this.W.getDay()
};
s.getUTCFullYear = function() {
  return this.W.getUTCFullYear()
};
s.getUTCMonth = function() {
  return this.W.getUTCMonth()
};
s.getUTCDate = function() {
  return this.W.getUTCDate()
};
s.getUTCHours = function() {
  return this.W.getUTCHours()
};
s.getUTCMinutes = function() {
  return this.W.getUTCMinutes()
};
s.getTimezoneOffset = function() {
  return this.W.getTimezoneOffset()
};
function gj(a) {
  a = a.getTimezoneOffset();
  if(0 == a) {
    a = "Z"
  }else {
    var b = Math.abs(a) / 60, c = Math.floor(b), b = 60 * (b - c), a = (0 < a ? "-" : "+") + Na(c, 2) + ":" + Na(b, 2)
  }
  return a
}
s.set = function(a) {
  this.W = new Date(a.getFullYear(), a.getMonth(), a.getDate())
};
s.setFullYear = function(a) {
  this.W.setFullYear(a)
};
s.setMonth = function(a) {
  this.W.setMonth(a)
};
s.setDate = function(a) {
  this.W.setDate(a)
};
s.setTime = function(a) {
  this.W.setTime(a)
};
s.add = function(a) {
  if(a.Fh || a.jh) {
    var b = this.getMonth() + a.jh + 12 * a.Fh, c = this.getYear() + Math.floor(b / 12), b = b % 12;
    0 > b && (b += 12);
    var e = Math.min(Yi(c, b), this.getDate());
    this.setDate(1);
    this.setFullYear(c);
    this.setMonth(b);
    this.setDate(e)
  }
  a.Xg && (b = new Date(this.getYear(), this.getMonth(), this.getDate(), 12), a = new Date(b.getTime() + 864E5 * a.Xg), this.setDate(1), this.setFullYear(a.getFullYear()), this.setMonth(a.getMonth()), this.setDate(a.getDate()), fj(this, a.getDate()))
};
s.mw = function(a, b) {
  return[this.getFullYear(), Na(this.getMonth() + 1, 2), Na(this.getDate(), 2)].join(a ? "-" : "") + (b ? gj(this) : "")
};
s.ay = function(a) {
  return this.getYear() == a.getYear() && this.getMonth() == a.getMonth() && this.getDate() == a.getDate()
};
s.toString = function() {
  return this.mw()
};
function fj(a, b) {
  a.getDate() != b && a.W.setUTCHours(a.W.getUTCHours() + (a.getDate() < b ? 1 : -1))
}
s.valueOf = function() {
  return this.W.valueOf()
};
function hj(a, b, c, e, f, h, j) {
  this.W = la(a) ? new Date(a, b || 0, c || 1, e || 0, f || 0, h || 0, j || 0) : new Date(a ? a.getTime() : va())
}
C(hj, uh);
s = hj.prototype;
s.getHours = function() {
  return this.W.getHours()
};
s.getMinutes = function() {
  return this.W.getMinutes()
};
s.getSeconds = function() {
  return this.W.getSeconds()
};
s.getMilliseconds = function() {
  return this.W.getMilliseconds()
};
s.getUTCHours = function() {
  return this.W.getUTCHours()
};
s.getUTCMinutes = function() {
  return this.W.getUTCMinutes()
};
s.setHours = function(a) {
  this.W.setHours(a)
};
s.setMinutes = function(a) {
  this.W.setMinutes(a)
};
s.setSeconds = function(a) {
  this.W.setSeconds(a)
};
s.setMilliseconds = function(a) {
  this.W.setMilliseconds(a)
};
s.setUTCHours = function(a) {
  this.W.setUTCHours(a)
};
s.add = function(a) {
  uh.prototype.add.call(this, a);
  a.Ad && this.setHours(this.W.getHours() + a.Ad);
  a.ze && this.setMinutes(this.W.getMinutes() + a.ze);
  a.Ee && this.setSeconds(this.W.getSeconds() + a.Ee)
};
s.mw = function(a, b) {
  var c = uh.prototype.mw.call(this, a);
  return a ? c + " " + Na(this.getHours(), 2) + ":" + Na(this.getMinutes(), 2) + ":" + Na(this.getSeconds(), 2) + (b ? gj(this) : "") : c + "T" + Na(this.getHours(), 2) + Na(this.getMinutes(), 2) + Na(this.getSeconds(), 2) + (b ? gj(this) : "")
};
s.ay = function(a) {
  return this.getTime() == a.getTime()
};
s.toString = function() {
  return this.mw()
};
s.clone = function() {
  var a = new hj(this.W);
  a.El = this.El;
  a.Ar = this.Ar;
  return a
};
function ij(a) {
  a.hasOwnProperty("appServerId") && (this.qJ = a.appServerId);
  a.hasOwnProperty("name") && (this.name = a.name);
  a.hasOwnProperty("isVisible") && (this.w = a.isVisible);
  a.hasOwnProperty("tooltip") && (this.gg = a.tooltip);
  a.hasOwnProperty("behaviors") && (this.$w = a.behaviors);
  a.hasOwnProperty("injectInstance") && (this.UL = a.injectInstance);
  a.hasOwnProperty("type") && (this.type = a.type)
}
s = ij.prototype;
s.qJ = k;
s.name = k;
s.w = i;
s.gg = "";
s.$w = k;
s.UL = m;
s.type = "Control";
function jj(a, b) {
  for(var c in b) {
    z(a[c]) || (a[c] = b[c])
  }
  for(c in a) {
    if(c in b) {
      var e = ga(b[c]);
      "null" != e && e != ga(a[c]) && fh.g().log("Warning: unexpected type of the key '" + c + "' in model. Got " + ga(a[c]) + ", expected " + ga(b[c]) + ".")
    }else {
      fh.g().log("Warning: unexpected key '" + c + "' in model JSON string. Will be ignored.")
    }
  }
}
function kj(a) {
  if(a) {
    var b = a.match(/\d+/)[0], b = parseInt(b, 10), c = "0", e = "+";
    (a = a.match(/[-+]\d+/)) && (c = a[0].substr(1));
    a && (e = a[0].substring(0, 1));
    a = parseFloat(c);
    a = Math.floor(a / 100) + a % 100 / 60;
    "-" == e && (a *= -1);
    if(b = new Date(b + 36E5 * a)) {
      return new uh(b.getUTCFullYear(), b.getUTCMonth(), b.getUTCDate())
    }
  }
  return k
}
;function lj(a) {
  ij.call(this, a);
  a.hasOwnProperty("tabEnabled") && (this.Qd = a.tabEnabled);
  a.hasOwnProperty("tabOrder") && (this.zq = a.tabOrder);
  a.hasOwnProperty("isEnabled") && (this.isEnabled = a.isEnabled);
  a.hasOwnProperty("hasFocus") && (this.hasFocus = a.hasFocus)
}
C(lj, ij);
lj.prototype.Qd = i;
lj.prototype.zq = 1;
lj.prototype.isEnabled = i;
lj.prototype.hasFocus = m;
function mj(a) {
  lj.call(this, a);
  a.hasOwnProperty("controls") && (this.controls = a.controls);
  a.hasOwnProperty("isNamingContainer") && (this.Ag = a.isNamingContainer);
  a.hasOwnProperty("tagName") && (this.tagName = a.tagName)
}
C(mj, lj);
mj.prototype.controls = k;
mj.prototype.Ag = m;
mj.prototype.tagName = "";
function nj(a) {
  lj.call(this, a);
  a.hasOwnProperty("sizingMode") && (this.HA = a.sizingMode);
  a.hasOwnProperty("text") && (this.text = a.text);
  a.hasOwnProperty("textAlign") && (this.textAlign = a.textAlign);
  a.hasOwnProperty("textOverflow") && (this.ya = a.textOverflow)
}
C(nj, lj);
nj.prototype.HA = 0;
nj.prototype.text = "";
nj.prototype.textAlign = 0;
nj.prototype.ya = 0;
function oj(a) {
  mj.call(this, a);
  if(a.hasOwnProperty("buttons")) {
    this.kx = [];
    for(var b = a.buttons, c = 0;c < b.length;c++) {
      this.kx.push(new nj(b[c]))
    }
  }
  a.hasOwnProperty("caption") && (this.caption = a.caption);
  a.hasOwnProperty("isAlwaysOnTop") && (this.bM = a.isAlwaysOnTop);
  a.hasOwnProperty("isModal") && (this.pM = a.isModal);
  a.hasOwnProperty("isMovable") && (this.qM = a.isMovable);
  a.hasOwnProperty("result") && (this.result = a.result);
  a.hasOwnProperty("showCloseButton") && (this.AO = a.showCloseButton);
  a.hasOwnProperty("showTitleBar") && (this.IO = a.showTitleBar);
  this.w = m
}
C(oj, mj);
s = oj.prototype;
s.kx = [];
s.caption = "";
s.bM = m;
s.pM = i;
s.qM = i;
s.result = k;
s.AO = i;
s.IO = i;
function pj(a) {
  mj.call(this, a);
  a.hasOwnProperty("enableMargin") && (this.xD = a.enableMargin);
  a.hasOwnProperty("isFlexible") && (this.Cn = a.isFlexible);
  a.hasOwnProperty("minWidth") && (this.minWidth = a.minWidth);
  a.hasOwnProperty("showBackground") && (this.EH = a.showBackground);
  a.hasOwnProperty("stretch") && (this.RH = a.stretch);
  a.hasOwnProperty("width") && (this.width = a.width);
  a.hasOwnProperty("widthPercentage") && (this.wP = a.widthPercentage);
  a.hasOwnProperty("alternateRowColor") && (this.iJ = a.alternateRowColor);
  a.hasOwnProperty("borderStyle") && (this.borderStyle = a.borderStyle);
  a.hasOwnProperty("showAllBorders") && (this.vo = a.showAllBorders);
  a.hasOwnProperty("showLeftBorder") && (this.zA = a.showLeftBorder);
  a.hasOwnProperty("showRightBorder") && (this.BA = a.showRightBorder);
  a.hasOwnProperty("showTopBorder") && (this.DA = a.showTopBorder);
  a.hasOwnProperty("showBottomBorder") && (this.xA = a.showBottomBorder)
}
C(pj, mj);
s = pj.prototype;
s.xD = i;
s.Cn = m;
s.minWidth = 0;
s.EH = m;
s.RH = m;
s.width = 0;
s.wP = 0;
s.iJ = m;
s.borderStyle = 0;
s.vo = m;
s.zA = m;
s.BA = m;
s.DA = m;
s.xA = m;
function qj() {
  new yh(k)
}
qj.prototype.Ka = p();
function rj(a, b, c) {
  for(;c >= b;) {
    var e = a[a.length - 1];
    if(e) {
      for(var f = e.fr, e = e.children, h = 0;h < e.length;h++) {
        var j = e[h];
        if(j.ol == k) {
          fh.g().error("decorateChildren: Control is null.")
        }else {
          j.ol.rb(j.Wx) ? j.ol.Ka(j.Wx) : j.ol.Na(j.Wx);
          var l = j.Wx.getAttribute("data-etk-name");
          f && ka(l) && (f[l] = j.ol)
        }
      }
      a.pop()
    }
    c--
  }
  return c
}
qj.prototype.Sn = function(a, b, c, e, f) {
  var h = [], f = w(f) ? f : m;
  z(e) || (e = m);
  for(var j = 0;j < b.length;j++) {
    var l = b[j], n = l.type, n = sj(a, n), o = l.TF;
    o || (o = JSON.stringify(l));
    var u = l.Xm, l = k;
    a.hI[sj(a, n)] || (n = "Widget");
    l = th(a, n, o, u, e);
    o = JSON.parse(o);
    if(o.hasOwnProperty("controls")) {
      n = 0;
      for(u = o.controls.length;n < u;n++) {
        var t = o.controls[n], t = {type:t.type, model:JSON.stringify(t)}, t = this.Sn(a, [t], k, e, i);
        0 < t.length && (l.Ca(t[0], i), t = t[0], a.Qh[t.P()] = t)
      }
    }
    o.hasOwnProperty("content") && (t = o.content, t = {type:t.type, model:JSON.stringify(t)}, t = this.Sn(a, [t], k, e, i), 0 < t.length && (l.Ca(t[0], i), o = t[0], a.Qh[o.P()] = o));
    f || (l.Na(c), o = l, a.Qh[o.P()] = o);
    h.push(l)
  }
  return h
};
qj.prototype.Xv = function(a, b) {
  var c = "Unknown";
  w && (c = b.toString(), b.hasOwnProperty("stack") && (c += "\nStack Trace:\n" + b.stack.toString()));
  w(document.body) && tj(this, a, c)
};
function tj(a, b, c) {
  var e = new oj({isModal:i, showTitleBar:i, showCloseButton:m, caption:"Error"});
  e.kx = [new nj({text:"Reload", type:"Button"})];
  var f = new pj({type:"Column"});
  f.controls = [new uj({text:"Unexpected error has occurred. ", type:"TextLabel", textAlign:"2"}), new uj({text:c, type:"TextLabel", textAlign:"0"}), new uj({text:" ", type:"TextLabel", textAlign:"2"}), new uj({text:"Click to reload the application.", type:"TextLabel", textAlign:"2"})];
  e.controls = [f];
  c = [{type:"Popup", TF:JSON.stringify(e)}];
  a = a.Sn(b, c, document.body)[0];
  a.ZK && (c = a.qe, 0 < c.length && c[0].xd().i(function() {
    document.location.reload()
  }));
  c = a.b();
  c.style.setProperty("width", "400px");
  c.style.setProperty("left", "35%");
  c.style.setProperty("z-index", "101");
  b = b.OQ;
  b !== g && (eh(b, m), dh(b));
  a.Y(i)
}
kf.prototype.ty = function() {
  return"etk" + (this.vz++).toString(36)
};
function vj(a) {
  ij.call(this, a)
}
C(vj, ij);
function wj(a) {
  ij.call(this, a);
  a.hasOwnProperty("linkIndex") && (this.IM = a.linkIndex);
  a.hasOwnProperty("smartTipID") && (this.Rs = a.smartTipID)
}
C(wj, vj);
wj.prototype.IM = 0;
wj.prototype.Rs = "";
function xj() {
}
B("tr.ui.SmartTipManager", xj);
s = xj.prototype;
s.zm = [];
s.Yo = k;
s.Uk = [];
s.wq = [];
s.NH = m;
s.WF = function(a) {
  for(var b = 0;b < this.Uk.length;b++) {
    this.Uk[b].WF(a)
  }
};
s.XF = function(a) {
  for(var b = 0;b < this.Uk.length;b++) {
    this.Uk[b].XF(a)
  }
};
function yj(a, b) {
  for(var c = 0;c < a.zm.length;c++) {
    if(0 <= zj(a.zm[c], b)) {
      return a.zm[c]
    }
  }
  return k
}
s.rF = function(a) {
  for(var b = 0;b < this.wq.length;b++) {
    if(this.wq[b].rF(a)) {
      return i
    }
  }
  return m
};
function Aj() {
  var a = Bj();
  a.Yo = k;
  Cj(a)
}
function Cj(a) {
  if(0 < a.wq.length) {
    for(var a = fb(a.wq), b = 0;b < a.length;b++) {
      Dj(a[b])
    }
  }
}
function Ej(a, b) {
  for(var c = 0;c < a.Uk.length;c++) {
    if(a.Uk[c].getName() === b) {
      return a.Uk[c]
    }
  }
  d("Referenced SmartTip not found")
}
;function H() {
  this.fa = new qj;
  this.fb = [];
  this.aw = new xj;
  this.nC = new yh(this);
  this.oC = new yh(this);
  this.Tw = new yh(this);
  this.RJ = new Dh(this, "ClientSideException", i, i);
  this.mC = [];
  this.TH = new yh(this, "SwitchToScheme1", m);
  this.UH = new yh(this, "SwitchToScheme2", m);
  w(window.matchMedia) && (this.Lz = window.matchMedia("print"), this.xt = A(this.lV, this), this.Lz.addListener(this.xt), this.Zz = window.matchMedia("screen"), this.yt = A(this.zV, this), this.Zz.addListener(this.yt));
  window.addEventListener("beforeunload", A(this.LW, this), m);
  this.rJ = new Fh(this, "AppState", m, m)
}
s = H.prototype;
s.LW = function() {
  w(this.xt) && (this.Lz.removeListener(this.xt), this.xt = k);
  w(this.yt) && (this.Zz.removeListener(this.yt), this.yt = k);
  w(this.oC) && this.oC.v(k)
};
s.lV = function() {
  if(this.Lz.matches) {
    var a = qc("etk-appcontent"), b = document.getElementsByTagName("body")[0];
    ab(lb(b), "scheme2") ? (this.VH = i, ob(b, "scheme2", "scheme1"), this.TH.v(new Ee("change"))) : this.VH = m;
    D(b, "etk-printmode");
    w(a) && xd(a, a.scrollHeight);
    this.WE = i
  }
};
s.zV = function() {
  if(this.Zz.matches && this.WE === i) {
    var a = qc("etk-appcontent"), b = document.getElementsByTagName("body")[0];
    this.VH && (ob(b, "scheme1", "scheme2"), this.UH.v(new Ee("change")));
    E(b, "etk-printmode");
    w(a) && xd(a, "");
    this.WE = m
  }
};
s.xt = k;
s.yt = k;
s.TH = k;
s.UH = k;
s.zS = q("TH");
H.prototype.getSwitchToScheme1ForPrintingEvent = H.prototype.zS;
H.prototype.AS = q("UH");
H.prototype.getSwitchToScheme2AfterPrintingEvent = H.prototype.AS;
x(H);
B("tr.ui.App", H);
H.getInstance = H.g;
s = H.prototype;
s.fa = k;
s.Lz = k;
s.Zz = k;
s.VH = m;
s.WE = m;
s.Qh = {};
s.mC = [];
s.bK = {};
s.ha = "";
s.P = q("ha");
s.mq = ba("ha");
s.eh = q("Qh");
s.Ia = function(a) {
  return"" == a ? k : this.Qh[a]
};
function Fj(a, b) {
  return"" == b ? k : a.bK[b]
}
s.init = function() {
  wh.g().$p(this);
  var a = document.body.getAttribute("data-etk-class");
  a !== g ? (wh.g().bA(a), Ai = "/services/ToolkitProxyService.svc/", this.fa.Ka(this)) : fh.g().log("Application class name could not be found, make sure the body tag has a data-etk-class attribute")
};
s.setProperty = function(a, b, c) {
  a["set" + b](c)
};
s.hI = {};
s.zQ = /\./g;
function sj(a, b) {
  return w(b) ? b.replace(a.zQ, "_") : b
}
s.z = function(a, b) {
  this.hI[sj(this, a)] = b
};
H.prototype.registerType = H.prototype.z;
function th(a, b, c, e, f) {
  var h = {};
  w(c) && (h = "string" == typeof c ? JSON.parse(c) : c);
  c = {};
  w(e) && "" != e && (c = JSON.parse(e));
  var e = k, b = sj(a, b), j = a.hI[b];
  j ? (e = new j(h, c, f), a.Qh[e.P()] = e, b = e.a().name, w(b) && (a.bK[b] = e)) : d("Control cannot be created, the type is not registered. Type=" + b);
  return e
}
s = H.prototype;
s.Sn = function(a, b, c) {
  return w(a) ? this.fa.Sn(this, JSON.parse(a), b, c) : []
};
s.XQ = [];
function Gj(a) {
  H.g().XQ.push(a)
}
function ph(a) {
  return a.OQ
}
s.Tw = k;
s.dM = m;
s.nC = k;
s.oC = k;
s.RJ = k;
nf = m;
s = H.prototype;
s.Xv = p();
s.Pb = function() {
  d("Not Implemented")
};
s.ob = function() {
  d("Not Implemented")
};
s.Y = function() {
  d("Not Implemented")
};
s.getName = function() {
  d("Not Implemented")
};
s.zi = function() {
  d("Not Implemented")
};
s.rc = function() {
  d("Not Implemented")
};
s.Vb = function() {
  d("Not Implemented")
};
s.pn = function() {
  d("Not Implemented")
};
s.Nl = function() {
  return H.e.Nl.call(this)
};
s.fb = [];
s.rr = function() {
  for(var a = this.lu(), b = 0;b < a.length;b++) {
    var c = a[b];
    if(c) {
      try {
        var e = c.children;
        if(e) {
          for(b = 0;b < e.length;b++) {
            var f = e[b];
            if(f.hasAttribute("data-etk-type")) {
              var h = this.Ia(f.id);
              h && (this.fb.push(h), this.Qt(h))
            }
          }
        }
      }catch(j) {
        fh.g().error(j.message)
      }
    }
  }
  return new Hj(this.fb)
};
s.Qt = function(a) {
  a.Xh() && !a.Ag() && a.rr()
};
s.lu = function() {
  var a = [];
  a.push(document.body.querySelector(".etk-appcontent"));
  return a
};
function Ij(a) {
  a.sort(function(a, c) {
    return a.sp() && c.sp() ? a.fe() - c.fe() : 0
  });
  return a
}
s.Pc = function(a) {
  var b = Ij(this.mC), c;
  for(c in b) {
    a = b[c].Pc(a)
  }
};
s.Ib = k;
s.wm = ba("Ib");
s.tp = q("Ib");
s.Xe = r(m);
s.ei = r(i);
s.Rg = 0;
s.yR = q("Rg");
H.prototype.getAppState = H.prototype.yR;
s = H.prototype;
s.WT = function(a) {
  var b = this.Rg;
  112 === a.keyCode ? (this.Rg = 1 === this.Rg ? 0 : 1, a.stopPropagation(), a.preventDefault()) : 27 === a.keyCode && (this.Rg = 0);
  F(document.body, "etk-app-contexthelp", 1 == this.Rg);
  b != this.Rg && (this.rJ.v(this.Rg, a), this.aw.WF(this.Rg))
};
s.rJ = k;
s.aw = k;
function Bj() {
  return H.g().aw
}
s.aV = function() {
  for(var a = this.aw, b = 0;b < a.Uk.length;b++) {
    Jj(a.Uk[b])
  }
};
s.cU = function(a) {
  this.aw.XF(a)
};
G(document, "DOMContentLoaded", A(function() {
  H.g().init()
}, H.g()), m);
G(window, "load", A(function() {
  this.dM = i;
  w(this.Tw) && this.Tw.v(k);
  this.rr();
  this.Pc(1);
  w(this.nC) && this.nC.v(k);
  dc(535.9) || (document.body.style.overflow = "auto");
  var a = H.g();
  G(document.body, "keydown", A(a.WT, a));
  G(window, "resize", A(a.aV, a));
  var b = qc("etk-appcontent");
  b != k && G(b, "scroll", A(a.cU, a));
  a = qc("etk-appcontent");
  w(a) && a.focus()
}, H.g()), m);
G(window, "error", A(function(a) {
  var b = H.g();
  fh.g().log(a.message);
  w(window.QQ) && window.QQ == i ? b.RJ.v("ClientSideException:" + a.message, k) : this.Xv(a)
}, H.g()), m);
function Kj() {
}
x(Kj);
Kj.prototype.Lf = {};
Kj.prototype.z = function(a, b) {
  this.Lf.hasOwnProperty(a) && d("ConverterFactory has already registered type " + a);
  this.Lf[a] = b
};
Kj.prototype.create = function(a) {
  var b = a.type;
  b == g && (b = a);
  return!this.Lf.hasOwnProperty(b) ? (b != k && fh.g().log("ConverterFactory has no registered type called " + b), k) : new this.Lf[b](a)
};
function Lj(a, b) {
  this.ha = Mj++;
  this.Cr = a.formula;
  this.QE = a.identifier;
  this.Ii = a.type;
  this.sd = a.target;
  this.ib = b;
  this.mm = {formula:this.Cr, identifier:this.QE};
  a.hasOwnProperty("converter") && (this.vl = Kj.g().create(a.converter))
}
H.g().z("StreamingDataBehavior", Nj);
s = Lj.prototype;
s.ha = 0;
s.Cr = "";
s.QE = "";
s.Ii = "";
s.sd = "";
s.vl = k;
s.ib = k;
s.ua = m;
s.wy = q("sd");
s.CH = ba("sd");
s.ly = q("vl");
s.wg = q("Ii");
s.Ia = q("ib");
s.iF = q("ua");
s.qb = function() {
  this.ua || (this.ua = i, Vi.g().qb(this))
};
s.detach = function() {
  this.ua && (this.ua = m, Vi.g().detach(this))
};
s.P = q("ha");
var Mj = 0;
function Oj() {
}
;function Pj(a, b, c, e, f) {
  gh.call(this, a, f);
  this.Yi = e;
  this.pw = c;
  this.ow = b
}
C(Pj, gh);
s = Pj.prototype;
s.type = "etk_datatable_rowdata_arrive";
s.Yi = "";
s.pw = "";
s.ow = "";
s.getData = q("Yi");
Pj.prototype.getData = Pj.prototype.getData;
Pj.prototype.pE = q("pw");
Pj.prototype.getTypes = Pj.prototype.pE;
Pj.prototype.oE = q("ow");
Pj.prototype.getTransactionID = Pj.prototype.oE;
function Qj(a, b) {
  this.ha = a;
  this.te = b
}
s = Qj.prototype;
s.ha = -1;
s.te = k;
s.P = q("ha");
s.I = function(a) {
  return this.te.I(this.ha, a)
};
s.ka = function(a, b) {
  this.te.ka(this.ha, a, b)
};
s.Sd = function() {
  return this.te.Sd()
};
function Rj(a, b, c) {
  this.B = new lf;
  I.call(this, a, "RowDataArrive", b, c)
}
C(Rj, yh);
Rj.prototype.i = function(a, b) {
  G(this.B, "etk_datatable_rowdata_arrive", a, g, b)
};
Rj.prototype.listen = Rj.prototype.i;
Rj.prototype.H = function(a, b) {
  Ve(this.B, "etk_datatable_rowdata_arrive", a, g, b)
};
Rj.prototype.unlisten = Rj.prototype.H;
Rj.prototype.la = function() {
  Ze(this.B, Rj.UI)
};
Rj.prototype.unlistenAll = Rj.prototype.la;
Rj.prototype.Rx = function(a, b, c) {
  var e = "", f = "";
  if(c !== g && c !== k) {
    for(var e = e + "{", f = f + "{", h = c.Sd(), j = h.length, l = 0;l < j;l++) {
      var n = h[l], e = e + ('"' + n + '":"' + Sj(b[n], c.I(n)) + '"'), f = f + ('"' + n + '":' + b[n].toString());
      l < j - 1 && (e += ",", f += ",")
    }
    e += "}";
    f += "}"
  }
  this.B.dispatchEvent(new Pj(k, a, f, e, this.aa));
  this.md == i && wh.g().Nd(this.aa.P(), this.Fc, '{"id":"' + a + '","t":' + f + ',"d":' + e + "}", this.Kc)
};
function Tj() {
  this.ga = []
}
s = Tj.prototype;
s.add = function(a) {
  a && this.ga.push(a)
};
s.remove = function(a) {
  a && (a.detach(), bb(this.ga, a))
};
s.NG = function(a) {
  if(0 < a && a < this.ga.length) {
    var b = this.ga[a];
    if(b) {
      return b.detach(), cb(this.ga, a)
    }
  }
  return m
};
s.clear = function() {
  for(var a = 0, b = this.ga.length;a < b;a++) {
    this.remove(this.ga[a])
  }
};
s.contains = function(a) {
  return ab(this.ga, a)
};
s.filter = function(a, b) {
  return Wa(this.ga, a, b)
};
s.Da = function() {
  return this.ga.length
};
s.getItem = function(a) {
  return 0 > a && a >= this.ga.length ? k : this.ga[a]
};
function Uj() {
}
C(Uj, yf);
x(Uj);
Uj.prototype.J = function() {
  return Vj
};
Uj.prototype.rb = r(i);
Uj.prototype.Vb = function(a, b) {
  a.title = b
};
var Vj = "etk-control";
function Wj(a, b, c) {
  gh.call(this, a, c);
  this.DN = b
}
C(Wj, gh);
Wj.prototype.type = "etk_property_changed";
Wj.prototype.DN = "";
Wj.prototype.ju = q("DN");
Wj.prototype.getPropertyName = Wj.prototype.ju;
function Xj(a) {
  I.call(this, a)
}
C(Xj, I);
Xj.prototype.i = function(a, b) {
  G(this.B, "etk_property_changed", a, g, b)
};
Xj.prototype.listen = Xj.prototype.i;
Xj.prototype.H = function(a, b) {
  Ve(this.B, "etk_property_changed", a, g, b)
};
Xj.prototype.unlisten = Xj.prototype.H;
Xj.prototype.la = function() {
  Ze(this.B, "etk_property_changed")
};
Xj.prototype.unlistenAll = Xj.prototype.la;
Xj.prototype.v = function(a, b) {
  var c = new Wj(b, a, this.aa);
  Ah(this) && this.B.dispatchEvent(c)
};
Xj.prototype.dispatch = Xj.prototype.v;
function K(a, b, c, e, f) {
  kg.call(this, k, e, f);
  na(a);
  a = a.__proto__ === this.M ? a : new this.M.constructor(a);
  this.Bd(a);
  c && (c = this.a().qJ, c !== g && c !== k && (this.mq(c), wh.g().$p(this), H.g().eh()[c] = this));
  this.ef();
  w(b) && (this.Oz = new Xj(this));
  if(w(a.$w)) {
    b = a.$w;
    a.$w instanceof Array || (b = JSON.parse("" + b));
    for(c = 0;c < b.length;c++) {
      a = b[c], (a = Yj.g().create(a, this)) && this.Pb().add(a)
    }
  }
}
C(K, kg);
ag(K, Uj);
H.g().z("v2.Control", K);
s = K.prototype;
s.M = ij.prototype;
s.a = function() {
  return K.e.a.call(this)
};
s.zD = function(a) {
  jj(a, this.M)
};
s.Oz = k;
s.log = function(a) {
  fh.g().log(a)
};
s.getName = function() {
  return this.a().name
};
K.prototype.getName = K.prototype.getName;
K.prototype.zi = function(a) {
  this.a().name = a
};
K.prototype.setName = K.prototype.zi;
K.prototype.rc = function() {
  return this.a().gg
};
K.prototype.getTooltip = K.prototype.rc;
K.prototype.Vb = function(a) {
  this.a().gg = a;
  Zj(this, a)
};
K.prototype.setTooltip = K.prototype.Vb;
K.prototype.ob = function() {
  return this.a().w
};
K.prototype.getIsVisible = K.prototype.ob;
K.prototype.Y = function(a) {
  this.a().w = a;
  this.F(a);
  L(this, "Visible")
};
K.prototype.setIsVisible = K.prototype.Y;
K.prototype.P = function() {
  return K.e.P.call(this)
};
K.prototype.getId = K.prototype.P;
K.prototype.Pb = function() {
  this.ga || (this.ga = new Tj);
  return this.ga
};
K.prototype.getBehaviors = K.prototype.Pb;
K.prototype.fv = p();
K.prototype.onLayoutBehaviorAttachedInternal = K.prototype.fv;
K.prototype.pn = q("Oz");
K.prototype.getPropertyChangedEvent = K.prototype.pn;
function L(a, b) {
  var c = new Ee("change");
  w(a.Oz) && a.Oz.v(b, c)
}
s = K.prototype;
s.Nl = function() {
  return this.a().UL
};
function Zj(a, b, c) {
  if(c || (c = a.b())) {
    w(b) ? c.title = b : delete c.title
  }
}
s.ef = function() {
  pg(this, 32, this.kn())
};
s.kn = r(m);
s.l = function(a) {
  K.e.l.call(this, a);
  this.ef();
  this.Y(this.ob());
  Zj(this, this.rc(), a);
  this.Nl() && (a["data-etk-inst"] = this)
};
s.k = function() {
  K.e.k.call(this);
  $j(this)
};
s.Xb = function(a, b, c) {
  b = this.u().m(b);
  b.className = "etk-control " + c;
  b.setAttribute("data-etk-type", a);
  b.setAttribute("data-etk-ctor", "{}");
  b.setAttribute("data-etk-behaviors", "{}");
  b.setAttribute("data-etk-events", "{}");
  this.l(b);
  return b
};
function $j(a) {
  if(0 < a.Pb().Da()) {
    for(var b = 0;b < a.Pb().Da();b++) {
      a.Pb().getItem(b).qb()
    }
  }
}
function ak(a) {
  var b = a.b(), c = b.parentNode, e = b.nextSibling;
  c.removeChild(b);
  return function() {
    e ? c.insertBefore(b, e) : c.appendChild(b)
  }
}
K.prototype.render = K.prototype.Na;
s = K.prototype;
s.Pc = aa();
s.sp = r(m);
s.Xh = r(m);
s.Ib = k;
s.wm = ba("Ib");
s.tp = q("Ib");
s.ei = r(m);
function bk(a, b) {
  return w(a) && w(a[b])
}
function ck(a, b, c) {
  w(b) && (b = a["get" + b + "Event"], ma(b) && (a = b.apply(a), w(a) && (a.Kc = c)))
}
s.SV = function(a) {
  ck(this, a, i)
};
K.prototype.setDoesHaveListener = K.prototype.SV;
K.prototype.TV = function(a) {
  ck(this, a, m)
};
K.prototype.setDoesNotHaveListener = K.prototype.TV;
K.prototype.Xe = r(m);
function dk(a) {
  ij.call(this, a)
}
C(dk, ij);
function ek(a, b) {
  K.call(this, a, k, i);
  this.ib = b
}
C(ek, K);
ek.prototype.M = dk.prototype;
ek.prototype.wg = r("Behavior");
ek.prototype.a = function() {
  return ek.e.a.call(this)
};
H.g().z("Behavior", ek);
ek.prototype.ua = m;
ek.prototype.iF = q("ua");
ek.prototype.isAttached = ek.prototype.iF;
ek.prototype.Ia = q("ib");
ek.prototype.getControl = ek.prototype.Ia;
ek.prototype.qb = function() {
  this.ua || (this.ua = i)
};
ek.prototype.attach = ek.prototype.qb;
ek.prototype.detach = function() {
  this.ua && (this.ua = m)
};
ek.prototype.detach = ek.prototype.detach;
function fk(a, b) {
  this.ib = b;
  this.Ii = a.type;
  this.$N = a.row;
  this.Lm = a.column;
  this.ZN = a.rowSpan || a.rowspan;
  this.vx = a.columnSpan || a.columnspan;
  this.ib = b;
  this.Ew = 6
}
C(fk, K);
H.g().z("LayoutBehavior", fk);
s = fk.prototype;
s.Ii = "";
s.$N = Number.NaN;
s.Lm = Number.NaN;
s.ZN = Number.NaN;
s.vx = Number.NaN;
s.OB = 29;
s.JB = 4;
s.Ew = 6;
s.CB = 13;
s.ZB = 13;
s.LI = 35;
s.ua = m;
s.ib = k;
s.wg = q("Ii");
s.iF = q("ua");
s.Ia = q("ib");
s.qb = function() {
  if(!this.ua) {
    this.ua = i;
    var a = this.Ia().b(), b = this.CB + this.Lm * this.OB;
    this.Lm < this.LI && (b += this.Lm * this.Ew);
    var c = this.vx * this.OB;
    1 < this.vx && (c += (this.vx - 1) * this.Ew);
    var e = this.ZB + this.$N * this.JB, f = this.ZN * this.JB;
    a.style.setProperty("position", "absolute");
    a.style.setProperty("left", b + "px");
    a.style.setProperty("top", e + "px");
    a.style.setProperty("width", c + "px");
    a.style.setProperty("height", f + "px");
    a = this.Ia();
    a.fv && a.fv()
  }
};
s.detach = function() {
  this.ua && (this.ua = m)
};
function gk(a, b) {
  fk.call(this, a, b);
  this.ZB = this.CB = 0
}
C(gk, fk);
H.g().z("WidgetLayoutBehavior", gk);
function hk() {
}
hk.prototype.create = function(a) {
  switch(a) {
    case 1:
      return Kj.g().create({type:"ColorChangeConverter"});
    case 2:
      return Kj.g().create({type:"ItemIDToControlItemConverter"});
    default:
      return k
  }
};
function ik() {
  this.D = document.createElement("div");
  this.D.style.display = "table";
  this.D.style.width = "100%";
  this.D.style.height = "100%";
  this.D.style.verticalAlign = "inherit";
  var a = document.createElement("p");
  a.style.display = "table-cell";
  a.style.verticalAlign = "inherit";
  this.bw = document.createElement("span");
  this.ZH = document.createTextNode("");
  this.bw.appendChild(this.ZH);
  a.appendChild(this.bw);
  this.D.appendChild(a)
}
s = ik.prototype;
s.b = q("D");
s.Ha = function() {
  return this.D.offsetWidth
};
s.va = function() {
  return this.D.offsetHeight
};
s.jd = q("Jd");
s.Nc = function(a) {
  return this.Jd !== a ? (this.Jd = a, this.ZH.nodeValue = a !== k ? a : "", i) : m
};
s.D = k;
s.bw = k;
s.ZH = k;
s.Jd = k;
function jk(a, b) {
  b === g || b === k ? (this.D = document.createElement("div"), a !== g && a !== k && (this.D.id = a), this.D.className = "etk-grid-abs", this.D.style.left = "0px", this.D.style.top = "0px") : (this.D = b, a !== g && a !== k && (this.D.id = a))
}
s = jk.prototype;
s.clone = function(a) {
  var b = this.D.cloneNode(m), a = new jk(a, b);
  a.Is = this.Is;
  a.Yr = this.Yr;
  a.Sc = this.Sc;
  a.bd = this.bd;
  a.Yq = this.Yq;
  return a
};
s.toString = function() {
  return"{id: " + this.P() + ", x: " + this.Ic() + ", y: " + this.sc() + ", w: " + this.Ha() + ", h: " + this.va() + "}"
};
s.moveTo = function(a, b) {
  this.Ge(a);
  this.pd(b)
};
s.Pv = function(a, b, c, e) {
  var f = this.D.style, h = m, a = a + "px";
  f.left !== a && (f.left = a, h = i);
  a = b + "px";
  f.top !== a && (f.top = a, h = i);
  b = m;
  this.Sc !== c && (this.Sc = c, f.width = c + "px", b = i);
  this.bd !== e && (this.bd = e, f.height = e + "px", b = i);
  b && kk(this);
  if(this.ub !== k && (h || b)) {
    for(c = this.ub.length;0 <= --c;) {
      e = this.ub[c].D.style, e.left = f.left, e.top = f.top, e.width = f.width, e.height = f.height
    }
  }
};
s.Ue = function(a, b) {
  return a < this.D.offsetLeft || b < this.D.offsetTop || a >= this.D.offsetLeft + this.D.offsetWidth || b >= this.D.offsetTop + this.D.offsetHeight ? m : i
};
s.i = function(a, b, c, e) {
  G(this.D, a, b, c, e)
};
s.ku = function(a) {
  return sd(a, this.D)
};
function lk(a, b, c) {
  b !== k && 0 < b.length && F(a.D, b, c)
}
function mk(a, b) {
  a.Gx = b;
  for(var c in b) {
    if(a.D.style[c] !== g) {
      var e = b[c];
      a.D.style[c] !== e && (a.D.style[c] = e)
    }
  }
}
function nk(a) {
  ok(a, "pointerEvents", "none")
}
s.po = function(a, b) {
  this.Hj(a.D, b)
};
s.Hj = function(a, b) {
  this.Cs();
  if(a !== k) {
    if(this.ub !== k) {
      var c = 0;
      if(b !== i) {
        for(c = this.ub.length;0 <= --c;) {
          a.appendChild(this.ub[c].D)
        }
      }else {
        for(c = this.ub.length;0 <= --c;) {
          a.insertBefore(this.ub[c].D, a.firstChild)
        }
      }
    }
    b !== i ? a.appendChild(this.D) : a.insertBefore(this.D, a.firstChild)
  }
};
s.Cs = function() {
  this.D.parentNode !== k && this.D.parentNode.removeChild(this.D);
  if(this.ub !== k) {
    for(var a = this.ub.length;0 <= --a;) {
      var b = this.ub[a].D;
      b.parentNode !== k && b.parentNode.removeChild(b)
    }
  }
};
s.ba = function() {
  this.Cs();
  Ze(this.D);
  this.D = this.Qo = this.ll = k
};
function pk(a) {
  a.ub === k && (a.ub = []);
  var b = new jk("border");
  nk(b);
  b.Pv(a.D.offsetLeft, a.D.offsetTop, a.Sc, a.bd);
  b.F(a.Se());
  b.Hj(a.D.parentNode);
  a.ub.push(b);
  return b
}
s.P = function() {
  return this.D.id ? this.D.id : k
};
s.jd = q("ll");
s.Nc = function(a) {
  this.Au = m;
  return a !== g && a !== k && a === a ? a.outerHTML === g ? qk(this, a + "") : rk(this, a) : rk(this, k)
};
function qk(a, b) {
  if(a.Qo === k) {
    if(b === k) {
      return m
    }
    a.Qo = new ik
  }
  a.Au = i;
  var c = a.Qo.Nc(b);
  return c |= rk(a, a.Qo.b())
}
s.ro = function(a) {
  this.Is !== a && (lk(this, this.Is, m), this.Is = a, lk(this, this.Is, i))
};
s.vi = function(a) {
  this.Yr !== a && (lk(this, this.Yr, m), this.Yr = a, lk(this, this.Yr, i))
};
s.Se = function() {
  return"hidden" !== this.D.style.visibility
};
s.F = function(a) {
  this.mb !== a && (this.mb = a, kk(this))
};
s.Ic = function() {
  return this.D.offsetLeft
};
s.Ge = function(a) {
  a += "px";
  if(this.D.style.left !== a && (this.D.style.left = a, this.ub !== k)) {
    for(var b = this.ub.length;0 <= --b;) {
      this.ub[b].D.style.left = a
    }
  }
};
s.sc = function() {
  return this.D.offsetTop
};
s.pd = function(a) {
  a += "px";
  if(this.D.style.top !== a && (this.D.style.top = a, this.ub !== k)) {
    for(var b = this.ub.length;0 <= --b;) {
      this.ub[b].D.style.top = a
    }
  }
};
s.Ha = function() {
  return this.D.offsetWidth
};
s.xa = function(a) {
  if(this.Sc !== a && (this.Sc = a, kk(this), a = 0 <= this.Sc ? this.Sc + "px" : "100%", this.D.style.width = a, this.ub !== k)) {
    for(var b = this.ub.length;0 <= --b;) {
      this.ub[b].D.style.width = a
    }
  }
};
s.va = function() {
  return this.D.offsetHeight
};
s.Ma = function(a) {
  if(this.bd !== a && (this.bd = a, kk(this), a = 0 <= this.bd ? this.bd + "px" : "", this.D.style.height = a, this.ub !== k)) {
    for(var b = this.ub.length;0 <= --b;) {
      this.ub[b].D.style.height = a
    }
  }
};
s.vy = function() {
  return this.D.offsetLeft + this.D.offsetWidth
};
s.jp = function() {
  return this.D.offsetTop + this.D.offsetHeight
};
s.un = function() {
  return this.D.scrollLeft
};
s.so = function(a) {
  this.D.scrollLeft !== a && (this.D.scrollLeft = a)
};
s.nk = function() {
  return this.D.scrollTop
};
s.Ij = function(a) {
  this.D.scrollTop !== a && (this.D.scrollTop = a)
};
s.Gv = function(a, b, c, e) {
  this.nq(a);
  this.sq(b);
  this.qo(c);
  this.Lk(e)
};
s.nq = function(a) {
  a = a ? this.Yq + "px" : "";
  this.D.style.borderLeftWidth !== a && (this.D.style.borderLeftWidth = a)
};
s.sq = function(a) {
  a = a ? this.Yq + "px" : "";
  this.D.style.borderTopWidth !== a && (this.D.style.borderTopWidth = a)
};
s.qo = function(a) {
  a = a ? this.Yq + "px" : "";
  this.D.style.borderRightWidth !== a && (this.D.style.borderRightWidth = a)
};
s.Lk = function(a) {
  a = a ? this.Yq + "px" : "";
  this.D.style.borderBottomWidth !== a && (this.D.style.borderBottomWidth = a)
};
s.xg = function() {
  return Number(this.D.style.zIndex)
};
s.Hg = function(a) {
  this.D.style.zIndex = a
};
function rk(a, b) {
  if(a.ll === b) {
    return m
  }
  a.ll !== k && a.D.removeChild(a.ll);
  a.ll = b;
  if(a.ll !== k) {
    a.D.appendChild(a.ll);
    var c = a.ll.offsetHeight;
    0 < c && a.D.offsetHeight > c ? a.D.style.paddingTop = Math.floor(0.5 * (a.D.offsetHeight - c)) + "px" : 0 < a.D.style.paddingTop.length && (a.D.style.paddingTop = "")
  }
  return i
}
function kk(a) {
  var b = a.mb && 0 !== a.Sc * a.bd ? "" : "hidden";
  if(a.D.style.visibility !== b && (a.D.style.visibility = b, a.ub !== k)) {
    for(var c = a.ub.length;0 <= --c;) {
      a.ub[c].D.style.visibility = b
    }
  }
}
function ok(a, b, c) {
  c ? a.D.style[b] !== c && (a.D.style[b] = c) : 0 < a.D.style[b].length && (a.D.style[b] = "")
}
s.D = k;
s.ub = k;
s.Is = k;
s.Yr = k;
s.Gx = k;
s.mb = i;
s.Sc = -1;
s.bd = -1;
s.Yq = 1;
s.ll = k;
s.Au = m;
s.Qo = k;
function sk(a, b) {
  fk.call(this, a, b);
  this.OB = 4;
  this.JB = 8;
  this.Ew = 4;
  this.ZB = this.CB = 8;
  this.LI = 999
}
C(sk, fk);
H.g().z("ComponentFrameBehavior", sk);
function tk() {
}
function uk(a) {
  if("number" == typeof a) {
    var b = new tk;
    b.KA = a;
    var c;
    c = a;
    if(0 == c) {
      c = "Etc/GMT"
    }else {
      var e = ["Etc/GMT", 0 > c ? "-" : "+"];
      c = Math.abs(c);
      e.push(Math.floor(c / 60) % 100);
      c %= 60;
      0 != c && e.push(":", Na(c, 2));
      c = e.join("")
    }
    b.$O = c;
    0 == a ? a = "UTC" : (c = ["UTC", 0 > a ? "+" : "-"], a = Math.abs(a), c.push(Math.floor(a / 60) % 100), a %= 60, 0 != a && c.push(":", a), a = c.join(""));
    b.iI = [a, a];
    b.$A = [];
    return b
  }
  b = new tk;
  b.$O = a.id;
  b.KA = -a.std_offset;
  b.iI = a.names;
  b.$A = a.transitions;
  return b
}
function vk(a, b) {
  for(var c = Date.UTC(b.getUTCFullYear(), b.getUTCMonth(), b.getUTCDate(), b.getUTCHours(), b.getUTCMinutes()) / 36E5, e = 0;e < a.$A.length && c >= a.$A[e];) {
    e += 2
  }
  return 0 == e ? 0 : a.$A[e - 1]
}
;function wk(a) {
  this.ed = [];
  "number" == typeof a ? this.Vq(a) : this.Pi(a)
}
var xk = [/^\'(?:[^\']|\'\')*\'/, /^(?:G+|y+|M+|k+|S+|E+|a+|h+|K+|H+|c+|L+|Q+|d+|m+|s+|v+|z+|Z+)/, /^[^\'GyMkSEahKHcLQdmsvzZ]+/];
wk.prototype.Pi = function(a) {
  for(;a;) {
    for(var b = 0;b < xk.length;++b) {
      var c = a.match(xk[b]);
      if(c) {
        c = c[0];
        a = a.substring(c.length);
        0 == b && ("''" == c ? c = "'" : (c = c.substring(1, c.length - 1), c = c.replace(/\'\'/, "'")));
        this.ed.push({text:c, type:b});
        break
      }
    }
  }
};
wk.prototype.$m = function(a, b) {
  var c = b ? 6E4 * (a.getTimezoneOffset() - (b.KA - vk(b, a))) : 0, e = c ? new Date(a.getTime() + c) : a, f = e;
  b && e.getTimezoneOffset() != a.getTimezoneOffset() && (f = new Date(a.getTime() + (c + (0 < c ? -864E5 : 864E5))));
  for(var c = [], h = 0;h < this.ed.length;++h) {
    var j = this.ed[h].text;
    1 == this.ed[h].type ? c.push(yk(j, a, e, f, b)) : c.push(j)
  }
  return c.join("")
};
wk.prototype.Vq = function(a) {
  if(4 > a) {
    a = Xi.Tj[a]
  }else {
    if(8 > a) {
      a = Xi.Iw[a - 4]
    }else {
      if(12 > a) {
        a = Xi.Tj[a - 8] + " " + Xi.Iw[a - 8]
      }else {
        this.Vq(10);
        return
      }
    }
  }
  this.Pi(a)
};
function zk(a, b) {
  var c = b.getMonth();
  switch(a) {
    case 5:
      return Xi.UP[c];
    case 4:
      return Xi.Mq[c];
    case 3:
      return Xi.RI[c];
    default:
      return Na(c + 1, a)
  }
}
function Ak(a, b) {
  var c = b.getDay();
  switch(a) {
    case 5:
      return Xi.hQ[c];
    case 4:
      return Xi.kQ[c];
    case 3:
      return Xi.jQ[c];
    default:
      return Na(c, 1)
  }
}
function Bk(a, b) {
  var c = b.getMonth();
  switch(a) {
    case 5:
      return Xi.gQ[c];
    case 4:
      return Xi.fQ[c];
    case 3:
      return Xi.iQ[c];
    default:
      return Na(c + 1, a)
  }
}
function yk(a, b, c, e, f) {
  var h = a.length;
  switch(a.charAt(0)) {
    case "G":
      return b = 0 < c.getFullYear() ? 1 : 0, 4 <= h ? Xi.KP[b] : Xi.EI[b];
    case "y":
      return b = c.getFullYear(), 0 > b && (b = -b), 2 == h ? Na(b % 100, 2) : "" + b;
    case "M":
      return zk(h, c);
    case "k":
      return Na(e.getHours() || 24, h);
    case "S":
      return(e.getTime() % 1E3 / 1E3).toFixed(Math.min(3, h)).substr(2) + (3 < h ? Na(0, h - 3) : "");
    case "E":
      return b = c.getDay(), 4 <= h ? Xi.YI[b] : Xi.QB[b];
    case "a":
      return h = e.getHours(), Xi.yI[12 <= h && 24 > h ? 1 : 0];
    case "h":
      return Na(e.getHours() % 12 || 12, h);
    case "K":
      return Na(e.getHours() % 12, h);
    case "H":
      return Na(e.getHours(), h);
    case "c":
      return Ak(h, c);
    case "L":
      return Bk(h, c);
    case "Q":
      return b = Math.floor(c.getMonth() / 3), 4 > h ? Xi.SI[b] : Xi.OI[b];
    case "d":
      return Na(c.getDate(), h);
    case "m":
      return Na(e.getMinutes(), h);
    case "s":
      return Na(e.getSeconds(), h);
    case "v":
      return h = f || uk(b.getTimezoneOffset()), h.$O;
    case "z":
      return a = f || uk(b.getTimezoneOffset()), 4 > h ? a.iI[0 < vk(a, b) ? 2 : 0] : a.iI[0 < vk(a, b) ? 3 : 1];
    case "Z":
      return a = f || uk(b.getTimezoneOffset()), 4 > h ? (h = -(a.KA - vk(a, b)), b = [0 > h ? "-" : "+"], h = Math.abs(h), b.push(Na(Math.floor(h / 60) % 100, 2), Na(h % 60, 2))) : (h = a.KA - vk(a, b), b = ["GMT"], b.push(0 >= h ? "+" : "-"), h = Math.abs(h), b.push(Na(Math.floor(h / 60) % 100, 2), ":", Na(h % 60, 2))), h = b.join("");
    default:
      return""
  }
}
;function Ck(a) {
  wk.call(this, a)
}
C(Ck, wk);
Ck.prototype.$m = function(a, b) {
  return Ck.e.$m.call(this, a, b)
};
var Dk = {en:{KB:"MMM-yyyy", yB:"dd-MMM-yyyy"}, ja:{KB:"yyyy\u5e74M\u6708", yB:"yyyy\u5e74M\u6708d\u65e5"}, zh:{KB:"yyyy\u5e74M\u6708", yB:"yyyy\u5e74M\u6708d\u65e5"}, get:function(a) {
  return 0 === a.toLowerCase().indexOf("zh") ? Dk.zh : 0 === a.toLowerCase().indexOf("ja") ? Dk.ja : Dk.en
}};
function Ek() {
}
Ek.prototype.RD = function() {
  var a = new Date, b = Math.floor(1E3 * Math.random()) + 1;
  return a.getFullYear() + "" + a.getMonth() + "" + a.getDate() + "" + a.getHours() + "" + a.getMinutes() + "" + a.getSeconds() + "" + a.getMilliseconds() + "_" + b
};
Ek.prototype.YQ = function() {
  function a(a, b) {
    CanvasRenderingContext2D.prototype.lineTo.call(this, e(a) + 0.5, e(b) + 0.5)
  }
  function b(a, b) {
    CanvasRenderingContext2D.prototype.moveTo.call(this, e(a) + 0.5, e(b) + 0.5)
  }
  function c(c) {
    var e = HTMLCanvasElement.prototype.getContext.call(this, c);
    "2d" === c && (e.moveTo = b, e.lineTo = a);
    return e
  }
  var e = Math.round;
  return function() {
    var a = document.createElement("canvas");
    Ob && window.G_vmlCanvasManager ? window.G_vmlCanvasManager.initElement(a) : a.getContext = c;
    return a
  }
}();
var Ni = 0, Oi = 32;
function Fk() {
}
C(Fk, yf);
x(Fk);
s = Fk.prototype;
s.Of = r("button");
s.Og = function(a, b, c) {
  16 == b ? xf(a, "pressed", c) : Fk.e.Og.call(this, a, b, c)
};
s.m = function(a) {
  var b = Fk.e.m.call(this, a), c = a.rc();
  c && this.Vb(b, c);
  (c = a.I()) && this.ka(b, c);
  a.rd & 16 && this.Og(b, 16, a.ie());
  return b
};
s.Ka = function(a, b) {
  var b = Fk.e.Ka.call(this, a, b), c = this.I(b);
  a.hc = c;
  a.sA(this.rc(b));
  a.rd & 16 && this.Og(b, 16, a.ie());
  return b
};
s.I = fa;
s.ka = fa;
s.rc = function(a) {
  return a.title
};
s.Vb = function(a, b) {
  a && (a.title = b || "")
};
s.J = r("goog-button");
function Gk() {
}
C(Gk, Fk);
x(Gk);
s = Gk.prototype;
s.Of = p();
s.m = function(a) {
  Hk(a);
  return a.u().m("button", {"class":this.ej(a).join(" "), disabled:!a.isEnabled(), title:a.rc() || "", value:a.I() || ""}, a.pc() || "")
};
s.rb = function(a) {
  return"BUTTON" == a.tagName || "INPUT" == a.tagName && ("button" == a.type || "submit" == a.type || "reset" == a.type)
};
s.Ka = function(a, b) {
  Hk(a);
  b.disabled && D(b, this.au(1));
  return Gk.e.Ka.call(this, a, b)
};
s.vk = function(a) {
  a.ma().i(a.b(), "click", a.si)
};
s.gc = fa;
s.Os = fa;
s.Dn = function(a) {
  return a.isEnabled()
};
s.ef = fa;
s.He = function(a, b, c) {
  Gk.e.He.call(this, a, b, c);
  if((a = a.b()) && 1 == b) {
    a.disabled = c
  }
};
s.I = function(a) {
  return a.value
};
s.ka = function(a, b) {
  a && (a.value = b)
};
s.Og = fa;
function Hk(a) {
  lg(a, m);
  a.rC &= -256;
  pg(a, 32, m)
}
;function Ik(a, b, c) {
  kg.call(this, a, b || Gk.g(), c)
}
C(Ik, kg);
s = Ik.prototype;
s.I = q("hc");
s.ka = function(a) {
  this.hc = a;
  this.fa.ka(this.b(), a)
};
s.rc = q("Ng");
s.Vb = function(a) {
  this.Ng = a;
  this.fa.Vb(this.b(), a)
};
s.sA = ba("Ng");
s.n = function() {
  Ik.e.n.call(this);
  delete this.hc;
  delete this.Ng
};
s.k = function() {
  Ik.e.k.call(this);
  if(this.rd & 32) {
    var a = this.na();
    a && this.ma().i(a, "keyup", this.lj)
  }
};
s.lj = function(a) {
  return 13 == a.keyCode && "key" == a.type || 32 == a.keyCode && "keyup" == a.type ? this.si(a) : 32 == a.keyCode
};
cg("goog-button", function() {
  return new Ik(k)
});
var Jk, Kk;
Kk = Jk = m;
var Lk = Jb();
Lk && (-1 != Lk.indexOf("Firefox") || -1 != Lk.indexOf("Camino") || (-1 != Lk.indexOf("iPhone") || -1 != Lk.indexOf("iPod") ? Jk = i : -1 != Lk.indexOf("iPad") ? Kk = i : -1 != Lk.indexOf("Android") || -1 != Lk.indexOf("Chrome") || Lk.indexOf("Safari")));
var Mk = Jk, Nk = Kk;
function Ok() {
}
C(Ok, Fk);
x(Ok);
s = Ok.prototype;
s.m = function(a) {
  var b = {"class":"goog-inline-block " + this.ej(a).join(" "), title:a.rc() || ""}, b = a.u().m("div", b, this.Bx(a.jd(), a.u()));
  this.cA(a, b);
  return b
};
s.Of = r("button");
s.cA = function(a, b) {
  a.isEnabled() || this.Og(b, 1, i);
  a.uc() && this.Og(b, 8, i);
  a.rd & 16 && this.Og(b, 16, i);
  a.Uf() && this.Og(b, 64, i)
};
s.La = function(a) {
  return a && a.firstChild.firstChild
};
s.Bx = function(a, b) {
  return b.m("div", "goog-inline-block " + (this.J() + "-outer-box"), b.m("div", "goog-inline-block " + (this.J() + "-inner-box"), a))
};
s.rb = function(a) {
  return"DIV" == a.tagName
};
s.Ka = function(a, b) {
  Pk(b, i);
  Pk(b, m);
  var c;
  a: {
    if((c = a.u().fL(b)) && -1 != c.className.indexOf(this.J() + "-outer-box")) {
      if((c = a.u().fL(c)) && -1 != c.className.indexOf(this.J() + "-inner-box")) {
        c = i;
        break a
      }
    }
    c = m
  }
  c || b.appendChild(this.Bx(b.childNodes, a.u()));
  D(b, "goog-inline-block", this.J());
  return Ok.e.Ka.call(this, a, b)
};
s.J = r("goog-custom-button");
function Pk(a, b) {
  if(a) {
    for(var c = b ? a.firstChild : a.lastChild, e;c && c.parentNode == a;) {
      e = b ? c.nextSibling : c.previousSibling;
      if(3 == c.nodeType) {
        var f = c.nodeValue;
        if("" == za(f)) {
          a.removeChild(c)
        }else {
          c.nodeValue = b ? f.replace(/^[\s\xa0]+/, "") : f.replace(/[\s\xa0]+$/, "");
          break
        }
      }else {
        break
      }
      c = e
    }
  }
}
;function Qk() {
}
C(Qk, Ok);
x(Qk);
Pb && (Qk.prototype.Nc = function(a, b) {
  var c = Qk.e.La.call(this, a && a.firstChild);
  if(c) {
    var e = this.createCaption(b, mc(a)), f = c.parentNode;
    f && f.replaceChild(e, c)
  }
});
s = Qk.prototype;
s.La = function(a) {
  a = Qk.e.La.call(this, a && a.firstChild);
  if(Pb && a && a.__goog_wrapper_div) {
    a = a.firstChild
  }
  return a
};
s.Ka = function(a, b) {
  var c = rc("*", "goog-menu", b)[0];
  if(c) {
    Cd(c, m);
    pc(c).body.appendChild(c);
    var e = new Ug;
    e.Ka(c);
    a.yi(e)
  }
  return Qk.e.Ka.call(this, a, b)
};
s.Bx = function(a, b) {
  return Qk.e.Bx.call(this, [this.createCaption(a, b), this.Cx(b)], b)
};
s.createCaption = function(a, b) {
  return b.m("div", "goog-inline-block " + (this.J() + "-caption"), a)
};
s.Cx = function(a) {
  return a.m("div", "goog-inline-block " + (this.J() + "-dropdown"), "\u00a0")
};
s.J = r("goog-menu-button");
function Rk(a, b, c, e) {
  Ik.call(this, a, c || Qk.g(), e);
  pg(this, 64, i);
  b && this.yi(b);
  this.MT = k;
  this.Qa = new Sf(500);
  if((Mk || Nk) && !dc("533.17.9")) {
    this.Lu = i
  }
}
C(Rk, Ik);
s = Rk.prototype;
s.iC = i;
s.$G = m;
s.Lu = m;
s.RN = m;
s.k = function() {
  Rk.e.k.call(this);
  this.C && Sk(this, this.C, i);
  xf(this.b(), "haspopup", "true")
};
s.nb = function() {
  Rk.e.nb.call(this);
  if(this.C) {
    this.Ac(m);
    this.C.nb();
    Sk(this, this.C, m);
    var a = this.C.b();
    a && Kc(a)
  }
};
s.n = function() {
  Rk.e.n.call(this);
  this.C && (this.C.ba(), delete this.C);
  delete this.gV;
  this.Qa.ba()
};
s.pk = function(a) {
  Rk.e.pk.call(this, a);
  this.es() && (this.Ac(!this.Uf(), a), this.C && (this.C.ji = this.Uf()))
};
s.zn = function(a) {
  Rk.e.zn.call(this, a);
  this.C && !this.es() && (this.C.ji = m)
};
s.si = function() {
  this.setActive(m);
  return i
};
s.TS = function(a) {
  this.C && this.C.w() && !this.Vg(a.target) && this.Ac(m)
};
s.Vg = function(a) {
  return a && Oc(this.b(), a) || this.C && this.C.Vg(a) || m
};
s.lj = function(a) {
  if(32 == a.keyCode) {
    if(a.preventDefault(), "keyup" != a.type) {
      return m
    }
  }else {
    if("key" != a.type) {
      return m
    }
  }
  if(this.C && this.C.w()) {
    var b = this.C.Ld(a);
    return 27 == a.keyCode ? (this.Ac(m), i) : b
  }
  return 40 == a.keyCode || 38 == a.keyCode || 32 == a.keyCode ? (this.Ac(i), i) : m
};
s.xE = function() {
  this.Ac(m)
};
s.dT = function() {
  this.es() || this.Ac(m)
};
s.bi = function(a) {
  this.Lu || this.Ac(m);
  Rk.e.bi.call(this, a)
};
s.oa = function() {
  this.C || this.yi(new Ug(this.u()));
  return this.C || k
};
s.yi = function(a) {
  var b = this.C;
  if(a != b && (b && (this.Ac(m), this.Ra && Sk(this, b, m), delete this.C), a)) {
    this.C = a, a.wh(this), a.F(m), a.jq(this.Lu), this.Ra && Sk(this, a, i)
  }
  return b
};
s.jg = function(a) {
  this.oa().Ca(a, i)
};
s.Qg = function(a, b) {
  this.oa().Df(a, b, i)
};
s.removeItem = function(a) {
  (a = this.oa().removeChild(a, i)) && a.ba()
};
s.Bj = function(a) {
  (a = vf(this.oa(), a, i)) && a.ba()
};
s.Hc = function(a) {
  return this.C ? rf(this.C, a) : k
};
s.ij = function() {
  return this.C ? qf(this.C) : 0
};
s.F = function(a, b) {
  var c = Rk.e.F.call(this, a, b);
  c && !this.w() && this.Ac(m);
  return c
};
s.Oa = function(a) {
  Rk.e.Oa.call(this, a);
  this.isEnabled() || this.Ac(m)
};
s.Qv = ba("RN");
s.GH = function() {
  this.Ac(i)
};
s.Ac = function(a, b) {
  Rk.e.Ac.call(this, a);
  if(this.C && !!(this.Wa & 64) == a) {
    if(a) {
      this.C.Ra || (this.RN ? this.C.Na(this.b().parentNode) : this.C.Na()), this.Iq = pd(this.b()), this.Po = Ad(this.b()), this.mv(), Lg(this.C, -1)
    }else {
      if(this.setActive(m), this.C.ji = m, this.b() && xf(this.b(), "activedescendant", ""), w(this.Iz)) {
        this.Iz = g;
        var c = this.C.b();
        c && vd(c, "", "")
      }
    }
    this.C.F(a, m, b);
    if(!this.Ku()) {
      var c = this.ma(), e = a ? c.i : c.H;
      e.call(c, Yc(this.u()), "mousedown", this.TS, i);
      this.Lu && e.call(c, this.C, "blur", this.dT);
      e.call(c, this.Qa, Uf, this.Hz);
      a ? this.Qa.start() : this.Qa.stop()
    }
  }
};
s.mv = function() {
  if(this.C.Ra) {
    var a = this.gV || this.b(), a = new Pf(a, this.iC ? 5 : 7, !this.$G, this.$G), b = this.C.b();
    this.C.w() || (b.style.visibility = "hidden", Cd(b, i));
    !this.Iz && this.$G && (this.Iz = yd(b));
    a.Jb(b, this.iC ? 4 : 6, this.MT, this.Iz);
    this.C.w() || (Cd(b, m), b.style.visibility = "visible")
  }
};
s.Hz = function() {
  var a = Ad(this.b()), b = pd(this.b());
  if(!(this.Po == a || (!this.Po || !a ? 0 : this.Po.left == a.left && this.Po.width == a.width && this.Po.top == a.top && this.Po.height == a.height)) || !(this.Iq == b || (!this.Iq || !b ? 0 : this.Iq.top == b.top && this.Iq.right == b.right && this.Iq.bottom == b.bottom && this.Iq.left == b.left))) {
    this.Po = a, this.Iq = b, this.mv()
  }
};
function Sk(a, b, c) {
  var e = a.ma(), c = c ? e.i : e.H;
  c.call(e, b, "action", a.xE);
  c.call(e, b, "highlight", a.wE);
  c.call(e, b, "unhighlight", a.CE)
}
s.wE = function(a) {
  xf(this.b(), "activedescendant", a.target.b().id)
};
s.CE = function() {
  Mg(this.C) || xf(this.b(), "activedescendant", "")
};
cg("goog-menu-button", function() {
  return new Rk(k)
});
function Tk() {
}
C(Tk, Fk);
x(Tk);
s = Tk.prototype;
s.m = function(a) {
  var b = {"class":"goog-inline-block " + this.ej(a).join(" "), title:a.rc() || ""};
  return a.u().m("div", b, a.jd())
};
s.Of = r("button");
s.rb = function(a) {
  return"DIV" == a.tagName
};
s.Ka = function(a, b) {
  D(b, "goog-inline-block");
  return Tk.e.Ka.call(this, a, b)
};
s.I = r(k);
s.J = r("goog-flat-button");
cg("goog-flat-button", function() {
  return new Ik(k, Tk.g())
});
function Uk() {
}
C(Uk, Tk);
x(Uk);
s = Uk.prototype;
s.m = function(a) {
  var b = {"class":"goog-inline-block " + this.ej(a).join(" "), title:a.rc() || ""};
  return a.u().m("div", b, [this.createCaption(a.jd(), a.u()), this.Cx(a.u())])
};
s.La = function(a) {
  return a && a.firstChild
};
s.Ka = function(a, b) {
  var c = rc("*", "goog-menu", b)[0];
  if(c) {
    Cd(c, m);
    Yc(a.u()).body.appendChild(c);
    var e = new Ug;
    e.Ka(c);
    a.yi(e)
  }
  rc("*", this.J() + "-caption", b)[0] || b.appendChild(this.createCaption(b.childNodes, a.u()));
  rc("*", this.J() + "-dropdown", b)[0] || b.appendChild(this.Cx(a.u()));
  return Uk.e.Ka.call(this, a, b)
};
s.createCaption = function(a, b) {
  return b.m("div", "goog-inline-block " + (this.J() + "-caption"), a)
};
s.Cx = function(a) {
  return a.m("div", "goog-inline-block " + (this.J() + "-dropdown"), "\u00a0")
};
s.J = r("goog-flat-menu-button");
cg("goog-flat-menu-button", function() {
  return new Rk(k, k, Uk.g())
});
function Vk(a) {
  this.Sj = a
}
C(Vk, Uk);
Vk.prototype.J = q("Sj");
Vk.prototype.rb = r(i);
function Wk(a) {
  this.za = [];
  this.sj = z(a) ? a : k
}
Wk.prototype.za = [];
Wk.prototype.sj = k;
Wk.prototype.ri = k;
Wk.prototype.Da = function() {
  return this.za.length
};
Wk.prototype.getCount = Wk.prototype.Da;
Wk.prototype.getItem = function(a) {
  return this.za[a]
};
Wk.prototype.getItem = Wk.prototype.getItem;
Wk.prototype.setItem = function(a, b) {
  this.za[a] !== b && (this.NG(a), this.Uy(a, b))
};
Wk.prototype.add = function(a, b) {
  Xk(a);
  this.za.push(a);
  a.wm(this);
  this.sj && this.sj.ni(a, this.Da() - 1, b)
};
Wk.prototype.add = Wk.prototype.add;
Wk.prototype.clear = function() {
  for(;0 < this.za.length;) {
    this.remove(this.za[0])
  }
};
Wk.prototype.clear = Wk.prototype.clear;
Wk.prototype.indexOf = function(a) {
  return Ua(this.za, a)
};
Wk.prototype.indexOf = Wk.prototype.indexOf;
Wk.prototype.Uy = function(a, b) {
  Xk(b);
  hb(this.za, a, 0, b);
  b.wm(this);
  this.sj && this.sj.ni(b, a)
};
Wk.prototype.insert = Wk.prototype.Uy;
Wk.prototype.remove = function(a) {
  Yk(this, this.indexOf(a), m)
};
Wk.prototype.remove = Wk.prototype.remove;
Wk.prototype.NG = function(a) {
  Yk(this, a, m)
};
Wk.prototype.removeAt = Wk.prototype.NG;
function Yk(a, b, c) {
  if(0 <= b && b < a.za.length) {
    var e = a.getItem(b);
    cb(a.za, b);
    e.wm(k);
    a.sj && a.sj.zj(b, c)
  }
}
function Xk(a) {
  if(k != a.Ib) {
    var b = a.Ib;
    Yk(b, b.indexOf(a), i)
  }
}
;function Zk(a) {
  Wk.call(this, a)
}
C(Zk, Wk);
function $k(a, b) {
  a.sj && a.sj.im();
  for(var c = JSON.parse(b), e = a.Da() - 1;0 <= e;e--) {
    Yk(a, e, i)
  }
  for(e = 0;e < c.length;e++) {
    var f = c[e], h = H.g().eh()[f];
    w(h) ? a.add(h) : d("setItemsAsJson(): Control with the ID " + f + " was not registered!")
  }
  a.sj && a.sj.hm()
}
function al(a, b) {
  var c = H.g().Ia(b);
  c ? a.remove(c) : fh.g().jt("Control being removed is either already remoevd or never created on client.")
}
function bl(a, b) {
  var c = JSON.parse(b), e = H.g().Ia(c.id);
  e ? (fh.g().info("insertItemFromJson called for id: " + c.id), a.Uy(c.index, e)) : fh.g().jt("Control being added is not created on client.")
}
function cl(a) {
  for(;0 != a.Da();) {
    a.remove(a.getItem(0))
  }
}
;function dl(a) {
  Wk.call(this, a)
}
C(dl, Zk);
function el(a, b, c, e) {
  gh.call(this, a, e);
  this.X = b;
  this.Ga = c
}
C(el, gh);
el.prototype.type = "etk_DropdownItem_changed";
el.prototype.X = k;
el.prototype.Jc = q("X");
el.prototype.getPrevious = el.prototype.Jc;
el.prototype.Ga = k;
el.prototype.qc = q("Ga");
el.prototype.getCurrent = el.prototype.qc;
function fl(a, b, c, e, f) {
  I.call(this, a, w(b) ? b : "Changed", c, e, f)
}
C(fl, I);
fl.prototype.X = k;
fl.prototype.i = function(a, b) {
  G(this.B, "etk_DropdownItem_changed", a, g, b)
};
fl.prototype.listen = fl.prototype.i;
fl.prototype.H = function(a, b) {
  Ve(this.B, "etk_DropdownItem_changed", a, g, b)
};
fl.prototype.unlisten = fl.prototype.H;
fl.prototype.la = function() {
  Ze(this.B, "etk_DropdownItem_changed")
};
fl.prototype.unlistenAll = fl.prototype.la;
fl.prototype.v = function(a, b) {
  var c = new el(b, this.X, a, this.aa);
  this.X = a;
  Ah(this) && (this.B.dispatchEvent(c), this.md == i && (c = "", w(a) && (c = a.P()), wh.g().Nd(this.aa.P(), this.Fc, c, this.Kc)))
};
function gl(a) {
  this.Sj = a
}
C(gl, yf);
gl.prototype.J = q("Sj");
gl.prototype.rb = r(i);
function hl(a) {
  ij.call(this, a);
  a.hasOwnProperty("isEnabled") && (this.isEnabled = a.isEnabled);
  a.hasOwnProperty("isSelected") && (this.uc = a.isSelected);
  a.hasOwnProperty("itemID") && (this.Vf = a.itemID);
  a.hasOwnProperty("text") && (this.text = a.text)
}
C(hl, ij);
hl.prototype.isEnabled = i;
hl.prototype.uc = m;
hl.prototype.Vf = "";
hl.prototype.text = "";
function il(a) {
  this.Dt = [];
  this.Sj = a
}
C(il, Cg);
il.prototype.J = q("Sj");
il.prototype.rb = r(i);
function jl(a, b, c, e, f) {
  K.call(this, a, b, c, e, f)
}
C(jl, K);
B("tr.ui.ItemControl", jl);
jl.prototype.Z = function() {
  return this.a().isEnabled
};
jl.prototype.getIsEnabled = jl.prototype.Z;
jl.prototype.R = function(a) {
  a || kl(this);
  this.a().isEnabled = a;
  this.nH(a)
};
jl.prototype.setIsEnabled = jl.prototype.R;
jl.prototype.ob = function() {
  return this.a().w
};
jl.prototype.getIsVisible = jl.prototype.ob;
jl.prototype.Y = function(a) {
  this.a().w = a;
  this.ko(a);
  a || kl(this)
};
jl.prototype.setIsVisible = jl.prototype.Y;
jl.prototype.ko = p();
function kl(a) {
  var b = ll(a);
  if(b != k) {
    var c = b.Ea();
    if(c) {
      if(c == a) {
        b.Ba(k)
      }else {
        if(c.Ib) {
          for(var c = c.Ib.ri, e = [];c != k && z(c.tp);) {
            e.push(c), c = w(c.Ib) ? c.Ib.ri : k
          }
          c = e
        }else {
          c = k
        }
        for(var f in c) {
          if(c[f] == a) {
            b.Ba(k);
            break
          }
        }
      }
    }
  }
}
jl.prototype.ra = function(a) {
  this.rA(a);
  a = ll(this);
  if(a != k) {
    var b = a.Ea();
    b && b == this && a.Ba(b)
  }
};
jl.prototype.ln = function() {
  return ll(this).Ea() == this
};
jl.prototype.getIsSelected = jl.prototype.ln;
jl.prototype.fE = function() {
  return this.kk()
};
jl.prototype.getItemId = jl.prototype.fE;
jl.prototype.kk = function() {
  return this.a().Vf
};
jl.prototype.getItemID = jl.prototype.kk;
function ll(a) {
  if(!a.Ib) {
    return k
  }
  for(a = a.Ib.ri;a && !a.ei();) {
    if(a = a.Ib) {
      a = a.ri
    }else {
      a = k;
      break
    }
  }
  return a
}
;var ml = new gl("etk-dropdownlistitem"), nl = new il("etk-dropdownlistitem");
function ol(a, b, c, e, f) {
  K.call(this, a, b, c, z(e) ? e : ml, f);
  this.Nb = new Hg(this.a().text, k, k, nl);
  rg(this.Nb, 2);
  this.Vd = new fl(this, "ItemHighlighted", m, m, i);
  this.Fn = new fl(this, "TextChanged", m, m);
  this.vF = new fl(this, "VisibilityChanged", m, m)
}
C(ol, jl);
B("tr.ui.DropdownItem", ol);
ag(ol, Uj);
H.g().z("DropdownItem", ol);
s = ol.prototype;
s.M = hl.prototype;
s.Nb = k;
s.a = function() {
  return ol.e.a.call(this)
};
s.l = function(a) {
  ol.e.l.call(this, a)
};
s.k = function() {
  ol.e.k.call(this)
};
s.n = function() {
  ol.e.n.call(this)
};
s.qj = function() {
  var a = this.a();
  this.zi(a.name);
  this.Y(a.w);
  this.Vb(a.gg);
  this.rA(a.text);
  this.R(a.isEnabled);
  $j(this);
  this.Nb.addEventListener("highlight", A(this.nG, this))
};
s.b = function() {
  return this.Nb.b()
};
s.wa = function() {
  return this.a().text
};
ol.prototype.getText = ol.prototype.wa;
ol.prototype.rA = function(a) {
  this.a().text = a;
  this.Nb.Od(a);
  this.kD()
};
ol.prototype.setText = ol.prototype.ra;
ol.prototype.ko = function(a) {
  this.Nb.F(a);
  this.vF.v(this, new Ee("itemvisibilitychanged", this))
};
ol.prototype.nH = function(a) {
  this.Nb.Oa(a)
};
ol.prototype.Vd = k;
ol.prototype.mn = q("Vd");
ol.prototype.getItemHighlightedEvent = ol.prototype.mn;
ol.prototype.nG = function() {
  this.Vd.v(this, new Ee("itemhighlighted", this))
};
ol.prototype.Fn = k;
ol.prototype.up = q("Fn");
ol.prototype.getTextChangedEvent = ol.prototype.up;
ol.prototype.kD = function() {
  this.Fn.v(this, new Ee("itemtextchanged", this))
};
ol.prototype.vF = k;
ol.prototype.Ay = q("vF");
ol.prototype.getVisibilityChangedEvent = ol.prototype.Ay;
function pl(a) {
  lj.call(this, a);
  a.hasOwnProperty("highlightStyle") && (this.Hb = a.highlightStyle)
}
C(pl, lj);
pl.prototype.Hb = Ni;
function ql(a, b, c, e, f) {
  K.call(this, a, b, c, e, f)
}
C(ql, K);
ag(ql, Uj);
H.g().z("v2.InputControl", ql);
s = ql.prototype;
s.M = lj.prototype;
s.a = function() {
  return ql.e.a.call(this)
};
s.kn = r(i);
s.l = function(a) {
  ql.e.l.call(this, a)
};
s.k = function() {
  ql.e.k.call(this);
  this.R(this.Z());
  this.od(this.kd())
};
s.pb = function(a) {
  this.a().hasFocus = a;
  this.Pk(a);
  a && (a = this.b()) && a.focus()
};
ql.prototype.setHasFocus = ql.prototype.pb;
ql.prototype.Z = function() {
  return this.a().isEnabled
};
ql.prototype.getIsEnabled = ql.prototype.Z;
ql.prototype.R = function(a) {
  this.a().isEnabled = a;
  this.Oa(a)
};
ql.prototype.setIsEnabled = ql.prototype.R;
ql.prototype.kd = function() {
  return this.a().Qd
};
ql.prototype.getTabEnabled = ql.prototype.kd;
ql.prototype.od = function(a) {
  this.a().Qd = a;
  a == m ? this.Pc(-1) : this.Pc(1)
};
ql.prototype.setTabEnabled = ql.prototype.od;
ql.prototype.fe = function() {
  return this.a().zq
};
ql.prototype.getTabOrder = ql.prototype.fe;
ql.prototype.Pc = function(a) {
  var b = this.na();
  b != k && (this.kd && this.kd() ? (a = this.fe() + a, b.setAttribute("tabindex", a)) : b.setAttribute("tabindex", -1));
  return a
};
ql.prototype.sp = r(i);
function rl(a, b, c, e, f) {
  K.call(this, a, b, c, e, f)
}
C(rl, ql);
ag(rl, Uj);
H.g().z("v2.KeyboardInputControl", rl);
rl.prototype.M = pl.prototype;
rl.prototype.a = function() {
  return rl.e.a.call(this)
};
rl.prototype.k = function() {
  rl.e.k.call(this);
  this.bc(this.Td())
};
rl.prototype.Td = function() {
  return this.a().Hb
};
rl.prototype.getHighlightStyle = rl.prototype.Td;
rl.prototype.bc = function(a) {
  this.Im(this.Td(), m);
  this.a().Hb = a;
  this.Im(a, i);
  a & 16 ? ma(this.Pa) && (w(this.a().error) || this.Pa(" ")) : ma(this.Pa) && this.Pa(k);
  F(this.Vh(), "etk-iphighlight-true", a > Ni && 16 >= a)
};
rl.prototype.setHighlightStyle = rl.prototype.bc;
rl.prototype.Im = function(a, b) {
  a & 1 && this.Dc(1, b);
  a & 2 && this.Dc(2, b);
  a & 4 && this.Dc(4, b);
  a & 8 && this.Dc(8, b);
  a & 16 && this.Dc(16, b);
  a & Oi && this.Dc(Oi, b);
  a & 64 && this.Dc(64, b);
  a & 128 && this.Dc(128, b)
};
rl.prototype.Dc = function(a, b) {
  var c = sl.g(), e = k;
  if(a && (e = c[a])) {
    e = tl + "-" + e, this.Lv(e, b)
  }
};
rl.prototype.Lv = function(a, b) {
  F(this.Vh(), a, b)
};
rl.prototype.Vh = function() {
  return this.b()
};
var tl = "etk-kbinput";
function ul(a) {
  this.za = [];
  vl(this, a)
}
C(ul, lf);
s = ul.prototype;
s.Md = k;
s.co = k;
s.ij = function() {
  return this.za.length
};
s.Hc = function(a) {
  return this.za[a] || k
};
function vl(a, b) {
  b && (Va(b, function(a) {
    wl(this, a, m)
  }, a), gb(a.za, b))
}
s.jg = function(a) {
  this.Qg(a, this.ij())
};
s.Qg = function(a, b) {
  a && (wl(this, a, m), hb(this.za, b, 0, a))
};
s.removeItem = function(a) {
  a && bb(this.za, a) && a == this.Md && (this.Md = k, this.dispatchEvent("select"))
};
s.Bj = function(a) {
  this.removeItem(this.Hc(a))
};
s.Ea = q("Md");
s.Tb = function() {
  return fb(this.za)
};
s.Ba = function(a) {
  a != this.Md && (wl(this, this.Md, m), this.Md = a, wl(this, a, i));
  this.dispatchEvent("select")
};
s.Kd = function() {
  return this.Md ? Ua(this.za, this.Md) : -1
};
s.Oc = function(a) {
  this.Ba(this.Hc(a))
};
s.clear = function() {
  var a = this.za;
  if(!ha(a)) {
    for(var b = a.length - 1;0 <= b;b--) {
      delete a[b]
    }
  }
  a.length = 0;
  this.Md = k
};
s.n = function() {
  ul.e.n.call(this);
  delete this.za;
  this.Md = k
};
function wl(a, b, c) {
  b && ("function" == typeof a.co ? a.co(b, c) : "function" == typeof b.oq && b.oq(c))
}
;function xl(a, b, c, e) {
  Rk.call(this, a, b, c, e);
  this.Jx = a;
  yl(this);
  this.Kz = "listbox"
}
C(xl, Rk);
s = xl.prototype;
s.ac = k;
s.Jx = k;
s.k = function() {
  xl.e.k.call(this);
  yl(this);
  zl(this);
  xf(this.b(), "haspopup", "false")
};
s.l = function(a) {
  xl.e.l.call(this, a);
  (a = this.pc()) ? (this.Jx = a, yl(this)) : this.Oc(0)
};
s.n = function() {
  xl.e.n.call(this);
  this.ac && (this.ac.ba(), this.ac = k);
  this.Jx = k
};
s.xE = function(a) {
  this.Ba(a.target);
  xl.e.xE.call(this, a);
  a.stopPropagation();
  this.dispatchEvent("action")
};
s.jT = function() {
  var a = this.Ea();
  xl.e.ka.call(this, a && a.I());
  yl(this)
};
s.yi = function(a) {
  var b = xl.e.yi.call(this, a);
  a != b && (this.ac && this.ac.clear(), a && (this.ac ? pf(a, function(a) {
    Al(a);
    this.ac.jg(a)
  }, this) : Bl(this, a)));
  return b
};
s.jg = function(a) {
  Al(a);
  xl.e.jg.call(this, a);
  this.ac ? this.ac.jg(a) : Bl(this, this.oa())
};
s.Qg = function(a, b) {
  Al(a);
  xl.e.Qg.call(this, a, b);
  this.ac ? this.ac.Qg(a, b) : Bl(this, this.oa())
};
s.removeItem = function(a) {
  xl.e.removeItem.call(this, a);
  this.ac && this.ac.removeItem(a)
};
s.Bj = function(a) {
  xl.e.Bj.call(this, a);
  this.ac && this.ac.Bj(a)
};
s.Ba = function(a) {
  this.ac && this.ac.Ba(a)
};
s.Oc = function(a) {
  this.ac && this.Ba(this.ac.Hc(a))
};
s.ka = function(a) {
  if(w(a) && this.ac) {
    for(var b = 0, c;c = this.ac.Hc(b);b++) {
      if(c && "function" == typeof c.I && c.I() == a) {
        this.Ba(c);
        return
      }
    }
  }
  this.Ba(k)
};
s.Ea = function() {
  return this.ac ? this.ac.Ea() : k
};
s.Kd = function() {
  return this.ac ? this.ac.Kd() : -1
};
function Bl(a, b) {
  a.ac = new ul;
  b && pf(b, function(a) {
    Al(a);
    this.ac.jg(a)
  }, a);
  zl(a)
}
function zl(a) {
  a.ac && a.ma().i(a.ac, "select", a.jT)
}
function yl(a) {
  var b = a.Ea();
  a.Nc(b ? b.pc() : a.Jx)
}
function Al(a) {
  a.Kz = a instanceof Hg ? "option" : "separator"
}
s.Ac = function(a, b) {
  xl.e.Ac.call(this, a, b);
  this.Uf() && Lg(this.oa(), this.Kd())
};
cg("goog-select", function() {
  return new xl(k)
});
function Cl(a) {
  pl.call(this, a);
  a.hasOwnProperty("controlWidth") && (this.sl = a.controlWidth);
  if(a.hasOwnProperty("items")) {
    this.T = [];
    for(var b = a.items, c = 0;c < b.length;c++) {
      this.T.push(new hl(b[c]))
    }
  }
  a.hasOwnProperty("menuHeight") && (this.sz = a.menuHeight);
  a.hasOwnProperty("placeholderText") && (this.xc = a.placeholderText);
  a.hasOwnProperty("renderMenuAsSibling") && (this.Cj = a.renderMenuAsSibling);
  a.hasOwnProperty("selectedIndex") && (this.selectedIndex = a.selectedIndex);
  a.hasOwnProperty("selectedItem") && (this.$b = a.selectedItem);
  0 == this.T.length && (this.selectedIndex = -1)
}
C(Cl, pl);
s = Cl.prototype;
s.sl = 1;
s.T = [];
s.sz = 0;
s.xc = "";
s.Cj = i;
s.selectedIndex = 0;
s.$b = k;
function Dl(a, b, c, e) {
  gh.call(this, a, e);
  this.X = b;
  this.Ga = c
}
C(Dl, gh);
Dl.prototype.type = "etk_Int_changed";
Dl.prototype.X = 0;
Dl.prototype.Jc = q("X");
Dl.prototype.getPrevious = Dl.prototype.Jc;
Dl.prototype.Ga = 0;
Dl.prototype.qc = q("Ga");
Dl.prototype.getCurrent = Dl.prototype.qc;
function El(a, b, c, e) {
  I.call(this, a, w(b) ? b : "Changed", c, e)
}
C(El, I);
El.prototype.X = 0;
El.prototype.i = function(a, b) {
  G(this.B, "etk_Int_changed", a, g, b)
};
El.prototype.listen = El.prototype.i;
El.prototype.H = function(a, b) {
  Ve(this.B, "etk_Int_changed", a, g, b)
};
El.prototype.unlisten = El.prototype.H;
El.prototype.la = function() {
  Ze(this.B, "etk_Int_changed")
};
El.prototype.unlistenAll = El.prototype.la;
El.prototype.v = function(a, b) {
  var c = new Dl(b, this.X, a, this.aa);
  this.X = a;
  Ah(this) && (this.B.dispatchEvent(c), this.md == i && wh.g().iq(this.aa.P(), this.Fc, a, this.Kc))
};
var Fl = new gl("etk-dropdown"), Gl = new Vk("etk-dropdownlist");
function N(a, b, c, e, f) {
  K.call(this, a, b, c, z(e) ? e : Fl, f);
  this.gc(i);
  this.V = new dl(this);
  this.V.ri = this;
  this.zc = new xl("", k, Gl);
  this.pf = bk(b, "SelectedIndexChanged") || bk(b, "SelectedItemChanged");
  this.ao = new El(this, "SelectedIndexChanged", c, this.pf);
  this.bo = new fl(this, "SelectedItemChanged", c, this.pf);
  this.Vd = new fl(this, "ItemHighlighted", m, m, i);
  0 == this.a().T.length && (this.a().selectedIndex = -1)
}
C(N, rl);
B("tr.ui.Dropdown", N);
ag(N, Uj);
H.g().z("Dropdown", N);
s = N.prototype;
s.M = Cl.prototype;
s.kn = r(m);
s.ao = k;
s.bo = k;
s.cm = 0;
s.Kp = "";
s.AB = 10;
s.IB = 5;
s.FB = 15;
s.lt = 31;
s.Wu = m;
s.Ip = N.prototype.lt;
s.cd = k;
s.V = k;
s.zc = k;
s.pf = i;
s.lv = k;
s.a = function() {
  return N.e.a.call(this)
};
s.l = function(a) {
  N.e.l.call(this, a);
  var b = this.u().m("div", {"class":"etk-dropdownlist-outer"});
  a.appendChild(b);
  this.Bh = this.u().m("span", "etk-dropdown-sizing");
  this.Bh.innerText = "";
  this.b().appendChild(this.Bh);
  this.aj("etk-dropdown", i);
  this.zc.Qv(this.kj());
  this.zc.Na(b);
  this.kj() || (this.lv = new Nf(this.zc.b(), 7))
};
s.m = function() {
  this.Xb("Dropdown", "div", "")
};
s.k = function() {
  N.e.k.call(this);
  this.Iv(this.a().sl);
  this.zc.oa() != k && (this.ma().i(this.zc, "action", this.KU), G(this.zc, "aftershow", A(this.OU, this)));
  this.$u()
};
s.$u = function() {
  this.qj()
};
s.OU = function() {
  this.cd == k && (this.cd = this.zc.oa().b(), D(this.cd, this.zc.fa.J() + "-menu"));
  this.AC();
  this.kj() || (wd(this.cd, yd(this.zc.b()).width), this.lv.Jb(this.cd, 6))
};
s.n = function() {
  N.e.n.call(this)
};
s.qj = function() {
  for(var a = this.a(), b = 0;b < a.T.length;b++) {
    var c = a.T[b], e = new ol(c, {}, i);
    this.V.add(e);
    c.uc && this.Ba(e);
    c.text.length > this.Ze.length && (this.Ze = c.text)
  }
  this.Ea() == k && a.selectedIndex < a.T.length && this.Oc(a.selectedIndex);
  this.lA(a.sz)
};
s.kj = function() {
  return this.a().Cj
};
s.Qv = function(a) {
  this.a().Cj = a
};
s.KU = function() {
  var a = this;
  Bh(function() {
    Hl(a, m);
    var b = a.zc.Kd(), c = k;
    0 <= b && (c = a.V.getItem(b));
    if(c != a.a().$b) {
      a.a().$b = c;
      L(a, "SelectedItem");
      var e = new Ee("selecteditemchanged", a);
      a.bo.v(c, e);
      a.Vd.v(c, e)
    }
    b != a.a().selectedIndex && (a.a().selectedIndex = b, L(a, "SelectedIndex"), e = new Ee("selectedindexchanged", a), a.ao.v(b, e));
    Hl(a, i)
  })
};
s.Xc = m;
s.vr = k;
s.im = function() {
  this.Xc = i;
  this.vr = ak(this)
};
s.hm = function() {
  this.Xc = m;
  this.Jh();
  this.vr()
};
s.ni = function(a, b) {
  this.zc.Qg(a.Nb, b);
  a.qj();
  this.Xc || this.Jh();
  this.oG(a);
  this.KG(a);
  a.a().uc && this.Ba(a)
};
s.zj = function(a, b) {
  this.ND();
  b = w(b) ? b : m;
  this.a().selectedIndex == a && this.Ba(k);
  b === m ? this.zc.Bj(a) : vf(this.zc.oa(), a, i);
  this.Xc || this.Jh()
};
s.cg = function(a) {
  var b = this.Ea();
  bl(this.V, a);
  z(b) && 0 <= this.V.indexOf(b) && this.Ba(b)
};
N.prototype.setInsertItem = N.prototype.cg;
N.prototype.dg = function(a) {
  var b = this.Ea();
  z(b) && 0 <= this.V.indexOf(b) && this.Ba(b);
  al(this.V, a)
};
N.prototype.setRemoveItem = N.prototype.dg;
N.prototype.bg = function() {
  cl(this.V);
  this.Ba(k)
};
N.prototype.setClear = N.prototype.bg;
N.prototype.Mv = function(a) {
  var b = this.Ea();
  $k(this.V, a);
  z(b) && 0 <= this.V.indexOf(b) && this.Ba(b)
};
N.prototype.Kd = function() {
  var a = this.V.indexOf(this.Ea());
  return this.a().selectedIndex = a
};
N.prototype.getSelectedIndex = N.prototype.Kd;
N.prototype.Oc = function(a) {
  Hl(this, m);
  a >= this.V.Da() && d("setSelectedIndex() set to an index that is larger than the number of items.");
  this.a().selectedIndex = a;
  L(this, "SelectedIndex");
  this.zc.Oc(a);
  0 <= a && (this.a().$b = this.V.getItem(a));
  this.Cd(this.Re());
  Hl(this, i)
};
N.prototype.setSelectedIndex = N.prototype.Oc;
N.prototype.Ea = function() {
  return this.a().$b
};
N.prototype.getSelectedItem = N.prototype.Ea;
N.prototype.Ba = function(a) {
  Hl(this, m);
  var b = m, c = a;
  "string" == typeof a && (c = H.g().Ia(a));
  a = -1;
  w(c) && (a = this.V.indexOf(c), 0 > a && (c = k, b = i));
  this.a().$b = c;
  L(this, "SelectedItem");
  this.a().selectedIndex = a;
  L(this, "SelectedIndex");
  this.zc.Oc(a);
  this.Cd(this.Re());
  b && d("setSelectedItem: Item was not found. Is the item in the list of items of the control?");
  Hl(this, i)
};
N.prototype.setSelectedItem = N.prototype.Ba;
function Hl(a, b) {
  var c = a.a().$b;
  c != k && (c = c.b()) && (b ? D(c, "etk-dropdownlistitem-selected") : E(c, "etk-dropdownlistitem-selected"))
}
N.prototype.hE = q("cm");
N.prototype.getMenuHeight = N.prototype.hE;
N.prototype.lA = function(a) {
  this.cm = a;
  this.Jh()
};
N.prototype.setMenuHeight = N.prototype.lA;
s = N.prototype;
s.rE = function() {
  for(var a = this.V.Da(), b = 0, c = 0;c < a;c++) {
    this.V.getItem(c).ob() && b++
  }
  return b
};
s.ry = function() {
  var a = this.rE(), b = 0, b = 0 === this.cm ? this.AB : Math.min(Math.max(this.cm, this.IB), this.FB);
  a <= b ? (b = a, this.Kp = "hidden") : (this.Kp = "auto", a === b + 1 && (b = a - 2));
  return b * this.Ip
};
s.Jh = function() {
  if(this.cd) {
    var a = this.ry();
    dd(this.cd, {height:a + "px", "overflow-y":this.Kp, "overflow-x":"hidden"})
  }
};
s.AC = function() {
  if(!this.Wu) {
    var a = this.zc.Uf();
    a || this.zc.Ac(i);
    0 < qf(this.zc.oa()) ? (this.Ip = Ad(rf(this.zc.oa(), 0).b()).height, this.Wu = i) : this.Ip = this.lt;
    a || this.zc.Ac(m);
    this.Jh()
  }
};
s.jg = function(a) {
  this.V.add(a)
};
N.prototype.addItem = N.prototype.jg;
N.prototype.Tb = q("V");
N.prototype.getItems = N.prototype.Tb;
N.prototype.sL = q("ao");
N.prototype.getSelectedIndexChangedEvent = N.prototype.sL;
N.prototype.tL = q("bo");
N.prototype.getSelectedItemChangedEvent = N.prototype.tL;
N.prototype.R = function(a) {
  this.a().isEnabled = a;
  this.zc.Oa(a)
};
N.prototype.setIsEnabled = N.prototype.R;
N.prototype.Y = function(a) {
  N.e.Y.call(this, a);
  this.a().w = a;
  this.zc.F(a)
};
N.prototype.setIsVisible = N.prototype.Y;
N.prototype.na = function() {
  return this.zc.na()
};
N.prototype.ei = r(i);
N.prototype.Pa = function(a) {
  var b = this.a().error;
  this.Ni(a);
  this.a().error = a;
  "" != a && a != k ? (this.a().Hb = 16, new Ee("change"), L(this, "Error")) : b != a && 16 == this.a().Hb && this.bc(Ni)
};
N.prototype.setError = N.prototype.Pa;
s = N.prototype;
s.Ni = function(a) {
  this.b();
  try {
    (this.jc == k && (this.jc = this.u().m("span", "tr-dropdown-erroricon")), a && "" != a) ? (D(this.b(), "tr-dropdown-error"), this.Uh || (this.b().appendChild(this.jc), this.Uh = i), this.u().Ns(this.jc, {title:"Sample"})) : (E(this.b(), "tr-dropdown-error"), this.Uh && (this.b().removeChild(this.jc), this.Uh = m))
  }catch(b) {
    alert(b + "\n...in tr.ui.Dropdown.prototype.addErrorStyle(" + a + " )")
  }
};
s.Vh = function() {
  return this.zc.b()
};
s.KG = function(a) {
  a.Vd.i(this.KE, this);
  a.up().i(this.jw, this);
  a.Ay().i(this.VW, this)
};
s.KE = function(a) {
  var b = new Ee("itemhighlighted", this);
  this.Vd.v(a.Ga, b)
};
s.jw = function(a) {
  a = a.Ga;
  a != k && (a = a.wa(), a != k && a.length > this.Ze.length && (this.Ze = a, this.qq()))
};
s.VW = function() {
  this.Jh()
};
s.Vd = k;
s.mn = q("Vd");
N.prototype.getItemHighlightedEvent = N.prototype.mn;
N.prototype.Re = function() {
  return this.a().xc
};
N.prototype.getPlaceholderText = N.prototype.Re;
N.prototype.Cd = function(a) {
  this.a().xc = a;
  L(this, "PlaceholderText");
  (0 > this.Kd() || this.Ea() == k) && this.zc.Nc(a)
};
N.prototype.setPlaceholderText = N.prototype.Cd;
N.prototype.Il = function() {
  return this.a().sl
};
N.prototype.getControlWidth = N.prototype.Il;
N.prototype.Iv = function(a) {
  this.a().sl = a;
  this.Bh.innerText = "";
  1 == this.Il() ? (this.b().style.setProperty("width", ""), this.Bh.innerText = this.Ze) : 2 == this.Il() ? this.b().style.setProperty("width", "100%") : this.b().style.setProperty("width", "")
};
N.prototype.setControlWidth = N.prototype.Iv;
s = N.prototype;
s.ND = function() {
  var a = this.V.za.slice(0).sort(function(a, c) {
    return c.wa().length - a.wa().length
  });
  0 < a.length && (this.Ze = a[0].wa());
  this.qq()
};
s.oG = function(a) {
  this.Ze.length < a.wa().length && (this.Ze = a.wa(), this.qq())
};
s.Bh = k;
s.Ze = "NA";
s.qq = function() {
  1 == this.Il() && (this.Bh.innerText = this.Ze)
};
s.bc = function(a) {
  N.e.bc.call(this, a)
};
function Il(a) {
  ij.call(this, a);
  a.hasOwnProperty("isEnabled") && (this.isEnabled = a.isEnabled);
  a.hasOwnProperty("isSelected") && (this.uc = a.isSelected);
  a.hasOwnProperty("itemID") && (this.Vf = a.itemID);
  a.hasOwnProperty("text") && (this.text = a.text)
}
C(Il, ij);
Il.prototype.isEnabled = i;
Il.prototype.uc = m;
Il.prototype.Vf = "";
Il.prototype.text = "";
var Jl = new il("tr-combobox-item");
function Kl(a, b, c, e, f) {
  K.call(this, a, b, c, z(e) ? e : Jl, f);
  this.Nb = new Hg(this.a().text, k, k, Jl);
  rg(this.Nb, 2);
  this.Vd = new Ll(this, "ItemHighlighted", m, m, i)
}
C(Kl, jl);
B("tr.ui.ComboBoxItem", Kl);
ag(Kl, Uj);
H.g().z("ComboBoxItem", Kl);
s = Kl.prototype;
s.M = Il.prototype;
s.Nb = k;
s.a = function() {
  return Kl.e.a.call(this)
};
s.l = function(a) {
  Kl.e.l.call(this, a)
};
s.k = function() {
  Kl.e.k.call(this)
};
s.n = function() {
  Kl.e.n.call(this)
};
s.qj = function() {
  var a = this.a();
  this.zi(a.name);
  this.Y(a.w);
  this.Vb(a.gg);
  this.rA(a.text);
  this.R(a.isEnabled);
  $j(this);
  this.Nb.addEventListener("highlight", A(this.nG, this))
};
s.b = function() {
  return this.Nb.b()
};
s.wa = function() {
  return this.a().text
};
Kl.prototype.getText = Kl.prototype.wa;
Kl.prototype.rA = function(a) {
  this.a().text = a;
  this.Nb.Od(a)
};
Kl.prototype.setText = Kl.prototype.ra;
Kl.prototype.ko = function(a) {
  this.Nb.F(a);
  this.Nb.RK = !a
};
Kl.prototype.nH = function(a) {
  this.Nb.Oa(a)
};
Kl.prototype.um = function(a) {
  this.Ib && this.Ib.ri && (a ? this.Ib.ri.Ba(this) : this.Ib.ri.Ba(k))
};
Kl.prototype.setIsSelected = Kl.prototype.um;
Kl.prototype.Vd = k;
Kl.prototype.mn = q("Vd");
Kl.prototype.getItemHighlightedEvent = Kl.prototype.mn;
Kl.prototype.nG = function() {
  this.Vd.v(this, new Ee("itemhighlighted", this))
};
function Ml(a) {
  Wk.call(this, a)
}
C(Ml, Zk);
function Nl(a, b, c, e) {
  gh.call(this, a, e);
  this.X = b;
  this.Ga = c
}
C(Nl, gh);
Nl.prototype.type = "etk_ComboBoxItem_changed";
Nl.prototype.X = k;
Nl.prototype.Jc = q("X");
Nl.prototype.getPrevious = Nl.prototype.Jc;
Nl.prototype.Ga = k;
Nl.prototype.qc = q("Ga");
Nl.prototype.getCurrent = Nl.prototype.qc;
function Ll(a, b, c, e, f) {
  I.call(this, a, w(b) ? b : "Changed", c, e, f)
}
C(Ll, I);
Ll.prototype.X = k;
Ll.prototype.i = function(a, b) {
  G(this.B, "etk_ComboBoxItem_changed", a, g, b)
};
Ll.prototype.listen = Ll.prototype.i;
Ll.prototype.H = function(a, b) {
  Ve(this.B, "etk_ComboBoxItem_changed", a, g, b)
};
Ll.prototype.unlisten = Ll.prototype.H;
Ll.prototype.la = function() {
  Ze(this.B, "etk_ComboBoxItem_changed")
};
Ll.prototype.unlistenAll = Ll.prototype.la;
Ll.prototype.v = function(a, b) {
  var c = new Nl(b, this.X, a, this.aa);
  this.X = a;
  Ah(this) && (this.B.dispatchEvent(c), this.md == i && (c = "", w(a) && (c = a.P()), wh.g().Nd(this.aa.P(), this.Fc, c, this.Kc)))
};
function Ol(a) {
  pl.call(this, a);
  a.hasOwnProperty("error") && (this.error = a.error);
  a.hasOwnProperty("isBusy") && (this.rf = a.isBusy);
  a.hasOwnProperty("isRetrievalError") && (this.sf = a.isRetrievalError);
  if(a.hasOwnProperty("items")) {
    this.T = [];
    for(var b = a.items, c = 0;c < b.length;c++) {
      this.T.push(new Il(b[c]))
    }
  }
  a.hasOwnProperty("matchingFunction") && (this.mz = a.matchingFunction);
  a.hasOwnProperty("menuHeight") && (this.sz = a.menuHeight);
  a.hasOwnProperty("placeholderText") && (this.xc = a.placeholderText);
  a.hasOwnProperty("renderMenuAsSibling") && (this.Cj = a.renderMenuAsSibling);
  a.hasOwnProperty("selectedIndex") && (this.selectedIndex = a.selectedIndex);
  a.hasOwnProperty("selectedItem") && (this.$b = a.selectedItem);
  a.hasOwnProperty("showClosestMatches") && (this.Wv = a.showClosestMatches);
  a.hasOwnProperty("text") && (this.text = a.text);
  a.hasOwnProperty("textAlign") && (this.textAlign = a.textAlign);
  a.hasOwnProperty("textOverflow") && (this.ya = a.textOverflow)
}
C(Ol, pl);
s = Ol.prototype;
s.error = "";
s.rf = m;
s.sf = m;
s.T = [];
s.mz = 0;
s.sz = 0;
s.xc = "";
s.Cj = i;
s.selectedIndex = -1;
s.$b = k;
s.Wv = m;
s.text = "";
s.textAlign = 0;
s.ya = 0;
function Pl(a, b) {
  mf.call(this, b);
  this.fc = a || ""
}
C(Pl, mf);
Pl.prototype.ck = k;
var Ql = "placeholder" in document.createElement("input");
s = Pl.prototype;
s.qk = m;
s.m = function() {
  this.s = this.u().m("input", {type:"text"})
};
s.l = function(a) {
  Pl.e.l.call(this, a);
  this.fc || (this.fc = a.getAttribute("label") || "");
  Xc(pc(a)) == a && (this.qk = i, E(this.b(), this.mt));
  Ql ? this.b().placeholder = this.fc : xf(this.b(), "label", this.fc)
};
s.k = function() {
  Pl.e.k.call(this);
  this.pC();
  Rl(this);
  this.b().ab = this
};
s.nb = function() {
  Pl.e.nb.call(this);
  this.Nx();
  this.b().ab = k
};
s.pC = function() {
  var a = new ff(this);
  a.i(this.b(), "focus", this.vu);
  a.i(this.b(), "blur", this.tE);
  if(Ql) {
    this.hd = a
  }else {
    Pb && a.i(this.b(), ["keypress", "keydown", "keyup"], this.WS);
    var b = pc(this.b());
    a.i(zc(b), "load", this.pT);
    this.hd = a;
    Sl(this)
  }
};
function Sl(a) {
  !a.uR && a.hd && a.b().form && (a.hd.i(a.b().form, "submit", a.XS), a.uR = i)
}
s.Nx = function() {
  this.hd && (this.hd.ba(), this.hd = k)
};
s.n = function() {
  Pl.e.n.call(this);
  this.Nx()
};
s.mt = "label-input-label";
s.vu = function() {
  this.qk = i;
  E(this.b(), this.mt);
  if(!Ql && !Tl(this) && !this.UE) {
    var a = this, b = function() {
      a.b().value = ""
    };
    Ob ? Vf(b, 10) : b()
  }
};
s.tE = function() {
  Ql || (this.hd.H(this.b(), "click", this.vu), this.ck = k);
  this.qk = m;
  Rl(this)
};
s.WS = function(a) {
  27 == a.keyCode && ("keydown" == a.type ? this.ck = this.b().value : "keypress" == a.type ? this.b().value = this.ck : "keyup" == a.type && (this.ck = k), a.preventDefault())
};
s.XS = function() {
  Tl(this) || (this.b().value = "", Vf(this.PS, 10, this))
};
s.PS = function() {
  Tl(this) || (this.b().value = this.fc)
};
s.pT = function() {
  Rl(this)
};
s.hasFocus = q("qk");
function Tl(a) {
  return!!a.b() && "" != a.b().value && a.b().value != a.fc
}
s.clear = function() {
  this.b().value = "";
  this.ck != k && (this.ck = "")
};
s.reset = function() {
  Tl(this) && (this.clear(), Rl(this))
};
s.ka = function(a) {
  this.ck != k && (this.ck = a);
  this.b().value = a;
  Rl(this)
};
s.I = function() {
  return this.ck != k ? this.ck : Tl(this) ? this.b().value : ""
};
s.Nv = function(a) {
  Ql ? (this.fc = a, this.b() && (this.b().placeholder = this.fc)) : (this.b() && !Tl(this) && (this.b().value = ""), this.fc = a, this.WN(), this.b() && xf(this.b(), "label", this.fc))
};
function Rl(a) {
  Ql ? a.b().placeholder != a.fc && (a.b().placeholder = a.fc) : (Sl(a), xf(a.b(), "label", a.fc));
  Tl(a) ? E(a.b(), a.mt) : (!a.UE && !a.qk && D(a.b(), a.mt), Ql || Vf(a.WN, 10, a))
}
s.Oa = function(a) {
  this.b().disabled = !a;
  F(this.b(), this.mt + "-disabled", !a)
};
s.isEnabled = function() {
  return!this.b().disabled
};
s.sR = function() {
  this.UE = m
};
s.WN = function() {
  this.b() && !Tl(this) && !this.qk && (this.b().value = this.fc)
};
function Ul(a, b, c) {
  Ee.call(this, a, b);
  this.item = c
}
C(Ul, Ee);
function Vl(a) {
  this.s = a;
  this.VL = Ob || Qb && !dc("531") && "TEXTAREA" == a.tagName;
  this.hd = new ff(this);
  this.hd.i(this.s, this.VL ? ["keydown", "paste", "cut", "drop"] : "input", this)
}
C(Vl, lf);
Vl.prototype.Qa = k;
Vl.prototype.handleEvent = function(a) {
  if(this.VL) {
    var b;
    if(!(b = "keydown" != a.type)) {
      a: {
        if(a.altKey && !a.ctrlKey || a.metaKey || 112 <= a.keyCode && 123 >= a.keyCode) {
          b = m
        }else {
          switch(a.keyCode) {
            case 18:
            ;
            case 20:
            ;
            case 93:
            ;
            case 17:
            ;
            case 40:
            ;
            case 35:
            ;
            case 27:
            ;
            case 36:
            ;
            case 45:
            ;
            case 37:
            ;
            case 224:
            ;
            case 91:
            ;
            case 144:
            ;
            case 12:
            ;
            case 34:
            ;
            case 33:
            ;
            case 19:
            ;
            case 255:
            ;
            case 44:
            ;
            case 39:
            ;
            case 145:
            ;
            case 16:
            ;
            case 38:
            ;
            case 224:
            ;
            case 92:
              b = m;
              break a;
            default:
              b = 166 > a.keyCode || 183 < a.keyCode
          }
        }
      }
    }
    if(b) {
      var c = "keydown" == a.type ? this.s.value : k;
      Ob && 229 == a.keyCode && (c = k);
      var e = Wl(a);
      Xl(this);
      this.Qa = Vf(function() {
        this.Qa = k;
        this.s.value != c && Yl(this, e)
      }, 0, this)
    }
  }else {
    (!Nb || this.s == pc(this.s).activeElement) && Yl(this, Wl(a))
  }
};
function Xl(a) {
  a.Qa != k && (Wf(a.Qa), a.Qa = k)
}
function Wl(a) {
  a = new Ke(a.Rd);
  a.type = "input";
  return a
}
function Yl(a, b) {
  try {
    a.dispatchEvent(b)
  }finally {
    b.ba()
  }
}
Vl.prototype.n = function() {
  Vl.e.n.call(this);
  this.hd.ba();
  Xl(this);
  delete this.s
};
function Zl(a, b) {
  mf.call(this, a);
  this.ab = new Pl;
  this.Sb = i;
  var c = this.C = b || new Ug(this.u());
  c.F(m);
  c.jq(m);
  c.hJ = i
}
C(Zl, mf);
s = Zl.prototype;
s.gb = re("goog.ui.ComboBox");
s.wk = k;
s.In = k;
s.ab = k;
s.C = k;
s.Pg = -1;
s.Ud = k;
s.Kn = wa;
s.Sa = k;
s.Pt = "";
s.JD = "";
s.$c = k;
s.nP = m;
s.m = function() {
  this.Ud = this.u().m("input", {name:this.JD, autocomplete:"off"});
  this.Sa = this.u().m("span", "goog-combobox-button");
  this.s = this.u().m("span", "goog-combobox", this.Ud, this.Sa);
  this.nP && (this.Sa.innerHTML = "&#x25BC;", Fd(this.Sa, i));
  this.Ud.setAttribute("label", this.Pt);
  this.ab.Ka(this.Ud);
  this.C.ef(m);
  this.C.Ra || this.Ca(this.C, i)
};
s.Oa = function(a) {
  this.Sb = a;
  this.ab.Oa(a);
  F(this.b(), "goog-combobox-disabled", !a)
};
s.k = function() {
  Zl.e.k.call(this);
  var a = this.ma();
  a.i(this.b(), "mousedown", this.$T);
  a.i(Yc(this.u()), "mousedown", this.hG);
  a.i(this.Ud, "blur", this.lU);
  this.vc = new eg(this.Ud);
  a.i(this.vc, "key", this.Ld);
  this.wk = new Vl(this.Ud);
  a.i(this.wk, "input", this.nU);
  a.i(this.C, "action", this.uU)
};
s.nb = function() {
  this.vc.ba();
  delete this.vc;
  this.wk.ba();
  this.wk = k;
  Zl.e.nb.call(this)
};
s.rb = r(m);
s.n = function() {
  Zl.e.n.call(this);
  this.qx();
  this.ab.ba();
  this.C.ba();
  this.Sa = this.Ud = this.C = this.ab = k
};
s.Mf = function() {
  this.qx();
  this.IE();
  Lg(this.C, -1)
};
s.jg = function(a) {
  this.C.Ca(a, i);
  this.Pg = -1
};
s.Qg = function(a, b) {
  this.C.Df(a, b, i);
  this.Pg = -1
};
s.removeItem = function(a) {
  if(a = this.C.removeChild(a, i)) {
    a.ba(), this.Pg = -1
  }
};
s.Bj = function(a) {
  if(a = vf(this.C, a, i)) {
    a.ba(), this.Pg = -1
  }
};
s.Hc = function(a) {
  return rf(this.C, a)
};
s.ij = function() {
  return qf(this.C)
};
s.oa = q("C");
s.iL = q("Ud");
s.iO = function(a) {
  this.Pt = a;
  this.ab && this.ab.Nv(this.Pt)
};
s.ka = function(a) {
  this.gb.info("setValue() - " + a);
  this.ab.I() != a && (this.ab.ka(a), $l(this))
};
s.I = function() {
  return this.ab.I()
};
function am(a, b) {
  var c = a.C.w(), e;
  if(-1 == a.Pg) {
    for(var f = e = 0, h = qf(a.C);f < h;f++) {
      var j = rf(a.C, f);
      !(j instanceof Bg) && j.w() && e++
    }
    a.Pg = e
  }
  a.gb.info("getNumberOfVisibleItems() - " + a.Pg);
  e = a.Pg;
  c && 0 == e ? (ne(a.gb, "no matching items, hiding"), a.IE()) : !c && 0 < e && (b && (ne(a.gb, "showing menu"), a.pH(""), bm(a, za(a.ab.I().toLowerCase()))), Vf(a.qx, 1, a), a.EO());
  a.mv()
}
s.mv = function() {
  this.C && this.C.w() && (new Pf(this.b(), 5, i)).Jb(this.C.b(), 4)
};
s.EO = function() {
  this.C.F(i);
  D(this.b(), "goog-combobox-active")
};
s.IE = function() {
  this.C.F(m);
  E(this.b(), "goog-combobox-active")
};
s.qx = function() {
  this.$c && (Wf(this.$c), this.$c = k)
};
s.$T = function(a) {
  if(this.Sb && (a.target == this.b() || a.target == this.Ud || Oc(this.Sa, a.target))) {
    this.C.w() ? (ne(this.gb, "Menu is visible, dismissing"), this.Mf()) : (ne(this.gb, "Opening dropdown"), am(this, i), Nb && this.Ud.focus(), this.Ud.select(), this.C.ji = i, a.preventDefault())
  }
  a.stopPropagation()
};
s.hG = function(a) {
  Oc(this.C.b(), a.target) || (this.gb.info("onDocClicked_() - dismissing immediately"), this.Mf())
};
s.uU = function(a) {
  this.gb.info("onMenuSelected_()");
  var b = a.target;
  this.dispatchEvent(new Ul("action", this, b)) && (b = b.pc(), ne(this.gb, "Menu selection: " + b + ". Dismissing menu"), this.ab.I() != b && (this.ab.ka(b), this.dispatchEvent("change")), this.Mf());
  a.stopPropagation()
};
s.lU = function() {
  this.gb.info("onInputBlur_() - delayed dismiss");
  this.qx();
  this.$c = Vf(this.Mf, 250, this)
};
s.Ld = function(a) {
  var b = this.C.w();
  if(b && this.C.Ld(a)) {
    return i
  }
  var c = m;
  switch(a.keyCode) {
    case 27:
      b && (ne(this.gb, "Dismiss on Esc: " + this.ab.I()), this.Mf(), c = i);
      break;
    case 9:
      if(b && (b = Mg(this.C))) {
        ne(this.gb, "Select on Tab: " + this.ab.I()), b.si(a), c = i
      }
      break;
    case 38:
    ;
    case 40:
      b || (ne(this.gb, "Up/Down - maybe show menu"), am(this, i), c = i)
  }
  c && a.preventDefault();
  return c
};
s.nU = function() {
  ne(this.gb, "Key is modifying: " + this.ab.I());
  $l(this)
};
function $l(a) {
  var b = za(a.ab.I().toLowerCase());
  a.pH(b);
  Xc(Yc(a.u())) == a.Ud && am(a, m);
  var c = Mg(a.C);
  ("" == b || !c || !c.w()) && bm(a, b);
  a.In = b;
  a.dispatchEvent("change")
}
s.pH = function(a) {
  this.gb.info("setItemVisibilityFromToken_() - " + a);
  for(var b = m, c = 0, e = !this.Kn(a, this.In), f = 0, h = qf(this.C);f < h;f++) {
    var j = rf(this.C, f);
    if(j instanceof Bg) {
      j.F(b), b = m
    }else {
      if(j instanceof Hg) {
        if(!j.w() && !e) {
          continue
        }
        var l = j.pc(), l = "function" == typeof j.vM && j.tF || l && this.Kn(l.toLowerCase(), a);
        "function" == typeof j.lq && j.lq(a);
        j.F(!!l);
        b = l || b
      }else {
        b = j.w() || b
      }
    }
    !(j instanceof Bg) && j.w() && c++
  }
  this.Pg = c
};
function bm(a, b) {
  a.gb.info("setItemHighlightFromToken_() - " + b);
  if("" != b) {
    for(var c = 0, e = qf(a.C);c < e;c++) {
      var f = rf(a.C, c), h = f.pc();
      if(h && a.Kn(h.toLowerCase(), b)) {
        Lg(a.C, c);
        f.lq && f.lq(b);
        return
      }
    }
  }
  Lg(a.C, -1)
}
function cm(a, b, c, e) {
  Hg.call(this, a, b, c, e)
}
C(cm, Hg);
cg("goog-combobox-item", function() {
  return new cm(k)
});
cm.prototype.tF = m;
cm.prototype.vM = q("tF");
cm.prototype.lq = function(a) {
  if(this.isEnabled()) {
    var b = this.pc(), c = b.toLowerCase().indexOf(a);
    if(0 <= c) {
      var e = this.u();
      this.Nc([e.createTextNode(b.substr(0, c)), e.m("b", k, b.substr(c, a.length)), e.createTextNode(b.substr(c + a.length))])
    }
  }
};
var dm = new gl("");
function O(a, b, c, e, f) {
  K.call(this, a, b, c, z(e) ? e : dm, f);
  this.gc(i);
  this.V = new Ml(this);
  this.V.ri = this;
  this.Za = new Zl(this.u());
  this.Za.nP = i;
  em(this.Za);
  fm(this.Za, this.kj());
  this.kj() || gm(this.Za.oa());
  hm(this.Za, this);
  this.Jp = new Ug(this.u());
  this.Jp.F(m);
  this.ao = new El(this, "SelectedIndexChanged", c, bk(b, "SelectedIndexChanged"));
  this.YH = new Dh(this, "TextChanged", c, bk(b, "TextChanged"));
  this.jG = new Dh(this, "OnErrorChanged", c, bk(b, "OnErrorChanged"));
  this.bo = new Ll(this, "SelectedItemChanged", c, bk(b, "SelectedItemChanged"));
  this.Vd = new Ll(this, "ItemHighlighted", m, m, i);
  im(this.Za)
}
C(O, rl);
B("tr.ui.ComboBox", O);
ag(O, Uj);
H.g().z("ComboBox", O);
s = O.prototype;
s.M = Ol.prototype;
s.Za = k;
s.ao = k;
s.bo = k;
s.YH = k;
s.jG = k;
s.cF = m;
s.V = k;
s.Jp = k;
s.Pg = 0;
s.cd = k;
s.Kp = "";
s.cm = 0;
s.AB = 10;
s.IB = 5;
s.FB = 15;
s.lt = 32;
s.Wu = m;
s.Ip = O.prototype.lt;
s.a = function() {
  return O.e.a.call(this)
};
s.rb = r(i);
s.m = function() {
  this.Xb("ComboBox", "div", "")
};
s.l = function(a) {
  O.e.l.call(this, a);
  this.Za.m();
  a = this.Za.b();
  this.b().appendChild(a);
  F(a, "tr-combobox", i);
  F(a.children[1], "tr-combobox-button", i);
  a = new Hg("No matches found", Jl);
  a.Oa(m);
  ng(a, "tr-combobox-item");
  ng(a, "tr-combobox-item-disabled");
  this.Jp.Ca(a, i);
  var b = document.createElement("div");
  this.b().firstChild.appendChild(b);
  this.Jp.Na(b);
  this.Jp.F(m);
  a.b().setAttribute("aria-disabled", "true");
  a.b().firstChild.setAttribute("class", "tr-combobox-item-content tr-combobox-item-disabled");
  a = this.a();
  for(b = 0;b < a.T.length;b++) {
    var c = a.T[b], e = new Kl(c, {}, i);
    this.V.add(e);
    c.uc && this.Ba(e)
  }
  this.cd = this.Za.oa().b();
  D(this.cd, "etk-combo-menu");
  this.Za.Oa(i);
  this.Oa(a.isEnabled);
  this.Ea() == k && (0 <= a.selectedIndex && this.Oc(a.selectedIndex), "" != a.text && this.ra(a.text));
  this.ff(a.rf);
  this.xi(a.sf);
  this.od(a.Qd);
  this.R(a.isEnabled);
  this.Y(a.w);
  this.Oc(a.selectedIndex);
  this.Ua(a.textAlign);
  this.Va(a.ya);
  this.Pa(a.error);
  this.oO(a.mz);
  this.rO(a.Wv)
};
s.k = function() {
  O.e.k.call(this);
  this.Za.k();
  this.Cd(this.Re());
  var a = this.ma();
  a.i(this.Za, "change", this.YT);
  var b = this.Za.b();
  a.i(b, "mouseover", this.bU);
  a.i(b, "mouseout", this.aU);
  a.i(Yc(this.u()), "mousedown", this.eG);
  a.i(b.firstChild, "blur", this.eG);
  a.i(b, "leave", this.eG);
  G(this.Za.oa(), "aftershow", A(this.rG, this));
  G(this.Za.oa(), "hide", A(this.gv, this));
  G(this.Za.iL(), "keydown", A(this.AV, this))
};
s.AV = function(a) {
  var b = m;
  this.Za.oa().w() && this.Ur && (38 == a.keyCode ? (this.Ur.b().scrollIntoView(i), b = i) : 40 == a.keyCode && (this.Ur.b().scrollIntoView(m), b = i));
  b && (a.stopPropagation(), a.preventDefault());
  return b
};
s.n = function() {
  O.e.n.call(this)
};
s.kn = r(m);
s.kj = function() {
  return this.a().Cj
};
s.Qv = function(a) {
  this.a().Cj = a
};
s.sL = q("ao");
s.tL = q("bo");
s.up = q("YH");
function jm(a, b) {
  for(var c = 0;c < a.V.Da();c++) {
    var e = a.V.getItem(c);
    if(e.ob() && e.Z() && e.wa().toLowerCase() == b.toLowerCase()) {
      return a.a().selectedIndex = c, L(a, "SelectedIndex"), a.a().$b = e, L(a, "SelectedItem"), i
    }
  }
  return m
}
s.YT = function(a) {
  var b = this;
  Bh(function() {
    if(!b.cF) {
      var c = b.Za.I();
      b.a().text = c;
      L(b, "Text");
      c = jm(b, c);
      !c && -1 != b.Kd() && (b.a().selectedIndex = -1, L(b, "SelectedIndex"), b.a().$b = k, L(b, "SelectedItem"), b.ao.v(-1, a), b.bo.v(k, a));
      b.Jp.F(0 == b.Pg);
      c && (b.ao.v(b.Kd(), a), b.bo.v(b.Ea(), a), b.Vd.v(b.Ea(), a));
      b.YH.v(b.Za.I(), a)
    }
  })
};
s.bU = function(a) {
  this.isEnabled() && D(this.b(), "tr-combobox-hover");
  a.stopPropagation()
};
s.aU = function(a) {
  E(this.b(), "tr-combobox-hover");
  a.stopPropagation()
};
s.eG = function() {
  this.Jp.F(m)
};
function fm(a, b) {
  a.EO = function() {
    this.C.F(i);
    b || wd(this.oa().b(), yd(this.b()).width);
    D(this.b(), "tr-combobox-active");
    E(this.b(), "tr-combobox-hover")
  }
}
function em(a) {
  a.IE = function() {
    this.C.F(m);
    E(this.b(), "tr-combobox-active")
  }
}
function gm(a) {
  a.ZF = a.bq;
  a.bq = function() {
    this.ZF()
  }
}
Hg.prototype.lq = function(a) {
  if(this.isEnabled() && this.w()) {
    var b = this.pc(), c = b.toLowerCase().indexOf(a);
    if(0 <= c) {
      var e = this.u();
      this.Nc([e.createTextNode(b.substr(0, c)), e.m("b", k, b.substr(c, a.length)), e.createTextNode(b.substr(c + a.length))])
    }
  }else {
    e = this.u(), this.Nc([e.createTextNode(this.pc())])
  }
};
function hm(a, b) {
  a.DF = "";
  a.eP = b;
  a.pH = function(a) {
    var b = m, f = 0;
    if(this.eP.a().Wv) {
      for(var h = 0, j = 0, l = qf(this.C);j < l;j++) {
        var n = rf(this.C, j);
        if(n instanceof Hg) {
          var o = n.pc();
          (o = o && !n.RK && this.Kn(o.toLowerCase(), a)) && h++
        }
      }
      0 == h && "" != this.DF && (a = this.DF)
    }
    this.Kn(a, this.In);
    j = 0;
    for(l = qf(this.C);j < l;j++) {
      n = rf(this.C, j), n instanceof Bg ? (n.F(b), b = m) : n instanceof Hg ? (o = n.pc(), o = "function" == typeof n.vM && n.tF || o && !n.RK && this.Kn(o.toLowerCase(), a), n.F(!!o), "function" == typeof n.lq && n.lq(a), b = o || b) : b = n.w() || b, !(n instanceof Bg) && n.w() && f++
    }
    this.Pg = f;
    this.eP.Pg = f;
    0 < this.Pg && (this.DF = a)
  }
}
O.prototype.jg = function(a) {
  this.V.add(a)
};
O.prototype.addItem = O.prototype.jg;
O.prototype.Tb = q("V");
O.prototype.getItems = O.prototype.Tb;
O.prototype.wa = function() {
  return this.Za.I()
};
O.prototype.getText = O.prototype.wa;
O.prototype.ra = function(a) {
  this.a().text = a;
  L(this, "Text");
  if(this.Za.I() != a) {
    this.cF = i;
    try {
      this.Za.ka(a), jm(this, a) || (this.a().selectedIndex = -1, L(this, "SelectedIndex"), this.a().$b = k, L(this, "SelectedItem"))
    }finally {
      this.cF = m
    }
  }
};
O.prototype.setText = O.prototype.ra;
O.prototype.Kd = function() {
  var a = this.V.indexOf(this.Ea());
  return this.a().selectedIndex = a
};
O.prototype.getSelectedIndex = O.prototype.Kd;
O.prototype.Oc = function(a) {
  -1 < a ? (a >= this.Tb().Da() && d(Error("ComboBox:setSelectedIndex - index greater than number of items")), this.ra(this.Tb().getItem(a).wa())) : (this.a().selectedIndex = a, L(this, "SelectedIndex"), this.a().$b = k, L(this, "SelectedItem"), this.ra(""))
};
O.prototype.setSelectedIndex = O.prototype.Oc;
O.prototype.Ea = function() {
  return this.a().$b
};
O.prototype.getSelectedItem = O.prototype.Ea;
O.prototype.Ba = function(a) {
  var b = a;
  "string" == typeof a && (b = H.g().Ia(a));
  a = -1;
  w(b) && (a = this.V.indexOf(b), 0 > a && d("setSelectedItem: Item was not found. Is the item in the list of items of the control?"));
  this.a().$b = b;
  L(this, "SelectedItem");
  this.a().selectedIndex = a;
  L(this, "SelectedIndex");
  b != k ? this.ra(b.wa()) : this.ra("")
};
O.prototype.setSelectedItem = O.prototype.Ba;
O.prototype.Wh = function() {
  return this.a().rf
};
O.prototype.getIsBusy = O.prototype.Wh;
O.prototype.ff = function(a) {
  this.a().rf = a;
  this.hl(a)
};
O.prototype.setIsBusy = O.prototype.ff;
O.prototype.pe = k;
O.prototype.rg = function() {
  this.pe == k && (this.pe = this.u().m("span", "etk-combobox-busyicon"));
  return this.pe
};
O.prototype.hl = function() {
  var a = this.Za.b();
  try {
    this.Wh() ? (D(a, "etk-combobox-busy"), a.insertBefore(this.rg(), a.children[1])) : (E(a, "etk-combobox-busy"), a.removeChild(this.rg()))
  }catch(b) {
  }
};
O.prototype.Yh = function() {
  return this.a().sf
};
O.prototype.getIsRetrievalError = O.prototype.Yh;
O.prototype.xi = function(a) {
  (this.a().sf = a) && this.ff(m);
  this.il(a)
};
O.prototype.setIsRetrievalError = O.prototype.xi;
O.prototype.Jk = k;
O.prototype.tg = function() {
  this.Jk == k && (this.Jk = this.u().m("span", "etk-combobox-retrievalerroricon"));
  return this.Jk
};
O.prototype.il = function() {
  var a = this.Za.b();
  try {
    this.Yh() ? (D(a, "etk-combobox-retrievalerror"), a.insertBefore(this.tg(), a.children[1])) : (E(a, "etk-combobox-retrievalerror"), a.removeChild(this.tg()))
  }catch(b) {
  }
};
O.prototype.hS = function() {
  return this.a().mz
};
O.prototype.getMatchingFunction = O.prototype.hS;
O.prototype.oO = function(a) {
  this.a().mz = a;
  0 == a ? this.Za.Kn = wa : 1 == a ? this.Za.Kn = La : d("Invalid MatchingFunction enum")
};
O.prototype.setMatchingFunction = O.prototype.oO;
O.prototype.wS = function() {
  return this.a().Wv
};
O.prototype.getShowClosestMatches = O.prototype.wS;
O.prototype.rO = function(a) {
  this.a().Wv = a;
  this.b()
};
O.prototype.setShowClosestMatches = O.prototype.rO;
O.prototype.Yb = function() {
  return this.a().ya
};
O.prototype.getTextOverflow = O.prototype.Yb;
O.prototype.Va = function(a) {
  this.a().ya = a;
  var b = this.Za.b().children[0];
  w(b) && (0 === a ? (dd(b, "text-overflow", ""), dd(b, "overflow", ""), dd(b, "white-space", "")) : (dd(b, "text-overflow", km.g()[a]), dd(b, "overflow", "hidden"), dd(b, "white-space", "nowrap")));
  this.b()
};
O.prototype.setTextOverflow = O.prototype.Va;
O.prototype.Mb = function() {
  return this.a().textAlign
};
O.prototype.getTextAlign = O.prototype.Mb;
O.prototype.Ua = function(a) {
  this.a().textAlign = a;
  var b = this.Za.b().children[0];
  w(b) && dd(b, "text-align", lm.g()[a])
};
O.prototype.setTextAlign = O.prototype.Ua;
O.prototype.yd = function() {
  return w(this.a().error) && "" != this.a().error
};
O.prototype.getHasError = O.prototype.yd;
O.prototype.jc = k;
O.prototype.gj = function() {
  this.jc == k && (this.jc = this.u().m("span", "etk-combobox-erroricon"));
  return this.jc
};
O.prototype.Ni = function(a) {
  this.Za.b();
  try {
    w(a) && "" != a ? (D(this.Za.b(), "etk-combobox-error"), this.u().Ns(this.gj(), {title:this.getError()}), this.Za.b().appendChild(this.gj())) : (E(this.Za.b(), "etk-combobox-error"), this.Za.b().removeChild(this.gj()))
  }catch(b) {
  }
};
O.prototype.getError = function() {
  return this.a().error
};
O.prototype.getError = O.prototype.getError;
O.prototype.Pa = function(a) {
  var b = this.a().error;
  this.a().error = a;
  this.Ni(a);
  w(a) && "" !== a ? (b = new Ee("change"), this.jG.v(a, b), this.a().Hb = 16) : b != a && 16 == this.a().Hb && this.bc(Ni)
};
O.prototype.setError = O.prototype.Pa;
O.prototype.lk = q("jG");
O.prototype.Z = function() {
  return this.a().isEnabled
};
O.prototype.getIsEnabled = O.prototype.Z;
O.prototype.R = function(a) {
  this.a().isEnabled = a;
  this.Za.Oa(a);
  F(this.Za.b(), "tr-combobox-disabled", !a)
};
O.prototype.setIsEnabled = O.prototype.R;
s = O.prototype;
s.Xc = m;
s.vr = k;
s.im = function() {
  this.Xc = i;
  this.vr = ak(this)
};
s.hm = function() {
  this.Xc = m;
  this.Jh();
  this.vr()
};
s.ni = function(a, b) {
  this.Za.Qg(a.Nb, b);
  a.qj();
  this.Xc || this.Jh();
  this.KG(a);
  a.a().uc && this.Ba(a)
};
s.zj = function(a, b) {
  b = w(b) ? b : m;
  this.a().selectedIndex == a && this.Ba(k);
  b === m ? this.Za.Bj(a) : vf(this.Za.oa(), a, i);
  this.Xc || this.Jh()
};
s.Vh = function() {
  return this.Za.b()
};
s.cg = function(a) {
  var b = this.Ea();
  bl(this.V, a);
  z(b) && 0 <= this.V.indexOf(b) && this.Ba(b)
};
O.prototype.setInsertItem = O.prototype.cg;
O.prototype.dg = function(a) {
  var b = this.Ea();
  z(b) && 0 <= this.V.indexOf(b) && this.Ba(b);
  al(this.V, a)
};
O.prototype.setRemoveItem = O.prototype.dg;
O.prototype.bg = function() {
  cl(this.V);
  this.Ba(k)
};
O.prototype.setClear = O.prototype.bg;
O.prototype.Mv = function(a) {
  var b = this.Ea();
  $k(this.V, a);
  z(b) && 0 <= this.V.indexOf(b) && this.Ba(b)
};
O.prototype.hE = q("cm");
O.prototype.getMenuHeight = O.prototype.hE;
O.prototype.lA = function(a) {
  this.cm = a;
  this.Jh()
};
O.prototype.setMenuHeight = O.prototype.lA;
s = O.prototype;
s.rE = function() {
  for(var a = this.V.Da(), b = 0, c = 0;c < a;c++) {
    this.V.getItem(c).ob() && b++
  }
  return b
};
s.ry = function() {
  var a = this.rE(), b = 0, b = 0 === this.cm ? this.AB : Math.min(Math.max(this.cm, this.IB), this.FB);
  a <= b ? (b = a, this.Kp = "hidden") : (this.Kp = "auto", a === b + 1 && (b = a - 2));
  return b * this.Ip
};
s.Jh = function() {
  this.cd && (this.ry(), dd(this.cd, {height:this.ry() + "px", "overflow-y":this.Kp, "overflow-x":"hidden"}))
};
s.AC = function() {
  this.Wu || (0 < qf(this.Za.oa()) ? (this.Ip = Ad(rf(this.Za.oa(), 0).b()).height, this.Wu = i) : this.Ip = this.lt, this.Jh())
};
s.rG = function() {
  this.AC();
  this.Ur && this.Ur.b().scrollIntoView(m)
};
s.gv = p();
s.na = function() {
  return this.Za.b().children[0]
};
s.ei = r(i);
s.Ur = k;
s.KG = function(a) {
  a.Vd.i(this.KE, this)
};
s.KE = function(a) {
  var b = new Ee("itemhighlighted", this);
  this.Ur = a.Ga;
  this.Vd.v(a.Ga, b)
};
s.Vd = k;
s.mn = q("Vd");
O.prototype.getItemHighlightedEvent = O.prototype.mn;
O.prototype.Re = function() {
  return this.a().xc
};
O.prototype.getPlaceholderText = O.prototype.Re;
O.prototype.Cd = function(a) {
  this.a().xc = a;
  L(this, "PlaceholderText");
  this.Za.iO(a)
};
O.prototype.setPlaceholderText = O.prototype.Cd;
function im(a) {
  a.iO = function(a) {
    this.Pt = a;
    this.ab && this.ab.Nv(this.Pt)
  };
  a.iL = function() {
    return this.ab.b()
  };
  a.mv = function() {
    if(this.C && this.C.w()) {
      var a = new Pf(this.b(), 5, i), c = new bd(3, 0, 0, 0);
      a.Jb(this.C.b(), 4, c)
    }
  }
}
;function mm(a) {
  this.uu = w(a) ? a : "";
  this.za = []
}
s = mm.prototype;
s.uu = "";
s.hu = q("uu");
s.QJ = k;
s.za = [];
s.Tb = q("za");
function nm() {
  this.Ox = []
}
x(nm);
nm.prototype.Ox = [];
function om(a, b) {
  w(a.Ox[b]) || (a.Ox[b] = new mm(b));
  return a.Ox[b]
}
;function pm(a) {
  lj.call(this, a);
  a.hasOwnProperty("groupName") && (this.uu = a.groupName);
  a.hasOwnProperty("isChecked") && (this.ie = a.isChecked);
  a.hasOwnProperty("text") && (this.text = a.text);
  a.hasOwnProperty("textAlign") && (this.textAlign = a.textAlign);
  a.hasOwnProperty("textOverflow") && (this.ya = a.textOverflow)
}
C(pm, lj);
s = pm.prototype;
s.uu = "";
s.ie = m;
s.text = "";
s.textAlign = 0;
s.ya = 0;
function qm(a, b, c, e) {
  gh.call(this, a, e);
  this.X = b;
  this.Ga = c
}
C(qm, gh);
qm.prototype.type = "etk_Boolean_changed";
qm.prototype.X = m;
qm.prototype.Jc = q("X");
qm.prototype.getPrevious = qm.prototype.Jc;
qm.prototype.Ga = m;
qm.prototype.qc = q("Ga");
qm.prototype.getCurrent = qm.prototype.qc;
function rm(a, b, c, e) {
  I.call(this, a, w(b) ? b : "Changed", c, e)
}
C(rm, I);
rm.prototype.X = m;
rm.prototype.i = function(a, b) {
  G(this.B, "etk_Boolean_changed", a, g, b)
};
rm.prototype.listen = rm.prototype.i;
rm.prototype.H = function(a, b) {
  Ve(this.B, "etk_Boolean_changed", a, g, b)
};
rm.prototype.unlisten = rm.prototype.H;
rm.prototype.la = function() {
  Ze(this.B, "etk_Boolean_changed")
};
rm.prototype.unlistenAll = rm.prototype.la;
rm.prototype.v = function(a, b) {
  var c = new qm(b, this.X, a, this.aa);
  this.X = a;
  Ah(this) && (this.B.dispatchEvent(c), this.md == i && wh.g().fH(this.aa.P(), this.Fc, a, this.Kc))
};
var sm = new gl("etk-radiobutton");
function tm(a, b, c, e, f) {
  K.call(this, a, b, c, z(e) ? e : sm, f);
  a = this.a();
  om(this.EN, this.hu()).Tb().push(this);
  this.Ie = new um(new uj({text:a.text}), k, m);
  this.kF = new rm(this, "IsCheckedChanged", c, bk(b, "IsCheckedChanged"))
}
C(tm, ql);
B("tr.ui.RadioButton", tm);
ag(tm, Uj);
H.g().z("RadioButton", tm);
s = tm.prototype;
s.M = pm.prototype;
s.kF = k;
s.Ie = k;
s.sv = k;
s.EN = nm.g();
s.a = function() {
  return tm.e.a.call(this)
};
s.l = function(a) {
  tm.e.l.call(this, a);
  this.sv = this.qa.createElement("input");
  this.sv.setAttribute("type", "radio");
  this.sv.setAttribute("name", this.hu());
  a.appendChild(this.sv);
  this.Ca(this.Ie, i);
  F(a, "etk-radiobutton", i)
};
s.k = function() {
  tm.e.k.call(this);
  var a = this.a();
  this.ra(a.text);
  this.R(a.isEnabled);
  this.Vb(a.gg);
  this.Y(a.w);
  this.Ua(a.textAlign);
  this.Va(a.ya);
  this.iA(a.ie);
  var a = this.ma(), b = new eg(this.b());
  a.i(b, "key", this.wu);
  a.i(this.b(), "click", A(this.Ae, this))
};
s.n = function() {
  tm.e.n.call(this);
  this.la()
};
s.m = function() {
  this.Xb("RadioButton", "div", "etk-radiobutton")
};
s.wu = function(a) {
  32 == a.keyCode && (new Ee("click", this), this.wi(i, i))
};
s.Ae = function() {
  new Ee("click", this);
  this.wi(i, i)
};
s.eS = q("kF");
tm.prototype.getIsCheckedChangedEvent = tm.prototype.eS;
tm.prototype.wi = function(a, b, c) {
  if(this.Z() === i) {
    var e = this.hn(), f = e.QJ;
    if(f === this && a === i) {
      this.a().ie === m && (this.a().ie = a, L(this, "IsChecked")), this.mH(i)
    }else {
      if(f != k && f != this && a == i && f.wi(m, b, c), this.a().ie !== a && (this.a().ie = a, L(this, "IsChecked"), b && this.kF.v(a, c)), this.mH(a), a === i) {
        e.QJ = this
      }
    }
  }
};
tm.prototype.mH = function(a) {
  this.sv.checked = a;
  this.fa.He(this, 16, a)
};
tm.prototype.setIsCheckedVisually = tm.prototype.mH;
tm.prototype.hn = function() {
  return om(this.EN, this.hu())
};
tm.prototype.getGroup = tm.prototype.hn;
tm.prototype.wa = function() {
  return this.a().text
};
tm.prototype.getText = tm.prototype.wa;
tm.prototype.ra = function(a) {
  this.a().text = a;
  L(this, "Text");
  this.Ie.ra(a)
};
tm.prototype.setText = tm.prototype.ra;
tm.prototype.oy = function() {
  return this.a().ie
};
tm.prototype.getIsChecked = tm.prototype.oy;
tm.prototype.iA = function(a) {
  this.wi(a, m)
};
tm.prototype.setIsChecked = tm.prototype.iA;
tm.prototype.hu = function() {
  return this.a().uu
};
tm.prototype.getGroupName = tm.prototype.hu;
tm.prototype.Mb = function() {
  return this.a().textAlign
};
tm.prototype.getTextAlign = tm.prototype.Mb;
tm.prototype.Ua = function(a) {
  this.a().textAlign = a;
  this.Ie.Ua(a)
};
tm.prototype.setTextAlign = tm.prototype.Ua;
tm.prototype.Yb = function() {
  return this.a().ya
};
tm.prototype.getTextOverflow = tm.prototype.Yb;
tm.prototype.Va = function(a) {
  this.a().ya = a;
  this.Ie.Va(a)
};
tm.prototype.setTextOverflow = tm.prototype.Va;
function vm(a) {
  pl.call(this, a);
  a.hasOwnProperty("error") && (this.error = a.error)
}
C(vm, pl);
function wm(a) {
  vm.call(this, a);
  a.hasOwnProperty("placeholderText") && (this.xc = a.placeholderText);
  a.hasOwnProperty("text") && (this.text = a.text);
  a.hasOwnProperty("textOverflow") && (this.ya = a.textOverflow);
  a.hasOwnProperty("textAlign") && (this.textAlign = a.textAlign);
  a.hasOwnProperty("highlightStyle") && (this.Hb = a.highlightStyle)
}
C(wm, vm);
s = wm.prototype;
s.xc = "";
s.text = "";
s.ya = 1;
s.textAlign = 0;
s.Hb = Ni;
function sl() {
  this[Ni] = "default";
  this[1] = "overridden";
  this[2] = "calculated";
  this[4] = "important";
  this[8] = "solved";
  this[16] = "error";
  this[Oi] = "revert";
  this[64] = "importantinput";
  this[128] = "highlightdisabled"
}
x(sl);
sl.getInstance = sl.g;
B("tr.ui.enums.HighlightStyleEnumToString", sl);
function xm() {
  this[0] = "default";
  this[1] = "dropdowncogmenu"
}
x(xm);
xm.getInstance = xm.g;
B("tr.ui.enums.DropdownStyleEnumToString", xm);
function ym() {
  this[0] = "Seconds";
  this[1] = "Minutes";
  this[2] = "Hours"
}
x(ym);
ym.getInstance = ym.g;
B("tr.ui.enums.RefreshIntervalUnitToString", ym);
function zm() {
  this[0] = "none";
  this[1] = "refresh";
  this[2] = "settings";
  this[3] = "reset";
  this[4] = "search";
  this[5] = "edit";
  this[6] = "link";
  this[7] = "connections";
  this[8] = "toggle"
}
x(zm);
zm.getInstance = zm.g;
B("tr.ui.enums.ImageNameToString", zm);
var Am = new gl("etk-textbox");
function P(a, b, c, e, f) {
  K.call(this, a, b, c, z(e) ? e : Am, f);
  this.gc(i);
  this.ab = new Pl("", f);
  this.xr = new Dh(this, "OnErrorChanged", c, bk(b, "OnErrorChanged"));
  this.Ke = new Dh(this, "Changed", c, bk(b, "Changed"))
}
C(P, rl);
B("tr.ui.TextBox", P);
ag(P, Uj);
H.g().z("TextBox", P);
s = P.prototype;
s.M = wm.prototype;
s.xr = k;
s.Ke = k;
s.ab = k;
s.Fa = function() {
  return this.ab.b()
};
s.a = function() {
  return P.e.a.call(this)
};
s.l = function(a) {
  P.e.l.call(this, a);
  a.setAttribute("tabindex", -1);
  this.Ca(this.ab, i);
  var b = this.a();
  this.ra(b.text);
  this.Cd(b.xc);
  this.R(b.isEnabled);
  this.Y(b.w);
  this.Ua(b.textAlign);
  this.Va(b.ya);
  this.Pa(b.error);
  F(a, "etk-textbox", i)
};
s.m = function() {
  P.e.m.call(this);
  var a = this.qa.createElement("div");
  a.setAttribute("data-etk-type", "TextBox");
  this.l(a)
};
s.k = function() {
  P.e.k.call(this);
  var a = this.ab.b();
  G(a, "click", this.yj, m, this);
  G(a, "mouseover", this.tU, m, this);
  G(a, "mouseout", this.sU, m, this);
  G(a, "change", this.aG, m, this);
  G(a, "keydown", this.rU, i, this)
};
s.n = function() {
  P.e.n.call(this);
  this.la()
};
s.yj = function() {
  this.ab.isEnabled() && D(this.b(), "etk-textbox-active")
};
s.rU = function(a) {
  13 === a.keyCode && this.aG(a)
};
s.aG = function(a) {
  this.a().text != this.ab.I() && (this.a().text = this.ab.I(), L(this, "Text"), this.Ke.v(this.wa(), a))
};
s.$M = function(a) {
  E(this.b(), "etk-textbox-active");
  a.stopPropagation()
};
s.tU = function(a) {
  this.isEnabled() && D(this.b(), "etk-textbox-hover");
  a.stopPropagation()
};
s.sU = function(a) {
  E(this.b(), "etk-textbox-hover");
  a.stopPropagation()
};
s.wa = function() {
  return this.a().text
};
P.prototype.getText = P.prototype.wa;
P.prototype.ra = function(a) {
  this.a().text = a;
  L(this, "Text");
  this.ab.ka(a)
};
P.prototype.setText = P.prototype.ra;
P.prototype.Re = function() {
  return this.a().xc
};
P.prototype.getPlaceholderText = P.prototype.Re;
P.prototype.Cd = function(a) {
  this.a().xc = a;
  L(this, "PlaceholderText");
  this.ab.Nv(a)
};
P.prototype.setPlaceholderText = P.prototype.Cd;
P.prototype.$t = q("Ke");
P.prototype.getChangedEvent = P.prototype.$t;
P.prototype.Z = function() {
  return this.a().isEnabled
};
P.prototype.getIsEnabled = P.prototype.Z;
P.prototype.R = function(a) {
  this.a().isEnabled = a;
  L(this, "IsEnabled");
  this.ab.Oa(a)
};
P.prototype.setIsEnabled = P.prototype.R;
P.prototype.kd = function() {
  return this.a().Qd
};
P.prototype.pb = function(a) {
  P.e.pb.call(this, a);
  if(a) {
    var a = this.ab, b = Tl(a);
    a.UE = i;
    a.b().focus();
    !b && !Ql && (a.b().value = a.fc);
    a.b().select();
    Ql || (a.hd && hf(a.hd, a.b(), "click", a.vu), Vf(a.sR, 10, a));
    L(this, "HasFocus")
  }
};
P.prototype.setHasFocus = P.prototype.pb;
P.prototype.na = function() {
  return this.ab.b()
};
P.prototype.yd = function() {
  return w(this.a().error) && "" != this.a().error
};
P.prototype.getHasError = P.prototype.yd;
P.prototype.getError = function() {
  return this.a().error
};
P.prototype.getError = P.prototype.getError;
P.prototype.Pa = function(a) {
  var b = this.a().error;
  this.Ni(a);
  this.a().error = a;
  "" != a && a != k ? (this.a().Hb = 16, b = new Ee("change"), L(this, "Error"), this.xr.v(a, b)) : b != a && 16 == this.a().Hb && this.bc(Ni)
};
P.prototype.setError = P.prototype.Pa;
s = P.prototype;
s.jc = k;
s.Uh = m;
s.Ni = function(a) {
  this.ab.b();
  try {
    (this.jc == k && (this.jc = this.u().m("span", "etk-textbox-erroricon")), a && "" != a) ? (D(this.b(), "etk-textbox-error"), this.Uh || (this.b().appendChild(this.jc), this.Uh = i), this.u().Ns(this.jc, {title:a})) : (E(this.b(), "etk-textbox-error"), this.Uh && (this.b().removeChild(this.jc), this.Uh = m))
  }catch(b) {
    alert(b + "\n...in tr.ui.TextBox.prototype.addErrorStyle()")
  }
};
s.lk = q("xr");
s.Mb = function() {
  return this.a().textAlign
};
P.prototype.getTextAlign = P.prototype.Mb;
P.prototype.Ua = function(a) {
  this.a().textAlign = a;
  var b = this.ab.b();
  b != k && (dd(b, "text-align", lm.g()[a]), L(this, "TextAlign"))
};
P.prototype.setTextAlign = P.prototype.Ua;
P.prototype.Yb = function() {
  return this.a().ya
};
P.prototype.getTextOverflow = P.prototype.Yb;
P.prototype.Va = function(a) {
  this.a().ya = a;
  var b = this.ab.b();
  b != k && (dd(b, "text-overflow", km.g()[a]), dd(b, "overflow", "hidden"), dd(b, "white-space", "nowrap"), L(this, "TextOverflow"))
};
P.prototype.setTextOverflow = P.prototype.Va;
P.prototype.Y = function(a) {
  P.e.Y.call(this, a);
  if(this.a().w != a && this.dispatchEvent(a ? "show" : "hide")) {
    var b = this.ab.b();
    b && yf.g().F(b, a);
    this.a().w = a;
    L(this, "IsVisible")
  }
};
P.prototype.Xe = r(i);
function Bm() {
}
C(Bm, yf);
x(Bm);
Bm.prototype.J = function() {
  return Cm
};
Bm.prototype.rb = r(i);
var Cm = "etk-autosuggest";
function Dm(a, b) {
  if(Em(a)) {
    a.selectionStart = b
  }else {
    if(Ob) {
      var c = Fm(a), e = c[0];
      e.inRange(c[1]) && (b = Gm(a, b), e.collapse(i), e.move("character", b), e.select())
    }
  }
}
function Hm(a) {
  var b = 0, c = 0;
  if(Em(a)) {
    b = a.selectionStart, c = -1
  }else {
    if(Ob) {
      var e = Fm(a), f = e[0], e = e[1];
      if(f.inRange(e)) {
        f.setEndPoint("EndToStart", e);
        if("textarea" == a.type) {
          e.duplicate();
          b = a = f.text;
          for(c = m;!c;) {
            0 == f.compareEndPoints("StartToEnd", f) ? c = i : (f.moveEnd("character", -1), f.text == a ? b += "\r\n" : c = i)
          }
          f = [b.length, -1];
          return f
        }
        b = f.text.length;
        c = -1
      }
    }
  }
  return[b, c]
}
function Im(a, b) {
  if(Em(a)) {
    a.selectionEnd = b
  }else {
    if(Ob) {
      var c = Fm(a), e = c[1];
      c[0].inRange(e) && (b = Gm(a, b), c = Gm(a, Hm(a)[0]), e.collapse(i), e.moveEnd("character", b - c), e.select())
    }
  }
}
function Fm(a) {
  var b = a.ownerDocument || a.document, c = b.selection.createRange();
  "textarea" == a.type ? (b = b.body.createTextRange(), b.moveToElementText(a)) : b = a.createTextRange();
  return[b, c]
}
function Gm(a, b) {
  "textarea" == a.type && (b = a.value.substring(0, b).replace(/(\r\n|\r|\n)/g, "\n").length);
  return b
}
function Em(a) {
  try {
    return"number" == typeof a.selectionStart
  }catch(b) {
    return m
  }
}
;function Jm(a, b, c, e) {
  e = e || 150;
  this.ts = c != k ? c : i;
  this.Fv = a || ",;";
  this.gR = this.Fv.substring(0, 1);
  a = this.ts ? "[\\s" + this.Fv + "]+" : "[\\s]+";
  this.lP = RegExp("^" + a + "|" + a + "$", "g");
  this.DV = RegExp("\\s*[" + this.Fv + "]$");
  this.LM = b || "";
  this.jV = this.ts;
  this.Qa = 0 < e ? new Sf(e) : k;
  this.Pe = new ff(this);
  this.cC = new ff(this);
  this.vc = new eg;
  this.DM = -1
}
C(Jm, Yd);
var Km = (Mk || Nk) && !dc("533.17.9");
s = Jm.prototype;
s.YW = i;
s.vR = i;
s.mP = m;
s.FV = i;
s.EV = i;
s.dC = k;
s.Vc = k;
s.EF = "";
s.Bo = m;
s.XG = m;
s.MW = i;
s.I = function() {
  return this.Vc.value
};
s.ka = function(a) {
  this.Vc.value = a
};
s.qC = function(a) {
  for(var b = 0;b < arguments.length;b++) {
    var c = arguments[b];
    na(c) && 1 == c.nodeType && xf(c, "haspopup", i);
    this.Pe.i(c, "focus", this.xn);
    this.Pe.i(c, "blur", this.bi);
    this.Vc || (this.cC.i(c, "keydown", this.qU), na(c) && 1 == c.nodeType && Xc(pc(c)) == c && Lm(this, c))
  }
};
s.bO = function(a, b) {
  Mm(this, a.toString(), b);
  return m
};
function Mm(a, b, c) {
  if(z(c) ? c : a.ts) {
    var c = Nm(a, a.I(), Hm(a.Vc)[0]), e = Om(a, a.I());
    a.DV.test(b) || (b = b.replace(/[\s\xa0]+$/, "") + a.gR);
    a.YW && (0 != c && !/^[\s\xa0]*$/.test(e[c - 1]) && (b = " " + b), c == e.length - 1 && (b += " "));
    if(b != e[c]) {
      e[c] = b;
      b = a.Vc;
      (Pb || Ob && dc("9")) && b.blur();
      b.value = e.join("");
      for(var f = 0, h = 0;h <= c;h++) {
        f += e[h].length
      }
      b.focus();
      c = f;
      Dm(a.Vc, c);
      Im(a.Vc, c)
    }
  }else {
    a.ka(b)
  }
  a.XG = i
}
s.n = function() {
  Jm.e.n.call(this);
  this.dC != k && window.clearTimeout(this.dC);
  this.Pe.ba();
  delete this.Pe;
  this.cC.ba();
  this.vc.ba()
};
s.Ld = function(a) {
  switch(a.keyCode) {
    case 40:
      if(this.Uc.Uf()) {
        return this.mP ? Pm(this.Uc) : Qm(this.Uc), a.preventDefault(), i
      }
      if(!this.ts) {
        return this.update(i), a.preventDefault(), i
      }
      break;
    case 38:
      if(this.Uc.Uf()) {
        return this.mP ? Qm(this.Uc) : Pm(this.Uc), a.preventDefault(), i
      }
      break;
    case 9:
      if(this.Uc.Uf() && !a.shiftKey) {
        if(this.update(), Rm(this.Uc) && this.jV) {
          return a.preventDefault(), i
        }
      }else {
        this.Uc.Mf()
      }
      break;
    case 13:
      if(this.Uc.Uf()) {
        if(this.update(), Rm(this.Uc)) {
          return a.preventDefault(), a.stopPropagation(), i
        }
      }else {
        this.Uc.Mf()
      }
      break;
    case 27:
      if(this.Uc.Uf()) {
        return this.Uc.Mf(), a.preventDefault(), a.stopPropagation(), i
      }
      break;
    case 229:
      if(!this.Bo) {
        return this.Bo || (this.Pe.i(this.Vc, "keyup", this.kN), this.Pe.i(this.Vc, "keypress", this.qG), this.Bo = i), i
      }
      break;
    default:
      this.Qa && !this.MW && (this.Qa.stop(), this.Qa.start())
  }
  return Sm(this, a)
};
function Sm(a, b) {
  var c = a.ts && b.charCode && -1 != a.Fv.indexOf(String.fromCharCode(b.charCode));
  a.FV && c && a.update();
  return a.EV && c && Rm(a.Uc) ? (b.preventDefault(), i) : m
}
s.$S = r(m);
s.xn = function(a) {
  Lm(this, a.target || k)
};
function Lm(a, b) {
  jf(a.cC);
  a.Uc && Tm(a.Uc);
  b != a.Vc && (a.Vc = b, a.Qa && (a.Qa.start(), a.Pe.i(a.Qa, Uf, a.Hz)), a.EF = a.I(), a.vc.qb(a.Vc), a.Pe.i(a.vc, "key", a.Qp), a.Pe.i(a.Vc, "mousedown", a.Be), Ob && a.Pe.i(a.Vc, "keypress", a.iN))
}
s.bi = function() {
  Km ? this.dC = window.setTimeout(A(this.BN, this), 0) : this.BN()
};
s.BN = function() {
  this.Vc && (this.Pe.H(this.vc, "key", this.Qp), this.vc.detach(), this.Pe.H(this.Vc, "keyup", this.$S), this.Pe.H(this.Vc, "mousedown", this.Be), Ob && this.Pe.H(this.Vc, "keypress", this.iN), this.Bo && Um(this), this.Vc = k, this.Qa && (this.Qa.stop(), this.Pe.H(this.Qa, Uf, this.Hz)), this.Uc && Vm(this.Uc))
};
s.Hz = function() {
  this.update()
};
s.qU = function(a) {
  this.xn(a)
};
s.Qp = function(a) {
  this.DM = a.keyCode;
  this.Uc && this.Ld(a)
};
s.qG = function() {
  this.Bo && 229 != this.DM && Um(this)
};
s.kN = function(a) {
  this.Bo && (13 == a.keyCode || 77 == a.keyCode && a.ctrlKey) && Um(this)
};
s.Be = function(a) {
  this.Uc && this.pk(a)
};
s.pk = p();
function Um(a) {
  a.Bo && (a.Bo = m, a.Pe.H(a.Vc, "keypress", a.qG), a.Pe.H(a.Vc, "keyup", a.kN))
}
s.iN = function(a) {
  Sm(this, a)
};
s.update = function(a) {
  if(this.Vc && (a || this.I() != this.EF)) {
    if(a || !this.XG) {
      var b, a = Hm(this.Vc)[0];
      b = this.I();
      a = Om(this, b)[Nm(this, b, a)];
      b = this.lP ? ("" + a).replace(this.lP, "") : a;
      if(this.Uc) {
        this.Uc.CH(this.Vc);
        var a = this.Uc, c = this.I();
        if(a.Gi != b) {
          a.Gi = b;
          b = a.PM;
          var e = a.Gi, f = A(a.HT, a);
          if(c = b.AJ(b.NW, e, a.JT, b.PW, c)) {
            e = A(b.bX, b, e, f), b.Kb.es() && b.Kb.abort(), b.BF && Xe(b.BF), b.BF = Ue(b.Kb, "success", e), b.Kb.send(c, b.NT, b.Jd, b.qT)
          }
          Tm(a)
        }
      }
    }
    this.EF = this.I()
  }
  this.XG = m
};
function Nm(a, b, c) {
  a = Om(a, b);
  if(c == b.length) {
    return a.length - 1
  }
  for(var e = b = 0, f = 0;e < a.length && f <= c;e++) {
    f += a[e].length, b = e
  }
  return b
}
function Om(a, b) {
  if(!a.ts) {
    return[b]
  }
  for(var c = ("" + b).split(""), e = [], f = [], h = 0, j = m;h < c.length;h++) {
    a.LM && -1 != a.LM.indexOf(c[h]) ? (a.vR && !j && (e.push(f.join("")), f.length = 0), f.push(c[h]), j = !j) : !j && -1 != a.Fv.indexOf(c[h]) ? (f.push(c[h]), e.push(f.join("")), f.length = 0) : f.push(c[h])
  }
  e.push(f.join(""));
  return e
}
;function Wm(a, b, c, e) {
  Jm.call(this, a, b, c, e);
  this.dz = []
}
C(Wm, Jm);
Wm.prototype.bO = function(a) {
  Mm(this, a.text);
  for(var b = 0;b < this.dz.length;b++) {
    this.dz[b](a)
  }
  return i
};
Wm.prototype.dz = k;
function Xm(a, b) {
  this.NW = a;
  this.PW = !b;
  this.Kb = new qi
}
C(Xm, Yd);
s = Xm.prototype;
s.NT = "GET";
s.Jd = g;
s.qT = k;
s.BF = k;
s.Nc = ba("Jd");
s.AJ = function(a, b, c, e) {
  a = new Qh(a);
  ei(a, "token", b);
  ei(a, "max_matches", "" + c);
  ei(a, "use_similar", "" + Number(e));
  return a.toString()
};
s.wN = function(a) {
  var b = [];
  if(a) {
    try {
      b = ki(a)
    }catch(c) {
    }
  }
  return b
};
s.bX = function(a, b, c) {
  var e;
  c = c.target;
  try {
    e = c.Kb ? c.Kb.responseText : ""
  }catch(f) {
    ne(c.gb, "Can not get responseText: " + f.message), e = ""
  }
  b(a, this.wN(e))
};
s.n = function() {
  this.Kb.ba();
  Xm.e.n.call(this)
};
function Ym(a, b, c) {
  this.PM = a;
  this.co = c;
  this.fa = b;
  G(b, [Zm, $m, an, bn], this);
  this.Gi = k;
  this.tb = [];
  this.Rf = -1;
  this.lf = 0;
  this.$c = this.sd = k;
  this.WL = {}
}
C(Ym, lf);
s = Ym.prototype;
s.JT = 10;
s.EQ = i;
s.gJ = m;
s.vI = m;
s.kP = m;
var Zm = "hilite", $m = "select", bn = "dismiss", an = "canceldismiss";
s = Ym.prototype;
s.handleEvent = function(a) {
  if(a.target == this.fa) {
    switch(a.type) {
      case Zm:
        this.nj(a.Wz);
        break;
      case $m:
        Rm(this);
        break;
      case an:
        Tm(this);
        break;
      case bn:
        Vm(this)
    }
  }
};
s.vO = ba("vI");
s.wy = q("sd");
s.CH = ba("sd");
s.Uf = function() {
  return this.fa.w()
};
s.ta = function() {
  return this.tb.length
};
function Qm(a) {
  var b = a.lf + a.tb.length - 1;
  a.Rf >= a.lf && a.Rf < b ? a.nj(a.Rf + 1) : -1 == a.Rf ? a.nj(a.lf) : a.Rf == b && (a.gJ ? a.nj(-1) : a.vI && a.nj(a.lf))
}
function Pm(a) {
  a.Rf > a.lf ? a.nj(a.Rf - 1) : a.gJ && a.Rf == a.lf ? a.nj(-1) : a.vI && (-1 == a.Rf || a.Rf == a.lf) && a.nj(a.lf + a.tb.length - 1)
}
s.nj = function(a) {
  this.Rf = a;
  this.fa.nj(a);
  return-1 != cn(this, a)
};
function Rm(a) {
  var b = cn(a, a.Rf);
  if(-1 != b) {
    var b = a.tb[b], c = a.co.bO(b);
    a.kP ? (a.Gi = k, Vm(a)) : a.Mf();
    c || (a.dispatchEvent({type:"update", Wz:b}), a.kP && a.co.update(i));
    return i
  }
  a.Mf();
  a.dispatchEvent({type:"update", Wz:k});
  return m
}
s.Mf = function() {
  this.Rf = -1;
  this.Gi = k;
  this.lf += this.tb.length;
  this.tb = [];
  window.clearTimeout(this.$c);
  this.$c = k;
  this.fa.Mf();
  this.dispatchEvent("suggestionsupdate");
  this.dispatchEvent(bn)
};
function Vm(a) {
  a.$c || (a.$c = window.setTimeout(A(a.Mf, a), 100))
}
s.QL = function() {
  return this.$c ? (window.clearTimeout(this.$c), this.$c = k, i) : m
};
function Tm(a) {
  a.QL() || window.setTimeout(A(a.QL, a), 10)
}
s.n = function() {
  Ym.e.n.call(this);
  delete this.WL;
  this.fa.ba();
  this.co.ba();
  this.PM = k
};
s.HT = function(a, b, c) {
  this.Gi == a && this.SG(b, c)
};
s.SG = function(a, b) {
  var c = "object" == ga(b) && b, e = (c ? c.HY() : b) ? cn(this, this.Rf) : -1;
  this.lf += this.tb.length;
  this.tb = a;
  for(var f = [], h = 0;h < a.length;++h) {
    f.push({id:this.lf + h, data:a[h]})
  }
  h = k;
  this.sd && (h = this.WL[pa(this.sd)] || this.sd);
  this.fa.mJ = h;
  this.fa.SG(f, this.Gi, this.sd);
  h = this.EQ;
  c && c.zR() !== g && (h = c.zR());
  (h || 0 <= e) && 0 != f.length && this.Gi ? this.nj(0 <= e ? this.lf + e : this.lf) : this.Rf = -1;
  this.dispatchEvent("suggestionsupdate")
};
function cn(a, b) {
  var c = b - a.lf;
  return 0 > c || c >= a.tb.length ? -1 : c
}
s.qC = function(a) {
  var b = this.co;
  b.qC.apply(b, arguments)
};
s.update = function(a) {
  this.co.update(a)
};
var dn = {}, en = k;
function fn(a) {
  a = pa(a);
  delete dn[a];
  sb(dn) && en && (Wf(en), en = k)
}
function gn() {
  en || (en = Vf(function() {
    en = k;
    hn()
  }, 20))
}
function hn() {
  var a = va();
  pb(dn, function(b) {
    jn(b, a)
  });
  sb(dn) || gn()
}
;function kn() {
  this.Wa = ln;
  this.JK = this.startTime = k
}
C(kn, lf);
var ln = 0;
kn.prototype.Pp = function() {
  this.bk("begin")
};
kn.prototype.ws = function() {
  this.bk("end")
};
kn.prototype.bk = function(a) {
  this.dispatchEvent(a)
};
function mn(a, b, c, e) {
  kn.call(this);
  (!ha(a) || !ha(b)) && d(Error("Start and end parameters must be arrays"));
  a.length != b.length && d(Error("Start and end points must be the same length"));
  this.ew = a;
  this.mR = b;
  this.duration = c;
  this.bJ = e;
  this.coords = []
}
C(mn, kn);
s = mn.prototype;
s.progress = 0;
s.play = function(a) {
  if(a || this.Wa == ln) {
    this.progress = 0, this.coords = this.ew
  }else {
    if(1 == this.Wa) {
      return m
    }
  }
  fn(this);
  this.startTime = a = va();
  -1 == this.Wa && (this.startTime -= this.duration * this.progress);
  this.JK = this.startTime + this.duration;
  this.progress || this.Pp();
  this.bk("play");
  -1 == this.Wa && this.bk("resume");
  this.Wa = 1;
  var b = pa(this);
  b in dn || (dn[b] = this);
  gn();
  jn(this, a);
  return i
};
s.stop = function(a) {
  fn(this);
  this.Wa = ln;
  a && (this.progress = 1);
  nn(this, this.progress);
  this.bk("stop");
  this.ws()
};
s.pause = function() {
  1 == this.Wa && (fn(this), this.Wa = -1, this.bk("pause"))
};
s.n = function() {
  this.Wa == ln || this.stop(m);
  this.bk("destroy");
  mn.e.n.call(this)
};
function jn(a, b) {
  a.progress = (b - a.startTime) / (a.JK - a.startTime);
  1 <= a.progress && (a.progress = 1);
  nn(a, a.progress);
  1 == a.progress ? (a.Wa = ln, fn(a), a.bk("finish"), a.ws()) : 1 == a.Wa && a.$F()
}
function nn(a, b) {
  ma(a.bJ) && (b = a.bJ(b));
  a.coords = Array(a.ew.length);
  for(var c = 0;c < a.ew.length;c++) {
    a.coords[c] = (a.mR[c] - a.ew[c]) * b + a.ew[c]
  }
}
s.$F = function() {
  this.bk("animate")
};
s.bk = function(a) {
  this.dispatchEvent(new on(a, this))
};
function on(a, b) {
  Ee.call(this, a);
  this.coords = b.coords;
  this.x = b.coords[0];
  this.y = b.coords[1];
  this.duration = b.duration;
  this.progress = b.progress;
  this.state = b.Wa
}
C(on, Ee);
function pn(a, b, c, e, f) {
  mn.call(this, b, c, e, f);
  this.element = a
}
C(pn, mn);
pn.prototype.fB = fa;
pn.prototype.$F = function() {
  this.fB();
  pn.e.$F.call(this)
};
pn.prototype.ws = function() {
  this.fB();
  pn.e.ws.call(this)
};
pn.prototype.Pp = function() {
  this.fB();
  pn.e.Pp.call(this)
};
function qn(a, b, c, e, f) {
  la(b) && (b = [b]);
  la(c) && (c = [c]);
  pn.call(this, a, b, c, e, f);
  (1 != b.length || 1 != c.length) && d(Error("Start and end points must be 1D"))
}
C(qn, pn);
qn.prototype.fB = function() {
  Bd(this.element, this.coords[0])
};
qn.prototype.show = function() {
  this.element.style.display = ""
};
qn.prototype.hide = function() {
  this.element.style.display = "none"
};
function rn(a, b, c) {
  qn.call(this, a, 1, 0, b, c)
}
C(rn, qn);
rn.prototype.Pp = function() {
  this.show();
  rn.e.Pp.call(this)
};
rn.prototype.ws = function() {
  this.hide();
  rn.e.ws.call(this)
};
function sn(a, b, c) {
  qn.call(this, a, 0, 1, b, c)
}
C(sn, qn);
sn.prototype.Pp = function() {
  this.show();
  sn.e.Pp.call(this)
};
function tn(a, b, c, e) {
  this.Ta = a || document.body;
  this.qa = mc(this.Ta);
  this.UN = !a;
  this.s = k;
  this.Gi = "";
  this.tb = [];
  this.fq = [];
  this.NO = this.Du = -1;
  this.mb = m;
  this.className = "ac-renderer";
  this.VG = "ac-row";
  this.HM = "active";
  this.cJ = "ac-active";
  this.sT = "ac-highlighted";
  this.lr = b || k;
  this.QW = e != k ? e : i;
  this.IT = i;
  this.JE = m;
  this.xV = !!c;
  this.ZA = m;
  this.rz = 0
}
C(tn, lf);
s = tn.prototype;
s.b = q("s");
s.SG = function(a, b, c) {
  this.Gi = b;
  this.tb = a;
  this.Du = -1;
  this.NO = va();
  this.sd = c;
  this.fq = [];
  un(this)
};
s.Mf = function() {
  this.sd && xf(this.sd, "activedescendant", "");
  this.mb && (this.mb = m, this.sd && xf(this.sd, "haspopup", m), 0 < this.rz ? ($d(this.Tq), this.Tq = new rn(this.s, this.rz), this.Tq.play()) : Cd(this.s, m))
};
s.show = function() {
  this.mb || ((this.mb = i, this.sd && (wf(this.sd, "combobox"), xf(this.sd, "autocomplete", "list"), xf(this.sd, "haspopup", i)), 0 < this.rz) ? ($d(this.Tq), this.Tq = new sn(this.s, this.rz), this.Tq.play()) : Cd(this.s, i))
};
s.w = q("mb");
function vn(a, b) {
  var c = 0 <= b && b < a.fq.length ? a.fq[b] : g;
  if(a.dispatchEvent({type:"rowhilite", SY:c}) && (0 <= a.Du && E(a.fq[a.Du], a.cJ, a.HM), a.Du = b, c)) {
    D(c, a.cJ, a.HM);
    a.sd && xf(a.sd, "activedescendant", c ? c.id : "");
    var e = a.s, f = qd(c), h = qd(e), j = Jd(e), l = f.x - h.x - j.left, f = f.y - h.y - j.top, h = e.clientHeight - c.offsetHeight;
    e.scrollLeft += Math.min(l, Math.max(l - (e.clientWidth - c.offsetWidth), 0));
    e.scrollTop += Math.min(f, Math.max(f - h, 0))
  }
}
s.nj = function(a) {
  if(-1 == a) {
    vn(this, -1)
  }else {
    for(var b = 0;b < this.tb.length;b++) {
      if(this.tb[b].id == a) {
        vn(this, b);
        break
      }
    }
  }
};
function wn(a) {
  if(!a.s) {
    var b = a.qa.m("div", {style:"display:none"});
    a.s = b;
    D(b, a.className);
    wf(b, "listbox");
    b.id = kf.g().ty();
    a.qa.appendChild(a.Ta, b);
    G(b, "click", a.Ey, m, a);
    G(b, "mousedown", a.Fy, m, a);
    G(b, "mousemove", a.xu, m, a);
    G(b, "mouseover", a.BL, m, a)
  }
}
function un(a) {
  wn(a);
  a.ZA && (a.s.style.visibility = "hidden");
  a.ZW && (a.s.style.minWidth = a.ZW.clientWidth + "px");
  a.fq.length = 0;
  a.qa.JN(a.s);
  if(a.lr && a.lr.Na) {
    a.lr.Na(a, a.s, a.tb, a.Gi)
  }else {
    var b = k;
    Qd(a.tb, function(a) {
      var e = this.Gi, f = this.qa.m("div", {className:this.VG, id:kf.g().ty()});
      wf(f, "option");
      this.lr && this.lr.SN ? this.lr.SN(a, 0, f) : f.innerHTML = Ca(a.data.toString());
      e && this.QW && xn(this, f, e);
      D(f, this.VG);
      this.fq.push(f);
      a = f;
      this.ZA ? this.s.insertBefore(a, b) : this.qa.appendChild(this.s, a);
      b = a
    }, a)
  }
  0 == a.tb.length ? a.Mf() : (a.show(), a.Jb(), Fd(a.s, i))
}
s.Jb = function() {
  if(this.sd && this.UN) {
    var a;
    a = this.xV ? 3 : 1;
    this.ZA && (a ^= 1);
    Jf(this.mJ || this.sd, a, this.s, a ^ 1, k, k, 65);
    this.ZA && (this.s.style.visibility = "visible")
  }
};
s.n = function() {
  this.s && (Ve(this.s, "click", this.Ey, m, this), Ve(this.s, "mousedown", this.Fy, m, this), Ve(this.s, "mouseover", this.BL, m, this), Ve(this.s, "mousemove", this.xu, m, this), this.qa.removeNode(this.s), this.s = k, this.mb = m);
  $d(this.Tq);
  this.Ta = k;
  tn.e.n.call(this)
};
function xn(a, b, c) {
  if(3 == b.nodeType) {
    var e = k;
    ha(c) && 1 < c.length && !a.JE && (e = ib(c, 1));
    c = yn(a, c);
    if(0 != c.length) {
      for(var f = b.nodeValue, h = a.IT ? RegExp("([\\s\\S]*?)\\b(" + c + ")", "gi") : RegExp("([\\s\\S]*?)(" + c + ")", "gi"), c = [], j = 0, l = h.exec(f), n = 0;l;) {
        n++, c.push(l[1]), c.push(l[2]), j = h.lastIndex, l = h.exec(f)
      }
      c.push(f.substring(j));
      if(1 < c.length) {
        e = !a.JE ? 1 : n;
        for(f = 0;f < e;f++) {
          h = 2 * f, b.nodeValue = c[h], j = a.qa.createElement("b"), j.className = a.sT, a.qa.appendChild(j, a.qa.createTextNode(c[h + 1])), j = b.parentNode.insertBefore(j, b.nextSibling), b.parentNode.insertBefore(a.qa.createTextNode(""), j.nextSibling), b = j.nextSibling
        }
        a = ib(c, 2 * e);
        b.nodeValue = a.join("")
      }else {
        e && xn(a, b, e)
      }
    }
  }else {
    for(b = b.firstChild;b;) {
      e = b.nextSibling, xn(a, b, c), b = e
    }
  }
}
function yn(a, b) {
  var c = "";
  if(!b) {
    return c
  }
  ha(b) && (b = Wa(b, function(a) {
    return!xa(a)
  }));
  a.JE ? ha(b) ? c = Xa(b, Ma).join("|") : (c = b.replace(/[\s\xa0]+/g, " ").replace(/^\s+|\s+$/g, ""), c = Ma(c), c = c.replace(/ /g, "|")) : ha(b) ? c = 0 < b.length ? Ma(b[0]) : "" : /^\W/.test(b) || (c = Ma(b));
  return c
}
function zn(a, b) {
  for(;b && b != a.s && !ab(lb(b), a.VG);) {
    b = b.parentNode
  }
  return b ? Ua(a.fq, b) : -1
}
s.Ey = function(a) {
  var b = zn(this, a.target);
  0 <= b && this.dispatchEvent({type:$m, Wz:this.tb[b].id});
  a.stopPropagation()
};
s.Fy = function(a) {
  a.stopPropagation();
  a.preventDefault()
};
s.BL = function(a) {
  this.xu(a)
};
s.xu = function(a) {
  a = zn(this, a.target);
  0 <= a && a != this.Du && !(300 > va() - this.NO) && this.dispatchEvent({type:Zm, Wz:this.tb[a].id})
};
function An(a, b, c) {
  Xm.call(this, a, c);
  this.xN = b
}
C(An, Xm);
An.prototype.xN = "";
An.prototype.AJ = function(a, b) {
  var c = new Qh(a);
  ei(c, "query", b);
  return c.toString()
};
An.prototype.wN = function(a) {
  var b = [], c = {};
  if(a) {
    try {
      var c = ki(a), e = Bn(this.xN, c), b = ki(e)
    }catch(f) {
    }
  }
  return b
};
function Bn(a, b) {
  function c() {
  }
  function e(a, b) {
    for(var c = a + 1;c < b;) {
      var e = y[c];
      c & 1 ? e ? c += e() : ++c : (v += e, ++c)
    }
  }
  function f(a, b, c) {
    var f = M, h = oa, j = Q;
    if(a instanceof Array) {
      Q = a;
      var l = a.length;
      for(oa = 0;oa < l;++oa) {
        M = a[oa], e(b, c)
      }
    }else {
      M = a, oa = g, e(b, c)
    }
    M = f;
    oa = h;
    Q = j
  }
  function h(a, b) {
    J = a;
    v = "";
    ia = b || Cn || {};
    f(a instanceof Array ? {"":a} : a, -1, y.length);
    return v
  }
  function j(a, b, c, e) {
    return function() {
      var h = M[a];
      return h && !(h instanceof Array && 0 == h.length) ? (f(h, b, c), (e || c) - b) : c - b
    }
  }
  function l(a) {
    var b = ia[a];
    if("function" == typeof b) {
      return b
    }
    a = a.replace("@", "_val_").replace("#", "_ctx_");
    try {
      return new Function("_val_", "_ctx_", "_root_", "_formatters_", "_log_", "{try { with(_formatters_) {with(_root_){return (" + a + ");}}} catch(e){_log_('formatter:' + e + ' in " + a + "');}}")
    }catch(c) {
    }
  }
  function n(a) {
    if("" == a) {
      return a
    }
    var b, e = a.indexOf("|");
    0 <= e && (b = a.substr(e + 1), a = a.substr(0, e), b = l(b));
    if("" == a || "." == a) {
      return b ? function() {
        v = v + b(M, M, J, ia, c);
        return 1
      } : function() {
        M !== g && (v = v + M);
        return 1
      }
    }
    if(/^w+$/.test(a)) {
      return b ? function() {
        v = v + b(M[a], M, J, ia, c);
        return 1
      } : function() {
        var b = M[a];
        b !== g && (v = v + b);
        return 1
      }
    }
    var f;
    try {
      f = new Function("_in_", "_log_", "{try {return (_in_." + a + ");} catch(e){ _log_(e + ' in " + a + "'); }}")
    }catch(h) {
      return
    }
    return b ? function() {
      v = v + b(f(M, c), M, J, ia, c);
      return 1
    } : function() {
      var a = f(M, c);
      a !== g && (v = v + a);
      return 1
    }
  }
  function o(a, b) {
    return function() {
      e(a, b);
      return b - a + 1
    }
  }
  function u(a, b, f, h) {
    var j = new Function("_ctx_", "at", "set", "_formatters_", "_log_", "try { with(_formatters_){with(_ctx_) {return (" + a + ");}}} catch(e){_log_('conditional:' + e + ' in \"" + a + "\"'); }");
    return function() {
      return j(M, oa, Q, ia, c) ? (e(b, f), h - b) : f - b
    }
  }
  function t() {
    for(var b = 0;b < a.length;) {
      var c = a.indexOf("{{", b);
      if(0 > c) {
        break
      }
      var e = a.indexOf("}}", c + 2);
      if(0 > e) {
        break
      }
      y.push(a.substring(b, c));
      y.push(a.substring(c + 2, e));
      b = e + 2
    }
    y.push(a.substr(b))
  }
  var v = "", y = [], J = k, M = k, oa = 0, Q = k, ia = Cn || {};
  if("#" == a.charAt(0)) {
    var Pa = k;
    (Pa = document.getElementById(a.substr(1))) || d("Template element #" + Pa + " not found");
    a = Pa.innerHTML
  }
  (function() {
    function a(f, h) {
      for(var j = f + 2;j < e;j += 2) {
        var l = y[j];
        switch(l.charAt(0)) {
          case "#":
            j = b(j, l.substr(1));
            continue;
          case "?":
            j = c(j, l.substr(1));
            "/?" == y[j] ? y[j] = "" : j -= 2;
            continue;
          case "/":
            return y[f] = o(f, j), l.substr(1) == h && (y[j] = ""), j;
          case "^":
            return y[f] = o(f, j), j;
          default:
            y[j] = n(l)
        }
      }
      return j
    }
    function b(f, h) {
      for(var l = f + 2;l < e;l += 2) {
        var o = y[l];
        switch(o.charAt(0)) {
          case "#":
            l = b(l, o.substr(1));
            continue;
          case "?":
            l = c(l, o.substr(1));
            "/?" == y[l] ? y[l] = "" : l -= 2;
            continue;
          case "^":
            if(o.substr(1) == h) {
              return o = l, l = a(l, h), y[f] = j(h, f, o, l), l
            }
            y[f] = j(h, f, l, l);
            return l - 2;
          case "/":
            y[f] = j(h, f, l);
            if(o.substr(1) != h) {
              return l - 2
            }
            y[l] = "";
            return l;
          default:
            y[l] = n(o)
        }
      }
      return l
    }
    function c(f, h) {
      for(var j = f + 2;j < e;j += 2) {
        var l = y[j];
        switch(l.charAt(0)) {
          case "#":
            j = b(j, l.substr(1));
            continue;
          case "?":
            var o = j, j = c(j, l.substr(1));
            y[f] = u(h, f, o, j);
            return j;
          case "^":
            if("?" == l.substr(1)) {
              return o = j, j = a(j, "?"), y[f] = u(h, f, o, j), j
            }
            y[f] = u(h, f, j, j);
            return j;
          case "/":
            y[f] = u(h, f, j, j);
            if("?" != l.substr(1)) {
              return j - 2
            }
            y[j] = "";
            return j;
          default:
            y[j] = n(l)
        }
      }
      return j
    }
    t();
    var e = y.length;
    b(-1, "")
  })();
  return b === g ? function(a, b) {
    return h(a, b)
  } : h(b, ia)
}
var Cn = {date:function(a) {
  var b = a.split("-");
  return 3 != b.length ? a : "January,February,March,April,May,June,July,August,September,October,November,December".split(",")[parseInt(b[1], 10) - 1] + " " + parseInt(b[2], 10) + ", " + b[0]
}, escaped:function(a) {
  return a.replace("&", "&amp;").replace('"', "&quot;").replace("'", "&#39;").replace("<", "&lt;").replace(">", "&gt;")
}, json:function(a) {
  return JSON.stringify(a)
}, stripbold:function(a) {
  return a.replace(/\<b\>/g, "").replace(/\<\/b\>/g, "")
}};
function Dn() {
}
Dn.prototype.SN = function(a, b, c) {
  b = [];
  a.data.isEnabled ? D(c, "etk-autosuggest-row-enabled") : D(c, "etk-autosuggest-row-disabled");
  b.push(a.data.controls);
  H.g().Sn(JSON.stringify(b), c)
};
function En(a, b, c, e, f) {
  K.call(this, a, b, c, e, f);
  this.gc(i);
  this.xM = new yh(this, "ItemSelected", c, bk(b, "ItemSelected"));
  this.YO = new yh(this, "TextEntered", c, bk(b, "TextEntered"))
}
C(En, rl);
ag(En, Bm);
H.g().z("AutoSuggest", En);
s = En.prototype;
s.kn = r(m);
s.$r = k;
s.wk = k;
s.l = function(a) {
  En.e.l.call(this, a);
  this.$r = new P(new wm({}), k, m);
  this.Ca(this.$r, i);
  var b;
  b = new Dn;
  var c = new An("https://amers1.views.cp.icp2.mpp.reutest.com/Runtime/Explorer.SharedResources/skins/Autosuggest/suggest.ashx?api-key=867a46H5686&query=goog", '[\t{{#result}}\t\t{\t\t\t"privateData": {{.|json}}\t\t\t, "isEnabled": false\t\t\t, "text": "{{name}}"\t\t\t, "controls": {\t\t\t\t"type": "Row"\t\t\t\t, "model": ""\t\t\t\t, "events": ""\t\t\t\t, "nestlevel": ""\t\t\t\t, "controls": [\t\t\t\t\t{ "type": "TextLabel", "text": "{{name}}", "wrapText": false, "isEnabled": false, "style": 1 }\t\t\t\t]\t\t\t}\t\t},\t\t{{#hits}}\t\t\t{\t\t\t\t"privateData": {{.|json}}\t\t\t\t, "isEnabled": true\t\t\t\t, "text": "{{cmd}}"\t\t\t\t, "controls": {\t\t\t\t\t"type": "Row"\t\t\t\t\t, "model": ""\t\t\t\t\t, "events": ""\t\t\t\t\t, "nestlevel": ""\t\t\t\t\t, "controls": [\t\t\t\t\t\t{\t\t\t\t\t\t\t"type": "Column"\t\t\t\t\t\t\t, "width": 4\t\t\t\t\t\t\t, "isFlexible": false\t\t\t\t\t\t\t, "controls": [\t\t\t\t\t\t\t\t{ "type": "TextLabel", "text": "{{cmd}}", "wrapText": false, "isEnabled": true, "style": 1 }\t\t\t\t\t\t\t]\t\t\t\t\t\t},\t\t\t\t\t\t{\t\t\t\t\t\t\t"type": "Column"\t\t\t\t\t\t\t, "width": 14\t\t\t\t\t\t\t, "isFlexible": false\t\t\t\t\t\t\t, "controls": [\t\t\t\t\t\t\t\t{ "type": "TextLabel", "text": "{{title|stripbold}} - {{subtitle}}", "wrapText": false, "isEnabled": true, "style": 1 }\t\t\t\t\t\t\t]\t\t\t\t\t\t}\t\t\t\t\t]\t\t\t\t}\t\t\t}\t\t\t{{? (at != (set.length - 1)) }},{{/?}}\t\t{{/hits}}\t\t{{? (moreLink.length > 0)}}\t\t\t,{\t\t\t\t"privateData": {{.|json}}\t\t\t\t, "isEnabled": true\t\t\t\t, "text": "{{name}}"\t\t\t\t, "controls": {\t\t\t\t\t"type": "Row"\t\t\t\t\t, "model": ""\t\t\t\t\t, "events": ""\t\t\t\t\t, "nestlevel": ""\t\t\t\t\t, "controls": [\t\t\t\t\t\t{ "type": "TextLabel", "text": "More {{name}}", "wrapText": false, "isEnabled": false, "style": 5 }\t\t\t\t\t]\t\t\t\t}\t\t\t}\t\t{{/?}}\t\t{{? (at != (set.length - 1)) }},{{/?}}\t{{/result}}]', 
  m);
  b = new tn(k, b);
  b.UN = i;
  var e = this.$r.b();
  b.mJ = e;
  this.wk = new Wm(k, k, m, 300);
  this.tJ = new Ym(c, b, this.wk);
  this.wk.Uc = this.tJ;
  this.wk.qC(this.$r.b());
  a.appendChild(this.$r.b())
};
s.m = function() {
  En.e.m.call(this);
  var a = this.qa.createElement("div");
  a.setAttribute("data-etk-type", "AutoSuggest");
  this.l(a)
};
s.k = function() {
  En.e.k.call(this);
  this.$r.Ke.i(this.FW, this);
  this.wk.dz.push(A(this.GQ, this))
};
s.a = function() {
  return En.e.a.call(this)
};
s.tJ = k;
s.FW = function(a) {
  this.YO.v(new Ee("change", a))
};
s.GQ = function(a) {
  this.xM.v(new Ee("change", a))
};
s.xM = k;
s.YO = k;
function lm() {
  this[0] = "left";
  this[1] = "right";
  this[2] = "center";
  this[3] = "justify";
  this[4] = "inherit"
}
x(lm);
function km() {
  this[1] = "clip";
  this[2] = "ellipsis"
}
x(km);
function Fn() {
  this[0] = "default";
  this[1] = "componentheader";
  this[2] = "componenttitle";
  this[3] = "primaryheading";
  this[4] = "secondaryheading";
  this[5] = "linktext";
  this[6] = "chart_legendinstrumentlabel";
  this[7] = "chart_legendinstrumentvalue";
  this[8] = "chart_xaxislabel";
  this[9] = "chart_yaxisvaluemarkers";
  this[10] = "datagrid_headerrowtext";
  this[11] = "datagrid_instrumentname";
  this[12] = "datagrid_upvalue";
  this[13] = "datagrid_downvalue";
  this[14] = "datagrid_data";
  this[15] = "largenews_primaryheadline";
  this[16] = "largenews_headlineabstract";
  this[17] = "smallnews_primaryheadline";
  this[18] = "smallnews_headlineabstract";
  this[19] = "headlinemetadata";
  this[20] = "alertlinktext";
  this[21] = "secondarylinktext";
  this[22] = "visitedlinktext"
}
x(Fn);
Fn.getInstance = Fn.g;
B("tr.ui.enums.TextLabelStyleToString", Fn);
function uj(a) {
  ij.call(this, a);
  a.hasOwnProperty("text") && (this.text = a.text);
  a.hasOwnProperty("textOverflow") && (this.ya = a.textOverflow);
  a.hasOwnProperty("textAlign") && (this.textAlign = a.textAlign);
  a.hasOwnProperty("style") && (this.style = a.style);
  a.hasOwnProperty("highlightStyle") && (this.Hb = a.highlightStyle);
  a.hasOwnProperty("isEnabled") && (this.isEnabled = a.isEnabled);
  a.hasOwnProperty("wrapText") && (this.nB = a.wrapText)
}
C(uj, ij);
s = uj.prototype;
s.text = "";
s.ya = 0;
s.textAlign = 0;
s.style = 0;
s.Hb = Ni;
s.isEnabled = i;
s.nB = i;
var Gn = new gl("etk-textlabel");
function um(a, b, c, e, f) {
  K.call(this, a, b, c, z(e) ? e : Gn, f);
  lg(this, m)
}
C(um, K);
B("tr.ui.TextLabel", um);
ag(um, Uj);
H.g().z("TextLabel", um);
s = um.prototype;
s.M = uj.prototype;
s.WP = String.fromCharCode(173);
s.a = function() {
  return um.e.a.call(this)
};
s.l = function(a) {
  um.e.l.call(this, a);
  a = this.a();
  this.ra(a.text);
  this.Zd(a.style);
  this.Ua(a.textAlign);
  this.Va(a.ya);
  this.Y(a.w);
  this.gc(i);
  this.bc(this.Td());
  var b = a.isEnabled;
  this.b().disabled = !b;
  F(this.b(), "etk-textlabel-disabled", !b);
  F(this.b(), "etk-textlabel-", b);
  this.wO(a.nB);
  this.b().textContent = this.WP
};
s.m = function() {
  this.Xb("TextLabel", "div", "etk-textlabel")
};
s.k = function() {
  um.e.k.call(this);
  var a = this.b();
  a !== k && a !== g && (a.innerText = this.a().text);
  dd(this.b(), "-webkit-user-select", "text")
};
s.n = function() {
  um.e.n.call(this)
};
s.wa = function() {
  return this.a().text
};
um.prototype.getText = um.prototype.wa;
um.prototype.ra = function(a) {
  this.a().text = a;
  var b = this.b();
  b !== k && b !== g && b.textContent !== a && (b.textContent = a)
};
um.prototype.setText = um.prototype.ra;
um.prototype.ai = function() {
  return this.a().style
};
um.prototype.getStyle = um.prototype.ai;
um.prototype.Zd = function(a) {
  var b = this.ai();
  this.a().style = a;
  if(a = Fn.g()[a]) {
    isNaN(b) || this.aj("etk-textlabel-" + Fn.g()[b], m), this.aj("etk-textlabel-" + a, i)
  }
};
um.prototype.setStyle = um.prototype.Zd;
um.prototype.Mb = function() {
  return this.a().textAlign
};
um.prototype.getTextAlign = um.prototype.Mb;
um.prototype.Ua = function(a) {
  this.a().textAlign = a;
  dd(this.b(), "text-align", lm.g()[a])
};
um.prototype.setTextAlign = um.prototype.Ua;
um.prototype.Yb = function() {
  return this.a().ya
};
um.prototype.getTextOverflow = um.prototype.Yb;
um.prototype.Va = function(a) {
  this.a().ya = a;
  0 == this.a().ya ? dd(this.b(), "white-space", "pre-wrap") : dd(this.b(), "white-space", "pre");
  0 !== a && (dd(this.b(), "text-overflow", km.g()[a]), 2 == this.a().ya && dd(this.b(), "white-space", "pre"))
};
um.prototype.setTextOverflow = um.prototype.Va;
um.prototype.Td = function() {
  return this.a().Hb
};
um.prototype.getHighlightStyle = um.prototype.Td;
um.prototype.bc = function(a) {
  this.Im(this.Td(), m);
  this.a().Hb = a;
  this.Im(a, i);
  F(this.Vh(), "etk-iphighlight-true", a > Ni && 16 >= a)
};
um.prototype.setHighlightStyle = um.prototype.bc;
um.prototype.NS = function() {
  return this.a().nB
};
um.prototype.getWrapText = um.prototype.NS;
um.prototype.wO = function(a) {
  this.a().nB = a;
  this.b() && 0 == this.a().ya && (a ? dd(this.b(), "white-space", "pre-wrap") : dd(this.b(), "white-space", "nowrap"))
};
um.prototype.setWrapText = um.prototype.wO;
um.prototype.Im = function(a, b) {
  a & 1 && this.Dc(1, b);
  a & 2 && this.Dc(2, b);
  a & 4 && this.Dc(4, b);
  a & 8 && this.Dc(8, b);
  a & 16 && this.Dc(16, b);
  a & Oi && this.Dc(Oi, b);
  a & 64 && this.Dc(64, b);
  a & 128 && this.Dc(128, b)
};
um.prototype.Dc = function(a, b) {
  var c = sl.g(), e = k;
  if(a && (e = c[a])) {
    e = Hn + "-" + e, this.Lv(e, b)
  }
};
um.prototype.Lv = function(a, b) {
  F(this.Vh(), a, b)
};
um.prototype.Vh = function() {
  return this.b()
};
var Hn = "etk-kbinput";
function In() {
}
C(In, Gk);
x(In);
In.prototype.rb = function(a) {
  return In.e.rb.call(this, a)
};
In.prototype.J = function() {
  return Jn
};
var Jn = "etk-button";
var Mn = new gl("etk-button");
function Nn(a, b, c, e, f) {
  K.call(this, a, b, c, Mn, f);
  this.Sa = new Ik("", z(e) ? e : new In, f);
  this.wb = new yh(this, "Clicked", c, bk(b, "Clicked"))
}
C(Nn, ql);
B("tr.ui.Button", Nn);
ag(Nn, Uj);
H.g().z("Button", Nn);
s = Nn.prototype;
s.M = nj.prototype;
s.wb = k;
s.Sa = k;
s.Fa = function() {
  return this.Sa.b()
};
s.a = function() {
  return Nn.e.a.call(this)
};
s.l = function(a) {
  Nn.e.l.call(this, a);
  a.setAttribute("tabindex", -1);
  this.Sa.Ka(this.b());
  F(a, "etk-button", i)
};
s.m = function() {
  Nn.e.m.call(this);
  this.l(On(this))
};
function On(a) {
  a = a.qa.createElement("input");
  a.setAttribute("type", "button");
  a.setAttribute("data-etk-type", "Button");
  return a
}
s.k = function() {
  Nn.e.k.call(this);
  this.ra(this.a().text);
  this.R(this.a().isEnabled);
  this.Vb(this.a().gg);
  this.Y(this.a().w);
  this.Ua(this.a().textAlign);
  this.Va(this.a().ya);
  this.oA(this.a().HA);
  var a = this.Sa.b();
  this.ma().i(a, "click", this.yj)
};
s.n = function() {
  Nn.e.n.call(this);
  this.la()
};
s.yj = function(a) {
  this.Sa.isEnabled() && (this.wb.v(a), a.stopPropagation())
};
s.wa = function() {
  return this.a().text
};
Nn.prototype.getText = Nn.prototype.wa;
Nn.prototype.ra = function(a) {
  this.a().text = a;
  this.Sa.ka(a);
  L(this, "Text")
};
Nn.prototype.setText = Nn.prototype.ra;
Nn.prototype.xd = q("wb");
Nn.prototype.getClickedEvent = Nn.prototype.xd;
Nn.prototype.Z = function() {
  return this.a().isEnabled
};
Nn.prototype.getIsEnabled = Nn.prototype.Z;
Nn.prototype.R = function(a) {
  this.a().isEnabled = a;
  this.Sa.Oa(a)
};
Nn.prototype.setIsEnabled = Nn.prototype.R;
Nn.prototype.kd = function() {
  return this.a().Qd
};
Nn.prototype.pb = function(a) {
  Nn.e.pb.call(this, a)
};
Nn.prototype.setHasFocus = Nn.prototype.pb;
Nn.prototype.Y = function(a) {
  Nn.e.Y.call(this, a);
  if(this.a().w != a && this.dispatchEvent(a ? "show" : "hide")) {
    var b = this.Sa.b();
    b && yf.g().F(b, a);
    this.a().w = a
  }
};
Nn.prototype.Yb = function() {
  return this.a().ya
};
Nn.prototype.getTextOverflow = Nn.prototype.Yb;
Nn.prototype.Va = function(a) {
  this.a().ya = a;
  var b = this.Sa.b();
  b != k && (Ob || dd(b, "text-overflow", km.g()[a]), dd(b, "overflow", "hidden"), dd(b, "white-space", "nowrap"), L(this, "TextOverflow"))
};
Nn.prototype.setTextOverflow = Nn.prototype.Va;
Nn.prototype.Mb = function() {
  return this.a().textAlign
};
Nn.prototype.getTextAlign = Nn.prototype.Mb;
Nn.prototype.Ua = function(a) {
  this.a().textAlign = a;
  var b = this.Sa.b();
  b != k && (dd(b, "text-align", lm.g()[a]), L(this, "TextAlign"))
};
Nn.prototype.setTextAlign = Nn.prototype.Ua;
Nn.prototype.na = function() {
  return this.Sa.na()
};
Nn.prototype.lE = function() {
  return this.a().HA
};
Nn.prototype.oA = function(a) {
  this.a().HA = a;
  1 == a && (a = this.b()) && a.style.setProperty("width", "100%")
};
function Pn() {
  return Qb && dc(535.9)
}
;function Qn(a) {
  this.sx = a
}
Qn.prototype.sx = [];
Qn.prototype.getItem = function(a) {
  return this.sx.getItem(a)
};
Qn.prototype.indexOf = function(a) {
  return this.sx.indexOf(a)
};
Qn.prototype.Da = function() {
  return this.sx.Da()
};
function Rn(a, b, c, e, f) {
  K.call(this, a, b, c, e, f);
  this.pl = new Zk(this);
  this.pl.ri = this
}
C(Rn, ql);
ag(Rn, Uj);
H.g().z("Container", Rn);
s = Rn.prototype;
s.M = mj.prototype;
s.a = function() {
  return Rn.e.a.call(this)
};
s.l = function(a) {
  Rn.e.l.call(this, a)
};
s.pl = k;
s.eh = function() {
  return new Qn(this.pl)
};
Rn.prototype.getControls = Rn.prototype.eh;
Rn.prototype.Ag = function() {
  return this.a().Ag
};
Rn.prototype.isNamingContainer = Rn.prototype.Ag;
s = Rn.prototype;
s.Pc = aa();
s.kn = r(m);
s.rr = function() {
  for(var a = this.lu(), b = H.g(), c = 0;c < a.length;c++) {
    var e = a[c];
    if(e) {
      try {
        var f = e.children;
        if(f) {
          for(c = 0;c < f.length;c++) {
            var h = f[c];
            if(this.iM(h)) {
              var j = b.Ia(h.id);
              j && 0 > this.pl.indexOf(j) && (this.pl.add(j, i), this.Qt(j))
            }
          }
        }
      }catch(l) {
        fh.g().error(l.message)
      }
    }
  }
  this.Cz();
  return new Qn(this.pl)
};
s.iM = function(a) {
  return a.hasAttribute("data-etk-type")
};
s.Cz = p();
s.lu = function() {
  var a = [], b = this.La();
  b || (b = this.b());
  a.push(b);
  return a
};
s.Qt = function(a) {
  a.Xh() && !a.Ag() && a.rr()
};
s.Xh = r(i);
s.Xc = m;
s.vr = k;
s.im = function() {
  this.Xc = i
};
s.hm = function() {
  this.Xc = m
};
s.ni = function(a, b, c) {
  c = w(c) ? c : m;
  this.Df(a, b, !c)
};
s.zj = function(a) {
  vf(this, a, i)
};
s.cg = function(a) {
  bl(this.pl, a)
};
Rn.prototype.setInsertItem = Rn.prototype.cg;
Rn.prototype.dg = function(a) {
  al(this.pl, a)
};
Rn.prototype.sesetRemoveItemtClear = Rn.prototype.dg;
Rn.prototype.bg = function() {
  cl(this.pl)
};
Rn.prototype.setClear = Rn.prototype.bg;
function Sn() {
}
C(Sn, Df);
x(Sn);
s = Sn.prototype;
s.KF = k;
s.vA = function(a, b) {
  a.style.setProperty("width", b + "%")
};
s.Ka = function(a, b) {
  Sn.e.Ka.call(this, a, b);
  E(b, "etk-column");
  return b
};
s.Jv = function(a, b) {
  if(b) {
    this.KF || (this.KF = Ac("span", this.J() + "-margin")), Jc(this.KF, a)
  }else {
    var c = a.nextElementSibling != g ? a.nextElementSibling : Nc(a.nextSibling, i);
    c && "SPAN" === c.tagName && c.className === this.J() + "-margin" && Kc(c)
  }
};
s.J = function() {
  return Tn
};
var Tn = "etk-table-column";
function Un(a, b, c, e, f) {
  e = Pn() ? new Ff : new Sn;
  Rn.call(this, a, b, c, e, f);
  this.gc(i);
  lg(this, m)
}
C(Un, Rn);
ag(Un, Uj);
H.g().z("Column", Un);
s = Un.prototype;
s.M = pj.prototype;
s.a = function() {
  return Un.e.a.call(this)
};
s.m = function() {
  var a = Un.prototype.CP;
  this.a().Cn && (a = Un.prototype.BP);
  this.Xb("Column", "div", a)
};
s.k = function() {
  Un.e.k.call(this);
  var a = this.a();
  this.Ms(a.Cn);
  var b = this.b();
  (a.Cn && !fd(b, "-webkit-flex") || !a.Cn && 0 < a.width && !fd(b, "width")) && this.xa(a.width);
  0 < a.minWidth && !fd(b, "min-width") && this.mA(a.minWidth);
  this.vA(a.wP);
  this.zH(a.EH);
  this.BH(a.RH);
  this.Jv(a.xD);
  this.Y(a.w);
  b = a.iJ;
  this.a().Sw = b;
  var c = this.b();
  c && F(c, "etk-column-alternaterowcolor", b);
  var b = a.borderStyle, c = this.a(), e = this.b();
  0 < c.borderStyle && F(e, "etk-column-formstyleborder", m);
  c.borderStyle = b;
  e && 0 < b && F(e, "etk-column-formstyleborder", i);
  if(a.vo) {
    Vn(this, a.vo)
  }else {
    b = a.zA;
    c = this.a();
    c.zA = b;
    if(e = this.b()) {
      c.vo && Vn(this, m), b ? e.style.setProperty("border-left-width", "1px") : e.style.removeProperty("border-left-width")
    }
    b = a.BA;
    c = this.a();
    c.BA = b;
    if(e = this.b()) {
      c.vo && Vn(this, m), b ? e.style.setProperty("border-width", "1px") : e.style.removeProperty("border-width")
    }
    b = a.DA;
    c = this.a();
    c.DA = b;
    if(e = this.b()) {
      c.vo && Vn(this, m), b ? e.style.setProperty("border-top-width", "1px") : e.style.removeProperty("border-top-width")
    }
    a = a.xA;
    b = this.a();
    b.xA = a;
    if(c = this.b()) {
      b.vo && Vn(this, m), a ? c.style.setProperty("border-bottom-width", "1px") : c.style.removeProperty("border-bottom-width")
    }
  }
};
s.Ha = function() {
  return this.a().width
};
s.xa = function(a) {
  this.a().width = a;
  var b = this.b();
  b && this.fa.xa(b, this.a().Cn, a)
};
s.vA = function(a) {
  this.a().width = a;
  var b = this.b();
  b && this.fa.vA(b, a)
};
s.zH = function(a) {
  this.a().EH = a;
  var b = this.b();
  b && this.fa.zH(b, a)
};
s.BH = function(a) {
  this.a().RH = a;
  var b = this.b();
  b && this.fa.BH(b, a)
};
s.Jv = function(a) {
  this.a().xD = a;
  var b = this.b();
  b && this.fa.Jv(b, a)
};
s.Jr = function() {
  return this.a().minWidth
};
s.mA = function(a) {
  this.a().minWidth = a;
  if(0 < a) {
    var b = this.b();
    if("" === fd(b, "min-width")) {
      var c = Ef.g();
      dd(b, "min-width", a * c.Mx.nt + (a - 1) * c.Mx.fl)
    }
  }
};
s.Ms = function(a) {
  var b = this.a().Cn !== a;
  this.a().Cn = a;
  var c = this.b();
  c && this.fa.Ms(c, a);
  b && this.xa(this.a().width)
};
function Vn(a, b) {
  var c = a.a();
  c.vo = c.zA = c.BA = c.DA = c.xA = b;
  (c = a.b()) && (b ? c.style.setProperty("border-width", "1px") : c.style.removeProperty("border-width"))
}
s.BP = "etk-column-flexible";
s.CP = "etk-column-not-flexible";
function Wn(a, b, c) {
  this.id = a;
  this.jm = c
}
Wn.prototype.id = k;
Wn.prototype.jm = k;
function Xn(a, b) {
  this.Gt = a;
  this.OH = b
}
Xn.prototype.Gt = "";
Xn.prototype.columnName = Xn.prototype.Gt;
Xn.prototype.OH = 2;
Xn.prototype.sortOption = Xn.prototype.OH;
function Yn(a, b, c, e) {
  gh.call(this, a, e);
  this.xv = b;
  this.Km = c
}
C(Yn, gh);
Yn.prototype.type = "etk_grid_cell_clicked";
Yn.prototype.xv = -1;
Yn.prototype.tn = q("xv");
Yn.prototype.getRowIndex = Yn.prototype.tn;
Yn.prototype.Km = -1;
Yn.prototype.bu = q("Km");
Yn.prototype.getColumnIndex = Yn.prototype.bu;
function Zn(a, b, c) {
  I.call(this, a, "CellClicked", b, c)
}
C(Zn, I);
Zn.prototype.i = function(a, b) {
  G(this.B, "etk_grid_cell_clicked", a, g, b)
};
Zn.prototype.listen = Zn.prototype.i;
Zn.prototype.H = function(a, b) {
  Ve(this.B, "etk_grid_cell_clicked", a, g, b)
};
Zn.prototype.unlisten = Zn.prototype.H;
Zn.prototype.la = function() {
  Ze(this.B, "etk_grid_cell_clicked")
};
Zn.prototype.unlistenAll = Zn.prototype.la;
Zn.prototype.v = function(a, b, c) {
  a = new Yn(c, a, b, this.aa);
  Ah(this) && this.B.dispatchEvent(a)
};
function $n(a, b, c, e) {
  gh.call(this, a, e);
  this.Km = b;
  this.UJ = c
}
C($n, gh);
$n.prototype.type = "etk_grid_column_clicked";
$n.prototype.Km = -1;
$n.prototype.bu = q("Km");
$n.prototype.getColumnIndex = $n.prototype.bu;
$n.prototype.UJ = "";
$n.prototype.UD = q("UJ");
$n.prototype.getColumnName = $n.prototype.UD;
function ao(a, b, c) {
  I.call(this, a, "HeaderClicked", b, c)
}
C(ao, I);
ao.prototype.i = function(a, b) {
  G(this.B, "etk_grid_column_clicked", a, g, b)
};
ao.prototype.listen = ao.prototype.i;
ao.prototype.H = function(a, b) {
  Ve(this.B, "etk_grid_column_clicked", a, g, b)
};
ao.prototype.unlisten = ao.prototype.H;
ao.prototype.la = function() {
  Ze(this.B, "etk_grid_column_clicked")
};
ao.prototype.unlistenAll = ao.prototype.la;
ao.prototype.v = function(a, b, c) {
  c = new $n(c, a, b, this.aa);
  Ah(this) && (this.B.dispatchEvent(c), this.md == i && wh.g().Nd(this.aa.P(), this.Fc, '{"columnIndex":' + a + ', "columnName":"' + b + '" }', this.Kc))
};
function bo() {
  this.On = A(this.On, this)
}
bo.prototype.aR = 1;
bo.prototype.dataLength = bo.prototype.aR;
bo.prototype.$Q = 1;
bo.prototype.dataInterval = bo.prototype.$Q;
bo.prototype.eR = (new Date).getTime();
bo.prototype.dateSeed = bo.prototype.eR;
bo.prototype.bR = 1E3;
bo.prototype.dataSeed = bo.prototype.bR;
bo.prototype.WW = 1E5;
bo.prototype.volumeSeed = bo.prototype.WW;
bo.prototype.fR = 6048E5;
bo.prototype.dateVariance = bo.prototype.fR;
bo.prototype.cR = 10;
bo.prototype.dataVariance = bo.prototype.cR;
bo.prototype.XW = 1E3;
bo.prototype.volumeVariance = bo.prototype.XW;
bo.prototype.bm = 500;
bo.prototype.latency = bo.prototype.bm;
bo.prototype.$q = 1;
bo.prototype.burstRate = bo.prototype.$q;
bo.prototype.repeat = 0;
bo.prototype.repeat = bo.prototype.repeat;
bo.prototype.Ln = 0;
bo.prototype.maxCallback = bo.prototype.Ln;
bo.prototype.Ti = k;
bo.prototype.callback = bo.prototype.Ti;
s = bo.prototype;
s.Mg = -1;
s.TG = 0;
s.DJ = 0;
s.dp = 0;
s.HB = 10;
function co(a, b) {
  if(0 < b) {
    var c = 1E3 / b;
    a.bm = Math.floor(c);
    a.bm < a.HB && (a.bm = a.HB);
    a.$q = a.bm / c;
    var c = a.$q, e = 0.001;
    e === g && (e = 1.0E-5);
    if(0 === (1 + e < c || 1 > c + e ? c - 1 : 0)) {
      a.$q = 1
    }
  }else {
    a.bm = 0, a.$q = 0
  }
}
function eo(a) {
  a.TG = 0;
  0 < a.bm && 0 > a.Mg && (a.dp = 0, a.Mg = window.setTimeout(a.On, a.bm))
}
s.On = function() {
  var a = this.dp + this.$q + this.DJ;
  if(this.Ti !== g && this.Ti !== k) {
    0 < this.Ln && a > this.Ln && (a = this.Ln);
    for(--a;this.dp <= a;) {
      this.Ti(), ++this.dp
    }
    ++a;
    this.DJ = a > this.dp ? a - this.dp : 0
  }
  0 < this.Ln && this.dp >= this.Ln || 0 <= this.repeat && this.TG >= this.repeat ? this.Mg = -1 : (++this.TG, this.Mg = window.setTimeout(this.On, this.bm))
};
function fo(a, b, c) {
  this.Qi = a;
  this.Vm = b;
  this.rh = c
}
C(fo, Oj);
fo.prototype.Qi = -1;
fo.prototype.Vm = -1;
fo.prototype.rh = k;
fo.prototype.CR = q("Qi");
fo.prototype.getBeginRowIndex = fo.prototype.CR;
fo.prototype.VR = q("Vm");
fo.prototype.getEndRowIndex = fo.prototype.VR;
fo.prototype.yy = function() {
  return this.Vm - this.Qi + 1
};
fo.prototype.getUpdatedRangeCount = fo.prototype.yy;
fo.prototype.sS = q("rh");
fo.prototype.getRowIds = fo.prototype.sS;
function go(a, b, c, e) {
  fo.call(this, a, b, c);
  this.At = e
}
C(go, fo);
go.prototype.At = k;
go.prototype.dn = r("etk_data_updated");
go.prototype.getEventType = go.prototype.dn;
go.prototype.JR = q("At");
go.prototype.getChangedColumnNames = go.prototype.JR;
function ho() {
  this.wc = []
}
ho.prototype.wc = k;
ho.prototype.i = function(a, b) {
  a !== k && (b !== k ? this.wc.push(A(a, b)) : this.wc.push(a))
};
ho.prototype.listen = ho.prototype.i;
ho.prototype.H = function(a) {
  a = this.wc.indexOf(a);
  0 <= a && this.wc.splice(a, 1)
};
ho.prototype.unlisten = ho.prototype.H;
ho.prototype.la = function() {
  this.wc = []
};
ho.prototype.unlistenAll = ho.prototype.la;
function io(a, b) {
  for(var c = 0;c < a.wc.length;c++) {
    a.wc[c](b)
  }
}
;function jo() {
  this.wc = []
}
C(jo, ho);
function ko() {
  this.wc = []
}
C(ko, jo);
ko.prototype.v = function(a, b, c, e) {
  io(this, new go(a, b, c, e))
};
function lo() {
}
C(lo, Oj);
lo.prototype.dn = r("etk_data_schemachanged");
lo.prototype.getEventType = lo.prototype.dn;
function mo() {
  this.wc = []
}
C(mo, ho);
mo.prototype.v = function() {
  io(this, new lo)
};
function no(a, b) {
  this.eJ = a;
  this.MN = b
}
no.prototype.eJ = k;
no.prototype.MN = k;
no.prototype.xR = q("eJ");
no.prototype.getAddedGroups = no.prototype.xR;
no.prototype.oS = q("MN");
no.prototype.getRemovedGroups = no.prototype.oS;
function oo() {
  this.wc = []
}
oo.prototype.wc = k;
oo.prototype.i = function(a, b) {
  a !== k && (b !== k ? this.wc.push(A(a, b)) : this.wc.push(a))
};
oo.prototype.listen = oo.prototype.i;
oo.prototype.H = function(a) {
  a = this.wc.indexOf(a);
  0 <= a && this.wc.splice(a, 1)
};
oo.prototype.unlisten = oo.prototype.H;
oo.prototype.la = function() {
  this.wc = []
};
oo.prototype.unlistenAll = oo.prototype.la;
oo.prototype.v = function(a, b) {
  for(var c = new no(a, b), e = 0;e < this.wc.length;e++) {
    this.wc[e](c)
  }
};
function po(a, b, c) {
  fo.call(this, a, b, c)
}
C(po, fo);
po.prototype.dn = r("etk_data_deleted");
po.prototype.getEventType = po.prototype.dn;
function qo() {
  this.wc = []
}
C(qo, jo);
qo.prototype.v = function(a, b, c) {
  io(this, new po(a, b, c))
};
function ro() {
  this.clear()
}
s = ro.prototype;
s.sb = k;
s.tc = k;
s.Pd = -1;
s.jn = function(a) {
  return this.sb[a]
};
s.jk = function(a, b) {
  for(var c = [], e = a;e < a + b;++e) {
    c.push(this.sb[e])
  }
  return c
};
s.hj = function(a) {
  return this.tc[a]
};
s.Qe = function() {
  for(var a = [], b = 0;b < this.Pd;++b) {
    a.push(this.sb[b])
  }
  return a
};
s.qt = function(a) {
  this.tc[a] = this.Pd;
  this.sb[this.Pd] = a;
  return this.Pd++
};
s.Nw = function(a) {
  for(var b = [], c = 0;c < a.length;++c) {
    b.push(this.qt(a[c]))
  }
  return b
};
s.XL = function(a) {
  var b;
  this.Pd++;
  for(var c = this.Pd - 1;1 <= c;--c) {
    b = this.sb[c - 1], this.tc[b] = c, this.sb[c] = b
  }
  this.tc[a] = 0;
  this.sb[0] = a;
  return 0
};
s.KN = function(a) {
  var b = this.tc[a];
  if(b === g) {
    return-1
  }
  delete this.tc[a];
  for(var c, a = b;a < this.Pd - 1;++a) {
    c = this.sb[a + 1], this.sb[a] = c, this.tc[c] = a
  }
  delete this.sb[a];
  this.Pd--;
  return b
};
s.LN = function(a) {
  if(!(0 > a || a >= this.Pd)) {
    var b = this.sb[a];
    delete this.tc[b];
    for(var c;a < this.Pd - 1;++a) {
      c = this.sb[a + 1], this.sb[a] = c, this.tc[c] = a
    }
    delete this.sb[a];
    this.Pd--;
    return b
  }
};
s.removeRange = function(a, b) {
  if(0 > a || a + b >= this.Pd) {
    return[]
  }
  var c, e, f = [];
  for(c = a;c < a + b;++c) {
    e = this.sb[c], f.push(e), delete this.tc[e]
  }
  for(c = a;c < this.Pd - b;++c) {
    e = this.sb[c + b], this.sb[c] = e, this.tc[e] = c
  }
  for(;c < this.Pd;++c) {
    delete this.sb[c]
  }
  this.Pd -= b;
  return f
};
s.If = function(a) {
  return this.tc[a] !== g
};
s.clear = function() {
  this.sb = {};
  this.tc = {};
  this.Pd = 0
};
s.count = q("Pd");
function so(a, b, c, e, f) {
  gh.call(this, a, f);
  this.Yi = e;
  this.pw = c;
  this.ow = b
}
C(so, gh);
s = so.prototype;
s.type = "etk_datatable_columndata_arrive";
s.Yi = "";
s.pw = "";
s.ow = "";
s.getData = q("Yi");
so.prototype.getData = so.prototype.getData;
so.prototype.pE = q("pw");
so.prototype.getTypes = so.prototype.pE;
so.prototype.oE = q("ow");
so.prototype.getTransactionID = so.prototype.oE;
function to(a, b, c) {
  this.B = new lf;
  I.call(this, a, "ColumnDataArrive", b, c)
}
C(to, yh);
to.prototype.i = function(a, b) {
  G(this.B, "etk_datatable_columndata_arrive", a, g, b)
};
to.prototype.listen = to.prototype.i;
to.prototype.H = function(a, b) {
  Ve(this.B, "etk_datatable_columndata_arrive", a, g, b)
};
to.prototype.unlisten = to.prototype.H;
to.prototype.la = function() {
  Ze(this.B, to.UI)
};
to.prototype.unlistenAll = to.prototype.la;
to.prototype.Rx = function(a, b, c, e) {
  var f = "";
  if(e !== g && e !== k) {
    for(var f = f + "{", h = c.length, j = 0;j < h;j++) {
      f += '"d' + c[j].toString() + '":"' + Sj(b, e[j]) + '"', j < h - 1 && (f += ",")
    }
    f += "}"
  }
  this.B.dispatchEvent(new so(k, a, b.toString(), f, this.aa));
  a = '{"id":"' + a + '","t":' + b.toString() + ',"d":' + f;
  this.md == i && wh.g().Nd(this.aa.P(), this.Fc, a + "}", this.Kc)
};
function uo(a, b, c, e, f, h, j) {
  this.ha = a;
  this.le = k;
  this.dr = "";
  this.Kk = -1;
  this.yv = 0;
  this.Yl = m;
  b !== g && b !== k && (this.le = b);
  c !== g && (this.dr = c);
  e !== g && (this.Kk = e);
  f !== g && (this.yv = f);
  j && this.le && (this.le.cf.i(this.Wl, this), this.le.De.i(this.Wl, this))
}
function vo(a, b) {
  if(1 > a.length || "$" !== a[0]) {
    return k
  }
  var c = "", e = 0, f = -1, h = "", j = a.substring(1), c = j.split("[")[0].split(".");
  1 < c.length ? (h = c[0], c = c[1]) : c = c[0];
  -1 !== j.indexOf("[") ? (j = j.split("[")[1].split("]"), f = e = -1, "." === j[0] ? e = 0 : "last" === j[0] ? f = -2 : "+" === j[0][0] || "-" === j[0][0] ? e = Number(j[0]) : f = Number(j[0])) : (e = 0, f = -1);
  if("" !== h) {
    var l = wo.g(), n = h + ":" + c + ":" + f + ":" + e, j = xo(l, n);
    j === k && (j = new uo(n, yo.g().we(h), c, f, e, 0, i), l.rw[n] === g && (l.rw[n] = j))
  }else {
    j = new uo(b.getName(), b, c, f, e, 0, m)
  }
  return j
}
s = uo.prototype;
s.le = k;
s.dr = "";
s.Kk = -1;
s.yv = 0;
s.Wm = r(k);
s.rp = q("ha");
s.As = function(a, b) {
  this.Ce.push({f:b, o:a})
};
s.Dq = function() {
  if(!this.Yl) {
    this.Yl = i;
    for(var a = 0;a < this.Ce.length;++a) {
      var b = this.Ce[a];
      b.f(b.o, this.ha)
    }
    this.Yl = m
  }
};
s.Wl = function(a) {
  if(!(this.le === k || a.getChangedColumnNames !== g && -1 === a.At.indexOf(this.dr))) {
    if(-1 !== this.Kk) {
      if(-2 !== this.Kk) {
        if(a.Qi > this.Kk || a.Vm < this.Kk) {
          return
        }
      }else {
        var b = this.le.ta() - 1;
        if(a.Qi > b || a.Vm < b) {
          return
        }
      }
    }
    this.Dq()
  }
};
s.mk = function(a) {
  if(this.le === k) {
    return k
  }
  a = 0 === this.yv ? this.le.gh(a.valueOf()) : -1 === this.Kk ? this.le.gh(a.valueOf() + this.yv) : -2 === this.Kk ? this.le.gh(this.le.ta() - 1) : this.le.gh(this.Kk);
  if(a !== g) {
    try {
      return a.I(this.dr)
    }catch(b) {
    }
  }
  return k
};
s.Yy = r(m);
s.Jy = r(m);
s.Sz = p();
s.uA = p();
s.ky = function() {
  return this.Wm()
};
s.dA = r(k);
s.ha = k;
s.Ce = [];
s.Yl = m;
function zo(a, b, c) {
  this.ha = a;
  this.RC = b;
  this.ib = Fj(H.g(), this.RC);
  this.Ce = [];
  this.Xp = c;
  this.qv = "get" + c[0].toUpperCase() + c.substring(1);
  this.Yl = m;
  this.ib === g ? window.console.error("Error when parsing a formula: control " + b + " is not available.") : this.ib[this.qv] === g ? window.console.error("Error when parsing a formula: property " + c + " is not available in control " + b + ".") : this.ib.pn().i(this.Wl, this)
}
function Ao(a) {
  if(1 > a.length || "@" !== a[0]) {
    return k
  }
  var b = wo.g(), a = a.substring(1), c = a.split("."), a = c[0] + ":" + c[1], e = xo(b, a);
  e === k && (e = new zo(a, c[0], c[1]), b.rw[a] === g && (b.rw[a] = e));
  return e
}
s = zo.prototype;
s.Wm = r(k);
s.rp = q("ha");
s.As = function(a, b) {
  this.Ce.push({f:b, o:a})
};
s.Dq = function() {
  if(!this.Yl) {
    this.Yl = i;
    for(var a = 0;a < this.Ce.length;++a) {
      var b = this.Ce[a];
      b.f(b.o, this.ha)
    }
    this.Yl = m
  }
};
s.mk = function() {
  if(!this.ib) {
    this.ib = Fj(H.g(), this.RC);
    if(this.ib === g) {
      return window.console.error("Error when parsing a formula: control " + this.ib + " is not available."), k
    }
    if(this.ib[this.qv] === g) {
      return window.console.error("Error when parsing a formula: property getter " + this.qv + " is not available in control " + this.ib + "."), k
    }
    this.ib.pn().i(this.Wl, this)
  }
  var a = this.ib[this.qv]();
  return a === g ? k : a
};
s.Yy = r(m);
s.Jy = r(m);
s.Sz = p();
s.uA = p();
s.ky = function() {
  return this.Wm()
};
s.dA = r(k);
s.Wl = function(a) {
  a.ju() === this.Xp && this.Dq()
};
s.ha = k;
s.Ce = [];
s.ib = k;
s.RC = "";
s.qv = "";
s.Xp = "";
s.Yl = m;
function Bo(a, b, c, e) {
  this.Zx = b === g ? "\u00a7" : b;
  this.HN = Boolean(c);
  this.IN = Boolean(e);
  this.pa = 0;
  this.Lf = {};
  a = a.toString().trim();
  "/" === a[0] && "/" === a[a.length - 1] && (a = a.substring(1, a.length - 1));
  this.bP = RegExp(a, "g");
  this.aM = RegExp(this.Zx + "[0-9]+" + this.Zx, "g")
}
function Co(a, b) {
  var c = a.Lf, e = a.Zx, f = a.pa, h = a.HN, j = a.IN, l = b.replace(a.bP, function(a) {
    var b = e + (f++).toString() + e;
    h && (a = a.substring(1));
    j && (a = a.substring(0, a.length - 1));
    c[b] = a;
    return b
  });
  a.Lf = c;
  a.pa = f;
  return l
}
function Do(a, b) {
  var c = a.Lf, e = m, f = b.toString().replace(a.aM, function(a) {
    a = c[a];
    if(a === g) {
      return""
    }
    e = i;
    return a
  });
  return!e ? k : f
}
s = Bo.prototype;
s.Lf = k;
s.bP = k;
s.aM = k;
s.Zx = "";
s.pa = 0;
s.HN = m;
s.IN = m;
function Eo() {
  this.type = "";
  this.value = this.Cg = k;
  this.ha = "";
  this.fb = [];
  this.Ta = k
}
s = Eo.prototype;
s.type = "";
s.value = k;
s.Cg = k;
s.rp = q("ha");
s.getParent = q("Ta");
s.Ca = function(a) {
  var b = this.ha + this.fb.length.toString();
  Fo(a, b);
  a.Ta = this;
  this.fb.push(a);
  return b
};
s.op = function(a) {
  return this.fb[a]
};
function Go(a, b, c) {
  a.gI === k && (a.gI = Ho(a));
  for(var e, f = 0;f < b.length;++f) {
    for(var h = a.gI[b[f]], j = 0;j < h.length;++j) {
      for(e = h[j];e !== k;) {
        c.uA(e.rp()), e = e.getParent()
      }
    }
  }
}
s.evaluate = function(a) {
  var b, c;
  switch(this.type) {
    case "token":
      return this.value;
    case "node":
      if(a.Yy()) {
        if(a.Jy(this.ha)) {
          var e = [];
          for(b = 0;b < this.fb.length;++b) {
            e.push(this.fb[b].evaluate(a))
          }
          b = this.Cg.evaluate(e);
          a.dA(this.ha, b);
          a.Sz(this.ha);
          return b
        }
        return a.ky(this.ha)
      }
      var e = [], f;
      for(b = 0;b < this.fb.length;++b) {
        if(f = this.fb[b].evaluate(a), f instanceof Array) {
          for(c = 0;c < f.length;++c) {
            e.push(f[c])
          }
        }else {
          e.push(f)
        }
      }
      try {
        return this.Cg.evaluate(e)
      }catch(h) {
        return k
      }
    ;
    case "ref":
      return a.mk(this.value)
  }
  d("invalid treeValue")
};
function Io(a, b, c) {
  switch(a.type) {
    case "token":
      b = Do(b, a.value);
      b !== k && (a.type = "ref", a.value = b, c[a.ha] = a.value);
      break;
    case "node":
      for(var e = 0;e < a.fb.length;++e) {
        Io(a.fb[e], b, c)
      }
      break;
    case "ref":
      c[a.ha] = a.value
  }
}
function Jo(a, b) {
  switch(a.type) {
    case "token":
      var c = Do(b, a.value);
      c !== k && (a.value = c);
      break;
    case "node":
      for(c = 0;c < a.fb.length;++c) {
        Jo(a.fb[c], b)
      }
  }
}
function Fo(a, b) {
  a.ha = b + a.ha;
  for(var c = 0;c < a.fb.length;++c) {
    Fo(a.fb[c], b)
  }
}
function Ho(a, b) {
  b === g && (b = {});
  switch(a.type) {
    case "token":
      return b;
    case "node":
      for(var c = 0;c < a.fb.length;++c) {
        b = Ho(a.fb[c], b)
      }
      return b;
    case "ref":
      return b[a.value] === g && (b[a.value] = []), b[a.value].push(a), b
  }
  d("invalid treeValue")
}
s.ha = "";
s.fb = [];
s.Ta = k;
s.gI = k;
function Ko() {
  this.ca = "getcontrolproperty";
  this.type = "function";
  this.$ = -1
}
Ko.prototype.evaluate = function(a) {
  var b = a[1].toString(), b = b[0].toUpperCase() + b.substring(1), a = Fj(H.g(), a[0].toString());
  if(a === g) {
    return k
  }
  a = a["get" + b]();
  return a === g ? k : a
};
function Lo() {
  this.ca = "isempty";
  this.type = "function";
  this.$ = -1
}
Lo.prototype.evaluate = function(a) {
  for(var b = 0;b < a.length;++b) {
    if(a[b] !== k) {
      return m
    }
  }
  return i
};
function Mo() {
  this.ca = "isvalid";
  this.type = "function";
  this.$ = -1
}
Mo.prototype.evaluate = function(a) {
  var b;
  if(0 === a.length) {
    return m
  }
  for(var c = 0;c < a.length;++c) {
    if(b = a[c], b === k || b === g) {
      return m
    }
  }
  return i
};
function No() {
  this.ca = "isnumber";
  this.type = "function";
  this.$ = -1
}
No.prototype.evaluate = function(a) {
  var b;
  if(0 === a.length) {
    return m
  }
  for(var c = 0;c < a.length;++c) {
    if(b = a[c], isNaN(parseFloat(b)) || !isFinite(b)) {
      return m
    }
  }
  return i
};
function Oo() {
  this.ca = "index";
  this.type = "function";
  this.$ = -1
}
Oo.prototype.evaluate = function(a) {
  var b = a.length;
  if(2 > b) {
    return k
  }
  var c = Number(a[b - 1]);
  if(c > b - 2) {
    return k
  }
  a = a[c];
  return a !== g ? a : k
};
function Po() {
  this.ca = "+";
  this.type = "operator";
  this.$ = 2
}
Po.prototype.evaluate = function(a) {
  return Number(a[0]) + Number(a[1])
};
function Qo() {
  this.ca = "^";
  this.type = "operator";
  this.$ = 0
}
Qo.prototype.evaluate = function(a) {
  return Math.pow(a[0], a[1])
};
function Ro() {
  this.ca = "-";
  this.type = "operator";
  this.$ = 2
}
Ro.prototype.evaluate = function(a) {
  return Number(a[0]) - Number(a[1])
};
function So() {
  this.ca = "*";
  this.type = "operator";
  this.$ = 1
}
So.prototype.evaluate = function(a) {
  return Number(a[0]) * Number(a[1])
};
function To() {
  this.ca = "/";
  this.type = "operator";
  this.$ = 1
}
To.prototype.evaluate = function(a) {
  return Number(a[0]) / Number(a[1])
};
function Uo() {
  this.ca = "mod";
  this.type = "function";
  this.$ = -1
}
Uo.prototype.evaluate = function(a) {
  var b = Number(a[0]), a = Number(a[1]);
  return 0 < b * a ? b % a : b - a * Math.floor(b / a)
};
function Vo() {
  this.ca = "-";
  this.type = "prefix";
  this.$ = 0
}
Vo.prototype.evaluate = function(a) {
  return-1 * Number(a[0])
};
function Wo() {
  this.ca = "%";
  this.type = "suffix";
  this.$ = 0
}
Wo.prototype.evaluate = function(a) {
  return Number(a[0]) / 100
};
function Xo() {
  this.ca = "abs";
  this.type = "function";
  this.$ = -1
}
Xo.prototype.evaluate = function(a) {
  a = Number(a[0]);
  return 0 < a ? a : -a
};
function Yo() {
  this.ca = "exp";
  this.type = "function";
  this.$ = -1
}
Yo.prototype.evaluate = function(a) {
  return Math.exp(Number(a[0]))
};
function Zo() {
  this.ca = "fact";
  this.type = "function";
  this.$ = -1
}
Zo.prototype.evaluate = function(a) {
  a = Number(a[0]);
  if(0 > a) {
    return Number.NaN
  }
  for(var b = 1;1 < a;) {
    b *= a--
  }
  return b
};
function $o() {
  this.ca = "power";
  this.type = "function";
  this.$ = -1
}
$o.prototype.evaluate = function(a) {
  return Math.pow(a[0], a[1])
};
function ap() {
  this.ca = "sqrt";
  this.type = "function";
  this.$ = -1
}
ap.prototype.evaluate = function(a) {
  return Math.sqrt(a[0])
};
function bp() {
  this.ca = "ln";
  this.type = "function";
  this.$ = -1
}
bp.prototype.evaluate = function(a) {
  return Math.log(a[0])
};
function cp() {
  this.ca = "log";
  this.type = "function";
  this.$ = -1
}
cp.prototype.evaluate = function(a) {
  return 1 === a.length ? Math.log(a[0]) / Math.LN10 : Math.log(a[0]) / Math.log(a[1])
};
function dp() {
  this.ca = "log10";
  this.type = "function";
  this.$ = -1
}
dp.prototype.evaluate = function(a) {
  return Math.log(a[0]) / Math.LN10
};
function ep() {
  this.ca = "ceiling";
  this.type = "function";
  this.$ = -1
}
ep.prototype.evaluate = function(a) {
  return Math.ceil(a[0])
};
function fp() {
  this.ca = "round";
  this.type = "function";
  this.$ = -1
}
fp.prototype.evaluate = function(a) {
  return Math.round(a[0])
};
function gp() {
  this.ca = "floor";
  this.type = "function";
  this.$ = -1
}
gp.prototype.evaluate = function(a) {
  return Math.floor(a[0])
};
function hp() {
  this.ca = "trunc";
  this.type = "function";
  this.$ = -1
}
hp.prototype.evaluate = function(a) {
  var b = 0;
  1 < a.length && (b = Number(a[1]));
  for(var c = 1;0 < b;--b) {
    c *= 10
  }
  return Math.floor(Number(a[0]) * c) / c
};
function ip() {
  this.ca = "average";
  this.type = "function";
  this.$ = -1
}
ip.prototype.evaluate = function(a) {
  for(var b = 0, c = 0;c < a.length;++c) {
    b += a[c]
  }
  return b / a.length
};
function jp() {
  this.ca = "max";
  this.type = "function";
  this.$ = -1
}
jp.prototype.evaluate = function(a) {
  for(var b = a[0], c = 1;c < a.length;++c) {
    a[c] > b && (b = a[c])
  }
  return b
};
function kp() {
  this.ca = "min";
  this.type = "function";
  this.$ = -1
}
kp.prototype.evaluate = function(a) {
  for(var b = a[0], c = 1;c < a.length;++c) {
    a[c] < b && (b = a[c])
  }
  return b
};
function lp() {
  this.ca = "sum";
  this.type = "function";
  this.$ = -1
}
lp.prototype.evaluate = function(a) {
  for(var b = 0, c = 0;c < a.length;++c) {
    b += a[c]
  }
  return b
};
function mp() {
  this.ca = "=";
  this.type = "operator";
  this.$ = 2
}
mp.prototype.evaluate = function(a) {
  return a[0] === k || a[1] === k ? k : a[0].valueOf() === a[1].valueOf()
};
function np() {
  this.ca = ">";
  this.type = "operator";
  this.$ = 2
}
np.prototype.evaluate = function(a) {
  return a[0] > a[1]
};
function op() {
  this.ca = "<";
  this.type = "operator";
  this.$ = 2
}
op.prototype.evaluate = function(a) {
  return a[0] < a[1]
};
function pp() {
  this.ca = ">=";
  this.type = "operator";
  this.$ = 2
}
pp.prototype.evaluate = function(a) {
  return a[0] >= a[1]
};
function qp() {
  this.ca = "<=";
  this.type = "operator";
  this.$ = 2
}
qp.prototype.evaluate = function(a) {
  return a[0] <= a[1]
};
function rp() {
  this.ca = "<>";
  this.type = "operator";
  this.$ = 2
}
rp.prototype.evaluate = function(a) {
  return a[0] === k || a[1] === k ? k : a[0].valueOf() !== a[1].valueOf()
};
function sp() {
  this.ca = "if";
  this.type = "function";
  this.$ = -1
}
sp.prototype.evaluate = function(a) {
  return a[0] ? a[1] : a[2]
};
function tp() {
  this.ca = "and";
  this.type = "function";
  this.$ = -1
}
tp.prototype.evaluate = function(a) {
  for(var b = i, c = 0;c < a.length;++c) {
    b = b && a[c]
  }
  return b
};
function up() {
  this.ca = "or";
  this.type = "function";
  this.$ = -1
}
up.prototype.evaluate = function(a) {
  for(var b = m, c = 0;c < a.length;++c) {
    b = b || a[c]
  }
  return b
};
function vp() {
  this.ca = "not";
  this.type = "function";
  this.$ = -1
}
vp.prototype.evaluate = function(a) {
  return!Boolean(a[0])
};
function wp() {
  this.ca = "&";
  this.type = "operator";
  this.$ = 2
}
wp.prototype.evaluate = function(a) {
  return"" + a[0] + ("" + a[1])
};
function xp() {
  this.ca = "concatenate";
  this.type = "function";
  this.$ = -1
}
xp.prototype.evaluate = function(a) {
  for(var b = "", c = 0;c < a.length;++c) {
    b += a[c]
  }
  return b
};
function yp() {
  this.ca = "replace";
  this.type = "function";
  this.$ = -1
}
yp.prototype.evaluate = function(a) {
  var b = a[0], c = 0;
  1 < a.length && (c = Number(a[1]));
  var e = 0;
  2 < a.length && (e = Number(a[2]));
  var f = "";
  3 < a.length && (f = a[3]);
  return b.slice(0, c) + f + b.slice(c + e)
};
function zp() {
  this.ca = "rept";
  this.type = "function";
  this.$ = -1
}
zp.prototype.evaluate = function(a) {
  for(var b = "", c = 0;c < Number(a[1]);++c) {
    b += a[0]
  }
  return b
};
function Ap() {
  this.ca = "substitute";
  this.type = "function";
  this.$ = -1
}
Ap.prototype.evaluate = function(a) {
  if(3 < a.length) {
    for(var b = Number(a[3]), c = a[1], e = a[2], a = a[0], f = 0, h = 0;h < b - 1;++h) {
      f = a.indexOf(c, f) + c.length
    }
    f = a.indexOf(c, f);
    return a.substring(0, f) + e + a.substring(f + e.length)
  }
  return a[0].replace(a[1], a[2])
};
function Bp() {
  this.ca = "trim";
  this.type = "function";
  this.$ = -1
}
Bp.prototype.evaluate = function(a) {
  return a[0].trim()
};
function Cp() {
  this.ca = "lower";
  this.type = "function";
  this.$ = -1
}
Cp.prototype.evaluate = function(a) {
  return a[0].toLowerCase()
};
function Dp() {
  this.ca = "upper";
  this.type = "function";
  this.$ = -1
}
Dp.prototype.evaluate = function(a) {
  return a[0].toUpperCase()
};
function Ep() {
  this.ca = "left";
  this.type = "function";
  this.$ = -1
}
Ep.prototype.evaluate = function(a) {
  return a[0].substring(0, Number(a[1]))
};
function Fp() {
  this.ca = "right";
  this.type = "function";
  this.$ = -1
}
Fp.prototype.evaluate = function(a) {
  var b = a[0];
  return b.substring(b.length - Number(a[1]))
};
function Gp() {
  this.ca = "mid";
  this.type = "function";
  this.$ = -1
}
Gp.prototype.evaluate = function(a) {
  return a[0].substr(Number(a[1]) - 1, Number(a[2]))
};
function Hp() {
  this.ca = "find";
  this.type = "function";
  this.$ = -1
}
Hp.prototype.evaluate = function(a) {
  var b = a[1];
  return 2 < a.length ? b.indexOf(a[0], Number(a[2])) + 1 : b.indexOf(a[0]) + 1
};
function Ip() {
  this.ca = "date";
  this.type = "function";
  this.$ = -1
}
Ip.prototype.evaluate = function(a) {
  return new Date(a[0], a[1] - 1, a[2], 0, 0, 0, 0)
};
function Jp() {
  this.ca = "datetime";
  this.type = "function";
  this.$ = -1
}
Jp.prototype.evaluate = function(a) {
  return new Date(a[0], a[1] - 1, a[2], a[3], a[4], a[5], 0)
};
function Kp() {
  this.ca = "now";
  this.type = "function";
  this.$ = -1
}
Kp.prototype.evaluate = function() {
  return new Date
};
function Lp() {
  this.ca = "day";
  this.type = "function";
  this.$ = -1
}
Lp.prototype.evaluate = function(a) {
  return a[0].getDate()
};
function Mp() {
  this.ca = "month";
  this.type = "function";
  this.$ = -1
}
Mp.prototype.evaluate = function(a) {
  return a[0].getMonth() + 1
};
function Np() {
  this.ca = "year";
  this.type = "function";
  this.$ = -1
}
Np.prototype.evaluate = function(a) {
  return a[0].getFullYear()
};
function Op() {
  this.ca = "hour";
  this.type = "function";
  this.$ = -1
}
Op.prototype.evaluate = function(a) {
  return a[0].getHours()
};
function Pp() {
  this.ca = "minute";
  this.type = "function";
  this.$ = -1
}
Pp.prototype.evaluate = function(a) {
  return a[0].getMinutes()
};
function Qp() {
  this.ca = "second";
  this.type = "function";
  this.$ = -1
}
Qp.prototype.evaluate = function(a) {
  return a[0].getSeconds()
};
function Rp(a, b) {
  return new Date(a.getTime() + 1E3 * b)
}
function Sp() {
  this.ca = "add_days";
  this.type = "function";
  this.$ = -1
}
Sp.prototype.evaluate = function(a) {
  return Rp(a[0], 86400 * Number(a[1]))
};
function Tp() {
  this.ca = "add_months";
  this.type = "function";
  this.$ = -1
}
Tp.prototype.evaluate = function(a) {
  var b = new Date(a[0].getTime()), a = b.getMonth() + a[1];
  0 > a ? 0 === a % 12 ? b.setFullYear(b.getFullYear() + a / 12) : (b.setMonth(12 - a % 12), b.setFullYear(b.getFullYear() + a / 12 - 1)) : (b.setFullYear(b.getFullYear() + a / 12), b.setMonth(a % 12));
  return b
};
function Up() {
  this.ca = "add_years";
  this.type = "function";
  this.$ = -1
}
Up.prototype.evaluate = function(a) {
  var b = new Date(a[0].getTime());
  b.setFullYear(b.getFullYear() + a[1]);
  return b
};
function Vp() {
  this.ca = "add_hours";
  this.type = "function";
  this.$ = -1
}
Vp.prototype.evaluate = function(a) {
  return Rp(a[0], 3600 * Number(a[1]))
};
function Wp() {
  this.ca = "add_minutes";
  this.type = "function";
  this.$ = -1
}
Wp.prototype.evaluate = function(a) {
  return Rp(a[0], 60 * Number(a[1]))
};
function Xp() {
  this.ca = "add_seconds";
  this.type = "function";
  this.$ = -1
}
Xp.prototype.evaluate = function(a) {
  return Rp(a[0], Number(a[1]))
};
function Yp() {
  this.ca = "maturity";
  this.type = "function";
  this.$ = -1;
  this.Ed = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
}
Yp.prototype.evaluate = function(a) {
  var b, c = 0 < (a[0] - a[1]) / 864E5;
  c ? (b = a[1], a = a[0]) : (b = a[0], a = a[1]);
  var e = a.getFullYear() - b.getFullYear(), f = 12 - a.getMonth(), h = 12 - b.getMonth(), j = h - f;
  0 > j && (e -= 1, j = h + a.getMonth());
  f = this.Ed[a.getMonth() + (0 === a.getFullYear() % 4 ? 1 : 0)] - a.getDate();
  h = this.Ed[b.getMonth() + (0 === b.getFullYear() % 4 ? 1 : 0)] - b.getDate();
  b = h - f;
  0 > b && (j -= 1, b = h + a.getDate());
  return c ? "" + e + "y " + j + "m " + b + "d" : "-" + e + "y -" + j + "m -" + b + "d"
};
function Zp() {
  this.ca = "total_second";
  this.type = "function";
  this.$ = -1
}
Zp.prototype.evaluate = function(a) {
  return(a[0] - a[1]) / 1E3
};
function $p() {
  this.ca = "total_minute";
  this.type = "function";
  this.$ = -1
}
$p.prototype.evaluate = function(a) {
  return(a[0] - a[1]) / 6E4
};
function aq() {
  this.ca = "total_hour";
  this.type = "function";
  this.$ = -1
}
aq.prototype.evaluate = function(a) {
  return(a[0] - a[1]) / 36E5
};
function bq() {
  this.ca = "total_day";
  this.type = "function";
  this.$ = -1
}
bq.prototype.evaluate = function(a) {
  return(a[0] - a[1]) / 864E5
};
function cq(a) {
  this.hp = a;
  this.Vu = -1;
  for(a = 0;a < this.hp.length;++a) {
    this.Vu < this.hp[a].$ && (this.Vu = this.hp[a].$)
  }
}
function dq(a, b) {
  this.wM = a;
  this.fI = "";
  b !== g && (this.fI = b);
  this.children = []
}
dq.prototype.wM = m;
dq.prototype.fI = "";
dq.prototype.children = k;
function eq(a, b, c) {
  var e, f, h = b.indexOf(","), j = b.indexOf("("), l = b.indexOf(")"), h = -1 === h ? b.length : h, j = -1 === j ? b.length : j, l = -1 === l ? b.length : l;
  for(e = new dq(m);;) {
    if(l <= h && l <= j) {
      return f = b.substring(0, l), 0 < f.length && e.children.push(new dq(i, f)), c.children.push(e), b.substring(l + 1)
    }
    j < h ? (f = b.substring(0, j), 0 < f.length && e.children.push(new dq(i, f)), f = new dq(m), b = eq(a, b.substring(j + 1), f), e.children.push(f)) : (f = b.substring(0, h), 0 < f.length && e.children.push(new dq(i, f)), b = b.substring(h + 1), c.children.push(e), e = new dq(m));
    h = b.indexOf(",");
    j = b.indexOf("(");
    l = b.indexOf(")");
    h = -1 === h ? b.length : h;
    j = -1 === j ? b.length : j;
    l = -1 === l ? b.length : l
  }
}
function fq(a, b) {
  var c, e = new Eo;
  e.type = "node";
  e.Cg = k;
  for(c = 0;c < b.children.length;++c) {
    e.Ca(gq(a, b.children[c]))
  }
  return e
}
function gq(a, b) {
  var c, e, f = [], h;
  for(c = 0;c < b.children.length;++c) {
    if(b.children[c].wM) {
      for(var j = b.children[c].fI.trim(), l = [];0 < j.length;) {
        var n = j.length, o = [];
        for(e = 0;e < a.hp.length;++e) {
          if(h = a.hp[e], l[e] = j.toLowerCase().indexOf(a.hp[e].ca), -1 === l[e] && (l[e] = j.length), l[e] < n) {
            n = l[e], o = [h]
          }else {
            if(l[e] === n && n < j.length) {
              var u = h.ca.length - o[0].ca.length;
              0 < u ? o = [h] : 0 === u && o.push(h)
            }
          }
        }
        e = new Eo;
        e.type = "token";
        e.value = j.substring(0, n).trim();
        j = j.substring(n);
        0 < e.value.length && (e.value = hq(e.value), f.push(e));
        0 < o.length && (o.sort(function(a, b) {
          return b.$ - a.$
        }), f.push(o), j = j.substring(o[0].ca.length))
      }
    }else {
      f.push(fq(a, b.children[c]))
    }
  }
  j = [];
  for(c = 0;c < f.length;++c) {
    j[c] = f[c].type !== g ? i : m
  }
  for(e = i;1 < f.length;) {
    var l = a.Vu + 1, t;
    for(c = 0;c < f.length;++c) {
      j[c] || (h = f[c][f[c].length - 1], h.$ < l && (l = h.$, t = c))
    }
    e = m;
    c = t;
    h = f[c][f[c].length - 1];
    switch(h.type) {
      case "prefix":
      ;
      case "function":
        c === f.length - 1 && d("invalid expression");
        j[c + 1] && !(0 < c && j[c - 1]) ? (f[c + 1].Cg === k && "node" === f[c + 1].type ? (e = f[c + 1], e.Cg = h) : (e = new Eo, e.type = "node", e.Cg = h, e.Ca(f[c + 1])), f[c] = e, f.splice(c + 1, 1), e = i) : f[c].splice(f[c].length - 1, 1);
        break;
      case "suffix":
        0 === c && d("invalid expression");
        j[c - 1] && !(c < f.length - 1 && j[c + 1]) ? (f[c - 1].Cg === k && "node" === f[c - 1].type ? (e = f[c - 1], e.Cg = h) : (e = new Eo, e.type = "node", e.Cg = h, e.Ca(f[c - 1])), f[c - 1] = e, f.splice(c, 1), e = i) : f[c].splice(f[c].length - 1, 1);
        break;
      case "operator":
        (c === f.length - 1 || 0 === c) && d("invalid expression"), j[c - 1] && j[c + 1] ? (e = new Eo, e.type = "node", e.Cg = h, f[c - 1].Cg === k && "node" === f[c - 1].type ? e.Ca(f[c - 1].op(0)) : e.Ca(f[c - 1]), f[c + 1].Cg === k && "node" === f[c + 1].type ? e.Ca(f[c + 1].op(0)) : e.Ca(f[c + 1]), f[c - 1] = e, f.splice(c, 2), e = i) : f[c].splice(f[c].length - 1, 1)
    }
    for(c = 0;c < f.length;++c) {
      j[c] = f[c].type !== g ? i : m
    }
    !e && l === a.Vu && d("invalid expression")
  }
  return f[0].Cg === k && "node" === f[0].type ? f[0].op(0) : f[0]
}
function hq(a) {
  var b = Number(a);
  if(!b) {
    b = a.toLowerCase();
    if(b.match(/(^true$)|(^false$)/)) {
      return"false" === b ? m : i
    }
    b = a
  }
  return b
}
cq.prototype.hp = k;
cq.prototype.Vu = 1E3;
function wo() {
}
x(wo);
function xo(a, b) {
  var c = a.rw[b];
  return c === g ? k : c
}
function iq(a, b, c) {
  a = [];
  a.push(new Ko);
  a.push(new Lo);
  a.push(new No);
  a.push(new Mo);
  a.push(new Oo);
  a.push(new Po);
  a.push(new Qo);
  a.push(new Ro);
  a.push(new So);
  a.push(new To);
  a.push(new Uo);
  a.push(new Vo);
  a.push(new Wo);
  a.push(new Xo);
  a.push(new Yo);
  a.push(new Zo);
  a.push(new $o);
  a.push(new ap);
  a.push(new bp);
  a.push(new cp);
  a.push(new dp);
  a.push(new ep);
  a.push(new fp);
  a.push(new gp);
  a.push(new hp);
  a.push(new ip);
  a.push(new jp);
  a.push(new kp);
  a.push(new lp);
  a.push(new mp);
  a.push(new np);
  a.push(new op);
  a.push(new pp);
  a.push(new qp);
  a.push(new rp);
  a.push(new sp);
  a.push(new tp);
  a.push(new up);
  a.push(new vp);
  a.push(new wp);
  a.push(new xp);
  a.push(new yp);
  a.push(new zp);
  a.push(new Ap);
  a.push(new Bp);
  a.push(new Cp);
  a.push(new Dp);
  a.push(new Ep);
  a.push(new Fp);
  a.push(new Gp);
  a.push(new Hp);
  a.push(new Ip);
  a.push(new Jp);
  a.push(new Kp);
  a.push(new Lp);
  a.push(new Mp);
  a.push(new Np);
  a.push(new Op);
  a.push(new Pp);
  a.push(new Qp);
  a.push(new Sp);
  a.push(new Tp);
  a.push(new Up);
  a.push(new Vp);
  a.push(new Wp);
  a.push(new Xp);
  a.push(new Yp);
  a.push(new Zp);
  a.push(new $p);
  a.push(new aq);
  a.push(new bq);
  var e = new cq(a), a = new Bo("(\\@([\\d\\w]+)\\.([\\d\\w]+))|(\\$(([\\d\\w]+)\\.)?([\\d\\w]+)(\\[((last)|\\.|[\\-\\+]?[0-9]+)\\])?)"), f, b = Co(a, b), h = k;
  try {
    f = new Bo(/(\\")|(\\')/, "\u00b6", i);
    var j = new Bo(/("[^"']*")|('[^"']*')/, "#", i, i), l = Co(j, Co(f, b)), n = new dq(m);
    eq(e, l, n);
    h = gq(e, n.children[0]);
    Jo(h, j);
    Jo(h, f)
  }catch(o) {
    window.console.error("Error when parsing expression: " + b)
  }
  f = h;
  f !== k ? Io(f, a, c) : f = new Eo;
  return f
}
wo.prototype.rw = {};
function jq(a, b, c, e, f, h) {
  this.ha = a;
  this.fk = b;
  this.Ce = [];
  this.Te = i;
  this.Rl = m;
  this.Np = {};
  this.xj = {};
  f !== g && (this.js = f);
  h !== g && (this.yo = h);
  this.fg = {};
  this.Zp = {};
  if(c !== g && c !== k && (this.fg = c, e)) {
    for(var j in this.fg) {
      this.fg[j].As(this, this.Dq), this.Zp[this.fg[j].rp()] = j
    }
  }
}
s = jq.prototype;
s.rp = q("ha");
s.Wm = function() {
  this.Te && (this.hc = this.fk.evaluate(this), this.Te = m);
  return this.hc
};
s.As = function(a, b) {
  this.Ce.push({f:b, o:a})
};
s.Dq = function(a, b) {
  if(!a.Rl) {
    a.Rl = i;
    a.Te = i;
    a.yo && Go(a.fk, [a.Zp[b]], a);
    a.js || (a.hc = a.fk.evaluate(a));
    for(var c = 0;c < a.Ce.length;++c) {
      var e = a.Ce[c];
      e.f(e.o, a.ha)
    }
    a.Rl = m
  }
};
s.mk = function(a) {
  return this.fg[a].mk(a)
};
s.Yy = q("yo");
s.Jy = function(a) {
  return a === g ? this.Te : this.xj[a] === g || this.xj[a]
};
s.Sz = function(a) {
  a === g ? this.Te = m : this.xj[a] = m
};
s.uA = function(a) {
  a === g ? this.Te = i : this.xj[a] = i
};
s.ky = function(a) {
  return this.Np[a]
};
s.dA = function(a, b) {
  this.Np[a] = b
};
s.ha = k;
s.hc = k;
s.Ce = [];
s.fk = k;
s.Te = m;
s.Rl = m;
s.fg = {};
s.Zp = {};
s.Np = {};
s.xj = {};
s.js = m;
s.yo = m;
function kq(a, b) {
  var c;
  if(b === k) {
    return b
  }
  var e;
  a: {
    if(Object.prototype === b.__proto__) {
      for(e in b) {
        e = m;
        break a
      }
      e = i
    }else {
      e = m
    }
  }
  if(e) {
    return k
  }
  switch(a) {
    case 0:
      c = parseInt(b, 10);
      break;
    case 1:
      c = parseFloat(b);
      break;
    case 3:
      c = Boolean(b);
      break;
    case 5:
      if("string" == typeof b) {
        try {
          c = JSON.parse(b)
        }catch(f) {
          window.console.error("Error when parsing a JSON string: " + b)
        }
        break
      }
      c = b;
      break;
    case 6:
      if("string" == typeof b && 0 <= b.indexOf("Date(")) {
        c = /\/Date\((-?\d+)([+-]\d{2})?(\d{2})?.*/.exec(b);
        c = c == k || 2 > c.length ? new Date : new Date(parseInt(c[1], 10));
        break
      }
      c = b instanceof Date ? b : new Date(b);
      break;
    default:
      c = b
  }
  return c
}
function Sj(a, b) {
  if(b === k) {
    return"null"
  }
  var c;
  switch(a) {
    case 2:
      c = b.toString();
      break;
    case 6:
      c = b.toJSON();
      break;
    default:
      c = JSON.stringify(b)
  }
  return c
}
;function lq(a, b, c, e, f, h) {
  jq.call(this, e, a, h, m, i, m);
  this.Lm = b;
  this.Zc = f.Zc;
  this.Ym = -1;
  this.te = c
}
C(lq, jq);
s = lq.prototype;
s.Lm = k;
s.Zc = k;
s.Ym = 0;
s.te = k;
s.ak = function(a) {
  var b = this.Te;
  this.Te = i;
  this.yo && Go(this.fk, a, this);
  this.js || this.Wm();
  return!b
};
s.I = function() {
  try {
    return this.Ym < this.Lm.Ym && (this.hc = kq(this.Zc, this.Wm()), this.Ym = this.Lm.Ym), this.hc
  }catch(a) {
    return window.console.error("Error when evaluating a formula: " + a.toString()), a
  }
};
s.ka = p();
s.mk = function(a) {
  a = this.fg[a];
  try {
    return a.mk(this.te.tn(this.ha))
  }catch(b) {
    d(b)
  }
};
function mq(a, b) {
  this.G = a;
  this.Yc = b;
  this.Bk = b.getName();
  this.Zc = b.Zc;
  this.ue = b.ue;
  this.yk = b.yk
}
s = mq.prototype;
s.G = k;
s.Yc = k;
s.Bk = "";
s.Zc = 2;
s.ue = k;
s.yk = m;
s.xw = k;
s.ba = function() {
  this.xw = k
};
s.getName = q("Bk");
function nq(a, b) {
  a.xw !== g && a.xw !== k && a.xw(a.Bk, b)
}
s.eu = function() {
  return[]
};
s.Bz = p();
function oq(a, b, c) {
  mq.call(this, a, b);
  this.clear();
  if(c) {
    this.te = c;
    a = this.Yc;
    this.gm = {};
    this.LK = iq(wo.g(), a.gL(), this.gm);
    this.Qz = {};
    this.YA = {};
    this.MC = {};
    for(var e in this.gm) {
      if(c = this.gm[e], (b = Ao(c)) !== k) {
        b.As(this, this.jU), this.YA[c] = b
      }else {
        if((b = vo(c, this.te, a.getName())) !== k) {
          this.Qz[b.dr] = b, this.YA[c] = b, this.MC[b.dr] = c
        }
      }
    }
  }
}
C(oq, mq);
s = oq.prototype;
s.O = k;
s.LK = k;
s.te = k;
s.Ym = 0;
s.Qz = k;
s.gm = k;
s.YA = k;
s.MC = k;
s.Tf = function() {
  this.clear();
  for(var a = this.G.Qe(), b = 0;b < a.length;b++) {
    this.ne(a[b])
  }
  return i
};
s.ge = function() {
  for(var a = [], b = this.G.Qe(), c = 0;c < b.length;c++) {
    a.push(this.O[b[c]].I())
  }
  return a
};
s.Sk = r(m);
s.I = function(a) {
  var b = this.O[a];
  return b === g ? k : b.I(a)
};
s.ka = r(m);
s.Vj = function(a) {
  this.ne(a)
};
s.ne = function(a) {
  var b = this.VC(a);
  this.O[a] = b
};
s.Hu = function(a, b) {
  this.ne(b)
};
s.Gu = function(a, b) {
  this.ne(b)
};
s.Fg = function(a) {
  this.O[a] !== g && delete this.O[a]
};
s.Qs = function(a) {
  if(!(0 > a)) {
    var b = this.G.count();
    if(b !== a && b > a) {
      a = this.G.jk(a, b - a);
      for(b = 0;b < a.length;++b) {
        this.Fg(a[b])
      }
    }
  }
};
s.Ov = function(a) {
  if(!(0 > a)) {
    var b = this.G.count();
    if(b !== a && b > a) {
      a = this.G.jk(0, b - a);
      for(b = 0;b < a.length;++b) {
        this.Fg(a[b])
      }
    }
  }
};
s.clear = function() {
  this.O = {}
};
s.xh = p();
s.dj = function(a) {
  return this.O[a]
};
s.ak = function() {
  var a = m, b;
  for(b in this.O) {
    a = this.O[b].ak(b) || a
  }
  this.Ym++;
  return a
};
s.VC = function(a) {
  return new lq(this.LK, this, this.te, a, this.Yc, this.YA)
};
s.eu = function() {
  var a = [], b;
  for(b in this.Qz) {
    a.push(b)
  }
  return a
};
s.Bz = function(a, b, c, e) {
  var f = this.Qz[a];
  if(-1 !== f.Kk) {
    this.ak() && nq(this)
  }else {
    if(!(0 > b || c >= this.te.ta())) {
      this.Ym++;
      for(var b = [], h, j = 0;j < e.length;++j) {
        c = this.te.sn(this.te.tn(e[j]) - f.yv), h = this.dj(c), h !== g && h.ak([this.MC[a]]) && b.push(c)
      }
      nq(this, b)
    }
  }
};
s.jU = function(a) {
  a.ak() && nq(a)
};
function pq(a) {
  a && (this.rM = a);
  this.Cb = m;
  this.fF = 0;
  this.qm = [];
  this.Hd = "";
  this.gy = [];
  this.af = [];
  this.Pj = 0;
  this.id = -1
}
s = pq.prototype;
s.rM = m;
s.Cb = m;
s.fF = 0;
s.qm = [];
s.Hd = "";
s.gy = [];
s.af = [];
s.Aj = k;
s.mN = k;
s.ZM = k;
s.ev = k;
s.Az = k;
s.Pj = 0;
s.id = -1;
s.rics = function(a) {
  if("string" === typeof a) {
    this.qm.push(a)
  }else {
    for(var b = 0;b < a.length;++b) {
      this.qm.push(a[b])
    }
  }
  return this
};
s.JJ = function(a) {
  this.Hd = a;
  this.qm = [];
  for(a = 0;500 > a;++a) {
    this.qm.push("RIC" + a)
  }
  return this
};
s.newsExpression = function() {
  return this
};
s.formattedFields = function(a) {
  for(var b in a) {
    this.gy.push(a[b])
  }
  return this
};
s.rawFields = function(a) {
  for(var b in a) {
    this.af.push(a[b])
  }
  return this
};
s.onUpdate = function(a) {
  this.Aj = a;
  return this
};
s.onNewRow = function(a) {
  this.mN = a;
  return this
};
s.onRemoveRow = function() {
  return this
};
s.onAppend = function(a) {
  this.ZM = a;
  return this
};
s.onInsert = function(a) {
  this.ev = a;
  return this
};
s.onDelete = function(a) {
  this.Az = a;
  return this
};
s.start = function() {
  this.fF = window.setInterval(A(this.bt, this), 1E3);
  this.Cb = i;
  return this
};
s.stop = function() {
  window.clearInterval(this.fF);
  this.Cb = m;
  return this
};
s.sort = function() {
  return this
};
s.filter = function() {
  return this
};
s.bt = function() {
  if(this.rM) {
    var a = {};
    a.tt = 0.5 < Math.random() ? 0 : 1;
    a.urn = "Headline" + this.Pj;
    a.d = (new Date).toString();
    a.t = "00:00:00";
    a.h = "";
    a.ct = 0;
    a.src = "JET proxy";
    a.ht = 0.5 < Math.random() ? 1 : 2;
    a.S = "A quick brown fox jumps over the lazy dog.";
    a.ltr = 1;
    a.tl = [];
    a.rl = [];
    this.ZM(a);
    this.Pj++
  }else {
    var a = {}, b;
    for(b in this.gy) {
      a[this.gy[b]] = {Br:Math.random()}
    }
    for(b in this.af) {
      a[this.af[b]] ? a[this.af[b]].om = Math.random() : a[this.af[b]] = {om:Math.random()}
    }
    if("" !== this.Hd) {
      this.mN(this, this.qm[this.Pj], a, this.Pj), this.Pj === this.qm.length ? (this.Pj = 0, this.Hd = "") : this.Pj++
    }else {
      for(b = 0;1 > b;++b) {
        0.25 < Math.random() || (this.Pj = Math.floor(Math.random() * (this.qm.length - 1)), this.Aj(this, this.qm[this.Pj], a, this.Pj))
      }
    }
  }
};
function qq() {
  this.Dp = i;
  this.Ly = {}
}
x(qq);
s = qq.prototype;
s.Ky = 1E6;
s.Dp = m;
s.Ly = {};
s.init = function(a, b) {
  (this.Dp = b) && JET.init(a)
};
s.Nn = function(a) {
  this.Dp ? JET.Nn(a) : window.setInterval(a, 1E3)
};
function rq() {
  var a = qq.g(), b = a.Ky++, c = k;
  a.Dp ? c = JET.Quotes.create(b) : (c = new pq(m), c.id = b, a.Ly[b] = c);
  return c
}
function sq() {
  var a = qq.g(), b = a.Ky++, c = k;
  a.Dp ? c = JET.News.create(b) : (c = new pq(i), c.id = b, a.Ly[b] = c);
  return c
}
;function tq() {
  qq.g().init({ID:"Toolkit", VI:"StreamingManager"}, i);
  this.Av = 0;
  this.ql = {};
  this.an = [];
  this.Ve = {};
  this.Cb = m;
  this.zg = {};
  this.xk = m;
  this.yq = 0;
  this.Lg = [];
  this.Vs = -1;
  this.dc = {};
  this.ld = {};
  this.start()
}
x(tq);
s = tq.prototype;
s.Av = 0;
s.ql = {};
s.an = [];
s.Ve = {};
s.dc = {};
s.ld = {};
s.Cb = m;
s.Bm = {};
s.zg = {};
s.xk = m;
s.Lg = [];
s.yq = 0;
s.BW = 100;
s.Vs = -1;
s.VD = function(a) {
  return this.ql[a]
};
s.qb = function(a, b) {
  if(a) {
    a.gA(this.Av++);
    b ? this.ql[b] = a : -1 === this.an.indexOf(a) && this.an.push(a);
    var c = a.np();
    if(c) {
      var e = this.Ve[c];
      e === g ? (this.Ve[c] = [], this.Ve[c].push(a), uq(this, c, a.fj(), 0), this.Cb && this.xf([a])) : -1 === e.indexOf(a) && (this.Ve[c].push(a), uq(this, c, a.fj(), 0), this.Cb && this.xf([a]))
    }
  }
};
s.detach = function(a) {
  var b;
  if(a) {
    for(b in this.ql) {
      if(this.ql[b] === a) {
        delete this.ql[b];
        break
      }
    }
    for(b in this.an) {
      if(this.an[b] === a) {
        this.an.splice(b, 1);
        break
      }
    }
    for(b in this.Ve) {
      vq(this, a, b)
    }
    this.Cb && wq(this, [a])
  }
};
s.start = function() {
  qq.g().Nn(A(this.dw, this))
};
s.dw = function() {
  if(!this.Cb) {
    this.Cb = i;
    var a = [], b;
    for(b in this.ql) {
      a.push(this.ql[b])
    }
    for(b in this.an) {
      a.push(this.an[b])
    }
    0 < a.length && this.xf(a)
  }
};
s.stop = function() {
  this.Cb && (this.Cb = m, this.zo())
};
function uq(a, b, c, e) {
  switch(e) {
    case 0:
      a.ld[b] === g ? (a.dc[b] = 1, a.ld[b] = {}) : a.dc[b] += 1;
      a.ld[b][c] = 2;
      break;
    case 1:
      if(a.ld[b] !== g) {
        switch(e = a.ld[b][c], e) {
          case 0:
            e = a.zg[b];
            e !== g && 0 === a.dc[b] && e.resume();
            a.dc[b] += 1;
            a.ld[b][c] = 1;
            break;
          case 3:
            a.dc[b] += 1, a.ld[b][c] = 2
        }
      }
      break;
    case 2:
      if(a.ld[b] !== g) {
        switch(e = a.ld[b][c], e) {
          case 1:
            a.dc[b] -= 1;
            a.ld[b][c] = 0;
            e = a.zg[b];
            e !== g && 0 === a.dc[b] && e.pause();
            break;
          case 2:
            a.dc[b] -= 1, a.ld[b][c] = 3
        }
      }
      break;
    case 3:
      if(a.ld[b] !== g) {
        switch(e = a.ld[b][c], e) {
          case 2:
            a.dc[b] -= 1;
            a.ld[b][c] = 1;
            e = a.zg[b];
            e !== g && 0 === a.dc[b] && e.pause();
            break;
          case 3:
            a.dc[b] -= 1, a.ld[b][c] = 0, e = a.zg[b], e !== g && 0 === a.dc[b] && e.pause()
        }
      }
      break;
    case 4:
      if(a.ld[b] !== g) {
        switch(e = a.ld[b][c], e) {
          case 1:
            a.dc[b] -= 1;
            e = a.zg[b];
            e !== g && 0 === a.dc[b] && e.stop();
            break;
          case 2:
            a.dc[b] -= 1, e = a.zg[b], e !== g && 0 === a.dc[b] && e.stop()
        }
      }
  }
}
s.xf = function(a) {
  if(a === k || a === g) {
    return[]
  }
  var b, c;
  b = 0;
  for(c = a.length;b < c;b++) {
    var e = a[b], f = e.rn(), h = e.gn(), j = e.qn(), l = e.np();
    if(h && 0 !== h.length || j && 0 !== j.length) {
      if(l) {
        var n = e, o = l, u = h, t = j, l = {}, v = g, y = v = g, J = g, M = g, oa = g;
        l[o] = {chain:o, rawFields:[], formattedFields:[]};
        (u || t) && xq(this, o, n);
        if(u) {
          for(J in u) {
            v = u[J], y = l[o], ab(y.formattedFields, v) || y.formattedFields.push(v)
          }
        }
        if(t) {
          for(J in t) {
            v = t[J], y = l[o], ab(y.rawFields, v) || y.rawFields.push(v)
          }
        }
        n = g;
        for(n in l) {
          try {
            var Q = l[n];
            (oa = this.zg[n]) ? (oa.stop(), oa.formattedFields(Q.formattedFields).rawFields(Q.rawFields)) : (oa = rq().JJ(n).formattedFields(Q.formattedFields).rawFields(Q.rawFields).onUpdate(A(this.Aj, this)).onNewRow(A(this.CU, this)).onRemoveRow(A(this.HU, this)), M = oa.id, this.Bm[M] = n, this.zg[n] = oa);
            oa.start()
          }catch(ia) {
            fh.g().log("StreamingManager.Subscribe - Error subscribing to JET: " + ia)
          }
        }
      }
      f && yq(this, e, f, h, j)
    }
  }
};
s.Nz = function() {
  var a = 0;
  if(this.Cb) {
    for(;a < this.BW && this.yq < this.Lg.length;) {
      var b = this.Lg[this.yq++], c;
      try {
        var e = b.ric;
        (c = this.zg[e]) ? (c.stop(), c.formattedFields(b.formattedFields).rawFields(b.rawFields)) : (c = rq().rics(e).formattedFields(b.formattedFields).rawFields(b.rawFields).onUpdate(A(this.Aj, this)), this.Bm[c.id] = e, this.zg[e] = c);
        c.start()
      }catch(f) {
        fh.g().log("StreamingManager.Subscribe - Error subscribing to JET: " + f)
      }
      a++
    }
    this.yq < this.Lg.length ? this.Vs = setTimeout(A(this.Nz, this), 1E3) : (this.yq = 0, this.Lg = [], this.Vs = -1)
  }else {
    this.Vs = setTimeout(A(this.Nz, this), 100)
  }
};
function yq(a, b, c, e, f) {
  var h = {}, j, l, n, o;
  for(n = 0;n < c.length;++n) {
    var u = c[n];
    if(u) {
      h[u] || (h[u] = {ric:u, rawFields:[], formattedFields:[], drm:b});
      (e || f) && xq(a, u, b);
      if(e) {
        for(o in e) {
          j = e[o], l = h[u], ab(l.formattedFields, j) || l.formattedFields.push(j)
        }
      }
      if(f) {
        for(o in f) {
          j = f[o], l = h[u], ab(l.rawFields, j) || l.rawFields.push(j)
        }
      }
    }
  }
  for(var t in h) {
    a.Lg.push(h[t])
  }
  -1 === a.Vs && 0 < a.Lg.length && (200 >= a.Lg.length ? a.Nz() : a.Vs = setTimeout(A(a.Nz, a), 100))
}
function xq(a, b, c) {
  var e = a.Ve[b];
  e ? -1 === e.indexOf(c) && e.push(c) : a.Ve[b] = [c];
  uq(a, b, c.fj(), 0)
}
function wq(a, b) {
  for(var c, e = b.length - 1;0 <= e;e--) {
    var f = b[e], h = f.np(), j = f.rn();
    if(h && (c = a.Ve[h])) {
      vq(a, f, h), 0 == c.length && a.cp(h)
    }
    if(j) {
      for(var l in j) {
        if(h = j[l], c = a.Ve[h]) {
          vq(a, f, h), 0 == c.length && a.cp(h)
        }
      }
    }
  }
}
s.Ys = function(a) {
  for(var b = 0, c = a.length;b < c;b++) {
    var e = a[b];
    if(e != g && e != k) {
      e.stop();
      var f = this.Bm[e.id];
      delete this.Ve[f];
      delete this.Bm[e.id];
      delete this.zg[f];
      delete this.dc[f];
      delete this.ld[f]
    }
  }
};
s.zo = function() {
  for(var a in this.Bm) {
    var b;
    b = qq.g();
    var c = a;
    (b = b.Dp ? JET.Quotes.get(c) : b.Ly[c]) && this.Ys(b)
  }
};
s.ba = function() {
  this.xk = i;
  this.zo();
  delete this.Ve;
  delete this.Bm;
  delete this.ql;
  delete this.dc;
  delete this.ld
};
s.Ku = q("xk");
function vq(a, b, c) {
  for(var e = a.Ve[c], f = 0, h = e.length;f < h;f++) {
    if(e[f] === b) {
      e.splice(f, 1);
      break
    }
  }
  uq(a, c, b.fj(), 4);
  delete a.ld[c][b.fj()]
}
s.cp = function(a) {
  var b = this.zg[a], a = this.Lg.indexOf(a);
  b ? this.Ys([b]) : -1 !== a && this.Lg.splice(a, 1, 0)
};
s.ag = function(a, b, c) {
  for(var a = a.fj(), e, f = 0;f < b.length;++f) {
    e = b[f], this.zg[e] === g && uq(this, e, a, 0), uq(this, e, a, c[f] ? 1 : 0)
  }
};
function zq(a, b, c) {
  for(var e in c) {
    var f = c[e], h = a.Ve[f];
    h && (vq(a, b, f), 0 == h.length && a.cp(f))
  }
}
s.Aj = function(a, b, c) {
  var a = this.Bm[a.id], e = this.Ve[a];
  if(e !== g) {
    if(c.Fo) {
      4 === c.Fo.om && this.cp(a)
    }else {
      for(var f = 0;f < e.length;++f) {
        var h = e[f];
        if(this.ld[a] !== g) {
          var j = this.ld[a][h.fj()];
          j && (h.Fq(b, c), 2 <= j && uq(this, a, h.fj(), 3))
        }
      }
    }
  }
};
s.CU = function(a, b, c) {
  var e = this.Bm[a.id], a = this.Ve[e];
  if(a !== g) {
    if(c.Fo) {
      4 === c.Fo.om && this.cp(e)
    }else {
      for(e = 0;e < a.length;++e) {
        a[e].Qq(b, c)
      }
    }
  }
};
s.HU = function(a, b, c) {
  var e = this.Bm[a.id], a = this.Ve[e];
  if(a !== g) {
    if(c.Fo) {
      4 === c.Fo.om && this.cp(e)
    }else {
      for(c = 0;c < a.length;++c) {
        a[c].uv(b)
      }
    }
  }
};
function Aq(a, b, c) {
  mq.call(this, a, b);
  b.IK.push(this);
  this.clear();
  this.j = c;
  this.ha = c.getName() + "_" + b.getName();
  this.eb = [];
  this.af = [];
  this.cy = {};
  this.Pz = {};
  this.Hd = b.Hd;
  this.Xd = {};
  this.O = {};
  a = this.j.Sd();
  b = [];
  for(c = 0;c < a.length;++c) {
    var e = this.j.gk(a[c]);
    if(e.kf === Bq) {
      b.push(e)
    }else {
      if(e.kf === Cq) {
        window.console.error("This table already contains a streaming identifier column. There can be only one of them in each control.");
        return
      }
    }
  }
  tq.g().qb(this, this.j);
  0 < b.length && Dq(this, b)
}
C(Aq, mq);
s = Aq.prototype;
s.ba = function() {
  tq.g().detach(this)
};
s.Tf = function(a) {
  if(a !== g && a !== k) {
    return this.Sk(a)
  }
  this.clear();
  return i
};
s.Fq = function(a, b) {
  this.Qq(a, b)
};
s.Qq = function(a, b) {
  if(a) {
    var c = [this.Yc.getName()], e = [a], f, h, j;
    for(f = 0;f < this.eb.length;++f) {
      h = this.eb[f], j = b[h], j !== k && j !== g && (c.push(this.cy[h]), e.push(j.Br))
    }
    for(f = 0;f < this.af.length;++f) {
      h = this.af[f], j = b[h], j !== k && j !== g && (c.push(this.Pz[h]), e.push(j.om))
    }
    f = this.Xd[a];
    f === g ? (this.Xd[a] = -1, this.j.rt(e, c)) : this.j.dl(f, e, c)
  }
};
s.uv = function(a) {
  a && this.j.Ds(this.Xd[a])
};
s.gn = q("eb");
s.qn = q("af");
s.rn = function() {
  return this.ge()
};
s.np = q("Hd");
s.fj = q("ha");
s.gA = ba("ha");
s.Sk = function(a) {
  this.clear();
  for(var b = this.G.Qe(), c = 0;c < b.length && c < a.length;c++) {
    var e = a[c].toString(), f = b[c];
    this.O[f] = e;
    this.Xd[e] = f
  }
  tq.g().xf([this]);
  return i
};
s.ka = function(a, b) {
  b = b.toString();
  if(this.O[a] !== b) {
    var c = this.O[a].toString();
    zq(tq.g(), this, [c]);
    delete this.O[c];
    this.O[a] = b;
    this.O[b] = a;
    c = tq.g();
    yq(c, this, [b], this.gn(), this.qn());
    return i
  }
  return m
};
s.Qs = function(a) {
  if(!(0 > a)) {
    var b = this.G.count();
    if(b !== a && b > a) {
      wq(tq.g(), [this]);
      a = this.G.jk(a, b - a);
      for(b = 0;b < a.length;++b) {
        this.Fg(a[b]);
        var c = a[b], e = this.O[c].toString();
        delete this.O[c];
        delete this.Xd[e]
      }
      tq.g().xf([this])
    }
  }
};
s.Ov = function(a) {
  if(!(0 > a)) {
    var b = this.G.count();
    if(b !== a && b > a) {
      wq(tq.g(), [this]);
      a = this.G.jk(0, b - a);
      for(b = 0;b < a.length;++b) {
        this.Fg(a[b]);
        var c = a[b], e = this.O[c].toString();
        delete this.O[c];
        delete this.Xd[e]
      }
      tq.g().xf([this])
    }
  }
};
s.Vj = function(a, b) {
  b = b.toString();
  if(-1 !== this.Xd[b]) {
    this.O[a] = b;
    this.Xd[b] = a;
    var c = tq.g();
    yq(c, this, [b], this.gn(), this.qn())
  }else {
    this.O[a] = b, this.Xd[b] = a
  }
};
s.ne = p();
s.Hu = function(a, b, c) {
  this.Vj(b, c)
};
s.Gu = p();
s.Fg = function(a) {
  if(this.O[a] !== g) {
    var b = this.O[a].toString();
    delete this.O[a];
    delete this.Xd[b];
    zq(tq.g(), this, [b])
  }
};
s.clear = function() {
  zq(tq.g(), this, this.rn());
  this.O = {};
  this.Xd = {}
};
s.xh = p();
s.I = function(a) {
  if(this.G.If(a)) {
    return a = this.O[a], a !== g ? a : this.ue
  }
};
s.ge = function() {
  for(var a = [], b = this.G.Qe(), c = 0;c < b.length;c++) {
    var e = this.O[b[c]];
    a.push(e !== g ? e : this.ue)
  }
  return a
};
function Dq(a, b) {
  if(b) {
    for(var c = 0;c < b.length;++c) {
      var e = b[c].Jl();
      b[c].Cp ? -1 === a.af.indexOf(e) && (a.af.push(e), a.Pz[e] = b[c].getName()) : -1 === a.eb.indexOf(e) && (a.eb.push(e), a.cy[e] = b[c].getName())
    }
    tq.g().xf([a])
  }
}
s.j = k;
s.eb = k;
s.af = k;
s.cy = k;
s.Pz = k;
s.Hd = "";
s.Xd = k;
s.O = k;
s.ha = k;
function Eq(a, b) {
  mq.call(this, a, b);
  this.clear()
}
C(Eq, mq);
s = Eq.prototype;
s.O = k;
s.Tf = function(a) {
  if(a !== g && a !== k) {
    return this.Sk(a)
  }
  this.clear();
  return i
};
s.ge = function() {
  for(var a = [], b = this.G.Qe(), c = 0;c < b.length;c++) {
    var e = this.O[b[c]];
    a.push(e !== g ? e : this.ue)
  }
  return a
};
s.Sk = function(a) {
  this.clear();
  for(var b = this.G.Qe(), c = 0;c < b.length && c < a.length;c++) {
    var e = a[c];
    this.yk && (e = kq(this.Zc, e));
    this.O[b[c]] = e
  }
  return i
};
s.I = function(a) {
  if(this.G.If(a)) {
    return a = this.O[a], a !== g ? a : this.ue
  }
};
s.ka = function(a, b) {
  this.yk && (b = kq(this.Zc, b));
  return this.O[a] !== b ? (this.O[a] = b, i) : m
};
s.Vj = function(a, b) {
  this.yk && (b = kq(this.Zc, b));
  this.O[a] = b
};
s.ne = p();
s.Hu = function(a, b, c) {
  this.Vj(b, c)
};
s.Gu = p();
s.Fg = function(a) {
  delete this.O[a]
};
s.Qs = function(a) {
  if(!(0 > a)) {
    var b = this.G.count();
    if(b !== a && b > a) {
      a = this.G.jk(a, b - a);
      for(b = 0;b < a.length;++b) {
        delete this.O[a[b]]
      }
    }
  }
};
s.Ov = function(a) {
  if(!(0 > a)) {
    var b = this.G.count();
    if(b !== a && b > a) {
      a = this.G.jk(0, b - a);
      for(b = 0;b < a.length;++b) {
        delete this.O[a[b]]
      }
    }
  }
};
s.clear = function() {
  this.O = {}
};
s.xh = p();
function Fq(a, b, c) {
  Eq.call(this, a, b);
  this.clear();
  this.j = c;
  (a = tq.g().VD(this.j)) && Dq(a, [this.Yc])
}
C(Fq, Eq);
Fq.prototype.ba = function() {
  for(var a = tq.g().VD(this.j), b = [this.Yc], c = 0;c < b.length;++c) {
    var e = b[c].Jl();
    if(b[c].Cp) {
      var f = a.af.indexOf(e);
      -1 !== f && (a.af.splice(f, 1), delete a.Pz[e])
    }else {
      f = a.eb.indexOf(e), -1 !== f && (a.eb.splice(f, 1), delete a.cy[e])
    }
  }
  tq.g().xf([a])
};
Fq.prototype.j = k;
function Gq(a) {
  ij.call(this, a)
}
C(Gq, dk);
function Hq(a, b) {
  ek.call(this, a, b);
  this.fy = new yh(this.ib, "Focused");
  this.dx = new yh(this.ib, "Blurred")
}
C(Hq, ek);
H.g().z("tr.core.Behavior", Hq);
s = Hq.prototype;
s.M = Gq.prototype;
s.a = function() {
  return Hq.e.a.call(this)
};
s.fy = k;
s.dx = k;
s.qb = function() {
  if(!this.ua) {
    this.ua = i;
    var a = k;
    ma(this.Ia().na) && (a = this.Ia().na());
    a || (a = this.Ia().b());
    G(a, "focus", this.xs, m, this);
    G(a, "blur", this.zz, m, this)
  }
};
s.detach = function() {
  if(this.ua) {
    this.ua = m;
    var a = k;
    ma(this.Ia().na) && (a = this.Ia().na());
    a || (a = this.Ia().b());
    Ve(a, "focus", this.xs, m, this);
    Ve(a, "blur", this.zz, m, this)
  }
};
s.xs = function(a) {
  $e(this.fy.B) && (a.aa = this.ib, this.fy.v(a), a.stopPropagation())
};
s.zz = function(a) {
  $e(this.dx.B) && (a.aa = this.ib, this.dx.v(a), a.stopPropagation())
};
s.XR = q("fy");
Hq.prototype.getFocusedEvent = Hq.prototype.XR;
Hq.prototype.DR = q("dx");
Hq.prototype.getBlurredEvent = Hq.prototype.DR;
function Iq(a) {
  ij.call(this, a)
}
C(Iq, dk);
function Jq(a, b) {
  ek.call(this, a, b);
  this.wb = new yh(this.ib, "Clicked")
}
C(Jq, ek);
Jq.prototype.M = Iq.prototype;
Jq.prototype.wg = r("ClickBehavior");
Jq.prototype.a = function() {
  return Jq.e.a.call(this)
};
H.g().z("ClickBehavior", Jq);
s = Jq.prototype;
s.wb = k;
s.qb = function() {
  if(!this.ua) {
    this.ua = i;
    var a = this.Ia().b();
    G(a, "click", this.bN, m, this)
  }
};
s.detach = function() {
  if(this.ua) {
    this.ua = m;
    var a = this.Ia().b();
    Ve(a, "click", this.bN, m, this)
  }
};
s.bN = function(a) {
  $e(this.wb.B) && (a.aa = this.ib, this.wb.v(a), a.stopPropagation())
};
s.xd = q("wb");
Jq.prototype.getClickedEvent = Jq.prototype.xd;
function Kq(a) {
  ij.call(this, a);
  a.hasOwnProperty("formulaExpression") && (this.PD = a.formulaExpression);
  a.hasOwnProperty("property") && (this.Eg = a.property)
}
C(Kq, dk);
Kq.prototype.PD = "";
Kq.prototype.Eg = "";
function Lq(a, b) {
  this.Bd(new Kq(a));
  ek.call(this, this.a(), b);
  this.Bd(new Kq(a));
  this.GG = "set" + this.a().Eg[0].toUpperCase() + this.a().Eg.substring(1);
  var c = {};
  this.fk = iq(wo.g(), this.a().PD, c);
  this.yo = this.js = m;
  this.Ce = [];
  this.Te = i;
  this.Rl = m;
  this.Np = {};
  this.xj = {};
  var e = {}, f, h;
  for(h in c) {
    var j = c[h];
    if((f = Ao(j)) !== k) {
      e[j] = f
    }else {
      if((f = vo(j, k)) !== k) {
        e[j] = f
      }
    }
  }
  this.fg = {};
  this.Zp = {};
  if(e !== g) {
    this.fg = e;
    for(var l in this.fg) {
      this.fg[l].As(this, this.Dq), this.Zp[this.fg[l].rp()] = l
    }
  }
}
C(Lq, ek);
H.g().z("FormulaBehavior", Lq);
s = Lq.prototype;
s.GG = "";
s.gL = function() {
  return this.a().PD
};
s.setProperty = function(a) {
  this.a().Eg = a;
  this.GG = "set" + this.a().Eg[0].toUpperCase() + this.a().Eg.substring(1)
};
s.rp = q("FN");
s.Wm = function() {
  this.Te && (this.hc = this.fk.evaluate(this), this.Te = m);
  return this.hc
};
s.As = function(a, b) {
  this.Ce.push({f:b, o:a})
};
s.Dq = function(a, b) {
  if(!a.Rl) {
    a.Rl = i;
    a.Te = i;
    a.yo && Go(a.fk, [a.Zp[b]], a);
    if(!a.js) {
      a.ib[a.GG](a.Wm())
    }
    for(var c = 0;c < a.Ce.length;++c) {
      var e = a.Ce[c];
      e.f(e.o, a.FN)
    }
    a.Rl = m
  }
};
s.mk = function(a) {
  a = this.fg[a];
  try {
    return a.mk(-1)
  }catch(b) {
    d(b)
  }
  d("!REF#")
};
s.Yy = q("yo");
s.Jy = function(a) {
  return a === g ? this.Te : this.xj[a] === g || this.xj[a]
};
s.Sz = function(a) {
  a === g ? this.Te = m : this.xj[a] = m
};
s.uA = function(a) {
  a === g ? this.Te = i : this.xj[a] = i
};
s.ky = function(a) {
  return this.Np[a]
};
s.dA = function(a, b) {
  this.Np[a] = b
};
s.FN = k;
s.hc = k;
s.Ce = [];
s.fk = k;
s.Te = m;
s.Rl = m;
s.fg = {};
s.Zp = {};
s.Np = {};
s.xj = {};
s.js = m;
s.yo = m;
function Mq(a) {
  ij.call(this, a)
}
C(Mq, dk);
function Nq(a, b) {
  ek.call(this, a, b);
  this.Sx = new yh(this.ib, "DoubleClicked")
}
C(Nq, ek);
Nq.prototype.M = Mq.prototype;
Nq.prototype.wg = r("DoubleClickBehavior");
Nq.prototype.a = function() {
  return Nq.e.a.call(this)
};
H.g().z("DoubleClickBehavior", Nq);
s = Nq.prototype;
s.Sx = k;
s.qb = function() {
  if(!this.ua) {
    this.ua = i;
    var a = this.Ia().b();
    G(a, "dblclick", this.eN, m, this)
  }
};
s.detach = function() {
  if(this.ua) {
    this.ua = m;
    var a = this.Ia().b();
    Ve(a, "dblclick", this.eN, m, this)
  }
};
s.eN = function(a) {
  $e(this.Sx.B) && (a.aa = this.ib, this.Sx.v(a), a.stopPropagation())
};
s.TR = q("Sx");
Nq.prototype.getDoubleClickedEvent = Nq.prototype.TR;
function Oq() {
}
x(Oq);
Oq.prototype.ga = {};
function Pq(a, b) {
  if(w(b)) {
    if(!b.a().Pu) {
      return Qq(a, b)
    }
    var c = b.a().ax;
    w(c) && !w(a.ga[c]) && (a.ga[c] = {source:b})
  }
}
function Qq(a, b) {
  if(w(b)) {
    if(b.a().Pu) {
      return Pq(a, b)
    }
    var c = b.a().ax;
    w(c) && (w(a.ga[c].wc) || (a.ga[c].wc = []), a.ga[c].wc.push(b))
  }
}
;function Rq(a) {
  ij.call(this, a);
  a.hasOwnProperty("bindingId") && (this.ax = a.bindingId);
  a.hasOwnProperty("converter") && (this.$j = a.converter);
  a.hasOwnProperty("event") && (this.event = a.event);
  a.hasOwnProperty("isSource") && (this.Pu = a.isSource);
  a.hasOwnProperty("property") && (this.Eg = a.property)
}
C(Rq, dk);
s = Rq.prototype;
s.ax = "";
s.$j = "";
s.event = "";
s.Pu = m;
s.Eg = "";
function Sq(a, b) {
  ek.call(this, a, b);
  a.hasOwnProperty("converter") && (this.vl = Kj.g().create(a.converter))
}
C(Sq, ek);
Sq.prototype.M = Rq.prototype;
H.g().z("SimpleBindingBehavior", Sq);
s = Sq.prototype;
s.vl = k;
s.wg = r("SimpleBindingBehavior");
s.a = function() {
  return Sq.e.a.call(this)
};
s.dL = function() {
  return this.a().event
};
s.ly = function() {
  return this.a().$j
};
s.qb = function() {
  if(!this.ua) {
    if(this.ua = i, this.a().Pu) {
      var a = "get" + this.a().event;
      w(this.Ia()[a]) && (a = this.Ia()[a](), w(a) && a.i(this.fN, this));
      Pq(Oq.g(), this)
    }else {
      Qq(Oq.g(), this)
    }
  }
};
s.detach = function() {
  if(this.ua && (this.ua = m, this.a().Pu)) {
    var a = "get" + this.a().event;
    w(this.Ia()[a]) && (a = this.Ia()[a](), w(a) && a.H(this.fN, this))
  }
};
s.fN = function(a) {
  var a = this.vl.ul(a), b;
  b = Oq.g().ga[this.a().ax];
  if(w(b) && (b = b.wc, w(b))) {
    for(var c = 0;c < b.length;c++) {
      var e = b[c], f = e.vl.ul({Tabs:e.Ia(), index:a});
      if(w(f)) {
        var h = e.Ia(), e = "set" + e.a().Eg;
        if(w(h) && w(h[e])) {
          h[e](f)
        }
      }
    }
  }
};
function Tq(a) {
  ij.call(this, a);
  a.hasOwnProperty("type") && (this.type = a.type);
  a.hasOwnProperty("ric") && (this.Fs = a.ric);
  a.hasOwnProperty("field") && (this.field = a.field);
  a.hasOwnProperty("target") && (this.target = a.target);
  a.hasOwnProperty("converter") && (this.$j = Kj.g().create(a.converter));
  a.hasOwnProperty("highlightOnChange") && (this.JL = a.highlightOnChange);
  a.hasOwnProperty("highlightDuration") && (this.IL = a.highlightDuration)
}
C(Tq, dk);
s = Tq.prototype;
s.type = "";
s.Fs = "";
s.field = "";
s.target = "";
s.JL = i;
s.IL = 0;
s.$j = k;
function Nj(a, b) {
  this.Bd(new Tq(a));
  ek.call(this, this.a(), b);
  this.Bd(new Tq(a));
  this.Lo = Uq++
}
C(Nj, ek);
H.g().z("StreamingDataBehavior", Nj);
s = Nj.prototype;
s.Lo = 0;
s.Jl = function() {
  return this.a().field
};
s.wy = function() {
  return this.a().target
};
s.CH = function(a) {
  this.a().target = a
};
s.ly = function() {
  return this.a().$j
};
s.wg = function() {
  return this.a().type
};
s.qb = function() {
  w(this.a().Fs) && 0 < this.a().Fs.length && w(this.a().field) && 0 < this.a().field.length && !this.ua && (this.ua = i, this.mm = {ric:this.a().Fs, field:this.a().field}, Wi.g().qb(this))
};
s.detach = function() {
  this.ua && (Wi.g().detach(this), this.ua = m)
};
var Uq = 0;
function Vq(a) {
  ij.call(this, a);
  a.hasOwnProperty("linkType") && (this.HF = a.linkType);
  a.hasOwnProperty("value") && (this.value = a.value)
}
C(Vq, dk);
Vq.prototype.HF = "URL";
Vq.prototype.value = "";
function Wq(a, b) {
  ek.call(this, a, b)
}
C(Wq, ek);
Wq.prototype.M = Vq.prototype;
Wq.prototype.a = function() {
  return Wq.e.a.call(this)
};
H.g().z("LinkBehavior", Wq);
s = Wq.prototype;
s.wg = r("LinkBehavior");
s.I = function() {
  return this.a().value
};
s.ka = function(a) {
  this.a().value = a
};
s.qb = function() {
  if(!this.ua) {
    this.ua = i;
    var a = this.Ia();
    if(a = a.bL ? a.bL() : a.b()) {
      G(a, "mousedown", A(this.dv, this), i), G(a, "mouseover", A(this.zU, this), i), G(a, "mouseout", A(this.tG, this), i), this.eD = a.style.cursor
    }
  }
};
s.eD = "";
s.zU = function(a) {
  this.eD = a.currentTarget.style.cursor;
  a.currentTarget.style.cursor = "pointer"
};
s.tG = function(a) {
  a.currentTarget.style.cursor = this.eD
};
s.dv = function(a) {
  if("0" == a.button) {
    a.stopPropagation();
    a.preventDefault();
    var a = this.I(), b = this.a().HF.toLowerCase();
    "url" == b ? window.location.href = a : "eikon" == b ? w(a) && 0 < a.length && (a = JSON.parse(a), JET.navigate(a)) : "entity" == b || "company" == b ? window.location.assign(a) : d("Link type " + this.a().HF + " not implemented.")
  }
};
s.detach = function() {
  this.ua && (this.ua = m, Ve(this.Ia().b(), "mousedown", this.dv, i))
};
function Xq(a) {
  ij.call(this, a);
  a.hasOwnProperty("imageURL") && (this.Ap = a.imageURL);
  a.hasOwnProperty("isVisible") && (this.w = a.isVisible);
  a.hasOwnProperty("position") && (this.position = a.position)
}
C(Xq, dk);
Xq.prototype.Ap = "";
Xq.prototype.w = i;
Xq.prototype.position = 0;
function Yq(a, b) {
  ek.call(this, a, b);
  this.wb = new yh(this.ib, "Clicked");
  this.ib.pn().i(this.aQ, this);
  this.wb.nL().i(this.KM, this)
}
C(Yq, ek);
Yq.prototype.M = Xq.prototype;
Yq.prototype.wg = r("OverlayBehavior");
Yq.prototype.a = function() {
  return Yq.e.a.call(this)
};
H.g().z("OverlayBehavior", Yq);
s = Yq.prototype;
s.We = k;
s.gr = k;
s.wb = k;
s.uH = function(a) {
  this.a().position = a;
  switch(a) {
    case 0:
      ob(this.We, "etk-overlaybehavior-image-right", "etk-overlaybehavior-image-left");
      break;
    case 1:
      ob(this.We, "etk-overlaybehavior-image-left", "etk-overlaybehavior-image-right")
  }
};
s.ob = function() {
  return Yq.e.ob.call(this)
};
s.Y = function(a) {
  Yq.e.Y.call(this, a);
  Cd(this.We, a)
};
s.qb = function() {
  if(!this.ua) {
    this.ua = i;
    this.gr === k && (this.gr = Ac("div", "etk-overlaybehavior-container"), Ic(this.gr, this.Ia().b()), this.gr.appendChild(this.Ia().b()));
    var a = "";
    switch(this.a().position) {
      case 0:
        a = "etk-overlaybehavior-image-left";
        break;
      case 1:
        a = "etk-overlaybehavior-image-right"
    }
    this.We = Ac("img", a);
    this.We.src = this.a().Ap;
    this.gr.appendChild(this.We);
    G(this.We, "click", this.dv, m, this);
    this.KM()
  }
};
s.detach = function() {
  this.ua && (this.ua = m, Ve(this.We, "mousedown", this.dv, m, this), Kc(this.We), this.We = k)
};
s.dv = function(a) {
  $e(this.wb.B) && "0" == a.button && (a.aa = this, this.wb.v(a), a.stopPropagation())
};
s.aQ = function(a) {
  this.ua && "Visible" === a.ju() && Cd(this.gr, this.ib.ob())
};
s.xd = q("wb");
Yq.prototype.getClickedEvent = Yq.prototype.xd;
Yq.prototype.KM = function() {
  $e(this.wb.B) ? E(this.We, "etk-overlaybehavior-noclick") : D(this.We, "etk-overlaybehavior-noclick")
};
function Zq(a) {
  ij.call(this, a);
  a.hasOwnProperty("isClickSelection") && (this.lF = a.isClickSelection);
  a.hasOwnProperty("isEnterSelection") && (this.pF = a.isEnterSelection);
  a.hasOwnProperty("isFocusSelection") && (this.mM = a.isFocusSelection)
}
C(Zq, dk);
Zq.prototype.lF = i;
Zq.prototype.pF = m;
Zq.prototype.mM = m;
function $q(a, b) {
  ek.call(this, a, b)
}
C($q, ek);
$q.prototype.M = Zq.prototype;
$q.prototype.wg = r("TextSelectionBehavior");
$q.prototype.a = function() {
  return $q.e.a.call(this)
};
H.g().z("TextSelectionBehavior", $q);
s = $q.prototype;
s.qk = m;
s.uf = function() {
  this.qk = i
};
s.kh = function() {
  this.qk = m
};
s.qb = function() {
  if(!this.ua) {
    this.ua = i;
    var a = this.Ia();
    if(a.Xe()) {
      var b = a.na();
      b && this.a().lF && G(b, "mousedown", this.Be, m, this);
      (a = a.nn()) && this.a().pF && G(a, "key", this.Ez, m, this);
      G(b, "focus", A(this.uf, this), m, this);
      G(b, "blur", A(this.kh, this), m, this)
    }
  }
};
s.detach = function() {
  if(this.ua) {
    this.ua = m;
    var a = this.Ia();
    if(a.Xe()) {
      var b = a.na();
      b && this.a().lF && Ve(b, "mousedown", this.Be, m, this);
      (a = a.nn()) && this.a().pF && Ve(a, "key", this.Ez, m, this);
      Ve(a, "focus", this.uf, m, this);
      Ve(a, "blur", this.kh, m, this)
    }
  }
};
s.Be = function(a) {
  var b = this.Ia().na();
  b && ma(b.select) && (this.a().mM ? (b.select(), a.preventDefault()) : this.qk || (b.select(), a.preventDefault()))
};
s.Ez = function(a) {
  13 == a.keyCode && (a = this.Ia().na()) && ma(a.select) && a.select()
};
function Yj() {
}
x(Yj);
Yj.prototype.Lf = {};
Yj.prototype.z = function(a, b) {
  this.Lf.hasOwnProperty(a) && d("BehaviorFactory has already registered type " + a);
  this.Lf[a] = b
};
Yj.prototype.create = function(a, b) {
  var c = k, e = a.type;
  "StreamingDataBehavior" === e ? c = new Nj(a, b) : "SnapshotBehavior" === e ? c = new Lj(a, b) : "LayoutBehavior" === e ? c = new fk(a, b) : "ComponentFrameBehavior" === e ? c = new sk(a, b) : "WidgetLayoutBehavior" == e ? c = new gk(a, b) : "LinkBehavior" == e ? c = new Wq(a, b) : "OverlayBehavior" == e ? c = new Yq(a, b) : "DoubleClickBehavior" == e ? c = new Nq(a, b) : "ClickBehavior" == e ? c = new Jq(a, b) : "SimpleBindingBehavior" == e ? c = new Sq(a, b) : "FocusedBehavior" == e ? c = new Hq(a, 
  b) : "TextSelectionBehavior" == e ? c = new $q(a, b) : "FormulaBehavior" == e ? c = new Lq(a, b) : "ServerControlBindingBehavior" == e && (c = new ar(a, b));
  return c
};
function br(a, b) {
  this.Ta = a;
  this.Zc = a.Zc;
  this.hc = a.ue;
  this.JD = a.getName();
  this.ha = b
}
s = br.prototype;
s.ga = k;
s.hc = k;
s.JD = "";
s.Zc = 2;
s.ha = k;
s.Ta = k;
s.getName = r("DataCell");
s.zi = p();
s.rc = r("");
s.Vb = p();
s.ob = r(i);
s.Y = p();
s.P = r("0");
s.Pb = function() {
  this.ga || (this.ga = new Tj);
  return this.ga
};
s.Nl = function() {
  return br.e.Nl.call(this)
};
s.I = q("hc");
s.ka = function(a) {
  a = kq(this.Zc, a);
  this.hc !== a && (this.hc = a, this.Ta !== g && this.Ta !== k && nq(this.Ta, this.ha))
};
s.pn = r(k);
s.Ib = k;
s.wm = ba("Ib");
s.tp = q("Ib");
s.Xe = r(m);
s.ei = r(i);
function cr() {
  this.clear()
}
s = cr.prototype;
s.Mc = k;
s.fm = k;
s.Wj = k;
s.add = function(a, b) {
  if(this.If(a)) {
    return-1
  }
  var c = this.Wj.push(b) - 1;
  this.Mc[a] = b;
  this.fm = k;
  return c
};
s.Uy = function(a, b, c) {
  if(this.If(b) || 0 > a || a > this.Wj.length) {
    return m
  }
  this.Wj.splice(a, 0, c);
  this.Mc[b] = c;
  this.fm = k;
  return i
};
s.remove = function(a) {
  if(!this.If(a)) {
    return-1
  }
  var b = this.Wj.indexOf(this.Mc[a]);
  this.Wj.splice(b, 1);
  delete this.Mc[a];
  this.fm = k;
  return b
};
s.getItem = function(a) {
  return this.Mc[a]
};
s.Hc = function(a) {
  return this.Wj[a]
};
function dr(a) {
  if(a.fm === k) {
    a.fm = [];
    for(var b in a.Mc) {
      a.fm.push(b)
    }
  }
  return a.fm
}
s.setItem = function(a, b) {
  if(!this.If(a)) {
    return m
  }
  this.Wj[this.Wj.indexOf(this.Mc[a])] = b;
  this.Mc[a] = b;
  this.fm = k;
  return i
};
s.If = function(a) {
  return this.Mc[a] !== g
};
s.count = function() {
  return this.Wj.length
};
s.clear = function() {
  this.Mc = {};
  this.Wj = [];
  this.fm = k
};
function er(a, b, c) {
  mq.call(this, b, c);
  this.eb = a;
  this.clear()
}
C(er, mq);
s = er.prototype;
s.O = k;
s.eb = k;
s.ba = function() {
  er.e.ba.call(this);
  this.clear()
};
s.Tf = function() {
  this.clear();
  for(var a = this.G.Qe(), b = 0;b < a.length;b++) {
    this.ne(a[b])
  }
  return i
};
s.ge = function() {
  for(var a = [], b = this.G.Qe(), c = 0;c < b.length;c++) {
    var e = this.O[b[c]];
    a.push(e !== g ? e.I() : this.ue)
  }
  return a
};
s.Sk = r(m);
s.I = function(a) {
  a = this.O[a];
  return a !== g ? a.I() : this.ue
};
s.ka = r(m);
s.Vj = function(a) {
  this.ne(a)
};
s.ne = function(a) {
  var b = this.VC(a);
  this.O[a] = b
};
s.Fg = function(a) {
  var b = this.O[a];
  b !== g && (fr(b), delete this.O[a])
};
s.Qs = function(a) {
  if(!(0 > a)) {
    var b = this.G.count();
    if(b !== a && !(b < a) && b > a) {
      a = this.G.jk(a, b - a);
      for(b = 0;b < a.length;++b) {
        this.Fg(a[b])
      }
    }
  }
};
s.Ov = function(a) {
  if(!(0 > a)) {
    var b = this.G.count();
    if(b !== a && !(b < a) && b > a) {
      a = this.G.jk(0, b - a);
      for(b = 0;b < a.length;++b) {
        this.Fg(a[b])
      }
    }
  }
};
s.clear = function() {
  for(var a = this.G.Qe(), b = 0;b < a.length;b++) {
    var c = this.O[a[b]];
    c !== g && fr(c)
  }
  this.O = {}
};
s.xh = p();
function fr(a) {
  for(var a = a.Pb(), b = 0;b < a.Da();b++) {
    a.getItem(b).detach()
  }
}
;function gr(a, b) {
  br.call(this, a, b)
}
C(gr, br);
function hr(a, b, c) {
  er.call(this, a, b, c)
}
C(hr, er);
hr.prototype.VC = function(a) {
  var b = new gr(this, a), c = this.Yc, e = c.Cr, c = this.eb.getItem(c.tk), a = c !== g ? c.I(a) : g, c = {type:"SnapshotBehavior"};
  c.GY = e;
  c.identifier = a;
  c.target = "Value";
  if(e = Yj.g().create(c, b)) {
    b.Pb().add(e), e.qb()
  }
  return b
};
function ir(a, b, c) {
  mq.call(this, b, c);
  this.Yc.Zc = 4;
  this.clear();
  this.eb = a;
  this.dk = k
}
C(ir, mq);
s = ir.prototype;
s.O = k;
s.eb = k;
s.dk = k;
s.Tf = function() {
  this.clear();
  for(var a = this.G.Qe(), b = 0;b < a.length;b++) {
    this.ne(a[b])
  }
  return i
};
s.ge = function() {
  for(var a = [], b = this.G.Qe(), c = 0;c < b.length;c++) {
    a.push(this.O[b[c]])
  }
  return a
};
s.Sk = r(m);
s.I = function(a) {
  a = this.O[a];
  return a === g ? [] : a
};
s.ka = r(m);
s.Vj = function(a) {
  this.ne(a)
};
s.ne = function(a) {
  this.O[a] = []
};
s.Hu = function(a, b) {
  this.ne(b)
};
s.Gu = function(a, b) {
  this.ne(b)
};
s.Fg = function(a) {
  this.O[a] !== g && delete this.O[a]
};
s.Qs = function(a) {
  if(!(0 > a)) {
    var b = this.G.count();
    if(b !== a && !(b < a) && b > a) {
      for(;a < b;a++) {
        this.Fg(this.G.jn(a))
      }
    }
  }
};
s.clear = function() {
  this.O = {}
};
s.xh = p();
s.dj = function(a) {
  return this.O[a]
};
s.eu = function() {
  return[this.Yc.IG]
};
s.Bz = function(a, b, c, e) {
  this.dk === k && (this.dk = this.eb.getItem(this.Yc.IG));
  for(var f = this.Yc.QM, a = 0;a < e.length;++a) {
    c = e[a], b = this.O[c], b.unshift(this.dk.I(c)), b.length > f && b.pop()
  }
  nq(this, e)
};
function jr(a, b, c) {
  Eq.call(this, b, c);
  this.eb = a;
  this.Xd = k;
  this.ha = this.Yc.Gs + "_" + c.getName();
  tq.g().qb(this)
}
C(jr, Eq);
s = jr.prototype;
s.eb = k;
s.Xd = k;
s.ha = k;
s.xh = function(a, b) {
  for(var c = this.eb.getItem(this.Yc.Gs), e = [], f = 0;f < a.length;++f) {
    e.push(c.I(a[f]))
  }
  tq.g().ag(this, e, b)
};
s.gn = function() {
  return this.Yc.Cp ? [] : [this.Yc.Jl()]
};
s.qn = function() {
  return this.Yc.Cp ? [this.Yc.Jl()] : []
};
s.rn = function() {
  return this.eb.getItem(this.Yc.Gs).ge()
};
s.np = r("");
s.fj = q("ha");
s.gA = ba("ha");
s.Fq = function(a, b) {
  if(this.Xd === k) {
    this.Xd = {};
    for(var c = this.eb.getItem(this.Yc.Gs), e = this.G.count(), f = 0;f < e;++f) {
      var h = this.G.jn(f);
      this.Xd[c.I(h)] = h
    }
  }
  a && (c = this.Xd[a], c === g ? zq(tq.g(), this, [a]) : (e = b[this.Yc.Jl()], e !== k && e !== g && (this.Yc.Cp ? this.ka(c, e.om) : this.ka(c, e.Br), nq(this, c))))
};
s.Qq = p();
s.uv = p();
s.eu = function() {
  return[this.Yc.Gs]
};
s.Bz = function() {
  var a = [], b = [], c = 0;
  for(c in this.Xd) {
    a.push(c), b.push(m)
  }
  tq.g().ag(this, a, b);
  this.Xd = k;
  tq.g().xf([this])
};
s.clear = function() {
  jr.e.clear.call(this);
  var a = [this], b = tq.g();
  if(!(a === k || a === g || 0 === b.Lg.length)) {
    for(var c = 0;c < a.length;c++) {
      for(var e = a[c], f = [], h = b.yq;h < b.Lg.length;h++) {
        var j = b.Lg[h];
        j.FY !== e && f.push(j)
      }
      b.yq = 0;
      b.Lg = f
    }
  }
};
function kr(a, b) {
  mq.call(this, a, b);
  this.clear()
}
C(kr, mq);
s = kr.prototype;
s.O = k;
s.Tf = function(a) {
  if(a !== g && a !== k) {
    return this.Sk(a)
  }
  this.clear();
  for(var a = this.G.count(), b = 0;b < a;b++) {
    this.O.push(this.ue)
  }
  return i
};
s.ge = q("O");
s.Sk = function(a) {
  var b = this.G.count();
  if(a.length < b) {
    for(var b = b - a.length, c = 0;c < b;c++) {
      a.push(this.ue)
    }
  }else {
    a.length > b && a.splice(b, a.length - b)
  }
  this.O = a;
  return i
};
s.I = function(a) {
  a = this.G.hj(a);
  return a !== g ? this.O[a] : g
};
s.ka = function(a, b) {
  var c = m, e = this.G.hj(a);
  e !== g && (this.yk && (b = kq(this.Zc, b)), this.O[e] !== b && (this.O[e] = b, c = i));
  return c
};
s.Vj = function(a, b) {
  this.yk && (b = kq(this.Zc, b));
  this.O.push(b)
};
s.ne = function() {
  this.O.push(this.ue)
};
s.Hu = function(a, b, c) {
  this.yk && (c = kq(this.Zc, c));
  this.O.splice(a, 0, c)
};
s.Gu = function(a) {
  this.O.splice(a, 0, this.ue)
};
s.Fg = function(a) {
  a = this.G.hj(a);
  a !== g && this.O.splice(a, 1)
};
s.Qs = function(a) {
  if(!(0 > a || this.O.length === a)) {
    if(this.O.length < a) {
      for(var a = a - this.O.length, b = 0;b < a;b++) {
        this.O.push(this.ue)
      }
    }else {
      this.O.length > a && this.O.splice(a, this.O.length - a)
    }
  }
};
s.Ov = function(a) {
  0 > a || this.O.length === a || this.O.length > a && this.O.splice(0, this.O.length - a)
};
s.clear = function() {
  this.O = []
};
s.xh = p();
function lr() {
}
x(lr);
lr.prototype.create = function(a, b, c, e) {
  var f = k;
  if(e.kf == mr) {
    switch(e.VJ) {
      case 0:
        f = new Eq(c, e);
        break;
      case 1:
        f = new kr(c, e)
    }
  }else {
    e.kf == nr ? f = new jr(b, c, e) : e.kf == or ? f = new hr(b, c, e) : e.kf == pr ? f = new oq(c, e, a) : e.kf == qr ? f = new ir(b, c, e) : e.kf == Cq ? f = new Aq(c, e, a) : e.kf == Bq && (f = new Fq(c, e, a))
  }
  return f
};
var mr = "ColumnSpecification", or = "SnsColumnSpecification", nr = "StreamingColumnSpecification", pr = "FormulaColumnSpecification", qr = "HistoryColumnSpecification", Bq = "StreamingFieldColumnSpecification", Cq = "StreamingIdentifierColumnSpecification";
function rr(a) {
  a !== g && a !== k && (a.name !== g && (this.Bk = a.name), a.columnType !== g && (this.kf = a.columnType), a.columnStructure !== g && (this.VJ = a.columnStructure), a.dataType !== g && (this.Zc = a.dataType), a.defaultValue !== g && (this.ue = a.defaultValue), a.dataTypeAutoConversion !== g && (this.yk = a.dataTypeAutoConversion), this.ue = kq(this.Zc, this.ue))
}
s = rr.prototype;
s.Bk = "";
s.kf = mr;
s.VJ = 0;
s.Zc = 2;
s.yk = i;
s.ue = k;
s.getName = q("Bk");
s.zi = ba("Bk");
function sr(a) {
  rr.call(this, a);
  a !== g && a !== k && a.field !== g && (this.dk = a.field);
  this.kf = Bq
}
C(sr, rr);
sr.prototype.dk = "";
sr.prototype.Cp = m;
sr.prototype.Jl = q("dk");
function ur(a) {
  rr.call(this, a);
  if(a !== g && a !== k && (a.formula !== g && (this.Cr = a.formula), a.identifierColumnName !== g)) {
    this.tk = a.identifierColumnName
  }
  this.kf = or
}
C(ur, rr);
ur.prototype.Cr = "";
ur.prototype.tk = "";
function vr(a) {
  rr.call(this, a);
  a !== g && a !== k && a.formulaExpression !== g && (this.SK = a.formulaExpression);
  this.kf = pr
}
C(vr, rr);
vr.prototype.gL = q("SK");
vr.prototype.SK = "";
function wr(a) {
  rr.call(this, a);
  a !== g && a !== k && (a.recordColumnName !== g && (this.IG = a.recordColumnName), this.QM = a.maxTimeStep !== g ? a.maxTimeStep : 1);
  this.kf = qr
}
C(wr, rr);
wr.prototype.IG = "";
wr.prototype.QM = -1;
function xr(a) {
  rr.call(this, a);
  a !== g && a !== k && a.chain !== g && (this.Hd = a.chain);
  this.kf = Cq;
  this.IK = []
}
C(xr, rr);
xr.prototype.Hd = "";
xr.prototype.IK = [];
function yr(a) {
  rr.call(this, a);
  if(a !== g && a !== k && (a.field !== g && (this.dk = a.field), a.isColorField !== g && (this.Cp = a.isColorField), a.ricColumnName !== g)) {
    this.Gs = a.ricColumnName
  }
  this.kf = nr
}
C(yr, rr);
yr.prototype.dk = "";
yr.prototype.Cp = m;
yr.prototype.Gs = "";
yr.prototype.Jl = q("dk");
function zr() {
}
x(zr);
zr.prototype.create = function(a) {
  var b = k;
  switch(a.columnType) {
    case mr:
      b = new rr(a);
      break;
    case nr:
      b = new yr(a);
      break;
    case or:
      b = new ur(a);
      break;
    case pr:
      b = new vr(a);
      break;
    case qr:
      b = new wr(a);
      break;
    case Cq:
      b = new xr(a);
      break;
    case Bq:
      b = new sr(a)
  }
  return b
};
function yo() {
}
x(yo);
yo.prototype.Lt = {};
yo.prototype.we = function(a) {
  return this.Lt[a]
};
function Ar() {
  this.clear()
}
s = Ar.prototype;
s.sb = k;
s.tc = k;
s.$e = 0;
s.dd = 0;
s.jn = function(a) {
  return this.sb[a + this.dd]
};
s.jk = function(a, b) {
  for(var c = [], e = a + b + this.dd, f = a + this.dd;f < e;++f) {
    c.push(this.sb[f])
  }
  return c
};
s.hj = function(a) {
  return this.tc[a] - this.dd
};
s.Qe = function() {
  for(var a = [], b = this.dd;b < this.$e;++b) {
    a.push(this.sb[b])
  }
  return a
};
s.XL = function(a) {
  this.dd--;
  this.tc[a] = this.dd;
  this.sb[this.dd] = a;
  return 0
};
s.qt = function(a) {
  this.tc[a] = this.$e;
  this.sb[this.$e] = a;
  return this.$e++ - this.dd
};
s.Nw = function(a) {
  for(var b = 0, c = [];b < a.length;++b) {
    c.push(this.qt(a[b]))
  }
  return c
};
s.KN = function(a) {
  var b = this.tc[a];
  if(b === g) {
    return-1
  }
  delete this.tc[a];
  for(var c, a = b;a < this.$e - 1;++a) {
    c = this.sb[a + 1], this.sb[a] = c, this.tc[c] = a
  }
  delete this.sb[a];
  this.$e--;
  return b - this.dd
};
s.LN = function(a) {
  a += this.dd;
  if(!(a < this.dd || a >= this.$e)) {
    var b = this.sb[a];
    delete this.tc[b];
    for(var c;a < this.$e - 1;++a) {
      c = this.sb[a + 1], this.sb[a] = c, this.tc[c] = a
    }
    delete this.sb[a];
    this.$e--;
    return b
  }
};
s.removeRange = function(a, b) {
  a += this.dd;
  if(a < this.dd || a + b >= this.$e) {
    return[]
  }
  var c, e, f = [];
  for(c = a;c < a + b;++c) {
    e = this.sb[c], f.push(e), delete this.tc[e]
  }
  for(c = a;c < this.$e - b;++c) {
    e = this.sb[c + b], this.sb[c] = e, this.tc[e] = c
  }
  for(;c < this.$e;++c) {
    delete this.sb[c]
  }
  this.$e -= b;
  return f
};
s.If = function(a) {
  return this.tc[a] !== g
};
s.clear = function() {
  this.sb = {};
  this.tc = {};
  this.dd = this.$e = 0
};
s.count = function() {
  return this.$e - this.dd
};
function Br(a, b, c) {
  fo.call(this, a, b, c)
}
C(Br, fo);
Br.prototype.dn = r("etk_data_inserted");
Br.prototype.getEventType = Br.prototype.dn;
function Cr() {
  this.wc = []
}
C(Cr, jo);
Cr.prototype.v = function(a, b, c) {
  io(this, new Br(a, b, c))
};
function R(a, b, c, e, f) {
  a === g && (a = {});
  b === g && (b = k);
  c === g && (c = m);
  K.call(this, a, b, c, e, f);
  this.Kh = [];
  e = a.name;
  e !== g && 0 < e.length && (yo.g().Lt[e] = this);
  this.Wf = a.maxRowCount !== g ? Number(a.maxRowCount) : -1;
  this.G = 0 <= this.Wf ? new Ar : new ro;
  this.Ya = new cr;
  this.Dl = new cr;
  this.df = new mo;
  this.De = new Cr;
  this.cf = new ko;
  this.bf = new qo;
  Gj(this);
  e = a = m;
  w(b) && (a = w(b.RowDataArrive), e = w(b.ColumnDataArrive));
  this.WG = new Rj(this, c, a);
  this.TJ = new to(this, c, e)
}
C(R, K);
H.g().z("DataTable", R);
s = R.prototype;
s.G = k;
s.Ya = k;
s.Yz = 0;
s.yV = -1;
s.df = k;
s.De = k;
s.cf = k;
s.bf = k;
s.WG = k;
s.TJ = k;
s.jb = m;
s.Wf = -1;
s.Dl = k;
s.m = function() {
  this.Xb("DataTable", "div", "etk-datatable")
};
s.Ty = function(a) {
  var b = this.jb;
  this.jb = i;
  this.Ya.clear();
  this.G.clear();
  var c = k, e = "";
  for(e in a) {
    this.Ow(e), c = a[e]
  }
  if(c) {
    for(var f = 0;f < c.length;f++) {
      var h = [];
      for(e in a) {
        h.push(a[e][f])
      }
      this.rt(h)
    }
  }
  this.jb = b;
  this.Ek()
};
R.prototype.initializeFromColumnBasedJson = R.prototype.Ty;
R.prototype.gC = function(a, b) {
  var c = lr.g().create(this, this.Ya, this.G, a), e = this.Ya.add(a.getName(), c);
  if(-1 == e) {
    return-1
  }
  var f = this.jb;
  this.jb = i;
  b !== g && b !== k && this.ta() < b.length && this.Yd(b.length);
  c.Tf(b);
  c.xw = A(this.ZU, this);
  this.jb = f;
  for(var f = c.getName(), c = c.eu(), h = 0;h < c.length;h++) {
    var j = c[h];
    this.Dl.If(j) || this.Dl.add(j, []);
    this.Dl.getItem(j).push(f)
  }
  this.Ek();
  return e
};
R.prototype.addColumn = R.prototype.gC;
R.prototype.Ow = function(a, b, c, e) {
  return this.gC(new rr({name:a, dataType:b, defaultValue:c, dataTypeAutoConversion:e}))
};
R.prototype.addNormalColumn = R.prototype.Ow;
R.prototype.Rn = function(a) {
  var b = this.Ya.getItem(a);
  if(b == g) {
    return m
  }
  b.ba();
  this.Ya.remove(a);
  0 >= this.Ya.count() && this.G.clear();
  this.Ek();
  a = b.getName();
  b = b.eu();
  this.Dl.remove(a);
  for(var c = 0;c < b.length;c++) {
    var e = b[c], f = this.Dl.getItem(e);
    if(f !== g) {
      var h = f.indexOf(a);
      0 <= h && (f.splice(h, 1), 0 === f.length && this.Dl.remove(e))
    }
  }
  return i
};
R.prototype.removeColumn = R.prototype.Rn;
R.prototype.sV = function(a) {
  a = this.Ya.Hc(a);
  return a === g ? m : this.Rn(a.getName())
};
R.prototype.removeColumnByIndex = R.prototype.sV;
R.prototype.MG = function() {
  var a = this.jb;
  this.jb = i;
  for(var b = this.Sd(), c = 0;c < b.length;c++) {
    this.Rn(b[c])
  }
  this.jb = a;
  this.Ek()
};
R.prototype.removeAllColumns = R.prototype.MG;
R.prototype.gk = function(a) {
  a = this.Ya.getItem(a);
  return a !== g ? a.Yc : g
};
R.prototype.getColumn = R.prototype.gk;
R.prototype.LR = function(a) {
  a = this.Ya.Hc(a);
  return a !== g ? a.Yc : g
};
R.prototype.getColumnByIndex = R.prototype.LR;
R.prototype.Sd = function() {
  return dr(this.Ya)
};
R.prototype.getAllColumnNames = R.prototype.Sd;
R.prototype.mf = function() {
  return this.Ya.count()
};
R.prototype.getColumnCount = R.prototype.mf;
R.prototype.cu = function(a) {
  a = this.Ya.getItem(a);
  return a !== g ? a.ge() : g
};
R.prototype.getColumnValues = R.prototype.cu;
R.prototype.PV = function(a, b) {
  var c = this.Ya.getItem(a);
  return c !== g ? (b !== g && b !== k && this.ta() < b.length && this.Yd(b.length), c.Sk(b)) : m
};
R.prototype.setColumnValues = R.prototype.PV;
function Dr(a, b, c, e) {
  if(a.G.If(b)) {
    return-1
  }
  var f = a.jb;
  a.jb = i;
  a.G.count() === a.Wf && a.Rz(0);
  for(var h = a.G.qt(b), j = a.Ya.count(), l = 0;l < j;l++) {
    var n = a.Ya.Hc(l), o = n.getName(), u = g;
    c !== g && c !== k && (e !== g && e !== k ? (o = e.indexOf(o), u = c[o]) : u = c[l]);
    u !== g ? n.Vj(b, u) : n.ne(b)
  }
  a.jb = f;
  0 <= a.Wf ? a.lh(0, a.G.count() - 1, [b]) : a.lh(h, a.G.count() - 1, [b]);
  return h
}
function Er(a, b, c, e) {
  var f;
  for(f = 0;f < b.length;++f) {
    if(a.G.If(b[f])) {
      return-1
    }
  }
  var h = a.jb;
  a.jb = i;
  0 <= a.Wf && a.RG(0, c.length + a.G.count() - a.Wf);
  var j = a.G.Nw(b), l = a.Ya.count(), n = b.length, o = [];
  if(e !== g && e !== k) {
    for(f = 0;f < l;f++) {
      var u = a.Ya.Hc(f), u = u.getName(), u = e.indexOf(u);
      o.push(u)
    }
  }else {
    for(f = 0;f < l;f++) {
      o.push(f)
    }
  }
  for(e = 0;e < n;e++) {
    for(f = 0;f < l;f++) {
      var u = a.Ya.Hc(f), t = c[e][o[f]];
      t !== g ? u.Vj(b[e], t) : u.ne(b[e])
    }
  }
  a.jb = h;
  0 <= a.Wf ? a.lh(0, a.G.count() - 1, b) : a.lh(j[0], a.G.count() - 1, b);
  return j
}
function Fr(a, b, c, e) {
  var f, h;
  for(f = 0;f < b.length;++f) {
    if(a.G.If(b[f])) {
      return-1
    }
  }
  var j = a.jb;
  a.jb = i;
  0 <= a.Wf && a.RG(0, c[0].length + a.G.count() - a.Wf);
  var l = a.G.Nw(b), n = a.Ya.count(), o = b.length;
  for(f = 0;f < n;f++) {
    var u = a.Ya.Hc(f);
    h = u.getName();
    var t = g;
    c !== g && c !== k && (e !== g && e !== k ? (t = e.indexOf(h), t = c[t]) : t = c[f]);
    if(t !== g) {
      for(h = 0;h < o;++h) {
        u.Vj(b[h], t[h])
      }
    }else {
      for(h = 0;h < o;++h) {
        u.ne(b[h])
      }
    }
  }
  a.jb = j;
  0 <= a.Wf ? a.lh(0, a.G.count() - 1, b) : a.lh(l[0], a.G.count() - 1, b);
  return l
}
R.prototype.rt = function(a, b) {
  return Dr(this, this.Yz++, a, b)
};
R.prototype.addRow = R.prototype.rt;
R.prototype.Pw = function(a, b, c) {
  return Dr(this, a, b, c)
};
R.prototype.addRowWithCustomId = R.prototype.Pw;
R.prototype.tQ = function(a, b) {
  if(a === g || a === k || 0 === a.length) {
    return-1
  }
  var c, e = [];
  for(c = 0;c < a.length;++c) {
    e.push(this.Yz++)
  }
  for(c = 1;c < a.length;++c) {
    if(a[c].length !== a[0].length) {
      return-1
    }
  }
  return Er(this, e, a, b)
};
R.prototype.addRows = R.prototype.tQ;
R.prototype.wQ = function(a, b, c) {
  for(var e = 1;e < b.length;++e) {
    if(b[e].length !== b[0].length) {
      return-1
    }
  }
  return Er(this, a, b, c)
};
R.prototype.addRowsWithCustomIds = R.prototype.wQ;
R.prototype.uQ = function(a, b) {
  if(a === g || a === k || 0 === a.length) {
    return-1
  }
  var c, e = [];
  for(c = 0;c < a[0].length;++c) {
    e.push(this.Yz++)
  }
  for(c = 1;c < a.length;++c) {
    if(a[c].length !== e.length) {
      return-1
    }
  }
  return Fr(this, e, a, b)
};
R.prototype.addRowsColumnWise = R.prototype.uQ;
R.prototype.vQ = function(a, b, c) {
  for(var e = 1;e < b.length;++e) {
    if(b[e].length !== a.length) {
      return-1
    }
  }
  return Fr(this, a, b, c)
};
R.prototype.addRowsColumnWiseWithCustomIds = R.prototype.vQ;
function Gr(a, b, c, e) {
  if(!a.G.If(b)) {
    var f = a.jb;
    a.jb = i;
    a.G.count() === a.Wf && a.Rz(a.G.count() - 1);
    var h, j = a.G.XL(b), l = a.Ya.count(), n = [];
    if(e !== g && e !== k) {
      for(h = 0;h < l;h++) {
        var o = a.Ya.Hc(h), o = o.getName(), o = e.indexOf(o);
        n.push(o)
      }
    }else {
      for(h = 0;h < l;h++) {
        n.push(h)
      }
    }
    for(h = 0;h < l;h++) {
      o = a.Ya.Hc(h), e = c[n[h]], e !== g ? o.Hu(0, b, e) : o.Gu(0, b)
    }
    a.jb = f;
    a.lh(j, a.G.count() - 1, [b])
  }
}
R.prototype.Ds = function(a) {
  if(!this.G.If(a)) {
    return m
  }
  for(var b = 0;b < this.Ya.count();b++) {
    this.Ya.Hc(b).Fg(a)
  }
  b = this.G.KN(a);
  this.Ck(b, b, [a]);
  return i
};
R.prototype.removeRow = R.prototype.Ds;
R.prototype.Rz = function(a) {
  a = this.G.jn(a);
  return a === g ? m : this.Ds(a)
};
R.prototype.removeRowByIndex = R.prototype.Rz;
R.prototype.RG = function(a, b) {
  var c = this.G.jk(a, b);
  if(c === g) {
    return m
  }
  for(var e = 0;e < this.Ya.count();e++) {
    for(var f = this.Ya.Hc(e), h = 0;h < c.length;++h) {
      f.Fg(c[h])
    }
  }
  this.G.removeRange(a, b);
  this.Ck(a, a + b, c);
  return i
};
R.prototype.removeRowsByRange = R.prototype.RG;
R.prototype.qV = function() {
  var a = this.jb;
  this.jb = i;
  for(var b = 0;b < this.Ya.count();b++) {
    this.Ya.Hc(b).clear()
  }
  b = this.G.Qe();
  this.G.clear();
  this.jb = a;
  this.Ck(0, b.length - 1, b)
};
R.prototype.removeAllRows = R.prototype.qV;
R.prototype.dl = function(a, b, c) {
  if(!this.G.If(a)) {
    return m
  }
  var e = this.jb;
  this.jb = i;
  var f = [];
  c === g && (c = this.Sd());
  for(var h = 0;h < c.length;h++) {
    var j = c[h], l = this.Ya.getItem(j);
    l !== g && b[h] !== g && (f.push(j), l.ka(a, b[h]))
  }
  this.jb = e;
  b = this.G.hj(a);
  this.Dk(b, b, [a], f);
  return i
};
R.prototype.updateRow = R.prototype.dl;
R.prototype.mI = function(a, b, c) {
  a = this.G.jn(a);
  return a === g ? m : this.dl(a, b, c)
};
R.prototype.updateRowByIndex = R.prototype.mI;
R.prototype.ug = function(a) {
  if(this.G.hj(a) !== g) {
    return new Qj(a, this)
  }
};
R.prototype.getRow = R.prototype.ug;
R.prototype.gh = function(a) {
  a = this.G.jn(a);
  if(a !== g) {
    return new Qj(a, this)
  }
};
R.prototype.getRowByIndex = R.prototype.gh;
R.prototype.uV = function(a, b) {
  if(this.G.hj(b) !== g) {
    for(var c = new Qj(b, this), e = {}, f = c.Sd(), h = f.length, j = 0;j < h;j++) {
      var l = f[j];
      e[l] = this.gk(l).Zc
    }
    this.WG.Rx(a, e, c, k)
  }
};
R.prototype.requestRowByID = R.prototype.uV;
R.prototype.vV = function(a, b) {
  var c = this.G.jn(b);
  if(c !== g) {
    for(var c = new Qj(c, this), e = {}, f = c.Sd(), h = f.length, j = 0;j < h;j++) {
      var l = f[j];
      e[l] = this.gk(l).Zc
    }
    this.WG.Rx(a, e, c, k)
  }
};
R.prototype.requestRowByIndex = R.prototype.vV;
R.prototype.tV = function(a, b) {
  var c = this.dh(), e = this.cu(b);
  if(c !== g) {
    var f = this.gk(b);
    f !== g && this.TJ.Rx(a, f.Zc, c, e, k)
  }
};
R.prototype.requestColumnData = R.prototype.tV;
R.prototype.tn = function(a) {
  return this.G.hj(a)
};
R.prototype.getRowIndex = R.prototype.tn;
R.prototype.sn = function(a) {
  return this.G.jn(a)
};
R.prototype.getRowId = R.prototype.sn;
R.prototype.dh = function() {
  return this.G.Qe()
};
R.prototype.getAllRowIds = R.prototype.dh;
R.prototype.ta = function() {
  return this.G.count()
};
R.prototype.getRowCount = R.prototype.ta;
R.prototype.Yd = function(a) {
  0 > a && (a = 0);
  if(this.ta() !== a) {
    for(var b = 0;b < this.Ya.count();b++) {
      this.Ya.Hc(b).Qs(a)
    }
    var c = this.G.count();
    if(c < a) {
      for(var e = a - c, f = [], b = 0;b < e;b++) {
        var h = this.Yz++;
        this.G.qt(h);
        f.push(h)
      }
      this.lh(c, a - 1, f)
    }else {
      if(c > a) {
        f = [];
        for(b = c - 1;b >= a;b--) {
          h = this.G.LN(b), f.push(h)
        }
        this.Ck(a, c - 1, f)
      }
    }
  }
};
R.prototype.setRowCount = R.prototype.Yd;
R.prototype.jS = q("Wf");
R.prototype.getMaxRowCount = R.prototype.jS;
R.prototype.$V = function(a) {
  this.Wf = Number(a);
  if(0 <= a && (a = this.Wf, 0 > a && (a = 0), this.ta() !== a)) {
    for(var b = 0;b < this.Ya.count();b++) {
      this.Ya.Hc(b).Ov(a)
    }
    b = this.G.count();
    b > a && (b = this.G.removeRange(0, b - a), this.Ck(0, a - 1, b))
  }
  a = this.G;
  this.G = 0 <= this.Wf ? new Ar : new ro;
  this.G.Nw(a.Qe());
  for(b = 0;b < this.Ya.count();b++) {
    this.Ya.Hc(b).G = this.G
  }
  delete a
};
R.prototype.setMaxRowCount = R.prototype.$V;
R.prototype.I = function(a, b) {
  var c = this.Ya.getItem(b);
  return c !== g ? c.I(a) : g
};
R.prototype.getValue = R.prototype.I;
R.prototype.ka = function(a, b, c) {
  var e = this.Ya.getItem(b);
  e !== g && e.ka(a, c) && (c = this.G.hj(a), this.Dk(c, c, [a], [b]))
};
R.prototype.setValue = R.prototype.ka;
R.prototype.zi = function(a) {
  if(a != k) {
    var b = this.getName();
    R.e.zi.call(this, a);
    if(b != k && b.length !== g && 0 < b.length) {
      var c = yo.g();
      c.Lt[b] !== g && delete c.Lt[b]
    }
    yo.g().Lt[a] = this
  }
};
R.prototype.setName = R.prototype.zi;
R.prototype.$D = q("jb");
R.prototype.getFrozen = R.prototype.$D;
R.prototype.jH = function(a) {
  var b = this.jb == i && a == m;
  this.jb = a;
  b && (this.Ek(), Hr(this, dr(this.Ya), 0, this.G.count(), this.G.Qe()))
};
R.prototype.setFrozen = R.prototype.jH;
R.prototype.xh = function(a, b) {
  for(var c = 0;c < this.Ya.count();c++) {
    this.Ya.Hc(c).xh(a, b)
  }
};
R.prototype.setRowFrozen = R.prototype.xh;
R.prototype.ru = q("df");
R.prototype.getSchemaChangedEvent = R.prototype.ru;
R.prototype.pu = q("De");
R.prototype.getRowInsertEvent = R.prototype.pu;
R.prototype.qu = q("cf");
R.prototype.getRowUpdateEvent = R.prototype.qu;
R.prototype.nu = q("bf");
R.prototype.getRowDeleteEvent = R.prototype.nu;
R.prototype.Ks = function(a) {
  var b;
  try {
    b = JSON.parse(a)
  }catch(c) {
    window.console.error("Error when parsing a JSON command: " + a);
    return
  }
  a = b.name;
  b = b.param;
  if(!("string" !== ga(a) || this[a] === g)) {
    var e = ga(b);
    if("array" === e) {
      switch(b.length) {
        case 1:
          this[a](b[0]);
          break;
        case 2:
          this[a](b[0], b[1]);
          break;
        case 3:
          this[a](b[0], b[1], b[2]);
          break;
        case 4:
          this[a](b[0], b[1], b[2], b[3]);
          break;
        case 5:
          this[a](b[0], b[1], b[2], b[3], b[4]);
          break;
        case 6:
          this[a](b[0], b[1], b[2], b[3], b[4], b[5]);
          break;
        default:
          this[a]()
      }
    }else {
      if("undefined" !== e) {
        this[a](b)
      }else {
        this[a]()
      }
    }
  }
};
R.prototype.setCommand = R.prototype.Ks;
s = R.prototype;
s.toString = function() {
  for(var a = this.ta(), b = 0, c = this.Sd(), e = "";b < a;++b) {
    var f = this.sn(b), e = e + (b + ",\t" + f + ":\t"), f = this.ug(f), h;
    for(h in c) {
      var j = f.I(c[h]), e = e + ((j !== k ? j.toString() : "#!Empty") + ",\t")
    }
    e = e.substring(0, e.length - 2) + "\n"
  }
  return e
};
s.l = function(a) {
  R.e.l.call(this, a);
  var b = this.jb;
  this.jb = i;
  for(var c = a.querySelectorAll("div[etk-datatable-column]"), e = 0;e < c.length;e++) {
    var f = c[e], h = f.getAttribute("etk-datatable-column-ctor"), h = w(h) ? JSON.parse(h) : {};
    this.gC(zr.g().create(h));
    a.removeChild(f)
  }
  b = this.jb = b;
  this.jb = i;
  c = a.querySelectorAll("div[etk-datatable-row]");
  for(e = 0;e < c.length;e++) {
    f = c[e], h = f.getAttribute("etk-datatable-row-ctor"), h = w(h) ? JSON.parse(h) : {}, this.rt(h.cells, h.columnNames), a.removeChild(f)
  }
  this.jb = b;
  this.Ek()
};
s.Ek = function() {
  this.jb || this.df.v()
};
s.lh = function(a, b, c) {
  this.jb || (this.De.v(a, b, c), Hr(this, k, a, b, c))
};
s.Dk = function(a, b, c, e) {
  this.jb || (this.cf.v(a, b, c, e), Hr(this, e, a, b, c))
};
s.Ck = function(a, b, c) {
  this.jb || (this.bf.v(a, b, c), Hr(this, k, a, b, c))
};
s.ZU = function(a, b) {
  if(b === g) {
    b = this.G.Qe(), this.Dk(0, this.G.count() - 1, b, [a])
  }else {
    if(b instanceof Array) {
      for(var c = 0, e = this.G.count(), f = 0;f < b.length;++f) {
        var h = this.G.hj(b[f]);
        h < e && (e = h);
        h > c && (c = h)
      }
      this.Dk(e, c, b, [a])
    }else {
      c = this.G.hj(b), this.Dk(c, c, [b], [a])
    }
  }
};
function Hr(a, b, c, e, f) {
  if(0 != a.Dl.count()) {
    b === k && (b = dr(a.Ya));
    for(var h = 0;h < b.length;h++) {
      var j = b[h], l = a.Dl.getItem(j);
      if(l !== g) {
        for(var n = 0;n < l.length;n++) {
          a.Ya.getItem(l[n]).Bz(j, c, e, f)
        }
      }
    }
  }
}
;function Ir(a, b) {
  this.rR = a;
  this.te = b;
  this.gm = {};
  var c = iq(wo.g(), this.rR, this.gm), e = {}, f, h;
  for(h in this.gm) {
    var j = this.gm[h];
    if((f = Ao(j)) !== k) {
      e[j] = f
    }else {
      if((f = vo(j, this.te)) !== k) {
        e[j] = f
      }
    }
  }
  jq.call(this, "", c, e, i, i, m)
}
C(Ir, jq);
Ir.prototype.te = k;
Ir.prototype.gm = k;
Ir.prototype.mk = function(a) {
  a = this.fg[a];
  try {
    return a.mk(this.te.tn(this.ha))
  }catch(b) {
    d(b)
  }
};
function Jr(a) {
  this.j = [];
  this.Et = [];
  this.df = new mo;
  this.De = new Cr;
  this.cf = new ko;
  this.bf = new qo;
  this.Sl = new oo;
  a !== g && this.Gj(a)
}
s = Jr.prototype;
s.j = k;
s.Et = k;
s.se = k;
s.df = k;
s.Sl = k;
s.De = k;
s.cf = k;
s.bf = k;
s.Gj = function(a) {
  this.bB();
  this.lg = this.Q = k;
  a && this.resize(a.ta(), a.mf())
};
Jr.prototype.setDataTable = Jr.prototype.Gj;
Jr.prototype.we = r(k);
Jr.prototype.getDataTable = Jr.prototype.we;
Jr.prototype.Sd = function() {
  return!this.j ? k : this.Et
};
Jr.prototype.getAllColumnNames = Jr.prototype.Sd;
Jr.prototype.dh = function() {
  if(!this.j) {
    return k
  }
  if(!(0 >= this.j.length)) {
    for(var a = [], b = 0;b < this.j[0].length;++b) {
      a.push(b)
    }
    return a
  }
};
Jr.prototype.getAllRowIds = Jr.prototype.dh;
Jr.prototype.ta = function() {
  return!this.j || 0 >= this.j.length ? 0 : this.j[0].length
};
Jr.prototype.getRowCount = Jr.prototype.ta;
Jr.prototype.ug = r(k);
Jr.prototype.getRow = Jr.prototype.ug;
Jr.prototype.gh = function(a) {
  return this.ug(a)
};
Jr.prototype.getRowByIndex = Jr.prototype.gh;
Jr.prototype.sn = aa();
Jr.prototype.getRowId = Jr.prototype.sn;
Jr.prototype.I = function(a, b) {
  var c = Number(b);
  c !== c && (c = 0);
  return this.j[c][a]
};
Jr.prototype.getValue = Jr.prototype.I;
Jr.prototype.reset = function() {
  this.lg = this.Q = k
};
Jr.prototype.reset = Jr.prototype.reset;
Jr.prototype.Lw = function(a, b) {
  this.se || (this.se = []);
  this.se.push(new Xn(a, b))
};
Jr.prototype.addColumnSortOrder = Jr.prototype.Lw;
Jr.prototype.px = function() {
  this.se = k
};
Jr.prototype.clearColumnSortOrders = Jr.prototype.px;
Jr.prototype.sort = function() {
  this.se ? (this.Q || this.Zr(), this.eF()) : this.Q = k
};
Jr.prototype.sort = Jr.prototype.sort;
Jr.prototype.TO = r(m);
Jr.prototype.swapRows = Jr.prototype.TO;
s = Jr.prototype;
s.eF = p();
s.$L = p();
s.bs = p();
s.xh = p();
s.filter = function() {
  !this.se && !this.qg ? this.Q = k : (this.Q || this.Zr(), this.dF())
};
Jr.prototype.filter = Jr.prototype.filter;
s = Jr.prototype;
s.Ho = function(a) {
  this.qg || (this.qg = []);
  this.qg.push(new Ir(a, this.j))
};
s.To = function() {
  this.qg = k
};
s.iH = function(a) {
  this.To();
  this.Ho(a)
};
s.dF = p();
s.cs = r(i);
s.hC = p();
s.JC = p();
s.lO = p();
s.group = p();
s.dy = p();
s.ru = q("df");
Jr.prototype.getSchemaChangedEvent = Jr.prototype.ru;
Jr.prototype.pu = q("De");
Jr.prototype.getRowInsertEvent = Jr.prototype.pu;
Jr.prototype.qu = q("cf");
Jr.prototype.getRowUpdateEvent = Jr.prototype.qu;
Jr.prototype.nu = q("bf");
Jr.prototype.getRowDeleteEvent = Jr.prototype.nu;
Jr.prototype.aE = q("Sl");
Jr.prototype.getGroupEvent = Jr.prototype.aE;
s = Jr.prototype;
s.Ek = function() {
  this.lg && this.YE();
  this.Q && (this.Q = k, this.sort());
  this.df.v()
};
s.resize = function(a, b) {
  this.j.length = 0;
  for(var c = this.Et.length = 0;c < b;++c) {
    this.j.push([]);
    this.Et.push(c.toString());
    for(var e = 0;e < a;++e) {
      this.j.push(c * b + e)
    }
  }
};
s.lh = function() {
  if(!(0 >= this.j.length)) {
    for(var a = this.j[0].length, b = this.j.length, c = b;0 <= --c;) {
      this.j[c].push(a * b + c)
    }
    this.De.v(a, a + 1, [a])
  }
};
s.Dk = function() {
  if(!(0 >= this.j.length)) {
    var a = this.j[0].length - 1;
    if(!(0 > a)) {
      for(var b = this.j.length;0 <= --b;) {
        this.j[b][a] += 1
      }
      this.cf.v(a, a + 1, [a], this.Et)
    }
  }
};
s.Ck = function() {
  if(!(0 >= this.j.length)) {
    for(var a = this.j[0].length, b = this.j.length;0 <= --b;) {
      this.j[b].pop()
    }
    this.bf.v(a - 1, a, [a - 1])
  }
};
s.JM = p();
s.bB = p();
s.Zr = function() {
  if(this.j && 0 < this.j.length) {
    this.Q = [];
    for(var a = 0;a < this.j[0].length;a++) {
      this.Q.push(a)
    }
  }else {
    this.Q = k
  }
};
s.YE = function() {
  if(this.j) {
    for(var a = 0;a < this.j.length;a++) {
      this.lg.push(a)
    }
  }else {
    this.lg = k
  }
};
function S(a, b, c, e) {
  this.he = {};
  this.Wn = {};
  this.df = new mo;
  this.De = new Cr;
  this.cf = new ko;
  this.bf = new qo;
  this.Sl = new oo;
  a !== g && this.Gj(a, b, c);
  e !== g && (this.Q = e)
}
s = S.prototype;
s.j = k;
s.ke = k;
s.Q = k;
s.lg = k;
s.se = k;
s.qg = k;
s.xp = k;
s.Gq = k;
s.df = k;
s.De = k;
s.cf = k;
s.bf = k;
s.Sl = k;
s.he = k;
s.Wn = k;
s.Tg = k;
s.$y = m;
s.Gj = function(a, b, c) {
  this.lg = this.Q = k;
  this.j = a;
  this.ke = b === g ? a : b;
  this.bB();
  c === g && (c = i);
  c && this.JM()
};
S.prototype.setDataTable = S.prototype.Gj;
S.prototype.we = q("j");
S.prototype.getDataTable = S.prototype.we;
S.prototype.Sd = function() {
  if(!this.ke) {
    return k
  }
  if(this.lg) {
    for(var a = [], b = 0;b < this.lg.length;b++) {
      a.push(this.lg[b])
    }
    return a
  }
  return this.ke.Sd()
};
S.prototype.getAllColumnNames = S.prototype.Sd;
S.prototype.dh = function() {
  if(!this.ke) {
    return k
  }
  if(this.Q) {
    for(var a = [], b = 0;b < this.Q.length;b++) {
      a.push(this.Q[b])
    }
    return a
  }
  return this.ke.dh()
};
S.prototype.getAllRowIds = S.prototype.dh;
S.prototype.ta = function() {
  return!this.ke ? 0 : this.Q ? this.Q.length : this.ke.ta()
};
S.prototype.getRowCount = S.prototype.ta;
S.prototype.ug = function(a) {
  return!this.ke ? k : this.Q ? this.j.ug(this.Q[a]) : this.ke.gh(a)
};
S.prototype.getRow = S.prototype.ug;
S.prototype.gh = function(a) {
  return this.ug(a)
};
S.prototype.getRowByIndex = S.prototype.gh;
S.prototype.sn = function(a) {
  return!this.ke ? 0 : this.Q ? this.Q[a] : this.ke.gh(a).P()
};
S.prototype.getRowId = S.prototype.sn;
S.prototype.I = function(a, b) {
  if(this.ke) {
    if(this.Q && this.Q[a] !== g) {
      return this.j.I(this.Q[a], b)
    }
    var c = this.ke.gh(a);
    if(c !== g && c !== k) {
      return c.I(b)
    }
  }
  return k
};
S.prototype.getValue = S.prototype.I;
S.prototype.reset = function() {
  this.lg = this.Q = k
};
S.prototype.reset = S.prototype.reset;
S.prototype.Lw = function(a, b) {
  this.j.gk(a) !== g && (this.se || (this.se = []), this.se.push(new Xn(a, b)))
};
S.prototype.addColumnSortOrder = S.prototype.Lw;
S.prototype.px = function() {
  this.se = k
};
S.prototype.clearColumnSortOrders = S.prototype.px;
S.prototype.sort = function() {
  !this.se && !this.qg ? this.Q = k : (this.Q || this.Zr(), this.eF())
};
S.prototype.sort = S.prototype.sort;
s = S.prototype;
s.TO = function(a, b) {
  this.Q || this.Zr();
  var c = this.Q.length;
  if(a >= c || 0 > a || b >= c || 0 > b) {
    return m
  }
  c = this.Q[a];
  this.Q[a] = this.Q[b];
  this.Q[b] = c;
  return i
};
s.xh = function(a, b) {
  if(this.j) {
    for(var c = [], e = this.Q ? this.Q : this.j.dh(), f = 0;f < a.length;f++) {
      c.push(e[a[f]])
    }
    this.j.xh(c, b)
  }
};
s.eF = function() {
  if(this.Q) {
    for(var a = this.Q, b = a.length, c = Array(b), e = 1;e < b;e *= 2) {
      for(var f = 2 * e, h = 0;h < b;h += f) {
        this.$L(a, h, Math.min(h + e, b), Math.min(h + f, b), c)
      }
      f = a;
      a = c;
      c = f
    }
    this.Q = a
  }
};
s.$L = function(a, b, c, e, f) {
  for(var h = b, j = c;b < e;b++) {
    f[b] = h < c && (j >= e || -1 != this.bs(a[h], a[j])) ? a[h++] : a[j++]
  }
};
s.bs = function(a, b) {
  if(this.se) {
    for(var c = 0;c < this.se.length;c++) {
      var e = this.se[c].Gt, f = this.se[c].OH, h = this.j.I(a, e), e = this.j.I(b, e);
      if(h != e) {
        return h < e ? 2 == f ? 1 : -1 : 4 == f ? 1 : -1
      }
    }
  }
  return 0
};
s.filter = function() {
  !this.se && !this.qg ? this.Q = k : (this.Q || this.Zr(), this.dF())
};
S.prototype.filter = S.prototype.filter;
s = S.prototype;
s.Ho = function(a) {
  this.qg || (this.qg = []);
  this.qg.push(new Ir(a, this.j))
};
s.To = function() {
  this.qg = k
};
s.iH = function(a) {
  this.To();
  this.Ho(a)
};
s.dF = function() {
  for(var a = this.Q, b = a.length, c = [], e = 0;e < b;++e) {
    this.cs(a[e]) && c.push(a[e])
  }
  this.Q = c
};
s.hC = function(a) {
  a && (this.Gq || (this.Gq = []), this.Gq.push(a))
};
S.prototype.addGroupCriteria = S.prototype.hC;
S.prototype.JC = function() {
  this.Gq = k
};
S.prototype.clearGroupCriteria = S.prototype.JC;
S.prototype.lO = function(a) {
  this.JC();
  this.hC(a)
};
S.prototype.setGroupCriteria = S.prototype.lO;
S.prototype.group = function() {
  var a = this.Gq, b = i;
  if(a) {
    for(var c = 0;c < a.length;c++) {
      var e = a[c];
      if(m && this.j.gk(e.Gt) === g) {
        b = m;
        break
      }
    }
  }
  b && (this.xp = this.Gq ? this.Gq.slice(0) : k, this.ke && this.xp != k ? Kr(this, this.Q ? this.Q : this.ke.dh()) : Kr(this, []))
};
S.prototype.group = S.prototype.group;
function Lr(a, b, c) {
  for(var e = [], f = [], h = {}, j = 0;j < b.length;j++) {
    var l = b[j], n = Mr(a, l);
    h[n] === g && (h[n] = [], a.he[n] === g ? e.push(n) : f.push(n));
    c[l] = n;
    h[n].push(l)
  }
  return{groupsHash:h, groupIdsToAdd:e, groupIdsToUpdate:f}
}
function Nr(a, b, c) {
  var c = new S(a.j, a, m, c), e = new S(a.j, c, m);
  c.Tg = e;
  a.he[b] = new Wn(b, 0, c);
  return a.he[b]
}
function Or(a, b, c) {
  for(var e = [], f = 0;f < b.length;f++) {
    var h = b[f], h = Nr(a, h, c[h]);
    e.push(h)
  }
  return e
}
function Kr(a, b) {
  a.Wn = {};
  var c = Lr(a, b, a.Wn), e = c.groupsHash, f = c.groupIdsToAdd, h = c.groupIdsToUpdate, c = [], j;
  for(j in a.he) {
    e[j] === g && c.push(j)
  }
  for(var f = Or(a, f, e), l = 0;l < h.length;l++) {
    j = h[l];
    var n = a.he[j].jm;
    n.Q = e[j];
    n.Tg !== k ? Pr(n.Tg) : n.df.v()
  }
  e = [];
  for(j = 0;j < c.length;j++) {
    h = c[j], e.push(a.he[h]), delete a.he[h]
  }
  (0 < f.length || 0 < e.length) && a.Sl.v(f, e)
}
function Qr(a, b) {
  if(a.xp !== k) {
    for(var c = Lr(a, b, a.Wn), e = c.groupsHash, f = c.groupIdsToUpdate, c = Or(a, c.groupIdsToAdd, e), h = 0;h < f.length;h++) {
      var j = f[h];
      Rr(a.he[j].jm, 0, -1, e[j])
    }
    0 < c.length && a.Sl.v(c, [])
  }
}
function Sr(a, b) {
  if(a.xp !== k) {
    for(var c = [], e = 0;e < b.length;e++) {
      var f = b[e], h = a.Wn[f];
      delete a.Wn[f];
      if(h !== g) {
        var j = a.he[h];
        Tr(j.jm, 0, -1, [f]);
        0 == j.jm.ta() && (c.push(a.he[h]), delete a.he[h])
      }
    }
    0 < c.length && a.Sl.v([], c)
  }
}
function Mr(a, b) {
  for(var c = "", e = 0;e < a.xp.length;e++) {
    var f = a.xp[e];
    m && (f = a.j.I(b, f.Gt), c = f !== g && f !== k ? c + ("_" + f) : c + "_")
  }
  return c
}
S.prototype.cs = function(a) {
  if(this.qg) {
    for(var b = 0;b < this.qg.length;++b) {
      var c = this.qg[b];
      c.ha = a;
      var e = m;
      try {
        e = Boolean(c.fk.evaluate(c))
      }catch(f) {
        window.console.error("Error when evaluating a filter: " + f)
      }
      if(!e) {
        return m
      }
    }
  }
  return i
};
S.prototype.dy = function(a, b, c) {
  if(!this.se) {
    return this.Q.length
  }
  for(var b = b !== g ? b : 0, c = c !== g ? c : this.Q.length - 1, e = this.Q.length;b < c;) {
    var f = Math.floor((b + c) / 2), h = this.bs(this.Q[f], a);
    if(0 > h) {
      c = f - 1
    }else {
      if(0 < h) {
        b = f + 1
      }else {
        return f
      }
    }
  }
  b >= c && 0 < this.Q.length && (h = this.bs(this.Q[b], a), e = 0 < h ? b + 1 : b);
  return e
};
S.prototype.ru = q("df");
S.prototype.getSchemaChangedEvent = S.prototype.ru;
S.prototype.pu = q("De");
S.prototype.getRowInsertEvent = S.prototype.pu;
S.prototype.qu = q("cf");
S.prototype.getRowUpdateEvent = S.prototype.qu;
S.prototype.nu = q("bf");
S.prototype.getRowDeleteEvent = S.prototype.nu;
S.prototype.aE = q("Sl");
S.prototype.getGroupEvent = S.prototype.aE;
s = S.prototype;
s.Ek = function() {
  Pr(this)
};
s.lh = function(a) {
  Rr(this, a.Qi, a.Vm, a.rh)
};
s.Dk = function(a) {
  Ur(this, a.Qi, a.Vm, a.rh, a.At)
};
s.Ck = function(a) {
  Tr(this, a.Qi, a.Vm, a.rh)
};
function Pr(a) {
  a.lg && a.YE();
  a.Q && (a.Q = k, a.filter(), a.sort());
  a.df.v()
}
function Rr(a, b, c, e) {
  var f = e;
  if(a.Q) {
    f = [];
    b = a.Q.length;
    for(c = 0;c < e.length;c++) {
      var h = e[c];
      if(a.cs(h)) {
        var j = a.dy(h);
        a.Q.splice(j, 0, h);
        j < b && (b = j);
        f.push(h)
      }
    }
    c = a.Q.length - 1
  }
  0 < f.length && (a.Tg !== k ? Rr(a.Tg, b, c, f) : (a.De.v(b, c, f), Qr(a, f)))
}
function Ur(a, b, c, e, f) {
  var h = e, j = [], l = [];
  if(a.Q) {
    for(var h = [], b = a.Q.length, c = -1, n = 0;n < e.length;n++) {
      var o = e[n], u = a.Q.indexOf(o);
      if(-1 === u) {
        a.cs(o) && (u = a.dy(o), a.Q.splice(u, 0, o), u < b && (b = u), j.push(o))
      }else {
        if(a.cs(a.Q[u])) {
          var t = m;
          0 < u && -1 == a.bs(a.Q[u - 1], a.Q[u]) && (t = i);
          u < a.Q.length - 1 && -1 == a.bs(a.Q[u], a.Q[u + 1]) && (t = i);
          var v = 0, y = 0;
          t ? (a.Q.splice(u, 1), t = a.dy(o), a.Q.splice(t, 0, o), v = Math.min(u, t), y = Math.max(u, t)) : y = v = u;
          v < b && (b = v);
          y > c && (c = y);
          h.push(o)
        }else {
          a.Q.splice(u, 1), l.push(o)
        }
      }
    }
    c = -1 !== c ? c : a.Q.length - 1
  }
  0 < j.length && (a.Tg !== k ? Rr(a.Tg, b, c, j) : (a.De.v(b, c, j), Qr(a, j)));
  if(0 < h.length) {
    if(a.Tg !== k) {
      Ur(a.Tg, b, c, h, f)
    }else {
      if(a.cf.v(b, c, h, f), e = h, a.xp !== k) {
        f = [];
        h = [];
        for(j = 0;j < e.length;j++) {
          var n = e[j], o = a.Wn[n], J = Mr(a, n);
          o !== g && o !== J && Tr(a.he[o].jm, 0, -1, [n]);
          a.he[J] === g ? (o = Nr(a, J, [n]), f.push(o)) : o !== g && o !== J ? Rr(a.he[J].jm, 0, -1, [n]) : Ur(a.he[J].jm, 0, -1, [n]);
          a.Wn[n] = J
        }
        for(J in a.he) {
          o = a.he[J], 0 == o.jm.ta() && (h.push(o), delete a.he[J])
        }
        (0 < f.length || 0 < h.length) && a.Sl.v(f, h)
      }
    }
  }
  0 < l.length && (a.Tg !== k ? Tr(a.Tg, b, c, l) : (a.bf.v(b, c, l), Sr(a, l)))
}
function Tr(a, b, c, e) {
  var f = e;
  if(a.Q) {
    f = [];
    b = a.Q.length;
    for(c = 0;c < e.length;c++) {
      var h = e[c];
      if(a.cs(h)) {
        var j = a.Q.indexOf(h);
        a.Q.splice(j, 1);
        j < b && (b = j);
        f.push(h)
      }
    }
    c = a.Q.length - 1 + f.length
  }
  0 < f.length && (a.Tg !== k ? Tr(a.Tg, b, c, f) : (a.bf.v(b, c, f), Sr(a, f)))
}
s.JM = function() {
  this.$y === i && this.bB();
  this.j !== g && this.j !== k && (this.j.df.i(this.Ek, this), this.j.De.i(this.lh, this), this.j.cf.i(this.Dk, this), this.j.bf.i(this.Ck, this), this.$y = i)
};
s.bB = function() {
  this.j !== g && this.j !== k && this.$y && (this.$y = m, this.j.df.H(this.Ek, this), this.j.De.H(this.lh, this), this.j.cf.H(this.Dk, this), this.j.bf.H(this.Ck, this))
};
s.Zr = function() {
  if(this.ke) {
    this.Q = [];
    for(var a = this.ke.dh(), b = 0;b < a.length;b++) {
      this.Q.push(a[b])
    }
  }else {
    this.Q = k
  }
};
s.YE = function() {
  if(this.ke) {
    this.lg = [];
    for(var a = this.ke.Sd(), b = 0;b < a.length;b++) {
      this.lg.push(a[b])
    }
  }else {
    this.lg = k
  }
};
function Vr() {
}
s = Vr.prototype;
s.j = k;
s.dm = k;
s.ir = k;
s.Uq = k;
s.$s = k;
s.cL = function() {
  return this.j ? new S(this.j) : this.dm
};
s.onUpdate = function(a, b, c, e) {
  e = Qa(e);
  e >= this.j.ta() || this.j.mI(e, c)
};
s.onInsert = function(a, b, c, e) {
  e = Qa(e);
  this.j.rt();
  this.j.mI(e, c)
};
s.onDelete = function() {
  0 >= this.j.ta() || this.j.Rz(this.j.ta() - 1)
};
s.QU = function() {
  for(;0 < this.dm.ta();) {
    this.dm.Ck(k)
  }
  eo(this.Uq)
};
s.PU = function() {
  this.dm.lh(k);
  eo(this.$s)
};
s.RU = function() {
  this.dm.Dk(k)
};
function Wr() {
  this.Db = []
}
s = Wr.prototype;
s.clone = function() {
  var a = new Wr;
  a.Db = this.Db.concat();
  a.pa = this.pa;
  a.Bg = this.Bg;
  a.gf = this.gf;
  a.Gc = this.Gc;
  a.nd = this.nd;
  a.gi = this.gi;
  a.$g = this.$g;
  return a
};
s.select = function(a) {
  if(0 > a || 0 <= this.Bg && this.pa >= this.Bg || 0 <= this.gi && a >= this.gi) {
    return m
  }
  if(this.Db[a] !== i) {
    this.Db[a] = i;
    ++this.pa;
    this.$g = i;
    this.gf = a;
    if(0 > this.Gc || a < this.Gc) {
      this.Gc = a
    }
    if(0 > this.nd || a > this.nd) {
      this.nd = a
    }
    return i
  }
  return m
};
s.Lx = function(a) {
  if(this.Db[a] === i && (this.Db[a] = m, --this.pa, this.$g = i, this.gf === a && (this.gf = -1), this.Gc === a && (this.Gc = Xr(this, a)), this.nd === a)) {
    this.nd = Yr(this, a)
  }
};
function Zr(a, b) {
  0 > b || 0 <= a.gi && b >= a.gi || (1 < a.pa && $r(a), 0 === a.pa ? a.select(b) : a.Gc !== b && (a.Db[a.gf] = m, a.Db[b] = i, a.gf = b, a.Gc = b, a.nd = b, a.$g = i))
}
function as(a, b, c) {
  if(1 === c) {
    a.select(b)
  }else {
    var e = b + c;
    0 > c && (e = b + 1, b = e + c);
    0 <= a.gi && e > a.gi && (e = a.gi);
    0 > b && (b = 0);
    if(!(b >= e)) {
      if(0 > a.Gc || b < a.Gc) {
        a.Gc = b
      }
      if(0 > a.nd || e >= a.nd) {
        a.nd = e - 1
      }
      c = 0;
      if(0 <= a.Bg) {
        for(c = b;c < e;++c) {
          if(a.Db[c] !== i) {
            if(a.pa >= a.Bg) {
              break
            }
            a.Db[c] = i;
            ++a.pa;
            a.$g = i
          }
        }
      }else {
        for(c = b;c < e;++c) {
          a.Db[c] !== i && (a.Db[c] = i, ++a.pa, a.$g = i)
        }
      }
    }
  }
}
function bs(a, b, c) {
  if(!(0 >= a.pa)) {
    if(1 === c) {
      a.Lx(b)
    }else {
      var e = b + c;
      0 > c && (e = b + 1, b = e + c);
      0 <= a.gi && e > a.gi && (e = a.gi);
      0 > b && (b = 0);
      if(!(b >= e)) {
        if(a.Gc >= b && a.nd < e) {
          $r(a)
        }else {
          a.gf >= b && a.gf < e && (a.gf = -1);
          a.Gc >= b && a.Gc < e && (a.Gc = Xr(a, e - 1));
          a.nd >= b && a.nd < e && (a.nd = Yr(a, b));
          c = 0;
          for(c = b;c < e;++c) {
            a.Db[c] === i && (a.Db[c] = m, --a.pa, a.$g = i)
          }
        }
      }
    }
  }
}
function cs(a, b, c) {
  if(0 >= a.pa) {
    return m
  }
  var e = b + c;
  0 > c && (e = b + 1, b = e + c);
  if(e < a.Gc || b > a.nd) {
    return m
  }
  for(;b < e;++b) {
    if(a.Db[b] === i) {
      return i
    }
  }
  return m
}
function ds(a) {
  var b = [];
  if(0 < a.pa) {
    for(var c = 0, e = a.Gc;e <= a.nd;++e) {
      a.Db[e] === i && (b[c++] = e)
    }
  }
  return b
}
function $r(a) {
  0 < a.Db.length && (a.Db.length = 0, a.pa = 0, a.gf = -1, a.Gc = -1, a.nd = -1, a.$g = i)
}
function Xr(a, b) {
  if(0 <= a.nd) {
    for(;++b <= a.nd;) {
      if(a.Db[b] === i) {
        return b
      }
    }
  }
  return-1
}
function Yr(a, b) {
  if(0 <= a.Gc) {
    for(;--b >= a.Gc;) {
      if(a.Db[b] === i) {
        return b
      }
    }
  }
  return-1
}
s.Db = k;
s.pa = 0;
s.Bg = -1;
s.gf = -1;
s.Gc = -1;
s.nd = -1;
s.gi = -1;
s.$g = m;
function es(a, b, c) {
  gh.call(this, a, c);
  this.Xn = b
}
C(es, gh);
es.prototype.type = "etk_grid_row_clicked";
es.prototype.Xn = "";
es.prototype.ou = q("Xn");
es.prototype.getRowInfo = es.prototype.ou;
function fs(a, b, c) {
  this.B = new lf;
  I.call(this, a, "RowClicked", b, c)
}
C(fs, I);
fs.prototype.i = function(a, b) {
  G(this.B, "etk_grid_row_clicked", a, g, b)
};
fs.prototype.listen = fs.prototype.i;
fs.prototype.H = function(a, b) {
  Ve(this.B, "etk_grid_row_clicked", a, g, b)
};
fs.prototype.unlisten = fs.prototype.H;
fs.prototype.la = function() {
  Ze(this.B, "etk_grid_row_clicked")
};
fs.prototype.unlistenAll = fs.prototype.la;
fs.prototype.v = function(a, b) {
  var c = new es(b, a, this.aa);
  Ah(this) && (this.B.dispatchEvent(c), this.md == i && wh.g().Nd(this.aa.P(), this.Fc, a, this.Kc))
};
function gs() {
  this.OC = [];
  this.tb = [];
  this.HE = [];
  this.HC = []
}
s = gs.prototype;
s.OC = k;
s.tb = k;
s.HE = k;
s.HC = k;
s.rL = q("tb");
s.SD = q("HC");
function hs(a) {
  for(var b = a.querySelectorAll('div[grid-component-type="GridItemBinding"]'), c = [], e = 0;e < b.length;e++) {
    var f = b[e], h = is(f);
    c.push(h);
    a.removeChild(f)
  }
  return c
}
function is(a) {
  a = a.getAttribute("grid-component-ctor");
  return w(a) ? JSON.parse(a) : {}
}
;function js() {
}
js.prototype.toString = function() {
  return this.message === k ? "hit: nothing" : "hit: " + this.message + " r: " + this.rowIndex + " c: " + this.Wi
};
js.prototype.toString = js.prototype.toString;
js.prototype.message = k;
js.prototype.PC = k;
js.prototype.rowIndex = -1;
js.prototype.Wi = -1;
function ks() {
  this.Kg = {};
  this.Bi = [0, 0, 0, 0];
  this.og = [];
  this.Px = [];
  this.Qm = []
}
s = ks.prototype;
s.clone = function() {
  d(Error("Clone method for TableStyle has not implemented yet"))
};
s.uh = function(a, b, c, e) {
  ls(this, c, 0, a, b, e)
};
function ms(a) {
  a.og.length = 0;
  a.Px.length = 0;
  a.Qm.length = 0
}
function ns(a, b, c) {
  var e = {}, f = i, h = i, j;
  for(j in a.Kg) {
    var l = os(a, j, 0, b, c);
    if(f = l === k) {
      if(l = os(a, j, 1, 0, c), f = l === k) {
        if(l = os(a, j, 2, b, 0), f = l === k) {
          l = os(a, j, 3, 0, 0), f = l === k
        }
      }
    }
    f || (e[j] = l, h = m)
  }
  return h ? k : e
}
function ps(a, b) {
  for(var c = a.og.length;0 <= --c;) {
    a.og[c] >= b && ++a.og[c]
  }
  for(var e in a.Kg) {
    c = a.Kg[e][2], c !== g && c.splice(b, 0, k)
  }
}
s.Rn = function(a) {
  for(var b = this.og.length;0 <= --b;) {
    this.og[b] > a ? --this.og[b] : this.og[b] === a && this.og.splice(b, 1)
  }
  for(var c in this.Kg) {
    b = this.Kg[c][2], b !== g && b.splice(a, 1)
  }
};
function os(a, b, c, e, f) {
  a = a.Kg[b];
  if(a === g) {
    return k
  }
  c = a[c];
  if(c === g || c === k) {
    return k
  }
  e = c[e];
  if(e === g || e === k) {
    return k
  }
  f = e[f];
  return f === g ? k : f
}
function qs(a, b, c, e) {
  if(0 >= a.Bi[b]) {
    return k
  }
  var f = {}, h;
  for(h in a.Kg) {
    var j = os(a, h, b, c, e);
    j !== k && (f[h] = j)
  }
  return f
}
function ls(a, b, c, e, f, h) {
  var j;
  j = a.Kg[b];
  j === g && (j = [k, k, k, k], a.Kg[b] = j);
  b = j[c];
  if(b === g || b === k) {
    b = [], j[c] = b
  }
  j = b[e];
  if(j === g || j === k) {
    j = [], b[e] = j
  }
  if(j[f] !== h) {
    j[f] === g && ++a.Bi[c];
    j[f] = h;
    switch(c) {
      case 0:
        a.Qm.push({x:e, y:f});
        break;
      case 1:
        a.Px.push(f);
        break;
      case 2:
        a.og.push(e)
    }
    return i
  }
  return m
}
function rs(a, b) {
  if(!(0 >= a.Bi[b])) {
    for(var c in a.Kg) {
      var e = a.Kg[c][b];
      if(e !== g && e !== k) {
        for(var f = e.length;0 <= --f;) {
          var h = e[f];
          if(h !== g && h !== k) {
            for(h = h.length;0 <= --h;) {
              switch(b) {
                case 0:
                  a.Qm.push({x:f, y:h});
                  break;
                case 1:
                  a.Px.push(h);
                  break;
                case 2:
                  a.og.push(f)
              }
            }
          }
        }
      }
      delete a.Kg[c][b]
    }
    a.Bi[b] = 0
  }
}
function ss(a, b, c, e, f) {
  var h = m, j;
  for(j in f) {
    h |= ls(a, j, b, c, e, f[j])
  }
}
s.Kg = k;
s.Bi = k;
s.og = k;
s.Px = k;
s.Qm = k;
function ts(a, b, c) {
  this.element = a;
  this.Eg = b;
  this.event = c
}
ts.prototype.element = "";
ts.prototype.Eg = "";
ts.prototype.event = "";
function us(a, b) {
  this.Al = a;
  this.Kh = b;
  this.Qh = []
}
us.prototype.la = function() {
  if(w(this.Al)) {
    for(var a = "get" + this.Al.event + "Event", b = 0;b < this.Qh.length;b++) {
      this.Qh[b][a]().H(this.xe, this)
    }
    this.Qh.length = 0
  }
};
var vs = m;
us.prototype.Qh = k;
us.prototype.Al = k;
us.prototype.Kh = k;
us.prototype.xe = function(a) {
  if(!vs) {
    var b = a.aa;
    if(w(this.Al)) {
      var c = this.Al.Eg, e = k;
      if(w(this.Al.Eg)) {
        var f = "get" + c.charAt(0).toUpperCase() + (1 < c.length ? c.substr(1) : "");
        w(b) ? e = b[f]().toString() : (b = a.dL().currentTarget, w(b[c]) && (e = b[c]))
      }
      w(this.Kh) && this.Kh(a, b, e, this.Al)
    }
  }
};
function ws(a) {
  this.Bd(a);
  0 >= this.name.length && (this.name = "default" + ws.prototype.ZL);
  ws.prototype.ZL++
}
s = ws.prototype;
s.ZL = 0;
s.name = "";
s.Rm = "";
s.hg = i;
s.width = 0;
s.gg = "";
s.PH = m;
s.Jg = "";
s.dt = m;
s.yz = "";
s.RA = "";
s.oI = m;
s.Ri = k;
s.Xm = k;
s.wC = 0;
s.ak = m;
s.Bd = function(a) {
  a.hasOwnProperty("blinkMode") && (this.wC = a.blinkMode);
  a.hasOwnProperty("name") && (this.name = a.name);
  a.hasOwnProperty("sortable") && (this.PH = a.sortable);
  a.hasOwnProperty("sortBy") && (this.Jg = a.sortBy);
  a.hasOwnProperty("tooltip") && (this.gg = a.tooltip);
  a.hasOwnProperty("visible") && (this.hg = a.visible);
  a.hasOwnProperty("width") && (this.width = a.width);
  a.hasOwnProperty("title") && (this.Rm = a.title);
  this.dt = m;
  this.yz = this.RA = "";
  var b = ga(a.control);
  if("string" === b) {
    0 < a.control.length && (this.RA = a.control, this.dt = i)
  }else {
    if("object" === b) {
      var b = [], c = {};
      if(a.control.type !== g && a.control.type !== k) {
        c.type = a.control.type
      }else {
        if(a.control.__type !== g && a.control.__type !== k) {
          var e = a.control.__type, f = e.indexOf(":");
          c.type = e.substr(0, f)
        }
      }
      if(a.control.name === g || a.control.name === k) {
        a.control.name = a.controlName
      }
      c.TF = JSON.stringify(a.control);
      b.push(c);
      this.yz = JSON.stringify(b);
      this.dt = i
    }
  }
  this.Ri = [];
  this.Ri.length = 0;
  a.bindings !== g && a.bindings !== k && (this.Ri = a.bindings);
  this.oI = 0 < this.Ri.length;
  this.Xm = [];
  this.Xm.length = 0;
  if(a.events !== g && a.events !== k) {
    for(b = 0;b < a.events.length;b++) {
      c = a.events[b], this.Xm.push(new ts(c.element, c.property, c.event))
    }
  }
  this.ak = i
};
s.setProperty = function(a, b) {
  this[a] !== g && (this[a] = b);
  this.Ti !== g && this.Ti !== k && this.Ti(a, b)
};
s.Ti = k;
function xs(a) {
  this.Ta = w(a) ? a : this.Ta
}
xs.prototype.wh = ba("Ta");
xs.prototype.getParent = q("Ta");
xs.prototype.Ta = k;
function ys() {
}
function zs(a, b) {
  for(var c = a.length - b, e = 0, f = 0;f < c;++f) {
    e = 10 * e + (a.charCodeAt(f) - 48)
  }
  return e
}
ys.prototype.lowerBound = function(a, b, c, e) {
  if(c === g || 0 > c) {
    c = 0
  }
  if(e === g || 0 > e || e > a.length) {
    e = a.length
  }
  c > e && (c = e);
  for(var f = 0;e > c;) {
    f = c + e >> 1, a[f] < b ? c = f + 1 : e = f
  }
  return c
};
function As() {
}
function Bs(a) {
  var b = {};
  -1 !== a.indexOf("px", a.length - 2) ? (b.MH = 0, b.value = zs(a, 2)) : -1 !== a.indexOf("%", a.length - 1) && (b.MH = 1, b.value = zs(a, 1));
  return b
}
As.prototype.Mb = function(a) {
  var b = k;
  switch(a) {
    case 1:
      b = "right";
      break;
    case 2:
      b = "center";
      break;
    case 3:
      b = "justify";
      break;
    default:
      b = ""
  }
  return b
};
As.prototype.pQ = String.fromCharCode(9650) + " ";
As.prototype.JP = String.fromCharCode(9660) + " ";
function Cs(a) {
  mj.call(this, a);
  this.UF = new xs;
  this.zb = [];
  this.Mo = new ks;
  this.sk = new ks;
  this.Xq = new ks;
  this.rk = new ks;
  this.PA = [];
  this.Sg = new Wr;
  a.hasOwnProperty("alternateShading") && (this.Rq = a.alternateShading);
  a.hasOwnProperty("autoScroll") && (this.Uw = a.autoScroll);
  a.hasOwnProperty("borderVisible") && (this.ex = a.borderVisible);
  a.hasOwnProperty("columnHeaderVisible") && (this.ux = a.columnHeaderVisible);
  a.hasOwnProperty("dataTableId") && (this.Rh = a.dataTableId);
  a.hasOwnProperty("fillContainerHeight") && (this.yr = a.fillContainerHeight);
  a.hasOwnProperty("frozen") && (this.bh = a.frozen);
  a.hasOwnProperty("gridLinesVisibility") && (this.su = a.gridLinesVisibility);
  a.hasOwnProperty("gridLineVisible") && (this.Pr = a.gridLineVisible);
  a.hasOwnProperty("height") && (this.height = a.height);
  a.hasOwnProperty("heightUnit") && (this.Sr = a.heightUnit);
  a.hasOwnProperty("itemSource") && (this.uF = a.itemSource);
  a.hasOwnProperty("mouseOverEnabled") && (this.ss = a.mouseOverEnabled);
  a.hasOwnProperty("overRow") && (this.jv = a.overRow);
  a.hasOwnProperty("rowCount") && (this.Un = a.rowCount);
  a.hasOwnProperty("rowHeight") && (this.Vn = a.rowHeight);
  a.hasOwnProperty("scrollbarVisible") && (this.Bv = a.scrollbarVisible);
  a.hasOwnProperty("selectionMode") && (this.Fj = a.selectionMode);
  a.hasOwnProperty("sortBy") && (this.Jg = a.sortBy);
  a.hasOwnProperty("sortMethod") && (this.Am = a.sortMethod);
  a.hasOwnProperty("tabDirection") && (this.OA = a.tabDirection);
  a.hasOwnProperty("tabGroup") && (this.Nj = a.tabGroup);
  a.hasOwnProperty("title") && (this.title = a.title);
  a.hasOwnProperty("titleVisible") && (this.XA = a.titleVisible);
  a.hasOwnProperty("transpose") && (this.Hi = a.transpose);
  a.hasOwnProperty("useColumnPadding") && (this.gB = a.useColumnPadding);
  a.hasOwnProperty("useRealTimeData") && (this.pI = a.useRealTimeData);
  a.hasOwnProperty("visibleRowCount") && (this.el = a.visibleRowCount);
  a.hasOwnProperty("width") && (this.width = a.width);
  a.hasOwnProperty("widthUnit") && (this.kt = a.widthUnit);
  Ds(this, a.columnDefinitions);
  Es(this, a.headerRows);
  Fs(this, a.cellStyles);
  if(a.selectedRows !== g) {
    for(var b = 0;b < a.selectedRows.length;++b) {
      this.Sg.select(parseInt(a.selectedRows[b], 10))
    }
  }
}
C(Cs, mj);
s = Cs.prototype;
s.$j = new As;
s.title = "";
s.zb = k;
s.Vn = -1;
s.el = 0;
s.Un = 0;
s.An = 0;
s.Jg = "";
s.Am = 2;
s.XA = i;
s.ux = i;
s.Pr = i;
s.ex = i;
s.gB = i;
s.Bv = 3;
s.Rq = i;
s.pI = m;
s.uF = "";
s.Rh = "";
s.Sg = k;
s.Fj = 0;
s.jv = -1;
s.ss = m;
s.Uw = m;
s.width = -1;
s.kt = 0;
s.height = -1;
s.Sr = 0;
s.bh = m;
s.su = 1;
s.Hi = m;
s.OA = 1;
s.Nj = k;
s.PA = k;
s.yr = m;
s.Mo = k;
s.sk = k;
s.Xq = k;
s.rk = k;
s.mV = k;
s.wh = function(a) {
  this.UF.wh(a)
};
s.getParent = function() {
  return this.UF.getParent()
};
function Ds(a, b) {
  if(b !== g) {
    for(var c = b.length, e = 0;e < c;++e) {
      a.pt(b[e])
    }
  }
}
s.pt = function(a, b) {
  if(a !== g) {
    var c = this.zb.length, e = new ws(a);
    b === g ? (b = c, this.zb.push(e), Gs(this, b, 1)) : (0 > b ? b = 0 : b > c && (b = c), this.zb.splice(b, 0, e), ps(this.sk, b), ps(this.Mo, b), Gs(this, b, c));
    Hs(this, b, a)
  }
};
s.lI = function(a, b) {
  if(b !== g) {
    var c = this.zb[a];
    c === g || c === k || (c.Bd(b), Gs(this, a, 1), Hs(this, a, b))
  }
};
s.PG = function(a) {
  if(!(0 >= this.zb.length)) {
    var b = this.zb.length - 1;
    a === g || a >= b ? (this.zb.pop(), this.sk.Rn(b), this.Mo.Rn(b)) : (0 > a && (a = 0), this.zb.splice(a, 1), this.sk.Rn(a), this.Mo.Rn(a), Gs(this, a, b))
  }
};
function Es(a, b) {
  if(b !== g) {
    for(var c = b.length, e = 0;e < c;++e) {
      a.Mw(b[e])
    }
  }
}
s.Mw = function(a) {
  if(!(a === g || a.cells === g)) {
    for(var a = a.cells, b = this.zb.length, c = 0, e = a.length, f = 0;f < e;f++) {
      var h = a[f], j = 1;
      if(c >= b) {
        window.console.log("WARNING: Invalid header cell input detected and is omited");
        break
      }
      h.value !== g && this.rk.uh(c, this.An, "displayText", h.value);
      h.columnSpan !== g && (j = Number(h.columnSpan), j !== j || 1 > j ? j = 1 : this.rk.uh(c, this.An, "colSpan", j));
      h.horizontalAlignment !== g && (h = this.$j.Mb(h.horizontalAlignment), this.sk.uh(c, this.An, "textAlign", h), "justify" === h && this.sk.uh(c, this.An, "whiteSpace", "normal"));
      c += j
    }
    ++this.An
  }
};
function Fs(a, b) {
  if(b !== g) {
    for(var c = b.length, e = 0;e < c;e++) {
      Is(a, b[e])
    }
  }
}
function Is(a, b) {
  if(b !== g) {
    var c = Number(b.row), e = Number(b.column);
    if(0 <= c && 0 <= e) {
      if(b.columnSpan !== g) {
        var f = Number(b.columnSpan);
        if(f !== f || 1 > f) {
          f = 1
        }
        a.Xq.uh(e, c, "colSpan", f)
      }
    }else {
      window.console.log("WARNING: Invalid body cell style detected and is omited")
    }
  }
}
function Gs(a, b, c) {
  c = b + c;
  c > a.zb.length && (c = a.zb.length);
  for(;b < c;++b) {
    a.rk.uh(b, 0, "displayText", a.zb[b].Rm)
  }
}
s.ad = function() {
  return 0 < this.Vn ? this.Vn : 32
};
function Hs(a, b, c) {
  if(c !== g) {
    var e = a.zb[b], f = {paddingLeft:"", paddingRight:"", textAlign:"", verticalAlign:"", whiteSpace:""};
    if(a.gB) {
      if(c.paddingLeft !== g) {
        var h = Number(c.paddingLeft);
        8 !== h && (f.paddingLeft = h + "px")
      }
      c.paddingRight !== g && (h = Number(c.paddingRight), 8 !== h && (f.paddingRight = h + "px"))
    }
    c.horizontalAlignment !== g && (h = a.$j.Mb(c.horizontalAlignment), f.textAlign = h, "justify" === h && (f.whiteSpace = "normal"));
    if(c.verticalAlignment !== g) {
      h = k;
      switch(c.verticalAlignment) {
        case 1:
          h = "middle";
          break;
        case 2:
          h = "top";
          break;
        case 3:
          h = "bottom";
          break;
        case 4:
          h = "inherit";
          break;
        default:
          h = ""
      }
      f.verticalAlign = h
    }
    ss(a.sk, 2, b, 0, f);
    ss(a.Mo, 2, b, 0, f);
    c = "";
    e.PH && 0 < e.Jg.length && (c = "pointer");
    ls(a.sk, "cursor", 2, b, 0, c)
  }
}
s.UF = k;
function Js(a, b) {
  this.contents = [];
  this.background = new jk("bg");
  nk(this.background);
  this.border = pk(this.background);
  nk(this.border);
  this.border.Gv(i, i, i, i);
  if(this.Jn !== a && (this.Jn !== k && (lk(this.background, this.Jn, m), lk(this.border, this.Jn, m)), this.Jn = a, this.Jn !== k)) {
    lk(this.background, this.Jn, i), lk(this.border, this.Jn, i)
  }
  b !== g ? Ks(this, b) : Ks(this, a)
}
s = Js.prototype;
s.po = function(a, b) {
  this.background.po(a, b)
};
s.ba = function() {
  Ls(this);
  this.background.ba();
  this.border = this.background = k
};
function Ms(a, b) {
  b !== k && (a.Ph !== k && lk(b, a.Ph, i), a.contents.push(b))
}
function Ls(a) {
  if(0 < a.contents.length) {
    if(a.Ph !== k) {
      for(var b = a.contents.length;0 <= --b;) {
        lk(a.contents[b], a.Ph, m)
      }
    }
    a.contents.length = 0
  }
}
function Ks(a, b) {
  if(a.Ph !== b) {
    var c = 0;
    if(a.Ph !== k) {
      for(c = a.contents.length;0 <= --c;) {
        lk(a.contents[c], a.Ph, m)
      }
    }
    a.Ph = b;
    if(a.Ph !== k) {
      for(c = a.contents.length;0 <= --c;) {
        lk(a.contents[c], a.Ph, i)
      }
    }
  }
}
s.Se = function() {
  return this.background.Se()
};
s.F = function(a) {
  if(this.background.Se() !== a && (this.background.F(a), this.Ph !== k)) {
    for(var b = this.contents.length;0 <= --b;) {
      lk(this.contents[b], this.Ph, a)
    }
  }
};
s.Pv = function(a, b, c, e) {
  this.background.Pv(a, b, c, e)
};
s.Ic = function() {
  return this.background.Ic()
};
s.Ge = function(a) {
  this.background.pd(a)
};
s.sc = function() {
  return this.background.sc()
};
s.pd = function(a) {
  this.background.pd(a)
};
s.Ha = function() {
  return this.background.Ha()
};
s.xa = function(a) {
  this.background.xa(a)
};
s.va = function() {
  return this.background.va()
};
s.Ma = function(a) {
  this.background.Ma(a)
};
s.background = k;
s.border = k;
s.contents = k;
s.Jn = k;
s.Ph = k;
s.ZJ = -1;
function Ns() {
  this.Lc = [];
  this.Ry = {}
}
function Os(a, b) {
  var c;
  0 >= b.length ? c = k : (c = {}, c.name = b, c.children = []);
  c !== k && (a.Lc.push(c), Ps(a, a.Lc.length - 1))
}
s = Ns.prototype;
s.xg = function(a) {
  a = this.Ry[a];
  return a === g || a === k ? NaN : a + this.Bw
};
s.Ca = function(a, b) {
  var c = Qs(this, a);
  0 > c || (this.Lc[c].children.push(b), b.Hg(c + this.Bw))
};
s.removeChild = function(a, b) {
  var c = Qs(this, a);
  if(!(0 > c)) {
    for(var c = this.Lc[c].children, e = c.length;0 <= --e;) {
      if(c[e] === b) {
        c.splice(e, 1);
        break
      }
    }
  }
};
function Qs(a, b) {
  var c = a.Ry[b];
  return c === g || c === k ? -1 : c
}
function Ps(a, b) {
  for(var c = a.Lc.length, e = b;e < c;++e) {
    for(var f = a.Lc[e], h = f.children.length;0 <= --h;) {
      f.children[h].Hg(e + a.Bw)
    }
    a.Ry[f.name] = e
  }
}
s.Lc = k;
s.Ry = k;
s.Bw = 0;
function Rs() {
  this.Gb = [];
  this.hf = []
}
s = Rs.prototype;
s.clone = function() {
  var a = new Rs;
  a.Ch = this.Ch;
  a.Me = this.Me;
  a.yg = this.yg;
  a.Gb = this.Gb.concat();
  a.pg = this.pg;
  a.hf = this.hf.concat();
  this.ng !== k && (a.ng = this.ng.concat());
  this.os !== k && (a.os = this.os.concat());
  this.it !== k && (a.it = this.it.concat());
  return a
};
s.Ue = function(a) {
  a -= this.Ch;
  if(0 > a) {
    return-1
  }
  var b = Ss(this);
  if(a >= b) {
    return~this.Gb.length
  }
  b = -1;
  if(0 >= this.hf.length) {
    var c = this.Me + this.yg, b = Math.floor(a / c);
    a >= (b + 1) * c - this.yg && (b = ~b)
  }else {
    b = this.RW.lowerBound(this.Gb, a), 0 < b && a < this.Gb[b - 1] + this.yg && (b = ~b)
  }
  return b
};
s.toString = function() {
  return"[" + this.Gb.join(", ") + "]"
};
function Ts(a, b) {
  0 > b && (b = 0);
  var c = a.Gb.length;
  if(b !== c) {
    var e = c;
    b < c && (e = b, a.hf.length = b);
    e < a.pg && (a.pg = e);
    a.Gb.length = b
  }
}
function Us(a, b) {
  0 > b && (b = 0);
  a.Me !== b && (a.Me = b, a.pg = 0)
}
function Ss(a) {
  var b = a.Gb.length;
  if(0 >= b) {
    return 0
  }
  if(0 >= a.hf.length) {
    return 1 === b ? a.Me : b * a.Me + (b - 1) * a.yg
  }
  Vs(a);
  return a.Gb[b - 1]
}
function Ws(a, b) {
  if(0 > b || b >= a.Gb.length) {
    return NaN
  }
  if(0 === b) {
    return a.Ch
  }
  if(0 >= a.hf.length) {
    return a.Ch + b * (a.Me + a.yg)
  }
  Vs(a);
  return a.Ch + a.Gb[b - 1] + a.yg
}
function Xs(a, b) {
  if(0 > b || b >= a.Gb.length) {
    return NaN
  }
  if(0 === b) {
    return a.Ch + a.Me
  }
  if(0 >= a.hf.length) {
    return a.Ch + (b + 1) * a.Me + b * a.yg
  }
  Vs(a);
  return a.Ch + a.Gb[b]
}
function Ys(a, b) {
  return a.ng !== k && a.ng[b] !== g ? a.ng[b] : a.Me
}
function Zs(a, b, c) {
  if(!(0 > b || b >= a.Gb.length)) {
    if(a.ng === k && (a.ng = []), a.ng[b] !== c) {
      var e = a.os !== k && a.os[b] !== g ? a.os[b] : 0;
      a.ng[b] = c > e ? c : e;
      c = a.hf[b] !== g ? a.hf[b] : a.Me;
      e = a.Me;
      a.it !== k && a.it[b] === m ? e = 0 : a.ng !== k && a.ng[b] !== g && (e = a.ng[b]);
      c !== e && (a.hf[b] = e, b < a.pg && (a.pg = b))
    }
  }
}
function $s(a) {
  a.it = k;
  a.ng = k;
  a.hf.length = 0;
  a.pg = 0
}
function Vs(a) {
  var b = a.Gb.length;
  if(!(a.pg >= b)) {
    0 >= a.pg && (a.Gb[0] = a.hf[0] !== g ? a.hf[0] : a.Me, a.pg = 1);
    for(var c = a.Gb[a.pg - 1], e = a.pg;e < b;++e) {
      c += a.yg + (a.hf[e] !== g ? a.hf[e] : a.Me), a.Gb[e] = c
    }
    a.pg = a.Gb.length
  }
}
s.Ch = 0;
s.Me = 0;
s.yg = 0;
s.Gb = k;
s.pg = 0;
s.hf = k;
s.ng = k;
s.os = k;
s.it = k;
s.RW = new ys;
function at() {
  this.td = new Rs;
  this.oc = new Rs
}
s = at.prototype;
s.clone = function() {
  var a = new at;
  a.td = this.td.clone();
  a.oc = this.oc.clone();
  if(this.ae !== k) {
    a.ae = [];
    for(var b in this.ae) {
      a.ae[b] = this.ae.slice()
    }
  }
  return a
};
s.Ue = function(a, b) {
  var c = this.Wr(a);
  if(0 > c) {
    return k
  }
  var e = this.Ul(b);
  if(0 > e) {
    return k
  }
  var f = new js;
  f.Wi = c;
  f.rowIndex = e;
  c = bt(this, a, b);
  c !== k && 0 <= c.mi && (f.Wi = c.mi, f.rowIndex = c.YF);
  return f
};
s.Wr = function(a) {
  return this.td.Ue(a)
};
s.Ul = function(a) {
  return this.oc.Ue(a)
};
s.toString = function() {
  var a = "X-Axis : " + this.td.toString() + "\n";
  return a += "Y-Axis : " + this.oc.toString()
};
s.Ic = function() {
  return this.td.Ch
};
s.Ge = function(a) {
  this.td.Ch = a
};
s.sc = function() {
  return this.oc.Ch
};
s.pd = function(a) {
  this.oc.Ch = a
};
s.Ha = function() {
  return Ss(this.td)
};
s.xa = function() {
  d(Error("Not implemented"))
};
s.va = function() {
  return Ss(this.oc)
};
s.Ma = function() {
  d(Error("Not implemented"))
};
s.mf = function() {
  return this.td.Gb.length
};
s.vh = function(a) {
  Ts(this.td, a)
};
s.ta = function() {
  return this.oc.Gb.length
};
s.Yd = function(a) {
  Ts(this.oc, a)
};
s.du = function() {
  return this.td.Me
};
s.kq = function(a) {
  Us(this.td, a)
};
s.pp = function() {
  return this.oc.Me
};
s.sm = function(a) {
  Us(this.oc, a)
};
s.hk = function(a) {
  return Ys(this.td, a)
};
s.Mk = function(a, b) {
  Zs(this.td, a, b)
};
s.ad = function(a) {
  return Ys(this.oc, a)
};
s.Gg = function(a, b) {
  Zs(this.oc, a, b)
};
s.Gl = function(a) {
  return Ws(this.td, a)
};
s.de = function(a) {
  return Ws(this.oc, a)
};
s.mp = function(a, b) {
  var c = bt(this, a, b);
  if(c !== k && 0 > c.mi && 1 < c.colSpan) {
    var e = Ws(this.td, a), c = a + c.colSpan - 1;
    c >= this.td.Gb.length && (c = this.td.Gb.length - 1);
    return Xs(this.td, c) - e
  }
  return this.hk(a)
};
s.kp = function(a, b) {
  var c = bt(this, a, b);
  if(c !== k && 0 > c.mi && 1 < c.rowSpan) {
    var e = Ws(this.oc, b), c = b + c.rowSpan - 1;
    c >= this.oc.Gb.length && (c = this.oc.Gb.length - 1);
    return Xs(this.oc, c) - e
  }
  return this.ad(b)
};
s.lp = function(a, b) {
  var c = bt(this, a, b);
  return c === k ? 1 : 0 > c.mi ? c.rowSpan : 0
};
s.ho = function(a, b, c) {
  if(!(0 > a || 0 > b)) {
    if(1 > c && (c = 1), !(1 === c && this.ae === k)) {
      var e = ct(this, a, b);
      if(!(0 <= e.mi || e.rowSpan === c)) {
        var f = c, h = 0, j = e.rowSpan, l = -1, n = -1, o = k;
        if(c > e.rowSpan) {
          f = e.rowSpan;
          for(j = c;f < j;) {
            for(h = 0;h < e.colSpan;++h) {
              if(o = bt(this, a + h, b + f), o !== k && 0 <= o.mi) {
                return
              }
            }
            ++f
          }
          l = a;
          n = b;
          f = e.rowSpan;
          j = c
        }
        for(;f < j;) {
          for(h = 0;h < e.colSpan;++h) {
            o = ct(this, a + h, b + f), o.mi = l, o.YF = n
          }
          ++f
        }
        e.rowSpan = c
      }
    }
  }
};
s.Fr = function(a, b) {
  var c = bt(this, a, b);
  return c === k ? 1 : 0 > c.mi ? c.colSpan : 0
};
s.fo = function(a, b, c) {
  if(!(0 > a || 0 > b)) {
    if(1 > c && (c = 1), !(1 === c && this.ae === k)) {
      var e = ct(this, a, b);
      if(!(0 <= e.mi || e.colSpan === c)) {
        var f = 0, h = c, j = e.colSpan, l = -1, n = -1, o = k;
        if(c > e.colSpan) {
          h = e.colSpan;
          for(j = c;h < j;) {
            for(f = 0;f < e.rowSpan;++f) {
              if(o = bt(this, a + h, b + f), o !== k && 0 <= o.mi) {
                return
              }
            }
            ++h
          }
          l = a;
          n = b;
          h = e.colSpan;
          j = c
        }
        for(;h < j;) {
          for(f = 0;f < e.rowSpan;++f) {
            o = ct(this, a + h, b + f), o.mi = l, o.YF = n
          }
          ++h
        }
        e.colSpan = c
      }
    }
  }
};
s.br = function() {
  this.ae = k
};
s.Gr = function() {
  return this.td.yg
};
s.Lr = function() {
  return this.oc.yg
};
s.So = function() {
  $s(this.td)
};
s.cr = function() {
  $s(this.oc)
};
function bt(a, b, c) {
  if(a.ae === k) {
    return k
  }
  a = a.ae[b];
  return a === g || a === k || a[c] === g ? k : a[c]
}
function ct(a, b, c) {
  a.ae === k && (a.ae = []);
  var e = a.ae[b];
  if(e === g || e === k) {
    e = [], a.ae[b] = e
  }
  e = e[c];
  if(e === g || e === k) {
    e = {rowSpan:1, colSpan:1, mi:-1, YF:-1}, a.ae[b][c] = e
  }
  return e
}
s.td = k;
s.oc = k;
s.ae = k;
function dt(a) {
  this.p = new at;
  var b = this.Lc = new Ns;
  1 !== b.Bw && (b.Bw = 1, Ps(b, 0));
  Os(this.Lc, "rowBG");
  Os(this.Lc, "content");
  Os(this.Lc, "span");
  Os(this.Lc, "border");
  Os(this.Lc, "highlight");
  Os(this.Lc, "selection");
  this.Cc = new jk(a);
  this.Eb = new jk;
  ok(this.Eb, "backgroundColor", "inherit");
  ok(this.Eb, "borderColor", "transparent");
  a = this.Eb;
  "hidden" !== a.D.style.overflowX && (a.D.style.overflowX = "hidden", a.D.style.ya = "ellipsis", a.D.style.whiteSpace = "nowrap");
  a = this.Eb;
  "hidden" !== a.D.style.overflowY && (a.D.style.overflowY = "hidden");
  this.uo = [];
  this.cb = [];
  this.Eb.po(this.Cc)
}
s = dt.prototype;
s.clone = function() {
  d(Error("Not implemented"))
};
s.toString = function() {
  var a = "View: " + this.Eb.toString() + "\n";
  return a += this.p.toString()
};
s.dj = function(a, b) {
  var c = this.cb[a];
  return c !== g && (c = c[b], c !== g) ? c : k
};
s.moveTo = function(a, b) {
  this.Ge(a);
  this.pd(b)
};
s.i = function(a, b, c, e) {
  this.Cc.i(a, b, c, e)
};
s.ku = function(a) {
  return this.Eb.ku(a)
};
s.Hj = function(a) {
  this.Cc.Hj(a);
  a !== k && (et(this), ft(this))
};
s.Cs = function() {
  this.Cc.Cs()
};
s.ba = function() {
  this.Cc.ba()
};
s.Se = function() {
  return this.Cc.Se()
};
s.F = function(a) {
  this.Cc.F(a)
};
s.Ic = function() {
  return this.Cc.Ic()
};
s.Ge = function(a) {
  this.Cc.Ge(a)
};
s.sc = function() {
  return this.Cc.sc()
};
s.pd = function(a) {
  this.Cc.pd(a)
};
s.Ha = function() {
  return this.Cc.Se() === m ? 0 : this.vw ? this.Hr() : this.Eb.Ha()
};
s.xa = function(a) {
  0 > a ? this.vw === m && (this.vw = i, et(this)) : (this.vw = m, this.Eb.xa(a))
};
s.va = function() {
  return this.Cc.Se() === m ? 0 : this.uw ? this.Hl() : this.Eb.va()
};
s.Ma = function(a) {
  (this.uw = 0 > a) ? ft(this) : this.Eb.Ma(a)
};
s.vy = function() {
  return this.Cc.Ic() + this.Ha()
};
s.jp = function() {
  return this.Cc.sc() + this.va()
};
s.un = function() {
  return this.Eb.un()
};
s.so = function(a) {
  this.Eb.so(a)
};
s.nk = function() {
  return this.Eb.nk()
};
s.Ij = function(a) {
  this.Eb.Ij(a)
};
s.Gv = function(a, b, c, e) {
  this.Ff === k && (this.Ff = pk(this.Eb));
  this.Ff.Gv(a, b, c, e)
};
s.nq = function(a) {
  if(this.Ff === k) {
    if(a === m) {
      return
    }
    this.Ff = pk(this.Eb)
  }
  this.Ff.nq(a)
};
s.sq = function(a) {
  if(this.Ff === k) {
    if(a === m) {
      return
    }
    this.Ff = pk(this.Eb)
  }
  this.Ff.sq(a)
};
s.qo = function(a) {
  if(this.Ff === k) {
    if(a === m) {
      return
    }
    this.Ff = pk(this.Eb)
  }
  this.Ff.qo(a)
};
s.Lk = function(a) {
  if(this.Ff === k) {
    if(a === m) {
      return
    }
    this.Ff = pk(this.Eb)
  }
  this.Ff.Lk(a)
};
s.xg = function() {
  return this.Cc.xg()
};
s.Hg = function(a) {
  this.Cc.Hg(a)
};
s.Ue = function(a, b) {
  var c = a - this.Cc.Ic(), e = b - this.Cc.sc();
  return 0 > c || 0 > e || c >= this.Ha() || e >= this.va() ? k : this.LE(c + this.Eb.un(), e + this.Eb.nk())
};
s.Wr = function(a) {
  a -= this.Cc.Ic();
  return 0 > a ? -1 : a >= this.Ha() ? ~this.Rb : this.ME(a + this.Eb.un())
};
s.Ul = function(a) {
  a -= this.Cc.sc();
  return 0 > a ? -1 : a >= this.va() ? ~this.Qb : this.Vr(a + this.Eb.nk())
};
s.mf = q("Rb");
s.vh = function(a) {
  0 > a && (a = 0);
  if(this.Rb !== a) {
    var b = this.Rb;
    this.p.vh(a);
    this.Rb = this.p.mf();
    b > a ? (gt(this, a, 0, b, this.Qb), this.cb.length = a) : ht(this, b, 0, a, this.Qb);
    this.Oj ? it(this) : jt(this, 0);
    et(this);
    kt(this)
  }
};
s.ta = q("Qb");
s.Yd = function(a) {
  0 > a && (a = 0);
  if(this.Qb !== a) {
    var b = this.Qb;
    this.p.Yd(a);
    this.Qb = this.p.ta();
    if(b > a) {
      gt(this, 0, a, this.Rb, b);
      for(b = 0;b < this.Rb;++b) {
        this.cb[b].length = a
      }
    }else {
      ht(this, 0, b, this.Rb, a)
    }
    this.Oj === m ? it(this) : jt(this, 0);
    lt(this);
    a < this.$f && this.Ps(-1);
    ft(this);
    mt(this)
  }
};
s.du = function() {
  return this.p.du()
};
s.kq = function(a) {
  this.p.du() !== a && (this.p.kq(a), nt(this, 0, this.Rb))
};
s.pp = function() {
  return this.p.pp()
};
s.sm = function(a) {
  this.p.pp() !== a && (this.p.sm(a), ot(this, 0, this.Qb))
};
s.hk = function(a) {
  return this.p.hk(a)
};
s.Mk = function(a, b) {
  this.p.hk(a) !== b && (this.p.Mk(a, b), nt(this, a, this.Rb))
};
s.ad = function(a) {
  return this.p.ad(a)
};
s.Gg = function(a, b) {
  this.p.ad(a) !== b && (this.p.Gg(a, b), ot(this, a, this.Qb))
};
s.Gl = function(a) {
  return this.p.Gl(a)
};
s.de = function(a) {
  return this.p.de(a)
};
s.mp = function(a, b) {
  return this.p.mp(a, b)
};
s.kp = function(a, b) {
  return this.p.kp(a, b)
};
s.lp = function(a, b) {
  return this.p.lp(a, b)
};
s.ho = function(a, b, c) {
  var e = this.p.lp(a, b);
  0 >= e || (1 > c && (c = 1), e !== c && (this.p.ho(a, b, c), pt(this, a, b)))
};
s.Fr = function(a, b) {
  return this.p.Fr(a, b)
};
s.fo = function(a, b, c) {
  var e = this.p.Fr(a, b);
  0 >= e || (1 > c && (c = 1), e !== c && (this.p.fo(a, b, c), pt(this, a, b)))
};
s.br = function() {
  if(this.p.ae !== k) {
    for(var a = 0;a < this.Qb;++a) {
      for(var b = 0;b < this.Rb;++b) {
        var c = this.cb[b][a];
        lk(c, "etk-grid-span", m);
        lk(c, "etk-grid-shading", m);
        c.Hg(this.Lc.xg("content"))
      }
    }
    this.p.br();
    qt(this, 0, 0, this.Rb, this.Qb)
  }
};
s.Gr = function() {
  return this.p.Gr()
};
s.Lr = function() {
  return this.p.Lr()
};
s.So = function() {
  this.p.So();
  nt(this, 0, this.Rb)
};
s.cr = function() {
  this.p.cr();
  ot(this, 0, this.Qb)
};
s.LE = function(a, b) {
  return this.p.Ue(a, b)
};
s.ME = function(a) {
  return this.p.Wr(a)
};
s.Vr = function(a) {
  return this.p.Ul(a)
};
s.Hr = function() {
  var a = this.p.Ha();
  return 0 >= a && 0 < this.p.td.Gb.length * this.p.oc.Gb.length ? this.cb[this.cb.length - 1][0].vy() - this.cb[0][0].Ic() : a
};
s.Hl = function() {
  var a = this.p.va();
  return 0 >= a && 0 < this.p.td.Gb.length * this.p.oc.Gb.length ? (a = this.cb[0], a[a.length - 1].jp() - a[0].sc()) : a
};
s.hA = function(a) {
  this.wL = a;
  for(var b = 0, c = 0, c = 1;c < this.Qb;++c) {
    for(b = 0;b < this.Rb;++b) {
      this.cb[b][c].sq(a)
    }
  }
  if(0 !== this.p.Lr()) {
    for(var e = this.Qb - 1, c = 0;c < e;++c) {
      for(b = 0;b < this.Rb;++b) {
        this.cb[b][c].Lk(a)
      }
    }
  }
};
s.tA = function(a) {
  this.pP = a;
  for(var b = 0, c = 0, b = 1;b < this.Rb;++b) {
    for(c = 0;c < this.Qb;++c) {
      this.cb[b][c].nq(a)
    }
  }
  if(0 !== this.p.Gr()) {
    for(var e = this.Rb - 1, b = 0;b < e;++b) {
      for(c = 0;c < this.Qb;++c) {
        this.cb[b][c].qo(a)
      }
    }
  }
};
s.Zt = function(a, b) {
  var c = this.dj(a, b);
  return c !== k ? c.jd() : k
};
s.Js = function(a, b, c) {
  var e = this.dj(a, b);
  return e === k ? (window.console.log("Error: Accessing nonexistent cell in Grid's Table"), m) : e.Nc(c) ? (e.Au && rt(this, a, b), i) : m
};
s.eA = function(a, b, c) {
  var e = this.dj(a, b);
  return e === k ? (window.console.log("Error: Accessing nonexistent cell in Grid's Table"), m) : qk(e, c) ? (rt(this, a, b), i) : m
};
s.P = function() {
  return this.Cc.P()
};
s.ro = function(a) {
  this.Cc.ro(a)
};
s.vi = function(a) {
  this.Cc.vi(a)
};
s.uh = function(a) {
  if(this.FC !== a) {
    this.FC = a;
    for(var b = this.cb.length;0 <= --b;) {
      for(var c = this.cb[b], e = c.length;0 <= --e;) {
        c[e].vi(a)
      }
    }
  }
};
s.pA = function(a) {
  if(a !== this.Wb && (st(this), this.Wb = a, this.Wb !== k)) {
    for(a = 0;a < this.Rb;++a) {
      for(var b = 0;b < this.Qb;++b) {
        mk(this.cb[a][b], ns(this.Wb, a, b))
      }
    }
    ms(this.Wb)
  }
};
s.at = function() {
  if(this.Wb !== k) {
    for(var a = 0, b = 0, c = 0, e = this.Wb.og, c = e.length;0 <= --c;) {
      if(a = e[c], a < this.Rb) {
        for(b = 0;b < this.Qb;++b) {
          mk(this.cb[a][b], ns(this.Wb, a, b))
        }
      }
    }
    e = this.Wb.Qm;
    for(c = e.length;0 <= --c;) {
      if(a = e[c].x, b = e[c].y, this.cb[a] !== g) {
        var f = this.cb[a][b];
        f !== g && mk(f, ns(this.Wb, a, b))
      }
    }
    ms(this.Wb)
  }
};
s.FH = function(a) {
  if(this.Jf === k) {
    if(a === m) {
      return
    }
    tt(this)
  }
  this.Jf.Lk(a)
};
s.EA = function(a) {
  if(this.Jf === k) {
    if(a === m) {
      return
    }
    tt(this)
  }
  this.Jf.qo(a)
};
s.Yx = function(a) {
  this.wA !== a && (this.wA = a, it(this))
};
s.DH = function(a) {
  this.Oj !== a && (this.Oj = a, it(this), jt(this, 0))
};
function ut(a, b) {
  if(a.wA === m || b < a.to) {
    return m
  }
  if(a.Oj) {
    if(b >= a.Rb) {
      return m
    }
  }else {
    if(b >= a.Qb) {
      return m
    }
  }
  return 0 === (b - a.to & 1)
}
s.vH = function(a) {
  this.sh !== a && (this.zv = k, this.sh = a);
  lt(this);
  vt(this, 0, this.Qb)
};
s.sw = function(a, b) {
  var c = a + b;
  c > this.Qb && (c = this.Qb);
  0 > a && (a = 0);
  a >= c || (lt(this), vt(this, a, c))
};
s.Ps = function(a) {
  if(-1 > a || a >= this.Qb) {
    a = -1
  }
  this.$f !== a && (this.$f = a, 0 <= this.$f ? (this.Qf === k && (this.Qf = new Js("etk-grid-highlight"), this.Qf.background.Hg(this.Lc.xg("rowBG")), this.Qf.border.Hg(this.Lc.xg("highlight")), wt(this), this.Qf.po(this.Eb)), this.Qf.F(i), xt(this)) : this.Qf !== k && (this.Qf.F(m), Ls(this.Qf)))
};
s.my = function() {
  return this.p.Ul(this.Eb.nk())
};
s.qy = function() {
  return this.p.Ul(this.Eb.nk() + this.Eb.va() - 2)
};
function ht(a, b, c, e, f) {
  var h = 0, j = 0, l = k;
  if(a.cb.length < e) {
    for(h = a.cb.length;h < e;++h) {
      a.cb[h] = [], a.cb[h].length = f
    }
  }else {
    for(h = b;h < e;++h) {
      a.cb[h].length = f
    }
  }
  for(var n = 0 !== a.p.Lr() ? a.Qb - 1 : 0, o = 0 !== a.p.Gr() ? a.Rb - 1 : 0, j = c;j < f;++j) {
    for(h = b;h < e;++h) {
      l = new jk, l.Hg(a.Lc.xg("content")), l.vi(a.FC), a.wL && (l.sq(0 < j), l.Lk(j < n)), a.pP && (l.nq(0 < h), l.qo(h < o)), a.cb[h][j] = l, l.po(a.Eb)
    }
  }
  if(a.Wb !== k) {
    for(j = c;j < f;++j) {
      for(h = b;h < e;++h) {
        l = a.cb[h][j], mk(l, ns(a.Wb, h, j))
      }
    }
  }
  qt(a, b, c, e, f)
}
function gt(a, b, c, e, f) {
  for(;c < f;++c) {
    for(var h = b;h < e;++h) {
      a.cb[h][c].ba()
    }
  }
}
function pt(a, b, c) {
  if(!(0 > b || b >= a.Rb) && !(0 > c || c >= a.Qb)) {
    a.jy || a.cb[b][c].Pv(a.p.Gl(b), a.p.de(c), a.p.mp(b, c), a.p.kp(b, c));
    var e = 0, f = m, h, e = bt(a.p, b, c);
    (h = e !== k ? 1 < e.colSpan || 1 < e.rowSpan : m) ? (e = a.Lc.xg("span"), f = ut(a, a.Oj ? b : c)) : e = a.Lc.xg("content");
    a = a.cb[b][c];
    a.Hg(e);
    lk(a, "etk-grid-span", h);
    lk(a, "etk-grid-shading", f)
  }
}
function et(a) {
  if(a.vw) {
    var b = a.Hr();
    a.Eb.xa(0 < b ? b : -1)
  }
}
function ft(a) {
  if(a.uw) {
    var b = a.Hl();
    a.Eb.Ma(0 < b ? b : -1)
  }
}
function tt(a) {
  a.Jf === k && (a.Jf = new jk("border"), nk(a.Jf), a.Jf.po(a.Cc), a.Jf.xa(a.p.Ha()), a.Jf.Ma(a.p.va()), a.Jf.Hg(a.Lc.xg("border")))
}
function kt(a) {
  a.Jf !== k && a.Jf.xa(a.p.Ha())
}
function mt(a) {
  a.Jf !== k && a.Jf.Ma(a.p.va())
}
function qt(a, b, c, e, f) {
  if(!a.jy) {
    var h = 0, j = 0, l = 0, n = 0, o = k;
    if(a.p.ae !== k) {
      for(h = b;h < e;++h) {
        l = a.p.Gl(h);
        for(j = c;j < f;++j) {
          o = a.cb[h][j], o.Ge(l), o.pd(a.p.de(j)), o.xa(a.p.mp(h, j)), o.Ma(a.p.kp(h, j))
        }
      }
    }else {
      for(h = b;h < e;++h) {
        l = a.p.Gl(h);
        n = a.p.hk(h);
        for(j = c;j < f;++j) {
          o = a.cb[h][j], o.Ge(l), o.pd(a.p.de(j)), o.xa(n), o.Ma(a.p.ad(j))
        }
      }
    }
  }
}
function nt(a, b, c) {
  if(!a.jy) {
    for(var e = 0, f = 0, h = 0, j = 0, l = k, n = a.p.ae === k, e = b;e < c;++e) {
      h = a.p.Gl(e);
      j = a.p.hk(e);
      for(f = 0;f < a.Qb;++f) {
        l = a.cb[e][f], l.Ge(h), n ? l.xa(j) : l.xa(a.p.mp(e, f))
      }
    }
    et(a);
    a.Oj ? jt(a, b, c) : jt(a, 0);
    vt(a, 0, a.Qb);
    wt(a);
    kt(a)
  }
}
function ot(a, b, c) {
  if(!a.jy) {
    for(var e = 0, f = 0, h = 0, j = 0, l = k, n = a.p.ae === k, f = b;f < c;++f) {
      h = a.p.de(f);
      j = a.p.ad(f);
      for(e = 0;e < a.Rb;++e) {
        l = a.cb[e][f], l.pd(h), n ? l.Ma(j) : l.Ma(a.p.kp(e, f))
      }
    }
    ft(a);
    a.Oj ? jt(a, 0) : jt(a, b, c);
    vt(a, b, c);
    xt(a);
    mt(a)
  }
}
function rt(a, b, c) {
  if(!(1 < a.p.lp(b, c))) {
    var b = a.cb[b][c].Au ? !a.cb[b][c].Se() ? 0 : a.cb[b][c].Qo.bw.offsetHeight : 0, e = 4 * (Math.floor(0.25 * (b + 1)) + 1), f = a.p.ad(c);
    if(e !== f) {
      if(e > f) {
        a.Gg(c, e)
      }else {
        var h = a.p.pp();
        if(!(f <= h)) {
          for(e = a.Rb;0 <= --e;) {
            f = a.cb[e][c].Au ? !a.cb[e][c].Se() ? 0 : a.cb[e][c].Qo.bw.offsetHeight : 0, f > b && (b = f)
          }
          e = 4 * (Math.floor(0.25 * (b + 1)) + 1);
          e < h ? a.Gg(c, h) : a.Gg(c, e)
        }
      }
    }
  }
}
function it(a) {
  var b = a.uo.length, c = a.Oj ? a.Rb : a.Qb, e = a.wA ? Math.ceil(0.5 * (c - a.to)) : 0;
  0 > e && (e = 0);
  if(b !== e) {
    var f = 0;
    if(b < e) {
      for(f = b;f < e;++f) {
        var h = new jk;
        h.vi("etk-grid-shading");
        h.po(a.Eb, i);
        a.uo[f] = h
      }
      jt(a, a.to + 2 * b, c)
    }else {
      for(f = b;--f >= e;) {
        a.uo[f].ba()
      }
      a.uo.length = e
    }
  }
}
function jt(a, b, c) {
  if(!(0 >= a.uo.length)) {
    var e = a.Oj ? a.Rb : a.Qb;
    if(c === g || c > e) {
      c = e
    }
    e = Math.ceil(0.5 * (b - a.to));
    0 > e && (e = 0);
    var b = a.to + 2 * e, f = k, h = 0;
    if(a.Oj) {
      for(var j = a.p.sc(), l = a.p.va(), h = b;h < c;h += 2) {
        f = a.uo[e], f.Ge(a.p.Gl(h)), f.xa(a.p.hk(h)), f.pd(j), f.Ma(l), ++e
      }
    }else {
      j = a.p.Ic();
      l = a.p.Ha();
      for(h = b;h < c;h += 2) {
        f = a.uo[e], f.Ge(j), f.xa(l), f.pd(a.p.de(h)), f.Ma(a.p.ad(h)), ++e
      }
    }
  }
}
function lt(a) {
  var b = a.Db !== k ? a.Db.length : 0, c = 0;
  if(a.sh !== k) {
    c = a.sh;
    c.Bg = a.Qb;
    if(!(0 > c.Bg)) {
      if(0 === c.Bg) {
        $r(c)
      }else {
        if(c.pa > c.Bg) {
          for(var e = c.nd;e >= c.Gc;--e) {
            if(c.Db[e] === i && (c.Db[e] = m, c.gf === e && (c.gf = -1), --c.pa, c.$g = i, c.pa === c.Bg)) {
              c.nd = Yr(c, e);
              break
            }
          }
        }
      }
    }
    c = a.sh.pa;
    if(a.zv === k || a.sh.$g) {
      a.zv = ds(a.sh)
    }
  }
  if(b !== c) {
    if(a.Db === k && (a.Db = []), e = 0, b < c) {
      for(e = b;e < c;++e) {
        b = new Js("etk-grid-selection"), b.background.Hg(a.Lc.xg("rowBG")), b.border.Hg(a.Lc.xg("selection")), b.po(a.Eb), a.Db[e] = b
      }
    }else {
      for(e = b;--e >= c;) {
        a.Db[e].ba()
      }
      a.Db.length = c
    }
  }
}
function vt(a, b, c) {
  if(!(a.sh === k || 0 >= a.sh.pa)) {
    for(var e = a.p.Ic(), f = a.p.Ha(), h = a.zv.length;0 <= --h;) {
      var j = a.zv[h];
      if(j >= b && j < c) {
        var l = a.Db[h], n = l;
        n.ZJ !== j && (n.ZJ = j, Ls(n));
        if(l.contents.length < a.Rb) {
          for(n = l.contents.length;n < a.Rb;++n) {
            Ms(l, a.cb[n][j])
          }
        }
        l.Pv(e, a.p.de(j), f, a.p.ad(j) + (0 < a.p.oc.yg || j >= a.p.oc.Gb.length - 1 ? 0 : 1))
      }
    }
  }
}
function wt(a) {
  0 > a.$f || (a.Qf.Ge(a.p.Ic()), a.Qf.xa(a.p.Ha()))
}
function xt(a) {
  if(!(0 > a.$f)) {
    Ls(a.Qf);
    for(var b = a.Rb;0 <= --b;) {
      Ms(a.Qf, a.cb[b][a.$f])
    }
    a.Qf.pd(a.p.de(a.$f));
    a.Qf.Ma(a.p.ad(a.$f) + (0 < a.p.oc.yg || a.$f >= a.p.oc.Gb.length - 1 ? 0 : 1))
  }
}
function st(a) {
  for(var b = 0;b < a.Rb;++b) {
    for(var c = 0;c < a.Qb;++c) {
      var e = a.cb[b][c];
      if(e.Gx !== k) {
        var f = g;
        for(f in e.Gx) {
          e.D.style[f] !== g && 0 < e.D.style[f].length && (e.D.style[f] = "")
        }
        e.Gx = k
      }
    }
  }
}
s.Rb = 0;
s.Qb = 0;
s.p = k;
s.Lc = k;
s.Cc = k;
s.Eb = k;
s.Ff = k;
s.Jf = k;
s.uo = k;
s.Qf = k;
s.Db = k;
s.cb = k;
s.jy = m;
s.vw = i;
s.uw = i;
s.wL = m;
s.pP = m;
s.wA = i;
s.to = 1;
s.Oj = m;
s.sh = k;
s.zv = k;
s.$f = -1;
s.FC = k;
s.Wb = k;
function yt(a) {
  this.p = new at;
  this.j = new dt(a);
  this.j.vH(new Wr);
  this.j.pA(new ks)
}
s = yt.prototype;
s.toString = function() {
  return"View: " + this.j.toString() + "\nVirtual RowCount: " + this.p.ta() + "\nExisting RowCount: " + this.j.ta() + "\nExisting Index Y: " + this.kc
};
s.dj = function(a, b) {
  return this.j.dj(a, b - this.kc)
};
s.moveTo = function(a, b) {
  this.Ge(a);
  this.pd(b)
};
s.i = function(a, b, c, e) {
  this.j.i(a, b, c, e)
};
s.ku = function(a) {
  return this.j.ku(a)
};
s.Hj = function(a) {
  this.j.Hj(a)
};
s.Cs = function() {
  this.j.Cs()
};
s.ba = function() {
  this.j.ba()
};
s.Se = function() {
  return this.j.Se()
};
s.F = function(a) {
  this.j.F(a)
};
s.Ic = function() {
  return this.j.Ic()
};
s.Ge = function(a) {
  this.j.Ge(a)
};
s.sc = function() {
  return this.j.sc()
};
s.pd = function(a) {
  this.j.pd(a)
};
s.Ha = function() {
  return this.j.Ha()
};
s.xa = function(a) {
  this.j.xa(a)
};
s.va = function() {
  return this.j.va()
};
s.Ma = function(a) {
  this.j.Ma(a)
};
s.vy = function() {
  return this.j.vy()
};
s.jp = function() {
  return this.j.jp()
};
s.un = function() {
  return this.j.un()
};
s.so = function(a) {
  this.j.so(a)
};
s.nk = q("gq");
s.Ij = function(a) {
  0 > a && (a = 0);
  this.gq = a;
  zt(this, this.my())
};
s.Gv = function(a, b, c, e) {
  this.j.Gv(a, b, c, e)
};
s.nq = function(a) {
  this.j.nq(a)
};
s.sq = function(a) {
  this.j.sq(a)
};
s.qo = function(a) {
  this.j.qo(a)
};
s.Lk = function(a) {
  this.j.Lk(a)
};
s.xg = function() {
  return this.j.xg()
};
s.Hg = function(a) {
  this.j.Hg(a)
};
s.Ue = function(a, b) {
  var c = a - this.j.Ic(), e = b - this.j.sc();
  return 0 > c || 0 > e || c >= this.j.Ha() || e >= this.j.va() + this.p.de(this.kc) ? k : this.LE(c + this.j.un(), e + this.gq)
};
s.Wr = function(a) {
  return this.j.Wr(a)
};
s.Ul = function(a) {
  a -= this.j.sc();
  return 0 > a ? -1 : a >= this.j.va() + this.p.de(this.kc) ? ~this.p.ta() : this.Vr(a + this.gq)
};
s.mf = function() {
  return this.p.mf()
};
s.vh = function(a) {
  this.p.mf() !== a && (this.Iy = i, this.p.vh(a), this.j.vh(a))
};
s.ta = function() {
  return this.p.ta()
};
s.Yd = function(a) {
  this.p.Yd(a);
  At(this)
};
s.du = function() {
  return this.p.du()
};
s.kq = function(a) {
  this.p.kq(a);
  this.j.kq(a)
};
s.pp = function() {
  return this.p.pp()
};
s.sm = function(a) {
  this.p.sm(a);
  this.j.sm(a);
  At(this)
};
s.hk = function(a) {
  return this.p.hk(a)
};
s.Mk = function(a, b) {
  this.p.Mk(a, b);
  this.j.Mk(a, b)
};
s.ad = function(a) {
  return this.p.ad(a)
};
s.Gg = function(a, b) {
  this.p.Gg(a, b);
  this.j.Gg(a - this.kc, b);
  At(this)
};
s.Gl = function(a) {
  return this.p.Gl(a)
};
s.de = function(a) {
  return this.p.de(a)
};
s.mp = function(a, b) {
  return this.p.mp(a, b)
};
s.kp = function(a, b) {
  return this.p.kp(a, b)
};
s.lp = function(a, b) {
  return this.p.lp(a, b)
};
s.ho = function(a, b, c) {
  this.p.ho(a, b, c);
  this.j.ho(a, b - this.kc, c)
};
s.Fr = function(a, b) {
  return this.p.Fr(a, b)
};
s.fo = function(a, b, c) {
  this.p.fo(a, b, c);
  this.j.fo(a, b - this.kc, c)
};
s.br = function() {
  this.p.br();
  this.j.br()
};
s.Gr = function() {
  return this.p.Gr()
};
s.Lr = function() {
  return this.p.Lr()
};
s.So = function() {
  this.p.So();
  this.j.So()
};
s.cr = function() {
  this.p.cr();
  this.j.cr();
  At(this)
};
s.LE = function(a, b) {
  return this.p.Ue(a, b)
};
s.ME = function(a) {
  return this.p.Wr(a)
};
s.Vr = function(a) {
  return this.p.Ul(a)
};
s.Hr = function() {
  return this.p.Ha()
};
s.Hl = function() {
  return this.p.va()
};
s.hA = function(a) {
  this.j.hA(a)
};
s.tA = function(a) {
  this.j.tA(a)
};
s.Zt = function(a, b) {
  Bt(this, b) && this.j.Zt(a, b - this.kc);
  return k
};
s.Js = function(a, b, c) {
  if(Bt(this, b)) {
    var e = b - this.kc;
    if(this.j.Js(a, e, c)) {
      return a = this.j.ad(e), a !== this.p.ad(b) && this.p.Gg(b, a), i
    }
  }
  return m
};
s.eA = function(a, b, c) {
  if(Bt(this, b)) {
    var e = b - this.kc;
    if(this.j.eA(a, e, c)) {
      return a = this.j.ad(e), a !== this.p.ad(b) && this.p.Gg(b, a), i
    }
  }
  return m
};
s.P = function() {
  return this.j.P()
};
s.ro = function(a) {
  this.j.ro(a)
};
s.vi = function(a) {
  this.j.vi(a)
};
s.uh = function(a) {
  this.j.uh(a)
};
s.pA = function(a) {
  if(this.Wb !== a) {
    if(this.Wb !== k) {
      var b = this.j;
      b.Wb !== k && (st(b), b = b.Wb, b.Kg = {}, b.Bi[0] = 0, b.Bi[1] = 0, b.Bi[2] = 0, b.Bi[3] = 0, ms(b))
    }
    this.Wb = a;
    this.at()
  }
};
s.at = function() {
  if(this.Wb !== k) {
    for(var a = this.j.Wb, b = this.j.ta(), c = this.j.mf(), e = 0, f = 0, h = 0, h = this.Wb.og, e = h.length;0 <= --e;) {
      f = h[e], ss(a, 2, f, 0, qs(this.Wb, 2, f, 0))
    }
    for(var j = this.Wb.Qm, e = j.length;0 <= --e;) {
      f = j[e].x, h = j[e].y - this.kc, f < c && h < b && ss(a, 0, f, h, qs(this.Wb, 0, f, h))
    }
    this.j.at();
    ms(this.Wb)
  }
};
s.FH = function(a) {
  this.j.FH(a)
};
s.EA = function(a) {
  this.j.EA(a)
};
s.Yx = function(a) {
  this.j.Yx(a)
};
s.DH = function(a) {
  this.j.DH(a)
};
s.vH = function(a) {
  this.sh = a;
  this.sw(this.kc, this.j.ta())
};
s.sw = function(a, b) {
  var c = this.j.sh, e = this.sh, f = a - this.kc;
  if(!(0 >= b)) {
    if(e === k) {
      bs(c, f, b)
    }else {
      if(cs(e, a, b) === m) {
        bs(c, f, b)
      }else {
        for(var h = c.gf, j = 0;j < b;++j) {
          e.Db[a + j] === i ? c.select(f + j) : c.Lx(f + j)
        }
        c.gf = h
      }
    }
  }
  this.j.sw(a - this.kc, b)
};
s.Ps = function(a) {
  this.$f !== a && (this.$f = a, this.j.Ps(this.$f - this.kc))
};
s.Kl = q("kc");
function Ct(a) {
  return a.kc + a.j.ta() - 1
}
s.XD = function() {
  return this.j.ta()
};
function Bt(a, b) {
  b -= a.kc;
  return 0 <= b && b < a.j.ta()
}
s.my = function() {
  return this.p.Ul(this.gq)
};
s.qy = function() {
  return this.p.Ul(this.gq + this.j.va() - 2)
};
s.DE = q("Iy");
s.qI = function() {
  this.Iy = m
};
s.QG = function(a) {
  var b = a.length;
  if(!(0 >= b)) {
    for(var c = this.j.ta(), e = this.j.mf(), f = 0, h = 0, h = 0;h < e;++h) {
      for(f = 0;f < c;++f) {
        for(var j = this.j.dj(f, h), l = 0, l = 0;l < b;++l) {
          lk(j, a[l], m)
        }
      }
    }
  }
};
s.fC = function(a, b, c) {
  a = this.j.dj(b, a);
  a !== k && lk(a, c, i)
};
s.OG = function(a, b, c) {
  a = this.j.dj(b, a);
  a !== k && lk(a, c, m)
};
function zt(a, b) {
  var c = 0;
  if(b > a.ix) {
    var e = a.j.ta(), f = a.p.ta(), c = b - a.ix;
    c + e > f && (c = f - e)
  }
  if(c !== a.kc) {
    a.kc = c;
    c = a.j;
    e = 1 - (a.kc & 1);
    0 > e && (e = 0);
    c.to !== e && (c.to = e, it(c), jt(c, 0));
    a.sw(0, a.p.ta());
    a.j.Ps(a.$f - a.kc);
    var e = c = 0, f = a.j.mf(), h = a.j.ta();
    if(a.Wb !== k) {
      var j = a.j.Wb;
      rs(j, 0);
      if(0 < a.Wb.Bi[0]) {
        for(c = 0;c < h;++c) {
          for(e = 0;e < f;++e) {
            ss(j, 0, e, c, qs(a.Wb, 0, e, c + a.kc))
          }
        }
      }
      a.j.at()
    }
    a.j.br();
    if(a.p.ae !== k) {
      for(c = 0;c < h;++c) {
        for(e = 0;e < f;++e) {
          a.j.fo(e, c, a.p.Fr(e, c + a.kc)), a.j.ho(e, c, a.p.lp(e, c + a.kc))
        }
      }
    }
  }
  a.j.Ij(a.gq - a.p.de(a.kc))
}
function At(a) {
  if(a.TL !== m) {
    var b = a.p.ta(), c = b, e = 0;
    a.ZG = m;
    if(a.UW === m && 10 < b && 0 < a.ix && !a.j.uw && 0 < a.p.pp() && a.p.va() > a.j.va()) {
      var e = a.my(), f = a.qy();
      0 <= e && 0 <= f && (c = 2 * a.ix + f - e + 1, a.ZG = c < b)
    }
    a.j.ta() !== c && (a.j.Yd(c), a.Iy = i, a.kc = -1);
    zt(a, e)
  }
}
s.j = k;
s.p = k;
s.gq = 0;
s.sh = k;
s.Wb = k;
s.$f = -1;
s.TL = m;
s.UW = m;
s.ix = 2;
s.ZG = m;
s.kc = 0;
s.Iy = m;
function Dt(a) {
  w(a) || d(Error("Invalid 'table' argument"));
  this.j = a
}
s = Dt.prototype;
s.ta = function() {
  return this.j.mf()
};
s.Yd = function(a) {
  this.j.vh(a)
};
s.mf = function() {
  return this.j.ta()
};
s.vh = function(a) {
  this.j.Yd(a)
};
s.Zt = function(a, b) {
  return this.j.Zt(b, a)
};
s.Js = function(a, b, c) {
  return this.j.Js(b, a, c)
};
s.Kl = function() {
  return this.j.Kl()
};
s.XD = function() {
  return this.j.XD()
};
s.DE = function() {
  return this.j.DE()
};
s.qI = function() {
  this.j.qI()
};
s.fC = function(a, b, c) {
  this.j.fC(b, a, c)
};
s.QG = function(a) {
  this.j.QG(a)
};
s.OG = function(a, b, c) {
  this.j.OG(b, a, c)
};
s.j = k;
function Et() {
}
B("tr.ui.grid.IGridCellStyle", Et);
Et.prototype.ug = p();
Et.prototype.getRow = Et.prototype.ug;
Et.prototype.gk = p();
Et.prototype.getColumn = Et.prototype.gk;
Et.prototype.OV = p();
Et.prototype.setColumnSpan = Et.prototype.OV;
Et.prototype.PR = p();
Et.prototype.getColumnSpan = Et.prototype.PR;
Et.prototype.yT = p();
Et.prototype.isColumnSpan = Et.prototype.yT;
function Ft() {
}
B("tr.ui.grid.IGridCellStyleCollection", Ft);
Ft.prototype.dJ = p();
Ft.prototype.UQ = p();
Ft.prototype.containsByRowColumn = Ft.prototype.UQ;
Ft.prototype.fS = p();
Ft.prototype.getItemByRowColumn = Ft.prototype.fS;
Ft.prototype.rV = p();
Ft.prototype.removeByRowColumn = Ft.prototype.rV;
Ft.prototype.contains = p();
Ft.prototype.contains = Ft.prototype.contains;
function Gt() {
  this.controls = [];
  this.gx = [];
  this.hx = []
}
s = Gt.prototype;
s.Cq = k;
s.controls = k;
s.jr = k;
s.gx = k;
s.hx = k;
function Ht(a, b, c, e) {
  w(a) && w(b) && w(c) && w(e) && (this.ib = a, this.Xp = b, this.Kh = e, this.bx = c, a = "", 0 < this.Xp.length && 0 < this.bx.source.length && (a = "get" + this.Xp, w(this.ib[a]) && w(this.ib.getPropertyChangedEvent) && (a = this.ib.getPropertyChangedEvent()) && a.i(this.xe, this)))
}
Ht.prototype.Ia = q("ib");
Ht.prototype.xe = function(a) {
  if(!It) {
    var b = a.ju(), a = a.aa, c = "", e = "", f = this.vC.create(this.bx.converter);
    w(b) && this.Xp === b && (w(a) && (e = "get" + b, a[e] !== g && (c = a[e]())), b = f != k ? f.kr(c, this.ib) : c, w(this.Kh) && this.Kh(a, b, this.bx.source))
  }
};
var It = m;
s = Ht.prototype;
s.ib = k;
s.Xp = "";
s.bx = k;
s.Kh = k;
s.vC = new hk;
function Jt() {
}
function Kt(a, b, c, e, f, h, j, l, n) {
  var o;
  if(o = 0 !== b) {
    a: {
      c = c.we();
      if(c !== k && c !== g && (e = c.gk(e), e !== k && e !== g && (e = e.Zc, 0 === e || 1 === e))) {
        e = i;
        break a
      }
      e = m
    }
    o = e && h !== k && "" !== h && f !== k && "" !== f
  }
  o && (f = Number(f), h = Number(h), "number" === typeof f && "number" === typeof h && f === f && h === h && (e = "", 1 === b && (f > h ? e = a.yJ : f < h && (e = a.xJ)), 0 < e.length && Lt(a, j, l, n, e)))
}
function Lt(a, b, c, e, f) {
  a.jF = i;
  b.fC(e, c, f);
  setTimeout(function() {
    b.OG(e, c, f)
  }, a.NQ)
}
s = Jt.prototype;
s.yJ = "etk-grid-blink-up";
s.xJ = "etk-grid-blink-down";
s.MQ = [Jt.prototype.yJ, Jt.prototype.xJ];
s.NQ = 150;
s.jF = m;
function Mt(a) {
  this.xb = a;
  this.tb = [];
  this.BD = [];
  this.SC = [];
  this.cx = new Jt
}
s = Mt.prototype;
s.EE = m;
s.ta = function() {
  return this.tb.length
};
function Nt(a, b, c) {
  a = a.tb[b];
  return a !== g && a !== k && (c = a[c], c !== g) ? c : k
}
function Ot(a, b, c) {
  if(!c.dt) {
    return k
  }
  var e = 0, f = k;
  if(a.tb[b] !== g && a.tb[b] !== k) {
    if(f = a.tb[b][c.name], f !== g && f !== k && !c.ak) {
      return f.Cq
    }
  }else {
    a.tb[b] = {}
  }
  a.EE = i;
  f = new Gt;
  a.tb[b][c.name] = f;
  var h = Ac("div");
  if(0 < c.RA.length) {
    h.innerHTML = c.RA;
    for(var j = h.querySelectorAll("*[data-etk-type]"), l = [], e = 0;e < j.length;e++) {
      l.push(j[e])
    }
    e = f;
    H.g();
    var n = H.g(), o = [], u = [];
    o.push({fr:k, children:[]});
    for(var t = -1, v = 0;v < l.length;v++) {
      var y = l[v], J = y.getAttribute("data-etk-type"), J = sj(n, J), M = y.getAttribute("data-etk-name"), oa = y.getAttribute("data-etk-ctor"), Q = y.getAttribute("data-etk-events"), ia = parseInt(y.getAttribute("data-etk-nestlevel"), 10);
      y.getAttribute("appserverid");
      J = th(n, J, oa, Q, i);
      J.a() && (J.a().name = M);
      u.push(J);
      t = rj(o, ia, t);
      0 < o.length && o[o.length - 1].children.push({ol:J, Wx:y});
      J !== k && ma(J.Ag) && J.Ag() && (t = ia, o.push({fr:J, children:[]}));
      0 == ia && n.mC.push(J)
    }
    rj(o, -1, t);
    e.controls = u;
    0 < j.length && (f.Cq = h.children[0])
  }else {
    0 < c.yz.length && (f.controls = H.g().Sn(c.yz, h), 0 < f.controls.length && (f.Cq = f.controls[0].La()))
  }
  for(e = 0;e < f.controls.length;e++) {
    h = f.controls[e];
    j = h.getName();
    if(j === g || j === k || 0 >= j.length) {
      l = h.model_;
      l !== g && l !== k && (j = l.name);
      if(j === g || j === k || 0 >= j.length) {
        l = h.options_, l !== g && l !== k && (j = l.name)
      }
      h.zi(j)
    }
    h.Xh() && h.rr();
    f.jr = Pt(a, h, f.jr);
    j = a;
    l = h;
    n = c;
    o = l.getName();
    for(u = 0;u < n.Xm.length;u++) {
      if(t = n.Xm[u], w(t) && w(t.element) && w(t.event) && (y = M = t.element, v = "", ia = M.indexOf("."), 0 <= ia && (y = M.substr(0, ia), v = M.substr(ia + 1, M.length - (ia + 1))), M = l, l.Xh() && y !== o && (M = Qt(j, l, y)), M && M.getName() === y)) {
        if(y = k, 0 < v.length ? (v = Rt(M, v, m), y = v !== k ? v.boundObject : k) : y = M, w(y)) {
          if(v = n.name + t.element + t.Eg + t.event, M = j.BD[v], w(M) || (M = new us(t, A(j.PQ, j)), j.BD[v] = M), t = M, v = y, w(v) && w(t.Al)) {
            v["get" + t.Al.event + "Event"]().i(t.xe, t), t.Qh.push(v)
          }
        }
      }
    }
    j = a;
    l = b;
    n = c;
    o = h.getName();
    if(w(o) && !(0 >= o.length)) {
      u = j.tb[l][n.name];
      for(t = n.Ri.length;0 <= --t;) {
        v = n.Ri[t], u.gx[t] = k, u.hx[t] = k, w(v) && w(v.property) && w(v.element) && (y = h, h.Xh() && v.element !== o && (y = Qt(j, h, v.element)), y && y.getName() === v.element && (y = Rt(y, v.property, i), w(y) && (M = n.name + v.element + v.property + l, ia = j.SC[M], w(ia) || (ia = new Ht(y.boundObject, y.boundProperty, v, A(j.WQ, j)), j.SC[M] = ia), u.gx[t] = y.boundObject, u.hx[t] = y.boundProperty)))
      }
    }
  }
  f.Cq !== k && "100%" !== f.Cq.style.width && (f.Cq.style.width = "100%");
  return f.Cq
}
function Qt(a, b, c) {
  if(b.Xh()) {
    if(b.getChildCount && 0 < qf(b)) {
      for(var e = qf(b), f = 0;f < e;f++) {
        var h = Qt(a, rf(b, f), c);
        if(h !== k) {
          return h
        }
      }
    }
  }else {
    if(b.getName() === c) {
      return b
    }
  }
  return k
}
function Rt(a, b, c) {
  var e = b;
  if(-1 !== b.indexOf(".")) {
    for(var b = b.split("."), e = c ? b.length - 1 : b.length, f = 0;f < e;++f) {
      var h = "";
      if(-1 !== b[f].indexOf("[")) {
        h = b[f].split("["), 2 == h.length && (a = a["get" + h[0]]()[h[1].substr(0, h[1].length - 1)])
      }else {
        if(-1 !== b[f].indexOf("(")) {
          h = b[f].split("("), 2 == h.length && (a = a["get" + h[0]](h[1].substr(0, h[1].length - 1)))
        }else {
          var h = k, j = 0, l = 0;
          if(a["get" + b[f]]) {
            a = a["get" + b[f]]()
          }else {
            if(a[b[f]]) {
              a = a[b[f]]
            }else {
              if(a.getControls && 0 < a.eh().Da()) {
                for(var n = a.eh(), j = n.Da(), l = 0;l < j;l++) {
                  if(h = n.getItem(l), h.getName() === b[f]) {
                    a = h;
                    break
                  }
                }
              }else {
                if(a.getChildCount && 0 < qf(a)) {
                  j = qf(a);
                  for(l = 0;l < j;l++) {
                    if(h = rf(a, l), h.getName() === b[f]) {
                      a = h;
                      break
                    }
                  }
                }
              }
            }
          }
        }
      }
      if(!w(a)) {
        return k
      }
    }
    e = c ? b[e] : k
  }
  return{boundObject:a, boundProperty:e}
}
function Pt(a, b, c) {
  if(c === g || c === k) {
    c = {}
  }
  if(b !== g && b !== k) {
    var e = b.getName();
    w(e) && 0 < e.length && c[e] === g && (c[e] = b);
    if(b.Xh()) {
      for(var b = b.eh(), e = b.Da(), f = 0;f < e;++f) {
        Pt(a, b.getItem(f), c)
      }
    }
  }
  return c
}
s.PQ = function(a, b, c, e) {
  w(this.xb) && this.xb.mx(a, b, c, e)
};
s.WQ = function(a, b, c) {
  w(this.xb) && this.xb.xx(a, b, c)
};
s.xb = k;
s.tb = k;
s.BD = k;
s.SC = k;
s.vC = new hk;
s.cx = k;
function St(a, b) {
  this.q = a;
  this.wp = b ? b : k;
  this.vl = new As;
  this.Yn = new Mt(this);
  this.Qc = new dt("title");
  this.Qc.vi("etk-grid-title");
  this.Qc.uh("etk-grid-cell");
  this.Qc.sm(32);
  this.Qc.vh(1);
  this.Qc.Yd(1);
  this.$a = new dt("header");
  this.$a.vi("etk-grid-header");
  this.$a.uh("etk-grid-cell");
  this.$a.Yx(m);
  this.$a.sm(32);
  this.$a.vh(this.q.zb.length);
  this.$a.Yd(this.q.An);
  this.$a.pA(this.q.sk);
  this.K = new yt("body");
  this.K.vi("etk-grid-body");
  this.K.uh("etk-grid-cell");
  this.K.pA(this.q.Mo);
  this.K.sm(32);
  this.K.vH(this.q.Sg);
  this.wf = new jk("scrollX");
  this.wf.xa(1);
  var c = document.createElement("div");
  c.style.width = "100px";
  c.style.height = "1px";
  this.wf.Nc(c);
  this.wf.vi("etk-grid-scroll");
  this.wf.F(m);
  mk(this.wf, {"overflow-x":"scroll", "overflow-y":"hidden"});
  this.mc = new jk("scrollY");
  this.mc.Ma(1);
  c = document.createElement("div");
  c.style.width = "1px";
  c.style.height = "100px";
  this.mc.Nc(c);
  this.mc.vi("etk-grid-scroll");
  this.mc.F(m);
  mk(this.mc, {"overflow-x":"hidden", "overflow-y":"scroll"});
  this.wf.i("scroll", A(this.IU, this));
  this.mc.i("scroll", A(this.pN, this));
  this.K.i("mousewheel", A(this.BU, this));
  this.jP = new Dt(this.K)
}
s = St.prototype;
s.wp = k;
s.q = k;
s.ia = k;
s.U = k;
s.Qc = k;
s.$a = k;
s.K = k;
s.wf = k;
s.mc = k;
s.vl = k;
s.Yn = k;
s.ih = -1;
s.jP = k;
s.l = function(a) {
  this.ia = a;
  this.ia.style.position = "relative";
  this.ia.style.boxSizing = "border-box";
  this.ia.style.overflow = "hidden";
  for(Tt(this);this.ia.firstChild !== k;) {
    this.ia.removeChild(this.ia.firstChild)
  }
  this.Qc.Hj(this.ia);
  this.$a.Hj(this.ia);
  this.K.Hj(this.ia);
  this.wf.Hj(this.ia);
  this.mc.Hj(this.ia)
};
s.k = p();
s.nb = p();
s.ud = function() {
  if(this.ia !== k) {
    var a = this.K.Kl(), b = Ct(this.K), c = this.q.zb.length, e = this.q.Un;
    this.q.Hi ? (this.K.vh(e), this.$a.vh(e), this.K.Yd(c)) : (this.K.vh(c), this.$a.vh(c), this.K.Yd(e));
    0 < this.q.An ? this.$a.Yd(this.q.An) : this.$a.Yd(1);
    this.ia.style.width = 0 > this.q.width ? "100%" : 1 === this.q.kt ? this.q.width + "%" : this.q.width + "px";
    this.Qc.xa(this.ia.clientWidth);
    this.Qc.Mk(0, this.ia.clientWidth);
    this.$a.xa(this.ia.clientWidth);
    this.K.xa(this.ia.clientWidth);
    if(0 < this.ia.clientWidth) {
      var f = 0, h = this.K.mf(), c = this.K.ta(), e = k;
      if(this.q.Hi) {
        e = Ut(this, Vt(this) ? 0 : this.K.va(), c, 32);
        this.ih = -1;
        f = 0 < this.q.Vn ? this.q.Vn : 80;
        this.K.kq(f);
        this.$a.kq(f);
        for(f = 0;f < c;++f) {
          this.K.Gg(f, e[f])
        }
      }else {
        this.K.sm(this.q.ad());
        e = Ut(this, this.K.Ha(), h, 0);
        for(f = 0;f < h;++f) {
          this.K.Mk(f, e[f]), this.$a.Mk(f, e[f])
        }
      }
      this.K.EA(0 > this.ih);
      this.$a.EA(0 > this.ih)
    }
    this.Qc.F(this.q.XA);
    this.$a.F(this.q.ux);
    this.$a.pd(this.Qc.jp());
    c = this.$a.jp();
    this.K.pd(c);
    e = m;
    0 <= this.q.height ? (this.ia.style.height = 1 === this.q.Sr ? this.q.height + "%" : this.q.height + "px", this.K.Ma(this.ia.clientHeight - c)) : 0 > this.q.height && this.q.yr ? (this.ia.style.height = "100%", this.K.Ma(this.ia.clientHeight - c)) : (0 < this.q.el ? this.K.Ma(this.q.el * this.q.ad()) : (e = i, this.K.Ma(-1)), this.ia.style.height = this.ia.offsetHeight - this.ia.clientHeight + this.K.jp() + "px");
    this.K.FH(!e);
    var c = this.K.Ic(), e = this.K.sc(), c = new cd(c, e, this.ia.clientWidth - c, this.ia.clientHeight - e), j = this.K.Hr(), f = this.K.Hl(), e = Vt(this), l = (h = 10 < c.width && 10 < c.height) && 0 !== (this.q.Bv & 1), n = h && 0 !== (this.q.Bv & 2), o = j > c.width, h = !e && f > c.height, u = 0 < this.q.el && this.K.ta() > this.q.el, o = l && o, h = n && (h || u);
    o !== h && (o ? n && (h = !e && f > c.height - 10) : l && 0 > this.ih && (o = j > c.width - 10));
    this.wf.F(o);
    this.mc.F(h);
    var l = new cd(c.left, c.top, c.width, c.height), n = this.wf.va(), t = this.mc.Ha();
    if(h) {
      var v = j - c.width + t;
      v > t && (v = t);
      0 < v && (l.width -= v, 0 <= this.ih ? (f = this.K.hk(this.ih) - v, 0 > f && (f = 0), this.K.Mk(this.ih, f), this.$a.Mk(this.ih, f), f = this.K.Hl()) : j += v)
    }
    u && (t = this.K.de(this.q.el) + 1, t < l.height && (l.height = t));
    o && (e ? this.ia.style.height = this.ia.offsetHeight + n + "px" : (t = f - c.height + n, u && (t = l.height - c.height + n), t > n && (t = n), 0 < t && (l.height -= t, f += t)));
    u = m;
    if(o) {
      this.wf.jd().style.width = j + "px";
      this.wf.Ge(c.left);
      j = this.wf;
      if("0px" !== j.D.style.bottom && (j.D.style.bottom = "0px", j.D.style.top = "", j.ub !== k)) {
        for(u = j.ub.length;0 <= --u;) {
          j.ub[u].D.style.bottom = "0px", j.ub[u].D.style.top = ""
        }
      }
      this.wf.xa(l.width);
      u = i
    }
    if(h) {
      this.mc.jd().style.height = f + "px";
      f = this.mc;
      if("0px" !== f.D.style.right && (f.D.style.right = "0px", f.D.style.left = "", f.ub !== k)) {
        for(j = f.ub.length;0 <= --j;) {
          f.ub[j].D.style.right = "0px", f.ub[j].D.style.left = ""
        }
      }
      this.mc.pd(c.top);
      this.mc.Ma(l.height);
      u = i
    }
    u && (this.K.xa(l.width), this.$a.xa(l.width));
    e && h === m ? this.K.Ma(-1) : this.K.Ma(l.height);
    c = this.K;
    c.TL = i;
    At(c);
    c = this.K.Kl();
    e = Ct(this.K);
    Wt(this, a, b, c, e)
  }
};
s.zf = function(a, b, c) {
  this.U = a;
  if(this.ia !== k) {
    var a = this.Qc.Ha(), e = this.Qc.va(), f = this.$a.Ha(), h = this.$a.va();
    Xt(this);
    for(var j = this.$a.mf(), l = this.$a.ta(), n = 0;n < l;n++) {
      for(var o = 0;o < j;o++) {
        var u = qs(this.q.rk, 0, o, n);
        if(u !== k) {
          var t = "";
          if(1 === l) {
            var v = this.q.zb[o];
            if(v !== g && 0 < v.Jg.length && v.name === this.q.Jg) {
              a: {
                t = this.vl;
                switch(this.q.Am) {
                  case 2:
                    t = t.pQ;
                    break a;
                  case 4:
                    t = t.JP;
                    break a
                }
                t = ""
              }
            }
          }
          u.displayText !== g && this.$a.eA(o, n, t + u.displayText)
        }
      }
    }
    this.U.Sd() && (j = this.K.Hr(), l = this.K.Hl(), Yt(this, i, b, c), this.Yn.EE && (this.Yn.EE = m, this.wp && this.wp.tw()), (j !== this.K.Hr() || l !== this.K.Hl() || a !== this.Qc.Ha() || e !== this.Qc.va() || f !== this.$a.Ha() || h !== this.$a.va()) && this.ud())
  }
};
s.Qj = function(a, b) {
  if(this.ia !== k) {
    var c = this.q.ex ? "1px" : "";
    this.ia.style.borderWidth !== c && (this.ia.style.borderWidth = c);
    var c = m, e = i;
    switch(this.q.su) {
      case 2:
        e = c = m;
        break;
      case 3:
        c = i;
        e = m;
        break;
      case 0:
        e = c = i
    }
    this.$a.tA(c);
    this.$a.hA(e);
    this.K.tA(c);
    this.K.hA(e);
    this.Qc.Lk(e);
    this.$a.Lk(e);
    this.$a.at();
    if(0 < this.q.rk.Bi[0]) {
      for(var c = this.q.rk.Qm, f = e = 0, h = c.length;0 <= --h;) {
        var e = c[h].x, f = c[h].y, j = qs(this.q.rk, 0, e, f);
        j !== k && (j.colSpan !== g && this.$a.fo(e, f, j.colSpan), j.rowSpan !== g && this.$a.ho(e, f, j.rowSpan))
      }
      ms(this.q.rk)
    }
    Zt(this, a, b)
  }
};
function Zt(a, b, c) {
  b === g && (b = 0);
  c === g && (c = a.K.ta());
  a.K.at();
  if(0 < a.q.Xq.Bi[0]) {
    for(var e = a.q.Xq.Qm, f = 0, h = 0, j = e.length;0 <= --j;) {
      var f = e[j].x, h = e[j].y, l = qs(a.q.Xq, 0, f, h);
      l !== k && (l.colSpan !== g && a.K.fo(f, h, l.colSpan), l.rowSpan !== g && a.K.ho(f, h, l.rowSpan))
    }
    ms(a.q.Xq)
  }
  a.K.Yx(a.q.Rq);
  a.K.DH(a.q.Hi);
  a.K.Ps(a.q.ss ? a.q.jv : -1);
  a.K.sw(b, c - b)
}
function Xt(a) {
  0 < a.q.title.length && a.Qc.eA(0, 0, a.q.title)
}
s.mx = function(a, b, c, e) {
  if(w(this.wp) && w(b)) {
    var f = $t(this, b);
    this.wp.mx(a, b, c, e, f)
  }
};
s.xx = function(a, b, c) {
  w(this.wp) && w(a) && (a = $t(this, a), this.wp.xx(b, c, a))
};
s.jd = q("K");
s.getHeader = q("$a");
s.Nc = ba("K");
s.so = function(a) {
  this.wf.so(a)
};
s.Ij = function(a) {
  this.mc.Ij(a)
};
function Tt(a) {
  var b = a.ia.style.width.toString(), c = k;
  0 > a.q.width && 0 < b.length && (c = Bs(b), a.q.width = c.value, a.q.kt = c.MH);
  b = a.ia.style.height.toString();
  0 > a.q.height && 0 < b.length && (c = Bs(b), a.q.height = c.value, a.q.Sr = c.MH)
}
s.Ue = function(a, b) {
  if(0 > a || a > this.ia.offsetWidth || 0 > b || b > this.ia.offsetHeight) {
    return k
  }
  var c = this.Qc.Ue(a, b);
  if(c !== k) {
    return c.message = "title", c.PC = this.Qc, c
  }
  c = this.$a.Ue(a, b);
  if(c !== k) {
    return c.message = "header", c.PC = this.$a, c
  }
  c = this.K.Ue(a, b);
  c !== k && (c.message = "body", c.PC = this.K);
  return c
};
function au(a, b, c) {
  if(b !== g && b !== k) {
    var e = -1;
    if(b.Xh()) {
      if(b.Ag()) {
        e = b.Pc(c)
      }else {
        for(var b = b.eh(), f = b.Da(), h = 0;h < f;++h) {
          e = au(a, b.getItem(h), c)
        }
      }
    }else {
      e = b.Pc(c)
    }
    0 < c && c < e && (c = e)
  }
  return c
}
s.ey = function(a, b, c) {
  b = this.q.zb[b];
  if(b === g || b === k) {
    return m
  }
  a = Nt(this.Yn, a - this.K.Kl(), b.name);
  if(a === g || a === k || 0 >= a.controls.length) {
    return m
  }
  b = k;
  if(c !== g && c !== k && 0 < c.length) {
    a.jr[c] !== g && (b = a.jr[c].na())
  }else {
    for(var e in a.jr) {
      if(b = a.jr[e].na(), b !== k) {
        break
      }
    }
  }
  return b ? (b.focus(), i) : m
};
s.IU = function() {
  var a = this.wf.un();
  this.$a.so(a);
  this.K.so(a)
};
s.pN = function() {
  var a = this.mc.nk();
  if(this.K.ZG === m) {
    this.K.Ij(a)
  }else {
    var b = this.K.Kl(), c = Ct(this.K), e = this.K.Hl();
    this.K.Ij(a);
    var a = this.K.Kl(), f = Ct(this.K);
    Wt(this, b, c, a, f);
    (b !== a || c !== f) && Yt(this, m);
    b = this.K.Hl();
    e !== b && (this.mc.jd().style.height = b + "px")
  }
};
s.BU = function(a) {
  this.Ij(this.mc.nk() - a.Rd.wheelDeltaY);
  a.preventDefault();
  a.stopPropagation()
};
function Vt(a) {
  return a.q.yr || 0 <= a.q.height ? m : 0 >= a.q.el
}
function $t(a, b) {
  var c = k, c = b instanceof HTMLInputElement ? b : b.La(), c = a.K.ku(c);
  return a.q.Hi ? a.K.ME(c.x) : a.K.Vr(a.K.de(a.K.Kl()) + c.y)
}
function Ut(a, b, c, e) {
  var f = [];
  f.length = c;
  var h = 0, j = 0;
  a.ih = -1;
  for(h = 0;h < c;++h) {
    var l = a.q.zb[h];
    l !== g ? l.hg ? 0 < l.width ? (f[h] = l.width, b -= l.width) : (++j, a.ih = h) : f[h] = 0 : (++j, a.ih = h)
  }
  0 < j && 0 < b && (e = Math.floor(b / j));
  for(h = 0;h < c;++h) {
    f[h] === g && (f[h] = e)
  }
  0 <= a.ih && 0 < b && (f[a.ih] = b - (j - 1) * e);
  return f
}
function Wt(a, b, c, e, f) {
  if(!(a.U === k || b === e && c === f)) {
    var h = 0, j = [], l = [];
    if(e < c && f > b) {
      for(h = b;h < e;++h) {
        j.push(h), l.push(m)
      }
      h = f + 1
    }else {
      h = b
    }
    for(;h <= c;++h) {
      j.push(h), l.push(m)
    }
    for(h = e;h <= f;++h) {
      j.push(h), l.push(i)
    }
    a.U.xh(j, l)
  }
}
function Yt(a, b, c, e) {
  var f = 0, h = 0;
  a.q.Hi ? h = a.K.mf() : (f = a.K.Kl(), h = a.K.XD());
  if(c === g || c < f) {
    c = f
  }
  if(e === g || e > f + h) {
    e = f + h
  }
  a: {
    var h = a.Yn, j = a.q, l = a.U, a = a.q.Hi ? a.jP : a.K, n = f;
    if(!(l === g || l === k)) {
      if(f = j.zb.length, !(0 >= f || c >= e)) {
        if(b === m) {
          var o = h.cx;
          o.jF && (a.QG(o.MQ), o.jF = m)
        }
        for(var u = o = 0, t = 0, v = 0, n = c - n, y = k, o = 0;o < f;++o) {
          if(y = j.zb[o], y.dt && (a.DE() || y.ak)) {
            u = c;
            for(v = n;u < e;++u, ++v) {
              a.Js(o, u, Ot(h, v, y))
            }
            y.ak = m
          }
        }
        a.qI();
        It = vs = i;
        for(o = 0;o < f;++o) {
          if(y = j.zb[o], y.dt) {
            if(y.oI) {
              for(var J = y.Ri, u = 0;u < J.length;++u) {
                var t = J[u], M = h.vC.create(t.converter), oa = t.source, Q = [];
                ab(l.Sd(), oa) || (Q = oa.split("."), oa = Q[0]);
                t = c;
                for(v = n;t < e;++t, ++v) {
                  var ia = h.tb[v];
                  if(ia === g) {
                    break a
                  }
                  var Pa = ia[y.name];
                  if(Pa === g) {
                    break a
                  }
                  var ia = Pa.gx[u], jb = Pa.hx[u], Pa = "set" + jb, Ya = "get" + jb;
                  if(ia !== g && ia !== k && ia[Pa] !== g) {
                    jb = k;
                    ia[Ya] !== g && (jb = ia[Ya]());
                    Ya = l.I(t, oa);
                    if(1 < Q.length) {
                      for(var Db = 1;Db < Q.length;Db++) {
                        var Vb = Q[Db].indexOf("[");
                        if(-1 === Vb) {
                          Ya = Ya[Q[Db]]
                        }else {
                          var nc = Q[Db].indexOf("]"), Ya = Ya[Q[Db].substring(0, Vb)][Q[Db].substring(Vb + 1, nc)]
                        }
                      }
                    }
                    Ya !== g && (Ya = M != k ? M.ul(Ya, ia) : Ya, Ya !== jb && (ia[Pa](Ya), b && Kt(h.cx, y.wC, l, oa, Ya, jb, a, t, o)))
                  }
                }
              }
            }
          }else {
            for(t = c;t < e;++t) {
              u = h, v = t, J = o, M = y, oa = l, Q = a, ia = b, Pa = M.oI ? M.Ri[0].source : M.name, jb = g, ia && (jb = Q.Zt(J, v), jb !== k && (jb = jb.nodeValue)), Ya = oa.I(v, Pa), Q.Js(J, v, Ya), ia && Kt(u.cx, M.wC, oa, Pa, Ya, jb, Q, v, J)
            }
          }
        }
        It = vs = m
      }
    }
  }
}
;function bu(a, b, c) {
  gh.call(this, a, c);
  this.Xn = b
}
C(bu, gh);
bu.prototype.type = "etk_grid_mouse_over_row";
bu.prototype.Xn = "";
bu.prototype.ou = q("Xn");
bu.prototype.getRowInfo = bu.prototype.ou;
function cu(a, b, c) {
  this.B = new lf;
  I.call(this, a, "MouseOverRow", b, c)
}
C(cu, I);
cu.prototype.i = function(a, b) {
  G(this.B, "etk_grid_mouse_over_row", a, g, b)
};
cu.prototype.listen = cu.prototype.i;
cu.prototype.H = function(a, b) {
  Ve(this.B, "etk_grid_mouse_over_row", a, g, b)
};
cu.prototype.unlisten = cu.prototype.H;
cu.prototype.la = function() {
  Ze(this.B, "etk_grid_mouse_over_row")
};
cu.prototype.unlistenAll = cu.prototype.la;
cu.prototype.v = function(a, b) {
  var c = new bu(b, a, this.aa);
  Ah(this) && (this.B.dispatchEvent(c), this.md == i && wh.g().Nd(this.aa.P(), this.Fc, a, this.Kc))
};
function du(a, b, c) {
  gh.call(this, a, c);
  this.Yi = b
}
C(du, gh);
du.prototype.type = "etk_grid_cell_manipulated";
du.prototype.Yi = "";
du.prototype.getData = q("Yi");
du.prototype.getData = du.prototype.getData;
function eu(a, b, c) {
  this.B = new lf;
  I.call(this, a, "CellManipulated", b, c)
}
C(eu, I);
eu.prototype.i = function(a, b) {
  G(this.B, "etk_grid_cell_manipulated", a, g, b)
};
eu.prototype.listen = eu.prototype.i;
eu.prototype.H = function(a, b) {
  Ve(this.B, "etk_grid_cell_manipulated", a, g, b)
};
eu.prototype.unlisten = eu.prototype.H;
eu.prototype.la = function() {
  Ze(this.B, eu.UI)
};
eu.prototype.unlistenAll = eu.prototype.la;
eu.prototype.v = function(a, b, c) {
  a = '{"e":"' + a.element + '","ev":"' + a.event + '","v":' + (b === k ? "null" : '"' + b + '"') + ',"i":' + c.P();
  if(w(c)) {
    for(var a = a + ',"d":{', b = c.Sd(), e = b.length, f = 0;f < e;f++) {
      var h = b[f], a = a + ('"' + h + '":"' + c.I(h) + '"');
      f < e - 1 && (a += ",")
    }
    a += "}"
  }
  a += "}";
  c = new du(k, a, this.aa);
  Ah(this) && (this.B.dispatchEvent(c), this.md == i && wh.g().Nd(this.aa.P(), this.Fc, a, this.Kc))
};
function fu(a, b, c) {
  gh.call(this, a, c);
  this.Xn = b
}
C(fu, gh);
fu.prototype.type = "etk_grid_row_doubleclicked";
fu.prototype.Xn = "";
fu.prototype.ou = q("Xn");
fu.prototype.getRowInfo = fu.prototype.ou;
function gu(a, b, c) {
  this.B = new lf;
  I.call(this, a, "RowDoubleClicked", b, c)
}
C(gu, I);
gu.prototype.i = function(a, b) {
  G(this.B, "etk_grid_row_doubleclicked", a, g, b)
};
gu.prototype.listen = gu.prototype.i;
gu.prototype.H = function(a, b) {
  Ve(this.B, "etk_grid_row_doubleclicked", a, g, b)
};
gu.prototype.unlisten = gu.prototype.H;
gu.prototype.la = function() {
  Ze(this.B, "etk_grid_row_doubleclicked")
};
gu.prototype.unlistenAll = gu.prototype.la;
gu.prototype.v = function(a, b) {
  var c = new fu(b, a, this.aa);
  Ah(this) && (this.B.dispatchEvent(c), this.md == i && wh.g().Nd(this.aa.P(), this.Fc, a, this.Kc))
};
function hu(a, b, c) {
  gh.call(this, a, c);
  this.tb = b
}
C(hu, gh);
hu.prototype.type = "etk_grid_row_selection_changed";
hu.prototype.tb = [];
hu.prototype.rL = q("tb");
hu.prototype.getRows = hu.prototype.rL;
function iu(a, b, c) {
  this.B = new lf;
  I.call(this, a, "RowSelectionChanged", b, c)
}
C(iu, I);
iu.prototype.i = function(a, b) {
  G(this.B, "etk_grid_row_selection_changed", a, g, b)
};
iu.prototype.listen = iu.prototype.i;
iu.prototype.H = function(a, b) {
  Ve(this.B, "etk_grid_row_selection_changed", a, g, b)
};
iu.prototype.unlisten = iu.prototype.H;
iu.prototype.la = function() {
  Ze(this.B, "etk_grid_row_selection_changed")
};
iu.prototype.unlistenAll = iu.prototype.la;
iu.prototype.v = function(a, b) {
  var c = new hu(b, a, this.aa);
  Ah(this) && (this.B.dispatchEvent(c), this.md == i && wh.g().Nd(this.aa.P(), this.Fc, "{}", this.Kc))
};
function T(a, b, c, e, f, h, j) {
  Rn.call(this, a, b, c, e, f);
  w(a.name) && 0 < a.name.length ? this.tu[a.name] === g && (this.tu[a.name] = this) : w(a.id) && 0 < a.id.length && this.tu[a.id] === g && (this.tu[a.id] = this);
  a = this.a();
  this.pm = this.am = 1E3;
  ju(this, a.Nj);
  a.mV = A(this.EU, this);
  this.xb = w(h) ? h : new St(a, this);
  w(j) && (this.U = j);
  this.Vy = new hh(100, A(this.ev, this));
  this.dB = new hh(100, A(this.Aj, this));
  this.Uz = new hh(100, A(this.uG, this));
  Gj(this);
  var l = j = h = f = e = a = m, n = m;
  w(b) && (a = w(b.CellClicked), e = w(b.HeaderClicked), f = w(b.RowClicked), h = w(b.RowDoubleClicked), j = w(b.CellManipulated), l = w(b.RowSelectionChanged), n = w(b.MouseOverRow));
  this.IJ = new Zn(this, c, a);
  this.tx = new ao(this, c, e);
  this.XN = new fs(this, c, f);
  this.YN = new gu(this, c, h);
  this.GC = new eu(this, c, j);
  this.YG = new iu(this, c, l);
  this.Xz = new cu(this, c, n)
}
C(T, Rn);
B("tr.ui.grid.Grid", T);
H.g().z("Grid", T);
s = T.prototype;
s.M = Cs.prototype;
s.oD = m;
s.tu = {};
s.iw = {};
function ku(a, b) {
  var c = 0, e = 0, f = b;
  do {
    f = b;
    for(c = 0;c < a.length;++c) {
      var h = a[c].xb, j = e, l = b;
      if(!(h.q === k || h.Yn === k)) {
        var n = h.q.OA, o = 0, u = 0, t = 0, v = 0, y = 0, J = h.q.zb, M = h.Yn.ta();
        1 === n ? j < M && (y = J.length, v = 1, o = j) : 2 === n && j < J.length && (y = M, u = 1, t = j);
        for(j = 0;j < y;++j) {
          n = Nt(h.Yn, o, J[t].name);
          if(n !== k) {
            for(M = 0;M < n.controls.length;++M) {
              l = au(h, n.controls[M], l)
            }
          }
          o += u;
          t += v
        }
      }
      b = l
    }
    ++e;
    if(1E4 < e) {
      window.console.log("Potential infinite loop detected. Please check tab index validity.");
      break
    }
  }while(f < b);
  return b
}
s.a = function() {
  return T.e.a.call(this)
};
s.qF = r(m);
s.m = function() {
  this.Xb("Grid", "div", "etk-grid")
};
s.l = function(a, b) {
  T.e.l.call(this, a);
  var c = this.a(), e = b = w(b) ? b : new gs, f;
  f = a.querySelectorAll('div[grid-component-type*="ColumnDefinition"]');
  if(f === g || f === k) {
    f = []
  }else {
    for(var h = [], j = 0;j < f.length;j++) {
      var l = f[j], n = is(l);
      n.Ri === g && (n.Ri = hs(l));
      if(n.Xm === g) {
        for(var o = n, u = l, t = u.querySelectorAll('div[grid-component-type="GridItemEvent"]'), v = [], y = 0;y < t.length;y++) {
          var J = t[y], M = is(J);
          v.push(M);
          u.removeChild(J)
        }
        o.Xm = v
      }
      n.ol === g && (n.ol = 0 < l.children.length ? l.children[0].outerHTML : "");
      h.push(n);
      a.removeChild(l)
    }
    f = h
  }
  e.OC = f;
  f = a.querySelectorAll('div[grid-component-type="GridRow"]');
  h = [];
  for(j = 0;j < f.length;j++) {
    n = l = f[j];
    o = n.querySelectorAll('div[grid-component-type="GridItem"]');
    u = [];
    for(t = 0;t < o.length;t++) {
      v = o[t], y = is(v), y.Ri = hs(v), y.ol = 0 < v.children.length ? v.children[0] : v.innerHTML, u.push(y), n.removeChild(v)
    }
    h.push(u);
    a.removeChild(l)
  }
  e.tb = h;
  f = a.querySelectorAll('div[grid-component-type="GridHeaderRow"]');
  h = [];
  for(j = 0;j < f.length;j++) {
    n = l = f[j];
    o = n.querySelectorAll('div[grid-component-type="GridHeaderCell"]');
    u = {cells:[]};
    for(t = 0;t < o.length;t++) {
      v = o[t], u.cells.push(is(v)), n.removeChild(v)
    }
    h.push(u);
    a.removeChild(l)
  }
  e.HE = h;
  f = a.querySelectorAll('div[grid-component-type="GridCellStyle"]');
  h = [];
  for(j = 0;j < f.length;j++) {
    l = f[j], h.push(is(l)), a.removeChild(l)
  }
  e.HC = h;
  Ds(c, b.OC);
  Es(c, b.HE);
  Fs(c, b.SD());
  c = b.tb;
  this.xb.l(a);
  f = this.a();
  h = m;
  e = k;
  if(!h && f.pI) {
    this.Hx === k && (this.Hx = new Vr);
    e = this.Hx;
    h = "CF_NAME,CF_CLOSE,CF_HIGH,CF_LOW,CF_LAST,CF_VOLUME".split(",");
    if(e.j === k && e.dm === k) {
      try {
        JET.Quotes.create(g).JJ("0#.SETI").formattedFields(h, 2).onUpdate(A(e.onUpdate, e)).onNewRow(A(e.onInsert, e)).onRemoveRow(A(e.onDelete, e)).start();
        e.j = new R;
        for(j = 0;j < h.length;j++) {
          e.j.Ow(h[j])
        }
      }catch(oa) {
        if(h = h.length, e.ir === k && (e.ir = new bo, e.Uq = new bo, e.$s = new bo, e.ir.Ti = A(e.QU, e), e.Uq.Ti = A(e.PU, e), e.$s.Ti = A(e.RU, e)), e.ir.repeat = 0, e.Uq.repeat = -1, e.$s.repeat = -1, e.Uq.Ln = 10, e.$s.Ln = -1, co(e.ir, 1), co(e.Uq, 1E5), co(e.$s, 1E4), e.dm === k) {
          eo(e.ir), e.dm = new Jr, e.dm.resize(0, h)
        }
      }
    }
    e = e.j;
    h = i
  }
  !h && 0 < f.Rh.length && (e = yo.g().we(f.Rh), e !== g && e !== k ? h = i : window.console.error("Error at " + this.getName() + ". Cannot find datatable named " + f.Rh + "."));
  if(!h && 0 < f.uF.length) {
    var Q;
    try {
      Q = JSON.parse(f.uF)
    }catch(ia) {
      window.console.error("Error at " + this.getName() + ". ItemSource is not a valid json.")
    }
    Q && (e = new R, e.Ty(Q), h = i)
  }
  if(!h) {
    Q = f.zb;
    f = Q.length;
    h = c.length;
    e = new R;
    this.En = 0 < h;
    for(l = l = j = 0;l < f;l++) {
      e.Ow(Q[l].name)
    }
    e.Yd(h);
    for(j = 0;j < h;j++) {
      n = e.gh(j);
      for(l = 0;l < f;l++) {
        e.ka(n.P(), Q[l].name, c[j][l].ol)
      }
    }
    h = i
  }
  h && lu(this, e);
  a != k && a.setAttribute("tabindex", 0);
  this.Gg(this.ad())
};
s.xC = k;
s.k = function() {
  T.e.k.call(this);
  this.xC = A(this.uG, this);
  G(window, "resize", this.xC);
  G(this.b(), "click", A(this.vU, this), i);
  G(this.b(), "dblclick", A(this.wU, this), i);
  G(this.b(), "mousemove", A(this.yU, this));
  G(this.b(), "mouseout", A(this.Dg, this));
  G(this.b(), "keydown", A(this.pG, this));
  this.xb.k();
  this.tx.i(this.hN, this)
};
s.nb = function() {
  this.tO(k);
  mu(this);
  this.tx.H(this.hN, this);
  this.xb.nb();
  Ze(this.b());
  Ve(window, "resize", this.xC);
  T.e.nb.call(this)
};
s.fv = function() {
  Tt(this.xb)
};
s.od = function(a) {
  this.a().Qd = a;
  a === m ? this.Pc(-1) : 0 < this.am && this.Pc(this.am)
};
s.Pc = function(a) {
  0 < a && (this.am = a);
  var b = k, b = this.a().Nj, b = b !== k ? this.iw[b] : k;
  if(b !== g && b !== k && 0 < b.length) {
    if(this !== b[0]) {
      return a
    }
  }else {
    b = [this]
  }
  b = ku(b, a);
  if(0 < a) {
    for(;b > this.am + this.pm;) {
      if(this.pm = 2 * this.pm + 1, 0 > this.pm) {
        window.console.log("Possible infinite loop detected. Please check the logic");
        break
      }
    }
    return this.am + this.pm
  }
  return a
};
s.Ag = r(i);
s.uG = function() {
  kh(this.Uz);
  1 !== this.Uz.Wa && (ih(this.Uz), this.ud(), this.zf())
};
s.EU = function() {
  this.update()
};
s.vU = function(a) {
  var b = this;
  setTimeout(function() {
    nu(b, a, "Clicked")
  }, 0)
};
s.wU = function(a) {
  nu(this, a, "DoubleClicked")
};
function nu(a, b, c) {
  window.event && (b = window.event);
  var e = ou(a, b), e = a.xb.Ue(e.x, e.y);
  if(e !== k) {
    var f = "";
    if("header" === e.message) {
      "Clicked" === c && (f = a.a().zb[e.Wi].name, a["getColumn" + c + "Event"]().v(e.Wi, f, b))
    }else {
      if("body" === e.message) {
        var h = "", h = "getCell" + c + "Event", f = "getRow" + c + "Event";
        if(a.a().Hi) {
          "Clicked" === c && a[h]().v(e.Wi, e.rowIndex, b), h = pu(a, e.Wi, e.rowIndex), a[f]().v(h, b)
        }else {
          if("Clicked" === c && a[h]().v(e.rowIndex, e.Wi, b), h = pu(a, e.rowIndex, e.Wi), a[f]().v(h, b), e = e.rowIndex, !(0 > e)) {
            h = a.a();
            c = h.Sg;
            f = -1;
            h = h.Fj;
            2 === h && (b.shiftKey === m ? h = b.ctrlKey === m ? 1 : 3 : (f = c.gf, 0 > f && (h = 1)));
            switch(h) {
              case 1:
                Zr(c, e);
                break;
              case 2:
                b = f < e ? f : e;
                e = f < e ? e : f;
                (b !== c.Gc || e !== c.nd) && $r(c);
                as(c, b, e - b + 1);
                break;
              case 3:
                c.Db[e] === i ? c.Lx(e) : c.select(e);
                break;
              default:
                $r(c)
            }
            qu(a)
          }
        }
      }
    }
  }
}
s.yU = function(a) {
  if(this.a().ss) {
    window.event && (a = window.event);
    var b = ou(this, a), b = this.xb.Ue(b.x, b.y), c = -1;
    b !== k && "body" === b.message && (c = b.rowIndex);
    ru(this, c, a)
  }
};
s.Dg = function(a) {
  if(this.a().ss) {
    var b = ou(this, a), c = this.b();
    0 <= b.x && b.x < c.offsetWidth || 0 <= b.y && b.y < c.offsetHeight || (window.console.log("mouse out"), ru(this, -1, a))
  }
};
s.pG = function(a) {
  var b = i;
  switch(a.keyCode) {
    case 9:
      if(a.shiftKey === m) {
        var c = this.a();
        if(!(0 >= c.PA.length)) {
          var e = sd(document.activeElement, this.b()), e = this.xb.Ue(e.x, e.y);
          "body" === e.message && (c = c.PA[e.rowIndex], c === g || c === k || (c = c[e.Wi], c === g || c === k || (e = this.tu[c.IY], e = e !== g ? e : k, e === k && (e = this), e.ey(c.rowIndex, c.Wi) && a.preventDefault())))
        }
      }else {
        b = m
      }
      break;
    case 33:
      su(this, -1, i);
      break;
    case 34:
      su(this, 1, i);
      break;
    case 38:
      su(this, -1, m);
      break;
    case 40:
      su(this, 1, m);
      break;
    default:
      b = m
  }
  b && a !== k && a !== g && (a.preventDefault(), a.stopPropagation())
};
s.ev = function() {
  if(!this.a().bh && (kh(this.Vy), 1 !== this.Vy.Wa)) {
    ih(this.Vy);
    var a = this.xb.mc, b = a.Se(), c;
    if(c = b) {
      a: {
        c = this.xb;
        if(c.mc.Se()) {
          var e = parseInt(c.mc.jd().style.height, 10), f = c.mc.va();
          if(0 < e && 0 < f) {
            c = c.mc.nk() >= e - f;
            break a
          }
        }
        c = m
      }
    }
    this.ud();
    this.zf();
    this.Qj();
    a = a.Se();
    if(this.a().Uw && (!b && a || c)) {
      b = this.xb, b.mc.Se() && (a = parseInt(b.mc.jd().style.height, 10), c = b.mc.va(), 0 < a && 0 < c && b.mc.Ij(a - c)), this.xb.pN()
    }
  }
};
s.Az = function(a) {
  var b = this.a();
  b.bh || (bs(b.Sg, a.Qi, a.yy()), this.ud(), this.zf(), this.Qj())
};
s.Aj = function(a) {
  if(!this.a().bh) {
    var b;
    kh(this.dB, a);
    if(1 !== this.dB.Wa) {
      var a = ih(this.dB), c = g, e = g;
      if(0 < a.length) {
        b = a[0].data;
        for(var c = b.Qi, e = c + b.yy(), f = a.length;1 <= --f;) {
          b = a[f].data;
          var h = b.Qi;
          h < c && (c = h);
          b = h + b.yy();
          b > e && (e = b)
        }
      }
      this.zf(c, e)
    }
  }
};
s.oN = function() {
  this.a().bh || (tu(this), this.update())
};
s.hN = function(a) {
  uu(this, a.UD())
};
s.cL = q("U");
s.Y = function(a) {
  var b = this.ob();
  T.e.Y.call(this, a);
  a !== b && a === i && this.ud()
};
T.prototype.setIsVisible = T.prototype.Y;
T.prototype.vn = function() {
  return this.a().title
};
T.prototype.getTitle = T.prototype.vn;
T.prototype.yh = function(a) {
  this.a().title = a;
  Xt(this.xb)
};
T.prototype.setTitle = T.prototype.yh;
T.prototype.ad = function() {
  return this.a().Vn
};
T.prototype.getRowHeight = T.prototype.ad;
T.prototype.Gg = function(a) {
  this.a().Vn !== a && (this.a().Vn = a, this.ud(), this.Qj());
  a = Math.ceil(a / 16);
  a = 1 > a ? "32" : 16 * a;
  F(this.b(), "etk-grid-row-height-" + a, i)
};
T.prototype.setRowHeight = T.prototype.Gg;
T.prototype.LS = function() {
  return this.a().el
};
T.prototype.getVisibleRowCount = T.prototype.LS;
T.prototype.lW = function(a) {
  this.a().el !== a && (this.a().el = a, this.ud(), this.zf())
};
T.prototype.setVisibleRowCount = T.prototype.lW;
T.prototype.dW = function(a) {
  uu(this, a)
};
T.prototype.setSortBy = T.prototype.dW;
T.prototype.FS = function() {
  return this.a().XA
};
T.prototype.getTitleVisible = T.prototype.FS;
T.prototype.gW = function(a) {
  this.a().XA = a;
  this.ud()
};
T.prototype.setTitleVisible = T.prototype.gW;
T.prototype.NR = function() {
  return this.a().ux
};
T.prototype.getColumnHeaderVisible = T.prototype.NR;
T.prototype.NV = function(a) {
  this.a().ux = a;
  this.ud()
};
T.prototype.setColumnHeaderVisible = T.prototype.NV;
T.prototype.$R = function() {
  return this.a().Pr
};
T.prototype.getGridLineVisible = T.prototype.$R;
T.prototype.WV = function(a) {
  this.a().Pr = a;
  this.a().Pr ? this.kH(1) : this.kH(2)
};
T.prototype.setGridLineVisible = T.prototype.WV;
T.prototype.ER = function() {
  return this.a().ex
};
T.prototype.getBorderVisible = T.prototype.ER;
T.prototype.JV = function(a) {
  this.a().ex = a;
  this.ud();
  this.Qj()
};
T.prototype.setBorderVisible = T.prototype.JV;
T.prototype.JS = function() {
  return this.a().gB
};
T.prototype.getUseColumnPadding = T.prototype.JS;
T.prototype.iW = function(a) {
  this.a().gB = a;
  this.ud();
  this.Qj()
};
T.prototype.setUseColumnPadding = T.prototype.iW;
T.prototype.uS = function() {
  return this.a().Bv
};
T.prototype.getScrollbarVisible = T.prototype.uS;
T.prototype.cW = function(a) {
  this.a().Bv = Number(a);
  this.ud()
};
T.prototype.setScrollbarVisible = T.prototype.cW;
T.prototype.WK = function() {
  return this.a().Rq
};
T.prototype.getAlternateShading = T.prototype.WK;
T.prototype.fO = function(a) {
  this.a().Rq = a;
  Zt(this.xb)
};
T.prototype.setAlternateShading = T.prototype.fO;
T.prototype.QR = function() {
  return this.a().zb
};
T.prototype.getColumns = T.prototype.QR;
T.prototype.OR = function() {
  for(var a = this.a().zb, b = [], c = 0;c < a.length;++c) {
    b.push(a[c].name)
  }
  return b
};
T.prototype.getColumnNames = T.prototype.OR;
T.prototype.update = function() {
  this.ud();
  this.zf();
  this.Qj()
};
T.prototype.update = T.prototype.update;
T.prototype.ud = function() {
  this.a().bh || (this.U !== g && this.U !== k && (this.a().Un = this.U.ta()), this.xb.ud())
};
T.prototype.updateLayout = T.prototype.ud;
T.prototype.zf = function(a, b) {
  this.a().bh || this.U !== k && this.xb.zf(this.U, a, b)
};
T.prototype.updateData = T.prototype.zf;
T.prototype.Qj = function(a, b) {
  this.a().bh || this.xb.Qj(a, b)
};
T.prototype.updateStyles = T.prototype.Qj;
T.prototype.Yd = function(a) {
  this.a().Un !== a && (this.a().Un = a, this.ud())
};
T.prototype.setRowCount = T.prototype.Yd;
T.prototype.ta = function() {
  return this.a().Un
};
T.prototype.getRowCount = T.prototype.ta;
T.prototype.Ha = function() {
  return this.a().width
};
T.prototype.getWidth = T.prototype.Ha;
T.prototype.xa = function(a) {
  this.a().width !== a && (this.a().width = a, this.ud())
};
T.prototype.setWidth = T.prototype.xa;
T.prototype.MS = function() {
  return this.a().kt
};
T.prototype.getWidthUnit = T.prototype.MS;
T.prototype.mW = function(a) {
  a = 1 === a ? 1 : 0;
  this.a().kt !== a && (this.a().kt = a, this.ud())
};
T.prototype.setWidthUnit = T.prototype.mW;
T.prototype.va = function() {
  return this.a().height
};
T.prototype.getHeight = T.prototype.va;
T.prototype.Ma = function(a) {
  this.a().height !== a && (this.a().height = a, this.ud())
};
T.prototype.setHeight = T.prototype.Ma;
T.prototype.XV = function(a) {
  a = 1 === a ? 1 : 0;
  this.a().Sr !== a && (this.a().Sr = a, this.ud())
};
T.prototype.setHeightUnit = T.prototype.XV;
T.prototype.bS = function() {
  return this.a().Sr
};
T.prototype.getHeightUnit = T.prototype.bS;
T.prototype.jA = function(a) {
  this.En || lu(this, a)
};
T.prototype.setItemSource = T.prototype.jA;
T.prototype.hO = function(a) {
  var b = this.a();
  a === b.Rh || this.En || ($r(b.Sg), b.Rh = a, lu(this, yo.g().we(b.Rh)))
};
T.prototype.setDataTableId = T.prototype.hO;
T.prototype.Nr = function() {
  return this.a().Fj
};
T.prototype.getSelectionMode = T.prototype.Nr;
T.prototype.yH = function(a) {
  var a = Number(a), b = this.a();
  b.Fj !== a && (b.Fj = a, b = b.Sg, 0 === a ? $r(b) : 1 === a && Zr(b, b.Gc), qu(this))
};
T.prototype.setSelectionMode = T.prototype.yH;
T.prototype.lS = function() {
  return this.a().ss
};
T.prototype.getMouseOverEnabled = T.prototype.lS;
T.prototype.aW = function(a) {
  this.a().ss = a;
  this.a().jv = -1;
  Zt(this.xb)
};
T.prototype.setMouseOverEnabled = T.prototype.aW;
T.prototype.AR = function() {
  return this.a().Uw
};
T.prototype.getAutoScroll = T.prototype.AR;
T.prototype.IV = function(a) {
  this.a().Uw = a
};
T.prototype.setAutoScroll = T.prototype.IV;
T.prototype.LC = function() {
  $r(this.a().Sg);
  qu(this)
};
T.prototype.clearSelection = T.prototype.LC;
T.prototype.CV = function(a, b) {
  var c = this.a(), e = c.Sg;
  switch(c.Fj) {
    case 1:
      Zr(e, a);
      break;
    case 2:
    ;
    case 3:
      as(e, a, b)
  }
  qu(this)
};
T.prototype.selectRowRange = T.prototype.CV;
T.prototype.yS = q("rj");
T.prototype.getStaticDataTable = T.prototype.yS;
T.prototype.Ks = function(a) {
  var b = JSON.parse(a), a = b.name, b = b.param;
  if(!("string" !== ga(a) || this[a] === g)) {
    this.oD = i;
    var c = ga(b);
    if("array" === c) {
      this[a].apply(this, b)
    }else {
      if("undefined" !== c) {
        this[a](b)
      }else {
        this[a]()
      }
    }
    this.oD = m
  }
};
T.prototype.setCommand = T.prototype.Ks;
T.prototype.RR = p();
T.prototype.getDataRows = T.prototype.RR;
T.prototype.dJ = function(a) {
  Is(this.a(), a);
  this.Qj()
};
T.prototype.addCellStyle = T.prototype.dJ;
T.prototype.pt = function(a) {
  this.En || (this.a().pt(a), this.update())
};
T.prototype.addColumnDefinition = T.prototype.pt;
T.prototype.wT = function(a, b) {
  this.En || (this.a().pt(b, a), this.update())
};
T.prototype.insertColumnDefinition = T.prototype.wT;
T.prototype.PG = function(a) {
  this.En || (this.a().PG(a), this.update())
};
T.prototype.removeColumnDefinition = T.prototype.PG;
T.prototype.lI = function(a, b) {
  this.En || (this.a().lI(a, b), this.update())
};
T.prototype.updateColumnDefinition = T.prototype.lI;
T.prototype.MG = function() {
  var a = this.a();
  a.Un = 0;
  for(var b = a.zb.length;0 <= --b;) {
    a.rk.uh(b, 0, "displayText", "")
  }
  rs(a.sk, 2);
  rs(a.Mo, 2);
  a.zb.length = 0;
  this.a().bh || this.xb.ud()
};
T.prototype.removeAllColumns = T.prototype.MG;
T.prototype.Mw = function(a) {
  this.a().Mw(a);
  this.update()
};
T.prototype.addHeaderRow = T.prototype.Mw;
T.prototype.hR = function() {
  var a = this.a().Sg, b = a.pa;
  if(0 < b) {
    a = ds(a);
    if(this.U !== g && this.U !== k) {
      for(var c = 0;c < b;c++) {
        this.rj.Ds(this.U.sn(a[c]))
      }
    }
    this.LC()
  }
};
T.prototype.deleteSelectedRows = T.prototype.hR;
T.prototype.aH = function(a, b) {
  var a = Number(a), c = this.xb.jd();
  0 > a ? a = 0 : a >= c.ta() && (a = c.ta() - 1);
  var e = c.de(a);
  b && (e = e - c.va() + c.ad(a) + 1);
  this.xb.Ij(e)
};
T.prototype.scrollToRow = T.prototype.aH;
T.prototype.mx = function(a, b, c, e, f) {
  this.U !== g && this.U !== k && this.GC.v(e, c, this.U.ug(f), a)
};
T.prototype.cellManipulatedHandler = T.prototype.mx;
T.prototype.Ho = function(a) {
  this.U !== g && this.U !== k && (this.U.Ho(vu(this, a)), this.U.filter(), this.update())
};
T.prototype.addFilter = T.prototype.Ho;
T.prototype.To = function() {
  this.U !== g && this.U !== k && (this.U.To(), this.U.reset(), this.update())
};
T.prototype.clearFilter = T.prototype.To;
T.prototype.iH = function(a) {
  this.U !== g && this.U !== k && (this.U.To(), this.U.reset(), this.U.Ho(vu(this, a)), this.U.filter(), this.update())
};
T.prototype.setFilter = T.prototype.iH;
T.prototype.xx = function(a, b, c) {
  this.U !== g && this.U !== k && (c = this.U.ug(c), w(c) && this.rj.ka(c.P(), b, a))
};
T.prototype.controlPropertyChangedHandler = T.prototype.xx;
T.prototype.HR = q("IJ");
T.prototype.getCellClickedEvent = T.prototype.HR;
T.prototype.qS = q("XN");
T.prototype.getRowClickedEvent = T.prototype.qS;
T.prototype.rS = q("YN");
T.prototype.getRowDoubleClickedEvent = T.prototype.rS;
T.prototype.MR = q("tx");
T.prototype.getColumnClickedEvent = T.prototype.MR;
T.prototype.IR = q("GC");
T.prototype.getCellManipulatedEvent = T.prototype.IR;
T.prototype.tS = q("YG");
T.prototype.getRowSelectionChangedEvent = T.prototype.tS;
T.prototype.mS = q("Xz");
T.prototype.getMouseOverRowEvent = T.prototype.mS;
T.prototype.jH = function(a) {
  this.a().bh !== a && ((this.a().bh = a) || this.update())
};
T.prototype.setFrozen = T.prototype.jH;
T.prototype.$D = function() {
  return this.a().bh
};
T.prototype.getFrozen = T.prototype.$D;
T.prototype.aS = function() {
  return this.a().su
};
T.prototype.getGridLinesVisibility = T.prototype.aS;
T.prototype.kH = function(a) {
  this.a().su = Number(a);
  switch(this.a().su) {
    case 2:
      this.a().Pr = m;
      break;
    case 1:
    ;
    case 3:
    ;
    case 0:
      this.a().Pr = i
  }
  this.Qj()
};
T.prototype.setGridLinesVisibility = T.prototype.kH;
T.prototype.GS = function() {
  return this.a().Hi
};
T.prototype.getTranspose = T.prototype.GS;
T.prototype.hW = function(a) {
  if(this.a().Hi !== a) {
    this.a().Hi = a;
    var a = this.xb.jd(), b = this.xb.getHeader();
    a.So();
    b.So();
    a.cr();
    this.update()
  }
};
T.prototype.setTranspose = T.prototype.hW;
T.prototype.SD = function() {
  d(Error("getCellStyles is deprecated"))
};
T.prototype.getCellStyles = T.prototype.SD;
T.prototype.CS = function() {
  return this.a().Nj
};
T.prototype.getTabGroup = T.prototype.CS;
T.prototype.tO = function(a) {
  this.a().Nj !== a && (ju(this, a), this.tw())
};
T.prototype.setTabGroup = T.prototype.tO;
T.prototype.BS = function() {
  return this.a().OA
};
T.prototype.getTabDirection = T.prototype.BS;
T.prototype.eW = function(a) {
  this.a().OA = Number(a);
  this.tw()
};
T.prototype.setTabDirection = T.prototype.eW;
T.prototype.LV = function(a, b, c, e, f) {
  var a = Number(a), c = Number(c), e = Number(e), h = this.a().PA, j = h[a];
  if(j === g || j === k) {
    j = [], h[a] = j
  }
  j[Number(b)] = 0 <= c && 0 <= e ? {gridId:f, rowIndex:c, colIndex:e} : k
};
T.prototype.setCellNextTabStop = T.prototype.LV;
T.prototype.ey = function(a, b, c) {
  return this.xb.ey(a, b, c)
};
T.prototype.focusCell = T.prototype.ey;
T.prototype.tw = function() {
  if(!(this.a().Qd === m || 0 >= this.am)) {
    var a = k, a = this.a().Nj, a = a !== k ? this.iw[a] : k;
    if(a !== g && a !== k && 0 < a.length) {
      if(this !== a[0]) {
        return a[0].tw()
      }
    }else {
      a = [this]
    }
    ku(a, this.am) > this.am + this.pm && (this.pm = 2 * this.pm + 1, H.g().Pc(1))
  }
};
T.prototype.updateTabIndex = T.prototype.tw;
T.prototype.WR = function() {
  return this.a().yr
};
T.prototype.getFillContainerHeight = T.prototype.WR;
T.prototype.VV = function(a) {
  var b = this.a();
  b.yr !== a && (b.yr = a, this.xb.ud())
};
T.prototype.setFillContainerHeight = T.prototype.VV;
function wu(a, b) {
  for(var c = a.a().zb, e = 0;e < c.length;e++) {
    if(b === c[e].name) {
      return e
    }
  }
  return-1
}
function qu(a) {
  a.a().Sg.$g && (a.a().Sg.$g = m, Zt(a.xb), a.oD || a.YG.v([], k))
}
function uu(a, b) {
  var c = a.a(), e = wu(a, b);
  if(!(0 > e) && (e = c.zb[e], e.PH && 0 < e.Jg.length)) {
    a.LC();
    if(c.Jg === b) {
      switch(c.Am) {
        case 0:
          c.Am = 2;
          break;
        case 2:
          c.Am = 4;
          break;
        case 4:
          c.Am = 0
      }
    }else {
      c.Am = 2, c.Jg = b
    }
    tu(a);
    a.zf()
  }
}
function pu(a, b, c) {
  var e = {};
  if(a.U) {
    var f = a.U.Sd(), h = a.a().zb, j = f.length, l = a.U.ug(b);
    l !== g && l !== k && (e.r = l.P());
    c !== g && (e.c = h[c].name);
    e.d = {};
    if(!a.En) {
      for(c = 0;c < j;++c) {
        h = f[c], e.d[h] = a.U.I(b, h)
      }
    }
  }
  return JSON.stringify(e)
}
function ou(a, b) {
  var c = sd(a.b(), document.documentElement), e = xc(document);
  c.x = e.x + b.clientX - c.x;
  c.y = e.y + b.clientY - c.y;
  return c
}
function xu(a) {
  a.U !== g && a.U !== k && (a.U.df.i(a.oN, a), a.U.De.i(a.ev, a), a.U.cf.i(a.Aj, a), a.U.bf.i(a.Az, a))
}
function mu(a) {
  a.U !== g && a.U !== k && (a.U.df.H(a.oN, a), a.U.De.H(a.ev, a), a.U.cf.H(a.Aj, a), a.U.bf.H(a.Az, a))
}
function tu(a) {
  if(!(a.U === g || a.U === k)) {
    var b = a.a();
    if(0 !== b.Am && 0 < b.Jg.length) {
      var c = wu(a, b.Jg);
      -1 !== c && (c = b.zb[c].Jg, 0 < c.length && (a.U.px(), a.U.Lw(c, b.Am), a.U.sort()))
    }else {
      a.U.reset()
    }
  }
}
function su(a, b, c) {
  if(0 !== b) {
    var e = a.a().Sg, f = e.pa, h = a.xb.jd();
    h.sc();
    var j = h.my(), l = -1;
    if(0 === f) {
      e = j + b, c && (l = h.qy(), e = j + b * (l - j + 1)), a.aH(e, m)
    }else {
      var n = e.Gc, l = h.qy();
      1 === f && c ? (c = 0, 0 < b ? n >= j && n < l ? n = l : (c = h.de(n) + h.va(), n = h.Vr(c)) : n > j && n <= l ? n = j : (c = h.de(n) + h.ad(n) - h.va(), n = h.Vr(c)), 0 > n && (n = ~n)) : n += b;
      0 > n ? n = 0 : n >= h.ta() && (n = h.ta() - 1);
      Zr(e, n);
      qu(a);
      (n <= j || n >= l) && a.aH(n, 0 < b)
    }
  }
}
function lu(a, b) {
  a.U || (a.U = new S(k));
  mu(a);
  a.rj = k;
  a.U.Gj(k);
  if(b === g || b === k) {
    a.a().pI && (a.U = a.Hx.cL(), xu(a))
  }else {
    var c = ga(b);
    if("object" === c) {
      b instanceof R && (a.rj = b, a.U.Gj(b))
    }else {
      if("string" === c) {
        try {
          var e = JSON.parse(b + ""), f = new R;
          f.Ty(e);
          a.rj = f;
          a.U.Gj(f)
        }catch(h) {
          window.console.log(h.toString())
        }
      }
    }
    tu(a);
    a.rj !== k && xu(a);
    a.a().Un = a.U.ta();
    a.a().bh === m && a.update()
  }
}
function ju(a, b) {
  var c = a.a(), e = k;
  if(c.Nj !== k && 0 < c.Nj.length && (e = a.iw[c.Nj], e !== g && e !== k && c.Nj !== b)) {
    for(var f = 0;f < e.length;++f) {
      if(a === e[f]) {
        e.splice(f, 1);
        break
      }
    }
    Ij(e)
  }
  c.Nj = b;
  if(b !== k && 0 < b.length) {
    e = a.iw[b];
    if(e === g || e === k) {
      e = [], a.iw[b] = e
    }
    e.push(a);
    Ij(e)
  }
}
function yu(a, b, c) {
  for(var a = a.split(b), b = a[0], e = 1;e < a.length;++e) {
    b = b + c + a[e]
  }
  return b
}
function vu(a, b) {
  for(var c = a.a().zb, e = decodeURIComponent(b), f = {}, h = 0, h = 0;h < c.length;++h) {
    e = yu(e, "$" + c[h].name, "\u2e60" + h + "\u2e60"), f["\u2e60" + h + "\u2e60"] = "" === c[h].Jg ? "$" + c[h].name : "$" + c[h].Jg
  }
  for(h = 0;h < c.length;++h) {
    e = yu(e, "\u2e60" + h + "\u2e60", f["\u2e60" + h + "\u2e60"])
  }
  return e
}
function ru(a, b, c) {
  0 > b && (b = -1);
  var e = a.a();
  b !== e.jv && (e.jv = b, a.xb.jd().Ps(b), b = pu(a, b), c !== g ? a.Xz.v(b, c) : a.Xz.v(b, k))
}
s = T.prototype;
s.xb = k;
s.rj = k;
s.U = k;
s.Hx = k;
s.En = m;
s.IJ = k;
s.XN = k;
s.YN = k;
s.YG = k;
s.Xz = k;
s.tx = k;
s.GC = k;
s.dB = k;
s.Vy = k;
s.Uz = k;
s.am = -1;
s.pm = 0;
function zu() {
  this.length = 0;
  this.T = {}
}
s = zu.prototype;
s.setItem = function(a, b) {
  var c = g;
  this.T.hasOwnProperty(a) ? c = this.T[a] : this.length++;
  this.T[a] = b;
  return c
};
s.getItem = function(a) {
  return this.T.hasOwnProperty(a) ? this.T[a] : g
};
s.removeItem = function(a) {
  if(this.T.hasOwnProperty(a)) {
    var b = this.T[a];
    this.length--;
    delete this.T[a];
    return b
  }
  return k
};
s.keys = function() {
  var a = [], b;
  for(b in this.T) {
    this.T.hasOwnProperty(b) && a.push(b)
  }
  return a
};
s.clear = function() {
  this.T = {};
  this.length = 0
};
var Au = {BI:".", II:",", MI:"%", ot:"0", $P:"+", SP:"-", FI:"E", NI:"\u2030", DB:"\u221e", TP:"NaN", HP:"#,##0.###", cQ:"#E0", ZP:"#,##0%", DP:"\u00a4#,##0.00;(\u00a4#,##0.00)", IP:"USD"}, Bu = Au, Bu = Au;
function Cu(a) {
  var b = Bu.DP, c = ["0"], a = Du[a][0] & 7;
  if(0 < a) {
    c.push(".");
    for(var e = 0;e < a;e++) {
      c.push("0")
    }
  }
  return b.replace(/0.00/g, c.join(""))
}
var Du = {AED:[2, "dh", "\u062f.\u0625.", "DH"], AUD:[2, "$", "AU$"], BDT:[2, "\u09f3", "Tk"], BRL:[2, "R$", "R$"], CAD:[2, "$", "C$"], CHF:[2, "CHF", "CHF"], CLP:[0, "$", "CL$"], CNY:[2, "\u00a5", "RMB\u00a5"], COP:[0, "$", "COL$"], CRC:[0, "\u20a1", "CR\u20a1"], CZK:[2, "K\u010d", "K\u010d"], DKK:[18, "kr", "kr"], DOP:[2, "$", "RD$"], EGP:[2, "\u00a3", "LE"], EUR:[18, "\u20ac", "\u20ac"], GBP:[2, "\u00a3", "GB\u00a3"], HKD:[2, "$", "HK$"], ILS:[2, "\u20aa", "IL\u20aa"], INR:[2, "\u20b9", "Rs"], 
ISK:[0, "kr", "kr"], JMD:[2, "$", "JA$"], JPY:[0, "\u00a5", "JP\u00a5"], KRW:[0, "\u20a9", "KR\u20a9"], LKR:[2, "Rs", "SLRs"], MNT:[0, "\u20ae", "MN\u20ae"], MXN:[2, "$", "Mex$"], MYR:[2, "RM", "RM"], NOK:[18, "kr", "NOkr"], PAB:[2, "B/.", "B/."], PEN:[2, "S/.", "S/."], PHP:[2, "\u20b1", "Php"], PKR:[0, "Rs", "PKRs."], RUB:[2, "Rup", "Rup"], SAR:[2, "Rial", "Rial"], SEK:[2, "kr", "kr"], SGD:[2, "$", "S$"], THB:[2, "\u0e3f", "THB"], TRY:[2, "TL", "YTL"], TWD:[2, "NT$", "NT$"], USD:[2, "$", "US$"], 
UYU:[2, "$", "UY$"], VND:[0, "\u20ab", "VN\u20ab"], YER:[0, "Rial", "Rial"], ZAR:[2, "R", "ZAR"]};
function Eu(a, b, c) {
  this.Ju = b || Bu.IP;
  this.ZQ = c || Fu;
  this.oz = 40;
  this.uj = 1;
  this.OF = 3;
  this.tz = this.Xu = 0;
  this.oP = m;
  this.nv = this.Vp = "";
  this.Mn = "-";
  this.us = "";
  this.Yu = 1;
  this.sE = 3;
  this.hB = this.zK = m;
  "number" == typeof a ? this.Vq(a) : this.Pi(a)
}
var Fu = 0;
Eu.prototype.Pi = function(a) {
  a.replace(/ /g, "\u00a0");
  var b = [0];
  this.Vp = Gu(this, a, b);
  for(var c = b[0], e = -1, f = 0, h = 0, j = 0, l = -1, n = a.length, o = i;b[0] < n && o;b[0]++) {
    switch(a.charAt(b[0])) {
      case "#":
        0 < h ? j++ : f++;
        0 <= l && 0 > e && l++;
        break;
      case "0":
        0 < j && d(Error('Unexpected "0" in pattern "' + a + '"'));
        h++;
        0 <= l && 0 > e && l++;
        break;
      case ",":
        l = 0;
        break;
      case ".":
        0 <= e && d(Error('Multiple decimal separators in pattern "' + a + '"'));
        e = f + h + j;
        break;
      case "E":
        this.hB && d(Error('Multiple exponential symbols in pattern "' + a + '"'));
        this.hB = i;
        this.tz = 0;
        b[0] + 1 < n && "+" == a.charAt(b[0] + 1) && (b[0]++, this.oP = i);
        for(;b[0] + 1 < n && "0" == a.charAt(b[0] + 1);) {
          b[0]++, this.tz++
        }
        (1 > f + h || 1 > this.tz) && d(Error('Malformed exponential pattern "' + a + '"'));
        o = m;
        break;
      default:
        b[0]--, o = m
    }
  }
  0 == h && 0 < f && 0 <= e && (h = e, 0 == h && h++, j = f - h, f = h - 1, h = 1);
  (0 > e && 0 < j || 0 <= e && (e < f || e > f + h) || 0 == l) && d(Error('Malformed pattern "' + a + '"'));
  j = f + h + j;
  this.OF = 0 <= e ? j - e : 0;
  0 <= e && (this.Xu = f + h - e, 0 > this.Xu && (this.Xu = 0));
  this.uj = (0 <= e ? e : j) - f;
  this.hB && (this.oz = f + this.uj, 0 == this.OF && 0 == this.uj && (this.uj = 1));
  this.sE = Math.max(0, l);
  this.zK = 0 == e || e == j;
  c = b[0] - c;
  this.nv = Gu(this, a, b);
  b[0] < a.length && a.charAt(b[0]) == Hu ? (b[0]++, this.Mn = Gu(this, a, b), b[0] += c, this.us = Gu(this, a, b)) : (this.Mn = this.Vp + this.Mn, this.us += this.nv)
};
Eu.prototype.Vq = function(a) {
  switch(a) {
    case 1:
      this.Pi(Bu.HP);
      break;
    case 2:
      this.Pi(Bu.cQ);
      break;
    case 3:
      this.Pi(Bu.ZP);
      break;
    case 4:
      this.Pi(Cu(this.Ju));
      break;
    default:
      d(Error("Unsupported pattern type."))
  }
};
Eu.prototype.parse = function(a, b) {
  var c = b || [0], e = NaN, a = a.replace(/ /g, "\u00a0"), f = a.indexOf(this.Vp, c[0]) == c[0], h = a.indexOf(this.Mn, c[0]) == c[0];
  f && h && (this.Vp.length > this.Mn.length ? h = m : this.Vp.length < this.Mn.length && (f = m));
  f ? c[0] += this.Vp.length : h && (c[0] += this.Mn.length);
  if(a.indexOf(Bu.DB, c[0]) == c[0]) {
    c[0] += Bu.DB.length, e = Infinity
  }else {
    for(var e = a, j = m, l = m, n = m, o = 1, u = Bu.BI, t = Bu.II, v = Bu.FI, y = "";c[0] < e.length;c[0]++) {
      var J = e.charAt(c[0]), M = Iu(J);
      if(0 <= M && 9 >= M) {
        y += M, n = i
      }else {
        if(J == u.charAt(0)) {
          if(j || l) {
            break
          }
          y += ".";
          j = i
        }else {
          if(J == t.charAt(0) && ("\u00a0" != t.charAt(0) || c[0] + 1 < e.length && 0 <= Iu(e.charAt(c[0] + 1)))) {
            if(j || l) {
              break
            }
          }else {
            if(J == v.charAt(0)) {
              if(l) {
                break
              }
              y += "E";
              l = i
            }else {
              if("+" == J || "-" == J) {
                y += J
              }else {
                if(J == Bu.MI.charAt(0)) {
                  if(1 != o) {
                    break
                  }
                  o = 100;
                  if(n) {
                    c[0]++;
                    break
                  }
                }else {
                  if(J == Bu.NI.charAt(0)) {
                    if(1 != o) {
                      break
                    }
                    o = 1E3;
                    if(n) {
                      c[0]++;
                      break
                    }
                  }else {
                    break
                  }
                }
              }
            }
          }
        }
      }
    }
    e = parseFloat(y) / o
  }
  if(f) {
    if(a.indexOf(this.nv, c[0]) != c[0]) {
      return NaN
    }
    c[0] += this.nv.length
  }else {
    if(h) {
      if(a.indexOf(this.us, c[0]) != c[0]) {
        return NaN
      }
      c[0] += this.us.length
    }
  }
  return h ? -e : e
};
Eu.prototype.$m = function(a) {
  if(isNaN(a)) {
    return Bu.TP
  }
  var b = [], c = 0 > a || 0 == a && 0 > 1 / a;
  b.push(c ? this.Mn : this.Vp);
  if(isFinite(a)) {
    if(a = a * (c ? -1 : 1) * this.Yu, this.hB) {
      if(0 == a) {
        Ju(this, a, this.uj, b), Ku(this, 0, b)
      }else {
        var e = Math.floor(Math.log(a) / Math.log(10)), a = a / Math.pow(10, e), f = this.uj;
        if(1 < this.oz && this.oz > this.uj) {
          for(;0 != e % this.oz;) {
            a *= 10, e--
          }
          f = 1
        }else {
          1 > this.uj ? (e++, a /= 10) : (e -= this.uj - 1, a *= Math.pow(10, this.uj - 1))
        }
        Ju(this, a, f, b);
        Ku(this, e, b)
      }
    }else {
      Ju(this, a, this.uj, b)
    }
  }else {
    b.push(Bu.DB)
  }
  b.push(c ? this.us : this.nv);
  return b.join("")
};
function Ju(a, b, c, e) {
  for(var f = Math.pow(10, a.OF), b = Math.round(b * f), h = Math.floor(b / f), j = Math.floor(b - h * f), l = 0 < a.Xu || 0 < j, n = "", b = h;1.0E20 < b;) {
    n = "0" + n, b = Math.round(b / 10)
  }
  var n = b + n, o = Bu.BI, u = Bu.II, b = Bu.ot.charCodeAt(0), t = n.length;
  if(0 < h || 0 < c) {
    for(h = t;h < c;h++) {
      e.push(Bu.ot)
    }
    for(h = 0;h < t;h++) {
      e.push(String.fromCharCode(b + 1 * n.charAt(h))), 1 < t - h && 0 < a.sE && 1 == (t - h) % a.sE && e.push(u)
    }
  }else {
    l || e.push(Bu.ot)
  }
  (a.zK || l) && e.push(o);
  c = "" + (j + f);
  for(f = c.length;"0" == c.charAt(f - 1) && f > a.Xu + 1;) {
    f--
  }
  for(h = 1;h < f;h++) {
    e.push(String.fromCharCode(b + 1 * c.charAt(h)))
  }
}
function Ku(a, b, c) {
  c.push(Bu.FI);
  0 > b ? (b = -b, c.push(Bu.SP)) : a.oP && c.push(Bu.$P);
  for(var b = "" + b, e = b.length;e < a.tz;e++) {
    c.push(Bu.ot)
  }
  c.push(b)
}
function Iu(a) {
  a = a.charCodeAt(0);
  if(48 <= a && 58 > a) {
    return a - 48
  }
  var b = Bu.ot.charCodeAt(0);
  return b <= a && a < b + 10 ? a - b : -1
}
var Hu = ";";
function Gu(a, b, c) {
  for(var e = "", f = m, h = b.length;c[0] < h;c[0]++) {
    var j = b.charAt(c[0]);
    if("'" == j) {
      c[0] + 1 < h && "'" == b.charAt(c[0] + 1) ? (c[0]++, e += "'") : f = !f
    }else {
      if(f) {
        e += j
      }else {
        switch(j) {
          case "#":
          ;
          case "0":
          ;
          case ",":
          ;
          case ".":
          ;
          case Hu:
            return e;
          case "\u00a4":
            if(c[0] + 1 < h && "\u00a4" == b.charAt(c[0] + 1)) {
              c[0]++, e += a.Ju
            }else {
              switch(a.ZQ) {
                case Fu:
                  e += Du[a.Ju][1];
                  break;
                case 2:
                  var j = a.Ju, l = Du[j], e = e + (j == l[1] ? j : j + " " + l[1]);
                  break;
                case 1:
                  e += Du[a.Ju][2]
              }
            }
            break;
          case "%":
            1 != a.Yu && d(Error("Too many percent/permill"));
            a.Yu = 100;
            e += Bu.MI;
            break;
          case "\u2030":
            1 != a.Yu && d(Error("Too many percent/permill"));
            a.Yu = 1E3;
            e += Bu.NI;
            break;
          default:
            e += j
        }
      }
    }
  }
  return e
}
;B("TRWebchart_Shared.TRWebChartLibVersion", "3.73_2013_d2");
B("TRWebchart_Bus.AxisType.DateTime", 0);
B("TRWebchart_Bus.AxisType.Numeric", 1);
B("TRWebchart_Bus.AxisType.Customized", 2);
function Lu(a, b, c, e, f, h) {
  this.fr = a;
  this.canvas = k;
  this.fr && this.Tf();
  this.Id = this.OJ = k;
  this.yl = b;
  this.Nu = m;
  this.Tn = c;
  this.Vv = e;
  this.yA = f;
  this.YM = h;
  this.et = new Ek
}
Lu.prototype.Tf = function() {
  this.fr.innerHTML = "";
  var a = this.et.YQ(), b = 1, c = 1;
  isNaN(b) && (b = 1);
  isNaN(c) && (c = 1);
  var e = a.getContext("2d"), f = (window.devicePixelRatio || 1) / (e.webkitBackingStorePixelRatio || e.mozBackingStorePixelRatio || e.msBackingStorePixelRatio || e.oBackingStorePixelRatio || e.backingStorePixelRatio || 1);
  a.style.width = b + "px";
  a.style.height = c + "px";
  a.width = b * f;
  a.height = c * f;
  1 !== f && e.scale(f, f);
  this.canvas = this.fr.appendChild(a)
};
function Mu(a, b, c, e, f, h) {
  Lu.call(this, a, b, 0, e, f, h);
  this.location = 1;
  this.Xl = c;
  this.et = new Ek;
  this.Vv = c && this.YM ? i : e
}
Mu.prototype = new Lu(k, k, 0, m, m, k);
Mu.prototype.UD = function(a) {
  var b;
  b = !a || !a.Kt ? m : (b = a.Kt.MessageId) && -1 < b.indexOf("Fundamental");
  if(!b && (b = !a || !a.Kt ? m : (b = a.Kt.MessageId) && -1 < b.indexOf("Economic"), !b && !(b = a && a.wI && 0 < a.wI.length && "Volume" === a.wI[0] ? i : m))) {
    b = !a || !a.Kt ? m : (b = a.Kt.MessageId) && -1 < b.indexOf("AnalysisType:") ? i : m
  }
  return b ? a.wI[0] : "Close"
};
function Nu(a) {
  Lu.call(this, a.QC, a.yl, a.Tn, a.Vv, a.yA, a.YM);
  this.Xl = a.Xl;
  this.CT = a.CT
}
Nu.prototype = new Lu(k, k, 0, m, m, k);
function Ou() {
  new Ck(Dk.get("en").yB);
  new Ck(Dk.get("en").KB)
}
;new Ou;
new Ou;
new Ou;
new Ou;
new Ou;
new Ou;
new Ou;
new Ou;
new Ou;
new Ou;
new Ou;
new Ou;
new Ou;
new Ou;
new Ou;
new Ou;
function Pu(a) {
  a = a || {};
  this.Nu = m;
  a.Nu && (this.Nu = a.Nu);
  this.DK = !!a.DK;
  this.BT = !!a.BT;
  this.Ep = a.Ep === g ? m : a.Ep;
  this.Bt = a.Bt ? a.Bt : 0;
  this.Vw = a.CY - this.Bt;
  this.VF = 100;
  this.nh = 50;
  this.Zo = [];
  this.Nt = {};
  this.scale = this.kv = this.IA = k;
  this.Mt = new zu;
  this.et = new Ek;
  this.interval = a.interval;
  this.ep = a.ep === g ? m : a.ep;
  a.dR && this.Tf(a.dR)
}
Pu.prototype.Tf = function(a) {
  var b = "", c = a.length, e, f = [];
  if(this.ep) {
    for(var h = new Date, b = new Date, j = 0;j < c;++j) {
      e = a[j][0], f = a[j][a[j].length - 1], h = e < h ? e : h, b = f > b ? f : b
    }
    c = h;
    a = [];
    a.push(c);
    for(c = this.TN(c);c < b;) {
      c.setDate(c.getDate() + 1), a.push(this.TN(c))
    }
    for(h = 0;h < a.length;h++) {
      b = Qu(this, a[h]), this.Zo[h] = a[h], this.Nt[b] = h
    }
  }else {
    for(var l = 0;l < c;l++) {
      e = a[l].length;
      for(h = 0;h < e;h++) {
        var n = a[l][h], b = Qu(this, n);
        f.push([b, n])
      }
    }
    f.sort(this.uW);
    c = f.length;
    for(l = 0;l < c;l++) {
      this.Nt[f[l][0]] = f[l][1]
    }
    for(j in this.Nt) {
      a = this.Zo.length, this.Zo[a] = this.Nt[j], this.Nt[j] = a
    }
  }
  if(this.Ep === i) {
    this.Mt = new zu;
    for(a = 0;a < this.Zo.length;++a) {
      c = this.Zo[a].getDate(), b = this.Zo[a].getMonth(), c = (10 > b ? "0" : "") + b + "-" + (10 > c ? "0" : "") + c, this.Mt.setItem(c, a)
    }
    this.IA = this.Mt.keys();
    this.IA.sort();
    for(a = 0;a < this.IA.length;a++) {
      this.Mt.setItem(this.IA[a], a)
    }
    a = this.Mt.keys().length
  }else {
    a = this.Zo.length
  }
  this.nh = 50 * a / 300;
  50 < this.nh && (this.nh = 50);
  1 > this.nh && (this.nh = 1);
  this.kv = (a - (this.DK ? 1 : 0)) * this.VF + this.nh;
  this.scale = this.Vw / this.kv;
  0 >= this.scale && (this.scale = 1)
};
Pu.prototype.Ha = q("Vw");
Pu.prototype.TN = function(a) {
  return new Date(a.valueOf())
};
function Qu(a, b) {
  var c = b.getFullYear(), e = b.getMonth(), f = b.getDate(), c = 1E4 * c + 100 * e + f;
  a.Nu && (c = 1E4 * c + 100 * b.getHours() + b.getMinutes());
  return"" + c
}
Pu.prototype.uW = function(a, b) {
  return a[0] < b[0] ? -1 : b[0] < a[0] ? 1 : 0
};
new Pu(k);
new Pu(k);
function Ru(a) {
  a = a || {};
  Lu.call(this, a.QC, a.yl, a.Tn, m, m, k);
  this.Xl = a.Xl;
  this.gD = a.gD;
  this.et = new Ek;
  this.Ep = a.Ep;
  this.interval = 0;
  this.ep = a.ep
}
Ru.prototype = new Lu(k, k, 0, m, m, k);
function Su(a, b, c) {
  this.Bt = c ? c : 0;
  this.Vw = b - this.Bt;
  this.VF = 100;
  this.nh = 50;
  this.zM = a;
  this.scale = this.kv = k;
  this.et = new Ek;
  a && this.Tf()
}
Su.prototype.Tf = function() {
  this.nh = 50 * this.zM.length / 300;
  50 < this.nh && (this.nh = 50);
  1 > this.nh && (this.nh = 1);
  this.kv = this.zM.length * this.VF + this.nh;
  this.scale = this.Vw / this.kv;
  0 >= this.scale && (this.scale = 1)
};
new Su([], 0, 0);
function Tu(a, b) {
  Lu.call(this, a, k, b, m, m, k);
  this.Tn = b
}
Tu.prototype = new Lu(k, k, 0, m, m, k);
function Uu(a, b) {
  Lu.call(this, a, b, 0, i, m, k)
}
Uu.prototype = new Lu(k, k, 0, i, m, k);
function Vu(a, b, c) {
  this.Id = b;
  this.Sp = a;
  this.Xj = k;
  this.xP = this.GM = this.zJ = this.NJ = this.MJ = this.KJ = this.Kq = this.LJ = "";
  this.borderColor = "#B4B4B4";
  this.rB = [];
  this.AT = c;
  this.Sp && this.Tf()
}
Vu.prototype.Tf = function() {
  this.borderColor = this.Id.wB.EP.Rj;
  this.Xj = this.RD();
  this.LJ = "holder_" + this.Xj;
  this.KJ = "chartBody_" + this.Xj;
  this.Kq = "xAxis_" + this.Xj;
  this.zJ = "bottomSpaceFiller_" + this.Xj;
  this.GM = "leftSpaceFiller_" + this.Xj;
  this.MJ = "legend_" + this.Xj;
  this.NJ = "title_" + this.Xj;
  this.xP = "xAxisTitle_" + this.Xj;
  var a = this.Sp.clientHeight, b = this.Sp.clientWidth, c = "", e = "solid", f = this.Id.wB.xB, h = this.Id.Gm, j = h.BY;
  1 == this.Id.wB.EP.lX && (e = "dotted");
  c = '<div id="' + this.LJ + '"  style="background-color:' + this.Id.wB.uX + ";-webkit-user-select:none;position:relative;visibility:hidden;padding:0px;margin:0px;font-size:1px;width:" + b + "px;height:" + a + 'px;overflow:hidden;" >';
  c += '<div id="' + this.NJ + '" style="vertical-align:middle;overflow:hidden;position:absolute;border-bottom:1px solid ' + f.Rj + ";background-color:" + f.xY + ';z-index:15;"></div>';
  c += '<div id="' + this.MJ + '" style="background-color:transparent;overflow:hidden;position:absolute;border:1px ' + e + " " + this.borderColor + ';border-bottom:0px;"></div>';
  c += '<div id="' + this.KJ + '" style="overflow:hidden;position:absolute;border:1px ' + e + " " + this.borderColor + ';"></div>';
  c += '<div id="' + this.GM + '" style="overflow:hidden;position:absolute;border-right:1px solid ' + this.Id.$I.Rj + ';"></div>';
  c += '<div id="' + this.xP + '" style="vertical-align:middle;text-align:center;overflow:hidden;position:absolute;font-weight:' + j.MX + ";font-size:" + j.LX + ";font-family:" + j.KX + ";color:" + j.Gh + ";border-left:1px solid " + h.Rj + ";border-right:1px solid" + h.Rj + ';z-index:15;"></div>';
  b = a = "";
  for(e = 0;4 > e;e++) {
    this.rB[e] = "yAxis" + e + "_" + this.Xj;
    b = "border:0px;";
    if(2 == e || 0 === e) {
      b = "border-top:1px solid transparent;border-left:1px solid " + this.Id.$I.Rj + ";"
    }else {
      if(3 == e || 1 == e) {
        b = "border-top:1px solid transparent;border-right:1px solid " + this.Id.$I.Rj + ";"
      }
    }
    a += '<div id="' + this.rB[e] + '" style="overflow:hidden;position:absolute;' + b + '" ></div>'
  }
  c = c + a + ('<div id="' + this.zJ + '" style="overflow:hidden;position:absolute;background:-webkit-gradient(linear, left top, left bottom, from(' + this.Id.OP.QP.LP + "), color-stop(0.1, " + this.Id.Gm.vB + "), to(" + this.Id.Gm.vB + "));border-top:1px solid " + this.Id.Gm.Rj + ';"></div>');
  c = this.AT ? c + ('<div id="' + this.Kq + '" style="overflow:hidden;position:absolute;background:transparent;z-index:99;"></div>') : c + ('<div id="' + this.Kq + '" style="overflow:hidden;position:absolute;background:-webkit-gradient(linear, left top, left bottom, from(' + this.Id.OP.QP.LP + "), color-stop(0.1, " + this.Id.Gm.vB + "), to(" + this.Id.Gm.vB + "));border-top:1px solid " + this.Id.Gm.Rj + ";border-left:1px solid " + this.Id.Gm.Rj + ";border-right:1px solid " + this.Id.Gm.Rj + ';"></div>');
  this.Sp.innerHTML = c + "</div>"
};
Vu.prototype.RD = function() {
  return(new Ek).RD()
};
new Su([], 0, 0);
function Wu(a) {
  Lu.call(this, a, k, 0, m, m, k);
  this.location = 0
}
Wu.prototype = new Lu(k, k, 0, m, m, k);
function Xu(a, b) {
  this.Sp = a;
  this.yl = this.dO = k;
  this.DT = [];
  this.Id = b;
  this.Ts = k;
  this.Sp && (this.Ts = new Vu(this.Sp, this.Id, m));
  this.yP = 0;
  this.zP = 1;
  this.et = new Ek
}
Xu.prototype.Tf = function() {
  20 !== this.dO[0].OJ && 0 == this.zP && d("Y Axis cannot use date time type. ");
  var a;
  9 === this.dO[0].OJ ? new Uu(document.getElementById(this.Ts.Kq), this.yl) : 2 === this.yP ? new Tu(document.getElementById(this.Ts.Kq), this.Tn) : 1 === this.yP ? (a = {QC:document.getElementById(this.Ts.Kq), yl:this.yl, Xl:this.Xl, Tn:this.Tn, Vv:this.Vv, yA:this.yA}, new Nu(a)) : (a = {QC:document.getElementById(this.Ts.Kq), yl:this.yl, Xl:this.Xl, Tn:this.Tn, gD:this.gD, Ep:this.Ep, ep:this.ep}, new Ru(a));
  for(a = 0;4 > a;a++) {
    var b;
    b = this.Ts;
    (0 > a || a >= b.rB.length) && d("Index passing in is out of bound");
    b = document.getElementById(b.rB[a]);
    this.DT[a] = 2 === this.zP ? new Wu(b) : new Mu(b, this.yl, this.Xl, this.Vv, this.yA, k)
  }
};
new Ru(k);
new Xu(k, k);
function Yu(a, b, c) {
  mf.call(this, c);
  this.Di = b || Xi;
  this.vP = this.Di.QB;
  this.W = new uh(a);
  this.W.Ar = this.Di.HI;
  this.W.El = this.Di.GI;
  this.vd = this.W.clone();
  this.vd.setDate(1);
  this.mB = ",,,,,,".split(",");
  this.mB[this.Di.ZI[0]] = this.Ab() + "-wkend-start";
  this.mB[this.Di.ZI[1]] = this.Ab() + "-wkend-end";
  this.hs = {}
}
C(Yu, mf);
s = Yu.prototype;
s.CO = i;
s.FO = i;
s.qR = i;
s.FA = i;
s.KH = i;
s.Qw = i;
s.JH = i;
s.JO = m;
s.AK = k;
s.ur = k;
s.rD = k;
var Zu = 0;
s = Yu.prototype;
s.Ab = r("goog-date-picker");
function $u(a) {
  Cd(a.uD, a.JH);
  Cd(a.tD, a.Qw);
  Cd(a.VO, a.JH || a.Qw)
}
s.FG = function() {
  this.vd.add(new Zi(aj, -1));
  av(this)
};
s.wz = function() {
  this.vd.add(new Zi(aj, 1));
  av(this)
};
s.kV = function() {
  this.vd.add(new Zi($i, -1));
  av(this)
};
s.RT = function() {
  this.vd.add(new Zi($i, 1));
  av(this)
};
s.dH = function() {
  this.setDate(new uh)
};
s.cH = function() {
  this.Qw && this.setDate(k)
};
s.getDate = function() {
  return this.W && this.W.clone()
};
s.setDate = function(a) {
  var b = a != this.W && !(a && this.W && a.getFullYear() == this.W.getFullYear() && a.getMonth() == this.W.getMonth() && a.getDate() == this.W.getDate());
  this.W = a && new uh(a);
  a && (this.vd.set(this.W), this.vd.setDate(1));
  av(this);
  this.dispatchEvent(new bv("select", this, this.W));
  b && this.dispatchEvent(new bv("change", this, this.W))
};
s.eB = function() {
  if(this.ur) {
    for(var a = this.ur;a.firstChild;) {
      a.removeChild(a.firstChild)
    }
    var b, c;
    if(this.JO) {
      b = this.qa.createElement("td"), b.colSpan = this.FA ? 1 : 2, cv(this, b, "\u00ab", this.FG), a.appendChild(b), b = this.qa.createElement("td"), b.colSpan = this.FA ? 6 : 5, b.className = this.Ab() + "-monthyear", a.appendChild(b), this.sD = b, b = this.qa.createElement("td"), cv(this, b, "\u00bb", this.wz), a.appendChild(b)
    }else {
      var e = this.Di.Tj[0].toLowerCase();
      b = this.qa.createElement("td");
      b.colSpan = 5;
      cv(this, b, "\u00ab", this.FG);
      this.Tm = cv(this, b, "", this.HH, this.Ab() + "-month");
      cv(this, b, "\u00bb", this.wz);
      c = this.qa.createElement("td");
      c.colSpan = 3;
      cv(this, c, "\u00ab", this.kV);
      this.Um = cv(this, c, "", this.GA, this.Ab() + "-year");
      cv(this, c, "\u00bb", this.RT);
      e.indexOf("y") < e.indexOf("m") ? (a.appendChild(c), a.appendChild(b)) : (a.appendChild(b), a.appendChild(c))
    }
  }
};
s.l = function(a) {
  Yu.e.l.call(this, a);
  a.className = this.Ab();
  var b = this.qa.createElement("table"), c = this.qa.createElement("thead"), e = this.qa.createElement("tbody"), f = this.qa.createElement("tfoot");
  wf(e, "grid");
  e.tabIndex = "0";
  this.QA = e;
  this.VO = f;
  var h = this.qa.createElement("tr");
  h.className = this.Ab() + "-head";
  this.ur = h;
  this.eB();
  c.appendChild(h);
  var j;
  this.$i = [];
  for(var l = 0;7 > l;l++) {
    h = this.qa.createElement("tr");
    this.$i[l] = [];
    for(var n = 0;8 > n;n++) {
      j = this.qa.createElement(0 == n || 0 == l ? "th" : "td");
      if((0 == n || 0 == l) && n != l) {
        j.className = 0 == n ? this.Ab() + "-week" : this.Ab() + "-wday", wf(j, 0 == n ? "rowheader" : "columnheader")
      }
      h.appendChild(j);
      this.$i[l][n] = j
    }
    e.appendChild(h)
  }
  h = this.qa.createElement("tr");
  h.className = this.Ab() + "-foot";
  j = this.rD = h;
  Hc(j);
  l = this.qa.createElement("td");
  l.colSpan = 2;
  l.className = this.Ab() + "-today-cont";
  this.uD = cv(this, l, "Today", this.dH);
  j.appendChild(l);
  l = this.qa.createElement("td");
  l.colSpan = 4;
  j.appendChild(l);
  l = this.qa.createElement("td");
  l.colSpan = 2;
  l.className = this.Ab() + "-none-cont";
  this.tD = cv(this, l, "None", this.cH);
  j.appendChild(l);
  $u(this);
  f.appendChild(h);
  b.cellSpacing = "0";
  b.cellPadding = "0";
  b.appendChild(c);
  b.appendChild(e);
  b.appendChild(f);
  a.appendChild(b);
  dv(this);
  av(this);
  a.tabIndex = 0
};
s.m = function() {
  Yu.e.m.call(this);
  this.l(this.b())
};
s.k = function() {
  Yu.e.k.call(this);
  var a = this.ma();
  a.i(this.QA, "click", this.YS);
  a.i(ev(this, this.b()), "key", this.zL)
};
s.nb = function() {
  Yu.e.nb.call(this);
  this.Pm();
  for(var a in this.hs) {
    this.hs[a].ba()
  }
  this.hs = {}
};
s.create = Yu.prototype.Ka;
s.n = function() {
  Yu.e.n.call(this);
  this.tD = this.uD = this.Um = this.sD = this.Tm = this.rD = this.ur = this.VO = this.QA = this.$i = k
};
s.YS = function(a) {
  if("TD" == a.target.tagName) {
    var b, c = -2, e = -2;
    for(b = a.target;b;b = b.previousSibling, c++) {
    }
    for(b = a.target.parentNode;b;b = b.previousSibling, e++) {
    }
    this.setDate(this.ok[e][c].clone())
  }
};
s.zL = function(a) {
  var b, c;
  switch(a.keyCode) {
    case 33:
      a.preventDefault();
      b = -1;
      break;
    case 34:
      a.preventDefault();
      b = 1;
      break;
    case 37:
      a.preventDefault();
      c = -1;
      break;
    case 39:
      a.preventDefault();
      c = 1;
      break;
    case 38:
      a.preventDefault();
      c = -7;
      break;
    case 40:
      a.preventDefault();
      c = 7;
      break;
    case 36:
      a.preventDefault(), this.dH();
    case 46:
      a.preventDefault(), this.cH();
    default:
      return
  }
  this.W ? (a = this.W.clone(), a.add(new Zi(0, b, c))) : (a = this.vd.clone(), a.setDate(1));
  this.setDate(a)
};
s.HH = function(a) {
  a.stopPropagation();
  for(var a = [], b = 0;12 > b;b++) {
    a.push(this.Di.Mq[b])
  }
  this.Dx(this.Tm, a, this.eT, this.Di.Mq[this.vd.getMonth()])
};
s.GA = function(a) {
  a.stopPropagation();
  for(var a = [], b = this.vd.getFullYear() - 5, c = 0;11 > c;c++) {
    a.push("" + (b + c))
  }
  this.Dx(this.Um, a, this.FL, "" + this.vd.getFullYear())
};
s.eT = function(a) {
  for(var b = -1;a;a = a.previousElementSibling != g ? a.previousElementSibling : Nc(a.previousSibling, m), b++) {
  }
  this.vd.setMonth(b);
  av(this);
  this.Tm.focus && this.Tm.focus()
};
s.FL = function(a) {
  3 == a.firstChild.nodeType && (this.vd.setFullYear(Number(a.firstChild.nodeValue)), av(this));
  this.Um.focus()
};
s.Dx = function(a, b, c, e) {
  this.Pm();
  var f = this.qa.createElement("div");
  f.className = this.Ab() + "-menu";
  this.tj = k;
  for(var h = this.qa.createElement("ul"), j = 0;j < b.length;j++) {
    var l = this.qa.m("li", k, b[j]);
    b[j] == e && (this.tj = l);
    h.appendChild(l)
  }
  f.appendChild(h);
  f.style.left = a.offsetLeft + a.parentNode.offsetLeft + "px";
  f.style.top = a.offsetTop + "px";
  f.style.width = a.clientWidth + "px";
  this.Tm.parentNode.appendChild(f);
  this.C = f;
  this.tj || (this.tj = h.firstChild);
  this.tj.className = this.Ab() + "-menu-selected";
  this.qz = c;
  a = this.ma();
  a.i(this.C, "click", this.yE);
  a.i(ev(this, this.C), "key", this.zE);
  a.i(this.qa.Lb, "click", this.Pm);
  f.tabIndex = 0;
  f.focus()
};
s.yE = function(a) {
  a.stopPropagation();
  this.Pm();
  this.qz && this.qz(a.target)
};
s.zE = function(a) {
  a.stopPropagation();
  var b, c = this.tj;
  switch(a.keyCode) {
    case 35:
      a.preventDefault();
      b = c.parentNode.lastChild;
      break;
    case 36:
      a.preventDefault();
      b = c.parentNode.firstChild;
      break;
    case 38:
      a.preventDefault();
      b = c.previousSibling;
      break;
    case 40:
      a.preventDefault();
      b = c.nextSibling;
      break;
    case 13:
    ;
    case 9:
    ;
    case 0:
      a.preventDefault(), this.Pm(), this.qz(c)
  }
  b && b != c && (c.className = "", b.className = this.Ab() + "-menu-selected", this.tj = b)
};
s.Pm = function() {
  if(this.C) {
    var a = this.ma();
    a.H(this.C, "click", this.yE);
    a.H(ev(this, this.C), "key", this.zE);
    a.H(this.qa.Lb, "click", this.Pm);
    Kc(this.C);
    delete this.C
  }
};
function cv(a, b, c, e, f) {
  var h = [a.Ab() + "-btn"];
  f && h.push(f);
  f = a.qa.createElement("button");
  f.className = h.join(" ");
  f.appendChild(a.qa.createTextNode(c));
  b.appendChild(f);
  a.ma().i(f, "click", function(a) {
    a.preventDefault();
    e.call(this, a)
  });
  return f
}
function av(a) {
  if(a.b()) {
    var b = a.vd.clone();
    b.setDate(1);
    a.sD && Pc(a.sD, a.Di.Mq[b.getMonth()] + (" " + b.getFullYear()));
    a.Tm && Pc(a.Tm, a.Di.Mq[b.getMonth()]);
    a.Um && Pc(a.Um, "" + b.getFullYear());
    var c = ((b.getDay() + 6) % 7 - b.El + 7) % 7, e = Yi(b.getFullYear(), b.getMonth());
    b.add(new Zi(aj, -1));
    b.setDate(Yi(b.getFullYear(), b.getMonth()) - (c - 1));
    a.CO && !a.qR && 33 > e + c && b.add(new Zi(bj, -7));
    c = new Zi(bj, 1);
    a.ok = [];
    for(e = 0;6 > e;e++) {
      a.ok[e] = [];
      for(var f = 0;7 > f;f++) {
        a.ok[e][f] = b.clone(), b.add(c)
      }
    }
    fv(a)
  }
}
function fv(a) {
  if(a.b()) {
    for(var b = a.vd.getMonth(), c = new uh, e = c.getFullYear(), f = c.getMonth(), c = c.getDate(), h = 0;6 > h;h++) {
      if(a.FA) {
        var j = a.$i[h + 1][0], l;
        l = a.ok[h][0].getDate();
        l = new Date(a.ok[h][0].getFullYear(), a.ok[h][0].getMonth(), l);
        var n = a.ok[h][0].El || 0;
        l = l.valueOf() + 864E5 * (((a.ok[h][0].Ar || 3) - n + 7) % 7 - ((l.getDay() + 6) % 7 - n + 7) % 7);
        l = Math.floor(Math.round((l - (new Date((new Date(l)).getFullYear(), 0, 1)).valueOf()) / 864E5) / 7) + 1;
        Pc(j, l);
        a.$i[h + 1][0].className = a.Ab() + "-week"
      }else {
        Pc(a.$i[h + 1][0], ""), a.$i[h + 1][0].className = ""
      }
      for(j = 0;7 > j;j++) {
        l = a.ok[h][j];
        n = a.$i[h + 1][j + 1];
        n.id || (n.id = "goog-dp-" + Zu++);
        wf(n, "gridcell");
        var o = [a.Ab() + "-date"];
        if(a.FO || l.getMonth() == b) {
          l.getMonth() != b && o.push(a.Ab() + "-other-month");
          var u = (j + a.vd.El + 7) % 7;
          a.mB[u] && o.push(a.mB[u]);
          l.getDate() == c && l.getMonth() == f && l.getFullYear() == e && o.push(a.Ab() + "-today");
          a.W && l.getDate() == a.W.getDate() && l.getMonth() == a.W.getMonth() && l.getFullYear() == a.W.getFullYear() && (o.push(a.Ab() + "-selected"), xf(a.QA, "activedescendant", n.id));
          a.AK && (u = a.AK(l)) && o.push(u);
          Pc(n, l.getDate())
        }else {
          Pc(n, "")
        }
        n.className = o.join(" ")
      }
      4 <= h && Cd(a.$i[h + 1][0].parentNode, a.ok[h][0].getMonth() == b || a.CO)
    }
  }
}
function dv(a) {
  if(a.b()) {
    if(a.KH) {
      for(var b = 0;7 > b;b++) {
        Pc(a.$i[0][b + 1], a.vP[((b + a.vd.El + 7) % 7 + 1) % 7])
      }
    }
    Cd(a.$i[0][0].parentNode, a.KH)
  }
}
function ev(a, b) {
  var c = pa(b);
  c in a.hs || (a.hs[c] = new eg(b));
  return a.hs[c]
}
function bv(a, b, c) {
  Ee.call(this, a, b);
  this.yK = c
}
C(bv, Ee);
function gv(a, b) {
  this.fV = 4;
  this.EG = b || g;
  Zf.call(this, a)
}
C(gv, Zf);
gv.prototype.uH = function(a) {
  this.EG = a || g;
  this.w() && this.Jb()
};
gv.prototype.Jb = function() {
  if(this.EG) {
    var a = !this.w() && "move_offscreen" != this.wg(), b = this.b();
    a && (b.style.visibility = "hidden", Cd(b, i));
    this.EG.Jb(b, this.fV, this.OM);
    a && Cd(b, m)
  }
};
function hv(a) {
  pl.call(this, a);
  a.hasOwnProperty("allowCalendarAutoFocus") && (this.jC = a.allowCalendarAutoFocus);
  a.hasOwnProperty("error") && (this.error = a.error);
  a.hasOwnProperty("freeformEditing") && (this.QD = a.freeformEditing);
  a.hasOwnProperty("isEmpty") && (this.di = a.isEmpty);
  a.hasOwnProperty("isUninitialized") && (this.ec = a.isUninitialized);
  a.hasOwnProperty("renderCalendarAsSibling") && (this.ON = a.renderCalendarAsSibling);
  a.hasOwnProperty("timestamp") && (this.timestamp = kj(a.timestamp));
  a.hasOwnProperty("uninitializedValue") && (this.Je = a.uninitializedValue)
}
C(hv, pl);
s = hv.prototype;
s.jC = i;
s.error = "";
s.QD = i;
s.di = m;
s.ec = m;
s.ON = i;
s.timestamp = k;
s.Je = "";
function iv(a, b, c, e) {
  gh.call(this, a, e);
  this.X = b;
  this.Ga = c
}
C(iv, gh);
iv.prototype.type = "etk_DateTime_changed";
iv.prototype.X = k;
iv.prototype.Jc = q("X");
iv.prototype.getPrevious = iv.prototype.Jc;
iv.prototype.Ga = k;
iv.prototype.qc = q("Ga");
iv.prototype.getCurrent = iv.prototype.qc;
function jv(a, b, c, e) {
  I.call(this, a, w(b) ? b : "Changed", c, e)
}
C(jv, I);
jv.prototype.X = k;
jv.prototype.i = function(a, b) {
  G(this.B, "etk_DateTime_changed", a, g, b)
};
jv.prototype.listen = jv.prototype.i;
jv.prototype.H = function(a, b) {
  Ve(this.B, "etk_DateTime_changed", a, g, b)
};
jv.prototype.unlisten = jv.prototype.H;
jv.prototype.la = function() {
  Ze(this.B, "etk_DateTime_changed")
};
jv.prototype.unlistenAll = jv.prototype.la;
jv.prototype.v = function(a, b) {
  var c = new iv(b, this.X, a, this.aa);
  this.X = a;
  Ah(this) && (this.B.dispatchEvent(c), this.md == i && wh.g().aA(this.aa.P(), this.Fc, a, this.Kc))
};
function kv(a) {
  this.ed = [];
  "number" == typeof a ? this.Vq(a) : this.Pi(a)
}
kv.prototype.Pi = function(a) {
  for(var b = m, c = "", e = 0;e < a.length;e++) {
    var f = a.charAt(e);
    if(" " == f) {
      0 < c.length && (this.ed.push({text:c, count:0, Oq:m}), c = "");
      for(this.ed.push({text:" ", count:0, Oq:m});e < a.length - 1 && " " == a.charAt(e + 1);) {
        e++
      }
    }else {
      if(b) {
        "'" == f ? e + 1 < a.length && "'" == a.charAt(e + 1) ? (c += "'", e++) : b = m : c += f
      }else {
        if(0 <= lv.indexOf(f)) {
          0 < c.length && (this.ed.push({text:c, count:0, Oq:m}), c = "");
          var h;
          h = a.charAt(e);
          for(var j = e + 1;j < a.length && a.charAt(j) == h;) {
            j++
          }
          h = j - e;
          this.ed.push({text:f, count:h, Oq:m});
          e += h - 1
        }else {
          "'" == f ? e + 1 < a.length && "'" == a.charAt(e + 1) ? (c += "'", e++) : b = i : c += f
        }
      }
    }
  }
  0 < c.length && this.ed.push({text:c, count:0, Oq:m});
  a = m;
  for(b = 0;b < this.ed.length;b++) {
    mv(this.ed[b]) ? !a && b + 1 < this.ed.length && mv(this.ed[b + 1]) && (a = i, this.ed[b].Oq = i) : a = m
  }
};
kv.prototype.Vq = function(a) {
  11 < a && (a = 10);
  this.Pi(4 > a ? Xi.Tj[a] : 8 > a ? Xi.Iw[a - 4] : Xi.Tj[a - 8] + " " + Xi.Iw[a - 8])
};
kv.prototype.parse = function(a, b, c) {
  return nv(this, a, b, c || 0, m)
};
function nv(a, b, c, e, f) {
  for(var h = new ov, j = [e], l = -1, n = 0, o = 0, u = 0;u < a.ed.length;u++) {
    if(0 < a.ed[u].count) {
      if(0 > l && a.ed[u].Oq && (l = u, n = e, o = 0), 0 <= l) {
        var t = a.ed[u].count;
        if(u == l && (t -= o, o++, 0 == t)) {
          return 0
        }
        pv(b, j, a.ed[u], t, h) || (u = l - 1, j[0] = n)
      }else {
        if(l = -1, !pv(b, j, a.ed[u], 0, h)) {
          return 0
        }
      }
    }else {
      l = -1;
      if(" " == a.ed[u].text.charAt(0)) {
        if(t = j[0], qv(b, j), j[0] > t) {
          continue
        }
      }else {
        if(b.indexOf(a.ed[u].text, j[0]) == j[0]) {
          j[0] += a.ed[u].text.length;
          continue
        }
      }
      return 0
    }
  }
  a: {
    if(h.KK != g && h.Em != g && 0 == h.KK && 0 < h.Em && (h.Em = -(h.Em - 1)), h.Em != g && c.setFullYear(h.Em), a = c.getDate(), c.setDate(1), h.rs != g && c.setMonth(h.rs), h.nr != g ? c.setDate(h.nr) : c.setDate(a), ma(c.setHours) && (h.Ad == g && (h.Ad = c.getHours()), h.lJ != g && 0 < h.lJ && 12 > h.Ad && (h.Ad += 12), c.setHours(h.Ad)), ma(c.setMinutes) && h.ze != g && c.setMinutes(h.ze), ma(c.setSeconds) && h.Ee != g && c.setSeconds(h.Ee), ma(c.setMilliseconds) && h.RF != g && c.setMilliseconds(h.RF), 
    f && (h.Em != g && h.Em != c.getFullYear() || h.rs != g && h.rs != c.getMonth() || h.nr != g && h.nr != c.getDate() || 24 <= h.Ad || 60 <= h.ze || 60 <= h.Ee || 1E3 <= h.RF)) {
      c = m
    }else {
      h.jI != g && c.setTime(c.getTime() + 6E4 * (h.jI - c.getTimezoneOffset()));
      h.DQ && (f = new Date, f.setFullYear(f.getFullYear() - 80), c.getTime() < f.getTime() && c.setFullYear(f.getFullYear() + 100));
      if(h.iD != g) {
        if(h.nr == g) {
          h = (7 + h.iD - c.getDay()) % 7, 3 < h && (h -= 7), f = c.getMonth(), c.setDate(c.getDate() + h), c.getMonth() != f && c.setDate(c.getDate() + (0 < h ? -7 : 7))
        }else {
          if(h.iD != c.getDay()) {
            c = m;
            break a
          }
        }
      }
      c = i
    }
  }
  return c ? j[0] - e : 0
}
var lv = "GyMdkHmsSEDahKzZvQ";
function mv(a) {
  if(0 >= a.count) {
    return m
  }
  var b = "MydhHmsSDkK".indexOf(a.text.charAt(0));
  return 0 < b || 0 == b && 3 > a.count
}
function qv(a, b) {
  var c = a.substring(b[0]).match(/^\s+/);
  c && (b[0] += c[0].length)
}
function pv(a, b, c, e, f) {
  qv(a, b);
  var h = b[0], j = c.text.charAt(0), l = -1;
  if(mv(c)) {
    if(0 < e) {
      if(h + e > a.length) {
        return m
      }
      l = rv(a.substring(0, h + e), b)
    }else {
      l = rv(a, b)
    }
  }
  switch(j) {
    case "G":
      return f.KK = sv(a, b, Xi.EI), i;
    case "M":
      a: {
        c = l;
        if(0 > c) {
          c = sv(a, b, Xi.Mq);
          0 > c && (c = sv(a, b, Xi.RI));
          if(0 > c) {
            f = m;
            break a
          }
          f.rs = c
        }else {
          f.rs = c - 1
        }
        f = i
      }
      return f;
    case "E":
      return c = sv(a, b, Xi.YI), 0 > c && (c = sv(a, b, Xi.QB)), 0 > c ? f = m : (f.iD = c, f = i), f;
    case "a":
      return f.lJ = sv(a, b, Xi.yI), i;
    case "y":
      a: {
        var n;
        if(0 > l) {
          n = a.charAt(b[0]);
          if("+" != n && "-" != n) {
            f = m;
            break a
          }
          b[0]++;
          l = rv(a, b);
          if(0 > l) {
            f = m;
            break a
          }
          "-" == n && (l = -l)
        }
        !n && 2 == b[0] - h && 2 == c.count ? (a = l, b = (new Date).getFullYear() - 80, c = b % 100, f.DQ = a == c, a += 100 * Math.floor(b / 100) + (a < c ? 100 : 0), f.Em = a) : f.Em = l;
        f = i
      }
      return f;
    case "Q":
      return 0 > l ? (c = sv(a, b, Xi.OI), 0 > c && (c = sv(a, b, Xi.SI)), 0 > c ? f = m : (f.rs = 3 * c, f.nr = 1, f = i)) : f = m, f;
    case "d":
      return f.nr = l, i;
    case "S":
      return a = b[0] - h, f.RF = 3 > a ? l * Math.pow(10, 3 - a) : Math.round(l / Math.pow(10, a - 3)), i;
    case "h":
      12 == l && (l = 0);
    case "K":
    ;
    case "H":
    ;
    case "k":
      return f.Ad = l, i;
    case "m":
      return f.ze = l, i;
    case "s":
      return f.Ee = l, i;
    case "z":
    ;
    case "Z":
    ;
    case "v":
      a.indexOf("GMT", b[0]) == b[0] && (b[0] += 3);
      a: {
        if(b[0] >= a.length) {
          f.jI = 0, f = i
        }else {
          c = 1;
          switch(a.charAt(b[0])) {
            case "-":
              c = -1;
            case "+":
              b[0]++
          }
          h = b[0];
          l = rv(a, b);
          if(0 == l && b[0] == h) {
            f = m
          }else {
            if(b[0] < a.length && ":" == a.charAt(b[0])) {
              n = 60 * l;
              b[0]++;
              h = b[0];
              l = rv(a, b);
              if(0 == l && b[0] == h) {
                f = m;
                break a
              }
              n += l
            }else {
              n = l, n = 24 > n && 2 >= b[0] - h ? 60 * n : n % 100 + 60 * (n / 100)
            }
            f.jI = -(n * c);
            f = i
          }
        }
      }
      return f;
    default:
      return m
  }
}
function rv(a, b) {
  var c = a.substring(b[0]).match(/^\d+/);
  if(!c) {
    return-1
  }
  b[0] += c[0].length;
  return parseInt(c[0], 10)
}
function sv(a, b, c) {
  for(var e = 0, f = -1, a = a.substring(b[0]).toLowerCase(), h = 0;h < c.length;h++) {
    var j = c[h].length;
    j > e && 0 == a.indexOf(c[h].toLowerCase()) && (f = h, e = j)
  }
  0 <= f && (b[0] += e);
  return f
}
function ov() {
}
;function tv(a) {
  ij.call(this, a);
  a.hasOwnProperty("delayMSecs") && (this.CK = a.delayMSecs)
}
C(tv, vj);
tv.prototype.CK = -1;
function uv(a) {
  mj.call(this, a);
  this.IF = [];
  if(a.hasOwnProperty("linkedTips")) {
    for(var b = a.linkedTips, c = 0;c < b.length;c++) {
      this.IF.push(new wj(b[c]))
    }
  }
  a.hasOwnProperty("controlID") && (this.aK = a.controlID);
  a.hasOwnProperty("isPinned") && (this.gs = a.isPinned)
}
C(uv, mj);
uv.prototype.aK = "";
uv.prototype.gs = m;
uv.prototype.IF = k;
function vv(a, b, c, e, f) {
  Rn.call(this, a, b, c, e, f);
  Bj().Uk.push(this)
}
C(vv, Rn);
B("tr.ui.SmartTip", vv);
ag(vv, Uj);
H.g().z("SmartTip", vv);
s = vv.prototype;
s.M = uv.prototype;
s.lw = k;
s.yN = k;
s.Ih = k;
s.$v = k;
s.Ss = k;
s.Zv = k;
s.Tk = k;
s.Ig = k;
s.a = function() {
  return vv.e.a.call(this)
};
s.l = function(a) {
  vv.e.l.call(this, a);
  this.Zv = this.u().m("div", "etk-smarttip-icondiv");
  a.appendChild(this.Zv);
  D(a, "etk-smarttip");
  this.Zv.innerHTML = '<svg class="etk-smarttip-svg" viewBox="0 0 480px 640px" xmlns="http://www.w3.org/2000/svg"><g><g id="svg_2" class="etk-smarttip-rootgraphic"><rect class="etk-smarttip-baserect etk-smarttip-icon" ry="23" rx="23" id="svg_1" height="182" width="182" y="9" x="9" /><rect class="etk-smarttip-bluetrim etk-smarttip-icon" x="29.41593" y="26.95135" width="142.16814" height="33.44865" id="svg_10" rx="8" ry="8"/><rect class="etk-smarttip-camorect etk-smarttip-icon" ry="10" rx="10" x="19.41593" y="26.88649" width="161.16814" height="32.48108" id="svg_11" /><rect class="etk-smarttip-camorect etk-smarttip-icon" x="20" y="48" width="159.99999" height="68" id="svg_4" /><rect class="etk-smarttip-camorect-square etk-smarttip-icon" x="18" y="164" width="164" height="18" id="svg_4" /><text class="etk-smarttip-textvalue etk-smarttip-icon" transform="matrix(4.7 0 0 3.70451 -488.4 -252.508)" xml:space="preserve" id="svg_3" y="103.80982" x="124.76596" >?</text><ellipse class="etk-smarttip-center-bullet" cx="98" cy="98" id="svg_2" rx="25" ry="25"/></g></g></svg>';
  G(a, "mouseover", this.AU, m, this);
  G(this.Zv, "click", this.Ae, i, this);
  this.$v = Ac("div", "etk-smarttip-popup-content");
  this.Ss = Ac("div", "etk-smarttip-popup");
  this.Tk = Ac("div", "etk_smarttip-extras", "");
  this.$v.appendChild(this.Tk);
  this.yN = new Nf(a, 1);
  var b = this.Ig = new gv(this.Ss, this.yN);
  $f(b);
  b.GL = m;
  b = this.Ig;
  $f(b);
  b.vJ = i;
  this.Ig.F(m);
  this.Ig.addEventListener("hide", this.tW, i, this);
  a.appendChild(this.Ss);
  this.Ss.appendChild(this.$v);
  wv(this);
  this.a().gs && (xv(this, i), yv(this, i))
};
function wv(a) {
  a.TT = A(a.Ig.onDocumentMouseDown_, a.Ig);
  a.Ig.onDocumentMouseDown_ = A(function(a) {
    Bj().rF(a) || this.TT(a)
  }, a)
}
s.m = function() {
  this.Xb("SmartTip", "div", "etk-smarttip")
};
s.k = function() {
  vv.e.k.call(this)
};
s.n = function() {
  vv.e.n.call(this)
};
s.tW = function() {
  this.kG();
  Dj(this)
};
s.uf = function() {
  zv(this)
};
s.kG = p();
s.Ae = function() {
  yv(this, !this.a().gs)
};
s.rF = function(a) {
  return a.target == this.Zv
};
s.AU = function() {
  zv(this)
};
s.rN = function() {
  Av(this);
  var a = Bj();
  a.Yo = yj(a, this);
  a = a.Yo;
  a.Sq = 0;
  a.lC()
};
s.sN = function() {
  var a = Bj();
  a.Yo = yj(a, this);
  a = a.Yo;
  0 < a.kz && (clearTimeout(a.kz), a.kz = -1);
  a.Sq = -1;
  Aj();
  zv(Bv(a))
};
function xv(a, b) {
  a.lw == k && (a.Ih = Fj(H.g(), a.a().aK), a.lw = new Nf(a.Ih.b(), 2), a.nD());
  a.Ih && a.lw && (b ? a.Ih.ob() && (G(a.Ih.na(), "focus", a.uf, m, a), a.lw.Jb(a.b(), 0), D(a.b(), "etk-smarttip-visible")) : a.a().gs || (Ve(a.Ih.na(), "focus", a.uf, m, a), E(a.b(), "etk-smarttip-visible"), E(a.b(), "etk-smarttip-popup-visible")))
}
s.nD = p();
function zv(a) {
  if(a.IH()) {
    if(!a.Ig.w()) {
      a.Ig.Jb();
      var b;
      a: {
        b = Bj();
        if(0 != b.zm.length) {
          for(var c = 0;c < b.zm.length;c++) {
            var e = zj(b.zm[c], a);
            if(0 <= e) {
              b = b.zm[c].a().pJ ? b.Yo == b.zm[c] ? "stop" : "play" : e;
              break a
            }
          }
        }
        b = ""
      }
      "play" === b ? H.g().Rg & 1 ? (Cv(a), G(a.Tk, "click", a.rN, i, a), a.Tk.innerHTML = '<svg width="14.000000000000002" height="14.000000000000002" xmlns="http://www.w3.org/2000/svg"><g><title>Start Workflow</title><rect fill="#ffffff" stroke="#225F8C" stroke-width="2" stroke-dasharray="null" stroke-linejoin="null" stroke-linecap="null" fill-opacity="0" x="338" y="135" width="1" height="0" id="svg_2"/><g id="svg_6"><rect fill="#000000" stroke-width="2" stroke-dasharray="null" stroke-linejoin="null" stroke-linecap="null" x="1.03505" y="1.03505" width="12" height="12" id="svg_1" rx="2" ry="2" stroke="#000000"/><path fill="#ffffff" stroke-width="2" stroke-dasharray="null" stroke-linejoin="null" stroke-linecap="null" d="m4.73532,4.27891c0,0 0,4.69324 0,4.69324c0,0 3.95995,-2.41564 3.95995,-2.41564c0,0 -3.95995,-2.2776 -3.95995,-2.2776z" id="svg_4" stroke="#ffffff"/></g></g></svg>') : 
      a.Tk.innerHTML = "" : "stop" === b ? Av(a) : (1 > b.length && 0 < a.gE().length && (b = '<svg width="11" height="10" xmlns="http://www.w3.org/2000/svg"><g><title>Layer 1</title><ellipse stroke="#225F8C" ry="15.18688" rx="27.47501" id="svg_1" cy="4.80921" cx="42.20792" stroke-linecap="null" stroke-linejoin="null" stroke-dasharray="null" stroke-width="8" fill="#ffffff" fill-opacity="0"transform="rotate(90 7.00956 3.37198) matrix(0.0912761 0.0802471 -0.0526985 0.138992 3.41042 -0.683523)"/><ellipse stroke="#225F8C" ry="13.95483" rx="25.60898" cy="53.4347" cx="22.4308" stroke-linecap="null" stroke-linejoin="null" stroke-dasharray="null" stroke-width="8" fill="#ffffff" fill-opacity="0" transform="rotate(90 4.04041 6.53386) matrix(0.0912761 0.0802471 -0.0526985 0.138992 4.80894 -2.69314)" id="svg_2"/></g></svg>'), 
      a.Tk.innerHTML = b);
      a.Ig.F(i);
      D(a.b(), "etk-smarttip-popup-visible");
      b = Bj();
      if(!b.NH && (Cj(b), !w(b.Yo))) {
        b.NH = i;
        c = a.gE();
        for(e = 0;e < c.length;e++) {
          zv(Ej(b, c[e].Rs))
        }
        c = yj(b, a);
        if(w(c)) {
          c = c.a().Jq;
          for(e = 0;e < c.length;e++) {
            "LinkedSmartTip" == c[e].type && zv(Ej(Bj(), c[e].Rs))
          }
        }
        b.NH = m
      }
      b.wq.push(a)
    }
  }else {
    Dj(a)
  }
}
s.IH = r(i);
function Dj(a) {
  a.Ig.F(m);
  E(a.b(), "etk-smarttip-popup-visible");
  Cv(a);
  var b = Bj(), a = b.wq.indexOf(a);
  0 <= a && b.wq.splice(a, 1)
}
function Av(a) {
  Cv(a);
  G(a.Tk, "click", a.sN, i, a);
  a.Tk.innerHTML = '<svg width="14.000000000000002" height="14.000000000000002" xmlns="http://www.w3.org/2000/svg"><g><title>Stop Workflow</title><rect id="svg_2" height="0" width="1" y="135" x="338" fill-opacity="0" stroke-linecap="null" stroke-linejoin="null" stroke-dasharray="null" stroke-width="2" stroke="#225F8C" fill="#ffffff"/><rect stroke="#000000" ry="2" rx="2" id="svg_1" height="12" width="12" y="1.03505" x="1.03505" stroke-linecap="null" stroke-linejoin="null" stroke-dasharray="null" stroke-width="2" fill="#000000"/><rect stroke="#ffffff" id="svg_3" height="4.4472" width="4.73093" y="5.0338" x="4.81384" stroke-linecap="null" stroke-linejoin="null" stroke-dasharray="null" stroke-width="2" fill="#ffffff"/></g></svg>'
}
function Cv(a) {
  Ve(a.Tk, "click", a.rN, i, a);
  Ve(a.Tk, "click", a.sN, i, a)
}
s.WF = function(a) {
  a & 1 ? xv(this, i) : (xv(this, m), Dj(this))
};
function Jj(a) {
  if(H.g().Rg & 1 || a.a().gs) {
    a.lw.Jb(a.b(), 0), a.Ig.w() && a.Ig.Jb()
  }
}
s.XF = function() {
  Jj(this)
};
function yv(a, b) {
  (a.a().gs = b) ? D(a.b(), "etk-smarttip-pinned") : (E(a.b(), "etk-smarttip-pinned"), H.g().Rg & 1 || xv(a, m))
}
s.gE = function() {
  return this.a().IF
};
vv.prototype.getLinkedTips = vv.prototype.gE;
function Dv(a) {
  uv.call(this, a);
  a.hasOwnProperty("tipContent") && (this.Xk = a.tipContent);
  a.hasOwnProperty("tipTitle") && (this.Ws = a.tipTitle)
}
C(Dv, uv);
Dv.prototype.Xk = "";
Dv.prototype.Ws = "";
function Ev(a, b, c, e, f) {
  vv.call(this, a, b, c, e, f)
}
C(Ev, vv);
B("tr.ui.BasicSmartTip", Ev);
ag(Ev, Uj);
H.g().z("BasicSmartTip", Ev);
s = Ev.prototype;
s.M = Dv.prototype;
s.a = function() {
  return Ev.e.a.call(this)
};
s.bI = k;
s.cI = k;
s.l = function(a) {
  Ev.e.l.call(this, a);
  this.cI = Ac("div", "etk-basicsmarttip-tiptitle", this.a().Ws);
  this.bI = Ac("div", "etk-basicsmarttip-tipcontent", this.a().Xk);
  this.$v.appendChild(this.cI);
  this.$v.appendChild(this.bI)
};
s.m = function() {
  this.Xb("BasicSmartTip", "div", "etk-basicsmarttip")
};
s.k = function() {
  Ev.e.k.call(this)
};
s.n = function() {
  Ev.e.n.call(this)
};
function Fv(a, b) {
  a.a().Ws = b;
  a.cI.innerText = b
}
function Gv(a, b) {
  a.a().Xk = b;
  a.bI.innerText = b
}
s.IH = function() {
  return this.a().Xk != k && 0 < this.a().Xk.length ? i : m
};
function Hv(a) {
  mj.call(this, a);
  a.hasOwnProperty("height") && (this.height = a.height);
  a.hasOwnProperty("alternateColumnColor") && (this.Sw = a.alternateColumnColor);
  a.hasOwnProperty("scroll") && (this.scroll = a.scroll)
}
C(Hv, mj);
Hv.prototype.height = 1;
Hv.prototype.Sw = m;
function Iv(a) {
  ij.call(this, a)
}
C(Iv, ij);
var Jv = new gl("etk-emptyrow");
function Kv(a, b, c, e, f) {
  K.call(this, a, b, c, z(e) ? e : Jv, f)
}
C(Kv, K);
ag(Kv, Uj);
H.g().z("EmptyRow", Kv);
s = Kv.prototype;
s.M = Iv.prototype;
s.a = function() {
  return Kv.e.a.call(this)
};
s.l = function(a) {
  Kv.e.l.call(this, a)
};
s.m = function() {
  this.Xb("EmptyRow", "div", "etk-emptyrow")
};
s.k = function() {
  Kv.e.k.call(this)
};
s.n = function() {
  Kv.e.n.call(this)
};
var Lv = new gl(Pn() ? "etk-row" : "etk-table-row");
function Mv(a, b, c, e, f) {
  Rn.call(this, a, b, c, z(e) ? e : Lv, f);
  this.gc(i);
  this.Lq = Pn() ? "etk-row" : "etk-table-row";
  lg(this, m)
}
C(Mv, Rn);
ag(Mv, Uj);
H.g().z("Row", Mv);
s = Mv.prototype;
s.M = Hv.prototype;
s.Lq = Pn() ? "etk-row" : "etk-table-row";
s.a = function() {
  return Mv.e.a.call(this)
};
s.l = function(a) {
  if("etk-row" !== this.Lq) {
    F(a, this.Lq, i);
    F(a, "etk-row", m);
    var b = k, b = document.createElement("div");
    b.style.display = "table";
    var c = a.parentElement;
    b.appendChild(a);
    c.appendChild(b)
  }
  this.s = a
};
s.m = function() {
  if("etk-table-row" === this.Lq) {
    var a = this.u().m("div", {"class":"etk-control " + Mv.prototype.Lq, "data-etk-type":"Row", "data-etk-ctor":"{}", "data-etk-behaviors":"{}", "data-etk-events":"{}"}), b = k, b = document.createElement("div");
    b.style.display = "table";
    b.appendChild(a);
    this.l(b)
  }else {
    this.Xb("Row", "div", Mv.prototype.Lq)
  }
};
s.k = function() {
  Mv.e.k.call(this);
  var a = this.a(), b = a.Sw;
  this.a().Sw = b;
  var c = this.b();
  c && F(c, "etk-row-alternatecolumncolor", b);
  a = a.scroll;
  this.a().scroll = a;
  (b = this.b()) && (a ? b.style.setProperty("overflow", "auto") : b.style.removeProperty("overflow"))
};
s.n = function() {
  Mv.e.n.call(this)
};
s.va = function() {
  return this.a().height
};
s.Ma = function(a) {
  this.a().height = a;
  if(0 < a) {
    var b = this.b();
    "" === fd(b, "-webkit-flex") && dd(b, "-webkit-flex", a)
  }
};
s.vO = function(a) {
  a ? this.b().style.removeProperty("-webkit-flex-wrap") : this.b().style.setProperty("-webkit-flex-wrap", "nowrap")
};
function Nv(a) {
  ij.call(this, a);
  a.hasOwnProperty("animated") && (this.pJ = a.animated);
  if(a.hasOwnProperty("workflowElements")) {
    this.Jq = [];
    for(var a = a.workflowElements, b = 0;b < a.length;b++) {
      switch(a[b].type) {
        case "LinkedSmartTip":
          this.Jq.push(new wj(a[b]));
          break;
        case "SmartTipWorkflowDelayElement":
          this.Jq.push(new tv(a[b]))
      }
    }
  }
}
C(Nv, ij);
Nv.prototype.pJ = m;
Nv.prototype.Jq = k;
function Ov(a, b, c, e, f) {
  K.call(this, a, b, c, e, f);
  Bj().zm.push(this)
}
C(Ov, K);
B("tr.ui.SmartTipWorkflow", Ov);
H.g().z("SmartTipWorkflow", Ov);
Ov.prototype.M = Nv.prototype;
vv.prototype.Sq = -1;
vv.prototype.kz = -1;
s = Ov.prototype;
s.a = function() {
  return Ov.e.a.call(this)
};
s.l = p();
s.m = p();
s.k = p();
function Bv(a) {
  for(var a = a.a().Jq, b = 0;b < a.length;b++) {
    if("LinkedSmartTip" == a[b].type) {
      return Ej(Bj(), a[b].Rs)
    }
  }
  return k
}
function zj(a, b) {
  for(var c = b.getName(), e = a.a().Jq, f = 0;f < e.length;f++) {
    if("LinkedSmartTip" == e[f].type) {
      var h = e[f];
      if(h.Rs == c) {
        return h.IM
      }
    }
  }
  return-1
}
s.lC = function() {
  if(!(0 > this.Sq)) {
    var a = this.a().Jq;
    if(this.Sq >= a.length) {
      Aj(), zv(Bv(this))
    }else {
      a = a[this.Sq];
      this.Sq++;
      switch(a.type) {
        case "LinkedSmartTip":
          zv(Ej(Bj(), a.Rs));
          break;
        case "SmartTipWorkflowDelayElement":
          this.kz = setTimeout(A(this.lC, this), a.CK);
          return
      }
      this.lC()
    }
  }
};
function Pv(a) {
  ij.call(this, a);
  a.hasOwnProperty("itemID") && (this.Vf = a.itemID);
  a.hasOwnProperty("tipContent") && (this.Xk = a.tipContent);
  a.hasOwnProperty("tipTitle") && (this.Ws = a.tipTitle)
}
C(Pv, ij);
Pv.prototype.Vf = "";
Pv.prototype.Xk = "";
Pv.prototype.Ws = "";
function Qv(a) {
  Dv.call(this, a);
  if(a.hasOwnProperty("items")) {
    this.T = [];
    for(var a = a.items, b = 0;b < a.length;b++) {
      this.T.push(new Pv(a[b]))
    }
  }
}
C(Qv, Dv);
Qv.prototype.T = [];
var Rv = new gl("etk-basicsmarttip");
function Sv(a, b, c, e, f) {
  vv.call(this, a, b, c, z(e) ? e : Rv, f)
}
C(Sv, Ev);
ag(Sv, Uj);
H.g().z("MultipleSmartTip", Sv);
s = Sv.prototype;
s.M = Qv.prototype;
s.a = function() {
  return Sv.e.a.call(this)
};
s.l = function(a) {
  Sv.e.l.call(this, a)
};
s.k = function() {
  Sv.e.k.call(this)
};
s.nD = function() {
  Sv.e.nD.call(this);
  this.Ih && this.Ih.mn && (this.Ih.Vd.i(this.pU, this), this.kG())
};
s.n = function() {
  Sv.e.n.call(this)
};
s.Tb = function() {
  return this.a().T
};
Sv.prototype.getItems = Sv.prototype.Tb;
Sv.prototype.vS = function() {
  return this.a().mQ
};
Sv.prototype.getSelectedItemID = Sv.prototype.vS;
Sv.prototype.xH = function(a) {
  this.a().mQ = a;
  if(a == k || 0 == a.length) {
    Gv(this, ""), Fv(this, "")
  }
  for(var b = this.a().T, c = 0;c < this.a().T.length;c++) {
    if(b[c].Vf == a) {
      Gv(this, b[c].Xk);
      Fv(this, b[c].Ws);
      break
    }
  }
};
Sv.prototype.setSelectedItemID = Sv.prototype.xH;
Sv.prototype.pU = function(a) {
  a.Ga == k ? (Gv(this, ""), Fv(this, "")) : this.xH(a.Ga.kk());
  zv(this)
};
Sv.prototype.kG = function() {
  this.Ih.Ea && this.Ih.Ea() && this.xH(this.Ih.Ea().kk())
};
Sv.prototype.IH = function() {
  return this.a().Xk != k && 0 < this.a().Xk.length ? i : m
};
function Tv() {
}
C(Tv, Ok);
x(Tv);
Tv.prototype.ka = function(a, b) {
  var c = a.children[0];
  c && (c.innerText = b)
};
Tv.prototype.J = function() {
  return Uv
};
var Uv = "etk-onoffbutton";
function Vv(a) {
  nj.call(this, a);
  a.hasOwnProperty("isChecked") && (this.ie = a.isChecked)
}
C(Vv, nj);
Vv.prototype.ie = m;
function Wv(a, b, c, e, f) {
  Nn.call(this, new nj(a), b, c, e || Tv.g(), f);
  this.TF = a;
  this.qO(new gl("etk-onoffbutton"));
  pg(this.Sa, 16, i);
  rg(this.Sa, 16);
  this.Ct = new yh(this, "Checked", c, bk(b, "Checked"));
  this.qw = new yh(this, "Unchecked", c, bk(b, "Unchecked"))
}
C(Wv, Nn);
ag(Wv, Tv);
B("tr.ui.OnOffButton", Wv);
Wv.prototype.M = Vv.prototype;
H.g().z("OnOffButton", Wv);
s = Wv.prototype;
s.Ct = k;
s.qw = k;
s.a = function() {
  return Wv.e.a.call(this)
};
s.l = function(a) {
  Wv.e.l.call(this, a);
  E(a, "etk-button")
};
s.m = function() {
  this.Xb("OnOffButton", "div", this.fa.J())
};
s.k = function() {
  Wv.e.k.call(this);
  var a = this.a();
  this.F(a.w);
  this.Oa(a.isEnabled);
  this.ra(a.text);
  this.iA(a.ie);
  this.Vb(a.gg);
  G(this.Sa, "check", A(this.bG, this));
  G(this.Sa, "uncheck", A(this.wG, this))
};
s.bG = function(a) {
  this.Ct.v(a)
};
s.wG = function(a) {
  this.qw.v(a)
};
s.KR = q("Ct");
Wv.prototype.getCheckedEvent = Wv.prototype.KR;
Wv.prototype.HS = q("qw");
Wv.prototype.getUncheckedEvent = Wv.prototype.HS;
s = Wv.prototype;
s.n = function() {
  Wv.e.n.call(this)
};
s.oy = function() {
  return this.a().ie
};
s.wi = function(a) {
  this.isEnabled() && (this.a().ie = a, this.Sa.He(16, a))
};
s.iA = function(a) {
  this.isEnabled() && (this.wi(a), a ? (a = new Ee("check"), this.Ct.v(a)) : (a = new Ee("uncheck"), this.qw.v(a)))
};
s.R = function(a) {
  this.He(1, !a);
  this.b();
  Wv.e.R.call(this, a)
};
function Xv(a) {
  Wk.call(this, a)
}
C(Xv, Zk);
function Yv(a, b, c, e) {
  gh.call(this, a, e);
  this.X = b;
  this.Ga = c
}
C(Yv, gh);
Yv.prototype.type = "etk_OnOffButton_changed";
Yv.prototype.X = k;
Yv.prototype.Jc = q("X");
Yv.prototype.getPrevious = Yv.prototype.Jc;
Yv.prototype.Ga = k;
Yv.prototype.qc = q("Ga");
Yv.prototype.getCurrent = Yv.prototype.qc;
function Zv(a, b, c, e) {
  I.call(this, a, w(b) ? b : "Changed", c, e)
}
C(Zv, I);
Zv.prototype.X = k;
Zv.prototype.i = function(a, b) {
  G(this.B, "etk_OnOffButton_changed", a, g, b)
};
Zv.prototype.listen = Zv.prototype.i;
Zv.prototype.H = function(a, b) {
  Ve(this.B, "etk_OnOffButton_changed", a, g, b)
};
Zv.prototype.unlisten = Zv.prototype.H;
Zv.prototype.la = function() {
  Ze(this.B, "etk_OnOffButton_changed")
};
Zv.prototype.unlistenAll = Zv.prototype.la;
Zv.prototype.v = function(a, b) {
  var c = new Yv(b, this.X, a, this.aa);
  this.X = a;
  Ah(this) && (this.B.dispatchEvent(c), this.md == i && (c = "", w(a) && (c = a.P()), wh.g().Nd(this.aa.P(), this.Fc, c, this.Kc)))
};
function $v(a) {
  mj.call(this, a);
  if(a.hasOwnProperty("items")) {
    this.T = [];
    for(var b = a.items, c = 0;c < b.length;c++) {
      this.T.push(new Vv(b[c]))
    }
  }
  a.hasOwnProperty("selectedItem") && (this.$b = a.selectedItem);
  a.hasOwnProperty("selectionMode") && (this.Fj = a.selectionMode)
}
C($v, mj);
$v.prototype.T = [];
$v.prototype.$b = k;
$v.prototype.Fj = 0;
var aw = new gl("etk-segmentedcontrol");
function bw(a, b, c, e, f) {
  Rn.call(this, a, b, c, z(e) ? e : aw, f);
  this.za = new Xv(this);
  this.Cl = b;
  this.Ej = new Zv(this, "SelectionChanged", c, bk(b, "SelectionChanged"))
}
C(bw, Rn);
ag(bw, Uj);
H.g().z("SegmentedControl", bw);
s = bw.prototype;
s.M = $v.prototype;
s.Cl = k;
s.za = k;
s.Ej = k;
s.a = function() {
  return bw.e.a.call(this)
};
s.l = function(a) {
  bw.e.l.call(this, a)
};
s.k = function() {
  bw.e.k.call(this);
  var a = this.a().Fj;
  0 !== a && 1 !== a && (a = 0);
  this.yH(a);
  a = this.a().T;
  if(w(a)) {
    for(var b = 6 < a.length ? 6 : a.length, c = 0;c < b;c++) {
      var e = a[c], e = new Wv(e, this.Cl, i);
      this.Ca(e, i);
      this.za.add(e);
      pg(e, 32, i)
    }
  }
  if(this.za !== k) {
    for(c = 0;c < this.za.Da();c++) {
      e = this.za.getItem(c), e.gg = this.a().gg, 0 === this.Nr() && e.oy() == i && (this.Kj == g || this.Kj == k ? this.Kj = e : e.wi(m))
    }
    0 === this.Nr() && this.Kj == k && 0 !== this.za.Da() && (this.Kj = this.za.getItem(0), this.Kj.wi(i))
  }
  for(c = 0;c < this.za.Da();c++) {
    e = this.za.getItem(c), e.Ct.i(this.bG, this), e.qw.i(this.wG, this)
  }
};
s.bG = function(a) {
  0 == this.Nr() && a.aa !== this.Kj && (this.Kj != k && this.Kj.wi(m), this.Kj = a.aa);
  a.aa.wi(i);
  var b = new Ee(cw, a.aa);
  this.Ej.v(a.aa, b);
  a.stopPropagation()
};
s.wG = function(a) {
  1 == this.Nr() ? (a.aa.wi(!a.aa.oy()), this.Zy && wh.g().Nd(this.P(), "SelectionChanged", a.aa.P(), bk(this.Cl, "SelectionChanged"))) : a.aa === this.Kj && a.aa.wi(i);
  a.preventDefault();
  a.stopPropagation()
};
s.Nr = function() {
  return this.a().Fj
};
s.yH = function(a) {
  return this.a().Fj = a
};
s.Z = function() {
  return this.a().isEnabled
};
bw.prototype.getIsEnabled = bw.prototype.Z;
bw.prototype.R = function(a) {
  bw.e.R.call(this, a);
  this.a().isEnabled = a;
  for(var b = 0;b < this.za.Da();b++) {
    this.za.getItem(b).R(a)
  }
};
bw.prototype.setIsEnabled = bw.prototype.R;
bw.prototype.ob = function() {
  return this.a().w
};
bw.prototype.getIsVisible = bw.prototype.ob;
bw.prototype.Y = function(a) {
  bw.e.Y.call(this, a);
  this.a().w = a
};
bw.prototype.setIsVisible = bw.prototype.Y;
bw.prototype.Mr = q("Ej");
bw.prototype.Tb = q("za");
bw.prototype.Ea = q("Kj");
bw.prototype.kd = function() {
  return this.a().Qd
};
bw.prototype.getTabEnabled = bw.prototype.kd;
bw.prototype.od = function(a) {
  this.a().Qd = a
};
bw.prototype.setTabEnabled = bw.prototype.od;
bw.prototype.fe = function() {
  return this.a().zq
};
bw.prototype.getTabOrder = bw.prototype.fe;
bw.prototype.Pc = function(a) {
  for(var b = 0;b < this.za.Da();b++) {
    this.za.getItem(b).Pc(a)
  }
  return a
};
bw.prototype.pb = function(a) {
  bw.e.pb.call(this, a)
};
bw.prototype.setHasFocus = bw.prototype.pb;
bw.prototype.ni = p();
bw.prototype.zj = p();
bw.prototype.im = p();
bw.prototype.hm = p();
function dw() {
}
Kj.g().z("ItemToIndexConverter", dw);
Kj.g().z(4, dw);
dw.prototype.ul = function(a) {
  for(var b = a.Ga, c = -1, a = a.aa, e = 0;e < a.Tb().Da();e++) {
    if(b == a.Tb().getItem(e)) {
      c = e;
      break
    }
  }
  return c
};
dw.prototype.kr = r(k);
function ew() {
}
Kj.g().z("IndexToItemConverter", ew);
Kj.g().z(3, ew);
ew.prototype.ul = function(a) {
  var b = a.wY, a = a.index;
  return w(b) && (b = b.Tb().getItem(a), w(b)) ? b : k
};
ew.prototype.kr = p();
function fw(a) {
  mj.call(this, a);
  a.hasOwnProperty("isSelected") && (this.uc = a.isSelected);
  a.hasOwnProperty("itemID") && (this.Vf = a.itemID)
}
C(fw, mj);
fw.prototype.uc = m;
fw.prototype.Vf = "";
function gw(a, b, c, e, f) {
  Rn.call(this, a, b, c, e, f);
  this.gc(i)
}
C(gw, Rn);
B("tr.ui.TabPane", gw);
ag(gw, Uj);
H.g().z("TabPane", gw);
s = gw.prototype;
s.M = fw.prototype;
s.a = function() {
  return gw.e.a.call(this)
};
s.m = function() {
  this.Xb("TabPane", "div", "etk-tabpane")
};
s.l = function(a) {
  gw.e.l.call(this, a);
  this.s = a;
  F(a, "etk-tabpane", i);
  a = this.a();
  this.Y(a.w);
  this.um(a.uc)
};
s.k = function() {
  gw.e.k.call(this);
  this.ma().i(this.b(), "mousedown", this.Be)
};
s.Be = function(a) {
  a.stopPropagation()
};
s.n = function() {
  gw.e.n.call(this)
};
s.Z = function() {
  return this.a().isEnabled
};
s.R = function(a) {
  this.a().isEnabled = a
};
s.ln = function() {
  return this.a().uc
};
s.um = function(a) {
  this.a().uc = a
};
s.kk = function() {
  return this.a().Vf
};
function hw(a) {
  Wk.call(this, a)
}
C(hw, Zk);
function iw(a) {
  mj.call(this, a);
  if(a.hasOwnProperty("items")) {
    this.T = [];
    for(var b = a.items, c = 0;c < b.length;c++) {
      this.T.push(new fw(b[c]))
    }
  }
  a.hasOwnProperty("selectedItem") && (this.$b = a.selectedItem)
}
C(iw, mj);
iw.prototype.T = [];
iw.prototype.$b = k;
function jw(a, b, c, e) {
  gh.call(this, a, e);
  this.X = b;
  this.Ga = c
}
C(jw, gh);
jw.prototype.type = "etk_TabPane_changed";
jw.prototype.X = k;
jw.prototype.Jc = q("X");
jw.prototype.getPrevious = jw.prototype.Jc;
jw.prototype.Ga = k;
jw.prototype.qc = q("Ga");
jw.prototype.getCurrent = jw.prototype.qc;
function kw(a, b, c, e) {
  I.call(this, a, w(b) ? b : "Changed", c, e)
}
C(kw, I);
kw.prototype.X = k;
kw.prototype.i = function(a, b) {
  G(this.B, "etk_TabPane_changed", a, g, b)
};
kw.prototype.listen = kw.prototype.i;
kw.prototype.H = function(a, b) {
  Ve(this.B, "etk_TabPane_changed", a, g, b)
};
kw.prototype.unlisten = kw.prototype.H;
kw.prototype.la = function() {
  Ze(this.B, "etk_TabPane_changed")
};
kw.prototype.unlistenAll = kw.prototype.la;
kw.prototype.v = function(a, b) {
  var c = new jw(b, this.X, a, this.aa);
  this.X = a;
  Ah(this) && (this.B.dispatchEvent(c), this.md == i && (c = "", w(a) && (c = a.P()), wh.g().Nd(this.aa.P(), this.Fc, c, this.Kc)))
};
function lw(a, b, c, e, f) {
  Rn.call(this, a, b, c, e, f);
  this.Cm = new hw(this);
  new kw(this, "TabPaneChangedEvent", c, bk(b, "TabPaneChanged"));
  this.gc(i)
}
C(lw, Rn);
B("tr.ui.Tabs", lw);
ag(lw, Uj);
H.g().z("Tabs", lw);
s = lw.prototype;
s.M = iw.prototype;
s.Cm = k;
s.a = function() {
  return lw.e.a.call(this)
};
s.m = function() {
  this.Xb("Tabs", "div", "etk-Tabs")
};
s.l = function(a) {
  lw.e.l.call(this, a);
  var b = H.g();
  this.s = a;
  for(var c = a.children, e = k, f = this.a(), h = 0;h < c.length;h++) {
    var j = f.T[h];
    w(j) || (j = new fw({}), this.a().T[h] = j);
    var l = th(b, "TabPane", j, k, i);
    l.Ka(c[h]);
    this.Cm.add(l);
    j.uc && (e = l);
    l.Y(m)
  }
  !w(e) && 0 != this.Cm.Da() && (e = this.Cm.getItem(this.Cm.Da() - 1));
  w(e) && (e.Y(i), this.Ba(e));
  this.Y(f.w);
  F(a, "etk-Tabs", i)
};
s.k = function() {
  lw.e.k.call(this)
};
s.n = function() {
  lw.e.n.call(this)
};
s.Tb = q("Cm");
s.Ea = function() {
  return this.a().$b
};
s.Ba = function(a) {
  var b = a;
  "string" == typeof a && (b = H.g().Ia(a));
  w(this.Ea()) && this.Ea().Y(m);
  w(b) && (b.Y(i), this.a().$b = b)
};
s.Mr = p();
s.im = p();
s.hm = p();
s.ni = p();
s.zj = p();
s.ei = r(i);
s.cg = function(a) {
  bl(this.Cm, a)
};
lw.prototype.setInsertItem = lw.prototype.cg;
lw.prototype.dg = function(a) {
  al(this.Cm, a)
};
lw.prototype.setRemoveItem = lw.prototype.dg;
lw.prototype.bg = function() {
  cl(this.Cm)
};
lw.prototype.setClear = lw.prototype.bg;
lw.prototype.iM = r(i);
function mw(a) {
  Dv.call(this, a)
}
C(mw, Dv);
var nw = new gl("etk-basicsmarttip");
function ow(a, b, c, e, f) {
  vv.call(this, a, b, c, z(e) ? e : nw, f)
}
C(ow, Ev);
ag(ow, Uj);
H.g().z("ActionSmartTip", ow);
s = ow.prototype;
s.M = mw.prototype;
s.a = function() {
  return ow.e.a.call(this)
};
s.l = function(a) {
  ow.e.l.call(this, a);
  this.ek || (this.ek = a.querySelector('*[tag-name="footer-content"]'));
  this.ek || (this.ek = a.lastChild);
  0 < this.b().children.length && !this.ek && (this.ek = this.b().children[0]);
  this.ek && F(this.ek, "etk-actionsmarttip-footer", i);
  this.Ss && this.Ss.appendChild(this.ek)
};
s.k = function() {
  ow.e.k.call(this)
};
s.n = function() {
  ow.e.n.call(this)
};
s.ek = k;
s.MD = k;
s.YR = function() {
  this.MD || (this.MD = H.g().Ia(this.ek.id));
  return this.MD
};
ow.prototype.getFooter = ow.prototype.YR;
B("tr.ui.enums.ExpanderStyle", {DEFAULT:0, RICH:1});
function pw() {
  this[0] = "default";
  this[1] = "rich"
}
x(pw);
pw.getInstance = pw.g;
B("tr.ui.enums.ExpanderStyleToString", pw);
function qw(a) {
  mj.call(this, a);
  a.hasOwnProperty("isAlwaysShowTitle") && (this.cM = a.isAlwaysShowTitle);
  a.hasOwnProperty("isExpanded") && (this.az = a.isExpanded);
  a.hasOwnProperty("style") && (this.style = a.style);
  a.hasOwnProperty("textAlign") && (this.textAlign = a.textAlign);
  a.hasOwnProperty("textOverflow") && (this.ya = a.textOverflow);
  a.hasOwnProperty("title") && (this.title = a.title);
  a.hasOwnProperty("enableContentMargin") && (this.Xx = a.enableContentMargin)
}
C(qw, mj);
s = qw.prototype;
s.cM = i;
s.az = i;
s.style = 0;
s.textAlign = 0;
s.ya = 0;
s.title = "";
s.Xx = i;
function rw(a, b, c, e, f) {
  Rn.call(this, a, b, c, e, f);
  this.Ub = new um(new uj({text:""}), k, m);
  this.gc(i)
}
C(rw, Rn);
ag(rw, Uj);
H.g().z("ExpandCollapse", rw);
B("ExpandCollapse", rw);
s = rw.prototype;
s.M = qw.prototype;
s.a = function() {
  return rw.e.a.call(this)
};
s.GE = k;
s.$a = k;
s.Vo = k;
s.l = function(a) {
  rw.e.l.call(this, a);
  this.s = a;
  var b = this.u().m("div");
  this.GE = this.u().m("span");
  var c = this.u().m("div");
  D(c, "etk-expander-headerhandle");
  b.appendChild(this.GE);
  this.Ub.Na(b);
  b.appendChild(c);
  this.$a = b;
  D(this.$a, "etk-expander-header");
  c = Ac("div", "etk-expander-content", a.childNodes);
  if(this.dE()) {
    this.Vo = c
  }else {
    this.Vo = this.u().m("div");
    var e = this.u().m("span");
    this.Vo.appendChild(e);
    G(e, "click", this.yj, m, this);
    this.Vo.appendChild(c)
  }
  G(b, "click", this.yj, m, this);
  a.appendChild(this.$a);
  a.appendChild(this.Vo);
  F(a, "etk-expander", i);
  D(this.Ub.b(), "etk-expander-title")
};
s.m = function() {
  this.Xb("ExpandCollapse", "div", "etk-expander")
};
s.La = q("Vo");
s.k = function() {
  rw.e.k.call(this);
  this.Ub.gc(m);
  this.yh(this.a().title);
  this.Y(this.a().w);
  this.oH(this.a().az);
  this.Zd(this.a().style);
  this.kO(this.a().Xx);
  G(this.GE, "click", this.yj, m, this)
};
s.vn = function() {
  return this.a().title
};
rw.prototype.getTitle = rw.prototype.vn;
rw.prototype.yh = function(a) {
  if(a == k || "" == a) {
    a = "  "
  }
  this.a().title = a;
  this.Ub.ra(a)
};
rw.prototype.setTitle = rw.prototype.yh;
rw.prototype.Y = function(a) {
  (this.a().w = a) ? E(this.b(), "etk-expander-invisible") : D(this.b(), "etk-expander-invisible")
};
rw.prototype.setIsVisible = rw.prototype.Y;
rw.prototype.ob = function() {
  return this.a().w
};
rw.prototype.getIsVisible = rw.prototype.ob;
rw.prototype.kO = function(a) {
  (this.a().Xx = a) ? D(this.La(), "etk-expander-content-margin") : E(this.La(), "etk-expander-content-margin")
};
rw.prototype.setEnableContentMargin = rw.prototype.kO;
rw.prototype.UR = function() {
  return this.a().Xx
};
rw.prototype.getEnableContentMargin = rw.prototype.UR;
rw.prototype.dE = function() {
  return this.a().cM
};
rw.prototype.getIsAlwaysShowTitle = rw.prototype.dE;
rw.prototype.eE = function() {
  return this.a().az
};
rw.prototype.getIsExpanded = rw.prototype.eE;
rw.prototype.oH = function(a) {
  this.a().az = a;
  F(this.b(), "etk-expander-expanded", this.eE());
  F(this.$a, "etk-expander-alwaysshowtitle", this.dE())
};
rw.prototype.setIsExpanded = rw.prototype.oH;
rw.prototype.yj = function(a) {
  this.oH(!this.eE());
  a.stopPropagation()
};
rw.prototype.Mb = function() {
  return this.a().textAlign
};
rw.prototype.getTextAlign = rw.prototype.Mb;
rw.prototype.Ua = function(a) {
  this.a().textAlign = a;
  this.Ub.Ua(a)
};
rw.prototype.setTextAlign = rw.prototype.Ua;
rw.prototype.Yb = function() {
  return this.a().ya
};
rw.prototype.getTextOverflow = rw.prototype.Yb;
rw.prototype.Va = function(a) {
  this.a().ya = a;
  this.Ub.Va(a)
};
rw.prototype.setTextOverflow = rw.prototype.Va;
rw.prototype.Pb = function() {
  this.ga || (this.ga = new Tj);
  return this.ga
};
rw.prototype.ai = function() {
  return this.a().style
};
rw.prototype.Zd = function(a) {
  var b = pw.g();
  if(w(this.a().style)) {
    var c = b[this.a().style];
    E(this.b(), "etk-expander-" + c)
  }
  this.a().style = a;
  D(this.b(), "etk-expander-" + b[a])
};
rw.prototype.lu = function() {
  var a = [];
  a.push(this.Vo);
  return a
};
var sw;
(sw = "ScriptEngine" in da && "JScript" == da.ScriptEngine()) && (da.ScriptEngineMajorVersion(), da.ScriptEngineMinorVersion(), da.ScriptEngineBuildVersion());
function tw(a, b) {
  this.Wc = sw ? [] : "";
  a != k && this.append.apply(this, arguments)
}
tw.prototype.set = function(a) {
  this.clear();
  this.append(a)
};
sw ? (tw.prototype.zC = 0, tw.prototype.append = function(a, b, c) {
  b == k ? this.Wc[this.zC++] = a : (this.Wc.push.apply(this.Wc, arguments), this.zC = this.Wc.length);
  return this
}) : tw.prototype.append = function(a, b, c) {
  this.Wc += a;
  if(b != k) {
    for(var e = 1;e < arguments.length;e++) {
      this.Wc += arguments[e]
    }
  }
  return this
};
tw.prototype.clear = function() {
  if(sw) {
    this.zC = this.Wc.length = 0
  }else {
    this.Wc = ""
  }
};
tw.prototype.toString = function() {
  if(sw) {
    var a = this.Wc.join("");
    this.clear();
    a && this.append(a);
    return a
  }
  return this.Wc
};
function uw(a, b, c) {
  mf.call(this, c);
  this.Ec = b || vw;
  this.Xr = a
}
C(uw, mf);
var ww = {};
s = uw.prototype;
s.eH = m;
s.Tt = m;
s.cP = k;
s.yQ = "";
s.cz = i;
s.Kx = -1;
s.n = function() {
  uw.e.n.call(this);
  this.Fd && (this.Fd.removeNode(this), this.Fd = k);
  this.s = k
};
s.Sy = function() {
  var a = this.b();
  if(a) {
    var b = xw(this);
    b && !b.id && (b.id = this.P() + ".label");
    wf(a, "treeitem");
    xf(a, "selected", m);
    xf(a, "expanded", m);
    xf(a, "level", this.qp());
    b && xf(a, "labelledby", b.id);
    (a = this.ny()) && wf(a, "presentation");
    (a = this.YD()) && wf(a, "presentation");
    a = yw(this);
    wf(a, "group");
    if(a.hasChildNodes()) {
      a = qf(this);
      for(b = 1;b <= a;b++) {
        var c = rf(this, b - 1).b();
        xf(c, "setsize", a);
        xf(c, "posinset", b)
      }
    }
  }
};
s.m = function() {
  var a = new tw;
  zw(this, a);
  var b;
  b = this.u().Lb;
  var c = a.toString(), a = b.createElement("div");
  Ob ? (a.innerHTML = "<br>" + c, a.removeChild(a.firstChild)) : a.innerHTML = c;
  if(1 == a.childNodes.length) {
    b = a.removeChild(a.firstChild)
  }else {
    for(b = b.createDocumentFragment();a.firstChild;) {
      b.appendChild(a.firstChild)
    }
  }
  this.s = b
};
s.k = function() {
  uw.e.k.call(this);
  ww[this.P()] = this;
  this.Sy()
};
s.nb = function() {
  uw.e.nb.call(this);
  delete ww[this.P()]
};
s.Df = function(a, b) {
  var c = rf(this, b - 1), e = rf(this, b);
  uw.e.Df.call(this, a, b);
  a.Wp = c;
  a.wj = e;
  c ? c.wj = a : this.PK = a;
  e ? e.Wp = a : this.AM = a;
  var f = this.vg();
  f && Aw(a, f);
  Bw(a, this.qp() + 1);
  if(this.b() && (this.Zs(), this.nf())) {
    f = yw(this);
    a.b() || a.m();
    var h = a.b(), j = e && e.b();
    f.insertBefore(h, j);
    this.Ra && a.k();
    e || (c ? c.Zs() : (Cd(f, i), this.Ok(this.nf())))
  }
};
s.add = function(a, b) {
  a.getParent() && a.getParent().removeChild(a);
  this.Df(a, b ? uf(this, b) : qf(this));
  return a
};
s.removeChild = function(a) {
  var b = this.vg(), c = b ? b.Ea() : k;
  if(c == a || a.contains(c)) {
    b.hasFocus() ? (this.select(), Vf(this.VU, 10, this)) : this.select()
  }
  uw.e.removeChild.call(this, a);
  this.AM == a && (this.AM = a.Wp);
  this.PK == a && (this.PK = a.wj);
  a.Wp && (a.Wp.wj = a.wj);
  a.wj && (a.wj.Wp = a.Wp);
  c = !a.wj;
  a.Fd = k;
  a.Kx = -1;
  if(b && (b.removeNode(this), this.Ra)) {
    b = yw(this);
    if(a.Ra) {
      var e = a.b();
      b.removeChild(e);
      a.nb()
    }
    c && (c = rf(this, qf(this) - 1)) && c.Zs();
    tf(this) || (b.style.display = "none", this.Zs(), this.ny().className = this.Yt())
  }
  return a
};
s.remove = uw.prototype.removeChild;
s.VU = function() {
  this.select()
};
s.qp = function() {
  var a = this.Kx;
  0 > a && (a = (a = this.getParent()) ? a.qp() + 1 : 0, Bw(this, a));
  return a
};
function Bw(a, b) {
  if(b != a.Kx) {
    a.Kx = b;
    var c = Cw(a);
    if(c) {
      var e = Math.max(0, (a.qp() - 1) * a.Ec.Qy) + "px";
      sf(a) ? c.style.paddingRight = e : c.style.paddingLeft = e
    }
    pf(a, function(a) {
      Bw(a, b + 1)
    })
  }
}
s.contains = function(a) {
  for(;a;) {
    if(a == this) {
      return i
    }
    a = a.getParent()
  }
  return m
};
s.aL = function() {
  var a = [];
  pf(this, function(b) {
    a.push(b)
  });
  return a
};
s.uc = q("eH");
s.select = function() {
  var a = this.vg();
  a && a.Ba(this)
};
s.Lx = fa;
function Dw(a, b) {
  if(a.eH != b) {
    a.eH = b;
    a.dl();
    var c = a.b();
    c && (xf(c, "selected", b), b && xf(a.vg().b(), "activedescendant", a.P()))
  }
}
s.nf = q("Tt");
s.Ok = function(a) {
  var b = a != this.Tt;
  if(!b || this.dispatchEvent(a ? "beforeexpand" : "beforecollapse")) {
    var c;
    this.Tt = a;
    c = this.vg();
    var e = this.b();
    if(tf(this)) {
      if(!a && c && this.contains(c.Ea()) && this.select(), e) {
        if(c = yw(this)) {
          if(Cd(c, a), a && this.Ra && !c.hasChildNodes()) {
            var f = new tw;
            pf(this, function(a) {
              zw(a, f)
            });
            c.innerHTML = f.toString();
            pf(this, function(a) {
              a.k()
            })
          }
        }
        this.Zs()
      }
    }else {
      (c = yw(this)) && Cd(c, m)
    }
    e && (this.ny().className = this.Yt(), xf(e, "expanded", a));
    b && this.dispatchEvent(a ? "expand" : "collapse")
  }
};
s.toggle = function() {
  this.Ok(!this.nf())
};
s.collapse = function() {
  this.Ok(m)
};
s.Vz = function() {
  var a = this.getParent();
  a && (a.Ok(i), a.Vz())
};
function zw(a, b) {
  var c = a.vg(), c = !c.DO || c == a.getParent() && !c.HO ? a.Ec.fK : a.Ec.eK, e = a.nf() && tf(a);
  b.append('<div class="', a.Ec.pK, '" id="', a.P(), '">', Ew(a), '<div class="', c, '" style="', Oa("background-position:", Fw(a), ";"), e ? "" : "display:none;", '">');
  e && pf(a, function(a) {
    zw(a, b)
  });
  b.append("</div></div>")
}
function Ew(a) {
  var b = new tw;
  b.append('<div class="', a.mu(), '" style="padding-', sf(a) ? "right:" : "left:", Math.max(0, (a.qp() - 1) * a.Ec.Qy), 'px">', a.ZD(), a.hL(), Gw(a), "</div>");
  return b.toString()
}
s.mu = function() {
  return this.Ec.uK + (this.uc() ? " " + this.Ec.tK : "")
};
function Gw(a) {
  var b = a.cP, c = new tw;
  c.append('<span class="', a.Ec.qK, '"', b ? ' title="' + Ca(b) + '"' : "", ">", a.Xr, "</span>", "<span>", a.yQ, "</span>");
  return c.toString()
}
s.hL = function() {
  var a = this.Yt();
  return a ? Oa('<img class="', a, '" src="', this.Ec.rx, '">') : Oa('<img style="display:none"', '" src="', this.Ec.rx, '">')
};
s.ZD = function() {
  return Oa('<img type="expand" class="', Hw(this), '" src="', this.Ec.rx + '">')
};
function Hw(a) {
  var b = a.vg(), c = !b.DO || b == a.getParent() && !b.HO, e = a.Ec, f = new tw;
  f.append(e.Wo, " ", e.hK, " ");
  if(tf(a)) {
    var h = 0;
    b.oW && a.cz && (h = a.nf() ? 2 : 1);
    c || (h = !a.wj ? h + 4 : h + 8);
    switch(h) {
      case 1:
        f.append(e.lK);
        break;
      case 2:
        f.append(e.kK);
        break;
      case 4:
        f.append(e.$C);
        break;
      case 5:
        f.append(e.jK);
        break;
      case 6:
        f.append(e.iK);
        break;
      case 8:
        f.append(e.aD);
        break;
      case 9:
        f.append(e.nK);
        break;
      case 10:
        f.append(e.mK);
        break;
      default:
        f.append(e.ZC)
    }
  }else {
    c ? f.append(e.ZC) : !a.wj ? f.append(e.$C) : f.append(e.aD)
  }
  return f.toString()
}
function Fw(a) {
  return(!a.wj ? "-100" : (a.qp() - 1) * a.Ec.Qy) + "px 0"
}
s.b = function() {
  var a = uw.e.b.call(this);
  a || (this.s = a = this.u().b(this.P()));
  return a
};
function Cw(a) {
  return(a = a.b()) ? a.firstChild : k
}
s.YD = function() {
  var a = Cw(this);
  return a ? a.firstChild : k
};
s.ny = function() {
  var a = Cw(this);
  return a ? a.childNodes[1] : k
};
function xw(a) {
  return(a = Cw(a)) && a.lastChild ? a.lastChild.previousSibling : k
}
function yw(a) {
  return(a = a.b()) ? a.lastChild : k
}
s.ra = function(a) {
  Iw(this, Ca(a))
};
s.wa = function() {
  return La(this.Xr, "&") ? "document" in da ? Ia(this.Xr) : Ka(this.Xr) : this.Xr
};
function Iw(a, b) {
  a.Xr = b;
  var c = xw(a);
  c && (c.innerHTML = b);
  (c = a.vg()) && Jw(c.Xs, a)
}
s.dl = function() {
  var a = Cw(this);
  a && (a.className = this.mu())
};
s.Zs = function() {
  var a = this.YD();
  a && (a.className = Hw(this));
  if(a = yw(this)) {
    a.style.backgroundPosition = Fw(this)
  }
};
s.sG = function(a) {
  "expand" == a.target.getAttribute("type") && tf(this) ? this.cz && this.toggle() : (this.select(), this.dl())
};
s.dG = Fe;
s.iG = function(a) {
  "expand" == a.target.getAttribute("type") && tf(this) || this.cz && this.toggle()
};
s.qG = function(a) {
  !a.altKey && 37 <= a.keyCode && 40 >= a.keyCode && a.preventDefault()
};
function Kw(a) {
  return!a.nf() || !tf(a) ? a : Kw(rf(a, qf(a) - 1))
}
s.sy = function() {
  if(tf(this) && this.nf()) {
    return rf(this, 0)
  }
  for(var a = this, b;a != this.vg();) {
    b = a.wj;
    if(b != k) {
      return b
    }
    a = a.getParent()
  }
  return k
};
s.uy = function() {
  var a = this.Wp;
  if(a != k) {
    return Kw(a)
  }
  var a = this.getParent(), b = this.vg();
  return!b.tq && a == b ? k : a
};
function Aw(a, b) {
  a.Fd != b && (a.Fd = b, Jw(b.Xs, a), pf(a, function(a) {
    Aw(a, b)
  }))
}
;function Lw(a, b, c) {
  uw.call(this, a, b, c)
}
C(Lw, uw);
Lw.prototype.Fd = k;
Lw.prototype.vg = function() {
  if(this.Fd) {
    return this.Fd
  }
  var a = this.getParent();
  return a && (a = a.vg()) ? (Aw(this, a), a) : k
};
Lw.prototype.Yt = function() {
  var a = this.nf();
  if(a && this.GD) {
    return this.GD
  }
  if(!a && this.OE) {
    return this.OE
  }
  var b = this.Ec;
  if(tf(this)) {
    if(a && b.bD) {
      return b.Wo + " " + b.bD
    }
    if(!a && b.XC) {
      return b.Wo + " " + b.XC
    }
  }else {
    if(b.dD) {
      return b.Wo + " " + b.dD
    }
  }
  return""
};
function Mw(a) {
  this.gd = {};
  if(a) {
    for(var b = Ld(a), a = Kd(a), c = 0;c < b.length;c++) {
      this.set(b[c], a[c])
    }
  }
}
s = Mw.prototype;
s.hc = g;
s.set = function(a, b) {
  Nw(this, a, b, m)
};
s.add = function(a, b) {
  Nw(this, a, b, i)
};
function Nw(a, b, c, e) {
  for(var f = 0;f < b.length;f++) {
    var h = b.charAt(f);
    a.gd[h] || (a.gd[h] = new Mw);
    a = a.gd[h]
  }
  e && a.hc !== g && d(Error('The collection already contains the key "' + b + '"'));
  a.hc = c
}
s.get = function(a) {
  for(var b = this, c = 0;c < a.length;c++) {
    var e = a.charAt(c);
    if(!b.gd[e]) {
      return
    }
    b = b.gd[e]
  }
  return b.hc
};
s.ge = function() {
  var a = [];
  Ow(this, a);
  return a
};
function Ow(a, b) {
  a.hc !== g && b.push(a.hc);
  for(var c in a.gd) {
    Ow(a.gd[c], b)
  }
}
s.Zh = function(a) {
  var b = [];
  if(a) {
    for(var c = this, e = 0;e < a.length;e++) {
      var f = a.charAt(e);
      if(!c.gd[f]) {
        return[]
      }
      c = c.gd[f]
    }
    Pw(c, a, b)
  }else {
    Pw(this, "", b)
  }
  return b
};
function Pw(a, b, c) {
  a.hc !== g && c.push(b);
  for(var e in a.gd) {
    Pw(a.gd[e], b + e, c)
  }
}
s.Oh = function(a) {
  return this.get(a) !== g
};
s.clear = function() {
  this.gd = {};
  this.hc = g
};
s.remove = function(a) {
  for(var b = this, c = [], e = 0;e < a.length;e++) {
    var f = a.charAt(e);
    b.gd[f] || d(Error('The collection does not have the key "' + a + '"'));
    c.push([b, f]);
    b = b.gd[f]
  }
  a = b.hc;
  for(delete b.hc;0 < c.length;) {
    if(f = c.pop(), b = f[0], f = f[1], sb(b.gd[f].gd)) {
      delete b.gd[f]
    }else {
      break
    }
  }
  return a
};
s.clone = function() {
  return new Mw(this)
};
s.Da = function() {
  var a = this.ge();
  if("function" == typeof a.Da) {
    a = a.Da()
  }else {
    if(ja(a) || ka(a)) {
      a = a.length
    }else {
      var b = 0, c;
      for(c in a) {
        b++
      }
      a = b
    }
  }
  return a
};
s.di = function() {
  return this.hc === g && ("function" == typeof this.gd.di ? this.gd.di() : ja(this.gd) || ka(this.gd) ? 0 == this.gd.length : sb(this.gd))
};
function Qw() {
  this.Mp = new Mw
}
s = Qw.prototype;
s.Wc = "";
s.LF = k;
s.nz = k;
s.Uu = 0;
s.ns = 0;
function Jw(a, b) {
  var c = b.wa();
  if(c && !xa(c)) {
    var c = c.toLowerCase(), e = a.Mp.get(c);
    e ? e.push(b) : a.Mp.set(c, [b])
  }
}
function Rw(a, b) {
  var c = m, e = a.Mp.Zh(b);
  if(e && e.length && (a.ns = 0, a.Uu = 0, c = Sw(a, a.Mp.get(e[0])))) {
    a.LF = e
  }
  return c
}
function Sw(a, b) {
  var c;
  if(b && (a.ns < b.length && (c = b[a.ns], a.nz = b), c)) {
    c.Vz(), c.select()
  }
  return!!c
}
s.clear = function() {
  this.Wc = ""
};
function Tw(a) {
  this.s = a;
  a = Ob ? "focusout" : "blur";
  this.ET = G(this.s, Ob ? "focusin" : "focus", this, !Ob);
  this.FT = G(this.s, a, this, !Ob)
}
C(Tw, lf);
Tw.prototype.handleEvent = function(a) {
  var b = new Ke(a.Rd);
  b.type = "focusin" == a.type || "focus" == a.type ? "focusin" : "focusout";
  try {
    this.dispatchEvent(b)
  }finally {
    b.ba()
  }
};
Tw.prototype.n = function() {
  Tw.e.n.call(this);
  Xe(this.ET);
  Xe(this.FT);
  delete this.s
};
function Uw(a, b, c) {
  uw.call(this, a, b, c);
  this.Tt = i;
  Dw(this, i);
  this.Md = this;
  this.Xs = new Qw;
  if(Ob) {
    try {
      document.execCommand("BackgroundImageCache", m, i)
    }catch(e) {
      this.gb.jt("Failed to enable background image cache")
    }
  }
}
C(Uw, uw);
s = Uw.prototype;
s.vc = k;
s.fp = k;
s.gb = re("goog.ui.tree.TreeControl");
s.LD = m;
s.tR = k;
s.DO = i;
s.oW = i;
s.tq = i;
s.HO = i;
s.vg = function() {
  return this
};
s.qp = r(0);
s.Vz = p();
s.vu = function() {
  this.LD = i;
  D(this.b(), "focused");
  this.Md && this.Md.select()
};
s.tE = function() {
  this.LD = m;
  E(this.b(), "focused")
};
s.hasFocus = q("LD");
s.nf = function() {
  return!this.tq || Uw.e.nf.call(this)
};
s.Ok = function(a) {
  this.tq ? Uw.e.Ok.call(this, a) : this.Tt = a
};
s.ZD = r("");
s.ny = function() {
  var a = Cw(this);
  return a ? a.firstChild : k
};
s.YD = r(k);
s.Zs = p();
s.mu = function() {
  return Uw.e.mu.call(this) + (this.tq ? "" : " " + this.Ec.oK)
};
s.Yt = function() {
  var a = this.nf();
  if(a && this.GD) {
    return this.GD
  }
  if(!a && this.OE) {
    return this.OE
  }
  var b = this.Ec;
  return a && b.cD ? b.Wo + " " + b.cD : !a && b.YC ? b.Wo + " " + b.YC : ""
};
s.Ba = function(a) {
  if(this.Md != a) {
    var b = m;
    this.Md && (b = this.Md == this.tR, Dw(this.Md, m));
    if(this.Md = a) {
      Dw(a, i), b && a.select()
    }
    this.dispatchEvent("change")
  }
};
s.Ea = q("Md");
s.Sy = function() {
  Uw.e.Sy.call(this);
  var a = this.b();
  wf(a, "tree");
  xf(a, "labelledby", xw(this).id)
};
s.k = function() {
  Uw.e.k.call(this);
  var a = this.b();
  a.className = this.Ec.rK;
  a.setAttribute("hideFocus", "true");
  this.pC();
  this.Sy()
};
s.nb = function() {
  Uw.e.nb.call(this);
  this.Nx()
};
s.pC = function() {
  var a = this.b();
  a.tabIndex = 0;
  var b = this.vc = new eg(a), c = this.fp = new Tw(a);
  this.ma().i(c, "focusout", this.tE).i(c, "focusin", this.vu).i(b, "key", this.Ld).i(a, "mousedown", this.AE).i(a, "click", this.AE).i(a, "dblclick", this.AE)
};
s.Nx = function() {
  this.vc.ba();
  this.vc = k;
  this.fp.ba();
  this.fp = k
};
s.AE = function(a) {
  ne(this.gb, "Received event " + a.type);
  var b;
  a: {
    b = k;
    for(var c = a.target;c != k;) {
      if(b = ww[c.id]) {
        break a
      }
      if(c == this.b()) {
        break
      }
      c = c.parentNode
    }
    b = k
  }
  if(b) {
    switch(a.type) {
      case "mousedown":
        b.sG(a);
        break;
      case "click":
        b.dG(a);
        break;
      case "dblclick":
        b.iG(a)
    }
  }
};
s.Ld = function(a) {
  var b = m, b = this.Xs, c = m;
  switch(a.keyCode) {
    case 40:
    ;
    case 38:
      if(a.ctrlKey) {
        var c = 40 == a.keyCode ? 1 : -1, e = b.LF;
        if(e) {
          var f = k, h = m;
          if(b.nz) {
            var j = b.ns + c;
            0 <= j && j < b.nz.length ? (b.ns = j, f = b.nz) : h = i
          }
          if(!f && (j = b.Uu + c, 0 <= j && j < e.length && (b.Uu = j), e.length > b.Uu && (f = b.Mp.get(e[b.Uu])), f && f.length && h)) {
            b.ns = -1 == c ? f.length - 1 : 0
          }
          Sw(b, f) && (b.LF = e)
        }
        c = i
      }
      break;
    case 8:
      e = b.Wc.length - 1;
      c = i;
      0 < e ? (b.Wc = b.Wc.substring(0, e), Rw(b, b.Wc)) : 0 == e ? b.Wc = "" : c = m;
      break;
    case 27:
      b.Wc = "", c = i
  }
  if(!(b = c)) {
    if(b = this.Md) {
      b = this.Md;
      c = i;
      switch(a.keyCode) {
        case 39:
          if(a.altKey) {
            break
          }
          tf(b) && (b.nf() ? rf(b, 0).select() : b.Ok(i));
          break;
        case 37:
          if(a.altKey) {
            break
          }
          tf(b) && b.nf() && b.cz ? b.Ok(m) : (e = b.getParent(), f = b.vg(), e && (f.tq || e != f) && e.select());
          break;
        case 40:
          (e = b.sy()) && e.select();
          break;
        case 38:
          (e = b.uy()) && e.select();
          break;
        default:
          c = m
      }
      c && (a.preventDefault(), (f = b.vg()) && f.Xs.clear());
      b = c
    }
    if(!b) {
      b = this.Xs;
      c = m;
      if(!a.ctrlKey && !a.altKey && (e = String.fromCharCode(a.charCode || a.keyCode).toLowerCase(), (1 == e.length && " " <= e && "~" >= e || "\u0080" <= e && "\ufffd" >= e) && (" " != e || b.Wc))) {
        b.Wc += e, c = Rw(b, b.Wc)
      }
      b = c
    }
  }
  b && a.preventDefault();
  return b
};
s.removeNode = function(a) {
  var b = this.Xs, c = a.wa();
  if(c && !xa(c)) {
    var c = c.toLowerCase(), e = b.Mp.get(c);
    e && (bb(e, a), e.length && b.Mp.remove(c))
  }
};
var vw = {rx:"images/cleardot.gif", Qy:19, rK:"goog-tree-root goog-tree-item", oK:"goog-tree-hide-root", pK:"goog-tree-item", eK:"goog-tree-children", fK:"goog-tree-children-nolines", uK:"goog-tree-row", qK:"goog-tree-item-label", Wo:"goog-tree-icon", hK:"goog-tree-expand-icon", lK:"goog-tree-expand-icon-plus", kK:"goog-tree-expand-icon-minus", nK:"goog-tree-expand-icon-tplus", mK:"goog-tree-expand-icon-tminus", jK:"goog-tree-expand-icon-lplus", iK:"goog-tree-expand-icon-lminus", aD:"goog-tree-expand-icon-t", 
$C:"goog-tree-expand-icon-l", ZC:"goog-tree-expand-icon-blank", bD:"goog-tree-expanded-folder-icon", XC:"goog-tree-collapsed-folder-icon", dD:"goog-tree-file-icon", cD:"goog-tree-expanded-folder-icon", YC:"goog-tree-collapsed-folder-icon", tK:"selected"};
function Vw() {
  this.click = "Clicked";
  this.change = "Changed";
  this.focus = "GotFocus";
  this.blur = "LostFocus";
  this.uncheck = this.check = "Checked";
  this.change = "Changed";
  this.action = "Clicked";
  this.expand = "Expanded";
  this.collapse = "Collapsed";
  this[cw] = "SelectionChanged";
  this[Ww] = "SelectedIndexChanged";
  this[Xw] = "OrientationChanged"
}
x(Vw);
function Yw(a, b, c, e, f, h, j) {
  var l = Vw.g()[b];
  z(j) || (j = m);
  a = G(a, b, function(a) {
    try {
      var b = c.call(this, a);
      if(this.Zy && b !== m) {
        switch(a = k, w(h) && (a = h.call(this)), e) {
          case 0:
            wh.g().Ev(this.P(), l, f);
            break;
          case 1:
            wh.g().hq(this.P(), l, a, f);
            break;
          case 2:
            wh.g().Nd(this.P(), l, a, f);
            break;
          case 3:
            wh.g().iq(this.P(), l, a, f);
            break;
          case 4:
            wh.g().Dv(this.P(), l, a, f);
            break;
          case 5:
            var j = a.getTime();
            wh.g().$z(this.P(), l, j, f);
            break;
          case -1:
            break;
          default:
            fh.g().log("Invalid MessageName" + e)
        }
      }
    }catch(t) {
      fh.g().log("An exception ocurred at tr.events.listen -" + t)
    }
  }, j, this);
  this.JF.push(a);
  return a
}
var cw = ef("selectionchanged"), Ww = ef("selectedindexchanged"), Xw = ef("ORIENTATIONCHANGED");
ef("VALUECHANGED");
ef("CHECKEDCHANGED");
s = mf.prototype;
s.getName = function() {
  return this.b().name
};
s.zi = function(a) {
  this.b().name = a
};
s.Ng = "";
s.rc = function() {
  this.b().title != k && (this.Ng = this.b().title);
  return this.Ng
};
s.Vb = function(a) {
  this.Ng = a;
  this.b().title = a
};
s.Xb = function(a, b, c) {
  b = this.u().createElement(b);
  b.className = "etk-control " + c;
  b.setAttribute("data-etk-type", a);
  this.l(b)
};
s.jl = function() {
  if(na(this.Aa)) {
    try {
      var a = this.Aa, b;
      for(b in a) {
        var c = "set", c = 1 === b.length ? c + b.toUpperCase() : c + (b.substring(0, 1).toUpperCase() + b.substring(1, b.length));
        if(ma(this[c])) {
          this[c](a[b])
        }
      }
    }catch(e) {
      fh.g().log("Error setting properties on control.")
    }
  }
};
s.Zy = i;
s.Aa = i;
mf.prototype.options_ = mf.prototype.Aa;
s = mf.prototype;
s.ee = q("Aa");
function Zw(a, b, c) {
  try {
    a.Aa = na(b) ? b : w(b) ? JSON.parse(b) : {}
  }catch(e) {
    fh.g().log("Error converting options string to json.")
  }
  if(a.Zy = c) {
    a.mq(a.Aa.appServerId), wh.g().$p(a), H.g().eh()[a.P()] = a
  }
}
s.oR = function() {
  this.nR();
  this.jl();
  this.b() && this.b().setAttribute("id", this.P())
};
s.nR = mf.prototype.k;
s.k = mf.prototype.oR;
s.i = function(a, b, c, e, f, h, j) {
  f = w(f) ? f : this.b();
  h = w(h) ? h : fa;
  return Yw.call(this, f, a, h, b, c, e, j)
};
s.la = function() {
  for(var a in this.JF) {
    Xe(this.JF[a])
  }
  fh.g().log("all listeners are detached.")
};
s.JF = [];
s.sp = r(m);
s.kd = function() {
  return this.ee().tabEnabled
};
mf.prototype.getTabEnabled = mf.prototype.kd;
mf.prototype.od = function(a) {
  this.ee().tabEnabled = a
};
mf.prototype.setTabEnabled = mf.prototype.od;
mf.prototype.fe = function() {
  return this.ee().tabOrder
};
mf.prototype.getTabOrder = mf.prototype.fe;
mf.prototype.Pc = aa();
mf.prototype.Xh = r(m);
function $w(a) {
  mj.call(this, a);
  this.Qd = m
}
C($w, mj);
B("tr.ui.model.Widget", $w);
function ax(a) {
  $w.call(this, a);
  a.hasOwnProperty("caption") && (this.caption = a.caption);
  a.hasOwnProperty("captionUrl") && (this.Ro = a.captionUrl);
  a.hasOwnProperty("enableComponentSettings") && (this.wD = a.enableComponentSettings);
  a.hasOwnProperty("alwaysShowHeaderControls") && (this.st = a.alwaysShowHeaderControls);
  a.hasOwnProperty("isBusy") && (this.rf = a.isBusy);
  a.hasOwnProperty("isContentBusy") && (this.mF = a.isContentBusy);
  a.hasOwnProperty("isContentRetrievalError") && (this.nF = a.isContentRetrievalError);
  a.hasOwnProperty("isRetrievalError") && (this.sf = a.isRetrievalError);
  a.hasOwnProperty("contextSubscriptions") && (this.VQ = a.contextSubscriptions);
  a.hasOwnProperty("error") && (this.error = a.error)
}
C(ax, $w);
ax.prototype.caption = ax.prototype.caption;
ax.prototype.captionUrl = ax.prototype.Ro;
ax.prototype.wD = m;
ax.prototype.enableComponentSettings = ax.prototype.wD;
ax.prototype.st = m;
ax.prototype.alwaysShowHeaderControls = ax.prototype.st;
ax.prototype.rf = m;
ax.prototype.isBusy = ax.prototype.rf;
ax.prototype.mF = m;
ax.prototype.isContentBusy = ax.prototype.mF;
ax.prototype.nF = m;
ax.prototype.isContentRetrievalError = ax.prototype.nF;
ax.prototype.sf = m;
ax.prototype.isRetrievalError = ax.prototype.sf;
ax.prototype.error = "";
ax.prototype.error = ax.prototype.error;
ax.prototype.contextSubscriptions = ax.prototype.VQ;
function bx(a, b, c, e, f) {
  mf.call(this, f);
  Zw(this, a, c);
  this.Bd(this.Aa);
  Gj(this)
}
C(bx, mf);
H.g().z("tr.ui.StackPanel", bx);
s = bx.prototype;
s.Aa = k;
s.k = function() {
  bx.e.k.call(this)
};
s.Gz = function() {
  this.b()
};
s.rc = function() {
  return this.a().tooltip
};
s.Vb = function(a) {
  this.a().tooltip = a;
  var b = this.b();
  b != k && w(a) === i && (b.title = a)
};
s.Ol = function() {
  return this.a().orientation
};
s.Qk = function(a) {
  this.a().orientation = a;
  F(this.b(), 0 == a ? "etk-stackpanel-1" : "etk-stackpanel-0", m);
  F(this.b(), "etk-stackpanel-" + a, i)
};
s.w = function() {
  return this.a().visible
};
s.F = function(a) {
  this.a().visible = w(a) ? a : a = i;
  var b = this.b();
  b != k && Cd(b, a)
};
s.Y = function(a) {
  this.F(a)
};
s.ob = function() {
  return this.w()
};
s.l = function(a) {
  bx.e.l.call(this, a);
  this.F(this.w());
  cx(this, this.a().maxWidth);
  this.mA(this.Jr());
  dx(this, this.a().maxHeight);
  ex(this, this.a().minHeight);
  this.Zd(this.a().style);
  this.Qk(this.Ol());
  this.Vb(this.rc())
};
s.m = function() {
  var a = Ac("div");
  a.setAttribute("data-etk-type", "StackPanel");
  this.s = a;
  this.F(this.w());
  cx(this, this.a().maxWidth);
  this.mA(this.Jr());
  dx(this, this.a().maxHeight);
  ex(this, this.a().minHeight);
  this.Zd(this.a().style);
  this.Qk(this.Ol());
  this.Vb(this.rc())
};
s.Ht = p();
s.Zd = function(a) {
  z(a) && F(this.b(), "etk-stackpanel-" + a, i)
};
function cx(a, b) {
  if(z(b)) {
    a.a().maxWidth = b;
    var c = a.b();
    c != k && dd(c, "maxWidth", b)
  }
}
s.Jr = function() {
  return this.a().minWidth
};
s.mA = function(a) {
  if(z(a)) {
    this.a().minWidth = a;
    var b = this.b();
    b != k && dd(b, "minWidth", a)
  }
};
function dx(a, b) {
  if(z(b)) {
    a.a().maxHeight = b;
    var c = a.b();
    c != k && dd(c, "maxHeight", b)
  }
}
function ex(a, b) {
  if(z(b)) {
    a.a().minHeight = b;
    var c = a.b();
    c != k && dd(c, "minHeight", b)
  }
}
s.Pb = function() {
  this.ga || (this.ga = new Tj);
  return this.ga
};
s.jl = p();
s.Pc = aa();
s.sp = r(m);
s.Xh = r(m);
s.Ib = k;
s.wm = ba("Ib");
s.tp = q("Ib");
s.ei = r(m);
function Hj(a) {
  this.za = a
}
Hj.prototype.za = [];
Hj.prototype.getItem = function(a) {
  return this.za[a]
};
Hj.prototype.indexOf = function(a) {
  return Ua(this.za, a)
};
Hj.prototype.Da = function() {
  return this.za.length
};
function fx() {
}
x(fx);
fx.prototype.Lf = {};
fx.prototype.create = function(a) {
  var b = this.Lf[a];
  if(!b) {
    var c = a.split(".");
    if(c) {
      for(var e = 0;e < c.length;e++) {
        b = b == k ? window[c[e]] : b[c[e]]
      }
    }
    if(b == k) {
      return k
    }
    this.Lf[a] = b
  }
  return new b
};
function gx(a) {
  this.parent = a;
  this.iB = {};
  this.buffer = {};
  this.wJ = fx.g()
}
s = gx.prototype;
s.wJ = k;
s.parent = k;
s.EJ = k;
s.iB = k;
s.buffer = k;
function hx(a, b) {
  a.EJ = b;
  for(var c = a.parent.eh(), e = 0;e < c.Da();e++) {
    var f = c.getItem(e);
    f.YK && hx(f.wt, b)
  }
}
function ix(a, b) {
  for(var c = b.eh(), e = 0;e < c.Da();e++) {
    var f = a, h = c.getItem(e), j = jx(h);
    if(0 < j.length) {
      for(var l = 0;l < j.length;l++) {
        var n = "", n = j[l], o = f.iB[n.zy()];
        o || (o = [], f.iB[n.zy()] = o);
        o.push(h);
        n = n.eL();
        if(w(n) && "" != n) {
          for(var n = n.split("."), o = h, u = 0;u < n.length;u++) {
            if(u == n.length - 1) {
              var t = o["get" + n[u] + "Event"]();
              if(t) {
                t.i(f.SQ, f);
                break
              }
            }
            o = o["get" + n[u]]()
          }
        }
      }
    }
    h.YK ? (h = h.wt, hx(h, f.EJ), h.buffer = f.buffer, kx(h)) : h.eh && ix(f, h)
  }
}
s.SQ = function(a) {
  var b = a.aa, c = k;
  a.qc && (c = a.Ga);
  var e = i, a = {}, b = jx(b);
  if(0 != b.length) {
    for(var f = 0;f < b.length;f++) {
      var h = b[f], j = h.a().direction, l = h.a().converterJavascriptType;
      if(j == lx || j == mx) {
        l != k && (e = this.wJ.create(l), e != k && (c = e.kr(c))), a[h.zy()] = c, e = h.a().canPropagateChanges
      }
    }
  }
  if(e) {
    for(var n in this.buffer) {
      a[n] = this.buffer[n]
    }
    this.buffer = {}
  }else {
    for(n in a) {
      this.buffer[n] = a[n]
    }
  }
};
function jx(a) {
  for(var b = [], c = 0;c < a.Pb().Da();c++) {
    var e = a.Pb().getItem(c);
    "ServerControlBindingBehavior" == e.wg() && b.push(e)
  }
  return b
}
function kx(a) {
  a.iB = {};
  a.buffer = {};
  ix(a, a.parent)
}
;var nx = new gl("etk-widget");
function ox(a, b, c, e) {
  e = w(e) ? e : nx;
  Rn.call(this, a, b, c, e);
  lg(this, m);
  this.aF = [];
  this.wt = new gx(this)
}
C(ox, Rn);
H.g().z("Widget", ox);
ox.prototype.M = $w.prototype;
B("tr.ui.Widget", ox);
s = ox.prototype;
s.wt = k;
s.YK = q("wt");
s.a = function() {
  return ox.e.a.call(this)
};
s.Ag = r(i);
s.l = function(a) {
  ox.e.l.call(this, a)
};
s.m = function() {
  this.Xb("Widget", "div", "etk-widget")
};
s.k = function() {
  ox.e.k.call(this);
  this.rr();
  px(this, this);
  this["tr.ui.Widget.prototype.enterDocument"] = "Hello!";
  kx(this.wt);
  if(z(this.onLoad)) {
    this.onLoad()
  }else {
    this.Nn()
  }
};
s.n = function() {
  this.xG();
  ox.e.n.call(this)
};
s.Nn = p();
ox.prototype.onLoad = ox.prototype.Nn;
ox.prototype.xG = p();
ox.prototype.onUnload = ox.prototype.xG;
ox.prototype.aF = [];
ox.prototype.Pc = function(a) {
  var b = Ij(this.aF), a = this.fe() + a, c;
  for(c in b) {
    var e = b[c], f = e.Pc(a);
    f > qx && (qx = f);
    e.Ag && e.Ag() && (a = f)
  }
  return qx
};
var qx = 1;
function px(a, b) {
  for(var c = b.eh(), e = 0;e < c.Da();e++) {
    var f = c.getItem(e);
    a[f.getName()] = f;
    f.Xh() && !f.Ag() && px(a, f);
    f.sp() && a.aF.push(f)
  }
}
;function rx(a) {
  ij.call(this, a)
}
C(rx, ij);
function sx(a) {
  ij.call(this, a);
  a.hasOwnProperty("url") && (this.url = a.url)
}
C(sx, rx);
sx.prototype.url = "";
var tx = new gl("etk-link");
function ux(a, b, c, e, f) {
  K.call(this, a, b, c, z(e) ? e : tx, f)
}
C(ux, K);
B("tr.ui.Link", ux);
ag(ux, Uj);
H.g().z("Link", ux);
s = ux.prototype;
s.M = sx.prototype;
s.a = function() {
  return ux.e.a.call(this)
};
s.m = function() {
  var a = this.u().createElement("a");
  a.setAttribute("data-etk-type", "Link");
  this.l(a)
};
s.l = function(a) {
  ux.e.l.call(this, a);
  this.s = a;
  this.Tv(this.a().url);
  F(a, ux.fX, i)
};
s.k = function() {
  ux.e.k.call(this)
};
s.n = function() {
  ux.e.n.call(this)
};
s.IS = function() {
  return this.a().url
};
ux.prototype.getUrl = ux.prototype.IS;
ux.prototype.Tv = function(a) {
  this.a().url = a;
  this.b().href = a
};
ux.prototype.setUrl = ux.prototype.Tv;
ux.prototype.jd = function() {
  return 0 < qf(this) ? rf(this, 0) : k
};
ux.prototype.getContent = ux.prototype.jd;
function vx(a, b, c) {
  ox.call(this, a, b, c);
  this.Ub = new um(new uj({text:""}), k, m)
}
C(vx, ox);
ag(vx, Uj);
H.g().z("tr.ui.Component", vx);
s = vx.prototype;
s.M = ax.prototype;
s.l = function(a) {
  vx.e.l.call(this, a);
  this.s = a;
  this.ye = this.u().m("div");
  var b = this.cn();
  b === g || b === k || "" === b ? (this.Ub.m(), this.ye.appendChild(this.Ub.b())) : (b = new ux({}, k, i), b.Ca(this.Ub, i), b.Tv(this.cn()), b.F(i), this.ye.appendChild(b.b()));
  if(0 < this.b().children.length && this.JI != k) {
    this.mj = this.JI.b();
    this.a().wD && (this.Ah = new Nn({}, k, m), this.Ah.Na(this.mj), F(this.Ah.b(), "etk-headersettingsbutton", i));
    F(this.mj, "etk-headersection", i);
    this.ye.appendChild(this.mj);
    this.Hf = this.b().children[0];
    if(b = this.Hf != this.mj) {
      b = this.cn(), b = this.pc() || b ? i : m
    }
    b && (this.b().insertBefore(this.ye, this.Hf), this.Hf = this.b().children[1])
  }
  F(a, "etk-Component", i);
  F(this.ye, "etk-header", i);
  F(this.Ub.b(), "etk-textlabel-componentheader", i);
  this.Hf == k && (this.Hf = this.b())
};
s.Hf = k;
s.JI = k;
s.k = function() {
  vx.e.k.call(this);
  this.Od(this.a().caption);
  this.a().isContentBusy = this.a().mF;
  wx(this);
  this.ff(this.a().rf);
  this.Pa(this.a().error);
  this.a().isContentRetrievalError = this.a().nF;
  var a = this.b();
  if(a) {
    try {
      if(this.a().isContentRetrievalError) {
        var b = xx(this);
        this.Hf && (b.style.height = a.offsetHeight - this.ye.offsetHeight + "px", b.style.width = a.offsetWidth + "px", D(this.Hf, "etk-headersection-invisible"));
        D(a, "etk-Component-contentretrievalerror");
        a.appendChild(b)
      }else {
        this.Hf && !this.a().isContentBusy && E(this.Hf, "etk-headersection-invisible"), E(a, "etk-Component-contentretrievalerror"), a.removeChild(xx(this))
      }
    }catch(c) {
    }
  }
  this.xi(this.a().sf);
  this.F(this.a().hg);
  this.a().st = this.a().st;
  a = this.ma();
  this.mj !== g && this.mj !== k && (this.a().st ? this.Jj(i, m) : (this.Jj(m, m), a.i(this.ye, "mouseover", this.mG, i), a.i(this.ye, "mouseout", this.lG, i)))
};
s.La = q("Hf");
s.pc = function() {
  return this.a().caption
};
s.Od = function(a) {
  (this.a().caption = a) && this.Ub.ra(a)
};
s.Jj = function(a, b) {
  a ? (E(this.mj, "etk-headersection-hidden"), b && D(this.mj, "etk-headersection-float")) : (D(this.mj, "etk-headersection-hidden"), b && E(this.mj, "etk-headersection-float"))
};
s.yp = -1;
s.bE = function() {
  -1 === this.yp && (this.yp = yd(this.mj).width);
  return this.yp
};
s.zp = -1;
s.cE = function() {
  -1 === this.zp && (this.zp = yd(this.Ub.b()).width);
  return this.zp
};
s.gu = function() {
  return Zc(this.u()).width - (this.cE() + 8) > this.bE() ? m : i
};
s.mG = function(a) {
  this.Jj(i, this.gu());
  a.stopPropagation()
};
s.lG = function(a) {
  this.Jj(m, this.gu());
  a.stopPropagation()
};
s.w = function() {
  return this.a().hg
};
s.F = function(a) {
  (this.a().hg = a) ? E(this.b(), "etk-Component-invisible") : D(this.b(), "etk-Component-invisible");
  return i
};
s.cn = function() {
  return this.a().Ro
};
s.hH = function(a) {
  this.a().Ro = a
};
s.yd = function() {
  var a = this.getError();
  return a != k && 0 < a.length ? i : m
};
s.getError = function() {
  return this.a().error
};
s.Pa = function(a) {
  this.yd() && (this.a().error = a, this.Ni(a))
};
s.jc = k;
s.gj = function() {
  this.jc == k && (this.jc = this.u().m("span", "etk-Component-erroricon"));
  return this.jc
};
s.Ni = function() {
  var a = this.Ub.b();
  try {
    this.yd() ? (D(this.b(), "etk-Component-error"), this.u().Ns(this.gj(), {title:this.getError()}), a.appendChild(this.gj())) : (E(this.b(), "etk-Component-error"), a.removeChild(this.gj()))
  }catch(b) {
  }
};
s.Wh = function() {
  return this.a().isBusy
};
s.ff = function(a) {
  this.a().isBusy = a;
  this.hl(a)
};
s.pe = k;
s.rg = function() {
  this.pe == k && (this.pe = this.u().m("span", "etk-Component-busyicon"));
  return this.pe
};
s.hl = function() {
  var a = this.Ub.b();
  try {
    this.Wh() ? (D(this.b(), "etk-Component-busy"), a.appendChild(this.rg())) : (E(this.b(), "etk-Component-busy"), a.removeChild(this.rg()))
  }catch(b) {
  }
};
s.Yh = function() {
  return this.a().isRetrievalError
};
s.xi = function(a) {
  if(this.a().isRetrievalError = a) {
    this.ff(m), this.a().isContentBusy = m, wx(this)
  }
  this.il(a)
};
s.Do = k;
s.tg = function() {
  this.Do == k && (this.Do = this.u().m("span", "etk-Component-retrievalerroricon"));
  return this.Do
};
s.il = function() {
  var a = this.Ub.b();
  try {
    this.Yh() ? (D(this.b(), "etk-Component-retrievalerror"), a.appendChild(this.tg())) : (E(this.b(), "etk-Component-retrievalerror"), a.removeChild(this.tg()))
  }catch(b) {
  }
};
s.jx = k;
function yx(a) {
  a.jx == k && (a.jx = a.u().m("div", "etk-busyadorner"), a.jx.appendChild(a.u().m("span", "etk-Component-contentbusyicon")));
  return a.jx
}
function wx(a) {
  var b = a.b();
  if(b) {
    try {
      if(a.a().isContentBusy) {
        var c = yx(a);
        a.Hf && (c.style.height = b.offsetHeight - a.ye.offsetHeight + "px", c.style.width = b.offsetWidth + "px", D(a.Hf, "etk-headersection-invisible"));
        D(b, "etk-Component-Contentbusy");
        b.appendChild(c)
      }else {
        a.Hf && !a.a().isContentRetrievalError && E(a.Hf, "etk-headersection-invisible"), E(b, "etk-Component-Contentbusy"), b.removeChild(yx(a))
      }
    }catch(e) {
    }
  }
}
s.wx = k;
function xx(a) {
  a.wx == k && (a.wx = a.u().m("div", "etk-contentretrievalerroradorner"), a.wx.appendChild(a.u().m("span", "etk-Component-contentretrievalerroricon")));
  return a.wx
}
;function zx(a) {
  ij.call(this, a);
  a.hasOwnProperty("state") && (this.state = a.state);
  a.hasOwnProperty("xPos") && (this.zw = a.xPos);
  a.hasOwnProperty("yPos") && (this.Aw = a.yPos)
}
C(zx, ij);
zx.prototype.state = 0;
zx.prototype.zw = 0;
zx.prototype.Aw = 0;
function Ax(a) {
  ij.call(this, a);
  a.hasOwnProperty("state") && (this.state = a.state);
  a.hasOwnProperty("uRL") && (this.kI = a.uRL)
}
C(Ax, ij);
Ax.prototype.state = 0;
Ax.prototype.kI = "";
function Bx(a) {
  lj.call(this, a);
  a.hasOwnProperty("image") && (this.My = a.image);
  a.hasOwnProperty("imageName") && (this.Sf = a.imageName);
  if(a.hasOwnProperty("imageSprites")) {
    this.oj = [];
    for(var b = a.imageSprites, c = 0;c < b.length;c++) {
      this.oj.push(new zx(b[c]))
    }
  }
  if(a.hasOwnProperty("imageStates")) {
    this.pj = [];
    b = a.imageStates;
    for(c = 0;c < b.length;c++) {
      this.pj.push(new Ax(b[c]))
    }
  }
  a.hasOwnProperty("width") && (this.width = a.width)
}
C(Bx, lj);
s = Bx.prototype;
s.My = "";
s.Sf = 0;
s.oj = [];
s.pj = [];
s.width = 24;
var Cx = new gl("etk-imagebutton");
function Dx(a, b, c, e, f) {
  K.call(this, a, b, c, z(e) ? e : Cx, f);
  w(this.a().pj) || (this.a().pj = []);
  w(this.a().oj) || (this.a().oj = []);
  this.wb = new yh(this, "Clicked", c, bk(b, "Clicked"))
}
C(Dx, ql);
B("tr.ui.ImageButton", Dx);
ag(Dx, Uj);
H.g().z("ImageButton", Dx);
s = Dx.prototype;
s.M = Bx.prototype;
s.wb = k;
s.We = k;
s.Nm = 0;
s.a = function() {
  return Dx.e.a.call(this)
};
s.l = function(a) {
  Dx.e.l.call(this, a);
  this.We = this.qa.m("div", "etk-imagebutton-image");
  Ex(this);
  this.b().appendChild(this.We)
};
s.m = function() {
  this.Xb("ImageButton", "div", "etk-imagebutton")
};
s.k = function() {
  Dx.e.k.call(this);
  this.R(this.a().isEnabled);
  this.Vb(this.a().gg);
  this.Y(this.a().w);
  this.tm(this.a().Sf);
  this.xa(this.a().width);
  var a = this.b();
  this.ma().i(a, "click", this.yj);
  rg(this, 255)
};
s.He = function(a, b) {
  Dx.e.He.call(this, a, b);
  this.Nm = b ? this.Nm | a : this.Nm & ~a;
  Ex(this)
};
function Ex(a) {
  if(0 == a.Ml()) {
    var b = a.a().My, c = 0, e = 0;
    if(0 < a.a().pj.length || 0 < a.a().oj.length) {
      var f = 3;
      a.Nm & 4 ? f = 0 : a.Nm & 32 ? f = 1 : a.Nm & 2 ? f = 2 : a.Nm & 1 && (f = 4);
      if(0 < a.a().pj.length) {
        for(var h = "", j = 0;j < a.a().pj.length;j++) {
          if(3 == a.a().pj[j].state && (h = a.a().pj[j].kI), a.a().pj[j].state == f) {
            b = a.a().pj[j].kI;
            break
          }
        }
        1 > b.length && (b = h)
      }
      if(0 < a.a().oj.length) {
        h = -1;
        for(j = 0;j < a.a().oj.length;j++) {
          if(3 == a.a().oj[j].state && (h = j), a.a().oj[j].state == f) {
            h = j;
            break
          }
        }
        0 <= h && (c = a.a().oj[h].zw, e = a.a().oj[h].Aw)
      }
    }
    dd(a.We, {"background-image":"url(" + b + ")", width:a.Ha() + "px", "background-position":-c + "px " + -e + "px"})
  }
}
s.n = function() {
  Dx.e.n.call(this);
  this.la()
};
s.yj = function(a) {
  this.isEnabled() && (this.wb.v(a), a.stopPropagation())
};
s.cS = function() {
  return this.a().My
};
Dx.prototype.getImage = Dx.prototype.cS;
Dx.prototype.YV = function(a) {
  this.a().My = a;
  Ex(this)
};
Dx.prototype.setImage = Dx.prototype.YV;
Dx.prototype.xd = q("wb");
Dx.prototype.getClickedEvent = Dx.prototype.xd;
Dx.prototype.Ha = function() {
  return this.a().width
};
Dx.prototype.xa = function(a) {
  this.a().width = a;
  Ex(this)
};
Dx.prototype.Ml = function() {
  return this.a().Sf
};
Dx.prototype.getImageName = Dx.prototype.Ml;
Dx.prototype.tm = function(a) {
  var b = zm.g(), c = k;
  if(w(a) && (c = b[a])) {
    c = "etk-imagebutton-" + c, 3 == a ? (a = this.b(), a.innerHTML = "Reset", F(a, c, i)) : F(this.We, c, i)
  }
};
function Fx(a) {
  $w.call(this, a);
  a.hasOwnProperty("caption") && (this.caption = a.caption)
}
C(Fx, $w);
Fx.prototype.caption = "";
function Gx(a, b, c, e) {
  ox.call(this, a, b, c, e)
}
C(Gx, ox);
ag(Gx, Uj);
H.g().z("Toolbar", Gx);
B("Toolbar", Gx);
Gx.prototype.M = Fx.prototype;
Gx.prototype.a = function() {
  return Gx.e.a.call(this)
};
Gx.prototype.pc = function() {
  return this.a().caption
};
Gx.prototype.getCaption = Gx.prototype.pc;
Gx.prototype.Od = function(a) {
  this.a().Od = a
};
Gx.prototype.setCaption = Gx.prototype.Od;
var Hx = {8:"backspace", 9:"tab", 13:"enter", 16:"shift", 17:"ctrl", 18:"alt", 19:"pause", 20:"caps-lock", 27:"esc", 32:"space", 33:"pg-up", 34:"pg-down", 35:"end", 36:"home", 37:"left", 38:"up", 39:"right", 40:"down", 45:"insert", 46:"delete", 48:"0", 49:"1", 50:"2", 51:"3", 52:"4", 53:"5", 54:"6", 55:"7", 56:"8", 57:"9", 59:"semicolon", 61:"equals", 65:"a", 66:"b", 67:"c", 68:"d", 69:"e", 70:"f", 71:"g", 72:"h", 73:"i", 74:"j", 75:"k", 76:"l", 77:"m", 78:"n", 79:"o", 80:"p", 81:"q", 82:"r", 83:"s", 
84:"t", 85:"u", 86:"v", 87:"w", 88:"x", 89:"y", 90:"z", 93:"context", 96:"num-0", 97:"num-1", 98:"num-2", 99:"num-3", 100:"num-4", 101:"num-5", 102:"num-6", 103:"num-7", 104:"num-8", 105:"num-9", 106:"num-multiply", 107:"num-plus", 109:"num-minus", 110:"num-period", 111:"num-division", 112:"f1", 113:"f2", 114:"f3", 115:"f4", 116:"f5", 117:"f6", 118:"f7", 119:"f8", 120:"f9", 121:"f10", 122:"f11", 123:"f12", 186:"semicolon", 187:"equals", 188:",", 190:".", 191:"/", 192:"~", 219:"open-square-bracket", 
220:"\\", 224:"win"};
function Ix(a) {
  this.Uv = {};
  this.$l = {xq:[], time:0};
  this.OS = zb(Jx);
  this.kJ = i;
  this.AQ = this.CQ = m;
  this.PT = i;
  this.Zl = a;
  G(this.Zl, "keydown", this.Rr, m, this);
  Hb && Pb && dc("1.8") && G(this.Zl, "keyup", this.AL, m, this);
  Ib && !Pb && (G(this.Zl, "keypress", this.DL, m, this), G(this.Zl, "keyup", this.EL, m, this))
}
var Kx;
C(Ix, lf);
var Jx = [27, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 123, 19], Lx = {eQ:"shortcut", dQ:"shortcut_"};
s = Ix.prototype;
s.pV = function(a, b) {
  var c = Mx, e = this.Uv, f = arguments;
  if(ka(f[1])) {
    for(var f = f[1], f = f.replace(/[ +]*\+[ +]*/g, "+").replace(/[ ]+/g, " ").toLowerCase(), f = f.split(" "), h = [], j, l = 0;j = f[l];l++) {
      var n = j.split("+"), o;
      j = 0;
      for(var u, t = 0;u = n[t];t++) {
        switch(u) {
          case "shift":
            j |= 1;
            continue;
          case "ctrl":
            j |= 2;
            continue;
          case "alt":
            j |= 4;
            continue;
          case "meta":
            j |= 8;
            continue
        }
        o = u;
        if(!Kx) {
          n = {};
          u = g;
          for(u in Hx) {
            n[Hx[u]] = u
          }
          Kx = n
        }
        o = Kx[o];
        break
      }
      h.push({keyCode:o, UM:j})
    }
    f = h
  }else {
    h = f;
    l = 1;
    ha(f[1]) && (h = f[1], l = 0);
    for(f = [];l < h.length;l += 2) {
      f.push({keyCode:h[l], UM:h[l + 1]})
    }
  }
  c(e, f, a)
};
s.n = function() {
  Ix.e.n.call(this);
  this.Uv = {};
  Ve(this.Zl, "keydown", this.Rr, m, this);
  Hb && Pb && dc("1.8") && Ve(this.Zl, "keyup", this.AL, m, this);
  Ib && !Pb && (Ve(this.Zl, "keypress", this.DL, m, this), Ve(this.Zl, "keyup", this.EL, m, this));
  this.Zl = k
};
s.dn = function(a) {
  return"shortcut_" + a
};
s.AL = function(a) {
  if(224 == a.keyCode) {
    this.TM = i, Vf(function() {
      this.TM = m
    }, 400, this)
  }else {
    var b = a.metaKey || this.TM;
    if((67 == a.keyCode || 88 == a.keyCode || 86 == a.keyCode) && b) {
      a.metaKey = b, this.Rr(a)
    }
  }
};
function Nx(a) {
  return Ib && !Pb && a.ctrlKey && a.altKey && !a.shiftKey
}
s.DL = function(a) {
  32 < a.keyCode && Nx(a) && (this.sM = i)
};
s.EL = function(a) {
  !this.sM && Nx(a) && this.Rr(a)
};
function Mx(a, b, c) {
  var e = b.shift(), e = e.keyCode & 255 | e.UM << 8, f = a[e];
  f && c && (0 == b.length || ka(f)) && d(Error("Keyboard shortcut conflicts with existing shortcut"));
  b.length ? (f || (f = a[e] = {}), Mx(f, b, c)) : a[e] = c
}
function Ox(a, b, c, e) {
  c = c || 0;
  return(e = (e || a.Uv)[b[c]]) && !ka(e) && 1 < b.length - c ? Ox(a, b, c + 1, e) : e
}
s.Rr = function(a) {
  var b;
  b = a.keyCode;
  if(16 == b || 17 == b || 18 == b) {
    b = m
  }else {
    var c = a.target, e = "TEXTAREA" == c.tagName || "INPUT" == c.tagName || "BUTTON" == c.tagName || "SELECT" == c.tagName, f = !e && (c.isContentEditable || c.ownerDocument && "on" == c.ownerDocument.designMode);
    b = !e && !f || this.OS[b] || this.AQ ? i : f ? m : this.PT && (a.altKey || a.ctrlKey || a.metaKey) ? i : "INPUT" == c.tagName && ("text" == c.type || "password" == c.type) ? 13 == b : "INPUT" == c.tagName || "BUTTON" == c.tagName ? 32 != b : m
  }
  if(b) {
    if("keydown" == a.type && Nx(a)) {
      this.sM = m
    }else {
      b = a.keyCode & 255 | ((a.shiftKey ? 1 : 0) | (a.ctrlKey ? 2 : 0) | (a.altKey ? 4 : 0) | (a.metaKey ? 8 : 0)) << 8;
      var h, j, c = va();
      this.$l.xq.length && 1500 >= c - this.$l.time ? h = Ox(this, this.$l.xq) : this.$l.xq.length = 0;
      h = h ? h[b] : this.Uv[b];
      h || (h = this.Uv[b], this.$l.xq = []);
      h && ka(h) ? j = h : h ? (this.$l.xq.push(b), this.$l.time = c, Pb && a.preventDefault()) : this.$l.xq.length = 0;
      j && (this.kJ && a.preventDefault(), this.CQ && a.stopPropagation(), b = a.target, h = this.dispatchEvent(new Px(Lx.eQ, j, b)), j = new Px(Lx.dQ + j, j, b), (h &= this.dispatchEvent(j)) || a.preventDefault(), this.$l.xq.length = 0)
    }
  }
};
function Px(a, b, c) {
  Ee.call(this, a, c);
  this.identifier = b
}
C(Px, Ee);
function Qx(a) {
  Fx.call(this, a);
  a.hasOwnProperty("isBusy") && (this.rf = a.isBusy);
  a.hasOwnProperty("isRetrievalError") && (this.sf = a.isRetrievalError);
  a.hasOwnProperty("enableSettings") && (this.wr = a.enableSettings)
}
C(Qx, Fx);
Qx.prototype.rf = m;
Qx.prototype.sf = m;
Qx.prototype.wr = m;
var Rx = new gl("etk-apptoolbar");
function Sx(a, b, c, e) {
  ox.call(this, a, b, c, z(e) ? e : Rx);
  this.Ub = new um(new uj({}), k, m);
  this.By = new Ix(document);
  this.By.kJ = m;
  this.By.pV("ENTER", 13);
  this.By.addEventListener("shortcut", A(this.NU, this), m);
  this.BK = new yh(this, "DefaultAction", c, bk(b, "DefaultAction"));
  H.g()
}
C(Sx, Gx);
B("tr.ui.v2.AppToolbar", Sx);
ag(Sx, Uj);
H.g().z("tr.ui.v2.AppToolbar", Sx);
s = Sx.prototype;
s.M = Qx.prototype;
s.Ub = k;
s.BK = k;
s.By = k;
s.a = function() {
  return Sx.e.a.call(this)
};
s.ye = k;
s.Vi = k;
s.zk = k;
s.l = function(a) {
  Sx.e.l.call(this, a);
  this.s = a;
  var b = Ac("div", k, a.children);
  this.ye = this.u().m("div");
  a.appendChild(this.ye);
  a = new Mv(new Hv({}), k, i);
  a.Na(this.ye);
  var a = a.b(), c = new Un(new pj({}), k, i);
  c.Na(a);
  c.Ms(i);
  c.xa(0);
  var e = new Mv(new Hv({}), k, i);
  e.Na(c.b());
  e.vO(m);
  this.zk = e.b();
  this.zk.style.setProperty("-webkit-flex-wrap", "nowrap");
  c = new Un(new pj({}), k, i);
  c.Na(a);
  c.Ms(i);
  c.xa(1);
  e = new Mv(new Hv({}), k, i);
  e.Na(c.b());
  this.Vi = e.b();
  for(c = b.children.length - 1;0 <= c;c--) {
    e = this.Vi, e.insertBefore(b.children[c], e.childNodes[0] || k)
  }
  b = new Un(new pj({}), k, i);
  b.Na(a);
  b.Ms(i);
  b.xa(0);
  b = b.b();
  this.Ah = new Nn({}, k, m);
  this.Ah.Na(b);
  F(this.Ah.b(), "etk-headersettingsbutton", i);
  this.PN(this.zk)
};
s.PN = function() {
  this.Ub.Na(this.zk);
  this.Ub.b().style.setProperty("white-space", "nowrap");
  F(this.Ub.b(), Rx.Sj + "-appname", i)
};
s.La = q("Vi");
s.k = function() {
  Sx.e.k.call(this);
  this.Ub.gc(m);
  this.Od(this.a().caption);
  this.ff(this.a().rf);
  this.xi(this.a().sf);
  this.Kv(this.a().wr)
};
s.n = function() {
  Sx.e.n.call(this)
};
s.pc = function() {
  return this.a().caption
};
Sx.prototype.getCaption = Sx.prototype.pc;
Sx.prototype.Od = function(a) {
  this.a().caption = a;
  this.Ub.ra(a);
  document.title = a
};
Sx.prototype.setCaption = Sx.prototype.Od;
Sx.prototype.Wh = function() {
  return this.a().rf
};
Sx.prototype.getIsBusy = Sx.prototype.Wh;
Sx.prototype.ff = function(a) {
  this.a().rf = a;
  this.hl(a);
  this.b()
};
Sx.prototype.setIsBusy = Sx.prototype.ff;
Sx.prototype.rg = function() {
  this.pe == k && (this.pe = this.u().m("span", "etk-apptoolbar-busyicon"));
  return this.pe
};
Sx.prototype.hl = function() {
  var a = this.zk;
  try {
    this.Wh() ? (D(a, "etk-apptoolbar-busy"), a.insertBefore(this.rg(), a.children[1])) : (E(a, "etk-apptoolbar-busy"), a.removeChild(this.rg()))
  }catch(b) {
  }
};
Sx.prototype.Yh = function() {
  return this.a().sf
};
Sx.prototype.getIsRetrievalError = Sx.prototype.Yh;
Sx.prototype.xi = function(a) {
  (this.a().sf = a) && this.ff(m);
  this.il(a)
};
Sx.prototype.setIsRetrievalError = Sx.prototype.xi;
Sx.prototype.tg = function() {
  this.Jk == k && (this.Jk = this.u().m("span", "etk-apptoolbar-retrievalerroricon"));
  return this.Jk
};
Sx.prototype.il = function() {
  var a = this.zk;
  try {
    this.Yh() ? (D(a, "etk-apptoolbar-retrievalerror"), a.insertBefore(this.tg(), a.children[1])) : (E(a, "etk-apptoolbar-retrievalerror"), a.removeChild(this.tg()))
  }catch(b) {
  }
};
Sx.prototype.fu = function() {
  return this.a().wr
};
Sx.prototype.getEnableSettings = Sx.prototype.fu;
Sx.prototype.Kv = function(a) {
  this.a().wr = a;
  this.Ah.Y(a);
  this.b()
};
Sx.prototype.setEnableSettings = Sx.prototype.Kv;
Sx.prototype.jE = function() {
  return this.Ah.xd()
};
Sx.prototype.getSettingsClickedEvent = Sx.prototype.jE;
Sx.prototype.NU = function(a) {
  this.BK.v(a)
};
function Tx(a, b, c, e) {
  var f = arguments.callee.caller;
  f.e && (Zw(a, b, c), f.e.constructor.apply(a, Array.prototype.slice.call(arguments, 3)))
}
function Ux(a, b) {
  return!z(b) ? a : a + "-" + b
}
;function Vx(a, b, c, e, f) {
  Tx(this, a, c, e, f);
  Wx(this);
  Xx(this);
  Yx();
  Zx(this);
  $x(this)
}
C(Vx, Yu);
H.g().z("Calendar", Vx);
Vx.prototype.Ab = r("tr-Calendar");
Vx.prototype.k = function() {
  Vx.e.k.call(this);
  this.b().tabIndex = -1
};
function Xx(a) {
  a.Dx = function(a, c, e, f) {
    this.Pm();
    var h = this.qa.createElement("div");
    h.id = "tr-Calendar-menu-select";
    h.className = this.Ab() + "-menu";
    this.tj = k;
    for(var j = this.qa.createElement("ul"), l = 0;l < c.length;l++) {
      var n = this.qa.m("li", k, c[l]);
      c[l] == f && (this.tj = n);
      j.appendChild(n)
    }
    h.appendChild(j);
    a.parentNode.appendChild(h);
    this.C = h;
    a === this.Um ? D(this.C, this.Ab() + "-menu-year") : D(this.C, this.Ab() + "-menu-month");
    this.tj || (this.tj = j.firstChild);
    this.tj.className = this.Ab() + "-menu-selected";
    this.qz = e;
    a = this.ma();
    a.i(this.C, "click", this.yE);
    a.i(ev(this, this.C), "key", this.zE);
    a.i(this.qa.Lb, "click", this.Pm);
    j.scrollTop = 325 + j.offsetTop;
    h.focus()
  }
}
function Yx() {
  Vx.prototype.GA = function(a) {
    a.stopPropagation();
    for(var a = [], b = this.vd.getFullYear() - 25, c = 0;50 > c;c++) {
      a.push("" + (b + c))
    }
    this.Dx(this.Um, a, this.FL, "" + this.vd.getFullYear())
  }
}
function Wx(a) {
  a.eB = function() {
    if(this.ur) {
      for(var a = this.ur;a.firstChild;) {
        a.removeChild(a.firstChild)
      }
      var c = this.qa.createElement("td");
      c.colSpan = ay(this) ? 5 : 4;
      var e = this.qa.createElement("div");
      e.width = "100%";
      cv(this, e, "\u25bc", this.HH, this.Ab() + "-month " + (this.Ab() + "-yearmonth"));
      this.Tm = cv(this, e, "", this.HH, this.Ab() + "-month " + (this.Ab() + "-yearmonth"));
      cv(this, c, "\u00ab", this.FG);
      c.appendChild(e);
      e = this.qa.createElement("td");
      e.colSpan = ay(this) ? 3 : 4;
      var f = this.qa.createElement("div");
      this.Um = cv(this, f, "", this.GA, this.Ab() + "-year " + (this.Ab() + "-yearmonth"));
      cv(this, f, "\u25bc", this.GA, this.Ab() + "-year " + (this.Ab() + "-yearmonth"));
      ay(this) ? (e.appendChild(f), cv(this, e, "\u00bb", this.wz)) : (cv(this, e, "\u00bb", this.wz), e.appendChild(f));
      ay(this) ? (a.appendChild(c), a.appendChild(e)) : (a.appendChild(e), a.appendChild(c));
      this.QA.setAttribute("tabindex", -1)
    }
  }
}
function ay(a) {
  var a = a.Di.Tj[0].toLowerCase(), b = i;
  a.indexOf("y") < a.indexOf("m") && (b = m);
  return b
}
Vx.prototype.bF = m;
function Zx(a) {
  a.setDate = function(a) {
    var c = a != this.W && !(a && this.W && a.getFullYear() == this.W.getFullYear() && a.getMonth() == this.W.getMonth() && a.getDate() == this.W.getDate());
    this.W = a && new uh(a);
    a && (this.vd.set(this.W), this.vd.setDate(1));
    av(this);
    this.dispatchEvent(new bv("select", this, this.W));
    this.bF || (a = this.W, c || (a = k), this.dispatchEvent(new bv("change", this, a)))
  }
}
function $x(a) {
  a.zL = function(a) {
    var c, e;
    switch(a.keyCode) {
      case 33:
        a.preventDefault();
        c = -1;
        break;
      case 34:
        a.preventDefault();
        c = 1;
        break;
      case 37:
        a.preventDefault();
        e = -1;
        break;
      case 39:
        a.preventDefault();
        e = 1;
        break;
      case 38:
        a.preventDefault();
        e = -7;
        break;
      case 40:
        a.preventDefault();
        e = 7;
        break;
      case 36:
        a.preventDefault(), this.dH();
      case 46:
        a.preventDefault(), this.cH();
      case 13:
        a.preventDefault();
        this.dispatchEvent(new bv("change", this, this.W));
        return;
      case 27:
        a.preventDefault();
        this.dispatchEvent(new bv("cancel", this, this.W));
        return;
      default:
        return
    }
    this.W ? (a = this.W.clone(), a.add(new Zi(0, c, e))) : (a = this.vd.clone(), a.setDate(1));
    this.bF = i;
    this.setDate(a);
    this.bF = m
  }
}
;function by(a, b, c) {
  mf.call(this, b);
  this.ce = a || new Yu;
  c || cy(this)
}
C(by, mf);
s = by.prototype;
s.ce = k;
s.oh = k;
s.jz = k;
s.Jo = i;
s.m = function() {
  by.e.m.call(this);
  this.b().className = "goog-popupdatepicker";
  this.oh = new gv(this.b())
};
function cy(a) {
  a.ZF = a.bq;
  a.bq = function() {
    this.ZF()
  }
}
s.k = function() {
  by.e.k.call(this);
  var a = H.g(), b = A(this.$u, this);
  a.dM ? b() : H.g().Tw.i(b, a)
};
s.$u = function() {
  if(!this.ce.Ra) {
    var a = this.b();
    a.style.visibility = "hidden";
    Cd(a, m);
    this.ce.Ka(a)
  }
  this.ma().i(this.ce, "change", this.cv);
  this.ma().i(this.ce, "cancel", this.fG)
};
s.n = function() {
  by.e.n.call(this);
  this.oh && (this.oh.ba(), this.oh = k);
  this.ce.ba();
  this.jz = this.ce = k
};
s.rb = r(m);
s.getDate = function() {
  return this.ce.getDate()
};
s.setDate = function(a) {
  this.ce.setDate(a)
};
s.qb = function(a) {
  this.ma().i(a, "mousedown", this.GO)
};
s.detach = function(a) {
  this.ma().H(a, "mousedown", this.GO)
};
s.jq = ba("Jo");
s.eM = m;
s.AA = function(a) {
  if(!this.eM) {
    var b = this.ce;
    b.vP = b.Di.VP;
    dv(b);
    b = this.ce;
    b.FO = m;
    fv(b);
    b = this.ce;
    b.FA = m;
    b.eB();
    av(b);
    b = this.ce;
    b.KH = m;
    fv(b);
    b = this.ce;
    b.Qw = m;
    b.tD && $u(b);
    b = this.ce;
    b.JH = m;
    b.uD && $u(b);
    b = this.ce;
    b.JO = m;
    b.eB();
    av(b);
    this.eM = i
  }
  this.jz = a;
  a = new Nf(a, 7);
  this.oh.uH(a);
  this.ma().H(this.ce, "change", this.cv);
  this.ce.setDate(k);
  this.dispatchEvent("show");
  this.ma().i(this.ce, "change", this.cv);
  this.oh.F(i);
  a.Jb(this.oh.b(), 2);
  this.Jo && this.b().focus()
};
s.GO = function(a) {
  this.AA(a.currentTarget)
};
s.Bu = function() {
  this.oh.F(m);
  this.Jo && this.jz && this.jz.focus()
};
s.cv = function(a) {
  this.Bu();
  this.dispatchEvent(a)
};
s.fG = function() {
  this.Bu();
  this.dispatchEvent(new Ee("cancel", this))
};
function U(a, b, c, e, f) {
  K.call(this, a, b, c, e, f);
  if(!w(this.a().timestamp) || isNaN(this.a().timestamp.getYear()) || this.a().di) {
    this.a().timestamp = new uh
  }
  this.gc(i);
  this.hD = new kv(this.Ot);
  this.mr = new wk(this.Ot);
  this.km = [];
  this.km.push(this.hD);
  var h = Xi.Tj[3].replace(/\//g, "-");
  this.km.push(new kv(h));
  e = Xi.Tj[3].replace(/-/g, "/");
  this.km.push(new kv(e));
  this.km.push(new kv(Xi.Tj[2].replace(/, y$/g, "")));
  h = h.replace(/-yy$/g, "");
  this.km.push(new kv(h));
  e = e.replace(/\/yy$/g, "");
  this.km.push(new kv(e));
  this.CJ = new Vx(a, 0, m);
  this.vf = new by(this.CJ, f, this.a().ON);
  this.Ca(this.vf);
  this.vT = new wm({});
  this.Bb = new P(this.vT, b, m);
  this.Ca(this.Bb);
  this.Vl = new Ik(this.b());
  this.Ca(this.Vl);
  this.Ke = new jv(this, "Changed", c, bk(b, "Changed"));
  this.xr = new Dh(this, "OnErrorChanged", c, bk(b, "OnErrorChanged"));
  a = Xi.Tj[this.Ot];
  this.Yf = [];
  b = 0;
  for(c = a[b];"d" != c && "y" != c && "M" != c;) {
    c = a[++b]
  }
  this.Ut = b;
  for(this.Yf.push(dy(c));a[b] == c;) {
    b++
  }
  for(this.Zm = "";"d" != a[b] && "y" != a[b] && "M" != a[b];) {
    c = a[b], this.Zm += c, b++
  }
  "" == this.Zm && d("Date parts 1 and 2 in the date format " + a + " are consecutive. No generic way to tell them apart!");
  c = a[b];
  for(this.Yf.push(dy(c));a[b] == c;) {
    b++
  }
  for(this.$n = "";"d" != a[b] && "y" != a[b] && "M" != a[b];) {
    c = a[b], this.$n += c, b++
  }
  "" == this.$n && d("Date parts 2 and 3 in the date format " + a + " are consecutive. No generic way to tell them apart!");
  c = a[b];
  for(this.Yf.push(dy(c));b < a.length && a[b] == c;) {
    b++
  }
  this.UA = k;
  b < a.length && (this.UA = a[b]);
  this.gz = new uh(this.a().timestamp)
}
C(U, rl);
B("tr.ui.DatePicker", U);
ag(U, Uj);
H.g().z("DatePicker", U);
s = U.prototype;
s.M = hv.prototype;
s.Ot = 2;
s.mr = k;
s.hD = k;
s.km = k;
s.CJ = k;
s.Ke = k;
s.vf = k;
s.Bb = k;
s.Vl = k;
s.gz = k;
s.a = function() {
  return U.e.a.call(this)
};
s.m = function() {
  this.Xb("DatePicker", "div", this.fa.J())
};
s.l = function(a) {
  U.e.l.call(this, a);
  F(a, "etk-dateentry", i);
  this.Ca(this.Bb, i);
  this.Ca(this.Vl, i);
  this.Ca(this.vf, i);
  a = this.a();
  this.Y(a.w);
  this.R(a.isEnabled);
  this.xm(a.timestamp);
  this.a().di && this.Bb.ra("");
  this.Pa(a.error);
  this.Vl.b().setAttribute("tabindex", -1);
  (a = this.Bb.na()) && a.setAttribute("spellcheck", m)
};
s.k = function() {
  U.e.k.call(this);
  this.eO(this.VK());
  this.a().ec && this.ym(this.a().Je);
  this.b();
  var a = this.ma();
  a.i(this.vf, "change", this.cv);
  a.i(this.vf, "cancel", this.fG);
  a.i(this.vf, "show", this.XT);
  a.i(this.Vl.b(), "click", this.mU);
  a.i(this.Vl.b(), "blur", this.gw);
  a.i(this.b(), "mouseover", this.eU);
  a.i(this.b(), "mouseout", this.dU);
  a.i(Yc(this.u()), "mousedown", this.hG);
  a.i(this.Bb.b(), "focus", this.kU);
  a.i(this.Bb.b(), "blur", this.$M);
  this.Bb.Ke.i(this.UU, this);
  this.a().QD || (a.i(this.Bb.Fa(), "keypress", this.bT), a.i(this.Bb.Fa(), "keydown", this.aT), a.i(this.Bb.Fa(), "click", this.Ey))
};
s.n = function() {
  U.e.n.call(this)
};
s.mU = function() {
  this.vf.oh.Gp || 150 > va() - this.vf.oh.AF ? (E(this.b(), "etk-dateentry-calendaropen"), this.vf.Bu()) : (D(this.b(), "etk-dateentry-calendaropen"), this.vf.AA(this.Bb.b()))
};
s.UU = function(a) {
  var b = this.Bb.wa();
  this.zd() && (this.a().ec = m);
  if("" == b || b == k) {
    return m
  }
  a: {
    for(var b = this.Bb.wa(), c = new uh, e = 0;e < this.km.length;e++) {
      if(0 < this.km[e].parse(b, c)) {
        b = c.W;
        break a
      }
    }
    b = k
  }
  if(!w(b)) {
    return this.Pa("Invalid date"), m
  }
  if(b = this.mr.$m(b)) {
    c = new hj;
    if(0 < nv(this.hD, b, c, 0, i)) {
      return ey(this, c), this.Pa(""), this.gw(a), i
    }
    this.Pa("Invalid date")
  }
  return m
};
s.XT = function() {
  this.jL() || this.vf.setDate(new uh(fy(this)))
};
s.cv = function(a) {
  this.vf.oh.w() == m && E(this.b(), "etk-dateentry-calendaropen");
  this.yd() && this.Pa("");
  a.yK && (ey(this, a.yK), this.gw(a));
  this.Bb.pb(i)
};
s.fG = function() {
  this.vf.oh.w() == m && E(this.b(), "etk-dateentry-calendaropen")
};
s.eU = function(a) {
  this.isEnabled() && D(this.b(), "etk-dateentry-hover");
  a.stopPropagation()
};
s.dU = function(a) {
  E(this.b(), "etk-dateentry-hover");
  a.stopPropagation()
};
s.hG = function(a) {
  this.vf.oh.w() || E(this.b(), "etk-dateentry-calendaropen");
  this.gw(a)
};
s.kU = function(a) {
  this.isEnabled() && (D(this.b(), "etk-dateentry-focused"), a.stopPropagation())
};
s.$M = function(a) {
  E(this.b(), "etk-dateentry-focused");
  a.stopPropagation()
};
s.jL = function() {
  return 1 > this.Bb.wa().length
};
U.prototype.getIsEmpty = U.prototype.jL;
U.prototype.ZV = function(a) {
  a && (this.xm(new uh), this.vf.setDate(new uh), this.Bb.ra(""))
};
U.prototype.setIsEmpty = U.prototype.ZV;
U.prototype.DS = function() {
  return fy(this)
};
U.prototype.getTimeStamp = U.prototype.DS;
function fy(a) {
  return new uh(a.a().timestamp)
}
U.prototype.nE = function() {
  this.zd() && d("Timestamp is not available.");
  return fy(this)
};
U.prototype.getTimestamp = U.prototype.nE;
U.prototype.fW = function(a) {
  this.xm(a)
};
U.prototype.setTimeStamp = U.prototype.fW;
U.prototype.ZR = function() {
  return this.a().QD
};
U.prototype.getFreeformEditing = U.prototype.ZR;
U.prototype.xm = function(a) {
  ey(this, a);
  this.gz = new uh(fy(this));
  document.activeElement == this.na() && this.na().select()
};
U.prototype.setTimestamp = U.prototype.xm;
U.prototype.VK = function() {
  return this.a().jC
};
U.prototype.getAllowCalendarAutoFocus = U.prototype.VK;
U.prototype.eO = function(a) {
  this.a().jC = a;
  this.vf.jq(a)
};
U.prototype.setAllowCalendarAutoFocus = U.prototype.eO;
function ey(a, b) {
  "string" == typeof b && (b = kj("" + b));
  a.a().timestamp = new uh(b);
  var c = a.a().timestamp;
  c != k && a.Bb.ra(a.mr.$m(c))
}
U.prototype.$t = q("Ke");
U.prototype.getChangedEvent = U.prototype.$t;
U.prototype.lk = q("xr");
U.prototype.getOnErrorChangedEvent = U.prototype.lk;
U.prototype.getError = function() {
  return this.a().error
};
U.prototype.getError = U.prototype.getError;
U.prototype.Pa = function(a) {
  this.a().error = a;
  this.Bb.Pa(a);
  if("" != a && a != k) {
    this.a().Hb = 16;
    var b = new Ee("change");
    this.xr.v(a, b)
  }
};
U.prototype.setError = U.prototype.Pa;
U.prototype.yd = function() {
  return"" == this.a().error || this.a().error === k || this.a().error == g ? m : i
};
U.prototype.getHasError = U.prototype.yd;
U.prototype.R = function(a) {
  this.a().isEnabled = a;
  this.Vl.Oa(a);
  this.Vl.b() && (this.Vl.b().disabled = !a);
  this.Bb.b() && this.Bb.R(a)
};
U.prototype.setIsEnabled = U.prototype.R;
U.prototype.pb = function(a) {
  this.Bb.pb(a)
};
U.prototype.setHasFocus = U.prototype.pb;
s = U.prototype;
s.ar = 0;
s.Yf = [];
s.Ut = 0;
s.Zm = "";
s.$n = "";
s.UA = k;
function dy(a) {
  if("d" == a) {
    return 0
  }
  if("M" == a) {
    return 1
  }
  if("y" == a) {
    return 2
  }
  d("Invalid character received!")
}
function gy(a, b, c) {
  if(b.length <= a.Ut) {
    return 3
  }
  var e = b.indexOf(a.Zm, a.Ut);
  if(0 > e) {
    return 3
  }
  b = b.indexOf(a.$n, e + 1);
  return 0 > b ? 3 : c <= e ? a.Yf[0] : c <= b ? a.Yf[1] : a.Yf[2]
}
function hy(a, b) {
  var c = a.Bb.Fa().value, e = [], f = c.indexOf(a.Zm, a.Ut), h = c.indexOf(a.$n, f + a.Zm.length);
  b == a.Yf[0] ? (e.push(a.Ut), e.push(f)) : b == a.Yf[1] ? (e.push(f + a.Zm.length), e.push(h)) : b == a.Yf[2] && (e.push(h + a.$n.length), w(a.UA) ? (c = c.indexOf(a.UA, h + a.$n.length), e.push(c)) : e.push(c.length));
  a.Bb.Fa().selectionStart = e[0];
  a.Bb.Fa().selectionEnd = e[1]
}
function iy(a, b, c) {
  for(var e = 0;a.Yf[e] != b && e < a.Yf.length;) {
    e++
  }
  e += c;
  e >= a.Yf.length && (e = 0);
  0 > e && (e = a.Yf.length - 1);
  return a.Yf[e]
}
s.bT = function() {
  this.ar = jy(this.Bb.Fa())
};
s.aT = function(a) {
  this.ar = jy(this.Bb.Fa());
  var b = gy(this, this.Bb.Fa().value, this.ar);
  if(38 == a.keyCode || 40 == a.keyCode) {
    var c = 1;
    40 == a.keyCode && (c = -1);
    var e = new uh(fy(this));
    0 == b ? e.setDate(e.getDate() + c) : 1 == b ? e.setMonth(e.getMonth() + c) : 2 == b && e.setFullYear(e.getFullYear() + c);
    ey(this, e);
    hy(this, b);
    a.preventDefault()
  }else {
    37 == a.keyCode ? (hy(this, iy(this, b, -1)), a.preventDefault()) : 39 == a.keyCode ? (hy(this, iy(this, b, 1)), a.preventDefault()) : 13 == a.keyCode ? this.gw(a) : this.ar = jy(this.Bb.Fa())
  }
};
s.Ey = function() {
  this.ar = jy(this.Bb.Fa());
  hy(this, gy(this, this.Bb.Fa().value, this.ar))
};
function jy(a) {
  var b = 0;
  if(document.selection) {
    a.focus(), b = document.selection.createRange(), b.moveStart("character", -a.value.length), b = b.text.length
  }else {
    if(a.selectionStart || "0" == a.selectionStart) {
      b = a.selectionStart
    }
  }
  return b
}
s.gw = function(a) {
  fy(this) && !fy(this).ay(this.gz) && (this.zd() && (this.a().ec = m), this.gz = new uh(fy(this)), L(this, "Timestamp"), this.Ke.v(fy(this), a))
};
s.Vh = function() {
  return this.Bb.b()
};
s.na = function() {
  return this.Bb.na()
};
s.Xe = r(i);
s.wn = function() {
  return this.a().Je
};
U.prototype.getUninitializedValue = U.prototype.wn;
U.prototype.ym = function(a) {
  this.a().Je = a;
  this.zd() && (this.Bb.ra(a), this.Pa(""))
};
U.prototype.setUninitializedValue = U.prototype.ym;
U.prototype.zd = function() {
  return this.a().ec
};
U.prototype.getIsUninitialized = U.prototype.zd;
U.prototype.vm = function(a) {
  (this.a().ec = a) ? this.ym(this.a().Je) : this.xm(this.a().timestamp)
};
U.prototype.setIsUninitialized = U.prototype.vm;
function ky() {
}
Kj.g().z("TickConverter", ky);
Kj.g().z(2, ky);
s = ky.prototype;
s.cB = "12";
s.Tx = "13";
s.aB = "14";
s.ul = function(a) {
  var b = this.aB;
  "1" == a ? b = this.cB : "2" == a && (b = this.Tx);
  fh.g().log("TickConverter converting " + a + " to " + b);
  return b
};
s.kr = p();
function ly() {
}
C(ly, ky);
Kj.g().z("SignConverter", ly);
Kj.g().z(1, ly);
ly.prototype.ul = function(a) {
  a = parseFloat(a);
  fh.g().log("SignConverter converting " + a);
  return 0 < a ? this.cB : 0 > a ? this.Tx : this.aB
};
function my(a, b) {
  "#" == a.charAt(0) && (a = a.slice(1));
  for(var a = a.toUpperCase(), c = [], e = 0;e < b;e++) {
    for(var f = 0;6 > f;f += 2) {
      var h = "0123456789ABCDEF".indexOf(a.charAt(f)), j = "0123456789ABCDEF".indexOf(a.charAt(f + 1));
      c.push((16 * h + j) / 255)
    }
    c.push(1)
  }
  return c
}
function ny(a) {
  "#" == a.charAt(0) && (a = a.slice(1));
  for(var a = a.toUpperCase(), b = Array(3), c = 0, e = 0;6 > e;e += 2) {
    var f = "0123456789ABCDEF".indexOf(a.charAt(e)), h = "0123456789ABCDEF".indexOf(a.charAt(e + 1));
    b[c] = 16 * f + h;
    c++
  }
  return b
}
function oy(a) {
  for(var b = "#", c, e, f = 0;3 > f;f++) {
    c = a[f] / 16, e = a[f] % 16, b += "0123456789ABCDEF".charAt(c) + "0123456789ABCDEF".charAt(e)
  }
  return b
}
function py(a) {
  if(0 == a.indexOf("rgb(")) {
    return a = a.replace("rgb(", "").replace(")", "").replace(" ", "").split(","), oy(a)
  }
  if(0 == a.indexOf("#")) {
    return a
  }
  d("Invalid Color format (" + a + ")")
}
;function qy(a) {
  mj.call(this, a);
  a.hasOwnProperty("isCounterVisible") && (this.hM = a.isCounterVisible);
  a.hasOwnProperty("value") && (this.value = a.value)
}
C(qy, mj);
qy.prototype.hM = m;
qy.prototype.value = 0;
function ry(a) {
  this.source = a.source;
  this.target = a.target
}
ry.prototype.source = "";
ry.prototype.target = "";
function sy(a) {
  this.le = yo.g().we(a.controlId);
  this.LL = a.identifierPropertyId;
  this.T = [];
  for(var b = 0;b < a.T.length;b++) {
    this.T.push(new ry(a.T[b]))
  }
}
sy.prototype.le = k;
sy.prototype.LL = "";
sy.prototype.T = k;
function ty(a, b, c, e, f) {
  a === g && (a = {});
  b === g && (b = k);
  c === g && (c = m);
  this.xK = a;
  K.call(this, a, b, c, e, f);
  Gj(this)
}
C(ty, K);
H.g().z("dataSource", ty);
s = ty.prototype;
s.sr = k;
s.xK = k;
s.eb = k;
s.af = k;
s.Om = k;
s.l = function(a) {
  ty.e.l.call(this, a);
  var a = this.xK, b = a.fieldsAsJson;
  this.eb = b !== g && b !== k ? JSON.parse(b) : [];
  this.Om = [];
  for(b = 0;b < a.dataMappings.length;b++) {
    var c = new sy(a.dataMappings[b]);
    this.Om.push(c);
    for(var e = 0;e < c.T.length;++e) {
      var f = c.T[e].source;
      -1 === this.eb.indexOf(f) && this.eb.push(f)
    }
  }
  tq.g().qb(this);
  tq.g().xf([this]);
  this.ag()
};
s.ag = p();
s.Ks = function(a) {
  var b;
  try {
    b = JSON.parse(a)
  }catch(c) {
    window.console.error("Error when parsing a JSON command: " + a);
    return
  }
  a = b.name;
  b = b.param;
  if(!("string" !== ga(a) || this[a] === g)) {
    var e = ga(b);
    if("array" === e) {
      switch(b.length) {
        case 1:
          this[a](b[0]);
          break;
        case 2:
          this[a](b[0], b[1]);
          break;
        case 3:
          this[a](b[0], b[1], b[2]);
          break;
        case 4:
          this[a](b[0], b[1], b[2], b[3]);
          break;
        case 5:
          this[a](b[0], b[1], b[2], b[3], b[4]);
          break;
        case 6:
          this[a](b[0], b[1], b[2], b[3], b[4], b[5]);
          break;
        default:
          this[a]()
      }
    }else {
      if("undefined" !== e) {
        this[a](b)
      }else {
        this[a]()
      }
    }
  }
};
s.fj = q("sr");
s.gA = ba("sr");
s.gn = q("eb");
s.qn = q("af");
s.rn = function() {
  return[]
};
s.np = r("");
function uy(a, b, c, e, f) {
  ty.call(this, a, b, c, e, f);
  this.iz = {};
  a = a.ric;
  this.UG = a !== g && a !== k ? a : "";
  Gj(this)
}
C(uy, ty);
H.g().z("RealtimeDataSource", uy);
s = uy.prototype;
s.UG = "";
s.iz = k;
s.ag = function() {
  tq.g().ag(this, [this.UG], [i])
};
s.Fq = function(a, b) {
  if(0 < this.Om.length) {
    for(var c = this.Om[0], e = m, f = 0;f < c.T.length;f++) {
      var h = c.T[f], j = h.target, h = b[h.source];
      h !== g && (h = h.Br, this.iz[j] != h && (this.iz[j] = h, e = i))
    }
    if(e) {
      var c = c.le, e = this.iz, f = [], j = [], l;
      for(l in e) {
        j.push(l), f.push(e[l])
      }
      0 < j.length && Gr(c, c.yV--, f, j)
    }
  }
};
s.Qq = p();
s.uv = p();
s.gn = q("eb");
s.rn = function() {
  return[this.UG]
};
s.qn = function() {
  return[]
};
function vy(a, b, c, e) {
  this.dd = b;
  this.jR = c - b;
  this.NC = e
}
vy.prototype.Tc = function(a) {
  if(!w(a) || isNaN(a)) {
    a = 0
  }
  for(var a = (a - this.dd) / this.jR * (this.NC.length - 1), b = this.NC[Math.floor(a)], c = this.NC[Math.ceil(a)], a = a - Math.floor(a), b = ny(b), c = ny(c), e = Array(3), f = 0;3 > f;f++) {
    var h = Math.abs(b[f] - c[f]) * a;
    e[f] = b[f] < c[f] ? b[f] + h : b[f] - h
  }
  return oy(e)
};
function wy(a, b, c, e) {
  uw.call(this, b, c, e);
  this.Hk = a
}
C(wy, Lw);
s = wy.prototype;
s.Hk = k;
s.jM = i;
s.dl = function() {
  this.Hk.Z() && wy.e.dl.call(this)
};
s.sG = function(a) {
  if(!xy(this.Hk)) {
    var b = wy.e.sG.call(this, a), c = xw(this);
    if(c != k && a.target != k) {
      var e = Cw(this);
      0 == a.button && c.id === a.target.id && this.Ok(!this.nf());
      D(e, this.Ec.gK)
    }
    if(this.jM && this.nf()) {
      this.jM = m;
      a = this.Hk;
      for(c = 0;c < a.V.Da();c++) {
        yy(a.V.getItem(c))
      }
    }
    return b
  }
};
s.iG = function(a) {
  if(!xy(this.Hk)) {
    return wy.e.iG.call(this, a)
  }
};
s.sy = function() {
  var a = wy.e.sy.call(this);
  return a == k ? a : !xy(a.Hk) && a.Hk.ob() ? a : a.sy()
};
s.uy = function() {
  var a = wy.e.uy.call(this);
  return a == k ? a : !xy(a.Hk) && a.Hk.ob() ? a : a.uy()
};
s.hL = function() {
  var a = this.Yt();
  return a ? Oa('<span class="', a, '"></span>') : Oa('<span style="display:none"></span>')
};
s.ZD = function() {
  return Oa('<span type="expand" class="', Hw(this), '"></span>')
};
function zy(a) {
  ij.call(this, a);
  a.hasOwnProperty("isCollapsed") && (this.isCollapsed = a.isCollapsed);
  a.hasOwnProperty("isEnabled") && (this.isEnabled = a.isEnabled);
  a.hasOwnProperty("isSelected") && (this.uc = a.isSelected);
  a.hasOwnProperty("itemID") && (this.Vf = a.itemID);
  if(a.hasOwnProperty("items")) {
    this.T = [];
    for(var b = a.items, c = 0;c < b.length;c++) {
      this.T.push(new zy(b[c]))
    }
  }
  a.hasOwnProperty("text") && (this.text = a.text)
}
C(zy, ij);
s = zy.prototype;
s.isCollapsed = i;
s.isEnabled = i;
s.uc = m;
s.Vf = "";
s.T = [];
s.text = "";
function Ay(a) {
  pl.call(this, a);
  if(a.hasOwnProperty("items")) {
    this.T = [];
    for(var b = a.items, c = 0;c < b.length;c++) {
      this.T.push(new zy(b[c]))
    }
  }
  a.hasOwnProperty("selectedItem") && (this.$b = a.selectedItem)
}
C(Ay, pl);
Ay.prototype.T = [];
Ay.prototype.$b = k;
function By(a, b, c, e) {
  K.call(this, a, k, c, g, g);
  z(e) && (this.tf = e);
  lg(this, m);
  this.V = new Cy(this);
  this.V.ri = this;
  this.Zb = new wy(this, "", Dy(this.tf));
  this.gM = new rm(this, "IsCollapsedChanged", c, i)
}
C(By, jl);
H.g().z("TreeMenuItem", By);
s = By.prototype;
s.M = zy.prototype;
s.tf = 1;
s.Zb = k;
s.V = k;
s.gM = k;
s.SE = m;
s.tI = m;
s.a = function() {
  return By.e.a.call(this)
};
s.vN = k;
s.wh = ba("vN");
s.getParent = q("vN");
function xy(a) {
  if(!a.Z()) {
    return i
  }
  for(var a = a.getParent(), b = 0;a != k && b <= Ey;) {
    if(!a.Z()) {
      return i
    }
    a = a.getParent();
    b++
  }
  return m
}
s.wa = function() {
  return this.a().text
};
By.prototype.getText = By.prototype.wa;
By.prototype.ra = function(a) {
  this.a().text = a;
  Iw(this.Zb, a);
  var b = this.Zb;
  b.cP = a;
  if(b = xw(b)) {
    b.title = a
  }
};
By.prototype.setText = By.prototype.ra;
By.prototype.nH = function() {
  var a = this.Zb, b = !xy(this), c = Cw(a);
  w(c) && (c.disabled = !b, c.disabled ? D(c, a.Ec.vK) : E(c, a.Ec.vK));
  for(a = 0;a < this.V.Da();a++) {
    b = this.V.getItem(a), b.R(b.Z())
  }
};
By.prototype.ko = function(a) {
  var b = this.Zb.b();
  b && yf.g().F(b, a)
};
By.prototype.Ir = function() {
  return this.a().isCollapsed
};
By.prototype.getIsCollapsed = By.prototype.Ir;
By.prototype.mO = function(a) {
  this.a().isCollapsed !== a && (this.a().isCollapsed = a, Fy(this, !a))
};
By.prototype.setIsCollapsed = By.prototype.mO;
s = By.prototype;
s.Tb = q("V");
s.tG = function() {
  var a = Cw(this.Zb);
  E(a, this.Zb.Ec.gK)
};
s.gN = function(a) {
  this.SE || (this.a().isCollapsed = !this.Zb.nf(), this.gM.v(this.a().isCollapsed, a))
};
function Fy(a, b) {
  a.SE = i;
  a.Zb.Ok(b);
  a.SE = m
}
s.l = function(a) {
  By.e.l.call(this, a)
};
s.bL = function() {
  return xw(this.Zb)
};
s.k = function() {
  By.e.k.call(this);
  this.tI = i;
  yy(this);
  Cw(this.Zb) != k && (G(Cw(this.Zb), "mouseout", A(this.tG, this)), G(this.Zb, "expand", A(this.gN, this)), G(this.Zb, "collapse", A(this.gN, this)));
  for(var a = this.a(), b = 0;b < a.T.length;b++) {
    this.V.add(new By(a.T[b], 0, i, this.tf + 1))
  }
};
function yy(a) {
  var b = a.a();
  a.ra(b.text);
  a.R(b.isEnabled);
  a.Y(b.w);
  a.mO(b.isCollapsed)
}
s.rb = r(m);
s.Xc = m;
s.im = function() {
  this.Xc = i
};
s.hm = function() {
  this.Xc = m
};
s.ni = function(a, b) {
  a.tf = this.tf + 1;
  a.Zb.Ec = Dy(a.tf);
  a.wh(this);
  a.Zb.getParent() != k && a.Zb.getParent().removeChild(a.Zb);
  Fy(this, i);
  this.Zb.Df(a.Zb, b, i);
  this.Ir() && Fy(this, m);
  this.Ca(a, !a.tI)
};
s.zj = function(a, b) {
  b = w(b) ? b : m;
  if(qf(this.Zb) > a) {
    var c = vf(this.Zb, a, i);
    b === m && c != k && c.ba()
  }
};
s.cg = function(a) {
  bl(this.V, a);
  this.Ir() || Fy(this, i)
};
By.prototype.setInsertItem = By.prototype.cg;
By.prototype.dg = function(a) {
  al(this.V, a);
  this.Ir() || Fy(this, i)
};
By.prototype.setRemoveItem = By.prototype.dg;
By.prototype.bg = function() {
  cl(this.V);
  this.Ir() || Fy(this, i)
};
By.prototype.setClear = By.prototype.bg;
By.prototype.Mv = function(a) {
  $k(this.V, a);
  this.Ir() || Fy(this, i)
};
By.prototype.setItemsAsJson = By.prototype.Mv;
function Cy(a) {
  Wk.call(this, a)
}
C(Cy, Zk);
function Gy(a, b, c, e) {
  gh.call(this, a, e);
  this.X = b;
  this.Ga = c
}
C(Gy, gh);
Gy.prototype.type = "etk_TreeMenuItem_changed";
Gy.prototype.X = k;
Gy.prototype.Jc = q("X");
Gy.prototype.getPrevious = Gy.prototype.Jc;
Gy.prototype.Ga = k;
Gy.prototype.qc = q("Ga");
Gy.prototype.getCurrent = Gy.prototype.qc;
function Hy(a, b, c, e) {
  I.call(this, a, w(b) ? b : "Changed", c, e)
}
C(Hy, I);
Hy.prototype.X = k;
Hy.prototype.i = function(a, b) {
  G(this.B, "etk_TreeMenuItem_changed", a, g, b)
};
Hy.prototype.listen = Hy.prototype.i;
Hy.prototype.H = function(a, b) {
  Ve(this.B, "etk_TreeMenuItem_changed", a, g, b)
};
Hy.prototype.unlisten = Hy.prototype.H;
Hy.prototype.la = function() {
  Ze(this.B, "etk_TreeMenuItem_changed")
};
Hy.prototype.unlistenAll = Hy.prototype.la;
Hy.prototype.v = function(a, b) {
  var c = new Gy(b, this.X, a, this.aa);
  this.X = a;
  Ah(this) && (this.B.dispatchEvent(c), this.md == i && (c = "", w(a) && (c = a.P()), wh.g().Nd(this.aa.P(), this.Fc, c, this.Kc)))
};
var Iy = new gl("tr-TreeMenu");
function Jy(a, b, c, e, f) {
  K.call(this, a, b, c, z(e) ? e : Iy, f);
  this.gc(i);
  this.V = new Cy(this);
  this.V.ri = this;
  this.Fd = new Uw("", Dy(0));
  this.Ba(k);
  this.pf = bk(b, "SelectionChanged");
  this.Ej = new Hy(this, "SelectionChanged", c, this.pf)
}
C(Jy, rl);
B("tr.ui.TreeMenu", Jy);
ag(Jy, Uj);
H.g().z("TreeMenu", Jy);
s = Jy.prototype;
s.M = Ay.prototype;
s.kn = r(m);
s.Ej = k;
s.V = k;
s.Fd = k;
s.pf = i;
var Ey = 3;
s = Jy.prototype;
s.l = function(a) {
  Jy.e.l.call(this, a);
  this.aj("etk-treemenu", i);
  this.Fd.Na(this.b())
};
s.m = function() {
  this.Xb("TreeMenu", "div", "")
};
s.k = function() {
  Jy.e.k.call(this);
  this.qj();
  var a = this.Fd;
  if(a.tq != m) {
    a.tq = m;
    if(a.Ra) {
      var b = Cw(a);
      b && (b.className = a.mu())
    }
    a.Ea() == a && rf(a, 0) && a.Ba(rf(a, 0))
  }
  D(this.b(), Jy.sX);
  a = this.Fd.b();
  G(a, "click", this.LU, m, this);
  a = this.a();
  for(b = 0;b < a.T.length;b++) {
    var c = a.T[b], e = new By(c, 0, i, 1);
    this.V.add(e);
    c.uc && this.Ba(e)
  }
};
s.LU = function(a) {
  var b = this.Ea();
  w(b) && this.Ej.v(b, a);
  return i
};
s.n = function() {
  Jy.e.n.call(this)
};
s.qj = p();
s.Xc = m;
s.im = function() {
  this.Xc = i
};
s.hm = function() {
  this.Xc = m
};
s.ni = function(a, b) {
  a.tf = 1;
  a.Zb.Ec = Dy(a.tf);
  a.wh(this);
  a.Zb.getParent() != k && a.Zb.getParent().removeChild(a.Zb);
  this.Fd.Df(a.Zb, b, i);
  this.Ca(a, !a.tI)
};
s.zj = function(a, b) {
  b = w(b) ? b : m;
  if(qf(this.Fd) > a) {
    var c = vf(this.Fd, a, i);
    b === m && c != k && c.ba();
    (c = this.Ea()) && ll(c) != this && this.Ba(k)
  }
};
s.ei = r(i);
s.cg = function(a) {
  var b = this.Ea();
  bl(this.V, a);
  b && ll(b) == this ? this.Ba(b) : this.Ba(k)
};
Jy.prototype.setInsertItem = Jy.prototype.cg;
Jy.prototype.dg = function(a) {
  var b = this.Ea();
  al(this.V, a);
  b && ll(b) == this ? this.Ba(b) : this.Ba(k)
};
Jy.prototype.setRemoveItem = Jy.prototype.dg;
Jy.prototype.bg = function() {
  var a = this.Ea();
  cl(this.V);
  a && ll(a) == this ? this.Ba(a) : this.Ba(k)
};
Jy.prototype.setClear = Jy.prototype.bg;
Jy.prototype.Mv = function(a) {
  var b = this.Ea();
  $k(this.V, a);
  b && ll(b) == this ? this.Ba(b) : this.Ba(k)
};
Jy.prototype.setItemsAsJson = Jy.prototype.Mv;
Jy.prototype.Ea = function() {
  return w(this.Fd.Ea()) ? this.Fd.Ea().Hk : k
};
Jy.prototype.getSelectedItem = Jy.prototype.Ea;
Jy.prototype.Ba = function(a) {
  var b = a;
  "string" == typeof a && (b = H.g().Ia(a));
  w(b) ? (ll(b) != this && d("setSelectedItem: Item was not found. Is the item in the list of items of the control?"), this.a().$b = b, this.Fd.Ba(b.Zb), b.Zb.Vz()) : (this.a().$b = k, this.Fd.Ba(k))
};
Jy.prototype.getSelectedItem = Jy.prototype.Ea;
Jy.prototype.Tb = q("V");
Jy.prototype.getItems = Jy.prototype.Tb;
Jy.prototype.Mr = q("Ej");
Jy.prototype.getSelectionChangedEvent = Jy.prototype.Mr;
Jy.prototype.R = function(a) {
  this.a().isEnabled = a;
  var b = this.b();
  b.disabled = !a;
  b.disabled ? D(b, this.Fd.Ec.sK) : E(b, this.Fd.Ec.sK);
  for(a = 0;a < this.V.Da();a++) {
    b = this.V.getItem(a), b.R(b.Z())
  }
};
Jy.prototype.setIsEnabled = Jy.prototype.R;
function Dy(a) {
  if(0 < a) {
    var b = "level" + a
  }
  return{rx:"", Qy:0, rK:Ux("tr-tree-root") + " " + Ux("tr-tree-item", b), oK:Ux("tr-tree-hide-root"), pK:Ux("tr-tree-item", b), eK:Ux("tr-tree-children", b), fK:Ux("tr-tree-children-nolines", b), uK:Ux("tr-tree-row", b), qK:Ux("tr-tree-item-label", b), Wo:Ux("tr-tree-icon", b), hK:Ux("tr-tree-expand-icon", b), lK:Ux("tr-tree-expand-icon-plus", b), kK:Ux("tr-tree-expand-icon-minus", b), nK:Ux("tr-tree-expand-icon-tplus", b), mK:Ux("tr-tree-expand-icon-tminus", b), jK:Ux("tr-tree-expand-icon-lplus", 
  b), iK:Ux("tr-tree-expand-icon-lminus", b), aD:Ux("tr-tree-expand-icon-t", b), $C:Ux("tr-tree-expand-icon-l", b), ZC:Ux("tr-tree-expand-icon-blank", b), bD:Ux("tr-tree-expanded-folder-icon", b), XC:Ux("tr-tree-collapsed-folder-icon", b), dD:Ux("tr-tree-file-icon", b), cD:Ux("tr-tree-expanded-folder-icon", b), YC:Ux("tr-tree-collapsed-folder-icon", b), tK:Ux("tr-tree-row-selected", b), gK:Ux("tr-tree-row-clicked", b), MY:3, sK:Ux("tr-tree-root-disabled"), vK:Ux("tr-tree-row-disabled", b)}
}
;function Ky(a) {
  ij.call(this, a);
  a.hasOwnProperty("highlightStyle") && (this.Hb = a.highlightStyle);
  a.hasOwnProperty("isUninitialized") && (this.ec = a.isUninitialized);
  a.hasOwnProperty("style") && (this.style = a.style);
  a.hasOwnProperty("textAlign") && (this.textAlign = a.textAlign);
  a.hasOwnProperty("textOverflow") && (this.ya = a.textOverflow);
  a.hasOwnProperty("timestamp") && (this.timestamp = kj(a.timestamp));
  a.hasOwnProperty("uninitializedValue") && (this.Je = a.uninitializedValue)
}
C(Ky, ij);
s = Ky.prototype;
s.Hb = Ni;
s.ec = m;
s.style = 0;
s.textAlign = 0;
s.ya = 0;
s.timestamp = k;
s.Je = "";
function Ly(a, b, c) {
  gh.call(this, a, c)
}
C(Ly, gh);
Ly.prototype.type = "etk_Chart_changed";
function My(a) {
  this.B = new lf;
  this.aa = a
}
s = My.prototype;
s.aa = k;
s.i = function(a, b) {
  G(this.B, "etk_Chart_changed", a, g, b)
};
s.H = function(a, b) {
  Ve(this.B, "etk_Chart_changed", a, g, b)
};
s.la = function() {
  Ze(this.B, "etk_Chart_changed")
};
s.v = function(a, b) {
  this.B.dispatchEvent(new Ly(b, 0, this.aa))
};
function Ny(a) {
  pl.call(this, a);
  for(var b in a) {
    a.hasOwnProperty(b) && (this[b] = a[b])
  }
}
C(Ny, pl);
C(Ny, pl);
function Oy(a, b, c) {
  K.call(this, a, b, c, g, g);
  this.wb = new My(this);
  this.re = k
}
C(Oy, rl);
ag(Oy, yf);
H.g().z("BusinessChart", Oy);
s = Oy.prototype;
s.M = Ny.prototype;
s.Oi = m;
s.a = function() {
  return Oy.e.a.call(this)
};
s.TD = function() {
  var a = this.a();
  return{lQ:a.seasonalityEnabled, TI:a.schemeType, PP:a.legendDisplayMode, rQ:a.YAxisType, xB:a.title || "Business Chart"}
};
s.yh = function(a) {
  this.re && this.re.MV(a, i)
};
s.Ha = function() {
  return this.a().width
};
s.xa = function(a) {
  this.a().width = a;
  var b = this.b();
  b && (0 < a ? this.Oi = m : (a = b.parentElement.clientWidth, this.Oi = i), 0 == a && (a = 300), wd(b, a))
};
s.va = function() {
  return this.a().height
};
s.Ma = function(a) {
  this.a().height = a;
  var b = this.b();
  b && (0 < a ? this.Oi = m : (a = b.parentElement.clientHeight, this.Oi = i), 0 == a && (a = 304), xd(b, a))
};
s.wb = k;
s.xd = q("wb");
s.l = function(a) {
  Oy.e.l.call(this, a)
};
s.k = function() {
  Oy.e.k.call(this);
  var a = this.a(), b = a.appServerId;
  b || (b = a.ChartID);
  b || (b = "uniqueId");
  this.b().setAttribute("id", b);
  for(var c = 0;c < this.Pb().Da();c++) {
    this.Pb().getItem(c).qb()
  }
  this.xa(a.width);
  this.Ma(a.height);
  var c = a.seriesParameterList || [{FieldNameForXAxis:"X", FieldNamesForYAxisSeries:["Y1"], LineStyle:0, RenderingType:0, ShowMarker:i, XAxisLabelRotateDegree:0, XAxisTitle:"", XAxisType:2, YAxisSharingCode:"", YAxisTitle:""}], a = window[b + "_data"] || a.jsonData || a.data || {FP:[{MB:"X", $B:["Apple", "Orange", "Peach", "Pineapple", "Mango"]}, {MB:"Y1", $B:[1893399.99, 1285522.28, 1983589.44, 2060832.89, 2571083.09]}]}, e = this.TD();
  this.re = (new ChartHelper).createBusinessChart(b, c, a, e);
  this.re.qD();
  this.re.BQ = this.Oi
};
s.n = function() {
  Oy.e.n.call(this)
};
function Py(a) {
  ij.call(this, a);
  a.hasOwnProperty("imageName") && (this.Sf = a.imageName)
}
C(Py, ij);
Py.prototype.Sf = "";
function Qy(a) {
  Py.call(this, a);
  a.hasOwnProperty("height") && (this.height = a.height);
  a.hasOwnProperty("width") && (this.width = a.width)
}
C(Qy, Py);
Qy.prototype.height = 0;
Qy.prototype.width = 0;
function Ry(a) {
  pl.call(this, a);
  a.hasOwnProperty("displayFormat") && (this.wl = a.displayFormat);
  a.hasOwnProperty("displayPrecision") && (this.xl = a.displayPrecision);
  a.hasOwnProperty("displayText") && (this.Rm = a.displayText);
  a.hasOwnProperty("error") && (this.error = a.error);
  a.hasOwnProperty("fractionMode") && (this.Fl = a.fractionMode);
  a.hasOwnProperty("maximum") && (this.hi = a.maximum);
  a.hasOwnProperty("minimum") && (this.ii = a.minimum);
  a.hasOwnProperty("options") && (this.options = a.options);
  a.hasOwnProperty("toggleState") && (this.Rc = a.toggleState);
  a.hasOwnProperty("unitPrefix") && (this.bl = a.unitPrefix);
  a.hasOwnProperty("unitSuffix") && (this.cl = a.unitSuffix);
  a.hasOwnProperty("value") && (this.value = a.value);
  a.hasOwnProperty("value2") && (this.Ao = a.value2)
}
C(Ry, pl);
s = Ry.prototype;
s.wl = 0;
s.xl = 0;
s.Rm = "";
s.error = "";
s.Fl = 0;
s.hi = 1E3;
s.ii = 0;
s.options = 0;
s.Rc = 0;
s.bl = "";
s.cl = "";
s.value = 0;
s.Ao = 0;
function Sy(a) {
  ij.call(this, a);
  a.hasOwnProperty("variableName") && (this.jB = a.variableName)
}
C(Sy, Iq);
Sy.prototype.jB = "";
function Ty(a, b) {
  Jq.call(this, a, b)
}
C(Ty, Jq);
Ty.prototype.M = Sy.prototype;
Ty.prototype.wg = r("SolvedForBehavior");
Ty.prototype.a = function() {
  return Ty.e.a.call(this)
};
H.g().z("SolvedForBehavior", Ty);
Ty.prototype.qb = function() {
  if(!this.ua) {
    this.ua = i;
    var a = this.Ia().b();
    G(a, "click", this.cN, m, this)
  }
};
Ty.prototype.detach = function() {
  if(this.ua) {
    this.ua = m;
    var a = this.Ia().b();
    Ve(a, "click", this.cN, m, this)
  }
};
Ty.prototype.cN = function() {
  var a = Uy.g();
  a.NP && (a.fD || a.fD.Ia().bc(Ni), a.fD = this, this.Ia().bc(8))
};
Ty.prototype.zy = function() {
  return this.a().jB
};
function Uy() {
}
x(Uy);
Uy.prototype.NP = m;
Uy.prototype.fD = k;
function Vy() {
}
C(Vy, yf);
x(Vy);
s = Vy.prototype;
s.m = function(a) {
  var a = Vy.e.m.call(this, a), b = Ac("textarea");
  a.appendChild(b);
  F(a, this.J(), i);
  return a
};
s.Ka = function(a, b) {
  var b = Vy.e.Ka.call(this, a, b), c = Ac("textarea");
  b.appendChild(c);
  F(b, this.J(), i);
  return b
};
s.La = function(a) {
  return a.firstChild
};
s.J = function() {
  return Wy
};
s.rb = r(i);
s.XH = lm.g();
s.$H = km.g();
s.ra = function(a, b) {
  var c = a.La();
  c != k && (c.innerText = b)
};
s.wa = function(a) {
  a = a.La();
  return a != k ? a.innerText : ""
};
s.Ua = function(a, b) {
  dd(a.La(), "text-align", this.XH[b])
};
s.Va = function(a, b) {
  0 !== b && (dd(a.La(), "text-overflow", this.$H[b]), dd(a.La(), "overflow", "hidden"), dd(a.La(), "white-space", "nowrap"))
};
var Wy = "etk-textarea";
function Xy(a, b, c) {
  kg.call(this, k, Vy.g());
  Zw(this, a, c);
  na(a) ? this.Bd(a) : this.Bd(w(a) ? eval("(" + a + ")") : {});
  this.gc(i);
  pg(this, 32, m)
}
C(Xy, kg);
ag(Xy, Vy);
H.g().z("TextArea", Xy);
s = Xy.prototype;
s.l = function(a) {
  Xy.e.l.call(this, a);
  a = this.a();
  w(a.text) && this.ra(a.text);
  w(a.visible) && this.F(a.visible);
  w(a.enabled) && this.Oa(a.enabled)
};
s.wa = function() {
  return this.fa.wa(this)
};
s.ra = function(a) {
  this.a().text = a;
  this.La().innerText = a
};
s.Se = function() {
  return this.a().visible
};
s.F = function(a, b) {
  this.a().visible = a;
  return Xy.e.F.call(this, a, b)
};
s.Y = function(a) {
  this.F(a)
};
s.ob = function() {
  return this.w()
};
s.Oa = function(a) {
  this.a().enabled = a;
  this.La() && (this.La().disabled = !a);
  return Xy.e.Oa.call(this, a)
};
s.R = function(a) {
  this.Oa(a)
};
s.Z = function() {
  return this.isEnabled()
};
s.pb = p();
s.Mb = function() {
  return this.a().textAlign
};
s.Ua = function(a) {
  this.a().textAlign = a;
  this.fa.Ua(a)
};
s.Yb = function() {
  return this.a().textOverflow
};
s.Va = function(a) {
  this.a().textOverflow = a;
  this.fa.Va(a)
};
s.Pb = function() {
  this.ga || (this.ga = new Tj);
  return this.ga
};
s.jl = p();
s.kd = function() {
  return this.a().Qd
};
Xy.prototype.getTabEnabled = Xy.prototype.kd;
Xy.prototype.fe = function() {
  return this.a().zq
};
Xy.prototype.getTabOrder = Xy.prototype.fe;
s = Xy.prototype;
s.Td = function() {
  return this.a().Hb
};
s.bc = function(a) {
  this.a().rT = a
};
s.pn = p();
s.Nl = function() {
  return Xy.e.Nl.call(this)
};
s.Ib = k;
s.wm = ba("Ib");
s.tp = q("Ib");
s.Xe = r(i);
s.ei = r(i);
function Yy(a) {
  this.sa = [];
  this.Gh = "#999999";
  this.Mi = 1;
  this.Jw = this.Dw = this.Cw = this.Fw = this.Hh = k;
  this.Go = a;
  this.Gw = 0;
  this.Gd = this.kb = k;
  this.Li = this.EB = this.XP = m;
  this.Hw = g;
  this.Cf = k
}
Yy.prototype.A = function(a, b, c) {
  this.sa.push(a);
  this.sa.push(b);
  this.sa.push(c);
  this.Gw += 1;
  this.EB = i
};
function Zy(a) {
  this.length = a.length || a;
  for(var b = 0;b < this.length;b++) {
    this[b] = a[b] || 0
  }
}
Zy.prototype.BYTES_PER_ELEMENT = 4;
Zy.prototype.set = function(a, b) {
  for(var b = b || 0, c = 0;c < a.length && b + c < this.length;c++) {
    this[b + c] = a[c]
  }
};
Zy.prototype.toString = Array.prototype.join;
"undefined" == typeof Float32Array && (Zy.BYTES_PER_ELEMENT = 4, Zy.prototype.BYTES_PER_ELEMENT = Zy.prototype.BYTES_PER_ELEMENT, Zy.prototype.set = Zy.prototype.set, Zy.prototype.toString = Zy.prototype.toString, B("Float32Array", Zy));
function $y() {
  var a = new Float32Array(16);
  a[0] = a[5] = a[10] = a[15] = 1;
  return a
}
function az(a) {
  a[0] = 1;
  a[1] = 0;
  a[2] = 0;
  a[3] = 0;
  a[4] = 0;
  a[5] = 1;
  a[6] = 0;
  a[7] = 0;
  a[8] = 0;
  a[9] = 0;
  a[10] = 1;
  a[11] = 0;
  a[12] = 0;
  a[13] = 0;
  a[14] = 0;
  a[15] = 1
}
function bz(a, b, c) {
  var e = a[0], f = a[1], h = a[2], j = a[3], l = a[4], n = a[5], o = a[6], u = a[7], t = a[8], v = a[9], y = a[10], J = a[11], M = a[12], oa = a[13], Q = a[14], a = a[15], ia = b[0], Pa = b[1], jb = b[2], Ya = b[3], Db = b[4], Vb = b[5], nc = b[6], Fc = b[7], He = b[8], Ie = b[9], Je = b[10], Pe = b[11], Bb = b[12], Kn = b[13], Ln = b[14], b = b[15];
  c[0] = e * ia + l * Pa + t * jb + M * Ya;
  c[1] = f * ia + n * Pa + v * jb + oa * Ya;
  c[2] = h * ia + o * Pa + y * jb + Q * Ya;
  c[3] = j * ia + u * Pa + J * jb + a * Ya;
  c[4] = e * Db + l * Vb + t * nc + M * Fc;
  c[5] = f * Db + n * Vb + v * nc + oa * Fc;
  c[6] = h * Db + o * Vb + y * nc + Q * Fc;
  c[7] = j * Db + u * Vb + J * nc + a * Fc;
  c[8] = e * He + l * Ie + t * Je + M * Pe;
  c[9] = f * He + n * Ie + v * Je + oa * Pe;
  c[10] = h * He + o * Ie + y * Je + Q * Pe;
  c[11] = j * He + u * Ie + J * Je + a * Pe;
  c[12] = e * Bb + l * Kn + t * Ln + M * b;
  c[13] = f * Bb + n * Kn + v * Ln + oa * b;
  c[14] = h * Bb + o * Kn + y * Ln + Q * b;
  c[15] = j * Bb + u * Kn + J * Ln + a * b
}
function cz(a, b) {
  var c = a[0], e = a[1], f = a[2], h = a[3], j = a[4], l = a[5], n = a[6], o = a[7], u = a[8], t = a[9], v = a[10], y = a[11], J = a[12], M = a[13], oa = a[14], Q = a[15], ia = c * l - e * j, Pa = c * n - f * j, jb = c * o - h * j, Ya = e * n - f * l, Db = e * o - h * l, Vb = f * o - h * n, nc = u * M - t * J, Fc = u * oa - v * J, He = u * Q - y * J, Ie = t * oa - v * M, Je = t * Q - y * M, Pe = v * Q - y * oa, Bb = ia * Pe - Pa * Je + jb * Ie + Ya * He - Db * Fc + Vb * nc;
  0 != Bb && (Bb = 1 / Bb, b[0] = (l * Pe - n * Je + o * Ie) * Bb, b[1] = (-e * Pe + f * Je - h * Ie) * Bb, b[2] = (M * Vb - oa * Db + Q * Ya) * Bb, b[3] = (-t * Vb + v * Db - y * Ya) * Bb, b[4] = (-j * Pe + n * He - o * Fc) * Bb, b[5] = (c * Pe - f * He + h * Fc) * Bb, b[6] = (-J * Vb + oa * jb - Q * Pa) * Bb, b[7] = (u * Vb - v * jb + y * Pa) * Bb, b[8] = (j * Je - l * He + o * nc) * Bb, b[9] = (-c * Je + e * He - h * nc) * Bb, b[10] = (J * Db - M * jb + Q * ia) * Bb, b[11] = (-u * Db + t * jb - 
  y * ia) * Bb, b[12] = (-j * Ie + l * Fc - n * nc) * Bb, b[13] = (c * Ie - e * Fc + f * nc) * Bb, b[14] = (-J * Ya + M * Pa - oa * ia) * Bb, b[15] = (u * Ya - t * Pa + v * ia) * Bb)
}
function dz(a, b, c) {
  var e = b[0], f = b[1], b = b[2];
  c[0] = e * a[0] + f * a[4] + b * a[8] + a[12];
  c[1] = e * a[1] + f * a[5] + b * a[9] + a[13];
  c[2] = e * a[2] + f * a[6] + b * a[10] + a[14]
}
function ez(a, b, c, e, f) {
  var h = a[0], j = a[1], l = a[2], n = a[3], o = a[4], u = a[5], t = a[6], v = a[7], y = a[8], J = a[9], M = a[10], oa = a[11], Q = Math.cos(b), ia = Math.sin(b), Pa = 1 - Q, b = c * c * Pa + Q, jb = c * e * Pa + f * ia, Ya = c * f * Pa - e * ia, Db = c * e * Pa - f * ia, Vb = e * e * Pa + Q, nc = e * f * Pa + c * ia, Fc = c * f * Pa + e * ia, c = e * f * Pa - c * ia, f = f * f * Pa + Q, Q = a[12], e = a[13], Pa = a[14], ia = a[15];
  a[0] = h * b + o * jb + y * Ya;
  a[1] = j * b + u * jb + J * Ya;
  a[2] = l * b + t * jb + M * Ya;
  a[3] = n * b + v * jb + oa * Ya;
  a[4] = h * Db + o * Vb + y * nc;
  a[5] = j * Db + u * Vb + J * nc;
  a[6] = l * Db + t * Vb + M * nc;
  a[7] = n * Db + v * Vb + oa * nc;
  a[8] = h * Fc + o * c + y * f;
  a[9] = j * Fc + u * c + J * f;
  a[10] = l * Fc + t * c + M * f;
  a[11] = n * Fc + v * c + oa * f;
  a[12] = Q;
  a[13] = e;
  a[14] = Pa;
  a[15] = ia
}
new Float32Array(3);
new Float32Array(3);
new Float32Array(4);
new Float32Array(4);
new Float32Array(4);
new Float32Array(16);
function fz() {
}
C(fz, yf);
x(fz);
s = fz.prototype;
s.J = r("goog-tab");
s.Of = r("tab");
s.m = function(a) {
  var b = fz.e.m.call(this, a);
  (a = a.rc()) && this.Vb(b, a);
  return b
};
s.Ka = function(a, b) {
  var b = fz.e.Ka.call(this, a, b), c = this.rc(b);
  c && a.sA(c);
  if(a.uc() && (c = a.getParent()) && ma(c.pq)) {
    a.He(8, m), c.pq(a)
  }
  return b
};
s.rc = function(a) {
  return a.title || ""
};
s.Vb = function(a, b) {
  a && (a.title = b || "")
};
function gz(a, b, c) {
  kg.call(this, a, b || fz.g(), c);
  pg(this, 8, i);
  rg(this, 9)
}
C(gz, kg);
gz.prototype.rc = q("Ng");
gz.prototype.Vb = function(a) {
  this.fa.Vb(this.b(), a);
  this.sA(a)
};
gz.prototype.sA = ba("Ng");
cg("goog-tab", function() {
  return new gz(k)
});
function hz(a, b, c, e) {
  try {
    this.Aa = na(a) ? a : w(a) ? eval("(" + a + ")") : {}
  }catch(f) {
    fh.g().log("Error converting options string to json.")
  }
  c = c || iz.g();
  this.Bc = new gz(k, c, e);
  b && (this.Bc.Zy = i, this.Bc.mq(this.Aa.appServerId), wh.g().$p(this.Bc));
  this.Aa.hg = z(this.Aa.hg) ? this.Aa.hg : i;
  this.Aa.enabled = z(this.Aa.enabled) ? this.Aa.enabled : i;
  this.Sb = this.lB = this.Aa.enabled;
  this.Oa(this.Aa.enabled);
  this.F(this.Aa.hg);
  this.Vb(this.Aa.gg);
  this.ra(this.Aa.text)
}
s = hz.prototype;
s.Aa = k;
s.Bc = k;
s.aI = "";
s.wa = function() {
  return this.aI = this.Bc.pc()
};
s.ra = function(a) {
  this.aI = a;
  this.Bc != k && this.Bc.Od(this.aI)
};
s.lB = i;
s.Sb = i;
s.isEnabled = function() {
  return this.Bc.isEnabled()
};
s.Oa = function(a, b) {
  b = z(b) ? b : m;
  b === i ? a == m ? (this.lB = this.Sb, this.Sb = a) : this.Sb = this.lB : (this.lB = this.Sb, this.Sb = a);
  this.Bc != k && this.Bc.Oa(this.Sb);
  this.od(this.wo)
};
s.mb = i;
s.w = function() {
  return this.Bc.w()
};
s.F = function(a) {
  this.mb = a;
  this.Bc != k && this.Bc.F(this.mb)
};
s.Y = function(a) {
  this.F(a)
};
s.ob = function() {
  return this.w()
};
s.Ng = "";
s.rc = function() {
  this.Bc != k && (this.Ng = this.Bc.rc());
  return this.Ng
};
s.Vb = function(a) {
  this.Ng = a;
  this.Bc != k && this.Bc.Vb(this.Ng)
};
s.getName = function() {
  if(this.Bc != k) {
    var a = this.Bc.b();
    if(a != k) {
      return a.name
    }
  }
  return""
};
s.zi = function(a) {
  if(this.Bc != k) {
    var b = this.Bc.b();
    b != k && (b.name = a)
  }
};
s.P = function() {
  return this.Bc != k ? this.Bc.P() : ""
};
s.wo = m;
s.kd = q("wo");
s.od = function(a) {
  if(this.Sb === i) {
    this.wo = a;
    var b = this.Bc.b();
    b != k && b.setAttribute("tabindex", a ? 0 : -1)
  }
};
s.pb = function(a) {
  a && this.isEnabled() && (a = this.Bc.b(), a != k && a.focus())
};
s.Pb = function() {
  this.ga || (this.ga = new Tj);
  return this.ga
};
function jz() {
  this[4] = Math.pow(10, 12);
  this[3] = Math.pow(10, 9);
  this[2] = Math.pow(10, 6);
  this[1] = Math.pow(10, 3);
  this[5] = Math.pow(10, 0);
  this[0] = Math.pow(10, 0)
}
x(jz);
function kz(a) {
  wm.call(this, a);
  a.hasOwnProperty("error") && (this.error = a.error);
  a.hasOwnProperty("placeholderText") && (this.xc = a.placeholderText);
  a.hasOwnProperty("text") && (this.text = a.text);
  a.hasOwnProperty("text1") && (this.WH = a.text1);
  a.hasOwnProperty("text2") && (this.xo = a.text2);
  a.hasOwnProperty("textAlign") && (this.textAlign = a.textAlign);
  a.hasOwnProperty("textOverflow") && (this.ya = a.textOverflow);
  a.hasOwnProperty("toggleState") && (this.Rc = a.toggleState)
}
C(kz, wm);
s = kz.prototype;
s.error = "";
s.xc = "";
s.text = "";
s.xo = "";
s.textAlign = 0;
s.ya = 0;
s.Rc = 0;
function lz() {
  this[4] = "T";
  this[3] = "B";
  this[2] = "M";
  this[1] = "K";
  this[5] = "%";
  this[0] = ""
}
x(lz);
function mz(a) {
  this.Ud = a
}
mz.prototype.Ud = "";
mz.prototype.In = "";
mz.prototype.fi = -1;
function nz(a) {
  var b = a.fi, c = oz(a);
  b < a.fi && (a.In = c);
  return c
}
function oz(a) {
  return pz(a) === i ? "" : a.Ud.charAt(++a.fi)
}
function qz(a) {
  for(var b = /\d/, c = "", e = a.fi;!pz(a) && b.test(rz(a));) {
    c += oz(a)
  }
  e < a.fi && (a.In = c);
  return c
}
function sz(a, b) {
  var c = i, e = "", c = w(c) ? c : m, f = "g";
  c === i && (f = "ig");
  for(var c = RegExp("^" + b + "$", f), h = f = "", j = a.fi + 1;;) {
    h = j++;
    h = a.Ud.length > h ? a.Ud.charAt(h) : k;
    if(h == k || /\s/.test(h)) {
      break
    }
    f += h
  }
  if(c.test(f)) {
    for(e = "";!pz(a) && !/\s/.test(rz(a));) {
      e += nz(a)
    }
  }
  return e
}
function rz(a) {
  return pz(a) === i ? "" : a.Ud.charAt(a.fi + 1)
}
function tz(a) {
  for(var b = "";pz(a) != i && /\s/.test(rz(a));) {
    b += nz(a)
  }
}
function pz(a) {
  return a.fi + 1 == a.Ud.length ? i : m
}
;function uz() {
  this.NB = RegExp(this.YP, "ig");
  this.YB = RegExp(this.oQ, "ig");
  this.uB = RegExp(this.AP, "ig");
  this.XB = RegExp(this.nQ, "ig");
  this.GB = RegExp(this.RP, "ig");
  this.RB = RegExp("^" + this.sW + "$", "g");
  this.tB = /[^+-.,\d]/;
  this.WB = /[,]/;
  this.LB = RegExp("^" + this.ST + "$", "ig");
  this.PB = RegExp("^" + this.hV + "$", "ig");
  this.VB = RegExp("^" + this.DW + "$", "ig");
  this.BB = RegExp(this.TK);
  this.UB = RegExp("^" + this.JA + "$", "ig");
  this.TB = RegExp("^" + this.JA + "$", "g");
  this.zB = /[.]/
}
x(uz);
s = uz.prototype;
s.hV = "(([^\\s+-.,\\d])*)?";
s.ST = "((\\d(\\d(\\d)?)?((([,]\\d\\d\\d)*)?|(\\d*)?))?)?([.]\\d(\\d)*)?";
s.JA = "((t\\s|t$)|trillion|trillions|(m\\s|m$)|million|millions|(b\\s|b$)|billion|billions|(k\\s|k$)|thousand|thousands|%|pct)";
s.DW = "(([^\\s])*)?";
s.sW = "[+-]";
s.oQ = "^(((t\\s|t$)|trillion|trillions))$";
s.AP = "^(((b\\s|b$)|billion|billions))$";
s.RP = "^(((m\\s|m$)|million|millions))$";
s.nQ = "^(((k\\s|k$)|thousand|thousands))$";
s.YP = "^((%|pct))$";
s.NB = k;
s.XB = k;
s.GB = k;
s.YB = k;
s.uB = k;
s.WB = k;
function vz(a) {
  a.WB.lastIndex = 0;
  return a.WB
}
s.RB = k;
s.LB = k;
s.PB = k;
s.VB = k;
s.UB = k;
s.TB = k;
s.tB = k;
function wz(a) {
  a.tB.lastIndex = 0;
  return a.tB
}
s.BB = k;
function xz(a) {
  a.BB.lastIndex = 0;
  return a.BB
}
s.zB = k;
function yz(a) {
  a.zB.lastIndex = 0;
  return a.zB
}
s.SB = " ";
s.Mj = [String.fromCharCode(8304), String.fromCharCode(185), String.fromCharCode(178), String.fromCharCode(179), String.fromCharCode(8308), String.fromCharCode(8309), String.fromCharCode(8310), String.fromCharCode(8311), String.fromCharCode(8312), String.fromCharCode(8313)];
s.Lj = [String.fromCharCode(8320), String.fromCharCode(8321), String.fromCharCode(8322), String.fromCharCode(8323), String.fromCharCode(8324), String.fromCharCode(8325), String.fromCharCode(8326), String.fromCharCode(8327), String.fromCharCode(8328), String.fromCharCode(8329)];
s.UK = String.fromCharCode(8260);
s.TK = "[" + uz.prototype.Mj[0] + uz.prototype.Mj[1] + uz.prototype.Mj[2] + uz.prototype.Mj[3] + uz.prototype.Mj[4] + uz.prototype.Mj[5] + uz.prototype.Mj[6] + uz.prototype.Mj[7] + uz.prototype.Mj[8] + uz.prototype.Mj[9] + uz.prototype.UK + uz.prototype.Lj[0] + uz.prototype.Lj[1] + uz.prototype.Lj[2] + uz.prototype.Lj[3] + uz.prototype.Lj[4] + uz.prototype.Lj[5] + uz.prototype.Lj[6] + uz.prototype.Lj[7] + uz.prototype.Lj[8] + uz.prototype.Lj[9] + "+" + String.fromCharCode(96) + "&@\\\\*#=!]";
function zz(a, b, c) {
  var e = "", f = "", h = "", j = "", l = "", n = c.ee(), o = c.ik(), b = a.trim(b);
  if(!c.zd()) {
    b = new mz(b);
    if(wz(a).test(rz(b))) {
      var u;
      a.PB.lastIndex = 0;
      u = a.PB;
      for(var e = /[^\d\s,.+-]/i, t = "", v = b.fi;!pz(b) && e.test(rz(b));) {
        t += nz(b)
      }
      v < b.fi && (b.In = t);
      e = a.trim(t);
      0 < e.length ? (e = e.match(u), n & 1 && (e == k && d("Number prefix is invalid."), e = e.toString(), c.Ai(e))) : c.Ai(e)
    }else {
      c.Ai("")
    }
    tz(b);
    a.RB.lastIndex = 0;
    a.RB.test(rz(b)) && (h = nz(b));
    tz(b);
    e = "";
    u = m;
    if(/\d/.test(rz(b))) {
      for(;/\d/.test(rz(b));) {
        for(e += qz(b);vz(a).test(rz(b)) || yz(a).test(rz(b));) {
          e += nz(b)
        }
        for(;xz(a).test(rz(b));) {
          u = i;
          for(nz(b);/\d/.test(rz(b)) || yz(a).test(rz(b));) {
            nz(b)
          }
        }
      }
    }else {
      if(yz(a).test(rz(b))) {
        for(e += nz(b);/\d/.test(rz(b));) {
          e += qz(b)
        }
      }
    }
    0 < e.length ? (a.LB.lastIndex = 0, e = e.match(a.LB), e == k && d("Input number is invalid."), j = e.toString()) : d("Input number is missing.");
    tz(b);
    wz(a).test(rz(b)) && (l = sz(b, a.JA));
    tz(b);
    if(wz(a).test(rz(b))) {
      0 != sz(b, a.JA).length && d("Predefined units are present more than once.");
      f = /[^.+-,]/i;
      e = "";
      for(t = b.fi;!pz(b) && f.test(rz(b));) {
        e += oz(b)
      }
      t < b.fi && (b.In = e);
      f = e
    }
    e = l;
    l = vz(a);
    j = j.replace(l, "");
    l = parseFloat(j);
    j = jz.g();
    a.NB.lastIndex = 0;
    a.NB.test(e) == i ? e = 5 : (a.YB.lastIndex = 0, a.YB.test(e) == i ? e = 4 : (a.uB.lastIndex = 0, a.uB.test(e) == i ? e = 3 : (a.XB.lastIndex = 0, a.XB.test(e) == i ? e = 1 : (a.GB.lastIndex = 0, e = a.GB.test(e) == i ? 2 : 0))));
    j = j[e];
    5 == o && (j = 1);
    l *= j;
    "-" == h && (l *= -1);
    o = l;
    (isNaN(o) || !isFinite(o)) && d("Invalid number.");
    u === i && (o = c.I());
    n & 8 && o > c.jj() && d("Input number is greater than maximum allowed.");
    n & 16 && o < c.$h() && d("Input number is less than minimum allowed.");
    if((c.ee() & 2 ? i : m) === i) {
      tz(b), pz(b) === m && d("Suffix contains invalid chars."), a.VB.lastIndex = 0, e = f.match(a.VB), e == k && d("Suffix contains invalid chars."), c.Rk(f)
    }
    u === m && c.ka(o)
  }
}
s.sg = function(a) {
  var b = "", c = a.ik(), e = a.ee();
  if(a.zd()) {
    return a.wn()
  }
  var f = jz.g()[c], f = a.I() / f;
  if(isNaN(f)) {
    return b
  }
  var h = f, b = a.fh(), j = "";
  if(-1 === b) {
    j = h.toString()
  }else {
    if(0 === b) {
      h = Math.round(h), j = h.toString()
    }else {
      if(1 <= b && 8 >= b) {
        for(var h = Math.round(h * Math.pow(10, b)) / Math.pow(10, b), j = "0.0", l = 2;l <= b;l++) {
          j += "0"
        }
        j = (new Eu(j)).$m(h)
      }else {
        if(101 <= b && 108 >= b) {
          0 <= h ? j = Math.floor(h) : (j = Math.ceil(h), 0 === j && (j = "-" + j));
          var l = a.Ll(), n = "", h = Az(Math.abs(h));
          if(0 === l) {
            n = Bz(this, h, b)
          }else {
            if(1 === l) {
              l = "";
              if(0 !== h) {
                n = 0;
                l = "";
                switch(b) {
                  case 101:
                    l = String.fromCharCode(96);
                    n = 2;
                    break;
                  case 102:
                    l = "&";
                    n = 4;
                    break;
                  case 103:
                    l = "@";
                    n = 8;
                    break;
                  case 104:
                    l = "\\";
                    n = 16;
                    break;
                  case 105:
                    l = "*";
                    n = 32;
                    break;
                  case 106:
                    l = "#";
                    n = 64;
                    break;
                  case 107:
                    l = "=";
                    n = 128;
                    break;
                  case 108:
                    l = "!", n = 256
                }
                b = new Eu("0.##");
                b = b.$m(h * n);
                l += b
              }
              n = l
            }else {
              if(2 === l && (n = "", 0 !== h)) {
                var o = 0, n = "", l = 101;
                switch(b) {
                  case 101:
                    n = String.fromCharCode(96);
                    o = 2;
                    l = 107;
                    break;
                  case 102:
                    n = "&";
                    o = 4;
                    l = 106;
                    break;
                  case 103:
                    n = "@";
                    o = 8;
                    l = 105;
                    break;
                  case 104:
                    n = "\\";
                    o = 16;
                    l = 104;
                    break;
                  case 105:
                    n = "*";
                    o = 32;
                    l = 103;
                    break;
                  case 106:
                    n = "#";
                    o = 64;
                    l = 102;
                    break;
                  case 107:
                    n = "=";
                    o = 128;
                    l = 101;
                    break;
                  case 108:
                    n = "!", o = 256
                }
                h *= o;
                n += Math.floor(h);
                108 !== b && (b = Bz(this, Az(h), l), n += b)
              }
            }
          }
          j += n
        }
      }
    }
  }
  b = j;
  0 > f && (b = b.substring(1));
  if(e & 32) {
    h = b.search(uz.prototype.TK);
    -1 !== h ? (j = [], j[0] = b.substring(0, h), j[1] = b.substring(h, b.length)) : j = b.split(".");
    b = j[0];
    l = b.length % 3;
    for(0 == l && (l = 3);l < b.length;) {
      b = b.slice(0, l) + "," + b.slice(l + Math.abs(0)), l += 4
    }
    1 < j.length && (-1 === h && (b += "."), b += j[1])
  }
  if(e & 4 && 0 <= f || 0 > f) {
    b = (0 > f ? "-" : "+") + b
  }
  c = lz.g()[c];
  0 < c.length && (b += this.SB + c);
  c = a.Pl();
  a = a.Ql();
  w(c) || (c = "");
  w(a) || (a = "");
  Cz(this, a) && d("Special chars e.g., 'K', 'M', 'B', 'T' and '%' cannot be used as Suffix. Use display format instead.");
  b = 0 < c.length ? c + this.SB + b : b;
  return b = 0 < a.length ? b + this.SB + a : b
};
s.trim = function(a) {
  return a.replace(/^\s+|\s+$/g, "")
};
function Az(a) {
  var a = a.toString(), b = a.indexOf("."), c = 0;
  -1 < b && (c = parseFloat("0" + a.substring(b)));
  return c
}
function Bz(a, b, c) {
  var e = "";
  if(0 !== b) {
    var f = 0;
    switch(c) {
      case 101:
        f = 2;
        break;
      case 102:
        f = 4;
        break;
      case 103:
        f = 8;
        break;
      case 104:
        f = 16;
        break;
      case 105:
        f = 32;
        break;
      case 106:
        f = 64;
        break;
      case 107:
        f = 128;
        break;
      case 108:
        f = 256
    }
    b *= f;
    c = Math.floor(b);
    if(0 !== c) {
      var h, j = c.toString().length;
      h = c;
      for(j -= 1;0 <= j;j--) {
        var l = Math.floor(h / Math.pow(10, j));
        h %= Math.pow(10, j);
        e += a.Mj[l]
      }
      e += a.UK;
      j = f.toString().length;
      h = f;
      for(j -= 1;0 <= j;j--) {
        l = Math.floor(h / Math.pow(10, j)), h %= Math.pow(10, j), e += a.Lj[l]
      }
    }
    b > c && (e += "+")
  }
  return e
}
function Cz(a, b) {
  var c;
  if(!b || "" == b) {
    return m
  }
  c = w(c) ? c : i;
  var e;
  a.TB.lastIndex = 0;
  e = a.TB;
  c && (a.UB.lastIndex = 0, e = a.UB);
  return e.test(b)
}
;function Dz(a, b, c, e) {
  gh.call(this, a, e);
  this.X = b;
  this.Ga = c
}
C(Dz, gh);
Dz.prototype.type = "etk_number_changed";
Dz.prototype.X = 0;
Dz.prototype.Jc = q("X");
Dz.prototype.getPrevious = Dz.prototype.Jc;
Dz.prototype.Ga = 0;
Dz.prototype.qc = q("Ga");
Dz.prototype.getCurrent = Dz.prototype.qc;
function Ez(a, b, c, e, f) {
  I.call(this, a, w(b) ? b : "Changed", c, e);
  w(f) && (this.lM = f)
}
C(Ez, I);
Ez.prototype.lM = i;
Ez.prototype.X = 0;
Ez.prototype.i = function(a, b) {
  G(this.B, "etk_number_changed", a, g, b)
};
Ez.prototype.listen = Ez.prototype.i;
Ez.prototype.H = function(a, b) {
  Ve(this.B, "etk_number_changed", a, g, b)
};
Ez.prototype.unlisten = Ez.prototype.H;
Ez.prototype.la = function() {
  Ze(this.B, "etk_number_changed")
};
Ez.prototype.unlistenAll = Ez.prototype.la;
Ez.prototype.v = function(a, b) {
  var c = new Dz(b, this.X, a, this.aa);
  this.X = a;
  Ah(this) && (this.B.dispatchEvent(c), this.md == i && (this.lM ? wh.g().Dv(this.aa.P(), this.Fc, a, this.Kc) : wh.g().iq(this.aa.P(), this.Fc, a, this.Kc)))
};
function Fz(a) {
  pl.call(this, a);
  a.hasOwnProperty("displayFormat") && (this.wl = a.displayFormat);
  a.hasOwnProperty("displayPrecision") && (this.xl = a.displayPrecision);
  a.hasOwnProperty("displayText") && (this.Rm = a.displayText);
  a.hasOwnProperty("error") && (this.error = a.error);
  a.hasOwnProperty("fractionMode") && (this.Fl = a.fractionMode);
  a.hasOwnProperty("isUninitialized") && (this.ec = a.isUninitialized);
  a.hasOwnProperty("maximum") && (this.hi = a.maximum);
  a.hasOwnProperty("minimum") && (this.ii = a.minimum);
  a.hasOwnProperty("options") && (this.options = a.options);
  a.hasOwnProperty("placeholderText") && (this.xc = a.placeholderText);
  a.hasOwnProperty("textAlign") && (this.textAlign = a.textAlign);
  a.hasOwnProperty("textOverflow") && (this.ya = a.textOverflow);
  a.hasOwnProperty("uninitializedValue") && (this.Je = a.uninitializedValue);
  a.hasOwnProperty("unitPrefix") && (this.bl = a.unitPrefix);
  a.hasOwnProperty("unitSuffix") && (this.cl = a.unitSuffix);
  a.hasOwnProperty("value") && (this.value = a.value)
}
C(Fz, pl);
s = Fz.prototype;
s.wl = 0;
s.xl = 0;
s.Rm = "";
s.error = "";
s.Fl = 0;
s.ec = m;
s.hi = 1E3;
s.ii = 0;
s.options = 0;
s.xc = "";
s.textAlign = 0;
s.ya = 0;
s.Je = "";
s.bl = "";
s.cl = "";
s.value = 0;
var Gz = new gl("etk-numericbox");
function V(a, b, c, e, f) {
  K.call(this, a, b, c, z(e) ? e : Gz, f);
  this.gc(i);
  this.nc = new P(new wm({}), b, m);
  this.vs = new Ez(this, "NumberChanged", c, bk(b, "NumberChanged"), i);
  this.Bn = new Dh(this, "InvalidTextEntry", c, bk(b, "InvalidTextEntry"));
  this.Op = uz.g()
}
C(V, rl);
B("tr.ui.NumericBox", V);
ag(V, Uj);
H.g().z("NumericBox", V);
s = V.prototype;
s.M = Fz.prototype;
s.nc = k;
s.bz = m;
s.oF = m;
s.a = function() {
  return V.e.a.call(this)
};
s.SA = k;
s.TA = k;
s.R = function(a) {
  V.e.R.call(this, a);
  this.nc.R(a)
};
s.pb = function(a) {
  V.e.pb.call(this, a);
  this.nc.pb(a)
};
s.m = function() {
  V.e.m.call(this);
  var a = this.qa.createElement("div");
  a.setAttribute("data-etk-type", "NumericBox");
  this.l(a)
};
s.l = function(a) {
  V.e.l.call(this, a);
  this.s = a;
  D(a, "etk-control");
  this.Ca(this.nc, i);
  a.setAttribute("tabindex", -1)
};
s.k = function() {
  V.e.k.call(this);
  this.oF = m;
  var a = this.a();
  this.Cd(a.xc);
  this.bz = i;
  if(!this.a().ec) {
    try {
      Hz(this)
    }catch(b) {
      this.Pa(w(b.message) ? b.message : b)
    }
  }
  this.Pa(a.error);
  this.Ua(a.textAlign);
  this.Va(a.ya);
  this.vm(this.a().ec);
  this.oF = i;
  a = this.ma();
  a.i(this.nc.Fa(), "dblclick", this.Fz);
  a.i(this.nc.Fa(), "change", this.jN);
  a.i(this.nc.Fa(), "keydown", this.Ez);
  a.i(this.nc.Fa(), "focus", this.xs);
  a.i(this.nc.Fa(), "mousedown", this.Fz);
  a.i(this.nc.Fa(), "blur", this.zz)
};
s.n = function() {
  V.e.n.call(this)
};
s.Re = function() {
  return this.a().xc
};
V.prototype.getPlaceholderText = V.prototype.Re;
V.prototype.Cd = function(a) {
  this.a().xc = a;
  L(this, "PlaceholderText");
  this.nc.Cd(a)
};
V.prototype.setPlaceholderText = V.prototype.Cd;
V.prototype.vs = k;
V.prototype.Kr = q("vs");
V.prototype.Bn = k;
V.prototype.I = function() {
  this.zd() && d("Value is not available.");
  return this.a().value
};
V.prototype.getValue = V.prototype.I;
V.prototype.ka = function(a) {
  var b = this.a().value != a;
  this.zd() && (this.a().ec = m);
  try {
    this.a().value = a, Hz(this), b && this.oF && L(this, "Value")
  }catch(c) {
    this.Pa(w(c.message) ? c.message : c)
  }
};
V.prototype.setValue = V.prototype.ka;
V.prototype.$h = function() {
  return this.a().ii
};
V.prototype.getMinimum = V.prototype.$h;
V.prototype.no = function(a) {
  this.a().ii = a;
  L(this, "Minimum");
  this.me()
};
V.prototype.setMinimum = V.prototype.no;
V.prototype.jj = function() {
  return this.a().hi
};
V.prototype.getMaximum = V.prototype.jj;
V.prototype.lo = function(a) {
  this.a().hi = a;
  L(this, "Maximum");
  this.me()
};
V.prototype.setMaximum = V.prototype.lo;
V.prototype.Pl = function() {
  return this.a().bl
};
V.prototype.getUnitPrefix = V.prototype.Pl;
V.prototype.Ai = function(a) {
  this.a().bl = a;
  L(this, "UnitPrefix");
  this.me()
};
V.prototype.setUnitPrefix = V.prototype.Ai;
V.prototype.Ql = function() {
  return this.a().cl
};
V.prototype.getUnitSuffix = V.prototype.Ql;
V.prototype.Rk = function(a) {
  Cz(this.Op, a) ? this.Pa("Special chars e.g., 'K', 'M', 'B', 'T' and '%' cannot be used as Suffix. Use display format instead.") : (this.a().cl = a, L(this, "UnitSuffix"), this.me())
};
V.prototype.setUnitSuffix = V.prototype.Rk;
V.prototype.sg = function() {
  return this.Op.sg(this)
};
V.prototype.getDisplayText = V.prototype.sg;
V.prototype.fh = function() {
  return this.a().xl
};
V.prototype.getDisplayPrecision = V.prototype.fh;
V.prototype.Nk = function(a) {
  this.a().xl = a;
  L(this, "DisplayPrecision");
  this.me()
};
V.prototype.setDisplayPrecision = V.prototype.Nk;
V.prototype.ik = function() {
  return this.a().wl
};
V.prototype.getDisplayFormat = V.prototype.ik;
V.prototype.io = function(a) {
  this.a().wl = a;
  L(this, "DisplayFormat");
  this.me()
};
V.prototype.setDisplayFormat = V.prototype.io;
V.prototype.ee = function() {
  return this.a().options
};
V.prototype.getOptions = V.prototype.ee;
V.prototype.oo = function(a) {
  this.a().options = a;
  L(this, "Options");
  this.me()
};
V.prototype.setOptions = V.prototype.oo;
V.prototype.Ll = function() {
  return this.a().Fl
};
V.prototype.getFractionMode = V.prototype.Ll;
V.prototype.jo = function(a) {
  this.a().Fl = a;
  L(this, "FractionMode");
  this.me()
};
V.prototype.setFractionMode = V.prototype.jo;
V.prototype.Fa = function() {
  return this.nc.Fa()
};
V.prototype.getError = function() {
  return this.nc.getError()
};
V.prototype.getError = V.prototype.getError;
V.prototype.Pa = function(a) {
  var b = this.a().error;
  this.nc.Pa(a);
  this.a().error = a;
  var c = !(a == k || "" == a);
  c && b != a && (L(this, "Error"), a = new Ee("change"), this.Bn.v(this.nc.wa(), a));
  c ? this.a().Hb = 16 : 16 == this.a().Hb && this.bc(Ni)
};
V.prototype.setError = V.prototype.Pa;
function Hz(a, b) {
  if(a.bz) {
    b = w(b) ? b : a.sg();
    a.bz = m;
    try {
      0 != b.length && zz(a.Op, b, a), a.nc.ra(b)
    }finally {
      a.bz = i
    }
  }
}
s = V.prototype;
s.yd = function() {
  return this.nc.yd()
};
s.Ez = function(a) {
  13 === a.keyCode && this.jN(a)
};
s.jN = function(a) {
  this.zd() && (this.a().ec = m);
  var b = this.nc.wa(), c = this.a().value;
  if(0 < b.length) {
    try {
      this.Pa(""), Hz(this, b), this.nc.ra(this.sg()), this.Pa("")
    }catch(e) {
      this.Pa(w(e.message) ? e.message : e)
    }
  }else {
    this.ka(Number.NaN), this.Pa("")
  }
  b = this.a().value;
  c != b && this.vs.v(b, a);
  return i
};
s.Fz = function(a) {
  this.ma().H(this.nc.Fa(), "mousedown", this.Fz);
  var b = this.nc.Fa();
  this.Z() && (Dm(b, 0), Im(b, 1E4));
  a.preventDefault();
  return i
};
s.xs = function() {
  101 <= this.fh() && 108 >= this.fh() && (this.SA = this.fh(), this.TA = this.Ll(), this.Nk(-1))
};
s.zz = function() {
  this.SA !== k && this.TA !== k && (this.Nk(this.SA), this.jo(this.TA), this.TA = this.SA = k);
  this.ma().i(this.nc.Fa(), "mousedown", this.Fz)
};
s.Vh = function() {
  return this.nc.b()
};
s.na = function() {
  return this.nc.na()
};
s.lk = q("Bn");
s.Mb = function() {
  return this.a().textAlign
};
V.prototype.getTextAlign = V.prototype.Mb;
V.prototype.Ua = function(a) {
  this.a().textAlign = a;
  this.nc.Ua(a)
};
V.prototype.setTextAlign = V.prototype.Ua;
V.prototype.Yb = function() {
  return this.a().ya
};
V.prototype.getTextOverflow = V.prototype.Yb;
V.prototype.Va = function(a) {
  this.a().ya = a;
  this.nc.Va(a)
};
V.prototype.setTextOverflow = V.prototype.Va;
V.prototype.Xe = function() {
  return this.nc.Xe()
};
V.prototype.wn = function() {
  return this.a().Je
};
V.prototype.getUninitializedValue = V.prototype.wn;
V.prototype.ym = function(a) {
  this.a().Je = a;
  this.zd() && this.me()
};
V.prototype.setUninitializedValue = V.prototype.ym;
V.prototype.zd = function() {
  return this.a().ec
};
V.prototype.getIsUninitialized = V.prototype.zd;
V.prototype.vm = function(a) {
  this.a().ec = a;
  this.me()
};
V.prototype.setIsUninitialized = V.prototype.vm;
V.prototype.me = function() {
  try {
    this.Pa(""), Hz(this)
  }catch(a) {
    this.Pa(w(a.message) ? a.message : a)
  }
};
var Iz = new gl("etk-toggletextbox");
function Jz(a, b, c, e, f) {
  P.call(this, a, b, c, z(e) ? e : Iz, f);
  this.eg = new yh(this, "Toggled", c, bk(b, "Toggled"))
}
C(Jz, P);
B("tr.ui.ToggleTextBox", Jz);
ag(Jz, Uj);
H.g().z("ToggleTextBox", Jz);
s = Jz.prototype;
s.M = kz.prototype;
s.ea = k;
s.eg = k;
s.a = function() {
  return Jz.e.a.call(this)
};
s.l = function(a) {
  Jz.e.l.call(this, a);
  this.ea = Ac("div", {"class":"etk-toggletextbox-image-inner etk-toggletextbox-button-normal"});
  a = Ac("div", {"class":"etk-toggletextbox-image-outer"}, this.ea);
  a = Ac("div", {"class":"etk-toggletextbox-image-first"}, a);
  this.b().appendChild(a)
};
s.m = function() {
  Jz.e.m.call(this);
  var a = this.qa.createElement("div");
  a.setAttribute("data-etk-type", "ToggleTextBox");
  this.l(a)
};
s.k = function() {
  Jz.e.k.call(this);
  G(this.ea, "click", this.Ae, m, this);
  G(this.ea, "mousedown", this.Be, m, this);
  G(this.ea, "mouseup", this.hv, m, this);
  G(this.ea, "mouseover", this.qi, m, this);
  G(this.ea, "mouseout", this.Dg, m, this);
  G(this.Fa(), "focus", this.uf, m, this);
  G(this.Fa(), "blur", this.kh, m, this);
  G(this.Fa(), "mouseover", this.pi, m, this);
  G(this.Fa(), "mouseout", this.oi, m, this)
};
s.n = function() {
  Jz.e.n.call(this);
  this.la()
};
s.Ae = function(a) {
  this.Z() && (this.Ci(), this.eg.v(a), this.Fa().focus())
};
s.Ci = function() {
  switch(this.a().Rc) {
    case 0:
      this.a().Rc = 1;
      this.ab.ka(this.xy());
      break;
    case 1:
      this.a().Rc = 0, this.ab.ka(this.wa())
  }
  L(this, "ToggleState")
};
s.Be = function() {
  this.Z() && ob(this.ea, ["etk-toggletextbox-button-normal", "etk-toggletextbox-button-hover", "etk-toggletextbox-button-disabled"], "etk-toggletextbox-button-active")
};
s.hv = function() {
  this.Z() && ob(this.ea, ["etk-toggletextbox-button-active", "etk-toggletextbox-button-hover", "etk-toggletextbox-button-disabled"], "etk-toggletextbox-button-normal")
};
s.qi = function() {
  this.Z() && ob(this.ea, ["etk-toggletextbox-button-active", "etk-toggletextbox-button-normal", "etk-toggletextbox-button-disabled"], "etk-toggletextbox-button-hover")
};
s.Dg = function() {
  this.Z() && ob(this.ea, ["etk-toggletextbox-button-active", "etk-toggletextbox-button-hover", "etk-toggletextbox-button-disabled"], "etk-toggletextbox-button-normal")
};
s.uf = function() {
  this.Z() && ob(this.ea, "etk-toggletextbox-button-normal", "etk-toggletextbox-button-focus")
};
s.kh = function() {
  this.Z() && ob(this.ea, "etk-toggletextbox-button-focus", "etk-toggletextbox-button-normal")
};
s.pi = function() {
  this.isEnabled() && ob(this.ea, "etk-toggletextbox-button-normal", "etk-toggletextbox-button-hover")
};
s.oi = function() {
  this.Z() && ob(this.ea, "etk-toggletextbox-button-hover", "etk-toggletextbox-button-normal")
};
s.of = function() {
  return this.a().Rc
};
Jz.prototype.getToggleState = Jz.prototype.of;
Jz.prototype.rq = function(a) {
  this.of() !== a && this.Ci()
};
Jz.prototype.setToggleState = Jz.prototype.rq;
Jz.prototype.xy = function() {
  return this.a().xo
};
Jz.prototype.getText2 = Jz.prototype.xy;
Jz.prototype.qA = function(a) {
  this.a().xo = a;
  L(this, "Text2");
  1 === this.of() && this.ab.ka(a)
};
Jz.prototype.setText2 = Jz.prototype.qA;
Jz.prototype.ra = function(a) {
  this.a().text = a;
  L(this, "Text");
  0 === this.of() && this.ab.ka(a)
};
Jz.prototype.setText = Jz.prototype.ra;
Jz.prototype.vp = q("eg");
Jz.prototype.getToggledEvent = Jz.prototype.vp;
Jz.prototype.aG = function(a) {
  var b = this.ab.I();
  switch(this.a().Rc) {
    case 0:
      this.ra(b);
      break;
    case 1:
      this.qA(b)
  }
  this.Ke.v(b, a)
};
Jz.prototype.R = function(a) {
  Jz.e.R.call(this, a);
  w(this.ea) && (a ? ob(this.ea, ["etk-toggletextbox-button-active", "etk-toggletextbox-button-hover", "etk-toggletextbox-button-disabled"], "etk-toggletextbox-button-normal") : ob(this.ea, ["etk-toggletextbox-button-active", "etk-toggletextbox-button-hover", "etk-toggletextbox-button-normal"], "etk-toggletextbox-button-disabled"))
};
Jz.prototype.setIsEnabled = Jz.prototype.R;
Jz.prototype.yd = function() {
  return Jz.e.yd.call(this)
};
Jz.prototype.getHasError = Jz.prototype.yd;
Jz.prototype.getError = function() {
  return this.a().error
};
Jz.prototype.getError = Jz.prototype.getError;
var Kz = new gl("etk-togglenumericbox");
function W(a, b, c, e, f) {
  K.call(this, a, b, c, z(e) ? e : Kz, f);
  this.N = new V(new Fz(this.a()), b, m);
  this.Ca(this.N);
  this.eg = new yh(this, "Toggled", c, bk(b, "Toggled"));
  new yh(this, "ValueChanged", c, bk(b, "ValueChanged"));
  new yh(this, "Value2Changed", c, bk(b, "Value2Changed"))
}
C(W, rl);
B("tr.ui.ToggleNumericBox", W);
ag(W, Uj);
H.g().z("ToggleNumericBox", W);
s = W.prototype;
s.M = Ry.prototype;
s.ea = k;
s.eg = k;
s.N = k;
s.a = function() {
  return W.e.a.call(this)
};
s.l = function(a) {
  W.e.l.call(this, a);
  this.Ca(this.N, i);
  this.ea = Ac("div", {"class":"etk-toggletextbox-image-inner etk-toggletextbox-button-normal"});
  a = Ac("div", {"class":"etk-toggletextbox-image-outer"}, this.ea);
  a = Ac("div", {"class":"etk-toggletextbox-image-first"}, a);
  Mc(this.N.b()).appendChild(a);
  this.Ua(this.a().textAlign);
  this.Va(this.a().ya)
};
s.m = function() {
  W.e.m.call(this);
  var a = this.qa.createElement("div");
  a.setAttribute("data-etk-type", "ToggleNumericBox");
  this.l(a)
};
s.k = function() {
  W.e.k.call(this);
  G(this.ea, "click", this.Ae, m, this);
  G(this.ea, "mousedown", this.Be, m, this);
  G(this.ea, "mouseup", this.hv, m, this);
  G(this.ea, "mouseover", this.qi, m, this);
  G(this.ea, "mouseout", this.Dg, m, this);
  G(this.Fa(), "focus", this.uf, m, this);
  G(this.Fa(), "blur", this.kh, m, this);
  G(this.Fa(), "mouseover", this.pi, m, this);
  G(this.Fa(), "mouseout", this.oi, m, this);
  this.N.ka(this.I());
  this.N.Kr().i(this.DU, this)
};
s.n = function() {
  W.e.n.call(this);
  this.la()
};
s.DU = function() {
  switch(this.a().Rc) {
    case 0:
      this.a().value = this.N.I();
      L(this, "Value");
      break;
    case 1:
      this.a().Ao = this.N.I(), L(this, "Value2")
  }
};
s.Ae = function(a) {
  this.Z() && (this.Ci(), this.eg.v(a), this.Fa().focus())
};
s.Ci = function() {
  var a = 0;
  switch(this.a().Rc) {
    case 0:
      this.a().Rc = 1;
      a = this.a().Ao;
      break;
    case 1:
      this.a().Rc = 0, a = this.a().value
  }
  L(this, "ToggleState");
  this.N.ka(a)
};
s.Be = function() {
  this.Z() && ob(this.ea, ["etk-toggletextbox-button-normal", "etk-toggletextbox-button-hover", "etk-toggletextbox-button-disabled"], "etk-toggletextbox-button-active")
};
s.hv = function() {
  this.Z() && ob(this.ea, ["etk-toggletextbox-button-active", "etk-toggletextbox-button-hover", "etk-toggletextbox-button-disabled"], "etk-toggletextbox-button-normal")
};
s.qi = function() {
  this.Z() && ob(this.ea, ["etk-toggletextbox-button-active", "etk-toggletextbox-button-normal", "etk-toggletextbox-button-disabled"], "etk-toggletextbox-button-hover")
};
s.Dg = function() {
  this.Z() && ob(this.ea, ["etk-toggletextbox-button-active", "etk-toggletextbox-button-hover", "etk-toggletextbox-button-disabled"], "etk-toggletextbox-button-normal")
};
s.uf = function() {
  this.Z() && ob(this.ea, "etk-toggletextbox-button-normal", "etk-toggletextbox-button-focus")
};
s.kh = function() {
  this.Z() && ob(this.ea, "etk-toggletextbox-button-focus", "etk-toggletextbox-button-normal")
};
s.pi = function() {
  this.isEnabled() && ob(this.ea, "etk-toggletextbox-button-normal", "etk-toggletextbox-button-hover")
};
s.oi = function() {
  this.Z() && ob(this.ea, "etk-toggletextbox-button-hover", "etk-toggletextbox-button-normal")
};
s.of = function() {
  return this.a().Rc
};
W.prototype.getToggleState = W.prototype.of;
W.prototype.rq = function(a) {
  this.of() !== a && this.Ci()
};
W.prototype.setToggleState = W.prototype.rq;
W.prototype.ka = function(a) {
  this.a().value = a;
  0 === this.of() && this.N.ka(a);
  L(this, "Value")
};
W.prototype.setValue = W.prototype.ka;
W.prototype.I = function() {
  return this.a().value
};
W.prototype.getValue = W.prototype.I;
W.prototype.qE = function() {
  return this.a().Ao
};
W.prototype.getValue2 = W.prototype.qE;
W.prototype.jW = function(a) {
  this.a().Ao = a;
  1 === this.of() && this.N.ka(a);
  L(this, "Value2")
};
W.prototype.setValue2 = W.prototype.jW;
W.prototype.vp = q("eg");
W.prototype.getToggledEvent = W.prototype.vp;
W.prototype.R = function(a) {
  W.e.R.call(this, a);
  this.N.R(a);
  w(this.ea) && (a ? ob(this.ea, ["etk-toggletextbox-button-active", "etk-toggletextbox-button-hover", "etk-toggletextbox-button-disabled"], "etk-toggletextbox-button-normal") : ob(this.ea, ["etk-toggletextbox-button-active", "etk-toggletextbox-button-hover", "etk-toggletextbox-button-normal"], "etk-toggletextbox-button-disabled"))
};
W.prototype.setIsEnabled = W.prototype.R;
W.prototype.pb = function(a) {
  this.N.pb(a)
};
W.prototype.fh = function() {
  return this.N.fh()
};
W.prototype.getDisplayPrecision = W.prototype.fh;
W.prototype.Nk = function(a) {
  this.N.Nk(a)
};
W.prototype.setDisplayPrecision = W.prototype.Nk;
W.prototype.ik = function() {
  return this.N.ik()
};
W.prototype.getDisplayFormat = W.prototype.ik;
W.prototype.io = function(a) {
  this.N.io(a)
};
W.prototype.setDisplayFormat = W.prototype.io;
W.prototype.sg = function() {
  return this.N.sg()
};
W.prototype.getDisplayText = W.prototype.sg;
W.prototype.getError = function() {
  return this.N.getError()
};
W.prototype.getError = W.prototype.getError;
W.prototype.Pa = function(a) {
  this.N.Pa(a)
};
W.prototype.setError = W.prototype.Pa;
W.prototype.yd = function() {
  return this.N.yd()
};
W.prototype.$h = function() {
  return this.N.$h()
};
W.prototype.getMinimum = W.prototype.$h;
W.prototype.no = function(a) {
  this.N.no(a)
};
W.prototype.setMinimum = W.prototype.no;
W.prototype.jj = function() {
  return this.N.jj()
};
W.prototype.getMaximum = W.prototype.jj;
W.prototype.lo = function(a) {
  this.N.lo(a)
};
W.prototype.setMaximum = W.prototype.lo;
W.prototype.Kr = function() {
  return this.N.Kr()
};
W.prototype.lk = function() {
  return this.N.lk()
};
W.prototype.Re = function() {
  return this.N.Re()
};
W.prototype.getPlaceholderText = W.prototype.Re;
W.prototype.Cd = function(a) {
  this.N.Cd(a)
};
W.prototype.setPlaceholderText = W.prototype.Cd;
W.prototype.Pl = function() {
  return this.N.Pl()
};
W.prototype.getUnitPrefix = W.prototype.Pl;
W.prototype.Ai = function(a) {
  this.N.Ai(a)
};
W.prototype.setUnitPrefix = W.prototype.Ai;
W.prototype.Ql = function() {
  return this.N.Ql()
};
W.prototype.getUnitSuffix = W.prototype.Ql;
W.prototype.Rk = function(a) {
  this.N.Rk(a)
};
W.prototype.setUnitSuffix = W.prototype.Rk;
W.prototype.ee = function() {
  return this.N.ee()
};
W.prototype.getOptions = W.prototype.ee;
W.prototype.oo = function(a) {
  this.N.oo(a)
};
W.prototype.setOptions = W.prototype.oo;
s = W.prototype;
s.Fa = function() {
  return this.N.Fa()
};
s.na = function() {
  return this.N.na()
};
s.Ll = function() {
  return this.N.Ll()
};
s.jo = function(a) {
  this.N.jo(a)
};
s.Mb = function() {
  return this.a().textAlign
};
W.prototype.getTextAlign = W.prototype.Mb;
W.prototype.Ua = function(a) {
  this.a().textAlign = a;
  this.N.Ua(a)
};
W.prototype.setTextAlign = W.prototype.Ua;
W.prototype.Yb = function() {
  return this.a().ya
};
W.prototype.getTextOverflow = W.prototype.Yb;
W.prototype.Va = function(a) {
  this.a().ya = a;
  this.N.Va(a)
};
W.prototype.setTextOverflow = W.prototype.Va;
W.prototype.Xe = function() {
  return this.N.Xe()
};
function Lz(a, b, c, e) {
  gh.call(this, a, e);
  this.X = b;
  this.Ga = c
}
C(Lz, gh);
Lz.prototype.type = "etk_CheckBoxState_changed";
Lz.prototype.X = 0;
Lz.prototype.Jc = q("X");
Lz.prototype.getPrevious = Lz.prototype.Jc;
Lz.prototype.Ga = 0;
Lz.prototype.qc = q("Ga");
Lz.prototype.getCurrent = Lz.prototype.qc;
function Mz(a, b, c, e) {
  I.call(this, a, w(b) ? b : "Changed", c, e)
}
C(Mz, I);
Mz.prototype.X = 0;
Mz.prototype.i = function(a, b) {
  G(this.B, "etk_CheckBoxState_changed", a, g, b)
};
Mz.prototype.listen = Mz.prototype.i;
Mz.prototype.H = function(a, b) {
  Ve(this.B, "etk_CheckBoxState_changed", a, g, b)
};
Mz.prototype.unlisten = Mz.prototype.H;
Mz.prototype.la = function() {
  Ze(this.B, "etk_CheckBoxState_changed")
};
Mz.prototype.unlistenAll = Mz.prototype.la;
Mz.prototype.v = function(a, b) {
  var c = new Lz(b, this.X, a, this.aa);
  this.X = a;
  Ah(this) && (this.B.dispatchEvent(c), this.md == i && wh.g().iq(this.aa.P(), this.Fc, a, this.Kc))
};
function Nz() {
}
C(Nz, yf);
x(Nz);
Nz.prototype.m = function(a) {
  var b = a.u().m("span", this.ej(a).join(" "));
  Oz(this, b, a.ml);
  return b
};
Nz.prototype.Ka = function(a, b) {
  var b = Nz.e.Ka.call(this, a, b), c = lb(b), e = Pz;
  ab(c, Qz(this, Rz)) ? e = Rz : ab(c, Qz(this, Sz)) ? e = Sz : ab(c, Qz(this, Pz)) && (e = Pz);
  a.ml = e;
  xf(b, "checked", e == Rz ? "mixed" : e == Sz ? "true" : "false");
  return b
};
Nz.prototype.Of = r("checkbox");
function Oz(a, b, c) {
  if(b) {
    var e = Qz(a, c);
    ab(lb(b), e) || (pb(Tz, function(a) {
      a = Qz(this, a);
      F(b, a, a == e)
    }, a), xf(b, "checked", c == Rz ? "mixed" : c == Sz ? "true" : "false"))
  }
}
Nz.prototype.J = r("goog-checkbox");
function Qz(a, b) {
  var c = a.J();
  if(b == Sz) {
    return c + "-checked"
  }
  if(b == Pz) {
    return c + "-unchecked"
  }
  if(b == Rz) {
    return c + "-undetermined"
  }
  d(Error("Invalid checkbox state: " + b))
}
;function Uz() {
}
C(Uz, Nz);
x(Uz);
Uz.prototype.J = function() {
  return Vz
};
Uz.prototype.rb = r(m);
var Vz = "tr-checkbox";
function Wz(a) {
  pl.call(this, a);
  a.hasOwnProperty("checkState") && (this.PJ = a.checkState);
  a.hasOwnProperty("text") && (this.text = a.text);
  a.hasOwnProperty("textAlign") && (this.textAlign = a.textAlign);
  a.hasOwnProperty("textOverflow") && (this.ya = a.textOverflow)
}
C(Wz, pl);
Wz.prototype.PJ = 0;
Wz.prototype.text = "";
Wz.prototype.textAlign = 0;
Wz.prototype.ya = 0;
function Xz(a, b, c) {
  c = c || Nz.g();
  kg.call(this, k, c, b);
  this.ml = z(a) ? a : Pz
}
C(Xz, kg);
var Sz = i, Pz = m, Rz = k, Tz = {nX:Sz, yY:Pz, zY:Rz};
s = Xz.prototype;
s.fc = k;
s.ie = function() {
  return this.ml == Sz
};
s.Hv = function(a) {
  a != this.ml && (this.ml = a, Oz(this.fa, this.b(), this.ml))
};
s.Nv = function(a) {
  this.Ra ? (this.nb(), this.fc = a, this.k()) : this.fc = a
};
s.toggle = function() {
  this.Hv(this.ml ? Pz : Sz)
};
s.k = function() {
  Xz.e.k.call(this);
  if(this.qF()) {
    var a = this.ma();
    this.fc && a.i(this.fc, "click", this.uE).i(this.fc, "mouseover", this.yn).i(this.fc, "mouseout", this.Gy).i(this.fc, "mousedown", this.pk).i(this.fc, "mouseup", this.zn);
    a.i(this.b(), "click", this.uE)
  }
  this.fc && (this.fc.id || (this.fc.id = this.P() + ".lbl"), xf(this.b(), "labelledby", this.fc.id))
};
s.Oa = function(a) {
  Xz.e.Oa.call(this, a);
  if(a = this.b()) {
    a.tabIndex = this.isEnabled() ? 0 : -1
  }
};
s.uE = function(a) {
  a.stopPropagation();
  var b = this.ml ? "uncheck" : "check";
  this.isEnabled() && this.dispatchEvent(b) && (a.preventDefault(), this.toggle(), this.dispatchEvent("change"))
};
s.lj = function(a) {
  32 == a.keyCode && this.uE(a);
  return m
};
cg("goog-checkbox", function() {
  return new Xz
});
function Yz(a, b, c, e, f) {
  var h = e || Uz.g();
  this.Gf = new Xz(Pz, f, h);
  K.call(this, a, b, c, e, f);
  this.Ca(this.Gf);
  this.pf = bk(b, "Changed");
  this.Ke = new Mz(this, "Changed", c, this.pf)
}
C(Yz, rl);
B("tr.ui.CheckBox", Yz);
ag(Yz, Uj);
H.g().z("CheckBox", Yz);
s = Yz.prototype;
s.M = Wz.prototype;
s.a = function() {
  return Yz.e.a.call(this)
};
s.Gf = k;
s.rc = function() {
  return this.b().title
};
s.Vb = function(a) {
  this.b().title = a
};
s.w = function() {
  return this.a().w
};
s.F = function(a) {
  this.a().w = a;
  var b = this.b();
  b && (b.style.display = this.w() ? "" : "none");
  return a
};
s.Y = function(a) {
  this.F(a)
};
Yz.prototype.setIsVisible = Yz.prototype.Y;
Yz.prototype.ob = function() {
  return this.w()
};
Yz.prototype.getIsVisible = Yz.prototype.ob;
Yz.prototype.pb = function(a) {
  a && this.Gf.b().focus()
};
Yz.prototype.setHasFocus = Yz.prototype.pb;
Yz.prototype.isEnabled = function() {
  return this.a().isEnabled
};
Yz.prototype.Oa = function(a) {
  this.a().isEnabled = i;
  this.Gf.Oa(a);
  this.a().isEnabled = a;
  var b = this.b();
  a == m ? D(b, "tr-checkbox-disabled") : E(b, "tr-checkbox-disabled")
};
Yz.prototype.R = function(a) {
  this.Oa(a)
};
Yz.prototype.setIsEnabled = Yz.prototype.R;
Yz.prototype.Z = function() {
  return this.isEnabled()
};
Yz.prototype.getIsEnabled = Yz.prototype.Z;
Yz.prototype.Pc = function(a) {
  this.Gf != k && this.Gf.b() != k && this.Gf.b().setAttribute("tabindex", a++);
  return a
};
Yz.prototype.wa = function() {
  return this.a().text
};
Yz.prototype.getText = Yz.prototype.wa;
Yz.prototype.ra = function(a) {
  a == k && (a = "");
  this.a().text = a;
  a = this.b();
  if(k != a) {
    var b = this.wa();
    w(b) && (2 == a.childNodes.length ? a.childNodes[1].nodeValue = b : a.appendChild(mc().createTextNode(b)))
  }
};
Yz.prototype.setText = Yz.prototype.ra;
Yz.prototype.$K = function() {
  switch(this.Gf.ml) {
    case Sz:
      return 2;
    case Rz:
      return 1;
    case Pz:
      return 0;
    default:
      return 1
  }
};
Yz.prototype.getCheckState = Yz.prototype.$K;
Yz.prototype.gO = function(a) {
  var b = Rz;
  switch(Number(a)) {
    case 2:
      b = Sz;
      break;
    case 1:
      b = Rz;
      break;
    case 0:
      b = Pz
  }
  this.Gf.Hv(b)
};
Yz.prototype.setCheckState = Yz.prototype.gO;
Yz.prototype.Ke = k;
Yz.prototype.$t = q("Ke");
Yz.prototype.getChangedEvent = Yz.prototype.$t;
s = Yz.prototype;
s.pf = i;
s.k = function() {
  Yz.e.k.call(this);
  var a = this.a();
  this.ra(a.text);
  this.gO(a.PJ);
  this.R(a.isEnabled);
  this.Vb(a.gg);
  this.Y(a.w);
  this.Ua(a.textAlign);
  G(this.Gf, "change", this.zW, m, this)
};
s.zW = function(a) {
  var b = new Ee("change");
  L(this, "CheckState");
  this.Ke.v(this.$K(), b);
  a.stopPropagation()
};
s.rb = r(i);
s.m = function() {
  this.Xb("CheckBox", "div", "")
};
s.l = function(a) {
  F(a, this.Gf.fa.J() + "-text", i);
  Yz.e.l.call(this, a);
  if(this.b().firstChild) {
    var b = a.firstChild;
    this.Gf.bq(b.parentNode, b)
  }else {
    this.Gf.Na(a)
  }
  this.Gf.Nv(a);
  a.setAttribute("tabindex", -1)
};
s.XH = lm.g();
s.$H = km.g();
s.Mb = q("XO");
Yz.prototype.getTextAlign = Yz.prototype.Mb;
Yz.prototype.Ua = function(a) {
  this.XO = a;
  a = Zz(this);
  a != k && dd(a, "text-align", this.XH[this.XO])
};
Yz.prototype.setTextAlign = Yz.prototype.Ua;
Yz.prototype.Yb = q("ZO");
Yz.prototype.getTextOverflow = Yz.prototype.Yb;
Yz.prototype.Va = function(a) {
  0 !== a && (this.ZO = a, a = Zz(this), a != k && (dd(a, "text-overflow", this.$H[this.ZO]), dd(a, "overflow", "hidden"), dd(a, "white-space", "nowrap")))
};
Yz.prototype.setTextOverflow = Yz.prototype.Va;
function Zz(a) {
  var b = a.b();
  return k != b ? (1 == b.childNodes.length && b.appendChild(mc().createTextNode(a.wa())), b) : k
}
Yz.prototype.Pb = function() {
  this.ga || (this.ga = new Tj);
  return this.ga
};
Yz.prototype.na = function() {
  return this.Gf.na()
};
Yz.prototype.Pa = function(a) {
  var b = this.a().error;
  this.Ni(a);
  this.a().error = a;
  "" != a && a != k ? (this.a().Hb = 16, new Ee("change"), L(this, "Error")) : b != a && 16 == this.a().Hb && this.bc(Ni)
};
Yz.prototype.setError = Yz.prototype.Pa;
Yz.prototype.Ni = function(a) {
  this.b();
  try {
    (this.jc == k && (this.jc = this.u().m("span", "tr-checkbox-erroricon")), a && "" != a) ? (D(this.b(), "tr-checkbox-error"), this.Uh || (this.b().appendChild(this.jc), this.Uh = i), this.u().Ns(this.jc, {title:"Sample"})) : (E(this.b(), "tr-checkbox-error"), this.Uh && (this.b().removeChild(this.jc), this.Uh = m))
  }catch(b) {
    alert(b + "\n...in tr.ui.CheckBox.prototype.addErrorStyle(" + a + " )")
  }
};
function $z() {
  this.Dt = []
}
C($z, Cg);
x($z);
s = $z.prototype;
s.m = function(a) {
  var b = $z.e.m.call(this, a);
  D(b, "goog-submenu");
  this.eC(a, b);
  return b
};
s.Ka = function(a, b) {
  b = $z.e.Ka.call(this, a, b);
  D(b, "goog-submenu");
  this.eC(a, b);
  var c = rc("div", "goog-menu", b);
  if(c.length) {
    var e = new Ug(a.u()), c = c[0];
    Cd(c, m);
    Yc(a.u()).body.appendChild(c);
    e.Ka(c);
    a.yi(e, i)
  }
  return b
};
s.Nc = function(a, b) {
  var c = this.La(a), e = c && c.lastChild;
  $z.e.Nc.call(this, a, b);
  e && c.lastChild != e && ab(lb(e), "goog-submenu-arrow") && c.appendChild(e)
};
s.vk = function(a) {
  $z.e.vk.call(this, a);
  var b = a.La(), c = a.u(), c = sc(c.Lb, "span", "goog-submenu-arrow", b)[0];
  aA(a, c);
  c != b.lastChild && b.appendChild(c);
  xf(a.b(), "haspopup", "true")
};
s.eC = function(a, b) {
  var c = a.u().m("span");
  c.className = "goog-submenu-arrow";
  aA(a, c);
  this.La(b).appendChild(c)
};
function aA(a, b) {
  sf(a) ? (D(b, "goog-submenu-arrow-rtl"), Pc(b, a.Io ? "\u25c4" : "\u25ba")) : (E(b, "goog-submenu-arrow-rtl"), Pc(b, a.Io ? "\u25ba" : "\u25c4"))
}
;function bA(a, b, c, e) {
  Hg.call(this, a, b, c, e || $z.g())
}
C(bA, Hg);
s = bA.prototype;
s.$c = k;
s.vq = k;
s.zu = m;
s.hb = k;
s.by = m;
s.Io = i;
s.sF = m;
s.k = function() {
  bA.e.k.call(this);
  this.ma().i(this.getParent(), "hide", this.iv);
  this.hb && this.mo(this.hb, i)
};
s.nb = function() {
  this.ma().H(this.getParent(), "hide", this.iv);
  this.hb && (this.mo(this.hb, m), this.by || (this.hb.nb(), Kc(this.hb.b())));
  bA.e.nb.call(this)
};
s.n = function() {
  this.hb && !this.by && this.hb.ba();
  this.hb = k;
  bA.e.n.call(this)
};
s.Fe = function(a, b) {
  bA.e.Fe.call(this, a);
  b && (this.oa().ji = i);
  a || (this.$c && Wf(this.$c), this.$c = Vf(this.ve, 350, this))
};
s.uq = function() {
  var a = this.getParent();
  a && Mg(a) == this && (this.Rv(i), this.Rt())
};
s.ve = function() {
  var a = this.hb;
  a && a.getParent() == this && (this.Rv(m), pf(a, function(a) {
    "function" == typeof a.ve && a.ve()
  }))
};
s.Ug = function() {
  this.$c && Wf(this.$c);
  this.vq && Wf(this.vq)
};
s.F = function(a, b) {
  var c = bA.e.F.call(this, a, b);
  c && !this.w() && this.ve();
  return c
};
s.Rt = function() {
  pf(this.getParent(), function(a) {
    a != this && "function" == typeof a.ve && (a.ve(), a.Ug())
  }, this)
};
s.Ld = function(a) {
  var b = a.keyCode;
  if(this.zu) {
    if(!this.oa().Ld(a)) {
      if(37 == b) {
        this.ve()
      }else {
        return m
      }
    }
  }else {
    if(this.isEnabled() && (39 == b || b == this.uz)) {
      this.uq(), Ng(this.oa()), this.Ug()
    }else {
      return m
    }
  }
  a.preventDefault();
  return i
};
s.cG = function() {
  this.hb.getParent() == this && (this.Ug(), this.Pn.Fe(this), this.Rt())
};
s.iv = function(a) {
  a.target == this.Pn && (this.ve(), this.Ug())
};
s.yn = function(a) {
  this.isEnabled() && (this.Ug(), this.vq = Vf(this.uq, 350, this));
  bA.e.yn.call(this, a)
};
s.si = function(a) {
  this.Ug();
  if(this.rd & 8) {
    return bA.e.si.call(this, a)
  }
  this.uq();
  return i
};
s.Rv = function(a) {
  this.dispatchEvent(of(64, a));
  var b = this.oa();
  a != b.w() && (a && (b.Ra || b.Na(), this.DG(), Lg(b, -1)), this.zu = a, F(this.b(), "goog-submenu-open", a), b.F(a))
};
s.mo = function(a, b) {
  var c = this.ma();
  (b ? c.i : c.H).call(c, a, "highlight", this.cG)
};
s.DG = function() {
  var a = new Nf(this.b(), this.Io ? 6 : 4, this.sF), b = this.oa(), c = b.b();
  b.w() || (c.style.visibility = "hidden", Cd(c, i));
  a.Jb(c, this.Io ? 4 : 6);
  b.w() || (Cd(c, m), c.style.visibility = "visible")
};
s.jg = function(a) {
  this.oa().Ca(a, i)
};
s.Qg = function(a, b) {
  this.oa().Df(a, b, i)
};
s.removeItem = function(a) {
  (a = this.oa().removeChild(a, i)) && a.ba()
};
s.Bj = function(a) {
  (a = vf(this.oa(), a, i)) && a.ba()
};
s.Hc = function(a) {
  return rf(this.oa(), a)
};
s.ij = function() {
  return qf(this.oa())
};
s.Tb = function() {
  return this.oa().Tb()
};
s.oa = function() {
  this.hb ? this.by && this.hb.getParent() != this && this.hb.wh(this) : this.yi(new Ug(this.u()), i);
  this.hb.b() || this.hb.m();
  return this.hb
};
s.yi = function(a, b) {
  var c = this.hb;
  if(a != c && (c && (this.ve(), this.Ra && this.mo(c, m)), this.hb = a, this.by = !b, a)) {
    a.wh(this), a.F(m, i), a.jq(m), a.ef(m), this.Ra && this.mo(a, i)
  }
};
s.Vg = function(a) {
  return this.oa().Vg(a)
};
cg("goog-submenu", function() {
  return new bA(k)
});
function cA() {
}
C(cA, yf);
x(cA);
cA.prototype.m = r(k);
cA.prototype.J = function() {
  return dA
};
cA.prototype.rb = r(i);
var dA = "tr-component";
function eA(a) {
  Qx.call(this, a);
  a.hasOwnProperty("alwaysShowControls") && (this.kC = a.alwaysShowControls);
  a.hasOwnProperty("captionUrl") && (this.Ro = a.captionUrl);
  a.hasOwnProperty("error") && (this.error = a.error)
}
C(eA, Qx);
eA.prototype.kC = i;
eA.prototype.error = "";
eA.prototype.Ro = "";
function fA(a) {
  mj.call(this, a);
  a.hasOwnProperty("displayInline") && (this.FK = a.displayInline)
}
C(fA, mj);
fA.prototype.FK = m;
var gA = new gl("etk-richbutton");
function hA(a, b, c, e, f) {
  Rn.call(this, a, b, c, z(e) ? e : gA, f);
  this.wb = new yh(this, "Clicked", c, bk(b, "Clicked"))
}
C(hA, Rn);
ag(hA, Uj);
H.g().z("RichButton", hA);
hA.prototype.M = fA.prototype;
hA.prototype.wb = k;
hA.prototype.pb = function(a) {
  this.a().hasFocus = a;
  this.Pk(a);
  a && (a = this.b()) && a.focus()
};
hA.prototype.setHasFocus = hA.prototype.pb;
hA.prototype.Z = function() {
  return this.a().isEnabled
};
hA.prototype.getIsEnabled = hA.prototype.Z;
hA.prototype.R = function(a) {
  this.a().isEnabled = a;
  this.Oa(a)
};
hA.prototype.setIsEnabled = hA.prototype.R;
s = hA.prototype;
s.k = function() {
  hA.e.k.call(this);
  var a = this.ma();
  a.i(this.b(), "mouseover", this.qi);
  a.i(this.b(), "mouseout", this.Dg);
  a.i(this.b(), "mousedown", this.Be);
  a.i(this.b(), "click", this.yj)
};
s.Pk = function(a) {
  hA.e.Pk.call(this, a);
  a && this.b().focus()
};
s.kn = r(i);
s.l = function(a) {
  hA.e.l.call(this, a);
  this.a().FK && D(this.b(), "etk-richbutton-inline")
};
s.m = function() {
  this.Xb("RichButton", "div", "tr-richbutton")
};
s.Be = function() {
  this.isEnabled() && D(this.b(), "etk-richbutton-mousedown")
};
s.qi = p();
s.Dg = p();
s.xd = q("wb");
s.yj = function(a) {
  this.wb.v(a);
  this.Pk(i)
};
function iA(a) {
  mj.call(this, a)
}
C(iA, mj);
var jA = new gl("etk-splitbutton");
function kA(a, b, c, e, f) {
  Rn.call(this, a, b, c, z(e) ? e : jA, f);
  this.gc(i);
  this.EK = []
}
C(kA, Rn);
ag(kA, Uj);
H.g().z("SplitButton", kA);
kA.prototype.M = iA.prototype;
kA.prototype.St = k;
kA.prototype.EK = k;
kA.prototype.pb = function(a) {
  this.a().hasFocus = a;
  this.Pk(a);
  a && (a = this.b()) && a.focus()
};
kA.prototype.setHasFocus = kA.prototype.pb;
kA.prototype.Z = function() {
  return this.a().isEnabled
};
kA.prototype.getIsEnabled = kA.prototype.Z;
kA.prototype.R = function(a) {
  this.a().isEnabled = a;
  this.Oa(a)
};
kA.prototype.setIsEnabled = kA.prototype.R;
s = kA.prototype;
s.k = function() {
  kA.e.k.call(this)
};
s.l = function(a) {
  kA.e.l.call(this, a);
  D(this.b(), "etk-splitbutton-inline")
};
s.m = function() {
  this.Xb("SplitButton", "div", "tr-splitbutton")
};
s.Cz = function() {
  var a = Ac("div", "etk-row");
  a.setAttribute("data-etk-type", "Row");
  this.St = new Mv(new Hv({}), {}, i);
  this.St.Ka(a);
  for(a = Lc(this.b());0 < a.length;) {
    var b = a[0], c = 1, e;
    e = b;
    var f = e.getAttribute("data-etk-type");
    w(f) ? e = f : (f = e["data-etk-type"], e = w(f) ? f : "");
    switch(e) {
      case "Button":
      ;
      case "DropdownButton":
        c = 0
    }
    c = new Un(new pj({enableMargin:m, width:c, isFlexible:i}), {}, i);
    c.Na(this.St.b());
    this.EK.push(c);
    this.St.Ca(c);
    c.b().appendChild(b)
  }
  this.b().appendChild(this.St.b())
};
s.Be = function() {
  this.isEnabled() && D(this.b(), "etk-splitbutton-mousedown")
};
s.qi = p();
s.Dg = p();
function lA() {
}
Kj.g().z("ColorChangeConverter", lA);
Kj.g().z(0, lA);
s = lA.prototype;
s.cB = "12";
s.Tx = "13";
s.aB = "14";
s.ul = function(a) {
  var b = this.aB;
  0 < parseFloat(a) ? b = this.cB : 0 > parseFloat(a) && (b = this.Tx);
  return b
};
s.kr = p();
function mA(a) {
  nj.call(this, a);
  a.hasOwnProperty("text2") && (this.xo = a.text2);
  a.hasOwnProperty("textAlign") && (this.textAlign = a.textAlign);
  a.hasOwnProperty("textOverflow") && (this.ya = a.textOverflow);
  a.hasOwnProperty("toggleState") && (this.Rc = a.toggleState)
}
C(mA, nj);
mA.prototype.xo = "";
mA.prototype.textAlign = 0;
mA.prototype.ya = 0;
mA.prototype.Rc = 0;
function nA(a) {
  $w.call(this, a);
  a.hasOwnProperty("button") && (this.button = a.button)
}
C(nA, $w);
nA.prototype.button = k;
function oA(a, b, c, e, f) {
  Tx(this, a, c, k, e, f);
  this.zs = this.Aa.priority || 1E3;
  this.ps = this.Aa.minWidth || 6;
  this.ps = this.yx(this.ps);
  this.kM = this.Aa.fixed || m
}
C(oA, mf);
H.g().z("LayoutPanelSection", oA);
s = oA.prototype;
s.Zi = m;
s.k = function() {
  oA.e.k.call(this)
};
s.l = function(a) {
  this.s = a;
  var b;
  b = parseInt(fd(a, "left").replace("px", ""), 10);
  var c = parseInt(fd(a, "top").replace("px", ""), 10), e = parseInt(fd(a, "width").replace("px", ""), 10), a = parseInt(fd(a, "height").replace("px", ""), 10);
  b = new cd(b, c, e, a);
  pA(this, b.left);
  this.xa(b.width);
  qA(this, b.width);
  this.Ma(b.height);
  this.SL = b.width;
  this.pd(b.top);
  this.NF = this.kM ? this.Ha() : 1E4;
  this.Jm.fixedwidth = k;
  this.Jm.minwidthreached = this.OT;
  this.Jm.maxshrinkreached = k;
  this.Jm.minheightreached = k;
  this.Jm.maxwidthreached = this.KT;
  this.Ha();
  this.XE = b.left
};
s.jl = fa;
s.zs = 1E3;
s.ps = 204;
s.Jr = q("ps");
s.kM = m;
s.sc = function() {
  return this.b().offsetTop
};
s.pd = function(a) {
  this.b().style.setProperty("top", a + "px");
  this.Ne = a
};
s.mb = i;
s.w = q("mb");
s.F = ba("mb");
s.Y = function(a) {
  this.F(a)
};
s.ob = function() {
  return this.w()
};
s.qh = k;
s.Zg = 0;
s.Ic = function() {
  return this.b().offsetLeft
};
function pA(a, b) {
  a.Zg = Math.max(0, b)
}
s.Ge = function(a) {
  this.b().style.setProperty("left", a + "px");
  pA(this, a)
};
s.Yg = 0;
function qA(a, b) {
  a.Yg = parseInt(b, 10)
}
s.Ha = function() {
  return this.b().offsetWidth
};
s.xa = function(a) {
  this.b().style.setProperty("width", a + "px");
  qA(this, a)
};
s.SL = 0;
s.XE = 0;
s.qr = 0;
s.Ne = 0;
s.bd = 0;
s.va = function() {
  return this.b().offsetHeight
};
s.Ma = function(a) {
  this.b().style.setProperty("height", a + "px");
  this.qr = a
};
s.Jm = [];
s.OT = function() {
  return this.Yg < this.ps ? (qA(this, this.ps), i) : m
};
s.NF = 1E3;
s.KT = function(a) {
  a = this.yx(a);
  return this.Yg >= Math.min(this.NF, a) ? (qA(this, Math.min(this.NF, a)), i) : m
};
function rA(a) {
  if(a.Zg != a.Ic() || a.Yg != a.Ha() || a.qr != a.va() || a.Ne != a.sc()) {
    fh.g().log("Layout Section priority" + a.zs + "setting width to " + a.Yg), fh.g().log("Layout Section priority" + a.zs + "setting left to " + a.Zg), fh.g().log("Layout Section priority" + a.zs + "setting height to " + a.qr), a.Ge(a.Zg), a.xa(a.Yg), a.Ma(a.qr), a.pd(a.Ne)
  }
}
s.yx = function(a) {
  1 > a && d("Invalid parameter units in LayoutPanel.convertUnitToPixel_. Value" + a);
  return 29 * a + 6 * Math.max(1, a - 1)
};
function sA(a) {
  return new cd(a.Ic(), a.sc(), a.Ha(), a.va())
}
function tA(a) {
  return new cd(a.Zg, a.Ne, a.Yg, a.va())
}
s.restore = function(a) {
  this.Ne = this.qh.top;
  this.qr = this.qh.height;
  qA(this, this.qh.width);
  0 == this.qh.left ? pA(this, 0) : pA(this, a - this.Yg);
  this.Zi = m;
  return tA(this)
};
function uA(a, b) {
  var c = parseFloat(a.XE - b.XE);
  0 == c && (c = parseFloat(a.Ne - b.Ne));
  return c
}
function vA(a, b) {
  return a.Ne == b.top || 12 >= Math.abs(a.va() + a.Ne - (b.top + b.height)) || a.Ne >= b.top && a.Ne + a.va() <= b.top + b.height || a.Ne <= b.top && a.Ne + a.va() >= b.top + b.height ? i : m
}
s.Pb = function() {
  this.ga || (this.ga = new Tj);
  return this.ga
};
function wA(a, b, c, e) {
  gh.call(this, a, e);
  this.X = b;
  this.Ga = c
}
C(wA, gh);
wA.prototype.type = "etk_MenuItem_changed";
wA.prototype.X = k;
wA.prototype.Jc = q("X");
wA.prototype.getPrevious = wA.prototype.Jc;
wA.prototype.Ga = k;
wA.prototype.qc = q("Ga");
wA.prototype.getCurrent = wA.prototype.qc;
function xA(a, b, c) {
  c = c != g ? c : a;
  c[0] = a[0] - b[0];
  c[1] = a[1] - b[1];
  c[2] = a[2] - b[2]
}
function yA(a, b) {
  return a[0] * b[0] + a[1] * b[1] + a[2] * b[2]
}
;function zA(a) {
  this.DI = 1.0E-5;
  this.NA = 0;
  this.Fm = [m, m, m, m];
  this.sa = [];
  this.Ob = a;
  this.Kw = this.Gd = this.kb = k
}
zA.prototype.A = function(a, b, c) {
  this.sa.push([a, b, c]);
  this.NA += c
};
function AA(a, b, c) {
  for(var e = 0;e < c.length;e++) {
    a.sa.push(b[c[e]]), a.NA += b[c[e]][2]
  }
  BA(a)
}
function BA(a) {
  if(3 <= a.sa.length) {
    if(a.Ob == k || a.Ob.kb == k) {
      a.kb = [];
      var b = a.sa[1], c = a.sa[2], e = [], f = [];
      xA(a.sa[0], b, e);
      xA(c, b, f);
      b = a.kb;
      b = b != g ? b : f;
      b[0] = f[1] * e[2] - f[2] * e[1];
      b[1] = f[2] * e[0] - f[0] * e[2];
      b[2] = f[0] * e[1] - f[1] * e[0];
      e = a.kb;
      f = Math.sqrt(e[0] * e[0] + e[1] * e[1] + e[2] * e[2]);
      e[0] /= f;
      e[1] /= f;
      e[2] /= f
    }else {
      a.kb = a.Ob.kb
    }
    a.Ob.Gd !== g && (a.Gd = a.Ob.Gd);
    a.Kw = yA(a.kb, a.sa[0])
  }
}
function CA(a, b) {
  for(var c = 0;3 > c;c++) {
    b.sa[c].Bf == m && b.sa[(c + 1) % 3].Bf == m || b.sa[c].Bf == i && 0 == b.sa[c].ig && b.sa[(c + 1) % 3].Bf == m && 1 == b.sa[(c + 1) % 3].ig || b.sa[(c + 1) % 3].Bf == i && 0 == b.sa[(c + 1) % 3].ig && b.sa[c].Bf == m && 1 == b.sa[c].ig || b.sa[c].Bf == m && 0 == b.sa[c].ig && b.sa[(c + 1) % 3].Bf == i && 2 == b.sa[(c + 1) % 3].ig || b.sa[(c + 1) % 3].Bf == m && 0 == b.sa[(c + 1) % 3].ig && b.sa[c].Bf == i && 2 == b.sa[c].ig || b.sa[c].Bf == i && 1 == b.sa[c].ig && b.sa[(c + 1) % 3].Bf == m && 
    2 == b.sa[(c + 1) % 3].ig || b.sa[(c + 1) % 3].Bf == i && 1 == b.sa[(c + 1) % 3].ig && b.sa[c].Bf == m && 2 == b.sa[c].ig || a.Fm[b.sa[c].ig] && (b.Fm[c] = i)
  }
}
;function DA(a) {
  this.vj = k;
  this.vj = a ? a : $y()
}
function EA(a, b) {
  ez(a.vj, b, 1, 0, 0);
  return new DA(a.vj)
}
function FA(a, b) {
  ez(a.vj, b, 0, 1, 0);
  return new DA(a.vj)
}
function GA(a) {
  return a.vj
}
;function HA(a, b, c) {
  this.aX = a;
  this.cX = b;
  this.dX = c;
  this.oV = 12;
  this.Dm = [a, b, c];
  this.Ou = m;
  this.Gh = "Transparent";
  this.Hh = "#FFFFFF";
  this.Mi = 0.25;
  this.CI = 12;
  this.zI = this.QI = -1
}
function IA(a, b) {
  a.Dm = [a.aX, a.cX, a.dX];
  dz(b, a.Dm, a.Dm)
}
;function JA() {
  this.Xw = this.iy = this.lm = k
}
function KA(a, b) {
  if(0 != b.length) {
    a.lm = b[0];
    for(var c = [], e = [], f = 1;f < b.length;f++) {
      var h = a.lm, j = b[f], l = c, n = e;
      (h.kb == k || h.Kw == k) && d("This SplitPolygon is not ready to Split the other");
      for(var o = m, u = m, t = [], v = 0;v < j.sa.length;v++) {
        var y = yA(h.kb, j.sa[v]) - h.Kw;
        y > h.DI ? (o = i, t.push(0)) : y < -h.DI ? (u = i, t.push(1)) : t.push(2);
        j.sa[v].Bf = i;
        j.sa[v].ig = v
      }
      if(o && !u) {
        l.push(j)
      }else {
        if(!o && u) {
          n.push(j)
        }else {
          if(!o && !u) {
            l.push(j)
          }else {
            if(j.Nq == i) {
              n.push(j)
            }else {
              u = [];
              o = [];
              for(v = 0;v < t.length;v++) {
                if(y = (v + 1) % t.length, t[v] == t[y]) {
                  0 == t[v] ? u.push(j.sa[v]) : o.push(j.sa[v])
                }else {
                  if(0 == t[v] ? u.push(j.sa[v]) : (1 != t[v] && u.push(j.sa[v]), o.push(j.sa[v])), 2 != t[v] && 2 != t[y]) {
                    var J = j.sa[v], M = j.sa[y], oa = [];
                    xA(M, J, oa);
                    var y = [], Q = J, J = (h.Kw - yA(h.kb, J)) / yA(h.kb, oa), oa = y != g ? y : Q;
                    oa[0] = Q[0] + J * (M[0] = Q[0]);
                    oa[1] = Q[1] + J * (M[1] = Q[1]);
                    oa[2] = Q[2] + J * (M[2] = Q[2]);
                    y.Bf = m;
                    y.ig = v;
                    u.push(y);
                    o.push(y)
                  }
                }
              }
              3 == u.length ? (h = new zA(j.Ob), AA(h, u, [0, 1, 2]), CA(j, h), h.Nq = i, l.push(h)) : 4 == u.length ? (h = new zA(j.Ob), AA(h, u, [0, 1, 2]), CA(j, h), h.Nq = i, l.push(h), h = new zA(j.Ob), AA(h, u, [0, 2, 3]), CA(j, h), h.Nq = i, l.push(h)) : d("Error Spliting Polygon, found " + u.length + " vertices sliced");
              3 == o.length ? (l = new zA(j.Ob), AA(l, o, [0, 1, 2]), CA(j, l), l.Nq = i, n.push(l)) : 4 == o.length ? (l = new zA(j.Ob), AA(l, o, [0, 1, 2]), CA(j, l), l.Nq = i, n.push(l), l = new zA(j.Ob), AA(l, o, [0, 2, 3]), CA(j, l), l.Nq = i, n.push(l)) : d("Error Spliting Polygon, found " + o.length + " vertices sliced")
            }
          }
        }
      }
    }
    0 < c.length && (a.iy = new JA, KA(a.iy, c));
    0 < e.length && (a.Xw = new JA, KA(a.Xw, e))
  }
}
;function LA(a, b, c, e) {
  this.yc = [];
  this.al = $y();
  this.ds = $y();
  this.Gk = this.Fk = 0;
  this.Dh = [];
  this.s = b;
  this.ha = a;
  this.Sc = c;
  this.bd = e
}
s = LA.prototype;
s.ha = "";
s.yc = k;
s.al = k;
s.ds = k;
s.Fk = 0;
s.Gk = 0;
s.Dh = k;
s.s = k;
s.Sc = k;
s.bd = k;
s.vb = function(a) {
  this.yc.push(a);
  var b = k;
  switch(a.Go) {
    case 1:
      var c = a.sa, b = c[0], e = c[1], c = c[2], a = new zA(a);
      a.A(b, e, c);
      a.A(b + 0.4, e, c);
      a.A(b, e + 0.4, c);
      BA(a);
      b = [a];
      break;
    case 2:
      for(var b = [], e = a.sa, c = e.length / 3, f = 0;f < c - 1;f++) {
        var h = new zA(a), j = e[3 * f], l = e[3 * f + 1], n = e[3 * f + 2], o = e[3 * f + 3], u = e[3 * f + 4], t = e[3 * f + 5];
        h.A(j, l, n);
        h.A(o, u, t);
        h.A(j + 0.4, l + 0.4, n);
        BA(h);
        b.push(h)
      }
      break;
    case 3:
      b = a.sa;
      e = b.length / 3;
      if(3 > e) {
        b = k
      }else {
        c = [];
        for(j = h = f = 0;j < e - 2;j++) {
          l = new zA(a), 0 == j % 2 ? (f = b[3 * j], h = b[3 * j + 1], l.A(f, h, b[3 * j + 2]), f = b[3 * (j + 2)], h = b[3 * (j + 2) + 1], l.A(f, h, b[3 * (j + 2) + 2]), f = b[3 * (j + 1)], h = b[3 * (j + 1) + 1], l.A(f, h, b[3 * (j + 1) + 2]), l.Fm[0] = i) : (f = b[3 * j], h = b[3 * j + 1], l.A(f, h, b[3 * j + 2]), f = b[3 * (j + 1)], h = b[3 * (j + 1) + 1], l.A(f, h, b[3 * (j + 1) + 2]), f = b[3 * (j + 2)], h = b[3 * (j + 2) + 1], l.A(f, h, b[3 * (j + 2) + 2]), l.Fm[2] = i), BA(l), c.push(l)
        }
        0 < c.length && (c[0].Fm[2] = i, c[c.length - 1].Fm[1] = i);
        b = c
      }
      break;
    case 4:
      b = a.sa;
      e = b.length / 3;
      if(3 > e) {
        b = g
      }else {
        c = [];
        f = b[0];
        h = b[1];
        for(j = 1;j < e - 1;j++) {
          l = new zA(a), l.A(f, h, b[2]), n = b[3 * j], o = b[3 * j + 1], l.A(n, o, b[3 * j + 2]), n = b[3 * (j + 1)], o = b[3 * (j + 1) + 1], l.A(n, o, b[3 * (j + 1) + 2]), l.Fm[1] = i, BA(l), c.push(l)
        }
        b = c
      }
      break;
    case 6:
      b = new zA(a), e = a.sa, c = e[0], f = e[1], h = e[2], 3 == a.sa.length ? (b.A(c, f, h), b.A(c + 0.4, f, h)) : (b.A(c, f, h), b.A(e[3], e[4], e[5])), b.A(c, f + 0.4, h), BA(b), b = [b]
  }
  b != k && (this.Dh = this.Dh.concat(b))
};
s.init = function() {
  var a = document.getElementById(this.ha + "_canvas");
  a !== k ? this.cc = a : (this.cc = document.createElement("canvas"), this.cc.id = this.ha + "_canvas", this.s.appendChild(this.cc));
  this.cc.width = this.Sc;
  this.cc.height = this.bd;
  this.cc.style.top = "0px";
  this.cc.style.left = "0px";
  this.cc.style.position = "absolute"
};
s.KC = function() {
  this.yc = [];
  this.Dh = []
};
s.Na = function() {
  var a = this.cc.getContext("2d"), b = [0, 0, 1E5];
  dz(this.al, b, b);
  for(b = 0;b < this.Dh.length;b++) {
    for(var c = [], e = 0;e < this.Dh[b].sa.length;e++) {
      var f = this.Dh[b].sa[e].slice();
      dz(this.ds, f, f);
      c.push(f)
    }
    this.Dh[b].Uj = c
  }
  this.Dh.sort(this.AW);
  a.save();
  a.translate(this.Fk + 0.5, this.Gk + 0.5);
  for(e = 0;e < this.Dh.length;e++) {
    this.Ux(a, this.Dh[e], this.ds)
  }
  a.restore()
};
s.sH = function(a, b) {
  this.Fk = a;
  this.Gk = b
};
s.Ma = function(a) {
  this.bd = a;
  this.cc.height = a
};
s.xa = function(a) {
  this.Sc = a;
  this.cc.width = a
};
s.Sv = function(a) {
  this.al = a;
  cz(this.al, this.ds)
};
s.AW = function(a, b) {
  for(var c = 0, e = a.Uj.length, f = 0;f < e;f++) {
    c += a.Uj[f][2]
  }
  for(var c = c / a.Uj.length, e = 0, f = b.Uj.length, h = 0;h < f;h++) {
    e += b.Uj[h][2]
  }
  e /= b.Uj.length;
  return c - e
};
s.Ux = function(a, b, c) {
  switch(b.Ob.Go) {
    case 1:
      MA(a, b, b.Uj);
      break;
    case 2:
      NA(a, b, b.Uj);
      break;
    case 6:
      this.Vx(a, b, b.Uj, c);
      break;
    case 3:
    ;
    case 4:
      OA(a, b, b.Uj)
  }
};
function MA(a, b, c) {
  var e = c[0][0], c = -c[0][1];
  a.fillStyle = b.Ob.Hh;
  a.beginPath();
  a.arc(e, c, b.Ob.Mi / 2, 0, 2 * Math.PI, i);
  a.closePath();
  a.fill()
}
function PA(a, b, c, e, f, h, j) {
  a.save();
  a.globalAlpha = 0.5;
  a.beginPath();
  a.moveTo(b, c);
  a.lineTo(e, f);
  a.strokeStyle = h;
  a.lineWidth = j;
  a.lineCap = "round";
  a.stroke();
  a.restore()
}
function NA(a, b, c) {
  for(var e = 0;e < c.length - 1;e++) {
    PA(a, c[e][0], -c[e][1], c[e + 1][0], -c[e + 1][1], b.Ob.Hh, b.Ob.Mi)
  }
}
function OA(a, b, c) {
  var e = c.length;
  a.beginPath();
  a.moveTo(c[0][0], -c[0][1]);
  for(var f = 1;f < e;f++) {
    a.lineTo(c[f][0], -c[f][1])
  }
  a.closePath();
  var h = b.Ob.Gh;
  h != k && (a.fillStyle = h, a.fill(), a.strokeStyle = h, a.lineWidth = 1, a.stroke());
  for(f = 0;f < e;f++) {
    var j = (f + 1) % e;
    b.Fm[f] && b.Ob.Hh != k ? PA(a, c[f][0], -c[f][1], c[j][0], -c[j][1], b.Ob.Hh, b.Ob.Mi) : PA(a, c[f][0], -c[f][1], c[j][0], -c[j][1], h, b.Ob.Mi)
  }
}
s.Vx = function(a, b, c, e) {
  var f = c[0][0], c = -c[0][1];
  a.font = b.Ob.Fw;
  a.textAlign = b.Ob.Cw;
  a.textBaseline = b.Ob.Dw;
  a.fillStyle = b.Ob.Gh;
  a.save();
  var h = [];
  na(b.Ob.Cf) ? bz(e, b.Ob.Cf, h) : h = e;
  b.Ob.Hw == i && a.transform(h[0], -h[1], -h[4], h[5], f, c);
  a.fillText(b.Ob.Jw, 0, 0);
  a.restore()
};
function QA(a, b, c, e) {
  LA.call(this, a, b, c, e);
  this.Oo = k;
  this.ci = [];
  this.hz = k
}
C(QA, LA);
s = QA.prototype;
s.Oo = k;
s.vb = function(a) {
  QA.e.vb.call(this, a);
  this.Oo = k
};
s.KC = function() {
  this.yc = [];
  this.Oo = k;
  this.Dh = [];
  this.ci = []
};
s.init = function(a) {
  a !== i && QA.e.init.call(this);
  a = document.getElementById(this.ha + "_canvas2d");
  a !== k ? this.Ui = a : (this.Ui = document.createElement("canvas"), this.Ui.id = this.ha + "_canvas2d", this.s.appendChild(this.Ui));
  this.Ui.width = this.Sc;
  this.Ui.height = this.bd;
  this.Ui.style.top = "0 px";
  this.Ui.style.left = "0 px";
  this.Ui.style.position = "absolute"
};
s.Na = function() {
  this.Oo === k && (this.Oo = new JA, KA(this.Oo, this.Dh));
  if(this.cc) {
    this.cc.width = this.Sc;
    var a = this.cc.getContext("2d"), b = [0, 0, 1E5];
    dz(this.al, b, b);
    a.fillStyle = "Transparent";
    a.fillRect(0, 0, this.Sc, this.bd);
    a.save();
    a.translate(this.Fk + 0.5, this.Gk + 0.5);
    RA(this, a, b, this.ds, this.Oo);
    a.restore()
  }
  SA(this)
};
function SA(a) {
  if(a.Ui) {
    a.Ui.width = a.Sc;
    var b = a.Ui.getContext("2d");
    b.save();
    b.translate(a.Fk + 0.5, a.Gk + 0.5);
    a.hz !== k && (a = a.hz, a.Ou && (b.beginPath(), b.lineWidth = a.Mi, b.fillStyle = a.Gh, b.strokeStyle = a.Hh, b.arc(a.Dm[0], -a.Dm[1], a.CI, 0, 2 * Math.PI, i), b.fill(), b.stroke()));
    b.restore()
  }
}
s.xa = ba("Sc");
s.Ma = ba("bd");
s.Sv = function(a) {
  QA.e.Sv.call(this, a);
  for(a = 0;a < this.ci.length;a++) {
    IA(this.ci[a], this.ds)
  }
  this.ci.sort(function(a, c) {
    var e = a.Dm[2], f = c.Dm[2];
    return e > f ? -1 : e < f ? 1 : 0
  })
};
function RA(a, b, c, e, f) {
  if(!(f == k || f.lm == k)) {
    if(0 <= yA(c, f.lm.kb)) {
      RA(a, b, c, e, f.Xw);
      var h = 0;
      na(f.lm.Gd) && (h = yA(c, f.lm.Gd));
      0 <= h && a.Ux(b, f.lm, e);
      RA(a, b, c, e, f.iy)
    }else {
      RA(a, b, c, e, f.iy), f.lm.Ob.Li || a.Ux(b, f.lm, e), RA(a, b, c, e, f.Xw)
    }
  }
}
s.Ux = function(a, b, c) {
  for(var e = [], f = 0;f < b.sa.length;f++) {
    var h = b.sa[f].slice();
    dz(c, h, h);
    e.push(h)
  }
  switch(b.Ob.Go) {
    case 1:
      MA(a, b, e);
      break;
    case 2:
      NA(a, b, e);
      break;
    case 6:
      this.Vx(a, b, e, c);
      break;
    case 3:
    ;
    case 4:
      OA(a, b, e)
  }
};
function iz() {
}
C(iz, fz);
x(iz);
iz.prototype.J = function() {
  return TA
};
var TA = "tr-tabstripitem";
function UA(a) {
  ij.call(this, a);
  a.hasOwnProperty("group") && (this.group = a.group);
  a.hasOwnProperty("imageHeight") && (this.ML = a.imageHeight);
  a.hasOwnProperty("imageIsSprite") && (this.TE = a.imageIsSprite);
  a.hasOwnProperty("imageURL") && (this.Ap = a.imageURL);
  a.hasOwnProperty("isEnabled") && (this.isEnabled = a.isEnabled);
  a.hasOwnProperty("isSelectable") && (this.tM = a.isSelectable);
  a.hasOwnProperty("isSelected") && (this.uc = a.isSelected);
  a.hasOwnProperty("isSeparator") && (this.uM = a.isSeparator);
  a.hasOwnProperty("itemID") && (this.Vf = a.itemID);
  if(a.hasOwnProperty("items")) {
    this.T = [];
    for(var b = a.items, c = 0;c < b.length;c++) {
      this.T.push(new UA(b[c]))
    }
  }
  a.hasOwnProperty("shortcut") && (this.xO = a.shortcut);
  a.hasOwnProperty("spriteLeft") && (this.KO = a.spriteLeft);
  a.hasOwnProperty("spriteTop") && (this.LO = a.spriteTop);
  a.hasOwnProperty("text") && (this.text = a.text);
  a.hasOwnProperty("imageWidth") && (this.PL = a.imageWidth);
  a.hasOwnProperty("imageLeft") && (this.NL = a.imageLeft);
  a.hasOwnProperty("imageTop") && (this.OL = a.imageTop)
}
C(UA, ij);
s = UA.prototype;
s.group = "";
s.ML = 0;
s.TE = m;
s.Ap = "";
s.isEnabled = m;
s.tM = m;
s.uc = m;
s.uM = m;
s.Vf = "";
s.T = [];
s.xO = "";
s.KO = 0;
s.LO = 0;
s.text = "";
s.PL = 0;
s.NL = 0;
s.OL = 0;
function VA(a) {
  ij.call(this, a);
  if(a.hasOwnProperty("items")) {
    this.T = [];
    for(var a = a.items, b = 0;b < a.length;b++) {
      this.T.push(new UA(a[b]))
    }
  }
}
C(VA, ij);
VA.prototype.T = [];
function WA(a, b, c) {
  this.target = a;
  this.handle = b || a;
  this.GF = c || new cd(NaN, NaN, NaN, NaN);
  this.Lb = pc(a);
  this.hd = new ff(this);
  G(this.handle, ["touchstart", "mousedown"], this.MO, m, this)
}
C(WA, lf);
var XA = Ob || Pb && dc("1.9.3");
s = WA.prototype;
s.clientX = 0;
s.clientY = 0;
s.screenX = 0;
s.screenY = 0;
s.LA = 0;
s.MA = 0;
s.or = 0;
s.pr = 0;
s.Sb = i;
s.Sm = m;
s.KL = 0;
s.uT = m;
s.ma = q("hd");
s.Oa = ba("Sb");
s.n = function() {
  WA.e.n.call(this);
  Ve(this.handle, ["touchstart", "mousedown"], this.MO, m, this);
  this.hd.ba();
  delete this.target;
  delete this.handle;
  delete this.hd
};
s.MO = function(a) {
  var b = "mousedown" == a.type;
  if(this.Sb && !this.Sm && (!b || Me(a))) {
    YA(a);
    if(0 == this.KL) {
      if(ZA(this, a), this.Sm) {
        a.preventDefault()
      }else {
        return
      }
    }else {
      a.preventDefault()
    }
    var b = this.Lb, c = b.documentElement, e = !XA;
    this.hd.i(b, ["touchmove", "mousemove"], this.gT, e);
    this.hd.i(b, ["touchend", "mouseup"], this.$x, e);
    XA ? (c.setCapture(m), this.hd.i(c, "losecapture", this.$x)) : this.hd.i(zc(b), "blur", this.$x);
    Ob && this.uT && this.hd.i(b, "dragstart", Fe);
    this.BV && this.hd.i(this.BV, "scroll", this.JU, e);
    this.clientX = this.LA = a.clientX;
    this.clientY = this.MA = a.clientY;
    this.screenX = a.screenX;
    this.screenY = a.screenY;
    this.or = this.target.offsetLeft;
    this.pr = this.target.offsetTop;
    this.BG = ad(mc(this.Lb));
    va()
  }else {
    this.dispatchEvent("earlycancel")
  }
};
function ZA(a, b) {
  a.dispatchEvent(new $A("start", a, b.clientX, b.clientY)) !== m && (a.Sm = i)
}
s.$x = function(a) {
  jf(this.hd);
  XA && this.Lb.releaseCapture();
  var b = aB(this, this.or), c = bB(this, this.pr);
  this.Sm ? (YA(a), this.Sm = m, this.dispatchEvent(new $A("end", this, a.clientX, a.clientY, 0, b, c))) : this.dispatchEvent("earlycancel");
  ("touchend" == a.type || "touchcancel" == a.type) && a.preventDefault()
};
function YA(a) {
  var b = a.type;
  "touchstart" == b || "touchmove" == b ? a.init(a.Rd.targetTouches[0], a.currentTarget) : ("touchend" == b || "touchcancel" == b) && a.init(a.Rd.changedTouches[0], a.currentTarget)
}
s.gT = function(a) {
  if(this.Sb) {
    YA(a);
    var b = a.clientX - this.clientX, c = a.clientY - this.clientY;
    this.clientX = a.clientX;
    this.clientY = a.clientY;
    this.screenX = a.screenX;
    this.screenY = a.screenY;
    if(!this.Sm) {
      var e = this.LA - this.clientX, f = this.MA - this.clientY;
      if(e * e + f * f > this.KL && (ZA(this, a), !this.Sm)) {
        this.$x(a);
        return
      }
    }
    c = this.BC(b, c);
    b = c.x;
    c = c.y;
    this.Sm && this.dispatchEvent(new $A("beforedrag", this, a.clientX, a.clientY, 0, b, c)) !== m && (cB(this, a, b, c), a.preventDefault())
  }
};
s.BC = function(a, b) {
  var c = ad(mc(this.Lb)), a = a + (c.x - this.BG.x), b = b + (c.y - this.BG.y);
  this.BG = c;
  this.or += a;
  this.pr += b;
  var c = aB(this, this.or), e = bB(this, this.pr);
  return new kc(c, e)
};
s.JU = function(a) {
  var b = this.BC(0, 0);
  a.clientX = this.clientX;
  a.clientY = this.clientY;
  cB(this, a, b.x, b.y)
};
function cB(a, b, c, e) {
  a.target.style.left = c + "px";
  a.target.style.top = e + "px";
  a.dispatchEvent(new $A("drag", a, b.clientX, b.clientY, 0, c, e))
}
function aB(a, b) {
  var c = a.GF, e = !isNaN(c.left) ? c.left : k, c = !isNaN(c.width) ? c.width : 0;
  return Math.min(e != k ? e + c : Infinity, Math.max(e != k ? e : -Infinity, b))
}
function bB(a, b) {
  var c = a.GF, e = !isNaN(c.top) ? c.top : k, c = !isNaN(c.height) ? c.height : 0;
  return Math.min(e != k ? e + c : Infinity, Math.max(e != k ? e : -Infinity, b))
}
function $A(a, b, c, e, f, h, j) {
  Ee.call(this, a);
  this.clientX = c;
  this.clientY = e;
  this.left = z(h) ? h : b.or;
  this.top = z(j) ? j : b.pr
}
C($A, Ee);
function dB(a, b) {
  mf.call(this, b);
  this.OW = !!a
}
C(dB, mf);
s = dB.prototype;
s.fp = k;
s.mb = m;
s.wd = k;
s.oe = k;
s.Wk = k;
s.J = r("goog-modalpopup");
s.ip = q("wd");
s.m = function() {
  dB.e.m.call(this);
  var a = this.b();
  D(a, this.J());
  Tc(a, i);
  Cd(a, m);
  eB(this);
  fB(this)
};
function eB(a) {
  if(a.OW && !a.oe) {
    var b;
    b = a.u().m("iframe", {frameborder:0, style:"border:0;vertical-align:bottom;", src:'javascript:""'});
    a.oe = b;
    a.oe.className = a.J() + "-bg";
    Cd(a.oe, m);
    Bd(a.oe, 0)
  }
  a.wd || (a.wd = a.u().m("div", a.J() + "-bg"), Cd(a.wd, m))
}
function fB(a) {
  a.Wk || (a.Wk = a.u().createElement("span"), Cd(a.Wk, m), Tc(a.Wk, i), a.Wk.style.position = "absolute")
}
s.NN = function() {
  this.oe && Ic(this.oe, this.b());
  Ic(this.wd, this.b())
};
s.rb = function(a) {
  return!!a && "DIV" == a.tagName
};
s.l = function(a) {
  dB.e.l.call(this, a);
  D(this.b(), this.J());
  eB(this);
  fB(this);
  Cd(this.b(), m)
};
s.k = function() {
  this.NN();
  dB.e.k.call(this);
  Jc(this.Wk, this.b());
  this.fp = new Tw(Yc(this.u()));
  this.ma().i(this.fp, "focusin", this.xs)
};
s.nb = function() {
  this.w() && this.F(m);
  $d(this.fp);
  dB.e.nb.call(this);
  Kc(this.oe);
  Kc(this.wd);
  Kc(this.Wk)
};
s.F = function(a) {
  a != this.mb && (a ? this.LH() : this.Tr())
};
s.LH = function() {
  this.dispatchEvent("beforeshow") && (this.Tz(), this.Jb(), this.ma().i(this.u().Pf(), "resize", this.Tz), gB(this, i), this.focus(), this.mb = i, this.dispatchEvent("show"))
};
s.Tr = function() {
  this.dispatchEvent("beforehide") && (this.ma().H(this.u().Pf(), "resize", this.Tz), gB(this, m), this.mb = m, this.dispatchEvent("hide"))
};
function gB(a, b) {
  a.oe && Cd(a.oe, b);
  a.wd && Cd(a.wd, b);
  Cd(a.b(), b);
  Cd(a.Wk, b)
}
s.w = q("mb");
s.focus = function() {
  this.QK()
};
s.Tz = function() {
  this.oe && Cd(this.oe, m);
  this.wd && Cd(this.wd, m);
  var a = Yc(this.u()), b = wc(zc(a) || window || window), c = Math.max(a.body.scrollWidth, b.width), a = Math.max(a.body.scrollHeight, b.height);
  this.oe && (Cd(this.oe, i), vd(this.oe, c, a));
  this.wd && (Cd(this.wd, i), vd(this.wd, c, a))
};
s.Jb = function() {
  var a = Yc(this.u()), b = zc(a) || window;
  if("fixed" == jd(this.b())) {
    var c = a = 0
  }else {
    c = ad(this.u()), a = c.x, c = c.y
  }
  var e = yd(this.b()), b = wc(b || window), a = Math.max(a + b.width / 2 - e.width / 2, 0), c = Math.max(c + b.height / 2 - e.height / 2, 0);
  kd(this.b(), a, c);
  kd(this.Wk, a, c)
};
s.xs = function(a) {
  a.target == this.Wk && Vf(this.QK, 0, this)
};
s.QK = function() {
  try {
    Ob && Yc(this.u()).body.focus(), this.b().focus()
  }catch(a) {
  }
};
function hB(a, b, c) {
  dB.call(this, b, c);
  this.jf = a || "modal-dialog";
  this.qe = iB()
}
C(hB, dB);
s = hB.prototype;
s.pR = i;
s.FE = i;
s.SF = i;
s.HK = i;
s.Yw = 0.5;
s.Qc = "";
s.Jd = "";
s.bp = k;
s.kR = m;
s.yf = k;
s.$k = k;
s.eI = k;
s.Yk = k;
s.Le = k;
s.be = k;
s.J = q("jf");
s.yh = function(a) {
  this.Qc = a;
  this.$k && Pc(this.$k, a)
};
s.vn = q("Qc");
s.Nc = function(a) {
  this.Jd = a;
  this.Le && (this.Le.innerHTML = a)
};
s.jd = q("Jd");
function jB(a) {
  a.b() || a.Na()
}
s.La = function() {
  jB(this);
  return this.Le
};
function kB(a) {
  jB(a);
  return a.yf
}
s.ip = function() {
  jB(this);
  return hB.e.ip.call(this)
};
function lB(a, b) {
  a.Yw = b;
  if(a.b()) {
    var c = a.ip();
    c && Bd(c, a.Yw)
  }
}
function mB(a, b) {
  a.SF = b;
  if(a.Ra) {
    var c = a.u(), e = a.ip(), f = a.oe;
    b ? (f && c.YL(f, a.b()), c.YL(e, a.b())) : (c.removeNode(f), c.removeNode(e))
  }
}
s.cK = function() {
  return new WA(this.b(), this.yf)
};
function nB(a, b) {
  a.b() && F(a.yf, a.jf + "-title-draggable", b);
  b && !a.bp ? (a.bp = a.cK(), D(a.yf, a.jf + "-title-draggable"), G(a.bp, "start", a.UV, m, a)) : !b && a.bp && (a.bp.ba(), a.bp = k)
}
s.m = function() {
  hB.e.m.call(this);
  var a = this.b(), b = this.u();
  this.yf = b.m("div", {className:this.jf + "-title", id:this.P()}, this.$k = b.m("span", this.jf + "-title-text", this.Qc), this.Yk = b.m("span", this.jf + "-title-close"));
  Gc(a, this.yf, this.Le = b.m("div", this.jf + "-content"), this.be = b.m("div", this.jf + "-buttons"));
  this.eI = this.yf.id;
  wf(a, "dialog");
  xf(a, "labelledby", this.eI || "");
  this.Jd && (this.Le.innerHTML = this.Jd);
  Cd(this.Yk, this.FE);
  this.qe && (a = this.qe, a.s = this.be, a.Na());
  Cd(this.be, !!this.qe);
  lB(this, this.Yw)
};
s.l = function(a) {
  hB.e.l.call(this, a);
  a = this.jf + "-content";
  (this.Le = rc(k, a, this.b())[0]) ? this.Jd = this.Le.innerHTML : (this.Le = this.u().m("div", a), this.Jd && (this.Le.innerHTML = this.Jd), this.b().appendChild(this.Le));
  var a = this.jf + "-title", b = this.jf + "-title-text", c = this.jf + "-title-close";
  (this.yf = rc(k, a, this.b())[0]) ? (this.$k = rc(k, b, this.yf)[0], this.Yk = rc(k, c, this.yf)[0]) : (this.yf = this.u().m("div", a), this.b().insertBefore(this.yf, this.Le));
  this.$k ? this.Qc = Uc(this.$k) : (this.$k = this.u().m("span", b, this.Qc), this.yf.appendChild(this.$k));
  xf(this.b(), "labelledby", this.eI || "");
  this.Yk || (this.Yk = this.u().m("span", c), this.yf.appendChild(this.Yk));
  Cd(this.Yk, this.FE);
  a = this.jf + "-buttons";
  (this.be = rc(k, a, this.b())[0]) ? (this.qe = new oB(this.u()), this.qe.Ka(this.be)) : (this.be = this.u().m("div", a), this.b().appendChild(this.be), this.qe && (a = this.qe, a.s = this.be, a.Na()), Cd(this.be, !!this.qe));
  lB(this, this.Yw)
};
s.k = function() {
  hB.e.k.call(this);
  this.ma().i(this, ["show", "hide"], this.kW);
  nB(this, this.HK);
  this.ma().i(this.Yk, "click", this.YU);
  wf(this.b(), "dialog");
  "" !== this.$k.id && xf(this.b(), "labelledby", this.$k.id);
  this.SF || mB(this, m)
};
s.nb = function() {
  this.w() && this.F(m);
  nB(this, m);
  hB.e.nb.call(this)
};
s.F = function(a) {
  a != this.w() && (this.Ra || this.Na(), hB.e.F.call(this, a))
};
s.kW = function(a) {
  a.target == this && (this.w() ? (this.ma().i(this.b(), "keydown", this.Qp).i(this.b(), "keypress", this.Qp), this.dispatchEvent(pB), this.ma().i(this.be, "click", this.aN)) : (this.ma().H(this.b(), "keydown", this.Qp).H(this.b(), "keypress", this.Qp).H(this.be, "click", this.aN), this.dispatchEvent(qB), this.kR && this.ba()))
};
s.focus = function() {
  hB.e.focus.call(this);
  if(this.qe) {
    var a = this.qe.Ix;
    if(a) {
      for(var b = Yc(this.u()), c = this.be.getElementsByTagName("button"), e = 0, f;f = c[e];e++) {
        if(f.name == a) {
          try {
            if(Qb || Nb) {
              var h = b.createElement("input");
              h.style.cssText = "position:fixed;width:0;height:0;left:0;top:0;";
              this.b().appendChild(h);
              h.focus();
              this.b().removeChild(h)
            }
            f.focus()
          }catch(j) {
          }
          break
        }
      }
    }
  }
};
s.UV = function() {
  var a = Yc(this.u()), b = wc(zc(a) || window || window), c = Math.max(a.body.scrollWidth, b.width), a = Math.max(a.body.scrollHeight, b.height), e = yd(this.b());
  this.bp.GF = "fixed" == jd(this.b()) ? new cd(0, 0, Math.max(0, b.width - e.width), Math.max(0, b.height - e.height)) || new cd(NaN, NaN, NaN, NaN) : new cd(0, 0, c - e.width, a - e.height) || new cd(NaN, NaN, NaN, NaN)
};
s.YU = function() {
  if(this.FE) {
    var a = this.qe, b = a && a.DC;
    b ? (a = a.get(b), this.dispatchEvent(new rB(b, a)) && this.F(m)) : this.F(m)
  }
};
s.n = function() {
  this.be = this.Yk = k;
  hB.e.n.call(this)
};
s.aN = function(a) {
  a: {
    for(a = a.target;a != k && a != this.be;) {
      if("BUTTON" == a.tagName) {
        break a
      }
      a = a.parentNode
    }
    a = k
  }
  if(a && !a.disabled) {
    var a = a.name, b = this.qe.get(a);
    this.dispatchEvent(new rB(a, b)) && this.F(m)
  }
};
s.Qp = function(a) {
  var b = m, c = m, e = this.qe, f = a.target;
  if("keydown" == a.type) {
    if(this.pR && 27 == a.keyCode) {
      var h = e && e.DC, f = "SELECT" == f.tagName && !f.disabled;
      h && !f ? (c = i, b = e.get(h), b = this.dispatchEvent(new rB(h, b))) : f || (b = i)
    }else {
      9 == a.keyCode && a.shiftKey && f == this.b() && (c = i)
    }
  }else {
    if(13 == a.keyCode) {
      if("BUTTON" == f.tagName) {
        h = f.name
      }else {
        if(e) {
          var j = e.Ix, l;
          if(l = j) {
            a: {
              l = e.s.getElementsByTagName("BUTTON");
              for(var n = 0, o;o = l[n];n++) {
                if(o.name == j || o.id == j) {
                  l = o;
                  break a
                }
              }
              l = k
            }
          }
          f = ("TEXTAREA" == f.tagName || "SELECT" == f.tagName) && !f.disabled;
          l && !l.disabled && !f && (h = j)
        }
      }
      h && e && (c = i, b = this.dispatchEvent(new rB(h, "" + e.get(h))))
    }
  }
  if(b || c) {
    a.stopPropagation(), a.preventDefault()
  }
  b && this.F(m)
};
function rB(a, b) {
  this.type = sB;
  this.key = a;
  this.caption = b
}
C(rB, Ee);
var sB = "dialogselect", qB = "afterhide", pB = "aftershow";
function oB(a) {
  this.qa = a || mc();
  Rd.call(this)
}
C(oB, Rd);
s = oB.prototype;
s.jf = "goog-buttonset";
s.Ix = k;
s.s = k;
s.DC = k;
s.set = function(a, b, c, e) {
  Rd.prototype.set.call(this, a, b);
  c && (this.Ix = a);
  e && (this.DC = a);
  return this
};
function tB(a, b, c, e) {
  return a.set(b.key, b.caption, c, e)
}
s.Na = function() {
  if(this.s) {
    this.s.innerHTML = "";
    var a = mc(this.s);
    Md(this, function(b, c) {
      var e = a.m("button", {name:c}, b);
      c == this.Ix && (e.className = this.jf + "-default");
      this.s.appendChild(e)
    }, this)
  }
};
s.Ka = function(a) {
  if(a && 1 == a.nodeType) {
    this.s = a;
    for(var a = this.s.getElementsByTagName("button"), b = 0, c, e, f;c = a[b];b++) {
      if(e = c.name || c.id, f = Uc(c) || c.value, e) {
        var h = 0 == b;
        this.set(e, f, h, c.name == uB);
        h && D(c, this.jf + "-default")
      }
    }
  }
};
s.b = q("s");
s.u = q("qa");
var uB = "cancel", vB = {key:"ok", caption:"OK"}, wB = {key:uB, caption:"Cancel"}, xB = {key:"yes", caption:"Yes"}, yB = {key:"no", caption:"No"}, zB = {key:"save", caption:"Save"}, AB = {key:"continue", caption:"Continue"};
function iB() {
  return tB(tB(new oB, vB, i), wB, m, i)
}
"undefined" != typeof document && (tB(new oB, vB, i, i), iB(), tB(tB(new oB, xB, i), yB, m, i), tB(tB(tB(new oB, xB), yB, i), wB, m, i), tB(tB(tB(new oB, AB), zB), wB, i, i));
function BB(a, b, c) {
  hB.call(this, a, b, c);
  CB();
  DB()
}
C(BB, hB);
function CB() {
  BB.prototype.QV = function(a) {
    this.Le != k && 0 == this.Le.children.length && this.Le.appendChild(a)
  };
  BB.prototype.KV = function(a) {
    this.be != k && (this.be.innerHTML = "");
    this.be.appendChild(a)
  };
  BB.prototype.RV = function() {
    var a = Yc(this.u()), a = wc(zc(a) || window || window).height - 2 * (this.be.scrollHeight + kB(this).scrollHeight);
    dd(this.Le, "max-height", a + "px")
  };
  BB.prototype.La = q("Le");
  BB.prototype.Wd = k;
  BB.prototype.pO = ba("Wd");
  BB.prototype.Jb = p();
  BB.prototype.cK = function() {
    return new WA(this.b().parentElement, this.yf)
  }
}
function DB() {
  BB.prototype.Tz = function() {
    this.wd && Cd(this.wd, m);
    var a = Yc(this.u()), b = zc(a) || window;
    this.Wd == k && (this.Wd = b);
    var c;
    this.Wd === b ? (c = wc(b || window), b = Math.max(a.body.scrollWidth, c.width), c = Math.max(a.body.scrollHeight, c.height), a = new kc(0, 0)) : (c = yd(this.Wd), a = qd(this.Wd), b = c.width, c = c.height);
    this.wd && (Cd(this.wd, i), vd(this.wd, b, c), ud(this.wd, a.x, a.y))
  };
  dB.prototype.NN = function() {
    this.oe && Ic(this.oe, this.b());
    this.wd.setAttribute("tabindex", -1);
    this.xU = function(a) {
      a.preventDefault();
      a.stopPropagation()
    };
    G(this.wd, "mousedown", this.xU);
    document.body.appendChild(this.wd)
  }
}
;function EB(a) {
  ij.call(this, a);
  a.hasOwnProperty("height") && (this.height = a.height);
  a.hasOwnProperty("imageName") && (this.Sf = a.imageName);
  a.hasOwnProperty("width") && (this.width = a.width);
  a.hasOwnProperty("xPos") && (this.zw = a.xPos);
  a.hasOwnProperty("yPos") && (this.Aw = a.yPos)
}
C(EB, ij);
s = EB.prototype;
s.height = 0;
s.Sf = "";
s.width = 0;
s.zw = 0;
s.Aw = 0;
var FB = new gl("etk-imagesprite");
function GB(a, b, c, e, f) {
  K.call(this, a, b, c, z(e) ? e : FB, f)
}
C(GB, K);
B("tr.ui.ImageSprite", GB);
H.g().z("ImageSprite", GB);
GB.prototype.M = EB.prototype;
GB.prototype.a = function() {
  return GB.e.a.call(this)
};
GB.prototype.Ml = function() {
  return this.a().Sf
};
GB.prototype.getImageName = GB.prototype.Ml;
GB.prototype.tm = function(a) {
  this.a().Sf = a;
  this.bt()
};
GB.prototype.setImageName = GB.prototype.tm;
s = GB.prototype;
s.l = function(a) {
  GB.e.l.call(this, a);
  this.bt()
};
s.m = function() {
  this.l(this.qa.m("div", "etk-imagesprite-image"))
};
s.k = function() {
  GB.e.k.call(this)
};
s.bt = function() {
  var a = this.b();
  a != k && dd(a, {"background-image":"url(" + this.Ml() + ")", width:this.Ha() + "px", height:this.va() + "px", "background-position":-this.a().zw + "px " + -this.a().Aw + "px"})
};
s.Ha = function() {
  return this.a().width
};
s.xa = function(a) {
  this.a().width = a;
  this.bt()
};
s.va = function() {
  return this.a().height
};
s.Ma = function(a) {
  this.a().height = a;
  this.bt()
};
function HB(a, b, c, e) {
  this.Pd = a;
  this.dd = b;
  this.$e = c;
  this.Cv = this.aO = this.RO = 0;
  this.RO = a / (c - b);
  this.aO = a / e;
  this.Cv = (c - b) / e
}
HB.prototype.Ja = function(a) {
  return a * this.aO
};
HB.prototype.Tc = function(a) {
  return(a - this.dd) * this.RO
};
function IB(a) {
  pl.call(this, a);
  for(var b in a) {
    a.hasOwnProperty(b) && (this[b] = a[b])
  }
}
C(IB, pl);
function JB(a, b, c) {
  K.call(this, a, b, c, g, g);
  this.wb = new My(this);
  this.re = k
}
C(JB, rl);
ag(JB, yf);
H.g().z("FinancialChart", JB);
s = JB.prototype;
s.M = IB.prototype;
s.a = function() {
  return JB.e.a.call(this)
};
s.wb = k;
s.xd = q("wb");
s.l = function(a) {
  JB.e.l.call(this, a)
};
s.k = function() {
  JB.e.k.call(this);
  var a = this.a(), b = a.appServerId;
  b || (b = a.ChartID);
  b || d("Failed getting value from property 'ChartID' or 'appServerId' from the model. Something is seriously wrong.");
  this.b().setAttribute("id", b);
  for(var c = 0;c < this.Pb().Da();c++) {
    this.Pb().getItem(c).qb()
  }
  this.xa(a.width);
  this.Ma(a.height);
  var c = window[b + "_Options"], e = window[b + "_Analyses"], f = window[b + "_Results"];
  c.GP = b;
  c.bQ = a.OY + (a.TQ ? ";" + a.TQ.join(";") : "");
  c.vX = a.EY;
  c.xB = a.title;
  c.lY = a.QY;
  c.TI = a.TY;
  a.JY || (c.DX = {iY:a.NY});
  this.re = (new ChartHelper).createFinancialChart(c, e, f);
  this.re.qD()
};
s.Ha = function() {
  return this.a().width
};
s.xa = function(a) {
  this.a().width = a;
  wd(this.b(), a)
};
s.va = function() {
  return this.a().height
};
s.Ma = function(a) {
  this.a().height = a;
  xd(this.b(), a)
};
s.n = function() {
  JB.e.n.call(this)
};
function KB(a) {
  K.call(this, a, k, m)
}
C(KB, K);
B("tr.ui.GridLayout", KB);
KB.prototype.WK = function() {
  return this.a().Rq
};
KB.prototype.fO = function(a) {
  this.a().Rq = a
};
KB.prototype.Na = function() {
  alert("render")
};
KB.prototype.render = KB.prototype.Na;
function LB(a) {
  VA.call(this, a);
  a.hasOwnProperty("anchor") && (this.anchor = a.anchor);
  a.hasOwnProperty("anchoredPosition") && (this.oJ = a.anchoredPosition);
  if(a.hasOwnProperty("items")) {
    this.T = [];
    for(var b = a.items, c = 0;c < b.length;c++) {
      this.T.push(new UA(b[c]))
    }
  }
  a.hasOwnProperty("menuPosition") && (this.RM = a.menuPosition)
}
C(LB, VA);
LB.prototype.anchor = k;
LB.prototype.oJ = 0;
LB.prototype.T = [];
LB.prototype.RM = 0;
function MB(a) {
  this.Sj = a
}
C(MB, Ag);
MB.prototype.J = q("Sj");
MB.prototype.rb = r(i);
function NB(a) {
  this.Dt = [];
  this.Sj = a;
  OB(this)
}
C(NB, $z);
NB.prototype.J = q("Sj");
NB.prototype.rb = r(i);
function OB(a) {
  a.eC = function(a, c) {
    var e = a.u().m("span");
    e.className = "goog-submenu-arrow";
    aA(a, e);
    var f = this.La(c);
    f.insertBefore(e, f.firstChild)
  };
  a.vk = function(a) {
    $z.e.vk.call(this, a);
    var c = a.La(), e = a.u(), e = sc(e.Lb, "span", "goog-submenu-arrow", c)[0];
    aA(a, e);
    e != c.firstChild && c.insertBefore(e, c.firstChild);
    xf(a.b(), "haspopup", "true")
  };
  a.Nc = function(a, c) {
    var e = this.La(a), f = e && e.firstChild;
    $z.e.Nc.call(this, a, c);
    f && e.firstChild != f && ab(lb(f), "goog-submenu-arrow") && e.insertBefore(f, e.firstChild)
  }
}
;function PB(a, b, c, e) {
  I.call(this, a, w(b) ? b : "Changed", c, e)
}
C(PB, I);
PB.prototype.X = k;
PB.prototype.i = function(a, b) {
  G(this.B, "etk_MenuItem_changed", a, g, b)
};
PB.prototype.listen = PB.prototype.i;
PB.prototype.H = function(a, b) {
  Ve(this.B, "etk_MenuItem_changed", a, g, b)
};
PB.prototype.unlisten = PB.prototype.H;
PB.prototype.la = function() {
  Ze(this.B, "etk_MenuItem_changed")
};
PB.prototype.unlistenAll = PB.prototype.la;
PB.prototype.v = function(a, b) {
  var c = new wA(b, this.X, a, this.aa);
  this.X = a;
  Ah(this) && (this.B.dispatchEvent(c), this.md == i && wh.g().Nd(this.aa.P(), this.Fc, a.P(), this.Kc))
};
function QB(a, b, c, e) {
  Hg.call(this, a, b, c, e || Cg.g())
}
C(QB, Hg);
s = QB.prototype;
s.$c = k;
s.vq = k;
s.zu = m;
s.hb = k;
s.Io = i;
s.sF = m;
s.k = function() {
  QB.e.k.call(this);
  this.ma().i(this.getParent(), "hide", this.iv)
};
s.nb = function() {
  this.ma().H(this.getParent(), "hide", this.iv);
  this.hb && (this.mo(this.hb, m), this.hb.nb(), Kc(this.hb.b()));
  QB.e.nb.call(this)
};
s.n = function() {
  this.hb && this.hb.ba();
  this.hb = k;
  QB.e.n.call(this)
};
s.Fe = function(a, b) {
  QB.e.Fe.call(this, a);
  b && (this.oa().ji = i);
  a || (this.$c && Wf(this.$c), this.$c = Vf(this.ve, 350, this))
};
s.uq = function() {
  var a = this.getParent();
  a && Mg(a) == this && (this.Rv(i), this.Rt())
};
s.ve = function() {
  var a = this.hb;
  a && a.getParent() == this && (this.Rv(m), pf(a, function(a) {
    "function" == typeof a.ve && a.ve()
  }))
};
s.Ug = function() {
  this.$c && Wf(this.$c);
  this.vq && Wf(this.vq)
};
s.F = function(a, b) {
  var c = QB.e.F.call(this, a, b);
  c && !this.w() && this.ve();
  return c
};
s.Rt = function() {
  pf(this.getParent(), function(a) {
    a != this && "function" == typeof a.ve && (a.ve(), a.Ug())
  }, this)
};
s.Ld = function(a) {
  var b = a.keyCode;
  if(this.zu) {
    if(!(0 < this.ij() && this.oa().Ld(a))) {
      if(37 == b && 0 < this.ij()) {
        this.ve()
      }else {
        return a.preventDefault(), m
      }
    }
  }else {
    if(this.isEnabled() && 0 < this.ij() && (39 == b || b == this.uz)) {
      this.uq(), Ng(this.oa()), this.Ug()
    }else {
      return a.preventDefault(), m
    }
  }
  a.preventDefault();
  return i
};
s.cG = function() {
  this.hb.getParent() == this && (this.Ug(), this.Pn.Fe(this), this.Rt())
};
s.iv = function(a) {
  a.target == this.Pn && (this.ve(), this.Ug())
};
s.yn = function(a) {
  this.isEnabled() && 0 < this.ij() && (this.Ug(), this.vq = Vf(this.uq, 350, this));
  QB.e.yn.call(this, a)
};
s.si = function(a) {
  this.Ug();
  if(this.rd & 8 || 0 == this.ij()) {
    return QB.e.si.call(this, a)
  }
  this.uq();
  return i
};
s.Rv = function(a) {
  this.dispatchEvent(of(64, a));
  var b = this.oa();
  a != b.w() && (a && (b.Ra || b.Na(this.b()), this.DG(), Lg(b, -1)), this.zu = a, F(this.b(), "goog-submenu-open", a), b.F(a))
};
s.mo = function(a, b) {
  var c = this.ma();
  (b ? c.i : c.H).call(c, a, "highlight", this.cG)
};
s.DG = function() {
  var a = new Nf(this.b(), this.Io ? 6 : 4, this.sF), b = this.oa(), c = b.b();
  b.w() || (c.style.visibility = "hidden", Cd(c, i));
  a.Jb(c, this.Io ? 4 : 6);
  b.w() || (Cd(c, m), c.style.visibility = "visible")
};
s.jg = function(a) {
  this.Qg(a, qf(this.oa()))
};
s.Qg = function(a, b) {
  this.oa().Df(a, b, i);
  1 == qf(this.oa()) && (F(this.b(), "etk-submenu-arrow-visible", i), this.hb && this.mo(this.hb, i))
};
s.removeItem = function(a) {
  (a = this.oa().removeChild(a, i)) && a.ba();
  RB(this)
};
s.Bj = function(a) {
  (a = vf(this.oa(), a, i)) && a.ba();
  RB(this)
};
function RB(a) {
  0 == qf(a.oa()) && (F(a.b(), "etk-submenu-arrow-visible", m), a.hb && a.mo(a.hb, m))
}
s.Hc = function(a) {
  return rf(this.oa(), a)
};
s.ij = function() {
  return qf(this.oa())
};
s.Tb = function() {
  return this.oa().Tb()
};
s.oa = function() {
  this.hb ? this.hb.getParent() != this && this.hb.wh(this) : this.yi(new Ug(this.u()), i);
  this.hb.b() || this.hb.m();
  return this.hb
};
s.yi = function(a) {
  if(!this.hb && (this.hb = a)) {
    a.wh(this), a.F(m, i), a.jq(m), a.ef(m)
  }
};
s.Vg = function(a) {
  return this.oa().Vg(a)
};
cg("goog-submenu", function() {
  return new QB(k)
});
var SB = new gl("etk-menuitem-wrapper"), TB = new MB("etk-menu"), UB = new NB("etk-submenu");
function X(a, b, c, e, f) {
  K.call(this, a, b, c, z(e) ? e : SB, f);
  a = k;
  this.lL() ? a = new Bg(k) : (a = new QB(this.a().text, k, k, UB), a.yi(new Ug(k, TB)));
  this.iu() && a.wH(i);
  this.Nb = a;
  VB(this);
  this.V = new Wk(this);
  this.Nb.gc(i);
  this.gc(i);
  pg(this.Nb, 32, m);
  this.Fn = new PB(this, "TextChanged", m, m);
  this.a().text == k && (this.a().text = "");
  lg(this, m)
}
C(X, K);
B("tr.ui.MenuItem", X);
ag(X, Uj);
H.g().z("MenuItem", X);
s = X.prototype;
s.M = UA.prototype;
s.Oy = k;
s.a = function() {
  return X.e.a.call(this)
};
s.l = function(a) {
  X.e.l.call(this, a);
  D(a, "etk-menuitem-imagecontainer");
  0 < this.a().Ap.length && (this.Oy = this.a().TE ? Ac("div", {"class":"etk-menuitemimage etk-menuitemimagesprite"}) : Ac("img", {src:this.a().Ap, "class":"etk-menuitemimage"}), a.appendChild(this.Oy), w(this.Oy) && (this.Oy.style.cssText = this.a().TE ? "background-image: url(" + this.a().Ap + "); background-position: " + this.a().KO + "px " + this.a().LO + "px; width: " + this.a().PL + "px; height: " + this.a().ML + "px;" + WB(this) : WB(this)))
};
function WB(a) {
  return"left: " + a.a().NL + "px; top: " + a.a().OL + "px;"
}
s.k = function() {
  X.e.k.call(this);
  for(var a = this.a().T, b = 0;b < a.length;b++) {
    var c = new X(a[b], k, i);
    c.QF = this.QF;
    this.V.add(c);
    var e = this.QF;
    e && c.ln() && e.Ba(c)
  }
};
s.n = function() {
  X.e.n.call(this)
};
s.V = k;
s.Nb = k;
function VB(a) {
  a.Nb.pL = A(function() {
    return this
  }, a)
}
s.getParent = function() {
  return this.Nb.getParent()
};
s.fE = function() {
  return this.kk()
};
X.prototype.getItemId = X.prototype.fE;
X.prototype.kk = function() {
  return this.a().Vf
};
X.prototype.getItemID = X.prototype.kk;
X.prototype.wa = function() {
  return this.a().text
};
X.prototype.getText = X.prototype.wa;
X.prototype.ra = function(a) {
  this.a().text = a;
  this.Nb.Od(a);
  this.kD()
};
X.prototype.setText = X.prototype.ra;
X.prototype.uL = function() {
  return this.a().xO
};
X.prototype.getShortcut = X.prototype.uL;
X.prototype.iu = function() {
  return this.a().tM
};
X.prototype.getIsSelectable = X.prototype.iu;
X.prototype.lL = function() {
  return this.a().uM
};
X.prototype.getIsSeparator = X.prototype.lL;
X.prototype.hn = function() {
  return this.a().group
};
X.prototype.getGroup = X.prototype.hn;
X.prototype.Z = function() {
  return this.a().isEnabled
};
X.prototype.getIsEnabled = X.prototype.Z;
X.prototype.R = function(a) {
  this.a().isEnabled = a
};
X.prototype.setIsEnabled = X.prototype.R;
X.prototype.ln = function() {
  return this.a().uc
};
X.prototype.getIsSelected = X.prototype.ln;
X.prototype.um = function(a) {
  this.a().uc = a;
  this.Nb.oq(a)
};
X.prototype.setIsSelected = X.prototype.um;
X.prototype.Tb = q("V");
X.prototype.getItems = X.prototype.Tb;
s = X.prototype;
s.Xc = m;
s.im = function() {
  this.Xc = i
};
s.hm = function() {
  this.Xc = m
};
s.ni = function(a, b) {
  this.Nb.Qg(a.Nb, b);
  a.Ka(a.Nb.b());
  this.LG(a)
};
s.zj = function(a, b) {
  var b = w(b) ? b : m, c = this.Nb.Bj(a);
  b === m && c != k && c.ba()
};
s.cg = function(a) {
  bl(this.V, a)
};
X.prototype.setInsertItem = X.prototype.cg;
X.prototype.dg = function(a) {
  al(this.V, a)
};
X.prototype.setRemoveItem = X.prototype.dg;
X.prototype.bg = function() {
  cl(this.V)
};
X.prototype.setClear = X.prototype.bg;
X.prototype.Fn = k;
X.prototype.up = q("Fn");
X.prototype.getTextChangedEvent = X.prototype.up;
X.prototype.kD = function() {
  this.Fn.v(this, new Ee("itemtextchanged", this))
};
X.prototype.LG = function(a) {
  a.up().i(this.jw, this)
};
X.prototype.jw = function(a) {
  var b = new Ee("itemtextchanged", a.Ga);
  this.Fn.v(a.Ga, b)
};
var XB = new gl("etk-menubase-wrapper"), YB = new MB("etk-menu");
function ZB(a, b, c, e, f) {
  K.call(this, a, b, c, z(e) ? e : XB, f);
  this.V = new Wk(this);
  this.C = this.WC(f, YB);
  this.pf = w(b) && w(b.SelectionChanged);
  this.Ej = new PB(this, "SelectionChanged", c, this.pf);
  this.C.ef(i)
}
C(ZB, K);
B("tr.ui.MenuBase", ZB);
ag(ZB, Uj);
H.g().z("MenuBase", ZB);
s = ZB.prototype;
s.M = VA.prototype;
s.a = function() {
  return ZB.e.a.call(this)
};
s.l = function(a) {
  ZB.e.l.call(this, a);
  this.Ca(this.C, i);
  this.C.ef(i)
};
s.$u = function() {
  for(var a = this.a().T, b = 0;b < a.length;b++) {
    var c = new X(a[b], k, i);
    c.QF = this;
    this.V.add(c);
    c.ln() && this.Ba(c)
  }
};
s.m = function() {
  this.Xb("MenuBase", "div", "")
};
s.k = function() {
  ZB.e.k.call(this);
  this.C.b();
  G(this.C, "action", A(this.Ae, this));
  this.$u()
};
s.n = function() {
  ZB.e.n.call(this)
};
s.V = k;
s.pf = i;
s.C = k;
s.oa = q("C");
s.Dy = {};
s.Ae = function(a) {
  var b = a.target, c = k;
  b && b.pL && (c = b.pL());
  if(c != k && c.iu && c.iu()) {
    if(c.hn() != k) {
      if(b = this.Dy[c.hn()]) {
        if(b.P() == c.P()) {
          return a.stopPropagation(), i
        }
        b.um(m);
        c.um(i)
      }
      this.Dy[c.hn()] = c
    }else {
      c.um(!c.ln())
    }
  }
  new Ee("click");
  this.CL(c, a);
  this.Ej.v(c, a);
  a.stopPropagation()
};
s.CL = p();
s.Tb = q("V");
s.Ej = k;
s.Mr = q("Ej");
ZB.prototype.getSelectionChangedEvent = ZB.prototype.Mr;
s = ZB.prototype;
s.Xc = m;
s.im = function() {
  this.Xc = i
};
s.hm = function() {
  this.Xc = m
};
s.ni = function(a, b) {
  var c = a.hn();
  a.iu() && a.ln() && c != k && (this.Dy[c] == k ? this.Dy[c] = a : a.um(m));
  this.C.Df(a.Nb, b, i);
  a.Ka(a.Nb.b())
};
s.zj = function(a, b) {
  var b = w(b) ? b : m, c = vf(this.C, a, i);
  b === m && c != k && c.ba()
};
s.ei = r(i);
s.WC = function(a, b) {
  return new Vg(a, b)
};
s.cg = function(a) {
  bl(this.V, a)
};
ZB.prototype.setInsertItem = ZB.prototype.cg;
ZB.prototype.dg = function(a) {
  al(this.V, a)
};
ZB.prototype.setRemoveItem = ZB.prototype.dg;
ZB.prototype.bg = function() {
  cl(this.V)
};
ZB.prototype.setClear = ZB.prototype.bg;
var $B = new gl("etk-Menu");
function aC(a, b, c, e, f) {
  ZB.call(this, a, b, c, z(e) ? e : $B, f)
}
C(aC, ZB);
B("tr.ui.AttachableMenu", aC);
ag(aC, Uj);
H.g().z("AttachableMenu", aC);
s = aC.prototype;
s.M = LB.prototype;
s.a = function() {
  return aC.e.a.call(this)
};
s.l = function(a) {
  aC.e.l.call(this, a)
};
s.k = function() {
  aC.e.k.call(this);
  var a = this.oa();
  G(a, "hide", A(this.gv, this))
};
s.n = function() {
  aC.e.n.call(this)
};
s.ut = k;
s.Y = function(a) {
  aC.e.Y.call(this, a);
  var b = this.oa();
  a && this.ut ? b.GH(this.ut ? b.Fi.get(pa(this.ut)) : k, 0, 0) : b.hide()
};
s.gv = function(a) {
  this.oa() == a.target && (this.a().w = m)
};
s.WC = function() {
  return new Wg
};
function bC() {
  this[0] = 0;
  this[1] = 2;
  this[2] = 1;
  this[3] = 3;
  this[4] = 4;
  this[5] = 6;
  this[6] = 5;
  this[7] = 7
}
x(bC);
bC.getInstance = bC.g;
B("tr.ui.enums.AnchorPosition.AnchorPositionToPositionCornerMap", bC);
function cC(a, b, c, e, f) {
  ty.call(this, a, b, c, e, f);
  b = a.chain;
  this.Hd = b !== g && b !== k ? b : "";
  a = a.ricsAsJson;
  this.Zf = a !== g && a !== k ? JSON.parse(a) : k;
  Gj(this)
}
C(cC, ty);
H.g().z("QuoteDataSource", cC);
s = cC.prototype;
s.Hd = "";
s.Zf = [];
s.ag = function() {
  tq.g().ag(this, [this.Hd], [i])
};
s.Fq = function(a, b) {
  for(var c, e, f = [], h = [], j = 0;j < this.Om.length;++j) {
    c = this.Om[j];
    for(var f = [c.LL], h = [a], l = 0;l < c.T.length;++l) {
      e = c.T[l];
      var n = b[e.source];
      n !== g && (h.push(n.Br), f.push(e.target))
    }
    -1 === c.le.Pw(a, h, f) && c.le.dl(a, h, f)
  }
};
s.Qq = function(a, b) {
  this.Fq(a, b)
};
s.uv = function(a) {
  for(var b = 0;b < this.Om.length;++b) {
    this.Om[b].le.Ds(a)
  }
};
s.rn = q("Zf");
s.np = q("Hd");
function dC(a, b, c, e, f) {
  mf.call(this, f);
  Zw(this, a, c);
  this.eV = eC();
  this.eV === fC && d("Unsupported browser / platform");
  this.Xo = gC(this, Math.min(window.outerWidth, window.innerWidth));
  this.Jt = 1280
}
C(dC, mf);
H.g().z("LayoutPanel", dC);
s = dC.prototype;
s.ZE = m;
s.Ht = function() {
  this.ZE = i;
  var a = this.th.slice();
  a.sort(uA);
  for(var b = 0, c = a.length;b < c;b++) {
    var e = this.Qn[a[b].Ne];
    w(e) || (e = []);
    if(-1 == e.indexOf(a[b])) {
      e.push(a[b]);
      for(var f = 0;f < b;f++) {
        vA(a[b], tA(a[f])) && -1 == e.indexOf(a[f]) && a[f].Zg < a[b].Zg && e.splice(e.length - 1, 0, a[f])
      }
      for(f = b + 1;f < c;f++) {
        vA(a[b], tA(a[f])) && -1 == e.indexOf(a[f]) && a[f].Zg > e[e.length - 1].Zg + e[e.length - 1].Yg && e.push(a[f])
      }
      this.Qn[a[b].Ne] = e
    }
  }
  gC(this, Math.min(window.outerWidth, window.innerWidth));
  this.ZE = m
};
s.k = function() {
  dC.e.k.call(this)
};
s.uG = function(a) {
  var b = a.target, b = Math.min(b.outerWidth, b.innerWidth), c = gC(this, b), e;
  if(e = 24 < c) {
    c -= this.Xo;
    this.Xo += c;
    e = b - this.Jt;
    this.Jt = b;
    b = k;
    this.yx(Math.abs(c));
    var c = this.th.slice(), f;
    a: {
      for(var h in this.th) {
        if(this.th[h].Zi) {
          f = this.th[h];
          break a
        }
      }
      f = k
    }
    h = this.Jt - this.KI;
    if(24 < this.Xo && 30 > this.Xo) {
      f = k;
      var j = 0, l;
      for(l in this.th) {
        if(this.th[l].Ic() > j && (j = this.th[l].Ic()), f !== k && this.th[l].zs > f.zs || f === k) {
          f = this.th[l]
        }
      }
      if(f !== k && (f.va() != this.dP || 0 == !f.Ic() && f.Ic() != j)) {
        f = k
      }
      f !== k && (l = f, e = sA(l), l.qh = e.clone(), j = l.Ha(), l.qr = j, pA(l, 0), j = l.va() + 6, l.Ne = j, qA(l, h), l.Zi = i, e = e.width, rA(f), l = c.indexOf(f), -1 != l && c.splice(l, 1))
    }
    30 <= this.Xo && f != k && (f.restore(h), rA(f), b = sA(f), l = c.indexOf(f), -1 != l && c.splice(l, 1));
    l = e;
    h = this.Jt - this.KI;
    for(var n in c) {
      if(f = c[n], !(0 > l && f.Ha() == f.Jr())) {
        e = 0;
        j = this.Qn[f.Ne];
        if(z(j)) {
          for(var o = 0;o < j.length;o++) {
            j[o].Zi || j[o].Ha() == j[o].Jr() && (e += j[o].Ha())
          }
        }else {
          e = 0
        }
        var j = f, o = 0, u = g;
        for(u in this.th) {
          var t = this.th[u];
          t.Zi && (t.qh.top == j.sc() || t.qh.top >= j.sc() && t.qh.top + t.qh.height <= j.sc() + j.va() || t.qh.top <= j.sc() && t.qh.top + t.qh.height >= j.sc() + j.va()) && (o += (t.Zi ? t.qh.width : 0) + this.fl)
        }
        j = o;
        o = h - e;
        u = 0;
        if(f.Zi) {
          t = u
        }else {
          if(t = this.Qn[f.sc()], z(t)) {
            for(var v = 0;v < t.length;v++) {
              t[v].Zi || u++
            }
            t = u - 1
          }else {
            t = 0
          }
        }
        u = m;
        o -= t * this.fl;
        t = 0;
        f.Zi ? t = o - 22 : t = (f.SL + 6) / (1280 - (e + j)) * o;
        qA(f, t);
        e = g;
        for(e in f.Jm) {
          if(w(f.Jm[e]) && (u = f.Jm[e].call(f)), u) {
            break
          }
        }
        Math.round(f.Yg - f.Ha())
      }
    }
    0 != l && hC(this);
    c = i;
    b === k || hC(this);
    e = 0 == c == i
  }
  e && (a.stopPropagation(), a.preventDefault())
};
function hC(a) {
  for(var b in a.Qn) {
    var c = a.Qn[b], e = 0;
    c[0].Zi || (e = c[0].Zg + c[0].Yg);
    for(var f = 1;f < c.length;f++) {
      c[f].Zi || (c[f].Zg == c[f].Ic() || a.ZE ? pA(c[f], e + a.fl) : qA(c[f - 1], c[f - 1].Yg - (e + a.fl - c[f].Zg)), e = c[f].Zg + c[f].Yg)
    }
  }
  for(b in a.Qn) {
    c = a.Qn[b];
    for(f = 0;f < c.length;f++) {
      rA(c[f])
    }
  }
}
s.dP = 0;
s.Ca = function(a) {
  a && this.th.push(a)
};
s.Qn = [];
function gC(a, b) {
  return Math.round(b / (a.nt + a.fl))
}
s.yx = function(a) {
  return a * this.nt + Math.max(1, a - 1) * this.fl
};
function eC() {
  if(Qb) {
    if(Rb) {
      if(Kb().userAgent.match(/iPad/i)) {
        return iC
      }
      if(Kb().userAgent.match(/iPhone/i)) {
        return jC
      }
    }else {
      return kC
    }
  }
  return fC
}
s.fl = 6;
s.nt = 29;
s.KI = 26;
s.Xo = -1;
s.Jt = -1;
s.th = [];
var fC = -1, kC = 0, iC = 1, jC = 2;
ef("resize");
function lC() {
}
C(lC, yf);
x(lC);
lC.prototype.J = function() {
  return mC
};
lC.prototype.rb = r(i);
var mC = "etk-apptoolbar";
function nC() {
}
C(nC, yf);
x(nC);
nC.prototype.J = function() {
  return oC
};
nC.prototype.Ka = function(a, b) {
  b = nC.e.Ka.call(this, a, b);
  b.style.display = a.w() ? "" : "none";
  return b
};
nC.prototype.rb = r(i);
var oC = "etk-control";
function pC() {
}
C(pC, vg);
x(pC);
pC.prototype.J = r("goog-tab-bar");
pC.prototype.Of = r("tablist");
pC.prototype.AH = function(a, b, c) {
  this.MM || (this.nx || qC(this), this.MM = vb(this.nx));
  var e = this.MM[b];
  e ? (a.Qk(e == rC || e == sC ? zg : yg), a.ms = e) : pC.e.AH.call(this, a, b, c)
};
pC.prototype.ej = function(a) {
  var b = pC.e.ej.call(this, a);
  this.nx || qC(this);
  b.push(this.nx[a.ms]);
  return b
};
function qC(a) {
  var b = a.J();
  a.nx = yb(tC, b + "-top", uC, b + "-bottom", rC, b + "-start", sC, b + "-end")
}
;function vC() {
}
C(vC, pC);
x(vC);
vC.prototype.J = function() {
  return wC
};
vC.prototype.rb = r(i);
var wC = "tr-tabstrip";
function xC(a, b, c, e, f) {
  mf.call(this, f);
  Zw(this, a, c);
  this.Bd(this.Aa)
}
C(xC, mf);
H.g().z("FloatingContainer", xC);
xC.prototype.l = function(a) {
  yC.e.l.call(this, a);
  this.s = a;
  F(a, "tr-FloatingContainer", i);
  var b = this.a()["float"];
  b != g && (0 === b ? F(a, "tr-FloatingContainer-Left", i) : F(a, "tr-FloatingContainer-Right", i));
  this.Y(this.ob())
};
xC.prototype.ob = function() {
  return this.a().visible
};
xC.prototype.Y = function(a) {
  this.a().visible = w(a) ? a : a = i;
  var b = this.b();
  b != k && Cd(b, a)
};
xC.prototype.k = function() {
  xC.e.k.call(this)
};
function zC(a, b, c, e, f) {
  Rn.call(this, a, b, c, e, f);
  this.Ke = new Ez(this, "Changed")
}
C(zC, Rn);
zC.prototype.M = qy.prototype;
H.g().z("CounterContainer", zC);
s = zC.prototype;
s.It = k;
s.Ax = k;
s.UC = k;
s.Ke = k;
s.I = function() {
  return this.a().value
};
s.ka = function(a) {
  this.a().value = a;
  AC(this);
  var b = new Ee("change");
  this.Ke.v(a, b)
};
s.a = function() {
  return zC.e.a.call(this)
};
s.l = function(a) {
  zC.e.l.call(this, a);
  F(a, "tr-CounterContainer", i);
  this.It = Ac("div", "countercontainer-text countercontainer");
  this.Ax = Ac("div", "countercontainer-image countercontainer");
  this.Ax.innerHTML = '<svg width="14" height="14" xmlns="http://www.w3.org/2000/svg"><g><title>Layer 1</title><ellipse ry="7" rx="7" id="svg_1" cy="7" cx="7" stroke-width="0" stroke="#999999" fill="#999999"/></g></svg>';
  this.Ax.appendChild(this.It);
  this.UC = Ac("div", "countercontainer-root", this.Ax);
  a.appendChild(this.UC);
  Cd(this.UC, this.a().hM);
  AC(this)
};
s.m = function() {
  this.s = Ac("div");
  this.l(this.b())
};
s.ob = function() {
  return this.a().hg
};
s.Y = function(a) {
  this.a().hg = w(a) ? a : a = i;
  var b = this.b();
  b != k && Cd(b, a)
};
s.k = function() {
  zC.e.k.call(this)
};
function AC(a) {
  var b = a.a().value;
  99 < b ? (b = "99+", F(a.It, "countercontainer-text-largeval", i)) : (0 > b && (b = 0), F(a.It, "countercontainer-text-largeval", m));
  a.It.innerText = b
}
;function BC(a) {
  Fz.call(this, a);
  a.hasOwnProperty("increment") && (this.xc = a.increment)
}
C(BC, Fz);
BC.prototype.RL = 0;
BC.prototype.increment = BC.prototype.RL;
function CC(a) {
  var b = Number.MAX_VALUE, c = Number.MIN_VALUE;
  if(w(a)) {
    for(var e = 0;e < a.length;e++) {
      for(var f = 0;f < a[e].length;f++) {
        c = Math.max(c, a[e][f]), b = Math.min(b, a[e][f])
      }
    }
  }
  b == Number.MAX_VALUE && (b = 0);
  c == Number.MIN_VALUE && (c = 100);
  return[b, c]
}
;var DC = new Vk("etk-menu-button");
function EC(a, b, c, e, f) {
  e = w(e) ? e : TB;
  ZB.call(this, a, b, c, e, f);
  Zw(this, a, c);
  this.Bd(this.Aa);
  this.pz = new Rk(this.a().text, this.oa(), DC, f);
  pg(this.pz, 32, m)
}
C(EC, ZB);
H.g().z("Menu", EC);
s = EC.prototype;
s.pz = k;
s.l = function(a) {
  EC.e.l.call(this, a);
  this.Ca(this.pz, i)
};
s.k = function() {
  EC.e.k.call(this)
};
s.Z = function() {
  return this.a().isEnabled
};
s.R = function(a) {
  this.a().isEnabled = a;
  this.pz.Oa(a)
};
s.wa = function() {
  return this.a().text
};
s.ra = function(a) {
  this.a().text = a
};
s.uL = function() {
  return this.a().shortcut
};
s.jl = p();
function FC(a, b, c, e, f) {
  Tx(this, a, c, k, e, f)
}
C(FC, mf);
H.g().z("CustomControl", FC);
s = FC.prototype;
s.k = function() {
  FC.e.k.call(this);
  var a = new XMLHttpRequest;
  a.open("GET", this.VY + ".htm", m);
  a.send(k);
  if(200 === a.status) {
    var a = a.responseText, b = a.indexOf("<body"), b = a.indexOf(">", b), c = a.indexOf("</body>"), a = a.substring(b + 1, c);
    this.b().innerHTML = a
  }else {
    d("Error loading the custom control")
  }
};
s.mb = i;
s.w = q("mb");
s.F = function(a) {
  this.mb = a;
  Cd(this.b(), a)
};
s.Y = function(a) {
  this.F(a)
};
s.ob = function() {
  return this.w()
};
s.fe = p();
s.pb = function(a) {
  a && this.b().focus()
};
s.kd = p();
s.od = p();
s.R = p();
s.Z = p();
s.Pb = function() {
  this.ga || (this.ga = new Tj);
  return this.ga
};
function GC(a) {
  nj.call(this, a);
  a.hasOwnProperty("textAlign") && (this.textAlign = a.textAlign);
  a.hasOwnProperty("textOverflow") && (this.ya = a.textOverflow)
}
C(GC, nj);
GC.prototype.textAlign = 0;
GC.prototype.ya = 0;
var lx = 1, mx = 2;
function HC(a) {
  ij.call(this, a);
  a.hasOwnProperty("converter") && (this.$j = a.converter);
  a.hasOwnProperty("direction") && (this.direction = a.direction);
  a.hasOwnProperty("propertyName") && (this.propertyName = a.propertyName);
  a.hasOwnProperty("variableName") && (this.jB = a.variableName)
}
C(HC, dk);
HC.prototype.$j = "";
HC.prototype.direction = 0;
HC.prototype.propertyName = "";
HC.prototype.jB = "";
function yC(a, b, c, e, f) {
  mf.call(this, f);
  Zw(this, a, c);
  this.Bd(this.Aa)
}
C(yC, mf);
H.g().z("SpacingContainer", yC);
yC.prototype.l = function(a) {
  yC.e.l.call(this, a);
  this.s = a;
  1 === this.a().spacingwidth ? F(a, "tr-SpacingContainer-8px", i) : F(a, "tr-SpacingContainer-4px", i)
};
yC.prototype.k = function() {
  yC.e.k.call(this)
};
var IC = new gl("etk-datepickerlabel");
function JC(a, b, c, e, f) {
  K.call(this, a, b, c, z(e) ? e : IC, f);
  if(!w(this.a().timestamp) || isNaN(this.a().timestamp.getYear())) {
    this.a().timestamp = new uh
  }
  this.Wg = new um(new uj({text:""}), k, m);
  this.mr = new wk(this.Ot)
}
C(JC, K);
ag(JC, Uj);
H.g().z("DateLabel", JC);
s = JC.prototype;
s.M = Ky.prototype;
s.a = function() {
  return JC.e.a.call(this)
};
s.Wg = k;
s.mr = k;
s.Ot = 2;
s.l = function(a) {
  JC.e.l.call(this, a);
  this.Ca(this.Wg, i)
};
s.m = function() {
  this.Xb("DateLabel", "div", this.fa.J())
};
s.k = function() {
  JC.e.k.call(this);
  this.Zd(this.a().style);
  this.bc(this.a().Hb);
  this.Ua(this.a().textAlign);
  this.Va(this.a().ya);
  this.vm(this.a().ec);
  this.a().ec || this.xm(this.a().timestamp)
};
s.n = function() {
  JC.e.n.call(this)
};
s.nE = function() {
  this.zd() && d("Timestamp is not available.");
  return new uh(this.a().timestamp)
};
JC.prototype.getTimestamp = JC.prototype.nE;
JC.prototype.xm = function(a) {
  this.a().ec && (this.a().ec = m);
  "string" == typeof a && (a = kj("" + a));
  this.a().timestamp = new uh(a);
  a = this.a().timestamp;
  a != k && this.Wg.ra(this.mr.$m(a))
};
JC.prototype.setTimestamp = JC.prototype.xm;
JC.prototype.ai = function() {
  return this.Wg.ai()
};
JC.prototype.getStyle = JC.prototype.ai;
JC.prototype.Zd = function(a) {
  this.Wg.Zd(a)
};
JC.prototype.setStyle = JC.prototype.Zd;
JC.prototype.Td = function() {
  return this.Wg.Td()
};
JC.prototype.getHighlightStyle = JC.prototype.Td;
JC.prototype.bc = function(a) {
  this.Wg.bc(a)
};
JC.prototype.setHighlightStyle = JC.prototype.bc;
JC.prototype.Mb = function() {
  return this.Wg.Mb()
};
JC.prototype.getTextAlign = JC.prototype.Mb;
JC.prototype.Ua = function(a) {
  this.Wg.Ua(a)
};
JC.prototype.setTextAlign = JC.prototype.Ua;
JC.prototype.Yb = function() {
  return this.Wg.Yb()
};
JC.prototype.getTextOverflow = JC.prototype.Yb;
JC.prototype.Va = function(a) {
  this.Wg.Va(a)
};
JC.prototype.setTextOverflow = JC.prototype.Va;
JC.prototype.wn = function() {
  return this.a().Je
};
JC.prototype.getUninitializedValue = JC.prototype.wn;
JC.prototype.ym = function(a) {
  this.a().Je = a;
  this.zd() && this.Wg.ra(a)
};
JC.prototype.setUninitializedValue = JC.prototype.ym;
JC.prototype.zd = function() {
  return this.a().ec
};
JC.prototype.getIsUninitialized = JC.prototype.zd;
JC.prototype.vm = function(a) {
  (this.a().ec = a) ? this.Wg.ra(this.a().Je) : this.xm(this.a().timestamp)
};
JC.prototype.setIsUninitialized = JC.prototype.vm;
function KC(a) {
  $w.call(this, a);
  a.hasOwnProperty("disableRoundedCorner") && (this.Qx = a.disableRoundedCorner)
}
C(KC, $w);
KC.prototype.Qx = m;
function LC(a, b, c, e, f) {
  mf.call(this, f);
  Zw(this, a, c);
  this.Aa.thresholdWidth = z(this.Aa.thresholdWidth) ? this.Aa.thresholdWidth : 0;
  this.Aa.firstChildVisibilityThresholdWidth = z(this.Aa.firstChildVisibilityThresholdWidth) ? this.Aa.firstChildVisibilityThresholdWidth : 0;
  this.Bd(this.Aa)
}
C(LC, mf);
H.g().z("Splitter", LC);
s = LC.prototype;
s.k = function() {
  LC.e.k.call(this);
  G(window, "resize", A(this.Gz, this));
  G(window, "load", A(this.Ht, this))
};
s.Gz = function() {
  var a = this.b();
  if(a != k) {
    0 < this.a().thresholdWidth && (a.offsetWidth >= this.a().thresholdWidth ? this.Qk(0) : this.Qk(1));
    var b = Lc(a);
    if(1 < b.length) {
      var c = b[0], b = b[1];
      0 < MC(this) && (b.clientWidth < MC(this) ? Cd(c, m) : Cd(c, i))
    }
    if(1 == this.Ol()) {
      var b = this.a().firstChildMinWidth, e = this.a().firstChildMaxWidth;
      0 < e && 0 < b && a.clientWidth <= e && a.clientWidth >= b ? dd(c, "width", a.clientWidth + "px") : 0 < e && dd(c, "maxWidth", e + "px")
    }
  }
};
s.rc = function() {
  return this.a().tooltip
};
s.Vb = function(a) {
  this.a().tooltip = a;
  var b = this.b();
  b != k && w(a) === i && (b.title = a)
};
s.Ol = function() {
  return this.a().orientation
};
s.Qk = function(a) {
  this.a().orientation = a;
  F(this.b(), 0 == a ? "etk-splitter-1" : "etk-splitter-0", m);
  F(this.b(), "etk-splitter-" + a, i)
};
s.w = function() {
  return this.a().visible
};
s.F = function(a) {
  this.a().visible = a
};
s.Y = function(a) {
  this.F(a)
};
s.ob = function() {
  return this.w()
};
s.l = function(a) {
  LC.e.l.call(this, a);
  F(a, "etk-splitter-" + this.Ol(), i);
  var b = this.a().splitValues;
  F(a, "", i);
  for(var a = 0, c = this.b().children.length;a < c;a++) {
    if(this.b().children[a]) {
      var e = this.b().children[a];
      F(e, "etk-splitter-child" + (a + 1), i);
      w(b[a]) && dd(e, "-webkit-box-flex", b[a])
    }
  }
};
s.Ht = p();
function MC(a) {
  return a.a().firstChildVisibilityThresholdWidth
}
s.Pb = function() {
  this.ga || (this.ga = new Tj);
  return this.ga
};
function NC(a, b, c) {
  ox.call(this, a, b, c)
}
C(NC, ox);
ag(NC, Uj);
H.g().z("tr.ui.MenuButton", NC);
s = NC.prototype;
s.M = nA.prototype;
s.Sa = k;
s.C = k;
s.Nn = function() {
  var a = H.g();
  this.Sa = Fj(a, this.getName() + "button_");
  this.C = Fj(a, this.getName() + "menu_");
  if(this.Sa) {
    var b = this.Sa.xd();
    b.i(this.ZT, this);
    a = this.C;
    b = b.aa;
    a.a().anchor = b;
    var c = bC.g();
    a.ut = b.b();
    a.oa().qb(a.ut, c[a.a().oJ], c[a.a().RM])
  }
};
s.xG = function() {
  this.Sa.xd().la()
};
s.ZT = function() {
  this.C.Y(!this.C.ob())
};
s.na = function() {
  return this.Sa.na()
};
function OC(a, b, c, e) {
  gh.call(this, a, e);
  this.xv = c;
  this.Km = b
}
C(OC, gh);
OC.prototype.xv = -1;
OC.prototype.Km = -1;
OC.prototype.tn = q("xv");
OC.prototype.getRowIndex = OC.prototype.tn;
OC.prototype.bu = q("Km");
OC.prototype.getColumnIndex = OC.prototype.bu;
function PC(a, b, c) {
  I.call(this, a, "SurfaceClicked", b, c)
}
C(PC, I);
PC.prototype.i = function(a, b) {
  G(this.B, "etk_surface_clicked", a, g, b)
};
PC.prototype.listen = PC.prototype.i;
PC.prototype.H = function(a, b) {
  Ve(this.B, "etk_surface_clicked", a, g, b)
};
PC.prototype.unlisten = PC.prototype.H;
PC.prototype.la = function() {
  Ze(this.B, "etk_surface_clicked")
};
PC.prototype.unlistenAll = PC.prototype.la;
PC.prototype.v = function(a, b, c) {
  c = new OC(c, a, b, this.aa);
  Ah(this) && (this.B.dispatchEvent(c), this.md == i && wh.g().Nd(this.aa.P(), this.Fc, '{"c":' + a + ', "r":"' + b + '" }', this.Kc))
};
PC.prototype.dispatch = PC.prototype.v;
function QC(a, b) {
  this.Pd = a;
  this.ah = b;
  this.vD = [];
  for(var c = 0;c < this.ah.length;c++) {
    this.vD[this.ah[c]] = c * (this.Pd / (this.ah.length - 1))
  }
}
QC.prototype.Ja = function(a) {
  return this.vD[this.ah[a]]
};
QC.prototype.Tc = function(a) {
  return this.vD[a]
};
function RC(a, b, c, e) {
  this.ha = a;
  this.s = b;
  this.Sc = c;
  this.bd = e;
  this.al = $y();
  this.Wy = $y()
}
s = RC.prototype;
s.init = function() {
  if(!this.Mu) {
    var a = document.getElementById(this.ha + "_canvas3d");
    a !== k ? this.cc = a : (this.cc = document.createElement("canvas"), this.cc.id = this.ha + "_canvas3d", this.s.appendChild(this.cc));
    a = document.getElementById(this.ha + "_canvasText");
    a !== k ? this.Lh = a : (this.Lh = document.createElement("canvas"), this.Lh.id = this.ha + "_canvasText", this.s.appendChild(this.Lh));
    this.cc.width = this.Lh.width = this.Sc;
    this.cc.height = this.Lh.height = this.bd;
    this.cc.top = this.Lh.top = "0 px";
    this.cc.left = this.Lh.left = "0 px";
    this.cc.style.position = this.Lh.style.position = "absolute";
    this.AG = new Float32Array(16);
    this.Lp = new Float32Array(16);
    this.da = this.cc.getContext("webgl", {antialias:i}) || this.cc.getContext("experimental-webgl", {antialias:i});
    this.da.clearColor(0, 0, 0, 0);
    this.da.clearDepth(1);
    this.da.enable(this.da.DEPTH_TEST);
    this.da.depthFunc(this.da.LEQUAL);
    this.Dr = this.da.createShader(this.da.FRAGMENT_SHADER);
    this.da.shaderSource(this.Dr, "precision mediump float;varying vec4 vColor;void main(void) {    gl_FragColor = vColor;}");
    this.da.compileShader(this.Dr);
    this.da.getShaderParameter(this.Dr, this.da.COMPILE_STATUS) || d(this.da.getShaderInfoLog(this.Dr));
    this.gt = this.da.createShader(this.da.VERTEX_SHADER);
    this.da.shaderSource(this.gt, "attribute vec3 aVertexPosition;attribute vec4 aVertexColor;uniform mat4 uMVMatrix;uniform mat4 uPMatrix;varying vec4 vColor;void main(void) {    gl_Position = uPMatrix * uMVMatrix * vec4(aVertexPosition, 1.0);    vColor = aVertexColor;}");
    this.da.compileShader(this.gt);
    this.da.getShaderParameter(this.gt, this.da.COMPILE_STATUS) || d(this.da.getShaderInfoLog(this.gt));
    this.$d = this.da.createProgram();
    this.da.attachShader(this.$d, this.gt);
    this.da.attachShader(this.$d, this.Dr);
    this.da.linkProgram(this.$d);
    this.da.getProgramParameter(this.$d, this.da.LINK_STATUS) || d("Could not initialise shaders");
    this.da.useProgram(this.$d);
    this.$d.sP = this.da.getAttribLocation(this.$d, "aVertexPosition");
    this.da.enableVertexAttribArray(this.$d.sP);
    this.$d.rP = this.da.getAttribLocation(this.$d, "aVertexColor");
    this.da.enableVertexAttribArray(this.$d.rP);
    this.$d.dV = this.da.getUniformLocation(this.$d, "uPMatrix");
    this.$d.QT = this.da.getUniformLocation(this.$d, "uMVMatrix");
    this.Mu = i
  }
};
s.xa = function(a) {
  this.Mu || (this.Sc = a)
};
s.Ma = function(a) {
  this.Mu || (this.bd = a)
};
s.vb = function(a) {
  this.yc.push(a)
};
s.KC = function() {
  this.yc = []
};
s.Na = function() {
  if(this.Mu) {
    this.da.viewport(0, 0, this.Sc, this.bd);
    this.da.clear(this.da.COLOR_BUFFER_BIT | this.da.DEPTH_BUFFER_BIT);
    this.cc.width = this.cc.width;
    this.Lh.width = this.Lh.width;
    for(var a = 0;a < this.yc.length;a++) {
      var b = this.yc[a];
      if(b.EB) {
        b.XI = this.da.createBuffer();
        this.da.bindBuffer(this.da.ARRAY_BUFFER, b.XI);
        this.da.bufferData(this.da.ARRAY_BUFFER, new Float32Array(b.sa), this.da.STATIC_DRAW);
        var c = k, c = 1 == b.Go || 2 == b.Go ? b.Hh : b.Gh;
        b.AI = this.da.createBuffer();
        this.da.bindBuffer(this.da.ARRAY_BUFFER, b.AI);
        this.da.bufferData(this.da.ARRAY_BUFFER, new Float32Array(my(c, b.Gw)), this.da.STATIC_DRAW);
        b.EB = m
      }
    }
    a = this.Sc;
    b = this.bd;
    c = this.AG;
    c[0] = 2 / (a - 0);
    c[1] = 0;
    c[2] = 0;
    c[3] = 0;
    c[4] = 0;
    c[5] = 2 / (b - 0);
    c[6] = 0;
    c[7] = 0;
    c[8] = 0;
    c[9] = 0;
    c[10] = -2 / 2048;
    c[11] = 0;
    c[12] = -(a + 0) / (a - 0);
    c[13] = -(b + 0) / (b - 0);
    c[14] = -0.0;
    c[15] = 1;
    az(this.Lp);
    a = this.Lp;
    b = this.Fk;
    c = this.Gk;
    az(a);
    a[12] = b;
    a[13] = c;
    a[14] = 0;
    a[15] = 1;
    bz(this.Lp, this.Wy, this.Lp);
    this.da.uniformMatrix4fv(this.$d.dV, m, this.AG);
    this.da.uniformMatrix4fv(this.$d.QT, m, this.Lp);
    b = [0, 0, 1E4];
    dz(this.al, b, b);
    for(a = 0;a < this.yc.length;a++) {
      if(6 == this.yc[a].Go) {
        if(this.yc[a].Li) {
          if(c = yA(b, this.yc[a].kb), 0 > c) {
            continue
          }else {
            if(c = 0, na(this.yc[a].Gd) && (c = yA(b, this.yc[a].Gd)), 0 > c) {
              continue
            }
          }
        }
        var c = this.Lh.getContext("2d"), e;
        e = this.yc[a].sa;
        var f = [];
        e ? (f[0] = e[0], f[1] = e[1], f[2] = e[2]) : f[0] = f[1] = f[2] = 0;
        e = f;
        this.yc[a].XP || dz(this.Wy, e, e);
        this.yc[a].WI = e;
        this.Vx(c, this.yc[a], this.Lp)
      }else {
        c = 0;
        switch(this.yc[a].Go) {
          case 1:
          ;
          case 2:
            if(this.yc[a].Li && (c = yA(b, this.yc[a].kb), 0 > c)) {
              continue
            }
            c = this.da.LINE_STRIP;
            break;
          case 3:
            c = this.da.TRIANGLE_STRIP;
            break;
          case 4:
            c = this.da.TRIANGLE_FAN
        }
        this.yc[a].Li === i ? (this.da.enable(this.da.CULL_FACE), this.da.cullFace(this.da.FRONT), this.da.frontFace(this.da.CCW)) : this.da.disable(this.da.CULL_FACE);
        this.da.bindBuffer(this.da.ARRAY_BUFFER, this.yc[a].XI);
        this.da.vertexAttribPointer(this.$d.sP, 3, this.da.FLOAT, m, 0, 0);
        this.da.bindBuffer(this.da.ARRAY_BUFFER, this.yc[a].AI);
        this.da.vertexAttribPointer(this.$d.rP, 4, this.da.FLOAT, m, 0, 0);
        this.da.drawArrays(c, 0, this.yc[a].Gw)
      }
    }
    this.da.flush()
  }
};
s.sH = function(a, b) {
  this.Fk = a;
  this.Gk = b
};
s.Sv = function(a) {
  this.al = a;
  cz(this.al, this.Wy)
};
s.Vx = function(a, b, c) {
  var e = this.Fk + b.WI[0], f = this.Gk - b.WI[1];
  a.font = b.Fw;
  a.textAlign = b.Cw;
  a.textBaseline = b.Dw;
  a.fillStyle = b.Gh;
  a.save();
  var h = [];
  na(b.Cf) ? bz(c, b.Cf, h) : h = c;
  b.Hw == i && a.transform(h[0], -h[1], -h[4], h[5], e, f);
  a.fillText(b.Jw, 0, 0);
  a.restore()
};
s.ha = 0;
s.s = k;
s.Sc = 0;
s.bd = 0;
s.cc = k;
s.Lh = k;
s.al = k;
s.Wy = k;
s.yc = [];
s.Fk = 0;
s.Gk = 0;
s.Mu = m;
s.da = k;
s.Dr = k;
s.gt = k;
s.$d = k;
s.AG = k;
s.Lp = k;
function SC(a) {
  this.Ta = a;
  this.tC = "#202020";
  this.Cy = "#464646";
  this.SH = "#666666";
  this.gH = "#FFFFFF";
  this.zF = "#5F5F5F"
}
s = SC.prototype;
s.l = function(a) {
  this.ia = a;
  TC(this);
  var a = this.ia.getAttribute("data-etk-name"), b = Ec();
  b.setAttribute("id", a + "_fontLabel");
  b.setAttribute("class", "etk-surface-font-label");
  b.style.display = "none";
  var c = Ec();
  c.setAttribute("id", a + "_fontSeries");
  c.setAttribute("class", "etk-surface-font-series");
  c.style.display = "none";
  var e = Ec();
  e.setAttribute("id", a + "_axisPanel");
  e.setAttribute("class", "etk-surface-axis-panel");
  e.style.display = "none";
  var f = Ec();
  f.setAttribute("id", a + "_axisGrid");
  f.setAttribute("class", "etk-surface-axis-grid");
  f.style.display = "none";
  var h = Ec();
  h.setAttribute("id", a + "_surfaceWire");
  h.setAttribute("class", "etk-surface-wire");
  h.style.display = "none";
  this.Th = Ec();
  this.Th.setAttribute("id", a + "_drawing");
  this.Th.style.position = "relative";
  this.ia.appendChild(b);
  this.ia.appendChild(c);
  this.ia.appendChild(e);
  this.ia.appendChild(f);
  this.ia.appendChild(h);
  this.ia.appendChild(this.Th);
  if(a = this.ia.getAttribute("data-etk-name")) {
    this.tC = py(window.getComputedStyle(qc(a + "_axisPanel"), k).color), this.Cy = py(window.getComputedStyle(qc(a + "_axisGrid"), k).color), window.getComputedStyle(qc(a + "_fontSeries"), k), window.getComputedStyle(qc(a + "_fontSeries"), k), this.gH = py(window.getComputedStyle(qc(a + "_fontSeries"), k).color), window.getComputedStyle(qc(a + "_fontLabel"), k), window.getComputedStyle(qc(a + "_fontLabel"), k), this.zF = py(window.getComputedStyle(qc(a + "_fontLabel"), k).color)
  }
  a = this.ia.getAttribute("data-etk-name");
  this.ia.style.position = "relative";
  this.Nf = new RC(a + "_surface", this.Th, 0, 0);
  this.hh = new QA(a + "_hitTest", this.Th, 0, 0);
  this.ia.style.width = 0 > this.q.width ? w(this.Ta) && w(this.Ta.element.parentElement) ? this.Ta.element.parentElement.clientWidth + "px" : "100%" : this.q.width + "px";
  this.ia.style.height = 0 > this.q.height ? w(this.Ta) && w(this.Ta.element.parentElement) ? this.Ta.element.parentElement.clientHeight + "px" : "100%" : this.q.height + "px";
  w(this.Nf) && (this.Nf.Ma(this.ia.offsetHeight), this.Nf.xa(this.ia.offsetWidth), this.hh.Ma(this.ia.offsetHeight), this.hh.xa(this.ia.offsetWidth), this.Th.style.height = this.ia.offsetHeight + "px", this.Th.style.width = this.ia.offsetWidth + "px", this.Nf.sH(this.ia.offsetWidth / 2, this.ia.offsetHeight / 2), this.hh.sH(this.ia.offsetWidth / 2, this.ia.offsetHeight / 2));
  this.Nf.init();
  this.hh.init(i);
  this.bb = this.q.IQ;
  this.yb = this.q.TW;
  this.Xa = this.q.LQ;
  this.oB = this.q.HQ;
  this.xI = this.q.SW;
  this.sB = this.q.KQ;
  this.L = 15;
  this.ft = w(this.q.IC) ? this.q.IC : ["#FE0C00", "#730F88"];
  this.Ki = this.ft.length;
  this.Co = w(this.q.sC) ? this.q.sC : ["15D PUT", "10D PUT", "ATM", "10D CALL", "15D CALL"];
  this.Af = w(this.q.Ww) ? this.q.Ww : ["SW", "2W", "3W", "4W", "5W"];
  a = CC(this.q.kg);
  this.fd = new QC(this.bb, this.Co);
  this.ic = new QC(this.Xa, this.Af);
  this.Fb = new HB(this.yb, a[0], a[1], this.Ki);
  this.Ft = new vy(0, a[0], a[1], this.ft);
  this.Hq = this.yb / this.Ki;
  this.Ye = 10;
  this.tC = "#202020";
  this.Cy = "#464646";
  this.SH = "#666666";
  this.gH = "#FFFFFF";
  this.zF = "#5F5F5F";
  UC(this, this.Nf);
  VC(this, this.Nf, this.hh);
  WC(this, this.q.sI, this.q.NE)
};
s.Bd = ba("q");
function TC(a) {
  var b = a.ia.style.width.toString();
  0 > a.q.width && 0 < b.length && (a.q.width = b);
  b = a.ia.style.height.toString();
  0 > a.q.height && 0 < b.length && (a.q.height = b)
}
function UC(a, b) {
  if(w(b) && w(a.fd) && w(a.ic) && w(a.Fb) && w(a.Ft) && w(a.Hq)) {
    a.Zq = XC(a);
    a.Zq.A(0, -a.L, a.Xa);
    a.Zq.A(0, -a.L, 0);
    a.Zq.A(a.bb, -a.L, a.Xa);
    a.Zq.A(a.bb, -a.L, 0);
    b.vb(a.Zq);
    a.No = YC(a);
    a.No.A(0, -a.L, a.Xa);
    a.No.A(0, -a.L, 0);
    a.No.A(a.bb, -a.L, 0);
    a.No.A(a.bb, -a.L, a.Xa);
    a.No.A(0, -a.L, a.Xa);
    a.No.kb = [0, 1, 0];
    b.vb(a.No);
    for(var c = 1;c < a.Co.length - 1;c++) {
      var e = YC(a);
      e.A(a.fd.Ja(c), -a.L + 1, 0);
      e.A(a.fd.Ja(c), -a.L + 1, a.Xa);
      e.kb = [0, 1, 0];
      a.Qr.push(e);
      b.vb(e)
    }
    for(c = 1;c < a.Af.length - 1;c++) {
      e = YC(a), e.A(0, -a.L + 1, a.ic.Tc(a.Af[c])), e.A(a.bb, -a.L + 1, a.ic.Tc(a.Af[c])), e.kb = [0, 1, 0], a.Qr.push(e), b.vb(e)
    }
    for(c = 0;c < a.Co.length;c++) {
      e = ZC(a, a.Co[c], "right"), e.A(a.fd.Ja(c), -a.L, a.Xa + a.Ye), e.A(a.fd.Ja(c), -a.L, a.Xa + a.Ye + 0.4), e.kb = [0, 0, 1], e.Gd = [0, 1, 0], e.Cf = GA(EA(FA(new DA, Math.PI / 2), -(Math.PI / 2))), b.vb(e), e = ZC(a, a.Co[c], "left"), e.A(a.fd.Ja(c), -a.L, -a.Ye), e.A(a.fd.Ja(c), -a.L, -(a.Ye + 0.4)), e.kb = [0, 0, -1], e.Gd = [0, 1, 0], e.Cf = GA(EA(FA(new DA, Math.PI / 2), -(Math.PI / 2))), b.vb(e)
    }
    for(c = 0;c < a.Af.length;c++) {
      e = ZC(a, a.Af[c], "left"), e.A(a.bb + a.Ye, -a.L, a.ic.Ja(c)), e.A(a.bb + a.Ye + 0.4, -a.L, a.ic.Ja(c)), e.kb = [1, 0, 0], e.Gd = [0, 1, 0], e.Cf = GA(EA(new DA, -(Math.PI / 2))), b.vb(e), e = ZC(a, a.Af[c], "right"), e.A(-a.Ye, -a.L, a.ic.Ja(c)), e.A(-(a.Ye + 0.4), -a.L, a.ic.Ja(c)), e.kb = [-1, 0, 0], e.Gd = [0, 1, 0], e.Cf = GA(EA(new DA, -(Math.PI / 2))), b.vb(e)
    }
    a.Wq = XC(a);
    a.Wq.A(0, 0, -a.L);
    a.Wq.A(0, a.yb, -a.L);
    a.Wq.A(a.bb, 0, -a.L);
    a.Wq.A(a.bb, a.yb, -a.L);
    b.vb(a.Wq);
    a.Ko = YC(a);
    a.Ko.A(0, 0, -a.L);
    a.Ko.A(0, a.yb, -a.L);
    a.Ko.A(a.bb, a.yb, -a.L);
    a.Ko.A(a.bb, 0, -a.L);
    a.Ko.A(0, 0, -a.L);
    a.Ko.kb = [0, 0, 1];
    b.vb(a.Ko);
    for(c = 0;c <= a.Ki;c++) {
      e = ZC(a, (a.Fb.dd + a.Fb.Cv * c).toFixed(1), "left"), e.A(a.bb + a.Ye, a.Fb.Ja(c), -a.L), e.A(a.bb + a.Ye + 0.4, a.Fb.Ja(c), -a.L), e.kb = [0, 0, 1], e.Gd = [1, 0, 0], b.vb(e)
    }
    a.ks = XC(a);
    a.ks.A(-a.L, 0, a.Xa);
    a.ks.A(-a.L, a.yb, a.Xa);
    a.ks.A(-a.L, 0, 0);
    a.ks.A(-a.L, a.yb, 0);
    b.vb(a.ks);
    a.Hp = YC(a);
    a.Hp.A(-a.L, 0, a.Xa);
    a.Hp.A(-a.L, a.yb, a.Xa);
    a.Hp.A(-a.L, a.yb, 0);
    a.Hp.A(-a.L, 0, 0);
    a.Hp.A(-a.L, 0, a.Xa);
    a.Hp.kb = [1, 0, 0];
    b.vb(a.Hp);
    for(c = 1;c < a.Af.length - 1;c++) {
      e = YC(a), e.A(-a.L + 1, 0, a.ic.Tc(a.Af[c])), e.A(-a.L + 1, a.yb, a.ic.Tc(a.Af[c])), e.kb = [1, 0, 0], a.Qr.push(e), b.vb(e)
    }
    for(var f = a.Hq, c = 1;c < a.Ki;c++) {
      e = YC(a), e.A(-a.L + 1, f, 0), e.A(-a.L + 1, f, a.Xa), e.kb = [1, 0, 0], b.vb(e), a.Qr.push(e), f += a.Hq
    }
    for(c = 0;c <= a.Ki;c++) {
      e = ZC(a, (a.Fb.dd + a.Fb.Cv * c).toFixed(1), "left"), e.Cf = GA(FA(new DA, Math.PI / 2)), e.A(-a.L, a.Fb.Ja(c), -a.Ye), e.A(-a.L, a.Fb.Ja(c), -(a.Ye + 0.4)), e.kb = [0, 0, -1], e.Gd = [1, 0, 0], b.vb(e)
    }
    a.Hs = XC(a);
    a.Hs.A(a.bb + a.L + 1, 0, 0);
    a.Hs.A(a.bb + a.L + 1, a.yb, 0);
    a.Hs.A(a.bb + a.L + 1, 0, a.Xa);
    a.Hs.A(a.bb + a.L + 1, a.yb, a.Xa);
    b.vb(a.Hs);
    a.dq = YC(a);
    a.dq.A(a.bb + a.L + 1, 0, 0);
    a.dq.A(a.bb + a.L + 1, a.yb, 0);
    a.dq.A(a.bb + a.L + 1, a.yb, a.Xa);
    a.dq.A(a.bb + a.L + 1, 0, a.Xa);
    a.dq.A(a.bb + a.L + 1, 0, 0);
    a.dq.kb = [-1, 0, 0];
    b.vb(a.dq);
    for(c = 1;c < a.Af.length - 1;c++) {
      e = YC(a), e.A(a.bb + a.L - 1, 0, a.ic.Tc(a.Af[c])), e.A(a.bb + a.L - 1, a.yb, a.ic.Tc(a.Af[c])), e.kb = [-1, 0, 0], a.Qr.push(e), b.vb(e)
    }
    f = a.Hq;
    for(c = 1;c < a.Ki;c++) {
      e = YC(a), e.A(a.bb + a.L - 1, f, 0), e.A(a.bb + a.L - 1, f, a.Xa), e.kb = [-1, 0, 0], a.Qr.push(e), b.vb(e), f += a.Hq
    }
    for(c = 0;c <= a.Ki;c++) {
      e = ZC(a, (a.Fb.dd + a.Fb.Cv * c).toFixed(1), "left"), e.Cf = GA(FA(new DA, -(Math.PI / 2))), e.A(a.bb + a.L, a.Fb.Ja(c), a.Xa + a.Ye), e.A(a.bb + a.L, a.Fb.Ja(c), a.Xa + a.Ye + 0.4), e.kb = [-1, 0, 0], e.Gd = [0, 0, 1], b.vb(e)
    }
    a.Er = XC(a);
    a.Er.A(a.bb, 0, a.Xa + a.L);
    a.Er.A(a.bb, a.yb, a.Xa + a.L);
    a.Er.A(0, 0, a.Xa + a.L);
    a.Er.A(0, a.yb, a.Xa + a.L);
    b.vb(a.Er);
    a.gp = YC(a);
    a.gp.A(a.bb, 0, a.Xa + a.L);
    a.gp.A(a.bb, a.yb, a.Xa + a.L);
    a.gp.A(0, a.yb, a.Xa + a.L);
    a.gp.A(0, 0, a.Xa + a.L);
    a.gp.A(a.bb, 0, a.Xa + a.L);
    a.gp.kb = [0, 0, -1];
    b.vb(a.gp);
    for(c = 0;c <= a.Ki;c++) {
      e = ZC(a, (a.Fb.dd + a.Fb.Cv * c).toFixed(1), "left"), e.Cf = GA(FA(new DA, -Math.PI)), e.A(-a.Ye, a.Fb.Ja(c), a.Xa + a.L), e.A(-(a.Ye + 0.4), a.Fb.Ja(c), a.Xa + a.L), e.kb = [0, 0, -1], e.Gd = [-1, 0, 0], b.vb(e)
    }
    c = $C(a, a.oB);
    c.A(a.bb / 2, a.yb + 20, -a.L);
    c.A(a.bb / 2 + 0.4, a.yb + 20, -a.L);
    c.kb = [0, 0, 1];
    c.Gd = [0, 1, 0];
    b.vb(c);
    c = $C(a, a.oB);
    c.Cf = GA(FA(new DA, Math.PI));
    c.A(a.bb / 2, a.yb + 20, a.Xa + a.L);
    c.A(a.bb / 2 + 0.4, a.yb + 20, a.Xa + a.L);
    c.kb = [0, 0, -1];
    c.Gd = [0, 1, 0];
    b.vb(c);
    c = $C(a, a.sB);
    c.Cf = GA(FA(new DA, Math.PI / 2));
    c.A(-a.L, a.yb + 20, a.Xa / 2);
    c.A(-a.L, a.yb + 20, a.Xa / 2 + 0.4);
    c.kb = [1, 0, 0];
    c.Gd = [0, 1, 0];
    b.vb(c);
    c = $C(a, a.sB);
    c.Cf = GA(FA(new DA, -(Math.PI / 2)));
    c.A(a.bb + a.L, a.yb + 20, a.Xa / 2);
    c.A(a.bb + a.L, a.yb + 20, a.Xa / 2 + 0.4);
    c.kb = [-1, 0, 0];
    c.Gd = [0, 1, 0];
    b.vb(c);
    c = $C(a, a.xI);
    e = FA(new DA, Math.PI / 2);
    ez(e.vj, Math.PI / 2, 0, 0, 1);
    e = new DA(e.vj);
    c.Cf = e.vj;
    c.A(-a.L, a.yb / 2, a.Xa + 20);
    c.A(-a.L, a.yb / 2, a.Xa + 20 + 0.4);
    c.kb = [1, 0, 0];
    c.Gd = [0, 0, 1];
    b.vb(c)
  }
}
function VC(a, b, c) {
  if(w(b) && w(c) && w(a.Ft) && w(a.q.kg)) {
    for(var e = a.q.kg.length, f = 0;f < e;++f) {
      for(var h = a.q.kg[f].length, j = YC(a), l = YC(a), n = 0;n < h;++n) {
        if(f < e - 1 && n < h - 1) {
          var o = parseFloat(a.q.kg[f + 1][n]), u = parseFloat(a.q.kg[f][n]), t = parseFloat(a.q.kg[f + 1][n + 1]), v = parseFloat(a.q.kg[f][n + 1]);
          if(!isNaN(o) && !isNaN(u) && !isNaN(t) && !isNaN(v)) {
            var y = a.Ft.Tc((o + u + t + v) / 4), J = new Yy(3);
            J.A(a.fd.Ja(n), a.Fb.Tc(o), a.ic.Ja(f + 1));
            J.A(a.fd.Ja(n), a.Fb.Tc(u), a.ic.Ja(f));
            J.A(a.fd.Ja(n + 1), a.Fb.Tc(t), a.ic.Ja(f + 1));
            J.A(a.fd.Ja(n + 1), a.Fb.Tc(v), a.ic.Ja(f));
            J.Gh = y;
            J.Li = m;
            b.vb(J);
            j.A(a.fd.Ja(n), a.Fb.Tc(o) + 0.5, a.ic.Ja(f + 1));
            j.A(a.fd.Ja(n), a.Fb.Tc(u) + 0.5, a.ic.Ja(f));
            j.A(a.fd.Ja(n + 1), a.Fb.Tc(v) + 0.5, a.ic.Ja(f));
            j.A(a.fd.Ja(n + 1), a.Fb.Tc(t) + 0.5, a.ic.Ja(f + 1));
            j.A(a.fd.Ja(n), a.Fb.Tc(o) + 0.5, a.ic.Ja(f + 1));
            l.A(a.fd.Ja(n), a.Fb.Tc(o) - 0.5, a.ic.Ja(f + 1));
            l.A(a.fd.Ja(n), a.Fb.Tc(u) - 0.5, a.ic.Ja(f));
            l.A(a.fd.Ja(n + 1), a.Fb.Tc(v) - 0.5, a.ic.Ja(f));
            l.A(a.fd.Ja(n + 1), a.Fb.Tc(t) - 0.5, a.ic.Ja(f + 1));
            l.A(a.fd.Ja(n), a.Fb.Tc(o) - 0.5, a.ic.Ja(f + 1))
          }
        }
        o = new HA(a.fd.Ja(n), a.Fb.Tc(a.q.kg[f][n]), a.ic.Ja(f));
        o.Gh = "#FF8000";
        o.Hh = "#FFFFFF";
        o.Mi = 2;
        o.CI = 4;
        o.QI = f;
        o.zI = n;
        c.ci.push(o)
      }
      j.Mi = 0.5;
      j.Hh = a.SH;
      j.Li = m;
      l.Mi = 0.5;
      l.Hh = a.SH;
      l.Li = m;
      b.vb(j);
      b.vb(l)
    }
  }
}
function XC(a) {
  var b = new Yy(3);
  b.Gh = a.tC;
  b.Hh = a.Cy;
  b.Mi = 1;
  b.Li = i;
  return b
}
function YC(a) {
  var b = new Yy(2);
  b.Hh = a.Cy;
  b.Mi = 1;
  b.Li = i;
  return b
}
function ZC(a, b, c) {
  var e = new Yy(6);
  e.Jw = b;
  e.Fw = "9pt Arial";
  e.Gh = a.zF;
  e.Cw = c;
  e.Dw = "middle";
  e.Li = i;
  e.Hw = i;
  return e
}
function $C(a, b) {
  var c = new Yy(6);
  c.Jw = b;
  c.Fw = "bold 12pt Arial";
  c.Gh = a.gH;
  c.Cw = "center";
  c.Dw = "bottom";
  c.Li = i;
  c.Hw = i;
  return c
}
function aD(a) {
  w(a.hh) && w(a.Nf) && (a.Th.style.top = (a.ia.offsetHeight - a.Th.offsetHeight) / 2 + "px", a.Th.style.left = (a.ia.offsetWidth - a.Th.offsetWidth) / 2 + "px", a.Nf.Na(), a.hh.Na())
}
s.zf = function(a) {
  this.U = a;
  a = this.q.DY;
  if(w(a)) {
    var b = this.U.ta(), c = a.length;
    if(!(0 === b || 0 === c)) {
      this.q.kg = Array(b);
      var e, f, h;
      if(w(this.q.JQ)) {
        h = Array(b);
        for(e = 0;e < b;++e) {
          this.q.kg[e] = Array(c);
          for(f = 0;f < c;++f) {
            this.q.kg[e][f] = this.U.I(e, a[f])
          }
          h[e] = this.U.I(e, this.q.JQ)
        }
      }else {
        if(w(this.q.Ww)) {
          for(e = 0;e < b;++e) {
            this.q.kg[e] = Array(c);
            for(f = 0;f < c;++f) {
              this.q.kg[e][f] = this.U.I(e, a[f])
            }
          }
        }
      }
      this.Co = w(this.q.sC) ? this.q.sC : a;
      this.Af = w(this.q.Ww) ? this.q.Ww : h;
      w(this.Co) && w(this.Af) && (this.bb = this.q.IQ, this.yb = this.q.TW, this.Xa = this.q.LQ, this.oB = this.q.HQ, this.xI = this.q.SW, this.sB = this.q.KQ, w(this.q.IC) && (this.ft = this.q.IC), this.Ki = this.ft.length, a = CC(this.q.kg), this.fd = new QC(this.bb, this.Co), this.ic = new QC(this.Xa, this.Af), this.Fb = new HB(this.yb, a[0], a[1], this.Ki), this.Ft = new vy(0, a[0], a[1], this.ft), this.Hq = this.yb / this.Ki, this.Nf.KC(), a = this.hh, a.ci = [], a.hz = k, UC(this, this.Nf), 
      VC(this, this.Nf, this.hh), aD(this))
    }
  }
};
function WC(a, b, c) {
  if(w(a.hh) && w(a.Nf)) {
    a.q.NE = c;
    a.q.sI = 90 < b ? 90 : 0 > b ? 0 : b;
    var b = new DA, c = b.vj, e = a.bb / 2, f = a.yb / 2, h = a.Xa / 2;
    az(c);
    c[12] = e;
    c[13] = f;
    c[14] = h;
    c[15] = 1;
    b = new DA(b.vj);
    b = GA(EA(FA(b, -(a.q.NE * Math.PI / 180)), -(a.q.sI * Math.PI / 180)));
    a.Nf.Sv(b);
    a.hh.Sv(b)
  }
}
s.Ue = function(a, b) {
  for(var c = this.hh, e = a - c.Fk, f = c.Gk - b, h = 0, j = k, l = 0;l < c.ci.length;l++) {
    var n;
    n = c.ci[l];
    Math.sqrt(Math.pow(e - n.Dm[0], 2) + Math.pow(f - n.Dm[1], 2)) <= n.oV ? (n.Ou || (n.Ou = i), n = i) : n = n.Ou = m;
    if(n) {
      h = l;
      j = c.ci[l];
      break
    }
  }
  for(l = h + 1;l < c.ci.length;l++) {
    c.ci[l].Ou = m
  }
  c.hz = j;
  SA(c);
  return j
};
s.Ta = k;
s.ia = k;
s.Th = k;
s.ci = [];
s.U = k;
s.bb = 0;
s.yb = 0;
s.Xa = 0;
s.Nf = k;
s.hh = k;
s.fd = k;
s.ic = k;
s.Fb = k;
s.Ft = k;
s.Hq = 0;
s.Qr = [];
s.Zq = k;
s.ks = k;
s.Hs = k;
s.Er = k;
s.Wq = k;
s.oB = "";
s.xI = "";
s.sB = "";
s.Ki = [];
s.ft = [];
s.Ye = k;
function bD(a, b, c, e, f) {
  K.call(this, a, b, c, e, f);
  this.Bd(a);
  this.Vk = new SC(this);
  this.Vk.Bd(a);
  this.Sh = {};
  a = m;
  w(b) && (a = w(b.SurfaceClicked));
  this.SO = new PC(this, c, a)
}
C(bD, K);
B("tr.surface.SurfaceChart", bD);
H.g().z("SurfaceChart", bD);
s = bD.prototype;
s.rj = k;
s.SO = k;
s.Vk = k;
s.U = k;
s.l = function(a) {
  bD.e.l.call(this, a);
  this.element = a;
  this.Vk.l(a);
  cD(this);
  var b = this;
  setTimeout(function() {
    aD(b.Vk)
  }, 100)
};
s.k = function() {
  bD.e.k.call(this);
  var a = this.ma();
  a.i(this.b(), "mousedown", this.Fy);
  a.i(this.b(), "mouseup", this.fT);
  a.i(this.b(), "mousemove", this.xu);
  a.i(this.b(), "click", this.RS);
  a.i(window, "resize", this.iT)
};
s.fv = function() {
  TC(this.Vk)
};
s.Fy = function(a) {
  this.Sh.pD = i;
  this.Sh.LA = a.clientX;
  this.Sh.MA = a.clientY;
  this.Sh.vW = this.a().sI;
  this.Sh.wW = this.a().NE
};
s.fT = function() {
  this.Sh.pD = m
};
s.RS = function(a) {
  if(this.Sh.pD === m) {
    var b = sd(this.b(), document.documentElement), b = this.Vk.Ue(a.clientX - b.x, a.clientY - b.y);
    w(b) && this.SO.v(b.zI, b.QI, a)
  }
};
s.xu = function(a) {
  this.Sh.pD === i && (WC(this.Vk, this.Sh.vW + (a.clientY - this.Sh.MA), this.Sh.wW + (a.clientX - this.Sh.LA)), aD(this.Vk))
};
s.iT = function() {
  aD(this.Vk)
};
s.zf = function() {
  w(this.U) && this.Vk.zf(this.U)
};
function cD(a) {
  var b = a.a();
  a.U = new S(k);
  var c = m, e = k;
  !c && w(b.Rh) && 0 < b.Rh.length && (e = yo.g().we(b.Rh), e !== g && e !== k && (c = i));
  c && a.jA(e)
}
s.hO = function(a) {
  var b = this.a();
  b.Rh = a;
  this.jA(yo.g().we(b.Rh))
};
s.jA = function(a) {
  if(w(a)) {
    var b = ga(a);
    "object" == b && a instanceof R && (this.rj = a, this.U.Gj(a));
    "string" === b && (a = JSON.parse(a + ""), b = new R, b.Ty(a), this.rj = b, this.U.Gj(b));
    this.zf()
  }else {
    this.rj = k, this.U.Gj(k)
  }
};
s.xa = function(a) {
  this.a().width = a;
  this.zf()
};
s.Ha = function() {
  return this.a().width
};
s.Ma = function(a) {
  this.a().height = a;
  this.zf()
};
s.va = function() {
  return this.a().height
};
s.Y = p();
var dD = new gl("etk-componentframe");
function eD(a, b, c) {
  ox.call(this, a, b, c, dD)
}
C(eD, ox);
H.g().z("ComponentFrame", eD);
eD.prototype.M = KC.prototype;
eD.prototype.l = function(a) {
  eD.e.l.call(this, a)
};
eD.prototype.k = function() {
  eD.e.k.call(this);
  this.jO(this.a().Qx)
};
eD.prototype.SR = function() {
  return this.a().Qx
};
eD.prototype.getDisableRoundedCorner = eD.prototype.SR;
eD.prototype.jO = function(a) {
  (this.a().Qx = a) && D(this.b(), "etk-componentframe-straightborder")
};
eD.prototype.setDisableRoundedCorner = eD.prototype.jO;
function fD(a, b, c) {
  ox.call(this, a, b, c);
  this.Ub = new um(new uj({text:""}), k, m)
}
C(fD, ox);
ag(fD, lC);
H.g().z("tr.ui.AppToolbar", fD);
s = fD.prototype;
s.M = Qx.prototype;
s.WM = k;
s.YJ = k;
s.Uo = k;
s.l = function(a) {
  fD.e.l.call(this, a);
  this.s = a;
  this.Ub.m();
  F(this.Ub.b(), "etk-apptoolbar-appname", i);
  this.Uo = this.u().m("div");
  F(this.Uo, "etk-apptoolbar-content", i);
  if(this.YJ == k) {
    var b = this.b().children.length, c = [];
    if(0 < b) {
      for(var e = 0;e < b;e++) {
        var f = this.b().children[e];
        f && f != this.Ub.b() && c.push(f)
      }
      for(b = 0;b < c.length;b++) {
        this.Uo.appendChild(c[b])
      }
    }
  }else {
    this.Uo.appendChild(this.YJ.b())
  }
  c = this.u().m("div");
  F(c, "etk-apptoolbar-navigationsection", i);
  this.WM != k && (b = this.WM.b(), c.appendChild(b));
  this.fu() && (this.Ah = new Nn({}, k, m), this.Ah.m(), F(this.Ah.b(), "etk-headersettingsbutton", i), c.appendChild(this.Ah.b()));
  a.appendChild(this.Ub.b());
  a.appendChild(this.Uo);
  a.appendChild(c)
};
s.k = function() {
  var a = this.a().appName;
  this.a().appName = a;
  this.Ub.ra(a);
  this.ff(this.a().isBusy);
  this.xi(this.a().isRetrievalError);
  fD.e.k.call(this)
};
s.Ub = k;
s.fu = function() {
  return this.a().enableSettings
};
s.Kv = function(a) {
  this.a().enableSettings = a
};
s.pe = k;
s.rg = function() {
  this.pe == k && (this.pe = this.u().m("span", "etk-apptoolbar-busyicon"));
  return this.pe
};
s.Wh = function() {
  return this.a().isBusy
};
s.ff = function(a) {
  this.a().isBusy = a;
  this.hl(a)
};
s.hl = function() {
  var a = this.Uo;
  try {
    this.Wh() ? (D(this.b(), "etk-apptoolbar-busy"), a.appendChild(this.rg())) : (E(this.b(), "etk-apptoolbar-busy"), a.removeChild(this.rg()))
  }catch(b) {
  }
};
s.Jk = k;
s.tg = function() {
  this.Jk == k && (this.Jk = this.u().m("span", "etk-apptoolbar-retrievalerroricon"));
  return this.Jk
};
s.Yh = function() {
  return this.a().isRetrievalError
};
s.xi = function(a) {
  (this.a().isRetrievalError = a) && this.ff(m);
  this.il(a)
};
s.il = function() {
  var a = this.Uo;
  try {
    this.Yh() ? (D(this.b(), "etk-apptoolbar-retrievalerror"), a.appendChild(this.tg())) : (E(this.b(), "etk-apptoolbar-retrievalerror"), a.removeChild(this.tg()))
  }catch(b) {
  }
};
function gD(a) {
  VA.call(this, a);
  if(a.hasOwnProperty("items")) {
    this.T = [];
    for(var a = a.items, b = 0;b < a.length;b++) {
      this.T.push(new UA(a[b]))
    }
  }
}
C(gD, VA);
gD.prototype.T = [];
var hD = new gl("etk-contextmenu");
function iD(a, b, c, e, f) {
  ZB.call(this, a, b, c, z(e) ? e : hD, f)
}
C(iD, ZB);
B("tr.ui.ContextMenu", iD);
ag(iD, Uj);
H.g().z("ContextMenu", iD);
s = iD.prototype;
s.M = gD.prototype;
s.a = function() {
  return iD.e.a.call(this)
};
s.l = function(a) {
  iD.e.l.call(this, a)
};
s.k = function() {
  iD.e.k.call(this)
};
s.n = function() {
  iD.e.n.call(this)
};
function jD() {
  this.qs = [];
  this.Ak = {}
}
x(jD);
s = jD.prototype;
s.qs = [];
s.Ak = {};
s.yW = 99E3;
s.AA = function(a) {
  var b = 100 * this.qs.length + this.yW, c = a.ip();
  c && dd(c, "z-index", b);
  dd(a.b(), "z-index", ++b);
  a.py() ? this.qs.push(a) : a.Wd instanceof Window ? (w(this.Ak[a.Wd]) || (this.Ak[a.Wd] = []), this.Ak[a.Wd].push(a)) : (w(this.Ak[a.Wd.id]) || (this.Ak[a.Wd.id] = []), this.Ak[a.Wd.id].push(a));
  a.ko(i)
};
s.Bu = function(a) {
  a.py() ? (this.qs[this.qs.length - 1] == a && this.qs.pop(), a.ko(m)) : kD(this, a)
};
function kD(a, b) {
  var c = b.b();
  if(a.Ak[c.id] != k) {
    for(var e = 0;e < a.Ak[c.id].length;e++) {
      kD(a, a.Ak[c.id][e])
    }
  }
  b.ko(m)
}
;function Y(a, b, c, e, f) {
  Rn.call(this, a, b, c, z(e) ? e : lD, f);
  this.Kf = new BB;
  this.qe = [];
  this.kB = new rm(this, "VisibilityChanged", c, bk(b, "VisibilityChanged"));
  this.EC = new yh(this, "Cancel", c, bk(b, "Cancel"));
  this.bC = new yh(this, "Accept", c, bk(b, "Accept"))
}
C(Y, Rn);
B("tr.ui.Popup", Y);
var lD = new gl("etk-popup");
ag(Y, Uj);
H.g().z("Popup", Y);
s = Y.prototype;
s.M = oj.prototype;
s.a = function() {
  return Y.e.a.call(this)
};
s.Xi = k;
s.kl = k;
s.l = function(a) {
  Y.e.l.call(this, a);
  var b = this.b().children.length;
  if(0 < b && (this.Xi || (this.Xi = this.b().children[0]), 1 < b && !this.kl)) {
    this.kl = this.b().children[1]
  }
  this.Od(this.pc());
  this.nO(this.py());
  this.Kf.Na(a);
  a = Ac("div", "etk-popup-content");
  a.appendChild(this.Xi);
  this.Kf.QV(a);
  this.kl || (this.kl = Ac("div"));
  this.kl && this.Kf.KV(this.kl);
  this.kE() ? this.vL() || (a = this.Kf, jB(a), Cd(a.Yk, m)) : Cd(kB(this.Kf), m);
  a = this.Kf;
  b = this.kL();
  a.HK = b;
  nB(a, b && a.Ra);
  this.pO(zc(document))
};
s.m = function() {
  var a = this.u().m("div");
  a.className = "etk-control etk-popup";
  a.setAttribute("data-etk-type", "Popup");
  a.setAttribute("data-etk-ctor", "{}");
  a.setAttribute("data-etk-behaviors", "{}");
  a.setAttribute("data-etk-events", "{}");
  this.Xi = Ac("div");
  this.kl = Ac("div");
  a.appendChild(this.Xi);
  a.appendChild(this.kl);
  var b = H.g();
  this.qe = b.fa.Sn(b, this.a().kx, this.kl);
  this.l(a)
};
s.La = q("Xi");
s.k = function() {
  Y.e.k.call(this);
  G(this.Kf, "show", A(this.gU, this));
  G(this.Kf, "hide", A(this.fU, this));
  G(window, "resize", A(this.bV, this));
  var a = new eg(this.b());
  G(a, "key", A(this.wu, this))
};
s.n = function() {
  Y.e.n.call(this)
};
s.gU = function(a) {
  this.kB.v(this.ob(), a);
  a.stopPropagation()
};
s.fU = function(a) {
  this.kB.v(this.ob(), a);
  a.stopPropagation()
};
s.uI = k;
s.bV = function(a) {
  clearTimeout(this.uI);
  this.uI = setInterval(A(function() {
    this.Jb();
    clearTimeout(this.uI)
  }, this), 100);
  a.stopPropagation()
};
s.wu = function(a) {
  var b = m;
  13 == a.keyCode && (this.bC.v(a), b = i);
  27 == a.keyCode && (b = i, this.EC.v(a));
  b && (a.preventDefault(), this.Y(m));
  return b
};
s.Kf = k;
s.qe = [];
s.ZK = q("qe");
Y.prototype.getButtons = Y.prototype.ZK;
Y.prototype.pc = function() {
  return this.a().caption
};
Y.prototype.getCaption = Y.prototype.pc;
Y.prototype.Od = function(a) {
  this.a().caption = a;
  this.kE() == i && this.Kf.yh(a)
};
Y.prototype.setCaption = Y.prototype.Od;
Y.prototype.kE = function() {
  return this.a().IO
};
Y.prototype.getShowTitleBar = Y.prototype.kE;
Y.prototype.vL = function() {
  return this.a().AO
};
Y.prototype.getShowCloseButton = Y.prototype.vL;
Y.prototype.py = function() {
  return this.a().pM
};
Y.prototype.getIsModal = Y.prototype.py;
Y.prototype.nO = function(a) {
  var b = this.Kf;
  a != b.SF && mB(b, a)
};
Y.prototype.setIsModal = Y.prototype.nO;
Y.prototype.dS = function() {
  return this.a().bM
};
Y.prototype.getIsAlwaysOnTop = Y.prototype.dS;
Y.prototype.kL = function() {
  return this.a().qM
};
Y.prototype.getIsMovable = Y.prototype.kL;
Y.prototype.ob = function() {
  return this.Kf.w()
};
Y.prototype.getIsVisible = Y.prototype.ob;
Y.prototype.Y = function(a) {
  Y.e.Y.call(this, a);
  a ? jD.g().AA(this) : jD.g().Bu(this)
};
Y.prototype.setIsVisible = Y.prototype.Y;
Y.prototype.ko = function(a) {
  this.Kf.F(a);
  a && this.Jb()
};
Y.prototype.pS = function() {
  return this.a().result
};
Y.prototype.getResult = Y.prototype.pS;
Y.prototype.bW = function(a) {
  this.a().result = a
};
Y.prototype.setResult = Y.prototype.bW;
Y.prototype.kB = k;
Y.prototype.Ay = q("kB");
Y.prototype.getVisibilityChangedEvent = Y.prototype.Ay;
Y.prototype.EC = k;
Y.prototype.GR = q("EC");
Y.prototype.getCancelEvent = Y.prototype.GR;
Y.prototype.bC = k;
Y.prototype.wR = q("bC");
Y.prototype.getAcceptEvent = Y.prototype.wR;
Y.prototype.ip = function() {
  return this.Kf.ip()
};
Y.prototype.Wd = k;
Y.prototype.pO = ba("Wd");
Y.prototype.Jb = function() {
  var a = Yc(this.u()), b = zc(a) || window, a = this.b();
  this.Wd == k && (this.Wd = b);
  var c, e;
  this.Wd === b ? (c = wc(b || window), e = new kc(0, 0)) : (c = yd(this.Wd), e = qd(this.Wd));
  b = wc(b || window);
  dd(a, "max-width", b.width + "px");
  this.Kf.RV();
  var b = yd(a), f = e.y;
  e = Math.max(e.x + (c.width - b.width) / 2, 0);
  c = Math.max(f + (c.height - b.height) / 2, 0);
  kd(a, e, c)
};
function mD() {
}
Kj.g().z("ItemIDToControlItemConverter", mD);
Kj.g().z(5, mD);
mD.prototype.ul = function(a, b) {
  if(!w(b) || !w(a)) {
    return k
  }
  for(var c = b.Tb(), e = k, f = c.Da();0 <= --f;) {
    if(a === c.getItem(f).kk()) {
      e = c.getItem(f);
      break
    }
  }
  return e
};
mD.prototype.kr = function(a, b) {
  if(!w(b) || !w(a)) {
    return k
  }
  for(var c = b.Tb(), e = "", f = c.Da();0 <= --f;) {
    if(a === c.getItem(f)) {
      e = c.getItem(f).kk();
      break
    }
  }
  return e
};
function nD(a) {
  pl.call(this, a);
  a.hasOwnProperty("error") && (this.error = a.error);
  a.hasOwnProperty("toggleState") && (this.Rc = a.toggleState);
  a.hasOwnProperty("value1") && a.value && (this.qP = a.value1);
  a.hasOwnProperty("value2") && a.value && (this.Ao = a.value2)
}
C(nD, pl);
nD.prototype.error = "";
nD.prototype.Rc = 0;
nD.prototype.qP = {};
nD.prototype.Ao = {};
function oD(a) {
  this.SJ = a.column;
  if(a.command !== g) {
    switch(a.command) {
      case 0:
        this.mg = "h";
        break;
      case 1:
        this.mg = "ht";
        break;
      case 2:
        this.mg = "d";
        break;
      case 3:
        this.mg = "t";
        break;
      case 4:
        this.mg = "src";
        break;
      case 5:
        this.mg = "ct";
        break;
      case 6:
        this.mg = "S";
        break;
      case 7:
        this.mg = "ltr";
        break;
      case 8:
        this.mg = "tl";
        break;
      case 9:
        this.mg = "rl";
        break;
      case 10:
        this.mg = "tt";
        break;
      case 11:
        this.mg = "urn"
    }
  }
}
oD.prototype.mg = "t";
oD.prototype.SJ = "";
var pD = new gl("etk-componenttoolbar");
function qD(a, b, c, e) {
  Sx.call(this, a, b, c, z(e) ? e : pD);
  this.Yj = new um(new uj({text:""}), k, m)
}
C(qD, Sx);
ag(qD, Uj);
H.g().z("ComponentToolbar", qD);
B("ComponentToolbar", qD);
s = qD.prototype;
s.M = eA.prototype;
s.Yj = k;
s.Zj = k;
s.zt = i;
s.a = function() {
  return qD.e.a.call(this)
};
s.Wh = function() {
  return this.a().rf
};
qD.prototype.getIsBusy = qD.prototype.Wh;
qD.prototype.ff = function(a) {
  this.a().rf = a;
  this.hl(a)
};
qD.prototype.setIsBusy = qD.prototype.ff;
qD.prototype.Yh = function() {
  return this.a().sf
};
qD.prototype.getIsRetrievalError = qD.prototype.Yh;
qD.prototype.xi = function(a) {
  (this.a().sf = a) && this.ff(m);
  this.il(a)
};
qD.prototype.setIsRetrievalError = qD.prototype.xi;
qD.prototype.fu = function() {
  return this.a().wr
};
qD.prototype.getEnableSettings = qD.prototype.fu;
qD.prototype.Kv = function(a) {
  this.a().wr = a;
  this.Ah.Y(a)
};
qD.prototype.setEnableSettings = qD.prototype.Kv;
qD.prototype.pc = function() {
  return this.a().caption
};
qD.prototype.getCaption = qD.prototype.pc;
qD.prototype.Od = function(a) {
  (this.a().caption = a) && this.Yj.ra(a)
};
qD.prototype.setCaption = qD.prototype.Od;
qD.prototype.cn = function() {
  return this.a().Ro
};
qD.prototype.getCaptionUrl = qD.prototype.cn;
qD.prototype.hH = function(a) {
  this.a().Ro = a;
  this.Zj.Tv(this.cn());
  "" !== a ? this.zt || (this.zt = i, this.ye.removeChild(this.Yj.b()), this.Zj.Ca(this.Yj, i), this.Zj.F(i)) : this.zt && (this.zt = m, this.Zj.removeChild(this.Yj), this.ye.appendChild(this.Yj.b()), this.Zj.F(m))
};
qD.prototype.setCaptionUrl = qD.prototype.hH;
qD.prototype.Xt = function() {
  return this.a().kC
};
qD.prototype.getAlwaysShowControls = qD.prototype.Xt;
qD.prototype.HV = function(a) {
  this.a().kC = a;
  this.Xt() ? this.Jj(i, m) : this.Jj(m, m)
};
qD.prototype.setAlwaysShowControls = qD.prototype.HV;
s = qD.prototype;
s.getError = function() {
  return this.a().error
};
s.Pa = function(a) {
  this.a().error = a;
  this.Ni(a)
};
s.yd = function() {
  var a = this.getError();
  return a != k && 0 < a.length ? i : m
};
s.jc = k;
s.gj = function() {
  this.jc == k && (this.jc = this.u().m("span", "etk-Component-erroricon"));
  return this.jc
};
s.Ni = function() {
  var a = this.zk;
  try {
    this.yd() ? (D(this.b(), "etk-Component-error"), this.u().Ns(this.gj(), {title:this.getError()}), a.appendChild(this.gj())) : (E(this.b(), "etk-Component-error"), a.removeChild(this.gj()))
  }catch(b) {
  }
};
s.yp = -1;
s.bE = function() {
  -1 === this.yp && (this.yp = yd(this.Vi).width);
  return this.yp
};
s.zp = -1;
s.cE = function() {
  -1 === this.zp && (this.zp = yd(this.Yj.b()).width);
  return this.zp
};
s.l = function(a) {
  qD.e.l.call(this, a)
};
s.PN = function(a) {
  this.Zj = new ux({}, k, i);
  this.Zj.Ca(this.Yj, i);
  this.Zj.Tv(this.cn());
  this.Zj.F(i);
  this.zt = i;
  this.hH(this.cn());
  this.Zj.Na(this.zk);
  this.Yj.b().style.setProperty("white-space", "nowrap");
  F(a, "etk-componenttoolbar", i);
  F(this.ye, "etk-componenttoolbarheader", i);
  F(this.Yj.b(), "etk-textlabel-componentheader", i)
};
s.La = q("Vi");
s.k = function() {
  qD.e.k.call(this);
  this.Od(this.a().caption);
  this.ff(this.a().rf);
  this.Pa(this.a().error);
  this.xi(this.a().sf);
  this.F(this.a().w);
  var a = this.ma();
  this.Vi !== g && this.Vi !== k && (this.Xt() ? this.Jj(i, m) : this.Jj(m, m), a.i(this.ye, "mouseover", this.mG, i), a.i(this.ye, "mouseout", this.lG, i))
};
s.gu = function() {
  return Zc(this.u()).width - (this.cE() + 8) > this.bE() ? m : i
};
s.mG = function(a) {
  this.Xt() || (this.Jj(i, this.gu()), a.stopPropagation())
};
s.lG = function(a) {
  this.Xt() || (this.Jj(m, this.gu()), a.stopPropagation())
};
s.Jj = function(a, b) {
  a ? (E(this.Vi, "etk-headersection-hidden"), b && D(this.Vi, "etk-headersection-float")) : (D(this.Vi, "etk-headersection-hidden"), b && E(this.Vi, "etk-headersection-float"))
};
s.pe = k;
s.rg = function() {
  this.pe == k && (this.pe = this.u().m("span", "etk-Component-busyicon"));
  return this.pe
};
s.hl = function() {
  var a = this.zk;
  try {
    this.Wh() ? (D(this.b(), "etk-Component-busy"), a.appendChild(this.rg())) : (E(this.b(), "etk-Component-busy"), a.removeChild(this.rg()))
  }catch(b) {
  }
};
s.Do = k;
s.tg = function() {
  this.Do == k && (this.Do = this.u().m("span", "etk-Component-retrievalerroricon"));
  return this.Do
};
s.il = function() {
  var a = this.zk;
  try {
    this.Yh() ? (D(this.b(), "etk-Component-retrievalerror"), a.appendChild(this.tg())) : (E(this.b(), "etk-Component-retrievalerror"), a.removeChild(this.tg()))
  }catch(b) {
  }
};
s.jE = function() {
  return this.Ah.xd()
};
qD.prototype.getSettingsClickedEvent = qD.prototype.jE;
function rD(a) {
  mj.call(this, a);
  a.hasOwnProperty("anchorPosition") && (this.nJ = a.anchorPosition);
  a.hasOwnProperty("enablePadding") && (this.yD = a.enablePadding);
  a.hasOwnProperty("overlayIsVisible") && (this.zG = a.overlayIsVisible);
  a.hasOwnProperty("overlayPosition") && (this.uN = a.overlayPosition)
}
C(rD, mj);
rD.prototype.nJ = 7;
rD.prototype.yD = i;
rD.prototype.zG = m;
rD.prototype.uN = 5;
function sD(a, b, c, e, f) {
  this.j = this.sr = this.Dd = k;
  this.Ei = "";
  this.Nh = this.eb = k;
  this.tk = "";
  this.Zf = k;
  this.cq = {};
  this.Hd = "";
  a === g && (a = {});
  b === g && (b = k);
  c === g && (c = m);
  this.Dd = a;
  K.call(this, a, b, c, e, f);
  Gj(this)
}
C(sD, K);
H.g().z("StreamingDataSource", sD);
s = sD.prototype;
s.l = function(a) {
  sD.e.l.call(this, a);
  this.Ei = this.Dd.datatableId;
  this.j = yo.g().we(this.Ei);
  this.tk = this.Dd.identifierColumnName;
  this.Dd.fieldsAsJson && (this.eb = JSON.parse(this.Dd.fieldsAsJson));
  this.Dd.columnNames && (this.Nh = JSON.parse(this.Dd.columnNames));
  this.Dd.chain && (this.Hd = this.Dd.chain, tq.g().ag(this, [this.Hd], [i]));
  tq.g().qb(this);
  this.Dd.ricsAsJson ? (a = JSON.parse(this.Dd.ricsAsJson), this.rh = JSON.parse(this.Dd.rowIds)) : (this.j && (this.j.cf.i(this.Wl, this), this.j.De.i(this.Wl, this), this.j.bf.i(this.Wl, this), this.j.df.i(this.TU, this)), a = this.j.cu(this.tk), this.rh = this.j.dh());
  a && tD(this, a)
};
s.ag = function(a, b) {
  if(a === k) {
    if("" !== this.Hd && tq.g().ag(this, [this.Hd], [b[0]]), this.Zf !== k && this.Zf !== g) {
      for(var c = [], e = 0;e < this.Zf.length;++e) {
        c.push(b[0])
      }
      tq.g().ag(this, this.Zf, c)
    }
  }else {
    tq.g().ag(this, a, b)
  }
};
s.Ks = function(a) {
  var b;
  try {
    b = JSON.parse(a)
  }catch(c) {
    window.console.error("Error when parsing a JSON command: " + a);
    return
  }
  a = b.name;
  b = b.param;
  if(!("string" !== ga(a) || this[a] === g)) {
    var e = ga(b);
    if("array" === e) {
      switch(b.length) {
        case 1:
          this[a](b[0]);
          break;
        case 2:
          this[a](b[0], b[1]);
          break;
        case 3:
          this[a](b[0], b[1], b[2]);
          break;
        case 4:
          this[a](b[0], b[1], b[2], b[3]);
          break;
        case 5:
          this[a](b[0], b[1], b[2], b[3], b[4]);
          break;
        case 6:
          this[a](b[0], b[1], b[2], b[3], b[4], b[5]);
          break;
        default:
          this[a]()
      }
    }else {
      if("undefined" !== e) {
        this[a](b)
      }else {
        this[a]()
      }
    }
  }
};
s.gA = ba("sr");
s.fj = q("sr");
s.Fq = function(a, b) {
  if(!this.j && (this.j = yo.g().we(this.Ei), !this.j)) {
    return
  }
  for(var c = [], e = 0;e < this.eb.length;++e) {
    var f = b[this.eb[e]];
    f !== g ? c.push(f.Br) : c.push(k)
  }
  e = this.Nh ? this.Nh : this.eb;
  if(this.cq[a] === g || !this.j.dl(this.cq[a], c, e)) {
    this.cq[a] = a, c.push(a), this.j.Pw(a, c, e.concat([this.tk]))
  }
};
s.Qq = function(a, b) {
  this.Fq(a, b)
};
s.uv = function(a) {
  if(!this.j && (this.j = yo.g().we(this.Ei), !this.j)) {
    return
  }
  this.j.Ds(this.cq[a])
};
s.gn = q("eb");
s.qn = function() {
  return[]
};
s.rn = q("Zf");
s.np = q("Hd");
function tD(a, b) {
  a.ag(k, [m]);
  zq(tq.g(), a, a.Zf);
  a.Zf = b;
  if(a.rh) {
    var c = a.rh;
    if(!(c.length > a.Zf.length)) {
      a.rh = c;
      a.cq = {};
      for(var e = 0;e < a.Zf.length;++e) {
        a.cq[a.Zf[e]] = c[e]
      }
    }
  }
  c = tq.g();
  yq(c, a, a.Zf, a.gn(), a.qn());
  a.ag(k, [i])
}
s.Wl = function(a) {
  a.getChangedColumnNames !== g && -1 === a.At.indexOf(this.tk) || (a = this.j.cu(this.tk), this.rh = this.j.dh(), a && tD(this, a))
};
s.TU = function() {
  var a = this.j.cu(this.tk);
  this.rh = this.j.dh();
  a && tD(this, a)
};
s.Dd = k;
s.sr = k;
s.j = k;
s.Ei = "";
s.tk = "";
s.Zf = k;
s.rh = k;
s.cq = k;
s.Hd = "";
s.eb = k;
s.Nh = k;
var uD = new gl("etk-image");
function vD(a, b, c, e, f) {
  K.call(this, a, b, c, z(e) ? e : uD, f)
}
C(vD, K);
B("tr.ui.Image2", vD);
H.g().z("Image2", vD);
var wD = uD.J();
vD.prototype.M = Qy.prototype;
vD.prototype.a = function() {
  return vD.e.a.call(this)
};
vD.prototype.Ml = function() {
  return this.a().Sf
};
vD.prototype.getImageName = vD.prototype.Ml;
vD.prototype.tm = function(a) {
  this.a().Sf = a;
  var b = this.b();
  b != k && a != g && (b.src = a)
};
vD.prototype.setImageName = vD.prototype.tm;
vD.prototype.Ha = function() {
  return this.a().width
};
vD.prototype.getWidth = vD.prototype.Ha;
vD.prototype.xa = function(a) {
  this.a().width = a;
  this.b()
};
vD.prototype.setWidth = vD.prototype.xa;
vD.prototype.va = function() {
  return this.a().height
};
vD.prototype.getHeight = vD.prototype.va;
vD.prototype.Ma = function(a) {
  this.a().height = a;
  this.b()
};
vD.prototype.setHeight = vD.prototype.Ma;
vD.prototype.l = function(a) {
  vD.e.l.call(this, a);
  this.tm(this.a().Sf)
};
vD.prototype.m = function() {
  this.Xb("Image2", "img", uD.J())
};
vD.prototype.k = function() {
  vD.e.k.call(this);
  G(this.b(), "load", A(this.rH, this))
};
vD.prototype.rH = function(a) {
  a.target.naturalWidth > a.target.naturalHeight ? (F(a.target, wD + "-landscape", i), F(a.target, wD + "-portrait", m)) : (F(a.target, wD + "-landscape", m), F(a.target, wD + "-portrait", i))
};
function xD() {
  qq.g().init({ID:"Toolkit", VI:"NewsManager"}, i);
  this.Av = 0;
  this.Mm = {};
  this.bn = [];
  this.Eo = {};
  this.xk = this.Cb = m;
  this.start()
}
x(xD);
s = xD.prototype;
s.Av = 0;
s.Mm = {};
s.bn = [];
s.Eo = {};
s.Cb = m;
s.xk = m;
s.VD = function(a) {
  return this.Mm[a]
};
s.qb = function(a, b) {
  if(a) {
    var c = this.Av++;
    a.Zu = c;
    b ? this.Mm[b] = a : -1 === this.bn.indexOf(a) && this.bn.push(a);
    this.Cb && this.xf([a])
  }
};
s.detach = function(a) {
  var b;
  if(a) {
    for(b in this.Mm) {
      if(this.Mm[b] === a) {
        delete this.Mm[b];
        break
      }
    }
    for(b in this.bn) {
      if(this.bn[b] === a) {
        this.bn.splice(b, 1);
        break
      }
    }
    if(this.Cb) {
      a = [a];
      for(b = a.length - 1;0 <= b;b--) {
        var c = this.Eo[a[b].Zu];
        c && c.stop()
      }
    }
  }
};
s.start = function() {
  qq.g().Nn(A(this.dw, this))
};
s.dw = function() {
  if(!this.Cb) {
    this.Cb = i;
    var a = [], b;
    for(b in this.Mm) {
      a.push(this.Mm[b])
    }
    for(b in this.bn) {
      a.push(this.bn[b])
    }
    0 < a.length && this.xf(a)
  }
};
s.stop = function() {
  this.Cb && (this.Cb = m, this.zo())
};
s.xf = function(a) {
  if(a === k || a === g) {
    return[]
  }
  var b, c;
  b = 0;
  for(c = a.length;b < c;b++) {
    var e = a[b], f = e.HD;
    f && yD(this, e, f)
  }
};
function yD(a, b, c) {
  var e = a.Eo[b.Zu];
  try {
    e ? (e.stop(), e.newsExpression(c)) : (e = sq().newsExpression(c).onAppend(A(function(a) {
      a: {
        if(!b.j && (b.j = yo.g().we(b.Ei), !b.j)) {
          break a
        }
        if(0 !== a.tt) {
          for(var c = [], e = 0;e < b.eb.length;++e) {
            var f = a[b.eb[e].mg.toString()];
            f !== g ? c.push(f) : c.push(k)
          }
          b.j.Pw(a.t, c, b.Nh ? b.Nh : b.eb)
        }
      }
    }, a)).onInsert(A(function(a) {
      a: {
        if(!b.j && (b.j = yo.g().we(b.Ei), !b.j)) {
          break a
        }
        if(0 !== a.tt) {
          for(var c = [], e = 0;e < b.eb.length;++e) {
            var f = a[b.eb[e].mg.toString()];
            f !== g ? c.push(f) : c.push(k)
          }
          Gr(b.j, a.t, c, b.Nh ? b.Nh : b.eb)
        }
      }
    }, a)).onDelete(A(function() {
      b.j || (b.j = yo.g().we(b.Ei))
    }, a)), a.Eo[b.Zu] = e), e.start()
  }catch(f) {
    fh.g().log("NewsManager.Subscribe - Error subscribing to JET: " + f)
  }
}
s.zo = function() {
  for(var a in this.Eo) {
    var b = this.Eo[a];
    b && b.stop()
  }
};
s.ba = function() {
  this.xk = i;
  this.zo();
  delete this.Eo
};
s.Ku = q("xk");
function zD(a, b, c, e, f) {
  mf.call(this, f);
  Zw(this, a, c);
  this.Bd(this.Aa);
  Gj(this)
}
C(zD, mf);
H.g().z("NewsPanel", zD);
s = zD.prototype;
s.k = function() {
  zD.e.k.call(this);
  G(window, "resize", A(this.Gz, this));
  this.Zd();
  G(window, "load", A(this.Ht, this))
};
s.Gz = p();
s.rc = function() {
  return this.a().tooltip
};
s.Vb = function(a) {
  this.a().tooltip = a;
  var b = this.b();
  b != k && w(a) === i && (b.title = a)
};
s.w = function() {
  return this.a().visible
};
s.F = function(a) {
  this.a().visible = a
};
s.Y = function(a) {
  this.F(a)
};
s.ob = function() {
  return this.w()
};
s.l = function(a) {
  zD.e.l.call(this, a);
  this.F(this.w());
  this.Vb(this.rc())
};
s.Ht = function() {
  var a = 1 < qf(this) ? rf(this, 1) : k;
  a != k && F(a.b(), "etk-NewsPanel-Block", i)
};
s.Zd = function() {
  F(this.b(), "etk-NewsPanel", i)
};
s.Pb = function() {
  this.ga || (this.ga = new Tj);
  return this.ga
};
s.jl = p();
function AD(a) {
  pl.call(this, a);
  for(var b in a) {
    a.hasOwnProperty(b) && (this[b] = a[b])
  }
}
C(AD, pl);
C(AD, pl);
function BD(a, b, c) {
  K.call(this, a, b, c, g, g);
  this.wb = new My(this);
  this.re = k
}
C(BD, rl);
ag(BD, yf);
H.g().z("BusinessChart2", BD);
s = BD.prototype;
s.M = AD.prototype;
s.Oi = m;
s.re = k;
s.a = function() {
  return BD.e.a.call(this)
};
s.TD = function() {
  var a = this.a();
  return{lQ:a.seasonalityEnabled, TI:a.schemeType, PP:a.legendDisplayMode, rQ:a.YAxisType, xB:a.title || "Business Chart"}
};
s.yh = function(a) {
  this.re && this.re.MV(a, i)
};
s.Ha = function() {
  return this.a().width
};
s.xa = function(a) {
  this.a().width = a;
  var b = this.b();
  b && (0 < a ? this.Oi = m : (a = b.parentElement.clientWidth, this.Oi = i), 0 == a && (a = 300), wd(b, a))
};
s.va = function() {
  return this.a().height
};
s.Ma = function(a) {
  this.a().height = a;
  var b = this.b();
  b && (0 < a ? this.Oi = m : (a = b.parentElement.clientHeight, this.Oi = i), 0 == a && (a = 304), xd(b, a))
};
s.wb = k;
s.xd = q("wb");
s.l = function(a) {
  BD.e.l.call(this, a)
};
s.k = function() {
  BD.e.k.call(this);
  var a = this.a(), b = a.appServerId;
  b || (b = a.ChartID);
  b || (b = "uniqueId");
  this.b().setAttribute("id", b);
  for(var c = 0;c < this.Pb().Da();c++) {
    this.Pb().getItem(c).qb()
  }
  this.xa(a.width);
  this.Ma(a.height);
  var c = a.seriesParameterList || [{FieldNameForXAxis:"X", FieldNamesForYAxisSeries:["Y1"], LineStyle:0, RenderingType:0, ShowMarker:i, XAxisLabelRotateDegree:0, XAxisTitle:"", XAxisType:2, YAxisSharingCode:"", YAxisTitle:""}], a = window[b + "_data"] || a.jsonData || a.data || {FP:[{MB:"X", $B:["Apple", "Orange", "Peach", "Pineapple", "Mango"]}, {MB:"Y1", $B:[1893399.99, 1285522.28, 1983589.44, 2060832.89, 2571083.09]}]}, e = this.TD();
  this.re = (new ChartHelper).createBusinessChart(b, c, a, e);
  this.re.qD();
  this.re.BQ = this.Oi
};
s.n = function() {
  BD.e.n.call(this)
};
function CD(a) {
  ij.call(this, a);
  a.hasOwnProperty("maxRatings") && (this.MF = a.maxRatings);
  a.hasOwnProperty("ratings") && (this.Yp = a.ratings)
}
C(CD, ij);
CD.prototype.MF = 5;
CD.prototype.Yp = 0;
function DD(a, b) {
  mf.call(this, b);
  this.ph = a || ["1", "2", "3", "4", "5"];
  this.cw = []
}
C(DD, mf);
s = DD.prototype;
s.qf = -1;
s.Dj = -1;
s.vt = k;
s.l = function(a) {
  var b = a.getElementsByTagName("select")[0];
  b || d(Error("Can not decorate " + a + ", with Ratings. Must contain select box"));
  for(var c = this.ph.length = 0, e = b.options.length;c < e;c++) {
    this.ph.push(b.options[c].text)
  }
  this.Oc(b.selectedIndex);
  b.style.display = "none";
  this.vt = b;
  this.m();
  a.insertBefore(this.b(), b)
};
s.k = function() {
  var a = this.b();
  a.tabIndex = 0;
  D(a, this.J());
  wf(a, "slider");
  xf(a, "valuemin", 0);
  xf(a, "valuemax", this.ph.length - 1);
  var b = this.ma();
  b.i(a, "keydown", this.pG);
  for(var c = 0;c < this.ph.length;c++) {
    var e = this.u().m("span", {title:this.ph[c], "class":ED(this, c, m), index:c});
    this.cw.push(e);
    a.appendChild(e)
  }
  b.i(a, "click", this.dG);
  b.i(a, "mouseout", this.Dg);
  b.i(a, "mouseover", this.qi);
  FD(this, this.Dj)
};
s.nb = function() {
  DD.e.nb.call(this);
  for(var a = 0;a < this.cw.length;a++) {
    this.u().removeNode(this.cw[a])
  }
  this.cw.length = 0
};
s.n = function() {
  DD.e.n.call(this);
  this.ph.length = 0
};
s.J = r("goog-ratings");
s.Oc = function(a) {
  a = Math.max(-1, Math.min(a, this.ph.length - 1));
  a != this.Dj && (this.Dj = a, FD(this, this.Dj), this.vt && ("SELECT" == this.vt.tagName ? this.vt.selectedIndex = a : this.vt.value = this.I(), xf(this.b(), "valuenow", this.ph[a])), this.dispatchEvent("change"))
};
s.Kd = q("Dj");
s.I = function() {
  return-1 == this.Dj ? k : this.ph[this.Dj]
};
s.nA = ba("ph");
s.qL = q("ph");
s.qi = function(a) {
  z(a.target.index) && (a = a.target.index, this.qf != a && (FD(this, a), this.qf = a, this.dispatchEvent("highlightchange"), this.dispatchEvent("highlight")))
};
s.Dg = function(a) {
  a.relatedTarget && !z(a.relatedTarget.index) && (FD(this, this.Dj), this.qf = -1, this.dispatchEvent("highlightchange"), this.dispatchEvent("unhighlight"))
};
s.dG = function(a) {
  z(a.target.index) && this.Oc(a.target.index)
};
s.pG = function(a) {
  switch(a.keyCode) {
    case 27:
      this.Oc(-1);
      break;
    case 36:
      this.Oc(0);
      break;
    case 35:
      this.Oc(this.ph.length);
      break;
    case 37:
      this.Oc(this.Kd() - 1);
      break;
    case 39:
      this.Oc(this.Kd() + 1);
      break;
    default:
      a = parseInt(String.fromCharCode(a.keyCode), 10), isNaN(a) || this.Oc(a - 1)
  }
};
function FD(a, b) {
  for(var c = 0, e;e = a.cw[c];c++) {
    e.className = ED(a, c, c <= b)
  }
}
function ED(a, b, c) {
  var e = a.J(), a = 0 === b ? e + "-firststar" : b == a.ph.length - 1 ? e + "-laststar" : e + "-midstar";
  return e + "-star " + (c ? a + "-on" : a + "-off")
}
;var GD = new gl("etk-ratingcontrol");
function HD(a, b, c, e, f) {
  K.call(this, a, b, c, z(e) ? e : GD, f);
  this.tv = new DD;
  this.HG = new El(this, "RatingsChanged", c, bk(b, "RatingsChanged"))
}
C(HD, K);
ag(HD, Uj);
H.g().z("Rating", HD);
s = HD.prototype;
s.M = CD.prototype;
s.tv = k;
s.a = function() {
  return HD.e.a.call(this)
};
s.l = function(a) {
  HD.e.l.call(this, a);
  for(var b = [], c = 1;c <= this.a().MF;c++) {
    b.push(c)
  }
  this.tv.nA(b);
  this.tv.Na(a);
  this.nA(this.a().Yp)
};
s.k = function() {
  HD.e.k.call(this);
  G(this.tv, "change", A(this.FU, this));
  G(this.b(), "click", this.Ae)
};
s.n = function() {
  HD.e.n.call(this)
};
s.Ae = function(a) {
  a.stopPropagation()
};
s.FU = function(a) {
  a.currentTarget != k && a.currentTarget.Kd && (this.a().Yp = a.currentTarget.Kd() + 1, this.HG.v(this.a().Yp, a))
};
s.qL = function() {
  return this.a().Yp
};
HD.prototype.getRatings = HD.prototype.qL;
HD.prototype.nA = function(a) {
  this.a().Yp = a;
  this.tv.Oc(this.a().Yp - 1)
};
HD.prototype.setRatings = HD.prototype.nA;
HD.prototype.iS = function() {
  return this.a().MF
};
HD.prototype.getMaxRatings = HD.prototype.iS;
HD.prototype.HG = k;
HD.prototype.nS = q("HG");
HD.prototype.getRatingsChangedEvent = HD.prototype.nS;
function ID(a) {
  mj.call(this, a);
  a.hasOwnProperty("scrollable") && (this.bH = a.scrollable);
  a.hasOwnProperty("showTitle") && (this.CA = a.showTitle);
  a.hasOwnProperty("title") && (this.title = a.title);
  a.hasOwnProperty("titleUrl") && (this.WA = a.titleUrl)
}
C(ID, mj);
ID.prototype.bH = m;
ID.prototype.CA = m;
ID.prototype.title = "";
ID.prototype.WA = "";
function JD(a, b, c, e, f) {
  Nn.call(this, a, b, c, e, f);
  new yh(this, "Removed", c, bk(b, "Removed"));
  this.a().WH !== this.a().text && (w(this.a().text) && 0 < this.a().text.length ? this.a().WH = this.a().text : this.a().text = this.a().WH)
}
C(JD, Nn);
B("tr.ui.RemovableButton", JD);
ag(JD, Uj);
H.g().z("RemovableButton", JD);
s = JD.prototype;
s.M = GC.prototype;
s.ea = k;
s.Bs = k;
s.lb = 0;
s.a = function() {
  return JD.e.a.call(this)
};
s.l = function(a) {
  JD.e.l.call(this, a);
  this.ea = Ac("div", {"class":"etk-removablebutton-image etk-removablebutton-button-normal"});
  this.HJ = Ac("td", "etk-removablebutton-cell1 etk-removablebutton-cell");
  a = Ac("td", "etk-removablebutton-cell2 etk-removablebutton-cell", Ac("div", "etk-removablebutton-image-cell", this.ea));
  this.Bs = Ac("div", "etk-removablebutton", Ac("table", {"class":"etk-removablebutton-table", cellpadding:"0", cellspacing:"0"}, Ac("tr", k, this.HJ, a)));
  Jc(this.Bs, this.b());
  D(this.b(), "etk-control");
  this.HJ.appendChild(this.b());
  E(this.b(), "etk-removablebutton");
  this.s = this.Bs
};
s.k = function() {
  JD.e.k.call(this);
  G(this.ea, "click", this.Ae, m, this);
  G(this.ea, "mousedown", this.av, m, this);
  G(this.ea, "mouseup", this.bv, m, this);
  G(this.ea, "mouseover", this.pi, m, this);
  G(this.ea, "mouseout", this.oi, m, this);
  G(this.Fa(), "focus", this.uf, m, this);
  G(this.Fa(), "blur", this.kh, m, this);
  G(this.Fa(), "mouseover", this.pi, m, this);
  G(this.Fa(), "mouseout", this.oi, m, this);
  G(this.Fa(), "mousedown", this.av, m, this);
  G(this.Fa(), "mouseup", this.bv, m, this)
};
s.Y = function(a) {
  JD.e.Y.call(this, a);
  w(this.Bs) && Cd(this.Bs, a)
};
JD.prototype.setIsVisible = JD.prototype.Y;
s = JD.prototype;
s.n = function() {
  JD.e.n.call(this);
  this.la()
};
s.Ae = function(a) {
  this.Y(m);
  a.stopPropagation()
};
s.av = function() {
  this.Z() && (this.lb |= 4, this.Ef())
};
s.bv = function() {
  this.Z() && (this.lb &= -5, this.Ef())
};
s.uf = function() {
  this.Z() && (this.lb |= 32, this.Ef())
};
s.kh = function() {
  this.Z() && (this.lb &= -33, this.Ef())
};
s.pi = function() {
  this.Z() && (this.lb |= 2, this.Ef())
};
s.oi = function() {
  this.Z() && (this.lb &= -3, this.Ef())
};
s.Ef = function() {
  var a = "etk-removablebutton-normal";
  this.lb & 4 ? a = "etk-removablebutton-active" : this.lb & 32 ? a = "etk-removablebutton-focus" : this.lb & 2 ? a = "etk-removablebutton-hover" : this.lb & 1 && (a = "etk-removablebutton-disabled");
  ob(this.Bs, ["etk-removablebutton-active", "etk-removablebutton-normal", "etk-removablebutton-disabled", "etk-removablebutton-hover", "etk-removablebutton-focus"], a)
};
s.R = function(a) {
  JD.e.R.call(this, a);
  this.lb = a ? this.lb & -2 : this.lb | 1;
  this.Ef()
};
JD.prototype.setIsEnabled = JD.prototype.R;
function ar(a, b) {
  ek.call(this, a, b)
}
C(ar, ek);
H.g().z("tr.core.Behavior", ar);
s = ar.prototype;
s.M = HC.prototype;
s.a = function() {
  return ar.e.a.call(this)
};
s.wg = r("ServerControlBindingBehavior");
s.ju = function() {
  return this.a().propertyName
};
s.zy = function() {
  return this.a().variableName
};
s.eL = function() {
  return this.a().eventName
};
s.ly = function() {
  return this.a().converter
};
var KD = new gl("etk-image");
function LD(a, b, c, e, f) {
  K.call(this, a, b, c, z(e) ? e : KD, f)
}
C(LD, K);
B("tr.ui.Image", LD);
H.g().z("Image", LD);
var MD = KD.J();
LD.prototype.M = Py.prototype;
LD.prototype.a = function() {
  return LD.e.a.call(this)
};
LD.prototype.Ml = function() {
  return this.a().Sf
};
LD.prototype.getImageName = LD.prototype.Ml;
LD.prototype.tm = function(a) {
  this.a().Sf = a;
  var b = this.b();
  b != k && a != g && (b.src = a)
};
LD.prototype.setImageName = LD.prototype.tm;
LD.prototype.l = function(a) {
  LD.e.l.call(this, a);
  this.tm(this.a().Sf)
};
LD.prototype.m = function() {
  this.Xb("Image", "img", KD.J())
};
LD.prototype.k = function() {
  LD.e.k.call(this);
  G(this.b(), "load", A(this.rH, this))
};
LD.prototype.rH = function(a) {
  a.target.naturalWidth > a.target.naturalHeight ? (F(a.target, MD + "-landscape", i), F(a.target, MD + "-portrait", m)) : (F(a.target, MD + "-landscape", m), F(a.target, MD + "-portrait", i))
};
function ND(a, b, c, e) {
  e = z(e) ? e : cA.g();
  kg.call(this, k, e);
  Zw(this, a, c);
  this.Bd(this.Aa);
  this.dI = new um(new uj({text:this.a().title}), k, i);
  this.cO = new ug;
  this.XJ = new kg(k)
}
C(ND, kg);
H.g().z("NewsComponent", ND);
s = ND.prototype;
s.Aa = k;
s.dI = k;
s.cO = k;
s.XJ = k;
s.vn = function() {
  return this.a().title
};
s.yh = function(a) {
  this.a().title = a;
  this.dI.ra(a)
};
s.m = function() {
  var a = ND.e.m.call(this);
  this.Ca(this.dI, i);
  this.Ca(this.cO, i);
  this.Ca(this.XJ, i);
  this.yh(this.vn());
  return a
};
s.rb = r(m);
s.k = function() {
  ND.e.k.call(this)
};
s.jl = p();
var OD = new gl("etk-section");
function PD(a, b, c) {
  Rn.call(this, a, b, c, OD);
  this.Zk = new um(new uj({text:""}), k, m);
  this.gc(i);
  lg(this, m)
}
C(PD, Rn);
B("tr.ui.Section", PD);
H.g().z("Section", PD);
s = PD.prototype;
s.M = ID.prototype;
s.Zk = k;
s.a = function() {
  return PD.e.a.call(this)
};
s.Xi = k;
s.l = function(a) {
  PD.e.l.call(this, a);
  this.Xi = Ac("div", "etk-section-content", a.childNodes);
  this.Zk.Na(a);
  F(this.Zk.b(), "etk-section-title", i);
  this.Zk.Zd(1);
  this.Zk.F(m);
  a.appendChild(this.Xi)
};
s.m = function() {
  this.Xb("Section", "div", "etk-section")
};
s.La = q("Xi");
s.k = function() {
  PD.e.k.call(this);
  var a = this.a();
  this.yh(a.title);
  this.uO(a.WA);
  this.sO(a.CA);
  a = a.bH;
  (this.a().bH = a) && dd(this.b(), "overflow", "auto")
};
s.vn = function() {
  return this.a().title
};
PD.prototype.getTitle = PD.prototype.vn;
PD.prototype.yh = function(a) {
  this.a().title = a;
  this.Zk.ra(a)
};
PD.prototype.setTitle = PD.prototype.yh;
PD.prototype.xS = function() {
  return this.a().CA
};
PD.prototype.getShowTitle = PD.prototype.xS;
PD.prototype.sO = function(a) {
  this.a().CA = a;
  this.Zk.F(a)
};
PD.prototype.setShowTitle = PD.prototype.sO;
PD.prototype.ES = function() {
  return this.a().WA
};
PD.prototype.getTitleUrl = PD.prototype.ES;
PD.prototype.uO = function(a) {
  a !== g && a !== k && "" !== a && (this.a().WA = a, this.Zk.Pb().clear(), a = new Vq({value:a}), this.Zk.Pb().add(new Wq(a, this.Zk)))
};
PD.prototype.setTitleUrl = PD.prototype.uO;
PD.prototype.lu = function() {
  var a = [];
  a.push(this.Xi);
  return a
};
var QD = new gl("etk-overlaycontainer");
function RD(a, b, c, e, f) {
  Rn.call(this, a, b, c, z(e) ? e : QD, f);
  this.gc(i)
}
C(RD, Rn);
ag(RD, Uj);
H.g().z("OverlayContainer", RD);
s = RD.prototype;
s.M = rD.prototype;
s.a = function() {
  return RD.e.a.call(this)
};
s.hr = k;
s.mh = k;
s.l = function(a) {
  RD.e.l.call(this, a);
  this.mh || (this.mh = a.querySelector('*[tag-name="overlay-content"]'));
  this.mh || (this.mh = a.lastChild);
  0 < this.b().children.length && !this.hr && (this.hr = this.b().children[0]);
  this.hr && this.mh ? (F(this.hr, "etk-overlaycontainer-content", i), F(this.mh, "etk-overlaycontainer-overlay", i)) : fh.g().error("Overlay container not created as expected. It should have two sections one for its own content another for overlay.")
};
s.k = function() {
  RD.e.k.call(this);
  SD(this);
  var a = this.a().yD;
  this.a().yD = a;
  this.mh && F(this.mh, "etk-overlaycontainer-overlay-enablepadding", a);
  this.ma().i(document, "mousedown", this.Dz, i)
};
s.n = function() {
  RD.e.n.call(this)
};
s.XK = function() {
  return this.a().nJ
};
RD.prototype.getAnchorPosition = RD.prototype.XK;
RD.prototype.oL = function() {
  return this.a().uN
};
RD.prototype.getOverlayPosition = RD.prototype.oL;
function SD(a) {
  a.a().zG = m;
  dd(a.mh, "display", "none")
}
RD.prototype.Qt = function(a) {
  RD.e.Qt.call(this, a);
  a.b()
};
RD.prototype.BC = function() {
  if(this.hr) {
    var a = bC.g(), b = a[this.oL()], a = new Pf(this.hr, a[this.XK()], i, i);
    a.kA && a.kA(5);
    if(this.mh) {
      var c = yd;
      yd = TD;
      a.Jb(this.mh, b);
      yd = c;
      fh.g().info("X: " + this.mh.style.left + ", Y : " + this.mh.style.top)
    }
  }
};
RD.prototype.Cz = function() {
  SD(this)
};
RD.prototype.Dz = function(a) {
  if(this.a().zG) {
    var b = this.b(), c;
    if(!(c = a.target == b)) {
      a: {
        for(a = a.target.parentNode;a != k;) {
          if(a == b) {
            c = i;
            break a
          }
          a = a.parentNode
        }
        c = m
      }
    }
    c || SD(this)
  }
};
function TD(a) {
  if("none" != id(a, "display")) {
    return zd(a)
  }
  var b = a.style, c = b.display, e = b.visibility, f = b.position, h = b.top, j = b.left;
  b.visibility = "hidden";
  b.position = "absolute";
  b.display = "inline";
  b.top = 0;
  b.left = 0;
  a = zd(a);
  b.top = h;
  b.left = j;
  b.display = c;
  b.position = f;
  b.visibility = e;
  return a
}
;function UD(a) {
  ij.call(this, a);
  a.hasOwnProperty("displayFormat") && (this.wl = a.displayFormat);
  a.hasOwnProperty("displayPrecision") && (this.xl = a.displayPrecision);
  a.hasOwnProperty("displayText") && (this.Rm = a.displayText);
  a.hasOwnProperty("fractionMode") && (this.Fl = a.fractionMode);
  a.hasOwnProperty("highlightStyle") && (this.Hb = a.highlightStyle);
  a.hasOwnProperty("isUninitialized") && (this.ec = a.isUninitialized);
  a.hasOwnProperty("maximum") && (this.hi = a.maximum);
  a.hasOwnProperty("minimum") && (this.ii = a.minimum);
  a.hasOwnProperty("options") && (this.options = a.options);
  a.hasOwnProperty("style") && (this.style = a.style);
  a.hasOwnProperty("textAlign") && (this.textAlign = a.textAlign);
  a.hasOwnProperty("textOverflow") && (this.ya = a.textOverflow);
  a.hasOwnProperty("uninitializedValue") && (this.Je = a.uninitializedValue);
  a.hasOwnProperty("unitPrefix") && (this.bl = a.unitPrefix);
  a.hasOwnProperty("unitSuffix") && (this.cl = a.unitSuffix);
  a.hasOwnProperty("value") && (this.value = a.value)
}
C(UD, ij);
s = UD.prototype;
s.wl = 0;
s.xl = 0;
s.Rm = "";
s.Fl = 0;
s.Hb = Ni;
s.ec = m;
s.hi = 1E3;
s.ii = 0;
s.options = 0;
s.style = 0;
s.textAlign = 0;
s.ya = 0;
s.Je = "";
s.bl = "";
s.cl = "";
s.value = 0;
function VD(a, b, c, e, f) {
  this.j = this.Zu = this.Dd = k;
  this.Ei = "";
  this.Nh = this.eb = k;
  this.HD = "";
  a === g && (a = {});
  b === g && (b = k);
  c === g && (c = m);
  this.Dd = a;
  K.call(this, a, b, c, e, f);
  Gj(this)
}
C(VD, K);
H.g().z("NewsDataSource", VD);
s = VD.prototype;
s.l = function(a) {
  VD.e.l.call(this, a);
  this.Ei = this.Dd.datatableId;
  this.j = yo.g().we(this.Ei);
  if(this.Dd.fields) {
    this.eb = [];
    this.Nh = [];
    for(a = 0;a < this.Dd.fields.length;a++) {
      var b = new oD(this.Dd.fields[a]);
      this.eb.push(b);
      this.Nh.push(b.SJ)
    }
  }
  this.Dd.expression && (this.HD = this.Dd.expression);
  xD.g().qb(this)
};
s.Ks = function(a) {
  var b;
  try {
    b = JSON.parse(a)
  }catch(c) {
    window.console.error("Error when parsing a JSON command: " + a);
    return
  }
  a = b.name;
  b = b.param;
  if(!("string" !== ga(a) || this[a] === g)) {
    var e = ga(b);
    if("array" === e) {
      switch(b.length) {
        case 1:
          this[a](b[0]);
          break;
        case 2:
          this[a](b[0], b[1]);
          break;
        case 3:
          this[a](b[0], b[1], b[2]);
          break;
        case 4:
          this[a](b[0], b[1], b[2], b[3]);
          break;
        case 5:
          this[a](b[0], b[1], b[2], b[3], b[4]);
          break;
        case 6:
          this[a](b[0], b[1], b[2], b[3], b[4], b[5]);
          break;
        default:
          this[a]()
      }
    }else {
      if("undefined" !== e) {
        this[a](b)
      }else {
        this[a]()
      }
    }
  }
};
s.Dd = k;
s.Zu = k;
s.j = k;
s.Ei = "";
s.HD = "";
s.eb = k;
s.Nh = k;
function WD(a) {
  mj.call(this, a);
  a.hasOwnProperty("renderDropdownAsSibling") && (this.QN = a.renderDropdownAsSibling)
}
C(WD, mj);
WD.prototype.QN = i;
var XD = new gl("tr-numericupdown");
function YD(a, b, c, e, f) {
  e = z(e) ? e : XD;
  K.call(this, a, b, c, e, f);
  this.zD(a);
  this.Bd(a);
  this.N = new V({}, b, m);
  a = {tabEnabled:m, text:"\u25b4"};
  this.Eq = new Nn(a, b, m);
  a.text = "\u25be";
  this.ap = new Nn(a, b, m);
  this.Qa = new Sf(1E3);
  this.vs = new Ez(this, "NumberChanged", i, bk(b, "NumberChanged"));
  this.Bn = new Dh(this, "InvalidTextEntry", i, bk(b, "InvalidTextEntry"))
}
C(YD, rl);
B("tr.ui.NumericUpDown", YD);
ag(YD, Uj);
H.g().z("NumericUpDown", YD);
s = YD.prototype;
s.M = BC.prototype;
s.zD = function(a) {
  jj(a, this.M)
};
s.n = function() {
  YD.e.n.call(this);
  this.Qa && (this.Qa.stop(), this.Qa.ba())
};
s.N = k;
s.Eq = k;
s.ap = k;
s.Qa = k;
s.Fa = function() {
  return this.N.Fa()
};
s.jl = p();
s.m = function() {
  YD.e.m.call(this);
  this.l(this.qa.createElement("div"))
};
s.l = function(a) {
  YD.e.l.call(this, a);
  this.s = a;
  D(a, "tr-numericupdown");
  Dd(a);
  var b = Ac("div", "tr-numericupdown-textbox"), c = Ac("div", "tr-numericupdown-buttons");
  Dd(c);
  a.appendChild(b);
  a.appendChild(c);
  this.N.Na(b);
  this.Eq.Na(c);
  this.ap.Na(c);
  this.N.b().setAttribute("tabindex", -1);
  this.Eq.od(m);
  this.ap.od(m);
  this.Ua(this.a().textAlign);
  this.Va(this.a().ya);
  a.setAttribute("tabindex", -1);
  D(this.Eq.b(), "etk-numericupdownbutton");
  D(this.ap.b(), "etk-numericupdownbutton")
};
s.k = function() {
  this.qj();
  this.Eq.Pc(-1);
  this.ap.Pc(-1);
  YD.e.k.call(this);
  var a = this.a();
  this.Cd(a.xc);
  this.ka(a.value);
  lg(this, m);
  a = this.ma();
  a.i(this.N.nn(), "key", this.wu);
  this.N.Kr().i(this.$U, this);
  this.N.lk().i(this.oU, this);
  G(this.Qa, Uf, A(this.XU, this));
  a.i(this.Eq.b(), "mousedown", A(this.oT, this));
  a.i(this.ap.b(), "mousedown", A(this.VS, this))
};
s.qj = function() {
  var a = this.a(), b;
  for(b in a) {
    var c = "set";
    if(0 < b.length) {
      var e = b.substring(0, 1).toUpperCase(), f = "";
      1 < b.length && (f = b.substring(1, b.length));
      c += e + f
    }
    if(z(a[b]) && ma(this[c])) {
      this[c](a[b])
    }
  }
};
s.Y = function(a) {
  YD.e.Y.call(this, a);
  a && Dd(this.b())
};
YD.prototype.setIsVisible = YD.prototype.Y;
s = YD.prototype;
s.Re = r("");
s.Cd = function() {
  this.a().xc = "";
  this.N.Cd("")
};
s.vs = k;
s.Kr = q("vs");
s.Bn = k;
s.I = function() {
  return this.N.I()
};
s.ka = function(a) {
  this.N.ka(a)
};
s.sg = function() {
  return this.N.sg()
};
s.fh = function() {
  return this.N.fh()
};
s.Nk = function(a) {
  this.N.Nk(a)
};
s.Pl = function() {
  return this.N.Pl()
};
s.Ai = function(a) {
  this.N.Ai(a)
};
s.Ql = function() {
  return this.N.Ql()
};
s.Rk = function(a) {
  this.N.Rk(a)
};
s.ik = function() {
  return this.N.ik()
};
s.io = function(a) {
  this.N.io(a)
};
s.ee = function() {
  return this.N.ee()
};
s.oo = function(a) {
  return this.N.oo(a)
};
s.jj = function() {
  return this.N.jj()
};
s.lo = function(a) {
  this.N.lo(a)
};
s.$h = function() {
  return this.N.$h()
};
s.no = function(a) {
  this.N.no(a)
};
s.Ll = function() {
  return this.N.Ll()
};
s.jo = function(a) {
  this.N.jo(a)
};
s.Z = function() {
  return this.a().isEnabled
};
s.R = function(a) {
  YD.e.R.call(this, a);
  this.N.R(a);
  this.Eq.R(a);
  this.ap.R(a)
};
s.pb = function(a) {
  this.N.pb(a)
};
s.kd = function() {
  return this.N.kd()
};
YD.prototype.getTabEnabled = YD.prototype.kd;
YD.prototype.od = function(a) {
  this.a().Qd = a;
  this.N.od(a)
};
YD.prototype.setTabEnabled = YD.prototype.od;
YD.prototype.fe = function() {
  return this.N.fe()
};
YD.prototype.getTabOrder = YD.prototype.fe;
s = YD.prototype;
s.na = function() {
  return this.N.na()
};
s.gF = m;
s.hF = m;
s.XU = function() {
  this.gF == m && (this.Qa.setInterval(50), this.gF = i);
  this.hF === i ? ZD(this) : $D(this)
};
s.VS = function() {
  this.ka(this.na().value);
  this.Qa.start();
  $D(this);
  this.hF = m;
  aE(this)
};
s.oT = function() {
  this.ka(this.na().value);
  this.Qa.start();
  ZD(this);
  this.hF = i;
  aE(this)
};
function aE(a) {
  a.ma().i(document, "mouseup", A(a.xL, a))
}
s.xL = function() {
  bE(this);
  this.ma().H(document, "mouseup", A(this.xL, this))
};
function bE(a) {
  a.Qa.stop();
  a.gF = m;
  a.Qa.setInterval(300)
}
s.$U = function() {
  var a = this.I();
  isNaN(a) && (a = this.$h());
  a >= this.jj() && (a != this.I() && this.ka(a), bE(this));
  a <= this.$h() && (a != this.I() && this.ka(a), bE(this));
  cE(this)
};
s.BM = NaN;
function cE(a) {
  var b = a.I();
  if(a.BM !== b) {
    var c = new Ee("change", a);
    a.BM = b;
    L(a, "Value");
    a.Kr().v(b, c)
  }
}
s.oU = function(a) {
  var b = new Ee("change", this);
  this.Bn.v(a.Ga, b)
};
function $D(a) {
  var b = a.I() - dE(a);
  b >= a.$h() && a.ka(b)
}
function ZD(a) {
  var b = a.I() + dE(a);
  b <= a.jj() && a.ka(b)
}
function dE(a) {
  var b = a.a().RL, a = a.fh();
  jz.g();
  switch(a) {
    case 1:
      b *= 0.1;
      break;
    case 2:
      b *= 0.01;
      break;
    case 3:
      b *= 0.001;
      break;
    case 4:
      b *= 1.0E-4;
      break;
    case 5:
      b *= 1.0E-5;
      break;
    case 6:
      b *= 1.0E-6;
      break;
    case 8:
      b *= 1.0E-8;
      break;
    case 101:
      b /= 2;
      break;
    case 102:
      b /= 4;
      break;
    case 103:
      b /= 8;
      break;
    case 104:
      b /= 16;
      break;
    case 105:
      b /= 32;
      break;
    case 106:
      b /= 64;
      break;
    case 107:
      b /= 128;
      break;
    case 108:
      b /= 256
  }
  return b
}
s.wu = function(a) {
  var b = m;
  38 == a.keyCode && (ZD(this), cE(this), b = i);
  40 == a.keyCode && ($D(this), cE(this), b = i);
  b && a.preventDefault();
  return b
};
s.getError = function() {
  return this.N.getError()
};
s.Pa = function(a) {
  this.N.Pa(a);
  "" != a && a != k ? (a = new Ee("change"), this.Bn.v(this.N.getError(), a), this.a().Hb = 16) : 16 == this.a().Hb && this.bc(Ni)
};
s.yd = function() {
  return this.N.yd()
};
s.lk = q("Bn");
s.Mb = function() {
  return this.a().textAlign
};
YD.prototype.getTextAlign = YD.prototype.Mb;
YD.prototype.Ua = function(a) {
  this.a().textAlign = a;
  this.N.Ua(a)
};
YD.prototype.setTextAlign = YD.prototype.Ua;
YD.prototype.Yb = function() {
  return this.a().ya
};
YD.prototype.getTextOverflow = YD.prototype.Yb;
YD.prototype.Va = function(a) {
  this.a().ya = a;
  this.N.Va(a)
};
YD.prototype.setTextOverflow = YD.prototype.Va;
YD.prototype.Xe = function() {
  return this.N.Xe()
};
var eE = new gl("etk-dropdownbutton");
function fE(a, b, c, e, f) {
  Rn.call(this, a, b, c, z(e) ? e : eE, f);
  this.gc(i)
}
C(fE, Rn);
ag(fE, Uj);
H.g().z("DropdownButton", fE);
fE.prototype.M = WD.prototype;
fE.prototype.UO = k;
fE.prototype.cd = k;
fE.prototype.pb = function(a) {
  this.a().hasFocus = a;
  this.Pk(a);
  a && (a = this.b()) && a.focus()
};
fE.prototype.setHasFocus = fE.prototype.pb;
fE.prototype.Z = function() {
  return this.a().isEnabled
};
fE.prototype.getIsEnabled = fE.prototype.Z;
fE.prototype.R = function(a) {
  this.a().isEnabled = a;
  this.Oa(a)
};
fE.prototype.setIsEnabled = fE.prototype.R;
s = fE.prototype;
s.k = function() {
  fE.e.k.call(this);
  var a = this.ma();
  a.i(this.b(), "mouseover", this.qi);
  a.i(this.b(), "mouseout", this.Dg);
  a.i(this.b(), "mousedown", this.Be)
};
s.l = function(a) {
  fE.e.l.call(this, a);
  this.$E = this.u().m("div", {"class":"etk-dropdownbutton-inner"});
  this.b().appendChild(this.$E);
  this.UO = this.u().m("div", "etk-dropdownbutton-symbol etk-control etk-textlabel etk-textlabel-default");
  a = this.$E;
  a.insertBefore(this.UO, a.childNodes[0] || k)
};
s.m = function() {
  this.Xb("DropdownButton", "div", "etk-dropdownbutton").setAttribute("data-etk-type", "DropdownButton")
};
s.Cz = function() {
  this.cd === k && (this.cd = this.u().m("div", "etk-dropdownbutton-menu etk-dropdownbutton-menu-hidden"), this.a().QN ? this.b().appendChild(this.cd) : this.qa.Lb.body.appendChild(this.cd));
  Gc(this.cd, gE(this))
};
function gE(a) {
  var b = fb(Lc(a.b()));
  do {
    var c = db(b, function(a) {
      return 0 <= lb(a).indexOf("etk-dropdownbutton-symbol") || 0 <= lb(a).indexOf("etk-dropdownbutton-inner") ? i : m
    }, a)
  }while(c);
  return b
}
s.Be = function() {
  if(this.isEnabled()) {
    D(this.b(), "etk-dropdownbutton-mousedown");
    var a = this.cd, b = !ab(lb(a), "etk-dropdownbutton-menu-hidden");
    F(a, "etk-dropdownbutton-menu-hidden", b);
    (new Nf(this.$E, 7, m)).Jb(this.cd, 2)
  }
};
s.qi = p();
s.Dg = p();
var hE = new gl("etk-togglenumericbox");
function iE(a, b, c, e, f) {
  K.call(this, a, b, c, z(e) ? e : hE, f);
  a = new Fz(this.a().Ao);
  this.ki = new V(new Fz(this.a().qP), b, m);
  this.li = new V(a, b, m);
  this.eg = new yh(this, "Toggled", c, bk(b, "Toggled"));
  this.gc(i)
}
C(iE, rl);
B("tr.ui.ToggleNumericBox2", iE);
ag(iE, Uj);
H.g().z("ToggleNumericBox2", iE);
s = iE.prototype;
s.M = nD.prototype;
s.ea = k;
s.eg = k;
s.ki = k;
s.li = k;
s.a = function() {
  return iE.e.a.call(this)
};
s.Ny = k;
s.l = function(a) {
  iE.e.l.call(this, a);
  this.Ca(this.ki, i);
  this.Ca(this.li, i);
  this.ea = Ac("div", {"class":"etk-toggletextbox-image-inner etk-toggletextbox-button-normal"});
  a = Ac("div", {"class":"etk-toggletextbox-image-outer"}, this.ea);
  this.Ny = Ac("div", {"class":"etk-toggletextbox-image-first"}, a)
};
s.m = function() {
  iE.e.m.call(this);
  var a = this.qa.createElement("div");
  a.setAttribute("data-etk-type", "ToggleNumericBox");
  this.l(a)
};
s.k = function() {
  iE.e.k.call(this);
  this.Ci();
  G(this.ea, "click", this.Ae, m, this);
  G(this.ea, "mousedown", this.Be, m, this);
  G(this.ea, "mouseup", this.hv, m, this);
  G(this.ea, "mouseover", this.qi, m, this);
  G(this.ea, "mouseout", this.Dg, m, this);
  G(this.ki.Fa(), "focus", this.uf, m, this);
  G(this.ki.Fa(), "blur", this.kh, m, this);
  G(this.li.Fa(), "focus", this.uf, m, this);
  G(this.li.Fa(), "blur", this.kh, m, this);
  G(this.ki.Fa(), "mouseover", this.pi, m, this);
  G(this.ki.Fa(), "mouseout", this.oi, m, this);
  G(this.li.Fa(), "mouseover", this.pi, m, this);
  G(this.li.Fa(), "mouseout", this.oi, m, this)
};
s.n = function() {
  iE.e.n.call(this);
  this.la()
};
s.Ae = function(a) {
  this.Z() && (this.Ci(), this.eg.v(a), this.na().focus())
};
s.Ci = function() {
  Kc(this.Ny);
  switch(this.a().Rc) {
    case 0:
      this.a().Rc = 1;
      this.ki.Y(m);
      this.li.Y(i);
      Mc(this.li.b()).appendChild(this.Ny);
      break;
    case 1:
      this.a().Rc = 0, this.li.Y(m), this.ki.Y(i), Mc(this.ki.b()).appendChild(this.Ny)
  }
  L(this, "ToggleState")
};
s.Be = function() {
  this.Z() && ob(this.ea, ["etk-toggletextbox-button-normal", "etk-toggletextbox-button-hover", "etk-toggletextbox-button-disabled"], "etk-toggletextbox-button-active")
};
s.hv = function() {
  this.Z() && ob(this.ea, ["etk-toggletextbox-button-active", "etk-toggletextbox-button-hover", "etk-toggletextbox-button-disabled"], "etk-toggletextbox-button-normal")
};
s.qi = function() {
  this.Z() && ob(this.ea, ["etk-toggletextbox-button-active", "etk-toggletextbox-button-normal", "etk-toggletextbox-button-disabled"], "etk-toggletextbox-button-hover")
};
s.Dg = function() {
  this.Z() && ob(this.ea, ["etk-toggletextbox-button-active", "etk-toggletextbox-button-hover", "etk-toggletextbox-button-disabled"], "etk-toggletextbox-button-normal")
};
s.uf = function() {
  this.Z() && ob(this.ea, "etk-toggletextbox-button-normal", "etk-toggletextbox-button-focus")
};
s.kh = function() {
  this.Z() && ob(this.ea, "etk-toggletextbox-button-focus", "etk-toggletextbox-button-normal")
};
s.pi = function() {
  this.isEnabled() && ob(this.ea, "etk-toggletextbox-button-normal", "etk-toggletextbox-button-hover")
};
s.oi = function() {
  this.Z() && ob(this.ea, "etk-toggletextbox-button-hover", "etk-toggletextbox-button-normal")
};
s.of = function() {
  return this.a().Rc
};
iE.prototype.getToggleState = iE.prototype.of;
iE.prototype.rq = function(a) {
  this.of() !== a && this.Ci()
};
iE.prototype.setToggleState = iE.prototype.rq;
iE.prototype.KS = q("ki");
iE.prototype.getValue1 = iE.prototype.KS;
iE.prototype.qE = q("li");
iE.prototype.getValue2 = iE.prototype.qE;
iE.prototype.vp = q("eg");
iE.prototype.getToggledEvent = iE.prototype.vp;
iE.prototype.R = function(a) {
  iE.e.R.call(this, a);
  this.ki.R(a);
  this.li.R(a);
  w(this.ea) && (a ? ob(this.ea, ["etk-toggletextbox-button-active", "etk-toggletextbox-button-hover", "etk-toggletextbox-button-disabled"], "etk-toggletextbox-button-normal") : ob(this.ea, ["etk-toggletextbox-button-active", "etk-toggletextbox-button-hover", "etk-toggletextbox-button-normal"], "etk-toggletextbox-button-disabled"))
};
iE.prototype.setIsEnabled = iE.prototype.R;
iE.prototype.pb = function(a) {
  jE(this).pb(a)
};
iE.prototype.getError = function() {
  return jE(this).getError()
};
iE.prototype.getError = iE.prototype.getError;
iE.prototype.Pa = function(a) {
  jE(this).Pa(a)
};
iE.prototype.setError = iE.prototype.Pa;
s = iE.prototype;
s.yd = function() {
  return jE(this).yd()
};
s.lk = function() {
  return jE(this).lk()
};
s.Xe = function() {
  return jE(this).Xe()
};
function jE(a) {
  return 0 == a.of() ? a.ki : a.li
}
s.na = function() {
  return jE(this).na()
};
s.Xe = r(m);
function kE(a, b, c) {
  a = a || tC;
  this.Qk(a == rC || a == sC ? zg : yg);
  this.ms = a;
  Ig.call(this, this.Ol(), b || pC.g(), c);
  lE(this)
}
C(kE, Ig);
var tC = "top", uC = "bottom", rC = "start", sC = "end";
s = kE.prototype;
s.FQ = i;
s.ui = k;
s.k = function() {
  kE.e.k.call(this);
  lE(this)
};
s.n = function() {
  kE.e.n.call(this);
  this.ui = k
};
s.removeChild = function(a, b) {
  mE(this, a);
  return kE.e.removeChild.call(this, a, b)
};
s.lH = function(a) {
  kE.e.lH.call(this, a);
  this.FQ && this.pq(rf(this, a))
};
s.pq = function(a) {
  a ? a.oq(i) : this.ui && this.ui.oq(m)
};
function mE(a, b) {
  if(b && b == a.ui) {
    for(var c = uf(a, b), e = c - 1;b = rf(a, e);e--) {
      if(b.w() && b.isEnabled()) {
        a.pq(b);
        return
      }
    }
    for(c += 1;b = rf(a, c);c++) {
      if(b.w() && b.isEnabled()) {
        a.pq(b);
        return
      }
    }
    a.pq(k)
  }
}
s.mT = function(a) {
  this.ui && this.ui != a.target && this.ui.oq(m);
  this.ui = a.target
};
s.nT = function(a) {
  a.target == this.ui && (this.ui = k)
};
s.kT = function(a) {
  mE(this, a.target)
};
s.lT = function(a) {
  mE(this, a.target)
};
s.xn = function() {
  Mg(this) || this.Fe(this.ui || rf(this, 0))
};
function lE(a) {
  a.ma().i(a, "select", a.mT).i(a, "unselect", a.nT).i(a, "disable", a.kT).i(a, "hide", a.lT)
}
cg("goog-tab-bar", function() {
  return new kE
});
function nE(a, b, c, e) {
  e = w(e) ? e : nC.g();
  kg.call(this, k, e);
  Zw(this, a, c);
  a: {
    switch(this.Aa.orientation) {
      case "HORIZONTAL":
      ;
      case "horizontal":
      ;
      case yg:
        a = tC;
        break a;
      case "VERTICAL":
      ;
      case "vertical":
      ;
      case zg:
        a = rC;
        break a;
      default:
        a = tC
    }
  }
  this.Eh = new kE(a, vC.g());
  for(var f in this.Aa.T) {
    this.za.push(new hz(this.Aa.T[f], i))
  }
  pg(this, 32, m);
  this.Dj = this.Aa.selectedIndex;
  this.Aa.hg = z(this.Aa.hg) ? this.Aa.hg : i;
  this.Aa.enabled = z(this.Aa.enabled) ? this.Aa.enabled : i;
  this.Aa.Qd = z(this.Aa.Qd) ? this.Aa.Qd : i;
  this.F(this.Aa.hg);
  this.Oa(this.Aa.enabled, i);
  this.od(this.Aa.Qd);
  this.Eh.ef(m);
  this.Eh.fJ = i;
  this.pf = w(b.Changed) ? i : m
}
C(nE, kg);
H.g().z("TabStrip", nE);
s = nE.prototype;
s.pf = i;
s.Aa = k;
s.Eh = k;
s.za = [];
s.Tb = q("za");
s.Kd = function() {
  return uf(this.Eh, this.Eh.ui)
};
s.Oc = function(a) {
  var b = this.Eh;
  b.pq(rf(b, a))
};
s.ms = tC;
s.Ol = function() {
  var a = k;
  this.ms = this.Eh.ms;
  switch(this.ms) {
    case tC:
    ;
    case uC:
      a = yg;
      break;
    case rC:
    ;
    case sC:
      a = zg
  }
  return a
};
s.Y = function(a) {
  this.F(a)
};
s.ob = function() {
  return this.w()
};
s.Sb = i;
s.isEnabled = q("Sb");
s.Oa = function(a, b) {
  var c = -1;
  this.Sb = a;
  this.Sb === m && (c = this.Kd());
  this.Eh != k && this.Eh.Oa(a);
  (b = z(b) ? b : m) && this.za.forEach(function(b) {
    b.Oa(a, i)
  }, this);
  nE.e.Oa.call(this, a);
  this.Sb && this.Oc(-1 != c ? c : 0)
};
s.R = function(a) {
  this.Oa(a)
};
s.Z = function() {
  return this.isEnabled()
};
s.EW = 0;
s.fe = q("EW");
s.pb = function(a) {
  a && this.isEnabled() && (a = -1 < this.Kd() ? this.Kd() : 0, a < this.za.length && this.za[a].pb(i))
};
s.wo = i;
s.kd = q("wo");
s.od = function(a) {
  this.Sb === i && (this.wo = a, this.Tb().forEach(function(a) {
    a.od(this.wo)
  }, this))
};
s.l = function(a) {
  nE.e.l.call(this, a);
  this.Eh.Na(a);
  this.Eh.b();
  for(var b in this.za) {
    this.Eh.Ca(this.za[b].Bc, i)
  }
  this.od(this.wo);
  this.isEnabled() && this.w() && 0 < this.za.length && (-1 == this.Dj ? this.Oc(0) : this.Oc(this.Dj))
};
s.k = function() {
  nE.e.k.call(this);
  this.i(cw, 3, this.pf, this.Kd, this);
  this.i("select", -1, this.pf, k, this.Eh, this.MU)
};
s.MU = function(a) {
  var b = a.target;
  b && this.Sb && b.isEnabled() && b.w() && (a.type = cw, this.dispatchEvent(a))
};
s.Mr = function() {
  d("Not implemented!")
};
s.Pb = function() {
  this.ga || (this.ga = new Tj);
  return this.ga
};
s.jl = p();
s.Td = function() {
  return this.a().Hb
};
s.bc = function(a) {
  this.a().rT = a
};
s.pn = p();
s.Nl = function() {
  return nE.e.Nl.call(this)
};
s.Ib = k;
s.wm = ba("Ib");
s.tp = q("Ib");
s.Xe = r(m);
s.ei = r(i);
function oE(a, b) {
  this.Yi = b
}
H.g().z("Context", oE);
s = oE.prototype;
s.Yi = "";
s.getData = q("Yi");
s.Ib = k;
s.wm = ba("Ib");
s.tp = q("Ib");
s.ei = r(m);
function pE(a) {
  pl.call(this, a);
  a.hasOwnProperty("Height") && (this.MP = a.Height);
  a.hasOwnProperty("Width") && (this.qQ = a.Width)
}
C(pE, pl);
function qE(a, b, c) {
  K.call(this, a, b, c, g, g);
  this.wb = new My(this);
  this.re = k
}
C(qE, rl);
ag(qE, yf);
H.g().z("FinancialYieldChart", qE);
s = qE.prototype;
s.M = pE.prototype;
s.a = function() {
  return qE.e.a.call(this)
};
s.wb = k;
s.xd = q("wb");
s.l = function(a) {
  qE.e.l.call(this, a)
};
s.k = function() {
  qE.e.k.call(this);
  var a = this.a(), b = a.appServerId;
  b || (b = a.ChartID);
  b || d("Failed getting value from property 'ChartID' or 'appServerId' from the model. Something is seriously wrong.");
  this.b().setAttribute("id", b);
  for(var c = 0;c < this.Pb().Da();c++) {
    this.Pb().getItem(c).qb()
  }
  this.xa(a.qQ);
  this.Ma(a.MP);
  var a = window[b + "_Options"], c = window[b + "_Analyses"], e = window[b + "_Results"];
  a.GP = b;
  a.bQ = a.PrimaryRIC + (a.ComparisonRics ? ";" + a.ComparisonRics : "");
  this.re = (new ChartHelper).createFinancialChart(a, c, e);
  this.re.qD()
};
s.Ha = function() {
  return this.a().width
};
s.xa = function(a) {
  this.a().width = a;
  wd(this.b(), a)
};
s.va = function() {
  return this.a().height
};
s.Ma = function(a) {
  this.a().height = a;
  xd(this.b(), a)
};
s.n = function() {
  qE.e.n.call(this)
};
function Z(a, b, c, e, f) {
  K.call(this, a, b, c, e, f);
  this.Ie = new um(new uj({text:""}), k, m);
  this.Op = uz.g()
}
C(Z, K);
B("tr.ui.NumericLabel", Z);
ag(Z, Uj);
H.g().z("NumericLabel", Z);
s = Z.prototype;
s.M = UD.prototype;
s.Ie = k;
s.zD = function(a) {
  jj(a, this.M)
};
s.a = function() {
  return Z.e.a.call(this)
};
s.m = function() {
  var a = Ac("div");
  a.setAttribute("data-etk-type", "NumericLabel");
  this.s = a;
  D(a, "etk-control");
  this.Ca(this.Ie, i)
};
s.l = function(a) {
  Z.e.l.call(this, a);
  this.s = a;
  D(a, "etk-control");
  this.Ca(this.Ie, i);
  a.setAttribute("tabindex", -1)
};
s.k = function() {
  this.qj();
  Z.e.k.call(this)
};
s.n = function() {
  Z.e.n.call(this)
};
s.Fp = m;
s.mm = 0;
s.zN = "";
s.AN = "";
s.I = function() {
  this.zd() && d("Value is not available.");
  return this.a().value
};
Z.prototype.getValue = Z.prototype.I;
Z.prototype.ka = function(a) {
  this.zd() && (this.a().ec = m);
  try {
    this.mm = this.a().value, this.a().value = a, rE(this)
  }catch(b) {
    sE(this)
  }
};
Z.prototype.setValue = Z.prototype.ka;
function rE(a) {
  var b;
  if(a.Fp) {
    b = w(b) ? b : a.sg();
    a.Fp = m;
    try {
      0 != b.length && zz(a.Op, b, a), a.Ie.ra(b)
    }finally {
      a.Fp = i
    }
  }
}
Z.prototype.sg = function() {
  return this.Op.sg(this)
};
Z.prototype.getDisplayText = Z.prototype.sg;
Z.prototype.fh = function() {
  return this.a().xl
};
Z.prototype.getDisplayPrecision = Z.prototype.fh;
Z.prototype.Nk = function(a) {
  this.a().xl = a;
  this.me()
};
Z.prototype.setDisplayPrecision = Z.prototype.Nk;
Z.prototype.Pl = function() {
  return this.a().bl
};
Z.prototype.getUnitPrefix = Z.prototype.Pl;
Z.prototype.Ai = function(a) {
  this.zN = this.a().bl;
  this.a().bl = a;
  this.me()
};
Z.prototype.setUnitPrefix = Z.prototype.Ai;
Z.prototype.Ql = function() {
  return this.a().cl
};
Z.prototype.getUnitSuffix = Z.prototype.Ql;
Z.prototype.Rk = function(a) {
  Cz(this.Op, a) || (this.AN = this.a().cl, this.a().cl = a, this.me())
};
Z.prototype.setUnitSuffix = Z.prototype.Rk;
Z.prototype.ik = function() {
  return this.a().wl
};
Z.prototype.getDisplayFormat = Z.prototype.ik;
Z.prototype.io = function(a) {
  this.a().wl = a;
  rE(this)
};
Z.prototype.setDisplayFormat = Z.prototype.io;
Z.prototype.ee = function() {
  return this.a().options
};
Z.prototype.getOptions = Z.prototype.ee;
Z.prototype.oo = function(a) {
  this.a().options = a;
  rE(this)
};
Z.prototype.setOptions = Z.prototype.oo;
Z.prototype.jj = function() {
  return this.a().hi
};
Z.prototype.getMaximum = Z.prototype.jj;
Z.prototype.lo = function(a) {
  this.a().hi = a;
  this.me()
};
Z.prototype.setMaximum = Z.prototype.lo;
Z.prototype.$h = function() {
  return this.a().ii
};
Z.prototype.getMinimum = Z.prototype.$h;
Z.prototype.no = function(a) {
  this.a().ii = a;
  this.me()
};
Z.prototype.setMinimum = Z.prototype.no;
Z.prototype.Ll = function() {
  return this.a().Fl
};
Z.prototype.getFractionMode = Z.prototype.Ll;
Z.prototype.jo = function(a) {
  this.a().Fl = a;
  this.me()
};
Z.prototype.setFractionMode = Z.prototype.jo;
Z.prototype.Mb = function() {
  return this.Ie.Mb()
};
Z.prototype.getTextAlign = Z.prototype.Mb;
Z.prototype.Ua = function(a) {
  this.Ie.Ua(a)
};
Z.prototype.setTextAlign = Z.prototype.Ua;
Z.prototype.Yb = function() {
  return this.Ie.Yb()
};
Z.prototype.getTextOverflow = Z.prototype.Yb;
Z.prototype.Va = function(a) {
  this.Ie.Va(a)
};
Z.prototype.setTextOverflow = Z.prototype.Va;
Z.prototype.ai = function() {
  return this.Ie.ai()
};
Z.prototype.getStyle = Z.prototype.ai;
Z.prototype.Zd = function(a) {
  this.Ie.Zd(a)
};
Z.prototype.setStyle = Z.prototype.Zd;
function sE(a) {
  a.Fp = m;
  a.Rk(a.AN);
  a.Ai(a.zN);
  a.Fp = i;
  if(!isNaN(a.mm)) {
    var b = a.ee();
    b & 16 && !isNaN(a.a().ii) && a.mm < a.a().ii && (a.mm = a.a().ii);
    b & 8 && !isNaN(a.a().hi) && a.mm > a.a().hi && (a.mm = a.a().hi);
    a.ka(a.mm)
  }
}
Z.prototype.qj = function() {
  try {
    this.Fp = m;
    var a = this.a(), b;
    for(b in a) {
      var c = "set";
      if(0 < b.length) {
        var e = b.substring(0, 1).toUpperCase(), f = "";
        1 < b.length && (f = b.substring(1, b.length));
        c += e + f
      }
      if(z(a[b]) && ma(this[c]) && "setValue" != c) {
        this[c](a[b])
      }
    }
  }catch(h) {
    fh.g().log("Error while setting initial properties in NumericLabel.")
  }finally {
    this.Fp = i, this.a().ec || this.ka(a.value)
  }
};
Z.prototype.Td = function() {
  return this.Ie.Td()
};
Z.prototype.getHighlightStyle = Z.prototype.Td;
Z.prototype.bc = function(a) {
  this.Ie.bc(a)
};
Z.prototype.setHighlightStyle = Z.prototype.bc;
Z.prototype.wn = function() {
  return this.a().Je
};
Z.prototype.getUninitializedValue = Z.prototype.wn;
Z.prototype.ym = function(a) {
  this.a().Je = a;
  this.zd() && this.me()
};
Z.prototype.setUninitializedValue = Z.prototype.ym;
Z.prototype.zd = function() {
  return this.a().ec
};
Z.prototype.getIsUninitialized = Z.prototype.zd;
Z.prototype.vm = function(a) {
  this.a().ec = a;
  this.me()
};
Z.prototype.setIsUninitialized = Z.prototype.vm;
Z.prototype.me = function() {
  try {
    rE(this)
  }catch(a) {
    sE(this)
  }
};
function tE(a) {
  VA.call(this, a);
  a.hasOwnProperty("controlWidth") && (this.sl = a.controlWidth);
  a.hasOwnProperty("hasFocus") && (this.hasFocus = a.hasFocus);
  a.hasOwnProperty("highlightStyle") && (this.Hb = a.highlightStyle);
  a.hasOwnProperty("isEnabled") && (this.isEnabled = a.isEnabled);
  if(a.hasOwnProperty("items")) {
    this.T = [];
    for(var b = a.items, c = 0;c < b.length;c++) {
      this.T.push(new UA(b[c]))
    }
  }
  a.hasOwnProperty("placeholderText") && (this.xc = a.placeholderText);
  a.hasOwnProperty("renderMenuAsSibling") && (this.Cj = a.renderMenuAsSibling);
  a.hasOwnProperty("selectedItem") && (this.$b = a.selectedItem);
  a.hasOwnProperty("style") && (this.style = a.style);
  a.hasOwnProperty("tabEnabled") && (this.Qd = a.tabEnabled);
  a.hasOwnProperty("tabOrder") && (this.zq = a.tabOrder)
}
C(tE, VA);
s = tE.prototype;
s.sl = 1;
s.hasFocus = m;
s.Hb = Ni;
s.isEnabled = i;
s.T = [];
s.xc = "";
s.Cj = i;
s.$b = k;
s.style = 0;
s.Qd = m;
s.zq = 0;
var uE = new gl("etk-dropdownmenu"), vE = new Vk("etk-dropdownmenu-button");
function wE(a, b, c, e, f) {
  ZB.call(this, a, b, c, z(e) ? e : uE, f);
  this.Oe = new Rk("", this.oa(), vE)
}
C(wE, ZB);
ag(wE, Uj);
H.g().z("DropdownMenu", wE);
s = wE.prototype;
s.M = tE.prototype;
s.cd = k;
s.PF = k;
s.lv = k;
s.a = function() {
  return wE.e.a.call(this)
};
s.Oe = k;
s.l = function(a) {
  this.Bh = this.u().m("span", "etk-dropdownmenu-sizing", "NA");
  this.Bh.innerText = "NA";
  wE.e.l.call(this, a);
  var b = this.u().m("div", {"class":"etk-dropdownmenu-outer"});
  a.appendChild(b);
  this.Oe.Qv(this.kj());
  this.Oe.Lu = i;
  this.Oe.Na(b);
  var c = this.Oe.oa();
  c.Ra || (this.kj() ? c.Na(b) : c.Na());
  this.Oe.iC = m;
  this.Zd(this.ai());
  this.PF = this.Oe.b();
  this.cd = this.Oe.oa().b();
  this.kj() || (this.lv = new Nf(this.PF, 7));
  this.od(this.kd());
  this.R(this.Z());
  a.appendChild(this.Bh)
};
s.kj = function() {
  return this.a().Cj
};
s.Qv = function(a) {
  this.a().Cj = a
};
s.k = function() {
  wE.e.k.call(this);
  this.Ba(this.Ea());
  this.bc(this.Td());
  this.Iv(this.a().sl);
  var a = this.oa();
  G(a, "show", A(this.rG, this));
  G(a, "hide", A(this.gv, this))
};
s.rG = function(a) {
  !this.Oe.Uf() && this.oa() == a.target && this.Oe.Ac(i);
  this.kj() || (wd(this.cd, yd(this.PF).width - 4), this.lv.Jb(this.cd, 6))
};
s.gv = function(a) {
  this.Oe.Uf() && this.oa() == a.target && this.Oe.Ac(m)
};
s.n = function() {
  wE.e.n.call(this)
};
s.Ea = function() {
  return this.a().$b
};
wE.prototype.getSelectedItem = wE.prototype.Ea;
wE.prototype.Ba = function(a) {
  a ? (this.a().$b = a, a.wa && this.Oe.Od(a.wa())) : this.Cd(this.Re())
};
wE.prototype.setSelectedItem = wE.prototype.Ba;
wE.prototype.ai = function() {
  return this.a().style
};
wE.prototype.getStyle = wE.prototype.ai;
wE.prototype.Zd = function(a) {
  var b = xm.g(), c = b[this.a().style];
  c && (c = xE + "-" + c, this.aj(c, m));
  this.a().style = a;
  if(c = b[this.a().style]) {
    c = xE + "-" + c, this.aj(c, i)
  }
};
wE.prototype.setStyle = wE.prototype.Zd;
wE.prototype.CL = function(a) {
  this.Ba(a)
};
wE.prototype.Td = function() {
  return this.a().Hb
};
wE.prototype.getHighlightStyle = wE.prototype.Td;
wE.prototype.bc = function(a) {
  this.Im(this.Td(), m);
  this.a().Hb = a;
  this.Im(a, i);
  F(this.Vh(), "etk-iphighlight-true", a > Ni && 16 >= a)
};
wE.prototype.setHighlightStyle = wE.prototype.bc;
s = wE.prototype;
s.Im = function(a, b) {
  a & 1 && this.Dc(1, b);
  a & 2 && this.Dc(2, b);
  a & 4 && this.Dc(4, b);
  a & 8 && this.Dc(8, b);
  a & Oi && this.Dc(Oi, b);
  a & 64 && this.Dc(64, b);
  a & 128 && this.Dc(128, b)
};
s.Dc = function(a, b) {
  var c = sl.g(), e = k;
  if(a && (e = c[a])) {
    e = xE + "-" + e, this.Lv(e, b)
  }
};
s.Lv = function(a, b) {
  F(this.Vh(), a, b)
};
s.Vh = function() {
  return this.b()
};
s.pb = function(a) {
  this.a().hasFocus = a;
  this.Pk(a);
  a && (a = this.b()) && a.focus()
};
wE.prototype.setHasFocus = wE.prototype.pb;
wE.prototype.Z = function() {
  return this.a().isEnabled
};
wE.prototype.getIsEnabled = wE.prototype.Z;
wE.prototype.R = function(a) {
  this.a().isEnabled = a;
  this.Oa(a);
  this.Oe.Oa(a)
};
wE.prototype.setIsEnabled = wE.prototype.R;
wE.prototype.kd = function() {
  return this.a().Qd
};
wE.prototype.getTabEnabled = wE.prototype.kd;
wE.prototype.od = function(a) {
  this.a().Qd = a;
  a == m ? this.Pc(-1) : this.Pc(1)
};
wE.prototype.setTabEnabled = wE.prototype.od;
wE.prototype.fe = function() {
  return this.a().zq
};
wE.prototype.getTabOrder = wE.prototype.fe;
wE.prototype.Pc = function(a) {
  var b = this.na();
  b != k && (this.kd && this.kd() ? (a = this.fe() + a, b.setAttribute("tabindex", a)) : b.setAttribute("tabindex", -1));
  return a
};
var xE = "etk-dropdownmenu";
wE.prototype.na = function() {
  return this.Oe.na()
};
wE.prototype.sp = r(i);
wE.prototype.Re = function() {
  return this.a().xc
};
wE.prototype.getPlaceholderText = wE.prototype.Re;
wE.prototype.Cd = function(a) {
  this.a().xc = a;
  L(this, "PlaceholderText");
  this.Ea() == k && this.Oe.Od(a)
};
wE.prototype.setPlaceholderText = wE.prototype.Cd;
wE.prototype.Il = function() {
  return this.a().sl
};
wE.prototype.getControlWidth = wE.prototype.Il;
wE.prototype.Iv = function(a) {
  this.a().sl = a;
  this.Bh.innerText = "NA";
  1 == this.Il() ? (this.b().style.setProperty("width", ""), this.Bh.innerText = this.Ze) : 2 == this.Il() ? this.b().style.setProperty("width", "100%") : this.b().style.setProperty("width", "")
};
wE.prototype.setControlWidth = wE.prototype.Iv;
s = wE.prototype;
s.ND = function() {
  var a = this.V.za.slice(0).sort(function(a, c) {
    return c.wa().length - a.wa().length
  });
  0 < a.length && (this.Ze = a[0].wa());
  this.qq()
};
s.oG = function(a) {
  if(!(a == k || a.wa() == k) && this.Ze.length < a.wa().length) {
    this.Ze = a.wa(), this.qq()
  }
};
s.Bh = k;
s.Ze = "NA";
s.qq = function() {
  1 == this.Il() && (this.Bh.innerText = this.Ze)
};
s.ni = function(a, b) {
  wE.e.ni.call(this, a, b);
  this.LG(a);
  this.oG(a)
};
s.zj = function(a, b) {
  this.ND();
  wE.e.zj.call(this, a, b)
};
s.LG = function(a) {
  a.up().i(this.jw, this)
};
s.jw = function(a) {
  var b = a.Ga;
  b != k && (b = b.wa(), b != k && b.length > this.Ze.length && (this.Ze = b, this.qq()));
  a.Ga == this.Ea() && this.Oe.Od(this.Ea().wa())
};
function yE(a, b, c, e, f) {
  K.call(this, a, b, c, e, f);
  this.eg = new yh(this, "Clicked", c, bk(b, "Clicked"));
  this.Sa = new Nn(a, b, m, e, f)
}
C(yE, ql);
B("tr.ui.ToggleButton", yE);
ag(yE, Uj);
H.g().z("ToggleButton", yE);
s = yE.prototype;
s.M = mA.prototype;
s.ea = k;
s.nw = k;
s.Sa = k;
s.eg = k;
s.lb = 0;
s.a = function() {
  return yE.e.a.call(this)
};
s.m = function() {
  yE.e.m.call(this);
  this.l(On(this.Sa))
};
s.na = function() {
  return this.Sa.na()
};
s.l = function(a) {
  yE.e.l.call(this, a);
  this.ea = Ac("div", {"class":"etk-togglebutton-image etk-togglebutton-button-normal"});
  var b = Ac("td", "etk-togglebutton-cell1 etk-togglebutton-cell"), c = Ac("td", "etk-togglebutton-cell2 etk-togglebutton-cell", Ac("div", "etk-togglebutton-image-cell", this.ea));
  this.nw = Ac("div", "etk-togglebutton", Ac("table", {"class":"etk-togglebutton-table", cellpadding:"0", cellspacing:"0"}, Ac("tr", k, b, c)));
  this.nw.setAttribute("data-etk-type", "ToggleButton");
  Jc(this.nw, a);
  b.appendChild(a);
  E(a, "etk-togglebutton");
  this.Sa.Ka(a);
  this.s = this.nw
};
s.k = function() {
  yE.e.k.call(this);
  G(this.ea, "click", this.Ae, m, this);
  G(this.ea, "mousedown", this.av, m, this);
  G(this.ea, "mouseover", this.pi, m, this);
  G(this.ea, "mouseout", this.oi, m, this);
  var a = this.Sa.b();
  G(a, "focus", this.uf, m, this);
  G(a, "blur", this.kh, m, this);
  G(a, "mouseover", this.pi, m, this);
  G(a, "mouseout", this.oi, m, this);
  G(a, "mousedown", this.av, m, this);
  this.xd().i(this.Ae, this)
};
s.n = function() {
  yE.e.n.call(this);
  this.la()
};
s.Ae = function(a) {
  this.Z() && (this.Ci(), this.eg.v(a))
};
s.Ci = function() {
  var a = "";
  switch(this.a().Rc) {
    case 0:
      this.a().Rc = 1;
      a = this.a().xo;
      break;
    case 1:
      this.a().Rc = 0, a = this.a().text
  }
  L(this, "ToggleState");
  this.Sa.ra(a)
};
s.av = function() {
  this.Z() && (this.lb |= 4, this.Ef());
  G(document, "mouseup", this.bv, m, this)
};
s.bv = function() {
  this.Z() && (this.lb &= -5, this.Ef());
  Ve(document, "mouseup", this.bv, m, this)
};
s.uf = function() {
  this.Z() && (this.lb |= 32, this.Ef())
};
s.kh = function() {
  this.Z() && (this.lb &= -33, this.Ef())
};
s.pi = function() {
  this.Z() && (this.lb |= 2, this.Ef())
};
s.oi = function() {
  this.Z() && (this.lb &= -3, this.Ef())
};
s.Ef = function() {
  var a = "etk-togglebutton-normal";
  this.lb & 4 ? a = "etk-togglebutton-active" : this.lb & 32 ? a = "etk-togglebutton-focus" : this.lb & 2 ? a = "etk-togglebutton-hover" : this.lb & 1 && (a = "etk-togglebutton-disabled");
  ob(this.nw, ["etk-togglebutton-active", "etk-togglebutton-normal", "etk-togglebutton-disabled", "etk-togglebutton-hover", "etk-togglebutton-focus"], a)
};
s.R = function(a) {
  yE.e.R.call(this, a);
  this.Sa.R(a);
  this.lb = a ? this.lb & -2 : this.lb | 1;
  this.Ef()
};
yE.prototype.setIsEnabled = yE.prototype.R;
yE.prototype.of = function() {
  return this.a().Rc
};
yE.prototype.getToggleState = yE.prototype.of;
yE.prototype.rq = function(a) {
  this.of() !== a && this.Ci()
};
yE.prototype.setToggleState = yE.prototype.rq;
yE.prototype.xy = function() {
  return this.a().xo
};
yE.prototype.getText2 = yE.prototype.xy;
yE.prototype.qA = function(a) {
  this.a().xo = a;
  L(this, "Text2")
};
yE.prototype.setText2 = yE.prototype.qA;
yE.prototype.vp = q("eg");
yE.prototype.getToggledEvent = yE.prototype.vp;
yE.prototype.wa = function() {
  return this.a().text
};
yE.prototype.getText = yE.prototype.wa;
yE.prototype.ra = function(a) {
  this.a().text = a;
  this.Sa.ra(a);
  L(this, "Text")
};
yE.prototype.setText = yE.prototype.ra;
yE.prototype.lE = function() {
  return this.Sa.lE()
};
yE.prototype.getSizingMode = yE.prototype.lE;
yE.prototype.oA = function(a) {
  this.Sa.oA(a)
};
yE.prototype.setSizingMode = yE.prototype.oA;
yE.prototype.xd = function() {
  return this.Sa.xd()
};
yE.prototype.getClickedEvent = yE.prototype.xd;
yE.prototype.Mb = function() {
  return this.Sa.Mb()
};
yE.prototype.getTextAlign = yE.prototype.Mb;
yE.prototype.Ua = function(a) {
  this.Sa.Ua(a)
};
yE.prototype.getClickedEvent = yE.prototype.xd;
yE.prototype.Yb = function() {
  return this.Sa.Yb()
};
yE.prototype.getTextOverflow = yE.prototype.Yb;
yE.prototype.Va = function(a) {
  this.Sa.Va(a)
};
yE.prototype.setTextOverflow = yE.prototype.Va;

