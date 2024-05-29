import{u as U,r as q,j as c}from"./index-tZbO2SC8.js";import{h as M,i as R,f as A,S as L,c as k}from"./swiper-iER4IGql.js";import{b as D,c as W}from"./HomeData-sOZliBI1.js";import"./useQuery-gFZt42JW.js";function V(d){const{effect:e,swiper:s,on:n,setTranslate:p,setTransition:l,overwriteParams:o,perspective:a,recreateShadows:t,getEffectParams:r}=d;n("beforeInit",()=>{if(s.params.effect!==e)return;s.classNames.push(`${s.params.containerModifierClass}${e}`),a&&a()&&s.classNames.push(`${s.params.containerModifierClass}3d`);const u=o?o():{};Object.assign(s.params,u),Object.assign(s.originalParams,u)}),n("setTranslate",()=>{s.params.effect===e&&p()}),n("setTransition",(u,w)=>{s.params.effect===e&&l(w)}),n("transitionEnd",()=>{if(s.params.effect===e&&t){if(!r||!r().slideShadows)return;s.slides.forEach(u=>{u.querySelectorAll(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").forEach(w=>w.remove())}),t()}});let m;n("virtualUpdate",()=>{s.params.effect===e&&(s.slides.length||(m=!0),requestAnimationFrame(()=>{m&&s.slides&&s.slides.length&&(p(),m=!1)}))})}function X(d,e){const s=M(e);return s!==e&&(s.style.backfaceVisibility="hidden",s.style["-webkit-backface-visibility"]="hidden"),s}function _(d){let{swiper:e,duration:s,transformElements:n,allSlides:p}=d;const{activeIndex:l}=e,o=a=>a.parentElement?a.parentElement:e.slides.filter(r=>r.shadowRoot&&r.shadowRoot===a.parentNode)[0];if(e.params.virtualTranslate&&s!==0){let a=!1,t;p?t=n:t=n.filter(r=>{const m=r.classList.contains("swiper-slide-transform")?o(r):r;return e.getSlideIndex(m)===l}),t.forEach(r=>{R(r,()=>{if(a||!e||e.destroyed)return;a=!0,e.animating=!1;const m=new window.CustomEvent("transitionend",{bubbles:!0,cancelable:!0});e.wrapperEl.dispatchEvent(m)})})}}function z(d,e,s){const n=`swiper-slide-shadow${s?`-${s}`:""}${d?` swiper-slide-shadow-${d}`:""}`,p=M(e);let l=p.querySelector(`.${n.split(" ").join(".")}`);return l||(l=A("div",n.split(" ")),p.append(l)),l}function F(d){let{swiper:e,extendParams:s,on:n}=d;s({cardsEffect:{slideShadows:!0,rotate:!0,perSlideRotate:2,perSlideOffset:8}}),V({effect:"cards",swiper:e,on:n,setTranslate:()=>{const{slides:o,activeIndex:a,rtlTranslate:t}=e,r=e.params.cardsEffect,{startTranslate:m,isTouched:u}=e.touchEventsData,w=t?-e.translate:e.translate;for(let b=0;b<o.length;b+=1){const x=o[b],y=x.progress,i=Math.min(Math.max(y,-4),4);let E=x.swiperSlideOffset;e.params.centeredSlides&&!e.params.cssMode&&(e.wrapperEl.style.transform=`translateX(${e.minTranslate()}px)`),e.params.centeredSlides&&e.params.cssMode&&(E-=o[0].swiperSlideOffset);let h=e.params.cssMode?-E-e.translate:-E,S=0;const j=-100*Math.abs(i);let $=1,v=-r.perSlideRotate*i,T=r.perSlideOffset-Math.abs(i)*.75;const g=e.virtual&&e.params.virtual.enabled?e.virtual.from+b:b,P=(g===a||g===a-1)&&i>0&&i<1&&(u||e.params.cssMode)&&w<m,N=(g===a||g===a+1)&&i<0&&i>-1&&(u||e.params.cssMode)&&w>m;if(P||N){const f=(1-Math.abs((Math.abs(i)-.5)/.5))**.5;v+=-28*i*f,$+=-.5*f,T+=96*f,S=`${-25*f*Math.abs(i)}%`}if(i<0?h=`calc(${h}px ${t?"-":"+"} (${T*Math.abs(i)}%))`:i>0?h=`calc(${h}px ${t?"-":"+"} (-${T*Math.abs(i)}%))`:h=`${h}px`,!e.isHorizontal()){const f=S;S=h,h=f}const O=i<0?`${1+(1-$)*i}`:`${1-(1-$)*i}`,C=`
        translate3d(${h}, ${S}, ${j}px)
        rotateZ(${r.rotate?t?-v:v:0}deg)
        scale(${O})
      `;if(r.slideShadows){let f=x.querySelector(".swiper-slide-shadow");f||(f=z("cards",x)),f&&(f.style.opacity=Math.min(Math.max((Math.abs(i)-.5)/.5,0),1))}x.style.zIndex=-Math.abs(Math.round(y))+o.length;const I=X(r,x);I.style.transform=C}},setTransition:o=>{const a=e.slides.map(t=>M(t));a.forEach(t=>{t.style.transitionDuration=`${o}ms`,t.querySelectorAll(".swiper-slide-shadow").forEach(r=>{r.style.transitionDuration=`${o}ms`})}),_({swiper:e,duration:o,transformElements:a})},perspective:()=>!0,overwriteParams:()=>({watchSlidesProgress:!0,virtualTranslate:!e.params.cssMode})})}const G=()=>{const{t:d,i18n:e}=U(),[s,n]=q.useState(!1),{photos:p}=D(),{services:l}=W(),o=l==null?void 0:l.aboutUs,a=e.language==="ar"?"قراءة المزيد":"read more";return c.jsx(c.Fragment,{children:c.jsx("article",{className:"who-we-are-container flex items-center",children:c.jsxs("div",{className:"who-we-are",children:[c.jsxs("section",{className:"who-we-are-text",children:[c.jsx("h1",{children:d("who_are_we.title")}),c.jsxs("p",{className:"relative",children:[c.jsx("span",{className:`${s?"":"line-clamp-3"}`,children:o}),!s&&c.jsxs("span",{className:"readmore-label",onClick:()=>{n(t=>!t)},children:["...",a,"."]})]})]}),c.jsx("section",{className:"siwp-custom",children:c.jsx(L,{effect:"cards",grabCursor:!0,dir:"ltr",modules:[F],className:"mySwiper h-[350px] w-[350px]",children:p.map(t=>c.jsx(k,{className:"mysip-custom h-full border-[5px] border-[var(--main-color)]",children:c.jsx("img",{className:"h-[100%] w-full",src:t.areaUnitListOfPhotoPhoto,alt:`Photo #${t.areaUnitListOfPhotoCode}`})},t.areaUnitListOfPhotoID))})})]})})})};export{G as default};
