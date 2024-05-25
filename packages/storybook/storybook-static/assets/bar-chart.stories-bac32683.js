import{u as ar,j as r,d as tr}from"./chunk-ZJJGQIVY-3d316dd5.js";import{g as nr,B as S,X as F,Y as W,f as sr,c as or,R as ir,T as dr,L as cr,a as p}from"./utils-8d53097f.js";import{r as lr}from"./index-76fb7be0.js";import{C as hr,a as pr,b as mr}from"./tooltip-69296995.js";import{u as ur}from"./chunk-6B2YUEGK-427119e4.js";import{B as gr}from"./chunk-PULVB27S-e893e50c.js";import{C as xr}from"./chunk-5MKCW436-7cead567.js";import{C as m}from"./chunk-YQO7BFFX-e9bdc825.js";import{C as u}from"./chunk-2EW3JUUD-f935223c.js";import{H as g}from"./chunk-7OLJDQMT-459b2af9.js";import{C as x}from"./chunk-FHHZMTWR-f32df6cc.js";import"./_commonjsHelpers-de833af9.js";import"./clsx-0839fdbe.js";import"./mapValues-f7c9bc3b.js";import"./chunk-3ASUQ6PA-012a436b.js";import"./chunk-ZHMYA64R-c4ed5002.js";import"./chunk-G72KV6MB-be2d631b.js";import"./index-e1b4ee4c.js";import"./chunk-2OOHT3W5-9ba5a188.js";import"./chunk-R3DH46PF-f0689d26.js";import"./chunk-MFVQSVQB-c3da265d.js";import"./chunk-ITIKTQWJ-0c049f00.js";import"./emotion-react.browser.esm-b737cf90.js";import"./hoist-non-react-statics.cjs-3f8ebaa8.js";var Cr=nr({chartName:"BarChart",GraphicalChild:S,defaultTooltipEventType:"axis",validateTooltipEventTypes:["axis","item"],axisComponents:[{axisType:"xAxis",AxisComp:F},{axisType:"yAxis",AxisComp:W}],formatAxisMap:sr});const d=lr.forwardRef((a,z)=>{const{data:t=[],categories:c=[],colors:G=["primary","cyan"],height:L,index:l="date",barGap:E="2",barCategoryGap:N="10%",startEndOnly:C=!1,intervalType:V="equidistantPreserveStart",allowDecimals:I=!0,showAnimation:M=!0,showGrid:O=!0,showLegend:U=!0,showTooltip:_=!0,showXAxis:$=!0,showYAxis:X=!0,stack:f=!1,yAxisWidth:Y=40,legendHeight:K=32,animationDuration:q=500,valueFormatter:v,variant:P="gradient",tooltipContent:y,radius:J=f?0:[2,2,0,0],children:Q}=a,Z=ar(),rr=ur(),h=or(c,G,Z),n=e=>h[e],j=e=>`${rr}-${e}-gradient`,er=e=>{switch(P){case"solid":return n(e);case"gradient":return`url(#${j(e)})`;default:return"transparent"}};return r.jsx(gr,{ref:z,height:L,fontSize:"sm",sx:{"--chart-cursor-bg":"var(--chakra-colors-blackAlpha-100)","--chart-gradient-start-opacity":"0.8","--chart-gradient-end-opacity":"80",_dark:{"--chart-cursor-bg":"var(--chakra-colors-whiteAlpha-100)","--chart-gradient-start-opacity":"80","--chart-gradient-end-opacity":"0.8"}},children:r.jsx(ir,{width:"100%",height:"100%",children:r.jsxs(Cr,{data:t,barCategoryGap:N,barGap:E,children:[O&&r.jsx(hr,{strokeDasharray:" 1 1 1",vertical:!1,strokeOpacity:tr(.8,.3)}),r.jsx(F,{padding:{left:20,right:20},dataKey:l,hide:!$,tick:{transform:"translate(0, 6)"},ticks:C?[t[0][l],t[t.length-1][l]]:void 0,interval:C?"preserveStartEnd":V,tickLine:!1,axisLine:!1,minTickGap:5,style:{color:"var(--chakra-colors-muted)"}}),r.jsx(W,{width:Y,hide:!X,axisLine:!1,tickLine:!1,tick:{transform:"translate(-3, 0)"},type:"number",tickFormatter:v,allowDecimals:I,style:{color:"var(--chakra-colors-muted)"}}),_&&r.jsx(dr,{formatter:v,cursor:{fill:"var(--chart-cursor-bg)"},content:y||(e=>r.jsx(pr,{...e,categoryColors:h}))}),U&&r.jsx(cr,{verticalAlign:"top",align:"right",height:K,content:({payload:e})=>r.jsx(mr,{payload:e,categoryColors:h})}),r.jsx("defs",{children:c.map(e=>r.jsxs("linearGradient",{id:j(e),x1:"0",y1:"0",x2:"0",y2:"1",children:[r.jsx("stop",{offset:"5%",stopColor:n(e),stopOpacity:"var(--chart-gradient-start-opacity)"}),r.jsx("stop",{offset:"95%",stopColor:n(e),stopOpacity:"var(--chart-gradient-end-opacity)"})]},e))}),Q,c.map(e=>r.jsx(S,{dataKey:e,fill:er(e),color:n(e),isAnimationActive:M,animationDuration:q,stackId:f?"a":void 0,radius:J},e))]})})})}),Or={title:"Components/Visualization/BarChart",component:d,decorators:[a=>r.jsx(xr,{maxW:"container.xl",children:r.jsx(a,{})})]},s={args:{data:p({startDate:"2023-01-01",endDate:"2023-06-30",categories:["Revenue"],growthRate:1.005,interval:7}),height:"300px",categories:["Revenue"],yAxisWidth:80,valueFormatter:a=>new Intl.NumberFormat("en-US",{style:"currency",currency:"USD"}).format(a)},render:a=>r.jsxs(m,{children:[r.jsx(u,{pb:"0",children:r.jsx(g,{as:"h4",fontWeight:"medium",size:"md",children:"Revenue growth"})}),r.jsx(x,{children:r.jsx(d,{...a})})]})},o={args:{data:p({startDate:"2023-12-01",endDate:"2023-12-31",categories:["Backend","Frontend"],startValues:[50,30],growthRate:1.01}),height:"300px",categories:["Backend","Frontend"],colors:["purple","cyan"]},render:a=>r.jsxs(m,{children:[r.jsx(u,{pb:"0",children:r.jsx(g,{as:"h4",fontWeight:"medium",size:"md",children:"Developers"})}),r.jsx(x,{children:r.jsx(d,{...a})})]})},i={args:{data:p({startDate:"2023-12-01",endDate:"2023-12-31",categories:["New","Active","Churned"],startValues:[50,30,2],growthRate:1.05}),height:"300px",categories:["New","Active","Churned"],colors:["green","blue","red"],stack:!0},render:a=>r.jsxs(m,{children:[r.jsx(u,{pb:"0",children:r.jsx(g,{as:"h4",fontWeight:"medium",size:"md",children:"Developers"})}),r.jsx(x,{children:r.jsx(d,{...a})})]})};var w,k,D;s.parameters={...s.parameters,docs:{...(w=s.parameters)==null?void 0:w.docs,source:{originalSource:`{
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
        <CardHeader pb="0">\r
          <Heading as="h4" fontWeight="medium" size="md">\r
            Revenue growth\r
          </Heading>\r
        </CardHeader>\r
        <CardBody>\r
          <BarChart {...args} />\r
        </CardBody>\r
      </Card>;
  }
}`,...(D=(k=s.parameters)==null?void 0:k.docs)==null?void 0:D.source}}};var B,A,b;o.parameters={...o.parameters,docs:{...(B=o.parameters)==null?void 0:B.docs,source:{originalSource:`{
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
        <CardHeader pb="0">\r
          <Heading as="h4" fontWeight="medium" size="md">\r
            Developers\r
          </Heading>\r
        </CardHeader>\r
        <CardBody>\r
          <BarChart {...args} />\r
        </CardBody>\r
      </Card>;
  }
}`,...(b=(A=o.parameters)==null?void 0:A.docs)==null?void 0:b.source}}};var H,R,T;i.parameters={...i.parameters,docs:{...(H=i.parameters)==null?void 0:H.docs,source:{originalSource:`{
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
        <CardHeader pb="0">\r
          <Heading as="h4" fontWeight="medium" size="md">\r
            Developers\r
          </Heading>\r
        </CardHeader>\r
        <CardBody>\r
          <BarChart {...args} />\r
        </CardBody>\r
      </Card>;
  }
}`,...(T=(R=i.parameters)==null?void 0:R.docs)==null?void 0:T.source}}};const Ur=["Basic","Multiple","Stacked"];export{s as Basic,o as Multiple,i as Stacked,Ur as __namedExportsOrder,Or as default};
