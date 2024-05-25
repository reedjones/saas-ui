import{j as e,f as Le}from"./chunk-ZJJGQIVY-3d316dd5.js";import{r as W}from"./index-76fb7be0.js";import{c as xe,a as l}from"./index.esm-c3932d88.js";import{c as Ne,b as d}from"./create-zod-form-5c108fc7.js";import{L as Te}from"./index-c8a83b65.js";import{c as Ve}from"./index-2ce734bd.js";import{F as i}from"./index-fc1666ba.js";import{o}from"./helpers-23723f8c.js";import{F as n,S as m,f as Ce,e as Be,D as We,a as A,r as ve,t as Re,v as Ae}from"./create-form-ca682449.js";import{c as De}from"./create-yup-form-78850bae.js";import{C as Pe}from"./chunk-5MKCW436-7cead567.js";import{S as V}from"./chunk-ZHMYA64R-c4ed5002.js";import{B as Ie}from"./chunk-UVUR7MCU-4e62fe64.js";import{F as je,a as qe}from"./chunk-DFWC5MHP-a7a26ffe.js";import{F as Se}from"./chunk-H46NUPBZ-200868d1.js";import{I as Ee}from"./chunk-6CVSDS6C-58dff80d.js";import{H as ke}from"./chunk-3ASUQ6PA-012a436b.js";import{T as He}from"./chunk-TK6VMDNP-102da1be.js";import{B as we}from"./chunk-PULVB27S-e893e50c.js";import"./_commonjsHelpers-de833af9.js";import"./resolvers-d84e4cdf.js";import"./iconBase-9679482c.js";import"./chunk-O3SWHQEE-d6839529.js";import"./chunk-ITIKTQWJ-0c049f00.js";import"./steps-fd703130.js";import"./index-7abe7895.js";import"./chunk-MFVQSVQB-c3da265d.js";import"./emotion-react.browser.esm-b737cf90.js";import"./hoist-non-react-statics.cjs-3f8ebaa8.js";import"./chunk-2GBDXOMA-c3ee5274.js";import"./chunk-RKXMPHPI-1a3f22a5.js";import"./chunk-6NHXDBFO-987cde81.js";import"./index-c6b2a32b.js";import"./motion-56319619.js";import"./chunk-AZVKQZKI-601f6f7e.js";import"./number-input-19cdb65d.js";import"./index-30c8b35e.js";import"./index-f68c64fe.js";import"./index-938a7d6c.js";import"./index-5f92aa2b.js";import"./index-3e7aa64e.js";import"./index-17e33fe9.js";import"./chunk-56K2BSAJ-a2503b05.js";import"./icons-d10032f4.js";import"./chunk-2ZHRCML3-0a67530c.js";import"./index-e1b4ee4c.js";import"./chunk-R3DH46PF-f0689d26.js";import"./password-input-a2c4f82c.js";import"./input-right-button-06426f1d.js";import"./chunk-VTV6N5LE-65c458b7.js";import"./chunk-CWVAJCXJ-22427db6.js";import"./index-979d1106.js";import"./select-c1165209.js";import"./utils-13c12efa.js";import"./chunk-7JSBRQFI-041d2b19.js";import"./chunk-KA2477BY-f6a12dd2.js";import"./chunk-HB6KBUMZ-d43cc10c.js";import"./index-514c0e80.js";import"./index-6843c920.js";import"./index-660fa4d3.js";import"./index-c4a63d44.js";import"./chunk-6MF6NSK4-d26e88d8.js";import"./chunk-B3RAGXFV-fa0ff449.js";import"./chunk-PTXXWAJU-4600a0a7.js";import"./radio-input-cf776e5a.js";import"./chunk-RDF2AYID-fa24afd3.js";import"./native-select-327410ce.js";import"./chunk-I5V4ORUK-e3ad9ce2.js";import"./chunk-NEK3OOAM-0db4f6d4.js";import"./chunk-G72KV6MB-be2d631b.js";import"./yup-7d6b2579.js";import"./chunk-T6ZDZOLO-8d3f3a64.js";import"./chunk-5PH6ULNP-89f88b5a.js";import"./chunk-34PD6CUK-c14fe2a1.js";import"./index-add592e3.js";const Ft={title:"Components/Forms/Form",component:i,decorators:[r=>e.jsx(Pe,{mt:"40px",children:e.jsx(r,{})})]};xe({email:l().email().required().label("Email address"),password:l().required().label("Password").meta({type:"password"})});const p={render(){return e.jsx(i,{defaultValues:{title:"Form",description:"A basic layout"},onSubmit:o,children:({Field:r})=>e.jsxs(n,{children:[e.jsx(r,{name:"title",label:"Title"}),e.jsx(r,{type:"text",name:"description",label:"Description",onChange:t=>console.log(t)}),e.jsx(m,{})]})})}},F={render(){return e.jsx(i,{defaultValues:{title:"",description:""},onSubmit:o,children:({Field:r})=>e.jsxs(n,{children:[e.jsx(r,{name:"title",label:"Title",rules:{required:"Title is required"}}),e.jsx(r,{name:"description",label:"Description",rules:{required:"Description is required"}}),e.jsx(m,{})]})})}},v=Ce(Le((r,t)=>e.jsx("div",{ref:t,children:r.customFieldProp}))),R=()=>({extraProps:["infoLabel"],BaseField:r=>{const[{children:t,infoLabel:a},c]=ve(r,["children","infoLabel"]),{controlProps:C,label:B,help:u,hideLabel:ge,error:s}=Re(c);return e.jsxs(je,{...C,isInvalid:!!s,children:[ge?null:e.jsxs(ke,{alignItems:"center",mb:"2",spacing:"0",children:[e.jsx(Se,{mb:"0",children:B}),a?e.jsx(He,{label:a,children:e.jsx("span",{children:e.jsx(Te,{})})}):null]}),e.jsxs(we,{children:[t,u&&!(s!=null&&s.message)?e.jsx(qe,{children:u}):null,(s==null?void 0:s.message)&&e.jsx(Ae,{children:s==null?void 0:s.message})]})]})}}),ye=Be({fields:{custom:v},getBaseField:R}),b={render(){return e.jsx(ye,{defaultValues:{title:"Form",description:"A basic layout"},onSubmit:o,children:({Field:r})=>e.jsxs(n,{children:[e.jsx(r,{name:"title",label:"Title",type:"text"}),e.jsx(r,{name:"description",label:"Description",type:"textarea"}),e.jsx(m,{})]})})}},f={render(){return e.jsx(ye,{defaultValues:{title:"Form",description:"A basic layout",custom:""},onSubmit:o,children:({Field:r})=>e.jsxs(n,{children:[e.jsx(r,{name:"title",label:"Title",type:"text"}),e.jsx(r,{name:"description",label:"Description",type:"textarea"}),e.jsx(r,{name:"custom",type:"custom",label:"Custom",customFieldProp:"custom",infoLabel:"Hello there"}),e.jsx(m,{})]})})}},Ye=Ne({fields:{custom:v},getBaseField:R}),Ze=d.object({firstName:d.string().min(2),age:d.number(),custom:d.string().optional()}),h={render(r){return e.jsx(Ye,{schema:Ze,defaultValues:{firstName:""},onSubmit:(r==null?void 0:r.onSubmit)||o,children:({Field:t})=>e.jsxs(n,{children:[e.jsx(t,{name:"firstName",label:"Name"}),e.jsx(t,{name:"age",label:"Age",type:"number"}),e.jsx(t,{name:"custom",type:"custom",label:"Custom",customFieldProp:"custom",infoLabel:"Hello there"}),e.jsx(m,{})]})})}},Ue=De({fields:{custom:v},getBaseField:R}),ze=xe({name:l().min(2,"Too short").max(25,"Too long").required().label("Title"),description:l().min(2,"Too short").max(25,"Too long").required().label("Description"),custom:l()}),x={render(r){return e.jsx(Ue,{schema:ze,defaultValues:{name:"",description:""},onSubmit:r.onSubmit||o,children:({Field:t})=>e.jsxs(n,{children:[e.jsx(t,{name:"name",label:"Title"}),e.jsx(t,{name:"description",label:"Description"}),e.jsx(t,{name:"custom",type:"custom",label:"Custom",customFieldProp:"custom",infoLabel:"Hello there"}),e.jsx(m,{})]})})}},Oe=Ve(),_e={type:"object",properties:{firstName:{type:"string"},age:{type:"integer"}},required:["firstName","age"],additionalProperties:!1},j=()=>e.jsx(Oe,{schema:_e,defaultValues:{firstName:""},onSubmit:o,children:({Field:r})=>e.jsxs(n,{children:[e.jsx(r,{name:"firstName",label:"Name"}),e.jsx(r,{name:"age",label:"Age"})]})}),S=()=>{const r=W.useRef(null);return W.useEffect(()=>{var a,c;console.log((a=r.current)==null?void 0:a.formState);const t=(c=r.current)==null?void 0:c.watch((C,{name:B,type:u})=>{console.log(C,B,u)});return()=>{t==null||t.unsubscribe()}},[r.current]),e.jsx(V,{children:e.jsx(i,{defaultValues:{title:"Form",description:"A basic layout"},onSubmit:o,formRef:r,children:({Field:t})=>e.jsxs(n,{children:[e.jsx(t,{name:"title",label:"Title"}),e.jsx(t,{name:"description",label:"Description"})]})})})},y=()=>e.jsx(V,{children:e.jsx(i,{defaultValues:{firstName:"Eelco",lastName:"Wiersma"},onSubmit:o,children:({Field:r})=>e.jsxs(n,{children:[e.jsx(r,{name:"firstName",label:"First name"}),e.jsx(r,{name:"lastName",label:"Last name"})]})})}),g=()=>{const r=W.useRef(null);return e.jsx(i,{formRef:r,defaultValues:{firstName:"",lastName:""},onSubmit:()=>Promise.resolve(),children:({Field:t})=>e.jsxs(n,{children:[e.jsx(t,{name:"firstName",label:"First name",rules:{required:"Please enter your first name"}}),e.jsx(t,{name:"lastName",label:"Last name"}),e.jsx(We,{name:"firstName",condition:a=>!!a,children:e.jsx(Ie,{onClick:()=>{var a;return(a=r.current)==null?void 0:a.reset()},children:"Reset"})}),e.jsx(m,{disableIfUntouched:!0,disableIfInvalid:!0,children:"Save"})]})})},L=()=>e.jsx(V,{children:e.jsx(i,{defaultValues:{firstName:"Eelco",lastName:"Wiersma"},onSubmit:o,onChange:r=>console.log("change",r),children:({Field:r})=>e.jsxs(n,{children:[e.jsx(r,{name:"firstName",label:"First name"}),e.jsx(r,{name:"lastName",label:"Last name"})]})})}),N=()=>e.jsx(V,{children:e.jsx(i,{defaultValues:{firstName:"Eelco",lastName:"Wiersma"},onSubmit:o,onChange:r=>console.log("change",r),children:({Field:r,register:t})=>e.jsxs(n,{children:[e.jsx(r,{name:"firstName",label:"First name"}),e.jsxs(je,{children:[e.jsx(Se,{children:"Last name"}),e.jsx(Ee,{...t("lastName")})]})]})})}),T=()=>e.jsx(e.Fragment,{children:e.jsx(i,{defaultValues:{title:"Form",description:"A basic layout"},onSubmit:o,children:e.jsxs(n,{children:[e.jsx(A,{name:"title",label:"Title"}),e.jsx(A,{name:"description",label:"Description"}),e.jsx(m,{variant:"solid",colorScheme:"cyan"})]})})});var D,P,I;p.parameters={...p.parameters,docs:{...(D=p.parameters)==null?void 0:D.docs,source:{originalSource:`{
  render() {
    return <Form defaultValues={{
      title: 'Form',
      description: 'A basic layout'
    }} onSubmit={onSubmit}>\r
        {({
        Field
      }) => <FormLayout>\r
            <Field name="title" label="Title" />\r
            <Field type="text" name="description" label="Description" onChange={e => console.log(e)} />\r
\r
            <SubmitButton />\r
          </FormLayout>}\r
      </Form>;
  }
}`,...(I=(P=p.parameters)==null?void 0:P.docs)==null?void 0:I.source}}};var q,E,k;F.parameters={...F.parameters,docs:{...(q=F.parameters)==null?void 0:q.docs,source:{originalSource:`{
  render() {
    return <Form defaultValues={{
      title: '',
      description: ''
    }} onSubmit={onSubmit}>\r
        {({
        Field
      }) => <FormLayout>\r
            <Field name="title" label="Title" rules={{
          required: 'Title is required'
        }} />\r
            <Field name="description" label="Description" rules={{
          required: 'Description is required'
        }} />\r
\r
            <SubmitButton />\r
          </FormLayout>}\r
      </Form>;
  }
}`,...(k=(E=F.parameters)==null?void 0:E.docs)==null?void 0:k.source}}};var H,w,Y;b.parameters={...b.parameters,docs:{...(H=b.parameters)==null?void 0:H.docs,source:{originalSource:`{
  render() {
    return <TypedForm defaultValues={{
      title: 'Form',
      description: 'A basic layout'
    }} onSubmit={onSubmit}>\r
        {({
        Field
      }) => <FormLayout>\r
            <Field name="title" label="Title" type="text" />\r
            <Field name="description" label="Description" type="textarea" />\r
\r
            <SubmitButton />\r
          </FormLayout>}\r
      </TypedForm>;
  }
}`,...(Y=(w=b.parameters)==null?void 0:w.docs)==null?void 0:Y.source}}};var Z,U,z;f.parameters={...f.parameters,docs:{...(Z=f.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  render() {
    return <TypedForm defaultValues={{
      title: 'Form',
      description: 'A basic layout',
      custom: ''
    }} onSubmit={onSubmit}>\r
        {({
        Field
      }) => <FormLayout>\r
            <Field name="title" label="Title" type="text" />\r
            <Field name="description" label="Description" type="textarea" />\r
            <Field name="custom" type="custom" label="Custom" customFieldProp="custom" infoLabel="Hello there" />\r
            <SubmitButton />\r
          </FormLayout>}\r
      </TypedForm>;
  }
}`,...(z=(U=f.parameters)==null?void 0:U.docs)==null?void 0:z.source}}};var O,_,$;h.parameters={...h.parameters,docs:{...(O=h.parameters)==null?void 0:O.docs,source:{originalSource:`{
  render(props) {
    return <ZodForm schema={zodSchema} defaultValues={{
      firstName: ''
    }} onSubmit={props?.onSubmit || onSubmit}>\r
        {({
        Field
      }) => <FormLayout>\r
            <Field name="firstName" label="Name" />\r
            <Field name="age" label="Age" type="number" />\r
            <Field name="custom" type="custom" label="Custom" customFieldProp="custom" infoLabel="Hello there" />\r
            <SubmitButton />\r
          </FormLayout>}\r
      </ZodForm>;
  }
}`,...($=(_=h.parameters)==null?void 0:_.docs)==null?void 0:$.source}}};var M,G,J;x.parameters={...x.parameters,docs:{...(M=x.parameters)==null?void 0:M.docs,source:{originalSource:`{
  render(props) {
    return <YupForm schema={yupSchema} defaultValues={{
      name: '',
      description: ''
    }} onSubmit={props.onSubmit || onSubmit}>\r
        {({
        Field
      }) => <FormLayout>\r
            <Field name="name" label="Title" />\r
            <Field name="description" label="Description" />\r
            <Field name="custom" type="custom" label="Custom" customFieldProp="custom" infoLabel="Hello there" />\r
            <SubmitButton />\r
          </FormLayout>}\r
      </YupForm>;
  }
}`,...(J=(G=x.parameters)==null?void 0:G.docs)==null?void 0:J.source}}};var K,Q,X;j.parameters={...j.parameters,docs:{...(K=j.parameters)==null?void 0:K.docs,source:{originalSource:`() => <AjvForm schema={ajvSchema} defaultValues={{
  firstName: ''
}} onSubmit={onSubmit}>\r
    {({
    Field
  }) => <FormLayout>\r
        <Field name="firstName" label="Name" />\r
        <Field name="age" label="Age" />\r
      </FormLayout>}\r
  </AjvForm>`,...(X=(Q=j.parameters)==null?void 0:Q.docs)==null?void 0:X.source}}};var ee,re,te;S.parameters={...S.parameters,docs:{...(ee=S.parameters)==null?void 0:ee.docs,source:{originalSource:`() => {
  const ref = React.useRef<UseFormReturn>(null);
  React.useEffect(() => {
    // Access the form state
    console.log(ref.current?.formState);

    // Watch
    const sub = ref.current?.watch((value, {
      name,
      type
    }) => {
      console.log(value, name, type);
    });

    // Submit the form
    // ref.current?.handleSubmit(onSubmit)()

    return () => {
      sub?.unsubscribe();
    };
  }, [ref.current]);
  return <Stack>\r
      <Form defaultValues={{
      title: 'Form',
      description: 'A basic layout'
    }} onSubmit={onSubmit} formRef={ref}>\r
        {({
        Field
      }) => <FormLayout>\r
            <Field name="title" label="Title" />\r
            <Field name="description" label="Description" />\r
          </FormLayout>}\r
      </Form>\r
    </Stack>;
}`,...(te=(re=S.parameters)==null?void 0:re.docs)==null?void 0:te.source}}};var ne,oe,ae;y.parameters={...y.parameters,docs:{...(ne=y.parameters)==null?void 0:ne.docs,source:{originalSource:`() => {
  return <Stack>\r
      <Form defaultValues={{
      firstName: 'Eelco',
      lastName: 'Wiersma'
    }} onSubmit={onSubmit}>\r
        {({
        Field
      }) => <FormLayout>\r
            <Field name="firstName" label="First name" />\r
            <Field name="lastName" label="Last name" />\r
          </FormLayout>}\r
      </Form>\r
    </Stack>;
}`,...(ae=(oe=y.parameters)==null?void 0:oe.docs)==null?void 0:ae.source}}};var se,ie,me;g.parameters={...g.parameters,docs:{...(se=g.parameters)==null?void 0:se.docs,source:{originalSource:`() => {
  const ref = React.useRef<UseFormReturn<FormInputs, object>>(null);
  return <Form formRef={ref} defaultValues={{
    firstName: '',
    lastName: ''
  }} onSubmit={() => Promise.resolve()}>\r
      {({
      Field
    }) => <FormLayout>\r
          <Field name="firstName" label="First name" rules={{
        required: 'Please enter your first name'
      }} />\r
          <Field name="lastName" label="Last name" />\r
          <DisplayIf name="firstName" condition={value => !!value}>\r
            <Button onClick={() => ref.current?.reset()}>Reset</Button>\r
          </DisplayIf>\r
\r
          <SubmitButton disableIfUntouched disableIfInvalid>\r
            Save\r
          </SubmitButton>\r
        </FormLayout>}\r
    </Form>;
}`,...(me=(ie=g.parameters)==null?void 0:ie.docs)==null?void 0:me.source}}};var le,ce,ue;L.parameters={...L.parameters,docs:{...(le=L.parameters)==null?void 0:le.docs,source:{originalSource:`() => {
  return <Stack>\r
      <Form<PostInputs> defaultValues={{
      firstName: 'Eelco',
      lastName: 'Wiersma'
    }} onSubmit={onSubmit} onChange={e => console.log('change', e)}>\r
        {({
        Field
      }) => <FormLayout>\r
            <Field name="firstName" label="First name" />\r
            <Field name="lastName" label="Last name" />\r
          </FormLayout>}\r
      </Form>\r
    </Stack>;
}`,...(ue=(ce=L.parameters)==null?void 0:ce.docs)==null?void 0:ue.source}}};var de,pe,Fe;N.parameters={...N.parameters,docs:{...(de=N.parameters)==null?void 0:de.docs,source:{originalSource:`() => {
  return <Stack>\r
      <Form<PostInputs> defaultValues={{
      firstName: 'Eelco',
      lastName: 'Wiersma'
    }} onSubmit={onSubmit} onChange={e => console.log('change', e)}>\r
        {({
        Field,
        register
      }) => {
        return <FormLayout>\r
              <Field name="firstName" label="First name" />\r
              <FormControl>\r
                <FormLabel>Last name</FormLabel>\r
                <Input {...register('lastName')} />\r
              </FormControl>\r
            </FormLayout>;
      }}\r
      </Form>\r
    </Stack>;
}`,...(Fe=(pe=N.parameters)==null?void 0:pe.docs)==null?void 0:Fe.source}}};var be,fe,he;T.parameters={...T.parameters,docs:{...(be=T.parameters)==null?void 0:be.docs,source:{originalSource:`() => <>\r
    <Form defaultValues={{
    title: 'Form',
    description: 'A basic layout'
  }} onSubmit={onSubmit}>\r
      <FormLayout>\r
        <Field name="title" label="Title" />\r
        <Field name="description" label="Description" />\r
\r
        <SubmitButton variant="solid" colorScheme="cyan" />\r
      </FormLayout>\r
    </Form>\r
  </>`,...(he=(fe=T.parameters)==null?void 0:fe.docs)==null?void 0:he.source}}};const bt=["Basic","WithValidationRules","BasicTyped","CustomBaseField","WithZodSchema","WithYupSchema","WithAjvForm","FormState","WithTypescript","TypescriptWithRef","WithOnChange","WithRegister","WithCustomSubmit"];export{p as Basic,b as BasicTyped,f as CustomBaseField,S as FormState,g as TypescriptWithRef,j as WithAjvForm,T as WithCustomSubmit,L as WithOnChange,N as WithRegister,y as WithTypescript,F as WithValidationRules,x as WithYupSchema,h as WithZodSchema,bt as __namedExportsOrder,Ft as default};
