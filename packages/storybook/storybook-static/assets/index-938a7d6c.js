import{r as f}from"./index-76fb7be0.js";import{u as r}from"./index-30c8b35e.js";function l(n,u,c,o){const s=r(c);return f.useEffect(()=>{const e=typeof n=="function"?n():n??document;if(!(!c||!e))return e.addEventListener(u,s,o),()=>{e.removeEventListener(u,s,o)}},[u,n,o,s,c]),()=>{const e=typeof n=="function"?n():n??document;e==null||e.removeEventListener(u,s,o)}}export{l as u};
