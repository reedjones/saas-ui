import{j as t}from"./chunk-ZJJGQIVY-3d316dd5.js";import{c as o,a}from"./index.esm-c3932d88.js";import{F as g}from"./index-fc1666ba.js";import{F as T}from"./index-995f0b15.js";import{o as p}from"./helpers-23723f8c.js";import{F as l,S as c}from"./create-form-ca682449.js";import{C as P}from"./chunk-5MKCW436-7cead567.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";import"./chunk-O3SWHQEE-d6839529.js";import"./chunk-ITIKTQWJ-0c049f00.js";import"./steps-fd703130.js";import"./index-7abe7895.js";import"./chunk-MFVQSVQB-c3da265d.js";import"./emotion-react.browser.esm-b737cf90.js";import"./hoist-non-react-statics.cjs-3f8ebaa8.js";import"./chunk-2GBDXOMA-c3ee5274.js";import"./chunk-PULVB27S-e893e50c.js";import"./chunk-RKXMPHPI-1a3f22a5.js";import"./chunk-6NHXDBFO-987cde81.js";import"./index-c6b2a32b.js";import"./motion-56319619.js";import"./chunk-UVUR7MCU-4e62fe64.js";import"./chunk-T6ZDZOLO-8d3f3a64.js";import"./chunk-5PH6ULNP-89f88b5a.js";import"./index-17e33fe9.js";import"./create-yup-form-78850bae.js";import"./yup-7d6b2579.js";import"./resolvers-d84e4cdf.js";import"./create-yup-dialog-20db29da.js";import"./form-33f8becd.js";import"./modal-c3eb0174.js";import"./chunk-OFOVX77R-a988abeb.js";import"./chunk-NABYTFTG-691324af.js";import"./chunk-34PD6CUK-c14fe2a1.js";import"./index-3e7aa64e.js";import"./index-add592e3.js";import"./index-660fa4d3.js";import"./chunk-TR226DUX-6654fea8.js";import"./chunk-RAWN7VJ3-d8d1ff9c.js";import"./chunk-4FCEGNGT-b11834d9.js";import"./chunk-37N6GCLA-d6b68ca5.js";import"./chunk-EL2VKIZQ-30979218.js";import"./chunk-7254PCTD-b2d45611.js";import"./chunk-DFWC5MHP-a7a26ffe.js";import"./chunk-H46NUPBZ-200868d1.js";import"./chunk-AZVKQZKI-601f6f7e.js";import"./number-input-19cdb65d.js";import"./index-30c8b35e.js";import"./index-f68c64fe.js";import"./index-938a7d6c.js";import"./index-5f92aa2b.js";import"./chunk-56K2BSAJ-a2503b05.js";import"./icons-d10032f4.js";import"./chunk-2ZHRCML3-0a67530c.js";import"./index-e1b4ee4c.js";import"./chunk-R3DH46PF-f0689d26.js";import"./password-input-a2c4f82c.js";import"./input-right-button-06426f1d.js";import"./chunk-6CVSDS6C-58dff80d.js";import"./chunk-VTV6N5LE-65c458b7.js";import"./chunk-CWVAJCXJ-22427db6.js";import"./index-979d1106.js";import"./select-c1165209.js";import"./utils-13c12efa.js";import"./chunk-7JSBRQFI-041d2b19.js";import"./chunk-KA2477BY-f6a12dd2.js";import"./chunk-HB6KBUMZ-d43cc10c.js";import"./index-514c0e80.js";import"./index-6843c920.js";import"./index-c4a63d44.js";import"./chunk-6MF6NSK4-d26e88d8.js";import"./chunk-B3RAGXFV-fa0ff449.js";import"./chunk-PTXXWAJU-4600a0a7.js";import"./radio-input-cf776e5a.js";import"./chunk-RDF2AYID-fa24afd3.js";import"./chunk-ZHMYA64R-c4ed5002.js";import"./chunk-G72KV6MB-be2d631b.js";import"./native-select-327410ce.js";import"./chunk-3ASUQ6PA-012a436b.js";import"./chunk-I5V4ORUK-e3ad9ce2.js";import"./chunk-NEK3OOAM-0db4f6d4.js";const ne={title:"Components/Forms/ObjectField",decorators:[e=>t.jsx(P,{mt:"40px",children:t.jsx(e,{})})]},B=o().shape({title:a().required().meta({placeholder:"Title"}).label("Title"),description:a().meta({type:"textarea"}).label("Description")}).label("Post"),D=o().shape({post:B}),i=()=>t.jsx(t.Fragment,{children:t.jsx(g,{schema:{properties:{name:"post",type:"object",properties:{title:{type:"string",label:"Title"},description:{type:"string",label:"Description"}}}},defaultValues:{post:{title:"",description:""}},onSubmit:p,children:({Field:e,ObjectField:r})=>t.jsxs(l,{children:[t.jsxs(r,{name:"post",label:"Post",children:[t.jsx(e,{name:"post.title",label:"Title"}),t.jsx(e,{name:"post.description",label:"Description"})]}),t.jsx(c,{children:"Save post"})]})})}),n=()=>t.jsx(t.Fragment,{children:t.jsx(T,{schema:D,defaultValues:{post:{}},fields:{post:{hideLabel:!0}},onSubmit:p})}),m=()=>t.jsx(t.Fragment,{children:t.jsx(g,{schema:D,defaultValues:{post:{title:"",description:""}},onSubmit:p,children:({Field:e,ObjectField:r})=>t.jsxs(l,{children:[t.jsxs(r,{name:"post",label:"Post",hideLabel:!0,children:[t.jsx(e,{name:"post.title",label:"Title"}),t.jsx(e,{name:"post.description",label:"Description"})]}),t.jsx(c,{children:"Save post"})]})})}),v=o().shape({author:o().shape({name:a(),email:a().email()})}),V=o().shape({post:B.shape({meta:v})}),s=()=>t.jsx(t.Fragment,{children:t.jsx(T,{schema:V,onSubmit:p,children:({Field:e,ObjectField:r})=>t.jsxs(l,{children:[t.jsxs(r,{name:"post",label:"Post",children:[t.jsx(e,{name:"post.title",label:"Title"}),t.jsx(e,{name:"post.description",label:"Description"}),t.jsx(r,{name:"post.meta",children:t.jsxs(r,{name:"post.meta.author",label:"Author",children:[t.jsx(e,{name:"post.meta.author.name",label:"Name"}),t.jsx(e,{name:"post.meta.author.email",label:"Email"})]})})]}),t.jsx(c,{children:"Save post"})]})})});var d,u,b;i.parameters={...i.parameters,docs:{...(d=i.parameters)==null?void 0:d.docs,source:{originalSource:`() => {
  return <>\r
      <Form schema={{
      properties: {
        name: 'post',
        type: 'object',
        properties: {
          title: {
            type: 'string',
            label: 'Title'
          },
          description: {
            type: 'string',
            label: 'Description'
          }
        }
      }
    }} defaultValues={{
      post: {
        title: '',
        description: ''
      }
    }} onSubmit={onSubmit}>\r
        {({
        Field,
        ObjectField
      }) => <FormLayout>\r
            <ObjectField name="post" label="Post">\r
              <Field name="post.title" label="Title" />\r
              <Field name="post.description" label="Description" />\r
            </ObjectField>\r
\r
            <SubmitButton>Save post</SubmitButton>\r
          </FormLayout>}\r
      </Form>\r
    </>;
}`,...(b=(u=i.parameters)==null?void 0:u.docs)==null?void 0:b.source}}};var h,j,F;n.parameters={...n.parameters,docs:{...(h=n.parameters)==null?void 0:h.docs,source:{originalSource:`() => {
  return <>\r
      <YupForm schema={objectSchema} defaultValues={{
      post: {}
    }} fields={{
      post: {
        hideLabel: true
      }
    }} onSubmit={onSubmit} />\r
    </>;
}`,...(F=(j=n.parameters)==null?void 0:j.docs)==null?void 0:F.source}}};var x,S,O;m.parameters={...m.parameters,docs:{...(x=m.parameters)==null?void 0:x.docs,source:{originalSource:`() => {
  return <>\r
      <Form schema={objectSchema} defaultValues={{
      post: {
        title: '',
        description: ''
      }
    }} onSubmit={onSubmit}>\r
        {({
        Field,
        ObjectField
      }) => <FormLayout>\r
            <ObjectField name="post" label="Post" hideLabel>\r
              <Field name="post.title" label="Title" />\r
              <Field name="post.description" label="Description" />\r
            </ObjectField>\r
\r
            <SubmitButton>Save post</SubmitButton>\r
          </FormLayout>}\r
      </Form>\r
    </>;
}`,...(O=(S=m.parameters)==null?void 0:S.docs)==null?void 0:O.source}}};var f,y,L;s.parameters={...s.parameters,docs:{...(f=s.parameters)==null?void 0:f.docs,source:{originalSource:`() => {
  return <>\r
      <YupForm schema={nestedSchema} onSubmit={onSubmit}>\r
        {({
        Field,
        ObjectField
      }) => <FormLayout>\r
            <ObjectField name="post" label="Post">\r
              <Field name="post.title" label="Title" />\r
              <Field name="post.description" label="Description" />\r
              <ObjectField name="post.meta">\r
                <ObjectField name="post.meta.author" label="Author">\r
                  <Field name="post.meta.author.name" label="Name" />\r
                  <Field name="post.meta.author.email" label="Email" />\r
                </ObjectField>\r
              </ObjectField>\r
            </ObjectField>\r
\r
            <SubmitButton>Save post</SubmitButton>\r
          </FormLayout>}\r
      </YupForm>\r
    </>;
}`,...(L=(y=s.parameters)==null?void 0:y.docs)==null?void 0:L.source}}};const me=["Basic","AutoObjectField","HideLabel","NestedObjectField"];export{n as AutoObjectField,i as Basic,m as HideLabel,s as NestedObjectField,me as __namedExportsOrder,ne as default};
