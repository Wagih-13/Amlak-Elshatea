import{u as U,d as z,j as u,F as V,L as G}from"./index-Sf6fg46U.js";import{g as O,S as J,c as F}from"./swiper-vsMXPJCp.js";import{c as K}from"./create-element-if-not-defined-Bm-Okb95.js";import{S as Q}from"./SearchBar-osuxrPpv.js";import{a as W}from"./HomeData-cfDWNHnc.js";import{M as X}from"./MainButton-uTkjP8iy.js";import"./index-5OaO6oW1.js";import"./index.es--8fXy3b_.js";import"./Calendar-KgVnvzL9.js";import"./index-BFOVBzNa.js";import"./useUrlPosition-svC8i8wH.js";import"./LookupTables-oINEkwjR.js";import"./useQuery-jp5Q6j4G.js";function Y(S){let{swiper:e,extendParams:N,on:p,emit:o}=S;N({navigation:{nextEl:null,prevEl:null,hideOnClick:!1,disabledClass:"swiper-button-disabled",hiddenClass:"swiper-button-hidden",lockClass:"swiper-button-lock",navigationDisabledClass:"swiper-navigation-disabled"}}),e.navigation={nextEl:null,prevEl:null};const r=a=>(Array.isArray(a)?a:[a]).filter(t=>!!t);function f(a){let t;return a&&typeof a=="string"&&e.isElement&&(t=e.el.querySelector(a),t)?t:(a&&(typeof a=="string"&&(t=[...document.querySelectorAll(a)]),e.params.uniqueNavElements&&typeof a=="string"&&t.length>1&&e.el.querySelectorAll(a).length===1&&(t=e.el.querySelector(a))),a&&!t?a:t)}function m(a,t){const n=e.params.navigation;a=r(a),a.forEach(i=>{i&&(i.classList[t?"add":"remove"](...n.disabledClass.split(" ")),i.tagName==="BUTTON"&&(i.disabled=t),e.params.watchOverflow&&e.enabled&&i.classList[e.isLocked?"add":"remove"](n.lockClass))})}function y(){const{nextEl:a,prevEl:t}=e.navigation;if(e.params.loop){m(t,!1),m(a,!1);return}m(t,e.isBeginning&&!e.params.rewind),m(a,e.isEnd&&!e.params.rewind)}function b(a){a.preventDefault(),!(e.isBeginning&&!e.params.loop&&!e.params.rewind)&&(e.slidePrev(),o("navigationPrev"))}function d(a){a.preventDefault(),!(e.isEnd&&!e.params.loop&&!e.params.rewind)&&(e.slideNext(),o("navigationNext"))}function g(){const a=e.params.navigation;if(e.params.navigation=K(e,e.originalParams.navigation,e.params.navigation,{nextEl:"swiper-button-next",prevEl:"swiper-button-prev"}),!(a.nextEl||a.prevEl))return;let t=f(a.nextEl),n=f(a.prevEl);Object.assign(e.navigation,{nextEl:t,prevEl:n}),t=r(t),n=r(n);const i=(l,h)=>{l&&l.addEventListener("click",h==="next"?d:b),!e.enabled&&l&&l.classList.add(...a.lockClass.split(" "))};t.forEach(l=>i(l,"next")),n.forEach(l=>i(l,"prev"))}function w(){let{nextEl:a,prevEl:t}=e.navigation;a=r(a),t=r(t);const n=(i,l)=>{i.removeEventListener("click",l==="next"?d:b),i.classList.remove(...e.params.navigation.disabledClass.split(" "))};a.forEach(i=>n(i,"next")),t.forEach(i=>n(i,"prev"))}p("init",()=>{e.params.navigation.enabled===!1?v():(g(),y())}),p("toEdge fromEdge lock unlock",()=>{y()}),p("destroy",()=>{w()}),p("enable disable",()=>{let{nextEl:a,prevEl:t}=e.navigation;if(a=r(a),t=r(t),e.enabled){y();return}[...a,...t].filter(n=>!!n).forEach(n=>n.classList.add(e.params.navigation.lockClass))}),p("click",(a,t)=>{let{nextEl:n,prevEl:i}=e.navigation;n=r(n),i=r(i);const l=t.target;if(e.params.navigation.hideOnClick&&!i.includes(l)&&!n.includes(l)){if(e.pagination&&e.params.pagination&&e.params.pagination.clickable&&(e.pagination.el===l||e.pagination.el.contains(l)))return;let h;n.length?h=n[0].classList.contains(e.params.navigation.hiddenClass):i.length&&(h=i[0].classList.contains(e.params.navigation.hiddenClass)),o(h===!0?"navigationShow":"navigationHide"),[...n,...i].filter(k=>!!k).forEach(k=>k.classList.toggle(e.params.navigation.hiddenClass))}});const L=()=>{e.el.classList.remove(...e.params.navigation.navigationDisabledClass.split(" ")),g(),y()},v=()=>{e.el.classList.add(...e.params.navigation.navigationDisabledClass.split(" ")),w()};Object.assign(e.navigation,{enable:L,disable:v,update:y,init:g,destroy:w})}function Z(S){let{swiper:e,extendParams:N,on:p,emit:o,params:r}=S;e.autoplay={running:!1,paused:!1,timeLeft:0},N({autoplay:{enabled:!1,delay:3e3,waitForTransition:!0,disableOnInteraction:!1,stopOnLastSlide:!1,reverseDirection:!1,pauseOnMouseEnter:!1}});let f,m,y=r&&r.autoplay?r.autoplay.delay:3e3,b=r&&r.autoplay?r.autoplay.delay:3e3,d,g=new Date().getTime(),w,L,v,a,t,n,i;function l(s){!e||e.destroyed||!e.wrapperEl||s.target===e.wrapperEl&&(e.wrapperEl.removeEventListener("transitionend",l),!i&&x())}const h=()=>{if(e.destroyed||!e.autoplay.running)return;e.autoplay.paused?w=!0:w&&(b=d,w=!1);const s=e.autoplay.paused?d:g+b-new Date().getTime();e.autoplay.timeLeft=s,o("autoplayTimeLeft",s,s/y),m=requestAnimationFrame(()=>{h()})},k=()=>{let s;return e.virtual&&e.params.virtual.enabled?s=e.slides.filter(c=>c.classList.contains("swiper-slide-active"))[0]:s=e.slides[e.activeIndex],s?parseInt(s.getAttribute("data-swiper-autoplay"),10):void 0},C=s=>{if(e.destroyed||!e.autoplay.running)return;cancelAnimationFrame(m),h();let E=typeof s>"u"?e.params.autoplay.delay:s;y=e.params.autoplay.delay,b=e.params.autoplay.delay;const c=k();!Number.isNaN(c)&&c>0&&typeof s>"u"&&(E=c,y=c,b=c),d=E;const j=e.params.speed,A=()=>{!e||e.destroyed||(e.params.autoplay.reverseDirection?!e.isBeginning||e.params.loop||e.params.rewind?(e.slidePrev(j,!0,!0),o("autoplay")):e.params.autoplay.stopOnLastSlide||(e.slideTo(e.slides.length-1,j,!0,!0),o("autoplay")):!e.isEnd||e.params.loop||e.params.rewind?(e.slideNext(j,!0,!0),o("autoplay")):e.params.autoplay.stopOnLastSlide||(e.slideTo(0,j,!0,!0),o("autoplay")),e.params.cssMode&&(g=new Date().getTime(),requestAnimationFrame(()=>{C()})))};return E>0?(clearTimeout(f),f=setTimeout(()=>{A()},E)):requestAnimationFrame(()=>{A()}),E},B=()=>{g=new Date().getTime(),e.autoplay.running=!0,C(),o("autoplayStart")},D=()=>{e.autoplay.running=!1,clearTimeout(f),cancelAnimationFrame(m),o("autoplayStop")},T=(s,E)=>{if(e.destroyed||!e.autoplay.running)return;clearTimeout(f),s||(n=!0);const c=()=>{o("autoplayPause"),e.params.autoplay.waitForTransition?e.wrapperEl.addEventListener("transitionend",l):x()};if(e.autoplay.paused=!0,E){t&&(d=e.params.autoplay.delay),t=!1,c();return}d=(d||e.params.autoplay.delay)-(new Date().getTime()-g),!(e.isEnd&&d<0&&!e.params.loop)&&(d<0&&(d=0),c())},x=()=>{e.isEnd&&d<0&&!e.params.loop||e.destroyed||!e.autoplay.running||(g=new Date().getTime(),n?(n=!1,C(d)):C(),e.autoplay.paused=!1,o("autoplayResume"))},P=()=>{if(e.destroyed||!e.autoplay.running)return;const s=O();s.visibilityState==="hidden"&&(n=!0,T(!0)),s.visibilityState==="visible"&&x()},I=s=>{s.pointerType==="mouse"&&(n=!0,i=!0,!(e.animating||e.autoplay.paused)&&T(!0))},M=s=>{s.pointerType==="mouse"&&(i=!1,e.autoplay.paused&&x())},q=()=>{e.params.autoplay.pauseOnMouseEnter&&(e.el.addEventListener("pointerenter",I),e.el.addEventListener("pointerleave",M))},_=()=>{e.el.removeEventListener("pointerenter",I),e.el.removeEventListener("pointerleave",M)},H=()=>{O().addEventListener("visibilitychange",P)},R=()=>{O().removeEventListener("visibilitychange",P)};p("init",()=>{e.params.autoplay.enabled&&(q(),H(),B())}),p("destroy",()=>{_(),R(),e.autoplay.running&&D()}),p("_freeModeStaticRelease",()=>{(v||n)&&x()}),p("_freeModeNoMomentumRelease",()=>{e.params.autoplay.disableOnInteraction?D():T(!0,!0)}),p("beforeTransitionStart",(s,E,c)=>{e.destroyed||!e.autoplay.running||(c||!e.params.autoplay.disableOnInteraction?T(!0,!0):D())}),p("sliderFirstMove",()=>{if(!(e.destroyed||!e.autoplay.running)){if(e.params.autoplay.disableOnInteraction){D();return}L=!0,v=!1,n=!1,a=setTimeout(()=>{n=!0,v=!0,T(!0)},200)}}),p("touchEnd",()=>{if(!(e.destroyed||!e.autoplay.running||!L)){if(clearTimeout(a),clearTimeout(f),e.params.autoplay.disableOnInteraction){v=!1,L=!1;return}v&&e.params.cssMode&&x(),v=!1,L=!1}}),p("slideChange",()=>{e.destroyed||!e.autoplay.running||(t=!0)}),Object.assign(e.autoplay,{start:B,stop:D,pause:T,resume:x})}function ce(){const[S]=U(),{heroInfo:e,loadingHeroInfo:N}=W(),p=e.map(r=>r.areaUnitBackgroundPhoto),{theme:o}=z();return u.jsxs(u.Fragment,{children:[u.jsxs("div",{className:"landing relative h-[100vh] w-full",children:[u.jsx(J,{navigation:!0,autoplay:{delay:5e3,disableOnInteraction:!1},dir:"rtl",loop:!0,modules:[Y,Z],className:"mySwiper h-full",children:N?u.jsx(F,{className:"h-full w-full",children:u.jsx(V,{})}):p.map((r,f)=>{var m;return u.jsxs(F,{className:"h-full w-full ",children:[u.jsx("img",{className:"h-full w-full !object-cover",src:r,alt:"slide",style:{objectFit:"fill"}}),u.jsx("div",{className:"backgroundDescription",children:u.jsx("h1",{children:(m=e[f])==null?void 0:m.areaUnitBackgroundDescription})}),o==="dark"&&u.jsx("div",{className:"absolute top-0 left-0 w-full h-full bg-gradient-to-b from-[var(--dark-90)] to-[#80b3df00] z-[5]"}),o==="light"&&u.jsx("div",{className:"absolute top-0 left-0 w-full h-full bg-gradient-to-b from-[rgba(180,180,180,0.5)] to-[rgba(0,0,0,0)] z-[5]"})]},f)})}),u.jsx("div",{className:"main-text flex max-w-[60rem]",children:u.jsx("div",{className:"container2",children:u.jsx(X,{className:"bookNow",children:u.jsx(G,{to:"search-unit",children:S("landing.Book_Now")})})})})]}),u.jsx(Q,{className:"-translate-y-1/2"})]})}export{ce as default};
