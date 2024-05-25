import{j as a,K as S}from"./chunk-ZJJGQIVY-3d316dd5.js";import{r as l}from"./index-76fb7be0.js";import{G as z}from"./emotion-react.browser.esm-b737cf90.js";import{a as q}from"./chunk-34PD6CUK-c14fe2a1.js";import{T as G,G as N}from"./chunk-MFVQSVQB-c3da265d.js";import{u as R}from"./index-3e7aa64e.js";import{E as D}from"./chunk-VMD3UMGK-2a4001d6.js";import{t as I}from"./chunk-LIR5QAZY-d65d2f5f.js";import{T as A,a as F}from"./chunk-3Y4YXCR2-d2baf078.js";import{t as V}from"./theme-9c85ba1b.js";var j=String.raw,P=j`
  :root,
  :host {
    --chakra-vh: 100vh;
  }

  @supports (height: -webkit-fill-available) {
    :root,
    :host {
      --chakra-vh: -webkit-fill-available;
    }
  }

  @supports (height: -moz-fill-available) {
    :root,
    :host {
      --chakra-vh: -moz-fill-available;
    }
  }

  @supports (height: 100dvh) {
    :root,
    :host {
      --chakra-vh: 100dvh;
    }
  }
`,_=()=>a.jsx(z,{styles:P}),K=({scope:e=""})=>a.jsx(z,{styles:j`
      html {
        line-height: 1.5;
        -webkit-text-size-adjust: 100%;
        font-family: system-ui, sans-serif;
        -webkit-font-smoothing: antialiased;
        text-rendering: optimizeLegibility;
        -moz-osx-font-smoothing: grayscale;
        touch-action: manipulation;
      }

      body {
        position: relative;
        min-height: 100%;
        margin: 0;
        font-feature-settings: "kern";
      }

      ${e} :where(*, *::before, *::after) {
        border-width: 0;
        border-style: solid;
        box-sizing: border-box;
        word-wrap: break-word;
      }

      main {
        display: block;
      }

      ${e} hr {
        border-top-width: 1px;
        box-sizing: content-box;
        height: 0;
        overflow: visible;
      }

      ${e} :where(pre, code, kbd,samp) {
        font-family: SFMono-Regular, Menlo, Monaco, Consolas, monospace;
        font-size: 1em;
      }

      ${e} a {
        background-color: transparent;
        color: inherit;
        text-decoration: inherit;
      }

      ${e} abbr[title] {
        border-bottom: none;
        text-decoration: underline;
        -webkit-text-decoration: underline dotted;
        text-decoration: underline dotted;
      }

      ${e} :where(b, strong) {
        font-weight: bold;
      }

      ${e} small {
        font-size: 80%;
      }

      ${e} :where(sub,sup) {
        font-size: 75%;
        line-height: 0;
        position: relative;
        vertical-align: baseline;
      }

      ${e} sub {
        bottom: -0.25em;
      }

      ${e} sup {
        top: -0.5em;
      }

      ${e} img {
        border-style: none;
      }

      ${e} :where(button, input, optgroup, select, textarea) {
        font-family: inherit;
        font-size: 100%;
        line-height: 1.15;
        margin: 0;
      }

      ${e} :where(button, input) {
        overflow: visible;
      }

      ${e} :where(button, select) {
        text-transform: none;
      }

      ${e} :where(
          button::-moz-focus-inner,
          [type="button"]::-moz-focus-inner,
          [type="reset"]::-moz-focus-inner,
          [type="submit"]::-moz-focus-inner
        ) {
        border-style: none;
        padding: 0;
      }

      ${e} fieldset {
        padding: 0.35em 0.75em 0.625em;
      }

      ${e} legend {
        box-sizing: border-box;
        color: inherit;
        display: table;
        max-width: 100%;
        padding: 0;
        white-space: normal;
      }

      ${e} progress {
        vertical-align: baseline;
      }

      ${e} textarea {
        overflow: auto;
      }

      ${e} :where([type="checkbox"], [type="radio"]) {
        box-sizing: border-box;
        padding: 0;
      }

      ${e} input[type="number"]::-webkit-inner-spin-button,
      ${e} input[type="number"]::-webkit-outer-spin-button {
        -webkit-appearance: none !important;
      }

      ${e} input[type="number"] {
        -moz-appearance: textfield;
      }

      ${e} input[type="search"] {
        -webkit-appearance: textfield;
        outline-offset: -2px;
      }

      ${e} input[type="search"]::-webkit-search-decoration {
        -webkit-appearance: none !important;
      }

      ${e} ::-webkit-file-upload-button {
        -webkit-appearance: button;
        font: inherit;
      }

      ${e} details {
        display: block;
      }

      ${e} summary {
        display: list-item;
      }

      template {
        display: none;
      }

      [hidden] {
        display: none !important;
      }

      ${e} :where(
          blockquote,
          dl,
          dd,
          h1,
          h2,
          h3,
          h4,
          h5,
          h6,
          hr,
          figure,
          p,
          pre
        ) {
        margin: 0;
      }

      ${e} button {
        background: transparent;
        padding: 0;
      }

      ${e} fieldset {
        margin: 0;
        padding: 0;
      }

      ${e} :where(ol, ul) {
        margin: 0;
        padding: 0;
      }

      ${e} textarea {
        resize: vertical;
      }

      ${e} :where(button, [role="button"]) {
        cursor: pointer;
      }

      ${e} button::-moz-focus-inner {
        border: 0 !important;
      }

      ${e} table {
        border-collapse: collapse;
      }

      ${e} :where(h1, h2, h3, h4, h5, h6) {
        font-size: inherit;
        font-weight: inherit;
      }

      ${e} :where(button, input, optgroup, select, textarea) {
        padding: 0;
        line-height: inherit;
        color: inherit;
      }

      ${e} :where(img, svg, video, canvas, audio, iframe, embed, object) {
        display: block;
      }

      ${e} :where(img, video) {
        max-width: 100%;
        height: auto;
      }

      [data-js-focus-visible]
        :focus:not([data-focus-visible-added]):not(
          [data-focus-visible-disabled]
        ) {
        outline: none;
        box-shadow: none;
      }

      ${e} select::-ms-expand {
        display: none;
      }

      ${P}
    `}),g={light:"chakra-ui-light",dark:"chakra-ui-dark"};function O(e={}){const{preventTransition:o=!0}=e,n={setDataset:r=>{const t=o?n.preventTransition():void 0;document.documentElement.dataset.theme=r,document.documentElement.style.colorScheme=r,t==null||t()},setClassName(r){document.body.classList.add(r?g.dark:g.light),document.body.classList.remove(r?g.light:g.dark)},query(){return window.matchMedia("(prefers-color-scheme: dark)")},getSystemTheme(r){var t;return((t=n.query().matches)!=null?t:r==="dark")?"dark":"light"},addListener(r){const t=n.query(),i=s=>{r(s.matches?"dark":"light")};return typeof t.addListener=="function"?t.addListener(i):t.addEventListener("change",i),()=>{typeof t.removeListener=="function"?t.removeListener(i):t.removeEventListener("change",i)}},preventTransition(){const r=document.createElement("style");return r.appendChild(document.createTextNode("*{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}")),document.head.appendChild(r),()=>{window.getComputedStyle(document.body),requestAnimationFrame(()=>{requestAnimationFrame(()=>{document.head.removeChild(r)})})}}};return n}var U="chakra-ui-color-mode";function Y(e){return{ssr:!1,type:"localStorage",get(o){if(!(globalThis!=null&&globalThis.document))return o;let n;try{n=localStorage.getItem(e)||o}catch{}return n||o},set(o){try{localStorage.setItem(e,o)}catch{}}}}var Z=Y(U),p=()=>{};function M(e,o){return e.type==="cookie"&&e.ssr?e.get(o):o}function T(e){const{value:o,children:n,options:{useSystemColorMode:r,initialColorMode:t,disableTransitionOnChange:i}={},colorModeManager:s=Z}=e,u=t==="dark"?"dark":"light",[h,v]=l.useState(()=>M(s,u)),[y,c]=l.useState(()=>M(s)),{getSystemTheme:x,setClassName:k,setDataset:w,addListener:$}=l.useMemo(()=>O({preventTransition:i}),[i]),b=t==="system"&&!h?y:h,d=l.useCallback(m=>{const f=m==="system"?x():m;v(f),k(f==="dark"),w(f),s.set(f)},[s,x,k,w]);R(()=>{t==="system"&&c(x())},[]),l.useEffect(()=>{const m=s.get();if(m){d(m);return}if(t==="system"){d("system");return}d(u)},[s,u,t,d]);const C=l.useCallback(()=>{d(b==="dark"?"light":"dark")},[b,d]);l.useEffect(()=>{if(r)return $(d)},[r,$,d]);const L=l.useMemo(()=>({colorMode:o??b,toggleColorMode:o?p:C,setColorMode:o?p:d,forced:o!==void 0}),[b,C,d,o]);return a.jsx(S.Provider,{value:L,children:n})}T.displayName="ColorModeProvider";function B(e){const o=l.useMemo(()=>({colorMode:"dark",toggleColorMode:p,setColorMode:p,forced:!0}),[]);return a.jsx(S.Provider,{value:o,...e})}B.displayName="DarkMode";var H=e=>{const{children:o,colorModeManager:n,portalZIndex:r,resetScope:t,resetCSS:i=!0,theme:s={},environment:u,cssVarsRoot:h,disableEnvironment:v,disableGlobalStyle:y}=e,c=a.jsx(D,{environment:u,disabled:v,children:o});return a.jsx(G,{theme:s,cssVarsRoot:h,children:a.jsxs(T,{colorModeManager:n,options:s.config,children:[i?a.jsx(K,{scope:t}):a.jsx(_,{}),!y&&a.jsx(N,{}),r?a.jsx(q,{zIndex:r,children:c}):c]})})},J=e=>function({children:n,theme:r=e,toastOptions:t,...i}){return a.jsxs(H,{theme:r,...i,children:[a.jsx(A,{value:t==null?void 0:t.defaultOptions,children:n}),a.jsx(F,{...t})]})},Q=J(I);const E=l.createContext({});function le(e){const{theme:o,linkComponent:n,onError:r,children:t,...i}=e,s={linkComponent:n,onError:r};return a.jsx(E.Provider,{value:s,children:a.jsx(Q,{...i,theme:o||V,children:t})})}const de=()=>l.useContext(E);export{B as D,E as S,le as a,de as u};
