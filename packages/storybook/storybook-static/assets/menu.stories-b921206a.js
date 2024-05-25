import{j as n}from"./chunk-ZJJGQIVY-3d316dd5.js";import{M as c,a as u}from"./menu-65386f37.js";import{q as L,d as B,K as F,r as G}from"./index-43bf6e0e.js";import{C as v}from"./chunk-5MKCW436-7cead567.js";import{u as l}from"./chunk-7JBTTEVG-4cf2a1fa.js";import{S as a}from"./chunk-ZHMYA64R-c4ed5002.js";import{B as p}from"./chunk-UVUR7MCU-4e62fe64.js";import{M as r}from"./chunk-5TWLKMYI-2d3e107a.js";import{M}from"./chunk-PTXXWAJU-4600a0a7.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";import"./modal-c3eb0174.js";import"./chunk-OFOVX77R-a988abeb.js";import"./chunk-NABYTFTG-691324af.js";import"./index-17e33fe9.js";import"./chunk-34PD6CUK-c14fe2a1.js";import"./index-7abe7895.js";import"./index-3e7aa64e.js";import"./index-add592e3.js";import"./index-c6b2a32b.js";import"./motion-56319619.js";import"./index-660fa4d3.js";import"./chunk-TR226DUX-6654fea8.js";import"./chunk-6NHXDBFO-987cde81.js";import"./chunk-RAWN7VJ3-d8d1ff9c.js";import"./chunk-4FCEGNGT-b11834d9.js";import"./chunk-37N6GCLA-d6b68ca5.js";import"./chunk-2GBDXOMA-c3ee5274.js";import"./chunk-EL2VKIZQ-30979218.js";import"./chunk-7254PCTD-b2d45611.js";import"./chunk-HB6KBUMZ-d43cc10c.js";import"./index-514c0e80.js";import"./index-30c8b35e.js";import"./index-6843c920.js";import"./index-938a7d6c.js";import"./index-5f92aa2b.js";import"./index-c4a63d44.js";import"./index-e1b4ee4c.js";import"./chunk-MFVQSVQB-c3da265d.js";import"./chunk-ITIKTQWJ-0c049f00.js";import"./emotion-react.browser.esm-b737cf90.js";import"./hoist-non-react-statics.cjs-3f8ebaa8.js";import"./chunk-KC77MHL3-bc1ea797.js";import"./chunk-G72KV6MB-be2d631b.js";import"./chunk-VMD3UMGK-2a4001d6.js";import"./iconBase-9679482c.js";import"./chunk-6B2YUEGK-427119e4.js";import"./chunk-7JSBRQFI-041d2b19.js";import"./chunk-KA2477BY-f6a12dd2.js";import"./chunk-O3SWHQEE-d6839529.js";import"./chunk-T6ZDZOLO-8d3f3a64.js";import"./chunk-5PH6ULNP-89f88b5a.js";const vn={title:"Components/Overlay/MenuDialog",decorators:[e=>n.jsx(v,{mt:"40px",children:n.jsx(e,{})})]},t=()=>{const e=l();return n.jsxs(a,{alignItems:"center",children:[n.jsx(p,{onClick:()=>{e.onOpen()},children:"Open menu"}),n.jsx(c,{...e,children:n.jsxs(u,{title:"Menu",children:[n.jsx(r,{children:"Item 1"}),n.jsx(r,{children:"Item 2"}),n.jsx(r,{children:"Item 3"})]})})]})},s=()=>{const e=l();return n.jsxs(a,{alignItems:"center",children:[n.jsx(p,{onClick:()=>{e.onOpen()},children:"Open menu"}),n.jsx(c,{...e,children:n.jsxs(u,{title:"Commands",children:[n.jsx(r,{icon:n.jsx(L,{}),command:"A",children:"Assign"}),n.jsx(r,{icon:n.jsx(B,{}),command:"L",children:"Add label"}),n.jsx(r,{icon:n.jsx(F,{}),command:"C",children:"Close"})]})})]})},i=()=>{const e=l();return n.jsxs(a,{alignItems:"center",children:[n.jsx(p,{onClick:()=>{e.onOpen()},children:"Open menu"}),n.jsx(c,{...e,children:n.jsxs(u,{title:"Groups",children:[n.jsxs(M,{title:"Message",children:[n.jsx(r,{icon:n.jsx(L,{}),command:"A",children:"Assign"}),n.jsx(r,{icon:n.jsx(B,{}),command:"L",children:"Add label"}),n.jsx(r,{icon:n.jsx(F,{}),command:"C",children:"Close"})]}),n.jsx(M,{title:"Settings",children:n.jsx(r,{icon:n.jsx(G,{}),children:"Change theme"})})]})})]})},m=()=>{const e=l(),d=[];for(let o=0;o<50;o++)d.push(n.jsxs(r,{children:["Item ",o]},o));return n.jsxs(a,{alignItems:"center",children:[n.jsx(p,{onClick:()=>{e.onOpen()},children:"Open menu"}),n.jsx(c,{...e,children:n.jsx(u,{title:"Overflow",children:d})})]})};var g,x,I;t.parameters={...t.parameters,docs:{...(g=t.parameters)==null?void 0:g.docs,source:{originalSource:`() => {
  const disclosure = useDisclosure();
  return <Stack alignItems="center">\r
      <Button onClick={() => {
      disclosure.onOpen();
    }}>\r
        Open menu\r
      </Button>\r
\r
      <MenuDialog {...disclosure}>\r
        <MenuDialogList title="Menu">\r
          <MenuItem>Item 1</MenuItem>\r
          <MenuItem>Item 2</MenuItem>\r
          <MenuItem>Item 3</MenuItem>\r
        </MenuDialogList>\r
      </MenuDialog>\r
    </Stack>;
}`,...(I=(x=t.parameters)==null?void 0:x.docs)==null?void 0:I.source}}};var j,h,C;s.parameters={...s.parameters,docs:{...(j=s.parameters)==null?void 0:j.docs,source:{originalSource:`() => {
  const disclosure = useDisclosure();
  return <Stack alignItems="center">\r
      <Button onClick={() => {
      disclosure.onOpen();
    }}>\r
        Open menu\r
      </Button>\r
\r
      <MenuDialog {...disclosure}>\r
        <MenuDialogList title="Commands">\r
          <MenuItem icon={<FiUsers />} command="A">\r
            Assign\r
          </MenuItem>\r
          <MenuItem icon={<FiTag />} command="L">\r
            Add label\r
          </MenuItem>\r
          <MenuItem icon={<FiArchive />} command="C">\r
            Close\r
          </MenuItem>\r
        </MenuDialogList>\r
      </MenuDialog>\r
    </Stack>;
}`,...(C=(h=s.parameters)==null?void 0:h.docs)==null?void 0:C.source}}};var D,O,k;i.parameters={...i.parameters,docs:{...(D=i.parameters)==null?void 0:D.docs,source:{originalSource:`() => {
  const disclosure = useDisclosure();
  return <Stack alignItems="center">\r
      <Button onClick={() => {
      disclosure.onOpen();
    }}>\r
        Open menu\r
      </Button>\r
\r
      <MenuDialog {...disclosure}>\r
        <MenuDialogList title="Groups">\r
          <MenuGroup title="Message">\r
            <MenuItem icon={<FiUsers />} command="A">\r
              Assign\r
            </MenuItem>\r
            <MenuItem icon={<FiTag />} command="L">\r
              Add label\r
            </MenuItem>\r
            <MenuItem icon={<FiArchive />} command="C">\r
              Close\r
            </MenuItem>\r
          </MenuGroup>\r
          <MenuGroup title="Settings">\r
            <MenuItem icon={<FiSettings />}>Change theme</MenuItem>\r
          </MenuGroup>\r
        </MenuDialogList>\r
      </MenuDialog>\r
    </Stack>;
}`,...(k=(O=i.parameters)==null?void 0:O.docs)==null?void 0:k.source}}};var S,A,f;m.parameters={...m.parameters,docs:{...(S=m.parameters)==null?void 0:S.docs,source:{originalSource:`() => {
  const disclosure = useDisclosure();
  const items: React.ReactElement[] = [];
  for (let i = 0; i < 50; i++) {
    items.push(<MenuItem key={i}>Item {i}</MenuItem>);
  }
  return <Stack alignItems="center">\r
      <Button onClick={() => {
      disclosure.onOpen();
    }}>\r
        Open menu\r
      </Button>\r
\r
      <MenuDialog {...disclosure}>\r
        <MenuDialogList title="Overflow">{items}</MenuDialogList>\r
      </MenuDialog>\r
    </Stack>;
}`,...(f=(A=m.parameters)==null?void 0:A.docs)==null?void 0:f.source}}};const bn=["Basic","IconAndCommand","Group","Overflow"];export{t as Basic,i as Group,s as IconAndCommand,m as Overflow,bn as __namedExportsOrder,vn as default};
