import { u as e, a as t, j as a } from "./index-WGkBDIQh.js";
import { r as s } from "./react-vendor-B4gRMC9K.js";
import {
    b as r,
    L as i,
    X as o,
    C as l,
    c as n,
    E as c,
    d,
    e as m,
    f as x,
} from "./lucide-vendor-CPeQdDtJ.js";

const p = ({ onSearch: n, onCategoryChange: c }) => {
    const [d, m] = s.useState(!1),
        [x, p] = s.useState(""),
        [h, u] = s.useState("all"),
        { categories: f, selectedCategory: g, bonuses: b } = e(),
        { setSearchOpen: y } = t(),
        v = s.useRef(null),
        w = s.useRef(null),
        j = s.useRef(null);
    (s.useEffect(() => {
        u(g);
    }, [g]),
        s.useEffect(() => {
            y(d);
        }, [d, y]),
        s.useEffect(() => {
            if (d) {
                ((document.body.style.overflow = "hidden"),
                    (document.body.style.position = "fixed"),
                    (document.body.style.width = "100%"),
                    (document.body.style.top = `-${window.scrollY}px`),
                    document.body.classList.add("modal-open"));
                const e = document.querySelector(".app-header"),
                    t = document.querySelector(".app-slider"),
                    a = document.querySelector(".app-navigation"),
                    s = document.querySelector(".app-notification");
                (e && (e.style.display = "none"),
                    t && (t.style.display = "none"),
                    a && (a.style.display = "none"),
                    s && (s.style.display = "none"));
                const r = () => {
                    if (j.current && window.visualViewport) {
                        const e = window.visualViewport.height;
                        j.current.style.height = `${e}px`;
                    }
                };
                (r(),
                    window.visualViewport &&
                    (window.visualViewport.addEventListener("resize", r),
                        window.visualViewport.addEventListener("scroll", r)));
                const i = setTimeout(() => {
                    v.current?.focus();
                }, 100);
                return () => {
                    (clearTimeout(i),
                        window.visualViewport &&
                        (window.visualViewport.removeEventListener("resize", r),
                            window.visualViewport.removeEventListener("scroll", r)));
                };
            }
            {
                const e = document.body.style.top;
                ((document.body.style.overflow = ""),
                    (document.body.style.position = ""),
                    (document.body.style.width = ""),
                    (document.body.style.top = ""),
                    document.body.classList.remove("modal-open"));
                const t = document.querySelector(".app-header"),
                    a = document.querySelector(".app-slider"),
                    s = document.querySelector(".app-navigation"),
                    r = document.querySelector(".app-notification");
                (t && (t.style.display = ""),
                    a && (a.style.display = ""),
                    s && (s.style.display = ""),
                    r && (r.style.display = ""),
                    e && window.scrollTo(0, -1 * parseInt(e || "0")));
            }
        }, [d]));
    const N = () => {
        (m(!1), p(""), n(""));
    },
        k = (e) => {
            (u(e), c(e));
        },
        S = b.filter(
            (e) =>
                e.description.toLowerCase().includes(x.toLowerCase()) ||
                e.amount.toLowerCase().includes(x.toLowerCase()) ||
                e.siteName.toLowerCase().includes(x.toLowerCase()),
        ),
        z = f.length > 1;
    return a.jsxs(a.Fragment, {
        children: [
            a.jsxs("div", {
                className: "relative",
                children: [
                    a.jsx("div", {
                        className:
                            "absolute -inset-0.5 bg-gradient-to-r from-primary-500/20 via-accent-500/10 to-primary-500/20 rounded-2xl blur-lg opacity-60",
                    }),
                    a.jsx("div", {
                        className:
                            "relative backdrop-blur-xl bg-gradient-to-br from-white/10 via-white/5 to-white/10 rounded-2xl border border-white/15 p-2",
                        children: a.jsxs("div", {
                            className: "flex items-center gap-2",
                            children: [
                                a.jsxs("button", {
                                    onClick: () => m(!0),
                                    className: `group relative flex items-center justify-center ${z ? "w-9 h-9" : "w-full py-2.5"} rounded-xl transition-all duration-300 ${z ? "shrink-0" : ""} ${x ? "bg-gradient-to-r from-primary-500 to-primary-600 shadow-glow" : "bg-white/10 border border-white/10 hover:border-white/30 hover:bg-white/15"}`,
                                    children: [
                                        a.jsx(r, {
                                            size: z ? 16 : 18,
                                            className: x ? "text-white" : "text-primary-400",
                                        }),
                                        !z &&
                                        a.jsx("span", {
                                            className:
                                                "ml-2 text-sm font-medium " +
                                                (x ? "text-white" : "text-white/60"),
                                            children: "Site veya bonus ara...",
                                        }),
                                        x &&
                                        a.jsx("div", {
                                            className:
                                                "absolute -top-1 -right-1 w-2.5 h-2.5 bg-accent-500 rounded-full border-2 border-[var(--color-background-main)]",
                                        }),
                                    ],
                                }),
                                z &&
                                a.jsxs(a.Fragment, {
                                    children: [
                                        a.jsx("div", { className: "h-6 w-px bg-white/10" }),
                                        a.jsxs("div", {
                                            ref: w,
                                            className:
                                                "flex-1 flex overflow-x-auto hide-scrollbar gap-1.5",
                                            children: [
                                                a.jsxs("button", {
                                                    onClick: () => k("all"),
                                                    className:
                                                        "group relative flex items-center gap-1 px-2.5 py-1.5 rounded-lg whitespace-nowrap text-[10px] font-semibold transition-all duration-300 active:scale-95 touch-manipulation " +
                                                        ("all" === h
                                                            ? "bg-gradient-to-r from-primary-500 to-primary-600 text-white shadow-glow"
                                                            : "bg-white/5 text-white/60 hover:text-white hover:bg-white/10"),
                                                    children: [
                                                        a.jsx(i, {
                                                            size: 10,
                                                            className:
                                                                "all" === h
                                                                    ? "text-white"
                                                                    : "text-primary-400",
                                                        }),
                                                        a.jsx("span", { children: "Tumu" }),
                                                    ],
                                                }),
                                                f.map(({ id: e, title: t }) =>
                                                    a.jsx(
                                                        "button",
                                                        {
                                                            onClick: () => k(e.toString()),
                                                            className:
                                                                "group relative px-2.5 py-1.5 rounded-lg whitespace-nowrap text-[10px] font-semibold transition-all duration-300 active:scale-95 touch-manipulation " +
                                                                (h === e.toString()
                                                                    ? "bg-gradient-to-r from-primary-500 to-primary-600 text-white shadow-glow"
                                                                    : "bg-white/5 text-white/60 hover:text-white hover:bg-white/10"),
                                                            children: a.jsx("span", { children: t }),
                                                        },
                                                        e,
                                                    ),
                                                ),
                                            ],
                                        }),
                                    ],
                                }),
                            ],
                        }),
                    }),
                ],
            }),
            d &&
            a.jsxs("div", {
                ref: j,
                className: "fixed inset-0 z-[300]",
                style: { height: "100dvh" },
                children: [
                    a.jsx("div", {
                        className: "absolute inset-0 bg-black/90 backdrop-blur-md",
                        onClick: N,
                    }),
                    a.jsxs("div", {
                        className: "relative h-full flex flex-col",
                        children: [
                            a.jsxs("div", {
                                className:
                                    "fixed top-0 left-0 right-0 z-10 p-3 bg-gradient-to-b from-[var(--color-background-main)] via-[var(--color-background-main)] to-[var(--color-background-main)]/90",
                                style: {
                                    paddingTop: "max(0.75rem, env(safe-area-inset-top))",
                                },
                                children: [
                                    a.jsx("div", {
                                        className:
                                            "relative backdrop-blur-2xl bg-gradient-to-br from-white/15 via-white/10 to-white/15 rounded-2xl border border-white/20 shadow-2xl",
                                        children: a.jsxs("div", {
                                            className: "flex items-center gap-3 p-3",
                                            children: [
                                                a.jsx("div", {
                                                    className:
                                                        "w-10 h-10 bg-gradient-to-br from-primary-500 to-primary-600 rounded-xl flex items-center justify-center shadow-lg shrink-0",
                                                    children: a.jsx(r, {
                                                        size: 18,
                                                        className: "text-white",
                                                    }),
                                                }),
                                                a.jsxs("div", {
                                                    className: "flex-1 relative",
                                                    children: [
                                                        a.jsx("input", {
                                                            ref: v,
                                                            type: "text",
                                                            value: x,
                                                            onChange: (e) => {
                                                                const t = e.target.value;
                                                                (p(t), n(t));
                                                            },
                                                            className:
                                                                "w-full bg-white/10 text-white placeholder-white/40 px-4 py-2.5 rounded-xl border border-white/10 focus:border-primary-500/50 focus:outline-none focus:ring-2 focus:ring-primary-500/20 transition-all duration-300 text-base font-medium",
                                                            placeholder: "Site veya bonus ara...",
                                                        }),
                                                        x &&
                                                        a.jsx("button", {
                                                            onClick: () => {
                                                                (p(""), n(""), v.current?.focus());
                                                            },
                                                            className:
                                                                "absolute right-3 top-1/2 -translate-y-1/2 text-white/50 hover:text-white transition-colors",
                                                            children: a.jsx(o, { size: 16 }),
                                                        }),
                                                    ],
                                                }),
                                                a.jsx("button", {
                                                    onClick: N,
                                                    className:
                                                        "w-10 h-10 bg-white/10 hover:bg-white/20 rounded-xl flex items-center justify-center transition-all duration-300 shrink-0",
                                                    children: a.jsx(o, {
                                                        size: 18,
                                                        className: "text-white/70",
                                                    }),
                                                }),
                                            ],
                                        }),
                                    }),
                                    a.jsx("div", {
                                        className: "mt-2 px-1",
                                        children: a.jsxs("p", {
                                            className: "text-white/40 text-xs",
                                            children: [S.length, " sonuc bulundu"],
                                        }),
                                    }),
                                ],
                            }),
                            a.jsx("div", {
                                className: "flex-1 overflow-y-auto px-3 pb-6 pt-32",
                                children: a.jsx("div", {
                                    className: "space-y-2",
                                    children: S.map((e, t) =>
                                        a.jsx(
                                            "a",
                                            {
                                                href: e.url,
                                                target: "_blank",
                                                rel: "noopener noreferrer",
                                                className: "block relative group",
                                                children: a.jsxs("div", {
                                                    className:
                                                        "flex items-center bg-[var(--color-background-card)]/90 backdrop-blur-sm rounded-xl overflow-hidden hover:bg-[var(--color-background-card)] transition-all duration-300 border border-white/5 hover:border-primary-500/30 group-hover:scale-[1.01] group-active:scale-[0.99]",
                                                    children: [
                                                        a.jsx("div", {
                                                            className:
                                                                "w-20 h-14 bg-black/50 p-2 flex items-center justify-center shrink-0",
                                                            children: a.jsx("img", {
                                                                src: e.logo,
                                                                alt: e.amount,
                                                                className: "w-full h-full object-contain",
                                                                loading: "lazy",
                                                            }),
                                                        }),
                                                        a.jsxs("div", {
                                                            className: "flex-1 px-3 py-2 min-w-0",
                                                            children: [
                                                                a.jsx("h3", {
                                                                    className:
                                                                        "text-white text-xs font-medium line-clamp-1 group-hover:text-primary-400 transition-colors",
                                                                    children: e.amount,
                                                                }),
                                                                a.jsx("p", {
                                                                    className:
                                                                        "text-white/50 text-[10px] line-clamp-1",
                                                                    children: e.description,
                                                                }),
                                                            ],
                                                        }),
                                                        a.jsx("div", {
                                                            className: "pr-3",
                                                            children: a.jsx("div", {
                                                                className:
                                                                    "w-6 h-6 rounded-full bg-primary-500/20 flex items-center justify-center",
                                                                children: a.jsx(l, {
                                                                    size: 12,
                                                                    className: "text-primary-400 -rotate-90",
                                                                }),
                                                            }),
                                                        }),
                                                    ],
                                                }),
                                            },
                                            e.id || t,
                                        ),
                                    ),
                                }),
                            }),
                        ],
                    }),
                ],
            }),
        ],
    });
},
    h = ({ logo: e, amount: t, description: s, url: r, isSpecial: i = !1 }) =>
        a.jsxs("a", {
            href: r,
            target: "_blank",
            rel: "noopener noreferrer",
            className:
                "block relative modern-card overflow-visible transition-all duration-300 active:scale-95 touch-manipulation group " +
                (i
                    ? "border-2 border-primary-500 shadow-glow animate-glow"
                    : "shadow-md hover:shadow-glow"),
            children: [
                i &&
                a.jsxs(a.Fragment, {
                    children: [
                        a.jsx("div", {
                            className:
                                "absolute top-0 right-0 bg-gradient-to-br from-accent-500 to-accent-600 text-white text-[9px] font-bold px-2 py-0.5 rounded-bl-lg shadow-lg z-10",
                            children: "TOP",
                        }),
                        a.jsx(n, {
                            className:
                                "absolute -top-2 left-[15%] text-accent-400 fill-accent-400",
                            size: 14,
                            style: {
                                animation:
                                    "starShake 2s ease-in-out infinite, starGlow 2s ease-in-out infinite",
                                animationDelay: "0s",
                            },
                        }),
                        a.jsx(n, {
                            className:
                                "absolute -top-2 left-[45%] text-accent-400 fill-accent-400",
                            size: 16,
                            style: {
                                animation:
                                    "starShake 2s ease-in-out infinite, starGlow 2s ease-in-out infinite",
                                animationDelay: "0.3s",
                            },
                        }),
                        a.jsx(n, {
                            className:
                                "absolute -top-2 right-[15%] text-accent-400 fill-accent-400",
                            size: 14,
                            style: {
                                animation:
                                    "starShake 2s ease-in-out infinite, starGlow 2s ease-in-out infinite",
                                animationDelay: "0.6s",
                            },
                        }),
                        a.jsx(n, {
                            className:
                                "absolute top-[25%] -right-2 text-accent-400 fill-accent-400",
                            size: 13,
                            style: {
                                animation:
                                    "starShake 2s ease-in-out infinite, starGlow 2s ease-in-out infinite",
                                animationDelay: "0.9s",
                            },
                        }),
                        a.jsx(n, {
                            className:
                                "absolute top-[50%] -right-2 text-accent-400 fill-accent-400",
                            size: 15,
                            style: {
                                animation:
                                    "starShake 2s ease-in-out infinite, starGlow 2s ease-in-out infinite",
                                animationDelay: "1.2s",
                            },
                        }),
                        a.jsx(n, {
                            className:
                                "absolute top-[75%] -right-2 text-accent-400 fill-accent-400",
                            size: 13,
                            style: {
                                animation:
                                    "starShake 2s ease-in-out infinite, starGlow 2s ease-in-out infinite",
                                animationDelay: "1.5s",
                            },
                        }),
                        a.jsx(n, {
                            className:
                                "absolute -bottom-2 left-[15%] text-accent-400 fill-accent-400",
                            size: 14,
                            style: {
                                animation:
                                    "starShake 2s ease-in-out infinite, starGlow 2s ease-in-out infinite",
                                animationDelay: "1.8s",
                            },
                        }),
                        a.jsx(n, {
                            className:
                                "absolute -bottom-2 left-[45%] text-accent-400 fill-accent-400",
                            size: 16,
                            style: {
                                animation:
                                    "starShake 2s ease-in-out infinite, starGlow 2s ease-in-out infinite",
                                animationDelay: "0.2s",
                            },
                        }),
                        a.jsx(n, {
                            className:
                                "absolute -bottom-2 right-[15%] text-accent-400 fill-accent-400",
                            size: 14,
                            style: {
                                animation:
                                    "starShake 2s ease-in-out infinite, starGlow 2s ease-in-out infinite",
                                animationDelay: "0.5s",
                            },
                        }),
                        a.jsx(n, {
                            className:
                                "absolute top-[25%] -left-2 text-accent-400 fill-accent-400",
                            size: 13,
                            style: {
                                animation:
                                    "starShake 2s ease-in-out infinite, starGlow 2s ease-in-out infinite",
                                animationDelay: "0.8s",
                            },
                        }),
                        a.jsx(n, {
                            className:
                                "absolute top-[50%] -left-2 text-accent-400 fill-accent-400",
                            size: 15,
                            style: {
                                animation:
                                    "starShake 2s ease-in-out infinite, starGlow 2s ease-in-out infinite",
                                animationDelay: "1.1s",
                            },
                        }),
                        a.jsx(n, {
                            className:
                                "absolute top-[75%] -left-2 text-accent-400 fill-accent-400",
                            size: 13,
                            style: {
                                animation:
                                    "starShake 2s ease-in-out infinite, starGlow 2s ease-in-out infinite",
                                animationDelay: "1.4s",
                            },
                        }),
                    ],
                }),
                a.jsxs("div", {
                    className: "p-2 sm:p-3",
                    children: [
                        a.jsx("div", {
                            className:
                                "h-16 sm:h-20 flex items-center justify-center bg-gradient-to-b from-[var(--color-background-main)] to-[var(--color-background-alt)]/50 backdrop-blur-sm rounded-lg mb-2 sm:mb-3 shadow-inner p-2 sm:p-3 border border-[var(--color-background-alt)]",
                            children: a.jsx("div", {
                                className:
                                    "w-[120px] h-[40px] relative flex items-center justify-center",
                                children: a.jsx("img", {
                                    src: e,
                                    alt: "Casino logo",
                                    className:
                                        "max-w-full max-h-full w-auto h-auto object-contain transition-transform duration-300 group-hover:scale-110",
                                    loading: "eager",
                                    decoding: "async",
                                    fetchpriority: "high",
                                    style: {
                                        maxWidth: "120px",
                                        maxHeight: "40px",
                                        width: "auto",
                                        height: "auto",
                                    },
                                }),
                            }),
                        }),
                        a.jsxs("div", {
                            className:
                                "text-center mb-2 sm:mb-3 h-[40px] sm:h-[48px] flex flex-col justify-center",
                            children: [
                                a.jsx("h3", {
                                    className:
                                        "text-lg sm:text-xl font-extrabold bg-gradient-to-r from-primary-400 via-primary-300 to-primary-400 bg-clip-text text-transparent truncate px-1 drop-shadow-sm",
                                    children: t,
                                }),
                                a.jsx("p", {
                                    className:
                                        "text-[var(--color-text-muted)] text-[10px] sm:text-xs mt-0.5 sm:mt-1 truncate px-1 font-medium",
                                    children: s,
                                }),
                            ],
                        }),
                        a.jsxs("div", {
                            className:
                                "w-full h-[26px] sm:h-[32px] bg-gradient-to-r from-primary-600 to-primary-500 hover:from-primary-500 hover:to-primary-400 text-white rounded-lg flex items-center justify-center space-x-1.5 sm:space-x-2 transform transition-all duration-300 shadow-md hover:shadow-lg relative overflow-hidden",
                            children: [
                                a.jsx("div", {
                                    className:
                                        "absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300",
                                    children: a.jsx("div", {
                                        className:
                                            "absolute inset-0 animate-shimmer bg-gradient-to-r from-transparent via-white/20 to-transparent",
                                    }),
                                }),
                                a.jsx("span", {
                                    className:
                                        "font-semibold text-[10px] sm:text-sm truncate max-w-[80px] sm:max-w-[100px] relative z-10",
                                    children: "Bonusu Al",
                                }),
                                a.jsx(c, {
                                    size: 12,
                                    className: "sm:hidden flex-shrink-0 relative z-10",
                                }),
                                a.jsx(c, {
                                    size: 14,
                                    className: "hidden sm:block flex-shrink-0 relative z-10",
                                }),
                            ],
                        }),
                    ],
                }),
            ],
        }),
    u = ({ bonuses: t, categoryMode: r = !1 }) => {
        const { siteIcons: i, site: o } = e(),
            l =
                i["star-icon"] ||
                "https://png.pngtree.com/png-vector/20250702/ourmid/pngtree-glossy-yellow-star-icon-3d-shiny-clipart-for-transparent-background-and-png-image_16598081.webp",
            n = s.useMemo(() => t.map(() => (Math.random() > 0.5 ? 5 : 4)), [t]);
        return a.jsx("div", {
            className: "overflow-hidden",
            children: a.jsx("div", {
                className: r
                    ? ""
                    : "rounded-xl overflow-hidden bg-[var(--color-background-card)] border border-white/5 shadow-2xl",
                children: t.map((e, t) => {
                    const s = e.id === o.pinnedTable || e.id === o.pinnedSTable,
                        r =
                            e.id === o.pinnedSTable
                                ? i.pin2 || "https://img.haberkurt.com/icons/pin2.svg"
                                : i.pin || "https://img.haberkurt.com/icons/pin1.svg";
                    return a.jsxs(
                        "a",
                        {
                            href: e.url,
                            target: "_blank",
                            rel: "noopener noreferrer",
                            className: `relative flex items-center px-3 ${0 === t ? "pt-4 pb-2.5" : "py-2.5"} transition-all duration-300 group border-b border-white/5 last:border-b-0 hover:bg-gradient-to-r hover:from-primary-500/10 hover:to-transparent`,
                            children: [
                                t < 3 &&
                                a.jsx("div", {
                                    className:
                                        "absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-primary-400 via-primary-500 to-primary-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300",
                                }),
                                a.jsx("div", {
                                    className: "w-[120px] flex-shrink-0",
                                    children: a.jsxs("div", {
                                        className: "relative h-[60px] w-[120px]",
                                        children: [
                                            !s &&
                                            a.jsx("div", {
                                                className:
                                                    "absolute -top-2 left-0 right-0 flex justify-center gap-0.5 z-10",
                                                children: [...Array(n[t])].map((e, t) =>
                                                    a.jsx(
                                                        "img",
                                                        {
                                                            src: l,
                                                            alt: "",
                                                            className:
                                                                "w-3.5 h-3.5 object-contain drop-shadow-lg",
                                                        },
                                                        t,
                                                    ),
                                                ),
                                            }),
                                            a.jsxs("div", {
                                                className:
                                                    "relative h-full w-full bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-lg flex items-center justify-center overflow-visible border border-white/10 group-hover:border-primary-500/30 transition-all duration-300",
                                                children: [
                                                    s &&
                                                    a.jsx("div", {
                                                        className:
                                                            "absolute -top-[59px] left-0 right-0 flex justify-center z-20 -translate-x-[2px]",
                                                        children: a.jsx("img", {
                                                            src: r,
                                                            alt: "Pinned",
                                                            className:
                                                                "w-28 h-28 object-contain drop-shadow-2xl",
                                                        }),
                                                    }),
                                                    a.jsx("img", {
                                                        src: e.logo,
                                                        alt: "Casino logo",
                                                        className:
                                                            "w-full h-full object-contain p-1.5 transition-transform duration-300 group-hover:scale-105",
                                                        loading: "lazy",
                                                    }),
                                                ],
                                            }),
                                        ],
                                    }),
                                }),
                                a.jsxs("div", {
                                    className:
                                        "flex-1 flex flex-col justify-center items-center px-3 min-w-0",
                                    children: [
                                        a.jsx("span", {
                                            className:
                                                "font-bold text-sm bg-gradient-to-r from-white via-primary-200 to-white bg-clip-text text-transparent truncate text-center mb-0.5",
                                            children: e.amount,
                                        }),
                                        a.jsx("span", {
                                            className:
                                                "text-[11px] text-[var(--color-text-muted)] truncate text-center",
                                            children: e.description,
                                        }),
                                    ],
                                }),
                                a.jsx("div", {
                                    className: "flex-shrink-0",
                                    children: a.jsxs("div", {
                                        className:
                                            "relative overflow-hidden bg-gradient-to-r from-primary-600 to-primary-500 group-hover:from-primary-500 group-hover:to-primary-400 text-white px-3 py-1.5 rounded-lg text-[11px] font-bold transition-all duration-300 transform group-hover:scale-105",
                                        children: [
                                            a.jsx("div", {
                                                className:
                                                    "absolute inset-0 bg-[linear-gradient(110deg,transparent_25%,rgba(255,255,255,0.3)_50%,transparent_75%)] group-hover:animate-shimmer",
                                            }),
                                            a.jsxs("div", {
                                                className: "flex items-center gap-1 relative z-10",
                                                children: [
                                                    a.jsx("span", { children: "Bonusu Al" }),
                                                    a.jsx(c, { size: 10 }),
                                                ],
                                            }),
                                        ],
                                    }),
                                }),
                            ],
                        },
                        t,
                    );
                }),
            }),
        });
    },
    f = ({ bonuses: t }) => {
        const {
            isLoading: s,
            error: r,
            site: i,
            bonusesByCategory: o,
            siteIcons: l,
        } = e(),
            n = l["star-icon"] || "";
        return s
            ? a.jsx("div", {
                className: "py-6 text-center",
                children: a.jsxs("div", {
                    className: "flex flex-col items-center justify-center space-y-4",
                    children: [
                        a.jsx(d, { size: 32, className: "text-green-500 animate-spin" }),
                        a.jsx("p", {
                            className: "text-gray-400 text-sm",
                            children: "Bonuslar yükleniyor...",
                        }),
                    ],
                }),
            })
            : r
                ? a.jsx("div", {
                    className: "py-4 text-center",
                    children: a.jsx("p", { className: "text-red-400", children: r }),
                })
                : 0 === t.length
                    ? a.jsx("div", {
                        className: "py-4 text-center",
                        children: a.jsx("p", {
                            className: "text-gray-400",
                            children: "Site bulunamadı.",
                        }),
                    })
                    : "tablo" === i.sekil
                        ? a.jsx("div", {
                            className: "space-y-4",
                            children: o.map((e, t) =>
                                a.jsxs(
                                    "div",
                                    {
                                        className:
                                            "overflow-hidden rounded-xl bg-[var(--color-background-card)] border border-white/5 shadow-2xl",
                                        children: [
                                            a.jsx("div", {
                                                className: "px-4 py-2 border-b border-white/5",
                                                children: a.jsxs("div", {
                                                    className: "flex items-center justify-center gap-3",
                                                    children: [
                                                        n &&
                                                        a.jsx("div", {
                                                            className: "flex items-center gap-1",
                                                            children: Array.from({
                                                                length: 0 === t ? 2 : 1,
                                                            }).map((e, t) =>
                                                                a.jsx(
                                                                    "img",
                                                                    {
                                                                        src: n,
                                                                        alt: "",
                                                                        className: "w-6 h-6 object-contain",
                                                                    },
                                                                    `left-${t}`,
                                                                ),
                                                            ),
                                                        }),
                                                        a.jsx("h2", {
                                                            className: "text-lg font-semibold text-white",
                                                            children: e.category.title,
                                                        }),
                                                        n &&
                                                        a.jsx("div", {
                                                            className: "flex items-center gap-1",
                                                            children: Array.from({
                                                                length: 0 === t ? 2 : 1,
                                                            }).map((e, t) =>
                                                                a.jsx(
                                                                    "img",
                                                                    {
                                                                        src: n,
                                                                        alt: "",
                                                                        className: "w-6 h-6 object-contain",
                                                                    },
                                                                    `right-${t}`,
                                                                ),
                                                            ),
                                                        }),
                                                    ],
                                                }),
                                            }),
                                            a.jsx(u, { bonuses: e.bonuses, categoryMode: !1 }),
                                        ],
                                    },
                                    t,
                                ),
                            ),
                        })
                        : a.jsx("div", {
                            className: "py-2",
                            children: a.jsx("div", {
                                className:
                                    "grid grid-cols-3 sm:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-4",
                                children: t.map((e, t) =>
                                    a.jsx(
                                        h,
                                        {
                                            logo: e.logo,
                                            amount: e.amount,
                                            description: e.description,
                                            url: e.url,
                                            isSpecial:
                                                e.id === i.pinnedTable || e.id === i.pinnedSTable,
                                        },
                                        t,
                                    ),
                                ),
                            }),
                        });
    },
    g = () => {
        const [r, i] = s.useState([]),
            [l, n] = s.useState(null),
            [c, d] = s.useState(0),
            [p, h] = s.useState([]),
            [u, f] = s.useState([]),
            [g, b] = s.useState(null),
            [y, v] = s.useState([]),
            { site: w, categories: j } = e(),
            { setStoryOpen: N } = t();
        (s.useEffect(() => {
            try {
                if (w.games) {
                    const e = JSON.parse(w.games),
                        t = new Map(),
                        a = e.groups.find((e) => e.verificationimage)?.verificationimage;
                    e.groups.forEach((e) => {
                        e.games.forEach((s) => {
                            const r = t.get(s.name);
                            (!r || (s.sticky && !r.sticky)) &&
                                t.set(s.name, {
                                    ...s,
                                    order: e.order,
                                    verificationimage: e.verificationimage || a,
                                });
                        });
                    });
                    const s = Array.from(t.values());
                    (s.sort((e, t) =>
                        e.sticky && !t.sticky
                            ? -1
                            : !e.sticky && t.sticky
                                ? 1
                                : (e.order || 0) - (t.order || 0),
                    ),
                        i(s.slice(0, 15)));
                }
            } catch (e) { }
        }, [w.games]),
            s.useEffect(() => {
                N(null !== l);
            }, [l, N]));
        (s.useEffect(() => {
            if (p.length > 0) {
                ((() => {
                    const e = [
                        {
                            top: 8 * Math.random() + 5 + "%",
                            left: 8 * Math.random() + 2 + "%",
                            rotate: 8 * Math.random() - 4 + "deg",
                        },
                        {
                            top: 10 * Math.random() + 25 + "%",
                            right: 8 * Math.random() + 2 + "%",
                            rotate: 8 * Math.random() - 4 + "deg",
                        },
                        {
                            top: 10 * Math.random() + 55 + "%",
                            left: 8 * Math.random() + 2 + "%",
                            rotate: 8 * Math.random() - 4 + "deg",
                        },
                        {
                            bottom: 8 * Math.random() + 5 + "%",
                            right: 8 * Math.random() + 2 + "%",
                            rotate: 8 * Math.random() - 4 + "deg",
                        },
                    ];
                    f(e);
                })(),
                    ((e) => {
                        if (e.length <= 4) v([...e].sort(() => Math.random() - 0.5));
                        else {
                            const t = [...e].sort(() => Math.random() - 0.5);
                            v(t.slice(0, 4));
                        }
                    })(p));
                const e = Math.floor(Math.random() * p.length);
                b(p[e]);
            }
        }, [p, l]),
            s.useEffect(() => {
                if (null === l) return;
                const e = setInterval(() => {
                    d((e) => (e >= 100 ? (k(), 0) : e + 2));
                }, 100);
                return () => clearInterval(e);
            }, [l, c]));
        const k = () => {
            if (null !== l)
                if (l < r.length - 1) {
                    const t = l + 1,
                        a = r[t];
                    try {
                        const e = JSON.parse(w.games).groups.find((e) =>
                            e.games.some((e) => e.name === a.name),
                        );
                        if (e) {
                            const t = j.find((t) => t.id === e.category_id);
                            t && h(t.boards);
                        }
                    } catch (e) { }
                    (n(t), d(0));
                } else S();
        },
            S = () => {
                (n(null), d(0), h([]));
            };
        s.useEffect(() => {
            if (null !== l) {
                document.body.classList.add("modal-open");
                const e = document.querySelector(".app-header"),
                    t = document.querySelector(".app-slider"),
                    a = document.querySelector(".app-navigation"),
                    s = document.querySelector(".app-notification");
                (e && (e.style.display = "none"),
                    t && (t.style.display = "none"),
                    a && (a.style.display = "none"),
                    s && (s.style.display = "none"));
            } else {
                document.body.classList.remove("modal-open");
                const e = document.querySelector(".app-header"),
                    t = document.querySelector(".app-slider"),
                    a = document.querySelector(".app-navigation"),
                    s = document.querySelector(".app-notification");
                (e && (e.style.display = ""),
                    t && (t.style.display = ""),
                    a && (a.style.display = ""),
                    s && (s.style.display = ""));
            }
            return () => {
                document.body.classList.remove("modal-open");
                const e = document.querySelector(".app-header"),
                    t = document.querySelector(".app-slider"),
                    a = document.querySelector(".app-navigation"),
                    s = document.querySelector(".app-notification");
                (e && (e.style.display = ""),
                    t && (t.style.display = ""),
                    a && (a.style.display = ""),
                    s && (s.style.display = ""));
            };
        }, [l]);
        const z = null !== l ? r[l] : null;
        return a.jsxs(a.Fragment, {
            children: [
                a.jsx("div", {
                    className: "py-5 overflow-x-auto hide-scrollbar",
                    children: a.jsx("div", {
                        className: "flex space-x-3 px-4",
                        children: r.map((e, t) =>
                            a.jsxs(
                                "button",
                                {
                                    onClick: () =>
                                        ((e) => {
                                            const t = r[e];
                                            try {
                                                const e = JSON.parse(w.games).groups.find((e) =>
                                                    e.games.some((e) => e.name === t.name),
                                                );
                                                if (e) {
                                                    const t = j.find((t) => t.id === e.category_id);
                                                    t && h(t.boards);
                                                }
                                            } catch (a) { }
                                            (n(e), d(0));
                                        })(t),
                                    className: "flex-shrink-0 flex flex-col items-center group",
                                    children: [
                                        a.jsxs("div", {
                                            className: "relative",
                                            children: [
                                                a.jsx("div", {
                                                    className:
                                                        "relative w-16 h-16 rounded-xl p-[2px] transition-all duration-300 group-hover:scale-105 group-active:scale-95 " +
                                                        (e.sticky
                                                            ? "bg-gradient-to-br from-amber-400 via-orange-500 to-red-500 shadow-[0_0_20px_rgba(251,146,60,0.5)]"
                                                            : "bg-gradient-to-br from-primary-400 via-primary-500 to-accent-500 shadow-[0_0_15px_rgba(var(--color-primary-rgb),0.3)]"),
                                                    children: a.jsx("div", {
                                                        className:
                                                            "w-full h-full rounded-[10px] border-2 border-[var(--color-background-main)] overflow-hidden bg-black",
                                                        children: a.jsx("img", {
                                                            src: e.image,
                                                            alt: e.name,
                                                            className:
                                                                "w-full h-full object-cover transition-transform duration-500 group-hover:scale-110",
                                                        }),
                                                    }),
                                                }),
                                                e.sticky &&
                                                a.jsx("div", {
                                                    className:
                                                        "absolute -top-1 -right-1 w-4 h-4 bg-gradient-to-br from-amber-400 to-orange-500 rounded-full flex items-center justify-center shadow-lg border-2 border-[var(--color-background-main)]",
                                                    children: a.jsx("span", {
                                                        className: "text-[7px]",
                                                        children: "🔥",
                                                    }),
                                                }),
                                            ],
                                        }),
                                        a.jsx("span", {
                                            className:
                                                "mt-1.5 text-[10px] font-medium text-[var(--color-text-secondary)] max-w-[64px] truncate group-hover:text-white transition-colors",
                                            children: e.name,
                                        }),
                                    ],
                                },
                                t,
                            ),
                        ),
                    }),
                }),
                z &&
                a.jsxs("div", {
                    className:
                        "fixed inset-0 z-[300] flex items-center justify-center cursor-pointer",
                    style: {
                        backgroundImage: z.storyimage ? `url(${z.storyimage})` : "none",
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        backgroundRepeat: "no-repeat",
                        backgroundColor: "black",
                    },
                    onClick: () => {
                        g && window.open(g.url, "_blank", "noopener,noreferrer");
                    },
                    children: [
                        a.jsx("div", { className: "absolute inset-0 bg-black/30" }),
                        a.jsx("div", {
                            className: "absolute top-2 left-2 right-2 flex space-x-1 z-30",
                            children: r.map((e, t) =>
                                a.jsxs(
                                    "div",
                                    {
                                        className:
                                            "flex-1 h-0.5 bg-white/30 rounded-full overflow-hidden",
                                        children: [
                                            t < (l || 0) &&
                                            a.jsx("div", { className: "h-full bg-white w-full" }),
                                            t === l &&
                                            a.jsx("div", {
                                                className:
                                                    "h-full bg-white transition-all duration-100 ease-linear",
                                                style: { width: `${c}%` },
                                            }),
                                        ],
                                    },
                                    t,
                                ),
                            ),
                        }),
                        a.jsx("button", {
                            onClick: (e) => {
                                (e.stopPropagation(), S());
                            },
                            className:
                                "absolute top-5 right-4 z-40 bg-black/50 backdrop-blur-sm text-white p-2 rounded-full hover:bg-black/70 transition-colors",
                            children: a.jsx(o, { size: 24 }),
                        }),
                        a.jsx("button", {
                            onClick: (e) => {
                                (e.stopPropagation(),
                                    (() => {
                                        if (null === l || 0 === l) return;
                                        const e = l - 1,
                                            t = r[e];
                                        try {
                                            const e = JSON.parse(w.games).groups.find((e) =>
                                                e.games.some((e) => e.name === t.name),
                                            );
                                            if (e) {
                                                const t = j.find((t) => t.id === e.category_id);
                                                t && h(t.boards);
                                            }
                                        } catch (a) { }
                                        (n(e), d(0));
                                    })());
                            },
                            className:
                                "absolute left-0 top-0 bottom-0 w-1/4 z-30 flex items-center justify-start pl-4",
                            disabled: 0 === l,
                            children:
                                0 !== l &&
                                a.jsx(m, {
                                    size: 32,
                                    className:
                                        "text-white/70 hover:text-white transition-colors",
                                }),
                        }),
                        a.jsx("button", {
                            onClick: (e) => {
                                (e.stopPropagation(), k());
                            },
                            className:
                                "absolute right-0 top-0 bottom-0 w-1/4 z-30 flex items-center justify-end pr-4",
                            children: a.jsx(x, {
                                size: 32,
                                className: "text-white/70 hover:text-white transition-colors",
                            }),
                        }),
                        a.jsxs("div", {
                            className:
                                "relative w-full h-full max-w-md mx-auto flex flex-col z-20",
                            onClick: (e) => e.stopPropagation(),
                            children: [
                                a.jsx("div", {
                                    className: "absolute top-5 left-0 right-0 z-20 px-4",
                                    children: a.jsx("div", {
                                        className: "flex items-center justify-between",
                                        children: a.jsxs("div", {
                                            className: "flex items-center space-x-3",
                                            children: [
                                                a.jsx("div", {
                                                    className:
                                                        "w-10 h-10 rounded-full border-[3px] border-gradient-instagram overflow-hidden flex-shrink-0 shadow-lg",
                                                    style: {
                                                        background:
                                                            "linear-gradient(45deg, #f09433, #e6683c, #dc2743, #cc2366, #bc1888)",
                                                        padding: "2px",
                                                    },
                                                    children: a.jsx("div", {
                                                        className:
                                                            "w-full h-full rounded-full border-2 border-black overflow-hidden",
                                                        children: a.jsx("img", {
                                                            src: z.image,
                                                            alt: z.name,
                                                            className: "w-full h-full object-cover",
                                                        }),
                                                    }),
                                                }),
                                                a.jsxs("div", {
                                                    className: "flex items-center space-x-1.5",
                                                    children: [
                                                        a.jsx("span", {
                                                            className: "text-white font-semibold text-sm",
                                                            style: {
                                                                textShadow:
                                                                    "0 1px 3px rgba(0,0,0,0.8), 0 0 10px rgba(0,0,0,0.5)",
                                                            },
                                                            children: z.name,
                                                        }),
                                                        z.verificationimage &&
                                                        a.jsx("img", {
                                                            src: z.verificationimage,
                                                            alt: "Verified",
                                                            className: "w-4 h-4 drop-shadow-lg",
                                                        }),
                                                    ],
                                                }),
                                            ],
                                        }),
                                    }),
                                }),
                                y.length > 0 &&
                                u.length > 0 &&
                                a.jsxs("div", {
                                    className:
                                        "absolute inset-0 flex flex-col items-center justify-center px-3 sm:px-6 pt-24 sm:pt-32 pb-16 sm:pb-24",
                                    children: [
                                        a.jsx("div", {
                                            className:
                                                "mb-8 sm:mb-16 text-center z-10 max-w-[90%] sm:max-w-full",
                                            children: a.jsx("h2", {
                                                className:
                                                    "text-white text-base sm:text-2xl md:text-3xl font-bold drop-shadow-2xl px-3 py-2 sm:px-6 sm:py-3 bg-black/40 backdrop-blur-md rounded-xl sm:rounded-2xl border border-white/20",
                                                children:
                                                    z.storytext || "Büyük kazançlar seni bekliyor!",
                                            }),
                                        }),
                                        a.jsx("div", {
                                            className:
                                                "relative w-full max-w-2xl h-[400px] sm:h-[700px]",
                                            children: y.map((e, t) => {
                                                const s = u[t] || u[0];
                                                return a.jsx(
                                                    "a",
                                                    {
                                                        href: e.url,
                                                        target: "_blank",
                                                        rel: "noopener noreferrer",
                                                        onClick: (e) => e.stopPropagation(),
                                                        className:
                                                            "absolute hover:scale-105 transition-transform duration-300 active:scale-95 z-40 pointer-events-auto",
                                                        style: {
                                                            top: s.top,
                                                            bottom: s.bottom,
                                                            left: s.left,
                                                            right: s.right,
                                                            transform: `rotate(${s.rotate})`,
                                                        },
                                                        children: a.jsxs("div", {
                                                            className:
                                                                "bg-white/95 backdrop-blur-sm rounded-xl sm:rounded-2xl shadow-2xl border border-white/50 overflow-hidden min-w-[165px] max-w-[185px] sm:min-w-[200px] sm:max-w-[240px]",
                                                            children: [
                                                                a.jsxs("div", {
                                                                    className:
                                                                        "px-3 py-2 sm:px-4 sm:py-3 flex items-center gap-2 sm:gap-3 bg-gradient-to-r from-white to-gray-50",
                                                                    children: [
                                                                        a.jsxs("svg", {
                                                                            className:
                                                                                "w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0",
                                                                            viewBox: "0 0 24 24",
                                                                            fill: "url(#locationGradient)",
                                                                            children: [
                                                                                a.jsx("defs", {
                                                                                    children: a.jsxs(
                                                                                        "linearGradient",
                                                                                        {
                                                                                            id: "locationGradient",
                                                                                            x1: "0%",
                                                                                            y1: "0%",
                                                                                            x2: "100%",
                                                                                            y2: "100%",
                                                                                            children: [
                                                                                                a.jsx("stop", {
                                                                                                    offset: "0%",
                                                                                                    stopColor: "#FF6B6B",
                                                                                                }),
                                                                                                a.jsx("stop", {
                                                                                                    offset: "50%",
                                                                                                    stopColor: "#FF8E53",
                                                                                                }),
                                                                                                a.jsx("stop", {
                                                                                                    offset: "100%",
                                                                                                    stopColor: "#FFB84D",
                                                                                                }),
                                                                                            ],
                                                                                        },
                                                                                    ),
                                                                                }),
                                                                                a.jsx("path", {
                                                                                    d: "M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z",
                                                                                }),
                                                                            ],
                                                                        }),
                                                                        a.jsx("div", {
                                                                            className: "flex-1 min-w-0",
                                                                            children: a.jsxs("div", {
                                                                                className:
                                                                                    "text-transparent bg-clip-text bg-gradient-to-r from-orange-600 via-red-600 to-pink-600 font-extrabold text-sm sm:text-lg truncate",
                                                                                children: [
                                                                                    e.baslik,
                                                                                    " #",
                                                                                    e.siteadi.toUpperCase(),
                                                                                ],
                                                                            }),
                                                                        }),
                                                                    ],
                                                                }),
                                                                e.altyazi &&
                                                                a.jsx("div", {
                                                                    className:
                                                                        "px-3 py-2 sm:px-4 sm:py-2.5 bg-white/80",
                                                                    children: a.jsx("div", {
                                                                        className:
                                                                            "text-gray-700 text-[10px] sm:text-xs font-medium line-clamp-2",
                                                                        children: e.altyazi,
                                                                    }),
                                                                }),
                                                            ],
                                                        }),
                                                    },
                                                    t,
                                                );
                                            }),
                                        }),
                                    ],
                                }),
                            ],
                        }),
                    ],
                }),
            ],
        });
    },
    b = () => {
        const { bonuses: t, setSearchQuery: s, setSelectedCategory: r } = e();
        return a.jsxs("div", {
            className: "py-1",
            children: [
                a.jsx(p, { onSearch: s, onCategoryChange: r }),
                a.jsx(g, {}),
                a.jsx(f, { bonuses: t }),
            ],
        });
    };
export { b as default };
