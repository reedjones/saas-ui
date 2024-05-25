import{j as r,f as z,a as ts,o as ns,b as f}from"./chunk-ZJJGQIVY-3d316dd5.js";import{a as U,R as W,r as j}from"./index-76fb7be0.js";import{c as g}from"./chunk-O3SWHQEE-d6839529.js";import{c as os}from"./chunk-ITIKTQWJ-0c049f00.js";import{S as cs}from"./search-input-dce529e9.js";import{c as as}from"./chunk-MFVQSVQB-c3da265d.js";import{K as ls}from"./chunk-EBIU6VW7-b7ac467c.js";import{C as us}from"./chunk-5MKCW436-7cead567.js";import{u as Z}from"./chunk-7JBTTEVG-4cf2a1fa.js";import{S as is}from"./chunk-ZHMYA64R-c4ed5002.js";import{T as G}from"./chunk-2OOHT3W5-9ba5a188.js";import{B as u}from"./chunk-PULVB27S-e893e50c.js";import{M as ps}from"./chunk-NABYTFTG-691324af.js";import{M as Fe,a as ze,b as Ue}from"./chunk-OFOVX77R-a988abeb.js";import{M as ds}from"./chunk-EL2VKIZQ-30979218.js";import{M as Ze}from"./chunk-4FCEGNGT-b11834d9.js";import{D as ms,a as hs}from"./chunk-65IR7CTH-9245a5d5.js";import{I as y}from"./chunk-6CVSDS6C-58dff80d.js";import"./_commonjsHelpers-de833af9.js";import"./chunk-7JSBRQFI-041d2b19.js";import"./chunk-KA2477BY-f6a12dd2.js";import"./chunk-AZVKQZKI-601f6f7e.js";import"./chunk-2ZHRCML3-0a67530c.js";import"./index-7abe7895.js";import"./index-e1b4ee4c.js";import"./chunk-R3DH46PF-f0689d26.js";import"./icons-d10032f4.js";import"./chunk-2GBDXOMA-c3ee5274.js";import"./chunk-6QYXN73V-7940804f.js";import"./chunk-UVUR7MCU-4e62fe64.js";import"./chunk-T6ZDZOLO-8d3f3a64.js";import"./chunk-5PH6ULNP-89f88b5a.js";import"./emotion-react.browser.esm-b737cf90.js";import"./hoist-non-react-statics.cjs-3f8ebaa8.js";import"./index-17e33fe9.js";import"./chunk-6B2YUEGK-427119e4.js";import"./chunk-G72KV6MB-be2d631b.js";import"./chunk-34PD6CUK-c14fe2a1.js";import"./index-3e7aa64e.js";import"./index-add592e3.js";import"./index-c6b2a32b.js";import"./motion-56319619.js";import"./index-660fa4d3.js";import"./chunk-TR226DUX-6654fea8.js";import"./chunk-6NHXDBFO-987cde81.js";import"./chunk-7254PCTD-b2d45611.js";import"./chunk-37N6GCLA-d6b68ca5.js";import"./chunk-56K2BSAJ-a2503b05.js";import"./chunk-DFWC5MHP-a7a26ffe.js";const{createContext:fs,useContext:ys}=U,Ge=fs([]),xs=({children:e,hotkeys:s})=>{const t={hotkeys:s};return r.jsx(Ge.Provider,{value:t,children:e})},k=()=>ys(Ge),{useEffect:ks,useCallback:Hs,useMemo:F,useRef:js}=U,$={")":"0","!":"1","@":"'",'"':"'","#":"3","£":"3",$:"4","%":"5","^":"6","&":"7","*":"8","(":"9","~":"#",_:"-","+":"=",":":";","<":",",">":".","?":"/","|":"\\","{":"[","}":"]"},ee={"⌥":"alt",option:"alt","⇧":"shift","⌃":"control",ctrl:"control","⌘":"meta",cmd:"meta",command:"meta",mod:"meta",esc:"escape"},Qe=e=>e.replace(/\+/g,(s,t)=>t===0?s:" ").split(/\s/),Ve=e=>(typeof e=="string"&&(e=[e]),e.reduce((s,t)=>(s.push(Qe(t.toLowerCase()).reduce((o,n,c,l)=>l.length===1&&$[n]?["shift",$[n]]:(ee[n]?o.push(ee[n]):n!=="then"&&o.push(n),o),[])),s),[])),gs=e=>Ve(e).map(t=>t.join("+")).join(" "),se=(e,s)=>s.some(t=>e.size===t.size&&!Array.from(e).some(o=>!t.has(o))),Ss=e=>{const s=e.key.toLowerCase();return $[s]?$[s]:s},i=(e,s,t=[],o)=>{let n={};Array.isArray(t)?(o=t,n={}):(n=t,o=o||[]);const{ignoreTags:c=["INPUT","TEXTAREA","SELECT"],enableOnContentEditable:l,preventDefault:m=!1}=n,a=n.targetElement||(typeof window>"u"?null:window),h=Hs(s,o||[]),V=F(()=>Ve(e).map(p=>new Set(p)),[]),B=F(()=>new Set,[]),H=F(()=>new Set,[]),v=js(null),rs=p=>{const x=p.target;return x.isContentEditable&&!l||c.includes(x.tagName)&&!x.readOnly&&x!==a};function X(p){if(rs(p))return;const x=Ss(p);B.add(x),H.add(x),v.current&&(clearTimeout(v.current),v.current=null),v.current=setTimeout(()=>{H.clear()},400),(se(B,V)||H.size>1&&se(H,V))&&(m&&p.preventDefault(),H.clear(),setTimeout(()=>h(p),0))}function J(p){B.clear()}function Y(){B.clear()}ks(()=>(a==null||a.addEventListener("keydown",X),a==null||a.addEventListener("keyup",J),a==null||a.addEventListener("blur",Y),()=>{a==null||a.removeEventListener("keydown",X),a==null||a.removeEventListener("keyup",J),a==null||a.removeEventListener("blur",Y)}),[h,a])},Xe=(e,s,t=[],o)=>{var l,m;const{hotkeys:n}=k();let c=e;if(typeof c=="string"){const[a,h]=c.split(".");a&&h&&(c=(m=(l=n==null?void 0:n[a])==null?void 0:l.hotkeys[h])==null?void 0:m.command),c||(c=e)}return i(c,s,t,o),typeof c=="string"?c:c[0]},Rs=e=>{const{command:s,callback:t,hotkeyOptions:o,children:n}=e,c=Xe(s,t,o),l=W.useMemo(()=>gs(c),[c]);return typeof n=="function"?n({keys:c,ariaKeyshortcuts:l}):W.isValidElement(n)?W.cloneElement(n,{"aria-keyshortcuts":l}):r.jsx("span",{"aria-keyshortcuts":l,children:n})},Cs=e=>({hotkeys:e,HotkeysProvider:s=>r.jsx(xs,{...s,hotkeys:e}),useHotkeysContext:()=>k(),useHotkeys:(s,t,o=[],n)=>Xe(s,t,o,n),Hotkey:Rs}),[Bs,Q]=as("SuiHotkeys"),vs=/[.*+?^${}()|[\]\\]/g;function Ls(e){return e.replace(vs,"\\$&")}const[Is,Je]=os({name:"HotkeysListContext"}),Ms=e=>{const[s,t]=j.useState(""),{hotkeys:o}=e;return{hotkeys:o,query:s,setQuery:t}},S=z(({children:e,...s},t)=>{const o=ts("SuiHotkeys",s),n=ns(s),c=Ms(n);return r.jsx(f.div,{...s,ref:t,__css:o.container,className:g("sui-hotkeys",s.className),children:r.jsx(Is,{value:c,children:r.jsx(Bs,{value:o,children:e})})})});S.displayName="HotkeysList";const Ps=()=>Je(),R=z((e,s)=>{const{query:t,setQuery:o}=Ps();return r.jsx(cs,{...e,ref:s,value:t,onChange:({target:n})=>o(n.value),onReset:()=>o("")})});R.displayName="HotkeysSearch";const As=(e,s)=>{const t=Object.values(e).reduce((o,n)=>{const{label:c}=n,l=s&&new RegExp(Ls(s),"i"),m=Array.isArray(n.command)?n.command:[n.command];return(!l||c.match(l)||m.some(a=>a.match(l)))&&o.push(n),o},[]);return t!=null&&t.length?t:null},C=z((e,s)=>{const{hotkeys:t,query:o}=Je();return r.jsx(f.div,{...e,ref:s,className:g("sui-hotkeys__list-items",e.className),children:Object.values(t).map((n,c)=>{const l=As(n.hotkeys,o);return l!=null&&l.length?r.jsx(Ye,{title:n.title,children:l.map(({label:m,command:a})=>{const h=Array.isArray(a)?a[0]:a;return r.jsx(ss,{command:h,children:m},h)})},c):null})})});C.displayName="HotkeysListItems";const Ye=e=>{const{title:s,children:t,...o}=e,n=Q(),c={my:2,py:2,...n.group},l={py:2,fontWeight:"semibold",...n.groupTitle};return r.jsxs(f.div,{...o,__css:c,className:g("sui-hotkeys__group",e.className),children:[s&&r.jsx(f.p,{__css:l,children:s}),t]})};Ye.displayName="HotkeysGroup";const es=e=>{const{children:s,...t}=e,o=Q();let n;return typeof s=="string"&&(n=Qe(s).map((c,l)=>c==="then"?r.jsx(f.span,{__css:o.then,children:c},c):r.jsx(ls,{children:c},c))),r.jsx(f.span,{...t,__css:o.command,className:g("sui-hotkeys__command",e.className),children:n||s})};es.displayName="HotkeysCommand";const ss=e=>{const{command:s,children:t}=e,n={display:"flex",alignItems:"center",textAlign:"start",flex:"0 0 auto",...Q().item};return r.jsxs(f.div,{__css:n,className:g("sui-hotkeys__item",e.className),children:[r.jsx(f.span,{flex:"1",children:t}),r.jsx(es,{children:s})]})};ss.displayName="HotkeysItem";const{useEffect:ws,useRef:d}=U,Ts={general:{title:"General",hotkeys:{help:{label:"Help",command:"?"},search:{label:"Search",command:"⌘ K"}}},navigation:{title:"Navigation",hotkeys:{inbox:{label:"Inbox",command:"N then I"}}},markdown:{title:"Markdown",hotkeys:{bold:{label:"Bold",command:"**text**"}}}},{HotkeysProvider:bs,useHotkeys:q,Hotkey:Es}=Cs(Ts),Ar={title:"Components/Navigation/Hotkeys",decorators:[e=>r.jsx(us,{mt:"40px",children:r.jsx(bs,{children:r.jsx(e,{})})})]},L=()=>{const{isOpen:e,onOpen:s}=Z(),t=d(null),{hotkeys:o}=k(),n=q("general.help",()=>{s()});return q("general.search",()=>{var c;(c=t.current)==null||c.focus()}),r.jsxs(is,{children:[r.jsxs(G,{children:["Press ",r.jsx("strong",{children:n})," for help"]}),r.jsx(u,{hidden:!e,children:r.jsxs(S,{hotkeys:o,children:[r.jsx(R,{ref:t}),r.jsx(C,{})]})})]})},I=()=>{const{hotkeys:e}=k();return r.jsx(u,{children:r.jsxs(S,{hotkeys:e,children:[r.jsx(R,{}),r.jsx(C,{})]})})},M=()=>{const e=d(null),{isOpen:s,onOpen:t,onClose:o}=Z(),n=q("general.help",()=>{t()}),{hotkeys:c}=k();return r.jsxs(u,{children:[r.jsxs(G,{children:["Press ",r.jsx("strong",{children:n})," for help"]}),r.jsxs(ps,{isOpen:s,onClose:o,initialFocusRef:e,children:[r.jsx(Fe,{}),r.jsxs(ds,{children:[r.jsx(Ze,{}),r.jsx(ze,{children:"Keyboard shortcuts"}),r.jsx(Ue,{children:r.jsxs(S,{hotkeys:c,children:[r.jsx(R,{ref:e}),r.jsx(C,{})]})})]})]})]})},P=()=>{const e=d(null),{isOpen:s,onOpen:t,onClose:o}=Z(),n=q("general.help",()=>{t()}),{hotkeys:c}=k();return r.jsxs(u,{children:[r.jsxs(G,{children:["Press ",r.jsx("strong",{children:n})," for help"]}),r.jsxs(ms,{isOpen:s,onClose:o,initialFocusRef:e,children:[r.jsx(Fe,{}),r.jsxs(hs,{children:[r.jsx(Ze,{}),r.jsx(ze,{children:"Keyboard shortcuts"}),r.jsx(Ue,{children:r.jsxs(S,{hotkeys:c,children:[r.jsx(R,{ref:e}),r.jsx(C,{})]})})]})]})]})},A=()=>{const e=d(null);return i("⌘ k",()=>{var s;(s=e.current)==null||s.focus()}),r.jsx(u,{children:r.jsx(y,{placeholder:"Press ⌘ k to focus",ref:e})})},w=()=>{const e=d(null);return i("k",()=>{alert("K pressed")}),ws(()=>{var s;(s=e.current)==null||s.focus()},[]),r.jsx(u,{children:r.jsx(y,{placeholder:"Type k",ref:e})})},T=()=>{const e=d(null);return i("A then B",()=>{var s;(s=e.current)==null||s.focus()}),r.jsx(u,{children:r.jsx(y,{placeholder:"Press A then B to focus",ref:e})})},b=()=>{const e=d(null);return i("A",()=>{var s;(s=e.current)==null||s.focus()}),i("A then B",()=>{alert("A then B pressed")}),r.jsx(u,{children:r.jsx(y,{placeholder:"Press A to focus",ref:e})})},E=()=>{const e=d(null);return i("ctrl+shift+d",()=>{var s;(s=e.current)==null||s.focus()}),r.jsx(u,{children:r.jsx(y,{placeholder:"Press ctrl+shift+d to focus",ref:e})})},D=()=>{const e=d(null);return i(["ctrl+f","cmd+f"],()=>{var s;(s=e.current)==null||s.focus()},{preventDefault:!0}),r.jsx(u,{children:r.jsx(y,{placeholder:"Press ctrl+f or cmd+f to focus",ref:e})})},K=()=>{const[e,s]=j.useState(null);return i(["esc"],()=>{e==null||e.blur()},{targetElement:e},[e]),r.jsx(u,{children:r.jsx(y,{placeholder:"Press esc to exit",ref:s})})},O=()=>{const[e,s]=j.useState(0);return i("Cmd+Z",()=>{s(t=>t+1)},{preventDefault:!0}),r.jsxs(u,{children:[e," presses"]})},_=()=>{const[e,s]=j.useState(0);return i("Cmd+Z",()=>{s(t=>t+1)},{preventDefault:!0}),i("ArrowUp",()=>{s(0)}),r.jsxs(u,{children:[e," presses (Arrow up to reset)"]})},N=()=>{const e=j.useRef(null);return r.jsx(Es,{command:"general.search",callback:()=>{var s;return(s=e.current)==null?void 0:s.focus()},children:({keys:s,ariaKeyshortcuts:t})=>r.jsx(y,{ref:e,placeholder:Array.isArray(s)?s[0]:s,"aria-keyshortcuts":t})})};var re,te,ne;L.parameters={...L.parameters,docs:{...(re=L.parameters)==null?void 0:re.docs,source:{originalSource:`() => {
  const {
    isOpen,
    onOpen
  } = useDisclosure();
  const searchRef = useRef<HTMLInputElement>(null);
  const {
    hotkeys
  } = useHotkeysContext();
  const help = useHotkeysShortcut('general.help', () => {
    onOpen();
  });
  useHotkeysShortcut('general.search', () => {
    searchRef.current?.focus();
  });
  return <Stack>\r
      <Text>\r
        Press <strong>{help}</strong> for help\r
      </Text>\r
\r
      <Box hidden={!isOpen}>\r
        <HotkeysList hotkeys={hotkeys}>\r
          <HotkeysSearch ref={searchRef} />\r
          <HotkeysListItems />\r
        </HotkeysList>\r
      </Box>\r
    </Stack>;
}`,...(ne=(te=L.parameters)==null?void 0:te.docs)==null?void 0:ne.source}}};var oe,ce,ae;I.parameters={...I.parameters,docs:{...(oe=I.parameters)==null?void 0:oe.docs,source:{originalSource:`() => {
  const {
    hotkeys
  } = useHotkeysContext();
  return <Box>\r
      <HotkeysList hotkeys={hotkeys}>\r
        <HotkeysSearch />\r
        <HotkeysListItems />\r
      </HotkeysList>\r
    </Box>;
}`,...(ae=(ce=I.parameters)==null?void 0:ce.docs)==null?void 0:ae.source}}};var le,ue,ie;M.parameters={...M.parameters,docs:{...(le=M.parameters)==null?void 0:le.docs,source:{originalSource:`() => {
  const searchRef = useRef<HTMLInputElement | null>(null);
  const {
    isOpen,
    onOpen,
    onClose
  } = useDisclosure();
  const help = useHotkeysShortcut('general.help', () => {
    onOpen();
  });
  const {
    hotkeys
  } = useHotkeysContext();
  return <Box>\r
      <Text>\r
        Press <strong>{help}</strong> for help\r
      </Text>\r
\r
      <Modal isOpen={isOpen} onClose={onClose} initialFocusRef={searchRef}>\r
        <ModalOverlay />\r
        <ModalContent>\r
          <ModalCloseButton />\r
          <ModalHeader>Keyboard shortcuts</ModalHeader>\r
\r
          <ModalBody>\r
            <HotkeysList hotkeys={hotkeys}>\r
              <HotkeysSearch ref={searchRef} />\r
              <HotkeysListItems />\r
            </HotkeysList>\r
          </ModalBody>\r
        </ModalContent>\r
      </Modal>\r
    </Box>;
}`,...(ie=(ue=M.parameters)==null?void 0:ue.docs)==null?void 0:ie.source}}};var pe,de,me;P.parameters={...P.parameters,docs:{...(pe=P.parameters)==null?void 0:pe.docs,source:{originalSource:`() => {
  const searchRef = useRef<HTMLInputElement | null>(null);
  const {
    isOpen,
    onOpen,
    onClose
  } = useDisclosure();
  const help = useHotkeysShortcut('general.help', () => {
    onOpen();
  });
  const {
    hotkeys
  } = useHotkeysContext();
  return <Box>\r
      <Text>\r
        Press <strong>{help}</strong> for help\r
      </Text>\r
\r
      <Drawer isOpen={isOpen} onClose={onClose} initialFocusRef={searchRef}>\r
        <DrawerOverlay />\r
        <DrawerContent>\r
          <DrawerCloseButton />\r
          <DrawerHeader>Keyboard shortcuts</DrawerHeader>\r
\r
          <DrawerBody>\r
            <HotkeysList hotkeys={hotkeys}>\r
              <HotkeysSearch ref={searchRef} />\r
              <HotkeysListItems />\r
            </HotkeysList>\r
          </DrawerBody>\r
        </DrawerContent>\r
      </Drawer>\r
    </Box>;
}`,...(me=(de=P.parameters)==null?void 0:de.docs)==null?void 0:me.source}}};var he,fe,ye;A.parameters={...A.parameters,docs:{...(he=A.parameters)==null?void 0:he.docs,source:{originalSource:`() => {
  const ref = useRef<HTMLInputElement | null>(null);
  useHotkeys('⌘ k', () => {
    ref.current?.focus();
  });
  return <Box>\r
      <Input placeholder={\`Press ⌘ k to focus\`} ref={ref} />\r
    </Box>;
}`,...(ye=(fe=A.parameters)==null?void 0:fe.docs)==null?void 0:ye.source}}};var xe,ke,He;w.parameters={...w.parameters,docs:{...(xe=w.parameters)==null?void 0:xe.docs,source:{originalSource:`() => {
  const ref = useRef<HTMLInputElement | null>(null);
  useHotkeys('k', () => {
    alert('K pressed');
  });
  useEffect(() => {
    ref.current?.focus();
  }, []);
  return <Box>\r
      <Input placeholder={\`Type k\`} ref={ref} />\r
    </Box>;
}`,...(He=(ke=w.parameters)==null?void 0:ke.docs)==null?void 0:He.source}}};var je,ge,Se;T.parameters={...T.parameters,docs:{...(je=T.parameters)==null?void 0:je.docs,source:{originalSource:`() => {
  const ref = useRef<HTMLInputElement | null>(null);
  useHotkeys('A then B', () => {
    ref.current?.focus();
  });
  return <Box>\r
      <Input placeholder={\`Press A then B to focus\`} ref={ref} />\r
    </Box>;
}`,...(Se=(ge=T.parameters)==null?void 0:ge.docs)==null?void 0:Se.source}}};var Re,Ce,Be;b.parameters={...b.parameters,docs:{...(Re=b.parameters)==null?void 0:Re.docs,source:{originalSource:`() => {
  const ref = useRef<HTMLInputElement | null>(null);
  useHotkeys('A', () => {
    ref.current?.focus();
  });
  useHotkeys('A then B', () => {
    // this shouldn't trigger
    alert('A then B pressed');
  });
  return <Box>\r
      <Input placeholder={\`Press A to focus\`} ref={ref} />\r
    </Box>;
}`,...(Be=(Ce=b.parameters)==null?void 0:Ce.docs)==null?void 0:Be.source}}};var ve,Le,Ie;E.parameters={...E.parameters,docs:{...(ve=E.parameters)==null?void 0:ve.docs,source:{originalSource:`() => {
  const ref = useRef<HTMLInputElement | null>(null);
  useHotkeys('ctrl+shift+d', () => {
    ref.current?.focus();
  });
  return <Box>\r
      <Input placeholder={\`Press ctrl+shift+d to focus\`} ref={ref} />\r
    </Box>;
}`,...(Ie=(Le=E.parameters)==null?void 0:Le.docs)==null?void 0:Ie.source}}};var Me,Pe,Ae;D.parameters={...D.parameters,docs:{...(Me=D.parameters)==null?void 0:Me.docs,source:{originalSource:`() => {
  const ref = useRef<HTMLInputElement | null>(null);
  useHotkeys(['ctrl+f', 'cmd+f'], () => {
    ref.current?.focus();
  }, {
    preventDefault: true
  });
  return <Box>\r
      <Input placeholder={\`Press ctrl+f or cmd+f to focus\`} ref={ref} />\r
    </Box>;
}`,...(Ae=(Pe=D.parameters)==null?void 0:Pe.docs)==null?void 0:Ae.source}}};var we,Te,be;K.parameters={...K.parameters,docs:{...(we=K.parameters)==null?void 0:we.docs,source:{originalSource:`() => {
  const [ref, setRef] = React.useState<HTMLInputElement | null>(null);
  useHotkeys(['esc'], () => {
    ref?.blur();
  }, {
    targetElement: ref
  }, [ref]);
  return <Box>\r
      <Input placeholder={\`Press esc to exit\`} ref={setRef} />\r
    </Box>;
}`,...(be=(Te=K.parameters)==null?void 0:Te.docs)==null?void 0:be.source}}};var Ee,De,Ke;O.parameters={...O.parameters,docs:{...(Ee=O.parameters)==null?void 0:Ee.docs,source:{originalSource:`() => {
  const [presses, setPresses] = React.useState(0);
  useHotkeys('Cmd+Z', () => {
    setPresses(prev => prev + 1);
  }, {
    preventDefault: true
  });
  return <Box>{presses} presses</Box>;
}`,...(Ke=(De=O.parameters)==null?void 0:De.docs)==null?void 0:Ke.source}}};var Oe,_e,Ne;_.parameters={..._.parameters,docs:{...(Oe=_.parameters)==null?void 0:Oe.docs,source:{originalSource:`() => {
  const [presses, setPresses] = React.useState(0);
  useHotkeys('Cmd+Z', () => {
    setPresses(prev => prev + 1);
  }, {
    preventDefault: true
  });
  useHotkeys('ArrowUp', () => {
    setPresses(0);
  });
  return <Box>{presses} presses (Arrow up to reset)</Box>;
}`,...(Ne=(_e=_.parameters)==null?void 0:_e.docs)==null?void 0:Ne.source}}};var $e,qe,We;N.parameters={...N.parameters,docs:{...($e=N.parameters)==null?void 0:$e.docs,source:{originalSource:`() => {
  const searchRef = React.useRef<HTMLInputElement>(null);
  return <Hotkey command="general.search" callback={() => searchRef.current?.focus()}>\r
      {({
      keys,
      ariaKeyshortcuts
    }) => <Input ref={searchRef} placeholder={Array.isArray(keys) ? keys[0] : keys} aria-keyshortcuts={ariaKeyshortcuts} />}\r
    </Hotkey>;
}`,...(We=(qe=N.parameters)==null?void 0:qe.docs)==null?void 0:We.source}}};const wr=["Basic","List","ListModal","ListDrawer","WithoutShortcut","IgnoreKeyInsideInput","KeySequence","SingleAndKeySequence","MultipleKeys","PreventDefault","TargetEl","PressAndHold","PressAndHoldRelease","WithHotkey"];export{L as Basic,w as IgnoreKeyInsideInput,T as KeySequence,I as List,P as ListDrawer,M as ListModal,E as MultipleKeys,O as PressAndHold,_ as PressAndHoldRelease,D as PreventDefault,b as SingleAndKeySequence,K as TargetEl,N as WithHotkey,A as WithoutShortcut,wr as __namedExportsOrder,Ar as default};
