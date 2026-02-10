const __vite__mapDeps = (i, m = __vite__mapDeps, d = (m.f || (m.f = [
    "assets/js/HomePage-B2gM4d0r.js",
    "assets/js/react-vendor-B4gRMC9K.js",
    "assets/js/lucide-vendor-CPeQdDtJ.js",
    "assets/js/WinnersPage-MXv9qo_k.js",
    "assets/js/GamesPage-BoL-FAa6.js",
    "assets/js/SweepstakesPage-D6jFOtjK.js"
]))) => i.map(i => d[i]);

import { r as e, a as t, R as a } from "./react-vendor-B4gRMC9K.js";
/* import { d as s, S as r, g as n, n as i, a as l, e as o, c as d, m as c, b as p, f as u, h as m, i as h } from "./swiper-vendor-CthP1dgq.js";
 */
import { E as f, G as g, X as b, S as x, T as v, a as w, M as y } from "./lucide-vendor-CPeQdDtJ.js";

// React JSX runtime setup
var j = { exports: {} };
var E = {};
var N = e;
var k = Symbol.for("react.element");
var C = Symbol.for("react.fragment");
var S = Object.prototype.hasOwnProperty;
var _ = N.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner;
var T = { key: true, ref: true, __self: true, __source: true };

function P(e, t, a) {
    var s, r = {}, n = null, i = null;

    for (s in void 0 !== a && (n = "" + a),
        void 0 !== t.key && (n = "" + t.key),
        void 0 !== t.ref && (i = t.ref),
        t) {
        S.call(t, s) && !T.hasOwnProperty(s) && (r[s] = t[s]);
    }

    if (e && e.defaultProps) {
        for (s in t = e.defaultProps) {
            void 0 === r[s] && (r[s] = t[s]);
        }
    }

    return {
        $$typeof: k,
        type: e,
        key: n,
        ref: i,
        props: r,
        _owner: _.current
    };
}

E.Fragment = C;
E.jsx = P;
E.jsxs = P;
j.exports = E;

var L, O = j.exports, M = t;
L = M.createRoot;
M.hydrateRoot;

// Module preload helper
const z = function () {
    const e = "undefined" != typeof document && document.createElement("link").relList;
    return e && e.supports && e.supports("modulepreload") ? "modulepreload" : "preload";
}();

const B = {};

const A = function (e, t, a) {
    let s = Promise.resolve();

    if (t && t.length > 0) {
        document.getElementsByTagName("link");
        const e = document.querySelector("meta[property=csp-nonce]");
        const a = e?.nonce || e?.getAttribute("nonce");

        s = Promise.allSettled(t.map((e => {
            if ((e = function (e) {
                return "/" + e;
            }(e)) in B) return;

            B[e] = true;
            const t = e.endsWith(".css");
            const s = t ? '[rel="stylesheet"]' : "";

            if (document.querySelector(`link[href="${e}"]${s}`)) return;

            const r = document.createElement("link");
            return r.rel = t ? "stylesheet" : z,
                t || (r.as = "script"),
                r.crossOrigin = "",
                r.href = e,
                a && r.setAttribute("nonce", a),
                document.head.appendChild(r),
                t ? new Promise(((t, a) => {
                    r.addEventListener("load", t);
                    r.addEventListener("error", (() => a(new Error(`Unable to preload CSS for ${e}`))));
                })) : void 0;
        })));
    }

    function r(e) {
        const t = new Event("vite:preloadError", { cancelable: true });
        if (t.payload = e, window.dispatchEvent(t), !t.defaultPrevented) throw e;
    }

    return s.then((t => {
        for (const e of t || []) {
            "rejected" === e.status && r(e.reason);
        }
        return e().catch(r);
    }));
};

// Swiper parameter constants
const D = [
    "eventsPrefix", "injectStyles", "injectStylesUrls", "modules", "init", "_direction",
    "oneWayMovement", "swiperElementNodeName", "touchEventsTarget", "initialSlide",
    "_speed", "cssMode", "updateOnWindowResize", "resizeObserver", "nested",
    "focusableElements", "_enabled", "_width", "_height", "preventInteractionOnTransition",
    "userAgent", "url", "_edgeSwipeDetection", "_edgeSwipeThreshold", "_freeMode",
    "_autoHeight", "setWrapperSize", "virtualTranslate", "_effect", "breakpoints",
    "breakpointsBase", "_spaceBetween", "_slidesPerView", "maxBackfaceHiddenSlides",
    "_grid", "_slidesPerGroup", "_slidesPerGroupSkip", "_slidesPerGroupAuto",
    "_centeredSlides", "_centeredSlidesBounds", "_slidesOffsetBefore", "_slidesOffsetAfter",
    "normalizeSlideIndex", "_centerInsufficientSlides", "_watchOverflow", "roundLengths",
    "touchRatio", "touchAngle", "simulateTouch", "_shortSwipes", "_longSwipes",
    "longSwipesRatio", "longSwipesMs", "_followFinger", "allowTouchMove", "_threshold",
    "touchMoveStopPropagation", "touchStartPreventDefault", "touchStartForcePreventDefault",
    "touchReleaseOnEdges", "uniqueNavElements", "_resistance", "_resistanceRatio",
    "_watchSlidesProgress", "_grabCursor", "preventClicks", "preventClicksPropagation",
    "_slideToClickedSlide", "_loop", "loopAdditionalSlides", "loopAddBlankSlides",
    "loopPreventsSliding", "_rewind", "_allowSlidePrev", "_allowSlideNext", "_swipeHandler",
    "_noSwiping", "noSwipingClass", "noSwipingSelector", "passiveListeners",
    "containerModifierClass", "slideClass", "slideActiveClass", "slideVisibleClass",
    "slideFullyVisibleClass", "slideNextClass", "slidePrevClass", "slideBlankClass",
    "wrapperClass", "lazyPreloaderClass", "lazyPreloadPrevNext", "runCallbacksOnInit",
    "observer", "observeParents", "observeSlideChildren", "a11y", "_autoplay",
    "_controller", "coverflowEffect", "cubeEffect", "fadeEffect", "flipEffect",
    "creativeEffect", "cardsEffect", "hashNavigation", "history", "keyboard",
    "mousewheel", "_navigation", "_pagination", "parallax", "_scrollbar", "_thumbs",
    "virtual", "zoom", "control"
];

// Utility functions
function $(e) {
    return "object" == typeof e &&
        null !== e &&
        e.constructor &&
        "Object" === Object.prototype.toString.call(e).slice(8, -1) &&
        !e.__swiper__;
}

function I(e, t) {
    const a = ["__proto__", "constructor", "prototype"];
    Object.keys(t)
        .filter((e => a.indexOf(e) < 0))
        .forEach((a => {
            void 0 === e[a] ?
                e[a] = t[a] :
                $(t[a]) && $(e[a]) && Object.keys(t[a]).length > 0 ?
                    t[a].__swiper__ ? e[a] = t[a] : I(e[a], t[a]) :
                    e[a] = t[a];
        }));
}

function R(e) {
    return void 0 === e && (e = {}),
        e.navigation &&
        void 0 === e.navigation.nextEl &&
        void 0 === e.navigation.prevEl;
}

function F(e) {
    return void 0 === e && (e = {}),
        e.pagination &&
        void 0 === e.pagination.el;
}

function H(e) {
    return void 0 === e && (e = {}),
        e.scrollbar &&
        void 0 === e.scrollbar.el;
}

function q(e) {
    void 0 === e && (e = "");
    const t = e.split(" ")
        .map((e => e.trim()))
        .filter((e => !!e));
    const a = [];

    return t.forEach((e => {
        a.indexOf(e) < 0 && a.push(e);
    })), a.join(" ");
}

function V(e) {
    return void 0 === e && (e = ""),
        e ?
            e.includes("swiper-wrapper") ?
                e :
                `swiper-wrapper ${e}` :
            "swiper-wrapper";
}

function X() {
    return X = Object.assign ?
        Object.assign.bind() :
        function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var a = arguments[t];
                for (var s in a) {
                    Object.prototype.hasOwnProperty.call(a, s) && (e[s] = a[s]);
                }
            }
            return e;
        }, X.apply(this, arguments);
}

function Y(e) {
    return e.type &&
        e.type.displayName &&
        e.type.displayName.includes("SwiperSlide");
}

function G(e) {
    const t = [];
    return a.Children.toArray(e).forEach((e => {
        Y(e) ?
            t.push(e) :
            e.props &&
            e.props.children &&
            G(e.props.children).forEach((e => t.push(e)));
    })), t;
}

function W(e) {
    const t = [];
    const s = {
        "container-start": [],
        "container-end": [],
        "wrapper-start": [],
        "wrapper-end": []
    };

    return a.Children.toArray(e).forEach((e => {
        if (Y(e)) {
            t.push(e);
        } else if (e.props && e.props.slot && s[e.props.slot]) {
            s[e.props.slot].push(e);
        } else if (e.props && e.props.children) {
            const a = G(e.props.children);
            a.length > 0 ?
                a.forEach((e => t.push(e))) :
                s["container-end"].push(e);
        } else {
            s["container-end"].push(e);
        }
    })), { slides: t, slots: s };
}

function U(t, a) {
    return "undefined" == typeof window ?
        e.useEffect(t, a) :
        e.useLayoutEffect(t, a);
}

// Swiper component contexts
const K = e.createContext(null);
const Z = e.createContext(null);

