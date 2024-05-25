import{j as e}from"./chunk-ZJJGQIVY-3d316dd5.js";import{l as H,m as J,n as K}from"./index-43bf6e0e.js";import{P as a,b as d,a as R,c as x,d as P,e as j,f,A as N,g as Q}from"./persona-e08057a7.js";import{C as U}from"./chunk-5MKCW436-7cead567.js";import{V as s}from"./chunk-NTCQBYKE-6d14b748.js";import{I as q}from"./chunk-2GBDXOMA-c3ee5274.js";import{A as X}from"./chunk-V7PAE35Z-f8fb9da9.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";import"./iconBase-9679482c.js";import"./chunk-O3SWHQEE-d6839529.js";import"./chunk-MFVQSVQB-c3da265d.js";import"./chunk-ITIKTQWJ-0c049f00.js";import"./emotion-react.browser.esm-b737cf90.js";import"./hoist-non-react-statics.cjs-3f8ebaa8.js";import"./chunk-TK6VMDNP-102da1be.js";import"./index-660fa4d3.js";import"./index-c4a63d44.js";import"./index-17e33fe9.js";import"./index-30c8b35e.js";import"./index-938a7d6c.js";import"./chunk-34PD6CUK-c14fe2a1.js";import"./index-7abe7895.js";import"./index-3e7aa64e.js";import"./index-add592e3.js";import"./motion-56319619.js";import"./index-c6b2a32b.js";import"./chunk-ZHMYA64R-c4ed5002.js";import"./chunk-G72KV6MB-be2d631b.js";import"./index-e1b4ee4c.js";import"./chunk-SPIKMR6I-b8250fcf.js";const Ce={title:"Components/Data display/Persona",decorators:[G=>e.jsx(U,{mt:"40px",children:e.jsx(G,{})})]},r={name:"Elliot Alderson",presence:"online",secondaryLabel:"Mr Robot",tertiaryLabel:"Away for lunch"},n=()=>e.jsx(e.Fragment,{children:e.jsxs(s,{spacing:"8",children:[e.jsx(a,{...r,size:"2xs"}),e.jsx(a,{...r,size:"xs"}),e.jsx(a,{...r,size:"sm"}),e.jsx(a,{...r,size:"md"}),e.jsx(a,{...r,size:"lg"}),e.jsx(a,{...r,size:"xl"}),e.jsx(a,{...r,size:"2xl"})]})}),o=()=>e.jsx(e.Fragment,{children:e.jsxs(d,{children:[e.jsx(R,{name:r.name,presence:"away"}),e.jsxs(x,{children:[e.jsx(P,{children:r.name}),e.jsx(j,{children:r.secondaryLabel}),e.jsx(f,{children:r.tertiaryLabel})]})]})}),i=()=>e.jsx(e.Fragment,{children:e.jsx(s,{spacing:"8",children:e.jsx(a,{...r,hideDetails:!0,presence:"offline"})})}),c=()=>e.jsx(e.Fragment,{children:e.jsxs(s,{spacing:"8",children:[e.jsxs(d,{size:"lg",children:[e.jsx(R,{name:r.name,presence:"away",presenceIcon:e.jsx(q,{as:H})}),e.jsxs(x,{children:[e.jsx(P,{children:r.name}),e.jsx(j,{children:r.secondaryLabel}),e.jsx(f,{children:r.tertiaryLabel})]})]}),e.jsx(a,{...r,presenceIcon:e.jsx(J,{size:"0.4em"}),size:"xl",presence:"busy"})]})}),t=()=>e.jsx(e.Fragment,{children:e.jsx(s,{spacing:"8",children:e.jsxs(d,{size:"lg",children:[e.jsx(X,{name:r.name,children:e.jsx(N,{boxSize:"1em",bg:Q.away,children:e.jsx(q,{as:H})})}),e.jsxs(x,{children:[e.jsx(P,{children:r.name}),e.jsx(j,{children:r.secondaryLabel}),e.jsx(f,{children:r.tertiaryLabel})]})]})})}),l=()=>e.jsx(e.Fragment,{children:e.jsx(s,{spacing:"8",children:e.jsx(a,{...r,presence:"busy",secondaryLabel:e.jsxs(e.Fragment,{children:[e.jsx(K,{})," On a call"]})})})}),p=()=>e.jsx(e.Fragment,{children:e.jsxs(s,{spacing:"8",children:[e.jsx(a,{...r,presence:"offline",size:"xs",isOutOfOffice:!0}),e.jsx(a,{...r,presence:"online",isOutOfOffice:!0}),e.jsx(a,{...r,presence:"away",size:"xl",isOutOfOffice:!0})]})}),m=()=>e.jsx(e.Fragment,{children:e.jsx(s,{spacing:"8",children:e.jsx(a,{...r,secondaryLabel:"This is a very long text and should overflow.",presence:"offline",isOutOfOffice:!0,maxW:"200px"})})});var u,b,y;n.parameters={...n.parameters,docs:{...(u=n.parameters)==null?void 0:u.docs,source:{originalSource:`() => <>\r
    <VStack spacing="8">\r
      <Persona {...persona} size="2xs" />\r
\r
      <Persona {...persona} size="xs" />\r
\r
      <Persona {...persona} size="sm" />\r
\r
      <Persona {...persona} size="md" />\r
\r
      <Persona {...persona} size="lg" />\r
\r
      <Persona {...persona} size="xl" />\r
\r
      <Persona {...persona} size="2xl" />\r
    </VStack>\r
  </>`,...(y=(b=n.parameters)==null?void 0:b.docs)==null?void 0:y.source}}};var g,h,L;o.parameters={...o.parameters,docs:{...(g=o.parameters)==null?void 0:g.docs,source:{originalSource:`() => <>\r
    <PersonaContainer>\r
      <PersonaAvatar name={persona.name} presence="away" />\r
      <PersonaDetails>\r
        <PersonaLabel>{persona.name}</PersonaLabel>\r
        <PersonaSecondaryLabel>{persona.secondaryLabel}</PersonaSecondaryLabel>\r
        <PersonaTertiaryLabel>{persona.tertiaryLabel}</PersonaTertiaryLabel>\r
      </PersonaDetails>\r
    </PersonaContainer>\r
  </>`,...(L=(h=o.parameters)==null?void 0:h.docs)==null?void 0:L.source}}};var O,S,z;i.parameters={...i.parameters,docs:{...(O=i.parameters)==null?void 0:O.docs,source:{originalSource:`() => <>\r
    <VStack spacing="8">\r
      <Persona {...persona} hideDetails presence="offline" />\r
    </VStack>\r
  </>`,...(z=(S=i.parameters)==null?void 0:S.docs)==null?void 0:z.source}}};var k,v,C;c.parameters={...c.parameters,docs:{...(k=c.parameters)==null?void 0:k.docs,source:{originalSource:`() => <>\r
    <VStack spacing="8">\r
      <PersonaContainer size="lg">\r
        <PersonaAvatar name={persona.name} presence="away" presenceIcon={<Icon as={FiClock} />} />\r
        <PersonaDetails>\r
          <PersonaLabel>{persona.name}</PersonaLabel>\r
          <PersonaSecondaryLabel>\r
            {persona.secondaryLabel}\r
          </PersonaSecondaryLabel>\r
          <PersonaTertiaryLabel>{persona.tertiaryLabel}</PersonaTertiaryLabel>\r
        </PersonaDetails>\r
      </PersonaContainer>\r
\r
      <Persona {...persona} presenceIcon={<FiMinus size="0.4em" />} size="xl" presence="busy" />\r
    </VStack>\r
  </>`,...(C=(v=c.parameters)==null?void 0:v.docs)==null?void 0:C.source}}};var F,V,A;t.parameters={...t.parameters,docs:{...(F=t.parameters)==null?void 0:F.docs,source:{originalSource:`() => <>\r
    <VStack spacing="8">\r
      <PersonaContainer size="lg">\r
        <Avatar name={persona.name}>\r
          <AvatarBadge boxSize="1em" bg={Presence.away}>\r
            <Icon as={FiClock} />\r
          </AvatarBadge>\r
        </Avatar>\r
        <PersonaDetails>\r
          <PersonaLabel>{persona.name}</PersonaLabel>\r
          <PersonaSecondaryLabel>\r
            {persona.secondaryLabel}\r
          </PersonaSecondaryLabel>\r
          <PersonaTertiaryLabel>{persona.tertiaryLabel}</PersonaTertiaryLabel>\r
        </PersonaDetails>\r
      </PersonaContainer>\r
    </VStack>\r
  </>`,...(A=(V=t.parameters)==null?void 0:V.docs)==null?void 0:A.source}}};var w,D,I;l.parameters={...l.parameters,docs:{...(w=l.parameters)==null?void 0:w.docs,source:{originalSource:`() => <>\r
    <VStack spacing="8">\r
      <Persona {...persona} presence="busy" secondaryLabel={<>\r
            <FiPhone /> On a call\r
          </>} />\r
    </VStack>\r
  </>`,...(I=(D=l.parameters)==null?void 0:D.docs)==null?void 0:I.source}}};var T,B,W;p.parameters={...p.parameters,docs:{...(T=p.parameters)==null?void 0:T.docs,source:{originalSource:`() => <>\r
    <VStack spacing="8">\r
      <Persona {...persona} presence="offline" size="xs" isOutOfOffice />\r
      <Persona {...persona} presence="online" isOutOfOffice />\r
      <Persona {...persona} presence="away" size="xl" isOutOfOffice />\r
    </VStack>\r
  </>`,...(W=(B=p.parameters)==null?void 0:B.docs)==null?void 0:W.source}}};var E,M,_;m.parameters={...m.parameters,docs:{...(E=m.parameters)==null?void 0:E.docs,source:{originalSource:`() => <>\r
    <VStack spacing="8">\r
      <Persona {...persona} secondaryLabel="This is a very long text and should overflow." presence="offline" isOutOfOffice maxW="200px" />\r
    </VStack>\r
  </>`,...(_=(M=m.parameters)==null?void 0:M.docs)==null?void 0:_.source}}};const Fe=["Basic","Composed","HideDetails","BadgeIcon","CustomAvatar","LabelWithIcon","OutOfOffice","Overflow"];export{c as BadgeIcon,n as Basic,o as Composed,t as CustomAvatar,i as HideDetails,l as LabelWithIcon,p as OutOfOffice,m as Overflow,Fe as __namedExportsOrder,Ce as default};
