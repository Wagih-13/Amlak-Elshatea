import{d,j as e,u,r as f,L as o}from"./index-9lkFN0r1.js";import{F as k}from"./index.es-0w6C3KRI.js";import{M as j}from"./MainButton-_P4TI_oS.js";import{S as x}from"./SecondaryButton-fAf2Q4Jb.js";const N=()=>{const{theme:a,toggleTheme:i}=d();return e.jsxs("div",{children:[e.jsx("input",{onChange:i,className:"dark_mode_input",type:"checkbox",id:"darkmode-toggle",checked:a==="dark"}),e.jsxs("label",{className:"dark_mode_label",htmlFor:"darkmode-toggle",children:[e.jsx("img",{src:"/images/Sun.svg",className:"sun",alt:"Sun"}),e.jsx("img",{src:"/images/Moon.svg",className:"moon",alt:"Moon"})]})]})};var h={};(function(a){Object.defineProperty(a,"__esModule",{value:!0});var i="fas",n="bars",l=448,c=512,r=["navicon"],s="f0c9",t="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z";a.definition={prefix:i,iconName:n,icon:[l,c,r,s,t]},a.faBars=a.definition,a.prefix=i,a.iconName=n,a.width=l,a.height=c,a.ligatures=r,a.unicode=s,a.svgPathData=t,a.aliases=r})(h);var m={},v={};(function(a){Object.defineProperty(a,"__esModule",{value:!0});var i="fas",n="xmark",l=384,c=512,r=[128473,10005,10006,10060,215,"close","multiply","remove","times"],s="f00d",t="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z";a.definition={prefix:i,iconName:n,icon:[l,c,r,s,t]},a.faXmark=a.definition,a.prefix=i,a.iconName=n,a.width=l,a.height=c,a.ligatures=r,a.unicode=s,a.svgPathData=t,a.aliases=r})(v);(function(a){Object.defineProperty(a,"__esModule",{value:!0});var i=v;a.definition={prefix:i.prefix,iconName:i.iconName,icon:[i.width,i.height,i.aliases,i.unicode,i.svgPathData]},a.faClose=a.definition,a.prefix=i.prefix,a.iconName=i.iconName,a.width=i.width,a.height=i.height,a.ligatures=i.aliases,a.unicode=i.unicode,a.svgPathData=i.svgPathData,a.aliases=i.aliases})(m);const L=({notHomeNav:a=!0,className:i=""})=>{const[n,l]=u(),{theme:c}=d(),[r,s]=f.useState(!1),t=()=>{l.changeLanguage(l.language==="ar"?"en":"ar")};return e.jsxs("div",{children:[e.jsxs("header",{className:`new-header ${a&&!r&&"bg-[var(--white-color)] dark:bg-[var(--main-dark)]"} ${r&&"visible"} ${i}`,style:a?{boxShadow:"0px 4px 8px rgba(0, 0, 0, 0.1)"}:{},children:[e.jsx(o,{to:"/",className:"logo",children:e.jsx("img",{src:c==="dark"?"/images/logo.png":"/images/logo-dark.png",alt:"Logo"})}),e.jsx("nav",{children:e.jsxs("ul",{className:"navbar-links",children:[a&&e.jsx("li",{className:"text-[var(--main-dark)] dark:text-[var(--white-color)]",onClick:()=>s(!1),children:e.jsx(o,{to:"/",children:n("nav.home")})}),e.jsx("li",{className:"text-[var(--main-dark)] dark:text-[var(--white-color)]",onClick:()=>s(!1),children:e.jsx(o,{to:"/#FeaturedUnits",children:n("nav.FeaturedUnits")})}),e.jsx("li",{className:"text-[var(--main-dark)] dark:text-[var(--white-color)]",onClick:()=>s(!1),children:e.jsx(o,{to:"/#OfferSection",children:n("nav.Offers")})}),e.jsx("li",{className:"text-[var(--main-dark)] dark:text-[var(--white-color)]",onClick:()=>s(!1),children:e.jsx(o,{to:"/#WhoWe",children:n("nav.WhoAreWe")})}),e.jsx("li",{className:"text-[var(--main-dark)] dark:text-[var(--white-color)]",onClick:()=>s(!1),children:e.jsx(o,{to:"/#Footer",children:n("nav.ContactUS")})})]})}),e.jsxs("ul",{className:"navbar-buttons",children:[e.jsx("li",{className:"test",children:e.jsx(j,{onClick:()=>window.location.href="https://amlaq.sa/home/login",className:"w-full",children:n("nav.Login")})}),e.jsx("li",{children:e.jsx(x,{className:`w-full ${!a&&"navbar-button"} ${a&&"text-[var(--main-color)]"}`,children:e.jsx(o,{to:"/add-unit",children:n("nav.Addyourproperty")})})})]}),e.jsxs("div",{className:"ui-controls",children:[e.jsx("span",{className:"new-lang text-[var(--main-dark)] dark:text-[var(--white-color)]",onClick:t,children:l.language==="ar"?"English":"العربيه"}),e.jsx(N,{})]})]}),e.jsx("a",{className:"hamburger text-[var(--main-dark)] dark:text-[var(--white-color)]",onClick:()=>s(g=>!g),children:e.jsx(k,{icon:r?m.faClose:h.faBars})})]})};export{L as default};