// Main Swiper component
const J = e.forwardRef((function (t, n) {
    let {
        className: i,
        tag: l = "div",
        wrapperTag: o = "div",
        children: d,
        onSwiper: c,
        ...p
    } = void 0 === t ? {} : t;

    let u = false;
    const [m, h] = e.useState("swiper");
    const [f, g] = e.useState(null);
    const [b, x] = e.useState(false);
    const v = e.useRef(false);
    const w = e.useRef(null);
    const y = e.useRef(null);
    const j = e.useRef(null);
    const E = e.useRef(null);
    const N = e.useRef(null);
    const k = e.useRef(null);
    const C = e.useRef(null);
    const S = e.useRef(null);

    const { params: _, passedParams: T, rest: P, events: L } = function (e, t) {
        void 0 === e && (e = {});
        void 0 === t && (t = true);

        const a = { on: {} };
        const r = {};
        const n = {};

        I(a, s);
        a._emitClasses = true;
        a.init = false;

        const i = {};
        const l = D.map((e => e.replace(/_/, "")));
        const o = Object.assign({}, e);

        return Object.keys(o).forEach((s => {
            void 0 !== e[s] && (
                l.indexOf(s) >= 0 ?
                    $(e[s]) ?
                        (a[s] = {}, n[s] = {}, I(a[s], e[s]), I(n[s], e[s])) :
                        (a[s] = e[s], n[s] = e[s]) :
                    0 === s.search(/on[A-Z]/) && "function" == typeof e[s] ?
                        t ?
                            r[`${s[2].toLowerCase()}${s.substr(3)}`] = e[s] :
                            a.on[`${s[2].toLowerCase()}${s.substr(3)}`] = e[s] :
                        i[s] = e[s]
            );
        })), ["navigation", "pagination", "scrollbar"].forEach((e => {
            !0 === a[e] && (a[e] = {});
            !false === a[e] && delete a[e];
        })), { params: a, passedParams: n, rest: i, events: r };
    }(p);

    const { slides: O, slots: M } = W(d);
    const z = () => { x(!b); };

    Object.assign(_.on, { _containerClasses(e, t) { h(t); } });

    const B = () => {
        Object.assign(_.on, L);
        u = true;
        const e = { ..._ };

        if (delete e.wrapperClass, y.current = new r(e),
            y.current.virtual && y.current.params.virtual.enabled) {
            y.current.virtual.slides = O;
            const e = {
                cache: false,
                slides: O,
                renderExternal: g,
                renderExternalUpdate: false
            };
            I(y.current.params.virtual, e);
            I(y.current.originalParams.virtual, e);
        }
    };

    w.current || B();
    y.current && y.current.on("_beforeBreakpoint", z);

    return e.useEffect((() => () => {
        y.current && y.current.off("_beforeBreakpoint", z);
    })), e.useEffect((() => {
        !v.current && y.current && (y.current.emitSlidesClasses(), v.current = true);
    })), U((() => {
        if (n && (n.current = w.current), w.current) {
            return y.current.destroyed && B(),
                function (e, t) {
                    let {
                        el: a,
                        nextEl: s,
                        prevEl: r,
                        paginationEl: n,
                        scrollbarEl: i,
                        swiper: l
                    } = e;

                    R(t) && s && r && (
                        l.params.navigation.nextEl = s,
                        l.originalParams.navigation.nextEl = s,
                        l.params.navigation.prevEl = r,
                        l.originalParams.navigation.prevEl = r
                    );

                    F(t) && n && (
                        l.params.pagination.el = n,
                        l.originalParams.pagination.el = n
                    );

                    H(t) && i && (
                        l.params.scrollbar.el = i,
                        l.originalParams.scrollbar.el = i
                    );

                    l.init(a);
                }({
                    el: w.current,
                    nextEl: N.current,
                    prevEl: k.current,
                    paginationEl: C.current,
                    scrollbarEl: S.current,
                    swiper: y.current
                }, _),
                c && !y.current.destroyed && c(y.current),
                () => {
                    y.current && !y.current.destroyed && y.current.destroy(true, false);
                };
        }
    }), []), U((() => {
        !u && L && y.current && Object.keys(L).forEach((e => {
            y.current.on(e, L[e]);
        }));

        const e = function (e, t, a, s, r) {
            const n = [];
            if (!t) return n;

            const i = e => {
                n.indexOf(e) < 0 && n.push(e);
            };

            if (a && s) {
                const e = s.map(r);
                const t = a.map(r);
                e.join("") !== t.join("") && i("children");
                s.length !== a.length && i("children");
            }

            return D.filter((e => "_" === e[0]))
                .map((e => e.replace(/_/, "")))
                .forEach((a => {
                    if (a in e && a in t) {
                        if ($(e[a]) && $(t[a])) {
                            const s = Object.keys(e[a]);
                            const r = Object.keys(t[a]);
                            s.length !== r.length ?
                                i(a) :
                                (s.forEach((s => {
                                    e[a][s] !== t[a][s] && i(a);
                                })), r.forEach((s => {
                                    e[a][s] !== t[a][s] && i(a);
                                })));
                        } else {
                            e[a] !== t[a] && i(a);
                        }
                    }
                })), n;
        }(T, j.current, O, E.current, (e => e.key));

        return j.current = T,
            E.current = O,
            e.length && y.current && !y.current.destroyed && function (e) {
                let {
                    swiper: t,
                    slides: a,
                    passedParams: s,
                    changedParams: r,
                    nextEl: n,
                    prevEl: i,
                    scrollbarEl: l,
                    paginationEl: o
                } = e;

                const d = r.filter((e =>
                    "children" !== e &&
                    "direction" !== e &&
                    "wrapperClass" !== e
                ));

                const {
                    params: c,
                    pagination: p,
                    navigation: u,
                    scrollbar: m,
                    virtual: h,
                    thumbs: f
                } = t;

                let g, b, x, v, w, y, j, E;

                r.includes("thumbs") &&
                    s.thumbs &&
                    s.thumbs.swiper &&
                    !s.thumbs.swiper.destroyed &&
                    c.thumbs &&
                    (!c.thumbs.swiper || c.thumbs.swiper.destroyed) && (g = true);

                r.includes("controller") &&
                    s.controller &&
                    s.controller.control &&
                    c.controller &&
                    !c.controller.control && (b = true);

                r.includes("pagination") &&
                    s.pagination &&
                    (s.pagination.el || o) &&
                    (c.pagination || false === c.pagination) &&
                    p &&
                    !p.el && (x = true);

                r.includes("scrollbar") &&
                    s.scrollbar &&
                    (s.scrollbar.el || l) &&
                    (c.scrollbar || false === c.scrollbar) &&
                    m &&
                    !m.el && (v = true);

                r.includes("navigation") &&
                    s.navigation &&
                    (s.navigation.prevEl || i) &&
                    (s.navigation.nextEl || n) &&
                    (c.navigation || false === c.navigation) &&
                    u &&
                    !u.prevEl &&
                    !u.nextEl && (w = true);

                const N = e => {
                    t[e] && (
                        t[e].destroy(),
                        "navigation" === e ?
                            (t.isElement && (
                                t[e].prevEl.remove(),
                                t[e].nextEl.remove()
                            ),
                                c[e].prevEl = void 0,
                                c[e].nextEl = void 0,
                                t[e].prevEl = void 0,
                                t[e].nextEl = void 0) :
                            (t.isElement && t[e].el.remove(),
                                c[e].el = void 0,
                                t[e].el = void 0)
                    );
                };

                r.includes("loop") && t.isElement && (
                    c.loop && !s.loop ?
                        y = true :
                        !c.loop && s.loop ?
                            j = true :
                            E = true
                );

                d.forEach((e => {
                    if ($(c[e]) && $(s[e])) {
                        Object.assign(c[e], s[e]);
                        "navigation" !== e &&
                            "pagination" !== e &&
                            "scrollbar" !== e ||
                            !("enabled" in s[e]) ||
                            s[e].enabled ||
                            N(e);
                    } else {
                        const t = s[e];
                        true !== t &&
                            false !== t ||
                            "navigation" !== e &&
                            "pagination" !== e &&
                            "scrollbar" !== e ?
                            c[e] = s[e] :
                            false === t && N(e);
                    }
                }));

                d.includes("controller") &&
                    !b &&
                    t.controller &&
                    t.controller.control &&
                    c.controller &&
                    c.controller.control &&
                    (t.controller.control = c.controller.control);

                r.includes("children") &&
                    a &&
                    h &&
                    c.virtual.enabled ?
                    (h.slides = a, h.update(true)) :
                    r.includes("virtual") &&
                    h &&
                    c.virtual.enabled &&
                    (a && (h.slides = a), h.update(true));

                r.includes("children") && a && c.loop && (E = true);
                g && f.init() && f.update(true);
                b && (t.controller.control = c.controller.control);

                x && (
                    !t.isElement ||
                    o && "string" != typeof o ||
                    (o = document.createElement("div"),
                        o.classList.add("swiper-pagination"),
                        o.part.add("pagination"),
                        t.el.appendChild(o)),
                    o && (c.pagination.el = o),
                    p.init(),
                    p.render(),
                    p.update()
                );

                v && (
                    !t.isElement ||
                    l && "string" != typeof l ||
                    (l = document.createElement("div"),
                        l.classList.add("swiper-scrollbar"),
                        l.part.add("scrollbar"),
                        t.el.appendChild(l)),
                    l && (c.scrollbar.el = l),
                    m.init(),
                    m.updateSize(),
                    m.setTranslate()
                );

                w && (
                    t.isElement && (
                        n && "string" != typeof n ||
                        (n = document.createElement("div"),
                            n.classList.add("swiper-button-next"),
                            n.innerHTML = t.hostEl.constructor.nextButtonSvg,
                            n.part.add("button-next"),
                            t.el.appendChild(n)),
                        i && "string" != typeof i ||
                        (i = document.createElement("div"),
                            i.classList.add("swiper-button-prev"),
                            i.innerHTML = t.hostEl.constructor.prevButtonSvg,
                            i.part.add("button-prev"),
                            t.el.appendChild(i))
                    ),
                    n && (c.navigation.nextEl = n),
                    i && (c.navigation.prevEl = i),
                    u.init(),
                    u.update()
                );

                r.includes("allowSlideNext") && (t.allowSlideNext = s.allowSlideNext);
                r.includes("allowSlidePrev") && (t.allowSlidePrev = s.allowSlidePrev);
                r.includes("direction") && t.changeDirection(s.direction, false);

                (y || E) && t.loopDestroy();
                (j || E) && t.loopCreate();
                t.update();
            }({
                swiper: y.current,
                slides: O,
                passedParams: T,
                changedParams: e,
                nextEl: N.current,
                prevEl: k.current,
                scrollbarEl: S.current,
                paginationEl: C.current
            }),
            () => {
                L && y.current && Object.keys(L).forEach((e => {
                    y.current.off(e, L[e]);
                }));
            };
    })), U((() => {
        var e;
        !(e = y.current) ||
            e.destroyed ||
            !e.params.virtual ||
            e.params.virtual && !e.params.virtual.enabled ||
            (e.updateSlides(),
                e.updateProgress(),
                e.updateSlidesClasses(),
                e.parallax &&
                e.params.parallax &&
                e.params.parallax.enabled &&
                e.parallax.setTranslate());
    }), [f]),

        a.createElement(l, X({ ref: w, className: q(`${m}${i ? ` ${i}` : ""}`) }, P),
            a.createElement(Z.Provider, { value: y.current },
                M["container-start"],
                a.createElement(o, { className: V(_.wrapperClass) },
                    M["wrapper-start"],
                    _.virtual ?
                        function (e, t, s) {
                            if (!s) return null;

                            const r = e => {
                                let a = e;
                                return e < 0 ?
                                    a = t.length + e :
                                    a >= t.length && (a -= t.length), a;
                            };

                            const n = e.isHorizontal() ?
                                { [e.rtlTranslate ? "right" : "left"]: `${s.offset}px` } :
                                { top: `${s.offset}px` };

                            const { from: i, to: l } = s;
                            const o = e.params.loop ? -t.length : 0;
                            const d = e.params.loop ? 2 * t.length : t.length;
                            const c = [];

                            for (let a = o; a < d; a += 1) {
                                a >= i && a <= l && c.push(t[r(a)]);
                            }

                            return c.map(((t, s) =>
                                a.cloneElement(t, {
                                    swiper: e,
                                    style: n,
                                    key: t.props.virtualIndex || t.key || `slide-${s}`
                                })
                            ));
                        }(y.current, O, f) :
                        O.map(((e, t) =>
                            a.cloneElement(e, {
                                swiper: y.current,
                                swiperSlideIndex: t
                            })
                        )),
                    M["wrapper-end"]
                ),
                R(_) && a.createElement(a.Fragment, null,
                    a.createElement("div", { ref: k, className: "swiper-button-prev" }),
                    a.createElement("div", { ref: N, className: "swiper-button-next" })
                ),
                H(_) && a.createElement("div", { ref: S, className: "swiper-scrollbar" }),
                F(_) && a.createElement("div", { ref: C, className: "swiper-pagination" }),
                M["container-end"]
            )
        );
}));

