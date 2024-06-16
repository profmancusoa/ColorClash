var _e=(r,e,s)=>{if(!e.has(r))throw TypeError("Cannot "+s)};var d=(r,e,s)=>(_e(r,e,"read from private field"),s?s.call(r):e.get(r)),C=(r,e,s)=>{if(e.has(r))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(r):e.set(r,s)},y=(r,e,s,t)=>(_e(r,e,"write to private field"),t?t.call(r,s):e.set(r,s),s);var $=(r,e,s)=>(_e(r,e,"access private method"),s);import{s as Y,e as T,d as w,S as X,v,k as A,n as k,i as g,p as N,T as Ae,f as P,U as J,C as Ke,o as Q,r as Be,V as ze,W as ie,x as Ce,X as Xe,Y as ke,b as L,t as ae,j as V,h as ce,l as _,m as be,E as Je}from"../chunks/scheduler.B668hpvB.js";import{S as B,i as z,t as E,g as ye,a as U,c as Me,f as Qe,b as G,d as R,m as j,e as H,h as Se}from"../chunks/index.BZ6YNAep.js";import{w as Ge}from"../chunks/index.C9t4z0HB.js";function he(r){return(r==null?void 0:r.length)!==void 0?r:Array.from(r)}function Ze(r){let e,s="<p>Gioca a Color Clash in modalità portrait.</p>";return{c(){e=T("div"),e.innerHTML=s,this.h()},l(t){e=w(t,"DIV",{class:!0,"data-svelte-h":!0}),X(e)!=="svelte-cy5swd"&&(e.innerHTML=s),this.h()},h(){v(e,"class","disclaimer svelte-12ah62n")},m(t,l){A(t,e,l)},p:k,i:k,o:k,d(t){t&&g(e)}}}class xe extends B{constructor(e){super(),z(this,e,null,Ze,Y,{})}}const Fe="off",et="on",tt="empty";var W,q,K,x;class O{constructor(e,s,t){C(this,W,0);C(this,q,0);C(this,K,1);C(this,x,Fe);y(this,K,t),y(this,W,e),y(this,q,s)}get row(){return d(this,W)}set row(e){y(this,W,e)}get col(){return d(this,q)}set col(e){y(this,q,e)}get type(){return d(this,K)}set type(e){y(this,K,e)}get status(){return d(this,x)}set status(e){y(this,x,e)}static get STATUS_OFF(){return Fe}static get STATUS_ON(){return et}static get STATUS_EMPTY(){return tt}}W=new WeakMap,q=new WeakMap,K=new WeakMap,x=new WeakMap;function st(r){let e,s,t,l;return{c(){e=T("div"),this.h()},l(o){e=w(o,"DIV",{class:!0,"aria-hidden":!0});var n=P(e);n.forEach(g),this.h()},h(){v(e,"class",s="cell cell-"+r[0].type+"-"+r[0].status+" svelte-bsr9gn"),v(e,"aria-hidden","true")},m(o,n){A(o,e,n),t||(l=[J(e,"mouseenter",r[2]),J(e,"mouseleave",r[3]),J(e,"click",r[4])],t=!0)},p(o,n){n&1&&s!==(s="cell cell-"+o[0].type+"-"+o[0].status+" svelte-bsr9gn")&&v(e,"class",s)},d(o){o&&g(e),t=!1,Ke(l)}}}function lt(r){let e,s,t,l;return{c(){e=T("div"),this.h()},l(o){e=w(o,"DIV",{class:!0,"aria-hidden":!0});var n=P(e);n.forEach(g),this.h()},h(){v(e,"class",s="cell cell-"+r[0].type+"-"+r[0].status+" svelte-bsr9gn"),v(e,"aria-hidden","true")},m(o,n){A(o,e,n),t||(l=J(e,"touchstart",r[5],{passive:!0}),t=!0)},p(o,n){n&1&&s!==(s="cell cell-"+o[0].type+"-"+o[0].status+" svelte-bsr9gn")&&v(e,"class",s)},d(o){o&&g(e),t=!1,l()}}}function rt(r){let e;function s(o,n){return o[1]?lt:st}let t=s(r),l=t(r);return{c(){l.c(),e=N()},l(o){l.l(o),e=N()},m(o,n){l.m(o,n),A(o,e,n)},p(o,[n]){t===(t=s(o))&&l?l.p(o,n):(l.d(1),l=t(o),l&&(l.c(),l.m(e.parentNode,e)))},i:k,o:k,d(o){o&&g(e),l.d(o)}}}const nt=1500;function ot(r,e,s){let{cell:t}=e,{mobile:l}=e,o=!1,n=Ae();const i=()=>{t.status!=O.STATUS_EMPTY&&n("getFocus",{r:t.row,c:t.col})},a=()=>{t.status!=O.STATUS_EMPTY&&n("lostFocus",{r:t.row,c:t.col})},c=()=>{t.status!=O.STATUS_EMPTY&&n("clash",{r:t.row,c:t.col})},m=()=>{o==!1?(o=!0,i(),setTimeout(()=>{a(),o=!1},nt)):c()};return r.$$set=p=>{"cell"in p&&s(0,t=p.cell),"mobile"in p&&s(1,l=p.mobile)},[t,l,i,a,c,m]}class it extends B{constructor(e){super(),z(this,e,ot,rt,Y,{cell:0,mobile:1})}}class ve extends Array{add(e){e&&this.push(e)}has(e){return this.filter(s=>s==e).length>0}remove(){return this.shift()}}const at=10,ct=15,ht=10,ut=8;var ue,F,D,I,M,fe,de,je,ee,Te,te,we,se,Ee,le,Oe,me,He,pe,We,ge,qe;class Re{constructor(e,s){C(this,de);C(this,ee);C(this,te);C(this,se);C(this,le);C(this,me);C(this,pe);C(this,ge);C(this,ue,3);C(this,F,[0][0]);C(this,D,0);C(this,I,0);C(this,M,new ve);C(this,fe,15);y(this,F,[...Array(e)].map((t,l)=>[...Array(s)].map((o,n)=>new O(l,n,$(this,de,je).call(this))))),y(this,D,e),y(this,I,s)}get rows(){return d(this,D)}get cols(){return d(this,I)}getCell(e,s){return e>=0&&e<d(this,D)&&s>=0&&s<d(this,I)?d(this,F)[e][s]:null}preClashON(){d(this,M).map(e=>e.status=O.STATUS_ON)}preClashOFF(){d(this,M).map(e=>e.status=O.STATUS_OFF),d(this,M).length=0}preClash(e,s){d(this,M).length=0;let t=new ve,l=new ve,o=this.getCell(e,s),n=o.type;for(t.add(o);t.length>0;){let i=[],a=t.remove();l.has(a)||l.add(a),i.push($(this,ee,Te).call(this,a)),i.push($(this,te,we).call(this,a)),i.push($(this,se,Ee).call(this,a)),i.push($(this,le,Oe).call(this,a)),i.forEach(c=>{c&&c.type==n&&c.status!=O.STATUS_EMPTY&&!l.has(c)&&t.add(c)})}l.length>1&&y(this,M,l)}clash(){let e=0;return d(this,M).length>0&&(e=Math.pow(d(this,M).length-2,2)),d(this,M).map(s=>{s.status=O.STATUS_EMPTY}),d(this,M).length=0,e}findTop(e){let s=e.row-1;for(;s>=0;){let t=this.getCell(s--,e.col);if(t.status!=O.STATUS_EMPTY)return t}return null}findRight(e){let s=e.col+1;for(;s<=d(this,I)-1;){let t=this.getCell(e.row,s--);if(t.status!=O.STATUS_EMPTY)return t}return null}swapCells(e,s){let[t,l]=[e.row,e.col];d(this,F)[s.row][s.col]=e,d(this,F)[e.row][e.col]=s,e.row=s.row,e.col=s.col,s.row=t,s.col=l}shiftCells(){$(this,me,He).call(this),$(this,pe,We).call(this)}isGameOver(){let e=0,s=d(this,F).flat(1).filter(t=>t.status!=O.STATUS_EMPTY);return s.length<=d(this,fe)?(s.forEach(t=>{e+=$(this,ge,qe).call(this,t)}),e==0):!1}}ue=new WeakMap,F=new WeakMap,D=new WeakMap,I=new WeakMap,M=new WeakMap,fe=new WeakMap,de=new WeakSet,je=function(){return Math.floor(Math.random()*d(this,ue))+1},ee=new WeakSet,Te=function(e){return this.getCell(e.row-1,e.col)},te=new WeakSet,we=function(e){return this.getCell(e.row+1,e.col)},se=new WeakSet,Ee=function(e){return this.getCell(e.row,e.col+1)},le=new WeakSet,Oe=function(e){return this.getCell(e.row,e.col-1)},me=new WeakSet,He=function(){for(let e=d(this,D)-1;e>0;e--)d(this,F)[e].filter(t=>t.status==O.STATUS_EMPTY).forEach(t=>{let l=this.findTop(t);l&&l.status!=O.STATUS_EMPTY&&this.swapCells(t,l)})},pe=new WeakSet,We=function(){d(this,F)[d(this,D)-1].filter(s=>s.status==O.STATUS_EMPTY).forEach(s=>{for(let t=s.col;t<d(this,I)-1;t++)for(let l=d(this,D)-1;l>=0;l--){let o=this.getCell(l,t),n=this.getCell(l,t+1);this.swapCells(o,n)}})},ge=new WeakSet,qe=function(e){return[$(this,ee,Te).call(this,e),$(this,te,we).call(this,e),$(this,se,Ee).call(this,e),$(this,le,Oe).call(this,e)].filter(t=>t&&t.type==e.type&&t.status!=O.STATUS_EMPTY).length};class ft extends Re{constructor(){super(at,ct)}}class dt extends Re{constructor(){super(ht,ut)}}const Z=Ge(0),oe=Ge(0);function De(r,e,s){const t=r.slice();return t[11]=e[s],t[13]=s,t}function Le(r,e,s){const t=r.slice();return t[11]=e[s],t[15]=s,t}function Ve(r){let e,s,t,l=he({length:r[2].rows}),o=[];for(let i=0;i<l.length;i+=1)o[i]=Ne(De(r,l,i));const n=i=>U(o[i],1,1,()=>{o[i]=null});return{c(){e=T("div");for(let i=0;i<o.length;i+=1)o[i].c();this.h()},l(i){e=w(i,"DIV",{class:!0});var a=P(e);for(let c=0;c<o.length;c+=1)o[c].l(a);a.forEach(g),this.h()},h(){v(e,"class",s="board visible "+(r[0]?"":"hide")+" svelte-qtzami")},m(i,a){A(i,e,a);for(let c=0;c<o.length;c+=1)o[c]&&o[c].m(e,null);t=!0},p(i,a){if(a&62){l=he({length:i[2].rows});let c;for(c=0;c<l.length;c+=1){const m=De(i,l,c);o[c]?(o[c].p(m,a),E(o[c],1)):(o[c]=Ne(m),o[c].c(),E(o[c],1),o[c].m(e,null))}for(ye(),c=l.length;c<o.length;c+=1)n(c);Me()}(!t||a&1&&s!==(s="board visible "+(i[0]?"":"hide")+" svelte-qtzami"))&&v(e,"class",s)},i(i){if(!t){for(let a=0;a<l.length;a+=1)E(o[a]);t=!0}},o(i){o=o.filter(Boolean);for(let a=0;a<o.length;a+=1)U(o[a]);t=!1},d(i){i&&g(e),ze(o,i)}}}function Ie(r){let e,s,t;function l(n){r[6](n)}let o={cell:r[2].getCell(r[13],r[15])};return r[1]!==void 0&&(o.mobile=r[1]),e=new it({props:o}),Ce.push(()=>Qe(e,"mobile",l)),e.$on("getFocus",r[3]),e.$on("lostFocus",r[4]),e.$on("clash",r[5]),{c(){G(e.$$.fragment)},l(n){R(e.$$.fragment,n)},m(n,i){j(e,n,i),t=!0},p(n,i){const a={};i&4&&(a.cell=n[2].getCell(n[13],n[15])),!s&&i&2&&(s=!0,a.mobile=n[1],Xe(()=>s=!1)),e.$set(a)},i(n){t||(E(e.$$.fragment,n),t=!0)},o(n){U(e.$$.fragment,n),t=!1},d(n){H(e,n)}}}function Ne(r){let e,s,t=he({length:r[2].cols}),l=[];for(let n=0;n<t.length;n+=1)l[n]=Ie(Le(r,t,n));const o=n=>U(l[n],1,1,()=>{l[n]=null});return{c(){for(let n=0;n<l.length;n+=1)l[n].c();e=N()},l(n){for(let i=0;i<l.length;i+=1)l[i].l(n);e=N()},m(n,i){for(let a=0;a<l.length;a+=1)l[a]&&l[a].m(n,i);A(n,e,i),s=!0},p(n,i){if(i&62){t=he({length:n[2].cols});let a;for(a=0;a<t.length;a+=1){const c=Le(n,t,a);l[a]?(l[a].p(c,i),E(l[a],1)):(l[a]=Ie(c),l[a].c(),E(l[a],1),l[a].m(e.parentNode,e))}for(ye(),a=t.length;a<l.length;a+=1)o(a);Me()}},i(n){if(!s){for(let i=0;i<t.length;i+=1)E(l[i]);s=!0}},o(n){l=l.filter(Boolean);for(let i=0;i<l.length;i+=1)U(l[i]);s=!1},d(n){n&&g(e),ze(l,n)}}}function mt(r){let e,s,t=r[2]&&Ve(r);return{c(){t&&t.c(),e=N()},l(l){t&&t.l(l),e=N()},m(l,o){t&&t.m(l,o),A(l,e,o),s=!0},p(l,[o]){l[2]?t?(t.p(l,o),o&4&&E(t,1)):(t=Ve(l),t.c(),E(t,1),t.m(e.parentNode,e)):t&&(ye(),U(t,1,1,()=>{t=null}),Me())},i(l){s||(E(t),s=!0)},o(l){U(t),s=!1},d(l){l&&g(e),t&&t.d(l)}}}function pt(r,e,s){let t;Q(r,oe,u=>s(7,t=u));let{show:l}=e,o=Ae(),n=[0][0],i=!1;const a=u=>u.includes("Android")||u.includes("Mobile")||u.includes("iPhone");Be(()=>{s(1,i=a(navigator.userAgent))});const c=()=>{s(2,n),s(0,l),s(1,i)},m=u=>{n.preClash(u.detail.r,u.detail.c),n.preClashON(),c()},p=u=>{n.preClashOFF(),c()},b=u=>{let h=n.clash();n.shiftCells(),c(),h>0&&(ie(oe,t=0,t),ie(oe,t=h,t)),n.isGameOver()&&o("gameOver")};function f(u){i=u,s(1,i)}return r.$$set=u=>{"show"in u&&s(0,l=u.show)},r.$$.update=()=>{r.$$.dirty&3&&l==!0&&s(2,n=i?new dt:new ft)},[l,i,n,m,p,b,f]}class gt extends B{constructor(e){super(),z(this,e,pt,mt,Y,{show:0})}}function _t(r){const e=r-1;return e*e*e+1}function $e(r,{delay:e=0,duration:s=400,easing:t=_t,x:l=0,y:o=0,opacity:n=0}={}){const i=getComputedStyle(r),a=+i.opacity,c=i.transform==="none"?"":i.transform,m=a*(1-n),[p,b]=ke(l),[f,u]=ke(o);return{delay:e,duration:s,easing:t,css:(h,S)=>`
			transform: ${c} translate(${(1-h)*p}${b}, ${(1-h)*f}${u});
			opacity: ${a-m*S}`}}function Ye(r){let e,s,t="Complimenti hai totalizzato",l,o,n,i,a,c,m="Nuova Partita",p,b,f;return{c(){e=T("div"),s=T("p"),s.textContent=t,l=L(),o=T("p"),n=ae(r[1]),i=ae(" punti"),a=L(),c=T("button"),c.textContent=m,this.h()},l(u){e=w(u,"DIV",{class:!0});var h=P(e);s=w(h,"P",{class:!0,"data-svelte-h":!0}),X(s)!=="svelte-13a9859"&&(s.textContent=t),l=V(h),o=w(h,"P",{class:!0});var S=P(o);n=ce(S,r[1]),i=ce(S," punti"),S.forEach(g),a=V(h),c=w(h,"BUTTON",{class:!0,"data-svelte-h":!0}),X(c)!=="svelte-16cozwr"&&(c.textContent=m),h.forEach(g),this.h()},h(){v(s,"class","score-size svelte-1eh566z"),v(o,"class","score-size svelte-1eh566z"),v(c,"class","svelte-1eh566z"),v(e,"class","score string visible svelte-1eh566z")},m(u,h){A(u,e,h),_(e,s),_(e,l),_(e,o),_(o,n),_(o,i),_(e,a),_(e,c),b||(f=J(c,"click",r[3]),b=!0)},p(u,h){h&2&&be(n,u[1])},i(u){u&&(p||Je(()=>{p=Se(e,$e,{duration:1e3,x:-400,y:0}),p.start()}))},o:k,d(u){u&&g(e),b=!1,f()}}}function vt(r){let e,s=r[0]&&Ye(r);return{c(){s&&s.c(),e=N()},l(t){s&&s.l(t),e=N()},m(t,l){s&&s.m(t,l),A(t,e,l)},p(t,[l]){t[0]?s?(s.p(t,l),l&1&&E(s,1)):(s=Ye(t),s.c(),E(s,1),s.m(e.parentNode,e)):s&&(s.d(1),s=null)},i(t){E(s)},o:k,d(t){t&&g(e),s&&s.d(t)}}}function Ct(r,e,s){let t;Q(r,Z,i=>s(1,t=i));let{show:l}=e,o=Ae();const n=()=>o("newGame");return r.$$set=i=>{"show"in i&&s(0,l=i.show)},[l,t,o,n]}class bt extends B{constructor(e){super(),z(this,e,Ct,vt,Y,{show:0})}}function St(r){let e,s='<p class="string rot-left svelte-f9ujjw">COLOR</p> <p class="string rot-right svelte-f9ujjw">CLASH</p>';return{c(){e=T("div"),e.innerHTML=s,this.h()},l(t){e=w(t,"DIV",{class:!0,"data-svelte-h":!0}),X(e)!=="svelte-rzmafg"&&(e.innerHTML=s),this.h()},h(){v(e,"class","col-left-top visible svelte-f9ujjw")},m(t,l){A(t,e,l)},p:k,i:k,o:k,d(t){t&&g(e)}}}class Tt extends B{constructor(e){super(),z(this,e,null,St,Y,{})}}function wt(r){let e,s,t,l="BEST SCORE",o,n,i,a,c,m,p="TOTAL SCORE",b,f,u;return{c(){e=T("div"),s=T("div"),t=T("p"),t.textContent=l,o=L(),n=T("p"),i=ae(r[0]),a=L(),c=T("div"),m=T("p"),m.textContent=p,b=L(),f=T("p"),u=ae(r[3]),this.h()},l(h){e=w(h,"DIV",{class:!0});var S=P(e);s=w(S,"DIV",{});var re=P(s);t=w(re,"P",{class:!0,"data-svelte-h":!0}),X(t)!=="svelte-kkvpfh"&&(t.textContent=l),o=V(re),n=w(re,"P",{class:!0});var Pe=P(n);i=ce(Pe,r[0]),Pe.forEach(g),re.forEach(g),a=V(S),c=w(S,"DIV",{});var ne=P(c);m=w(ne,"P",{class:!0,"data-svelte-h":!0}),X(m)!=="svelte-hfxbvx"&&(m.textContent=p),b=V(ne),f=w(ne,"P",{class:!0});var Ue=P(f);u=ce(Ue,r[3]),Ue.forEach(g),ne.forEach(g),S.forEach(g),this.h()},h(){v(t,"class","string score-title svelte-c5md7a"),v(n,"class","string score-score svelte-c5md7a"),v(m,"class","string score-title svelte-c5md7a"),v(f,"class","string score-score svelte-c5md7a"),v(e,"class","col-right-top visible svelte-c5md7a")},m(h,S){A(h,e,S),_(e,s),_(s,t),_(s,o),_(s,n),_(n,i),r[5](n),_(e,a),_(e,c),_(c,m),_(c,b),_(c,f),_(f,u),r[6](f)},p(h,[S]){S&1&&be(i,h[0]),S&8&&be(u,h[3])},i:k,o:k,d(h){h&&g(e),r[5](null),r[6](null)}}}function Et(r,e,s){let t,l;Q(r,Z,h=>s(3,t=h)),Q(r,oe,h=>s(4,l=h));let o=0,n,i,a,c;Be(()=>{s(0,o=m())});const m=()=>{let h=localStorage.getItem("bestScore");return h?+h:0},p=h=>{localStorage.setItem("bestScore",h),s(0,o=h)},b=()=>{ie(Z,t+=l,t),t>o&&(p(t),c=Se(a,$e,{x:-200}),c.start()),i=Se(n,$e,{x:-200}),i.start()};function f(h){Ce[h?"unshift":"push"](()=>{a=h,s(2,a)})}function u(h){Ce[h?"unshift":"push"](()=>{n=h,s(1,n)})}return r.$$.update=()=>{r.$$.dirty&16&&l>0&&b()},[o,n,a,t,l,f,u]}class Ot extends B{constructor(e){super(),z(this,e,Et,wt,Y,{})}}function $t(r){let e,s,t,l,o,n,i,a,c,m,p,b;return e=new xe({}),l=new Tt({}),i=new gt({props:{show:!r[0]}}),i.$on("gameOver",r[2]),c=new bt({props:{show:r[0]}}),c.$on("newGame",r[3]),p=new Ot({}),{c(){G(e.$$.fragment),s=L(),t=T("div"),G(l.$$.fragment),o=L(),n=T("div"),G(i.$$.fragment),a=L(),G(c.$$.fragment),m=L(),G(p.$$.fragment),this.h()},l(f){R(e.$$.fragment,f),s=V(f),t=w(f,"DIV",{class:!0});var u=P(t);R(l.$$.fragment,u),o=V(u),n=w(u,"DIV",{class:!0});var h=P(n);R(i.$$.fragment,h),a=V(h),R(c.$$.fragment,h),h.forEach(g),m=V(u),R(p.$$.fragment,u),u.forEach(g),this.h()},h(){v(n,"class","col-center-top visible svelte-16fldc6"),v(t,"class","wrapper svelte-16fldc6")},m(f,u){j(e,f,u),A(f,s,u),A(f,t,u),j(l,t,null),_(t,o),_(t,n),j(i,n,null),_(n,a),j(c,n,null),_(t,m),j(p,t,null),b=!0},p(f,[u]){const h={};u&1&&(h.show=!f[0]),i.$set(h);const S={};u&1&&(S.show=f[0]),c.$set(S)},i(f){b||(E(e.$$.fragment,f),E(l.$$.fragment,f),E(i.$$.fragment,f),E(c.$$.fragment,f),E(p.$$.fragment,f),b=!0)},o(f){U(e.$$.fragment,f),U(l.$$.fragment,f),U(i.$$.fragment,f),U(c.$$.fragment,f),U(p.$$.fragment,f),b=!1},d(f){f&&(g(s),g(t)),H(e,f),H(l),H(i),H(c),H(p)}}}function At(r,e,s){let t;Q(r,Z,i=>s(1,t=i));let l=!1;return[l,t,()=>s(0,l=!0),()=>{s(0,l=!1),ie(Z,t=0,t)}]}class kt extends B{constructor(e){super(),z(this,e,At,$t,Y,{})}}export{kt as component};
