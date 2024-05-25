import{j as t}from"./chunk-ZJJGQIVY-3d316dd5.js";import{c as s,a as i}from"./index.esm-c3932d88.js";import{F as l}from"./index-fc1666ba.js";import{o as c}from"./helpers-23723f8c.js";import{o as u}from"./yup-7d6b2579.js";import{F as d,a as m,D as b,S}from"./create-form-ca682449.js";import{C as f}from"./chunk-5MKCW436-7cead567.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";import"./chunk-O3SWHQEE-d6839529.js";import"./chunk-ITIKTQWJ-0c049f00.js";import"./steps-fd703130.js";import"./index-7abe7895.js";import"./chunk-MFVQSVQB-c3da265d.js";import"./emotion-react.browser.esm-b737cf90.js";import"./hoist-non-react-statics.cjs-3f8ebaa8.js";import"./chunk-2GBDXOMA-c3ee5274.js";import"./chunk-PULVB27S-e893e50c.js";import"./chunk-RKXMPHPI-1a3f22a5.js";import"./chunk-6NHXDBFO-987cde81.js";import"./index-c6b2a32b.js";import"./motion-56319619.js";import"./chunk-UVUR7MCU-4e62fe64.js";import"./chunk-T6ZDZOLO-8d3f3a64.js";import"./chunk-5PH6ULNP-89f88b5a.js";import"./index-17e33fe9.js";import"./resolvers-d84e4cdf.js";import"./chunk-DFWC5MHP-a7a26ffe.js";import"./chunk-H46NUPBZ-200868d1.js";import"./chunk-AZVKQZKI-601f6f7e.js";import"./number-input-19cdb65d.js";import"./index-30c8b35e.js";import"./index-f68c64fe.js";import"./index-938a7d6c.js";import"./index-5f92aa2b.js";import"./index-3e7aa64e.js";import"./chunk-56K2BSAJ-a2503b05.js";import"./icons-d10032f4.js";import"./chunk-2ZHRCML3-0a67530c.js";import"./index-e1b4ee4c.js";import"./chunk-R3DH46PF-f0689d26.js";import"./password-input-a2c4f82c.js";import"./input-right-button-06426f1d.js";import"./chunk-6CVSDS6C-58dff80d.js";import"./chunk-VTV6N5LE-65c458b7.js";import"./chunk-CWVAJCXJ-22427db6.js";import"./index-979d1106.js";import"./select-c1165209.js";import"./utils-13c12efa.js";import"./chunk-7JSBRQFI-041d2b19.js";import"./chunk-KA2477BY-f6a12dd2.js";import"./chunk-HB6KBUMZ-d43cc10c.js";import"./index-514c0e80.js";import"./index-6843c920.js";import"./index-660fa4d3.js";import"./index-c4a63d44.js";import"./chunk-6MF6NSK4-d26e88d8.js";import"./chunk-B3RAGXFV-fa0ff449.js";import"./chunk-PTXXWAJU-4600a0a7.js";import"./radio-input-cf776e5a.js";import"./chunk-RDF2AYID-fa24afd3.js";import"./chunk-ZHMYA64R-c4ed5002.js";import"./chunk-G72KV6MB-be2d631b.js";import"./native-select-327410ce.js";import"./chunk-3ASUQ6PA-012a436b.js";import"./chunk-I5V4ORUK-e3ad9ce2.js";import"./chunk-NEK3OOAM-0db4f6d4.js";const Et={title:"Components/Forms/DisplayIf",decorators:[o=>t.jsx(f,{mt:"40px",children:t.jsx(o,{})})]},x=s().shape({title:i().required().meta({placeholder:"Title"}).label("Title"),description:i().meta({type:"textarea"}).label("Description")}),r={args:{onSubmit:c},render({onSubmit:o}){return t.jsx(t.Fragment,{children:t.jsx(l,{defaultValues:{title:"",description:""},resolver:u(x),onSubmit:o,children:t.jsxs(d,{children:[t.jsx(m,{name:"title",label:"Title"}),t.jsx(b,{name:"title",condition:a=>!!a,children:t.jsx(m,{name:"description",label:"Description"})}),t.jsx(S,{children:"Save post"})]})})})}};var e,p,n;r.parameters={...r.parameters,docs:{...(e=r.parameters)==null?void 0:e.docs,source:{originalSource:`{
  args: {
    onSubmit
  },
  render({
    onSubmit
  }: any) {
    return <>\r
        <Form defaultValues={{
        title: '',
        description: ''
      }} resolver={yupResolver(postSchema)} onSubmit={onSubmit}>\r
          <FormLayout>\r
            <Field name="title" label="Title" />\r
            <DisplayIf name="title" condition={value => !!value}>\r
              <Field name="description" label="Description" />\r
            </DisplayIf>\r
\r
            <SubmitButton>Save post</SubmitButton>\r
          </FormLayout>\r
        </Form>\r
      </>;
  }
}`,...(n=(p=r.parameters)==null?void 0:p.docs)==null?void 0:n.source}}};const Rt=["Basic"];export{r as Basic,Rt as __namedExportsOrder,Et as default};
