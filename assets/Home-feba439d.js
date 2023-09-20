import{V as We,b as Ie,a as Ve}from"./VRow-e3255383.js";import{K as qe,L as ze,g as ee,c as y,C as T,T as he,p as N,q as D,M as I,B as Pe,x as V,N as H,O as vt,d as k,P as te,e as M,v as ge,D as se,Q as je,R as Ye,S as mt,U as Ue,V as ht,s as U,G as Oe,y as gt,f as Ge,W as yt,X as pt,Y as wt,m as xt,A as Ce,b as bt,u as Et,t as St,Z as Pt,_ as Ot,$ as Ct,a0 as _t,F as ye,a1 as kt,o as Q,i as le,w as S,j as Vt,a as Xe,h as W,l as ne,H as Ke,I as Rt,z as At}from"./index-422d6fa1.js";import{u as Ze,V as pe,a as Qe,b as Je,c as we,d as et}from"./scopeId-6990e02a.js";import{p as Re,n as ce,o as ue,q as Ae,r as De,m as tt,s as Dt,t as Ft,e as Bt,v as Tt,w as Lt,u as _e,M as Mt,x as Ht,k as Nt,V as nt,y as $t,i as Wt}from"./VImg-44ddf1af.js";class G{constructor(n){let{x:t,y:a,width:o,height:r}=n;this.x=t,this.y=a,this.width=o,this.height=r}get top(){return this.y}get bottom(){return this.y+this.height}get left(){return this.x}get right(){return this.x+this.width}}function Fe(e,n){return{x:{before:Math.max(0,n.left-e.left),after:Math.max(0,e.right-n.right)},y:{before:Math.max(0,n.top-e.top),after:Math.max(0,e.bottom-n.bottom)}}}function ot(e){const n=e.getBoundingClientRect(),t=getComputedStyle(e),a=t.transform;if(a){let o,r,i,s,l;if(a.startsWith("matrix3d("))o=a.slice(9,-1).split(/, /),r=+o[0],i=+o[5],s=+o[12],l=+o[13];else if(a.startsWith("matrix("))o=a.slice(7,-1).split(/, /),r=+o[0],i=+o[3],s=+o[4],l=+o[5];else return new G(n);const c=t.transformOrigin,u=n.x-s-(1-r)*parseFloat(c),v=n.y-l-(1-i)*parseFloat(c.slice(c.indexOf(" ")+1)),d=r?n.width/r:e.offsetWidth+1,m=i?n.height/i:e.offsetHeight+1;return new G({x:u,y:v,width:d,height:m})}else return new G(n)}function J(e,n,t){if(typeof e.animate>"u")return{finished:Promise.resolve()};let a;try{a=e.animate(n,t)}catch{return{finished:Promise.resolve()}}return typeof a.finished>"u"&&(a.finished=new Promise(o=>{a.onfinish=()=>{o(a)}})),a}const oe=new WeakMap;function It(e,n){Object.keys(n).forEach(t=>{if(qe(t)){const a=ze(t),o=oe.get(e);if(n[t]==null)o==null||o.forEach(r=>{const[i,s]=r;i===a&&(e.removeEventListener(a,s),o.delete(r))});else if(!o||![...o].some(r=>r[0]===a&&r[1]===n[t])){e.addEventListener(a,n[t]);const r=o||new Set;r.add([a,n[t]]),oe.has(e)||oe.set(e,r)}}else n[t]==null?e.removeAttribute(t):e.setAttribute(t,n[t])})}function qt(e,n){Object.keys(n).forEach(t=>{if(qe(t)){const a=ze(t),o=oe.get(e);o==null||o.forEach(r=>{const[i,s]=r;i===a&&(e.removeEventListener(a,s),o.delete(r))})}else e.removeAttribute(t)})}function at(e){if(typeof e.getRootNode!="function"){for(;e.parentNode;)e=e.parentNode;return e!==document?null:document}const n=e.getRootNode();return n!==document&&n.getRootNode({composed:!0})!==document?null:n}const xe="cubic-bezier(0.4, 0, 0.2, 1)",zt="cubic-bezier(0.0, 0, 0.2, 1)",jt="cubic-bezier(0.4, 0, 1, 1)";function rt(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;for(;e;){if(n?Yt(e):ke(e))return e;e=e.parentElement}return document.scrollingElement}function re(e,n){const t=[];if(n&&e&&!n.contains(e))return t;for(;e&&(ke(e)&&t.push(e),e!==n);)e=e.parentElement;return t}function ke(e){if(!e||e.nodeType!==Node.ELEMENT_NODE)return!1;const n=window.getComputedStyle(e);return n.overflowY==="scroll"||n.overflowY==="auto"&&e.scrollHeight>e.clientHeight}function Yt(e){if(!e||e.nodeType!==Node.ELEMENT_NODE)return!1;const n=window.getComputedStyle(e);return["scroll","auto"].includes(n.overflowY)}function Ut(e){for(;e;){if(window.getComputedStyle(e).position==="fixed")return!0;e=e.offsetParent}return!1}const Gt=N({target:Object},"v-dialog-transition"),Xt=ee()({name:"VDialogTransition",props:Gt(),setup(e,n){let{slots:t}=n;const a={onBeforeEnter(o){o.style.pointerEvents="none",o.style.visibility="hidden"},async onEnter(o,r){var d;await new Promise(m=>requestAnimationFrame(m)),await new Promise(m=>requestAnimationFrame(m)),o.style.visibility="";const{x:i,y:s,sx:l,sy:c,speed:u}=Te(e.target,o),v=J(o,[{transform:`translate(${i}px, ${s}px) scale(${l}, ${c})`,opacity:0},{}],{duration:225*u,easing:zt});(d=Be(o))==null||d.forEach(m=>{J(m,[{opacity:0},{opacity:0,offset:.33},{}],{duration:225*2*u,easing:xe})}),v.finished.then(()=>r())},onAfterEnter(o){o.style.removeProperty("pointer-events")},onBeforeLeave(o){o.style.pointerEvents="none"},async onLeave(o,r){var d;await new Promise(m=>requestAnimationFrame(m));const{x:i,y:s,sx:l,sy:c,speed:u}=Te(e.target,o);J(o,[{},{transform:`translate(${i}px, ${s}px) scale(${l}, ${c})`,opacity:0}],{duration:125*u,easing:jt}).finished.then(()=>r()),(d=Be(o))==null||d.forEach(m=>{J(m,[{},{opacity:0,offset:.2},{opacity:0}],{duration:125*2*u,easing:xe})})},onAfterLeave(o){o.style.removeProperty("pointer-events")}};return()=>e.target?y(he,T({name:"dialog-transition"},a,{css:!1}),t):y(he,{name:"dialog-transition"},t)}});function Be(e){var t;const n=(t=e.querySelector(":scope > .v-card, :scope > .v-sheet, :scope > .v-list"))==null?void 0:t.children;return n&&[...n]}function Te(e,n){const t=e.getBoundingClientRect(),a=ot(n),[o,r]=getComputedStyle(n).transformOrigin.split(" ").map(x=>parseFloat(x)),[i,s]=getComputedStyle(n).getPropertyValue("--v-overlay-anchor-origin").split(" ");let l=t.left+t.width/2;i==="left"||s==="left"?l-=t.width/2:(i==="right"||s==="right")&&(l+=t.width/2);let c=t.top+t.height/2;i==="top"||s==="top"?c-=t.height/2:(i==="bottom"||s==="bottom")&&(c+=t.height/2);const u=t.width/a.width,v=t.height/a.height,d=Math.max(1,u,v),m=u/d||0,g=v/d||0,h=a.width*a.height/(window.innerWidth*window.innerHeight),O=h>.12?Math.min(1.5,(h-.12)*10+1):1;return{x:l-(o+a.left),y:c-(r+a.top),sx:m,sy:g,speed:O}}const Kt="/assets/home-background-banner-2a8fd07d.jpg",Zt="/assets/National_Taiwan_Normal_University_logo.svg-c8ea965b.png",Qt="/assets/foonyewlogo-fec8ab2e.png",Jt="/assets/ocsaLogo-5cd49fe9.png",en="/assets/GraduationPromParty-41ac0172.png",tn="/assets/msa-bfdca77e.png";function fe(e,n){return{x:e.x+n.x,y:e.y+n.y}}function nn(e,n){return{x:e.x-n.x,y:e.y-n.y}}function Le(e,n){if(e.side==="top"||e.side==="bottom"){const{side:t,align:a}=e,o=a==="left"?0:a==="center"?n.width/2:a==="right"?n.width:a,r=t==="top"?0:t==="bottom"?n.height:t;return fe({x:o,y:r},n)}else if(e.side==="left"||e.side==="right"){const{side:t,align:a}=e,o=t==="left"?0:t==="right"?n.width:t,r=a==="top"?0:a==="center"?n.height/2:a==="bottom"?n.height:a;return fe({x:o,y:r},n)}return fe({x:n.width/2,y:n.height/2},n)}const it={static:rn,connected:ln},on=N({locationStrategy:{type:[String,Function],default:"static",validator:e=>typeof e=="function"||e in it},location:{type:String,default:"bottom"},origin:{type:String,default:"auto"},offset:[Number,String,Array]},"VOverlay-location-strategies");function an(e,n){const t=D({}),a=D();I&&(Pe(()=>!!(n.isActive.value&&e.locationStrategy),r=>{var i,s;V(()=>e.locationStrategy,r),H(()=>{a.value=void 0}),typeof e.locationStrategy=="function"?a.value=(i=e.locationStrategy(n,e,t))==null?void 0:i.updateLocation:a.value=(s=it[e.locationStrategy](n,e,t))==null?void 0:s.updateLocation}),window.addEventListener("resize",o,{passive:!0}),H(()=>{window.removeEventListener("resize",o),a.value=void 0}));function o(r){var i;(i=a.value)==null||i.call(a,r)}return{contentStyles:t,updateLocation:a}}function rn(){}function sn(e,n){n?e.style.removeProperty("left"):e.style.removeProperty("right");const t=ot(e);return n?t.x+=parseFloat(e.style.right||0):t.x-=parseFloat(e.style.left||0),t.y-=parseFloat(e.style.top||0),t}function ln(e,n,t){Ut(e.activatorEl.value)&&Object.assign(t.value,{position:"fixed",top:0,[e.isRtl.value?"right":"left"]:0});const{preferredAnchor:o,preferredOrigin:r}=vt(()=>{const g=Re(n.location,e.isRtl.value),h=n.origin==="overlap"?g:n.origin==="auto"?ce(g):Re(n.origin,e.isRtl.value);return g.side===h.side&&g.align===ue(h).align?{preferredAnchor:Ae(g),preferredOrigin:Ae(h)}:{preferredAnchor:g,preferredOrigin:h}}),[i,s,l,c]=["minWidth","minHeight","maxWidth","maxHeight"].map(g=>k(()=>{const h=parseFloat(n[g]);return isNaN(h)?1/0:h})),u=k(()=>{if(Array.isArray(n.offset))return n.offset;if(typeof n.offset=="string"){const g=n.offset.split(" ").map(parseFloat);return g.length<2&&g.push(0),g}return typeof n.offset=="number"?[n.offset,0]:[0,0]});let v=!1;const d=new ResizeObserver(()=>{v&&m()});V([e.activatorEl,e.contentEl],(g,h)=>{let[O,x]=g,[b,f]=h;b&&d.unobserve(b),O&&d.observe(O),f&&d.unobserve(f),x&&d.observe(x)},{immediate:!0}),H(()=>{d.disconnect()});function m(){if(v=!1,requestAnimationFrame(()=>{requestAnimationFrame(()=>v=!0)}),!e.activatorEl.value||!e.contentEl.value)return;const g=e.activatorEl.value.getBoundingClientRect(),h=sn(e.contentEl.value,e.isRtl.value),O=re(e.contentEl.value),x=12;O.length||(O.push(document.documentElement),e.contentEl.value.style.top&&e.contentEl.value.style.left||(h.x-=parseFloat(document.documentElement.style.getPropertyValue("--v-body-scroll-x")||0),h.y-=parseFloat(document.documentElement.style.getPropertyValue("--v-body-scroll-y")||0)));const b=O.reduce((C,P)=>{const p=P.getBoundingClientRect(),E=new G({x:P===document.documentElement?0:p.x,y:P===document.documentElement?0:p.y,width:P.clientWidth,height:P.clientHeight});return C?new G({x:Math.max(C.left,E.left),y:Math.max(C.top,E.top),width:Math.min(C.right,E.right)-Math.max(C.left,E.left),height:Math.min(C.bottom,E.bottom)-Math.max(C.top,E.top)}):E},void 0);b.x+=x,b.y+=x,b.width-=x*2,b.height-=x*2;let f={anchor:o.value,origin:r.value};function R(C){const P=new G(h),p=Le(C.anchor,g),E=Le(C.origin,P);let{x:B,y:L}=nn(p,E);switch(C.anchor.side){case"top":L-=u.value[0];break;case"bottom":L+=u.value[0];break;case"left":B-=u.value[0];break;case"right":B+=u.value[0];break}switch(C.anchor.align){case"top":L-=u.value[1];break;case"bottom":L+=u.value[1];break;case"left":B-=u.value[1];break;case"right":B+=u.value[1];break}return P.x+=B,P.y+=L,P.width=Math.min(P.width,l.value),P.height=Math.min(P.height,c.value),{overflows:Fe(P,b),x:B,y:L}}let F=0,q=0;const z={x:0,y:0},X={x:!1,y:!1};let K=-1;for(;!(K++>10);){const{x:C,y:P,overflows:p}=R(f);F+=C,q+=P,h.x+=C,h.y+=P;{const E=De(f.anchor),B=p.x.before||p.x.after,L=p.y.before||p.y.after;let Y=!1;if(["x","y"].forEach(_=>{if(_==="x"&&B&&!X.x||_==="y"&&L&&!X.y){const w={anchor:{...f.anchor},origin:{...f.origin}},A=_==="x"?E==="y"?ue:ce:E==="y"?ce:ue;w.anchor=A(w.anchor),w.origin=A(w.origin);const{overflows:j}=R(w);(j[_].before<=p[_].before&&j[_].after<=p[_].after||j[_].before+j[_].after<(p[_].before+p[_].after)/2)&&(f=w,Y=X[_]=!0)}}),Y)continue}p.x.before&&(F+=p.x.before,h.x+=p.x.before),p.x.after&&(F-=p.x.after,h.x-=p.x.after),p.y.before&&(q+=p.y.before,h.y+=p.y.before),p.y.after&&(q-=p.y.after,h.y-=p.y.after);{const E=Fe(h,b);z.x=b.width-E.x.before-E.x.after,z.y=b.height-E.y.before-E.y.after,F+=E.x.before,h.x+=E.x.before,q+=E.y.before,h.y+=E.y.before}break}const $=De(f.anchor);return Object.assign(t.value,{"--v-overlay-anchor-origin":`${f.anchor.side} ${f.anchor.align}`,transformOrigin:`${f.origin.side} ${f.origin.align}`,top:M(de(q)),left:e.isRtl.value?void 0:M(de(F)),right:e.isRtl.value?M(de(-F)):void 0,minWidth:M($==="y"?Math.min(i.value,g.width):i.value),maxWidth:M(Me(ge(z.x,i.value===1/0?0:i.value,l.value))),maxHeight:M(Me(ge(z.y,s.value===1/0?0:s.value,c.value)))}),{available:z,contentBox:h}}return V(()=>[o.value,r.value,n.offset,n.minWidth,n.minHeight,n.maxWidth,n.maxHeight],()=>m()),te(()=>{const g=m();if(!g)return;const{available:h,contentBox:O}=g;O.height>h.y&&requestAnimationFrame(()=>{m(),requestAnimationFrame(()=>{m()})})}),{updateLocation:m}}function de(e){return Math.round(e*devicePixelRatio)/devicePixelRatio}function Me(e){return Math.ceil(e*devicePixelRatio)/devicePixelRatio}let be=!0;const ie=[];function cn(e){!be||ie.length?(ie.push(e),Ee()):(be=!1,e(),Ee())}let He=-1;function Ee(){cancelAnimationFrame(He),He=requestAnimationFrame(()=>{const e=ie.shift();e&&e(),ie.length?Ee():be=!0})}const ae={none:null,close:dn,block:vn,reposition:mn},un=N({scrollStrategy:{type:[String,Function],default:"block",validator:e=>typeof e=="function"||e in ae}},"VOverlay-scroll-strategies");function fn(e,n){if(!I)return;let t;se(async()=>{t==null||t.stop(),n.isActive.value&&e.scrollStrategy&&(t=je(),await te(),t.active&&t.run(()=>{var a;typeof e.scrollStrategy=="function"?e.scrollStrategy(n,e,t):(a=ae[e.scrollStrategy])==null||a.call(ae,n,e,t)}))}),H(()=>{t==null||t.stop()})}function dn(e){function n(t){e.isActive.value=!1}st(e.activatorEl.value??e.contentEl.value,n)}function vn(e,n){var i;const t=(i=e.root.value)==null?void 0:i.offsetParent,a=[...new Set([...re(e.activatorEl.value,n.contained?t:void 0),...re(e.contentEl.value,n.contained?t:void 0)])].filter(s=>!s.classList.contains("v-overlay-scroll-blocked")),o=window.innerWidth-document.documentElement.offsetWidth,r=(s=>ke(s)&&s)(t||document.documentElement);r&&e.root.value.classList.add("v-overlay--scroll-blocked"),a.forEach((s,l)=>{s.style.setProperty("--v-body-scroll-x",M(-s.scrollLeft)),s.style.setProperty("--v-body-scroll-y",M(-s.scrollTop)),s!==document.documentElement&&s.style.setProperty("--v-scrollbar-offset",M(o)),s.classList.add("v-overlay-scroll-blocked")}),H(()=>{a.forEach((s,l)=>{const c=parseFloat(s.style.getPropertyValue("--v-body-scroll-x")),u=parseFloat(s.style.getPropertyValue("--v-body-scroll-y"));s.style.removeProperty("--v-body-scroll-x"),s.style.removeProperty("--v-body-scroll-y"),s.style.removeProperty("--v-scrollbar-offset"),s.classList.remove("v-overlay-scroll-blocked"),s.scrollLeft=-c,s.scrollTop=-u}),r&&e.root.value.classList.remove("v-overlay--scroll-blocked")})}function mn(e,n,t){let a=!1,o=-1,r=-1;function i(s){cn(()=>{var u,v;const l=performance.now();(v=(u=e.updateLocation).value)==null||v.call(u,s),a=(performance.now()-l)/(1e3/60)>2})}r=(typeof requestIdleCallback>"u"?s=>s():requestIdleCallback)(()=>{t.run(()=>{st(e.activatorEl.value??e.contentEl.value,s=>{a?(cancelAnimationFrame(o),o=requestAnimationFrame(()=>{o=requestAnimationFrame(()=>{i(s)})})):i(s)})})}),H(()=>{typeof cancelIdleCallback<"u"&&cancelIdleCallback(r),cancelAnimationFrame(o)})}function st(e,n){const t=[document,...re(e)];t.forEach(a=>{a.addEventListener("scroll",n,{passive:!0})}),H(()=>{t.forEach(a=>{a.removeEventListener("scroll",n)})})}const hn=Symbol.for("vuetify:v-menu"),lt=N({closeDelay:[Number,String],openDelay:[Number,String]},"delay");function ct(e,n){const t={},a=o=>()=>{if(!I)return Promise.resolve(!0);const r=o==="openDelay";return t.closeDelay&&window.clearTimeout(t.closeDelay),delete t.closeDelay,t.openDelay&&window.clearTimeout(t.openDelay),delete t.openDelay,new Promise(i=>{const s=parseInt(e[o]??0,10);t[o]=window.setTimeout(()=>{n==null||n(r),i(r)},s)})};return{runCloseDelay:a("closeDelay"),runOpenDelay:a("openDelay")}}const gn=N({activator:[String,Object],activatorProps:{type:Object,default:()=>({})},openOnClick:{type:Boolean,default:void 0},openOnHover:Boolean,openOnFocus:{type:Boolean,default:void 0},closeOnContentClick:Boolean,...lt()},"VOverlay-activator");function yn(e,n){let{isActive:t,isTop:a}=n;const o=D();let r=!1,i=!1,s=!0;const l=k(()=>e.openOnFocus||e.openOnFocus==null&&e.openOnHover),c=k(()=>e.openOnClick||e.openOnClick==null&&!e.openOnHover&&!l.value),{runOpenDelay:u,runCloseDelay:v}=ct(e,f=>{f===(e.openOnHover&&r||l.value&&i)&&!(e.openOnHover&&t.value&&!a.value)&&(t.value!==f&&(s=!0),t.value=f)}),d={onClick:f=>{f.stopPropagation(),o.value=f.currentTarget||f.target,t.value=!t.value},onMouseenter:f=>{var R;(R=f.sourceCapabilities)!=null&&R.firesTouchEvents||(r=!0,o.value=f.currentTarget||f.target,u())},onMouseleave:f=>{r=!1,v()},onFocus:f=>{ht(f.target,":focus-visible")!==!1&&(i=!0,f.stopPropagation(),o.value=f.currentTarget||f.target,u())},onBlur:f=>{i=!1,f.stopPropagation(),v()}},m=k(()=>{const f={};return c.value&&(f.onClick=d.onClick),e.openOnHover&&(f.onMouseenter=d.onMouseenter,f.onMouseleave=d.onMouseleave),l.value&&(f.onFocus=d.onFocus,f.onBlur=d.onBlur),f}),g=k(()=>{const f={};if(e.openOnHover&&(f.onMouseenter=()=>{r=!0,u()},f.onMouseleave=()=>{r=!1,v()}),l.value&&(f.onFocusin=()=>{i=!0,u()},f.onFocusout=()=>{i=!1,v()}),e.closeOnContentClick){const R=Ye(hn,null);f.onClick=()=>{t.value=!1,R==null||R.closeParents()}}return f}),h=k(()=>{const f={};return e.openOnHover&&(f.onMouseenter=()=>{s&&(r=!0,s=!1,u())},f.onMouseleave=()=>{r=!1,v()}),f});V(a,f=>{f&&(e.openOnHover&&!r&&(!l.value||!i)||l.value&&!i&&(!e.openOnHover||!r))&&(t.value=!1)});const O=D();se(()=>{O.value&&te(()=>{o.value=mt(O.value)})});const x=Ue("useActivator");let b;return V(()=>!!e.activator,f=>{f&&I?(b=je(),b.run(()=>{pn(e,x,{activatorEl:o,activatorEvents:m})})):b&&b.stop()},{flush:"post",immediate:!0}),H(()=>{b==null||b.stop()}),{activatorEl:o,activatorRef:O,activatorEvents:m,contentEvents:g,scrimEvents:h}}function pn(e,n,t){let{activatorEl:a,activatorEvents:o}=t;V(()=>e.activator,(l,c)=>{if(c&&l!==c){const u=s(c);u&&i(u)}l&&te(()=>r())},{immediate:!0}),V(()=>e.activatorProps,()=>{r()}),H(()=>{i()});function r(){let l=arguments.length>0&&arguments[0]!==void 0?arguments[0]:s(),c=arguments.length>1&&arguments[1]!==void 0?arguments[1]:e.activatorProps;l&&It(l,T(o.value,c))}function i(){let l=arguments.length>0&&arguments[0]!==void 0?arguments[0]:s(),c=arguments.length>1&&arguments[1]!==void 0?arguments[1]:e.activatorProps;l&&qt(l,T(o.value,c))}function s(){var u,v;let l=arguments.length>0&&arguments[0]!==void 0?arguments[0]:e.activator,c;if(l)if(l==="parent"){let d=(v=(u=n==null?void 0:n.proxy)==null?void 0:u.$el)==null?void 0:v.parentNode;for(;d!=null&&d.hasAttribute("data-no-activator");)d=d.parentNode;c=d}else typeof l=="string"?c=document.querySelector(l):"$el"in l?c=l.$el:c=l;return a.value=(c==null?void 0:c.nodeType)===Node.ELEMENT_NODE?c:null,a.value}}function wn(){if(!I)return U(!1);const{ssr:e}=Oe();if(e){const n=U(!1);return gt(()=>{n.value=!0}),n}else return U(!0)}const xn=N({eager:Boolean},"lazy");function bn(e,n){const t=U(!1),a=k(()=>t.value||e.eager||n.value);V(n,()=>t.value=!0);function o(){e.eager||(t.value=!1)}return{isBooted:t,hasContent:a,onAfterLeave:o}}const Ne=Symbol.for("vuetify:stack"),Z=Ge([]);function En(e,n,t){const a=Ue("useStack"),o=!t,r=Ye(Ne,void 0),i=Ge({activeChildren:new Set});yt(Ne,i);const s=U(+n.value);Pe(e,()=>{var v;const u=(v=Z.at(-1))==null?void 0:v[1];s.value=u?u+10:+n.value,o&&Z.push([a.uid,s.value]),r==null||r.activeChildren.add(a.uid),H(()=>{if(o){const d=pt(Z).findIndex(m=>m[0]===a.uid);Z.splice(d,1)}r==null||r.activeChildren.delete(a.uid)})});const l=U(!0);o&&se(()=>{var v;const u=((v=Z.at(-1))==null?void 0:v[0])===a.uid;setTimeout(()=>l.value=u)});const c=k(()=>!i.activeChildren.size);return{globalTop:wt(l),localTop:c,stackStyles:k(()=>({zIndex:s.value}))}}function Sn(e){return{teleportTarget:k(()=>{const t=e.value;if(t===!0||!I)return;const a=t===!1?document.body:typeof t=="string"?document.querySelector(t):t;if(a==null)return;let o=a.querySelector(":scope > .v-overlay-container");return o||(o=document.createElement("div"),o.className="v-overlay-container",a.appendChild(o)),o})}}function Pn(){return!0}function ut(e,n,t){if(!e||ft(e,t)===!1)return!1;const a=at(n);if(typeof ShadowRoot<"u"&&a instanceof ShadowRoot&&a.host===e.target)return!1;const o=(typeof t.value=="object"&&t.value.include||(()=>[]))();return o.push(n),!o.some(r=>r==null?void 0:r.contains(e.target))}function ft(e,n){return(typeof n.value=="object"&&n.value.closeConditional||Pn)(e)}function On(e,n,t){const a=typeof t.value=="function"?t.value:t.value.handler;n._clickOutside.lastMousedownWasOutside&&ut(e,n,t)&&setTimeout(()=>{ft(e,t)&&a&&a(e)},0)}function $e(e,n){const t=at(e);n(document),typeof ShadowRoot<"u"&&t instanceof ShadowRoot&&n(t)}const Cn={mounted(e,n){const t=o=>On(o,e,n),a=o=>{e._clickOutside.lastMousedownWasOutside=ut(o,e,n)};$e(e,o=>{o.addEventListener("click",t,!0),o.addEventListener("mousedown",a,!0)}),e._clickOutside||(e._clickOutside={lastMousedownWasOutside:!1}),e._clickOutside[n.instance.$.uid]={onClick:t,onMousedown:a}},unmounted(e,n){e._clickOutside&&($e(e,t=>{var r;if(!t||!((r=e._clickOutside)!=null&&r[n.instance.$.uid]))return;const{onClick:a,onMousedown:o}=e._clickOutside[n.instance.$.uid];t.removeEventListener("click",a,!0),t.removeEventListener("mousedown",o,!0)}),delete e._clickOutside[n.instance.$.uid])}};function _n(e){const{modelValue:n,color:t,...a}=e;return y(he,{name:"fade-transition",appear:!0},{default:()=>[e.modelValue&&y("div",T({class:["v-overlay__scrim",e.color.backgroundColorClasses.value],style:e.color.backgroundColorStyles.value},a),null)]})}const dt=N({absolute:Boolean,attach:[Boolean,String,Object],closeOnBack:{type:Boolean,default:!0},contained:Boolean,contentClass:null,contentProps:null,disabled:Boolean,noClickAnimation:Boolean,modelValue:Boolean,persistent:Boolean,scrim:{type:[Boolean,String],default:!0},zIndex:{type:[Number,String],default:2e3},...gn(),...tt(),...Dt(),...xn(),...on(),...un(),...xt(),...Ft()},"VOverlay"),Se=ee()({name:"VOverlay",directives:{ClickOutside:Cn},inheritAttrs:!1,props:{_disableGlobalStack:Boolean,...dt()},emits:{"click:outside":e=>!0,"update:modelValue":e=>!0,afterLeave:()=>!0},setup(e,n){let{slots:t,attrs:a,emit:o}=n;const r=Ce(e,"modelValue"),i=k({get:()=>r.value,set:w=>{w&&e.disabled||(r.value=w)}}),{teleportTarget:s}=Sn(k(()=>e.attach||e.contained)),{themeClasses:l}=bt(e),{rtlClasses:c,isRtl:u}=Et(),{hasContent:v,onAfterLeave:d}=bn(e,i),m=Bt(k(()=>typeof e.scrim=="string"?e.scrim:null)),{globalTop:g,localTop:h,stackStyles:O}=En(i,St(e,"zIndex"),e._disableGlobalStack),{activatorEl:x,activatorRef:b,activatorEvents:f,contentEvents:R,scrimEvents:F}=yn(e,{isActive:i,isTop:h}),{dimensionStyles:q}=Tt(e),z=wn(),{scopeId:X}=Ze();V(()=>e.disabled,w=>{w&&(i.value=!1)});const K=D(),$=D(),{contentStyles:C,updateLocation:P}=an(e,{isRtl:u,contentEl:$,activatorEl:x,isActive:i});fn(e,{root:K,contentEl:$,activatorEl:x,isActive:i,updateLocation:P});function p(w){o("click:outside",w),e.persistent?_():i.value=!1}function E(){return i.value&&g.value}I&&V(i,w=>{w?window.addEventListener("keydown",B):window.removeEventListener("keydown",B)},{immediate:!0});function B(w){var A,j;w.key==="Escape"&&g.value&&(e.persistent?_():(i.value=!1,(A=$.value)!=null&&A.contains(document.activeElement)&&((j=x.value)==null||j.focus())))}const L=Lt();Pe(()=>e.closeOnBack,()=>{Ht(L,w=>{g.value&&i.value?(w(!1),e.persistent?_():i.value=!1):w()})});const Y=D();V(()=>i.value&&(e.absolute||e.contained)&&s.value==null,w=>{if(w){const A=rt(K.value);A&&A!==document.scrollingElement&&(Y.value=A.scrollTop)}});function _(){e.noClickAnimation||$.value&&J($.value,[{transformOrigin:"center"},{transform:"scale(1.03)"},{transformOrigin:"center"}],{duration:150,easing:xe})}return _e(()=>{var w;return y(ye,null,[(w=t.activator)==null?void 0:w.call(t,{isActive:i.value,props:T({ref:b},f.value,e.activatorProps)}),z.value&&v.value&&y(Pt,{disabled:!s.value,to:s.value},{default:()=>[y("div",T({class:["v-overlay",{"v-overlay--absolute":e.absolute||e.contained,"v-overlay--active":i.value,"v-overlay--contained":e.contained},l.value,c.value,e.class],style:[O.value,{top:M(Y.value)},e.style],ref:K},X,a),[y(_n,T({color:m,modelValue:i.value&&!!e.scrim},F.value),null),y(Mt,{appear:!0,persisted:!0,transition:e.transition,target:x.value,onAfterLeave:()=>{d(),o("afterLeave")}},{default:()=>{var A;return[Ot(y("div",T({ref:$,class:["v-overlay__content",e.contentClass],style:[q.value,C.value]},R.value,e.contentProps),[(A=t.default)==null?void 0:A.call(t,{isActive:i})]),[[Ct,i.value],[_t("click-outside"),{handler:p,closeConditional:E,include:()=>[x.value]}]])]}})])]})])}),{activatorEl:x,animateClick:_,contentEl:$,globalTop:g,localTop:h,updateLocation:P}}}),ve=Symbol("Forwarded refs");function me(e,n){let t=e;for(;t;){const a=Reflect.getOwnPropertyDescriptor(t,n);if(a)return a;t=Object.getPrototypeOf(t)}}function kn(e){for(var n=arguments.length,t=new Array(n>1?n-1:0),a=1;a<n;a++)t[a-1]=arguments[a];return e[ve]=t,new Proxy(e,{get(o,r){if(Reflect.has(o,r))return Reflect.get(o,r);if(!(typeof r=="symbol"||r.startsWith("__"))){for(const i of t)if(i.value&&Reflect.has(i.value,r)){const s=Reflect.get(i.value,r);return typeof s=="function"?s.bind(i.value):s}}},has(o,r){if(Reflect.has(o,r))return!0;if(typeof r=="symbol"||r.startsWith("__"))return!1;for(const i of t)if(i.value&&Reflect.has(i.value,r))return!0;return!1},set(o,r,i){if(Reflect.has(o,r))return Reflect.set(o,r,i);if(typeof r=="symbol"||r.startsWith("__"))return!1;for(const s of t)if(s.value&&Reflect.has(s.value,r))return Reflect.set(s.value,r,i);return!1},getOwnPropertyDescriptor(o,r){var s;const i=Reflect.getOwnPropertyDescriptor(o,r);if(i)return i;if(!(typeof r=="symbol"||r.startsWith("__"))){for(const l of t){if(!l.value)continue;const c=me(l.value,r)??("_"in l.value?me((s=l.value._)==null?void 0:s.setupState,r):void 0);if(c)return c}for(const l of t){const c=l.value&&l.value[ve];if(!c)continue;const u=c.slice();for(;u.length;){const v=u.shift(),d=me(v.value,r);if(d)return d;const m=v.value&&v.value[ve];m&&u.push(...m)}}}}})}const Vn=N({fullscreen:Boolean,retainFocus:{type:Boolean,default:!0},scrollable:Boolean,...dt({origin:"center center",scrollStrategy:"block",transition:{component:Xt},zIndex:2400})},"VDialog"),Rn=ee()({name:"VDialog",props:Vn(),emits:{"update:modelValue":e=>!0},setup(e,n){let{slots:t}=n;const a=Ce(e,"modelValue"),{scopeId:o}=Ze(),r=D();function i(l){var v,d;const c=l.relatedTarget,u=l.target;if(c!==u&&((v=r.value)!=null&&v.contentEl)&&((d=r.value)!=null&&d.globalTop)&&![document,r.value.contentEl].includes(u)&&!r.value.contentEl.contains(u)){const m=kt(r.value.contentEl);if(!m.length)return;const g=m[0],h=m[m.length-1];c===g?h.focus():g.focus()}}I&&V(()=>a.value&&e.retainFocus,l=>{l?document.addEventListener("focusin",i):document.removeEventListener("focusin",i)},{immediate:!0}),V(a,async l=>{var c,u;await te(),l?(c=r.value.contentEl)==null||c.focus({preventScroll:!0}):(u=r.value.activatorEl)==null||u.focus({preventScroll:!0})});const s=k(()=>T({"aria-haspopup":"dialog","aria-expanded":String(a.value)},e.activatorProps));return _e(()=>{const[l]=Se.filterProps(e);return y(Se,T({ref:r,class:["v-dialog",{"v-dialog--fullscreen":e.fullscreen,"v-dialog--scrollable":e.scrollable},e.class],style:e.style},l,{modelValue:a.value,"onUpdate:modelValue":c=>a.value=c,"aria-modal":"true",activatorProps:s.value,role:"dialog"},o),{activator:t.activator,default:function(){for(var c=arguments.length,u=new Array(c),v=0;v<c;v++)u[v]=arguments[v];return y(Nt,{root:"VDialog"},{default:()=>{var d;return[(d=t.default)==null?void 0:d.call(t,...u)]}})}})}),kn({},r)}}),An=N({disabled:Boolean,modelValue:{type:Boolean,default:void 0},...lt()},"VHover"),Dn=ee()({name:"VHover",props:An(),emits:{"update:modelValue":e=>!0},setup(e,n){let{slots:t}=n;const a=Ce(e,"modelValue"),{runOpenDelay:o,runCloseDelay:r}=ct(e,i=>!e.disabled&&(a.value=i));return()=>{var i;return(i=t.default)==null?void 0:i.call(t,{isHovering:a.value,props:{onMouseenter:o,onMouseleave:r}})}}}),Fn=["href"],Bn={methods:{changeScrollDirections(e){e.preventDefault();const n=e.deltaY,t=this.$refs.info.$el;t&&t.scrollBy({left:n})}}},Tn=Object.assign(Bn,{__name:"HomeCard",props:{experiences:Array},setup(e){const n=e,{mobile:t}=Oe(),a=D(!1),o=D({});function r(i){a.value=!0,o.value=i}return(i,s)=>(Q(),le(ye,null,[y(we,{style:{"max-width":"1280px"}},{default:S(()=>[y(We,{ref:"info",class:"flex-nowrap overflow-x-auto hide-scrollbar mt-15 justify-start",onWheel:i.changeScrollDirections},{default:S(()=>[(Q(!0),le(ye,null,Vt(n.experiences,l=>(Q(),Xe(Ie,{key:l.title},{default:S(()=>[y(Dn,null,{default:S(({isHovering:c,props:u})=>[y(pe,T({class:"mx-auto pa-5 rounded-xl","max-width":"344",width:"23rem",height:"35rem"},u),{default:S(()=>[y(nt,{src:l.img_path,"aspect-ratio":"1",height:"15rem",class:"ma-15 elevation"},null,8,["src"]),y(Qe,{class:"text-h5 text-primary text-wrap",style:{"line-height":"1.5"}},{default:S(()=>[W(ne(l.unit),1)]),_:2},1024),y(Je,{class:"text-h5 text-primary text-wrap",style:{"line-height":"1.5"}},{default:S(()=>[W(ne(l.title),1)]),_:2},1024),y(Se,{"model-value":c,contained:"",scrim:"#7986CB",class:"align-center justify-center"},{default:S(()=>[y(Ve,{class:"bg-green-lighten-1",onClick:v=>r(l)},{default:S(()=>[W("See more info")]),_:2},1032,["onClick"])]),_:2},1032,["model-value"])]),_:2},1040)]),_:2},1024)]),_:2},1024))),128))]),_:1},8,["onWheel"])]),_:1}),y(Rn,{modelValue:a.value,"onUpdate:modelValue":s[1]||(s[1]=l=>a.value=l),transition:"dialog-top-transition",persistent:""},{default:S(()=>[y(pe,{width:Ke(t)?"80vw":"50vw",class:"ma-auto rounded-lg",style:{"max-width":"720px"}},{default:S(()=>[y(et,{class:"text-h5 h-75"},{default:S(()=>[W(ne(o.value.content)+" ",1),o.value.link?(Q(),le("a",{key:0,href:o.value.link},ne(o.value.link),9,Fn)):Rt("",!0)]),_:1}),y(Ve,{class:"bg-green-lighten-1",onClick:s[0]||(s[0]=l=>a.value=!1)},{default:S(()=>[W("close")]),_:1})]),_:1},8,["width"])]),_:1},8,["modelValue"])],64))}});function Ln(e){return Math.floor(Math.abs(e))*Math.sign(e)}const Mn=N({scale:{type:[Number,String],default:.5},...tt()},"VParallax"),Hn=ee()({name:"VParallax",props:Mn(),setup(e,n){let{slots:t}=n;const{intersectionRef:a,isIntersecting:o}=$t(),{resizeRef:r,contentRect:i}=Wt(),{height:s}=Oe(),l=D();se(()=>{var m;a.value=r.value=(m=l.value)==null?void 0:m.$el});let c;V(o,m=>{m?(c=rt(a.value),c=c===document.scrollingElement?document:c,c.addEventListener("scroll",d,{passive:!0}),d()):c.removeEventListener("scroll",d)}),At(()=>{c==null||c.removeEventListener("scroll",d)}),V(s,d),V(()=>{var m;return(m=i.value)==null?void 0:m.height},d);const u=k(()=>1-ge(+e.scale));let v=-1;function d(){o.value&&(cancelAnimationFrame(v),v=requestAnimationFrame(()=>{var F;const m=((F=l.value)==null?void 0:F.$el).querySelector(".v-img__img");if(!m)return;const g=c instanceof Document?document.documentElement.clientHeight:c.clientHeight,h=c instanceof Document?window.scrollY:c.scrollTop,O=a.value.getBoundingClientRect().top+h,x=i.value.height,b=O+(x-g)/2,f=Ln((h-b)*u.value),R=Math.max(1,(u.value*(g-x)+x)/x);m.style.setProperty("transform",`translateY(${f}px) scale(${R})`)}))}return _e(()=>y(nt,{class:["v-parallax",{"v-parallax--active":o.value},e.class],style:e.style,ref:l,cover:!0,onLoadstart:d,onLoad:d},t)),{}}}),qn={__name:"Home",setup(e){const n=D([{img_path:Zt,unit:"國立臺灣師範大學教育政策與行政研究所",title:"全端工程師",content:"使用現代前後端框架Laravel及Vue,建制及維護教育支持系統。 專任助理(資訊類約用人員)網頁程式開發及研究、功能開發、資料庫維護、定期開發進度報告"},{img_path:Qt,unit:"Foon Yew High School",title:"Information Resources Department staff",content:"資訊助理,技術支援：負責協助教職員解決軟體、硬體、網際網路、使用或設置（系統/軟件）等相關問題。軟體相關：負責電腦還原系統設置（使用 Faronics Deep Freeze),進行 Windows 及各軟體重大補丁更新，維護電腦系統及軟體。硬體相關：負責電腦組裝、各類多媒體教學設備等的檢查及維修工作，並進行弱電整合安裝施工。    網路相關：負責解決網路（有綫/ 無綫）無法連接問題、進行 Network switch 檢查維護、進行 IP 分配及檢查(當時全校電腦要從本來的固定IP轉爲DHCP)"},{img_path:Jt,unit:"國立臺灣科技大學僑生聯誼社",title:"副會長",content:"109、110屆副社長,任職期間策劃及舉辦超過10次中大型活動、創建資訊部門、建立形象網站與活動網站設計、與組員協作開發新功能。同時也是111年度應届畢業僑外籍生畢業晚會活動共同負責人"},{img_path:en,unit:"僑外籍生畢業晚會活動",title:"負責人",content:"僑外籍生畢業晚會活動 活動策劃人。 負責公關組、資訊開發組、活動策劃。 台科大首次舉辦【僑外籍生畢業晚會】，當天活動氣氛十分熱鬧，活動圓滿結束。",link:"https://sites.google.com/view/2023-ntust-osgp/home"},{img_path:tn,unit:"國立臺灣科技大學馬來西亞同學會",title:"公關組組長、活動組員",content:"108屆歡送會公關應届畢業生資料搜集及聯係對外廠商聯係。109屆新生輔導小組公關、迎新活動游戲策劃組統整來臺資訊,持續更新注意事項負責迎活動内容策劃及場控"}]);return(t,a)=>(Q(),Xe(we,{fluid:"",class:"bg-deep-purple-darken-3 pa-0 fill-height"},{default:S(()=>[y(Hn,{src:Kt,class:"align-center fill-height"},{default:S(()=>[y(we,{style:{"max-width":"1280px"}},{default:S(()=>[y(We,null,{default:S(()=>[y(Ie,null,{default:S(()=>[y(pe,{color:"rgba(0,0,0,0)",class:"elevation-15 rounded-xl",style:{"backdrop-filter":"blur(4px)"}},{default:S(()=>[y(Qe,{class:"text-h2 ma-2",style:{"line-height":"1.5"}},{default:S(()=>[W("陳亮憬")]),_:1}),y(Je,{class:"text-h5 ma-2",style:{"line-height":"1.3"}},{default:S(()=>[W("全端工程師")]),_:1}),y(et,{class:"text-h5 ma-2",style:{"line-height":"1.3"}},{default:S(()=>[W(" 大家好，我是一名全端開發人員，熱衷於編碼和批判性思維。我樂於解決覆雜的問題，並將抽象的想法轉化為實際的現實應用。我的適應能力和創造力促使我不斷提高自己的技能，為我所在的任何團隊貢獻價值。 ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),y(Ke(Tn),{experiences:n.value},null,8,["experiences"])]),_:1})]),_:1}))}};export{qn as default};