J.displayName = "Swiper";

// SwiperSlide component
const Q = e.forwardRef((function (t, s) {
    let {
        tag: r = "div",
        children: n,
        className: i = "",
        swiper: l,
        zoom: o,
        lazy: d,
        virtualIndex: c,
        swiperSlideIndex: p,
        ...u
    } = void 0 === t ? {} : t;

    const m = e.useRef(null);
    const [h, f] = e.useState("swiper-slide");
    const [g, b] = e.useState(false);

    function x(e, t, a) {
        t === m.current && f(a);
    }

    U((() => {
        if (void 0 !== p && (m.current.swiperSlideIndex = p),
            s && (s.current = m.current),
            m.current && l) {
            if (!l.destroyed) {
                return l.on("_slideClass", x),
                    () => { l && l.off("_slideClass", x); };
            }
            "swiper-slide" !== h && f("swiper-slide");
        }
    }));

    U((() => {
        l && m.current && !l.destroyed && f(l.getSlideClasses(m.current));
    }), [l]);

    const v = {
        isActive: h.indexOf("swiper-slide-active") >= 0,
        isVisible: h.indexOf("swiper-slide-visible") >= 0,
        isPrev: h.indexOf("swiper-slide-prev") >= 0,
        isNext: h.indexOf("swiper-slide-next") >= 0
    };

    const w = () => "function" == typeof n ? n(v) : n;

    return a.createElement(r, X({
        ref: m,
        className: q(`${h}${i ? ` ${i}` : ""}`),
        "data-swiper-slide-index": c,
        onLoad: () => { b(true); }
    }, u),
        o && a.createElement(K.Provider, { value: v },
            a.createElement("div", {
                className: "swiper-zoom-container",
                "data-swiper-zoom": "number" == typeof o ? o : void 0
            },
                w(),
                d && !g && a.createElement("div", {
                    className: "swiper-lazy-preloader"
                })
            )
        ),
        !o && a.createElement(K.Provider, { value: v },
            w(),
            d && !g && a.createElement("div", {
                className: "swiper-lazy-preloader"
            })
        )
    );
}));

