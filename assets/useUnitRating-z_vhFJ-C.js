import{r as u,j as e}from"./index-tZbO2SC8.js";import{F as f}from"./index.es-VK1aw4bf.js";import{u as p}from"./UnitDetails-zjvt-OZs.js";import{f as S,t as x}from"./index-5OaO6oW1.js";import{u as h}from"./web-10AfUllF.js";function g(r,a){const t=localStorage.getItem(r);return t?JSON.parse(t):a}function N(r,a){const[t,s]=u.useState(()=>g(r,a));return u.useEffect(()=>{localStorage.setItem(r,JSON.stringify(t))},[r,t]),[t,s]}const d=5,w=r=>{const{unitDetails:a}=p(),t=a==null?void 0:a.areaUnitComment,s=(t==null?void 0:t.length)??0,l=(t==null?void 0:t.filter(n=>n.areaUnitStatus>0||!0).reduce((n,c)=>n+ +c.areaUnitRate,0))??0,o=r??l/((t==null?void 0:t.length)??1);return{unitRatingsCount:s,unitAvgRating:o,UnitStars:()=>e.jsx(j,{rating:o})}},j=({rating:r})=>{const[a,{width:t}]=h(),s=Math.round(r*2)/2,l=Math.floor(r),o=s-l>0,m=Math.floor(d-s),n=({grey:c=!1})=>e.jsx(f,{className:`${c?"scale-x-[-1]":""}`,color:c?"var(--primary-color)":"var(--main-color)",style:{clipPath:"inset(0 50% 0 0)"},icon:x,ref:a});return e.jsxs("div",{dir:"ltr",className:"flex gap-[0.5ch]",children:[e.jsxs("div",{className:"flex items-center justify-between gap-[0.5ch]",style:{translate:`${o?Math.round(t)+4:0}px`},children:[Array.from({length:l}).map((c,i)=>e.jsx(f,{color:"var(--main-color)",icon:S},i)),o&&e.jsx(n,{})]}),e.jsxs("div",{className:"flex items-center justify-between gap-[0.5ch]",children:[o&&e.jsx(n,{grey:!0}),Array.from({length:m}).map((c,i)=>e.jsx(f,{color:"var(--primary-color)",icon:S},i))]})]})};export{N as a,w as u};
