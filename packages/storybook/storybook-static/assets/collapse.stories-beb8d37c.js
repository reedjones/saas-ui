import{j as o}from"./chunk-ZJJGQIVY-3d316dd5.js";import{u as m}from"./use-collapse-0d2419e3.js";import{C as p}from"./chunk-RKXMPHPI-1a3f22a5.js";import{C as a}from"./chunk-5MKCW436-7cead567.js";import{B as c}from"./chunk-UVUR7MCU-4e62fe64.js";import{B as g}from"./chunk-PULVB27S-e893e50c.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";import"./chunk-ITIKTQWJ-0c049f00.js";import"./chunk-O3SWHQEE-d6839529.js";import"./chunk-6B2YUEGK-427119e4.js";import"./chunk-7JBTTEVG-4cf2a1fa.js";import"./chunk-7JSBRQFI-041d2b19.js";import"./chunk-KA2477BY-f6a12dd2.js";import"./chunk-6NHXDBFO-987cde81.js";import"./index-c6b2a32b.js";import"./motion-56319619.js";import"./chunk-T6ZDZOLO-8d3f3a64.js";import"./index-7abe7895.js";import"./chunk-5PH6ULNP-89f88b5a.js";import"./emotion-react.browser.esm-b737cf90.js";import"./hoist-non-react-statics.cjs-3f8ebaa8.js";import"./index-17e33fe9.js";const A={title:"Hooks/useCollapse",component:p},r=()=>{const{isOpen:n,getToggleProps:i,getCollapseProps:l}=m();return o.jsxs(a,{children:[o.jsxs(c,{...i(),children:["Toggle: ",n?"open":"closed"]}),o.jsx(p,{...l(),children:o.jsx(g,{mt:"4",children:"Collapsed content "})})]})};var t,e,s;r.parameters={...r.parameters,docs:{...(t=r.parameters)==null?void 0:t.docs,source:{originalSource:`() => {
  const {
    isOpen,
    getToggleProps,
    getCollapseProps
  } = useCollapse();
  return <Container>\r
      <Button {...getToggleProps()}>\r
        Toggle: {isOpen ? 'open' : 'closed'}\r
      </Button>\r
\r
      <Collapse {...getCollapseProps()}>\r
        <Box mt="4">Collapsed content </Box>\r
      </Collapse>\r
    </Container>;
}`,...(s=(e=r.parameters)==null?void 0:e.docs)==null?void 0:s.source}}};const D=["Basic"];export{r as Basic,D as __namedExportsOrder,A as default};
