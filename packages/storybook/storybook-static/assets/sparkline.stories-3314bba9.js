import{f as N,a as ra,o as na,j as a,b as v,g as k,u as sa}from"./chunk-ZJJGQIVY-3d316dd5.js";import{c as oa,R as la,Y as ca,a as d}from"./utils-8d53097f.js";import{A as ia,a as da}from"./AreaChart-c3a0b079.js";import{u as ua}from"./chunk-6B2YUEGK-427119e4.js";import{B as ma}from"./chunk-PULVB27S-e893e50c.js";import{c as pa}from"./index-7abe7895.js";import{I as Y}from"./chunk-2GBDXOMA-c3ee5274.js";import{C as ha}from"./chunk-5MKCW436-7cead567.js";import{C as u}from"./chunk-YQO7BFFX-e9bdc825.js";import{C as m}from"./chunk-FHHZMTWR-f32df6cc.js";import{S as xa}from"./chunk-NEK3OOAM-0db4f6d4.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";import"./clsx-0839fdbe.js";import"./mapValues-f7c9bc3b.js";import"./chunk-MFVQSVQB-c3da265d.js";import"./chunk-ITIKTQWJ-0c049f00.js";import"./emotion-react.browser.esm-b737cf90.js";import"./hoist-non-react-statics.cjs-3f8ebaa8.js";import"./chunk-G72KV6MB-be2d631b.js";var[ga,w]=pa({name:"StatStylesContext",errorMessage:`useStatStyles returned is 'undefined'. Seems you forgot to wrap the components in "<Stat />" `}),o=N(function(t,r){const n=ra("Stat",t),h={position:"relative",flex:"1 1 0%",...n.container},{className:x,children:S,...g}=na(t);return a.jsx(ga,{value:n,children:a.jsx(v.div,{ref:r,...g,className:k("chakra-stat",x),__css:h,children:a.jsx("dl",{children:S})})})});o.displayName="Stat";var K=e=>a.jsx(Y,{color:"red.400",...e,children:a.jsx("path",{fill:"currentColor",d:"M21,5H3C2.621,5,2.275,5.214,2.105,5.553C1.937,5.892,1.973,6.297,2.2,6.6l9,12 c0.188,0.252,0.485,0.4,0.8,0.4s0.611-0.148,0.8-0.4l9-12c0.228-0.303,0.264-0.708,0.095-1.047C21.725,5.214,21.379,5,21,5z"})});K.displayName="StatDownArrow";function q(e){return a.jsx(Y,{color:"green.400",...e,children:a.jsx("path",{fill:"currentColor",d:"M12.8,5.4c-0.377-0.504-1.223-0.504-1.6,0l-9,12c-0.228,0.303-0.264,0.708-0.095,1.047 C2.275,18.786,2.621,19,3,19h18c0.379,0,0.725-0.214,0.895-0.553c0.169-0.339,0.133-0.744-0.095-1.047L12.8,5.4z"})})}q.displayName="StatUpArrow";function V(e){const{type:t,"aria-label":r,...n}=e,h=w(),x=t==="increase"?q:K,g=r||(t==="increase"?"increased by":"decreased by");return a.jsxs(a.Fragment,{children:[a.jsx(v.span,{srOnly:!0,children:g}),a.jsx(x,{"aria-hidden":!0,...n,__css:h.icon})]})}V.displayName="StatArrow";var R=N(function(t,r){const n=w();return a.jsx(v.dd,{ref:r,...t,className:k("chakra-stat__help-text",t.className),__css:n.helpText})});R.displayName="StatHelpText";var l=N(function(t,r){const n=w();return a.jsx(v.dt,{ref:r,...t,className:k("chakra-stat__label",t.className),__css:n.label})});l.displayName="StatLabel";var c=N(function(t,r){const n=w();return a.jsx(v.dd,{ref:r,...t,className:k("chakra-stat__number",t.className),__css:{...n.number,fontFeatureSettings:"pnum",fontVariantNumeric:"proportional-nums"}})});c.displayName="StatNumber";const i=e=>{const{data:t=[],categories:r=["value"],curveType:n,colors:h=["primary","gray"],strokeWidth:x=1,variant:S="gradient",showAnimation:g=!1,animationDuration:J=500,connectNulls:Q=!0,stack:X=!1,...L}=e,Z=sa(),aa=ua(),ea=oa(r,h,Z),j=s=>ea[s],B=s=>`${aa}-${s}-gradient`,ta=s=>{switch(S){case"solid":return j(s);case"gradient":return`url(#${B(s)})`;default:return"transparent"}};return a.jsx(ma,{...L,sx:{"--sparkline-fill-opacity":"0.2","--sparkline-gradient-start-opacity":"0.8","--sparkline-gradient-end-opacity":"0",...L.sx},children:a.jsx(la,{width:"100%",height:"100%",children:a.jsxs(ia,{data:t,margin:{top:2,right:0,left:0,bottom:0},children:[a.jsx("defs",{children:r.map(s=>a.jsxs("linearGradient",{id:B(s),x1:"0",y1:"0",x2:"0",y2:"1",children:[a.jsx("stop",{offset:"5%",stopColor:j(s),stopOpacity:"var(--sparkline-gradient-start-opacity))"}),a.jsx("stop",{offset:"95%",stopColor:j(s),stopOpacity:"var(--sparkline-gradient-end-opacity)"})]},s))}),a.jsx(ca,{tick:!1,axisLine:!1,width:0,domain:["dataMin","dataMax"]}),r.map(s=>a.jsx(da,{dataKey:s,stroke:j(s),strokeWidth:x,fill:ta(s),fillOpacity:"var(--sparkline-fill-opacity)",type:n,isAnimationActive:g,animationDuration:J,connectNulls:Q,stackId:X?"a":void 0},s))]})})})},Fa={title:"Components/Visualization/Sparkline",component:i,decorators:[e=>a.jsx(ha,{maxW:"container.xl",children:a.jsx(e,{})})]},p=e=>new Intl.NumberFormat("en-US",{style:"currency",currency:"USD"}).format(e),y={args:{data:d({startDate:"2023-01-01",endDate:"2023-06-30",growthRate:1.005,interval:7}),categories:["value"]},render:e=>a.jsx(u,{maxW:"300px",children:a.jsx(m,{children:a.jsxs(o,{children:[a.jsx(l,{children:"Revenue"}),a.jsx(c,{children:p(e.data[e.data.length-1].value??0)}),a.jsx(i,{...e,height:"60px",mx:"-4"})]})})})},b={args:{data:d({startDate:"2023-01-01",endDate:"2023-06-30",growthRate:1.005,interval:7}),variant:"solid"},render:e=>a.jsx(u,{maxW:"300px",children:a.jsx(m,{pb:"0",children:a.jsxs(o,{children:[a.jsx(l,{children:"Revenue"}),a.jsx(c,{children:p(e.data[e.data.length-1].value??0)}),a.jsx(i,{...e,height:"60px",mx:"-4",strokeWidth:1.5,curveType:"natural"})]})})})},D={args:{data:d({startDate:"2023-12-01",endDate:"2023-12-31",categories:["compareValue","value"],startValues:[3e3,4e3],growthRate:1.01}),categories:["compareValue","value"],colors:["gray.300","primary"],curveType:"monotone"},render:e=>{const t=Number(e.data[e.data.length-1].value??0),r=Number(e.data[e.data.length-1].compareValue??0),n=Math.round((t-r)/t*100);return a.jsx(u,{maxW:"300px",children:a.jsx(m,{children:a.jsxs(o,{pos:"relative",children:[a.jsx(l,{children:"Revenue"}),a.jsxs(R,{pos:"absolute",top:"0",right:"0",children:[a.jsx(V,{type:"increase"})," ",n,"%"]}),a.jsx(c,{children:p(e.data[e.data.length-1].value??0)}),a.jsx(i,{...e,height:"60px",mx:"-4"})]})})})}},C={args:{data:d({startDate:"2023-12-01",endDate:"2023-12-31",categories:["compareValue","value"],startValues:[3e3,4e3],growthRate:1.01}),categories:["compareValue","value"],colors:["gray.300","primary"],curveType:"monotone",stack:!0},render:e=>{const t=Number(e.data[e.data.length-1].value??0),r=Number(e.data[e.data.length-1].compareValue??0),n=Math.round((t-r)/t*100);return a.jsx(u,{maxW:"300px",children:a.jsx(m,{children:a.jsxs(o,{pos:"relative",children:[a.jsx(l,{children:"Revenue"}),a.jsxs(R,{pos:"absolute",top:"0",right:"0",children:[a.jsx(V,{type:"increase"})," ",n,"%"]}),a.jsx(c,{children:p(e.data[e.data.length-1].value??0)}),a.jsx(i,{...e,height:"60px",mx:"-4"})]})})})}},f=()=>{const e=d({startDate:"2023-01-01",endDate:"2023-06-30",growthRate:1.005,interval:7}),t=d({startDate:"2023-01-01",endDate:"2023-06-30",growthRate:1.005,interval:7,startValues:[100]}),r=d({startDate:"2023-01-01",endDate:"2023-06-30",growthRate:1.001,interval:7,startValues:[5]}),n=d({startDate:"2023-01-01",endDate:"2023-06-30",growthRate:1.002,interval:7,startValues:[250]});return a.jsxs(xa,{columns:[2,null,4],spacing:"4",children:[a.jsx(u,{maxW:"300px",children:a.jsx(m,{children:a.jsxs(o,{children:[a.jsx(l,{color:"muted",children:"Revenue"}),a.jsx(c,{children:p(e[e.length-1].value??0)}),a.jsx(i,{data:e,variant:"gradient",height:"40px",mx:"-4"})]})})}),a.jsx(u,{maxW:"300px",children:a.jsx(m,{children:a.jsxs(o,{children:[a.jsx(l,{color:"muted",children:"Signups"}),a.jsx(c,{children:t[t.length-1].value??0}),a.jsx(i,{data:t,variant:"gradient",height:"40px",mx:"-4"})]})})}),a.jsx(u,{maxW:"300px",children:a.jsx(m,{children:a.jsxs(o,{children:[a.jsx(l,{color:"muted",children:"Churn"}),a.jsx(c,{children:r[r.length-1].value??0}),a.jsx(i,{data:r,variant:"gradient",height:"40px",mx:"-4"})]})})}),a.jsx(u,{maxW:"300px",children:a.jsx(m,{children:a.jsxs(o,{children:[a.jsx(l,{color:"muted",children:"Average customer value"}),a.jsx(c,{children:p(n[n.length-1].value??0)}),a.jsx(i,{data:n,variant:"gradient",height:"40px",mx:"-4"})]})})})]})};var W,A,_;y.parameters={...y.parameters,docs:{...(W=y.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    data: createData({
      startDate: '2023-01-01',
      endDate: '2023-06-30',
      growthRate: 1.005,
      interval: 7
    }),
    categories: ['value']
  },
  render: args => {
    return <Card maxW="300px">\r
        <CardBody>\r
          <Stat>\r
            <StatLabel>Revenue</StatLabel>\r
            <StatNumber>\r
              {currencyFormatter(args.data[args.data.length - 1].value ?? 0)}\r
            </StatNumber>\r
            <Sparkline {...args} height="60px" mx="-4" />\r
          </Stat>\r
        </CardBody>\r
      </Card>;
  }
}`,...(_=(A=y.parameters)==null?void 0:A.docs)==null?void 0:_.source}}};var T,M,F;b.parameters={...b.parameters,docs:{...(T=b.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    data: createData({
      startDate: '2023-01-01',
      endDate: '2023-06-30',
      growthRate: 1.005,
      interval: 7
    }),
    variant: 'solid'
  },
  render: args => {
    return <Card maxW="300px">\r
        <CardBody pb="0">\r
          <Stat>\r
            <StatLabel>Revenue</StatLabel>\r
            <StatNumber>\r
              {currencyFormatter(args.data[args.data.length - 1].value ?? 0)}\r
            </StatNumber>\r
            <Sparkline {...args} height="60px" mx="-4" strokeWidth={1.5} curveType="natural" />\r
          </Stat>\r
        </CardBody>\r
      </Card>;
  }
}`,...(F=(M=b.parameters)==null?void 0:M.docs)==null?void 0:F.source}}};var H,I,G;D.parameters={...D.parameters,docs:{...(H=D.parameters)==null?void 0:H.docs,source:{originalSource:`{
  args: {
    data: createData({
      startDate: '2023-12-01',
      endDate: '2023-12-31',
      categories: ['compareValue', 'value'],
      startValues: [3000, 4000],
      growthRate: 1.01
    }),
    categories: ['compareValue', 'value'],
    colors: ['gray.300', 'primary'],
    curveType: 'monotone'
  },
  render: args => {
    const value = Number(args.data[args.data.length - 1].value ?? 0);
    const compareValue = Number(args.data[args.data.length - 1].compareValue ?? 0);
    const percentage = Math.round((value - compareValue) / value * 100);
    return <Card maxW="300px">\r
        <CardBody>\r
          <Stat pos="relative">\r
            <StatLabel>Revenue</StatLabel>\r
            <StatHelpText pos="absolute" top="0" right="0">\r
              <StatArrow type="increase" /> {percentage}%\r
            </StatHelpText>\r
            <StatNumber>\r
              {currencyFormatter(args.data[args.data.length - 1].value ?? 0)}\r
            </StatNumber>\r
            <Sparkline {...args} height="60px" mx="-4" />\r
          </Stat>\r
        </CardBody>\r
      </Card>;
  }
}`,...(G=(I=D.parameters)==null?void 0:I.docs)==null?void 0:G.source}}};var O,U,z;C.parameters={...C.parameters,docs:{...(O=C.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    data: createData({
      startDate: '2023-12-01',
      endDate: '2023-12-31',
      categories: ['compareValue', 'value'],
      startValues: [3000, 4000],
      growthRate: 1.01
    }),
    categories: ['compareValue', 'value'],
    colors: ['gray.300', 'primary'],
    curveType: 'monotone',
    stack: true
  },
  render: args => {
    const value = Number(args.data[args.data.length - 1].value ?? 0);
    const compareValue = Number(args.data[args.data.length - 1].compareValue ?? 0);
    const percentage = Math.round((value - compareValue) / value * 100);
    return <Card maxW="300px">\r
        <CardBody>\r
          <Stat pos="relative">\r
            <StatLabel>Revenue</StatLabel>\r
            <StatHelpText pos="absolute" top="0" right="0">\r
              <StatArrow type="increase" /> {percentage}%\r
            </StatHelpText>\r
            <StatNumber>\r
              {currencyFormatter(args.data[args.data.length - 1].value ?? 0)}\r
            </StatNumber>\r
            <Sparkline {...args} height="60px" mx="-4" />\r
          </Stat>\r
        </CardBody>\r
      </Card>;
  }
}`,...(z=(U=C.parameters)==null?void 0:U.docs)==null?void 0:z.source}}};var $,E,P;f.parameters={...f.parameters,docs:{...($=f.parameters)==null?void 0:$.docs,source:{originalSource:`() => {
  const revenueData = createData({
    startDate: '2023-01-01',
    endDate: '2023-06-30',
    growthRate: 1.005,
    interval: 7
  });
  const customerData = createData({
    startDate: '2023-01-01',
    endDate: '2023-06-30',
    growthRate: 1.005,
    interval: 7,
    startValues: [100]
  });
  const churnData = createData({
    startDate: '2023-01-01',
    endDate: '2023-06-30',
    growthRate: 1.001,
    interval: 7,
    startValues: [5]
  });
  const valueData = createData({
    startDate: '2023-01-01',
    endDate: '2023-06-30',
    growthRate: 1.002,
    interval: 7,
    startValues: [250]
  });
  return <SimpleGrid columns={[2, null, 4]} spacing="4">\r
      <Card maxW="300px">\r
        <CardBody>\r
          <Stat>\r
            <StatLabel color="muted">Revenue</StatLabel>\r
            <StatNumber>\r
              {currencyFormatter(revenueData[revenueData.length - 1].value ?? 0)}\r
            </StatNumber>\r
            <Sparkline data={revenueData} variant="gradient" height="40px" mx="-4" />\r
          </Stat>\r
        </CardBody>\r
      </Card>\r
      <Card maxW="300px">\r
        <CardBody>\r
          <Stat>\r
            <StatLabel color="muted">Signups</StatLabel>\r
            <StatNumber>\r
              {customerData[customerData.length - 1].value ?? 0}\r
            </StatNumber>\r
            <Sparkline data={customerData} variant="gradient" height="40px" mx="-4" />\r
          </Stat>\r
        </CardBody>\r
      </Card>\r
      <Card maxW="300px">\r
        <CardBody>\r
          <Stat>\r
            <StatLabel color="muted">Churn</StatLabel>\r
            <StatNumber>\r
              {churnData[churnData.length - 1].value ?? 0}\r
            </StatNumber>\r
            <Sparkline data={churnData} variant="gradient" height="40px" mx="-4" />\r
          </Stat>\r
        </CardBody>\r
      </Card>\r
      <Card maxW="300px">\r
        <CardBody>\r
          <Stat>\r
            <StatLabel color="muted">Average customer value</StatLabel>\r
            <StatNumber>\r
              {currencyFormatter(valueData[valueData.length - 1].value ?? 0)}\r
            </StatNumber>\r
            <Sparkline data={valueData} variant="gradient" height="40px" mx="-4" />\r
          </Stat>\r
        </CardBody>\r
      </Card>\r
    </SimpleGrid>;
}`,...(P=(E=f.parameters)==null?void 0:E.docs)==null?void 0:P.source}}};const Ha=["Basic","SolidVariant","Multiple","Stacked","Metrics"];export{y as Basic,f as Metrics,D as Multiple,b as SolidVariant,C as Stacked,Ha as __namedExportsOrder,Fa as default};
