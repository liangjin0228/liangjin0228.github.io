import{e as De,c as ut,V as L,a as A,b as ue,d as T,f as rt}from"./VCard-36710288.js";import{V as He}from"./VBtn-4367926b.js";import{R as ve,s as O,W as fe,X as Q,q as $,p as N,A as Pe,d as h,z as me,U as ct,a2 as dt,a3 as vt,a4 as X,g as G,t as B,c as o,_ as Je,$ as ft,a5 as Ee,m as ae,x as z,b as le,a6 as mt,a0 as gt,F as re,e as Le,C as ce,n as Ye,a7 as ht,a8 as ee,a9 as yt,y as je,aa as bt,u as St,G as Xe,ab as pt,T as _t,P as wt,f as Ct,o as Ve,a as Oe,w as r,i as kt,j as Vt,H as Pt,h as f,k as y}from"./index-56066dc4.js";import{V as Lt}from"./index-6142290e.js";import{m as W,a as U,u as J,j as Ae,M as At,i as ze,b as ge,y as Qe,r as Te,c as he,d as ye,z as It,A as Ue,R as Mt,B as Tt,f as be,C as Bt,D as Ke,t as Be,g as Se,h as pe,E as xt,k as Fe,F as qe,e as de,v as Rt,G as Dt,H as Ht,I as Et,J as Ot,K as Ft}from"./VImg-9024f636.js";import{a as Ze,m as Nt,b as $t}from"./ssrBoot-47b74203.js";import{u as Gt}from"./scopeId-7f3060b5.js";const Wt="/assets/liangjin-license_photo-removebg-preview-5a808817.png";const Ie=Symbol.for("vuetify:list");function et(){const e=ve(Ie,{hasPrepend:O(!1),updateHasPrepend:()=>null}),i={hasPrepend:O(!1),updateHasPrepend:a=>{a&&(i.hasPrepend.value=a)}};return fe(Ie,i),e}function tt(){return ve(Ie,null)}const Jt={open:e=>{let{id:i,value:a,opened:l,parents:n}=e;if(a){const t=new Set;t.add(i);let s=n.get(i);for(;s!=null;)t.add(s),s=n.get(s);return t}else return l.delete(i),l},select:()=>null},at={open:e=>{let{id:i,value:a,opened:l,parents:n}=e;if(a){let t=n.get(i);for(l.add(i);t!=null&&t!==i;)l.add(t),t=n.get(t);return l}else l.delete(i);return l},select:()=>null},Yt={open:at.open,select:e=>{let{id:i,value:a,opened:l,parents:n}=e;if(!a)return l;const t=[];let s=n.get(i);for(;s!=null;)t.push(s),s=n.get(s);return new Set(t)}},xe=e=>{const i={select:a=>{let{id:l,value:n,selected:t}=a;if(l=Q(l),e&&!n){const s=Array.from(t.entries()).reduce((c,p)=>{let[b,g]=p;return g==="on"?[...c,b]:c},[]);if(s.length===1&&s[0]===l)return t}return t.set(l,n?"on":"off"),t},in:(a,l,n)=>{let t=new Map;for(const s of a||[])t=i.select({id:s,value:!0,selected:new Map(t),children:l,parents:n});return t},out:a=>{const l=[];for(const[n,t]of a.entries())t==="on"&&l.push(n);return l}};return i},lt=e=>{const i=xe(e);return{select:l=>{let{selected:n,id:t,...s}=l;t=Q(t);const c=n.has(t)?new Map([[t,n.get(t)]]):new Map;return i.select({...s,id:t,selected:c})},in:(l,n,t)=>{let s=new Map;return l!=null&&l.length&&(s=i.in(l.slice(0,1),n,t)),s},out:(l,n,t)=>i.out(l,n,t)}},jt=e=>{const i=xe(e);return{select:l=>{let{id:n,selected:t,children:s,...c}=l;return n=Q(n),s.has(n)?t:i.select({id:n,selected:t,children:s,...c})},in:i.in,out:i.out}},Xt=e=>{const i=lt(e);return{select:l=>{let{id:n,selected:t,children:s,...c}=l;return n=Q(n),s.has(n)?t:i.select({id:n,selected:t,children:s,...c})},in:i.in,out:i.out}},zt=e=>{const i={select:a=>{let{id:l,value:n,selected:t,children:s,parents:c}=a;l=Q(l);const p=new Map(t),b=[l];for(;b.length;){const u=b.shift();t.set(u,n?"on":"off"),s.has(u)&&b.push(...s.get(u))}let g=c.get(l);for(;g;){const u=s.get(g),d=u.every(m=>t.get(m)==="on"),v=u.every(m=>!t.has(m)||t.get(m)==="off");t.set(g,d?"on":v?"off":"indeterminate"),g=c.get(g)}return e&&!n&&Array.from(t.entries()).reduce((d,v)=>{let[m,C]=v;return C==="on"?[...d,m]:d},[]).length===0?p:t},in:(a,l,n)=>{let t=new Map;for(const s of a||[])t=i.select({id:s,value:!0,selected:new Map(t),children:l,parents:n});return t},out:(a,l)=>{const n=[];for(const[t,s]of a.entries())s==="on"&&!l.has(t)&&n.push(t);return n}};return i},te=Symbol.for("vuetify:nested"),nt={id:O(),root:{register:()=>null,unregister:()=>null,parents:$(new Map),children:$(new Map),open:()=>null,openOnSelect:()=>null,select:()=>null,opened:$(new Set),selected:$(new Map),selectedValues:$([])}},Qt=N({selectStrategy:[String,Function],openStrategy:[String,Object],opened:Array,selected:Array,mandatory:Boolean},"nested"),Ut=e=>{let i=!1;const a=$(new Map),l=$(new Map),n=Pe(e,"opened",e.opened,u=>new Set(u),u=>[...u.values()]),t=h(()=>{if(typeof e.selectStrategy=="object")return e.selectStrategy;switch(e.selectStrategy){case"single-leaf":return Xt(e.mandatory);case"leaf":return jt(e.mandatory);case"independent":return xe(e.mandatory);case"single-independent":return lt(e.mandatory);case"classic":default:return zt(e.mandatory)}}),s=h(()=>{if(typeof e.openStrategy=="object")return e.openStrategy;switch(e.openStrategy){case"list":return Yt;case"single":return Jt;case"multiple":default:return at}}),c=Pe(e,"selected",e.selected,u=>t.value.in(u,a.value,l.value),u=>t.value.out(u,a.value,l.value));me(()=>{i=!0});function p(u){const d=[];let v=u;for(;v!=null;)d.unshift(v),v=l.value.get(v);return d}const b=ct("nested"),g={id:O(),root:{opened:n,selected:c,selectedValues:h(()=>{const u=[];for(const[d,v]of c.value.entries())v==="on"&&u.push(d);return u}),register:(u,d,v)=>{d&&u!==d&&l.value.set(u,d),v&&a.value.set(u,[]),d!=null&&a.value.set(d,[...a.value.get(d)||[],u])},unregister:u=>{if(i)return;a.value.delete(u);const d=l.value.get(u);if(d){const v=a.value.get(d)??[];a.value.set(d,v.filter(m=>m!==u))}l.value.delete(u),n.value.delete(u)},open:(u,d,v)=>{b.emit("click:open",{id:u,value:d,path:p(u),event:v});const m=s.value.open({id:u,value:d,opened:new Set(n.value),children:a.value,parents:l.value,event:v});m&&(n.value=m)},openOnSelect:(u,d,v)=>{const m=s.value.select({id:u,value:d,selected:new Map(c.value),opened:new Set(n.value),children:a.value,parents:l.value,event:v});m&&(n.value=m)},select:(u,d,v)=>{b.emit("click:select",{id:u,value:d,path:p(u),event:v});const m=t.value.select({id:u,value:d,selected:new Map(c.value),children:a.value,parents:l.value,event:v});m&&(c.value=m),g.root.openOnSelect(u,d,v)},children:a,parents:l}};return fe(te,g),g.root},ot=(e,i)=>{const a=ve(te,nt),l=Symbol(dt()),n=h(()=>e.value!==void 0?e.value:l),t={...a,id:n,open:(s,c)=>a.root.open(n.value,s,c),openOnSelect:(s,c)=>a.root.openOnSelect(n.value,s,c),isOpen:h(()=>a.root.opened.value.has(n.value)),parent:h(()=>a.root.parents.value.get(n.value)),select:(s,c)=>a.root.select(n.value,s,c),isSelected:h(()=>a.root.selected.value.get(Q(n.value))==="on"),isIndeterminate:h(()=>a.root.selected.value.get(n.value)==="indeterminate"),isLeaf:h(()=>!a.root.children.value.get(n.value)),isGroupActivator:a.isGroupActivator};return!a.isGroupActivator&&a.root.register(n.value,a.id.value,i),me(()=>{!a.isGroupActivator&&a.root.unregister(n.value)}),i&&fe(te,t),t},Kt=()=>{const e=ve(te,nt);fe(te,{...e,isGroupActivator:!0})},qt=vt({name:"VListGroupActivator",setup(e,i){let{slots:a}=i;return Kt(),()=>{var l;return(l=a.default)==null?void 0:l.call(a)}}}),Zt=N({activeColor:String,baseColor:String,color:String,collapseIcon:{type:X,default:"$collapse"},expandIcon:{type:X,default:"$expand"},prependIcon:X,appendIcon:X,fluid:Boolean,subgroup:Boolean,title:String,value:null,...W(),...U()},"VListGroup"),Ne=G()({name:"VListGroup",props:Zt(),setup(e,i){let{slots:a}=i;const{isOpen:l,open:n,id:t}=ot(B(e,"value"),!0),s=h(()=>`v-list-group--id-${String(t.value)}`),c=tt(),{isBooted:p}=Ze();function b(v){n(!l.value,v)}const g=h(()=>({onClick:b,class:"v-list-group__header",id:s.value})),u=h(()=>l.value?e.collapseIcon:e.expandIcon),d=h(()=>({VListItem:{active:l.value,activeColor:e.activeColor,baseColor:e.baseColor,color:e.color,prependIcon:e.prependIcon||e.subgroup&&u.value,appendIcon:e.appendIcon||!e.subgroup&&u.value,title:e.title,value:e.value}}));return J(()=>o(e.tag,{class:["v-list-group",{"v-list-group--prepend":c==null?void 0:c.hasPrepend.value,"v-list-group--fluid":e.fluid,"v-list-group--subgroup":e.subgroup,"v-list-group--open":l.value},e.class],style:e.style},{default:()=>[a.activator&&o(Ae,{defaults:d.value},{default:()=>[o(qt,null,{default:()=>[a.activator({props:g.value,isOpen:l.value})]})]}),o(At,{transition:{component:Lt},disabled:!p.value},{default:()=>{var v;return[Je(o("div",{class:"v-list-group__items",role:"group","aria-labelledby":s.value},[(v=a.default)==null?void 0:v.call(a)]),[[ft,l.value]])]}})]})),{}}});const ea=ze("v-list-item-subtitle"),ta=ze("v-list-item-title"),aa=N({active:{type:Boolean,default:void 0},activeClass:String,activeColor:String,appendAvatar:String,appendIcon:X,baseColor:String,disabled:Boolean,lines:String,link:{type:Boolean,default:void 0},nav:Boolean,prependAvatar:String,prependIcon:X,ripple:{type:[Boolean,Object],default:!0},subtitle:[String,Number,Boolean],title:[String,Number,Boolean],value:null,onClick:Ee(),onClickOnce:Ee(),...ge(),...W(),...Qe(),...Te(),...he(),...ye(),...It(),...U(),...ae(),...Ue({variant:"text"})},"VListItem"),Me=G()({name:"VListItem",directives:{Ripple:Mt},props:aa(),emits:{click:e=>!0},setup(e,i){let{attrs:a,slots:l,emit:n}=i;const t=Tt(e,a),s=h(()=>e.value===void 0?t.href.value:e.value),{select:c,isSelected:p,isIndeterminate:b,isGroupActivator:g,root:u,parent:d,openOnSelect:v}=ot(s,!1),m=tt(),C=h(()=>{var I;return e.active!==!1&&(e.active||((I=t.isActive)==null?void 0:I.value)||p.value)}),k=h(()=>e.link!==!1&&t.isLink.value),x=h(()=>!e.disabled&&e.link!==!1&&(e.link||t.isClickable.value||e.value!=null&&!!m)),R=h(()=>e.rounded||e.nav),D=h(()=>e.color??e.activeColor),F=h(()=>({color:C.value?D.value??e.baseColor:e.baseColor,variant:e.variant}));z(()=>{var I;return(I=t.isActive)==null?void 0:I.value},I=>{I&&d.value!=null&&u.open(d.value,!0),I&&v(I)},{immediate:!0});const{themeClasses:S}=le(e),{borderClasses:w}=be(e),{colorClasses:_,colorStyles:V,variantClasses:P}=Bt(F),{densityClasses:H}=Ke(e),{dimensionStyles:K}=Be(e),{elevationClasses:_e}=Se(e),{roundedClasses:ne}=pe(R),we=h(()=>e.lines?`v-list-item--${e.lines}-line`:void 0),Y=h(()=>({isActive:C.value,select:c,isSelected:p.value,isIndeterminate:b.value}));function oe(I){var M;n("click",I),!(g||!x.value)&&((M=t.navigate)==null||M.call(t,I),e.value!=null&&c(!p.value,I))}function Ce(I){(I.key==="Enter"||I.key===" ")&&(I.preventDefault(),oe(I))}return J(()=>{const I=k.value?"a":e.tag,M=l.title||e.title,ie=l.subtitle||e.subtitle,q=!!(e.appendAvatar||e.appendIcon),se=!!(q||l.append),Z=!!(e.prependAvatar||e.prependIcon),ke=!!(Z||l.prepend);return m==null||m.updateHasPrepend(ke),e.activeColor&&mt("active-color",["color","base-color"]),Je(o(I,{class:["v-list-item",{"v-list-item--active":C.value,"v-list-item--disabled":e.disabled,"v-list-item--link":x.value,"v-list-item--nav":e.nav,"v-list-item--prepend":!ke&&(m==null?void 0:m.hasPrepend.value),[`${e.activeClass}`]:e.activeClass&&C.value},S.value,w.value,_.value,H.value,_e.value,we.value,ne.value,P.value,e.class],style:[V.value,K.value,e.style],href:t.href.value,tabindex:x.value?m?-2:0:void 0,onClick:oe,onKeydown:x.value&&!k.value&&Ce},{default:()=>{var Re;return[xt(x.value||C.value,"v-list-item"),ke&&o("div",{key:"prepend",class:"v-list-item__prepend"},[l.prepend?o(Ae,{key:"prepend-defaults",disabled:!Z,defaults:{VAvatar:{density:e.density,image:e.prependAvatar},VIcon:{density:e.density,icon:e.prependIcon},VListItemAction:{start:!0}}},{default:()=>{var E;return[(E=l.prepend)==null?void 0:E.call(l,Y.value)]}}):o(re,null,[e.prependAvatar&&o(De,{key:"prepend-avatar",density:e.density,image:e.prependAvatar},null),e.prependIcon&&o(Fe,{key:"prepend-icon",density:e.density,icon:e.prependIcon},null)]),o("div",{class:"v-list-item__spacer"},null)]),o("div",{class:"v-list-item__content","data-no-activator":""},[M&&o(ta,{key:"title"},{default:()=>{var E;return[((E=l.title)==null?void 0:E.call(l,{title:e.title}))??e.title]}}),ie&&o(ea,{key:"subtitle"},{default:()=>{var E;return[((E=l.subtitle)==null?void 0:E.call(l,{subtitle:e.subtitle}))??e.subtitle]}}),(Re=l.default)==null?void 0:Re.call(l,Y.value)]),se&&o("div",{key:"append",class:"v-list-item__append"},[l.append?o(Ae,{key:"append-defaults",disabled:!q,defaults:{VAvatar:{density:e.density,image:e.appendAvatar},VIcon:{density:e.density,icon:e.appendIcon},VListItemAction:{end:!0}}},{default:()=>{var E;return[(E=l.append)==null?void 0:E.call(l,Y.value)]}}):o(re,null,[e.appendIcon&&o(Fe,{key:"append-icon",density:e.density,icon:e.appendIcon},null),e.appendAvatar&&o(De,{key:"append-avatar",density:e.density,image:e.appendAvatar},null)]),o("div",{class:"v-list-item__spacer"},null)])]}}),[[gt("ripple"),x.value&&e.ripple]])}),{}}}),la=N({color:String,inset:Boolean,sticky:Boolean,title:String,...W(),...U()},"VListSubheader"),na=G()({name:"VListSubheader",props:la(),setup(e,i){let{slots:a}=i;const{textColorClasses:l,textColorStyles:n}=qe(B(e,"color"));return J(()=>{const t=!!(a.default||e.title);return o(e.tag,{class:["v-list-subheader",{"v-list-subheader--inset":e.inset,"v-list-subheader--sticky":e.sticky},l.value,e.class],style:[{textColorStyles:n},e.style]},{default:()=>{var s;return[t&&o("div",{class:"v-list-subheader__text"},[((s=a.default)==null?void 0:s.call(a))??e.title])]}})}),{}}});const oa=N({color:String,inset:Boolean,length:[Number,String],thickness:[Number,String],vertical:Boolean,...W(),...ae()},"VDivider"),ia=G()({name:"VDivider",props:oa(),setup(e,i){let{attrs:a}=i;const{themeClasses:l}=le(e),{textColorClasses:n,textColorStyles:t}=qe(B(e,"color")),s=h(()=>{const c={};return e.length&&(c[e.vertical?"maxHeight":"maxWidth"]=Le(e.length)),e.thickness&&(c[e.vertical?"borderRightWidth":"borderTopWidth"]=Le(e.thickness)),c});return J(()=>o("hr",{class:[{"v-divider":!0,"v-divider--inset":e.inset,"v-divider--vertical":e.vertical},l.value,n.value,e.class],style:[s.value,t.value,e.style],"aria-orientation":!a.role||a.role==="separator"?e.vertical?"vertical":"horizontal":void 0,role:`${a.role||"separator"}`},null)),{}}}),sa=N({items:Array},"VListChildren"),it=G()({name:"VListChildren",props:sa(),setup(e,i){let{slots:a}=i;return et(),()=>{var l,n;return((l=a.default)==null?void 0:l.call(a))??((n=e.items)==null?void 0:n.map(t=>{var v,m;let{children:s,props:c,type:p,raw:b}=t;if(p==="divider")return((v=a.divider)==null?void 0:v.call(a,{props:c}))??o(ia,c,null);if(p==="subheader")return((m=a.subheader)==null?void 0:m.call(a,{props:c}))??o(na,c,null);const g={subtitle:a.subtitle?C=>{var k;return(k=a.subtitle)==null?void 0:k.call(a,{...C,item:b})}:void 0,prepend:a.prepend?C=>{var k;return(k=a.prepend)==null?void 0:k.call(a,{...C,item:b})}:void 0,append:a.append?C=>{var k;return(k=a.append)==null?void 0:k.call(a,{...C,item:b})}:void 0,title:a.title?C=>{var k;return(k=a.title)==null?void 0:k.call(a,{...C,item:b})}:void 0},[u,d]=Ne.filterProps(c);return s?o(Ne,ce({value:c==null?void 0:c.value},u),{activator:C=>{let{props:k}=C;return a.header?a.header({props:{...c,...k}}):o(Me,ce(c,k),g)},default:()=>o(it,{items:s},a)}):a.item?a.item({props:c}):o(Me,c,g)}))}}}),ua=N({items:{type:Array,default:()=>[]},itemTitle:{type:[String,Array,Function],default:"title"},itemValue:{type:[String,Array,Function],default:"value"},itemChildren:{type:[Boolean,String,Array,Function],default:"children"},itemProps:{type:[Boolean,String,Array,Function],default:"props"},returnObject:Boolean},"list-items");function ra(e){return typeof e=="string"||typeof e=="number"||typeof e=="boolean"}function ca(e,i){const a=ee(i,e.itemType,"item"),l=ra(i)?i:ee(i,e.itemTitle),n=ee(i,e.itemValue,void 0),t=ee(i,e.itemChildren),s=e.itemProps===!0?yt(i,["children"])[1]:ee(i,e.itemProps),c={title:l,value:n,...s};return{type:a,title:c.title,value:c.value,props:c,children:a==="item"&&t?st(e,t):void 0,raw:i}}function st(e,i){const a=[];for(const l of i)a.push(ca(e,l));return a}function da(e){return{items:h(()=>st(e,e.items))}}const va=N({baseColor:String,activeColor:String,activeClass:String,bgColor:String,disabled:Boolean,lines:{type:[Boolean,String],default:"one"},nav:Boolean,...Qt({selectStrategy:"single-leaf",openStrategy:"list"}),...ge(),...W(),...Qe(),...Te(),...he(),itemType:{type:String,default:"type"},...ua(),...ye(),...U(),...ae(),...Ue({variant:"text"})},"VList"),fa=G()({name:"VList",props:va(),emits:{"update:selected":e=>!0,"update:opened":e=>!0,"click:open":e=>!0,"click:select":e=>!0},setup(e,i){let{slots:a}=i;const{items:l}=da(e),{themeClasses:n}=le(e),{backgroundColorClasses:t,backgroundColorStyles:s}=de(B(e,"bgColor")),{borderClasses:c}=be(e),{densityClasses:p}=Ke(e),{dimensionStyles:b}=Be(e),{elevationClasses:g}=Se(e),{roundedClasses:u}=pe(e),{open:d,select:v}=Ut(e),m=h(()=>e.lines?`v-list--${e.lines}-line`:void 0),C=B(e,"activeColor"),k=B(e,"baseColor"),x=B(e,"color");et(),Ye({VListGroup:{activeColor:C,baseColor:k,color:x},VListItem:{activeClass:B(e,"activeClass"),activeColor:C,baseColor:k,color:x,density:B(e,"density"),disabled:B(e,"disabled"),lines:B(e,"lines"),nav:B(e,"nav"),variant:B(e,"variant")}});const R=O(!1),D=$();function F(P){R.value=!0}function S(P){R.value=!1}function w(P){var H;!R.value&&!(P.relatedTarget&&((H=D.value)!=null&&H.contains(P.relatedTarget)))&&V()}function _(P){if(D.value){if(P.key==="ArrowDown")V("next");else if(P.key==="ArrowUp")V("prev");else if(P.key==="Home")V("first");else if(P.key==="End")V("last");else return;P.preventDefault()}}function V(P){if(D.value)return ht(D.value,P)}return J(()=>o(e.tag,{ref:D,class:["v-list",{"v-list--disabled":e.disabled,"v-list--nav":e.nav},n.value,t.value,c.value,p.value,g.value,m.value,u.value,e.class],style:[s.value,b.value,e.style],tabindex:e.disabled||R.value?-1:0,role:"listbox","aria-activedescendant":void 0,onFocusin:F,onFocusout:S,onFocus:w,onKeydown:_},{default:()=>[o(it,{items:l.value},a)]})),{open:d,select:v,focus:V}}});function ma(e){let{rootEl:i,isSticky:a,layoutItemStyles:l}=e;const n=O(!1),t=O(0),s=h(()=>{const b=typeof n.value=="boolean"?"top":n.value;return[a.value?{top:"auto",bottom:"auto",height:void 0}:void 0,n.value?{[b]:Le(t.value)}:{top:l.value.top}]});je(()=>{z(a,b=>{b?window.addEventListener("scroll",p,{passive:!0}):window.removeEventListener("scroll",p)},{immediate:!0})}),me(()=>{window.removeEventListener("scroll",p)});let c=0;function p(){const b=c>window.scrollY?"up":"down",g=i.value.getBoundingClientRect(),u=parseFloat(l.value.top??0),d=window.scrollY-Math.max(0,t.value-u),v=g.height+Math.max(t.value,u)-window.scrollY-window.innerHeight,m=parseFloat(getComputedStyle(i.value).getPropertyValue("--v-body-scroll-y"))||0;g.height<window.innerHeight-u?(n.value="top",t.value=u):b==="up"&&n.value==="bottom"||b==="down"&&n.value==="top"?(t.value=window.scrollY+g.top-m,n.value=!0):b==="down"&&v<=0?(t.value=0,n.value="bottom"):b==="up"&&d<=0&&(m?n.value!=="top"&&(t.value=-d+m+u,n.value="top"):(t.value=g.top+d,n.value="top")),c=window.scrollY}return{isStuck:n,stickyStyles:s}}const ga=100,ha=20;function $e(e){const i=1.41421356237;return(e<0?-1:1)*Math.sqrt(Math.abs(e))*i}function Ge(e){if(e.length<2)return 0;if(e.length===2)return e[1].t===e[0].t?0:(e[1].d-e[0].d)/(e[1].t-e[0].t);let i=0;for(let a=e.length-1;a>0;a--){if(e[a].t===e[a-1].t)continue;const l=$e(i),n=(e[a].d-e[a-1].d)/(e[a].t-e[a-1].t);i+=(n-l)*Math.abs(n),a===e.length-1&&(i*=.5)}return $e(i)*1e3}function ya(){const e={};function i(n){Array.from(n.changedTouches).forEach(t=>{(e[t.identifier]??(e[t.identifier]=new bt(ha))).push([n.timeStamp,t])})}function a(n){Array.from(n.changedTouches).forEach(t=>{delete e[t.identifier]})}function l(n){var b;const t=(b=e[n])==null?void 0:b.values().reverse();if(!t)throw new Error(`No samples for touch id ${n}`);const s=t[0],c=[],p=[];for(const g of t){if(s[0]-g[0]>ga)break;c.push({t:g[0],d:g[1].clientX}),p.push({t:g[0],d:g[1].clientY})}return{x:Ge(c),y:Ge(p),get direction(){const{x:g,y:u}=this,[d,v]=[Math.abs(g),Math.abs(u)];return d>v&&g>=0?"right":d>v&&g<=0?"left":v>d&&u>=0?"down":v>d&&u<=0?"up":ba()}}}return{addMovement:i,endTouch:a,getVelocity:l}}function ba(){throw new Error}function Sa(e){let{isActive:i,isTemporary:a,width:l,touchless:n,position:t}=e;je(()=>{window.addEventListener("touchstart",x,{passive:!0}),window.addEventListener("touchmove",R,{passive:!1}),window.addEventListener("touchend",D,{passive:!0})}),me(()=>{window.removeEventListener("touchstart",x),window.removeEventListener("touchmove",R),window.removeEventListener("touchend",D)});const s=h(()=>["left","right"].includes(t.value)),{addMovement:c,endTouch:p,getVelocity:b}=ya();let g=!1;const u=O(!1),d=O(0),v=O(0);let m;function C(S,w){return(t.value==="left"?S:t.value==="right"?document.documentElement.clientWidth-S:t.value==="top"?S:t.value==="bottom"?document.documentElement.clientHeight-S:j())-(w?l.value:0)}function k(S){let w=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;const _=t.value==="left"?(S-v.value)/l.value:t.value==="right"?(document.documentElement.clientWidth-S-v.value)/l.value:t.value==="top"?(S-v.value)/l.value:t.value==="bottom"?(document.documentElement.clientHeight-S-v.value)/l.value:j();return w?Math.max(0,Math.min(1,_)):_}function x(S){if(n.value)return;const w=S.changedTouches[0].clientX,_=S.changedTouches[0].clientY,V=25,P=t.value==="left"?w<V:t.value==="right"?w>document.documentElement.clientWidth-V:t.value==="top"?_<V:t.value==="bottom"?_>document.documentElement.clientHeight-V:j(),H=i.value&&(t.value==="left"?w<l.value:t.value==="right"?w>document.documentElement.clientWidth-l.value:t.value==="top"?_<l.value:t.value==="bottom"?_>document.documentElement.clientHeight-l.value:j());(P||H||i.value&&a.value)&&(g=!0,m=[w,_],v.value=C(s.value?w:_,i.value),d.value=k(s.value?w:_),p(S),c(S))}function R(S){const w=S.changedTouches[0].clientX,_=S.changedTouches[0].clientY;if(g){if(!S.cancelable){g=!1;return}const P=Math.abs(w-m[0]),H=Math.abs(_-m[1]);(s.value?P>H&&P>3:H>P&&H>3)?(u.value=!0,g=!1):(s.value?H:P)>3&&(g=!1)}if(!u.value)return;S.preventDefault(),c(S);const V=k(s.value?w:_,!1);d.value=Math.max(0,Math.min(1,V)),V>1?v.value=C(s.value?w:_,!0):V<0&&(v.value=C(s.value?w:_,!1))}function D(S){if(g=!1,!u.value)return;c(S),u.value=!1;const w=b(S.changedTouches[0].identifier),_=Math.abs(w.x),V=Math.abs(w.y);(s.value?_>V&&_>400:V>_&&V>3)?i.value=w.direction===({left:"right",right:"left",top:"down",bottom:"up"}[t.value]||j()):i.value=d.value>.5}const F=h(()=>u.value?{transform:t.value==="left"?`translateX(calc(-100% + ${d.value*l.value}px))`:t.value==="right"?`translateX(calc(100% - ${d.value*l.value}px))`:t.value==="top"?`translateY(calc(-100% + ${d.value*l.value}px))`:t.value==="bottom"?`translateY(calc(100% - ${d.value*l.value}px))`:j(),transition:"none"}:void 0);return{isDragging:u,dragProgress:d,dragStyles:F}}function j(){throw new Error}const pa=["start","end","left","right","top","bottom"],_a=N({color:String,disableResizeWatcher:Boolean,disableRouteWatcher:Boolean,expandOnHover:Boolean,floating:Boolean,modelValue:{type:Boolean,default:null},permanent:Boolean,rail:{type:Boolean,default:null},railWidth:{type:[Number,String],default:56},scrim:{type:[Boolean,String],default:!0},image:String,temporary:Boolean,touchless:Boolean,width:{type:[Number,String],default:256},location:{type:String,default:"start",validator:e=>pa.includes(e)},sticky:Boolean,...ge(),...W(),...he(),...Nt(),...ye(),...U({tag:"nav"}),...ae()},"VNavigationDrawer"),wa=G()({name:"VNavigationDrawer",props:_a(),emits:{"update:modelValue":e=>!0,"update:rail":e=>!0},setup(e,i){let{attrs:a,emit:l,slots:n}=i;const{isRtl:t}=St(),{themeClasses:s}=le(e),{borderClasses:c}=be(e),{backgroundColorClasses:p,backgroundColorStyles:b}=de(B(e,"color")),{elevationClasses:g}=Se(e),{mobile:u}=Xe(),{roundedClasses:d}=pe(e),v=Rt(),m=Pe(e,"modelValue",null,M=>!!M),{ssrBootStyles:C}=Ze(),{scopeId:k}=Gt(),x=$(),R=O(!1),D=h(()=>e.rail&&e.expandOnHover&&R.value?Number(e.width):Number(e.rail?e.railWidth:e.width)),F=h(()=>Dt(e.location,t.value)),S=h(()=>!e.permanent&&(u.value||e.temporary)),w=h(()=>e.sticky&&!S.value&&F.value!=="bottom");e.expandOnHover&&e.rail!=null&&z(R,M=>l("update:rail",!M)),e.disableResizeWatcher||z(S,M=>!e.permanent&&wt(()=>m.value=!M)),!e.disableRouteWatcher&&v&&z(v.currentRoute,()=>S.value&&(m.value=!1)),z(()=>e.permanent,M=>{M&&(m.value=!0)}),pt(()=>{e.modelValue!=null||S.value||(m.value=e.permanent||!u.value)});const{isDragging:_,dragProgress:V,dragStyles:P}=Sa({isActive:m,isTemporary:S,width:D,touchless:B(e,"touchless"),position:F}),H=h(()=>{const M=S.value?0:e.rail&&e.expandOnHover?Number(e.railWidth):D.value;return _.value?M*V.value:M}),{layoutItemStyles:K,layoutItemScrimStyles:_e}=$t({id:e.name,order:h(()=>parseInt(e.order,10)),position:F,layoutSize:H,elementSize:D,active:h(()=>m.value||_.value),disableTransitions:h(()=>_.value),absolute:h(()=>e.absolute||w.value&&typeof ne.value!="string")}),{isStuck:ne,stickyStyles:we}=ma({rootEl:x,isSticky:w,layoutItemStyles:K}),Y=de(h(()=>typeof e.scrim=="string"?e.scrim:null)),oe=h(()=>({..._.value?{opacity:V.value*.2,transition:"none"}:void 0,..._e.value}));Ye({VList:{bgColor:"transparent"}});function Ce(){R.value=!0}function I(){R.value=!1}return J(()=>{const M=n.image||e.image;return o(re,null,[o(e.tag,ce({ref:x,onMouseenter:Ce,onMouseleave:I,class:["v-navigation-drawer",`v-navigation-drawer--${F.value}`,{"v-navigation-drawer--expand-on-hover":e.expandOnHover,"v-navigation-drawer--floating":e.floating,"v-navigation-drawer--is-hovering":R.value,"v-navigation-drawer--rail":e.rail,"v-navigation-drawer--temporary":S.value,"v-navigation-drawer--active":m.value,"v-navigation-drawer--sticky":w.value},s.value,p.value,c.value,g.value,d.value,e.class],style:[b.value,K.value,P.value,C.value,we.value,e.style]},k,a),{default:()=>{var ie,q,se,Z;return[M&&o("div",{key:"image",class:"v-navigation-drawer__img"},[n.image?(ie=n.image)==null?void 0:ie.call(n,{image:e.image}):o("img",{src:e.image,alt:""},null)]),n.prepend&&o("div",{class:"v-navigation-drawer__prepend"},[(q=n.prepend)==null?void 0:q.call(n)]),o("div",{class:"v-navigation-drawer__content"},[(se=n.default)==null?void 0:se.call(n)]),n.append&&o("div",{class:"v-navigation-drawer__append"},[(Z=n.append)==null?void 0:Z.call(n)])]}}),o(_t,{name:"fade-transition"},{default:()=>[S.value&&(_.value||m.value)&&!!e.scrim&&o("div",ce({class:["v-navigation-drawer__scrim",Y.backgroundColorClasses.value],style:[oe.value,Y.backgroundColorStyles.value],onClick:()=>m.value=!1},k),null)]})])}),{isStuck:ne}}});const Ca=N({color:String,...ge(),...W(),...Te(),...he(),...Ht(),...Et(),...ye(),...U(),...ae()},"VSheet"),We=G()({name:"VSheet",props:Ca(),setup(e,i){let{slots:a}=i;const{themeClasses:l}=le(e),{backgroundColorClasses:n,backgroundColorStyles:t}=de(B(e,"color")),{borderClasses:s}=be(e),{dimensionStyles:c}=Be(e),{elevationClasses:p}=Se(e),{locationStyles:b}=Ot(e),{positionClasses:g}=Ft(e),{roundedClasses:u}=pe(e);return J(()=>o(e.tag,{class:["v-sheet",l.value,n.value,s.value,p.value,g.value,u.value,e.class],style:[t.value,c.value,b.value,e.style]},a)),{}}}),ka=y("br",null,null,-1),Va=y("br",null,null,-1),Pa=y("br",null,null,-1),La=y("br",null,null,-1),Aa=y("br",null,null,-1),Ia=y("ul",{class:"ms-5"},[y("li",null,"HTML/CSS/Bootstrap"),y("li",null,"JavaScript/jQuery/AJAX"),y("li",null,"Java"),y("li",null,"PHP/Laravel"),y("li",null,"Python/Flask"),y("li",null,"Google Apps Script/API"),y("li",null,"C#")],-1),Ma=y("br",null,null,-1),Ta=y("ul",{class:"ms-5"},[y("li",null,"版本經驗:Domino 12.0.1"),y("li",null,"BPM/ Workflow 應用系統開發"),y("li",null,"編程語言： LotusScript、 Formula Language")],-1),Ba=y("br",null,null,-1),xa=y("ul",{class:"ms-5"},[y("li",null,"熟悉基礎原理，可獨立完成數據庫的設計、管理"),y("li",null," 熟悉CRUD等操作,理解Inner Join、Left Join、Right Join, Subquery "),y("li",null,"理解資料庫正規化(實作經驗到第三正規化)")],-1),Ra=y("br",null,null,-1),Da=y("ul",{class:"ms-5"},[y("li",null,"RWD"),y("li",null,"可開發互動式的網頁應用程式"),y("li",null,"在網頁中使用AJAX進行非同步數據交換")],-1),Ha=y("br",null,null,-1),Ea=y("ul",{class:"ms-5"},[y("li",null,"精通PHP語言,有Laravel 框架的基礎知識"),y("li",null,"具有Python Flask開發經驗"),y("li",null,"Google Apps Script開發網頁應用程式"),y("li",null,"使用Apache和IBM Cloud / AWS搭建Server"),y("li",null,"使用MySQL資料庫")],-1),Oa=y("br",null,null,-1),Fa=y("br",null,null,-1),Na=y("br",null,null,-1),$a={methods:{scrollToTarget(e){const i=this.$refs[e];if(i){const a=i.$el;e==="scrollContainer"?a.scrollTo({top:0,left:0,behavior:"smooth"}):a.scrollIntoView({behavior:"smooth",block:"start"})}}}},Qa=Object.assign($a,{__name:"Resume",setup(e){const{smAndDown:i}=Xe(),a=Ct([{type:"header","prepend-avatar":Wt,title:"Tan Liang Jin",subtitle:"liangjin0228@gmailcom"},{"prepend-icon":"mdi-briefcase",title:"工作經歷",value:"experience",targetRef:"experience"},{"prepend-icon":"mdi-account-school",title:"學歷",value:"education",targetRef:"education"},{"prepend-icon":"mdi-tools",title:"專業技能",value:"skill",targetRef:"skill"},{"prepend-icon":"mdi-trophy-award",title:"專案成就",value:"achievements",targetRef:"achievements"},{"prepend-icon":"mdi-file-check",title:"求職條件",value:"requirements",targetRef:"requirements"},{"prepend-icon":"mdi-translate-variant",title:"語文能力",value:"language",targetRef:"language"},{"prepend-icon":"mdi-calendar-blank-multiple",title:"社團活動",value:"societies",targetRef:"societies"}]);return(l,n)=>(Ve(),Oe(ut,null,{default:r(()=>[o(He,{onClick:n[0]||(n[0]=t=>l.scrollToTarget("scrollContainer")),style:{right:"2rem",top:"82vh","z-index":"9999"},position:"fixed",class:"bg-indigo-darken-1",icon:"mdi-format-vertical-align-top",size:"large"}),o(wa,{permanent:!Pt(i),elevation:"5"},{default:r(()=>[o(fa,{density:"comfortable",nav:""},{default:r(()=>[(Ve(!0),kt(re,null,Vt(a,t=>(Ve(),Oe(Me,{rounded:"lg",key:t.value,type:t.type,"prepend-avatar":t["prepend-avatar"],"prepend-icon":t["prepend-icon"],title:t.title,subtitle:t.subtitle,value:t.value,onClick:s=>l.scrollToTarget(t.targetRef)},null,8,["type","prepend-avatar","prepend-icon","title","subtitle","value","onClick"]))),128))]),_:1})]),_:1},8,["permanent"]),o(We,{ref:"scrollContainer",style:{height:"80vh"},class:"overflow-auto hide-scrollbar"},{default:r(()=>[o(L,{flat:"",ref:"experience"},{default:r(()=>[o(A,null,{default:r(()=>[f("工作經歷")]),_:1}),o(L,{class:"ma-5"},{default:r(()=>[o(A,{class:"rounded elevation-1 mb-2"},{default:r(()=>[f("Information Resources Department staff")]),_:1}),o(ue,null,{default:r(()=>[f("Foon Yew High School Johor Bahru(中學教育事業 100~500人)")]),_:1}),o(T,null,{default:r(()=>[o(We,null,{default:r(()=>[f(" 技術支援：負責協助教職員解決軟體、硬體、網際網路、使用或設置（系統/軟件）等相關問題。 "),ka,f(" 軟體相關：負責電腦還原系統設置(使用 Faronics Deep Freeze),進行 Windows 及各軟體重大補丁更新，維護電腦系統及軟體。"),Va,f(" 硬體相關：負責電腦組裝、各類多媒體教學設備等的檢查及維修工作，並進行弱電整合安裝施工。"),Pa,f(" 網路相關：負責解決網路（有綫/無綫）無法連接問題、進行 Network switch 檢查維護、進行 IP 分配及檢查(當時全校電腦要從本來的固定IP轉爲DHCP)"),La,Aa,f(" #技術支援 #硬體維修 #電腦維修 #行政協助 #網路系統配置 #庫存管理 ")]),_:1})]),_:1})]),_:1})]),_:1},512),o(L,{flat:"",ref:"education"},{default:r(()=>[o(A,null,{default:r(()=>[f("學術經歷")]),_:1}),o(L,{class:"ma-5"},{default:r(()=>[o(A,{class:"elevation-1 mb-2"},{default:r(()=>[f("國立臺灣科技大學")]),_:1}),o(ue,{class:"mb-2"},{default:r(()=>[f("資訊管理學系四技畢業")]),_:1})]),_:1})]),_:1},512),o(L,{flat:"",ref:"skill"},{default:r(()=>[o(A,null,{default:r(()=>[f("專業技能")]),_:1}),o(L,{class:"ma-5"},{default:r(()=>[o(A,{class:"elevation-1 mb-2"},{default:r(()=>[f("Programming Language or Skill")]),_:1}),o(T,null,{default:r(()=>[Ia,Ma,f(" #Java #Python #C# #PHP #HTML #CSS #JavaScript #jQuery #AJAX #軟體程式設計 ")]),_:1})]),_:1}),o(L,{class:"ma-5"},{default:r(()=>[o(A,{class:"elevation-1 mb-2"},{default:r(()=>[f("HCL Domino/Notes/Volt 開發")]),_:1}),o(T,null,{default:r(()=>[Ta,Ba,f(" #LotusScript #Lotus Notes #Domino #軟體程式設計 ")]),_:1})]),_:1}),o(L,{class:"ma-5"},{default:r(()=>[o(A,{class:"elevation-1 mb-2"},{default:r(()=>[f("MySQL")]),_:1}),o(T,null,{default:r(()=>[xa,Ra,f(" #MySQL #資料庫程式設計 #資料庫系統管理維護 #資料庫軟體應用 ")]),_:1})]),_:1}),o(L,{class:"ma-5"},{default:r(()=>[o(A,{class:"elevation-1 mb-2"},{default:r(()=>[f("網頁製作")]),_:1}),o(T,null,{default:r(()=>[f(" 熟練掌握HTML、CSS、JavaScript、jQuery、Bootstrap、RWD和AJAX等前端技術,具備以下能力: "),Da,Ha,f(" 具有4個網頁相關專案的開發經驗,涉及前端和後端技術。後端技術方面,具備以下能力: "),Ea,Oa,f(" #HTML #CSS #JavaScript #jQuery #PHP #Python #MySQL #AJAX #Git ")]),_:1})]),_:1}),o(L,{class:"ma-5"},{default:r(()=>[o(A,{class:"elevation-1 mb-2"},{default:r(()=>[f("Scrum")]),_:1}),o(T,null,{default:r(()=>[f(" 除了一般的瀑布式開發流程,也了解Scrum和Kanban "),Fa,Na,f(" #軟體工程系統開發 #專案溝通╱整合管理 #系統架構規劃 ")]),_:1})]),_:1})]),_:1},512),o(L,{flat:"",ref:"achievements"},{default:r(()=>[o(A,null,{default:r(()=>[f("專案成就")]),_:1}),o(L,{class:"ma-5"},{default:r(()=>[o(A,null,{default:r(()=>[f("應用Hololens 2於撞球運動輔助系統")]),_:1}),o(T,null,{default:r(()=>[f(" 大學期間實務專題，主要是研究AR/VR和演算法及ML領域，設備為Microsoft Hololens 2。通過MR（Mixed Reality）的方式幫助學習撞球，計算最佳解并且畫出打擊球的路徑輔助綫。此專題獲得校内的專題競賽佳獎。 ●負責處理UWP的建制，部署到Hololens2上 ●Unity / C# .NET 開發 ●MRTK部件應用 ")]),_:1})]),_:1}),o(L,{class:"ma-5"},{default:r(()=>[o(A,null,{default:r(()=>[f("全臺客運後臺系統")]),_:1}),o(T,null,{default:r(()=>[f(" ●Apache + PHP + MySQL ●組長，負責爲系統及資料庫分析、後臺建設 ●登陸系統 ●管理者後臺系統（發佈公告） ●使用者系統（訂單管理、訂票記錄、個人資料……） ●Cookie的運用 ")]),_:1})]),_:1}),o(L,{class:"ma-5"},{default:r(()=>[o(A,null,{default:r(()=>[f("跨部門物品借用系統")]),_:1}),o(T,null,{default:r(()=>[f(" ●HCL Domino/Notes （網頁：Xpages） ●LotusScript + Formula Language ●組長，負責系統分析、商業邏輯、程式編輯及統整 ●各部門人員層級權限、限制（新增/物品、借用……） ")]),_:1})]),_:1}),o(L,{class:"ma-5"},{default:r(()=>[o(A,null,{default:r(()=>[f("僑外籍生畢業晚會活動網站")]),_:1}),o(T,null,{default:r(()=>[f(" ●Google Apps Script + Google API + Google Sites ●組長，負責規劃網頁及指導非技術人員建制網站和功能、程式編輯 ●HTML Form post到Google Form ●畢業生資料登陸系統、留言墻、晚宴桌位查詢系統 ")]),_:1}),o(rt,null,{default:r(()=>[o(He,{href:"https://sites.google.com/view/2023-ntust-osgp/home"},{default:r(()=>[f("前往查看")]),_:1})]),_:1})]),_:1}),o(L,{class:"ma-5"},{default:r(()=>[o(A,null,{default:r(()=>[f("多執行緒Youtube影片下載器")]),_:1}),o(T,null,{default:r(()=>[f(" ●Python ●注冊/登錄系統（歷史記錄） ●下載後可直接點開播放 ●多執行緒加快下載速度 ●多執行緒的鎖定 ")]),_:1})]),_:1}),o(L,{class:"ma-5"},{default:r(()=>[o(A,null,{default:r(()=>[f("在綫網頁播放器 - 輕量化家用NAS音樂播放器")]),_:1}),o(T,null,{default:r(()=>[f(" ●Python Flask + IBM Cloud ●組長，負責後端和整合 ●讀取音樂檔案並播放，支援大部分市面上音樂播放的基礎功能 ●受當時Clubhouse風潮影響，建立Room功能，可以多人同時一起聼一個房主的播放列表 ")]),_:1})]),_:1})]),_:1},512),o(L,{flat:"",ref:"language"},{default:r(()=>[o(A,null,{default:r(()=>[f("語文能力")]),_:1}),o(L,{class:"ma-5"},{default:r(()=>[o(A,null,{default:r(()=>[f("英文")]),_:1}),o(T,null,{default:r(()=>[f(" 聽/中等說/略懂讀/中等寫/略懂 TOEIC (多益測驗) 680分 ")]),_:1})]),_:1}),o(L,{class:"ma-5"},{default:r(()=>[o(A,null,{default:r(()=>[f("馬來文")]),_:1}),o(T,null,{default:r(()=>[f(" 聽/中等說/略懂讀/中等寫/略懂 ")]),_:1})]),_:1})]),_:1},512),o(L,{flat:"",ref:"societies"},{default:r(()=>[o(A,null,{default:r(()=>[f("社團活動")]),_:1}),o(L,{class:"ma-5"},{default:r(()=>[o(A,null,{default:r(()=>[f("國立臺灣科技大學僑生聯誼社")]),_:1}),o(ue,null,{default:r(()=>[f("2020/7~2022/6")]),_:1}),o(T,null,{default:r(()=>[f(" 109、110屆副社長 任職期間策劃及舉辦超過10次中大型活動 創建資訊部門，建立形象網站與活動網站設計，與組員協作開發新功能 111年度應届畢業僑外籍生畢業晚會活動負責人（副） ")]),_:1})]),_:1}),o(L,{class:"ma-5"},{default:r(()=>[o(A,null,{default:r(()=>[f("國立臺灣科技大學馬來西亞同學會")]),_:1}),o(ue,null,{default:r(()=>[f("2019/12~2020/10")]),_:1}),o(T,null,{default:r(()=>[f(" 108屆歡送會公關 應届畢業生資料搜集及聯係 對外廠商聯係 109屆新生輔導小組公關、迎新活動游戲策劃組 統整來臺資訊，持續更新注意事項 負責迎活動内容策劃及場控 ")]),_:1})]),_:1})]),_:1},512)]),_:1},512)]),_:1}))}});export{Qa as default};
