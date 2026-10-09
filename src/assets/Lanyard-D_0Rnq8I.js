import { r as e } from "./rolldown-runtime-hePW80VL.js";
import { D as t, S as n, T as r, _ as i, a, c as o, d as s, f as c, i as l, k as u, l as d, n as f, o as p, p as m, r as h, s as g, t as _, u as v, v as y, x as b, y as x } from "./react-three-DQVdJ5Q2.js";
import { n as S, t as C } from "./three-ByLK_c_V.js";
var w = e(u(), 1)
    , T = `/assets/card-BP4TWJmK.glb`
    , E = `/assets/lanyard-band-VjQJaFOi.png`
    , D = `/assets/lanyard-back-C3--bKJr.png`
    , O = `/assets/lanyard-back-C3--bKJr.png`
    , k = t();
c({
    MeshLineGeometry: C,
    MeshLineMaterial: S
});
var A = class extends w.Component {
    constructor(e) {
        super(e),
            this.state = {
                hasError: !1,
                error: null
            }
    }
    static getDerivedStateFromError(e) {
        return {
            hasError: !0,
            error: e
        }
    }
    componentDidCatch(e, t) {
        console.error(`Lanyard 3D Error:`, e, t)
    }
    render() {
        return this.state.hasError ? (0,
            k.jsxs)(`div`, {
                className: `flex flex-col items-center justify-center p-6 bg-white border-4 border-on-surface brick-shadow max-w-sm text-center`,
                children: [(0,
                    k.jsx)(`img`, {
                        src: D,
                        alt: `Lanyard Card`,
                        className: `w-48 h-auto rounded-lg shadow-md border-2 border-on-surface mb-3`
                    }), (0,
                        k.jsx)(`p`, {
                            className: `font-label-caps text-xs text-on-surface-variant font-bold`,
                            children: this.state.error?.message || `3D Acceleration Loading...`
                        })]
            }) : this.props.children
    }
}
    , j = {
        x: 0,
        y: 0,
        w: .5,
        h: .755
    }
    , M = {
        x: .5,
        y: 0,
        w: .5,
        h: .757
    };
function N({ position: e = [0, 0, 24], gravity: t = [0, -60, 0], fov: n = 20, transparent: r = !0, frontImage: i = D, backImage: a = O, imageFit: c = `cover`, lanyardImage: l = E, lanyardWidth: u = 1 }) {
    let [d, f] = (0,
        w.useState)(() => typeof window < `u` && window.innerWidth < 768);
    return (0,
        w.useEffect)(() => {
            let e = () => f(window.innerWidth < 768);
            return window.addEventListener(`resize`, e),
                () => window.removeEventListener(`resize`, e)
        }
            , []),
        (0,
            k.jsx)(A, {
                children: (0,
                    k.jsx)(`div`, {
                        className: `relative z-50 w-full h-full flex justify-center items-center pointer-events-auto`,
                        children: (0,
                            k.jsxs)(s, {
                                camera: {
                                    position: e,
                                    fov: n
                                },
                                dpr: [1, d ? 1.5 : 2],
                                gl: {
                                    alpha: r,
                                    antialias: !0
                                },
                                onCreated: ({ gl: e }) => e.setClearColor(new x(0), +!r),
                                children: [(0,
                                    k.jsx)(`ambientLight`, {
                                        intensity: 1.6
                                    }), (0,
                                        k.jsxs)(w.Suspense, {
                                            fallback: null,
                                            children: [(0,
                                                k.jsx)(h, {
                                                    gravity: t,
                                                    timeStep: d ? 1 / 30 : 1 / 60,
                                                    children: (0,
                                                        k.jsx)(z, {
                                                            isMobile: d,
                                                            frontImage: i,
                                                            backImage: a,
                                                            imageFit: c,
                                                            lanyardImage: l,
                                                            lanyardWidth: u
                                                        })
                                                }), (0,
                                                    k.jsxs)(o, {
                                                        blur: .85,
                                                        children: [(0,
                                                            k.jsx)(g, {
                                                                intensity: .8,
                                                                color: `white`,
                                                                position: [0, -1, 5],
                                                                rotation: [0, 0, Math.PI / 3],
                                                                scale: [100, .1, 1]
                                                            }), (0,
                                                                k.jsx)(g, {
                                                                    intensity: 1,
                                                                    color: `white`,
                                                                    position: [-1, -1, 1],
                                                                    rotation: [0, 0, Math.PI / 3],
                                                                    scale: [100, .1, 1]
                                                                }), (0,
                                                                    k.jsx)(g, {
                                                                        intensity: 1,
                                                                        color: `white`,
                                                                        position: [1, 1, 1],
                                                                        rotation: [0, 0, Math.PI / 3],
                                                                        scale: [100, .1, 1]
                                                                    }), (0,
                                                                        k.jsx)(g, {
                                                                            intensity: 1.5,
                                                                            color: `white`,
                                                                            position: [-10, 0, 14],
                                                                            rotation: [0, Math.PI / 2, Math.PI / 3],
                                                                            scale: [100, 10, 1]
                                                                        })]
                                                    })]
                                        })]
                            })
                    })
            })
}
var P = new r
    , F = new r
    , I = new r
    , L = new r
    , R = {
        type: `dynamic`,
        canSleep: !0,
        colliders: !1,
        angularDamping: 2,
        linearDamping: 2
    };
