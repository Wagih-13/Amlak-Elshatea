import{$ as y,a0 as j,a1 as R,a2 as N,a3 as M,R as f,a4 as S,a5 as C,a6 as w,j as e,L as d,u as k,a as O,r as g,S as E}from"./index-I4-SiZne.js";import{F as h}from"./index.es-CcthUXq9.js";import{u as L}from"./index-5OaO6oW1.js";import{s as z}from"./useQuery-9LjD1ggB.js";import{b as I,f as A}from"./HomeData-cYfVc6On.js";import{M as F}from"./MainButton-nrnbbk97.js";var $=function(a){y(c,a);function c(r,s){var t;return t=a.call(this)||this,t.client=r,t.setOptions(s),t.bindMethods(),t.updateResult(),t}var n=c.prototype;return n.bindMethods=function(){this.mutate=this.mutate.bind(this),this.reset=this.reset.bind(this)},n.setOptions=function(s){this.options=this.client.defaultMutationOptions(s)},n.onUnsubscribe=function(){if(!this.listeners.length){var s;(s=this.currentMutation)==null||s.removeObserver(this)}},n.onMutationUpdate=function(s){this.updateResult();var t={listeners:!0};s.type==="success"?t.onSuccess=!0:s.type==="error"&&(t.onError=!0),this.notify(t)},n.getCurrentResult=function(){return this.currentResult},n.reset=function(){this.currentMutation=void 0,this.updateResult(),this.notify({listeners:!0})},n.mutate=function(s,t){return this.mutateOptions=t,this.currentMutation&&this.currentMutation.removeObserver(this),this.currentMutation=this.client.getMutationCache().build(this.client,j({},this.options,{variables:typeof s<"u"?s:this.options.variables})),this.currentMutation.addObserver(this),this.currentMutation.execute()},n.updateResult=function(){var s=this.currentMutation?this.currentMutation.state:R(),t=j({},s,{isLoading:s.status==="loading",isSuccess:s.status==="success",isError:s.status==="error",isIdle:s.status==="idle",mutate:this.mutate,reset:this.reset});this.currentResult=t},n.notify=function(s){var t=this;N.batch(function(){t.mutateOptions&&(s.onSuccess?(t.mutateOptions.onSuccess==null||t.mutateOptions.onSuccess(t.currentResult.data,t.currentResult.variables,t.currentResult.context),t.mutateOptions.onSettled==null||t.mutateOptions.onSettled(t.currentResult.data,null,t.currentResult.variables,t.currentResult.context)):s.onError&&(t.mutateOptions.onError==null||t.mutateOptions.onError(t.currentResult.error,t.currentResult.variables,t.currentResult.context),t.mutateOptions.onSettled==null||t.mutateOptions.onSettled(void 0,t.currentResult.error,t.currentResult.variables,t.currentResult.context))),s.listeners&&t.listeners.forEach(function(o){o(t.currentResult)})})},c}(M);function U(a,c,n){var r=f.useRef(!1),s=f.useState(0),t=s[1],o=S(a,c,n),p=C(),l=f.useRef();l.current?l.current.setOptions(o):l.current=new $(p,o);var u=l.current.getCurrentResult();f.useEffect(function(){r.current=!0;var m=l.current.subscribe(N.batchCalls(function(){r.current&&t(function(i){return i+1})}));return function(){r.current=!1,m()}},[]);var v=f.useCallback(function(m,i){l.current.mutate(m,i).catch(w)},[]);if(u.error&&z(void 0,l.current.options.useErrorBoundary,[u.error]))throw u.error;return j({},u,{mutate:v,mutateAsync:u.mutate})}var V={prefix:"fab",iconName:"x-twitter",icon:[512,512,[],"e61b","M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"]},_={prefix:"fab",iconName:"instagram",icon:[448,512,[],"f16d","M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"]},B={prefix:"fab",iconName:"facebook",icon:[512,512,[62e3],"f09a","M512 256C512 114.6 397.4 0 256 0S0 114.6 0 256C0 376 82.7 476.8 194.2 504.5V334.2H141.4V256h52.8V222.3c0-87.1 39.4-127.5 125-127.5c16.2 0 44.2 3.2 55.7 6.4V172c-6-.6-16.5-1-29.6-1c-42 0-58.2 15.9-58.2 57.2V256h83.6l-14.4 78.2H287V510.1C413.8 494.8 512 386.9 512 256h0z"]},H={prefix:"fab",iconName:"whatsapp",icon:[448,512,[],"f232","M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"]},T={prefix:"fab",iconName:"youtube",icon:[576,512,[61802],"f167","M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"]};function x({children:a,highlightColor:c,to:n}){const s={facebook:"hover:bg-[#1877f2]",instagram:"hover:bg-[#a845b1]",twitter:"hover:bg-[#1da1f2]",youtube:"hover:bg-[#ff0000]",whatsapp:"hover:bg-[#55EA6C]",phone:"hover:bg-[#0A94F7]"}[c.toLowerCase()];return e.jsx("li",{className:`rounded-full transition hover:border-current ${s}`,children:e.jsx(d,{className:"pointer inline-flex items-center justify-center rounded-full border border-[var(--main-color)] p-3 text-2xl text-[#b9b9b9] transition",to:n||"/",children:a})})}const Y=()=>{const{t:a,i18n:c}=k(),{pathname:n}=O(),{services:r}=I(),[s,t]=g.useState(""),[o,p]=g.useState("idle"),{mutate:l,isLoading:u}=U({mutationFn:async i=>(await A(i)).data,onSuccess:i=>{p(i.resultType?"success":"failed")}}),v=[r==null?void 0:r.firstMobile,r==null?void 0:r.secondMobile],m=[r==null?void 0:r.firstEmail,r==null?void 0:r.secondEmail];return g.useEffect(()=>{const i=setInterval(()=>{o!=="idle"&&p("idle")},3e3);return()=>clearInterval(i)},[o]),e.jsxs("footer",{className:"footer-container relative z-[10] pt-10 dark:bg-[var(--dark-70)]",id:"Footer",children:[e.jsx("div",{className:"absolute left-0 top-0 z-[5] h-full w-full bg-gradient-to-b from-[var(--dark-90)] to-[#675a70ad]"}),e.jsx("img",{className:"absolute left-0 hidden h-[500px] w-[500px] lg:block",src:"/images/l-bg.png",alt:""}),e.jsx("img",{className:"absolute right-0 hidden h-[600px] w-[400px] lg:block",src:"/images/g-bg.png",alt:""}),n==="/"&&e.jsx("div",{className:"send-email relative z-20 dark:border-[var(--main-color)]",children:e.jsxs("div",{className:"email-container",children:[e.jsx("h4",{className:"sub pb-6 text-[18px] lg:text-[25px]",children:a("footer.title")}),e.jsxs("form",{className:"h-[70px] bg-[var(--white-color)] dark:bg-[var(--main-dark)]",children:[e.jsx("input",{type:"email",placeholder:`${c.language==="ar"?"ادخل الايميل":"Enter your email"}`,className:`h-full text-[var(--main-dark)] dark:text-[var(--white-color)] ${o!=="idle"&&"text-center"}`,value:o==="idle"?s:a(o==="success"?"footer.subscribeSuccess":"footer.subscribeFailed"),onChange:i=>t(i.target.value)}),e.jsx(F,{className:`subscribeBtn ${o!=="idle"&&"hidden"}`,type:"submit",onClick:()=>l(s),disabled:u,children:u?e.jsx(E,{}):`${c.language==="ar"?"إشتراك":"Subscribe"}`})]})]})}),e.jsxs("div",{className:"mb-4 flex flex-col",children:[e.jsxs("div",{className:"footer relative z-10",children:[e.jsx("div",{className:"myLogo",children:e.jsx("img",{className:"w-[150px]",src:"/images/logo.png",alt:"Logo"})}),e.jsxs("div",{className:"quickLinks",children:[e.jsxs("div",{className:"footer-section flex-[0.25] ",children:[e.jsx("h6",{className:"text-[var(--white-color)]",children:a("footer.company")}),e.jsxs("ul",{className:"links",children:[e.jsx("li",{children:e.jsx(d,{to:"/#WhoWe",children:a("footer.whoAreWe")})}),e.jsx("li",{children:e.jsx(d,{to:"/#",children:a("footer.home")})}),e.jsx("li",{children:e.jsx(d,{to:"/#",children:a("footer.joinUs")})})]})]}),e.jsxs("div",{className:"footer-section flex-[0.25]",children:[e.jsx("h6",{className:"text-[var(--white-color)]",children:a("footer.contactUs")}),e.jsxs("ul",{className:"links",children:[e.jsx("li",{children:e.jsx(d,{to:"/#",children:a("footer.faq")})}),e.jsx("li",{children:e.jsx(d,{to:"/#",children:a("footer.terms")})}),e.jsx("li",{children:e.jsx(d,{to:"/#OfferSection",children:a("footer.offers")})})]})]})]}),e.jsx("div",{className:"footer-section",children:e.jsxs("div",{className:" text-[1rem] text-white mySocial_2",children:[e.jsx("div",{className:" socialBox",children:v.map((i,b)=>e.jsxs("div",{className:"flex flex-1 items-center gap-4",children:[e.jsx("ul",{className:"flex items-center gap-4",children:e.jsx(d,{to:`https://api.whatsapp.com/send?phone=${i}`,target:"blank",children:e.jsx("span",{className:"whatsappIcon",children:e.jsx(h,{icon:H})})})}),e.jsxs("div",{className:"flex h-full items-center gap-4 rounded-md border border-[var(--main-color)] px-4 py-2 transition-all hover:bg-[var(--main-color)]",children:[e.jsx("span",{dir:"ltr",children:i}),e.jsx("div",{className:"PhoneInputCountryIcon",children:e.jsx("img",{className:"PhoneInputCountryIconImg",alt:"Saudi Arabia",src:"https://purecatamphetamine.github.io/country-flag-icons/3x2/SA.svg"})})]})]},b))}),e.jsx("div",{className:" socialBox",children:m.map((i,b)=>e.jsxs("div",{className:"flex flex-1 items-center gap-4",children:[e.jsx("ul",{className:"flex items-center gap-4",children:e.jsx(x,{highlightColor:"whatsapp",to:`mailto:${i}`,children:e.jsx(h,{icon:L})})}),e.jsx("span",{className:"w-full rounded-md border border-[var(--main-color)] px-4 py-2 text-center transition-all hover:bg-[var(--main-color)]",dir:"ltr",children:i})]},b))})]})}),e.jsxs("ul",{className:"social mySocial",children:[e.jsx(x,{highlightColor:"facebook",children:e.jsx(h,{icon:B})}),e.jsx(x,{highlightColor:"instagram",children:e.jsx(h,{icon:_})}),e.jsx(x,{highlightColor:"twitter",children:e.jsx(h,{icon:V})}),e.jsx(x,{highlightColor:"youtube",children:e.jsx(h,{icon:T})})]})]}),e.jsx("p",{className:"copyright relative bottom-[-0.5rem]",children:a("footer.copyRight")})]})]})};export{Y as default};