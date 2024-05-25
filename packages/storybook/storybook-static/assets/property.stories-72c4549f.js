import{j as r}from"./chunk-ZJJGQIVY-3d316dd5.js";import{P as e,a as v,b as S,c as L}from"./property-8f8bb204.js";import{P as f}from"./persona-e08057a7.js";import{C as g}from"./chunk-5MKCW436-7cead567.js";import{S as h,a as E,b as N}from"./select-c1165209.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";import"./chunk-O3SWHQEE-d6839529.js";import"./chunk-MFVQSVQB-c3da265d.js";import"./chunk-ITIKTQWJ-0c049f00.js";import"./emotion-react.browser.esm-b737cf90.js";import"./hoist-non-react-statics.cjs-3f8ebaa8.js";import"./chunk-V7PAE35Z-f8fb9da9.js";import"./index-7abe7895.js";import"./chunk-SPIKMR6I-b8250fcf.js";import"./index-3e7aa64e.js";import"./chunk-TK6VMDNP-102da1be.js";import"./index-660fa4d3.js";import"./index-c4a63d44.js";import"./index-17e33fe9.js";import"./index-30c8b35e.js";import"./index-938a7d6c.js";import"./chunk-34PD6CUK-c14fe2a1.js";import"./index-add592e3.js";import"./motion-56319619.js";import"./index-c6b2a32b.js";import"./utils-13c12efa.js";import"./chunk-56K2BSAJ-a2503b05.js";import"./chunk-DFWC5MHP-a7a26ffe.js";import"./chunk-7JSBRQFI-041d2b19.js";import"./chunk-KA2477BY-f6a12dd2.js";import"./chunk-HB6KBUMZ-d43cc10c.js";import"./index-514c0e80.js";import"./index-6843c920.js";import"./index-5f92aa2b.js";import"./index-e1b4ee4c.js";import"./chunk-6MF6NSK4-d26e88d8.js";import"./chunk-B3RAGXFV-fa0ff449.js";import"./chunk-PTXXWAJU-4600a0a7.js";import"./chunk-UVUR7MCU-4e62fe64.js";import"./chunk-T6ZDZOLO-8d3f3a64.js";import"./chunk-5PH6ULNP-89f88b5a.js";import"./icons-d10032f4.js";import"./chunk-2GBDXOMA-c3ee5274.js";const Pr={title:"Components/Data Display/Property",component:e,decorators:[j=>r.jsx(g,{mt:"40px",p:"4",borderRadius:"md",children:r.jsx(j,{})})]},t={args:{value:"Name",label:"Elliot Alderson"}},o={args:{value:"Name",label:"Elliot Alderson",labelWidth:"60px"}},a=()=>r.jsxs(e,{children:[r.jsx(v,{justifyContent:"flex-end",children:"Status"}),r.jsx(S,{children:r.jsxs(h,{name:"status",value:"New",options:[{value:"New"},{value:"Open"}],children:[r.jsx(E,{}),r.jsx(N,{})]})})]}),s=()=>r.jsxs(L,{children:[r.jsx(e,{label:"Status",value:"Open"}),r.jsx(e,{label:"Assignee",value:r.jsx(f,{size:"xs",name:"Eelco",presence:"online"})}),r.jsx(e,{label:"Date",value:"Januari 10, 2022"})]});var p,i,n;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    value: 'Name',
    label: 'Elliot Alderson'
  }
}`,...(n=(i=t.parameters)==null?void 0:i.docs)==null?void 0:n.source}}};var l,m,c;o.parameters={...o.parameters,docs:{...(l=o.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    value: 'Name',
    label: 'Elliot Alderson',
    labelWidth: '60px'
  }
}`,...(c=(m=o.parameters)==null?void 0:m.docs)==null?void 0:c.source}}};var u,d,x;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`() => {
  return <Property>\r
      <PropertyLabel justifyContent="flex-end">Status</PropertyLabel>\r
      <PropertyValue>\r
        <Select name="status" value="New" options={[{
        value: 'New'
      }, {
        value: 'Open'
      }]}>\r
          <SelectButton />\r
          <SelectList />\r
        </Select>\r
      </PropertyValue>\r
    </Property>;
}`,...(x=(d=a.parameters)==null?void 0:d.docs)==null?void 0:x.source}}};var b,y,P;s.parameters={...s.parameters,docs:{...(b=s.parameters)==null?void 0:b.docs,source:{originalSource:`() => {
  return <PropertyList>\r
      <Property label="Status" value="Open" />\r
      <Property label="Assignee" value={<Persona size="xs" name="Eelco" presence="online" />} />\r
      <Property label="Date" value="Januari 10, 2022" />\r
    </PropertyList>;
}`,...(P=(y=s.parameters)==null?void 0:y.docs)==null?void 0:P.source}}};const jr=["Basic","LabelWidth","Composed","List"];export{t as Basic,a as Composed,o as LabelWidth,s as List,jr as __namedExportsOrder,Pr as default};
