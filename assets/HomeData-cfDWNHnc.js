import{b as r,B as a,a7 as i,a8 as c}from"./index-Sf6fg46U.js";import{u as e}from"./useQuery-jp5Q6j4G.js";const u=()=>r.get(`${a}/GetBackground`),d=()=>r.get(`${a}/GetPhotos`),f=()=>r.get(`${a}/GetStatistics`),g=()=>r.get(`${a}/GetService`),U=t=>r.post(`${a}/CreateSubscription`,{areaUnitSubscriptionID:0,areaUnitSubscriptionCode:crypto.randomUUID().toString(),areaUnitSubscriptionEmail:t});function p(){const{data:t,isLoading:s}=e({queryKey:["heroInfo"],queryFn:async()=>(await u()).data,refetchOnWindowFocus:!1});return{heroInfo:t??[],loadingHeroInfo:s}}function y(){const{data:t,isLoading:s}=e(["featuredUnits"],async()=>(await i()).data);return{featuredUnits:t??[],loadingFeaturedUnits:s}}function l(){const{data:t,isLoading:s}=e(["unitsOffers"],async()=>(await c()).data);return{offers:t??[],loadingOffers:s}}function w(){const{data:t,isLoading:s}=e(["whoWeArePhotos"],async()=>(await d()).data);return{photos:t??[],loadingPhotos:s}}function I(){const{data:t,isLoading:s}=e(["statistics"],async()=>(await f()).data);return{stats:t,loadingStats:s}}function b(){const{data:t,isLoading:s}=e(["services"],async()=>(await g()).data);return{services:t,loadingServices:s}}export{p as a,b,w as c,I as d,y as e,U as f,l as u};
