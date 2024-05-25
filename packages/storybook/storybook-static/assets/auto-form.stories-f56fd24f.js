import{j as o}from"./chunk-ZJJGQIVY-3d316dd5.js";import{c as u,a as p,b as R}from"./index.esm-c3932d88.js";import{o as r,s as e,e as _,c as B,a as O,z as U}from"./create-zod-form-5c108fc7.js";import{F as D}from"./index-fc1666ba.js";import{o as a}from"./helpers-23723f8c.js";import{c as k}from"./create-yup-form-78850bae.js";import{C as w}from"./chunk-5MKCW436-7cead567.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";import"./create-form-ca682449.js";import"./chunk-O3SWHQEE-d6839529.js";import"./chunk-DFWC5MHP-a7a26ffe.js";import"./index-7abe7895.js";import"./index-17e33fe9.js";import"./chunk-2GBDXOMA-c3ee5274.js";import"./chunk-H46NUPBZ-200868d1.js";import"./chunk-PULVB27S-e893e50c.js";import"./chunk-AZVKQZKI-601f6f7e.js";import"./number-input-19cdb65d.js";import"./index-30c8b35e.js";import"./index-f68c64fe.js";import"./index-938a7d6c.js";import"./index-5f92aa2b.js";import"./index-3e7aa64e.js";import"./chunk-56K2BSAJ-a2503b05.js";import"./icons-d10032f4.js";import"./chunk-2ZHRCML3-0a67530c.js";import"./index-e1b4ee4c.js";import"./chunk-R3DH46PF-f0689d26.js";import"./password-input-a2c4f82c.js";import"./input-right-button-06426f1d.js";import"./chunk-UVUR7MCU-4e62fe64.js";import"./chunk-T6ZDZOLO-8d3f3a64.js";import"./chunk-5PH6ULNP-89f88b5a.js";import"./emotion-react.browser.esm-b737cf90.js";import"./hoist-non-react-statics.cjs-3f8ebaa8.js";import"./chunk-6CVSDS6C-58dff80d.js";import"./chunk-VTV6N5LE-65c458b7.js";import"./chunk-CWVAJCXJ-22427db6.js";import"./index-979d1106.js";import"./select-c1165209.js";import"./chunk-ITIKTQWJ-0c049f00.js";import"./utils-13c12efa.js";import"./chunk-MFVQSVQB-c3da265d.js";import"./chunk-7JSBRQFI-041d2b19.js";import"./chunk-KA2477BY-f6a12dd2.js";import"./chunk-HB6KBUMZ-d43cc10c.js";import"./index-514c0e80.js";import"./index-6843c920.js";import"./index-660fa4d3.js";import"./index-c4a63d44.js";import"./chunk-6MF6NSK4-d26e88d8.js";import"./motion-56319619.js";import"./chunk-B3RAGXFV-fa0ff449.js";import"./chunk-PTXXWAJU-4600a0a7.js";import"./radio-input-cf776e5a.js";import"./chunk-RDF2AYID-fa24afd3.js";import"./chunk-ZHMYA64R-c4ed5002.js";import"./chunk-G72KV6MB-be2d631b.js";import"./native-select-327410ce.js";import"./chunk-3ASUQ6PA-012a436b.js";import"./chunk-I5V4ORUK-e3ad9ce2.js";import"./chunk-NEK3OOAM-0db4f6d4.js";import"./resolvers-d84e4cdf.js";import"./steps-fd703130.js";import"./chunk-RKXMPHPI-1a3f22a5.js";import"./chunk-6NHXDBFO-987cde81.js";import"./index-c6b2a32b.js";import"./yup-7d6b2579.js";const co={title:"Components/Forms/AutoForm",decorators:[L=>o.jsx(w,{mt:"40px",children:o.jsx(L,{})})]},q={firstName:{type:"text",label:"First name",rules:{required:!0}},lastName:{type:"text",label:"Last name"},role:{type:"select",label:"Role",options:[{label:"Admin",value:"admin"},{label:"User",value:"user"}]},emails:{type:"array",label:"Emails",items:{type:"object",properties:{address:{label:"Email address"}}}}},G=u().shape({firstName:p().min(2,"Too short").max(25,"Too long").required().label("First name"),lastName:p().min(2,"Too short").max(25,"Too long").required().label("Last name"),emails:R().of(u().shape({address:p().label("Email address")})).label("Email addresses")}),H=k(),I=r({firstName:e().min(2,"Too short").max(25,"Too long").describe("First name"),lastName:e().min(2,"Too short").max(25,"Too long").describe("Last name"),role:_(["admin","user"]).default("user").describe("Role"),emails:r({address:e().describe("Email address")}).array().describe("Email addresses")}),l=B(),t=()=>o.jsx(D,{defaultValues:{firstName:"",lastName:"",emails:[{address:""}],role:"user"},schema:q,onSubmit:a}),s=()=>o.jsx(D,{defaultValues:{firstName:"",lastName:"",role:"",emails:[{address:""}]},schema:q,onSubmit:a,fields:{role:{placeholder:"Select a role"},submit:{children:"Save",variant:"secondary"}}}),m=()=>o.jsx(H,{schema:G,defaultValues:{firstName:"",lastName:"",emails:[{address:""}]},onSubmit:a}),i=()=>o.jsx(l,{schema:I,defaultValues:{firstName:"",lastName:"",emails:[{address:""}]},onSubmit:a}),n=()=>o.jsx(l,{schema:r({title:e().min(2,"Too short").max(25,"Too long").describe("Title"),author:r({name:e().describe("Name"),email:e().email().describe("Email")}).describe("Author")}),defaultValues:{title:"",author:{name:"",email:""}},fields:{author:{type:"object",columns:2},"author.email":{type:"email"}},onSubmit:a}),d=()=>o.jsx(l,{schema:r({description:e().min(2,"Too short").max(25,"Too long").describe("Description"),todos:O(r({todo:e().describe("Todo")})).min(1,"Add minimal 1 todo").max(10,"Maximum 10 todos").describe("Todos")}),defaultValues:{description:"",todos:[{todo:""}]},fields:{"todos.$.todo":{type:"textarea"},submit:{children:"Save"}},onSubmit:a}),c=()=>o.jsx(l,{schema:r({description:e().min(2,"Too short").describe(U({label:"Description",type:"textarea"}))}),defaultValues:{description:""},onSubmit:a});var b,h,S;t.parameters={...t.parameters,docs:{...(b=t.parameters)==null?void 0:b.docs,source:{originalSource:`() => <Form defaultValues={{
  firstName: '',
  lastName: '',
  emails: [{
    address: ''
  }],
  role: 'user'
}} schema={basicSchema} onSubmit={onSubmit} />`,...(S=(h=t.parameters)==null?void 0:h.docs)==null?void 0:S.source}}};var f,x,T;s.parameters={...s.parameters,docs:{...(f=s.parameters)==null?void 0:f.docs,source:{originalSource:`() => <Form defaultValues={{
  firstName: '',
  lastName: '',
  role: '',
  emails: [{
    address: ''
  }]
}} schema={basicSchema} onSubmit={onSubmit} fields={{
  role: {
    placeholder: 'Select a role'
  },
  submit: {
    children: 'Save',
    variant: 'secondary'
  }
}} />`,...(T=(x=s.parameters)==null?void 0:x.docs)==null?void 0:T.source}}};var N,y,g;m.parameters={...m.parameters,docs:{...(N=m.parameters)==null?void 0:N.docs,source:{originalSource:`() => <YupForm schema={schema} defaultValues={{
  firstName: '',
  lastName: '',
  emails: [{
    address: ''
  }]
}} onSubmit={onSubmit} />`,...(g=(y=m.parameters)==null?void 0:y.docs)==null?void 0:g.source}}};var j,F,z;i.parameters={...i.parameters,docs:{...(j=i.parameters)==null?void 0:j.docs,source:{originalSource:`() => <ZodForm schema={zodSchema} defaultValues={{
  firstName: '',
  lastName: '',
  emails: [{
    address: ''
  }]
}} onSubmit={onSubmit} />`,...(z=(F=i.parameters)==null?void 0:F.docs)==null?void 0:z.source}}};var V,Z,E;n.parameters={...n.parameters,docs:{...(V=n.parameters)==null?void 0:V.docs,source:{originalSource:`() => <ZodForm schema={z.object({
  title: z.string().min(2, 'Too short').max(25, 'Too long').describe('Title'),
  author: z.object({
    name: z.string().describe('Name'),
    email: z.string().email().describe('Email')
  }).describe('Author')
})} defaultValues={{
  title: '',
  author: {
    name: '',
    email: ''
  }
}} fields={{
  author: {
    type: 'object',
    columns: 2
  },
  'author.email': {
    type: 'email'
  }
}} onSubmit={onSubmit} />`,...(E=(Z=n.parameters)==null?void 0:Z.docs)==null?void 0:E.source}}};var v,A,M;d.parameters={...d.parameters,docs:{...(v=d.parameters)==null?void 0:v.docs,source:{originalSource:`() => <ZodForm schema={z.object({
  description: z.string().min(2, 'Too short').max(25, 'Too long').describe('Description'),
  todos: z.array(z.object({
    todo: z.string().describe('Todo')
  })).min(1, 'Add minimal 1 todo').max(10, 'Maximum 10 todos').describe('Todos')
})} defaultValues={{
  description: '',
  todos: [{
    todo: ''
  }]
}} fields={{
  'todos.$.todo': {
    type: 'textarea'
  },
  submit: {
    children: 'Save'
  }
}} onSubmit={onSubmit} />`,...(M=(A=d.parameters)==null?void 0:A.docs)==null?void 0:M.source}}};var C,Y,$;c.parameters={...c.parameters,docs:{...(C=c.parameters)==null?void 0:C.docs,source:{originalSource:`() => <ZodForm schema={z.object({
  description: z.string().min(2, 'Too short').describe(zodMeta({
    label: 'Description',
    type: 'textarea'
  }))
})} defaultValues={{
  description: ''
}} onSubmit={onSubmit} />`,...($=(Y=c.parameters)==null?void 0:Y.docs)==null?void 0:$.source}}};const lo=["Basic","CustomSubmit","YupSchema","ZodSchema","ZodSchemaNested","ZodSchemaArray","ZodSchemaMeta"];export{t as Basic,s as CustomSubmit,m as YupSchema,i as ZodSchema,d as ZodSchemaArray,c as ZodSchemaMeta,n as ZodSchemaNested,lo as __namedExportsOrder,co as default};
