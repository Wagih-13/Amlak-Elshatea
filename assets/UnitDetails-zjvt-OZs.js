import{d as l,Z as g,c as y,B as m}from"./index-tZbO2SC8.js";import{u as d}from"./useQuery-gFZt42JW.js";function p(a){const{unitId:t}=l(),{data:e,isLoading:n}=d({queryKey:["unitDetails",t],queryFn:async()=>(await g(a??(t||""))).data.value,enabled:!!t||!!a});return{unitDetails:e,loadingUnitDetails:n}}function q(a,t,e){const{unitId:n}=l(),o=e??n,r=(a||new Date).toLocaleDateString("en-us").replace(/\//g,"-"),s=t||new Date;t||s.setDate(s.getDate()+1);const i=s.toLocaleDateString("en-us").replace(/\//g,"-"),{data:c,isLoading:D}=d({queryKey:["contractTotal",o,r,i],queryFn:async()=>{const u=await y.get(`${m}/GetTotal?fromDate=${r}&endDate=${i}&araeUnitCode=${o}`);return console.log(u.data),u.data},enabled:!!(a&&t)});return console.log(c),{contractTotal:c,loadingContractTotal:D}}export{q as a,p as u};
