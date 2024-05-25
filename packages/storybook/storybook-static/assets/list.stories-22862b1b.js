import{f as N,a as Ue,o as _e,j as e,b as C,c as P,u as De,d as J}from"./chunk-ZJJGQIVY-3d316dd5.js";import{r as f}from"./index-76fb7be0.js";import{t as M}from"./chunk-6IC2I3BY-4894ef2d.js";import{p as we,y as We,z as ze,A as ve,h as Oe,B as Ne}from"./index-43bf6e0e.js";import{c as w,d as Pe}from"./chunk-O3SWHQEE-d6839529.js";import{c as Je}from"./chunk-ITIKTQWJ-0c049f00.js";import{u as Me}from"./chunk-AZVKQZKI-601f6f7e.js";import{u as Be}from"./chunk-6B2YUEGK-427119e4.js";import{c as Ve}from"./chunk-MFVQSVQB-c3da265d.js";import{I as V}from"./chunk-2GBDXOMA-c3ee5274.js";import{T as b}from"./chunk-RPO2WXNL-3e4b4cfd.js";import{u as Ge}from"./use-collapse-0d2419e3.js";import{C as Ke}from"./chunk-5MKCW436-7cead567.js";import{T as l}from"./chunk-2OOHT3W5-9ba5a188.js";import{A as k}from"./chunk-V7PAE35Z-f8fb9da9.js";import{u as qe}from"./chunk-7JBTTEVG-4cf2a1fa.js";import{C as y}from"./chunk-YQO7BFFX-e9bdc825.js";import{B as W}from"./chunk-PULVB27S-e893e50c.js";import{B as Ae}from"./chunk-Z6RXEUPO-99f65e88.js";import{C as Re}from"./chunk-RKXMPHPI-1a3f22a5.js";import{C as Xe}from"./chunk-CWVAJCXJ-22427db6.js";import{R as Ye,a as $e}from"./chunk-RDF2AYID-fa24afd3.js";import{S as G}from"./chunk-VTV6N5LE-65c458b7.js";import{B as K}from"./chunk-UVUR7MCU-4e62fe64.js";import{H as Qe}from"./chunk-3ASUQ6PA-012a436b.js";import"./_commonjsHelpers-de833af9.js";import"./iconBase-9679482c.js";import"./emotion-react.browser.esm-b737cf90.js";import"./hoist-non-react-statics.cjs-3f8ebaa8.js";import"./index-7abe7895.js";import"./chunk-R3DH46PF-f0689d26.js";import"./chunk-SPIKMR6I-b8250fcf.js";import"./index-3e7aa64e.js";import"./chunk-7JSBRQFI-041d2b19.js";import"./chunk-KA2477BY-f6a12dd2.js";import"./chunk-6NHXDBFO-987cde81.js";import"./index-c6b2a32b.js";import"./motion-56319619.js";import"./chunk-56K2BSAJ-a2503b05.js";import"./chunk-DFWC5MHP-a7a26ffe.js";import"./index-17e33fe9.js";import"./index-5f92aa2b.js";import"./index-30c8b35e.js";import"./index-979d1106.js";import"./chunk-T6ZDZOLO-8d3f3a64.js";import"./chunk-5PH6ULNP-89f88b5a.js";import"./chunk-ZHMYA64R-c4ed5002.js";import"./chunk-G72KV6MB-be2d631b.js";import"./index-e1b4ee4c.js";function He(t,i){return Array.from((t==null?void 0:t.querySelectorAll(i))??[])}function Ze(t,i){return t.find(s=>s.id===i)}function Ee(t,i){const s=Ze(t,i);return s?t.indexOf(s):-1}function et(t,i,s=!0){let n=Ee(t,i);return n=s?(n+1)%t.length:Math.min(n+1,t.length-1),t[n]}function tt(t,i,s=!0){let n=Ee(t,i);return n===-1?s?t[t.length-1]:null:(n=s?(n-1+t.length)%t.length:Math.max(0,n-1),t[n])}const[rt,z]=Ve("SuiStructuredList"),[st,nt]=Je({name:"StructuredListContext",errorMessage:"useStructuredListContext: `context` is undefined. Seems you forgot to wrap the components in `<StructuredList />`"});function it(t){return He(t,"[role='button']:not([disabled])")}const lt=t=>{const i=Be(),s=f.useRef(null),[n,o]=f.useState(null),a={onBlur:P(t.onBlur,c=>{c.relatedTarget&&(it(s.current).includes(c.relatedTarget)||o(null))})};return{id:t.id??i,containerRef:s,focusId:n,setFocusId:o,listProps:a}},p=N((t,i)=>{const{items:s,children:n,...o}=t,a=Ue("SuiStructuredList",o),c=_e(o);let S;s?S=s.map((x,T)=>f.createElement(d,{...x,key:x.id||T})):S=n;const u={py:2,position:"relative",...a.list},{listProps:g,...m}=lt(t);return e.jsx(st,{value:m,children:e.jsx(rt,{value:a,children:e.jsx(C.ul,{ref:Me(i,m.containerRef),__css:u,...c,...g,className:w("sui-list",t.className),children:S})})})});p.displayName="StructuredList";const j=N((t,i)=>{const{children:s,onClick:n,action:o,role:a="heading",level:c=1,...S}=t,u=z();return e.jsxs(C.li,{ref:i,__css:u.header,onClick:n,...S,className:w("sui-list__header",t.className),children:[e.jsx(C.span,{flex:"1",userSelect:"none",role:a,"aria-level":c,children:s}),o]})});j.displayName="StructuredListHeader";const d=N((t,i)=>{const{onClick:s,href:n,as:o,children:a,isDisabled:c,...S}=t,u=z(),g=!!(s||n),m=g?L:f.Fragment,x=!!g,T={...u.item,...x?{py:0,px:0}:{}},h=g?{onClick:s,href:n,as:o,isDisabled:c}:{},Fe=g?e.jsx(m,{...h,children:a}):a;return e.jsx(C.li,{ref:i,__css:T,...S,className:w("sui-list__item",t.className),children:Fe})});d.displayName="StructuredListItem";const ot=t=>{const{id:i,containerRef:s,focusId:n,setFocusId:o}=nt(),a=`${i}-${Be()}`,c=t.id??a,S=n===c;function u(){return He(s.current,".sui-list__item-button:not([aria-disabled=true])")}return{buttonProps:{id:c,"data-focus":Pe(S),"aria-disabled":t.isDisabled?"true":void 0,tabIndex:t.isDisabled?-1:0,onFocus:P(t.onFocus,()=>{o(c)}),onKeyDown:P(t.onKeyDown,f.useCallback(m=>{const x=u(),T={ArrowUp:()=>{var h;(h=tt(x,c))==null||h.focus()},ArrowDown:()=>{var h;(h=et(x,c))==null||h.focus()},Home:()=>{var h;(h=x[0])==null||h.focus()},End:()=>{var h;(h=x[x.length-1])==null||h.focus()}};T[m.key]&&(m.preventDefault(),T[m.key](m))},[c])),onClick:m=>{var x;if(t.isDisabled){m.preventDefault(),m.stopPropagation();return}(x=t.onClick)==null||x.call(t,m)}}}},L=N((t,i)=>{const{children:s,isDisabled:n,...o}=t,{buttonProps:a}=ot(t),c=z();return e.jsx(C.div,{ref:i,__css:c.button,role:"button",...o,...a,className:w("sui-list__item-button",t.className),children:s})});L.displayName="StructuredListButton";const I=t=>{const{children:i,spacing:s,size:n=5,as:o,...a}=t,S={...z().icon,me:s};let u=i;return!u&&o?u=e.jsx(V,{as:o,role:"presentation",boxSize:n}):f.isValidElement(u)&&u.type===V&&(u=f.cloneElement(u,{boxSize:n})),e.jsx(C.div,{__css:S,...a,className:w("sui-list__item-icon",t.className),children:u})};I.displayName="StructuredListItemIcon";const r=t=>{const{children:i,...s}=t,n=z();return e.jsx(C.div,{__css:n.cell,...s,className:w("sui-list__cell",t.className),children:i})};r.displayName="StructuredListCell";const nr={title:"Components/Data display/StructuredList",component:p,decorators:[t=>e.jsx(Ke,{mt:"40px",children:e.jsx(t,{})})]},v={args:{children:e.jsxs(e.Fragment,{children:[e.jsxs(d,{children:[e.jsxs(r,{children:[e.jsx(l,{fontWeight:"bold",children:"Elliot Alderson"}),e.jsx(l,{fontSize:"sm",color:"muted",children:"Hacker"})]}),e.jsx(r,{children:e.jsx(b,{children:"admin"})})]}),e.jsxs(d,{children:[e.jsxs(r,{children:[e.jsx(l,{fontWeight:"bold",children:"Tyrell Wellick"}),e.jsx(l,{fontSize:"sm",color:"muted",children:"CEO"})]}),e.jsx(r,{children:e.jsx(b,{children:"owner"})})]})]})}},B={args:{children:e.jsxs(e.Fragment,{children:[e.jsxs(d,{children:[e.jsx(r,{width:"14",children:e.jsx(k,{name:"Elliot Alderson",size:"sm"})}),e.jsxs(r,{flex:"1",children:[e.jsx(l,{fontWeight:"bold",children:"Elliot Alderson"}),e.jsx(l,{fontSize:"sm",color:"muted",children:"Hacker"})]}),e.jsx(r,{children:e.jsx(b,{children:"admin"})})]}),e.jsxs(d,{children:[e.jsx(r,{width:"14",children:e.jsx(k,{name:"Tyrell Wellick",size:"sm"})}),e.jsxs(r,{flex:"1",children:[e.jsx(l,{fontWeight:"bold",children:"Tyrell Wellick"}),e.jsx(l,{fontSize:"sm",color:"muted",children:"CEO"})]}),e.jsx(r,{children:e.jsx(b,{children:"owner"})})]})]})}},A={args:{children:e.jsxs(e.Fragment,{children:[e.jsx(j,{children:"Users"}),e.jsxs(d,{children:[e.jsx(r,{width:"14",children:e.jsx(k,{name:"Elliot Alderson",size:"sm"})}),e.jsxs(r,{flex:"1",children:[e.jsx(l,{fontWeight:"bold",children:"Elliot Alderson"}),e.jsx(l,{fontSize:"sm",color:"muted",children:"Hacker"})]}),e.jsx(r,{children:e.jsx(b,{children:"admin"})})]}),e.jsxs(d,{children:[e.jsx(r,{width:"14",children:e.jsx(k,{name:"Tyrell Wellick",size:"sm"})}),e.jsxs(r,{flex:"1",children:[e.jsx(l,{fontWeight:"bold",children:"Tyrell Wellick"}),e.jsx(l,{fontSize:"sm",color:"muted",children:"CEO"})]}),e.jsx(r,{children:e.jsx(b,{children:"owner"})})]})]})}},R={render:()=>{const{isOpen:t,onToggle:i}=qe();return e.jsx(y,{width:"100%",maxW:"320px",children:e.jsx(W,{as:"nav",children:e.jsxs(p,{children:[e.jsxs(d,{as:"a",href:"#home",children:[e.jsx(I,{as:we}),e.jsx(r,{flex:"1",px:"3",py:"2",children:"Home"})]}),e.jsxs(d,{onClick:i,children:[e.jsx(I,{as:We}),e.jsx(r,{flex:"1",px:"3",py:"2",children:"Inbox"}),e.jsx(r,{px:"3",children:e.jsx(Ae,{borderRadius:"full",children:"20"})}),e.jsx(r,{children:t?e.jsx(ze,{}):e.jsx(ve,{})})]}),e.jsx(Re,{in:t,children:e.jsxs(p,{children:[e.jsx(d,{as:"a",href:"#inbox/all",children:e.jsx(r,{ps:"12",py:"2",children:"All messages"})}),e.jsx(d,{as:"a",href:"#inbox/me",children:e.jsx(r,{ps:"12",py:"2",children:"My messages"})})]})})]})})})}},H={render:()=>{const{isOpen:t,getToggleProps:i,getCollapseProps:s}=Ge(),n=De(),o=J("teal.200","teal.500");return e.jsxs(y,{width:"100%",maxW:"320px",height:"400px",children:[e.jsx(W,{as:"nav",p:"2",role:"navigation","aria-label":"Main navigation",children:e.jsxs(p,{p:"0",children:[e.jsx(d,{p:"2px",children:e.jsxs(L,{borderRadius:"md",color:J("teal.500","teal.300"),bg:M(o,.3)(n),_hover:{bg:M(o,.3)(n)},children:[e.jsx(I,{size:"16px",as:we}),e.jsx(r,{fontWeight:"bold",flex:"1",children:"Home"})]})}),e.jsx(d,{p:"2px",children:e.jsxs(L,{borderRadius:"md",children:[e.jsx(I,{size:"16px",as:We}),e.jsx(r,{flex:"1",children:"Inbox"}),e.jsx(r,{children:e.jsx(Ae,{borderRadius:"full",children:"20"})})]})})]})}),e.jsx(W,{as:"nav",role:"navigation","aria-label":"Teams navigation",children:e.jsxs(p,{px:"0",children:[e.jsx(d,{py:"0",children:e.jsx(j,{as:L,borderRadius:"md",py:"1",action:t?e.jsx(ze,{}):e.jsx(ve,{}),...i(),level:1,children:"Teams"})}),e.jsx(d,{px:"2",py:"2px",children:e.jsx(p,{flex:"1",p:"0",children:e.jsxs(Re,{...s(),children:[e.jsx(d,{py:"2px",px:"0",children:e.jsx(L,{py:"2",px:"3",borderRadius:"md",as:"a",href:"#sales",children:e.jsx(r,{children:"Sales"})})}),e.jsx(d,{py:"2px",px:"0",children:e.jsx(L,{py:"2",px:"3",borderRadius:"md",as:"a",href:"#support",children:e.jsx(r,{children:"Support"})})})]})})})]})})]})}},E={render:()=>e.jsx(y,{width:"320px",children:e.jsx(p,{children:["Release V2","Learn Saas UI"].map(t=>{const[i,s]=f.useState(!1);return e.jsxs(d,{onClick:()=>s(!i),onKeyDown:n=>{(n.key==="Enter"||n.key===" ")&&s(!i)},children:[e.jsx(r,{display:"flex",alignItems:"center",children:e.jsx(Xe,{isChecked:i})}),e.jsx(r,{flex:"1",children:e.jsx(l,{fontWeight:"medium",children:t})})]},t)})})})},dt=[{id:1,title:"Red T-Shirt",description:"A bright and bold red t-shirt"},{id:2,title:"Blue T-Shirt",description:"A cool and calming blue t-shirt"},{id:3,title:"Green T-Shirt",description:"A fresh and lively green t-shirt"}],F={render:()=>{const[t,i]=f.useState(1);return e.jsx(W,{width:"400px",children:e.jsx(Ye,{name:"variant",children:e.jsx(p,{children:dt.map(s=>{const n=t===s.id;return e.jsxs(d,{onClick:()=>i(s.id),borderRadius:"md",borderWidth:"1px",mb:"2","data-checked":n?!0:void 0,_checked:{borderColor:"primary.500"},children:[e.jsxs(r,{flex:"1",children:[e.jsx(l,{fontWeight:"medium",children:s.title}),e.jsx(l,{color:"muted",children:s.description})]}),e.jsx(r,{alignSelf:"flex-start",mt:"1",children:e.jsx($e,{isChecked:n})})]},s.id)})})})})}},U={render:()=>e.jsx(y,{width:"100%",maxW:"320px",children:e.jsxs(p,{children:[e.jsx(j,{children:"Notifications"}),e.jsxs(d,{children:[e.jsx(I,{as:Oe,size:"4"}),e.jsx(r,{flex:"1",children:"Email"}),e.jsx(r,{children:e.jsx(G,{"aria-label":"Email"})})]}),e.jsxs(d,{children:[e.jsx(I,{as:Ne,size:"4"}),e.jsx(r,{flex:"1",children:"Chat"}),e.jsx(r,{children:e.jsx(G,{"aria-label":"Chat"})})]})]})})},_={render:()=>e.jsx(y,{width:"320px",children:e.jsxs(p,{children:[e.jsx(j,{children:"Inbox"}),e.jsxs(d,{href:"#",children:[e.jsx(r,{width:"14",children:e.jsx(k,{name:"Elliot Alderson",size:"sm"})}),e.jsxs(r,{flex:"1",children:[e.jsx(l,{fontWeight:"bold",children:"A bug is never just a mistake."}),e.jsxs(l,{fontSize:"sm",color:"muted",noOfLines:2,children:[e.jsx(l,{as:"span",color:"app-text",children:"Elliot Alderson"})," ","— It represents something bigger. An error of thinking that makes you who you are."]})]})]}),e.jsxs(d,{href:"#",children:[e.jsx(r,{width:"14",children:e.jsx(k,{name:"Tyrell Wellick",size:"sm"})}),e.jsxs(r,{flex:"1",children:[e.jsx(l,{fontWeight:"bold",children:"Hi"}),e.jsxs(l,{fontSize:"sm",color:"muted",noOfLines:2,children:[e.jsx(l,{as:"span",color:"app-text",children:"Tyrell Wellick"})," ","— Unfortunately, we’re all human. Except me, of course."]})]})]})]})})},D={render:()=>{const t=[{id:"SUI-123",title:"Research product trends",date:"10 Jan",labels:["research","trends"],status:"in-progress"},{id:"SUI-133",title:"Develop user interface",date:"3 Feb",labels:["UI","development"],status:"in-progress"},{id:"SUI-134",title:"Create user experience flows",date:"5 Feb",labels:["UX","flows"],status:"in-progress"},{id:"SUI-135",title:"Select materials for production",date:"7 Feb",labels:["materials","production"],status:"in-progress"},{id:"SUI-136",title:"Work with engineers on product specifications",date:"9 Feb",labels:["engineering","specifications"],status:"in-progress"},{id:"SUI-137",title:"Conduct user research",date:"11 Feb",labels:["user research","testing"],status:"in-progress"},{id:"SUI-124",title:"Brainstorm product ideas",date:"12 Jan",labels:["brainstorming","ideas"],status:"todo"},{id:"SUI-125",title:"Create initial sketches",date:"15 Jan",labels:["sketches","design"],status:"todo"},{id:"SUI-126",title:"Get feedback on sketches",date:"17 Jan",labels:["feedback","design"],status:"todo"},{id:"SUI-127",title:"Refine and finalize design",date:"20 Jan",labels:["design","refinement"],status:"todo"},{id:"SUI-128",title:"Create 3D model",date:"23 Jan",labels:["3D","model"],status:"todo"},{id:"SUI-129",title:"Test and iterate prototype",date:"25 Jan",labels:["testing","prototype"],status:"todo"},{id:"SUI-130",title:"Refine prototype based on feedback",date:"27 Jan",labels:["feedback","iteration"],status:"todo"},{id:"SUI-131",title:"Create final product",date:"30 Jan",labels:["final","product"],status:"todo"},{id:"SUI-132",title:"Test final product before launch",date:"1 Feb",labels:["testing","final"],status:"todo"}],i=t.filter(({status:o})=>o==="in-progress"),s=t.filter(({status:o})=>o==="todo"),n=o=>e.jsxs(d,{href:"#",borderBottom:"1px",borderColor:"gray.100",fontSize:"sm",_dark:{borderColor:"whiteAlpha.100"},children:[e.jsx(r,{color:"muted",children:o.id}),e.jsx(r,{flex:"1",children:e.jsx(l,{noOfLines:1,children:o.title})}),e.jsx(r,{color:"muted",as:Qe,children:o.labels.map(a=>e.jsx(b,{bg:"none",border:"1px solid",borderColor:"blackAlpha.100",color:"muted",rounded:"full",_dark:{borderColor:"whiteAlpha.100"},children:a},a))}),e.jsx(r,{color:"muted",children:o.date})]});return e.jsx(y,{width:"100%",overflowY:"auto",maxH:"240px",children:e.jsxs(p,{py:"0",children:[e.jsxs(j,{fontWeight:"normal",bg:"gray.200",_dark:{bg:"gray.700"},color:"app-text",position:"sticky",top:"0",zIndex:"popover",children:["In Progress"," ",e.jsx(l,{as:"span",color:"muted",children:i.length})]}),i.map(n),e.jsxs(j,{fontWeight:"normal",bg:"gray.200",_dark:{bg:"gray.700"},color:"app-text",position:"sticky",top:"0",zIndex:"popover",children:["Todo"," ",e.jsx(l,{as:"span",color:"muted",children:s.length})]}),s.map(n)]})})}},O={render:()=>{const t=()=>console.log("Clicked list item!");return e.jsx(W,{width:"full",minH:"400px",height:"full",display:"flex",justifyContent:"center",alignItems:"center",children:e.jsxs(y,{width:"320px",children:[e.jsx(K,{mt:"4",children:"Focus Target Before"}),e.jsxs(p,{children:[e.jsx(d,{onClick:t,children:e.jsxs(r,{flex:"1",children:[e.jsx(l,{fontWeight:"bold",children:"Elliot Alderson"}),e.jsx(l,{fontSize:"sm",color:"muted",children:"Hacker"})]})}),e.jsx(d,{onClick:t,children:e.jsxs(r,{flex:"1",children:[e.jsx(l,{fontWeight:"bold",children:"Tyrell Wellick"}),e.jsx(l,{fontSize:"sm",color:"muted",children:"CEO"})]})}),e.jsx(d,{isDisabled:!0,onClick:t,children:e.jsxs(r,{flex:"1",children:[e.jsx(l,{fontWeight:"bold",children:"Tyrell Wellick"}),e.jsx(l,{fontSize:"sm",color:"muted",children:"CEO"})]})})]}),e.jsx(K,{children:"Focus Target Before"})]})})}};var q,X,Y;v.parameters={...v.parameters,docs:{...(q=v.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    children: <>\r
        <StructuredListItem>\r
          <StructuredListCell>\r
            <Text fontWeight="bold">Elliot Alderson</Text>\r
            <Text fontSize="sm" color="muted">\r
              Hacker\r
            </Text>\r
          </StructuredListCell>\r
          <StructuredListCell>\r
            <Tag>admin</Tag>\r
          </StructuredListCell>\r
        </StructuredListItem>\r
        <StructuredListItem>\r
          <StructuredListCell>\r
            <Text fontWeight="bold">Tyrell Wellick</Text>\r
            <Text fontSize="sm" color="muted">\r
              CEO\r
            </Text>\r
          </StructuredListCell>\r
          <StructuredListCell>\r
            <Tag>owner</Tag>\r
          </StructuredListCell>\r
        </StructuredListItem>\r
      </>
  }
}`,...(Y=(X=v.parameters)==null?void 0:X.docs)==null?void 0:Y.source}}};var $,Q,Z;B.parameters={...B.parameters,docs:{...($=B.parameters)==null?void 0:$.docs,source:{originalSource:`{
  args: {
    children: <>\r
        <StructuredListItem>\r
          <StructuredListCell width="14">\r
            <Avatar name="Elliot Alderson" size="sm" />\r
          </StructuredListCell>\r
          <StructuredListCell flex="1">\r
            <Text fontWeight="bold">Elliot Alderson</Text>\r
            <Text fontSize="sm" color="muted">\r
              Hacker\r
            </Text>\r
          </StructuredListCell>\r
          <StructuredListCell>\r
            <Tag>admin</Tag>\r
          </StructuredListCell>\r
        </StructuredListItem>\r
        <StructuredListItem>\r
          <StructuredListCell width="14">\r
            <Avatar name="Tyrell Wellick" size="sm" />\r
          </StructuredListCell>\r
          <StructuredListCell flex="1">\r
            <Text fontWeight="bold">Tyrell Wellick</Text>\r
            <Text fontSize="sm" color="muted">\r
              CEO\r
            </Text>\r
          </StructuredListCell>\r
          <StructuredListCell>\r
            <Tag>owner</Tag>\r
          </StructuredListCell>\r
        </StructuredListItem>\r
      </>
  }
}`,...(Z=(Q=B.parameters)==null?void 0:Q.docs)==null?void 0:Z.source}}};var ee,te,re;A.parameters={...A.parameters,docs:{...(ee=A.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  args: {
    children: <>\r
        <StructuredListHeader>Users</StructuredListHeader>\r
        <StructuredListItem>\r
          <StructuredListCell width="14">\r
            <Avatar name="Elliot Alderson" size="sm" />\r
          </StructuredListCell>\r
          <StructuredListCell flex="1">\r
            <Text fontWeight="bold">Elliot Alderson</Text>\r
            <Text fontSize="sm" color="muted">\r
              Hacker\r
            </Text>\r
          </StructuredListCell>\r
          <StructuredListCell>\r
            <Tag>admin</Tag>\r
          </StructuredListCell>\r
        </StructuredListItem>\r
        <StructuredListItem>\r
          <StructuredListCell width="14">\r
            <Avatar name="Tyrell Wellick" size="sm" />\r
          </StructuredListCell>\r
          <StructuredListCell flex="1">\r
            <Text fontWeight="bold">Tyrell Wellick</Text>\r
            <Text fontSize="sm" color="muted">\r
              CEO\r
            </Text>\r
          </StructuredListCell>\r
          <StructuredListCell>\r
            <Tag>owner</Tag>\r
          </StructuredListCell>\r
        </StructuredListItem>\r
      </>
  }
}`,...(re=(te=A.parameters)==null?void 0:te.docs)==null?void 0:re.source}}};var se,ne,ie;R.parameters={...R.parameters,docs:{...(se=R.parameters)==null?void 0:se.docs,source:{originalSource:`{
  render: () => {
    const {
      isOpen,
      onToggle
    } = useDisclosure();
    return <Card width="100%" maxW="320px">\r
        <Box as="nav">\r
          <StructuredList>\r
            <StructuredListItem as="a" href="#home">\r
              <StructuredListIcon as={FiHome} />\r
              <StructuredListCell flex="1" px="3" py="2">\r
                Home\r
              </StructuredListCell>\r
            </StructuredListItem>\r
            <StructuredListItem onClick={onToggle}>\r
              <StructuredListIcon as={FiInbox} />\r
              <StructuredListCell flex="1" px="3" py="2">\r
                Inbox\r
              </StructuredListCell>\r
              <StructuredListCell px="3">\r
                <Badge borderRadius="full">20</Badge>\r
              </StructuredListCell>\r
              <StructuredListCell>\r
                {isOpen ? <FiChevronDown /> : <FiChevronRight />}\r
              </StructuredListCell>\r
            </StructuredListItem>\r
            <Collapse in={isOpen}>\r
              <StructuredList>\r
                <StructuredListItem as="a" href="#inbox/all">\r
                  <StructuredListCell ps="12" py="2">\r
                    All messages\r
                  </StructuredListCell>\r
                </StructuredListItem>\r
                <StructuredListItem as="a" href="#inbox/me">\r
                  <StructuredListCell ps="12" py="2">\r
                    My messages\r
                  </StructuredListCell>\r
                </StructuredListItem>\r
              </StructuredList>\r
            </Collapse>\r
          </StructuredList>\r
        </Box>\r
      </Card>;
  }
}`,...(ie=(ne=R.parameters)==null?void 0:ne.docs)==null?void 0:ie.source}}};var le,oe,de;H.parameters={...H.parameters,docs:{...(le=H.parameters)==null?void 0:le.docs,source:{originalSource:`{
  render: () => {
    const {
      isOpen,
      getToggleProps,
      getCollapseProps
    } = useCollapse();
    const theme = useTheme();
    const bg = useColorModeValue('teal.200', 'teal.500');
    return <Card width="100%" maxW="320px" height="400px">\r
        <Box as="nav" p="2" role="navigation" aria-label="Main navigation">\r
          <StructuredList p="0">\r
            <StructuredListItem p="2px">\r
              <StructuredListButton borderRadius="md" color={useColorModeValue('teal.500', 'teal.300')} bg={transparentize(bg, 0.3)(theme)} _hover={{
              bg: transparentize(bg, 0.3)(theme)
            }}>\r
                <StructuredListIcon size="16px" as={FiHome} />\r
                <StructuredListCell fontWeight="bold" flex="1">\r
                  Home\r
                </StructuredListCell>\r
              </StructuredListButton>\r
            </StructuredListItem>\r
            <StructuredListItem p="2px">\r
              <StructuredListButton borderRadius="md">\r
                <StructuredListIcon size="16px" as={FiInbox} />\r
                <StructuredListCell flex="1">Inbox</StructuredListCell>\r
                <StructuredListCell>\r
                  <Badge borderRadius="full">20</Badge>\r
                </StructuredListCell>\r
              </StructuredListButton>\r
            </StructuredListItem>\r
          </StructuredList>\r
        </Box>\r
        <Box as="nav" role="navigation" aria-label="Teams navigation">\r
          <StructuredList px="0">\r
            <StructuredListItem py="0">\r
              <StructuredListHeader as={StructuredListButton} borderRadius="md" py="1" action={isOpen ? <FiChevronDown /> : <FiChevronRight />} {...getToggleProps()} level={1}>\r
                Teams\r
              </StructuredListHeader>\r
            </StructuredListItem>\r
            <StructuredListItem px="2" py="2px">\r
              <StructuredList flex="1" p="0">\r
                <Collapse {...getCollapseProps()}>\r
                  <StructuredListItem py="2px" px="0">\r
                    <StructuredListButton py="2" px="3" borderRadius="md" as="a" href="#sales">\r
                      <StructuredListCell>Sales</StructuredListCell>\r
                    </StructuredListButton>\r
                  </StructuredListItem>\r
                  <StructuredListItem py="2px" px="0">\r
                    <StructuredListButton py="2" px="3" borderRadius="md" as="a" href="#support">\r
                      <StructuredListCell>Support</StructuredListCell>\r
                    </StructuredListButton>\r
                  </StructuredListItem>\r
                </Collapse>\r
              </StructuredList>\r
            </StructuredListItem>\r
          </StructuredList>\r
        </Box>\r
      </Card>;
  }
}`,...(de=(oe=H.parameters)==null?void 0:oe.docs)==null?void 0:de.source}}};var ae,ce,ue;E.parameters={...E.parameters,docs:{...(ae=E.parameters)==null?void 0:ae.docs,source:{originalSource:`{
  render: () => {
    return <Card width="320px">\r
        <StructuredList>\r
          {['Release V2', 'Learn Saas UI'].map(todo => {
          const [checked, setChecked] = React.useState(false);
          return <StructuredListItem key={todo} onClick={() => setChecked(!checked)} onKeyDown={e => {
            if (e.key === 'Enter' || e.key === ' ') {
              setChecked(!checked);
            }
          }}>\r
                <StructuredListCell display="flex" alignItems="center">\r
                  <Checkbox isChecked={checked} />\r
                </StructuredListCell>\r
                <StructuredListCell flex="1">\r
                  <Text fontWeight="medium">{todo}</Text>\r
                </StructuredListCell>\r
              </StructuredListItem>;
        })}\r
        </StructuredList>\r
      </Card>;
  }
}`,...(ue=(ce=E.parameters)==null?void 0:ce.docs)==null?void 0:ue.source}}};var me,xe,he;F.parameters={...F.parameters,docs:{...(me=F.parameters)==null?void 0:me.docs,source:{originalSource:`{
  render: () => {
    const [checked, setChecked] = React.useState(1);
    return <Box width="400px">\r
        <RadioGroup name="variant">\r
          <StructuredList>\r
            {tshirtVariants.map(variant => {
            const isChecked = checked === variant.id;
            return <StructuredListItem key={variant.id} onClick={() => setChecked(variant.id)} borderRadius="md" borderWidth="1px" mb="2" data-checked={isChecked ? true : undefined} _checked={{
              borderColor: 'primary.500'
            }}>\r
                  <StructuredListCell flex="1">\r
                    <Text fontWeight="medium">{variant.title}</Text>\r
                    <Text color="muted">{variant.description}</Text>\r
                  </StructuredListCell>\r
                  <StructuredListCell alignSelf="flex-start" mt="1">\r
                    <Radio isChecked={isChecked} />\r
                  </StructuredListCell>\r
                </StructuredListItem>;
          })}\r
          </StructuredList>\r
        </RadioGroup>\r
      </Box>;
  }
}`,...(he=(xe=F.parameters)==null?void 0:xe.docs)==null?void 0:he.source}}};var pe,Se,fe;U.parameters={...U.parameters,docs:{...(pe=U.parameters)==null?void 0:pe.docs,source:{originalSource:`{
  render: () => {
    return <Card width="100%" maxW="320px">\r
        <StructuredList>\r
          <StructuredListHeader>Notifications</StructuredListHeader>\r
          <StructuredListItem>\r
            <StructuredListIcon as={FiMail} size="4" />\r
            <StructuredListCell flex="1">Email</StructuredListCell>\r
            <StructuredListCell>\r
              <Switch aria-label="Email" />\r
            </StructuredListCell>\r
          </StructuredListItem>\r
          <StructuredListItem>\r
            <StructuredListIcon as={FiMessageSquare} size="4" />\r
            <StructuredListCell flex="1">Chat</StructuredListCell>\r
            <StructuredListCell>\r
              <Switch aria-label="Chat" />\r
            </StructuredListCell>\r
          </StructuredListItem>\r
        </StructuredList>\r
      </Card>;
  }
}`,...(fe=(Se=U.parameters)==null?void 0:Se.docs)==null?void 0:fe.source}}};var ge,Le,Ce;_.parameters={..._.parameters,docs:{...(ge=_.parameters)==null?void 0:ge.docs,source:{originalSource:`{
  render: () => {
    return <Card width="320px">\r
        <StructuredList>\r
          <StructuredListHeader>Inbox</StructuredListHeader>\r
          <StructuredListItem href="#">\r
            <StructuredListCell width="14">\r
              <Avatar name="Elliot Alderson" size="sm" />\r
            </StructuredListCell>\r
            <StructuredListCell flex="1">\r
              <Text fontWeight="bold">A bug is never just a mistake.</Text>\r
              <Text fontSize="sm" color="muted" noOfLines={2}>\r
                <Text as="span" color="app-text">\r
                  Elliot Alderson\r
                </Text>{' '}\r
                — It represents something bigger. An error of thinking that\r
                makes you who you are.\r
              </Text>\r
            </StructuredListCell>\r
          </StructuredListItem>\r
          <StructuredListItem href="#">\r
            <StructuredListCell width="14">\r
              <Avatar name="Tyrell Wellick" size="sm" />\r
            </StructuredListCell>\r
            <StructuredListCell flex="1">\r
              <Text fontWeight="bold">Hi</Text>\r
              <Text fontSize="sm" color="muted" noOfLines={2}>\r
                <Text as="span" color="app-text">\r
                  Tyrell Wellick\r
                </Text>{' '}\r
                — Unfortunately, we’re all human. Except me, of course.\r
              </Text>\r
            </StructuredListCell>\r
          </StructuredListItem>\r
        </StructuredList>\r
      </Card>;
  }
}`,...(Ce=(Le=_.parameters)==null?void 0:Le.docs)==null?void 0:Ce.source}}};var be,je,Ie;D.parameters={...D.parameters,docs:{...(be=D.parameters)==null?void 0:be.docs,source:{originalSource:`{
  render: () => {
    const issues = [{
      id: 'SUI-123',
      title: 'Research product trends',
      date: '10 Jan',
      labels: ['research', 'trends'],
      status: 'in-progress'
    }, {
      id: 'SUI-133',
      title: 'Develop user interface',
      date: '3 Feb',
      labels: ['UI', 'development'],
      status: 'in-progress'
    }, {
      id: 'SUI-134',
      title: 'Create user experience flows',
      date: '5 Feb',
      labels: ['UX', 'flows'],
      status: 'in-progress'
    }, {
      id: 'SUI-135',
      title: 'Select materials for production',
      date: '7 Feb',
      labels: ['materials', 'production'],
      status: 'in-progress'
    }, {
      id: 'SUI-136',
      title: 'Work with engineers on product specifications',
      date: '9 Feb',
      labels: ['engineering', 'specifications'],
      status: 'in-progress'
    }, {
      id: 'SUI-137',
      title: 'Conduct user research',
      date: '11 Feb',
      labels: ['user research', 'testing'],
      status: 'in-progress'
    }, {
      id: 'SUI-124',
      title: 'Brainstorm product ideas',
      date: '12 Jan',
      labels: ['brainstorming', 'ideas'],
      status: 'todo'
    }, {
      id: 'SUI-125',
      title: 'Create initial sketches',
      date: '15 Jan',
      labels: ['sketches', 'design'],
      status: 'todo'
    }, {
      id: 'SUI-126',
      title: 'Get feedback on sketches',
      date: '17 Jan',
      labels: ['feedback', 'design'],
      status: 'todo'
    }, {
      id: 'SUI-127',
      title: 'Refine and finalize design',
      date: '20 Jan',
      labels: ['design', 'refinement'],
      status: 'todo'
    }, {
      id: 'SUI-128',
      title: 'Create 3D model',
      date: '23 Jan',
      labels: ['3D', 'model'],
      status: 'todo'
    }, {
      id: 'SUI-129',
      title: 'Test and iterate prototype',
      date: '25 Jan',
      labels: ['testing', 'prototype'],
      status: 'todo'
    }, {
      id: 'SUI-130',
      title: 'Refine prototype based on feedback',
      date: '27 Jan',
      labels: ['feedback', 'iteration'],
      status: 'todo'
    }, {
      id: 'SUI-131',
      title: 'Create final product',
      date: '30 Jan',
      labels: ['final', 'product'],
      status: 'todo'
    }, {
      id: 'SUI-132',
      title: 'Test final product before launch',
      date: '1 Feb',
      labels: ['testing', 'final'],
      status: 'todo'
    }];
    const inProgress = issues.filter(({
      status
    }) => status === 'in-progress');
    const todo = issues.filter(({
      status
    }) => status === 'todo');
    const renderIssue = (issue: any) => {
      return <StructuredListItem href="#" borderBottom="1px" borderColor="gray.100" fontSize="sm" _dark={{
        borderColor: 'whiteAlpha.100'
      }}>\r
          <StructuredListCell color="muted">{issue.id}</StructuredListCell>\r
          <StructuredListCell flex="1">\r
            <Text noOfLines={1}>{issue.title}</Text>\r
          </StructuredListCell>\r
          <StructuredListCell color="muted" as={HStack}>\r
            {issue.labels.map((label: any) => <Tag key={label} bg="none" border="1px solid" borderColor="blackAlpha.100" color="muted" rounded="full" _dark={{
            borderColor: 'whiteAlpha.100'
          }}>\r
                {label}\r
              </Tag>)}\r
          </StructuredListCell>\r
          <StructuredListCell color="muted">{issue.date}</StructuredListCell>\r
        </StructuredListItem>;
    };
    return <Card width="100%" overflowY="auto" maxH="240px">\r
        <StructuredList py="0">\r
          <StructuredListHeader fontWeight="normal" bg="gray.200" _dark={{
          bg: 'gray.700'
        }} color="app-text" position="sticky" top="0" zIndex="popover">\r
            In Progress{' '}\r
            <Text as="span" color="muted">\r
              {inProgress.length}\r
            </Text>\r
          </StructuredListHeader>\r
          {inProgress.map(renderIssue)}\r
          <StructuredListHeader fontWeight="normal" bg="gray.200" _dark={{
          bg: 'gray.700'
        }} color="app-text" position="sticky" top="0" zIndex="popover">\r
            Todo{' '}\r
            <Text as="span" color="muted">\r
              {todo.length}\r
            </Text>\r
          </StructuredListHeader>\r
          {todo.map(renderIssue)}\r
        </StructuredList>\r
      </Card>;
  }
}`,...(Ie=(je=D.parameters)==null?void 0:je.docs)==null?void 0:Ie.source}}};var ye,Te,ke;O.parameters={...O.parameters,docs:{...(ye=O.parameters)==null?void 0:ye.docs,source:{originalSource:`{
  render: () => {
    const onClick = () => console.log('Clicked list item!');
    return <Box width="full" minH="400px" height="full" display="flex" justifyContent="center" alignItems="center">\r
        <Card width="320px">\r
          <Button mt="4">Focus Target Before</Button>\r
\r
          <StructuredList>\r
            <StructuredListItem onClick={onClick}>\r
              <StructuredListCell flex="1">\r
                <Text fontWeight="bold">Elliot Alderson</Text>\r
                <Text fontSize="sm" color="muted">\r
                  Hacker\r
                </Text>\r
              </StructuredListCell>\r
            </StructuredListItem>\r
            <StructuredListItem onClick={onClick}>\r
              <StructuredListCell flex="1">\r
                <Text fontWeight="bold">Tyrell Wellick</Text>\r
                <Text fontSize="sm" color="muted">\r
                  CEO\r
                </Text>\r
              </StructuredListCell>\r
            </StructuredListItem>\r
            <StructuredListItem isDisabled onClick={onClick}>\r
              <StructuredListCell flex="1">\r
                <Text fontWeight="bold">Tyrell Wellick</Text>\r
                <Text fontSize="sm" color="muted">\r
                  CEO\r
                </Text>\r
              </StructuredListCell>\r
            </StructuredListItem>\r
          </StructuredList>\r
          <Button>Focus Target Before</Button>\r
        </Card>\r
      </Box>;
  }
}`,...(ke=(Te=O.parameters)==null?void 0:Te.docs)==null?void 0:ke.source}}};const ir=["Basic","WithIcons","WithHeader","Nested","CustomSTyles","WithCheckbox","WithRadio","WithSwitch","TruncatedText","StickyHeaders","KeyboardNavigation"];export{v as Basic,H as CustomSTyles,O as KeyboardNavigation,R as Nested,D as StickyHeaders,_ as TruncatedText,E as WithCheckbox,A as WithHeader,B as WithIcons,F as WithRadio,U as WithSwitch,ir as __namedExportsOrder,nr as default};