// Mousewheel module
function ee(e) {
    let { swiper: t, extendParams: a, on: s, emit: r } = e;
    const o = n();
    let d;
    a({
        mousewheel: {
            enabled: false,
            releaseOnEdges: false,
            invert: false,
            forceToAxis: false,
            sensitivity: 1,
            eventsTarget: "container",
            thresholdDelta: null,
            thresholdTime: null,
            noMousewheelClass: "swiper-no-mousewheel"
        }
    });

    t.mousewheel = { enabled: false };
    let c, p = l();
    const u = [];

    function m() {
        t.enabled && (t.mouseEntered = true);
    }

    function h() {
        t.enabled && (t.mouseEntered = false);
    }

    function f(e) {
        return !(t.params.mousewheel.thresholdDelta && e.delta < t.params.mousewheel.thresholdDelta) &&
            (!(t.params.mousewheel.thresholdTime && l() - p < t.params.mousewheel.thresholdTime) &&
                (e.delta >= 6 && l() - p < 60 ||
                    (e.direction < 0 ?
                        t.isEnd && !t.params.loop ||
                        t.animating ||
                        (t.slideNext(), r("scroll", e.raw)) :
                        t.isBeginning && !t.params.loop ||
                        t.animating ||
                        (t.slidePrev(), r("scroll", e.raw)),
                        p = (new o.Date).getTime(), false)));
    }

    function g(e) {
        let a = e, s = true;

        if (!t.enabled) return;

        if (e.target.closest(`.${t.params.mousewheel.noMousewheelClass}`)) return;

        const n = t.params.mousewheel;
        t.params.cssMode && a.preventDefault();

        let o = t.el;
        "container" !== t.params.mousewheel.eventsTarget &&
            (o = document.querySelector(t.params.mousewheel.eventsTarget));

        const p = o && o.contains(a.target);

        if (!t.mouseEntered && !p && !n.releaseOnEdges) return true;

        a.originalEvent && (a = a.originalEvent);

        let m = 0;
        const h = t.rtlTranslate ? -1 : 1;
        const g = function (e) {
            let t = 0, a = 0, s = 0, r = 0;

            return "detail" in e && (a = e.detail),
                "wheelDelta" in e && (a = -e.wheelDelta / 120),
                "wheelDeltaY" in e && (a = -e.wheelDeltaY / 120),
                "wheelDeltaX" in e && (t = -e.wheelDeltaX / 120),
                "axis" in e && e.axis === e.HORIZONTAL_AXIS && (t = a, a = 0),
                s = 10 * t,
                r = 10 * a,
                "deltaY" in e && (r = e.deltaY),
                "deltaX" in e && (s = e.deltaX),
                e.shiftKey && !s && (s = r, r = 0),
                (s || r) && e.deltaMode && (
                    1 === e.deltaMode ?
                        (s *= 40, r *= 40) :
                        (s *= 800, r *= 800)
                ),
                s && !t && (t = s < 1 ? -1 : 1),
                r && !a && (a = r < 1 ? -1 : 1),
                { spinX: t, spinY: a, pixelX: s, pixelY: r };
        }(a);

        if (n.forceToAxis) {
            if (t.isHorizontal()) {
                if (!(Math.abs(g.pixelX) > Math.abs(g.pixelY))) return true;
                m = -g.pixelX * h;
            } else {
                if (!(Math.abs(g.pixelY) > Math.abs(g.pixelX))) return true;
                m = -g.pixelY;
            }
        } else {
            m = Math.abs(g.pixelX) > Math.abs(g.pixelY) ?
                -g.pixelX * h :
                -g.pixelY;
        }

        if (0 === m) return true;
        n.invert && (m = -m);

        let b = t.getTranslate() + m * n.sensitivity;

        if (b >= t.minTranslate() && (b = t.minTranslate()),
            b <= t.maxTranslate() && (b = t.maxTranslate()),
            s = !!t.params.loop || !(b === t.minTranslate() || b === t.maxTranslate()),
            s && t.params.nested && a.stopPropagation(),
            t.params.freeMode && t.params.freeMode.enabled) {

            const e = {
                time: l(),
                delta: Math.abs(m),
                direction: Math.sign(m)
            };

            const s = c &&
                e.time < c.time + 500 &&
                e.delta <= c.delta &&
                e.direction === c.direction;

            if (!s) {
                c = void 0;
                let l = t.getTranslate() + m * n.sensitivity;
                const o = t.isBeginning;
                const p = t.isEnd;

                if (l >= t.minTranslate() && (l = t.minTranslate()),
                    l <= t.maxTranslate() && (l = t.maxTranslate()),
                    t.setTransition(0),
                    t.setTranslate(l),
                    t.updateProgress(),
                    t.updateActiveIndex(),
                    t.updateSlidesClasses(),
                    (!o && t.isBeginning || !p && t.isEnd) && t.updateSlidesClasses(),
                    t.params.loop && t.loopFix({
                        direction: e.direction < 0 ? "next" : "prev",
                        byMousewheel: true
                    }),
                    t.params.freeMode.sticky) {

                    clearTimeout(d);
                    d = void 0;
                    u.length >= 15 && u.shift();

                    const a = u.length ? u[u.length - 1] : void 0;
                    const s = u[0];

                    if (u.push(e),
                        a && (e.delta > a.delta || e.direction !== a.direction)) {
                        u.splice(0);
                    } else if (u.length >= 15 &&
                        e.time - s.time < 500 &&
                        s.delta - e.delta >= 1 &&
                        e.delta <= 6) {
                        const a = m > 0 ? .8 : .2;
                        c = e;
                        u.splice(0);
                        d = i((() => {
                            !t.destroyed &&
                                t.params &&
                                t.slideToClosest(t.params.speed, true, void 0, a);
                        }), 0);
                    }

                    d || (d = i((() => {
                        if (t.destroyed || !t.params) return;
                        c = e;
                        u.splice(0);
                        t.slideToClosest(t.params.speed, true, void 0, .5);
                    }), 500));
                }

                if (s || r("scroll", a),
                    t.params.autoplay &&
                    t.params.autoplay.disableOnInteraction &&
                    t.autoplay.stop(),
                    n.releaseOnEdges &&
                    (l === t.minTranslate() || l === t.maxTranslate())) {
                    return true;
                }
            }
        } else {
            const a = {
                time: l(),
                delta: Math.abs(m),
                direction: Math.sign(m),
                raw: e
            };

            u.length >= 2 && u.shift();
            const s = u.length ? u[u.length - 1] : void 0;

            if (u.push(a),
                s ?
                    (a.direction !== s.direction ||
                        a.delta > s.delta ||
                        a.time > s.time + 150) &&
                    f(a) :
                    f(a),
                function (e) {
                    const a = t.params.mousewheel;
                    if (e.direction < 0) {
                        if (t.isEnd && !t.params.loop && a.releaseOnEdges) return true;
                    } else if (t.isBeginning && !t.params.loop && a.releaseOnEdges) {
                        return true;
                    }
                    return false;
                }(a)) {
                return true;
            }
        }

        return a.preventDefault ?
            a.preventDefault() :
            a.returnValue = false,
            false;
    }

    function b(e) {
        let a = t.el;
        "container" !== t.params.mousewheel.eventsTarget &&
            (a = document.querySelector(t.params.mousewheel.eventsTarget));

        a[e]("mouseenter", m);
        a[e]("mouseleave", h);
        a[e]("wheel", g);
    }

    function x() {
        return t.params.cssMode ?
            (t.wrapperEl.removeEventListener("wheel", g), true) :
            !t.mousewheel.enabled &&
            (b("addEventListener"), t.mousewheel.enabled = true, true);
    }

    function v() {
        return t.params.cssMode ?
            (t.wrapperEl.addEventListener(event, g), true) :
            !!t.mousewheel.enabled &&
            (b("removeEventListener"), t.mousewheel.enabled = false, true);
    }

    s("init", (() => {
        !t.params.mousewheel.enabled && t.params.cssMode && v(),
            t.params.mousewheel.enabled && x();
    }));

    s("destroy", (() => {
        t.params.cssMode && x(),
            t.mousewheel.enabled && v();
    }));

    Object.assign(t.mousewheel, { enable: x, disable: v });
}

// Navigation module helper
function te(e, t, a, s) {
    return e.params.createElements &&
        Object.keys(s).forEach((r => {
            if (!a[r] && true === a.auto) {
                let n = o(e.el, `.${s[r]}`)[0];
                n || (n = d("div", s[r]),
                    n.className = s[r],
                    e.el.append(n)),
                    a[r] = n,
                    t[r] = n;
            }
        })), a;
}

// Navigation module
function ae(e) {
    let { swiper: t, extendParams: a, on: s, emit: r } = e;

    function n(e) {
        let a;
        return e && "string" == typeof e && t.isElement &&
            (a = t.el.querySelector(e) || t.hostEl.querySelector(e), a) ?
            a :
            (e && ("string" == typeof e && (a = [...document.querySelectorAll(e)]),
                t.params.uniqueNavElements &&
                    "string" == typeof e &&
                    a &&
                    a.length > 1 &&
                    1 === t.el.querySelectorAll(e).length ?
                    a = t.el.querySelector(e) :
                    a && 1 === a.length && (a = a[0])),
                e && !a ? e : a);
    }

    function i(e, a) {
        const s = t.params.navigation;
        (e = c(e)).forEach((e => {
            e && (e.classList[a ? "add" : "remove"](...s.disabledClass.split(" ")),
                "BUTTON" === e.tagName && (e.disabled = a),
                t.params.watchOverflow &&
                t.enabled &&
                e.classList[t.isLocked ? "add" : "remove"](s.lockClass));
        }));
    }

    function l() {
        const { nextEl: e, prevEl: a } = t.navigation;
        if (t.params.loop) return i(a, false), void i(e, false);
        i(a, t.isBeginning && !t.params.rewind);
        i(e, t.isEnd && !t.params.rewind);
    }

    function o(e) {
        e.preventDefault();
        (!t.isBeginning || t.params.loop || t.params.rewind) &&
            (t.slidePrev(), r("navigationPrev"));
    }

    function d(e) {
        e.preventDefault();
        (!t.isEnd || t.params.loop || t.params.rewind) &&
            (t.slideNext(), r("navigationNext"));
    }

    function p() {
        const e = t.params.navigation;

        if (t.params.navigation = te(t, t.originalParams.navigation, t.params.navigation, {
            nextEl: "swiper-button-next",
            prevEl: "swiper-button-prev"
        }), !e.nextEl && !e.prevEl) return;

        let a = n(e.nextEl);
        let s = n(e.prevEl);

        Object.assign(t.navigation, { nextEl: a, prevEl: s });
        a = c(a);
        s = c(s);

        const r = (a, s) => {
            a && a.addEventListener("click", "next" === s ? d : o);
            !t.enabled && a && a.classList.add(...e.lockClass.split(" "));
        };

        a.forEach((e => r(e, "next")));
        s.forEach((e => r(e, "prev")));
    }

    function u() {
        let { nextEl: e, prevEl: a } = t.navigation;
        e = c(e);
        a = c(a);

        const s = (e, a) => {
            e.removeEventListener("click", "next" === a ? d : o);
            e.classList.remove(...t.params.navigation.disabledClass.split(" "));
        };

        e.forEach((e => s(e, "next")));
        a.forEach((e => s(e, "prev")));
    }

    a({
        navigation: {
            nextEl: null,
            prevEl: null,
            hideOnClick: false,
            disabledClass: "swiper-button-disabled",
            hiddenClass: "swiper-button-hidden",
            lockClass: "swiper-button-lock",
            navigationDisabledClass: "swiper-navigation-disabled"
        }
    });

    t.navigation = { nextEl: null, prevEl: null };

    s("init", (() => {
        false === t.params.navigation.enabled ? m() : (p(), l());
    }));

    s("toEdge fromEdge lock unlock", (() => { l(); }));
    s("destroy", (() => { u(); }));

    s("enable disable", (() => {
        let { nextEl: e, prevEl: a } = t.navigation;
        e = c(e);
        a = c(a);
        t.enabled ? l() : [...e, ...a]
            .filter((e => !!e))
            .forEach((e => e.classList.add(t.params.navigation.lockClass)));
    }));

    s("click", ((e, a) => {
        let { nextEl: s, prevEl: n } = t.navigation;
        s = c(s);
        n = c(n);
        const i = a.target;
        let l = n.includes(i) || s.includes(i);

        if (t.isElement && !l) {
            const e = a.path || a.composedPath && a.composedPath();
            e && (l = e.find((e => s.includes(e) || n.includes(e))));
        }

        if (t.params.navigation.hideOnClick && !l) {
            if (t.pagination &&
                t.params.pagination &&
                t.params.pagination.clickable &&
                (t.pagination.el === i || t.pagination.el.contains(i))) return;

            let e;
            s.length ?
                e = s[0].classList.contains(t.params.navigation.hiddenClass) :
                n.length && (e = n[0].classList.contains(t.params.navigation.hiddenClass));

            r(!0 === e ? "navigationShow" : "navigationHide");
            [...s, ...n]
                .filter((e => !!e))
                .forEach((e => e.classList.toggle(t.params.navigation.hiddenClass)));
        }
    }));

    const m = () => {
        t.el.classList.add(...t.params.navigation.navigationDisabledClass.split(" "));
        u();
    };

    Object.assign(t.navigation, {
        enable: () => {
            t.el.classList.remove(...t.params.navigation.navigationDisabledClass.split(" "));
            p();
            l();
        },
        disable: m,
        update: l,
        init: p,
        destroy: u
    });
}

