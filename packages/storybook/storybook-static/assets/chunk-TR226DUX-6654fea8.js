import{w as o,a as s}from"./chunk-6NHXDBFO-987cde81.js";import{j as m,g as v}from"./chunk-ZJJGQIVY-3d316dd5.js";import{r as y}from"./index-76fb7be0.js";import{A as E}from"./index-c6b2a32b.js";import{m as N}from"./motion-56319619.js";var h={enter:({transition:a,transitionEnd:e,delay:r}={})=>{var t;return{opacity:1,transition:(t=a==null?void 0:a.enter)!=null?t:o.enter(s.enter,r),transitionEnd:e==null?void 0:e.enter}},exit:({transition:a,transitionEnd:e,delay:r}={})=>{var t;return{opacity:0,transition:(t=a==null?void 0:a.exit)!=null?t:o.exit(s.exit,r),transitionEnd:e==null?void 0:e.exit}}},j={initial:"exit",animate:"enter",exit:"exit",variants:h},w=y.forwardRef(function(e,r){const{unmountOnExit:t,in:i,className:l,transition:x,transitionEnd:c,delay:d,...u}=e,f=i||t?"enter":"exit",p=t?i&&t:!0,n={transition:x,transitionEnd:c,delay:d};return m.jsx(E,{custom:n,children:p&&m.jsx(N.div,{ref:r,className:v("chakra-fade",l),custom:n,...j,animate:f,...u})})});w.displayName="Fade";export{j as f};
