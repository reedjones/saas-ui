import{b as w,a as N,o as I,j as e}from"./chunk-ZJJGQIVY-3d316dd5.js";import{r as m}from"./index-76fb7be0.js";import{c as M}from"./chunk-O3SWHQEE-d6839529.js";import{m as W}from"./motion-56319619.js";import{A as D}from"./index-c6b2a32b.js";import{S as q}from"./chunk-5PH6ULNP-89f88b5a.js";import{f as z}from"./chunk-TR226DUX-6654fea8.js";import{c as G}from"./chunk-MFVQSVQB-c3da265d.js";import{C as H}from"./chunk-5MKCW436-7cead567.js";import{C as c}from"./chunk-YQO7BFFX-e9bdc825.js";import{T as J}from"./chunk-2OOHT3W5-9ba5a188.js";import{B as K}from"./chunk-UVUR7MCU-4e62fe64.js";import"./_commonjsHelpers-de833af9.js";import"./emotion-react.browser.esm-b737cf90.js";import"./hoist-non-react-statics.cjs-3f8ebaa8.js";import"./chunk-6NHXDBFO-987cde81.js";import"./chunk-ITIKTQWJ-0c049f00.js";import"./chunk-R3DH46PF-f0689d26.js";import"./chunk-T6ZDZOLO-8d3f3a64.js";import"./index-7abe7895.js";import"./index-17e33fe9.js";const[Q,U]=G("SuiLoadingOverlay"),V=w(W.div),o=r=>{const a=N("SuiLoadingOverlay",r),{children:B,isLoading:p=!0,spacing:k=2,motionPreset:g,...P}=I(r),R={display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center","& > *:not(style) ~ *:not(style)":{marginTop:k},...a.overlay},[A]=m.useState(!p&&g!=="none"),F=g==="none"?{}:z;return e.jsx(Q,{value:a,children:e.jsx(D,{initial:A,children:p&&e.jsx(V,{...F,...P,__css:R,className:M("chakra-loading-overlay",r.className),children:B})})})};o.displayName="LoadingOverlay";const l=q,X=r=>{const a=U();return e.jsx(w.p,{...r,__css:a.text})},ye={title:"Components/Feedback/LoadingOverlay",decorators:[r=>e.jsx(H,{mt:"40px",children:e.jsx(r,{})})]},n=()=>e.jsx(c,{height:"200px",overflow:"hidden",children:e.jsx(o,{children:e.jsx(l,{})})}),s=()=>e.jsxs(c,{height:"200px",pos:"relative",p:"4",children:[e.jsx(J,{children:"This content will be overlayed."}),e.jsx(o,{variant:"overlay",children:e.jsx(l,{})})]}),t=()=>e.jsx(o,{variant:"fullscreen",children:e.jsx(l,{})}),i=()=>e.jsx(c,{height:"200px",children:e.jsx(o,{borderRadius:"md",children:e.jsx(X,{children:"Loading..."})})}),d=()=>{const[r,a]=m.useState(!1);return m.useEffect(()=>{r&&setTimeout(()=>{a(!1)},4e3)},[r]),e.jsxs(c,{height:"200px",pos:"relative",p:"4",children:[e.jsx(K,{onClick:()=>a(!0),children:"Show loader"}),e.jsx(o,{variant:"overlay",isLoading:r,children:e.jsx(l,{})})]})};var x,u,h;n.parameters={...n.parameters,docs:{...(x=n.parameters)==null?void 0:x.docs,source:{originalSource:`() => <Card height="200px" overflow="hidden">\r
    <LoadingOverlay>\r
      <LoadingSpinner />\r
    </LoadingOverlay>\r
  </Card>`,...(h=(u=n.parameters)==null?void 0:u.docs)==null?void 0:h.source}}};var v,y,L;s.parameters={...s.parameters,docs:{...(v=s.parameters)==null?void 0:v.docs,source:{originalSource:`() => <Card height="200px" pos="relative" p="4">\r
    <Text>This content will be overlayed.</Text>\r
    <LoadingOverlay variant="overlay">\r
      <LoadingSpinner />\r
    </LoadingOverlay>\r
  </Card>`,...(L=(y=s.parameters)==null?void 0:y.docs)==null?void 0:L.source}}};var f,j,S;t.parameters={...t.parameters,docs:{...(f=t.parameters)==null?void 0:f.docs,source:{originalSource:`() => <LoadingOverlay variant="fullscreen">\r
    <LoadingSpinner />\r
  </LoadingOverlay>`,...(S=(j=t.parameters)==null?void 0:j.docs)==null?void 0:S.source}}};var C,O,T;i.parameters={...i.parameters,docs:{...(C=i.parameters)==null?void 0:C.docs,source:{originalSource:`() => <Card height="200px">\r
    <LoadingOverlay borderRadius="md">\r
      <LoadingText>Loading...</LoadingText>\r
    </LoadingOverlay>\r
  </Card>`,...(T=(O=i.parameters)==null?void 0:O.docs)==null?void 0:T.source}}};var E,_,b;d.parameters={...d.parameters,docs:{...(E=d.parameters)==null?void 0:E.docs,source:{originalSource:`() => {
  const [isLoading, setLoading] = React.useState(false);
  React.useEffect(() => {
    if (isLoading) {
      setTimeout(() => {
        setLoading(false);
      }, 4000);
    }
  }, [isLoading]);
  return <Card height="200px" pos="relative" p="4">\r
      <Button onClick={() => setLoading(true)}>Show loader</Button>\r
      <LoadingOverlay variant="overlay" isLoading={isLoading}>\r
        <LoadingSpinner />\r
      </LoadingOverlay>\r
    </Card>;
}`,...(b=(_=d.parameters)==null?void 0:_.docs)==null?void 0:b.source}}};const Le=["Basic","Overlay","Fullscreen","WithText","ExitAnimation"];export{n as Basic,d as ExitAnimation,t as Fullscreen,s as Overlay,i as WithText,Le as __namedExportsOrder,ye as default};
