import{J as ae,d as re,i as w,n as M,j as ne,g as z,H as fe,m as F,o as b,l as R,P as S,v as Q,h as U,k as ie,G as W,K as G,Q as J,R as le,F as se,T as ue,V as te,x as ve,W as de,B as _e,X as oe,q as ce,Y as y,Z as L,_ as he,$ as K,a0 as Z,a1 as Ee,a2 as pe,a3 as Te,z as Ae}from"./8ThbnUB_.js";function we(l,e){return e}function xe(l,e,r,t){for(var v=[],d=e.length,s=0;s<d;s++)le(e[s].e,v,!0);var p=d>0&&v.length===0&&r!==null;if(p){var o=r.parentNode;se(o),o.append(r),t.clear(),m(l,e[0].prev,e[d-1].next)}ue(v,()=>{for(var T=0;T<d;T++){var _=e[T];p||(t.delete(_.k),m(l,_.prev,_.next)),te(_.e,!p)}})}function He(l,e,r,t,v,d=null){var s=l,p={flags:e,items:new Map,first:null},o=(e&Z)!==0;if(o){var T=l;s=w?M(ve(T)):T.appendChild(ae())}w&&ne();var _=null,x=!1,C=de(()=>{var a=r();return Ee(a)?a:a==null?[]:W(a)});re(()=>{var a=z(C),f=a.length;if(x&&f===0)return;x=f===0;let u=!1;if(w){var H=s.data===fe;H!==(f===0)&&(s=F(),M(s),b(!1),u=!0)}if(w){for(var c=null,h,E=0;E<f;E++){if(R.nodeType===8&&R.data===_e){s=R,u=!0,b(!1);break}var A=a[E],n=t(A,E);h=$(R,p,c,null,A,n,E,v,e,r),p.items.set(n,h),c=h}f>0&&M(F())}if(!w){var i=oe;Ie(a,p,s,v,e,(i.f&S)!==0,t,r)}d!==null&&(f===0?_?Q(_):_=U(()=>d(s)):_!==null&&ie(_,()=>{_=null})),u&&b(!0),z(C)}),w&&(s=R)}function Ie(l,e,r,t,v,d,s,p){var q,V,Y,B;var o=(v&pe)!==0,T=(v&(y|L))!==0,_=l.length,x=e.items,C=e.first,a=C,f,u=null,H,c=[],h=[],E,A,n,i;if(o)for(i=0;i<_;i+=1)E=l[i],A=s(E,i),n=x.get(A),n!==void 0&&((q=n.a)==null||q.measure(),(H??(H=new Set)).add(n));for(i=0;i<_;i+=1){if(E=l[i],A=s(E,i),n=x.get(A),n===void 0){var j=a?a.e.nodes_start:r;u=$(j,e,u,u===null?e.first:u.next,E,A,i,t,v,p),x.set(A,u),c=[],h=[],a=u.next;continue}if(T&&me(n,E,i,v),n.e.f&S&&(Q(n.e),o&&((V=n.a)==null||V.unfix(),(H??(H=new Set)).delete(n))),n!==a){if(f!==void 0&&f.has(n)){if(c.length<h.length){var g=h[0],I;u=g.prev;var O=c[0],k=c[c.length-1];for(I=0;I<c.length;I+=1)P(c[I],g,r);for(I=0;I<h.length;I+=1)f.delete(h[I]);m(e,O.prev,k.next),m(e,u,O),m(e,k,g),a=g,u=k,i-=1,c=[],h=[]}else f.delete(n),P(n,a,r),m(e,n.prev,n.next),m(e,n,u===null?e.first:u.next),m(e,u,n),u=n;continue}for(c=[],h=[];a!==null&&a.k!==A;)(d||!(a.e.f&S))&&(f??(f=new Set)).add(a),h.push(a),a=a.next;if(a===null)continue;n=a}c.push(n),u=n,a=n.next}if(a!==null||f!==void 0){for(var N=f===void 0?[]:W(f);a!==null;)(d||!(a.e.f&S))&&N.push(a),a=a.next;var D=N.length;if(D>0){var ee=v&Z&&_===0?r:null;if(o){for(i=0;i<D;i+=1)(Y=N[i].a)==null||Y.measure();for(i=0;i<D;i+=1)(B=N[i].a)==null||B.fix()}xe(e,N,ee,x)}}o&&ce(()=>{var X;if(H!==void 0)for(n of H)(X=n.a)==null||X.apply()}),G.first=e.first&&e.first.e,G.last=u&&u.e}function me(l,e,r,t){t&y&&J(l.v,e),t&L?J(l.i,r):l.i=r}function $(l,e,r,t,v,d,s,p,o,T){var _=(o&y)!==0,x=(o&Te)===0,C=_?x?he(v):K(v):v,a=o&L?K(s):s,f={i:a,v:C,k:d,a:null,e:null,prev:r,next:t};try{return f.e=U(()=>p(l,C,a,T),w),f.e.prev=r&&r.e,f.e.next=t&&t.e,r===null?e.first=f:(r.next=f,r.e.next=f.e),t!==null&&(t.prev=f,t.e.prev=f.e),f}finally{}}function P(l,e,r){for(var t=l.next?l.next.e.nodes_start:r,v=e?e.e.nodes_start:r,d=l.e.nodes_start;d!==t;){var s=Ae(d);v.before(d),d=s}}function m(l,e,r){e===null?l.first=r:(e.next=r,e.e.next=r&&r.e),r!==null&&(r.prev=e,r.e.prev=e&&e.e)}export{He as e,we as i};
