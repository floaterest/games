var app=function(){"use strict";function t(){}function e(t,e){for(const n in e)t[n]=e[n];return t}function n(t){return t()}function o(){return Object.create(null)}function i(t){t.forEach(n)}function s(t){return"function"==typeof t}function c(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function l(t,e,n,o){if(t){const i=r(t,e,n,o);return t[0](i)}}function r(t,n,o,i){return t[1]&&i?e(o.ctx.slice(),t[1](i(n))):o.ctx}function u(t,e,n,o){if(t[2]&&o){const i=t[2](o(n));if(void 0===e.dirty)return i;if("object"==typeof i){const t=[],n=Math.max(e.dirty.length,i.length);for(let o=0;o<n;o+=1)t[o]=e.dirty[o]|i[o];return t}return e.dirty|i}return e.dirty}function a(t,e,n,o,i,s){if(i){const c=r(e,n,o,s);t.p(c,i)}}function f(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let t=0;t<n;t++)e[t]=-1;return e}return-1}function h(t){const e={};for(const n in t)"$"!==n[0]&&(e[n]=t[n]);return e}function d(t){return null==t?"":t}function p(t,e){t.appendChild(e)}function g(t,e,n){t.insertBefore(e,n||null)}function m(t){t.parentNode.removeChild(t)}function $(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function y(t){return document.createElement(t)}function b(t){return document.createTextNode(t)}function w(){return b(" ")}function v(){return b("")}function k(t,e,n,o){return t.addEventListener(e,n,o),()=>t.removeEventListener(e,n,o)}function j(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function x(t){return""===t?null:+t}function O(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function _(t,e){t.value=null==e?"":e}function E(t,e,n){t.classList[n?"add":"remove"](e)}class S{constructor(t=!1){this.is_svg=!1,this.is_svg=t,this.e=this.n=null}c(t){this.h(t)}m(t,e,n=null){var o;this.e||(this.is_svg?this.e=(o=e.nodeName,document.createElementNS("http://www.w3.org/2000/svg",o)):this.e=y(e.nodeName),this.t=e,this.c(t)),this.i(n)}h(t){this.e.innerHTML=t,this.n=Array.from(this.e.childNodes)}i(t){for(let e=0;e<this.n.length;e+=1)g(this.t,this.n[e],t)}p(t){this.d(),this.h(t),this.i(this.a)}d(){this.n.forEach(m)}}let N;function A(t){N=t}function M(t,e){const n=t.$$.callbacks[e.type];n&&n.slice().forEach((t=>t.call(this,e)))}const F=[],q=[],B=[],C=[],I=Promise.resolve();let J=!1;function L(t){B.push(t)}function T(t){C.push(t)}const G=new Set;let H=0;function P(){const t=N;do{for(;H<F.length;){const t=F[H];H++,A(t),z(t.$$)}for(A(null),F.length=0,H=0;q.length;)q.pop()();for(let t=0;t<B.length;t+=1){const e=B[t];G.has(e)||(G.add(e),e())}B.length=0}while(F.length);for(;C.length;)C.pop()();J=!1,G.clear(),A(t)}function z(t){if(null!==t.fragment){t.update(),i(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(L)}}const D=new Set;let K;function Q(){K={r:0,c:[],p:K}}function R(){K.r||i(K.c),K=K.p}function U(t,e){t&&t.i&&(D.delete(t),t.i(e))}function V(t,e,n,o){if(t&&t.o){if(D.has(t))return;D.add(t),K.c.push((()=>{D.delete(t),o&&(n&&t.d(1),o())})),t.o(e)}}function W(t,e){const n={},o={},i={$$scope:1};let s=t.length;for(;s--;){const c=t[s],l=e[s];if(l){for(const t in c)t in l||(o[t]=1);for(const t in l)i[t]||(n[t]=l[t],i[t]=1);t[s]=l}else for(const t in c)i[t]=1}for(const t in o)t in n||(n[t]=void 0);return n}function X(t){return"object"==typeof t&&null!==t?t:{}}function Y(t,e,n){const o=t.$$.props[e];void 0!==o&&(t.$$.bound[o]=n,n(t.$$.ctx[o]))}function Z(t){t&&t.c()}function tt(t,e,o,c){const{fragment:l,on_mount:r,on_destroy:u,after_update:a}=t.$$;l&&l.m(e,o),c||L((()=>{const e=r.map(n).filter(s);u?u.push(...e):i(e),t.$$.on_mount=[]})),a.forEach(L)}function et(t,e){const n=t.$$;null!==n.fragment&&(i(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function nt(t,e){-1===t.$$.dirty[0]&&(F.push(t),J||(J=!0,I.then(P)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function ot(e,n,s,c,l,r,u,a=[-1]){const f=N;A(e);const h=e.$$={fragment:null,ctx:null,props:r,update:t,not_equal:l,bound:o(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(n.context||(f?f.$$.context:[])),callbacks:o(),dirty:a,skip_bound:!1,root:n.target||f.$$.root};u&&u(h.root);let d=!1;if(h.ctx=s?s(e,n.props||{},((t,n,...o)=>{const i=o.length?o[0]:n;return h.ctx&&l(h.ctx[t],h.ctx[t]=i)&&(!h.skip_bound&&h.bound[t]&&h.bound[t](i),d&&nt(e,t)),n})):[],h.update(),d=!0,i(h.before_update),h.fragment=!!c&&c(h.ctx),n.target){if(n.hydrate){const t=function(t){return Array.from(t.childNodes)}(n.target);h.fragment&&h.fragment.l(t),t.forEach(m)}else h.fragment&&h.fragment.c();n.intro&&U(e.$$.fragment),tt(e,n.target,n.anchor,n.customElement),P()}A(f)}class it{$destroy(){et(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const st=t=>`<span class="material-icons">${t}</span>`,ct={key:"games",storage:{Minesweeper:{width:10,height:10,density:10},Arithmetic:{amin:100,amax:1e3,bmin:100,bmax:1e3,op:"+-*/"}}},lt={top:{Games:{icon:st("sports_esports"),swap:!0,style:"color: var(--accent)",href:"/"},Minesweeper:{icon:st("settings_applications")},Arithmetic:{icon:st("calculate")},Flip:{icon:st("flip")}},bottom:{Settings:{icon:st("storage")},GitHub:{icon:(rt="github",`<i class="bi bi-${rt}"></i>`),href:"https://github.com/Floaterest/"}}};var rt;function ut(t){let e,n,o,i,s,c,l,r,u,a,f;const h=[ht,ft],$=[];function v(t,e){return t[1]?0:1}return n=v(t),o=$[n]=h[n](t),{c(){e=y("div"),o.c(),i=w(),s=y("span"),c=b(t[0]),j(s,"class","text"),j(e,"class",l=d(t[5].class)+" svelte-1slmw7b"),j(e,"style",r=t[5].style),E(e,"selected",t[4]),E(e,"swap",t[3])},m(o,l){g(o,e,l),$[n].m(e,null),p(e,i),p(e,s),p(s,c),u=!0,a||(f=k(e,"click",t[9]),a=!0)},p(t,s){let a=n;n=v(t),n===a?$[n].p(t,s):(Q(),V($[a],1,1,(()=>{$[a]=null})),R(),o=$[n],o?o.p(t,s):(o=$[n]=h[n](t),o.c()),U(o,1),o.m(e,i)),(!u||1&s)&&O(c,t[0]),(!u||32&s&&l!==(l=d(t[5].class)+" svelte-1slmw7b"))&&j(e,"class",l),(!u||32&s&&r!==(r=t[5].style))&&j(e,"style",r),48&s&&E(e,"selected",t[4]),40&s&&E(e,"swap",t[3])},i(t){u||(U(o),u=!0)},o(t){V(o),u=!1},d(t){t&&m(e),$[n].d(),a=!1,f()}}}function at(t){let e,n,o,i,s,c,l,r,u,a,f;const h=[pt,dt],$=[];function v(t,e){return t[1]?0:1}return n=v(t),o=$[n]=h[n](t),{c(){e=y("a"),o.c(),i=w(),s=y("span"),c=b(t[0]),j(s,"class","text"),j(e,"href",t[2]),j(e,"class",l=d(t[5].class)+" svelte-1slmw7b"),j(e,"style",r=t[5].style),E(e,"selected",t[4]),E(e,"swap",t[3])},m(o,l){g(o,e,l),$[n].m(e,null),p(e,i),p(e,s),p(s,c),u=!0,a||(f=k(e,"click",t[8]),a=!0)},p(t,s){let a=n;n=v(t),n===a?$[n].p(t,s):(Q(),V($[a],1,1,(()=>{$[a]=null})),R(),o=$[n],o?o.p(t,s):(o=$[n]=h[n](t),o.c()),U(o,1),o.m(e,i)),(!u||1&s)&&O(c,t[0]),(!u||4&s)&&j(e,"href",t[2]),(!u||32&s&&l!==(l=d(t[5].class)+" svelte-1slmw7b"))&&j(e,"class",l),(!u||32&s&&r!==(r=t[5].style))&&j(e,"style",r),48&s&&E(e,"selected",t[4]),40&s&&E(e,"swap",t[3])},i(t){u||(U(o),u=!0)},o(t){V(o),u=!1},d(t){t&&m(e),$[n].d(),a=!1,f()}}}function ft(t){let e;const n=t[7].default,o=l(n,t,t[6],null);return{c(){o&&o.c()},m(t,n){o&&o.m(t,n),e=!0},p(t,i){o&&o.p&&(!e||64&i)&&a(o,n,t,t[6],e?u(n,t[6],i,null):f(t[6]),null)},i(t){e||(U(o,t),e=!0)},o(t){V(o,t),e=!1},d(t){o&&o.d(t)}}}function ht(e){let n,o;return{c(){n=new S(!1),o=v(),n.a=o},m(t,i){n.m(e[1],t,i),g(t,o,i)},p(t,e){2&e&&n.p(t[1])},i:t,o:t,d(t){t&&m(o),t&&n.d()}}}function dt(t){let e;const n=t[7].default,o=l(n,t,t[6],null);return{c(){o&&o.c()},m(t,n){o&&o.m(t,n),e=!0},p(t,i){o&&o.p&&(!e||64&i)&&a(o,n,t,t[6],e?u(n,t[6],i,null):f(t[6]),null)},i(t){e||(U(o,t),e=!0)},o(t){V(o,t),e=!1},d(t){o&&o.d(t)}}}function pt(e){let n,o;return{c(){n=new S(!1),o=v(),n.a=o},m(t,i){n.m(e[1],t,i),g(t,o,i)},p(t,e){2&e&&n.p(t[1])},i:t,o:t,d(t){t&&m(o),t&&n.d()}}}function gt(t){let e,n,o,i;const s=[at,ut],c=[];function l(t,e){return t[2]?0:1}return e=l(t),n=c[e]=s[e](t),{c(){n.c(),o=v()},m(t,n){c[e].m(t,n),g(t,o,n),i=!0},p(t,[i]){let r=e;e=l(t),e===r?c[e].p(t,i):(Q(),V(c[r],1,1,(()=>{c[r]=null})),R(),n=c[e],n?n.p(t,i):(n=c[e]=s[e](t),n.c()),U(n,1),n.m(o.parentNode,o))},i(t){i||(U(n),i=!0)},o(t){V(n),i=!1},d(t){c[e].d(t),t&&m(o)}}}function mt(t,n,o){let{$$slots:i={},$$scope:s}=n,{key:c}=n,{icon:l=""}=n,{href:r=""}=n,{swap:u=!1}=n,{selected:a=!1}=n;return t.$$set=t=>{o(5,n=e(e({},n),h(t))),"key"in t&&o(0,c=t.key),"icon"in t&&o(1,l=t.icon),"href"in t&&o(2,r=t.href),"swap"in t&&o(3,u=t.swap),"selected"in t&&o(4,a=t.selected),"$$scope"in t&&o(6,s=t.$$scope)},n=h(n),[c,l,r,u,a,n,s,i,function(e){M.call(this,t,e)},function(e){M.call(this,t,e)}]}class $t extends it{constructor(t){super(),ot(this,t,mt,gt,c,{key:0,icon:1,href:2,swap:3,selected:4})}}function yt(t,e,n){const o=t.slice();return o[7]=e[n][0],o[8]=e[n][1],o}function bt(t,e,n){const o=t.slice();return o[7]=e[n][0],o[8]=e[n][1],o}function wt(t){let n,o;const i=[t[8],{key:t[7]}];let s={};for(let t=0;t<i.length;t+=1)s=e(s,i[t]);return n=new $t({props:s}),n.$on("click",(function(){return t[5](t[7])})),{c(){Z(n.$$.fragment)},m(t,e){tt(n,t,e),o=!0},p(e,o){t=e;const s=1&o?W(i,[X(t[8]),{key:t[7]}]):{};n.$set(s)},i(t){o||(U(n.$$.fragment,t),o=!0)},o(t){V(n.$$.fragment,t),o=!1},d(t){et(n,t)}}}function vt(t){let n,o;const i=[t[8],{key:t[7]}];let s={};for(let t=0;t<i.length;t+=1)s=e(s,i[t]);return n=new $t({props:s}),n.$on("click",(function(){return t[6](t[7])})),{c(){Z(n.$$.fragment)},m(t,e){tt(n,t,e),o=!0},p(e,o){t=e;const s=2&o?W(i,[X(t[8]),{key:t[7]}]):{};n.$set(s)},i(t){o||(U(n.$$.fragment,t),o=!0)},o(t){V(n.$$.fragment,t),o=!1},d(t){et(n,t)}}}function kt(t){let e,n,o,i,s,c=Object.entries(t[0]),l=[];for(let e=0;e<c.length;e+=1)l[e]=wt(bt(t,c,e));const r=t=>V(l[t],1,1,(()=>{l[t]=null}));let u=Object.entries(t[1]),a=[];for(let e=0;e<u.length;e+=1)a[e]=vt(yt(t,u,e));const f=t=>V(a[t],1,1,(()=>{a[t]=null}));return{c(){e=y("nav"),n=y("div");for(let t=0;t<l.length;t+=1)l[t].c();o=w(),i=y("div");for(let t=0;t<a.length;t+=1)a[t].c();j(n,"class","top svelte-6fv8oe"),j(i,"class","bottom svelte-6fv8oe"),j(e,"class","svelte-6fv8oe")},m(t,c){g(t,e,c),p(e,n);for(let t=0;t<l.length;t+=1)l[t].m(n,null);p(e,o),p(e,i);for(let t=0;t<a.length;t+=1)a[t].m(i,null);s=!0},p(t,[e]){if(5&e){let o;for(c=Object.entries(t[0]),o=0;o<c.length;o+=1){const i=bt(t,c,o);l[o]?(l[o].p(i,e),U(l[o],1)):(l[o]=wt(i),l[o].c(),U(l[o],1),l[o].m(n,null))}for(Q(),o=c.length;o<l.length;o+=1)r(o);R()}if(10&e){let n;for(u=Object.entries(t[1]),n=0;n<u.length;n+=1){const o=yt(t,u,n);a[n]?(a[n].p(o,e),U(a[n],1)):(a[n]=vt(o),a[n].c(),U(a[n],1),a[n].m(i,null))}for(Q(),n=u.length;n<a.length;n+=1)f(n);R()}},i(t){if(!s){for(let t=0;t<c.length;t+=1)U(l[t]);for(let t=0;t<u.length;t+=1)U(a[t]);s=!0}},o(t){l=l.filter(Boolean);for(let t=0;t<l.length;t+=1)V(l[t]);a=a.filter(Boolean);for(let t=0;t<a.length;t+=1)V(a[t]);s=!1},d(t){t&&m(e),$(l,t),$(a,t)}}}function jt(t,e,n){let{top:o={}}=e,{bottom:i={}}=e,{selected:s}=e;function c(t){n(4,s=t),Object.keys(o).forEach((e=>n(0,o[e].selected=e==t,o))),Object.keys(i).forEach((t=>n(1,i[t].selected=!1,i)))}function l(t){n(4,s=t),Object.keys(o).forEach((t=>n(0,o[t].selected=!1,o))),Object.keys(i).forEach((e=>n(1,i[e].selected=e==t,i)))}[o,i].forEach((t=>Object.values(t).forEach((t=>t.selected=!1))));return t.$$set=t=>{"top"in t&&n(0,o=t.top),"bottom"in t&&n(1,i=t.bottom),"selected"in t&&n(4,s=t.selected)},[o,i,c,l,s,t=>c(t),t=>l(t)]}class xt extends it{constructor(t){super(),ot(this,t,jt,kt,c,{top:0,bottom:1,selected:4})}}function Ot(t,e,n){const o=t.slice();return o[14]=e[n][0],o[3]=e[n][1],o[15]=e,o[16]=n,o}function _t(t,e,n){const o=t.slice();return o[3]=e[n][0],o[11]=e[n][1],o[12]=e,o[13]=n,o}function Et(e){let n,o;return{c(){n=y("span"),o=b(e[0]),j(n,"class",e[4])},m(t,e){g(t,n,e),p(n,o)},p(t,e){1&e&&O(o,t[0])},i:t,o:t,d(t){t&&m(n)}}}function St(e){let n,o,i;return{c(){n=y("span"),o=b(e[0]),j(n,"class",i=e[6].class)},m(t,e){g(t,n,e),p(n,o)},p(t,e){1&e&&O(o,t[0]),64&e&&i!==(i=t[6].class)&&j(n,"class",i)},i:t,o:t,d(t){t&&m(n)}}}function Nt(e){let n;let o=function(t,e){return"number"===t[4]?Ft:Mt}(e),i=o(e);return{c(){i.c(),n=v()},m(t,e){i.m(t,e),g(t,n,e)},p(t,e){i.p(t,e)},i:t,o:t,d(t){i.d(t),t&&m(n)}}}function At(t){let e,n,o,i;const s=[Bt,qt],c=[];function l(t,e){return t[0]instanceof Array?0:t[0]instanceof Object?1:-1}return~(e=l(t))&&(n=c[e]=s[e](t)),{c(){n&&n.c(),o=v()},m(t,n){~e&&c[e].m(t,n),g(t,o,n),i=!0},p(t,i){let r=e;e=l(t),e===r?~e&&c[e].p(t,i):(n&&(Q(),V(c[r],1,1,(()=>{c[r]=null})),R()),~e?(n=c[e],n?n.p(t,i):(n=c[e]=s[e](t),n.c()),U(n,1),n.m(o.parentNode,o)):n=null)},i(t){i||(U(n),i=!0)},o(t){V(n),i=!1},d(t){~e&&c[e].d(t),t&&m(o)}}}function Mt(t){let e,n,o;return{c(){e=y("input"),j(e,"class",t[4])},m(i,s){g(i,e,s),_(e,t[0]),n||(o=k(e,"input",t[10]),n=!0)},p(t,n){1&n&&e.value!==t[0]&&_(e,t[0])},d(t){t&&m(e),n=!1,o()}}}function Ft(t){let e,n,o;return{c(){e=y("input"),j(e,"type","number"),j(e,"class","number")},m(i,s){g(i,e,s),_(e,t[0]),n||(o=k(e,"input",t[9]),n=!0)},p(t,n){1&n&&x(e.value)!==t[0]&&_(e,t[0])},d(t){t&&m(e),n=!1,o()}}}function qt(t){let e,n,o=Object.entries(t[0]).map(Tt),i=[];for(let e=0;e<o.length;e+=1)i[e]=Ct(Ot(t,o,e));const s=t=>V(i[t],1,1,(()=>{i[t]=null}));return{c(){for(let t=0;t<i.length;t+=1)i[t].c();e=v()},m(t,o){for(let e=0;e<i.length;e+=1)i[e].m(t,o);g(t,e,o),n=!0},p(t,n){if(39&n){let c;for(o=Object.entries(t[0]).map(Tt),c=0;c<o.length;c+=1){const s=Ot(t,o,c);i[c]?(i[c].p(s,n),U(i[c],1)):(i[c]=Ct(s),i[c].c(),U(i[c],1),i[c].m(e.parentNode,e))}for(Q(),c=o.length;c<i.length;c+=1)s(c);R()}},i(t){if(!n){for(let t=0;t<o.length;t+=1)U(i[t]);n=!0}},o(t){i=i.filter(Boolean);for(let t=0;t<i.length;t+=1)V(i[t]);n=!1},d(t){$(i,t),t&&m(e)}}}function Bt(t){let e,n,o=t[0].map(Lt),i=[];for(let e=0;e<o.length;e+=1)i[e]=It(_t(t,o,e));const s=t=>V(i[t],1,1,(()=>{i[t]=null}));return{c(){for(let t=0;t<i.length;t+=1)i[t].c();e=v()},m(t,o){for(let e=0;e<i.length;e+=1)i[e].m(t,o);g(t,e,o),n=!0},p(t,n){if(39&n){let c;for(o=t[0].map(Lt),c=0;c<o.length;c+=1){const s=_t(t,o,c);i[c]?(i[c].p(s,n),U(i[c],1)):(i[c]=It(s),i[c].c(),U(i[c],1),i[c].m(e.parentNode,e))}for(Q(),c=o.length;c<i.length;c+=1)s(c);R()}},i(t){if(!n){for(let t=0;t<o.length;t+=1)U(i[t]);n=!0}},o(t){i=i.filter(Boolean);for(let t=0;t<i.length;t+=1)V(i[t]);n=!1},d(t){$(i,t),t&&m(e)}}}function Ct(t){let e,n,o,i,s,c,l,r,u,a;function f(e){t[8](e,t[14])}i=new Ht({props:{object:t[14],class:"keyword",indent:t[1],tabwidth:t[2]}});let h={tabwidth:t[2],indent:!t[3]*t[1],input:t[3]};return void 0!==t[0][t[14]]&&(h.object=t[0][t[14]]),l=new Ht({props:h}),q.push((()=>Y(l,"object",f))),{c(){e=y("div"),n=b(t[5]),o=w(),Z(i.$$.fragment),s=y("span"),s.textContent=":",c=w(),Z(l.$$.fragment),u=w(),j(s,"class","punctuation")},m(t,r){g(t,e,r),p(e,n),p(e,o),tt(i,e,null),p(e,s),p(e,c),tt(l,e,null),p(e,u),a=!0},p(e,n){t=e;const o={};1&n&&(o.object=t[14]),2&n&&(o.indent=t[1]),4&n&&(o.tabwidth=t[2]),i.$set(o);const s={};4&n&&(s.tabwidth=t[2]),3&n&&(s.indent=!t[3]*t[1]),1&n&&(s.input=t[3]),!r&&1&n&&(r=!0,s.object=t[0][t[14]],T((()=>r=!1))),l.$set(s)},i(t){a||(U(i.$$.fragment,t),U(l.$$.fragment,t),a=!0)},o(t){V(i.$$.fragment,t),V(l.$$.fragment,t),a=!1},d(t){t&&m(e),et(i),et(l)}}}function It(t){let e,n,o,i,s,c,l,r,u;function a(e){t[7](e,t[11])}let f={indent:t[1],input:t[3],tabwidth:t[2]};return void 0!==t[0][t[11]]&&(f.object=t[0][t[11]]),c=new Ht({props:f}),q.push((()=>Y(c,"object",a))),{c(){e=y("div"),n=b(t[5]),o=w(),i=y("span"),i.textContent="-",s=w(),Z(c.$$.fragment),r=w(),j(i,"class","punctuation")},m(t,l){g(t,e,l),p(e,n),p(e,o),p(e,i),p(e,s),tt(c,e,null),p(e,r),u=!0},p(e,n){t=e;const o={};2&n&&(o.indent=t[1]),1&n&&(o.input=t[3]),4&n&&(o.tabwidth=t[2]),!l&&1&n&&(l=!0,o.object=t[0][t[11]],T((()=>l=!1))),c.$set(o)},i(t){u||(U(c.$$.fragment,t),u=!0)},o(t){V(c.$$.fragment,t),u=!1},d(t){t&&m(e),et(c)}}}function Jt(t){let e,n,o,i;const s=[At,Nt,St,Et],c=[];function l(t,e){return"object"===t[4]?0:t[3]?1:t[6].class?2:3}return e=l(t),n=c[e]=s[e](t),{c(){n.c(),o=v()},m(t,n){c[e].m(t,n),g(t,o,n),i=!0},p(t,[i]){let r=e;e=l(t),e===r?c[e].p(t,i):(Q(),V(c[r],1,1,(()=>{c[r]=null})),R(),n=c[e],n?n.p(t,i):(n=c[e]=s[e](t),n.c()),U(n,1),n.m(o.parentNode,o))},i(t){i||(U(n),i=!0)},o(t){V(n),i=!1},d(t){c[e].d(t),t&&m(o)}}}const Lt=(t,e)=>["object"!=typeof t,e],Tt=([t,e])=>[t,"object"!=typeof e];function Gt(t,n,o){let{input:i=!1}=n,{object:s}=n,{indent:c=0}=n,{tabwidth:l}=n;const r=typeof s,u=Array(c++*l).join(" ");return t.$$set=t=>{o(6,n=e(e({},n),h(t))),"input"in t&&o(3,i=t.input),"object"in t&&o(0,s=t.object),"indent"in t&&o(1,c=t.indent),"tabwidth"in t&&o(2,l=t.tabwidth)},n=h(n),[s,c,l,i,r,u,n,function(e,n){t.$$.not_equal(s[n],e)&&(s[n]=e,o(0,s))},function(e,n){t.$$.not_equal(s[n],e)&&(s[n]=e,o(0,s))},function(){s=x(this.value),o(0,s)},function(){s=this.value,o(0,s)}]}class Ht extends it{constructor(t){super(),ot(this,t,Gt,Jt,c,{input:3,object:0,indent:1,tabwidth:2})}}function Pt(t){let e,n,o,i,s,c;function l(e){t[4](e)}let r={tabwidth:t[1]};return void 0!==t[0]&&(r.object=t[0]),n=new Ht({props:r}),q.push((()=>Y(n,"object",l))),{c(){e=y("div"),Z(n.$$.fragment),j(e,"class",i=d(t[2].class)+" svelte-1n8i9iw"),j(e,"style",s=t[2].style)},m(t,o){g(t,e,o),tt(n,e,null),c=!0},p(t,[l]){const r={};2&l&&(r.tabwidth=t[1]),!o&&1&l&&(o=!0,r.object=t[0],T((()=>o=!1))),n.$set(r),(!c||4&l&&i!==(i=d(t[2].class)+" svelte-1n8i9iw"))&&j(e,"class",i),(!c||4&l&&s!==(s=t[2].style))&&j(e,"style",s)},i(t){c||(U(n.$$.fragment,t),c=!0)},o(t){V(n.$$.fragment,t),c=!1},d(t){t&&m(e),et(n)}}}function zt(t,n,o){let{key:i}=n,{tabwidth:s=2}=n,{storage:c}=n;const{localStorage:l}=window;return i in l||l.setItem(i,JSON.stringify(c)),c=JSON.parse(l.getItem(i)),t.$$set=t=>{o(2,n=e(e({},n),h(t))),"key"in t&&o(3,i=t.key),"tabwidth"in t&&o(1,s=t.tabwidth),"storage"in t&&o(0,c=t.storage)},t.$$.update=()=>{9&t.$$.dirty&&window.localStorage.setItem(i,JSON.stringify(c))},n=h(n),[c,s,n,i,function(t){c=t,o(0,c)}]}class Dt extends it{constructor(t){super(),ot(this,t,zt,Pt,c,{key:3,tabwidth:1,storage:0})}}var Kt;!function(t){t[t.Opened=1]="Opened",t[t.Flagged=2]="Flagged",t[t.Mine=4]="Mine",t[t.Empty=8]="Empty",t[t.Adjacent=16]="Adjacent"}(Kt||(Kt={}));class Qt{constructor(t,e,n){this.count=0,this.dead=!1,this.won=!1,n=Math.abs(n%100),[this.width,this.height,this.density]=[t,e,n],this.delta=[-t-1,-t,1-t,-1,1,t-1,t,t+1],this.field=Array(this.width*this.height).fill(0)}adjacent(t,e){let n;return this.delta.map((e=>t+e)).filter((o=>(t%this.width!=0||o%this.width!=this.width-1)&&((t%this.width!=this.width-1||o%this.width!=0)&&(void 0!==(n=this.field[o])&&e(n,o)))))}generate(t){const e=(this.width*this.height-9)*this.density/100|0,n=new Set([t,...this.delta.map((e=>t+e))]),o=[...Array(this.width*this.height).keys()].filter((t=>!n.has(t)));!function(t,e){let n,o=t.length;for(;e--;)n=Math.floor(Math.random()*o--),[t[n],t[o]]=[t[o],t[n]]}(o,e);const i=new Set(o.slice(o.length-e));let s;return this.field.forEach(((t,e)=>this.field[e]|=+i.has(e)*Kt.Mine)),this.field.forEach(((t,e)=>{t&Kt.Mine||((s=this.adjacent(e,((t,e)=>t&Kt.Mine)).length)?this.field[e]|=(s-1)*Kt.Adjacent:this.field[e]|=Kt.Empty)})),this.width*this.height-e}}class Rt{constructor(...t){this.stack1=[],this.stack2=[],this.stack1=t}move2stack2(){for(;this.stack1.length;)this.stack2.push(this.stack1.pop())}push(t){this.stack1.push(t)}shift(){return this.stack2.length||this.move2stack2(),this.stack2.length?this.stack2.pop():null}get length(){return this.stack1.length+this.stack2.length}}function Ut(t,e,n){const o=t.slice();return o[9]=e[n],o}function Vt(t,e,n){const o=t.slice();return o[12]=e[n].opened,o[13]=e[n].flagged,o[14]=e[n].empty,o[15]=e[n].adjacent,o[16]=e[n].mine,o[17]=e[n].i,o}function Wt(t){let e,n,o,i,s=(t[14]?"":t[15])+"";function c(){return t[8](t[17])}return{c(){e=y("code"),n=b(s),j(e,"class","tile svelte-1ou4iqs"),E(e,"mine",t[16]),E(e,"opened",t[12]),E(e,"flagged",t[13])},m(t,s){g(t,e,s),p(e,n),o||(i=k(e,"click",c),o=!0)},p(o,i){t=o,1&i&&s!==(s=(t[14]?"":t[15])+"")&&O(n,s),7&i&&E(e,"mine",t[16]),7&i&&E(e,"opened",t[12]),7&i&&E(e,"flagged",t[13])},d(t){t&&m(e),o=!1,i()}}}function Xt(t){let e,n,o=t[9],i=[];for(let e=0;e<o.length;e+=1)i[e]=Wt(Vt(t,o,e));return{c(){e=y("div");for(let t=0;t<i.length;t+=1)i[t].c();n=w(),j(e,"class","row svelte-1ou4iqs")},m(t,o){g(t,e,o);for(let t=0;t<i.length;t+=1)i[t].m(e,null);p(e,n)},p(t,s){if(15&s){let c;for(o=t[9],c=0;c<o.length;c+=1){const l=Vt(t,o,c);i[c]?i[c].p(l,s):(i[c]=Wt(l),i[c].c(),i[c].m(e,n))}for(;c<i.length;c+=1)i[c].d(1);i.length=o.length}},d(t){t&&m(e),$(i,t)}}}function Yt(e){let n,o,i=e[7](0),s=[];for(let t=0;t<i.length;t+=1)s[t]=Xt(Ut(e,i,t));return{c(){n=w(),o=y("div");for(let t=0;t<s.length;t+=1)s[t].c();document.title="Minesweeper",j(o,"id","field"),j(o,"class","svelte-1ou4iqs")},m(t,e){g(t,n,e),g(t,o,e);for(let t=0;t<s.length;t+=1)s[t].m(o,null)},p(t,[e]){if(15&e){let n;for(i=t[7](0),n=0;n<i.length;n+=1){const c=Ut(t,i,n);s[n]?s[n].p(c,e):(s[n]=Xt(c),s[n].c(),s[n].m(o,null))}for(;n<s.length;n+=1)s[n].d(1);s.length=i.length}},i:t,o:t,d(t){t&&m(n),t&&m(o),$(s,t)}}}function Zt(t,e,n){let{width:o}=e,{height:i}=e,{density:s}=e,c=new Qt(o,i,s);const l=[...Array(i)],r=[...Array(o)];async function u(t){if(c.dead||c.won||c.field[t]&Kt.Opened)return;c.count||n(0,c.count=c.generate(t),c);const e=new Rt([t]),o=new Set([t]);let i,s;for(;e.length;){for(t of(await new Promise((t=>setTimeout(t,5))),s=[],e.shift())){if(i=c.field[t],n(0,c.field[t]|=Kt.Opened,c),o.delete(t),i&Kt.Mine)return n(0,c.dead=!0,c),c.field.forEach(((t,e)=>n(0,c.field[e]|=Kt.Opened,c)));if(n(0,c.field[t]&=~Kt.Flagged,c),!n(0,--c.count,c))return console.log("won"),n(0,c.won=!0,c);if(i&Kt.Empty)for(const e of c.adjacent(t,((t,e)=>!(o.has(e)||t&(Kt.Opened|Kt.Flagged)))))s.push(e),o.add(e)}s.length&&e.push(s)}}return t.$$set=t=>{"width"in t&&n(4,o=t.width),"height"in t&&n(5,i=t.height),"density"in t&&n(6,s=t.density)},[c,l,r,u,o,i,s,t=>l.map((e=>r.map((e=>{return{i:t,...(n=c.field[t++],{opened:n&Kt.Opened,flagged:n&Kt.Flagged,mine:n&Kt.Mine,empty:n&Kt.Empty,adjacent:1+(n/Kt.Adjacent|0)})};var n})))),t=>u(t)]}class te extends it{constructor(t){super(),ot(this,t,Zt,Yt,c,{width:4,height:5,density:6})}}function ee(e){let n;return{c(){n=y("p"),n.textContent="Hi there"},m(t,e){g(t,n,e)},p:t,i:t,o:t,d(t){t&&m(n)}}}class ne extends it{constructor(t){super(),ot(this,t,null,ee,c,{})}}function oe(t){let n,o,i,s,c,l;const r=[lt];function u(e){t[3](e)}let a={};for(let t=0;t<r.length;t+=1)a=e(a,r[t]);void 0!==t[0]&&(a.selected=t[0]),n=new xt({props:a}),q.push((()=>Y(n,"selected",u)));const f=[t[2](t[0])];var h=t[1][t[0]];function d(t){let n={};for(let t=0;t<f.length;t+=1)n=e(n,f[t]);return{props:n}}return h&&(s=new h(d())),{c(){Z(n.$$.fragment),i=w(),s&&Z(s.$$.fragment),c=v()},m(t,e){tt(n,t,e),g(t,i,e),s&&tt(s,t,e),g(t,c,e),l=!0},p(t,[e]){const i=0&e?W(r,[X(lt)]):{};!o&&1&e&&(o=!0,i.selected=t[0],T((()=>o=!1))),n.$set(i);const l=5&e?W(f,[X(t[2](t[0]))]):{};if(h!==(h=t[1][t[0]])){if(s){Q();const t=s;V(t.$$.fragment,1,0,(()=>{et(t,1)})),R()}h?(s=new h(d()),Z(s.$$.fragment),U(s.$$.fragment,1),tt(s,c.parentNode,c)):s=null}else h&&s.$set(l)},i(t){l||(U(n.$$.fragment,t),s&&U(s.$$.fragment,t),l=!0)},o(t){V(n.$$.fragment,t),s&&V(s.$$.fragment,t),l=!1},d(t){et(n,t),t&&m(i),t&&m(c),s&&et(s,t)}}}function ie(t,e,n){const o={Minesweeper:te,Games:ne,Settings:Dt};let i=o[0];return ct.key in localStorage||localStorage.setItem(ct.key,JSON.stringify(ct.storage)),console.log(lt),[i,o,function(t){return"Settings"===t?Object.assign(Object.assign({},ct),{style:"font-family: consolas, monospace;"}):JSON.parse(localStorage.getItem(ct.key))[i]},function(t){i=t,n(0,i)}]}return new class extends it{constructor(t){super(),ot(this,t,ie,oe,c,{})}}({target:document.body})}();
//# sourceMappingURL=bundle.js.map
