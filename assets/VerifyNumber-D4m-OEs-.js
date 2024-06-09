import{u as K,i as T,r as n,e as M,j as e,L as B}from"./index-CEj-vY8s.js";import{A as H,p as $}from"./AsYouType-QXm2-E2q.js";import{g as q,P as k}from"./index-o_t2CInx.js";import{F as z}from"./index.es-rTUks2ZR.js";import{d as G}from"./index-5OaO6oW1.js";import{L as O}from"./LeftAddUnit-97-7ibcj.js";import{M as A}from"./MainButton-nCLaaNiL.js";import"./index-3Qzcx89j.js";const U=4,Y=2;function se(){const{t:l}=K(),{data:{verificationCode:E},getOtp:c,authenticateUser:d,status:P,statusMsg:S}=T(),[o,_]=n.useState(1),[i,F]=n.useState(),[j,w]=n.useState(!1),[p,b]=n.useState([]),u=n.useRef(null),[N,V]=n.useState("SA"),f=r=>{try{const t=new H().input(r||""),s=$(t,"SA");return s?{parsed:s.isValid(),countryCode:s.countryCallingCode,number:s.formatNational().replace(/\s/g,"")}:{parsed:!1}}catch(t){return console.error("Error validating phone number:",t),{parsed:!1}}},D=(r,t)=>{var m;const s=r.target.value,a=(m=u.current)==null?void 0:m.children;s.length===0&&t>0&&a[t-1].focus(),s.length===1&&(t<a.length-1?(a[t+1].focus(),b(C=>C.map((h,L)=>L===t+1?"":h))):a[t].blur()),b(C=>{const h=[...C];return h[t]=s,h})},v=n.useCallback(()=>{o<Y&&_(r=>r+1)},[o]),g=n.useCallback(async()=>{localStorage.setItem("phoneFlagKey","false"),I(!1);const r=f(i),t=r.countryCode,s=r.number;t&&s&&(c==null||c(s,t))},[c,i]),x=n.useCallback(()=>{d==null||d(f(i).number||"",p.join(""))},[d,i,p]),R=(r,t)=>{var a;const s=(a=u.current)==null?void 0:a.children;r.key==="ArrowLeft"?t>0&&s[t-1].focus():r.key==="ArrowRight"?t<s.length-1&&s[t+1].focus():r.key==="Home"?s[0].focus():r.key==="End"&&s[s.length-1].focus()};n.useEffect(()=>{var r;o===2&&((r=u.current)==null?void 0:r.firstChild).focus()},[o]),n.useEffect(()=>{const r=t=>{t.key=="Enter"&&(o===1?(g(),v()):o===2&&x())};return window.addEventListener("keydown",r),()=>window.removeEventListener("keydown",r)},[o,g,v,x]),n.useEffect(()=>{var r;(r=document.getElementsByClassName("PhoneInputCountry").item(0))==null||r.setAttribute("data-country-code","+"+q(N))},[N]);const{phoneFlag:{setValue:I},counter:{value:y}}=M();return e.jsxs("div",{className:"flex h-[100vh] w-[100vw]",children:[e.jsxs("div",{className:"left-logo-0",children:[e.jsx("div",{className:"absolute left-0 top-0 z-[15] h-full w-full bg-gradient-to-b from-[var(--dark-90)] to-[#5a4b64b6]"}),e.jsx(O,{})]}),e.jsxs("div",{className:"right-form relative flex items-center justify-center dark:bg-[#19131D]",children:[e.jsxs("div",{className:"add-unit-form flex   flex-col justify-center rounded-[12px] border border-[#D5D5D5] sm:w-[550px] addUnitForm",children:[o===1&&e.jsxs(e.Fragment,{children:[e.jsxs("div",{children:[e.jsx("h1",{children:l("verfiy_number.title")}),e.jsx("p",{children:l("verfiy_number.sub_title")})]}),e.jsx(k,{placeholder:l("verfiy_number.placeholder"),value:i,onChange:r=>{F(r),w(f(r).parsed)},onBlur:()=>{w(f(i).parsed)},defaultCountry:"SA",className:`cus-foucs w-full border rounded-[8px] rtl:flex-row-reverse ${j?"valid":""}`,international:!1,onCountryChange:r=>{V(r||"SA")}}),e.jsx("span",{children:y<180&&y>0?y:""}),e.jsx(A,{className:"w-full rounded-[8px] border bg-[#5a4b64] p-2 text-white focus:outline-none disabled:cursor-not-allowed disabled:bg-[#ecd6fc] dark:bg-[var(--main-color)] dark:disabled:bg-[#463c2a]",onClick:()=>{g(),v()},disabled:!j||localStorage.getItem("phoneFlagKey")=="false",children:l("verfiy_number.continue")})]}),o===2&&e.jsxs(e.Fragment,{children:[e.jsxs("div",{children:[e.jsx("h1",{children:l("verfiy_number.verfiy_num")}),e.jsx("p",{children:l("verfiy_number.enter_verfiy")}),e.jsx("div",{className:"phoneVerfiy",children:e.jsx(k,{placeholder:l("verfiy_number.placeholder"),value:i,disabled:!0,onChange:()=>"",ountry:"SA",international:!1})})]}),e.jsxs("div",{className:"mx-auto w-[75%] space-y-4 dark:text-[var(--white-color)]",children:[e.jsx("div",{className:"verification-code-input",ref:u,children:Array.from({length:U}).map((r,t)=>e.jsx("input",{className:"rounded-[8px] border text-center placeholder:text-[25px] dark:bg-[inherit]",placeholder:"*",value:p[t]||"",onChange:s=>D(s,t),onKeyDown:s=>R(s,t),onFocus:()=>{b(s=>s.map((a,m)=>m===t?"":a))},type:"number",min:0,max:9,maxLength:1,pattern:"[0-9]*",inputMode:"numeric"},t))}),e.jsxs(A,{onClick:x,className:"w-full cursor-pointer rounded-[1rem] bg-[var(--main-dark)] p-[1rem] px-[2rem] font-bold text-[var(--white-color)] hover:bg-[#99845C] dark:bg-[var(--main-color)]",children:[l("verfiy_number.send"),e.jsx("br",{})," ",E]}),e.jsx("div",{className:`text-red-500 text-center ${P==="error"?"":"hidden"}`,children:S})]})]})]}),e.jsx(B,{to:"/",className:"absolute start-10 top-10 cursor-pointer text-[2rem] text-[#18131C] hover:text-[#4A3C53] dark:text-[var(--primary-color)] hover:dark:text-[var(--white-color)]",children:e.jsx(z,{icon:G})})]})]})}export{se as default};