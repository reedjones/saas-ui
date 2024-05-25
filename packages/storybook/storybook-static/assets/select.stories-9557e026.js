import{f as Be,j as e,b as I,g as Ce}from"./chunk-ZJJGQIVY-3d316dd5.js";import{r as B}from"./index-76fb7be0.js";import{S as a,a as n,b as r,c as t}from"./select-c1165209.js";import{N as Re}from"./native-select-327410ce.js";import{I as Ge}from"./index-43bf6e0e.js";import{S as ye}from"./chunk-ZHMYA64R-c4ed5002.js";import{C as He}from"./chunk-5MKCW436-7cead567.js";import{T as Pe}from"./chunk-RPO2WXNL-3e4b4cfd.js";import{I as Ae}from"./chunk-2GBDXOMA-c3ee5274.js";import"./_commonjsHelpers-de833af9.js";import"./chunk-O3SWHQEE-d6839529.js";import"./chunk-ITIKTQWJ-0c049f00.js";import"./utils-13c12efa.js";import"./chunk-56K2BSAJ-a2503b05.js";import"./chunk-DFWC5MHP-a7a26ffe.js";import"./index-7abe7895.js";import"./index-17e33fe9.js";import"./chunk-MFVQSVQB-c3da265d.js";import"./emotion-react.browser.esm-b737cf90.js";import"./hoist-non-react-statics.cjs-3f8ebaa8.js";import"./chunk-7JSBRQFI-041d2b19.js";import"./chunk-KA2477BY-f6a12dd2.js";import"./chunk-HB6KBUMZ-d43cc10c.js";import"./index-514c0e80.js";import"./index-30c8b35e.js";import"./index-6843c920.js";import"./index-660fa4d3.js";import"./index-938a7d6c.js";import"./index-3e7aa64e.js";import"./index-5f92aa2b.js";import"./index-c4a63d44.js";import"./index-e1b4ee4c.js";import"./chunk-6MF6NSK4-d26e88d8.js";import"./motion-56319619.js";import"./chunk-B3RAGXFV-fa0ff449.js";import"./chunk-PTXXWAJU-4600a0a7.js";import"./chunk-UVUR7MCU-4e62fe64.js";import"./chunk-T6ZDZOLO-8d3f3a64.js";import"./chunk-5PH6ULNP-89f88b5a.js";import"./icons-d10032f4.js";import"./iconBase-9679482c.js";import"./chunk-G72KV6MB-be2d631b.js";var Ie=Be(function(c,o){const{spacing:i="0.5rem",spacingX:C,spacingY:_e,children:y,justify:be,direction:De,align:Fe,className:ze,shouldWrapChildren:_,...ke}=c,Te=B.useMemo(()=>_?B.Children.map(y,(we,Ee)=>e.jsx(M,{children:we},Ee)):y,[y,_]);return e.jsx(I.div,{ref:o,className:Ce("chakra-wrap",ze),...ke,children:e.jsx(I.ul,{className:"chakra-wrap__list",__css:{display:"flex",flexWrap:"wrap",justifyContent:be,alignItems:Fe,flexDirection:De,listStyleType:"none",gap:i,columnGap:C,rowGap:_e,padding:"0"},children:Te})})});Ie.displayName="Wrap";var M=Be(function(c,o){const{className:i,...C}=c;return e.jsx(I.li,{ref:o,__css:{display:"flex",alignItems:"flex-start"},className:Ce("chakra-wrap__listitem",i),...C})});M.displayName="WrapItem";const Dt={title:"Components/Forms/Select",component:a,decorators:[l=>e.jsx(He,{mt:"40px",maxW:"320px",children:e.jsx(l,{})})]},Me=(l=6)=>Array.from({length:l}).map((c,o)=>({value:String(o),label:`Option ${o+1}`})),s=Me(),p={args:{name:"select",options:s,children:e.jsxs(e.Fragment,{children:[e.jsx(n,{}),e.jsx(r,{})]})}},u={args:{name:"select",options:s,defaultValue:"1",children:e.jsxs(e.Fragment,{children:[e.jsx(n,{}),e.jsx(r,{})]})}},d={args:{name:"select",options:s,placeholder:"Select an option...",children:e.jsxs(e.Fragment,{children:[e.jsx(n,{}),e.jsx(r,{})]})}},m={args:{name:"select",options:s,placeholder:"Disabled.",isDisabled:!0,children:e.jsxs(e.Fragment,{children:[e.jsx(n,{}),e.jsx(r,{})]})}},S={args:{name:"select",options:s,placeholder:"Multiple.",multiple:!0,children:e.jsxs(e.Fragment,{children:[e.jsx(n,{}),e.jsx(r,{})]})}},h={args:{name:"select",options:s,placeholder:"Select an option...",multiple:!0,defaultValue:["1"],children:e.jsxs(e.Fragment,{children:[e.jsx(n,{}),e.jsx(r,{})]})}},x={args:{name:"select",options:s,placeholder:"Select options...",multiple:!0,children:e.jsxs(e.Fragment,{children:[e.jsx(n,{}),e.jsx(r,{})]}),renderValue:l=>{if(l!=null&&l.length)return e.jsx(Ie,{py:"1",children:l.map(c=>e.jsx(M,{children:e.jsx(Pe,{variant:"solid",children:c})}))})}}},j={render:l=>{const[c,o]=B.useState("1");return e.jsxs(a,{placeholder:"Select an option...",value:c,onChange:i=>o(i),...l,children:[e.jsx(n,{}),e.jsx(r,{})]})},args:{name:"select",options:s}},O={render:l=>{const[c,o]=B.useState(["1"]);return e.jsxs(a,{placeholder:"Select an option...",value:c,onChange:i=>o(i),...l,children:[e.jsx(n,{}),e.jsx(r,{})]})},args:{name:"select",options:s,multiple:!0}},v={render:l=>e.jsxs(a,{placeholder:"Select an option...",...l,children:[e.jsx(n,{leftIcon:e.jsx(Ae,{as:Ge})}),e.jsx(r,{})]}),args:{name:"select",options:s,value:"1"}},g={args:{name:"select",options:Me(100),placeholder:"Select an option...",children:e.jsxs(e.Fragment,{children:[e.jsx(n,{}),e.jsx(r,{})]})}},f={render:()=>e.jsxs(a,{name:"select",defaultValue:"1",children:[e.jsx(n,{}),e.jsxs(r,{children:[e.jsx(t,{value:"1",children:"Option 1"}),e.jsx(t,{value:"2",children:"Option 2"})]})]})},V={render:()=>e.jsxs(a,{name:"select",defaultValue:"1",children:[e.jsx(n,{}),e.jsxs(r,{children:[e.jsx(t,{value:"",children:"None"}),e.jsx(t,{value:"1",children:"Option 1"}),e.jsx(t,{value:"2",children:"Option 2"})]})]})},L={render:()=>e.jsx(Re,{name:"select",options:s,"aria-label":"Select"})},N={render:()=>e.jsxs(ye,{children:[e.jsxs(a,{name:"select",defaultValue:"1",size:"xs",children:[e.jsx(n,{}),e.jsxs(r,{children:[e.jsx(t,{value:"",children:"None"}),e.jsx(t,{value:"1",children:"Option 1"}),e.jsx(t,{value:"2",children:"Option 2"})]})]}),e.jsxs(a,{name:"select",defaultValue:"1",size:"sm",children:[e.jsx(n,{}),e.jsxs(r,{children:[e.jsx(t,{value:"",children:"None"}),e.jsx(t,{value:"1",children:"Option 1"}),e.jsx(t,{value:"2",children:"Option 2"})]})]}),e.jsxs(a,{name:"select",defaultValue:"1",size:"md",children:[e.jsx(n,{}),e.jsxs(r,{children:[e.jsx(t,{value:"",children:"None"}),e.jsx(t,{value:"1",children:"Option 1"}),e.jsx(t,{value:"2",children:"Option 2"})]})]}),e.jsxs(a,{name:"select",defaultValue:"1",size:"lg",children:[e.jsx(n,{}),e.jsxs(r,{children:[e.jsx(t,{value:"",children:"None"}),e.jsx(t,{value:"1",children:"Option 1"}),e.jsx(t,{value:"2",children:"Option 2"})]})]})]})},W={render:()=>e.jsxs(ye,{children:[e.jsxs(a,{name:"select",defaultValue:"1",variant:"outline",children:[e.jsx(n,{}),e.jsxs(r,{children:[e.jsx(t,{value:"",children:"None"}),e.jsx(t,{value:"1",children:"Option 1"}),e.jsx(t,{value:"2",children:"Option 2"})]})]}),e.jsxs(a,{name:"select",defaultValue:"1",variant:"flushed",children:[e.jsx(n,{}),e.jsxs(r,{children:[e.jsx(t,{value:"",children:"None"}),e.jsx(t,{value:"1",children:"Option 1"}),e.jsx(t,{value:"2",children:"Option 2"})]})]}),e.jsxs(a,{name:"select",defaultValue:"1",variant:"filled",children:[e.jsx(n,{}),e.jsxs(r,{children:[e.jsx(t,{value:"",children:"None"}),e.jsx(t,{value:"1",children:"Option 1"}),e.jsx(t,{value:"2",children:"Option 2"})]})]}),e.jsxs(a,{name:"select",defaultValue:"1",variant:"unstyled",children:[e.jsx(n,{}),e.jsxs(r,{children:[e.jsx(t,{value:"",children:"None"}),e.jsx(t,{value:"1",children:"Option 1"}),e.jsx(t,{value:"2",children:"Option 2"})]})]})]})};var b,D,F;p.parameters={...p.parameters,docs:{...(b=p.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    name: 'select',
    options,
    children: <>\r
        <SelectButton />\r
        <SelectList />\r
      </>
  }
}`,...(F=(D=p.parameters)==null?void 0:D.docs)==null?void 0:F.source}}};var z,k,T;u.parameters={...u.parameters,docs:{...(z=u.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    name: 'select',
    options,
    defaultValue: '1',
    children: <>\r
        <SelectButton />\r
        <SelectList />\r
      </>
  }
}`,...(T=(k=u.parameters)==null?void 0:k.docs)==null?void 0:T.source}}};var w,E,R;d.parameters={...d.parameters,docs:{...(w=d.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    name: 'select',
    options,
    placeholder: 'Select an option...',
    children: <>\r
        <SelectButton />\r
        <SelectList />\r
      </>
  }
}`,...(R=(E=d.parameters)==null?void 0:E.docs)==null?void 0:R.source}}};var G,H,P;m.parameters={...m.parameters,docs:{...(G=m.parameters)==null?void 0:G.docs,source:{originalSource:`{
  args: {
    name: 'select',
    options,
    placeholder: 'Disabled.',
    isDisabled: true,
    children: <>\r
        <SelectButton />\r
        <SelectList />\r
      </>
  }
}`,...(P=(H=m.parameters)==null?void 0:H.docs)==null?void 0:P.source}}};var A,X,Y;S.parameters={...S.parameters,docs:{...(A=S.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    name: 'select',
    options,
    placeholder: 'Multiple.',
    multiple: true,
    children: <>\r
        <SelectButton />\r
        <SelectList />\r
      </>
  }
}`,...(Y=(X=S.parameters)==null?void 0:X.docs)==null?void 0:Y.source}}};var $,q,J;h.parameters={...h.parameters,docs:{...($=h.parameters)==null?void 0:$.docs,source:{originalSource:`{
  args: {
    name: 'select',
    options,
    placeholder: 'Select an option...',
    multiple: true,
    defaultValue: ['1'],
    children: <>\r
        <SelectButton />\r
        <SelectList />\r
      </>
  }
}`,...(J=(q=h.parameters)==null?void 0:q.docs)==null?void 0:J.source}}};var K,Q,U;x.parameters={...x.parameters,docs:{...(K=x.parameters)==null?void 0:K.docs,source:{originalSource:`{
  args: {
    name: 'select',
    options,
    placeholder: 'Select options...',
    multiple: true,
    children: <>\r
        <SelectButton />\r
        <SelectList />\r
      </>,
    renderValue: selected => {
      if (selected?.length) {
        return <Wrap py="1">\r
            {selected.map(value => <WrapItem>\r
                <Tag variant="solid">{value}</Tag>\r
              </WrapItem>)}\r
          </Wrap>;
      }
    }
  }
}`,...(U=(Q=x.parameters)==null?void 0:Q.docs)==null?void 0:U.source}}};var Z,ee,te;j.parameters={...j.parameters,docs:{...(Z=j.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = React.useState('1');
    return <Select placeholder="Select an option..." value={value} onChange={value => setValue(value)} {...args}>\r
        <SelectButton />\r
        <SelectList />\r
      </Select>;
  },
  args: {
    name: 'select',
    options
  }
}`,...(te=(ee=j.parameters)==null?void 0:ee.docs)==null?void 0:te.source}}};var ne,re,le;O.parameters={...O.parameters,docs:{...(ne=O.parameters)==null?void 0:ne.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = React.useState(['1']);
    return <Select placeholder="Select an option..." value={value} onChange={value => setValue(value)} {...args}>\r
        <SelectButton />\r
        <SelectList />\r
      </Select>;
  },
  args: {
    name: 'select',
    options,
    multiple: true
  }
}`,...(le=(re=O.parameters)==null?void 0:re.docs)==null?void 0:le.source}}};var ae,se,ce;v.parameters={...v.parameters,docs:{...(ae=v.parameters)==null?void 0:ae.docs,source:{originalSource:`{
  render: args => <Select placeholder="Select an option..." {...args}>\r
      <SelectButton leftIcon={<Icon as={FiSmile} />} />\r
      <SelectList />\r
    </Select>,
  args: {
    name: 'select',
    options,
    value: '1'
  }
}`,...(ce=(se=v.parameters)==null?void 0:se.docs)==null?void 0:ce.source}}};var oe,ie,pe;g.parameters={...g.parameters,docs:{...(oe=g.parameters)==null?void 0:oe.docs,source:{originalSource:`{
  args: {
    name: 'select',
    options: getOptions(100),
    placeholder: 'Select an option...',
    children: <>\r
        <SelectButton />\r
        <SelectList />\r
      </>
  }
}`,...(pe=(ie=g.parameters)==null?void 0:ie.docs)==null?void 0:pe.source}}};var ue,de,me;f.parameters={...f.parameters,docs:{...(ue=f.parameters)==null?void 0:ue.docs,source:{originalSource:`{
  render: () => <Select name="select" defaultValue="1">\r
      <SelectButton />\r
      <SelectList>\r
        <SelectOption value="1">Option 1</SelectOption>\r
        <SelectOption value="2">Option 2</SelectOption>\r
      </SelectList>\r
    </Select>
}`,...(me=(de=f.parameters)==null?void 0:de.docs)==null?void 0:me.source}}};var Se,he,xe;V.parameters={...V.parameters,docs:{...(Se=V.parameters)==null?void 0:Se.docs,source:{originalSource:`{
  render: () => <Select name="select" defaultValue="1">\r
      <SelectButton />\r
      <SelectList>\r
        <SelectOption value="">None</SelectOption>\r
        <SelectOption value="1">Option 1</SelectOption>\r
        <SelectOption value="2">Option 2</SelectOption>\r
      </SelectList>\r
    </Select>
}`,...(xe=(he=V.parameters)==null?void 0:he.docs)==null?void 0:xe.source}}};var je,Oe,ve;L.parameters={...L.parameters,docs:{...(je=L.parameters)==null?void 0:je.docs,source:{originalSource:`{
  render: () => <NativeSelect name="select" options={options} aria-label="Select" />
}`,...(ve=(Oe=L.parameters)==null?void 0:Oe.docs)==null?void 0:ve.source}}};var ge,fe,Ve;N.parameters={...N.parameters,docs:{...(ge=N.parameters)==null?void 0:ge.docs,source:{originalSource:`{
  render: () => <Stack>\r
      <Select name="select" defaultValue="1" size="xs">\r
        <SelectButton />\r
        <SelectList>\r
          <SelectOption value="">None</SelectOption>\r
          <SelectOption value="1">Option 1</SelectOption>\r
          <SelectOption value="2">Option 2</SelectOption>\r
        </SelectList>\r
      </Select>\r
      <Select name="select" defaultValue="1" size="sm">\r
        <SelectButton />\r
        <SelectList>\r
          <SelectOption value="">None</SelectOption>\r
          <SelectOption value="1">Option 1</SelectOption>\r
          <SelectOption value="2">Option 2</SelectOption>\r
        </SelectList>\r
      </Select>\r
      <Select name="select" defaultValue="1" size="md">\r
        <SelectButton />\r
        <SelectList>\r
          <SelectOption value="">None</SelectOption>\r
          <SelectOption value="1">Option 1</SelectOption>\r
          <SelectOption value="2">Option 2</SelectOption>\r
        </SelectList>\r
      </Select>\r
      <Select name="select" defaultValue="1" size="lg">\r
        <SelectButton />\r
        <SelectList>\r
          <SelectOption value="">None</SelectOption>\r
          <SelectOption value="1">Option 1</SelectOption>\r
          <SelectOption value="2">Option 2</SelectOption>\r
        </SelectList>\r
      </Select>\r
    </Stack>
}`,...(Ve=(fe=N.parameters)==null?void 0:fe.docs)==null?void 0:Ve.source}}};var Le,Ne,We;W.parameters={...W.parameters,docs:{...(Le=W.parameters)==null?void 0:Le.docs,source:{originalSource:`{
  render: () => <Stack>\r
      <Select name="select" defaultValue="1" variant="outline">\r
        <SelectButton />\r
        <SelectList>\r
          <SelectOption value="">None</SelectOption>\r
          <SelectOption value="1">Option 1</SelectOption>\r
          <SelectOption value="2">Option 2</SelectOption>\r
        </SelectList>\r
      </Select>\r
      <Select name="select" defaultValue="1" variant="flushed">\r
        <SelectButton />\r
        <SelectList>\r
          <SelectOption value="">None</SelectOption>\r
          <SelectOption value="1">Option 1</SelectOption>\r
          <SelectOption value="2">Option 2</SelectOption>\r
        </SelectList>\r
      </Select>\r
      <Select name="select" defaultValue="1" variant="filled">\r
        <SelectButton />\r
        <SelectList>\r
          <SelectOption value="">None</SelectOption>\r
          <SelectOption value="1">Option 1</SelectOption>\r
          <SelectOption value="2">Option 2</SelectOption>\r
        </SelectList>\r
      </Select>\r
      <Select name="select" defaultValue="1" variant="unstyled">\r
        <SelectButton />\r
        <SelectList>\r
          <SelectOption value="">None</SelectOption>\r
          <SelectOption value="1">Option 1</SelectOption>\r
          <SelectOption value="2">Option 2</SelectOption>\r
        </SelectList>\r
      </Select>\r
    </Stack>
}`,...(We=(Ne=W.parameters)==null?void 0:Ne.docs)==null?void 0:We.source}}};const Ft=["Basic","DefaultValue","Placeholder","Disabled","Multi","MultiWithDefaultValue","MultiWithTags","Controlled","ControlledMulti","WithIcons","MaxHeight","WithChildren","WithEmptyOption","WithNativeSelect","Sizes","Variants"];export{p as Basic,j as Controlled,O as ControlledMulti,u as DefaultValue,m as Disabled,g as MaxHeight,S as Multi,h as MultiWithDefaultValue,x as MultiWithTags,d as Placeholder,N as Sizes,W as Variants,f as WithChildren,V as WithEmptyOption,v as WithIcons,L as WithNativeSelect,Ft as __namedExportsOrder,Dt as default};
