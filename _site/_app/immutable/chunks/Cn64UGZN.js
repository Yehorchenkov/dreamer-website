var an=Array.isArray,ln=Array.prototype.indexOf,Gn=Array.from,$n=Object.defineProperty,mt=Object.getOwnPropertyDescriptor,sn=Object.getOwnPropertyDescriptors,Kn=Object.prototype,Zn=Array.prototype,un=Object.getPrototypeOf;function zn(t){return typeof t=="function"}const Jn=()=>{};function Qn(t){return t()}function on(t){for(var n=0;n<t.length;n++)t[n]()}const w=2,Dt=4,G=8,ct=16,D=32,q=64,z=128,C=256,J=512,p=1024,k=2048,N=4096,L=8192,Y=16384,fn=32768,St=65536,Wn=1<<17,_n=1<<19,Rt=1<<20,Tt=Symbol("$state"),Xn=Symbol("legacy props"),tr=Symbol("");function kt(t){return t===this.v}function cn(t,n){return t!=t?n==n:t!==n||t!==null&&typeof t=="object"||typeof t=="function"}function It(t){return!cn(t,this.v)}function vn(t){throw new Error("https://svelte.dev/e/effect_in_teardown")}function pn(){throw new Error("https://svelte.dev/e/effect_in_unowned_derived")}function hn(t){throw new Error("https://svelte.dev/e/effect_orphan")}function dn(){throw new Error("https://svelte.dev/e/effect_update_depth_exceeded")}function nr(){throw new Error("https://svelte.dev/e/hydration_failed")}function rr(t){throw new Error("https://svelte.dev/e/props_invalid_value")}function er(){throw new Error("https://svelte.dev/e/state_descriptors_fixed")}function ar(){throw new Error("https://svelte.dev/e/state_prototype_fixed")}function En(){throw new Error("https://svelte.dev/e/state_unsafe_local_read")}function wn(){throw new Error("https://svelte.dev/e/state_unsafe_mutation")}let $=!1;function lr(){$=!0}const sr=1,ur=2,or=4,ir=8,fr=16,_r=1,cr=2,vr=4,pr=8,hr=16,dr=1,Er=2,yn="[",mn="[!",Tn="]",Ot={},wr=Symbol(),yr="http://www.w3.org/2000/svg";function vt(t,n){var r={f:0,v:t,reactions:null,equals:kt,rv:0,wv:0};return r}function mr(t){return Ct(vt(t))}function gn(t,n=!1){var e;const r=vt(t);return n||(r.equals=It),$&&u!==null&&u.l!==null&&((e=u.l).s??(e.s=[])).push(r),r}function Tr(t,n=!1){return Ct(gn(t,n))}function Ct(t){return i!==null&&!g&&i.f&w&&(A===null?bn([t]):A.push(t)),t}function gr(t,n){return pt(t,ut(()=>st(t))),n}function pt(t,n){return i!==null&&!g&&rt()&&i.f&(w|ct)&&(A===null||!A.includes(t))&&wn(),An(t,n)}function An(t,n){return t.equals(n)||(t.v,t.v=n,t.wv=Qt(),Nt(t,k),rt()&&f!==null&&f.f&p&&!(f.f&(D|q))&&(x===null?Pn([t]):x.push(t))),n}function Nt(t,n){var r=t.reactions;if(r!==null)for(var e=rt(),a=r.length,l=0;l<a;l++){var s=r[l],o=s.f;o&k||!e&&s===f||(y(s,n),o&(p|C)&&(o&w?Nt(s,N):lt(s)))}}function bt(t){console.warn("https://svelte.dev/e/hydration_mismatch")}let O=!1;function Ar(t){O=t}let m;function j(t){if(t===null)throw bt(),Ot;return m=t}function xr(){return j(b(m))}function Dr(t){if(O){if(b(m)!==null)throw bt(),Ot;m=t}}function Sr(t=1){if(O){for(var n=t,r=m;n--;)r=b(r);m=r}}function Rr(){for(var t=0,n=m;;){if(n.nodeType===8){var r=n.data;if(r===Tn){if(t===0)return n;t-=1}else(r===yn||r===mn)&&(t+=1)}var e=b(n);n.remove(),n=e}}var gt,Pt,Ft;function kr(){if(gt===void 0){gt=window;var t=Element.prototype,n=Node.prototype;Pt=mt(n,"firstChild").get,Ft=mt(n,"nextSibling").get,t.__click=void 0,t.__className="",t.__attributes=null,t.__styles=null,t.__e=void 0,Text.prototype.__t=void 0}}function ot(t=""){return document.createTextNode(t)}function it(t){return Pt.call(t)}function b(t){return Ft.call(t)}function Ir(t,n){if(!O)return it(t);var r=it(m);if(r===null)r=m.appendChild(ot());else if(n&&r.nodeType!==3){var e=ot();return r==null||r.before(e),j(e),e}return j(r),r}function Or(t,n){if(!O){var r=it(t);return r instanceof Comment&&r.data===""?b(r):r}return m}function Cr(t,n=1,r=!1){let e=O?m:t;for(var a;n--;)a=e,e=b(e);if(!O)return e;var l=e==null?void 0:e.nodeType;if(r&&l!==3){var s=ot();return e===null?a==null||a.after(s):e.before(s),j(s),s}return j(e),e}function Nr(t){t.textContent=""}function Mt(t){var n=w|k;f===null?n|=C:f.f|=Rt;var r=i!==null&&i.f&w?i:null;const e={children:null,ctx:u,deps:null,equals:kt,f:n,fn:t,reactions:null,rv:0,v:null,wv:0,parent:r??f};return r!==null&&(r.children??(r.children=[])).push(e),e}function br(t){const n=Mt(t);return n.equals=It,n}function Lt(t){var n=t.children;if(n!==null){t.children=null;for(var r=0;r<n.length;r+=1){var e=n[r];e.f&w?ht(e):R(e)}}}function xn(t){for(var n=t.parent;n!==null;){if(!(n.f&w))return n;n=n.parent}return null}function qt(t){var n,r=f;X(xn(t));try{Lt(t),n=Xt(t)}finally{X(r)}return n}function Yt(t){var n=qt(t),r=(S||t.f&C)&&t.deps!==null?N:p;y(t,r),t.equals(n)||(t.v=n,t.wv=Qt())}function ht(t){Lt(t),V(t,0),y(t,Y),t.v=t.children=t.deps=t.ctx=t.reactions=null}function Ht(t){f===null&&i===null&&hn(),i!==null&&i.f&C&&pn(),Et&&vn()}function Dn(t,n){var r=n.last;r===null?n.last=n.first=t:(r.next=t,t.prev=r,n.last=t)}function P(t,n,r,e=!0){var a=(t&q)!==0,l=f,s={ctx:u,deps:null,deriveds:null,nodes_start:null,nodes_end:null,f:t|k,first:null,fn:n,last:null,next:null,parent:a?null:l,prev:null,teardown:null,transitions:null,wv:0};if(r){var o=F;try{At(!0),at(s),s.f|=fn}catch(T){throw R(s),T}finally{At(o)}}else n!==null&&lt(s);var _=r&&s.deps===null&&s.first===null&&s.nodes_start===null&&s.teardown===null&&(s.f&(Rt|z))===0;if(!_&&!a&&e&&(l!==null&&Dn(s,l),i!==null&&i.f&w)){var c=i;(c.children??(c.children=[])).push(s)}return s}function Pr(){return i===null||g?!1:!S}function Fr(t){const n=P(G,null,!1);return y(n,p),n.teardown=t,n}function Sn(t){Ht();var n=f!==null&&(f.f&D)!==0&&u!==null&&!u.m;if(n){var r=u;(r.e??(r.e=[])).push({fn:t,effect:f,reaction:i})}else{var e=jt(t);return e}}function Mr(t){return Ht(),dt(t)}function Lr(t){const n=P(q,t,!0);return()=>{R(n)}}function qr(t){const n=P(q,t,!0);return(r={})=>new Promise(e=>{r.outro?In(n,()=>{R(n),e(void 0)}):(R(n),e(void 0))})}function jt(t){return P(Dt,t,!1)}function Yr(t,n){var r=u,e={effect:null,ran:!1};r.l.r1.push(e),e.effect=dt(()=>{t(),!e.ran&&(e.ran=!0,pt(r.l.r2,!0),ut(n))})}function Hr(){var t=u;dt(()=>{if(st(t.l.r2)){for(var n of t.l.r1){var r=n.effect;r.f&p&&y(r,N),H(r)&&at(r),n.ran=!1}t.l.r2.v=!1}})}function dt(t){return P(G,t,!0)}function jr(t,n=[],r=Mt){const e=n.map(r);return Rn(()=>t(...e.map(st)))}function Rn(t,n=0){return P(G|ct|n,t,!0)}function Br(t,n=!0){return P(G|D,t,!0,n)}function Bt(t){var n=t.teardown;if(n!==null){const r=Et,e=i;xt(!0),W(null);try{n.call(null)}finally{xt(r),W(e)}}}function Ut(t){var n=t.deriveds;if(n!==null){t.deriveds=null;for(var r=0;r<n.length;r+=1)ht(n[r])}}function Vt(t,n=!1){var r=t.first;for(t.first=t.last=null;r!==null;){var e=r.next;R(r,n),r=e}}function kn(t){for(var n=t.first;n!==null;){var r=n.next;n.f&D||R(n),n=r}}function R(t,n=!0){var r=!1;if((n||t.f&_n)&&t.nodes_start!==null){for(var e=t.nodes_start,a=t.nodes_end;e!==null;){var l=e===a?null:b(e);e.remove(),e=l}r=!0}Vt(t,n&&!r),Ut(t),V(t,0),y(t,Y);var s=t.transitions;if(s!==null)for(const _ of s)_.stop();Bt(t);var o=t.parent;o!==null&&o.first!==null&&Gt(t),t.next=t.prev=t.teardown=t.ctx=t.deps=t.fn=t.nodes_start=t.nodes_end=null}function Gt(t){var n=t.parent,r=t.prev,e=t.next;r!==null&&(r.next=e),e!==null&&(e.prev=r),n!==null&&(n.first===t&&(n.first=e),n.last===t&&(n.last=r))}function In(t,n){var r=[];$t(t,r,!0),On(r,()=>{R(t),n&&n()})}function On(t,n){var r=t.length;if(r>0){var e=()=>--r||n();for(var a of t)a.out(e)}else n()}function $t(t,n,r){if(!(t.f&L)){if(t.f^=L,t.transitions!==null)for(const s of t.transitions)(s.is_global||r)&&n.push(s);for(var e=t.first;e!==null;){var a=e.next,l=(e.f&St)!==0||(e.f&D)!==0;$t(e,n,l?r:!1),e=a}}}function Ur(t){Kt(t,!0)}function Kt(t,n){if(t.f&L){t.f^=L,t.f&p||(t.f^=p),H(t)&&(y(t,k),lt(t));for(var r=t.first;r!==null;){var e=r.next,a=(r.f&St)!==0||(r.f&D)!==0;Kt(r,a?n:!1),r=e}if(t.transitions!==null)for(const l of t.transitions)(l.is_global||n)&&l.in()}}let Q=!1,ft=[];function Zt(){Q=!1;const t=ft.slice();ft=[],on(t)}function Vr(t){Q||(Q=!0,queueMicrotask(Zt)),ft.push(t)}function Cn(){Q&&Zt()}function nt(t){throw new Error("https://svelte.dev/e/lifecycle_outside_component")}const zt=0,Nn=1;let K=!1,Z=zt,B=!1,U=null,F=!1,Et=!1;function At(t){F=t}function xt(t){Et=t}let I=[],M=0;let i=null,g=!1;function W(t){i=t}let f=null;function X(t){f=t}let A=null;function bn(t){A=t}let h=null,E=0,x=null;function Pn(t){x=t}let Jt=1,tt=0,S=!1,u=null;function Qt(){return++Jt}function rt(){return!$||u!==null&&u.l===null}function H(t){var c;var n=t.f;if(n&k)return!0;if(n&N){var r=t.deps,e=(n&C)!==0;if(r!==null){var a,l,s=(n&J)!==0,o=e&&f!==null&&!S,_=r.length;if(s||o){for(a=0;a<_;a++)l=r[a],(s||!((c=l==null?void 0:l.reactions)!=null&&c.includes(t)))&&(l.reactions??(l.reactions=[])).push(t);s&&(t.f^=J)}for(a=0;a<_;a++)if(l=r[a],H(l)&&Yt(l),l.wv>t.wv)return!0}(!e||f!==null&&!S)&&y(t,p)}return!1}function Fn(t,n){for(var r=n;r!==null;){if(r.f&z)try{r.fn(t);return}catch{r.f^=z}r=r.parent}throw K=!1,t}function Mn(t){return(t.f&Y)===0&&(t.parent===null||(t.parent.f&z)===0)}function et(t,n,r,e){if(K){if(r===null&&(K=!1),Mn(n))throw t;return}r!==null&&(K=!0);{Fn(t,n);return}}function Wt(t,n,r=0){var e=t.reactions;if(e!==null)for(var a=0;a<e.length;a++){var l=e[a];l.f&w?Wt(l,n,r+1):n===l&&(r===0?y(l,k):l.f&p&&y(l,N),lt(l))}}function Xt(t){var yt;var n=h,r=E,e=x,a=i,l=S,s=A,o=u,_=g,c=t.f;h=null,E=0,x=null,i=c&(D|q)?null:t,S=!F&&(c&C)!==0,A=null,u=t.ctx,g=!1,tt++;try{var T=(0,t.fn)(),v=t.deps;if(h!==null){var d;if(V(t,E),v!==null&&E>0)for(v.length=E+h.length,d=0;d<h.length;d++)v[E+d]=h[d];else t.deps=v=h;if(!S)for(d=E;d<v.length;d++)((yt=v[d]).reactions??(yt.reactions=[])).push(t)}else v!==null&&E<v.length&&(V(t,E),v.length=E);if(rt()&&x!==null&&!(t.f&(w|N|k)))for(d=0;d<x.length;d++)Wt(x[d],t);return a!==null&&tt++,T}finally{h=n,E=r,x=e,i=a,S=l,A=s,u=o,g=_}}function Ln(t,n){let r=n.reactions;if(r!==null){var e=ln.call(r,t);if(e!==-1){var a=r.length-1;a===0?r=n.reactions=null:(r[e]=r[a],r.pop())}}r===null&&n.f&w&&(h===null||!h.includes(n))&&(y(n,N),n.f&(C|J)||(n.f^=J),V(n,0))}function V(t,n){var r=t.deps;if(r!==null)for(var e=n;e<r.length;e++)Ln(t,r[e])}function at(t){var n=t.f;if(!(n&Y)){y(t,p);var r=f,e=u;f=t;try{n&ct?kn(t):Vt(t),Ut(t),Bt(t);var a=Xt(t);t.teardown=typeof a=="function"?a:null,t.wv=Jt;var l=t.deps,s}catch(o){et(o,t,r,e||t.ctx)}finally{f=r}}}function tn(){if(M>1e3){M=0;try{dn()}catch(t){if(U!==null)et(t,U,null);else throw t}}M++}function nn(t){var n=t.length;if(n!==0){tn();var r=F;F=!0;try{for(var e=0;e<n;e++){var a=t[e];a.f&p||(a.f^=p);var l=[];rn(a,l),qn(l)}}finally{F=r}}}function qn(t){var n=t.length;if(n!==0)for(var r=0;r<n;r++){var e=t[r];if(!(e.f&(Y|L)))try{H(e)&&(at(e),e.deps===null&&e.first===null&&e.nodes_start===null&&(e.teardown===null?Gt(e):e.fn=null))}catch(a){et(a,e,null,e.ctx)}}}function Yn(){if(B=!1,M>1001)return;const t=I;I=[],nn(t),B||(M=0,U=null)}function lt(t){Z===zt&&(B||(B=!0,queueMicrotask(Yn))),U=t;for(var n=t;n.parent!==null;){n=n.parent;var r=n.f;if(r&(q|D)){if(!(r&p))return;n.f^=p}}I.push(n)}function rn(t,n){var r=t.first,e=[];t:for(;r!==null;){var a=r.f,l=(a&D)!==0,s=l&&(a&p)!==0,o=r.next;if(!s&&!(a&L))if(a&G){if(l)r.f^=p;else try{H(r)&&at(r)}catch(v){et(v,r,null,r.ctx)}var _=r.first;if(_!==null){r=_;continue}}else a&Dt&&e.push(r);if(o===null){let v=r.parent;for(;v!==null;){if(t===v)break t;var c=v.next;if(c!==null){r=c;continue t}v=v.parent}}r=o}for(var T=0;T<e.length;T++)_=e[T],n.push(_),rn(_,n)}function en(t){var n=Z,r=I;try{tn();const a=[];Z=Nn,I=a,B=!1,nn(r);var e=t==null?void 0:t();return Cn(),(I.length>0||a.length>0)&&en(),M=0,U=null,e}finally{Z=n,I=r}}async function Gr(){await Promise.resolve(),en()}function st(t){var T;var n=t.f,r=(n&w)!==0;if(r&&n&Y){var e=qt(t);return ht(t),e}if(i!==null&&!g){A!==null&&A.includes(t)&&En();var a=i.deps;t.rv<tt&&(t.rv=tt,h===null&&a!==null&&a[E]===t?E++:h===null?h=[t]:h.push(t))}else if(r&&t.deps===null)for(var l=t,s=l.parent,o=l;s!==null;)if(s.f&w){var _=s;o=_,s=_.parent}else{var c=s;(T=c.deriveds)!=null&&T.includes(o)||(c.deriveds??(c.deriveds=[])).push(o);break}return r&&(l=t,H(l)&&Yt(l)),t.v}function ut(t){var n=g;try{return g=!0,t()}finally{g=n}}const Hn=-7169;function y(t,n){t.f=t.f&Hn|n}function $r(t){return wt().get(t)}function Kr(t,n){return wt().set(t,n),n}function Zr(t){return wt().has(t)}function wt(t){return u===null&&nt(),u.c??(u.c=new Map(jn(u)||void 0))}function jn(t){let n=t.p;for(;n!==null;){const r=n.c;if(r!==null)return r;n=n.p}return null}function zr(t,n=1){var r=st(t),e=n===1?r++:r--;return pt(t,r),e}function Jr(t,n=!1,r){u={p:u,c:null,e:null,m:!1,s:t,x:null,l:null},$&&!n&&(u.l={s:null,u:null,r1:[],r2:vt(!1)})}function Qr(t){const n=u;if(n!==null){const s=n.e;if(s!==null){var r=f,e=i;n.e=null;try{for(var a=0;a<s.length;a++){var l=s[a];X(l.effect),W(l.reaction),jt(l.fn)}}finally{X(r),W(e)}}u=n.p,n.m=!0}return{}}function Wr(t){if(!(typeof t!="object"||!t||t instanceof EventTarget)){if(Tt in t)_t(t);else if(!Array.isArray(t))for(let n in t){const r=t[n];typeof r=="object"&&r&&Tt in r&&_t(r)}}}function _t(t,n=new Set){if(typeof t=="object"&&t!==null&&!(t instanceof EventTarget)&&!n.has(t)){n.add(t),t instanceof Date&&t.getTime();for(let e in t)try{_t(t[e],n)}catch{}const r=un(t);if(r!==Object.prototype&&r!==Array.prototype&&r!==Map.prototype&&r!==Set.prototype&&r!==Date.prototype){const e=sn(r);for(let a in e){const l=e[a].get;if(l)try{l.call(t)}catch{}}}}}function Bn(t){u===null&&nt(),$&&u.l!==null?Vn(u).m.push(t):Sn(()=>{const n=ut(t);if(typeof n=="function")return n})}function Xr(t){u===null&&nt(),Bn(()=>()=>ut(t))}function Un(t,n,{bubbles:r=!1,cancelable:e=!1}={}){return new CustomEvent(t,{detail:n,bubbles:r,cancelable:e})}function te(){const t=u;return t===null&&nt(),(n,r,e)=>{var l;const a=(l=t.s.$$events)==null?void 0:l[n];if(a){const s=an(a)?a.slice():[a],o=Un(n,r,e);for(const _ of s)_.call(t.x,o);return!o.defaultPrevented}return!0}}function Vn(t){var n=t.l;return n.u??(n.u={a:[],b:[],m:[]})}export{Yr as $,jr as A,Ir as B,Dr as C,Cr as D,St as E,Sr as F,st as G,mn as H,L as I,Vr as J,sr as K,An as L,ur as M,$t as N,On as O,R as P,or as Q,br as R,an as S,i as T,wr as U,ir as V,gn as W,vt as X,fr as Y,Bn as Z,Xr as _,xr as a,Hr as a0,Or as a1,pt as a2,gr as a3,Tr as a4,Wr as a5,te as a6,zr as a7,Xn as a8,en as a9,jt as aA,dt as aB,rr as aC,Wn as aD,vr as aE,It as aF,D as aG,q as aH,_r as aI,$ as aJ,cr as aK,pr as aL,hr as aM,zn as aN,cn as aO,Pr as aP,Zr as aQ,$r as aR,Kr as aS,Lr as aT,$n as aa,Mr as ab,Sn as ac,Gr as ad,mr as ae,Mt as af,Jn as ag,yr as ah,un as ai,sn as aj,tr as ak,ut as al,Qn as am,on as an,lr as ao,Tt as ap,Kn as aq,Zn as ar,er as as,mt as at,ar as au,W as av,X as aw,Fr as ax,dr as ay,Er as az,Rn as b,Br as c,m as d,Ar as e,Ur as f,it as g,O as h,kr as i,yn as j,b as k,Ot as l,Tn as m,bt as n,nr as o,In as p,Nr as q,Rr as r,j as s,Gn as t,qr as u,ot as v,Jr as w,f as x,Qr as y,u as z};