// Pagination helpers
function se(e) {
    return void 0 === e && (e = ""),
        `.${e.trim().replace(/([\.:!+\/])/g, "\\$1").replace(/ /g, ".")}`;
}

// Pagination module
function re(e) {
    let { swiper: t, extendParams: a, on: s, emit: r } = e;
    const n = "swiper-pagination";
    let i;

    a({
        pagination: {
            el: null,
            bulletElement: "span",
            clickable: false,
            hideOnClick: false,
            renderBullet: null,
            renderProgressbar: null,
            renderFraction: null,
            renderCustom: null,
            progressbarOpposite: false,
            type: "bullets",
            dynamicBullets: false,
            dynamicMainBullets: 1,
            formatFractionCurrent: e => e,
            formatFractionTotal: e => e,
            bulletClass: `${n}-bullet`,
            bulletActiveClass: `${n}-bullet-active`,
            modifierClass: `${n}-`,
            currentClass: `${n}-current`,
            totalClass: `${n}-total`,
            hiddenClass: `${n}-hidden`,
            progressbarFillClass: `${n}-progressbar-fill`,
            progressbarOppositeClass: `${n}-progressbar-opposite`,
            clickableClass: `${n}-clickable`,
            lockClass: `${n}-lock`,
            horizontalClass: `${n}-horizontal`,
            verticalClass: `${n}-vertical`,
            paginationDisabledClass: `${n}-disabled`
        }
    });

    t.pagination = { el: null, bullets: [] };
    let l = 0;

    function o() {
        return !t.params.pagination.el ||
            !t.pagination.el ||
            Array.isArray(t.pagination.el) && 0 === t.pagination.el.length;
    }

    function d(e, a) {
        const { bulletActiveClass: s } = t.params.pagination;
        e && (e = e[("prev" === a ? "previous" : "next") + "ElementSibling"]) &&
            (e.classList.add(`${s}-${a}`),
                (e = e[("prev" === a ? "previous" : "next") + "ElementSibling"]) &&
                e.classList.add(`${s}-${a}-${a}`));
    }

    function h(e) {
        const a = e.target.closest(se(t.params.pagination.bulletClass));
        if (!a) return;

        e.preventDefault();
        const s = u(a) * t.params.slidesPerGroup;

        if (t.params.loop) {
            if (t.realIndex === s) return;
            const e = (r = t.realIndex, n = s, i = t.slides.length,
                (n %= i) == 1 + (r %= i) ? "next" :
                    n === r - 1 ? "previous" : void 0);
            "next" === e ? t.slideNext() :
                "previous" === e ? t.slidePrev() :
                    t.slideToLoop(s);
        } else {
            t.slideTo(s);
        }

        var r, n, i;
    }

    function f() {
        const e = t.rtl;
        const a = t.params.pagination;

        if (o()) return;

        let s, n, m = t.pagination.el;
        m = c(m);

        const h = t.virtual && t.params.virtual.enabled ?
            t.virtual.slides.length :
            t.slides.length;

        const f = t.params.loop ?
            Math.ceil(h / t.params.slidesPerGroup) :
            t.snapGrid.length;

        if (t.params.loop ?
            (n = t.previousRealIndex || 0,
                s = t.params.slidesPerGroup > 1 ?
                    Math.floor(t.realIndex / t.params.slidesPerGroup) :
                    t.realIndex) :
            void 0 !== t.snapIndex ?
                (s = t.snapIndex, n = t.previousSnapIndex) :
                (n = t.previousIndex || 0, s = t.activeIndex || 0),
            "bullets" === a.type &&
            t.pagination.bullets &&
            t.pagination.bullets.length > 0) {

            const r = t.pagination.bullets;
            let o, c, h;

            if (a.dynamicBullets &&
                (i = p(r[0], t.isHorizontal() ? "width" : "height"),
                    m.forEach((e => {
                        e.style[t.isHorizontal() ? "width" : "height"] =
                            i * (a.dynamicMainBullets + 4) + "px";
                    })),
                    a.dynamicMainBullets > 1 &&
                    void 0 !== n &&
                    (l += s - (n || 0),
                        l > a.dynamicMainBullets - 1 ?
                            l = a.dynamicMainBullets - 1 :
                            l < 0 && (l = 0)),
                    o = Math.max(s - l, 0),
                    c = o + (Math.min(r.length, a.dynamicMainBullets) - 1),
                    h = (c + o) / 2),
                r.forEach((e => {
                    const t = [...["", "-next", "-next-next", "-prev", "-prev-prev", "-main"]
                        .map((e => `${a.bulletActiveClass}${e}`))]
                        .map((e => "string" == typeof e && e.includes(" ") ?
                            e.split(" ") :
                            e))
                        .flat();
                    e.classList.remove(...t);
                })), m.length > 1) {

                r.forEach((e => {
                    const r = u(e);
                    r === s ?
                        e.classList.add(...a.bulletActiveClass.split(" ")) :
                        t.isElement && e.setAttribute("part", "bullet");

                    a.dynamicBullets &&
                        (r >= o && r <= c &&
                            e.classList.add(...`${a.bulletActiveClass}-main`.split(" ")),
                            r === o && d(e, "prev"),
                            r === c && d(e, "next"));
                }));
            } else {
                const e = r[s];
                if (e && e.classList.add(...a.bulletActiveClass.split(" ")),
                    t.isElement &&
                    r.forEach(((e, t) => {
                        e.setAttribute("part", t === s ? "bullet-active" : "bullet");
                    })),
                    a.dynamicBullets) {

                    const e = r[o];
                    const t = r[c];

                    for (let s = o; s <= c; s += 1) {
                        r[s] && r[s].classList.add(...`${a.bulletActiveClass}-main`.split(" "));
                    }

                    d(e, "prev");
                    d(t, "next");
                }
            }

            if (a.dynamicBullets) {
                const s = Math.min(r.length, a.dynamicMainBullets + 4);
                const n = (i * s - i) / 2 - h * i;
                const l = e ? "right" : "left";

                r.forEach((e => {
                    e.style[t.isHorizontal() ? l : "top"] = `${n}px`;
                }));
            }
        }

        m.forEach(((e, n) => {
            if ("fraction" === a.type &&
                (e.querySelectorAll(se(a.currentClass)).forEach((e => {
                    e.textContent = a.formatFractionCurrent(s + 1);
                })),
                    e.querySelectorAll(se(a.totalClass)).forEach((e => {
                        e.textContent = a.formatFractionTotal(f);
                    }))),
                "progressbar" === a.type) {

                let r;
                r = a.progressbarOpposite ?
                    t.isHorizontal() ? "vertical" : "horizontal" :
                    t.isHorizontal() ? "horizontal" : "vertical";

                const n = (s + 1) / f;
                let i = 1, l = 1;

                "horizontal" === r ? i = n : l = n;

                e.querySelectorAll(se(a.progressbarFillClass)).forEach((e => {
                    e.style.transform = `translate3d(0,0,0) scaleX(${i}) scaleY(${l})`;
                    e.style.transitionDuration = `${t.params.speed}ms`;
                }));
            }

            "custom" === a.type &&
                a.renderCustom ?
                (e.innerHTML = a.renderCustom(t, s + 1, f),
                    0 === n && r("paginationRender", e)) :
                (0 === n && r("paginationRender", e),
                    r("paginationUpdate", e));

            t.params.watchOverflow &&
                t.enabled &&
                e.classList[t.isLocked ? "add" : "remove"](a.lockClass);
        }));
    }

    function g() {
        const e = t.params.pagination;
        if (o()) return;

        const a = t.virtual && t.params.virtual.enabled ?
            t.virtual.slides.length :
            t.grid && t.params.grid.rows > 1 ?
                t.slides.length / Math.ceil(t.params.grid.rows) :
                t.slides.length;

        let s = t.pagination.el;
        s = c(s);
        let n = "";

        if ("bullets" === e.type) {
            let s = t.params.loop ?
                Math.ceil(a / t.params.slidesPerGroup) :
                t.snapGrid.length;

            t.params.freeMode &&
                t.params.freeMode.enabled &&
                s > a && (s = a);

            for (let a = 0; a < s; a += 1) {
                e.renderBullet ?
                    n += e.renderBullet.call(t, a, e.bulletClass) :
                    n += `<${e.bulletElement} ${t.isElement ? 'part="bullet"' : ""
                    } class="${e.bulletClass}"></${e.bulletElement}>`;
            }
        }

        "fraction" === e.type &&
            (n = e.renderFraction ?
                e.renderFraction.call(t, e.currentClass, e.totalClass) :
                `<span class="${e.currentClass}"></span> / <span class="${e.totalClass}"></span>`);

        "progressbar" === e.type &&
            (n = e.renderProgressbar ?
                e.renderProgressbar.call(t, e.progressbarFillClass) :
                `<span class="${e.progressbarFillClass}"></span>`);

        t.pagination.bullets = [];
        s.forEach((a => {
            "custom" !== e.type && (a.innerHTML = n || "");
            "bullets" === e.type &&
                t.pagination.bullets.push(...a.querySelectorAll(se(e.bulletClass)));
        }));

        "custom" !== e.type && r("paginationRender", s[0]);
    }

    function b() {
        t.params.pagination = te(t, t.originalParams.pagination, t.params.pagination, {
            el: "swiper-pagination"
        });

        const e = t.params.pagination;
        if (!e.el) return;

        let a;
        "string" == typeof e.el && t.isElement && (a = t.el.querySelector(e.el));
        a || "string" != typeof e.el || (a = [...document.querySelectorAll(e.el)]);
        a || (a = e.el);
        a && 0 !== a.length && (
            t.params.uniqueNavElements &&
            "string" == typeof e.el &&
            Array.isArray(a) &&
            a.length > 1 &&
            (a = [...t.el.querySelectorAll(e.el)],
                a.length > 1 && (a = a.find((e => m(e, ".swiper")[0] === t.el)))),

            Array.isArray(a) && 1 === a.length && (a = a[0]),
            Object.assign(t.pagination, { el: a }),
            a = c(a),
            a.forEach((a => {
                "bullets" === e.type &&
                    e.clickable &&
                    a.classList.add(...(e.clickableClass || "").split(" "));

                a.classList.add(e.modifierClass + e.type);
                a.classList.add(t.isHorizontal() ? e.horizontalClass : e.verticalClass);

                "bullets" === e.type &&
                    e.dynamicBullets &&
                    (a.classList.add(`${e.modifierClass}${e.type}-dynamic`),
                        l = 0,
                        e.dynamicMainBullets < 1 && (e.dynamicMainBullets = 1));

                "progressbar" === e.type &&
                    e.progressbarOpposite &&
                    a.classList.add(e.progressbarOppositeClass);

                e.clickable && a.addEventListener("click", h);
                t.enabled || a.classList.add(e.lockClass);
            }))
        );
    }

    function x() {
        const e = t.params.pagination;
        if (o()) return;

        let a = t.pagination.el;
        a && (a = c(a), a.forEach((a => {
            a.classList.remove(e.hiddenClass);
            a.classList.remove(e.modifierClass + e.type);
            a.classList.remove(t.isHorizontal() ? e.horizontalClass : e.verticalClass);
            e.clickable && (
                a.classList.remove(...(e.clickableClass || "").split(" ")),
                a.removeEventListener("click", h)
            );
        })));

        t.pagination.bullets &&
            t.pagination.bullets.forEach((t =>
                t.classList.remove(...e.bulletActiveClass.split(" "))
            ));
    }

    s("changeDirection", (() => {
        if (!t.pagination || !t.pagination.el) return;
        const e = t.params.pagination;
        let { el: a } = t.pagination;
        a = c(a);
        a.forEach((a => {
            a.classList.remove(e.horizontalClass, e.verticalClass);
            a.classList.add(t.isHorizontal() ? e.horizontalClass : e.verticalClass);
        }));
    }));

    s("init", (() => {
        false === t.params.pagination.enabled ? v() : (b(), g(), f());
    }));

    s("activeIndexChange", (() => {
        void 0 === t.snapIndex && f();
    }));

    s("snapIndexChange", (() => { f(); }));
    s("snapGridLengthChange", (() => { g(); f(); }));
    s("destroy", (() => { x(); }));

    s("enable disable", (() => {
        let { el: e } = t.pagination;
        e && (e = c(e), e.forEach((e =>
            e.classList[t.enabled ? "remove" : "add"](t.params.pagination.lockClass)
        )));
    }));

    s("lock unlock", (() => { f(); }));

    s("click", ((e, a) => {
        const s = a.target;
        const n = c(t.pagination.el);

        if (t.params.pagination.el &&
            t.params.pagination.hideOnClick &&
            n &&
            n.length > 0 &&
            !s.classList.contains(t.params.pagination.bulletClass)) {

            if (t.navigation &&
                (t.navigation.nextEl && s === t.navigation.nextEl ||
                    t.navigation.prevEl && s === t.navigation.prevEl)) return;

            const e = n[0].classList.contains(t.params.pagination.hiddenClass);
            r(!0 === e ? "paginationShow" : "paginationHide");
            n.forEach((e => e.classList.toggle(t.params.pagination.hiddenClass)));
        }
    }));

    const v = () => {
        t.el.classList.add(t.params.pagination.paginationDisabledClass);
        let { el: e } = t.pagination;
        e && (e = c(e), e.forEach((e =>
            e.classList.add(t.params.pagination.paginationDisabledClass)
        )));
        x();
    };

    Object.assign(t.pagination, {
        enable: () => {
            t.el.classList.remove(t.params.pagination.paginationDisabledClass);
            let { el: e } = t.pagination;
            e && (e = c(e), e.forEach((e =>
                e.classList.remove(t.params.pagination.paginationDisabledClass)
            )));
            b();
            g();
            f();
        },
        disable: v,
        render: g,
        update: f,
        init: b,
        destroy: x
    });
}

