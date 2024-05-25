import{j as e}from"./chunk-ZJJGQIVY-3d316dd5.js";import{S as i,a as p,b as g,c as k,d as T,e as N,f as d,g as I,h as B,i as L}from"./steps-fd703130.js";import{r as Q}from"./index-76fb7be0.js";import{C as U}from"./chunk-5MKCW436-7cead567.js";import{B as f}from"./chunk-DA7QIPTJ-83b15474.js";import{B as m}from"./chunk-UVUR7MCU-4e62fe64.js";import{S as X}from"./chunk-ZHMYA64R-c4ed5002.js";import{B as Y}from"./chunk-PULVB27S-e893e50c.js";import"./_commonjsHelpers-de833af9.js";import"./chunk-O3SWHQEE-d6839529.js";import"./chunk-ITIKTQWJ-0c049f00.js";import"./index-7abe7895.js";import"./chunk-MFVQSVQB-c3da265d.js";import"./emotion-react.browser.esm-b737cf90.js";import"./hoist-non-react-statics.cjs-3f8ebaa8.js";import"./chunk-2GBDXOMA-c3ee5274.js";import"./chunk-RKXMPHPI-1a3f22a5.js";import"./chunk-6NHXDBFO-987cde81.js";import"./index-c6b2a32b.js";import"./motion-56319619.js";import"./chunk-T6ZDZOLO-8d3f3a64.js";import"./chunk-5PH6ULNP-89f88b5a.js";import"./index-17e33fe9.js";import"./chunk-G72KV6MB-be2d631b.js";import"./index-e1b4ee4c.js";function v(n={}){const{index:a=0,count:c}=n,[t,r]=Q.useState(a),J=typeof c=="number"?c-1:0,K=t/J;return{activeStep:t,setActiveStep:r,activeStepPercent:K,isActiveStep(o){return o===t},isCompleteStep(o){return o<t},isIncompleteStep(o){return o>t},getStatus(o){return o<t?"complete":o>t?"incomplete":"active"},goToNext(){r(o=>typeof c=="number"?Math.min(c,o+1):o+1)},goToPrevious(){r(o=>Math.max(0,o-1))}}}const Be={title:"Components/Navigation/Steps",component:i,decorators:[n=>e.jsx(U,{mt:"40px",children:e.jsx(n,{})})]},s=[{title:"First",description:"Contact Info",children:"Please enter your contact information"},{title:"Second",description:"Date & Time",children:"When do you want to make the reservation?"},{title:"Third",description:"Select Rooms",children:"Which rooms do you want to book?"}],Z=n=>e.jsxs(g,{children:[e.jsx(k,{children:e.jsx(T,{complete:e.jsx(N,{}),incomplete:e.jsx(d,{}),active:e.jsx(d,{})})}),e.jsxs(Y,{flexShrink:"0",children:[e.jsx(I,{children:n.title}),e.jsx(L,{children:n.description})]}),e.jsx(B,{})]}),x={render:()=>{const{activeStep:n,goToNext:a,goToPrevious:c}=v({index:0,count:s.length});return e.jsxs(e.Fragment,{children:[e.jsx(i,{index:n,mb:"8",children:s.map((t,r)=>e.jsx(p,{...t},r))}),e.jsxs(f,{children:[e.jsx(m,{onClick:c,children:"Previous"}),e.jsx(m,{onClick:a,children:"Next"})]})]})}},S={render:()=>{const{activeStep:n,goToNext:a,goToPrevious:c}=v({index:0,count:s.length});return e.jsxs(X,{spacing:"10",children:[e.jsx(i,{index:n,size:"xs",children:s.map((t,r)=>e.jsx(p,{...t},r))}),e.jsx(i,{index:n,size:"sm",children:s.map((t,r)=>e.jsx(p,{...t},r))}),e.jsx(i,{index:n,size:"md",children:s.map((t,r)=>e.jsx(p,{...t},r))}),e.jsx(i,{index:n,size:"lg",children:s.map((t,r)=>e.jsx(p,{...t},r))}),e.jsx(i,{index:n,size:"xs",orientation:"vertical",children:s.map((t,r)=>e.jsx(p,{...t},r))}),e.jsx(i,{index:n,size:"sm",orientation:"vertical",children:s.map((t,r)=>e.jsx(p,{...t},r))}),e.jsx(i,{index:n,size:"md",orientation:"vertical",children:s.map((t,r)=>e.jsx(p,{...t},r))}),e.jsx(i,{index:n,size:"lg",orientation:"vertical",children:s.map((t,r)=>e.jsx(p,{...t},r))})]})}},l={render:()=>{const{activeStep:n,goToNext:a,goToPrevious:c}=v({index:0,count:s.length});return e.jsxs(e.Fragment,{children:[e.jsx(i,{index:n,orientation:"vertical",mb:"8",children:s.map((t,r)=>e.jsx(p,{...t,render:()=>e.jsxs(g,{children:[e.jsx(k,{children:e.jsx(T,{complete:e.jsx(N,{}),incomplete:e.jsx(d,{}),active:e.jsx(d,{})})}),e.jsx(I,{children:t.title}),e.jsx(B,{})]})},r))}),e.jsxs(f,{children:[e.jsx(m,{onClick:c,children:"Previous"}),e.jsx(m,{onClick:a,children:"Next"})]})]})}},u={render:()=>{const{activeStep:n,goToNext:a,goToPrevious:c}=v({index:0,count:s.length});return e.jsxs(e.Fragment,{children:[e.jsx(i,{index:n,variant:"solid",mb:"8",children:s.map((t,r)=>e.jsx(p,{...t,render:Z},r))}),e.jsxs(f,{children:[e.jsx(m,{onClick:c,children:"Previous"}),e.jsx(m,{onClick:a,children:"Next"})]})]})}},H=[{name:"first",title:"First",description:"Contact Info",children:"Please enter your contact information"},{name:"second",title:"Second",description:"Date & Time",children:"When do you want to make the reservation?"},{name:"third",title:"Third",description:"Select Rooms",children:"Which rooms do you want to book?"}],j={render:()=>e.jsx(e.Fragment,{children:e.jsx(i,{step:"second",mb:"8",children:H.map((n,a)=>e.jsx(p,{...n},a))})})},h={render:()=>e.jsx(e.Fragment,{children:e.jsx(i,{orientation:"vertical",mb:"8",children:H.map((n,a)=>e.jsx(p,{...n,render:()=>e.jsxs(g,{children:[e.jsx(k,{children:e.jsx(T,{complete:e.jsx(N,{}),incomplete:e.jsx(d,{}),active:e.jsx(d,{})})}),e.jsx(I,{children:n.title}),e.jsx(B,{})]})},a))})})};var y,P,b;x.parameters={...x.parameters,docs:{...(y=x.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: () => {
    const {
      activeStep,
      goToNext,
      goToPrevious
    } = useSteps({
      index: 0,
      count: steps.length
    });
    return <>\r
        <Steps index={activeStep} mb="8">\r
          {steps.map((step, index) => <StepsItem key={index} {...step} />)}\r
        </Steps>\r
        <ButtonGroup>\r
          <Button onClick={goToPrevious}>Previous</Button>\r
          <Button onClick={goToNext}>Next</Button>\r
        </ButtonGroup>\r
      </>;
  }
}`,...(b=(P=x.parameters)==null?void 0:P.docs)==null?void 0:b.source}}};var z,C,F;S.parameters={...S.parameters,docs:{...(z=S.parameters)==null?void 0:z.docs,source:{originalSource:`{
  render: () => {
    const {
      activeStep,
      goToNext,
      goToPrevious
    } = useSteps({
      index: 0,
      count: steps.length
    });
    return <Stack spacing="10">\r
        <Steps index={activeStep} size="xs">\r
          {steps.map((step, index) => <StepsItem key={index} {...step} />)}\r
        </Steps>\r
        <Steps index={activeStep} size="sm">\r
          {steps.map((step, index) => <StepsItem key={index} {...step} />)}\r
        </Steps>\r
        <Steps index={activeStep} size="md">\r
          {steps.map((step, index) => <StepsItem key={index} {...step} />)}\r
        </Steps>\r
        <Steps index={activeStep} size="lg">\r
          {steps.map((step, index) => <StepsItem key={index} {...step} />)}\r
        </Steps>\r
        <Steps index={activeStep} size="xs" orientation="vertical">\r
          {steps.map((step, index) => <StepsItem key={index} {...step} />)}\r
        </Steps>\r
        <Steps index={activeStep} size="sm" orientation="vertical">\r
          {steps.map((step, index) => <StepsItem key={index} {...step} />)}\r
        </Steps>\r
        <Steps index={activeStep} size="md" orientation="vertical">\r
          {steps.map((step, index) => <StepsItem key={index} {...step} />)}\r
        </Steps>\r
        <Steps index={activeStep} size="lg" orientation="vertical">\r
          {steps.map((step, index) => <StepsItem key={index} {...step} />)}\r
        </Steps>\r
      </Stack>;
  }
}`,...(F=(C=S.parameters)==null?void 0:C.docs)==null?void 0:F.source}}};var G,V,D;l.parameters={...l.parameters,docs:{...(G=l.parameters)==null?void 0:G.docs,source:{originalSource:`{
  render: () => {
    const {
      activeStep,
      goToNext,
      goToPrevious
    } = useSteps({
      index: 0,
      count: steps.length
    });
    return <>\r
        <Steps index={activeStep} orientation="vertical" mb="8">\r
          {steps.map((step, index) => <StepsItem key={index} {...step} render={() => {
          return <Step>\r
                    <StepIndicator>\r
                      <StepStatus complete={<StepIcon />} incomplete={<StepNumber />} active={<StepNumber />} />\r
                    </StepIndicator>\r
\r
                    <StepTitle>{step.title}</StepTitle>\r
\r
                    <StepSeparator />\r
                  </Step>;
        }} />)}\r
        </Steps>\r
\r
        <ButtonGroup>\r
          <Button onClick={goToPrevious}>Previous</Button>\r
          <Button onClick={goToNext}>Next</Button>\r
        </ButtonGroup>\r
      </>;
  }
}`,...(D=(V=l.parameters)==null?void 0:V.docs)==null?void 0:D.source}}};var w,W,E;u.parameters={...u.parameters,docs:{...(w=u.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: () => {
    const {
      activeStep,
      goToNext,
      goToPrevious
    } = useSteps({
      index: 0,
      count: steps.length
    });
    return <>\r
        <Steps index={activeStep} variant="solid" mb="8">\r
          {steps.map((step, index) => <StepsItem key={index} {...step} render={renderStep} />)}\r
        </Steps>\r
\r
        <ButtonGroup>\r
          <Button onClick={goToPrevious}>Previous</Button>\r
          <Button onClick={goToNext}>Next</Button>\r
        </ButtonGroup>\r
      </>;
  }
}`,...(E=(W=u.parameters)==null?void 0:W.docs)==null?void 0:E.source}}};var R,_,A;j.parameters={...j.parameters,docs:{...(R=j.parameters)==null?void 0:R.docs,source:{originalSource:`{
  render: () => {
    return <>\r
        <Steps step="second" mb="8">\r
          {namedSteps.map((step, index) => <StepsItem key={index} {...step} />)}\r
        </Steps>\r
      </>;
  }
}`,...(A=(_=j.parameters)==null?void 0:_.docs)==null?void 0:A.source}}};var M,O,q;h.parameters={...h.parameters,docs:{...(M=h.parameters)==null?void 0:M.docs,source:{originalSource:`{
  render: () => {
    return <>\r
        <Steps orientation="vertical" mb="8">\r
          {namedSteps.map((step, index) => <StepsItem key={index} {...step} render={() => {
          return <Step>\r
                    <StepIndicator>\r
                      <StepStatus complete={<StepIcon />} incomplete={<StepNumber />} active={<StepNumber />} />\r
                    </StepIndicator>\r
\r
                    <StepTitle>{step.title}</StepTitle>\r
\r
                    <StepSeparator />\r
                  </Step>;
        }} />)}\r
        </Steps>\r
      </>;
  }
}`,...(q=(O=h.parameters)==null?void 0:O.docs)==null?void 0:q.source}}};const fe=["Default","Size","Vertical","SolidVariant","NamedSteps","NamedVertical"];export{x as Default,j as NamedSteps,h as NamedVertical,S as Size,u as SolidVariant,l as Vertical,fe as __namedExportsOrder,Be as default};
