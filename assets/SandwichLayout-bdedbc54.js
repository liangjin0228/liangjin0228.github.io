import{p as I,i as oe,c as u,r as G,a as F,g as he,s as B,o as ne,b as pe,d as A,f as Ke,e as qe,h as Ye,j as Ze,k as be,l as R,m as o,n as Xe,q as k,t as z,w as b,u as se,v as ue,x as q,y as J,z as le,F as xe,A as Ve,B as Ge,C as _e,D as Se,E as Qe,G as We,H as Y,I as et,J as tt,K as ie,L as at,M as lt,N as ot,O as K,P as Z,Q as nt}from"./index-b0dc1027.js";import{m as D,a as Q,u as P,b as we,c as ke,d as Ie,e as Ce,f as Te,g as Be,h as Le,V as st,i as de,j as ut,k as ae,l as me}from"./VImg-cdcf24fd.js";import{u as Ae,a as Re,V as E,b as it,m as rt,c as fe,d as ct}from"./index-f1bda30e.js";const X=Symbol.for("vuetify:layout"),Pe=Symbol.for("vuetify:layout-item"),ge=1e3,$e=I({overlaps:{type:Array,default:()=>[]},fullHeight:Boolean},"layout"),Ne=I({name:{type:String},order:{type:[Number,String],default:0},absolute:Boolean},"layout-item");function vt(){const e=oe(X);if(!e)throw new Error("[Vuetify] Could not find injected layout");return{getLayoutItem:e.getLayoutItem,mainRect:e.mainRect,mainStyles:e.mainStyles}}function ze(e){const s=oe(X);if(!s)throw new Error("[Vuetify] Could not find injected layout");const t=e.id??`layout-item-${qe()}`,n=he("useLayoutItem");pe(Pe,{id:t});const a=B(!1);Ye(()=>a.value=!0),Ze(()=>a.value=!1);const{layoutItemStyles:l,layoutItemScrimStyles:i}=s.register(n,{...e,active:u(()=>a.value?!1:e.active.value),id:t});return be(()=>s.unregister(t)),{layoutItemStyles:l,layoutRect:s.layoutRect,layoutItemScrimStyles:i}}const dt=(e,s,t,n)=>{let a={top:0,left:0,right:0,bottom:0};const l=[{id:"",layer:{...a}}];for(const i of e){const c=s.get(i),r=t.get(i),h=n.get(i);if(!c||!r||!h)continue;const v={...a,[c.value]:parseInt(a[c.value],10)+(h.value?parseInt(r.value,10):0)};l.push({id:i,layer:v}),a=v}return l};function Me(e){const s=oe(X,null),t=u(()=>s?s.rootZIndex.value-100:ge),n=G([]),a=F(new Map),l=F(new Map),i=F(new Map),c=F(new Map),r=F(new Map),{resizeRef:h,contentRect:v}=Ae(),_=u(()=>{const g=new Map,S=e.overlaps??[];for(const d of S.filter(x=>x.includes(":"))){const[x,p]=d.split(":");if(!n.value.includes(x)||!n.value.includes(p))continue;const L=a.get(x),H=a.get(p),j=l.get(x),O=l.get(p);!L||!H||!j||!O||(g.set(p,{position:L.value,amount:parseInt(j.value,10)}),g.set(x,{position:H.value,amount:-parseInt(O.value,10)}))}return g}),y=u(()=>{const g=[...new Set([...i.values()].map(d=>d.value))].sort((d,x)=>d-x),S=[];for(const d of g){const x=n.value.filter(p=>{var L;return((L=i.get(p))==null?void 0:L.value)===d});S.push(...x)}return dt(S,a,l,c)}),m=u(()=>!Array.from(r.values()).some(g=>g.value)),V=u(()=>y.value[y.value.length-1].layer),$=u(()=>({"--v-layout-left":A(V.value.left),"--v-layout-right":A(V.value.right),"--v-layout-top":A(V.value.top),"--v-layout-bottom":A(V.value.bottom),...m.value?void 0:{transition:"none"}})),C=u(()=>y.value.slice(1).map((g,S)=>{let{id:d}=g;const{layer:x}=y.value[S],p=l.get(d),L=a.get(d);return{id:d,...x,size:Number(p.value),position:L.value}})),f=g=>C.value.find(S=>S.id===g),w=he("createLayout"),N=B(!1);ne(()=>{N.value=!0}),pe(X,{register:(g,S)=>{let{id:d,order:x,position:p,layoutSize:L,elementSize:H,active:j,disableTransitions:O,absolute:je}=S;i.set(d,x),a.set(d,p),l.set(d,L),c.set(d,j),O&&r.set(d,O);const re=Ke(Pe,w==null?void 0:w.vnode).indexOf(g);re>-1?n.value.splice(re,0,d):n.value.push(d);const ce=u(()=>C.value.findIndex(U=>U.id===d)),W=u(()=>t.value+y.value.length*2-ce.value*2),Oe=u(()=>{const U=p.value==="left"||p.value==="right",ee=p.value==="right",Je=p.value==="bottom",ve={[p.value]:0,zIndex:W.value,transform:`translate${U?"X":"Y"}(${(j.value?0:-110)*(ee||Je?-1:1)}%)`,position:je.value||t.value!==ge?"absolute":"fixed",...m.value?void 0:{transition:"none"}};if(!N.value)return ve;const T=C.value[ce.value];if(!T)throw new Error(`[Vuetify] Could not find layout item "${d}"`);const te=_.value.get(d);return te&&(T[te.position]+=te.amount),{...ve,height:U?`calc(100% - ${T.top}px - ${T.bottom}px)`:H.value?`${H.value}px`:void 0,left:ee?void 0:`${T.left}px`,right:ee?`${T.right}px`:void 0,top:p.value!=="bottom"?`${T.top}px`:void 0,bottom:p.value!=="top"?`${T.bottom}px`:void 0,width:U?H.value?`${H.value}px`:void 0:`calc(100% - ${T.left}px - ${T.right}px)`}}),Ue=u(()=>({zIndex:W.value-1}));return{layoutItemStyles:Oe,layoutItemScrimStyles:Ue,zIndex:W}},unregister:g=>{i.delete(g),a.delete(g),l.delete(g),c.delete(g),r.delete(g),n.value=n.value.filter(S=>S!==g)},mainRect:V,mainStyles:$,getLayoutItem:f,items:C,layoutRect:v,rootZIndex:t});const M=u(()=>["v-layout",{"v-layout--full-height":e.fullHeight}]),De=u(()=>({zIndex:t.value,position:s?"relative":void 0,overflow:s?"hidden":void 0}));return{layoutClasses:M,layoutStyles:De,getLayoutItem:f,items:C,layoutRect:v,layoutRef:h}}const mt=I({scrollable:Boolean,...D(),...Q({tag:"main"})},"VMain"),ft=R()({name:"VMain",props:mt(),setup(e,s){let{slots:t}=s;const{mainStyles:n}=vt(),{ssrBootStyles:a}=Re();return P(()=>o(e.tag,{class:["v-main",{"v-main--scrollable":e.scrollable},e.class],style:[n.value,a.value,e.style]},{default:()=>{var l,i;return[e.scrollable?o("div",{class:"v-main__scroller"},[(l=t.default)==null?void 0:l.call(t)]):(i=t.default)==null?void 0:i.call(t)]}})),{}}}),gt={__name:"View",setup(e){return(s,t)=>{const n=Xe("router-view");return k(),z(ft,{class:"bg-grey-lighten-3"},{default:b(()=>[o(n)]),_:1})}}};const yt=I({app:Boolean,color:String,height:{type:[Number,String],default:"auto"},...we(),...D(),...ke(),...Ne(),...Ie(),...Q({tag:"footer"}),...se()},"VFooter"),ht=R()({name:"VFooter",props:yt(),setup(e,s){let{slots:t}=s;const{themeClasses:n}=ue(e),{backgroundColorClasses:a,backgroundColorStyles:l}=Ce(q(e,"color")),{borderClasses:i}=Te(e),{elevationClasses:c}=Be(e),{roundedClasses:r}=Le(e),h=B(32),{resizeRef:v}=Ae(m=>{m.length&&(h.value=m[0].target.clientHeight)}),_=u(()=>e.height==="auto"?h.value:parseInt(e.height,10)),{layoutItemStyles:y}=ze({id:e.name,order:u(()=>parseInt(e.order,10)),position:u(()=>"bottom"),layoutSize:_,elementSize:u(()=>e.height==="auto"?void 0:_.value),active:u(()=>e.app),absolute:q(e,"absolute")});return P(()=>o(e.tag,{ref:v,class:["v-footer",n.value,a.value,i.value,c.value,r.value,e.class],style:[l.value,e.app?y.value:{height:A(e.height)},e.style]},t)),{}}}),pt={__name:"Footer",setup(e){const s=F([{icon:"mdi-facebook",link:"https://www.facebook.com/liangjin0228/"},{icon:"mdi-twitter",link:"https://twitter.com/TanLiangJin0228"},{icon:"mdi-linkedin",link:"https://www.linkedin.com/in/liangjin0228/"},{icon:"mdi-instagram",link:"https://www.instagram.com/liangjin_tan"}]);return(t,n)=>(k(),z(ht,{rounded:"",class:"bg-grey-lighten-1"},{default:b(()=>[o(st,{justify:"center","no-gutters":""},{default:b(()=>[o(E,{color:"white",variant:"text",class:"mx-2",rounded:"xl",to:"/"},{default:b(()=>[J("Home")]),_:1}),o(E,{color:"white",variant:"text",class:"mx-2",rounded:"xl",to:"/resume"},{default:b(()=>[J("Resume")]),_:1}),o(E,{color:"white",variant:"text",class:"mx-2",rounded:"xl",to:"/about"},{default:b(()=>[J("About Me")]),_:1}),o(E,{color:"white",variant:"text",class:"mx-2",rounded:"xl",to:"/contact"},{default:b(()=>[J("Contact Me")]),_:1}),o(de,{class:"text-center mt-4",cols:"12"},{default:b(()=>[(k(!0),le(xe,null,Ve(s,a=>(k(),z(E,{key:a,class:"mx-4",icon:a.icon,href:a.link,variant:"text"},null,8,["icon","href"]))),128))]),_:1}),o(de,{class:"text-center mt-4",cols:"12"},{default:b(()=>[Ge("strong",null,"All contents of this site, unless otherwise noted, are ©2000-"+_e(new Date().getFullYear())+" Tan Liang Jin. All Rights Reserved.",1)]),_:1})]),_:1})]),_:1}))}};const He=I({text:String,...D(),...Q()},"VToolbarTitle"),Ee=R()({name:"VToolbarTitle",props:He(),setup(e,s){let{slots:t}=s;return P(()=>{const n=!!(t.default||t.text||e.text);return o(e.tag,{class:["v-toolbar-title",e.class],style:e.style},{default:()=>{var a;return[n&&o("div",{class:"v-toolbar-title__placeholder"},[t.text?t.text():e.text,(a=t.default)==null?void 0:a.call(t)])]}})}),{}}}),bt=[null,"prominent","default","comfortable","compact"],Fe=I({absolute:Boolean,collapse:Boolean,color:String,density:{type:String,default:"default",validator:e=>bt.includes(e)},extended:Boolean,extensionHeight:{type:[Number,String],default:48},flat:Boolean,floating:Boolean,height:{type:[Number,String],default:64},image:String,title:String,...we(),...D(),...ke(),...Ie(),...Q({tag:"header"}),...se()},"VToolbar"),ye=R()({name:"VToolbar",props:Fe(),setup(e,s){var m;let{slots:t}=s;const{backgroundColorClasses:n,backgroundColorStyles:a}=Ce(q(e,"color")),{borderClasses:l}=Te(e),{elevationClasses:i}=Be(e),{roundedClasses:c}=Le(e),{themeClasses:r}=ue(e),{rtlClasses:h}=Se(),v=B(!!(e.extended||(m=t.extension)!=null&&m.call(t))),_=u(()=>parseInt(Number(e.height)+(e.density==="prominent"?Number(e.height):0)-(e.density==="comfortable"?8:0)-(e.density==="compact"?16:0),10)),y=u(()=>v.value?parseInt(Number(e.extensionHeight)+(e.density==="prominent"?Number(e.extensionHeight):0)-(e.density==="comfortable"?4:0)-(e.density==="compact"?8:0),10):0);return Qe({VBtn:{variant:"text"}}),P(()=>{var f;const V=!!(e.title||t.title),$=!!(t.image||e.image),C=(f=t.extension)==null?void 0:f.call(t);return v.value=!!(e.extended||C),o(e.tag,{class:["v-toolbar",{"v-toolbar--absolute":e.absolute,"v-toolbar--collapse":e.collapse,"v-toolbar--flat":e.flat,"v-toolbar--floating":e.floating,[`v-toolbar--density-${e.density}`]:!0},n.value,l.value,i.value,c.value,r.value,h.value,e.class],style:[a.value,e.style]},{default:()=>[$&&o("div",{key:"image",class:"v-toolbar__image"},[t.image?o(ae,{key:"image-defaults",disabled:!e.image,defaults:{VImg:{cover:!0,src:e.image}}},t.image):o(ut,{key:"image-img",cover:!0,src:e.image},null)]),o(ae,{defaults:{VTabs:{height:A(_.value)}}},{default:()=>{var w,N,M;return[o("div",{class:"v-toolbar__content",style:{height:A(_.value)}},[t.prepend&&o("div",{class:"v-toolbar__prepend"},[(w=t.prepend)==null?void 0:w.call(t)]),V&&o(Ee,{key:"title",text:e.title},{text:t.title}),(N=t.default)==null?void 0:N.call(t),t.append&&o("div",{class:"v-toolbar__append"},[(M=t.append)==null?void 0:M.call(t)])])]}}),o(ae,{defaults:{VTabs:{height:A(y.value)}}},{default:()=>[o(it,null,{default:()=>[v.value&&o("div",{class:"v-toolbar__extension",style:{height:A(y.value)}},[C])]})]})]})}),{contentHeight:_,extensionHeight:y}}}),xt=I({scrollTarget:{type:String},scrollThreshold:{type:[String,Number],default:300}},"scroll");function Vt(e){let s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{canScroll:t}=s;let n=0;const a=G(null),l=B(0),i=B(0),c=B(0),r=B(!1),h=B(!1),v=u(()=>Number(e.scrollThreshold)),_=u(()=>We((v.value-l.value)/v.value||0)),y=()=>{const m=a.value;!m||t&&!t.value||(n=l.value,l.value="window"in m?m.pageYOffset:m.scrollTop,h.value=l.value<n,c.value=Math.abs(l.value-v.value))};return Y(h,()=>{i.value=i.value||l.value}),Y(r,()=>{i.value=0}),ne(()=>{Y(()=>e.scrollTarget,m=>{var $;const V=m?document.querySelector(m):window;V&&V!==a.value&&(($=a.value)==null||$.removeEventListener("scroll",y),a.value=V,a.value.addEventListener("scroll",y,{passive:!0}))},{immediate:!0})}),be(()=>{var m;(m=a.value)==null||m.removeEventListener("scroll",y)}),t&&Y(t,y,{immediate:!0}),{scrollThreshold:v,currentScroll:l,currentThreshold:c,isScrollActive:r,scrollRatio:_,isScrollingUp:h,savedScroll:i}}const _t=I({scrollBehavior:String,modelValue:{type:Boolean,default:!0},location:{type:String,default:"top",validator:e=>["top","bottom"].includes(e)},...Fe(),...Ne(),...xt(),height:{type:[Number,String],default:64}},"VAppBar"),St=R()({name:"VAppBar",props:_t(),emits:{"update:modelValue":e=>!0},setup(e,s){let{slots:t}=s;const n=G(),a=et(e,"modelValue"),l=u(()=>{var w;const f=new Set(((w=e.scrollBehavior)==null?void 0:w.split(" "))??[]);return{hide:f.has("hide"),inverted:f.has("inverted"),collapse:f.has("collapse"),elevate:f.has("elevate"),fadeImage:f.has("fade-image")}}),i=u(()=>{const f=l.value;return f.hide||f.inverted||f.collapse||f.elevate||f.fadeImage||!a.value}),{currentScroll:c,scrollThreshold:r,isScrollingUp:h,scrollRatio:v}=Vt(e,{canScroll:i}),_=u(()=>e.collapse||l.value.collapse&&(l.value.inverted?v.value>0:v.value===0)),y=u(()=>e.flat||l.value.elevate&&(l.value.inverted?c.value>0:c.value===0)),m=u(()=>l.value.fadeImage?l.value.inverted?1-v.value:v.value:void 0),V=u(()=>{var N,M;if(l.value.hide&&l.value.inverted)return 0;const f=((N=n.value)==null?void 0:N.contentHeight)??0,w=((M=n.value)==null?void 0:M.extensionHeight)??0;return f+w});tt(u(()=>!!e.scrollBehavior),()=>{at(()=>{l.value.hide?l.value.inverted?a.value=c.value>r.value:a.value=h.value||c.value<r.value:a.value=!0})});const{ssrBootStyles:$}=Re(),{layoutItemStyles:C}=ze({id:e.name,order:u(()=>parseInt(e.order,10)),position:q(e,"location"),layoutSize:V,elementSize:B(void 0),active:a,absolute:q(e,"absolute")});return P(()=>{const[f]=ye.filterProps(e);return o(ye,ie({ref:n,class:["v-app-bar",{"v-app-bar--bottom":e.location==="bottom"},e.class],style:[{...C.value,"--v-toolbar-image-opacity":m.value,height:void 0,...$.value},e.style]},f,{collapse:_.value,flat:y.value}),t)}),{}}}),wt=I({...rt({icon:"$menu",variant:"text"})},"VAppBarNavIcon"),kt=R()({name:"VAppBarNavIcon",props:wt(),setup(e,s){let{slots:t}=s;return P(()=>o(E,ie(e,{class:["v-app-bar-nav-icon"]}),t)),{}}}),It=R()({name:"VAppBarTitle",props:He(),setup(e,s){let{slots:t}=s;return P(()=>o(Ee,ie(e,{class:"v-app-bar-title"}),t)),{}}}),Ct={key:0},Tt={__name:"Header",setup(e){const s=lt(),t=u(()=>s.path.replace("/","")),n=G(""),{mobile:a}=ot();ne(()=>{n.value=t.value});const l=[{value:"index",text:"Home",icon:"mdi-home",textClass:"text-green",to:"/index"},{value:"resume",text:"Resume",icon:"mdi-file-account",textClass:"text-brown-darken-1",to:"/resume"},{value:"about",text:"About Me",icon:"mdi-information",textClass:"text-blue",to:"/about"},{value:"contact",text:"Contact Me",icon:"mdi-phone-incoming",textClass:"text-yellow-darken-4",to:"/contact"}];return(i,c)=>(k(),z(St,{app:"",elevation:5},{default:b(()=>[K(a)?Z("",!0):(k(),z(kt,{key:0},{default:b(()=>[o(me,{icon:"mdi-human-greeting",color:"green-darken-4"})]),_:1})),K(a)?Z("",!0):(k(),z(It,{key:1,class:"text-deep-purple-lighten-2"},{default:b(()=>[J(" Hi, I'am LiangJin! A Full-Stack Developer. ")]),_:1})),K(a)?(k(),z(fe,{key:2})):Z("",!0),o(ct,{modelValue:n.value,"onUpdate:modelValue":c[0]||(c[0]=r=>n.value=r)},{default:b(()=>[(k(),le(xe,null,Ve(l,r=>o(E,{key:r.value,rounded:"xl",size:"large",class:nt(r.textClass),value:r.value,to:r.to},{default:b(()=>[o(me,{icon:r.icon},null,8,["icon"]),K(a)?Z("",!0):(k(),le("span",Ct,_e(r.text),1))]),_:2},1032,["class","value","to"])),64))]),_:1},8,["modelValue"]),o(fe)]),_:1}))}};const Bt=I({...D(),...$e({fullHeight:!0}),...se()},"VApp"),Lt=R()({name:"VApp",props:Bt(),setup(e,s){let{slots:t}=s;const n=ue(e),{layoutClasses:a,layoutStyles:l,getLayoutItem:i,items:c,layoutRef:r}=Me(e),{rtlClasses:h}=Se();return P(()=>{var v;return o("div",{ref:r,class:["v-application",n.themeClasses.value,a.value,h.value,e.class],style:[l.value,e.style]},[o("div",{class:"v-application__wrap"},[(v=t.default)==null?void 0:v.call(t)])])}),{getLayoutItem:i,items:c,theme:n}}});const At=I({...D(),...$e()},"VLayout"),Rt=R()({name:"VLayout",props:At(),setup(e,s){let{slots:t}=s;const{layoutClasses:n,layoutStyles:a,getLayoutItem:l,items:i,layoutRef:c}=Me(e);return P(()=>{var r;return o("div",{ref:c,class:[n.value,e.class],style:[a.value,e.style]},[(r=t.default)==null?void 0:r.call(t)])}),{getLayoutItem:l,items:i}}}),Mt={__name:"SandwichLayout",setup(e){return(s,t)=>(k(),z(Lt,null,{default:b(()=>[o(Rt,{class:"rounded rounded-md"},{default:b(()=>[o(Tt),o(K(gt))]),_:1}),o(pt)]),_:1}))}};export{Mt as default};
