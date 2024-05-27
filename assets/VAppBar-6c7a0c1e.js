import{p as H,m as p,h as N,x as _,a as s,g as D,j as I,i as M,N as $,s as S,l as u,P as q,y as k,O as A,ad as z,G as P,E as F,H as O,f as j,B as G,J,q as K,C as Y,K as Q}from"./index-a6b02b9c.js";import{c as L,m as W,a as X,b as Z,u as ee,d as te,e as ae,f as le,g as oe,i as C}from"./index-06236bbb.js";import{b as ne}from"./index-833d1bec.js";import{u as se}from"./VMain-f00477cb.js";const re=H({text:String,...p(),...L()},"VToolbarTitle"),ue=N()({name:"VToolbarTitle",props:re(),setup(e,h){let{slots:t}=h;return _(()=>{const i=!!(t.default||t.text||e.text);return s(e.tag,{class:["v-toolbar-title",e.class],style:e.style},{default:()=>{var o;return[i&&s("div",{class:"v-toolbar-title__placeholder"},[t.text?t.text():e.text,(o=t.default)==null?void 0:o.call(t)])]}})}),{}}}),ie=[null,"prominent","default","comfortable","compact"],U=H({absolute:Boolean,collapse:Boolean,color:String,density:{type:String,default:"default",validator:e=>ie.includes(e)},extended:Boolean,extensionHeight:{type:[Number,String],default:48},flat:Boolean,floating:Boolean,height:{type:[Number,String],default:64},image:String,title:String,...W(),...p(),...X(),...Z(),...L({tag:"header"}),...D()},"VToolbar"),R=N()({name:"VToolbar",props:U(),setup(e,h){var n;let{slots:t}=h;const{backgroundColorClasses:i,backgroundColorStyles:o}=ee(I(e,"color")),{borderClasses:a}=te(e),{elevationClasses:d}=ae(e),{roundedClasses:c}=le(e),{themeClasses:m}=M(e),{rtlClasses:b}=$(),r=S(!!(e.extended||(n=t.extension)!=null&&n.call(t))),g=u(()=>parseInt(Number(e.height)+(e.density==="prominent"?Number(e.height):0)-(e.density==="comfortable"?8:0)-(e.density==="compact"?16:0),10)),v=u(()=>r.value?parseInt(Number(e.extensionHeight)+(e.density==="prominent"?Number(e.extensionHeight):0)-(e.density==="comfortable"?4:0)-(e.density==="compact"?8:0),10):0);return q({VBtn:{variant:"text"}}),_(()=>{var V;const y=!!(e.title||t.title),T=!!(t.image||e.image),x=(V=t.extension)==null?void 0:V.call(t);return r.value=!!(e.extended||x),s(e.tag,{class:["v-toolbar",{"v-toolbar--absolute":e.absolute,"v-toolbar--collapse":e.collapse,"v-toolbar--flat":e.flat,"v-toolbar--floating":e.floating,[`v-toolbar--density-${e.density}`]:!0},i.value,a.value,d.value,c.value,m.value,b.value,e.class],style:[o.value,e.style]},{default:()=>[T&&s("div",{key:"image",class:"v-toolbar__image"},[t.image?s(C,{key:"image-defaults",disabled:!e.image,defaults:{VImg:{cover:!0,src:e.image}}},t.image):s(oe,{key:"image-img",cover:!0,src:e.image},null)]),s(C,{defaults:{VTabs:{height:k(g.value)}}},{default:()=>{var B,l,f;return[s("div",{class:"v-toolbar__content",style:{height:k(g.value)}},[t.prepend&&s("div",{class:"v-toolbar__prepend"},[(B=t.prepend)==null?void 0:B.call(t)]),y&&s(ue,{key:"title",text:e.title},{text:t.title}),(l=t.default)==null?void 0:l.call(t),t.append&&s("div",{class:"v-toolbar__append"},[(f=t.append)==null?void 0:f.call(t)])])]}}),s(C,{defaults:{VTabs:{height:k(v.value)}}},{default:()=>[s(ne,null,{default:()=>[r.value&&s("div",{class:"v-toolbar__extension",style:{height:k(v.value)}},[x])]})]})]})}),{contentHeight:g,extensionHeight:v}}}),ce=H({scrollTarget:{type:String},scrollThreshold:{type:[String,Number],default:300}},"scroll");function ve(e){let h=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{canScroll:t}=h;let i=0;const o=A(null),a=S(0),d=S(0),c=S(0),m=S(!1),b=S(!1),r=u(()=>Number(e.scrollThreshold)),g=u(()=>z((r.value-a.value)/r.value||0)),v=()=>{const n=o.value;!n||t&&!t.value||(i=a.value,a.value="window"in n?n.pageYOffset:n.scrollTop,b.value=a.value<i,c.value=Math.abs(a.value-r.value))};return P(b,()=>{d.value=d.value||a.value}),P(m,()=>{d.value=0}),F(()=>{P(()=>e.scrollTarget,n=>{var T;const y=n?document.querySelector(n):window;y&&y!==o.value&&((T=o.value)==null||T.removeEventListener("scroll",v),o.value=y,o.value.addEventListener("scroll",v,{passive:!0}))},{immediate:!0})}),O(()=>{var n;(n=o.value)==null||n.removeEventListener("scroll",v)}),t&&P(t,v,{immediate:!0}),{scrollThreshold:r,currentScroll:a,currentThreshold:c,isScrollActive:m,scrollRatio:g,isScrollingUp:b,savedScroll:d}}const de=H({scrollBehavior:String,modelValue:{type:Boolean,default:!0},location:{type:String,default:"top",validator:e=>["top","bottom"].includes(e)},...U(),...j(),...ce(),height:{type:[Number,String],default:64}},"VAppBar"),be=N()({name:"VAppBar",props:de(),emits:{"update:modelValue":e=>!0},setup(e,h){let{slots:t}=h;const i=A(),o=G(e,"modelValue"),a=u(()=>{var f;const l=new Set(((f=e.scrollBehavior)==null?void 0:f.split(" "))??[]);return{hide:l.has("hide"),fullyHide:l.has("fully-hide"),inverted:l.has("inverted"),collapse:l.has("collapse"),elevate:l.has("elevate"),fadeImage:l.has("fade-image")}}),d=u(()=>{const l=a.value;return l.hide||l.fullyHide||l.inverted||l.collapse||l.elevate||l.fadeImage||!o.value}),{currentScroll:c,scrollThreshold:m,isScrollingUp:b,scrollRatio:r}=ve(e,{canScroll:d}),g=u(()=>a.value.hide||a.value.fullyHide),v=u(()=>e.collapse||a.value.collapse&&(a.value.inverted?r.value>0:r.value===0)),n=u(()=>e.flat||a.value.fullyHide&&!o.value||a.value.elevate&&(a.value.inverted?c.value>0:c.value===0)),y=u(()=>a.value.fadeImage?a.value.inverted?1-r.value:r.value:void 0),T=u(()=>{var w,E;const l=Number(((w=i.value)==null?void 0:w.contentHeight)??e.height),f=Number(((E=i.value)==null?void 0:E.extensionHeight)??0);return g.value?c.value<m.value||a.value.fullyHide?l+f:l:l+f});J(u(()=>!!e.scrollBehavior),()=>{Q(()=>{g.value?a.value.inverted?o.value=c.value>m.value:o.value=b.value||c.value<m.value:o.value=!0})});const{ssrBootStyles:x}=se(),{layoutItemStyles:V,layoutIsReady:B}=K({id:e.name,order:u(()=>parseInt(e.order,10)),position:I(e,"location"),layoutSize:T,elementSize:S(void 0),active:o,absolute:I(e,"absolute")});return _(()=>{const l=R.filterProps(e);return s(R,Y({ref:i,class:["v-app-bar",{"v-app-bar--bottom":e.location==="bottom"},e.class],style:[{...V.value,"--v-toolbar-image-opacity":y.value,height:void 0,...x.value},e.style]},l,{collapse:v.value,flat:n.value}),t)}),B}});export{be as V};