// Autoplay module
function ne(e) {
    let t, a, { swiper: s, extendParams: r, on: n, emit: i, params: l } = e;

    s.autoplay = { running: false, paused: false, timeLeft: 0 };

    r({
        autoplay: {
            enabled: false,
            delay: 3e3,
            waitForTransition: true,
            disableOnInteraction: false,
            stopOnLastSlide: false,
            reverseDirection: false,
            pauseOnMouseEnter: false
        }
    });

    let o, d, c, p, u, m, f, g, b = l && l.autoplay ? l.autoplay.delay : 3e3;
    let x = l && l.autoplay ? l.autoplay.delay : 3e3;
    let v = (new Date).getTime();

    function w(e) {
        s && !s.destroyed && s.wrapperEl &&
            e.target === s.wrapperEl &&
            (s.wrapperEl.removeEventListener("transitionend", w),
                g || e.detail && e.detail.bySwiperTouchMove || C());
    }

    const y = () => {
        if (s.destroyed || !s.autoplay.running) return;
        s.autoplay.paused ? d = true : d && (x = o, d = false);
        const e = s.autoplay.paused ? o : v + x - (new Date).getTime();
        s.autoplay.timeLeft = e;
        i("autoplayTimeLeft", e, e / b);
        a = requestAnimationFrame((() => { y(); }));
    };

    const j = e => {
        if (s.destroyed || !s.autoplay.running) return;
        cancelAnimationFrame(a);
        y();

        let r = void 0 === e ? s.params.autoplay.delay : e;
        b = s.params.autoplay.delay;
        x = s.params.autoplay.delay;

        const n = (() => {
            let e;
            if (e = s.virtual && s.params.virtual.enabled ?
                s.slides.find((e => e.classList.contains("swiper-slide-active"))) :
                s.slides[s.activeIndex],
                !e) return;
            return parseInt(e.getAttribute("data-swiper-autoplay"), 10);
        })();

        !Number.isNaN(n) && n > 0 && void 0 === e && (r = n, b = n, x = n);
        o = r;

        const l = s.params.speed;
        const d = () => {
            s && !s.destroyed && (
                s.params.autoplay.reverseDirection ?
                    !s.isBeginning || s.params.loop || s.params.rewind ?
                        (s.slidePrev(l, true, true), i("autoplay")) :
                        s.params.autoplay.stopOnLastSlide ||
                        (s.slideTo(s.slides.length - 1, l, true, true), i("autoplay")) :
                    !s.isEnd || s.params.loop || s.params.rewind ?
                        (s.slideNext(l, true, true), i("autoplay")) :
                        s.params.autoplay.stopOnLastSlide ||
                        (s.slideTo(0, l, true, true), i("autoplay")),
                s.params.cssMode &&
                (v = (new Date).getTime(),
                    requestAnimationFrame((() => { j(); })))
            );
        };

        return r > 0 ?
            (clearTimeout(t),
                t = setTimeout((() => { d(); }), r)) :
            requestAnimationFrame((() => { d(); })), r;
    };

    const E = () => {
        v = (new Date).getTime();
        s.autoplay.running = true;
        j();
        i("autoplayStart");
    };

    const N = () => {
        s.autoplay.running = false;
        clearTimeout(t);
        cancelAnimationFrame(a);
        i("autoplayStop");
    };

    const k = (e, a) => {
        if (s.destroyed || !s.autoplay.running) return;
        clearTimeout(t);
        e || (f = true);

        const r = () => {
            i("autoplayPause");
            s.params.autoplay.waitForTransition ?
                s.wrapperEl.addEventListener("transitionend", w) :
                C();
        };

        if (s.autoplay.paused = true, a) {
            return m && (o = s.params.autoplay.delay),
                m = false,
                void r();
        }

        const n = o || s.params.autoplay.delay;
        o = n - ((new Date).getTime() - v);
        s.isEnd && o < 0 && !s.params.loop ||
            (o < 0 && (o = 0), r());
    };

    const C = () => {
        s.isEnd && o < 0 && !s.params.loop ||
            s.destroyed ||
            !s.autoplay.running ||
            (v = (new Date).getTime(),
                f ? (f = false, j(o)) : j(),
                s.autoplay.paused = false,
                i("autoplayResume"));
    };

    const S = () => {
        if (s.destroyed || !s.autoplay.running) return;
        const e = h();
        "hidden" === e.visibilityState && (f = true, k(true));
        "visible" === e.visibilityState && C();
    };

    const _ = e => {
        "mouse" === e.pointerType && (f = true, g = true, s.animating || s.autoplay.paused || k(true));
    };

    const T = e => {
        "mouse" === e.pointerType && (g = false, s.autoplay.paused && C());
    };

    n("init", (() => {
        s.params.autoplay.enabled && (
            s.params.autoplay.pauseOnMouseEnter && (
                s.el.addEventListener("pointerenter", _),
                s.el.addEventListener("pointerleave", T)
            ),
            h().addEventListener("visibilitychange", S),
            E()
        );
    }));

    n("destroy", (() => {
        s.el && "string" != typeof s.el && (
            s.el.removeEventListener("pointerenter", _),
            s.el.removeEventListener("pointerleave", T)
        );
        h().removeEventListener("visibilitychange", S);
        s.autoplay.running && N();
    }));

    n("_freeModeStaticRelease", (() => {
        (p || f) && C();
    }));

    n("_freeModeNoMomentumRelease", (() => {
        s.params.autoplay.disableOnInteraction ? N() : k(true, true);
    }));

    n("beforeTransitionStart", ((e, t, a) => {
        !s.destroyed &&
            s.autoplay.running &&
            (a || !s.params.autoplay.disableOnInteraction ?
                k(true, true) :
                N());
    }));

    n("sliderFirstMove", (() => {
        !s.destroyed &&
            s.autoplay.running &&
            (s.params.autoplay.disableOnInteraction ?
                N() :
                (c = true,
                    p = false,
                    f = false,
                    u = setTimeout((() => {
                        f = true;
                        p = true;
                        k(true);
                    }), 200)));
    }));

    n("touchEnd", (() => {
        if (!s.destroyed && s.autoplay.running && c) {
            if (clearTimeout(u),
                clearTimeout(t),
                s.params.autoplay.disableOnInteraction) {
                return p = false, void (c = false);
            }

            p && s.params.cssMode && C();
            p = false;
            c = false;
        }
    }));

    n("slideChange", (() => {
        !s.destroyed && s.autoplay.running && (m = true);
    }));

    Object.assign(s.autoplay, { start: E, stop: N, pause: k, resume: C });
}

