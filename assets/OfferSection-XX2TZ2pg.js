import{u as h,j as s,L as f}from"./index-CEj-vY8s.js";import{F as m}from"./index.es-rTUks2ZR.js";import{e as p,g as d}from"./index-5OaO6oW1.js";import{D as u}from"./DiscountBadge-nPyla0J9.js";import{S as j}from"./SlidingCarousel-GuKV_u0t.js";import{u as g,b as N}from"./HomeData-9xWNYf0v.js";import"./web-qhXCde5R.js";import"./useQuery-2qmCH6X6.js";const v=3;function b(t,o){const n=Math.ceil(t.length/o),c=[];for(let r=0;r<o;r++){const a=r*n,l=a+n,e=t.slice(a,l);c.push(e)}return c}const L=()=>{const{offers:t}=g(),{t:o,i18n:n}=h(),c=b(t,v),{services:r}=N();return s.jsx("section",{className:"offers-container",children:s.jsxs("div",{className:"offers",children:[s.jsxs("div",{className:"explore__content",children:[s.jsx("h1",{className:"text-[var(--main-color)]",children:o("offers.title")}),s.jsx("h2",{className:"text-[var(--main-color)]",children:o("offers.last_minute")}),s.jsx("p",{className:"text-white",children:r==null?void 0:r.offers}),s.jsxs(f,{to:"search-unit/offers",className:"btn-offer mt-[15px] hover:bg-[var(--main-color)] dark:hover:bg-[var(--main-color)]",children:[o("offers.title"),s.jsx(m,{className:"text-[var(--main-color)]",icon:n.language==="ar"?p:d})]})]}),s.jsx("div",{className:"explore__wrapper flex h-full gap-2",children:c.filter(a=>a.length>0).map((a,l)=>s.jsx(j,{direction:"y",gap_size:20,children:a.map((e,x)=>{var i;return s.jsx("div",{children:s.jsxs(f,{to:`search-unit/${e==null?void 0:e.areaUnitCode}`,draggable:!1,children:[((i=e.offerText)==null?void 0:i.length)>0&&s.jsx(u,{fullText:e.offerText,className:"absolute"}),s.jsx("img",{src:e.areaUnitMainPhoto,alt:"explore",className:"h-[244px] w-[170px] rounded-[14px] object-cover"})]})},x)})},l))})]})})};export{L as default};
