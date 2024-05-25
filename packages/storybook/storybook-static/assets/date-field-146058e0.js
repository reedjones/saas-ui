import{P as K,Q as M,R as O,j as r,b as m,g as j,f as h,t as z,a as Q,o as U,u as q,e as G}from"./chunk-ZJJGQIVY-3d316dd5.js";import{c as H,d as b}from"./chunk-O3SWHQEE-d6839529.js";import{c as g,d as C,e as J,f as w,g as X,h as Y,i as Z,j as ee,k as te,l as oe,m as se,n as N}from"./calendar-8f9c4961.js";import{r as f}from"./index-76fb7be0.js";import{m as ne}from"./motion-56319619.js";import{c as re}from"./chunk-ITIKTQWJ-0c049f00.js";import{u as ae}from"./chunk-56K2BSAJ-a2503b05.js";import{u as ie}from"./chunk-AZVKQZKI-601f6f7e.js";import{F as le}from"./chunk-H46NUPBZ-200868d1.js";function ce(e,t){return K(e)?e.map(o=>o===null?null:t(o)):M(e)?O(e).reduce((o,s)=>(o[s]=t(e[s]),o),{}):e!=null?t(e):null}function k(e){const t=f.Children.only(e.children),{getTriggerProps:o}=g();return f.cloneElement(t,o(t.props,t.ref))}k.displayName="PopoverTrigger";function T(e){const t=f.Children.only(e.children),{getAnchorProps:o}=g();return f.cloneElement(t,o(t.props,t.ref))}T.displayName="PopoverAnchor";var S=(e,t)=>t?`${e}.${t}, ${t}`:void 0;function $(e){var t;const{bg:o,bgColor:s,backgroundColor:n,shadow:a,boxShadow:l,shadowColor:d}=e,{getArrowProps:i,getArrowInnerProps:c}=g(),u=C(),p=(t=o??s)!=null?t:n,y=a??l;return r.jsx(m.div,{...i(),className:"chakra-popover__arrow-positioner",children:r.jsx(m.div,{className:j("chakra-popover__arrow",e.className),...c(e),__css:{"--popper-arrow-shadow-color":S("colors",d),"--popper-arrow-bg":S("colors",p),"--popper-arrow-shadow":S("shadows",y),...u.arrow}})})}$.displayName="PopoverArrow";var D=h(function(t,o){const{getBodyProps:s}=g(),n=C();return r.jsx(m.div,{...s(t,o),className:j("chakra-popover__body",t.className),__css:n.body})});D.displayName="PopoverBody";function de(e){if(e)return{enter:{...e.enter,visibility:"visible"},exit:{...e.exit,transitionEnd:{visibility:"hidden"}}}}var me={exit:{opacity:0,scale:.95,transition:{duration:.1,ease:[.4,0,1,1]}},enter:{scale:1,opacity:1,transition:{duration:.15,ease:[0,0,.2,1]}}},ue=m(ne.section),F=h(function(t,o){const{variants:s=me,...n}=t,{isOpen:a}=g();return r.jsx(ue,{ref:o,variants:de(s),initial:!1,animate:a?"enter":"exit",...n})});F.displayName="PopoverTransition";var A=h(function(t,o){const{rootProps:s,motionProps:n,...a}=t,{getPopoverProps:l,getPopoverPositionerProps:d,onAnimationComplete:i}=g(),c=C(),u={position:"relative",display:"flex",flexDirection:"column",...c.content};return r.jsx(m.div,{...d(s),__css:c.popper,className:"chakra-popover__popper",children:r.jsx(F,{...n,...l(a,o),onAnimationComplete:z(i,a.onAnimationComplete),className:j("chakra-popover__content",t.className),__css:u})})});A.displayName="PopoverContent";const ke=k,Te=T,$e=e=>{const{children:t,hideArrow:o=!0,...s}=e,{dialogProps:n}=J(),a=w();return r.jsxs(A,{...s,...n,width:"auto",minW:"300px",sx:a.dialog,className:H("sui-date-picker__dialog",e.className),children:[!o&&r.jsx($,{}),r.jsx(D,{children:t})]})},pe=({colorScheme:e})=>({px:"0.1rem",textAlign:"end",outline:"none",rounded:"md","&[data-placeholder]":{color:"muted"},"&[data-placeholder]+[data-literal]":{color:"muted"},_focus:{background:`${e}.500`,color:"white"},"&[data-read-only]":{bg:"transparent",color:"muted"}}),fe={baseStyle:pe,defaultProps:{colorScheme:"primary"}},_={sm:"2.2rem",md:"2.5rem",lg:"3rem"},[ye,De]=re({name:"SegmentedInputStylesContext"}),I=h(({children:e,size:t,...o},s)=>{var i;const n=Q("Input",{size:t,...o}),a=U(o),l=ce(t,c=>_[c])||_.md,d={display:"flex",alignItems:"center",_focusWithin:(i=n.field)==null?void 0:i._focusVisible,...n.field};return r.jsx(ye,{value:n,children:r.jsx(m.div,{...a,pe:l,__css:d,ref:s,children:e})})});I.displayName="SegmentedInput";const E=h((e,t)=>{const{children:o,type:s,minValue:n,maxValue:a,isPlaceholder:l,isEditable:d,...i}=e,u=!!q().components.SuiInputSegment,p=G("SuiInputSegment",{styleConfig:u?void 0:fe,...i}),y=s&&["day","month"].includes(s)?1:String(a).length,P={boxSizing:"content-box",fontVariantNumeric:"tabular-nums",minWidth:a!=null?y+"ch":"auto",...p},v=s==="literal";return r.jsx(m.div,{...i,ref:t,"data-literal":b(v),"data-placeholder":b(l),"data-read-only":b(!d),__css:P,children:o})});E.displayName="SegmentedInputSegment";const he=h((e,t)=>{const o=X({...e,createCalendar:Y}),s=f.useRef(null),{fieldProps:{id:n,...a}}=Z(e,o,s),l=ae(a),i={display:"flex",width:"full",...w().dateField};return r.jsx(m.div,{...l,"aria-labelledby":`${l.id}-label`,ref:ie(s,t),__css:i,children:o.segments.map((c,u)=>r.jsx(B,{segment:c,state:o},u))})});he.displayName="DateField";const x=e=>{const{label:t="Time",defaultValue:o,onChange:s,onBlur:n,onFocus:a,onKeyDown:l,onKeyUp:d,hourCycle:i,...c}=e,u={label:t,defaultValue:o,onChange:s,onBlur:n,onFocus:a,onKeyDown:l,onKeyUp:d,hourCycle:i},p=oe({...e,onChange:s}),y=f.useRef(null),{labelProps:P,fieldProps:v}=se(u,p,y);return r.jsxs(m.div,{mt:2,...c,children:[r.jsx(le,{...P,children:t}),r.jsx(I,{...v,ref:y,display:"inline-flex",pr:2,children:p.segments.map((L,W)=>r.jsx(B,{segment:L,state:p},W))})]})};x.displayName="TimeField";const ge=e=>{const{locale:t,state:{timeValue:o,setTimeValue:s},hourCycle:n}=ee();return r.jsx(x,{...e,locale:e.locale||t,hourCycle:n,value:o,onChange:a=>{s(a)}})};ge.displayName="DatePickerTimeField";const R=e=>{const{locale:t,state:{timeRange:o,setTime:s},hourCycle:n}=N();return r.jsx(x,{...e,locale:e.locale||t,value:o==null?void 0:o.start,onChange:a=>s("start",a),hourCycle:n})};R.displayName="DatePickerStartTimeField";const V=e=>{const{locale:t,state:{timeRange:o,setTime:s},hourCycle:n}=N();return r.jsx(x,{...e,locale:e.locale||t,value:o==null?void 0:o.end,onChange:a=>s("end",a),hourCycle:n})};V.displayName="DatePickerEndTimeField";const xe=e=>{const{startLabel:t="Start time",endLabel:o="End time",...s}=e;return r.jsxs(m.div,{display:"flex",gap:"2",...s,children:[r.jsx(R,{label:t}),r.jsx(V,{label:o})]})};xe.displayName="DateRangePickerTimeField";const B=({segment:e,state:t})=>{const o=f.useRef(null),{segmentProps:{style:s,...n}}=te(e,t,o);return r.jsx(E,{ref:o,sx:s,...e,...n,children:e.text})};export{$e as D,I as S,ge as a,Te as b,he as c,ke as d,xe as e};