// Utility function for shuffling arrays
function ie(e) {
    const t = [...e];
    for (let a = t.length - 1; a > 0; a--) {
        const e = Math.floor(Math.random() * (a + 1));
        [t[a], t[e]] = [t[e], t[a]];
    }
    return t;
}

Q.displayName = "SwiperSlide";

// Bonus data classes
class le {
    constructor(e, t) {
        this.bonuses = e;
        this.categories = t;
    }

    getAll() {
        const e = [];
        this.categories.forEach((t => {
            const a = t.boards.map((e => ({
                id: e.id,
                logo: e.resimurl,
                amount: e.baslik,
                description: e.altbaslik,
                url: e.url,
                siteName: e.siteadi,
                pinnedTable: e.pinnedTable,
                pinnedSTable: e.pinnedSTable
            })));
            e.push(...a);
        }));

        return [
            ...e.filter((e => null != e.pinnedTable && e.id === e.pinnedTable)),
            ...e.filter((e => null != e.pinnedSTable && e.id === e.pinnedSTable)),
            ...ie(e.filter((e =>
                !(null != e.pinnedTable && e.id === e.pinnedTable ||
                    null != e.pinnedSTable && e.id === e.pinnedSTable)
            )))
        ];
    }

    filterBonuses(e, t) {
        const a = e.toLowerCase();

        if ("all" === t) {
            const e = [];
            this.categories.forEach((t => {
                const s = t.boards.map((e => ({
                    id: e.id,
                    logo: e.resimurl,
                    amount: e.baslik,
                    description: e.altbaslik,
                    url: e.url,
                    siteName: e.siteadi,
                    pinnedTable: e.pinnedTable,
                    pinnedSTable: e.pinnedSTable
                }))).filter((e =>
                    e.description.toLowerCase().includes(a) ||
                    e.amount.toLowerCase().includes(a)
                ));
                e.push(...s);
            }));

            return [
                ...e.filter((e => null != e.pinnedTable && e.id === e.pinnedTable)),
                ...e.filter((e => null != e.pinnedSTable && e.id === e.pinnedSTable)),
                ...ie(e.filter((e =>
                    !(null != e.pinnedTable && e.id === e.pinnedTable ||
                        null != e.pinnedSTable && e.id === e.pinnedSTable)
                )))
            ];
        }

        const s = this.categories.find((e => e.id.toString() === t));
        if (!s) return [];

        const r = s.boards.map((e => ({
            id: e.id,
            logo: e.resimurl,
            amount: e.baslik,
            description: e.altbaslik,
            url: e.url,
            siteName: e.siteadi,
            pinnedTable: e.pinnedTable,
            pinnedSTable: e.pinnedSTable
        }))).filter((e =>
            e.description.toLowerCase().includes(a) ||
            e.amount.toLowerCase().includes(a)
        ));

        return [
            ...r.filter((e => null != e.pinnedTable && e.id === e.pinnedTable)),
            ...r.filter((e => null != e.pinnedSTable && e.id === e.pinnedSTable)),
            ...ie(r.filter((e =>
                !(null != e.pinnedTable && e.id === e.pinnedTable ||
                    null != e.pinnedSTable && e.id === e.pinnedSTable)
            )))
        ];
    }
}

class oe {
    constructor(e) {
        this.model = e;
    }

    getAllBonuses() {
        return this.model.getAll();
    }

    filterBonuses(e, t) {
        return this.model.filterBonuses(e, t);
    }
}

// Helper functions
const de = e => {
    const t = e.filter((e => 1 === e.durum));
    return 0 === t.length ? null : t[Math.floor(Math.random() * t.length)];
};

const ce = e.createContext(void 0);

const pe = () => {
    const t = e.useContext(ce);
    if (void 0 === t) throw new Error("useBonusContext must be used within a BonusProvider");
    return t;
};

const ue = ({ children: t }) => {
    const [a, s] = e.useState("");
    const [r, n] = e.useState("all");
    const [i, l] = e.useState([]);
    const [o, d] = e.useState({ header: [], footer: [] });
    const [c, p] = e.useState({ popup1: [], popup2: [] });
    const [u, m] = e.useState([]);
    const [h, f] = e.useState({});
    const [g, b] = e.useState({
        primary: { main: "#22C55E", dark: "#16A34A", light: "#4ADE80" },
        background: { main: "#121212", card: "#1E1E1E", alt: "#2D2D2D" },
        text: { main: "#FFFFFF", secondary: "#BBBBBB", muted: "#888888" }
    });
    const [x, v] = e.useState({});
    const [w, y] = e.useState([]);
    const [j, E] = e.useState(true);
    const [N, k] = e.useState(null);
    const [C, S] = e.useState(0);

    const _ = async () => {
        try {
            E(true);
            const t = await (async () => {
                try {
                    const e = `/api/data.php?site_id=${window.SITE_CONFIG?.site_id || "1"}&_=${Date.now()}`;
                    const t = await fetch(e, {
                        method: "GET",
                        headers: {
                            Accept: "application/json",
                            "Cache-Control": "no-cache, no-store, must-revalidate",
                            Pragma: "no-cache",
                            Expires: "0",
                            "If-None-Match": "",
                            "If-Modified-Since": "",
                            "User-Agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 16_6 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/16.6 Mobile/15E148 Safari/604.1",
                            "X-Requested-With": "XMLHttpRequest"
                        },
                        cache: "no-store",
                        credentials: "omit",
                        mode: "cors",
                        redirect: "follow"
                    });
                    if (!t.ok) throw new Error("Network response was not ok");
                    return await t.json();
                } catch (N) {
                    throw N;
                }
            })();

            const a = [...t.categories].sort(((e, t) => e.order - t.order));

            if (l(a), d(t.texts), p(t.popups), m(t.big || []), f(t.site), t.site.colors) {
                try {
                    const e = JSON.parse(t.site.colors);
                    e.colors && b(e.colors);
                } catch (e) { }
            }

            if (t.site.icons) {
                try {
                    const e = JSON.parse(t.site.icons);
                    v(e);
                } catch (e) { }
            }

            const s = a.flatMap((e => ie(e.boards.map((e => ({
                id: e.id,
                logo: e.resimurl,
                amount: e.baslik,
                description: e.altbaslik,
                url: e.url,
                siteName: e.siteadi
            }))))));

            y(s);
            E(false);
        } catch (t) {
            k("Veri yüklenirken bir hata oluştu");
            E(false);
        }
    };

    e.useEffect((() => { _(); }), [C]);
    e.useEffect((() => {
        const e = setInterval(_, 3e5);
        return () => clearInterval(e);
    }), []);

    e.useEffect((() => {
        let e = Date.now();
        const t = () => {
            if ("visible" === document.visibilityState) {
                Date.now() - e > 6e4 && (_(), e = Date.now());
            }
        };
        return document.addEventListener("visibilitychange", t),
            () => { document.removeEventListener("visibilitychange", t); };
    }), []);

    const T = e.useMemo((() => new le(w, i)), [w, i]);
    e.useMemo((() => new oe(T)), [T]);

    const P = e.useMemo((() => {
        const e = e => {
            let t = [...e];
            if (h.pinnedSTable) {
                const e = t.findIndex((e => e.id === h.pinnedSTable));
                if (-1 !== e) {
                    const a = t[e];
                    t.splice(e, 1);
                    t.unshift(a);
                }
            }
            if (h.pinnedTable) {
                const e = t.findIndex((e => e.id === h.pinnedTable));
                if (-1 !== e) {
                    const a = t[e];
                    t.splice(e, 1);
                    t.unshift(a);
                }
            }
            return t;
        };

        const t = e => e.filter((e =>
            e.description.toLowerCase().includes(a.toLowerCase()) ||
            e.amount.toLowerCase().includes(a.toLowerCase()) ||
            e.siteName.toLowerCase().includes(a.toLowerCase())
        ));

        if ("all" === r) {
            return i.map((a => {
                const s = ie(a.boards.map((e => ({
                    id: e.id,
                    logo: e.resimurl,
                    amount: e.baslik,
                    description: e.altbaslik,
                    url: e.url,
                    siteName: e.siteadi
                }))));
                const r = t(s);
                return { category: a, bonuses: e(r) };
            })).filter((e => e.bonuses.length > 0));
        } else {
            const a = i.find((e => e.id.toString() === r));
            if (a) {
                const s = ie(a.boards.map((e => ({
                    id: e.id,
                    logo: e.resimurl,
                    amount: e.baslik,
                    description: e.altbaslik,
                    url: e.url,
                    siteName: e.siteadi
                }))));
                const r = t(s);
                return [{ category: a, bonuses: e(r) }];
            }
            return [];
        }
    }), [i, a, r, h.pinnedTable, h.pinnedSTable]);

    const L = {
        bonuses: e.useMemo((() => P.flatMap((e => e.bonuses))), [P]),
        bonusesByCategory: P,
        categories: i,
        texts: o,
        popups: c,
        bigPopups: u,
        site: h,
        siteColors: g,
        siteIcons: x,
        searchQuery: a,
        selectedCategory: r,
        setSearchQuery: s,
        setSelectedCategory: n,
        isLoading: j,
        error: N,
        refreshData: () => { S((e => e + 1)); }
    };

    return O.jsx(ce.Provider, { value: L, children: t });
};

