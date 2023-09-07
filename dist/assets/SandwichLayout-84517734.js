import{r as De,o as E,c as H,w as x,a as s,p as S,m as G,g as B,b as D,d as de,t as I,e as ve,f as Fe,h as me,i as He,j as v,k as U,l as R,n as fe,u as ge,q as he,s as Oe,v as Ue,x as je,y as j,z as q,A as N,S as qe,B as z,C as be,D as Je,E as We,I as oe,F as Ke,G as Ye,H as A,J as Qe,K as Xe,L as Ze,M as et,N as tt,O as ye,P as at,Q as nt,R as lt}from"./index-0506a2f8.js";import{V as st,m as J,a as p,b as xe,c as W,d as K,e as F,f as Ve,u as _e,g as Y,h as Q,i as X,j as w,k as ke,l as Se,n as ie,o as Ce,p as ot,q as it,r as ut,s as rt,R as ct,t as dt,v as vt,w as mt,x as ft,y as gt,z as ht,A as $,B as M,C as Ie,D as Be,E as we,F as bt,G as yt,H as ue,I as xt,J as Vt,K as _t,L as Pe,M as Te}from"./VImg-b3f355ff.js";import{_ as kt}from"./_plugin-vue_export-helper-c27b6911.js";const St={__name:"View",setup(e){return(o,t)=>{const a=De("router-view");return E(),H(st,null,{default:x(()=>[s(a)]),_:1})}}};const Ae=S({divided:Boolean,...J(),...p(),...xe(),...W(),...K(),...F(),...G(),...Ve()},"VBtnGroup"),re=B()({name:"VBtnGroup",props:Ae(),setup(e,o){let{slots:t}=o;const{themeClasses:a}=D(e),{densityClasses:n}=_e(e),{borderClasses:l}=Y(e),{elevationClasses:r}=Q(e),{roundedClasses:h}=X(e);de({VBtn:{height:"auto",color:I(e,"color"),density:I(e,"density"),flat:!0,variant:I(e,"variant")}}),w(()=>s(e.tag,{class:["v-btn-group",{"v-btn-group--divided":e.divided},a.value,l.value,n.value,r.value,h.value,e.class],style:e.style},t))}}),Ct=S({modelValue:{type:null,default:void 0},multiple:Boolean,mandatory:[Boolean,String],max:Number,selectedClass:String,disabled:Boolean},"group"),It=S({value:null,disabled:Boolean,selectedClass:String},"group-item");function Bt(e,o){let t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!0;const a=ve("useGroupItem");if(!a)throw new Error("[Vuetify] useGroupItem composable must be used inside a component setup function");const n=Fe();me(Symbol.for(`${o.description}:id`),n);const l=He(o,null);if(!l){if(!t)return l;throw new Error(`[Vuetify] Could not find useGroup injection with symbol ${o.description}`)}const r=I(e,"value"),h=v(()=>!!(l.disabled.value||e.disabled));l.register({id:n,value:r,disabled:h},a),U(()=>{l.unregister(n)});const f=v(()=>l.isSelected(n)),y=v(()=>f.value&&[l.selectedClass.value,e.selectedClass]);return R(f,g=>{a.emit("group:selected",{value:g})}),{id:n,isSelected:f,toggle:()=>l.select(n,!f.value),select:g=>l.select(n,g),selectedClass:y,value:r,disabled:h,group:l}}function wt(e,o){let t=!1;const a=fe([]),n=ge(e,"modelValue",[],u=>u==null?[]:Ne(a,Ue(u)),u=>{const i=Tt(a,u);return e.multiple?i:i[0]}),l=ve("useGroup");function r(u,i){const b=u,m=Symbol.for(`${o.description}:id`),c=je(m,l==null?void 0:l.vnode).indexOf(i);c>-1?a.splice(c,0,b):a.push(b)}function h(u){if(t)return;f();const i=a.findIndex(b=>b.id===u);a.splice(i,1)}function f(){const u=a.find(i=>!i.disabled);u&&e.mandatory==="force"&&!n.value.length&&(n.value=[u.id])}he(()=>{f()}),U(()=>{t=!0});function y(u,i){const b=a.find(m=>m.id===u);if(!(i&&(b!=null&&b.disabled)))if(e.multiple){const m=n.value.slice(),_=m.findIndex(d=>d===u),c=~_;if(i=i??!c,c&&e.mandatory&&m.length<=1||!c&&e.max!=null&&m.length+1>e.max)return;_<0&&i?m.push(u):_>=0&&!i&&m.splice(_,1),n.value=m}else{const m=n.value.includes(u);if(e.mandatory&&m)return;n.value=i??!m?[u]:[]}}function g(u){if(e.multiple,n.value.length){const i=n.value[0],b=a.findIndex(c=>c.id===i);let m=(b+u)%a.length,_=a[m];for(;_.disabled&&m!==b;)m=(m+u)%a.length,_=a[m];if(_.disabled)return;n.value=[a[m].id]}else{const i=a.find(b=>!b.disabled);i&&(n.value=[i.id])}}const k={register:r,unregister:h,selected:n,select:y,disabled:I(e,"disabled"),prev:()=>g(a.length-1),next:()=>g(1),isSelected:u=>n.value.includes(u),selectedClass:v(()=>e.selectedClass),items:v(()=>a),getItemIndex:u=>Pt(a,u)};return me(o,k),k}function Pt(e,o){const t=Ne(e,[o]);return t.length?e.findIndex(a=>a.id===t[0]):-1}function Ne(e,o){const t=[];return o.forEach(a=>{const n=e.find(r=>Oe(a,r.value)),l=e[a];(n==null?void 0:n.value)!=null?t.push(n.id):l!=null&&t.push(l.id)}),t}function Tt(e,o){const t=[];return o.forEach(a=>{const n=e.findIndex(l=>l.id===a);if(~n){const l=e[n];t.push(l.value!=null?l.value:n)}}),t}const pe=Symbol.for("vuetify:v-btn-toggle"),At=S({...Ae(),...Ct()},"VBtnToggle");B()({name:"VBtnToggle",props:At(),emits:{"update:modelValue":e=>!0},setup(e,o){let{slots:t}=o;const{isSelected:a,next:n,prev:l,select:r,selected:h}=wt(e,pe);return w(()=>{const[f]=re.filterProps(e);return s(re,j({class:["v-btn-toggle",e.class]},f,{style:e.style}),{default:()=>{var y;return[(y=t.default)==null?void 0:y.call(t,{isSelected:a,next:n,prev:l,select:r,selected:h})]}})}),{next:n,prev:l,select:r}}});function Nt(e,o){const t=q(),a=N(!1);if(qe){const n=new IntersectionObserver(l=>{e==null||e(l,n),a.value=!!l.find(r=>r.isIntersecting)},o);U(()=>{n.disconnect()}),R(t,(l,r)=>{r&&(n.unobserve(r),a.value=!1),l&&n.observe(l)},{flush:"post"})}return{intersectionRef:t,isIntersecting:a}}const pt=S({bgColor:String,color:String,indeterminate:[Boolean,String],modelValue:{type:[Number,String],default:0},rotate:{type:[Number,String],default:0},width:{type:[Number,String],default:4},...p(),...ke(),...F({tag:"div"}),...G()},"VProgressCircular"),Lt=B()({name:"VProgressCircular",props:pt(),setup(e,o){let{slots:t}=o;const a=20,n=2*Math.PI*a,l=q(),{themeClasses:r}=D(e),{sizeClasses:h,sizeStyles:f}=Se(e),{textColorClasses:y,textColorStyles:g}=ie(I(e,"color")),{textColorClasses:k,textColorStyles:u}=ie(I(e,"bgColor")),{intersectionRef:i,isIntersecting:b}=Nt(),{resizeRef:m,contentRect:_}=Ce(),c=v(()=>Math.max(0,Math.min(100,parseFloat(e.modelValue)))),d=v(()=>Number(e.width)),V=v(()=>f.value?Number(e.size):_.value?_.value.width:Math.max(d.value,32)),P=v(()=>a/(1-d.value/V.value)*2),L=v(()=>d.value/V.value*P.value),Z=v(()=>z((100-c.value)/100*n));return be(()=>{i.value=l.value,m.value=l.value}),w(()=>s(e.tag,{ref:l,class:["v-progress-circular",{"v-progress-circular--indeterminate":!!e.indeterminate,"v-progress-circular--visible":b.value,"v-progress-circular--disable-shrink":e.indeterminate==="disable-shrink"},r.value,h.value,y.value,e.class],style:[f.value,g.value,e.style],role:"progressbar","aria-valuemin":"0","aria-valuemax":"100","aria-valuenow":e.indeterminate?void 0:c.value},{default:()=>[s("svg",{style:{transform:`rotate(calc(-90deg + ${Number(e.rotate)}deg))`},xmlns:"http://www.w3.org/2000/svg",viewBox:`0 0 ${P.value} ${P.value}`},[s("circle",{class:["v-progress-circular__underlay",k.value],style:u.value,fill:"transparent",cx:"50%",cy:"50%",r:a,"stroke-width":L.value,"stroke-dasharray":n,"stroke-dashoffset":0},null),s("circle",{class:"v-progress-circular__overlay",fill:"transparent",cx:"50%",cy:"50%",r:a,"stroke-width":L.value,"stroke-dasharray":n,"stroke-dashoffset":Z.value},null)]),t.default&&s("div",{class:"v-progress-circular__content"},[t.default({value:c.value})])]})),{}}}),Rt=S({loading:[Boolean,String]},"loader");function zt(e){let o=arguments.length>1&&arguments[1]!==void 0?arguments[1]:Je();return{loaderClasses:v(()=>({[`${o}--loading`]:e.loading}))}}function Et(e,o){R(()=>{var t;return(t=e.isActive)==null?void 0:t.value},t=>{e.isLink.value&&t&&o&&We(()=>{o(!0)})},{immediate:!0})}const Le=S({active:{type:Boolean,default:void 0},symbol:{type:null,default:pe},flat:Boolean,icon:[Boolean,String,Function,Object],prependIcon:oe,appendIcon:oe,block:Boolean,stacked:Boolean,ripple:{type:[Boolean,Object],default:!0},text:String,...J(),...p(),...xe(),...ot(),...W(),...It(),...Rt(),...it(),...ut(),...K(),...rt(),...ke(),...F({tag:"button"}),...G(),...Ve({variant:"elevated"})},"VBtn"),C=B()({name:"VBtn",directives:{Ripple:ct},props:Le(),emits:{"group:selected":e=>!0},setup(e,o){let{attrs:t,slots:a}=o;const{themeClasses:n}=D(e),{borderClasses:l}=Y(e),{colorClasses:r,colorStyles:h,variantClasses:f}=dt(e),{densityClasses:y}=_e(e),{dimensionStyles:g}=vt(e),{elevationClasses:k}=Q(e),{loaderClasses:u}=zt(e),{locationStyles:i}=mt(e),{positionClasses:b}=ft(e),{roundedClasses:m}=X(e),{sizeClasses:_,sizeStyles:c}=Se(e),d=Bt(e,e.symbol,!1),V=gt(e,t),P=v(()=>{var T;return e.active!==void 0?e.active:V.isLink.value?(T=V.isActive)==null?void 0:T.value:d==null?void 0:d.isSelected.value}),L=v(()=>(d==null?void 0:d.disabled.value)||e.disabled),Z=v(()=>e.variant==="elevated"&&!(e.disabled||e.flat||e.border)),$e=v(()=>{if(e.value!==void 0)return Object(e.value)===e.value?JSON.stringify(e.value,null,0):e.value});function Me(T){var O;L.value||V.isLink.value&&(T.metaKey||T.ctrlKey||T.shiftKey||T.button!==0||t.target==="_blank")||((O=V.navigate)==null||O.call(V,T),d==null||d.toggle())}return Et(V,d==null?void 0:d.select),w(()=>{var ae,ne;const T=V.isLink.value?"a":e.tag,O=!!(e.prependIcon||a.prepend),Ge=!!(e.appendIcon||a.append),ee=!!(e.icon&&e.icon!==!0),te=(d==null?void 0:d.isSelected.value)&&(!V.isLink.value||((ae=V.isActive)==null?void 0:ae.value))||!d||((ne=V.isActive)==null?void 0:ne.value);return Ke(s(T,{type:T==="a"?void 0:"button",class:["v-btn",d==null?void 0:d.selectedClass.value,{"v-btn--active":P.value,"v-btn--block":e.block,"v-btn--disabled":L.value,"v-btn--elevated":Z.value,"v-btn--flat":e.flat,"v-btn--icon":!!e.icon,"v-btn--loading":e.loading,"v-btn--stacked":e.stacked},n.value,l.value,te?r.value:void 0,y.value,k.value,u.value,b.value,m.value,_.value,f.value,e.class],style:[te?h.value:void 0,g.value,i.value,c.value,e.style],disabled:L.value||void 0,href:V.href.value,onClick:Me,value:$e.value},{default:()=>{var le;return[ht(!0,"v-btn"),!e.icon&&O&&s("span",{key:"prepend",class:"v-btn__prepend"},[a.prepend?s(M,{key:"prepend-defaults",disabled:!e.prependIcon,defaults:{VIcon:{icon:e.prependIcon}}},a.prepend):s($,{key:"prepend-icon",icon:e.prependIcon},null)]),s("span",{class:"v-btn__content","data-no-activator":""},[!a.default&&ee?s($,{key:"content-icon",icon:e.icon},null):s(M,{key:"content-defaults",disabled:!ee,defaults:{VIcon:{icon:e.icon}}},{default:()=>{var se;return[((se=a.default)==null?void 0:se.call(a))??e.text]}})]),!e.icon&&Ge&&s("span",{key:"append",class:"v-btn__append"},[a.append?s(M,{key:"append-defaults",disabled:!e.appendIcon,defaults:{VIcon:{icon:e.appendIcon}}},a.append):s($,{key:"append-icon",icon:e.appendIcon},null)]),!!e.loading&&s("span",{key:"loader",class:"v-btn__loader"},[((le=a.loader)==null?void 0:le.call(a))??s(Lt,{color:typeof e.loading=="boolean"?void 0:e.loading,indeterminate:!0,size:"23",width:"2"},null)])]}}),[[Ye("ripple"),!L.value&&e.ripple,null]])}),{}}});const $t=S({app:Boolean,color:String,height:{type:[Number,String],default:"auto"},...J(),...p(),...W(),...Ie(),...K(),...F({tag:"footer"}),...G()},"VFooter"),Mt=B()({name:"VFooter",props:$t(),setup(e,o){let{slots:t}=o;const{themeClasses:a}=D(e),{backgroundColorClasses:n,backgroundColorStyles:l}=Be(I(e,"color")),{borderClasses:r}=Y(e),{elevationClasses:h}=Q(e),{roundedClasses:f}=X(e),y=N(32),{resizeRef:g}=Ce(i=>{i.length&&(y.value=i[0].target.clientHeight)}),k=v(()=>e.height==="auto"?y.value:parseInt(e.height,10)),{layoutItemStyles:u}=we({id:e.name,order:v(()=>parseInt(e.order,10)),position:v(()=>"bottom"),layoutSize:k,elementSize:v(()=>e.height==="auto"?void 0:k.value),active:v(()=>e.app),absolute:I(e,"absolute")});return w(()=>s(e.tag,{ref:g,class:["v-footer",a.value,n.value,r.value,h.value,f.value,e.class],style:[l.value,e.app?u.value:{height:z(e.height)},e.style]},t)),{}}}),Gt=bt("v-spacer","div","VSpacer"),Dt={__name:"Footer",setup(e){const o=fe([{icon:"mdi-facebook",link:"https://www.facebook.com/liangjin0228/"},{icon:"mdi-twitter",link:"https://twitter.com/TanLiangJin0228"},{icon:"mdi-linkedin",link:"https://www.linkedin.com/in/liangjin0228/"},{icon:"mdi-instagram",link:"https://www.instagram.com/liangjin_tan"}]);return(t,a)=>(E(),H(Mt,{class:"bg-grey-lighten-1"},{default:x(()=>[s(yt,{justify:"center","no-gutters":""},{default:x(()=>[s(C,{color:"white",variant:"text",class:"mx-2",rounded:"xl",to:"/"},{default:x(()=>[A("Home")]),_:1}),s(C,{color:"white",variant:"text",class:"mx-2",rounded:"xl",to:"/resume"},{default:x(()=>[A("Resume")]),_:1}),s(C,{color:"white",variant:"text",class:"mx-2",rounded:"xl",to:"/about"},{default:x(()=>[A("About Me")]),_:1}),s(C,{color:"white",variant:"text",class:"mx-2",rounded:"xl",to:"/contact"},{default:x(()=>[A("Contact Me")]),_:1}),s(ue,{class:"text-center mt-4",cols:"12"},{default:x(()=>[(E(!0),Qe(Xe,null,Ze(o,n=>(E(),H(C,{key:n,class:"mx-4",icon:n.icon,href:n.link,variant:"text"},null,8,["icon","href"]))),128))]),_:1}),s(ue,{class:"text-center mt-4",cols:"12"},{default:x(()=>[et("strong",null,"All contents of this site, unless otherwise noted, are ©2000-"+tt(new Date().getFullYear())+" Tan Liang Jin. All Rights Reserved.",1)]),_:1})]),_:1})]),_:1}))}};const Re=S({text:String,...p(),...F()},"VToolbarTitle"),ze=B()({name:"VToolbarTitle",props:Re(),setup(e,o){let{slots:t}=o;return w(()=>{const a=!!(t.default||t.text||e.text);return s(e.tag,{class:["v-toolbar-title",e.class],style:e.style},{default:()=>{var n;return[a&&s("div",{class:"v-toolbar-title__placeholder"},[t.text?t.text():e.text,(n=t.default)==null?void 0:n.call(t)])]}})}),{}}}),Ft=[null,"prominent","default","comfortable","compact"],Ee=S({absolute:Boolean,collapse:Boolean,color:String,density:{type:String,default:"default",validator:e=>Ft.includes(e)},extended:Boolean,extensionHeight:{type:[Number,String],default:48},flat:Boolean,floating:Boolean,height:{type:[Number,String],default:64},image:String,title:String,...J(),...p(),...W(),...K(),...F({tag:"header"}),...G()},"VToolbar"),ce=B()({name:"VToolbar",props:Ee(),setup(e,o){var i;let{slots:t}=o;const{backgroundColorClasses:a,backgroundColorStyles:n}=Be(I(e,"color")),{borderClasses:l}=Y(e),{elevationClasses:r}=Q(e),{roundedClasses:h}=X(e),{themeClasses:f}=D(e),{rtlClasses:y}=ye(),g=N(!!(e.extended||(i=t.extension)!=null&&i.call(t))),k=v(()=>parseInt(Number(e.height)+(e.density==="prominent"?Number(e.height):0)-(e.density==="comfortable"?8:0)-(e.density==="compact"?16:0),10)),u=v(()=>g.value?parseInt(Number(e.extensionHeight)+(e.density==="prominent"?Number(e.extensionHeight):0)-(e.density==="comfortable"?4:0)-(e.density==="compact"?8:0),10):0);return de({VBtn:{variant:"text"}}),w(()=>{var c;const b=!!(e.title||t.title),m=!!(t.image||e.image),_=(c=t.extension)==null?void 0:c.call(t);return g.value=!!(e.extended||_),s(e.tag,{class:["v-toolbar",{"v-toolbar--absolute":e.absolute,"v-toolbar--collapse":e.collapse,"v-toolbar--flat":e.flat,"v-toolbar--floating":e.floating,[`v-toolbar--density-${e.density}`]:!0},a.value,l.value,r.value,h.value,f.value,y.value,e.class],style:[n.value,e.style]},{default:()=>[m&&s("div",{key:"image",class:"v-toolbar__image"},[t.image?s(M,{key:"image-defaults",disabled:!e.image,defaults:{VImg:{cover:!0,src:e.image}}},t.image):s(xt,{key:"image-img",cover:!0,src:e.image},null)]),s(M,{defaults:{VTabs:{height:z(k.value)}}},{default:()=>{var d,V,P;return[s("div",{class:"v-toolbar__content",style:{height:z(k.value)}},[t.prepend&&s("div",{class:"v-toolbar__prepend"},[(d=t.prepend)==null?void 0:d.call(t)]),b&&s(ze,{key:"title",text:e.title},{text:t.title}),(V=t.default)==null?void 0:V.call(t),t.append&&s("div",{class:"v-toolbar__append"},[(P=t.append)==null?void 0:P.call(t)])])]}}),s(M,{defaults:{VTabs:{height:z(u.value)}}},{default:()=>[s(Vt,null,{default:()=>[g.value&&s("div",{class:"v-toolbar__extension",style:{height:z(u.value)}},[_])]})]})]})}),{contentHeight:k,extensionHeight:u}}}),Ht=S({scrollTarget:{type:String},scrollThreshold:{type:[String,Number],default:300}},"scroll");function Ot(e){let o=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{canScroll:t}=o;let a=0;const n=q(null),l=N(0),r=N(0),h=N(0),f=N(!1),y=N(!1),g=v(()=>Number(e.scrollThreshold)),k=v(()=>at((g.value-l.value)/g.value||0)),u=()=>{const i=n.value;!i||t&&!t.value||(a=l.value,l.value="window"in i?i.pageYOffset:i.scrollTop,y.value=l.value<a,h.value=Math.abs(l.value-g.value))};return R(y,()=>{r.value=r.value||l.value}),R(f,()=>{r.value=0}),he(()=>{R(()=>e.scrollTarget,i=>{var m;const b=i?document.querySelector(i):window;b&&b!==n.value&&((m=n.value)==null||m.removeEventListener("scroll",u),n.value=b,n.value.addEventListener("scroll",u,{passive:!0}))},{immediate:!0})}),U(()=>{var i;(i=n.value)==null||i.removeEventListener("scroll",u)}),t&&R(t,u,{immediate:!0}),{scrollThreshold:g,currentScroll:l,currentThreshold:h,isScrollActive:f,scrollRatio:k,isScrollingUp:y,savedScroll:r}}const Ut=S({scrollBehavior:String,modelValue:{type:Boolean,default:!0},location:{type:String,default:"top",validator:e=>["top","bottom"].includes(e)},...Ee(),...Ie(),...Ht(),height:{type:[Number,String],default:64}},"VAppBar"),jt=B()({name:"VAppBar",props:Ut(),emits:{"update:modelValue":e=>!0},setup(e,o){let{slots:t}=o;const a=q(),n=ge(e,"modelValue"),l=v(()=>{var d;const c=new Set(((d=e.scrollBehavior)==null?void 0:d.split(" "))??[]);return{hide:c.has("hide"),inverted:c.has("inverted"),collapse:c.has("collapse"),elevate:c.has("elevate"),fadeImage:c.has("fade-image")}}),r=v(()=>{const c=l.value;return c.hide||c.inverted||c.collapse||c.elevate||c.fadeImage||!n.value}),{currentScroll:h,scrollThreshold:f,isScrollingUp:y,scrollRatio:g}=Ot(e,{canScroll:r}),k=v(()=>e.collapse||l.value.collapse&&(l.value.inverted?g.value>0:g.value===0)),u=v(()=>e.flat||l.value.elevate&&(l.value.inverted?h.value>0:h.value===0)),i=v(()=>l.value.fadeImage?l.value.inverted?1-g.value:g.value:void 0),b=v(()=>{var V,P;if(l.value.hide&&l.value.inverted)return 0;const c=((V=a.value)==null?void 0:V.contentHeight)??0,d=((P=a.value)==null?void 0:P.extensionHeight)??0;return c+d});nt(v(()=>!!e.scrollBehavior),()=>{be(()=>{l.value.hide?l.value.inverted?n.value=h.value>f.value:n.value=y.value||h.value<f.value:n.value=!0})});const{ssrBootStyles:m}=_t(),{layoutItemStyles:_}=we({id:e.name,order:v(()=>parseInt(e.order,10)),position:I(e,"location"),layoutSize:b,elementSize:N(void 0),active:n,absolute:I(e,"absolute")});return w(()=>{const[c]=ce.filterProps(e);return s(ce,j({ref:a,class:["v-app-bar",{"v-app-bar--bottom":e.location==="bottom"},e.class],style:[{..._.value,"--v-toolbar-image-opacity":i.value,height:void 0,...m.value},e.style]},c,{collapse:k.value,flat:u.value}),t)}),{}}}),qt=S({...Le({icon:"$menu",variant:"text"})},"VAppBarNavIcon"),Jt=B()({name:"VAppBarNavIcon",props:qt(),setup(e,o){let{slots:t}=o;return w(()=>s(C,j(e,{class:["v-app-bar-nav-icon"]}),t)),{}}}),Wt=B()({name:"VAppBarTitle",props:Re(),setup(e,o){let{slots:t}=o;return w(()=>s(ze,j(e,{class:"v-app-bar-title"}),t)),{}}}),Kt={};function Yt(e,o){return E(),H(jt,{flat:"",elevation:5},{default:x(()=>[s(Jt,null,{default:x(()=>[s($,{icon:"mdi-human-greeting",color:"green-darken-4"})]),_:1}),s(Wt,{class:"text-deep-purple-lighten-2"},{default:x(()=>[A(" Welcome! ")]),_:1}),s(C,{rounded:"xl",size:"large","prepend-icon":"mdi-home",class:"text-green",value:"",to:"/"},{default:x(()=>[A("Home")]),_:1}),s(C,{rounded:"xl",size:"large","prepend-icon":"mdi-file-account",class:"text-brown-darken-1",value:"resume",to:"/resume"},{default:x(()=>[A("Resume")]),_:1}),s(C,{rounded:"xl",size:"large","prepend-icon":"mdi-information",class:"text-blue",value:"about",to:"/about"},{default:x(()=>[A("About Me")]),_:1}),s(C,{rounded:"xl",size:"large","prepend-icon":"mdi-phone-incoming",class:"text-yellow-darken-4",value:"contact",to:"/contact"},{default:x(()=>[A("Contact Me")]),_:1}),s(Gt),s(C,{icon:""},{default:x(()=>[s($,null,{default:x(()=>[A("mdi-magnify")]),_:1})]),_:1}),s(C,{icon:""},{default:x(()=>[s($,null,{default:x(()=>[A("mdi-dots-vertical")]),_:1})]),_:1})]),_:1})}const Qt=kt(Kt,[["render",Yt]]);const Xt=S({...p(),...Pe({fullHeight:!0}),...G()},"VApp"),Zt=B()({name:"VApp",props:Xt(),setup(e,o){let{slots:t}=o;const a=D(e),{layoutClasses:n,layoutStyles:l,getLayoutItem:r,items:h,layoutRef:f}=Te(e),{rtlClasses:y}=ye();return w(()=>{var g;return s("div",{ref:f,class:["v-application",a.themeClasses.value,n.value,y.value,e.class],style:[l.value,e.style]},[s("div",{class:"v-application__wrap"},[(g=t.default)==null?void 0:g.call(t)])])}),{getLayoutItem:r,items:h,theme:a}}});const ea=S({...p(),...Pe()},"VLayout"),ta=B()({name:"VLayout",props:ea(),setup(e,o){let{slots:t}=o;const{layoutClasses:a,layoutStyles:n,getLayoutItem:l,items:r,layoutRef:h}=Te(e);return w(()=>{var f;return s("div",{ref:h,class:[a.value,e.class],style:[n.value,e.style]},[(f=t.default)==null?void 0:f.call(t)])}),{getLayoutItem:l,items:r}}}),sa={__name:"SandwichLayout",setup(e){return(o,t)=>(E(),H(Zt,null,{default:x(()=>[s(ta,{class:"rounded rounded-md"},{default:x(()=>[s(Qt),s(lt(St))]),_:1}),s(Dt)]),_:1}))}};export{sa as default};
