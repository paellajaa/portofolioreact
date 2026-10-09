const __vite__mapDeps = (i, m = __vite__mapDeps, d = (m.f || (m.f = ["assets/Lanyard-D_0Rnq8I.js", "assets/rolldown-runtime-hePW80VL.js", "assets/react-three-DQVdJ5Q2.js", "assets/three-ByLK_c_V.js"]))) => i.map(i => d[i]);
import { r as e, t } from "./rolldown-runtime-hePW80VL.js";
import { D as n, E as r, O as i, k as a } from "./react-three-DQVdJ5Q2.js";
(function () {
    let e = document.createElement(`link`).relList;
    if (e && e.supports && e.supports(`modulepreload`))
        return;
    for (let e of document.querySelectorAll(`link[rel="modulepreload"]`))
        n(e);
    new MutationObserver(e => {
        for (let t of e)
            if (t.type === `childList`)
                for (let e of t.addedNodes)
                    e.tagName === `LINK` && e.rel === `modulepreload` && n(e)
    }
    ).observe(document, {
        childList: !0,
        subtree: !0
    });
    function t(e) {
        let t = {};
        return e.integrity && (t.integrity = e.integrity),
            e.referrerPolicy && (t.referrerPolicy = e.referrerPolicy),
            t.credentials = e.crossOrigin === `use-credentials` ? `include` : e.crossOrigin === `anonymous` ? `omit` : `same-origin`,
            t
    }
    function n(e) {
        if (e.ep)
            return;
        e.ep = !0;
        let n = t(e);
        fetch(e.href, n)
    }
}
)();
var o = t((e => {
    var t = a();
    function n(e) {
        var t = `https://react.dev/errors/` + e;
        if (1 < arguments.length) {
            t += `?args[]=` + encodeURIComponent(arguments[1]);
            for (var n = 2; n < arguments.length; n++)
                t += `&args[]=` + encodeURIComponent(arguments[n])
        }
        return `Minified React error #` + e + `; visit ` + t + ` for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`
    }
    function r() { }
    var i = {
        d: {
            f: r,
            r: function () {
                throw Error(n(522))
            },
            D: r,
            C: r,
            L: r,
            m: r,
            X: r,
            S: r,
            M: r
        },
        p: 0,
        findDOMNode: null
    }
        , o = Symbol.for(`react.portal`);
    function s(e, t, n) {
        var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
        return {
            $$typeof: o,
            key: r == null ? null : `` + r,
            children: e,
            containerInfo: t,
            implementation: n
        }
    }
    var c = t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
    function l(e, t) {
        if (e === `font`)
            return ``;
        if (typeof t == `string`)
            return t === `use-credentials` ? t : ``
    }
    e.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = i,
        e.createPortal = function (e, t) {
            var r = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
            if (!t || t.nodeType !== 1 && t.nodeType !== 9 && t.nodeType !== 11)
                throw Error(n(299));
            return s(e, t, null, r)
        }
        ,
        e.flushSync = function (e) {
            var t = c.T
                , n = i.p;
            try {
                if (c.T = null,
                    i.p = 2,
                    e)
                    return e()
            } finally {
                c.T = t,
                    i.p = n,
                    i.d.f()
            }
        }
        ,
        e.preconnect = function (e, t) {
            typeof e == `string` && (t ? (t = t.crossOrigin,
                t = typeof t == `string` ? t === `use-credentials` ? t : `` : void 0) : t = null,
                i.d.C(e, t))
        }
        ,
        e.prefetchDNS = function (e) {
            typeof e == `string` && i.d.D(e)
        }
        ,
        e.preinit = function (e, t) {
            if (typeof e == `string` && t && typeof t.as == `string`) {
                var n = t.as
                    , r = l(n, t.crossOrigin)
                    , a = typeof t.integrity == `string` ? t.integrity : void 0
                    , o = typeof t.fetchPriority == `string` ? t.fetchPriority : void 0;
                n === `style` ? i.d.S(e, typeof t.precedence == `string` ? t.precedence : void 0, {
                    crossOrigin: r,
                    integrity: a,
                    fetchPriority: o
                }) : n === `script` && i.d.X(e, {
                    crossOrigin: r,
                    integrity: a,
                    fetchPriority: o,
                    nonce: typeof t.nonce == `string` ? t.nonce : void 0
                })
            }
        }
        ,
        e.preinitModule = function (e, t) {
            if (typeof e == `string`) {
                if (typeof t == `object` && t) {
                    if (t.as == null || t.as === `script`) {
                        var n = l(t.as, t.crossOrigin);
                        i.d.M(e, {
                            crossOrigin: n,
                            integrity: typeof t.integrity == `string` ? t.integrity : void 0,
                            nonce: typeof t.nonce == `string` ? t.nonce : void 0
                        })
                    }
                } else
                    t ?? i.d.M(e)
            }
        }
        ,
        e.preload = function (e, t) {
            if (typeof e == `string` && typeof t == `object` && t && typeof t.as == `string`) {
                var n = t.as
                    , r = l(n, t.crossOrigin);
                i.d.L(e, n, {
                    crossOrigin: r,
                    integrity: typeof t.integrity == `string` ? t.integrity : void 0,
                    nonce: typeof t.nonce == `string` ? t.nonce : void 0,
                    type: typeof t.type == `string` ? t.type : void 0,
                    fetchPriority: typeof t.fetchPriority == `string` ? t.fetchPriority : void 0,
                    referrerPolicy: typeof t.referrerPolicy == `string` ? t.referrerPolicy : void 0,
                    imageSrcSet: typeof t.imageSrcSet == `string` ? t.imageSrcSet : void 0,
                    imageSizes: typeof t.imageSizes == `string` ? t.imageSizes : void 0,
                    media: typeof t.media == `string` ? t.media : void 0
                })
            }
        }
        ,
        e.preloadModule = function (e, t) {
            if (typeof e == `string`) {
                if (t) {
                    var n = l(t.as, t.crossOrigin);
                    i.d.m(e, {
                        as: typeof t.as == `string` && t.as !== `script` ? t.as : void 0,
                        crossOrigin: n,
                        integrity: typeof t.integrity == `string` ? t.integrity : void 0
                    })
                } else
                    i.d.m(e)
            }
        }
        ,
        e.requestFormReset = function (e) {
            i.d.r(e)
        }
        ,
        e.unstable_batchedUpdates = function (e, t) {
            return e(t)
        }
        ,
        e.useFormState = function (e, t, n) {
            return c.H.useFormState(e, t, n)
        }
        ,
        e.useFormStatus = function () {
            return c.H.useHostTransitionStatus()
        }
        ,
        e.version = `19.2.8`
}
))
    , s = t(((e, t) => {
        function n() {
            if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > `u` || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != `function`))
                try {
                    __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)
                } catch (e) {
                    console.error(e)
                }
        }
        n(),
            t.exports = o()
    }
    ))
    , c = t((e => {
        var t = i()
            , n = a()
            , r = s();
        function o(e) {
            var t = `https://react.dev/errors/` + e;
            if (1 < arguments.length) {
                t += `?args[]=` + encodeURIComponent(arguments[1]);
                for (var n = 2; n < arguments.length; n++)
                    t += `&args[]=` + encodeURIComponent(arguments[n])
            }
            return `Minified React error #` + e + `; visit ` + t + ` for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`
        }
        function c(e) {
            return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11)
        }
        function l(e) {
            var t = e
                , n = e;
            if (e.alternate)
                for (; t.return;)
                    t = t.return;
            else {
                e = t;
                do
                    t = e,
                        t.flags & 4098 && (n = t.return),
                        e = t.return;
                while (e)
            }
            return t.tag === 3 ? n : null
        }
        function u(e) {
            if (e.tag === 13) {
                var t = e.memoizedState;
                if (t === null && (e = e.alternate,
                    e !== null && (t = e.memoizedState)),
                    t !== null)
                    return t.dehydrated
            }
            return null
        }
        function d(e) {
            if (e.tag === 31) {
                var t = e.memoizedState;
                if (t === null && (e = e.alternate,
                    e !== null && (t = e.memoizedState)),
                    t !== null)
                    return t.dehydrated
            }
            return null
        }
        function f(e) {
            if (l(e) !== e)
                throw Error(o(188))
        }
        function p(e) {
            var t = e.alternate;
            if (!t) {
                if (t = l(e),
                    t === null)
                    throw Error(o(188));
                return t === e ? e : null
            }
            for (var n = e, r = t; ;) {
                var i = n.return;
                if (i === null)
                    break;
                var a = i.alternate;
                if (a === null) {
                    if (r = i.return,
                        r !== null) {
                        n = r;
                        continue
                    }
                    break
                }
                if (i.child === a.child) {
                    for (a = i.child; a;) {
                        if (a === n)
                            return f(i),
                                e;
                        if (a === r)
                            return f(i),
                                t;
                        a = a.sibling
                    }
                    throw Error(o(188))
                }
                if (n.return !== r.return)
                    n = i,
                        r = a;
                else {
                    for (var s = !1, c = i.child; c;) {
                        if (c === n) {
                            s = !0,
                                n = i,
                                r = a;
                            break
                        }
                        if (c === r) {
                            s = !0,
                                r = i,
                                n = a;
                            break
                        }
                        c = c.sibling
                    }
                    if (!s) {
                        for (c = a.child; c;) {
                            if (c === n) {
                                s = !0,
                                    n = a,
                                    r = i;
                                break
                            }
                            if (c === r) {
                                s = !0,
                                    r = a,
                                    n = i;
                                break
                            }
                            c = c.sibling
                        }
                        if (!s)
                            throw Error(o(189))
                    }
                }
                if (n.alternate !== r)
                    throw Error(o(190))
            }
            if (n.tag !== 3)
                throw Error(o(188));
            return n.stateNode.current === n ? e : t
        }
        function m(e) {
            var t = e.tag;
            if (t === 5 || t === 26 || t === 27 || t === 6)
                return e;
            for (e = e.child; e !== null;) {
                if (t = m(e),
                    t !== null)
                    return t;
                e = e.sibling
            }
            return null
        }
        var h = Object.assign
            , g = Symbol.for(`react.element`)
            , _ = Symbol.for(`react.transitional.element`)
            , v = Symbol.for(`react.portal`)
            , y = Symbol.for(`react.fragment`)
            , b = Symbol.for(`react.strict_mode`)
            , x = Symbol.for(`react.profiler`)
            , S = Symbol.for(`react.consumer`)
            , C = Symbol.for(`react.context`)
            , ee = Symbol.for(`react.forward_ref`)
            , te = Symbol.for(`react.suspense`)
            , ne = Symbol.for(`react.suspense_list`)
            , re = Symbol.for(`react.memo`)
            , ie = Symbol.for(`react.lazy`)
            , ae = Symbol.for(`react.activity`)
            , w = Symbol.for(`react.memo_cache_sentinel`)
            , oe = Symbol.iterator;
        function se(e) {
            return typeof e != `object` || !e ? null : (e = oe && e[oe] || e[`@@iterator`],
                typeof e == `function` ? e : null)
        }
        var ce = Symbol.for(`react.client.reference`);
        function le(e) {
            if (e == null)
                return null;
            if (typeof e == `function`)
                return e.$$typeof === ce ? null : e.displayName || e.name || null;
            if (typeof e == `string`)
                return e;
            switch (e) {
                case y:
                    return `Fragment`;
                case x:
                    return `Profiler`;
                case b:
                    return `StrictMode`;
                case te:
                    return `Suspense`;
                case ne:
                    return `SuspenseList`;
                case ae:
                    return `Activity`
            }
            if (typeof e == `object`)
                switch (e.$$typeof) {
                    case v:
                        return `Portal`;
                    case C:
                        return e.displayName || `Context`;
                    case S:
                        return (e._context.displayName || `Context`) + `.Consumer`;
                    case ee:
                        var t = e.render;
                        return e = e.displayName,
                            e ||= (e = t.displayName || t.name || ``,
                                e === `` ? `ForwardRef` : `ForwardRef(` + e + `)`),
                            e;
                    case re:
                        return t = e.displayName || null,
                            t === null ? le(e.type) || `Memo` : t;
                    case ie:
                        t = e._payload,
                            e = e._init;
                        try {
                            return le(e(t))
                        } catch { }
                }
            return null
        }
        var ue = Array.isArray
            , T = n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE
            , E = r.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE
            , de = {
                pending: !1,
                data: null,
                method: null,
                action: null
            }
            , fe = []
            , pe = -1;
        function me(e) {
            return {
                current: e
            }
        }
        function D(e) {
            0 > pe || (e.current = fe[pe],
                fe[pe] = null,
                pe--)
        }
        function O(e, t) {
            pe++,
                fe[pe] = e.current,
                e.current = t
        }
        var he = me(null)
            , ge = me(null)
            , _e = me(null)
            , ve = me(null);
        function ye(e, t) {
            switch (O(_e, t),
            O(ge, e),
            O(he, null),
            t.nodeType) {
                case 9:
                case 11:
                    e = (e = t.documentElement) && (e = e.namespaceURI) ? Vd(e) : 0;
                    break;
                default:
                    if (e = t.tagName,
                        t = t.namespaceURI)
                        t = Vd(t),
                            e = Hd(t, e);
                    else
                        switch (e) {
                            case `svg`:
                                e = 1;
                                break;
                            case `math`:
                                e = 2;
                                break;
                            default:
                                e = 0
                        }
            }
            D(he),
                O(he, e)
        }
        function be() {
            D(he),
                D(ge),
                D(_e)
        }
        function xe(e) {
            e.memoizedState !== null && O(ve, e);
            var t = he.current
                , n = Hd(t, e.type);
            t !== n && (O(ge, e),
                O(he, n))
        }
        function Se(e) {
            ge.current === e && (D(he),
                D(ge)),
                ve.current === e && (D(ve),
                    Qf._currentValue = de)
        }
        var Ce, k;
        function we(e) {
            if (Ce === void 0)
                try {
                    throw Error()
                } catch (e) {
                    var t = e.stack.trim().match(/\n( *(at )?)/);
                    Ce = t && t[1] || ``,
                        k = -1 < e.stack.indexOf(`
    at`) ? ` (<anonymous>)` : -1 < e.stack.indexOf(`@`) ? `@unknown:0:0` : ``
                }
            return `
` + Ce + e + k
        }
        var Te = !1;
        function Ee(e, t) {
            if (!e || Te)
                return ``;
            Te = !0;
            var n = Error.prepareStackTrace;
            Error.prepareStackTrace = void 0;
            try {
                var r = {
                    DetermineComponentFrameRoot: function () {
                        try {
                            if (t) {
                                var n = function () {
                                    throw Error()
                                };
                                if (Object.defineProperty(n.prototype, "props", {
                                    set: function () {
                                        throw Error()
                                    }
                                }),
                                    typeof Reflect == `object` && Reflect.construct) {
                                    try {
                                        Reflect.construct(n, [])
                                    } catch (e) {
                                        var r = e
                                    }
                                    Reflect.construct(e, [], n)
                                } else {
                                    try {
                                        n.call()
                                    } catch (e) {
                                        r = e
                                    }
                                    e.call(n.prototype)
                                }
                            } else {
                                try {
                                    throw Error()
                                } catch (e) {
                                    r = e
                                }
                                (n = e()) && typeof n.catch == `function` && n.catch(function () { })
                            }
                        } catch (e) {
                            if (e && r && typeof e.stack == `string`)
                                return [e.stack, r.stack]
                        }
                        return [null, null]
                    }
                };
                r.DetermineComponentFrameRoot.displayName = `DetermineComponentFrameRoot`;
                var i = Object.getOwnPropertyDescriptor(r.DetermineComponentFrameRoot, `name`);
                i && i.configurable && Object.defineProperty(r.DetermineComponentFrameRoot, "name", {
                    value: `DetermineComponentFrameRoot`
                });
                var a = r.DetermineComponentFrameRoot()
                    , o = a[0]
                    , s = a[1];
                if (o && s) {
                    var c = o.split(`
`)
                        , l = s.split(`
`);
                    for (i = r = 0; r < c.length && !c[r].includes(`DetermineComponentFrameRoot`);)
                        r++;
                    for (; i < l.length && !l[i].includes(`DetermineComponentFrameRoot`);)
                        i++;
                    if (r === c.length || i === l.length)
                        for (r = c.length - 1,
                            i = l.length - 1; 1 <= r && 0 <= i && c[r] !== l[i];)
                            i--;
                    for (; 1 <= r && 0 <= i; r--,
                        i--)
                        if (c[r] !== l[i]) {
                            if (r !== 1 || i !== 1)
                                do
                                    if (r--,
                                        i--,
                                        0 > i || c[r] !== l[i]) {
                                        var u = `
` + c[r].replace(` at new `, ` at `);
                                        return e.displayName && u.includes(`<anonymous>`) && (u = u.replace(`<anonymous>`, e.displayName)),
                                            u
                                    }
                                while (1 <= r && 0 <= i);
                            break
                        }
                }
            } finally {
                Te = !1,
                    Error.prepareStackTrace = n
            }
            return (n = e ? e.displayName || e.name : ``) ? we(n) : ``
        }
        function De(e, t) {
            switch (e.tag) {
                case 26:
                case 27:
                case 5:
                    return we(e.type);
                case 16:
                    return we(`Lazy`);
                case 13:
                    return e.child !== t && t !== null ? we(`Suspense Fallback`) : we(`Suspense`);
                case 19:
                    return we(`SuspenseList`);
                case 0:
                case 15:
                    return Ee(e.type, !1);
                case 11:
                    return Ee(e.type.render, !1);
                case 1:
                    return Ee(e.type, !0);
                case 31:
                    return we(`Activity`);
                default:
                    return ``
            }
        }
        function Oe(e) {
            try {
                var t = ``
                    , n = null;
                do
                    t += De(e, n),
                        n = e,
                        e = e.return;
                while (e);
                return t
            } catch (e) {
                return `
Error generating stack: ` + e.message + `
` + e.stack
            }
        }
        var ke = Object.prototype.hasOwnProperty
            , Ae = t.unstable_scheduleCallback
            , je = t.unstable_cancelCallback
            , Me = t.unstable_shouldYield
            , Ne = t.unstable_requestPaint
            , Pe = t.unstable_now
            , Fe = t.unstable_getCurrentPriorityLevel
            , Ie = t.unstable_ImmediatePriority
            , Le = t.unstable_UserBlockingPriority
            , Re = t.unstable_NormalPriority
            , ze = t.unstable_LowPriority
            , Be = t.unstable_IdlePriority
            , Ve = t.log
            , He = t.unstable_setDisableYieldValue
            , Ue = null
            , We = null;
        function Ge(e) {
            if (typeof Ve == `function` && He(e),
                We && typeof We.setStrictMode == `function`)
                try {
                    We.setStrictMode(Ue, e)
                } catch { }
        }
        var Ke = Math.clz32 ? Math.clz32 : Ye
            , qe = Math.log
            , Je = Math.LN2;
        function Ye(e) {
            return e >>>= 0,
                e === 0 ? 32 : 31 - (qe(e) / Je | 0) | 0
        }
        var Xe = 256
            , Ze = 262144
            , Qe = 4194304;
        function $e(e) {
            var t = e & 42;
            if (t !== 0)
                return t;
            switch (e & -e) {
                case 1:
                    return 1;
                case 2:
                    return 2;
                case 4:
                    return 4;
                case 8:
                    return 8;
                case 16:
                    return 16;
                case 32:
                    return 32;
                case 64:
                    return 64;
                case 128:
                    return 128;
                case 256:
                case 512:
                case 1024:
                case 2048:
                case 4096:
                case 8192:
                case 16384:
                case 32768:
                case 65536:
                case 131072:
                    return e & 261888;
                case 262144:
                case 524288:
                case 1048576:
                case 2097152:
                    return e & 3932160;
                case 4194304:
                case 8388608:
                case 16777216:
                case 33554432:
                    return e & 62914560;
                case 67108864:
                    return 67108864;
                case 134217728:
                    return 134217728;
                case 268435456:
                    return 268435456;
                case 536870912:
                    return 536870912;
                case 1073741824:
                    return 0;
                default:
                    return e
            }
        }
        function et(e, t, n) {
            var r = e.pendingLanes;
            if (r === 0)
                return 0;
            var i = 0
                , a = e.suspendedLanes
                , o = e.pingedLanes;
            e = e.warmLanes;
            var s = r & 134217727;
            return s === 0 ? (s = r & ~a,
                s === 0 ? o === 0 ? n || (n = r & ~e,
                    n !== 0 && (i = $e(n))) : i = $e(o) : i = $e(s)) : (r = s & ~a,
                        r === 0 ? (o &= s,
                            o === 0 ? n || (n = s & ~e,
                                n !== 0 && (i = $e(n))) : i = $e(o)) : i = $e(r)),
                i === 0 ? 0 : t !== 0 && t !== i && (t & a) === 0 && (a = i & -i,
                    n = t & -t,
                    a >= n || a === 32 && n & 4194048) ? t : i
        }
        function tt(e, t) {
            return (e.pendingLanes & ~(e.suspendedLanes & ~e.pingedLanes) & t) === 0
        }
        function nt(e, t) {
            switch (e) {
                case 1:
                case 2:
                case 4:
                case 8:
                case 64:
                    return t + 250;
                case 16:
                case 32:
                case 128:
                case 256:
                case 512:
                case 1024:
                case 2048:
                case 4096:
                case 8192:
                case 16384:
                case 32768:
                case 65536:
                case 131072:
                case 262144:
                case 524288:
                case 1048576:
                case 2097152:
                    return t + 5e3;
                case 4194304:
                case 8388608:
                case 16777216:
                case 33554432:
                    return -1;
                case 67108864:
                case 134217728:
                case 268435456:
                case 536870912:
                case 1073741824:
                    return -1;
                default:
                    return -1
            }
        }
        function rt() {
            var e = Qe;
            return Qe <<= 1,
                !(Qe & 62914560) && (Qe = 4194304),
                e
        }
        function it(e) {
            for (var t = [], n = 0; 31 > n; n++)
                t.push(e);
            return t
        }
        function at(e, t) {
            e.pendingLanes |= t,
                t !== 268435456 && (e.suspendedLanes = 0,
                    e.pingedLanes = 0,
                    e.warmLanes = 0)
        }
        function ot(e, t, n, r, i, a) {
            var o = e.pendingLanes;
            e.pendingLanes = n,
                e.suspendedLanes = 0,
                e.pingedLanes = 0,
                e.warmLanes = 0,
                e.expiredLanes &= n,
                e.entangledLanes &= n,
                e.errorRecoveryDisabledLanes &= n,
                e.shellSuspendCounter = 0;
            var s = e.entanglements
                , c = e.expirationTimes
                , l = e.hiddenUpdates;
            for (n = o & ~n; 0 < n;) {
                var u = 31 - Ke(n)
                    , d = 1 << u;
                s[u] = 0,
                    c[u] = -1;
                var f = l[u];
                if (f !== null)
                    for (l[u] = null,
                        u = 0; u < f.length; u++) {
                        var p = f[u];
                        p !== null && (p.lane &= -536870913)
                    }
                n &= ~d
            }
            r !== 0 && st(e, r, 0),
                a !== 0 && i === 0 && e.tag !== 0 && (e.suspendedLanes |= a & ~(o & ~t))
        }
        function st(e, t, n) {
            e.pendingLanes |= t,
                e.suspendedLanes &= ~t;
            var r = 31 - Ke(t);
            e.entangledLanes |= t,
                e.entanglements[r] = e.entanglements[r] | 1073741824 | n & 261930
        }
        function ct(e, t) {
            var n = e.entangledLanes |= t;
            for (e = e.entanglements; n;) {
                var r = 31 - Ke(n)
                    , i = 1 << r;
                i & t | e[r] & t && (e[r] |= t),
                    n &= ~i
            }
        }
        function lt(e, t) {
            var n = t & -t;
            return n = n & 42 ? 1 : ut(n),
                (n & (e.suspendedLanes | t)) === 0 ? n : 0
        }
        function ut(e) {
            switch (e) {
                case 2:
                    e = 1;
                    break;
                case 8:
                    e = 4;
                    break;
                case 32:
                    e = 16;
                    break;
                case 256:
                case 512:
                case 1024:
                case 2048:
                case 4096:
                case 8192:
                case 16384:
                case 32768:
                case 65536:
                case 131072:
                case 262144:
                case 524288:
                case 1048576:
                case 2097152:
                case 4194304:
                case 8388608:
                case 16777216:
                case 33554432:
                    e = 128;
                    break;
                case 268435456:
                    e = 134217728;
                    break;
                default:
                    e = 0
            }
            return e
        }
        function dt(e) {
            return e &= -e,
                2 < e ? 8 < e ? e & 134217727 ? 32 : 268435456 : 8 : 2
        }
        function ft() {
            var e = E.p;
            return e === 0 ? (e = window.event,
                e === void 0 ? 32 : mp(e.type)) : e
        }
        function pt(e, t) {
            var n = E.p;
            try {
                return E.p = e,
                    t()
            } finally {
                E.p = n
            }
        }
        var mt = Math.random().toString(36).slice(2)
            , ht = `__reactFiber$` + mt
            , gt = `__reactProps$` + mt
            , _t = `__reactContainer$` + mt
            , vt = `__reactEvents$` + mt
            , yt = `__reactListeners$` + mt
            , bt = `__reactHandles$` + mt
            , xt = `__reactResources$` + mt
            , St = `__reactMarker$` + mt;
        function Ct(e) {
            delete e[ht],
                delete e[gt],
                delete e[vt],
                delete e[yt],
                delete e[bt]
        }
        function wt(e) {
            var t = e[ht];
            if (t)
                return t;
            for (var n = e.parentNode; n;) {
                if (t = n[_t] || n[ht]) {
                    if (n = t.alternate,
                        t.child !== null || n !== null && n.child !== null)
                        for (e = df(e); e !== null;) {
                            if (n = e[ht])
                                return n;
                            e = df(e)
                        }
                    return t
                }
                e = n,
                    n = e.parentNode
            }
            return null
        }
        function Tt(e) {
            if (e = e[ht] || e[_t]) {
                var t = e.tag;
                if (t === 5 || t === 6 || t === 13 || t === 31 || t === 26 || t === 27 || t === 3)
                    return e
            }
            return null
        }
        function Et(e) {
            var t = e.tag;
            if (t === 5 || t === 26 || t === 27 || t === 6)
                return e.stateNode;
            throw Error(o(33))
        }
        function Dt(e) {
            var t = e[xt];
            return t ||= e[xt] = {
                hoistableStyles: new Map,
                hoistableScripts: new Map
            },
                t
        }
        function Ot(e) {
            e[St] = !0
        }
        var kt = new Set
            , At = {};
        function jt(e, t) {
            Mt(e, t),
                Mt(e + `Capture`, t)
        }
        function Mt(e, t) {
            for (At[e] = t,
                e = 0; e < t.length; e++)
                kt.add(t[e])
        }
        var Nt = RegExp(`^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$`)
            , Pt = {}
            , Ft = {};
        function It(e) {
            return ke.call(Ft, e) ? !0 : ke.call(Pt, e) ? !1 : Nt.test(e) ? Ft[e] = !0 : (Pt[e] = !0,
                !1)
        }
        function Lt(e, t, n) {
            if (It(t)) {
                if (n === null)
                    e.removeAttribute(t);
                else {
                    switch (typeof n) {
                        case `undefined`:
                        case `function`:
                        case `symbol`:
                            e.removeAttribute(t);
                            return;
                        case `boolean`:
                            var r = t.toLowerCase().slice(0, 5);
                            if (r !== `data-` && r !== `aria-`) {
                                e.removeAttribute(t);
                                return
                            }
                    }
                    e.setAttribute(t, `` + n)
                }
            }
        }
        function Rt(e, t, n) {
            if (n === null)
                e.removeAttribute(t);
            else {
                switch (typeof n) {
                    case `undefined`:
                    case `function`:
                    case `symbol`:
                    case `boolean`:
                        e.removeAttribute(t);
                        return
                }
                e.setAttribute(t, `` + n)
            }
        }
        function zt(e, t, n, r) {
            if (r === null)
                e.removeAttribute(n);
            else {
                switch (typeof r) {
                    case `undefined`:
                    case `function`:
                    case `symbol`:
                    case `boolean`:
                        e.removeAttribute(n);
                        return
                }
                e.setAttributeNS(t, n, `` + r)
            }
        }
        function Bt(e) {
            switch (typeof e) {
                case `bigint`:
                case `boolean`:
                case `number`:
                case `string`:
                case `undefined`:
                    return e;
                case `object`:
                    return e;
                default:
                    return ``
            }
        }
        function Vt(e) {
            var t = e.type;
            return (e = e.nodeName) && e.toLowerCase() === `input` && (t === `checkbox` || t === `radio`)
        }
        function Ht(e, t, n) {
            var r = Object.getOwnPropertyDescriptor(e.constructor.prototype, t);
            if (!e.hasOwnProperty(t) && r !== void 0 && typeof r.get == `function` && typeof r.set == `function`) {
                var i = r.get
                    , a = r.set;
                return Object.defineProperty(e, t, {
                    configurable: !0,
                    get: function () {
                        return i.call(this)
                    },
                    set: function (e) {
                        n = `` + e,
                            a.call(this, e)
                    }
                }),
                    Object.defineProperty(e, t, {
                        enumerable: r.enumerable
                    }),
                {
                    getValue: function () {
                        return n
                    },
                    setValue: function (e) {
                        n = `` + e
                    },
                    stopTracking: function () {
                        e._valueTracker = null,
                            delete e[t]
                    }
                }
            }
        }
        function Ut(e) {
            if (!e._valueTracker) {
                var t = Vt(e) ? `checked` : `value`;
                e._valueTracker = Ht(e, t, `` + e[t])
            }
        }
        function Wt(e) {
            if (!e)
                return !1;
            var t = e._valueTracker;
            if (!t)
                return !0;
            var n = t.getValue()
                , r = ``;
            return e && (r = Vt(e) ? e.checked ? `true` : `false` : e.value),
                e = r,
                e !== n && (t.setValue(e),
                    !0)
        }
        function Gt(e) {
            if (e ||= typeof document < `u` ? document : void 0,
                e === void 0)
                return null;
            try {
                return e.activeElement || e.body
            } catch {
                return e.body
            }
        }
        var Kt = /[\n"\\]/g;
        function qt(e) {
            return e.replace(Kt, function (e) {
                return `\\` + e.charCodeAt(0).toString(16) + ` `
            })
        }
        function Jt(e, t, n, r, i, a, o, s) {
            e.name = ``,
                o != null && typeof o != `function` && typeof o != `symbol` && typeof o != `boolean` ? e.type = o : e.removeAttribute(`type`),
                t == null ? o !== `submit` && o !== `reset` || e.removeAttribute(`value`) : o === `number` ? (t === 0 && e.value === `` || e.value != t) && (e.value = `` + Bt(t)) : e.value !== `` + Bt(t) && (e.value = `` + Bt(t)),
                t == null ? n == null ? r != null && e.removeAttribute(`value`) : Xt(e, o, Bt(n)) : Xt(e, o, Bt(t)),
                i == null && a != null && (e.defaultChecked = !!a),
                i != null && (e.checked = i && typeof i != `function` && typeof i != `symbol`),
                s != null && typeof s != `function` && typeof s != `symbol` && typeof s != `boolean` ? e.name = `` + Bt(s) : e.removeAttribute(`name`)
        }
        function Yt(e, t, n, r, i, a, o, s) {
            if (a != null && typeof a != `function` && typeof a != `symbol` && typeof a != `boolean` && (e.type = a),
                t != null || n != null) {
                if (!(a !== `submit` && a !== `reset` || t != null)) {
                    Ut(e);
                    return
                }
                n = n == null ? `` : `` + Bt(n),
                    t = t == null ? n : `` + Bt(t),
                    s || t === e.value || (e.value = t),
                    e.defaultValue = t
            }
            r ??= i,
                r = typeof r != `function` && typeof r != `symbol` && !!r,
                e.checked = s ? e.checked : !!r,
                e.defaultChecked = !!r,
                o != null && typeof o != `function` && typeof o != `symbol` && typeof o != `boolean` && (e.name = o),
                Ut(e)
        }
        function Xt(e, t, n) {
            t === `number` && Gt(e.ownerDocument) === e || e.defaultValue === `` + n || (e.defaultValue = `` + n)
        }
        function Zt(e, t, n, r) {
            if (e = e.options,
                t) {
                t = {};
                for (var i = 0; i < n.length; i++)
                    t[`$` + n[i]] = !0;
                for (n = 0; n < e.length; n++)
                    i = t.hasOwnProperty(`$` + e[n].value),
                        e[n].selected !== i && (e[n].selected = i),
                        i && r && (e[n].defaultSelected = !0)
            } else {
                for (n = `` + Bt(n),
                    t = null,
                    i = 0; i < e.length; i++) {
                    if (e[i].value === n) {
                        e[i].selected = !0,
                            r && (e[i].defaultSelected = !0);
                        return
                    }
                    t !== null || e[i].disabled || (t = e[i])
                }
                t !== null && (t.selected = !0)
            }
        }
        function Qt(e, t, n) {
            if (t != null && (t = `` + Bt(t),
                t !== e.value && (e.value = t),
                n == null)) {
                e.defaultValue !== t && (e.defaultValue = t);
                return
            }
            e.defaultValue = n == null ? `` : `` + Bt(n)
        }
        function $t(e, t, n, r) {
            if (t == null) {
                if (r != null) {
                    if (n != null)
                        throw Error(o(92));
                    if (ue(r)) {
                        if (1 < r.length)
                            throw Error(o(93));
                        r = r[0]
                    }
                    n = r
                }
                n ??= ``,
                    t = n
            }
            n = Bt(t),
                e.defaultValue = n,
                r = e.textContent,
                r === n && r !== `` && r !== null && (e.value = r),
                Ut(e)
        }
        function en(e, t) {
            if (t) {
                var n = e.firstChild;
                if (n && n === e.lastChild && n.nodeType === 3) {
                    n.nodeValue = t;
                    return
                }
            }
            e.textContent = t
        }
        var tn = new Set(`animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp`.split(` `));
        function nn(e, t, n) {
            var r = t.indexOf(`--`) === 0;
            n == null || typeof n == `boolean` || n === `` ? r ? e.setProperty(t, ``) : t === `float` ? e.cssFloat = `` : e[t] = `` : r ? e.setProperty(t, n) : typeof n != `number` || n === 0 || tn.has(t) ? t === `float` ? e.cssFloat = n : e[t] = (`` + n).trim() : e[t] = n + `px`
        }
        function rn(e, t, n) {
            if (t != null && typeof t != `object`)
                throw Error(o(62));
            if (e = e.style,
                n != null) {
                for (var r in n)
                    !n.hasOwnProperty(r) || t != null && t.hasOwnProperty(r) || (r.indexOf(`--`) === 0 ? e.setProperty(r, ``) : r === `float` ? e.cssFloat = `` : e[r] = ``);
                for (var i in t)
                    r = t[i],
                        t.hasOwnProperty(i) && n[i] !== r && nn(e, i, r)
            } else
                for (var a in t)
                    t.hasOwnProperty(a) && nn(e, a, t[a])
        }
        function an(e) {
            if (e.indexOf(`-`) === -1)
                return !1;
            switch (e) {
                case `annotation-xml`:
                case `color-profile`:
                case `font-face`:
                case `font-face-src`:
                case `font-face-uri`:
                case `font-face-format`:
                case `font-face-name`:
                case `missing-glyph`:
                    return !1;
                default:
                    return !0
            }
        }
        var on = new Map([[`acceptCharset`, `accept-charset`], [`htmlFor`, `for`], [`httpEquiv`, `http-equiv`], [`crossOrigin`, `crossorigin`], [`accentHeight`, `accent-height`], [`alignmentBaseline`, `alignment-baseline`], [`arabicForm`, `arabic-form`], [`baselineShift`, `baseline-shift`], [`capHeight`, `cap-height`], [`clipPath`, `clip-path`], [`clipRule`, `clip-rule`], [`colorInterpolation`, `color-interpolation`], [`colorInterpolationFilters`, `color-interpolation-filters`], [`colorProfile`, `color-profile`], [`colorRendering`, `color-rendering`], [`dominantBaseline`, `dominant-baseline`], [`enableBackground`, `enable-background`], [`fillOpacity`, `fill-opacity`], [`fillRule`, `fill-rule`], [`floodColor`, `flood-color`], [`floodOpacity`, `flood-opacity`], [`fontFamily`, `font-family`], [`fontSize`, `font-size`], [`fontSizeAdjust`, `font-size-adjust`], [`fontStretch`, `font-stretch`], [`fontStyle`, `font-style`], [`fontVariant`, `font-variant`], [`fontWeight`, `font-weight`], [`glyphName`, `glyph-name`], [`glyphOrientationHorizontal`, `glyph-orientation-horizontal`], [`glyphOrientationVertical`, `glyph-orientation-vertical`], [`horizAdvX`, `horiz-adv-x`], [`horizOriginX`, `horiz-origin-x`], [`imageRendering`, `image-rendering`], [`letterSpacing`, `letter-spacing`], [`lightingColor`, `lighting-color`], [`markerEnd`, `marker-end`], [`markerMid`, `marker-mid`], [`markerStart`, `marker-start`], [`overlinePosition`, `overline-position`], [`overlineThickness`, `overline-thickness`], [`paintOrder`, `paint-order`], [`panose-1`, `panose-1`], [`pointerEvents`, `pointer-events`], [`renderingIntent`, `rendering-intent`], [`shapeRendering`, `shape-rendering`], [`stopColor`, `stop-color`], [`stopOpacity`, `stop-opacity`], [`strikethroughPosition`, `strikethrough-position`], [`strikethroughThickness`, `strikethrough-thickness`], [`strokeDasharray`, `stroke-dasharray`], [`strokeDashoffset`, `stroke-dashoffset`], [`strokeLinecap`, `stroke-linecap`], [`strokeLinejoin`, `stroke-linejoin`], [`strokeMiterlimit`, `stroke-miterlimit`], [`strokeOpacity`, `stroke-opacity`], [`strokeWidth`, `stroke-width`], [`textAnchor`, `text-anchor`], [`textDecoration`, `text-decoration`], [`textRendering`, `text-rendering`], [`transformOrigin`, `transform-origin`], [`underlinePosition`, `underline-position`], [`underlineThickness`, `underline-thickness`], [`unicodeBidi`, `unicode-bidi`], [`unicodeRange`, `unicode-range`], [`unitsPerEm`, `units-per-em`], [`vAlphabetic`, `v-alphabetic`], [`vHanging`, `v-hanging`], [`vIdeographic`, `v-ideographic`], [`vMathematical`, `v-mathematical`], [`vectorEffect`, `vector-effect`], [`vertAdvY`, `vert-adv-y`], [`vertOriginX`, `vert-origin-x`], [`vertOriginY`, `vert-origin-y`], [`wordSpacing`, `word-spacing`], [`writingMode`, `writing-mode`], [`xmlnsXlink`, `xmlns:xlink`], [`xHeight`, `x-height`]])
            , sn = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
        function cn(e) {
            return sn.test(`` + e) ? `javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')` : e
        }
        function ln() { }
        var un = null;
        function dn(e) {
            return e = e.target || e.srcElement || window,
                e.correspondingUseElement && (e = e.correspondingUseElement),
                e.nodeType === 3 ? e.parentNode : e
        }
        var fn = null
            , pn = null;
        function mn(e) {
            var t = Tt(e);
            if (t && (e = t.stateNode)) {
                var n = e[gt] || null;
                a: switch (e = t.stateNode,
                t.type) {
                    case `input`:
                        if (Jt(e, n.value, n.defaultValue, n.defaultValue, n.checked, n.defaultChecked, n.type, n.name),
                            t = n.name,
                            n.type === `radio` && t != null) {
                            for (n = e; n.parentNode;)
                                n = n.parentNode;
                            for (n = n.querySelectorAll(`input[name="` + qt(`` + t) + `"][type="radio"]`),
                                t = 0; t < n.length; t++) {
                                var r = n[t];
                                if (r !== e && r.form === e.form) {
                                    var i = r[gt] || null;
                                    if (!i)
                                        throw Error(o(90));
                                    Jt(r, i.value, i.defaultValue, i.defaultValue, i.checked, i.defaultChecked, i.type, i.name)
                                }
                            }
                            for (t = 0; t < n.length; t++)
                                r = n[t],
                                    r.form === e.form && Wt(r)
                        }
                        break a;
                    case `textarea`:
                        Qt(e, n.value, n.defaultValue);
                        break a;
                    case `select`:
                        t = n.value,
                            t != null && Zt(e, !!n.multiple, t, !1)
                }
            }
        }
        var hn = !1;
        function gn(e, t, n) {
            if (hn)
                return e(t, n);
            hn = !0;
            try {
                return e(t)
            } finally {
                if (hn = !1,
                    (fn !== null || pn !== null) && (bu(),
                        fn && (t = fn,
                            e = pn,
                            pn = fn = null,
                            mn(t),
                            e)))
                    for (t = 0; t < e.length; t++)
                        mn(e[t])
            }
        }
        function _n(e, t) {
            var n = e.stateNode;
            if (n === null)
                return null;
            var r = n[gt] || null;
            if (r === null)
                return null;
            n = r[t];
            a: switch (t) {
                case `onClick`:
                case `onClickCapture`:
                case `onDoubleClick`:
                case `onDoubleClickCapture`:
                case `onMouseDown`:
                case `onMouseDownCapture`:
                case `onMouseMove`:
                case `onMouseMoveCapture`:
                case `onMouseUp`:
                case `onMouseUpCapture`:
                case `onMouseEnter`:
                    (r = !r.disabled) || (e = e.type,
                        r = e !== `button` && e !== `input` && e !== `select` && e !== `textarea`),
                        e = !r;
                    break a;
                default:
                    e = !1
            }
            if (e)
                return null;
            if (n && typeof n != `function`)
                throw Error(o(231, t, typeof n));
            return n
        }
        var vn = !(typeof window > `u` || window.document === void 0 || window.document.createElement === void 0)
            , yn = !1;
        if (vn)
            try {
                var bn = {};
                Object.defineProperty(bn, "passive", {
                    get: function () {
                        yn = !0
                    }
                }),
                    window.addEventListener(`test`, bn, bn),
                    window.removeEventListener(`test`, bn, bn)
            } catch {
                yn = !1
            }
        var xn = null
            , Sn = null
            , Cn = null;
        function wn() {
            if (Cn)
                return Cn;
            var e, t = Sn, n = t.length, r, i = `value` in xn ? xn.value : xn.textContent, a = i.length;
            for (e = 0; e < n && t[e] === i[e]; e++)
                ;
            var o = n - e;
            for (r = 1; r <= o && t[n - r] === i[a - r]; r++)
                ;
            return Cn = i.slice(e, 1 < r ? 1 - r : void 0)
        }
        function Tn(e) {
            var t = e.keyCode;
            return `charCode` in e ? (e = e.charCode,
                e === 0 && t === 13 && (e = 13)) : e = t,
                e === 10 && (e = 13),
                32 <= e || e === 13 ? e : 0
        }
        function En() {
            return !0
        }
        function Dn() {
            return !1
        }
        function On(e) {
            function t(t, n, r, i, a) {
                for (var o in this._reactName = t,
                    this._targetInst = r,
                    this.type = n,
                    this.nativeEvent = i,
                    this.target = a,
                    this.currentTarget = null,
                    e)
                    e.hasOwnProperty(o) && (t = e[o],
                        this[o] = t ? t(i) : i[o]);
                return this.isDefaultPrevented = (i.defaultPrevented == null ? !1 === i.returnValue : i.defaultPrevented) ? En : Dn,
                    this.isPropagationStopped = Dn,
                    this
            }
            return h(t.prototype, {
                preventDefault: function () {
                    this.defaultPrevented = !0;
                    var e = this.nativeEvent;
                    e && (e.preventDefault ? e.preventDefault() : typeof e.returnValue != `unknown` && (e.returnValue = !1),
                        this.isDefaultPrevented = En)
                },
                stopPropagation: function () {
                    var e = this.nativeEvent;
                    e && (e.stopPropagation ? e.stopPropagation() : typeof e.cancelBubble != `unknown` && (e.cancelBubble = !0),
                        this.isPropagationStopped = En)
                },
                persist: function () { },
                isPersistent: En
            }),
                t
        }
        var kn = {
            eventPhase: 0,
            bubbles: 0,
            cancelable: 0,
            timeStamp: function (e) {
                return e.timeStamp || Date.now()
            },
            defaultPrevented: 0,
            isTrusted: 0
        }, An = On(kn), jn = h({}, kn, {
            view: 0,
            detail: 0
        }), Mn = On(jn), Nn, Pn, Fn, In = h({}, jn, {
            screenX: 0,
            screenY: 0,
            clientX: 0,
            clientY: 0,
            pageX: 0,
            pageY: 0,
            ctrlKey: 0,
            shiftKey: 0,
            altKey: 0,
            metaKey: 0,
            getModifierState: qn,
            button: 0,
            buttons: 0,
            relatedTarget: function (e) {
                return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget
            },
            movementX: function (e) {
                return `movementX` in e ? e.movementX : (e !== Fn && (Fn && e.type === `mousemove` ? (Nn = e.screenX - Fn.screenX,
                    Pn = e.screenY - Fn.screenY) : Pn = Nn = 0,
                    Fn = e),
                    Nn)
            },
            movementY: function (e) {
                return `movementY` in e ? e.movementY : Pn
            }
        }), Ln = On(In), Rn = On(h({}, In, {
            dataTransfer: 0
        })), zn = On(h({}, jn, {
            relatedTarget: 0
        })), Bn = On(h({}, kn, {
            animationName: 0,
            elapsedTime: 0,
            pseudoElement: 0
        })), Vn = On(h({}, kn, {
            clipboardData: function (e) {
                return `clipboardData` in e ? e.clipboardData : window.clipboardData
            }
        })), Hn = On(h({}, kn, {
            data: 0
        })), Un = {
            Esc: `Escape`,
            Spacebar: ` `,
            Left: `ArrowLeft`,
            Up: `ArrowUp`,
            Right: `ArrowRight`,
            Down: `ArrowDown`,
            Del: `Delete`,
            Win: `OS`,
            Menu: `ContextMenu`,
            Apps: `ContextMenu`,
            Scroll: `ScrollLock`,
            MozPrintableKey: `Unidentified`
        }, Wn = {
            8: `Backspace`,
            9: `Tab`,
            12: `Clear`,
            13: `Enter`,
            16: `Shift`,
            17: `Control`,
            18: `Alt`,
            19: `Pause`,
            20: `CapsLock`,
            27: `Escape`,
            32: ` `,
            33: `PageUp`,
            34: `PageDown`,
            35: `End`,
            36: `Home`,
            37: `ArrowLeft`,
            38: `ArrowUp`,
            39: `ArrowRight`,
            40: `ArrowDown`,
            45: `Insert`,
            46: `Delete`,
            112: `F1`,
            113: `F2`,
            114: `F3`,
            115: `F4`,
            116: `F5`,
            117: `F6`,
            118: `F7`,
            119: `F8`,
            120: `F9`,
            121: `F10`,
            122: `F11`,
            123: `F12`,
            144: `NumLock`,
            145: `ScrollLock`,
            224: `Meta`
        }, Gn = {
            Alt: `altKey`,
            Control: `ctrlKey`,
            Meta: `metaKey`,
            Shift: `shiftKey`
        };
        function Kn(e) {
            var t = this.nativeEvent;
            return t.getModifierState ? t.getModifierState(e) : (e = Gn[e]) ? !!t[e] : !1
        }
        function qn() {
            return Kn
        }
        var Jn = On(h({}, jn, {
            key: function (e) {
                if (e.key) {
                    var t = Un[e.key] || e.key;
                    if (t !== `Unidentified`)
                        return t
                }
                return e.type === `keypress` ? (e = Tn(e),
                    e === 13 ? `Enter` : String.fromCharCode(e)) : e.type === `keydown` || e.type === `keyup` ? Wn[e.keyCode] || `Unidentified` : ``
            },
            code: 0,
            location: 0,
            ctrlKey: 0,
            shiftKey: 0,
            altKey: 0,
            metaKey: 0,
            repeat: 0,
            locale: 0,
            getModifierState: qn,
            charCode: function (e) {
                return e.type === `keypress` ? Tn(e) : 0
            },
            keyCode: function (e) {
                return e.type === `keydown` || e.type === `keyup` ? e.keyCode : 0
            },
            which: function (e) {
                return e.type === `keypress` ? Tn(e) : e.type === `keydown` || e.type === `keyup` ? e.keyCode : 0
            }
        }))
            , Yn = On(h({}, In, {
                pointerId: 0,
                width: 0,
                height: 0,
                pressure: 0,
                tangentialPressure: 0,
                tiltX: 0,
                tiltY: 0,
                twist: 0,
                pointerType: 0,
                isPrimary: 0
            }))
            , Xn = On(h({}, jn, {
                touches: 0,
                targetTouches: 0,
                changedTouches: 0,
                altKey: 0,
                metaKey: 0,
                ctrlKey: 0,
                shiftKey: 0,
                getModifierState: qn
            }))
            , Zn = On(h({}, kn, {
                propertyName: 0,
                elapsedTime: 0,
                pseudoElement: 0
            }))
            , Qn = On(h({}, In, {
                deltaX: function (e) {
                    return `deltaX` in e ? e.deltaX : `wheelDeltaX` in e ? -e.wheelDeltaX : 0
                },
                deltaY: function (e) {
                    return `deltaY` in e ? e.deltaY : `wheelDeltaY` in e ? -e.wheelDeltaY : `wheelDelta` in e ? -e.wheelDelta : 0
                },
                deltaZ: 0,
                deltaMode: 0
            }))
            , $n = On(h({}, kn, {
                newState: 0,
                oldState: 0
            }))
            , er = [9, 13, 27, 32]
            , tr = vn && `CompositionEvent` in window
            , nr = null;
        vn && `documentMode` in document && (nr = document.documentMode);
        var rr = vn && `TextEvent` in window && !nr
            , ir = vn && (!tr || nr && 8 < nr && 11 >= nr)
            , ar = ` `
            , or = !1;
        function sr(e, t) {
            switch (e) {
                case `keyup`:
                    return er.indexOf(t.keyCode) !== -1;
                case `keydown`:
                    return t.keyCode !== 229;
                case `keypress`:
                case `mousedown`:
                case `focusout`:
                    return !0;
                default:
                    return !1
            }
        }
        function cr(e) {
            return e = e.detail,
                typeof e == `object` && `data` in e ? e.data : null
        }
        var lr = !1;
        function ur(e, t) {
            switch (e) {
                case `compositionend`:
                    return cr(t);
                case `keypress`:
                    return t.which === 32 ? (or = !0,
                        ar) : null;
                case `textInput`:
                    return e = t.data,
                        e === ar && or ? null : e;
                default:
                    return null
            }
        }
        function dr(e, t) {
            if (lr)
                return e === `compositionend` || !tr && sr(e, t) ? (e = wn(),
                    Cn = Sn = xn = null,
                    lr = !1,
                    e) : null;
            switch (e) {
                case `paste`:
                    return null;
                case `keypress`:
                    if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
                        if (t.char && 1 < t.char.length)
                            return t.char;
                        if (t.which)
                            return String.fromCharCode(t.which)
                    }
                    return null;
                case `compositionend`:
                    return ir && t.locale !== `ko` ? null : t.data;
                default:
                    return null
            }
        }
        var fr = {
            color: !0,
            date: !0,
            datetime: !0,
            "datetime-local": !0,
            email: !0,
            month: !0,
            number: !0,
            password: !0,
            range: !0,
            search: !0,
            tel: !0,
            text: !0,
            time: !0,
            url: !0,
            week: !0
        };
        function pr(e) {
            var t = e && e.nodeName && e.nodeName.toLowerCase();
            return t === `input` ? !!fr[e.type] : t === `textarea`
        }
        function mr(e, t, n, r) {
            fn ? pn ? pn.push(r) : pn = [r] : fn = r,
                t = Ed(t, `onChange`),
                0 < t.length && (n = new An(`onChange`, `change`, null, n, r),
                    e.push({
                        event: n,
                        listeners: t
                    }))
        }
        var hr = null
            , gr = null;
        function _r(e) {
            yd(e, 0)
        }
        function vr(e) {
            if (Wt(Et(e)))
                return e
        }
        function yr(e, t) {
            if (e === `change`)
                return t
        }
        var br = !1;
        if (vn) {
            var xr;
            if (vn) {
                var Sr = `oninput` in document;
                if (!Sr) {
                    var Cr = document.createElement(`div`);
                    Cr.setAttribute(`oninput`, `return;`),
                        Sr = typeof Cr.oninput == `function`
                }
                xr = Sr
            } else
                xr = !1;
            br = xr && (!document.documentMode || 9 < document.documentMode)
        }
        function wr() {
            hr && (hr.detachEvent(`onpropertychange`, Tr),
                gr = hr = null)
        }
        function Tr(e) {
            if (e.propertyName === `value` && vr(gr)) {
                var t = [];
                mr(t, gr, e, dn(e)),
                    gn(_r, t)
            }
        }
        function Er(e, t, n) {
            e === `focusin` ? (wr(),
                hr = t,
                gr = n,
                hr.attachEvent(`onpropertychange`, Tr)) : e === `focusout` && wr()
        }
        function Dr(e) {
            if (e === `selectionchange` || e === `keyup` || e === `keydown`)
                return vr(gr)
        }
        function Or(e, t) {
            if (e === `click`)
                return vr(t)
        }
        function kr(e, t) {
            if (e === `input` || e === `change`)
                return vr(t)
        }
        function Ar(e, t) {
            return e === t && (e !== 0 || 1 / e == 1 / t) || e !== e && t !== t
        }
        var jr = typeof Object.is == `function` ? Object.is : Ar;
        function Mr(e, t) {
            if (jr(e, t))
                return !0;
            if (typeof e != `object` || !e || typeof t != `object` || !t)
                return !1;
            var n = Object.keys(e)
                , r = Object.keys(t);
            if (n.length !== r.length)
                return !1;
            for (r = 0; r < n.length; r++) {
                var i = n[r];
                if (!ke.call(t, i) || !jr(e[i], t[i]))
                    return !1
            }
            return !0
        }
        function Nr(e) {
            for (; e && e.firstChild;)
                e = e.firstChild;
            return e
        }
        function Pr(e, t) {
            var n = Nr(e);
            e = 0;
            for (var r; n;) {
                if (n.nodeType === 3) {
                    if (r = e + n.textContent.length,
                        e <= t && r >= t)
                        return {
                            node: n,
                            offset: t - e
                        };
                    e = r
                }
                a: {
                    for (; n;) {
                        if (n.nextSibling) {
                            n = n.nextSibling;
                            break a
                        }
                        n = n.parentNode
                    }
                    n = void 0
                }
                n = Nr(n)
            }
        }
        function Fr(e, t) {
            return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? Fr(e, t.parentNode) : `contains` in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1
        }
        function Ir(e) {
            e = e != null && e.ownerDocument != null && e.ownerDocument.defaultView != null ? e.ownerDocument.defaultView : window;
            for (var t = Gt(e.document); t instanceof e.HTMLIFrameElement;) {
                try {
                    var n = typeof t.contentWindow.location.href == `string`
                } catch {
                    n = !1
                }
                if (n)
                    e = t.contentWindow;
                else
                    break;
                t = Gt(e.document)
            }
            return t
        }
        function Lr(e) {
            var t = e && e.nodeName && e.nodeName.toLowerCase();
            return t && (t === `input` && (e.type === `text` || e.type === `search` || e.type === `tel` || e.type === `url` || e.type === `password`) || t === `textarea` || e.contentEditable === `true`)
        }
        var Rr = vn && `documentMode` in document && 11 >= document.documentMode
            , zr = null
            , Br = null
            , Vr = null
            , Hr = !1;
        function Ur(e, t, n) {
            var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
            Hr || zr == null || zr !== Gt(r) || (r = zr,
                `selectionStart` in r && Lr(r) ? r = {
                    start: r.selectionStart,
                    end: r.selectionEnd
                } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(),
                    r = {
                        anchorNode: r.anchorNode,
                        anchorOffset: r.anchorOffset,
                        focusNode: r.focusNode,
                        focusOffset: r.focusOffset
                    }),
                Vr && Mr(Vr, r) || (Vr = r,
                    r = Ed(Br, `onSelect`),
                    0 < r.length && (t = new An(`onSelect`, `select`, null, t, n),
                        e.push({
                            event: t,
                            listeners: r
                        }),
                        t.target = zr)))
        }
        function Wr(e, t) {
            var n = {};
            return n[e.toLowerCase()] = t.toLowerCase(),
                n[`Webkit` + e] = `webkit` + t,
                n[`Moz` + e] = `moz` + t,
                n
        }
        var Gr = {
            animationend: Wr(`Animation`, `AnimationEnd`),
            animationiteration: Wr(`Animation`, `AnimationIteration`),
            animationstart: Wr(`Animation`, `AnimationStart`),
            transitionrun: Wr(`Transition`, `TransitionRun`),
            transitionstart: Wr(`Transition`, `TransitionStart`),
            transitioncancel: Wr(`Transition`, `TransitionCancel`),
            transitionend: Wr(`Transition`, `TransitionEnd`)
        }
            , Kr = {}
            , qr = {};
        vn && (qr = document.createElement(`div`).style,
            `AnimationEvent` in window || (delete Gr.animationend.animation,
                delete Gr.animationiteration.animation,
                delete Gr.animationstart.animation),
            `TransitionEvent` in window || delete Gr.transitionend.transition);
        function Jr(e) {
            if (Kr[e])
                return Kr[e];
            if (!Gr[e])
                return e;
            var t = Gr[e], n;
            for (n in t)
                if (t.hasOwnProperty(n) && n in qr)
                    return Kr[e] = t[n];
            return e
        }
        var Yr = Jr(`animationend`)
            , Xr = Jr(`animationiteration`)
            , Zr = Jr(`animationstart`)
            , Qr = Jr(`transitionrun`)
            , $r = Jr(`transitionstart`)
            , ei = Jr(`transitioncancel`)
            , ti = Jr(`transitionend`)
            , ni = new Map
            , ri = `abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel`.split(` `);
        ri.push(`scrollEnd`);
        function ii(e, t) {
            ni.set(e, t),
                jt(t, [e])
        }
        var ai = typeof reportError == `function` ? reportError : function (e) {
            if (typeof window == `object` && typeof window.ErrorEvent == `function`) {
                var t = new window.ErrorEvent(`error`, {
                    bubbles: !0,
                    cancelable: !0,
                    message: typeof e == `object` && e && typeof e.message == `string` ? String(e.message) : String(e),
                    error: e
                });
                if (!window.dispatchEvent(t))
                    return
            } else if (typeof process == `object` && typeof process.emit == `function`) {
                process.emit(`uncaughtException`, e);
                return
            }
            console.error(e)
        }
            , oi = []
            , si = 0
            , ci = 0;
        function li() {
            for (var e = si, t = ci = si = 0; t < e;) {
                var n = oi[t];
                oi[t++] = null;
                var r = oi[t];
                oi[t++] = null;
                var i = oi[t];
                oi[t++] = null;
                var a = oi[t];
                if (oi[t++] = null,
                    r !== null && i !== null) {
                    var o = r.pending;
                    o === null ? i.next = i : (i.next = o.next,
                        o.next = i),
                        r.pending = i
                }
                a !== 0 && pi(n, i, a)
            }
        }
        function ui(e, t, n, r) {
            oi[si++] = e,
                oi[si++] = t,
                oi[si++] = n,
                oi[si++] = r,
                ci |= r,
                e.lanes |= r,
                e = e.alternate,
                e !== null && (e.lanes |= r)
        }
        function di(e, t, n, r) {
            return ui(e, t, n, r),
                mi(e)
        }
        function fi(e, t) {
            return ui(e, null, null, t),
                mi(e)
        }
        function pi(e, t, n) {
            e.lanes |= n;
            var r = e.alternate;
            r !== null && (r.lanes |= n);
            for (var i = !1, a = e.return; a !== null;)
                a.childLanes |= n,
                    r = a.alternate,
                    r !== null && (r.childLanes |= n),
                    a.tag === 22 && (e = a.stateNode,
                        e === null || e._visibility & 1 || (i = !0)),
                    e = a,
                    a = a.return;
            return e.tag === 3 ? (a = e.stateNode,
                i && t !== null && (i = 31 - Ke(n),
                    e = a.hiddenUpdates,
                    r = e[i],
                    r === null ? e[i] = [t] : r.push(t),
                    t.lane = n | 536870912),
                a) : null
        }
        function mi(e) {
            if (50 < du)
                throw du = 0,
                fu = null,
                Error(o(185));
            for (var t = e.return; t !== null;)
                e = t,
                    t = e.return;
            return e.tag === 3 ? e.stateNode : null
        }
        var hi = {};
        function gi(e, t, n, r) {
            this.tag = e,
                this.key = n,
                this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null,
                this.index = 0,
                this.refCleanup = this.ref = null,
                this.pendingProps = t,
                this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null,
                this.mode = r,
                this.subtreeFlags = this.flags = 0,
                this.deletions = null,
                this.childLanes = this.lanes = 0,
                this.alternate = null
        }
        function _i(e, t, n, r) {
            return new gi(e, t, n, r)
        }
        function vi(e) {
            return e = e.prototype,
                !(!e || !e.isReactComponent)
        }
        function yi(e, t) {
            var n = e.alternate;
            return n === null ? (n = _i(e.tag, t, e.key, e.mode),
                n.elementType = e.elementType,
                n.type = e.type,
                n.stateNode = e.stateNode,
                n.alternate = e,
                e.alternate = n) : (n.pendingProps = t,
                    n.type = e.type,
                    n.flags = 0,
                    n.subtreeFlags = 0,
                    n.deletions = null),
                n.flags = e.flags & 65011712,
                n.childLanes = e.childLanes,
                n.lanes = e.lanes,
                n.child = e.child,
                n.memoizedProps = e.memoizedProps,
                n.memoizedState = e.memoizedState,
                n.updateQueue = e.updateQueue,
                t = e.dependencies,
                n.dependencies = t === null ? null : {
                    lanes: t.lanes,
                    firstContext: t.firstContext
                },
                n.sibling = e.sibling,
                n.index = e.index,
                n.ref = e.ref,
                n.refCleanup = e.refCleanup,
                n
        }
        function bi(e, t) {
            e.flags &= 65011714;
            var n = e.alternate;
            return n === null ? (e.childLanes = 0,
                e.lanes = t,
                e.child = null,
                e.subtreeFlags = 0,
                e.memoizedProps = null,
                e.memoizedState = null,
                e.updateQueue = null,
                e.dependencies = null,
                e.stateNode = null) : (e.childLanes = n.childLanes,
                    e.lanes = n.lanes,
                    e.child = n.child,
                    e.subtreeFlags = 0,
                    e.deletions = null,
                    e.memoizedProps = n.memoizedProps,
                    e.memoizedState = n.memoizedState,
                    e.updateQueue = n.updateQueue,
                    e.type = n.type,
                    t = n.dependencies,
                    e.dependencies = t === null ? null : {
                        lanes: t.lanes,
                        firstContext: t.firstContext
                    }),
                e
        }
        function xi(e, t, n, r, i, a) {
            var s = 0;
            if (r = e,
                typeof e == `function`)
                vi(e) && (s = 1);
            else if (typeof e == `string`)
                s = Uf(e, n, he.current) ? 26 : e === `html` || e === `head` || e === `body` ? 27 : 5;
            else
                a: switch (e) {
                    case ae:
                        return e = _i(31, n, t, i),
                            e.elementType = ae,
                            e.lanes = a,
                            e;
                    case y:
                        return Si(n.children, i, a, t);
                    case b:
                        s = 8,
                            i |= 24;
                        break;
                    case x:
                        return e = _i(12, n, t, i | 2),
                            e.elementType = x,
                            e.lanes = a,
                            e;
                    case te:
                        return e = _i(13, n, t, i),
                            e.elementType = te,
                            e.lanes = a,
                            e;
                    case ne:
                        return e = _i(19, n, t, i),
                            e.elementType = ne,
                            e.lanes = a,
                            e;
                    default:
                        if (typeof e == `object` && e)
                            switch (e.$$typeof) {
                                case C:
                                    s = 10;
                                    break a;
                                case S:
                                    s = 9;
                                    break a;
                                case ee:
                                    s = 11;
                                    break a;
                                case re:
                                    s = 14;
                                    break a;
                                case ie:
                                    s = 16,
                                        r = null;
                                    break a
                            }
                        s = 29,
                            n = Error(o(130, e === null ? `null` : typeof e, ``)),
                            r = null
                }
            return t = _i(s, n, t, i),
                t.elementType = e,
                t.type = r,
                t.lanes = a,
                t
        }
        function Si(e, t, n, r) {
            return e = _i(7, e, r, t),
                e.lanes = n,
                e
        }
        function Ci(e, t, n) {
            return e = _i(6, e, null, t),
                e.lanes = n,
                e
        }
        function wi(e) {
            var t = _i(18, null, null, 0);
            return t.stateNode = e,
                t
        }
        function Ti(e, t, n) {
            return t = _i(4, e.children === null ? [] : e.children, e.key, t),
                t.lanes = n,
                t.stateNode = {
                    containerInfo: e.containerInfo,
                    pendingChildren: null,
                    implementation: e.implementation
                },
                t
        }
        var Ei = new WeakMap;
        function Di(e, t) {
            if (typeof e == `object` && e) {
                var n = Ei.get(e);
                return n === void 0 ? (t = {
                    value: e,
                    source: t,
                    stack: Oe(t)
                },
                    Ei.set(e, t),
                    t) : n
            }
            return {
                value: e,
                source: t,
                stack: Oe(t)
            }
        }
        var Oi = []
            , ki = 0
            , Ai = null
            , ji = 0
            , Mi = []
            , Ni = 0
            , Pi = null
            , Fi = 1
            , Ii = ``;
        function Li(e, t) {
            Oi[ki++] = ji,
                Oi[ki++] = Ai,
                Ai = e,
                ji = t
        }
        function Ri(e, t, n) {
            Mi[Ni++] = Fi,
                Mi[Ni++] = Ii,
                Mi[Ni++] = Pi,
                Pi = e;
            var r = Fi;
            e = Ii;
            var i = 32 - Ke(r) - 1;
            r &= ~(1 << i),
                n += 1;
            var a = 32 - Ke(t) + i;
            if (30 < a) {
                var o = i - i % 5;
                a = (r & (1 << o) - 1).toString(32),
                    r >>= o,
                    i -= o,
                    Fi = 1 << 32 - Ke(t) + i | n << i | r,
                    Ii = a + e
            } else
                Fi = 1 << a | n << i | r,
                    Ii = e
        }
        function zi(e) {
            e.return !== null && (Li(e, 1),
                Ri(e, 1, 0))
        }
        function Bi(e) {
            for (; e === Ai;)
                Ai = Oi[--ki],
                    Oi[ki] = null,
                    ji = Oi[--ki],
                    Oi[ki] = null;
            for (; e === Pi;)
                Pi = Mi[--Ni],
                    Mi[Ni] = null,
                    Ii = Mi[--Ni],
                    Mi[Ni] = null,
                    Fi = Mi[--Ni],
                    Mi[Ni] = null
        }
        function Vi(e, t) {
            Mi[Ni++] = Fi,
                Mi[Ni++] = Ii,
                Mi[Ni++] = Pi,
                Fi = t.id,
                Ii = t.overflow,
                Pi = e
        }
        var Hi = null
            , A = null
            , j = !1
            , Ui = null
            , Wi = !1
            , Gi = Error(o(519));
        function Ki(e) {
            throw Qi(Di(Error(o(418, 1 < arguments.length && arguments[1] !== void 0 && arguments[1] ? `text` : `HTML`, ``)), e)),
            Gi
        }
        function qi(e) {
            var t = e.stateNode
                , n = e.type
                , r = e.memoizedProps;
            switch (t[ht] = e,
            t[gt] = r,
            n) {
                case `dialog`:
                    Q(`cancel`, t),
                        Q(`close`, t);
                    break;
                case `iframe`:
                case `object`:
                case `embed`:
                    Q(`load`, t);
                    break;
                case `video`:
                case `audio`:
                    for (n = 0; n < _d.length; n++)
                        Q(_d[n], t);
                    break;
                case `source`:
                    Q(`error`, t);
                    break;
                case `img`:
                case `image`:
                case `link`:
                    Q(`error`, t),
                        Q(`load`, t);
                    break;
                case `details`:
                    Q(`toggle`, t);
                    break;
                case `input`:
                    Q(`invalid`, t),
                        Yt(t, r.value, r.defaultValue, r.checked, r.defaultChecked, r.type, r.name, !0);
                    break;
                case `select`:
                    Q(`invalid`, t);
                    break;
                case `textarea`:
                    Q(`invalid`, t),
                        $t(t, r.value, r.defaultValue, r.children)
            }
            n = r.children,
                typeof n != `string` && typeof n != `number` && typeof n != `bigint` || t.textContent === `` + n || !0 === r.suppressHydrationWarning || Md(t.textContent, n) ? (r.popover != null && (Q(`beforetoggle`, t),
                    Q(`toggle`, t)),
                    r.onScroll != null && Q(`scroll`, t),
                    r.onScrollEnd != null && Q(`scrollend`, t),
                    r.onClick != null && (t.onclick = ln),
                    t = !0) : t = !1,
                t || Ki(e, !0)
        }
        function Ji(e) {
            for (Hi = e.return; Hi;)
                switch (Hi.tag) {
                    case 5:
                    case 31:
                    case 13:
                        Wi = !1;
                        return;
                    case 27:
                    case 3:
                        Wi = !0;
                        return;
                    default:
                        Hi = Hi.return
                }
        }
        function Yi(e) {
            if (e !== Hi)
                return !1;
            if (!j)
                return Ji(e),
                    j = !0,
                    !1;
            var t = e.tag, n;
            if ((n = t !== 3 && t !== 27) && ((n = t === 5) && (n = e.type,
                n = n === `form` || n === `button` || Ud(e.type, e.memoizedProps)),
                n = !n),
                n && A && Ki(e),
                Ji(e),
                t === 13) {
                if (e = e.memoizedState,
                    e = e === null ? null : e.dehydrated,
                    !e)
                    throw Error(o(317));
                A = uf(e)
            } else if (t === 31) {
                if (e = e.memoizedState,
                    e = e === null ? null : e.dehydrated,
                    !e)
                    throw Error(o(317));
                A = uf(e)
            } else
                t === 27 ? (t = A,
                    Zd(e.type) ? (e = lf,
                        lf = null,
                        A = e) : A = t) : A = Hi ? cf(e.stateNode.nextSibling) : null;
            return !0
        }
        function Xi() {
            A = Hi = null,
                j = !1
        }
        function Zi() {
            var e = Ui;
            return e !== null && (Ql === null ? Ql = e : Ql.push.apply(Ql, e),
                Ui = null),
                e
        }
        function Qi(e) {
            Ui === null ? Ui = [e] : Ui.push(e)
        }
        var $i = me(null)
            , ea = null
            , ta = null;
        function na(e, t, n) {
            O($i, t._currentValue),
                t._currentValue = n
        }
        function ra(e) {
            e._currentValue = $i.current,
                D($i)
        }
        function ia(e, t, n) {
            for (; e !== null;) {
                var r = e.alternate;
                if ((e.childLanes & t) === t ? r !== null && (r.childLanes & t) !== t && (r.childLanes |= t) : (e.childLanes |= t,
                    r !== null && (r.childLanes |= t)),
                    e === n)
                    break;
                e = e.return
            }
        }
        function aa(e, t, n, r) {
            var i = e.child;
            for (i !== null && (i.return = e); i !== null;) {
                var a = i.dependencies;
                if (a !== null) {
                    var s = i.child;
                    a = a.firstContext;
                    a: for (; a !== null;) {
                        var c = a;
                        a = i;
                        for (var l = 0; l < t.length; l++)
                            if (c.context === t[l]) {
                                a.lanes |= n,
                                    c = a.alternate,
                                    c !== null && (c.lanes |= n),
                                    ia(a.return, n, e),
                                    r || (s = null);
                                break a
                            }
                        a = c.next
                    }
                } else if (i.tag === 18) {
                    if (s = i.return,
                        s === null)
                        throw Error(o(341));
                    s.lanes |= n,
                        a = s.alternate,
                        a !== null && (a.lanes |= n),
                        ia(s, n, e),
                        s = null
                } else
                    s = i.child;
                if (s !== null)
                    s.return = i;
                else
                    for (s = i; s !== null;) {
                        if (s === e) {
                            s = null;
                            break
                        }
                        if (i = s.sibling,
                            i !== null) {
                            i.return = s.return,
                                s = i;
                            break
                        }
                        s = s.return
                    }
                i = s
            }
        }
        function oa(e, t, n, r) {
            e = null;
            for (var i = t, a = !1; i !== null;) {
                if (!a) {
                    if (i.flags & 524288)
                        a = !0;
                    else if (i.flags & 262144)
                        break
                }
                if (i.tag === 10) {
                    var s = i.alternate;
                    if (s === null)
                        throw Error(o(387));
                    if (s = s.memoizedProps,
                        s !== null) {
                        var c = i.type;
                        jr(i.pendingProps.value, s.value) || (e === null ? e = [c] : e.push(c))
                    }
                } else if (i === ve.current) {
                    if (s = i.alternate,
                        s === null)
                        throw Error(o(387));
                    s.memoizedState.memoizedState !== i.memoizedState.memoizedState && (e === null ? e = [Qf] : e.push(Qf))
                }
                i = i.return
            }
            e !== null && aa(t, e, n, r),
                t.flags |= 262144
        }
        function sa(e) {
            for (e = e.firstContext; e !== null;) {
                if (!jr(e.context._currentValue, e.memoizedValue))
                    return !0;
                e = e.next
            }
            return !1
        }
        function ca(e) {
            ea = e,
                ta = null,
                e = e.dependencies,
                e !== null && (e.firstContext = null)
        }
        function la(e) {
            return da(ea, e)
        }
        function ua(e, t) {
            return ea === null && ca(e),
                da(e, t)
        }
        function da(e, t) {
            var n = t._currentValue;
            if (t = {
                context: t,
                memoizedValue: n,
                next: null
            },
                ta === null) {
                if (e === null)
                    throw Error(o(308));
                ta = t,
                    e.dependencies = {
                        lanes: 0,
                        firstContext: t
                    },
                    e.flags |= 524288
            } else
                ta = ta.next = t;
            return n
        }
        var fa = typeof AbortController < `u` ? AbortController : function () {
            var e = []
                , t = this.signal = {
                    aborted: !1,
                    addEventListener: function (t, n) {
                        e.push(n)
                    }
                };
            this.abort = function () {
                t.aborted = !0,
                    e.forEach(function (e) {
                        return e()
                    })
            }
        }
            , pa = t.unstable_scheduleCallback
            , ma = t.unstable_NormalPriority
            , M = {
                $$typeof: C,
                Consumer: null,
                Provider: null,
                _currentValue: null,
                _currentValue2: null,
                _threadCount: 0
            };
        function ha() {
            return {
                controller: new fa,
                data: new Map,
                refCount: 0
            }
        }
        function ga(e) {
            e.refCount--,
                e.refCount === 0 && pa(ma, function () {
                    e.controller.abort()
                })
        }
        var _a = null
            , va = 0
            , ya = 0
            , ba = null;
        function xa(e, t) {
            if (_a === null) {
                var n = _a = [];
                va = 0,
                    ya = dd(),
                    ba = {
                        status: `pending`,
                        value: void 0,
                        then: function (e) {
                            n.push(e)
                        }
                    }
            }
            return va++,
                t.then(Sa, Sa),
                t
        }
        function Sa() {
            if (--va === 0 && _a !== null) {
                ba !== null && (ba.status = `fulfilled`);
                var e = _a;
                _a = null,
                    ya = 0,
                    ba = null;
                for (var t = 0; t < e.length; t++)
                    (0,
                        e[t])()
            }
        }
        function Ca(e, t) {
            var n = []
                , r = {
                    status: `pending`,
                    value: null,
                    reason: null,
                    then: function (e) {
                        n.push(e)
                    }
                };
            return e.then(function () {
                r.status = `fulfilled`,
                    r.value = t;
                for (var e = 0; e < n.length; e++)
                    (0,
                        n[e])(t)
            }, function (e) {
                for (r.status = `rejected`,
                    r.reason = e,
                    e = 0; e < n.length; e++)
                    (0,
                        n[e])(void 0)
            }),
                r
        }
        var wa = T.S;
        T.S = function (e, t) {
            tu = Pe(),
                typeof t == `object` && t && typeof t.then == `function` && xa(e, t),
                wa !== null && wa(e, t)
        }
            ;
        var Ta = me(null);
        function Ea() {
            var e = Ta.current;
            return e === null ? G.pooledCache : e
        }
        function Da(e, t) {
            t === null ? O(Ta, Ta.current) : O(Ta, t.pool)
        }
        function Oa() {
            var e = Ea();
            return e === null ? null : {
                parent: M._currentValue,
                pool: e
            }
        }
        var ka = Error(o(460))
            , Aa = Error(o(474))
            , ja = Error(o(542))
            , Ma = {
                then: function () { }
            };
        function Na(e) {
            return e = e.status,
                e === `fulfilled` || e === `rejected`
        }
        function Pa(e, t, n) {
            switch (n = e[n],
            n === void 0 ? e.push(t) : n !== t && (t.then(ln, ln),
                t = n),
            t.status) {
                case `fulfilled`:
                    return t.value;
                case `rejected`:
                    throw e = t.reason,
                    Ra(e),
                    e;
                default:
                    if (typeof t.status == `string`)
                        t.then(ln, ln);
                    else {
                        if (e = G,
                            e !== null && 100 < e.shellSuspendCounter)
                            throw Error(o(482));
                        e = t,
                            e.status = `pending`,
                            e.then(function (e) {
                                if (t.status === `pending`) {
                                    var n = t;
                                    n.status = `fulfilled`,
                                        n.value = e
                                }
                            }, function (e) {
                                if (t.status === `pending`) {
                                    var n = t;
                                    n.status = `rejected`,
                                        n.reason = e
                                }
                            })
                    }
                    switch (t.status) {
                        case `fulfilled`:
                            return t.value;
                        case `rejected`:
                            throw e = t.reason,
                            Ra(e),
                            e
                    }
                    throw Ia = t,
                    ka
            }
        }
        function Fa(e) {
            try {
                var t = e._init;
                return t(e._payload)
            } catch (e) {
                throw typeof e == `object` && e && typeof e.then == `function` ? (Ia = e,
                    ka) : e
            }
        }
        var Ia = null;
        function La() {
            if (Ia === null)
                throw Error(o(459));
            var e = Ia;
            return Ia = null,
                e
        }
        function Ra(e) {
            if (e === ka || e === ja)
                throw Error(o(483))
        }
        var za = null
            , Ba = 0;
        function Va(e) {
            var t = Ba;
            return Ba += 1,
                za === null && (za = []),
                Pa(za, e, t)
        }
        function Ha(e, t) {
            t = t.props.ref,
                e.ref = t === void 0 ? null : t
        }
        function Ua(e, t) {
            throw t.$$typeof === g ? Error(o(525)) : (e = Object.prototype.toString.call(t),
                Error(o(31, e === `[object Object]` ? `object with keys {` + Object.keys(t).join(`, `) + `}` : e)))
        }
        function Wa(e) {
            function t(t, n) {
                if (e) {
                    var r = t.deletions;
                    r === null ? (t.deletions = [n],
                        t.flags |= 16) : r.push(n)
                }
            }
            function n(n, r) {
                if (!e)
                    return null;
                for (; r !== null;)
                    t(n, r),
                        r = r.sibling;
                return null
            }
            function r(e) {
                for (var t = new Map; e !== null;)
                    e.key === null ? t.set(e.index, e) : t.set(e.key, e),
                        e = e.sibling;
                return t
            }
            function i(e, t) {
                return e = yi(e, t),
                    e.index = 0,
                    e.sibling = null,
                    e
            }
            function a(t, n, r) {
                return t.index = r,
                    e ? (r = t.alternate,
                        r === null ? (t.flags |= 67108866,
                            n) : (r = r.index,
                                r < n ? (t.flags |= 67108866,
                                    n) : r)) : (t.flags |= 1048576,
                                        n)
            }
            function s(t) {
                return e && t.alternate === null && (t.flags |= 67108866),
                    t
            }
            function c(e, t, n, r) {
                return t === null || t.tag !== 6 ? (t = Ci(n, e.mode, r),
                    t.return = e,
                    t) : (t = i(t, n),
                        t.return = e,
                        t)
            }
            function l(e, t, n, r) {
                var a = n.type;
                return a === y ? d(e, t, n.props.children, r, n.key) : t !== null && (t.elementType === a || typeof a == `object` && a && a.$$typeof === ie && Fa(a) === t.type) ? (t = i(t, n.props),
                    Ha(t, n),
                    t.return = e,
                    t) : (t = xi(n.type, n.key, n.props, null, e.mode, r),
                        Ha(t, n),
                        t.return = e,
                        t)
            }
            function u(e, t, n, r) {
                return t === null || t.tag !== 4 || t.stateNode.containerInfo !== n.containerInfo || t.stateNode.implementation !== n.implementation ? (t = Ti(n, e.mode, r),
                    t.return = e,
                    t) : (t = i(t, n.children || []),
                        t.return = e,
                        t)
            }
            function d(e, t, n, r, a) {
                return t === null || t.tag !== 7 ? (t = Si(n, e.mode, r, a),
                    t.return = e,
                    t) : (t = i(t, n),
                        t.return = e,
                        t)
            }
            function f(e, t, n) {
                if (typeof t == `string` && t !== `` || typeof t == `number` || typeof t == `bigint`)
                    return t = Ci(`` + t, e.mode, n),
                        t.return = e,
                        t;
                if (typeof t == `object` && t) {
                    switch (t.$$typeof) {
                        case _:
                            return n = xi(t.type, t.key, t.props, null, e.mode, n),
                                Ha(n, t),
                                n.return = e,
                                n;
                        case v:
                            return t = Ti(t, e.mode, n),
                                t.return = e,
                                t;
                        case ie:
                            return t = Fa(t),
                                f(e, t, n)
                    }
                    if (ue(t) || se(t))
                        return t = Si(t, e.mode, n, null),
                            t.return = e,
                            t;
                    if (typeof t.then == `function`)
                        return f(e, Va(t), n);
                    if (t.$$typeof === C)
                        return f(e, ua(e, t), n);
                    Ua(e, t)
                }
                return null
            }
            function p(e, t, n, r) {
                var i = t === null ? null : t.key;
                if (typeof n == `string` && n !== `` || typeof n == `number` || typeof n == `bigint`)
                    return i === null ? c(e, t, `` + n, r) : null;
                if (typeof n == `object` && n) {
                    switch (n.$$typeof) {
                        case _:
                            return n.key === i ? l(e, t, n, r) : null;
                        case v:
                            return n.key === i ? u(e, t, n, r) : null;
                        case ie:
                            return n = Fa(n),
                                p(e, t, n, r)
                    }
                    if (ue(n) || se(n))
                        return i === null ? d(e, t, n, r, null) : null;
                    if (typeof n.then == `function`)
                        return p(e, t, Va(n), r);
                    if (n.$$typeof === C)
                        return p(e, t, ua(e, n), r);
                    Ua(e, n)
                }
                return null
            }
            function m(e, t, n, r, i) {
                if (typeof r == `string` && r !== `` || typeof r == `number` || typeof r == `bigint`)
                    return e = e.get(n) || null,
                        c(t, e, `` + r, i);
                if (typeof r == `object` && r) {
                    switch (r.$$typeof) {
                        case _:
                            return e = e.get(r.key === null ? n : r.key) || null,
                                l(t, e, r, i);
                        case v:
                            return e = e.get(r.key === null ? n : r.key) || null,
                                u(t, e, r, i);
                        case ie:
                            return r = Fa(r),
                                m(e, t, n, r, i)
                    }
                    if (ue(r) || se(r))
                        return e = e.get(n) || null,
                            d(t, e, r, i, null);
                    if (typeof r.then == `function`)
                        return m(e, t, n, Va(r), i);
                    if (r.$$typeof === C)
                        return m(e, t, n, ua(t, r), i);
                    Ua(t, r)
                }
                return null
            }
            function h(i, o, s, c) {
                for (var l = null, u = null, d = o, h = o = 0, g = null; d !== null && h < s.length; h++) {
                    d.index > h ? (g = d,
                        d = null) : g = d.sibling;
                    var _ = p(i, d, s[h], c);
                    if (_ === null) {
                        d === null && (d = g);
                        break
                    }
                    e && d && _.alternate === null && t(i, d),
                        o = a(_, o, h),
                        u === null ? l = _ : u.sibling = _,
                        u = _,
                        d = g
                }
                if (h === s.length)
                    return n(i, d),
                        j && Li(i, h),
                        l;
                if (d === null) {
                    for (; h < s.length; h++)
                        d = f(i, s[h], c),
                            d !== null && (o = a(d, o, h),
                                u === null ? l = d : u.sibling = d,
                                u = d);
                    return j && Li(i, h),
                        l
                }
                for (d = r(d); h < s.length; h++)
                    g = m(d, i, h, s[h], c),
                        g !== null && (e && g.alternate !== null && d.delete(g.key === null ? h : g.key),
                            o = a(g, o, h),
                            u === null ? l = g : u.sibling = g,
                            u = g);
                return e && d.forEach(function (e) {
                    return t(i, e)
                }),
                    j && Li(i, h),
                    l
            }
            function g(i, s, c, l) {
                if (c == null)
                    throw Error(o(151));
                for (var u = null, d = null, h = s, g = s = 0, _ = null, v = c.next(); h !== null && !v.done; g++,
                    v = c.next()) {
                    h.index > g ? (_ = h,
                        h = null) : _ = h.sibling;
                    var y = p(i, h, v.value, l);
                    if (y === null) {
                        h === null && (h = _);
                        break
                    }
                    e && h && y.alternate === null && t(i, h),
                        s = a(y, s, g),
                        d === null ? u = y : d.sibling = y,
                        d = y,
                        h = _
                }
                if (v.done)
                    return n(i, h),
                        j && Li(i, g),
                        u;
                if (h === null) {
                    for (; !v.done; g++,
                        v = c.next())
                        v = f(i, v.value, l),
                            v !== null && (s = a(v, s, g),
                                d === null ? u = v : d.sibling = v,
                                d = v);
                    return j && Li(i, g),
                        u
                }
                for (h = r(h); !v.done; g++,
                    v = c.next())
                    v = m(h, i, g, v.value, l),
                        v !== null && (e && v.alternate !== null && h.delete(v.key === null ? g : v.key),
                            s = a(v, s, g),
                            d === null ? u = v : d.sibling = v,
                            d = v);
                return e && h.forEach(function (e) {
                    return t(i, e)
                }),
                    j && Li(i, g),
                    u
            }
            function b(e, r, a, c) {
                if (typeof a == `object` && a && a.type === y && a.key === null && (a = a.props.children),
                    typeof a == `object` && a) {
                    switch (a.$$typeof) {
                        case _:
                            a: {
                                for (var l = a.key; r !== null;) {
                                    if (r.key === l) {
                                        if (l = a.type,
                                            l === y) {
                                            if (r.tag === 7) {
                                                n(e, r.sibling),
                                                    c = i(r, a.props.children),
                                                    c.return = e,
                                                    e = c;
                                                break a
                                            }
                                        } else if (r.elementType === l || typeof l == `object` && l && l.$$typeof === ie && Fa(l) === r.type) {
                                            n(e, r.sibling),
                                                c = i(r, a.props),
                                                Ha(c, a),
                                                c.return = e,
                                                e = c;
                                            break a
                                        }
                                        n(e, r);
                                        break
                                    }
                                    t(e, r),
                                        r = r.sibling
                                }
                                a.type === y ? (c = Si(a.props.children, e.mode, c, a.key),
                                    c.return = e,
                                    e = c) : (c = xi(a.type, a.key, a.props, null, e.mode, c),
                                        Ha(c, a),
                                        c.return = e,
                                        e = c)
                            }
                            return s(e);
                        case v:
                            a: {
                                for (l = a.key; r !== null;) {
                                    if (r.key === l) {
                                        if (r.tag === 4 && r.stateNode.containerInfo === a.containerInfo && r.stateNode.implementation === a.implementation) {
                                            n(e, r.sibling),
                                                c = i(r, a.children || []),
                                                c.return = e,
                                                e = c;
                                            break a
                                        }
                                        n(e, r);
                                        break
                                    }
                                    t(e, r),
                                        r = r.sibling
                                }
                                c = Ti(a, e.mode, c),
                                    c.return = e,
                                    e = c
                            }
                            return s(e);
                        case ie:
                            return a = Fa(a),
                                b(e, r, a, c)
                    }
                    if (ue(a))
                        return h(e, r, a, c);
                    if (se(a)) {
                        if (l = se(a),
                            typeof l != `function`)
                            throw Error(o(150));
                        return a = l.call(a),
                            g(e, r, a, c)
                    }
                    if (typeof a.then == `function`)
                        return b(e, r, Va(a), c);
                    if (a.$$typeof === C)
                        return b(e, r, ua(e, a), c);
                    Ua(e, a)
                }
                return typeof a == `string` && a !== `` || typeof a == `number` || typeof a == `bigint` ? (a = `` + a,
                    r !== null && r.tag === 6 ? (n(e, r.sibling),
                        c = i(r, a),
                        c.return = e,
                        e = c) : (n(e, r),
                            c = Ci(a, e.mode, c),
                            c.return = e,
                            e = c),
                    s(e)) : n(e, r)
            }
            return function (e, t, n, r) {
                try {
                    Ba = 0;
                    var i = b(e, t, n, r);
                    return za = null,
                        i
                } catch (t) {
                    if (t === ka || t === ja)
                        throw t;
                    var a = _i(29, t, null, e.mode);
                    return a.lanes = r,
                        a.return = e,
                        a
                }
            }
        }
        var Ga = Wa(!0)
            , Ka = Wa(!1)
            , qa = !1;
        function Ja(e) {
            e.updateQueue = {
                baseState: e.memoizedState,
                firstBaseUpdate: null,
                lastBaseUpdate: null,
                shared: {
                    pending: null,
                    lanes: 0,
                    hiddenCallbacks: null
                },
                callbacks: null
            }
        }
        function Ya(e, t) {
            e = e.updateQueue,
                t.updateQueue === e && (t.updateQueue = {
                    baseState: e.baseState,
                    firstBaseUpdate: e.firstBaseUpdate,
                    lastBaseUpdate: e.lastBaseUpdate,
                    shared: e.shared,
                    callbacks: null
                })
        }
        function Xa(e) {
            return {
                lane: e,
                tag: 0,
                payload: null,
                callback: null,
                next: null
            }
        }
        function Za(e, t, n) {
            var r = e.updateQueue;
            if (r === null)
                return null;
            if (r = r.shared,
                W & 2) {
                var i = r.pending;
                return i === null ? t.next = t : (t.next = i.next,
                    i.next = t),
                    r.pending = t,
                    t = mi(e),
                    pi(e, null, n),
                    t
            }
            return ui(e, r, t, n),
                mi(e)
        }
        function Qa(e, t, n) {
            if (t = t.updateQueue,
                t !== null && (t = t.shared,
                    n & 4194048)) {
                var r = t.lanes;
                r &= e.pendingLanes,
                    n |= r,
                    t.lanes = n,
                    ct(e, n)
            }
        }
        function $a(e, t) {
            var n = e.updateQueue
                , r = e.alternate;
            if (r !== null && (r = r.updateQueue,
                n === r)) {
                var i = null
                    , a = null;
                if (n = n.firstBaseUpdate,
                    n !== null) {
                    do {
                        var o = {
                            lane: n.lane,
                            tag: n.tag,
                            payload: n.payload,
                            callback: null,
                            next: null
                        };
                        a === null ? i = a = o : a = a.next = o,
                            n = n.next
                    } while (n !== null);
                    a === null ? i = a = t : a = a.next = t
                } else
                    i = a = t;
                n = {
                    baseState: r.baseState,
                    firstBaseUpdate: i,
                    lastBaseUpdate: a,
                    shared: r.shared,
                    callbacks: r.callbacks
                },
                    e.updateQueue = n;
                return
            }
            e = n.lastBaseUpdate,
                e === null ? n.firstBaseUpdate = t : e.next = t,
                n.lastBaseUpdate = t
        }
        var eo = !1;
        function to() {
            if (eo) {
                var e = ba;
                if (e !== null)
                    throw e
            }
        }
        function no(e, t, n, r) {
            eo = !1;
            var i = e.updateQueue;
            qa = !1;
            var a = i.firstBaseUpdate
                , o = i.lastBaseUpdate
                , s = i.shared.pending;
            if (s !== null) {
                i.shared.pending = null;
                var c = s
                    , l = c.next;
                c.next = null,
                    o === null ? a = l : o.next = l,
                    o = c;
                var u = e.alternate;
                u !== null && (u = u.updateQueue,
                    s = u.lastBaseUpdate,
                    s !== o && (s === null ? u.firstBaseUpdate = l : s.next = l,
                        u.lastBaseUpdate = c))
            }
            if (a !== null) {
                var d = i.baseState;
                o = 0,
                    u = l = c = null,
                    s = a;
                do {
                    var f = s.lane & -536870913
                        , p = f !== s.lane;
                    if (p ? (q & f) === f : (r & f) === f) {
                        f !== 0 && f === ya && (eo = !0),
                            u !== null && (u = u.next = {
                                lane: 0,
                                tag: s.tag,
                                payload: s.payload,
                                callback: null,
                                next: null
                            });
                        a: {
                            var m = e
                                , g = s;
                            f = t;
                            var _ = n;
                            switch (g.tag) {
                                case 1:
                                    if (m = g.payload,
                                        typeof m == `function`) {
                                        d = m.call(_, d, f);
                                        break a
                                    }
                                    d = m;
                                    break a;
                                case 3:
                                    m.flags = m.flags & -65537 | 128;
                                case 0:
                                    if (m = g.payload,
                                        f = typeof m == `function` ? m.call(_, d, f) : m,
                                        f == null)
                                        break a;
                                    d = h({}, d, f);
                                    break a;
                                case 2:
                                    qa = !0
                            }
                        }
                        f = s.callback,
                            f !== null && (e.flags |= 64,
                                p && (e.flags |= 8192),
                                p = i.callbacks,
                                p === null ? i.callbacks = [f] : p.push(f))
                    } else
                        p = {
                            lane: f,
                            tag: s.tag,
                            payload: s.payload,
                            callback: s.callback,
                            next: null
                        },
                            u === null ? (l = u = p,
                                c = d) : u = u.next = p,
                            o |= f;
                    if (s = s.next,
                        s === null) {
                        if (s = i.shared.pending,
                            s === null)
                            break;
                        p = s,
                            s = p.next,
                            p.next = null,
                            i.lastBaseUpdate = p,
                            i.shared.pending = null
                    }
                } while (1);
                u === null && (c = d),
                    i.baseState = c,
                    i.firstBaseUpdate = l,
                    i.lastBaseUpdate = u,
                    a === null && (i.shared.lanes = 0),
                    Kl |= o,
                    e.lanes = o,
                    e.memoizedState = d
            }
        }
        function ro(e, t) {
            if (typeof e != `function`)
                throw Error(o(191, e));
            e.call(t)
        }
        function io(e, t) {
            var n = e.callbacks;
            if (n !== null)
                for (e.callbacks = null,
                    e = 0; e < n.length; e++)
                    ro(n[e], t)
        }
        var ao = me(null)
            , oo = me(0);
        function so(e, t) {
            e = Gl,
                O(oo, e),
                O(ao, t),
                Gl = e | t.baseLanes
        }
        function co() {
            O(oo, Gl),
                O(ao, ao.current)
        }
        function lo() {
            Gl = oo.current,
                D(ao),
                D(oo)
        }
        var uo = me(null)
            , fo = null;
        function po(e) {
            var t = e.alternate;
            O(N, N.current & 1),
                O(uo, e),
                fo === null && (t === null || ao.current !== null || t.memoizedState !== null) && (fo = e)
        }
        function mo(e) {
            O(N, N.current),
                O(uo, e),
                fo === null && (fo = e)
        }
        function ho(e) {
            e.tag === 22 ? (O(N, N.current),
                O(uo, e),
                fo === null && (fo = e)) : go(e)
        }
        function go() {
            O(N, N.current),
                O(uo, uo.current)
        }
        function _o(e) {
            D(uo),
                fo === e && (fo = null),
                D(N)
        }
        var N = me(0);
        function vo(e) {
            for (var t = e; t !== null;) {
                if (t.tag === 13) {
                    var n = t.memoizedState;
                    if (n !== null && (n = n.dehydrated,
                        n === null || af(n) || of(n)))
                        return t
                } else if (t.tag === 19 && (t.memoizedProps.revealOrder === `forwards` || t.memoizedProps.revealOrder === `backwards` || t.memoizedProps.revealOrder === `unstable_legacy-backwards` || t.memoizedProps.revealOrder === `together`)) {
                    if (t.flags & 128)
                        return t
                } else if (t.child !== null) {
                    t.child.return = t,
                        t = t.child;
                    continue
                }
                if (t === e)
                    break;
                for (; t.sibling === null;) {
                    if (t.return === null || t.return === e)
                        return null;
                    t = t.return
                }
                t.sibling.return = t.return,
                    t = t.sibling
            }
            return null
        }
        var yo = 0
            , P = null
            , F = null
            , I = null
            , bo = !1
            , xo = !1
            , So = !1
            , Co = 0
            , wo = 0
            , To = null
            , Eo = 0;
        function L() {
            throw Error(o(321))
        }
        function Do(e, t) {
            if (t === null)
                return !1;
            for (var n = 0; n < t.length && n < e.length; n++)
                if (!jr(e[n], t[n]))
                    return !1;
            return !0
        }
        function Oo(e, t, n, r, i, a) {
            return yo = a,
                P = t,
                t.memoizedState = null,
                t.updateQueue = null,
                t.lanes = 0,
                T.H = e === null || e.memoizedState === null ? Ws : Gs,
                So = !1,
                a = n(r, i),
                So = !1,
                xo && (a = Ao(t, n, r, i)),
                ko(e),
                a
        }
        function ko(e) {
            T.H = Us;
            var t = F !== null && F.next !== null;
            if (yo = 0,
                I = F = P = null,
                bo = !1,
                wo = 0,
                To = null,
                t)
                throw Error(o(300));
            e === null || z || (e = e.dependencies,
                e !== null && sa(e) && (z = !0))
        }
        function Ao(e, t, n, r) {
            P = e;
            var i = 0;
            do {
                if (xo && (To = null),
                    wo = 0,
                    xo = !1,
                    25 <= i)
                    throw Error(o(301));
                if (i += 1,
                    I = F = null,
                    e.updateQueue != null) {
                    var a = e.updateQueue;
                    a.lastEffect = null,
                        a.events = null,
                        a.stores = null,
                        a.memoCache != null && (a.memoCache.index = 0)
                }
                T.H = Ks,
                    a = t(n, r)
            } while (xo);
            return a
        }
        function jo() {
            var e = T.H
                , t = e.useState()[0];
            return t = typeof t.then == `function` ? Lo(t) : t,
                e = e.useState()[0],
                (F === null ? null : F.memoizedState) !== e && (P.flags |= 1024),
                t
        }
        function Mo() {
            var e = Co !== 0;
            return Co = 0,
                e
        }
        function No(e, t, n) {
            t.updateQueue = e.updateQueue,
                t.flags &= -2053,
                e.lanes &= ~n
        }
        function Po(e) {
            if (bo) {
                for (e = e.memoizedState; e !== null;) {
                    var t = e.queue;
                    t !== null && (t.pending = null),
                        e = e.next
                }
                bo = !1
            }
            yo = 0,
                I = F = P = null,
                xo = !1,
                wo = Co = 0,
                To = null
        }
        function Fo() {
            var e = {
                memoizedState: null,
                baseState: null,
                baseQueue: null,
                queue: null,
                next: null
            };
            return I === null ? P.memoizedState = I = e : I = I.next = e,
                I
        }
        function R() {
            if (F === null) {
                var e = P.alternate;
                e = e === null ? null : e.memoizedState
            } else
                e = F.next;
            var t = I === null ? P.memoizedState : I.next;
            if (t !== null)
                I = t,
                    F = e;
            else {
                if (e === null)
                    throw P.alternate === null ? Error(o(467)) : Error(o(310));
                F = e,
                    e = {
                        memoizedState: F.memoizedState,
                        baseState: F.baseState,
                        baseQueue: F.baseQueue,
                        queue: F.queue,
                        next: null
                    },
                    I === null ? P.memoizedState = I = e : I = I.next = e
            }
            return I
        }
        function Io() {
            return {
                lastEffect: null,
                events: null,
                stores: null,
                memoCache: null
            }
        }
        function Lo(e) {
            var t = wo;
            return wo += 1,
                To === null && (To = []),
                e = Pa(To, e, t),
                t = P,
                (I === null ? t.memoizedState : I.next) === null && (t = t.alternate,
                    T.H = t === null || t.memoizedState === null ? Ws : Gs),
                e
        }
        function Ro(e) {
            if (typeof e == `object` && e) {
                if (typeof e.then == `function`)
                    return Lo(e);
                if (e.$$typeof === C)
                    return la(e)
            }
            throw Error(o(438, String(e)))
        }
        function zo(e) {
            var t = null
                , n = P.updateQueue;
            if (n !== null && (t = n.memoCache),
                t == null) {
                var r = P.alternate;
                r !== null && (r = r.updateQueue,
                    r !== null && (r = r.memoCache,
                        r != null && (t = {
                            data: r.data.map(function (e) {
                                return e.slice()
                            }),
                            index: 0
                        })))
            }
            if (t ??= {
                data: [],
                index: 0
            },
                n === null && (n = Io(),
                    P.updateQueue = n),
                n.memoCache = t,
                n = t.data[t.index],
                n === void 0)
                for (n = t.data[t.index] = Array(e),
                    r = 0; r < e; r++)
                    n[r] = w;
            return t.index++,
                n
        }
        function Bo(e, t) {
            return typeof t == `function` ? t(e) : t
        }
        function Vo(e) {
            return Ho(R(), F, e)
        }
        function Ho(e, t, n) {
            var r = e.queue;
            if (r === null)
                throw Error(o(311));
            r.lastRenderedReducer = n;
            var i = e.baseQueue
                , a = r.pending;
            if (a !== null) {
                if (i !== null) {
                    var s = i.next;
                    i.next = a.next,
                        a.next = s
                }
                t.baseQueue = i = a,
                    r.pending = null
            }
            if (a = e.baseState,
                i === null)
                e.memoizedState = a;
            else {
                t = i.next;
                var c = s = null
                    , l = null
                    , u = t
                    , d = !1;
                do {
                    var f = u.lane & -536870913;
                    if (f === u.lane ? (yo & f) === f : (q & f) === f) {
                        var p = u.revertLane;
                        if (p === 0)
                            l !== null && (l = l.next = {
                                lane: 0,
                                revertLane: 0,
                                gesture: null,
                                action: u.action,
                                hasEagerState: u.hasEagerState,
                                eagerState: u.eagerState,
                                next: null
                            }),
                                f === ya && (d = !0);
                        else if ((yo & p) === p) {
                            u = u.next,
                                p === ya && (d = !0);
                            continue
                        } else
                            f = {
                                lane: 0,
                                revertLane: u.revertLane,
                                gesture: null,
                                action: u.action,
                                hasEagerState: u.hasEagerState,
                                eagerState: u.eagerState,
                                next: null
                            },
                                l === null ? (c = l = f,
                                    s = a) : l = l.next = f,
                                P.lanes |= p,
                                Kl |= p;
                        f = u.action,
                            So && n(a, f),
                            a = u.hasEagerState ? u.eagerState : n(a, f)
                    } else
                        p = {
                            lane: f,
                            revertLane: u.revertLane,
                            gesture: u.gesture,
                            action: u.action,
                            hasEagerState: u.hasEagerState,
                            eagerState: u.eagerState,
                            next: null
                        },
                            l === null ? (c = l = p,
                                s = a) : l = l.next = p,
                            P.lanes |= f,
                            Kl |= f;
                    u = u.next
                } while (u !== null && u !== t);
                if (l === null ? s = a : l.next = c,
                    !jr(a, e.memoizedState) && (z = !0,
                        d && (n = ba,
                            n !== null)))
                    throw n;
                e.memoizedState = a,
                    e.baseState = s,
                    e.baseQueue = l,
                    r.lastRenderedState = a
            }
            return i === null && (r.lanes = 0),
                [e.memoizedState, r.dispatch]
        }
        function Uo(e) {
            var t = R()
                , n = t.queue;
            if (n === null)
                throw Error(o(311));
            n.lastRenderedReducer = e;
            var r = n.dispatch
                , i = n.pending
                , a = t.memoizedState;
            if (i !== null) {
                n.pending = null;
                var s = i = i.next;
                do
                    a = e(a, s.action),
                        s = s.next;
                while (s !== i);
                jr(a, t.memoizedState) || (z = !0),
                    t.memoizedState = a,
                    t.baseQueue === null && (t.baseState = a),
                    n.lastRenderedState = a
            }
            return [a, r]
        }
        function Wo(e, t, n) {
            var r = P
                , i = R()
                , a = j;
            if (a) {
                if (n === void 0)
                    throw Error(o(407));
                n = n()
            } else
                n = t();
            var s = !jr((F || i).memoizedState, n);
            if (s && (i.memoizedState = n,
                z = !0),
                i = i.queue,
                hs(qo.bind(null, r, i, e), [e]),
                i.getSnapshot !== t || s || I !== null && I.memoizedState.tag & 1) {
                if (r.flags |= 2048,
                    us(9, {
                        destroy: void 0
                    }, Ko.bind(null, r, i, n, t), null),
                    G === null)
                    throw Error(o(349));
                a || yo & 127 || Go(r, t, n)
            }
            return n
        }
        function Go(e, t, n) {
            e.flags |= 16384,
                e = {
                    getSnapshot: t,
                    value: n
                },
                t = P.updateQueue,
                t === null ? (t = Io(),
                    P.updateQueue = t,
                    t.stores = [e]) : (n = t.stores,
                        n === null ? t.stores = [e] : n.push(e))
        }
        function Ko(e, t, n, r) {
            t.value = n,
                t.getSnapshot = r,
                Jo(t) && Yo(e)
        }
        function qo(e, t, n) {
            return n(function () {
                Jo(t) && Yo(e)
            })
        }
        function Jo(e) {
            var t = e.getSnapshot;
            e = e.value;
            try {
                var n = t();
                return !jr(e, n)
            } catch {
                return !0
            }
        }
        function Yo(e) {
            var t = fi(e, 2);
            t !== null && hu(t, e, 2)
        }
        function Xo(e) {
            var t = Fo();
            if (typeof e == `function`) {
                var n = e;
                if (e = n(),
                    So) {
                    Ge(!0);
                    try {
                        n()
                    } finally {
                        Ge(!1)
                    }
                }
            }
            return t.memoizedState = t.baseState = e,
                t.queue = {
                    pending: null,
                    lanes: 0,
                    dispatch: null,
                    lastRenderedReducer: Bo,
                    lastRenderedState: e
                },
                t
        }
        function Zo(e, t, n, r) {
            return e.baseState = n,
                Ho(e, F, typeof r == `function` ? r : Bo)
        }
        function Qo(e, t, n, r, i) {
            if (Bs(e))
                throw Error(o(485));
            if (e = t.action,
                e !== null) {
                var a = {
                    payload: i,
                    action: e,
                    next: null,
                    isTransition: !0,
                    status: `pending`,
                    value: null,
                    reason: null,
                    listeners: [],
                    then: function (e) {
                        a.listeners.push(e)
                    }
                };
                T.T === null ? a.isTransition = !1 : n(!0),
                    r(a),
                    n = t.pending,
                    n === null ? (a.next = t.pending = a,
                        $o(t, a)) : (a.next = n.next,
                            t.pending = n.next = a)
            }
        }
        function $o(e, t) {
            var n = t.action
                , r = t.payload
                , i = e.state;
            if (t.isTransition) {
                var a = T.T
                    , o = {};
                T.T = o;
                try {
                    var s = n(i, r)
                        , c = T.S;
                    c !== null && c(o, s),
                        es(e, t, s)
                } catch (n) {
                    ns(e, t, n)
                } finally {
                    a !== null && o.types !== null && (a.types = o.types),
                        T.T = a
                }
            } else
                try {
                    a = n(i, r),
                        es(e, t, a)
                } catch (n) {
                    ns(e, t, n)
                }
        }
        function es(e, t, n) {
            typeof n == `object` && n && typeof n.then == `function` ? n.then(function (n) {
                ts(e, t, n)
            }, function (n) {
                return ns(e, t, n)
            }) : ts(e, t, n)
        }
        function ts(e, t, n) {
            t.status = `fulfilled`,
                t.value = n,
                rs(t),
                e.state = n,
                t = e.pending,
                t !== null && (n = t.next,
                    n === t ? e.pending = null : (n = n.next,
                        t.next = n,
                        $o(e, n)))
        }
        function ns(e, t, n) {
            var r = e.pending;
            if (e.pending = null,
                r !== null) {
                r = r.next;
                do
                    t.status = `rejected`,
                        t.reason = n,
                        rs(t),
                        t = t.next;
                while (t !== r)
            }
            e.action = null
        }
        function rs(e) {
            e = e.listeners;
            for (var t = 0; t < e.length; t++)
                (0,
                    e[t])()
        }
        function is(e, t) {
            return t
        }
        function as(e, t) {
            if (j) {
                var n = G.formState;
                if (n !== null) {
                    a: {
                        var r = P;
                        if (j) {
                            if (A) {
                                b: {
                                    for (var i = A, a = Wi; i.nodeType !== 8;) {
                                        if (!a) {
                                            i = null;
                                            break b
                                        }
                                        if (i = cf(i.nextSibling),
                                            i === null) {
                                            i = null;
                                            break b
                                        }
                                    }
                                    a = i.data,
                                        i = a === `F!` || a === `F` ? i : null
                                }
                                if (i) {
                                    A = cf(i.nextSibling),
                                        r = i.data === `F!`;
                                    break a
                                }
                            }
                            Ki(r)
                        }
                        r = !1
                    }
                    r && (t = n[0])
                }
            }
            return n = Fo(),
                n.memoizedState = n.baseState = t,
                r = {
                    pending: null,
                    lanes: 0,
                    dispatch: null,
                    lastRenderedReducer: is,
                    lastRenderedState: t
                },
                n.queue = r,
                n = Ls.bind(null, P, r),
                r.dispatch = n,
                r = Xo(!1),
                a = zs.bind(null, P, !1, r.queue),
                r = Fo(),
                i = {
                    state: t,
                    dispatch: null,
                    action: e,
                    pending: null
                },
                r.queue = i,
                n = Qo.bind(null, P, i, a, n),
                i.dispatch = n,
                r.memoizedState = e,
                [t, n, !1]
        }
        function os(e) {
            return ss(R(), F, e)
        }
        function ss(e, t, n) {
            if (t = Ho(e, t, is)[0],
                e = Vo(Bo)[0],
                typeof t == `object` && t && typeof t.then == `function`)
                try {
                    var r = Lo(t)
                } catch (e) {
                    throw e === ka ? ja : e
                }
            else
                r = t;
            t = R();
            var i = t.queue
                , a = i.dispatch;
            return n !== t.memoizedState && (P.flags |= 2048,
                us(9, {
                    destroy: void 0
                }, cs.bind(null, i, n), null)),
                [r, a, e]
        }
        function cs(e, t) {
            e.action = t
        }
        function ls(e) {
            var t = R()
                , n = F;
            if (n !== null)
                return ss(t, n, e);
            R(),
                t = t.memoizedState,
                n = R();
            var r = n.queue.dispatch;
            return n.memoizedState = e,
                [t, r, !1]
        }
        function us(e, t, n, r) {
            return e = {
                tag: e,
                create: n,
                deps: r,
                inst: t,
                next: null
            },
                t = P.updateQueue,
                t === null && (t = Io(),
                    P.updateQueue = t),
                n = t.lastEffect,
                n === null ? t.lastEffect = e.next = e : (r = n.next,
                    n.next = e,
                    e.next = r,
                    t.lastEffect = e),
                e
        }
        function ds() {
            return R().memoizedState
        }
        function fs(e, t, n, r) {
            var i = Fo();
            P.flags |= e,
                i.memoizedState = us(1 | t, {
                    destroy: void 0
                }, n, r === void 0 ? null : r)
        }
        function ps(e, t, n, r) {
            var i = R();
            r = r === void 0 ? null : r;
            var a = i.memoizedState.inst;
            F !== null && r !== null && Do(r, F.memoizedState.deps) ? i.memoizedState = us(t, a, n, r) : (P.flags |= e,
                i.memoizedState = us(1 | t, a, n, r))
        }
        function ms(e, t) {
            fs(8390656, 8, e, t)
        }
        function hs(e, t) {
            ps(2048, 8, e, t)
        }
        function gs(e) {
            P.flags |= 4;
            var t = P.updateQueue;
            if (t === null)
                t = Io(),
                    P.updateQueue = t,
                    t.events = [e];
            else {
                var n = t.events;
                n === null ? t.events = [e] : n.push(e)
            }
        }
        function _s(e) {
            var t = R().memoizedState;
            return gs({
                ref: t,
                nextImpl: e
            }),
                function () {
                    if (W & 2)
                        throw Error(o(440));
                    return t.impl.apply(void 0, arguments)
                }
        }
        function vs(e, t) {
            return ps(4, 2, e, t)
        }
        function ys(e, t) {
            return ps(4, 4, e, t)
        }
        function bs(e, t) {
            if (typeof t == `function`) {
                e = e();
                var n = t(e);
                return function () {
                    typeof n == `function` ? n() : t(null)
                }
            }
            if (t != null)
                return e = e(),
                    t.current = e,
                    function () {
                        t.current = null
                    }
        }
        function xs(e, t, n) {
            n = n == null ? null : n.concat([e]),
                ps(4, 4, bs.bind(null, t, e), n)
        }
        function Ss() { }
        function Cs(e, t) {
            var n = R();
            t = t === void 0 ? null : t;
            var r = n.memoizedState;
            return t !== null && Do(t, r[1]) ? r[0] : (n.memoizedState = [e, t],
                e)
        }
        function ws(e, t) {
            var n = R();
            t = t === void 0 ? null : t;
            var r = n.memoizedState;
            if (t !== null && Do(t, r[1]))
                return r[0];
            if (r = e(),
                So) {
                Ge(!0);
                try {
                    e()
                } finally {
                    Ge(!1)
                }
            }
            return n.memoizedState = [r, t],
                r
        }
        function Ts(e, t, n) {
            return n === void 0 || yo & 1073741824 && !(q & 261930) ? e.memoizedState = t : (e.memoizedState = n,
                e = mu(),
                P.lanes |= e,
                Kl |= e,
                n)
        }
        function Es(e, t, n, r) {
            return jr(n, t) ? n : ao.current === null ? !(yo & 42) || yo & 1073741824 && !(q & 261930) ? (z = !0,
                e.memoizedState = n) : (e = mu(),
                    P.lanes |= e,
                    Kl |= e,
                    t) : (e = Ts(e, n, r),
                        jr(e, t) || (z = !0),
                        e)
        }
        function Ds(e, t, n, r, i) {
            var a = E.p;
            E.p = a !== 0 && 8 > a ? a : 8;
            var o = T.T
                , s = {};
            T.T = s,
                zs(e, !1, t, n);
            try {
                var c = i()
                    , l = T.S;
                l !== null && l(s, c),
                    typeof c == `object` && c && typeof c.then == `function` ? Rs(e, t, Ca(c, r), pu(e)) : Rs(e, t, r, pu(e))
            } catch (n) {
                Rs(e, t, {
                    then: function () { },
                    status: `rejected`,
                    reason: n
                }, pu())
            } finally {
                E.p = a,
                    o !== null && s.types !== null && (o.types = s.types),
                    T.T = o
            }
        }
        function Os() { }
        function ks(e, t, n, r) {
            if (e.tag !== 5)
                throw Error(o(476));
            var i = As(e).queue;
            Ds(e, i, t, de, n === null ? Os : function () {
                return js(e),
                    n(r)
            }
            )
        }
        function As(e) {
            var t = e.memoizedState;
            if (t !== null)
                return t;
            t = {
                memoizedState: de,
                baseState: de,
                baseQueue: null,
                queue: {
                    pending: null,
                    lanes: 0,
                    dispatch: null,
                    lastRenderedReducer: Bo,
                    lastRenderedState: de
                },
                next: null
            };
            var n = {};
            return t.next = {
                memoizedState: n,
                baseState: n,
                baseQueue: null,
                queue: {
                    pending: null,
                    lanes: 0,
                    dispatch: null,
                    lastRenderedReducer: Bo,
                    lastRenderedState: n
                },
                next: null
            },
                e.memoizedState = t,
                e = e.alternate,
                e !== null && (e.memoizedState = t),
                t
        }
        function js(e) {
            var t = As(e);
            t.next === null && (t = e.alternate.memoizedState),
                Rs(e, t.next.queue, {}, pu())
        }
        function Ms() {
            return la(Qf)
        }
        function Ns() {
            return R().memoizedState
        }
        function Ps() {
            return R().memoizedState
        }
        function Fs(e) {
            for (var t = e.return; t !== null;) {
                switch (t.tag) {
                    case 24:
                    case 3:
                        var n = pu();
                        e = Xa(n);
                        var r = Za(t, e, n);
                        r !== null && (hu(r, t, n),
                            Qa(r, t, n)),
                            t = {
                                cache: ha()
                            },
                            e.payload = t;
                        return
                }
                t = t.return
            }
        }
        function Is(e, t, n) {
            var r = pu();
            n = {
                lane: r,
                revertLane: 0,
                gesture: null,
                action: n,
                hasEagerState: !1,
                eagerState: null,
                next: null
            },
                Bs(e) ? Vs(t, n) : (n = di(e, t, n, r),
                    n !== null && (hu(n, e, r),
                        Hs(n, t, r)))
        }
        function Ls(e, t, n) {
            Rs(e, t, n, pu())
        }
        function Rs(e, t, n, r) {
            var i = {
                lane: r,
                revertLane: 0,
                gesture: null,
                action: n,
                hasEagerState: !1,
                eagerState: null,
                next: null
            };
            if (Bs(e))
                Vs(t, i);
            else {
                var a = e.alternate;
                if (e.lanes === 0 && (a === null || a.lanes === 0) && (a = t.lastRenderedReducer,
                    a !== null))
                    try {
                        var o = t.lastRenderedState
                            , s = a(o, n);
                        if (i.hasEagerState = !0,
                            i.eagerState = s,
                            jr(s, o))
                            return ui(e, t, i, 0),
                                G === null && li(),
                                !1
                    } catch { }
                if (n = di(e, t, i, r),
                    n !== null)
                    return hu(n, e, r),
                        Hs(n, t, r),
                        !0
            }
            return !1
        }
        function zs(e, t, n, r) {
            if (r = {
                lane: 2,
                revertLane: dd(),
                gesture: null,
                action: r,
                hasEagerState: !1,
                eagerState: null,
                next: null
            },
                Bs(e)) {
                if (t)
                    throw Error(o(479))
            } else
                t = di(e, n, r, 2),
                    t !== null && hu(t, e, 2)
        }
        function Bs(e) {
            var t = e.alternate;
            return e === P || t !== null && t === P
        }
        function Vs(e, t) {
            xo = bo = !0;
            var n = e.pending;
            n === null ? t.next = t : (t.next = n.next,
                n.next = t),
                e.pending = t
        }
        function Hs(e, t, n) {
            if (n & 4194048) {
                var r = t.lanes;
                r &= e.pendingLanes,
                    n |= r,
                    t.lanes = n,
                    ct(e, n)
            }
        }
        var Us = {
            readContext: la,
            use: Ro,
            useCallback: L,
            useContext: L,
            useEffect: L,
            useImperativeHandle: L,
            useLayoutEffect: L,
            useInsertionEffect: L,
            useMemo: L,
            useReducer: L,
            useRef: L,
            useState: L,
            useDebugValue: L,
            useDeferredValue: L,
            useTransition: L,
            useSyncExternalStore: L,
            useId: L,
            useHostTransitionStatus: L,
            useFormState: L,
            useActionState: L,
            useOptimistic: L,
            useMemoCache: L,
            useCacheRefresh: L
        };
        Us.useEffectEvent = L;
        var Ws = {
            readContext: la,
            use: Ro,
            useCallback: function (e, t) {
                return Fo().memoizedState = [e, t === void 0 ? null : t],
                    e
            },
            useContext: la,
            useEffect: ms,
            useImperativeHandle: function (e, t, n) {
                n = n == null ? null : n.concat([e]),
                    fs(4194308, 4, bs.bind(null, t, e), n)
            },
            useLayoutEffect: function (e, t) {
                return fs(4194308, 4, e, t)
            },
            useInsertionEffect: function (e, t) {
                fs(4, 2, e, t)
            },
            useMemo: function (e, t) {
                var n = Fo();
                t = t === void 0 ? null : t;
                var r = e();
                if (So) {
                    Ge(!0);
                    try {
                        e()
                    } finally {
                        Ge(!1)
                    }
                }
                return n.memoizedState = [r, t],
                    r
            },
            useReducer: function (e, t, n) {
                var r = Fo();
                if (n !== void 0) {
                    var i = n(t);
                    if (So) {
                        Ge(!0);
                        try {
                            n(t)
                        } finally {
                            Ge(!1)
                        }
                    }
                } else
                    i = t;
                return r.memoizedState = r.baseState = i,
                    e = {
                        pending: null,
                        lanes: 0,
                        dispatch: null,
                        lastRenderedReducer: e,
                        lastRenderedState: i
                    },
                    r.queue = e,
                    e = e.dispatch = Is.bind(null, P, e),
                    [r.memoizedState, e]
            },
            useRef: function (e) {
                var t = Fo();
                return e = {
                    current: e
                },
                    t.memoizedState = e
            },
            useState: function (e) {
                e = Xo(e);
                var t = e.queue
                    , n = Ls.bind(null, P, t);
                return t.dispatch = n,
                    [e.memoizedState, n]
            },
            useDebugValue: Ss,
            useDeferredValue: function (e, t) {
                return Ts(Fo(), e, t)
            },
            useTransition: function () {
                var e = Xo(!1);
                return e = Ds.bind(null, P, e.queue, !0, !1),
                    Fo().memoizedState = e,
                    [!1, e]
            },
            useSyncExternalStore: function (e, t, n) {
                var r = P
                    , i = Fo();
                if (j) {
                    if (n === void 0)
                        throw Error(o(407));
                    n = n()
                } else {
                    if (n = t(),
                        G === null)
                        throw Error(o(349));
                    q & 127 || Go(r, t, n)
                }
                i.memoizedState = n;
                var a = {
                    value: n,
                    getSnapshot: t
                };
                return i.queue = a,
                    ms(qo.bind(null, r, a, e), [e]),
                    r.flags |= 2048,
                    us(9, {
                        destroy: void 0
                    }, Ko.bind(null, r, a, n, t), null),
                    n
            },
            useId: function () {
                var e = Fo()
                    , t = G.identifierPrefix;
                if (j) {
                    var n = Ii
                        , r = Fi;
                    n = (r & ~(1 << 32 - Ke(r) - 1)).toString(32) + n,
                        t = `_` + t + `R_` + n,
                        n = Co++,
                        0 < n && (t += `H` + n.toString(32)),
                        t += `_`
                } else
                    n = Eo++,
                        t = `_` + t + `r_` + n.toString(32) + `_`;
                return e.memoizedState = t
            },
            useHostTransitionStatus: Ms,
            useFormState: as,
            useActionState: as,
            useOptimistic: function (e) {
                var t = Fo();
                t.memoizedState = t.baseState = e;
                var n = {
                    pending: null,
                    lanes: 0,
                    dispatch: null,
                    lastRenderedReducer: null,
                    lastRenderedState: null
                };
                return t.queue = n,
                    t = zs.bind(null, P, !0, n),
                    n.dispatch = t,
                    [e, t]
            },
            useMemoCache: zo,
            useCacheRefresh: function () {
                return Fo().memoizedState = Fs.bind(null, P)
            },
            useEffectEvent: function (e) {
                var t = Fo()
                    , n = {
                        impl: e
                    };
                return t.memoizedState = n,
                    function () {
                        if (W & 2)
                            throw Error(o(440));
                        return n.impl.apply(void 0, arguments)
                    }
            }
        }
            , Gs = {
                readContext: la,
                use: Ro,
                useCallback: Cs,
                useContext: la,
                useEffect: hs,
                useImperativeHandle: xs,
                useInsertionEffect: vs,
                useLayoutEffect: ys,
                useMemo: ws,
                useReducer: Vo,
                useRef: ds,
                useState: function () {
                    return Vo(Bo)
                },
                useDebugValue: Ss,
                useDeferredValue: function (e, t) {
                    return Es(R(), F.memoizedState, e, t)
                },
                useTransition: function () {
                    var e = Vo(Bo)[0]
                        , t = R().memoizedState;
                    return [typeof e == `boolean` ? e : Lo(e), t]
                },
                useSyncExternalStore: Wo,
                useId: Ns,
                useHostTransitionStatus: Ms,
                useFormState: os,
                useActionState: os,
                useOptimistic: function (e, t) {
                    return Zo(R(), F, e, t)
                },
                useMemoCache: zo,
                useCacheRefresh: Ps
            };
        Gs.useEffectEvent = _s;
        var Ks = {
            readContext: la,
            use: Ro,
            useCallback: Cs,
            useContext: la,
            useEffect: hs,
            useImperativeHandle: xs,
            useInsertionEffect: vs,
            useLayoutEffect: ys,
            useMemo: ws,
            useReducer: Uo,
            useRef: ds,
            useState: function () {
                return Uo(Bo)
            },
            useDebugValue: Ss,
            useDeferredValue: function (e, t) {
                var n = R();
                return F === null ? Ts(n, e, t) : Es(n, F.memoizedState, e, t)
            },
            useTransition: function () {
                var e = Uo(Bo)[0]
                    , t = R().memoizedState;
                return [typeof e == `boolean` ? e : Lo(e), t]
            },
            useSyncExternalStore: Wo,
            useId: Ns,
            useHostTransitionStatus: Ms,
            useFormState: ls,
            useActionState: ls,
            useOptimistic: function (e, t) {
                var n = R();
                return F === null ? (n.baseState = e,
                    [e, n.queue.dispatch]) : Zo(n, F, e, t)
            },
            useMemoCache: zo,
            useCacheRefresh: Ps
        };
        Ks.useEffectEvent = _s;
        function qs(e, t, n, r) {
            t = e.memoizedState,
                n = n(r, t),
                n = n == null ? t : h({}, t, n),
                e.memoizedState = n,
                e.lanes === 0 && (e.updateQueue.baseState = n)
        }
        var Js = {
            enqueueSetState: function (e, t, n) {
                e = e._reactInternals;
                var r = pu()
                    , i = Xa(r);
                i.payload = t,
                    n != null && (i.callback = n),
                    t = Za(e, i, r),
                    t !== null && (hu(t, e, r),
                        Qa(t, e, r))
            },
            enqueueReplaceState: function (e, t, n) {
                e = e._reactInternals;
                var r = pu()
                    , i = Xa(r);
                i.tag = 1,
                    i.payload = t,
                    n != null && (i.callback = n),
                    t = Za(e, i, r),
                    t !== null && (hu(t, e, r),
                        Qa(t, e, r))
            },
            enqueueForceUpdate: function (e, t) {
                e = e._reactInternals;
                var n = pu()
                    , r = Xa(n);
                r.tag = 2,
                    t != null && (r.callback = t),
                    t = Za(e, r, n),
                    t !== null && (hu(t, e, n),
                        Qa(t, e, n))
            }
        };
        function Ys(e, t, n, r, i, a, o) {
            return e = e.stateNode,
                typeof e.shouldComponentUpdate == `function` ? e.shouldComponentUpdate(r, a, o) : t.prototype && t.prototype.isPureReactComponent ? !Mr(n, r) || !Mr(i, a) : !0
        }
        function Xs(e, t, n, r) {
            e = t.state,
                typeof t.componentWillReceiveProps == `function` && t.componentWillReceiveProps(n, r),
                typeof t.UNSAFE_componentWillReceiveProps == `function` && t.UNSAFE_componentWillReceiveProps(n, r),
                t.state !== e && Js.enqueueReplaceState(t, t.state, null)
        }
        function Zs(e, t) {
            var n = t;
            if (`ref` in t)
                for (var r in n = {},
                    t)
                    r !== `ref` && (n[r] = t[r]);
            if (e = e.defaultProps)
                for (var i in n === t && (n = h({}, n)),
                    e)
                    n[i] === void 0 && (n[i] = e[i]);
            return n
        }
        function Qs(e) {
            ai(e)
        }
        function $s(e) {
            console.error(e)
        }
        function ec(e) {
            ai(e)
        }
        function tc(e, t) {
            try {
                var n = e.onUncaughtError;
                n(t.value, {
                    componentStack: t.stack
                })
            } catch (e) {
                setTimeout(function () {
                    throw e
                })
            }
        }
        function nc(e, t, n) {
            try {
                var r = e.onCaughtError;
                r(n.value, {
                    componentStack: n.stack,
                    errorBoundary: t.tag === 1 ? t.stateNode : null
                })
            } catch (e) {
                setTimeout(function () {
                    throw e
                })
            }
        }
        function rc(e, t, n) {
            return n = Xa(n),
                n.tag = 3,
                n.payload = {
                    element: null
                },
                n.callback = function () {
                    tc(e, t)
                }
                ,
                n
        }
        function ic(e) {
            return e = Xa(e),
                e.tag = 3,
                e
        }
        function ac(e, t, n, r) {
            var i = n.type.getDerivedStateFromError;
            if (typeof i == `function`) {
                var a = r.value;
                e.payload = function () {
                    return i(a)
                }
                    ,
                    e.callback = function () {
                        nc(t, n, r)
                    }
            }
            var o = n.stateNode;
            o !== null && typeof o.componentDidCatch == `function` && (e.callback = function () {
                nc(t, n, r),
                    typeof i != `function` && (iu === null ? iu = new Set([this]) : iu.add(this));
                var e = r.stack;
                this.componentDidCatch(r.value, {
                    componentStack: e === null ? `` : e
                })
            }
            )
        }
        function oc(e, t, n, r, i) {
            if (n.flags |= 32768,
                typeof r == `object` && r && typeof r.then == `function`) {
                if (t = n.alternate,
                    t !== null && oa(t, n, i, !0),
                    n = uo.current,
                    n !== null) {
                    switch (n.tag) {
                        case 31:
                        case 13:
                            return fo === null ? Du() : n.alternate === null && Y === 0 && (Y = 3),
                                n.flags &= -257,
                                n.flags |= 65536,
                                n.lanes = i,
                                r === Ma ? n.flags |= 16384 : (t = n.updateQueue,
                                    t === null ? n.updateQueue = new Set([r]) : t.add(r),
                                    Gu(e, r, i)),
                                !1;
                        case 22:
                            return n.flags |= 65536,
                                r === Ma ? n.flags |= 16384 : (t = n.updateQueue,
                                    t === null ? (t = {
                                        transitions: null,
                                        markerInstances: null,
                                        retryQueue: new Set([r])
                                    },
                                        n.updateQueue = t) : (n = t.retryQueue,
                                            n === null ? t.retryQueue = new Set([r]) : n.add(r)),
                                    Gu(e, r, i)),
                                !1
                    }
                    throw Error(o(435, n.tag))
                }
                return Gu(e, r, i),
                    Du(),
                    !1
            }
            if (j)
                return t = uo.current,
                    t === null ? (r !== Gi && (t = Error(o(423), {
                        cause: r
                    }),
                        Qi(Di(t, n))),
                        e = e.current.alternate,
                        e.flags |= 65536,
                        i &= -i,
                        e.lanes |= i,
                        r = Di(r, n),
                        i = rc(e.stateNode, r, i),
                        $a(e, i),
                        Y !== 4 && (Y = 2)) : (!(t.flags & 65536) && (t.flags |= 256),
                            t.flags |= 65536,
                            t.lanes = i,
                            r !== Gi && (e = Error(o(422), {
                                cause: r
                            }),
                                Qi(Di(e, n)))),
                    !1;
            var a = Error(o(520), {
                cause: r
            });
            if (a = Di(a, n),
                Zl === null ? Zl = [a] : Zl.push(a),
                Y !== 4 && (Y = 2),
                t === null)
                return !0;
            r = Di(r, n),
                n = t;
            do {
                switch (n.tag) {
                    case 3:
                        return n.flags |= 65536,
                            e = i & -i,
                            n.lanes |= e,
                            e = rc(n.stateNode, r, e),
                            $a(n, e),
                            !1;
                    case 1:
                        if (t = n.type,
                            a = n.stateNode,
                            !(n.flags & 128) && (typeof t.getDerivedStateFromError == `function` || a !== null && typeof a.componentDidCatch == `function` && (iu === null || !iu.has(a))))
                            return n.flags |= 65536,
                                i &= -i,
                                n.lanes |= i,
                                i = ic(i),
                                ac(i, e, n, r),
                                $a(n, i),
                                !1
                }
                n = n.return
            } while (n !== null);
            return !1
        }
        var sc = Error(o(461))
            , z = !1;
        function cc(e, t, n, r) {
            t.child = e === null ? Ka(t, null, n, r) : Ga(t, e.child, n, r)
        }
        function lc(e, t, n, r, i) {
            n = n.render;
            var a = t.ref;
            if (`ref` in r) {
                var o = {};
                for (var s in r)
                    s !== `ref` && (o[s] = r[s])
            } else
                o = r;
            return ca(t),
                r = Oo(e, t, n, o, a, i),
                s = Mo(),
                e !== null && !z ? (No(e, t, i),
                    Nc(e, t, i)) : (j && s && zi(t),
                        t.flags |= 1,
                        cc(e, t, r, i),
                        t.child)
        }
        function uc(e, t, n, r, i) {
            if (e === null) {
                var a = n.type;
                return typeof a == `function` && !vi(a) && a.defaultProps === void 0 && n.compare === null ? (t.tag = 15,
                    t.type = a,
                    dc(e, t, a, r, i)) : (e = xi(n.type, null, r, t, t.mode, i),
                        e.ref = t.ref,
                        e.return = t,
                        t.child = e)
            }
            if (a = e.child,
                !Pc(e, i)) {
                var o = a.memoizedProps;
                if (n = n.compare,
                    n = n === null ? Mr : n,
                    n(o, r) && e.ref === t.ref)
                    return Nc(e, t, i)
            }
            return t.flags |= 1,
                e = yi(a, r),
                e.ref = t.ref,
                e.return = t,
                t.child = e
        }
        function dc(e, t, n, r, i) {
            if (e !== null) {
                var a = e.memoizedProps;
                if (Mr(a, r) && e.ref === t.ref) {
                    if (z = !1,
                        t.pendingProps = r = a,
                        Pc(e, i))
                        e.flags & 131072 && (z = !0);
                    else
                        return t.lanes = e.lanes,
                            Nc(e, t, i)
                }
            }
            return yc(e, t, n, r, i)
        }
        function fc(e, t, n, r) {
            var i = r.children
                , a = e === null ? null : e.memoizedState;
            if (e === null && t.stateNode === null && (t.stateNode = {
                _visibility: 1,
                _pendingMarkers: null,
                _retryCache: null,
                _transitions: null
            }),
                r.mode === `hidden`) {
                if (t.flags & 128) {
                    if (a = a === null ? n : a.baseLanes | n,
                        e !== null) {
                        for (r = t.child = e.child,
                            i = 0; r !== null;)
                            i = i | r.lanes | r.childLanes,
                                r = r.sibling;
                        r = i & ~a
                    } else
                        r = 0,
                            t.child = null;
                    return mc(e, t, a, n, r)
                }
                if (n & 536870912)
                    t.memoizedState = {
                        baseLanes: 0,
                        cachePool: null
                    },
                        e !== null && Da(t, a === null ? null : a.cachePool),
                        a === null ? co() : so(t, a),
                        ho(t);
                else
                    return r = t.lanes = 536870912,
                        mc(e, t, a === null ? n : a.baseLanes | n, n, r)
            } else
                a === null ? (e !== null && Da(t, null),
                    co(),
                    go(t)) : (Da(t, a.cachePool),
                        so(t, a),
                        go(t),
                        t.memoizedState = null);
            return cc(e, t, i, n),
                t.child
        }
        function pc(e, t) {
            return e !== null && e.tag === 22 || t.stateNode !== null || (t.stateNode = {
                _visibility: 1,
                _pendingMarkers: null,
                _retryCache: null,
                _transitions: null
            }),
                t.sibling
        }
        function mc(e, t, n, r, i) {
            var a = Ea();
            return a = a === null ? null : {
                parent: M._currentValue,
                pool: a
            },
                t.memoizedState = {
                    baseLanes: n,
                    cachePool: a
                },
                e !== null && Da(t, null),
                co(),
                ho(t),
                e !== null && oa(e, t, r, !0),
                t.childLanes = i,
                null
        }
        function hc(e, t) {
            return t = Oc({
                mode: t.mode,
                children: t.children
            }, e.mode),
                t.ref = e.ref,
                e.child = t,
                t.return = e,
                t
        }
        function gc(e, t, n) {
            return Ga(t, e.child, null, n),
                e = hc(t, t.pendingProps),
                e.flags |= 2,
                _o(t),
                t.memoizedState = null,
                e
        }
        function _c(e, t, n) {
            var r = t.pendingProps
                , i = !!(t.flags & 128);
            if (t.flags &= -129,
                e === null) {
                if (j) {
                    if (r.mode === `hidden`)
                        return e = hc(t, r),
                            t.lanes = 536870912,
                            pc(null, e);
                    if (mo(t),
                        (e = A) ? (e = rf(e, Wi),
                            e = e !== null && e.data === `&` ? e : null,
                            e !== null && (t.memoizedState = {
                                dehydrated: e,
                                treeContext: Pi === null ? null : {
                                    id: Fi,
                                    overflow: Ii
                                },
                                retryLane: 536870912,
                                hydrationErrors: null
                            },
                                n = wi(e),
                                n.return = t,
                                t.child = n,
                                Hi = t,
                                A = null)) : e = null,
                        e === null)
                        throw Ki(t);
                    return t.lanes = 536870912,
                        null
                }
                return hc(t, r)
            }
            var a = e.memoizedState;
            if (a !== null) {
                var s = a.dehydrated;
                if (mo(t),
                    i) {
                    if (t.flags & 256)
                        t.flags &= -257,
                            t = gc(e, t, n);
                    else if (t.memoizedState !== null)
                        t.child = e.child,
                            t.flags |= 128,
                            t = null;
                    else
                        throw Error(o(558))
                } else if (z || oa(e, t, n, !1),
                    i = (n & e.childLanes) !== 0,
                    z || i) {
                    if (r = G,
                        r !== null && (s = lt(r, n),
                            s !== 0 && s !== a.retryLane))
                        throw a.retryLane = s,
                        fi(e, s),
                        hu(r, e, s),
                        sc;
                    Du(),
                        t = gc(e, t, n)
                } else
                    e = a.treeContext,
                        A = cf(s.nextSibling),
                        Hi = t,
                        j = !0,
                        Ui = null,
                        Wi = !1,
                        e !== null && Vi(t, e),
                        t = hc(t, r),
                        t.flags |= 4096;
                return t
            }
            return e = yi(e.child, {
                mode: r.mode,
                children: r.children
            }),
                e.ref = t.ref,
                t.child = e,
                e.return = t,
                e
        }
        function vc(e, t) {
            var n = t.ref;
            if (n === null)
                e !== null && e.ref !== null && (t.flags |= 4194816);
            else {
                if (typeof n != `function` && typeof n != `object`)
                    throw Error(o(284));
                (e === null || e.ref !== n) && (t.flags |= 4194816)
            }
        }
        function yc(e, t, n, r, i) {
            return ca(t),
                n = Oo(e, t, n, r, void 0, i),
                r = Mo(),
                e !== null && !z ? (No(e, t, i),
                    Nc(e, t, i)) : (j && r && zi(t),
                        t.flags |= 1,
                        cc(e, t, n, i),
                        t.child)
        }
        function bc(e, t, n, r, i, a) {
            return ca(t),
                t.updateQueue = null,
                n = Ao(t, r, n, i),
                ko(e),
                r = Mo(),
                e !== null && !z ? (No(e, t, a),
                    Nc(e, t, a)) : (j && r && zi(t),
                        t.flags |= 1,
                        cc(e, t, n, a),
                        t.child)
        }
        function xc(e, t, n, r, i) {
            if (ca(t),
                t.stateNode === null) {
                var a = hi
                    , o = n.contextType;
                typeof o == `object` && o && (a = la(o)),
                    a = new n(r, a),
                    t.memoizedState = a.state !== null && a.state !== void 0 ? a.state : null,
                    a.updater = Js,
                    t.stateNode = a,
                    a._reactInternals = t,
                    a = t.stateNode,
                    a.props = r,
                    a.state = t.memoizedState,
                    a.refs = {},
                    Ja(t),
                    o = n.contextType,
                    a.context = typeof o == `object` && o ? la(o) : hi,
                    a.state = t.memoizedState,
                    o = n.getDerivedStateFromProps,
                    typeof o == `function` && (qs(t, n, o, r),
                        a.state = t.memoizedState),
                    typeof n.getDerivedStateFromProps == `function` || typeof a.getSnapshotBeforeUpdate == `function` || typeof a.UNSAFE_componentWillMount != `function` && typeof a.componentWillMount != `function` || (o = a.state,
                        typeof a.componentWillMount == `function` && a.componentWillMount(),
                        typeof a.UNSAFE_componentWillMount == `function` && a.UNSAFE_componentWillMount(),
                        o !== a.state && Js.enqueueReplaceState(a, a.state, null),
                        no(t, r, a, i),
                        to(),
                        a.state = t.memoizedState),
                    typeof a.componentDidMount == `function` && (t.flags |= 4194308),
                    r = !0
            } else if (e === null) {
                a = t.stateNode;
                var s = t.memoizedProps
                    , c = Zs(n, s);
                a.props = c;
                var l = a.context
                    , u = n.contextType;
                o = hi,
                    typeof u == `object` && u && (o = la(u));
                var d = n.getDerivedStateFromProps;
                u = typeof d == `function` || typeof a.getSnapshotBeforeUpdate == `function`,
                    s = t.pendingProps !== s,
                    u || typeof a.UNSAFE_componentWillReceiveProps != `function` && typeof a.componentWillReceiveProps != `function` || (s || l !== o) && Xs(t, a, r, o),
                    qa = !1;
                var f = t.memoizedState;
                a.state = f,
                    no(t, r, a, i),
                    to(),
                    l = t.memoizedState,
                    s || f !== l || qa ? (typeof d == `function` && (qs(t, n, d, r),
                        l = t.memoizedState),
                        (c = qa || Ys(t, n, c, r, f, l, o)) ? (u || typeof a.UNSAFE_componentWillMount != `function` && typeof a.componentWillMount != `function` || (typeof a.componentWillMount == `function` && a.componentWillMount(),
                            typeof a.UNSAFE_componentWillMount == `function` && a.UNSAFE_componentWillMount()),
                            typeof a.componentDidMount == `function` && (t.flags |= 4194308)) : (typeof a.componentDidMount == `function` && (t.flags |= 4194308),
                                t.memoizedProps = r,
                                t.memoizedState = l),
                        a.props = r,
                        a.state = l,
                        a.context = o,
                        r = c) : (typeof a.componentDidMount == `function` && (t.flags |= 4194308),
                            r = !1)
            } else {
                a = t.stateNode,
                    Ya(e, t),
                    o = t.memoizedProps,
                    u = Zs(n, o),
                    a.props = u,
                    d = t.pendingProps,
                    f = a.context,
                    l = n.contextType,
                    c = hi,
                    typeof l == `object` && l && (c = la(l)),
                    s = n.getDerivedStateFromProps,
                    (l = typeof s == `function` || typeof a.getSnapshotBeforeUpdate == `function`) || typeof a.UNSAFE_componentWillReceiveProps != `function` && typeof a.componentWillReceiveProps != `function` || (o !== d || f !== c) && Xs(t, a, r, c),
                    qa = !1,
                    f = t.memoizedState,
                    a.state = f,
                    no(t, r, a, i),
                    to();
                var p = t.memoizedState;
                o !== d || f !== p || qa || e !== null && e.dependencies !== null && sa(e.dependencies) ? (typeof s == `function` && (qs(t, n, s, r),
                    p = t.memoizedState),
                    (u = qa || Ys(t, n, u, r, f, p, c) || e !== null && e.dependencies !== null && sa(e.dependencies)) ? (l || typeof a.UNSAFE_componentWillUpdate != `function` && typeof a.componentWillUpdate != `function` || (typeof a.componentWillUpdate == `function` && a.componentWillUpdate(r, p, c),
                        typeof a.UNSAFE_componentWillUpdate == `function` && a.UNSAFE_componentWillUpdate(r, p, c)),
                        typeof a.componentDidUpdate == `function` && (t.flags |= 4),
                        typeof a.getSnapshotBeforeUpdate == `function` && (t.flags |= 1024)) : (typeof a.componentDidUpdate != `function` || o === e.memoizedProps && f === e.memoizedState || (t.flags |= 4),
                            typeof a.getSnapshotBeforeUpdate != `function` || o === e.memoizedProps && f === e.memoizedState || (t.flags |= 1024),
                            t.memoizedProps = r,
                            t.memoizedState = p),
                    a.props = r,
                    a.state = p,
                    a.context = c,
                    r = u) : (typeof a.componentDidUpdate != `function` || o === e.memoizedProps && f === e.memoizedState || (t.flags |= 4),
                        typeof a.getSnapshotBeforeUpdate != `function` || o === e.memoizedProps && f === e.memoizedState || (t.flags |= 1024),
                        r = !1)
            }
            return a = r,
                vc(e, t),
                r = !!(t.flags & 128),
                a || r ? (a = t.stateNode,
                    n = r && typeof n.getDerivedStateFromError != `function` ? null : a.render(),
                    t.flags |= 1,
                    e !== null && r ? (t.child = Ga(t, e.child, null, i),
                        t.child = Ga(t, null, n, i)) : cc(e, t, n, i),
                    t.memoizedState = a.state,
                    e = t.child) : e = Nc(e, t, i),
                e
        }
        function Sc(e, t, n, r) {
            return Xi(),
                t.flags |= 256,
                cc(e, t, n, r),
                t.child
        }
        var Cc = {
            dehydrated: null,
            treeContext: null,
            retryLane: 0,
            hydrationErrors: null
        };
        function wc(e) {
            return {
                baseLanes: e,
                cachePool: Oa()
            }
        }
        function Tc(e, t, n) {
            return e = e === null ? 0 : e.childLanes & ~n,
                t && (e |= Yl),
                e
        }
        function Ec(e, t, n) {
            var r = t.pendingProps, i = !1, a = !!(t.flags & 128), s;
            if ((s = a) || (s = e !== null && e.memoizedState === null ? !1 : !!(N.current & 2)),
                s && (i = !0,
                    t.flags &= -129),
                s = !!(t.flags & 32),
                t.flags &= -33,
                e === null) {
                if (j) {
                    if (i ? po(t) : go(t),
                        (e = A) ? (e = rf(e, Wi),
                            e = e !== null && e.data !== `&` ? e : null,
                            e !== null && (t.memoizedState = {
                                dehydrated: e,
                                treeContext: Pi === null ? null : {
                                    id: Fi,
                                    overflow: Ii
                                },
                                retryLane: 536870912,
                                hydrationErrors: null
                            },
                                n = wi(e),
                                n.return = t,
                                t.child = n,
                                Hi = t,
                                A = null)) : e = null,
                        e === null)
                        throw Ki(t);
                    return of(e) ? t.lanes = 32 : t.lanes = 536870912,
                        null
                }
                var c = r.children;
                return r = r.fallback,
                    i ? (go(t),
                        i = t.mode,
                        c = Oc({
                            mode: `hidden`,
                            children: c
                        }, i),
                        r = Si(r, i, n, null),
                        c.return = t,
                        r.return = t,
                        c.sibling = r,
                        t.child = c,
                        r = t.child,
                        r.memoizedState = wc(n),
                        r.childLanes = Tc(e, s, n),
                        t.memoizedState = Cc,
                        pc(null, r)) : (po(t),
                            Dc(t, c))
            }
            var l = e.memoizedState;
            if (l !== null && (c = l.dehydrated,
                c !== null)) {
                if (a)
                    t.flags & 256 ? (po(t),
                        t.flags &= -257,
                        t = kc(e, t, n)) : t.memoizedState === null ? (go(t),
                            c = r.fallback,
                            i = t.mode,
                            r = Oc({
                                mode: `visible`,
                                children: r.children
                            }, i),
                            c = Si(c, i, n, null),
                            c.flags |= 2,
                            r.return = t,
                            c.return = t,
                            r.sibling = c,
                            t.child = r,
                            Ga(t, e.child, null, n),
                            r = t.child,
                            r.memoizedState = wc(n),
                            r.childLanes = Tc(e, s, n),
                            t.memoizedState = Cc,
                            t = pc(null, r)) : (go(t),
                                t.child = e.child,
                                t.flags |= 128,
                                t = null);
                else if (po(t),
                    of(c)) {
                    if (s = c.nextSibling && c.nextSibling.dataset,
                        s)
                        var u = s.dgst;
                    s = u,
                        r = Error(o(419)),
                        r.stack = ``,
                        r.digest = s,
                        Qi({
                            value: r,
                            source: null,
                            stack: null
                        }),
                        t = kc(e, t, n)
                } else if (z || oa(e, t, n, !1),
                    s = (n & e.childLanes) !== 0,
                    z || s) {
                    if (s = G,
                        s !== null && (r = lt(s, n),
                            r !== 0 && r !== l.retryLane))
                        throw l.retryLane = r,
                        fi(e, r),
                        hu(s, e, r),
                        sc;
                    af(c) || Du(),
                        t = kc(e, t, n)
                } else
                    af(c) ? (t.flags |= 192,
                        t.child = e.child,
                        t = null) : (e = l.treeContext,
                            A = cf(c.nextSibling),
                            Hi = t,
                            j = !0,
                            Ui = null,
                            Wi = !1,
                            e !== null && Vi(t, e),
                            t = Dc(t, r.children),
                            t.flags |= 4096);
                return t
            }
            return i ? (go(t),
                c = r.fallback,
                i = t.mode,
                l = e.child,
                u = l.sibling,
                r = yi(l, {
                    mode: `hidden`,
                    children: r.children
                }),
                r.subtreeFlags = l.subtreeFlags & 65011712,
                u === null ? (c = Si(c, i, n, null),
                    c.flags |= 2) : c = yi(u, c),
                c.return = t,
                r.return = t,
                r.sibling = c,
                t.child = r,
                pc(null, r),
                r = t.child,
                c = e.child.memoizedState,
                c === null ? c = wc(n) : (i = c.cachePool,
                    i === null ? i = Oa() : (l = M._currentValue,
                        i = i.parent === l ? i : {
                            parent: l,
                            pool: l
                        }),
                    c = {
                        baseLanes: c.baseLanes | n,
                        cachePool: i
                    }),
                r.memoizedState = c,
                r.childLanes = Tc(e, s, n),
                t.memoizedState = Cc,
                pc(e.child, r)) : (po(t),
                    n = e.child,
                    e = n.sibling,
                    n = yi(n, {
                        mode: `visible`,
                        children: r.children
                    }),
                    n.return = t,
                    n.sibling = null,
                    e !== null && (s = t.deletions,
                        s === null ? (t.deletions = [e],
                            t.flags |= 16) : s.push(e)),
                    t.child = n,
                    t.memoizedState = null,
                    n)
        }
        function Dc(e, t) {
            return t = Oc({
                mode: `visible`,
                children: t
            }, e.mode),
                t.return = e,
                e.child = t
        }
        function Oc(e, t) {
            return e = _i(22, e, null, t),
                e.lanes = 0,
                e
        }
        function kc(e, t, n) {
            return Ga(t, e.child, null, n),
                e = Dc(t, t.pendingProps.children),
                e.flags |= 2,
                t.memoizedState = null,
                e
        }
        function Ac(e, t, n) {
            e.lanes |= t;
            var r = e.alternate;
            r !== null && (r.lanes |= t),
                ia(e.return, t, n)
        }
        function jc(e, t, n, r, i, a) {
            var o = e.memoizedState;
            o === null ? e.memoizedState = {
                isBackwards: t,
                rendering: null,
                renderingStartTime: 0,
                last: r,
                tail: n,
                tailMode: i,
                treeForkCount: a
            } : (o.isBackwards = t,
                o.rendering = null,
                o.renderingStartTime = 0,
                o.last = r,
                o.tail = n,
                o.tailMode = i,
                o.treeForkCount = a)
        }
        function Mc(e, t, n) {
            var r = t.pendingProps
                , i = r.revealOrder
                , a = r.tail;
            r = r.children;
            var o = N.current
                , s = !!(o & 2);
            if (s ? (o = o & 1 | 2,
                t.flags |= 128) : o &= 1,
                O(N, o),
                cc(e, t, r, n),
                r = j ? ji : 0,
                !s && e !== null && e.flags & 128)
                a: for (e = t.child; e !== null;) {
                    if (e.tag === 13)
                        e.memoizedState !== null && Ac(e, n, t);
                    else if (e.tag === 19)
                        Ac(e, n, t);
                    else if (e.child !== null) {
                        e.child.return = e,
                            e = e.child;
                        continue
                    }
                    if (e === t)
                        break a;
                    for (; e.sibling === null;) {
                        if (e.return === null || e.return === t)
                            break a;
                        e = e.return
                    }
                    e.sibling.return = e.return,
                        e = e.sibling
                }
            switch (i) {
                case `forwards`:
                    for (n = t.child,
                        i = null; n !== null;)
                        e = n.alternate,
                            e !== null && vo(e) === null && (i = n),
                            n = n.sibling;
                    n = i,
                        n === null ? (i = t.child,
                            t.child = null) : (i = n.sibling,
                                n.sibling = null),
                        jc(t, !1, i, n, a, r);
                    break;
                case `backwards`:
                case `unstable_legacy-backwards`:
                    for (n = null,
                        i = t.child,
                        t.child = null; i !== null;) {
                        if (e = i.alternate,
                            e !== null && vo(e) === null) {
                            t.child = i;
                            break
                        }
                        e = i.sibling,
                            i.sibling = n,
                            n = i,
                            i = e
                    }
                    jc(t, !0, n, null, a, r);
                    break;
                case `together`:
                    jc(t, !1, null, null, void 0, r);
                    break;
                default:
                    t.memoizedState = null
            }
            return t.child
        }
        function Nc(e, t, n) {
            if (e !== null && (t.dependencies = e.dependencies),
                Kl |= t.lanes,
                (n & t.childLanes) === 0) {
                if (e !== null) {
                    if (oa(e, t, n, !1),
                        (n & t.childLanes) === 0)
                        return null
                } else
                    return null
            }
            if (e !== null && t.child !== e.child)
                throw Error(o(153));
            if (t.child !== null) {
                for (e = t.child,
                    n = yi(e, e.pendingProps),
                    t.child = n,
                    n.return = t; e.sibling !== null;)
                    e = e.sibling,
                        n = n.sibling = yi(e, e.pendingProps),
                        n.return = t;
                n.sibling = null
            }
            return t.child
        }
        function Pc(e, t) {
            return (e.lanes & t) !== 0 || (e = e.dependencies,
                !!(e !== null && sa(e)))
        }
        function Fc(e, t, n) {
            switch (t.tag) {
                case 3:
                    ye(t, t.stateNode.containerInfo),
                        na(t, M, e.memoizedState.cache),
                        Xi();
                    break;
                case 27:
                case 5:
                    xe(t);
                    break;
                case 4:
                    ye(t, t.stateNode.containerInfo);
                    break;
                case 10:
                    na(t, t.type, t.memoizedProps.value);
                    break;
                case 31:
                    if (t.memoizedState !== null)
                        return t.flags |= 128,
                            mo(t),
                            null;
                    break;
                case 13:
                    var r = t.memoizedState;
                    if (r !== null)
                        return r.dehydrated === null ? (n & t.child.childLanes) === 0 ? (po(t),
                            e = Nc(e, t, n),
                            e === null ? null : e.sibling) : Ec(e, t, n) : (po(t),
                                t.flags |= 128,
                                null);
                    po(t);
                    break;
                case 19:
                    var i = !!(e.flags & 128);
                    if (r = (n & t.childLanes) !== 0,
                        r ||= (oa(e, t, n, !1),
                            (n & t.childLanes) !== 0),
                        i) {
                        if (r)
                            return Mc(e, t, n);
                        t.flags |= 128
                    }
                    if (i = t.memoizedState,
                        i !== null && (i.rendering = null,
                            i.tail = null,
                            i.lastEffect = null),
                        O(N, N.current),
                        r)
                        break;
                    return null;
                case 22:
                    return t.lanes = 0,
                        fc(e, t, n, t.pendingProps);
                case 24:
                    na(t, M, e.memoizedState.cache)
            }
            return Nc(e, t, n)
        }
        function Ic(e, t, n) {
            if (e !== null) {
                if (e.memoizedProps !== t.pendingProps)
                    z = !0;
                else {
                    if (!Pc(e, n) && !(t.flags & 128))
                        return z = !1,
                            Fc(e, t, n);
                    z = !!(e.flags & 131072)
                }
            } else
                z = !1,
                    j && t.flags & 1048576 && Ri(t, ji, t.index);
            switch (t.lanes = 0,
            t.tag) {
                case 16:
                    a: {
                        var r = t.pendingProps;
                        if (e = Fa(t.elementType),
                            t.type = e,
                            typeof e == `function`)
                            vi(e) ? (r = Zs(e, r),
                                t.tag = 1,
                                t = xc(null, t, e, r, n)) : (t.tag = 0,
                                    t = yc(null, t, e, r, n));
                        else {
                            if (e != null) {
                                var i = e.$$typeof;
                                if (i === ee) {
                                    t.tag = 11,
                                        t = lc(null, t, e, r, n);
                                    break a
                                }
                                if (i === re) {
                                    t.tag = 14,
                                        t = uc(null, t, e, r, n);
                                    break a
                                }
                            }
                            throw t = le(e) || e,
                            Error(o(306, t, ``))
                        }
                    }
                    return t;
                case 0:
                    return yc(e, t, t.type, t.pendingProps, n);
                case 1:
                    return r = t.type,
                        i = Zs(r, t.pendingProps),
                        xc(e, t, r, i, n);
                case 3:
                    a: {
                        if (ye(t, t.stateNode.containerInfo),
                            e === null)
                            throw Error(o(387));
                        r = t.pendingProps;
                        var a = t.memoizedState;
                        i = a.element,
                            Ya(e, t),
                            no(t, r, null, n);
                        var s = t.memoizedState;
                        if (r = s.cache,
                            na(t, M, r),
                            r !== a.cache && aa(t, [M], n, !0),
                            to(),
                            r = s.element,
                            a.isDehydrated) {
                            if (a = {
                                element: r,
                                isDehydrated: !1,
                                cache: s.cache
                            },
                                t.updateQueue.baseState = a,
                                t.memoizedState = a,
                                t.flags & 256) {
                                t = Sc(e, t, r, n);
                                break a
                            }
                            if (r !== i) {
                                i = Di(Error(o(424)), t),
                                    Qi(i),
                                    t = Sc(e, t, r, n);
                                break a
                            }
                            switch (e = t.stateNode.containerInfo,
                            e.nodeType) {
                                case 9:
                                    e = e.body;
                                    break;
                                default:
                                    e = e.nodeName === `HTML` ? e.ownerDocument.body : e
                            }
                            for (A = cf(e.firstChild),
                                Hi = t,
                                j = !0,
                                Ui = null,
                                Wi = !0,
                                n = Ka(t, null, r, n),
                                t.child = n; n;)
                                n.flags = n.flags & -3 | 4096,
                                    n = n.sibling
                        } else {
                            if (Xi(),
                                r === i) {
                                t = Nc(e, t, n);
                                break a
                            }
                            cc(e, t, r, n)
                        }
                        t = t.child
                    }
                    return t;
                case 26:
                    return vc(e, t),
                        e === null ? (n = kf(t.type, null, t.pendingProps, null)) ? t.memoizedState = n : j || (n = t.type,
                            e = t.pendingProps,
                            r = Bd(_e.current).createElement(n),
                            r[ht] = t,
                            r[gt] = e,
                            Pd(r, n, e),
                            Ot(r),
                            t.stateNode = r) : t.memoizedState = kf(t.type, e.memoizedProps, t.pendingProps, e.memoizedState),
                        null;
                case 27:
                    return xe(t),
                        e === null && j && (r = t.stateNode = ff(t.type, t.pendingProps, _e.current),
                            Hi = t,
                            Wi = !0,
                            i = A,
                            Zd(t.type) ? (lf = i,
                                A = cf(r.firstChild)) : A = i),
                        cc(e, t, t.pendingProps.children, n),
                        vc(e, t),
                        e === null && (t.flags |= 4194304),
                        t.child;
                case 5:
                    return e === null && j && ((i = r = A) && (r = tf(r, t.type, t.pendingProps, Wi),
                        r === null ? i = !1 : (t.stateNode = r,
                            Hi = t,
                            A = cf(r.firstChild),
                            Wi = !1,
                            i = !0)),
                        i || Ki(t)),
                        xe(t),
                        i = t.type,
                        a = t.pendingProps,
                        s = e === null ? null : e.memoizedProps,
                        r = a.children,
                        Ud(i, a) ? r = null : s !== null && Ud(i, s) && (t.flags |= 32),
                        t.memoizedState !== null && (i = Oo(e, t, jo, null, null, n),
                            Qf._currentValue = i),
                        vc(e, t),
                        cc(e, t, r, n),
                        t.child;
                case 6:
                    return e === null && j && ((e = n = A) && (n = nf(n, t.pendingProps, Wi),
                        n === null ? e = !1 : (t.stateNode = n,
                            Hi = t,
                            A = null,
                            e = !0)),
                        e || Ki(t)),
                        null;
                case 13:
                    return Ec(e, t, n);
                case 4:
                    return ye(t, t.stateNode.containerInfo),
                        r = t.pendingProps,
                        e === null ? t.child = Ga(t, null, r, n) : cc(e, t, r, n),
                        t.child;
                case 11:
                    return lc(e, t, t.type, t.pendingProps, n);
                case 7:
                    return cc(e, t, t.pendingProps, n),
                        t.child;
                case 8:
                    return cc(e, t, t.pendingProps.children, n),
                        t.child;
                case 12:
                    return cc(e, t, t.pendingProps.children, n),
                        t.child;
                case 10:
                    return r = t.pendingProps,
                        na(t, t.type, r.value),
                        cc(e, t, r.children, n),
                        t.child;
                case 9:
                    return i = t.type._context,
                        r = t.pendingProps.children,
                        ca(t),
                        i = la(i),
                        r = r(i),
                        t.flags |= 1,
                        cc(e, t, r, n),
                        t.child;
                case 14:
                    return uc(e, t, t.type, t.pendingProps, n);
                case 15:
                    return dc(e, t, t.type, t.pendingProps, n);
                case 19:
                    return Mc(e, t, n);
                case 31:
                    return _c(e, t, n);
                case 22:
                    return fc(e, t, n, t.pendingProps);
                case 24:
                    return ca(t),
                        r = la(M),
                        e === null ? (i = Ea(),
                            i === null && (i = G,
                                a = ha(),
                                i.pooledCache = a,
                                a.refCount++,
                                a !== null && (i.pooledCacheLanes |= n),
                                i = a),
                            t.memoizedState = {
                                parent: r,
                                cache: i
                            },
                            Ja(t),
                            na(t, M, i)) : ((e.lanes & n) !== 0 && (Ya(e, t),
                                no(t, null, null, n),
                                to()),
                                i = e.memoizedState,
                                a = t.memoizedState,
                                i.parent === r ? (r = a.cache,
                                    na(t, M, r),
                                    r !== i.cache && aa(t, [M], n, !0)) : (i = {
                                        parent: r,
                                        cache: r
                                    },
                                        t.memoizedState = i,
                                        t.lanes === 0 && (t.memoizedState = t.updateQueue.baseState = i),
                                        na(t, M, r))),
                        cc(e, t, t.pendingProps.children, n),
                        t.child;
                case 29:
                    throw t.pendingProps
            }
            throw Error(o(156, t.tag))
        }
        function Lc(e) {
            e.flags |= 4
        }
        function Rc(e, t, n, r, i) {
            if ((t = !!(e.mode & 32)) && (t = !1),
                t) {
                if (e.flags |= 16777216,
                    (i & 335544128) === i) {
                    if (e.stateNode.complete)
                        e.flags |= 8192;
                    else if (wu())
                        e.flags |= 8192;
                    else
                        throw Ia = Ma,
                        Aa
                }
            } else
                e.flags &= -16777217
        }
        function zc(e, t) {
            if (t.type !== `stylesheet` || t.state.loading & 4)
                e.flags &= -16777217;
            else if (e.flags |= 16777216,
                !Wf(t)) {
                if (wu())
                    e.flags |= 8192;
                else
                    throw Ia = Ma,
                    Aa
            }
        }
        function Bc(e, t) {
            t !== null && (e.flags |= 4),
                e.flags & 16384 && (t = e.tag === 22 ? 536870912 : rt(),
                    e.lanes |= t,
                    Xl |= t)
        }
        function Vc(e, t) {
            if (!j)
                switch (e.tailMode) {
                    case `hidden`:
                        t = e.tail;
                        for (var n = null; t !== null;)
                            t.alternate !== null && (n = t),
                                t = t.sibling;
                        n === null ? e.tail = null : n.sibling = null;
                        break;
                    case `collapsed`:
                        n = e.tail;
                        for (var r = null; n !== null;)
                            n.alternate !== null && (r = n),
                                n = n.sibling;
                        r === null ? t || e.tail === null ? e.tail = null : e.tail.sibling = null : r.sibling = null
                }
        }
        function B(e) {
            var t = e.alternate !== null && e.alternate.child === e.child
                , n = 0
                , r = 0;
            if (t)
                for (var i = e.child; i !== null;)
                    n |= i.lanes | i.childLanes,
                        r |= i.subtreeFlags & 65011712,
                        r |= i.flags & 65011712,
                        i.return = e,
                        i = i.sibling;
            else
                for (i = e.child; i !== null;)
                    n |= i.lanes | i.childLanes,
                        r |= i.subtreeFlags,
                        r |= i.flags,
                        i.return = e,
                        i = i.sibling;
            return e.subtreeFlags |= r,
                e.childLanes = n,
                t
        }
        function Hc(e, t, n) {
            var r = t.pendingProps;
            switch (Bi(t),
            t.tag) {
                case 16:
                case 15:
                case 0:
                case 11:
                case 7:
                case 8:
                case 12:
                case 9:
                case 14:
                    return B(t),
                        null;
                case 1:
                    return B(t),
                        null;
                case 3:
                    return n = t.stateNode,
                        r = null,
                        e !== null && (r = e.memoizedState.cache),
                        t.memoizedState.cache !== r && (t.flags |= 2048),
                        ra(M),
                        be(),
                        n.pendingContext && (n.context = n.pendingContext,
                            n.pendingContext = null),
                        (e === null || e.child === null) && (Yi(t) ? Lc(t) : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024,
                            Zi())),
                        B(t),
                        null;
                case 26:
                    var i = t.type
                        , a = t.memoizedState;
                    return e === null ? (Lc(t),
                        a === null ? (B(t),
                            Rc(t, i, null, r, n)) : (B(t),
                                zc(t, a))) : a ? a === e.memoizedState ? (B(t),
                                    t.flags &= -16777217) : (Lc(t),
                                        B(t),
                                        zc(t, a)) : (e = e.memoizedProps,
                                            e !== r && Lc(t),
                                            B(t),
                                            Rc(t, i, e, r, n)),
                        null;
                case 27:
                    if (Se(t),
                        n = _e.current,
                        i = t.type,
                        e !== null && t.stateNode != null)
                        e.memoizedProps !== r && Lc(t);
                    else {
                        if (!r) {
                            if (t.stateNode === null)
                                throw Error(o(166));
                            return B(t),
                                null
                        }
                        e = he.current,
                            Yi(t) ? qi(t, e) : (e = ff(i, r, n),
                                t.stateNode = e,
                                Lc(t))
                    }
                    return B(t),
                        null;
                case 5:
                    if (Se(t),
                        i = t.type,
                        e !== null && t.stateNode != null)
                        e.memoizedProps !== r && Lc(t);
                    else {
                        if (!r) {
                            if (t.stateNode === null)
                                throw Error(o(166));
                            return B(t),
                                null
                        }
                        if (a = he.current,
                            Yi(t))
                            qi(t, a);
                        else {
                            var s = Bd(_e.current);
                            switch (a) {
                                case 1:
                                    a = s.createElementNS(`http://www.w3.org/2000/svg`, i);
                                    break;
                                case 2:
                                    a = s.createElementNS(`http://www.w3.org/1998/Math/MathML`, i);
                                    break;
                                default:
                                    switch (i) {
                                        case `svg`:
                                            a = s.createElementNS(`http://www.w3.org/2000/svg`, i);
                                            break;
                                        case `math`:
                                            a = s.createElementNS(`http://www.w3.org/1998/Math/MathML`, i);
                                            break;
                                        case `script`:
                                            a = s.createElement(`div`),
                                                a.innerHTML = `<script><\/script>`,
                                                a = a.removeChild(a.firstChild);
                                            break;
                                        case `select`:
                                            a = typeof r.is == `string` ? s.createElement(`select`, {
                                                is: r.is
                                            }) : s.createElement(`select`),
                                                r.multiple ? a.multiple = !0 : r.size && (a.size = r.size);
                                            break;
                                        default:
                                            a = typeof r.is == `string` ? s.createElement(i, {
                                                is: r.is
                                            }) : s.createElement(i)
                                    }
                            }
                            a[ht] = t,
                                a[gt] = r;
                            a: for (s = t.child; s !== null;) {
                                if (s.tag === 5 || s.tag === 6)
                                    a.appendChild(s.stateNode);
                                else if (s.tag !== 4 && s.tag !== 27 && s.child !== null) {
                                    s.child.return = s,
                                        s = s.child;
                                    continue
                                }
                                if (s === t)
                                    break a;
                                for (; s.sibling === null;) {
                                    if (s.return === null || s.return === t)
                                        break a;
                                    s = s.return
                                }
                                s.sibling.return = s.return,
                                    s = s.sibling
                            }
                            t.stateNode = a;
                            a: switch (Pd(a, i, r),
                            i) {
                                case `button`:
                                case `input`:
                                case `select`:
                                case `textarea`:
                                    r = !!r.autoFocus;
                                    break a;
                                case `img`:
                                    r = !0;
                                    break a;
                                default:
                                    r = !1
                            }
                            r && Lc(t)
                        }
                    }
                    return B(t),
                        Rc(t, t.type, e === null ? null : e.memoizedProps, t.pendingProps, n),
                        null;
                case 6:
                    if (e && t.stateNode != null)
                        e.memoizedProps !== r && Lc(t);
                    else {
                        if (typeof r != `string` && t.stateNode === null)
                            throw Error(o(166));
                        if (e = _e.current,
                            Yi(t)) {
                            if (e = t.stateNode,
                                n = t.memoizedProps,
                                r = null,
                                i = Hi,
                                i !== null)
                                switch (i.tag) {
                                    case 27:
                                    case 5:
                                        r = i.memoizedProps
                                }
                            e[ht] = t,
                                e = !!(e.nodeValue === n || r !== null && !0 === r.suppressHydrationWarning || Md(e.nodeValue, n)),
                                e || Ki(t, !0)
                        } else
                            e = Bd(e).createTextNode(r),
                                e[ht] = t,
                                t.stateNode = e
                    }
                    return B(t),
                        null;
                case 31:
                    if (n = t.memoizedState,
                        e === null || e.memoizedState !== null) {
                        if (r = Yi(t),
                            n !== null) {
                            if (e === null) {
                                if (!r)
                                    throw Error(o(318));
                                if (e = t.memoizedState,
                                    e = e === null ? null : e.dehydrated,
                                    !e)
                                    throw Error(o(557));
                                e[ht] = t
                            } else
                                Xi(),
                                    !(t.flags & 128) && (t.memoizedState = null),
                                    t.flags |= 4;
                            B(t),
                                e = !1
                        } else
                            n = Zi(),
                                e !== null && e.memoizedState !== null && (e.memoizedState.hydrationErrors = n),
                                e = !0;
                        if (!e)
                            return t.flags & 256 ? (_o(t),
                                t) : (_o(t),
                                    null);
                        if (t.flags & 128)
                            throw Error(o(558))
                    }
                    return B(t),
                        null;
                case 13:
                    if (r = t.memoizedState,
                        e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
                        if (i = Yi(t),
                            r !== null && r.dehydrated !== null) {
                            if (e === null) {
                                if (!i)
                                    throw Error(o(318));
                                if (i = t.memoizedState,
                                    i = i === null ? null : i.dehydrated,
                                    !i)
                                    throw Error(o(317));
                                i[ht] = t
                            } else
                                Xi(),
                                    !(t.flags & 128) && (t.memoizedState = null),
                                    t.flags |= 4;
                            B(t),
                                i = !1
                        } else
                            i = Zi(),
                                e !== null && e.memoizedState !== null && (e.memoizedState.hydrationErrors = i),
                                i = !0;
                        if (!i)
                            return t.flags & 256 ? (_o(t),
                                t) : (_o(t),
                                    null)
                    }
                    return _o(t),
                        t.flags & 128 ? (t.lanes = n,
                            t) : (n = r !== null,
                                e = e !== null && e.memoizedState !== null,
                                n && (r = t.child,
                                    i = null,
                                    r.alternate !== null && r.alternate.memoizedState !== null && r.alternate.memoizedState.cachePool !== null && (i = r.alternate.memoizedState.cachePool.pool),
                                    a = null,
                                    r.memoizedState !== null && r.memoizedState.cachePool !== null && (a = r.memoizedState.cachePool.pool),
                                    a !== i && (r.flags |= 2048)),
                                n !== e && n && (t.child.flags |= 8192),
                                Bc(t, t.updateQueue),
                                B(t),
                                null);
                case 4:
                    return be(),
                        e === null && Sd(t.stateNode.containerInfo),
                        B(t),
                        null;
                case 10:
                    return ra(t.type),
                        B(t),
                        null;
                case 19:
                    if (D(N),
                        r = t.memoizedState,
                        r === null)
                        return B(t),
                            null;
                    if (i = !!(t.flags & 128),
                        a = r.rendering,
                        a === null) {
                        if (i)
                            Vc(r, !1);
                        else {
                            if (Y !== 0 || e !== null && e.flags & 128)
                                for (e = t.child; e !== null;) {
                                    if (a = vo(e),
                                        a !== null) {
                                        for (t.flags |= 128,
                                            Vc(r, !1),
                                            e = a.updateQueue,
                                            t.updateQueue = e,
                                            Bc(t, e),
                                            t.subtreeFlags = 0,
                                            e = n,
                                            n = t.child; n !== null;)
                                            bi(n, e),
                                                n = n.sibling;
                                        return O(N, N.current & 1 | 2),
                                            j && Li(t, r.treeForkCount),
                                            t.child
                                    }
                                    e = e.sibling
                                }
                            r.tail !== null && Pe() > nu && (t.flags |= 128,
                                i = !0,
                                Vc(r, !1),
                                t.lanes = 4194304)
                        }
                    } else {
                        if (!i) {
                            if (e = vo(a),
                                e !== null) {
                                if (t.flags |= 128,
                                    i = !0,
                                    e = e.updateQueue,
                                    t.updateQueue = e,
                                    Bc(t, e),
                                    Vc(r, !0),
                                    r.tail === null && r.tailMode === `hidden` && !a.alternate && !j)
                                    return B(t),
                                        null
                            } else
                                2 * Pe() - r.renderingStartTime > nu && n !== 536870912 && (t.flags |= 128,
                                    i = !0,
                                    Vc(r, !1),
                                    t.lanes = 4194304)
                        }
                        r.isBackwards ? (a.sibling = t.child,
                            t.child = a) : (e = r.last,
                                e === null ? t.child = a : e.sibling = a,
                                r.last = a)
                    }
                    return r.tail === null ? (B(t),
                        null) : (e = r.tail,
                            r.rendering = e,
                            r.tail = e.sibling,
                            r.renderingStartTime = Pe(),
                            e.sibling = null,
                            n = N.current,
                            O(N, i ? n & 1 | 2 : n & 1),
                            j && Li(t, r.treeForkCount),
                            e);
                case 22:
                case 23:
                    return _o(t),
                        lo(),
                        r = t.memoizedState !== null,
                        e === null ? r && (t.flags |= 8192) : e.memoizedState !== null !== r && (t.flags |= 8192),
                        r ? n & 536870912 && !(t.flags & 128) && (B(t),
                            t.subtreeFlags & 6 && (t.flags |= 8192)) : B(t),
                        n = t.updateQueue,
                        n !== null && Bc(t, n.retryQueue),
                        n = null,
                        e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (n = e.memoizedState.cachePool.pool),
                        r = null,
                        t.memoizedState !== null && t.memoizedState.cachePool !== null && (r = t.memoizedState.cachePool.pool),
                        r !== n && (t.flags |= 2048),
                        e !== null && D(Ta),
                        null;
                case 24:
                    return n = null,
                        e !== null && (n = e.memoizedState.cache),
                        t.memoizedState.cache !== n && (t.flags |= 2048),
                        ra(M),
                        B(t),
                        null;
                case 25:
                    return null;
                case 30:
                    return null
            }
            throw Error(o(156, t.tag))
        }
        function Uc(e, t) {
            switch (Bi(t),
            t.tag) {
                case 1:
                    return e = t.flags,
                        e & 65536 ? (t.flags = e & -65537 | 128,
                            t) : null;
                case 3:
                    return ra(M),
                        be(),
                        e = t.flags,
                        e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128,
                            t) : null;
                case 26:
                case 27:
                case 5:
                    return Se(t),
                        null;
                case 31:
                    if (t.memoizedState !== null) {
                        if (_o(t),
                            t.alternate === null)
                            throw Error(o(340));
                        Xi()
                    }
                    return e = t.flags,
                        e & 65536 ? (t.flags = e & -65537 | 128,
                            t) : null;
                case 13:
                    if (_o(t),
                        e = t.memoizedState,
                        e !== null && e.dehydrated !== null) {
                        if (t.alternate === null)
                            throw Error(o(340));
                        Xi()
                    }
                    return e = t.flags,
                        e & 65536 ? (t.flags = e & -65537 | 128,
                            t) : null;
                case 19:
                    return D(N),
                        null;
                case 4:
                    return be(),
                        null;
                case 10:
                    return ra(t.type),
                        null;
                case 22:
                case 23:
                    return _o(t),
                        lo(),
                        e !== null && D(Ta),
                        e = t.flags,
                        e & 65536 ? (t.flags = e & -65537 | 128,
                            t) : null;
                case 24:
                    return ra(M),
                        null;
                case 25:
                    return null;
                default:
                    return null
            }
        }
        function Wc(e, t) {
            switch (Bi(t),
            t.tag) {
                case 3:
                    ra(M),
                        be();
                    break;
                case 26:
                case 27:
                case 5:
                    Se(t);
                    break;
                case 4:
                    be();
                    break;
                case 31:
                    t.memoizedState !== null && _o(t);
                    break;
                case 13:
                    _o(t);
                    break;
                case 19:
                    D(N);
                    break;
                case 10:
                    ra(t.type);
                    break;
                case 22:
                case 23:
                    _o(t),
                        lo(),
                        e !== null && D(Ta);
                    break;
                case 24:
                    ra(M)
            }
        }
        function Gc(e, t) {
            try {
                var n = t.updateQueue
                    , r = n === null ? null : n.lastEffect;
                if (r !== null) {
                    var i = r.next;
                    n = i;
                    do {
                        if ((n.tag & e) === e) {
                            r = void 0;
                            var a = n.create
                                , o = n.inst;
                            r = a(),
                                o.destroy = r
                        }
                        n = n.next
                    } while (n !== i)
                }
            } catch (e) {
                Z(t, t.return, e)
            }
        }
        function Kc(e, t, n) {
            try {
                var r = t.updateQueue
                    , i = r === null ? null : r.lastEffect;
                if (i !== null) {
                    var a = i.next;
                    r = a;
                    do {
                        if ((r.tag & e) === e) {
                            var o = r.inst
                                , s = o.destroy;
                            if (s !== void 0) {
                                o.destroy = void 0,
                                    i = t;
                                var c = n
                                    , l = s;
                                try {
                                    l()
                                } catch (e) {
                                    Z(i, c, e)
                                }
                            }
                        }
                        r = r.next
                    } while (r !== a)
                }
            } catch (e) {
                Z(t, t.return, e)
            }
        }
        function qc(e) {
            var t = e.updateQueue;
            if (t !== null) {
                var n = e.stateNode;
                try {
                    io(t, n)
                } catch (t) {
                    Z(e, e.return, t)
                }
            }
        }
        function Jc(e, t, n) {
            n.props = Zs(e.type, e.memoizedProps),
                n.state = e.memoizedState;
            try {
                n.componentWillUnmount()
            } catch (n) {
                Z(e, t, n)
            }
        }
        function Yc(e, t) {
            try {
                var n = e.ref;
                if (n !== null) {
                    switch (e.tag) {
                        case 26:
                        case 27:
                        case 5:
                            var r = e.stateNode;
                            break;
                        case 30:
                            r = e.stateNode;
                            break;
                        default:
                            r = e.stateNode
                    }
                    typeof n == `function` ? e.refCleanup = n(r) : n.current = r
                }
            } catch (n) {
                Z(e, t, n)
            }
        }
        function Xc(e, t) {
            var n = e.ref
                , r = e.refCleanup;
            if (n !== null) {
                if (typeof r == `function`)
                    try {
                        r()
                    } catch (n) {
                        Z(e, t, n)
                    } finally {
                        e.refCleanup = null,
                            e = e.alternate,
                            e != null && (e.refCleanup = null)
                    }
                else if (typeof n == `function`)
                    try {
                        n(null)
                    } catch (n) {
                        Z(e, t, n)
                    }
                else
                    n.current = null
            }
        }
        function Zc(e) {
            var t = e.type
                , n = e.memoizedProps
                , r = e.stateNode;
            try {
                a: switch (t) {
                    case `button`:
                    case `input`:
                    case `select`:
                    case `textarea`:
                        n.autoFocus && r.focus();
                        break a;
                    case `img`:
                        n.src ? r.src = n.src : n.srcSet && (r.srcset = n.srcSet)
                }
            } catch (t) {
                Z(e, e.return, t)
            }
        }
        function Qc(e, t, n) {
            try {
                var r = e.stateNode;
                Fd(r, e.type, n, t),
                    r[gt] = t
            } catch (t) {
                Z(e, e.return, t)
            }
        }
        function $c(e) {
            return e.tag === 5 || e.tag === 3 || e.tag === 26 || e.tag === 27 && Zd(e.type) || e.tag === 4
        }
        function el(e) {
            a: for (; ;) {
                for (; e.sibling === null;) {
                    if (e.return === null || $c(e.return))
                        return null;
                    e = e.return
                }
                for (e.sibling.return = e.return,
                    e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18;) {
                    if (e.tag === 27 && Zd(e.type) || e.flags & 2 || e.child === null || e.tag === 4)
                        continue a;
                    e.child.return = e,
                        e = e.child
                }
                if (!(e.flags & 2))
                    return e.stateNode
            }
        }
        function tl(e, t, n) {
            var r = e.tag;
            if (r === 5 || r === 6)
                e = e.stateNode,
                    t ? (n.nodeType === 9 ? n.body : n.nodeName === `HTML` ? n.ownerDocument.body : n).insertBefore(e, t) : (t = n.nodeType === 9 ? n.body : n.nodeName === `HTML` ? n.ownerDocument.body : n,
                        t.appendChild(e),
                        n = n._reactRootContainer,
                        n != null || t.onclick !== null || (t.onclick = ln));
            else if (r !== 4 && (r === 27 && Zd(e.type) && (n = e.stateNode,
                t = null),
                e = e.child,
                e !== null))
                for (tl(e, t, n),
                    e = e.sibling; e !== null;)
                    tl(e, t, n),
                        e = e.sibling
        }
        function nl(e, t, n) {
            var r = e.tag;
            if (r === 5 || r === 6)
                e = e.stateNode,
                    t ? n.insertBefore(e, t) : n.appendChild(e);
            else if (r !== 4 && (r === 27 && Zd(e.type) && (n = e.stateNode),
                e = e.child,
                e !== null))
                for (nl(e, t, n),
                    e = e.sibling; e !== null;)
                    nl(e, t, n),
                        e = e.sibling
        }
        function rl(e) {
            var t = e.stateNode
                , n = e.memoizedProps;
            try {
                for (var r = e.type, i = t.attributes; i.length;)
                    t.removeAttributeNode(i[0]);
                Pd(t, r, n),
                    t[ht] = e,
                    t[gt] = n
            } catch (t) {
                Z(e, e.return, t)
            }
        }
        var il = !1
            , V = !1
            , al = !1
            , ol = typeof WeakSet == `function` ? WeakSet : Set
            , H = null;
        function sl(e, t) {
            if (e = e.containerInfo,
                Rd = sp,
                e = Ir(e),
                Lr(e)) {
                if (`selectionStart` in e)
                    var n = {
                        start: e.selectionStart,
                        end: e.selectionEnd
                    };
                else
                    a: {
                        n = (n = e.ownerDocument) && n.defaultView || window;
                        var r = n.getSelection && n.getSelection();
                        if (r && r.rangeCount !== 0) {
                            n = r.anchorNode;
                            var i = r.anchorOffset
                                , a = r.focusNode;
                            r = r.focusOffset;
                            try {
                                n.nodeType,
                                    a.nodeType
                            } catch {
                                n = null;
                                break a
                            }
                            var s = 0
                                , c = -1
                                , l = -1
                                , u = 0
                                , d = 0
                                , f = e
                                , p = null;
                            b: for (; ;) {
                                for (var m; f !== n || i !== 0 && f.nodeType !== 3 || (c = s + i),
                                    f !== a || r !== 0 && f.nodeType !== 3 || (l = s + r),
                                    f.nodeType === 3 && (s += f.nodeValue.length),
                                    (m = f.firstChild) !== null;)
                                    p = f,
                                        f = m;
                                for (; ;) {
                                    if (f === e)
                                        break b;
                                    if (p === n && ++u === i && (c = s),
                                        p === a && ++d === r && (l = s),
                                        (m = f.nextSibling) !== null)
                                        break;
                                    f = p,
                                        p = f.parentNode
                                }
                                f = m
                            }
                            n = c === -1 || l === -1 ? null : {
                                start: c,
                                end: l
                            }
                        } else
                            n = null
                    }
                n ||= {
                    start: 0,
                    end: 0
                }
            } else
                n = null;
            for (zd = {
                focusedElem: e,
                selectionRange: n
            },
                sp = !1,
                H = t; H !== null;)
                if (t = H,
                    e = t.child,
                    t.subtreeFlags & 1028 && e !== null)
                    e.return = t,
                        H = e;
                else
                    for (; H !== null;) {
                        switch (t = H,
                        a = t.alternate,
                        e = t.flags,
                        t.tag) {
                            case 0:
                                if (e & 4 && (e = t.updateQueue,
                                    e = e === null ? null : e.events,
                                    e !== null))
                                    for (n = 0; n < e.length; n++)
                                        i = e[n],
                                            i.ref.impl = i.nextImpl;
                                break;
                            case 11:
                            case 15:
                                break;
                            case 1:
                                if (e & 1024 && a !== null) {
                                    e = void 0,
                                        n = t,
                                        i = a.memoizedProps,
                                        a = a.memoizedState,
                                        r = n.stateNode;
                                    try {
                                        var h = Zs(n.type, i);
                                        e = r.getSnapshotBeforeUpdate(h, a),
                                            r.__reactInternalSnapshotBeforeUpdate = e
                                    } catch (e) {
                                        Z(n, n.return, e)
                                    }
                                }
                                break;
                            case 3:
                                if (e & 1024) {
                                    if (e = t.stateNode.containerInfo,
                                        n = e.nodeType,
                                        n === 9)
                                        ef(e);
                                    else if (n === 1)
                                        switch (e.nodeName) {
                                            case `HEAD`:
                                            case `HTML`:
                                            case `BODY`:
                                                ef(e);
                                                break;
                                            default:
                                                e.textContent = ``
                                        }
                                }
                                break;
                            case 5:
                            case 26:
                            case 27:
                            case 6:
                            case 4:
                            case 17:
                                break;
                            default:
                                if (e & 1024)
                                    throw Error(o(163))
                        }
                        if (e = t.sibling,
                            e !== null) {
                            e.return = t.return,
                                H = e;
                            break
                        }
                        H = t.return
                    }
        }
        function cl(e, t, n) {
            var r = n.flags;
            switch (n.tag) {
                case 0:
                case 11:
                case 15:
                    Sl(e, n),
                        r & 4 && Gc(5, n);
                    break;
                case 1:
                    if (Sl(e, n),
                        r & 4) {
                        if (e = n.stateNode,
                            t === null)
                            try {
                                e.componentDidMount()
                            } catch (e) {
                                Z(n, n.return, e)
                            }
                        else {
                            var i = Zs(n.type, t.memoizedProps);
                            t = t.memoizedState;
                            try {
                                e.componentDidUpdate(i, t, e.__reactInternalSnapshotBeforeUpdate)
                            } catch (e) {
                                Z(n, n.return, e)
                            }
                        }
                    }
                    r & 64 && qc(n),
                        r & 512 && Yc(n, n.return);
                    break;
                case 3:
                    if (Sl(e, n),
                        r & 64 && (e = n.updateQueue,
                            e !== null)) {
                        if (t = null,
                            n.child !== null)
                            switch (n.child.tag) {
                                case 27:
                                case 5:
                                    t = n.child.stateNode;
                                    break;
                                case 1:
                                    t = n.child.stateNode
                            }
                        try {
                            io(e, t)
                        } catch (e) {
                            Z(n, n.return, e)
                        }
                    }
                    break;
                case 27:
                    t === null && r & 4 && rl(n);
                case 26:
                case 5:
                    Sl(e, n),
                        t === null && r & 4 && Zc(n),
                        r & 512 && Yc(n, n.return);
                    break;
                case 12:
                    Sl(e, n);
                    break;
                case 31:
                    Sl(e, n),
                        r & 4 && pl(e, n);
                    break;
                case 13:
                    Sl(e, n),
                        r & 4 && ml(e, n),
                        r & 64 && (e = n.memoizedState,
                            e !== null && (e = e.dehydrated,
                                e !== null && (n = Ju.bind(null, n),
                                    sf(e, n))));
                    break;
                case 22:
                    if (r = n.memoizedState !== null || il,
                        !r) {
                        t = t !== null && t.memoizedState !== null || V,
                            i = il;
                        var a = V;
                        il = r,
                            (V = t) && !a ? wl(e, n, !!(n.subtreeFlags & 8772)) : Sl(e, n),
                            il = i,
                            V = a
                    }
                    break;
                case 30:
                    break;
                default:
                    Sl(e, n)
            }
        }
        function ll(e) {
            var t = e.alternate;
            t !== null && (e.alternate = null,
                ll(t)),
                e.child = null,
                e.deletions = null,
                e.sibling = null,
                e.tag === 5 && (t = e.stateNode,
                    t !== null && Ct(t)),
                e.stateNode = null,
                e.return = null,
                e.dependencies = null,
                e.memoizedProps = null,
                e.memoizedState = null,
                e.pendingProps = null,
                e.stateNode = null,
                e.updateQueue = null
        }
        var U = null
            , ul = !1;
        function dl(e, t, n) {
            for (n = n.child; n !== null;)
                fl(e, t, n),
                    n = n.sibling
        }
        function fl(e, t, n) {
            if (We && typeof We.onCommitFiberUnmount == `function`)
                try {
                    We.onCommitFiberUnmount(Ue, n)
                } catch { }
            switch (n.tag) {
                case 26:
                    V || Xc(n, t),
                        dl(e, t, n),
                        n.memoizedState ? n.memoizedState.count-- : n.stateNode && (n = n.stateNode,
                            n.parentNode.removeChild(n));
                    break;
                case 27:
                    V || Xc(n, t);
                    var r = U
                        , i = ul;
                    Zd(n.type) && (U = n.stateNode,
                        ul = !1),
                        dl(e, t, n),
                        pf(n.stateNode),
                        U = r,
                        ul = i;
                    break;
                case 5:
                    V || Xc(n, t);
                case 6:
                    if (r = U,
                        i = ul,
                        U = null,
                        dl(e, t, n),
                        U = r,
                        ul = i,
                        U !== null) {
                        if (ul)
                            try {
                                (U.nodeType === 9 ? U.body : U.nodeName === `HTML` ? U.ownerDocument.body : U).removeChild(n.stateNode)
                            } catch (e) {
                                Z(n, t, e)
                            }
                        else
                            try {
                                U.removeChild(n.stateNode)
                            } catch (e) {
                                Z(n, t, e)
                            }
                    }
                    break;
                case 18:
                    U !== null && (ul ? (e = U,
                        Qd(e.nodeType === 9 ? e.body : e.nodeName === `HTML` ? e.ownerDocument.body : e, n.stateNode),
                        Np(e)) : Qd(U, n.stateNode));
                    break;
                case 4:
                    r = U,
                        i = ul,
                        U = n.stateNode.containerInfo,
                        ul = !0,
                        dl(e, t, n),
                        U = r,
                        ul = i;
                    break;
                case 0:
                case 11:
                case 14:
                case 15:
                    Kc(2, n, t),
                        V || Kc(4, n, t),
                        dl(e, t, n);
                    break;
                case 1:
                    V || (Xc(n, t),
                        r = n.stateNode,
                        typeof r.componentWillUnmount == `function` && Jc(n, t, r)),
                        dl(e, t, n);
                    break;
                case 21:
                    dl(e, t, n);
                    break;
                case 22:
                    V = (r = V) || n.memoizedState !== null,
                        dl(e, t, n),
                        V = r;
                    break;
                default:
                    dl(e, t, n)
            }
        }
        function pl(e, t) {
            if (t.memoizedState === null && (e = t.alternate,
                e !== null && (e = e.memoizedState,
                    e !== null))) {
                e = e.dehydrated;
                try {
                    Np(e)
                } catch (e) {
                    Z(t, t.return, e)
                }
            }
        }
        function ml(e, t) {
            if (t.memoizedState === null && (e = t.alternate,
                e !== null && (e = e.memoizedState,
                    e !== null && (e = e.dehydrated,
                        e !== null))))
                try {
                    Np(e)
                } catch (e) {
                    Z(t, t.return, e)
                }
        }
        function hl(e) {
            switch (e.tag) {
                case 31:
                case 13:
                case 19:
                    var t = e.stateNode;
                    return t === null && (t = e.stateNode = new ol),
                        t;
                case 22:
                    return e = e.stateNode,
                        t = e._retryCache,
                        t === null && (t = e._retryCache = new ol),
                        t;
                default:
                    throw Error(o(435, e.tag))
            }
        }
        function gl(e, t) {
            var n = hl(e);
            t.forEach(function (t) {
                if (!n.has(t)) {
                    n.add(t);
                    var r = Yu.bind(null, e, t);
                    t.then(r, r)
                }
            })
        }
        function _l(e, t) {
            var n = t.deletions;
            if (n !== null)
                for (var r = 0; r < n.length; r++) {
                    var i = n[r]
                        , a = e
                        , s = t
                        , c = s;
                    a: for (; c !== null;) {
                        switch (c.tag) {
                            case 27:
                                if (Zd(c.type)) {
                                    U = c.stateNode,
                                        ul = !1;
                                    break a
                                }
                                break;
                            case 5:
                                U = c.stateNode,
                                    ul = !1;
                                break a;
                            case 3:
                            case 4:
                                U = c.stateNode.containerInfo,
                                    ul = !0;
                                break a
                        }
                        c = c.return
                    }
                    if (U === null)
                        throw Error(o(160));
                    fl(a, s, i),
                        U = null,
                        ul = !1,
                        a = i.alternate,
                        a !== null && (a.return = null),
                        i.return = null
                }
            if (t.subtreeFlags & 13886)
                for (t = t.child; t !== null;)
                    yl(t, e),
                        t = t.sibling
        }
        var vl = null;
        function yl(e, t) {
            var n = e.alternate
                , r = e.flags;
            switch (e.tag) {
                case 0:
                case 11:
                case 14:
                case 15:
                    _l(t, e),
                        bl(e),
                        r & 4 && (Kc(3, e, e.return),
                            Gc(3, e),
                            Kc(5, e, e.return));
                    break;
                case 1:
                    _l(t, e),
                        bl(e),
                        r & 512 && (V || n === null || Xc(n, n.return)),
                        r & 64 && il && (e = e.updateQueue,
                            e !== null && (r = e.callbacks,
                                r !== null && (n = e.shared.hiddenCallbacks,
                                    e.shared.hiddenCallbacks = n === null ? r : n.concat(r))));
                    break;
                case 26:
                    var i = vl;
                    if (_l(t, e),
                        bl(e),
                        r & 512 && (V || n === null || Xc(n, n.return)),
                        r & 4) {
                        var a = n === null ? null : n.memoizedState;
                        if (r = e.memoizedState,
                            n === null) {
                            if (r === null) {
                                if (e.stateNode === null) {
                                    a: {
                                        r = e.type,
                                            n = e.memoizedProps,
                                            i = i.ownerDocument || i;
                                        b: switch (r) {
                                            case `title`:
                                                a = i.getElementsByTagName(`title`)[0],
                                                    (!a || a[St] || a[ht] || a.namespaceURI === `http://www.w3.org/2000/svg` || a.hasAttribute(`itemprop`)) && (a = i.createElement(r),
                                                        i.head.insertBefore(a, i.querySelector(`head > title`))),
                                                    Pd(a, r, n),
                                                    a[ht] = e,
                                                    Ot(a),
                                                    r = a;
                                                break a;
                                            case `link`:
                                                var s = Vf(`link`, `href`, i).get(r + (n.href || ``));
                                                if (s) {
                                                    for (var c = 0; c < s.length; c++)
                                                        if (a = s[c],
                                                            a.getAttribute(`href`) === (n.href == null || n.href === `` ? null : n.href) && a.getAttribute(`rel`) === (n.rel == null ? null : n.rel) && a.getAttribute(`title`) === (n.title == null ? null : n.title) && a.getAttribute(`crossorigin`) === (n.crossOrigin == null ? null : n.crossOrigin)) {
                                                            s.splice(c, 1);
                                                            break b
                                                        }
                                                }
                                                a = i.createElement(r),
                                                    Pd(a, r, n),
                                                    i.head.appendChild(a);
                                                break;
                                            case `meta`:
                                                if (s = Vf(`meta`, `content`, i).get(r + (n.content || ``))) {
                                                    for (c = 0; c < s.length; c++)
                                                        if (a = s[c],
                                                            a.getAttribute(`content`) === (n.content == null ? null : `` + n.content) && a.getAttribute(`name`) === (n.name == null ? null : n.name) && a.getAttribute(`property`) === (n.property == null ? null : n.property) && a.getAttribute(`http-equiv`) === (n.httpEquiv == null ? null : n.httpEquiv) && a.getAttribute(`charset`) === (n.charSet == null ? null : n.charSet)) {
                                                            s.splice(c, 1);
                                                            break b
                                                        }
                                                }
                                                a = i.createElement(r),
                                                    Pd(a, r, n),
                                                    i.head.appendChild(a);
                                                break;
                                            default:
                                                throw Error(o(468, r))
                                        }
                                        a[ht] = e,
                                            Ot(a),
                                            r = a
                                    }
                                    e.stateNode = r
                                } else
                                    Hf(i, e.type, e.stateNode)
                            } else
                                e.stateNode = If(i, r, e.memoizedProps)
                        } else
                            a === r ? r === null && e.stateNode !== null && Qc(e, e.memoizedProps, n.memoizedProps) : (a === null ? n.stateNode !== null && (n = n.stateNode,
                                n.parentNode.removeChild(n)) : a.count--,
                                r === null ? Hf(i, e.type, e.stateNode) : If(i, r, e.memoizedProps))
                    }
                    break;
                case 27:
                    _l(t, e),
                        bl(e),
                        r & 512 && (V || n === null || Xc(n, n.return)),
                        n !== null && r & 4 && Qc(e, e.memoizedProps, n.memoizedProps);
                    break;
                case 5:
                    if (_l(t, e),
                        bl(e),
                        r & 512 && (V || n === null || Xc(n, n.return)),
                        e.flags & 32) {
                        i = e.stateNode;
                        try {
                            en(i, ``)
                        } catch (t) {
                            Z(e, e.return, t)
                        }
                    }
                    r & 4 && e.stateNode != null && (i = e.memoizedProps,
                        Qc(e, i, n === null ? i : n.memoizedProps)),
                        r & 1024 && (al = !0);
                    break;
                case 6:
                    if (_l(t, e),
                        bl(e),
                        r & 4) {
                        if (e.stateNode === null)
                            throw Error(o(162));
                        r = e.memoizedProps,
                            n = e.stateNode;
                        try {
                            n.nodeValue = r
                        } catch (t) {
                            Z(e, e.return, t)
                        }
                    }
                    break;
                case 3:
                    if (Bf = null,
                        i = vl,
                        vl = gf(t.containerInfo),
                        _l(t, e),
                        vl = i,
                        bl(e),
                        r & 4 && n !== null && n.memoizedState.isDehydrated)
                        try {
                            Np(t.containerInfo)
                        } catch (t) {
                            Z(e, e.return, t)
                        }
                    al && (al = !1,
                        xl(e));
                    break;
                case 4:
                    r = vl,
                        vl = gf(e.stateNode.containerInfo),
                        _l(t, e),
                        bl(e),
                        vl = r;
                    break;
                case 12:
                    _l(t, e),
                        bl(e);
                    break;
                case 31:
                    _l(t, e),
                        bl(e),
                        r & 4 && (r = e.updateQueue,
                            r !== null && (e.updateQueue = null,
                                gl(e, r)));
                    break;
                case 13:
                    _l(t, e),
                        bl(e),
                        e.child.flags & 8192 && e.memoizedState !== null != (n !== null && n.memoizedState !== null) && (eu = Pe()),
                        r & 4 && (r = e.updateQueue,
                            r !== null && (e.updateQueue = null,
                                gl(e, r)));
                    break;
                case 22:
                    i = e.memoizedState !== null;
                    var l = n !== null && n.memoizedState !== null
                        , u = il
                        , d = V;
                    if (il = u || i,
                        V = d || l,
                        _l(t, e),
                        V = d,
                        il = u,
                        bl(e),
                        r & 8192)
                        a: for (t = e.stateNode,
                            t._visibility = i ? t._visibility & -2 : t._visibility | 1,
                            i && (n === null || l || il || V || Cl(e)),
                            n = null,
                            t = e; ;) {
                            if (t.tag === 5 || t.tag === 26) {
                                if (n === null) {
                                    l = n = t;
                                    try {
                                        if (a = l.stateNode,
                                            i)
                                            s = a.style,
                                                typeof s.setProperty == `function` ? s.setProperty(`display`, `none`, `important`) : s.display = `none`;
                                        else {
                                            c = l.stateNode;
                                            var f = l.memoizedProps.style
                                                , p = f != null && f.hasOwnProperty(`display`) ? f.display : null;
                                            c.style.display = p == null || typeof p == `boolean` ? `` : (`` + p).trim()
                                        }
                                    } catch (e) {
                                        Z(l, l.return, e)
                                    }
                                }
                            } else if (t.tag === 6) {
                                if (n === null) {
                                    l = t;
                                    try {
                                        l.stateNode.nodeValue = i ? `` : l.memoizedProps
                                    } catch (e) {
                                        Z(l, l.return, e)
                                    }
                                }
                            } else if (t.tag === 18) {
                                if (n === null) {
                                    l = t;
                                    try {
                                        var m = l.stateNode;
                                        i ? $d(m, !0) : $d(l.stateNode, !1)
                                    } catch (e) {
                                        Z(l, l.return, e)
                                    }
                                }
                            } else if ((t.tag !== 22 && t.tag !== 23 || t.memoizedState === null || t === e) && t.child !== null) {
                                t.child.return = t,
                                    t = t.child;
                                continue
                            }
                            if (t === e)
                                break a;
                            for (; t.sibling === null;) {
                                if (t.return === null || t.return === e)
                                    break a;
                                n === t && (n = null),
                                    t = t.return
                            }
                            n === t && (n = null),
                                t.sibling.return = t.return,
                                t = t.sibling
                        }
                    r & 4 && (r = e.updateQueue,
                        r !== null && (n = r.retryQueue,
                            n !== null && (r.retryQueue = null,
                                gl(e, n))));
                    break;
                case 19:
                    _l(t, e),
                        bl(e),
                        r & 4 && (r = e.updateQueue,
                            r !== null && (e.updateQueue = null,
                                gl(e, r)));
                    break;
                case 30:
                    break;
                case 21:
                    break;
                default:
                    _l(t, e),
                        bl(e)
            }
        }
        function bl(e) {
            var t = e.flags;
            if (t & 2) {
                try {
                    for (var n, r = e.return; r !== null;) {
                        if ($c(r)) {
                            n = r;
                            break
                        }
                        r = r.return
                    }
                    if (n == null)
                        throw Error(o(160));
                    switch (n.tag) {
                        case 27:
                            var i = n.stateNode;
                            nl(e, el(e), i);
                            break;
                        case 5:
                            var a = n.stateNode;
                            n.flags & 32 && (en(a, ``),
                                n.flags &= -33),
                                nl(e, el(e), a);
                            break;
                        case 3:
                        case 4:
                            var s = n.stateNode.containerInfo;
                            tl(e, el(e), s);
                            break;
                        default:
                            throw Error(o(161))
                    }
                } catch (t) {
                    Z(e, e.return, t)
                }
                e.flags &= -3
            }
            t & 4096 && (e.flags &= -4097)
        }
        function xl(e) {
            if (e.subtreeFlags & 1024)
                for (e = e.child; e !== null;) {
                    var t = e;
                    xl(t),
                        t.tag === 5 && t.flags & 1024 && t.stateNode.reset(),
                        e = e.sibling
                }
        }
        function Sl(e, t) {
            if (t.subtreeFlags & 8772)
                for (t = t.child; t !== null;)
                    cl(e, t.alternate, t),
                        t = t.sibling
        }
        function Cl(e) {
            for (e = e.child; e !== null;) {
                var t = e;
                switch (t.tag) {
                    case 0:
                    case 11:
                    case 14:
                    case 15:
                        Kc(4, t, t.return),
                            Cl(t);
                        break;
                    case 1:
                        Xc(t, t.return);
                        var n = t.stateNode;
                        typeof n.componentWillUnmount == `function` && Jc(t, t.return, n),
                            Cl(t);
                        break;
                    case 27:
                        pf(t.stateNode);
                    case 26:
                    case 5:
                        Xc(t, t.return),
                            Cl(t);
                        break;
                    case 22:
                        t.memoizedState === null && Cl(t);
                        break;
                    case 30:
                        Cl(t);
                        break;
                    default:
                        Cl(t)
                }
                e = e.sibling
            }
        }
        function wl(e, t, n) {
            for (n &&= !!(t.subtreeFlags & 8772),
                t = t.child; t !== null;) {
                var r = t.alternate
                    , i = e
                    , a = t
                    , o = a.flags;
                switch (a.tag) {
                    case 0:
                    case 11:
                    case 15:
                        wl(i, a, n),
                            Gc(4, a);
                        break;
                    case 1:
                        if (wl(i, a, n),
                            r = a,
                            i = r.stateNode,
                            typeof i.componentDidMount == `function`)
                            try {
                                i.componentDidMount()
                            } catch (e) {
                                Z(r, r.return, e)
                            }
                        if (r = a,
                            i = r.updateQueue,
                            i !== null) {
                            var s = r.stateNode;
                            try {
                                var c = i.shared.hiddenCallbacks;
                                if (c !== null)
                                    for (i.shared.hiddenCallbacks = null,
                                        i = 0; i < c.length; i++)
                                        ro(c[i], s)
                            } catch (e) {
                                Z(r, r.return, e)
                            }
                        }
                        n && o & 64 && qc(a),
                            Yc(a, a.return);
                        break;
                    case 27:
                        rl(a);
                    case 26:
                    case 5:
                        wl(i, a, n),
                            n && r === null && o & 4 && Zc(a),
                            Yc(a, a.return);
                        break;
                    case 12:
                        wl(i, a, n);
                        break;
                    case 31:
                        wl(i, a, n),
                            n && o & 4 && pl(i, a);
                        break;
                    case 13:
                        wl(i, a, n),
                            n && o & 4 && ml(i, a);
                        break;
                    case 22:
                        a.memoizedState === null && wl(i, a, n),
                            Yc(a, a.return);
                        break;
                    case 30:
                        break;
                    default:
                        wl(i, a, n)
                }
                t = t.sibling
            }
        }
        function Tl(e, t) {
            var n = null;
            e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (n = e.memoizedState.cachePool.pool),
                e = null,
                t.memoizedState !== null && t.memoizedState.cachePool !== null && (e = t.memoizedState.cachePool.pool),
                e !== n && (e != null && e.refCount++,
                    n != null && ga(n))
        }
        function El(e, t) {
            e = null,
                t.alternate !== null && (e = t.alternate.memoizedState.cache),
                t = t.memoizedState.cache,
                t !== e && (t.refCount++,
                    e != null && ga(e))
        }
        function Dl(e, t, n, r) {
            if (t.subtreeFlags & 10256)
                for (t = t.child; t !== null;)
                    Ol(e, t, n, r),
                        t = t.sibling
        }
        function Ol(e, t, n, r) {
            var i = t.flags;
            switch (t.tag) {
                case 0:
                case 11:
                case 15:
                    Dl(e, t, n, r),
                        i & 2048 && Gc(9, t);
                    break;
                case 1:
                    Dl(e, t, n, r);
                    break;
                case 3:
                    Dl(e, t, n, r),
                        i & 2048 && (e = null,
                            t.alternate !== null && (e = t.alternate.memoizedState.cache),
                            t = t.memoizedState.cache,
                            t !== e && (t.refCount++,
                                e != null && ga(e)));
                    break;
                case 12:
                    if (i & 2048) {
                        Dl(e, t, n, r),
                            e = t.stateNode;
                        try {
                            var a = t.memoizedProps
                                , o = a.id
                                , s = a.onPostCommit;
                            typeof s == `function` && s(o, t.alternate === null ? `mount` : `update`, e.passiveEffectDuration, -0)
                        } catch (e) {
                            Z(t, t.return, e)
                        }
                    } else
                        Dl(e, t, n, r);
                    break;
                case 31:
                    Dl(e, t, n, r);
                    break;
                case 13:
                    Dl(e, t, n, r);
                    break;
                case 23:
                    break;
                case 22:
                    a = t.stateNode,
                        o = t.alternate,
                        t.memoizedState === null ? a._visibility & 2 ? Dl(e, t, n, r) : (a._visibility |= 2,
                            kl(e, t, n, r, !!(t.subtreeFlags & 10256) || !1)) : a._visibility & 2 ? Dl(e, t, n, r) : Al(e, t),
                        i & 2048 && Tl(o, t);
                    break;
                case 24:
                    Dl(e, t, n, r),
                        i & 2048 && El(t.alternate, t);
                    break;
                default:
                    Dl(e, t, n, r)
            }
        }
        function kl(e, t, n, r, i) {
            for (i &&= !!(t.subtreeFlags & 10256) || !1,
                t = t.child; t !== null;) {
                var a = e
                    , o = t
                    , s = n
                    , c = r
                    , l = o.flags;
                switch (o.tag) {
                    case 0:
                    case 11:
                    case 15:
                        kl(a, o, s, c, i),
                            Gc(8, o);
                        break;
                    case 23:
                        break;
                    case 22:
                        var u = o.stateNode;
                        o.memoizedState === null ? (u._visibility |= 2,
                            kl(a, o, s, c, i)) : u._visibility & 2 ? kl(a, o, s, c, i) : Al(a, o),
                            i && l & 2048 && Tl(o.alternate, o);
                        break;
                    case 24:
                        kl(a, o, s, c, i),
                            i && l & 2048 && El(o.alternate, o);
                        break;
                    default:
                        kl(a, o, s, c, i)
                }
                t = t.sibling
            }
        }
        function Al(e, t) {
            if (t.subtreeFlags & 10256)
                for (t = t.child; t !== null;) {
                    var n = e
                        , r = t
                        , i = r.flags;
                    switch (r.tag) {
                        case 22:
                            Al(n, r),
                                i & 2048 && Tl(r.alternate, r);
                            break;
                        case 24:
                            Al(n, r),
                                i & 2048 && El(r.alternate, r);
                            break;
                        default:
                            Al(n, r)
                    }
                    t = t.sibling
                }
        }
        var jl = 8192;
        function Ml(e, t, n) {
            if (e.subtreeFlags & jl)
                for (e = e.child; e !== null;)
                    Nl(e, t, n),
                        e = e.sibling
        }
        function Nl(e, t, n) {
            switch (e.tag) {
                case 26:
                    Ml(e, t, n),
                        e.flags & jl && e.memoizedState !== null && Gf(n, vl, e.memoizedState, e.memoizedProps);
                    break;
                case 5:
                    Ml(e, t, n);
                    break;
                case 3:
                case 4:
                    var r = vl;
                    vl = gf(e.stateNode.containerInfo),
                        Ml(e, t, n),
                        vl = r;
                    break;
                case 22:
                    e.memoizedState === null && (r = e.alternate,
                        r !== null && r.memoizedState !== null ? (r = jl,
                            jl = 16777216,
                            Ml(e, t, n),
                            jl = r) : Ml(e, t, n));
                    break;
                default:
                    Ml(e, t, n)
            }
        }
        function Pl(e) {
            var t = e.alternate;
            if (t !== null && (e = t.child,
                e !== null)) {
                t.child = null;
                do
                    t = e.sibling,
                        e.sibling = null,
                        e = t;
                while (e !== null)
            }
        }
        function Fl(e) {
            var t = e.deletions;
            if (e.flags & 16) {
                if (t !== null)
                    for (var n = 0; n < t.length; n++) {
                        var r = t[n];
                        H = r,
                            Rl(r, e)
                    }
                Pl(e)
            }
            if (e.subtreeFlags & 10256)
                for (e = e.child; e !== null;)
                    Il(e),
                        e = e.sibling
        }
        function Il(e) {
            switch (e.tag) {
                case 0:
                case 11:
                case 15:
                    Fl(e),
                        e.flags & 2048 && Kc(9, e, e.return);
                    break;
                case 3:
                    Fl(e);
                    break;
                case 12:
                    Fl(e);
                    break;
                case 22:
                    var t = e.stateNode;
                    e.memoizedState !== null && t._visibility & 2 && (e.return === null || e.return.tag !== 13) ? (t._visibility &= -3,
                        Ll(e)) : Fl(e);
                    break;
                default:
                    Fl(e)
            }
        }
        function Ll(e) {
            var t = e.deletions;
            if (e.flags & 16) {
                if (t !== null)
                    for (var n = 0; n < t.length; n++) {
                        var r = t[n];
                        H = r,
                            Rl(r, e)
                    }
                Pl(e)
            }
            for (e = e.child; e !== null;) {
                switch (t = e,
                t.tag) {
                    case 0:
                    case 11:
                    case 15:
                        Kc(8, t, t.return),
                            Ll(t);
                        break;
                    case 22:
                        n = t.stateNode,
                            n._visibility & 2 && (n._visibility &= -3,
                                Ll(t));
                        break;
                    default:
                        Ll(t)
                }
                e = e.sibling
            }
        }
        function Rl(e, t) {
            for (; H !== null;) {
                var n = H;
                switch (n.tag) {
                    case 0:
                    case 11:
                    case 15:
                        Kc(8, n, t);
                        break;
                    case 23:
                    case 22:
                        if (n.memoizedState !== null && n.memoizedState.cachePool !== null) {
                            var r = n.memoizedState.cachePool.pool;
                            r != null && r.refCount++
                        }
                        break;
                    case 24:
                        ga(n.memoizedState.cache)
                }
                if (r = n.child,
                    r !== null)
                    r.return = n,
                        H = r;
                else
                    a: for (n = e; H !== null;) {
                        r = H;
                        var i = r.sibling
                            , a = r.return;
                        if (ll(r),
                            r === n) {
                            H = null;
                            break a
                        }
                        if (i !== null) {
                            i.return = a,
                                H = i;
                            break a
                        }
                        H = a
                    }
            }
        }
        var zl = {
            getCacheForType: function (e) {
                var t = la(M)
                    , n = t.data.get(e);
                return n === void 0 && (n = e(),
                    t.data.set(e, n)),
                    n
            },
            cacheSignal: function () {
                return la(M).controller.signal
            }
        }
            , Bl = typeof WeakMap == `function` ? WeakMap : Map
            , W = 0
            , G = null
            , K = null
            , q = 0
            , J = 0
            , Vl = null
            , Hl = !1
            , Ul = !1
            , Wl = !1
            , Gl = 0
            , Y = 0
            , Kl = 0
            , ql = 0
            , Jl = 0
            , Yl = 0
            , Xl = 0
            , Zl = null
            , Ql = null
            , $l = !1
            , eu = 0
            , tu = 0
            , nu = 1 / 0
            , ru = null
            , iu = null
            , X = 0
            , au = null
            , ou = null
            , su = 0
            , cu = 0
            , lu = null
            , uu = null
            , du = 0
            , fu = null;
        function pu() {
            return W & 2 && q !== 0 ? q & -q : T.T === null ? ft() : dd()
        }
        function mu() {
            if (Yl === 0) {
                if (!(q & 536870912) || j) {
                    var e = Ze;
                    Ze <<= 1,
                        !(Ze & 3932160) && (Ze = 262144),
                        Yl = e
                } else
                    Yl = 536870912
            }
            return e = uo.current,
                e !== null && (e.flags |= 32),
                Yl
        }
        function hu(e, t, n) {
            (e === G && (J === 2 || J === 9) || e.cancelPendingCommit !== null) && (Su(e, 0),
                yu(e, q, Yl, !1)),
                at(e, n),
                (!(W & 2) || e !== G) && (e === G && (!(W & 2) && (ql |= n),
                    Y === 4 && yu(e, q, Yl, !1)),
                    rd(e))
        }
        function gu(e, t, n) {
            if (W & 6)
                throw Error(o(327));
            var r = !n && !(t & 127) && (t & e.expiredLanes) === 0 || tt(e, t)
                , i = r ? Au(e, t) : Ou(e, t, !0)
                , a = r;
            do {
                if (i === 0) {
                    Ul && !r && yu(e, t, 0, !1);
                    break
                }
                if (n = e.current.alternate,
                    a && !vu(n)) {
                    i = Ou(e, t, !1),
                        a = !1;
                    continue
                }
                if (i === 2) {
                    if (a = t,
                        e.errorRecoveryDisabledLanes & a)
                        var s = 0;
                    else
                        s = e.pendingLanes & -536870913,
                            s = s === 0 ? s & 536870912 ? 536870912 : 0 : s;
                    if (s !== 0) {
                        t = s;
                        a: {
                            var c = e;
                            i = Zl;
                            var l = c.current.memoizedState.isDehydrated;
                            if (l && (Su(c, s).flags |= 256),
                                s = Ou(c, s, !1),
                                s !== 2) {
                                if (Wl && !l) {
                                    c.errorRecoveryDisabledLanes |= a,
                                        ql |= a,
                                        i = 4;
                                    break a
                                }
                                a = Ql,
                                    Ql = i,
                                    a !== null && (Ql === null ? Ql = a : Ql.push.apply(Ql, a))
                            }
                            i = s
                        }
                        if (a = !1,
                            i !== 2)
                            continue
                    }
                }
                if (i === 1) {
                    Su(e, 0),
                        yu(e, t, 0, !0);
                    break
                }
                a: {
                    switch (r = e,
                    a = i,
                    a) {
                        case 0:
                        case 1:
                            throw Error(o(345));
                        case 4:
                            if ((t & 4194048) !== t)
                                break;
                        case 6:
                            yu(r, t, Yl, !Hl);
                            break a;
                        case 2:
                            Ql = null;
                            break;
                        case 3:
                        case 5:
                            break;
                        default:
                            throw Error(o(329))
                    }
                    if ((t & 62914560) === t && (i = eu + 300 - Pe(),
                        10 < i)) {
                        if (yu(r, t, Yl, !Hl),
                            et(r, 0, !0) !== 0)
                            break a;
                        su = t,
                            r.timeoutHandle = Kd(_u.bind(null, r, n, Ql, ru, $l, t, Yl, ql, Xl, Hl, a, `Throttled`, -0, 0), i);
                        break a
                    }
                    _u(r, n, Ql, ru, $l, t, Yl, ql, Xl, Hl, a, null, -0, 0)
                }
                break
            } while (1);
            rd(e)
        }
        function _u(e, t, n, r, i, a, o, s, c, l, u, d, f, p) {
            if (e.timeoutHandle = -1,
                d = t.subtreeFlags,
                d & 8192 || (d & 16785408) == 16785408) {
                d = {
                    stylesheets: null,
                    count: 0,
                    imgCount: 0,
                    imgBytes: 0,
                    suspenseyImages: [],
                    waitingForImages: !0,
                    waitingForViewTransition: !1,
                    unsuspend: ln
                },
                    Nl(t, a, d);
                var m = (a & 62914560) === a ? eu - Pe() : (a & 4194048) === a ? tu - Pe() : 0;
                if (m = qf(d, m),
                    m !== null) {
                    su = a,
                        e.cancelPendingCommit = m(Lu.bind(null, e, t, a, n, r, i, o, s, c, u, d, null, f, p)),
                        yu(e, a, o, !l);
                    return
                }
            }
            Lu(e, t, a, n, r, i, o, s, c)
        }
        function vu(e) {
            for (var t = e; ;) {
                var n = t.tag;
                if ((n === 0 || n === 11 || n === 15) && t.flags & 16384 && (n = t.updateQueue,
                    n !== null && (n = n.stores,
                        n !== null)))
                    for (var r = 0; r < n.length; r++) {
                        var i = n[r]
                            , a = i.getSnapshot;
                        i = i.value;
                        try {
                            if (!jr(a(), i))
                                return !1
                        } catch {
                            return !1
                        }
                    }
                if (n = t.child,
                    t.subtreeFlags & 16384 && n !== null)
                    n.return = t,
                        t = n;
                else {
                    if (t === e)
                        break;
                    for (; t.sibling === null;) {
                        if (t.return === null || t.return === e)
                            return !0;
                        t = t.return
                    }
                    t.sibling.return = t.return,
                        t = t.sibling
                }
            }
            return !0
        }
        function yu(e, t, n, r) {
            t &= ~Jl,
                t &= ~ql,
                e.suspendedLanes |= t,
                e.pingedLanes &= ~t,
                r && (e.warmLanes |= t),
                r = e.expirationTimes;
            for (var i = t; 0 < i;) {
                var a = 31 - Ke(i)
                    , o = 1 << a;
                r[a] = -1,
                    i &= ~o
            }
            n !== 0 && st(e, n, t)
        }
        function bu() {
            return W & 6 ? !0 : (id(0, !1),
                !1)
        }
        function xu() {
            if (K !== null) {
                if (J === 0)
                    var e = K.return;
                else
                    e = K,
                        ta = ea = null,
                        Po(e),
                        za = null,
                        Ba = 0,
                        e = K;
                for (; e !== null;)
                    Wc(e.alternate, e),
                        e = e.return;
                K = null
            }
        }
        function Su(e, t) {
            var n = e.timeoutHandle;
            n !== -1 && (e.timeoutHandle = -1,
                qd(n)),
                n = e.cancelPendingCommit,
                n !== null && (e.cancelPendingCommit = null,
                    n()),
                su = 0,
                xu(),
                G = e,
                K = n = yi(e.current, null),
                q = t,
                J = 0,
                Vl = null,
                Hl = !1,
                Ul = tt(e, t),
                Wl = !1,
                Xl = Yl = Jl = ql = Kl = Y = 0,
                Ql = Zl = null,
                $l = !1,
                t & 8 && (t |= t & 32);
            var r = e.entangledLanes;
            if (r !== 0)
                for (e = e.entanglements,
                    r &= t; 0 < r;) {
                    var i = 31 - Ke(r)
                        , a = 1 << i;
                    t |= e[i],
                        r &= ~a
                }
            return Gl = t,
                li(),
                n
        }
        function Cu(e, t) {
            P = null,
                T.H = Us,
                t === ka || t === ja ? (t = La(),
                    J = 3) : t === Aa ? (t = La(),
                        J = 4) : J = t === sc ? 8 : typeof t == `object` && t && typeof t.then == `function` ? 6 : 1,
                Vl = t,
                K === null && (Y = 1,
                    tc(e, Di(t, e.current)))
        }
        function wu() {
            var e = uo.current;
            return e === null ? !0 : (q & 4194048) === q ? fo === null : (q & 62914560) === q || q & 536870912 ? e === fo : !1
        }
        function Tu() {
            var e = T.H;
            return T.H = Us,
                e === null ? Us : e
        }
        function Eu() {
            var e = T.A;
            return T.A = zl,
                e
        }
        function Du() {
            Y = 4,
                Hl || (q & 4194048) !== q && uo.current !== null || (Ul = !0),
                !(Kl & 134217727) && !(ql & 134217727) || G === null || yu(G, q, Yl, !1)
        }
        function Ou(e, t, n) {
            var r = W;
            W |= 2;
            var i = Tu()
                , a = Eu();
            (G !== e || q !== t) && (ru = null,
                Su(e, t)),
                t = !1;
            var o = Y;
            a: do
                try {
                    if (J !== 0 && K !== null) {
                        var s = K
                            , c = Vl;
                        switch (J) {
                            case 8:
                                xu(),
                                    o = 6;
                                break a;
                            case 3:
                            case 2:
                            case 9:
                            case 6:
                                uo.current === null && (t = !0);
                                var l = J;
                                if (J = 0,
                                    Vl = null,
                                    Pu(e, s, c, l),
                                    n && Ul) {
                                    o = 0;
                                    break a
                                }
                                break;
                            default:
                                l = J,
                                    J = 0,
                                    Vl = null,
                                    Pu(e, s, c, l)
                        }
                    }
                    ku(),
                        o = Y;
                    break
                } catch (t) {
                    Cu(e, t)
                }
            while (1);
            return t && e.shellSuspendCounter++,
                ta = ea = null,
                W = r,
                T.H = i,
                T.A = a,
                K === null && (G = null,
                    q = 0,
                    li()),
                o
        }
        function ku() {
            for (; K !== null;)
                Mu(K)
        }
        function Au(e, t) {
            var n = W;
            W |= 2;
            var r = Tu()
                , i = Eu();
            G !== e || q !== t ? (ru = null,
                nu = Pe() + 500,
                Su(e, t)) : Ul = tt(e, t);
            a: do
                try {
                    if (J !== 0 && K !== null) {
                        t = K;
                        var a = Vl;
                        b: switch (J) {
                            case 1:
                                J = 0,
                                    Vl = null,
                                    Pu(e, t, a, 1);
                                break;
                            case 2:
                            case 9:
                                if (Na(a)) {
                                    J = 0,
                                        Vl = null,
                                        Nu(t);
                                    break
                                }
                                t = function () {
                                    J !== 2 && J !== 9 || G !== e || (J = 7),
                                        rd(e)
                                }
                                    ,
                                    a.then(t, t);
                                break a;
                            case 3:
                                J = 7;
                                break a;
                            case 4:
                                J = 5;
                                break a;
                            case 7:
                                Na(a) ? (J = 0,
                                    Vl = null,
                                    Nu(t)) : (J = 0,
                                        Vl = null,
                                        Pu(e, t, a, 7));
                                break;
                            case 5:
                                var s = null;
                                switch (K.tag) {
                                    case 26:
                                        s = K.memoizedState;
                                    case 5:
                                    case 27:
                                        var c = K;
                                        if (s ? Wf(s) : c.stateNode.complete) {
                                            J = 0,
                                                Vl = null;
                                            var l = c.sibling;
                                            if (l !== null)
                                                K = l;
                                            else {
                                                var u = c.return;
                                                u === null ? K = null : (K = u,
                                                    Fu(u))
                                            }
                                            break b
                                        }
                                }
                                J = 0,
                                    Vl = null,
                                    Pu(e, t, a, 5);
                                break;
                            case 6:
                                J = 0,
                                    Vl = null,
                                    Pu(e, t, a, 6);
                                break;
                            case 8:
                                xu(),
                                    Y = 6;
                                break a;
                            default:
                                throw Error(o(462))
                        }
                    }
                    ju();
                    break
                } catch (t) {
                    Cu(e, t)
                }
            while (1);
            return ta = ea = null,
                T.H = r,
                T.A = i,
                W = n,
                K === null ? (G = null,
                    q = 0,
                    li(),
                    Y) : 0
        }
        function ju() {
            for (; K !== null && !Me();)
                Mu(K)
        }
        function Mu(e) {
            var t = Ic(e.alternate, e, Gl);
            e.memoizedProps = e.pendingProps,
                t === null ? Fu(e) : K = t
        }
        function Nu(e) {
            var t = e
                , n = t.alternate;
            switch (t.tag) {
                case 15:
                case 0:
                    t = bc(n, t, t.pendingProps, t.type, void 0, q);
                    break;
                case 11:
                    t = bc(n, t, t.pendingProps, t.type.render, t.ref, q);
                    break;
                case 5:
                    Po(t);
                default:
                    Wc(n, t),
                        t = K = bi(t, Gl),
                        t = Ic(n, t, Gl)
            }
            e.memoizedProps = e.pendingProps,
                t === null ? Fu(e) : K = t
        }
        function Pu(e, t, n, r) {
            ta = ea = null,
                Po(t),
                za = null,
                Ba = 0;
            var i = t.return;
            try {
                if (oc(e, i, t, n, q)) {
                    Y = 1,
                        tc(e, Di(n, e.current)),
                        K = null;
                    return
                }
            } catch (t) {
                if (i !== null)
                    throw K = i,
                    t;
                Y = 1,
                    tc(e, Di(n, e.current)),
                    K = null;
                return
            }
            t.flags & 32768 ? (j || r === 1 ? e = !0 : Ul || q & 536870912 ? e = !1 : (Hl = e = !0,
                (r === 2 || r === 9 || r === 3 || r === 6) && (r = uo.current,
                    r !== null && r.tag === 13 && (r.flags |= 16384))),
                Iu(t, e)) : Fu(t)
        }
        function Fu(e) {
            var t = e;
            do {
                if (t.flags & 32768) {
                    Iu(t, Hl);
                    return
                }
                e = t.return;
                var n = Hc(t.alternate, t, Gl);
                if (n !== null) {
                    K = n;
                    return
                }
                if (t = t.sibling,
                    t !== null) {
                    K = t;
                    return
                }
                K = t = e
            } while (t !== null);
            Y === 0 && (Y = 5)
        }
        function Iu(e, t) {
            do {
                var n = Uc(e.alternate, e);
                if (n !== null) {
                    n.flags &= 32767,
                        K = n;
                    return
                }
                if (n = e.return,
                    n !== null && (n.flags |= 32768,
                        n.subtreeFlags = 0,
                        n.deletions = null),
                    !t && (e = e.sibling,
                        e !== null)) {
                    K = e;
                    return
                }
                K = e = n
            } while (e !== null);
            Y = 6,
                K = null
        }
        function Lu(e, t, n, r, i, a, s, c, l) {
            e.cancelPendingCommit = null;
            do
                Hu();
            while (X !== 0);
            if (W & 6)
                throw Error(o(327));
            if (t !== null) {
                if (t === e.current)
                    throw Error(o(177));
                if (a = t.lanes | t.childLanes,
                    a |= ci,
                    ot(e, n, a, s, c, l),
                    e === G && (K = G = null,
                        q = 0),
                    ou = t,
                    au = e,
                    su = n,
                    cu = a,
                    lu = i,
                    uu = r,
                    t.subtreeFlags & 10256 || t.flags & 10256 ? (e.callbackNode = null,
                        e.callbackPriority = 0,
                        Xu(Re, function () {
                            return Uu(),
                                null
                        })) : (e.callbackNode = null,
                            e.callbackPriority = 0),
                    r = !!(t.flags & 13878),
                    t.subtreeFlags & 13878 || r) {
                    r = T.T,
                        T.T = null,
                        i = E.p,
                        E.p = 2,
                        s = W,
                        W |= 4;
                    try {
                        sl(e, t, n)
                    } finally {
                        W = s,
                            E.p = i,
                            T.T = r
                    }
                }
                X = 1,
                    Ru(),
                    zu(),
                    Bu()
            }
        }
        function Ru() {
            if (X === 1) {
                X = 0;
                var e = au
                    , t = ou
                    , n = !!(t.flags & 13878);
                if (t.subtreeFlags & 13878 || n) {
                    n = T.T,
                        T.T = null;
                    var r = E.p;
                    E.p = 2;
                    var i = W;
                    W |= 4;
                    try {
                        yl(t, e);
                        var a = zd
                            , o = Ir(e.containerInfo)
                            , s = a.focusedElem
                            , c = a.selectionRange;
                        if (o !== s && s && s.ownerDocument && Fr(s.ownerDocument.documentElement, s)) {
                            if (c !== null && Lr(s)) {
                                var l = c.start
                                    , u = c.end;
                                if (u === void 0 && (u = l),
                                    `selectionStart` in s)
                                    s.selectionStart = l,
                                        s.selectionEnd = Math.min(u, s.value.length);
                                else {
                                    var d = s.ownerDocument || document
                                        , f = d && d.defaultView || window;
                                    if (f.getSelection) {
                                        var p = f.getSelection()
                                            , m = s.textContent.length
                                            , h = Math.min(c.start, m)
                                            , g = c.end === void 0 ? h : Math.min(c.end, m);
                                        !p.extend && h > g && (o = g,
                                            g = h,
                                            h = o);
                                        var _ = Pr(s, h)
                                            , v = Pr(s, g);
                                        if (_ && v && (p.rangeCount !== 1 || p.anchorNode !== _.node || p.anchorOffset !== _.offset || p.focusNode !== v.node || p.focusOffset !== v.offset)) {
                                            var y = d.createRange();
                                            y.setStart(_.node, _.offset),
                                                p.removeAllRanges(),
                                                h > g ? (p.addRange(y),
                                                    p.extend(v.node, v.offset)) : (y.setEnd(v.node, v.offset),
                                                        p.addRange(y))
                                        }
                                    }
                                }
                            }
                            for (d = [],
                                p = s; p = p.parentNode;)
                                p.nodeType === 1 && d.push({
                                    element: p,
                                    left: p.scrollLeft,
                                    top: p.scrollTop
                                });
                            for (typeof s.focus == `function` && s.focus(),
                                s = 0; s < d.length; s++) {
                                var b = d[s];
                                b.element.scrollLeft = b.left,
                                    b.element.scrollTop = b.top
                            }
                        }
                        sp = !!Rd,
                            zd = Rd = null
                    } finally {
                        W = i,
                            E.p = r,
                            T.T = n
                    }
                }
                e.current = t,
                    X = 2
            }
        }
        function zu() {
            if (X === 2) {
                X = 0;
                var e = au
                    , t = ou
                    , n = !!(t.flags & 8772);
                if (t.subtreeFlags & 8772 || n) {
                    n = T.T,
                        T.T = null;
                    var r = E.p;
                    E.p = 2;
                    var i = W;
                    W |= 4;
                    try {
                        cl(e, t.alternate, t)
                    } finally {
                        W = i,
                            E.p = r,
                            T.T = n
                    }
                }
                X = 3
            }
        }
        function Bu() {
            if (X === 4 || X === 3) {
                X = 0,
                    Ne();
                var e = au
                    , t = ou
                    , n = su
                    , r = uu;
                t.subtreeFlags & 10256 || t.flags & 10256 ? X = 5 : (X = 0,
                    ou = au = null,
                    Vu(e, e.pendingLanes));
                var i = e.pendingLanes;
                if (i === 0 && (iu = null),
                    dt(n),
                    t = t.stateNode,
                    We && typeof We.onCommitFiberRoot == `function`)
                    try {
                        We.onCommitFiberRoot(Ue, t, void 0, (t.current.flags & 128) == 128)
                    } catch { }
                if (r !== null) {
                    t = T.T,
                        i = E.p,
                        E.p = 2,
                        T.T = null;
                    try {
                        for (var a = e.onRecoverableError, o = 0; o < r.length; o++) {
                            var s = r[o];
                            a(s.value, {
                                componentStack: s.stack
                            })
                        }
                    } finally {
                        T.T = t,
                            E.p = i
                    }
                }
                su & 3 && Hu(),
                    rd(e),
                    i = e.pendingLanes,
                    n & 261930 && i & 42 ? e === fu ? du++ : (du = 0,
                        fu = e) : du = 0,
                    id(0, !1)
            }
        }
        function Vu(e, t) {
            (e.pooledCacheLanes &= t) === 0 && (t = e.pooledCache,
                t != null && (e.pooledCache = null,
                    ga(t)))
        }
        function Hu() {
            return Ru(),
                zu(),
                Bu(),
                Uu()
        }
        function Uu() {
            if (X !== 5)
                return !1;
            var e = au
                , t = cu;
            cu = 0;
            var n = dt(su)
                , r = T.T
                , i = E.p;
            try {
                E.p = 32 > n ? 32 : n,
                    T.T = null,
                    n = lu,
                    lu = null;
                var a = au
                    , s = su;
                if (X = 0,
                    ou = au = null,
                    su = 0,
                    W & 6)
                    throw Error(o(331));
                var c = W;
                if (W |= 4,
                    Il(a.current),
                    Ol(a, a.current, s, n),
                    W = c,
                    id(0, !1),
                    We && typeof We.onPostCommitFiberRoot == `function`)
                    try {
                        We.onPostCommitFiberRoot(Ue, a)
                    } catch { }
                return !0
            } finally {
                E.p = i,
                    T.T = r,
                    Vu(e, t)
            }
        }
        function Wu(e, t, n) {
            t = Di(n, t),
                t = rc(e.stateNode, t, 2),
                e = Za(e, t, 2),
                e !== null && (at(e, 2),
                    rd(e))
        }
        function Z(e, t, n) {
            if (e.tag === 3)
                Wu(e, e, n);
            else
                for (; t !== null;) {
                    if (t.tag === 3) {
                        Wu(t, e, n);
                        break
                    }
                    if (t.tag === 1) {
                        var r = t.stateNode;
                        if (typeof t.type.getDerivedStateFromError == `function` || typeof r.componentDidCatch == `function` && (iu === null || !iu.has(r))) {
                            e = Di(n, e),
                                n = ic(2),
                                r = Za(t, n, 2),
                                r !== null && (ac(n, r, t, e),
                                    at(r, 2),
                                    rd(r));
                            break
                        }
                    }
                    t = t.return
                }
        }
        function Gu(e, t, n) {
            var r = e.pingCache;
            if (r === null) {
                r = e.pingCache = new Bl;
                var i = new Set;
                r.set(t, i)
            } else
                i = r.get(t),
                    i === void 0 && (i = new Set,
                        r.set(t, i));
            i.has(n) || (Wl = !0,
                i.add(n),
                e = Ku.bind(null, e, t, n),
                t.then(e, e))
        }
        function Ku(e, t, n) {
            var r = e.pingCache;
            r !== null && r.delete(t),
                e.pingedLanes |= e.suspendedLanes & n,
                e.warmLanes &= ~n,
                G === e && (q & n) === n && (Y === 4 || Y === 3 && (q & 62914560) === q && 300 > Pe() - eu ? !(W & 2) && Su(e, 0) : Jl |= n,
                    Xl === q && (Xl = 0)),
                rd(e)
        }
        function qu(e, t) {
            t === 0 && (t = rt()),
                e = fi(e, t),
                e !== null && (at(e, t),
                    rd(e))
        }
        function Ju(e) {
            var t = e.memoizedState
                , n = 0;
            t !== null && (n = t.retryLane),
                qu(e, n)
        }
        function Yu(e, t) {
            var n = 0;
            switch (e.tag) {
                case 31:
                case 13:
                    var r = e.stateNode
                        , i = e.memoizedState;
                    i !== null && (n = i.retryLane);
                    break;
                case 19:
                    r = e.stateNode;
                    break;
                case 22:
                    r = e.stateNode._retryCache;
                    break;
                default:
                    throw Error(o(314))
            }
            r !== null && r.delete(t),
                qu(e, n)
        }
        function Xu(e, t) {
            return Ae(e, t)
        }
        var Zu = null
            , Qu = null
            , $u = !1
            , ed = !1
            , td = !1
            , nd = 0;
        function rd(e) {
            e !== Qu && e.next === null && (Qu === null ? Zu = Qu = e : Qu = Qu.next = e),
                ed = !0,
                $u || ($u = !0,
                    ud())
        }
        function id(e, t) {
            if (!td && ed) {
                td = !0;
                do
                    for (var n = !1, r = Zu; r !== null;) {
                        if (!t) {
                            if (e !== 0) {
                                var i = r.pendingLanes;
                                if (i === 0)
                                    var a = 0;
                                else {
                                    var o = r.suspendedLanes
                                        , s = r.pingedLanes;
                                    a = (1 << 31 - Ke(42 | e) + 1) - 1,
                                        a &= i & ~(o & ~s),
                                        a = a & 201326741 ? a & 201326741 | 1 : a ? a | 2 : 0
                                }
                                a !== 0 && (n = !0,
                                    ld(r, a))
                            } else
                                a = q,
                                    a = et(r, r === G ? a : 0, r.cancelPendingCommit !== null || r.timeoutHandle !== -1),
                                    !(a & 3) || tt(r, a) || (n = !0,
                                        ld(r, a))
                        }
                        r = r.next
                    }
                while (n);
                td = !1
            }
        }
        function ad() {
            od()
        }
        function od() {
            ed = $u = !1;
            var e = 0;
            nd !== 0 && Gd() && (e = nd);
            for (var t = Pe(), n = null, r = Zu; r !== null;) {
                var i = r.next
                    , a = sd(r, t);
                a === 0 ? (r.next = null,
                    n === null ? Zu = i : n.next = i,
                    i === null && (Qu = n)) : (n = r,
                        (e !== 0 || a & 3) && (ed = !0)),
                    r = i
            }
            X !== 0 && X !== 5 || id(e, !1),
                nd !== 0 && (nd = 0)
        }
        function sd(e, t) {
            for (var n = e.suspendedLanes, r = e.pingedLanes, i = e.expirationTimes, a = e.pendingLanes & -62914561; 0 < a;) {
                var o = 31 - Ke(a)
                    , s = 1 << o
                    , c = i[o];
                c === -1 ? ((s & n) === 0 || (s & r) !== 0) && (i[o] = nt(s, t)) : c <= t && (e.expiredLanes |= s),
                    a &= ~s
            }
            if (t = G,
                n = q,
                n = et(e, e === t ? n : 0, e.cancelPendingCommit !== null || e.timeoutHandle !== -1),
                r = e.callbackNode,
                n === 0 || e === t && (J === 2 || J === 9) || e.cancelPendingCommit !== null)
                return r !== null && r !== null && je(r),
                    e.callbackNode = null,
                    e.callbackPriority = 0;
            if (!(n & 3) || tt(e, n)) {
                if (t = n & -n,
                    t === e.callbackPriority)
                    return t;
                switch (r !== null && je(r),
                dt(n)) {
                    case 2:
                    case 8:
                        n = Le;
                        break;
                    case 32:
                        n = Re;
                        break;
                    case 268435456:
                        n = Be;
                        break;
                    default:
                        n = Re
                }
                return r = cd.bind(null, e),
                    n = Ae(n, r),
                    e.callbackPriority = t,
                    e.callbackNode = n,
                    t
            }
            return r !== null && r !== null && je(r),
                e.callbackPriority = 2,
                e.callbackNode = null,
                2
        }
        function cd(e, t) {
            if (X !== 0 && X !== 5)
                return e.callbackNode = null,
                    e.callbackPriority = 0,
                    null;
            var n = e.callbackNode;
            if (Hu() && e.callbackNode !== n)
                return null;
            var r = q;
            return r = et(e, e === G ? r : 0, e.cancelPendingCommit !== null || e.timeoutHandle !== -1),
                r === 0 ? null : (gu(e, r, t),
                    sd(e, Pe()),
                    e.callbackNode != null && e.callbackNode === n ? cd.bind(null, e) : null)
        }
        function ld(e, t) {
            if (Hu())
                return null;
            gu(e, t, !0)
        }
        function ud() {
            Yd(function () {
                W & 6 ? Ae(Ie, ad) : od()
            })
        }
        function dd() {
            if (nd === 0) {
                var e = ya;
                e === 0 && (e = Xe,
                    Xe <<= 1,
                    !(Xe & 261888) && (Xe = 256)),
                    nd = e
            }
            return nd
        }
        function fd(e) {
            return e == null || typeof e == `symbol` || typeof e == `boolean` ? null : typeof e == `function` ? e : cn(`` + e)
        }
        function pd(e, t) {
            var n = t.ownerDocument.createElement(`input`);
            return n.name = t.name,
                n.value = t.value,
                e.id && n.setAttribute(`form`, e.id),
                t.parentNode.insertBefore(n, t),
                e = new FormData(e),
                n.parentNode.removeChild(n),
                e
        }
        function md(e, t, n, r, i) {
            if (t === `submit` && n && n.stateNode === i) {
                var a = fd((i[gt] || null).action)
                    , o = r.submitter;
                o && (t = (t = o[gt] || null) ? fd(t.formAction) : o.getAttribute(`formAction`),
                    t !== null && (a = t,
                        o = null));
                var s = new An(`action`, `action`, null, r, i);
                e.push({
                    event: s,
                    listeners: [{
                        instance: null,
                        listener: function () {
                            if (r.defaultPrevented) {
                                if (nd !== 0) {
                                    var e = o ? pd(i, o) : new FormData(i);
                                    ks(n, {
                                        pending: !0,
                                        data: e,
                                        method: i.method,
                                        action: a
                                    }, null, e)
                                }
                            } else
                                typeof a == `function` && (s.preventDefault(),
                                    e = o ? pd(i, o) : new FormData(i),
                                    ks(n, {
                                        pending: !0,
                                        data: e,
                                        method: i.method,
                                        action: a
                                    }, a, e))
                        },
                        currentTarget: i
                    }]
                })
            }
        }
        for (var hd = 0; hd < ri.length; hd++) {
            var gd = ri[hd];
            ii(gd.toLowerCase(), `on` + (gd[0].toUpperCase() + gd.slice(1)))
        }
        ii(Yr, `onAnimationEnd`),
            ii(Xr, `onAnimationIteration`),
            ii(Zr, `onAnimationStart`),
            ii(`dblclick`, `onDoubleClick`),
            ii(`focusin`, `onFocus`),
            ii(`focusout`, `onBlur`),
            ii(Qr, `onTransitionRun`),
            ii($r, `onTransitionStart`),
            ii(ei, `onTransitionCancel`),
            ii(ti, `onTransitionEnd`),
            Mt(`onMouseEnter`, [`mouseout`, `mouseover`]),
            Mt(`onMouseLeave`, [`mouseout`, `mouseover`]),
            Mt(`onPointerEnter`, [`pointerout`, `pointerover`]),
            Mt(`onPointerLeave`, [`pointerout`, `pointerover`]),
            jt(`onChange`, `change click focusin focusout input keydown keyup selectionchange`.split(` `)),
            jt(`onSelect`, `focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange`.split(` `)),
            jt(`onBeforeInput`, [`compositionend`, `keypress`, `textInput`, `paste`]),
            jt(`onCompositionEnd`, `compositionend focusout keydown keypress keyup mousedown`.split(` `)),
            jt(`onCompositionStart`, `compositionstart focusout keydown keypress keyup mousedown`.split(` `)),
            jt(`onCompositionUpdate`, `compositionupdate focusout keydown keypress keyup mousedown`.split(` `));
        var _d = `abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting`.split(` `)
            , vd = new Set(`beforetoggle cancel close invalid load scroll scrollend toggle`.split(` `).concat(_d));
        function yd(e, t) {
            t = !!(t & 4);
            for (var n = 0; n < e.length; n++) {
                var r = e[n]
                    , i = r.event;
                r = r.listeners;
                a: {
                    var a = void 0;
                    if (t)
                        for (var o = r.length - 1; 0 <= o; o--) {
                            var s = r[o]
                                , c = s.instance
                                , l = s.currentTarget;
                            if (s = s.listener,
                                c !== a && i.isPropagationStopped())
                                break a;
                            a = s,
                                i.currentTarget = l;
                            try {
                                a(i)
                            } catch (e) {
                                ai(e)
                            }
                            i.currentTarget = null,
                                a = c
                        }
                    else
                        for (o = 0; o < r.length; o++) {
                            if (s = r[o],
                                c = s.instance,
                                l = s.currentTarget,
                                s = s.listener,
                                c !== a && i.isPropagationStopped())
                                break a;
                            a = s,
                                i.currentTarget = l;
                            try {
                                a(i)
                            } catch (e) {
                                ai(e)
                            }
                            i.currentTarget = null,
                                a = c
                        }
                }
            }
        }
        function Q(e, t) {
            var n = t[vt];
            n === void 0 && (n = t[vt] = new Set);
            var r = e + `__bubble`;
            n.has(r) || (Cd(t, e, 2, !1),
                n.add(r))
        }
        function bd(e, t, n) {
            var r = 0;
            t && (r |= 4),
                Cd(n, e, r, t)
        }
        var xd = `_reactListening` + Math.random().toString(36).slice(2);
        function Sd(e) {
            if (!e[xd]) {
                e[xd] = !0,
                    kt.forEach(function (t) {
                        t !== `selectionchange` && (vd.has(t) || bd(t, !1, e),
                            bd(t, !0, e))
                    });
                var t = e.nodeType === 9 ? e : e.ownerDocument;
                t === null || t[xd] || (t[xd] = !0,
                    bd(`selectionchange`, !1, t))
            }
        }
        function Cd(e, t, n, r) {
            switch (mp(t)) {
                case 2:
                    var i = cp;
                    break;
                case 8:
                    i = lp;
                    break;
                default:
                    i = up
            }
            n = i.bind(null, t, n, e),
                i = void 0,
                !yn || t !== `touchstart` && t !== `touchmove` && t !== `wheel` || (i = !0),
                r ? i === void 0 ? e.addEventListener(t, n, !0) : e.addEventListener(t, n, {
                    capture: !0,
                    passive: i
                }) : i === void 0 ? e.addEventListener(t, n, !1) : e.addEventListener(t, n, {
                    passive: i
                })
        }
        function wd(e, t, n, r, i) {
            var a = r;
            if (!(t & 1) && !(t & 2) && r !== null)
                a: for (; ;) {
                    if (r === null)
                        return;
                    var o = r.tag;
                    if (o === 3 || o === 4) {
                        var s = r.stateNode.containerInfo;
                        if (s === i)
                            break;
                        if (o === 4)
                            for (o = r.return; o !== null;) {
                                var c = o.tag;
                                if ((c === 3 || c === 4) && o.stateNode.containerInfo === i)
                                    return;
                                o = o.return
                            }
                        for (; s !== null;) {
                            if (o = wt(s),
                                o === null)
                                return;
                            if (c = o.tag,
                                c === 5 || c === 6 || c === 26 || c === 27) {
                                r = a = o;
                                continue a
                            }
                            s = s.parentNode
                        }
                    }
                    r = r.return
                }
            gn(function () {
                var r = a
                    , i = dn(n)
                    , o = [];
                a: {
                    var s = ni.get(e);
                    if (s !== void 0) {
                        var c = An
                            , u = e;
                        switch (e) {
                            case `keypress`:
                                if (Tn(n) === 0)
                                    break a;
                            case `keydown`:
                            case `keyup`:
                                c = Jn;
                                break;
                            case `focusin`:
                                u = `focus`,
                                    c = zn;
                                break;
                            case `focusout`:
                                u = `blur`,
                                    c = zn;
                                break;
                            case `beforeblur`:
                            case `afterblur`:
                                c = zn;
                                break;
                            case `click`:
                                if (n.button === 2)
                                    break a;
                            case `auxclick`:
                            case `dblclick`:
                            case `mousedown`:
                            case `mousemove`:
                            case `mouseup`:
                            case `mouseout`:
                            case `mouseover`:
                            case `contextmenu`:
                                c = Ln;
                                break;
                            case `drag`:
                            case `dragend`:
                            case `dragenter`:
                            case `dragexit`:
                            case `dragleave`:
                            case `dragover`:
                            case `dragstart`:
                            case `drop`:
                                c = Rn;
                                break;
                            case `touchcancel`:
                            case `touchend`:
                            case `touchmove`:
                            case `touchstart`:
                                c = Xn;
                                break;
                            case Yr:
                            case Xr:
                            case Zr:
                                c = Bn;
                                break;
                            case ti:
                                c = Zn;
                                break;
                            case `scroll`:
                            case `scrollend`:
                                c = Mn;
                                break;
                            case `wheel`:
                                c = Qn;
                                break;
                            case `copy`:
                            case `cut`:
                            case `paste`:
                                c = Vn;
                                break;
                            case `gotpointercapture`:
                            case `lostpointercapture`:
                            case `pointercancel`:
                            case `pointerdown`:
                            case `pointermove`:
                            case `pointerout`:
                            case `pointerover`:
                            case `pointerup`:
                                c = Yn;
                                break;
                            case `toggle`:
                            case `beforetoggle`:
                                c = $n
                        }
                        var d = !!(t & 4)
                            , f = !d && (e === `scroll` || e === `scrollend`)
                            , p = d ? s === null ? null : s + `Capture` : s;
                        d = [];
                        for (var m = r, h; m !== null;) {
                            var g = m;
                            if (h = g.stateNode,
                                g = g.tag,
                                g !== 5 && g !== 26 && g !== 27 || h === null || p === null || (g = _n(m, p),
                                    g != null && d.push(Td(m, g, h))),
                                f)
                                break;
                            m = m.return
                        }
                        0 < d.length && (s = new c(s, u, null, n, i),
                            o.push({
                                event: s,
                                listeners: d
                            }))
                    }
                }
                if (!(t & 7)) {
                    a: {
                        if (s = e === `mouseover` || e === `pointerover`,
                            c = e === `mouseout` || e === `pointerout`,
                            s && n !== un && (u = n.relatedTarget || n.fromElement) && (wt(u) || u[_t]))
                            break a;
                        if ((c || s) && (s = i.window === i ? i : (s = i.ownerDocument) ? s.defaultView || s.parentWindow : window,
                            c ? (u = n.relatedTarget || n.toElement,
                                c = r,
                                u = u ? wt(u) : null,
                                u !== null && (f = l(u),
                                    d = u.tag,
                                    u !== f || d !== 5 && d !== 27 && d !== 6) && (u = null)) : (c = null,
                                        u = r),
                            c !== u)) {
                            if (d = Ln,
                                g = `onMouseLeave`,
                                p = `onMouseEnter`,
                                m = `mouse`,
                                (e === `pointerout` || e === `pointerover`) && (d = Yn,
                                    g = `onPointerLeave`,
                                    p = `onPointerEnter`,
                                    m = `pointer`),
                                f = c == null ? s : Et(c),
                                h = u == null ? s : Et(u),
                                s = new d(g, m + `leave`, c, n, i),
                                s.target = f,
                                s.relatedTarget = h,
                                g = null,
                                wt(i) === r && (d = new d(p, m + `enter`, u, n, i),
                                    d.target = h,
                                    d.relatedTarget = f,
                                    g = d),
                                f = g,
                                c && u)
                                b: {
                                    for (d = Dd,
                                        p = c,
                                        m = u,
                                        h = 0,
                                        g = p; g; g = d(g))
                                        h++;
                                    g = 0;
                                    for (var _ = m; _; _ = d(_))
                                        g++;
                                    for (; 0 < h - g;)
                                        p = d(p),
                                            h--;
                                    for (; 0 < g - h;)
                                        m = d(m),
                                            g--;
                                    for (; h--;) {
                                        if (p === m || m !== null && p === m.alternate) {
                                            d = p;
                                            break b
                                        }
                                        p = d(p),
                                            m = d(m)
                                    }
                                    d = null
                                }
                            else
                                d = null;
                            c !== null && Od(o, s, c, d, !1),
                                u !== null && f !== null && Od(o, f, u, d, !0)
                        }
                    }
                    a: {
                        if (s = r ? Et(r) : window,
                            c = s.nodeName && s.nodeName.toLowerCase(),
                            c === `select` || c === `input` && s.type === `file`)
                            var v = yr;
                        else if (pr(s)) {
                            if (br)
                                v = kr;
                            else {
                                v = Dr;
                                var y = Er
                            }
                        } else
                            c = s.nodeName,
                                !c || c.toLowerCase() !== `input` || s.type !== `checkbox` && s.type !== `radio` ? r && an(r.elementType) && (v = yr) : v = Or;
                        if (v &&= v(e, r)) {
                            mr(o, v, n, i);
                            break a
                        }
                        y && y(e, s, r),
                            e === `focusout` && r && s.type === `number` && r.memoizedProps.value != null && Xt(s, `number`, s.value)
                    }
                    switch (y = r ? Et(r) : window,
                    e) {
                        case `focusin`:
                            (pr(y) || y.contentEditable === `true`) && (zr = y,
                                Br = r,
                                Vr = null);
                            break;
                        case `focusout`:
                            Vr = Br = zr = null;
                            break;
                        case `mousedown`:
                            Hr = !0;
                            break;
                        case `contextmenu`:
                        case `mouseup`:
                        case `dragend`:
                            Hr = !1,
                                Ur(o, n, i);
                            break;
                        case `selectionchange`:
                            if (Rr)
                                break;
                        case `keydown`:
                        case `keyup`:
                            Ur(o, n, i)
                    }
                    var b;
                    if (tr)
                        b: {
                            switch (e) {
                                case `compositionstart`:
                                    var x = `onCompositionStart`;
                                    break b;
                                case `compositionend`:
                                    x = `onCompositionEnd`;
                                    break b;
                                case `compositionupdate`:
                                    x = `onCompositionUpdate`;
                                    break b
                            }
                            x = void 0
                        }
                    else
                        lr ? sr(e, n) && (x = `onCompositionEnd`) : e === `keydown` && n.keyCode === 229 && (x = `onCompositionStart`);
                    x && (ir && n.locale !== `ko` && (lr || x !== `onCompositionStart` ? x === `onCompositionEnd` && lr && (b = wn()) : (xn = i,
                        Sn = `value` in xn ? xn.value : xn.textContent,
                        lr = !0)),
                        y = Ed(r, x),
                        0 < y.length && (x = new Hn(x, e, null, n, i),
                            o.push({
                                event: x,
                                listeners: y
                            }),
                            b ? x.data = b : (b = cr(n),
                                b !== null && (x.data = b)))),
                        (b = rr ? ur(e, n) : dr(e, n)) && (x = Ed(r, `onBeforeInput`),
                            0 < x.length && (y = new Hn(`onBeforeInput`, `beforeinput`, null, n, i),
                                o.push({
                                    event: y,
                                    listeners: x
                                }),
                                y.data = b)),
                        md(o, e, r, n, i)
                }
                yd(o, t)
            })
        }
        function Td(e, t, n) {
            return {
                instance: e,
                listener: t,
                currentTarget: n
            }
        }
        function Ed(e, t) {
            for (var n = t + `Capture`, r = []; e !== null;) {
                var i = e
                    , a = i.stateNode;
                if (i = i.tag,
                    i !== 5 && i !== 26 && i !== 27 || a === null || (i = _n(e, n),
                        i != null && r.unshift(Td(e, i, a)),
                        i = _n(e, t),
                        i != null && r.push(Td(e, i, a))),
                    e.tag === 3)
                    return r;
                e = e.return
            }
            return []
        }
        function Dd(e) {
            if (e === null)
                return null;
            do
                e = e.return;
            while (e && e.tag !== 5 && e.tag !== 27);
            return e || null
        }
        function Od(e, t, n, r, i) {
            for (var a = t._reactName, o = []; n !== null && n !== r;) {
                var s = n
                    , c = s.alternate
                    , l = s.stateNode;
                if (s = s.tag,
                    c !== null && c === r)
                    break;
                s !== 5 && s !== 26 && s !== 27 || l === null || (c = l,
                    i ? (l = _n(n, a),
                        l != null && o.unshift(Td(n, l, c))) : i || (l = _n(n, a),
                            l != null && o.push(Td(n, l, c)))),
                    n = n.return
            }
            o.length !== 0 && e.push({
                event: t,
                listeners: o
            })
        }
        var kd = /\r\n?/g
            , Ad = /\u0000|\uFFFD/g;
        function jd(e) {
            return (typeof e == `string` ? e : `` + e).replace(kd, `
`).replace(Ad, ``)
        }
        function Md(e, t) {
            return t = jd(t),
                jd(e) === t
        }
        function $(e, t, n, r, i, a) {
            switch (n) {
                case `children`:
                    typeof r == `string` ? t === `body` || t === `textarea` && r === `` || en(e, r) : (typeof r == `number` || typeof r == `bigint`) && t !== `body` && en(e, `` + r);
                    break;
                case `className`:
                    Rt(e, `class`, r);
                    break;
                case `tabIndex`:
                    Rt(e, `tabindex`, r);
                    break;
                case `dir`:
                case `role`:
                case `viewBox`:
                case `width`:
                case `height`:
                    Rt(e, n, r);
                    break;
                case `style`:
                    rn(e, r, a);
                    break;
                case `data`:
                    if (t !== `object`) {
                        Rt(e, `data`, r);
                        break
                    }
                case `src`:
                case `href`:
                    if (r === `` && (t !== `a` || n !== `href`)) {
                        e.removeAttribute(n);
                        break
                    }
                    if (r == null || typeof r == `function` || typeof r == `symbol` || typeof r == `boolean`) {
                        e.removeAttribute(n);
                        break
                    }
                    r = cn(`` + r),
                        e.setAttribute(n, r);
                    break;
                case `action`:
                case `formAction`:
                    if (typeof r == `function`) {
                        e.setAttribute(n, `javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')`);
                        break
                    }
                    if (typeof a == `function` && (n === `formAction` ? (t !== `input` && $(e, t, `name`, i.name, i, null),
                        $(e, t, `formEncType`, i.formEncType, i, null),
                        $(e, t, `formMethod`, i.formMethod, i, null),
                        $(e, t, `formTarget`, i.formTarget, i, null)) : ($(e, t, `encType`, i.encType, i, null),
                            $(e, t, `method`, i.method, i, null),
                            $(e, t, `target`, i.target, i, null))),
                        r == null || typeof r == `symbol` || typeof r == `boolean`) {
                        e.removeAttribute(n);
                        break
                    }
                    r = cn(`` + r),
                        e.setAttribute(n, r);
                    break;
                case `onClick`:
                    r != null && (e.onclick = ln);
                    break;
                case `onScroll`:
                    r != null && Q(`scroll`, e);
                    break;
                case `onScrollEnd`:
                    r != null && Q(`scrollend`, e);
                    break;
                case `dangerouslySetInnerHTML`:
                    if (r != null) {
                        if (typeof r != `object` || !(`__html` in r))
                            throw Error(o(61));
                        if (n = r.__html,
                            n != null) {
                            if (i.children != null)
                                throw Error(o(60));
                            e.innerHTML = n
                        }
                    }
                    break;
                case `multiple`:
                    e.multiple = r && typeof r != `function` && typeof r != `symbol`;
                    break;
                case `muted`:
                    e.muted = r && typeof r != `function` && typeof r != `symbol`;
                    break;
                case `suppressContentEditableWarning`:
                case `suppressHydrationWarning`:
                case `defaultValue`:
                case `defaultChecked`:
                case `innerHTML`:
                case `ref`:
                    break;
                case `autoFocus`:
                    break;
                case `xlinkHref`:
                    if (r == null || typeof r == `function` || typeof r == `boolean` || typeof r == `symbol`) {
                        e.removeAttribute(`xlink:href`);
                        break
                    }
                    n = cn(`` + r),
                        e.setAttributeNS(`http://www.w3.org/1999/xlink`, `xlink:href`, n);
                    break;
                case `contentEditable`:
                case `spellCheck`:
                case `draggable`:
                case `value`:
                case `autoReverse`:
                case `externalResourcesRequired`:
                case `focusable`:
                case `preserveAlpha`:
                    r != null && typeof r != `function` && typeof r != `symbol` ? e.setAttribute(n, `` + r) : e.removeAttribute(n);
                    break;
                case `inert`:
                case `allowFullScreen`:
                case `async`:
                case `autoPlay`:
                case `controls`:
                case `default`:
                case `defer`:
                case `disabled`:
                case `disablePictureInPicture`:
                case `disableRemotePlayback`:
                case `formNoValidate`:
                case `hidden`:
                case `loop`:
                case `noModule`:
                case `noValidate`:
                case `open`:
                case `playsInline`:
                case `readOnly`:
                case `required`:
                case `reversed`:
                case `scoped`:
                case `seamless`:
                case `itemScope`:
                    r && typeof r != `function` && typeof r != `symbol` ? e.setAttribute(n, ``) : e.removeAttribute(n);
                    break;
                case `capture`:
                case `download`:
                    !0 === r ? e.setAttribute(n, ``) : !1 !== r && r != null && typeof r != `function` && typeof r != `symbol` ? e.setAttribute(n, r) : e.removeAttribute(n);
                    break;
                case `cols`:
                case `rows`:
                case `size`:
                case `span`:
                    r != null && typeof r != `function` && typeof r != `symbol` && !isNaN(r) && 1 <= r ? e.setAttribute(n, r) : e.removeAttribute(n);
                    break;
                case `rowSpan`:
                case `start`:
                    r == null || typeof r == `function` || typeof r == `symbol` || isNaN(r) ? e.removeAttribute(n) : e.setAttribute(n, r);
                    break;
                case `popover`:
                    Q(`beforetoggle`, e),
                        Q(`toggle`, e),
                        Lt(e, `popover`, r);
                    break;
                case `xlinkActuate`:
                    zt(e, `http://www.w3.org/1999/xlink`, `xlink:actuate`, r);
                    break;
                case `xlinkArcrole`:
                    zt(e, `http://www.w3.org/1999/xlink`, `xlink:arcrole`, r);
                    break;
                case `xlinkRole`:
                    zt(e, `http://www.w3.org/1999/xlink`, `xlink:role`, r);
                    break;
                case `xlinkShow`:
                    zt(e, `http://www.w3.org/1999/xlink`, `xlink:show`, r);
                    break;
                case `xlinkTitle`:
                    zt(e, `http://www.w3.org/1999/xlink`, `xlink:title`, r);
                    break;
                case `xlinkType`:
                    zt(e, `http://www.w3.org/1999/xlink`, `xlink:type`, r);
                    break;
                case `xmlBase`:
                    zt(e, `http://www.w3.org/XML/1998/namespace`, `xml:base`, r);
                    break;
                case `xmlLang`:
                    zt(e, `http://www.w3.org/XML/1998/namespace`, `xml:lang`, r);
                    break;
                case `xmlSpace`:
                    zt(e, `http://www.w3.org/XML/1998/namespace`, `xml:space`, r);
                    break;
                case `is`:
                    Lt(e, `is`, r);
                    break;
                case `innerText`:
                case `textContent`:
                    break;
                default:
                    (!(2 < n.length) || n[0] !== `o` && n[0] !== `O` || n[1] !== `n` && n[1] !== `N`) && (n = on.get(n) || n,
                        Lt(e, n, r))
            }
        }
        function Nd(e, t, n, r, i, a) {
            switch (n) {
                case `style`:
                    rn(e, r, a);
                    break;
                case `dangerouslySetInnerHTML`:
                    if (r != null) {
                        if (typeof r != `object` || !(`__html` in r))
                            throw Error(o(61));
                        if (n = r.__html,
                            n != null) {
                            if (i.children != null)
                                throw Error(o(60));
                            e.innerHTML = n
                        }
                    }
                    break;
                case `children`:
                    typeof r == `string` ? en(e, r) : (typeof r == `number` || typeof r == `bigint`) && en(e, `` + r);
                    break;
                case `onScroll`:
                    r != null && Q(`scroll`, e);
                    break;
                case `onScrollEnd`:
                    r != null && Q(`scrollend`, e);
                    break;
                case `onClick`:
                    r != null && (e.onclick = ln);
                    break;
                case `suppressContentEditableWarning`:
                case `suppressHydrationWarning`:
                case `innerHTML`:
                case `ref`:
                    break;
                case `innerText`:
                case `textContent`:
                    break;
                default:
                    if (!At.hasOwnProperty(n))
                        a: {
                            if (n[0] === `o` && n[1] === `n` && (i = n.endsWith(`Capture`),
                                t = n.slice(2, i ? n.length - 7 : void 0),
                                a = e[gt] || null,
                                a = a == null ? null : a[n],
                                typeof a == `function` && e.removeEventListener(t, a, i),
                                typeof r == `function`)) {
                                typeof a != `function` && a !== null && (n in e ? e[n] = null : e.hasAttribute(n) && e.removeAttribute(n)),
                                    e.addEventListener(t, r, i);
                                break a
                            }
                            n in e ? e[n] = r : !0 === r ? e.setAttribute(n, ``) : Lt(e, n, r)
                        }
            }
        }
        function Pd(e, t, n) {
            switch (t) {
                case `div`:
                case `span`:
                case `svg`:
                case `path`:
                case `a`:
                case `g`:
                case `p`:
                case `li`:
                    break;
                case `img`:
                    Q(`error`, e),
                        Q(`load`, e);
                    var r = !1, i = !1, a;
                    for (a in n)
                        if (n.hasOwnProperty(a)) {
                            var s = n[a];
                            if (s != null)
                                switch (a) {
                                    case `src`:
                                        r = !0;
                                        break;
                                    case `srcSet`:
                                        i = !0;
                                        break;
                                    case `children`:
                                    case `dangerouslySetInnerHTML`:
                                        throw Error(o(137, t));
                                    default:
                                        $(e, t, a, s, n, null)
                                }
                        }
                    i && $(e, t, `srcSet`, n.srcSet, n, null),
                        r && $(e, t, `src`, n.src, n, null);
                    return;
                case `input`:
                    Q(`invalid`, e);
                    var c = a = s = i = null
                        , l = null
                        , u = null;
                    for (r in n)
                        if (n.hasOwnProperty(r)) {
                            var d = n[r];
                            if (d != null)
                                switch (r) {
                                    case `name`:
                                        i = d;
                                        break;
                                    case `type`:
                                        s = d;
                                        break;
                                    case `checked`:
                                        l = d;
                                        break;
                                    case `defaultChecked`:
                                        u = d;
                                        break;
                                    case `value`:
                                        a = d;
                                        break;
                                    case `defaultValue`:
                                        c = d;
                                        break;
                                    case `children`:
                                    case `dangerouslySetInnerHTML`:
                                        if (d != null)
                                            throw Error(o(137, t));
                                        break;
                                    default:
                                        $(e, t, r, d, n, null)
                                }
                        }
                    Yt(e, a, c, l, u, s, i, !1);
                    return;
                case `select`:
                    for (i in Q(`invalid`, e),
                        r = s = a = null,
                        n)
                        if (n.hasOwnProperty(i) && (c = n[i],
                            c != null))
                            switch (i) {
                                case `value`:
                                    a = c;
                                    break;
                                case `defaultValue`:
                                    s = c;
                                    break;
                                case `multiple`:
                                    r = c;
                                default:
                                    $(e, t, i, c, n, null)
                            }
                    t = a,
                        n = s,
                        e.multiple = !!r,
                        t == null ? n != null && Zt(e, !!r, n, !0) : Zt(e, !!r, t, !1);
                    return;
                case `textarea`:
                    for (s in Q(`invalid`, e),
                        a = i = r = null,
                        n)
                        if (n.hasOwnProperty(s) && (c = n[s],
                            c != null))
                            switch (s) {
                                case `value`:
                                    r = c;
                                    break;
                                case `defaultValue`:
                                    i = c;
                                    break;
                                case `children`:
                                    a = c;
                                    break;
                                case `dangerouslySetInnerHTML`:
                                    if (c != null)
                                        throw Error(o(91));
                                    break;
                                default:
                                    $(e, t, s, c, n, null)
                            }
                    $t(e, r, i, a);
                    return;
                case `option`:
                    for (l in n)
                        if (n.hasOwnProperty(l) && (r = n[l],
                            r != null))
                            switch (l) {
                                case `selected`:
                                    e.selected = r && typeof r != `function` && typeof r != `symbol`;
                                    break;
                                default:
                                    $(e, t, l, r, n, null)
                            }
                    return;
                case `dialog`:
                    Q(`beforetoggle`, e),
                        Q(`toggle`, e),
                        Q(`cancel`, e),
                        Q(`close`, e);
                    break;
                case `iframe`:
                case `object`:
                    Q(`load`, e);
                    break;
                case `video`:
                case `audio`:
                    for (r = 0; r < _d.length; r++)
                        Q(_d[r], e);
                    break;
                case `image`:
                    Q(`error`, e),
                        Q(`load`, e);
                    break;
                case `details`:
                    Q(`toggle`, e);
                    break;
                case `embed`:
                case `source`:
                case `link`:
                    Q(`error`, e),
                        Q(`load`, e);
                case `area`:
                case `base`:
                case `br`:
                case `col`:
                case `hr`:
                case `keygen`:
                case `meta`:
                case `param`:
                case `track`:
                case `wbr`:
                case `menuitem`:
                    for (u in n)
                        if (n.hasOwnProperty(u) && (r = n[u],
                            r != null))
                            switch (u) {
                                case `children`:
                                case `dangerouslySetInnerHTML`:
                                    throw Error(o(137, t));
                                default:
                                    $(e, t, u, r, n, null)
                            }
                    return;
                default:
                    if (an(t)) {
                        for (d in n)
                            n.hasOwnProperty(d) && (r = n[d],
                                r !== void 0 && Nd(e, t, d, r, n, void 0));
                        return
                    }
            }
            for (c in n)
                n.hasOwnProperty(c) && (r = n[c],
                    r != null && $(e, t, c, r, n, null))
        }
        function Fd(e, t, n, r) {
            switch (t) {
                case `div`:
                case `span`:
                case `svg`:
                case `path`:
                case `a`:
                case `g`:
                case `p`:
                case `li`:
                    break;
                case `input`:
                    var i = null
                        , a = null
                        , s = null
                        , c = null
                        , l = null
                        , u = null
                        , d = null;
                    for (m in n) {
                        var f = n[m];
                        if (n.hasOwnProperty(m) && f != null)
                            switch (m) {
                                case `checked`:
                                    break;
                                case `value`:
                                    break;
                                case `defaultValue`:
                                    l = f;
                                default:
                                    r.hasOwnProperty(m) || $(e, t, m, null, r, f)
                            }
                    }
                    for (var p in r) {
                        var m = r[p];
                        if (f = n[p],
                            r.hasOwnProperty(p) && (m != null || f != null))
                            switch (p) {
                                case `type`:
                                    a = m;
                                    break;
                                case `name`:
                                    i = m;
                                    break;
                                case `checked`:
                                    u = m;
                                    break;
                                case `defaultChecked`:
                                    d = m;
                                    break;
                                case `value`:
                                    s = m;
                                    break;
                                case `defaultValue`:
                                    c = m;
                                    break;
                                case `children`:
                                case `dangerouslySetInnerHTML`:
                                    if (m != null)
                                        throw Error(o(137, t));
                                    break;
                                default:
                                    m !== f && $(e, t, p, m, r, f)
                            }
                    }
                    Jt(e, s, c, l, u, d, a, i);
                    return;
                case `select`:
                    for (a in m = s = c = p = null,
                        n)
                        if (l = n[a],
                            n.hasOwnProperty(a) && l != null)
                            switch (a) {
                                case `value`:
                                    break;
                                case `multiple`:
                                    m = l;
                                default:
                                    r.hasOwnProperty(a) || $(e, t, a, null, r, l)
                            }
                    for (i in r)
                        if (a = r[i],
                            l = n[i],
                            r.hasOwnProperty(i) && (a != null || l != null))
                            switch (i) {
                                case `value`:
                                    p = a;
                                    break;
                                case `defaultValue`:
                                    c = a;
                                    break;
                                case `multiple`:
                                    s = a;
                                default:
                                    a !== l && $(e, t, i, a, r, l)
                            }
                    t = c,
                        n = s,
                        r = m,
                        p == null ? !!r != !!n && (t == null ? Zt(e, !!n, n ? [] : ``, !1) : Zt(e, !!n, t, !0)) : Zt(e, !!n, p, !1);
                    return;
                case `textarea`:
                    for (c in m = p = null,
                        n)
                        if (i = n[c],
                            n.hasOwnProperty(c) && i != null && !r.hasOwnProperty(c))
                            switch (c) {
                                case `value`:
                                    break;
                                case `children`:
                                    break;
                                default:
                                    $(e, t, c, null, r, i)
                            }
                    for (s in r)
                        if (i = r[s],
                            a = n[s],
                            r.hasOwnProperty(s) && (i != null || a != null))
                            switch (s) {
                                case `value`:
                                    p = i;
                                    break;
                                case `defaultValue`:
                                    m = i;
                                    break;
                                case `children`:
                                    break;
                                case `dangerouslySetInnerHTML`:
                                    if (i != null)
                                        throw Error(o(91));
                                    break;
                                default:
                                    i !== a && $(e, t, s, i, r, a)
                            }
                    Qt(e, p, m);
                    return;
                case `option`:
                    for (var h in n)
                        if (p = n[h],
                            n.hasOwnProperty(h) && p != null && !r.hasOwnProperty(h))
                            switch (h) {
                                case `selected`:
                                    e.selected = !1;
                                    break;
                                default:
                                    $(e, t, h, null, r, p)
                            }
                    for (l in r)
                        if (p = r[l],
                            m = n[l],
                            r.hasOwnProperty(l) && p !== m && (p != null || m != null))
                            switch (l) {
                                case `selected`:
                                    e.selected = p && typeof p != `function` && typeof p != `symbol`;
                                    break;
                                default:
                                    $(e, t, l, p, r, m)
                            }
                    return;
                case `img`:
                case `link`:
                case `area`:
                case `base`:
                case `br`:
                case `col`:
                case `embed`:
                case `hr`:
                case `keygen`:
                case `meta`:
                case `param`:
                case `source`:
                case `track`:
                case `wbr`:
                case `menuitem`:
                    for (var g in n)
                        p = n[g],
                            n.hasOwnProperty(g) && p != null && !r.hasOwnProperty(g) && $(e, t, g, null, r, p);
                    for (u in r)
                        if (p = r[u],
                            m = n[u],
                            r.hasOwnProperty(u) && p !== m && (p != null || m != null))
                            switch (u) {
                                case `children`:
                                case `dangerouslySetInnerHTML`:
                                    if (p != null)
                                        throw Error(o(137, t));
                                    break;
                                default:
                                    $(e, t, u, p, r, m)
                            }
                    return;
                default:
                    if (an(t)) {
                        for (var _ in n)
                            p = n[_],
                                n.hasOwnProperty(_) && p !== void 0 && !r.hasOwnProperty(_) && Nd(e, t, _, void 0, r, p);
                        for (d in r)
                            p = r[d],
                                m = n[d],
                                !r.hasOwnProperty(d) || p === m || p === void 0 && m === void 0 || Nd(e, t, d, p, r, m);
                        return
                    }
            }
            for (var v in n)
                p = n[v],
                    n.hasOwnProperty(v) && p != null && !r.hasOwnProperty(v) && $(e, t, v, null, r, p);
            for (f in r)
                p = r[f],
                    m = n[f],
                    !r.hasOwnProperty(f) || p === m || p == null && m == null || $(e, t, f, p, r, m)
        }
        function Id(e) {
            switch (e) {
                case `css`:
                case `script`:
                case `font`:
                case `img`:
                case `image`:
                case `input`:
                case `link`:
                    return !0;
                default:
                    return !1
            }
        }
        function Ld() {
            if (typeof performance.getEntriesByType == `function`) {
                for (var e = 0, t = 0, n = performance.getEntriesByType(`resource`), r = 0; r < n.length; r++) {
                    var i = n[r]
                        , a = i.transferSize
                        , o = i.initiatorType
                        , s = i.duration;
                    if (a && s && Id(o)) {
                        for (o = 0,
                            s = i.responseEnd,
                            r += 1; r < n.length; r++) {
                            var c = n[r]
                                , l = c.startTime;
                            if (l > s)
                                break;
                            var u = c.transferSize
                                , d = c.initiatorType;
                            u && Id(d) && (c = c.responseEnd,
                                o += u * (c < s ? 1 : (s - l) / (c - l)))
                        }
                        if (--r,
                            t += 8 * (a + o) / (i.duration / 1e3),
                            e++,
                            10 < e)
                            break
                    }
                }
                if (0 < e)
                    return t / e / 1e6
            }
            return navigator.connection && (e = navigator.connection.downlink,
                typeof e == `number`) ? e : 5
        }
        var Rd = null
            , zd = null;
        function Bd(e) {
            return e.nodeType === 9 ? e : e.ownerDocument
        }
        function Vd(e) {
            switch (e) {
                case `http://www.w3.org/2000/svg`:
                    return 1;
                case `http://www.w3.org/1998/Math/MathML`:
                    return 2;
                default:
                    return 0
            }
        }
        function Hd(e, t) {
            if (e === 0)
                switch (t) {
                    case `svg`:
                        return 1;
                    case `math`:
                        return 2;
                    default:
                        return 0
                }
            return e === 1 && t === `foreignObject` ? 0 : e
        }
        function Ud(e, t) {
            return e === `textarea` || e === `noscript` || typeof t.children == `string` || typeof t.children == `number` || typeof t.children == `bigint` || typeof t.dangerouslySetInnerHTML == `object` && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null
        }
        var Wd = null;
        function Gd() {
            var e = window.event;
            return e && e.type === `popstate` ? e !== Wd && (Wd = e,
                !0) : (Wd = null,
                    !1)
        }
        var Kd = typeof setTimeout == `function` ? setTimeout : void 0
            , qd = typeof clearTimeout == `function` ? clearTimeout : void 0
            , Jd = typeof Promise == `function` ? Promise : void 0
            , Yd = typeof queueMicrotask == `function` ? queueMicrotask : Jd === void 0 ? Kd : function (e) {
                return Jd.resolve(null).then(e).catch(Xd)
            }
            ;
        function Xd(e) {
            setTimeout(function () {
                throw e
            })
        }
        function Zd(e) {
            return e === `head`
        }
        function Qd(e, t) {
            var n = t
                , r = 0;
            do {
                var i = n.nextSibling;
                if (e.removeChild(n),
                    i && i.nodeType === 8) {
                    if (n = i.data,
                        n === `/$` || n === `/&`) {
                        if (r === 0) {
                            e.removeChild(i),
                                Np(t);
                            return
                        }
                        r--
                    } else if (n === `$` || n === `$?` || n === `$~` || n === `$!` || n === `&`)
                        r++;
                    else if (n === `html`)
                        pf(e.ownerDocument.documentElement);
                    else if (n === `head`) {
                        n = e.ownerDocument.head,
                            pf(n);
                        for (var a = n.firstChild; a;) {
                            var o = a.nextSibling
                                , s = a.nodeName;
                            a[St] || s === `SCRIPT` || s === `STYLE` || s === `LINK` && a.rel.toLowerCase() === `stylesheet` || n.removeChild(a),
                                a = o
                        }
                    } else
                        n === `body` && pf(e.ownerDocument.body)
                }
                n = i
            } while (n);
            Np(t)
        }
        function $d(e, t) {
            var n = e;
            e = 0;
            do {
                var r = n.nextSibling;
                if (n.nodeType === 1 ? t ? (n._stashedDisplay = n.style.display,
                    n.style.display = `none`) : (n.style.display = n._stashedDisplay || ``,
                        n.getAttribute(`style`) === `` && n.removeAttribute(`style`)) : n.nodeType === 3 && (t ? (n._stashedText = n.nodeValue,
                            n.nodeValue = ``) : n.nodeValue = n._stashedText || ``),
                    r && r.nodeType === 8) {
                    if (n = r.data,
                        n === `/$`) {
                        if (e === 0)
                            break;
                        e--
                    } else
                        n !== `$` && n !== `$?` && n !== `$~` && n !== `$!` || e++
                }
                n = r
            } while (n)
        }
        function ef(e) {
            var t = e.firstChild;
            for (t && t.nodeType === 10 && (t = t.nextSibling); t;) {
                var n = t;
                switch (t = t.nextSibling,
                n.nodeName) {
                    case `HTML`:
                    case `HEAD`:
                    case `BODY`:
                        ef(n),
                            Ct(n);
                        continue;
                    case `SCRIPT`:
                    case `STYLE`:
                        continue;
                    case `LINK`:
                        if (n.rel.toLowerCase() === `stylesheet`)
                            continue
                }
                e.removeChild(n)
            }
        }
        function tf(e, t, n, r) {
            for (; e.nodeType === 1;) {
                var i = n;
                if (e.nodeName.toLowerCase() !== t.toLowerCase()) {
                    if (!r && (e.nodeName !== `INPUT` || e.type !== `hidden`))
                        break
                } else if (!r) {
                    if (t === `input` && e.type === `hidden`) {
                        var a = i.name == null ? null : `` + i.name;
                        if (i.type === `hidden` && e.getAttribute(`name`) === a)
                            return e
                    } else
                        return e
                } else if (!e[St])
                    switch (t) {
                        case `meta`:
                            if (!e.hasAttribute(`itemprop`))
                                break;
                            return e;
                        case `link`:
                            if (a = e.getAttribute(`rel`),
                                a === `stylesheet` && e.hasAttribute(`data-precedence`) || a !== i.rel || e.getAttribute(`href`) !== (i.href == null || i.href === `` ? null : i.href) || e.getAttribute(`crossorigin`) !== (i.crossOrigin == null ? null : i.crossOrigin) || e.getAttribute(`title`) !== (i.title == null ? null : i.title))
                                break;
                            return e;
                        case `style`:
                            if (e.hasAttribute(`data-precedence`))
                                break;
                            return e;
                        case `script`:
                            if (a = e.getAttribute(`src`),
                                (a !== (i.src == null ? null : i.src) || e.getAttribute(`type`) !== (i.type == null ? null : i.type) || e.getAttribute(`crossorigin`) !== (i.crossOrigin == null ? null : i.crossOrigin)) && a && e.hasAttribute(`async`) && !e.hasAttribute(`itemprop`))
                                break;
                            return e;
                        default:
                            return e
                    }
                if (e = cf(e.nextSibling),
                    e === null)
                    break
            }
            return null
        }
        function nf(e, t, n) {
            if (t === ``)
                return null;
            for (; e.nodeType !== 3;)
                if ((e.nodeType !== 1 || e.nodeName !== `INPUT` || e.type !== `hidden`) && !n || (e = cf(e.nextSibling),
                    e === null))
                    return null;
            return e
        }
        function rf(e, t) {
            for (; e.nodeType !== 8;)
                if ((e.nodeType !== 1 || e.nodeName !== `INPUT` || e.type !== `hidden`) && !t || (e = cf(e.nextSibling),
                    e === null))
                    return null;
            return e
        }
        function af(e) {
            return e.data === `$?` || e.data === `$~`
        }
        function of(e) {
            return e.data === `$!` || e.data === `$?` && e.ownerDocument.readyState !== `loading`
        }
        function sf(e, t) {
            var n = e.ownerDocument;
            if (e.data === `$~`)
                e._reactRetry = t;
            else if (e.data !== `$?` || n.readyState !== `loading`)
                t();
            else {
                var r = function () {
                    t(),
                        n.removeEventListener(`DOMContentLoaded`, r)
                };
                n.addEventListener(`DOMContentLoaded`, r),
                    e._reactRetry = r
            }
        }
        function cf(e) {
            for (; e != null; e = e.nextSibling) {
                var t = e.nodeType;
                if (t === 1 || t === 3)
                    break;
                if (t === 8) {
                    if (t = e.data,
                        t === `$` || t === `$!` || t === `$?` || t === `$~` || t === `&` || t === `F!` || t === `F`)
                        break;
                    if (t === `/$` || t === `/&`)
                        return null
                }
            }
            return e
        }
        var lf = null;
        function uf(e) {
            e = e.nextSibling;
            for (var t = 0; e;) {
                if (e.nodeType === 8) {
                    var n = e.data;
                    if (n === `/$` || n === `/&`) {
                        if (t === 0)
                            return cf(e.nextSibling);
                        t--
                    } else
                        n !== `$` && n !== `$!` && n !== `$?` && n !== `$~` && n !== `&` || t++
                }
                e = e.nextSibling
            }
            return null
        }
        function df(e) {
            e = e.previousSibling;
            for (var t = 0; e;) {
                if (e.nodeType === 8) {
                    var n = e.data;
                    if (n === `$` || n === `$!` || n === `$?` || n === `$~` || n === `&`) {
                        if (t === 0)
                            return e;
                        t--
                    } else
                        n !== `/$` && n !== `/&` || t++
                }
                e = e.previousSibling
            }
            return null
        }
        function ff(e, t, n) {
            switch (t = Bd(n),
            e) {
                case `html`:
                    if (e = t.documentElement,
                        !e)
                        throw Error(o(452));
                    return e;
                case `head`:
                    if (e = t.head,
                        !e)
                        throw Error(o(453));
                    return e;
                case `body`:
                    if (e = t.body,
                        !e)
                        throw Error(o(454));
                    return e;
                default:
                    throw Error(o(451))
            }
        }
        function pf(e) {
            for (var t = e.attributes; t.length;)
                e.removeAttributeNode(t[0]);
            Ct(e)
        }
        var mf = new Map
            , hf = new Set;
        function gf(e) {
            return typeof e.getRootNode == `function` ? e.getRootNode() : e.nodeType === 9 ? e : e.ownerDocument
        }
        var _f = E.d;
        E.d = {
            f: vf,
            r: yf,
            D: Sf,
            C: Cf,
            L: wf,
            m: Tf,
            X: Df,
            S: Ef,
            M: Of
        };
        function vf() {
            var e = _f.f()
                , t = bu();
            return e || t
        }
        function yf(e) {
            var t = Tt(e);
            t !== null && t.tag === 5 && t.type === `form` ? js(t) : _f.r(e)
        }
        var bf = typeof document > `u` ? null : document;
        function xf(e, t, n) {
            var r = bf;
            if (r && typeof t == `string` && t) {
                var i = qt(t);
                i = `link[rel="` + e + `"][href="` + i + `"]`,
                    typeof n == `string` && (i += `[crossorigin="` + n + `"]`),
                    hf.has(i) || (hf.add(i),
                        e = {
                            rel: e,
                            crossOrigin: n,
                            href: t
                        },
                        r.querySelector(i) === null && (t = r.createElement(`link`),
                            Pd(t, `link`, e),
                            Ot(t),
                            r.head.appendChild(t)))
            }
        }
        function Sf(e) {
            _f.D(e),
                xf(`dns-prefetch`, e, null)
        }
        function Cf(e, t) {
            _f.C(e, t),
                xf(`preconnect`, e, t)
        }
        function wf(e, t, n) {
            _f.L(e, t, n);
            var r = bf;
            if (r && e && t) {
                var i = `link[rel="preload"][as="` + qt(t) + `"]`;
                t === `image` && n && n.imageSrcSet ? (i += `[imagesrcset="` + qt(n.imageSrcSet) + `"]`,
                    typeof n.imageSizes == `string` && (i += `[imagesizes="` + qt(n.imageSizes) + `"]`)) : i += `[href="` + qt(e) + `"]`;
                var a = i;
                switch (t) {
                    case `style`:
                        a = Af(e);
                        break;
                    case `script`:
                        a = Pf(e)
                }
                mf.has(a) || (e = h({
                    rel: `preload`,
                    href: t === `image` && n && n.imageSrcSet ? void 0 : e,
                    as: t
                }, n),
                    mf.set(a, e),
                    r.querySelector(i) !== null || t === `style` && r.querySelector(jf(a)) || t === `script` && r.querySelector(Ff(a)) || (t = r.createElement(`link`),
                        Pd(t, `link`, e),
                        Ot(t),
                        r.head.appendChild(t)))
            }
        }
        function Tf(e, t) {
            _f.m(e, t);
            var n = bf;
            if (n && e) {
                var r = t && typeof t.as == `string` ? t.as : `script`
                    , i = `link[rel="modulepreload"][as="` + qt(r) + `"][href="` + qt(e) + `"]`
                    , a = i;
                switch (r) {
                    case `audioworklet`:
                    case `paintworklet`:
                    case `serviceworker`:
                    case `sharedworker`:
                    case `worker`:
                    case `script`:
                        a = Pf(e)
                }
                if (!mf.has(a) && (e = h({
                    rel: `modulepreload`,
                    href: e
                }, t),
                    mf.set(a, e),
                    n.querySelector(i) === null)) {
                    switch (r) {
                        case `audioworklet`:
                        case `paintworklet`:
                        case `serviceworker`:
                        case `sharedworker`:
                        case `worker`:
                        case `script`:
                            if (n.querySelector(Ff(a)))
                                return
                    }
                    r = n.createElement(`link`),
                        Pd(r, `link`, e),
                        Ot(r),
                        n.head.appendChild(r)
                }
            }
        }
        function Ef(e, t, n) {
            _f.S(e, t, n);
            var r = bf;
            if (r && e) {
                var i = Dt(r).hoistableStyles
                    , a = Af(e);
                t ||= `default`;
                var o = i.get(a);
                if (!o) {
                    var s = {
                        loading: 0,
                        preload: null
                    };
                    if (o = r.querySelector(jf(a)))
                        s.loading = 5;
                    else {
                        e = h({
                            rel: `stylesheet`,
                            href: e,
                            "data-precedence": t
                        }, n),
                            (n = mf.get(a)) && Rf(e, n);
                        var c = o = r.createElement(`link`);
                        Ot(c),
                            Pd(c, `link`, e),
                            c._p = new Promise(function (e, t) {
                                c.onload = e,
                                    c.onerror = t
                            }
                            ),
                            c.addEventListener(`load`, function () {
                                s.loading |= 1
                            }),
                            c.addEventListener(`error`, function () {
                                s.loading |= 2
                            }),
                            s.loading |= 4,
                            Lf(o, t, r)
                    }
                    o = {
                        type: `stylesheet`,
                        instance: o,
                        count: 1,
                        state: s
                    },
                        i.set(a, o)
                }
            }
        }
        function Df(e, t) {
            _f.X(e, t);
            var n = bf;
            if (n && e) {
                var r = Dt(n).hoistableScripts
                    , i = Pf(e)
                    , a = r.get(i);
                a || (a = n.querySelector(Ff(i)),
                    a || (e = h({
                        src: e,
                        async: !0
                    }, t),
                        (t = mf.get(i)) && zf(e, t),
                        a = n.createElement(`script`),
                        Ot(a),
                        Pd(a, `link`, e),
                        n.head.appendChild(a)),
                    a = {
                        type: `script`,
                        instance: a,
                        count: 1,
                        state: null
                    },
                    r.set(i, a))
            }
        }
        function Of(e, t) {
            _f.M(e, t);
            var n = bf;
            if (n && e) {
                var r = Dt(n).hoistableScripts
                    , i = Pf(e)
                    , a = r.get(i);
                a || (a = n.querySelector(Ff(i)),
                    a || (e = h({
                        src: e,
                        async: !0,
                        type: `module`
                    }, t),
                        (t = mf.get(i)) && zf(e, t),
                        a = n.createElement(`script`),
                        Ot(a),
                        Pd(a, `link`, e),
                        n.head.appendChild(a)),
                    a = {
                        type: `script`,
                        instance: a,
                        count: 1,
                        state: null
                    },
                    r.set(i, a))
            }
        }
        function kf(e, t, n, r) {
            var i = (i = _e.current) ? gf(i) : null;
            if (!i)
                throw Error(o(446));
            switch (e) {
                case `meta`:
                case `title`:
                    return null;
                case `style`:
                    return typeof n.precedence == `string` && typeof n.href == `string` ? (t = Af(n.href),
                        n = Dt(i).hoistableStyles,
                        r = n.get(t),
                        r || (r = {
                            type: `style`,
                            instance: null,
                            count: 0,
                            state: null
                        },
                            n.set(t, r)),
                        r) : {
                        type: `void`,
                        instance: null,
                        count: 0,
                        state: null
                    };
                case `link`:
                    if (n.rel === `stylesheet` && typeof n.href == `string` && typeof n.precedence == `string`) {
                        e = Af(n.href);
                        var a = Dt(i).hoistableStyles
                            , s = a.get(e);
                        if (s || (i = i.ownerDocument || i,
                            s = {
                                type: `stylesheet`,
                                instance: null,
                                count: 0,
                                state: {
                                    loading: 0,
                                    preload: null
                                }
                            },
                            a.set(e, s),
                            (a = i.querySelector(jf(e))) && !a._p && (s.instance = a,
                                s.state.loading = 5),
                            mf.has(e) || (n = {
                                rel: `preload`,
                                as: `style`,
                                href: n.href,
                                crossOrigin: n.crossOrigin,
                                integrity: n.integrity,
                                media: n.media,
                                hrefLang: n.hrefLang,
                                referrerPolicy: n.referrerPolicy
                            },
                                mf.set(e, n),
                                a || Nf(i, e, n, s.state))),
                            t && r === null)
                            throw Error(o(528, ``));
                        return s
                    }
                    if (t && r !== null)
                        throw Error(o(529, ``));
                    return null;
                case `script`:
                    return t = n.async,
                        n = n.src,
                        typeof n == `string` && t && typeof t != `function` && typeof t != `symbol` ? (t = Pf(n),
                            n = Dt(i).hoistableScripts,
                            r = n.get(t),
                            r || (r = {
                                type: `script`,
                                instance: null,
                                count: 0,
                                state: null
                            },
                                n.set(t, r)),
                            r) : {
                            type: `void`,
                            instance: null,
                            count: 0,
                            state: null
                        };
                default:
                    throw Error(o(444, e))
            }
        }
        function Af(e) {
            return `href="` + qt(e) + `"`
        }
        function jf(e) {
            return `link[rel="stylesheet"][` + e + `]`
        }
        function Mf(e) {
            return h({}, e, {
                "data-precedence": e.precedence,
                precedence: null
            })
        }
        function Nf(e, t, n, r) {
            e.querySelector(`link[rel="preload"][as="style"][` + t + `]`) ? r.loading = 1 : (t = e.createElement(`link`),
                r.preload = t,
                t.addEventListener(`load`, function () {
                    return r.loading |= 1
                }),
                t.addEventListener(`error`, function () {
                    return r.loading |= 2
                }),
                Pd(t, `link`, n),
                Ot(t),
                e.head.appendChild(t))
        }
        function Pf(e) {
            return `[src="` + qt(e) + `"]`
        }
        function Ff(e) {
            return `script[async]` + e
        }
        function If(e, t, n) {
            if (t.count++,
                t.instance === null)
                switch (t.type) {
                    case `style`:
                        var r = e.querySelector(`style[data-href~="` + qt(n.href) + `"]`);
                        if (r)
                            return t.instance = r,
                                Ot(r),
                                r;
                        var i = h({}, n, {
                            "data-href": n.href,
                            "data-precedence": n.precedence,
                            href: null,
                            precedence: null
                        });
                        return r = (e.ownerDocument || e).createElement(`style`),
                            Ot(r),
                            Pd(r, `style`, i),
                            Lf(r, n.precedence, e),
                            t.instance = r;
                    case `stylesheet`:
                        i = Af(n.href);
                        var a = e.querySelector(jf(i));
                        if (a)
                            return t.state.loading |= 4,
                                t.instance = a,
                                Ot(a),
                                a;
                        r = Mf(n),
                            (i = mf.get(i)) && Rf(r, i),
                            a = (e.ownerDocument || e).createElement(`link`),
                            Ot(a);
                        var s = a;
                        return s._p = new Promise(function (e, t) {
                            s.onload = e,
                                s.onerror = t
                        }
                        ),
                            Pd(a, `link`, r),
                            t.state.loading |= 4,
                            Lf(a, n.precedence, e),
                            t.instance = a;
                    case `script`:
                        return a = Pf(n.src),
                            (i = e.querySelector(Ff(a))) ? (t.instance = i,
                                Ot(i),
                                i) : (r = n,
                                    (i = mf.get(a)) && (r = h({}, n),
                                        zf(r, i)),
                                    e = e.ownerDocument || e,
                                    i = e.createElement(`script`),
                                    Ot(i),
                                    Pd(i, `link`, r),
                                    e.head.appendChild(i),
                                    t.instance = i);
                    case `void`:
                        return null;
                    default:
                        throw Error(o(443, t.type))
                }
            else
                t.type === `stylesheet` && !(t.state.loading & 4) && (r = t.instance,
                    t.state.loading |= 4,
                    Lf(r, n.precedence, e));
            return t.instance
        }
        function Lf(e, t, n) {
            for (var r = n.querySelectorAll(`link[rel="stylesheet"][data-precedence],style[data-precedence]`), i = r.length ? r[r.length - 1] : null, a = i, o = 0; o < r.length; o++) {
                var s = r[o];
                if (s.dataset.precedence === t)
                    a = s;
                else if (a !== i)
                    break
            }
            a ? a.parentNode.insertBefore(e, a.nextSibling) : (t = n.nodeType === 9 ? n.head : n,
                t.insertBefore(e, t.firstChild))
        }
        function Rf(e, t) {
            e.crossOrigin ??= t.crossOrigin,
                e.referrerPolicy ??= t.referrerPolicy,
                e.title ??= t.title
        }
        function zf(e, t) {
            e.crossOrigin ??= t.crossOrigin,
                e.referrerPolicy ??= t.referrerPolicy,
                e.integrity ??= t.integrity
        }
        var Bf = null;
        function Vf(e, t, n) {
            if (Bf === null) {
                var r = new Map
                    , i = Bf = new Map;
                i.set(n, r)
            } else
                i = Bf,
                    r = i.get(n),
                    r || (r = new Map,
                        i.set(n, r));
            if (r.has(e))
                return r;
            for (r.set(e, null),
                n = n.getElementsByTagName(e),
                i = 0; i < n.length; i++) {
                var a = n[i];
                if (!(a[St] || a[ht] || e === `link` && a.getAttribute(`rel`) === `stylesheet`) && a.namespaceURI !== `http://www.w3.org/2000/svg`) {
                    var o = a.getAttribute(t) || ``;
                    o = e + o;
                    var s = r.get(o);
                    s ? s.push(a) : r.set(o, [a])
                }
            }
            return r
        }
        function Hf(e, t, n) {
            e = e.ownerDocument || e,
                e.head.insertBefore(n, t === `title` ? e.querySelector(`head > title`) : null)
        }
        function Uf(e, t, n) {
            if (n === 1 || t.itemProp != null)
                return !1;
            switch (e) {
                case `meta`:
                case `title`:
                    return !0;
                case `style`:
                    if (typeof t.precedence != `string` || typeof t.href != `string` || t.href === ``)
                        break;
                    return !0;
                case `link`:
                    if (typeof t.rel != `string` || typeof t.href != `string` || t.href === `` || t.onLoad || t.onError)
                        break;
                    switch (t.rel) {
                        case `stylesheet`:
                            return e = t.disabled,
                                typeof t.precedence == `string` && e == null;
                        default:
                            return !0
                    }
                case `script`:
                    if (t.async && typeof t.async != `function` && typeof t.async != `symbol` && !t.onLoad && !t.onError && t.src && typeof t.src == `string`)
                        return !0
            }
            return !1
        }
        function Wf(e) {
            return !(e.type === `stylesheet` && !(e.state.loading & 3))
        }
        function Gf(e, t, n, r) {
            if (n.type === `stylesheet` && (typeof r.media != `string` || !1 !== matchMedia(r.media).matches) && !(n.state.loading & 4)) {
                if (n.instance === null) {
                    var i = Af(r.href)
                        , a = t.querySelector(jf(i));
                    if (a) {
                        t = a._p,
                            typeof t == `object` && t && typeof t.then == `function` && (e.count++,
                                e = Jf.bind(e),
                                t.then(e, e)),
                            n.state.loading |= 4,
                            n.instance = a,
                            Ot(a);
                        return
                    }
                    a = t.ownerDocument || t,
                        r = Mf(r),
                        (i = mf.get(i)) && Rf(r, i),
                        a = a.createElement(`link`),
                        Ot(a);
                    var o = a;
                    o._p = new Promise(function (e, t) {
                        o.onload = e,
                            o.onerror = t
                    }
                    ),
                        Pd(a, `link`, r),
                        n.instance = a
                }
                e.stylesheets === null && (e.stylesheets = new Map),
                    e.stylesheets.set(n, t),
                    (t = n.state.preload) && !(n.state.loading & 3) && (e.count++,
                        n = Jf.bind(e),
                        t.addEventListener(`load`, n),
                        t.addEventListener(`error`, n))
            }
        }
        var Kf = 0;
        function qf(e, t) {
            return e.stylesheets && e.count === 0 && Xf(e, e.stylesheets),
                0 < e.count || 0 < e.imgCount ? function (n) {
                    var r = setTimeout(function () {
                        if (e.stylesheets && Xf(e, e.stylesheets),
                            e.unsuspend) {
                            var t = e.unsuspend;
                            e.unsuspend = null,
                                t()
                        }
                    }, 6e4 + t);
                    0 < e.imgBytes && Kf === 0 && (Kf = 62500 * Ld());
                    var i = setTimeout(function () {
                        if (e.waitingForImages = !1,
                            e.count === 0 && (e.stylesheets && Xf(e, e.stylesheets),
                                e.unsuspend)) {
                            var t = e.unsuspend;
                            e.unsuspend = null,
                                t()
                        }
                    }, (e.imgBytes > Kf ? 50 : 800) + t);
                    return e.unsuspend = n,
                        function () {
                            e.unsuspend = null,
                                clearTimeout(r),
                                clearTimeout(i)
                        }
                }
                    : null
        }
        function Jf() {
            if (this.count--,
                this.count === 0 && (this.imgCount === 0 || !this.waitingForImages)) {
                if (this.stylesheets)
                    Xf(this, this.stylesheets);
                else if (this.unsuspend) {
                    var e = this.unsuspend;
                    this.unsuspend = null,
                        e()
                }
            }
        }
        var Yf = null;
        function Xf(e, t) {
            e.stylesheets = null,
                e.unsuspend !== null && (e.count++,
                    Yf = new Map,
                    t.forEach(Zf, e),
                    Yf = null,
                    Jf.call(e))
        }
        function Zf(e, t) {
            if (!(t.state.loading & 4)) {
                var n = Yf.get(e);
                if (n)
                    var r = n.get(null);
                else {
                    n = new Map,
                        Yf.set(e, n);
                    for (var i = e.querySelectorAll(`link[data-precedence],style[data-precedence]`), a = 0; a < i.length; a++) {
                        var o = i[a];
                        (o.nodeName === `LINK` || o.getAttribute(`media`) !== `not all`) && (n.set(o.dataset.precedence, o),
                            r = o)
                    }
                    r && n.set(null, r)
                }
                i = t.instance,
                    o = i.getAttribute(`data-precedence`),
                    a = n.get(o) || r,
                    a === r && n.set(null, i),
                    n.set(o, i),
                    this.count++,
                    r = Jf.bind(this),
                    i.addEventListener(`load`, r),
                    i.addEventListener(`error`, r),
                    a ? a.parentNode.insertBefore(i, a.nextSibling) : (e = e.nodeType === 9 ? e.head : e,
                        e.insertBefore(i, e.firstChild)),
                    t.state.loading |= 4
            }
        }
        var Qf = {
            $$typeof: C,
            Provider: null,
            Consumer: null,
            _currentValue: de,
            _currentValue2: de,
            _threadCount: 0
        };
        function $f(e, t, n, r, i, a, o, s, c) {
            this.tag = 1,
                this.containerInfo = e,
                this.pingCache = this.current = this.pendingChildren = null,
                this.timeoutHandle = -1,
                this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null,
                this.callbackPriority = 0,
                this.expirationTimes = it(-1),
                this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0,
                this.entanglements = it(0),
                this.hiddenUpdates = it(null),
                this.identifierPrefix = r,
                this.onUncaughtError = i,
                this.onCaughtError = a,
                this.onRecoverableError = o,
                this.pooledCache = null,
                this.pooledCacheLanes = 0,
                this.formState = c,
                this.incompleteTransitions = new Map
        }
        function ep(e, t, n, r, i, a, o, s, c, l, u, d) {
            return e = new $f(e, t, n, o, c, l, u, d, s),
                t = 1,
                !0 === a && (t |= 24),
                a = _i(3, null, null, t),
                e.current = a,
                a.stateNode = e,
                t = ha(),
                t.refCount++,
                e.pooledCache = t,
                t.refCount++,
                a.memoizedState = {
                    element: r,
                    isDehydrated: n,
                    cache: t
                },
                Ja(a),
                e
        }
        function tp(e) {
            return e ? (e = hi,
                e) : hi
        }
        function np(e, t, n, r, i, a) {
            i = tp(i),
                r.context === null ? r.context = i : r.pendingContext = i,
                r = Xa(t),
                r.payload = {
                    element: n
                },
                a = a === void 0 ? null : a,
                a !== null && (r.callback = a),
                n = Za(e, r, t),
                n !== null && (hu(n, e, t),
                    Qa(n, e, t))
        }
        function rp(e, t) {
            if (e = e.memoizedState,
                e !== null && e.dehydrated !== null) {
                var n = e.retryLane;
                e.retryLane = n !== 0 && n < t ? n : t
            }
        }
        function ip(e, t) {
            rp(e, t),
                (e = e.alternate) && rp(e, t)
        }
        function ap(e) {
            if (e.tag === 13 || e.tag === 31) {
                var t = fi(e, 67108864);
                t !== null && hu(t, e, 67108864),
                    ip(e, 67108864)
            }
        }
        function op(e) {
            if (e.tag === 13 || e.tag === 31) {
                var t = pu();
                t = ut(t);
                var n = fi(e, t);
                n !== null && hu(n, e, t),
                    ip(e, t)
            }
        }
        var sp = !0;
        function cp(e, t, n, r) {
            var i = T.T;
            T.T = null;
            var a = E.p;
            try {
                E.p = 2,
                    up(e, t, n, r)
            } finally {
                E.p = a,
                    T.T = i
            }
        }
        function lp(e, t, n, r) {
            var i = T.T;
            T.T = null;
            var a = E.p;
            try {
                E.p = 8,
                    up(e, t, n, r)
            } finally {
                E.p = a,
                    T.T = i
            }
        }
        function up(e, t, n, r) {
            if (sp) {
                var i = dp(r);
                if (i === null)
                    wd(e, t, r, fp, n),
                        Cp(e, r);
                else if (Tp(i, e, t, n, r))
                    r.stopPropagation();
                else if (Cp(e, r),
                    t & 4 && -1 < Sp.indexOf(e)) {
                    for (; i !== null;) {
                        var a = Tt(i);
                        if (a !== null)
                            switch (a.tag) {
                                case 3:
                                    if (a = a.stateNode,
                                        a.current.memoizedState.isDehydrated) {
                                        var o = $e(a.pendingLanes);
                                        if (o !== 0) {
                                            var s = a;
                                            for (s.pendingLanes |= 2,
                                                s.entangledLanes |= 2; o;) {
                                                var c = 1 << 31 - Ke(o);
                                                s.entanglements[1] |= c,
                                                    o &= ~c
                                            }
                                            rd(a),
                                                !(W & 6) && (nu = Pe() + 500,
                                                    id(0, !1))
                                        }
                                    }
                                    break;
                                case 31:
                                case 13:
                                    s = fi(a, 2),
                                        s !== null && hu(s, a, 2),
                                        bu(),
                                        ip(a, 2)
                            }
                        if (a = dp(r),
                            a === null && wd(e, t, r, fp, n),
                            a === i)
                            break;
                        i = a
                    }
                    i !== null && r.stopPropagation()
                } else
                    wd(e, t, r, null, n)
            }
        }
        function dp(e) {
            return e = dn(e),
                pp(e)
        }
        var fp = null;
        function pp(e) {
            if (fp = null,
                e = wt(e),
                e !== null) {
                var t = l(e);
                if (t === null)
                    e = null;
                else {
                    var n = t.tag;
                    if (n === 13) {
                        if (e = u(t),
                            e !== null)
                            return e;
                        e = null
                    } else if (n === 31) {
                        if (e = d(t),
                            e !== null)
                            return e;
                        e = null
                    } else if (n === 3) {
                        if (t.stateNode.current.memoizedState.isDehydrated)
                            return t.tag === 3 ? t.stateNode.containerInfo : null;
                        e = null
                    } else
                        t !== e && (e = null)
                }
            }
            return fp = e,
                null
        }
        function mp(e) {
            switch (e) {
                case `beforetoggle`:
                case `cancel`:
                case `click`:
                case `close`:
                case `contextmenu`:
                case `copy`:
                case `cut`:
                case `auxclick`:
                case `dblclick`:
                case `dragend`:
                case `dragstart`:
                case `drop`:
                case `focusin`:
                case `focusout`:
                case `input`:
                case `invalid`:
                case `keydown`:
                case `keypress`:
                case `keyup`:
                case `mousedown`:
                case `mouseup`:
                case `paste`:
                case `pause`:
                case `play`:
                case `pointercancel`:
                case `pointerdown`:
                case `pointerup`:
                case `ratechange`:
                case `reset`:
                case `resize`:
                case `seeked`:
                case `submit`:
                case `toggle`:
                case `touchcancel`:
                case `touchend`:
                case `touchstart`:
                case `volumechange`:
                case `change`:
                case `selectionchange`:
                case `textInput`:
                case `compositionstart`:
                case `compositionend`:
                case `compositionupdate`:
                case `beforeblur`:
                case `afterblur`:
                case `beforeinput`:
                case `blur`:
                case `fullscreenchange`:
                case `focus`:
                case `hashchange`:
                case `popstate`:
                case `select`:
                case `selectstart`:
                    return 2;
                case `drag`:
                case `dragenter`:
                case `dragexit`:
                case `dragleave`:
                case `dragover`:
                case `mousemove`:
                case `mouseout`:
                case `mouseover`:
                case `pointermove`:
                case `pointerout`:
                case `pointerover`:
                case `scroll`:
                case `touchmove`:
                case `wheel`:
                case `mouseenter`:
                case `mouseleave`:
                case `pointerenter`:
                case `pointerleave`:
                    return 8;
                case `message`:
                    switch (Fe()) {
                        case Ie:
                            return 2;
                        case Le:
                            return 8;
                        case Re:
                        case ze:
                            return 32;
                        case Be:
                            return 268435456;
                        default:
                            return 32
                    }
                default:
                    return 32
            }
        }
        var hp = !1
            , gp = null
            , _p = null
            , vp = null
            , yp = new Map
            , bp = new Map
            , xp = []
            , Sp = `mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset`.split(` `);
        function Cp(e, t) {
            switch (e) {
                case `focusin`:
                case `focusout`:
                    gp = null;
                    break;
                case `dragenter`:
                case `dragleave`:
                    _p = null;
                    break;
                case `mouseover`:
                case `mouseout`:
                    vp = null;
                    break;
                case `pointerover`:
                case `pointerout`:
                    yp.delete(t.pointerId);
                    break;
                case `gotpointercapture`:
                case `lostpointercapture`:
                    bp.delete(t.pointerId)
            }
        }
        function wp(e, t, n, r, i, a) {
            return e === null || e.nativeEvent !== a ? (e = {
                blockedOn: t,
                domEventName: n,
                eventSystemFlags: r,
                nativeEvent: a,
                targetContainers: [i]
            },
                t !== null && (t = Tt(t),
                    t !== null && ap(t)),
                e) : (e.eventSystemFlags |= r,
                    t = e.targetContainers,
                    i !== null && t.indexOf(i) === -1 && t.push(i),
                    e)
        }
        function Tp(e, t, n, r, i) {
            switch (t) {
                case `focusin`:
                    return gp = wp(gp, e, t, n, r, i),
                        !0;
                case `dragenter`:
                    return _p = wp(_p, e, t, n, r, i),
                        !0;
                case `mouseover`:
                    return vp = wp(vp, e, t, n, r, i),
                        !0;
                case `pointerover`:
                    var a = i.pointerId;
                    return yp.set(a, wp(yp.get(a) || null, e, t, n, r, i)),
                        !0;
                case `gotpointercapture`:
                    return a = i.pointerId,
                        bp.set(a, wp(bp.get(a) || null, e, t, n, r, i)),
                        !0
            }
            return !1
        }
        function Ep(e) {
            var t = wt(e.target);
            if (t !== null) {
                var n = l(t);
                if (n !== null) {
                    if (t = n.tag,
                        t === 13) {
                        if (t = u(n),
                            t !== null) {
                            e.blockedOn = t,
                                pt(e.priority, function () {
                                    op(n)
                                });
                            return
                        }
                    } else if (t === 31) {
                        if (t = d(n),
                            t !== null) {
                            e.blockedOn = t,
                                pt(e.priority, function () {
                                    op(n)
                                });
                            return
                        }
                    } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
                        e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
                        return
                    }
                }
            }
            e.blockedOn = null
        }
        function Dp(e) {
            if (e.blockedOn !== null)
                return !1;
            for (var t = e.targetContainers; 0 < t.length;) {
                var n = dp(e.nativeEvent);
                if (n === null) {
                    n = e.nativeEvent;
                    var r = new n.constructor(n.type, n);
                    un = r,
                        n.target.dispatchEvent(r),
                        un = null
                } else
                    return t = Tt(n),
                        t !== null && ap(t),
                        e.blockedOn = n,
                        !1;
                t.shift()
            }
            return !0
        }
        function Op(e, t, n) {
            Dp(e) && n.delete(t)
        }
        function kp() {
            hp = !1,
                gp !== null && Dp(gp) && (gp = null),
                _p !== null && Dp(_p) && (_p = null),
                vp !== null && Dp(vp) && (vp = null),
                yp.forEach(Op),
                bp.forEach(Op)
        }
        function Ap(e, n) {
            e.blockedOn === n && (e.blockedOn = null,
                hp || (hp = !0,
                    t.unstable_scheduleCallback(t.unstable_NormalPriority, kp)))
        }
        var jp = null;
        function Mp(e) {
            jp !== e && (jp = e,
                t.unstable_scheduleCallback(t.unstable_NormalPriority, function () {
                    jp === e && (jp = null);
                    for (var t = 0; t < e.length; t += 3) {
                        var n = e[t]
                            , r = e[t + 1]
                            , i = e[t + 2];
                        if (typeof r != `function`) {
                            if (pp(r || n) === null)
                                continue;
                            break
                        }
                        var a = Tt(n);
                        a !== null && (e.splice(t, 3),
                            t -= 3,
                            ks(a, {
                                pending: !0,
                                data: i,
                                method: n.method,
                                action: r
                            }, r, i))
                    }
                }))
        }
        function Np(e) {
            function t(t) {
                return Ap(t, e)
            }
            gp !== null && Ap(gp, e),
                _p !== null && Ap(_p, e),
                vp !== null && Ap(vp, e),
                yp.forEach(t),
                bp.forEach(t);
            for (var n = 0; n < xp.length; n++) {
                var r = xp[n];
                r.blockedOn === e && (r.blockedOn = null)
            }
            for (; 0 < xp.length && (n = xp[0],
                n.blockedOn === null);)
                Ep(n),
                    n.blockedOn === null && xp.shift();
            if (n = (e.ownerDocument || e).$$reactFormReplay,
                n != null)
                for (r = 0; r < n.length; r += 3) {
                    var i = n[r]
                        , a = n[r + 1]
                        , o = i[gt] || null;
                    if (typeof a == `function`)
                        o || Mp(n);
                    else if (o) {
                        var s = null;
                        if (a && a.hasAttribute(`formAction`)) {
                            if (i = a,
                                o = a[gt] || null)
                                s = o.formAction;
                            else if (pp(i) !== null)
                                continue
                        } else
                            s = o.action;
                        typeof s == `function` ? n[r + 1] = s : (n.splice(r, 3),
                            r -= 3),
                            Mp(n)
                    }
                }
        }
        function Pp() {
            function e(e) {
                e.canIntercept && e.info === `react-transition` && e.intercept({
                    handler: function () {
                        return new Promise(function (e) {
                            return i = e
                        }
                        )
                    },
                    focusReset: `manual`,
                    scroll: `manual`
                })
            }
            function t() {
                i !== null && (i(),
                    i = null),
                    r || setTimeout(n, 20)
            }
            function n() {
                if (!r && !navigation.transition) {
                    var e = navigation.currentEntry;
                    e && e.url != null && navigation.navigate(e.url, {
                        state: e.getState(),
                        info: `react-transition`,
                        history: `replace`
                    })
                }
            }
            if (typeof navigation == `object`) {
                var r = !1
                    , i = null;
                return navigation.addEventListener(`navigate`, e),
                    navigation.addEventListener(`navigatesuccess`, t),
                    navigation.addEventListener(`navigateerror`, t),
                    setTimeout(n, 100),
                    function () {
                        r = !0,
                            navigation.removeEventListener(`navigate`, e),
                            navigation.removeEventListener(`navigatesuccess`, t),
                            navigation.removeEventListener(`navigateerror`, t),
                            i !== null && (i(),
                                i = null)
                    }
            }
        }
        function Fp(e) {
            this._internalRoot = e
        }
        Ip.prototype.render = Fp.prototype.render = function (e) {
            var t = this._internalRoot;
            if (t === null)
                throw Error(o(409));
            var n = t.current;
            np(n, pu(), e, t, null, null)
        }
            ,
            Ip.prototype.unmount = Fp.prototype.unmount = function () {
                var e = this._internalRoot;
                if (e !== null) {
                    this._internalRoot = null;
                    var t = e.containerInfo;
                    np(e.current, 2, null, e, null, null),
                        bu(),
                        t[_t] = null
                }
            }
            ;
        function Ip(e) {
            this._internalRoot = e
        }
        Ip.prototype.unstable_scheduleHydration = function (e) {
            if (e) {
                var t = ft();
                e = {
                    blockedOn: null,
                    target: e,
                    priority: t
                };
                for (var n = 0; n < xp.length && t !== 0 && t < xp[n].priority; n++)
                    ;
                xp.splice(n, 0, e),
                    n === 0 && Ep(e)
            }
        }
            ;
        var Lp = n.version;
        if (Lp !== `19.2.8`)
            throw Error(o(527, Lp, `19.2.8`));
        E.findDOMNode = function (e) {
            var t = e._reactInternals;
            if (t === void 0)
                throw typeof e.render == `function` ? Error(o(188)) : (e = Object.keys(e).join(`,`),
                    Error(o(268, e)));
            return e = p(t),
                e = e === null ? null : m(e),
                e = e === null ? null : e.stateNode,
                e
        }
            ;
        var Rp = {
            bundleType: 0,
            version: `19.2.8`,
            rendererPackageName: `react-dom`,
            currentDispatcherRef: T,
            reconcilerVersion: `19.2.8`
        };
        if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < `u`) {
            var zp = __REACT_DEVTOOLS_GLOBAL_HOOK__;
            if (!zp.isDisabled && zp.supportsFiber)
                try {
                    Ue = zp.inject(Rp),
                        We = zp
                } catch { }
        }
        e.createRoot = function (e, t) {
            if (!c(e))
                throw Error(o(299));
            var n = !1
                , r = ``
                , i = Qs
                , a = $s
                , s = ec;
            return t != null && (!0 === t.unstable_strictMode && (n = !0),
                t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
                t.onUncaughtError !== void 0 && (i = t.onUncaughtError),
                t.onCaughtError !== void 0 && (a = t.onCaughtError),
                t.onRecoverableError !== void 0 && (s = t.onRecoverableError)),
                t = ep(e, 1, !1, null, null, n, r, null, i, a, s, Pp),
                e[_t] = t.current,
                Sd(e),
                new Fp(t)
        }
    }
    ))
    , l = t(((e, t) => {
        function n() {
            if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > `u` || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != `function`))
                try {
                    __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)
                } catch (e) {
                    console.error(e)
                }
        }
        n(),
            t.exports = c()
    }
    ))
    , u = e(a(), 1)
    , d = e(l(), 1)
    , f = {
        GitHub: e => u.createElement(`svg`, {
            viewBox: `0 0 24 24`,
            fill: `currentColor`,
            width: 24,
            height: 24,
            ...e
        }, u.createElement(`path`, {
            d: `M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z`
        })),
        LinkedIn: e => u.createElement(`svg`, {
            viewBox: `0 0 24 24`,
            fill: `currentColor`,
            width: 24,
            height: 24,
            ...e
        }, u.createElement(`path`, {
            d: `M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.69 1.69 0 1 0 0-3.38 1.69 1.69 0 0 0 0 3.38m1.39 9.74v-8.37H5.07v8.37h2.78z`
        })),
        Instagram: e => u.createElement(`svg`, {
            viewBox: `0 0 24 24`,
            fill: `currentColor`,
            width: 24,
            height: 24,
            ...e
        }, u.createElement(`path`, {
            d: `M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z`
        }))
    }
    , p = {
        name: `Muhammad Daffa Husen`,
        shortName: `Daffa`,
        roles: [`Computer Engineering Graduate`, `Front-End Developer`, `UI/UX Designer`, `Machine Learning Enthusiast`],
        description: `Computer Engineering graduate passionate about building thoughtful digital experiences through web development, UI/UX design, machine learning, and emerging technologies.`,
        email: `daffahusen10@gmail.com`,
        location: `Banda Aceh, Indonesia`,
        heroImage: `/images/profile-hero.jpg`,
        cv: `/cv/CV_Muhammad_Daffa_Husen.pdf`,
        about: {
            intro: `I create digital experiences.`,
            description: `I am Muhammad Daffa Husen, a Computer Engineering graduate from Universitas Syiah Kuala with interests in front-end development, UI/UX design, machine learning, artificial intelligence, IoT, and embedded systems. I enjoy transforming ideas into functional and visually engaging digital products while continuously exploring new technologies and better ways to solve real-world problems.`,
            location: `Banda Aceh, Indonesia`,
            role: `Computer Engineering Graduate · Front-End Developer · UI/UX Designer · Machine Learning Enthusiast`
        }
    }
    , m = [{
        name: `GitHub`,
        url: `https://github.com/dappahsn`,
        icon: `GitHub`
    }, {
        name: `LinkedIn`,
        url: `https://www.linkedin.com/in/muhammaddaffahusen/`,
        icon: `LinkedIn`
    }, {
        name: `Instagram`,
        url: `https://www.instagram.com/dappahsn`,
        icon: `Instagram`
    }]
    , h = [{
        id: `exp-aslab-embedded`,
        role: `Teaching Assistant - Embedded Systems Course`,
        company: `Universitas Syiah Kuala`,
        location: `Banda Aceh, Indonesia`,
        period: `Aug 2025 - Dec 2025`,
        type: `Part-time`,
        logo: `/images/logos/usk.svg`,
        description: `Assisted students in understanding embedded systems through microcontroller-based projects, lab sessions, and hands-on work with development boards, sensors, and actuators. Evaluated lab assignments and collaborated with the course instructor to prepare practical materials while strengthening technical and mentoring skills.`,
        responsibilities: [],
        technologies: [`Microcontroller`, `Sensors`, `Actuators`, `C/C++`],
        images: []
    }, {
        id: `exp-aslab-rpl`,
        role: `Teaching Assistant - Software Engineering Course`,
        company: `Universitas Syiah Kuala`,
        location: `Banda Aceh, Indonesia`,
        period: `Jan 2025 - Jun 2025`,
        type: `Part-time`,
        logo: `/images/logos/usk.svg`,
        description: `Assisted students in understanding software engineering concepts through project guidance, practical exercises, Q&A sessions, and assignment evaluation. Collaborated with the course instructor to prepare learning materials while strengthening mentoring, communication, and technical skills.`,
        responsibilities: [],
        technologies: [`Software Engineering`, `UML`, `Agile`, `Git`],
        images: []
    }, {
        id: `exp-pln-intern`,
        role: `Intern - Communication Division`,
        company: `PT PLN (Persero) UID Aceh`,
        location: `Banda Aceh, Indonesia`,
        period: `Dec 2024 — Jan 2025`,
        type: `Internship`,
        logo: `/images/logos/pln.png`,
        description: `Assisted in producing the PodcaStroom podcast, contributing to content and technical setup while reaching around 200 monthly views and 100 new subscribers. Developed the Desa Berdaya PLN UID Aceh website and documented PLN events by capturing and editing 500+ photos and videos for digital archives and publication.`,
        responsibilities: [`Assisted in producing the PodcaStroom podcast with technical and content preparation.`, `Developed the responsive Desa Berdaya PLN UID Aceh website.`, `Documented PLN events by capturing and editing 500+ photos and videos for archives and media publication.`],
        technologies: [`Web Development`, `Photography`, `Videography`, `Media Production`],
        images: [{
            src: `/About/Experience/PLN/1.JPG`,
            caption: `Producing PodcaStroom`
        }, {
            src: `/About/Experience/PLN/2.jpg`,
            caption: `Producing Website Desa Berdaya`
        }, {
            src: `/About/Experience/PLN/3.jpg`,
            caption: `Documenting PLN Events`
        }]
    }, {
        id: `exp-LO-PON`,
        role: `Liaison Officer`,
        company: `Pekan Olahraga Nasional (PON) XXI Aceh-Sumatera Utara`,
        location: `Banda Aceh, Indonesia`,
        period: `Sep 2024 — Oct 2024`,
        type: `Seasonal`,
        logo: `/images/logos/pon.png`,
        description: `Acted as a primary point of contact, facilitating communication between athletes, officials, and the organizing committee while coordinating logistics, schedules, and participant needs. Contributed to the success of PON XXI by ensuring effective communication and providing high-quality support to all stakeholders.`,
        responsibilities: [`Primary point of contact for athletes, team officials, and the organizing committee.`, `Coordinated transport logistics, venue schedules, and accommodation assistance.`, `Ensured top-tier communication flow and rapid response to event challenges.`],
        technologies: [`Event Management`, `Public Relations`, `Logistics Planning`],
        images: [{
            src: `/About/Experience/PON/1.jpg`,
            caption: `Opening Ceremony`
        }, {
            src: `/About/Experience/PON/2.jpg`,
            caption: `Certification`
        }]
    }, {
        id: `exp-BINER`,
        role: `Chairperson - Bina Islami Aneuk Komputer (BINER 7.0)`,
        company: `Himpunan Mahasiswa Teknik Informatika Universitas Syiah Kuala`,
        location: `Banda Aceh, Indonesia`,
        period: `Oct 2023`,
        type: `Seasonal`,
        logo: `/images/logos/HIMATEKKOM.png`,
        description: `Successfully led BINER 7.0 under the theme “How to Reach Society 5.0 with Islamic Values,” overseeing planning, budgeting, team coordination, and event execution. Promoted the integration of Society 5.0 concepts with Islamic values throughout the event.`,
        responsibilities: [`Led the entire organizing committee of BINER 7.0.`, `Managed event scheduling, budgeting, resource allocation, and guest speaker coordination.`, `Delivered a successful event bridging technology with community values.`],
        technologies: [`Leadership`, `Event Management`, `Budgeting`, `Public Speaking`],
        images: [{
            src: `/About/Experience/BINER/1.jpg`,
            caption: `Welcoming Ceremony`
        }, {
            src: `/About/Experience/BINER/2.jpg`,
            caption: `During event`
        }, {
            src: `/About/Experience/BINER/3.jpg`,
            caption: `Commitee member`
        }]
    }, {
        id: `exp-COSITE`,
        role: `Commitee Member - IC-COSITE 2023`,
        company: `Universitas Syiah Kuala / IEEE Indonesia Section`,
        location: `Banda Aceh, Indonesia`,
        period: `Aug 2023`,
        type: `Seasonal`,
        logo: `/images/logos/ieee.svg`,
        description: `The IEEE International Conference on Computer Science, Information Technology, and Electrical Engineering (IC-COSITE 2023) is an annual conference organized by the IEEE (Institute of Electrical and Electronics Engineers) Indonesia Section. In this conference, I was responsible for assisting in the smooth running of the conference, including event organization, speaker coordination, and participant assistance. In addition, I was also responsible for documenting the event by capturing and editing photos and videos.`,
        responsibilities: [`Assisted international speakers and conference attendees.`, `Handled audiovisual setups and conference documentation.`, `Contributed to the publication and media archive of IEEE IC-COSITE 2023.`],
        technologies: [`IEEE Conference`, `Event Coordination`, `Documentation`],
        images: [{
            src: `/About/Experience/COSITE/1.jpg`,
            caption: `Opening ceremony`
        }, {
            src: `/About/Experience/COSITE/2.jpg`,
            caption: `During event`
        }, {
            src: `/About/Experience/COSITE/3.jpg`,
            caption: `Commitee member`
        }]
    }]
    , g = [{
        id: `edu-usk`,
        degree: `Bachelor of Computer Engineering`,
        institution: `Universitas Syiah Kuala`,
        location: `Banda Aceh, Indonesia`,
        period: `2022 — 2026`,
        logo: `/images/logos/usk.svg`,
        description: `Graduated in Computer Engineering with strong interests in software development, artificial intelligence, UI/UX design, machine learning, IoT, and embedded systems.`,
        details: [`Studied software engineering, artificial intelligence, machine learning, computer networks, IoT, and embedded systems.`, `Developed various academic projects involving web development, microcontrollers, sensors, and intelligent systems.`, `Gained experience in research, system development, data analysis, and user-centered interface design.`, `Completed a final project focused on sentiment analysis using Machine Learning and Transformer-based models.`],
        images: [{
            src: `/About/Education/USK/1.jpg`,
            caption: `Universitas Syiah Kuala Campus`
        }, {
            src: `/About/Education/USK/2.jpeg`,
            caption: `Final Thesis Defense`
        }, {
            src: `/About/Education/USK/3.jpeg`,
            caption: `During my final year`
        }]
    }, {
        id: `edu-sma`,
        degree: `Science (Mathematics and Natural Sciences)`,
        institution: `SMA Negeri 3 Banda Aceh`,
        location: `Banda Aceh, Indonesia`,
        period: `2019 — 2022`,
        logo: `/images/logos/sman3.png`,
        description: `Completed senior high school education while developing an interest in technology, science, and digital creativity.`,
        details: [`Successfully curated and created captivating content for the KPS (Knowledge Posters in Smantig) project, resulting in 20% increase in user engagement and 600 new followers over a month.`, `Successfully spearheaded the conceptualization and execution of visually appealing designs for school events, resulting in a 30% increase in event attendance.`, `Successfully developed and implemented innovative content formats, such as video tutorials and infographics.`, `Successfully produced captivating graphics and layouts for school publications, resulting in 10% increase in readership.`],
        images: [{
            src: `/About/Education/SMA/2.jpg`,
            caption: `SMA Negeri 3 Banda Aceh`
        }, {
            src: `/About/Education/SMA/3.jpeg`,
            caption: `Graduation ceremony`
        }]
    }]
    , _ = [{
        id: `org-himatekkom-ketum-psdm`,
        role: `Head of the Human Resources Development Division`,
        organization: `Himpunan Mahasiswa Teknik Komputer USK (HIMATEKKOM)`,
        location: `Universitas Syiah Kuala`,
        period: `Mar 2025 — Dec 2025`,
        logo: `/images/logos/HIMATEKKOM.png`,
        description: `Led human resource development initiatives by strengthening relationships among members, alumni, and external partners, while managing internal programs that increased member participation by 40%. Also coordinated large-scale activities such as Computer Outbonding to enhance teamwork, leadership, and organizational engagement.`,
        responsibilities: [],
        images: []
    }, {
        id: `org-bem-humas`,
        role: `Member of the Student Relations Division`,
        organization: `Badan Eksekutif Mahasiswa Fakultas Teknik (BEM-FT)`,
        location: `Universitas Syiah Kuala`,
        period: `Mar 2024 — Dec 2024`,
        logo: `/images/logos/BEM-FT.png`,
        description: `Developed strong communication, leadership, teamwork, problem-solving, negotiation, and event management skills while building relationships with 10 student organizations within the faculty and coordinating collaborative events.`,
        responsibilities: [],
        images: []
    }, {
        id: `org-himatekkom-waketum-humas`,
        role: `Vice Chair of the Student Relations`,
        organization: `Himpunan Mahasiswa Teknik Komputer USK (HIMATEKKOM)`,
        location: `Universitas Syiah Kuala`,
        period: `Mar 2024 — Dec 2024`,
        logo: `/images/logos/HIMATEKKOM.png`,
        description: `Built strong relationships with other student associations, alumni, and technology companies while coordinating large-scale programs such as Computer Outbonding. Successfully managed events that increased student participation in association activities by 40%.`,
        responsibilities: [],
        images: []
    }, {
        id: `org-himatekkom-kesma`,
        role: `Member of Student Welfare Division.`,
        organization: `Himpunan Mahasiswa Teknik Komputer USK (HIMATEKKOM)`,
        location: `Universitas Syiah Kuala`,
        period: `Mar 2023 — Feb 2024`,
        logo: `/images/logos/HIMATEKKOM.png`,
        description: `Supported student welfare by promoting environmental responsibility through a campus cleanliness duty system and assisting students facing financial difficulties by providing information on scholarships, emergency aid, and installment payment options.`,
        responsibilities: [],
        images: []
    }, {
        id: `org-OSIS`,
        role: `Head of Technology Information and Communication Division`,
        organization: `MPK-OSIS SMA Negeri 3 Banda Aceh`,
        location: `SMA Negeri 3 Banda Aceh`,
        period: `Sep 2020 — Sep 2021`,
        logo: `/images/logos/sman3.png`,
        description: `Successfully created engaging visual content for KPS and various school activities, including social media posts, event designs, video tutorials, infographics, and school publications.`,
        responsibilities: [],
        images: [{
            src: `/About/Organization/OSIS/1.jpeg`,
            caption: `Inauguration Ceremony`
        }, {
            src: `/About/Organization/OSIS/2.jpeg`,
            caption: `Knowledge Posters in Smantig`
        }, {
            src: `/About/Organization/OSIS/3.jpeg`,
            caption: `MPK-OSIS Smantig’s Instagram`
        }]
    }]
    , v = [{
        id: `cert-1`,
        name: `UI/UX Design Masterclass`,
        issuer: `Interaction Design Foundation`,
        date: `2024`,
        credentialId: `IDF-882910`,
        credentialUrl: ``,
        description: `Advanced user research, wireframing, interactive prototyping, and design systems.`,
        images: [{
            src: `/About/Experience/PON/2.jpg`,
            caption: `Certificate preview`
        }]
    }, {
        id: `cert-2`,
        name: `Machine Learning & NLP Specialization`,
        issuer: `DeepLearning.AI & Coursera`,
        date: `2024`,
        credentialId: `DLAI-39182`,
        credentialUrl: ``,
        description: `Transformer models, IndoBERT, IndoBERTweet fine-tuning, and sentiment analysis pipelines.`,
        images: []
    }, {
        id: `cert-3`,
        name: `Frontend Web Development (React & Vite)`,
        issuer: `Dicoding Indonesia`,
        date: `2023`,
        credentialId: `DICODING-FE-772`,
        credentialUrl: ``,
        description: `Component architecture, responsive layouts, Tailwind CSS, and state management.`,
        images: []
    }]
    , y = [`All`, `UI/UX Design`, `Web`, `Machine Learning`, `IoT`, `Other`]
    , b = [{
        id: 1,
        slug: `roblox-sentiment-analysis`,
        title: `Sentiment Analysis of Roblox Reviews`,
        category: `Machine Learning`,
        year: `2026`,
        description: `Sentiment analysis research on 40,298 Indonesian Roblox reviews from the Google Play Store, benchmarking SVM (TF-IDF), IndoBERT, and IndoBERTweet. IndoBERT achieved top performance with 88.91% accuracy and an 81.78% macro F1-score.`,
        overview: `This research focuses on developing an Indonesian Roblox review dataset and comparing the sentiment classification efficacy of Support Vector Machine (SVM), IndoBERT, and IndoBERTweet across negative, neutral, and positive classes. A total of 50,000 raw reviews were extracted from the Google Play Store using web scraping. Following thorough data cleaning and deduplication, a curated dataset of 40,298 reviews (19,488 Negative, 2,471 Neutral, and 18,339 Positive) was established with an 80:10:10 train-validation-test split.`,
        problem: `Indonesian gaming community reviews feature highly informal slang, colloquial expressions, and linguistic nuances. Additionally, severe class imbalance in neutral reviews (representing only 6.13% of the dataset) introduced high semantic ambiguity, creating major classification bottlenecks for standard NLP architectures.`,
        solution: `Engineered an end-to-end NLP research pipeline: automated Google Play Store web scraping, text preprocessing & automated sentiment pseudo-labeling with IndoBERT, 80:10:10 data partitioning, TF-IDF feature extraction for SVM, and fine-tuning contextual Transformer models (IndoBERT and IndoBERTweet) with hyperparameter optimization (learning rate 10⁻⁶, batch size 64, 10 epochs).`,
        features: [`Final Dataset of 40,298 Reviews: 19,488 Negative (48.36%), 2,471 Neutral (6.13%), and 18,339 Positive (45.51%) curated from 50,000 scraped reviews`, `Top-Performing IndoBERT Model: Achieved 88.91% Accuracy, 79.09% Macro Precision, 86.79% Macro Recall, and an 81.78% Macro F1-Score`, `IndoBERTweet Evaluation: Reached 86.63% Accuracy, 76.02% Macro Precision, 83.44% Macro Recall, and a 78.42% Macro F1-Score`, `Baseline SVM Benchmark (RBF Kernel, C=1, gamma=scale, TF-IDF): Attained 84.07% Accuracy, 74.70% Macro Precision, 72.52% Macro Recall, and a 73.49% Macro F1-Score`, `Contextual Transformer Superiority: Empirically demonstrated that pre-trained Transformer architectures significantly outperform classical ML models in capturing contextual semantics from informal Indonesian text`, `Imbalance & Ambiguity Analysis: In-depth evaluation of classification challenges on neutral sentiment classes due to data sparsity and ambiguous user expressions`],
        role: `Machine Learning Researcher`,
        image: `/projects/roblox/roblox-sentiment-display.jpg`,
        images: [{
            src: `/projects/roblox/roblox-sentiment-display.jpg`,
            caption: `Sentiment Analysis Dashboard & IndoBERT NLP Architecture`
        }, {
            src: `/projects/roblox/model-performance-comparison.png`,
            caption: `Model Performance Comparison Table (SVM vs. IndoBERT vs. IndoBERTweet)`
        }, {
            src: `/projects/roblox/sentiment-distribution.png`,
            caption: `Sentiment Class Distribution (Negative: 19,488, Neutral: 2,471, Positive: 18,339)`
        }, {
            src: `/projects/roblox/research-flowchart.png`,
            caption: `NLP Research Methodology & Model Convergence Flowchart`
        }],
        technologies: [`Python`, `IndoBERT`, `IndoBERTweet`, `SVM`, `Transformers`, `TF-IDF`, `NLP`, `Scikit-learn`, `Web Scraping`, `Google Colab`],
        links: {
            github: `https://github.com/dappahsn/Sentiment-Analysis-of-Roblox-Reviews`,
            demo: ``
        },
        featured: !0
    }, {
        id: 2,
        slug: `cash-in-point-of-sale`,
        title: `Cash.in - Point of Sale (POS) & Business Management`,
        category: `Web`,
        year: `2026`,
        description: `A modern Point of Sale (POS) and business management web application built with Next.js 16 (App Router), React 19, TypeScript, and Tailwind CSS v4. Features rapid barcode/SKU checkout, 1:1 image auto-cropping, QRIS payments, thermal receipt printing, real-time stock control, multi-role RBAC, and Excel reports.`,
        overview: `Cash.in is a high-performance digital Point of Sale (POS) and store management platform designed for micro, small, and medium enterprises (UMKM), F&B outlets, and retail stores. Built with Next.js 16 App Router and client-side reactive architectures, Cash.in delivers sub-second checkout speeds on desktop, tablet, and mobile browsers without requiring expensive server database overhead. It provides multi-role authentication (Owner & Cashier), dynamic SKU auto-generation, QRIS integration with store NMID, thermal receipt printing (58mm/80mm), operational expense tracking, and comprehensive profit & loss analytics.`,
        problem: `Traditional cash registers and enterprise POS systems are often slow, costly with high recurring subscription fees, difficult to configure on standard tablets/smartphones, and lack intuitive inventory alerts, staff role restrictions, and instant digital QRIS payment integration for growing UMKM businesses.`,
        solution: `Engineered a lightweight, zero-latency POS web application leveraging Next.js 16, TypeScript, Zustand state management, and an optimized LocalStorage data access engine. Built an ergonomic POS terminal with instant category filtering, automatic VAT (11%) & discount calculation, browser canvas 1:1 image compression (~15–25 KB), visual stock status indicators (Safe, Low, Out of Stock), Role-Based Access Control (RBAC), and Recharts financial reporting with SheetJS Excel export.`,
        features: [`Ergonomic Point of Sale (POS) Terminal: Instant product search by name or barcode/SKU, category filtering, 1:1 product catalog, and smart cart drawer with auto VAT (11%) & bill discounts`, `Flexible Payment & QRIS Integration: Supports cash payments with auto Rupiah change calculation and native store QRIS scanning with verified merchant name and NMID`, `Thermal Receipt Printing: Integrated receipt generation for 58mm and 80mm thermal printers with custom business logos, active cashier attribution, and personalized footer notes`, `Automated 1:1 Image Cropping & SKU Engine: In-browser canvas auto-cropping and compression (~15-25 KB) paired with smart category-based SKU generators (MIN-xxxx, MAK-xxxx, SNA-xxxx)`, `Real-Time Inventory & Stock Warning: Dynamic stock tracking with color-coded status badges (Stok Aman, Stok Menipis, Habis) and complete stock mutation adjustment logs`, `Multi-Role Access Control (RBAC): Dedicated permissions for Store Owner (full financial analytics, staff management, Excel export) and Cashiers (POS checkout & stock lookup with route guards)`, `Financial Analytics & Profit/Loss Reports: Interactive Recharts visualizations tracking 7-day revenue trends, payment method proportions, staff sales performance, and P&L metrics`, `Data Portability & Bilingual Support: One-click Excel (XLSX) and CSV reporting via SheetJS with full bilingual localization in Bahasa Indonesia (default) and English`],
        role: `Full-Stack Web Developer & UI/UX Designer`,
        image: `/projects/cashin/cashin-mockup.jpg`,
        images: [{
            src: `/projects/cashin/cashin-mockup.jpg`,
            caption: `Cash.in Desktop Dashboard & Tablet POS Terminal Showcase`
        }, {
            src: `/projects/cashin/cashin-pos.png`,
            caption: `Point of Sale (POS) Interface - 1:1 Product Grid, Category Filters & Real-Time Cart Checkout`
        }, {
            src: `/projects/cashin/cashin-dashboard.png`,
            caption: `Main Store Dashboard - 7-Day Revenue Trend, Top Selling Products & Low Stock Warnings`
        }, {
            src: `/projects/cashin/cashin-analytics.png`,
            caption: `Reports & Analytics - Gross/Net Revenue, Payment Method Donut Chart & Cashier Staff Performance`
        }, {
            src: `/projects/cashin/cashin-logo.png`,
            caption: `Cash.in Official Logo & Visual Brand Identity`
        }],
        technologies: [`Next.js 16`, `React 19`, `TypeScript`, `Tailwind CSS`, `Zustand`, `Recharts`, `SheetJS (XLSX)`, `Lucide React`, `RBAC`, `Canvas API`, `i18n`],
        links: {
            github: `https://github.com/dappahsn/Cash.in`,
            demo: `https://daffahusen-cash-in.vercel.app/`
        },
        featured: !0
    }, {
        id: 3,
        slug: `catat-in-personal-finance`,
        title: `catat.in - Personal Finance & Cashflow Tracker`,
        category: `Web`,
        year: `2026`,
        description: `A modern, mobile-first personal finance tracker and Progressive Web App (PWA) built with React 19, TypeScript, Tailwind CSS v4, and Supabase. Features multi-account balance management, automated Rupiah formatting, Recharts cashflow analytics, Google OAuth, and encrypted cloud sync.`,
        overview: `catat.in is a responsive, high-performance personal finance tracking web application and installable Progressive Web App (PWA). Designed with a mobile-first philosophy, elegant Charcoal Dark (#0d0f12) and Emerald Green visual aesthetics, and zero layout shift, it empowers users to record daily income, expenses, and inter-account transfers, manage multi-source balances (Bank, E-Wallet, Cash), and visualize financial health through interactive Recharts analytics.`,
        problem: `Individuals managing funds across multiple bank accounts, e-wallets, and cash often struggle with fragmented records, inaccurate balance oversight, and tedious manual accounting. Many existing finance tools are either overly complex with unnecessary enterprise features or lack smooth mobile responsiveness and real-time multi-account synchronization.`,
        solution: `Engineered a lightweight, privacy-focused PWA powered by Supabase PostgreSQL with strict Row Level Security (RLS) and Google OAuth authentication. Developed a frictionless transaction recording workflow with dynamic Rupiah currency formatting, mutation-based balance calculations, Recharts donut and cashflow visualizations, custom category management with emoji pickers, dual-theme support, multi-language (i18n), and JSON/CSV backup and export capabilities.`,
        features: [`Smart Transaction Logging: Frictionless income (+), expense (-), and internal transfer (↔) tracking with real-time balance validation and auto-formatted IDR currency inputs`, `Multi-Account Balance Engine: Centralized management for Bank (BCA, Mandiri, BRI, SeaBank), Cash, and E-Wallets (GoPay, OVO, Dana, ShopeePay) with mutation-derived dynamic balances`, `Interactive Financial Analytics: Visualized cashflow breakdown with responsive Recharts donut charts, net income/expense summary cards, and category percentage distributions`, `Dynamic Category Customization: Custom income and expense category creation with an intuitive emoji picker for personalized expense tagging`, `Progressive Web App (PWA) & Mobile-First UX: Fully installable native-like PWA experience on Android, iOS, and Desktop with offline service workers and zero layout shift (scrollbar-gutter: stable)`, `Enterprise-Grade Security & Cloud Sync: Google OAuth 2.0 authentication powered by Supabase with Row Level Security (RLS) ensuring strict per-user database isolation`, `Data Portability & Export: Full JSON backup/restore with integrity verification and Excel-ready CSV export with UTF-8 BOM encoding`, `Internationalization & Daily Reminders: Dual-language support (Bahasa Indonesia & English) and customizable daily browser notification reminders`],
        role: `Full-Stack Developer & UI/UX Designer`,
        image: `/projects/catatin/catatin-mockup.jpg`,
        images: [{
            src: `/projects/catatin/catatin-mockup.jpg`,
            caption: `catat.in Mobile App Dual Mockup (Transactions Feed & Financial Recap UI)`
        }, {
            src: `/projects/catatin/catatin-transactions-real.png`,
            caption: `Live Transactions Screen - Real-Time Balance (Rp 1.600.000), Date Period Filters & Cashflow History`
        }, {
            src: `/projects/catatin/catatin-recap-real.png`,
            caption: `Financial Recap & Expense Distribution - Interactive Donut Chart, Net Difference & Category Breakdown`
        }, {
            src: `/projects/catatin/catatin-logo-text.png`,
            caption: `catat.in Official Brand Identity & Logotype`
        }],
        technologies: [`React 19`, `TypeScript`, `Vite`, `Tailwind CSS`, `Supabase`, `PostgreSQL`, `PWA`, `Recharts`, `Lucide React`, `Google OAuth`, `i18n`],
        links: {
            github: `https://github.com/dappahsn/catat.in`,
            demo: `https://daffahusen-finance.vercel.app/`
        },
        featured: !0
    }, {
        id: 4,
        slug: `court-in-sports-booking`,
        title: `court.in - Sports Venue Booking & Management Platform`,
        category: `Web`,
        year: `2026`,
        description: `A full-stack sports court reservation and venue management platform built with React 19, Vite, Tailwind CSS v4, Zustand, Node.js Express 5, PostgreSQL, and Prisma ORM. Features conflict-free slot booking, 15-minute QRIS payment countdown, digital E-Tickets with QR codes, verified reviews, and a multi-role admin venue management dashboard.`,
        overview: `court.in is a comprehensive full-stack digital sports reservation and facility management platform designed to eliminate schedule clashes and manual booking friction for Futsal, Badminton, and Padel venues. Architected as a modular monorepo, the client features a high-performance React 19 and Tailwind CSS v4 frontend with Zustand state management, while the backend is powered by Node.js, Express 5, Prisma ORM, and PostgreSQL. The platform integrates dynamic QRIS payment workflows via Midtrans, automated 15-minute slot holding timers, verifiable digital E-Tickets with barcode/QR rendering, and a robust administrative portal for real-time venue scheduling, revenue analytics, and staff access control.`,
        problem: `Sports facility reservations in Indonesia commonly rely on manual WhatsApp messaging and paper logs, resulting in frequent double-booking conflicts, lack of real-time slot visibility, cumbersome cash reconciliation, and fake or unverified customer reviews.`,
        solution: `Engineered an atomic double-booking prevention engine powered by PostgreSQL transactions and Prisma ORM, backed by a 15-minute QRIS checkout reservation timer that automatically releases unpaid slots. Built an interactive hourly time-slot matrix (07:00–23:00) with visual availability states, instant cash/QRIS checkout options, cryptographic E-Ticket generation, and review integrity gates that only permit verified players with completed bookings to submit ratings and feedback.`,
        features: [`Real-Time Schedule Matrix: Interactive hourly booking grid (07:00–23:00) across Futsal, Badminton, and Padel courts with instant visual slot statuses (Available, Selected, Booked)`, `Atomic Double-Booking Prevention: Database-level transaction locks and backend concurrency middleware ensuring zero overlapping reservations`, `15-Minute QRIS Payment Hold: Automated reservation locking with a real-time countdown timer that auto-cancels expired orders and restores public slot availability`, `Digital E-Ticket with QR Code: Official ticket issuance featuring unique booking references (TKT-YYYY-MMDD-XXX), fee breakdown, and PDF download/print capability`, `Verified Review Integrity System: Anti-spam rating mechanism strictly restricted to users with verified COMPLETED booking sessions, complete with venue admin replies`, `Comprehensive Admin Management Portal: Executive analytics dashboard tracking venue revenue, occupancy rates, live slot scheduler, staff access permissions, and business operating hours`, `Multi-Role Access Control (RBAC): Dedicated roles for Customers, Venue Admins, and Operational/Cashier Staff with JWT-secured route guards`, `Modern Sporty UI & Motion Design: Built with Tailwind CSS v4 tokenized themes, smooth scroll-driven animations, responsive bento grids, and dynamic metric counters`],
        role: `Full-Stack Developer & UI/UX Designer`,
        image: `/projects/courtin/courtin-mockup.jpg`,
        images: [{
            src: `/projects/courtin/courtin-mockup.jpg`,
            caption: `court.in Multi-Device Showcase - Desktop Venue Management & Tablet Booking Interface`
        }, {
            src: `/projects/courtin/courtin-explore.png`,
            caption: `Explore Courts Catalog - Sport Filters (Futsal, Badminton, Padel), Price Ranges & Real-Time Availability`
        }, {
            src: `/projects/courtin/courtin-detail.png`,
            caption: `Court Detail & Slot Booking - High-Definition Facility Specs, Pricing & Interactive Hourly Schedule`
        }, {
            src: `/projects/courtin/courtin-home.png`,
            caption: `court.in Landing Page - Hero Presentation, Quick Search Bar & Sport Discovery`
        }, {
            src: `/projects/courtin/courtin-about.png`,
            caption: `court.in About Ecosystem - Company Mission, Dynamic Customer Metrics & World-Class Service`
        }, {
            src: `/projects/courtin/courtin-contact.png`,
            caption: `court.in Support & FAQ - Multi-Channel Help Center (WhatsApp, Email) & Instant Inquiries`
        }, {
            src: `/projects/courtin/courtin-logo-horizontal.png`,
            caption: `court.in Official Brand Identity & Logotype`
        }],
        technologies: [`React 19`, `Vite`, `Tailwind CSS v4`, `Zustand`, `Node.js`, `Express.js 5`, `PostgreSQL`, `Prisma ORM`, `Midtrans QRIS`, `JWT Auth`, `Lucide React`, `RESTful API`],
        links: {
            github: `https://github.com/dappahsn/Court.in`,
            demo: `https://court-in.vercel.app/`
        },
        featured: !0
    }, {
        id: 5,
        slug: `biocompost-buddy`,
        title: `BioCompost Buddy - Smart IoT Composting System`,
        category: `IoT`,
        year: `2025`,
        description: `A nationally funded Top 180 Innovillage project delivering an integrated smart IoT composting machine and web monitoring platform with automated shredding, mechanized aeration, and multi-sensor fermentation tracking for rural food security in Aceh Besar.`,
        overview: `BioCompost Buddy was selected as a Top 180 Nationally Funded Social Project in the Innovillage 2025/2026 competition (Telkom University / BUMN). Implemented directly in Gampong Cadek, Baitussalam, Aceh Besar, the system combines dual-chamber mechanical hardware (organic waste shredder and automated mixing paddles) with an ESP32 IoT telemetry node (DHT22, soil moisture, and MQ-6 gas sensors). The solution empowers 50 household farmers and village enterprise (BUMDes) caretakers to monitor real-time fermentation metrics through an interactive web portal, producing consistent, odor-free organic fertilizer while advancing community-based circular economy.`,
        problem: `Household farmers in Gampong Cadek previously processed agricultural and organic waste using slow, manual methods resulting in inconsistent fertilizer quality, unmonitored anaerobic gas spikes, and unpredictable decomposition periods, with zero sensor or digital monitoring capabilities in the village.`,
        solution: `Engineered an integrated dual-chamber composting prototype equipped with a high-torque mechanical waste shredder, motorized mixing paddles, and an ESP32 IoT telemetry node wired to DHT22, capacitive soil moisture, and MQ-6 gas sensors. Deployed an interactive web portal featuring real-time readiness gauges (25–30°C, 40–60% moisture, <1000 ppm gas) and wireless manual override controls.`,
        features: [`Top 180 Innovillage National Finalist & Funded Project: Recognized and funded under the Innovillage 2025/2026 national social innovation competition by Telkom University & BUMN`, `Dual-Chamber Automated Mechanical System: High-torque organic waste shredder blade to minimize particle sizes paired with automated aeration mixing paddles`, `Multi-Sensor IoT Telemetry Node: ESP32 microcontroller reading DHT22 (ambient temp/humidity), soil moisture probes, and MQ-6 (methane/ammonia) gas sensors`, `Real-Time Fermentation Analytics: Automated algorithm detecting optimal compost maturity thresholds (25–30°C, 40–60% moisture, <1000 ppm gas)`, `Interactive Web Dashboard & 3D Visualizer: Responsive web platform with live sensor telemetry gauges, wireless motor activation, and 3D architectural models`, `Social Impact & Field Implementation: Directly deployed with village socialization, handover, and BUMDes training for 50 local farmers in Gampong Cadek, Aceh Besar`],
        role: `Lead IoT Engineer & Full-Stack Developer`,
        image: `/projects/biocompost-buddy/biocompost-banner.jpg`,
        images: [{
            src: `/projects/biocompost-buddy/biocompost-banner.jpg`,
            caption: `Official Innovillage 2025/2026 Project Banner (Sosialisasi Teknologi Pengolahan Kompos di Gampong Cadek)`
        }, {
            src: `/projects/biocompost-buddy/biocompost-handover.jpg`,
            caption: `Innovillage Top 180 Project - Handover & Village Socialization with Local Farmers`
        }, {
            src: `/projects/biocompost-buddy/biocompost-assembly.jpg`,
            caption: `Hardware Assembly, IoT Sensor Calibration & Field Testing Session`
        }, {
            src: `/projects/biocompost-buddy/biocompost-mockup.png`,
            caption: `BioCompost Buddy Web Platform Laptop Showcase (Hero & 3D Design Stage)`
        }, {
            src: `/projects/biocompost-buddy/biocompost-3d-model.png`,
            caption: `Interactive 3D Dual-Chamber Structure (Organic Waste Shredder & Sensor Mixing Tank)`
        }, {
            src: `/projects/biocompost-buddy/biocompost-features.png`,
            caption: `Core System Capabilities (Real-Time Monitoring, Automatic Mixing, Shredder, IoT Dashboard)`
        }],
        technologies: [`ESP32`, `IoT`, `DHT22 Sensor`, `MQ-6 Gas Sensor`, `Soil Moisture Sensor`, `Embedded C/C++`, `JavaScript`, `HTML5/CSS3`, `Bootstrap 5`, `Smart Agriculture`],
        links: {
            github: `https://github.com/dappahsn/BioCompostBuddy`,
            demo: `https://dappahsn.github.io/BioCompostBuddy/`
        },
        featured: !0
    }, {
        id: 6,
        slug: `desa-berdaya-pln`,
        title: `Desa Berdaya PLN`,
        category: `Web`,
        year: `2025`,
        description: `A comprehensive community empowerment web portal built for PT PLN (Persero) UID Aceh, showcasing local Acehnese UMKM products, village initiatives, educational English courses, and sustainability waste management programs.`,
        overview: `Desa Berdaya PLN is a multi-page community empowerment portal developed during an internship at PT PLN (Persero) Unit Induk Distribusi Aceh. The platform centralizes and visualizes CSR initiatives across Aceh villages, featuring interactive catalogs for local UMKM artisans, village distribution maps across Aceh, educational programs like GM English Course, and environmental sustainability projects like Bank Sampah USK.`,
        problem: `Prior to this platform, information regarding PLN-supported village programs, empowered UMKM micro-enterprises, and community development initiatives across Aceh was fragmented and difficult for the public and stakeholders to discover.`,
        solution: `Engineered a modern, responsive web application featuring a multi-page navigation architecture, dynamic category filtering for local crafts and traditional culinary products (Kupiah Meukeutop, Songket, Kue Bhoi, Ikan Keumamah), interactive village distribution mapping, image carousels for program documentation, interactive FAQ accordions, and an integrated contact system.`,
        features: [`Comprehensive Landing Portal: Dynamic hero carousel, program highlight cards, interactive Aceh distribution map, FAQ accordion, and inquiry form`, `UMKM Product Showcase & Filter: Categorized gallery filtering across Food, Clothing, Headwear, Bags, Handicrafts, and Household Tools`, `Education & English Course Hub: Dedicated module showcasing the GM English Course initiative in Gampong Geuceu Meunara to improve youth global competence`, `Environmental Sustainability / Bank Sampah: Documentation of organic & inorganic waste processing machines (hydraulic presses, shredders, grinders) at USK`, `Responsive Multi-Device Layout: Built with mobile-first principles, fluid Bootstrap grid system, and high-contrast accessible typography`, `Interactive Media Carousels: Integrated multi-image sliders for event documentation and program reporting`],
        role: `Front-End Web Developer`,
        image: `/projects/desa-berdaya/desa-berdaya-cover.jpg`,
        images: [{
            src: `/projects/desa-berdaya/desa-berdaya-cover.jpg`,
            caption: `Desa Berdaya PLN Hero Banner & Official Welcome Interface`
        }, {
            src: `/projects/desa-berdaya/desa-berdaya-home.png`,
            caption: `Desa Berdaya PLN Home Page & Interactive Village Distribution`
        }, {
            src: `/projects/desa-berdaya/desa-berdaya-umkm.png`,
            caption: `Local Acehnese UMKM Product Catalog & Dynamic Filter System`
        }, {
            src: `/projects/desa-berdaya/desa-berdaya-kursus.png`,
            caption: `GM English Course - Youth Education Empowerment Page`
        }, {
            src: `/projects/desa-berdaya/desa-berdaya-bank-sampah.png`,
            caption: `Bank Sampah & Environmental Waste Management System`
        }],
        technologies: [`HTML5`, `CSS3`, `JavaScript`, `Bootstrap 5`, `Chart.js`, `Google Maps API`, `Responsive Web Design`, `GitHub Pages`],
        links: {
            github: `https://github.com/dappahsn/Desa-Berdaya-PLN-UID-ACEH`,
            demo: `https://dappahsn.github.io/Desa-Berdaya-PLN-ACEH/index.html`
        },
        featured: !0
    }, {
        id: 7,
        slug: `adaptive-sobel-edge-detection`,
        title: `Adaptive Sobel Edge Detection`,
        category: `Machine Learning`,
        year: `2024`,
        description: `An interactive Computer Vision web application built with Python, OpenCV, and Streamlit, implementing adaptive thresholding on the classical Sobel operator for robust real-time image edge detection.`,
        overview: `Developed under the guidance of Kahlil Muchtar, Ph.D. at Universitas Syiah Kuala, this Computer Vision project enhances traditional Sobel edge detection by dynamically adjusting gradient sensitivity based on local neighborhood contrast and pixel intensities. Built with an intuitive Streamlit web interface, users can upload custom imagery, dynamically tune threshold parameters, and inspect real-time edge segmentation maps.`,
        problem: `Standard Sobel operators rely on fixed global thresholding and rigid convolution kernels, causing poor boundary detection on images with uneven illumination, low contrast, or noisy backgrounds.`,
        solution: `Engineered an adaptive Sobel operator algorithm in Python with OpenCV and NumPy that computes directional gradient magnitudes (Gx and Gy) with local neighborhood threshold adaptation. Deployed on Streamlit Cloud with an interactive web UI allowing instant parameter manipulation and side-by-side visual analysis.`,
        features: [`Adaptive Gradient Sensitivity: Dynamically adjusts threshold levels based on local image contrast to minimize noise while preserving critical boundary details`, `Interactive Streamlit Web Dashboard: Upload custom images and tweak filter parameters (kernel size, sensitivity, threshold) with instant visual feedback`, `Directional Gradient Computation: Calculates horizontal (Gx) and vertical (Gy) spatial gradient derivatives for complete 2D edge magnitude mapping`, `Real-Time Computer Vision Pipeline: High-speed matrix convolutions powered by OpenCV and NumPy for seamless image rendering`, `Academic Research Supervision: Guided by Kahlil Muchtar, Ph.D., bridging theoretical digital image processing with interactive web deployment`],
        role: `Computer Vision Developer`,
        image: `/projects/computer-vision/sobel-display.jpg`,
        images: [{
            src: `/projects/computer-vision/sobel-streamlit-overview.jpg`,
            caption: `Adaptive Sobel Edge Detection Streamlit Web Dashboard & Comparison Matrix`
        }, {
            src: `/projects/computer-vision/sobel-streamlit-analysis.png`,
            caption: `Interactive Parameter Tuning (Manual Threshold vs. Otsu Adaptive Segmentation)`
        }, {
            src: `/projects/computer-vision/sobel.png`,
            caption: `Directional Sobel Convolution Kernels & Gradient Operator Matrix`
        }, {
            src: `/projects/computer-vision/sobel-display.jpg`,
            caption: `Computer Vision Real-Time Analysis & Dynamic Gradient Pipeline`
        }],
        technologies: [`Python`, `OpenCV`, `Streamlit`, `NumPy`, `Computer Vision`, `Image Processing`, `Sobel Filter`, `Streamlit Cloud`],
        links: {
            github: `https://github.com/dappahsn/Computer-Vision-Kelompok-1`,
            demo: `https://computer-vision-kelompok-1.streamlit.app/`
        },
        featured: !1
    }, {
        id: 8,
        slug: `iepoma`,
        title: `IePoma - Smart Wastewater Recycling for Irrigation`,
        category: `IoT`,
        year: `2024`,
        description: `An IoT-enabled smart recycling and automated plant irrigation system that purifies rice washing wastewater for sustainable household and commercial agriculture.`,
        overview: `Developed under the guidance of Rahmad Dawood at Universitas Syiah Kuala, IePoma is an automated smart irrigation and water conservation IoT prototype designed to recycle nutrient-rich rice washing wastewater. By integrating multi-stage mechanical filtration with Arduino microcontroller automation and real-time soil moisture sensors, the system automatically irrigates crops only when moisture levels drop below threshold, supporting SDG 6 (Clean Water and Sanitation) and SDG 12 (Responsible Consumption and Production).`,
        problem: `Large amounts of rice washing wastewater from households and commercial restaurants ("Rumah Makan") are routinely discarded down drains, wasting valuable water and nutrient potential, while conventional irrigation systems lack sensor-driven automation and lead to excessive freshwater consumption.`,
        solution: `Engineered an automated embedded IoT system featuring a multi-stage sediment filtration reservoir, soil moisture sensor probes, and automated solenoid/servo valve actuators controlled by an Arduino microcontroller. The system purifies greywater and delivers precise, automated drip irrigation based on real-time soil hydration data.`,
        features: [`Sustainable Wastewater Recycling: Captures and filters rice washing greywater from culinary establishments to conserve potable freshwater`, `Real-Time Soil Moisture Sensing: Continously monitors soil hydration levels to trigger automatic, data-driven irrigation cycles`, `Multi-Stage Filtration Architecture: Integrated pre-filter and sediment filtration chamber to remove suspended solids prior to distribution`, `Arduino Microcontroller Control: Robust embedded firmware managing sensor telemetry, threshold evaluation, and automated valve actuation`, `SDG Alignment (SDG 6 & 12): Promotes responsible resource consumption, circular water economy, and urban micro-farming sustainability`, `Academic Research Supervision: Guided by mentor Rahmad Dawood at Universitas Syiah Kuala`],
        role: `Embedded Systems & IoT Developer`,
        image: `/projects/iepoma/iepoma-hardware-setup.jpg`,
        images: [{
            src: `/projects/iepoma/iepoma-hardware-setup.jpg`,
            caption: `IePoma Physical Hardware Prototype - Rice Wastewater Recycling & Automated Irrigation Setup`
        }, {
            src: `/projects/iepoma/iepoma-system-3d.png`,
            caption: `3D CAD Prototype Model of Filtration Tank & Microcontroller Actuator`
        }, {
            src: `/projects/iepoma/iepoma-top-view.png`,
            caption: `Top-Down Layout of Wastewater Reservoir, Pipeline & Garden Bed`
        }, {
            src: `/projects/iepoma/iepoma-environment.png`,
            caption: `Implementation Environment Concept at Commercial Restaurant (Rumah Makan)`
        }],
        technologies: [`Arduino`, `Soil Moisture Sensor`, `Filtration System`, `Embedded C/C++`, `IoT`, `Automated Actuators`, `Water Recycling`, `Smart Agriculture`],
        links: {
            github: `https://github.com/dappahsn/Ie-Poma`,
            demo: ``
        },
        featured: !1
    }, {
        id: 9,
        slug: `trafficsense`,
        title: `TrafficSense - Smart Acoustic Traffic Monitoring`,
        category: `IoT`,
        year: `2024`,
        description: `An IoT-enabled smart traffic density monitoring system utilizing ESP32, acoustic sound sensors, and Google Cloud Firestore to detect roadway congestion and stream real-time telemetry to an interactive web dashboard.`,
        overview: `TrafficSense ("Deteksi Cepat, Lalu Lintas Tepat") is an intelligent traffic monitoring and density classification IoT platform developed by Muhammad Daffa Husen. Powered by an ESP32 microcontroller and high-sensitivity acoustic sound sensors deployed at urban roadways (such as JL. Teuku Nyak Arief, Universitas Syiah Kuala), the system captures ambient sound levels, calculates moving acoustic averages, and synchronizes real-time telemetry to Google Cloud Firestore. The web dashboard provides dynamic congestion categorization ("Lancar", "Sedang", "Padat"), interactive Google Maps geospatial tracking, and historical traffic analytics.`,
        problem: `Conventional road traffic monitoring depends heavily on expensive CCTV networks or manual patrols that require high network bandwidth, are vulnerable to poor lighting/weather conditions, and lack automated acoustic signal awareness for immediate density estimation.`,
        solution: `Engineered a cost-effective acoustic IoT sensing node using ESP32 with Wi-Fi telemetry and NTP time synchronization. Sensor analog values are processed and pushed to Cloud Firestore, which drives a responsive real-time web dashboard featuring live congestion alerts, geospatial map overlays, and sensor history charts.`,
        features: [`ESP32 Microcontroller & Wi-Fi Telemetry: Low-power edge computing node collecting real-time analog sound sensor samples with NTP time synchronization`, `Cloud Firestore Real-Time Database: Instantaneous data synchronization between edge IoT hardware nodes and web client dashboards`, `Acoustic Traffic Density Estimation: Algorithms mapping ambient decibel and sensor ADC values into intuitive congestion states (Lancar, Sedang, Padat)`, `Interactive Web Dashboard & Google Maps: Embedded geospatial visualization with road coordinate tracking (JL. Teuku Nyak Arief, Banda Aceh)`, `Historical Data Logging & Analytics: Dedicated history page displaying chronological traffic trends and peak hour acoustic sensor readings`, `Responsive Mobile-First UI: Clean, modern interface optimized for field monitoring and traffic authority dispatch`],
        role: `Full-Stack IoT Developer & Embedded Engineer`,
        image: `/projects/trafficsense/trafficsense-mockup.png`,
        images: [{
            src: `/projects/trafficsense/trafficsense-mockup.png`,
            caption: `TrafficSense Dual Device Mockup (Welcome Splash & Live Traffic Dashboard)`
        }, {
            src: `/projects/trafficsense/trafficsense-dashboard.jpg`,
            caption: `Live Traffic Monitoring Dashboard with Google Maps (JL. Teuku Nyak Arief) & Real-Time Sensor Telemetry`
        }, {
            src: `/projects/trafficsense/trafficsense-splash.png`,
            caption: `TrafficSense Mobile Splash Screen ("Deteksi Cepat, Lalu Lintas Tepat")`
        }, {
            src: `/projects/trafficsense/trafficsense-logo-3d.png`,
            caption: `TrafficSense 3D GPS Location Pin & Smart Mobility Identity`
        }],
        technologies: [`ESP32`, `IoT`, `Acoustic Sound Sensor`, `Firebase Firestore`, `Google Maps API`, `JavaScript`, `Bootstrap 5`, `Embedded C/C++`, `NTP Protocol`],
        links: {
            github: `https://github.com/dappahsn/TrafficSense`,
            demo: `https://dappahsn.github.io/TrafficSense/`
        },
        featured: !1
    }, {
        id: 10,
        slug: `3d-reconstruction-meshroom`,
        title: `Interactive 3D Electronics with Meshroom & Three.js`,
        category: `Web`,
        year: `2024`,
        description: `Interactive web platform visualizing 3D reconstructed electronic components (Arduino Uno, Breadboard, LCD) using Meshroom photogrammetry and Three.js for real-time educational exploration.`,
        overview: `An interactive 3D computer graphics and photogrammetry project developed under the supervision of Kahlil Muchtar, Ph.D. at Universitas Syiah Kuala. The system transforms multi-angle physical photographs of real-world electronic components (Arduino Uno board, prototyping breadboard, and 16x2 I2C LCD module) into textured 3D mesh models via Meshroom (AliceVision), rendering them in an interactive Three.js web viewport to support accessible hardware and electronics education.`,
        problem: `Understanding physical electronics hardware in remote or resource-limited learning settings is challenging without physical lab equipment, while traditional manual 3D modeling is labor-intensive and often lacks realistic material texturing.`,
        solution: `Built an end-to-end 3D digitization and web rendering pipeline: capturing multi-view high-resolution photography, computing camera poses & dense point clouds with AliceVision SfM (Structure from Motion), generating high-fidelity GLB 3D meshes with texture projection in Meshroom, and implementing an interactive Three.js web application with orbit controls, dynamic lighting, and component inspection.`,
        features: [`Multi-Angle Photogrammetry Pipeline: Captured multi-perspective photographic datasets of real electronic hardware for automated 3D reconstruction`, `Dense Mesh & Texture Generation: Utilized AliceVision framework in Meshroom to compute depth maps, surface meshing, and high-resolution texture UV unwrapping`, `Reconstructed Electronic Hardware: 3D interactive models of Arduino Uno microcontroller, prototyping breadboard, and 16x2 Character LCD display`, `Real-Time Three.js Web Viewport: Smooth orbit camera rotation, zoom, pan, and real-time lighting rendering directly in modern web browsers`, `Educational Hardware Platform: Provides an interactive visual tool for students and educators to inspect component pinouts and spatial layouts`, `Academic Research Collaboration: Guided by supervisor Kahlil Muchtar, Ph.D., advancing computer graphics and digital twin learning`],
        role: `Computer Graphics & Web 3D Developer`,
        image: `/projects/meshroom/meshroom-hero.jpg`,
        images: [{
            src: `/projects/meshroom/meshroom-hero.jpg`,
            caption: `Interactive 3D Computer Graphics Web Portal (Hero & Overview)`
        }, {
            src: `/projects/meshroom/meshroom-3d-models.png`,
            caption: `Interactive 3D Reconstructed Hardware Models (Breadboard & Arduino Uno)`
        }, {
            src: `/projects/meshroom/meshroom-team.png`,
            caption: `Project Team & Contributor Directory (Muhammad Daffa Husen)`
        }, {
            src: `/projects/meshroom/meshroom-3d-electronics-display.jpg`,
            caption: `Photogrammetry 3D Reconstruction & Multi-Angle Alignment Pipeline`
        }],
        technologies: [`Three.js`, `Meshroom`, `AliceVision`, `Photogrammetry`, `WebGL`, `JavaScript`, `GLB / 3D Modeling`, `Bootstrap 5`, `Computer Graphics`],
        links: {
            github: `https://github.com/dappahsn/Group-2---Computer-Graphics`,
            demo: `https://dappahsn.github.io/Group-2---Computer-Graphics/`
        },
        featured: !1
    }, {
        id: 11,
        slug: `lifegen-health-companion`,
        title: `LifeGen - Health & Fitness Companion`,
        category: `UI/UX Design`,
        year: `2023`,
        description: `National-level UI/UX competition finalist project at INFEST 9.0. A health and wellness companion mobile app designed in Figma with intuitive user flows, calorie tracking, food logging, and daily activity monitoring.`,
        overview: `LifeGen is a modern health and fitness companion mobile application designed to empower users to build sustainable lifestyle habits. Developed as a national finalist entry for the UI/UX Design Competition at INFEST 9.0 (Informatics Festival), the project encompasses full-cycle product design—from empathy-driven user research and wireframing to high-fidelity interactive prototyping and design systems in Figma.`,
        problem: `Many individuals struggle to maintain consistent fitness routines due to overwhelming, complicated tracking apps with steep learning curves, cluttered user interfaces, and lack of motivational habit-forming feedback.`,
        solution: `Designed an intuitive, motivating mobile experience centered on four core pillars: calorie tracking (burned vs. consumed), step counting with daily milestones, frictionless meal logging, and progress insights. Designed in Figma with a full interactive prototype flow from onboarding to daily dashboard tracking.`,
        features: [`National Finalist Recognized: Selected as Finalist in the national UI/UX Design Competition at INFEST 9.0 (Informatics Festival 2023)`, `Comprehensive Figma Interactive Prototype: Fully interactive prototyping flow including onboarding questionnaire, authentication, dashboard, meal logging diary, and profile settings`, `Calorie & Nutrition Tracking: Intuitive calorie ring visualization comparing daily calories consumed against active energy burned`, `Step & Activity Monitoring: Daily step goal progress bars with distance, active minutes, and milestone badges`, `Food & Meal Intake Logging: Quick-add food journal with nutritional macro breakdown (carbs, proteins, fats)`, `Design System & Component Library: Structured Figma components, cohesive energetic orange brand identity, accessible typography, and mobile UX standards`],
        role: `Lead UI/UX Designer & Product Researcher`,
        image: `/projects/lifegen/lifegen-mockup.png`,
        images: [{
            src: `/projects/lifegen/lifegen-mockup.png`,
            caption: `LifeGen Mobile App Dual Device Mockup (Splash & Dashboard UI)`
        }, {
            src: `/projects/lifegen/lifegen-dashboard.png`,
            caption: `LifeGen Main Dashboard - Calorie Ring Tracker, Daily Foot Steps & Activity Metrics`
        }, {
            src: `/projects/lifegen/lifegen-splash.png`,
            caption: `LifeGen Splash & Brand Launch Screen Interface`
        }, {
            src: `/projects/lifegen/lifegen-figma-flow.png`,
            caption: `Figma Interactive Prototyping Flow Map & Information Architecture`
        }, {
            src: `/projects/lifegen/lifegen-competition-finalist.png`,
            caption: `National UI/UX Finalist Presentation at INFEST 9.0 (Informatics Festival 2023)`
        }],
        technologies: [`Figma`, `UI/UX Design`, `Interactive Prototyping`, `User Research`, `Design Thinking`, `Design Systems`, `Wireframing`, `Mobile UX`],
        links: {
            github: ``,
            demo: `https://www.figma.com/proto/MIYprCXiJ8d9SDMZA5kMYT/Lifegen?page-id=0%3A1&node-id=48-3636&p=f&viewport=488%2C591%2C0.18&t=ywpG479uWKZQYhzF-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=48%3A3636&show-proto-sidebar=1`
        },
        featured: !0
    }, {
        id: 12,
        slug: `veggieneed`,
        title: `VeggieNeed - Farm-to-Table Marketplace`,
        category: `UI/UX Design`,
        year: `2023`,
        description: `A conceptual farm-to-table digital marketplace designed in Figma connecting local vegetable growers and farmers directly with consumers through an intuitive, accessible mobile UI/UX experience.`,
        overview: `VeggieNeed is a user-centered mobile marketplace application designed to bridge the gap between local agricultural farmers and urban households. Developed under the mentorship of Rahmad Dawood at Universitas Syiah Kuala, the project translates comprehensive user research and persona modeling into intuitive wireframes and interactive Figma prototypes, facilitating seamless crop discovery, direct producer purchasing, and community-driven fair trade.`,
        problem: `Smallholder vegetable farmers often struggle with unfair intermediary markups and limited market access, while conscious consumers find it difficult to source fresh, affordable, and ethically grown local organic produce.`,
        solution: `Designed an accessible, community-oriented mobile platform in Figma featuring categorized harvest search ("Cari Hasil Panen"), promotional seasonal bundles ("Plenti Plenti" & "VegDiet"), direct farmer messaging, streamlined cart checkout, and clear order tracking flows.`,
        features: [`Farm-to-Table Discovery: Categorized marketplace browsing with instant harvest search and agricultural category filters`, `Interactive Figma High-Fidelity Prototype: Seamless end-to-end user journeys from splash onboarding to product checkout and order management`, `Promotional & Seasonal Campaign Feeds: Engaging promotional cards and curated dietary bundles (e.g. "Plenti Plenti", "VegDiet")`, `Direct Buyer-Seller Communication: Integrated chat and inquiry channels fostering direct community relationships with local farmers`, `Accessible UI Design System: Organic green visual identity, high-contrast readable typography, and intuitive mobile ergonomics`, `User-Centered Design Methodology: Grounded in empathy research, user personas, and iterative wireframe usability testing`],
        role: `Lead UI/UX Designer & Product Researcher`,
        image: `/projects/veggieneed/veggieneed-mockup.png`,
        images: [{
            src: `/projects/veggieneed/veggieneed-mockup.png`,
            caption: `VeggieNeed Mobile App Dual Device Mockup (Splash & Marketplace UI)`
        }, {
            src: `/projects/veggieneed/veggieneed-home.png`,
            caption: `VeggieNeed Marketplace Home Screen - Harvest Search, Promotional Banners & Navigation`
        }, {
            src: `/projects/veggieneed/veggieneed-splash.png`,
            caption: `VeggieNeed Onboarding & Brand Splash Screen ("Kenali petani Anda, kenali makanan Anda")`
        }, {
            src: `/projects/veggieneed/veggieneed-logo.png`,
            caption: `VeggieNeed Brand Identity & Organic Leaf Shopping Cart Logo`
        }],
        technologies: [`Figma`, `UI/UX Design`, `Interactive Prototyping`, `User Research`, `Design Systems`, `Wireframing`, `Persona Building`, `Mobile UX`],
        links: {
            github: ``,
            demo: `https://www.figma.com/proto/GJKRbnFwVvOZUCtw7SbOdc/Veggieneed?page-id=0%3A1&node-id=1685-3385&p=f&viewport=496%2C172%2C0.31&t=f0GegnLakMD2UK4A-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=104%3A252`
        },
        featured: !1
    }];
[...h, ...g.map(e => ({
    ...e,
    role: e.degree,
    company: e.institution
})), ..._.map(e => ({
    ...e,
    company: e.organization
}))];
var x = n();
function S({ isOpen: e, onClose: t }) {
    if ((0,
        u.useEffect)(() => {
            let n = e => {
                e.key === `Escape` && t()
            }
                ;
            return e && (window.addEventListener(`keydown`, n),
                document.body.style.overflow = `hidden`,
                window.lenis && window.lenis.stop()),
                () => {
                    window.removeEventListener(`keydown`, n),
                        document.body.style.overflow = `unset`,
                        window.lenis && window.lenis.start()
                }
        }
            , [e, t]),
        !e)
        return null;
    let n = p.cv || `/cv/CV_Muhammad_Daffa_Husen.pdf`;
    return (0,
        x.jsxs)(`div`, {
            "data-lenis-prevent": !0,
            className: `fixed inset-0 z-[100] bg-on-background/70 backdrop-blur-sm flex items-center justify-center p-3 md:p-6 overflow-y-auto animate-fadeIn`,
            children: [(0,
                x.jsx)(`div`, {
                    className: `fixed inset-0`,
                    onClick: t
                }), (0,
                    x.jsxs)(`div`, {
                        className: `relative z-10 w-full max-w-5xl h-[92vh] bg-surface border-4 border-on-surface brick-shadow rounded-2xl flex flex-col overflow-hidden my-auto`,
                        children: [(0,
                            x.jsxs)(`div`, {
                                className: `absolute -top-2.5 left-12 flex gap-4 pointer-events-none z-20`,
                                children: [(0,
                                    x.jsx)(`span`, {
                                        className: `w-3.5 h-3.5 rounded-full bg-brick-yellow border-2 border-on-surface shadow-sm`
                                    }), (0,
                                        x.jsx)(`span`, {
                                            className: `w-3.5 h-3.5 rounded-full bg-brick-yellow border-2 border-on-surface shadow-sm`
                                        }), (0,
                                            x.jsx)(`span`, {
                                                className: `w-3.5 h-3.5 rounded-full bg-brick-yellow border-2 border-on-surface shadow-sm`
                                            })]
                            }), (0,
                                x.jsxs)(`div`, {
                                    className: `bg-surface-container-high border-b-4 border-on-surface px-4 md:px-6 py-3 flex items-center justify-between select-none`,
                                    children: [(0,
                                        x.jsxs)(`div`, {
                                            className: `flex items-center gap-3`,
                                            children: [(0,
                                                x.jsxs)(`div`, {
                                                    className: `flex items-center gap-1.5`,
                                                    children: [(0,
                                                        x.jsx)(`button`, {
                                                            onClick: t,
                                                            className: `w-3.5 h-3.5 rounded-full bg-primary border-2 border-on-surface hover:opacity-80 transition-opacity cursor-pointer`,
                                                            title: `Close`
                                                        }), (0,
                                                            x.jsx)(`span`, {
                                                                className: `w-3.5 h-3.5 rounded-full bg-brick-yellow border-2 border-on-surface`
                                                            }), (0,
                                                                x.jsx)(`span`, {
                                                                    className: `w-3.5 h-3.5 rounded-full bg-brick-blue border-2 border-on-surface`
                                                                })]
                                                }), (0,
                                                    x.jsxs)(`span`, {
                                                        className: `font-label-caps text-[11px] md:text-xs font-bold text-on-surface tracking-wider truncate max-w-[220px] md:max-w-none`,
                                                        children: [`CV_VIEWER // `, p.name.toUpperCase()]
                                                    })]
                                        }), (0,
                                            x.jsxs)(`div`, {
                                                className: `flex items-center gap-3`,
                                                children: [(0,
                                                    x.jsx)(`span`, {
                                                        className: `hidden sm:inline-block bg-on-surface text-white px-2 py-0.5 text-[10px] font-label-caps font-bold`,
                                                        children: `RESUME`
                                                    }), (0,
                                                        x.jsx)(`button`, {
                                                            onClick: t,
                                                            className: `w-7 h-7 border-2 border-on-surface bg-white hover:bg-primary hover:text-white flex items-center justify-center transition-colors font-bold text-sm brick-shadow cursor-pointer`,
                                                            "aria-label": `Close modal`,
                                                            children: `✕`
                                                        })]
                                            })]
                                }), (0,
                                    x.jsx)(`div`, {
                                        className: `flex-1 w-full h-full bg-[#525659] relative overflow-hidden flex flex-col items-center justify-center`,
                                        children: (0,
                                            x.jsx)(`iframe`, {
                                                src: `${n}#toolbar=1&navpanes=0&scrollbar=1`,
                                                className: `w-full h-full border-none bg-white`,
                                                title: `CV ${p.name}`
                                            })
                                    }), (0,
                                        x.jsxs)(`div`, {
                                            className: `bg-surface border-t-4 border-on-surface px-4 md:px-6 py-3.5 flex flex-wrap items-center justify-between gap-3 select-none`,
                                            children: [(0,
                                                x.jsx)(`div`, {
                                                    className: `font-label-caps text-[10px] md:text-xs text-on-surface-variant font-bold uppercase`,
                                                    children: `CURRICULUM VITAE // PROFESSIONAL RESUME`
                                                }), (0,
                                                    x.jsxs)(`div`, {
                                                        className: `flex items-center gap-3`,
                                                        children: [(0,
                                                            x.jsxs)(`a`, {
                                                                href: n,
                                                                target: `_blank`,
                                                                rel: `noopener noreferrer`,
                                                                className: `inline-flex items-center gap-1.5 px-4 py-2 bg-white text-on-surface border-2 border-on-surface font-button-text text-xs uppercase brick-shadow hover:bg-surface-container transition-colors cursor-pointer`,
                                                                children: [(0,
                                                                    x.jsx)(`span`, {
                                                                        className: `material-symbols-outlined text-[16px]`,
                                                                        children: `open_in_new`
                                                                    }), `OPEN IN NEW TAB`]
                                                            }), (0,
                                                                x.jsxs)(`a`, {
                                                                    href: n,
                                                                    download: `CV_Muhammad_Daffa_Husen.pdf`,
                                                                    className: `inline-flex items-center gap-1.5 px-5 py-2 bg-primary text-on-primary border-2 border-on-surface font-button-text text-xs font-bold uppercase brick-btn relative cursor-pointer`,
                                                                    children: [(0,
                                                                        x.jsx)(`span`, {
                                                                            className: `material-symbols-outlined text-[16px]`,
                                                                            children: `download`
                                                                        }), `DOWNLOAD CV`]
                                                                })]
                                                    })]
                                        })]
                    })]
        })
}
var C = [{
    label: `Home`,
    href: `#home`
}, {
    label: `About Me`,
    href: `#about`
}, {
    label: `Projects`,
    href: `#projects`
}, {
    label: `Contact`,
    href: `#contact`
}];
function ee() {
    let [e, t] = (0,
        u.useState)(!1)
        , [n, r] = (0,
            u.useState)(`#home`)
        , [i, a] = (0,
            u.useState)(!1);
    (0,
        u.useEffect)(() => {
            let e = !1
                , t = () => {
                    let t = [`home`, `about`, `projects`, `contact`]
                        , n = window.scrollY
                        , i = window.innerHeight
                        , a = document.documentElement.scrollHeight;
                    if (i + n >= a - 100) {
                        r(`#contact`),
                            e = !1;
                        return
                    }
                    for (let i = t.length - 1; i >= 0; i--) {
                        let a = t[i]
                            , o = document.getElementById(a);
                        if (o) {
                            let t = o.getBoundingClientRect().top + n;
                            if (n + 300 >= t) {
                                r(`#${a}`),
                                    e = !1;
                                return
                            }
                        }
                    }
                    r(`#home`),
                        e = !1
                }
                , n = () => {
                    e || (e = !0,
                        requestAnimationFrame(t))
                }
                ;
            return window.addEventListener(`scroll`, n, {
                passive: !0
            }),
                t(),
                () => window.removeEventListener(`scroll`, n)
        }
            , []);
    let o = (e, n) => {
        if (e.preventDefault(),
            r(n),
            t(!1),
            n === `#home` || n === `#`)
            window.lenis ? window.lenis.scrollTo(0, {
                offset: 0,
                duration: 1.2
            }) : window.scrollTo({
                top: 0,
                behavior: `smooth`
            }),
                window.history.pushState(null, ``, `#home`);
        else {
            let e = document.querySelector(n);
            e && (window.lenis ? window.lenis.scrollTo(e, {
                offset: -90,
                duration: 1.2
            }) : e.scrollIntoView({
                behavior: `smooth`
            }),
                window.history.pushState(null, ``, n))
        }
    }
        ;
    return (0,
        x.jsxs)(x.Fragment, {
            children: [(0,
                x.jsxs)(`header`, {
                    className: `fixed top-0 w-full z-50 bg-surface border-b-4 border-on-surface`,
                    children: [(0,
                        x.jsxs)(`div`, {
                            className: `flex justify-between items-center w-full max-w-[1600px] mx-auto px-6 md:px-12 lg:px-16 py-4`,
                            children: [(0,
                                x.jsxs)(`a`, {
                                    className: `relative inline-flex items-center text-headline-md font-headline-md font-black tracking-tighter text-primary group select-none cursor-pointer`,
                                    href: `#home`,
                                    onClick: e => o(e, `#home`),
                                    children: [(0,
                                        x.jsx)(`span`, {
                                            children: `DAFFA HUSEN`
                                        }), (0,
                                            x.jsx)(`span`, {
                                                className: `relative -top-2.5 ml-1 text-[11px] font-label-caps font-bold px-1.5 py-0.5 bg-brick-yellow text-on-surface border-2 border-on-surface shadow-[2px_2px_0px_0px_#1a1c1c] group-hover:scale-110 group-hover:-rotate-6 transition-all duration-200 uppercase leading-none`,
                                                children: `. dev`
                                            })]
                                }), (0,
                                    x.jsx)(`nav`, {
                                        className: `hidden lg:flex gap-3`,
                                        children: C.map(e => (0,
                                            x.jsx)(`a`, {
                                                className: `font-label-caps text-label-caps px-4 py-2 transition-all cursor-pointer ${n === e.href ? `bg-brick-yellow border-4 border-on-surface brick-shadow text-on-surface font-bold` : `text-on-surface-variant hover:text-primary border-4 border-transparent`}`,
                                                href: e.href,
                                                onClick: t => o(t, e.href),
                                                children: e.label
                                            }, e.href))
                                    }), (0,
                                        x.jsx)(`div`, {
                                            className: `hidden md:flex items-center`,
                                            children: (0,
                                                x.jsxs)(`button`, {
                                                    type: `button`,
                                                    onClick: () => a(!0),
                                                    className: `inline-flex items-center gap-2 px-5 py-3 font-button-text text-button-text text-on-primary bg-primary brick-btn relative uppercase cursor-pointer`,
                                                    children: [(0,
                                                        x.jsxs)(`div`, {
                                                            className: `absolute -top-2 left-0 w-full flex justify-around px-2 pointer-events-none`,
                                                            children: [(0,
                                                                x.jsx)(`span`, {
                                                                    className: `w-3 h-3 rounded-full bg-primary border-2 border-on-surface`
                                                                }), (0,
                                                                    x.jsx)(`span`, {
                                                                        className: `w-3 h-3 rounded-full bg-primary border-2 border-on-surface`
                                                                    }), (0,
                                                                        x.jsx)(`span`, {
                                                                            className: `w-3 h-3 rounded-full bg-primary border-2 border-on-surface`
                                                                        })]
                                                        }), (0,
                                                            x.jsx)(`span`, {
                                                                className: `material-symbols-outlined text-[18px]`,
                                                                children: `download`
                                                            }), `DOWNLOAD CV`]
                                                })
                                        }), (0,
                                            x.jsx)(`button`, {
                                                className: `md:hidden text-on-surface`,
                                                onClick: () => t(!e),
                                                children: (0,
                                                    x.jsx)(`span`, {
                                                        className: `material-symbols-outlined`,
                                                        children: e ? `close` : `menu`
                                                    })
                                            })]
                        }), e && (0,
                            x.jsxs)(`div`, {
                                className: `md:hidden bg-surface border-t-4 border-on-surface px-margin-desktop py-6 flex flex-col gap-4`,
                                children: [C.map(e => (0,
                                    x.jsx)(`a`, {
                                        className: `font-label-caps px-4 py-2 transition-all cursor-pointer ${n === e.href ? `bg-brick-yellow border-4 border-on-surface brick-shadow text-on-surface font-bold w-fit` : `text-on-surface-variant hover:text-primary`}`,
                                        href: e.href,
                                        onClick: t => o(t, e.href),
                                        children: e.label
                                    }, e.href)), (0,
                                        x.jsx)(`div`, {
                                            className: `flex flex-col gap-3 mt-2`,
                                            children: (0,
                                                x.jsxs)(`button`, {
                                                    type: `button`,
                                                    className: `inline-flex items-center justify-center gap-2 px-6 py-3 font-button-text text-button-text text-on-primary bg-primary brick-btn relative uppercase`,
                                                    onClick: () => {
                                                        a(!0),
                                                            t(!1)
                                                    }
                                                    ,
                                                    children: [(0,
                                                        x.jsx)(`span`, {
                                                            className: `material-symbols-outlined text-[18px]`,
                                                            children: `download`
                                                        }), `DOWNLOAD CV`]
                                                })
                                        })]
                            })]
                }), (0,
                    x.jsx)(S, {
                        isOpen: i,
                        onClose: () => a(!1)
                    })]
        })
}
var te = (0,
    u.lazy)(() => r(() => import(`./Lanyard-D_0Rnq8I.js`), __vite__mapDeps([0, 1, 2, 3])))
    , ne = 214
    , re = e => `/frames/frame_${e.toString().padStart(5, `0`)}.webp`;
function ie() {
    let e = (0,
        u.useRef)(null)
        , t = (0,
            u.useRef)(null)
        , n = (0,
            u.useRef)(null)
        , r = (0,
            u.useRef)([])
        , i = (0,
            u.useRef)(Array(215).fill(!1))
        , a = (0,
            u.useRef)(1)
        , o = (0,
            u.useRef)(1)
        , s = (0,
            u.useRef)(-1)
        , c = (0,
            u.useRef)(null)
        , l = (0,
            u.useRef)(!1)
        , [d, f] = (0,
            u.useState)(!1)
        , [p, m] = (0,
            u.useState)(!1)
        , h = (0,
            u.useRef)(!1);
    return (0,
        u.useEffect)(() => {
            if (!p)
                return;
            let e = e => {
                e.deltaY > 0 && e.preventDefault()
            }
                , t = 0
                , n = e => {
                    t = e.touches[0]?.clientY || 0
                }
                , r = e => {
                    let n = e.touches[0]?.clientY || 0;
                    t - n > 0 && e.preventDefault()
                }
                , i = e => {
                    [`ArrowDown`, `PageDown`, `Space`, ` `].includes(e.key) && e.preventDefault()
                }
                ;
            window.addEventListener(`wheel`, e, {
                passive: !1
            }),
                window.addEventListener(`touchstart`, n, {
                    passive: !0
                }),
                window.addEventListener(`touchmove`, r, {
                    passive: !1
                }),
                window.addEventListener(`keydown`, i, {
                    passive: !1
                }),
                window.lenis && window.lenis.stop();
            let a = setTimeout(() => {
                m(!1)
            }
                , 1e3);
            return () => {
                clearTimeout(a),
                    window.lenis && window.lenis.start(),
                    window.removeEventListener(`wheel`, e),
                    window.removeEventListener(`touchstart`, n),
                    window.removeEventListener(`touchmove`, r),
                    window.removeEventListener(`keydown`, i)
            }
        }
            , [p]),
        (0,
            u.useEffect)(() => {
                let u = e.current;
                if (!u)
                    return;
                let d = u.getContext(`2d`, {
                    alpha: !0
                })
                    , p = t.current
                    , g = n.current;
                u.width = 1280,
                    u.height = 720,
                    d.imageSmoothingEnabled = !0,
                    d.imageSmoothingQuality = `high`,
                    d.fillStyle = `#fbf9f8`,
                    d.fillRect(0, 0, u.width, u.height);
                let _ = Array(215);
                r.current = _;
                let v = e => {
                    let t = Math.max(1, Math.min(ne, e));
                    if (s.current === t && _[t]?.complete)
                        return;
                    let n = _[t];
                    if (n && n.complete && n.naturalWidth > 0)
                        d.drawImage(n, 0, 0, u.width, u.height),
                            s.current = t;
                    else
                        for (let e = 1; e <= 20; e++) {
                            let n = t - e
                                , r = t + e;
                            if (n >= 1 && _[n]?.complete && _[n]?.naturalWidth > 0) {
                                d.drawImage(_[n], 0, 0, u.width, u.height),
                                    s.current = n;
                                break
                            }
                            if (r <= ne && _[r]?.complete && _[r]?.naturalWidth > 0) {
                                d.drawImage(_[r], 0, 0, u.width, u.height),
                                    s.current = r;
                                break
                            }
                        }
                }
                    , y = (e, t = !1) => {
                        if (e < 1 || e > ne || _[e])
                            return;
                        let n = new Image;
                        t && `fetchPriority` in n && (n.fetchPriority = `high`),
                            n.src = re(e),
                            n.onload = () => {
                                _[e] = n,
                                    i.current[e] = !0,
                                    e === 1 && s.current === -1 && v(1),
                                    Math.round(a.current) === e && v(e)
                            }
                            ,
                            _[e] = n
                    }
                    ;
                [1, 2, 3, 4, 5, 205, 208, 210, 211, 212, 213, 214].forEach(e => y(e, !0));
                for (let e = 10; e < ne; e += 5)
                    y(e, !1);
                let b = 1
                    , x = () => {
                        let e = Math.min(ne, b + 10);
                        for (let t = b; t <= e; t++)
                            y(t, !1);
                        b = e + 1,
                            b <= ne && (`requestIdleCallback` in window ? window.requestIdleCallback(x) : setTimeout(x, 30))
                    }
                    ;
                x();
                let S = () => {
                    let e = o.current - a.current;
                    if (Math.abs(e) > .01) {
                        a.current += e * .45;
                        let t = Math.round(a.current);
                        v(t);
                        for (let e = -3; e <= 3; e++) {
                            let n = t + e;
                            n >= 1 && n <= ne && y(n, !0)
                        }
                        c.current = requestAnimationFrame(S)
                    } else
                        a.current !== o.current && (a.current = o.current,
                            v(Math.round(a.current))),
                            l.current = !1
                }
                    , C = () => {
                        l.current || (l.current = !0,
                            c.current = requestAnimationFrame(S))
                    }
                    ;
                C();
                let ee = () => {
                    if (!p)
                        return;
                    let e = p.getBoundingClientRect()
                        , t = e.height - window.innerHeight
                        , n = 0;
                    t > 0 && (n = Math.max(0, Math.min(1, -e.top / t)));
                    let r = 1;
                    r = n <= .88 ? 1 + Math.floor(n / .88 * 213) : ne,
                        o.current !== r && (o.current = r,
                            C()),
                        r >= 140 || n >= .55 ? f(!0) : (f(!1),
                            n < .35 && (h.current = !1)),
                        r === ne && !h.current && (h.current = !0,
                            a.current = ne,
                            v(ne),
                            m(!0)),
                        g && (n > .03 ? (g.style.opacity = Math.max(0, 1 - n * 8),
                            g.style.pointerEvents = `none`) : (g.style.opacity = `1`,
                                g.style.pointerEvents = `auto`))
                }
                    ;
                return window.addEventListener(`scroll`, ee, {
                    passive: !0
                }),
                    ee(),
                    () => {
                        l.current = !1,
                            c.current && cancelAnimationFrame(c.current),
                            window.removeEventListener(`scroll`, ee)
                    }
            }
                , []),
        (0,
            x.jsx)(`section`, {
                className: `h-[300vh] w-full relative z-40 lego-dot-bg`,
                ref: t,
                children: (0,
                    x.jsxs)(`div`, {
                        className: `sticky top-0 h-screen w-full overflow-hidden flex flex-col items-center justify-center lego-dot-bg`,
                        children: [(0,
                            x.jsx)(`canvas`, {
                                className: `w-full h-full object-cover object-center pointer-events-none translate-y-8 md:translate-y-12`,
                                ref: e
                            }), (0,
                                x.jsx)(`div`, {
                                    className: `absolute inset-0 z-50 flex flex-col items-center justify-center transition-all duration-350 ease-out ${d ? `opacity-100 translate-y-8 md:translate-y-12 scale-100 pointer-events-auto` : `opacity-0 -translate-y-36 scale-95 pointer-events-none`}`,
                                    children: d && (0,
                                        x.jsx)(u.Suspense, {
                                            fallback: null,
                                            children: (0,
                                                x.jsx)(te, {
                                                    position: [0, 0, 20],
                                                    gravity: [0, -60, 0],
                                                    imageFit: `cover`,
                                                    lanyardWidth: 1
                                                })
                                        })
                                }), (0,
                                    x.jsxs)(`div`, {
                                        className: `absolute bottom-10 md:bottom-12 flex flex-col items-center gap-4 transition-opacity duration-300 pointer-events-none`,
                                        ref: n,
                                        children: [(0,
                                            x.jsx)(`span`, {
                                                className: `font-label-caps text-label-caps font-bold bg-white px-6 py-3 border-4 border-on-surface brick-shadow uppercase text-on-surface`,
                                                children: `Scroll to Build`
                                            }), (0,
                                                x.jsx)(`div`, {
                                                    className: `w-8 h-8 border-4 border-on-surface bg-white brick-shadow flex items-center justify-center animate-bounce`,
                                                    children: (0,
                                                        x.jsx)(`span`, {
                                                            className: `material-symbols-outlined text-primary text-[18px]`,
                                                            children: `arrow_downward`
                                                        })
                                                })]
                                    })]
                    })
            })
}
function ae() {
    return (0,
        x.jsxs)(`section`, {
            id: `home`,
            children: [(0,
                x.jsx)(ie, {}), (0,
                    x.jsx)(`div`, {
                        className: `relative w-full z-40 pointer-events-none select-none -mt-[14vw] md:-mt-[18vw] lg:-mt-[21vw] mb-[-3vw] leading-none overflow-hidden`,
                        children: (0,
                            x.jsx)(`img`, {
                                src: `/images/awan-section.png`,
                                alt: `Cloud Divider`,
                                className: `w-full h-auto block select-none`
                            })
                    })]
        })
}
var w = [{
    id: `racer`,
    name: `Red Racer`,
    primary: `#e52521`,
    secondary: `#ffd700`,
    accent: `#ffffff`,
    spoiler: `#1a1c1c`,
    number: `7`,
    roofText: ``,
    glowColor: `rgba(255, 215, 0, 0.4)`,
    flair: `🏎️`,
    hornFreq: [440, 554, 659]
}, {
    id: `taxi`,
    name: `City Taxi`,
    primary: `#ffcc00`,
    secondary: `#1a1c1c`,
    accent: `#ffffff`,
    spoiler: `#ffcc00`,
    number: `TAXI`,
    roofText: `TAXI`,
    glowColor: `rgba(255, 204, 0, 0.45)`,
    flair: `🚕`,
    hornFreq: [392, 523]
}, {
    id: `police`,
    name: `Police Cruiser`,
    primary: `#0055a4`,
    secondary: `#ffffff`,
    accent: `#1a1c1c`,
    spoiler: `#0055a4`,
    number: `POLICE`,
    roofText: `POLICE`,
    glowColor: `rgba(0, 140, 255, 0.5)`,
    flair: `🚓`,
    hornFreq: [600, 800, 600, 800]
}, {
    id: `turbo-green`,
    name: `Speed Green`,
    primary: `#00a651`,
    secondary: `#10b981`,
    accent: `#ffd700`,
    spoiler: `#1a1c1c`,
    number: `99`,
    roofText: ``,
    glowColor: `rgba(0, 255, 128, 0.45)`,
    flair: `🏎️💨`,
    hornFreq: [523, 659, 784]
}];
function oe(e = [440, 554], t = `horn`) {
    try {
        let n = window.AudioContext || window.webkitAudioContext;
        if (!n)
            return;
        let r = new n;
        if (t === `horn`)
            e.forEach((e, t) => {
                let n = r.createOscillator()
                    , i = r.createGain();
                n.type = `sawtooth`,
                    n.frequency.setValueAtTime(e, r.currentTime),
                    i.gain.setValueAtTime(.08, r.currentTime + t * .04),
                    i.gain.exponentialRampToValueAtTime(.001, r.currentTime + .16 + t * .04),
                    n.connect(i),
                    i.connect(r.destination),
                    n.start(r.currentTime + t * .04),
                    n.stop(r.currentTime + .18 + t * .04)
            }
            );
        else if (t === `turbo`) {
            let e = r.createOscillator()
                , t = r.createGain();
            e.type = `triangle`,
                e.frequency.setValueAtTime(220, r.currentTime),
                e.frequency.exponentialRampToValueAtTime(880, r.currentTime + .35),
                t.gain.setValueAtTime(.1, r.currentTime),
                t.gain.exponentialRampToValueAtTime(.001, r.currentTime + .35),
                e.connect(t),
                t.connect(r.destination),
                e.start(),
                e.stop(r.currentTime + .35)
        }
    } catch { }
}
function se({ targetRef: e }) {
    let [t, n] = (0,
        u.useState)(0)
        , [r, i] = (0,
            u.useState)(!1)
        , [a, o] = (0,
            u.useState)(!1)
        , [s, c] = (0,
            u.useState)(null)
        , [l, d] = (0,
            u.useState)([])
        , f = (0,
            u.useRef)({
                x: 0,
                y: 0,
                angle: 0,
                progress: 0
            })
        , p = (0,
            u.useRef)(null)
        , m = (0,
            u.useRef)(performance.now())
        , h = (0,
            u.useRef)(0)
        , g = (0,
            u.useRef)(null)
        , _ = (0,
            u.useRef)(null)
        , v = (0,
            u.useRef)(null)
        , [y, b] = (0,
            u.useState)({
                width: 380,
                height: 380,
                left: 0,
                top: 0
            })
        , S = w[t];
    (0,
        u.useEffect)(() => {
            let t = () => {
                let t = e?.current;
                if (!t)
                    return;
                let n = t.getBoundingClientRect()
                    , r = t.offsetLeft || 0
                    , i = t.offsetTop || 0
                    , a = t.offsetWidth || n.width || 380
                    , o = t.offsetHeight || n.height || 380;
                b({
                    left: r,
                    top: i,
                    width: a,
                    height: o
                })
            }
                ;
            t();
            let n = e?.current, r;
            return n && `ResizeObserver` in window && (r = new ResizeObserver(t),
                r.observe(n)),
                window.addEventListener(`resize`, t),
                () => {
                    r && r.disconnect(),
                        window.removeEventListener(`resize`, t)
                }
        }
            , [e]);
    let C = (0,
        u.useCallback)(e => {
            e && e.stopPropagation();
            let r = (t + 1) % w.length;
            n(r);
            let i = w[r];
            o(!0),
                _.current && clearTimeout(_.current),
                _.current = setTimeout(() => {
                    o(!1)
                }
                    , 2200),
                oe(i.hornFreq, `turbo`);
            let a = `${i.flair} ${i.name}!`;
            c(a),
                g.current && clearTimeout(g.current),
                g.current = setTimeout(() => {
                    c(null)
                }
                    , 2e3)
        }
            , [t]);
    return (0,
        u.useEffect)(() => {
            let e = 0
                , t = n => {
                    let i = Math.min(64, n - m.current);
                    m.current = n;
                    let { left: o, top: s, width: c, height: l } = y
                        , u = {
                            x: o - 4 + 8,
                            y: s - 4 + 8
                        }
                        , g = {
                            x: o + c + 4 - 8,
                            y: s - 4 + 8
                        }
                        , _ = {
                            x: o + c + 4 - 8,
                            y: s + l + 4 - 8
                        }
                        , b = {
                            x: o - 4 + 8,
                            y: s + l + 4 - 8
                        }
                        , x = Math.max(10, g.x - u.x)
                        , S = Math.max(10, _.y - g.y)
                        , C = Math.max(10, _.x - b.x)
                        , ee = Math.max(10, b.y - u.y)
                        , te = Math.PI / 2 * 8
                        , ne = x + te + S + te + C + te + ee + te
                        , re = 110;
                    a ? re = 300 : r && (re = 165);
                    let ie = re * i / 1e3 / ne
                        , ae = (f.current.progress + ie) % 1;
                    f.current.progress = ae;
                    let w = ae * ne
                        , oe = 0
                        , se = 0
                        , ce = 0
                        , le = x
                        , ue = le + te
                        , T = ue + S
                        , E = T + te
                        , de = E + C
                        , fe = de + te
                        , pe = fe + ee;
                    if (w < le) {
                        let e = w / x;
                        oe = u.x + e * (g.x - u.x),
                            se = s - 4,
                            ce = 0
                    } else if (w < ue) {
                        let e = (w - le) / te * (Math.PI / 2);
                        oe = g.x + 8 * Math.sin(e),
                            se = g.y - 8 * Math.cos(e),
                            ce = e * 180 / Math.PI
                    } else if (w < T) {
                        let e = (w - ue) / S;
                        oe = o + c + 4,
                            se = g.y + e * (_.y - g.y),
                            ce = 90
                    } else if (w < E) {
                        let e = (w - T) / te * (Math.PI / 2);
                        oe = _.x + 8 * Math.cos(e),
                            se = _.y + 8 * Math.sin(e),
                            ce = 90 + e * 180 / Math.PI
                    } else if (w < de) {
                        let e = (w - E) / C;
                        oe = _.x - e * (_.x - b.x),
                            se = s + l + 4,
                            ce = 180
                    } else if (w < fe) {
                        let e = (w - de) / te * (Math.PI / 2);
                        oe = b.x - 8 * Math.sin(e),
                            se = b.y + 8 * Math.cos(e),
                            ce = 180 + e * 180 / Math.PI
                    } else if (w < pe) {
                        let e = (w - fe) / ee;
                        oe = o - 4,
                            se = b.y - e * (b.y - u.y),
                            ce = 270
                    } else {
                        let e = (w - pe) / te * (Math.PI / 2);
                        oe = u.x - 8 * Math.cos(e),
                            se = u.y - 8 * Math.sin(e),
                            ce = 270 + e * 180 / Math.PI
                    }
                    f.current = {
                        x: oe,
                        y: se,
                        angle: ce,
                        progress: ae
                    },
                        v.current && (v.current.style.transform = `translate3d(${oe}px, ${se}px, 0px) translate(-50%, -50%) rotate(${ce}deg)`);
                    let me = a ? 45 : r ? 90 : 150;
                    if (n - e > me) {
                        e = n;
                        let t = ce * Math.PI / 180
                            , r = oe - Math.cos(t) * 30 + (Math.random() * 4 - 2)
                            , i = se - Math.sin(t) * 30 + (Math.random() * 4 - 2)
                            , o = ++h.current
                            , s = a && Math.random() > .3;
                        d(e => [...e.filter(e => n - e.createdAt < (e.isFlame ? 400 : 600)).map(e => {
                            let t = (n - e.createdAt) / (e.isFlame ? 400 : 600);
                            return {
                                ...e,
                                size: e.initialSize + t * (e.isFlame ? 8 : 14),
                                opacity: (1 - t) * .8
                            }
                        }
                        ).slice(-12), {
                            id: o,
                            x: r,
                            y: i,
                            createdAt: n,
                            initialSize: s ? 5 : 4,
                            size: s ? 5 : 4,
                            opacity: .8,
                            isFlame: s
                        }])
                    }
                    p.current = requestAnimationFrame(t)
                }
                ;
            return p.current = requestAnimationFrame(t),
                () => {
                    p.current && cancelAnimationFrame(p.current)
                }
        }
            , [y, 4, r, a]),
        (0,
            x.jsxs)(`div`, {
                className: `absolute inset-0 pointer-events-none z-20 select-none overflow-visible`,
                style: {
                    width: `100%`,
                    height: `100%`
                },
                children: [l.map(e => (0,
                    x.jsx)(`div`, {
                        className: `absolute rounded-full pointer-events-none -translate-x-1/2 -translate-y-1/2 transition-transform duration-75`,
                        style: {
                            left: `${e.x}px`,
                            top: `${e.y}px`,
                            width: `${e.size}px`,
                            height: `${e.size}px`,
                            backgroundColor: e.isFlame ? e.size < 8 ? `#ffd700` : `#ff4500` : `#cbd5e1`,
                            opacity: e.opacity,
                            border: e.isFlame ? `1px solid #e11d48` : `1px solid #64748b`,
                            boxShadow: e.isFlame ? `0 0 6px #ff4500` : `0 0 2px rgba(0,0,0,0.15)`,
                            zIndex: 18
                        }
                    }, e.id)), (0,
                        x.jsxs)(`div`, {
                            ref: v,
                            onClick: C,
                            onMouseEnter: () => i(!0),
                            onMouseLeave: () => i(!1),
                            className: `absolute top-0 left-0 pointer-events-auto cursor-pointer group will-change-transform z-30`,
                            style: {
                                width: `72px`,
                                height: `42px`,
                                touchAction: `manipulation`
                            },
                            title: `🏎️ Tap/Click to Honk & Turbo!`,
                            children: [s && (0,
                                x.jsxs)(`div`, {
                                    className: `absolute -top-11 left-1/2 -translate-x-1/2 bg-white text-on-surface border-2 border-on-surface px-2.5 py-0.5 font-label-caps font-bold text-[10px] shadow-[2px_2px_0px_0px_#1a1c1c] whitespace-nowrap animate-bounce z-50 rounded`,
                                    children: [(0,
                                        x.jsx)(`span`, {
                                            className: `text-primary`,
                                            children: s
                                        }), (0,
                                            x.jsx)(`div`, {
                                                className: `absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-0 h-0 border-l-[5px] border-l-transparent border-r-[5px] border-r-transparent border-t-[6px] border-t-on-surface`
                                            })]
                                }), (0,
                                    x.jsxs)(`svg`, {
                                        viewBox: `0 0 78 46`,
                                        className: `w-full h-full overflow-visible transition-transform duration-150 group-hover:scale-110 active:scale-95`,
                                        style: {
                                            filter: `drop-shadow(2px 3px 0px rgba(26,28,28,0.9))`
                                        },
                                        children: [(0,
                                            x.jsxs)(`defs`, {
                                                children: [(0,
                                                    x.jsxs)(`linearGradient`, {
                                                        id: `headlightBeam`,
                                                        x1: `0%`,
                                                        y1: `0%`,
                                                        x2: `100%`,
                                                        y2: `0%`,
                                                        children: [(0,
                                                            x.jsx)(`stop`, {
                                                                offset: `0%`,
                                                                stopColor: `#fff59d`,
                                                                stopOpacity: `0.8`
                                                            }), (0,
                                                                x.jsx)(`stop`, {
                                                                    offset: `60%`,
                                                                    stopColor: `#ffee58`,
                                                                    stopOpacity: `0.3`
                                                                }), (0,
                                                                    x.jsx)(`stop`, {
                                                                        offset: `100%`,
                                                                        stopColor: `#fff9c4`,
                                                                        stopOpacity: `0`
                                                                    })]
                                                    }), (0,
                                                        x.jsxs)(`linearGradient`, {
                                                            id: `windshieldGlass`,
                                                            x1: `0%`,
                                                            y1: `0%`,
                                                            x2: `100%`,
                                                            y2: `100%`,
                                                            children: [(0,
                                                                x.jsx)(`stop`, {
                                                                    offset: `0%`,
                                                                    stopColor: `#7dd3fc`
                                                                }), (0,
                                                                    x.jsx)(`stop`, {
                                                                        offset: `50%`,
                                                                        stopColor: `#38bdf8`
                                                                    }), (0,
                                                                        x.jsx)(`stop`, {
                                                                            offset: `100%`,
                                                                            stopColor: `#0284c7`
                                                                        })]
                                                        }), (0,
                                                            x.jsxs)(`linearGradient`, {
                                                                id: `studBevel`,
                                                                x1: `0%`,
                                                                y1: `0%`,
                                                                x2: `100%`,
                                                                y2: `100%`,
                                                                children: [(0,
                                                                    x.jsx)(`stop`, {
                                                                        offset: `0%`,
                                                                        stopColor: `rgba(255,255,255,0.6)`
                                                                    }), (0,
                                                                        x.jsx)(`stop`, {
                                                                            offset: `100%`,
                                                                            stopColor: `rgba(0,0,0,0.25)`
                                                                        })]
                                                            })]
                                            }), (0,
                                                x.jsxs)(`g`, {
                                                    className: `headlights-beam opacity-85`,
                                                    children: [(0,
                                                        x.jsx)(`polygon`, {
                                                            points: `70,11 125,-4 125,20 70,17`,
                                                            fill: `url(#headlightBeam)`,
                                                            className: `animate-pulse`
                                                        }), (0,
                                                            x.jsx)(`polygon`, {
                                                                points: `70,29 125,26 125,50 70,35`,
                                                                fill: `url(#headlightBeam)`,
                                                                className: `animate-pulse`
                                                            })]
                                                }), (0,
                                                    x.jsx)(`rect`, {
                                                        x: `48`,
                                                        y: `1`,
                                                        width: `17`,
                                                        height: `8`,
                                                        rx: `2.5`,
                                                        fill: `#111827`,
                                                        stroke: `#1a1c1c`,
                                                        strokeWidth: `2`
                                                    }), (0,
                                                        x.jsx)(`circle`, {
                                                            cx: `56.5`,
                                                            cy: `5`,
                                                            r: `2.2`,
                                                            fill: S.secondary,
                                                            stroke: `#1a1c1c`,
                                                            strokeWidth: `1`
                                                        }), (0,
                                                            x.jsx)(`rect`, {
                                                                x: `48`,
                                                                y: `37`,
                                                                width: `17`,
                                                                height: `8`,
                                                                rx: `2.5`,
                                                                fill: `#111827`,
                                                                stroke: `#1a1c1c`,
                                                                strokeWidth: `2`
                                                            }), (0,
                                                                x.jsx)(`circle`, {
                                                                    cx: `56.5`,
                                                                    cy: `41`,
                                                                    r: `2.2`,
                                                                    fill: S.secondary,
                                                                    stroke: `#1a1c1c`,
                                                                    strokeWidth: `1`
                                                                }), (0,
                                                                    x.jsx)(`rect`, {
                                                                        x: `11`,
                                                                        y: `1`,
                                                                        width: `17`,
                                                                        height: `8`,
                                                                        rx: `2.5`,
                                                                        fill: `#111827`,
                                                                        stroke: `#1a1c1c`,
                                                                        strokeWidth: `2`
                                                                    }), (0,
                                                                        x.jsx)(`circle`, {
                                                                            cx: `19.5`,
                                                                            cy: `5`,
                                                                            r: `2.2`,
                                                                            fill: S.secondary,
                                                                            stroke: `#1a1c1c`,
                                                                            strokeWidth: `1`
                                                                        }), (0,
                                                                            x.jsx)(`rect`, {
                                                                                x: `11`,
                                                                                y: `37`,
                                                                                width: `17`,
                                                                                height: `8`,
                                                                                rx: `2.5`,
                                                                                fill: `#111827`,
                                                                                stroke: `#1a1c1c`,
                                                                                strokeWidth: `2`
                                                                            }), (0,
                                                                                x.jsx)(`circle`, {
                                                                                    cx: `19.5`,
                                                                                    cy: `41`,
                                                                                    r: `2.2`,
                                                                                    fill: S.secondary,
                                                                                    stroke: `#1a1c1c`,
                                                                                    strokeWidth: `1`
                                                                                }), (0,
                                                                                    x.jsx)(`rect`, {
                                                                                        x: `6`,
                                                                                        y: `6`,
                                                                                        width: `64`,
                                                                                        height: `34`,
                                                                                        rx: `5`,
                                                                                        fill: S.primary,
                                                                                        stroke: `#1a1c1c`,
                                                                                        strokeWidth: `3.5`
                                                                                    }), (0,
                                                                                        x.jsx)(`rect`, {
                                                                                            x: `8`,
                                                                                            y: `18`,
                                                                                            width: `58`,
                                                                                            height: `10`,
                                                                                            fill: S.secondary,
                                                                                            stroke: `#1a1c1c`,
                                                                                            strokeWidth: `1.5`
                                                                                        }), (0,
                                                                                            x.jsx)(`rect`, {
                                                                                                x: `48`,
                                                                                                y: `9`,
                                                                                                width: `18`,
                                                                                                height: `28`,
                                                                                                rx: `3`,
                                                                                                fill: S.primary,
                                                                                                stroke: `#1a1c1c`,
                                                                                                strokeWidth: `2`
                                                                                            }), (0,
                                                                                                x.jsx)(`line`, {
                                                                                                    x1: `68`,
                                                                                                    y1: `18`,
                                                                                                    x2: `68`,
                                                                                                    y2: `28`,
                                                                                                    stroke: `#1a1c1c`,
                                                                                                    strokeWidth: `3`,
                                                                                                    strokeLinecap: `round`
                                                                                                }), (0,
                                                                                                    x.jsx)(`line`, {
                                                                                                        x1: `66`,
                                                                                                        y1: `16`,
                                                                                                        x2: `66`,
                                                                                                        y2: `30`,
                                                                                                        stroke: `#ffd700`,
                                                                                                        strokeWidth: `1.5`
                                                                                                    }), (0,
                                                                                                        x.jsx)(`circle`, {
                                                                                                            cx: `67`,
                                                                                                            cy: `12`,
                                                                                                            r: `3.5`,
                                                                                                            fill: `#fef08a`,
                                                                                                            stroke: `#1a1c1c`,
                                                                                                            strokeWidth: `1.8`
                                                                                                        }), (0,
                                                                                                            x.jsx)(`circle`, {
                                                                                                                cx: `67`,
                                                                                                                cy: `12`,
                                                                                                                r: `1.5`,
                                                                                                                fill: `#ffffff`
                                                                                                            }), (0,
                                                                                                                x.jsx)(`circle`, {
                                                                                                                    cx: `67`,
                                                                                                                    cy: `34`,
                                                                                                                    r: `3.5`,
                                                                                                                    fill: `#fef08a`,
                                                                                                                    stroke: `#1a1c1c`,
                                                                                                                    strokeWidth: `1.8`
                                                                                                                }), (0,
                                                                                                                    x.jsx)(`circle`, {
                                                                                                                        cx: `67`,
                                                                                                                        cy: `34`,
                                                                                                                        r: `1.5`,
                                                                                                                        fill: `#ffffff`
                                                                                                                    }), (0,
                                                                                                                        x.jsxs)(`g`, {
                                                                                                                            children: [(0,
                                                                                                                                x.jsx)(`circle`, {
                                                                                                                                    cx: `56`,
                                                                                                                                    cy: `15`,
                                                                                                                                    r: `3.2`,
                                                                                                                                    fill: S.primary,
                                                                                                                                    stroke: `#1a1c1c`,
                                                                                                                                    strokeWidth: `1.6`
                                                                                                                                }), (0,
                                                                                                                                    x.jsx)(`circle`, {
                                                                                                                                        cx: `56`,
                                                                                                                                        cy: `15`,
                                                                                                                                        r: `3.2`,
                                                                                                                                        fill: `url(#studBevel)`
                                                                                                                                    }), (0,
                                                                                                                                        x.jsx)(`circle`, {
                                                                                                                                            cx: `56`,
                                                                                                                                            cy: `31`,
                                                                                                                                            r: `3.2`,
                                                                                                                                            fill: S.primary,
                                                                                                                                            stroke: `#1a1c1c`,
                                                                                                                                            strokeWidth: `1.6`
                                                                                                                                        }), (0,
                                                                                                                                            x.jsx)(`circle`, {
                                                                                                                                                cx: `56`,
                                                                                                                                                cy: `31`,
                                                                                                                                                r: `3.2`,
                                                                                                                                                fill: `url(#studBevel)`
                                                                                                                                            })]
                                                                                                                        }), (0,
                                                                                                                            x.jsx)(`path`, {
                                                                                                                                d: `M 28 9 L 45 9 L 42 37 L 28 37 Z`,
                                                                                                                                fill: `url(#windshieldGlass)`,
                                                                                                                                stroke: `#1a1c1c`,
                                                                                                                                strokeWidth: `2.5`
                                                                                                                            }), (0,
                                                                                                                                x.jsx)(`line`, {
                                                                                                                                    x1: `33`,
                                                                                                                                    y1: `12`,
                                                                                                                                    x2: `41`,
                                                                                                                                    y2: `34`,
                                                                                                                                    stroke: `#ffffff`,
                                                                                                                                    strokeWidth: `1.8`,
                                                                                                                                    strokeLinecap: `round`,
                                                                                                                                    opacity: `0.85`
                                                                                                                                }), (0,
                                                                                                                                    x.jsx)(`circle`, {
                                                                                                                                        cx: `34`,
                                                                                                                                        cy: `23`,
                                                                                                                                        r: `5.5`,
                                                                                                                                        fill: `#facc15`,
                                                                                                                                        stroke: `#1a1c1c`,
                                                                                                                                        strokeWidth: `2`
                                                                                                                                    }), (0,
                                                                                                                                        x.jsx)(`path`, {
                                                                                                                                            d: `M 30 18 Q 34 16 38 18 L 38 23 L 30 23 Z`,
                                                                                                                                            fill: S.secondary,
                                                                                                                                            stroke: `#1a1c1c`,
                                                                                                                                            strokeWidth: `1.5`
                                                                                                                                        }), (0,
                                                                                                                                            x.jsx)(`circle`, {
                                                                                                                                                cx: `36`,
                                                                                                                                                cy: `22`,
                                                                                                                                                r: `0.9`,
                                                                                                                                                fill: `#1a1c1c`
                                                                                                                                            }), S.id === `police` ? (0,
                                                                                                                                                x.jsxs)(`g`, {
                                                                                                                                                    children: [(0,
                                                                                                                                                        x.jsx)(`rect`, {
                                                                                                                                                            x: `22`,
                                                                                                                                                            y: `14`,
                                                                                                                                                            width: `6`,
                                                                                                                                                            height: `18`,
                                                                                                                                                            rx: `2`,
                                                                                                                                                            fill: `#ffffff`,
                                                                                                                                                            stroke: `#1a1c1c`,
                                                                                                                                                            strokeWidth: `1.5`
                                                                                                                                                        }), (0,
                                                                                                                                                            x.jsx)(`rect`, {
                                                                                                                                                                x: `22`,
                                                                                                                                                                y: `14`,
                                                                                                                                                                width: `6`,
                                                                                                                                                                height: `8`,
                                                                                                                                                                rx: `1`,
                                                                                                                                                                fill: `#ef4444`,
                                                                                                                                                                className: `animate-pulse`
                                                                                                                                                            }), (0,
                                                                                                                                                                x.jsx)(`rect`, {
                                                                                                                                                                    x: `22`,
                                                                                                                                                                    y: `24`,
                                                                                                                                                                    width: `6`,
                                                                                                                                                                    height: `8`,
                                                                                                                                                                    rx: `1`,
                                                                                                                                                                    fill: `#3b82f6`,
                                                                                                                                                                    className: `animate-pulse`
                                                                                                                                                                })]
                                                                                                                                                }) : S.id === `taxi` ? (0,
                                                                                                                                                    x.jsxs)(`g`, {
                                                                                                                                                        children: [(0,
                                                                                                                                                            x.jsx)(`rect`, {
                                                                                                                                                                x: `20`,
                                                                                                                                                                y: `15`,
                                                                                                                                                                width: `8`,
                                                                                                                                                                height: `16`,
                                                                                                                                                                rx: `2`,
                                                                                                                                                                fill: `#ffffff`,
                                                                                                                                                                stroke: `#1a1c1c`,
                                                                                                                                                                strokeWidth: `2`
                                                                                                                                                            }), (0,
                                                                                                                                                                x.jsx)(`text`, {
                                                                                                                                                                    x: `24`,
                                                                                                                                                                    y: `26`,
                                                                                                                                                                    fontSize: `5`,
                                                                                                                                                                    fontWeight: `bold`,
                                                                                                                                                                    fontFamily: `sans-serif`,
                                                                                                                                                                    fill: `#1a1c1c`,
                                                                                                                                                                    textAnchor: `middle`,
                                                                                                                                                                    transform: `rotate(90 24 24)`,
                                                                                                                                                                    children: `TAXI`
                                                                                                                                                                })]
                                                                                                                                                    }) : (0,
                                                                                                                                                        x.jsxs)(`g`, {
                                                                                                                                                            children: [(0,
                                                                                                                                                                x.jsx)(`circle`, {
                                                                                                                                                                    cx: `20`,
                                                                                                                                                                    cy: `14`,
                                                                                                                                                                    r: `3`,
                                                                                                                                                                    fill: S.primary,
                                                                                                                                                                    stroke: `#1a1c1c`,
                                                                                                                                                                    strokeWidth: `1.5`
                                                                                                                                                                }), (0,
                                                                                                                                                                    x.jsx)(`circle`, {
                                                                                                                                                                        cx: `20`,
                                                                                                                                                                        cy: `14`,
                                                                                                                                                                        r: `3`,
                                                                                                                                                                        fill: `url(#studBevel)`
                                                                                                                                                                    }), (0,
                                                                                                                                                                        x.jsx)(`circle`, {
                                                                                                                                                                            cx: `20`,
                                                                                                                                                                            cy: `32`,
                                                                                                                                                                            r: `3`,
                                                                                                                                                                            fill: S.primary,
                                                                                                                                                                            stroke: `#1a1c1c`,
                                                                                                                                                                            strokeWidth: `1.5`
                                                                                                                                                                        }), (0,
                                                                                                                                                                            x.jsx)(`circle`, {
                                                                                                                                                                                cx: `20`,
                                                                                                                                                                                cy: `32`,
                                                                                                                                                                                r: `3`,
                                                                                                                                                                                fill: `url(#studBevel)`
                                                                                                                                                                            }), (0,
                                                                                                                                                                                x.jsx)(`text`, {
                                                                                                                                                                                    x: `20`,
                                                                                                                                                                                    y: `25`,
                                                                                                                                                                                    fontSize: `7`,
                                                                                                                                                                                    fontWeight: `900`,
                                                                                                                                                                                    fontFamily: `sans-serif`,
                                                                                                                                                                                    fill: `#ffffff`,
                                                                                                                                                                                    textAnchor: `middle`,
                                                                                                                                                                                    children: S.number
                                                                                                                                                                                })]
                                                                                                                                                        }), (0,
                                                                                                                                                            x.jsx)(`rect`, {
                                                                                                                                                                x: `4`,
                                                                                                                                                                y: `7`,
                                                                                                                                                                width: `6`,
                                                                                                                                                                height: `32`,
                                                                                                                                                                rx: `2`,
                                                                                                                                                                fill: S.spoiler,
                                                                                                                                                                stroke: `#1a1c1c`,
                                                                                                                                                                strokeWidth: `2.5`
                                                                                                                                                            }), (0,
                                                                                                                                                                x.jsx)(`rect`, {
                                                                                                                                                                    x: `5`,
                                                                                                                                                                    y: `10`,
                                                                                                                                                                    width: `3`,
                                                                                                                                                                    height: `5`,
                                                                                                                                                                    rx: `1`,
                                                                                                                                                                    fill: `#ef4444`,
                                                                                                                                                                    stroke: `#1a1c1c`,
                                                                                                                                                                    strokeWidth: `1`
                                                                                                                                                                }), (0,
                                                                                                                                                                    x.jsx)(`rect`, {
                                                                                                                                                                        x: `5`,
                                                                                                                                                                        y: `31`,
                                                                                                                                                                        width: `3`,
                                                                                                                                                                        height: `5`,
                                                                                                                                                                        rx: `1`,
                                                                                                                                                                        fill: `#ef4444`,
                                                                                                                                                                        stroke: `#1a1c1c`,
                                                                                                                                                                        strokeWidth: `1`
                                                                                                                                                                    }), (0,
                                                                                                                                                                        x.jsx)(`circle`, {
                                                                                                                                                                            cx: `4`,
                                                                                                                                                                            cy: `16`,
                                                                                                                                                                            r: `2.2`,
                                                                                                                                                                            fill: `#374151`,
                                                                                                                                                                            stroke: `#1a1c1c`,
                                                                                                                                                                            strokeWidth: `1.5`
                                                                                                                                                                        }), (0,
                                                                                                                                                                            x.jsx)(`circle`, {
                                                                                                                                                                                cx: `4`,
                                                                                                                                                                                cy: `30`,
                                                                                                                                                                                r: `2.2`,
                                                                                                                                                                                fill: `#374151`,
                                                                                                                                                                                stroke: `#1a1c1c`,
                                                                                                                                                                                strokeWidth: `1.5`
                                                                                                                                                                            })]
                                    }), a && (0,
                                        x.jsx)(`div`, {
                                            className: `absolute -inset-2 rounded-lg bg-yellow-400/20 blur-sm pointer-events-none animate-ping`
                                        })]
                        })]
            })
}
var ce = [{
    hover: `hover:bg-[#0055A4] hover:text-white hover:-rotate-3 hover:-translate-y-1.5 hover:shadow-[4px_4px_0px_0px_#1a1c1c]`
}, {
    hover: `hover:bg-brick-yellow hover:text-on-surface hover:rotate-3 hover:-translate-y-1.5 hover:shadow-[4px_4px_0px_0px_#1a1c1c]`
}, {
    hover: `hover:bg-[#00852B] hover:text-white hover:-rotate-2 hover:-translate-y-1.5 hover:shadow-[4px_4px_0px_0px_#1a1c1c]`
}, {
    hover: `hover:bg-primary hover:text-white hover:rotate-3 hover:-translate-y-1.5 hover:shadow-[4px_4px_0px_0px_#1a1c1c]`
}];
function le() {
    let e = (0,
        u.useRef)(null);
    return (0,
        x.jsx)(`section`, {
            className: `w-full max-w-[1600px] mx-auto px-6 md:px-12 lg:px-16 mb-32 pt-6`,
            children: (0,
                x.jsxs)(`div`, {
                    className: `grid grid-cols-1 md:grid-cols-12 gap-8 items-center`,
                    children: [(0,
                        x.jsxs)(`div`, {
                            className: `md:col-span-7 flex flex-col gap-6 reveal-left`,
                            children: [(0,
                                x.jsxs)(`div`, {
                                    className: `inline-flex items-center gap-2 px-4 py-2 bg-brick-yellow border-4 border-on-surface brick-shadow w-fit`,
                                    children: [(0,
                                        x.jsx)(`span`, {
                                            className: `w-3 h-3 rounded-full bg-primary animate-pulse border-2 border-on-surface`
                                        }), (0,
                                            x.jsx)(`span`, {
                                                className: `font-label-caps text-label-caps text-on-surface font-bold`,
                                                children: `STATUS: READY TO BUILD`
                                            })]
                                }), (0,
                                    x.jsxs)(`h1`, {
                                        className: `font-display-lg-mobile md:font-display-lg text-display-lg-mobile md:text-display-lg text-on-surface uppercase`,
                                        children: [`Muhammad daffa`, (0,
                                            x.jsx)(`br`, {}), (0,
                                                x.jsx)(`span`, {
                                                    className: `text-primary`,
                                                    children: `husen`
                                                })]
                                    }), (0,
                                        x.jsxs)(`div`, {
                                            className: `brick-card p-6 max-w-xl bg-white`,
                                            children: [(0,
                                                x.jsx)(`p`, {
                                                    className: `font-body-lg text-body-lg text-on-surface`,
                                                    children: p.description
                                                }), (0,
                                                    x.jsx)(`div`, {
                                                        className: `flex flex-wrap gap-2.5 mt-4`,
                                                        children: p.roles.map((e, t) => {
                                                            let n = ce[t % ce.length];
                                                            return (0,
                                                                x.jsx)(`span`, {
                                                                    className: `inline-block px-3 py-1.5 bg-surface-container border-2 border-on-surface font-label-caps text-[11px] font-bold text-on-surface cursor-pointer select-none transition-all duration-200 ease-out hover:scale-105 ${n.hover}`,
                                                                    children: e
                                                                }, e)
                                                        }
                                                        )
                                                    })]
                                        }), (0,
                                            x.jsx)(`div`, {
                                                className: `flex flex-wrap gap-4 mt-4`,
                                                children: (0,
                                                    x.jsxs)(`a`, {
                                                        className: `inline-flex items-center gap-2 px-6 py-3 bg-primary text-on-primary font-button-text text-button-text brick-btn uppercase relative cursor-pointer`,
                                                        href: `#projects`,
                                                        children: [(0,
                                                            x.jsxs)(`div`, {
                                                                className: `absolute -top-2 left-0 w-full flex justify-around px-2 pointer-events-none`,
                                                                children: [(0,
                                                                    x.jsx)(`span`, {
                                                                        className: `w-3 h-3 rounded-full bg-primary border-2 border-on-surface`
                                                                    }), (0,
                                                                        x.jsx)(`span`, {
                                                                            className: `w-3 h-3 rounded-full bg-primary border-2 border-on-surface`
                                                                        }), (0,
                                                                            x.jsx)(`span`, {
                                                                                className: `w-3 h-3 rounded-full bg-primary border-2 border-on-surface`
                                                                            })]
                                                            }), `VIEW PROJECTS`, ` `, (0,
                                                                x.jsx)(`span`, {
                                                                    className: `material-symbols-outlined text-[18px]`,
                                                                    children: `arrow_forward`
                                                                })]
                                                    })
                                            })]
                        }), (0,
                            x.jsxs)(`div`, {
                                className: `md:col-span-5 relative animate-float-hero reveal-right delay-150`,
                                children: [(0,
                                    x.jsxs)(`div`, {
                                        ref: e,
                                        className: `relative w-full aspect-[3/4] md:aspect-square border-4 border-on-surface brick-shadow bg-brick-blue select-none group`,
                                        children: [(0,
                                            x.jsx)(`div`, {
                                                className: `absolute -top-3.5 left-0 w-full flex justify-between px-3 pointer-events-none z-20`,
                                                children: [...[, , , , , ,]].map((e, t) => (0,
                                                    x.jsx)(`div`, {
                                                        className: `w-3.5 sm:w-4 h-3.5 sm:h-4 rounded-full bg-brick-yellow border-2 border-on-surface shadow-[1px_1px_0px_0px_#1a1c1c] relative flex items-center justify-center`,
                                                        children: (0,
                                                            x.jsx)(`span`, {
                                                                className: `w-1.5 h-1.5 rounded-full border border-black/30 bg-white/40`
                                                            })
                                                    }, t))
                                            }), (0,
                                                x.jsx)(`div`, {
                                                    className: `absolute -bottom-3.5 left-0 w-full flex justify-between px-3 pointer-events-none z-20`,
                                                    children: [...[, , , , , ,]].map((e, t) => (0,
                                                        x.jsx)(`div`, {
                                                            className: `w-3.5 sm:w-4 h-3.5 sm:h-4 rounded-full bg-primary border-2 border-on-surface shadow-[1px_1px_0px_0px_#1a1c1c] relative flex items-center justify-center`,
                                                            children: (0,
                                                                x.jsx)(`span`, {
                                                                    className: `w-1.5 h-1.5 rounded-full border border-black/30 bg-white/40`
                                                                })
                                                        }, t))
                                                }), (0,
                                                    x.jsx)(`div`, {
                                                        className: `absolute top-0 -left-3.5 h-full flex flex-col justify-between py-3 pointer-events-none z-20`,
                                                        children: [...[, , , , , ,]].map((e, t) => (0,
                                                            x.jsx)(`div`, {
                                                                className: `w-3.5 sm:w-4 h-3.5 sm:h-4 rounded-full bg-brick-blue border-2 border-on-surface shadow-[1px_1px_0px_0px_#1a1c1c] relative flex items-center justify-center`,
                                                                children: (0,
                                                                    x.jsx)(`span`, {
                                                                        className: `w-1.5 h-1.5 rounded-full border border-black/30 bg-white/40`
                                                                    })
                                                            }, t))
                                                    }), (0,
                                                        x.jsx)(`div`, {
                                                            className: `absolute top-0 -right-3.5 h-full flex flex-col justify-between py-3 pointer-events-none z-20`,
                                                            children: [...[, , , , , ,]].map((e, t) => (0,
                                                                x.jsx)(`div`, {
                                                                    className: `w-3.5 sm:w-4 h-3.5 sm:h-4 rounded-full bg-[#00852B] border-2 border-on-surface shadow-[1px_1px_0px_0px_#1a1c1c] relative flex items-center justify-center`,
                                                                    children: (0,
                                                                        x.jsx)(`span`, {
                                                                            className: `w-1.5 h-1.5 rounded-full border border-black/30 bg-white/40`
                                                                        })
                                                                }, t))
                                                        }), (0,
                                                            x.jsxs)(`div`, {
                                                                className: `relative w-full h-full overflow-hidden bg-brick-blue`,
                                                                children: [(0,
                                                                    x.jsx)(`img`, {
                                                                        alt: p.name,
                                                                        className: `w-full h-full object-cover transition-all duration-300`,
                                                                        src: p.heroImage
                                                                    }), (0,
                                                                        x.jsx)(`div`, {
                                                                            className: `absolute top-0 left-0 w-8 h-8 border-r-3 border-b-3 border-on-surface bg-brick-yellow pointer-events-none flex items-center justify-center shadow-[1px_1px_0px_0px_#1a1c1c] z-10`,
                                                                            children: (0,
                                                                                x.jsx)(`span`, {
                                                                                    className: `w-3 h-3 rounded-full border-2 border-on-surface bg-brick-yellow shadow-inner`
                                                                                })
                                                                        }), (0,
                                                                            x.jsx)(`div`, {
                                                                                className: `absolute top-0 right-0 w-8 h-8 border-l-3 border-b-3 border-on-surface bg-primary pointer-events-none flex items-center justify-center shadow-[-1px_1px_0px_0px_#1a1c1c] z-10`,
                                                                                children: (0,
                                                                                    x.jsx)(`span`, {
                                                                                        className: `w-3 h-3 rounded-full border-2 border-on-surface bg-primary shadow-inner`
                                                                                    })
                                                                            }), (0,
                                                                                x.jsx)(`div`, {
                                                                                    className: `absolute bottom-0 left-0 w-8 h-8 border-r-3 border-t-3 border-on-surface bg-[#00852B] pointer-events-none flex items-center justify-center shadow-[1px_-1px_0px_0px_#1a1c1c] z-10`,
                                                                                    children: (0,
                                                                                        x.jsx)(`span`, {
                                                                                            className: `w-3 h-3 rounded-full border-2 border-on-surface bg-[#00852B] shadow-inner`
                                                                                        })
                                                                                }), (0,
                                                                                    x.jsx)(`div`, {
                                                                                        className: `absolute bottom-0 right-0 w-8 h-8 border-l-3 border-t-3 border-on-surface bg-brick-blue pointer-events-none flex items-center justify-center shadow-[-1px_-1px_0px_0px_#1a1c1c] z-10`,
                                                                                        children: (0,
                                                                                            x.jsx)(`span`, {
                                                                                                className: `w-3 h-3 rounded-full border-2 border-on-surface bg-brick-blue shadow-inner`
                                                                                            })
                                                                                    })]
                                                            })]
                                    }), (0,
                                        x.jsx)(se, {
                                            targetRef: e
                                        }), (0,
                                            x.jsxs)(`div`, {
                                                className: `absolute top-6 right-2 sm:-right-3 md:-right-6 bg-brick-yellow px-3 sm:px-4 py-2 sm:py-2.5 border-3 sm:border-4 border-on-surface brick-shadow flex items-center gap-2 animate-float-badge-1 hover:scale-105 transition-transform duration-200 cursor-default z-30 select-none`,
                                                children: [(0,
                                                    x.jsxs)(`div`, {
                                                        className: `absolute -top-2 left-0 w-full flex justify-around px-2 pointer-events-none`,
                                                        children: [(0,
                                                            x.jsx)(`span`, {
                                                                className: `w-2 sm:w-2.5 h-2 sm:h-2.5 rounded-full bg-brick-yellow border-2 border-on-surface`
                                                            }), (0,
                                                                x.jsx)(`span`, {
                                                                    className: `w-2 sm:w-2.5 h-2 sm:h-2.5 rounded-full bg-brick-yellow border-2 border-on-surface`
                                                                }), (0,
                                                                    x.jsx)(`span`, {
                                                                        className: `w-2 sm:w-2.5 h-2 sm:h-2.5 rounded-full bg-brick-yellow border-2 border-on-surface`
                                                                    })]
                                                    }), (0,
                                                        x.jsx)(`span`, {
                                                            className: `material-symbols-outlined text-on-surface text-[18px] sm:text-[20px]`,
                                                            children: `brush`
                                                        }), (0,
                                                            x.jsx)(`span`, {
                                                                className: `font-label-caps text-[11px] sm:text-label-caps font-bold text-on-surface`,
                                                                children: `UI/UX & DEV`
                                                            })]
                                            }), (0,
                                                x.jsxs)(`div`, {
                                                    className: `absolute bottom-6 left-2 sm:-left-3 md:-left-6 bg-primary text-on-primary px-3 sm:px-4 py-2 sm:py-2.5 border-3 sm:border-4 border-on-surface brick-shadow flex items-center gap-2 font-label-caps text-[11px] sm:text-label-caps font-bold animate-float-badge-2 hover:scale-105 transition-transform duration-200 cursor-default z-30 select-none`,
                                                    children: [(0,
                                                        x.jsxs)(`div`, {
                                                            className: `absolute -top-2 left-0 w-full flex justify-around px-2 pointer-events-none`,
                                                            children: [(0,
                                                                x.jsx)(`span`, {
                                                                    className: `w-2 sm:w-2.5 h-2 sm:h-2.5 rounded-full bg-primary border-2 border-on-surface`
                                                                }), (0,
                                                                    x.jsx)(`span`, {
                                                                        className: `w-2 sm:w-2.5 h-2 sm:h-2.5 rounded-full bg-primary border-2 border-on-surface`
                                                                    }), (0,
                                                                        x.jsx)(`span`, {
                                                                            className: `w-2 sm:w-2.5 h-2 sm:h-2.5 rounded-full bg-primary border-2 border-on-surface`
                                                                        })]
                                                        }), (0,
                                                            x.jsx)(`span`, {
                                                                className: `material-symbols-outlined text-[18px] sm:text-[20px]`,
                                                                children: `psychology`
                                                            }), (0,
                                                                x.jsx)(`span`, {
                                                                    children: `MACHINE LEARNING`
                                                                })]
                                                })]
                            })]
                })
        })
}
function ue() {
    let e = [`CODE`, `DESIGN`, `BUILD`, `CODE`, `DESIGN`, `BUILD`, `CODE`, `DESIGN`, `BUILD`, `CODE`, `DESIGN`, `BUILD`]
        , t = [...e, ...e];
    return (0,
        x.jsx)(`div`, {
            className: `w-full border-y-4 border-on-surface bg-brick-yellow py-4 overflow-hidden mb-32 flex select-none brick-shadow`,
            children: (0,
                x.jsx)(`div`, {
                    className: `flex w-max shrink-0 items-center gap-8 whitespace-nowrap font-label-caps text-label-caps text-on-surface font-bold animate-marquee`,
                    children: t.map((e, t) => (0,
                        x.jsxs)(`span`, {
                            className: `flex items-center gap-8 shrink-0`,
                            children: [(0,
                                x.jsx)(`span`, {
                                    children: e
                                }), (0,
                                    x.jsx)(`span`, {
                                        className: `material-symbols-outlined text-[14px]`,
                                        children: `grid_view`
                                    })]
                        }, t))
                })
        })
}
function T({ isOpen: e, onClose: t, data: n, type: r }) {
    let [i, a] = (0,
        u.useState)(0);
    if ((0,
        u.useEffect)(() => {
            a(0)
        }
            , [n]),
        (0,
            u.useEffect)(() => {
                let n = e => {
                    e.key === `Escape` && t()
                }
                    ;
                return e && (window.addEventListener(`keydown`, n),
                    document.body.style.overflow = `hidden`,
                    window.lenis && window.lenis.stop()),
                    () => {
                        window.removeEventListener(`keydown`, n),
                            document.body.style.overflow = `unset`,
                            window.lenis && window.lenis.start()
                    }
            }
                , [e, t]),
        !e || !n)
        return null;
    let o = [];
    n.images && n.images.length > 0 ? o = n.images.filter(e => typeof e == `string` ? e : e.src) : n.image && (o = [{
        src: n.image,
        caption: n.title || n.name
    }]);
    let s = o[i]
        , c = typeof s == `string` ? s : s?.src
        , l = typeof s == `object` ? s?.caption : ``
        , d = n.title || n.degree || n.role || n.name || `Details`
        , f = n.institution || n.company || n.organization || n.issuer || n.category || ``
        , p = n.period || n.year || n.date || ``
        , m = n.location || ``
        , h = r === `education` ? `EDUCATION` : r === `experience` ? n.type || `EXPERIENCE` : r === `organization` ? `ORGANIZATION` : r === `certification` ? `CERTIFICATION` : r === `project` ? n.category?.toUpperCase() || `PROJECT` : `PORTFOLIO`
        , g = n.details || n.responsibilities || n.features || []
        , _ = n.technologies || [];
    return (0,
        x.jsxs)(`div`, {
            "data-lenis-prevent": !0,
            className: `fixed inset-0 z-[110] bg-on-background/75 backdrop-blur-sm flex items-center justify-center p-3 sm:p-4 md:p-6 overflow-y-auto animate-fadeIn`,
            children: [(0,
                x.jsx)(`div`, {
                    className: `fixed inset-0`,
                    onClick: t
                }), (0,
                    x.jsxs)(`div`, {
                        className: `relative z-10 w-full max-w-5xl max-h-[92vh] bg-surface border-4 border-on-surface brick-shadow rounded-2xl flex flex-col overflow-hidden my-auto animate-scaleUp`,
                        children: [(0,
                            x.jsxs)(`div`, {
                                className: `absolute -top-2.5 left-12 flex gap-4 pointer-events-none z-20`,
                                children: [(0,
                                    x.jsx)(`span`, {
                                        className: `w-3.5 h-3.5 rounded-full bg-brick-yellow border-2 border-on-surface shadow-sm`
                                    }), (0,
                                        x.jsx)(`span`, {
                                            className: `w-3.5 h-3.5 rounded-full bg-brick-yellow border-2 border-on-surface shadow-sm`
                                        }), (0,
                                            x.jsx)(`span`, {
                                                className: `w-3.5 h-3.5 rounded-full bg-brick-yellow border-2 border-on-surface shadow-sm`
                                            })]
                            }), (0,
                                x.jsxs)(`div`, {
                                    className: `bg-surface-container-high border-b-4 border-on-surface px-4 md:px-6 py-3 flex items-center justify-between select-none`,
                                    children: [(0,
                                        x.jsxs)(`div`, {
                                            className: `flex items-center gap-3`,
                                            children: [(0,
                                                x.jsxs)(`div`, {
                                                    className: `flex items-center gap-1.5`,
                                                    children: [(0,
                                                        x.jsx)(`button`, {
                                                            onClick: t,
                                                            className: `w-3.5 h-3.5 rounded-full bg-primary border-2 border-on-surface hover:opacity-80 transition-opacity cursor-pointer`,
                                                            title: `Close`
                                                        }), (0,
                                                            x.jsx)(`span`, {
                                                                className: `w-3.5 h-3.5 rounded-full bg-brick-yellow border-2 border-on-surface`
                                                            }), (0,
                                                                x.jsx)(`span`, {
                                                                    className: `w-3.5 h-3.5 rounded-full bg-brick-blue border-2 border-on-surface`
                                                                })]
                                                }), (0,
                                                    x.jsxs)(`span`, {
                                                        className: `font-label-caps text-[11px] md:text-xs font-bold text-on-surface tracking-wider truncate max-w-[200px] sm:max-w-[340px] md:max-w-none`,
                                                        children: [`PORTFOLIO_VIEWER // `, d.toUpperCase()]
                                                    })]
                                        }), (0,
                                            x.jsxs)(`div`, {
                                                className: `flex items-center gap-3`,
                                                children: [(0,
                                                    x.jsx)(`span`, {
                                                        className: `bg-on-surface text-white px-2.5 py-0.5 text-[10px] font-label-caps font-bold tracking-wider uppercase border border-white/30`,
                                                        children: h
                                                    }), (0,
                                                        x.jsx)(`button`, {
                                                            onClick: t,
                                                            className: `w-7 h-7 border-2 border-on-surface bg-white hover:bg-primary hover:text-white flex items-center justify-center transition-colors font-bold text-sm brick-shadow cursor-pointer`,
                                                            "aria-label": `Close modal`,
                                                            children: `✕`
                                                        })]
                                            })]
                                }), (0,
                                    x.jsxs)(`div`, {
                                        "data-lenis-prevent": !0,
                                        className: `flex-1 overflow-y-auto grid grid-cols-1 lg:grid-cols-12 bg-white`,
                                        children: [(0,
                                            x.jsx)(`div`, {
                                                className: `lg:col-span-6 bg-[#1f2123] border-b-4 lg:border-b-0 lg:border-r-4 border-on-surface p-4 sm:p-6 flex flex-col justify-between items-center min-h-[300px] lg:min-h-[480px]`,
                                                children: o.length > 0 && c ? (0,
                                                    x.jsxs)(`div`, {
                                                        className: `w-full h-full flex flex-col justify-between items-center gap-3`,
                                                        children: [(0,
                                                            x.jsxs)(`div`, {
                                                                className: `w-full flex justify-between items-center`,
                                                                children: [(0,
                                                                    x.jsxs)(`span`, {
                                                                        className: `bg-black/60 text-white border border-white/30 px-2.5 py-0.5 text-xs font-mono font-bold rounded`,
                                                                        children: [i + 1, ` / `, o.length]
                                                                    }), l && (0,
                                                                        x.jsx)(`span`, {
                                                                            className: `text-white/80 text-xs font-label-caps truncate max-w-[200px]`,
                                                                            children: l
                                                                        })]
                                                            }), (0,
                                                                x.jsx)(`div`, {
                                                                    className: `relative w-full flex-1 flex items-center justify-center min-h-[220px] max-h-[360px] lg:max-h-[420px] overflow-hidden rounded-lg border-2 border-white/20 bg-black/40 p-1`,
                                                                    children: (0,
                                                                        x.jsx)(`img`, {
                                                                            src: c,
                                                                            alt: l || d,
                                                                            className: `w-full h-full object-contain max-h-[340px] rounded`,
                                                                            onError: e => {
                                                                                e.currentTarget.src = `/images/profile-hero.jpg`
                                                                            }
                                                                        })
                                                                }), o.length > 1 && (0,
                                                                    x.jsxs)(`div`, {
                                                                        className: `flex items-center gap-3 mt-2`,
                                                                        children: [(0,
                                                                            x.jsx)(`button`, {
                                                                                onClick: () => a(e => e === 0 ? o.length - 1 : e - 1),
                                                                                className: `px-3 py-1 bg-white border-2 border-on-surface text-on-surface text-xs font-bold uppercase brick-shadow hover:bg-brick-yellow cursor-pointer`,
                                                                                children: `← PREV`
                                                                            }), (0,
                                                                                x.jsx)(`div`, {
                                                                                    className: `flex gap-1.5`,
                                                                                    children: o.map((e, t) => (0,
                                                                                        x.jsx)(`button`, {
                                                                                            onClick: () => a(t),
                                                                                            className: `w-2.5 h-2.5 rounded-full border border-white transition-all ${i === t ? `bg-brick-yellow w-5` : `bg-white/40`}`
                                                                                        }, t))
                                                                                }), (0,
                                                                                    x.jsx)(`button`, {
                                                                                        onClick: () => a(e => e === o.length - 1 ? 0 : e + 1),
                                                                                        className: `px-3 py-1 bg-white border-2 border-on-surface text-on-surface text-xs font-bold uppercase brick-shadow hover:bg-brick-yellow cursor-pointer`,
                                                                                        children: `NEXT →`
                                                                                    })]
                                                                    })]
                                                    }) : (0,
                                                        x.jsxs)(`div`, {
                                                            className: `w-full h-full flex flex-col items-center justify-center gap-4 text-white/60 p-8 text-center my-auto`,
                                                            children: [(0,
                                                                x.jsx)(`div`, {
                                                                    className: `w-20 h-20 rounded-2xl bg-surface-container border-2 border-white/20 flex items-center justify-center text-white`,
                                                                    children: (0,
                                                                        x.jsx)(`span`, {
                                                                            className: `material-symbols-outlined text-[48px] text-primary`,
                                                                            children: r === `education` ? `school` : r === `certification` ? `workspace_premium` : r === `organization` ? `groups` : `work`
                                                                        })
                                                                }), (0,
                                                                    x.jsx)(`div`, {
                                                                        className: `font-label-caps text-sm text-white/80 uppercase font-bold`,
                                                                        children: f || d
                                                                    }), (0,
                                                                        x.jsxs)(`p`, {
                                                                            className: `text-xs text-white/50 max-w-xs`,
                                                                            children: [`Official verified record from `, E(n)]
                                                                        })]
                                                        })
                                            }), (0,
                                                x.jsxs)(`div`, {
                                                    className: `lg:col-span-6 p-6 md:p-8 flex flex-col gap-5 overflow-y-auto max-h-[70vh] lg:max-h-[560px]`,
                                                    children: [p && (0,
                                                        x.jsx)(`div`, {
                                                            className: `inline-block bg-brick-yellow border-2 border-on-surface px-3 py-0.5 text-xs font-label-caps font-bold text-on-surface w-fit brick-shadow`,
                                                            children: p
                                                        }), (0,
                                                            x.jsxs)(`div`, {
                                                                children: [(0,
                                                                    x.jsx)(`h2`, {
                                                                        className: `font-display-lg-mobile md:font-display-lg text-on-surface uppercase font-black text-xl md:text-2xl leading-tight`,
                                                                        children: d
                                                                    }), (0,
                                                                        x.jsxs)(`div`, {
                                                                            className: `flex flex-wrap items-center gap-3 mt-1.5 text-sm font-bold text-on-surface font-label-caps`,
                                                                            children: [f && (0,
                                                                                x.jsx)(`span`, {
                                                                                    className: `text-primary`,
                                                                                    children: f
                                                                                }), m && (0,
                                                                                    x.jsxs)(`span`, {
                                                                                        className: `text-on-surface-variant flex items-center gap-1 text-xs`,
                                                                                        children: [(0,
                                                                                            x.jsx)(`span`, {
                                                                                                className: `material-symbols-outlined text-[14px]`,
                                                                                                children: `location_on`
                                                                                            }), m]
                                                                                    })]
                                                                        })]
                                                            }), n.description && (0,
                                                                x.jsx)(`div`, {
                                                                    className: `p-4 bg-surface-container border-l-4 border-primary rounded-r-lg`,
                                                                    children: (0,
                                                                        x.jsx)(`p`, {
                                                                            className: `font-body-md text-on-surface text-[13px] md:text-sm leading-relaxed`,
                                                                            children: n.description
                                                                        })
                                                                }), n.problem && (0,
                                                                    x.jsxs)(`div`, {
                                                                        className: `flex flex-col gap-2`,
                                                                        children: [(0,
                                                                            x.jsx)(`h4`, {
                                                                                className: `font-label-caps text-xs font-bold text-primary uppercase`,
                                                                                children: `Problem Context:`
                                                                            }), (0,
                                                                                x.jsx)(`p`, {
                                                                                    className: `font-body-md text-on-surface text-xs md:text-[13px] leading-relaxed`,
                                                                                    children: n.problem
                                                                                })]
                                                                    }), n.solution && (0,
                                                                        x.jsxs)(`div`, {
                                                                            className: `flex flex-col gap-2`,
                                                                            children: [(0,
                                                                                x.jsx)(`h4`, {
                                                                                    className: `font-label-caps text-xs font-bold text-brick-blue uppercase`,
                                                                                    children: `Engineered Solution:`
                                                                                }), (0,
                                                                                    x.jsx)(`p`, {
                                                                                        className: `font-body-md text-on-surface text-xs md:text-[13px] leading-relaxed`,
                                                                                        children: n.solution
                                                                                    })]
                                                                        }), g.length > 0 && (0,
                                                                            x.jsxs)(`div`, {
                                                                                className: `flex flex-col gap-2.5 pt-2`,
                                                                                children: [(0,
                                                                                    x.jsxs)(`h4`, {
                                                                                        className: `font-label-caps text-xs font-black text-on-surface uppercase flex items-center gap-1.5`,
                                                                                        children: [(0,
                                                                                            x.jsx)(`span`, {
                                                                                                className: `material-symbols-outlined text-primary text-[16px]`,
                                                                                                children: `check_circle`
                                                                                            }), `KEY HIGHLIGHTS & DETAILS:`]
                                                                                    }), (0,
                                                                                        x.jsx)(`ul`, {
                                                                                            className: `space-y-2 text-xs md:text-[13px] text-on-surface`,
                                                                                            children: g.map((e, t) => (0,
                                                                                                x.jsxs)(`li`, {
                                                                                                    className: `flex items-start gap-2`,
                                                                                                    children: [(0,
                                                                                                        x.jsx)(`span`, {
                                                                                                            className: `text-primary font-bold mt-0.5`,
                                                                                                            children: `■`
                                                                                                        }), (0,
                                                                                                            x.jsx)(`span`, {
                                                                                                                className: `leading-relaxed`,
                                                                                                                children: e
                                                                                                            })]
                                                                                                }, t))
                                                                                        })]
                                                                            }), _.length > 0 && (0,
                                                                                x.jsxs)(`div`, {
                                                                                    className: `flex flex-col gap-2 pt-2 border-t-2 border-surface-container`,
                                                                                    children: [(0,
                                                                                        x.jsxs)(`h4`, {
                                                                                            className: `font-label-caps text-xs font-black text-on-surface uppercase flex items-center gap-1.5`,
                                                                                            children: [(0,
                                                                                                x.jsx)(`span`, {
                                                                                                    className: `material-symbols-outlined text-brick-blue text-[16px]`,
                                                                                                    children: `terminal`
                                                                                                }), `TECHNOLOGIES & ARSENAL:`]
                                                                                        }), (0,
                                                                                            x.jsx)(`div`, {
                                                                                                className: `flex flex-wrap gap-1.5`,
                                                                                                children: _.map(e => (0,
                                                                                                    x.jsx)(`span`, {
                                                                                                        className: `px-2.5 py-1 bg-surface-container border-2 border-on-surface text-[11px] font-label-caps font-bold text-on-surface`,
                                                                                                        children: e
                                                                                                    }, e))
                                                                                            })]
                                                                                }), n.credentialId && (0,
                                                                                    x.jsxs)(`div`, {
                                                                                        className: `pt-2 border-t border-surface-container flex items-center gap-2 text-xs font-label-caps text-on-surface-variant font-bold`,
                                                                                        children: [(0,
                                                                                            x.jsx)(`span`, {
                                                                                                children: `CREDENTIAL ID:`
                                                                                            }), (0,
                                                                                                x.jsx)(`span`, {
                                                                                                    className: `font-mono text-on-surface bg-surface-container px-2 py-0.5 border border-on-surface`,
                                                                                                    children: n.credentialId
                                                                                                })]
                                                                                    }), n.links && (n.links.github || n.links.demo) && (0,
                                                                                        x.jsxs)(`div`, {
                                                                                            className: `flex flex-wrap gap-3 pt-4 border-t-2 border-on-surface mt-auto`,
                                                                                            children: [n.links.github && (0,
                                                                                                x.jsxs)(`a`, {
                                                                                                    href: n.links.github,
                                                                                                    target: `_blank`,
                                                                                                    rel: `noopener noreferrer`,
                                                                                                    className: `inline-flex items-center gap-1.5 px-4 py-2 bg-on-surface text-white font-button-text text-xs uppercase brick-shadow hover:bg-primary transition-colors cursor-pointer`,
                                                                                                    children: [(0,
                                                                                                        x.jsx)(`span`, {
                                                                                                            children: `GITHUB REPO`
                                                                                                        }), (0,
                                                                                                            x.jsx)(`span`, {
                                                                                                                className: `material-symbols-outlined text-[14px]`,
                                                                                                                children: `open_in_new`
                                                                                                            })]
                                                                                                }), n.links.demo && (0,
                                                                                                    x.jsxs)(`a`, {
                                                                                                        href: n.links.demo,
                                                                                                        target: `_blank`,
                                                                                                        rel: `noopener noreferrer`,
                                                                                                        className: `inline-flex items-center gap-1.5 px-4 py-2 bg-brick-yellow text-on-surface border-2 border-on-surface font-button-text text-xs uppercase brick-shadow hover:bg-yellow-300 transition-colors cursor-pointer`,
                                                                                                        children: [(0,
                                                                                                            x.jsx)(`span`, {
                                                                                                                children: n.links.demo.includes(`figma.com`) ? `FIGMA PROTOTYPE` : `LIVE DEMO`
                                                                                                            }), (0,
                                                                                                                x.jsx)(`span`, {
                                                                                                                    className: `material-symbols-outlined text-[14px]`,
                                                                                                                    children: `launch`
                                                                                                                })]
                                                                                                    })]
                                                                                        })]
                                                })]
                                    }), (0,
                                        x.jsxs)(`div`, {
                                            className: `bg-surface border-t-4 border-on-surface px-4 md:px-6 py-3 flex items-center justify-between select-none`,
                                            children: [(0,
                                                x.jsx)(`div`, {
                                                    className: `font-label-caps text-[10px] md:text-xs text-on-surface-variant font-bold uppercase`,
                                                    children: `PORTFOLIO SHOWCASE // MUHAMMAD DAFFA HUSEN`
                                                }), (0,
                                                    x.jsx)(`button`, {
                                                        onClick: t,
                                                        className: `px-4 py-1.5 bg-primary text-white border-2 border-on-surface font-button-text text-xs uppercase brick-btn cursor-pointer`,
                                                        children: `CLOSE`
                                                    })]
                                        })]
                    })]
        })
}
function E(e) {
    return e.institution || e.company || e.organization || e.issuer || `Muhammad Daffa Husen`
}
function de({ target: e, suffix: t = ``, duration: n = 1400 }) {
    let [r, i] = (0,
        u.useState)(0)
        , a = (0,
            u.useRef)(null)
        , o = (0,
            u.useRef)(!1)
        , s = (t = n) => {
            let r = null
                , a = n => {
                    r ||= n;
                    let o = n - r
                        , s = Math.min(o / t, 1)
                        , c = 1 - (1 - s) ** 3
                        , l = Math.floor(c * e);
                    i(l),
                        s < 1 ? requestAnimationFrame(a) : i(e)
                }
                ;
            requestAnimationFrame(a)
        }
        ;
    return (0,
        u.useEffect)(() => {
            let e = a.current;
            if (!e)
                return;
            let t = new IntersectionObserver(n => {
                n.forEach(n => {
                    n.isIntersecting && !o.current && (o.current = !0,
                        s(),
                        t.unobserve(e))
                }
                )
            }
                , {
                    threshold: .15
                });
            return t.observe(e),
                () => t.disconnect()
        }
            , [e, n]),
        (0,
            x.jsxs)(`span`, {
                ref: a,
                onMouseEnter: () => s(700),
                className: `tabular-nums font-extrabold select-none inline-block transition-transform group-hover:scale-110`,
                title: `Hover to spin again!`,
                children: [r, t]
            })
}
var fe = [{
    value: 12,
    suffix: `+`,
    label: `Projects Completed`,
    delay: `delay-100`,
    duration: 1200
}, {
    value: 3,
    suffix: `+`,
    label: `Years of Experience`,
    delay: `delay-200`,
    duration: 1e3
}, {
    value: 15,
    suffix: `+`,
    label: `Tech Mastered`,
    delay: `delay-300`,
    duration: 1400
}, {
    value: 100,
    suffix: `%`,
    label: `Passion for Code`,
    delay: `delay-400`,
    duration: 1700
}];
function pe() {
    let [e, t] = (0,
        u.useState)(null);
    return (0,
        x.jsxs)(`section`, {
            className: `w-full max-w-[1600px] mx-auto px-6 md:px-12 lg:px-16 mb-32`,
            children: [(0,
                x.jsx)(`div`, {
                    className: `flex flex-col gap-12`,
                    children: (0,
                        x.jsxs)(`div`, {
                            className: `flex flex-col gap-6`,
                            children: [(0,
                                x.jsx)(`h2`, {
                                    className: `font-headline-md text-headline-md text-on-surface bg-brick-yellow border-4 border-on-surface px-4 py-2 inline-block w-fit brick-shadow uppercase reveal-pop`,
                                    children: `ABOUT ME`
                                }), (0,
                                    x.jsxs)(`div`, {
                                        className: `grid grid-cols-1 lg:grid-cols-2 gap-12`,
                                        children: [(0,
                                            x.jsxs)(`div`, {
                                                className: `brick-card p-8 bg-white h-full flex flex-col justify-center relative reveal-left delay-100`,
                                                children: [(0,
                                                    x.jsxs)(`div`, {
                                                        className: `absolute -top-3 left-4 flex gap-4 px-2 pointer-events-none`,
                                                        children: [(0,
                                                            x.jsx)(`span`, {
                                                                className: `w-4 h-4 rounded-full bg-white border-2 border-on-surface z-10`
                                                            }), (0,
                                                                x.jsx)(`span`, {
                                                                    className: `w-4 h-4 rounded-full bg-white border-2 border-on-surface z-10`
                                                                }), (0,
                                                                    x.jsx)(`span`, {
                                                                        className: `w-4 h-4 rounded-full bg-white border-2 border-on-surface z-10`
                                                                    })]
                                                    }), (0,
                                                        x.jsx)(`h3`, {
                                                            className: `font-display-lg-mobile text-primary uppercase font-extrabold mb-3`,
                                                            children: p.about.intro
                                                        }), (0,
                                                            x.jsx)(`p`, {
                                                                className: `font-body-md text-body-md text-on-surface mb-4 leading-relaxed`,
                                                                children: p.about.description
                                                            }), (0,
                                                                x.jsxs)(`div`, {
                                                                    className: `mt-auto pt-4 border-t-2 border-on-surface flex items-center gap-2 text-xs font-bold text-on-surface-variant font-label-caps`,
                                                                    children: [(0,
                                                                        x.jsx)(`span`, {
                                                                            className: `material-symbols-outlined text-primary text-[18px]`,
                                                                            children: `location_on`
                                                                        }), p.location]
                                                                })]
                                            }), (0,
                                                x.jsxs)(`div`, {
                                                    className: `flex flex-col gap-6 reveal-right delay-150`,
                                                    children: [(0,
                                                        x.jsx)(`h3`, {
                                                            className: `font-button-text text-button-text text-on-surface bg-surface-container-high border-4 border-on-surface px-4 py-2 inline-block w-fit uppercase`,
                                                            children: `EDUCATION`
                                                        }), (0,
                                                            x.jsx)(`div`, {
                                                                className: `flex flex-col gap-4`,
                                                                children: g.map((e, n) => (0,
                                                                    x.jsxs)(`div`, {
                                                                        className: `brick-card p-6 relative bg-white flex gap-4 items-start group reveal-pop delay-${(n + 1) * 100}`,
                                                                        children: [(0,
                                                                            x.jsx)(`div`, {
                                                                                className: `w-16 h-16 border-3 border-on-surface bg-white rounded-xl flex-shrink-0 overflow-hidden flex items-center justify-center p-2 brick-shadow`,
                                                                                children: e.logo ? (0,
                                                                                    x.jsx)(`img`, {
                                                                                        src: e.logo,
                                                                                        alt: e.institution,
                                                                                        className: `w-full h-full object-contain`
                                                                                    }) : (0,
                                                                                        x.jsx)(`span`, {
                                                                                            className: `material-symbols-outlined text-primary text-[28px]`,
                                                                                            children: `school`
                                                                                        })
                                                                            }), (0,
                                                                                x.jsxs)(`div`, {
                                                                                    className: `flex-grow min-w-0`,
                                                                                    children: [(0,
                                                                                        x.jsxs)(`div`, {
                                                                                            className: `flex flex-wrap md:flex-row md:justify-between md:items-start gap-1 mb-1`,
                                                                                            children: [(0,
                                                                                                x.jsx)(`h4`, {
                                                                                                    className: `font-headline-md text-on-surface uppercase text-[16px] md:text-[18px] leading-snug break-words`,
                                                                                                    children: e.institution
                                                                                                }), (0,
                                                                                                    x.jsx)(`div`, {
                                                                                                        className: `bg-brick-yellow border-2 border-on-surface px-2 py-1 font-label-caps font-bold text-[10px] text-on-surface w-fit flex-shrink-0`,
                                                                                                        children: e.period
                                                                                                    })]
                                                                                        }), (0,
                                                                                            x.jsx)(`div`, {
                                                                                                className: `font-button-text text-primary uppercase text-[13px] md:text-[14px] leading-snug break-words`,
                                                                                                children: e.degree
                                                                                            }), (0,
                                                                                                x.jsx)(`p`, {
                                                                                                    className: `mt-2 font-body-md text-on-surface text-[13px] leading-relaxed line-clamp-2`,
                                                                                                    children: e.description
                                                                                                }), (0,
                                                                                                    x.jsxs)(`button`, {
                                                                                                        type: `button`,
                                                                                                        onClick: () => t(e),
                                                                                                        className: `mt-3 inline-flex items-center gap-1.5 px-3 py-1 bg-surface text-on-surface border-2 border-on-surface font-label-caps text-[11px] font-bold uppercase brick-btn cursor-pointer`,
                                                                                                        children: [(0,
                                                                                                            x.jsx)(`span`, {
                                                                                                                children: `VIEW DETAILS`
                                                                                                            }), (0,
                                                                                                                x.jsx)(`span`, {
                                                                                                                    className: `material-symbols-outlined text-[14px]`,
                                                                                                                    children: `arrow_forward`
                                                                                                                })]
                                                                                                    })]
                                                                                })]
                                                                    }, e.id))
                                                            }), (0,
                                                                x.jsx)(`div`, {
                                                                    className: `grid grid-cols-2 sm:grid-cols-4 gap-3 mt-auto`,
                                                                    children: fe.map(e => (0,
                                                                        x.jsxs)(`div`, {
                                                                            className: `brick-card p-3 sm:p-4 text-center bg-white text-on-surface hover:-translate-y-1 hover:shadow-[6px_6px_0px_0px_#1a1c1c] transition-all group reveal-pop ${e.delay} cursor-default`,
                                                                            children: [(0,
                                                                                x.jsx)(`div`, {
                                                                                    className: `font-headline-md text-[22px] sm:text-[26px] font-extrabold text-on-surface mb-0.5`,
                                                                                    children: (0,
                                                                                        x.jsx)(de, {
                                                                                            target: e.value,
                                                                                            suffix: e.suffix,
                                                                                            duration: e.duration
                                                                                        })
                                                                                }), (0,
                                                                                    x.jsx)(`div`, {
                                                                                        className: `font-label-caps text-[10px] sm:text-[11px] text-on-surface-variant font-bold uppercase leading-tight`,
                                                                                        children: e.label
                                                                                    })]
                                                                        }, e.label))
                                                                })]
                                                })]
                                    })]
                        })
                }), (0,
                    x.jsx)(T, {
                        isOpen: !!e,
                        onClose: () => t(null),
                        data: e,
                        type: `education`
                    })]
        })
}
var me = 4
    , D = 4;
function O() {
    let [e, t] = (0,
        u.useState)(!1)
        , [n, r] = (0,
            u.useState)(!1)
        , [i, a] = (0,
            u.useState)(null)
        , [o, s] = (0,
            u.useState)(`experience`)
        , c = e ? h : h.slice(0, me)
        , l = h.length - me
        , d = n ? _ : _.slice(0, D)
        , f = _.length - D
        , p = (e, t) => {
            a(e),
                s(t)
        }
        ;
    return (0,
        x.jsxs)(`div`, {
            className: `w-full max-w-[1600px] mx-auto px-6 md:px-12 lg:px-16`,
            children: [(0,
                x.jsxs)(`div`, {
                    className: `mt-12`,
                    children: [(0,
                        x.jsx)(`h3`, {
                            className: `font-button-text text-button-text text-on-surface bg-surface-container-high border-4 border-on-surface px-4 py-2 inline-block w-fit uppercase mb-6 brick-shadow reveal-left`,
                            children: `EXPERIENCE`
                        }), (0,
                            x.jsx)(`div`, {
                                className: `grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8`,
                                children: c.map((e, t) => (0,
                                    x.jsxs)(`div`, {
                                        className: `brick-card p-8 relative bg-white flex flex-col gap-5 justify-between group reveal-pop delay-${(t % 4 + 1) * 100}`,
                                        children: [(0,
                                            x.jsxs)(`div`, {
                                                children: [(0,
                                                    x.jsxs)(`div`, {
                                                        className: `flex gap-6 items-start`,
                                                        children: [(0,
                                                            x.jsx)(`div`, {
                                                                className: `w-16 h-16 border-3 border-on-surface bg-white rounded-xl flex-shrink-0 flex items-center justify-center p-2 brick-shadow overflow-hidden`,
                                                                children: e.logo ? (0,
                                                                    x.jsx)(`img`, {
                                                                        src: e.logo,
                                                                        alt: e.company,
                                                                        className: `w-full h-full object-contain`
                                                                    }) : (0,
                                                                        x.jsx)(`span`, {
                                                                            className: `material-symbols-outlined text-primary text-[28px]`,
                                                                            children: `work`
                                                                        })
                                                            }), (0,
                                                                x.jsxs)(`div`, {
                                                                    className: `flex-grow min-w-0`,
                                                                    children: [(0,
                                                                        x.jsxs)(`div`, {
                                                                            className: `flex flex-wrap md:flex-row md:justify-between md:items-start gap-1.5 mb-2`,
                                                                            children: [(0,
                                                                                x.jsx)(`div`, {
                                                                                    className: `inline-block px-3 py-1 bg-surface-container-high border-2 border-on-surface text-on-surface font-label-caps font-bold text-[10px] uppercase w-fit`,
                                                                                    children: e.type
                                                                                }), (0,
                                                                                    x.jsx)(`div`, {
                                                                                        className: `bg-brick-yellow border-2 border-on-surface px-2 py-1 font-label-caps font-bold text-[10px] text-on-surface w-fit flex-shrink-0`,
                                                                                        children: e.period
                                                                                    })]
                                                                        }), (0,
                                                                            x.jsx)(`h3`, {
                                                                                className: `font-headline-md text-on-surface uppercase text-[16px] md:text-[18px] leading-snug break-words`,
                                                                                children: e.company
                                                                            }), (0,
                                                                                x.jsx)(`div`, {
                                                                                    className: `font-button-text text-primary uppercase mt-1 text-[13px] md:text-[14px] leading-snug break-words`,
                                                                                    children: e.role
                                                                                })]
                                                                })]
                                                    }), (0,
                                                        x.jsx)(`p`, {
                                                            className: `font-body-md text-on-surface text-[14px] leading-relaxed mt-4 line-clamp-3`,
                                                            children: e.description
                                                        }), e.images && e.images.length > 0 && (0,
                                                            x.jsx)(`div`, {
                                                                className: `grid grid-cols-3 gap-2 pt-3 mt-3 border-t-2 border-surface-container`,
                                                                children: e.images.map((t, n) => (0,
                                                                    x.jsx)(`div`, {
                                                                        onClick: () => p(e, `experience`),
                                                                        className: `aspect-[4/3] border-2 border-on-surface overflow-hidden bg-surface-container relative cursor-pointer hover:opacity-90`,
                                                                        title: t.caption,
                                                                        children: (0,
                                                                            x.jsx)(`img`, {
                                                                                src: t.src,
                                                                                alt: t.caption || e.company,
                                                                                className: `w-full h-full object-cover`
                                                                            })
                                                                    }, n))
                                                            })]
                                            }), (0,
                                                x.jsx)(`div`, {
                                                    className: `pt-2`,
                                                    children: (0,
                                                        x.jsxs)(`button`, {
                                                            type: `button`,
                                                            onClick: () => p(e, `experience`),
                                                            className: `inline-flex items-center gap-1.5 px-4 py-1.5 bg-surface text-on-surface border-2 border-on-surface font-label-caps text-[11px] font-bold uppercase brick-btn cursor-pointer`,
                                                            children: [(0,
                                                                x.jsx)(`span`, {
                                                                    children: `VIEW DETAILS`
                                                                }), (0,
                                                                    x.jsx)(`span`, {
                                                                        className: `material-symbols-outlined text-[14px]`,
                                                                        children: `arrow_forward`
                                                                    })]
                                                        })
                                                })]
                                    }, e.id))
                            }), l > 0 && (0,
                                x.jsx)(`div`, {
                                    className: `flex justify-center mb-12 reveal-pop`,
                                    children: (0,
                                        x.jsxs)(`button`, {
                                            onClick: () => t(!e),
                                            className: `px-6 py-3.5 bg-white text-on-surface border-4 border-on-surface font-button-text text-sm font-bold uppercase brick-btn relative cursor-pointer`,
                                            children: [(0,
                                                x.jsxs)(`div`, {
                                                    className: `absolute -top-2 left-0 w-full flex justify-around px-2 pointer-events-none`,
                                                    children: [(0,
                                                        x.jsx)(`span`, {
                                                            className: `w-3 h-3 rounded-full bg-white border-2 border-on-surface`
                                                        }), (0,
                                                            x.jsx)(`span`, {
                                                                className: `w-3 h-3 rounded-full bg-white border-2 border-on-surface`
                                                            }), (0,
                                                                x.jsx)(`span`, {
                                                                    className: `w-3 h-3 rounded-full bg-white border-2 border-on-surface`
                                                                })]
                                                }), e ? `↑ SHOW LESS` : `↓ VIEW ALL EXPERIENCES (${l} MORE)`]
                                        })
                                }), (0,
                                    x.jsxs)(`div`, {
                                        className: `mt-12`,
                                        children: [(0,
                                            x.jsx)(`h3`, {
                                                className: `font-button-text text-button-text text-on-surface bg-surface-container-high border-4 border-on-surface px-4 py-2 inline-block w-fit uppercase mb-6 brick-shadow reveal-left`,
                                                children: `Organizations & Leadership`
                                            }), (0,
                                                x.jsx)(`div`, {
                                                    className: `grid grid-cols-1 md:grid-cols-2 gap-6`,
                                                    children: d.map((e, t) => (0,
                                                        x.jsxs)(`div`, {
                                                            className: `brick-card p-6 bg-white flex flex-col gap-4 justify-between relative group reveal-pop delay-${(t % 4 + 1) * 100}`,
                                                            children: [(0,
                                                                x.jsxs)(`div`, {
                                                                    children: [(0,
                                                                        x.jsxs)(`div`, {
                                                                            className: `flex gap-4 items-center`,
                                                                            children: [(0,
                                                                                x.jsx)(`div`, {
                                                                                    className: `w-14 h-14 border-3 border-on-surface bg-white rounded-xl flex-shrink-0 flex items-center justify-center p-1.5 brick-shadow overflow-hidden`,
                                                                                    children: e.logo ? (0,
                                                                                        x.jsx)(`img`, {
                                                                                            src: e.logo,
                                                                                            alt: e.organization,
                                                                                            className: `w-full h-full object-contain`
                                                                                        }) : (0,
                                                                                            x.jsx)(`span`, {
                                                                                                className: `material-symbols-outlined text-primary text-[24px]`,
                                                                                                children: `groups`
                                                                                            })
                                                                                }), (0,
                                                                                    x.jsxs)(`div`, {
                                                                                        className: `flex-grow min-w-0`,
                                                                                        children: [(0,
                                                                                            x.jsxs)(`div`, {
                                                                                                className: `flex flex-wrap justify-between items-start gap-1`,
                                                                                                children: [(0,
                                                                                                    x.jsx)(`h4`, {
                                                                                                        className: `font-button-text text-on-surface uppercase text-[14px] md:text-[15px] leading-snug break-words`,
                                                                                                        children: e.organization
                                                                                                    }), (0,
                                                                                                        x.jsx)(`span`, {
                                                                                                            className: `bg-surface-container px-2 py-0.5 border border-on-surface font-label-caps text-[9px] font-bold flex-shrink-0`,
                                                                                                            children: e.period
                                                                                                        })]
                                                                                            }), (0,
                                                                                                x.jsx)(`div`, {
                                                                                                    className: `font-label-caps text-primary text-[11px] uppercase font-bold mt-1 leading-snug break-words`,
                                                                                                    children: e.role
                                                                                                })]
                                                                                    })]
                                                                        }), (0,
                                                                            x.jsx)(`p`, {
                                                                                className: `font-body-md text-on-surface text-[13px] leading-relaxed mt-3 line-clamp-3`,
                                                                                children: e.description
                                                                            }), e.images && e.images.length > 0 && (0,
                                                                                x.jsx)(`div`, {
                                                                                    className: `grid grid-cols-3 gap-2 pt-2 mt-2 border-t-2 border-surface-container`,
                                                                                    children: e.images.map((t, n) => (0,
                                                                                        x.jsx)(`div`, {
                                                                                            onClick: () => p(e, `organization`),
                                                                                            className: `aspect-[4/3] border-2 border-on-surface overflow-hidden bg-surface-container relative cursor-pointer hover:opacity-90`,
                                                                                            title: t.caption,
                                                                                            children: (0,
                                                                                                x.jsx)(`img`, {
                                                                                                    src: t.src,
                                                                                                    alt: t.caption || e.organization,
                                                                                                    className: `w-full h-full object-cover`
                                                                                                })
                                                                                        }, n))
                                                                                })]
                                                                }), (0,
                                                                    x.jsx)(`div`, {
                                                                        className: `pt-2`,
                                                                        children: (0,
                                                                            x.jsxs)(`button`, {
                                                                                type: `button`,
                                                                                onClick: () => p(e, `organization`),
                                                                                className: `inline-flex items-center gap-1.5 px-3 py-1 bg-surface text-on-surface border-2 border-on-surface font-label-caps text-[11px] font-bold uppercase brick-btn cursor-pointer`,
                                                                                children: [(0,
                                                                                    x.jsx)(`span`, {
                                                                                        children: `VIEW DETAILS`
                                                                                    }), (0,
                                                                                        x.jsx)(`span`, {
                                                                                            className: `material-symbols-outlined text-[14px]`,
                                                                                            children: `arrow_forward`
                                                                                        })]
                                                                            })
                                                                    })]
                                                        }, e.id))
                                                }), f > 0 && (0,
                                                    x.jsx)(`div`, {
                                                        className: `flex justify-center mt-8`,
                                                        children: (0,
                                                            x.jsxs)(`button`, {
                                                                onClick: () => r(!n),
                                                                className: `px-6 py-3.5 bg-white text-on-surface border-4 border-on-surface font-button-text text-sm font-bold uppercase brick-btn relative cursor-pointer`,
                                                                children: [(0,
                                                                    x.jsxs)(`div`, {
                                                                        className: `absolute -top-2 left-0 w-full flex justify-around px-2 pointer-events-none`,
                                                                        children: [(0,
                                                                            x.jsx)(`span`, {
                                                                                className: `w-3 h-3 rounded-full bg-white border-2 border-on-surface`
                                                                            }), (0,
                                                                                x.jsx)(`span`, {
                                                                                    className: `w-3 h-3 rounded-full bg-white border-2 border-on-surface`
                                                                                }), (0,
                                                                                    x.jsx)(`span`, {
                                                                                        className: `w-3 h-3 rounded-full bg-white border-2 border-on-surface`
                                                                                    })]
                                                                    }), n ? `↑ SHOW LESS` : `↓ VIEW ALL ORGANIZATIONS (${f} MORE)`]
                                                            })
                                                    })]
                                    })]
                }), (0,
                    x.jsx)(T, {
                        isOpen: !!i,
                        onClose: () => a(null),
                        data: i,
                        type: o
                    })]
        })
}
function he() {
    let [e, t] = (0,
        u.useState)(null);
    return (0,
        x.jsxs)(`div`, {
            className: `w-full max-w-[1600px] mx-auto px-6 md:px-12 lg:px-16 mt-12`,
            children: [(0,
                x.jsx)(`h3`, {
                    className: `font-button-text text-button-text text-on-surface bg-surface-container-high border-4 border-on-surface px-4 py-2 inline-block w-fit uppercase mb-6 brick-shadow reveal-left`,
                    children: `LICENSES & CERTIFICATIONS`
                }), (0,
                    x.jsx)(`div`, {
                        className: `grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6`,
                        children: v.map((e, n) => (0,
                            x.jsxs)(`div`, {
                                className: `brick-card p-6 bg-white relative flex flex-col justify-between group reveal-pop delay-${(n % 3 + 1) * 100}`,
                                children: [(0,
                                    x.jsxs)(`div`, {
                                        className: `absolute -top-3 left-4 flex gap-4 px-2 pointer-events-none`,
                                        children: [(0,
                                            x.jsx)(`span`, {
                                                className: `w-4 h-4 rounded-full bg-white border-2 border-on-surface z-10`
                                            }), (0,
                                                x.jsx)(`span`, {
                                                    className: `w-4 h-4 rounded-full bg-white border-2 border-on-surface z-10`
                                                })]
                                    }), (0,
                                        x.jsxs)(`div`, {
                                            children: [(0,
                                                x.jsx)(`div`, {
                                                    onClick: () => t(e),
                                                    className: `w-full aspect-[16/9] bg-surface-container-low border-2 border-on-surface mb-4 flex items-center justify-center overflow-hidden relative cursor-pointer group-hover:opacity-95`,
                                                    children: e.images && e.images.length > 0 && e.images[0].src ? (0,
                                                        x.jsx)(`img`, {
                                                            src: e.images[0].src,
                                                            alt: e.name,
                                                            className: `w-full h-full object-cover group-hover:scale-105 transition-transform duration-300`
                                                        }) : (0,
                                                            x.jsx)(`span`, {
                                                                className: `material-symbols-outlined text-[48px] text-primary`,
                                                                children: `workspace_premium`
                                                            })
                                                }), (0,
                                                    x.jsx)(`h4`, {
                                                        className: `font-button-text text-on-surface uppercase mb-1 text-[14px] md:text-[15px] leading-snug break-words`,
                                                        children: e.name
                                                    }), (0,
                                                        x.jsxs)(`div`, {
                                                            className: `font-label-caps text-primary text-[11px] font-bold leading-snug break-words`,
                                                            children: [e.issuer, ` • `, e.date]
                                                        }), (0,
                                                            x.jsx)(`p`, {
                                                                className: `mt-2 font-body-md text-on-surface text-[12px] leading-relaxed line-clamp-2`,
                                                                children: e.description
                                                            })]
                                        }), (0,
                                            x.jsxs)(`div`, {
                                                className: `mt-4 pt-3 border-t border-surface-container flex justify-between items-center`,
                                                children: [e.credentialId ? (0,
                                                    x.jsxs)(`span`, {
                                                        className: `text-[10px] font-label-caps text-on-surface-variant font-mono`,
                                                        children: [`ID: `, e.credentialId]
                                                    }) : (0,
                                                        x.jsx)(`span`, {}), (0,
                                                            x.jsxs)(`button`, {
                                                                type: `button`,
                                                                onClick: () => t(e),
                                                                className: `inline-flex items-center gap-1 px-3 py-1 bg-surface text-on-surface border-2 border-on-surface font-label-caps text-[10px] font-bold uppercase brick-btn cursor-pointer`,
                                                                children: [(0,
                                                                    x.jsx)(`span`, {
                                                                        children: `DETAILS`
                                                                    }), (0,
                                                                        x.jsx)(`span`, {
                                                                            className: `material-symbols-outlined text-[12px]`,
                                                                            children: `arrow_forward`
                                                                        })]
                                                            })]
                                            })]
                            }, e.id || e.name))
                    }), (0,
                        x.jsx)(T, {
                            isOpen: !!e,
                            onClose: () => t(null),
                            data: e,
                            type: `certification`
                        })]
        })
}
var ge = [{
    name: `REACT.JS`,
    category: `Frontend Web`,
    group: `Development`,
    logo: `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg`
}, {
    name: `JAVASCRIPT`,
    category: `Frontend Web`,
    group: `Development`,
    logo: `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg`
}, {
    name: `HTML5`,
    category: `Frontend Web`,
    group: `Development`,
    logo: `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg`
}, {
    name: `CSS3`,
    category: `Frontend Web`,
    group: `Development`,
    logo: `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg`
}, {
    name: `TAILWIND`,
    category: `Frontend Web`,
    group: `Development`,
    logo: `https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg`
}, {
    name: `BOOTSTRAP`,
    category: `Frontend Web`,
    group: `Development`,
    logo: `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg`
}, {
    name: `VITE`,
    category: `Frontend Web`,
    group: `Development`,
    logo: `https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vitejs/vitejs-original.svg`
}, {
    name: `FIGMA`,
    category: `UI/UX Design`,
    group: `Design`,
    logo: `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg`
}, {
    name: `UI/UX DESIGN`,
    category: `UI/UX Design`,
    group: `Design`,
    logo: `https://cdn.simpleicons.org/adobexd/FF61F6`
}, {
    name: `WIREFRAMING`,
    category: `UI/UX Design`,
    group: `Design`,
    logo: `https://cdn.simpleicons.org/framer/0055FF`
}, {
    name: `PROTOTYPING`,
    category: `UI/UX Design`,
    group: `Design`,
    logo: `https://cdn.simpleicons.org/invision/FF3366`
}, {
    name: `PYTHON`,
    category: `Machine Learning`,
    group: `Machine Learning`,
    logo: `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg`
}, {
    name: `SCIKIT-LEARN`,
    category: `Machine Learning`,
    group: `Machine Learning`,
    logo: `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/scikitlearn/scikitlearn-original.svg`
}, {
    name: `INDOBERT`,
    category: `Machine Learning`,
    group: `Machine Learning`,
    logo: `https://cdn.simpleicons.org/huggingface/FFD21E`
}, {
    name: `TRANSFORMERS`,
    category: `Machine Learning`,
    group: `Machine Learning`,
    logo: `https://cdn.simpleicons.org/pytorch/EE4C2C`
}, {
    name: `GIT`,
    category: `Tools & Systems`,
    group: `Tools`,
    logo: `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg`
}, {
    name: `GITHUB`,
    category: `Tools & Systems`,
    group: `Tools`,
    logo: `https://cdn.simpleicons.org/github/1a1c1c`
}, {
    name: `VS CODE`,
    category: `Tools & Systems`,
    group: `Tools`,
    logo: `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg`
}, {
    name: `ARDUINO`,
    category: `IoT Systems`,
    group: `Tools`,
    logo: `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/arduino/arduino-original.svg`
}, {
    name: `ESP32`,
    category: `IoT Systems`,
    group: `Tools`,
    logo: `https://cdn.simpleicons.org/espressif/E7352C`
}, {
    name: `CHART.JS`,
    category: `Data Viz`,
    group: `Tools`,
    logo: `https://cdn.simpleicons.org/chartdotjs/FF6384`
}, {
    name: `GOOGLE COLAB`,
    category: `Data Science`,
    group: `Tools`,
    logo: `https://cdn.simpleicons.org/googlecolab/F9AB00`
}]
    , _e = [`ALL`, `Development`, `Design`, `Machine Learning`, `Tools`]
    , ve = 8;
function ye() {
    let [e, t] = (0,
        u.useState)(`ALL`)
        , [n, r] = (0,
            u.useState)(!1)
        , i = e === `ALL` ? ge : ge.filter(t => t.group === e)
        , a = n ? i : i.slice(0, ve)
        , o = i.length - ve;
    return (0,
        x.jsxs)(`div`, {
            className: `flex flex-col gap-6 mt-16 w-full max-w-[1600px] mx-auto px-6 md:px-12 lg:px-16 mb-32 scroll-mt-28`,
            id: `skills`,
            children: [(0,
                x.jsxs)(`div`, {
                    className: `flex flex-col md:flex-row justify-between items-start md:items-end gap-4 border-b-4 border-on-surface pb-4`,
                    children: [(0,
                        x.jsxs)(`div`, {
                            className: `reveal-left`,
                            children: [(0,
                                x.jsx)(`div`, {
                                    className: `font-label-caps text-label-caps text-primary mb-2 font-bold uppercase`,
                                    children: `TECHNICAL ARSENAL`
                                }), (0,
                                    x.jsxs)(`h2`, {
                                        className: `font-display-lg-mobile md:font-display-lg text-display-lg-mobile md:text-display-lg text-on-surface uppercase`,
                                        children: [`BRICKBOX `, (0,
                                            x.jsx)(`span`, {
                                                className: `text-brick-blue`,
                                                children: `// SKILLS`
                                            })]
                                    })]
                        }), (0,
                            x.jsx)(`div`, {
                                className: `flex flex-wrap gap-2 reveal-right`,
                                children: _e.map(n => (0,
                                    x.jsx)(`button`, {
                                        onClick: () => {
                                            t(n),
                                                r(!1)
                                        }
                                        ,
                                        className: `px-4 py-2 border-4 border-on-surface text-on-surface font-label-caps font-bold text-[12px] uppercase transition-all duration-200 cursor-pointer hover:-translate-y-1 hover:-rotate-1.5 hover:shadow-[6px_6px_0px_0px_#1a1c1c] active:translate-y-0.5 active:rotate-0 ${e === n ? `bg-brick-yellow brick-shadow` : `bg-white hover:bg-surface-container-high`}`,
                                        children: n
                                    }, n))
                            })]
                }), (0,
                    x.jsx)(`div`, {
                        className: `grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-5 mt-4`,
                        children: a.map((e, t) => (0,
                            x.jsxs)(`div`, {
                                className: `bg-white border-2 sm:border-3 border-on-surface rounded-xl sm:rounded-2xl p-2.5 sm:p-3.5 flex items-center gap-2.5 sm:gap-3.5 brick-shadow hover:-translate-y-1 transition-transform group select-none min-w-0 reveal-pop delay-${(t % 4 + 1) * 100}`,
                                children: [(0,
                                    x.jsx)(`div`, {
                                        className: `w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-lg sm:rounded-xl border-2 border-on-surface bg-[#f3f4f6] flex items-center justify-center p-2 flex-shrink-0 group-hover:bg-surface transition-colors`,
                                        children: (0,
                                            x.jsx)(`img`, {
                                                src: e.logo,
                                                alt: e.name,
                                                className: `w-full h-full object-contain group-hover:scale-110 transition-transform duration-300`,
                                                loading: `lazy`,
                                                onError: e => {
                                                    e.currentTarget.style.display = `none`
                                                }
                                            })
                                    }), (0,
                                        x.jsxs)(`div`, {
                                            className: `flex flex-col items-start min-w-0 flex-grow`,
                                            children: [(0,
                                                x.jsx)(`h3`, {
                                                    className: `font-button-text text-on-surface font-black text-[12px] sm:text-[14px] md:text-[15px] tracking-wide uppercase truncate w-full`,
                                                    children: e.name
                                                }), (0,
                                                    x.jsx)(`span`, {
                                                        className: `bg-brick-yellow border border-on-surface/90 px-1.5 sm:px-2 py-0.5 rounded text-[9px] sm:text-[11px] font-bold text-on-surface font-label-caps inline-block mt-0.5 truncate max-w-full`,
                                                        children: e.category
                                                    })]
                                        })]
                            }, e.name))
                    }), o > 0 && (0,
                        x.jsx)(`div`, {
                            className: `flex justify-center mt-8`,
                            children: (0,
                                x.jsxs)(`button`, {
                                    onClick: () => r(!n),
                                    className: `px-6 py-3.5 bg-white text-on-surface border-4 border-on-surface font-button-text text-sm font-bold uppercase brick-btn relative cursor-pointer`,
                                    children: [(0,
                                        x.jsxs)(`div`, {
                                            className: `absolute -top-2 left-0 w-full flex justify-around px-2 pointer-events-none`,
                                            children: [(0,
                                                x.jsx)(`span`, {
                                                    className: `w-3 h-3 rounded-full bg-white border-2 border-on-surface`
                                                }), (0,
                                                    x.jsx)(`span`, {
                                                        className: `w-3 h-3 rounded-full bg-white border-2 border-on-surface`
                                                    }), (0,
                                                        x.jsx)(`span`, {
                                                            className: `w-3 h-3 rounded-full bg-white border-2 border-on-surface`
                                                        })]
                                        }), n ? `↑ SHOW LESS` : `↓ VIEW ALL SKILLS (${o} MORE)`]
                                })
                        })]
        })
}
var be = e => {
    switch (e) {
        case `UI/UX Design`:
            return `bg-[#00852B] text-white`;
        case `Machine Learning`:
            return `bg-primary text-white`;
        case `Web`:
            return `bg-brick-blue text-white`;
        case `IoT`:
            return `bg-brick-yellow text-on-surface`;
        default:
            return `bg-surface-container-highest text-on-surface`
    }
}
    , xe = 6;
function Se() {
    let [e, t] = (0,
        u.useState)(`All`)
        , [n, r] = (0,
            u.useState)(!1)
        , [i, a] = (0,
            u.useState)(null)
        , o = e === `All` ? b : b.filter(t => t.category === e)
        , s = n ? o : o.slice(0, xe)
        , c = o.length - xe;
    return (0,
        x.jsxs)(`section`, {
            className: `w-full max-w-[1600px] mx-auto px-6 md:px-12 lg:px-16 mb-32 scroll-mt-28`,
            id: `projects`,
            children: [(0,
                x.jsxs)(`div`, {
                    className: `flex flex-col md:flex-row justify-between items-start md:items-end gap-4 mb-8 border-b-4 border-on-surface pb-4`,
                    children: [(0,
                        x.jsxs)(`div`, {
                            className: `reveal-left`,
                            children: [(0,
                                x.jsx)(`div`, {
                                    className: `font-label-caps text-label-caps text-primary mb-2 font-bold uppercase`,
                                    children: `SELECTED WORKS`
                                }), (0,
                                    x.jsxs)(`h2`, {
                                        className: `font-display-lg-mobile md:font-display-lg text-display-lg-mobile md:text-display-lg text-on-surface uppercase`,
                                        children: [`BUILT `, (0,
                                            x.jsx)(`span`, {
                                                className: `text-brick-blue`,
                                                children: `PROJECTS`
                                            })]
                                    })]
                        }), (0,
                            x.jsx)(`div`, {
                                className: `flex flex-wrap gap-2 mt-2 md:mt-0 reveal-right`,
                                children: y.map(n => (0,
                                    x.jsx)(`button`, {
                                        onClick: () => {
                                            t(n),
                                                r(!1)
                                        }
                                        ,
                                        className: `px-4 py-2 border-4 border-on-surface text-on-surface font-label-caps font-bold text-[12px] uppercase transition-all duration-200 cursor-pointer hover:-translate-y-1 hover:-rotate-1.5 hover:shadow-[6px_6px_0px_0px_#1a1c1c] active:translate-y-0.5 active:rotate-0 ${e === n ? `bg-brick-yellow brick-shadow` : `bg-white hover:bg-surface-container-high`}`,
                                        children: n
                                    }, n))
                            })]
                }), (0,
                    x.jsx)(`div`, {
                        className: `grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8`,
                        children: s.map((e, t) => (0,
                            x.jsxs)(`div`, {
                                className: `brick-card overflow-hidden group flex flex-col justify-between reveal-pop delay-${(t % 3 + 1) * 100}`,
                                children: [(0,
                                    x.jsxs)(`div`, {
                                        children: [(0,
                                            x.jsxs)(`div`, {
                                                onClick: () => a(e),
                                                className: `relative aspect-[16/10] border-b-4 border-on-surface bg-surface-container-low overflow-hidden cursor-pointer`,
                                                children: [(0,
                                                    x.jsx)(`img`, {
                                                        alt: e.title,
                                                        className: `w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500`,
                                                        src: e.image,
                                                        onError: e => {
                                                            e.currentTarget.src = `/images/profile-hero.jpg`
                                                        }
                                                    }), (0,
                                                        x.jsx)(`div`, {
                                                            className: `absolute top-4 left-4 px-3 py-1 ${be(e.category)} border-2 border-on-surface font-label-caps font-bold text-[10px] uppercase shadow-sm`,
                                                            children: e.category
                                                        }), (0,
                                                            x.jsx)(`div`, {
                                                                className: `absolute top-4 right-4 px-2 py-0.5 bg-white border-2 border-on-surface font-label-caps font-bold text-[10px] uppercase`,
                                                                children: e.year
                                                            })]
                                            }), (0,
                                                x.jsxs)(`div`, {
                                                    className: `p-6 bg-white`,
                                                    children: [(0,
                                                        x.jsx)(`h3`, {
                                                            onClick: () => a(e),
                                                            className: `font-button-text text-button-text text-on-surface uppercase mb-2 cursor-pointer hover:text-primary transition-colors`,
                                                            children: e.title
                                                        }), (0,
                                                            x.jsx)(`p`, {
                                                                className: `font-body-md text-on-surface-variant text-[13px] line-clamp-3 leading-relaxed mb-4`,
                                                                children: e.description
                                                            }), (0,
                                                                x.jsxs)(`div`, {
                                                                    className: `flex flex-wrap gap-1.5 mt-auto`,
                                                                    children: [e.technologies.slice(0, 4).map(e => (0,
                                                                        x.jsx)(`span`, {
                                                                            className: `px-2 py-0.5 bg-surface-container border border-on-surface text-[10px] font-label-caps font-bold text-on-surface`,
                                                                            children: e
                                                                        }, e)), e.technologies.length > 4 && (0,
                                                                            x.jsxs)(`span`, {
                                                                                className: `px-1.5 py-0.5 bg-surface-container-high border border-on-surface text-[10px] font-label-caps font-bold text-on-surface-variant`,
                                                                                children: [`+`, e.technologies.length - 4]
                                                                            })]
                                                                })]
                                                })]
                                    }), (0,
                                        x.jsxs)(`div`, {
                                            className: `px-6 pb-5 pt-0 flex items-center justify-between gap-3 border-t border-surface-container mt-2 pt-3`,
                                            children: [(0,
                                                x.jsxs)(`button`, {
                                                    type: `button`,
                                                    onClick: () => a(e),
                                                    className: `inline-flex items-center gap-1 text-xs font-label-caps font-bold text-primary hover:underline cursor-pointer`,
                                                    children: [(0,
                                                        x.jsx)(`span`, {
                                                            children: `READ CASE STUDY`
                                                        }), (0,
                                                            x.jsx)(`span`, {
                                                                className: `material-symbols-outlined text-[14px]`,
                                                                children: `arrow_forward`
                                                            })]
                                                }), e.links && (e.links.github || e.links.demo) && (0,
                                                    x.jsxs)(`div`, {
                                                        className: `flex gap-2`,
                                                        children: [e.links.github && (0,
                                                            x.jsx)(`a`, {
                                                                href: e.links.github,
                                                                target: `_blank`,
                                                                rel: `noopener noreferrer`,
                                                                className: `text-on-surface hover:text-primary transition-colors`,
                                                                title: `GitHub Repository`,
                                                                children: (0,
                                                                    x.jsx)(`span`, {
                                                                        className: `material-symbols-outlined text-[18px]`,
                                                                        children: `code`
                                                                    })
                                                            }), e.links.demo && (0,
                                                                x.jsx)(`a`, {
                                                                    href: e.links.demo,
                                                                    target: `_blank`,
                                                                    rel: `noopener noreferrer`,
                                                                    className: `text-on-surface hover:text-brick-blue transition-colors`,
                                                                    title: `Live Demo`,
                                                                    children: (0,
                                                                        x.jsx)(`span`, {
                                                                            className: `material-symbols-outlined text-[18px]`,
                                                                            children: `open_in_new`
                                                                        })
                                                                })]
                                                    })]
                                        })]
                            }, e.id || e.slug))
                    }), c > 0 && (0,
                        x.jsx)(`div`, {
                            className: `flex justify-center mt-10`,
                            children: (0,
                                x.jsxs)(`button`, {
                                    onClick: () => r(!n),
                                    className: `px-6 py-3.5 bg-white text-on-surface border-4 border-on-surface font-button-text text-sm font-bold uppercase brick-btn relative cursor-pointer`,
                                    children: [(0,
                                        x.jsxs)(`div`, {
                                            className: `absolute -top-2 left-0 w-full flex justify-around px-2 pointer-events-none`,
                                            children: [(0,
                                                x.jsx)(`span`, {
                                                    className: `w-3 h-3 rounded-full bg-white border-2 border-on-surface`
                                                }), (0,
                                                    x.jsx)(`span`, {
                                                        className: `w-3 h-3 rounded-full bg-white border-2 border-on-surface`
                                                    }), (0,
                                                        x.jsx)(`span`, {
                                                            className: `w-3 h-3 rounded-full bg-white border-2 border-on-surface`
                                                        })]
                                        }), n ? `↑ SHOW LESS` : `↓ VIEW ALL PROJECTS (${c} MORE)`]
                                })
                        }), (0,
                            x.jsx)(T, {
                                isOpen: !!i,
                                onClose: () => a(null),
                                data: i,
                                type: `project`
                            })]
        })
}
var Ce = class {
    constructor(e = 0, t = `Network Error`) {
        this.status = e,
            this.text = t
    }
}
    , k = {
        origin: `https://api.emailjs.com`,
        blockHeadless: !1,
        storageProvider: (() => {
            if (!(typeof localStorage > `u`))
                return {
                    get: e => Promise.resolve(localStorage.getItem(e)),
                    set: (e, t) => Promise.resolve(localStorage.setItem(e, t)),
                    remove: e => Promise.resolve(localStorage.removeItem(e))
                }
        }
        )()
    }
    , we = e => e ? typeof e == `string` ? {
        publicKey: e
    } : e.toString() === `[object Object]` ? e : {} : {}
    , Te = (e, t = `https://api.emailjs.com`) => {
        if (!e)
            return;
        let n = we(e);
        k.publicKey = n.publicKey,
            k.blockHeadless = n.blockHeadless,
            k.storageProvider = n.storageProvider,
            k.blockList = n.blockList,
            k.limitRate = n.limitRate,
            k.origin = n.origin || t
    }
    , Ee = async (e, t, n = {}) => {
        let r = await fetch(k.origin + e, {
            method: `POST`,
            headers: n,
            body: t
        })
            , i = await r.text()
            , a = new Ce(r.status, i);
        if (r.ok)
            return a;
        throw a
    }
    , De = (e, t, n) => {
        if (!e || typeof e != `string`)
            throw `The public key is required. Visit https://dashboard.emailjs.com/admin/account`;
        if (!t || typeof t != `string`)
            throw `The service ID is required. Visit https://dashboard.emailjs.com/admin`;
        if (!n || typeof n != `string`)
            throw `The template ID is required. Visit https://dashboard.emailjs.com/admin/templates`
    }
    , Oe = e => {
        if (e && e.toString() !== `[object Object]`)
            throw `The template params have to be the object. Visit https://www.emailjs.com/docs/sdk/send/`
    }
    , ke = e => e.webdriver || !e.languages || e.languages.length === 0
    , Ae = () => new Ce(451, `Unavailable For Headless Browser`)
    , je = (e, t) => {
        if (!Array.isArray(e))
            throw `The BlockList list has to be an array`;
        if (typeof t != `string`)
            throw `The BlockList watchVariable has to be a string`
    }
    , Me = e => !e.list?.length || !e.watchVariable
    , Ne = (e, t) => e instanceof FormData ? e.get(t) : e[t]
    , Pe = (e, t) => {
        if (Me(e))
            return !1;
        je(e.list, e.watchVariable);
        let n = Ne(t, e.watchVariable);
        return typeof n == `string` && e.list.includes(n)
    }
    , Fe = () => new Ce(403, `Forbidden`)
    , Ie = (e, t) => {
        if (typeof e != `number` || e < 0)
            throw `The LimitRate throttle has to be a positive number`;
        if (t && typeof t != `string`)
            throw `The LimitRate ID has to be a non-empty string`
    }
    , Le = async (e, t, n) => {
        let r = Number(await n.get(e) || 0);
        return t - Date.now() + r
    }
    , Re = async (e, t, n) => {
        if (!t.throttle || !n)
            return !1;
        Ie(t.throttle, t.id);
        let r = t.id || e;
        return await Le(r, t.throttle, n) > 0 || (await n.set(r, Date.now().toString()),
            !1)
    }
    , ze = () => new Ce(429, `Too Many Requests`)
    , Be = async (e, t, n, r) => {
        let i = we(r)
            , a = i.publicKey || k.publicKey
            , o = i.blockHeadless || k.blockHeadless
            , s = i.storageProvider || k.storageProvider
            , c = {
                ...k.blockList,
                ...i.blockList
            }
            , l = {
                ...k.limitRate,
                ...i.limitRate
            };
        return o && ke(navigator) ? Promise.reject(Ae()) : (De(a, e, t),
            Oe(n),
            n && Pe(c, n) ? Promise.reject(Fe()) : await Re(location.pathname, l, s) ? Promise.reject(ze()) : Ee(`/api/v1.0/email/send`, JSON.stringify({
                lib_version: `4.4.1`,
                user_id: a,
                service_id: e,
                template_id: t,
                template_params: n
            }), {
                "Content-type": `application/json`
            }))
    }
    , Ve = e => {
        if (!e || e.nodeName !== `FORM`)
            throw `The 3rd parameter is expected to be the HTML form element or the style selector of the form`
    }
    , He = e => typeof e == `string` ? document.querySelector(e) : e
    , Ue = {
        init: Te,
        send: Be,
        sendForm: async (e, t, n, r) => {
            let i = we(r)
                , a = i.publicKey || k.publicKey
                , o = i.blockHeadless || k.blockHeadless
                , s = k.storageProvider || i.storageProvider
                , c = {
                    ...k.blockList,
                    ...i.blockList
                }
                , l = {
                    ...k.limitRate,
                    ...i.limitRate
                };
            if (o && ke(navigator))
                return Promise.reject(Ae());
            let u = He(n);
            De(a, e, t),
                Ve(u);
            let d = new FormData(u);
            return Pe(c, d) ? Promise.reject(Fe()) : await Re(location.pathname, l, s) ? Promise.reject(ze()) : (d.append(`lib_version`, `4.4.1`),
                d.append(`service_id`, e),
                d.append(`template_id`, t),
                d.append(`user_id`, a),
                Ee(`/api/v1.0/email/send-form`, d))
        }
        ,
        EmailJSResponseStatus: Ce
    };
function We() {
    let [e, t] = (0,
        u.useState)({
            name: ``,
            email: ``,
            message: ``
        })
        , [n, r] = (0,
            u.useState)(`idle`)
        , [i, a] = (0,
            u.useState)(``)
        , [o, s] = (0,
            u.useState)({})
        , c = () => {
            let t = {};
            return e.name.trim() || (t.name = `Please fill in your name`),
                e.email.trim() ? /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e.email.trim()) || (t.email = `Invalid email format (e.g. name@domain.com)`) : t.email = `Please fill in your email address`,
                e.message.trim() ? e.message.trim().length < 5 && (t.message = `Message must be at least 5 characters`) : t.message = `Please enter your message`,
                t
        }
        , l = e => {
            let { name: n, value: r } = e.target;
            t(e => ({
                ...e,
                [n]: r
            })),
                o[n] && s(e => ({
                    ...e,
                    [n]: ``
                }))
        }
        ;
    return (0,
        x.jsxs)(`section`, {
            className: `w-full max-w-[1600px] mx-auto px-6 md:px-12 lg:px-16 mb-32 scroll-mt-28`,
            id: `contact`,
            children: [(0,
                x.jsx)(`div`, {
                    className: `mb-8 reveal-pop`,
                    children: (0,
                        x.jsx)(`h2`, {
                            className: `font-headline-md text-headline-md text-on-surface bg-brick-yellow border-4 border-on-surface px-4 py-2 inline-block w-fit brick-shadow uppercase`,
                            children: `CONTACT`
                        })
                }), (0,
                    x.jsxs)(`div`, {
                        className: `grid grid-cols-1 lg:grid-cols-2 gap-12 items-center`,
                        children: [(0,
                            x.jsxs)(`div`, {
                                className: `reveal-left delay-100`,
                                children: [(0,
                                    x.jsxs)(`h3`, {
                                        className: `font-display-lg text-on-surface uppercase mb-4 leading-tight text-display-lg-mobile md:text-display-lg font-display-lg-mobile md:font-display-lg`,
                                        children: [`LET'S BUILD`, (0,
                                            x.jsx)(`br`, {}), (0,
                                                x.jsx)(`span`, {
                                                    className: `text-primary`,
                                                    children: `SOMETHING TOGETHER`
                                                })]
                                    }), (0,
                                        x.jsx)(`p`, {
                                            className: `font-body-lg text-on-surface mb-6 text-body-lg leading-relaxed`,
                                            children: `Have a project in mind, an opportunity to discuss, or just want to connect? Send me a message or find me on social media!`
                                        }), (0,
                                            x.jsxs)(`a`, {
                                                href: `https://mail.google.com/mail/?view=cm&fs=1&to=daffahusen10@gmail.com&su=Let's%20Unlock%20Your%20Potential&body=Hi%20Daffa%2C%0A%0AI%20saw%20your%20portfolio%20and%20would%20love%20to%20connect%20with%20you%20regarding...`,
                                                target: `_blank`,
                                                rel: `noopener noreferrer`,
                                                className: `inline-flex items-center gap-3 px-5 py-3.5 bg-brick-yellow text-on-surface border-4 border-on-surface brick-btn mb-8 relative select-none cursor-pointer group`,
                                                title: `Click to send email directly via Gmail`,
                                                children: [(0,
                                                    x.jsxs)(`div`, {
                                                        className: `absolute -top-2.5 left-0 w-full flex justify-around px-3 pointer-events-none`,
                                                        children: [(0,
                                                            x.jsx)(`span`, {
                                                                className: `w-3 h-3 rounded-full bg-brick-yellow border-2 border-on-surface`
                                                            }), (0,
                                                                x.jsx)(`span`, {
                                                                    className: `w-3 h-3 rounded-full bg-brick-yellow border-2 border-on-surface`
                                                                }), (0,
                                                                    x.jsx)(`span`, {
                                                                        className: `w-3 h-3 rounded-full bg-brick-yellow border-2 border-on-surface`
                                                                    })]
                                                    }), (0,
                                                        x.jsx)(`span`, {
                                                            className: `material-symbols-outlined text-primary text-[22px] group-hover:scale-110 transition-transform`,
                                                            children: `rocket_launch`
                                                        }), (0,
                                                            x.jsx)(`span`, {
                                                                className: `font-button-text text-sm sm:text-base font-bold uppercase tracking-wide`,
                                                                children: `Hire me to unlock my potential`
                                                            }), (0,
                                                                x.jsx)(`span`, {
                                                                    className: `material-symbols-outlined text-on-surface text-[18px] group-hover:translate-x-1 transition-transform`,
                                                                    children: `arrow_forward`
                                                                })]
                                            }), (0,
                                                x.jsx)(`div`, {
                                                    className: `flex gap-4`,
                                                    children: m.map(e => {
                                                        let t = f[e.name];
                                                        return (0,
                                                            x.jsx)(`a`, {
                                                                className: `w-14 h-14 bg-white text-on-surface border-4 border-on-surface brick-shadow hover:-translate-y-1 hover:shadow-[8px_8px_0px_0px_#1a1c1c] transition-all inline-flex items-center justify-center rounded-xl cursor-pointer group`,
                                                                href: e.url,
                                                                target: `_blank`,
                                                                rel: `noopener noreferrer`,
                                                                "aria-label": e.name,
                                                                title: e.name,
                                                                children: t && (0,
                                                                    x.jsx)(t, {
                                                                        className: `w-6 h-6 fill-current text-on-surface group-hover:scale-110 transition-transform`
                                                                    })
                                                            }, e.name)
                                                    }
                                                    )
                                                })]
                            }), (0,
                                x.jsxs)(`div`, {
                                    className: `brick-card p-8 bg-white relative reveal-right delay-200`,
                                    children: [(0,
                                        x.jsxs)(`div`, {
                                            className: `absolute -top-3 left-8 flex gap-6 px-2 pointer-events-none z-20`,
                                            children: [(0,
                                                x.jsx)(`span`, {
                                                    className: `w-6 h-6 rounded-full bg-white border-2 border-on-surface`
                                                }), (0,
                                                    x.jsx)(`span`, {
                                                        className: `w-6 h-6 rounded-full bg-white border-2 border-on-surface`
                                                    }), (0,
                                                        x.jsx)(`span`, {
                                                            className: `w-6 h-6 rounded-full bg-white border-2 border-on-surface`
                                                        })]
                                        }), n === `success` ? (0,
                                            x.jsxs)(`div`, {
                                                className: `pt-6 pb-4 flex flex-col items-center text-center gap-4 animate-fadeIn`,
                                                children: [(0,
                                                    x.jsx)(`div`, {
                                                        className: `w-16 h-16 rounded-full bg-brick-yellow border-4 border-on-surface flex items-center justify-center brick-shadow`,
                                                        children: (0,
                                                            x.jsx)(`span`, {
                                                                className: `material-symbols-outlined text-on-surface text-[32px]`,
                                                                children: `check_circle`
                                                            })
                                                    }), (0,
                                                        x.jsx)(`h4`, {
                                                            className: `font-headline-md text-on-surface uppercase text-xl`,
                                                            children: `MESSAGE DELIVERED!`
                                                        }), (0,
                                                            x.jsxs)(`p`, {
                                                                className: `font-body-md text-on-surface-variant max-w-sm text-sm`,
                                                                children: [`Thank you for reaching out! Your message has been sent successfully to `, p.name, `. I'll get back to you soon.`]
                                                            }), (0,
                                                                x.jsx)(`button`, {
                                                                    type: `button`,
                                                                    onClick: () => r(`idle`),
                                                                    className: `mt-4 px-6 py-2.5 bg-primary text-white font-button-text text-xs uppercase brick-btn cursor-pointer`,
                                                                    children: `SEND ANOTHER MESSAGE`
                                                                })]
                                            }) : (0,
                                                x.jsxs)(`form`, {
                                                    noValidate: !0,
                                                    onSubmit: async n => {
                                                        n.preventDefault();
                                                        let i = c();
                                                        if (Object.keys(i).length > 0) {
                                                            s(i);
                                                            return
                                                        }
                                                        s({}),
                                                            r(`sending`),
                                                            a(``);
                                                        try {
                                                            await Ue.send(`service_wbttiyf`, `template_9mytz7l`, {
                                                                from_name: e.name,
                                                                from_email: e.email,
                                                                reply_to: e.email,
                                                                user_email: e.email,
                                                                time: new Date().toLocaleString(`id-ID`, {
                                                                    dateStyle: `medium`,
                                                                    timeStyle: `short`
                                                                }),
                                                                message: e.message,
                                                                to_name: p.name
                                                            }, `zKVX1QMfXWK-EpDIL`),
                                                                r(`success`),
                                                                t({
                                                                    name: ``,
                                                                    email: ``,
                                                                    message: ``
                                                                }),
                                                                s({})
                                                        } catch (e) {
                                                            console.error(`EmailJS error:`, e),
                                                                r(`error`),
                                                                a(e?.text || `Failed to send message. Please try again or email directly.`)
                                                        }
                                                    }
                                                    ,
                                                    className: `flex flex-col gap-5 pt-2`,
                                                    children: [n === `error` && (0,
                                                        x.jsxs)(`div`, {
                                                            className: `p-3 bg-red-100 border-3 border-primary text-primary text-xs font-bold font-label-caps flex items-center gap-2 shadow-[3px_3px_0px_0px_#ba1a1a] animate-shake`,
                                                            children: [(0,
                                                                x.jsx)(`span`, {
                                                                    className: `material-symbols-outlined text-[18px]`,
                                                                    children: `error`
                                                                }), (0,
                                                                    x.jsx)(`span`, {
                                                                        children: i
                                                                    })]
                                                        }), (0,
                                                            x.jsxs)(`div`, {
                                                                className: `flex flex-col gap-1.5`,
                                                                children: [(0,
                                                                    x.jsxs)(`div`, {
                                                                        className: `flex justify-between items-center`,
                                                                        children: [(0,
                                                                            x.jsx)(`label`, {
                                                                                className: `font-label-caps font-bold text-on-surface uppercase text-xs`,
                                                                                htmlFor: `name`,
                                                                                children: `Your Name`
                                                                            }), o.name && (0,
                                                                                x.jsxs)(`span`, {
                                                                                    className: `inline-flex items-center gap-1 px-2.5 py-0.5 bg-red-100 text-primary border-2 border-primary font-label-caps text-[10px] font-bold uppercase shadow-[2px_2px_0px_0px_#ba1a1a] animate-fadeIn select-none`,
                                                                                    children: [(0,
                                                                                        x.jsx)(`span`, {
                                                                                            className: `material-symbols-outlined text-[13px]`,
                                                                                            children: `error`
                                                                                        }), o.name]
                                                                                })]
                                                                    }), (0,
                                                                        x.jsx)(`input`, {
                                                                            className: `border-3 border-on-surface p-3.5 font-body-md bg-surface-container transition-all brick-shadow text-sm focus:outline-none focus:bg-white focus:border-brick-blue focus:shadow-[6px_6px_0px_0px_#1a1c1c] ${o.name ? `border-primary bg-red-50/60 shadow-[3px_3px_0px_0px_#ba1a1a] animate-shake` : ``}`,
                                                                            id: `name`,
                                                                            name: `name`,
                                                                            value: e.name,
                                                                            onChange: l,
                                                                            placeholder: `e.g. John Doe`,
                                                                            type: `text`,
                                                                            autoComplete: `name`
                                                                        })]
                                                            }), (0,
                                                                x.jsxs)(`div`, {
                                                                    className: `flex flex-col gap-1.5`,
                                                                    children: [(0,
                                                                        x.jsxs)(`div`, {
                                                                            className: `flex justify-between items-center`,
                                                                            children: [(0,
                                                                                x.jsx)(`label`, {
                                                                                    className: `font-label-caps font-bold text-on-surface uppercase text-xs`,
                                                                                    htmlFor: `email`,
                                                                                    children: `Your Email`
                                                                                }), o.email && (0,
                                                                                    x.jsxs)(`span`, {
                                                                                        className: `inline-flex items-center gap-1 px-2.5 py-0.5 bg-red-100 text-primary border-2 border-primary font-label-caps text-[10px] font-bold uppercase shadow-[2px_2px_0px_0px_#ba1a1a] animate-fadeIn select-none`,
                                                                                        children: [(0,
                                                                                            x.jsx)(`span`, {
                                                                                                className: `material-symbols-outlined text-[13px]`,
                                                                                                children: `error`
                                                                                            }), o.email]
                                                                                    })]
                                                                        }), (0,
                                                                            x.jsx)(`input`, {
                                                                                className: `border-3 border-on-surface p-3.5 font-body-md bg-surface-container transition-all brick-shadow text-sm focus:outline-none focus:bg-white focus:border-brick-blue focus:shadow-[6px_6px_0px_0px_#1a1c1c] ${o.email ? `border-primary bg-red-50/60 shadow-[3px_3px_0px_0px_#ba1a1a] animate-shake` : ``}`,
                                                                                id: `email`,
                                                                                name: `email`,
                                                                                value: e.email,
                                                                                onChange: l,
                                                                                placeholder: `e.g. john@example.com`,
                                                                                type: `text`,
                                                                                autoComplete: `email`
                                                                            })]
                                                                }), (0,
                                                                    x.jsxs)(`div`, {
                                                                        className: `flex flex-col gap-1.5`,
                                                                        children: [(0,
                                                                            x.jsxs)(`div`, {
                                                                                className: `flex justify-between items-center`,
                                                                                children: [(0,
                                                                                    x.jsx)(`label`, {
                                                                                        className: `font-label-caps font-bold text-on-surface uppercase text-xs`,
                                                                                        htmlFor: `message`,
                                                                                        children: `Your Message`
                                                                                    }), o.message && (0,
                                                                                        x.jsxs)(`span`, {
                                                                                            className: `inline-flex items-center gap-1 px-2.5 py-0.5 bg-red-100 text-primary border-2 border-primary font-label-caps text-[10px] font-bold uppercase shadow-[2px_2px_0px_0px_#ba1a1a] animate-fadeIn select-none`,
                                                                                            children: [(0,
                                                                                                x.jsx)(`span`, {
                                                                                                    className: `material-symbols-outlined text-[13px]`,
                                                                                                    children: `error`
                                                                                                }), o.message]
                                                                                        })]
                                                                            }), (0,
                                                                                x.jsx)(`textarea`, {
                                                                                    className: `border-3 border-on-surface p-3.5 font-body-md bg-surface-container transition-all brick-shadow min-h-[120px] text-sm focus:outline-none focus:bg-white focus:border-brick-blue focus:shadow-[6px_6px_0px_0px_#1a1c1c] ${o.message ? `border-primary bg-red-50/60 shadow-[3px_3px_0px_0px_#ba1a1a] animate-shake` : ``}`,
                                                                                    id: `message`,
                                                                                    name: `message`,
                                                                                    value: e.message,
                                                                                    onChange: l,
                                                                                    placeholder: `What would you like to build or discuss?`
                                                                                })]
                                                                    }), (0,
                                                                        x.jsxs)(`button`, {
                                                                            className: `inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-primary text-on-primary font-button-text text-button-text brick-btn uppercase relative mt-2 w-full cursor-pointer disabled:opacity-50`,
                                                                            type: `submit`,
                                                                            disabled: n === `sending`,
                                                                            children: [(0,
                                                                                x.jsxs)(`div`, {
                                                                                    className: `absolute -top-2 left-0 w-full flex justify-around px-2 pointer-events-none`,
                                                                                    children: [(0,
                                                                                        x.jsx)(`span`, {
                                                                                            className: `w-3 h-3 rounded-full bg-primary border-2 border-on-surface`
                                                                                        }), (0,
                                                                                            x.jsx)(`span`, {
                                                                                                className: `w-3 h-3 rounded-full bg-primary border-2 border-on-surface`
                                                                                            }), (0,
                                                                                                x.jsx)(`span`, {
                                                                                                    className: `w-3 h-3 rounded-full bg-primary border-2 border-on-surface`
                                                                                                })]
                                                                                }), n === `sending` ? (0,
                                                                                    x.jsxs)(x.Fragment, {
                                                                                        children: [(0,
                                                                                            x.jsx)(`span`, {
                                                                                                className: `w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin`
                                                                                            }), `SENDING...`]
                                                                                    }) : (0,
                                                                                        x.jsxs)(x.Fragment, {
                                                                                            children: [(0,
                                                                                                x.jsx)(`span`, {
                                                                                                    className: `material-symbols-outlined text-[18px]`,
                                                                                                    children: `send`
                                                                                                }), `SEND MESSAGE`]
                                                                                        })]
                                                                        })]
                                                })]
                                })]
                    })]
        })
}
function Ge() {
    let e = new Date().getFullYear();
    return (0,
        x.jsx)(`footer`, {
            className: `bg-primary border-t-4 border-on-primary-fixed w-full`,
            children: (0,
                x.jsxs)(`div`, {
                    className: `flex flex-col md:flex-row justify-between items-center w-full max-w-[1600px] mx-auto px-6 md:px-12 lg:px-16 py-8 gap-gutter text-center md:text-left`,
                    children: [(0,
                        x.jsxs)(`div`, {
                            children: [(0,
                                x.jsx)(`h2`, {
                                    className: `text-headline-md font-headline-md text-on-primary mb-2 uppercase`,
                                    children: `READY TO BUILD?`
                                }), (0,
                                    x.jsxs)(`p`, {
                                        className: `text-white/80 text-xs font-body-md max-w-md`,
                                        children: [p.about.intro, ` • Let's turn ideas into functional, beautiful realities.`]
                                    }), (0,
                                        x.jsx)(`div`, {
                                            className: `flex gap-4 justify-center md:justify-start mt-4 items-center`,
                                            children: m.map(e => {
                                                let t = f[e.name];
                                                return (0,
                                                    x.jsx)(`a`, {
                                                        className: `opacity-80 hover:opacity-100 hover:scale-110 transition-all active:scale-95 bg-white/20 p-2 rounded-full border border-white/40 text-white inline-flex items-center justify-center`,
                                                        href: e.url,
                                                        target: `_blank`,
                                                        rel: `noopener noreferrer`,
                                                        "aria-label": e.name,
                                                        title: e.name,
                                                        children: t && (0,
                                                            x.jsx)(t, {
                                                                className: `w-5 h-5 fill-current`
                                                            })
                                                    }, e.name)
                                            }
                                            )
                                        })]
                        }), (0,
                            x.jsxs)(`div`, {
                                className: `text-center md:text-right mt-6 md:mt-0`,
                                children: [(0,
                                    x.jsxs)(`div`, {
                                        className: `text-label-caps font-label-caps text-on-primary text-xs flex items-center justify-center md:justify-end gap-1`,
                                        children: [(0,
                                            x.jsx)(`span`, {
                                                className: `font-sans font-normal text-sm leading-none`,
                                                children: `©`
                                            }), (0,
                                                x.jsxs)(`span`, {
                                                    children: [e, ` `, p.name.toUpperCase(), ` • BUILT BY BRICK`]
                                                })]
                                    }), (0,
                                        x.jsx)(`div`, {
                                            className: `text-[11px] text-white/70 font-label-caps mt-1`,
                                            children: p.location.toUpperCase()
                                        })]
                            })]
                })
        })
}
function Ke() {
    let [e, t] = (0,
        u.useState)(!1);
    return (0,
        u.useEffect)(() => {
            let e = !1
                , n = () => {
                    e || (e = !0,
                        requestAnimationFrame(() => {
                            t(window.scrollY > 400),
                                e = !1
                        }
                        ))
                }
                ;
            return window.addEventListener(`scroll`, n, {
                passive: !0
            }),
                n(),
                () => window.removeEventListener(`scroll`, n)
        }
            , []),
        (0,
            x.jsx)(`div`, {
                className: `fixed bottom-6 right-6 md:bottom-8 md:right-8 z-40 transition-all duration-300 ease-out ${e ? `opacity-100 translate-y-0 pointer-events-auto scale-100` : `opacity-0 translate-y-8 pointer-events-none scale-90`}`,
                children: (0,
                    x.jsxs)(`button`, {
                        type: `button`,
                        onClick: () => {
                            window.lenis ? window.lenis.scrollTo(0, {
                                offset: 0,
                                duration: 1.2
                            }) : window.scrollTo({
                                top: 0,
                                behavior: `smooth`
                            })
                        }
                        ,
                        "aria-label": `Scroll to top`,
                        title: `Scroll to top`,
                        className: `group relative flex flex-col items-center justify-center w-12 h-14 md:w-14 md:h-16 bg-brick-yellow border-4 border-on-surface brick-shadow transition-all duration-200 ease-out hover:-translate-y-1.5 hover:-rotate-3 hover:shadow-[7px_7px_0px_0px_#1a1c1c] active:translate-y-0.5 active:rotate-0 cursor-pointer select-none`,
                        children: [(0,
                            x.jsxs)(`div`, {
                                className: `absolute -top-3 left-0 w-full flex justify-around px-2 pointer-events-none`,
                                children: [(0,
                                    x.jsx)(`span`, {
                                        className: `w-3.5 h-3.5 md:w-4 md:h-4 rounded-t-md bg-brick-yellow border-t-2 border-x-2 border-b-0 border-on-surface`
                                    }), (0,
                                        x.jsx)(`span`, {
                                            className: `w-3.5 h-3.5 md:w-4 md:h-4 rounded-t-md bg-brick-yellow border-t-2 border-x-2 border-b-0 border-on-surface`
                                        })]
                            }), (0,
                                x.jsxs)(`div`, {
                                    className: `flex flex-col items-center justify-center z-10 pt-0.5`,
                                    children: [(0,
                                        x.jsx)(`span`, {
                                            className: `material-symbols-outlined text-on-surface text-[24px] md:text-[26px] font-black transition-transform duration-200 group-hover:-translate-y-0.5`,
                                            children: `arrow_upward`
                                        }), (0,
                                            x.jsx)(`span`, {
                                                className: `font-label-caps text-[9px] md:text-[10px] font-black text-on-surface tracking-wider leading-none mt-0.5`,
                                                children: `TOP`
                                            })]
                                })]
                    })
            })
}
function qe() {
    (0,
        u.useEffect)(() => {
            if (window.matchMedia(`(prefers-reduced-motion: reduce)`).matches) {
                document.querySelectorAll(`.reveal, .reveal-left, .reveal-right, .reveal-pop, .reveal-scale`).forEach(e => e.classList.add(`reveal-visible`));
                return
            }
            let e = new IntersectionObserver((e, t) => {
                e.forEach(e => {
                    e.isIntersecting && (e.target.classList.add(`reveal-visible`),
                        t.unobserve(e.target))
                }
                )
            }
                , {
                    root: null,
                    rootMargin: `0px 0px -50px 0px`,
                    threshold: .05
                })
                , t = () => {
                    document.querySelectorAll(`.reveal, .reveal-left, .reveal-right, .reveal-pop, .reveal-scale`).forEach(t => {
                        t.classList.contains(`reveal-visible`) || e.observe(t)
                    }
                    )
                }
                ;
            t();
            let n = new MutationObserver(() => {
                t()
            }
            );
            return n.observe(document.body, {
                childList: !0,
                subtree: !0
            }),
                () => {
                    e.disconnect(),
                        n.disconnect()
                }
        }
            , [])
}
var Je = `1.3.26`;
function Ye(e, t, n) {
    return Math.max(e, Math.min(t, n))
}
function Xe(e, t, n) {
    return (1 - n) * e + n * t
}
function Ze(e, t, n, r) {
    return Xe(e, t, 1 - Math.exp(-n * r))
}
function Qe(e, t) {
    return (e % t + t) % t
}
var $e = class {
    isRunning = !1;
    value = 0;
    from = 0;
    to = 0;
    currentTime = 0;
    lerp;
    duration;
    easing;
    onUpdate;
    advance(e) {
        if (!this.isRunning)
            return;
        let t = !1;
        if (this.duration && this.easing) {
            this.currentTime += e;
            let n = Ye(0, this.currentTime / this.duration, 1);
            t = n >= 1;
            let r = t ? 1 : this.easing(n);
            this.value = this.from + (this.to - this.from) * r
        } else
            this.lerp ? (this.value = Ze(this.value, this.to, this.lerp * 60, e),
                Math.round(this.value) === Math.round(this.to) && (this.value = this.to,
                    t = !0)) : (this.value = this.to,
                        t = !0);
        t && this.stop(),
            this.onUpdate?.(this.value, t)
    }
    stop() {
        this.isRunning = !1
    }
    fromTo(e, t, { lerp: n, duration: r, easing: i, onStart: a, onUpdate: o }) {
        this.from = this.value = e,
            this.to = t,
            this.lerp = n,
            this.duration = r,
            this.easing = i,
            this.currentTime = 0,
            this.isRunning = !0,
            a?.(),
            this.onUpdate = o
    }
}
    ;
function et(e, t) {
    let n;
    return function (...r) {
        clearTimeout(n),
            n = setTimeout(() => {
                n = void 0,
                    e.apply(this, r)
            }
                , t)
    }
}
var tt = class {
    width = 0;
    height = 0;
    scrollHeight = 0;
    scrollWidth = 0;
    debouncedResize;
    wrapperResizeObserver;
    contentResizeObserver;
    constructor(e, t, { autoResize: n = !0, debounce: r = 250 } = {}) {
        this.wrapper = e,
            this.content = t,
            n && (this.debouncedResize = et(this.resize, r),
                this.wrapper instanceof Window ? window.addEventListener(`resize`, this.debouncedResize) : (this.wrapperResizeObserver = new ResizeObserver(this.debouncedResize),
                    this.wrapperResizeObserver.observe(this.wrapper)),
                this.contentResizeObserver = new ResizeObserver(this.debouncedResize),
                this.contentResizeObserver.observe(this.content)),
            this.resize()
    }
    destroy() {
        this.wrapperResizeObserver?.disconnect(),
            this.contentResizeObserver?.disconnect(),
            this.wrapper === window && this.debouncedResize && window.removeEventListener(`resize`, this.debouncedResize)
    }
    resize = () => {
        this.onWrapperResize(),
            this.onContentResize()
    }
        ;
    onWrapperResize = () => {
        this.wrapper instanceof Window ? (this.width = window.innerWidth,
            this.height = window.innerHeight) : (this.width = this.wrapper.clientWidth,
                this.height = this.wrapper.clientHeight)
    }
        ;
    onContentResize = () => {
        this.wrapper instanceof Window ? (this.scrollHeight = this.content.scrollHeight,
            this.scrollWidth = this.content.scrollWidth) : (this.scrollHeight = this.wrapper.scrollHeight,
                this.scrollWidth = this.wrapper.scrollWidth)
    }
        ;
    get limit() {
        return {
            x: this.scrollWidth - this.width,
            y: this.scrollHeight - this.height
        }
    }
}
    , nt = class {
        events = {};
        emit(e, ...t) {
            let n = this.events[e] || [];
            for (let e = 0, r = n.length; e < r; e++)
                n[e]?.(...t)
        }
        on(e, t) {
            return this.events[e] ? this.events[e].push(t) : this.events[e] = [t],
                () => {
                    this.events[e] = this.events[e]?.filter(e => t !== e)
                }
        }
        off(e, t) {
            this.events[e] = this.events[e]?.filter(e => t !== e)
        }
        destroy() {
            this.events = {}
        }
    }
    , rt = 100 / 6
    , it = {
        passive: !1
    };
function at(e, t) {
    return e === 1 ? rt : e === 2 ? t : 1
}
var ot = class {
    touchStart = {
        x: 0,
        y: 0
    };
    lastDelta = {
        x: 0,
        y: 0
    };
    window = {
        width: 0,
        height: 0
    };
    emitter = new nt;
    constructor(e, t = {
        wheelMultiplier: 1,
        touchMultiplier: 1
    }) {
        this.element = e,
            this.options = t,
            window.addEventListener(`resize`, this.onWindowResize),
            this.onWindowResize(),
            this.element.addEventListener(`wheel`, this.onWheel, it),
            this.element.addEventListener(`touchstart`, this.onTouchStart, it),
            this.element.addEventListener(`touchmove`, this.onTouchMove, it),
            this.element.addEventListener(`touchend`, this.onTouchEnd, it)
    }
    on(e, t) {
        return this.emitter.on(e, t)
    }
    destroy() {
        this.emitter.destroy(),
            window.removeEventListener(`resize`, this.onWindowResize),
            this.element.removeEventListener(`wheel`, this.onWheel, it),
            this.element.removeEventListener(`touchstart`, this.onTouchStart, it),
            this.element.removeEventListener(`touchmove`, this.onTouchMove, it),
            this.element.removeEventListener(`touchend`, this.onTouchEnd, it)
    }
    onTouchStart = e => {
        let { clientX: t, clientY: n } = e.targetTouches ? e.targetTouches[0] : e;
        this.touchStart.x = t,
            this.touchStart.y = n,
            this.lastDelta = {
                x: 0,
                y: 0
            },
            this.emitter.emit(`scroll`, {
                deltaX: 0,
                deltaY: 0,
                event: e
            })
    }
        ;
    onTouchMove = e => {
        let { clientX: t, clientY: n } = e.targetTouches ? e.targetTouches[0] : e
            , r = -(t - this.touchStart.x) * this.options.touchMultiplier
            , i = -(n - this.touchStart.y) * this.options.touchMultiplier;
        this.touchStart.x = t,
            this.touchStart.y = n,
            this.lastDelta = {
                x: r,
                y: i
            },
            this.emitter.emit(`scroll`, {
                deltaX: r,
                deltaY: i,
                event: e
            })
    }
        ;
    onTouchEnd = e => {
        this.emitter.emit(`scroll`, {
            deltaX: this.lastDelta.x,
            deltaY: this.lastDelta.y,
            event: e
        })
    }
        ;
    onWheel = e => {
        let { deltaX: t, deltaY: n, deltaMode: r } = e
            , i = at(r, this.window.width)
            , a = at(r, this.window.height);
        t *= i,
            n *= a,
            t *= this.options.wheelMultiplier,
            n *= this.options.wheelMultiplier,
            this.emitter.emit(`scroll`, {
                deltaX: t,
                deltaY: n,
                event: e
            })
    }
        ;
    onWindowResize = () => {
        this.window = {
            width: window.innerWidth,
            height: window.innerHeight
        }
    }
}
    , st = e => Math.min(1, 1.001 - 2 ** (-10 * e))
    , ct = class {
        _isScrolling = !1;
        _isStopped = !1;
        _isLocked = !1;
        _preventNextNativeScrollEvent = !1;
        _resetVelocityTimeout = null;
        _rafId = null;
        _isDraggingSelection = !1;
        reducedMotionMediaQuery = window.matchMedia(`(prefers-reduced-motion: reduce)`);
        isTouching;
        isIos;
        time = 0;
        userData = {};
        lastVelocity = 0;
        velocity = 0;
        direction = 0;
        options;
        targetScroll;
        animatedScroll;
        animate = new $e;
        emitter = new nt;
        dimensions;
        virtualScroll;
        constructor({ wrapper: e = window, content: t = document.documentElement, eventsTarget: n = e, smoothWheel: r = !0, syncTouch: i = !1, syncTouchLerp: a = .075, touchInertiaExponent: o = 1.7, duration: s, easing: c, lerp: l = .1, infinite: u = !1, orientation: d = `vertical`, gestureOrientation: f = d === `horizontal` ? `both` : `vertical`, touchMultiplier: p = 1, wheelMultiplier: m = 1, autoResize: h = !0, prevent: g, virtualScroll: _, overscroll: v = !0, autoRaf: y = !1, anchors: b = !1, autoToggle: x = !1, allowNestedScroll: S = !1, __experimental__naiveDimensions: C = !1, naiveDimensions: ee = C, stopInertiaOnNavigate: te = !1, respectReducedMotion: ne = !0 } = {}) {
            window.lenisVersion = Je,
                window.lenis || (window.lenis = {}),
                window.lenis.version = Je,
                d === `horizontal` && (window.lenis.horizontal = !0),
                i === !0 && (window.lenis.touch = !0),
                this.isIos = /(iPad|iPhone|iPod)/g.test(navigator.userAgent),
                (!e || e === document.documentElement) && (e = window),
                typeof s == `number` && typeof c != `function` ? c = st : typeof c == `function` && typeof s != `number` && (s = 1),
                this.options = {
                    wrapper: e,
                    content: t,
                    eventsTarget: n,
                    smoothWheel: r,
                    syncTouch: i,
                    syncTouchLerp: a,
                    touchInertiaExponent: o,
                    duration: s,
                    easing: c,
                    lerp: l,
                    infinite: u,
                    gestureOrientation: f,
                    orientation: d,
                    touchMultiplier: p,
                    wheelMultiplier: m,
                    autoResize: h,
                    prevent: g,
                    virtualScroll: _,
                    overscroll: v,
                    autoRaf: y,
                    anchors: b,
                    autoToggle: x,
                    allowNestedScroll: S,
                    naiveDimensions: ee,
                    stopInertiaOnNavigate: te,
                    respectReducedMotion: ne
                },
                this.dimensions = new tt(e, t, {
                    autoResize: h
                }),
                this.updateClassName(),
                this.targetScroll = this.animatedScroll = this.actualScroll,
                this.options.wrapper.addEventListener(`scroll`, this.onNativeScroll),
                this.options.wrapper.addEventListener(`scrollend`, this.onScrollEnd, {
                    capture: !0
                }),
                (this.options.anchors || this.options.stopInertiaOnNavigate) && this.options.wrapper.addEventListener(`click`, this.onClick),
                this.options.wrapper.addEventListener(`pointerdown`, this.onPointerDown),
                this.virtualScroll = new ot(n, {
                    touchMultiplier: p,
                    wheelMultiplier: m
                }),
                this.virtualScroll.on(`scroll`, this.onVirtualScroll),
                this.options.autoToggle && (this.checkOverflow(),
                    this.rootElement.addEventListener(`transitionend`, this.onTransitionEnd)),
                this.options.autoRaf && (this._rafId = requestAnimationFrame(this.raf))
        }
        destroy() {
            this.emitter.destroy(),
                this.options.wrapper.removeEventListener(`scroll`, this.onNativeScroll),
                this.options.wrapper.removeEventListener(`scrollend`, this.onScrollEnd, {
                    capture: !0
                }),
                this.options.wrapper.removeEventListener(`pointerdown`, this.onPointerDown),
                (this.options.anchors || this.options.stopInertiaOnNavigate) && this.options.wrapper.removeEventListener(`click`, this.onClick),
                this.virtualScroll.destroy(),
                this.dimensions.destroy(),
                this.cleanUpClassName(),
                this._rafId && cancelAnimationFrame(this._rafId)
        }
        on(e, t) {
            return this.emitter.on(e, t)
        }
        off(e, t) {
            return this.emitter.off(e, t)
        }
        onScrollEnd = e => {
            e instanceof CustomEvent || (this.isScrolling === `smooth` || this.isScrolling === !1) && e.stopPropagation()
        }
            ;
        dispatchScrollendEvent = () => {
            this.options.wrapper.dispatchEvent(new CustomEvent(`scrollend`, {
                bubbles: this.options.wrapper === window,
                detail: {
                    lenisScrollEnd: !0
                }
            }))
        }
            ;
        get overflow() {
            let e = this.isHorizontal ? `overflow-x` : `overflow-y`;
            return getComputedStyle(this.rootElement)[e]
        }
        checkOverflow() {
            [`hidden`, `clip`].includes(this.overflow) ? this.internalStop() : this.internalStart()
        }
        onTransitionEnd = e => {
            e.propertyName?.includes(`overflow`) && e.target === this.rootElement && this.checkOverflow()
        }
            ;
        setScroll(e) {
            this.isHorizontal ? this.options.wrapper.scrollTo({
                left: e,
                behavior: `instant`
            }) : this.options.wrapper.scrollTo({
                top: e,
                behavior: `instant`
            })
        }
        onClick = e => {
            let t = e.composedPath().filter(e => e instanceof HTMLAnchorElement && e.href).map(e => new URL(e.href))
                , n = new URL(window.location.href);
            if (this.options.anchors) {
                let e = t.find(e => n.host === e.host && n.pathname === e.pathname && e.hash);
                if (e) {
                    let t = typeof this.options.anchors == `object` && this.options.anchors ? this.options.anchors : void 0
                        , n = decodeURIComponent(e.hash);
                    this.scrollTo(n, t);
                    return
                }
            }
            if (this.options.stopInertiaOnNavigate && t.some(e => n.host === e.host && n.pathname !== e.pathname)) {
                this.reset();
                return
            }
        }
            ;
        onPointerDown = e => {
            e.button === 1 && this.reset()
        }
            ;
        isTouchOnSelectionHandle(e) {
            let t = window.getSelection();
            if (!t || t.isCollapsed || t.rangeCount === 0)
                return !1;
            let n = e.targetTouches[0] ?? e.changedTouches[0];
            if (!n)
                return !1;
            let r = t.getRangeAt(0).getClientRects();
            if (r.length === 0)
                return !1;
            let i = r[0]
                , a = r[r.length - 1]
                , o = Math.hypot(n.clientX - i.left, n.clientY - i.top) <= 40
                , s = Math.hypot(n.clientX - a.right, n.clientY - a.bottom) <= 40;
            return o || s
        }
        onVirtualScroll = e => {
            if (typeof this.options.virtualScroll == `function` && this.options.virtualScroll(e) === !1)
                return;
            let { deltaX: t, deltaY: n, event: r } = e;
            if (this.emitter.emit(`virtual-scroll`, {
                deltaX: t,
                deltaY: n,
                event: r
            }),
                r.ctrlKey || r.lenisStopPropagation)
                return;
            let i = r.type.includes(`touch`)
                , a = r.type.includes(`wheel`);
            if (i && this.isIos && (r.type === `touchstart` && (this._isDraggingSelection = this.isTouchOnSelectionHandle(r)),
                this._isDraggingSelection)) {
                r.type === `touchend` && (this._isDraggingSelection = !1);
                return
            }
            this.isTouching = r.type === `touchstart` || r.type === `touchmove`;
            let o = t === 0 && n === 0;
            if (this.options.syncTouch && i && r.type === `touchstart` && o && !this.isStopped && !this.isLocked) {
                this.reset();
                return
            }
            let s = this.options.gestureOrientation === `vertical` && n === 0 || this.options.gestureOrientation === `horizontal` && t === 0;
            if (o || s)
                return;
            let c = r.composedPath();
            c = c.slice(0, c.indexOf(this.rootElement));
            let l = this.options.prevent
                , u = Math.abs(t) >= Math.abs(n) ? `horizontal` : `vertical`;
            if (c.find(e => e instanceof HTMLElement && (typeof l == `function` && l?.(e) || e.hasAttribute?.(`data-lenis-prevent`) || u === `vertical` && e.hasAttribute?.(`data-lenis-prevent-vertical`) || u === `horizontal` && e.hasAttribute?.(`data-lenis-prevent-horizontal`) || i && e.hasAttribute?.(`data-lenis-prevent-touch`) || a && e.hasAttribute?.(`data-lenis-prevent-wheel`) || this.options.allowNestedScroll && this.hasNestedScroll(e, {
                deltaX: t,
                deltaY: n
            }))))
                return;
            if (this.isStopped || this.isLocked) {
                r.cancelable && r.preventDefault();
                return
            }
            if (!(this.options.syncTouch && i || this.options.smoothWheel && a)) {
                this.isScrolling = `native`,
                    this.animate.stop(),
                    r.lenisStopPropagation = !0;
                return
            }
            let d = n;
            this.options.gestureOrientation === `both` ? d = Math.abs(n) > Math.abs(t) ? n : t : this.options.gestureOrientation === `horizontal` && (d = t),
                (!this.options.overscroll || this.options.infinite || this.options.wrapper !== window && this.limit > 0 && (this.animatedScroll > 0 && this.animatedScroll < this.limit || this.animatedScroll === 0 && n > 0 || this.animatedScroll === this.limit && n < 0)) && (r.lenisStopPropagation = !0),
                r.cancelable && r.preventDefault();
            let f = i && this.options.syncTouch
                , p = i && r.type === `touchend`;
            p && (d = Math.sign(d) * Math.abs(this.velocity) ** this.options.touchInertiaExponent),
                this.scrollTo(this.targetScroll + d, {
                    programmatic: !1,
                    ...f ? {
                        lerp: p ? this.options.syncTouchLerp : 1
                    } : {
                        lerp: this.options.lerp,
                        duration: this.options.duration,
                        easing: this.options.easing
                    }
                })
        }
            ;
        resize() {
            this.dimensions.resize(),
                this.animatedScroll = this.targetScroll = this.actualScroll,
                this.emit()
        }
        emit() {
            this.emitter.emit(`scroll`, this)
        }
        onNativeScroll = () => {
            if (this._resetVelocityTimeout !== null && (clearTimeout(this._resetVelocityTimeout),
                this._resetVelocityTimeout = null),
                this._preventNextNativeScrollEvent) {
                this._preventNextNativeScrollEvent = !1;
                return
            }
            if (this.isScrolling === !1 || this.isScrolling === `native`) {
                let e = this.animatedScroll;
                this.animatedScroll = this.targetScroll = this.actualScroll,
                    this.lastVelocity = this.velocity,
                    this.velocity = this.animatedScroll - e,
                    this.direction = Math.sign(this.animatedScroll - e),
                    this.isStopped || (this.isScrolling = `native`),
                    this.emit(),
                    this.velocity !== 0 && (this._resetVelocityTimeout = setTimeout(() => {
                        this.lastVelocity = this.velocity,
                            this.velocity = 0,
                            this.isScrolling = !1,
                            this.emit()
                    }
                        , 400))
            }
        }
            ;
        reset() {
            this.isLocked = !1,
                this.isScrolling = !1,
                this.animatedScroll = this.targetScroll = this.actualScroll,
                this.lastVelocity = this.velocity = 0,
                this.animate.stop()
        }
        start() {
            if (this.isStopped) {
                if (this.options.autoToggle) {
                    this.rootElement.style.removeProperty(`overflow`);
                    return
                }
                this.internalStart()
            }
        }
        internalStart() {
            this.isStopped && (this.reset(),
                this.isStopped = !1,
                this.emit())
        }
        stop() {
            if (!this.isStopped) {
                if (this.options.autoToggle) {
                    this.rootElement.style.setProperty(`overflow`, `clip`);
                    return
                }
                this.internalStop()
            }
        }
        internalStop() {
            this.isStopped || (this.reset(),
                this.isStopped = !0,
                this.emit())
        }
        raf = e => {
            let t = e - (this.time || e);
            this.time = e,
                this.animate.advance(t * .001),
                this.options.autoRaf && (this._rafId = requestAnimationFrame(this.raf))
        }
            ;
        scrollTo(e, { offset: t = 0, immediate: n = !1, lock: r = !1, programmatic: i = !0, lerp: a = i ? this.options.lerp : void 0, duration: o = i ? this.options.duration : void 0, easing: s = i ? this.options.easing : void 0, onStart: c, onComplete: l, force: u = !1, userData: d } = {}) {
            if (this.prefersReducedMotion && (i ? n = !0 : (a = 1,
                o = void 0,
                s = void 0)),
                (this.isStopped || this.isLocked) && !u)
                return;
            let f = e
                , p = t;
            if (typeof f == `string` && [`top`, `left`, `start`, `#`].includes(f))
                f = 0;
            else if (typeof f == `string` && [`bottom`, `right`, `end`].includes(f))
                f = this.limit;
            else {
                let e = null;
                if (typeof f == `string` ? (e = f.startsWith(`#`) ? document.getElementById(f.slice(1)) : document.querySelector(f),
                    e || (f === `#top` ? f = 0 : console.warn(`Lenis: Target not found`, f))) : f instanceof HTMLElement && f?.nodeType && (e = f),
                    e) {
                    if (this.options.wrapper !== window) {
                        let e = this.rootElement.getBoundingClientRect();
                        p -= this.isHorizontal ? e.left : e.top
                    }
                    let t = e.getBoundingClientRect()
                        , n = getComputedStyle(e)
                        , r = this.isHorizontal ? Number.parseFloat(n.scrollMarginLeft) : Number.parseFloat(n.scrollMarginTop)
                        , i = getComputedStyle(this.rootElement)
                        , a = this.isHorizontal ? Number.parseFloat(i.scrollPaddingLeft) : Number.parseFloat(i.scrollPaddingTop);
                    f = (this.isHorizontal ? t.left : t.top) + this.animatedScroll - (Number.isNaN(r) ? 0 : r) - (Number.isNaN(a) ? 0 : a)
                }
            }
            if (typeof f == `number`) {
                if (f += p,
                    this.options.infinite) {
                    if (i) {
                        this.targetScroll = this.animatedScroll = this.scroll;
                        let e = f - this.animatedScroll;
                        e > this.limit / 2 ? f -= this.limit : e < -this.limit / 2 && (f += this.limit)
                    }
                } else
                    f = Ye(0, f, this.limit);
                if (f === this.targetScroll) {
                    c?.(this),
                        l?.(this);
                    return
                }
                if (this.userData = d ?? {},
                    n) {
                    this.animatedScroll = this.targetScroll = f,
                        this.setScroll(this.scroll),
                        this.reset(),
                        this.preventNextNativeScrollEvent(),
                        this.emit(),
                        l?.(this),
                        this.userData = {},
                        requestAnimationFrame(() => {
                            this.dispatchScrollendEvent()
                        }
                        );
                    return
                }
                i || (this.targetScroll = f),
                    typeof o == `number` && typeof s != `function` ? s = st : typeof s == `function` && typeof o != `number` && (o = 1),
                    this.animate.fromTo(this.animatedScroll, f, {
                        duration: o,
                        easing: s,
                        lerp: a,
                        onStart: () => {
                            r && (this.isLocked = !0),
                                this.isScrolling = `smooth`,
                                c?.(this)
                        }
                        ,
                        onUpdate: (e, t) => {
                            this.isScrolling = `smooth`,
                                this.lastVelocity = this.velocity,
                                this.velocity = e - this.animatedScroll,
                                this.direction = Math.sign(this.velocity),
                                this.animatedScroll = e,
                                this.setScroll(this.scroll),
                                i && (this.targetScroll = e),
                                t || this.emit(),
                                t && (this.reset(),
                                    this.emit(),
                                    l?.(this),
                                    this.userData = {},
                                    requestAnimationFrame(() => {
                                        this.dispatchScrollendEvent()
                                    }
                                    ),
                                    this.preventNextNativeScrollEvent())
                        }
                    })
            }
        }
        preventNextNativeScrollEvent() {
            this._preventNextNativeScrollEvent = !0,
                requestAnimationFrame(() => {
                    this._preventNextNativeScrollEvent = !1
                }
                )
        }
        hasNestedScroll(e, { deltaX: t, deltaY: n }) {
            let r = Date.now();
            e._lenis ||= {};
            let i = e._lenis, a, o, s, c, l, u, d, f, p, m;
            if (r - (i.time ?? 0) > 2e3) {
                i.time = Date.now();
                let t = window.getComputedStyle(e);
                if (i.computedStyle = t,
                    a = [`auto`, `overlay`, `scroll`].includes(t.overflowX),
                    o = [`auto`, `overlay`, `scroll`].includes(t.overflowY),
                    l = [`auto`].includes(t.overscrollBehaviorX),
                    u = [`auto`].includes(t.overscrollBehaviorY),
                    i.hasOverflowX = a,
                    i.hasOverflowY = o,
                    !(a || o))
                    return !1;
                d = e.scrollWidth,
                    f = e.scrollHeight,
                    p = e.clientWidth,
                    m = e.clientHeight,
                    s = d > p,
                    c = f > m,
                    i.isScrollableX = s,
                    i.isScrollableY = c,
                    i.scrollWidth = d,
                    i.scrollHeight = f,
                    i.clientWidth = p,
                    i.clientHeight = m,
                    i.hasOverscrollBehaviorX = l,
                    i.hasOverscrollBehaviorY = u
            } else
                s = i.isScrollableX,
                    c = i.isScrollableY,
                    a = i.hasOverflowX,
                    o = i.hasOverflowY,
                    d = i.scrollWidth,
                    f = i.scrollHeight,
                    p = i.clientWidth,
                    m = i.clientHeight,
                    l = i.hasOverscrollBehaviorX,
                    u = i.hasOverscrollBehaviorY;
            if (!(a && s || o && c))
                return !1;
            let h = Math.abs(t) >= Math.abs(n) ? `horizontal` : `vertical`, g, _, v, y, b, x;
            if (h === `horizontal`)
                g = Math.round(e.scrollLeft),
                    _ = d - p,
                    v = t,
                    y = a,
                    b = s,
                    x = l;
            else if (h === `vertical`)
                g = Math.round(e.scrollTop),
                    _ = f - m,
                    v = n,
                    y = o,
                    b = c,
                    x = u;
            else
                return !1;
            return !x && (g >= _ || g <= 0) || (v > 0 ? g < _ : g > 0) && y && b
        }
        get rootElement() {
            return this.options.wrapper === window ? document.documentElement : this.options.wrapper
        }
        get limit() {
            return this.options.naiveDimensions ? this.isHorizontal ? this.rootElement.scrollWidth - this.rootElement.clientWidth : this.rootElement.scrollHeight - this.rootElement.clientHeight : this.dimensions.limit[this.isHorizontal ? `x` : `y`]
        }
        get isHorizontal() {
            return this.options.orientation === `horizontal`
        }
        get actualScroll() {
            let e = this.options.wrapper;
            return this.isHorizontal ? e.scrollX ?? e.scrollLeft : e.scrollY ?? e.scrollTop
        }
        get scroll() {
            return this.options.infinite ? Qe(this.animatedScroll, this.limit) : this.animatedScroll
        }
        get progress() {
            return this.limit === 0 ? 1 : this.scroll / this.limit
        }
        get isScrolling() {
            return this._isScrolling
        }
        set isScrolling(e) {
            this._isScrolling !== e && (this._isScrolling = e,
                this.updateClassName())
        }
        get isStopped() {
            return this._isStopped
        }
        set isStopped(e) {
            this._isStopped !== e && (this._isStopped = e,
                this.updateClassName())
        }
        get isLocked() {
            return this._isLocked
        }
        set isLocked(e) {
            this._isLocked !== e && (this._isLocked = e,
                this.updateClassName())
        }
        get isSmooth() {
            return this.isScrolling === `smooth`
        }
        get prefersReducedMotion() {
            return this.options.respectReducedMotion && this.reducedMotionMediaQuery.matches
        }
        get className() {
            let e = `lenis`;
            return this.options.autoToggle && (e += ` lenis-autoToggle`),
                this.isStopped && (e += ` lenis-stopped`),
                this.isLocked && (e += ` lenis-locked`),
                this.isScrolling && (e += ` lenis-scrolling`),
                this.isScrolling === `smooth` && (e += ` lenis-smooth`),
                e
        }
        updateClassName() {
            this.cleanUpClassName(),
                this.className.split(` `).forEach(e => {
                    this.rootElement.classList.add(e)
                }
                )
        }
        cleanUpClassName() {
            for (let e of Array.from(this.rootElement.classList))
                (e === `lenis` || e.startsWith(`lenis-`)) && this.rootElement.classList.remove(e)
        }
    }
    ;
function lt() {
    (0,
        u.useEffect)(() => {
            if (window.matchMedia(`(prefers-reduced-motion: reduce)`).matches)
                return;
            let e = new ct({
                duration: 1.2,
                easing: e => Math.min(1, 1.001 - 2 ** (-10 * e)),
                orientation: `vertical`,
                gestureOrientation: `vertical`,
                smoothWheel: !0,
                wheelMultiplier: 1,
                touchMultiplier: 1.5,
                infinite: !1
            });
            window.lenis = e;
            let t;
            function n(r) {
                e.raf(r),
                    t = requestAnimationFrame(n)
            }
            t = requestAnimationFrame(n);
            let r = t => {
                let n = t.target.closest(`a[href^="#"]`);
                if (!n)
                    return;
                let r = n.getAttribute(`href`);
                if (r) {
                    if (r === `#` || r === `#home`)
                        t.preventDefault(),
                            e.scrollTo(0, {
                                offset: 0,
                                duration: 1.2
                            }),
                            window.history.pushState(null, ``, `#home`);
                    else {
                        let n = document.querySelector(r);
                        n && (t.preventDefault(),
                            e.scrollTo(n, {
                                offset: -90,
                                duration: 1.2
                            }),
                            window.history.pushState(null, ``, r))
                    }
                }
            }
                ;
            return document.addEventListener(`click`, r),
                () => {
                    cancelAnimationFrame(t),
                        document.removeEventListener(`click`, r),
                        e.destroy(),
                        window.lenis = null
                }
        }
            , [])
}
function ut() {
    return lt(),
        qe(),
        (0,
            x.jsxs)(x.Fragment, {
                children: [(0,
                    x.jsx)(ee, {}), (0,
                        x.jsx)(ae, {}), (0,
                            x.jsxs)(`main`, {
                                className: `pb-32 pt-0 relative z-40 lego-dot-bg overflow-x-clip`,
                                children: [(0,
                                    x.jsxs)(`div`, {
                                        id: `about`,
                                        className: `scroll-mt-28`,
                                        children: [(0,
                                            x.jsx)(le, {}), (0,
                                                x.jsx)(ue, {}), (0,
                                                    x.jsx)(pe, {}), (0,
                                                        x.jsx)(O, {}), (0,
                                                            x.jsx)(he, {}), (0,
                                                                x.jsx)(ye, {})]
                                    }), (0,
                                        x.jsx)(Se, {}), (0,
                                            x.jsx)(We, {})]

            x.jsx)(Ge, {}), (0,
                    x.jsx)(Ke, {})]
            })
}
(0,
    d.createRoot)(document.getElementById(`root`)).render((0,
        x.jsx)(u.StrictMode, {
            children: (0,
                x.jsx)(ut, {})
        }));
