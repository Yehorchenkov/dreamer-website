import{i as m,g as D,j as L,k as O,l as p,e as c,s as E,a as H,d as l,m as I,n as Y,o as j,q as k,t as C,u as M,v as S,c as V,w as $,h as w,x as q,y as z,z as P}from"./Cn64UGZN.js";import{a as W,r as N,h,b as B,i as F}from"./CXC7qfEM.js";function Q(t,e){var r=e==null?"":typeof e=="object"?e+"":e;r!==(t.__t??(t.__t=t.nodeValue))&&(t.__t=r,t.nodeValue=r==null?"":r+"")}function G(t,e){return b(t,e)}function U(t,e){m(),e.intro=e.intro??!1;const r=e.target,_=w,u=l;try{for(var a=D(r);a&&(a.nodeType!==8||a.data!==L);)a=O(a);if(!a)throw p;c(!0),E(a),H();const o=b(t,{...e,anchor:a});if(l===null||l.nodeType!==8||l.data!==I)throw Y(),p;return c(!1),o}catch(o){if(o===p)return e.recover===!1&&j(),m(),k(r),c(!1),G(t,e);throw o}finally{c(_),E(u)}}const d=new Map;function b(t,{target:e,anchor:r,props:_={},events:u,context:a,intro:o=!0}){m();var v=new Set,y=i=>{for(var s=0;s<i.length;s++){var n=i[s];if(!v.has(n)){v.add(n);var f=F(n);e.addEventListener(n,h,{passive:f});var T=d.get(n);T===void 0?(document.addEventListener(n,h,{passive:f}),d.set(n,1)):d.set(n,T+1)}}};y(C(W)),N.add(y);var g=void 0,A=M(()=>{var i=r??e.appendChild(S());return V(()=>{if(a){$({});var s=P;s.c=a}u&&(_.$$events=u),w&&B(i,null),g=t(i,_)||{},w&&(q.nodes_end=l),a&&z()}),()=>{var f;for(var s of v){e.removeEventListener(s,h);var n=d.get(s);--n===0?(document.removeEventListener(s,h),d.delete(s)):d.set(s,n)}N.delete(y),i!==r&&((f=i.parentNode)==null||f.removeChild(i))}});return R.set(g,A),g}let R=new WeakMap;function X(t,e){const r=R.get(t);return r?(R.delete(t),r(e)):Promise.resolve()}export{U as h,G as m,Q as s,X as u};
