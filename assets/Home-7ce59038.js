import{_ as O}from"./plugin-vueexport-helper-c27b6911.js";import{m as T,r as Y,u as j,b as W,l as F,V as q,k as A,j as U}from"./VImg-745041d6.js";import{p as I,l as B,I as G,N as K,r as R,L as J,H as _,k as Q,c as X,m as e,G as Z,q as g,z as P,w as a,y as m,F as ee,A as te,t as ae,K as se,C as v}from"./index-1b9edc47.js";import{m as oe,u as ne,g as le,V as re,a as H,b as D,c as C,d as k,e as ce}from"./VOverlay-b2279620.js";const ie="/assets/home-background-banner-2a8fd07d.jpg",p="/assets/National_Taiwan_Normal_University_logo.svg-c8ea965b.png",L="/assets/foonyewlogo-fec8ab2e.png",S="/assets/ocsaLogo-5cd49fe9.png";const ue=I({disabled:Boolean,modelValue:{type:Boolean,default:void 0},...oe()},"VHover"),me=B()({name:"VHover",props:ue(),emits:{"update:modelValue":t=>!0},setup(t,i){let{slots:o}=i;const u=G(t,"modelValue"),{runOpenDelay:n,runCloseDelay:d}=ne(t,r=>!t.disabled&&(u.value=r));return()=>{var r;return(r=o.default)==null?void 0:r.call(o,{isHovering:u.value,props:{onMouseenter:n,onMouseleave:d}})}}});function de(t){return Math.floor(Math.abs(t))*Math.sign(t)}const fe=I({scale:{type:[Number,String],default:.5},...T()},"VParallax"),pe=B()({name:"VParallax",props:fe(),setup(t,i){let{slots:o}=i;const{intersectionRef:u,isIntersecting:n}=Y(),{resizeRef:d,contentRect:r}=j(),{height:N}=K(),h=R();J(()=>{var l;u.value=d.value=(l=h.value)==null?void 0:l.$el});let s;_(n,l=>{l?(s=le(u.value),s=s===document.scrollingElement?document:s,s.addEventListener("scroll",c,{passive:!0}),c()):s.removeEventListener("scroll",c)}),Q(()=>{s==null||s.removeEventListener("scroll",c)}),_(N,c),_(()=>{var l;return(l=r.value)==null?void 0:l.height},c);const V=X(()=>1-Z(+t.scale));let y=-1;function c(){n.value&&(cancelAnimationFrame(y),y=requestAnimationFrame(()=>{var b;const l=((b=h.value)==null?void 0:b.$el).querySelector(".v-img__img");if(!l)return;const x=s instanceof Document?document.documentElement.clientHeight:s.clientHeight,w=s instanceof Document?window.scrollY:s.scrollTop,E=u.value.getBoundingClientRect().top+w,f=r.value.height,M=E+(f-x)/2,$=de((w-M)*V.value),z=Math.max(1,(V.value*(x-f)+f)/f);l.style.setProperty("transform",`translateY(${$}px) scale(${z})`)}))}return W(()=>e(F,{class:["v-parallax",{"v-parallax--active":n.value},t.class],style:t.style,ref:h,cover:!0,onLoadstart:c,onLoad:c},o)),{}}}),he={class:"bg-deep-purple-darken-3"},_e={methods:{changeScrollDirections(t){t.preventDefault();const i=t.deltaY,o=this.$refs.info.$el;o&&o.scrollBy({left:i})}}},ge=Object.assign(_e,{__name:"Home",setup(t){const i=R([{img_path:S,unit:"國立臺灣科技大學僑生聯誼社",title:"副會長",content:"109、110屆副社長,任職期間策劃及舉辦超過10次中大型活動、創建資訊部門、建立形象網站與活動網站設計、與組員協作開發新功能。同時也是111年度應届畢業僑外籍生畢業晚會活動共同負責人"},{img_path:L,unit:"Foon Yew High School",title:"Information Resources Department staff",content:"資訊助理,技術支援：負責協助教職員解決軟體、硬體、網際網路、使用或設置（系統/軟件）等相關問題。軟體相關：負責電腦還原系統設置（使用 Faronics Deep Freeze),進行 Windows 及各軟體重大補丁更新，維護電腦系統及軟體。硬體相關：負責電腦組裝、各類多媒體教學設備等的檢查及維修工作，並進行弱電整合安裝施工。    網路相關：負責解決網路（有綫/ 無綫）無法連接問題、進行 Network switch 檢查維護、進行 IP 分配及檢查(當時全校電腦要從本來的固定IP轉爲DHCP)"},{img_path:p,unit:"國立臺灣師範大學教育政策與行政研究所",title:"全端工程師",content:"使用現代前後端框架Laravel及Vue,建制及維護教育支持系統"},{img_path:p,unit:"國立臺灣師範大學教育政策與行政研究所",title:"全端工程師",content:"使用現代前後端框架Laravel及Vue,建制及維護教育支持系統"},{img_path:S,unit:"國立臺灣科技大學僑生聯誼社",title:"副會長",content:"109、110屆副社長,任職期間策劃及舉辦超過10次中大型活動、創建資訊部門、建立形象網站與活動網站設計、與組員協作開發新功能。同時也是111年度應届畢業僑外籍生畢業晚會活動共同負責人"},{img_path:L,unit:"Foon Yew High School",title:"Information Resources Department staff",content:"資訊助理,技術支援：負責協助教職員解決軟體、硬體、網際網路、使用或設置（系統/軟件）等相關問題。軟體相關：負責電腦還原系統設置（使用 Faronics Deep Freeze),進行 Windows 及各軟體重大補丁更新，維護電腦系統及軟體。硬體相關：負責電腦組裝、各類多媒體教學設備等的檢查及維修工作，並進行弱電整合安裝施工。    網路相關：負責解決網路（有綫/ 無綫）無法連接問題、進行 Network switch 檢查維護、進行 IP 分配及檢查(當時全校電腦要從本來的固定IP轉爲DHCP)"},{img_path:p,unit:"國立臺灣師範大學教育政策與行政研究所",title:"全端工程師",content:"使用現代前後端框架Laravel及Vue,建制及維護教育支持系統"},{img_path:p,unit:"國立臺灣師範大學教育政策與行政研究所",title:"全端工程師",content:"使用現代前後端框架Laravel及Vue,建制及維護教育支持系統"}]);return(o,u)=>(g(),P("div",he,[e(pe,{height:"60vh",src:ie,class:"align-center"},{default:a(()=>[e(H,{color:"rgba(0,0,0,0)",width:"80%",flat:"",class:"ma-auto"},{default:a(()=>[e(D,{class:"text-h3 ma-2"},{default:a(()=>[m("陳亮憬")]),_:1}),e(C,{class:"text-h5 ma-2",style:{"line-height":"1.3"}},{default:a(()=>[m("全端工程師")]),_:1}),e(k,{class:"text-h6 ma-2",style:{"line-height":"1.3"}},{default:a(()=>[m(" 大家好，我是一名全端開發人員，熱衷於編碼和批判性思維。我樂於解決覆雜的問題，並將抽象的想法轉化為實際的現實應用。我的適應能力和創造力促使我不斷提高自己的技能，為我所在的任何團隊貢獻價值。 ")]),_:1})]),_:1})]),_:1}),e(re,null,{default:a(()=>[e(q,{ref:"info",class:"flex-nowrap overflow-x-auto hide-scrollbar",onWheel:o.changeScrollDirections},{default:a(()=>[(g(!0),P(ee,null,te(i.value,n=>(g(),ae(A,null,{default:a(()=>[e(me,null,{default:a(({isHovering:d,props:r})=>[e(H,se({class:"mx-auto","max-width":"344",height:"35rem"},r),{default:a(()=>[e(F,{src:n.img_path,"aspect-ratio":"1",height:"15rem"},null,8,["src"]),e(D,{class:"text-h6 text-primary"},{default:a(()=>[m(v(n.unit),1)]),_:2},1024),e(C,{class:"text-h6 text-primary"},{default:a(()=>[m(v(n.title),1)]),_:2},1024),e(k,null,{default:a(()=>[m(v(n.content),1)]),_:2},1024),e(ce,{"model-value":d,contained:"",scrim:"#036358",class:"align-center justify-center"},{default:a(()=>[e(U,{variant:"flat"},{default:a(()=>[m("See more info")]),_:1})]),_:2},1032,["model-value"])]),_:2},1040)]),_:2},1024)]),_:2},1024))),256))]),_:1},8,["onWheel"])]),_:1})]))}}),we=O(ge,[["__scopeId","data-v-233d1bc6"]]);export{we as default};
