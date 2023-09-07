import{$ as ie,p as y,g as I,a0 as J,a1 as Te,a2 as z,e as ue,z as H,a3 as gt,k as ze,l as U,a4 as he,a5 as Ve,i as ce,j as d,n as M,A as R,q as Ne,h as Be,B as b,x as yt,f as pt,a6 as ht,a7 as St,a as g,D as V,a8 as F,a9 as Ae,aa as Se,ab as bt,K as je,R as be,ac as _t,d as Ct,I as wt,m as xt,b as Lt,ad as $t,t as Oe,ae as Et,af as kt,O as It,ag as Pt,ah as _e,ai as Rt,aj as Ce,ak as Z,al as Tt,am as de,y as Me,S as He,an as zt,E as Vt,F as we,G as Nt,V as Bt}from"./index-0f905fa1.js";const At=["top","bottom"],jt=["start","end","left","right"];function Ot(e,n){let[t,s]=e.split(" ");return s||(s=ie(At,t)?"start":ie(jt,t)?"top":"center"),{side:xe(t,n),align:xe(s,n)}}function xe(e,n){return e==="start"?n?"right":"left":e==="end"?n?"left":"right":e}const T=y({class:[String,Array],style:{type:[String,Array,Object],default:null}},"component");function $n(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"div",t=arguments.length>2?arguments[2]:void 0;return I()({name:t??J(Te(e.replace(/__/g,"-"))),props:{tag:{type:String,default:n},...T()},setup(s,o){let{slots:a}=o;return()=>{var i;return z(s.tag,{class:[e,s.class],style:s.style},(i=a.default)==null?void 0:i.call(a))}}})}function Q(e){const n=ue("useRender");n.render=e}function Mt(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"content";const t=H(),s=H();if(gt){const o=new ResizeObserver(a=>{e==null||e(a,o),a.length&&(n==="content"?s.value=a[0].contentRect:s.value=a[0].target.getBoundingClientRect())});ze(()=>{o.disconnect()}),U(t,(a,i)=>{i&&(o.unobserve(he(i)),s.value=void 0),a&&o.observe(he(a))},{flush:"post"})}return{resizeRef:t,contentRect:Ve(s)}}const Y=Symbol.for("vuetify:layout"),De=Symbol.for("vuetify:layout-item"),Le=1e3,En=y({overlaps:{type:Array,default:()=>[]},fullHeight:Boolean},"layout"),kn=y({name:{type:String},order:{type:[Number,String],default:0},absolute:Boolean},"layout-item");function Ht(){const e=ce(Y);if(!e)throw new Error("[Vuetify] Could not find injected layout");return{getLayoutItem:e.getLayoutItem,mainRect:e.mainRect,mainStyles:e.mainStyles}}function In(e){const n=ce(Y);if(!n)throw new Error("[Vuetify] Could not find injected layout");const t=e.id??`layout-item-${pt()}`,s=ue("useLayoutItem");Be(De,{id:t});const o=R(!1);ht(()=>o.value=!0),St(()=>o.value=!1);const{layoutItemStyles:a,layoutItemScrimStyles:i}=n.register(s,{...e,active:d(()=>o.value?!1:e.active.value),id:t});return ze(()=>n.unregister(t)),{layoutItemStyles:a,layoutRect:n.layoutRect,layoutItemScrimStyles:i}}const Dt=(e,n,t,s)=>{let o={top:0,left:0,right:0,bottom:0};const a=[{id:"",layer:{...o}}];for(const i of e){const r=n.get(i),u=t.get(i),c=s.get(i);if(!r||!u||!c)continue;const v={...o,[r.value]:parseInt(o[r.value],10)+(c.value?parseInt(u.value,10):0)};a.push({id:i,layer:v}),o=v}return a};function Pn(e){const n=ce(Y,null),t=d(()=>n?n.rootZIndex.value-100:Le),s=H([]),o=M(new Map),a=M(new Map),i=M(new Map),r=M(new Map),u=M(new Map),{resizeRef:c,contentRect:v}=Mt(),h=d(()=>{const p=new Map,C=e.overlaps??[];for(const l of C.filter(f=>f.includes(":"))){const[f,m]=l.split(":");if(!s.value.includes(f)||!s.value.includes(m))continue;const L=o.get(f),E=o.get(m),A=a.get(f),j=a.get(m);!L||!E||!A||!j||(p.set(m,{position:L.value,amount:parseInt(A.value,10)}),p.set(f,{position:E.value,amount:-parseInt(j.value,10)}))}return p}),S=d(()=>{const p=[...new Set([...i.values()].map(l=>l.value))].sort((l,f)=>l-f),C=[];for(const l of p){const f=s.value.filter(m=>{var L;return((L=i.get(m))==null?void 0:L.value)===l});C.push(...f)}return Dt(C,o,a,r)}),_=d(()=>!Array.from(u.values()).some(p=>p.value)),P=d(()=>S.value[S.value.length-1].layer),q=d(()=>({"--v-layout-left":b(P.value.left),"--v-layout-right":b(P.value.right),"--v-layout-top":b(P.value.top),"--v-layout-bottom":b(P.value.bottom),..._.value?void 0:{transition:"none"}})),$=d(()=>S.value.slice(1).map((p,C)=>{let{id:l}=p;const{layer:f}=S.value[C],m=a.get(l),L=o.get(l);return{id:l,...f,size:Number(m.value),position:L.value}})),N=p=>$.value.find(C=>C.id===p),B=ue("createLayout"),G=R(!1);Ne(()=>{G.value=!0}),Be(Y,{register:(p,C)=>{let{id:l,order:f,position:m,layoutSize:L,elementSize:E,active:A,disableTransitions:j,absolute:dt}=C;i.set(l,f),o.set(l,m),a.set(l,L),r.set(l,A),j&&u.set(l,j);const ge=yt(De,B==null?void 0:B.vnode).indexOf(p);ge>-1?s.value.splice(ge,0,l):s.value.push(l);const ye=d(()=>$.value.findIndex(O=>O.id===l)),se=d(()=>t.value+S.value.length*2-ye.value*2),ft=d(()=>{const O=m.value==="left"||m.value==="right",ae=m.value==="right",mt=m.value==="bottom",pe={[m.value]:0,zIndex:se.value,transform:`translate${O?"X":"Y"}(${(A.value?0:-110)*(ae||mt?-1:1)}%)`,position:dt.value||t.value!==Le?"absolute":"fixed",..._.value?void 0:{transition:"none"}};if(!G.value)return pe;const k=$.value[ye.value];if(!k)throw new Error(`[Vuetify] Could not find layout item "${l}"`);const oe=h.value.get(l);return oe&&(k[oe.position]+=oe.amount),{...pe,height:O?`calc(100% - ${k.top}px - ${k.bottom}px)`:E.value?`${E.value}px`:void 0,left:ae?void 0:`${k.left}px`,right:ae?`${k.right}px`:void 0,top:m.value!=="bottom"?`${k.top}px`:void 0,bottom:m.value!=="top"?`${k.bottom}px`:void 0,width:O?E.value?`${E.value}px`:void 0:`calc(100% - ${k.left}px - ${k.right}px)`}}),vt=d(()=>({zIndex:se.value-1}));return{layoutItemStyles:ft,layoutItemScrimStyles:vt,zIndex:se}},unregister:p=>{i.delete(p),o.delete(p),a.delete(p),r.delete(p),u.delete(p),s.value=s.value.filter(C=>C!==p)},mainRect:P,mainStyles:q,getLayoutItem:N,items:$,layoutRect:v,rootZIndex:t});const te=d(()=>["v-layout",{"v-layout--full-height":e.fullHeight}]),ne=d(()=>({zIndex:t.value,position:n?"relative":void 0,overflow:n?"hidden":void 0}));return{layoutClasses:te,layoutStyles:ne,getLayoutItem:N,items:$,layoutRect:v,layoutRef:c}}function Wt(){const e=R(!1);return Ne(()=>{window.requestAnimationFrame(()=>{e.value=!0})}),{ssrBootStyles:d(()=>e.value?void 0:{transition:"none !important"}),isBooted:Ve(e)}}const ee=y({tag:{type:String,default:"div"}},"tag"),Ft=y({scrollable:Boolean,...T(),...ee({tag:"main"})},"VMain"),Rn=I()({name:"VMain",props:Ft(),setup(e,n){let{slots:t}=n;const{mainStyles:s}=Ht(),{ssrBootStyles:o}=Wt();return Q(()=>g(e.tag,{class:["v-main",{"v-main--scrollable":e.scrollable},e.class],style:[s.value,o.value,e.style]},{default:()=>{var a,i;return[e.scrollable?g("div",{class:"v-main__scroller"},[(a=t.default)==null?void 0:a.call(t)]):(i=t.default)==null?void 0:i.call(t)]}})),{}}}),Tn=y({border:[Boolean,Number,String]},"border");function zn(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:V();return{borderClasses:d(()=>{const s=F(e)?e.value:e.border,o=[];if(s===!0||s==="")o.push(`${n}--border`);else if(typeof s=="string"||s===0)for(const a of String(s).split(" "))o.push(`border-${a}`);return o})}}const qt=[null,"default","comfortable","compact"],Vn=y({density:{type:String,default:"default",validator:e=>qt.includes(e)}},"density");function Nn(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:V();return{densityClasses:d(()=>`${n}--density-${e.density}`)}}const Bn=y({elevation:{type:[Number,String],validator(e){const n=parseInt(e);return!isNaN(n)&&n>=0&&n<=24}}},"elevation");function An(e){return{elevationClasses:d(()=>{const t=F(e)?e.value:e.elevation,s=[];return t==null||s.push(`elevation-${t}`),s})}}const jn=y({rounded:{type:[Boolean,Number,String],default:void 0}},"rounded");function On(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:V();return{roundedClasses:d(()=>{const s=F(e)?e.value:e.rounded,o=[];if(s===!0||s==="")o.push(`${n}--rounded`);else if(typeof s=="string"||s===0)for(const a of String(s).split(" "))o.push(`rounded-${a}`);return o})}}function fe(e){return Ae(()=>{const n=[],t={};if(e.value.background)if(Se(e.value.background)){if(t.backgroundColor=e.value.background,!e.value.text){const s=bt(t.backgroundColor);t.color=s,t.caretColor=s}}else n.push(`bg-${e.value.background}`);return e.value.text&&(Se(e.value.text)?(t.color=e.value.text,t.caretColor=e.value.text):n.push(`text-${e.value.text}`)),{colorClasses:n,colorStyles:t}})}function Gt(e,n){const t=d(()=>({text:F(e)?e.value:n?e[n]:null})),{colorClasses:s,colorStyles:o}=fe(t);return{textColorClasses:s,textColorStyles:o}}function Mn(e,n){const t=d(()=>({background:F(e)?e.value:n?e[n]:null})),{colorClasses:s,colorStyles:o}=fe(t);return{backgroundColorClasses:s,backgroundColorStyles:o}}const Kt=["elevated","flat","tonal","outlined","text","plain"];function Hn(e,n){return g(je,null,[e&&g("span",{key:"overlay",class:`${n}__overlay`},null),g("span",{key:"underlay",class:`${n}__underlay`},null)])}const Dn=y({color:String,variant:{type:String,default:"elevated",validator:e=>Kt.includes(e)}},"variant");function Wn(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:V();const t=d(()=>{const{variant:a}=be(e);return`${n}--variant-${a}`}),{colorClasses:s,colorStyles:o}=fe(d(()=>{const{variant:a,color:i}=be(e);return{[["elevated","flat"].includes(a)?"background":"text"]:i}}));return{colorClasses:s,colorStyles:o,variantClasses:t}}const Ut=y({defaults:Object,disabled:Boolean,reset:[Number,String],root:[Boolean,String],scoped:Boolean},"VDefaultsProvider"),Fn=I(!1)({name:"VDefaultsProvider",props:Ut(),setup(e,n){let{slots:t}=n;const{defaults:s,disabled:o,reset:a,root:i,scoped:r}=_t(e);return Ct(s,{reset:a,root:i,scoped:r,disabled:o}),()=>{var u;return(u=t.default)==null?void 0:u.call(t)}}});const Yt=["x-small","small","default","large","x-large"],Xt=y({size:{type:[String,Number],default:"default"}},"size");function Jt(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:V();return Ae(()=>{let t,s;return ie(Yt,e.size)?t=`${n}--size-${e.size}`:e.size&&(s={width:b(e.size),height:b(e.size)}),{sizeClasses:t,sizeStyles:s}})}const Zt=y({color:String,start:Boolean,end:Boolean,icon:wt,...T(),...Xt(),...ee({tag:"i"}),...xt()},"VIcon"),qn=I()({name:"VIcon",props:Zt(),setup(e,n){let{attrs:t,slots:s}=n;const o=H(),{themeClasses:a}=Lt(e),{iconData:i}=$t(d(()=>o.value||e.icon)),{sizeClasses:r}=Jt(e),{textColorClasses:u,textColorStyles:c}=Gt(Oe(e,"color"));return Q(()=>{var h,S;const v=(h=s.default)==null?void 0:h.call(s);return v&&(o.value=(S=Et(v).filter(_=>_.type===kt&&_.children&&typeof _.children=="string")[0])==null?void 0:S.children),g(i.value.component,{tag:e.tag,icon:i.value.icon,class:["v-icon","notranslate",a.value,r.value,u.value,{"v-icon--clickable":!!t.onClick,"v-icon--start":e.start,"v-icon--end":e.end},e.class],style:[r.value?void 0:{fontSize:b(e.size),height:b(e.size),width:b(e.size)},c.value,e.style],role:t.onClick?"button":void 0,"aria-hidden":!t.onClick},{default:()=>[v]})}),{}}}),Qt=y({height:[Number,String],maxHeight:[Number,String],maxWidth:[Number,String],minHeight:[Number,String],minWidth:[Number,String],width:[Number,String]},"dimension");function en(e){return{dimensionStyles:d(()=>({height:b(e.height),maxHeight:b(e.maxHeight),maxWidth:b(e.maxWidth),minHeight:b(e.minHeight),minWidth:b(e.minWidth),width:b(e.width)}))}}const $e={center:"center",top:"bottom",bottom:"top",left:"right",right:"left"},Gn=y({location:String},"location");function Kn(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,t=arguments.length>2?arguments[2]:void 0;const{isRtl:s}=It();return{locationStyles:d(()=>{if(!e.location)return{};const{side:a,align:i}=Ot(e.location.split(" ").length>1?e.location:`${e.location} center`,s.value);function r(c){return t?t(c):0}const u={};return a!=="center"&&(n?u[$e[a]]=`calc(100% - ${r(a)}px)`:u[a]=0),i!=="center"?n?u[$e[i]]=`calc(100% - ${r(i)}px)`:u[i]=0:(a==="center"?u.top=u.left="50%":u[{top:"left",bottom:"left",left:"top",right:"top"}[a]]="50%",u.transform={top:"translateX(-50%)",bottom:"translateX(-50%)",left:"translateY(-50%)",right:"translateY(-50%)",center:"translate(-50%, -50%)"}[a]),u})}}const tn=["static","relative","fixed","absolute","sticky"],Un=y({position:{type:String,validator:e=>tn.includes(e)}},"position");function Yn(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:V();return{positionClasses:d(()=>e.position?`${n}--${e.position}`:void 0)}}function Xn(e,n){const t=Pt("RouterLink"),s=d(()=>!!(e.href||e.to)),o=d(()=>(s==null?void 0:s.value)||_e(n,"click")||_e(e,"click"));if(typeof t=="string")return{isLink:s,isClickable:o,href:Oe(e,"href")};const a=e.to?t.useLink(e):void 0;return{isLink:s,isClickable:o,route:a==null?void 0:a.route,navigate:a==null?void 0:a.navigate,isActive:a&&d(()=>{var i,r;return e.exact?(i=a.isExactActive)==null?void 0:i.value:(r=a.isActive)==null?void 0:r.value}),href:d(()=>e.to?a==null?void 0:a.route.value.href:e.href)}}const Jn=y({href:String,replace:Boolean,to:[String,Object],exact:Boolean},"router");const re=Symbol("rippleStop"),nn=80;function Ee(e,n){e.style.transform=n,e.style.webkitTransform=n}function le(e){return e.constructor.name==="TouchEvent"}function We(e){return e.constructor.name==="KeyboardEvent"}const sn=function(e,n){var h;let t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},s=0,o=0;if(!We(e)){const S=n.getBoundingClientRect(),_=le(e)?e.touches[e.touches.length-1]:e;s=_.clientX-S.left,o=_.clientY-S.top}let a=0,i=.3;(h=n._ripple)!=null&&h.circle?(i=.15,a=n.clientWidth/2,a=t.center?a:a+Math.sqrt((s-a)**2+(o-a)**2)/4):a=Math.sqrt(n.clientWidth**2+n.clientHeight**2)/2;const r=`${(n.clientWidth-a*2)/2}px`,u=`${(n.clientHeight-a*2)/2}px`,c=t.center?r:`${s-a}px`,v=t.center?u:`${o-a}px`;return{radius:a,scale:i,x:c,y:v,centerX:r,centerY:u}},X={show(e,n){var _;let t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(!((_=n==null?void 0:n._ripple)!=null&&_.enabled))return;const s=document.createElement("span"),o=document.createElement("span");s.appendChild(o),s.className="v-ripple__container",t.class&&(s.className+=` ${t.class}`);const{radius:a,scale:i,x:r,y:u,centerX:c,centerY:v}=sn(e,n,t),h=`${a*2}px`;o.className="v-ripple__animation",o.style.width=h,o.style.height=h,n.appendChild(s);const S=window.getComputedStyle(n);S&&S.position==="static"&&(n.style.position="relative",n.dataset.previousPosition="static"),o.classList.add("v-ripple__animation--enter"),o.classList.add("v-ripple__animation--visible"),Ee(o,`translate(${r}, ${u}) scale3d(${i},${i},${i})`),o.dataset.activated=String(performance.now()),setTimeout(()=>{o.classList.remove("v-ripple__animation--enter"),o.classList.add("v-ripple__animation--in"),Ee(o,`translate(${c}, ${v}) scale3d(1,1,1)`)},0)},hide(e){var a;if(!((a=e==null?void 0:e._ripple)!=null&&a.enabled))return;const n=e.getElementsByClassName("v-ripple__animation");if(n.length===0)return;const t=n[n.length-1];if(t.dataset.isHiding)return;t.dataset.isHiding="true";const s=performance.now()-Number(t.dataset.activated),o=Math.max(250-s,0);setTimeout(()=>{t.classList.remove("v-ripple__animation--in"),t.classList.add("v-ripple__animation--out"),setTimeout(()=>{var r;e.getElementsByClassName("v-ripple__animation").length===1&&e.dataset.previousPosition&&(e.style.position=e.dataset.previousPosition,delete e.dataset.previousPosition),((r=t.parentNode)==null?void 0:r.parentNode)===e&&e.removeChild(t.parentNode)},300)},o)}};function Fe(e){return typeof e>"u"||!!e}function D(e){const n={},t=e.currentTarget;if(!(!(t!=null&&t._ripple)||t._ripple.touched||e[re])){if(e[re]=!0,le(e))t._ripple.touched=!0,t._ripple.isTouch=!0;else if(t._ripple.isTouch)return;if(n.center=t._ripple.centered||We(e),t._ripple.class&&(n.class=t._ripple.class),le(e)){if(t._ripple.showTimerCommit)return;t._ripple.showTimerCommit=()=>{X.show(e,t,n)},t._ripple.showTimer=window.setTimeout(()=>{var s;(s=t==null?void 0:t._ripple)!=null&&s.showTimerCommit&&(t._ripple.showTimerCommit(),t._ripple.showTimerCommit=null)},nn)}else X.show(e,t,n)}}function ke(e){e[re]=!0}function w(e){const n=e.currentTarget;if(n!=null&&n._ripple){if(window.clearTimeout(n._ripple.showTimer),e.type==="touchend"&&n._ripple.showTimerCommit){n._ripple.showTimerCommit(),n._ripple.showTimerCommit=null,n._ripple.showTimer=window.setTimeout(()=>{w(e)});return}window.setTimeout(()=>{n._ripple&&(n._ripple.touched=!1)}),X.hide(n)}}function qe(e){const n=e.currentTarget;n!=null&&n._ripple&&(n._ripple.showTimerCommit&&(n._ripple.showTimerCommit=null),window.clearTimeout(n._ripple.showTimer))}let W=!1;function Ge(e){!W&&(e.keyCode===Ce.enter||e.keyCode===Ce.space)&&(W=!0,D(e))}function Ke(e){W=!1,w(e)}function Ue(e){W&&(W=!1,w(e))}function Ye(e,n,t){const{value:s,modifiers:o}=n,a=Fe(s);if(a||X.hide(e),e._ripple=e._ripple??{},e._ripple.enabled=a,e._ripple.centered=o.center,e._ripple.circle=o.circle,Rt(s)&&s.class&&(e._ripple.class=s.class),a&&!t){if(o.stop){e.addEventListener("touchstart",ke,{passive:!0}),e.addEventListener("mousedown",ke);return}e.addEventListener("touchstart",D,{passive:!0}),e.addEventListener("touchend",w,{passive:!0}),e.addEventListener("touchmove",qe,{passive:!0}),e.addEventListener("touchcancel",w),e.addEventListener("mousedown",D),e.addEventListener("mouseup",w),e.addEventListener("mouseleave",w),e.addEventListener("keydown",Ge),e.addEventListener("keyup",Ke),e.addEventListener("blur",Ue),e.addEventListener("dragstart",w,{passive:!0})}else!a&&t&&Xe(e)}function Xe(e){e.removeEventListener("mousedown",D),e.removeEventListener("touchstart",D),e.removeEventListener("touchend",w),e.removeEventListener("touchmove",qe),e.removeEventListener("touchcancel",w),e.removeEventListener("mouseup",w),e.removeEventListener("mouseleave",w),e.removeEventListener("keydown",Ge),e.removeEventListener("keyup",Ke),e.removeEventListener("dragstart",w),e.removeEventListener("blur",Ue)}function an(e,n){Ye(e,n,!1)}function on(e){delete e._ripple,Xe(e)}function rn(e,n){if(n.value===n.oldValue)return;const t=Fe(n.oldValue);Ye(e,n,t)}const Zn={mounted:an,unmounted:on,updated:rn};const Je=(()=>Z.reduce((e,n)=>(e[n]={type:[Boolean,String,Number],default:!1},e),{}))(),Ze=(()=>Z.reduce((e,n)=>{const t="offset"+J(n);return e[t]={type:[String,Number],default:null},e},{}))(),Qe=(()=>Z.reduce((e,n)=>{const t="order"+J(n);return e[t]={type:[String,Number],default:null},e},{}))(),Ie={col:Object.keys(Je),offset:Object.keys(Ze),order:Object.keys(Qe)};function ln(e,n,t){let s=e;if(!(t==null||t===!1)){if(n){const o=n.replace(e,"");s+=`-${o}`}return e==="col"&&(s="v-"+s),e==="col"&&(t===""||t===!0)||(s+=`-${t}`),s.toLowerCase()}}const un=["auto","start","end","center","baseline","stretch"],cn=y({cols:{type:[Boolean,String,Number],default:!1},...Je,offset:{type:[String,Number],default:null},...Ze,order:{type:[String,Number],default:null},...Qe,alignSelf:{type:String,default:null,validator:e=>un.includes(e)},...T(),...ee()},"VCol"),Qn=I()({name:"VCol",props:cn(),setup(e,n){let{slots:t}=n;const s=d(()=>{const o=[];let a;for(a in Ie)Ie[a].forEach(r=>{const u=e[r],c=ln(a,r,u);c&&o.push(c)});const i=o.some(r=>r.startsWith("v-col-"));return o.push({"v-col":!i||!e.cols,[`v-col-${e.cols}`]:e.cols,[`offset-${e.offset}`]:e.offset,[`order-${e.order}`]:e.order,[`align-self-${e.alignSelf}`]:e.alignSelf}),o});return()=>{var o;return z(e.tag,{class:[s.value,e.class],style:e.style},(o=t.default)==null?void 0:o.call(t))}}}),ve=["start","end","center"],et=["space-between","space-around","space-evenly"];function me(e,n){return Z.reduce((t,s)=>{const o=e+J(s);return t[o]=n(),t},{})}const dn=[...ve,"baseline","stretch"],tt=e=>dn.includes(e),nt=me("align",()=>({type:String,default:null,validator:tt})),fn=[...ve,...et],st=e=>fn.includes(e),at=me("justify",()=>({type:String,default:null,validator:st})),vn=[...ve,...et,"stretch"],ot=e=>vn.includes(e),it=me("alignContent",()=>({type:String,default:null,validator:ot})),Pe={align:Object.keys(nt),justify:Object.keys(at),alignContent:Object.keys(it)},mn={align:"align",justify:"justify",alignContent:"align-content"};function gn(e,n,t){let s=mn[e];if(t!=null){if(n){const o=n.replace(e,"");s+=`-${o}`}return s+=`-${t}`,s.toLowerCase()}}const yn=y({dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:tt},...nt,justify:{type:String,default:null,validator:st},...at,alignContent:{type:String,default:null,validator:ot},...it,...T(),...ee()},"VRow"),es=I()({name:"VRow",props:yn(),setup(e,n){let{slots:t}=n;const s=d(()=>{const o=[];let a;for(a in Pe)Pe[a].forEach(i=>{const r=e[i],u=gn(a,i,r);u&&o.push(u)});return o.push({"v-row--no-gutters":e.noGutters,"v-row--dense":e.dense,[`align-${e.align}`]:e.align,[`justify-${e.justify}`]:e.justify,[`align-content-${e.alignContent}`]:e.alignContent}),o});return()=>{var o;return z(e.tag,{class:["v-row",s.value,e.class],style:e.style},(o=t.default)==null?void 0:o.call(t))}}}),pn=y({disabled:Boolean,group:Boolean,hideOnLeave:Boolean,leaveAbsolute:Boolean,mode:String,origin:String},"transition");function x(e,n,t){return I()({name:e,props:pn({mode:t,origin:n}),setup(s,o){let{slots:a}=o;const i={onBeforeEnter(r){s.origin&&(r.style.transformOrigin=s.origin)},onLeave(r){if(s.leaveAbsolute){const{offsetTop:u,offsetLeft:c,offsetWidth:v,offsetHeight:h}=r;r._transitionInitialStyles={position:r.style.position,top:r.style.top,left:r.style.left,width:r.style.width,height:r.style.height},r.style.position="absolute",r.style.top=`${u}px`,r.style.left=`${c}px`,r.style.width=`${v}px`,r.style.height=`${h}px`}s.hideOnLeave&&r.style.setProperty("display","none","important")},onAfterLeave(r){if(s.leaveAbsolute&&(r!=null&&r._transitionInitialStyles)){const{position:u,top:c,left:v,width:h,height:S}=r._transitionInitialStyles;delete r._transitionInitialStyles,r.style.position=u||"",r.style.top=c||"",r.style.left=v||"",r.style.width=h||"",r.style.height=S||""}}};return()=>{const r=s.group?Tt:de;return z(r,{name:s.disabled?"":e,css:!s.disabled,...s.group?void 0:{mode:s.mode},...s.disabled?{}:i},a.default)}}})}function rt(e,n){let t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:"in-out";return I()({name:e,props:{mode:{type:String,default:t},disabled:Boolean},setup(s,o){let{slots:a}=o;return()=>z(de,{name:s.disabled?"":e,css:!s.disabled,...s.disabled?{}:n},a.default)}})}function lt(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"";const t=(arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1)?"width":"height",s=Te(`offset-${t}`);return{onBeforeEnter(i){i._parent=i.parentNode,i._initialStyle={transition:i.style.transition,overflow:i.style.overflow,[t]:i.style[t]}},onEnter(i){const r=i._initialStyle;i.style.setProperty("transition","none","important"),i.style.overflow="hidden";const u=`${i[s]}px`;i.style[t]="0",i.offsetHeight,i.style.transition=r.transition,e&&i._parent&&i._parent.classList.add(e),requestAnimationFrame(()=>{i.style[t]=u})},onAfterEnter:a,onEnterCancelled:a,onLeave(i){i._initialStyle={transition:"",overflow:i.style.overflow,[t]:i.style[t]},i.style.overflow="hidden",i.style[t]=`${i[s]}px`,i.offsetHeight,requestAnimationFrame(()=>i.style[t]="0")},onAfterLeave:o,onLeaveCancelled:o};function o(i){e&&i._parent&&i._parent.classList.remove(e),a(i)}function a(i){const r=i._initialStyle[t];i.style.overflow=i._initialStyle.overflow,r!=null&&(i.style[t]=r),delete i._initialStyle}}x("fab-transition","center center","out-in");x("dialog-bottom-transition");x("dialog-top-transition");x("fade-transition");x("scale-transition");x("scroll-x-transition");x("scroll-x-reverse-transition");x("scroll-y-transition");x("scroll-y-reverse-transition");x("slide-x-transition");x("slide-x-reverse-transition");x("slide-y-transition");x("slide-y-reverse-transition");const ts=rt("expand-transition",lt());rt("expand-x-transition",lt("",!0));function hn(e){return{aspectStyles:d(()=>{const n=Number(e.aspectRatio);return n?{paddingBottom:String(1/n*100)+"%"}:void 0})}}const ut=y({aspectRatio:[String,Number],contentClass:String,inline:Boolean,...T(),...Qt()},"VResponsive"),Re=I()({name:"VResponsive",props:ut(),setup(e,n){let{slots:t}=n;const{aspectStyles:s}=hn(e),{dimensionStyles:o}=en(e);return Q(()=>{var a;return g("div",{class:["v-responsive",{"v-responsive--inline":e.inline},e.class],style:[o.value,e.style]},[g("div",{class:"v-responsive__sizer",style:s.value},null),(a=t.additional)==null?void 0:a.call(t),t.default&&g("div",{class:["v-responsive__content",e.contentClass]},[t.default()])])}),{}}}),Sn=y({transition:{type:[Boolean,String,Object],default:"fade-transition",validator:e=>e!==!0}},"transition"),K=(e,n)=>{let{slots:t}=n;const{transition:s,disabled:o,...a}=e,{component:i=de,...r}=typeof s=="object"?s:{};return z(i,Me(typeof s=="string"?{name:o?"":s}:r,a,{disabled:o}),t)};function bn(e,n){if(!He)return;const t=n.modifiers||{},s=n.value,{handler:o,options:a}=typeof s=="object"?s:{handler:s,options:{}},i=new IntersectionObserver(function(){var h;let r=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[],u=arguments.length>1?arguments[1]:void 0;const c=(h=e._observe)==null?void 0:h[n.instance.$.uid];if(!c)return;const v=r.some(S=>S.isIntersecting);o&&(!t.quiet||c.init)&&(!t.once||v||c.init)&&o(v,r,u),v&&t.once?ct(e,n):c.init=!0},a);e._observe=Object(e._observe),e._observe[n.instance.$.uid]={init:!1,observer:i},i.observe(e)}function ct(e,n){var s;const t=(s=e._observe)==null?void 0:s[n.instance.$.uid];t&&(t.observer.unobserve(e),delete e._observe[n.instance.$.uid])}const _n={mounted:bn,unmounted:ct},Cn=_n,wn=y({alt:String,cover:Boolean,eager:Boolean,gradient:String,lazySrc:String,options:{type:Object,default:()=>({root:void 0,rootMargin:void 0,threshold:void 0})},sizes:String,src:{type:[String,Object],default:""},srcset:String,...ut(),...T(),...Sn()},"VImg"),ns=I()({name:"VImg",directives:{intersect:Cn},props:wn(),emits:{loadstart:e=>!0,load:e=>!0,error:e=>!0},setup(e,n){let{emit:t,slots:s}=n;const o=R(""),a=H(),i=R(e.eager?"loading":"idle"),r=R(),u=R(),c=d(()=>e.src&&typeof e.src=="object"?{src:e.src.src,srcset:e.srcset||e.src.srcset,lazySrc:e.lazySrc||e.src.lazySrc,aspect:Number(e.aspectRatio||e.src.aspect||0)}:{src:e.src,srcset:e.srcset,lazySrc:e.lazySrc,aspect:Number(e.aspectRatio||0)}),v=d(()=>c.value.aspect||r.value/u.value||0);U(()=>e.src,()=>{h(i.value!=="idle")}),U(v,(l,f)=>{!l&&f&&a.value&&$(a.value)}),zt(()=>h());function h(l){if(!(e.eager&&l)&&!(He&&!l&&!e.eager)){if(i.value="loading",c.value.lazySrc){const f=new Image;f.src=c.value.lazySrc,$(f,null)}c.value.src&&Vt(()=>{var f,m;if(t("loadstart",((f=a.value)==null?void 0:f.currentSrc)||c.value.src),(m=a.value)!=null&&m.complete){if(a.value.naturalWidth||_(),i.value==="error")return;v.value||$(a.value,null),S()}else v.value||$(a.value),P()})}}function S(){var l;P(),i.value="loaded",t("load",((l=a.value)==null?void 0:l.currentSrc)||c.value.src)}function _(){var l;i.value="error",t("error",((l=a.value)==null?void 0:l.currentSrc)||c.value.src)}function P(){const l=a.value;l&&(o.value=l.currentSrc||l.src)}let q=-1;function $(l){let f=arguments.length>1&&arguments[1]!==void 0?arguments[1]:100;const m=()=>{clearTimeout(q);const{naturalHeight:L,naturalWidth:E}=l;L||E?(r.value=E,u.value=L):!l.complete&&i.value==="loading"&&f!=null?q=window.setTimeout(m,f):(l.currentSrc.endsWith(".svg")||l.currentSrc.startsWith("data:image/svg+xml"))&&(r.value=1,u.value=1)};m()}const N=d(()=>({"v-img__img--cover":e.cover,"v-img__img--contain":!e.cover})),B=()=>{var m;if(!c.value.src||i.value==="idle")return null;const l=g("img",{class:["v-img__img",N.value],src:c.value.src,srcset:c.value.srcset,alt:e.alt,sizes:e.sizes,ref:a,onLoad:S,onError:_},null),f=(m=s.sources)==null?void 0:m.call(s);return g(K,{transition:e.transition,appear:!0},{default:()=>[we(f?g("picture",{class:"v-img__picture"},[f,l]):l,[[Bt,i.value==="loaded"]])]})},G=()=>g(K,{transition:e.transition},{default:()=>[c.value.lazySrc&&i.value!=="loaded"&&g("img",{class:["v-img__img","v-img__img--preload",N.value],src:c.value.lazySrc,alt:e.alt},null)]}),te=()=>s.placeholder?g(K,{transition:e.transition,appear:!0},{default:()=>[(i.value==="loading"||i.value==="error"&&!s.error)&&g("div",{class:"v-img__placeholder"},[s.placeholder()])]}):null,ne=()=>s.error?g(K,{transition:e.transition,appear:!0},{default:()=>[i.value==="error"&&g("div",{class:"v-img__error"},[s.error()])]}):null,p=()=>e.gradient?g("div",{class:"v-img__gradient",style:{backgroundImage:`linear-gradient(${e.gradient})`}},null):null,C=R(!1);{const l=U(v,f=>{f&&(requestAnimationFrame(()=>{requestAnimationFrame(()=>{C.value=!0})}),l())})}return Q(()=>{const[l]=Re.filterProps(e);return we(g(Re,Me({class:["v-img",{"v-img--booting":!C.value},e.class],style:[{width:b(e.width==="auto"?r.value:e.width)},e.style]},l,{aspectRatio:v.value,"aria-label":e.alt,role:e.alt?"img":void 0}),{additional:()=>g(je,null,[g(B,null,null),g(G,null,null),g(p,null,null),g(te,null,null),g(ne,null,null)]),default:s.default}),[[Nt("intersect"),{handler:h,options:e.options},null,{once:!0}]])}),{currentSrc:o,image:a,state:i,naturalWidth:r,naturalHeight:u}}});export{qn as A,Fn as B,kn as C,Mn as D,In as E,$n as F,es as G,Qn as H,ns as I,ts as J,Wt as K,En as L,Pn as M,K as N,Zn as R,Rn as V,T as a,Vn as b,Bn as c,jn as d,ee as e,Dn as f,zn as g,An as h,On as i,Q as j,Xt as k,Jt as l,Tn as m,Gt as n,Mt as o,Qt as p,Gn as q,Un as r,Jn as s,Wn as t,Nn as u,en as v,Kn as w,Yn as x,Xn as y,Hn as z};
