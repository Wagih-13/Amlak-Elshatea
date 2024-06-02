import{r as v,j as e,u as j,i as I,e as S,s as p,f as R,F as q,S as A,I as B,J as L}from"./index-9lkFN0r1.js";import P from"./Navbar-tC8KJGvV.js";import O from"./Footer-QoHgJKqR.js";import{u as y,a as w}from"./hooks-bXIZ6ZX-.js";import{P as F}from"./index-Qrf1_4ws.js";import{a as D}from"./PersonInfo-bN_hOJip.js";import{F as V}from"./index.es-0w6C3KRI.js";import{l as $,m as M}from"./index-5OaO6oW1.js";import{u as _}from"./UnitDetails-GBFcYWzZ.js";import{S as T}from"./SecondaryButton-fAf2Q4Jb.js";import{M as E}from"./MainButton-_P4TI_oS.js";import{S as z}from"./Save-qOb1NsBm.js";import"./useQuery-TR_kGZ4x.js";import"./HomeData-Zlw43Yl1.js";import"./index-84iKp455.js";function U({label:a,options:t,placeholder:s,currentValue:d,setCurrentValue:o,htmlFor:n,disabled:l=!1}){var k;const[g,h]=v.useState(!1),u=v.useRef(null),[i,x]=v.useState(((k=t.find(m=>m.code===d))==null?void 0:k.text)||""),b=v.useMemo(()=>(i==null?void 0:i.length)>0?t.filter(m=>m.text.toLowerCase().includes(i==null?void 0:i.toLowerCase())):t,[t,i]),f=m=>{o(m.code),h(!1)};return v.useEffect(()=>{const m=N=>{var r;(r=u==null?void 0:u.current)!=null&&r.contains(N.target)||h(!1)};return window.addEventListener("click",m),()=>{window.removeEventListener("click",m)}},[]),v.useEffect(()=>{var m;x(((m=t.find(N=>N.code===d))==null?void 0:m.text)||"")},[t,d]),e.jsx(e.Fragment,{children:e.jsxs("div",{ref:u,className:"relative flex w-full flex-col",children:[e.jsx("label",{className:"dark:text-[var(--white-color)]",htmlFor:n,children:a}),e.jsxs("div",{className:`flex-1 flex  items-center justify-between ${l?"cursor-not-allowed":"cursor-pointer"}`,children:[e.jsx("input",{type:"text",required:!0,id:n,value:i||"",onChange:m=>{x(m.target.value)},placeholder:s,className:"mt-1 phoneInputBox w-full rounded-md border p-2 disabled:cursor-not-allowed dark:text-[var(--primary-color)] dark:disabled:bg-[var(--main-dark)] ",onClick:()=>h(!0),disabled:l}),e.jsx(V,{className:"absolute end-3 top-10",icon:g?$:M,onClick:()=>!l&&h(m=>!m)})]}),g&&e.jsx("ul",{className:"absolute bottom-0 z-50 w-full translate-y-full overflow-hidden rounded-[1rem] border bg-white shadow-md ",id:"nationalityList",children:b.map((m,N)=>e.jsx("li",{onClick:()=>{f(m)},className:"cursor-pointer px-4 py-2 hover:bg-gray-200",children:m.text},N))})]})})}const G=()=>{const{t:a}=j(),t=y(),{data:{countryCode:s,currentPhoneNumber:d}}=I(),{renterInfo:o}=D(d),{contractData:n}=w(i=>i.webcontract),l=((o==null?void 0:o.generalNationality)??[]).map(i=>({code:i.generalNationalityCode,text:i.generalNationalityName})),{check:{value:g,setValue:h}}=S(),u=i=>{i.target.value[0]==="1"?h(!0):h(!1),t(p({renterIDNo:i.target.value}))};return e.jsxs("div",{className:"details-grid gap-5 py-10",children:[e.jsxs("div",{className:"flex flex-col",children:[e.jsx("label",{htmlFor:"phone",className:"mb-1 text-sm font-medium text-gray-700 dark:text-[var(--white-color)]",children:a("booking_confirmation.tenant_phone")}),e.jsx(F,{placeholder:a("booking_confirmation.enter_phone"),value:`+${s}${d}`||"",defaultCountry:"SA",className:"rtl:flex-row-reverse ",international:!1,onChange:()=>{},disabled:!0})]}),e.jsxs("div",{className:"flex flex-col",children:[e.jsx("label",{htmlFor:"TenantID",className:"mb-1 text-sm font-medium text-gray-700 dark:text-[var(--white-color)]",children:a("booking_confirmation.tenant_id")}),e.jsx("input",{type:"text",required:!0,id:"TenantID",name:"TenantID",value:(n==null?void 0:n.renterIDNo)||"",onChange:u,placeholder:a("booking_confirmation.enter_id"),className:"flex-1 rounded-md border p-2 disabled:cursor-not-allowed dark:text-[var(--primary-color)] dark:disabled:bg-[var(--main-dark)] phoneInputBox"})]}),e.jsxs("div",{className:"flex flex-col",children:[e.jsx("label",{htmlFor:"Name",className:"mb-1 text-sm font-medium text-gray-700 dark:text-[var(--white-color)]",children:a("booking_confirmation.tenant_name")}),e.jsx("input",{type:"text",required:!0,id:"Name",name:"Name",value:(n==null?void 0:n.renterName)||"",onChange:i=>t(p({renterName:i.target.value})),placeholder:a("booking_confirmation.enter_name"),className:"flex-1 phoneInputBox rounded-md border p-2 disabled:cursor-not-allowed dark:text-[var(--primary-color)] dark:disabled:bg-[var(--main-dark)]"})]}),e.jsx(U,{saudiNationality:g,options:l,currentValue:(n==null?void 0:n.renterNationalityCode)||"",setCurrentValue:i=>t(p({renterNationalityCode:i.toString()})),label:a("booking_confirmation.tenant_nationality"),placeholder:a("booking_confirmation.tenant_nationality"),htmlFor:"tenantNationality"})]})},J=()=>{const{t:a}=j(),t=y(),{contractData:s}=w(r=>r.webcontract),{unitDetails:d}=_(s.areaUnitCode),{data:{currentPhoneNumber:o}}=I(),{renterInfo:n}=D(o),l=s.areaUnitContractEscort,g=((n==null?void 0:n.generalNationality)??[]).map(r=>({code:r.generalNationalityCode,text:r.generalNationalityName})),h=((n==null?void 0:n.generalRelation)??[]).map(r=>({code:r.generalRelationCode,text:r.generalRelationName})),u=+((d==null?void 0:d.areaUnitCapacity)||"1"),i=l.length>0?u-l.length:u,x=()=>{i>0&&t(p({areaUnitContractEscort:[...l,{areaUnitContractEscortID:l.length,areaUnitContractEscortCode:"",areaUnitContractCode:"",escortIDNo:"",escortName:"",escortRelation:"",escortNationality:""}]}))},b=r=>{l.length!==0&&t(p({areaUnitContractEscort:l.filter(C=>C.areaUnitContractEscortID!==r)}))},f=(r,C)=>{t(p({areaUnitContractEscort:l.map(c=>c.areaUnitContractEscortID===C?{...c,escortName:r}:c)}))},k=(r,C)=>{t(p({areaUnitContractEscort:l.map(c=>c.areaUnitContractEscortID===C?{...c,escortIDNo:r}:c)}))},m=(r,C)=>{t(p({areaUnitContractEscort:l.map(c=>c.areaUnitContractEscortID===C?{...c,escortRelation:r.toString()}:c)}))},N=(r,C)=>{t(p({areaUnitContractEscort:l.map(c=>c.areaUnitContractEscortID===C?{...c,escortNationality:r.toString()}:c)}))};return e.jsx("div",{className:"mt-5 w-full py-10",children:u>0&&e.jsxs(e.Fragment,{children:[e.jsxs("h2",{className:"mb-3 text-xl font-bold dark:text-[var(--white-color)]",children:[a("booking_confirmation.escort_details")," ",e.jsxs("span",{className:"ms-4 text-[1.25rem] italic text-[var(--primary-color)]",children:["( ",u-i," / ",u," )"]})]}),e.jsx("div",{className:"flex w-full flex-wrap items-start justify-between",children:l.map((r,C)=>e.jsxs("div",{className:"details-grid w-full gap-4 pb-5 md:gap-8",children:[e.jsxs("div",{className:"flex flex-col",children:[e.jsx("label",{className:"mb-1 dark:text-[var(--white-color)]",children:a("booking_confirmation.name_utility")}),e.jsx("input",{type:"text",required:!0,className:"rounded border p-2 disabled:cursor-not-allowed dark:text-[var(--black-color)] dark:disabled:bg-[var(--main-dark)]",placeholder:a("booking_confirmation.enter_name_utility"),value:r.escortName,onChange:c=>f(c.target.value,r.areaUnitContractEscortID)})]}),e.jsxs("div",{className:"flex flex-col",children:[e.jsx("label",{className:"mb-1 dark:text-[var(--white-color)]",children:a("booking_confirmation.id_no_utility")}),e.jsx("input",{type:"text",required:!0,className:"rounded border p-2 disabled:cursor-not-allowed dark:text-[var(--black-color)] dark:disabled:bg-[var(--main-dark)]",placeholder:a("booking_confirmation.enter_id_no_utility"),value:r.escortIDNo,onChange:c=>{k(c.target.value,r.areaUnitContractEscortID)}})]}),e.jsx(U,{saudiNationality:!1,options:h,currentValue:r.escortRelation,setCurrentValue:c=>m(c,r.areaUnitContractEscortID),label:a("booking_confirmation.kinship_utility"),placeholder:a("booking_confirmation.enter_kinship_utility"),htmlFor:"escortRelation"}),e.jsx(U,{saudiNationality:!1,options:g,currentValue:r.escortNationality,setCurrentValue:c=>N(c,r.areaUnitContractEscortID),label:a("booking_confirmation.escort_nationality"),placeholder:a("booking_confirmation.escort_nationality"),htmlFor:"escortNationality"}),l.length!==0&&e.jsx("div",{className:"mt-6",onClick:()=>b(r.areaUnitContractEscortID),children:e.jsx(T,{children:a("booking_confirmation.remove")})})]},C))}),i>0&&e.jsx(E,{className:"mt-6",onClick:x,children:a("booking_confirmation.add")})]})})},W=()=>{const{t:a}=j(),t=y(),{contractData:s}=w(x=>x.webcontract),{unitDetails:d}=_(s.areaUnitCode),o=s.areaUnitContractCar,n=+((d==null?void 0:d.areaUnitCarsNo)||"1"),l=o.length>0?n-o.length:n,g=()=>{l>0&&t(p({areaUnitContractCar:[...o,{areaUnitContractCarID:o.length,areaUnitContractCarCode:"",areaUnitContractCode:"",carType:"",carNo:""}]}))},h=x=>{o.length!==0&&t(p({areaUnitContractCar:o.filter(b=>b.areaUnitContractCarID!==x)}))},u=(x,b)=>{t(p({areaUnitContractCar:o.map(f=>f.areaUnitContractCarID!==b?f:{...f,carType:x.target.value})}))},i=(x,b)=>{t(p({areaUnitContractCar:o.map(f=>f.areaUnitContractCarID!==b?f:{...f,carNo:x.target.value})}))};return e.jsx("div",{className:"w-full pb-5",children:n>0&&e.jsxs(e.Fragment,{children:[e.jsxs("h3",{className:"pb-3 text-[24px] font-bold dark:text-[var(--white-color)]",children:[a("booking_confirmation.car_data")," ",e.jsxs("span",{className:"ms-4 text-[1.25rem] italic text-[var(--primary-color)]",children:["( ",n-l," / ",n," )"]})]}),e.jsx("hr",{}),e.jsx("div",{className:"flex flex-wrap items-start gap-2 pt-10 md:items-center",children:o.map((x,b)=>e.jsxs("div",{className:"flex w-full flex-wrap justify-start gap-8 pb-5",children:[e.jsxs("div",{className:"flex flex-col",children:[e.jsx("label",{className:"mb-1 block dark:text-[var(--white-color)]",children:a("booking_confirmation.car_type")}),e.jsx("input",{type:"text",required:!0,className:"mb-2 h-[40px] w-[300px] rounded border px-2 py-1 disabled:cursor-not-allowed dark:text-[var(--black-color)] dark:disabled:bg-[var(--main-dark)] lg:w-[200px]",placeholder:a("booking_confirmation.enter_car_type"),value:x.carType,onChange:f=>u(f,x.areaUnitContractCarID)})]}),e.jsxs("div",{className:"flex flex-col",children:[e.jsx("label",{className:"mb-1 block dark:text-[var(--white-color)]",children:a("booking_confirmation.car_palte_no")}),e.jsx("input",{type:"text",required:!0,className:"mb-2 h-[40px] w-[300px] rounded border px-2 py-1 disabled:cursor-not-allowed dark:text-[var(--black-color)] dark:disabled:bg-[var(--main-dark)] lg:w-[200px]",placeholder:a("booking_confirmation.enter_car_palte_no"),value:x.carNo,onChange:f=>i(f,x.areaUnitContractCarID)})]}),o.length!==0&&e.jsx("div",{className:"mt-6",onClick:()=>h(x.areaUnitContractCarID),children:e.jsx(T,{children:a("booking_confirmation.remove")})})]},b))}),l>0&&e.jsx(E,{className:"mt-0 lg:-mt-[9px]",onClick:g,children:a("booking_confirmation.add")})]})})},H=()=>{const{t:a}=j(),t=y(),{contractData:s}=w(n=>n.webcontract),d=n=>{t(p({renterIDNo:n.target.value}))},{unitDetails:o}=_();return console.log(o),e.jsxs("div",{className:"details-grid gap-5 py-10",children:[e.jsxs("div",{className:"flex flex-col",children:[e.jsx("label",{htmlFor:"TenantID",className:"mb-3 text-sm font-medium text-gray-700 dark:text-[var(--white-color)]",children:a("booking_confirmation.unit_code")}),e.jsx("input",{type:"text",required:!0,id:"TenantID",name:"TenantID",value:(o==null?void 0:o.areaUnitName)||"",onChange:d,disabled:!0,className:"flex-1 rounded-md  p-2 disabled:cursor-not-allowed dark:text-[var(--primary-color)] dark:disabled:bg-[var(--main-dark)] "})]}),e.jsxs("div",{className:"flex flex-col",children:[e.jsx("label",{htmlFor:"TenantID",className:"mb-3 text-sm font-medium text-gray-700 dark:text-[var(--white-color)]",children:a("booking_confirmation.DateOfArrival")}),e.jsx("input",{type:"text",required:!0,id:"TenantID",name:"TenantID",value:new Date(s==null?void 0:s.checkInDate).toLocaleDateString()||"",onChange:d,disabled:!0,className:"flex-1 rounded-md  p-2 disabled:cursor-not-allowed  dark:text-[var(--primary-color)]  dark:disabled:bg-[var(--main-dark)]  "})]}),e.jsxs("div",{className:"flex flex-col",children:[e.jsx("label",{htmlFor:"Name",className:"mb-3 text-sm font-medium text-gray-700 dark:text-[var(--white-color)]",children:a("booking_confirmation.DateOfDeparture")}),e.jsx("input",{type:"text",required:!0,id:"Name",name:"Name",value:new Date(s==null?void 0:s.checkOutDate).toLocaleDateString()||"",onChange:n=>t(p({renterName:n.target.value})),disabled:!0,className:"flex-1  rounded-md  p-2 disabled:cursor-not-allowed dark:text-[var(--primary-color)] dark:disabled:bg-[var(--main-dark)] "})]})]})},K=(a,t)=>{var s,d;return{areaUnitContractEscortID:t,areaUnitContractEscortCode:(s=a.areaUnitContractCode)==null?void 0:s.toString(),areaUnitContractCode:(d=a.areaUnitContractCode)==null?void 0:d.toString(),escortIDNo:a.escortIDNo,escortName:a.escortName,escortRelation:a.escortRelationCode,escortNationality:a.escortNationalityCode}},Q=a=>({areaUnitContractCarID:a.areaUnitContractCarID,areaUnitContractCarCode:a.areaUnitContractCarCode,areaUnitContractCode:a.areaUnitContractCode,carType:a.carType,carNo:a.carNo}),xe=()=>{const{t:a}=j(),{unitDetails:t}=_(),s=y(),{contractData:d,status:o}=w(r=>r.webcontract),{data:{verificationCode:n,currentPhoneNumber:l,countryCode:g}}=I(),{renterInfo:h,loadingRenterInfo:u}=D(l),[i,x]=v.useState(!1),b=()=>{s(B(d))},f=()=>{s(L()),m(!1),N("/")},{last:{value:k,setValue:m}}=S(),N=R();return v.useEffect(()=>{h&&s(p({renterMobile:l,renterCountryCode:`+${g}`,verificationCode:n,renterIDNo:h.areaUnitContract.renterIDNo,renterName:h.areaUnitContract.renterName,renterNationalityCode:h.areaUnitContract.renterNationalityCode,areaUnitContractEscort:(h.unitContractEscortList||[]).map((r,C)=>K(r,C)).slice(0,+((t==null?void 0:t.areaUnitCapacity)||"1")),areaUnitContractCar:(h.areaUnitContractCarList||[]).map(r=>Q(r)).slice(0,+((t==null?void 0:t.areaUnitCarsNo)||"1"))}))},[s,h,l,g,n,t==null?void 0:t.areaUnitCapacity,t==null?void 0:t.areaUnitCarsNo]),e.jsxs(e.Fragment,{children:[k?e.jsx(e.Fragment,{children:e.jsx("div",{className:"CompletedReservation",children:e.jsxs("div",{className:"CompletedReservationCard",children:[e.jsx("p",{children:a("booking_confirmation.letterOfConfirmation")}),e.jsxs("div",{className:"inputsContainer",children:[e.jsx("i",{className:"fa-regular fa-square-check trueIcon"}),e.jsx("button",{className:"navButton",onClick:f,children:"انتقل للرئيسية"})]})]})})}):"",o==="done"?e.jsx(z,{children:e.jsx("h1",{children:a("booking_confirmation.success")})}):e.jsxs(e.Fragment,{children:[e.jsx(P,{className:"mb-[2rem]"}),u&&e.jsx(q,{}),!u&&e.jsx("div",{className:"booking-confirmation mt-[8rem] flex w-full flex-col items-start lg:mt-0",children:e.jsxs("form",{onSubmit:r=>{r.preventDefault(),b()},className:"container",children:[e.jsx("h1",{className:"pb-[10px] text-[2.5rem] font-bold text-[#5A4B64] dark:text-[var(--white-color)]",children:a("booking_confirmation.title")}),e.jsxs("div",{className:"py-5",children:[e.jsx("h3",{className:" text-[2rem] font-bold dark:text-[var(--white-color)]",children:a("booking_confirmation.tenant_details")}),e.jsx(H,{}),e.jsx("hr",{}),e.jsx("h3",{className:"mb-3 mt-5 text-[2rem] font-bold dark:text-[var(--white-color)]",children:a("booking_confirmation.tenant_details")}),e.jsx(G,{})]}),e.jsx("hr",{}),e.jsx(J,{}),e.jsx(W,{}),e.jsx("hr",{}),e.jsxs("div",{className:"my-[2rem] flex w-full flex-col justify-end gap-4 md:flex-row",children:[e.jsxs("div",{className:"flex flex-1 items-center",children:[e.jsxs("label",{className:"me-4 flex items-center dark:text-[var(--white-color)]",children:[e.jsx("input",{type:"checkbox",value:i?"checked":"",onChange:()=>x(r=>!r),className:"me-2 !inline-block"}),e.jsx("span",{children:a("booking_confirmation.alternatePhoneNumber")})]}),e.jsx(F,{placeholder:a("booking_confirmation.enter_phone"),value:`+${g}${l}`||"",defaultCountry:"SA",className:"rtl:flex-row-reverse",international:!1,onChange:()=>{},disabled:!i})]}),o==="error"&&e.jsx("div",{className:"flex-1 text-[1.25rem] text-red-500",children:a("booking_confirmation.error")}),e.jsxs(E,{className:"w-full md:w-[10rem]",disabled:o==="loading",type:"submit",onClick:()=>b(),children:[o==="loading"&&e.jsx("div",{className:"inline-block",children:e.jsx(A,{})}),o!=="loading"&&a("booking_confirmation.save")]})]})]})}),e.jsx(O,{})]})]})};export{xe as default};