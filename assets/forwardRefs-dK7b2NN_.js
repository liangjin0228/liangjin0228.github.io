import{c as nt,J as Ee,K as ae,M as ie,N as Se,O as pe,z as ot,u as rt,C as at,P as it,Q as st}from"./VContainer-DYArV39e.js";import{aa as Ne,ai as _e,aj as he,ak as We,p as z,m as $e,g as ge,d as P,al as lt,h as _,R as H,am as fe,s as Y,A as T,z as D,X as q,a8 as ye,an as $,ao as ct,U as we,i as W,ah as Oe,a9 as be,ap as Ve,aq as He,S as De,ar as Pe,as as ut,E as ft,Q as dt,y as Ie,L as vt,at as mt,au as ht,b as gt,P as yt,c as wt,J as bt,t as xt,af as Et,f as St,av as pt,M as Ot,T as Pt,N as Ct,F as At}from"./index-DVFVRFSo.js";import{E as Rt,F as kt,t as Lt,i as Tt,M as Mt}from"./VSwitch-CwMV0oUF.js";class j{constructor(n){let{x:t,y:r,width:o,height:a}=n;this.x=t,this.y=r,this.width=o,this.height=a}get top(){return this.y}get bottom(){return this.y+this.height}get left(){return this.x}get right(){return this.x+this.width}}function Ce(e,n){return{x:{before:Math.max(0,n.left-e.left),after:Math.max(0,e.right-n.right)},y:{before:Math.max(0,n.top-e.top),after:Math.max(0,e.bottom-n.bottom)}}}function je(e){return Array.isArray(e)?new j({x:e[0],y:e[1],width:0,height:0}):e.getBoundingClientRect()}function qe(e){const n=e.getBoundingClientRect(),t=getComputedStyle(e),r=t.transform;if(r){let o,a,s,i,u;if(r.startsWith("matrix3d("))o=r.slice(9,-1).split(/, /),a=+o[0],s=+o[5],i=+o[12],u=+o[13];else if(r.startsWith("matrix("))o=r.slice(7,-1).split(/, /),a=+o[0],s=+o[3],i=+o[4],u=+o[5];else return new j(n);const c=t.transformOrigin,f=n.x-i-(1-a)*parseFloat(c),v=n.y-u-(1-s)*parseFloat(c.slice(c.indexOf(" ")+1)),g=a?n.width/a:e.offsetWidth+1,d=s?n.height/s:e.offsetHeight+1;return new j({x:f,y:v,width:g,height:d})}else return new j(n)}function G(e,n,t){if(typeof e.animate>"u")return{finished:Promise.resolve()};let r;try{r=e.animate(n,t)}catch{return{finished:Promise.resolve()}}return typeof r.finished>"u"&&(r.finished=new Promise(o=>{r.onfinish=()=>{o(r)}})),r}const Z=new WeakMap;function Bt(e,n){Object.keys(n).forEach(t=>{if(Ne(t)){const r=_e(t),o=Z.get(e);if(n[t]==null)o==null||o.forEach(a=>{const[s,i]=a;s===r&&(e.removeEventListener(r,i),o.delete(a))});else if(!o||![...o].some(a=>a[0]===r&&a[1]===n[t])){e.addEventListener(r,n[t]);const a=o||new Set;a.add([r,n[t]]),Z.has(e)||Z.set(e,a)}}else n[t]==null?e.removeAttribute(t):e.setAttribute(t,n[t])})}function Ft(e,n){Object.keys(n).forEach(t=>{if(Ne(t)){const r=_e(t),o=Z.get(e);o==null||o.forEach(a=>{const[s,i]=a;s===r&&(e.removeEventListener(r,i),o.delete(a))})}else e.removeAttribute(t)})}function ze(e){if(typeof e.getRootNode!="function"){for(;e.parentNode;)e=e.parentNode;return e!==document?null:document}const n=e.getRootNode();return n!==document&&n.getRootNode({composed:!0})!==document?null:n}const de="cubic-bezier(0.4, 0, 0.2, 1)",Nt="cubic-bezier(0.0, 0, 0.2, 1)",_t="cubic-bezier(0.4, 0, 1, 1)";function Wt(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;for(;e;){if(n?$t(e):xe(e))return e;e=e.parentElement}return document.scrollingElement}function te(e,n){const t=[];if(n&&e&&!n.contains(e))return t;for(;e&&(xe(e)&&t.push(e),e!==n);)e=e.parentElement;return t}function xe(e){if(!e||e.nodeType!==Node.ELEMENT_NODE)return!1;const n=window.getComputedStyle(e);return n.overflowY==="scroll"||n.overflowY==="auto"&&e.scrollHeight>e.clientHeight}function $t(e){if(!e||e.nodeType!==Node.ELEMENT_NODE)return!1;const n=window.getComputedStyle(e);return["scroll","auto"].includes(n.overflowY)}function Vt(e){for(;e;){if(window.getComputedStyle(e).position==="fixed")return!0;e=e.offsetParent}return!1}const Ye=he.reduce((e,n)=>(e[n]={type:[Boolean,String,Number],default:!1},e),{}),Xe=he.reduce((e,n)=>{const t="offset"+We(n);return e[t]={type:[String,Number],default:null},e},{}),Ke=he.reduce((e,n)=>{const t="order"+We(n);return e[t]={type:[String,Number],default:null},e},{}),Ae={col:Object.keys(Ye),offset:Object.keys(Xe),order:Object.keys(Ke)};function Ht(e,n,t){let r=e;if(!(t==null||t===!1)){if(n){const o=n.replace(e,"");r+=`-${o}`}return e==="col"&&(r="v-"+r),e==="col"&&(t===""||t===!0)||(r+=`-${t}`),r.toLowerCase()}}const Dt=["auto","start","end","center","baseline","stretch"],It=z({cols:{type:[Boolean,String,Number],default:!1},...Ye,offset:{type:[String,Number],default:null},...Xe,order:{type:[String,Number],default:null},...Ke,alignSelf:{type:String,default:null,validator:e=>Dt.includes(e)},...$e(),...nt()},"VCol"),xn=ge()({name:"VCol",props:It(),setup(e,n){let{slots:t}=n;const r=P(()=>{const o=[];let a;for(a in Ae)Ae[a].forEach(i=>{const u=e[i],c=Ht(a,i,u);c&&o.push(c)});const s=o.some(i=>i.startsWith("v-col-"));return o.push({"v-col":!s||!e.cols,[`v-col-${e.cols}`]:e.cols,[`offset-${e.offset}`]:e.offset,[`order-${e.order}`]:e.order,[`align-self-${e.alignSelf}`]:e.alignSelf}),o});return()=>{var o;return lt(e.tag,{class:[r.value,e.class],style:e.style},(o=t.default)==null?void 0:o.call(t))}}}),jt=z({target:[Object,Array]},"v-dialog-transition"),En=ge()({name:"VDialogTransition",props:jt(),setup(e,n){let{slots:t}=n;const r={onBeforeEnter(o){o.style.pointerEvents="none",o.style.visibility="hidden"},async onEnter(o,a){var g;await new Promise(d=>requestAnimationFrame(d)),await new Promise(d=>requestAnimationFrame(d)),o.style.visibility="";const{x:s,y:i,sx:u,sy:c,speed:f}=ke(e.target,o),v=G(o,[{transform:`translate(${s}px, ${i}px) scale(${u}, ${c})`,opacity:0},{}],{duration:225*f,easing:Nt});(g=Re(o))==null||g.forEach(d=>{G(d,[{opacity:0},{opacity:0,offset:.33},{}],{duration:225*2*f,easing:de})}),v.finished.then(()=>a())},onAfterEnter(o){o.style.removeProperty("pointer-events")},onBeforeLeave(o){o.style.pointerEvents="none"},async onLeave(o,a){var g;await new Promise(d=>requestAnimationFrame(d));const{x:s,y:i,sx:u,sy:c,speed:f}=ke(e.target,o);G(o,[{},{transform:`translate(${s}px, ${i}px) scale(${u}, ${c})`,opacity:0}],{duration:125*f,easing:_t}).finished.then(()=>a()),(g=Re(o))==null||g.forEach(d=>{G(d,[{},{opacity:0,offset:.2},{opacity:0}],{duration:125*2*f,easing:de})})},onAfterLeave(o){o.style.removeProperty("pointer-events")}};return()=>e.target?_(fe,H({name:"dialog-transition"},r,{css:!1}),t):_(fe,{name:"dialog-transition"},t)}});function Re(e){var t;const n=(t=e.querySelector(":scope > .v-card, :scope > .v-sheet, :scope > .v-list"))==null?void 0:t.children;return n&&[...n]}function ke(e,n){const t=je(e),r=qe(n),[o,a]=getComputedStyle(n).transformOrigin.split(" ").map(k=>parseFloat(k)),[s,i]=getComputedStyle(n).getPropertyValue("--v-overlay-anchor-origin").split(" ");let u=t.left+t.width/2;s==="left"||i==="left"?u-=t.width/2:(s==="right"||i==="right")&&(u+=t.width/2);let c=t.top+t.height/2;s==="top"||i==="top"?c-=t.height/2:(s==="bottom"||i==="bottom")&&(c+=t.height/2);const f=t.width/r.width,v=t.height/r.height,g=Math.max(1,f,v),d=f/g||0,h=v/g||0,m=r.width*r.height/(window.innerWidth*window.innerHeight),E=m>.12?Math.min(1.5,(m-.12)*10+1):1;return{x:u-(o+r.left),y:c-(a+r.top),sx:d,sy:h,speed:E}}const qt=z({eager:Boolean},"lazy");function zt(e,n){const t=Y(!1),r=P(()=>t.value||e.eager||n.value);T(n,()=>t.value=!0);function o(){e.eager||(t.value=!1)}return{isBooted:t,hasContent:r,onAfterLeave:o}}function se(e,n){return{x:e.x+n.x,y:e.y+n.y}}function Yt(e,n){return{x:e.x-n.x,y:e.y-n.y}}function Le(e,n){if(e.side==="top"||e.side==="bottom"){const{side:t,align:r}=e,o=r==="left"?0:r==="center"?n.width/2:r==="right"?n.width:r,a=t==="top"?0:t==="bottom"?n.height:t;return se({x:o,y:a},n)}else if(e.side==="left"||e.side==="right"){const{side:t,align:r}=e,o=t==="left"?0:t==="right"?n.width:t,a=r==="top"?0:r==="center"?n.height/2:r==="bottom"?n.height:r;return se({x:o,y:a},n)}return se({x:n.width/2,y:n.height/2},n)}const Ue={static:Ut,connected:Jt},Xt=z({locationStrategy:{type:[String,Function],default:"static",validator:e=>typeof e=="function"||e in Ue},location:{type:String,default:"bottom"},origin:{type:String,default:"auto"},offset:[Number,String,Array]},"VOverlay-location-strategies");function Kt(e,n){const t=D({}),r=D();q&&ye(()=>!!(n.isActive.value&&e.locationStrategy),a=>{var s,i;T(()=>e.locationStrategy,a),$(()=>{window.removeEventListener("resize",o),r.value=void 0}),window.addEventListener("resize",o,{passive:!0}),typeof e.locationStrategy=="function"?r.value=(s=e.locationStrategy(n,e,t))==null?void 0:s.updateLocation:r.value=(i=Ue[e.locationStrategy](n,e,t))==null?void 0:i.updateLocation});function o(a){var s;(s=r.value)==null||s.call(r,a)}return{contentStyles:t,updateLocation:r}}function Ut(){}function Gt(e,n){n?e.style.removeProperty("left"):e.style.removeProperty("right");const t=qe(e);return n?t.x+=parseFloat(e.style.right||0):t.x-=parseFloat(e.style.left||0),t.y-=parseFloat(e.style.top||0),t}function Jt(e,n,t){(Array.isArray(e.target.value)||Vt(e.target.value))&&Object.assign(t.value,{position:"fixed",top:0,[e.isRtl.value?"right":"left"]:0});const{preferredAnchor:o,preferredOrigin:a}=ct(()=>{const h=Ee(n.location,e.isRtl.value),m=n.origin==="overlap"?h:n.origin==="auto"?ae(h):Ee(n.origin,e.isRtl.value);return h.side===m.side&&h.align===ie(m).align?{preferredAnchor:Se(h),preferredOrigin:Se(m)}:{preferredAnchor:h,preferredOrigin:m}}),[s,i,u,c]=["minWidth","minHeight","maxWidth","maxHeight"].map(h=>P(()=>{const m=parseFloat(n[h]);return isNaN(m)?1/0:m})),f=P(()=>{if(Array.isArray(n.offset))return n.offset;if(typeof n.offset=="string"){const h=n.offset.split(" ").map(parseFloat);return h.length<2&&h.push(0),h}return typeof n.offset=="number"?[n.offset,0]:[0,0]});let v=!1;const g=new ResizeObserver(()=>{v&&d()});T([e.target,e.contentEl],(h,m)=>{let[E,k]=h,[S,p]=m;S&&!Array.isArray(S)&&g.unobserve(S),E&&!Array.isArray(E)&&g.observe(E),p&&g.unobserve(p),k&&g.observe(k)},{immediate:!0}),$(()=>{g.disconnect()});function d(){if(v=!1,requestAnimationFrame(()=>v=!0),!e.target.value||!e.contentEl.value)return;const h=je(e.target.value),m=Gt(e.contentEl.value,e.isRtl.value),E=te(e.contentEl.value),k=12;E.length||(E.push(document.documentElement),e.contentEl.value.style.top&&e.contentEl.value.style.left||(m.x-=parseFloat(document.documentElement.style.getPropertyValue("--v-body-scroll-x")||0),m.y-=parseFloat(document.documentElement.style.getPropertyValue("--v-body-scroll-y")||0)));const S=E.reduce((O,x)=>{const y=x.getBoundingClientRect(),w=new j({x:x===document.documentElement?0:y.x,y:x===document.documentElement?0:y.y,width:x.clientWidth,height:x.clientHeight});return O?new j({x:Math.max(O.left,w.left),y:Math.max(O.top,w.top),width:Math.min(O.right,w.right)-Math.max(O.left,w.left),height:Math.min(O.bottom,w.bottom)-Math.max(O.top,w.top)}):w},void 0);S.x+=k,S.y+=k,S.width-=k*2,S.height-=k*2;let p={anchor:o.value,origin:a.value};function V(O){const x=new j(m),y=Le(O.anchor,h),w=Le(O.origin,x);let{x:F,y:M}=Yt(y,w);switch(O.anchor.side){case"top":M-=f.value[0];break;case"bottom":M+=f.value[0];break;case"left":F-=f.value[0];break;case"right":F+=f.value[0];break}switch(O.anchor.align){case"top":M-=f.value[1];break;case"bottom":M+=f.value[1];break;case"left":F-=f.value[1];break;case"right":F+=f.value[1];break}return x.x+=F,x.y+=M,x.width=Math.min(x.width,u.value),x.height=Math.min(x.height,c.value),{overflows:Ce(x,S),x:F,y:M}}let B=0,C=0;const l={x:0,y:0},A={x:!1,y:!1};let oe=-1;for(;!(oe++>10);){const{x:O,y:x,overflows:y}=V(p);B+=O,C+=x,m.x+=O,m.y+=x;{const w=pe(p.anchor),F=y.x.before||y.x.after,M=y.y.before||y.y.after;let X=!1;if(["x","y"].forEach(R=>{if(R==="x"&&F&&!A.x||R==="y"&&M&&!A.y){const N={anchor:{...p.anchor},origin:{...p.origin}},J=R==="x"?w==="y"?ie:ae:w==="y"?ae:ie;N.anchor=J(N.anchor),N.origin=J(N.origin);const{overflows:I}=V(N);(I[R].before<=y[R].before&&I[R].after<=y[R].after||I[R].before+I[R].after<(y[R].before+y[R].after)/2)&&(p=N,X=A[R]=!0)}}),X)continue}y.x.before&&(B+=y.x.before,m.x+=y.x.before),y.x.after&&(B-=y.x.after,m.x-=y.x.after),y.y.before&&(C+=y.y.before,m.y+=y.y.before),y.y.after&&(C-=y.y.after,m.y-=y.y.after);{const w=Ce(m,S);l.x=S.width-w.x.before-w.x.after,l.y=S.height-w.y.before-w.y.after,B+=w.x.before,m.x+=w.x.before,C+=w.y.before,m.y+=w.y.before}break}const re=pe(p.anchor);return Object.assign(t.value,{"--v-overlay-anchor-origin":`${p.anchor.side} ${p.anchor.align}`,transformOrigin:`${p.origin.side} ${p.origin.align}`,top:W(le(C)),left:e.isRtl.value?void 0:W(le(B)),right:e.isRtl.value?W(le(-B)):void 0,minWidth:W(re==="y"?Math.min(s.value,h.width):s.value),maxWidth:W(Te(Oe(l.x,s.value===1/0?0:s.value,u.value))),maxHeight:W(Te(Oe(l.y,i.value===1/0?0:i.value,c.value)))}),{available:l,contentBox:m}}return T(()=>[o.value,a.value,n.offset,n.minWidth,n.minHeight,n.maxWidth,n.maxHeight],()=>d()),we(()=>{const h=d();if(!h)return;const{available:m,contentBox:E}=h;E.height>m.y&&requestAnimationFrame(()=>{d(),requestAnimationFrame(()=>{d()})})}),{updateLocation:d}}function le(e){return Math.round(e*devicePixelRatio)/devicePixelRatio}function Te(e){return Math.ceil(e*devicePixelRatio)/devicePixelRatio}let ve=!0;const ne=[];function Qt(e){!ve||ne.length?(ne.push(e),me()):(ve=!1,e(),me())}let Me=-1;function me(){cancelAnimationFrame(Me),Me=requestAnimationFrame(()=>{const e=ne.shift();e&&e(),ne.length?me():ve=!0})}const ee={none:null,close:tn,block:nn,reposition:on},Zt=z({scrollStrategy:{type:[String,Function],default:"block",validator:e=>typeof e=="function"||e in ee}},"VOverlay-scroll-strategies");function en(e,n){if(!q)return;let t;be(async()=>{t==null||t.stop(),n.isActive.value&&e.scrollStrategy&&(t=Ve(),await new Promise(r=>setTimeout(r)),t.active&&t.run(()=>{var r;typeof e.scrollStrategy=="function"?e.scrollStrategy(n,e,t):(r=ee[e.scrollStrategy])==null||r.call(ee,n,e,t)}))}),$(()=>{t==null||t.stop()})}function tn(e){function n(t){e.isActive.value=!1}Ge(e.targetEl.value??e.contentEl.value,n)}function nn(e,n){var s;const t=(s=e.root.value)==null?void 0:s.offsetParent,r=[...new Set([...te(e.targetEl.value,n.contained?t:void 0),...te(e.contentEl.value,n.contained?t:void 0)])].filter(i=>!i.classList.contains("v-overlay-scroll-blocked")),o=window.innerWidth-document.documentElement.offsetWidth,a=(i=>xe(i)&&i)(t||document.documentElement);a&&e.root.value.classList.add("v-overlay--scroll-blocked"),r.forEach((i,u)=>{i.style.setProperty("--v-body-scroll-x",W(-i.scrollLeft)),i.style.setProperty("--v-body-scroll-y",W(-i.scrollTop)),i!==document.documentElement&&i.style.setProperty("--v-scrollbar-offset",W(o)),i.classList.add("v-overlay-scroll-blocked")}),$(()=>{r.forEach((i,u)=>{const c=parseFloat(i.style.getPropertyValue("--v-body-scroll-x")),f=parseFloat(i.style.getPropertyValue("--v-body-scroll-y")),v=i.style.scrollBehavior;i.style.scrollBehavior="auto",i.style.removeProperty("--v-body-scroll-x"),i.style.removeProperty("--v-body-scroll-y"),i.style.removeProperty("--v-scrollbar-offset"),i.classList.remove("v-overlay-scroll-blocked"),i.scrollLeft=-c,i.scrollTop=-f,i.style.scrollBehavior=v}),a&&e.root.value.classList.remove("v-overlay--scroll-blocked")})}function on(e,n,t){let r=!1,o=-1,a=-1;function s(i){Qt(()=>{var f,v;const u=performance.now();(v=(f=e.updateLocation).value)==null||v.call(f,i),r=(performance.now()-u)/(1e3/60)>2})}a=(typeof requestIdleCallback>"u"?i=>i():requestIdleCallback)(()=>{t.run(()=>{Ge(e.targetEl.value??e.contentEl.value,i=>{r?(cancelAnimationFrame(o),o=requestAnimationFrame(()=>{o=requestAnimationFrame(()=>{s(i)})})):s(i)})})}),$(()=>{typeof cancelIdleCallback<"u"&&cancelIdleCallback(a),cancelAnimationFrame(o)})}function Ge(e,n){const t=[document,...te(e)];t.forEach(r=>{r.addEventListener("scroll",n,{passive:!0})}),$(()=>{t.forEach(r=>{r.removeEventListener("scroll",n)})})}const rn=Symbol.for("vuetify:v-menu"),an=z({target:[String,Object],activator:[String,Object],activatorProps:{type:Object,default:()=>({})},openOnClick:{type:Boolean,default:void 0},openOnHover:Boolean,openOnFocus:{type:Boolean,default:void 0},closeOnContentClick:Boolean,...Rt()},"VOverlay-activator");function sn(e,n){let{isActive:t,isTop:r}=n;const o=He("useActivator"),a=D();let s=!1,i=!1,u=!0;const c=P(()=>e.openOnFocus||e.openOnFocus==null&&e.openOnHover),f=P(()=>e.openOnClick||e.openOnClick==null&&!e.openOnHover&&!c.value),{runOpenDelay:v,runCloseDelay:g}=kt(e,l=>{l===(e.openOnHover&&s||c.value&&i)&&!(e.openOnHover&&t.value&&!r.value)&&(t.value!==l&&(u=!0),t.value=l)}),d=D(),h={onClick:l=>{l.stopPropagation(),a.value=l.currentTarget||l.target,t.value||(d.value=[l.clientX,l.clientY]),t.value=!t.value},onMouseenter:l=>{var A;(A=l.sourceCapabilities)!=null&&A.firesTouchEvents||(s=!0,a.value=l.currentTarget||l.target,v())},onMouseleave:l=>{s=!1,g()},onFocus:l=>{ut(l.target,":focus-visible")!==!1&&(i=!0,l.stopPropagation(),a.value=l.currentTarget||l.target,v())},onBlur:l=>{i=!1,l.stopPropagation(),g()}},m=P(()=>{const l={};return f.value&&(l.onClick=h.onClick),e.openOnHover&&(l.onMouseenter=h.onMouseenter,l.onMouseleave=h.onMouseleave),c.value&&(l.onFocus=h.onFocus,l.onBlur=h.onBlur),l}),E=P(()=>{const l={};if(e.openOnHover&&(l.onMouseenter=()=>{s=!0,v()},l.onMouseleave=()=>{s=!1,g()}),c.value&&(l.onFocusin=()=>{i=!0,v()},l.onFocusout=()=>{i=!1,g()}),e.closeOnContentClick){const A=De(rn,null);l.onClick=()=>{t.value=!1,A==null||A.closeParents()}}return l}),k=P(()=>{const l={};return e.openOnHover&&(l.onMouseenter=()=>{u&&(s=!0,u=!1,v())},l.onMouseleave=()=>{s=!1,g()}),l});T(r,l=>{l&&(e.openOnHover&&!s&&(!c.value||!i)||c.value&&!i&&(!e.openOnHover||!s))&&(t.value=!1)}),T(t,l=>{l||setTimeout(()=>{d.value=void 0})},{flush:"post"});const S=Pe();be(()=>{S.value&&we(()=>{a.value=S.el})});const p=Pe(),V=P(()=>e.target==="cursor"&&d.value?d.value:p.value?p.el:Je(e.target,o)||a.value),B=P(()=>Array.isArray(V.value)?void 0:V.value);let C;return T(()=>!!e.activator,l=>{l&&q?(C=Ve(),C.run(()=>{ln(e,o,{activatorEl:a,activatorEvents:m})})):C&&C.stop()},{flush:"post",immediate:!0}),$(()=>{C==null||C.stop()}),{activatorEl:a,activatorRef:S,target:V,targetEl:B,targetRef:p,activatorEvents:m,contentEvents:E,scrimEvents:k}}function ln(e,n,t){let{activatorEl:r,activatorEvents:o}=t;T(()=>e.activator,(u,c)=>{if(c&&u!==c){const f=i(c);f&&s(f)}u&&we(()=>a())},{immediate:!0}),T(()=>e.activatorProps,()=>{a()}),$(()=>{s()});function a(){let u=arguments.length>0&&arguments[0]!==void 0?arguments[0]:i(),c=arguments.length>1&&arguments[1]!==void 0?arguments[1]:e.activatorProps;u&&Bt(u,H(o.value,c))}function s(){let u=arguments.length>0&&arguments[0]!==void 0?arguments[0]:i(),c=arguments.length>1&&arguments[1]!==void 0?arguments[1]:e.activatorProps;u&&Ft(u,H(o.value,c))}function i(){let u=arguments.length>0&&arguments[0]!==void 0?arguments[0]:e.activator;const c=Je(u,n);return r.value=(c==null?void 0:c.nodeType)===Node.ELEMENT_NODE?c:void 0,r.value}}function Je(e,n){var r,o;if(!e)return;let t;if(e==="parent"){let a=(o=(r=n==null?void 0:n.proxy)==null?void 0:r.$el)==null?void 0:o.parentNode;for(;a!=null&&a.hasAttribute("data-no-activator");)a=a.parentNode;t=a}else typeof e=="string"?t=document.querySelector(e):"$el"in e?t=e.$el:t=e;return t}function cn(){if(!q)return Y(!1);const{ssr:e}=ft();if(e){const n=Y(!1);return dt(()=>{n.value=!0}),n}else return Y(!0)}const Be=Symbol.for("vuetify:stack"),U=Ie([]);function un(e,n,t){const r=He("useStack"),o=!t,a=De(Be,void 0),s=Ie({activeChildren:new Set});vt(Be,s);const i=Y(+n.value);ye(e,()=>{var v;const f=(v=U.at(-1))==null?void 0:v[1];i.value=f?f+10:+n.value,o&&U.push([r.uid,i.value]),a==null||a.activeChildren.add(r.uid),$(()=>{if(o){const g=mt(U).findIndex(d=>d[0]===r.uid);U.splice(g,1)}a==null||a.activeChildren.delete(r.uid)})});const u=Y(!0);o&&be(()=>{var v;const f=((v=U.at(-1))==null?void 0:v[0])===r.uid;setTimeout(()=>u.value=f)});const c=P(()=>!s.activeChildren.size);return{globalTop:ht(u),localTop:c,stackStyles:P(()=>({zIndex:i.value}))}}function fn(e){return{teleportTarget:P(()=>{const t=e();if(t===!0||!q)return;const r=t===!1?document.body:typeof t=="string"?document.querySelector(t):t;if(r==null)return;let o=r.querySelector(":scope > .v-overlay-container");return o||(o=document.createElement("div"),o.className="v-overlay-container",r.appendChild(o)),o})}}function dn(){return!0}function Qe(e,n,t){if(!e||Ze(e,t)===!1)return!1;const r=ze(n);if(typeof ShadowRoot<"u"&&r instanceof ShadowRoot&&r.host===e.target)return!1;const o=(typeof t.value=="object"&&t.value.include||(()=>[]))();return o.push(n),!o.some(a=>a==null?void 0:a.contains(e.target))}function Ze(e,n){return(typeof n.value=="object"&&n.value.closeConditional||dn)(e)}function vn(e,n,t){const r=typeof t.value=="function"?t.value:t.value.handler;n._clickOutside.lastMousedownWasOutside&&Qe(e,n,t)&&setTimeout(()=>{Ze(e,t)&&r&&r(e)},0)}function Fe(e,n){const t=ze(e);n(document),typeof ShadowRoot<"u"&&t instanceof ShadowRoot&&n(t)}const mn={mounted(e,n){const t=o=>vn(o,e,n),r=o=>{e._clickOutside.lastMousedownWasOutside=Qe(o,e,n)};Fe(e,o=>{o.addEventListener("click",t,!0),o.addEventListener("mousedown",r,!0)}),e._clickOutside||(e._clickOutside={lastMousedownWasOutside:!1}),e._clickOutside[n.instance.$.uid]={onClick:t,onMousedown:r}},unmounted(e,n){e._clickOutside&&(Fe(e,t=>{var a;if(!t||!((a=e._clickOutside)!=null&&a[n.instance.$.uid]))return;const{onClick:r,onMousedown:o}=e._clickOutside[n.instance.$.uid];t.removeEventListener("click",r,!0),t.removeEventListener("mousedown",o,!0)}),delete e._clickOutside[n.instance.$.uid])}};function hn(e){const{modelValue:n,color:t,...r}=e;return _(fe,{name:"fade-transition",appear:!0},{default:()=>[e.modelValue&&_("div",H({class:["v-overlay__scrim",e.color.backgroundColorClasses.value],style:e.color.backgroundColorStyles.value},r),null)]})}const gn=z({absolute:Boolean,attach:[Boolean,String,Object],closeOnBack:{type:Boolean,default:!0},contained:Boolean,contentClass:null,contentProps:null,disabled:Boolean,opacity:[Number,String],noClickAnimation:Boolean,modelValue:Boolean,persistent:Boolean,scrim:{type:[Boolean,String],default:!0},zIndex:{type:[Number,String],default:2e3},...an(),...$e(),...ot(),...qt(),...Xt(),...Zt(),...gt(),...Lt()},"VOverlay"),Sn=ge()({name:"VOverlay",directives:{ClickOutside:mn},inheritAttrs:!1,props:{_disableGlobalStack:Boolean,...gn()},emits:{"click:outside":e=>!0,"update:modelValue":e=>!0,afterEnter:()=>!0,afterLeave:()=>!0},setup(e,n){let{slots:t,attrs:r,emit:o}=n;const a=yt(e,"modelValue"),s=P({get:()=>a.value,set:b=>{b&&e.disabled||(a.value=b)}}),{themeClasses:i}=wt(e),{rtlClasses:u,isRtl:c}=bt(),{hasContent:f,onAfterLeave:v}=zt(e,s),g=rt(P(()=>typeof e.scrim=="string"?e.scrim:null)),{globalTop:d,localTop:h,stackStyles:m}=un(s,xt(e,"zIndex"),e._disableGlobalStack),{activatorEl:E,activatorRef:k,target:S,targetEl:p,targetRef:V,activatorEvents:B,contentEvents:C,scrimEvents:l}=sn(e,{isActive:s,isTop:h}),{teleportTarget:A}=fn(()=>{var K;const b=e.attach||e.contained;if(b)return b;const L=(K=E==null?void 0:E.value)==null?void 0:K.getRootNode();return L instanceof ShadowRoot?L:!1}),{dimensionStyles:oe}=at(e),re=cn(),{scopeId:O}=Tt();T(()=>e.disabled,b=>{b&&(s.value=!1)});const x=D(),y=D(),w=D(),{contentStyles:F,updateLocation:M}=Kt(e,{isRtl:c,contentEl:w,target:S,isActive:s});en(e,{root:x,contentEl:w,targetEl:p,isActive:s,updateLocation:M});function X(b){o("click:outside",b),e.persistent?Q():s.value=!1}function R(b){return s.value&&d.value&&(!e.scrim||b.target===y.value)}q&&T(s,b=>{b?window.addEventListener("keydown",N):window.removeEventListener("keydown",N)},{immediate:!0}),Et(()=>{q&&window.removeEventListener("keydown",N)});function N(b){var L,K;b.key==="Escape"&&d.value&&(e.persistent?Q():(s.value=!1,(L=w.value)!=null&&L.contains(document.activeElement)&&((K=E.value)==null||K.focus())))}const J=it();ye(()=>e.closeOnBack,()=>{st(J,b=>{d.value&&s.value?(b(!1),e.persistent?Q():s.value=!1):b()})});const I=D();T(()=>s.value&&(e.absolute||e.contained)&&A.value==null,b=>{if(b){const L=Wt(x.value);L&&L!==document.scrollingElement&&(I.value=L.scrollTop)}});function Q(){e.noClickAnimation||w.value&&G(w.value,[{transformOrigin:"center"},{transform:"scale(1.03)"},{transformOrigin:"center"}],{duration:150,easing:de})}function et(){o("afterEnter")}function tt(){v(),o("afterLeave")}return St(()=>{var b;return _(At,null,[(b=t.activator)==null?void 0:b.call(t,{isActive:s.value,targetRef:V,props:H({ref:k},B.value,e.activatorProps)}),re.value&&f.value&&_(pt,{disabled:!A.value,to:A.value},{default:()=>[_("div",H({class:["v-overlay",{"v-overlay--absolute":e.absolute||e.contained,"v-overlay--active":s.value,"v-overlay--contained":e.contained},i.value,u.value,e.class],style:[m.value,{"--v-overlay-opacity":e.opacity,top:W(I.value)},e.style],ref:x},O,r),[_(hn,H({color:g,modelValue:s.value&&!!e.scrim,ref:y},l.value),null),_(Mt,{appear:!0,persisted:!0,transition:e.transition,target:S.value,onAfterEnter:et,onAfterLeave:tt},{default:()=>{var L;return[Ot(_("div",H({ref:w,class:["v-overlay__content",e.contentClass],style:[oe.value,F.value]},C.value,e.contentProps),[(L=t.default)==null?void 0:L.call(t,{isActive:s})]),[[Pt,s.value],[Ct("click-outside"),{handler:X,closeConditional:R,include:()=>[E.value]}]])]}})])]})])}),{activatorEl:E,scrimEl:y,target:S,animateClick:Q,contentEl:w,globalTop:d,localTop:h,updateLocation:M}}}),ce=Symbol("Forwarded refs");function ue(e,n){let t=e;for(;t;){const r=Reflect.getOwnPropertyDescriptor(t,n);if(r)return r;t=Object.getPrototypeOf(t)}}function pn(e){for(var n=arguments.length,t=new Array(n>1?n-1:0),r=1;r<n;r++)t[r-1]=arguments[r];return e[ce]=t,new Proxy(e,{get(o,a){if(Reflect.has(o,a))return Reflect.get(o,a);if(!(typeof a=="symbol"||a.startsWith("$")||a.startsWith("__"))){for(const s of t)if(s.value&&Reflect.has(s.value,a)){const i=Reflect.get(s.value,a);return typeof i=="function"?i.bind(s.value):i}}},has(o,a){if(Reflect.has(o,a))return!0;if(typeof a=="symbol"||a.startsWith("$")||a.startsWith("__"))return!1;for(const s of t)if(s.value&&Reflect.has(s.value,a))return!0;return!1},set(o,a,s){if(Reflect.has(o,a))return Reflect.set(o,a,s);if(typeof a=="symbol"||a.startsWith("$")||a.startsWith("__"))return!1;for(const i of t)if(i.value&&Reflect.has(i.value,a))return Reflect.set(i.value,a,s);return!1},getOwnPropertyDescriptor(o,a){var i;const s=Reflect.getOwnPropertyDescriptor(o,a);if(s)return s;if(!(typeof a=="symbol"||a.startsWith("$")||a.startsWith("__"))){for(const u of t){if(!u.value)continue;const c=ue(u.value,a)??("_"in u.value?ue((i=u.value._)==null?void 0:i.setupState,a):void 0);if(c)return c}for(const u of t){const c=u.value&&u.value[ce];if(!c)continue;const f=c.slice();for(;f.length;){const v=f.shift(),g=ue(v.value,a);if(g)return g;const d=v.value&&v.value[ce];d&&f.push(...d)}}}}})}export{xn as V,gn as a,En as b,rn as c,Sn as d,G as e,pn as f,qt as m,qe as n,de as s,zt as u};
