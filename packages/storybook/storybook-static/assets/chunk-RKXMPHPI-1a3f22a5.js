import{w as m,T as s}from"./chunk-6NHXDBFO-987cde81.js";import{I as T,j as c,g as I}from"./chunk-ZJJGQIVY-3d316dd5.js";import{r as l}from"./index-76fb7be0.js";import{A as O}from"./index-c6b2a32b.js";import{m as j}from"./motion-56319619.js";var A=i=>i!=null&&parseInt(i.toString(),10)>0,d={exit:{height:{duration:.2,ease:s.ease},opacity:{duration:.3,ease:s.ease}},enter:{height:{duration:.3,ease:s.ease},opacity:{duration:.4,ease:s.ease}}},b={exit:({animateOpacity:i,startingHeight:n,transition:a,transitionEnd:t,delay:o})=>{var e;return{...i&&{opacity:A(n)?1:0},height:n,transitionEnd:t==null?void 0:t.exit,transition:(e=a==null?void 0:a.exit)!=null?e:m.exit(d.exit,o)}},enter:({animateOpacity:i,endingHeight:n,transition:a,transitionEnd:t,delay:o})=>{var e;return{...i&&{opacity:1},height:n,transitionEnd:t==null?void 0:t.enter,transition:(e=a==null?void 0:a.enter)!=null?e:m.enter(d.enter,o)}}},k=l.forwardRef((i,n)=>{const{in:a,unmountOnExit:t,animateOpacity:o=!0,startingHeight:e=0,endingHeight:x="auto",style:p,className:h,transition:v,transitionEnd:r,...g}=i,[f,y]=l.useState(!1);l.useEffect(()=>{const w=setTimeout(()=>{y(!0)});return()=>clearTimeout(w)},[]),T({condition:Number(e)>0&&!!t,message:"startingHeight and unmountOnExit are mutually exclusive. You can't use them together"});const E=parseFloat(e.toString())>0,u={startingHeight:e,endingHeight:x,animateOpacity:o,transition:f?v:{enter:{duration:0}},transitionEnd:{enter:r==null?void 0:r.enter,exit:t?r==null?void 0:r.exit:{...r==null?void 0:r.exit,display:E?"block":"none"}}},N=t?a:!0,S=a||t?"enter":"exit";return c.jsx(O,{initial:!1,custom:u,children:N&&c.jsx(j.div,{ref:n,...g,className:I("chakra-collapse",h),style:{overflow:"hidden",display:"block",...p},custom:u,variants:b,initial:t?"exit":!1,animate:S,exit:"exit"})})});k.displayName="Collapse";export{k as C};