function z({ maxSpeed: e = 60, minSpeed: t = 10, isMobile: o = !1, frontImage: s = D, backImage: c = O, imageFit: u = `cover`, lanyardImage: h = E, lanyardWidth: g = 1 }) {
    let x = (0,
        w.useRef)()
        , S = (0,
            w.useRef)()
        , C = (0,
            w.useRef)()
        , A = (0,
            w.useRef)()
        , N = (0,
            w.useRef)()
        , z = (0,
            w.useRef)()
        , { nodes: B, materials: V } = d(T)
        , H = v(h || `/assets/lanyard-band-VjQJaFOi.png`)
        , U = v(s || `/assets/lanyard-back-C3--bKJr.png`)
        , W = v(c || `/assets/lanyard-back-C3--bKJr.png`)
        , G = (0,
            w.useMemo)(() => {
                try {
                    let e = V?.base?.map
                        , t = e?.image
                        , r = t && t.width > 0 ? t.width : 2048
                        , a = t && t.height > 0 ? t.height : 2048
                        , o = document.createElement(`canvas`);
                    o.width = r,
                        o.height = a;
                    let s = o.getContext(`2d`);
                    if (!s)
                        return e || null;
                    if (s.fillStyle = `#ffffff`,
                        s.fillRect(0, 0, r, a),
                        t && t.width > 0 && t.height > 0)
                        try {
                            s.drawImage(t, 0, 0, r, a)
                        } catch { }
                    let c = (e, t) => {
                        let n = e?.image || e;
                        if (!n || !n.width || !n.height)
                            return;
                        let i = t.x * r
                            , o = t.y * a
                            , c = t.w * r
                            , l = t.h * a
                            , d = (u === `contain` ? Math.min : Math.max)(c / n.width, l / n.height)
                            , f = n.width * d
                            , p = n.height * d
                            , m = i + (c - f) / 2
                            , h = o + (l - p) / 2;
                        s.save(),
                            s.beginPath(),
                            s.rect(i, o, c, l),
                            s.clip();
                        try {
                            s.drawImage(n, m, h, f, p)
                        } catch { }
                        s.restore()
                    }
                        ;
                    U && c(U, j),
                        W && c(W, M);
                    let l = new i(o);
                    return l.colorSpace = n,
                        e && (l.flipY = e.flipY),
                        l.anisotropy = 16,
                        l.needsUpdate = !0,
                        l
                } catch (e) {
                    return console.warn(`cardMap generation error:`, e),
                        V?.base?.map || null
                }
            }
                , [u, U, W, V?.base?.map]);
    (0,
        w.useEffect)(() => () => {
            G && typeof G.dispose == `function` && G.dispose()
        }
            , [G]);
    let [K] = (0,
        w.useState)(() => new y([new r, new r, new r, new r]))
        , [q, J] = (0,
            w.useState)(!1)
        , [Y, X] = (0,
            w.useState)(!1);
    return a(S, C, [[0, 0, 0], [0, 0, 0], 1]),
        a(C, A, [[0, 0, 0], [0, 0, 0], 1]),
        a(A, N, [[0, 0, 0], [0, 0, 0], 1]),
        p(N, z, [[0, 0, 0], [0, 1.5, 0]]),
        (0,
            w.useEffect)(() => {
                if (Y)
                    return document.body.style.cursor = q ? `grabbing` : `grab`,
                        () => void (document.body.style.cursor = `auto`)
            }
                , [Y, q]),
        m((n, i) => {
            q && z.current && (P.set(n.pointer.x, n.pointer.y, .5).unproject(n.camera),
                L.copy(P).sub(n.camera.position).normalize(),
                P.add(L.multiplyScalar(n.camera.position.length())),
                [z, C, A, N, S].forEach(e => e.current?.wakeUp()),
                z.current?.setNextKinematicTranslation({
                    x: P.x - q.x,
                    y: P.y - q.y,
                    z: P.z - q.z
                })),
                S.current && z.current && x.current && ([C, A].forEach(n => {
                    if (n.current) {
                        n.current.lerped || (n.current.lerped = new r().copy(n.current.translation()));
                        let a = Math.max(.1, Math.min(1, n.current.lerped.distanceTo(n.current.translation())));
                        n.current.lerped.lerp(n.current.translation(), i * (t + a * (e - t)))
                    }
                }
                ),
                    N.current && A.current?.lerped && C.current?.lerped && S.current && (K.points[0].copy(N.current.translation()),
                        K.points[1].copy(A.current.lerped),
                        K.points[2].copy(C.current.lerped),
                        K.points[3].copy(S.current.translation()),
                        x.current.geometry.setPoints(K.getPoints(o ? 16 : 32))),
                    F.copy(z.current.angvel()),
                    I.copy(z.current.rotation()),
                    z.current.setAngvel({
                        x: F.x,
                        y: F.y - I.y * .25,
                        z: F.z
                    }))
        }
        ),
        K.curveType = `chordal`,
        H && (H.wrapS = H.wrapT = b),
        B?.card ? (0,
            k.jsxs)(k.Fragment, {
                children: [(0,
                    k.jsxs)(`group`, {
                        position: [0, 4, 0],
                        children: [(0,
                            k.jsx)(l, {
                                ref: S,
                                ...R,
                                type: `fixed`
                            }), (0,
                                k.jsx)(l, {
                                    position: [.5, 0, 0],
                                    ref: C,
                                    ...R,
                                    children: (0,
                                        k.jsx)(_, {
                                            args: [.1]
                                        })
                                }), (0,
                                    k.jsx)(l, {
                                        position: [1, 0, 0],
                                        ref: A,
                                        ...R,
                                        children: (0,
                                            k.jsx)(_, {
                                                args: [.1]
                                            })
                                    }), (0,
                                        k.jsx)(l, {
                                            position: [1.5, 0, 0],
                                            ref: N,
                                            ...R,
                                            children: (0,
                                                k.jsx)(_, {
                                                    args: [.1]
                                                })
                                        }), (0,
                                            k.jsxs)(l, {
                                                position: [2, 0, 0],
                                                ref: z,
                                                ...R,
                                                type: q ? `kinematicPosition` : `dynamic`,
                                                children: [(0,
                                                    k.jsx)(f, {
                                                        args: [.8, 1.125, .01]
                                                    }), (0,
                                                        k.jsxs)(`group`, {
                                                            scale: 2.25,
                                                            position: [0, -1.2, -.05],
                                                            onPointerOver: () => X(!0),
                                                            onPointerOut: () => X(!1),
                                                            onPointerUp: e => (e.target.releasePointerCapture(e.pointerId),
                                                                J(!1)),
                                                            onPointerDown: e => (e.target.setPointerCapture(e.pointerId),
                                                                J(new r().copy(e.point).sub(P.copy(z.current.translation())))),
                                                            children: [(0,
                                                                k.jsx)(`mesh`, {
                                                                    geometry: B.card.geometry,
                                                                    children: (0,
                                                                        k.jsx)(`meshPhysicalMaterial`, {
                                                                            map: G || V?.base?.map,
                                                                            "map-anisotropy": 16,
                                                                            clearcoat: .05,
                                                                            clearcoatRoughness: .8,
                                                                            roughness: .7,
                                                                            metalness: 0
                                                                        })
                                                                }), B?.clip?.geometry && (0,
                                                                    k.jsx)(`mesh`, {
                                                                        geometry: B.clip.geometry,
                                                                        material: V?.metal,
                                                                        "material-roughness": .3
                                                                    }), B?.clamp?.geometry && (0,
                                                                        k.jsx)(`mesh`, {
                                                                            geometry: B.clamp.geometry,
                                                                            material: V?.metal
                                                                        })]
                                                        })]
                                            })]
                    }), (0,
                        k.jsxs)(`mesh`, {
                            ref: x,
                            children: [(0,
                                k.jsx)(`meshLineGeometry`, {}), (0,
                                    k.jsx)(`meshLineMaterial`, {
                                        color: `white`,
                                        depthTest: !1,
                                        resolution: o ? [1e3, 2e3] : [1e3, 1e3],
                                        useMap: !0,
                                        map: H,
                                        repeat: [-4, 1],
                                        lineWidth: g
                                    })]
                        })]
            }) : null
}
d.preload(T),
    v.preload(E),
    v.preload(D),
    v.preload(O);
export { N as default };
