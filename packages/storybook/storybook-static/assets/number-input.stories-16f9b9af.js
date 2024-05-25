import{j as e}from"./chunk-ZJJGQIVY-3d316dd5.js";import{I as W,a as b}from"./chunk-ADBZ7YHX-6e50fa84.js";import{b as v,a as y}from"./chunk-2ZHRCML3-0a67530c.js";import{N as D}from"./number-input-19cdb65d.js";import{C as M}from"./chunk-5MKCW436-7cead567.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";import"./index-7abe7895.js";import"./index-e1b4ee4c.js";import"./chunk-R3DH46PF-f0689d26.js";import"./chunk-2GBDXOMA-c3ee5274.js";import"./index-30c8b35e.js";import"./index-f68c64fe.js";import"./index-938a7d6c.js";import"./index-5f92aa2b.js";import"./index-3e7aa64e.js";import"./index-17e33fe9.js";import"./chunk-56K2BSAJ-a2503b05.js";import"./chunk-DFWC5MHP-a7a26ffe.js";import"./icons-d10032f4.js";const Y={title:"Components/Forms/NumberInput",component:D,decorators:[r=>e.jsx(M,{mt:"40px",children:e.jsx(r,{})})]},t={},o={args:{hideStepper:!0}},a={args:{defaultValue:5,min:0,max:10}},s={args:{format:r=>`$${r}`,parse:r=>r.replace("$","")}},n={args:{leftAddon:e.jsx(W,{children:"$"}),rightAddon:e.jsx(b,{children:"USD"}),hideStepper:!0}},p={args:{leftAddon:e.jsx(v,{children:"$"}),rightAddon:e.jsx(y,{children:"USD"})}};var m,i,d;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:"{}",...(d=(i=t.parameters)==null?void 0:i.docs)==null?void 0:d.source}}};var c,u,l;o.parameters={...o.parameters,docs:{...(c=o.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    hideStepper: true
  }
}`,...(l=(u=o.parameters)==null?void 0:u.docs)==null?void 0:l.source}}};var g,h,f;a.parameters={...a.parameters,docs:{...(g=a.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    defaultValue: 5,
    min: 0,
    max: 10
  }
}`,...(f=(h=a.parameters)==null?void 0:h.docs)==null?void 0:f.source}}};var A,I,S;s.parameters={...s.parameters,docs:{...(A=s.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    format: (value: any) => \`$\${value}\`,
    // use any currency formatter here
    parse: (value: any) => value.replace('$', '')
  }
}`,...(S=(I=s.parameters)==null?void 0:I.docs)==null?void 0:S.source}}};var x,E,$;n.parameters={...n.parameters,docs:{...(x=n.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    leftAddon: <InputLeftAddon>$</InputLeftAddon>,
    rightAddon: <InputRightAddon>USD</InputRightAddon>,
    hideStepper: true
  }
}`,...($=(E=n.parameters)==null?void 0:E.docs)==null?void 0:$.source}}};var j,R,L;p.parameters={...p.parameters,docs:{...(j=p.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    leftAddon: <InputLeftElement>$</InputLeftElement>,
    rightAddon: <InputRightElement>USD</InputRightElement>
  }
}`,...(L=(R=p.parameters)==null?void 0:R.docs)==null?void 0:L.source}}};const Z=["Basic","HideStepper","MinMax","WithFormatter","WithAddons","WithElements"];export{t as Basic,o as HideStepper,a as MinMax,n as WithAddons,p as WithElements,s as WithFormatter,Z as __namedExportsOrder,Y as default};
