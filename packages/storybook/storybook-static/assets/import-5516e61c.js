import{R as d,r as i}from"./index-76fb7be0.js";import{c as H}from"./clsx-0839fdbe.js";const v={prefix:String(Math.round(Math.random()*1e10)),current:0},A=d.createContext(v),R=d.createContext(!1);let G=!!(typeof window<"u"&&window.document&&window.document.createElement),h=new WeakMap;function D(e=!1){let t=i.useContext(A),n=i.useRef(null);if(n.current===null&&!e){var r,o;let l=(o=d.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED)===null||o===void 0||(r=o.ReactCurrentOwner)===null||r===void 0?void 0:r.current;if(l){let a=h.get(l);a==null?h.set(l,{id:t.current,state:l.memoizedState}):l.memoizedState!==a.state&&(t.current=a.id,h.delete(l))}n.current=++t.current}return n.current}function N(e){let t=i.useContext(A);t===v&&!G&&console.warn("When server rendering, you must wrap your application in an <SSRProvider> to ensure consistent ids are generated between the client and server.");let n=D(!!e),r=`react-aria${t.prefix}`;return e||`${r}-${n}`}function X(e){let t=d.useId(),[n]=i.useState(J()),r=n?"react-aria":`react-aria${v.prefix}`;return e||`${r}-${t}`}const q=typeof d.useId=="function"?X:N;function B(){return!1}function O(){return!0}function Y(e){return()=>{}}function J(){return typeof d.useSyncExternalStore=="function"?d.useSyncExternalStore(Y,B,O):i.useContext(R)}const $=typeof document<"u"?d.useLayoutEffect:()=>{};function m(e){const t=i.useRef(null);return $(()=>{t.current=e},[e]),i.useCallback((...n)=>{const r=t.current;return r==null?void 0:r(...n)},[])}function Q(e){let[t,n]=i.useState(e),r=i.useRef(null),o=m(()=>{if(!r.current)return;let a=r.current.next();if(a.done){r.current=null;return}t===a.value?o():n(a.value)});$(()=>{r.current&&o()});let l=m(a=>{r.current=a(t),o()});return[t,l]}let Z=!!(typeof window<"u"&&window.document&&window.document.createElement),w=new Map;function I(e){let[t,n]=i.useState(e),r=i.useRef(null),o=q(t),l=i.useCallback(a=>{r.current=a},[]);return Z&&w.set(o,l),$(()=>{let a=o;return()=>{w.delete(a)}},[o]),i.useEffect(()=>{let a=r.current;a&&(r.current=null,n(a))}),o}function F(e,t){if(e===t)return e;let n=w.get(e);if(n)return n(t),t;let r=w.get(t);return r?(r(e),e):t}function ve(e=[]){let t=I(),[n,r]=Q(t),o=i.useCallback(()=>{r(function*(){yield t,yield document.getElementById(t)?t:void 0})},[t,r]);return $(o,[t,o,...e]),n}function U(...e){return(...t)=>{for(let n of e)typeof n=="function"&&n(...t)}}const V=e=>{var t;return(t=e==null?void 0:e.ownerDocument)!==null&&t!==void 0?t:document},me=e=>e&&"window"in e&&e.window===e?e:V(e).defaultView||window;function we(...e){let t={...e[0]};for(let n=1;n<e.length;n++){let r=e[n];for(let o in r){let l=t[o],a=r[o];typeof l=="function"&&typeof a=="function"&&o[0]==="o"&&o[1]==="n"&&o.charCodeAt(2)>=65&&o.charCodeAt(2)<=90?t[o]=U(l,a):(o==="className"||o==="UNSAFE_className")&&typeof l=="string"&&typeof a=="string"?t[o]=H(l,a):o==="id"&&l&&a?t.id=F(l,a):t[o]=a!==void 0?a:l}}return t}const _=new Set(["id"]),ee=new Set(["aria-label","aria-labelledby","aria-describedby","aria-details"]),te=new Set(["href","target","rel","download","ping","referrerPolicy"]),re=/^(data-.*)$/;function ye(e,t={}){let{labelable:n,isLink:r,propNames:o}=t,l={};for(const a in e)Object.prototype.hasOwnProperty.call(e,a)&&(_.has(a)||n&&ee.has(a)||r&&te.has(a)||o!=null&&o.has(a)||re.test(a))&&(l[a]=e[a]);return l}function ne(e){if(oe())e.focus({preventScroll:!0});else{let t=ae(e);e.focus(),le(t)}}let p=null;function oe(){if(p==null){p=!1;try{document.createElement("div").focus({get preventScroll(){return p=!0,!0}})}catch{}}return p}function ae(e){let t=e.parentNode,n=[],r=document.scrollingElement||document.documentElement;for(;t instanceof HTMLElement&&t!==r;)(t.offsetHeight<t.scrollHeight||t.offsetWidth<t.scrollWidth)&&n.push({element:t,scrollTop:t.scrollTop,scrollLeft:t.scrollLeft}),t=t.parentNode;return r instanceof HTMLElement&&n.push({element:r,scrollTop:r.scrollTop,scrollLeft:r.scrollLeft}),n}function le(e){for(let{element:t,scrollTop:n,scrollLeft:r}of e)t.scrollTop=n,t.scrollLeft=r}function y(e){var t;return typeof window>"u"||window.navigator==null?!1:((t=window.navigator.userAgentData)===null||t===void 0?void 0:t.brands.some(n=>e.test(n.brand)))||e.test(window.navigator.userAgent)}function k(e){var t;return typeof window<"u"&&window.navigator!=null?e.test(((t=window.navigator.userAgentData)===null||t===void 0?void 0:t.platform)||window.navigator.platform):!1}function S(){return k(/^Mac/i)}function ie(){return k(/^iPhone/i)}function W(){return k(/^iPad/i)||S()&&navigator.maxTouchPoints>1}function xe(){return ie()||W()}function ce(){return y(/AppleWebKit/i)&&!fe()}function fe(){return y(/Chrome/i)}function j(){return y(/Android/i)}function ue(){return y(/Firefox/i)}function L(e,t,n=!0){var r,o;let{metaKey:l,ctrlKey:a,altKey:f,shiftKey:c}=t;ue()&&(!((o=window.event)===null||o===void 0||(r=o.type)===null||r===void 0)&&r.startsWith("key"))&&e.target==="_blank"&&(S()?l=!0:a=!0);let u=ce()&&S()&&!W()?new KeyboardEvent("keydown",{keyIdentifier:"Enter",metaKey:l,ctrlKey:a,altKey:f,shiftKey:c}):new MouseEvent("click",{metaKey:l,ctrlKey:a,altKey:f,shiftKey:c,bubbles:!0,cancelable:!0});L.isOpening=n,ne(e),e.dispatchEvent(u),L.isOpening=!1}L.isOpening=!1;let s=new Map,C=new Set;function K(){if(typeof window>"u")return;function e(r){return"propertyName"in r}let t=r=>{if(!e(r)||!r.target)return;let o=s.get(r.target);o||(o=new Set,s.set(r.target,o),r.target.addEventListener("transitioncancel",n,{once:!0})),o.add(r.propertyName)},n=r=>{if(!e(r)||!r.target)return;let o=s.get(r.target);if(o&&(o.delete(r.propertyName),o.size===0&&(r.target.removeEventListener("transitioncancel",n),s.delete(r.target)),s.size===0)){for(let l of C)l();C.clear()}};document.body.addEventListener("transitionrun",t),document.body.addEventListener("transitionend",n)}typeof document<"u"&&(document.readyState!=="loading"?K():document.addEventListener("DOMContentLoaded",K));function he(e){requestAnimationFrame(()=>{s.size===0?e():C.add(e)})}function ge(){let e=i.useRef(new Map),t=i.useCallback((o,l,a,f)=>{let c=f!=null&&f.once?(...u)=>{e.current.delete(a),a(...u)}:a;e.current.set(a,{type:l,eventTarget:o,fn:c,options:f}),o.addEventListener(l,a,f)},[]),n=i.useCallback((o,l,a,f)=>{var c;let u=((c=e.current.get(a))===null||c===void 0?void 0:c.fn)||a;o.removeEventListener(l,u,f),e.current.delete(a)},[]),r=i.useCallback(()=>{e.current.forEach((o,l)=>{n(o.eventTarget,o.type,l,o.options)})},[n]);return i.useEffect(()=>r,[r]),{addGlobalListener:t,removeGlobalListener:n,removeAllGlobalListeners:r}}function Se(e,t){let{id:n,"aria-label":r,"aria-labelledby":o}=e;return n=I(n),o&&r?o=[...new Set([n,...o.trim().split(/\s+/)])].join(" "):o&&(o=o.trim().split(/\s+/).join(" ")),!r&&!o&&t&&(r=t),{id:n,"aria-label":r,"aria-labelledby":o}}function Le(e){const t=i.useRef(null);return i.useMemo(()=>({get current(){return t.current},set current(n){t.current=n,typeof e=="function"?e(n):e&&(e.current=n)}}),[e])}function Ce(e,t){const n=i.useRef(!0),r=i.useRef(null);i.useEffect(()=>(n.current=!0,()=>{n.current=!1}),[]),i.useEffect(()=>{n.current?n.current=!1:(!r.current||t.some((o,l)=>!Object.is(o,r[l])))&&e(),r.current=t},t)}function de(){return typeof window.ResizeObserver<"u"}function ke(e){const{ref:t,onResize:n}=e;i.useEffect(()=>{let r=t==null?void 0:t.current;if(r)if(de()){const o=new window.ResizeObserver(l=>{l.length&&n()});return o.observe(r),()=>{r&&o.unobserve(r)}}else return window.addEventListener("resize",n,!1),()=>{window.removeEventListener("resize",n,!1)}},[n,t])}function Me(e,t){$(()=>{if(e&&e.ref&&t)return e.ref.current=t.current,()=>{e.ref&&(e.ref.current=null)}})}function T(e,t){let n=e;for(E(n,t)&&(n=n.parentElement);n&&!E(n,t);)n=n.parentElement;return n||document.scrollingElement||document.documentElement}function E(e,t){let n=window.getComputedStyle(e),r=/(auto|scroll)/.test(n.overflow+n.overflowX+n.overflowY);return r&&t&&(r=e.scrollHeight!==e.clientHeight||e.scrollWidth!==e.clientWidth),r}let se=0;const g=new Map;function Pe(e){let[t,n]=i.useState();return $(()=>{if(!e)return;let r=g.get(e);if(r)n(r.element.id);else{let o=`react-aria-description-${se++}`;n(o);let l=document.createElement("div");l.id=o,l.style.display="none",l.textContent=e,document.body.appendChild(l),r={refCount:0,element:l},g.set(e,r)}return r.refCount++,()=>{r&&--r.refCount===0&&(r.element.remove(),g.delete(e))}},[e]),{"aria-describedby":e?t:void 0}}function Ke(e,t,n,r){let o=m(n),l=n==null;i.useEffect(()=>{if(l||!e.current)return;let a=e.current;return a.addEventListener(t,o,r),()=>{a.removeEventListener(t,o,r)}},[e,t,r,l,o])}function $e(e,t){let n=z(e,t,"left"),r=z(e,t,"top"),o=t.offsetWidth,l=t.offsetHeight,a=e.scrollLeft,f=e.scrollTop,{borderTopWidth:c,borderLeftWidth:u}=getComputedStyle(e),x=e.scrollLeft+parseInt(u,10),b=e.scrollTop+parseInt(c,10),M=x+e.clientWidth,P=b+e.clientHeight;n<=a?a=n-parseInt(u,10):n+o>M&&(a+=n+o-M),r<=b?f=r-parseInt(c,10):r+l>P&&(f+=r+l-P),e.scrollLeft=a,e.scrollTop=f}function z(e,t,n){const r=n==="left"?"offsetLeft":"offsetTop";let o=0;for(;t.offsetParent&&(o+=t[r],t.offsetParent!==e);){if(t.offsetParent.contains(e)){o-=e[r];break}t=t.offsetParent}return o}function Te(e,t){if(document.contains(e)){let a=document.scrollingElement||document.documentElement;if(window.getComputedStyle(a).overflow==="hidden"){let c=T(e);for(;e&&c&&e!==a&&c!==a;)$e(c,e),e=c,c=T(e)}else{var n;let{left:c,top:u}=e.getBoundingClientRect();e==null||(n=e.scrollIntoView)===null||n===void 0||n.call(e,{block:"nearest"});let{left:x,top:b}=e.getBoundingClientRect();if(Math.abs(c-x)>1||Math.abs(u-b)>1){var r,o,l;t==null||(o=t.containingElement)===null||o===void 0||(r=o.scrollIntoView)===null||r===void 0||r.call(o,{block:"center",inline:"center"}),(l=e.scrollIntoView)===null||l===void 0||l.call(e,{block:"nearest"})}}}}function Ee(e){return e.mozInputSource===0&&e.isTrusted?!0:j()&&e.pointerType?e.type==="click"&&e.buttons===1:e.detail===0&&!e.pointerType}function ze(e){return!j()&&e.width===0&&e.height===0||e.width===1&&e.height===1&&e.pressure===0&&e.detail===0&&e.pointerType==="mouse"}function Ae(e,t){let n=i.useRef(null);return e&&n.current&&t(e,n.current)&&(e=n.current),n.current=e,e}function Ie(e,t,n){let r=i.useRef(t),o=m(()=>{n&&n(r.current)});i.useEffect(()=>{var l;let a=e==null||(l=e.current)===null||l===void 0?void 0:l.form;return a==null||a.addEventListener("reset",o),()=>{a==null||a.removeEventListener("reset",o)}},[e,o])}export{ke as $,T as A,Ce as B,Le as a,we as b,ge as c,Pe as d,m as e,ze as f,ne as g,V as h,Ee as i,me as j,$ as k,xe as l,he as m,Me as n,U as o,S as p,L as q,ve as r,I as s,Se as t,J as u,Ae as v,Ie as w,ye as x,Ke as y,Te as z};
