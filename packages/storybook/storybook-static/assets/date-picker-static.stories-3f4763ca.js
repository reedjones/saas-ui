import{j as r}from"./chunk-ZJJGQIVY-3d316dd5.js";import{r as c}from"./index-76fb7be0.js";import{a as s}from"./date-picker-2798aab7.js";import{b as d,D as l}from"./calendar-8f9c4961.js";import{C as u}from"./chunk-5MKCW436-7cead567.js";import{V as x}from"./chunk-NTCQBYKE-6d14b748.js";import{C as S}from"./chunk-YQO7BFFX-e9bdc825.js";import{H as C}from"./chunk-7OLJDQMT-459b2af9.js";import"./_commonjsHelpers-de833af9.js";import"./index-add592e3.js";import"./index-6843c920.js";import"./index-660fa4d3.js";import"./index-938a7d6c.js";import"./index-30c8b35e.js";import"./index-3e7aa64e.js";import"./index-5f92aa2b.js";import"./index-55e1c87d.js";import"./index-c4a63d44.js";import"./index-17e33fe9.js";import"./import-5516e61c.js";import"./clsx-0839fdbe.js";import"./import-7ec71565.js";import"./chunk-6IC2I3BY-4894ef2d.js";import"./chunk-FNB7ZWWX-c2cbda69.js";import"./chunk-OA3DH5LS-66f42d08.js";import"./chunk-UVUR7MCU-4e62fe64.js";import"./chunk-T6ZDZOLO-8d3f3a64.js";import"./index-7abe7895.js";import"./chunk-5PH6ULNP-89f88b5a.js";import"./emotion-react.browser.esm-b737cf90.js";import"./hoist-non-react-statics.cjs-3f8ebaa8.js";import"./chunk-6QYXN73V-7940804f.js";import"./chunk-ITIKTQWJ-0c049f00.js";import"./chunk-O3SWHQEE-d6839529.js";import"./chunk-7JSBRQFI-041d2b19.js";import"./chunk-KA2477BY-f6a12dd2.js";import"./icons-d10032f4.js";import"./chunk-2GBDXOMA-c3ee5274.js";import"./chunk-ZHMYA64R-c4ed5002.js";import"./chunk-G72KV6MB-be2d631b.js";import"./index-e1b4ee4c.js";import"./chunk-MFVQSVQB-c3da265d.js";const sr={title:"Components/DateTime/DatePickerStatic",component:s,decorators:[o=>r.jsx(u,{children:r.jsx(x,{children:r.jsx(o,{})})})]},f=o=>{const{children:g,...n}=o,[e,p]=c.useState(new d(2024,6,1));return r.jsxs(S,{p:"4",children:[r.jsx(C,{size:"md",mb:"8",children:(e==null?void 0:e.toString())??"Select a date"}),r.jsx(s,{value:e,onChange:p,...n,children:r.jsx(l,{})})]})},t=f.bind({});t.args={};var a,i,m;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`args => {
  const {
    children,
    ...rest
  } = args;
  const [value, setValue] = React.useState<DateValue | null>(new CalendarDate(2024, 6, 1));
  return <Card p="4">\r
      <Heading size="md" mb="8">\r
        {value?.toString() ?? 'Select a date'}\r
      </Heading>\r
      <DatePickerStatic value={value} onChange={setValue} {...rest}>\r
        <DatePickerCalendar />\r
      </DatePickerStatic>\r
    </Card>;
}`,...(m=(i=t.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};const nr=["Basic"];export{t as Basic,nr as __namedExportsOrder,sr as default};
