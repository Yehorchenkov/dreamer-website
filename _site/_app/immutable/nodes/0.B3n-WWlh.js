import{b as Se,s as wt,c as P,t as D,u as kt,f as Pe,v as It,d as N}from"../chunks/CU3uiykh.js";import{j as Z,k as ue,h as Qe,g as S,H as Et,m as Ce,s as de,n as ae,l as H,y as St,ay as K,o as Ve,i as xe,p as Pt,C as qe,I as $e,az as Ct,aA as $t,B as Tt,aB as Ot,$ as We,av as Rt,ac as Lt,af as Mt,T as At,a8 as Te,aC as jt,aD as Ft,aE as Nt,w as Ye,z as Dt,x as Ut,t as Y,L as w,O as A,M as k,G as Je,V as Bt,aF as Zt,aG as Ht,aH as zt,X as he,J as Ke,Q as Oe,aI as le,aJ as J,e as Gt,K as q,aK as Qt,ao as Vt,N as E}from"../chunks/CFBqzRJu.js";import{B as j,s as F,a as Re,b as qt}from"../chunks/BQEFIb0s.js";import{i as pe}from"../chunks/DqVT9PZv.js";import{i as Xe}from"../chunks/BYpzcwtq.js";function Wt(e,t){return t}function Yt(e,t,n,r){for(var s=[],o=t.length,i=0;i<o;i++)$t(t[i].e,s,!0);var a=o>0&&s.length===0&&n!==null;if(a){var l=n.parentNode;Tt(l),l.append(n),r.clear(),B(e,t[0].prev,t[o-1].next)}Ot(s,()=>{for(var u=0;u<o;u++){var d=t[u];a||(r.delete(d.k),B(e,d.prev,d.next)),We(d.e,!a)}})}function Jt(e,t,n,r,s,o=null){var i=e,a={flags:t,items:new Map,first:null};Z&&ue();var l=null,u=!1,d=Rt(()=>{var c=n();return Lt(c)?c:c==null?[]:qe(c)});Qe(()=>{var c=S(d),h=c.length;if(u&&h===0)return;u=h===0;let p=!1;if(Z){var v=i.data===Et;v!==(h===0)&&(i=Ce(),de(i),ae(!1),p=!0)}if(Z){for(var _=null,y,g=0;g<h;g++){if(H.nodeType===8&&H.data===St){i=H,p=!0,ae(!1);break}var f=c[g],x=r(f,g);y=et(H,a,_,null,f,x,g,s,t,n),a.items.set(x,y),_=y}h>0&&de(Ce())}if(!Z){var C=Mt;Kt(c,a,i,s,t,(C.f&K)!==0,r,n)}o!==null&&(h===0?l?Ve(l):l=xe(()=>o(i)):l!==null&&Pt(l,()=>{l=null})),p&&ae(!0),S(d)}),Z&&(i=H)}function Kt(e,t,n,r,s,o,i,a){var l=e.length,u=t.items,d=t.first,c=d,h,p=null,v=[],_=[],y,g,f,x;for(x=0;x<l;x+=1){if(y=e[x],g=i(y,x),f=u.get(g),f===void 0){var C=c?c.e.nodes_start:n;p=et(C,t,p,p===null?t.first:p.next,y,g,x,r,s,a),u.set(g,p),v=[],_=[],c=p.next;continue}if(Xt(f,y,x),f.e.f&K&&Ve(f.e),f!==c){if(h!==void 0&&h.has(f)){if(v.length<_.length){var L=_[0],m;p=L.prev;var T=v[0],R=v[v.length-1];for(m=0;m<v.length;m+=1)Le(v[m],L,n);for(m=0;m<_.length;m+=1)h.delete(_[m]);B(t,T.prev,R.next),B(t,p,T),B(t,R,L),c=L,p=R,x-=1,v=[],_=[]}else h.delete(f),Le(f,c,n),B(t,f.prev,f.next),B(t,f,p===null?t.first:p.next),B(t,p,f),p=f;continue}for(v=[],_=[];c!==null&&c.k!==g;)(o||!(c.e.f&K))&&(h??(h=new Set)).add(c),_.push(c),c=c.next;if(c===null)continue;f=c}v.push(f),p=f,c=f.next}if(c!==null||h!==void 0){for(var M=h===void 0?[]:qe(h);c!==null;)(o||!(c.e.f&K))&&M.push(c),c=c.next;var O=M.length;if(O>0){var G=null;Yt(t,M,G,u)}}$e.first=t.first&&t.first.e,$e.last=p&&p.e}function Xt(e,t,n,r){Ct(e.v,t),e.i=n}function et(e,t,n,r,s,o,i,a,l,u){var d=(l&Ft)!==0,c=(l&Nt)===0,h=d?c?At(s):Te(s):s,p=l&jt?Te(i):i,v={i:p,v:h,k:o,a:null,e:null,prev:n,next:r};try{return v.e=xe(()=>a(e,h,p,u),Z),v.e.prev=n&&n.e,v.e.next=r&&r.e,n===null?t.first=v:(n.next=v,n.e.next=v.e),r!==null&&(r.prev=v,r.e.prev=v.e),v}finally{}}function Le(e,t,n){for(var r=e.next?e.next.e.nodes_start:n,s=t?t.e.nodes_start:n,o=e.e.nodes_start;o!==r;){var i=Ye(o);s.before(o),o=i}}function B(e,t,n){t===null?e.first=n:(t.next=n,t.e.next=n&&n.e),n!==null&&(n.prev=t,n.e.prev=t&&t.e)}function en(e,t,n,r,s){var o=e,i="",a;Qe(()=>{if(i===(i=t()??"")){Z&&ue();return}a!==void 0&&(We(a),a=void 0),i!==""&&(a=xe(()=>{if(Z){H.data;for(var l=ue(),u=l;l!==null&&(l.nodeType!==8||l.data!=="");)u=l,l=Ye(l);if(l===null)throw Dt(),Ut;Se(H,u),o=de(l);return}var d=i+"";d=`<svg>${d}</svg>`;var c=wt(d);for(c=Y(c),Se(Y(c),c.lastChild);Y(c);)o.before(Y(c))}))})}const tn=!0,Is=Object.freeze(Object.defineProperty({__proto__:null,prerender:tn},Symbol.toStringTag,{value:"Module"})),nn="data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='UTF-8'?%3e%3csvg%20id='Warstwa_2'%20data-name='Warstwa%202'%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20159.47%2050.6'%3e%3cdefs%3e%3cstyle%3e%20.cls-1%20{%20fill:%20%23fc0;%20}%20.cls-2%20{%20fill:%20%23000675;%20}%20%3c/style%3e%3c/defs%3e%3cg%20id='Warstwa_1-2'%20data-name='Warstwa%201'%3e%3cg%3e%3cg%3e%3cpath%20class='cls-2'%20d='M9.67,29.31H0v21.29h9.67c4.91,0,8.74-2.09,10.55-5.58.34-.62.59-1.29.78-2,.26-.95.4-1.97.4-3.06,0-6.45-4.77-10.65-11.74-10.65ZM16.02,42.46c-.25.75-.65,1.4-1.15,1.96-1.21,1.38-3.09,2.14-5.43,2.14h-4.5v-13.2h4.5c4.23,0,7,2.53,7,6.61,0,.92-.14,1.76-.41,2.5Z'/%3e%3cpath%20class='cls-2'%20d='M38.69,50.6l-4.11-5.93h-4.53v5.93h-4.93v-21.29h9.22c5.69,0,9.25,2.95,9.25,7.72,0,3.19-1.61,5.54-4.38,6.72l4.77,6.84h-5.29ZM34.06,33.33h-4.01v7.42h4.01c3.01,0,4.53-1.4,4.53-3.71s-1.52-3.71-4.53-3.71Z'/%3e%3cpolygon%20class='cls-2'%20points='63.96%2046.65%2063.96%2050.6%2047.47%2050.6%2047.47%2029.31%2063.56%2029.31%2063.56%2033.27%2052.37%2033.27%2052.37%2037.89%2062.25%2037.89%2062.25%2041.72%2052.37%2041.72%2052.37%2046.65%2063.96%2046.65'/%3e%3cpath%20class='cls-2'%20d='M83.18,37.7c-1.41.44-2.82.86-4.22,1.25l.74,1.8c1.43-.39,2.86-.82,4.29-1.26l-.8-1.79Z'/%3e%3cpath%20class='cls-2'%20d='M88.95,50.6h-5.17l-1.88-4.56h-9.89l-1.88,4.56h-5.05l3.23-7.24.94-2.13,5.31-11.92h4.87l3.75,8.38c-1.41.44-2.82.86-4.22,1.25l-1.99-4.8-2.46,5.93-.91,2.19v.03s6.74,0,6.74,0l-.65-1.56c1.43-.39,2.86-.82,4.29-1.26l4.96,11.11Z'/%3e%3cpolygon%20class='cls-2'%20points='115.17%2050.6%20110.54%2050.6%20110.51%2037.84%20104.24%2048.36%20102.02%2048.36%2095.79%2038.1%2095.79%2050.6%2091.17%2050.6%2091.17%2029.31%2095.25%2029.31%2097.1%2032.39%2098.14%2034.12%20103.21%2042.55%20111.06%2029.31%20115.1%2029.31%20115.17%2050.6'/%3e%3cpath%20class='cls-2'%20d='M136.69,46.65v3.95h-16.48v-21.29h16.09v3.95h-11.19v4.62h9.88v3.83h-9.88v4.93h11.59Z'/%3e%3cpath%20class='cls-2'%20d='M154.17,50.6l-4.11-5.93h-4.53v5.93h-4.93v-21.29h9.22c5.69,0,9.25,2.95,9.25,7.72,0,3.19-1.61,5.54-4.38,6.72l4.78,6.84h-5.29ZM149.55,33.33h-4.01v7.42h4.01c3.01,0,4.53-1.4,4.53-3.71s-1.52-3.71-4.53-3.71Z'/%3e%3c/g%3e%3cpolygon%20class='cls-1'%20points='144.38%207.54%20142.73%203.77%20142.72%203.77%20142.72%203.77%20144.38%200%20140.61%201.65%20140.61%201.65%20136.84%200%20138.49%203.77%20138.49%203.77%20136.84%207.54%20140.61%205.88%20140.61%205.88%20140.61%205.88%20144.38%207.54'/%3e%3cg%3e%3cpath%20class='cls-1'%20d='M16.02,42.46c-.25.75-.65,1.4-1.15,1.96-3.43-.43-6.74-.94-9.93-1.49v-2.15c3.55.64,7.25,1.21,11.08,1.68Z'/%3e%3cpath%20class='cls-1'%20d='M39.37,44c2.68.01,5.38-.04,8.11-.19v1.97c-2.25.12-4.5.18-6.72.2-.57.01-1.15.01-1.73.01-1.2,0-2.38-.01-3.57-.04-1.82-.03-3.63-.1-5.41-.18-1.66-.08-3.31-.18-4.93-.31-1.65-.13-3.28-.26-4.89-.43.34-.62.59-1.29.78-2,1.35.15,2.72.26,4.11.38,4.62.37,9.38.58,14.25.59Z'/%3e%3cpath%20class='cls-1'%20d='M52.37,43.51c5.57-.42,11.21-1.16,16.88-2.28l-.94,2.13c-5.36,1.01-10.68,1.68-15.94,2.11v-1.96Z'/%3e%3cpath%20class='cls-1'%20d='M83.18,37.7c2.67-.84,5.33-1.77,7.99-2.82v2.12c-2.39.91-4.78,1.74-7.19,2.49-1.43.44-2.86.87-4.29,1.26-2.03.56-4.06,1.07-6.1,1.52l.91-2.19c1.48-.35,2.96-.73,4.45-1.13,1.41-.39,2.82-.8,4.22-1.25Z'/%3e%3cpath%20class='cls-1'%20d='M134.78,8.61l-6.22,5.9c-4.27,3.77-8.81,7.24-13.51,10.34-5.53,3.63-11.18,6.7-16.92,9.27l-1.04-1.73c5.47-2.48,10.87-5.42,16.15-8.9,4.62-3.04,17.35-11.19,21.53-14.88Z'/%3e%3c/g%3e%3c/g%3e%3c/g%3e%3c/svg%3e";var sn=D('<img alt="DREAMER logo" class="h-10 w-auto hover:opacity-80">');function rn(e){j(e,{href:"/",class:"hidden md:flex items-center",children:(t,n)=>{var r=sn();F(r,"src",nn),P(t,r)},$$slots:{default:!0}})}var on=D('<header class="shadow-lg bg-white text-white sticky z-50 top-0 items-center py-2"><section class="flex mx-auto justify-between items-center max-w-screen-xl"><!> <p>text</p></section></header>');function an(e){var t=on(),n=w(t),r=w(n);rn(r),A(2),k(n),k(t),P(e,t)}const tt=/^[a-z0-9]+(-[a-z0-9]+)*$/,ne=(e,t,n,r="")=>{const s=e.split(":");if(e.slice(0,1)==="@"){if(s.length<2||s.length>3)return null;r=s.shift().slice(1)}if(s.length>3||!s.length)return null;if(s.length>1){const a=s.pop(),l=s.pop(),u={provider:s.length>0?s[0]:r,prefix:l,name:a};return t&&!X(u)?null:u}const o=s[0],i=o.split("-");if(i.length>1){const a={provider:r,prefix:i.shift(),name:i.join("-")};return t&&!X(a)?null:a}if(n&&r===""){const a={provider:r,prefix:"",name:o};return t&&!X(a,n)?null:a}return null},X=(e,t)=>e?!!((t&&e.prefix===""||e.prefix)&&e.name):!1,nt=Object.freeze({left:0,top:0,width:16,height:16}),te=Object.freeze({rotate:0,vFlip:!1,hFlip:!1}),se=Object.freeze({...nt,...te}),ge=Object.freeze({...se,body:"",hidden:!1});function ln(e,t){const n={};!e.hFlip!=!t.hFlip&&(n.hFlip=!0),!e.vFlip!=!t.vFlip&&(n.vFlip=!0);const r=((e.rotate||0)+(t.rotate||0))%4;return r&&(n.rotate=r),n}function Me(e,t){const n=ln(e,t);for(const r in ge)r in te?r in e&&!(r in n)&&(n[r]=te[r]):r in t?n[r]=t[r]:r in e&&(n[r]=e[r]);return n}function cn(e,t){const n=e.icons,r=e.aliases||Object.create(null),s=Object.create(null);function o(i){if(n[i])return s[i]=[];if(!(i in s)){s[i]=null;const a=r[i]&&r[i].parent,l=a&&o(a);l&&(s[i]=[a].concat(l))}return s[i]}return Object.keys(n).concat(Object.keys(r)).forEach(o),s}function fn(e,t,n){const r=e.icons,s=e.aliases||Object.create(null);let o={};function i(a){o=Me(r[a]||s[a],o)}return i(t),n.forEach(i),Me(e,o)}function st(e,t){const n=[];if(typeof e!="object"||typeof e.icons!="object")return n;e.not_found instanceof Array&&e.not_found.forEach(s=>{t(s,null),n.push(s)});const r=cn(e);for(const s in r){const o=r[s];o&&(t(s,fn(e,s,o)),n.push(s))}return n}const un={provider:"",aliases:{},not_found:{},...nt};function ce(e,t){for(const n in t)if(n in e&&typeof e[n]!=typeof t[n])return!1;return!0}function rt(e){if(typeof e!="object"||e===null)return null;const t=e;if(typeof t.prefix!="string"||!e.icons||typeof e.icons!="object"||!ce(e,un))return null;const n=t.icons;for(const s in n){const o=n[s];if(!s||typeof o.body!="string"||!ce(o,ge))return null}const r=t.aliases||Object.create(null);for(const s in r){const o=r[s],i=o.parent;if(!s||typeof i!="string"||!n[i]&&!r[i]||!ce(o,ge))return null}return t}const Ae=Object.create(null);function dn(e,t){return{provider:e,prefix:t,icons:Object.create(null),missing:new Set}}function z(e,t){const n=Ae[e]||(Ae[e]=Object.create(null));return n[t]||(n[t]=dn(e,t))}function ot(e,t){return rt(t)?st(t,(n,r)=>{r?e.icons[n]=r:e.missing.add(n)}):[]}function hn(e,t,n){try{if(typeof n.body=="string")return e.icons[t]={...n},!0}catch{}return!1}let W=!1;function it(e){return typeof e=="boolean"&&(W=e),W}function pn(e){const t=typeof e=="string"?ne(e,!0,W):e;if(t){const n=z(t.provider,t.prefix),r=t.name;return n.icons[r]||(n.missing.has(r)?null:void 0)}}function gn(e,t){const n=ne(e,!0,W);if(!n)return!1;const r=z(n.provider,n.prefix);return t?hn(r,n.name,t):(r.missing.add(n.name),!0)}function vn(e,t){if(typeof e!="object")return!1;if(typeof t!="string"&&(t=e.provider||""),W&&!t&&!e.prefix){let s=!1;return rt(e)&&(e.prefix="",st(e,(o,i)=>{gn(o,i)&&(s=!0)})),s}const n=e.prefix;if(!X({provider:t,prefix:n,name:"a"}))return!1;const r=z(t,n);return!!ot(r,e)}const at=Object.freeze({width:null,height:null}),lt=Object.freeze({...at,...te}),mn=/(-?[0-9.]*[0-9]+[0-9.]*)/g,yn=/^-?[0-9.]*[0-9]+[0-9.]*$/g;function je(e,t,n){if(t===1)return e;if(n=n||100,typeof e=="number")return Math.ceil(e*t*n)/n;if(typeof e!="string")return e;const r=e.split(mn);if(r===null||!r.length)return e;const s=[];let o=r.shift(),i=yn.test(o);for(;;){if(i){const a=parseFloat(o);isNaN(a)?s.push(o):s.push(Math.ceil(a*t*n)/n)}else s.push(o);if(o=r.shift(),o===void 0)return s.join("");i=!i}}function xn(e,t="defs"){let n="";const r=e.indexOf("<"+t);for(;r>=0;){const s=e.indexOf(">",r),o=e.indexOf("</"+t);if(s===-1||o===-1)break;const i=e.indexOf(">",o);if(i===-1)break;n+=e.slice(s+1,o).trim(),e=e.slice(0,r).trim()+e.slice(i+1)}return{defs:n,content:e}}function _n(e,t){return e?"<defs>"+e+"</defs>"+t:t}function bn(e,t,n){const r=xn(e);return _n(r.defs,t+r.content+n)}const wn=e=>e==="unset"||e==="undefined"||e==="none";function kn(e,t){const n={...se,...e},r={...lt,...t},s={left:n.left,top:n.top,width:n.width,height:n.height};let o=n.body;[n,r].forEach(_=>{const y=[],g=_.hFlip,f=_.vFlip;let x=_.rotate;g?f?x+=2:(y.push("translate("+(s.width+s.left).toString()+" "+(0-s.top).toString()+")"),y.push("scale(-1 1)"),s.top=s.left=0):f&&(y.push("translate("+(0-s.left).toString()+" "+(s.height+s.top).toString()+")"),y.push("scale(1 -1)"),s.top=s.left=0);let C;switch(x<0&&(x-=Math.floor(x/4)*4),x=x%4,x){case 1:C=s.height/2+s.top,y.unshift("rotate(90 "+C.toString()+" "+C.toString()+")");break;case 2:y.unshift("rotate(180 "+(s.width/2+s.left).toString()+" "+(s.height/2+s.top).toString()+")");break;case 3:C=s.width/2+s.left,y.unshift("rotate(-90 "+C.toString()+" "+C.toString()+")");break}x%2===1&&(s.left!==s.top&&(C=s.left,s.left=s.top,s.top=C),s.width!==s.height&&(C=s.width,s.width=s.height,s.height=C)),y.length&&(o=bn(o,'<g transform="'+y.join(" ")+'">',"</g>"))});const i=r.width,a=r.height,l=s.width,u=s.height;let d,c;i===null?(c=a===null?"1em":a==="auto"?u:a,d=je(c,l/u)):(d=i==="auto"?l:i,c=a===null?je(d,u/l):a==="auto"?u:a);const h={},p=(_,y)=>{wn(y)||(h[_]=y.toString())};p("width",d),p("height",c);const v=[s.left,s.top,l,u];return h.viewBox=v.join(" "),{attributes:h,viewBox:v,body:o}}const In=/\sid="(\S+)"/g,En="IconifyId"+Date.now().toString(16)+(Math.random()*16777216|0).toString(16);let Sn=0;function Pn(e,t=En){const n=[];let r;for(;r=In.exec(e);)n.push(r[1]);if(!n.length)return e;const s="suffix"+(Math.random()*16777216|Date.now()).toString(16);return n.forEach(o=>{const i=typeof t=="function"?t(o):t+(Sn++).toString(),a=o.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");e=e.replace(new RegExp('([#;"])('+a+')([")]|\\.[a-z])',"g"),"$1"+i+s+"$3")}),e=e.replace(new RegExp(s,"g"),""),e}const ve=Object.create(null);function Cn(e,t){ve[e]=t}function me(e){return ve[e]||ve[""]}function _e(e){let t;if(typeof e.resources=="string")t=[e.resources];else if(t=e.resources,!(t instanceof Array)||!t.length)return null;return{resources:t,path:e.path||"/",maxURL:e.maxURL||500,rotate:e.rotate||750,timeout:e.timeout||5e3,random:e.random===!0,index:e.index||0,dataAfterTimeout:e.dataAfterTimeout!==!1}}const be=Object.create(null),Q=["https://api.simplesvg.com","https://api.unisvg.com"],ee=[];for(;Q.length>0;)Q.length===1||Math.random()>.5?ee.push(Q.shift()):ee.push(Q.pop());be[""]=_e({resources:["https://api.iconify.design"].concat(ee)});function $n(e,t){const n=_e(t);return n===null?!1:(be[e]=n,!0)}function we(e){return be[e]}const Tn=()=>{let e;try{if(e=fetch,typeof e=="function")return e}catch{}};let Fe=Tn();function On(e,t){const n=we(e);if(!n)return 0;let r;if(!n.maxURL)r=0;else{let s=0;n.resources.forEach(i=>{s=Math.max(s,i.length)});const o=t+".json?icons=";r=n.maxURL-s-n.path.length-o.length}return r}function Rn(e){return e===404}const Ln=(e,t,n)=>{const r=[],s=On(e,t),o="icons";let i={type:o,provider:e,prefix:t,icons:[]},a=0;return n.forEach((l,u)=>{a+=l.length+1,a>=s&&u>0&&(r.push(i),i={type:o,provider:e,prefix:t,icons:[]},a=l.length),i.icons.push(l)}),r.push(i),r};function Mn(e){if(typeof e=="string"){const t=we(e);if(t)return t.path}return"/"}const An=(e,t,n)=>{if(!Fe){n("abort",424);return}let r=Mn(t.provider);switch(t.type){case"icons":{const o=t.prefix,a=t.icons.join(","),l=new URLSearchParams({icons:a});r+=o+".json?"+l.toString();break}case"custom":{const o=t.uri;r+=o.slice(0,1)==="/"?o.slice(1):o;break}default:n("abort",400);return}let s=503;Fe(e+r).then(o=>{const i=o.status;if(i!==200){setTimeout(()=>{n(Rn(i)?"abort":"next",i)});return}return s=501,o.json()}).then(o=>{if(typeof o!="object"||o===null){setTimeout(()=>{o===404?n("abort",o):n("next",s)});return}setTimeout(()=>{n("success",o)})}).catch(()=>{n("next",s)})},jn={prepare:Ln,send:An};function Fn(e){const t={loaded:[],missing:[],pending:[]},n=Object.create(null);e.sort((s,o)=>s.provider!==o.provider?s.provider.localeCompare(o.provider):s.prefix!==o.prefix?s.prefix.localeCompare(o.prefix):s.name.localeCompare(o.name));let r={provider:"",prefix:"",name:""};return e.forEach(s=>{if(r.name===s.name&&r.prefix===s.prefix&&r.provider===s.provider)return;r=s;const o=s.provider,i=s.prefix,a=s.name,l=n[o]||(n[o]=Object.create(null)),u=l[i]||(l[i]=z(o,i));let d;a in u.icons?d=t.loaded:i===""||u.missing.has(a)?d=t.missing:d=t.pending;const c={provider:o,prefix:i,name:a};d.push(c)}),t}function ct(e,t){e.forEach(n=>{const r=n.loaderCallbacks;r&&(n.loaderCallbacks=r.filter(s=>s.id!==t))})}function Nn(e){e.pendingCallbacksFlag||(e.pendingCallbacksFlag=!0,setTimeout(()=>{e.pendingCallbacksFlag=!1;const t=e.loaderCallbacks?e.loaderCallbacks.slice(0):[];if(!t.length)return;let n=!1;const r=e.provider,s=e.prefix;t.forEach(o=>{const i=o.icons,a=i.pending.length;i.pending=i.pending.filter(l=>{if(l.prefix!==s)return!0;const u=l.name;if(e.icons[u])i.loaded.push({provider:r,prefix:s,name:u});else if(e.missing.has(u))i.missing.push({provider:r,prefix:s,name:u});else return n=!0,!0;return!1}),i.pending.length!==a&&(n||ct([e],o.id),o.callback(i.loaded.slice(0),i.missing.slice(0),i.pending.slice(0),o.abort))})}))}let Dn=0;function Un(e,t,n){const r=Dn++,s=ct.bind(null,n,r);if(!t.pending.length)return s;const o={id:r,icons:t,callback:e,abort:s};return n.forEach(i=>{(i.loaderCallbacks||(i.loaderCallbacks=[])).push(o)}),s}function Bn(e,t=!0,n=!1){const r=[];return e.forEach(s=>{const o=typeof s=="string"?ne(s,t,n):s;o&&r.push(o)}),r}var Zn={resources:[],index:0,timeout:2e3,rotate:750,random:!1,dataAfterTimeout:!1};function Hn(e,t,n,r){const s=e.resources.length,o=e.random?Math.floor(Math.random()*s):e.index;let i;if(e.random){let m=e.resources.slice(0);for(i=[];m.length>1;){const T=Math.floor(Math.random()*m.length);i.push(m[T]),m=m.slice(0,T).concat(m.slice(T+1))}i=i.concat(m)}else i=e.resources.slice(o).concat(e.resources.slice(0,o));const a=Date.now();let l="pending",u=0,d,c=null,h=[],p=[];typeof r=="function"&&p.push(r);function v(){c&&(clearTimeout(c),c=null)}function _(){l==="pending"&&(l="aborted"),v(),h.forEach(m=>{m.status==="pending"&&(m.status="aborted")}),h=[]}function y(m,T){T&&(p=[]),typeof m=="function"&&p.push(m)}function g(){return{startTime:a,payload:t,status:l,queriesSent:u,queriesPending:h.length,subscribe:y,abort:_}}function f(){l="failed",p.forEach(m=>{m(void 0,d)})}function x(){h.forEach(m=>{m.status==="pending"&&(m.status="aborted")}),h=[]}function C(m,T,R){const M=T!=="success";switch(h=h.filter(O=>O!==m),l){case"pending":break;case"failed":if(M||!e.dataAfterTimeout)return;break;default:return}if(T==="abort"){d=R,f();return}if(M){d=R,h.length||(i.length?L():f());return}if(v(),x(),!e.random){const O=e.resources.indexOf(m.resource);O!==-1&&O!==e.index&&(e.index=O)}l="completed",p.forEach(O=>{O(R)})}function L(){if(l!=="pending")return;v();const m=i.shift();if(m===void 0){if(h.length){c=setTimeout(()=>{v(),l==="pending"&&(x(),f())},e.timeout);return}f();return}const T={status:"pending",resource:m,callback:(R,M)=>{C(T,R,M)}};h.push(T),u++,c=setTimeout(L,e.rotate),n(m,t,T.callback)}return setTimeout(L),g}function ft(e){const t={...Zn,...e};let n=[];function r(){n=n.filter(a=>a().status==="pending")}function s(a,l,u){const d=Hn(t,a,l,(c,h)=>{r(),u&&u(c,h)});return n.push(d),d}function o(a){return n.find(l=>a(l))||null}return{query:s,find:o,setIndex:a=>{t.index=a},getIndex:()=>t.index,cleanup:r}}function Ne(){}const fe=Object.create(null);function zn(e){if(!fe[e]){const t=we(e);if(!t)return;const n=ft(t),r={config:t,redundancy:n};fe[e]=r}return fe[e]}function Gn(e,t,n){let r,s;if(typeof e=="string"){const o=me(e);if(!o)return n(void 0,424),Ne;s=o.send;const i=zn(e);i&&(r=i.redundancy)}else{const o=_e(e);if(o){r=ft(o);const i=e.resources?e.resources[0]:"",a=me(i);a&&(s=a.send)}}return!r||!s?(n(void 0,424),Ne):r.query(t,s,n)().abort}function De(){}function Qn(e){e.iconsLoaderFlag||(e.iconsLoaderFlag=!0,setTimeout(()=>{e.iconsLoaderFlag=!1,Nn(e)}))}function Vn(e){const t=[],n=[];return e.forEach(r=>{(r.match(tt)?t:n).push(r)}),{valid:t,invalid:n}}function V(e,t,n){function r(){const s=e.pendingIcons;t.forEach(o=>{s&&s.delete(o),e.icons[o]||e.missing.add(o)})}if(n&&typeof n=="object")try{if(!ot(e,n).length){r();return}}catch(s){console.error(s)}r(),Qn(e)}function Ue(e,t){e instanceof Promise?e.then(n=>{t(n)}).catch(()=>{t(null)}):t(e)}function qn(e,t){e.iconsToLoad?e.iconsToLoad=e.iconsToLoad.concat(t).sort():e.iconsToLoad=t,e.iconsQueueFlag||(e.iconsQueueFlag=!0,setTimeout(()=>{e.iconsQueueFlag=!1;const{provider:n,prefix:r}=e,s=e.iconsToLoad;if(delete e.iconsToLoad,!s||!s.length)return;const o=e.loadIcon;if(e.loadIcons&&(s.length>1||!o)){Ue(e.loadIcons(s,r,n),d=>{V(e,s,d)});return}if(o){s.forEach(d=>{const c=o(d,r,n);Ue(c,h=>{const p=h?{prefix:r,icons:{[d]:h}}:null;V(e,[d],p)})});return}const{valid:i,invalid:a}=Vn(s);if(a.length&&V(e,a,null),!i.length)return;const l=r.match(tt)?me(n):null;if(!l){V(e,i,null);return}l.prepare(n,r,i).forEach(d=>{Gn(n,d,c=>{V(e,d.icons,c)})})}))}const Wn=(e,t)=>{const n=Bn(e,!0,it()),r=Fn(n);if(!r.pending.length){let l=!0;return t&&setTimeout(()=>{l&&t(r.loaded,r.missing,r.pending,De)}),()=>{l=!1}}const s=Object.create(null),o=[];let i,a;return r.pending.forEach(l=>{const{provider:u,prefix:d}=l;if(d===a&&u===i)return;i=u,a=d,o.push(z(u,d));const c=s[u]||(s[u]=Object.create(null));c[d]||(c[d]=[])}),r.pending.forEach(l=>{const{provider:u,prefix:d,name:c}=l,h=z(u,d),p=h.pendingIcons||(h.pendingIcons=new Set);p.has(c)||(p.add(c),s[u][d].push(c))}),o.forEach(l=>{const u=s[l.provider][l.prefix];u.length&&qn(l,u)}),t?Un(t,r,o):De};function Yn(e,t){const n={...e};for(const r in t){const s=t[r],o=typeof s;r in at?(s===null||s&&(o==="string"||o==="number"))&&(n[r]=s):o===typeof n[r]&&(n[r]=r==="rotate"?s%4:s)}return n}const Jn=/[\s,]+/;function Kn(e,t){t.split(Jn).forEach(n=>{switch(n.trim()){case"horizontal":e.hFlip=!0;break;case"vertical":e.vFlip=!0;break}})}function Xn(e,t=0){const n=e.replace(/^-?[0-9.]*/,"");function r(s){for(;s<0;)s+=4;return s%4}if(n===""){const s=parseInt(e);return isNaN(s)?0:r(s)}else if(n!==e){let s=0;switch(n){case"%":s=25;break;case"deg":s=90}if(s){let o=parseFloat(e.slice(0,e.length-n.length));return isNaN(o)?0:(o=o/s,o%1===0?r(o):0)}}return t}function es(e,t){let n=e.indexOf("xlink:")===-1?"":' xmlns:xlink="http://www.w3.org/1999/xlink"';for(const r in t)n+=" "+r+'="'+t[r]+'"';return'<svg xmlns="http://www.w3.org/2000/svg"'+n+">"+e+"</svg>"}function ts(e){return e.replace(/"/g,"'").replace(/%/g,"%25").replace(/#/g,"%23").replace(/</g,"%3C").replace(/>/g,"%3E").replace(/\s+/g," ")}function ns(e){return"data:image/svg+xml,"+ts(e)}function ss(e){return'url("'+ns(e)+'")'}const Be={...lt,inline:!1},rs={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink","aria-hidden":!0,role:"img"},os={display:"inline-block"},ye={"background-color":"currentColor"},ut={"background-color":"transparent"},Ze={image:"var(--svg)",repeat:"no-repeat",size:"100% 100%"},He={"-webkit-mask":ye,mask:ye,background:ut};for(const e in He){const t=He[e];for(const n in Ze)t[e+"-"+n]=Ze[n]}function is(e){return e+(e.match(/^[-0-9.]+$/)?"px":"")}function as(e,t){const n=Yn(Be,t),r=t.mode||"svg",s=r==="svg"?{...rs}:{};e.body.indexOf("xlink:")===-1&&delete s["xmlns:xlink"];let o=typeof t.style=="string"?t.style:"";for(let g in t){const f=t[g];if(f!==void 0)switch(g){case"icon":case"style":case"onLoad":case"mode":case"ssr":break;case"inline":case"hFlip":case"vFlip":n[g]=f===!0||f==="true"||f===1;break;case"flip":typeof f=="string"&&Kn(n,f);break;case"color":o=o+(o.length>0&&o.trim().slice(-1)!==";"?";":"")+"color: "+f+"; ";break;case"rotate":typeof f=="string"?n[g]=Xn(f):typeof f=="number"&&(n[g]=f);break;case"ariaHidden":case"aria-hidden":f!==!0&&f!=="true"&&delete s["aria-hidden"];break;default:if(g.slice(0,3)==="on:")break;Be[g]===void 0&&(s[g]=f)}}const i=kn(e,n),a=i.attributes;if(n.inline&&(o="vertical-align: -0.125em; "+o),r==="svg"){Object.assign(s,a),o!==""&&(s.style=o);let g=0,f=t.id;return typeof f=="string"&&(f=f.replace(/-/g,"_")),{svg:!0,attributes:s,body:Pn(i.body,f?()=>f+"ID"+g++:"iconifySvelte")}}const{body:l,width:u,height:d}=e,c=r==="mask"||(r==="bg"?!1:l.indexOf("currentColor")!==-1),h=es(l,{...a,width:u+"",height:d+""}),v={"--svg":ss(h)},_=g=>{const f=a[g];f&&(v[g]=is(f))};_("width"),_("height"),Object.assign(v,os,c?ye:ut);let y="";for(const g in v)y+=g+": "+v[g]+";";return s.style=y+o,{svg:!1,attributes:s}}it(!0);Cn("",jn);if(typeof document<"u"&&typeof window<"u"){const e=window;if(e.IconifyPreload!==void 0){const t=e.IconifyPreload,n="Invalid IconifyPreload syntax.";typeof t=="object"&&t!==null&&(t instanceof Array?t:[t]).forEach(r=>{try{(typeof r!="object"||r===null||r instanceof Array||typeof r.icons!="object"||typeof r.prefix!="string"||!vn(r))&&console.error(n)}catch{console.error(n)}})}if(e.IconifyProviders!==void 0){const t=e.IconifyProviders;if(typeof t=="object"&&t!==null)for(let n in t){const r="IconifyProviders["+n+"] is invalid.";try{const s=t[n];if(typeof s!="object"||!s||s.resources===void 0)continue;$n(n,s)||console.error(r)}catch{console.error(r)}}}}function ls(e,t,n,r,s){function o(){t.loading&&(t.loading.abort(),t.loading=null)}if(typeof e=="object"&&e!==null&&typeof e.body=="string")return t.name="",o(),{data:{...se,...e}};let i;if(typeof e!="string"||(i=ne(e,!1,!0))===null)return o(),null;const a=pn(i);if(!a)return n&&(!t.loading||t.loading.name!==e)&&(o(),t.name="",t.loading={name:e,abort:Wn([i],r)}),null;o(),t.name!==e&&(t.name=e,s&&!t.destroyed&&s(e));const l=["iconify"];return i.prefix!==""&&l.push("iconify--"+i.prefix),i.provider!==""&&l.push("iconify--"+i.provider),{data:a,classes:l}}function ze(e,t){return e?as({...se,...e},t):null}var cs=It("<svg><!></svg>"),fs=D("<span></span>");function Ge(e,t){const n=kt(t,["children","$$slots","$$events","$$legacy"]);Je(t,!1);const r=J({name:"",loading:null,destroyed:!1});let s=J(!1),o=J(0),i=J();const a=h=>{typeof n.onLoad=="function"&&n.onLoad(h),Qt()("load",{icon:h})};function l(){Vt(o)}Bt(()=>{Oe(s,!0)}),Zt(()=>{le(r,S(r).destroyed=!0),S(r).loading&&(S(r).loading.abort(),le(r,S(r).loading=null))}),Ht(()=>(S(o),Gt(n),S(s),S(r),S(i),ze),()=>{S(o);const h=!!n.ssr||S(s),p=ls(n.icon,S(r),h,l,a);Oe(i,p?ze(p.data,n):null),S(i)&&p.classes&&le(i,S(i).attributes.class=(typeof n.class=="string"?n.class+" ":"")+p.classes.join(" "))}),zt(),Xe();var u=Pe(),d=he(u);{var c=h=>{var p=Pe(),v=he(p);{var _=g=>{var f=cs();let x;var C=w(f);en(C,()=>S(i).body),k(f),q(()=>x=Re(f,x,{...S(i).attributes},void 0,!0)),P(g,f)},y=g=>{var f=fs();let x;q(()=>x=Re(f,x,{...S(i).attributes})),P(g,f)};pe(v,g=>{S(i).svg?g(_):g(y,!1)})}P(h,p)};pe(d,h=>{S(i)&&h(c)})}P(e,u),Ke()}const us=""+new URL("../assets/Dreamer_colour_full.99Ib-VuQ.svg",import.meta.url).href,U={sources:{avif:""+new URL("../assets/EN_Co-fundedbytheEU_RGB_POS.BPZkkYPI.avif",import.meta.url).href+" 2060w, "+new URL("../assets/EN_Co-fundedbytheEU_RGB_POS.B8R38fNA.avif",import.meta.url).href+" 4119w",webp:""+new URL("../assets/EN_Co-fundedbytheEU_RGB_POS.CntuwOwA.webp",import.meta.url).href+" 2060w, "+new URL("../assets/EN_Co-fundedbytheEU_RGB_POS.BTfBP17Z.webp",import.meta.url).href+" 4119w",png:""+new URL("../assets/EN_Co-fundedbytheEU_RGB_POS.CNcIkC8S.png",import.meta.url).href+" 2060w, "+new URL("../assets/EN_Co-fundedbytheEU_RGB_POS.DJ72mekS.png",import.meta.url).href+" 4119w"},img:{src:""+new URL("../assets/EN_Co-fundedbytheEU_RGB_POS.DJ72mekS.png",import.meta.url).href,w:4119,h:919}};var ds=D('<img alt="DREAMER logo full" class="h-24 w-full hover:opacity-80">'),hs=D('<img alt="logo EU" class="h-10 w-auto">'),ps=D("<source>"),gs=D('<picture><!> <img alt="logo EU" class="h-10 w-auto"></picture>'),vs=D('<footer class="bg-gray-100"><div class="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8"><div class="md:flex md:justify-between"><div class="mb-6 md:mb-0"><!></div> <div class="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3"><div><h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase">Links</h2> <ul class="text-gray-500  font-medium"><li class="mb-4"><!></li> <li class="mb-4"><!></li> <li><!></li></ul></div> <div><h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Follow us</h2> <ul class="text-gray-500 dark:text-gray-400 font-medium"><li class="mb-4 flex space-x-2 items-center"><!> <!></li> <li class="mb-4 flex space-x-2 items-center"><!> <!></li></ul></div> <div><h2 class="mb-2 text-sm font-semibold text-gray-900 uppercase">Contacts</h2> <ul class="text-gray-500 font-medium"><li class="mb-4"><p class="text-primary">Project Coordinator:</p> <div class="flex space-x-2"><p>Oleksii Yehorchenkov,</p> <!></div> <!></li> <li><p class="text-primary">Project Administrator:</p> <div class="flex space-x-2"><p>Nataliia Yehorchenkova,</p> <!></div> <!></li></ul></div></div></div> <hr class="my-2 border-primary sm:mx-auto lg:my-4"> <div class="sm:flex sm:items-center sm:justify-between"><!> <span class="text-sm text-gray-500 sm:text-center">© 2025 DREAMER. All Rights Reserved.</span></div></div></footer>');function ms(e,t){Je(t,!1),Xe();var n=vs(),r=w(n),s=w(r),o=w(s),i=w(o);j(i,{href:"/",class:"flex items-center",children:(b,$)=>{var I=ds();F(I,"src",us),P(b,I)},$$slots:{default:!0}}),k(o);var a=E(o,2),l=w(a),u=E(w(l),2),d=w(u),c=w(d);j(c,{href:"/",class:"hover:underline",children:(b,$)=>{A();var I=N("Link 1");P(b,I)},$$slots:{default:!0}}),k(d);var h=E(d,2),p=w(h);j(p,{href:"/",class:"hover:underline",children:(b,$)=>{A();var I=N("Link 2");P(b,I)},$$slots:{default:!0}}),k(h);var v=E(h,2),_=w(v);j(_,{href:"/",class:"hover:underline",children:(b,$)=>{A();var I=N("Link 3");P(b,I)},$$slots:{default:!0}}),k(v),k(u),k(l);var y=E(l,2),g=E(w(y),2),f=w(g),x=w(f);j(x,{href:"https://facebook.com/groups/631008452638298",target:"_blank",class:"hover:underline",children:(b,$)=>{A();var I=N("Facebook");P(b,I)},$$slots:{default:!0}});var C=E(x,2);Ge(C,{icon:"uil:external-link-alt"}),k(f);var L=E(f,2),m=w(L);j(m,{href:"https://www.linkedin.com/groups/10048753",target:"_blank",class:"hover:underline",children:(b,$)=>{A();var I=N("LinkedIn");P(b,I)},$$slots:{default:!0}});var T=E(m,2);Ge(T,{icon:"uil:external-link-alt"}),k(L),k(g),k(y);var R=E(y,2),M=E(w(R),2),O=w(M),G=E(w(O),2),dt=E(w(G),2);j(dt,{class:"hover:underline",href:"https://spectra-perseus.org",children:(b,$)=>{A();var I=N("Spectra CE EU");P(b,I)},$$slots:{default:!0}}),k(G);var ht=E(G,2);j(ht,{class:"hover:text-primary text-sm",href:"mailto:oleksii.yehorchenkov@stuba.sk",children:(b,$)=>{A();var I=N("oleksii.yehorchenkov@stuba.sk");P(b,I)},$$slots:{default:!0}}),k(O);var ke=E(O,2),re=E(w(ke),2),pt=E(w(re),2);j(pt,{class:"hover:underline",href:"https://spectra-perseus.org",children:(b,$)=>{A();var I=N("Spectra CE EU");P(b,I)},$$slots:{default:!0}}),k(re);var gt=E(re,2);j(gt,{class:"hover:text-primary text-sm",href:"mailto:nataliia.yehorchenkova@stuba.sk",children:(b,$)=>{A();var I=N("nataliia.yehorchenkova@stuba.sk");P(b,I)},$$slots:{default:!0}}),k(ke),k(M),k(R),k(a),k(s);var Ie=E(s,4),vt=w(Ie);{var mt=b=>{var $=hs();q(()=>{F($,"src",U.img.src),F($,"width",U.img.w),F($,"height",U.img.h)}),P(b,$)},yt=b=>{var $=gs(),I=w($);Jt(I,1,()=>Object.entries(U.sources),Wt,(xt,Ee)=>{let _t=()=>S(Ee)[0],bt=()=>S(Ee)[1];var ie=ps();q(()=>{F(ie,"srcset",bt()),F(ie,"type","image/"+_t())}),P(xt,ie)});var oe=E(I,2);k($),q(()=>{F(oe,"src",U.img.src),F(oe,"width",U.img.w),F(oe,"height",U.img.h)}),P(b,$)};pe(vt,b=>{typeof U=="string"?b(mt):b(yt,!1)})}A(2),k(Ie),k(r),k(n),P(e,n),Ke()}var ys=D("<!> <!> <!>",1);function Es(e,t){var n=ys(),r=he(n);an(r);var s=E(r,2);qt(s,()=>t.children);var o=E(s,2);ms(o,{}),P(e,n)}export{Es as component,Is as universal};
