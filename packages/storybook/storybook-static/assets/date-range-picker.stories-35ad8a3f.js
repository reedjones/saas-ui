import{j as r}from"./chunk-ZJJGQIVY-3d316dd5.js";import{r as j}from"./index-76fb7be0.js";import{a as h,D as f}from"./date-range-calendar-92eaade7.js";import{e as R,d as C,D as V}from"./date-field-146058e0.js";import{C as B}from"./chunk-5MKCW436-7cead567.js";import{V as v}from"./chunk-NTCQBYKE-6d14b748.js";import{B as $}from"./chunk-UVUR7MCU-4e62fe64.js";import{P as O}from"./chunk-34PD6CUK-c14fe2a1.js";import"./_commonjsHelpers-de833af9.js";import"./calendar-8f9c4961.js";import"./index-6843c920.js";import"./index-660fa4d3.js";import"./index-938a7d6c.js";import"./index-30c8b35e.js";import"./index-3e7aa64e.js";import"./index-5f92aa2b.js";import"./index-55e1c87d.js";import"./index-c4a63d44.js";import"./index-17e33fe9.js";import"./import-5516e61c.js";import"./clsx-0839fdbe.js";import"./import-7ec71565.js";import"./chunk-6IC2I3BY-4894ef2d.js";import"./chunk-FNB7ZWWX-c2cbda69.js";import"./chunk-OA3DH5LS-66f42d08.js";import"./chunk-6QYXN73V-7940804f.js";import"./chunk-ITIKTQWJ-0c049f00.js";import"./chunk-O3SWHQEE-d6839529.js";import"./index-7abe7895.js";import"./chunk-7JSBRQFI-041d2b19.js";import"./chunk-KA2477BY-f6a12dd2.js";import"./icons-d10032f4.js";import"./chunk-2GBDXOMA-c3ee5274.js";import"./index-add592e3.js";import"./motion-56319619.js";import"./chunk-56K2BSAJ-a2503b05.js";import"./chunk-DFWC5MHP-a7a26ffe.js";import"./chunk-AZVKQZKI-601f6f7e.js";import"./chunk-H46NUPBZ-200868d1.js";import"./chunk-ZHMYA64R-c4ed5002.js";import"./chunk-G72KV6MB-be2d631b.js";import"./index-e1b4ee4c.js";import"./chunk-T6ZDZOLO-8d3f3a64.js";import"./chunk-5PH6ULNP-89f88b5a.js";import"./emotion-react.browser.esm-b737cf90.js";import"./hoist-non-react-statics.cjs-3f8ebaa8.js";const jr={title:"Components/DateTime/DateRangePicker",component:h,decorators:[i=>r.jsx(B,{children:r.jsx(v,{children:r.jsx(i,{})})})]},o=i=>{var s,c;const{children:x,...S}=i,[e,T]=j.useState({start:null,end:null});return r.jsxs(h,{onChange:T,...S,children:[r.jsx(C,{children:r.jsx($,{children:e?`${(s=e==null?void 0:e.start)==null?void 0:s.toString()} - ${(c=e==null?void 0:e.end)==null?void 0:c.toString()}`:"Open DatePicker"})}),r.jsx(O,{children:r.jsxs(V,{children:[r.jsx(f,{}),x]})})]})},t=o.bind({});t.args={};const n=o.bind({});n.args={children:r.jsx(R,{})};const a=o.bind({});a.args={hourCycle:24,children:r.jsx(R,{})};var l,m,p;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`args => {
  const {
    children,
    ...rest
  } = args;
  const [value, setValue] = React.useState<DateRangeValue | undefined>({
    start: null,
    end: null
  });
  return <DateRangePicker onChange={setValue} {...rest}>\r
      <DatePickerTrigger>\r
        <Button>\r
          {value ? \`\${value?.start?.toString()} - \${value?.end?.toString()}\` : 'Open DatePicker'}\r
        </Button>\r
      </DatePickerTrigger>\r
      <Portal>\r
        <DatePickerDialog>\r
          <DateRangePickerCalendar />\r
          {children}\r
        </DatePickerDialog>\r
      </Portal>\r
    </DateRangePicker>;
}`,...(p=(m=t.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};var g,u,d;n.parameters={...n.parameters,docs:{...(g=n.parameters)==null?void 0:g.docs,source:{originalSource:`args => {
  const {
    children,
    ...rest
  } = args;
  const [value, setValue] = React.useState<DateRangeValue | undefined>({
    start: null,
    end: null
  });
  return <DateRangePicker onChange={setValue} {...rest}>\r
      <DatePickerTrigger>\r
        <Button>\r
          {value ? \`\${value?.start?.toString()} - \${value?.end?.toString()}\` : 'Open DatePicker'}\r
        </Button>\r
      </DatePickerTrigger>\r
      <Portal>\r
        <DatePickerDialog>\r
          <DateRangePickerCalendar />\r
          {children}\r
        </DatePickerDialog>\r
      </Portal>\r
    </DateRangePicker>;
}`,...(d=(u=n.parameters)==null?void 0:u.docs)==null?void 0:d.source}}};var D,P,k;a.parameters={...a.parameters,docs:{...(D=a.parameters)==null?void 0:D.docs,source:{originalSource:`args => {
  const {
    children,
    ...rest
  } = args;
  const [value, setValue] = React.useState<DateRangeValue | undefined>({
    start: null,
    end: null
  });
  return <DateRangePicker onChange={setValue} {...rest}>\r
      <DatePickerTrigger>\r
        <Button>\r
          {value ? \`\${value?.start?.toString()} - \${value?.end?.toString()}\` : 'Open DatePicker'}\r
        </Button>\r
      </DatePickerTrigger>\r
      <Portal>\r
        <DatePickerDialog>\r
          <DateRangePickerCalendar />\r
          {children}\r
        </DatePickerDialog>\r
      </Portal>\r
    </DateRangePicker>;
}`,...(k=(P=a.parameters)==null?void 0:P.docs)==null?void 0:k.source}}};const fr=["Basic","WithTime","WithTime24H"];export{t as Basic,n as WithTime,a as WithTime24H,fr as __namedExportsOrder,jr as default};
