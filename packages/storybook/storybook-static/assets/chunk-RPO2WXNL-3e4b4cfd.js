import{I as r}from"./chunk-2GBDXOMA-c3ee5274.js";import{c as d}from"./index-7abe7895.js";import{f as n,a as p,o as y,j as t,b as i}from"./chunk-ZJJGQIVY-3d316dd5.js";var[u,c]=d({name:"TagStylesContext",errorMessage:`useTagStyles returned is 'undefined'. Seems you forgot to wrap the components in "<Tag />" `}),T=n((e,a)=>{const s=p("Tag",e),l=y(e),o={display:"inline-flex",verticalAlign:"top",alignItems:"center",maxWidth:"100%",...s.container};return t.jsx(u,{value:s,children:t.jsx(i.span,{ref:a,...l,__css:o})})});T.displayName="Tag";var x=n((e,a)=>{const s=c();return t.jsx(i.span,{ref:a,noOfLines:1,...e,__css:s.label})});x.displayName="TagLabel";var f=n((e,a)=>t.jsx(r,{ref:a,verticalAlign:"top",marginEnd:"0.5rem",...e}));f.displayName="TagLeftIcon";var v=n((e,a)=>t.jsx(r,{ref:a,verticalAlign:"top",marginStart:"0.5rem",...e}));v.displayName="TagRightIcon";var g=e=>t.jsx(r,{verticalAlign:"inherit",viewBox:"0 0 512 512",...e,children:t.jsx("path",{fill:"currentColor",d:"M289.94 256l95-95A24 24 0 00351 127l-95 95-95-95a24 24 0 00-34 34l95 95-95 95a24 24 0 1034 34l95-95 95 95a24 24 0 0034-34z"})});g.displayName="TagCloseIcon";var h=n((e,a)=>{const{isDisabled:s,children:l,...o}=e,m={display:"flex",alignItems:"center",justifyContent:"center",outline:"0",...c().closeButton};return t.jsx(i.button,{ref:a,"aria-label":"close",...o,type:"button",disabled:s,__css:m,children:l||t.jsx(g,{})})});h.displayName="TagCloseButton";export{T};
