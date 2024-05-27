import{p as k,h as b,B as C,_ as h,o as i,b as m,a as e,w as t,C as D,z as r,t as u,c as H,e as P,D as S,F as g,A as I,r as B,n as F}from"./index-a6b02b9c.js";import{V as _,a as x,b as y,c as w,d as L}from"./VCard-8e13a6d7.js";import{g as N}from"./index-06236bbb.js";import{V as T}from"./forwardRefs-405f1918.js";import{a as v}from"./VBtn-23290ffc.js";import{m as j,u as z}from"./scopeId-569c381a.js";import{V as E}from"./VDialog-45b2f996.js";import{V}from"./VContainer-3489b2c6.js";const W="/assets/National_Taiwan_Normal_University_logo.svg-c8ea965b.png",M="/assets/foonyewlogo-fec8ab2e.png",O="/assets/ocsaLogo-5cd49fe9.png",A="/assets/GraduationPromParty-41ac0172.png",G="/assets/msa-bfdca77e.png",U=k({disabled:Boolean,modelValue:{type:Boolean,default:null},...j()},"VHover"),Y=b()({name:"VHover",props:U(),emits:{"update:modelValue":s=>!0},setup(s,o){let{slots:a}=o;const c=C(s,"modelValue"),{runOpenDelay:l,runCloseDelay:p}=z(s,n=>!s.disabled&&(c.value=n));return()=>{var n;return(n=a.default)==null?void 0:n.call(a,{isHovering:c.value,props:{onMouseenter:l,onMouseleave:p}})}}}),J={props:{experience:Object},data(){return{isShowDetails:!1}}},R=["href"];function q(s,o,a,c,l,p){return i(),m(g,null,[e(Y,null,{default:t(({isHovering:n,props:d})=>[e(_,D(d,{class:"rounded-xl","min-width":"19rem",width:"19rem",height:"35rem"}),{default:t(()=>[e(N,{src:a.experience.img,"aspect-ratio":"1",height:"20rem",class:"ma-15 elevation"},null,8,["src"]),e(x,{class:"text-center text-wrap"},{default:t(()=>[r(u(a.experience.org),1)]),_:1}),e(y,{class:"text-center text-wrap"},{default:t(()=>[r(u(a.experience.title),1)]),_:1}),e(T,{"model-value":n,contained:"",persistent:"",scrim:"green-lighten-3",class:"align-center justify-center"},{default:t(()=>[e(v,{color:"success",rounded:"xl",onClick:o[0]||(o[0]=f=>l.isShowDetails=!0)},{default:t(()=>[r("See more info")]),_:1})]),_:2},1032,["model-value"])]),_:2},1040)]),_:1}),e(E,{modelValue:l.isShowDetails,"onUpdate:modelValue":o[2]||(o[2]=n=>l.isShowDetails=n),transition:"dialog-top-transition",persistent:""},{default:t(()=>[e(_,{class:"ma-auto rounded-xl",width:"50vw"},{default:t(()=>[e(x,{class:"text-wrap"},{default:t(()=>[r(u(a.experience.content),1)]),_:1}),a.experience.link?(i(),H(w,{key:0},{default:t(()=>[P("a",{href:a.experience.link,target:"_blank",class:"text-green-darken-4",style:{"text-decoration":"none"}},u(a.experience.link),9,R)]),_:1})):S("",!0),e(L,{class:"justify-center"},{default:t(()=>[e(v,{size:"large",variant:"outlined",rounded:"xl",color:"green",onClick:o[1]||(o[1]=n=>l.isShowDetails=!1)},{default:t(()=>[r("close")]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue"])],64)}const K=h(J,[["render",q]]),Q={components:{Homecard:K},data(){return{experiences:[{img:W,org:"國立臺灣師範大學教育政策與行政研究所",title:"全端工程師",content:"使用現代前後端框架Laravel及Vue,建制及維護教育支持系統。 專任助理(資訊類約用人員)網頁程式開發及研究、功能開發、資料庫維護、定期開發進度報告"},{img:M,org:"Foon Yew High School",title:"Information Resources Department staff",content:"資訊助理,技術支援：負責協助教職員解決軟體、硬體、網際網路、使用或設置（系統/軟件）等相關問題。軟體相關：負責電腦還原系統設置（使用 Faronics Deep Freeze),進行 Windows 及各軟體重大補丁更新，維護電腦系統及軟體。硬體相關：負責電腦組裝、各類多媒體教學設備等的檢查及維修工作，並進行弱電整合安裝施工。    網路相關：負責解決網路（有綫/ 無綫）無法連接問題、進行 Network switch 檢查維護、進行 IP 分配及檢查(當時全校電腦要從本來的固定IP轉爲DHCP)"},{img:O,org:"國立臺灣科技大學僑生聯誼社",title:"副會長",content:"109、110屆副社長,任職期間策劃及舉辦超過10次中大型活動、創建資訊部門、建立形象網站與活動網站設計、與組員協作開發新功能。同時也是111年度應届畢業僑外籍生畢業晚會活動共同負責人"},{img:A,org:"僑外籍生畢業晚會活動",title:"負責人",content:"僑外籍生畢業晚會活動 活動策劃人。 負責公關組、資訊開發組、活動策劃。 台科大首次舉辦【僑外籍生畢業晚會】，當天活動氣氛十分熱鬧，活動圓滿結束。",link:"https://sites.google.com/view/2023-ntust-osgp/home"},{img:G,org:"國立臺灣科技大學馬來西亞同學會",title:"公關組組長、活動組員",content:"108屆歡送會公關應届畢業生資料搜集及聯係對外廠商聯係。109屆新生輔導小組公關、迎新活動游戲策劃組統整來臺資訊,持續更新注意事項負責迎活動内容策劃及場控"}]}},mounted(){const s=document.getElementById("displayedWrapper");s.addEventListener("wheel",o=>{o.deltaY>0?s.scrollLeft+=100:s.scrollLeft-=100})}};function X(s,o,a,c,l,p){const n=I("Homecard");return i(),m(g,null,[e(V,null,{default:t(()=>[e(_,{class:"rounded-xl"},{default:t(()=>[e(x,null,{default:t(()=>[r("Tan Liang Jin")]),_:1}),e(y,null,{default:t(()=>[r("Software Engineer | Full Stack Developers")]),_:1}),e(w,null,{default:t(()=>[r(" I love programming and I'm good at critical thinking. I enjoy the challenge of solving complex problems and translating abstract ideas into concrete practical applications. I am adaptable and creative, and am constantly upgrading my skills to ensure that I can make a valuable contribution to the team. ")]),_:1})]),_:1})]),_:1}),e(V,{id:"displayedWrapper",class:"d-flex hide-scrollbar",style:{"overflow-x":"auto"}},{default:t(()=>[(i(!0),m(g,null,B(l.experiences,(d,f)=>(i(),m("div",{key:d.title,class:F(["mx-3",{"ms-0":f==0,"me-0":f==l.experiences.length-1}])},[e(n,{experience:d},null,8,["experience"])],2))),128))]),_:1})],64)}const le=h(Q,[["render",X]]);export{le as default};
