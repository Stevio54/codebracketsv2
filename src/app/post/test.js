/*publicalbum.org v1.2.35 (c)pavex*/
(function() {
    var d, h = this;

    function l(a) {
        return "string" == typeof a
    }

    function aa() {}

    function ba(a) {
        var b = typeof a;
        if ("object" == b)
            if (a) {
                if (a instanceof Array) return "array";
                if (a instanceof Object) return b;
                var c = Object.prototype.toString.call(a);
                if ("[object Window]" == c) return "object";
                if ("[object Array]" == c || "number" == typeof a.length && "undefined" != typeof a.splice && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("splice")) return "array";
                if ("[object Function]" == c || "undefined" != typeof a.call && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("call")) return "function"
            } else return "null";
        else if ("function" == b && "undefined" == typeof a.call) return "object";
        return b
    }

    function ca(a) {
        return "array" == ba(a)
    }

    function da(a) {
        var b = typeof a;
        return "object" == b && null != a || "function" == b
    }
    var ea = "closure_uid_" + (1E9 * Math.random() >>> 0),
        fa = 0;

    function ha(a, b, c) {
        return a.call.apply(a.bind, arguments)
    }

    function ia(a, b, c) {
        if (!a) throw Error();
        if (2 < arguments.length) {
            var e = Array.prototype.slice.call(arguments, 2);
            return function() {
                var f = Array.prototype.slice.call(arguments);
                Array.prototype.unshift.apply(f, e);
                return a.apply(b, f)
            }
        }
        return function() {
            return a.apply(b, arguments)
        }
    }

    function m(a, b, c) {
        Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? m = ha : m = ia;
        return m.apply(null, arguments)
    }
    var ja = Date.now || function() {
        return +new Date
    };

    function n(a, b) {
        a = a.split(".");
        var c = h;
        a[0] in c || "undefined" == typeof c.execScript || c.execScript("var " + a[0]);
        for (var e; a.length && (e = a.shift());) a.length || void 0 === b ? c[e] && c[e] !== Object.prototype[e] ? c = c[e] : c = c[e] = {} : c[e] = b
    }

    function p(a, b) {
        function c() {}
        c.prototype = b.prototype;
        a.f = b.prototype;
        a.prototype = new c;
        a.prototype.constructor = a;
        a.oc = function(e, f, g) {
            for (var k = Array(arguments.length - 2), u = 2; u < arguments.length; u++) k[u - 2] = arguments[u];
            return b.prototype[f].apply(e, k)
        }
    };
    var ka;

    function la(a, b, c) {
        for (var e in a) b.call(c, a[e], e, a)
    }

    function ma(a, b) {
        for (var c in a)
            if (b.call(void 0, a[c], c, a)) return !0;
        return !1
    }

    function q(a, b, c) {
        return null !== a && b in a ? a[b] : c
    }

    function na(a) {
        var b = {},
            c;
        for (c in a) b[c] = a[c];
        return b
    }
    var oa = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");

    function pa(a, b) {
        for (var c, e, f = 1; f < arguments.length; f++) {
            e = arguments[f];
            for (c in e) a[c] = e[c];
            for (var g = 0; g < oa.length; g++) c = oa[g], Object.prototype.hasOwnProperty.call(e, c) && (a[c] = e[c])
        }
    };
    var qa = String.prototype.trim ? function(a) {
        return a.trim()
    } : function(a) {
        return /^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]
    };

    function ra(a, b) {
        return a < b ? -1 : a > b ? 1 : 0
    }

    function sa(a) {
        return String(a).replace(/\-([a-z])/g, function(b, c) {
            return c.toUpperCase()
        })
    }

    function ta(a) {
        var b = l(void 0) ? "undefined".replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g, "\\$1").replace(/\x08/g, "\\x08") : "\\s";
        return a.replace(new RegExp("(^" + (b ? "|[" + b + "]+" : "") + ")([a-z])", "g"), function(c, e, f) {
            return e + f.toUpperCase()
        })
    };
    var ua;
    a: {
        var va = h.navigator;
        if (va) {
            var wa = va.userAgent;
            if (wa) {
                ua = wa;
                break a
            }
        }
        ua = ""
    }

    function r(a) {
        return -1 != ua.indexOf(a)
    };
    var xa = Array.prototype.indexOf ? function(a, b) {
            return Array.prototype.indexOf.call(a, b, void 0)
        } : function(a, b) {
            if (l(a)) return l(b) && 1 == b.length ? a.indexOf(b, 0) : -1;
            for (var c = 0; c < a.length; c++)
                if (c in a && a[c] === b) return c;
            return -1
        },
        t = Array.prototype.forEach ? function(a, b, c) {
            Array.prototype.forEach.call(a, b, c)
        } : function(a, b, c) {
            for (var e = a.length, f = l(a) ? a.split("") : a, g = 0; g < e; g++) g in f && b.call(c, f[g], g, a)
        },
        ya = Array.prototype.filter ? function(a, b) {
            return Array.prototype.filter.call(a, b, void 0)
        } : function(a, b) {
            for (var c =
                    a.length, e = [], f = 0, g = l(a) ? a.split("") : a, k = 0; k < c; k++)
                if (k in g) {
                    var u = g[k];
                    b.call(void 0, u, k, a) && (e[f++] = u)
                }
            return e
        };

    function za(a, b) {
        0 <= xa(a, b) || a.push(b)
    }

    function Aa(a, b) {
        b = xa(a, b);
        var c;
        (c = 0 <= b) && Array.prototype.splice.call(a, b, 1);
        return c
    }

    function Ba(a, b, c, e) {
        Array.prototype.splice.apply(a, Ca(arguments, 1))
    }

    function Ca(a, b, c) {
        return 2 >= arguments.length ? Array.prototype.slice.call(a, b) : Array.prototype.slice.call(a, b, c)
    };

    function Da() {
        0 != Ea && (Fa[this[ea] || (this[ea] = ++fa)] = this);
        this.na = this.na;
        this.Y = this.Y
    }
    var Ea = 0,
        Fa = {};
    Da.prototype.na = !1;

    function Ga(a) {
        if (!a.na && (a.na = !0, a.P(), 0 != Ea)) {
            var b = a[ea] || (a[ea] = ++fa);
            if (0 != Ea && a.Y && 0 < a.Y.length) throw Error(a + " did not empty its onDisposeCallbacks queue. This probably means it overrode dispose() or disposeInternal() without calling the superclass' method.");
            delete Fa[b]
        }
    }
    Da.prototype.P = function() {
        if (this.Y)
            for (; this.Y.length;) this.Y.shift()()
    };
    var Ha = "closure_listenable_" + (1E6 * Math.random() | 0);

    function Ia(a) {
        return !(!a || !a[Ha])
    }
    var Ja = 0;

    function Ka(a, b, c, e, f) {
        this.listener = a;
        this.proxy = null;
        this.src = b;
        this.type = c;
        this.capture = !!e;
        this.ra = f;
        this.key = ++Ja;
        this.ba = this.qa = !1
    }

    function La(a) {
        a.ba = !0;
        a.listener = null;
        a.proxy = null;
        a.src = null;
        a.ra = null
    };

    function Ma(a) {
        this.src = a;
        this.a = {};
        this.b = 0
    }
    Ma.prototype.add = function(a, b, c, e, f) {
        var g = a.toString();
        a = this.a[g];
        a || (a = this.a[g] = [], this.b++);
        var k = Na(a, b, e, f); - 1 < k ? (b = a[k], c || (b.qa = !1)) : (b = new Ka(b, this.src, g, !!e, f), b.qa = c, a.push(b));
        return b
    };

    function Oa(a, b) {
        var c = b.type;
        c in a.a && Aa(a.a[c], b) && (La(b), 0 == a.a[c].length && (delete a.a[c], a.b--))
    }

    function Pa(a, b, c, e, f) {
        a = a.a[b.toString()];
        b = -1;
        a && (b = Na(a, c, e, f));
        return -1 < b ? a[b] : null
    }

    function Qa(a, b) {
        var c = void 0 !== b,
            e = c ? b.toString() : "";
        return ma(a.a, function(f) {
            for (var g = 0; g < f.length; ++g)
                if (!c || f[g].type == e) return !0;
            return !1
        })
    }

    function Na(a, b, c, e) {
        for (var f = 0; f < a.length; ++f) {
            var g = a[f];
            if (!g.ba && g.listener == b && g.capture == !!c && g.ra == e) return f
        }
        return -1
    };

    function v(a, b) {
        this.type = a;
        this.b = this.target = b;
        this.i = !1;
        this.Wa = !0
    }
    v.prototype.stopPropagation = function() {
        this.i = !0
    };
    v.prototype.a = function() {
        this.Wa = !1
    };

    function Ra(a) {
        Ra[" "](a);
        return a
    }
    Ra[" "] = aa;

    function Sa(a, b) {
        var c = Ta;
        return Object.prototype.hasOwnProperty.call(c, a) ? c[a] : c[a] = b(a)
    };
    var Ua = r("Opera"),
        w = r("Trident") || r("MSIE"),
        Va = r("Edge"),
        Wa = r("Gecko") && !(-1 != ua.toLowerCase().indexOf("webkit") && !r("Edge")) && !(r("Trident") || r("MSIE")) && !r("Edge"),
        Xa = -1 != ua.toLowerCase().indexOf("webkit") && !r("Edge");

    function Ya() {
        var a = h.document;
        return a ? a.documentMode : void 0
    }
    var Za;
    a: {
        var $a = "",
            ab = function() {
                var a = ua;
                if (Wa) return /rv:([^\);]+)(\)|;)/.exec(a);
                if (Va) return /Edge\/([\d\.]+)/.exec(a);
                if (w) return /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);
                if (Xa) return /WebKit\/(\S+)/.exec(a);
                if (Ua) return /(?:Version)[ \/]?(\S+)/.exec(a)
            }();ab && ($a = ab ? ab[1] : "");
        if (w) {
            var bb = Ya();
            if (null != bb && bb > parseFloat($a)) {
                Za = String(bb);
                break a
            }
        }
        Za = $a
    }
    var Ta = {};

    function cb(a) {
        return Sa(a, function() {
            for (var b = 0, c = qa(String(Za)).split("."), e = qa(String(a)).split("."), f = Math.max(c.length, e.length), g = 0; 0 == b && g < f; g++) {
                var k = c[g] || "",
                    u = e[g] || "";
                do {
                    k = /(\d*)(\D*)(.*)/.exec(k) || ["", "", "", ""];
                    u = /(\d*)(\D*)(.*)/.exec(u) || ["", "", "", ""];
                    if (0 == k[0].length && 0 == u[0].length) break;
                    b = ra(0 == k[1].length ? 0 : parseInt(k[1], 10), 0 == u[1].length ? 0 : parseInt(u[1], 10)) || ra(0 == k[2].length, 0 == u[2].length) || ra(k[2], u[2]);
                    k = k[3];
                    u = u[3]
                } while (0 == b)
            }
            return 0 <= b
        })
    }
    var db;
    var eb = h.document;
    db = eb && w ? Ya() || ("CSS1Compat" == eb.compatMode ? parseInt(Za, 10) : 5) : void 0;
    var fb = !w || 9 <= Number(db),
        gb = w && !cb("9"),
        hb = function() {
            if (!h.addEventListener || !Object.defineProperty) return !1;
            var a = !1,
                b = Object.defineProperty({}, "passive", {
                    get: function() {
                        a = !0
                    }
                });
            h.addEventListener("test", aa, b);
            h.removeEventListener("test", aa, b);
            return a
        }();
    var ib = Object.freeze || function(a) {
        return a
    };

    function jb(a, b) {
        v.call(this, a ? a.type : "");
        this.relatedTarget = this.b = this.target = null;
        this.button = this.screenY = this.screenX = this.clientY = this.clientX = 0;
        this.key = "";
        this.C = 0;
        this.metaKey = this.shiftKey = this.altKey = this.ctrlKey = !1;
        this.pointerId = 0;
        this.pointerType = "";
        this.m = null;
        if (a) {
            var c = this.type = a.type,
                e = a.changedTouches ? a.changedTouches[0] : null;
            this.target = a.target || a.srcElement;
            this.b = b;
            if (b = a.relatedTarget) {
                if (Wa) {
                    a: {
                        try {
                            Ra(b.nodeName);
                            var f = !0;
                            break a
                        } catch (g) {}
                        f = !1
                    }
                    f || (b = null)
                }
            } else "mouseover" ==
                c ? b = a.fromElement : "mouseout" == c && (b = a.toElement);
            this.relatedTarget = b;
            null === e ? (this.clientX = void 0 !== a.clientX ? a.clientX : a.pageX, this.clientY = void 0 !== a.clientY ? a.clientY : a.pageY, this.screenX = a.screenX || 0, this.screenY = a.screenY || 0) : (this.clientX = void 0 !== e.clientX ? e.clientX : e.pageX, this.clientY = void 0 !== e.clientY ? e.clientY : e.pageY, this.screenX = e.screenX || 0, this.screenY = e.screenY || 0);
            this.button = a.button;
            this.C = a.keyCode || 0;
            this.key = a.key || "";
            this.ctrlKey = a.ctrlKey;
            this.altKey = a.altKey;
            this.shiftKey =
                a.shiftKey;
            this.metaKey = a.metaKey;
            this.pointerId = a.pointerId || 0;
            this.pointerType = l(a.pointerType) ? a.pointerType : kb[a.pointerType] || "";
            this.m = a;
            a.defaultPrevented && this.a()
        }
    }
    p(jb, v);
    var kb = ib({
        2: "touch",
        3: "pen",
        4: "mouse"
    });
    jb.prototype.stopPropagation = function() {
        jb.f.stopPropagation.call(this);
        this.m.stopPropagation ? this.m.stopPropagation() : this.m.cancelBubble = !0
    };
    jb.prototype.a = function() {
        jb.f.a.call(this);
        var a = this.m;
        if (a.preventDefault) a.preventDefault();
        else if (a.returnValue = !1, gb) try {
            if (a.ctrlKey || 112 <= a.keyCode && 123 >= a.keyCode) a.keyCode = -1
        }
        catch (b) {}
    };
    var lb = "closure_lm_" + (1E6 * Math.random() | 0),
        mb = {},
        nb = 0;

    function x(a, b, c, e, f) {
        if (e && e.once) return ob(a, b, c, e, f);
        if (ca(b)) {
            for (var g = 0; g < b.length; g++) x(a, b[g], c, e, f);
            return null
        }
        c = pb(c);
        return Ia(a) ? y(a, b, c, da(e) ? !!e.capture : !!e, f) : qb(a, b, c, !1, e, f)
    }

    function qb(a, b, c, e, f, g) {
        if (!b) throw Error("Invalid event type");
        var k = da(f) ? !!f.capture : !!f,
            u = rb(a);
        u || (a[lb] = u = new Ma(a));
        c = u.add(b, c, e, k, g);
        if (c.proxy) return c;
        e = sb();
        c.proxy = e;
        e.src = a;
        e.listener = c;
        if (a.addEventListener) hb || (f = k), void 0 === f && (f = !1), a.addEventListener(b.toString(), e, f);
        else if (a.attachEvent) a.attachEvent(tb(b.toString()), e);
        else if (a.addListener && a.removeListener) a.addListener(e);
        else throw Error("addEventListener and attachEvent are unavailable.");
        nb++;
        return c
    }

    function sb() {
        var a = ub,
            b = fb ? function(c) {
                return a.call(b.src, b.listener, c)
            } : function(c) {
                c = a.call(b.src, b.listener, c);
                if (!c) return c
            };
        return b
    }

    function ob(a, b, c, e, f) {
        if (ca(b)) {
            for (var g = 0; g < b.length; g++) ob(a, b[g], c, e, f);
            return null
        }
        c = pb(c);
        return Ia(a) ? a.N.add(String(b), c, !0, da(e) ? !!e.capture : !!e, f) : qb(a, b, c, !0, e, f)
    }

    function vb(a, b, c, e, f) {
        if (ca(b))
            for (var g = 0; g < b.length; g++) vb(a, b[g], c, e, f);
        else e = da(e) ? !!e.capture : !!e, c = pb(c), Ia(a) ? (a = a.N, b = String(b).toString(), b in a.a && (g = a.a[b], c = Na(g, c, e, f), -1 < c && (La(g[c]), Array.prototype.splice.call(g, c, 1), 0 == g.length && (delete a.a[b], a.b--)))) : a && (a = rb(a)) && (c = Pa(a, b, c, e, f)) && wb(c)
    }

    function wb(a) {
        if ("number" != typeof a && a && !a.ba) {
            var b = a.src;
            if (Ia(b)) Oa(b.N, a);
            else {
                var c = a.type,
                    e = a.proxy;
                b.removeEventListener ? b.removeEventListener(c, e, a.capture) : b.detachEvent ? b.detachEvent(tb(c), e) : b.addListener && b.removeListener && b.removeListener(e);
                nb--;
                (c = rb(b)) ? (Oa(c, a), 0 == c.b && (c.src = null, b[lb] = null)) : La(a)
            }
        }
    }

    function tb(a) {
        return a in mb ? mb[a] : mb[a] = "on" + a
    }

    function xb(a, b, c, e) {
        var f = !0;
        if (a = rb(a))
            if (b = a.a[b.toString()])
                for (b = b.concat(), a = 0; a < b.length; a++) {
                    var g = b[a];
                    g && g.capture == c && !g.ba && (g = yb(g, e), f = f && !1 !== g)
                }
        return f
    }

    function yb(a, b) {
        var c = a.listener,
            e = a.ra || a.src;
        a.qa && wb(a);
        return c.call(e, b)
    }

    function ub(a, b) {
        if (a.ba) return !0;
        if (!fb) {
            if (!b) a: {
                b = ["window", "event"];
                for (var c = h, e = 0; e < b.length; e++)
                    if (c = c[b[e]], null == c) {
                        b = null;
                        break a
                    }
                b = c
            }
            e = b;
            b = new jb(e, this);
            c = !0;
            if (!(0 > e.keyCode || void 0 != e.returnValue)) {
                a: {
                    var f = !1;
                    if (0 == e.keyCode) try {
                        e.keyCode = -1;
                        break a
                    }
                    catch (k) {
                        f = !0
                    }
                    if (f || void 0 == e.returnValue) e.returnValue = !0
                }
                e = [];
                for (f = b.b; f; f = f.parentNode) e.push(f);a = a.type;
                for (f = e.length - 1; !b.i && 0 <= f; f--) {
                    b.b = e[f];
                    var g = xb(e[f], a, !0, b);
                    c = c && g
                }
                for (f = 0; !b.i && f < e.length; f++) b.b = e[f],
                g = xb(e[f], a, !1, b),
                c = c && g
            }
            return c
        }
        return yb(a, new jb(b, this))
    }

    function rb(a) {
        a = a[lb];
        return a instanceof Ma ? a : null
    }
    var zb = "__closure_events_fn_" + (1E9 * Math.random() >>> 0);

    function pb(a) {
        if ("function" == ba(a)) return a;
        a[zb] || (a[zb] = function(b) {
            return a.handleEvent(b)
        });
        return a[zb]
    };

    function z() {
        Da.call(this);
        this.N = new Ma(this);
        this.Za = this;
        this.pa = null
    }
    p(z, Da);
    z.prototype[Ha] = !0;
    z.prototype.Ea = function(a) {
        this.pa = a
    };
    z.prototype.removeEventListener = function(a, b, c, e) {
        vb(this, a, b, c, e)
    };

    function A(a, b) {
        var c, e = a.pa;
        if (e)
            for (c = []; e; e = e.pa) c.push(e);
        a = a.Za;
        e = b.type || b;
        if (l(b)) b = new v(b, a);
        else if (b instanceof v) b.target = b.target || a;
        else {
            var f = b;
            b = new v(e, a);
            pa(b, f)
        }
        f = !0;
        if (c)
            for (var g = c.length - 1; !b.i && 0 <= g; g--) {
                var k = b.b = c[g];
                f = Ab(k, e, !0, b) && f
            }
        b.i || (k = b.b = a, f = Ab(k, e, !0, b) && f, b.i || (f = Ab(k, e, !1, b) && f));
        if (c)
            for (g = 0; !b.i && g < c.length; g++) k = b.b = c[g], f = Ab(k, e, !1, b) && f
    }
    z.prototype.P = function() {
        z.f.P.call(this);
        if (this.N) {
            var a = this.N,
                b = 0,
                c;
            for (c in a.a) {
                for (var e = a.a[c], f = 0; f < e.length; f++) ++b, La(e[f]);
                delete a.a[c];
                a.b--
            }
        }
        this.pa = null
    };

    function y(a, b, c, e, f) {
        return a.N.add(String(b), c, !1, e, f)
    }

    function Ab(a, b, c, e) {
        b = a.N.a[String(b)];
        if (!b) return !0;
        b = b.concat();
        for (var f = !0, g = 0; g < b.length; ++g) {
            var k = b[g];
            if (k && !k.ba && k.capture == c) {
                var u = k.listener,
                    Ze = k.ra || k.src;
                k.qa && Oa(a.N, k);
                f = !1 !== u.call(Ze, e) && f
            }
        }
        return f && 0 != e.Wa
    }

    function B(a, b) {
        return Qa(a.N, void 0 !== b ? String(b) : void 0)
    };

    function Bb(a, b) {
        z.call(this);
        this.a = a || 1;
        this.b = b || h;
        this.i = m(this.hb, this);
        this.m = ja()
    }
    p(Bb, z);
    d = Bb.prototype;
    d.W = !1;
    d.S = null;

    function Cb(a, b) {
        a.a = b;
        a.S && a.W ? (a.stop(), a.start()) : a.S && a.stop()
    }
    d.hb = function() {
        if (this.W) {
            var a = ja() - this.m;
            0 < a && a < .8 * this.a ? this.S = this.b.setTimeout(this.i, this.a - a) : (this.S && (this.b.clearTimeout(this.S), this.S = null), A(this, "tick"), this.W && (this.S = this.b.setTimeout(this.i, this.a), this.m = ja()))
        }
    };
    d.start = function() {
        this.W = !0;
        this.S || (this.S = this.b.setTimeout(this.i, this.a), this.m = ja())
    };
    d.stop = function() {
        this.W = !1;
        this.S && (this.b.clearTimeout(this.S), this.S = null)
    };
    d.P = function() {
        Bb.f.P.call(this);
        this.stop();
        delete this.b
    };

    function Db(a, b, c) {
        if ("function" == ba(a)) c && (a = m(a, c));
        else if (a && "function" == typeof a.handleEvent) a = m(a.handleEvent, a);
        else throw Error("Invalid listener argument");
        2147483647 < Number(b) || h.setTimeout(a, b || 0)
    };

    function Eb(a, b) {
        this.a = void 0 !== a ? a : 0;
        this.b = void 0 !== b ? b : 0
    }
    Eb.prototype.toString = function() {
        return "(" + this.a + ", " + this.b + ")"
    };
    Eb.prototype.ceil = function() {
        this.a = Math.ceil(this.a);
        this.b = Math.ceil(this.b);
        return this
    };
    Eb.prototype.floor = function() {
        this.a = Math.floor(this.a);
        this.b = Math.floor(this.b);
        return this
    };
    Eb.prototype.round = function() {
        this.a = Math.round(this.a);
        this.b = Math.round(this.b);
        return this
    };

    function Fb(a, b, c, e) {
        this.m = a;
        this.i = b;
        this.a = c;
        this.b = e
    }
    Fb.prototype.toString = function() {
        return "(" + this.m + "t, " + this.i + "r, " + this.a + "b, " + this.b + "l)"
    };
    Fb.prototype.ceil = function() {
        this.m = Math.ceil(this.m);
        this.i = Math.ceil(this.i);
        this.a = Math.ceil(this.a);
        this.b = Math.ceil(this.b);
        return this
    };
    Fb.prototype.floor = function() {
        this.m = Math.floor(this.m);
        this.i = Math.floor(this.i);
        this.a = Math.floor(this.a);
        this.b = Math.floor(this.b);
        return this
    };
    Fb.prototype.round = function() {
        this.m = Math.round(this.m);
        this.i = Math.round(this.i);
        this.a = Math.round(this.a);
        this.b = Math.round(this.b);
        return this
    };

    function C(a, b) {
        this.width = a;
        this.height = b
    }
    d = C.prototype;
    d.toString = function() {
        return "(" + this.width + " x " + this.height + ")"
    };
    d.aspectRatio = function() {
        return this.width / this.height
    };
    d.ceil = function() {
        this.width = Math.ceil(this.width);
        this.height = Math.ceil(this.height);
        return this
    };
    d.floor = function() {
        this.width = Math.floor(this.width);
        this.height = Math.floor(this.height);
        return this
    };
    d.round = function() {
        this.width = Math.round(this.width);
        this.height = Math.round(this.height);
        return this
    };

    function Gb(a, b, c, e) {
        this.a = a;
        this.b = b;
        this.width = c;
        this.height = e
    }
    Gb.prototype.toString = function() {
        return "(" + this.a + ", " + this.b + " - " + this.width + "w x " + this.height + "h)"
    };
    Gb.prototype.ceil = function() {
        this.a = Math.ceil(this.a);
        this.b = Math.ceil(this.b);
        this.width = Math.ceil(this.width);
        this.height = Math.ceil(this.height);
        return this
    };
    Gb.prototype.floor = function() {
        this.a = Math.floor(this.a);
        this.b = Math.floor(this.b);
        this.width = Math.floor(this.width);
        this.height = Math.floor(this.height);
        return this
    };
    Gb.prototype.round = function() {
        this.a = Math.round(this.a);
        this.b = Math.round(this.b);
        this.width = Math.round(this.width);
        this.height = Math.round(this.height);
        return this
    };
    var Hb = !Wa && !w || w && 9 <= Number(db) || Wa && cb("1.9.1"),
        Ib = w || Ua || Xa;

    function Jb(a) {
        return a ? new Kb(Lb(a)) : ka || (ka = new Kb)
    }

    function Mb(a, b) {
        var c = b || document;
        return c.querySelectorAll && c.querySelector ? c.querySelectorAll("." + a) : Nb(a, b)
    }

    function Nb(a, b) {
        var c;
        var e = document;
        b = b || e;
        if (b.querySelectorAll && b.querySelector && a) return b.querySelectorAll(a ? "." + a : "");
        if (a && b.getElementsByClassName) {
            var f = b.getElementsByClassName(a);
            return f
        }
        f = b.getElementsByTagName("*");
        if (a) {
            var g = {};
            for (e = c = 0; b = f[e]; e++) {
                var k = b.className,
                    u;
                if (u = "function" == typeof k.split) u = 0 <= xa(k.split(/\s+/), a);
                u && (g[c++] = b)
            }
            g.length = c;
            return g
        }
        return f
    }

    function Ob(a) {
        a = a.document;
        a = "CSS1Compat" == a.compatMode ? a.documentElement : a.body;
        return new C(a.clientWidth, a.clientHeight)
    }

    function Pb(a) {
        for (var b; b = a.firstChild;) a.removeChild(b)
    }

    function Qb(a) {
        a && a.parentNode && a.parentNode.removeChild(a)
    }

    function Rb(a) {
        return Hb && void 0 != a.children ? a.children : ya(a.childNodes, function(b) {
            return 1 == b.nodeType
        })
    }

    function Lb(a) {
        return 9 == a.nodeType ? a : a.ownerDocument || a.document
    }

    function Sb(a, b) {
        if ("textContent" in a) a.textContent = b;
        else if (3 == a.nodeType) a.data = String(b);
        else if (a.firstChild && 3 == a.firstChild.nodeType) {
            for (; a.lastChild != a.firstChild;) a.removeChild(a.lastChild);
            a.firstChild.data = String(b)
        } else Pb(a), a.appendChild(Lb(a).createTextNode(String(b)))
    }

    function Kb(a) {
        this.a = a || h.document || document
    }
    Kb.prototype.c = function() {
        return l(void 0) ? this.a.getElementById(void 0) : void 0
    };

    function D(a, b) {
        return a.a.createElement(String(b))
    }
    Kb.prototype.appendChild = function(a, b) {
        a.appendChild(b)
    };

    function E(a, b, c) {
        if (l(b))(b = Tb(a, b)) && (a.style[b] = c);
        else
            for (var e in b) {
                c = a;
                var f = b[e],
                    g = Tb(c, e);
                g && (c.style[g] = f)
            }
    }
    var Ub = {};

    function Tb(a, b) {
        var c = Ub[b];
        if (!c) {
            var e = sa(b);
            c = e;
            void 0 === a.style[e] && (e = (Xa ? "Webkit" : Wa ? "Moz" : w ? "ms" : Ua ? "O" : null) + ta(e), void 0 !== a.style[e] && (c = e));
            Ub[b] = c
        }
        return c
    }

    function Vb(a, b) {
        var c = Lb(a);
        return c.defaultView && c.defaultView.getComputedStyle && (a = c.defaultView.getComputedStyle(a, null)) ? a[b] || a.getPropertyValue(b) || "" : ""
    }

    function Wb(a, b, c) {
        if (b instanceof Eb) {
            var e = b.a;
            b = b.b
        } else e = b, b = c;
        a.style.left = Xb(e, !1);
        a.style.top = Xb(b, !1)
    }

    function Yb(a, b, c) {
        if (b instanceof C) c = b.height, b = b.width;
        else if (void 0 == c) throw Error("missing height argument");
        a.style.width = Xb(b, !0);
        a.style.height = Xb(c, !0)
    }

    function Xb(a, b) {
        "number" == typeof a && (a = (b ? Math.round(a) : a) + "px");
        return a
    }

    function F(a, b) {
        a = a.style;
        "opacity" in a ? a.opacity = b : "MozOpacity" in a ? a.MozOpacity = b : "filter" in a && (a.filter = "" === b ? "" : "alpha(opacity=" + 100 * Number(b) + ")")
    }

    function Zb(a) {
        var b = Lb(a),
            c = w && a.currentStyle;
        if (c && "CSS1Compat" == Jb(b).a.compatMode && "auto" != c.width && "auto" != c.height && !c.boxSizing) return b = $b(a, c.width, "width", "pixelWidth"), a = $b(a, c.height, "height", "pixelHeight"), new C(b, a);
        c = new C(a.offsetWidth, a.offsetHeight);
        if (w) {
            b = ac(a, "paddingLeft");
            var e = ac(a, "paddingRight"),
                f = ac(a, "paddingTop"),
                g = ac(a, "paddingBottom");
            b = new Fb(f, e, g, b)
        } else b = Vb(a, "paddingLeft"), e = Vb(a, "paddingRight"), f = Vb(a, "paddingTop"), g = Vb(a, "paddingBottom"), b = new Fb(parseFloat(f),
            parseFloat(e), parseFloat(g), parseFloat(b));
        !w || 9 <= Number(db) ? (e = Vb(a, "borderLeftWidth"), f = Vb(a, "borderRightWidth"), g = Vb(a, "borderTopWidth"), a = Vb(a, "borderBottomWidth"), a = new Fb(parseFloat(g), parseFloat(f), parseFloat(a), parseFloat(e))) : (e = bc(a, "borderLeft"), f = bc(a, "borderRight"), g = bc(a, "borderTop"), a = bc(a, "borderBottom"), a = new Fb(g, f, a, e));
        return new C(c.width - a.b - b.b - b.i - a.i, c.height - a.m - b.m - b.a - a.a)
    }

    function $b(a, b, c, e) {
        if (/^\d+px?$/.test(b)) return parseInt(b, 10);
        var f = a.style[c],
            g = a.runtimeStyle[c];
        a.runtimeStyle[c] = a.currentStyle[c];
        a.style[c] = b;
        b = a.style[e];
        a.style[c] = f;
        a.runtimeStyle[c] = g;
        return +b
    }

    function ac(a, b) {
        return (b = a.currentStyle ? a.currentStyle[b] : null) ? $b(a, b, "left", "pixelLeft") : 0
    }
    var cc = {
        thin: 2,
        medium: 4,
        thick: 6
    };

    function bc(a, b) {
        if ("none" == (a.currentStyle ? a.currentStyle[b + "Style"] : null)) return 0;
        b = a.currentStyle ? a.currentStyle[b + "Width"] : null;
        return b in cc ? cc[b] : $b(a, b, "left", "pixelLeft")
    };

    function dc(a) {
        Da.call(this);
        this.b = a;
        this.a = {}
    }
    p(dc, Da);
    var ec = [];

    function G(a, b, c, e) {
        ca(c) || (c && (ec[0] = c.toString()), c = ec);
        for (var f = 0; f < c.length; f++) {
            var g = x(b, c[f], e || a.handleEvent, !1, a.b || a);
            if (!g) break;
            a.a[g.key] = g
        }
    }

    function fc(a, b, c, e, f, g) {
        if (ca(c))
            for (var k = 0; k < c.length; k++) fc(a, b, c[k], e, f, g);
        else e = e || a.handleEvent, f = da(f) ? !!f.capture : !!f, g = g || a.b || a, e = pb(e), f = !!f, c = Ia(b) ? Pa(b.N, String(c), e, f, g) : b ? (b = rb(b)) ? Pa(b, c, e, f, g) : null : null, c && (wb(c), delete a.a[c.key])
    }

    function gc(a) {
        la(a.a, function(b, c) {
            this.a.hasOwnProperty(c) && wb(b)
        }, a);
        a.a = {}
    }
    dc.prototype.P = function() {
        dc.f.P.call(this);
        gc(this)
    };
    dc.prototype.handleEvent = function() {
        throw Error("EventHandler.handleEvent not implemented");
    };

    function hc() {}
    hc.a = void 0;
    hc.b = function() {
        return hc.a ? hc.a : hc.a = new hc
    };
    hc.prototype.a = 0;

    function ic(a) {
        z.call(this);
        this.i = a || Jb();
        this.oa = null;
        this.H = !1;
        this.m = null;
        this.U = void 0;
        this.K = this.C = this.G = null;
        this.ca = !1
    }
    p(ic, z);
    d = ic.prototype;
    d.ib = hc.b();

    function jc(a) {
        return a.oa || (a.oa = ":" + (a.ib.a++).toString(36))
    }
    d.c = function() {
        return this.m
    };

    function H(a) {
        a.U || (a.U = new dc(a));
        return a.U
    }

    function kc(a, b) {
        if (a == b) throw Error("Unable to set parent component");
        var c;
        if (c = b && a.G && a.oa) {
            c = a.G;
            var e = a.oa;
            c = c.K && e ? q(c.K, e) || null : null
        }
        if (c && a.G != b) throw Error("Unable to set parent component");
        a.G = b;
        ic.f.Ea.call(a, b)
    }
    d.Ea = function(a) {
        if (this.G && this.G != a) throw Error("Method not supported");
        ic.f.Ea.call(this, a)
    };
    d.v = function() {
        this.m = D(this.i, "DIV")
    };

    function I(a, b, c) {
        if (a.H) throw Error("Component already rendered");
        a.m || a.v();
        b ? b.insertBefore(a.m, c || null) : a.i.a.body.appendChild(a.m);
        a.G && !a.G.H || a.w()
    }
    d.Z = function(a) {
        if (this.H) throw Error("Component already rendered");
        if (a) {
            this.ca = !0;
            var b = Lb(a);
            this.i && this.i.a == b || (this.i = Jb(a));
            this.B(a);
            this.w()
        } else throw Error("Invalid element to decorate");
    };
    d.B = function(a) {
        this.m = a
    };
    d.w = function() {
        this.H = !0;
        J(this, function(a) {
            !a.H && a.c() && a.w()
        })
    };
    d.ea = function() {
        J(this, function(a) {
            a.H && a.ea()
        });
        this.U && gc(this.U);
        this.H = !1
    };
    d.P = function() {
        this.H && this.ea();
        this.U && (Ga(this.U), delete this.U);
        J(this, function(a) {
            Ga(a)
        });
        !this.ca && this.m && Qb(this.m);
        this.G = this.m = this.K = this.C = null;
        ic.f.P.call(this)
    };
    d.R = function(a, b) {
        var c = K(this);
        if (a.H && (b || !this.H)) throw Error("Component already rendered");
        if (0 > c || c > K(this)) throw Error("Child component index out of bounds");
        this.K && this.C || (this.K = {}, this.C = []);
        if (a.G == this) {
            var e = jc(a);
            this.K[e] = a;
            Aa(this.C, a)
        } else {
            e = this.K;
            var f = jc(a);
            if (null !== e && f in e) throw Error('The object already contains the key "' + f + '"');
            e[f] = a
        }
        kc(a, this);
        Ba(this.C, c, 0, a);
        a.H && this.H && a.G == this ? (b = this.fa(), c = b.childNodes[c] || null, c != a.c() && b.insertBefore(a.c(), c)) : b ? (this.m || this.v(),
            c = L(this, c + 1), I(a, this.fa(), c ? c.m : null)) : this.H && !a.H && a.m && a.m.parentNode && 1 == a.m.parentNode.nodeType && a.w()
    };
    d.fa = function() {
        return this.m
    };

    function K(a) {
        return a.C ? a.C.length : 0
    }

    function L(a, b) {
        return a.C ? a.C[b] || null : null
    }

    function J(a, b, c) {
        a.C && t(a.C, b, c)
    }
    d.removeChild = function(a, b) {
        if (a) {
            var c = l(a) ? a : jc(a);
            a = this.K && c ? q(this.K, c) || null : null;
            if (c && a) {
                var e = this.K;
                c in e && delete e[c];
                Aa(this.C, a);
                b && (a.ea(), a.m && Qb(a.m));
                kc(a, null)
            }
        }
        if (!a) throw Error("Child is not in parent component");
        return a
    };

    function lc(a) {
        for (var b = []; a.C && 0 != a.C.length;) b.push(a.removeChild(L(a, 0), !0));
        return b
    };

    function M(a) {
        ic.call(this, a);
        this.ua = !0
    }
    p(M, ic);
    d = M.prototype;
    d.L = function(a) {
        this.ua = a
    };

    function N(a) {
        a.L(!1)
    }

    function O(a) {
        return a.H && a.ua
    }
    d.R = function(a, b) {
        a.L(this.ua);
        M.f.R.call(this, a, b)
    };
    d.update = function() {
        var a = this.c();
        a.tabIndex = -1;
        a.removeAttribute("tabIndex")
    };
    d.u = function() {
        return "jx"
    };
    d.w = function() {
        M.f.w.call(this);
        O(this) && this.update()
    };
    var mc = /#(.)(.)(.)/;

    function nc(a) {
        var b = a[0],
            c = a[1];
        a = a[2];
        b = Number(b);
        c = Number(c);
        a = Number(a);
        if (b != (b & 255) || c != (c & 255) || a != (a & 255)) throw Error('"(' + b + "," + c + "," + a + '") is not a valid RGB color');
        return "#" + oc(b.toString(16)) + oc(c.toString(16)) + oc(a.toString(16))
    }
    var pc = /^#(?:[0-9a-f]{3}){1,2}$/i;

    function oc(a) {
        return 1 == a.length ? "0" + a : a
    };

    function qc(a) {
        M.call(this, a);
        this.h = this.A = this.l = null;
        this.F = !1;
        this.b = [];
        this.J = this.M = this.V = this.I = !0;
        this.s = this.o = this.a = this.j = null;
        this.D = rc
    }
    p(qc, M);
    var rc = 500;

    function sc(a, b) {
        if (l(b)) {
            var c = new tc;
            c.src = b;
            b = c
        }
        za(a.b, b);
        O(a) && a.update()
    }

    function uc(a, b, c) {
        a = Math.round(Math.sqrt(Math.pow(a.l.width, 2) + Math.pow(a.l.height, 2)) / Math.sqrt(Math.pow(a.h.width, 2) + Math.pow(a.h.height, 2)));
        E(b, "filter", c ? "blur(" + a + "px)" : "none")
    }
    d = qc.prototype;
    d.hc = function() {
        F(this.a, 1);
        this.O = setTimeout(m(this.gc, this), 1.25 * this.D)
    };
    d.gc = function() {
        clearTimeout(this.O);
        this.O = null;
        this.j.src = this.a.src;
        E(this.j, vc);
        E(this.j, wc);
        uc(this, this.j, this.F);
        vb(this.a, "load", this.Ra);
        this.g.removeChild(this.a);
        this.a = null;
        null !== this.s && xc(this, this.s);
        this.s = null
    };

    function xc(a, b) {
        if (a.o != b) {
            var c = a.b[b] ? a.b[b] : void 0;
            c && (a.a ? a.s = b : (a.D = rc * (null === a.o ? .3 : 1), a.o = b, a.s = null, a.a = D(a.i, "IMG"), a.g.appendChild(a.a), E(a.a, yc), b = a.D, E(a.a, "transition", 0 < b ? "opacity " + .001 * b + "s ease" : "none"), x(a.a, "load", a.Ra, !1, a), E(a.a, "z-index", 2), F(a.a, 0), a.a.src = c.src))
        }
    }

    function zc(a) {
        var b = Zb(a.c()),
            c = a.A ? a.A : a.h;
        c = new Gb(0, 0, c.width, c.height);
        var e = b.width / b.height,
            f = a.I ? c.width / c.height : e,
            g = (a.M || !(null !== a.A || 1 == a.b.length)) && c.width < b.width && c.height < b.height,
            k = a.J;
        if (a.V && (c.width > b.width || c.height > b.height) || g || k) e = e > f, !k && e || k && !e ? (c.width = b.height * f, c.height = b.height) : (c.width = b.width, c.height = b.width / f);
        c.a = Math.round((b.width - c.width) / 2);
        c.b = Math.round((b.height - c.height) / 2);
        Wb(a.g, c.a, c.b);
        Yb(a.g, c.width, c.height)
    }

    function Ac(a) {
        null !== a.o && null !== a.h && zc(a);
        if (0 < a.b.length && (null === a.o && xc(a, 0), 1 < a.b.length)) {
            var b = a.l.width,
                c = a.l.height,
                e = 0;
            for (e in a.b) {
                e = Number(e);
                var f = a.b[e];
                if (f.width >= b || f.height > c) break
            }
            xc(a, e)
        }
    }
    d.update = function() {
        qc.f.update.call(this);
        this.l = Zb(this.c());
        Ac(this);
        E(this.c(), "background-color", "none")
    };
    d.u = function() {
        return "jx-imageset"
    };
    d.B = function() {
        throw Error("Method not supported");
    };
    d.v = function() {
        qc.f.v.call(this);
        var a = this.c(),
            b = this.i;
        this.g = D(b, "DIV");
        a.appendChild(this.g);
        this.j = D(b, "IMG");
        this.g.appendChild(this.j);
        a = this.c();
        P(a, this.u());
        E(a, Bc);
        E(a, wc);
        E(this.g, Cc)
    };
    d.Ra = function() {
        var a = this.a;
        this.h = new C(a.naturalWidth, a.naturalHeight);
        this.F = 128 > Math.sqrt(Math.pow(this.h.width, 2) + Math.pow(this.h.height, 2));
        zc(this);
        E(a, wc);
        uc(this, a, this.F);
        window.requestAnimationFrame(m(this.hc, this))
    };
    var Bc = {
            overflow: "hidden"
        },
        wc = {
            width: "100%",
            height: "100%"
        },
        Cc = {
            position: "relative",
            overflow: "hidden"
        },
        vc = {
            position: "absolute",
            "z-index": 1
        },
        yc = {
            position: "absolute",
            "z-index": 2
        };

    function tc() {
        this.height = this.width = 0
    };

    function Q(a) {
        M.call(this, a);
        this.V = !0;
        this.va = 0;
        this.I = new Bb;
        Cb(this.I, Dc)
    }
    p(Q, M);
    var Dc = 1E3;
    d = Q.prototype;
    d.isVisible = function() {
        return this.V
    };

    function Ec(a) {
        a.va = 0;
        a.I.W || (a.V = !0, a.ta(), A(a, "show"), a.I.start())
    }
    d.L = function(a) {
        Q.f.L.call(this, a);
        J(this, function(b) {
            b.L(a)
        })
    };
    d.ta = function() {
        var a = this.c();
        this.ca ? (a = Rb(a), t(a, function(b) {
            F(b, !0 === this.V ? 1 : 0)
        }, this)) : F(a, !0 === this.V ? 1 : 0)
    };
    d.update = function() {
        Q.f.update.call(this);
        this.ta();
        J(this, function(a) {
            a.update()
        })
    };
    d.B = function(a) {
        Q.f.B.call(this, a);
        this.ca || E(this.c(), Fc)
    };
    d.v = function() {
        Q.f.v.call(this);
        this.ca || E(this.c(), Fc)
    };
    d.pb = function() {
        Ec(this)
    };
    d.ob = function() {
        this.va++;
        3 < this.va && (this.V = !1, this.ta(), A(this, "hide"), this.I.W && this.I.stop())
    };
    d.w = function() {
        Q.f.w.call(this);
        G(H(this), this.c(), "mousemove", this.pb);
        x(this.I, "tick", this.ob, !1, this);
        Ec(this)
    };
    var Fc = {
        transition: "opacity 0.125s linear"
    };

    function P(a, b) {
        if (a.classList) a.classList.add(b);
        else {
            if (a.classList) var c = !a.classList.contains(b);
            else a.classList ? c = a.classList : (c = a.className, c = l(c) && c.match(/\S+/g) || []), c = !(0 <= xa(c, b));
            c && (a.className += 0 < a.className.length ? " " + b : b)
        }
    };

    function Gc(a, b) {
        M.call(this, b);
        this.b = 0;
        this.h = 100;
        this.a = 50;
        this.j = !1
    }
    p(Gc, M);

    function Hc(a) {
        var b = a.h - a.b;
        a.a = Math.min(a.h, Math.max(a.b, a.a));
        var c = 100 * a.a / b;
        b = a.a / b * a.l.width;
        var e = a.l.width - b;
        E(a.s, "width", b + "px");
        E(a.A, "width", e + "px");
        Wb(a.o, c + "%")
    }
    d = Gc.prototype;
    d.update = function() {
        Gc.f.update.call(this);
        this.l = Zb(this.c());
        Hc(this)
    };
    d.B = function() {
        throw Error("Method not supported");
    };
    d.u = function() {
        return "jx-range-slider"
    };
    d.v = function() {
        Gc.f.v.call(this);
        var a = this.i,
            b = this.c();
        this.s = D(a, "DIV");
        b.appendChild(this.s);
        this.A = D(a, "DIV");
        b.appendChild(this.A);
        this.o = D(a, "DIV");
        b.appendChild(this.o);
        a = this.c();
        P(a, this.u());
        E(a, Ic);
        E(this.s, Jc);
        E(this.A, Kc);
        E(this.o, Lc)
    };
    d.Tb = function(a) {
        this.j = !0;
        this.g = this.c().offsetLeft;
        this.a = this.b + (this.h - this.b) * (a.clientX - this.g) / this.l.width;
        A(this, Mc);
        Hc(this)
    };
    d.Ub = function(a) {
        this.j && (this.a = this.b + (this.h - this.b) * (a.clientX - this.g) / this.l.width, A(this, Mc), Hc(this))
    };
    d.nb = function() {
        this.j && (this.j = !1)
    };
    d.w = function() {
        Gc.f.w.call(this);
        var a = H(this);
        G(a, this.c(), "mousedown", this.Tb);
        a: {
            var b = this.c();
            var c;
            if (Ib && !(w && cb("9") && !cb("10") && h.SVGElement && b instanceof h.SVGElement) && (c = b.parentElement)) {
                b = c;
                break a
            }
            c = b.parentNode;b = da(c) && 1 == c.nodeType ? c : null
        }
        G(a, b, "mousemove", this.Ub);
        G(a, b, "mouseup", this.nb)
    };
    var Ic = {
            position: "relative",
            height: "24px",
            "user-select": "none"
        },
        Jc = {
            position: "absolute",
            left: 0,
            top: "8px",
            bottom: "8px",
            "background-color": "rgba(255, 255, 255, 0.6)",
            "border-top-left-radius": "2px",
            "border-bottom-left-radius": "2px",
            cursor: "pointer"
        },
        Kc = {
            position: "absolute",
            right: 0,
            top: "8px",
            bottom: "8px",
            "background-color": "rgba(255, 255, 255, 0.2)",
            "border-top-right-radius": "2px",
            "border-bottom-right-radius": "2px",
            cursor: "pointer"
        },
        Lc = {
            position: "absolute",
            width: "16px",
            height: "16px",
            top: "4px",
            "margin-left": "-8px",
            "border-radius": "50%",
            "background-color": "#FFFFFF",
            cursor: "pointer"
        },
        Mc = "timechange";

    function Nc(a) {
        M.call(this, a);
        this.b = new Gc;
        this.A = !0;
        this.s = new Bb(250);
        this.g = Oc;
        this.o = 0;
        this.h = new Bb;
        Cb(this.h, Pc)
    }
    p(Nc, M);
    var Pc = 1200,
        Oc = 0;
    d = Nc.prototype;
    d.play = function() {
        2 == this.g && (this.a.play(), this.s.start())
    };
    d.pause = function() {
        this.a.pause();
        this.s.stop()
    };
    d.reset = function() {
        this.pause();
        this.l.removeAttribute("src");
        this.g = Oc
    };

    function Qc(a, b) {
        b !== a.A && (a.A = 1 == b, b && Rc(a), F(a.b.c(), b ? 1 : 0))
    }
    d.Fa = function() {
        this.o = 0;
        this.h.W || (Qc(this, !0), this.h.start())
    };
    d.ma = function() {
        this.g === Oc && (this.g = 1, this.l.setAttribute("src", this.D), this.a.load())
    };

    function Rc(a) {
        if (a.A) {
            var b = a.b;
            b.j || (b.a = a.a.currentTime, O(b) && Hc(b));
            Hc(a.b)
        }
    }
    d.sa = function() {
        var a = this.a.currentTime,
            b = this.b,
            c = this.a.duration;
        b.b = 0;
        b.h = c;
        this.b.a = a;
        this.b.update()
    };
    d.update = function() {
        Nc.f.update.call(this);
        this.ma();
        2 === this.g && this.sa()
    };
    d.u = function() {
        return "jx-video-player"
    };
    d.B = function() {
        throw Error("Method not supported");
    };
    d.v = function() {
        Nc.f.v.call(this);
        var a = this.c(),
            b = this.i;
        this.a = D(b, "VIDEO");
        this.l = D(b, "SOURCE");
        this.a.appendChild(this.l);
        a.appendChild(this.a);
        N(this.b);
        I(this.b, a);
        a = this.c();
        P(a, this.u());
        E(a, Sc);
        E(a, Tc);
        E(this.a, Uc);
        E(this.l, Vc);
        E(this.b.c(), Wc);
        Qc(this, !1)
    };
    d.bc = function() {
        this.Fa()
    };
    d.ac = function() {
        this.o++;
        3 < this.o && (Qc(this, !1), this.h.W && this.h.stop())
    };
    d.Ha = function() {
        this.g = 2;
        this.update()
    };
    d.fb = function() {
        2 != this.g && this.Ha()
    };
    d.Ia = function() {};
    d.gb = function() {
        this.Ia()
    };
    d.fc = function() {
        this.a.currentTime = this.b.a
    };
    d.cc = function() {
        Rc(this)
    };
    d.w = function() {
        Nc.f.w.call(this);
        var a = H(this);
        G(a, this.c(), "mousemove", this.bc);
        G(a, this.h, "tick", this.ac);
        G(a, this.a, "canplay", this.fb);
        G(a, this.a, "ended", this.gb);
        G(a, this.b, Mc, this.fc);
        G(a, this.s, "tick", this.cc)
    };
    var Sc = {
            overflow: "hidden",
            position: "relative"
        },
        Tc = {
            width: "100%",
            height: "100%"
        },
        Uc = {
            width: "100%",
            height: "100%",
            "z-index": 1
        },
        Vc = {},
        Wc = {
            position: "absolute",
            bottom: 0,
            "margin-bottom": "22px",
            height: "24px",
            width: "40%",
            "margin-left": "30%",
            "margin-right": "30%",
            transition: "opacity 0.125s linear"
        };

    function Xc(a) {
        Nc.call(this, a);
        this.j = !1
    }
    p(Xc, Nc);
    d = Xc.prototype;
    d.Ha = function() {
        Xc.f.Ha.call(this);
        A(this, Yc);
        A(this, Zc)
    };
    d.active = function() {
        this.j = !0;
        this.sa();
        this.ma()
    };
    d.Ga = function() {
        this.j = !1;
        Qc(this, !1);
        this.h.W && this.h.stop();
        this.reset()
    };
    d.play = function() {
        Xc.f.play.call(this)
    };
    d.stop = function() {
        this.pause()
    };
    d.ga = function() {
        return this.D
    };
    d.Ia = function() {
        Xc.f.Ia.call(this);
        A(this, $c)
    };
    d.Fa = function() {
        this.j && Xc.f.Fa.call(this)
    };
    d.sa = function() {
        this.j && Xc.f.sa.call(this)
    };
    d.ma = function() {
        this.j && Xc.f.ma.call(this)
    };

    function R(a, b) {
        "boolean" == typeof a ? b = !0 === a : l(a) ? (a = a.toLowerCase(), b = "true" === a ? !0 : "false" === a ? !1 : !0 === b) : b = !0 === b;
        return b
    }

    function ad(a) {
        return l(a) ? a : null
    }

    function bd(a) {
        return ca(a) ? a : []
    };
    var cd = !w && !(r("Safari") && !((r("Chrome") || r("CriOS")) && !r("Edge") || r("Coast") || r("Opera") || r("Edge") || r("Silk") || r("Android")));

    function dd(a) {
        if (a) {
            if (cd && a.dataset) var b = a.dataset;
            else {
                b = {};
                a = a.attributes;
                for (var c = 0; c < a.length; ++c) {
                    var e = a[c];
                    if (0 == e.name.lastIndexOf("data-", 0)) {
                        var f = sa(e.name.substr(5));
                        b[f] = e.value
                    }
                }
            }
            b = b || {}
        } else b = {};
        return na(b)
    };

    function ed(a) {
        M.call(this, a);
        this.b = null
    }
    p(ed, M);
    d = ed.prototype;
    d.active = function() {
        F(this.a, 1)
    };
    d.Ga = function() {
        F(this.a, 0)
    };
    d.play = function() {};
    d.stop = function() {};
    d.update = function() {
        ed.f.update.call(this);
        var a = Zb(this.G.fa()).width < fd;
        E(this.c(), a ? gd : hd);
        E(this.a, a ? id : jd);
        Sb(this.a, null !== this.b ? this.b : "")
    };
    d.u = function() {
        return "jx-image-description"
    };
    d.B = function() {
        throw Error("Method not supported");
    };
    d.v = function() {
        ed.f.v.call(this);
        var a = this.c();
        this.a = D(this.i, "DIV");
        a.appendChild(this.a);
        a = this.c();
        P(a, this.u());
        E(a, kd);
        E(this.a, ld)
    };
    var fd = 320,
        kd = {
            position: "absolute",
            margin: 0,
            "z-index": 101
        },
        ld = {
            "font-family": '"YouTube Noto", Roboto, Arial, Helvetica, sans-serif',
            "font-weight": "normal",
            color: "rgba(220, 220, 220, 1.0)",
            opacity: 0,
            transition: "opacity 0.25s 2s"
        },
        hd = {
            left: "64px",
            right: "64px",
            bottom: "128px"
        },
        jd = {
            "font-size": "14px",
            "white-space": "pre-wrap",
            "line-height": "1.6em"
        },
        gd = {
            left: "8px",
            right: "8px",
            bottom: "64px"
        },
        id = {
            "font-size": "10px",
            "white-space": "pre-wrap",
            "line-height": "1.4em"
        };

    function md(a) {
        z.call(this);
        this.a = a || window;
        this.i = x(this.a, "resize", this.m, !1, this);
        this.b = Ob(this.a || window)
    }
    p(md, z);
    md.prototype.P = function() {
        md.f.P.call(this);
        this.i && (wb(this.i), this.i = null);
        this.b = this.a = null
    };
    md.prototype.m = function() {
        var a = Ob(this.a || window),
            b = this.b;
        a == b || a && b && a.width == b.width && a.height == b.height || (this.b = a, A(this, "resize"))
    };

    function nd(a) {
        qc.call(this, a)
    }
    p(nd, qc);
    d = nd.prototype;
    d.active = function() {
        A(this, Zc)
    };
    d.Ga = function() {};
    d.play = function() {};
    d.stop = function() {};
    d.ga = function() {
        var a = null;
        var b = 0;
        for (b in this.b) {
            b = Number(b);
            var c = this.b[b];
            if (0 <= c.width || 0 < c.height) a = c
        }
        return a ? a.src : null
    };

    function od(a) {
        M.call(this, a)
    }
    p(od, M);
    var Zc = "mediaitem-active",
        Yc = "mediaitem-wait",
        $c = "mediaitem-next";

    function pd(a) {
        J(a, function(b) {
            b.active()
        })
    }

    function qd(a) {
        J(a, function(b) {
            b.Ga()
        })
    }
    d = od.prototype;
    d.ga = function() {
        return this.T.ga()
    };
    d.update = function() {
        od.f.update.call(this);
        J(this, function(a) {
            a.update()
        })
    };
    d.u = function() {
        return "jx-media-item"
    };
    d.B = function() {
        throw Error("Method not supported");
    };
    d.v = function() {
        od.f.v.call(this);
        P(this.c(), this.u());
        N(this)
    };
    var rd, sd;

    function td(a) {
        !rd && a && (rd = a, sd = na(a.style), E(a, ud), a.focus())
    }

    function vd() {
        rd && (E(rd, sd), sd = rd = null)
    }
    var ud = {
        position: "fixed",
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        border: "1px splid red",
        "background-color": "#000",
        "z-index": 2147483647
    };

    function S(a) {
        M.call(this, a);
        this.b = this.h = this.g = null;
        this.l = new md
    }
    p(S, M);
    d = S.prototype;
    d.Da = function(a) {
        this.g = wd(this, a);
        O(this) && this.update()
    };

    function xd(a, b) {
        var c = dd(b),
            e = [];
        null !== b && (t((b || document).getElementsByTagName("OBJECT"), function(f) {
            var g = dd(f),
                k = f.getAttribute("data");
            k && (f = f.getAttribute("type") || "image/jpeg", g.src = k, g.mimetype = f, za(e, g))
        }, a), t((b || document).getElementsByTagName("IMG"), function(f) {
            f = dd(f);
            za(e, f)
        }, a));
        0 === e.length && console.log("No media items found.");
        c.mediaItems = e;
        return c
    }

    function wd(a, b) {
        var c = a.ya();
        c.G(b);
        var e = [];
        t(bd(q(b, "mediaItems")), function(f) {
            var g = this.xa();
            f.aspectRatio = c.h;
            f.za = c.T;
            f.stretch = c.l;
            f.wa = c.j;
            g.b = ad(q(f, "mimetype"));
            g.src = ad(q(f, "src"));
            g.a = ad(q(f, "initialSrc"));
            g.aspectRatio = R(q(f, "aspectRatio"), !0);
            g.za = R(q(f, "enlarge"), !0);
            g.stretch = R(q(f, "stretch"), !0);
            g.wa = R(q(f, "cover"), !1);
            var k = parseInt(q(f, "width"), 10);
            g.width = 0 < k ? k : null;
            k = parseInt(q(f, "height"), 10);
            g.height = 0 < k ? k : null;
            f = q(f, "description");
            g.i = void 0 !== f && null !== f ? String(f).replace("\\n",
                "\n") : null;
            za(e, g)
        }, a);
        c.C = e;
        return c
    }

    function yd(a, b) {
        if (b.delay) {
            var c = 1E3 * b.delay;
            a.h.a != c && Cb(a.h, c)
        }
        b.title && a.ja(b.title);
        b.K && a.Xa(b.K);
        a.g = b.m;
        a.A = b.g;
        c = a.b;
        c.D = b.s;
        O(c) && zd(c);
        O(a) && zd(a.b);
        a.ia(!0 === b.o && !!b.K);
        a.ha(!0 === b.U && 0 < b.C.length)
    }

    function Ad(a, b) {
        var c = b.src ? b.src : "";
        switch (b.b) {
            case "video/mp4":
                var e = new Xc;
                e.D = c;
                e.g = Oc;
                O(e) && e.ma();
                a.T = e;
                a.R(a.T, !a.T.H);
                break;
            default:
                e = new nd;
                null !== b.width && 0 < b.width && null !== b.height && 0 < b.height && (e.A = new C(b.width, b.height), O(e) && (e.l = Zb(e.c()), Ac(e)));
                e.I = b.aspectRatio;
                O(e) && Ac(e);
                e.M = b.za;
                O(e) && Ac(e);
                e.V = b.stretch;
                O(e) && Ac(e);
                e.J = b.wa;
                O(e) && Ac(e);
                if (b.a) {
                    var f = new tc;
                    f.src = b.a;
                    f.width = 0;
                    f.height = 0;
                    sc(e, f)
                }
                f = new tc;
                f.src = c;
                sc(e, f);
                a.T = e;
                a.R(a.T, !a.T.H)
        }
        l(b.i) && (c = new ed, c.b = b.i, O(c) &&
            Sb(c.a, null !== c.b ? c.b : ""), a.R(c, !0))
    }
    d.bb = function() {
        this.b = this.h.contentWindow.document.body;
        E(this.b, Bd);
        E(this.b.parentElement, Bd);
        this.j.call(this)
    };

    function Cd(a, b) {
        a.j = b;
        b = document.createElement("IFRAME");
        b.setAttribute("frameborder", "0");
        b.setAttribute("marginwidth", "0");
        b.setAttribute("marginheight", "0");
        b.setAttribute("scrolling", "no");
        b.setAttribute("allowfullscreen", !0);
        b.setAttribute("srcdoc", "");
        b.setAttribute("id", "iframe1");
        var c = a.c();
        c.insertBefore(b, c.childNodes[0] || null);
        a.h = b;
        E(b, Dd);
        x(b, "load", a.bb, !1, a)
    }
    d.B = function(a) {
        S.f.B.call(this, a);
        if (!this.g) {
            var b = xd(this, a);
            this.g = wd(this, b)
        }
        Pb(a);
        E(a, "display", "block")
    };
    d.v = function() {
        throw Error("Method not supported");
    };
    d.qb = function() {
        this.aa()
    };
    d.w = function() {
        S.f.w.call(this);
        G(H(this), this.l, "resize", this.qb)
    };
    var Dd = {
            width: "100%",
            "min-width": "100%",
            "max-width": "100%",
            height: "100%",
            "min-height": "100%",
            "max-height": "100%",
            margin: 0,
            padding: 0,
            border: 0
        },
        Bd = {
            margin: 0,
            padding: 0,
            widht: "100%",
            height: "100%",
            "user-select": "none"
        };

    function Ed() {
        this.m = !1;
        this.delay = 5;
        this.g = !0;
        this.s = [0, 0, 0];
        this.title = this.K = null;
        this.U = this.o = !1;
        this.l = this.T = this.h = !0;
        this.j = !1;
        this.C = []
    }
    Ed.prototype.G = function(a) {
        this.m = R(q(a, "autoplay"), this.m);
        this.delay = parseInt(q(a, "delay", this.delay), 10);
        this.g = R(q(a, "repeat"), this.g);
        var b = q(a, "backgroundColor", "#000000");
        if ("transparent" != b)
            if (l(b)) {
                if (!pc.test(b)) throw Error("'" + b + "' is not a valid hex color");
                4 == b.length && (b = b.replace(mc, "#$1$1$2$2$3$3"));
                b = b.toLowerCase();
                b = [parseInt(b.substr(1, 2), 16), parseInt(b.substr(3, 2), 16), parseInt(b.substr(5, 2), 16)]
            } else b = ca(void 0) ? void 0 : null;
        else b = null;
        this.s = b;
        this.K = ad(q(a, "link"));
        this.title =
            String(q(a, "title") || "");
        this.o = R(q(a, "showLinkButton"), this.o);
        this.U = R(q(a, "showDownloadButton"), this.U);
        this.h = R(q(a, "mediaitemsAspectRatio"), this.h);
        this.T = R(q(a, "mediaitemsEnlarge"), this.T);
        this.l = R(q(a, "mediaitemsStretch"), this.l);
        this.j = R(q(a, "mediaitemsCover"), this.j)
    };

    function Fd() {
        this.a = this.src = this.b = null;
        this.stretch = this.za = this.aspectRatio = !0;
        this.wa = !1
    };

    function T(a, b) {
        this.b = a;
        this.a = b ? b : new Gb(0, 0, 32, 32)
    };

    function U(a, b) {
        M.call(this, b);
        this.b = a || null
    }
    p(U, M);

    function Gd(a, b) {
        a.h = b;
        O(a) && Hd(a)
    }

    function Hd(a) {
        if (ca(a.h)) {
            var b = nc(a.h);
            E(a.a, "fill", b)
        }
    }
    U.prototype.update = function() {
        U.f.update.call(this);
        if (this.b) {
            var a = this.b;
            if (a.a) a = a.a, a = a.a + " " + a.b + " " + a.width + " " + a.height;
            else throw Error();
            var b = this.b.b;
            this.a.setAttribute("viewBox", a);
            this.g.setAttribute("d", b)
        }
        Hd(this)
    };
    U.prototype.u = function() {
        return "jx-svg-image"
    };
    U.prototype.B = function() {
        throw Error("Method not supported");
    };
    U.prototype.v = function() {
        U.f.v.call(this);
        var a = this.c();
        this.g = document.createElementNS("http://www.w3.org/2000/svg", "path");
        this.a = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        this.a.appendChild(this.g);
        a.appendChild(this.a);
        P(this.c(), this.u());
        E(this.a, Id)
    };
    var Id = {
        width: "100%",
        height: "100%"
    };

    function Jd(a, b) {
        M.call(this, b);
        this.a = new U(a || null, this.i);
        this.l = null;
        this.j = !1;
        this.g = !0;
        this.h = !1;
        this.F = .6;
        this.D = 0
    }
    p(Jd, M);

    function Kd(a, b) {
        a.l = b;
        a.j = !1;
        O(a) && Ld(a)
    }

    function Md(a, b) {
        a.g = b;
        O(a) && Nd(a)
    }

    function Od(a) {
        var b = a.h ? 1 : a.F,
            c = a.c();
        E(c, "transition-delay", (a.h ? 0 : .001 * a.D) + "s");
        F(c, b)
    }

    function Nd(a) {
        E(a.c(), "display", a.g ? Pd : "none")
    }

    function Ld(a) {
        if (!a.j) {
            var b = a.c();
            a.l ? b.setAttribute("title", a.l) : b.removeAttribute("title");
            a.j = !0
        }
    }
    d = Jd.prototype;
    d.update = function() {
        Jd.f.update.call(this);
        this.a.update();
        Od(this);
        Nd(this);
        Ld(this)
    };
    d.B = function() {
        throw Error("Method not supported");
    };
    d.u = function() {
        return "jx-svg-button"
    };
    d.Aa = function() {
        var a = this.c();
        P(a, this.u());
        E(a, Qd);
        E(this.a.c(), Rd)
    };
    d.v = function() {
        Jd.f.v.call(this);
        N(this.a);
        I(this.a, this.c());
        this.Aa()
    };
    d.Vb = function(a) {
        this.g && (a.stopPropagation(), a.a(), A(this, "click"))
    };
    d.Wb = function(a) {
        this.g && (a.stopPropagation(), a.a(), this.h = !0, Od(this))
    };
    d.Xb = function(a) {
        this.g && (a.stopPropagation(), a.a(), this.h = !1, Od(this))
    };
    d.w = function() {
        Jd.f.w.call(this);
        var a = H(this);
        G(a, this.c(), "mousedown", this.Vb);
        G(a, this.c(), "mouseenter", this.Wb);
        G(a, this.c(), "mouseleave", this.Xb)
    };
    var Pd = "flex",
        Qd = {
            display: Pd,
            "justify-content": "center",
            "align-items": "center",
            transition: "opacity 0.125s linear"
        },
        Rd = {
            transition: "opacity 0.250s linear"
        };

    function V(a, b) {
        Jd.call(this, a, b);
        this.o = new C(48, 48);
        this.s = !1
    }
    p(V, Jd);

    function Sd(a, b) {
        a.s = b;
        O(a) && Td(a)
    }

    function Td(a) {
        var b = a.o;
        E(a.a.c(), {
            width: (a.s ? .6 * b.width : b.width) + "px",
            height: (a.s ? .6 * b.height : b.height) + "px",
            "border-radius": .5 * Math.min(b.width, b.height) + "px"
        })
    }
    V.prototype.update = function() {
        Td(this);
        V.f.update.call(this)
    };
    V.prototype.u = function() {
        return "jx-svg-round-button"
    };
    V.prototype.Aa = function() {
        var a = this.c();
        P(a, this.u());
        E(a, Ud);
        a = this.a;
        E(a.c(), Vd);
        Gd(a, Wd);
        V.f.Aa.call(this)
    };
    var Ud = {
            overflow: "hidden",
            "tap-highlight-color": "transparent"
        },
        Vd = {
            background: "rgba(66,66,66,0.54)",
            cursor: "pointer"
        },
        Wd = [255, 255, 255];
    var Xd = {
            en: "Open in new window."
        },
        Yd = {
            en: "Download image."
        };

    function Zd(a) {
        Q.call(this, a)
    }
    p(Zd, Q);
    Zd.prototype.$ = function() {};
    Zd.prototype.ta = function() {
        var a = this.isVisible() ? 1 : 0;
        F(this.M, a);
        F(this.O, a);
        F(this.A, a);
        F(this.D, a)
    };

    function $d(a, b) {
        I(b, a.M);
        E(b.c(), ae)
    }

    function be(a, b) {
        I(b, a.O);
        E(b.c(), ce)
    }
    Zd.prototype.B = function(a) {
        Zd.f.B.call(this, a);
        var b = this.i;
        this.M = D(b, "DIV");
        a.appendChild(this.M);
        this.O = D(b, "DIV");
        a.appendChild(this.O);
        this.A = D(b, "DIV");
        a.appendChild(this.A);
        this.D = D(b, "DIV");
        a.appendChild(this.D);
        E(this.M, de);
        E(this.M, ee);
        E(this.O, de);
        E(this.O, fe);
        E(this.A, de);
        E(this.A, ge);
        E(this.D, de);
        E(this.D, he)
    };
    Zd.prototype.v = function() {
        throw Error("Method not supported");
    };
    var de = {
            position: "absolute",
            overflow: "auto",
            transition: "opacity 0.125s linear",
            opacity: 0,
            "z-index": 101
        },
        ee = {
            top: 0,
            left: 0,
            width: "100%",
            height: "64px",
            padding: "12px 0 0 8px",
            background: "linear-gradient(to bottom, rgba(0,0,0,0.33) 0%, rgba(0,0,0,0.02) 88%, rgba(0,0,0,0) 100%)"
        },
        fe = {
            top: 0,
            right: 0,
            margin: "12px 8px 0 0"
        },
        ge = {
            bottom: 0,
            left: 0,
            margin: "0 0 12px 8px"
        },
        he = {
            bottom: 0,
            right: 0,
            margin: "0 8px 12px 0"
        },
        ae = {
            "float": "left",
            "margin-right": "8px"
        },
        ce = {
            "float": "right",
            "margin-left": "8px"
        },
        ie = {
            "float": "left",
            "margin-right": "8px"
        },
        je = {
            "float": "right",
            "margin-left": "8px"
        };
    var ke = window && (window.navigator.a || window.navigator.language).split("-")[0] || "en";

    function le(a) {
        return a[ke] ? a[ke] : a.en ? a.en : "%" + a + "%"
    };

    function me(a) {
        Q.call(this, a);
        a = this.i;
        this.F = new ne(a);
        this.J = new oe(a);
        this.o = new V(pe, a);
        this.l = new V(qe, a)
    }
    p(me, Zd);
    d = me.prototype;
    d.$ = function(a) {
        me.f.$.call(this, a);
        Sd(this.F, a);
        Sd(this.J, a);
        Sd(this.o, a);
        Sd(this.l, a);
        O(this) && (this.F.update(), this.J.update(), this.o.update(), this.l.update())
    };
    d.ia = function(a) {
        Md(this.o, a)
    };
    d.ha = function(a) {
        Md(this.l, a)
    };
    d.update = function() {
        me.f.update.call(this);
        this.F.update();
        this.J.update();
        this.o.update();
        this.l.update()
    };
    d.u = function() {
        return "jx-carousel-controls"
    };
    d.B = function(a) {
        me.f.B.call(this, a);
        N(this.F);
        I(this.F, a);
        N(this.J);
        I(this.J, a);
        N(this.o);
        Kd(this.o, le(Xd));
        be(this, this.o);
        N(this.l);
        Kd(this.l, le(Yd));
        be(this, this.l)
    };
    d.tb = function() {
        A(this, re)
    };
    d.vb = function() {
        A(this, se)
    };
    d.ub = function() {
        A(this, te)
    };
    d.sb = function() {
        A(this, ue)
    };
    d.w = function() {
        me.f.w.call(this);
        var a = H(this);
        G(a, this.F, "click", this.tb);
        G(a, this.J, "click", this.vb);
        G(a, this.o, "click", this.ub);
        G(a, this.l, "click", this.sb)
    };
    var re = "leftarrowclick",
        se = "rightarrowclick",
        te = "linkbuttonclick",
        ue = "downloadbuttonclick";
    var ve = new Gb(-3, -3, 24, 24),
        W = new Gb(-8, -8, 40, 40),
        we = new T("M15.41 16.09l-4.58-4.59 4.58-4.59L14 5.5l-6 6 6 6z", W),
        xe = new T("M8.59 16.34l4.58-4.59-4.58-4.59L10 5.75l6 6-6 6z", W),
        ye = new T("M4.5 11H3v4h4v-1.5H4.5V11zM3 7h1.5V4.5H7V3H3v4zm10.5 6.5H11V15h4v-4h-1.5v2.5zM11 3v1.5h2.5V7H15V3h-4z", ve),
        ze = new T("M3 12.5h2.5V15H7v-4H3v1.5zm2.5-7H3V7h4V3H5.5v2.5zM11 15h1.5v-2.5H15V11h-4v4zm1.5-9.5V3H11v4h4V5.5h-2.5z", ve),
        qe = new T("M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z", W),
        pe = new T("M19 19H5V5h7V3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z",
            W),
        Ae = new T("M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92 1.61 0 2.92-1.31 2.92-2.92s-1.31-2.92-2.92-2.92z", new Gb(-7, -8, 40, 40)),
        Be = new T("M8 5v14l11-7z", W),
        Ce = new T("M6 19h4V5H6v14zm8-14v14h4V5h-4z", W),
        De = new T("M7 7h10v3l4-4-4-4v3H5v6h2V7zm10 10H7v-3l-4 4 4 4v-3h12v-6h-2v4z",
            W),
        Ee = new T("M19 5H5c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 12H5V7h14v10z", W),
        Fe = new T("M19 7H5c-1.1 0-2 .9-2 2v6c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V9c0-1.1-.9-2-2-2zm0 8H5V9h14v6z", W),
        Ge = new T("M10 16.5l6-4.5-6-4.5v9zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z", W),
        He = new T("M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z", W);

    function Ie(a, b, c) {
        M.call(this, c);
        c = this.i;
        this.b = new U(a || null, c);
        this.a = new U(b || null, c);
        this.A = !1;
        this.j = !0;
        this.l = this.o = !1;
        this.g = !0
    }
    p(Ie, M);

    function Je(a, b) {
        a.j = b;
        O(a) && Ke(a)
    }

    function X(a, b) {
        a.l = b;
        O(a) && Le(a)
    }

    function Me(a) {
        var b = a.o ? 1 : .6,
            c = a.c();
        E(c, "transition-delay", (a.o ? 0 : 0) + "s");
        F(c, b)
    }

    function Ke(a) {
        E(a.c(), "display", a.j ? Ne : "none")
    }

    function Le(a) {
        F(a.b.c(), a.l ? 1 : 0);
        F(a.a.c(), a.l ? 0 : 1)
    }
    d = Ie.prototype;
    d.update = function() {
        Ie.f.update.call(this);
        this.b.update();
        this.a.update();
        Me(this);
        Ke(this);
        this.A || (this.c().removeAttribute("title"), this.A = !0);
        Le(this)
    };
    d.B = function() {
        throw Error("Method not supported");
    };
    d.u = function() {
        return "jx-svg-switch"
    };
    d.Ba = function() {
        var a = this.c();
        P(a, this.u());
        E(a, Oe);
        E(this.h, Pe);
        E(this.b.c(), Qe);
        E(this.a.c(), Qe)
    };
    d.v = function() {
        Ie.f.v.call(this);
        this.h = document.createElement("DIV");
        this.c().appendChild(this.h);
        N(this.b);
        I(this.b, this.h);
        N(this.a);
        I(this.a, this.h);
        this.Ba()
    };
    d.Yb = function(a) {
        this.j && (a.stopPropagation(), O(this) && this.g && X(this, !this.l), A(this, "click"))
    };
    d.Zb = function(a) {
        this.j && (a.stopPropagation(), this.o = !0, Me(this))
    };
    d.$b = function(a) {
        this.j && (a.stopPropagation(), this.o = !1, Me(this))
    };
    d.w = function() {
        Ie.f.w.call(this);
        var a = H(this);
        G(a, this.c(), "mousedown", this.Yb);
        G(a, this.c(), "mouseenter", this.Zb);
        G(a, this.c(), "mouseleave", this.$b)
    };
    var Ne = "flex",
        Oe = {
            display: Ne,
            "justify-content": "center",
            "align-items": "center",
            transition: "opacity 0.125s linear"
        },
        Pe = {
            position: "relative",
            width: "320px",
            height: "320px"
        },
        Qe = {
            position: "absolute",
            transition: "opacity 0.250s linear",
            opacity: 0
        };

    function Re(a, b, c) {
        Ie.call(this, a, b, c);
        this.s = !1
    }
    p(Re, Ie);

    function Se(a, b) {
        a.s = b;
        O(a) && Te(a)
    }

    function Te(a) {
        var b = a.s ? 32 : 48;
        b = {
            width: b + "px",
            height: b + "px",
            "border-radius": .5 * b + "px"
        };
        E(a.b.c(), b);
        E(a.a.c(), b);
        E(a.h, b)
    }
    Re.prototype.update = function() {
        Te(this);
        Re.f.update.call(this)
    };
    Re.prototype.u = function() {
        return "jx-svg-round-switch"
    };
    Re.prototype.Ba = function() {
        var a = this.c();
        P(a, this.u());
        E(a, Ue);
        a = this.b;
        var b = this.a;
        E(a.c(), Ve);
        E(b.c(), Ve);
        Gd(a, We);
        Gd(b, We);
        Re.f.Ba.call(this)
    };
    var Ue = {
            overflow: "hidden",
            "tap-highlight-color": "transparent"
        },
        Ve = {
            background: "rgba(66,66,66,0.54)",
            cursor: "pointer"
        },
        We = [255, 255, 255];
    var Xe = {
        en: "Share it."
    };

    function Ye(a) {
        me.call(this, a);
        a = this.i;
        this.j = new V(He, a);
        this.s = new V(Ae, a);
        this.h = new Re(Ce, Be, a);
        this.g = new Re(De, De, a);
        this.a = new Re(Fe, Ee, a);
        this.b = new Re(ze, ye, a)
    }
    p(Ye, me);
    d = Ye.prototype;
    d.$ = function(a) {
        Ye.f.$.call(this, a);
        Sd(this.j, a);
        Sd(this.s, a);
        Se(this.h, a);
        Se(this.g, a);
        Se(this.a, a);
        Se(this.b, a);
        O(this) && (this.j.update(), this.s.update(), this.h.update(), this.g.update(), this.a.update(), this.b.update())
    };
    d.update = function() {
        Ye.f.update.call(this);
        var a = this.b.l;
        Md(this.j, !!rd && !a);
        Je(this.a, !a);
        this.j.update();
        this.s.update();
        this.h.update();
        this.g.update();
        this.a.update();
        this.b.update()
    };
    d.u = function() {
        return "jx-gallery-controls"
    };
    d.B = function(a) {
        Ye.f.B.call(this, a);
        N(this.j);
        $d(this, this.j);
        N(this.s);
        Kd(this.s, le(Xe));
        be(this, this.s);
        N(this.h);
        this.h.g = !1;
        a = this.h;
        I(a, this.A);
        E(a.c(), ie);
        N(this.g);
        this.g.g = !1;
        a = this.g;
        I(a, this.A);
        E(a.c(), ie);
        N(this.b);
        this.b.g = !1;
        a = this.b;
        I(a, this.D);
        E(a.c(), je);
        N(this.a);
        this.a.g = !1;
        a = this.a;
        I(a, this.D);
        E(a.c(), je);
        E(this.j.a.c(), $e);
        Gd(this.g.a, [0, 0, 0]);
        Md(this.s, !1)
    };
    d.Ab = function() {
        A(this, af)
    };
    d.Eb = function() {
        A(this, bf)
    };
    d.Db = function() {
        A(this, cf)
    };
    d.jc = function() {
        A(this, df)
    };
    d.Bb = function() {
        A(this, ef)
    };
    d.Cb = function() {
        A(this, ff)
    };
    d.w = function() {
        Ye.f.w.call(this);
        var a = H(this);
        G(a, this.j, "click", this.Ab);
        G(a, this.s, "click", this.Eb);
        G(a, this.h, "click", this.Db);
        G(a, this.g, "click", this.jc);
        G(a, this.a, "click", this.Bb);
        G(a, this.b, "click", this.Cb)
    };
    var $e = {
            "background-color": "rgba(0, 0, 0, 0)"
        },
        gf = re,
        hf = se,
        jf = te,
        kf = ue,
        af = "backbuttonclick",
        bf = "sharebuttonclick",
        cf = "playswitchclick",
        df = "repeatswitchclick",
        ef = "fullpageswithcclick",
        ff = "fullscreenswithcclick";

    function lf(a) {
        a.webkitRequestFullscreen ? a.webkitRequestFullscreen() : a.mozRequestFullScreen ? a.mozRequestFullScreen() : a.msRequestFullscreen ? a.msRequestFullscreen() : a.requestFullscreen && a.requestFullscreen()
    }

    function mf(a) {
        a = a ? a.a : Jb().a;
        return !!(a.webkitIsFullScreen || a.mozFullScreen || a.msFullscreenElement || a.fullscreenElement)
    };

    function nf(a) {
        V.call(this, this.A(), a)
    }
    p(nf, V);
    nf.prototype.u = function() {
        return "jx-carousel-arrow"
    };
    nf.prototype.b = function() {
        E(this.c(), of);
        this.F = 0;
        this.D = 250
    };
    nf.prototype.B = function() {
        throw Error("Method not supported");
    };
    nf.prototype.v = function() {
        nf.f.v.call(this);
        this.b()
    };
    var of = {
        position: "absolute",
        "z-index": 101,
        top: "64px",
        bottom: "64px",
        width: "64px",
        "box-sizing": "content-box"
    };

    function oe(a) {
        nf.call(this, a)
    }
    p(oe, nf);
    oe.prototype.A = function() {
        return xe
    };
    oe.prototype.b = function() {
        oe.f.b.call(this);
        E(this.c(), pf)
    };
    var pf = {
        right: 0
    };

    function qf(a) {
        z.call(this);
        this.a = a;
        this.m = !1;
        this.i = new Eb;
        this.b = null;
        x(this.a, "touchstart", this.g, !1, this)
    }
    p(qf, z);
    qf.prototype.c = function() {
        return this.a
    };

    function rf(a) {
        a = a.m;
        return da(a) ? "touchend" == a.type || "touchcancel" == a.type ? a.changedTouches : a.targetTouches : [a]
    }
    qf.prototype.g = function(a) {
        this.m = !1;
        a = rf(a);
        if (B(this, "gmultitouchstart")) {
            var b = new sf("gmultitouchstart", this, a);
            A(this, b)
        }
        a && 1 == a.length && (B(this, "gtouchhmove") || B(this, "gtouchvmove") ? (this.i.a = a[0].clientX, this.i.b = a[0].clientY, this.b = null) : B(this, "gtouchstart") && (b = new sf("gtouchstart", this, a), A(this, b)), x(this.a, "touchmove", this.G, !1, this), x(this.a, "touchend", this.C, !1, this))
    };
    qf.prototype.G = function(a) {
        this.m = !0;
        var b = rf(a),
            c = B(this, "gtouchhmove"),
            e = B(this, "gtouchvmove");
        if (c || e) {
            if (!this.b && (this.b = Math.abs(this.i.a - b[0].clientX) > Math.abs(this.i.b - b[0].clientY) ? 1 : 2, B(this, "gtouchstart"))) {
                var f = new sf("gtouchstart", this, b);
                A(this, f)
            }
            c && 1 == this.b && (f = new sf("gtouchhmove", this, b), A(this, f), a.stopPropagation(), a.a());
            e && 2 == this.b && (f = new sf("gtouchvmove", this, b), A(this, f), a.stopPropagation(), a.a())
        }
        B(this, "gtouchmove") && (f = new sf("gtouchmove", this, b), A(this, f), a.a());
        B(this,
            "gmultitouchmove") && (f = new sf("gmultitouchmove", this, b), A(this, f), a.a())
    };
    qf.prototype.C = function(a) {
        a = rf(a);
        if (1 == a.length && (vb(this.a, "touchmove", this.G, !1, this), vb(this.a, "touchend", this.C, !1, this), B(this, "gtouchend"))) {
            var b = new sf("gtouchend", this, a);
            A(this, b)
        }
        B(this, "gmultitouchend") && (b = new sf("gmultitouchend", this, a), A(this, b));
        B(this, "tap") && (this.m || A(this, "tap"));
        this.m = !1
    };

    function sf(a, b, c) {
        v.call(this, a, b);
        this.touches = c
    }
    p(sf, v);

    function tf(a) {
        z.call(this);
        this.i = a;
        this.a = !1;
        this.g = 0;
        this.b = new qf(this.i.c());
        y(this.b, "gtouchstart", this.G, !1, this);
        y(this.b, "gtouchmove", this.C, !1, this);
        y(this.b, "gtouchend", this.m, !1, this)
    }
    p(tf, z);
    tf.prototype.reset = function() {
        this.a = !1;
        this.g = 0
    };
    tf.prototype.G = function(a) {
        a.stopPropagation();
        a.a();
        this.a || (a = a.touches[0].clientX, this.a = !0, this.g = a, A(this, new uf("cgtart", a)))
    };
    tf.prototype.C = function(a) {
        this.a && (a.stopPropagation(), a.a(), A(this, new uf("cgmove", a.touches[0].clientX - this.g)))
    };
    tf.prototype.m = function(a) {
        a.stopPropagation();
        a.a();
        this.a && (A(this, new uf("cgfinish", a.touches[0].clientX - this.g)), this.a = !1)
    };

    function uf(a, b) {
        v.call(this, a);
        this.offset = b
    }
    p(uf, v);

    function vf(a) {
        M.call(this, a);
        this.D = this.A = null;
        this.g = new C(960, 540);
        this.b = this.a = 0;
        this.j = !0;
        this.F = wf;
        this.I = xf;
        this.s = null
    }
    p(vf, M);
    var wf = 250,
        xf = .05;
    d = vf.prototype;
    d.fa = function() {
        return this.A
    };

    function yf(a, b) {
        a.b = b;
        O(a) && zf(a)
    }

    function Af(a) {
        return L(a, a.b)
    }

    function Bf(a) {
        0 < a.a ? yf(a, a.a - 1) : yf(a, K(a) - 1)
    }
    d.play = function() {
        Af(this).T.play()
    };
    d.stop = function() {
        Af(this).T.stop()
    };

    function zd(a) {
        var b = a.D ? nc(a.D) : "transparent";
        E(a.c(), "background-color", b)
    }

    function Cf(a) {
        Yb(a.c(), a.g);
        var b = L(a, a.a);
        null !== b && (Yb(b.c(), a.g), b.update())
    }

    function Df(a) {
        var b = K(a) - 1;
        return a.a == b && 0 == a.b ? -1 : 0 == a.a && a.b == b ? 1 : a.b > a.a ? -1 : 1
    }

    function Ef(a, b) {
        E(a, "transition", !1 !== b ? b : "none")
    }

    function Ff(a) {
        E(L(a, a.b).c(), "z-index", 2);
        E(L(a, a.a).c(), "z-index", 1)
    }

    function Gf(a) {
        Ef(L(a, a.b).c(), !1);
        Ef(L(a, a.a).c(), !1)
    }

    function Hf(a, b, c, e) {
        Yb(b, a.g);
        Wb(b, new Eb(c, 0));
        F(b, e)
    }

    function If(a, b, c, e, f) {
        b = L(a, b);
        Hf(a, b.c(), c, e);
        !0 === f && b.update();
        return b
    }
    d.ic = function() {
        var a = this.g.width * Df(this) * this.I;
        If(this, this.a, 0, 1, !1);
        If(this, this.b, a, 0, !0);
        window.requestAnimationFrame(m(this.Va, this))
    };
    d.Va = function() {
        if (this.j) {
            var a = .001 * this.F + "s";
            Ef(L(this, this.b).c(), "left " + a + " ease-out, opacity " + a + " ease-out");
            Ef(L(this, this.a).c(), "left " + a + " ease-in, opacity " + a + " ease-in")
        }
        qd(If(this, this.a, -this.g.width * Df(this) * this.I, 0, !1));
        pd(If(this, this.b, 0, 1, !this.j));
        this.a = this.b;
        A(this, "index")
    };
    d.Ya = function() {
        clearTimeout(this.s);
        this.s = null
    };

    function zf(a) {
        if (0 != K(a))
            if (a.b != a.a && null != a.a) a.j = !0, null !== a.s && (a.Ya(), a.j = !1), Ff(a), Gf(a), a.j ? window.requestAnimationFrame(m(a.ic, a)) : a.Va(), a.s = setTimeout(m(a.Ya, a), 1.2 * a.F);
            else if (0 == a.a && 0 == a.b) {
            var b = L(a, 0);
            if (b) {
                var c = b.c();
                Hf(a, c, 0, 1);
                E(c, "z-index", 2);
                Ef(c, !1);
                a.a = 0;
                pd(b)
            }
        }
    }
    d.update = function() {
        vf.f.update.call(this);
        zd(this);
        Cf(this);
        zf(this)
    };
    d.R = function(a) {
        vf.f.R.call(this, a, !a.H);
        a = a.c();
        P(a, this.u() + "-child");
        E(a, Jf)
    };
    d.u = function() {
        return "jx-swipe-base"
    };
    d.B = function() {
        throw Error("Method not supported");
    };
    d.v = function() {
        vf.f.v.call(this);
        var a = this.c();
        this.A = D(this.i, "DIV");
        a.appendChild(this.A);
        a = this.c();
        P(a, this.u());
        E(a, Kf);
        a = this.fa();
        P(a, this.u() + "-content");
        E(a, Lf)
    };
    var Kf = {
            position: "relative",
            overflow: "hidden"
        },
        Lf = {
            position: "relative"
        },
        Jf = {
            position: "absolute",
            opacity: 0
        };

    function Mf(a) {
        vf.call(this, a);
        this.h = null;
        this.O = Nf;
        this.J = Of;
        this.M = Pf;
        this.l = null
    }
    p(Mf, vf);
    var Of = 250,
        Pf = .2,
        Nf = 16;

    function Qf(a, b) {
        var c = a.g.width + a.O;
        b *= c;
        c = b + c * a.h;
        Hf(a, L(a, a.a).c(), b, 1);
        Hf(a, L(a, a.b).c(), c, 1)
    }
    d = Mf.prototype;
    d.nc = function() {
        this.l && this.o.reset();
        A(this, "swipestart")
    };
    d.mc = function(a) {
        a = a.offset / this.g.width;
        if (!this.l) {
            var b = 0 <= a ? -1 : 1;
            if (this.h != b) {
                this.h = b;
                b = this.a;
                var c = this.a;
                var e = K(this);
                this.b = c = 1 == this.h ? c >= e - 1 ? 0 : c + 1 : (0 == c ? e : c) - 1;
                Gf(this);
                Ff(this);
                qd(If(this, b, 0, 2));
                pd(If(this, c, 0, 1, !0))
            }
            Qf(this, a)
        }
    };
    d.dc = function() {
        clearTimeout(this.l);
        this.l = null;
        A(this, "swipefinish")
    };
    d.lc = function(a) {
        if (this.h) {
            var b = (a = Math.abs(a.offset / this.g.width) > this.M) ? -this.h : 0,
                c = .001 * this.J + "s";
            Ef(L(this, this.b).c(), "left " + c + " ease-out");
            Ef(L(this, this.a).c(), "left " + c + " ease-out");
            Qf(this, b);
            this.l = setTimeout(m(this.dc, this), 1.2 * this.J);
            this.h = null;
            a && (this.a = this.b, A(this, "index"))
        }
    };
    d.w = function() {
        Mf.f.w.call(this);
        this.o = new tf(this);
        y(this.o, "cgtart", this.nc, !1, this);
        y(this.o, "cgmove", this.mc, !1, this);
        y(this.o, "cgfinish", this.lc, !1, this)
    };

    function Rf(a) {
        M.call(this, a);
        this.a = null;
        this.b = !1
    }
    p(Rf, M);
    d = Rf.prototype;
    d.ja = function(a) {
        this.a = a;
        O(this) && Sf(this)
    };

    function Sf(a) {
        var b = a.c();
        b.style.display = a.a ? "" : "none";
        Sb(b, null !== a.a ? a.a : "")
    }
    d.update = function() {
        Rf.f.update.call(this);
        Sf(this);
        E(this.c(), this.b ? Tf : Uf)
    };
    d.u = function() {
        return "jx-carousel-title"
    };
    d.B = function() {
        throw Error("Method not supported");
    };
    d.v = function() {
        this.m = D(this.i, "DIV");
        var a = this.c();
        P(a, this.u());
        E(a, Vf)
    };
    var Vf = {
            "font-family": '"YouTube Noto", Roboto, Arial, Helvetica, sans-serif',
            "font-weight": "normal",
            "white-space": "nowrap",
            "text-overflow": "ellipsis",
            "max-width": "70vw",
            overflow: "hidden",
            color: "#FFF"
        },
        Uf = {
            "font-size": "18px",
            padding: "12px 0 0 0"
        },
        Tf = {
            "font-size": "14px",
            padding: "6px 0 0 0"
        };

    function Wf(a, b) {
        M.call(this, b);
        this.b = a;
        this.a = this.Ca = !1
    }
    p(Wf, M);

    function Xf(a) {
        E(a.c(), a.a ? Yf : a.Ca ? Zf : $f)
    }
    d = Wf.prototype;
    d.update = function() {
        Wf.f.update.call(this);
        Xf(this)
    };
    d.B = function() {
        E(this.c(), ag)
    };
    d.v = function() {
        Wf.f.v.call(this);
        E(this.c(), ag)
    };
    d.Sa = function(a) {
        a.stopPropagation();
        A(this, new bg("select", this.b))
    };
    d.Ta = function(a) {
        a.stopPropagation();
        this.a = !0;
        Xf(this)
    };
    d.Ua = function(a) {
        a.stopPropagation();
        this.a = !1;
        Xf(this)
    };
    d.w = function() {
        Wf.f.w.call(this);
        var a = H(this),
            b = this.c();
        G(a, b, "click", this.Sa);
        G(a, b, "mouseenter", this.Ta);
        G(a, b, "mouseleave", this.Ua)
    };
    d.ea = function() {
        Wf.f.ea.call(this);
        var a = H(this),
            b = this.c();
        fc(a, b, "click", this.Sa);
        fc(a, b, "mouseenter", this.Ta);
        fc(a, b, "mouseleave", this.Ua)
    };
    d.P = function() {
        Wf.f.P.call(this)
    };
    var ag = {
            width: "8px",
            height: "8px",
            "border-radius": "4px",
            margin: "4px",
            transition: "opacity 0.125s linear"
        },
        $f = {
            opacity: .4
        },
        Yf = {
            opacity: 1
        },
        Zf = {
            opacity: .8
        };

    function bg(a, b) {
        v.call(this, a);
        this.C = b
    }
    p(bg, v);

    function cg(a) {
        M.call(this, a);
        this.b = dg;
        this.g = this.a = 0
    }
    p(cg, M);

    function eg(a) {
        a = lc(a);
        t(a, function(b) {
            Ga(b)
        });
        a = null
    }

    function fg(a) {
        if (a.a != K(a)) {
            eg(a);
            for (var b = a.i, c = 0; c < a.a; c++) {
                var e = new Wf(c, b);
                e.L(!1);
                a.R(e, !0);
                E(e.c(), gg)
            }
        }
    }

    function hg(a) {
        if (ca(a.b)) {
            var b = nc(a.b);
            J(a, function(c) {
                E(c.c(), "background-color", b)
            })
        }
    }

    function ig(a) {
        J(a, function(b, c) {
            c = this.g == c;
            b.Ca != c && (b.Ca = c, O(b) && Xf(b))
        }, a)
    }
    cg.prototype.update = function() {
        cg.f.update.call(this);
        fg(this);
        hg(this);
        ig(this);
        J(this, function(a) {
            a.update()
        })
    };
    cg.prototype.u = function() {
        return "jx-carousel-navigator"
    };
    cg.prototype.B = function() {
        throw Error("Method not supported");
    };
    cg.prototype.v = function() {
        cg.f.v.call(this);
        E(this.c(), jg)
    };
    var jg = {
            width: "100%",
            "text-align": "center"
        },
        gg = {
            display: "inline-block",
            cursor: "pointer"
        },
        dg = [255, 255, 255];

    function ne(a) {
        nf.call(this, a)
    }
    p(ne, nf);
    ne.prototype.A = function() {
        return we
    };
    ne.prototype.b = function() {
        ne.f.b.call(this);
        E(this.c(), kg)
    };
    var kg = {
        left: 0
    };

    function lg(a) {
        M.call(this, a);
        this.b = new Mf(this.i);
        N(this.b);
        this.h = new Bb(this.Oa);
        this.s = !0;
        this.g = this.Ma;
        this.A = this.Na;
        this.I = this.J = !1
    }
    p(lg, M);
    d = lg.prototype;
    d.Oa = 5E3;
    d.Ma = !0;
    d.Na = !0;

    function mg(a) {
        a.g && !a.J && 1 < K(a.b) && a.h.start()
    }
    d.play = function() {
        this.g = !0;
        this.b.play()
    };
    d.stop = function() {
        this.g = !1;
        this.b.stop()
    };
    d.next = function() {
        var a = this.b;
        a.a < K(a) - 1 ? yf(a, a.a + 1) : yf(a, 0);
        ng(this)
    };

    function og(a) {
        var b;
        if (b = !a.A) b = a.b, b = b.b == K(b) - 1;
        b ? a.stop() : a.s && a.next()
    }

    function pg(a) {
        var b = Zb(a.c());
        a = a.b;
        a.g = b;
        O(a) && Cf(a)
    }

    function qg(a) {
        a = a.b.g;
        return 360 >= a.width || 360 >= a.height
    }

    function ng(a) {
        a.J = !1;
        zf(a.b)
    }
    d.X = function() {
        pg(this);
        Cf(this.b)
    };
    d.update = function() {
        lg.f.update.call(this);
        pg(this);
        this.b.update()
    };
    d.B = function() {
        throw Error("Method not supported");
    };
    d.v = function() {
        lg.f.v.call(this);
        this.R(this.b, !0);
        var a = this.c();
        P(a, this.u());
        E(a, rg)
    };
    d.rb = function() {
        og(this);
        this.h.stop()
    };
    d.kb = function() {
        this.s && mg(this);
        this.g && this.b.play()
    };
    d.mb = function() {
        this.J = !0;
        this.h.stop()
    };
    d.lb = function() {
        this.J = !1;
        og(this)
    };
    d.la = function() {
        this.I = !0
    };
    d.ka = function() {
        this.I = !1
    };
    d.w = function() {
        lg.f.w.call(this);
        H(this);
        y(this.h, "tick", this.rb, !1, this);
        var a = this.b;
        y(a, Zc, this.kb, !1, this);
        y(a, Yc, this.mb, !1, this);
        y(a, $c, this.lb, !1, this);
        y(a, "swipestart", this.la, !1, this);
        y(a, "swipefinish", this.ka, !1, this)
    };
    var rg = {
        position: "relative",
        overflow: "hidden",
        width: "100%",
        height: "100%"
    };

    function Y(a) {
        lg.call(this, a);
        a = this.i;
        this.F = new Rf(a);
        this.a = new Ye(a);
        this.V = new md;
        this.M = null;
        this.j = this.l = this.D = !1
    }
    p(Y, lg);
    d = Y.prototype;
    d.Oa = 5E3;
    d.Ma = !1;
    d.Na = !1;
    d.ja = function(a) {
        this.F.ja(a)
    };
    d.Xa = function(a) {
        this.M = a
    };
    d.ia = function(a) {
        this.a.ia(a)
    };
    d.ha = function(a) {
        this.a.ha(a)
    };
    d.play = function() {
        Y.f.play.call(this);
        X(this.a.h, this.g);
        this.a.update()
    };
    d.stop = function() {
        Y.f.stop.call(this);
        X(this.a.h, this.g);
        this.a.update()
    };

    function sg(a) {
        var b = qg(a),
            c = a.F;
        c.b = b;
        O(c) && c.update();
        a.a.$(b)
    }

    function tg(a) {
        var b = a.c();
        B(a, ug) ? A(a, ug) : !rd && b && td(b);
        a.l = a.D = !0;
        a.X()
    }

    function vg(a) {
        B(a, wg) ? A(a, wg) : rd && vd();
        a.l = a.D = !1;
        a.X()
    }
    d.X = function() {
        Y.f.update.call(this);
        sg(this);
        this.F.update();
        this.a.update()
    };
    d.update = function() {
        Y.f.update.call(this);
        sg(this);
        X(this.a.h, this.g);
        X(this.a.g, this.A);
        X(this.a.a, this.D);
        X(this.a.b, this.j);
        this.F.update();
        this.a.update()
    };
    d.u = function() {
        return "jx-gallery"
    };
    d.v = function() {
        Y.f.v.call(this);
        var a = this.b.c();
        N(this.a);
        this.a.Z(a);
        N(this.F);
        $d(this.a, this.F);
        a = this.c();
        P(a, this.u());
        E(a, xg);
        E(this.a.c(), yg);
        mf(this.i)
    };
    d.Nb = function() {
        this.stop();
        Bf(this.b);
        ng(this)
    };
    d.Qb = function() {
        this.stop();
        this.next()
    };
    d.Ob = function() {
        this.M && window.open(this.M, "_blank")
    };
    d.Kb = function() {
        var a = Af(this.b).ga();
        a && window.open(a, "_blank")
    };
    d.Jb = function() {
        this.l = !1;
        console.log("setFullPage", !1, "this.isAllowUpdate()", O(this));
        O(this) && this.l !== this.D && (this.l ? tg(this) : vg(this))
    };
    d.Rb = function() {};
    d.Pb = function() {
        this.g ? this.stop() : this.play()
    };
    d.kc = function() {
        this.A = !this.A;
        X(this.a.g, this.A);
        this.a.update()
    };
    d.Lb = function() {
        this.l ? vg(this) : tg(this);
        X(this.a.a, this.D);
        this.a.update()
    };
    d.Mb = function() {
        if (this.j) {
            var a = (a = this.i) ? a.a : Jb().a;
            a.webkitCancelFullScreen ? a.webkitCancelFullScreen() : a.mozCancelFullScreen ? a.mozCancelFullScreen() : a.msExitFullscreen ? a.msExitFullscreen() : a.exitFullscreen && a.exitFullscreen()
        } else(a = this.c()) && lf(a);
        this.j = !this.j;
        X(this.a.b, this.j);
        this.a.update()
    };
    d.Qa = function() {
        this.s = !1;
        this.h.stop()
    };
    d.Pa = function() {
        this.I || (this.s = !0, mg(this))
    };
    d.la = function(a) {
        Y.f.la.call(this, a);
        this.Qa(a)
    };
    d.ka = function(a) {
        Y.f.ka.call(this, a);
        this.Pa(a)
    };
    d.Sb = function() {
        var a = mf(this.i);
        this.j !== a && (this.j = a, X(this.a.b, this.j), this.a.update());
        this.X()
    };
    d.jb = function(a) {
        switch (a.C) {
            case 37:
                Bf(this.b);
                ng(this);
                break;
            case 39:
                this.next();
                break;
            case 122:
                if (!mf(this.i)) {
                    var b = this.c();
                    b && lf(b)
                }
                a.a();
                break;
            case 80:
                this.g ? this.stop() : this.play();
                break;
            case 27:
                this.l && (vg(this), X(this.a.a, this.D), a.a())
        }
    };
    d.w = function() {
        Y.f.w.call(this);
        y(this.a, gf, this.Nb, !1, this);
        y(this.a, hf, this.Qb, !1, this);
        y(this.a, jf, this.Ob, !1, this);
        y(this.a, kf, this.Kb, !1, this);
        y(this.a, af, this.Jb, !1, this);
        y(this.a, bf, this.Rb, !1, this);
        y(this.a, cf, this.Pb, !1, this);
        y(this.a, df, this.kc, !1, this);
        y(this.a, ef, this.Lb, !1, this);
        y(this.a, ff, this.Mb, !1, this);
        y(this.a, "show", this.Qa, !1, this);
        y(this.a, "hide", this.Pa, !1, this);
        x(this.V, "resize", this.Sb, !1, this);
        x(Lb(this.c()), "keydown", this.jb, !1, this)
    };
    var xg = {
            position: "relative",
            overflow: "hidden",
            width: "100%",
            height: "100%"
        },
        yg = {
            position: "absolute",
            top: 0,
            "z-index": 5
        },
        ug = "reuestfullpage",
        wg = "exitfullpage";

    function zg(a) {
        S.call(this, a);
        this.a = new Y(this.i)
    }
    p(zg, S);
    d = zg.prototype;
    d.ya = function() {
        return new Ag
    };
    d.xa = function() {
        return new Bg
    };

    function Cg(a) {
        var b = a.g;
        a.a.L(!1);
        lc(a.a.b);
        t(b.C, function(c) {
            var e = new od;
            e.L(!1);
            Ad(e, c);
            this.a.b.R(e, !e.H)
        }, a);
        yd(a.a, b);
        Je(a.a.a.g, b.i);
        Je(a.a.a.a, b.a);
        Je(a.a.a.b, b.b);
        a.a.L(!0);
        Db(function() {
            this.a.update()
        }, 0, a)
    }
    d.aa = function() {
        this.a.X()
    };
    d.update = function() {
        Cg(this)
    };
    d.u = function() {
        return "jx-gallery-widget"
    };
    d.B = function(a) {
        zg.f.B.call(this, a);
        P(a, this.u());
        Cd(this, function() {
            I(this.a, this.b)
        }.bind(this))
    };
    d.Ib = function() {
        td(this.h || this.c())
    };
    d.Hb = function() {
        vd()
    };
    d.w = function() {
        zg.f.w.call(this);
        var a = H(this);
        G(a, this.a, ug, this.Ib);
        G(a, this.a, wg, this.Hb)
    };

    function Ag() {
        Ed.call(this);
        this.m = !1;
        this.b = this.a = this.i = !0
    }
    p(Ag, Ed);
    Ag.prototype.G = function(a) {
        Ag.f.G.call(this, a);
        this.i = R(q(a, "showRepeatSwitch"), this.i);
        this.a = R(q(a, "showFullpageSwitch"), this.a);
        this.b = R(q(a, "showFullscreenSwitch"), this.b)
    };

    function Bg() {
        Fd.call(this)
    }
    p(Bg, Fd);
    n("GalleryWidget", zg);
    n("GalleryWidget.prototype.decorate", zg.prototype.Z);
    n("GalleryWidget.prototype.setDataset", zg.prototype.Da);
    n("GalleryWidget.prototype.refresh", zg.prototype.aa);
    n("GalleryWidget.prototype.update", zg.prototype.update);

    function Dg(a) {
        V.call(this, Ge, a)
    }
    p(Dg, V);
    Dg.prototype.v = function() {
        Dg.f.v.call(this);
        E(this.c(), Eg);
        E(this.a.c(), Fg);
        this.o = new C(128, 128);
        O(this) && Td(this)
    };
    Dg.prototype.A = function() {
        Md(this, !1);
        Nd(this);
        A(this, Gg)
    };
    Dg.prototype.b = function(a) {
        a.stopPropagation();
        a.a();
        fc(H(this), this.c(), "click", this.b);
        this.o = new C(256, 256);
        O(this) && Td(this);
        Td(this);
        F(this.a.c(), 0);
        Db(this.A, 360, this)
    };
    Dg.prototype.w = function() {
        Dg.f.w.call(this);
        G(H(this), this.c(), "click", this.b)
    };
    var Eg = {
            position: "absolute",
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
            "z-index": 1001,
            display: "flex",
            "justify-content": "center",
            "align-items": "center"
        },
        Fg = {
            transition: "width 0.36s ease-out,height 0.36s ease-out,opacity 0.36s ease-out"
        },
        Gg = "playerbuttonclick";

    function Hg(a) {
        Y.call(this, a);
        a = this.i;
        this.O = !0;
        this.o = new Dg(a)
    }
    p(Hg, Y);
    d = Hg.prototype;
    d.X = function() {
        Hg.f.update.call(this);
        Sd(this.o, qg(this));
        this.o.update()
    };
    d.update = function() {
        Hg.f.update.call(this);
        Sd(this.o, qg(this));
        this.o.update()
    };
    d.u = function() {
        return "jx-gallery-player"
    };
    d.v = function() {
        Hg.f.v.call(this);
        N(this.o);
        I(this.o, this.a.c());
        var a = this.c();
        P(a, this.u());
        E(a, Ig)
    };
    d.ec = function() {
        this.O && tg(this);
        this.play()
    };
    d.w = function() {
        Hg.f.w.call(this);
        y(this.o, Gg, this.ec, !1, this)
    };
    var Ig = {};

    function Z(a) {
        S.call(this, a);
        this.a = new Hg(this.i)
    }
    p(Z, S);
    d = Z.prototype;
    d.ya = function() {
        return new Jg
    };
    d.xa = function() {
        return new Kg
    };

    function Lg(a) {
        var b = a.g;
        a.a.L(!1);
        lc(a.a.b);
        t(b.C, function(c) {
            var e = new od;
            e.L(!1);
            Ad(e, c);
            this.a.b.R(e, !e.H)
        }, a);
        yd(a.a, b);
        a.a.O = b.N && b.a;
        Je(a.a.a.g, b.i);
        Je(a.a.a.a, b.a);
        Je(a.a.a.b, b.b)
    }
    d.aa = function() {
        this.a.X()
    };
    d.update = function() {
        Lg(this)
    };
    d.u = function() {
        return "jx-gallery-player-widget"
    };
    d.B = function(a) {
        Z.f.B.call(this, a);
        P(a, this.u());
        Cd(this, function() {
            I(this.a, this.b);
            this.a.L(!0);
            this.a.update()
        }.bind(this))
    };
    d.Gb = function() {
        td(this.h || this.c())
    };
    d.Fb = function() {
        vd()
    };
    d.w = function() {
        Z.f.w.call(this);
        var a = H(this);
        G(a, this.a, ug, this.Gb);
        G(a, this.a, wg, this.Fb)
    };

    function Jg() {
        Ed.call(this);
        this.m = !1;
        this.b = this.a = this.i = this.N = this.g = !0
    }
    p(Jg, Ed);
    Jg.prototype.G = function(a) {
        Jg.f.G.call(this, a);
        this.N = R(q(a, "fullpageAutoplay"), this.N);
        this.i = R(q(a, "showRepeatSwitch"), this.i);
        this.a = R(q(a, "showFullpageSwitch"), this.a);
        this.b = R(q(a, "showFullscreenSwitch"), this.b)
    };

    function Kg() {
        Fd.call(this)
    }
    p(Kg, Fd);
    n("GalleryPlayerWidget", Z);
    n("GalleryPlayerWidget.prototype.decorate", Z.prototype.Z);
    n("GalleryPlayerWidget.prototype.setDataset", Z.prototype.Da);
    n("GalleryPlayerWidget.prototype.refresh", Z.prototype.aa);
    n("GalleryPlayerWidget.prototype.update", Z.prototype.update);
    var Mg = {
        La: "decorated",
        ab: function(a, b) {
            a.call().Z(b)
        },
        cb: function(a, b) {
            q(b, Mg.La, !1) || (Mg.ab(a, b), b[Mg.La] = !0)
        },
        da: function(a, b, c) {
            t(Mb(a, c), function(e) {
                Mg.cb(b, e)
            })
        }
    };

    function Ng(a) {
        lg.call(this, a);
        a = this.i;
        this.l = new Rf(a);
        this.a = new me(a);
        this.j = new cg(a);
        this.o = null
    }
    p(Ng, lg);
    d = Ng.prototype;
    d.ja = function(a) {
        this.l.ja(a)
    };
    d.Xa = function(a) {
        this.o = a
    };
    d.ia = function(a) {
        this.a.ia(a)
    };
    d.ha = function(a) {
        this.a.ha(a)
    };

    function Og(a) {
        var b = qg(a),
            c = a.l;
        c.b = b;
        O(c) && c.update();
        a.a.$(b)
    }
    d.X = function() {
        Ng.f.X.call(this);
        Og(this);
        this.l.update();
        this.a.update()
    };
    d.update = function() {
        Ng.f.update.call(this);
        Og(this);
        this.l.update();
        this.a.update();
        var a = K(this.b),
            b = this.j;
        b.a = 1 < a && 12 >= a ? K(this.b) : 0;
        O(b) && fg(b);
        this.j.update()
    };
    d.u = function() {
        return "jx-carousel"
    };
    d.v = function() {
        Ng.f.v.call(this);
        var a = this.b.c();
        N(this.a);
        this.a.Z(a);
        N(this.l);
        $d(this.a, this.l);
        N(this.j);
        I(this.j, a);
        a = this.c();
        P(a, this.u());
        E(a, Pg);
        E(this.a.c(), Qg);
        E(this.j.c(), Rg)
    };
    d.xb = function() {
        this.stop();
        Bf(this.b);
        ng(this)
    };
    d.zb = function() {
        this.stop();
        this.next()
    };
    d.yb = function() {
        this.o && window.open(this.o, "_blank")
    };
    d.wb = function() {
        var a = Af(this.b).ga();
        a && window.open(a, "_blank")
    };
    d.$a = function() {
        var a = this.j;
        a.g = this.b.b;
        O(a) && ig(a);
        this.j.update()
    };
    d.eb = function(a) {
        a = a.C;
        a != this.b.b && (this.a.isVisible() || (this.h.stop(), mg(this)), yf(this.b, a), ng(this))
    };
    d.Ka = function() {
        this.s = !1;
        this.h.stop()
    };
    d.Ja = function() {
        this.I || (this.play(), this.s = !0, mg(this))
    };
    d.la = function(a) {
        Ng.f.la.call(this, a);
        this.Ka(a)
    };
    d.ka = function(a) {
        Ng.f.ka.call(this, a);
        this.Ja(a)
    };
    d.w = function() {
        Ng.f.w.call(this);
        y(this.a, gf, this.xb, !1, this);
        y(this.a, hf, this.zb, !1, this);
        y(this.a, te, this.yb, !1, this);
        y(this.a, ue, this.wb, !1, this);
        y(this.a, "show", this.Ka, !1, this);
        y(this.a, "hide", this.Ja, !1, this);
        y(this.j, "select", this.eb, !1, this);
        y(this.b, "index", this.$a, !1, this)
    };
    var Pg = {
            position: "relative",
            overflow: "hidden",
            width: "100%",
            height: "100%"
        },
        Qg = {
            position: "absolute",
            top: 0,
            "z-index": 2
        },
        Rg = {
            position: "absolute",
            bottom: "64px",
            "z-index": 101
        };

    function Sg(a) {
        S.call(this, a);
        this.a = new Ng(this.i)
    }
    p(Sg, S);
    d = Sg.prototype;
    d.ya = function() {
        return new Tg
    };
    d.xa = function() {
        return new Ug
    };

    function Vg(a) {
        var b = a.g;
        a.a.L(!0);
        lc(a.a.b);
        t(b.C, function(c) {
            var e = new od;
            e.L(!1);
            Ad(e, c);
            this.a.b.R(e, !e.H)
        }, a);
        yd(a.a, b);
        a.a.L(!0);
        Db(function() {
            this.a.update()
        }, 0, a)
    }
    d.aa = function() {
        this.a.X()
    };
    d.update = function() {
        Vg(this)
    };
    d.u = function() {
        return "jx-carousel-widget"
    };
    d.B = function(a) {
        Sg.f.B.call(this, a);
        P(a, this.u());
        Cd(this, function() {
            I(this.a, this.b)
        }.bind(this))
    };

    function Tg() {
        Ed.call(this);
        this.m = !0
    }
    p(Tg, Ed);

    function Ug() {
        Fd.call(this)
    }
    p(Ug, Fd);
    n("CarouselWidget", Sg);
    n("CarouselWidget.prototype.decorate", Sg.prototype.Z);
    n("CarouselWidget.prototype.setDataset", Sg.prototype.Da);
    n("CarouselWidget.prototype.refresh", Sg.prototype.aa);
    n("CarouselWidget.prototype.update", Sg.prototype.update);

    function Wg() {
        Mg.da("pa-carousel-widget", function() {
            return new Sg
        });
        Mg.da("pa-gallery-widget", function() {
            return new zg
        });
        Mg.da("pa-gallery-player-widget", function() {
            return new Z
        });
        Mg.da("pa-embed-player", function() {
            return new Z
        })
    }
    x(document, "DOMContentLoaded", Wg);
    Wg();
    n("WidgetDecorator", Mg);
    n("WidgetDecorator.decorateAll", Mg.da);
}).call(this);