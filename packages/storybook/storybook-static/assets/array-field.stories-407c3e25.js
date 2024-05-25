import{j as e}from"./chunk-ZJJGQIVY-3d316dd5.js";import{r as u}from"./index-76fb7be0.js";import{c as s,a as n,b as j,d as X}from"./index.esm-c3932d88.js";import{F as p}from"./index-995f0b15.js";import{F as S}from"./index-fc1666ba.js";import{o as i}from"./helpers-23723f8c.js";import{F as m,S as d,g as Z,h as ee,i as re,j as te,u as ae,k as ie,A as ne,a as T,l as le,m as oe}from"./create-form-ca682449.js";import{C as se}from"./chunk-5MKCW436-7cead567.js";import{B as me}from"./chunk-PULVB27S-e893e50c.js";import{B as J}from"./chunk-UVUR7MCU-4e62fe64.js";import"./_commonjsHelpers-de833af9.js";import"./create-yup-form-78850bae.js";import"./yup-7d6b2579.js";import"./resolvers-d84e4cdf.js";import"./create-yup-dialog-20db29da.js";import"./form-33f8becd.js";import"./modal-c3eb0174.js";import"./chunk-OFOVX77R-a988abeb.js";import"./chunk-NABYTFTG-691324af.js";import"./index-17e33fe9.js";import"./chunk-34PD6CUK-c14fe2a1.js";import"./index-7abe7895.js";import"./index-3e7aa64e.js";import"./index-add592e3.js";import"./index-c6b2a32b.js";import"./motion-56319619.js";import"./index-660fa4d3.js";import"./chunk-TR226DUX-6654fea8.js";import"./chunk-6NHXDBFO-987cde81.js";import"./chunk-RAWN7VJ3-d8d1ff9c.js";import"./chunk-4FCEGNGT-b11834d9.js";import"./chunk-37N6GCLA-d6b68ca5.js";import"./chunk-2GBDXOMA-c3ee5274.js";import"./chunk-EL2VKIZQ-30979218.js";import"./chunk-7254PCTD-b2d45611.js";import"./chunk-O3SWHQEE-d6839529.js";import"./chunk-ITIKTQWJ-0c049f00.js";import"./steps-fd703130.js";import"./chunk-MFVQSVQB-c3da265d.js";import"./emotion-react.browser.esm-b737cf90.js";import"./hoist-non-react-statics.cjs-3f8ebaa8.js";import"./chunk-RKXMPHPI-1a3f22a5.js";import"./chunk-DFWC5MHP-a7a26ffe.js";import"./chunk-H46NUPBZ-200868d1.js";import"./chunk-AZVKQZKI-601f6f7e.js";import"./number-input-19cdb65d.js";import"./index-30c8b35e.js";import"./index-f68c64fe.js";import"./index-938a7d6c.js";import"./index-5f92aa2b.js";import"./chunk-56K2BSAJ-a2503b05.js";import"./icons-d10032f4.js";import"./chunk-2ZHRCML3-0a67530c.js";import"./index-e1b4ee4c.js";import"./chunk-R3DH46PF-f0689d26.js";import"./password-input-a2c4f82c.js";import"./input-right-button-06426f1d.js";import"./chunk-6CVSDS6C-58dff80d.js";import"./chunk-VTV6N5LE-65c458b7.js";import"./chunk-CWVAJCXJ-22427db6.js";import"./index-979d1106.js";import"./select-c1165209.js";import"./utils-13c12efa.js";import"./chunk-7JSBRQFI-041d2b19.js";import"./chunk-KA2477BY-f6a12dd2.js";import"./chunk-HB6KBUMZ-d43cc10c.js";import"./index-514c0e80.js";import"./index-6843c920.js";import"./index-c4a63d44.js";import"./chunk-6MF6NSK4-d26e88d8.js";import"./chunk-B3RAGXFV-fa0ff449.js";import"./chunk-PTXXWAJU-4600a0a7.js";import"./radio-input-cf776e5a.js";import"./chunk-RDF2AYID-fa24afd3.js";import"./chunk-ZHMYA64R-c4ed5002.js";import"./chunk-G72KV6MB-be2d631b.js";import"./native-select-327410ce.js";import"./chunk-3ASUQ6PA-012a436b.js";import"./chunk-I5V4ORUK-e3ad9ce2.js";import"./chunk-NEK3OOAM-0db4f6d4.js";import"./chunk-T6ZDZOLO-8d3f3a64.js";import"./chunk-5PH6ULNP-89f88b5a.js";const Wr={title:"Components/Forms/ArrayField",decorators:[r=>e.jsx(se,{mt:"40px",children:e.jsx(r,{})})]},de=s().shape({title:n().required().meta({placeholder:"Title"}).label("Title"),description:n().meta({type:"textarea"}).label("Description")}),g=s().shape({arrayField:j().min(2).max(4).of(de).label("Array field")}),c={render(){return e.jsx(S,{defaultValues:{arrayField:[{title:"Test"}]},schema:{arrayField:{type:"array",label:"Posts",items:{type:"object",properties:{title:{label:"Title",rules:{required:!0}},description:{label:"Description",type:"textarea"}}}}},onSubmit:i})}},y=()=>e.jsx(e.Fragment,{children:e.jsx(S,{defaultValues:{arrayField:[{title:"Test",description:""},{title:"Test",description:""}]},schema:{arrayField:{type:"array",label:"Posts",items:{type:"object",properties:{title:{label:"Title",rules:{required:!0}},description:{label:"Description",type:"textarea"}}}}},onSubmit:i,children:({Field:r,ArrayField:t})=>e.jsxs(m,{children:[e.jsxs(t,{name:"arrayField",label:"Comments",defaultValue:{title:"",description:""},children:[e.jsx(r,{name:"arrayField.$.title",label:"Title"}),e.jsx(r,{name:"arrayField.$.description",label:"Description",type:"textarea"})]}),e.jsx(d,{children:"Submit"})]})})}),F=()=>e.jsx(e.Fragment,{children:e.jsx(p,{schema:g,defaultValues:{arrayField:[{title:"Test"}]},onSubmit:i})}),b=()=>e.jsx(e.Fragment,{children:e.jsx(p,{schema:g,defaultValues:{arrayField:[{title:"Test",description:""}]},onSubmit:i,children:({Field:r,ArrayField:t})=>e.jsxs(m,{children:[e.jsxs(t,{name:"arrayField",label:"Comments",defaultValue:{},children:[e.jsx(r,{name:"arrayField.$.title",label:"Title"}),e.jsx(r,{name:"arrayField.$.description",label:"Description",type:"textarea"})]}),e.jsx(d,{children:"Submit"})]})})}),ue=()=>{const{append:r,defaultValue:t,max:l,fields:a}=le(),o=!!(l&&a.length>=l);return e.jsx(J,{onClick:()=>r(t,{shouldFocus:!0,focusName:`arrayField.${a.length}.id`}),isDisabled:o,children:"Add record"})},pe=()=>e.jsx(J,{variant:"ghost",...oe(),children:"Remove"}),x=()=>e.jsx(e.Fragment,{children:e.jsx(p,{schema:s({arrayField:j().of(s({id:n().required(),name:n().required(),lastName:n().required()}))}),defaultValues:{arrayField:[{id:"123",name:"Eelco",lastName:"Wiersma"}]},onSubmit:i,children:({Field:r,ArrayField:t})=>e.jsxs(m,{children:[e.jsxs(Z,{name:"arrayField",label:"Array field composed",defaultValue:{},keyName:"key",min:2,max:4,children:[e.jsx(ee,{children:l=>e.jsx(e.Fragment,{children:l.map((a,o)=>e.jsxs(re,{index:o,children:[e.jsxs(te,{columns:3,spacing:1,children:[e.jsx(r,{name:"arrayField.$.id",placeholder:"Id"}),e.jsx(r,{name:"arrayField.$.name",placeholder:"Name"}),e.jsx(me,{children:e.jsx(r,{name:`arrayField.${o}.lastName`,placeholder:"Last name"})})]}),e.jsx(pe,{})]},a.key))})}),e.jsx(ue,{})]}),e.jsx(d,{children:"Submit"})]})})}),f={render(){return e.jsx(S,{defaultValues:{arrayField:[{title:"Test",description:""}]},onSubmit:i,children:({Field:r,ArrayField:t})=>e.jsxs(m,{children:[e.jsxs(t,{name:"arrayField",label:"Array field",defaultValue:{},min:1,max:3,children:[e.jsx(r,{name:"arrayField.$.title",label:"Title",rules:{required:!0}}),e.jsx(r,{name:"arrayField.$.description",label:"Description",type:"textarea"})]}),e.jsx(d,{children:"Submit"})]})})}},K=u.forwardRef((r,t)=>{const l=ae(),a=ie({name:"arrayField"}),[o,Q]=u.useState(l.getValues("arrayField"));return u.useEffect(()=>{console.log(o,a),Q(a)},[a]),e.jsxs(ne,{name:"arrayField",label:"Array field",keyName:"_id",defaultValue:{},ref:t,children:[e.jsx(T,{name:"title",label:"Title"}),e.jsx(T,{name:"description",label:"Description",type:"textarea"})]})}),h=()=>e.jsx(p,{schema:s({arrayField:j().of(s({id:X().required(),title:n().required(),description:n()}))}),defaultValues:{arrayField:[{id:1,title:"Test",description:""}]},onSubmit:i,children:e.jsxs(m,{children:[e.jsx(K,{}),e.jsx(d,{children:"Submit"})]})}),A=()=>{const r=u.useRef(null);return u.useLayoutEffect(()=>{var t;console.log(r.current),(t=r.current)==null||t.append({title:"Appended using the ref api"})},[r]),e.jsx(p,{schema:g,defaultValues:{arrayField:[{title:"Test"}]},onSubmit:i,children:()=>e.jsxs(m,{children:[e.jsx(K,{ref:r}),e.jsx(d,{children:"Submit"})]})})};var V,B,Y;c.parameters={...c.parameters,docs:{...(V=c.parameters)==null?void 0:V.docs,source:{originalSource:`{
  render() {
    return <Form defaultValues={{
      arrayField: [{
        title: 'Test'
      }]
    }} schema={{
      arrayField: {
        type: 'array',
        label: 'Posts',
        items: {
          type: 'object',
          properties: {
            title: {
              label: 'Title',
              rules: {
                required: true
              }
            },
            description: {
              label: 'Description',
              type: 'textarea'
            }
          }
        }
      }
    }} onSubmit={onSubmit} />;
  }
}`,...(Y=(B=c.parameters)==null?void 0:B.docs)==null?void 0:Y.source}}};var $,R,C;y.parameters={...y.parameters,docs:{...($=y.parameters)==null?void 0:$.docs,source:{originalSource:`() => {
  return <>\r
      <Form defaultValues={{
      arrayField: [{
        title: 'Test',
        description: ''
      }, {
        title: 'Test',
        description: ''
      }]
    }} schema={{
      arrayField: {
        type: 'array',
        label: 'Posts',
        items: {
          type: 'object',
          properties: {
            title: {
              label: 'Title',
              rules: {
                required: true
              }
            },
            description: {
              label: 'Description',
              type: 'textarea'
            }
          }
        }
      }
    }} onSubmit={onSubmit}>\r
        {({
        Field,
        ArrayField
      }) => <FormLayout>\r
            <ArrayField name="arrayField" label="Comments" defaultValue={{
          title: '',
          description: ''
        }}>\r
              <Field name="arrayField.$.title" label="Title" />\r
              <Field name="arrayField.$.description" label="Description" type="textarea" />\r
            </ArrayField>\r
\r
            <SubmitButton>Submit</SubmitButton>\r
          </FormLayout>}\r
      </Form>\r
    </>;
}`,...(C=(R=y.parameters)==null?void 0:R.docs)==null?void 0:C.source}}};var q,L,N;F.parameters={...F.parameters,docs:{...(q=F.parameters)==null?void 0:q.docs,source:{originalSource:`() => {
  return <>\r
      <YupForm schema={arraySchema} defaultValues={{
      arrayField: [{
        title: 'Test'
      }]
    }} onSubmit={onSubmit} />\r
    </>;
}`,...(N=(L=F.parameters)==null?void 0:L.docs)==null?void 0:N.source}}};var D,w,k;b.parameters={...b.parameters,docs:{...(D=b.parameters)==null?void 0:D.docs,source:{originalSource:`() => <>\r
    <YupForm schema={arraySchema} defaultValues={{
    arrayField: [{
      title: 'Test',
      description: ''
    }]
  }} onSubmit={onSubmit}>\r
      {({
      Field,
      ArrayField
    }) => <FormLayout>\r
          <ArrayField name="arrayField" label="Comments" defaultValue={{}}>\r
            <Field name="arrayField.$.title" label="Title" />\r
            <Field name="arrayField.$.description" label="Description" type="textarea" />\r
          </ArrayField>\r
\r
          <SubmitButton>Submit</SubmitButton>\r
        </FormLayout>}\r
    </YupForm>\r
  </>`,...(k=(w=b.parameters)==null?void 0:w.docs)==null?void 0:k.source}}};var E,v,M;x.parameters={...x.parameters,docs:{...(E=x.parameters)==null?void 0:E.docs,source:{originalSource:`() => <>\r
    <YupForm schema={Yup.object({
    arrayField: Yup.array().of(Yup.object({
      id: Yup.string().required(),
      name: Yup.string().required(),
      lastName: Yup.string().required()
    }))
  })} defaultValues={{
    arrayField: [{
      id: '123',
      name: 'Eelco',
      lastName: 'Wiersma'
    }]
  }} onSubmit={onSubmit}>\r
      {({
      Field,
      ArrayField
    }) => <FormLayout>\r
          <ArrayFieldContainer name="arrayField" label="Array field composed" defaultValue={{}} keyName="key" min={2} max={4}>\r
            <ArrayFieldRows>\r
              {fields => <>\r
                  {fields.map((field, i) => {
              return <ArrayFieldRowContainer key={(field.key as string)} index={i}>\r
                        <ArrayFieldRowFields columns={3} spacing={1}>\r
                          <Field name="arrayField.$.id" placeholder="Id" />\r
                          <Field name="arrayField.$.name" placeholder="Name" />\r
                          <Box>\r
                            <Field name={\`arrayField.\${i}.lastName\`} placeholder="Last name" />\r
                          </Box>\r
                        </ArrayFieldRowFields>\r
                        <RemoveButton />\r
                      </ArrayFieldRowContainer>;
            })}\r
                </>}\r
            </ArrayFieldRows>\r
            <AddButton />\r
          </ArrayFieldContainer>\r
\r
          <SubmitButton>Submit</SubmitButton>\r
        </FormLayout>}\r
    </YupForm>\r
  </>`,...(M=(v=x.parameters)==null?void 0:v.docs)==null?void 0:M.source}}};var P,W,_;f.parameters={...f.parameters,docs:{...(P=f.parameters)==null?void 0:P.docs,source:{originalSource:`{
  render() {
    return <Form defaultValues={{
      arrayField: [{
        title: 'Test',
        description: ''
      }]
    }} onSubmit={onSubmit}>\r
        {({
        Field,
        ArrayField
      }) => <FormLayout>\r
            <ArrayField name="arrayField" label="Array field" defaultValue={{}} min={1} max={3}>\r
              <Field name="arrayField.$.title" label="Title" rules={{
            required: true
          }} />\r
              <Field name="arrayField.$.description" label="Description" type="textarea" />\r
            </ArrayField>\r
\r
            <SubmitButton>Submit</SubmitButton>\r
          </FormLayout>}\r
      </Form>;
  }
}`,...(_=(W=f.parameters)==null?void 0:W.docs)==null?void 0:_.source}}};var I,O,U;h.parameters={...h.parameters,docs:{...(I=h.parameters)==null?void 0:I.docs,source:{originalSource:`() => {
  return <YupForm schema={Yup.object({
    arrayField: Yup.array().of(Yup.object({
      id: Yup.number().required(),
      title: Yup.string().required(),
      description: Yup.string()
    }))
  })} defaultValues={{
    arrayField: [{
      id: 1,
      title: 'Test',
      description: ''
    }]
  }} onSubmit={onSubmit}>\r
      <FormLayout>\r
        <MyArrayField />\r
\r
        <SubmitButton>Submit</SubmitButton>\r
      </FormLayout>\r
    </YupForm>;
}`,...(U=(O=h.parameters)==null?void 0:O.docs)==null?void 0:U.source}}};var z,G,H;A.parameters={...A.parameters,docs:{...(z=A.parameters)==null?void 0:z.docs,source:{originalSource:`() => {
  const ref = React.useRef<UseArrayFieldReturn>(null);
  React.useLayoutEffect(() => {
    console.log(ref.current);
    ref.current?.append({
      title: 'Appended using the ref api'
    });
  }, [ref]);
  return <YupForm schema={arraySchema} defaultValues={{
    arrayField: [{
      title: 'Test'
    }]
  }} onSubmit={onSubmit}>\r
      {() => <FormLayout>\r
          <MyArrayField ref={ref} />\r
\r
          <SubmitButton>Submit</SubmitButton>\r
        </FormLayout>}\r
    </YupForm>;
}`,...(H=(G=A.parameters)==null?void 0:G.docs)==null?void 0:H.source}}};const _r=["AutoArrayField","BasicArrayField","AutoYupArrayField","YupArrayField","CustomArrayField","MinMaxNoSchema","WatchArrayField","ArrayFieldRef"];export{A as ArrayFieldRef,c as AutoArrayField,F as AutoYupArrayField,y as BasicArrayField,x as CustomArrayField,f as MinMaxNoSchema,h as WatchArrayField,b as YupArrayField,_r as __namedExportsOrder,Wr as default};
