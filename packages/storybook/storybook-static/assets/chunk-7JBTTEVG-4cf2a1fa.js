import{u as k}from"./chunk-6B2YUEGK-427119e4.js";import{a as b}from"./chunk-7JSBRQFI-041d2b19.js";import{u as d}from"./chunk-KA2477BY-f6a12dd2.js";import{c as g}from"./chunk-ZJJGQIVY-3d316dd5.js";import{r as n}from"./index-76fb7be0.js";function S(i={}){const{onClose:f,onOpen:C,isOpen:O,id:m}=i,l=d(C),t=d(f),[P,c]=n.useState(i.defaultIsOpen||!1),[o,e]=b(O,P),p=k(m,"disclosure"),a=n.useCallback(()=>{o||c(!1),t==null||t()},[o,t]),r=n.useCallback(()=>{o||c(!0),l==null||l()},[o,l]),u=n.useCallback(()=>{(e?a:r)()},[e,r,a]);return{isOpen:!!e,onOpen:r,onClose:a,onToggle:u,isControlled:o,getButtonProps:(s={})=>({...s,"aria-expanded":e,"aria-controls":p,onClick:g(s.onClick,u)}),getDisclosureProps:(s={})=>({...s,hidden:!e,id:p})}}export{S as u};
