import{c as i,Z as f,b as D,B as g}from"./index-9lkFN0r1.js";import{u}from"./useQuery-TR_kGZ4x.js";function T(e){const{unitId:t}=i(),{data:a,isLoading:n}=u({queryKey:["unitDetails",t],queryFn:async()=>(await f(e??(t||""))).data.value,enabled:!!t||!!e,refetchOnMount:!1,refetchOnWindowFocus:!1});return{unitDetails:a,loadingUnitDetails:n}}function p(e,t,a){const{unitId:n}=i(),o=a??n,r=(e||new Date).toLocaleDateString("en-us").replace(/\//g,"-"),s=t||new Date;t||s.setDate(s.getDate()+1);const c=s.toLocaleDateString("en-us").replace(/\//g,"-"),{data:l,isLoading:d}=u({queryKey:["contractTotal",o,r,c],queryFn:async()=>(await D.get(`${g}/GetTotal?fromDate=${r}&endDate=${c}&araeUnitCode=${o}`)).data,enabled:!!(e&&t),refetchOnMount:!1,refetchOnWindowFocus:!1});return{contractTotal:l,loadingContractTotal:d}}export{p as a,T as u};
