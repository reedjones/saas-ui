import{f as d,j as s,b as y,g as W,a as q,o as G,u as H,d as J}from"./chunk-ZJJGQIVY-3d316dd5.js";import{c as p}from"./chunk-O3SWHQEE-d6839529.js";import{c as K}from"./chunk-MFVQSVQB-c3da265d.js";import{u as Q,A as U}from"./chunk-V7PAE35Z-f8fb9da9.js";import{T as X}from"./chunk-TK6VMDNP-102da1be.js";var Y={"top-start":{top:"0",insetStart:"0",transform:"translate(-25%, -25%)"},"top-end":{top:"0",insetEnd:"0",transform:"translate(25%, -25%)"},"bottom-start":{bottom:"0",insetStart:"0",transform:"translate(-25%, 25%)"},"bottom-end":{bottom:"0",insetEnd:"0",transform:"translate(25%, 25%)"}},I=d(function(a,n){const{placement:t="bottom-end",className:r,...o}=a,c=Q(),b={position:"absolute",display:"flex",alignItems:"center",justifyContent:"center",...Y[t],...c.badge};return s.jsx(y.div,{ref:n,...o,className:W("chakra-avatar__badge",r),__css:b})});I.displayName="AvatarBadge";const[Z,S]=K("SuiPersona"),D={online:{label:"Online",color:"presence.online"},offline:{label:"Offline",color:"presence.offline"},busy:{label:"Busy",color:"presence.busy"},dnd:{label:"Do-not-disturb",color:"presence.dnd"},away:{label:"Away",color:"presence.away"}},ee={online:"green.500",offline:"gray.400",busy:"orange.500",dnd:"red.500",away:"gray.400"},se=e=>{const{name:a,presence:n,presenceIcon:t,isOutOfOffice:r,label:o,secondaryLabel:c,tertiaryLabel:l,size:b,hideDetails:h,children:f,getInitials:P,icon:u,iconLabel:_,ignoreFallback:j,loading:N,onError:v,src:x,srcSet:i,...m}=e,g=!!(a||o||x||u);return s.jsx(z,{size:b,...m,children:g?s.jsxs(s.Fragment,{children:[s.jsx(E,{name:a,presence:n,presenceIcon:t,isOutOfOffice:r,size:b,getInitials:P,icon:u,iconLabel:_,ignoreFallback:j,loading:N,onError:v,src:x,srcSet:i}),!h&&s.jsxs(B,{children:[s.jsx(F,{children:o||a}),c&&s.jsx(M,{children:c}),l&&s.jsx(R,{children:l}),f]})]}):f})};se.displayName="Persona";const z=d((e,a)=>{const{children:n,...t}=e,r=q("SuiPersona",e),o=G(t),l={...{display:"flex",flexDirection:"row",alignItems:"center"},...r.container};return s.jsx(Z,{value:r,children:s.jsx(y.div,{ref:a,__css:l,...o,className:p("sui-persona",e.className),children:n})})});z.displayName="PersonaContainer";const E=d((e,a)=>{var L,A,w,C,O;const{name:n,presence:t,presenceLabel:r,presenceIcon:o,isOutOfOffice:c,badgeSize:l="1em",size:b,getInitials:h,icon:f,iconLabel:P,ignoreFallback:u,loading:_,onError:j,src:N,srcSet:v,...x}=e,i={};let m;const g=H(),$=((L=g.colors)==null?void 0:L.presence)||ee,V=!!((w=(A=g.semanticTokens)==null?void 0:A.colors)!=null&&w["presence.online"]);if(t){const T=r||((C=D[t])==null?void 0:C.label),k=V?((O=D[t])==null?void 0:O.color)||`presence.${t}`:$[t];c?(i.sx={_before:{content:'""',width:"100%",height:"100%",position:"absolute",top:0,left:0,border:"0.2em solid",borderColor:k,borderRadius:"50%",boxSizing:"border-box"}},i.borderWidth="0.15em",i.bg=J("white","gray.800")):i.bg=k,m=s.jsx(I,{boxSize:l,...i,children:o}),T&&(m=s.jsx(X,{label:T,children:m}))}return s.jsx(U,{ref:a,name:n,size:b,getInitials:h,icon:f,iconLabel:P,ignoreFallback:u,loading:_,onError:j,src:N,srcSet:v,...x,children:m})});E.displayName="PersonaAvatar";const B=d((e,a)=>{const{children:n,className:t,...r}=e,o=S(),l={...{display:"flex",flexDirection:"column"},...o.details};return s.jsx(y.div,{ref:a,...r,__css:l,className:p("sui-persona__details",t),children:n})});B.displayName="PersonaDetails";const F=d((e,a)=>{const n=S();return s.jsx(y.span,{ref:a,...e,__css:n.label,className:p("sui-persona__label",e.className)})});F.displayName="PersonaLabel";const M=d((e,a)=>{const n=S();return s.jsx(y.span,{ref:a,...e,__css:n.secondaryLabel,className:p("sui-persona__secondary-label",e.className)})});M.displayName="PersonaSecondaryLabel";const R=d((e,a)=>{const n=S();return s.jsx(y.span,{ref:a,...e,__css:n.tertiaryLabel,className:p("sui-persona__tertiary-label",e.className)})});R.displayName="PersonaTertiaryLabel";export{I as A,se as P,E as a,z as b,B as c,F as d,M as e,R as f,D as g};
