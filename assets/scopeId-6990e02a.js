import{m,a as I,u as g,j as A,z as S,d as p,C as X,A as D,J as L,B as T,h as _,D as Y,V as R,l as Z,P as z,k as V,b as ee,s as ae,c as te,F as ne,G as se,H as le,I as de,R as ie,f as ce,v as re,g as ue,K as oe,L as ve,N as me,O as ge,S as ye}from"./VImg-44ddf1af.js";import{p as b,g as y,u as fe,c as n,n as ke,a6 as v,m as F,b as O,d as x,_ as Ce,a0 as be,U as Ve}from"./index-422d6fa1.js";const Ie=b({fluid:{type:Boolean,default:!1},...m(),...I()},"VContainer"),_e=y()({name:"VContainer",props:Ie(),setup(e,s){let{slots:t}=s;const{rtlClasses:a}=fe();return g(()=>n(e.tag,{class:["v-container",{"v-container--fluid":e.fluid},a.value,e.class],style:e.style},t)),{}}});const Ae=y()({name:"VCardActions",props:m(),setup(e,s){let{slots:t}=s;return ke({VBtn:{variant:"text"}}),g(()=>{var a;return n("div",{class:["v-card-actions",e.class],style:e.style},[(a=t.default)==null?void 0:a.call(t)])}),{}}}),Se=A("v-card-subtitle"),he=A("v-card-title");const Pe=b({start:Boolean,end:Boolean,icon:v,image:String,...m(),...S(),...p(),...X(),...I(),...F(),...D({variant:"flat"})},"VAvatar"),B=y()({name:"VAvatar",props:Pe(),setup(e,s){let{slots:t}=s;const{themeClasses:a}=O(e),{colorClasses:c,colorStyles:d,variantClasses:r}=L(e),{densityClasses:u}=T(e),{roundedClasses:o}=_(e),{sizeClasses:i,sizeStyles:l}=Y(e);return g(()=>n(e.tag,{class:["v-avatar",{"v-avatar--start":e.start,"v-avatar--end":e.end},a.value,c.value,u.value,o.value,i.value,r.value,e.class],style:[d.value,l.value,e.style]},{default:()=>{var f;return[e.image?n(R,{key:"image",src:e.image,alt:"",cover:!0},null):e.icon?n(Z,{key:"icon",icon:e.icon},null):(f=t.default)==null?void 0:f.call(t),z(!1,"v-avatar")]}})),{}}}),xe=b({appendAvatar:String,appendIcon:v,prependAvatar:String,prependIcon:v,subtitle:String,title:String,...m(),...S()},"VCardItem"),Be=y()({name:"VCardItem",props:xe(),setup(e,s){let{slots:t}=s;return g(()=>{var i;const a=!!(e.prependAvatar||e.prependIcon),c=!!(a||t.prepend),d=!!(e.appendAvatar||e.appendIcon),r=!!(d||t.append),u=!!(e.title||t.title),o=!!(e.subtitle||t.subtitle);return n("div",{class:["v-card-item",e.class],style:e.style},[c&&n("div",{key:"prepend",class:"v-card-item__prepend"},[t.prepend?n(V,{key:"prepend-defaults",disabled:!a,defaults:{VAvatar:{density:e.density,icon:e.prependIcon,image:e.prependAvatar}}},t.prepend):a&&n(B,{key:"prepend-avatar",density:e.density,icon:e.prependIcon,image:e.prependAvatar},null)]),n("div",{class:"v-card-item__content"},[u&&n(he,{key:"title"},{default:()=>{var l;return[((l=t.title)==null?void 0:l.call(t))??e.title]}}),o&&n(Se,{key:"subtitle"},{default:()=>{var l;return[((l=t.subtitle)==null?void 0:l.call(t))??e.subtitle]}}),(i=t.default)==null?void 0:i.call(t)]),r&&n("div",{key:"append",class:"v-card-item__append"},[t.append?n(V,{key:"append-defaults",disabled:!d,defaults:{VAvatar:{density:e.density,icon:e.appendIcon,image:e.appendAvatar}}},t.append):d&&n(B,{key:"append-avatar",density:e.density,icon:e.appendIcon,image:e.appendAvatar},null)])])}),{}}}),pe=A("v-card-text"),De=b({appendAvatar:String,appendIcon:v,disabled:Boolean,flat:Boolean,hover:Boolean,image:String,link:{type:Boolean,default:void 0},prependAvatar:String,prependIcon:v,ripple:{type:[Boolean,Object],default:!0},subtitle:String,text:String,title:String,...ee(),...m(),...S(),...ae(),...te(),...ne(),...se(),...le(),...p(),...de(),...I(),...F(),...D({variant:"elevated"})},"VCard"),Re=y()({name:"VCard",directives:{Ripple:ie},props:De(),setup(e,s){let{attrs:t,slots:a}=s;const{themeClasses:c}=O(e),{borderClasses:d}=ce(e),{colorClasses:r,colorStyles:u,variantClasses:o}=L(e),{densityClasses:i}=T(e),{dimensionStyles:l}=re(e),{elevationClasses:f}=ue(e),{loaderClasses:j}=oe(e),{locationStyles:E}=ve(e),{positionClasses:H}=me(e),{roundedClasses:M}=_(e),k=ge(e,t),N=x(()=>e.link!==!1&&k.isLink.value),C=x(()=>!e.disabled&&e.link!==!1&&(e.link||k.isClickable.value));return g(()=>{const $=N.value?"a":e.tag,w=!!(a.title||e.title),G=!!(a.subtitle||e.subtitle),J=w||G,K=!!(a.append||e.appendAvatar||e.appendIcon),U=!!(a.prepend||e.prependAvatar||e.prependIcon),q=!!(a.image||e.image),Q=J||U||K,W=!!(a.text||e.text);return Ce(n($,{class:["v-card",{"v-card--disabled":e.disabled,"v-card--flat":e.flat,"v-card--hover":e.hover&&!(e.disabled||e.flat),"v-card--link":C.value},c.value,d.value,r.value,i.value,f.value,j.value,H.value,M.value,o.value,e.class],style:[u.value,l.value,E.value,e.style],href:k.href.value,onClick:C.value&&k.navigate,tabindex:e.disabled?-1:void 0},{default:()=>{var h;return[q&&n("div",{key:"image",class:"v-card__image"},[a.image?n(V,{key:"image-defaults",disabled:!e.image,defaults:{VImg:{cover:!0,src:e.image}}},a.image):n(R,{key:"image-img",cover:!0,src:e.image},null)]),n(ye,{name:"v-card",active:!!e.loading,color:typeof e.loading=="boolean"?void 0:e.loading},{default:a.loader}),Q&&n(Be,{key:"item",prependAvatar:e.prependAvatar,prependIcon:e.prependIcon,title:e.title,subtitle:e.subtitle,appendAvatar:e.appendAvatar,appendIcon:e.appendIcon},{default:a.item,prepend:a.prepend,title:a.title,subtitle:a.subtitle,append:a.append}),W&&n(pe,{key:"text"},{default:()=>{var P;return[((P=a.text)==null?void 0:P.call(a))??e.text]}}),(h=a.default)==null?void 0:h.call(a),a.actions&&n(Ae,null,{default:a.actions}),z(C.value,"v-card")]}}),[[be("ripple"),C.value&&e.ripple]])}),{}}});function ze(){const s=Ve("useScopeId").vnode.scopeId;return{scopeId:s?{[s]:""}:void 0}}export{Re as V,he as a,Se as b,_e as c,pe as d,B as e,ze as u};
