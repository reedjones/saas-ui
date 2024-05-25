import{j as e}from"./chunk-ZJJGQIVY-3d316dd5.js";import{u as c}from"./use-snackbar-00465ce5.js";import{C as v}from"./chunk-5MKCW436-7cead567.js";import{V as l}from"./chunk-NTCQBYKE-6d14b748.js";import{B as n}from"./chunk-UVUR7MCU-4e62fe64.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";import"./chunk-3Y4YXCR2-d2baf078.js";import"./index-30c8b35e.js";import"./index-5f92aa2b.js";import"./motion-56319619.js";import"./chunk-3KCBMPN5-38b7cfb7.js";import"./chunk-2GBDXOMA-c3ee5274.js";import"./index-7abe7895.js";import"./chunk-5PH6ULNP-89f88b5a.js";import"./emotion-react.browser.esm-b737cf90.js";import"./hoist-non-react-statics.cjs-3f8ebaa8.js";import"./chunk-37N6GCLA-d6b68ca5.js";import"./chunk-34PD6CUK-c14fe2a1.js";import"./index-3e7aa64e.js";import"./index-add592e3.js";import"./index-c6b2a32b.js";import"./chunk-DA7QIPTJ-83b15474.js";import"./chunk-T6ZDZOLO-8d3f3a64.js";import"./chunk-ZHMYA64R-c4ed5002.js";import"./chunk-G72KV6MB-be2d631b.js";import"./index-e1b4ee4c.js";import"./index-17e33fe9.js";const tr={title:"Components/Feedback/Snackbar",decorators:[r=>e.jsx(v,{mt:"40px",children:e.jsx(r,{})})]},s=()=>{const r=c();return e.jsxs(l,{children:[e.jsx(n,{onClick:()=>r.info("Info"),children:"Show info"}),e.jsx(n,{onClick:()=>r.success("Success!"),children:"Show success"}),e.jsx(n,{onClick:()=>r.error("Error!"),children:"Show error"})]})},t=()=>{const r=c();return e.jsxs(l,{children:[e.jsx(n,{onClick:()=>r.info({title:"Info",description:"Info snackbar"}),children:"Show info"}),e.jsx(n,{onClick:()=>r.success({title:"Success!",description:"Success snackbar"}),children:"Show success"}),e.jsx(n,{onClick:()=>r.error({title:"Error!",description:"Error snackbar"}),children:"Show error"})]})},a=()=>{const r=c();return e.jsx(n,{onClick:()=>r.info({title:"Account created",description:"Your account has been created.",isClosable:!0}),children:"Show snackbar"})},i=()=>{const r=c();return e.jsx(n,{onClick:()=>r.success({title:"Email sent",description:"Your email has been sent.",action:e.jsx(n,{children:"Undo"})}),children:"Show snackbar"})},u=()=>{const r=c();return e.jsxs(l,{children:[e.jsx(n,{onClick:()=>r.promise(new Promise(o=>setTimeout(o,2e3)),{loading:"Creating your account...",success:"Your account has been created.",error:"Your account couldn't be created."}),children:"Success"}),e.jsx(n,{onClick:()=>r.promise(new Promise((o,d)=>setTimeout(()=>d(new Error("403 Error")),2e3)),{loading:"Creating your account...",success:"Your account has been created.",error:"Your account couldn't be created."}).catch(o=>{console.error(o)}),children:"Error"})]})},m=()=>{const r=c();return e.jsxs(l,{children:[e.jsx(n,{onClick:()=>r.promise(new Promise(o=>setTimeout(()=>o({name:"Elliot"}),2e3)),{loading:"Creating your account...",success:o=>`Welcome ${o.name}, your account has been created.`,error:"Your account couldn't be created."}),children:"Success"}),e.jsx(n,{onClick:()=>r.promise(new Promise((o,d)=>setTimeout(()=>d(new Error("403 Error")),2e3)),{loading:"Creating your account...",success:o=>`Your account has been created: ${o}`,error:o=>o.message}).catch(o=>{console.error(o)}),children:"Error"})]})};var k,p,b;s.parameters={...s.parameters,docs:{...(k=s.parameters)==null?void 0:k.docs,source:{originalSource:`() => {
  const snackbar = useSnackbar();
  return <VStack>\r
      <Button onClick={() => snackbar.info('Info')}>Show info</Button>\r
      <Button onClick={() => snackbar.success('Success!')}>Show success</Button>\r
      <Button onClick={() => snackbar.error('Error!')}>Show error</Button>\r
    </VStack>;
}`,...(b=(p=s.parameters)==null?void 0:p.docs)==null?void 0:b.source}}};var h,S,C;t.parameters={...t.parameters,docs:{...(h=t.parameters)==null?void 0:h.docs,source:{originalSource:`() => {
  const snackbar = useSnackbar();
  return <VStack>\r
      <Button onClick={() => snackbar.info({
      title: 'Info',
      description: 'Info snackbar'
    })}>\r
        Show info\r
      </Button>\r
      <Button onClick={() => snackbar.success({
      title: 'Success!',
      description: 'Success snackbar'
    })}>\r
        Show success\r
      </Button>\r
      <Button onClick={() => snackbar.error({
      title: 'Error!',
      description: 'Error snackbar'
    })}>\r
        Show error\r
      </Button>\r
    </VStack>;
}`,...(C=(S=t.parameters)==null?void 0:S.docs)==null?void 0:C.source}}};var B,w,E;a.parameters={...a.parameters,docs:{...(B=a.parameters)==null?void 0:B.docs,source:{originalSource:`() => {
  const snackbar = useSnackbar();
  return <Button onClick={() => snackbar.info({
    title: 'Account created',
    description: 'Your account has been created.',
    isClosable: true
  })}>\r
      Show snackbar\r
    </Button>;
}`,...(E=(w=a.parameters)==null?void 0:w.docs)==null?void 0:E.source}}};var j,g,x;i.parameters={...i.parameters,docs:{...(j=i.parameters)==null?void 0:j.docs,source:{originalSource:`() => {
  const snackbar = useSnackbar();
  return <Button onClick={() => snackbar.success({
    title: 'Email sent',
    description: 'Your email has been sent.',
    action: <Button>Undo</Button>
  })}>\r
      Show snackbar\r
    </Button>;
}`,...(x=(g=i.parameters)==null?void 0:g.docs)==null?void 0:x.source}}};var f,Y,P;u.parameters={...u.parameters,docs:{...(f=u.parameters)==null?void 0:f.docs,source:{originalSource:`() => {
  const snackbar = useSnackbar();
  return <VStack>\r
      <Button onClick={() => snackbar.promise(new Promise(resolve => setTimeout(resolve, 2000)), {
      loading: 'Creating your account...',
      success: 'Your account has been created.',
      error: "Your account couldn't be created."
    })}>\r
        Success\r
      </Button>\r
      <Button onClick={() => snackbar.promise(new Promise((resolve, reject) => setTimeout(() => reject(new Error('403 Error')), 2000)), {
      loading: 'Creating your account...',
      success: 'Your account has been created.',
      error: "Your account couldn't be created."
    }).catch(e => {
      console.error(e);
    })}>\r
        Error\r
      </Button>\r
    </VStack>;
}`,...(P=(Y=u.parameters)==null?void 0:Y.docs)==null?void 0:P.source}}};var W,y,V;m.parameters={...m.parameters,docs:{...(W=m.parameters)==null?void 0:W.docs,source:{originalSource:`() => {
  const snackbar = useSnackbar();
  return <VStack>\r
      <Button onClick={() => snackbar.promise(new Promise(resolve => setTimeout(() => resolve({
      name: 'Elliot'
    }), 2000)), {
      loading: 'Creating your account...',
      success: data => \`Welcome \${data.name}, your account has been created.\`,
      error: "Your account couldn't be created."
    })}>\r
        Success\r
      </Button>\r
      <Button onClick={() => snackbar.promise(new Promise((resolve, reject) => setTimeout(() => reject(new Error('403 Error')), 2000)), {
      loading: 'Creating your account...',
      success: data => \`Your account has been created: \${data}\`,
      error: err => err.message
    }).catch(e => {
      console.error(e);
    })}>\r
        Error\r
      </Button>\r
    </VStack>;
}`,...(V=(y=m.parameters)==null?void 0:y.docs)==null?void 0:V.source}}};const ar=["Basic","WithDescription","WithCloseButton","WithAction","WithPromise","WithPromiseCustomError"];export{s as Basic,i as WithAction,a as WithCloseButton,t as WithDescription,u as WithPromise,m as WithPromiseCustomError,ar as __namedExportsOrder,tr as default};
