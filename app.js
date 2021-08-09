! function(e) {
    var t = {};

    function n(i) { if (t[i]) return t[i].exports; var o = t[i] = { i: i, l: !1, exports: {} }; return e[i].call(o.exports, o, o.exports, n), o.l = !0, o.exports }
    n.m = e, n.c = t, n.d = function(e, t, i) { n.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: i }) }, n.r = function(e) { "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(e, "__esModule", { value: !0 }) }, n.t = function(e, t) {
        if (1 & t && (e = n(e)), 8 & t) return e;
        if (4 & t && "object" == typeof e && e && e.__esModule) return e;
        var i = Object.create(null);
        if (n.r(i), Object.defineProperty(i, "default", { enumerable: !0, value: e }), 2 & t && "string" != typeof e)
            for (var o in e) n.d(i, o, function(t) { return e[t] }.bind(null, o));
        return i
    }, n.n = function(e) { var t = e && e.__esModule ? function() { return e.default } : function() { return e }; return n.d(t, "a", t), t }, n.o = function(e, t) { return Object.prototype.hasOwnProperty.call(e, t) }, n.p = "", n(n.s = 11)
}([function(e, t, n) {
    var i;
    /*!
     * jQuery JavaScript Library v3.5.1
     * https://jquery.com/
     *
     * Includes Sizzle.js
     * https://sizzlejs.com/
     *
     * Copyright JS Foundation and other contributors
     * Released under the MIT license
     * https://jquery.org/license
     *
     * Date: 2020-05-04T22:49Z
     */
    ! function(t, n) { "use strict"; "object" == typeof e.exports ? e.exports = t.document ? n(t, !0) : function(e) { if (!e.document) throw new Error("jQuery requires a window with a document"); return n(e) } : n(t) }("undefined" != typeof window ? window : this, (function(n, o) {
        "use strict";
        var r = [],
            s = Object.getPrototypeOf,
            a = r.slice,
            l = r.flat ? function(e) { return r.flat.call(e) } : function(e) { return r.concat.apply([], e) },
            c = r.push,
            u = r.indexOf,
            d = {},
            p = d.toString,
            h = d.hasOwnProperty,
            f = h.toString,
            m = f.call(Object),
            g = {},
            v = function(e) { return "function" == typeof e && "number" != typeof e.nodeType },
            y = function(e) { return null != e && e === e.window },
            b = n.document,
            w = { type: !0, src: !0, nonce: !0, noModule: !0 };

        function k(e, t, n) {
            var i, o, r = (n = n || b).createElement("script");
            if (r.text = e, t)
                for (i in w)(o = t[i] || t.getAttribute && t.getAttribute(i)) && r.setAttribute(i, o);
            n.head.appendChild(r).parentNode.removeChild(r)
        }

        function T(e) { return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? d[p.call(e)] || "object" : typeof e }
        var x = function(e, t) { return new x.fn.init(e, t) };

        function S(e) {
            var t = !!e && "length" in e && e.length,
                n = T(e);
            return !v(e) && !y(e) && ("array" === n || 0 === t || "number" == typeof t && t > 0 && t - 1 in e)
        }
        x.fn = x.prototype = {
            jquery: "3.5.1",
            constructor: x,
            length: 0,
            toArray: function() { return a.call(this) },
            get: function(e) { return null == e ? a.call(this) : e < 0 ? this[e + this.length] : this[e] },
            pushStack: function(e) { var t = x.merge(this.constructor(), e); return t.prevObject = this, t },
            each: function(e) { return x.each(this, e) },
            map: function(e) { return this.pushStack(x.map(this, (function(t, n) { return e.call(t, n, t) }))) },
            slice: function() { return this.pushStack(a.apply(this, arguments)) },
            first: function() { return this.eq(0) },
            last: function() { return this.eq(-1) },
            even: function() { return this.pushStack(x.grep(this, (function(e, t) { return (t + 1) % 2 }))) },
            odd: function() { return this.pushStack(x.grep(this, (function(e, t) { return t % 2 }))) },
            eq: function(e) {
                var t = this.length,
                    n = +e + (e < 0 ? t : 0);
                return this.pushStack(n >= 0 && n < t ? [this[n]] : [])
            },
            end: function() { return this.prevObject || this.constructor() },
            push: c,
            sort: r.sort,
            splice: r.splice
        }, x.extend = x.fn.extend = function() {
            var e, t, n, i, o, r, s = arguments[0] || {},
                a = 1,
                l = arguments.length,
                c = !1;
            for ("boolean" == typeof s && (c = s, s = arguments[a] || {}, a++), "object" == typeof s || v(s) || (s = {}), a === l && (s = this, a--); a < l; a++)
                if (null != (e = arguments[a]))
                    for (t in e) i = e[t], "__proto__" !== t && s !== i && (c && i && (x.isPlainObject(i) || (o = Array.isArray(i))) ? (n = s[t], r = o && !Array.isArray(n) ? [] : o || x.isPlainObject(n) ? n : {}, o = !1, s[t] = x.extend(c, r, i)) : void 0 !== i && (s[t] = i));
            return s
        }, x.extend({
            expando: "jQuery" + ("3.5.1" + Math.random()).replace(/\D/g, ""),
            isReady: !0,
            error: function(e) { throw new Error(e) },
            noop: function() {},
            isPlainObject: function(e) { var t, n; return !(!e || "[object Object]" !== p.call(e)) && (!(t = s(e)) || "function" == typeof(n = h.call(t, "constructor") && t.constructor) && f.call(n) === m) },
            isEmptyObject: function(e) { var t; for (t in e) return !1; return !0 },
            globalEval: function(e, t, n) { k(e, { nonce: t && t.nonce }, n) },
            each: function(e, t) {
                var n, i = 0;
                if (S(e))
                    for (n = e.length; i < n && !1 !== t.call(e[i], i, e[i]); i++);
                else
                    for (i in e)
                        if (!1 === t.call(e[i], i, e[i])) break; return e
            },
            makeArray: function(e, t) { var n = t || []; return null != e && (S(Object(e)) ? x.merge(n, "string" == typeof e ? [e] : e) : c.call(n, e)), n },
            inArray: function(e, t, n) { return null == t ? -1 : u.call(t, e, n) },
            merge: function(e, t) { for (var n = +t.length, i = 0, o = e.length; i < n; i++) e[o++] = t[i]; return e.length = o, e },
            grep: function(e, t, n) { for (var i = [], o = 0, r = e.length, s = !n; o < r; o++) !t(e[o], o) !== s && i.push(e[o]); return i },
            map: function(e, t, n) {
                var i, o, r = 0,
                    s = [];
                if (S(e))
                    for (i = e.length; r < i; r++) null != (o = t(e[r], r, n)) && s.push(o);
                else
                    for (r in e) null != (o = t(e[r], r, n)) && s.push(o);
                return l(s)
            },
            guid: 1,
            support: g
        }), "function" == typeof Symbol && (x.fn[Symbol.iterator] = r[Symbol.iterator]), x.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), (function(e, t) { d["[object " + t + "]"] = t.toLowerCase() }));
        var C =
            /*!
             * Sizzle CSS Selector Engine v2.3.5
             * https://sizzlejs.com/
             *
             * Copyright JS Foundation and other contributors
             * Released under the MIT license
             * https://js.foundation/
             *
             * Date: 2020-03-14
             */
            function(e) {
                var t, n, i, o, r, s, a, l, c, u, d, p, h, f, m, g, v, y, b, w = "sizzle" + 1 * new Date,
                    k = e.document,
                    T = 0,
                    x = 0,
                    S = le(),
                    C = le(),
                    A = le(),
                    E = le(),
                    P = function(e, t) { return e === t && (d = !0), 0 },
                    N = {}.hasOwnProperty,
                    O = [],
                    L = O.pop,
                    M = O.push,
                    $ = O.push,
                    j = O.slice,
                    D = function(e, t) {
                        for (var n = 0, i = e.length; n < i; n++)
                            if (e[n] === t) return n;
                        return -1
                    },
                    I = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
                    H = "[\\x20\\t\\r\\n\\f]",
                    q = "(?:\\\\[\\da-fA-F]{1,6}" + H + "?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",
                    _ = "\\[" + H + "*(" + q + ")(?:" + H + "*([*^$|!~]?=)" + H + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + q + "))|)" + H + "*\\]",
                    R = ":(" + q + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + _ + ")*)|.*)\\)|)",
                    F = new RegExp(H + "+", "g"),
                    z = new RegExp("^" + H + "+|((?:^|[^\\\\])(?:\\\\.)*)" + H + "+$", "g"),
                    W = new RegExp("^" + H + "*," + H + "*"),
                    B = new RegExp("^" + H + "*([>+~]|" + H + ")" + H + "*"),
                    U = new RegExp(H + "|>"),
                    V = new RegExp(R),
                    X = new RegExp("^" + q + "$"),
                    Y = { ID: new RegExp("^#(" + q + ")"), CLASS: new RegExp("^\\.(" + q + ")"), TAG: new RegExp("^(" + q + "|[*])"), ATTR: new RegExp("^" + _), PSEUDO: new RegExp("^" + R), CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + H + "*(even|odd|(([+-]|)(\\d*)n|)" + H + "*(?:([+-]|)" + H + "*(\\d+)|))" + H + "*\\)|)", "i"), bool: new RegExp("^(?:" + I + ")$", "i"), needsContext: new RegExp("^" + H + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + H + "*((?:-\\d)?\\d*)" + H + "*\\)|)(?=[^-]|$)", "i") },
                    K = /HTML$/i,
                    Q = /^(?:input|select|textarea|button)$/i,
                    G = /^h\d$/i,
                    J = /^[^{]+\{\s*\[native \w/,
                    Z = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
                    ee = /[+~]/,
                    te = new RegExp("\\\\[\\da-fA-F]{1,6}" + H + "?|\\\\([^\\r\\n\\f])", "g"),
                    ne = function(e, t) { var n = "0x" + e.slice(1) - 65536; return t || (n < 0 ? String.fromCharCode(n + 65536) : String.fromCharCode(n >> 10 | 55296, 1023 & n | 56320)) },
                    ie = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
                    oe = function(e, t) { return t ? "\0" === e ? "�" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e },
                    re = function() { p() },
                    se = we((function(e) { return !0 === e.disabled && "fieldset" === e.nodeName.toLowerCase() }), { dir: "parentNode", next: "legend" });
                try { $.apply(O = j.call(k.childNodes), k.childNodes), O[k.childNodes.length].nodeType } catch (e) {
                    $ = {
                        apply: O.length ? function(e, t) { M.apply(e, j.call(t)) } : function(e, t) {
                            for (var n = e.length, i = 0; e[n++] = t[i++];);
                            e.length = n - 1
                        }
                    }
                }

                function ae(e, t, i, o) {
                    var r, a, c, u, d, f, v, y = t && t.ownerDocument,
                        k = t ? t.nodeType : 9;
                    if (i = i || [], "string" != typeof e || !e || 1 !== k && 9 !== k && 11 !== k) return i;
                    if (!o && (p(t), t = t || h, m)) {
                        if (11 !== k && (d = Z.exec(e)))
                            if (r = d[1]) { if (9 === k) { if (!(c = t.getElementById(r))) return i; if (c.id === r) return i.push(c), i } else if (y && (c = y.getElementById(r)) && b(t, c) && c.id === r) return i.push(c), i } else { if (d[2]) return $.apply(i, t.getElementsByTagName(e)), i; if ((r = d[3]) && n.getElementsByClassName && t.getElementsByClassName) return $.apply(i, t.getElementsByClassName(r)), i }
                        if (n.qsa && !E[e + " "] && (!g || !g.test(e)) && (1 !== k || "object" !== t.nodeName.toLowerCase())) {
                            if (v = e, y = t, 1 === k && (U.test(e) || B.test(e))) {
                                for ((y = ee.test(e) && ve(t.parentNode) || t) === t && n.scope || ((u = t.getAttribute("id")) ? u = u.replace(ie, oe) : t.setAttribute("id", u = w)), a = (f = s(e)).length; a--;) f[a] = (u ? "#" + u : ":scope") + " " + be(f[a]);
                                v = f.join(",")
                            }
                            try { return $.apply(i, y.querySelectorAll(v)), i } catch (t) { E(e, !0) } finally { u === w && t.removeAttribute("id") }
                        }
                    }
                    return l(e.replace(z, "$1"), t, i, o)
                }

                function le() { var e = []; return function t(n, o) { return e.push(n + " ") > i.cacheLength && delete t[e.shift()], t[n + " "] = o } }

                function ce(e) { return e[w] = !0, e }

                function ue(e) { var t = h.createElement("fieldset"); try { return !!e(t) } catch (e) { return !1 } finally { t.parentNode && t.parentNode.removeChild(t), t = null } }

                function de(e, t) { for (var n = e.split("|"), o = n.length; o--;) i.attrHandle[n[o]] = t }

                function pe(e, t) {
                    var n = t && e,
                        i = n && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;
                    if (i) return i;
                    if (n)
                        for (; n = n.nextSibling;)
                            if (n === t) return -1;
                    return e ? 1 : -1
                }

                function he(e) { return function(t) { return "input" === t.nodeName.toLowerCase() && t.type === e } }

                function fe(e) { return function(t) { var n = t.nodeName.toLowerCase(); return ("input" === n || "button" === n) && t.type === e } }

                function me(e) { return function(t) { return "form" in t ? t.parentNode && !1 === t.disabled ? "label" in t ? "label" in t.parentNode ? t.parentNode.disabled === e : t.disabled === e : t.isDisabled === e || t.isDisabled !== !e && se(t) === e : t.disabled === e : "label" in t && t.disabled === e } }

                function ge(e) { return ce((function(t) { return t = +t, ce((function(n, i) { for (var o, r = e([], n.length, t), s = r.length; s--;) n[o = r[s]] && (n[o] = !(i[o] = n[o])) })) })) }

                function ve(e) { return e && void 0 !== e.getElementsByTagName && e }
                for (t in n = ae.support = {}, r = ae.isXML = function(e) {
                        var t = e.namespaceURI,
                            n = (e.ownerDocument || e).documentElement;
                        return !K.test(t || n && n.nodeName || "HTML")
                    }, p = ae.setDocument = function(e) {
                        var t, o, s = e ? e.ownerDocument || e : k;
                        return s != h && 9 === s.nodeType && s.documentElement ? (f = (h = s).documentElement, m = !r(h), k != h && (o = h.defaultView) && o.top !== o && (o.addEventListener ? o.addEventListener("unload", re, !1) : o.attachEvent && o.attachEvent("onunload", re)), n.scope = ue((function(e) { return f.appendChild(e).appendChild(h.createElement("div")), void 0 !== e.querySelectorAll && !e.querySelectorAll(":scope fieldset div").length })), n.attributes = ue((function(e) { return e.className = "i", !e.getAttribute("className") })), n.getElementsByTagName = ue((function(e) { return e.appendChild(h.createComment("")), !e.getElementsByTagName("*").length })), n.getElementsByClassName = J.test(h.getElementsByClassName), n.getById = ue((function(e) { return f.appendChild(e).id = w, !h.getElementsByName || !h.getElementsByName(w).length })), n.getById ? (i.filter.ID = function(e) { var t = e.replace(te, ne); return function(e) { return e.getAttribute("id") === t } }, i.find.ID = function(e, t) { if (void 0 !== t.getElementById && m) { var n = t.getElementById(e); return n ? [n] : [] } }) : (i.filter.ID = function(e) { var t = e.replace(te, ne); return function(e) { var n = void 0 !== e.getAttributeNode && e.getAttributeNode("id"); return n && n.value === t } }, i.find.ID = function(e, t) {
                            if (void 0 !== t.getElementById && m) {
                                var n, i, o, r = t.getElementById(e);
                                if (r) {
                                    if ((n = r.getAttributeNode("id")) && n.value === e) return [r];
                                    for (o = t.getElementsByName(e), i = 0; r = o[i++];)
                                        if ((n = r.getAttributeNode("id")) && n.value === e) return [r]
                                }
                                return []
                            }
                        }), i.find.TAG = n.getElementsByTagName ? function(e, t) { return void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e) : n.qsa ? t.querySelectorAll(e) : void 0 } : function(e, t) {
                            var n, i = [],
                                o = 0,
                                r = t.getElementsByTagName(e);
                            if ("*" === e) { for (; n = r[o++];) 1 === n.nodeType && i.push(n); return i }
                            return r
                        }, i.find.CLASS = n.getElementsByClassName && function(e, t) { if (void 0 !== t.getElementsByClassName && m) return t.getElementsByClassName(e) }, v = [], g = [], (n.qsa = J.test(h.querySelectorAll)) && (ue((function(e) {
                            var t;
                            f.appendChild(e).innerHTML = "<a id='" + w + "'></a><select id='" + w + "-\r\\' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && g.push("[*^$]=" + H + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || g.push("\\[" + H + "*(?:value|" + I + ")"), e.querySelectorAll("[id~=" + w + "-]").length || g.push("~="), (t = h.createElement("input")).setAttribute("name", ""), e.appendChild(t), e.querySelectorAll("[name='']").length || g.push("\\[" + H + "*name" + H + "*=" + H + "*(?:''|\"\")"), e.querySelectorAll(":checked").length || g.push(":checked"), e.querySelectorAll("a#" + w + "+*").length || g.push(".#.+[+~]"), e.querySelectorAll("\\\f"), g.push("[\\r\\n\\f]")
                        })), ue((function(e) {
                            e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                            var t = h.createElement("input");
                            t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && g.push("name" + H + "*[*^$|!~]?="), 2 !== e.querySelectorAll(":enabled").length && g.push(":enabled", ":disabled"), f.appendChild(e).disabled = !0, 2 !== e.querySelectorAll(":disabled").length && g.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), g.push(",.*:")
                        }))), (n.matchesSelector = J.test(y = f.matches || f.webkitMatchesSelector || f.mozMatchesSelector || f.oMatchesSelector || f.msMatchesSelector)) && ue((function(e) { n.disconnectedMatch = y.call(e, "*"), y.call(e, "[s!='']:x"), v.push("!=", R) })), g = g.length && new RegExp(g.join("|")), v = v.length && new RegExp(v.join("|")), t = J.test(f.compareDocumentPosition), b = t || J.test(f.contains) ? function(e, t) {
                            var n = 9 === e.nodeType ? e.documentElement : e,
                                i = t && t.parentNode;
                            return e === i || !(!i || 1 !== i.nodeType || !(n.contains ? n.contains(i) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(i)))
                        } : function(e, t) {
                            if (t)
                                for (; t = t.parentNode;)
                                    if (t === e) return !0;
                            return !1
                        }, P = t ? function(e, t) { if (e === t) return d = !0, 0; var i = !e.compareDocumentPosition - !t.compareDocumentPosition; return i || (1 & (i = (e.ownerDocument || e) == (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !n.sortDetached && t.compareDocumentPosition(e) === i ? e == h || e.ownerDocument == k && b(k, e) ? -1 : t == h || t.ownerDocument == k && b(k, t) ? 1 : u ? D(u, e) - D(u, t) : 0 : 4 & i ? -1 : 1) } : function(e, t) {
                            if (e === t) return d = !0, 0;
                            var n, i = 0,
                                o = e.parentNode,
                                r = t.parentNode,
                                s = [e],
                                a = [t];
                            if (!o || !r) return e == h ? -1 : t == h ? 1 : o ? -1 : r ? 1 : u ? D(u, e) - D(u, t) : 0;
                            if (o === r) return pe(e, t);
                            for (n = e; n = n.parentNode;) s.unshift(n);
                            for (n = t; n = n.parentNode;) a.unshift(n);
                            for (; s[i] === a[i];) i++;
                            return i ? pe(s[i], a[i]) : s[i] == k ? -1 : a[i] == k ? 1 : 0
                        }, h) : h
                    }, ae.matches = function(e, t) { return ae(e, null, null, t) }, ae.matchesSelector = function(e, t) {
                        if (p(e), n.matchesSelector && m && !E[t + " "] && (!v || !v.test(t)) && (!g || !g.test(t))) try { var i = y.call(e, t); if (i || n.disconnectedMatch || e.document && 11 !== e.document.nodeType) return i } catch (e) { E(t, !0) }
                        return ae(t, h, null, [e]).length > 0
                    }, ae.contains = function(e, t) { return (e.ownerDocument || e) != h && p(e), b(e, t) }, ae.attr = function(e, t) {
                        (e.ownerDocument || e) != h && p(e);
                        var o = i.attrHandle[t.toLowerCase()],
                            r = o && N.call(i.attrHandle, t.toLowerCase()) ? o(e, t, !m) : void 0;
                        return void 0 !== r ? r : n.attributes || !m ? e.getAttribute(t) : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
                    }, ae.escape = function(e) { return (e + "").replace(ie, oe) }, ae.error = function(e) { throw new Error("Syntax error, unrecognized expression: " + e) }, ae.uniqueSort = function(e) {
                        var t, i = [],
                            o = 0,
                            r = 0;
                        if (d = !n.detectDuplicates, u = !n.sortStable && e.slice(0), e.sort(P), d) { for (; t = e[r++];) t === e[r] && (o = i.push(r)); for (; o--;) e.splice(i[o], 1) }
                        return u = null, e
                    }, o = ae.getText = function(e) {
                        var t, n = "",
                            i = 0,
                            r = e.nodeType;
                        if (r) { if (1 === r || 9 === r || 11 === r) { if ("string" == typeof e.textContent) return e.textContent; for (e = e.firstChild; e; e = e.nextSibling) n += o(e) } else if (3 === r || 4 === r) return e.nodeValue } else
                            for (; t = e[i++];) n += o(t);
                        return n
                    }, (i = ae.selectors = {
                        cacheLength: 50,
                        createPseudo: ce,
                        match: Y,
                        attrHandle: {},
                        find: {},
                        relative: { ">": { dir: "parentNode", first: !0 }, " ": { dir: "parentNode" }, "+": { dir: "previousSibling", first: !0 }, "~": { dir: "previousSibling" } },
                        preFilter: { ATTR: function(e) { return e[1] = e[1].replace(te, ne), e[3] = (e[3] || e[4] || e[5] || "").replace(te, ne), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4) }, CHILD: function(e) { return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || ae.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && ae.error(e[0]), e }, PSEUDO: function(e) { var t, n = !e[6] && e[2]; return Y.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && V.test(n) && (t = s(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3)) } },
                        filter: {
                            TAG: function(e) { var t = e.replace(te, ne).toLowerCase(); return "*" === e ? function() { return !0 } : function(e) { return e.nodeName && e.nodeName.toLowerCase() === t } },
                            CLASS: function(e) { var t = S[e + " "]; return t || (t = new RegExp("(^|" + H + ")" + e + "(" + H + "|$)")) && S(e, (function(e) { return t.test("string" == typeof e.className && e.className || void 0 !== e.getAttribute && e.getAttribute("class") || "") })) },
                            ATTR: function(e, t, n) { return function(i) { var o = ae.attr(i, e); return null == o ? "!=" === t : !t || (o += "", "=" === t ? o === n : "!=" === t ? o !== n : "^=" === t ? n && 0 === o.indexOf(n) : "*=" === t ? n && o.indexOf(n) > -1 : "$=" === t ? n && o.slice(-n.length) === n : "~=" === t ? (" " + o.replace(F, " ") + " ").indexOf(n) > -1 : "|=" === t && (o === n || o.slice(0, n.length + 1) === n + "-")) } },
                            CHILD: function(e, t, n, i, o) {
                                var r = "nth" !== e.slice(0, 3),
                                    s = "last" !== e.slice(-4),
                                    a = "of-type" === t;
                                return 1 === i && 0 === o ? function(e) { return !!e.parentNode } : function(t, n, l) {
                                    var c, u, d, p, h, f, m = r !== s ? "nextSibling" : "previousSibling",
                                        g = t.parentNode,
                                        v = a && t.nodeName.toLowerCase(),
                                        y = !l && !a,
                                        b = !1;
                                    if (g) {
                                        if (r) {
                                            for (; m;) {
                                                for (p = t; p = p[m];)
                                                    if (a ? p.nodeName.toLowerCase() === v : 1 === p.nodeType) return !1;
                                                f = m = "only" === e && !f && "nextSibling"
                                            }
                                            return !0
                                        }
                                        if (f = [s ? g.firstChild : g.lastChild], s && y) {
                                            for (b = (h = (c = (u = (d = (p = g)[w] || (p[w] = {}))[p.uniqueID] || (d[p.uniqueID] = {}))[e] || [])[0] === T && c[1]) && c[2], p = h && g.childNodes[h]; p = ++h && p && p[m] || (b = h = 0) || f.pop();)
                                                if (1 === p.nodeType && ++b && p === t) { u[e] = [T, h, b]; break }
                                        } else if (y && (b = h = (c = (u = (d = (p = t)[w] || (p[w] = {}))[p.uniqueID] || (d[p.uniqueID] = {}))[e] || [])[0] === T && c[1]), !1 === b)
                                            for (;
                                                (p = ++h && p && p[m] || (b = h = 0) || f.pop()) && ((a ? p.nodeName.toLowerCase() !== v : 1 !== p.nodeType) || !++b || (y && ((u = (d = p[w] || (p[w] = {}))[p.uniqueID] || (d[p.uniqueID] = {}))[e] = [T, b]), p !== t)););
                                        return (b -= o) === i || b % i == 0 && b / i >= 0
                                    }
                                }
                            },
                            PSEUDO: function(e, t) { var n, o = i.pseudos[e] || i.setFilters[e.toLowerCase()] || ae.error("unsupported pseudo: " + e); return o[w] ? o(t) : o.length > 1 ? (n = [e, e, "", t], i.setFilters.hasOwnProperty(e.toLowerCase()) ? ce((function(e, n) { for (var i, r = o(e, t), s = r.length; s--;) e[i = D(e, r[s])] = !(n[i] = r[s]) })) : function(e) { return o(e, 0, n) }) : o }
                        },
                        pseudos: {
                            not: ce((function(e) {
                                var t = [],
                                    n = [],
                                    i = a(e.replace(z, "$1"));
                                return i[w] ? ce((function(e, t, n, o) { for (var r, s = i(e, null, o, []), a = e.length; a--;)(r = s[a]) && (e[a] = !(t[a] = r)) })) : function(e, o, r) { return t[0] = e, i(t, null, r, n), t[0] = null, !n.pop() }
                            })),
                            has: ce((function(e) { return function(t) { return ae(e, t).length > 0 } })),
                            contains: ce((function(e) {
                                return e = e.replace(te, ne),
                                    function(t) { return (t.textContent || o(t)).indexOf(e) > -1 }
                            })),
                            lang: ce((function(e) {
                                return X.test(e || "") || ae.error("unsupported lang: " + e), e = e.replace(te, ne).toLowerCase(),
                                    function(t) {
                                        var n;
                                        do { if (n = m ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return (n = n.toLowerCase()) === e || 0 === n.indexOf(e + "-") } while ((t = t.parentNode) && 1 === t.nodeType);
                                        return !1
                                    }
                            })),
                            target: function(t) { var n = e.location && e.location.hash; return n && n.slice(1) === t.id },
                            root: function(e) { return e === f },
                            focus: function(e) { return e === h.activeElement && (!h.hasFocus || h.hasFocus()) && !!(e.type || e.href || ~e.tabIndex) },
                            enabled: me(!1),
                            disabled: me(!0),
                            checked: function(e) { var t = e.nodeName.toLowerCase(); return "input" === t && !!e.checked || "option" === t && !!e.selected },
                            selected: function(e) { return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected },
                            empty: function(e) {
                                for (e = e.firstChild; e; e = e.nextSibling)
                                    if (e.nodeType < 6) return !1;
                                return !0
                            },
                            parent: function(e) { return !i.pseudos.empty(e) },
                            header: function(e) { return G.test(e.nodeName) },
                            input: function(e) { return Q.test(e.nodeName) },
                            button: function(e) { var t = e.nodeName.toLowerCase(); return "input" === t && "button" === e.type || "button" === t },
                            text: function(e) { var t; return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase()) },
                            first: ge((function() { return [0] })),
                            last: ge((function(e, t) { return [t - 1] })),
                            eq: ge((function(e, t, n) { return [n < 0 ? n + t : n] })),
                            even: ge((function(e, t) { for (var n = 0; n < t; n += 2) e.push(n); return e })),
                            odd: ge((function(e, t) { for (var n = 1; n < t; n += 2) e.push(n); return e })),
                            lt: ge((function(e, t, n) { for (var i = n < 0 ? n + t : n > t ? t : n; --i >= 0;) e.push(i); return e })),
                            gt: ge((function(e, t, n) { for (var i = n < 0 ? n + t : n; ++i < t;) e.push(i); return e }))
                        }
                    }).pseudos.nth = i.pseudos.eq, { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }) i.pseudos[t] = he(t);
                for (t in { submit: !0, reset: !0 }) i.pseudos[t] = fe(t);

                function ye() {}

                function be(e) { for (var t = 0, n = e.length, i = ""; t < n; t++) i += e[t].value; return i }

                function we(e, t, n) {
                    var i = t.dir,
                        o = t.next,
                        r = o || i,
                        s = n && "parentNode" === r,
                        a = x++;
                    return t.first ? function(t, n, o) {
                        for (; t = t[i];)
                            if (1 === t.nodeType || s) return e(t, n, o);
                        return !1
                    } : function(t, n, l) {
                        var c, u, d, p = [T, a];
                        if (l) {
                            for (; t = t[i];)
                                if ((1 === t.nodeType || s) && e(t, n, l)) return !0
                        } else
                            for (; t = t[i];)
                                if (1 === t.nodeType || s)
                                    if (u = (d = t[w] || (t[w] = {}))[t.uniqueID] || (d[t.uniqueID] = {}), o && o === t.nodeName.toLowerCase()) t = t[i] || t;
                                    else { if ((c = u[r]) && c[0] === T && c[1] === a) return p[2] = c[2]; if (u[r] = p, p[2] = e(t, n, l)) return !0 } return !1
                    }
                }

                function ke(e) {
                    return e.length > 1 ? function(t, n, i) {
                        for (var o = e.length; o--;)
                            if (!e[o](t, n, i)) return !1;
                        return !0
                    } : e[0]
                }

                function Te(e, t, n, i, o) { for (var r, s = [], a = 0, l = e.length, c = null != t; a < l; a++)(r = e[a]) && (n && !n(r, i, o) || (s.push(r), c && t.push(a))); return s }

                function xe(e, t, n, i, o, r) {
                    return i && !i[w] && (i = xe(i)), o && !o[w] && (o = xe(o, r)), ce((function(r, s, a, l) {
                        var c, u, d, p = [],
                            h = [],
                            f = s.length,
                            m = r || function(e, t, n) { for (var i = 0, o = t.length; i < o; i++) ae(e, t[i], n); return n }(t || "*", a.nodeType ? [a] : a, []),
                            g = !e || !r && t ? m : Te(m, p, e, a, l),
                            v = n ? o || (r ? e : f || i) ? [] : s : g;
                        if (n && n(g, v, a, l), i)
                            for (c = Te(v, h), i(c, [], a, l), u = c.length; u--;)(d = c[u]) && (v[h[u]] = !(g[h[u]] = d));
                        if (r) {
                            if (o || e) {
                                if (o) {
                                    for (c = [], u = v.length; u--;)(d = v[u]) && c.push(g[u] = d);
                                    o(null, v = [], c, l)
                                }
                                for (u = v.length; u--;)(d = v[u]) && (c = o ? D(r, d) : p[u]) > -1 && (r[c] = !(s[c] = d))
                            }
                        } else v = Te(v === s ? v.splice(f, v.length) : v), o ? o(null, s, v, l) : $.apply(s, v)
                    }))
                }

                function Se(e) {
                    for (var t, n, o, r = e.length, s = i.relative[e[0].type], a = s || i.relative[" "], l = s ? 1 : 0, u = we((function(e) { return e === t }), a, !0), d = we((function(e) { return D(t, e) > -1 }), a, !0), p = [function(e, n, i) { var o = !s && (i || n !== c) || ((t = n).nodeType ? u(e, n, i) : d(e, n, i)); return t = null, o }]; l < r; l++)
                        if (n = i.relative[e[l].type]) p = [we(ke(p), n)];
                        else {
                            if ((n = i.filter[e[l].type].apply(null, e[l].matches))[w]) { for (o = ++l; o < r && !i.relative[e[o].type]; o++); return xe(l > 1 && ke(p), l > 1 && be(e.slice(0, l - 1).concat({ value: " " === e[l - 2].type ? "*" : "" })).replace(z, "$1"), n, l < o && Se(e.slice(l, o)), o < r && Se(e = e.slice(o)), o < r && be(e)) }
                            p.push(n)
                        }
                    return ke(p)
                }
                return ye.prototype = i.filters = i.pseudos, i.setFilters = new ye, s = ae.tokenize = function(e, t) { var n, o, r, s, a, l, c, u = C[e + " "]; if (u) return t ? 0 : u.slice(0); for (a = e, l = [], c = i.preFilter; a;) { for (s in n && !(o = W.exec(a)) || (o && (a = a.slice(o[0].length) || a), l.push(r = [])), n = !1, (o = B.exec(a)) && (n = o.shift(), r.push({ value: n, type: o[0].replace(z, " ") }), a = a.slice(n.length)), i.filter) !(o = Y[s].exec(a)) || c[s] && !(o = c[s](o)) || (n = o.shift(), r.push({ value: n, type: s, matches: o }), a = a.slice(n.length)); if (!n) break } return t ? a.length : a ? ae.error(e) : C(e, l).slice(0) }, a = ae.compile = function(e, t) {
                    var n, o = [],
                        r = [],
                        a = A[e + " "];
                    if (!a) {
                        for (t || (t = s(e)), n = t.length; n--;)(a = Se(t[n]))[w] ? o.push(a) : r.push(a);
                        (a = A(e, function(e, t) {
                            var n = t.length > 0,
                                o = e.length > 0,
                                r = function(r, s, a, l, u) {
                                    var d, f, g, v = 0,
                                        y = "0",
                                        b = r && [],
                                        w = [],
                                        k = c,
                                        x = r || o && i.find.TAG("*", u),
                                        S = T += null == k ? 1 : Math.random() || .1,
                                        C = x.length;
                                    for (u && (c = s == h || s || u); y !== C && null != (d = x[y]); y++) {
                                        if (o && d) {
                                            for (f = 0, s || d.ownerDocument == h || (p(d), a = !m); g = e[f++];)
                                                if (g(d, s || h, a)) { l.push(d); break }
                                            u && (T = S)
                                        }
                                        n && ((d = !g && d) && v--, r && b.push(d))
                                    }
                                    if (v += y, n && y !== v) {
                                        for (f = 0; g = t[f++];) g(b, w, s, a);
                                        if (r) {
                                            if (v > 0)
                                                for (; y--;) b[y] || w[y] || (w[y] = L.call(l));
                                            w = Te(w)
                                        }
                                        $.apply(l, w), u && !r && w.length > 0 && v + t.length > 1 && ae.uniqueSort(l)
                                    }
                                    return u && (T = S, c = k), b
                                };
                            return n ? ce(r) : r
                        }(r, o))).selector = e
                    }
                    return a
                }, l = ae.select = function(e, t, n, o) {
                    var r, l, c, u, d, p = "function" == typeof e && e,
                        h = !o && s(e = p.selector || e);
                    if (n = n || [], 1 === h.length) {
                        if ((l = h[0] = h[0].slice(0)).length > 2 && "ID" === (c = l[0]).type && 9 === t.nodeType && m && i.relative[l[1].type]) {
                            if (!(t = (i.find.ID(c.matches[0].replace(te, ne), t) || [])[0])) return n;
                            p && (t = t.parentNode), e = e.slice(l.shift().value.length)
                        }
                        for (r = Y.needsContext.test(e) ? 0 : l.length; r-- && (c = l[r], !i.relative[u = c.type]);)
                            if ((d = i.find[u]) && (o = d(c.matches[0].replace(te, ne), ee.test(l[0].type) && ve(t.parentNode) || t))) { if (l.splice(r, 1), !(e = o.length && be(l))) return $.apply(n, o), n; break }
                    }
                    return (p || a(e, h))(o, t, !m, n, !t || ee.test(e) && ve(t.parentNode) || t), n
                }, n.sortStable = w.split("").sort(P).join("") === w, n.detectDuplicates = !!d, p(), n.sortDetached = ue((function(e) { return 1 & e.compareDocumentPosition(h.createElement("fieldset")) })), ue((function(e) { return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href") })) || de("type|href|height|width", (function(e, t, n) { if (!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2) })), n.attributes && ue((function(e) { return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value") })) || de("value", (function(e, t, n) { if (!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue })), ue((function(e) { return null == e.getAttribute("disabled") })) || de(I, (function(e, t, n) { var i; if (!n) return !0 === e[t] ? t.toLowerCase() : (i = e.getAttributeNode(t)) && i.specified ? i.value : null })), ae
            }(n);
        x.find = C, x.expr = C.selectors, x.expr[":"] = x.expr.pseudos, x.uniqueSort = x.unique = C.uniqueSort, x.text = C.getText, x.isXMLDoc = C.isXML, x.contains = C.contains, x.escapeSelector = C.escape;
        var A = function(e, t, n) {
                for (var i = [], o = void 0 !== n;
                    (e = e[t]) && 9 !== e.nodeType;)
                    if (1 === e.nodeType) {
                        if (o && x(e).is(n)) break;
                        i.push(e)
                    }
                return i
            },
            E = function(e, t) { for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e); return n },
            P = x.expr.match.needsContext;

        function N(e, t) { return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase() }
        var O = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;

        function L(e, t, n) { return v(t) ? x.grep(e, (function(e, i) { return !!t.call(e, i, e) !== n })) : t.nodeType ? x.grep(e, (function(e) { return e === t !== n })) : "string" != typeof t ? x.grep(e, (function(e) { return u.call(t, e) > -1 !== n })) : x.filter(t, e, n) }
        x.filter = function(e, t, n) { var i = t[0]; return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === i.nodeType ? x.find.matchesSelector(i, e) ? [i] : [] : x.find.matches(e, x.grep(t, (function(e) { return 1 === e.nodeType }))) }, x.fn.extend({
            find: function(e) {
                var t, n, i = this.length,
                    o = this;
                if ("string" != typeof e) return this.pushStack(x(e).filter((function() {
                    for (t = 0; t < i; t++)
                        if (x.contains(o[t], this)) return !0
                })));
                for (n = this.pushStack([]), t = 0; t < i; t++) x.find(e, o[t], n);
                return i > 1 ? x.uniqueSort(n) : n
            },
            filter: function(e) { return this.pushStack(L(this, e || [], !1)) },
            not: function(e) { return this.pushStack(L(this, e || [], !0)) },
            is: function(e) { return !!L(this, "string" == typeof e && P.test(e) ? x(e) : e || [], !1).length }
        });
        var M, $ = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
        (x.fn.init = function(e, t, n) {
            var i, o;
            if (!e) return this;
            if (n = n || M, "string" == typeof e) {
                if (!(i = "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3 ? [null, e, null] : $.exec(e)) || !i[1] && t) return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
                if (i[1]) {
                    if (t = t instanceof x ? t[0] : t, x.merge(this, x.parseHTML(i[1], t && t.nodeType ? t.ownerDocument || t : b, !0)), O.test(i[1]) && x.isPlainObject(t))
                        for (i in t) v(this[i]) ? this[i](t[i]) : this.attr(i, t[i]);
                    return this
                }
                return (o = b.getElementById(i[2])) && (this[0] = o, this.length = 1), this
            }
            return e.nodeType ? (this[0] = e, this.length = 1, this) : v(e) ? void 0 !== n.ready ? n.ready(e) : e(x) : x.makeArray(e, this)
        }).prototype = x.fn, M = x(b);
        var j = /^(?:parents|prev(?:Until|All))/,
            D = { children: !0, contents: !0, next: !0, prev: !0 };

        function I(e, t) {
            for (;
                (e = e[t]) && 1 !== e.nodeType;);
            return e
        }
        x.fn.extend({
            has: function(e) {
                var t = x(e, this),
                    n = t.length;
                return this.filter((function() {
                    for (var e = 0; e < n; e++)
                        if (x.contains(this, t[e])) return !0
                }))
            },
            closest: function(e, t) {
                var n, i = 0,
                    o = this.length,
                    r = [],
                    s = "string" != typeof e && x(e);
                if (!P.test(e))
                    for (; i < o; i++)
                        for (n = this[i]; n && n !== t; n = n.parentNode)
                            if (n.nodeType < 11 && (s ? s.index(n) > -1 : 1 === n.nodeType && x.find.matchesSelector(n, e))) { r.push(n); break }
                return this.pushStack(r.length > 1 ? x.uniqueSort(r) : r)
            },
            index: function(e) { return e ? "string" == typeof e ? u.call(x(e), this[0]) : u.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1 },
            add: function(e, t) { return this.pushStack(x.uniqueSort(x.merge(this.get(), x(e, t)))) },
            addBack: function(e) { return this.add(null == e ? this.prevObject : this.prevObject.filter(e)) }
        }), x.each({ parent: function(e) { var t = e.parentNode; return t && 11 !== t.nodeType ? t : null }, parents: function(e) { return A(e, "parentNode") }, parentsUntil: function(e, t, n) { return A(e, "parentNode", n) }, next: function(e) { return I(e, "nextSibling") }, prev: function(e) { return I(e, "previousSibling") }, nextAll: function(e) { return A(e, "nextSibling") }, prevAll: function(e) { return A(e, "previousSibling") }, nextUntil: function(e, t, n) { return A(e, "nextSibling", n) }, prevUntil: function(e, t, n) { return A(e, "previousSibling", n) }, siblings: function(e) { return E((e.parentNode || {}).firstChild, e) }, children: function(e) { return E(e.firstChild) }, contents: function(e) { return null != e.contentDocument && s(e.contentDocument) ? e.contentDocument : (N(e, "template") && (e = e.content || e), x.merge([], e.childNodes)) } }, (function(e, t) { x.fn[e] = function(n, i) { var o = x.map(this, t, n); return "Until" !== e.slice(-5) && (i = n), i && "string" == typeof i && (o = x.filter(i, o)), this.length > 1 && (D[e] || x.uniqueSort(o), j.test(e) && o.reverse()), this.pushStack(o) } }));
        var H = /[^\x20\t\r\n\f]+/g;

        function q(e) { return e }

        function _(e) { throw e }

        function R(e, t, n, i) { var o; try { e && v(o = e.promise) ? o.call(e).done(t).fail(n) : e && v(o = e.then) ? o.call(e, t, n) : t.apply(void 0, [e].slice(i)) } catch (e) { n.apply(void 0, [e]) } }
        x.Callbacks = function(e) {
            e = "string" == typeof e ? function(e) { var t = {}; return x.each(e.match(H) || [], (function(e, n) { t[n] = !0 })), t }(e) : x.extend({}, e);
            var t, n, i, o, r = [],
                s = [],
                a = -1,
                l = function() {
                    for (o = o || e.once, i = t = !0; s.length; a = -1)
                        for (n = s.shift(); ++a < r.length;) !1 === r[a].apply(n[0], n[1]) && e.stopOnFalse && (a = r.length, n = !1);
                    e.memory || (n = !1), t = !1, o && (r = n ? [] : "")
                },
                c = {
                    add: function() { return r && (n && !t && (a = r.length - 1, s.push(n)), function t(n) { x.each(n, (function(n, i) { v(i) ? e.unique && c.has(i) || r.push(i) : i && i.length && "string" !== T(i) && t(i) })) }(arguments), n && !t && l()), this },
                    remove: function() {
                        return x.each(arguments, (function(e, t) {
                            for (var n;
                                (n = x.inArray(t, r, n)) > -1;) r.splice(n, 1), n <= a && a--
                        })), this
                    },
                    has: function(e) { return e ? x.inArray(e, r) > -1 : r.length > 0 },
                    empty: function() { return r && (r = []), this },
                    disable: function() { return o = s = [], r = n = "", this },
                    disabled: function() { return !r },
                    lock: function() { return o = s = [], n || t || (r = n = ""), this },
                    locked: function() { return !!o },
                    fireWith: function(e, n) { return o || (n = [e, (n = n || []).slice ? n.slice() : n], s.push(n), t || l()), this },
                    fire: function() { return c.fireWith(this, arguments), this },
                    fired: function() { return !!i }
                };
            return c
        }, x.extend({
            Deferred: function(e) {
                var t = [
                        ["notify", "progress", x.Callbacks("memory"), x.Callbacks("memory"), 2],
                        ["resolve", "done", x.Callbacks("once memory"), x.Callbacks("once memory"), 0, "resolved"],
                        ["reject", "fail", x.Callbacks("once memory"), x.Callbacks("once memory"), 1, "rejected"]
                    ],
                    i = "pending",
                    o = {
                        state: function() { return i },
                        always: function() { return r.done(arguments).fail(arguments), this },
                        catch: function(e) { return o.then(null, e) },
                        pipe: function() {
                            var e = arguments;
                            return x.Deferred((function(n) {
                                x.each(t, (function(t, i) {
                                    var o = v(e[i[4]]) && e[i[4]];
                                    r[i[1]]((function() {
                                        var e = o && o.apply(this, arguments);
                                        e && v(e.promise) ? e.promise().progress(n.notify).done(n.resolve).fail(n.reject) : n[i[0] + "With"](this, o ? [e] : arguments)
                                    }))
                                })), e = null
                            })).promise()
                        },
                        then: function(e, i, o) {
                            var r = 0;

                            function s(e, t, i, o) {
                                return function() {
                                    var a = this,
                                        l = arguments,
                                        c = function() {
                                            var n, c;
                                            if (!(e < r)) {
                                                if ((n = i.apply(a, l)) === t.promise()) throw new TypeError("Thenable self-resolution");
                                                c = n && ("object" == typeof n || "function" == typeof n) && n.then, v(c) ? o ? c.call(n, s(r, t, q, o), s(r, t, _, o)) : (r++, c.call(n, s(r, t, q, o), s(r, t, _, o), s(r, t, q, t.notifyWith))) : (i !== q && (a = void 0, l = [n]), (o || t.resolveWith)(a, l))
                                            }
                                        },
                                        u = o ? c : function() { try { c() } catch (n) { x.Deferred.exceptionHook && x.Deferred.exceptionHook(n, u.stackTrace), e + 1 >= r && (i !== _ && (a = void 0, l = [n]), t.rejectWith(a, l)) } };
                                    e ? u() : (x.Deferred.getStackHook && (u.stackTrace = x.Deferred.getStackHook()), n.setTimeout(u))
                                }
                            }
                            return x.Deferred((function(n) { t[0][3].add(s(0, n, v(o) ? o : q, n.notifyWith)), t[1][3].add(s(0, n, v(e) ? e : q)), t[2][3].add(s(0, n, v(i) ? i : _)) })).promise()
                        },
                        promise: function(e) { return null != e ? x.extend(e, o) : o }
                    },
                    r = {};
                return x.each(t, (function(e, n) {
                    var s = n[2],
                        a = n[5];
                    o[n[1]] = s.add, a && s.add((function() { i = a }), t[3 - e][2].disable, t[3 - e][3].disable, t[0][2].lock, t[0][3].lock), s.add(n[3].fire), r[n[0]] = function() { return r[n[0] + "With"](this === r ? void 0 : this, arguments), this }, r[n[0] + "With"] = s.fireWith
                })), o.promise(r), e && e.call(r, r), r
            },
            when: function(e) {
                var t = arguments.length,
                    n = t,
                    i = Array(n),
                    o = a.call(arguments),
                    r = x.Deferred(),
                    s = function(e) { return function(n) { i[e] = this, o[e] = arguments.length > 1 ? a.call(arguments) : n, --t || r.resolveWith(i, o) } };
                if (t <= 1 && (R(e, r.done(s(n)).resolve, r.reject, !t), "pending" === r.state() || v(o[n] && o[n].then))) return r.then();
                for (; n--;) R(o[n], s(n), r.reject);
                return r.promise()
            }
        });
        var F = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
        x.Deferred.exceptionHook = function(e, t) { n.console && n.console.warn && e && F.test(e.name) && n.console.warn("jQuery.Deferred exception: " + e.message, e.stack, t) }, x.readyException = function(e) { n.setTimeout((function() { throw e })) };
        var z = x.Deferred();

        function W() { b.removeEventListener("DOMContentLoaded", W), n.removeEventListener("load", W), x.ready() }
        x.fn.ready = function(e) { return z.then(e).catch((function(e) { x.readyException(e) })), this }, x.extend({
            isReady: !1,
            readyWait: 1,
            ready: function(e) {
                (!0 === e ? --x.readyWait : x.isReady) || (x.isReady = !0, !0 !== e && --x.readyWait > 0 || z.resolveWith(b, [x]))
            }
        }), x.ready.then = z.then, "complete" === b.readyState || "loading" !== b.readyState && !b.documentElement.doScroll ? n.setTimeout(x.ready) : (b.addEventListener("DOMContentLoaded", W), n.addEventListener("load", W));
        var B = function(e, t, n, i, o, r, s) {
                var a = 0,
                    l = e.length,
                    c = null == n;
                if ("object" === T(n))
                    for (a in o = !0, n) B(e, t, a, n[a], !0, r, s);
                else if (void 0 !== i && (o = !0, v(i) || (s = !0), c && (s ? (t.call(e, i), t = null) : (c = t, t = function(e, t, n) { return c.call(x(e), n) })), t))
                    for (; a < l; a++) t(e[a], n, s ? i : i.call(e[a], a, t(e[a], n)));
                return o ? e : c ? t.call(e) : l ? t(e[0], n) : r
            },
            U = /^-ms-/,
            V = /-([a-z])/g;

        function X(e, t) { return t.toUpperCase() }

        function Y(e) { return e.replace(U, "ms-").replace(V, X) }
        var K = function(e) { return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType };

        function Q() { this.expando = x.expando + Q.uid++ }
        Q.uid = 1, Q.prototype = {
            cache: function(e) { var t = e[this.expando]; return t || (t = {}, K(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, { value: t, configurable: !0 }))), t },
            set: function(e, t, n) {
                var i, o = this.cache(e);
                if ("string" == typeof t) o[Y(t)] = n;
                else
                    for (i in t) o[Y(i)] = t[i];
                return o
            },
            get: function(e, t) { return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][Y(t)] },
            access: function(e, t, n) { return void 0 === t || t && "string" == typeof t && void 0 === n ? this.get(e, t) : (this.set(e, t, n), void 0 !== n ? n : t) },
            remove: function(e, t) { var n, i = e[this.expando]; if (void 0 !== i) { if (void 0 !== t) { n = (t = Array.isArray(t) ? t.map(Y) : (t = Y(t)) in i ? [t] : t.match(H) || []).length; for (; n--;) delete i[t[n]] }(void 0 === t || x.isEmptyObject(i)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando]) } },
            hasData: function(e) { var t = e[this.expando]; return void 0 !== t && !x.isEmptyObject(t) }
        };
        var G = new Q,
            J = new Q,
            Z = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
            ee = /[A-Z]/g;

        function te(e, t, n) {
            var i;
            if (void 0 === n && 1 === e.nodeType)
                if (i = "data-" + t.replace(ee, "-$&").toLowerCase(), "string" == typeof(n = e.getAttribute(i))) {
                    try { n = function(e) { return "true" === e || "false" !== e && ("null" === e ? null : e === +e + "" ? +e : Z.test(e) ? JSON.parse(e) : e) }(n) } catch (e) {}
                    J.set(e, t, n)
                } else n = void 0;
            return n
        }
        x.extend({ hasData: function(e) { return J.hasData(e) || G.hasData(e) }, data: function(e, t, n) { return J.access(e, t, n) }, removeData: function(e, t) { J.remove(e, t) }, _data: function(e, t, n) { return G.access(e, t, n) }, _removeData: function(e, t) { G.remove(e, t) } }), x.fn.extend({
            data: function(e, t) {
                var n, i, o, r = this[0],
                    s = r && r.attributes;
                if (void 0 === e) {
                    if (this.length && (o = J.get(r), 1 === r.nodeType && !G.get(r, "hasDataAttrs"))) {
                        for (n = s.length; n--;) s[n] && 0 === (i = s[n].name).indexOf("data-") && (i = Y(i.slice(5)), te(r, i, o[i]));
                        G.set(r, "hasDataAttrs", !0)
                    }
                    return o
                }
                return "object" == typeof e ? this.each((function() { J.set(this, e) })) : B(this, (function(t) {
                    var n;
                    if (r && void 0 === t) return void 0 !== (n = J.get(r, e)) || void 0 !== (n = te(r, e)) ? n : void 0;
                    this.each((function() { J.set(this, e, t) }))
                }), null, t, arguments.length > 1, null, !0)
            },
            removeData: function(e) { return this.each((function() { J.remove(this, e) })) }
        }), x.extend({
            queue: function(e, t, n) { var i; if (e) return t = (t || "fx") + "queue", i = G.get(e, t), n && (!i || Array.isArray(n) ? i = G.access(e, t, x.makeArray(n)) : i.push(n)), i || [] },
            dequeue: function(e, t) {
                t = t || "fx";
                var n = x.queue(e, t),
                    i = n.length,
                    o = n.shift(),
                    r = x._queueHooks(e, t);
                "inprogress" === o && (o = n.shift(), i--), o && ("fx" === t && n.unshift("inprogress"), delete r.stop, o.call(e, (function() { x.dequeue(e, t) }), r)), !i && r && r.empty.fire()
            },
            _queueHooks: function(e, t) { var n = t + "queueHooks"; return G.get(e, n) || G.access(e, n, { empty: x.Callbacks("once memory").add((function() { G.remove(e, [t + "queue", n]) })) }) }
        }), x.fn.extend({
            queue: function(e, t) {
                var n = 2;
                return "string" != typeof e && (t = e, e = "fx", n--), arguments.length < n ? x.queue(this[0], e) : void 0 === t ? this : this.each((function() {
                    var n = x.queue(this, e, t);
                    x._queueHooks(this, e), "fx" === e && "inprogress" !== n[0] && x.dequeue(this, e)
                }))
            },
            dequeue: function(e) { return this.each((function() { x.dequeue(this, e) })) },
            clearQueue: function(e) { return this.queue(e || "fx", []) },
            promise: function(e, t) {
                var n, i = 1,
                    o = x.Deferred(),
                    r = this,
                    s = this.length,
                    a = function() {--i || o.resolveWith(r, [r]) };
                for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; s--;)(n = G.get(r[s], e + "queueHooks")) && n.empty && (i++, n.empty.add(a));
                return a(), o.promise(t)
            }
        });
        var ne = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
            ie = new RegExp("^(?:([+-])=|)(" + ne + ")([a-z%]*)$", "i"),
            oe = ["Top", "Right", "Bottom", "Left"],
            re = b.documentElement,
            se = function(e) { return x.contains(e.ownerDocument, e) },
            ae = { composed: !0 };
        re.getRootNode && (se = function(e) { return x.contains(e.ownerDocument, e) || e.getRootNode(ae) === e.ownerDocument });
        var le = function(e, t) { return "none" === (e = t || e).style.display || "" === e.style.display && se(e) && "none" === x.css(e, "display") };

        function ce(e, t, n, i) {
            var o, r, s = 20,
                a = i ? function() { return i.cur() } : function() { return x.css(e, t, "") },
                l = a(),
                c = n && n[3] || (x.cssNumber[t] ? "" : "px"),
                u = e.nodeType && (x.cssNumber[t] || "px" !== c && +l) && ie.exec(x.css(e, t));
            if (u && u[3] !== c) {
                for (l /= 2, c = c || u[3], u = +l || 1; s--;) x.style(e, t, u + c), (1 - r) * (1 - (r = a() / l || .5)) <= 0 && (s = 0), u /= r;
                u *= 2, x.style(e, t, u + c), n = n || []
            }
            return n && (u = +u || +l || 0, o = n[1] ? u + (n[1] + 1) * n[2] : +n[2], i && (i.unit = c, i.start = u, i.end = o)), o
        }
        var ue = {};

        function de(e) {
            var t, n = e.ownerDocument,
                i = e.nodeName,
                o = ue[i];
            return o || (t = n.body.appendChild(n.createElement(i)), o = x.css(t, "display"), t.parentNode.removeChild(t), "none" === o && (o = "block"), ue[i] = o, o)
        }

        function pe(e, t) { for (var n, i, o = [], r = 0, s = e.length; r < s; r++)(i = e[r]).style && (n = i.style.display, t ? ("none" === n && (o[r] = G.get(i, "display") || null, o[r] || (i.style.display = "")), "" === i.style.display && le(i) && (o[r] = de(i))) : "none" !== n && (o[r] = "none", G.set(i, "display", n))); for (r = 0; r < s; r++) null != o[r] && (e[r].style.display = o[r]); return e }
        x.fn.extend({ show: function() { return pe(this, !0) }, hide: function() { return pe(this) }, toggle: function(e) { return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each((function() { le(this) ? x(this).show() : x(this).hide() })) } });
        var he, fe, me = /^(?:checkbox|radio)$/i,
            ge = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
            ve = /^$|^module$|\/(?:java|ecma)script/i;
        he = b.createDocumentFragment().appendChild(b.createElement("div")), (fe = b.createElement("input")).setAttribute("type", "radio"), fe.setAttribute("checked", "checked"), fe.setAttribute("name", "t"), he.appendChild(fe), g.checkClone = he.cloneNode(!0).cloneNode(!0).lastChild.checked, he.innerHTML = "<textarea>x</textarea>", g.noCloneChecked = !!he.cloneNode(!0).lastChild.defaultValue, he.innerHTML = "<option></option>", g.option = !!he.lastChild;
        var ye = { thead: [1, "<table>", "</table>"], col: [2, "<table><colgroup>", "</colgroup></table>"], tr: [2, "<table><tbody>", "</tbody></table>"], td: [3, "<table><tbody><tr>", "</tr></tbody></table>"], _default: [0, "", ""] };

        function be(e, t) { var n; return n = void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t || "*") : void 0 !== e.querySelectorAll ? e.querySelectorAll(t || "*") : [], void 0 === t || t && N(e, t) ? x.merge([e], n) : n }

        function we(e, t) { for (var n = 0, i = e.length; n < i; n++) G.set(e[n], "globalEval", !t || G.get(t[n], "globalEval")) }
        ye.tbody = ye.tfoot = ye.colgroup = ye.caption = ye.thead, ye.th = ye.td, g.option || (ye.optgroup = ye.option = [1, "<select multiple='multiple'>", "</select>"]);
        var ke = /<|&#?\w+;/;

        function Te(e, t, n, i, o) {
            for (var r, s, a, l, c, u, d = t.createDocumentFragment(), p = [], h = 0, f = e.length; h < f; h++)
                if ((r = e[h]) || 0 === r)
                    if ("object" === T(r)) x.merge(p, r.nodeType ? [r] : r);
                    else if (ke.test(r)) {
                for (s = s || d.appendChild(t.createElement("div")), a = (ge.exec(r) || ["", ""])[1].toLowerCase(), l = ye[a] || ye._default, s.innerHTML = l[1] + x.htmlPrefilter(r) + l[2], u = l[0]; u--;) s = s.lastChild;
                x.merge(p, s.childNodes), (s = d.firstChild).textContent = ""
            } else p.push(t.createTextNode(r));
            for (d.textContent = "", h = 0; r = p[h++];)
                if (i && x.inArray(r, i) > -1) o && o.push(r);
                else if (c = se(r), s = be(d.appendChild(r), "script"), c && we(s), n)
                for (u = 0; r = s[u++];) ve.test(r.type || "") && n.push(r);
            return d
        }
        var xe = /^key/,
            Se = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
            Ce = /^([^.]*)(?:\.(.+)|)/;

        function Ae() { return !0 }

        function Ee() { return !1 }

        function Pe(e, t) { return e === function() { try { return b.activeElement } catch (e) {} }() == ("focus" === t) }

        function Ne(e, t, n, i, o, r) {
            var s, a;
            if ("object" == typeof t) { for (a in "string" != typeof n && (i = i || n, n = void 0), t) Ne(e, a, n, i, t[a], r); return e }
            if (null == i && null == o ? (o = n, i = n = void 0) : null == o && ("string" == typeof n ? (o = i, i = void 0) : (o = i, i = n, n = void 0)), !1 === o) o = Ee;
            else if (!o) return e;
            return 1 === r && (s = o, (o = function(e) { return x().off(e), s.apply(this, arguments) }).guid = s.guid || (s.guid = x.guid++)), e.each((function() { x.event.add(this, t, o, i, n) }))
        }

        function Oe(e, t, n) {
            n ? (G.set(e, t, !1), x.event.add(e, t, {
                namespace: !1,
                handler: function(e) {
                    var i, o, r = G.get(this, t);
                    if (1 & e.isTrigger && this[t]) {
                        if (r.length)(x.event.special[t] || {}).delegateType && e.stopPropagation();
                        else if (r = a.call(arguments), G.set(this, t, r), i = n(this, t), this[t](), r !== (o = G.get(this, t)) || i ? G.set(this, t, !1) : o = {}, r !== o) return e.stopImmediatePropagation(), e.preventDefault(), o.value
                    } else r.length && (G.set(this, t, { value: x.event.trigger(x.extend(r[0], x.Event.prototype), r.slice(1), this) }), e.stopImmediatePropagation())
                }
            })) : void 0 === G.get(e, t) && x.event.add(e, t, Ae)
        }
        x.event = {
            global: {},
            add: function(e, t, n, i, o) {
                var r, s, a, l, c, u, d, p, h, f, m, g = G.get(e);
                if (K(e))
                    for (n.handler && (n = (r = n).handler, o = r.selector), o && x.find.matchesSelector(re, o), n.guid || (n.guid = x.guid++), (l = g.events) || (l = g.events = Object.create(null)), (s = g.handle) || (s = g.handle = function(t) { return void 0 !== x && x.event.triggered !== t.type ? x.event.dispatch.apply(e, arguments) : void 0 }), c = (t = (t || "").match(H) || [""]).length; c--;) h = m = (a = Ce.exec(t[c]) || [])[1], f = (a[2] || "").split(".").sort(), h && (d = x.event.special[h] || {}, h = (o ? d.delegateType : d.bindType) || h, d = x.event.special[h] || {}, u = x.extend({ type: h, origType: m, data: i, handler: n, guid: n.guid, selector: o, needsContext: o && x.expr.match.needsContext.test(o), namespace: f.join(".") }, r), (p = l[h]) || ((p = l[h] = []).delegateCount = 0, d.setup && !1 !== d.setup.call(e, i, f, s) || e.addEventListener && e.addEventListener(h, s)), d.add && (d.add.call(e, u), u.handler.guid || (u.handler.guid = n.guid)), o ? p.splice(p.delegateCount++, 0, u) : p.push(u), x.event.global[h] = !0)
            },
            remove: function(e, t, n, i, o) {
                var r, s, a, l, c, u, d, p, h, f, m, g = G.hasData(e) && G.get(e);
                if (g && (l = g.events)) {
                    for (c = (t = (t || "").match(H) || [""]).length; c--;)
                        if (h = m = (a = Ce.exec(t[c]) || [])[1], f = (a[2] || "").split(".").sort(), h) {
                            for (d = x.event.special[h] || {}, p = l[h = (i ? d.delegateType : d.bindType) || h] || [], a = a[2] && new RegExp("(^|\\.)" + f.join("\\.(?:.*\\.|)") + "(\\.|$)"), s = r = p.length; r--;) u = p[r], !o && m !== u.origType || n && n.guid !== u.guid || a && !a.test(u.namespace) || i && i !== u.selector && ("**" !== i || !u.selector) || (p.splice(r, 1), u.selector && p.delegateCount--, d.remove && d.remove.call(e, u));
                            s && !p.length && (d.teardown && !1 !== d.teardown.call(e, f, g.handle) || x.removeEvent(e, h, g.handle), delete l[h])
                        } else
                            for (h in l) x.event.remove(e, h + t[c], n, i, !0);
                    x.isEmptyObject(l) && G.remove(e, "handle events")
                }
            },
            dispatch: function(e) {
                var t, n, i, o, r, s, a = new Array(arguments.length),
                    l = x.event.fix(e),
                    c = (G.get(this, "events") || Object.create(null))[l.type] || [],
                    u = x.event.special[l.type] || {};
                for (a[0] = l, t = 1; t < arguments.length; t++) a[t] = arguments[t];
                if (l.delegateTarget = this, !u.preDispatch || !1 !== u.preDispatch.call(this, l)) {
                    for (s = x.event.handlers.call(this, l, c), t = 0;
                        (o = s[t++]) && !l.isPropagationStopped();)
                        for (l.currentTarget = o.elem, n = 0;
                            (r = o.handlers[n++]) && !l.isImmediatePropagationStopped();) l.rnamespace && !1 !== r.namespace && !l.rnamespace.test(r.namespace) || (l.handleObj = r, l.data = r.data, void 0 !== (i = ((x.event.special[r.origType] || {}).handle || r.handler).apply(o.elem, a)) && !1 === (l.result = i) && (l.preventDefault(), l.stopPropagation()));
                    return u.postDispatch && u.postDispatch.call(this, l), l.result
                }
            },
            handlers: function(e, t) {
                var n, i, o, r, s, a = [],
                    l = t.delegateCount,
                    c = e.target;
                if (l && c.nodeType && !("click" === e.type && e.button >= 1))
                    for (; c !== this; c = c.parentNode || this)
                        if (1 === c.nodeType && ("click" !== e.type || !0 !== c.disabled)) {
                            for (r = [], s = {}, n = 0; n < l; n++) void 0 === s[o = (i = t[n]).selector + " "] && (s[o] = i.needsContext ? x(o, this).index(c) > -1 : x.find(o, this, null, [c]).length), s[o] && r.push(i);
                            r.length && a.push({ elem: c, handlers: r })
                        }
                return c = this, l < t.length && a.push({ elem: c, handlers: t.slice(l) }), a
            },
            addProp: function(e, t) { Object.defineProperty(x.Event.prototype, e, { enumerable: !0, configurable: !0, get: v(t) ? function() { if (this.originalEvent) return t(this.originalEvent) } : function() { if (this.originalEvent) return this.originalEvent[e] }, set: function(t) { Object.defineProperty(this, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) } }) },
            fix: function(e) { return e[x.expando] ? e : new x.Event(e) },
            special: { load: { noBubble: !0 }, click: { setup: function(e) { var t = this || e; return me.test(t.type) && t.click && N(t, "input") && Oe(t, "click", Ae), !1 }, trigger: function(e) { var t = this || e; return me.test(t.type) && t.click && N(t, "input") && Oe(t, "click"), !0 }, _default: function(e) { var t = e.target; return me.test(t.type) && t.click && N(t, "input") && G.get(t, "click") || N(t, "a") } }, beforeunload: { postDispatch: function(e) { void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result) } } }
        }, x.removeEvent = function(e, t, n) { e.removeEventListener && e.removeEventListener(t, n) }, x.Event = function(e, t) {
            if (!(this instanceof x.Event)) return new x.Event(e, t);
            e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? Ae : Ee, this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target, this.currentTarget = e.currentTarget, this.relatedTarget = e.relatedTarget) : this.type = e, t && x.extend(this, t), this.timeStamp = e && e.timeStamp || Date.now(), this[x.expando] = !0
        }, x.Event.prototype = {
            constructor: x.Event,
            isDefaultPrevented: Ee,
            isPropagationStopped: Ee,
            isImmediatePropagationStopped: Ee,
            isSimulated: !1,
            preventDefault: function() {
                var e = this.originalEvent;
                this.isDefaultPrevented = Ae, e && !this.isSimulated && e.preventDefault()
            },
            stopPropagation: function() {
                var e = this.originalEvent;
                this.isPropagationStopped = Ae, e && !this.isSimulated && e.stopPropagation()
            },
            stopImmediatePropagation: function() {
                var e = this.originalEvent;
                this.isImmediatePropagationStopped = Ae, e && !this.isSimulated && e.stopImmediatePropagation(), this.stopPropagation()
            }
        }, x.each({ altKey: !0, bubbles: !0, cancelable: !0, changedTouches: !0, ctrlKey: !0, detail: !0, eventPhase: !0, metaKey: !0, pageX: !0, pageY: !0, shiftKey: !0, view: !0, char: !0, code: !0, charCode: !0, key: !0, keyCode: !0, button: !0, buttons: !0, clientX: !0, clientY: !0, offsetX: !0, offsetY: !0, pointerId: !0, pointerType: !0, screenX: !0, screenY: !0, targetTouches: !0, toElement: !0, touches: !0, which: function(e) { var t = e.button; return null == e.which && xe.test(e.type) ? null != e.charCode ? e.charCode : e.keyCode : !e.which && void 0 !== t && Se.test(e.type) ? 1 & t ? 1 : 2 & t ? 3 : 4 & t ? 2 : 0 : e.which } }, x.event.addProp), x.each({ focus: "focusin", blur: "focusout" }, (function(e, t) { x.event.special[e] = { setup: function() { return Oe(this, e, Pe), !1 }, trigger: function() { return Oe(this, e), !0 }, delegateType: t } })), x.each({ mouseenter: "mouseover", mouseleave: "mouseout", pointerenter: "pointerover", pointerleave: "pointerout" }, (function(e, t) {
            x.event.special[e] = {
                delegateType: t,
                bindType: t,
                handle: function(e) {
                    var n, i = this,
                        o = e.relatedTarget,
                        r = e.handleObj;
                    return o && (o === i || x.contains(i, o)) || (e.type = r.origType, n = r.handler.apply(this, arguments), e.type = t), n
                }
            }
        })), x.fn.extend({ on: function(e, t, n, i) { return Ne(this, e, t, n, i) }, one: function(e, t, n, i) { return Ne(this, e, t, n, i, 1) }, off: function(e, t, n) { var i, o; if (e && e.preventDefault && e.handleObj) return i = e.handleObj, x(e.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler), this; if ("object" == typeof e) { for (o in e) this.off(o, t, e[o]); return this } return !1 !== t && "function" != typeof t || (n = t, t = void 0), !1 === n && (n = Ee), this.each((function() { x.event.remove(this, e, n, t) })) } });
        var Le = /<script|<style|<link/i,
            Me = /checked\s*(?:[^=]|=\s*.checked.)/i,
            $e = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

        function je(e, t) { return N(e, "table") && N(11 !== t.nodeType ? t : t.firstChild, "tr") && x(e).children("tbody")[0] || e }

        function De(e) { return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e }

        function Ie(e) { return "true/" === (e.type || "").slice(0, 5) ? e.type = e.type.slice(5) : e.removeAttribute("type"), e }

        function He(e, t) {
            var n, i, o, r, s, a;
            if (1 === t.nodeType) {
                if (G.hasData(e) && (a = G.get(e).events))
                    for (o in G.remove(t, "handle events"), a)
                        for (n = 0, i = a[o].length; n < i; n++) x.event.add(t, o, a[o][n]);
                J.hasData(e) && (r = J.access(e), s = x.extend({}, r), J.set(t, s))
            }
        }

        function qe(e, t) { var n = t.nodeName.toLowerCase(); "input" === n && me.test(e.type) ? t.checked = e.checked : "input" !== n && "textarea" !== n || (t.defaultValue = e.defaultValue) }

        function _e(e, t, n, i) {
            t = l(t);
            var o, r, s, a, c, u, d = 0,
                p = e.length,
                h = p - 1,
                f = t[0],
                m = v(f);
            if (m || p > 1 && "string" == typeof f && !g.checkClone && Me.test(f)) return e.each((function(o) {
                var r = e.eq(o);
                m && (t[0] = f.call(this, o, r.html())), _e(r, t, n, i)
            }));
            if (p && (r = (o = Te(t, e[0].ownerDocument, !1, e, i)).firstChild, 1 === o.childNodes.length && (o = r), r || i)) {
                for (a = (s = x.map(be(o, "script"), De)).length; d < p; d++) c = o, d !== h && (c = x.clone(c, !0, !0), a && x.merge(s, be(c, "script"))), n.call(e[d], c, d);
                if (a)
                    for (u = s[s.length - 1].ownerDocument, x.map(s, Ie), d = 0; d < a; d++) c = s[d], ve.test(c.type || "") && !G.access(c, "globalEval") && x.contains(u, c) && (c.src && "module" !== (c.type || "").toLowerCase() ? x._evalUrl && !c.noModule && x._evalUrl(c.src, { nonce: c.nonce || c.getAttribute("nonce") }, u) : k(c.textContent.replace($e, ""), c, u))
            }
            return e
        }

        function Re(e, t, n) { for (var i, o = t ? x.filter(t, e) : e, r = 0; null != (i = o[r]); r++) n || 1 !== i.nodeType || x.cleanData(be(i)), i.parentNode && (n && se(i) && we(be(i, "script")), i.parentNode.removeChild(i)); return e }
        x.extend({
            htmlPrefilter: function(e) { return e },
            clone: function(e, t, n) {
                var i, o, r, s, a = e.cloneNode(!0),
                    l = se(e);
                if (!(g.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || x.isXMLDoc(e)))
                    for (s = be(a), i = 0, o = (r = be(e)).length; i < o; i++) qe(r[i], s[i]);
                if (t)
                    if (n)
                        for (r = r || be(e), s = s || be(a), i = 0, o = r.length; i < o; i++) He(r[i], s[i]);
                    else He(e, a);
                return (s = be(a, "script")).length > 0 && we(s, !l && be(e, "script")), a
            },
            cleanData: function(e) {
                for (var t, n, i, o = x.event.special, r = 0; void 0 !== (n = e[r]); r++)
                    if (K(n)) {
                        if (t = n[G.expando]) {
                            if (t.events)
                                for (i in t.events) o[i] ? x.event.remove(n, i) : x.removeEvent(n, i, t.handle);
                            n[G.expando] = void 0
                        }
                        n[J.expando] && (n[J.expando] = void 0)
                    }
            }
        }), x.fn.extend({
            detach: function(e) { return Re(this, e, !0) },
            remove: function(e) { return Re(this, e) },
            text: function(e) { return B(this, (function(e) { return void 0 === e ? x.text(this) : this.empty().each((function() { 1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e) })) }), null, e, arguments.length) },
            append: function() { return _e(this, arguments, (function(e) { 1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || je(this, e).appendChild(e) })) },
            prepend: function() {
                return _e(this, arguments, (function(e) {
                    if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                        var t = je(this, e);
                        t.insertBefore(e, t.firstChild)
                    }
                }))
            },
            before: function() { return _e(this, arguments, (function(e) { this.parentNode && this.parentNode.insertBefore(e, this) })) },
            after: function() { return _e(this, arguments, (function(e) { this.parentNode && this.parentNode.insertBefore(e, this.nextSibling) })) },
            empty: function() { for (var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (x.cleanData(be(e, !1)), e.textContent = ""); return this },
            clone: function(e, t) { return e = null != e && e, t = null == t ? e : t, this.map((function() { return x.clone(this, e, t) })) },
            html: function(e) {
                return B(this, (function(e) {
                    var t = this[0] || {},
                        n = 0,
                        i = this.length;
                    if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
                    if ("string" == typeof e && !Le.test(e) && !ye[(ge.exec(e) || ["", ""])[1].toLowerCase()]) {
                        e = x.htmlPrefilter(e);
                        try {
                            for (; n < i; n++) 1 === (t = this[n] || {}).nodeType && (x.cleanData(be(t, !1)), t.innerHTML = e);
                            t = 0
                        } catch (e) {}
                    }
                    t && this.empty().append(e)
                }), null, e, arguments.length)
            },
            replaceWith: function() {
                var e = [];
                return _e(this, arguments, (function(t) {
                    var n = this.parentNode;
                    x.inArray(this, e) < 0 && (x.cleanData(be(this)), n && n.replaceChild(t, this))
                }), e)
            }
        }), x.each({ appendTo: "append", prependTo: "prepend", insertBefore: "before", insertAfter: "after", replaceAll: "replaceWith" }, (function(e, t) { x.fn[e] = function(e) { for (var n, i = [], o = x(e), r = o.length - 1, s = 0; s <= r; s++) n = s === r ? this : this.clone(!0), x(o[s])[t](n), c.apply(i, n.get()); return this.pushStack(i) } }));
        var Fe = new RegExp("^(" + ne + ")(?!px)[a-z%]+$", "i"),
            ze = function(e) { var t = e.ownerDocument.defaultView; return t && t.opener || (t = n), t.getComputedStyle(e) },
            We = function(e, t, n) { var i, o, r = {}; for (o in t) r[o] = e.style[o], e.style[o] = t[o]; for (o in i = n.call(e), t) e.style[o] = r[o]; return i },
            Be = new RegExp(oe.join("|"), "i");

        function Ue(e, t, n) { var i, o, r, s, a = e.style; return (n = n || ze(e)) && ("" !== (s = n.getPropertyValue(t) || n[t]) || se(e) || (s = x.style(e, t)), !g.pixelBoxStyles() && Fe.test(s) && Be.test(t) && (i = a.width, o = a.minWidth, r = a.maxWidth, a.minWidth = a.maxWidth = a.width = s, s = n.width, a.width = i, a.minWidth = o, a.maxWidth = r)), void 0 !== s ? s + "" : s }

        function Ve(e, t) {
            return {
                get: function() {
                    if (!e()) return (this.get = t).apply(this, arguments);
                    delete this.get
                }
            }
        }! function() {
            function e() {
                if (u) {
                    c.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0", u.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%", re.appendChild(c).appendChild(u);
                    var e = n.getComputedStyle(u);
                    i = "1%" !== e.top, l = 12 === t(e.marginLeft), u.style.right = "60%", s = 36 === t(e.right), o = 36 === t(e.width), u.style.position = "absolute", r = 12 === t(u.offsetWidth / 3), re.removeChild(c), u = null
                }
            }

            function t(e) { return Math.round(parseFloat(e)) }
            var i, o, r, s, a, l, c = b.createElement("div"),
                u = b.createElement("div");
            u.style && (u.style.backgroundClip = "content-box", u.cloneNode(!0).style.backgroundClip = "", g.clearCloneStyle = "content-box" === u.style.backgroundClip, x.extend(g, { boxSizingReliable: function() { return e(), o }, pixelBoxStyles: function() { return e(), s }, pixelPosition: function() { return e(), i }, reliableMarginLeft: function() { return e(), l }, scrollboxSize: function() { return e(), r }, reliableTrDimensions: function() { var e, t, i, o; return null == a && (e = b.createElement("table"), t = b.createElement("tr"), i = b.createElement("div"), e.style.cssText = "position:absolute;left:-11111px", t.style.height = "1px", i.style.height = "9px", re.appendChild(e).appendChild(t).appendChild(i), o = n.getComputedStyle(t), a = parseInt(o.height) > 3, re.removeChild(e)), a } }))
        }();
        var Xe = ["Webkit", "Moz", "ms"],
            Ye = b.createElement("div").style,
            Ke = {};

        function Qe(e) {
            var t = x.cssProps[e] || Ke[e];
            return t || (e in Ye ? e : Ke[e] = function(e) {
                for (var t = e[0].toUpperCase() + e.slice(1), n = Xe.length; n--;)
                    if ((e = Xe[n] + t) in Ye) return e
            }(e) || e)
        }
        var Ge = /^(none|table(?!-c[ea]).+)/,
            Je = /^--/,
            Ze = { position: "absolute", visibility: "hidden", display: "block" },
            et = { letterSpacing: "0", fontWeight: "400" };

        function tt(e, t, n) { var i = ie.exec(t); return i ? Math.max(0, i[2] - (n || 0)) + (i[3] || "px") : t }

        function nt(e, t, n, i, o, r) {
            var s = "width" === t ? 1 : 0,
                a = 0,
                l = 0;
            if (n === (i ? "border" : "content")) return 0;
            for (; s < 4; s += 2) "margin" === n && (l += x.css(e, n + oe[s], !0, o)), i ? ("content" === n && (l -= x.css(e, "padding" + oe[s], !0, o)), "margin" !== n && (l -= x.css(e, "border" + oe[s] + "Width", !0, o))) : (l += x.css(e, "padding" + oe[s], !0, o), "padding" !== n ? l += x.css(e, "border" + oe[s] + "Width", !0, o) : a += x.css(e, "border" + oe[s] + "Width", !0, o));
            return !i && r >= 0 && (l += Math.max(0, Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - r - l - a - .5)) || 0), l
        }

        function it(e, t, n) {
            var i = ze(e),
                o = (!g.boxSizingReliable() || n) && "border-box" === x.css(e, "boxSizing", !1, i),
                r = o,
                s = Ue(e, t, i),
                a = "offset" + t[0].toUpperCase() + t.slice(1);
            if (Fe.test(s)) {
                if (!n) return s;
                s = "auto"
            }
            return (!g.boxSizingReliable() && o || !g.reliableTrDimensions() && N(e, "tr") || "auto" === s || !parseFloat(s) && "inline" === x.css(e, "display", !1, i)) && e.getClientRects().length && (o = "border-box" === x.css(e, "boxSizing", !1, i), (r = a in e) && (s = e[a])), (s = parseFloat(s) || 0) + nt(e, t, n || (o ? "border" : "content"), r, i, s) + "px"
        }

        function ot(e, t, n, i, o) { return new ot.prototype.init(e, t, n, i, o) }
        x.extend({
            cssHooks: { opacity: { get: function(e, t) { if (t) { var n = Ue(e, "opacity"); return "" === n ? "1" : n } } } },
            cssNumber: { animationIterationCount: !0, columnCount: !0, fillOpacity: !0, flexGrow: !0, flexShrink: !0, fontWeight: !0, gridArea: !0, gridColumn: !0, gridColumnEnd: !0, gridColumnStart: !0, gridRow: !0, gridRowEnd: !0, gridRowStart: !0, lineHeight: !0, opacity: !0, order: !0, orphans: !0, widows: !0, zIndex: !0, zoom: !0 },
            cssProps: {},
            style: function(e, t, n, i) {
                if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                    var o, r, s, a = Y(t),
                        l = Je.test(t),
                        c = e.style;
                    if (l || (t = Qe(a)), s = x.cssHooks[t] || x.cssHooks[a], void 0 === n) return s && "get" in s && void 0 !== (o = s.get(e, !1, i)) ? o : c[t];
                    "string" === (r = typeof n) && (o = ie.exec(n)) && o[1] && (n = ce(e, t, o), r = "number"), null != n && n == n && ("number" !== r || l || (n += o && o[3] || (x.cssNumber[a] ? "" : "px")), g.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (c[t] = "inherit"), s && "set" in s && void 0 === (n = s.set(e, n, i)) || (l ? c.setProperty(t, n) : c[t] = n))
                }
            },
            css: function(e, t, n, i) { var o, r, s, a = Y(t); return Je.test(t) || (t = Qe(a)), (s = x.cssHooks[t] || x.cssHooks[a]) && "get" in s && (o = s.get(e, !0, n)), void 0 === o && (o = Ue(e, t, i)), "normal" === o && t in et && (o = et[t]), "" === n || n ? (r = parseFloat(o), !0 === n || isFinite(r) ? r || 0 : o) : o }
        }), x.each(["height", "width"], (function(e, t) {
            x.cssHooks[t] = {
                get: function(e, n, i) { if (n) return !Ge.test(x.css(e, "display")) || e.getClientRects().length && e.getBoundingClientRect().width ? it(e, t, i) : We(e, Ze, (function() { return it(e, t, i) })) },
                set: function(e, n, i) {
                    var o, r = ze(e),
                        s = !g.scrollboxSize() && "absolute" === r.position,
                        a = (s || i) && "border-box" === x.css(e, "boxSizing", !1, r),
                        l = i ? nt(e, t, i, a, r) : 0;
                    return a && s && (l -= Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - parseFloat(r[t]) - nt(e, t, "border", !1, r) - .5)), l && (o = ie.exec(n)) && "px" !== (o[3] || "px") && (e.style[t] = n, n = x.css(e, t)), tt(0, n, l)
                }
            }
        })), x.cssHooks.marginLeft = Ve(g.reliableMarginLeft, (function(e, t) { if (t) return (parseFloat(Ue(e, "marginLeft")) || e.getBoundingClientRect().left - We(e, { marginLeft: 0 }, (function() { return e.getBoundingClientRect().left }))) + "px" })), x.each({ margin: "", padding: "", border: "Width" }, (function(e, t) { x.cssHooks[e + t] = { expand: function(n) { for (var i = 0, o = {}, r = "string" == typeof n ? n.split(" ") : [n]; i < 4; i++) o[e + oe[i] + t] = r[i] || r[i - 2] || r[0]; return o } }, "margin" !== e && (x.cssHooks[e + t].set = tt) })), x.fn.extend({
            css: function(e, t) {
                return B(this, (function(e, t, n) {
                    var i, o, r = {},
                        s = 0;
                    if (Array.isArray(t)) { for (i = ze(e), o = t.length; s < o; s++) r[t[s]] = x.css(e, t[s], !1, i); return r }
                    return void 0 !== n ? x.style(e, t, n) : x.css(e, t)
                }), e, t, arguments.length > 1)
            }
        }), x.Tween = ot, ot.prototype = { constructor: ot, init: function(e, t, n, i, o, r) { this.elem = e, this.prop = n, this.easing = o || x.easing._default, this.options = t, this.start = this.now = this.cur(), this.end = i, this.unit = r || (x.cssNumber[n] ? "" : "px") }, cur: function() { var e = ot.propHooks[this.prop]; return e && e.get ? e.get(this) : ot.propHooks._default.get(this) }, run: function(e) { var t, n = ot.propHooks[this.prop]; return this.options.duration ? this.pos = t = x.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : ot.propHooks._default.set(this), this } }, ot.prototype.init.prototype = ot.prototype, ot.propHooks = { _default: { get: function(e) { var t; return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = x.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0 }, set: function(e) { x.fx.step[e.prop] ? x.fx.step[e.prop](e) : 1 !== e.elem.nodeType || !x.cssHooks[e.prop] && null == e.elem.style[Qe(e.prop)] ? e.elem[e.prop] = e.now : x.style(e.elem, e.prop, e.now + e.unit) } } }, ot.propHooks.scrollTop = ot.propHooks.scrollLeft = { set: function(e) { e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now) } }, x.easing = { linear: function(e) { return e }, swing: function(e) { return .5 - Math.cos(e * Math.PI) / 2 }, _default: "swing" }, x.fx = ot.prototype.init, x.fx.step = {};
        var rt, st, at = /^(?:toggle|show|hide)$/,
            lt = /queueHooks$/;

        function ct() { st && (!1 === b.hidden && n.requestAnimationFrame ? n.requestAnimationFrame(ct) : n.setTimeout(ct, x.fx.interval), x.fx.tick()) }

        function ut() { return n.setTimeout((function() { rt = void 0 })), rt = Date.now() }

        function dt(e, t) {
            var n, i = 0,
                o = { height: e };
            for (t = t ? 1 : 0; i < 4; i += 2 - t) o["margin" + (n = oe[i])] = o["padding" + n] = e;
            return t && (o.opacity = o.width = e), o
        }

        function pt(e, t, n) {
            for (var i, o = (ht.tweeners[t] || []).concat(ht.tweeners["*"]), r = 0, s = o.length; r < s; r++)
                if (i = o[r].call(n, t, e)) return i
        }

        function ht(e, t, n) {
            var i, o, r = 0,
                s = ht.prefilters.length,
                a = x.Deferred().always((function() { delete l.elem })),
                l = function() { if (o) return !1; for (var t = rt || ut(), n = Math.max(0, c.startTime + c.duration - t), i = 1 - (n / c.duration || 0), r = 0, s = c.tweens.length; r < s; r++) c.tweens[r].run(i); return a.notifyWith(e, [c, i, n]), i < 1 && s ? n : (s || a.notifyWith(e, [c, 1, 0]), a.resolveWith(e, [c]), !1) },
                c = a.promise({
                    elem: e,
                    props: x.extend({}, t),
                    opts: x.extend(!0, { specialEasing: {}, easing: x.easing._default }, n),
                    originalProperties: t,
                    originalOptions: n,
                    startTime: rt || ut(),
                    duration: n.duration,
                    tweens: [],
                    createTween: function(t, n) { var i = x.Tween(e, c.opts, t, n, c.opts.specialEasing[t] || c.opts.easing); return c.tweens.push(i), i },
                    stop: function(t) {
                        var n = 0,
                            i = t ? c.tweens.length : 0;
                        if (o) return this;
                        for (o = !0; n < i; n++) c.tweens[n].run(1);
                        return t ? (a.notifyWith(e, [c, 1, 0]), a.resolveWith(e, [c, t])) : a.rejectWith(e, [c, t]), this
                    }
                }),
                u = c.props;
            for (! function(e, t) {
                    var n, i, o, r, s;
                    for (n in e)
                        if (o = t[i = Y(n)], r = e[n], Array.isArray(r) && (o = r[1], r = e[n] = r[0]), n !== i && (e[i] = r, delete e[n]), (s = x.cssHooks[i]) && "expand" in s)
                            for (n in r = s.expand(r), delete e[i], r) n in e || (e[n] = r[n], t[n] = o);
                        else t[i] = o
                }(u, c.opts.specialEasing); r < s; r++)
                if (i = ht.prefilters[r].call(c, e, u, c.opts)) return v(i.stop) && (x._queueHooks(c.elem, c.opts.queue).stop = i.stop.bind(i)), i;
            return x.map(u, pt, c), v(c.opts.start) && c.opts.start.call(e, c), c.progress(c.opts.progress).done(c.opts.done, c.opts.complete).fail(c.opts.fail).always(c.opts.always), x.fx.timer(x.extend(l, { elem: e, anim: c, queue: c.opts.queue })), c
        }
        x.Animation = x.extend(ht, {
                tweeners: { "*": [function(e, t) { var n = this.createTween(e, t); return ce(n.elem, e, ie.exec(t), n), n }] },
                tweener: function(e, t) { v(e) ? (t = e, e = ["*"]) : e = e.match(H); for (var n, i = 0, o = e.length; i < o; i++) n = e[i], ht.tweeners[n] = ht.tweeners[n] || [], ht.tweeners[n].unshift(t) },
                prefilters: [function(e, t, n) {
                    var i, o, r, s, a, l, c, u, d = "width" in t || "height" in t,
                        p = this,
                        h = {},
                        f = e.style,
                        m = e.nodeType && le(e),
                        g = G.get(e, "fxshow");
                    for (i in n.queue || (null == (s = x._queueHooks(e, "fx")).unqueued && (s.unqueued = 0, a = s.empty.fire, s.empty.fire = function() { s.unqueued || a() }), s.unqueued++, p.always((function() { p.always((function() { s.unqueued--, x.queue(e, "fx").length || s.empty.fire() })) }))), t)
                        if (o = t[i], at.test(o)) {
                            if (delete t[i], r = r || "toggle" === o, o === (m ? "hide" : "show")) {
                                if ("show" !== o || !g || void 0 === g[i]) continue;
                                m = !0
                            }
                            h[i] = g && g[i] || x.style(e, i)
                        }
                    if ((l = !x.isEmptyObject(t)) || !x.isEmptyObject(h))
                        for (i in d && 1 === e.nodeType && (n.overflow = [f.overflow, f.overflowX, f.overflowY], null == (c = g && g.display) && (c = G.get(e, "display")), "none" === (u = x.css(e, "display")) && (c ? u = c : (pe([e], !0), c = e.style.display || c, u = x.css(e, "display"), pe([e]))), ("inline" === u || "inline-block" === u && null != c) && "none" === x.css(e, "float") && (l || (p.done((function() { f.display = c })), null == c && (u = f.display, c = "none" === u ? "" : u)), f.display = "inline-block")), n.overflow && (f.overflow = "hidden", p.always((function() { f.overflow = n.overflow[0], f.overflowX = n.overflow[1], f.overflowY = n.overflow[2] }))), l = !1, h) l || (g ? "hidden" in g && (m = g.hidden) : g = G.access(e, "fxshow", { display: c }), r && (g.hidden = !m), m && pe([e], !0), p.done((function() { for (i in m || pe([e]), G.remove(e, "fxshow"), h) x.style(e, i, h[i]) }))), l = pt(m ? g[i] : 0, i, p), i in g || (g[i] = l.start, m && (l.end = l.start, l.start = 0))
                }],
                prefilter: function(e, t) { t ? ht.prefilters.unshift(e) : ht.prefilters.push(e) }
            }), x.speed = function(e, t, n) { var i = e && "object" == typeof e ? x.extend({}, e) : { complete: n || !n && t || v(e) && e, duration: e, easing: n && t || t && !v(t) && t }; return x.fx.off ? i.duration = 0 : "number" != typeof i.duration && (i.duration in x.fx.speeds ? i.duration = x.fx.speeds[i.duration] : i.duration = x.fx.speeds._default), null != i.queue && !0 !== i.queue || (i.queue = "fx"), i.old = i.complete, i.complete = function() { v(i.old) && i.old.call(this), i.queue && x.dequeue(this, i.queue) }, i }, x.fn.extend({
                fadeTo: function(e, t, n, i) { return this.filter(le).css("opacity", 0).show().end().animate({ opacity: t }, e, n, i) },
                animate: function(e, t, n, i) {
                    var o = x.isEmptyObject(e),
                        r = x.speed(t, n, i),
                        s = function() {
                            var t = ht(this, x.extend({}, e), r);
                            (o || G.get(this, "finish")) && t.stop(!0)
                        };
                    return s.finish = s, o || !1 === r.queue ? this.each(s) : this.queue(r.queue, s)
                },
                stop: function(e, t, n) {
                    var i = function(e) {
                        var t = e.stop;
                        delete e.stop, t(n)
                    };
                    return "string" != typeof e && (n = t, t = e, e = void 0), t && this.queue(e || "fx", []), this.each((function() {
                        var t = !0,
                            o = null != e && e + "queueHooks",
                            r = x.timers,
                            s = G.get(this);
                        if (o) s[o] && s[o].stop && i(s[o]);
                        else
                            for (o in s) s[o] && s[o].stop && lt.test(o) && i(s[o]);
                        for (o = r.length; o--;) r[o].elem !== this || null != e && r[o].queue !== e || (r[o].anim.stop(n), t = !1, r.splice(o, 1));
                        !t && n || x.dequeue(this, e)
                    }))
                },
                finish: function(e) {
                    return !1 !== e && (e = e || "fx"), this.each((function() {
                        var t, n = G.get(this),
                            i = n[e + "queue"],
                            o = n[e + "queueHooks"],
                            r = x.timers,
                            s = i ? i.length : 0;
                        for (n.finish = !0, x.queue(this, e, []), o && o.stop && o.stop.call(this, !0), t = r.length; t--;) r[t].elem === this && r[t].queue === e && (r[t].anim.stop(!0), r.splice(t, 1));
                        for (t = 0; t < s; t++) i[t] && i[t].finish && i[t].finish.call(this);
                        delete n.finish
                    }))
                }
            }), x.each(["toggle", "show", "hide"], (function(e, t) {
                var n = x.fn[t];
                x.fn[t] = function(e, i, o) { return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(dt(t, !0), e, i, o) }
            })), x.each({ slideDown: dt("show"), slideUp: dt("hide"), slideToggle: dt("toggle"), fadeIn: { opacity: "show" }, fadeOut: { opacity: "hide" }, fadeToggle: { opacity: "toggle" } }, (function(e, t) { x.fn[e] = function(e, n, i) { return this.animate(t, e, n, i) } })), x.timers = [], x.fx.tick = function() {
                var e, t = 0,
                    n = x.timers;
                for (rt = Date.now(); t < n.length; t++)(e = n[t])() || n[t] !== e || n.splice(t--, 1);
                n.length || x.fx.stop(), rt = void 0
            }, x.fx.timer = function(e) { x.timers.push(e), x.fx.start() }, x.fx.interval = 13, x.fx.start = function() { st || (st = !0, ct()) }, x.fx.stop = function() { st = null }, x.fx.speeds = { slow: 600, fast: 200, _default: 400 }, x.fn.delay = function(e, t) {
                return e = x.fx && x.fx.speeds[e] || e, t = t || "fx", this.queue(t, (function(t, i) {
                    var o = n.setTimeout(t, e);
                    i.stop = function() { n.clearTimeout(o) }
                }))
            },
            function() {
                var e = b.createElement("input"),
                    t = b.createElement("select").appendChild(b.createElement("option"));
                e.type = "checkbox", g.checkOn = "" !== e.value, g.optSelected = t.selected, (e = b.createElement("input")).value = "t", e.type = "radio", g.radioValue = "t" === e.value
            }();
        var ft, mt = x.expr.attrHandle;
        x.fn.extend({ attr: function(e, t) { return B(this, x.attr, e, t, arguments.length > 1) }, removeAttr: function(e) { return this.each((function() { x.removeAttr(this, e) })) } }), x.extend({
            attr: function(e, t, n) { var i, o, r = e.nodeType; if (3 !== r && 8 !== r && 2 !== r) return void 0 === e.getAttribute ? x.prop(e, t, n) : (1 === r && x.isXMLDoc(e) || (o = x.attrHooks[t.toLowerCase()] || (x.expr.match.bool.test(t) ? ft : void 0)), void 0 !== n ? null === n ? void x.removeAttr(e, t) : o && "set" in o && void 0 !== (i = o.set(e, n, t)) ? i : (e.setAttribute(t, n + ""), n) : o && "get" in o && null !== (i = o.get(e, t)) ? i : null == (i = x.find.attr(e, t)) ? void 0 : i) },
            attrHooks: { type: { set: function(e, t) { if (!g.radioValue && "radio" === t && N(e, "input")) { var n = e.value; return e.setAttribute("type", t), n && (e.value = n), t } } } },
            removeAttr: function(e, t) {
                var n, i = 0,
                    o = t && t.match(H);
                if (o && 1 === e.nodeType)
                    for (; n = o[i++];) e.removeAttribute(n)
            }
        }), ft = { set: function(e, t, n) { return !1 === t ? x.removeAttr(e, n) : e.setAttribute(n, n), n } }, x.each(x.expr.match.bool.source.match(/\w+/g), (function(e, t) {
            var n = mt[t] || x.find.attr;
            mt[t] = function(e, t, i) { var o, r, s = t.toLowerCase(); return i || (r = mt[s], mt[s] = o, o = null != n(e, t, i) ? s : null, mt[s] = r), o }
        }));
        var gt = /^(?:input|select|textarea|button)$/i,
            vt = /^(?:a|area)$/i;

        function yt(e) { return (e.match(H) || []).join(" ") }

        function bt(e) { return e.getAttribute && e.getAttribute("class") || "" }

        function wt(e) { return Array.isArray(e) ? e : "string" == typeof e && e.match(H) || [] }
        x.fn.extend({ prop: function(e, t) { return B(this, x.prop, e, t, arguments.length > 1) }, removeProp: function(e) { return this.each((function() { delete this[x.propFix[e] || e] })) } }), x.extend({ prop: function(e, t, n) { var i, o, r = e.nodeType; if (3 !== r && 8 !== r && 2 !== r) return 1 === r && x.isXMLDoc(e) || (t = x.propFix[t] || t, o = x.propHooks[t]), void 0 !== n ? o && "set" in o && void 0 !== (i = o.set(e, n, t)) ? i : e[t] = n : o && "get" in o && null !== (i = o.get(e, t)) ? i : e[t] }, propHooks: { tabIndex: { get: function(e) { var t = x.find.attr(e, "tabindex"); return t ? parseInt(t, 10) : gt.test(e.nodeName) || vt.test(e.nodeName) && e.href ? 0 : -1 } } }, propFix: { for: "htmlFor", class: "className" } }), g.optSelected || (x.propHooks.selected = {
            get: function(e) { var t = e.parentNode; return t && t.parentNode && t.parentNode.selectedIndex, null },
            set: function(e) {
                var t = e.parentNode;
                t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex)
            }
        }), x.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], (function() { x.propFix[this.toLowerCase()] = this })), x.fn.extend({
            addClass: function(e) {
                var t, n, i, o, r, s, a, l = 0;
                if (v(e)) return this.each((function(t) { x(this).addClass(e.call(this, t, bt(this))) }));
                if ((t = wt(e)).length)
                    for (; n = this[l++];)
                        if (o = bt(n), i = 1 === n.nodeType && " " + yt(o) + " ") {
                            for (s = 0; r = t[s++];) i.indexOf(" " + r + " ") < 0 && (i += r + " ");
                            o !== (a = yt(i)) && n.setAttribute("class", a)
                        }
                return this
            },
            removeClass: function(e) {
                var t, n, i, o, r, s, a, l = 0;
                if (v(e)) return this.each((function(t) { x(this).removeClass(e.call(this, t, bt(this))) }));
                if (!arguments.length) return this.attr("class", "");
                if ((t = wt(e)).length)
                    for (; n = this[l++];)
                        if (o = bt(n), i = 1 === n.nodeType && " " + yt(o) + " ") {
                            for (s = 0; r = t[s++];)
                                for (; i.indexOf(" " + r + " ") > -1;) i = i.replace(" " + r + " ", " ");
                            o !== (a = yt(i)) && n.setAttribute("class", a)
                        }
                return this
            },
            toggleClass: function(e, t) {
                var n = typeof e,
                    i = "string" === n || Array.isArray(e);
                return "boolean" == typeof t && i ? t ? this.addClass(e) : this.removeClass(e) : v(e) ? this.each((function(n) { x(this).toggleClass(e.call(this, n, bt(this), t), t) })) : this.each((function() {
                    var t, o, r, s;
                    if (i)
                        for (o = 0, r = x(this), s = wt(e); t = s[o++];) r.hasClass(t) ? r.removeClass(t) : r.addClass(t);
                    else void 0 !== e && "boolean" !== n || ((t = bt(this)) && G.set(this, "__className__", t), this.setAttribute && this.setAttribute("class", t || !1 === e ? "" : G.get(this, "__className__") || ""))
                }))
            },
            hasClass: function(e) {
                var t, n, i = 0;
                for (t = " " + e + " "; n = this[i++];)
                    if (1 === n.nodeType && (" " + yt(bt(n)) + " ").indexOf(t) > -1) return !0;
                return !1
            }
        });
        var kt = /\r/g;
        x.fn.extend({
            val: function(e) {
                var t, n, i, o = this[0];
                return arguments.length ? (i = v(e), this.each((function(n) {
                    var o;
                    1 === this.nodeType && (null == (o = i ? e.call(this, n, x(this).val()) : e) ? o = "" : "number" == typeof o ? o += "" : Array.isArray(o) && (o = x.map(o, (function(e) { return null == e ? "" : e + "" }))), (t = x.valHooks[this.type] || x.valHooks[this.nodeName.toLowerCase()]) && "set" in t && void 0 !== t.set(this, o, "value") || (this.value = o))
                }))) : o ? (t = x.valHooks[o.type] || x.valHooks[o.nodeName.toLowerCase()]) && "get" in t && void 0 !== (n = t.get(o, "value")) ? n : "string" == typeof(n = o.value) ? n.replace(kt, "") : null == n ? "" : n : void 0
            }
        }), x.extend({
            valHooks: {
                option: { get: function(e) { var t = x.find.attr(e, "value"); return null != t ? t : yt(x.text(e)) } },
                select: {
                    get: function(e) {
                        var t, n, i, o = e.options,
                            r = e.selectedIndex,
                            s = "select-one" === e.type,
                            a = s ? null : [],
                            l = s ? r + 1 : o.length;
                        for (i = r < 0 ? l : s ? r : 0; i < l; i++)
                            if (((n = o[i]).selected || i === r) && !n.disabled && (!n.parentNode.disabled || !N(n.parentNode, "optgroup"))) {
                                if (t = x(n).val(), s) return t;
                                a.push(t)
                            }
                        return a
                    },
                    set: function(e, t) { for (var n, i, o = e.options, r = x.makeArray(t), s = o.length; s--;)((i = o[s]).selected = x.inArray(x.valHooks.option.get(i), r) > -1) && (n = !0); return n || (e.selectedIndex = -1), r }
                }
            }
        }), x.each(["radio", "checkbox"], (function() { x.valHooks[this] = { set: function(e, t) { if (Array.isArray(t)) return e.checked = x.inArray(x(e).val(), t) > -1 } }, g.checkOn || (x.valHooks[this].get = function(e) { return null === e.getAttribute("value") ? "on" : e.value }) })), g.focusin = "onfocusin" in n;
        var Tt = /^(?:focusinfocus|focusoutblur)$/,
            xt = function(e) { e.stopPropagation() };
        x.extend(x.event, {
            trigger: function(e, t, i, o) {
                var r, s, a, l, c, u, d, p, f = [i || b],
                    m = h.call(e, "type") ? e.type : e,
                    g = h.call(e, "namespace") ? e.namespace.split(".") : [];
                if (s = p = a = i = i || b, 3 !== i.nodeType && 8 !== i.nodeType && !Tt.test(m + x.event.triggered) && (m.indexOf(".") > -1 && (g = m.split("."), m = g.shift(), g.sort()), c = m.indexOf(":") < 0 && "on" + m, (e = e[x.expando] ? e : new x.Event(m, "object" == typeof e && e)).isTrigger = o ? 2 : 3, e.namespace = g.join("."), e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + g.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e.result = void 0, e.target || (e.target = i), t = null == t ? [e] : x.makeArray(t, [e]), d = x.event.special[m] || {}, o || !d.trigger || !1 !== d.trigger.apply(i, t))) {
                    if (!o && !d.noBubble && !y(i)) {
                        for (l = d.delegateType || m, Tt.test(l + m) || (s = s.parentNode); s; s = s.parentNode) f.push(s), a = s;
                        a === (i.ownerDocument || b) && f.push(a.defaultView || a.parentWindow || n)
                    }
                    for (r = 0;
                        (s = f[r++]) && !e.isPropagationStopped();) p = s, e.type = r > 1 ? l : d.bindType || m, (u = (G.get(s, "events") || Object.create(null))[e.type] && G.get(s, "handle")) && u.apply(s, t), (u = c && s[c]) && u.apply && K(s) && (e.result = u.apply(s, t), !1 === e.result && e.preventDefault());
                    return e.type = m, o || e.isDefaultPrevented() || d._default && !1 !== d._default.apply(f.pop(), t) || !K(i) || c && v(i[m]) && !y(i) && ((a = i[c]) && (i[c] = null), x.event.triggered = m, e.isPropagationStopped() && p.addEventListener(m, xt), i[m](), e.isPropagationStopped() && p.removeEventListener(m, xt), x.event.triggered = void 0, a && (i[c] = a)), e.result
                }
            },
            simulate: function(e, t, n) {
                var i = x.extend(new x.Event, n, { type: e, isSimulated: !0 });
                x.event.trigger(i, null, t)
            }
        }), x.fn.extend({ trigger: function(e, t) { return this.each((function() { x.event.trigger(e, t, this) })) }, triggerHandler: function(e, t) { var n = this[0]; if (n) return x.event.trigger(e, t, n, !0) } }), g.focusin || x.each({ focus: "focusin", blur: "focusout" }, (function(e, t) {
            var n = function(e) { x.event.simulate(t, e.target, x.event.fix(e)) };
            x.event.special[t] = {
                setup: function() {
                    var i = this.ownerDocument || this.document || this,
                        o = G.access(i, t);
                    o || i.addEventListener(e, n, !0), G.access(i, t, (o || 0) + 1)
                },
                teardown: function() {
                    var i = this.ownerDocument || this.document || this,
                        o = G.access(i, t) - 1;
                    o ? G.access(i, t, o) : (i.removeEventListener(e, n, !0), G.remove(i, t))
                }
            }
        }));
        var St = n.location,
            Ct = { guid: Date.now() },
            At = /\?/;
        x.parseXML = function(e) { var t; if (!e || "string" != typeof e) return null; try { t = (new n.DOMParser).parseFromString(e, "text/xml") } catch (e) { t = void 0 } return t && !t.getElementsByTagName("parsererror").length || x.error("Invalid XML: " + e), t };
        var Et = /\[\]$/,
            Pt = /\r?\n/g,
            Nt = /^(?:submit|button|image|reset|file)$/i,
            Ot = /^(?:input|select|textarea|keygen)/i;

        function Lt(e, t, n, i) {
            var o;
            if (Array.isArray(t)) x.each(t, (function(t, o) { n || Et.test(e) ? i(e, o) : Lt(e + "[" + ("object" == typeof o && null != o ? t : "") + "]", o, n, i) }));
            else if (n || "object" !== T(t)) i(e, t);
            else
                for (o in t) Lt(e + "[" + o + "]", t[o], n, i)
        }
        x.param = function(e, t) {
            var n, i = [],
                o = function(e, t) {
                    var n = v(t) ? t() : t;
                    i[i.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n)
                };
            if (null == e) return "";
            if (Array.isArray(e) || e.jquery && !x.isPlainObject(e)) x.each(e, (function() { o(this.name, this.value) }));
            else
                for (n in e) Lt(n, e[n], t, o);
            return i.join("&")
        }, x.fn.extend({ serialize: function() { return x.param(this.serializeArray()) }, serializeArray: function() { return this.map((function() { var e = x.prop(this, "elements"); return e ? x.makeArray(e) : this })).filter((function() { var e = this.type; return this.name && !x(this).is(":disabled") && Ot.test(this.nodeName) && !Nt.test(e) && (this.checked || !me.test(e)) })).map((function(e, t) { var n = x(this).val(); return null == n ? null : Array.isArray(n) ? x.map(n, (function(e) { return { name: t.name, value: e.replace(Pt, "\r\n") } })) : { name: t.name, value: n.replace(Pt, "\r\n") } })).get() } });
        var Mt = /%20/g,
            $t = /#.*$/,
            jt = /([?&])_=[^&]*/,
            Dt = /^(.*?):[ \t]*([^\r\n]*)$/gm,
            It = /^(?:GET|HEAD)$/,
            Ht = /^\/\//,
            qt = {},
            _t = {},
            Rt = "*/".concat("*"),
            Ft = b.createElement("a");

        function zt(e) {
            return function(t, n) {
                "string" != typeof t && (n = t, t = "*");
                var i, o = 0,
                    r = t.toLowerCase().match(H) || [];
                if (v(n))
                    for (; i = r[o++];) "+" === i[0] ? (i = i.slice(1) || "*", (e[i] = e[i] || []).unshift(n)) : (e[i] = e[i] || []).push(n)
            }
        }

        function Wt(e, t, n, i) {
            var o = {},
                r = e === _t;

            function s(a) { var l; return o[a] = !0, x.each(e[a] || [], (function(e, a) { var c = a(t, n, i); return "string" != typeof c || r || o[c] ? r ? !(l = c) : void 0 : (t.dataTypes.unshift(c), s(c), !1) })), l }
            return s(t.dataTypes[0]) || !o["*"] && s("*")
        }

        function Bt(e, t) { var n, i, o = x.ajaxSettings.flatOptions || {}; for (n in t) void 0 !== t[n] && ((o[n] ? e : i || (i = {}))[n] = t[n]); return i && x.extend(!0, e, i), e }
        Ft.href = St.href, x.extend({
            active: 0,
            lastModified: {},
            etag: {},
            ajaxSettings: { url: St.href, type: "GET", isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(St.protocol), global: !0, processData: !0, async: !0, contentType: "application/x-www-form-urlencoded; charset=UTF-8", accepts: { "*": Rt, text: "text/plain", html: "text/html", xml: "application/xml, text/xml", json: "application/json, text/javascript" }, contents: { xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/ }, responseFields: { xml: "responseXML", text: "responseText", json: "responseJSON" }, converters: { "* text": String, "text html": !0, "text json": JSON.parse, "text xml": x.parseXML }, flatOptions: { url: !0, context: !0 } },
            ajaxSetup: function(e, t) { return t ? Bt(Bt(e, x.ajaxSettings), t) : Bt(x.ajaxSettings, e) },
            ajaxPrefilter: zt(qt),
            ajaxTransport: zt(_t),
            ajax: function(e, t) {
                "object" == typeof e && (t = e, e = void 0), t = t || {};
                var i, o, r, s, a, l, c, u, d, p, h = x.ajaxSetup({}, t),
                    f = h.context || h,
                    m = h.context && (f.nodeType || f.jquery) ? x(f) : x.event,
                    g = x.Deferred(),
                    v = x.Callbacks("once memory"),
                    y = h.statusCode || {},
                    w = {},
                    k = {},
                    T = "canceled",
                    S = {
                        readyState: 0,
                        getResponseHeader: function(e) {
                            var t;
                            if (c) {
                                if (!s)
                                    for (s = {}; t = Dt.exec(r);) s[t[1].toLowerCase() + " "] = (s[t[1].toLowerCase() + " "] || []).concat(t[2]);
                                t = s[e.toLowerCase() + " "]
                            }
                            return null == t ? null : t.join(", ")
                        },
                        getAllResponseHeaders: function() { return c ? r : null },
                        setRequestHeader: function(e, t) { return null == c && (e = k[e.toLowerCase()] = k[e.toLowerCase()] || e, w[e] = t), this },
                        overrideMimeType: function(e) { return null == c && (h.mimeType = e), this },
                        statusCode: function(e) {
                            var t;
                            if (e)
                                if (c) S.always(e[S.status]);
                                else
                                    for (t in e) y[t] = [y[t], e[t]];
                            return this
                        },
                        abort: function(e) { var t = e || T; return i && i.abort(t), C(0, t), this }
                    };
                if (g.promise(S), h.url = ((e || h.url || St.href) + "").replace(Ht, St.protocol + "//"), h.type = t.method || t.type || h.method || h.type, h.dataTypes = (h.dataType || "*").toLowerCase().match(H) || [""], null == h.crossDomain) { l = b.createElement("a"); try { l.href = h.url, l.href = l.href, h.crossDomain = Ft.protocol + "//" + Ft.host != l.protocol + "//" + l.host } catch (e) { h.crossDomain = !0 } }
                if (h.data && h.processData && "string" != typeof h.data && (h.data = x.param(h.data, h.traditional)), Wt(qt, h, t, S), c) return S;
                for (d in (u = x.event && h.global) && 0 == x.active++ && x.event.trigger("ajaxStart"), h.type = h.type.toUpperCase(), h.hasContent = !It.test(h.type), o = h.url.replace($t, ""), h.hasContent ? h.data && h.processData && 0 === (h.contentType || "").indexOf("application/x-www-form-urlencoded") && (h.data = h.data.replace(Mt, "+")) : (p = h.url.slice(o.length), h.data && (h.processData || "string" == typeof h.data) && (o += (At.test(o) ? "&" : "?") + h.data, delete h.data), !1 === h.cache && (o = o.replace(jt, "$1"), p = (At.test(o) ? "&" : "?") + "_=" + Ct.guid++ + p), h.url = o + p), h.ifModified && (x.lastModified[o] && S.setRequestHeader("If-Modified-Since", x.lastModified[o]), x.etag[o] && S.setRequestHeader("If-None-Match", x.etag[o])), (h.data && h.hasContent && !1 !== h.contentType || t.contentType) && S.setRequestHeader("Content-Type", h.contentType), S.setRequestHeader("Accept", h.dataTypes[0] && h.accepts[h.dataTypes[0]] ? h.accepts[h.dataTypes[0]] + ("*" !== h.dataTypes[0] ? ", " + Rt + "; q=0.01" : "") : h.accepts["*"]), h.headers) S.setRequestHeader(d, h.headers[d]);
                if (h.beforeSend && (!1 === h.beforeSend.call(f, S, h) || c)) return S.abort();
                if (T = "abort", v.add(h.complete), S.done(h.success), S.fail(h.error), i = Wt(_t, h, t, S)) {
                    if (S.readyState = 1, u && m.trigger("ajaxSend", [S, h]), c) return S;
                    h.async && h.timeout > 0 && (a = n.setTimeout((function() { S.abort("timeout") }), h.timeout));
                    try { c = !1, i.send(w, C) } catch (e) {
                        if (c) throw e;
                        C(-1, e)
                    }
                } else C(-1, "No Transport");

                function C(e, t, s, l) {
                    var d, p, b, w, k, T = t;
                    c || (c = !0, a && n.clearTimeout(a), i = void 0, r = l || "", S.readyState = e > 0 ? 4 : 0, d = e >= 200 && e < 300 || 304 === e, s && (w = function(e, t, n) {
                        for (var i, o, r, s, a = e.contents, l = e.dataTypes;
                            "*" === l[0];) l.shift(), void 0 === i && (i = e.mimeType || t.getResponseHeader("Content-Type"));
                        if (i)
                            for (o in a)
                                if (a[o] && a[o].test(i)) { l.unshift(o); break }
                        if (l[0] in n) r = l[0];
                        else {
                            for (o in n) {
                                if (!l[0] || e.converters[o + " " + l[0]]) { r = o; break }
                                s || (s = o)
                            }
                            r = r || s
                        }
                        if (r) return r !== l[0] && l.unshift(r), n[r]
                    }(h, S, s)), !d && x.inArray("script", h.dataTypes) > -1 && (h.converters["text script"] = function() {}), w = function(e, t, n, i) {
                        var o, r, s, a, l, c = {},
                            u = e.dataTypes.slice();
                        if (u[1])
                            for (s in e.converters) c[s.toLowerCase()] = e.converters[s];
                        for (r = u.shift(); r;)
                            if (e.responseFields[r] && (n[e.responseFields[r]] = t), !l && i && e.dataFilter && (t = e.dataFilter(t, e.dataType)), l = r, r = u.shift())
                                if ("*" === r) r = l;
                                else if ("*" !== l && l !== r) {
                            if (!(s = c[l + " " + r] || c["* " + r]))
                                for (o in c)
                                    if ((a = o.split(" "))[1] === r && (s = c[l + " " + a[0]] || c["* " + a[0]])) {!0 === s ? s = c[o] : !0 !== c[o] && (r = a[0], u.unshift(a[1])); break }
                            if (!0 !== s)
                                if (s && e.throws) t = s(t);
                                else try { t = s(t) } catch (e) { return { state: "parsererror", error: s ? e : "No conversion from " + l + " to " + r } }
                        }
                        return { state: "success", data: t }
                    }(h, w, S, d), d ? (h.ifModified && ((k = S.getResponseHeader("Last-Modified")) && (x.lastModified[o] = k), (k = S.getResponseHeader("etag")) && (x.etag[o] = k)), 204 === e || "HEAD" === h.type ? T = "nocontent" : 304 === e ? T = "notmodified" : (T = w.state, p = w.data, d = !(b = w.error))) : (b = T, !e && T || (T = "error", e < 0 && (e = 0))), S.status = e, S.statusText = (t || T) + "", d ? g.resolveWith(f, [p, T, S]) : g.rejectWith(f, [S, T, b]), S.statusCode(y), y = void 0, u && m.trigger(d ? "ajaxSuccess" : "ajaxError", [S, h, d ? p : b]), v.fireWith(f, [S, T]), u && (m.trigger("ajaxComplete", [S, h]), --x.active || x.event.trigger("ajaxStop")))
                }
                return S
            },
            getJSON: function(e, t, n) { return x.get(e, t, n, "json") },
            getScript: function(e, t) { return x.get(e, void 0, t, "script") }
        }), x.each(["get", "post"], (function(e, t) { x[t] = function(e, n, i, o) { return v(n) && (o = o || i, i = n, n = void 0), x.ajax(x.extend({ url: e, type: t, dataType: o, data: n, success: i }, x.isPlainObject(e) && e)) } })), x.ajaxPrefilter((function(e) { var t; for (t in e.headers) "content-type" === t.toLowerCase() && (e.contentType = e.headers[t] || "") })), x._evalUrl = function(e, t, n) { return x.ajax({ url: e, type: "GET", dataType: "script", cache: !0, async: !1, global: !1, converters: { "text script": function() {} }, dataFilter: function(e) { x.globalEval(e, t, n) } }) }, x.fn.extend({
            wrapAll: function(e) { var t; return this[0] && (v(e) && (e = e.call(this[0])), t = x(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map((function() { for (var e = this; e.firstElementChild;) e = e.firstElementChild; return e })).append(this)), this },
            wrapInner: function(e) {
                return v(e) ? this.each((function(t) { x(this).wrapInner(e.call(this, t)) })) : this.each((function() {
                    var t = x(this),
                        n = t.contents();
                    n.length ? n.wrapAll(e) : t.append(e)
                }))
            },
            wrap: function(e) { var t = v(e); return this.each((function(n) { x(this).wrapAll(t ? e.call(this, n) : e) })) },
            unwrap: function(e) { return this.parent(e).not("body").each((function() { x(this).replaceWith(this.childNodes) })), this }
        }), x.expr.pseudos.hidden = function(e) { return !x.expr.pseudos.visible(e) }, x.expr.pseudos.visible = function(e) { return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length) }, x.ajaxSettings.xhr = function() { try { return new n.XMLHttpRequest } catch (e) {} };
        var Ut = { 0: 200, 1223: 204 },
            Vt = x.ajaxSettings.xhr();
        g.cors = !!Vt && "withCredentials" in Vt, g.ajax = Vt = !!Vt, x.ajaxTransport((function(e) {
            var t, i;
            if (g.cors || Vt && !e.crossDomain) return {
                send: function(o, r) {
                    var s, a = e.xhr();
                    if (a.open(e.type, e.url, e.async, e.username, e.password), e.xhrFields)
                        for (s in e.xhrFields) a[s] = e.xhrFields[s];
                    for (s in e.mimeType && a.overrideMimeType && a.overrideMimeType(e.mimeType), e.crossDomain || o["X-Requested-With"] || (o["X-Requested-With"] = "XMLHttpRequest"), o) a.setRequestHeader(s, o[s]);
                    t = function(e) { return function() { t && (t = i = a.onload = a.onerror = a.onabort = a.ontimeout = a.onreadystatechange = null, "abort" === e ? a.abort() : "error" === e ? "number" != typeof a.status ? r(0, "error") : r(a.status, a.statusText) : r(Ut[a.status] || a.status, a.statusText, "text" !== (a.responseType || "text") || "string" != typeof a.responseText ? { binary: a.response } : { text: a.responseText }, a.getAllResponseHeaders())) } }, a.onload = t(), i = a.onerror = a.ontimeout = t("error"), void 0 !== a.onabort ? a.onabort = i : a.onreadystatechange = function() { 4 === a.readyState && n.setTimeout((function() { t && i() })) }, t = t("abort");
                    try { a.send(e.hasContent && e.data || null) } catch (e) { if (t) throw e }
                },
                abort: function() { t && t() }
            }
        })), x.ajaxPrefilter((function(e) { e.crossDomain && (e.contents.script = !1) })), x.ajaxSetup({ accepts: { script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript" }, contents: { script: /\b(?:java|ecma)script\b/ }, converters: { "text script": function(e) { return x.globalEval(e), e } } }), x.ajaxPrefilter("script", (function(e) { void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET") })), x.ajaxTransport("script", (function(e) { var t, n; if (e.crossDomain || e.scriptAttrs) return { send: function(i, o) { t = x("<script>").attr(e.scriptAttrs || {}).prop({ charset: e.scriptCharset, src: e.url }).on("load error", n = function(e) { t.remove(), n = null, e && o("error" === e.type ? 404 : 200, e.type) }), b.head.appendChild(t[0]) }, abort: function() { n && n() } } }));
        var Xt, Yt = [],
            Kt = /(=)\?(?=&|$)|\?\?/;
        x.ajaxSetup({ jsonp: "callback", jsonpCallback: function() { var e = Yt.pop() || x.expando + "_" + Ct.guid++; return this[e] = !0, e } }), x.ajaxPrefilter("json jsonp", (function(e, t, i) { var o, r, s, a = !1 !== e.jsonp && (Kt.test(e.url) ? "url" : "string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && Kt.test(e.data) && "data"); if (a || "jsonp" === e.dataTypes[0]) return o = e.jsonpCallback = v(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, a ? e[a] = e[a].replace(Kt, "$1" + o) : !1 !== e.jsonp && (e.url += (At.test(e.url) ? "&" : "?") + e.jsonp + "=" + o), e.converters["script json"] = function() { return s || x.error(o + " was not called"), s[0] }, e.dataTypes[0] = "json", r = n[o], n[o] = function() { s = arguments }, i.always((function() { void 0 === r ? x(n).removeProp(o) : n[o] = r, e[o] && (e.jsonpCallback = t.jsonpCallback, Yt.push(o)), s && v(r) && r(s[0]), s = r = void 0 })), "script" })), g.createHTMLDocument = ((Xt = b.implementation.createHTMLDocument("").body).innerHTML = "<form></form><form></form>", 2 === Xt.childNodes.length), x.parseHTML = function(e, t, n) { return "string" != typeof e ? [] : ("boolean" == typeof t && (n = t, t = !1), t || (g.createHTMLDocument ? ((i = (t = b.implementation.createHTMLDocument("")).createElement("base")).href = b.location.href, t.head.appendChild(i)) : t = b), r = !n && [], (o = O.exec(e)) ? [t.createElement(o[1])] : (o = Te([e], t, r), r && r.length && x(r).remove(), x.merge([], o.childNodes))); var i, o, r }, x.fn.load = function(e, t, n) {
            var i, o, r, s = this,
                a = e.indexOf(" ");
            return a > -1 && (i = yt(e.slice(a)), e = e.slice(0, a)), v(t) ? (n = t, t = void 0) : t && "object" == typeof t && (o = "POST"), s.length > 0 && x.ajax({ url: e, type: o || "GET", dataType: "html", data: t }).done((function(e) { r = arguments, s.html(i ? x("<div>").append(x.parseHTML(e)).find(i) : e) })).always(n && function(e, t) { s.each((function() { n.apply(this, r || [e.responseText, t, e]) })) }), this
        }, x.expr.pseudos.animated = function(e) { return x.grep(x.timers, (function(t) { return e === t.elem })).length }, x.offset = {
            setOffset: function(e, t, n) {
                var i, o, r, s, a, l, c = x.css(e, "position"),
                    u = x(e),
                    d = {};
                "static" === c && (e.style.position = "relative"), a = u.offset(), r = x.css(e, "top"), l = x.css(e, "left"), ("absolute" === c || "fixed" === c) && (r + l).indexOf("auto") > -1 ? (s = (i = u.position()).top, o = i.left) : (s = parseFloat(r) || 0, o = parseFloat(l) || 0), v(t) && (t = t.call(e, n, x.extend({}, a))), null != t.top && (d.top = t.top - a.top + s), null != t.left && (d.left = t.left - a.left + o), "using" in t ? t.using.call(e, d) : ("number" == typeof d.top && (d.top += "px"), "number" == typeof d.left && (d.left += "px"), u.css(d))
            }
        }, x.fn.extend({
            offset: function(e) { if (arguments.length) return void 0 === e ? this : this.each((function(t) { x.offset.setOffset(this, e, t) })); var t, n, i = this[0]; return i ? i.getClientRects().length ? (t = i.getBoundingClientRect(), n = i.ownerDocument.defaultView, { top: t.top + n.pageYOffset, left: t.left + n.pageXOffset }) : { top: 0, left: 0 } : void 0 },
            position: function() {
                if (this[0]) {
                    var e, t, n, i = this[0],
                        o = { top: 0, left: 0 };
                    if ("fixed" === x.css(i, "position")) t = i.getBoundingClientRect();
                    else {
                        for (t = this.offset(), n = i.ownerDocument, e = i.offsetParent || n.documentElement; e && (e === n.body || e === n.documentElement) && "static" === x.css(e, "position");) e = e.parentNode;
                        e && e !== i && 1 === e.nodeType && ((o = x(e).offset()).top += x.css(e, "borderTopWidth", !0), o.left += x.css(e, "borderLeftWidth", !0))
                    }
                    return { top: t.top - o.top - x.css(i, "marginTop", !0), left: t.left - o.left - x.css(i, "marginLeft", !0) }
                }
            },
            offsetParent: function() { return this.map((function() { for (var e = this.offsetParent; e && "static" === x.css(e, "position");) e = e.offsetParent; return e || re })) }
        }), x.each({ scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, (function(e, t) {
            var n = "pageYOffset" === t;
            x.fn[e] = function(i) {
                return B(this, (function(e, i, o) {
                    var r;
                    if (y(e) ? r = e : 9 === e.nodeType && (r = e.defaultView), void 0 === o) return r ? r[t] : e[i];
                    r ? r.scrollTo(n ? r.pageXOffset : o, n ? o : r.pageYOffset) : e[i] = o
                }), e, i, arguments.length)
            }
        })), x.each(["top", "left"], (function(e, t) { x.cssHooks[t] = Ve(g.pixelPosition, (function(e, n) { if (n) return n = Ue(e, t), Fe.test(n) ? x(e).position()[t] + "px" : n })) })), x.each({ Height: "height", Width: "width" }, (function(e, t) {
            x.each({ padding: "inner" + e, content: t, "": "outer" + e }, (function(n, i) {
                x.fn[i] = function(o, r) {
                    var s = arguments.length && (n || "boolean" != typeof o),
                        a = n || (!0 === o || !0 === r ? "margin" : "border");
                    return B(this, (function(t, n, o) { var r; return y(t) ? 0 === i.indexOf("outer") ? t["inner" + e] : t.document.documentElement["client" + e] : 9 === t.nodeType ? (r = t.documentElement, Math.max(t.body["scroll" + e], r["scroll" + e], t.body["offset" + e], r["offset" + e], r["client" + e])) : void 0 === o ? x.css(t, n, a) : x.style(t, n, o, a) }), t, s ? o : void 0, s)
                }
            }))
        })), x.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], (function(e, t) { x.fn[t] = function(e) { return this.on(t, e) } })), x.fn.extend({ bind: function(e, t, n) { return this.on(e, null, t, n) }, unbind: function(e, t) { return this.off(e, null, t) }, delegate: function(e, t, n, i) { return this.on(t, e, n, i) }, undelegate: function(e, t, n) { return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n) }, hover: function(e, t) { return this.mouseenter(e).mouseleave(t || e) } }), x.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), (function(e, t) { x.fn[t] = function(e, n) { return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t) } }));
        var Qt = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
        x.proxy = function(e, t) { var n, i, o; if ("string" == typeof t && (n = e[t], t = e, e = n), v(e)) return i = a.call(arguments, 2), (o = function() { return e.apply(t || this, i.concat(a.call(arguments))) }).guid = e.guid = e.guid || x.guid++, o }, x.holdReady = function(e) { e ? x.readyWait++ : x.ready(!0) }, x.isArray = Array.isArray, x.parseJSON = JSON.parse, x.nodeName = N, x.isFunction = v, x.isWindow = y, x.camelCase = Y, x.type = T, x.now = Date.now, x.isNumeric = function(e) { var t = x.type(e); return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e)) }, x.trim = function(e) { return null == e ? "" : (e + "").replace(Qt, "") }, void 0 === (i = function() { return x }.apply(t, [])) || (e.exports = i);
        var Gt = n.jQuery,
            Jt = n.$;
        return x.noConflict = function(e) { return n.$ === x && (n.$ = Jt), e && n.jQuery === x && (n.jQuery = Gt), x }, void 0 === o && (n.jQuery = n.$ = x), x
    }))
}, function(e, t, n) {
    "use strict";
    var i, o = function() { return void 0 === i && (i = Boolean(window && document && document.all && !window.atob)), i },
        r = function() {
            var e = {};
            return function(t) {
                if (void 0 === e[t]) {
                    var n = document.querySelector(t);
                    if (window.HTMLIFrameElement && n instanceof window.HTMLIFrameElement) try { n = n.contentDocument.head } catch (e) { n = null }
                    e[t] = n
                }
                return e[t]
            }
        }(),
        s = [];

    function a(e) {
        for (var t = -1, n = 0; n < s.length; n++)
            if (s[n].identifier === e) { t = n; break }
        return t
    }

    function l(e, t) {
        for (var n = {}, i = [], o = 0; o < e.length; o++) {
            var r = e[o],
                l = t.base ? r[0] + t.base : r[0],
                c = n[l] || 0,
                u = "".concat(l, " ").concat(c);
            n[l] = c + 1;
            var d = a(u),
                p = { css: r[1], media: r[2], sourceMap: r[3] }; - 1 !== d ? (s[d].references++, s[d].updater(p)) : s.push({ identifier: u, updater: g(p, t), references: 1 }), i.push(u)
        }
        return i
    }

    function c(e) {
        var t = document.createElement("style"),
            i = e.attributes || {};
        if (void 0 === i.nonce) {
            var o = n.nc;
            o && (i.nonce = o)
        }
        if (Object.keys(i).forEach((function(e) { t.setAttribute(e, i[e]) })), "function" == typeof e.insert) e.insert(t);
        else {
            var s = r(e.insert || "head");
            if (!s) throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
            s.appendChild(t)
        }
        return t
    }
    var u, d = (u = [], function(e, t) { return u[e] = t, u.filter(Boolean).join("\n") });

    function p(e, t, n, i) {
        var o = n ? "" : i.media ? "@media ".concat(i.media, " {").concat(i.css, "}") : i.css;
        if (e.styleSheet) e.styleSheet.cssText = d(t, o);
        else {
            var r = document.createTextNode(o),
                s = e.childNodes;
            s[t] && e.removeChild(s[t]), s.length ? e.insertBefore(r, s[t]) : e.appendChild(r)
        }
    }

    function h(e, t, n) {
        var i = n.css,
            o = n.media,
            r = n.sourceMap;
        if (o ? e.setAttribute("media", o) : e.removeAttribute("media"), r && btoa && (i += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(r)))), " */")), e.styleSheet) e.styleSheet.cssText = i;
        else {
            for (; e.firstChild;) e.removeChild(e.firstChild);
            e.appendChild(document.createTextNode(i))
        }
    }
    var f = null,
        m = 0;

    function g(e, t) {
        var n, i, o;
        if (t.singleton) {
            var r = m++;
            n = f || (f = c(t)), i = p.bind(null, n, r, !1), o = p.bind(null, n, r, !0)
        } else n = c(t), i = h.bind(null, n, t), o = function() {
            ! function(e) {
                if (null === e.parentNode) return !1;
                e.parentNode.removeChild(e)
            }(n)
        };
        return i(e),
            function(t) {
                if (t) {
                    if (t.css === e.css && t.media === e.media && t.sourceMap === e.sourceMap) return;
                    i(e = t)
                } else o()
            }
    }
    e.exports = function(e, t) {
        (t = t || {}).singleton || "boolean" == typeof t.singleton || (t.singleton = o());
        var n = l(e = e || [], t);
        return function(e) {
            if (e = e || [], "[object Array]" === Object.prototype.toString.call(e)) {
                for (var i = 0; i < n.length; i++) {
                    var o = a(n[i]);
                    s[o].references--
                }
                for (var r = l(e, t), c = 0; c < n.length; c++) {
                    var u = a(n[c]);
                    0 === s[u].references && (s[u].updater(), s.splice(u, 1))
                }
                n = r
            }
        }
    }
}, function(e, t, n) {
    (function(t) {
        "object" == typeof navigator && (e.exports = function() {
            "use strict";

            function e(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") }

            function n(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var i = t[n];
                    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
                }
            }

            function i(e, t, i) { return t && n(e.prototype, t), i && n(e, i), e }

            function o(e, t, n) { return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e }

            function r(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    t && (i = i.filter((function(t) { return Object.getOwnPropertyDescriptor(e, t).enumerable }))), n.push.apply(n, i)
                }
                return n
            }

            function s(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? r(Object(n), !0).forEach((function(t) { o(e, t, n[t]) })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : r(Object(n)).forEach((function(t) { Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t)) }))
                }
                return e
            }

            function a(e, t) {
                return function(e) { if (Array.isArray(e)) return e }(e) || function(e, t) {
                    if ("undefined" != typeof Symbol && Symbol.iterator in Object(e)) {
                        var n = [],
                            i = !0,
                            o = !1,
                            r = void 0;
                        try { for (var s, a = e[Symbol.iterator](); !(i = (s = a.next()).done) && (n.push(s.value), !t || n.length !== t); i = !0); } catch (e) { o = !0, r = e } finally { try { i || null == a.return || a.return() } finally { if (o) throw r } }
                        return n
                    }
                }(e, t) || c(e, t) || function() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.") }()
            }

            function l(e) { return function(e) { if (Array.isArray(e)) return u(e) }(e) || function(e) { if ("undefined" != typeof Symbol && Symbol.iterator in Object(e)) return Array.from(e) }(e) || c(e) || function() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.") }() }

            function c(e, t) { if (e) { if ("string" == typeof e) return u(e, t); var n = Object.prototype.toString.call(e).slice(8, -1); return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? u(e, t) : void 0 } }

            function u(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, i = new Array(t); n < t; n++) i[n] = e[n];
                return i
            }

            function d(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var i = t[n];
                    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
                }
            }

            function p(e, t, n) { return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e }

            function h(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    t && (i = i.filter((function(t) { return Object.getOwnPropertyDescriptor(e, t).enumerable }))), n.push.apply(n, i)
                }
                return n
            }

            function f(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? h(Object(n), !0).forEach((function(t) { p(e, t, n[t]) })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : h(Object(n)).forEach((function(t) { Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t)) }))
                }
                return e
            }
            var m = { addCSS: !0, thumbWidth: 15, watch: !0 };

            function g(e, t) { return function() { return Array.from(document.querySelectorAll(t)).includes(this) }.call(e, t) }
            var v, y, b, w = function(e) { return null != e ? e.constructor : null },
                k = function(e, t) { return !!(e && t && e instanceof t) },
                T = function(e) { return w(e) === String },
                x = function(e) { return Array.isArray(e) },
                S = function(e) { return k(e, NodeList) },
                C = T,
                A = x,
                E = S,
                P = function(e) { return k(e, Element) },
                N = function(e) { return k(e, Event) },
                O = function(e) { return function(e) { return null == e }(e) || (T(e) || x(e) || S(e)) && !e.length || function(e) { return w(e) === Object }(e) && !Object.keys(e).length },
                L = function() {
                    function e(t, n) {
                        (function(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") })(this, e), P(t) ? this.element = t : C(t) && (this.element = document.querySelector(t)), P(this.element) && O(this.element.rangeTouch) && (this.config = f({}, m, {}, n), this.init())
                    }
                    return function(e, t, n) { t && d(e.prototype, t), n && d(e, n) }(e, [{ key: "init", value: function() { e.enabled && (this.config.addCSS && (this.element.style.userSelect = "none", this.element.style.webKitUserSelect = "none", this.element.style.touchAction = "manipulation"), this.listeners(!0), this.element.rangeTouch = this) } }, { key: "destroy", value: function() { e.enabled && (this.config.addCSS && (this.element.style.userSelect = "", this.element.style.webKitUserSelect = "", this.element.style.touchAction = ""), this.listeners(!1), this.element.rangeTouch = null) } }, {
                        key: "listeners",
                        value: function(e) {
                            var t = this,
                                n = e ? "addEventListener" : "removeEventListener";
                            ["touchstart", "touchmove", "touchend"].forEach((function(e) { t.element[n](e, (function(e) { return t.set(e) }), !1) }))
                        }
                    }, {
                        key: "get",
                        value: function(t) {
                            if (!e.enabled || !N(t)) return null;
                            var n, i = t.target,
                                o = t.changedTouches[0],
                                r = parseFloat(i.getAttribute("min")) || 0,
                                s = parseFloat(i.getAttribute("max")) || 100,
                                a = parseFloat(i.getAttribute("step")) || 1,
                                l = i.getBoundingClientRect(),
                                c = 100 / l.width * (this.config.thumbWidth / 2) / 100;
                            return 0 > (n = 100 / l.width * (o.clientX - l.left)) ? n = 0 : 100 < n && (n = 100), 50 > n ? n -= (100 - 2 * n) * c : 50 < n && (n += 2 * (n - 50) * c), r + function(e, t) { if (1 > t) { var n = function(e) { var t = "".concat(e).match(/(?:\.(\d+))?(?:[eE]([+-]?\d+))?$/); return t ? Math.max(0, (t[1] ? t[1].length : 0) - (t[2] ? +t[2] : 0)) : 0 }(t); return parseFloat(e.toFixed(n)) } return Math.round(e / t) * t }(n / 100 * (s - r), a)
                        }
                    }, {
                        key: "set",
                        value: function(t) {
                            e.enabled && N(t) && !t.target.disabled && (t.preventDefault(), t.target.value = this.get(t), function(e, t) {
                                if (e && t) {
                                    var n = new Event(t, { bubbles: !0 });
                                    e.dispatchEvent(n)
                                }
                            }(t.target, "touchend" === t.type ? "change" : "input"))
                        }
                    }], [{
                        key: "setup",
                        value: function(t) {
                            var n = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {},
                                i = null;
                            if (O(t) || C(t) ? i = Array.from(document.querySelectorAll(C(t) ? t : 'input[type="range"]')) : P(t) ? i = [t] : E(t) ? i = Array.from(t) : A(t) && (i = t.filter(P)), O(i)) return null;
                            var o = f({}, m, {}, n);
                            if (C(t) && o.watch) {
                                var r = new MutationObserver((function(n) { Array.from(n).forEach((function(n) { Array.from(n.addedNodes).forEach((function(n) { P(n) && g(n, t) && new e(n, o) })) })) }));
                                r.observe(document.body, { childList: !0, subtree: !0 })
                            }
                            return i.map((function(t) { return new e(t, n) }))
                        }
                    }, { key: "enabled", get: function() { return "ontouchstart" in document.documentElement } }]), e
                }(),
                M = function(e) { return null != e ? e.constructor : null },
                $ = function(e, t) { return Boolean(e && t && e instanceof t) },
                j = function(e) { return null == e },
                D = function(e) { return M(e) === Object },
                I = function(e) { return M(e) === String },
                H = function(e) { return M(e) === Function },
                q = function(e) { return Array.isArray(e) },
                _ = function(e) { return $(e, NodeList) },
                R = function(e) { return j(e) || (I(e) || q(e) || _(e)) && !e.length || D(e) && !Object.keys(e).length },
                F = j,
                z = D,
                W = function(e) { return M(e) === Number && !Number.isNaN(e) },
                B = I,
                U = function(e) { return M(e) === Boolean },
                V = H,
                X = q,
                Y = _,
                K = function(e) { return $(e, Element) },
                Q = function(e) { return $(e, Event) },
                G = function(e) { return $(e, KeyboardEvent) },
                J = function(e) { return $(e, TextTrack) || !j(e) && I(e.kind) },
                Z = function(e) {
                    if ($(e, window.URL)) return !0;
                    if (!I(e)) return !1;
                    var t = e;
                    e.startsWith("http://") && e.startsWith("https://") || (t = "http://".concat(e));
                    try { return !R(new URL(t).hostname) } catch (e) { return !1 }
                },
                ee = R,
                te = (v = document.createElement("span"), y = { WebkitTransition: "webkitTransitionEnd", MozTransition: "transitionend", OTransition: "oTransitionEnd otransitionend", transition: "transitionend" }, b = Object.keys(y).find((function(e) { return void 0 !== v.style[e] })), !!B(b) && y[b]);

            function ne(e, t) { setTimeout((function() { try { e.hidden = !0, e.offsetHeight, e.hidden = !1 } catch (e) {} }), t) }
            var ie = {
                isIE:
                /* @cc_on!@ */
                    !!document.documentMode,
                isEdge: window.navigator.userAgent.includes("Edge"),
                isWebkit: "WebkitAppearance" in document.documentElement.style && !/Edge/.test(navigator.userAgent),
                isIPhone: /(iPhone|iPod)/gi.test(navigator.platform),
                isIos: /(iPad|iPhone|iPod)/gi.test(navigator.platform)
            };

            function oe(e, t) { return t.split(".").reduce((function(e, t) { return e && e[t] }), e) }

            function re() { for (var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++) n[i - 1] = arguments[i]; if (!n.length) return e; var r = n.shift(); return z(r) ? (Object.keys(r).forEach((function(t) { z(r[t]) ? (Object.keys(e).includes(t) || Object.assign(e, o({}, t, {})), re(e[t], r[t])) : Object.assign(e, o({}, t, r[t])) })), re.apply(void 0, [e].concat(n))) : e }

            function se(e, t) {
                var n = e.length ? e : [e];
                Array.from(n).reverse().forEach((function(e, n) {
                    var i = n > 0 ? t.cloneNode(!0) : t,
                        o = e.parentNode,
                        r = e.nextSibling;
                    i.appendChild(e), r ? o.insertBefore(i, r) : o.appendChild(i)
                }))
            }

            function ae(e, t) {
                K(e) && !ee(t) && Object.entries(t).filter((function(e) { var t = a(e, 2)[1]; return !F(t) })).forEach((function(t) {
                    var n = a(t, 2),
                        i = n[0],
                        o = n[1];
                    return e.setAttribute(i, o)
                }))
            }

            function le(e, t, n) { var i = document.createElement(e); return z(t) && ae(i, t), B(n) && (i.innerText = n), i }

            function ce(e, t, n, i) { K(t) && t.appendChild(le(e, n, i)) }

            function ue(e) { Y(e) || X(e) ? Array.from(e).forEach(ue) : K(e) && K(e.parentNode) && e.parentNode.removeChild(e) }

            function de(e) {
                if (K(e))
                    for (var t = e.childNodes.length; t > 0;) e.removeChild(e.lastChild), t -= 1
            }

            function pe(e, t) { return K(t) && K(t.parentNode) && K(e) ? (t.parentNode.replaceChild(e, t), e) : null }

            function he(e, t) {
                if (!B(e) || ee(e)) return {};
                var n = {},
                    i = re({}, t);
                return e.split(",").forEach((function(e) {
                    var t = e.trim(),
                        o = t.replace(".", ""),
                        r = t.replace(/[[\]]/g, "").split("="),
                        s = a(r, 1)[0],
                        l = r.length > 1 ? r[1].replace(/["']/g, "") : "";
                    switch (t.charAt(0)) {
                        case ".":
                            B(i.class) ? n.class = "".concat(i.class, " ").concat(o) : n.class = o;
                            break;
                        case "#":
                            n.id = t.replace("#", "");
                            break;
                        case "[":
                            n[s] = l
                    }
                })), re(i, n)
            }

            function fe(e, t) {
                if (K(e)) {
                    var n = t;
                    U(n) || (n = !e.hidden), e.hidden = n
                }
            }

            function me(e, t, n) { if (Y(e)) return Array.from(e).map((function(e) { return me(e, t, n) })); if (K(e)) { var i = "toggle"; return void 0 !== n && (i = n ? "add" : "remove"), e.classList[i](t), e.classList.contains(t) } return !1 }

            function ge(e, t) { return K(e) && e.classList.contains(t) }

            function ve(e, t) { var n = Element.prototype; return (n.matches || n.webkitMatchesSelector || n.mozMatchesSelector || n.msMatchesSelector || function() { return Array.from(document.querySelectorAll(t)).includes(this) }).call(e, t) }

            function ye(e) { return this.elements.container.querySelectorAll(e) }

            function be(e) { return this.elements.container.querySelector(e) }

            function we() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
                    t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                K(e) && (e.focus({ preventScroll: !0 }), t && me(e, this.config.classNames.tabFocus))
            }
            var ke, Te = { "audio/ogg": "vorbis", "audio/wav": "1", "video/webm": "vp8, vorbis", "video/mp4": "avc1.42E01E, mp4a.40.2", "video/ogg": "theora" },
                xe = {
                    audio: "canPlayType" in document.createElement("audio"),
                    video: "canPlayType" in document.createElement("video"),
                    check: function(e, t, n) {
                        var i = ie.isIPhone && n && xe.playsinline,
                            o = xe[e] || "html5" !== t;
                        return { api: o, ui: o && xe.rangeInput && ("video" !== e || !ie.isIPhone || i) }
                    },
                    pip: !(ie.isIPhone || !V(le("video").webkitSetPresentationMode) && (!document.pictureInPictureEnabled || le("video").disablePictureInPicture)),
                    airplay: V(window.WebKitPlaybackTargetAvailabilityEvent),
                    playsinline: "playsInline" in document.createElement("video"),
                    mime: function(e) {
                        if (ee(e)) return !1;
                        var t = a(e.split("/"), 1)[0],
                            n = e;
                        if (!this.isHTML5 || t !== this.type) return !1;
                        Object.keys(Te).includes(n) && (n += '; codecs="'.concat(Te[e], '"'));
                        try { return Boolean(n && this.media.canPlayType(n).replace(/no/, "")) } catch (e) { return !1 }
                    },
                    textTracks: "textTracks" in document.createElement("video"),
                    rangeInput: (ke = document.createElement("input"), ke.type = "range", "range" === ke.type),
                    touch: "ontouchstart" in document.documentElement,
                    transitions: !1 !== te,
                    reducedMotion: "matchMedia" in window && window.matchMedia("(prefers-reduced-motion)").matches
                },
                Se = function() {
                    var e = !1;
                    try {
                        var t = Object.defineProperty({}, "passive", { get: function() { return e = !0, null } });
                        window.addEventListener("test", null, t), window.removeEventListener("test", null, t)
                    } catch (e) {}
                    return e
                }();

            function Ce(e, t, n) {
                var i = this,
                    o = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
                    r = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4],
                    s = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
                if (e && "addEventListener" in e && !ee(t) && V(n)) {
                    var a = t.split(" "),
                        l = s;
                    Se && (l = { passive: r, capture: s }), a.forEach((function(t) { i && i.eventListeners && o && i.eventListeners.push({ element: e, type: t, callback: n, options: l }), e[o ? "addEventListener" : "removeEventListener"](t, n, l) }))
                }
            }

            function Ae(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
                    n = arguments.length > 2 ? arguments[2] : void 0,
                    i = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3],
                    o = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
                Ce.call(this, e, t, n, !0, i, o)
            }

            function Ee(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
                    n = arguments.length > 2 ? arguments[2] : void 0,
                    i = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3],
                    o = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
                Ce.call(this, e, t, n, !1, i, o)
            }

            function Pe(e) {
                var t = this,
                    n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
                    i = arguments.length > 2 ? arguments[2] : void 0,
                    o = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3],
                    r = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
                    s = function s() {
                        Ee(e, n, s, o, r);
                        for (var a = arguments.length, l = new Array(a), c = 0; c < a; c++) l[c] = arguments[c];
                        i.apply(t, l)
                    };
                Ce.call(this, e, n, s, !0, o, r)
            }

            function Ne(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
                    n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                    i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
                if (K(e) && !ee(t)) {
                    var o = new CustomEvent(t, { bubbles: n, detail: s(s({}, i), {}, { plyr: this }) });
                    e.dispatchEvent(o)
                }
            }

            function Oe() {
                this && this.eventListeners && (this.eventListeners.forEach((function(e) {
                    var t = e.element,
                        n = e.type,
                        i = e.callback,
                        o = e.options;
                    t.removeEventListener(n, i, o)
                })), this.eventListeners = [])
            }

            function Le() { var e = this; return new Promise((function(t) { return e.ready ? setTimeout(t, 0) : Ae.call(e, e.elements.container, "ready", t) })).then((function() {})) }

            function Me(e) {
                (function(e) { return $(e, Promise) && H(e.then) })(e) && e.then(null, (function() {}))
            }

            function $e(e) { return !!(X(e) || B(e) && e.includes(":")) && (X(e) ? e : e.split(":")).map(Number).every(W) }

            function je(e) {
                if (!X(e) || !e.every(W)) return null;
                var t = a(e, 2),
                    n = t[0],
                    i = t[1],
                    o = function e(t, n) { return 0 === n ? t : e(n, t % n) }(n, i);
                return [n / o, i / o]
            }

            function De(e) {
                var t = function(e) { return $e(e) ? e.split(":").map(Number) : null },
                    n = t(e);
                if (null === n && (n = t(this.config.ratio)), null === n && !ee(this.embed) && X(this.embed.ratio) && (n = this.embed.ratio), null === n && this.isHTML5) {
                    var i = this.media;
                    n = je([i.videoWidth, i.videoHeight])
                }
                return n
            }

            function Ie(e) {
                if (!this.isVideo) return {};
                var t = this.elements.wrapper,
                    n = De.call(this, e),
                    i = a(X(n) ? n : [0, 0], 2),
                    o = 100 / i[0] * i[1];
                if (t.style.paddingBottom = "".concat(o, "%"), this.isVimeo && !this.config.vimeo.premium && this.supported.ui) {
                    var r = 100 / this.media.offsetWidth * parseInt(window.getComputedStyle(this.media).paddingBottom, 10),
                        s = (r - o) / (r / 50);
                    this.fullscreen.active ? t.style.paddingBottom = null : this.media.style.transform = "translateY(-".concat(s, "%)")
                } else this.isHTML5 && t.classList.toggle(this.config.classNames.videoFixedRatio, null !== n);
                return { padding: o, ratio: n }
            }
            var He = {
                getSources: function() { var e = this; return this.isHTML5 ? Array.from(this.media.querySelectorAll("source")).filter((function(t) { var n = t.getAttribute("type"); return !!ee(n) || xe.mime.call(e, n) })) : [] },
                getQualityOptions: function() { return this.config.quality.forced ? this.config.quality.options : He.getSources.call(this).map((function(e) { return Number(e.getAttribute("size")) })).filter(Boolean) },
                setup: function() {
                    if (this.isHTML5) {
                        var e = this;
                        e.options.speed = e.config.speed.options, ee(this.config.ratio) || Ie.call(e), Object.defineProperty(e.media, "quality", {
                            get: function() { var t = He.getSources.call(e).find((function(t) { return t.getAttribute("src") === e.source })); return t && Number(t.getAttribute("size")) },
                            set: function(t) {
                                if (e.quality !== t) {
                                    if (e.config.quality.forced && V(e.config.quality.onChange)) e.config.quality.onChange(t);
                                    else {
                                        var n = He.getSources.call(e).find((function(e) { return Number(e.getAttribute("size")) === t }));
                                        if (!n) return;
                                        var i = e.media,
                                            o = i.currentTime,
                                            r = i.paused,
                                            s = i.preload,
                                            a = i.readyState,
                                            l = i.playbackRate;
                                        e.media.src = n.getAttribute("src"), ("none" !== s || a) && (e.once("loadedmetadata", (function() { e.speed = l, e.currentTime = o, r || Me(e.play()) })), e.media.load())
                                    }
                                    Ne.call(e, e.media, "qualitychange", !1, { quality: t })
                                }
                            }
                        })
                    }
                },
                cancelRequests: function() { this.isHTML5 && (ue(He.getSources.call(this)), this.media.setAttribute("src", this.config.blankVideo), this.media.load(), this.debug.log("Cancelled network requests")) }
            };

            function qe(e) { return X(e) ? e.filter((function(t, n) { return e.indexOf(t) === n })) : e }

            function _e(e) { for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++) n[i - 1] = arguments[i]; return ee(e) ? e : e.toString().replace(/{(\d+)}/g, (function(e, t) { return n[t].toString() })) }
            var Re = function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
                        t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
                        n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
                    return e.replace(new RegExp(t.toString().replace(/([.*+?^=!:${}()|[\]/\\])/g, "\\$1"), "g"), n.toString())
                },
                Fe = function() { var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ""; return e.toString().replace(/\w\S*/g, (function(e) { return e.charAt(0).toUpperCase() + e.substr(1).toLowerCase() })) };

            function ze() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
                    t = e.toString();
                return t = Re(t, "-", " "), t = Re(t, "_", " "), t = Fe(t), Re(t, " ", "")
            }

            function We(e) { var t = document.createElement("div"); return t.appendChild(e), t.innerHTML }
            var Be = { pip: "PIP", airplay: "AirPlay", html5: "HTML5", vimeo: "Vimeo", youtube: "YouTube" },
                Ue = function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
                        t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    if (ee(e) || ee(t)) return "";
                    var n = oe(t.i18n, e);
                    if (ee(n)) return Object.keys(Be).includes(e) ? Be[e] : "";
                    var i = { "{seektime}": t.seekTime, "{title}": t.title };
                    return Object.entries(i).forEach((function(e) {
                        var t = a(e, 2),
                            i = t[0],
                            o = t[1];
                        n = Re(n, i, o)
                    })), n
                },
                Ve = function() {
                    function t(n) { e(this, t), this.enabled = n.config.storage.enabled, this.key = n.config.storage.key }
                    return i(t, [{ key: "get", value: function(e) { if (!t.supported || !this.enabled) return null; var n = window.localStorage.getItem(this.key); if (ee(n)) return null; var i = JSON.parse(n); return B(e) && e.length ? i[e] : i } }, {
                        key: "set",
                        value: function(e) {
                            if (t.supported && this.enabled && z(e)) {
                                var n = this.get();
                                ee(n) && (n = {}), re(n, e), window.localStorage.setItem(this.key, JSON.stringify(n))
                            }
                        }
                    }], [{ key: "supported", get: function() { try { if (!("localStorage" in window)) return !1; var e = "___test"; return window.localStorage.setItem(e, e), window.localStorage.removeItem(e), !0 } catch (e) { return !1 } } }]), t
                }();

            function Xe(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "text";
                return new Promise((function(n, i) {
                    try {
                        var o = new XMLHttpRequest;
                        if (!("withCredentials" in o)) return;
                        o.addEventListener("load", (function() { if ("text" === t) try { n(JSON.parse(o.responseText)) } catch (e) { n(o.responseText) } else n(o.response) })), o.addEventListener("error", (function() { throw new Error(o.status) })), o.open("GET", e, !0), o.responseType = t, o.send()
                    } catch (e) { i(e) }
                }))
            }

            function Ye(e, t) {
                if (B(e)) {
                    var n = "cache",
                        i = B(t),
                        o = function() { return null !== document.getElementById(t) },
                        r = function(e, t) { e.innerHTML = t, i && o() || document.body.insertAdjacentElement("afterbegin", e) };
                    if (!i || !o()) {
                        var s = Ve.supported,
                            a = document.createElement("div");
                        if (a.setAttribute("hidden", ""), i && a.setAttribute("id", t), s) {
                            var l = window.localStorage.getItem("".concat(n, "-").concat(t));
                            if (null !== l) {
                                var c = JSON.parse(l);
                                r(a, c.content)
                            }
                        }
                        Xe(e).then((function(e) { ee(e) || (s && window.localStorage.setItem("".concat(n, "-").concat(t), JSON.stringify({ content: e })), r(a, e)) })).catch((function() {}))
                    }
                }
            }
            var Ke = function(e) { return Math.trunc(e / 60 / 60 % 60, 10) },
                Qe = function(e) { return Math.trunc(e / 60 % 60, 10) },
                Ge = function(e) { return Math.trunc(e % 60, 10) };

            function Je() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
                    t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                    n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                if (!W(e)) return Je(void 0, t, n);
                var i = function(e) { return "0".concat(e).slice(-2) },
                    o = Ke(e),
                    r = Qe(e),
                    s = Ge(e);
                return o = t || o > 0 ? "".concat(o, ":") : "", "".concat(n && e > 0 ? "-" : "").concat(o).concat(i(r), ":").concat(i(s))
            }
            var Ze = {
                getIconUrl: function() { var e = new URL(this.config.iconUrl, window.location).host !== window.location.host || ie.isIE && !window.svg4everybody; return { url: this.config.iconUrl, cors: e } },
                findElements: function() { try { return this.elements.controls = be.call(this, this.config.selectors.controls.wrapper), this.elements.buttons = { play: ye.call(this, this.config.selectors.buttons.play), pause: be.call(this, this.config.selectors.buttons.pause), restart: be.call(this, this.config.selectors.buttons.restart), rewind: be.call(this, this.config.selectors.buttons.rewind), fastForward: be.call(this, this.config.selectors.buttons.fastForward), mute: be.call(this, this.config.selectors.buttons.mute), pip: be.call(this, this.config.selectors.buttons.pip), airplay: be.call(this, this.config.selectors.buttons.airplay), settings: be.call(this, this.config.selectors.buttons.settings), captions: be.call(this, this.config.selectors.buttons.captions), fullscreen: be.call(this, this.config.selectors.buttons.fullscreen) }, this.elements.progress = be.call(this, this.config.selectors.progress), this.elements.inputs = { seek: be.call(this, this.config.selectors.inputs.seek), volume: be.call(this, this.config.selectors.inputs.volume) }, this.elements.display = { buffer: be.call(this, this.config.selectors.display.buffer), currentTime: be.call(this, this.config.selectors.display.currentTime), duration: be.call(this, this.config.selectors.display.duration) }, K(this.elements.progress) && (this.elements.display.seekTooltip = this.elements.progress.querySelector(".".concat(this.config.classNames.tooltip))), !0 } catch (e) { return this.debug.warn("It looks like there is a problem with your custom controls HTML", e), this.toggleNativeControls(!0), !1 } },
                createIcon: function(e, t) {
                    var n = "http://www.w3.org/2000/svg",
                        i = Ze.getIconUrl.call(this),
                        o = "".concat(i.cors ? "" : i.url, "#").concat(this.config.iconPrefix),
                        r = document.createElementNS(n, "svg");
                    ae(r, re(t, { "aria-hidden": "true", focusable: "false" }));
                    var s = document.createElementNS(n, "use"),
                        a = "".concat(o, "-").concat(e);
                    return "href" in s && s.setAttributeNS("http://www.w3.org/1999/xlink", "href", a), s.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", a), r.appendChild(s), r
                },
                createLabel: function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        n = Ue(e, this.config),
                        i = s(s({}, t), {}, { class: [t.class, this.config.classNames.hidden].filter(Boolean).join(" ") });
                    return le("span", i, n)
                },
                createBadge: function(e) { if (ee(e)) return null; var t = le("span", { class: this.config.classNames.menu.value }); return t.appendChild(le("span", { class: this.config.classNames.menu.badge }, e)), t },
                createButton: function(e, t) {
                    var n = this,
                        i = re({}, t),
                        o = function() { var e = (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "").toString(); return (e = ze(e)).charAt(0).toLowerCase() + e.slice(1) }(e),
                        r = { element: "button", toggle: !1, label: null, icon: null, labelPressed: null, iconPressed: null };
                    switch (["element", "icon", "label"].forEach((function(e) { Object.keys(i).includes(e) && (r[e] = i[e], delete i[e]) })), "button" !== r.element || Object.keys(i).includes("type") || (i.type = "button"), Object.keys(i).includes("class") ? i.class.split(" ").some((function(e) { return e === n.config.classNames.control })) || re(i, { class: "".concat(i.class, " ").concat(this.config.classNames.control) }) : i.class = this.config.classNames.control, e) {
                        case "play":
                            r.toggle = !0, r.label = "play", r.labelPressed = "pause", r.icon = "play", r.iconPressed = "pause";
                            break;
                        case "mute":
                            r.toggle = !0, r.label = "mute", r.labelPressed = "unmute", r.icon = "volume", r.iconPressed = "muted";
                            break;
                        case "captions":
                            r.toggle = !0, r.label = "enableCaptions", r.labelPressed = "disableCaptions", r.icon = "captions-off", r.iconPressed = "captions-on";
                            break;
                        case "fullscreen":
                            r.toggle = !0, r.label = "enterFullscreen", r.labelPressed = "exitFullscreen", r.icon = "enter-fullscreen", r.iconPressed = "exit-fullscreen";
                            break;
                        case "play-large":
                            i.class += " ".concat(this.config.classNames.control, "--overlaid"), o = "play", r.label = "play", r.icon = "play";
                            break;
                        default:
                            ee(r.label) && (r.label = o), ee(r.icon) && (r.icon = e)
                    }
                    var s = le(r.element);
                    return r.toggle ? (s.appendChild(Ze.createIcon.call(this, r.iconPressed, { class: "icon--pressed" })), s.appendChild(Ze.createIcon.call(this, r.icon, { class: "icon--not-pressed" })), s.appendChild(Ze.createLabel.call(this, r.labelPressed, { class: "label--pressed" })), s.appendChild(Ze.createLabel.call(this, r.label, { class: "label--not-pressed" }))) : (s.appendChild(Ze.createIcon.call(this, r.icon)), s.appendChild(Ze.createLabel.call(this, r.label))), re(i, he(this.config.selectors.buttons[o], i)), ae(s, i), "play" === o ? (X(this.elements.buttons[o]) || (this.elements.buttons[o] = []), this.elements.buttons[o].push(s)) : this.elements.buttons[o] = s, s
                },
                createRange: function(e, t) { var n = le("input", re(he(this.config.selectors.inputs[e]), { type: "range", min: 0, max: 100, step: .01, value: 0, autocomplete: "off", role: "slider", "aria-label": Ue(e, this.config), "aria-valuemin": 0, "aria-valuemax": 100, "aria-valuenow": 0 }, t)); return this.elements.inputs[e] = n, Ze.updateRangeFill.call(this, n), L.setup(n), n },
                createProgress: function(e, t) {
                    var n = le("progress", re(he(this.config.selectors.display[e]), { min: 0, max: 100, value: 0, role: "progressbar", "aria-hidden": !0 }, t));
                    if ("volume" !== e) {
                        n.appendChild(le("span", null, "0"));
                        var i = { played: "played", buffer: "buffered" }[e],
                            o = i ? Ue(i, this.config) : "";
                        n.innerText = "% ".concat(o.toLowerCase())
                    }
                    return this.elements.display[e] = n, n
                },
                createTime: function(e, t) {
                    var n = he(this.config.selectors.display[e], t),
                        i = le("div", re(n, { class: "".concat(n.class ? n.class : "", " ").concat(this.config.classNames.display.time, " ").trim(), "aria-label": Ue(e, this.config) }), "00:00");
                    return this.elements.display[e] = i, i
                },
                bindMenuItemShortcuts: function(e, t) {
                    var n = this;
                    Ae.call(this, e, "keydown keyup", (function(i) { if ([32, 38, 39, 40].includes(i.which) && (i.preventDefault(), i.stopPropagation(), "keydown" !== i.type)) { var o, r = ve(e, '[role="menuitemradio"]');!r && [32, 39].includes(i.which) ? Ze.showMenuPanel.call(n, t, !0) : 32 !== i.which && (40 === i.which || r && 39 === i.which ? (o = e.nextElementSibling, K(o) || (o = e.parentNode.firstElementChild)) : (o = e.previousElementSibling, K(o) || (o = e.parentNode.lastElementChild)), we.call(n, o, !0)) } }), !1), Ae.call(this, e, "keyup", (function(e) { 13 === e.which && Ze.focusFirstMenuItem.call(n, null, !0) }))
                },
                createMenuItem: function(e) {
                    var t = this,
                        n = e.value,
                        i = e.list,
                        o = e.type,
                        r = e.title,
                        s = e.badge,
                        a = void 0 === s ? null : s,
                        l = e.checked,
                        c = void 0 !== l && l,
                        u = he(this.config.selectors.inputs[o]),
                        d = le("button", re(u, { type: "button", role: "menuitemradio", class: "".concat(this.config.classNames.control, " ").concat(u.class ? u.class : "").trim(), "aria-checked": c, value: n })),
                        p = le("span");
                    p.innerHTML = r, K(a) && p.appendChild(a), d.appendChild(p), Object.defineProperty(d, "checked", { enumerable: !0, get: function() { return "true" === d.getAttribute("aria-checked") }, set: function(e) { e && Array.from(d.parentNode.children).filter((function(e) { return ve(e, '[role="menuitemradio"]') })).forEach((function(e) { return e.setAttribute("aria-checked", "false") })), d.setAttribute("aria-checked", e ? "true" : "false") } }), this.listeners.bind(d, "click keyup", (function(e) {
                        if (!G(e) || 32 === e.which) {
                            switch (e.preventDefault(), e.stopPropagation(), d.checked = !0, o) {
                                case "language":
                                    t.currentTrack = Number(n);
                                    break;
                                case "quality":
                                    t.quality = n;
                                    break;
                                case "speed":
                                    t.speed = parseFloat(n)
                            }
                            Ze.showMenuPanel.call(t, "home", G(e))
                        }
                    }), o, !1), Ze.bindMenuItemShortcuts.call(this, d, o), i.appendChild(d)
                },
                formatTime: function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
                        t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                    if (!W(e)) return e;
                    var n = Ke(this.duration) > 0;
                    return Je(e, n, t)
                },
                updateTimeDisplay: function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
                        t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
                        n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                    K(e) && W(t) && (e.innerText = Ze.formatTime(t, n))
                },
                updateVolume: function() { this.supported.ui && (K(this.elements.inputs.volume) && Ze.setRange.call(this, this.elements.inputs.volume, this.muted ? 0 : this.volume), K(this.elements.buttons.mute) && (this.elements.buttons.mute.pressed = this.muted || 0 === this.volume)) },
                setRange: function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
                    K(e) && (e.value = t, Ze.updateRangeFill.call(this, e))
                },
                updateProgress: function(e) {
                    var t = this;
                    if (this.supported.ui && Q(e)) {
                        var n, i, o = 0;
                        if (e) switch (e.type) {
                            case "timeupdate":
                            case "seeking":
                            case "seeked":
                                n = this.currentTime, i = this.duration, o = 0 === n || 0 === i || Number.isNaN(n) || Number.isNaN(i) ? 0 : (n / i * 100).toFixed(2), "timeupdate" === e.type && Ze.setRange.call(this, this.elements.inputs.seek, o);
                                break;
                            case "playing":
                            case "progress":
                                ! function(e, n) {
                                    var i = W(n) ? n : 0,
                                        o = K(e) ? e : t.elements.display.buffer;
                                    if (K(o)) {
                                        o.value = i;
                                        var r = o.getElementsByTagName("span")[0];
                                        K(r) && (r.childNodes[0].nodeValue = i)
                                    }
                                }(this.elements.display.buffer, 100 * this.buffered)
                        }
                    }
                },
                updateRangeFill: function(e) {
                    var t = Q(e) ? e.target : e;
                    if (K(t) && "range" === t.getAttribute("type")) {
                        if (ve(t, this.config.selectors.inputs.seek)) {
                            t.setAttribute("aria-valuenow", this.currentTime);
                            var n = Ze.formatTime(this.currentTime),
                                i = Ze.formatTime(this.duration),
                                o = Ue("seekLabel", this.config);
                            t.setAttribute("aria-valuetext", o.replace("{currentTime}", n).replace("{duration}", i))
                        } else if (ve(t, this.config.selectors.inputs.volume)) {
                            var r = 100 * t.value;
                            t.setAttribute("aria-valuenow", r), t.setAttribute("aria-valuetext", "".concat(r.toFixed(1), "%"))
                        } else t.setAttribute("aria-valuenow", t.value);
                        ie.isWebkit && t.style.setProperty("--value", "".concat(t.value / t.max * 100, "%"))
                    }
                },
                updateSeekTooltip: function(e) {
                    var t = this;
                    if (this.config.tooltips.seek && K(this.elements.inputs.seek) && K(this.elements.display.seekTooltip) && 0 !== this.duration) {
                        var n = "".concat(this.config.classNames.tooltip, "--visible"),
                            i = function(e) { return me(t.elements.display.seekTooltip, n, e) };
                        if (this.touch) i(!1);
                        else {
                            var o = 0,
                                r = this.elements.progress.getBoundingClientRect();
                            if (Q(e)) o = 100 / r.width * (e.pageX - r.left);
                            else {
                                if (!ge(this.elements.display.seekTooltip, n)) return;
                                o = parseFloat(this.elements.display.seekTooltip.style.left, 10)
                            }
                            o < 0 ? o = 0 : o > 100 && (o = 100), Ze.updateTimeDisplay.call(this, this.elements.display.seekTooltip, this.duration / 100 * o), this.elements.display.seekTooltip.style.left = "".concat(o, "%"), Q(e) && ["mouseenter", "mouseleave"].includes(e.type) && i("mouseenter" === e.type)
                        }
                    }
                },
                timeUpdate: function(e) {
                    var t = !K(this.elements.display.duration) && this.config.invertTime;
                    Ze.updateTimeDisplay.call(this, this.elements.display.currentTime, t ? this.duration - this.currentTime : this.currentTime, t), e && "timeupdate" === e.type && this.media.seeking || Ze.updateProgress.call(this, e)
                },
                durationUpdate: function() {
                    if (this.supported.ui && (this.config.invertTime || !this.currentTime)) {
                        if (this.duration >= Math.pow(2, 32)) return fe(this.elements.display.currentTime, !0), void fe(this.elements.progress, !0);
                        K(this.elements.inputs.seek) && this.elements.inputs.seek.setAttribute("aria-valuemax", this.duration);
                        var e = K(this.elements.display.duration);
                        !e && this.config.displayDuration && this.paused && Ze.updateTimeDisplay.call(this, this.elements.display.currentTime, this.duration), e && Ze.updateTimeDisplay.call(this, this.elements.display.duration, this.duration), Ze.updateSeekTooltip.call(this)
                    }
                },
                toggleMenuButton: function(e, t) { fe(this.elements.settings.buttons[e], !t) },
                updateSetting: function(e, t, n) {
                    var i = this.elements.settings.panels[e],
                        o = null,
                        r = t;
                    if ("captions" === e) o = this.currentTrack;
                    else { if (o = ee(n) ? this[e] : n, ee(o) && (o = this.config[e].default), !ee(this.options[e]) && !this.options[e].includes(o)) return void this.debug.warn("Unsupported value of '".concat(o, "' for ").concat(e)); if (!this.config[e].options.includes(o)) return void this.debug.warn("Disabled value of '".concat(o, "' for ").concat(e)) }
                    if (K(r) || (r = i && i.querySelector('[role="menu"]')), K(r)) {
                        this.elements.settings.buttons[e].querySelector(".".concat(this.config.classNames.menu.value)).innerHTML = Ze.getLabel.call(this, e, o);
                        var s = r && r.querySelector('[value="'.concat(o, '"]'));
                        K(s) && (s.checked = !0)
                    }
                },
                getLabel: function(e, t) {
                    switch (e) {
                        case "speed":
                            return 1 === t ? Ue("normal", this.config) : "".concat(t, "&times;");
                        case "quality":
                            if (W(t)) { var n = Ue("qualityLabel.".concat(t), this.config); return n.length ? n : "".concat(t, "p") }
                            return Fe(t);
                        case "captions":
                            return nt.getLabel.call(this);
                        default:
                            return null
                    }
                },
                setQualityMenu: function(e) {
                    var t = this;
                    if (K(this.elements.settings.panels.quality)) {
                        var n = "quality",
                            i = this.elements.settings.panels.quality.querySelector('[role="menu"]');
                        X(e) && (this.options.quality = qe(e).filter((function(e) { return t.config.quality.options.includes(e) })));
                        var o = !ee(this.options.quality) && this.options.quality.length > 1;
                        if (Ze.toggleMenuButton.call(this, n, o), de(i), Ze.checkMenu.call(this), o) {
                            var r = function(e) { var n = Ue("qualityBadge.".concat(e), t.config); return n.length ? Ze.createBadge.call(t, n) : null };
                            this.options.quality.sort((function(e, n) { var i = t.config.quality.options; return i.indexOf(e) > i.indexOf(n) ? 1 : -1 })).forEach((function(e) { Ze.createMenuItem.call(t, { value: e, list: i, type: n, title: Ze.getLabel.call(t, "quality", e), badge: r(e) }) })), Ze.updateSetting.call(this, n, i)
                        }
                    }
                },
                setCaptionsMenu: function() {
                    var e = this;
                    if (K(this.elements.settings.panels.captions)) {
                        var t = "captions",
                            n = this.elements.settings.panels.captions.querySelector('[role="menu"]'),
                            i = nt.getTracks.call(this),
                            o = Boolean(i.length);
                        if (Ze.toggleMenuButton.call(this, t, o), de(n), Ze.checkMenu.call(this), o) {
                            var r = i.map((function(t, i) { return { value: i, checked: e.captions.toggled && e.currentTrack === i, title: nt.getLabel.call(e, t), badge: t.language && Ze.createBadge.call(e, t.language.toUpperCase()), list: n, type: "language" } }));
                            r.unshift({ value: -1, checked: !this.captions.toggled, title: Ue("disabled", this.config), list: n, type: "language" }), r.forEach(Ze.createMenuItem.bind(this)), Ze.updateSetting.call(this, t, n)
                        }
                    }
                },
                setSpeedMenu: function() {
                    var e = this;
                    if (K(this.elements.settings.panels.speed)) {
                        var t = "speed",
                            n = this.elements.settings.panels.speed.querySelector('[role="menu"]');
                        this.options.speed = this.options.speed.filter((function(t) { return t >= e.minimumSpeed && t <= e.maximumSpeed }));
                        var i = !ee(this.options.speed) && this.options.speed.length > 1;
                        Ze.toggleMenuButton.call(this, t, i), de(n), Ze.checkMenu.call(this), i && (this.options.speed.forEach((function(i) { Ze.createMenuItem.call(e, { value: i, list: n, type: t, title: Ze.getLabel.call(e, "speed", i) }) })), Ze.updateSetting.call(this, t, n))
                    }
                },
                checkMenu: function() {
                    var e = this.elements.settings.buttons,
                        t = !ee(e) && Object.values(e).some((function(e) { return !e.hidden }));
                    fe(this.elements.settings.menu, !t)
                },
                focusFirstMenuItem: function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                    if (!this.elements.settings.popup.hidden) {
                        var n = e;
                        K(n) || (n = Object.values(this.elements.settings.panels).find((function(e) { return !e.hidden })));
                        var i = n.querySelector('[role^="menuitem"]');
                        we.call(this, i, t)
                    }
                },
                toggleMenu: function(e) {
                    var t = this.elements.settings.popup,
                        n = this.elements.buttons.settings;
                    if (K(t) && K(n)) {
                        var i = t.hidden,
                            o = i;
                        if (U(e)) o = e;
                        else if (G(e) && 27 === e.which) o = !1;
                        else if (Q(e)) {
                            var r = V(e.composedPath) ? e.composedPath()[0] : e.target,
                                s = t.contains(r);
                            if (s || !s && e.target !== n && o) return
                        }
                        n.setAttribute("aria-expanded", o), fe(t, !o), me(this.elements.container, this.config.classNames.menu.open, o), o && G(e) ? Ze.focusFirstMenuItem.call(this, null, !0) : o || i || we.call(this, n, G(e))
                    }
                },
                getMenuSize: function(e) {
                    var t = e.cloneNode(!0);
                    t.style.position = "absolute", t.style.opacity = 0, t.removeAttribute("hidden"), e.parentNode.appendChild(t);
                    var n = t.scrollWidth,
                        i = t.scrollHeight;
                    return ue(t), { width: n, height: i }
                },
                showMenuPanel: function() {
                    var e = this,
                        t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
                        n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                        i = this.elements.container.querySelector("#plyr-settings-".concat(this.id, "-").concat(t));
                    if (K(i)) {
                        var o = i.parentNode,
                            r = Array.from(o.children).find((function(e) { return !e.hidden }));
                        if (xe.transitions && !xe.reducedMotion) {
                            o.style.width = "".concat(r.scrollWidth, "px"), o.style.height = "".concat(r.scrollHeight, "px");
                            var s = Ze.getMenuSize.call(this, i),
                                a = function t(n) { n.target === o && ["width", "height"].includes(n.propertyName) && (o.style.width = "", o.style.height = "", Ee.call(e, o, te, t)) };
                            Ae.call(this, o, te, a), o.style.width = "".concat(s.width, "px"), o.style.height = "".concat(s.height, "px")
                        }
                        fe(r, !0), fe(i, !1), Ze.focusFirstMenuItem.call(this, i, n)
                    }
                },
                setDownloadUrl: function() {
                    var e = this.elements.buttons.download;
                    K(e) && e.setAttribute("href", this.download)
                },
                create: function(e) {
                    var t = this,
                        n = Ze.bindMenuItemShortcuts,
                        i = Ze.createButton,
                        o = Ze.createProgress,
                        r = Ze.createRange,
                        s = Ze.createTime,
                        a = Ze.setQualityMenu,
                        l = Ze.setSpeedMenu,
                        c = Ze.showMenuPanel;
                    this.elements.controls = null, X(this.config.controls) && this.config.controls.includes("play-large") && this.elements.container.appendChild(i.call(this, "play-large"));
                    var u = le("div", he(this.config.selectors.controls.wrapper));
                    this.elements.controls = u;
                    var d = { class: "plyr__controls__item" };
                    return qe(X(this.config.controls) ? this.config.controls : []).forEach((function(a) {
                        if ("restart" === a && u.appendChild(i.call(t, "restart", d)), "rewind" === a && u.appendChild(i.call(t, "rewind", d)), "play" === a && u.appendChild(i.call(t, "play", d)), "fast-forward" === a && u.appendChild(i.call(t, "fast-forward", d)), "progress" === a) {
                            var l = le("div", { class: "".concat(d.class, " plyr__progress__container") }),
                                p = le("div", he(t.config.selectors.progress));
                            if (p.appendChild(r.call(t, "seek", { id: "plyr-seek-".concat(e.id) })), p.appendChild(o.call(t, "buffer")), t.config.tooltips.seek) {
                                var h = le("span", { class: t.config.classNames.tooltip }, "00:00");
                                p.appendChild(h), t.elements.display.seekTooltip = h
                            }
                            t.elements.progress = p, l.appendChild(t.elements.progress), u.appendChild(l)
                        }
                        if ("current-time" === a && u.appendChild(s.call(t, "currentTime", d)), "duration" === a && u.appendChild(s.call(t, "duration", d)), "mute" === a || "volume" === a) {
                            var f = t.elements.volume;
                            if (K(f) && u.contains(f) || (f = le("div", re({}, d, { class: "".concat(d.class, " plyr__volume").trim() })), t.elements.volume = f, u.appendChild(f)), "mute" === a && f.appendChild(i.call(t, "mute")), "volume" === a && !ie.isIos) {
                                var m = { max: 1, step: .05, value: t.config.volume };
                                f.appendChild(r.call(t, "volume", re(m, { id: "plyr-volume-".concat(e.id) })))
                            }
                        }
                        if ("captions" === a && u.appendChild(i.call(t, "captions", d)), "settings" === a && !ee(t.config.settings)) {
                            var g = le("div", re({}, d, { class: "".concat(d.class, " plyr__menu").trim(), hidden: "" }));
                            g.appendChild(i.call(t, "settings", { "aria-haspopup": !0, "aria-controls": "plyr-settings-".concat(e.id), "aria-expanded": !1 }));
                            var v = le("div", { class: "plyr__menu__container", id: "plyr-settings-".concat(e.id), hidden: "" }),
                                y = le("div"),
                                b = le("div", { id: "plyr-settings-".concat(e.id, "-home") }),
                                w = le("div", { role: "menu" });
                            b.appendChild(w), y.appendChild(b), t.elements.settings.panels.home = b, t.config.settings.forEach((function(i) {
                                var o = le("button", re(he(t.config.selectors.buttons.settings), { type: "button", class: "".concat(t.config.classNames.control, " ").concat(t.config.classNames.control, "--forward"), role: "menuitem", "aria-haspopup": !0, hidden: "" }));
                                n.call(t, o, i), Ae.call(t, o, "click", (function() { c.call(t, i, !1) }));
                                var r = le("span", null, Ue(i, t.config)),
                                    s = le("span", { class: t.config.classNames.menu.value });
                                s.innerHTML = e[i], r.appendChild(s), o.appendChild(r), w.appendChild(o);
                                var a = le("div", { id: "plyr-settings-".concat(e.id, "-").concat(i), hidden: "" }),
                                    l = le("button", { type: "button", class: "".concat(t.config.classNames.control, " ").concat(t.config.classNames.control, "--back") });
                                l.appendChild(le("span", { "aria-hidden": !0 }, Ue(i, t.config))), l.appendChild(le("span", { class: t.config.classNames.hidden }, Ue("menuBack", t.config))), Ae.call(t, a, "keydown", (function(e) { 37 === e.which && (e.preventDefault(), e.stopPropagation(), c.call(t, "home", !0)) }), !1), Ae.call(t, l, "click", (function() { c.call(t, "home", !1) })), a.appendChild(l), a.appendChild(le("div", { role: "menu" })), y.appendChild(a), t.elements.settings.buttons[i] = o, t.elements.settings.panels[i] = a
                            })), v.appendChild(y), g.appendChild(v), u.appendChild(g), t.elements.settings.popup = v, t.elements.settings.menu = g
                        }
                        if ("pip" === a && xe.pip && u.appendChild(i.call(t, "pip", d)), "airplay" === a && xe.airplay && u.appendChild(i.call(t, "airplay", d)), "download" === a) {
                            var k = re({}, d, { element: "a", href: t.download, target: "_blank" });
                            t.isHTML5 && (k.download = "");
                            var T = t.config.urls.download;
                            !Z(T) && t.isEmbed && re(k, { icon: "logo-".concat(t.provider), label: t.provider }), u.appendChild(i.call(t, "download", k))
                        }
                        "fullscreen" === a && u.appendChild(i.call(t, "fullscreen", d))
                    })), this.isHTML5 && a.call(this, He.getQualityOptions.call(this)), l.call(this), u
                },
                inject: function() {
                    var e = this;
                    if (this.config.loadSprite) {
                        var t = Ze.getIconUrl.call(this);
                        t.cors && Ye(t.url, "sprite-plyr")
                    }
                    this.id = Math.floor(1e4 * Math.random());
                    var n = null;
                    this.elements.controls = null;
                    var i, o, r = { id: this.id, seektime: this.config.seekTime, title: this.config.title },
                        s = !0;
                    if (V(this.config.controls) && (this.config.controls = this.config.controls.call(this, r)), this.config.controls || (this.config.controls = []), K(this.config.controls) || B(this.config.controls) ? n = this.config.controls : (n = Ze.create.call(this, { id: this.id, seektime: this.config.seekTime, speed: this.speed, quality: this.quality, captions: nt.getLabel.call(this) }), s = !1), s && B(this.config.controls) && (i = n, Object.entries(r).forEach((function(e) {
                            var t = a(e, 2),
                                n = t[0],
                                o = t[1];
                            i = Re(i, "{".concat(n, "}"), o)
                        })), n = i), B(this.config.selectors.controls.container) && (o = document.querySelector(this.config.selectors.controls.container)), K(o) || (o = this.elements.container), o[K(n) ? "insertAdjacentElement" : "insertAdjacentHTML"]("afterbegin", n), K(this.elements.controls) || Ze.findElements.call(this), !ee(this.elements.buttons)) {
                        var l = function(t) {
                            var n = e.config.classNames.controlPressed;
                            Object.defineProperty(t, "pressed", {
                                enumerable: !0,
                                get: function() { return ge(t, n) },
                                set: function() {
                                    var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                                    me(t, n, e)
                                }
                            })
                        };
                        Object.values(this.elements.buttons).filter(Boolean).forEach((function(e) { X(e) || Y(e) ? Array.from(e).filter(Boolean).forEach(l) : l(e) }))
                    }
                    if (ie.isEdge && ne(o), this.config.tooltips.controls) {
                        var c = this.config,
                            u = c.classNames,
                            d = c.selectors,
                            p = "".concat(d.controls.wrapper, " ").concat(d.labels, " .").concat(u.hidden),
                            h = ye.call(this, p);
                        Array.from(h).forEach((function(t) { me(t, e.config.classNames.hidden, !1), me(t, e.config.classNames.tooltip, !0) }))
                    }
                }
            };

            function et(e) {
                var t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
                    n = e;
                if (t) {
                    var i = document.createElement("a");
                    i.href = n, n = i.href
                }
                try { return new URL(n) } catch (e) { return null }
            }

            function tt(e) {
                var t = new URLSearchParams;
                return z(e) && Object.entries(e).forEach((function(e) {
                    var n = a(e, 2),
                        i = n[0],
                        o = n[1];
                    t.set(i, o)
                })), t
            }
            var nt = {
                    setup: function() {
                        if (this.supported.ui)
                            if (!this.isVideo || this.isYouTube || this.isHTML5 && !xe.textTracks) X(this.config.controls) && this.config.controls.includes("settings") && this.config.settings.includes("captions") && Ze.setCaptionsMenu.call(this);
                            else {
                                if (K(this.elements.captions) || (this.elements.captions = le("div", he(this.config.selectors.captions)), function(e, t) { K(e) && K(t) && t.parentNode.insertBefore(e, t.nextSibling) }(this.elements.captions, this.elements.wrapper)), ie.isIE && window.URL) {
                                    var e = this.media.querySelectorAll("track");
                                    Array.from(e).forEach((function(e) {
                                        var t = e.getAttribute("src"),
                                            n = et(t);
                                        null !== n && n.hostname !== window.location.href.hostname && ["http:", "https:"].includes(n.protocol) && Xe(t, "blob").then((function(t) { e.setAttribute("src", window.URL.createObjectURL(t)) })).catch((function() { ue(e) }))
                                    }))
                                }
                                var t = qe((navigator.languages || [navigator.language || navigator.userLanguage || "en"]).map((function(e) { return e.split("-")[0] }))),
                                    n = (this.storage.get("language") || this.config.captions.language || "auto").toLowerCase();
                                "auto" === n && (n = a(t, 1)[0]);
                                var i = this.storage.get("captions");
                                if (U(i) || (i = this.config.captions.active), Object.assign(this.captions, { toggled: !1, active: i, language: n, languages: t }), this.isHTML5) {
                                    var o = this.config.captions.update ? "addtrack removetrack" : "removetrack";
                                    Ae.call(this, this.media.textTracks, o, nt.update.bind(this))
                                }
                                setTimeout(nt.update.bind(this), 0)
                            }
                    },
                    update: function() {
                        var e = this,
                            t = nt.getTracks.call(this, !0),
                            n = this.captions,
                            i = n.active,
                            o = n.language,
                            r = n.meta,
                            s = n.currentTrackNode,
                            a = Boolean(t.find((function(e) { return e.language === o })));
                        this.isHTML5 && this.isVideo && t.filter((function(e) { return !r.get(e) })).forEach((function(t) { e.debug.log("Track added", t), r.set(t, { default: "showing" === t.mode }), "showing" === t.mode && (t.mode = "hidden"), Ae.call(e, t, "cuechange", (function() { return nt.updateCues.call(e) })) })), (a && this.language !== o || !t.includes(s)) && (nt.setLanguage.call(this, o), nt.toggle.call(this, i && a)), me(this.elements.container, this.config.classNames.captions.enabled, !ee(t)), X(this.config.controls) && this.config.controls.includes("settings") && this.config.settings.includes("captions") && Ze.setCaptionsMenu.call(this)
                    },
                    toggle: function(e) {
                        var t = this,
                            n = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
                        if (this.supported.ui) {
                            var i = this.captions.toggled,
                                o = this.config.classNames.captions.active,
                                r = F(e) ? !i : e;
                            if (r !== i) {
                                if (n || (this.captions.active = r, this.storage.set({ captions: r })), !this.language && r && !n) {
                                    var s = nt.getTracks.call(this),
                                        a = nt.findTrack.call(this, [this.captions.language].concat(l(this.captions.languages)), !0);
                                    return this.captions.language = a.language, void nt.set.call(this, s.indexOf(a))
                                }
                                this.elements.buttons.captions && (this.elements.buttons.captions.pressed = r), me(this.elements.container, o, r), this.captions.toggled = r, Ze.updateSetting.call(this, "captions"), Ne.call(this, this.media, r ? "captionsenabled" : "captionsdisabled")
                            }
                            setTimeout((function() { r && t.captions.toggled && (t.captions.currentTrackNode.mode = "hidden") }))
                        }
                    },
                    set: function(e) {
                        var t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
                            n = nt.getTracks.call(this);
                        if (-1 !== e)
                            if (W(e))
                                if (e in n) {
                                    if (this.captions.currentTrack !== e) {
                                        this.captions.currentTrack = e;
                                        var i = n[e],
                                            o = i || {},
                                            r = o.language;
                                        this.captions.currentTrackNode = i, Ze.updateSetting.call(this, "captions"), t || (this.captions.language = r, this.storage.set({ language: r })), this.isVimeo && this.embed.enableTextTrack(r), Ne.call(this, this.media, "languagechange")
                                    }
                                    nt.toggle.call(this, !0, t), this.isHTML5 && this.isVideo && nt.updateCues.call(this)
                                } else this.debug.warn("Track not found", e);
                        else this.debug.warn("Invalid caption argument", e);
                        else nt.toggle.call(this, !1, t)
                    },
                    setLanguage: function(e) {
                        var t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
                        if (B(e)) {
                            var n = e.toLowerCase();
                            this.captions.language = n;
                            var i = nt.getTracks.call(this),
                                o = nt.findTrack.call(this, [n]);
                            nt.set.call(this, i.indexOf(o), t)
                        } else this.debug.warn("Invalid language argument", e)
                    },
                    getTracks: function() {
                        var e = this,
                            t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                            n = Array.from((this.media || {}).textTracks || []);
                        return n.filter((function(n) { return !e.isHTML5 || t || e.captions.meta.has(n) })).filter((function(e) { return ["captions", "subtitles"].includes(e.kind) }))
                    },
                    findTrack: function(e) {
                        var t, n = this,
                            i = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                            o = nt.getTracks.call(this),
                            r = function(e) { return Number((n.captions.meta.get(e) || {}).default) },
                            s = Array.from(o).sort((function(e, t) { return r(t) - r(e) }));
                        return e.every((function(e) { return !(t = s.find((function(t) { return t.language === e }))) })), t || (i ? s[0] : void 0)
                    },
                    getCurrentTrack: function() { return nt.getTracks.call(this)[this.currentTrack] },
                    getLabel: function(e) { var t = e; return !J(t) && xe.textTracks && this.captions.toggled && (t = nt.getCurrentTrack.call(this)), J(t) ? ee(t.label) ? ee(t.language) ? Ue("enabled", this.config) : e.language.toUpperCase() : t.label : Ue("disabled", this.config) },
                    updateCues: function(e) {
                        if (this.supported.ui)
                            if (K(this.elements.captions))
                                if (F(e) || Array.isArray(e)) {
                                    var t = e;
                                    if (!t) {
                                        var n = nt.getCurrentTrack.call(this);
                                        t = Array.from((n || {}).activeCues || []).map((function(e) { return e.getCueAsHTML() })).map(We)
                                    }
                                    var i = t.map((function(e) { return e.trim() })).join("\n");
                                    if (i !== this.elements.captions.innerHTML) {
                                        de(this.elements.captions);
                                        var o = le("span", he(this.config.selectors.caption));
                                        o.innerHTML = i, this.elements.captions.appendChild(o), Ne.call(this, this.media, "cuechange")
                                    }
                                } else this.debug.warn("updateCues: Invalid input", e);
                        else this.debug.warn("No captions element to render to")
                    }
                },
                it = { enabled: !0, title: "", debug: !1, autoplay: !1, autopause: !0, playsinline: !0, seekTime: 10, volume: 1, muted: !1, duration: null, displayDuration: !0, invertTime: !0, toggleInvert: !0, ratio: null, clickToPlay: !0, hideControls: !0, resetOnEnd: !1, disableContextMenu: !0, loadSprite: !0, iconPrefix: "plyr", iconUrl: "https://cdn.plyr.io/3.6.3/plyr.svg", blankVideo: "https://cdn.plyr.io/static/blank.mp4", quality: { default: 576, options: [4320, 2880, 2160, 1440, 1080, 720, 576, 480, 360, 240], forced: !1, onChange: null }, loop: { active: !1 }, speed: { selected: 1, options: [.5, .75, 1, 1.25, 1.5, 1.75, 2, 4] }, keyboard: { focused: !0, global: !1 }, tooltips: { controls: !1, seek: !0 }, captions: { active: !1, language: "auto", update: !1 }, fullscreen: { enabled: !0, fallback: !0, iosNative: !1 }, storage: { enabled: !0, key: "plyr" }, controls: ["play-large", "play", "progress", "current-time", "mute", "volume", "captions", "settings", "pip", "airplay", "fullscreen"], settings: ["captions", "quality", "speed"], i18n: { restart: "Restart", rewind: "Rewind {seektime}s", play: "Play", pause: "Pause", fastForward: "Forward {seektime}s", seek: "Seek", seekLabel: "{currentTime} of {duration}", played: "Played", buffered: "Buffered", currentTime: "Current time", duration: "Duration", volume: "Volume", mute: "Mute", unmute: "Unmute", enableCaptions: "Enable captions", disableCaptions: "Disable captions", download: "Download", enterFullscreen: "Enter fullscreen", exitFullscreen: "Exit fullscreen", frameTitle: "Player for {title}", captions: "Captions", settings: "Settings", pip: "PIP", menuBack: "Go back to previous menu", speed: "Speed", normal: "Normal", quality: "Quality", loop: "Loop", start: "Start", end: "End", all: "All", reset: "Reset", disabled: "Disabled", enabled: "Enabled", advertisement: "Ad", qualityBadge: { 2160: "4K", 1440: "HD", 1080: "HD", 720: "HD", 576: "SD", 480: "SD" } }, urls: { download: null, vimeo: { sdk: "https://player.vimeo.com/api/player.js", iframe: "https://player.vimeo.com/video/{0}?{1}", api: "https://vimeo.com/api/oembed.json?url={0}" }, youtube: { sdk: "https://www.youtube.com/iframe_api", api: "https://noembed.com/embed?url=https://www.youtube.com/watch?v={0}" }, googleIMA: { sdk: "https://imasdk.googleapis.com/js/sdkloader/ima3.js" } }, listeners: { seek: null, play: null, pause: null, restart: null, rewind: null, fastForward: null, mute: null, volume: null, captions: null, download: null, fullscreen: null, pip: null, airplay: null, speed: null, quality: null, loop: null, language: null }, events: ["ended", "progress", "stalled", "playing", "waiting", "canplay", "canplaythrough", "loadstart", "loadeddata", "loadedmetadata", "timeupdate", "volumechange", "play", "pause", "error", "seeking", "seeked", "emptied", "ratechange", "cuechange", "download", "enterfullscreen", "exitfullscreen", "captionsenabled", "captionsdisabled", "languagechange", "controlshidden", "controlsshown", "ready", "statechange", "qualitychange", "adsloaded", "adscontentpause", "adscontentresume", "adstarted", "adsmidpoint", "adscomplete", "adsallcomplete", "adsimpression", "adsclick"], selectors: { editable: "input, textarea, select, [contenteditable]", container: ".plyr", controls: { container: null, wrapper: ".plyr__controls" }, labels: "[data-plyr]", buttons: { play: '[data-plyr="play"]', pause: '[data-plyr="pause"]', restart: '[data-plyr="restart"]', rewind: '[data-plyr="rewind"]', fastForward: '[data-plyr="fast-forward"]', mute: '[data-plyr="mute"]', captions: '[data-plyr="captions"]', download: '[data-plyr="download"]', fullscreen: '[data-plyr="fullscreen"]', pip: '[data-plyr="pip"]', airplay: '[data-plyr="airplay"]', settings: '[data-plyr="settings"]', loop: '[data-plyr="loop"]' }, inputs: { seek: '[data-plyr="seek"]', volume: '[data-plyr="volume"]', speed: '[data-plyr="speed"]', language: '[data-plyr="language"]', quality: '[data-plyr="quality"]' }, display: { currentTime: ".plyr__time--current", duration: ".plyr__time--duration", buffer: ".plyr__progress__buffer", loop: ".plyr__progress__loop", volume: ".plyr__volume--display" }, progress: ".plyr__progress", captions: ".plyr__captions", caption: ".plyr__caption" }, classNames: { type: "plyr--{0}", provider: "plyr--{0}", video: "plyr__video-wrapper", embed: "plyr__video-embed", videoFixedRatio: "plyr__video-wrapper--fixed-ratio", embedContainer: "plyr__video-embed__container", poster: "plyr__poster", posterEnabled: "plyr__poster-enabled", ads: "plyr__ads", control: "plyr__control", controlPressed: "plyr__control--pressed", playing: "plyr--playing", paused: "plyr--paused", stopped: "plyr--stopped", loading: "plyr--loading", hover: "plyr--hover", tooltip: "plyr__tooltip", cues: "plyr__cues", hidden: "plyr__sr-only", hideControls: "plyr--hide-controls", isIos: "plyr--is-ios", isTouch: "plyr--is-touch", uiSupported: "plyr--full-ui", noTransition: "plyr--no-transition", display: { time: "plyr__time" }, menu: { value: "plyr__menu__value", badge: "plyr__badge", open: "plyr--menu-open" }, captions: { enabled: "plyr--captions-enabled", active: "plyr--captions-active" }, fullscreen: { enabled: "plyr--fullscreen-enabled", fallback: "plyr--fullscreen-fallback" }, pip: { supported: "plyr--pip-supported", active: "plyr--pip-active" }, airplay: { supported: "plyr--airplay-supported", active: "plyr--airplay-active" }, tabFocus: "plyr__tab-focus", previewThumbnails: { thumbContainer: "plyr__preview-thumb", thumbContainerShown: "plyr__preview-thumb--is-shown", imageContainer: "plyr__preview-thumb__image-container", timeContainer: "plyr__preview-thumb__time-container", scrubbingContainer: "plyr__preview-scrubbing", scrubbingContainerShown: "plyr__preview-scrubbing--is-shown" } }, attributes: { embed: { provider: "data-plyr-provider", id: "data-plyr-embed-id" } }, ads: { enabled: !1, publisherId: "", tagUrl: "" }, previewThumbnails: { enabled: !1, src: "" }, vimeo: { byline: !1, portrait: !1, title: !1, speed: !0, transparent: !1, customControls: !0, referrerPolicy: null, premium: !1 }, youtube: { rel: 0, showinfo: 0, iv_load_policy: 3, modestbranding: 1, customControls: !0, noCookie: !1 } },
                ot = "picture-in-picture",
                rt = { html5: "html5", youtube: "youtube", vimeo: "vimeo" },
                st = function() {},
                at = function() {
                    function t() {
                        var n = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                        e(this, t), this.enabled = window.console && n, this.enabled && this.log("Debugging enabled")
                    }
                    return i(t, [{ key: "log", get: function() { return this.enabled ? Function.prototype.bind.call(console.log, console) : st } }, { key: "warn", get: function() { return this.enabled ? Function.prototype.bind.call(console.warn, console) : st } }, { key: "error", get: function() { return this.enabled ? Function.prototype.bind.call(console.error, console) : st } }]), t
                }(),
                lt = function() {
                    function t(n) {
                        var i = this;
                        e(this, t), this.player = n, this.prefix = t.prefix, this.property = t.property, this.scrollPosition = { x: 0, y: 0 }, this.forceFallback = "force" === n.config.fullscreen.fallback, this.player.elements.fullscreen = n.config.fullscreen.container && function(e, t) {
                            return (Element.prototype.closest || function() {
                                var e = this;
                                do {
                                    if (ve.matches(e, t)) return e;
                                    e = e.parentElement || e.parentNode
                                } while (null !== e && 1 === e.nodeType);
                                return null
                            }).call(e, t)
                        }(this.player.elements.container, n.config.fullscreen.container), Ae.call(this.player, document, "ms" === this.prefix ? "MSFullscreenChange" : "".concat(this.prefix, "fullscreenchange"), (function() { i.onChange() })), Ae.call(this.player, this.player.elements.container, "dblclick", (function(e) { K(i.player.elements.controls) && i.player.elements.controls.contains(e.target) || i.player.listeners.proxy(e, i.toggle, "fullscreen") })), Ae.call(this, this.player.elements.container, "keydown", (function(e) { return i.trapFocus(e) })), this.update()
                    }
                    return i(t, [{
                        key: "onChange",
                        value: function() {
                            if (this.enabled) {
                                var e = this.player.elements.buttons.fullscreen;
                                K(e) && (e.pressed = this.active);
                                var t = this.target === this.player.media ? this.target : this.player.elements.container;
                                Ne.call(this.player, t, this.active ? "enterfullscreen" : "exitfullscreen", !0)
                            }
                        }
                    }, {
                        key: "toggleFallback",
                        value: function() {
                            var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                            if (e ? this.scrollPosition = { x: window.scrollX || 0, y: window.scrollY || 0 } : window.scrollTo(this.scrollPosition.x, this.scrollPosition.y), document.body.style.overflow = e ? "hidden" : "", me(this.target, this.player.config.classNames.fullscreen.fallback, e), ie.isIos) {
                                var t = document.head.querySelector('meta[name="viewport"]'),
                                    n = "viewport-fit=cover";
                                t || (t = document.createElement("meta")).setAttribute("name", "viewport");
                                var i = B(t.content) && t.content.includes(n);
                                e ? (this.cleanupViewport = !i, i || (t.content += ",".concat(n))) : this.cleanupViewport && (t.content = t.content.split(",").filter((function(e) { return e.trim() !== n })).join(","))
                            }
                            this.onChange()
                        }
                    }, {
                        key: "trapFocus",
                        value: function(e) {
                            if (!ie.isIos && this.active && "Tab" === e.key && 9 === e.keyCode) {
                                var t = document.activeElement,
                                    n = ye.call(this.player, "a[href], button:not(:disabled), input:not(:disabled), [tabindex]"),
                                    i = a(n, 1)[0],
                                    o = n[n.length - 1];
                                t !== o || e.shiftKey ? t === i && e.shiftKey && (o.focus(), e.preventDefault()) : (i.focus(), e.preventDefault())
                            }
                        }
                    }, {
                        key: "update",
                        value: function() {
                            var e;
                            this.enabled ? (e = this.forceFallback ? "Fallback (forced)" : t.native ? "Native" : "Fallback", this.player.debug.log("".concat(e, " fullscreen enabled"))) : this.player.debug.log("Fullscreen not supported and fallback disabled"), me(this.player.elements.container, this.player.config.classNames.fullscreen.enabled, this.enabled)
                        }
                    }, { key: "enter", value: function() { this.enabled && (ie.isIos && this.player.config.fullscreen.iosNative ? this.target.webkitEnterFullscreen() : !t.native || this.forceFallback ? this.toggleFallback(!0) : this.prefix ? ee(this.prefix) || this.target["".concat(this.prefix, "Request").concat(this.property)]() : this.target.requestFullscreen({ navigationUI: "hide" })) } }, {
                        key: "exit",
                        value: function() {
                            if (this.enabled)
                                if (ie.isIos && this.player.config.fullscreen.iosNative) this.target.webkitExitFullscreen(), Me(this.player.play());
                                else if (!t.native || this.forceFallback) this.toggleFallback(!1);
                            else if (this.prefix) {
                                if (!ee(this.prefix)) {
                                    var e = "moz" === this.prefix ? "Cancel" : "Exit";
                                    document["".concat(this.prefix).concat(e).concat(this.property)]()
                                }
                            } else(document.cancelFullScreen || document.exitFullscreen).call(document)
                        }
                    }, { key: "toggle", value: function() { this.active ? this.exit() : this.enter() } }, { key: "usingNative", get: function() { return t.native && !this.forceFallback } }, { key: "enabled", get: function() { return (t.native || this.player.config.fullscreen.fallback) && this.player.config.fullscreen.enabled && this.player.supported.ui && this.player.isVideo } }, { key: "active", get: function() { if (!this.enabled) return !1; if (!t.native || this.forceFallback) return ge(this.target, this.player.config.classNames.fullscreen.fallback); var e = this.prefix ? document["".concat(this.prefix).concat(this.property, "Element")] : document.fullscreenElement; return e && e.shadowRoot ? e === this.target.getRootNode().host : e === this.target } }, { key: "target", get: function() { return ie.isIos && this.player.config.fullscreen.iosNative ? this.player.media : this.player.elements.fullscreen || this.player.elements.container } }], [{ key: "native", get: function() { return !!(document.fullscreenEnabled || document.webkitFullscreenEnabled || document.mozFullScreenEnabled || document.msFullscreenEnabled) } }, { key: "prefix", get: function() { if (V(document.exitFullscreen)) return ""; var e = ""; return ["webkit", "moz", "ms"].some((function(t) { return !(!V(document["".concat(t, "ExitFullscreen")]) && !V(document["".concat(t, "CancelFullScreen")]) || (e = t, 0)) })), e } }, { key: "property", get: function() { return "moz" === this.prefix ? "FullScreen" : "Fullscreen" } }]), t
                }();

            function ct(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
                return new Promise((function(n, i) {
                    var o = new Image,
                        r = function() { delete o.onload, delete o.onerror, (o.naturalWidth >= t ? n : i)(o) };
                    Object.assign(o, { onload: r, onerror: r, src: e })
                }))
            }
            var ut = {
                    addStyleHook: function() { me(this.elements.container, this.config.selectors.container.replace(".", ""), !0), me(this.elements.container, this.config.classNames.uiSupported, this.supported.ui) },
                    toggleNativeControls: function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                        e && this.isHTML5 ? this.media.setAttribute("controls", "") : this.media.removeAttribute("controls")
                    },
                    build: function() {
                        var e = this;
                        if (this.listeners.media(), !this.supported.ui) return this.debug.warn("Basic support only for ".concat(this.provider, " ").concat(this.type)), void ut.toggleNativeControls.call(this, !0);
                        K(this.elements.controls) || (Ze.inject.call(this), this.listeners.controls()), ut.toggleNativeControls.call(this), this.isHTML5 && nt.setup.call(this), this.volume = null, this.muted = null, this.loop = null, this.quality = null, this.speed = null, Ze.updateVolume.call(this), Ze.timeUpdate.call(this), ut.checkPlaying.call(this), me(this.elements.container, this.config.classNames.pip.supported, xe.pip && this.isHTML5 && this.isVideo), me(this.elements.container, this.config.classNames.airplay.supported, xe.airplay && this.isHTML5), me(this.elements.container, this.config.classNames.isIos, ie.isIos), me(this.elements.container, this.config.classNames.isTouch, this.touch), this.ready = !0, setTimeout((function() { Ne.call(e, e.media, "ready") }), 0), ut.setTitle.call(this), this.poster && ut.setPoster.call(this, this.poster, !1).catch((function() {})), this.config.duration && Ze.durationUpdate.call(this)
                    },
                    setTitle: function() {
                        var e = Ue("play", this.config);
                        if (B(this.config.title) && !ee(this.config.title) && (e += ", ".concat(this.config.title)), Array.from(this.elements.buttons.play || []).forEach((function(t) { t.setAttribute("aria-label", e) })), this.isEmbed) {
                            var t = be.call(this, "iframe");
                            if (!K(t)) return;
                            var n = ee(this.config.title) ? "video" : this.config.title,
                                i = Ue("frameTitle", this.config);
                            t.setAttribute("title", i.replace("{title}", n))
                        }
                    },
                    togglePoster: function(e) { me(this.elements.container, this.config.classNames.posterEnabled, e) },
                    setPoster: function(e) {
                        var t = this,
                            n = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
                        return n && this.poster ? Promise.reject(new Error("Poster already set")) : (this.media.setAttribute("data-poster", e), this.elements.poster.removeAttribute("hidden"), Le.call(this).then((function() { return ct(e) })).catch((function(n) { throw e === t.poster && ut.togglePoster.call(t, !1), n })).then((function() { if (e !== t.poster) throw new Error("setPoster cancelled by later call to setPoster") })).then((function() { return Object.assign(t.elements.poster.style, { backgroundImage: "url('".concat(e, "')"), backgroundSize: "" }), ut.togglePoster.call(t, !0), e })))
                    },
                    checkPlaying: function(e) {
                        var t = this;
                        me(this.elements.container, this.config.classNames.playing, this.playing), me(this.elements.container, this.config.classNames.paused, this.paused), me(this.elements.container, this.config.classNames.stopped, this.stopped), Array.from(this.elements.buttons.play || []).forEach((function(e) { Object.assign(e, { pressed: t.playing }), e.setAttribute("aria-label", Ue(t.playing ? "pause" : "play", t.config)) })), Q(e) && "timeupdate" === e.type || ut.toggleControls.call(this)
                    },
                    checkLoading: function(e) {
                        var t = this;
                        this.loading = ["stalled", "waiting"].includes(e.type), clearTimeout(this.timers.loading), this.timers.loading = setTimeout((function() { me(t.elements.container, t.config.classNames.loading, t.loading), ut.toggleControls.call(t) }), this.loading ? 250 : 0)
                    },
                    toggleControls: function(e) {
                        var t = this.elements.controls;
                        if (t && this.config.hideControls) {
                            var n = this.touch && this.lastSeekTime + 2e3 > Date.now();
                            this.toggleControls(Boolean(e || this.loading || this.paused || t.pressed || t.hover || n))
                        }
                    },
                    migrateStyles: function() {
                        var e = this;
                        Object.values(s({}, this.media.style)).filter((function(e) { return !ee(e) && B(e) && e.startsWith("--plyr") })).forEach((function(t) { e.elements.container.style.setProperty(t, e.media.style.getPropertyValue(t)), e.media.style.removeProperty(t) })), ee(this.media.style) && this.media.removeAttribute("style")
                    }
                },
                dt = function() {
                    function t(n) { e(this, t), this.player = n, this.lastKey = null, this.focusTimer = null, this.lastKeyDown = null, this.handleKey = this.handleKey.bind(this), this.toggleMenu = this.toggleMenu.bind(this), this.setTabFocus = this.setTabFocus.bind(this), this.firstTouch = this.firstTouch.bind(this) }
                    return i(t, [{
                        key: "handleKey",
                        value: function(e) {
                            var t = this.player,
                                n = t.elements,
                                i = e.keyCode ? e.keyCode : e.which,
                                o = "keydown" === e.type,
                                r = o && i === this.lastKey;
                            if (!(e.altKey || e.ctrlKey || e.metaKey || e.shiftKey) && W(i))
                                if (o) {
                                    var s = document.activeElement;
                                    if (K(s)) { var a = t.config.selectors.editable; if (s !== n.inputs.seek && ve(s, a)) return; if (32 === e.which && ve(s, 'button, [role^="menuitem"]')) return }
                                    switch ([32, 37, 38, 39, 40, 48, 49, 50, 51, 52, 53, 54, 56, 57, 67, 70, 73, 75, 76, 77, 79].includes(i) && (e.preventDefault(), e.stopPropagation()), i) {
                                        case 48:
                                        case 49:
                                        case 50:
                                        case 51:
                                        case 52:
                                        case 53:
                                        case 54:
                                        case 55:
                                        case 56:
                                        case 57:
                                            r || (t.currentTime = t.duration / 10 * (i - 48));
                                            break;
                                        case 32:
                                        case 75:
                                            r || Me(t.togglePlay());
                                            break;
                                        case 38:
                                            t.increaseVolume(.1);
                                            break;
                                        case 40:
                                            t.decreaseVolume(.1);
                                            break;
                                        case 77:
                                            r || (t.muted = !t.muted);
                                            break;
                                        case 39:
                                            t.forward();
                                            break;
                                        case 37:
                                            t.rewind();
                                            break;
                                        case 70:
                                            t.fullscreen.toggle();
                                            break;
                                        case 67:
                                            r || t.toggleCaptions();
                                            break;
                                        case 76:
                                            t.loop = !t.loop
                                    }
                                    27 === i && !t.fullscreen.usingNative && t.fullscreen.active && t.fullscreen.toggle(), this.lastKey = i
                                } else this.lastKey = null
                        }
                    }, { key: "toggleMenu", value: function(e) { Ze.toggleMenu.call(this.player, e) } }, {
                        key: "firstTouch",
                        value: function() {
                            var e = this.player,
                                t = e.elements;
                            e.touch = !0, me(t.container, e.config.classNames.isTouch, !0)
                        }
                    }, {
                        key: "setTabFocus",
                        value: function(e) {
                            var t = this.player,
                                n = t.elements;
                            if (clearTimeout(this.focusTimer), "keydown" !== e.type || 9 === e.which) {
                                "keydown" === e.type && (this.lastKeyDown = e.timeStamp);
                                var i, o = e.timeStamp - this.lastKeyDown <= 20;
                                ("focus" !== e.type || o) && (i = t.config.classNames.tabFocus, me(ye.call(t, ".".concat(i)), i, !1), "focusout" !== e.type && (this.focusTimer = setTimeout((function() {
                                    var e = document.activeElement;
                                    n.container.contains(e) && me(document.activeElement, t.config.classNames.tabFocus, !0)
                                }), 10)))
                            }
                        }
                    }, {
                        key: "global",
                        value: function() {
                            var e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
                                t = this.player;
                            t.config.keyboard.global && Ce.call(t, window, "keydown keyup", this.handleKey, e, !1), Ce.call(t, document.body, "click", this.toggleMenu, e), Pe.call(t, document.body, "touchstart", this.firstTouch), Ce.call(t, document.body, "keydown focus blur focusout", this.setTabFocus, e, !1, !0)
                        }
                    }, {
                        key: "container",
                        value: function() {
                            var e = this.player,
                                t = e.config,
                                n = e.elements,
                                i = e.timers;
                            !t.keyboard.global && t.keyboard.focused && Ae.call(e, n.container, "keydown keyup", this.handleKey, !1), Ae.call(e, n.container, "mousemove mouseleave touchstart touchmove enterfullscreen exitfullscreen", (function(t) {
                                var o = n.controls;
                                o && "enterfullscreen" === t.type && (o.pressed = !1, o.hover = !1);
                                var r = 0;
                                ["touchstart", "touchmove", "mousemove"].includes(t.type) && (ut.toggleControls.call(e, !0), r = e.touch ? 3e3 : 2e3), clearTimeout(i.controls), i.controls = setTimeout((function() { return ut.toggleControls.call(e, !1) }), r)
                            }));
                            var o = function(t) {
                                    if (!t) return Ie.call(e);
                                    var i = n.container.getBoundingClientRect(),
                                        o = i.width,
                                        r = i.height;
                                    return Ie.call(e, "".concat(o, ":").concat(r))
                                },
                                r = function() { clearTimeout(i.resized), i.resized = setTimeout(o, 50) };
                            Ae.call(e, n.container, "enterfullscreen exitfullscreen", (function(t) {
                                var i = e.fullscreen,
                                    s = i.target,
                                    l = i.usingNative;
                                if (s === n.container && (e.isEmbed || !ee(e.config.ratio))) {
                                    var c = "enterfullscreen" === t.type,
                                        u = o(c);
                                    u.padding,
                                        function(t, n, i) {
                                            if (e.isVimeo && !e.config.vimeo.premium) {
                                                var o = e.elements.wrapper.firstChild,
                                                    r = a(t, 2)[1],
                                                    s = a(De.call(e), 2),
                                                    l = s[0],
                                                    c = s[1];
                                                o.style.maxWidth = i ? "".concat(r / c * l, "px") : null, o.style.margin = i ? "0 auto" : null
                                            }
                                        }(u.ratio, 0, c), c && setTimeout((function() { return ne(n.container) }), 100), l || (c ? Ae.call(e, window, "resize", r) : Ee.call(e, window, "resize", r))
                                }
                            }))
                        }
                    }, {
                        key: "media",
                        value: function() {
                            var e = this,
                                t = this.player,
                                n = t.elements;
                            if (Ae.call(t, t.media, "timeupdate seeking seeked", (function(e) { return Ze.timeUpdate.call(t, e) })), Ae.call(t, t.media, "durationchange loadeddata loadedmetadata", (function(e) { return Ze.durationUpdate.call(t, e) })), Ae.call(t, t.media, "ended", (function() { t.isHTML5 && t.isVideo && t.config.resetOnEnd && (t.restart(), t.pause()) })), Ae.call(t, t.media, "progress playing seeking seeked", (function(e) { return Ze.updateProgress.call(t, e) })), Ae.call(t, t.media, "volumechange", (function(e) { return Ze.updateVolume.call(t, e) })), Ae.call(t, t.media, "playing play pause ended emptied timeupdate", (function(e) { return ut.checkPlaying.call(t, e) })), Ae.call(t, t.media, "waiting canplay seeked playing", (function(e) { return ut.checkLoading.call(t, e) })), t.supported.ui && t.config.clickToPlay && !t.isAudio) {
                                var i = be.call(t, ".".concat(t.config.classNames.video));
                                if (!K(i)) return;
                                Ae.call(t, n.container, "click", (function(o) {
                                    ([n.container, i].includes(o.target) || i.contains(o.target)) && (t.touch && t.config.hideControls || (t.ended ? (e.proxy(o, t.restart, "restart"), e.proxy(o, (function() { Me(t.play()) }), "play")) : e.proxy(o, (function() { Me(t.togglePlay()) }), "play")))
                                }))
                            }
                            t.supported.ui && t.config.disableContextMenu && Ae.call(t, n.wrapper, "contextmenu", (function(e) { e.preventDefault() }), !1), Ae.call(t, t.media, "volumechange", (function() { t.storage.set({ volume: t.volume, muted: t.muted }) })), Ae.call(t, t.media, "ratechange", (function() { Ze.updateSetting.call(t, "speed"), t.storage.set({ speed: t.speed }) })), Ae.call(t, t.media, "qualitychange", (function(e) { Ze.updateSetting.call(t, "quality", null, e.detail.quality) })), Ae.call(t, t.media, "ready qualitychange", (function() { Ze.setDownloadUrl.call(t) }));
                            var o = t.config.events.concat(["keyup", "keydown"]).join(" ");
                            Ae.call(t, t.media, o, (function(e) {
                                var i = e.detail,
                                    o = void 0 === i ? {} : i;
                                "error" === e.type && (o = t.media.error), Ne.call(t, n.container, e.type, !0, o)
                            }))
                        }
                    }, {
                        key: "proxy",
                        value: function(e, t, n) {
                            var i = this.player,
                                o = i.config.listeners[n],
                                r = !0;
                            V(o) && (r = o.call(i, e)), !1 !== r && V(t) && t.call(i, e)
                        }
                    }, {
                        key: "bind",
                        value: function(e, t, n, i) {
                            var o = this,
                                r = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4],
                                s = this.player,
                                a = s.config.listeners[i],
                                l = V(a);
                            Ae.call(s, e, t, (function(e) { return o.proxy(e, n, i) }), r && !l)
                        }
                    }, {
                        key: "controls",
                        value: function() {
                            var e = this,
                                t = this.player,
                                n = t.elements,
                                i = ie.isIE ? "change" : "input";
                            if (n.buttons.play && Array.from(n.buttons.play).forEach((function(n) { e.bind(n, "click", (function() { Me(t.togglePlay()) }), "play") })), this.bind(n.buttons.restart, "click", t.restart, "restart"), this.bind(n.buttons.rewind, "click", (function() { t.lastSeekTime = Date.now(), t.rewind() }), "rewind"), this.bind(n.buttons.fastForward, "click", (function() { t.lastSeekTime = Date.now(), t.forward() }), "fastForward"), this.bind(n.buttons.mute, "click", (function() { t.muted = !t.muted }), "mute"), this.bind(n.buttons.captions, "click", (function() { return t.toggleCaptions() })), this.bind(n.buttons.download, "click", (function() { Ne.call(t, t.media, "download") }), "download"), this.bind(n.buttons.fullscreen, "click", (function() { t.fullscreen.toggle() }), "fullscreen"), this.bind(n.buttons.pip, "click", (function() { t.pip = "toggle" }), "pip"), this.bind(n.buttons.airplay, "click", t.airplay, "airplay"), this.bind(n.buttons.settings, "click", (function(e) { e.stopPropagation(), e.preventDefault(), Ze.toggleMenu.call(t, e) }), null, !1), this.bind(n.buttons.settings, "keyup", (function(e) {
                                    var n = e.which;
                                    [13, 32].includes(n) && (13 !== n ? (e.preventDefault(), e.stopPropagation(), Ze.toggleMenu.call(t, e)) : Ze.focusFirstMenuItem.call(t, null, !0))
                                }), null, !1), this.bind(n.settings.menu, "keydown", (function(e) { 27 === e.which && Ze.toggleMenu.call(t, e) })), this.bind(n.inputs.seek, "mousedown mousemove", (function(e) {
                                    var t = n.progress.getBoundingClientRect(),
                                        i = 100 / t.width * (e.pageX - t.left);
                                    e.currentTarget.setAttribute("seek-value", i)
                                })), this.bind(n.inputs.seek, "mousedown mouseup keydown keyup touchstart touchend", (function(e) {
                                    var n = e.currentTarget,
                                        i = e.keyCode ? e.keyCode : e.which,
                                        o = "play-on-seeked";
                                    if (!G(e) || 39 === i || 37 === i) {
                                        t.lastSeekTime = Date.now();
                                        var r = n.hasAttribute(o),
                                            s = ["mouseup", "touchend", "keyup"].includes(e.type);
                                        r && s ? (n.removeAttribute(o), Me(t.play())) : !s && t.playing && (n.setAttribute(o, ""), t.pause())
                                    }
                                })), ie.isIos) {
                                var o = ye.call(t, 'input[type="range"]');
                                Array.from(o).forEach((function(t) { return e.bind(t, i, (function(e) { return ne(e.target) })) }))
                            }
                            this.bind(n.inputs.seek, i, (function(e) {
                                var n = e.currentTarget,
                                    i = n.getAttribute("seek-value");
                                ee(i) && (i = n.value), n.removeAttribute("seek-value"), t.currentTime = i / n.max * t.duration
                            }), "seek"), this.bind(n.progress, "mouseenter mouseleave mousemove", (function(e) { return Ze.updateSeekTooltip.call(t, e) })), this.bind(n.progress, "mousemove touchmove", (function(e) {
                                var n = t.previewThumbnails;
                                n && n.loaded && n.startMove(e)
                            })), this.bind(n.progress, "mouseleave touchend click", (function() {
                                var e = t.previewThumbnails;
                                e && e.loaded && e.endMove(!1, !0)
                            })), this.bind(n.progress, "mousedown touchstart", (function(e) {
                                var n = t.previewThumbnails;
                                n && n.loaded && n.startScrubbing(e)
                            })), this.bind(n.progress, "mouseup touchend", (function(e) {
                                var n = t.previewThumbnails;
                                n && n.loaded && n.endScrubbing(e)
                            })), ie.isWebkit && Array.from(ye.call(t, 'input[type="range"]')).forEach((function(n) { e.bind(n, "input", (function(e) { return Ze.updateRangeFill.call(t, e.target) })) })), t.config.toggleInvert && !K(n.display.duration) && this.bind(n.display.currentTime, "click", (function() { 0 !== t.currentTime && (t.config.invertTime = !t.config.invertTime, Ze.timeUpdate.call(t)) })), this.bind(n.inputs.volume, i, (function(e) { t.volume = e.target.value }), "volume"), this.bind(n.controls, "mouseenter mouseleave", (function(e) { n.controls.hover = !t.touch && "mouseenter" === e.type })), n.fullscreen && Array.from(n.fullscreen.children).filter((function(e) { return !e.contains(n.container) })).forEach((function(i) { e.bind(i, "mouseenter mouseleave", (function(e) { n.controls.hover = !t.touch && "mouseenter" === e.type })) })), this.bind(n.controls, "mousedown mouseup touchstart touchend touchcancel", (function(e) { n.controls.pressed = ["mousedown", "touchstart"].includes(e.type) })), this.bind(n.controls, "focusin", (function() {
                                var i = t.config,
                                    o = t.timers;
                                me(n.controls, i.classNames.noTransition, !0), ut.toggleControls.call(t, !0), setTimeout((function() { me(n.controls, i.classNames.noTransition, !1) }), 0);
                                var r = e.touch ? 3e3 : 4e3;
                                clearTimeout(o.controls), o.controls = setTimeout((function() { return ut.toggleControls.call(t, !1) }), r)
                            })), this.bind(n.inputs.volume, "wheel", (function(e) {
                                var n = e.webkitDirectionInvertedFromDevice,
                                    i = a([e.deltaX, -e.deltaY].map((function(e) { return n ? -e : e })), 2),
                                    o = i[0],
                                    r = i[1],
                                    s = Math.sign(Math.abs(o) > Math.abs(r) ? o : r);
                                t.increaseVolume(s / 50);
                                var l = t.media.volume;
                                (1 === s && l < 1 || -1 === s && l > 0) && e.preventDefault()
                            }), "volume", !1)
                        }
                    }]), t
                }();
            "undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : void 0 !== t || "undefined" != typeof self && self;
            var pt = function(e, t) {
                return function(e, t) {
                    e.exports = function() {
                        var e = function() {},
                            t = {},
                            n = {},
                            i = {};

                        function o(e, t) {
                            if (e) {
                                var o = i[e];
                                if (n[e] = t, o)
                                    for (; o.length;) o[0](e, t), o.splice(0, 1)
                            }
                        }

                        function r(t, n) { t.call && (t = { success: t }), n.length ? (t.error || e)(n) : (t.success || e)(t) }

                        function s(t, n, i, o) {
                            var r, a, l = document,
                                c = i.async,
                                u = (i.numRetries || 0) + 1,
                                d = i.before || e,
                                p = t.replace(/[\?|#].*$/, ""),
                                h = t.replace(/^(css|img)!/, "");
                            o = o || 0, /(^css!|\.css$)/.test(p) ? ((a = l.createElement("link")).rel = "stylesheet", a.href = h, (r = "hideFocus" in a) && a.relList && (r = 0, a.rel = "preload", a.as = "style")) : /(^img!|\.(png|gif|jpg|svg|webp)$)/.test(p) ? (a = l.createElement("img")).src = h : ((a = l.createElement("script")).src = t, a.async = void 0 === c || c), a.onload = a.onerror = a.onbeforeload = function(e) {
                                var l = e.type[0];
                                if (r) try { a.sheet.cssText.length || (l = "e") } catch (e) { 18 != e.code && (l = "e") }
                                if ("e" == l) { if ((o += 1) < u) return s(t, n, i, o) } else if ("preload" == a.rel && "style" == a.as) return a.rel = "stylesheet";
                                n(t, l, e.defaultPrevented)
                            }, !1 !== d(t, a) && l.head.appendChild(a)
                        }

                        function a(e, t, n) {
                            var i, o, r = (e = e.push ? e : [e]).length,
                                a = r,
                                l = [];
                            for (i = function(e, n, i) {
                                    if ("e" == n && l.push(e), "b" == n) {
                                        if (!i) return;
                                        l.push(e)
                                    }--r || t(l)
                                }, o = 0; o < a; o++) s(e[o], i, n)
                        }

                        function l(e, n, i) {
                            var s, l;
                            if (n && n.trim && (s = n), l = (s ? i : n) || {}, s) {
                                if (s in t) throw "LoadJS";
                                t[s] = !0
                            }

                            function c(t, n) { a(e, (function(e) { r(l, e), t && r({ success: t, error: n }, e), o(s, e) }), l) }
                            if (l.returnPromise) return new Promise(c);
                            c()
                        }
                        return l.ready = function(e, t) {
                            return function(e, t) {
                                e = e.push ? e : [e];
                                var o, r, s, a = [],
                                    l = e.length,
                                    c = l;
                                for (o = function(e, n) { n.length && a.push(e), --c || t(a) }; l--;) r = e[l], (s = n[r]) ? o(r, s) : (i[r] = i[r] || []).push(o)
                            }(e, (function(e) { r(t, e) })), l
                        }, l.done = function(e) { o(e, []) }, l.reset = function() { t = {}, n = {}, i = {} }, l.isDefined = function(e) { return e in t }, l
                    }()
                }(t = { exports: {} }), t.exports
            }();

            function ht(e) { return new Promise((function(t, n) { pt(e, { success: t, error: n }) })) }

            function ft(e) { e && !this.embed.hasPlayed && (this.embed.hasPlayed = !0), this.media.paused === e && (this.media.paused = !e, Ne.call(this, this.media, e ? "play" : "pause")) }
            var mt = {
                setup: function() {
                    var e = this;
                    me(e.elements.wrapper, e.config.classNames.embed, !0), e.options.speed = e.config.speed.options, Ie.call(e), z(window.Vimeo) ? mt.ready.call(e) : ht(e.config.urls.vimeo.sdk).then((function() { mt.ready.call(e) })).catch((function(t) { e.debug.warn("Vimeo SDK (player.js) failed to load", t) }))
                },
                ready: function() {
                    var e = this,
                        t = this,
                        n = t.config.vimeo,
                        i = n.premium,
                        o = n.referrerPolicy,
                        r = function(e, t) {
                            if (null == e) return {};
                            var n, i, o = function(e, t) {
                                if (null == e) return {};
                                var n, i, o = {},
                                    r = Object.keys(e);
                                for (i = 0; i < r.length; i++) n = r[i], t.indexOf(n) >= 0 || (o[n] = e[n]);
                                return o
                            }(e, t);
                            if (Object.getOwnPropertySymbols) { var r = Object.getOwnPropertySymbols(e); for (i = 0; i < r.length; i++) n = r[i], t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n]) }
                            return o
                        }(n, ["premium", "referrerPolicy"]);
                    i && Object.assign(r, { controls: !1, sidedock: !1 });
                    var l = tt(s({ loop: t.config.loop.active, autoplay: t.autoplay, muted: t.muted, gesture: "media", playsinline: !this.config.fullscreen.iosNative }, r)),
                        c = t.media.getAttribute("src");
                    ee(c) && (c = t.media.getAttribute(t.config.attributes.embed.id));
                    var u, d = ee(u = c) ? null : W(Number(u)) ? u : u.match(/^.*(vimeo.com\/|video\/)(\d+).*/) ? RegExp.$2 : u,
                        p = le("iframe"),
                        h = _e(t.config.urls.vimeo.iframe, d, l);
                    if (p.setAttribute("src", h), p.setAttribute("allowfullscreen", ""), p.setAttribute("allow", "autoplay,fullscreen,picture-in-picture"), ee(o) || p.setAttribute("referrerPolicy", o), i || !n.customControls) p.setAttribute("data-poster", t.poster), t.media = pe(p, t.media);
                    else {
                        var f = le("div", { class: t.config.classNames.embedContainer, "data-poster": t.poster });
                        f.appendChild(p), t.media = pe(f, t.media)
                    }
                    n.customControls || Xe(_e(t.config.urls.vimeo.api, h)).then((function(e) {!ee(e) && e.thumbnail_url && ut.setPoster.call(t, e.thumbnail_url).catch((function() {})) })), t.embed = new window.Vimeo.Player(p, { autopause: t.config.autopause, muted: t.muted }), t.media.paused = !0, t.media.currentTime = 0, t.supported.ui && t.embed.disableTextTrack(), t.media.play = function() { return ft.call(t, !0), t.embed.play() }, t.media.pause = function() { return ft.call(t, !1), t.embed.pause() }, t.media.stop = function() { t.pause(), t.currentTime = 0 };
                    var m = t.media.currentTime;
                    Object.defineProperty(t.media, "currentTime", {
                        get: function() { return m },
                        set: function(e) {
                            var n = t.embed,
                                i = t.media,
                                o = t.paused,
                                r = t.volume,
                                s = o && !n.hasPlayed;
                            i.seeking = !0, Ne.call(t, i, "seeking"), Promise.resolve(s && n.setVolume(0)).then((function() { return n.setCurrentTime(e) })).then((function() { return s && n.pause() })).then((function() { return s && n.setVolume(r) })).catch((function() {}))
                        }
                    });
                    var g = t.config.speed.selected;
                    Object.defineProperty(t.media, "playbackRate", { get: function() { return g }, set: function(e) { t.embed.setPlaybackRate(e).then((function() { g = e, Ne.call(t, t.media, "ratechange") })).catch((function() { t.options.speed = [1] })) } });
                    var v = t.config.volume;
                    Object.defineProperty(t.media, "volume", { get: function() { return v }, set: function(e) { t.embed.setVolume(e).then((function() { v = e, Ne.call(t, t.media, "volumechange") })) } });
                    var y = t.config.muted;
                    Object.defineProperty(t.media, "muted", {
                        get: function() { return y },
                        set: function(e) {
                            var n = !!U(e) && e;
                            t.embed.setVolume(n ? 0 : t.config.volume).then((function() { y = n, Ne.call(t, t.media, "volumechange") }))
                        }
                    });
                    var b, w = t.config.loop;
                    Object.defineProperty(t.media, "loop", {
                        get: function() { return w },
                        set: function(e) {
                            var n = U(e) ? e : t.config.loop.active;
                            t.embed.setLoop(n).then((function() { w = n }))
                        }
                    }), t.embed.getVideoUrl().then((function(e) { b = e, Ze.setDownloadUrl.call(t) })).catch((function(t) { e.debug.warn(t) })), Object.defineProperty(t.media, "currentSrc", { get: function() { return b } }), Object.defineProperty(t.media, "ended", { get: function() { return t.currentTime === t.duration } }), Promise.all([t.embed.getVideoWidth(), t.embed.getVideoHeight()]).then((function(n) {
                        var i = a(n, 2),
                            o = i[0],
                            r = i[1];
                        t.embed.ratio = [o, r], Ie.call(e)
                    })), t.embed.setAutopause(t.config.autopause).then((function(e) { t.config.autopause = e })), t.embed.getVideoTitle().then((function(n) { t.config.title = n, ut.setTitle.call(e) })), t.embed.getCurrentTime().then((function(e) { m = e, Ne.call(t, t.media, "timeupdate") })), t.embed.getDuration().then((function(e) { t.media.duration = e, Ne.call(t, t.media, "durationchange") })), t.embed.getTextTracks().then((function(e) { t.media.textTracks = e, nt.setup.call(t) })), t.embed.on("cuechange", (function(e) {
                        var n = e.cues,
                            i = (void 0 === n ? [] : n).map((function(e) {
                                return function(e) {
                                    var t = document.createDocumentFragment(),
                                        n = document.createElement("div");
                                    return t.appendChild(n), n.innerHTML = e, t.firstChild.innerText
                                }(e.text)
                            }));
                        nt.updateCues.call(t, i)
                    })), t.embed.on("loaded", (function() { t.embed.getPaused().then((function(e) { ft.call(t, !e), e || Ne.call(t, t.media, "playing") })), K(t.embed.element) && t.supported.ui && t.embed.element.setAttribute("tabindex", -1) })), t.embed.on("bufferstart", (function() { Ne.call(t, t.media, "waiting") })), t.embed.on("bufferend", (function() { Ne.call(t, t.media, "playing") })), t.embed.on("play", (function() { ft.call(t, !0), Ne.call(t, t.media, "playing") })), t.embed.on("pause", (function() { ft.call(t, !1) })), t.embed.on("timeupdate", (function(e) { t.media.seeking = !1, m = e.seconds, Ne.call(t, t.media, "timeupdate") })), t.embed.on("progress", (function(e) { t.media.buffered = e.percent, Ne.call(t, t.media, "progress"), 1 === parseInt(e.percent, 10) && Ne.call(t, t.media, "canplaythrough"), t.embed.getDuration().then((function(e) { e !== t.media.duration && (t.media.duration = e, Ne.call(t, t.media, "durationchange")) })) })), t.embed.on("seeked", (function() { t.media.seeking = !1, Ne.call(t, t.media, "seeked") })), t.embed.on("ended", (function() { t.media.paused = !0, Ne.call(t, t.media, "ended") })), t.embed.on("error", (function(e) { t.media.error = e, Ne.call(t, t.media, "error") })), n.customControls && setTimeout((function() { return ut.build.call(t) }), 0)
                }
            };

            function gt(e) { e && !this.embed.hasPlayed && (this.embed.hasPlayed = !0), this.media.paused === e && (this.media.paused = !e, Ne.call(this, this.media, e ? "play" : "pause")) }

            function vt(e) { return e.noCookie ? "https://www.youtube-nocookie.com" : "http:" === window.location.protocol ? "http://www.youtube.com" : void 0 }
            var yt, bt = {
                    setup: function() {
                        var e = this;
                        if (me(this.elements.wrapper, this.config.classNames.embed, !0), z(window.YT) && V(window.YT.Player)) bt.ready.call(this);
                        else {
                            var t = window.onYouTubeIframeAPIReady;
                            window.onYouTubeIframeAPIReady = function() { V(t) && t(), bt.ready.call(e) }, ht(this.config.urls.youtube.sdk).catch((function(t) { e.debug.warn("YouTube API failed to load", t) }))
                        }
                    },
                    getTitle: function(e) {
                        var t = this;
                        Xe(_e(this.config.urls.youtube.api, e)).then((function(e) {
                            if (z(e)) {
                                var n = e.title,
                                    i = e.height,
                                    o = e.width;
                                t.config.title = n, ut.setTitle.call(t), t.embed.ratio = [o, i]
                            }
                            Ie.call(t)
                        })).catch((function() { Ie.call(t) }))
                    },
                    ready: function() {
                        var e = this,
                            t = e.config.youtube,
                            n = e.media && e.media.getAttribute("id");
                        if (ee(n) || !n.startsWith("youtube-")) {
                            var i = e.media.getAttribute("src");
                            ee(i) && (i = e.media.getAttribute(this.config.attributes.embed.id));
                            var o, r, s = ee(o = i) ? null : o.match(/^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/) ? RegExp.$2 : o,
                                a = le("div", { id: (r = e.provider, "".concat(r, "-").concat(Math.floor(1e4 * Math.random()))), "data-poster": t.customControls ? e.poster : void 0 });
                            if (e.media = pe(a, e.media), t.customControls) {
                                var l = function(e) { return "https://i.ytimg.com/vi/".concat(s, "/").concat(e, "default.jpg") };
                                ct(l("maxres"), 121).catch((function() { return ct(l("sd"), 121) })).catch((function() { return ct(l("hq")) })).then((function(t) { return ut.setPoster.call(e, t.src) })).then((function(t) { t.includes("maxres") || (e.elements.poster.style.backgroundSize = "cover") })).catch((function() {}))
                            }
                            e.embed = new window.YT.Player(e.media, {
                                videoId: s,
                                host: vt(t),
                                playerVars: re({}, { autoplay: e.config.autoplay ? 1 : 0, hl: e.config.hl, controls: e.supported.ui && t.customControls ? 0 : 1, disablekb: 1, playsinline: e.config.fullscreen.iosNative ? 0 : 1, cc_load_policy: e.captions.active ? 1 : 0, cc_lang_pref: e.config.captions.language, widget_referrer: window ? window.location.href : null }, t),
                                events: {
                                    onError: function(t) {
                                        if (!e.media.error) {
                                            var n = t.data,
                                                i = { 2: "The request contains an invalid parameter value. For example, this error occurs if you specify a video ID that does not have 11 characters, or if the video ID contains invalid characters, such as exclamation points or asterisks.", 5: "The requested content cannot be played in an HTML5 player or another error related to the HTML5 player has occurred.", 100: "The video requested was not found. This error occurs when a video has been removed (for any reason) or has been marked as private.", 101: "The owner of the requested video does not allow it to be played in embedded players.", 150: "The owner of the requested video does not allow it to be played in embedded players." }[n] || "An unknown error occured";
                                            e.media.error = { code: n, message: i }, Ne.call(e, e.media, "error")
                                        }
                                    },
                                    onPlaybackRateChange: function(t) {
                                        var n = t.target;
                                        e.media.playbackRate = n.getPlaybackRate(), Ne.call(e, e.media, "ratechange")
                                    },
                                    onReady: function(n) {
                                        if (!V(e.media.play)) {
                                            var i = n.target;
                                            bt.getTitle.call(e, s), e.media.play = function() { gt.call(e, !0), i.playVideo() }, e.media.pause = function() { gt.call(e, !1), i.pauseVideo() }, e.media.stop = function() { i.stopVideo() }, e.media.duration = i.getDuration(), e.media.paused = !0, e.media.currentTime = 0, Object.defineProperty(e.media, "currentTime", { get: function() { return Number(i.getCurrentTime()) }, set: function(t) { e.paused && !e.embed.hasPlayed && e.embed.mute(), e.media.seeking = !0, Ne.call(e, e.media, "seeking"), i.seekTo(t) } }), Object.defineProperty(e.media, "playbackRate", { get: function() { return i.getPlaybackRate() }, set: function(e) { i.setPlaybackRate(e) } });
                                            var o = e.config.volume;
                                            Object.defineProperty(e.media, "volume", { get: function() { return o }, set: function(t) { o = t, i.setVolume(100 * o), Ne.call(e, e.media, "volumechange") } });
                                            var r = e.config.muted;
                                            Object.defineProperty(e.media, "muted", {
                                                get: function() { return r },
                                                set: function(t) {
                                                    var n = U(t) ? t : r;
                                                    r = n, i[n ? "mute" : "unMute"](), i.setVolume(100 * o), Ne.call(e, e.media, "volumechange")
                                                }
                                            }), Object.defineProperty(e.media, "currentSrc", { get: function() { return i.getVideoUrl() } }), Object.defineProperty(e.media, "ended", { get: function() { return e.currentTime === e.duration } });
                                            var a = i.getAvailablePlaybackRates();
                                            e.options.speed = a.filter((function(t) { return e.config.speed.options.includes(t) })), e.supported.ui && t.customControls && e.media.setAttribute("tabindex", -1), Ne.call(e, e.media, "timeupdate"), Ne.call(e, e.media, "durationchange"), clearInterval(e.timers.buffering), e.timers.buffering = setInterval((function() { e.media.buffered = i.getVideoLoadedFraction(), (null === e.media.lastBuffered || e.media.lastBuffered < e.media.buffered) && Ne.call(e, e.media, "progress"), e.media.lastBuffered = e.media.buffered, 1 === e.media.buffered && (clearInterval(e.timers.buffering), Ne.call(e, e.media, "canplaythrough")) }), 200), t.customControls && setTimeout((function() { return ut.build.call(e) }), 50)
                                        }
                                    },
                                    onStateChange: function(n) {
                                        var i = n.target;
                                        switch (clearInterval(e.timers.playing), e.media.seeking && [1, 2].includes(n.data) && (e.media.seeking = !1, Ne.call(e, e.media, "seeked")), n.data) {
                                            case -1:
                                                Ne.call(e, e.media, "timeupdate"), e.media.buffered = i.getVideoLoadedFraction(), Ne.call(e, e.media, "progress");
                                                break;
                                            case 0:
                                                gt.call(e, !1), e.media.loop ? (i.stopVideo(), i.playVideo()) : Ne.call(e, e.media, "ended");
                                                break;
                                            case 1:
                                                t.customControls && !e.config.autoplay && e.media.paused && !e.embed.hasPlayed ? e.media.pause() : (gt.call(e, !0), Ne.call(e, e.media, "playing"), e.timers.playing = setInterval((function() { Ne.call(e, e.media, "timeupdate") }), 50), e.media.duration !== i.getDuration() && (e.media.duration = i.getDuration(), Ne.call(e, e.media, "durationchange")));
                                                break;
                                            case 2:
                                                e.muted || e.embed.unMute(), gt.call(e, !1);
                                                break;
                                            case 3:
                                                Ne.call(e, e.media, "waiting")
                                        }
                                        Ne.call(e, e.elements.container, "statechange", !1, { code: n.data })
                                    }
                                }
                            })
                        }
                    }
                },
                wt = { setup: function() { this.media ? (me(this.elements.container, this.config.classNames.type.replace("{0}", this.type), !0), me(this.elements.container, this.config.classNames.provider.replace("{0}", this.provider), !0), this.isEmbed && me(this.elements.container, this.config.classNames.type.replace("{0}", "video"), !0), this.isVideo && (this.elements.wrapper = le("div", { class: this.config.classNames.video }), se(this.media, this.elements.wrapper), this.elements.poster = le("div", { class: this.config.classNames.poster, hidden: "" }), this.elements.wrapper.appendChild(this.elements.poster)), this.isHTML5 ? He.setup.call(this) : this.isYouTube ? bt.setup.call(this) : this.isVimeo && mt.setup.call(this)) : this.debug.warn("No media element found!") } },
                kt = function() {
                    function t(n) {
                        var i = this;
                        e(this, t), this.player = n, this.config = n.config.ads, this.playing = !1, this.initialized = !1, this.elements = { container: null, displayContainer: null }, this.manager = null, this.loader = null, this.cuePoints = null, this.events = {}, this.safetyTimer = null, this.countdownTimer = null, this.managerPromise = new Promise((function(e, t) { i.on("loaded", e), i.on("error", t) })), this.load()
                    }
                    return i(t, [{
                        key: "load",
                        value: function() {
                            var e = this;
                            this.enabled && (z(window.google) && z(window.google.ima) ? this.ready() : ht(this.player.config.urls.googleIMA.sdk).then((function() { e.ready() })).catch((function() { e.trigger("error", new Error("Google IMA SDK failed to load")) })))
                        }
                    }, {
                        key: "ready",
                        value: function() {
                            var e, t = this;
                            this.enabled || ((e = this).manager && e.manager.destroy(), e.elements.displayContainer && e.elements.displayContainer.destroy(), e.elements.container.remove()), this.startSafetyTimer(12e3, "ready()"), this.managerPromise.then((function() { t.clearSafetyTimer("onAdsManagerLoaded()") })), this.listeners(), this.setupIMA()
                        }
                    }, {
                        key: "setupIMA",
                        value: function() {
                            var e = this;
                            this.elements.container = le("div", { class: this.player.config.classNames.ads }), this.player.elements.container.appendChild(this.elements.container), google.ima.settings.setVpaidMode(google.ima.ImaSdkSettings.VpaidMode.ENABLED), google.ima.settings.setLocale(this.player.config.ads.language), google.ima.settings.setDisableCustomPlaybackForIOS10Plus(this.player.config.playsinline), this.elements.displayContainer = new google.ima.AdDisplayContainer(this.elements.container, this.player.media), this.loader = new google.ima.AdsLoader(this.elements.displayContainer), this.loader.addEventListener(google.ima.AdsManagerLoadedEvent.Type.ADS_MANAGER_LOADED, (function(t) { return e.onAdsManagerLoaded(t) }), !1), this.loader.addEventListener(google.ima.AdErrorEvent.Type.AD_ERROR, (function(t) { return e.onAdError(t) }), !1), this.requestAds()
                        }
                    }, {
                        key: "requestAds",
                        value: function() {
                            var e = this.player.elements.container;
                            try {
                                var t = new google.ima.AdsRequest;
                                t.adTagUrl = this.tagUrl, t.linearAdSlotWidth = e.offsetWidth, t.linearAdSlotHeight = e.offsetHeight, t.nonLinearAdSlotWidth = e.offsetWidth, t.nonLinearAdSlotHeight = e.offsetHeight, t.forceNonLinearFullSlot = !1, t.setAdWillPlayMuted(!this.player.muted), this.loader.requestAds(t)
                            } catch (e) { this.onAdError(e) }
                        }
                    }, {
                        key: "pollCountdown",
                        value: function() {
                            var e = this,
                                t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                            if (!t) return clearInterval(this.countdownTimer), void this.elements.container.removeAttribute("data-badge-text");
                            var n = function() {
                                var t = Je(Math.max(e.manager.getRemainingTime(), 0)),
                                    n = "".concat(Ue("advertisement", e.player.config), " - ").concat(t);
                                e.elements.container.setAttribute("data-badge-text", n)
                            };
                            this.countdownTimer = setInterval(n, 100)
                        }
                    }, {
                        key: "onAdsManagerLoaded",
                        value: function(e) {
                            var t = this;
                            if (this.enabled) {
                                var n = new google.ima.AdsRenderingSettings;
                                n.restoreCustomPlaybackStateOnAdBreakComplete = !0, n.enablePreloading = !0, this.manager = e.getAdsManager(this.player, n), this.cuePoints = this.manager.getCuePoints(), this.manager.addEventListener(google.ima.AdErrorEvent.Type.AD_ERROR, (function(e) { return t.onAdError(e) })), Object.keys(google.ima.AdEvent.Type).forEach((function(e) { t.manager.addEventListener(google.ima.AdEvent.Type[e], (function(e) { return t.onAdEvent(e) })) })), this.trigger("loaded")
                            }
                        }
                    }, {
                        key: "addCuePoints",
                        value: function() {
                            var e = this;
                            ee(this.cuePoints) || this.cuePoints.forEach((function(t) {
                                if (0 !== t && -1 !== t && t < e.player.duration) {
                                    var n = e.player.elements.progress;
                                    if (K(n)) {
                                        var i = 100 / e.player.duration * t,
                                            o = le("span", { class: e.player.config.classNames.cues });
                                        o.style.left = "".concat(i.toString(), "%"), n.appendChild(o)
                                    }
                                }
                            }))
                        }
                    }, {
                        key: "onAdEvent",
                        value: function(e) {
                            var t = this,
                                n = this.player.elements.container,
                                i = e.getAd(),
                                o = e.getAdData();
                            switch (function(e) { Ne.call(t.player, t.player.media, "ads".concat(e.replace(/_/g, "").toLowerCase())) }(e.type), e.type) {
                                case google.ima.AdEvent.Type.LOADED:
                                    this.trigger("loaded"), this.pollCountdown(!0), i.isLinear() || (i.width = n.offsetWidth, i.height = n.offsetHeight);
                                    break;
                                case google.ima.AdEvent.Type.STARTED:
                                    this.manager.setVolume(this.player.volume);
                                    break;
                                case google.ima.AdEvent.Type.ALL_ADS_COMPLETED:
                                    this.player.ended ? this.loadAds() : this.loader.contentComplete();
                                    break;
                                case google.ima.AdEvent.Type.CONTENT_PAUSE_REQUESTED:
                                    this.pauseContent();
                                    break;
                                case google.ima.AdEvent.Type.CONTENT_RESUME_REQUESTED:
                                    this.pollCountdown(), this.resumeContent();
                                    break;
                                case google.ima.AdEvent.Type.LOG:
                                    o.adError && this.player.debug.warn("Non-fatal ad error: ".concat(o.adError.getMessage()))
                            }
                        }
                    }, { key: "onAdError", value: function(e) { this.cancel(), this.player.debug.warn("Ads error", e) } }, {
                        key: "listeners",
                        value: function() {
                            var e, t = this,
                                n = this.player.elements.container;
                            this.player.on("canplay", (function() { t.addCuePoints() })), this.player.on("ended", (function() { t.loader.contentComplete() })), this.player.on("timeupdate", (function() { e = t.player.currentTime })), this.player.on("seeked", (function() {
                                var n = t.player.currentTime;
                                ee(t.cuePoints) || t.cuePoints.forEach((function(i, o) { e < i && i < n && (t.manager.discardAdBreak(), t.cuePoints.splice(o, 1)) }))
                            })), window.addEventListener("resize", (function() { t.manager && t.manager.resize(n.offsetWidth, n.offsetHeight, google.ima.ViewMode.NORMAL) }))
                        }
                    }, {
                        key: "play",
                        value: function() {
                            var e = this,
                                t = this.player.elements.container;
                            this.managerPromise || this.resumeContent(), this.managerPromise.then((function() { e.manager.setVolume(e.player.volume), e.elements.displayContainer.initialize(); try { e.initialized || (e.manager.init(t.offsetWidth, t.offsetHeight, google.ima.ViewMode.NORMAL), e.manager.start()), e.initialized = !0 } catch (t) { e.onAdError(t) } })).catch((function() {}))
                        }
                    }, { key: "resumeContent", value: function() { this.elements.container.style.zIndex = "", this.playing = !1, Me(this.player.media.play()) } }, { key: "pauseContent", value: function() { this.elements.container.style.zIndex = 3, this.playing = !0, this.player.media.pause() } }, { key: "cancel", value: function() { this.initialized && this.resumeContent(), this.trigger("error"), this.loadAds() } }, {
                        key: "loadAds",
                        value: function() {
                            var e = this;
                            this.managerPromise.then((function() { e.manager && e.manager.destroy(), e.managerPromise = new Promise((function(t) { e.on("loaded", t), e.player.debug.log(e.manager) })), e.initialized = !1, e.requestAds() })).catch((function() {}))
                        }
                    }, {
                        key: "trigger",
                        value: function(e) {
                            for (var t = this, n = arguments.length, i = new Array(n > 1 ? n - 1 : 0), o = 1; o < n; o++) i[o - 1] = arguments[o];
                            var r = this.events[e];
                            X(r) && r.forEach((function(e) { V(e) && e.apply(t, i) }))
                        }
                    }, { key: "on", value: function(e, t) { return X(this.events[e]) || (this.events[e] = []), this.events[e].push(t), this } }, {
                        key: "startSafetyTimer",
                        value: function(e, t) {
                            var n = this;
                            this.player.debug.log("Safety timer invoked from: ".concat(t)), this.safetyTimer = setTimeout((function() { n.cancel(), n.clearSafetyTimer("startSafetyTimer()") }), e)
                        }
                    }, { key: "clearSafetyTimer", value: function(e) { F(this.safetyTimer) || (this.player.debug.log("Safety timer cleared from: ".concat(e)), clearTimeout(this.safetyTimer), this.safetyTimer = null) } }, { key: "enabled", get: function() { var e = this.config; return this.player.isHTML5 && this.player.isVideo && e.enabled && (!ee(e.publisherId) || Z(e.tagUrl)) } }, { key: "tagUrl", get: function() { var e = this.config; if (Z(e.tagUrl)) return e.tagUrl; var t = { AV_PUBLISHERID: "58c25bb0073ef448b1087ad6", AV_CHANNELID: "5a0458dc28a06145e4519d21", AV_URL: window.location.hostname, cb: Date.now(), AV_WIDTH: 640, AV_HEIGHT: 480, AV_CDIM2: e.publisherId }; return "".concat("https://go.aniview.com/api/adserver6/vast/", "?").concat(tt(t)) } }]), t
                }(),
                Tt = function(e, t) { var n = {}; return e > t.width / t.height ? (n.width = t.width, n.height = 1 / e * t.width) : (n.height = t.height, n.width = e * t.height), n },
                xt = function() {
                    function t(n) { e(this, t), this.player = n, this.thumbnails = [], this.loaded = !1, this.lastMouseMoveTime = Date.now(), this.mouseDown = !1, this.loadedImages = [], this.elements = { thumb: {}, scrubbing: {} }, this.load() }
                    return i(t, [{
                        key: "load",
                        value: function() {
                            var e = this;
                            this.player.elements.display.seekTooltip && (this.player.elements.display.seekTooltip.hidden = this.enabled), this.enabled && this.getThumbnails().then((function() { e.enabled && (e.render(), e.determineContainerAutoSizing(), e.loaded = !0) }))
                        }
                    }, {
                        key: "getThumbnails",
                        value: function() {
                            var e = this;
                            return new Promise((function(t) {
                                var n = e.player.config.previewThumbnails.src;
                                if (ee(n)) throw new Error("Missing previewThumbnails.src config attribute");
                                var i = function() { e.thumbnails.sort((function(e, t) { return e.height - t.height })), e.player.debug.log("Preview thumbnails", e.thumbnails), t() };
                                if (V(n)) n((function(t) { e.thumbnails = t, i() }));
                                else {
                                    var o = (B(n) ? [n] : n).map((function(t) { return e.getThumbnail(t) }));
                                    Promise.all(o).then(i)
                                }
                            }))
                        }
                    }, {
                        key: "getThumbnail",
                        value: function(e) {
                            var t = this;
                            return new Promise((function(n) {
                                Xe(e).then((function(i) {
                                    var o, r, s = {
                                        frames: (o = i, r = [], o.split(/\r\n\r\n|\n\n|\r\r/).forEach((function(e) {
                                            var t = {};
                                            e.split(/\r\n|\n|\r/).forEach((function(e) {
                                                if (W(t.startTime)) {
                                                    if (!ee(e.trim()) && ee(t.text)) {
                                                        var n = e.trim().split("#xywh="),
                                                            i = a(n, 1);
                                                        if (t.text = i[0], n[1]) {
                                                            var o = a(n[1].split(","), 4);
                                                            t.x = o[0], t.y = o[1], t.w = o[2], t.h = o[3]
                                                        }
                                                    }
                                                } else {
                                                    var r = e.match(/([0-9]{2})?:?([0-9]{2}):([0-9]{2}).([0-9]{2,3})( ?--> ?)([0-9]{2})?:?([0-9]{2}):([0-9]{2}).([0-9]{2,3})/);
                                                    r && (t.startTime = 60 * Number(r[1] || 0) * 60 + 60 * Number(r[2]) + Number(r[3]) + Number("0.".concat(r[4])), t.endTime = 60 * Number(r[6] || 0) * 60 + 60 * Number(r[7]) + Number(r[8]) + Number("0.".concat(r[9])))
                                                }
                                            })), t.text && r.push(t)
                                        })), r),
                                        height: null,
                                        urlPrefix: ""
                                    };
                                    s.frames[0].text.startsWith("/") || s.frames[0].text.startsWith("http://") || s.frames[0].text.startsWith("https://") || (s.urlPrefix = e.substring(0, e.lastIndexOf("/") + 1));
                                    var l = new Image;
                                    l.onload = function() { s.height = l.naturalHeight, s.width = l.naturalWidth, t.thumbnails.push(s), n() }, l.src = s.urlPrefix + s.frames[0].text
                                }))
                            }))
                        }
                    }, {
                        key: "startMove",
                        value: function(e) {
                            if (this.loaded && Q(e) && ["touchmove", "mousemove"].includes(e.type) && this.player.media.duration) {
                                if ("touchmove" === e.type) this.seekTime = this.player.media.duration * (this.player.elements.inputs.seek.value / 100);
                                else {
                                    var t = this.player.elements.progress.getBoundingClientRect(),
                                        n = 100 / t.width * (e.pageX - t.left);
                                    this.seekTime = this.player.media.duration * (n / 100), this.seekTime < 0 && (this.seekTime = 0), this.seekTime > this.player.media.duration - 1 && (this.seekTime = this.player.media.duration - 1), this.mousePosX = e.pageX, this.elements.thumb.time.innerText = Je(this.seekTime)
                                }
                                this.showImageAtCurrentTime()
                            }
                        }
                    }, { key: "endMove", value: function() { this.toggleThumbContainer(!1, !0) } }, {
                        key: "startScrubbing",
                        value: function(e) {
                            (F(e.button) || !1 === e.button || 0 === e.button) && (this.mouseDown = !0, this.player.media.duration && (this.toggleScrubbingContainer(!0), this.toggleThumbContainer(!1, !0), this.showImageAtCurrentTime()))
                        }
                    }, {
                        key: "endScrubbing",
                        value: function() {
                            var e = this;
                            this.mouseDown = !1, Math.ceil(this.lastTime) === Math.ceil(this.player.media.currentTime) ? this.toggleScrubbingContainer(!1) : Pe.call(this.player, this.player.media, "timeupdate", (function() { e.mouseDown || e.toggleScrubbingContainer(!1) }))
                        }
                    }, {
                        key: "listeners",
                        value: function() {
                            var e = this;
                            this.player.on("play", (function() { e.toggleThumbContainer(!1, !0) })), this.player.on("seeked", (function() { e.toggleThumbContainer(!1) })), this.player.on("timeupdate", (function() { e.lastTime = e.player.media.currentTime }))
                        }
                    }, {
                        key: "render",
                        value: function() {
                            this.elements.thumb.container = le("div", { class: this.player.config.classNames.previewThumbnails.thumbContainer }), this.elements.thumb.imageContainer = le("div", { class: this.player.config.classNames.previewThumbnails.imageContainer }), this.elements.thumb.container.appendChild(this.elements.thumb.imageContainer);
                            var e = le("div", { class: this.player.config.classNames.previewThumbnails.timeContainer });
                            this.elements.thumb.time = le("span", {}, "00:00"), e.appendChild(this.elements.thumb.time), this.elements.thumb.container.appendChild(e), K(this.player.elements.progress) && this.player.elements.progress.appendChild(this.elements.thumb.container), this.elements.scrubbing.container = le("div", { class: this.player.config.classNames.previewThumbnails.scrubbingContainer }), this.player.elements.wrapper.appendChild(this.elements.scrubbing.container)
                        }
                    }, { key: "destroy", value: function() { this.elements.thumb.container && this.elements.thumb.container.remove(), this.elements.scrubbing.container && this.elements.scrubbing.container.remove() } }, {
                        key: "showImageAtCurrentTime",
                        value: function() {
                            var e = this;
                            this.mouseDown ? this.setScrubbingContainerSize() : this.setThumbContainerSizeAndPos();
                            var t = this.thumbnails[0].frames.findIndex((function(t) { return e.seekTime >= t.startTime && e.seekTime <= t.endTime })),
                                n = t >= 0,
                                i = 0;
                            this.mouseDown || this.toggleThumbContainer(n), n && (this.thumbnails.forEach((function(n, o) { e.loadedImages.includes(n.frames[t].text) && (i = o) })), t !== this.showingThumb && (this.showingThumb = t, this.loadImage(i)))
                        }
                    }, {
                        key: "loadImage",
                        value: function() {
                            var e = this,
                                t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
                                n = this.showingThumb,
                                i = this.thumbnails[t],
                                o = i.urlPrefix,
                                r = i.frames[n],
                                s = i.frames[n].text,
                                a = o + s;
                            if (this.currentImageElement && this.currentImageElement.dataset.filename === s) this.showImage(this.currentImageElement, r, t, n, s, !1), this.currentImageElement.dataset.index = n, this.removeOldImages(this.currentImageElement);
                            else {
                                this.loadingImage && this.usingSprites && (this.loadingImage.onload = null);
                                var l = new Image;
                                l.src = a, l.dataset.index = n, l.dataset.filename = s, this.showingThumbFilename = s, this.player.debug.log("Loading image: ".concat(a)), l.onload = function() { return e.showImage(l, r, t, n, s, !0) }, this.loadingImage = l, this.removeOldImages(l)
                            }
                        }
                    }, {
                        key: "showImage",
                        value: function(e, t, n, i, o) {
                            var r = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5];
                            this.player.debug.log("Showing thumb: ".concat(o, ". num: ").concat(i, ". qual: ").concat(n, ". newimg: ").concat(r)), this.setImageSizeAndOffset(e, t), r && (this.currentImageContainer.appendChild(e), this.currentImageElement = e, this.loadedImages.includes(o) || this.loadedImages.push(o)), this.preloadNearby(i, !0).then(this.preloadNearby(i, !1)).then(this.getHigherQuality(n, e, t, o))
                        }
                    }, {
                        key: "removeOldImages",
                        value: function(e) {
                            var t = this;
                            Array.from(this.currentImageContainer.children).forEach((function(n) {
                                if ("img" === n.tagName.toLowerCase()) {
                                    var i = t.usingSprites ? 500 : 1e3;
                                    if (n.dataset.index !== e.dataset.index && !n.dataset.deleting) {
                                        n.dataset.deleting = !0;
                                        var o = t.currentImageContainer;
                                        setTimeout((function() { o.removeChild(n), t.player.debug.log("Removing thumb: ".concat(n.dataset.filename)) }), i)
                                    }
                                }
                            }))
                        }
                    }, {
                        key: "preloadNearby",
                        value: function(e) {
                            var t = this,
                                n = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
                            return new Promise((function(i) {
                                setTimeout((function() {
                                    var o = t.thumbnails[0].frames[e].text;
                                    if (t.showingThumbFilename === o) {
                                        var r;
                                        r = n ? t.thumbnails[0].frames.slice(e) : t.thumbnails[0].frames.slice(0, e).reverse();
                                        var s = !1;
                                        r.forEach((function(e) {
                                            var n = e.text;
                                            if (n !== o && !t.loadedImages.includes(n)) {
                                                s = !0, t.player.debug.log("Preloading thumb filename: ".concat(n));
                                                var r = t.thumbnails[0].urlPrefix + n,
                                                    a = new Image;
                                                a.src = r, a.onload = function() { t.player.debug.log("Preloaded thumb filename: ".concat(n)), t.loadedImages.includes(n) || t.loadedImages.push(n), i() }
                                            }
                                        })), s || i()
                                    }
                                }), 300)
                            }))
                        }
                    }, {
                        key: "getHigherQuality",
                        value: function(e, t, n, i) {
                            var o = this;
                            if (e < this.thumbnails.length - 1) {
                                var r = t.naturalHeight;
                                this.usingSprites && (r = n.h), r < this.thumbContainerHeight && setTimeout((function() { o.showingThumbFilename === i && (o.player.debug.log("Showing higher quality thumb for: ".concat(i)), o.loadImage(e + 1)) }), 300)
                            }
                        }
                    }, {
                        key: "toggleThumbContainer",
                        value: function() {
                            var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                                t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                                n = this.player.config.classNames.previewThumbnails.thumbContainerShown;
                            this.elements.thumb.container.classList.toggle(n, e), !e && t && (this.showingThumb = null, this.showingThumbFilename = null)
                        }
                    }, {
                        key: "toggleScrubbingContainer",
                        value: function() {
                            var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                                t = this.player.config.classNames.previewThumbnails.scrubbingContainerShown;
                            this.elements.scrubbing.container.classList.toggle(t, e), e || (this.showingThumb = null, this.showingThumbFilename = null)
                        }
                    }, {
                        key: "determineContainerAutoSizing",
                        value: function() {
                            (this.elements.thumb.imageContainer.clientHeight > 20 || this.elements.thumb.imageContainer.clientWidth > 20) && (this.sizeSpecifiedInCSS = !0)
                        }
                    }, {
                        key: "setThumbContainerSizeAndPos",
                        value: function() {
                            if (this.sizeSpecifiedInCSS) {
                                if (this.elements.thumb.imageContainer.clientHeight > 20 && this.elements.thumb.imageContainer.clientWidth < 20) {
                                    var e = Math.floor(this.elements.thumb.imageContainer.clientHeight * this.thumbAspectRatio);
                                    this.elements.thumb.imageContainer.style.width = "".concat(e, "px")
                                } else if (this.elements.thumb.imageContainer.clientHeight < 20 && this.elements.thumb.imageContainer.clientWidth > 20) {
                                    var t = Math.floor(this.elements.thumb.imageContainer.clientWidth / this.thumbAspectRatio);
                                    this.elements.thumb.imageContainer.style.height = "".concat(t, "px")
                                }
                            } else {
                                var n = Math.floor(this.thumbContainerHeight * this.thumbAspectRatio);
                                this.elements.thumb.imageContainer.style.height = "".concat(this.thumbContainerHeight, "px"), this.elements.thumb.imageContainer.style.width = "".concat(n, "px")
                            }
                            this.setThumbContainerPos()
                        }
                    }, {
                        key: "setThumbContainerPos",
                        value: function() {
                            var e = this.player.elements.progress.getBoundingClientRect(),
                                t = this.player.elements.container.getBoundingClientRect(),
                                n = this.elements.thumb.container,
                                i = t.left - e.left + 10,
                                o = t.right - e.left - n.clientWidth - 10,
                                r = this.mousePosX - e.left - n.clientWidth / 2;
                            r < i && (r = i), r > o && (r = o), n.style.left = "".concat(r, "px")
                        }
                    }, {
                        key: "setScrubbingContainerSize",
                        value: function() {
                            var e = Tt(this.thumbAspectRatio, { width: this.player.media.clientWidth, height: this.player.media.clientHeight }),
                                t = e.width,
                                n = e.height;
                            this.elements.scrubbing.container.style.width = "".concat(t, "px"), this.elements.scrubbing.container.style.height = "".concat(n, "px")
                        }
                    }, {
                        key: "setImageSizeAndOffset",
                        value: function(e, t) {
                            if (this.usingSprites) {
                                var n = this.thumbContainerHeight / t.h;
                                e.style.height = "".concat(e.naturalHeight * n, "px"), e.style.width = "".concat(e.naturalWidth * n, "px"), e.style.left = "-".concat(t.x * n, "px"), e.style.top = "-".concat(t.y * n, "px")
                            }
                        }
                    }, { key: "enabled", get: function() { return this.player.isHTML5 && this.player.isVideo && this.player.config.previewThumbnails.enabled } }, { key: "currentImageContainer", get: function() { return this.mouseDown ? this.elements.scrubbing.container : this.elements.thumb.imageContainer } }, { key: "usingSprites", get: function() { return Object.keys(this.thumbnails[0].frames[0]).includes("w") } }, { key: "thumbAspectRatio", get: function() { return this.usingSprites ? this.thumbnails[0].frames[0].w / this.thumbnails[0].frames[0].h : this.thumbnails[0].width / this.thumbnails[0].height } }, { key: "thumbContainerHeight", get: function() { return this.mouseDown ? Tt(this.thumbAspectRatio, { width: this.player.media.clientWidth, height: this.player.media.clientHeight }).height : this.sizeSpecifiedInCSS ? this.elements.thumb.imageContainer.clientHeight : Math.floor(this.player.media.clientWidth / this.thumbAspectRatio / 4) } }, { key: "currentImageElement", get: function() { return this.mouseDown ? this.currentScrubbingImageElement : this.currentThumbnailImageElement }, set: function(e) { this.mouseDown ? this.currentScrubbingImageElement = e : this.currentThumbnailImageElement = e } }]), t
                }(),
                St = {
                    insertElements: function(e, t) {
                        var n = this;
                        B(t) ? ce(e, this.media, { src: t }) : X(t) && t.forEach((function(t) { ce(e, n.media, t) }))
                    },
                    change: function(e) {
                        var t = this;
                        oe(e, "sources.length") ? (He.cancelRequests.call(this), this.destroy.call(this, (function() {
                            t.options.quality = [], ue(t.media), t.media = null, K(t.elements.container) && t.elements.container.removeAttribute("class");
                            var n = e.sources,
                                i = e.type,
                                o = a(n, 1)[0],
                                r = o.provider,
                                s = void 0 === r ? rt.html5 : r,
                                l = o.src,
                                c = "html5" === s ? i : "div",
                                u = "html5" === s ? {} : { src: l };
                            Object.assign(t, { provider: s, type: i, supported: xe.check(i, s, t.config.playsinline), media: le(c, u) }), t.elements.container.appendChild(t.media), U(e.autoplay) && (t.config.autoplay = e.autoplay), t.isHTML5 && (t.config.crossorigin && t.media.setAttribute("crossorigin", ""), t.config.autoplay && t.media.setAttribute("autoplay", ""), ee(e.poster) || (t.poster = e.poster), t.config.loop.active && t.media.setAttribute("loop", ""), t.config.muted && t.media.setAttribute("muted", ""), t.config.playsinline && t.media.setAttribute("playsinline", "")), ut.addStyleHook.call(t), t.isHTML5 && St.insertElements.call(t, "source", n), t.config.title = e.title, wt.setup.call(t), t.isHTML5 && Object.keys(e).includes("tracks") && St.insertElements.call(t, "track", e.tracks), (t.isHTML5 || t.isEmbed && !t.supported.ui) && ut.build.call(t), t.isHTML5 && t.media.load(), ee(e.previewThumbnails) || (Object.assign(t.config.previewThumbnails, e.previewThumbnails), t.previewThumbnails && t.previewThumbnails.loaded && (t.previewThumbnails.destroy(), t.previewThumbnails = null), t.config.previewThumbnails.enabled && (t.previewThumbnails = new xt(t))), t.fullscreen.update()
                        }), !0)) : this.debug.warn("Invalid source format")
                    }
                },
                Ct = function() {
                    function t(n, i) {
                        var o = this;
                        if (e(this, t), this.timers = {}, this.ready = !1, this.loading = !1, this.failed = !1, this.touch = xe.touch, this.media = n, B(this.media) && (this.media = document.querySelectorAll(this.media)), (window.jQuery && this.media instanceof jQuery || Y(this.media) || X(this.media)) && (this.media = this.media[0]), this.config = re({}, it, t.defaults, i || {}, function() { try { return JSON.parse(o.media.getAttribute("data-plyr-config")) } catch (e) { return {} } }()), this.elements = { container: null, fullscreen: null, captions: null, buttons: {}, display: {}, progress: {}, inputs: {}, settings: { popup: null, menu: null, panels: {}, buttons: {} } }, this.captions = { active: null, currentTrack: -1, meta: new WeakMap }, this.fullscreen = { active: !1 }, this.options = { speed: [], quality: [] }, this.debug = new at(this.config.debug), this.debug.log("Config", this.config), this.debug.log("Support", xe), !F(this.media) && K(this.media))
                            if (this.media.plyr) this.debug.warn("Target already setup");
                            else if (this.config.enabled)
                            if (xe.check().api) {
                                var r = this.media.cloneNode(!0);
                                r.autoplay = !1, this.elements.original = r;
                                var s = this.media.tagName.toLowerCase(),
                                    a = null,
                                    l = null;
                                switch (s) {
                                    case "div":
                                        if (a = this.media.querySelector("iframe"), K(a)) {
                                            if (l = et(a.getAttribute("src")), this.provider = function(e) { return /^(https?:\/\/)?(www\.)?(youtube\.com|youtube-nocookie\.com|youtu\.?be)\/.+$/.test(e) ? rt.youtube : /^https?:\/\/player.vimeo.com\/video\/\d{0,9}(?=\b|\/)/.test(e) ? rt.vimeo : null }(l.toString()), this.elements.container = this.media, this.media = a, this.elements.container.className = "", l.search.length) {
                                                var c = ["1", "true"];
                                                c.includes(l.searchParams.get("autoplay")) && (this.config.autoplay = !0), c.includes(l.searchParams.get("loop")) && (this.config.loop.active = !0), this.isYouTube ? (this.config.playsinline = c.includes(l.searchParams.get("playsinline")), this.config.youtube.hl = l.searchParams.get("hl")) : this.config.playsinline = !0
                                            }
                                        } else this.provider = this.media.getAttribute(this.config.attributes.embed.provider), this.media.removeAttribute(this.config.attributes.embed.provider);
                                        if (ee(this.provider) || !Object.keys(rt).includes(this.provider)) return void this.debug.error("Setup failed: Invalid provider");
                                        this.type = "video";
                                        break;
                                    case "video":
                                    case "audio":
                                        this.type = s, this.provider = rt.html5, this.media.hasAttribute("crossorigin") && (this.config.crossorigin = !0), this.media.hasAttribute("autoplay") && (this.config.autoplay = !0), (this.media.hasAttribute("playsinline") || this.media.hasAttribute("webkit-playsinline")) && (this.config.playsinline = !0), this.media.hasAttribute("muted") && (this.config.muted = !0), this.media.hasAttribute("loop") && (this.config.loop.active = !0);
                                        break;
                                    default:
                                        return void this.debug.error("Setup failed: unsupported type")
                                }
                                this.supported = xe.check(this.type, this.provider, this.config.playsinline), this.supported.api ? (this.eventListeners = [], this.listeners = new dt(this), this.storage = new Ve(this), this.media.plyr = this, K(this.elements.container) || (this.elements.container = le("div", { tabindex: 0 }), se(this.media, this.elements.container)), ut.migrateStyles.call(this), ut.addStyleHook.call(this), wt.setup.call(this), this.config.debug && Ae.call(this, this.elements.container, this.config.events.join(" "), (function(e) { o.debug.log("event: ".concat(e.type)) })), this.fullscreen = new lt(this), (this.isHTML5 || this.isEmbed && !this.supported.ui) && ut.build.call(this), this.listeners.container(), this.listeners.global(), this.config.ads.enabled && (this.ads = new kt(this)), this.isHTML5 && this.config.autoplay && this.once("canplay", (function() { return Me(o.play()) })), this.lastSeekTime = 0, this.config.previewThumbnails.enabled && (this.previewThumbnails = new xt(this))) : this.debug.error("Setup failed: no support")
                            } else this.debug.error("Setup failed: no support");
                        else this.debug.error("Setup failed: disabled by config");
                        else this.debug.error("Setup failed: no suitable element passed")
                    }
                    return i(t, [{ key: "play", value: function() { var e = this; return V(this.media.play) ? (this.ads && this.ads.enabled && this.ads.managerPromise.then((function() { return e.ads.play() })).catch((function() { return Me(e.media.play()) })), this.media.play()) : null } }, { key: "pause", value: function() { return this.playing && V(this.media.pause) ? this.media.pause() : null } }, { key: "togglePlay", value: function(e) { return (U(e) ? e : !this.playing) ? this.play() : this.pause() } }, { key: "stop", value: function() { this.isHTML5 ? (this.pause(), this.restart()) : V(this.media.stop) && this.media.stop() } }, { key: "restart", value: function() { this.currentTime = 0 } }, { key: "rewind", value: function(e) { this.currentTime -= W(e) ? e : this.config.seekTime } }, { key: "forward", value: function(e) { this.currentTime += W(e) ? e : this.config.seekTime } }, {
                        key: "increaseVolume",
                        value: function(e) {
                            var t = this.media.muted ? 0 : this.volume;
                            this.volume = t + (W(e) ? e : 0)
                        }
                    }, { key: "decreaseVolume", value: function(e) { this.increaseVolume(-e) } }, { key: "toggleCaptions", value: function(e) { nt.toggle.call(this, e, !1) } }, { key: "airplay", value: function() { xe.airplay && this.media.webkitShowPlaybackTargetPicker() } }, {
                        key: "toggleControls",
                        value: function(e) {
                            if (this.supported.ui && !this.isAudio) {
                                var t = ge(this.elements.container, this.config.classNames.hideControls),
                                    n = void 0 === e ? void 0 : !e,
                                    i = me(this.elements.container, this.config.classNames.hideControls, n);
                                if (i && X(this.config.controls) && this.config.controls.includes("settings") && !ee(this.config.settings) && Ze.toggleMenu.call(this, !1), i !== t) {
                                    var o = i ? "controlshidden" : "controlsshown";
                                    Ne.call(this, this.media, o)
                                }
                                return !i
                            }
                            return !1
                        }
                    }, { key: "on", value: function(e, t) { Ae.call(this, this.elements.container, e, t) } }, { key: "once", value: function(e, t) { Pe.call(this, this.elements.container, e, t) } }, { key: "off", value: function(e, t) { Ee(this.elements.container, e, t) } }, {
                        key: "destroy",
                        value: function(e) {
                            var t = this,
                                n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                            if (this.ready) {
                                var i = function() { document.body.style.overflow = "", t.embed = null, n ? (Object.keys(t.elements).length && (ue(t.elements.buttons.play), ue(t.elements.captions), ue(t.elements.controls), ue(t.elements.wrapper), t.elements.buttons.play = null, t.elements.captions = null, t.elements.controls = null, t.elements.wrapper = null), V(e) && e()) : (Oe.call(t), He.cancelRequests.call(t), pe(t.elements.original, t.elements.container), Ne.call(t, t.elements.original, "destroyed", !0), V(e) && e.call(t.elements.original), t.ready = !1, setTimeout((function() { t.elements = null, t.media = null }), 200)) };
                                this.stop(), clearTimeout(this.timers.loading), clearTimeout(this.timers.controls), clearTimeout(this.timers.resized), this.isHTML5 ? (ut.toggleNativeControls.call(this, !0), i()) : this.isYouTube ? (clearInterval(this.timers.buffering), clearInterval(this.timers.playing), null !== this.embed && V(this.embed.destroy) && this.embed.destroy(), i()) : this.isVimeo && (null !== this.embed && this.embed.unload().then(i), setTimeout(i, 200))
                            }
                        }
                    }, { key: "supports", value: function(e) { return xe.mime.call(this, e) } }, { key: "isHTML5", get: function() { return this.provider === rt.html5 } }, { key: "isEmbed", get: function() { return this.isYouTube || this.isVimeo } }, { key: "isYouTube", get: function() { return this.provider === rt.youtube } }, { key: "isVimeo", get: function() { return this.provider === rt.vimeo } }, { key: "isVideo", get: function() { return "video" === this.type } }, { key: "isAudio", get: function() { return "audio" === this.type } }, { key: "playing", get: function() { return Boolean(this.ready && !this.paused && !this.ended) } }, { key: "paused", get: function() { return Boolean(this.media.paused) } }, { key: "stopped", get: function() { return Boolean(this.paused && 0 === this.currentTime) } }, { key: "ended", get: function() { return Boolean(this.media.ended) } }, {
                        key: "currentTime",
                        set: function(e) {
                            if (this.duration) {
                                var t = W(e) && e > 0;
                                this.media.currentTime = t ? Math.min(e, this.duration) : 0, this.debug.log("Seeking to ".concat(this.currentTime, " seconds"))
                            }
                        },
                        get: function() { return Number(this.media.currentTime) }
                    }, { key: "buffered", get: function() { var e = this.media.buffered; return W(e) ? e : e && e.length && this.duration > 0 ? e.end(0) / this.duration : 0 } }, { key: "seeking", get: function() { return Boolean(this.media.seeking) } }, {
                        key: "duration",
                        get: function() {
                            var e = parseFloat(this.config.duration),
                                t = (this.media || {}).duration,
                                n = W(t) && t !== 1 / 0 ? t : 0;
                            return e || n
                        }
                    }, {
                        key: "volume",
                        set: function(e) {
                            var t = e;
                            B(t) && (t = Number(t)), W(t) || (t = this.storage.get("volume")), W(t) || (t = this.config.volume), t > 1 && (t = 1), t < 0 && (t = 0), this.config.volume = t, this.media.volume = t, !ee(e) && this.muted && t > 0 && (this.muted = !1)
                        },
                        get: function() { return Number(this.media.volume) }
                    }, {
                        key: "muted",
                        set: function(e) {
                            var t = e;
                            U(t) || (t = this.storage.get("muted")), U(t) || (t = this.config.muted), this.config.muted = t, this.media.muted = t
                        },
                        get: function() { return Boolean(this.media.muted) }
                    }, { key: "hasAudio", get: function() { return !this.isHTML5 || !!this.isAudio || Boolean(this.media.mozHasAudio) || Boolean(this.media.webkitAudioDecodedByteCount) || Boolean(this.media.audioTracks && this.media.audioTracks.length) } }, {
                        key: "speed",
                        set: function(e) {
                            var t = this,
                                n = null;
                            W(e) && (n = e), W(n) || (n = this.storage.get("speed")), W(n) || (n = this.config.speed.selected);
                            var i = this.minimumSpeed,
                                o = this.maximumSpeed;
                            n = function() {
                                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
                                    t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
                                    n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 255;
                                return Math.min(Math.max(e, t), n)
                            }(n, i, o), this.config.speed.selected = n, setTimeout((function() { t.media.playbackRate = n }), 0)
                        },
                        get: function() { return Number(this.media.playbackRate) }
                    }, { key: "minimumSpeed", get: function() { return this.isYouTube ? Math.min.apply(Math, l(this.options.speed)) : this.isVimeo ? .5 : .0625 } }, { key: "maximumSpeed", get: function() { return this.isYouTube ? Math.max.apply(Math, l(this.options.speed)) : this.isVimeo ? 2 : 16 } }, {
                        key: "quality",
                        set: function(e) {
                            var t = this.config.quality,
                                n = this.options.quality;
                            if (n.length) {
                                var i = [!ee(e) && Number(e), this.storage.get("quality"), t.selected, t.default].find(W),
                                    o = !0;
                                if (!n.includes(i)) {
                                    var r = function(e, t) { return X(e) && e.length ? e.reduce((function(e, n) { return Math.abs(n - t) < Math.abs(e - t) ? n : e })) : null }(n, i);
                                    this.debug.warn("Unsupported quality option: ".concat(i, ", using ").concat(r, " instead")), i = r, o = !1
                                }
                                t.selected = i, this.media.quality = i, o && this.storage.set({ quality: i })
                            }
                        },
                        get: function() { return this.media.quality }
                    }, {
                        key: "loop",
                        set: function(e) {
                            var t = U(e) ? e : this.config.loop.active;
                            this.config.loop.active = t, this.media.loop = t
                        },
                        get: function() { return Boolean(this.media.loop) }
                    }, { key: "source", set: function(e) { St.change.call(this, e) }, get: function() { return this.media.currentSrc } }, { key: "download", get: function() { var e = this.config.urls.download; return Z(e) ? e : this.source }, set: function(e) { Z(e) && (this.config.urls.download = e, Ze.setDownloadUrl.call(this)) } }, { key: "poster", set: function(e) { this.isVideo ? ut.setPoster.call(this, e, !1).catch((function() {})) : this.debug.warn("Poster can only be set for video") }, get: function() { return this.isVideo ? this.media.getAttribute("poster") || this.media.getAttribute("data-poster") : null } }, { key: "ratio", get: function() { if (!this.isVideo) return null; var e = je(De.call(this)); return X(e) ? e.join(":") : e }, set: function(e) { this.isVideo ? B(e) && $e(e) ? (this.config.ratio = e, Ie.call(this)) : this.debug.error("Invalid aspect ratio specified (".concat(e, ")")) : this.debug.warn("Aspect ratio can only be set for video") } }, {
                        key: "autoplay",
                        set: function(e) {
                            var t = U(e) ? e : this.config.autoplay;
                            this.config.autoplay = t
                        },
                        get: function() { return Boolean(this.config.autoplay) }
                    }, {
                        key: "currentTrack",
                        set: function(e) { nt.set.call(this, e, !1) },
                        get: function() {
                            var e = this.captions,
                                t = e.toggled,
                                n = e.currentTrack;
                            return t ? n : -1
                        }
                    }, { key: "language", set: function(e) { nt.setLanguage.call(this, e, !1) }, get: function() { return (nt.getCurrentTrack.call(this) || {}).language } }, {
                        key: "pip",
                        set: function(e) {
                            if (xe.pip) {
                                var t = U(e) ? e : !this.pip;
                                V(this.media.webkitSetPresentationMode) && this.media.webkitSetPresentationMode(t ? ot : "inline"), V(this.media.requestPictureInPicture) && (!this.pip && t ? this.media.requestPictureInPicture() : this.pip && !t && document.exitPictureInPicture())
                            }
                        },
                        get: function() { return xe.pip ? ee(this.media.webkitPresentationMode) ? this.media === document.pictureInPictureElement : this.media.webkitPresentationMode === ot : null }
                    }], [{ key: "supported", value: function(e, t, n) { return xe.check(e, t, n) } }, { key: "loadSprite", value: function(e, t) { return Ye(e, t) } }, {
                        key: "setup",
                        value: function(e) {
                            var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                                i = null;
                            return B(e) ? i = Array.from(document.querySelectorAll(e)) : Y(e) ? i = Array.from(e) : X(e) && (i = e.filter(K)), ee(i) ? null : i.map((function(e) { return new t(e, n) }))
                        }
                    }]), t
                }();
            return Ct.defaults = (yt = it, JSON.parse(JSON.stringify(yt))), Ct
        }())
    }).call(this, n(3))
}, function(e, t) {
    var n;
    n = function() { return this }();
    try { n = n || new Function("return this")() } catch (e) { "object" == typeof window && (n = window) }
    e.exports = n
}, function(e, t, n) {
    var i, o, r;

    function s(e) { return (s = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) { return typeof e } : function(e) { return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e })(e) }! function(a) {
        "use strict";
        o = [n(0)], void 0 === (r = "function" == typeof(i = function(e) {
            var t = window.Slick || {};
            (n = 0, t = function(t, i) {
                var o, r = this;
                r.defaults = { accessibility: !0, adaptiveHeight: !1, appendArrows: e(t), appendDots: e(t), arrows: !0, asNavFor: null, prevArrow: '<button class="slick-prev" aria-label="Previous" type="button">Previous</button>', nextArrow: '<button class="slick-next" aria-label="Next" type="button">Next</button>', autoplay: !1, autoplaySpeed: 3e3, centerMode: !1, centerPadding: "50px", cssEase: "ease", customPaging: function(t, n) { return e('<button type="button" />').text(n + 1) }, dots: !1, dotsClass: "slick-dots", draggable: !0, easing: "linear", edgeFriction: .35, fade: !1, focusOnSelect: !1, focusOnChange: !1, infinite: !0, initialSlide: 0, lazyLoad: "ondemand", mobileFirst: !1, pauseOnHover: !0, pauseOnFocus: !0, pauseOnDotsHover: !1, respondTo: "window", responsive: null, rows: 1, rtl: !1, slide: "", slidesPerRow: 1, slidesToShow: 1, slidesToScroll: 1, speed: 500, swipe: !0, swipeToSlide: !1, touchMove: !0, touchThreshold: 5, useCSS: !0, useTransform: !0, variableWidth: !1, vertical: !1, verticalSwiping: !1, waitForAnimate: !0, zIndex: 1e3 }, r.initials = { animating: !1, dragging: !1, autoPlayTimer: null, currentDirection: 0, currentLeft: null, currentSlide: 0, direction: 1, $dots: null, listWidth: null, listHeight: null, loadIndex: 0, $nextArrow: null, $prevArrow: null, scrolling: !1, slideCount: null, slideWidth: null, $slideTrack: null, $slides: null, sliding: !1, slideOffset: 0, swipeLeft: null, swiping: !1, $list: null, touchObject: {}, transformsEnabled: !1, unslicked: !1 }, e.extend(r, r.initials), r.activeBreakpoint = null, r.animType = null, r.animProp = null, r.breakpoints = [], r.breakpointSettings = [], r.cssTransitions = !1, r.focussed = !1, r.interrupted = !1, r.hidden = "hidden", r.paused = !0, r.positionProp = null, r.respondTo = null, r.rowCount = 1, r.shouldClick = !0, r.$slider = e(t), r.$slidesCache = null, r.transformType = null, r.transitionType = null, r.visibilityChange = "visibilitychange", r.windowWidth = 0, r.windowTimer = null, o = e(t).data("slick") || {}, r.options = e.extend({}, r.defaults, i, o), r.currentSlide = r.options.initialSlide, r.originalSettings = r.options, void 0 !== document.mozHidden ? (r.hidden = "mozHidden", r.visibilityChange = "mozvisibilitychange") : void 0 !== document.webkitHidden && (r.hidden = "webkitHidden", r.visibilityChange = "webkitvisibilitychange"), r.autoPlay = e.proxy(r.autoPlay, r), r.autoPlayClear = e.proxy(r.autoPlayClear, r), r.autoPlayIterator = e.proxy(r.autoPlayIterator, r), r.changeSlide = e.proxy(r.changeSlide, r), r.clickHandler = e.proxy(r.clickHandler, r), r.selectHandler = e.proxy(r.selectHandler, r), r.setPosition = e.proxy(r.setPosition, r), r.swipeHandler = e.proxy(r.swipeHandler, r), r.dragHandler = e.proxy(r.dragHandler, r), r.keyHandler = e.proxy(r.keyHandler, r), r.instanceUid = n++, r.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/, r.registerBreakpoints(), r.init(!0)
            }).prototype.activateADA = function() { this.$slideTrack.find(".slick-active").attr({ "aria-hidden": "false" }).find("a, input, button, select").attr({ tabindex: "0" }) }, t.prototype.addSlide = t.prototype.slickAdd = function(t, n, i) {
                var o = this;
                if ("boolean" == typeof n) i = n, n = null;
                else if (n < 0 || n >= o.slideCount) return !1;
                o.unload(), "number" == typeof n ? 0 === n && 0 === o.$slides.length ? e(t).appendTo(o.$slideTrack) : i ? e(t).insertBefore(o.$slides.eq(n)) : e(t).insertAfter(o.$slides.eq(n)) : !0 === i ? e(t).prependTo(o.$slideTrack) : e(t).appendTo(o.$slideTrack), o.$slides = o.$slideTrack.children(this.options.slide), o.$slideTrack.children(this.options.slide).detach(), o.$slideTrack.append(o.$slides), o.$slides.each((function(t, n) { e(n).attr("data-slick-index", t) })), o.$slidesCache = o.$slides, o.reinit()
            }, t.prototype.animateHeight = function() {
                var e = this;
                if (1 === e.options.slidesToShow && !0 === e.options.adaptiveHeight && !1 === e.options.vertical) {
                    var t = e.$slides.eq(e.currentSlide).outerHeight(!0);
                    e.$list.animate({ height: t }, e.options.speed)
                }
            }, t.prototype.animateSlide = function(t, n) {
                var i = {},
                    o = this;
                o.animateHeight(), !0 === o.options.rtl && !1 === o.options.vertical && (t = -t), !1 === o.transformsEnabled ? !1 === o.options.vertical ? o.$slideTrack.animate({ left: t }, o.options.speed, o.options.easing, n) : o.$slideTrack.animate({ top: t }, o.options.speed, o.options.easing, n) : !1 === o.cssTransitions ? (!0 === o.options.rtl && (o.currentLeft = -o.currentLeft), e({ animStart: o.currentLeft }).animate({ animStart: t }, { duration: o.options.speed, easing: o.options.easing, step: function(e) { e = Math.ceil(e), !1 === o.options.vertical ? (i[o.animType] = "translate(" + e + "px, 0px)", o.$slideTrack.css(i)) : (i[o.animType] = "translate(0px," + e + "px)", o.$slideTrack.css(i)) }, complete: function() { n && n.call() } })) : (o.applyTransition(), t = Math.ceil(t), !1 === o.options.vertical ? i[o.animType] = "translate3d(" + t + "px, 0px, 0px)" : i[o.animType] = "translate3d(0px," + t + "px, 0px)", o.$slideTrack.css(i), n && setTimeout((function() { o.disableTransition(), n.call() }), o.options.speed))
            }, t.prototype.getNavTarget = function() { var t = this.options.asNavFor; return t && null !== t && (t = e(t).not(this.$slider)), t }, t.prototype.asNavFor = function(t) {
                var n = this.getNavTarget();
                null !== n && "object" === s(n) && n.each((function() {
                    var n = e(this).slick("getSlick");
                    n.unslicked || n.slideHandler(t, !0)
                }))
            }, t.prototype.applyTransition = function(e) {
                var t = this,
                    n = {};
                !1 === t.options.fade ? n[t.transitionType] = t.transformType + " " + t.options.speed + "ms " + t.options.cssEase : n[t.transitionType] = "opacity " + t.options.speed + "ms " + t.options.cssEase, !1 === t.options.fade ? t.$slideTrack.css(n) : t.$slides.eq(e).css(n)
            }, t.prototype.autoPlay = function() {
                var e = this;
                e.autoPlayClear(), e.slideCount > e.options.slidesToShow && (e.autoPlayTimer = setInterval(e.autoPlayIterator, e.options.autoplaySpeed))
            }, t.prototype.autoPlayClear = function() { this.autoPlayTimer && clearInterval(this.autoPlayTimer) }, t.prototype.autoPlayIterator = function() {
                var e = this,
                    t = e.currentSlide + e.options.slidesToScroll;
                e.paused || e.interrupted || e.focussed || (!1 === e.options.infinite && (1 === e.direction && e.currentSlide + 1 === e.slideCount - 1 ? e.direction = 0 : 0 === e.direction && (t = e.currentSlide - e.options.slidesToScroll, e.currentSlide - 1 == 0 && (e.direction = 1))), e.slideHandler(t))
            }, t.prototype.buildArrows = function() { var t = this;!0 === t.options.arrows && (t.$prevArrow = e(t.options.prevArrow).addClass("slick-arrow"), t.$nextArrow = e(t.options.nextArrow).addClass("slick-arrow"), t.slideCount > t.options.slidesToShow ? (t.$prevArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"), t.$nextArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"), t.htmlExpr.test(t.options.prevArrow) && t.$prevArrow.prependTo(t.options.appendArrows), t.htmlExpr.test(t.options.nextArrow) && t.$nextArrow.appendTo(t.options.appendArrows), !0 !== t.options.infinite && t.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true")) : t.$prevArrow.add(t.$nextArrow).addClass("slick-hidden").attr({ "aria-disabled": "true", tabindex: "-1" })) }, t.prototype.buildDots = function() {
                var t, n, i = this;
                if (!0 === i.options.dots && i.slideCount > i.options.slidesToShow) {
                    for (i.$slider.addClass("slick-dotted"), n = e("<ul />").addClass(i.options.dotsClass), t = 0; t <= i.getDotCount(); t += 1) n.append(e("<li />").append(i.options.customPaging.call(this, i, t)));
                    i.$dots = n.appendTo(i.options.appendDots), i.$dots.find("li").first().addClass("slick-active")
                }
            }, t.prototype.buildOut = function() {
                var t = this;
                t.$slides = t.$slider.children(t.options.slide + ":not(.slick-cloned)").addClass("slick-slide"), t.slideCount = t.$slides.length, t.$slides.each((function(t, n) { e(n).attr("data-slick-index", t).data("originalStyling", e(n).attr("style") || "") })), t.$slider.addClass("slick-slider"), t.$slideTrack = 0 === t.slideCount ? e('<div class="slick-track"/>').appendTo(t.$slider) : t.$slides.wrapAll('<div class="slick-track"/>').parent(), t.$list = t.$slideTrack.wrap('<div class="slick-list"/>').parent(), t.$slideTrack.css("opacity", 0), !0 !== t.options.centerMode && !0 !== t.options.swipeToSlide || (t.options.slidesToScroll = 1), e("img[data-lazy]", t.$slider).not("[src]").addClass("slick-loading"), t.setupInfinite(), t.buildArrows(), t.buildDots(), t.updateDots(), t.setSlideClasses("number" == typeof t.currentSlide ? t.currentSlide : 0), !0 === t.options.draggable && t.$list.addClass("draggable")
            }, t.prototype.buildRows = function() {
                var e, t, n, i, o, r, s, a = this;
                if (i = document.createDocumentFragment(), r = a.$slider.children(), a.options.rows > 0) {
                    for (s = a.options.slidesPerRow * a.options.rows, o = Math.ceil(r.length / s), e = 0; e < o; e++) {
                        var l = document.createElement("div");
                        for (t = 0; t < a.options.rows; t++) {
                            var c = document.createElement("div");
                            for (n = 0; n < a.options.slidesPerRow; n++) {
                                var u = e * s + (t * a.options.slidesPerRow + n);
                                r.get(u) && c.appendChild(r.get(u))
                            }
                            l.appendChild(c)
                        }
                        i.appendChild(l)
                    }
                    a.$slider.empty().append(i), a.$slider.children().children().children().css({ width: 100 / a.options.slidesPerRow + "%", display: "inline-block" })
                }
            }, t.prototype.checkResponsive = function(t, n) {
                var i, o, r, s = this,
                    a = !1,
                    l = s.$slider.width(),
                    c = window.innerWidth || e(window).width();
                if ("window" === s.respondTo ? r = c : "slider" === s.respondTo ? r = l : "min" === s.respondTo && (r = Math.min(c, l)), s.options.responsive && s.options.responsive.length && null !== s.options.responsive) {
                    for (i in o = null, s.breakpoints) s.breakpoints.hasOwnProperty(i) && (!1 === s.originalSettings.mobileFirst ? r < s.breakpoints[i] && (o = s.breakpoints[i]) : r > s.breakpoints[i] && (o = s.breakpoints[i]));
                    null !== o ? null !== s.activeBreakpoint ? (o !== s.activeBreakpoint || n) && (s.activeBreakpoint = o, "unslick" === s.breakpointSettings[o] ? s.unslick(o) : (s.options = e.extend({}, s.originalSettings, s.breakpointSettings[o]), !0 === t && (s.currentSlide = s.options.initialSlide), s.refresh(t)), a = o) : (s.activeBreakpoint = o, "unslick" === s.breakpointSettings[o] ? s.unslick(o) : (s.options = e.extend({}, s.originalSettings, s.breakpointSettings[o]), !0 === t && (s.currentSlide = s.options.initialSlide), s.refresh(t)), a = o) : null !== s.activeBreakpoint && (s.activeBreakpoint = null, s.options = s.originalSettings, !0 === t && (s.currentSlide = s.options.initialSlide), s.refresh(t), a = o), t || !1 === a || s.$slider.trigger("breakpoint", [s, a])
                }
            }, t.prototype.changeSlide = function(t, n) {
                var i, o, r = this,
                    s = e(t.currentTarget);
                switch (s.is("a") && t.preventDefault(), s.is("li") || (s = s.closest("li")), i = r.slideCount % r.options.slidesToScroll != 0 ? 0 : (r.slideCount - r.currentSlide) % r.options.slidesToScroll, t.data.message) {
                    case "previous":
                        o = 0 === i ? r.options.slidesToScroll : r.options.slidesToShow - i, r.slideCount > r.options.slidesToShow && r.slideHandler(r.currentSlide - o, !1, n);
                        break;
                    case "next":
                        o = 0 === i ? r.options.slidesToScroll : i, r.slideCount > r.options.slidesToShow && r.slideHandler(r.currentSlide + o, !1, n);
                        break;
                    case "index":
                        var a = 0 === t.data.index ? 0 : t.data.index || s.index() * r.options.slidesToScroll;
                        r.slideHandler(r.checkNavigable(a), !1, n), s.children().trigger("focus");
                        break;
                    default:
                        return
                }
            }, t.prototype.checkNavigable = function(e) {
                var t, n;
                if (n = 0, e > (t = this.getNavigableIndexes())[t.length - 1]) e = t[t.length - 1];
                else
                    for (var i in t) {
                        if (e < t[i]) { e = n; break }
                        n = t[i]
                    }
                return e
            }, t.prototype.cleanUpEvents = function() {
                var t = this;
                t.options.dots && null !== t.$dots && (e("li", t.$dots).off("click.slick", t.changeSlide).off("mouseenter.slick", e.proxy(t.interrupt, t, !0)).off("mouseleave.slick", e.proxy(t.interrupt, t, !1)), !0 === t.options.accessibility && t.$dots.off("keydown.slick", t.keyHandler)), t.$slider.off("focus.slick blur.slick"), !0 === t.options.arrows && t.slideCount > t.options.slidesToShow && (t.$prevArrow && t.$prevArrow.off("click.slick", t.changeSlide), t.$nextArrow && t.$nextArrow.off("click.slick", t.changeSlide), !0 === t.options.accessibility && (t.$prevArrow && t.$prevArrow.off("keydown.slick", t.keyHandler), t.$nextArrow && t.$nextArrow.off("keydown.slick", t.keyHandler))), t.$list.off("touchstart.slick mousedown.slick", t.swipeHandler), t.$list.off("touchmove.slick mousemove.slick", t.swipeHandler), t.$list.off("touchend.slick mouseup.slick", t.swipeHandler), t.$list.off("touchcancel.slick mouseleave.slick", t.swipeHandler), t.$list.off("click.slick", t.clickHandler), e(document).off(t.visibilityChange, t.visibility), t.cleanUpSlideEvents(), !0 === t.options.accessibility && t.$list.off("keydown.slick", t.keyHandler), !0 === t.options.focusOnSelect && e(t.$slideTrack).children().off("click.slick", t.selectHandler), e(window).off("orientationchange.slick.slick-" + t.instanceUid, t.orientationChange), e(window).off("resize.slick.slick-" + t.instanceUid, t.resize), e("[draggable!=true]", t.$slideTrack).off("dragstart", t.preventDefault), e(window).off("load.slick.slick-" + t.instanceUid, t.setPosition)
            }, t.prototype.cleanUpSlideEvents = function() {
                var t = this;
                t.$list.off("mouseenter.slick", e.proxy(t.interrupt, t, !0)), t.$list.off("mouseleave.slick", e.proxy(t.interrupt, t, !1))
            }, t.prototype.cleanUpRows = function() {
                var e, t = this;
                t.options.rows > 0 && ((e = t.$slides.children().children()).removeAttr("style"), t.$slider.empty().append(e))
            }, t.prototype.clickHandler = function(e) {!1 === this.shouldClick && (e.stopImmediatePropagation(), e.stopPropagation(), e.preventDefault()) }, t.prototype.destroy = function(t) {
                var n = this;
                n.autoPlayClear(), n.touchObject = {}, n.cleanUpEvents(), e(".slick-cloned", n.$slider).detach(), n.$dots && n.$dots.remove(), n.$prevArrow && n.$prevArrow.length && (n.$prevArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), n.htmlExpr.test(n.options.prevArrow) && n.$prevArrow.remove()), n.$nextArrow && n.$nextArrow.length && (n.$nextArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), n.htmlExpr.test(n.options.nextArrow) && n.$nextArrow.remove()), n.$slides && (n.$slides.removeClass("slick-slide slick-active slick-center slick-visible slick-current").removeAttr("aria-hidden").removeAttr("data-slick-index").each((function() { e(this).attr("style", e(this).data("originalStyling")) })), n.$slideTrack.children(this.options.slide).detach(), n.$slideTrack.detach(), n.$list.detach(), n.$slider.append(n.$slides)), n.cleanUpRows(), n.$slider.removeClass("slick-slider"), n.$slider.removeClass("slick-initialized"), n.$slider.removeClass("slick-dotted"), n.unslicked = !0, t || n.$slider.trigger("destroy", [n])
            }, t.prototype.disableTransition = function(e) {
                var t = this,
                    n = {};
                n[t.transitionType] = "", !1 === t.options.fade ? t.$slideTrack.css(n) : t.$slides.eq(e).css(n)
            }, t.prototype.fadeSlide = function(e, t) { var n = this;!1 === n.cssTransitions ? (n.$slides.eq(e).css({ zIndex: n.options.zIndex }), n.$slides.eq(e).animate({ opacity: 1 }, n.options.speed, n.options.easing, t)) : (n.applyTransition(e), n.$slides.eq(e).css({ opacity: 1, zIndex: n.options.zIndex }), t && setTimeout((function() { n.disableTransition(e), t.call() }), n.options.speed)) }, t.prototype.fadeSlideOut = function(e) { var t = this;!1 === t.cssTransitions ? t.$slides.eq(e).animate({ opacity: 0, zIndex: t.options.zIndex - 2 }, t.options.speed, t.options.easing) : (t.applyTransition(e), t.$slides.eq(e).css({ opacity: 0, zIndex: t.options.zIndex - 2 })) }, t.prototype.filterSlides = t.prototype.slickFilter = function(e) {
                var t = this;
                null !== e && (t.$slidesCache = t.$slides, t.unload(), t.$slideTrack.children(this.options.slide).detach(), t.$slidesCache.filter(e).appendTo(t.$slideTrack), t.reinit())
            }, t.prototype.focusHandler = function() {
                var t = this;
                t.$slider.off("focus.slick blur.slick").on("focus.slick blur.slick", "*", (function(n) {
                    n.stopImmediatePropagation();
                    var i = e(this);
                    setTimeout((function() { t.options.pauseOnFocus && (t.focussed = i.is(":focus"), t.autoPlay()) }), 0)
                }))
            }, t.prototype.getCurrent = t.prototype.slickCurrentSlide = function() { return this.currentSlide }, t.prototype.getDotCount = function() {
                var e = this,
                    t = 0,
                    n = 0,
                    i = 0;
                if (!0 === e.options.infinite)
                    if (e.slideCount <= e.options.slidesToShow) ++i;
                    else
                        for (; t < e.slideCount;) ++i, t = n + e.options.slidesToScroll, n += e.options.slidesToScroll <= e.options.slidesToShow ? e.options.slidesToScroll : e.options.slidesToShow;
                else if (!0 === e.options.centerMode) i = e.slideCount;
                else if (e.options.asNavFor)
                    for (; t < e.slideCount;) ++i, t = n + e.options.slidesToScroll, n += e.options.slidesToScroll <= e.options.slidesToShow ? e.options.slidesToScroll : e.options.slidesToShow;
                else i = 1 + Math.ceil((e.slideCount - e.options.slidesToShow) / e.options.slidesToScroll);
                return i - 1
            }, t.prototype.getLeft = function(e) {
                var t, n, i, o, r = this,
                    s = 0;
                return r.slideOffset = 0, n = r.$slides.first().outerHeight(!0), !0 === r.options.infinite ? (r.slideCount > r.options.slidesToShow && (r.slideOffset = r.slideWidth * r.options.slidesToShow * -1, o = -1, !0 === r.options.vertical && !0 === r.options.centerMode && (2 === r.options.slidesToShow ? o = -1.5 : 1 === r.options.slidesToShow && (o = -2)), s = n * r.options.slidesToShow * o), r.slideCount % r.options.slidesToScroll != 0 && e + r.options.slidesToScroll > r.slideCount && r.slideCount > r.options.slidesToShow && (e > r.slideCount ? (r.slideOffset = (r.options.slidesToShow - (e - r.slideCount)) * r.slideWidth * -1, s = (r.options.slidesToShow - (e - r.slideCount)) * n * -1) : (r.slideOffset = r.slideCount % r.options.slidesToScroll * r.slideWidth * -1, s = r.slideCount % r.options.slidesToScroll * n * -1))) : e + r.options.slidesToShow > r.slideCount && (r.slideOffset = (e + r.options.slidesToShow - r.slideCount) * r.slideWidth, s = (e + r.options.slidesToShow - r.slideCount) * n), r.slideCount <= r.options.slidesToShow && (r.slideOffset = 0, s = 0), !0 === r.options.centerMode && r.slideCount <= r.options.slidesToShow ? r.slideOffset = r.slideWidth * Math.floor(r.options.slidesToShow) / 2 - r.slideWidth * r.slideCount / 2 : !0 === r.options.centerMode && !0 === r.options.infinite ? r.slideOffset += r.slideWidth * Math.floor(r.options.slidesToShow / 2) - r.slideWidth : !0 === r.options.centerMode && (r.slideOffset = 0, r.slideOffset += r.slideWidth * Math.floor(r.options.slidesToShow / 2)), t = !1 === r.options.vertical ? e * r.slideWidth * -1 + r.slideOffset : e * n * -1 + s, !0 === r.options.variableWidth && (i = r.slideCount <= r.options.slidesToShow || !1 === r.options.infinite ? r.$slideTrack.children(".slick-slide").eq(e) : r.$slideTrack.children(".slick-slide").eq(e + r.options.slidesToShow), t = !0 === r.options.rtl ? i[0] ? -1 * (r.$slideTrack.width() - i[0].offsetLeft - i.width()) : 0 : i[0] ? -1 * i[0].offsetLeft : 0, !0 === r.options.centerMode && (i = r.slideCount <= r.options.slidesToShow || !1 === r.options.infinite ? r.$slideTrack.children(".slick-slide").eq(e) : r.$slideTrack.children(".slick-slide").eq(e + r.options.slidesToShow + 1), t = !0 === r.options.rtl ? i[0] ? -1 * (r.$slideTrack.width() - i[0].offsetLeft - i.width()) : 0 : i[0] ? -1 * i[0].offsetLeft : 0, t += (r.$list.width() - i.outerWidth()) / 2)), t
            }, t.prototype.getOption = t.prototype.slickGetOption = function(e) { return this.options[e] }, t.prototype.getNavigableIndexes = function() {
                var e, t = this,
                    n = 0,
                    i = 0,
                    o = [];
                for (!1 === t.options.infinite ? e = t.slideCount : (n = -1 * t.options.slidesToScroll, i = -1 * t.options.slidesToScroll, e = 2 * t.slideCount); n < e;) o.push(n), n = i + t.options.slidesToScroll, i += t.options.slidesToScroll <= t.options.slidesToShow ? t.options.slidesToScroll : t.options.slidesToShow;
                return o
            }, t.prototype.getSlick = function() { return this }, t.prototype.getSlideCount = function() { var t, n, i = this; return n = !0 === i.options.centerMode ? i.slideWidth * Math.floor(i.options.slidesToShow / 2) : 0, !0 === i.options.swipeToSlide ? (i.$slideTrack.find(".slick-slide").each((function(o, r) { if (r.offsetLeft - n + e(r).outerWidth() / 2 > -1 * i.swipeLeft) return t = r, !1 })), Math.abs(e(t).attr("data-slick-index") - i.currentSlide) || 1) : i.options.slidesToScroll }, t.prototype.goTo = t.prototype.slickGoTo = function(e, t) { this.changeSlide({ data: { message: "index", index: parseInt(e) } }, t) }, t.prototype.init = function(t) {
                var n = this;
                e(n.$slider).hasClass("slick-initialized") || (e(n.$slider).addClass("slick-initialized"), n.buildRows(), n.buildOut(), n.setProps(), n.startLoad(), n.loadSlider(), n.initializeEvents(), n.updateArrows(), n.updateDots(), n.checkResponsive(!0), n.focusHandler()), t && n.$slider.trigger("init", [n]), !0 === n.options.accessibility && n.initADA(), n.options.autoplay && (n.paused = !1, n.autoPlay())
            }, t.prototype.initADA = function() {
                var t = this,
                    n = Math.ceil(t.slideCount / t.options.slidesToShow),
                    i = t.getNavigableIndexes().filter((function(e) { return e >= 0 && e < t.slideCount }));
                t.$slides.add(t.$slideTrack.find(".slick-cloned")).attr({ "aria-hidden": "true", tabindex: "-1" }).find("a, input, button, select").attr({ tabindex: "-1" }), null !== t.$dots && (t.$slides.not(t.$slideTrack.find(".slick-cloned")).each((function(n) {
                    var o = i.indexOf(n);
                    if (e(this).attr({ role: "tabpanel", id: "slick-slide" + t.instanceUid + n, tabindex: -1 }), -1 !== o) {
                        var r = "slick-slide-control" + t.instanceUid + o;
                        e("#" + r).length && e(this).attr({ "aria-describedby": r })
                    }
                })), t.$dots.attr("role", "tablist").find("li").each((function(o) {
                    var r = i[o];
                    e(this).attr({ role: "presentation" }), e(this).find("button").first().attr({ role: "tab", id: "slick-slide-control" + t.instanceUid + o, "aria-controls": "slick-slide" + t.instanceUid + r, "aria-label": o + 1 + " of " + n, "aria-selected": null, tabindex: "-1" })
                })).eq(t.currentSlide).find("button").attr({ "aria-selected": "true", tabindex: "0" }).end());
                for (var o = t.currentSlide, r = o + t.options.slidesToShow; o < r; o++) t.options.focusOnChange ? t.$slides.eq(o).attr({ tabindex: "0" }) : t.$slides.eq(o).removeAttr("tabindex");
                t.activateADA()
            }, t.prototype.initArrowEvents = function() { var e = this;!0 === e.options.arrows && e.slideCount > e.options.slidesToShow && (e.$prevArrow.off("click.slick").on("click.slick", { message: "previous" }, e.changeSlide), e.$nextArrow.off("click.slick").on("click.slick", { message: "next" }, e.changeSlide), !0 === e.options.accessibility && (e.$prevArrow.on("keydown.slick", e.keyHandler), e.$nextArrow.on("keydown.slick", e.keyHandler))) }, t.prototype.initDotEvents = function() { var t = this;!0 === t.options.dots && t.slideCount > t.options.slidesToShow && (e("li", t.$dots).on("click.slick", { message: "index" }, t.changeSlide), !0 === t.options.accessibility && t.$dots.on("keydown.slick", t.keyHandler)), !0 === t.options.dots && !0 === t.options.pauseOnDotsHover && t.slideCount > t.options.slidesToShow && e("li", t.$dots).on("mouseenter.slick", e.proxy(t.interrupt, t, !0)).on("mouseleave.slick", e.proxy(t.interrupt, t, !1)) }, t.prototype.initSlideEvents = function() {
                var t = this;
                t.options.pauseOnHover && (t.$list.on("mouseenter.slick", e.proxy(t.interrupt, t, !0)), t.$list.on("mouseleave.slick", e.proxy(t.interrupt, t, !1)))
            }, t.prototype.initializeEvents = function() {
                var t = this;
                t.initArrowEvents(), t.initDotEvents(), t.initSlideEvents(), t.$list.on("touchstart.slick mousedown.slick", { action: "start" }, t.swipeHandler), t.$list.on("touchmove.slick mousemove.slick", { action: "move" }, t.swipeHandler), t.$list.on("touchend.slick mouseup.slick", { action: "end" }, t.swipeHandler), t.$list.on("touchcancel.slick mouseleave.slick", { action: "end" }, t.swipeHandler), t.$list.on("click.slick", t.clickHandler), e(document).on(t.visibilityChange, e.proxy(t.visibility, t)), !0 === t.options.accessibility && t.$list.on("keydown.slick", t.keyHandler), !0 === t.options.focusOnSelect && e(t.$slideTrack).children().on("click.slick", t.selectHandler), e(window).on("orientationchange.slick.slick-" + t.instanceUid, e.proxy(t.orientationChange, t)), e(window).on("resize.slick.slick-" + t.instanceUid, e.proxy(t.resize, t)), e("[draggable!=true]", t.$slideTrack).on("dragstart", t.preventDefault), e(window).on("load.slick.slick-" + t.instanceUid, t.setPosition), e(t.setPosition)
            }, t.prototype.initUI = function() { var e = this;!0 === e.options.arrows && e.slideCount > e.options.slidesToShow && (e.$prevArrow.show(), e.$nextArrow.show()), !0 === e.options.dots && e.slideCount > e.options.slidesToShow && e.$dots.show() }, t.prototype.keyHandler = function(e) {
                var t = this;
                e.target.tagName.match("TEXTAREA|INPUT|SELECT") || (37 === e.keyCode && !0 === t.options.accessibility ? t.changeSlide({ data: { message: !0 === t.options.rtl ? "next" : "previous" } }) : 39 === e.keyCode && !0 === t.options.accessibility && t.changeSlide({ data: { message: !0 === t.options.rtl ? "previous" : "next" } }))
            }, t.prototype.lazyLoad = function() {
                var t, n, i, o = this;

                function r(t) {
                    e("img[data-lazy]", t).each((function() {
                        var t = e(this),
                            n = e(this).attr("data-lazy"),
                            i = e(this).attr("data-srcset"),
                            r = e(this).attr("data-sizes") || o.$slider.attr("data-sizes"),
                            s = document.createElement("img");
                        s.onload = function() { t.animate({ opacity: 0 }, 100, (function() { i && (t.attr("srcset", i), r && t.attr("sizes", r)), t.attr("src", n).animate({ opacity: 1 }, 200, (function() { t.removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading") })), o.$slider.trigger("lazyLoaded", [o, t, n]) })) }, s.onerror = function() { t.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"), o.$slider.trigger("lazyLoadError", [o, t, n]) }, s.src = n
                    }))
                }
                if (!0 === o.options.centerMode ? !0 === o.options.infinite ? i = (n = o.currentSlide + (o.options.slidesToShow / 2 + 1)) + o.options.slidesToShow + 2 : (n = Math.max(0, o.currentSlide - (o.options.slidesToShow / 2 + 1)), i = o.options.slidesToShow / 2 + 1 + 2 + o.currentSlide) : (n = o.options.infinite ? o.options.slidesToShow + o.currentSlide : o.currentSlide, i = Math.ceil(n + o.options.slidesToShow), !0 === o.options.fade && (n > 0 && n--, i <= o.slideCount && i++)), t = o.$slider.find(".slick-slide").slice(n, i), "anticipated" === o.options.lazyLoad)
                    for (var s = n - 1, a = i, l = o.$slider.find(".slick-slide"), c = 0; c < o.options.slidesToScroll; c++) s < 0 && (s = o.slideCount - 1), t = (t = t.add(l.eq(s))).add(l.eq(a)), s--, a++;
                r(t), o.slideCount <= o.options.slidesToShow ? r(o.$slider.find(".slick-slide")) : o.currentSlide >= o.slideCount - o.options.slidesToShow ? r(o.$slider.find(".slick-cloned").slice(0, o.options.slidesToShow)) : 0 === o.currentSlide && r(o.$slider.find(".slick-cloned").slice(-1 * o.options.slidesToShow))
            }, t.prototype.loadSlider = function() {
                var e = this;
                e.setPosition(), e.$slideTrack.css({ opacity: 1 }), e.$slider.removeClass("slick-loading"), e.initUI(), "progressive" === e.options.lazyLoad && e.progressiveLazyLoad()
            }, t.prototype.next = t.prototype.slickNext = function() { this.changeSlide({ data: { message: "next" } }) }, t.prototype.orientationChange = function() { this.checkResponsive(), this.setPosition() }, t.prototype.pause = t.prototype.slickPause = function() { this.autoPlayClear(), this.paused = !0 }, t.prototype.play = t.prototype.slickPlay = function() {
                var e = this;
                e.autoPlay(), e.options.autoplay = !0, e.paused = !1, e.focussed = !1, e.interrupted = !1
            }, t.prototype.postSlide = function(t) {
                var n = this;
                n.unslicked || (n.$slider.trigger("afterChange", [n, t]), n.animating = !1, n.slideCount > n.options.slidesToShow && n.setPosition(), n.swipeLeft = null, n.options.autoplay && n.autoPlay(), !0 === n.options.accessibility && (n.initADA(), n.options.focusOnChange && e(n.$slides.get(n.currentSlide)).attr("tabindex", 0).focus()))
            }, t.prototype.prev = t.prototype.slickPrev = function() { this.changeSlide({ data: { message: "previous" } }) }, t.prototype.preventDefault = function(e) { e.preventDefault() }, t.prototype.progressiveLazyLoad = function(t) {
                t = t || 1;
                var n, i, o, r, s, a = this,
                    l = e("img[data-lazy]", a.$slider);
                l.length ? (n = l.first(), i = n.attr("data-lazy"), o = n.attr("data-srcset"), r = n.attr("data-sizes") || a.$slider.attr("data-sizes"), (s = document.createElement("img")).onload = function() { o && (n.attr("srcset", o), r && n.attr("sizes", r)), n.attr("src", i).removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading"), !0 === a.options.adaptiveHeight && a.setPosition(), a.$slider.trigger("lazyLoaded", [a, n, i]), a.progressiveLazyLoad() }, s.onerror = function() { t < 3 ? setTimeout((function() { a.progressiveLazyLoad(t + 1) }), 500) : (n.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"), a.$slider.trigger("lazyLoadError", [a, n, i]), a.progressiveLazyLoad()) }, s.src = i) : a.$slider.trigger("allImagesLoaded", [a])
            }, t.prototype.refresh = function(t) {
                var n, i, o = this;
                i = o.slideCount - o.options.slidesToShow, !o.options.infinite && o.currentSlide > i && (o.currentSlide = i), o.slideCount <= o.options.slidesToShow && (o.currentSlide = 0), n = o.currentSlide, o.destroy(!0), e.extend(o, o.initials, { currentSlide: n }), o.init(), t || o.changeSlide({ data: { message: "index", index: n } }, !1)
            }, t.prototype.registerBreakpoints = function() {
                var t, n, i, o = this,
                    r = o.options.responsive || null;
                if ("array" === e.type(r) && r.length) {
                    for (t in o.respondTo = o.options.respondTo || "window", r)
                        if (i = o.breakpoints.length - 1, r.hasOwnProperty(t)) {
                            for (n = r[t].breakpoint; i >= 0;) o.breakpoints[i] && o.breakpoints[i] === n && o.breakpoints.splice(i, 1), i--;
                            o.breakpoints.push(n), o.breakpointSettings[n] = r[t].settings
                        }
                    o.breakpoints.sort((function(e, t) { return o.options.mobileFirst ? e - t : t - e }))
                }
            }, t.prototype.reinit = function() {
                var t = this;
                t.$slides = t.$slideTrack.children(t.options.slide).addClass("slick-slide"), t.slideCount = t.$slides.length, t.currentSlide >= t.slideCount && 0 !== t.currentSlide && (t.currentSlide = t.currentSlide - t.options.slidesToScroll), t.slideCount <= t.options.slidesToShow && (t.currentSlide = 0), t.registerBreakpoints(), t.setProps(), t.setupInfinite(), t.buildArrows(), t.updateArrows(), t.initArrowEvents(), t.buildDots(), t.updateDots(), t.initDotEvents(), t.cleanUpSlideEvents(), t.initSlideEvents(), t.checkResponsive(!1, !0), !0 === t.options.focusOnSelect && e(t.$slideTrack).children().on("click.slick", t.selectHandler), t.setSlideClasses("number" == typeof t.currentSlide ? t.currentSlide : 0), t.setPosition(), t.focusHandler(), t.paused = !t.options.autoplay, t.autoPlay(), t.$slider.trigger("reInit", [t])
            }, t.prototype.resize = function() {
                var t = this;
                e(window).width() !== t.windowWidth && (clearTimeout(t.windowDelay), t.windowDelay = window.setTimeout((function() { t.windowWidth = e(window).width(), t.checkResponsive(), t.unslicked || t.setPosition() }), 50))
            }, t.prototype.removeSlide = t.prototype.slickRemove = function(e, t, n) {
                var i = this;
                if (e = "boolean" == typeof e ? !0 === (t = e) ? 0 : i.slideCount - 1 : !0 === t ? --e : e, i.slideCount < 1 || e < 0 || e > i.slideCount - 1) return !1;
                i.unload(), !0 === n ? i.$slideTrack.children().remove() : i.$slideTrack.children(this.options.slide).eq(e).remove(), i.$slides = i.$slideTrack.children(this.options.slide), i.$slideTrack.children(this.options.slide).detach(), i.$slideTrack.append(i.$slides), i.$slidesCache = i.$slides, i.reinit()
            }, t.prototype.setCSS = function(e) {
                var t, n, i = this,
                    o = {};
                !0 === i.options.rtl && (e = -e), t = "left" == i.positionProp ? Math.ceil(e) + "px" : "0px", n = "top" == i.positionProp ? Math.ceil(e) + "px" : "0px", o[i.positionProp] = e, !1 === i.transformsEnabled ? i.$slideTrack.css(o) : (o = {}, !1 === i.cssTransitions ? (o[i.animType] = "translate(" + t + ", " + n + ")", i.$slideTrack.css(o)) : (o[i.animType] = "translate3d(" + t + ", " + n + ", 0px)", i.$slideTrack.css(o)))
            }, t.prototype.setDimensions = function() { var e = this;!1 === e.options.vertical ? !0 === e.options.centerMode && e.$list.css({ padding: "0px " + e.options.centerPadding }) : (e.$list.height(e.$slides.first().outerHeight(!0) * e.options.slidesToShow), !0 === e.options.centerMode && e.$list.css({ padding: e.options.centerPadding + " 0px" })), e.listWidth = e.$list.width(), e.listHeight = e.$list.height(), !1 === e.options.vertical && !1 === e.options.variableWidth ? (e.slideWidth = Math.ceil(e.listWidth / e.options.slidesToShow), e.$slideTrack.width(Math.ceil(e.slideWidth * e.$slideTrack.children(".slick-slide").length))) : !0 === e.options.variableWidth ? e.$slideTrack.width(5e3 * e.slideCount) : (e.slideWidth = Math.ceil(e.listWidth), e.$slideTrack.height(Math.ceil(e.$slides.first().outerHeight(!0) * e.$slideTrack.children(".slick-slide").length))); var t = e.$slides.first().outerWidth(!0) - e.$slides.first().width();!1 === e.options.variableWidth && e.$slideTrack.children(".slick-slide").width(e.slideWidth - t) }, t.prototype.setFade = function() {
                var t, n = this;
                n.$slides.each((function(i, o) { t = n.slideWidth * i * -1, !0 === n.options.rtl ? e(o).css({ position: "relative", right: t, top: 0, zIndex: n.options.zIndex - 2, opacity: 0 }) : e(o).css({ position: "relative", left: t, top: 0, zIndex: n.options.zIndex - 2, opacity: 0 }) })), n.$slides.eq(n.currentSlide).css({ zIndex: n.options.zIndex - 1, opacity: 1 })
            }, t.prototype.setHeight = function() {
                var e = this;
                if (1 === e.options.slidesToShow && !0 === e.options.adaptiveHeight && !1 === e.options.vertical) {
                    var t = e.$slides.eq(e.currentSlide).outerHeight(!0);
                    e.$list.css("height", t)
                }
            }, t.prototype.setOption = t.prototype.slickSetOption = function() {
                var t, n, i, o, r, s = this,
                    a = !1;
                if ("object" === e.type(arguments[0]) ? (i = arguments[0], a = arguments[1], r = "multiple") : "string" === e.type(arguments[0]) && (i = arguments[0], o = arguments[1], a = arguments[2], "responsive" === arguments[0] && "array" === e.type(arguments[1]) ? r = "responsive" : void 0 !== arguments[1] && (r = "single")), "single" === r) s.options[i] = o;
                else if ("multiple" === r) e.each(i, (function(e, t) { s.options[e] = t }));
                else if ("responsive" === r)
                    for (n in o)
                        if ("array" !== e.type(s.options.responsive)) s.options.responsive = [o[n]];
                        else {
                            for (t = s.options.responsive.length - 1; t >= 0;) s.options.responsive[t].breakpoint === o[n].breakpoint && s.options.responsive.splice(t, 1), t--;
                            s.options.responsive.push(o[n])
                        }
                a && (s.unload(), s.reinit())
            }, t.prototype.setPosition = function() {
                var e = this;
                e.setDimensions(), e.setHeight(), !1 === e.options.fade ? e.setCSS(e.getLeft(e.currentSlide)) : e.setFade(), e.$slider.trigger("setPosition", [e])
            }, t.prototype.setProps = function() {
                var e = this,
                    t = document.body.style;
                e.positionProp = !0 === e.options.vertical ? "top" : "left", "top" === e.positionProp ? e.$slider.addClass("slick-vertical") : e.$slider.removeClass("slick-vertical"), void 0 === t.WebkitTransition && void 0 === t.MozTransition && void 0 === t.msTransition || !0 === e.options.useCSS && (e.cssTransitions = !0), e.options.fade && ("number" == typeof e.options.zIndex ? e.options.zIndex < 3 && (e.options.zIndex = 3) : e.options.zIndex = e.defaults.zIndex), void 0 !== t.OTransform && (e.animType = "OTransform", e.transformType = "-o-transform", e.transitionType = "OTransition", void 0 === t.perspectiveProperty && void 0 === t.webkitPerspective && (e.animType = !1)), void 0 !== t.MozTransform && (e.animType = "MozTransform", e.transformType = "-moz-transform", e.transitionType = "MozTransition", void 0 === t.perspectiveProperty && void 0 === t.MozPerspective && (e.animType = !1)), void 0 !== t.webkitTransform && (e.animType = "webkitTransform", e.transformType = "-webkit-transform", e.transitionType = "webkitTransition", void 0 === t.perspectiveProperty && void 0 === t.webkitPerspective && (e.animType = !1)), void 0 !== t.msTransform && (e.animType = "msTransform", e.transformType = "-ms-transform", e.transitionType = "msTransition", void 0 === t.msTransform && (e.animType = !1)), void 0 !== t.transform && !1 !== e.animType && (e.animType = "transform", e.transformType = "transform", e.transitionType = "transition"), e.transformsEnabled = e.options.useTransform && null !== e.animType && !1 !== e.animType
            }, t.prototype.setSlideClasses = function(e) {
                var t, n, i, o, r = this;
                if (n = r.$slider.find(".slick-slide").removeClass("slick-active slick-center slick-current").attr("aria-hidden", "true"), r.$slides.eq(e).addClass("slick-current"), !0 === r.options.centerMode) {
                    var s = r.options.slidesToShow % 2 == 0 ? 1 : 0;
                    t = Math.floor(r.options.slidesToShow / 2), !0 === r.options.infinite && (e >= t && e <= r.slideCount - 1 - t ? r.$slides.slice(e - t + s, e + t + 1).addClass("slick-active").attr("aria-hidden", "false") : (i = r.options.slidesToShow + e, n.slice(i - t + 1 + s, i + t + 2).addClass("slick-active").attr("aria-hidden", "false")), 0 === e ? n.eq(n.length - 1 - r.options.slidesToShow).addClass("slick-center") : e === r.slideCount - 1 && n.eq(r.options.slidesToShow).addClass("slick-center")), r.$slides.eq(e).addClass("slick-center")
                } else e >= 0 && e <= r.slideCount - r.options.slidesToShow ? r.$slides.slice(e, e + r.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false") : n.length <= r.options.slidesToShow ? n.addClass("slick-active").attr("aria-hidden", "false") : (o = r.slideCount % r.options.slidesToShow, i = !0 === r.options.infinite ? r.options.slidesToShow + e : e, r.options.slidesToShow == r.options.slidesToScroll && r.slideCount - e < r.options.slidesToShow ? n.slice(i - (r.options.slidesToShow - o), i + o).addClass("slick-active").attr("aria-hidden", "false") : n.slice(i, i + r.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false"));
                "ondemand" !== r.options.lazyLoad && "anticipated" !== r.options.lazyLoad || r.lazyLoad()
            }, t.prototype.setupInfinite = function() {
                var t, n, i, o = this;
                if (!0 === o.options.fade && (o.options.centerMode = !1), !0 === o.options.infinite && !1 === o.options.fade && (n = null, o.slideCount > o.options.slidesToShow)) {
                    for (i = !0 === o.options.centerMode ? o.options.slidesToShow + 1 : o.options.slidesToShow, t = o.slideCount; t > o.slideCount - i; t -= 1) n = t - 1, e(o.$slides[n]).clone(!0).attr("id", "").attr("data-slick-index", n - o.slideCount).prependTo(o.$slideTrack).addClass("slick-cloned");
                    for (t = 0; t < i + o.slideCount; t += 1) n = t, e(o.$slides[n]).clone(!0).attr("id", "").attr("data-slick-index", n + o.slideCount).appendTo(o.$slideTrack).addClass("slick-cloned");
                    o.$slideTrack.find(".slick-cloned").find("[id]").each((function() { e(this).attr("id", "") }))
                }
            }, t.prototype.interrupt = function(e) { e || this.autoPlay(), this.interrupted = e }, t.prototype.selectHandler = function(t) {
                var n = this,
                    i = e(t.target).is(".slick-slide") ? e(t.target) : e(t.target).parents(".slick-slide"),
                    o = parseInt(i.attr("data-slick-index"));
                o || (o = 0), n.slideCount <= n.options.slidesToShow ? n.slideHandler(o, !1, !0) : n.slideHandler(o)
            }, t.prototype.slideHandler = function(e, t, n) {
                var i, o, r, s, a, l, c = this;
                if (t = t || !1, !(!0 === c.animating && !0 === c.options.waitForAnimate || !0 === c.options.fade && c.currentSlide === e))
                    if (!1 === t && c.asNavFor(e), i = e, a = c.getLeft(i), s = c.getLeft(c.currentSlide), c.currentLeft = null === c.swipeLeft ? s : c.swipeLeft, !1 === c.options.infinite && !1 === c.options.centerMode && (e < 0 || e > c.getDotCount() * c.options.slidesToScroll)) !1 === c.options.fade && (i = c.currentSlide, !0 !== n && c.slideCount > c.options.slidesToShow ? c.animateSlide(s, (function() { c.postSlide(i) })) : c.postSlide(i));
                    else if (!1 === c.options.infinite && !0 === c.options.centerMode && (e < 0 || e > c.slideCount - c.options.slidesToScroll)) !1 === c.options.fade && (i = c.currentSlide, !0 !== n && c.slideCount > c.options.slidesToShow ? c.animateSlide(s, (function() { c.postSlide(i) })) : c.postSlide(i));
                else { if (c.options.autoplay && clearInterval(c.autoPlayTimer), o = i < 0 ? c.slideCount % c.options.slidesToScroll != 0 ? c.slideCount - c.slideCount % c.options.slidesToScroll : c.slideCount + i : i >= c.slideCount ? c.slideCount % c.options.slidesToScroll != 0 ? 0 : i - c.slideCount : i, c.animating = !0, c.$slider.trigger("beforeChange", [c, c.currentSlide, o]), r = c.currentSlide, c.currentSlide = o, c.setSlideClasses(c.currentSlide), c.options.asNavFor && (l = (l = c.getNavTarget()).slick("getSlick")).slideCount <= l.options.slidesToShow && l.setSlideClasses(c.currentSlide), c.updateDots(), c.updateArrows(), !0 === c.options.fade) return !0 !== n ? (c.fadeSlideOut(r), c.fadeSlide(o, (function() { c.postSlide(o) }))) : c.postSlide(o), void c.animateHeight();!0 !== n && c.slideCount > c.options.slidesToShow ? c.animateSlide(a, (function() { c.postSlide(o) })) : c.postSlide(o) }
            }, t.prototype.startLoad = function() { var e = this;!0 === e.options.arrows && e.slideCount > e.options.slidesToShow && (e.$prevArrow.hide(), e.$nextArrow.hide()), !0 === e.options.dots && e.slideCount > e.options.slidesToShow && e.$dots.hide(), e.$slider.addClass("slick-loading") }, t.prototype.swipeDirection = function() { var e, t, n, i, o = this; return e = o.touchObject.startX - o.touchObject.curX, t = o.touchObject.startY - o.touchObject.curY, n = Math.atan2(t, e), (i = Math.round(180 * n / Math.PI)) < 0 && (i = 360 - Math.abs(i)), i <= 45 && i >= 0 || i <= 360 && i >= 315 ? !1 === o.options.rtl ? "left" : "right" : i >= 135 && i <= 225 ? !1 === o.options.rtl ? "right" : "left" : !0 === o.options.verticalSwiping ? i >= 35 && i <= 135 ? "down" : "up" : "vertical" }, t.prototype.swipeEnd = function(e) {
                var t, n, i = this;
                if (i.dragging = !1, i.swiping = !1, i.scrolling) return i.scrolling = !1, !1;
                if (i.interrupted = !1, i.shouldClick = !(i.touchObject.swipeLength > 10), void 0 === i.touchObject.curX) return !1;
                if (!0 === i.touchObject.edgeHit && i.$slider.trigger("edge", [i, i.swipeDirection()]), i.touchObject.swipeLength >= i.touchObject.minSwipe) {
                    switch (n = i.swipeDirection()) {
                        case "left":
                        case "down":
                            t = i.options.swipeToSlide ? i.checkNavigable(i.currentSlide + i.getSlideCount()) : i.currentSlide + i.getSlideCount(), i.currentDirection = 0;
                            break;
                        case "right":
                        case "up":
                            t = i.options.swipeToSlide ? i.checkNavigable(i.currentSlide - i.getSlideCount()) : i.currentSlide - i.getSlideCount(), i.currentDirection = 1
                    }
                    "vertical" != n && (i.slideHandler(t), i.touchObject = {}, i.$slider.trigger("swipe", [i, n]))
                } else i.touchObject.startX !== i.touchObject.curX && (i.slideHandler(i.currentSlide), i.touchObject = {})
            }, t.prototype.swipeHandler = function(e) {
                var t = this;
                if (!(!1 === t.options.swipe || "ontouchend" in document && !1 === t.options.swipe || !1 === t.options.draggable && -1 !== e.type.indexOf("mouse"))) switch (t.touchObject.fingerCount = e.originalEvent && void 0 !== e.originalEvent.touches ? e.originalEvent.touches.length : 1, t.touchObject.minSwipe = t.listWidth / t.options.touchThreshold, !0 === t.options.verticalSwiping && (t.touchObject.minSwipe = t.listHeight / t.options.touchThreshold), e.data.action) {
                    case "start":
                        t.swipeStart(e);
                        break;
                    case "move":
                        t.swipeMove(e);
                        break;
                    case "end":
                        t.swipeEnd(e)
                }
            }, t.prototype.swipeMove = function(e) { var t, n, i, o, r, s, a = this; return r = void 0 !== e.originalEvent ? e.originalEvent.touches : null, !(!a.dragging || a.scrolling || r && 1 !== r.length) && (t = a.getLeft(a.currentSlide), a.touchObject.curX = void 0 !== r ? r[0].pageX : e.clientX, a.touchObject.curY = void 0 !== r ? r[0].pageY : e.clientY, a.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(a.touchObject.curX - a.touchObject.startX, 2))), s = Math.round(Math.sqrt(Math.pow(a.touchObject.curY - a.touchObject.startY, 2))), !a.options.verticalSwiping && !a.swiping && s > 4 ? (a.scrolling = !0, !1) : (!0 === a.options.verticalSwiping && (a.touchObject.swipeLength = s), n = a.swipeDirection(), void 0 !== e.originalEvent && a.touchObject.swipeLength > 4 && (a.swiping = !0, e.preventDefault()), o = (!1 === a.options.rtl ? 1 : -1) * (a.touchObject.curX > a.touchObject.startX ? 1 : -1), !0 === a.options.verticalSwiping && (o = a.touchObject.curY > a.touchObject.startY ? 1 : -1), i = a.touchObject.swipeLength, a.touchObject.edgeHit = !1, !1 === a.options.infinite && (0 === a.currentSlide && "right" === n || a.currentSlide >= a.getDotCount() && "left" === n) && (i = a.touchObject.swipeLength * a.options.edgeFriction, a.touchObject.edgeHit = !0), !1 === a.options.vertical ? a.swipeLeft = t + i * o : a.swipeLeft = t + i * (a.$list.height() / a.listWidth) * o, !0 === a.options.verticalSwiping && (a.swipeLeft = t + i * o), !0 !== a.options.fade && !1 !== a.options.touchMove && (!0 === a.animating ? (a.swipeLeft = null, !1) : void a.setCSS(a.swipeLeft)))) }, t.prototype.swipeStart = function(e) {
                var t, n = this;
                if (n.interrupted = !0, 1 !== n.touchObject.fingerCount || n.slideCount <= n.options.slidesToShow) return n.touchObject = {}, !1;
                void 0 !== e.originalEvent && void 0 !== e.originalEvent.touches && (t = e.originalEvent.touches[0]), n.touchObject.startX = n.touchObject.curX = void 0 !== t ? t.pageX : e.clientX, n.touchObject.startY = n.touchObject.curY = void 0 !== t ? t.pageY : e.clientY, n.dragging = !0
            }, t.prototype.unfilterSlides = t.prototype.slickUnfilter = function() {
                var e = this;
                null !== e.$slidesCache && (e.unload(), e.$slideTrack.children(this.options.slide).detach(), e.$slidesCache.appendTo(e.$slideTrack), e.reinit())
            }, t.prototype.unload = function() {
                var t = this;
                e(".slick-cloned", t.$slider).remove(), t.$dots && t.$dots.remove(), t.$prevArrow && t.htmlExpr.test(t.options.prevArrow) && t.$prevArrow.remove(), t.$nextArrow && t.htmlExpr.test(t.options.nextArrow) && t.$nextArrow.remove(), t.$slides.removeClass("slick-slide slick-active slick-visible slick-current").attr("aria-hidden", "true").css("width", "")
            }, t.prototype.unslick = function(e) {
                var t = this;
                t.$slider.trigger("unslick", [t, e]), t.destroy()
            }, t.prototype.updateArrows = function() {
                var e = this;
                Math.floor(e.options.slidesToShow / 2), !0 === e.options.arrows && e.slideCount > e.options.slidesToShow && !e.options.infinite && (e.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false"), e.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false"), 0 === e.currentSlide ? (e.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true"), e.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : (e.currentSlide >= e.slideCount - e.options.slidesToShow && !1 === e.options.centerMode || e.currentSlide >= e.slideCount - 1 && !0 === e.options.centerMode) && (e.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"), e.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")))
            }, t.prototype.updateDots = function() {
                var e = this;
                null !== e.$dots && (e.$dots.find("li").removeClass("slick-active").end(), e.$dots.find("li").eq(Math.floor(e.currentSlide / e.options.slidesToScroll)).addClass("slick-active"))
            }, t.prototype.visibility = function() {
                var e = this;
                e.options.autoplay && (document[e.hidden] ? e.interrupted = !0 : e.interrupted = !1)
            }, e.fn.slick = function() {
                var e, n, i = this,
                    o = arguments[0],
                    r = Array.prototype.slice.call(arguments, 1),
                    a = i.length;
                for (e = 0; e < a; e++)
                    if ("object" == s(o) || void 0 === o ? i[e].slick = new t(i[e], o) : n = i[e].slick[o].apply(i[e].slick, r), void 0 !== n) return n;
                return i
            };
            var n
        }) ? i.apply(t, o) : i) || (e.exports = r)
    }()
}, function(e, t, n) {
    var i = n(1),
        o = n(6);
    "string" == typeof(o = o.__esModule ? o.default : o) && (o = [
        [e.i, o, ""]
    ]);
    var r = { insert: "head", singleton: !1 };
    i(o, r);
    e.exports = o.locals || {}
}, function(e, t, n) {}, function(e, t, n) {
    var i = n(1),
        o = n(8);
    "string" == typeof(o = o.__esModule ? o.default : o) && (o = [
        [e.i, o, ""]
    ]);
    var r = { insert: "head", singleton: !1 };
    i(o, r);
    e.exports = o.locals || {}
}, function(e, t, n) {}, function(e, t, n) {
    var i = n(1),
        o = n(10);
    "string" == typeof(o = o.__esModule ? o.default : o) && (o = [
        [e.i, o, ""]
    ]);
    var r = { insert: "head", singleton: !1 };
    i(o, r);
    e.exports = o.locals || {}
}, function(e, t, n) {}, function(e, t, n) {
    "use strict";
    n.r(t);
    var i = n(0),
        o = n.n(i);
    n(2);
    o()(window).on("load", (function() { o()(".cssload").delay(200).fadeOut("slow") })),
     o()(document).ready((function(e) { o()(".header__burger").on("click", (function() {
          o()(".menu").addClass("menu-active").append(o()(
              "<div class='header__info info'><div class='info_search border-bg'><input type='text' placeholder='SIUNTOS SEKIMAS' /><i class='icon-search'></i></div></div><div class='bunner__lang bunner-lang bunner-lang-sm'> <a class='bunner-lang__link' href='#!'> <img src='https://big7express.lt/wp-content/themes/express/assets/img/header/svg/uk.svg' alt='img' /></a><a class='bunner-lang__link' href='#!'><img  src='https://big7express.lt/wp-content/themes/express/assets/img/header/svg/lt.svg' alt='img'/></a> </div>"
              )),
           setTimeout((function() { o()(".info").addClass("info-active") }), 200),
            o()("body").addClass("lock") })),
            
            o()(".header__close").on("click", (function() { 
                o()(".menu").removeClass("menu-active").find(".header__info").remove(), 
                o()(".info").removeClass("info-active"), 
                o()("body").removeClass("lock"), 
                o()(".bunner__lang").removeClass('bunner-lang-sm')
            }
                )) })),
                
                window.addEventListener("scroll", (function(e) { 
                    window.pageYOffset > 100 ? document.querySelector(".header").classList.add("responciveHeader") : document.querySelector(".header").classList.remove("responciveHeader") })),
                     window.onresize = function() {
                         if (window.innerWidth >= 1000) {
                             
                        (o()(".menu").removeClass("menu-active").find(".header__info").remove(),
                           o()(".info").removeClass("info-active"), 
                           o()("body").removeClass("lock")),
                           o()(".bunner__lang").removeClass('bunner-lang-sm')
                        }
                        },
        o()(".select").each((function() {
            var e = o()(this),
                t = e.find("option"),
                n = t.length;
            t.filter(":selected");
            e.hide(), e.wrap('<div class="select"></div>'), o()("<div>", { class: "new-select", text: e.children("option:disabled").text() }).insertAfter(e);
            var i = e.next(".new-select");
            o()("<div>", { class: "new-select__list" }).insertAfter(i);
            for (var r = i.next(".new-select__list"), s = 1; s < n; s++) o()("<div>", { class: "new-select__item", html: o()("<span>", { text: t.eq(s).text() }) }).attr("data-value", t.eq(s).val()).appendTo(r);
            var a = r.find(".new-select__item");
            r.slideUp(0), i.on("click", (function() {
                o()(this).hasClass("on") ? (o()(this).removeClass("on"), r.slideUp(200)) : (o()(this).addClass("on"), r.slideDown(200), a.on("click", (function() {
                    var e = o()(this).data("value");
                    o()("select").val(e).attr("selected", "selected"), i.text(o()(this).find("span").text()), r.slideUp(200), i.removeClass("on")
                })))
            }))
        })),

        o()(document).ready((function() { o()(".select").on("click", (function() { o()(this).siblings(".block__icon").toggleClass("img-active") })) })),
       
        o()(document).ready((function() {

             o()(".order__description").slideUp(0);
             o()(".order__item").on("click", (function()
              { 
                  
                  if(o()(this).hasClass("order-active")){
                    o()(this).find(".order__description").slideUp(200);
                    o()(this).toggleClass("order-active");
                    o()(this).find(".order__img").css("transform","rotate(0deg)")
                  }else{
                    o()(this).find(".order__description").slideDown(200);
                    o()(this).toggleClass("order-active");
                    o()(this).find(".order__img").css("transform","rotate(180deg)")
                  }
                  

             })) 
            })),

        o()(document).mouseup((function(e) {
            var t = o()(".select");
            t.is(e.target) || 0 !== t.has(e.target).length || (o()(".new-select").removeClass("on"), o()(".new-select__list").slideUp(300))
        }));


    n(4);
    o()(Document).ready((function() { o()(".slider-js-1").slick({ dots: !0, arrows: !1, slidesToShow: 1, speed: 2e3, easing: "ease", centerMode: !1, infinite: !0, pauseOnFocus: !0, pauseOnHover: !0 }), o()(".slider-js-1 .slick-dots li button").prepend("0"), o()(".slider-js-2").slick({ dots: !1, slidesToShow: 3, speed: 800, easing: "ease", centerMode: !1, infinite: !0, pauseOnFocus: !0, pauseOnHover: !0, variableWidth: !0, responsive: [{ breakpoint: 767, settings: { slidesToShow: 1, variableWidth: !1 } }] }), o()(".slider-js-3").show().slick({ dots: !1, slidesToShow: 4, speed: 800, easing: "ease", centerMode: !1, infinite: !0, pauseOnFocus: !0, pauseOnHover: !0, responsive: [{ breakpoint: 1200, settings: { slidesToShow: 3, variableWidth: !1 } }, { breakpoint: 1e3, settings: { slidesToShow: 2, variableWidth: !1 } }, { breakpoint: 768, settings: { slidesToShow: 1, variableWidth: !1 } }] }) }));
    n(5), n(7), n(9)
}]);