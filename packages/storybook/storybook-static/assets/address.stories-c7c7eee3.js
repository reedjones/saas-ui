import{j as s,b as S}from"./chunk-ZJJGQIVY-3d316dd5.js";import{c as v}from"./chunk-O3SWHQEE-d6839529.js";import{S as C}from"./chunk-ZHMYA64R-c4ed5002.js";import{B as i}from"./chunk-UVUR7MCU-4e62fe64.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";import"./chunk-G72KV6MB-be2d631b.js";import"./index-e1b4ee4c.js";import"./chunk-T6ZDZOLO-8d3f3a64.js";import"./index-7abe7895.js";import"./chunk-5PH6ULNP-89f88b5a.js";import"./emotion-react.browser.esm-b737cf90.js";import"./hoist-non-react-statics.cjs-3f8ebaa8.js";import"./index-17e33fe9.js";const e=d=>{const{address:r,startLength:j=6,endLength:L=4,...W}=d,f=r.slice(0,j),A=r.slice(r.length-L,r.length);return s.jsxs(S.span,{...W,className:v("sui-web3-address",d.className),children:[f,"...",A]})};e.displayName="Web3Address";const G={title:"Components/Web3/Address",component:e},n="0x71C7656EC7ab88b098defB751B7401B5f6d8976F",b=({address:d,...r})=>s.jsx(e,{address:d,...r}),t=b.bind({});t.args={address:n};const a=b.bind({});a.args={address:n,startLength:10,endLength:3};const o=()=>s.jsxs(C,{alignItems:"flex-start",children:[s.jsx(i,{variant:"outline",children:s.jsx(e,{address:n})}),s.jsx(i,{variant:"outline",children:s.jsx(e,{address:n,startLength:10})}),s.jsx(i,{variant:"outline",children:s.jsx(e,{address:n,endLength:10})})]});var c,m,p;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`({
  address,
  ...args
}) => <Web3Address address={address} {...args} />`,...(p=(m=t.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};var u,l,g;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`({
  address,
  ...args
}) => <Web3Address address={address} {...args} />`,...(g=(l=a.parameters)==null?void 0:l.docs)==null?void 0:g.source}}};var h,x,B;o.parameters={...o.parameters,docs:{...(h=o.parameters)==null?void 0:h.docs,source:{originalSource:`() => {
  return <Stack alignItems="flex-start">\r
      <Button variant="outline">\r
        <Web3Address address={address} />\r
      </Button>\r
      <Button variant="outline">\r
        <Web3Address address={address} startLength={10} />\r
      </Button>\r
      <Button variant="outline">\r
        <Web3Address address={address} endLength={10} />\r
      </Button>\r
    </Stack>;
}`,...(B=(x=o.parameters)==null?void 0:x.docs)==null?void 0:B.source}}};const H=["Basic","CustomLength","WithButton"];export{t as Basic,a as CustomLength,o as WithButton,H as __namedExportsOrder,G as default};