const me = e.createContext(void 0);

const he = ({ children: t }) => {
    const [a, s] = e.useState("home");
    return O.jsx(me.Provider, { value: { currentContent: a, setCurrentContent: s }, children: t });
};

const fe = () => {
    const t = e.useContext(me);
    if (!t) throw new Error("useContentContext must be used within a ContentProvider");
    return t;
};

const ge = e.createContext(void 0);

const be = () => {
    const t = e.useContext(ge);
    if (!t) throw new Error("usePopupContext must be used within a PopupProvider");
    return t;
};

const xe = ({ children: t }) => {
    const [a, s] = e.useState(false);
    const [r, n] = e.useState(true);
    const [i, l] = e.useState(false);
    const [o, d] = e.useState(false);
    return O.jsx(ge.Provider, {
        value: {
            arePopupsClosed: a,
            setPopupsClosed: s,
            isSliderVisible: r,
            setSliderVisible: n,
            isStoryOpen: i,
            setStoryOpen: l,
            isSearchOpen: o,
            setSearchOpen: d
        },
        children: t
    });
};

const ve = () => {
    e.useState([]);
    const { categories: t, site: a, texts: s, siteIcons: r } = pe();
    fe();
    const { setSliderVisible: n } = be();
    const [i, l] = e.useState([]);
    const [o, d] = e.useState(null);
    const [c, p] = e.useState(false);
    const u = e.useRef(null);

    return e.useEffect((() => {
        if (!u.current) return;
        const e = new IntersectionObserver((([e]) => { n(e.isIntersecting); }), { threshold: .1 });
        return e.observe(u.current), () => e.disconnect();
    }), [c, n]), e.useEffect((() => {
        const e = setTimeout((() => {
            const e = t.flatMap((e => e.boards)).filter((e => "2" === e.slider));
            if (e.length > 0) {
                const t = ie(e);
                Promise.all(t.map((e => new Promise((resolve => {
                    const img = new Image();
                    img.onload = resolve;
                    img.src = e.resimurl;
                }))))).then((() => {
                    l(t);
                    p(true);
                }));
            }
        }), 2e3);
        return () => clearTimeout(e);
    }), [t]), e.useEffect((() => {
        s?.header && d(de(s.header));
    }), [s]), O.jsxs(O.Fragment, {
        children: [
            O.jsx("div", {
                className: "sticky top-0 z-50 glass-effect border-b border-white/10 shadow-lg bg-[var(--color-background-main)] app-header",
                children: O.jsx("div", {
                    className: "max-w-7xl mx-auto p-1",
                    children: O.jsx("a", {
                        href: o?.url || "#",
                        target: "_blank",
                        rel: "noopener noreferrer",
                        className: "block group",
                        children: O.jsxs("div", {
                            className: "bg-gradient-to-r from-primary-600 via-primary-500 to-primary-400 rounded-xl p-2 relative overflow-hidden shadow-lg hover:shadow-glow-lg transition-all duration-300 hover:scale-[1.02]",
                            children: [
                                O.jsx("div", {
                                    className: "absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.15),transparent)] pointer-events-none"
                                }),
                                O.jsx("div", {
                                    className: "absolute inset-0 overflow-hidden",
                                    children: O.jsx("div", {
                                        className: "absolute w-full h-full animate-shimmer bg-gradient-to-r from-transparent via-white/10 to-transparent"
                                    })
                                }),
                                O.jsxs("div", {
                                    className: "flex items-center justify-between relative z-10",
                                    children: [
                                        O.jsxs("div", {
                                            className: "flex items-center space-x-2",
                                            children: [
                                                O.jsx("div", {
                                                    className: "w-7 h-7 rounded-lg flex items-center justify-center",
                                                    children: O.jsx("img", {
                                                        src: r["header-icon"] || "https://cdn3d.iconscout.com/3d/premium/thumb/bonus-3d-icon-png-download-6715438.png",
                                                        alt: "Bonus",
                                                        className: "w-7 h-7 object-contain drop-shadow-lg"
                                                    })
                                                }),
                                                O.jsx("div", {
                                                    children: O.jsx("h3", {
                                                        className: "text-white font-bold text-sm leading-none drop-shadow-md",
                                                        children: o?.baslik || "Bonus Fırsatı"
                                                    })
                                                })
                                            ]
                                        }),
                                        O.jsx("div", {
                                            className: "flex items-center space-x-1 bg-white/90 text-primary-600 px-2 py-0.5 rounded-md text-[10px] font-semibold shadow-md group-hover:bg-white transition-all duration-300",
                                            children: O.jsx("span", { children: "Bonusu Al" })
                                        })
                                    ]
                                })
                            ]
                        })
                    })
                })
            }),
            c && O.jsx("div", {
                ref: u,
                className: "px-3 py-3 app-slider",
                children: O.jsx("div", {
                    className: "max-w-7xl mx-auto",
                    children: O.jsx(J, {
                        modules: [ne, ae, re, ee],
                        spaceBetween: 12,
                        slidesPerView: 2,
                        mousewheel: { forceToAxis: true, sensitivity: 1, releaseOnEdges: true },
                        breakpoints: {
                            320: { slidesPerView: 2, spaceBetween: 10 },
                            640: { slidesPerView: 2, spaceBetween: 12 },
                            1024: { slidesPerView: 2, spaceBetween: 16 }
                        },
                        loop: true,
                        autoplay: { delay: 4e3, disableOnInteraction: false },
                        pagination: {
                            clickable: true,
                            bulletClass: "swiper-pagination-bullet",
                            bulletActiveClass: "swiper-pagination-bullet-active"
                        },
                        className: "!pb-6",
                        children: i.map(((e, t) =>
                            O.jsx(Q, {
                                children: O.jsx("a", {
                                    href: e.url,
                                    target: "_blank",
                                    rel: "noopener noreferrer",
                                    className: "block group cursor-pointer",
                                    children: O.jsxs("div", {
                                        className: "relative h-14 rounded-xl overflow-hidden bg-gradient-to-r from-white/10 to-white/5 border border-white/15 hover:border-primary-400/50 hover:from-white/15 hover:to-white/10 transition-all duration-300 hover:shadow-lg hover:shadow-primary-500/20",
                                        children: [
                                            O.jsx("div", {
                                                className: "absolute inset-0 flex items-center justify-center",
                                                children: O.jsx("img", {
                                                    src: e.resimurl,
                                                    alt: e.baslik,
                                                    className: "h-10 w-auto max-w-[120px] object-contain transition-transform duration-300 group-hover:scale-105",
                                                    loading: "lazy"
                                                })
                                            }),
                                            O.jsx("div", {
                                                className: "absolute top-1 right-1.5 w-5 h-5 rounded-full bg-white/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:bg-primary-500",
                                                children: O.jsx(f, { size: 10, className: "text-white" })
                                            }),
                                            O.jsx("div", {
                                                className: "absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-primary-400/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                            })
                                        ]
                                    })
                                })
                            }, t)
                        ))
                    })
                })
            })
        ]
    });
};