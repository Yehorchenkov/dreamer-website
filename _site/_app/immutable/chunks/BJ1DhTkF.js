import{aG as S,am as k,U as V,K as T,ad as G,ae as Y,_ as z,q as J,w as A,x as K,aH as Q,y as p,aI as W,a1 as I,C as E,z as C,D as u,Q as y,aJ as F,aK as X,A as x,aL as D,aw as R,T as Z,av as ee,aM as te,N as re,J as ae,aN as ne,F as ie,p as oe,a as se,i as ue}from"./DZ14uBJS.js";function Ee(e){return e.endsWith("capture")&&e!=="gotpointercapture"&&e!=="lostpointercapture"}const le=["beforeinput","click","change","dblclick","contextmenu","focusin","focusout","input","keydown","keyup","mousedown","mousemove","mouseout","mouseover","mouseup","pointerdown","pointermove","pointerout","pointerover","pointerup","touchend","touchmove","touchstart"];function Te(e){return le.includes(e)}const ce={formnovalidate:"formNoValidate",ismap:"isMap",nomodule:"noModule",playsinline:"playsInline",readonly:"readOnly",defaultvalue:"defaultValue",defaultchecked:"defaultChecked",srcobject:"srcObject",novalidate:"noValidate",allowfullscreen:"allowFullscreen",disablepictureinpicture:"disablePictureInPicture",disableremoteplayback:"disableRemotePlayback"};function be(e){return e=e.toLowerCase(),ce[e]??e}const fe=["touchstart","touchmove"];function de(e){return fe.includes(e)}const _e=["textarea","script","style","title"];function Ne(e){return _e.includes(e)}function pe(e){var t=V,r=T;S(null),k(null);try{return e()}finally{S(t),k(r)}}const H=new Set,M=new Set;function q(e,t,r,o={}){function n(a){if(o.capture||N.call(t,a),!a.cancelBubble)return pe(()=>r==null?void 0:r.call(this,a))}return e.startsWith("pointer")||e.startsWith("touch")||e==="wheel"?J(()=>{t.addEventListener(e,n,o)}):t.addEventListener(e,n,o),n}function Ae(e,t,r,o={}){var n=q(t,e,r,o);return()=>{e.removeEventListener(t,n,o)}}function Ce(e,t,r,o,n){var a={capture:o,passive:n},i=q(e,t,r,a);(t===document.body||t===window||t===document)&&G(()=>{t.removeEventListener(e,i,a)})}function Le(e){for(var t=0;t<e.length;t++)H.add(e[t]);for(var r of M)r(e)}function N(e){var P;var t=this,r=t.ownerDocument,o=e.type,n=((P=e.composedPath)==null?void 0:P.call(e))||[],a=n[0]||e.target,i=0,h=e.__root;if(h){var c=n.indexOf(h);if(c!==-1&&(t===document||t===window)){e.__root=t;return}var f=n.indexOf(t);if(f===-1)return;c<=f&&(i=c)}if(a=n[i]||e.target,a!==t){Y(e,"currentTarget",{configurable:!0,get(){return a||r}});var b=V,d=T;S(null),k(null);try{for(var s,l=[];a!==null;){var m=a.assignedSlot||a.parentNode||a.host||null;try{var w=a["__"+o];if(w!==void 0&&!a.disabled)if(z(w)){var[B,...U]=w;B.apply(a,[e,...U])}else w.call(a,e)}catch(L){s?l.push(L):s=L}if(e.cancelBubble||m===t||m===null)break;a=m}if(s){for(let L of l)queueMicrotask(()=>{throw L});throw s}}finally{e.__root=t,delete e.currentTarget,S(b),k(d)}}}let _;function ve(){_=void 0}function Se(e){let t=null,r=p;var o;if(p){for(t=u,_===void 0&&(_=y(document.head));_!==null&&(_.nodeType!==8||_.data!==W);)_=I(_);_===null?E(!1):_=C(I(_))}p||(o=document.head.appendChild(A()));try{K(()=>e(o),Q)}finally{r&&(E(!0),_=u,C(t))}}function $(e){var t=document.createElement("template");return t.innerHTML=e,t.content}function v(e,t){var r=T;r.nodes_start===null&&(r.nodes_start=e,r.nodes_end=t)}function he(e,t){var r=(t&F)!==0,o=(t&X)!==0,n,a=!e.startsWith("<!>");return()=>{if(p)return v(u,null),u;n===void 0&&(n=$(a?e:"<!>"+e),r||(n=y(n)));var i=o?document.importNode(n,!0):n.cloneNode(!0);if(r){var h=y(i),c=i.lastChild;v(h,c)}else v(i,i);return i}}function ke(e,t){var r=he(e,t);return()=>me(r())}function Re(e,t,r="svg"){var o=!e.startsWith("<!>"),n=(t&F)!==0,a=`<${r}>${o?e:"<!>"+e}</${r}>`,i;return()=>{if(p)return v(u,null),u;if(!i){var h=$(a),c=y(h);if(n)for(i=document.createDocumentFragment();y(c);)i.appendChild(y(c));else i=y(c)}var f=i.cloneNode(!0);if(n){var b=y(f),d=f.lastChild;v(b,d)}else v(f,f);return f}}function me(e){if(p)return e;const t=e.nodeType===11,r=e.tagName==="SCRIPT"?[e]:e.querySelectorAll("script"),o=T;for(const a of r){const i=document.createElement("script");for(var n of a.attributes)i.setAttribute(n.name,n.value);i.textContent=a.textContent,(t?e.firstChild===a:e===a)&&(o.nodes_start=i),(t?e.lastChild===a:e===a)&&(o.nodes_end=i),a.replaceWith(i)}return e}function Ie(e=""){if(!p){var t=A(e+"");return v(t,t),t}var r=u;return r.nodeType!==3&&(r.before(r=A()),C(r)),v(r,r),r}function De(){if(p)return v(u,null),u;var e=document.createDocumentFragment(),t=document.createComment(""),r=A();return e.append(t,r),v(t,r),e}function Me(e,t){if(p){T.nodes_end=u,x();return}e!==null&&e.before(t)}function Oe(e,t){var r=t==null?"":typeof t=="object"?t+"":t;r!==(e.__t??(e.__t=e.nodeValue))&&(e.__t=r,e.nodeValue=r==null?"":r+"")}function ye(e,t){return j(e,t)}function Pe(e,t){D(),t.intro=t.intro??!1;const r=t.target,o=p,n=u;try{for(var a=y(r);a&&(a.nodeType!==8||a.data!==W);)a=I(a);if(!a)throw R;E(!0),C(a),x();const i=j(e,{...t,anchor:a});if(u===null||u.nodeType!==8||u.data!==Z)throw ee(),R;return E(!1),i}catch(i){if(i===R)return t.recover===!1&&te(),D(),re(r),E(!1),ye(e,t);throw i}finally{E(o),C(n),ve()}}const g=new Map;function j(e,{target:t,anchor:r,props:o={},events:n,context:a,intro:i=!0}){D();var h=new Set,c=d=>{for(var s=0;s<d.length;s++){var l=d[s];if(!h.has(l)){h.add(l);var m=de(l);t.addEventListener(l,N,{passive:m});var w=g.get(l);w===void 0?(document.addEventListener(l,N,{passive:m}),g.set(l,1)):g.set(l,w+1)}}};c(ae(H)),M.add(c);var f=void 0,b=ne(()=>{var d=r??t.appendChild(A());return ie(()=>{if(a){oe({});var s=ue;s.c=a}n&&(o.$$events=n),p&&v(d,null),f=e(d,o)||{},p&&(T.nodes_end=u),a&&se()}),()=>{var m;for(var s of h){t.removeEventListener(s,N);var l=g.get(s);--l===0?(document.removeEventListener(s,N),g.delete(s)):g.set(s,l)}M.delete(c),d!==r&&((m=d.parentNode)==null||m.removeChild(d))}});return O.set(f,b),f}let O=new WeakMap;function Ve(e,t){const r=O.get(e);return r?(O.delete(e),r(t)):Promise.resolve()}const we="5";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(we);export{Me as a,Ie as b,De as c,v as d,$ as e,Ee as f,q as g,Le as h,Ne as i,be as j,Te as k,Pe as l,ye as m,Re as n,Se as o,ke as p,Ae as q,Ce as r,Oe as s,he as t,Ve as u};
