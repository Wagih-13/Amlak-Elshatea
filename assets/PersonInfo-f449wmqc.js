import{b as r,B as o}from"./index-Sf6fg46U.js";import{u as a}from"./useQuery-jp5Q6j4G.js";function u(n){const{data:t,isLoading:e}=a(["renterInfo",n],async()=>(await r.get(`${o}/GetUnitRenterInfo?strUnitRenterMobile=${n}`)).data);return{renterInfo:t,loadingRenterInfo:e}}function c(n){const{data:t,isLoading:e}=a(["ownerInfo",n],async()=>(await r.post(`${o}/SearchOwnerUnitByMobile?strUnitOwnerMobile=${n}`)).data);return{ownerInfo:t,loadingOwnerInfo:e}}export{u as a,c as u};