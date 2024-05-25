import{i as J,r as b,j as n,f as K,b as Q,c as Z}from"./chunk-ZJJGQIVY-3d316dd5.js";import{r as m}from"./index-76fb7be0.js";import{c as ee}from"./chunk-ITIKTQWJ-0c049f00.js";import{$ as ne}from"./import-7ec71565.js";import{u as X}from"./chunk-KA2477BY-f6a12dd2.js";import{g as Y}from"./chunk-O3SWHQEE-d6839529.js";import{M as te,u as re}from"./chunk-HB6KBUMZ-d43cc10c.js";import{M as oe}from"./chunk-6MF6NSK4-d26e88d8.js";import{u as se}from"./use-snackbar-00465ce5.js";import{M as ie}from"./chunk-H43S3DLB-0d0ae878.js";import{M as l}from"./chunk-5TWLKMYI-2d3e107a.js";import{M as k,a as E}from"./chunk-B3RAGXFV-fa0ff449.js";import{C as ue}from"./chunk-5MKCW436-7cead567.js";import{C as f}from"./chunk-FAWTVNS3-f4d68a92.js";import{S as ce}from"./chunk-ZHMYA64R-c4ed5002.js";import"./_commonjsHelpers-de833af9.js";import"./import-5516e61c.js";import"./clsx-0839fdbe.js";import"./index-17e33fe9.js";import"./index-514c0e80.js";import"./index-7abe7895.js";import"./index-30c8b35e.js";import"./index-6843c920.js";import"./index-660fa4d3.js";import"./index-938a7d6c.js";import"./index-3e7aa64e.js";import"./index-5f92aa2b.js";import"./index-c4a63d44.js";import"./index-e1b4ee4c.js";import"./motion-56319619.js";import"./chunk-3Y4YXCR2-d2baf078.js";import"./chunk-3KCBMPN5-38b7cfb7.js";import"./chunk-2GBDXOMA-c3ee5274.js";import"./chunk-5PH6ULNP-89f88b5a.js";import"./emotion-react.browser.esm-b737cf90.js";import"./hoist-non-react-statics.cjs-3f8ebaa8.js";import"./chunk-37N6GCLA-d6b68ca5.js";import"./chunk-34PD6CUK-c14fe2a1.js";import"./index-add592e3.js";import"./index-c6b2a32b.js";import"./chunk-DA7QIPTJ-83b15474.js";import"./chunk-T6ZDZOLO-8d3f3a64.js";import"./chunk-PTXXWAJU-4600a0a7.js";import"./chunk-G72KV6MB-be2d631b.js";function ae(e,t){if(e!=null){if(J(e)){e(t);return}try{e.current=t}catch{throw new Error(`Cannot assign value '${t}' to ref '${e}'`)}}}function le(...e){return t=>{e.forEach(r=>ae(r,t))}}function de(e,t,r,o){const u=X(t);return m.useEffect(()=>{var c;const i=(c=b(r))!=null?c:document;if(t)return i.addEventListener(e,u,o),()=>{i.removeEventListener(e,u,o)}},[e,r,o,u,t]),()=>{var c;((c=b(r))!=null?c:document).removeEventListener(e,u,o)}}function me(e){const{ref:t,handler:r,enabled:o=!0}=e,u=X(r),i=m.useRef({isPointerDown:!1,ignoreEmulatedMouseEvents:!1}).current;m.useEffect(()=>{if(!o)return;const p=a=>{R(a,t)&&(i.isPointerDown=!0)},x=a=>{if(i.ignoreEmulatedMouseEvents){i.ignoreEmulatedMouseEvents=!1;return}i.isPointerDown&&r&&R(a,t)&&(i.isPointerDown=!1,u(a))},d=a=>{i.ignoreEmulatedMouseEvents=!0,r&&i.isPointerDown&&R(a,t)&&(i.isPointerDown=!1,u(a))},s=Y(t.current);return s.addEventListener("mousedown",p,!0),s.addEventListener("mouseup",x,!0),s.addEventListener("touchstart",p,!0),s.addEventListener("touchend",d,!0),()=>{s.removeEventListener("mousedown",p,!0),s.removeEventListener("mouseup",x,!0),s.removeEventListener("touchstart",p,!0),s.removeEventListener("touchend",d,!0)}},[r,t,u,i,o])}function R(e,t){var r;const o=e.target;return o&&!Y(o).contains(o)?!1:!((r=t.current)!=null&&r.contains(o))}function pe(e,t="client"){const r=e.touches[0]||e.changedTouches[0];return{x:r[`${t}X`],y:r[`${t}Y`]}}function he(e,t="client"){return{x:e[`${t}X`],y:e[`${t}Y`]}}var xe=e=>"touches"in e&&e.touches.length>0;function Me(e,t="client"){return xe(e)?pe(e,t):he(e,t)}const[Ce,q]=ee({name:"UseContextMenuContext",strict:!1}),ge=e=>{const{closeOnBlur:t=!0}=e,[r,o]=m.useState(!1),[u,c]=m.useState({x:0,y:0}),i=m.useRef(null),p=m.useRef(null);de("contextmenu",s=>{var a;!((a=i.current)!=null&&a.contains(s.target))&&s.target!==i.current?o(!1):(s.preventDefault(),s.stopPropagation())}),me({enabled:r&&t,ref:p,handler:s=>{var a,L;!(s.button===2&&((a=i.current)!=null&&a.contains(s.target)))&&((L=p.current)==null?void 0:L.parentElement)!==s.target&&d()}});const x=m.useCallback(s=>{const a=Me(s);c(a),o(!0)},[]),d=m.useCallback(()=>{var s;(s=e.onClose)==null||s.call(e),o(!1)},[e.onClose,o]);return{isOpen:r,anchor:u,triggerRef:i,menuRef:p,onClose:d,onOpen:x}},M=e=>{const{children:t,...r}=e,o=ge(e),u=m.useMemo(()=>o,[o]),{isOpen:c,onClose:i}=u;return n.jsx(te,{gutter:0,...r,isOpen:c,onClose:i,closeOnBlur:!1,children:p=>n.jsx(Ce,{value:u,children:b(t,p)})})};M.displayName="ContextMenu";const w=(e=0,t=0)=>()=>({width:0,height:0,top:t,left:e,right:e,bottom:t}),fe=()=>typeof window!==void 0&&window.matchMedia("(hover: none)").matches,je=(e,t)=>{const{triggerRef:r,onOpen:o,onClose:u,anchor:c}=q(),i=re(),{popper:p,openAndFocusFirstItem:x}=i,{longPressProps:d}=ne({isDisabled:e.longPressDisabled,accessibilityDescription:"Long press to open context menu",onLongPressStart:h=>{u()},onLongPress:h=>{h.pointerType!=="mouse"&&h.type==="longpress"&&(o(h),x())}}),s=m.useRef({getBoundingClientRect:w(c.x,c.y)});return m.useEffect(()=>{p.referenceRef(s.current)},[]),m.useEffect(()=>{s.current.getBoundingClientRect=w(c.x,c.y),i.popper.update()},[c]),{triggerProps:{...d,onPointerDown:h=>{var j;h.pointerType!=="mouse"&&((j=d.onPointerDown)==null||j.call(d,h))},onMouseDown:h=>{var j;fe()&&((j=d.onMouseDown)==null||j.call(d,h))},onContextMenu:Z(h=>{h.preventDefault(),o(h),x()},e.onContextMenu),ref:le(r,t)}}},C=K((e,t)=>{const{children:r,longPressDisabled:o,...u}=e,{triggerProps:c}=je(e,t);return n.jsx(Q.span,{...u,sx:{WebkitTouchCallout:"none"},...c,children:r})});C.displayName="ContextMenuTrigger";const g=e=>{const{children:t,...r}=e,{menuRef:o}=q();return n.jsx(oe,{ref:o,...r,children:t})};g.displayName="ContextMenuList";const mn={title:"Components/Overlay/ContextMenu",decorators:[e=>n.jsx(ue,{mt:"40px",children:n.jsx(e,{})})]},I=e=>n.jsxs(M,{...e,children:[n.jsx(C,{children:n.jsx(f,{height:"200px",borderWidth:"1px",children:"Right click here"})}),n.jsxs(g,{children:[n.jsx(l,{children:"Edit"}),n.jsx(l,{children:"Copy"}),n.jsx(l,{children:"Delete"})]})]}),v=()=>{const e=se();return n.jsxs(M,{onClose:()=>e.success("Menu closed"),children:[n.jsx(C,{children:n.jsx(f,{height:"200px",borderWidth:"1px",children:"Right click here"})}),n.jsxs(g,{children:[n.jsx(l,{children:"Edit"}),n.jsx(l,{children:"Copy"}),n.jsx(l,{children:"Delete"})]})]})},y=()=>n.jsxs(M,{closeOnSelect:!1,children:[n.jsx(C,{children:n.jsx(f,{height:"200px",borderWidth:"1px",children:"Right click here"})}),n.jsxs(g,{children:[n.jsxs(k,{defaultValue:"asc",title:"Order",type:"radio",children:[n.jsx(E,{value:"asc",children:"Ascending"}),n.jsx(E,{value:"desc",children:"Descending"})]}),n.jsx(ie,{}),n.jsxs(k,{title:"Country",type:"checkbox",children:[n.jsx(E,{value:"email",children:"Email"}),n.jsx(E,{value:"phone",children:"Phone"}),n.jsx(E,{value:"country",children:"Country"})]})]})]}),D=e=>n.jsxs(M,{isLazy:!0,...e,children:[n.jsx(C,{children:n.jsx(f,{height:"200px",borderWidth:"1px",children:"Right click here"})}),n.jsxs(g,{children:[n.jsx(l,{children:"Edit"}),n.jsx(l,{children:"Copy"}),n.jsx(l,{children:"Delete"})]})]}),O=e=>n.jsxs(ce,{children:[n.jsxs(M,{...e,children:[n.jsx(C,{children:n.jsx(f,{height:"200px",borderWidth:"1px",children:"Right click here"})}),n.jsxs(g,{children:[n.jsx(l,{children:"Edit"}),n.jsx(l,{children:"Copy"}),n.jsx(l,{children:"Delete"})]})]}),n.jsxs(M,{...e,children:[n.jsx(C,{children:n.jsx(f,{height:"200px",borderWidth:"1px",children:"Right click here"})}),n.jsxs(g,{children:[n.jsx(l,{children:"Edit 2"}),n.jsx(l,{children:"Copy 2"}),n.jsx(l,{children:"Delete 2"})]})]})]});var T,W,S;I.parameters={...I.parameters,docs:{...(T=I.parameters)==null?void 0:T.docs,source:{originalSource:`props => {
  return <ContextMenu {...props}>\r
      <ContextMenuTrigger>\r
        <Center height="200px" borderWidth="1px">\r
          Right click here\r
        </Center>\r
      </ContextMenuTrigger>\r
      <ContextMenuList>\r
        <MenuItem>Edit</MenuItem>\r
        <MenuItem>Copy</MenuItem>\r
        <MenuItem>Delete</MenuItem>\r
      </ContextMenuList>\r
    </ContextMenu>;
}`,...(S=(W=I.parameters)==null?void 0:W.docs)==null?void 0:S.source}}};var P,$,G;v.parameters={...v.parameters,docs:{...(P=v.parameters)==null?void 0:P.docs,source:{originalSource:`() => {
  const snackbar = useSnackbar();
  return <ContextMenu onClose={() => snackbar.success('Menu closed')}>\r
      <ContextMenuTrigger>\r
        <Center height="200px" borderWidth="1px">\r
          Right click here\r
        </Center>\r
      </ContextMenuTrigger>\r
      <ContextMenuList>\r
        <MenuItem>Edit</MenuItem>\r
        <MenuItem>Copy</MenuItem>\r
        <MenuItem>Delete</MenuItem>\r
      </ContextMenuList>\r
    </ContextMenu>;
}`,...(G=($=v.parameters)==null?void 0:$.docs)==null?void 0:G.source}}};var B,F,_;y.parameters={...y.parameters,docs:{...(B=y.parameters)==null?void 0:B.docs,source:{originalSource:`() => {
  return <ContextMenu closeOnSelect={false}>\r
      <ContextMenuTrigger>\r
        <Center height="200px" borderWidth="1px">\r
          Right click here\r
        </Center>\r
      </ContextMenuTrigger>\r
      <ContextMenuList>\r
        <MenuOptionGroup defaultValue="asc" title="Order" type="radio">\r
          <MenuItemOption value="asc">Ascending</MenuItemOption>\r
          <MenuItemOption value="desc">Descending</MenuItemOption>\r
        </MenuOptionGroup>\r
        <MenuDivider />\r
        <MenuOptionGroup title="Country" type="checkbox">\r
          <MenuItemOption value="email">Email</MenuItemOption>\r
          <MenuItemOption value="phone">Phone</MenuItemOption>\r
          <MenuItemOption value="country">Country</MenuItemOption>\r
        </MenuOptionGroup>\r
      </ContextMenuList>\r
    </ContextMenu>;
}`,...(_=(F=y.parameters)==null?void 0:F.docs)==null?void 0:_.source}}};var A,z,N;D.parameters={...D.parameters,docs:{...(A=D.parameters)==null?void 0:A.docs,source:{originalSource:`props => {
  return <ContextMenu isLazy {...props}>\r
      <ContextMenuTrigger>\r
        <Center height="200px" borderWidth="1px">\r
          Right click here\r
        </Center>\r
      </ContextMenuTrigger>\r
      <ContextMenuList>\r
        <MenuItem>Edit</MenuItem>\r
        <MenuItem>Copy</MenuItem>\r
        <MenuItem>Delete</MenuItem>\r
      </ContextMenuList>\r
    </ContextMenu>;
}`,...(N=(z=D.parameters)==null?void 0:z.docs)==null?void 0:N.source}}};var V,H,U;O.parameters={...O.parameters,docs:{...(V=O.parameters)==null?void 0:V.docs,source:{originalSource:`props => {
  return <Stack>\r
      <ContextMenu {...props}>\r
        <ContextMenuTrigger>\r
          <Center height="200px" borderWidth="1px">\r
            Right click here\r
          </Center>\r
        </ContextMenuTrigger>\r
        <ContextMenuList>\r
          <MenuItem>Edit</MenuItem>\r
          <MenuItem>Copy</MenuItem>\r
          <MenuItem>Delete</MenuItem>\r
        </ContextMenuList>\r
      </ContextMenu>\r
      <ContextMenu {...props}>\r
        <ContextMenuTrigger>\r
          <Center height="200px" borderWidth="1px">\r
            Right click here\r
          </Center>\r
        </ContextMenuTrigger>\r
        <ContextMenuList>\r
          <MenuItem>Edit 2</MenuItem>\r
          <MenuItem>Copy 2</MenuItem>\r
          <MenuItem>Delete 2</MenuItem>\r
        </ContextMenuList>\r
      </ContextMenu>\r
    </Stack>;
}`,...(U=(H=O.parameters)==null?void 0:H.docs)==null?void 0:U.source}}};const pn=["Basic","OnClose","MenuOptionGroups","WithLazyRender","WithMultipleMenus"];export{I as Basic,y as MenuOptionGroups,v as OnClose,D as WithLazyRender,O as WithMultipleMenus,pn as __namedExportsOrder,mn as default};
