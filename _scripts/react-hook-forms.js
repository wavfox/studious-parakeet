!function (e, r) { "object" == typeof exports && "undefined" != typeof module ? r(exports, require("react")) : "function" == typeof define && define.amd ? define(["exports", "react"], r) : r((e = "undefined" != typeof globalThis ? globalThis : e || self).ReactHookForm = {}, e.React) }(this, (function (e, r) { "use strict"; function t(e) { if (e && e.__esModule) return e; var r = Object.create(null); return e && Object.keys(e).forEach((function (t) { if ("default" !== t) { var n = Object.getOwnPropertyDescriptor(e, t); Object.defineProperty(r, t, n.get ? n : { enumerable: !0, get: function () { return e[t] } }) } })), r.default = e, Object.freeze(r) } var n = t(r), s = e => "checkbox" === e.type, c = e => null == e; const u = e => "object" == typeof e; var i = e => !c(e) && !Array.isArray(e) && u(e) && !(e instanceof Date), a = e => e.substring(0, e.search(/.\d/)) || e, l = e => e.filter(Boolean), o = e => void 0 === e, f = (e = {}, r, t) => { const n = l(r.split(/[,[\].]+?/)).reduce((e, r) => c(e) ? e : e[r], e); return o(n) || n === e ? o(e[r]) ? t : e[r] : n }; const d = "blur", b = "change", y = "onBlur", g = "onChange", m = "onSubmit", h = "onTouched", v = "all", p = "undefined", A = "max", x = "min", O = "maxLength", j = "minLength", k = "pattern", V = "required", R = "validate"; var F = (e, r) => { const t = Object.assign({}, e); return delete t[r], t }; const S = n.createContext(null); S.displayName = "RHFContext"; const w = () => n.useContext(S); var _ = (e, r, t, n, s = !0) => e ? new Proxy(r, { get: (e, r) => { if (r in e) return t.current[r] !== v && (t.current[r] = !s || v), n && (n.current[r] = !0), e[r] } }) : r, C = e => i(e) && !Object.keys(e).length, D = (e, r, t) => C(e) || Object.keys(e).length >= Object.keys(r).length || Object.keys(e).find(e => r[e] === (!t || v)), E = typeof window !== p && typeof window.HTMLElement !== p && typeof document !== p; const B = E ? "Proxy" in window : typeof Proxy !== p; function N(e) { const r = w(), { formStateRef: t, formStateSubjectRef: s, readFormStateRef: c } = e && e.control || r.control, [u, i] = n.useState(t.current), a = n.useRef({ isDirty: !1, dirtyFields: !1, touchedFields: !1, isValidating: !1, isValid: !1, errors: !1 }); return n.useEffect(() => { const e = s.current.subscribe({ next: e => { D(e, a.current) && i(Object.assign(Object.assign({}, t.current), e)) } }); return () => e.unsubscribe() }, []), _(B, u, c, a, !1) } function $({ name: e, rules: r, defaultValue: t, control: c, shouldUnregister: u }) { const l = w(), { defaultValuesRef: y, register: g, fieldsRef: m, unregister: h, fieldArrayNamesRef: v, controllerSubjectRef: p, shouldUnmountUnregister: A } = c || l.control, { onChange: x, onBlur: O, ref: j } = g(e, r), [k, V] = n.useState(o(f(m.current, e)._f.value) || ((e, r) => [...e].some(e => a(r) === e))(v.current, e) ? o(t) ? f(y.current, e) : t : f(m.current, e)._f.value), R = N({ control: c || l.control }); return f(m.current, e)._f.value = k, n.useEffect(() => { const r = p.current.subscribe({ next: r => (!r.name || e === r.name) && V(f(r.values, e)) }); return j({ target: k }), () => { r.unsubscribe(), (A || u) && h(e) } }, [e]), { field: { onChange: r => { const t = (e => i(e) && e.target ? s(e.target) ? e.target.checked : e.target.value : e)(r); V(t), x({ target: { value: t, name: e }, type: b }) }, onBlur: () => { O({ target: { name: e }, type: d }) }, name: e, value: k, ref: e => e && j(e) }, formState: R, fieldState: Object.defineProperties({}, { invalid: { get: () => !!f(R.errors, e) }, isDirty: { get: () => !!f(R.dirtyFields, e) }, isTouched: { get: () => !!f(R.touchedFields, e) }, error: { get: () => f(R.errors, e) } }) } } var M = (e, r, t, n, s) => r ? Object.assign(Object.assign({}, t[e]), { types: Object.assign(Object.assign({}, t[e] && t[e].types ? t[e].types : {}), { [n]: s || !0 }) }) : {}, T = e => /^\w*$/.test(e), I = e => l(e.replace(/["|']|\]/g, "").split(/\.|\[/)); function P(e, r, t) { let n = -1; const s = T(r) ? [r] : I(r), c = s.length, u = c - 1; for (; ++n < c;) { const r = s[n]; let c = t; if (n !== u) { const t = e[r]; c = i(t) || Array.isArray(t) ? t : isNaN(+s[n + 1]) ? {} : [] } e[r] = c, e = e[r] } return e } const U = (e, r, t) => { for (const n of t || Object.keys(e)) { const t = f(e, n); if (t) { const e = t._f, n = F(t, "_f"); if (e && r(e.name)) { if (e.ref.focus && o(e.ref.focus())) break; if (e.refs) { e.refs[0].focus(); break } } else i(n) && U(n, r) } } }, W = (e, r, t = {}) => { for (const n in e.current) { const s = e.current[n]; if (s) { const e = s._f, c = F(s, "_f"); P(t, n, e ? e.ref.disabled || e.refs && e.refs.every(e => e.disabled) ? void 0 : e.value : Array.isArray(s) ? [] : {}), c && W({ current: c }, r, t[n]) } } return Object.assign(Object.assign({}, r), t) }; var L = () => { const e = typeof performance === p ? Date.now() : 1e3 * performance.now(); return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, r => { const t = (16 * Math.random() + e) % 16 | 0; return ("x" == r ? t : 3 & t | 8).toString(16) }) }, q = (e = [], r) => e.map(e => Object.assign({ [r]: e && e[r] || L() }, e)), H = e => c(e) || !u(e); function z(e, r, t) { if (H(e) || H(r) || e instanceof Date || r instanceof Date) return e === r; if (!n.isValidElement(e)) { const n = Object.keys(e), s = Object.keys(r); if (n.length !== s.length) return !1; for (const s of n) { const n = e[s]; if (!t || "ref" !== s) { const e = r[s]; if ((i(n) || Array.isArray(n)) && (i(e) || Array.isArray(e)) ? !z(n, e, t) : n !== e) return !1 } } } return !0 } function G(e, r, t, n, s) { let c = -1; for (; ++c < e.length;) { for (const n in e[c]) Array.isArray(e[c][n]) ? (!t[c] && (t[c] = {}), t[c][n] = [], G(e[c][n], f(r[c] || {}, n, []), t[c][n], t[c], n)) : z(f(r[c] || {}, n), e[c][n]) ? P(t[c] || {}, n) : t[c] = Object.assign(Object.assign({}, t[c]), { [n]: !0 }); n && !t.length && delete n[s] } return t } var J = (e, r, t) => function e(r, t) { if (H(r) || H(t)) return t; for (const n in t) { const s = r[n], c = t[n]; try { r[n] = i(s) && i(c) || Array.isArray(s) && Array.isArray(c) ? e(s, c) : c } catch (e) { } } return r }(G(e, r, t.slice(0, e.length)), G(r, e, t.slice(0, e.length))); function K(e, r) { return [...e, ...Array.isArray(r) ? r : [r]] } var Q = e => Array.isArray(e) ? Array(e.length).fill(void 0) : void 0; function X(e, r, t) { return [...e.slice(0, r), ...Array.isArray(t) ? t : [t], ...e.slice(r)] } var Y = (e, r, t) => Array.isArray(e) ? (o(e[t]) && (e[t] = void 0), e.splice(t, 0, e.splice(r, 1)[0]), e) : []; function Z(e, r) { return [...Array.isArray(r) ? r : [r], ...e] } var ee = (e, r) => o(r) ? [] : function (e, r) { let t = 0; const n = [...e]; for (const e of r) n.splice(e - t, 1), t++; return l(n).length ? n : [] }(e, (Array.isArray(r) ? r : [r]).sort((e, r) => e - r)), re = (e, r, t) => { e[r] = [e[t], e[t] = e[r]][0] }, te = e => "boolean" == typeof e; function ne(e, r) { const t = T(r) ? [r] : I(r), n = 1 == t.length ? e : function (e, r) { const t = r.slice(0, -1).length; let n = 0; for (; n < t;)e = o(e) ? n++ : e[r[n++]]; return e }(e, t), s = t[t.length - 1]; let c; n && delete n[s]; for (let r = 0; r < t.slice(0, -1).length; r++) { let n, s = -1; const u = t.slice(0, -(r + 1)), a = u.length - 1; for (r > 0 && (c = e); ++s < u.length;) { const r = u[s]; n = n ? n[r] : e[r], a === s && (i(n) && C(n) || Array.isArray(n) && !n.filter(e => i(e) && !C(e) || te(e)).length) && (c ? delete c[r] : delete e[r]), c = n } } return e } function se(e, r) { const t = {}; for (const n of e) { const e = f(r, n); e && (T(n) ? t[n] = e._f : P(t, n, e._f)) } return t } var ce = e => "file" === e.type, ue = e => "select-multiple" === e.type, ie = e => "radio" === e.type; const ae = { value: !1, isValid: !1 }, le = { value: !0, isValid: !0 }; var oe = e => { if (Array.isArray(e)) { if (e.length > 1) { const r = e.filter(e => e && e.checked && !e.disabled).map(e => e.value); return { value: r, isValid: !!r.length } } return e[0].checked && !e[0].disabled ? e[0].attributes && !o(e[0].attributes.value) ? o(e[0].value) || "" === e[0].value ? le : { value: e[0].value, isValid: !0 } : le : ae } return ae }; const fe = { isValid: !1, value: null }; var de = e => Array.isArray(e) ? e.reduce((e, r) => r && r.checked && !r.disabled ? { isValid: !0, value: r.value } : e, fe) : fe; function be(e) { if (e && e._f) { const t = e._f.ref; if (t.disabled) return; return ce(t) ? t.files : ie(t) ? de(e._f.refs).value : ue(t) ? (r = t.options, [...r].filter(({ selected: e }) => e).map(({ value: e }) => e)) : s(t) ? oe(e._f.refs).value : ((e, { valueAsNumber: r, valueAsDate: t, setValueAs: n }) => r ? "" === e ? NaN : +e : t ? new Date(e) : n ? n(e) : e)(o(t.value) ? e._f.ref.value : t.value, e._f) } var r } var ye = e => e && (e.required || e.min || e.max || e.maxLength || e.minLength || e.pattern || e.validate), ge = e => "function" == typeof e, me = e => "string" == typeof e, he = e => me(e) || n.isValidElement(e), ve = e => e instanceof RegExp; function pe(e, r, t = "validate") { if (he(e) || te(e) && !e) return { type: t, message: he(e) ? e : "", ref: r } } var Ae = e => i(e) && !ve(e) ? e : { value: e, message: "" }, xe = async ({ _f: { ref: e, refs: r, required: t, maxLength: n, minLength: u, min: a, max: l, pattern: o, validate: f, name: d, value: b, valueAsNumber: y } }, g) => { const m = {}, h = ie(e), v = s(e), p = h || v, F = (y || ce(e)) && !e.value || "" === b || Array.isArray(b) && !b.length, S = M.bind(null, d, g, m), w = (r, t, n, s = O, c = j) => { const u = r ? t : n; m[d] = Object.assign({ type: r ? s : c, message: u, ref: e }, S(r ? s : c, u)) }; if (t && (!h && !v && (F || c(b)) || te(b) && !b || v && !oe(r).isValid || h && !de(r).isValid)) { const { value: n, message: s } = he(t) ? { value: !!t, message: t } : Ae(t); if (n && (m[d] = Object.assign({ type: V, message: s, ref: p ? (r || [])[0] || {} : e }, S(V, s)), !g)) return m } if (!(c(a) && c(l) || "" === b)) { let r, t; const n = Ae(l), s = Ae(a); if (isNaN(b)) { const c = e.valueAsDate || new Date(b); me(n.value) && (r = c > new Date(n.value)), me(s.value) && (t = c < new Date(s.value)) } else { const u = e.valueAsNumber || parseFloat(b); c(n.value) || (r = u > n.value), c(s.value) || (t = u < s.value) } if ((r || t) && (w(!!r, n.message, s.message, A, x), !g)) return m } if (me(b) && !F && (n || u)) { const e = Ae(n), r = Ae(u), t = !c(e.value) && b.length > e.value, s = !c(r.value) && b.length < r.value; if ((t || s) && (w(t, e.message, r.message), !g)) return m } if (me(b) && o && !F) { const { value: r, message: t } = Ae(o); if (ve(r) && !b.match(r) && (m[d] = Object.assign({ type: k, message: t, ref: e }, S(k, t)), !g)) return m } if (f) { const t = p && r ? r[0] : e; if (ge(f)) { const e = pe(await f(b), t); if (e && (m[d] = Object.assign(Object.assign({}, e), S(R, e.message)), !g)) return m } else if (i(f)) { let e = {}; for (const [r, n] of Object.entries(f)) { if (!C(e) && !g) break; const s = pe(await n(b), t, r); s && (e = Object.assign(Object.assign({}, s), S(r, s.message)), g && (m[d] = e)) } if (!C(e) && (m[d] = Object.assign({ ref: t }, e), !g)) return m } } return m }, Oe = e => ({ isOnSubmit: !e || e === m, isOnBlur: e === y, isOnChange: e === g, isOnAll: e === v, isOnTouch: e === h }), je = e => e instanceof HTMLElement; class ke { constructor() { this.tearDowns = [] } add(e) { this.tearDowns.push(e) } unsubscribe() { for (const e of this.tearDowns) e(); this.tearDowns = [] } } class Ve { constructor(e, r) { this.observer = e, this.closed = !1, r.add(() => this.closed = !0) } next(e) { this.closed || this.observer.next(e) } } class Re { constructor() { this.observers = [] } next(e) { for (const r of this.observers) r.next(e) } subscribe(e) { const r = new ke, t = new Ve(e, r); return this.observers.push(t), r } unsubscribe() { this.observers = [] } } const Fe = typeof window === p; e.Controller = e => e.render($(e)), e.FormProvider = e => n.createElement(S.Provider, { value: F(e, "children") }, e.children), e.appendErrors = M, e.get = f, e.set = P, e.useController = $, e.useFieldArray = ({ control: e, name: r, keyName: t = "id", shouldUnregister: s }) => { const c = w(), u = n.useRef(""), { isWatchAllRef: i, watchFieldsRef: d, getIsDirty: b, watchSubjectRef: y, fieldArraySubjectRef: g, fieldArrayNamesRef: m, fieldsRef: h, defaultValuesRef: v, formStateRef: p, formStateSubjectRef: A, readFormStateRef: x, validFieldsRef: O, fieldsWithValidationRef: j, fieldArrayDefaultValuesRef: k, unregister: V, shouldUnmountUnregister: R } = e || c.control, [S, _] = n.useState(q(f(k.current, a(r)) ? f(k.current, r, []) : f(v.current, r, []), t)); P(k.current, r, [...S]), m.current.add(r); const C = e => e.map(e => F(e || {}, t)), D = () => { const e = f(W(h, v.current), r, []); return q(f(k.current, r, []).map((r, t) => Object.assign(Object.assign({}, r), e[t])), t) }, E = (e, t) => t ? o(t.focusIndex) ? t.focusName ? t.focusName : t.shouldFocus ? `${r}.${e}` : "" : `${r}.${t.focusIndex}` : `${r}.${e}`, B = (e = []) => _(q(e, t)), N = e => !l(f(e, r, [])).length && ne(e, r), $ = (e, t, n = [], s = !0) => { if (f(h.current, r)) { const n = e(f(h.current, r), t.argA, t.argB); s && P(h.current, r, n) } if (Array.isArray(f(p.current.errors, r))) { const n = e(f(p.current.errors, r), t.argA, t.argB); s && P(p.current.errors, r, n), N(p.current.errors) } if (x.current.touchedFields && f(p.current.touchedFields, r)) { const n = e(f(p.current.touchedFields, r), t.argA, t.argB); s && P(p.current.touchedFields, r, n), N(p.current.touchedFields) } (x.current.dirtyFields || x.current.isDirty) && (P(p.current.dirtyFields, r, J(C(n), f(v.current, r, []), f(p.current.dirtyFields, r, []))), (e => { e && P(p.current.dirtyFields, r, J(C(e), f(v.current, r, []), f(p.current.dirtyFields, r, []))) })(n), N(p.current.dirtyFields)), x.current.isValid && (P(O.current, r, e(f(O.current, r, []), t.argA)), N(O.current), P(j.current, r, e(f(j.current, r, []), t.argA)), N(j.current)), A.current.next({ isDirty: b(r, C(n)), errors: p.current.errors, isValid: p.current.isValid }) }, M = (e, t = 0, n = "") => e.forEach((e, s) => !H(e) && Object.entries(e).forEach(([e, c]) => { const u = `${n || r}.${n ? s : t + s}.${e}`; Array.isArray(c) ? M(c, s, u) : P(h.current, u, { _f: { ref: { name: u }, name: u, value: c } }) })); return n.useEffect(() => { if (i.current) A.current.next({}); else for (const e of d.current) if (r.startsWith(e)) { A.current.next({}); break } y.current.next({ name: r, value: f(W(h, v.current), r, []) }), u.current && U(h.current, e => e.startsWith(u.current)), u.current = "", g.current.next({ name: r, fields: C([...S]) }) }, [S, r]), n.useEffect(() => { const e = g.current.subscribe({ next({ name: e, fields: t, isReset: n }) { n && (ne(h.current, e || r), e ? P(k.current, e, t) : k.current = t, B(f(k.current, r))) } }); return !f(h.current, r) && P(h.current, r, []), () => { e.unsubscribe(), (R || s) && V(r) } }, []), { swap: n.useCallback((e, r) => { const t = D(); re(t, e, r), $(re, { argA: e, argB: r }, t, !1), B(t) }, [r]), move: n.useCallback((e, r) => { const t = D(); Y(t, e, r), B(t), $(Y, { argA: e, argB: r }, t, !1) }, [r]), prepend: n.useCallback((e, r) => { const t = Array.isArray(e) ? e : [e], n = Z(D(), t); B(n), $(Z, { argA: Q(e) }, n), M(t), u.current = E(0, r) }, [r]), append: n.useCallback((e, r) => { const t = Array.isArray(e) ? e : [e], n = K(D(), t), s = n.length - t.length; B(n), $(K, { argA: Q(e) }, n, !1), M(t, s), u.current = E(s, r) }, [r]), remove: n.useCallback(e => { const t = ee(D(), e); (e => { (Array.isArray(e) ? e : [e]).forEach(e => P(h.current, `${r}${o(e) ? "" : "." + e}`, o(e) ? [] : void 0)) })(e), B(t), $(ee, { argA: e }, t) }, [r]), insert: n.useCallback((e, r, t) => { const n = Array.isArray(r) ? r : [r], s = X(D(), e, n); B(s), $(X, { argA: e, argB: Q(r) }, s), M(n, e), u.current = E(e, t) }, [r]), fields: S } }, e.useForm = function ({ mode: e = m, reValidateMode: r = g, resolver: t, context: u, defaultValues: i = {}, shouldFocusError: b = !0, shouldUnregister: y, criteriaMode: h } = {}) { const p = n.useRef({}), A = n.useRef(new Set), x = n.useRef(new Re), O = n.useRef(new Re), j = n.useRef(new Re), k = n.useRef(new Re), V = n.useRef({}), R = n.useRef(new Set), S = n.useRef(!1), w = n.useRef({}), N = n.useRef({}), $ = n.useRef(i), M = n.useRef(!1), T = n.useRef(u), I = n.useRef(t), L = n.useRef(new Set), q = Oe(e), H = h === v, [G, K] = n.useState({ isDirty: !1, isValidating: !1, dirtyFields: {}, isSubmitted: !1, submitCount: 0, touchedFields: {}, isSubmitting: !1, isSubmitSuccessful: !1, isValid: !q.isOnSubmit, errors: {} }), Q = n.useRef({ isDirty: !B, dirtyFields: !B, touchedFields: !B, isValidating: !B, isValid: !B, errors: !B }), X = n.useRef(G); T.current = u, I.current = t; const Y = () => X.current.isValid = z(N.current, w.current) && C(X.current.errors), Z = n.useCallback((e, r, t = !1, n = {}, s, u) => { const i = f(X.current.errors, e); let a = t || !z(i, r, !0) || Q.current.isValid && o(r) && f(w.current, e) && !f(N.current, e); if (r ? (ne(N.current, e), a = a || !i || !z(i, r, !0), P(X.current.errors, e, r)) : ((f(w.current, e) || I.current) && (P(N.current, e, !0), a = a || i), ne(X.current.errors, e)), a && !c(t) || !C(n) || u) { const e = Object.assign(Object.assign({}, n), { isValid: I.current ? !!s : Y(), errors: X.current.errors }); X.current = Object.assign(Object.assign({}, X.current), e), x.current.next(u ? {} : e) } x.current.next({ isValidating: !1 }) }, []), ee = n.useCallback((e, r, t = {}, n, u) => { u && _e(e); const i = f(p.current, e, {})._f; if (i) { const u = E && je(i.ref) && c(r) ? "" : r; if (i.value = r, ie(i.ref) ? (i.refs || []).forEach(e => e.checked = e.value === u) : ce(i.ref) && !me(u) ? i.ref.files = u : ue(i.ref) ? [...i.ref.options].forEach(e => e.selected = u.includes(e.value)) : s(i.ref) && i.refs ? i.refs.length > 1 ? i.refs.forEach(e => e.checked = Array.isArray(u) ? !!u.find(r => r === e.value) : u === e.value) : i.refs[0].checked = !!u : i.ref.value = u, n) { const t = W(p); P(t, e, r), j.current.next({ values: Object.assign(Object.assign({}, $.current), t), name: e }) } t.shouldDirty && te(e, u), t.shouldValidate && fe(e) } }, []), re = n.useCallback((e, r) => { const t = W(p); return e && r && P(t, e, r), !z(t, $.current) }, []), te = n.useCallback((e, r, t = !0) => { if (Q.current.isDirty || Q.current.dirtyFields) { const n = !z(f($.current, e), r), s = f(X.current.dirtyFields, e), c = X.current.isDirty; n ? P(X.current.dirtyFields, e, !0) : ne(X.current.dirtyFields, e), X.current.isDirty = re(); const u = { isDirty: X.current.isDirty, dirtyFields: X.current.dirtyFields }, i = Q.current.isDirty && c !== u.isDirty || Q.current.dirtyFields && s !== f(X.current.dirtyFields, e); return i && t && x.current.next(u), i ? u : {} } return {} }, []), ae = n.useCallback(async (e, r) => { const t = (await xe(f(p.current, e), H))[e]; return Z(e, t, r), o(t) }, [H]), le = n.useCallback(async (e, r = []) => { const { errors: t } = await I.current(W(p, y ? {} : $.current), T.current, { criteriaMode: h, names: r, fields: se(A.current, p.current) }); for (const r of e) { const e = f(t, r); e ? P(X.current.errors, r, e) : ne(X.current.errors, r) } return t }, [h]), oe = async e => { for (const r in e) { const t = e[r]; if (t) { const e = t._f, r = F(t, "_f"); if (e) { const r = await xe(t, H); r[e.name] ? (P(X.current.errors, e.name, r[e.name]), ne(N.current, e.name)) : f(w.current, e.name) && (P(N.current, e.name, !0), ne(X.current.errors, e.name)) } r && await oe(r) } } }, fe = n.useCallback(async e => { const r = o(e) ? Object.keys(p.current) : Array.isArray(e) ? e : [e]; let t; x.current.next({ isValidating: !0 }), I.current ? t = C(await le(r, o(e) ? void 0 : r)) : o(e) ? await oe(p.current) : await Promise.all(r.map(async e => await ae(e, null))), x.current.next({ errors: X.current.errors, isValidating: !1, isValid: I.current ? t : Y() }) }, [le, ae]), de = n.useCallback((e, r, t) => Object.entries(r).forEach(([r, n]) => { const s = `${e}.${r}`, c = f(p.current, s); c && !c._f ? de(s, n, t) : ee(s, n, t, !0, !c) }), [fe]), he = e => M.current || R.current.has(e) || R.current.has((e.match(/\w+/) || [])[0]), ve = (e, r, t, n) => { const s = f(p.current, e), c = o(s._f.value) ? f($.current, e) : s._f.value; return s && !o(c) && (t && t.defaultChecked ? s._f.value = be(s) : ee(e, c)), (!o(c) || n) && ye(r) && !q.isOnSubmit && s && Q.current.isValid && xe(s, H).then(r => { C(r) ? P(N.current, e, !0) : ne(N.current, e), X.current.isValid !== Y() && K(Object.assign(Object.assign({}, X.current), { isValid: Y() })) }), c }, pe = n.useCallback(async ({ type: e, target: t, target: { value: n, type: c } }) => { let u, i, l = t.name; const b = f(p.current, l); if (b) { let g = c ? be(b) : void 0; g = o(g) ? n : g; const m = e === d, { isOnBlur: v, isOnChange: A } = Oe(r), j = !ye(b._f) && !I.current && !f(X.current.errors, l) || (({ isOnBlur: e, isOnChange: r, isOnTouch: t, isTouched: n, isReValidateOnBlur: s, isReValidateOnChange: c, isBlurEvent: u, isSubmitted: i, isOnAll: a }) => !a && (!i && t ? !(n || u) : (i ? s : e) ? !u : !(i ? c : r) || u))(Object.assign({ isBlurEvent: m, isTouched: !!f(X.current.touchedFields, l), isSubmitted: X.current.isSubmitted, isReValidateOnBlur: v, isReValidateOnChange: A }, q)), k = !m && he(l); o(g) || (b._f.value = g); const V = te(l, b._f.value, !1); m && !f(X.current.touchedFields, l) && (P(X.current.touchedFields, l, !0), Q.current.touchedFields && (V.touchedFields = X.current.touchedFields)); let R = !C(V) || k; if (j) return !m && O.current.next({ name: l, type: e, value: g }), R && x.current.next(k ? {} : V); if (x.current.next({ isValidating: !0 }), I.current) { const { errors: e } = await I.current(W(p, y ? {} : $.current), T.current, { criteriaMode: h, fields: se([l], p.current), names: [l] }), r = X.current.isValid; if (u = f(e, l), s(t) && !u) { const r = a(l), t = f(e, r, {}); t.type && t.message && (u = t), (t || f(X.current.errors, r)) && (l = r) } i = C(e), r !== i && (R = !0) } else u = (await xe(b, H))[l]; !m && O.current.next({ name: l, type: e, value: g }), Z(l, u, R, V, i, k) } }, []), Ae = e => { const r = S.current ? W(p, y ? {} : $.current) : $.current; return o(e) ? r : me(e) ? f(r, e) : e.map(e => f(r, e)) }, ke = n.useCallback(async (e = {}) => { const r = X.current.isValid; if (t) { const { errors: r } = await I.current(Object.assign(Object.assign({}, W(p, y ? {} : $.current)), e), T.current, { criteriaMode: h, fields: se(A.current, p.current) }); X.current.isValid = C(r) } else Y(); r !== X.current.isValid && x.current.next({ isValid: X.current.isValid }) }, [h]), Ve = n.useCallback((e, r, t) => { const n = Array.isArray(e), s = S.current ? Ae() : o(r) ? $.current : n ? r || {} : { [e]: r }; if (o(e)) return t && (M.current = !0), s; const c = []; for (const r of n ? e : [e]) t && R.current.add(r), c.push(f(s, r)); return n ? c : c[0] }, []), Se = (e, r = {}, t) => { for (const n of e ? Array.isArray(e) ? e : [e] : Object.keys(A.current)) A.current.delete(n), L.current.delete(n), f(p.current, n) && (r.keepIsValid || (ne(w.current, n), ne(N.current, n)), !r.keepError && ne(X.current.errors, n), !r.keepValue && ne(p.current, n), !r.keepDirty && ne(X.current.dirtyFields, n), !r.keepTouched && ne(X.current.touchedFields, n), (!y || t) && !r.keepDefaultValue && ne($.current, n), t && O.current.next({ name: n })); t && (x.current.next(Object.assign(Object.assign(Object.assign({}, X.current), r.keepDirty ? { isDirty: re() } : {}), I.current ? {} : { isValid: Y() })), !r.keepIsValid && ke()) }, we = (e, r, t) => { _e(e); let n = f(p.current, e); const c = (e => ie(e) || s(e))(r); if (r === n._f.ref || E && je(n._f.ref) && !je(r) || c && Array.isArray(n._f.refs) && l(n._f.refs).find(e => e === r)) return; n = { _f: c ? Object.assign(Object.assign({}, n._f), { refs: [...l(n._f.refs || []).filter(e => je(e) && document.contains(e)), r], ref: { type: r.type, name: e } }) : Object.assign(Object.assign({}, n._f), { ref: r }) }, P(p.current, e, n); const u = ve(e, t, r, !0); (c && Array.isArray(u) ? !z(f(p.current, e)._f.value, u) : o(f(p.current, e)._f.value)) && (f(p.current, e)._f.value = be(f(p.current, e))) }, _e = n.useCallback((e, r) => { const t = !f(p.current, e); return P(p.current, e, { _f: Object.assign(Object.assign(Object.assign({}, t ? { ref: { name: e } } : Object.assign({ ref: (f(p.current, e)._f || {}).ref }, f(p.current, e)._f)), { name: e }), r) }), ye(r) && P(w.current, e, !0), A.current.add(e), t && ve(e, r), Fe ? { name: e } : { name: e, onChange: pe, onBlur: pe, ref: t => t ? we(e, t, r) : (y || r && r.shouldUnregister) && Se(e) } }, [$.current]), Ce = n.useCallback((e, r) => async t => { t && (t.preventDefault && t.preventDefault(), t.persist && t.persist()); let n = Object.assign(Object.assign({}, y ? {} : $.current), W(p)); x.current.next({ isSubmitting: !0 }); try { if (I.current) { const { errors: e, values: r } = await I.current(n, T.current, { criteriaMode: h, fields: se(A.current, p.current) }); X.current.errors = e, n = r } else await oe(p.current); C(X.current.errors) && Object.keys(X.current.errors).every(e => f(n, e)) ? (x.current.next({ errors: {}, isSubmitting: !0 }), await e(n, t)) : (r && await r(X.current.errors, t), b && U(p.current, e => f(X.current.errors, e), A.current)) } finally { X.current.isSubmitted = !0, x.current.next({ isSubmitted: !0, isSubmitting: !1, isSubmitSuccessful: C(X.current.errors), submitCount: X.current.submitCount + 1, errors: X.current.errors }) } }, [b, H, h]), De = n.useCallback(({ keepErrors: e, keepDirty: r, keepIsSubmitted: t, keepTouched: n, keepDefaultValues: s, keepIsValid: c, keepSubmitCount: u }, i) => { c || (N.current = {}, w.current = {}), R.current = new Set, M.current = !1, x.current.next({ submitCount: u ? X.current.submitCount : 0, isDirty: r ? X.current.isDirty : !!s && z(i, $.current), isSubmitted: !!t && X.current.isSubmitted, isValid: c ? X.current.isValid : !!ke(i), dirtyFields: r ? X.current.dirtyFields : {}, touchedFields: n ? X.current.touchedFields : {}, errors: e ? X.current.errors : {}, isSubmitting: !1, isSubmitSuccessful: !1 }) }, []); return n.useEffect(() => { S.current = !0; const e = x.current.subscribe({ next(e = {}) { D(e, Q.current, !0) && (X.current = Object.assign(Object.assign({}, X.current), e), K(X.current)) } }), r = k.current.subscribe({ next(e) { if (e.fields && e.name && Q.current.isValid) { const r = W(p); P(r, e.name, e.fields), ke(r) } } }); return I.current && Q.current.isValid && ke(), () => { O.current.unsubscribe(), e.unsubscribe(), r.unsubscribe() } }, []), { control: n.useMemo(() => ({ register: _e, isWatchAllRef: M, watchFieldsRef: R, getIsDirty: re, formStateSubjectRef: x, fieldArraySubjectRef: k, controllerSubjectRef: j, watchSubjectRef: O, watchInternal: Ve, fieldsRef: p, validFieldsRef: N, fieldsWithValidationRef: w, fieldArrayNamesRef: L, readFormStateRef: Q, formStateRef: X, defaultValuesRef: $, fieldArrayDefaultValuesRef: V, unregister: Se, shouldUnmountUnregister: y }), []), formState: _(B, G, Q), trigger: fe, register: _e, handleSubmit: Ce, watch: n.useCallback((e, r) => ge(e) ? O.current.subscribe({ next: t => e(Ve(void 0, r), t) }) : Ve(e, r, !0), []), setValue: n.useCallback((e, r, t = {}) => { S.current = !0; const n = f(p.current, e), s = L.current.has(e); s && (k.current.next({ fields: r, name: e, isReset: !0 }), (Q.current.isDirty || Q.current.dirtyFields) && t.shouldDirty && (P(X.current.dirtyFields, e, J(r, f($.current, e, []), f(X.current.dirtyFields, e, []))), x.current.next({ dirtyFields: X.current.dirtyFields, isDirty: re(e, r) })), !r.length && P(p.current, e, []) && P(V.current, e, [])), n && !n._f || s ? de(e, r, s ? {} : t) : ee(e, r, t, !0, !n), he(e) && x.current.next({}), O.current.next({ name: e, value: r }) }, [de]), getValues: n.useCallback(Ae, []), reset: n.useCallback((e, r = {}) => { const t = e || $.current; if (E && !r.keepValues) for (const e of A.current) { const r = f(p.current, e); if (r && r._f) { const e = Array.isArray(r._f.refs) ? r._f.refs[0] : r._f.ref; if (je(e)) try { e.closest("form").reset(); break } catch (e) { } } } !r.keepDefaultValues && ($.current = Object.assign({}, t)), r.keepValues || (p.current = {}, j.current.next({ values: Object.assign({}, t) }), O.current.next({ value: Object.assign({}, t) }), k.current.next({ fields: Object.assign({}, t), isReset: !0 })), De(r, e) }, []), clearErrors: n.useCallback(e => { e && (Array.isArray(e) ? e : [e]).forEach(e => ne(X.current.errors, e)), x.current.next({ errors: e ? X.current.errors : {} }) }, []), unregister: n.useCallback((e, r = {}) => Se(e, r, !0), []), setError: n.useCallback((e, r, t) => { const n = ((f(p.current, e) || { _f: {} })._f || {}).ref; P(X.current.errors, e, Object.assign(Object.assign({}, r), { ref: n })), x.current.next({ errors: X.current.errors, isValid: !1 }), t && t.shouldFocus && n && n.focus && n.focus() }, []), setFocus: n.useCallback(e => f(p.current, e)._f.ref.focus(), []) } }, e.useFormContext = w, e.useFormState = N, e.useWatch = function (e) { const { control: r, name: t, defaultValue: s } = e || {}, c = w(), u = n.useRef(t); u.current = t; const { watchInternal: i, watchSubjectRef: a } = r || c.control, [l, f] = n.useState(o(s) ? i(t) : s); return n.useEffect(() => { i(t); const e = a.current.subscribe({ next: ({ name: e, value: r }) => (!u.current || !e || (Array.isArray(u.current) ? u.current : [u.current]).some(r => e && r && (r.startsWith(e) || e.startsWith(r)))) && f(me(e) && u.current === e && !o(r) ? r : i(u.current, s)) }); return () => e.unsubscribe() }, []), l }, Object.defineProperty(e, "__esModule", { value: !0 }) }));
//# sourceMappingURL=index.umd.js.map