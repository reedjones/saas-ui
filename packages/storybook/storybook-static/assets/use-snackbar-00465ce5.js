import{q as v,j as a,r as b,a as y,b as A,u as C}from"./chunk-ZJJGQIVY-3d316dd5.js";import{r as m}from"./index-76fb7be0.js";import{u as S,c as g}from"./chunk-3Y4YXCR2-d2baf078.js";import{A as I,a as T,b as w,c as z}from"./chunk-3KCBMPN5-38b7cfb7.js";import{S as B}from"./chunk-5PH6ULNP-89f88b5a.js";import{B as M}from"./chunk-DA7QIPTJ-83b15474.js";import{C as E}from"./chunk-37N6GCLA-d6b68ca5.js";function F(r){const{theme:e}=v(),n=S();return m.useMemo(()=>g(e.direction,{...n,...r}),[r,e.direction,n])}const R=r=>{const e=y("Alert",r);return a.jsx(A.span,{display:"inherit",alignItems:"center",...r,__css:e.icon,children:a.jsx(B,{size:"sm"})})},j=r=>{var f,x,h;const{status:e,variant:n,id:t,title:s,icon:o,isClosable:c,onClose:d,description:l,action:i}=r,k=(h=(x=(f=C().components)==null?void 0:f.Alert)==null?void 0:x.variants)!=null&&h.snackbar?"snackbar":"solid",p=typeof t<"u"?`toast-${t}-title`:void 0;return a.jsxs(I,{status:e,variant:n||k,id:t!=="undefined"?`toast-${t}`:void 0,alignItems:"start",borderRadius:"md",boxShadow:"lg",textAlign:"start",width:"auto","aria-labelledby":p,children:[o===null?null:o||a.jsx(T,{}),a.jsxs(A.div,{flex:"1",maxWidth:"100%",children:[s&&a.jsx(w,{id:p,children:s}),l&&a.jsx(z,{display:"block",children:l})]}),(i||c)&&a.jsxs(M,{size:"xs",variant:"ghost",ms:"2",children:[i,c&&a.jsx(E,{size:"sm",onClick:d})]})]})};function H(r){const e=F(r),n=m.useCallback(t=>typeof t=="string"?{title:t}:t,[]);return m.useMemo(()=>{const t=s=>{const o=n(s);return e({render:c=>a.jsx(j,{...r,...o,...c}),...o})};return t.info=s=>t({status:"info",...n(s)}),t.success=s=>t({status:"success",...n(s)}),t.error=s=>t({status:"error",...n(s)}),t.promise=async(s,{loading:o,success:c,error:d})=>{let l;if(o){const i=n(o);l=t({status:"info",duration:null,icon:a.jsx(R,{}),...i})}return s.then(i=>{const u={status:"success",duration:5e3,...n(b(c,i))};return l?t.update(l,u):t(u),i}).catch(i=>{const u={title:i.name,description:i.description,status:"error",duration:5e3,...n(b(d,i))};if(l?t.update(l,u):t(u),typeof d!="function")throw i})},t.update=(s,o)=>e.update(s,{render:c=>a.jsx(j,{...r,...o,...c}),...o}),t.isActive=e.isActive,t.close=e.close,t.closeAll=e.closeAll,t},[e,r])}export{H as u};
