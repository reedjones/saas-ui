import{j as o}from"./chunk-ZJJGQIVY-3d316dd5.js";import{a as q}from"./menu-65386f37.js";import{M as G}from"./modal-c3eb0174.js";import{F as H}from"./form-33f8becd.js";import{c as J,o as M,s as y}from"./create-zod-form-5c108fc7.js";import{f as K,F as $}from"./create-form-ca682449.js";import{c as Q}from"./create-zod-dialog-77b76e9d.js";import{d as U,u as W,M as X}from"./provider-0afabf5a.js";import{C as oo}from"./chunk-5MKCW436-7cead567.js";import{S as C}from"./chunk-ZHMYA64R-c4ed5002.js";import{B as r}from"./chunk-UVUR7MCU-4e62fe64.js";import{M as f}from"./chunk-5TWLKMYI-2d3e107a.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";import"./chunk-HB6KBUMZ-d43cc10c.js";import"./index-17e33fe9.js";import"./index-514c0e80.js";import"./index-7abe7895.js";import"./index-30c8b35e.js";import"./index-6843c920.js";import"./index-660fa4d3.js";import"./index-938a7d6c.js";import"./index-3e7aa64e.js";import"./index-5f92aa2b.js";import"./index-c4a63d44.js";import"./index-e1b4ee4c.js";import"./chunk-MFVQSVQB-c3da265d.js";import"./chunk-ITIKTQWJ-0c049f00.js";import"./emotion-react.browser.esm-b737cf90.js";import"./hoist-non-react-statics.cjs-3f8ebaa8.js";import"./chunk-KC77MHL3-bc1ea797.js";import"./chunk-G72KV6MB-be2d631b.js";import"./chunk-VMD3UMGK-2a4001d6.js";import"./chunk-RAWN7VJ3-d8d1ff9c.js";import"./chunk-NABYTFTG-691324af.js";import"./chunk-34PD6CUK-c14fe2a1.js";import"./index-add592e3.js";import"./index-c6b2a32b.js";import"./motion-56319619.js";import"./chunk-OFOVX77R-a988abeb.js";import"./chunk-TR226DUX-6654fea8.js";import"./chunk-6NHXDBFO-987cde81.js";import"./chunk-4FCEGNGT-b11834d9.js";import"./chunk-37N6GCLA-d6b68ca5.js";import"./chunk-2GBDXOMA-c3ee5274.js";import"./chunk-EL2VKIZQ-30979218.js";import"./chunk-7254PCTD-b2d45611.js";import"./index-fc1666ba.js";import"./chunk-O3SWHQEE-d6839529.js";import"./steps-fd703130.js";import"./chunk-PULVB27S-e893e50c.js";import"./chunk-RKXMPHPI-1a3f22a5.js";import"./resolvers-d84e4cdf.js";import"./chunk-DFWC5MHP-a7a26ffe.js";import"./chunk-H46NUPBZ-200868d1.js";import"./chunk-AZVKQZKI-601f6f7e.js";import"./number-input-19cdb65d.js";import"./index-f68c64fe.js";import"./chunk-56K2BSAJ-a2503b05.js";import"./icons-d10032f4.js";import"./chunk-2ZHRCML3-0a67530c.js";import"./chunk-R3DH46PF-f0689d26.js";import"./password-input-a2c4f82c.js";import"./input-right-button-06426f1d.js";import"./chunk-6CVSDS6C-58dff80d.js";import"./chunk-VTV6N5LE-65c458b7.js";import"./chunk-CWVAJCXJ-22427db6.js";import"./index-979d1106.js";import"./select-c1165209.js";import"./utils-13c12efa.js";import"./chunk-7JSBRQFI-041d2b19.js";import"./chunk-KA2477BY-f6a12dd2.js";import"./chunk-6MF6NSK4-d26e88d8.js";import"./chunk-B3RAGXFV-fa0ff449.js";import"./chunk-PTXXWAJU-4600a0a7.js";import"./radio-input-cf776e5a.js";import"./chunk-RDF2AYID-fa24afd3.js";import"./native-select-327410ce.js";import"./chunk-3ASUQ6PA-012a436b.js";import"./chunk-I5V4ORUK-e3ad9ce2.js";import"./chunk-NEK3OOAM-0db4f6d4.js";import"./chunk-FQDHE43W-07eeae80.js";import"./chunk-DA7QIPTJ-83b15474.js";import"./chunk-T6ZDZOLO-8d3f3a64.js";import"./chunk-65IR7CTH-9245a5d5.js";import"./chunk-5PH6ULNP-89f88b5a.js";const eo=e=>{const n={...U,...e.modals};return{ModalsProvider:h=>o.jsx(X,{children:h.children,modals:n}),useModals:W}},no=K(e=>o.jsx("div",{children:"custom"})),ro=J({fields:{custom:no}}),to=Q(ro),R=({title:e="Custom modal",footer:n="Custom footer",children:t="Modal body",...h})=>o.jsx(G,{title:e,footer:n,...h,children:t}),{ModalsProvider:lo,useModals:l}=eo({modals:{custom:R,form:to}}),Ye={title:"Components/Overlay/Modals Manager",decorators:[e=>o.jsx(oo,{mt:"40px",children:o.jsx(lo,{children:o.jsx(e,{})})})]},s=()=>{const e=l();return o.jsxs(C,{alignItems:"center",children:[o.jsx(r,{onClick:()=>{const n=e.open({title:"My Modal",body:o.jsx(o.Fragment,{children:"My modal"}),footer:o.jsx(r,{onClick:()=>e.close(n),children:"Close"})})},children:"Open modal"}),o.jsx(r,{onClick:()=>{const n=e.open({title:"My Modal",body:o.jsx(o.Fragment,{children:"My modal"}),size:"xl",footer:o.jsx(r,{onClick:()=>e.close(n),children:"Close"})})},children:"Open xl modal"}),o.jsx(r,{onClick:()=>e.alert({title:"Import finished",body:"Your import has finish and can now be used."}),children:"Open alert dialog"}),o.jsx(r,{onClick:()=>e.confirm({title:"Delete user?",body:"Are you sure you want to delete this user?",confirmProps:{colorScheme:"red",children:"Delete"}}),children:"Open confirm dialog"}),o.jsx(r,{onClick:()=>e.drawer({title:"My drawer",body:o.jsxs(C,{children:[o.jsx(r,{onClick:()=>e.confirm({title:"Delete user?",body:"Are you sure you want to delete this user?",confirmProps:{colorScheme:"red",children:"Delete"}}),children:"Open confirm dialog"}),o.jsx(r,{onClick:()=>e.drawer({title:"Subdrawer",body:o.jsx(o.Fragment,{children:o.jsx(r,{onClick:()=>e.closeAll(),children:"Close all"})})}),children:"Open drawer"})]})}),children:"Open drawer"}),o.jsx(r,{onClick:()=>e.drawer({title:"My drawer",body:"My drawer",placement:"left"}),children:"Open left drawer"}),o.jsx(r,{onClick:()=>e.menu({title:"Menu",body:o.jsxs(q,{children:[o.jsx(f,{children:"Item 1"}),o.jsx(f,{children:"Item 1"})]})}),children:"Open menu dialog"}),o.jsx(r,{onClick:()=>{e.form({title:"Form",schema:M({title:y()}),defaultValues:{title:"My title"},onError:n=>console.log(n),onSubmit:({title:n})=>Promise.resolve()})},children:"Open form dialog"})]})},i=()=>{const e=l();return o.jsx(r,{onClick:()=>e.open({title:"My Modal",type:"custom",children:"My modal",customProp:"test"}),children:"Open modal"})},a=()=>{const e=l();return o.jsx(r,{onClick:()=>{e.form({title:"My Modal",schema:M({title:y()}),onError:n=>console.error("error",n),onChange:n=>console.log("change",n),children:({Field:n})=>o.jsx($,{children:o.jsx(n,{name:"title",label:"Title"})}),defaultValues:{title:"My title"},onSubmit:n=>new Promise(t=>{setTimeout(()=>{t(null),e.closeAll()},2e3)})})},children:"Open modal"})},m=()=>{const e=l();return o.jsx(r,{onClick:()=>e.open(H,{title:"My Modal",schema:M({title:y()}),onError:n=>console.error("error",n),onChange:n=>console.log("change",n),children:({Field:n})=>o.jsx($,{children:o.jsx(n,{name:"title",label:"Title"})}),defaultValues:{title:"My title"},onSubmit:n=>new Promise(t=>{setTimeout(()=>{t(null),e.closeAll()},2e3)})}),children:"Open modal"})},d=()=>{const e=l();return o.jsx(r,{onClick:()=>e.open(R,{customProp:"test"}),children:"Open modal"})},c=()=>{const e=l();return o.jsx(r,{onClick:()=>e.open({title:"My Modal",body:o.jsx(o.Fragment,{children:"My modal"}),onClose:()=>{e.confirm({title:"You closed the modal"})}}),children:"Open modal"})},u=()=>{const e=l(),n=()=>{const t=e.open({title:"Modal step 2",body:"Step 2",footer:o.jsxs(o.Fragment,{children:[o.jsx(r,{onClick:()=>e.close(t),mr:"3",children:"Back"}),o.jsx(r,{onClick:()=>e.closeAll(),children:"Done"})]})})};return o.jsx(r,{onClick:()=>e.open({title:"Modal step 1",body:"Step 1",footer:o.jsx(o.Fragment,{children:o.jsx(r,{onClick:n,children:"Next"})})}),children:"Open modal"})},p=()=>{const e=l();return o.jsx(r,{onClick:()=>e.confirm({title:"Delete user",body:"Are you sure you want to delete this user?",confirmProps:{children:"Delete",colorScheme:"red"},onConfirm:()=>new Promise(n=>{setTimeout(()=>{n()},2e3)})}),children:"Open modal"})};var x,g,k;s.parameters={...s.parameters,docs:{...(x=s.parameters)==null?void 0:x.docs,source:{originalSource:`() => {
  const modals = useModals();
  return <Stack alignItems="center">\r
      <Button onClick={() => {
      const id = modals.open({
        title: 'My Modal',
        body: <>My modal</>,
        footer: <Button onClick={() => modals.close(id)}>Close</Button>
      });
    }}>\r
        Open modal\r
      </Button>\r
      <Button onClick={() => {
      const id = modals.open({
        title: 'My Modal',
        body: <>My modal</>,
        size: 'xl',
        footer: <Button onClick={() => modals.close(id)}>Close</Button>
      });
    }}>\r
        Open xl modal\r
      </Button>\r
      <Button onClick={() => modals.alert({
      title: 'Import finished',
      body: 'Your import has finish and can now be used.'
    })}>\r
        Open alert dialog\r
      </Button>\r
      <Button onClick={() => modals.confirm({
      title: 'Delete user?',
      body: 'Are you sure you want to delete this user?',
      confirmProps: {
        colorScheme: 'red',
        children: 'Delete'
      }
    })}>\r
        Open confirm dialog\r
      </Button>\r
      <Button onClick={() => modals.drawer({
      title: 'My drawer',
      body: <Stack>\r
                <Button onClick={() => modals.confirm({
          title: 'Delete user?',
          body: 'Are you sure you want to delete this user?',
          confirmProps: {
            colorScheme: 'red',
            children: 'Delete'
          }
        })}>\r
                  Open confirm dialog\r
                </Button>\r
                <Button onClick={() => modals.drawer({
          title: 'Subdrawer',
          body: <>\r
                          <Button onClick={() => modals.closeAll()}>\r
                            Close all\r
                          </Button>\r
                        </>
        })}>\r
                  Open drawer\r
                </Button>\r
              </Stack>
    })}>\r
        Open drawer\r
      </Button>\r
      <Button onClick={() => modals.drawer({
      title: 'My drawer',
      body: 'My drawer',
      placement: 'left'
    })}>\r
        Open left drawer\r
      </Button>\r
      <Button onClick={() => modals.menu({
      title: 'Menu',
      body: <MenuDialogList>\r
                <MenuItem>Item 1</MenuItem>\r
                <MenuItem>Item 1</MenuItem>\r
              </MenuDialogList>
    })}>\r
        Open menu dialog\r
      </Button>\r
      <Button onClick={() => {
      modals.form({
        title: 'Form',
        schema: z.object({
          title: z.string()
        }),
        defaultValues: {
          title: 'My title'
        },
        onError: error => console.log(error),
        onSubmit: ({
          title
        }) => Promise.resolve()
      });
    }}>\r
        Open form dialog\r
      </Button>\r
    </Stack>;
}`,...(k=(g=s.parameters)==null?void 0:g.docs)==null?void 0:k.source}}};var B,j,b;i.parameters={...i.parameters,docs:{...(B=i.parameters)==null?void 0:B.docs,source:{originalSource:`() => {
  const modals = useModals();
  return <Button onClick={() => modals.open({
    title: 'My Modal',
    type: 'custom',
    children: 'My modal',
    customProp: 'test'
  })}>\r
      Open modal\r
    </Button>;
}`,...(b=(j=i.parameters)==null?void 0:j.docs)==null?void 0:b.source}}};var O,w,S;a.parameters={...a.parameters,docs:{...(O=a.parameters)==null?void 0:O.docs,source:{originalSource:`() => {
  const modals = useModals();
  return <Button onClick={() => {
    const id = modals.form({
      title: 'My Modal',
      schema: z.object({
        title: z.string()
      }),
      onError: error => console.error('error', error),
      onChange: values => console.log('change', values),
      children: ({
        Field
      }) => <FormLayout>\r
              <Field name="title" label="Title" />\r
            </FormLayout>,
      defaultValues: {
        title: 'My title'
      },
      onSubmit: data => new Promise(resolve => {
        setTimeout(() => {
          resolve(null);
          modals.closeAll();
        }, 2000);
      })
    });
  }}>\r
      Open modal\r
    </Button>;
}`,...(S=(w=a.parameters)==null?void 0:w.docs)==null?void 0:S.source}}};var F,D,P;m.parameters={...m.parameters,docs:{...(F=m.parameters)==null?void 0:F.docs,source:{originalSource:`() => {
  const modals = useModals();
  return <Button onClick={() => modals.open(FormDialog, {
    title: 'My Modal',
    schema: z.object({
      title: z.string()
    }),
    onError: error => console.error('error', error),
    onChange: values => console.log('change', values),
    children: ({
      Field
    }) => <FormLayout>\r
              <Field name="title" label="Title" />\r
            </FormLayout>,
    defaultValues: {
      title: 'My title'
    },
    onSubmit: data => new Promise(resolve => {
      setTimeout(() => {
        resolve(null);
        modals.closeAll();
      }, 2000);
    })
  })}>\r
      Open modal\r
    </Button>;
}`,...(P=(D=m.parameters)==null?void 0:D.docs)==null?void 0:P.source}}};var v,A,I;d.parameters={...d.parameters,docs:{...(v=d.parameters)==null?void 0:v.docs,source:{originalSource:`() => {
  const modals = useModals();
  return <Button onClick={() => modals.open(CustomModal, {
    customProp: 'test'
  })}>\r
      Open modal\r
    </Button>;
}`,...(I=(A=d.parameters)==null?void 0:A.docs)==null?void 0:I.source}}};var T,z,E;c.parameters={...c.parameters,docs:{...(T=c.parameters)==null?void 0:T.docs,source:{originalSource:`() => {
  const modals = useModals();
  return <Button onClick={() => modals.open({
    title: 'My Modal',
    body: <>My modal</>,
    onClose: () => {
      modals.confirm({
        title: 'You closed the modal'
      });
    }
  })}>\r
      Open modal\r
    </Button>;
}`,...(E=(z=c.parameters)==null?void 0:z.docs)==null?void 0:E.source}}};var L,V,Y;u.parameters={...u.parameters,docs:{...(L=u.parameters)==null?void 0:L.docs,source:{originalSource:`() => {
  const modals = useModals();
  const next = () => {
    const id = modals.open({
      title: 'Modal step 2',
      body: 'Step 2',
      footer: <>\r
          <Button onClick={() => modals.close(id)} mr="3">\r
            Back\r
          </Button>\r
          <Button onClick={() => modals.closeAll()}>Done</Button>\r
        </>
    });
  };
  return <Button onClick={() => modals.open({
    title: 'Modal step 1',
    body: 'Step 1',
    footer: <>\r
              <Button onClick={next}>Next</Button>\r
            </>
  })}>\r
      Open modal\r
    </Button>;
}`,...(Y=(V=u.parameters)==null?void 0:V.docs)==null?void 0:Y.source}}};var Z,_,N;p.parameters={...p.parameters,docs:{...(Z=p.parameters)==null?void 0:Z.docs,source:{originalSource:`() => {
  const modals = useModals();
  return <Button onClick={() => modals.confirm({
    title: 'Delete user',
    body: 'Are you sure you want to delete this user?',
    confirmProps: {
      children: 'Delete',
      colorScheme: 'red'
    },
    onConfirm: () => new Promise(resolve => {
      setTimeout(() => {
        resolve();
      }, 2000);
    })
  })}>\r
      Open modal\r
    </Button>;
}`,...(N=(_=p.parameters)==null?void 0:_.docs)==null?void 0:N.source}}};const Ze=["Basic","Custom","Form","CustomForm","CustomAsComponent","OnClose","Multiple","AsyncConfirmDialog"];export{p as AsyncConfirmDialog,s as Basic,i as Custom,d as CustomAsComponent,m as CustomForm,a as Form,u as Multiple,c as OnClose,Ze as __namedExportsOrder,Ye as default};
