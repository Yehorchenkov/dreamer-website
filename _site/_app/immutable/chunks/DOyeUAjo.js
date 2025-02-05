import{ah as A,ai as ee,aj as re,a6 as S,ak as te,S as w,al as L,U as g,g as m,I as R,am as ne,ae,a4 as H,an as F,ao as D,a5 as Z,V as ie,aa as X,F as U,t as N,ap as se,aq as ue,j as B,l as T,s as fe,k as le,ar as oe,as as ce,b as W,at as de,au as _e,av as ve,aw as pe,ax as he,ay as ge,az as ye,L as be,aA as we,aB as me,R as J,f as $,a3 as Ee,aC as Pe,W as Se,aD as M}from"./SD-3mXup.js";function x(e,r=null,t){if(typeof e!="object"||e===null||A in e)return e;const s=ae(e);if(s!==ee&&s!==re)return e;var n=new Map,i=H(e),d=S(0);i&&n.set("length",S(e.length));var p;return new Proxy(e,{defineProperty(l,a,u){(!("value"in u)||u.configurable===!1||u.enumerable===!1||u.writable===!1)&&te();var o=n.get(a);return o===void 0?(o=S(u.value),n.set(a,o)):w(o,x(u.value,p)),!0},deleteProperty(l,a){var u=n.get(a);if(u===void 0)a in l&&n.set(a,S(g));else{if(i&&typeof a=="string"){var o=n.get("length"),f=Number(a);Number.isInteger(f)&&f<o.v&&w(o,f)}w(u,g),G(d)}return!0},get(l,a,u){var v;if(a===A)return e;var o=n.get(a),f=a in l;if(o===void 0&&(!f||(v=L(l,a))!=null&&v.writable)&&(o=S(x(f?l[a]:g,p)),n.set(a,o)),o!==void 0){var c=m(o);return c===g?void 0:c}return Reflect.get(l,a,u)},getOwnPropertyDescriptor(l,a){var u=Reflect.getOwnPropertyDescriptor(l,a);if(u&&"value"in u){var o=n.get(a);o&&(u.value=m(o))}else if(u===void 0){var f=n.get(a),c=f==null?void 0:f.v;if(f!==void 0&&c!==g)return{enumerable:!0,configurable:!0,value:c,writable:!0}}return u},has(l,a){var c;if(a===A)return!0;var u=n.get(a),o=u!==void 0&&u.v!==g||Reflect.has(l,a);if(u!==void 0||R!==null&&(!o||(c=L(l,a))!=null&&c.writable)){u===void 0&&(u=S(o?x(l[a],p):g),n.set(a,u));var f=m(u);if(f===g)return!1}return o},set(l,a,u,o){var b;var f=n.get(a),c=a in l;if(i&&a==="length")for(var v=u;v<f.v;v+=1){var y=n.get(v+"");y!==void 0?w(y,g):v in l&&(y=S(g),n.set(v+"",y))}f===void 0?(!c||(b=L(l,a))!=null&&b.writable)&&(f=S(void 0),w(f,x(u,p)),n.set(a,f)):(c=f.v!==g,w(f,x(u,p)));var h=Reflect.getOwnPropertyDescriptor(l,a);if(h!=null&&h.set&&h.set.call(o,u),!c){if(i&&typeof a=="string"){var I=n.get("length"),P=Number(a);Number.isInteger(P)&&P>=I.v&&w(I,P+1)}G(d)}return!0},ownKeys(l){m(d);var a=Reflect.ownKeys(l).filter(f=>{var c=n.get(f);return c===void 0||c.v!==g});for(var[u,o]of n)o.v!==g&&!(u in l)&&a.push(u);return a},setPrototypeOf(){ne()}})}function G(e,r=1){w(e,e.v+r)}function Ve(e){return e.endsWith("capture")&&e!=="gotpointercapture"&&e!=="lostpointercapture"}const Te=["beforeinput","click","change","dblclick","contextmenu","focusin","focusout","input","keydown","keyup","mousedown","mousemove","mouseout","mouseover","mouseup","pointerdown","pointermove","pointerout","pointerover","pointerup","touchend","touchmove","touchstart"];function qe(e){return Te.includes(e)}const Ie={formnovalidate:"formNoValidate",ismap:"isMap",nomodule:"noModule",playsinline:"playsInline",readonly:"readOnly",defaultvalue:"defaultValue",defaultchecked:"defaultChecked",srcobject:"srcObject",novalidate:"noValidate",allowfullscreen:"allowFullscreen",disablepictureinpicture:"disablePictureInPicture",disableremoteplayback:"disableRemotePlayback"};function Ue(e){return e=e.toLowerCase(),Ie[e]??e}const Re=["touchstart","touchmove"];function We(e){return Re.includes(e)}const Oe=["textarea","script","style","title"];function ke(e){return Oe.includes(e)}function xe(e){var r=Z,t=R;F(null),D(null);try{return e()}finally{F(r),D(t)}}const Ne=new Set,Ae=new Set;function Le(e,r,t,s={}){function n(i){if(s.capture||De.call(r,i),!i.cancelBubble)return xe(()=>t==null?void 0:t.call(this,i))}return e.startsWith("pointer")||e.startsWith("touch")||e==="wheel"?X(()=>{r.addEventListener(e,n,s)}):r.addEventListener(e,n,s),n}function Ke(e,r,t,s={}){var n=Le(r,e,t,s);return()=>{e.removeEventListener(r,n,s)}}function $e(e){for(var r=0;r<e.length;r++)Ne.add(e[r]);for(var t of Ae)t(e)}function De(e){var P;var r=this,t=r.ownerDocument,s=e.type,n=((P=e.composedPath)==null?void 0:P.call(e))||[],i=n[0]||e.target,d=0,p=e.__root;if(p){var l=n.indexOf(p);if(l!==-1&&(r===document||r===window)){e.__root=r;return}var a=n.indexOf(r);if(a===-1)return;l<=a&&(d=l)}if(i=n[d]||e.target,i!==r){ie(e,"currentTarget",{configurable:!0,get(){return i||t}});var u=Z,o=R;F(null),D(null);try{for(var f,c=[];i!==null;){var v=i.assignedSlot||i.parentNode||i.host||null;try{var y=i["__"+s];if(y!==void 0&&!i.disabled)if(H(y)){var[h,...I]=y;h.apply(i,[e,...I])}else y.call(i,e)}catch(b){f?c.push(b):f=b}if(e.cancelBubble||v===r||v===null)break;i=v}if(f){for(let b of c)queueMicrotask(()=>{throw b});throw f}}finally{e.__root=r,delete e.currentTarget,F(u),D(o)}}}function Q(e){var r=document.createElement("template");return r.innerHTML=e,r.content}function E(e,r){var t=R;t.nodes_start===null&&(t.nodes_start=e,t.nodes_end=r)}function Ge(e,r){var t=(r&se)!==0,s=(r&ue)!==0,n,i=!e.startsWith("<!>");return()=>{if(B)return E(T,null),T;n===void 0&&(n=Q(i?e:"<!>"+e),t||(n=N(n)));var d=s?document.importNode(n,!0):n.cloneNode(!0);if(t){var p=N(d),l=d.lastChild;E(p,l)}else E(d,d);return d}}function Ye(e,r,t="svg"){var s=!e.startsWith("<!>"),n=`<${t}>${s?e:"<!>"+e}</${t}>`,i;return()=>{if(B)return E(T,null),T;if(!i){var d=Q(n),p=N(d);for(i=document.createDocumentFragment();N(p);)i.appendChild(N(p))}var l=i.cloneNode(!0);{var a=N(l),u=l.lastChild;E(a,u)}return l}}function ze(e=""){if(!B){var r=U(e+"");return E(r,r),r}var t=T;return t.nodeType!==3&&(t.before(t=U()),fe(t)),E(t,t),t}function He(){if(B)return E(T,null),T;var e=document.createDocumentFragment(),r=document.createComment(""),t=U();return e.append(r,t),E(r,t),e}function Ze(e,r){if(B){R.nodes_end=T,le();return}e!==null&&e.before(r)}function Y(e,r){return e===r||(e==null?void 0:e[A])===r}function Xe(e={},r,t,s){return oe(()=>{var n,i;return ce(()=>{n=i,i=[],W(()=>{e!==t(...i)&&(r(e,...i),n&&Y(t(...n),e)&&r(null,...n))})}),()=>{X(()=>{i&&Y(t(...i),e)&&r(null,...i)})}}),e}let j=!1;function Ce(e){var r=j;try{return j=!1,[e(),j]}finally{j=r}}const Me={get(e,r){if(!e.exclude.includes(r))return e.props[r]},set(e,r){return!1},getOwnPropertyDescriptor(e,r){if(!e.exclude.includes(r)&&r in e.props)return{enumerable:!0,configurable:!0,value:e.props[r]}},has(e,r){return e.exclude.includes(r)?!1:r in e.props},ownKeys(e){return Reflect.ownKeys(e.props).filter(r=>!e.exclude.includes(r))}};function Je(e,r,t){return new Proxy({props:e,exclude:r},Me)}const Be={get(e,r){let t=e.props.length;for(;t--;){let s=e.props[t];if(M(s)&&(s=s()),typeof s=="object"&&s!==null&&r in s)return s[r]}},set(e,r,t){let s=e.props.length;for(;s--;){let n=e.props[s];M(n)&&(n=n());const i=L(n,r);if(i&&i.set)return i.set(t),!0}return!1},getOwnPropertyDescriptor(e,r){let t=e.props.length;for(;t--;){let s=e.props[t];if(M(s)&&(s=s()),typeof s=="object"&&s!==null&&r in s){const n=L(s,r);return n&&!n.configurable&&(n.configurable=!0),n}}},has(e,r){if(r===A||r===J)return!1;for(let t of e.props)if(M(t)&&(t=t()),t!=null&&r in t)return!0;return!1},ownKeys(e){const r=[];for(let t of e.props){M(t)&&(t=t());for(const s in t)r.includes(s)||r.push(s)}return r}};function Qe(...e){return new Proxy({props:e},Be)}function z(e){for(var r=R,t=R;r!==null&&!(r.f&(he|ge));)r=r.parent;try{return D(r),e()}finally{D(t)}}function er(e,r,t,s){var K;var n=(t&ye)!==0,i=!be||(t&we)!==0,d=(t&me)!==0,p=(t&Pe)!==0,l=!1,a;d?[a,l]=Ce(()=>e[r]):a=e[r];var u=A in e||J in e,o=d&&(((K=L(e,r))==null?void 0:K.set)??(u&&r in e&&(_=>e[r]=_)))||void 0,f=s,c=!0,v=!1,y=()=>(v=!0,c&&(c=!1,p?f=W(s):f=s),f);a===void 0&&s!==void 0&&(o&&i&&de(),a=y(),o&&o(a));var h;if(i)h=()=>{var _=e[r];return _===void 0?y():(c=!0,v=!1,_)};else{var I=z(()=>(n?$:Ee)(()=>e[r]));I.f|=_e,h=()=>{var _=m(I);return _!==void 0&&(f=void 0),_===void 0?f:_}}if(!(t&ve))return h;if(o){var P=e.$$legacy;return function(_,O){return arguments.length>0?((!i||!O||P||l)&&o(O?h():_),_):h()}}var b=!1,k=!1,V=Se(a),C=z(()=>$(()=>{var _=h(),O=m(V);return b?(b=!1,k=!0,O):(k=!1,V.v=_)}));return n||(C.equals=pe),function(_,O){if(arguments.length>0){const q=O?m(C):i&&d?x(_):_;return C.equals(q)||(b=!0,w(V,q),v&&f!==void 0&&(f=q),W(()=>m(C))),_}return m(C)}}const je="5";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(je);export{Ne as a,E as b,Ze as c,ze as d,x as e,He as f,Xe as g,De as h,We as i,ke as j,Ve as k,Le as l,$e as m,Ue as n,qe as o,er as p,Je as q,Ae as r,Ke as s,Ge as t,Qe as u,Ye as v};
