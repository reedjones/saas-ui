import{u as Z,j as e,d as ee}from"./chunk-ZJJGQIVY-3d316dd5.js";import{c as re,R as te,X as ae,Y as ne,T as se,L as oe,a as h}from"./utils-8d53097f.js";import{r as ie}from"./index-76fb7be0.js";import{C as de,a as ce,b as le}from"./tooltip-69296995.js";import{A as me,a as he}from"./AreaChart-c3a0b079.js";import{u as pe}from"./chunk-6B2YUEGK-427119e4.js";import{B as ue}from"./chunk-PULVB27S-e893e50c.js";import{C as p}from"./chunk-YQO7BFFX-e9bdc825.js";import{C as u}from"./chunk-FHHZMTWR-f32df6cc.js";import{C as g}from"./chunk-2EW3JUUD-f935223c.js";import{H as x}from"./chunk-7OLJDQMT-459b2af9.js";import{C as ge}from"./chunk-5MKCW436-7cead567.js";import"./_commonjsHelpers-de833af9.js";import"./clsx-0839fdbe.js";import"./mapValues-f7c9bc3b.js";import"./chunk-3ASUQ6PA-012a436b.js";import"./chunk-ZHMYA64R-c4ed5002.js";import"./chunk-G72KV6MB-be2d631b.js";import"./index-e1b4ee4c.js";import"./chunk-2OOHT3W5-9ba5a188.js";import"./chunk-R3DH46PF-f0689d26.js";import"./chunk-MFVQSVQB-c3da265d.js";import"./chunk-ITIKTQWJ-0c049f00.js";import"./emotion-react.browser.esm-b737cf90.js";import"./hoist-non-react-statics.cjs-3f8ebaa8.js";const d=ie.forwardRef((t,F)=>{const{data:a=[],categories:c=[],colors:W=["primary","cyan"],height:L,connectNulls:z=!1,curveType:T="linear",index:l="date",startEndOnly:C=!1,intervalType:N="equidistantPreserveStart",allowDecimals:b=!0,strokeWidth:V=2,showAnimation:E=!0,showGrid:G=!0,showLegend:I=!0,showTooltip:O=!0,showXAxis:U=!0,showYAxis:$=!0,stack:M=!1,yAxisWidth:X=40,legendHeight:Y=32,animationDuration:_=500,valueFormatter:f,variant:K="gradient",tooltipContent:v,children:q}=t,P=Z(),J=pe(),m=re(c,W,P),n=r=>m[r],j=r=>`${J}-${r}-gradient`,Q=r=>{switch(K){case"solid":return n(r);case"gradient":return`url(#${j(r)})`;default:return"transparent"}};return e.jsx(ue,{ref:F,height:L,fontSize:"sm",sx:{"--chart-gradient-start-opacity":"0.8","--chart-gradient-end-opacity":"0"},children:e.jsx(te,{width:"100%",height:"100%",children:e.jsxs(me,{data:a,children:[G&&e.jsx(de,{strokeDasharray:" 1 1 1",vertical:!1,strokeOpacity:ee(.8,.3)}),e.jsx(ae,{padding:{left:20,right:20},dataKey:l,hide:!U,tick:{transform:"translate(0, 6)"},ticks:C?[a[0][l],a[a.length-1][l]]:void 0,interval:C?"preserveStartEnd":N,tickLine:!1,axisLine:!1,minTickGap:5,style:{color:"var(--chakra-colors-muted)"}}),e.jsx(ne,{width:X,hide:!$,axisLine:!1,tickLine:!1,tick:{transform:"translate(-3, 0)"},type:"number",tickFormatter:f,allowDecimals:b,style:{color:"var(--chakra-colors-muted)"}}),O&&e.jsx(se,{formatter:f,content:v||(r=>e.jsx(ce,{...r,categoryColors:m}))}),I&&e.jsx(oe,{verticalAlign:"top",align:"right",height:Y,content:({payload:r})=>e.jsx(le,{payload:r,categoryColors:m})}),e.jsx("defs",{children:c.map(r=>e.jsxs("linearGradient",{id:j(r),x1:"0",y1:"0",x2:"0",y2:"1",children:[e.jsx("stop",{offset:"5%",stopColor:n(r),stopOpacity:"var(--chart-gradient-start-opacity)"}),e.jsx("stop",{offset:"95%",stopColor:n(r),stopOpacity:"var(--chart-gradient-end-opacity)"})]},r))}),q,c.map(r=>e.jsx(he,{type:T,dataKey:r,stroke:n(r),strokeWidth:V,strokeLinejoin:"round",strokeLinecap:"round",fill:Q(r),isAnimationActive:E,animationDuration:_,stackId:M?"a":void 0,connectNulls:z},r))]})})})}),Oe={title:"Components/Visualization/AreaChart",component:d,decorators:[t=>e.jsx(ge,{maxW:"container.xl",children:e.jsx(t,{})})]},s={args:{data:h({startDate:"2023-01-01",endDate:"2023-06-30",categories:["Revenue"],growthRate:1.005,interval:7}),height:"300px",categories:["Revenue"],yAxisWidth:80,valueFormatter:t=>new Intl.NumberFormat("en-US",{style:"currency",currency:"USD"}).format(t)},render:t=>e.jsxs(p,{children:[e.jsx(g,{children:e.jsx(x,{as:"h4",fontWeight:"medium",size:"md",children:"Revenue growth"})}),e.jsx(u,{children:e.jsx(d,{...t})})]})},o={args:{data:h({startDate:"2023-12-01",endDate:"2023-12-31",categories:["Backend","Frontend"],startValues:[50,30],growthRate:1.01}),height:"300px",categories:["Backend","Frontend"],colors:["purple","cyan"]},render:t=>e.jsxs(p,{children:[e.jsx(g,{children:e.jsx(x,{as:"h4",fontWeight:"medium",size:"md",children:"Developers"})}),e.jsx(u,{children:e.jsx(d,{...t})})]})},i={args:{data:h({startDate:"2023-12-01",endDate:"2023-12-31",categories:["New","Active","Churned"],startValues:[50,30,2],growthRate:1.05}),height:"300px",categories:["New","Active","Churned"],colors:["green","blue","red"],stack:!0},render:t=>e.jsxs(p,{children:[e.jsx(g,{children:e.jsx(x,{as:"h4",fontWeight:"medium",size:"md",children:"Developers"})}),e.jsx(u,{children:e.jsx(d,{...t})})]})};var y,k,w;s.parameters={...s.parameters,docs:{...(y=s.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    data: createData({
      startDate: '2023-01-01',
      endDate: '2023-06-30',
      categories: ['Revenue'],
      growthRate: 1.005,
      interval: 7
    }),
    height: '300px',
    categories: ['Revenue'],
    yAxisWidth: 80,
    valueFormatter: value => {
      return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD'
      }).format(value);
    }
  },
  render: args => {
    return <Card>\r
        <CardHeader>\r
          <Heading as="h4" fontWeight="medium" size="md">\r
            Revenue growth\r
          </Heading>\r
        </CardHeader>\r
        <CardBody>\r
          <AreaChart {...args} />\r
        </CardBody>\r
      </Card>;
  }
}`,...(w=(k=s.parameters)==null?void 0:k.docs)==null?void 0:w.source}}};var D,A,H;o.parameters={...o.parameters,docs:{...(D=o.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    data: createData({
      startDate: '2023-12-01',
      endDate: '2023-12-31',
      categories: ['Backend', 'Frontend'],
      startValues: [50, 30],
      growthRate: 1.01
    }),
    height: '300px',
    categories: ['Backend', 'Frontend'],
    colors: ['purple', 'cyan']
  },
  render: args => {
    return <Card>\r
        <CardHeader>\r
          <Heading as="h4" fontWeight="medium" size="md">\r
            Developers\r
          </Heading>\r
        </CardHeader>\r
        <CardBody>\r
          <AreaChart {...args} />\r
        </CardBody>\r
      </Card>;
  }
}`,...(H=(A=o.parameters)==null?void 0:A.docs)==null?void 0:H.source}}};var R,B,S;i.parameters={...i.parameters,docs:{...(R=i.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    data: createData({
      startDate: '2023-12-01',
      endDate: '2023-12-31',
      categories: ['New', 'Active', 'Churned'],
      startValues: [50, 30, 2],
      growthRate: 1.05
    }),
    height: '300px',
    categories: ['New', 'Active', 'Churned'],
    colors: ['green', 'blue', 'red'],
    stack: true
  },
  render: args => {
    return <Card>\r
        <CardHeader>\r
          <Heading as="h4" fontWeight="medium" size="md">\r
            Developers\r
          </Heading>\r
        </CardHeader>\r
        <CardBody>\r
          <AreaChart {...args} />\r
        </CardBody>\r
      </Card>;
  }
}`,...(S=(B=i.parameters)==null?void 0:B.docs)==null?void 0:S.source}}};const Ue=["Basic","Multiple","Stacked"];export{s as Basic,o as Multiple,i as Stacked,Ue as __namedExportsOrder,Oe as default};
