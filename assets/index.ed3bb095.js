(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerpolicy&&(i.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?i.credentials="include":s.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();function zu(t,e){const n=Object.create(null),r=t.split(",");for(let s=0;s<r.length;s++)n[r[s]]=!0;return e?s=>!!n[s.toLowerCase()]:s=>!!n[s]}const yw="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",vw=zu(yw);function _p(t){return!!t||t===""}function Wu(t){if(Q(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],s=Ke(r)?Ew(r):Wu(r);if(s)for(const i in s)e[i]=s[i]}return e}else{if(Ke(t))return t;if(qe(t))return t}}const ww=/;(?![^(]*\))/g,_w=/:(.+)/;function Ew(t){const e={};return t.split(ww).forEach(n=>{if(n){const r=n.split(_w);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function Ku(t){let e="";if(Ke(t))e=t;else if(Q(t))for(let n=0;n<t.length;n++){const r=Ku(t[n]);r&&(e+=r+" ")}else if(qe(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const an=t=>Ke(t)?t:t==null?"":Q(t)||qe(t)&&(t.toString===Ip||!ie(t.toString))?JSON.stringify(t,Ep,2):String(t),Ep=(t,e)=>e&&e.__v_isRef?Ep(t,e.value):qr(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[r,s])=>(n[`${r} =>`]=s,n),{})}:bp(e)?{[`Set(${e.size})`]:[...e.values()]}:qe(e)&&!Q(e)&&!Sp(e)?String(e):e,Ce={},jr=[],Vt=()=>{},bw=()=>!1,Tw=/^on[^a-z]/,oa=t=>Tw.test(t),Gu=t=>t.startsWith("onUpdate:"),it=Object.assign,Xu=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},Iw=Object.prototype.hasOwnProperty,fe=(t,e)=>Iw.call(t,e),Q=Array.isArray,qr=t=>aa(t)==="[object Map]",bp=t=>aa(t)==="[object Set]",ie=t=>typeof t=="function",Ke=t=>typeof t=="string",Qu=t=>typeof t=="symbol",qe=t=>t!==null&&typeof t=="object",Tp=t=>qe(t)&&ie(t.then)&&ie(t.catch),Ip=Object.prototype.toString,aa=t=>Ip.call(t),Sw=t=>aa(t).slice(8,-1),Sp=t=>aa(t)==="[object Object]",Yu=t=>Ke(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,fo=zu(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),ca=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},Cw=/-(\w)/g,tn=ca(t=>t.replace(Cw,(e,n)=>n?n.toUpperCase():"")),Aw=/\B([A-Z])/g,us=ca(t=>t.replace(Aw,"-$1").toLowerCase()),ua=ca(t=>t.charAt(0).toUpperCase()+t.slice(1)),uc=ca(t=>t?`on${ua(t)}`:""),ni=(t,e)=>!Object.is(t,e),po=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},Co=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},Ao=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let Uh;const Rw=()=>Uh||(Uh=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});let Gt;class Cp{constructor(e=!1){this.active=!0,this.effects=[],this.cleanups=[],!e&&Gt&&(this.parent=Gt,this.index=(Gt.scopes||(Gt.scopes=[])).push(this)-1)}run(e){if(this.active){const n=Gt;try{return Gt=this,e()}finally{Gt=n}}}on(){Gt=this}off(){Gt=this.parent}stop(e){if(this.active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.active=!1}}}function Ap(t){return new Cp(t)}function kw(t,e=Gt){e&&e.active&&e.effects.push(t)}const Ju=t=>{const e=new Set(t);return e.w=0,e.n=0,e},Rp=t=>(t.w&Bn)>0,kp=t=>(t.n&Bn)>0,Dw=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=Bn},Nw=t=>{const{deps:e}=t;if(e.length){let n=0;for(let r=0;r<e.length;r++){const s=e[r];Rp(s)&&!kp(s)?s.delete(t):e[n++]=s,s.w&=~Bn,s.n&=~Bn}e.length=n}},qc=new WeakMap;let Os=0,Bn=1;const Hc=30;let $t;const ur=Symbol(""),zc=Symbol("");class Zu{constructor(e,n=null,r){this.fn=e,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,kw(this,r)}run(){if(!this.active)return this.fn();let e=$t,n=Ln;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=$t,$t=this,Ln=!0,Bn=1<<++Os,Os<=Hc?Dw(this):Fh(this),this.fn()}finally{Os<=Hc&&Nw(this),Bn=1<<--Os,$t=this.parent,Ln=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){$t===this?this.deferStop=!0:this.active&&(Fh(this),this.onStop&&this.onStop(),this.active=!1)}}function Fh(t){const{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}let Ln=!0;const Dp=[];function ls(){Dp.push(Ln),Ln=!1}function hs(){const t=Dp.pop();Ln=t===void 0?!0:t}function At(t,e,n){if(Ln&&$t){let r=qc.get(t);r||qc.set(t,r=new Map);let s=r.get(n);s||r.set(n,s=Ju()),Np(s)}}function Np(t,e){let n=!1;Os<=Hc?kp(t)||(t.n|=Bn,n=!Rp(t)):n=!t.has($t),n&&(t.add($t),$t.deps.push(t))}function mn(t,e,n,r,s,i){const o=qc.get(t);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(n==="length"&&Q(t))o.forEach((c,u)=>{(u==="length"||u>=r)&&a.push(c)});else switch(n!==void 0&&a.push(o.get(n)),e){case"add":Q(t)?Yu(n)&&a.push(o.get("length")):(a.push(o.get(ur)),qr(t)&&a.push(o.get(zc)));break;case"delete":Q(t)||(a.push(o.get(ur)),qr(t)&&a.push(o.get(zc)));break;case"set":qr(t)&&a.push(o.get(ur));break}if(a.length===1)a[0]&&Wc(a[0]);else{const c=[];for(const u of a)u&&c.push(...u);Wc(Ju(c))}}function Wc(t,e){const n=Q(t)?t:[...t];for(const r of n)r.computed&&Vh(r);for(const r of n)r.computed||Vh(r)}function Vh(t,e){(t!==$t||t.allowRecurse)&&(t.scheduler?t.scheduler():t.run())}const Ow=zu("__proto__,__v_isRef,__isVue"),Op=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(Qu)),Pw=el(),xw=el(!1,!0),Mw=el(!0),Bh=Lw();function Lw(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const r=pe(this);for(let i=0,o=this.length;i<o;i++)At(r,"get",i+"");const s=r[e](...n);return s===-1||s===!1?r[e](...n.map(pe)):s}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){ls();const r=pe(this)[e].apply(this,n);return hs(),r}}),t}function el(t=!1,e=!1){return function(r,s,i){if(s==="__v_isReactive")return!t;if(s==="__v_isReadonly")return t;if(s==="__v_isShallow")return e;if(s==="__v_raw"&&i===(t?e?Jw:$p:e?Lp:Mp).get(r))return r;const o=Q(r);if(!t&&o&&fe(Bh,s))return Reflect.get(Bh,s,i);const a=Reflect.get(r,s,i);return(Qu(s)?Op.has(s):Ow(s))||(t||At(r,"get",s),e)?a:Le(a)?o&&Yu(s)?a:a.value:qe(a)?t?Up(a):zt(a):a}}const $w=Pp(),Uw=Pp(!0);function Pp(t=!1){return function(n,r,s,i){let o=n[r];if(Qr(o)&&Le(o)&&!Le(s))return!1;if(!t&&!Qr(s)&&(Kc(s)||(s=pe(s),o=pe(o)),!Q(n)&&Le(o)&&!Le(s)))return o.value=s,!0;const a=Q(n)&&Yu(r)?Number(r)<n.length:fe(n,r),c=Reflect.set(n,r,s,i);return n===pe(i)&&(a?ni(s,o)&&mn(n,"set",r,s):mn(n,"add",r,s)),c}}function Fw(t,e){const n=fe(t,e);t[e];const r=Reflect.deleteProperty(t,e);return r&&n&&mn(t,"delete",e,void 0),r}function Vw(t,e){const n=Reflect.has(t,e);return(!Qu(e)||!Op.has(e))&&At(t,"has",e),n}function Bw(t){return At(t,"iterate",Q(t)?"length":ur),Reflect.ownKeys(t)}const xp={get:Pw,set:$w,deleteProperty:Fw,has:Vw,ownKeys:Bw},jw={get:Mw,set(t,e){return!0},deleteProperty(t,e){return!0}},qw=it({},xp,{get:xw,set:Uw}),tl=t=>t,la=t=>Reflect.getPrototypeOf(t);function Qi(t,e,n=!1,r=!1){t=t.__v_raw;const s=pe(t),i=pe(e);n||(e!==i&&At(s,"get",e),At(s,"get",i));const{has:o}=la(s),a=r?tl:n?sl:ri;if(o.call(s,e))return a(t.get(e));if(o.call(s,i))return a(t.get(i));t!==s&&t.get(e)}function Yi(t,e=!1){const n=this.__v_raw,r=pe(n),s=pe(t);return e||(t!==s&&At(r,"has",t),At(r,"has",s)),t===s?n.has(t):n.has(t)||n.has(s)}function Ji(t,e=!1){return t=t.__v_raw,!e&&At(pe(t),"iterate",ur),Reflect.get(t,"size",t)}function jh(t){t=pe(t);const e=pe(this);return la(e).has.call(e,t)||(e.add(t),mn(e,"add",t,t)),this}function qh(t,e){e=pe(e);const n=pe(this),{has:r,get:s}=la(n);let i=r.call(n,t);i||(t=pe(t),i=r.call(n,t));const o=s.call(n,t);return n.set(t,e),i?ni(e,o)&&mn(n,"set",t,e):mn(n,"add",t,e),this}function Hh(t){const e=pe(this),{has:n,get:r}=la(e);let s=n.call(e,t);s||(t=pe(t),s=n.call(e,t)),r&&r.call(e,t);const i=e.delete(t);return s&&mn(e,"delete",t,void 0),i}function zh(){const t=pe(this),e=t.size!==0,n=t.clear();return e&&mn(t,"clear",void 0,void 0),n}function Zi(t,e){return function(r,s){const i=this,o=i.__v_raw,a=pe(o),c=e?tl:t?sl:ri;return!t&&At(a,"iterate",ur),o.forEach((u,l)=>r.call(s,c(u),c(l),i))}}function eo(t,e,n){return function(...r){const s=this.__v_raw,i=pe(s),o=qr(i),a=t==="entries"||t===Symbol.iterator&&o,c=t==="keys"&&o,u=s[t](...r),l=n?tl:e?sl:ri;return!e&&At(i,"iterate",c?zc:ur),{next(){const{value:h,done:f}=u.next();return f?{value:h,done:f}:{value:a?[l(h[0]),l(h[1])]:l(h),done:f}},[Symbol.iterator](){return this}}}}function bn(t){return function(...e){return t==="delete"?!1:this}}function Hw(){const t={get(i){return Qi(this,i)},get size(){return Ji(this)},has:Yi,add:jh,set:qh,delete:Hh,clear:zh,forEach:Zi(!1,!1)},e={get(i){return Qi(this,i,!1,!0)},get size(){return Ji(this)},has:Yi,add:jh,set:qh,delete:Hh,clear:zh,forEach:Zi(!1,!0)},n={get(i){return Qi(this,i,!0)},get size(){return Ji(this,!0)},has(i){return Yi.call(this,i,!0)},add:bn("add"),set:bn("set"),delete:bn("delete"),clear:bn("clear"),forEach:Zi(!0,!1)},r={get(i){return Qi(this,i,!0,!0)},get size(){return Ji(this,!0)},has(i){return Yi.call(this,i,!0)},add:bn("add"),set:bn("set"),delete:bn("delete"),clear:bn("clear"),forEach:Zi(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{t[i]=eo(i,!1,!1),n[i]=eo(i,!0,!1),e[i]=eo(i,!1,!0),r[i]=eo(i,!0,!0)}),[t,n,e,r]}const[zw,Ww,Kw,Gw]=Hw();function nl(t,e){const n=e?t?Gw:Kw:t?Ww:zw;return(r,s,i)=>s==="__v_isReactive"?!t:s==="__v_isReadonly"?t:s==="__v_raw"?r:Reflect.get(fe(n,s)&&s in r?n:r,s,i)}const Xw={get:nl(!1,!1)},Qw={get:nl(!1,!0)},Yw={get:nl(!0,!1)},Mp=new WeakMap,Lp=new WeakMap,$p=new WeakMap,Jw=new WeakMap;function Zw(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function e_(t){return t.__v_skip||!Object.isExtensible(t)?0:Zw(Sw(t))}function zt(t){return Qr(t)?t:rl(t,!1,xp,Xw,Mp)}function t_(t){return rl(t,!1,qw,Qw,Lp)}function Up(t){return rl(t,!0,jw,Yw,$p)}function rl(t,e,n,r,s){if(!qe(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=s.get(t);if(i)return i;const o=e_(t);if(o===0)return t;const a=new Proxy(t,o===2?r:n);return s.set(t,a),a}function dn(t){return Qr(t)?dn(t.__v_raw):!!(t&&t.__v_isReactive)}function Qr(t){return!!(t&&t.__v_isReadonly)}function Kc(t){return!!(t&&t.__v_isShallow)}function Fp(t){return dn(t)||Qr(t)}function pe(t){const e=t&&t.__v_raw;return e?pe(e):t}function Yr(t){return Co(t,"__v_skip",!0),t}const ri=t=>qe(t)?zt(t):t,sl=t=>qe(t)?Up(t):t;function Vp(t){Ln&&$t&&(t=pe(t),Np(t.dep||(t.dep=Ju())))}function Bp(t,e){t=pe(t),t.dep&&Wc(t.dep)}function Le(t){return!!(t&&t.__v_isRef===!0)}function Oe(t){return jp(t,!1)}function n_(t){return jp(t,!0)}function jp(t,e){return Le(t)?t:new r_(t,e)}class r_{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:pe(e),this._value=n?e:ri(e)}get value(){return Vp(this),this._value}set value(e){e=this.__v_isShallow?e:pe(e),ni(e,this._rawValue)&&(this._rawValue=e,this._value=this.__v_isShallow?e:ri(e),Bp(this))}}function j(t){return Le(t)?t.value:t}const s_={get:(t,e,n)=>j(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const s=t[e];return Le(s)&&!Le(n)?(s.value=n,!0):Reflect.set(t,e,n,r)}};function qp(t){return dn(t)?t:new Proxy(t,s_)}function i_(t){const e=Q(t)?new Array(t.length):{};for(const n in t)e[n]=a_(t,n);return e}class o_{constructor(e,n,r){this._object=e,this._key=n,this._defaultValue=r,this.__v_isRef=!0}get value(){const e=this._object[this._key];return e===void 0?this._defaultValue:e}set value(e){this._object[this._key]=e}}function a_(t,e,n){const r=t[e];return Le(r)?r:new o_(t,e,n)}class c_{constructor(e,n,r,s){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this._dirty=!0,this.effect=new Zu(e,()=>{this._dirty||(this._dirty=!0,Bp(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!s,this.__v_isReadonly=r}get value(){const e=pe(this);return Vp(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}function u_(t,e,n=!1){let r,s;const i=ie(t);return i?(r=t,s=Vt):(r=t.get,s=t.set),new c_(r,s,i||!s,n)}function $n(t,e,n,r){let s;try{s=r?t(...r):t()}catch(i){ha(i,e,n)}return s}function Pt(t,e,n,r){if(ie(t)){const i=$n(t,e,n,r);return i&&Tp(i)&&i.catch(o=>{ha(o,e,n)}),i}const s=[];for(let i=0;i<t.length;i++)s.push(Pt(t[i],e,n,r));return s}function ha(t,e,n,r=!0){const s=e?e.vnode:null;if(e){let i=e.parent;const o=e.proxy,a=n;for(;i;){const u=i.ec;if(u){for(let l=0;l<u.length;l++)if(u[l](t,o,a)===!1)return}i=i.parent}const c=e.appContext.config.errorHandler;if(c){$n(c,null,10,[t,o,a]);return}}l_(t,n,s,r)}function l_(t,e,n,r=!0){console.error(t)}let Ro=!1,Gc=!1;const It=[];let cn=0;const Bs=[];let Ps=null,Or=0;const js=[];let An=null,Pr=0;const Hp=Promise.resolve();let il=null,Xc=null;function si(t){const e=il||Hp;return t?e.then(this?t.bind(this):t):e}function h_(t){let e=cn+1,n=It.length;for(;e<n;){const r=e+n>>>1;ii(It[r])<t?e=r+1:n=r}return e}function zp(t){(!It.length||!It.includes(t,Ro&&t.allowRecurse?cn+1:cn))&&t!==Xc&&(t.id==null?It.push(t):It.splice(h_(t.id),0,t),Wp())}function Wp(){!Ro&&!Gc&&(Gc=!0,il=Hp.then(Xp))}function f_(t){const e=It.indexOf(t);e>cn&&It.splice(e,1)}function Kp(t,e,n,r){Q(t)?n.push(...t):(!e||!e.includes(t,t.allowRecurse?r+1:r))&&n.push(t),Wp()}function d_(t){Kp(t,Ps,Bs,Or)}function p_(t){Kp(t,An,js,Pr)}function fa(t,e=null){if(Bs.length){for(Xc=e,Ps=[...new Set(Bs)],Bs.length=0,Or=0;Or<Ps.length;Or++)Ps[Or]();Ps=null,Or=0,Xc=null,fa(t,e)}}function Gp(t){if(fa(),js.length){const e=[...new Set(js)];if(js.length=0,An){An.push(...e);return}for(An=e,An.sort((n,r)=>ii(n)-ii(r)),Pr=0;Pr<An.length;Pr++)An[Pr]();An=null,Pr=0}}const ii=t=>t.id==null?1/0:t.id;function Xp(t){Gc=!1,Ro=!0,fa(t),It.sort((n,r)=>ii(n)-ii(r));const e=Vt;try{for(cn=0;cn<It.length;cn++){const n=It[cn];n&&n.active!==!1&&$n(n,null,14)}}finally{cn=0,It.length=0,Gp(),Ro=!1,il=null,(It.length||Bs.length||js.length)&&Xp(t)}}function m_(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||Ce;let s=n;const i=e.startsWith("update:"),o=i&&e.slice(7);if(o&&o in r){const l=`${o==="modelValue"?"model":o}Modifiers`,{number:h,trim:f}=r[l]||Ce;f&&(s=n.map(p=>p.trim())),h&&(s=n.map(Ao))}let a,c=r[a=uc(e)]||r[a=uc(tn(e))];!c&&i&&(c=r[a=uc(us(e))]),c&&Pt(c,t,6,s);const u=r[a+"Once"];if(u){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,Pt(u,t,6,s)}}function Qp(t,e,n=!1){const r=e.emitsCache,s=r.get(t);if(s!==void 0)return s;const i=t.emits;let o={},a=!1;if(!ie(t)){const c=u=>{const l=Qp(u,e,!0);l&&(a=!0,it(o,l))};!n&&e.mixins.length&&e.mixins.forEach(c),t.extends&&c(t.extends),t.mixins&&t.mixins.forEach(c)}return!i&&!a?(r.set(t,null),null):(Q(i)?i.forEach(c=>o[c]=null):it(o,i),r.set(t,o),o)}function da(t,e){return!t||!oa(e)?!1:(e=e.slice(2).replace(/Once$/,""),fe(t,e[0].toLowerCase()+e.slice(1))||fe(t,us(e))||fe(t,e))}let Ot=null,Yp=null;function ko(t){const e=Ot;return Ot=t,Yp=t&&t.type.__scopeId||null,e}function oi(t,e=Ot,n){if(!e||t._n)return t;const r=(...s)=>{r._d&&nf(-1);const i=ko(e),o=t(...s);return ko(i),r._d&&nf(1),o};return r._n=!0,r._c=!0,r._d=!0,r}function lc(t){const{type:e,vnode:n,proxy:r,withProxy:s,props:i,propsOptions:[o],slots:a,attrs:c,emit:u,render:l,renderCache:h,data:f,setupState:p,ctx:d,inheritAttrs:v}=t;let y,_;const A=ko(t);try{if(n.shapeFlag&4){const O=s||r;y=Xt(l.call(O,O,h,i,p,f,d)),_=c}else{const O=e;y=Xt(O.length>1?O(i,{attrs:c,slots:a,emit:u}):O(i,null)),_=e.props?c:g_(c)}}catch(O){qs.length=0,ha(O,t,1),y=Ye(Bt)}let M=y;if(_&&v!==!1){const O=Object.keys(_),{shapeFlag:V}=M;O.length&&V&7&&(o&&O.some(Gu)&&(_=y_(_,o)),M=jn(M,_))}return n.dirs&&(M=jn(M),M.dirs=M.dirs?M.dirs.concat(n.dirs):n.dirs),n.transition&&(M.transition=n.transition),y=M,ko(A),y}const g_=t=>{let e;for(const n in t)(n==="class"||n==="style"||oa(n))&&((e||(e={}))[n]=t[n]);return e},y_=(t,e)=>{const n={};for(const r in t)(!Gu(r)||!(r.slice(9)in e))&&(n[r]=t[r]);return n};function v_(t,e,n){const{props:r,children:s,component:i}=t,{props:o,children:a,patchFlag:c}=e,u=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return r?Wh(r,o,u):!!o;if(c&8){const l=e.dynamicProps;for(let h=0;h<l.length;h++){const f=l[h];if(o[f]!==r[f]&&!da(u,f))return!0}}}else return(s||a)&&(!a||!a.$stable)?!0:r===o?!1:r?o?Wh(r,o,u):!0:!!o;return!1}function Wh(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(e[i]!==t[i]&&!da(n,i))return!0}return!1}function w_({vnode:t,parent:e},n){for(;e&&e.subTree===t;)(t=e.vnode).el=n,e=e.parent}const __=t=>t.__isSuspense;function E_(t,e){e&&e.pendingBranch?Q(t)?e.effects.push(...t):e.effects.push(t):p_(t)}function Hr(t,e){if(Qe){let n=Qe.provides;const r=Qe.parent&&Qe.parent.provides;r===n&&(n=Qe.provides=Object.create(r)),n[t]=e}}function xt(t,e,n=!1){const r=Qe||Ot;if(r){const s=r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides;if(s&&t in s)return s[t];if(arguments.length>1)return n&&ie(e)?e.call(r.proxy):e}}function pa(t,e){return ol(t,null,e)}const Kh={};function Ct(t,e,n){return ol(t,e,n)}function ol(t,e,{immediate:n,deep:r,flush:s,onTrack:i,onTrigger:o}=Ce){const a=Qe;let c,u=!1,l=!1;if(Le(t)?(c=()=>t.value,u=Kc(t)):dn(t)?(c=()=>t,r=!0):Q(t)?(l=!0,u=t.some(_=>dn(_)||Kc(_)),c=()=>t.map(_=>{if(Le(_))return _.value;if(dn(_))return ir(_);if(ie(_))return $n(_,a,2)})):ie(t)?e?c=()=>$n(t,a,2):c=()=>{if(!(a&&a.isUnmounted))return h&&h(),Pt(t,a,3,[f])}:c=Vt,e&&r){const _=c;c=()=>ir(_())}let h,f=_=>{h=y.onStop=()=>{$n(_,a,4)}};if(ci)return f=Vt,e?n&&Pt(e,a,3,[c(),l?[]:void 0,f]):c(),Vt;let p=l?[]:Kh;const d=()=>{if(!!y.active)if(e){const _=y.run();(r||u||(l?_.some((A,M)=>ni(A,p[M])):ni(_,p)))&&(h&&h(),Pt(e,a,3,[_,p===Kh?void 0:p,f]),p=_)}else y.run()};d.allowRecurse=!!e;let v;s==="sync"?v=d:s==="post"?v=()=>wt(d,a&&a.suspense):v=()=>d_(d);const y=new Zu(c,v);return e?n?d():p=y.run():s==="post"?wt(y.run.bind(y),a&&a.suspense):y.run(),()=>{y.stop(),a&&a.scope&&Xu(a.scope.effects,y)}}function b_(t,e,n){const r=this.proxy,s=Ke(t)?t.includes(".")?Jp(r,t):()=>r[t]:t.bind(r,r);let i;ie(e)?i=e:(i=e.handler,n=e);const o=Qe;Jr(this);const a=ol(s,i.bind(r),n);return o?Jr(o):lr(),a}function Jp(t,e){const n=e.split(".");return()=>{let r=t;for(let s=0;s<n.length&&r;s++)r=r[n[s]];return r}}function ir(t,e){if(!qe(t)||t.__v_skip||(e=e||new Set,e.has(t)))return t;if(e.add(t),Le(t))ir(t.value,e);else if(Q(t))for(let n=0;n<t.length;n++)ir(t[n],e);else if(bp(t)||qr(t))t.forEach(n=>{ir(n,e)});else if(Sp(t))for(const n in t)ir(t[n],e);return t}function T_(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return ul(()=>{t.isMounted=!0}),ya(()=>{t.isUnmounting=!0}),t}const Dt=[Function,Array],I_={name:"BaseTransition",props:{mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:Dt,onEnter:Dt,onAfterEnter:Dt,onEnterCancelled:Dt,onBeforeLeave:Dt,onLeave:Dt,onAfterLeave:Dt,onLeaveCancelled:Dt,onBeforeAppear:Dt,onAppear:Dt,onAfterAppear:Dt,onAppearCancelled:Dt},setup(t,{slots:e}){const n=_a(),r=T_();let s;return()=>{const i=e.default&&tm(e.default(),!0);if(!i||!i.length)return;let o=i[0];if(i.length>1){for(const v of i)if(v.type!==Bt){o=v;break}}const a=pe(t),{mode:c}=a;if(r.isLeaving)return hc(o);const u=Gh(o);if(!u)return hc(o);const l=Qc(u,a,r,n);Yc(u,l);const h=n.subTree,f=h&&Gh(h);let p=!1;const{getTransitionKey:d}=u.type;if(d){const v=d();s===void 0?s=v:v!==s&&(s=v,p=!0)}if(f&&f.type!==Bt&&(!rr(u,f)||p)){const v=Qc(f,a,r,n);if(Yc(f,v),c==="out-in")return r.isLeaving=!0,v.afterLeave=()=>{r.isLeaving=!1,n.update()},hc(o);c==="in-out"&&u.type!==Bt&&(v.delayLeave=(y,_,A)=>{const M=em(r,f);M[String(f.key)]=f,y._leaveCb=()=>{_(),y._leaveCb=void 0,delete l.delayedLeave},l.delayedLeave=A})}return o}}},Zp=I_;function em(t,e){const{leavingVNodes:n}=t;let r=n.get(e.type);return r||(r=Object.create(null),n.set(e.type,r)),r}function Qc(t,e,n,r){const{appear:s,mode:i,persisted:o=!1,onBeforeEnter:a,onEnter:c,onAfterEnter:u,onEnterCancelled:l,onBeforeLeave:h,onLeave:f,onAfterLeave:p,onLeaveCancelled:d,onBeforeAppear:v,onAppear:y,onAfterAppear:_,onAppearCancelled:A}=e,M=String(t.key),O=em(n,t),V=(x,Y)=>{x&&Pt(x,r,9,Y)},ne=(x,Y)=>{const ue=Y[1];V(x,Y),Q(x)?x.every(Ee=>Ee.length<=1)&&ue():x.length<=1&&ue()},G={mode:i,persisted:o,beforeEnter(x){let Y=a;if(!n.isMounted)if(s)Y=v||a;else return;x._leaveCb&&x._leaveCb(!0);const ue=O[M];ue&&rr(t,ue)&&ue.el._leaveCb&&ue.el._leaveCb(),V(Y,[x])},enter(x){let Y=c,ue=u,Ee=l;if(!n.isMounted)if(s)Y=y||c,ue=_||u,Ee=A||l;else return;let L=!1;const me=x._enterCb=Pe=>{L||(L=!0,Pe?V(Ee,[x]):V(ue,[x]),G.delayedLeave&&G.delayedLeave(),x._enterCb=void 0)};Y?ne(Y,[x,me]):me()},leave(x,Y){const ue=String(t.key);if(x._enterCb&&x._enterCb(!0),n.isUnmounting)return Y();V(h,[x]);let Ee=!1;const L=x._leaveCb=me=>{Ee||(Ee=!0,Y(),me?V(d,[x]):V(p,[x]),x._leaveCb=void 0,O[ue]===t&&delete O[ue])};O[ue]=t,f?ne(f,[x,L]):L()},clone(x){return Qc(x,e,n,r)}};return G}function hc(t){if(ma(t))return t=jn(t),t.children=null,t}function Gh(t){return ma(t)?t.children?t.children[0]:void 0:t}function Yc(t,e){t.shapeFlag&6&&t.component?Yc(t.component.subTree,e):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function tm(t,e=!1,n){let r=[],s=0;for(let i=0;i<t.length;i++){let o=t[i];const a=n==null?o.key:String(n)+String(o.key!=null?o.key:i);o.type===Nt?(o.patchFlag&128&&s++,r=r.concat(tm(o.children,e,a))):(e||o.type!==Bt)&&r.push(a!=null?jn(o,{key:a}):o)}if(s>1)for(let i=0;i<r.length;i++)r[i].patchFlag=-2;return r}function al(t){return ie(t)?{setup:t,name:t.name}:t}const mo=t=>!!t.type.__asyncLoader,ma=t=>t.type.__isKeepAlive;function S_(t,e){nm(t,"a",e)}function C_(t,e){nm(t,"da",e)}function nm(t,e,n=Qe){const r=t.__wdc||(t.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return t()});if(ga(e,r,n),n){let s=n.parent;for(;s&&s.parent;)ma(s.parent.vnode)&&A_(r,e,n,s),s=s.parent}}function A_(t,e,n,r){const s=ga(e,t,r,!0);ll(()=>{Xu(r[e],s)},n)}function ga(t,e,n=Qe,r=!1){if(n){const s=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;ls(),Jr(n);const a=Pt(e,n,t,o);return lr(),hs(),a});return r?s.unshift(i):s.push(i),i}}const En=t=>(e,n=Qe)=>(!ci||t==="sp")&&ga(t,e,n),cl=En("bm"),ul=En("m"),R_=En("bu"),k_=En("u"),ya=En("bum"),ll=En("um"),D_=En("sp"),N_=En("rtg"),O_=En("rtc");function P_(t,e=Qe){ga("ec",t,e)}function Lr(t,e){const n=Ot;if(n===null)return t;const r=Ea(n)||n.proxy,s=t.dirs||(t.dirs=[]);for(let i=0;i<e.length;i++){let[o,a,c,u=Ce]=e[i];ie(o)&&(o={mounted:o,updated:o}),o.deep&&ir(a),s.push({dir:o,instance:r,value:a,oldValue:void 0,arg:c,modifiers:u})}return t}function Yn(t,e,n,r){const s=t.dirs,i=e&&e.dirs;for(let o=0;o<s.length;o++){const a=s[o];i&&(a.oldValue=i[o].value);let c=a.dir[r];c&&(ls(),Pt(c,n,8,[t.el,a,t,e]),hs())}}const hl="components";function Do(t,e){return sm(hl,t,!0,e)||t}const rm=Symbol();function x_(t){return Ke(t)?sm(hl,t,!1)||t:t||rm}function sm(t,e,n=!0,r=!1){const s=Ot||Qe;if(s){const i=s.type;if(t===hl){const a=uE(i,!1);if(a&&(a===e||a===tn(e)||a===ua(tn(e))))return i}const o=Xh(s[t]||i[t],e)||Xh(s.appContext[t],e);return!o&&r?i:o}}function Xh(t,e){return t&&(t[e]||t[tn(e)]||t[ua(tn(e))])}function SO(t,e,n,r){let s;const i=n&&n[r];if(Q(t)||Ke(t)){s=new Array(t.length);for(let o=0,a=t.length;o<a;o++)s[o]=e(t[o],o,void 0,i&&i[o])}else if(typeof t=="number"){s=new Array(t);for(let o=0;o<t;o++)s[o]=e(o+1,o,void 0,i&&i[o])}else if(qe(t))if(t[Symbol.iterator])s=Array.from(t,(o,a)=>e(o,a,void 0,i&&i[a]));else{const o=Object.keys(t);s=new Array(o.length);for(let a=0,c=o.length;a<c;a++){const u=o[a];s[a]=e(t[u],u,a,i&&i[a])}}else s=[];return n&&(n[r]=s),s}const Jc=t=>t?gm(t)?Ea(t)||t.proxy:Jc(t.parent):null,No=it(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>Jc(t.parent),$root:t=>Jc(t.root),$emit:t=>t.emit,$options:t=>om(t),$forceUpdate:t=>t.f||(t.f=()=>zp(t.update)),$nextTick:t=>t.n||(t.n=si.bind(t.proxy)),$watch:t=>b_.bind(t)}),M_={get({_:t},e){const{ctx:n,setupState:r,data:s,props:i,accessCache:o,type:a,appContext:c}=t;let u;if(e[0]!=="$"){const p=o[e];if(p!==void 0)switch(p){case 1:return r[e];case 2:return s[e];case 4:return n[e];case 3:return i[e]}else{if(r!==Ce&&fe(r,e))return o[e]=1,r[e];if(s!==Ce&&fe(s,e))return o[e]=2,s[e];if((u=t.propsOptions[0])&&fe(u,e))return o[e]=3,i[e];if(n!==Ce&&fe(n,e))return o[e]=4,n[e];Zc&&(o[e]=0)}}const l=No[e];let h,f;if(l)return e==="$attrs"&&At(t,"get",e),l(t);if((h=a.__cssModules)&&(h=h[e]))return h;if(n!==Ce&&fe(n,e))return o[e]=4,n[e];if(f=c.config.globalProperties,fe(f,e))return f[e]},set({_:t},e,n){const{data:r,setupState:s,ctx:i}=t;return s!==Ce&&fe(s,e)?(s[e]=n,!0):r!==Ce&&fe(r,e)?(r[e]=n,!0):fe(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:s,propsOptions:i}},o){let a;return!!n[o]||t!==Ce&&fe(t,o)||e!==Ce&&fe(e,o)||(a=i[0])&&fe(a,o)||fe(r,o)||fe(No,o)||fe(s.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:fe(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};let Zc=!0;function L_(t){const e=om(t),n=t.proxy,r=t.ctx;Zc=!1,e.beforeCreate&&Qh(e.beforeCreate,t,"bc");const{data:s,computed:i,methods:o,watch:a,provide:c,inject:u,created:l,beforeMount:h,mounted:f,beforeUpdate:p,updated:d,activated:v,deactivated:y,beforeDestroy:_,beforeUnmount:A,destroyed:M,unmounted:O,render:V,renderTracked:ne,renderTriggered:G,errorCaptured:x,serverPrefetch:Y,expose:ue,inheritAttrs:Ee,components:L,directives:me,filters:Pe}=e;if(u&&$_(u,r,null,t.appContext.config.unwrapInjectedRef),o)for(const be in o){const ve=o[be];ie(ve)&&(r[be]=ve.bind(n))}if(s){const be=s.call(n,n);qe(be)&&(t.data=zt(be))}if(Zc=!0,i)for(const be in i){const ve=i[be],ht=ie(ve)?ve.bind(n,n):ie(ve.get)?ve.get.bind(n,n):Vt,Te=!ie(ve)&&ie(ve.set)?ve.set.bind(n):Vt,et=oe({get:ht,set:Te});Object.defineProperty(r,be,{enumerable:!0,configurable:!0,get:()=>et.value,set:ze=>et.value=ze})}if(a)for(const be in a)im(a[be],r,n,be);if(c){const be=ie(c)?c.call(n):c;Reflect.ownKeys(be).forEach(ve=>{Hr(ve,be[ve])})}l&&Qh(l,t,"c");function ke(be,ve){Q(ve)?ve.forEach(ht=>be(ht.bind(n))):ve&&be(ve.bind(n))}if(ke(cl,h),ke(ul,f),ke(R_,p),ke(k_,d),ke(S_,v),ke(C_,y),ke(P_,x),ke(O_,ne),ke(N_,G),ke(ya,A),ke(ll,O),ke(D_,Y),Q(ue))if(ue.length){const be=t.exposed||(t.exposed={});ue.forEach(ve=>{Object.defineProperty(be,ve,{get:()=>n[ve],set:ht=>n[ve]=ht})})}else t.exposed||(t.exposed={});V&&t.render===Vt&&(t.render=V),Ee!=null&&(t.inheritAttrs=Ee),L&&(t.components=L),me&&(t.directives=me)}function $_(t,e,n=Vt,r=!1){Q(t)&&(t=eu(t));for(const s in t){const i=t[s];let o;qe(i)?"default"in i?o=xt(i.from||s,i.default,!0):o=xt(i.from||s):o=xt(i),Le(o)&&r?Object.defineProperty(e,s,{enumerable:!0,configurable:!0,get:()=>o.value,set:a=>o.value=a}):e[s]=o}}function Qh(t,e,n){Pt(Q(t)?t.map(r=>r.bind(e.proxy)):t.bind(e.proxy),e,n)}function im(t,e,n,r){const s=r.includes(".")?Jp(n,r):()=>n[r];if(Ke(t)){const i=e[t];ie(i)&&Ct(s,i)}else if(ie(t))Ct(s,t.bind(n));else if(qe(t))if(Q(t))t.forEach(i=>im(i,e,n,r));else{const i=ie(t.handler)?t.handler.bind(n):e[t.handler];ie(i)&&Ct(s,i,t)}}function om(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:s,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,a=i.get(e);let c;return a?c=a:!s.length&&!n&&!r?c=e:(c={},s.length&&s.forEach(u=>Oo(c,u,o,!0)),Oo(c,e,o)),i.set(e,c),c}function Oo(t,e,n,r=!1){const{mixins:s,extends:i}=e;i&&Oo(t,i,n,!0),s&&s.forEach(o=>Oo(t,o,n,!0));for(const o in e)if(!(r&&o==="expose")){const a=U_[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const U_={data:Yh,props:tr,emits:tr,methods:tr,computed:tr,beforeCreate:dt,created:dt,beforeMount:dt,mounted:dt,beforeUpdate:dt,updated:dt,beforeDestroy:dt,beforeUnmount:dt,destroyed:dt,unmounted:dt,activated:dt,deactivated:dt,errorCaptured:dt,serverPrefetch:dt,components:tr,directives:tr,watch:V_,provide:Yh,inject:F_};function Yh(t,e){return e?t?function(){return it(ie(t)?t.call(this,this):t,ie(e)?e.call(this,this):e)}:e:t}function F_(t,e){return tr(eu(t),eu(e))}function eu(t){if(Q(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function dt(t,e){return t?[...new Set([].concat(t,e))]:e}function tr(t,e){return t?it(it(Object.create(null),t),e):e}function V_(t,e){if(!t)return e;if(!e)return t;const n=it(Object.create(null),t);for(const r in e)n[r]=dt(t[r],e[r]);return n}function B_(t,e,n,r=!1){const s={},i={};Co(i,wa,1),t.propsDefaults=Object.create(null),am(t,e,s,i);for(const o in t.propsOptions[0])o in s||(s[o]=void 0);n?t.props=r?s:t_(s):t.type.props?t.props=s:t.props=i,t.attrs=i}function j_(t,e,n,r){const{props:s,attrs:i,vnode:{patchFlag:o}}=t,a=pe(s),[c]=t.propsOptions;let u=!1;if((r||o>0)&&!(o&16)){if(o&8){const l=t.vnode.dynamicProps;for(let h=0;h<l.length;h++){let f=l[h];if(da(t.emitsOptions,f))continue;const p=e[f];if(c)if(fe(i,f))p!==i[f]&&(i[f]=p,u=!0);else{const d=tn(f);s[d]=tu(c,a,d,p,t,!1)}else p!==i[f]&&(i[f]=p,u=!0)}}}else{am(t,e,s,i)&&(u=!0);let l;for(const h in a)(!e||!fe(e,h)&&((l=us(h))===h||!fe(e,l)))&&(c?n&&(n[h]!==void 0||n[l]!==void 0)&&(s[h]=tu(c,a,h,void 0,t,!0)):delete s[h]);if(i!==a)for(const h in i)(!e||!fe(e,h)&&!0)&&(delete i[h],u=!0)}u&&mn(t,"set","$attrs")}function am(t,e,n,r){const[s,i]=t.propsOptions;let o=!1,a;if(e)for(let c in e){if(fo(c))continue;const u=e[c];let l;s&&fe(s,l=tn(c))?!i||!i.includes(l)?n[l]=u:(a||(a={}))[l]=u:da(t.emitsOptions,c)||(!(c in r)||u!==r[c])&&(r[c]=u,o=!0)}if(i){const c=pe(n),u=a||Ce;for(let l=0;l<i.length;l++){const h=i[l];n[h]=tu(s,c,h,u[h],t,!fe(u,h))}}return o}function tu(t,e,n,r,s,i){const o=t[n];if(o!=null){const a=fe(o,"default");if(a&&r===void 0){const c=o.default;if(o.type!==Function&&ie(c)){const{propsDefaults:u}=s;n in u?r=u[n]:(Jr(s),r=u[n]=c.call(null,e),lr())}else r=c}o[0]&&(i&&!a?r=!1:o[1]&&(r===""||r===us(n))&&(r=!0))}return r}function cm(t,e,n=!1){const r=e.propsCache,s=r.get(t);if(s)return s;const i=t.props,o={},a=[];let c=!1;if(!ie(t)){const l=h=>{c=!0;const[f,p]=cm(h,e,!0);it(o,f),p&&a.push(...p)};!n&&e.mixins.length&&e.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}if(!i&&!c)return r.set(t,jr),jr;if(Q(i))for(let l=0;l<i.length;l++){const h=tn(i[l]);Jh(h)&&(o[h]=Ce)}else if(i)for(const l in i){const h=tn(l);if(Jh(h)){const f=i[l],p=o[h]=Q(f)||ie(f)?{type:f}:f;if(p){const d=tf(Boolean,p.type),v=tf(String,p.type);p[0]=d>-1,p[1]=v<0||d<v,(d>-1||fe(p,"default"))&&a.push(h)}}}const u=[o,a];return r.set(t,u),u}function Jh(t){return t[0]!=="$"}function Zh(t){const e=t&&t.toString().match(/^\s*function (\w+)/);return e?e[1]:t===null?"null":""}function ef(t,e){return Zh(t)===Zh(e)}function tf(t,e){return Q(e)?e.findIndex(n=>ef(n,t)):ie(e)&&ef(e,t)?0:-1}const um=t=>t[0]==="_"||t==="$stable",fl=t=>Q(t)?t.map(Xt):[Xt(t)],q_=(t,e,n)=>{if(e._n)return e;const r=oi((...s)=>fl(e(...s)),n);return r._c=!1,r},lm=(t,e,n)=>{const r=t._ctx;for(const s in t){if(um(s))continue;const i=t[s];if(ie(i))e[s]=q_(s,i,r);else if(i!=null){const o=fl(i);e[s]=()=>o}}},hm=(t,e)=>{const n=fl(e);t.slots.default=()=>n},H_=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=pe(e),Co(e,"_",n)):lm(e,t.slots={})}else t.slots={},e&&hm(t,e);Co(t.slots,wa,1)},z_=(t,e,n)=>{const{vnode:r,slots:s}=t;let i=!0,o=Ce;if(r.shapeFlag&32){const a=e._;a?n&&a===1?i=!1:(it(s,e),!n&&a===1&&delete s._):(i=!e.$stable,lm(e,s)),o=e}else e&&(hm(t,e),o={default:1});if(i)for(const a in s)!um(a)&&!(a in o)&&delete s[a]};function fm(){return{app:null,config:{isNativeTag:bw,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let W_=0;function K_(t,e){return function(r,s=null){ie(r)||(r=Object.assign({},r)),s!=null&&!qe(s)&&(s=null);const i=fm(),o=new Set;let a=!1;const c=i.app={_uid:W_++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:hE,get config(){return i.config},set config(u){},use(u,...l){return o.has(u)||(u&&ie(u.install)?(o.add(u),u.install(c,...l)):ie(u)&&(o.add(u),u(c,...l))),c},mixin(u){return i.mixins.includes(u)||i.mixins.push(u),c},component(u,l){return l?(i.components[u]=l,c):i.components[u]},directive(u,l){return l?(i.directives[u]=l,c):i.directives[u]},mount(u,l,h){if(!a){const f=Ye(r,s);return f.appContext=i,l&&e?e(f,u):t(f,u,h),a=!0,c._container=u,u.__vue_app__=c,Ea(f.component)||f.component.proxy}},unmount(){a&&(t(null,c._container),delete c._container.__vue_app__)},provide(u,l){return i.provides[u]=l,c}};return c}}function nu(t,e,n,r,s=!1){if(Q(t)){t.forEach((f,p)=>nu(f,e&&(Q(e)?e[p]:e),n,r,s));return}if(mo(r)&&!s)return;const i=r.shapeFlag&4?Ea(r.component)||r.component.proxy:r.el,o=s?null:i,{i:a,r:c}=t,u=e&&e.r,l=a.refs===Ce?a.refs={}:a.refs,h=a.setupState;if(u!=null&&u!==c&&(Ke(u)?(l[u]=null,fe(h,u)&&(h[u]=null)):Le(u)&&(u.value=null)),ie(c))$n(c,a,12,[o,l]);else{const f=Ke(c),p=Le(c);if(f||p){const d=()=>{if(t.f){const v=f?l[c]:c.value;s?Q(v)&&Xu(v,i):Q(v)?v.includes(i)||v.push(i):f?(l[c]=[i],fe(h,c)&&(h[c]=l[c])):(c.value=[i],t.k&&(l[t.k]=c.value))}else f?(l[c]=o,fe(h,c)&&(h[c]=o)):p&&(c.value=o,t.k&&(l[t.k]=o))};o?(d.id=-1,wt(d,n)):d()}}}const wt=E_;function G_(t){return X_(t)}function X_(t,e){const n=Rw();n.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:o,createText:a,createComment:c,setText:u,setElementText:l,parentNode:h,nextSibling:f,setScopeId:p=Vt,cloneNode:d,insertStaticContent:v}=t,y=(m,g,w,I=null,T=null,k=null,P=!1,R=null,D=!!g.dynamicChildren)=>{if(m===g)return;m&&!rr(m,g)&&(I=q(m),kt(m,T,k,!0),m=null),g.patchFlag===-2&&(D=!1,g.dynamicChildren=null);const{type:S,ref:W,shapeFlag:F}=g;switch(S){case dl:_(m,g,w,I);break;case Bt:A(m,g,w,I);break;case fc:m==null&&M(g,w,I,P);break;case Nt:me(m,g,w,I,T,k,P,R,D);break;default:F&1?ne(m,g,w,I,T,k,P,R,D):F&6?Pe(m,g,w,I,T,k,P,R,D):(F&64||F&128)&&S.process(m,g,w,I,T,k,P,R,D,Ae)}W!=null&&T&&nu(W,m&&m.ref,k,g||m,!g)},_=(m,g,w,I)=>{if(m==null)r(g.el=a(g.children),w,I);else{const T=g.el=m.el;g.children!==m.children&&u(T,g.children)}},A=(m,g,w,I)=>{m==null?r(g.el=c(g.children||""),w,I):g.el=m.el},M=(m,g,w,I)=>{[m.el,m.anchor]=v(m.children,g,w,I,m.el,m.anchor)},O=({el:m,anchor:g},w,I)=>{let T;for(;m&&m!==g;)T=f(m),r(m,w,I),m=T;r(g,w,I)},V=({el:m,anchor:g})=>{let w;for(;m&&m!==g;)w=f(m),s(m),m=w;s(g)},ne=(m,g,w,I,T,k,P,R,D)=>{P=P||g.type==="svg",m==null?G(g,w,I,T,k,P,R,D):ue(m,g,T,k,P,R,D)},G=(m,g,w,I,T,k,P,R)=>{let D,S;const{type:W,props:F,shapeFlag:K,transition:ee,patchFlag:de,dirs:Ie}=m;if(m.el&&d!==void 0&&de===-1)D=m.el=d(m.el);else{if(D=m.el=o(m.type,k,F&&F.is,F),K&8?l(D,m.children):K&16&&Y(m.children,D,null,I,T,k&&W!=="foreignObject",P,R),Ie&&Yn(m,null,I,"created"),F){for(const De in F)De!=="value"&&!fo(De)&&i(D,De,null,F[De],k,m.children,I,T,N);"value"in F&&i(D,"value",null,F.value),(S=F.onVnodeBeforeMount)&&Kt(S,I,m)}x(D,m,m.scopeId,P,I)}Ie&&Yn(m,null,I,"beforeMount");const Se=(!T||T&&!T.pendingBranch)&&ee&&!ee.persisted;Se&&ee.beforeEnter(D),r(D,g,w),((S=F&&F.onVnodeMounted)||Se||Ie)&&wt(()=>{S&&Kt(S,I,m),Se&&ee.enter(D),Ie&&Yn(m,null,I,"mounted")},T)},x=(m,g,w,I,T)=>{if(w&&p(m,w),I)for(let k=0;k<I.length;k++)p(m,I[k]);if(T){let k=T.subTree;if(g===k){const P=T.vnode;x(m,P,P.scopeId,P.slotScopeIds,T.parent)}}},Y=(m,g,w,I,T,k,P,R,D=0)=>{for(let S=D;S<m.length;S++){const W=m[S]=R?Rn(m[S]):Xt(m[S]);y(null,W,g,w,I,T,k,P,R)}},ue=(m,g,w,I,T,k,P)=>{const R=g.el=m.el;let{patchFlag:D,dynamicChildren:S,dirs:W}=g;D|=m.patchFlag&16;const F=m.props||Ce,K=g.props||Ce;let ee;w&&Jn(w,!1),(ee=K.onVnodeBeforeUpdate)&&Kt(ee,w,g,m),W&&Yn(g,m,w,"beforeUpdate"),w&&Jn(w,!0);const de=T&&g.type!=="foreignObject";if(S?Ee(m.dynamicChildren,S,R,w,I,de,k):P||ht(m,g,R,null,w,I,de,k,!1),D>0){if(D&16)L(R,g,F,K,w,I,T);else if(D&2&&F.class!==K.class&&i(R,"class",null,K.class,T),D&4&&i(R,"style",F.style,K.style,T),D&8){const Ie=g.dynamicProps;for(let Se=0;Se<Ie.length;Se++){const De=Ie[Se],Lt=F[De],Rr=K[De];(Rr!==Lt||De==="value")&&i(R,De,Lt,Rr,T,m.children,w,I,N)}}D&1&&m.children!==g.children&&l(R,g.children)}else!P&&S==null&&L(R,g,F,K,w,I,T);((ee=K.onVnodeUpdated)||W)&&wt(()=>{ee&&Kt(ee,w,g,m),W&&Yn(g,m,w,"updated")},I)},Ee=(m,g,w,I,T,k,P)=>{for(let R=0;R<g.length;R++){const D=m[R],S=g[R],W=D.el&&(D.type===Nt||!rr(D,S)||D.shapeFlag&70)?h(D.el):w;y(D,S,W,null,I,T,k,P,!0)}},L=(m,g,w,I,T,k,P)=>{if(w!==I){for(const R in I){if(fo(R))continue;const D=I[R],S=w[R];D!==S&&R!=="value"&&i(m,R,S,D,P,g.children,T,k,N)}if(w!==Ce)for(const R in w)!fo(R)&&!(R in I)&&i(m,R,w[R],null,P,g.children,T,k,N);"value"in I&&i(m,"value",w.value,I.value)}},me=(m,g,w,I,T,k,P,R,D)=>{const S=g.el=m?m.el:a(""),W=g.anchor=m?m.anchor:a("");let{patchFlag:F,dynamicChildren:K,slotScopeIds:ee}=g;ee&&(R=R?R.concat(ee):ee),m==null?(r(S,w,I),r(W,w,I),Y(g.children,w,W,T,k,P,R,D)):F>0&&F&64&&K&&m.dynamicChildren?(Ee(m.dynamicChildren,K,w,T,k,P,R),(g.key!=null||T&&g===T.subTree)&&dm(m,g,!0)):ht(m,g,w,W,T,k,P,R,D)},Pe=(m,g,w,I,T,k,P,R,D)=>{g.slotScopeIds=R,m==null?g.shapeFlag&512?T.ctx.activate(g,w,I,P,D):xe(g,w,I,T,k,P,D):ke(m,g,D)},xe=(m,g,w,I,T,k,P)=>{const R=m.component=sE(m,I,T);if(ma(m)&&(R.ctx.renderer=Ae),iE(R),R.asyncDep){if(T&&T.registerDep(R,be),!m.el){const D=R.subTree=Ye(Bt);A(null,D,g,w)}return}be(R,m,g,w,T,k,P)},ke=(m,g,w)=>{const I=g.component=m.component;if(v_(m,g,w))if(I.asyncDep&&!I.asyncResolved){ve(I,g,w);return}else I.next=g,f_(I.update),I.update();else g.el=m.el,I.vnode=g},be=(m,g,w,I,T,k,P)=>{const R=()=>{if(m.isMounted){let{next:W,bu:F,u:K,parent:ee,vnode:de}=m,Ie=W,Se;Jn(m,!1),W?(W.el=de.el,ve(m,W,P)):W=de,F&&po(F),(Se=W.props&&W.props.onVnodeBeforeUpdate)&&Kt(Se,ee,W,de),Jn(m,!0);const De=lc(m),Lt=m.subTree;m.subTree=De,y(Lt,De,h(Lt.el),q(Lt),m,T,k),W.el=De.el,Ie===null&&w_(m,De.el),K&&wt(K,T),(Se=W.props&&W.props.onVnodeUpdated)&&wt(()=>Kt(Se,ee,W,de),T)}else{let W;const{el:F,props:K}=g,{bm:ee,m:de,parent:Ie}=m,Se=mo(g);if(Jn(m,!1),ee&&po(ee),!Se&&(W=K&&K.onVnodeBeforeMount)&&Kt(W,Ie,g),Jn(m,!0),F&&re){const De=()=>{m.subTree=lc(m),re(F,m.subTree,m,T,null)};Se?g.type.__asyncLoader().then(()=>!m.isUnmounted&&De()):De()}else{const De=m.subTree=lc(m);y(null,De,w,I,m,T,k),g.el=De.el}if(de&&wt(de,T),!Se&&(W=K&&K.onVnodeMounted)){const De=g;wt(()=>Kt(W,Ie,De),T)}(g.shapeFlag&256||Ie&&mo(Ie.vnode)&&Ie.vnode.shapeFlag&256)&&m.a&&wt(m.a,T),m.isMounted=!0,g=w=I=null}},D=m.effect=new Zu(R,()=>zp(S),m.scope),S=m.update=()=>D.run();S.id=m.uid,Jn(m,!0),S()},ve=(m,g,w)=>{g.component=m;const I=m.vnode.props;m.vnode=g,m.next=null,j_(m,g.props,I,w),z_(m,g.children,w),ls(),fa(void 0,m.update),hs()},ht=(m,g,w,I,T,k,P,R,D=!1)=>{const S=m&&m.children,W=m?m.shapeFlag:0,F=g.children,{patchFlag:K,shapeFlag:ee}=g;if(K>0){if(K&128){et(S,F,w,I,T,k,P,R,D);return}else if(K&256){Te(S,F,w,I,T,k,P,R,D);return}}ee&8?(W&16&&N(S,T,k),F!==S&&l(w,F)):W&16?ee&16?et(S,F,w,I,T,k,P,R,D):N(S,T,k,!0):(W&8&&l(w,""),ee&16&&Y(F,w,I,T,k,P,R,D))},Te=(m,g,w,I,T,k,P,R,D)=>{m=m||jr,g=g||jr;const S=m.length,W=g.length,F=Math.min(S,W);let K;for(K=0;K<F;K++){const ee=g[K]=D?Rn(g[K]):Xt(g[K]);y(m[K],ee,w,null,T,k,P,R,D)}S>W?N(m,T,k,!0,!1,F):Y(g,w,I,T,k,P,R,D,F)},et=(m,g,w,I,T,k,P,R,D)=>{let S=0;const W=g.length;let F=m.length-1,K=W-1;for(;S<=F&&S<=K;){const ee=m[S],de=g[S]=D?Rn(g[S]):Xt(g[S]);if(rr(ee,de))y(ee,de,w,null,T,k,P,R,D);else break;S++}for(;S<=F&&S<=K;){const ee=m[F],de=g[K]=D?Rn(g[K]):Xt(g[K]);if(rr(ee,de))y(ee,de,w,null,T,k,P,R,D);else break;F--,K--}if(S>F){if(S<=K){const ee=K+1,de=ee<W?g[ee].el:I;for(;S<=K;)y(null,g[S]=D?Rn(g[S]):Xt(g[S]),w,de,T,k,P,R,D),S++}}else if(S>K)for(;S<=F;)kt(m[S],T,k,!0),S++;else{const ee=S,de=S,Ie=new Map;for(S=de;S<=K;S++){const Tt=g[S]=D?Rn(g[S]):Xt(g[S]);Tt.key!=null&&Ie.set(Tt.key,S)}let Se,De=0;const Lt=K-de+1;let Rr=!1,Mh=0;const Is=new Array(Lt);for(S=0;S<Lt;S++)Is[S]=0;for(S=ee;S<=F;S++){const Tt=m[S];if(De>=Lt){kt(Tt,T,k,!0);continue}let Wt;if(Tt.key!=null)Wt=Ie.get(Tt.key);else for(Se=de;Se<=K;Se++)if(Is[Se-de]===0&&rr(Tt,g[Se])){Wt=Se;break}Wt===void 0?kt(Tt,T,k,!0):(Is[Wt-de]=S+1,Wt>=Mh?Mh=Wt:Rr=!0,y(Tt,g[Wt],w,null,T,k,P,R,D),De++)}const Lh=Rr?Q_(Is):jr;for(Se=Lh.length-1,S=Lt-1;S>=0;S--){const Tt=de+S,Wt=g[Tt],$h=Tt+1<W?g[Tt+1].el:I;Is[S]===0?y(null,Wt,w,$h,T,k,P,R,D):Rr&&(Se<0||S!==Lh[Se]?ze(Wt,w,$h,2):Se--)}}},ze=(m,g,w,I,T=null)=>{const{el:k,type:P,transition:R,children:D,shapeFlag:S}=m;if(S&6){ze(m.component.subTree,g,w,I);return}if(S&128){m.suspense.move(g,w,I);return}if(S&64){P.move(m,g,w,Ae);return}if(P===Nt){r(k,g,w);for(let F=0;F<D.length;F++)ze(D[F],g,w,I);r(m.anchor,g,w);return}if(P===fc){O(m,g,w);return}if(I!==2&&S&1&&R)if(I===0)R.beforeEnter(k),r(k,g,w),wt(()=>R.enter(k),T);else{const{leave:F,delayLeave:K,afterLeave:ee}=R,de=()=>r(k,g,w),Ie=()=>{F(k,()=>{de(),ee&&ee()})};K?K(k,de,Ie):Ie()}else r(k,g,w)},kt=(m,g,w,I=!1,T=!1)=>{const{type:k,props:P,ref:R,children:D,dynamicChildren:S,shapeFlag:W,patchFlag:F,dirs:K}=m;if(R!=null&&nu(R,null,w,m,!0),W&256){g.ctx.deactivate(m);return}const ee=W&1&&K,de=!mo(m);let Ie;if(de&&(Ie=P&&P.onVnodeBeforeUnmount)&&Kt(Ie,g,m),W&6)B(m.component,w,I);else{if(W&128){m.suspense.unmount(w,I);return}ee&&Yn(m,null,g,"beforeUnmount"),W&64?m.type.remove(m,g,w,T,Ae,I):S&&(k!==Nt||F>0&&F&64)?N(S,g,w,!1,!0):(k===Nt&&F&384||!T&&W&16)&&N(D,g,w),I&&Ts(m)}(de&&(Ie=P&&P.onVnodeUnmounted)||ee)&&wt(()=>{Ie&&Kt(Ie,g,m),ee&&Yn(m,null,g,"unmounted")},w)},Ts=m=>{const{type:g,el:w,anchor:I,transition:T}=m;if(g===Nt){E(w,I);return}if(g===fc){V(m);return}const k=()=>{s(w),T&&!T.persisted&&T.afterLeave&&T.afterLeave()};if(m.shapeFlag&1&&T&&!T.persisted){const{leave:P,delayLeave:R}=T,D=()=>P(w,k);R?R(m.el,k,D):D()}else k()},E=(m,g)=>{let w;for(;m!==g;)w=f(m),s(m),m=w;s(g)},B=(m,g,w)=>{const{bum:I,scope:T,update:k,subTree:P,um:R}=m;I&&po(I),T.stop(),k&&(k.active=!1,kt(P,m,g,w)),R&&wt(R,g),wt(()=>{m.isUnmounted=!0},g),g&&g.pendingBranch&&!g.isUnmounted&&m.asyncDep&&!m.asyncResolved&&m.suspenseId===g.pendingId&&(g.deps--,g.deps===0&&g.resolve())},N=(m,g,w,I=!1,T=!1,k=0)=>{for(let P=k;P<m.length;P++)kt(m[P],g,w,I,T)},q=m=>m.shapeFlag&6?q(m.component.subTree):m.shapeFlag&128?m.suspense.next():f(m.anchor||m.el),we=(m,g,w)=>{m==null?g._vnode&&kt(g._vnode,null,null,!0):y(g._vnode||null,m,g,null,null,null,w),Gp(),g._vnode=m},Ae={p:y,um:kt,m:ze,r:Ts,mt:xe,mc:Y,pc:ht,pbc:Ee,n:q,o:t};let ae,re;return e&&([ae,re]=e(Ae)),{render:we,hydrate:ae,createApp:K_(we,ae)}}function Jn({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function dm(t,e,n=!1){const r=t.children,s=e.children;if(Q(r)&&Q(s))for(let i=0;i<r.length;i++){const o=r[i];let a=s[i];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=s[i]=Rn(s[i]),a.el=o.el),n||dm(o,a))}}function Q_(t){const e=t.slice(),n=[0];let r,s,i,o,a;const c=t.length;for(r=0;r<c;r++){const u=t[r];if(u!==0){if(s=n[n.length-1],t[s]<u){e[r]=s,n.push(r);continue}for(i=0,o=n.length-1;i<o;)a=i+o>>1,t[n[a]]<u?i=a+1:o=a;u<t[n[i]]&&(i>0&&(e[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}const Y_=t=>t.__isTeleport,Nt=Symbol(void 0),dl=Symbol(void 0),Bt=Symbol(void 0),fc=Symbol(void 0),qs=[];let Ft=null;function pt(t=!1){qs.push(Ft=t?null:[])}function J_(){qs.pop(),Ft=qs[qs.length-1]||null}let ai=1;function nf(t){ai+=t}function pm(t){return t.dynamicChildren=ai>0?Ft||jr:null,J_(),ai>0&&Ft&&Ft.push(t),t}function Ut(t,e,n,r,s,i){return pm(X(t,e,n,r,s,i,!0))}function va(t,e,n,r,s){return pm(Ye(t,e,n,r,s,!0))}function ru(t){return t?t.__v_isVNode===!0:!1}function rr(t,e){return t.type===e.type&&t.key===e.key}const wa="__vInternal",mm=({key:t})=>t!=null?t:null,go=({ref:t,ref_key:e,ref_for:n})=>t!=null?Ke(t)||Le(t)||ie(t)?{i:Ot,r:t,k:e,f:!!n}:t:null;function X(t,e=null,n=null,r=0,s=null,i=t===Nt?0:1,o=!1,a=!1){const c={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&mm(e),ref:e&&go(e),scopeId:Yp,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null};return a?(pl(c,n),i&128&&t.normalize(c)):n&&(c.shapeFlag|=Ke(n)?8:16),ai>0&&!o&&Ft&&(c.patchFlag>0||i&6)&&c.patchFlag!==32&&Ft.push(c),c}const Ye=Z_;function Z_(t,e=null,n=null,r=0,s=null,i=!1){if((!t||t===rm)&&(t=Bt),ru(t)){const a=jn(t,e,!0);return n&&pl(a,n),ai>0&&!i&&Ft&&(a.shapeFlag&6?Ft[Ft.indexOf(t)]=a:Ft.push(a)),a.patchFlag|=-2,a}if(lE(t)&&(t=t.__vccOpts),e){e=eE(e);let{class:a,style:c}=e;a&&!Ke(a)&&(e.class=Ku(a)),qe(c)&&(Fp(c)&&!Q(c)&&(c=it({},c)),e.style=Wu(c))}const o=Ke(t)?1:__(t)?128:Y_(t)?64:qe(t)?4:ie(t)?2:0;return X(t,e,n,r,s,o,i,!0)}function eE(t){return t?Fp(t)||wa in t?it({},t):t:null}function jn(t,e,n=!1){const{props:r,ref:s,patchFlag:i,children:o}=t,a=e?tE(r||{},e):r;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:a,key:a&&mm(a),ref:e&&e.ref?n&&s?Q(s)?s.concat(go(e)):[s,go(e)]:go(e):s,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:o,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==Nt?i===-1?16:i|16:i,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&jn(t.ssContent),ssFallback:t.ssFallback&&jn(t.ssFallback),el:t.el,anchor:t.anchor}}function fs(t=" ",e=0){return Ye(dl,null,t,e)}function un(t="",e=!1){return e?(pt(),va(Bt,null,t)):Ye(Bt,null,t)}function Xt(t){return t==null||typeof t=="boolean"?Ye(Bt):Q(t)?Ye(Nt,null,t.slice()):typeof t=="object"?Rn(t):Ye(dl,null,String(t))}function Rn(t){return t.el===null||t.memo?t:jn(t)}function pl(t,e){let n=0;const{shapeFlag:r}=t;if(e==null)e=null;else if(Q(e))n=16;else if(typeof e=="object")if(r&65){const s=e.default;s&&(s._c&&(s._d=!1),pl(t,s()),s._c&&(s._d=!0));return}else{n=32;const s=e._;!s&&!(wa in e)?e._ctx=Ot:s===3&&Ot&&(Ot.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else ie(e)?(e={default:e,_ctx:Ot},n=32):(e=String(e),r&64?(n=16,e=[fs(e)]):n=8);t.children=e,t.shapeFlag|=n}function tE(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const s in r)if(s==="class")e.class!==r.class&&(e.class=Ku([e.class,r.class]));else if(s==="style")e.style=Wu([e.style,r.style]);else if(oa(s)){const i=e[s],o=r[s];o&&i!==o&&!(Q(i)&&i.includes(o))&&(e[s]=i?[].concat(i,o):o)}else s!==""&&(e[s]=r[s])}return e}function Kt(t,e,n,r=null){Pt(t,e,7,[n,r])}const nE=fm();let rE=0;function sE(t,e,n){const r=t.type,s=(e?e.appContext:t.appContext)||nE,i={uid:rE++,vnode:t,type:r,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,scope:new Cp(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:cm(r,s),emitsOptions:Qp(r,s),emit:null,emitted:null,propsDefaults:Ce,inheritAttrs:r.inheritAttrs,ctx:Ce,data:Ce,props:Ce,attrs:Ce,slots:Ce,refs:Ce,setupState:Ce,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=m_.bind(null,i),t.ce&&t.ce(i),i}let Qe=null;const _a=()=>Qe||Ot,Jr=t=>{Qe=t,t.scope.on()},lr=()=>{Qe&&Qe.scope.off(),Qe=null};function gm(t){return t.vnode.shapeFlag&4}let ci=!1;function iE(t,e=!1){ci=e;const{props:n,children:r}=t.vnode,s=gm(t);B_(t,n,s,e),H_(t,r);const i=s?oE(t,e):void 0;return ci=!1,i}function oE(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=Yr(new Proxy(t.ctx,M_));const{setup:r}=n;if(r){const s=t.setupContext=r.length>1?cE(t):null;Jr(t),ls();const i=$n(r,t,0,[t.props,s]);if(hs(),lr(),Tp(i)){if(i.then(lr,lr),e)return i.then(o=>{rf(t,o,e)}).catch(o=>{ha(o,t,0)});t.asyncDep=i}else rf(t,i,e)}else ym(t,e)}function rf(t,e,n){ie(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:qe(e)&&(t.setupState=qp(e)),ym(t,n)}let sf;function ym(t,e,n){const r=t.type;if(!t.render){if(!e&&sf&&!r.render){const s=r.template;if(s){const{isCustomElement:i,compilerOptions:o}=t.appContext.config,{delimiters:a,compilerOptions:c}=r,u=it(it({isCustomElement:i,delimiters:a},o),c);r.render=sf(s,u)}}t.render=r.render||Vt}Jr(t),ls(),L_(t),hs(),lr()}function aE(t){return new Proxy(t.attrs,{get(e,n){return At(t,"get","$attrs"),e[n]}})}function cE(t){const e=r=>{t.exposed=r||{}};let n;return{get attrs(){return n||(n=aE(t))},slots:t.slots,emit:t.emit,expose:e}}function Ea(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(qp(Yr(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in No)return No[n](t)}}))}function uE(t,e=!0){return ie(t)?t.displayName||t.name:t.name||e&&t.__name}function lE(t){return ie(t)&&"__vccOpts"in t}const oe=(t,e)=>u_(t,e,ci);function ba(t,e,n){const r=arguments.length;return r===2?qe(e)&&!Q(e)?ru(e)?Ye(t,null,[e]):Ye(t,e):Ye(t,null,e):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&ru(n)&&(n=[n]),Ye(t,e,n))}const hE="3.2.37",fE="http://www.w3.org/2000/svg",sr=typeof document<"u"?document:null,of=sr&&sr.createElement("template"),dE={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const s=e?sr.createElementNS(fE,t):sr.createElement(t,n?{is:n}:void 0);return t==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:t=>sr.createTextNode(t),createComment:t=>sr.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>sr.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},cloneNode(t){const e=t.cloneNode(!0);return"_value"in t&&(e._value=t._value),e},insertStaticContent(t,e,n,r,s,i){const o=n?n.previousSibling:e.lastChild;if(s&&(s===i||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),n),!(s===i||!(s=s.nextSibling)););else{of.innerHTML=r?`<svg>${t}</svg>`:t;const a=of.content;if(r){const c=a.firstChild;for(;c.firstChild;)a.appendChild(c.firstChild);a.removeChild(c)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}};function pE(t,e,n){const r=t._vtc;r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}function mE(t,e,n){const r=t.style,s=Ke(n);if(n&&!s){for(const i in n)su(r,i,n[i]);if(e&&!Ke(e))for(const i in e)n[i]==null&&su(r,i,"")}else{const i=r.display;s?e!==n&&(r.cssText=n):e&&t.removeAttribute("style"),"_vod"in t&&(r.display=i)}}const af=/\s*!important$/;function su(t,e,n){if(Q(n))n.forEach(r=>su(t,e,r));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const r=gE(t,e);af.test(n)?t.setProperty(us(r),n.replace(af,""),"important"):t[r]=n}}const cf=["Webkit","Moz","ms"],dc={};function gE(t,e){const n=dc[e];if(n)return n;let r=tn(e);if(r!=="filter"&&r in t)return dc[e]=r;r=ua(r);for(let s=0;s<cf.length;s++){const i=cf[s]+r;if(i in t)return dc[e]=i}return e}const uf="http://www.w3.org/1999/xlink";function yE(t,e,n,r,s){if(r&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(uf,e.slice(6,e.length)):t.setAttributeNS(uf,e,n);else{const i=vw(e);n==null||i&&!_p(n)?t.removeAttribute(e):t.setAttribute(e,i?"":n)}}function vE(t,e,n,r,s,i,o){if(e==="innerHTML"||e==="textContent"){r&&o(r,s,i),t[e]=n==null?"":n;return}if(e==="value"&&t.tagName!=="PROGRESS"&&!t.tagName.includes("-")){t._value=n;const c=n==null?"":n;(t.value!==c||t.tagName==="OPTION")&&(t.value=c),n==null&&t.removeAttribute(e);return}let a=!1;if(n===""||n==null){const c=typeof t[e];c==="boolean"?n=_p(n):n==null&&c==="string"?(n="",a=!0):c==="number"&&(n=0,a=!0)}try{t[e]=n}catch{}a&&t.removeAttribute(e)}const[vm,wE]=(()=>{let t=Date.now,e=!1;if(typeof window<"u"){Date.now()>document.createEvent("Event").timeStamp&&(t=performance.now.bind(performance));const n=navigator.userAgent.match(/firefox\/(\d+)/i);e=!!(n&&Number(n[1])<=53)}return[t,e]})();let iu=0;const _E=Promise.resolve(),EE=()=>{iu=0},bE=()=>iu||(_E.then(EE),iu=vm());function xr(t,e,n,r){t.addEventListener(e,n,r)}function TE(t,e,n,r){t.removeEventListener(e,n,r)}function IE(t,e,n,r,s=null){const i=t._vei||(t._vei={}),o=i[e];if(r&&o)o.value=r;else{const[a,c]=SE(e);if(r){const u=i[e]=CE(r,s);xr(t,a,u,c)}else o&&(TE(t,a,o,c),i[e]=void 0)}}const lf=/(?:Once|Passive|Capture)$/;function SE(t){let e;if(lf.test(t)){e={};let n;for(;n=t.match(lf);)t=t.slice(0,t.length-n[0].length),e[n[0].toLowerCase()]=!0}return[us(t.slice(2)),e]}function CE(t,e){const n=r=>{const s=r.timeStamp||vm();(wE||s>=n.attached-1)&&Pt(AE(r,n.value),e,5,[r])};return n.value=t,n.attached=bE(),n}function AE(t,e){if(Q(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(r=>s=>!s._stopped&&r&&r(s))}else return e}const hf=/^on[a-z]/,RE=(t,e,n,r,s=!1,i,o,a,c)=>{e==="class"?pE(t,r,s):e==="style"?mE(t,n,r):oa(e)?Gu(e)||IE(t,e,n,r,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):kE(t,e,r,s))?vE(t,e,r,i,o,a,c):(e==="true-value"?t._trueValue=r:e==="false-value"&&(t._falseValue=r),yE(t,e,r,s))};function kE(t,e,n,r){return r?!!(e==="innerHTML"||e==="textContent"||e in t&&hf.test(e)&&ie(n)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA"||hf.test(e)&&Ke(n)?!1:e in t}const Tn="transition",Ss="animation",ml=(t,{slots:e})=>ba(Zp,DE(t),e);ml.displayName="Transition";const wm={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String};ml.props=it({},Zp.props,wm);const Zn=(t,e=[])=>{Q(t)?t.forEach(n=>n(...e)):t&&t(...e)},ff=t=>t?Q(t)?t.some(e=>e.length>1):t.length>1:!1;function DE(t){const e={};for(const L in t)L in wm||(e[L]=t[L]);if(t.css===!1)return e;const{name:n="v",type:r,duration:s,enterFromClass:i=`${n}-enter-from`,enterActiveClass:o=`${n}-enter-active`,enterToClass:a=`${n}-enter-to`,appearFromClass:c=i,appearActiveClass:u=o,appearToClass:l=a,leaveFromClass:h=`${n}-leave-from`,leaveActiveClass:f=`${n}-leave-active`,leaveToClass:p=`${n}-leave-to`}=t,d=NE(s),v=d&&d[0],y=d&&d[1],{onBeforeEnter:_,onEnter:A,onEnterCancelled:M,onLeave:O,onLeaveCancelled:V,onBeforeAppear:ne=_,onAppear:G=A,onAppearCancelled:x=M}=e,Y=(L,me,Pe)=>{er(L,me?l:a),er(L,me?u:o),Pe&&Pe()},ue=(L,me)=>{L._isLeaving=!1,er(L,h),er(L,p),er(L,f),me&&me()},Ee=L=>(me,Pe)=>{const xe=L?G:A,ke=()=>Y(me,L,Pe);Zn(xe,[me,ke]),df(()=>{er(me,L?c:i),In(me,L?l:a),ff(xe)||pf(me,r,v,ke)})};return it(e,{onBeforeEnter(L){Zn(_,[L]),In(L,i),In(L,o)},onBeforeAppear(L){Zn(ne,[L]),In(L,c),In(L,u)},onEnter:Ee(!1),onAppear:Ee(!0),onLeave(L,me){L._isLeaving=!0;const Pe=()=>ue(L,me);In(L,h),xE(),In(L,f),df(()=>{!L._isLeaving||(er(L,h),In(L,p),ff(O)||pf(L,r,y,Pe))}),Zn(O,[L,Pe])},onEnterCancelled(L){Y(L,!1),Zn(M,[L])},onAppearCancelled(L){Y(L,!0),Zn(x,[L])},onLeaveCancelled(L){ue(L),Zn(V,[L])}})}function NE(t){if(t==null)return null;if(qe(t))return[pc(t.enter),pc(t.leave)];{const e=pc(t);return[e,e]}}function pc(t){return Ao(t)}function In(t,e){e.split(/\s+/).forEach(n=>n&&t.classList.add(n)),(t._vtc||(t._vtc=new Set)).add(e)}function er(t,e){e.split(/\s+/).forEach(r=>r&&t.classList.remove(r));const{_vtc:n}=t;n&&(n.delete(e),n.size||(t._vtc=void 0))}function df(t){requestAnimationFrame(()=>{requestAnimationFrame(t)})}let OE=0;function pf(t,e,n,r){const s=t._endId=++OE,i=()=>{s===t._endId&&r()};if(n)return setTimeout(i,n);const{type:o,timeout:a,propCount:c}=PE(t,e);if(!o)return r();const u=o+"end";let l=0;const h=()=>{t.removeEventListener(u,f),i()},f=p=>{p.target===t&&++l>=c&&h()};setTimeout(()=>{l<c&&h()},a+1),t.addEventListener(u,f)}function PE(t,e){const n=window.getComputedStyle(t),r=d=>(n[d]||"").split(", "),s=r(Tn+"Delay"),i=r(Tn+"Duration"),o=mf(s,i),a=r(Ss+"Delay"),c=r(Ss+"Duration"),u=mf(a,c);let l=null,h=0,f=0;e===Tn?o>0&&(l=Tn,h=o,f=i.length):e===Ss?u>0&&(l=Ss,h=u,f=c.length):(h=Math.max(o,u),l=h>0?o>u?Tn:Ss:null,f=l?l===Tn?i.length:c.length:0);const p=l===Tn&&/\b(transform|all)(,|$)/.test(n[Tn+"Property"]);return{type:l,timeout:h,propCount:f,hasTransform:p}}function mf(t,e){for(;t.length<e.length;)t=t.concat(t);return Math.max(...e.map((n,r)=>gf(n)+gf(t[r])))}function gf(t){return Number(t.slice(0,-1).replace(",","."))*1e3}function xE(){return document.body.offsetHeight}const yf=t=>{const e=t.props["onUpdate:modelValue"]||!1;return Q(e)?n=>po(e,n):e};function ME(t){t.target.composing=!0}function vf(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const $r={created(t,{modifiers:{lazy:e,trim:n,number:r}},s){t._assign=yf(s);const i=r||s.props&&s.props.type==="number";xr(t,e?"change":"input",o=>{if(o.target.composing)return;let a=t.value;n&&(a=a.trim()),i&&(a=Ao(a)),t._assign(a)}),n&&xr(t,"change",()=>{t.value=t.value.trim()}),e||(xr(t,"compositionstart",ME),xr(t,"compositionend",vf),xr(t,"change",vf))},mounted(t,{value:e}){t.value=e==null?"":e},beforeUpdate(t,{value:e,modifiers:{lazy:n,trim:r,number:s}},i){if(t._assign=yf(i),t.composing||document.activeElement===t&&t.type!=="range"&&(n||r&&t.value.trim()===e||(s||t.type==="number")&&Ao(t.value)===e))return;const o=e==null?"":e;t.value!==o&&(t.value=o)}},LE=["ctrl","shift","alt","meta"],$E={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>LE.some(n=>t[`${n}Key`]&&!e.includes(n))},_m=(t,e)=>(n,...r)=>{for(let s=0;s<e.length;s++){const i=$E[e[s]];if(i&&i(n,e))return}return t(n,...r)},UE=it({patchProp:RE},dE);let wf;function FE(){return wf||(wf=G_(UE))}const VE=(...t)=>{const e=FE().createApp(...t),{mount:n}=e;return e.mount=r=>{const s=BE(r);if(!s)return;const i=e._component;!ie(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.innerHTML="";const o=n(s,!1,s instanceof SVGElement);return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e};function BE(t){return Ke(t)?document.querySelector(t):t}var jE=!1;/*!
  * pinia v2.0.21
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */let Em;const Ta=t=>Em=t,bm=Symbol();function ou(t){return t&&typeof t=="object"&&Object.prototype.toString.call(t)==="[object Object]"&&typeof t.toJSON!="function"}var Hs;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(Hs||(Hs={}));function qE(){const t=Ap(!0),e=t.run(()=>Oe({}));let n=[],r=[];const s=Yr({install(i){Ta(s),s._a=i,i.provide(bm,s),i.config.globalProperties.$pinia=s,r.forEach(o=>n.push(o)),r=[]},use(i){return!this._a&&!jE?r.push(i):n.push(i),this},_p:n,_a:null,_e:t,_s:new Map,state:e});return s}const Tm=()=>{};function _f(t,e,n,r=Tm){t.push(e);const s=()=>{const i=t.indexOf(e);i>-1&&(t.splice(i,1),r())};return!n&&_a()&&ll(s),s}function kr(t,...e){t.slice().forEach(n=>{n(...e)})}function au(t,e){for(const n in e){if(!e.hasOwnProperty(n))continue;const r=e[n],s=t[n];ou(s)&&ou(r)&&t.hasOwnProperty(n)&&!Le(r)&&!dn(r)?t[n]=au(s,r):t[n]=r}return t}const HE=Symbol();function zE(t){return!ou(t)||!t.hasOwnProperty(HE)}const{assign:on}=Object;function WE(t){return!!(Le(t)&&t.effect)}function KE(t,e,n,r){const{state:s,actions:i,getters:o}=e,a=n.state.value[t];let c;function u(){a||(n.state.value[t]=s?s():{});const l=i_(n.state.value[t]);return on(l,i,Object.keys(o||{}).reduce((h,f)=>(h[f]=Yr(oe(()=>{Ta(n);const p=n._s.get(t);return o[f].call(p,p)})),h),{}))}return c=Im(t,u,e,n,r,!0),c.$reset=function(){const h=s?s():{};this.$patch(f=>{on(f,h)})},c}function Im(t,e,n={},r,s,i){let o;const a=on({actions:{}},n),c={deep:!0};let u,l,h=Yr([]),f=Yr([]),p;const d=r.state.value[t];!i&&!d&&(r.state.value[t]={}),Oe({});let v;function y(G){let x;u=l=!1,typeof G=="function"?(G(r.state.value[t]),x={type:Hs.patchFunction,storeId:t,events:p}):(au(r.state.value[t],G),x={type:Hs.patchObject,payload:G,storeId:t,events:p});const Y=v=Symbol();si().then(()=>{v===Y&&(u=!0)}),l=!0,kr(h,x,r.state.value[t])}const _=Tm;function A(){o.stop(),h=[],f=[],r._s.delete(t)}function M(G,x){return function(){Ta(r);const Y=Array.from(arguments),ue=[],Ee=[];function L(xe){ue.push(xe)}function me(xe){Ee.push(xe)}kr(f,{args:Y,name:G,store:V,after:L,onError:me});let Pe;try{Pe=x.apply(this&&this.$id===t?this:V,Y)}catch(xe){throw kr(Ee,xe),xe}return Pe instanceof Promise?Pe.then(xe=>(kr(ue,xe),xe)).catch(xe=>(kr(Ee,xe),Promise.reject(xe))):(kr(ue,Pe),Pe)}}const O={_p:r,$id:t,$onAction:_f.bind(null,f),$patch:y,$reset:_,$subscribe(G,x={}){const Y=_f(h,G,x.detached,()=>ue()),ue=o.run(()=>Ct(()=>r.state.value[t],Ee=>{(x.flush==="sync"?l:u)&&G({storeId:t,type:Hs.direct,events:p},Ee)},on({},c,x)));return Y},$dispose:A},V=zt(on({},O));r._s.set(t,V);const ne=r._e.run(()=>(o=Ap(),o.run(()=>e())));for(const G in ne){const x=ne[G];if(Le(x)&&!WE(x)||dn(x))i||(d&&zE(x)&&(Le(x)?x.value=d[G]:au(x,d[G])),r.state.value[t][G]=x);else if(typeof x=="function"){const Y=M(G,x);ne[G]=Y,a.actions[G]=x}}return on(V,ne),on(pe(V),ne),Object.defineProperty(V,"$state",{get:()=>r.state.value[t],set:G=>{y(x=>{on(x,G)})}}),r._p.forEach(G=>{on(V,o.run(()=>G({store:V,app:r._a,pinia:r,options:a})))}),d&&i&&n.hydrate&&n.hydrate(V.$state,d),u=!0,l=!0,V}function GE(t,e,n){let r,s;const i=typeof e=="function";typeof t=="string"?(r=t,s=i?n:e):(s=t,r=t.id);function o(a,c){const u=_a();return a=a||u&&xt(bm),a&&Ta(a),a=Em,a._s.has(r)||(i?Im(r,e,s,a):KE(r,s,a)),a._s.get(r)}return o.$id=r,o}const gl="/chat/assets/Logo.697df3b1.webp";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sm=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},XE=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],o=t[n++],a=t[n++],c=((s&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(c&1023))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},Cm={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],o=s+1<t.length,a=o?t[s+1]:0,c=s+2<t.length,u=c?t[s+2]:0,l=i>>2,h=(i&3)<<4|a>>4;let f=(a&15)<<2|u>>6,p=u&63;c||(p=64,o||(f=64)),r.push(n[l],n[h],n[f],n[p])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Sm(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):XE(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],a=s<t.length?n[t.charAt(s)]:0;++s;const u=s<t.length?n[t.charAt(s)]:64;++s;const h=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||a==null||u==null||h==null)throw Error();const f=i<<2|a>>4;if(r.push(f),u!==64){const p=a<<4&240|u>>2;if(r.push(p),h!==64){const d=u<<6&192|h;r.push(d)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}},QE=function(t){const e=Sm(t);return Cm.encodeByteArray(e,!0)},Am=function(t){return QE(t).replace(/\./g,"")},YE=function(t){try{return Cm.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JE{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Je(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Rm(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Je())}function km(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function Dm(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function ZE(){return Je().indexOf("Electron/")>=0}function Nm(){const t=Je();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function eb(){return Je().indexOf("MSAppHost/")>=0}function tb(){return typeof indexedDB=="object"}function nb(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rb="FirebaseError";class rn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=rb,Object.setPrototypeOf(this,rn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Ci.prototype.create)}}class Ci{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?sb(i,r):"Error",a=`${this.serviceName}: ${o} (${s}).`;return new rn(s,a,r)}}function sb(t,e){return t.replace(ib,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const ib=/\{\$([^}]+)}/g;function ob(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Po(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],o=e[s];if(Ef(i)&&Ef(o)){if(!Po(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function Ef(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ai(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function xs(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,i]=r.split("=");e[decodeURIComponent(s)]=decodeURIComponent(i)}}),e}function Ms(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function ab(t,e){const n=new cb(t,e);return n.subscribe.bind(n)}class cb{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");ub(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=mc),s.error===void 0&&(s.error=mc),s.complete===void 0&&(s.complete=mc);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function ub(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function mc(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $e(t){return t&&t._delegate?t._delegate:t}class qn{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nr="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lb{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new JE;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(fb(e))try{this.getOrInitializeService({instanceIdentifier:nr})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=nr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=nr){return this.instances.has(e)}getOptions(e=nr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);r===a&&o.resolve(s)}return s}onInit(e,n){var r;const s=this.normalizeInstanceIdentifier(n),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const o=this.instances.get(s);return o&&e(o,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(!!r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:hb(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=nr){return this.component?this.component.multipleInstances?e:nr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function hb(t){return t===nr?void 0:t}function fb(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class db{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new lb(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ge;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ge||(ge={}));const pb={debug:ge.DEBUG,verbose:ge.VERBOSE,info:ge.INFO,warn:ge.WARN,error:ge.ERROR,silent:ge.SILENT},mb=ge.INFO,gb={[ge.DEBUG]:"log",[ge.VERBOSE]:"log",[ge.INFO]:"info",[ge.WARN]:"warn",[ge.ERROR]:"error"},yb=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=gb[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class yl{constructor(e){this.name=e,this._logLevel=mb,this._logHandler=yb,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ge))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?pb[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ge.DEBUG,...e),this._logHandler(this,ge.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ge.VERBOSE,...e),this._logHandler(this,ge.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ge.INFO,...e),this._logHandler(this,ge.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ge.WARN,...e),this._logHandler(this,ge.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ge.ERROR,...e),this._logHandler(this,ge.ERROR,...e)}}const vb=(t,e)=>e.some(n=>t instanceof n);let bf,Tf;function wb(){return bf||(bf=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function _b(){return Tf||(Tf=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Om=new WeakMap,cu=new WeakMap,Pm=new WeakMap,gc=new WeakMap,vl=new WeakMap;function Eb(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(Un(t.result)),s()},o=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Om.set(n,t)}).catch(()=>{}),vl.set(e,t),e}function bb(t){if(cu.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});cu.set(t,e)}let uu={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return cu.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Pm.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Un(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function Tb(t){uu=t(uu)}function Ib(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(yc(this),e,...n);return Pm.set(r,e.sort?e.sort():[e]),Un(r)}:_b().includes(t)?function(...e){return t.apply(yc(this),e),Un(Om.get(this))}:function(...e){return Un(t.apply(yc(this),e))}}function Sb(t){return typeof t=="function"?Ib(t):(t instanceof IDBTransaction&&bb(t),vb(t,wb())?new Proxy(t,uu):t)}function Un(t){if(t instanceof IDBRequest)return Eb(t);if(gc.has(t))return gc.get(t);const e=Sb(t);return e!==t&&(gc.set(t,e),vl.set(e,t)),e}const yc=t=>vl.get(t);function Cb(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(t,e),a=Un(o);return r&&o.addEventListener("upgradeneeded",c=>{r(Un(o.result),c.oldVersion,c.newVersion,Un(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),a.then(c=>{i&&c.addEventListener("close",()=>i()),s&&c.addEventListener("versionchange",()=>s())}).catch(()=>{}),a}const Ab=["get","getKey","getAll","getAllKeys","count"],Rb=["put","add","delete","clear"],vc=new Map;function If(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(vc.get(e))return vc.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=Rb.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||Ab.includes(n)))return;const i=async function(o,...a){const c=this.transaction(o,s?"readwrite":"readonly");let u=c.store;return r&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),s&&c.done]))[0]};return vc.set(e,i),i}Tb(t=>({...t,get:(e,n,r)=>If(e,n)||t.get(e,n,r),has:(e,n)=>!!If(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kb{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Db(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function Db(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const lu="@firebase/app",Sf="0.7.31";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pr=new yl("@firebase/app"),Nb="@firebase/app-compat",Ob="@firebase/analytics-compat",Pb="@firebase/analytics",xb="@firebase/app-check-compat",Mb="@firebase/app-check",Lb="@firebase/auth",$b="@firebase/auth-compat",Ub="@firebase/database",Fb="@firebase/database-compat",Vb="@firebase/functions",Bb="@firebase/functions-compat",jb="@firebase/installations",qb="@firebase/installations-compat",Hb="@firebase/messaging",zb="@firebase/messaging-compat",Wb="@firebase/performance",Kb="@firebase/performance-compat",Gb="@firebase/remote-config",Xb="@firebase/remote-config-compat",Qb="@firebase/storage",Yb="@firebase/storage-compat",Jb="@firebase/firestore",Zb="@firebase/firestore-compat",e0="firebase",t0="9.9.3";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xm="[DEFAULT]",n0={[lu]:"fire-core",[Nb]:"fire-core-compat",[Pb]:"fire-analytics",[Ob]:"fire-analytics-compat",[Mb]:"fire-app-check",[xb]:"fire-app-check-compat",[Lb]:"fire-auth",[$b]:"fire-auth-compat",[Ub]:"fire-rtdb",[Fb]:"fire-rtdb-compat",[Vb]:"fire-fn",[Bb]:"fire-fn-compat",[jb]:"fire-iid",[qb]:"fire-iid-compat",[Hb]:"fire-fcm",[zb]:"fire-fcm-compat",[Wb]:"fire-perf",[Kb]:"fire-perf-compat",[Gb]:"fire-rc",[Xb]:"fire-rc-compat",[Qb]:"fire-gcs",[Yb]:"fire-gcs-compat",[Jb]:"fire-fst",[Zb]:"fire-fst-compat","fire-js":"fire-js",[e0]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xo=new Map,hu=new Map;function r0(t,e){try{t.container.addComponent(e)}catch(n){pr.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function mr(t){const e=t.name;if(hu.has(e))return pr.debug(`There were multiple attempts to register component ${e}.`),!1;hu.set(e,t);for(const n of xo.values())r0(n,t);return!0}function Ia(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const s0={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},gr=new Ci("app","Firebase",s0);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class i0{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new qn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw gr.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ds=t0;function o0(t,e={}){typeof e!="object"&&(e={name:e});const n=Object.assign({name:xm,automaticDataCollectionEnabled:!1},e),r=n.name;if(typeof r!="string"||!r)throw gr.create("bad-app-name",{appName:String(r)});const s=xo.get(r);if(s){if(Po(t,s.options)&&Po(n,s.config))return s;throw gr.create("duplicate-app",{appName:r})}const i=new db(r);for(const a of hu.values())i.addComponent(a);const o=new i0(t,n,i);return xo.set(r,o),o}function wl(t=xm){const e=xo.get(t);if(!e)throw gr.create("no-app",{appName:t});return e}function Yt(t,e,n){var r;let s=(r=n0[t])!==null&&r!==void 0?r:t;n&&(s+=`-${n}`);const i=s.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const a=[`Unable to register library "${s}" with version "${e}":`];i&&a.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),pr.warn(a.join(" "));return}mr(new qn(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const a0="firebase-heartbeat-database",c0=1,ui="firebase-heartbeat-store";let wc=null;function Mm(){return wc||(wc=Cb(a0,c0,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(ui)}}}).catch(t=>{throw gr.create("idb-open",{originalErrorMessage:t.message})})),wc}async function u0(t){var e;try{return(await Mm()).transaction(ui).objectStore(ui).get(Lm(t))}catch(n){if(n instanceof rn)pr.warn(n.message);else{const r=gr.create("idb-get",{originalErrorMessage:(e=n)===null||e===void 0?void 0:e.message});pr.warn(r.message)}}}async function Cf(t,e){var n;try{const s=(await Mm()).transaction(ui,"readwrite");return await s.objectStore(ui).put(e,Lm(t)),s.done}catch(r){if(r instanceof rn)pr.warn(r.message);else{const s=gr.create("idb-set",{originalErrorMessage:(n=r)===null||n===void 0?void 0:n.message});pr.warn(s.message)}}}function Lm(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const l0=1024,h0=30*24*60*60*1e3;class f0{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new p0(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=Af();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(s=>s.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(s=>{const i=new Date(s.date).valueOf();return Date.now()-i<=h0}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Af(),{heartbeatsToSend:n,unsentEntries:r}=d0(this._heartbeatsCache.heartbeats),s=Am(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}}function Af(){return new Date().toISOString().substring(0,10)}function d0(t,e=l0){const n=[];let r=t.slice();for(const s of t){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),Rf(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),Rf(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class p0{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return tb()?nb().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await u0(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Cf(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Cf(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function Rf(t){return Am(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function m0(t){mr(new qn("platform-logger",e=>new kb(e),"PRIVATE")),mr(new qn("heartbeat",e=>new f0(e),"PRIVATE")),Yt(lu,Sf,t),Yt(lu,Sf,"esm2017"),Yt("fire-js","")}m0("");function _l(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(t);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(t,r[s])&&(n[r[s]]=t[r[s]]);return n}function $m(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const g0=$m,Um=new Ci("auth","Firebase",$m());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kf=new yl("@firebase/auth");function yo(t,...e){kf.logLevel<=ge.ERROR&&kf.error(`Auth (${ds}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qt(t,...e){throw El(t,...e)}function Jt(t,...e){return El(t,...e)}function y0(t,e,n){const r=Object.assign(Object.assign({},g0()),{[e]:n});return new Ci("auth","Firebase",r).create(e,{appName:t.name})}function El(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return Um.create(t,...e)}function J(t,e,...n){if(!t)throw El(e,...n)}function ln(t){const e="INTERNAL ASSERTION FAILED: "+t;throw yo(e),new Error(e)}function gn(t,e){t||ln(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Df=new Map;function hn(t){gn(t instanceof Function,"Expected a class definition");let e=Df.get(t);return e?(gn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Df.set(t,e),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function v0(t,e){const n=Ia(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(Po(i,e!=null?e:{}))return s;qt(s,"already-initialized")}return n.initialize({options:e})}function w0(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(hn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fu(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function _0(){return Nf()==="http:"||Nf()==="https:"}function Nf(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function E0(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(_0()||km()||"connection"in navigator)?navigator.onLine:!0}function b0(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ri{constructor(e,n){this.shortDelay=e,this.longDelay=n,gn(n>e,"Short delay should be less than long delay!"),this.isMobile=Rm()||Dm()}get(){return E0()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bl(t,e){gn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fm{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;ln("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;ln("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;ln("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const T0={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const I0=new Ri(3e4,6e4);function ki(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Di(t,e,n,r,s={}){return Vm(t,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const a=Ai(Object.assign({key:t.config.apiKey},o)).slice(1),c=await t._getAdditionalHeaders();return c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode),Fm.fetch()(Bm(t,t.config.apiHost,n,a),Object.assign({method:e,headers:c,referrerPolicy:"no-referrer"},i))})}async function Vm(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},T0),e);try{const s=new S0(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw to(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const a=i.ok?o.errorMessage:o.error.message,[c,u]=a.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw to(t,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw to(t,"email-already-in-use",o);if(c==="USER_DISABLED")throw to(t,"user-disabled",o);const l=r[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw y0(t,l,u);qt(t,l)}}catch(s){if(s instanceof rn)throw s;qt(t,"network-request-failed")}}async function Ni(t,e,n,r,s={}){const i=await Di(t,e,n,r,s);return"mfaPendingCredential"in i&&qt(t,"multi-factor-auth-required",{_serverResponse:i}),i}function Bm(t,e,n,r){const s=`${e}${n}?${r}`;return t.config.emulator?bl(t.config,s):`${t.config.apiScheme}://${s}`}class S0{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Jt(this.auth,"network-request-failed")),I0.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function to(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=Jt(t,e,r);return s.customData._tokenResponse=n,s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function C0(t,e){return Di(t,"POST","/v1/accounts:delete",e)}async function A0(t,e){return Di(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zs(t){if(!!t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function R0(t,e=!1){const n=$e(t),r=await n.getIdToken(e),s=Tl(r);J(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:zs(_c(s.auth_time)),issuedAtTime:zs(_c(s.iat)),expirationTime:zs(_c(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function _c(t){return Number(t)*1e3}function Tl(t){var e;const[n,r,s]=t.split(".");if(n===void 0||r===void 0||s===void 0)return yo("JWT malformed, contained fewer than 3 sections"),null;try{const i=YE(r);return i?JSON.parse(i):(yo("Failed to decode base64 JWT payload"),null)}catch(i){return yo("Caught error parsing JWT payload as JSON",(e=i)===null||e===void 0?void 0:e.toString()),null}}function k0(t){const e=Tl(t);return J(e,"internal-error"),J(typeof e.exp<"u","internal-error"),J(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function li(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof rn&&D0(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function D0({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class N0{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){!this.isRunning||(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){var e;try{await this.user.getIdToken(!0)}catch(n){((e=n)===null||e===void 0?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jm{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=zs(this.lastLoginAt),this.creationTime=zs(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Mo(t){var e;const n=t.auth,r=await t.getIdToken(),s=await li(t,A0(n,{idToken:r}));J(s==null?void 0:s.users.length,n,"internal-error");const i=s.users[0];t._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?x0(i.providerUserInfo):[],a=P0(t.providerData,o),c=t.isAnonymous,u=!(t.email&&i.passwordHash)&&!(a!=null&&a.length),l=c?u:!1,h={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:a,metadata:new jm(i.createdAt,i.lastLoginAt),isAnonymous:l};Object.assign(t,h)}async function O0(t){const e=$e(t);await Mo(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function P0(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function x0(t){return t.map(e=>{var{providerId:n}=e,r=_l(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function M0(t,e){const n=await Vm(t,{},async()=>{const r=Ai({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,o=Bm(t,s,"/v1/token",`key=${i}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",Fm.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hi{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){J(e.idToken,"internal-error"),J(typeof e.idToken<"u","internal-error"),J(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):k0(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return J(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await M0(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new hi;return r&&(J(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(J(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(J(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new hi,this.toJSON())}_performRefresh(){return ln("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sn(t,e){J(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class hr{constructor(e){var{uid:n,auth:r,stsTokenManager:s}=e,i=_l(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new N0(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new jm(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await li(this,this.stsTokenManager.getToken(this.auth,e));return J(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return R0(this,e)}reload(){return O0(this)}_assign(e){this!==e&&(J(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new hr(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){J(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Mo(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await li(this,C0(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,s,i,o,a,c,u,l;const h=(r=n.displayName)!==null&&r!==void 0?r:void 0,f=(s=n.email)!==null&&s!==void 0?s:void 0,p=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,d=(o=n.photoURL)!==null&&o!==void 0?o:void 0,v=(a=n.tenantId)!==null&&a!==void 0?a:void 0,y=(c=n._redirectEventId)!==null&&c!==void 0?c:void 0,_=(u=n.createdAt)!==null&&u!==void 0?u:void 0,A=(l=n.lastLoginAt)!==null&&l!==void 0?l:void 0,{uid:M,emailVerified:O,isAnonymous:V,providerData:ne,stsTokenManager:G}=n;J(M&&G,e,"internal-error");const x=hi.fromJSON(this.name,G);J(typeof M=="string",e,"internal-error"),Sn(h,e.name),Sn(f,e.name),J(typeof O=="boolean",e,"internal-error"),J(typeof V=="boolean",e,"internal-error"),Sn(p,e.name),Sn(d,e.name),Sn(v,e.name),Sn(y,e.name),Sn(_,e.name),Sn(A,e.name);const Y=new hr({uid:M,auth:e,email:f,emailVerified:O,displayName:h,isAnonymous:V,photoURL:d,phoneNumber:p,tenantId:v,stsTokenManager:x,createdAt:_,lastLoginAt:A});return ne&&Array.isArray(ne)&&(Y.providerData=ne.map(ue=>Object.assign({},ue))),y&&(Y._redirectEventId=y),Y}static async _fromIdTokenResponse(e,n,r=!1){const s=new hi;s.updateFromServerResponse(n);const i=new hr({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await Mo(i),i}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qm{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}qm.type="NONE";const Of=qm;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vo(t,e,n){return`firebase:${t}:${e}:${n}`}class zr{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=vo(this.userKey,s.apiKey,i),this.fullPersistenceKey=vo("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?hr._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new zr(hn(Of),e,r);const s=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let i=s[0]||hn(Of);const o=vo(r,e.config.apiKey,e.name);let a=null;for(const u of n)try{const l=await u._get(o);if(l){const h=hr._fromJSON(e,l);u!==i&&(a=h),i=u;break}}catch{}const c=s.filter(u=>u._shouldAllowMigration);return!i._shouldAllowMigration||!c.length?new zr(i,e,r):(i=c[0],a&&await i._set(o,a.toJSON()),await Promise.all(n.map(async u=>{if(u!==i)try{await u._remove(o)}catch{}})),new zr(i,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pf(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Wm(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Hm(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Gm(e))return"Blackberry";if(Xm(e))return"Webos";if(Il(e))return"Safari";if((e.includes("chrome/")||zm(e))&&!e.includes("edge/"))return"Chrome";if(Km(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Hm(t=Je()){return/firefox\//i.test(t)}function Il(t=Je()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function zm(t=Je()){return/crios\//i.test(t)}function Wm(t=Je()){return/iemobile/i.test(t)}function Km(t=Je()){return/android/i.test(t)}function Gm(t=Je()){return/blackberry/i.test(t)}function Xm(t=Je()){return/webos/i.test(t)}function Sa(t=Je()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function L0(t=Je()){var e;return Sa(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function $0(){return Nm()&&document.documentMode===10}function Qm(t=Je()){return Sa(t)||Km(t)||Xm(t)||Gm(t)||/windows phone/i.test(t)||Wm(t)}function U0(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ym(t,e=[]){let n;switch(t){case"Browser":n=Pf(Je());break;case"Worker":n=`${Pf(Je())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${ds}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class F0{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=i=>new Promise((o,a)=>{try{const c=e(i);o(c)}catch(c){a(c)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){var n;if(this.auth.currentUser===e)return;const r=[];try{for(const s of this.queue)await s(e),s.onAbort&&r.push(s.onAbort)}catch(s){r.reverse();for(const i of r)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:(n=s)===null||n===void 0?void 0:n.message})}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class V0{constructor(e,n,r){this.app=e,this.heartbeatServiceProvider=n,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new xf(this),this.idTokenSubscription=new xf(this),this.beforeStateQueue=new F0(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Um,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=r.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=hn(n)),this._initializationPromise=this.queue(async()=>{var r,s;if(!this._deleted&&(this.persistenceManager=await zr.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const r=await this.assertedPersistence.getCurrentUser();let s=r,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=s==null?void 0:s._redirectEventId,c=await this.tryRedirectSignIn(e);(!o||o===a)&&(c==null?void 0:c.user)&&(s=c.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return J(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){var n;try{await Mo(e)}catch(r){if(((n=r)===null||n===void 0?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=b0()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?$e(e):null;return n&&J(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&J(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(hn(e))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Ci("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&hn(e)||this._popupRedirectResolver;J(n,this,"argument-error"),this.redirectPersistenceManager=await zr.create(this,[hn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return J(o,this,"internal-error"),o.then(()=>i(this.currentUser)),typeof n=="function"?e.addObserver(n,r,s):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&(this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh()),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return J(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Ym(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());return r&&(n["X-Firebase-Client"]=r),n}}function Ca(t){return $e(t)}class xf{constructor(e){this.auth=e,this.observer=null,this.addObserver=ab(n=>this.observer=n)}get next(){return J(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sl{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return ln("not implemented")}_getIdTokenResponse(e){return ln("not implemented")}_linkToIdToken(e,n){return ln("not implemented")}_getReauthenticationResolver(e){return ln("not implemented")}}async function B0(t,e){return Di(t,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function j0(t,e){return Ni(t,"POST","/v1/accounts:signInWithPassword",ki(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function q0(t,e){return Ni(t,"POST","/v1/accounts:signInWithEmailLink",ki(t,e))}async function H0(t,e){return Ni(t,"POST","/v1/accounts:signInWithEmailLink",ki(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fi extends Sl{constructor(e,n,r,s=null){super("password",r),this._email=e,this._password=n,this._tenantId=s}static _fromEmailAndPassword(e,n){return new fi(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new fi(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if((n==null?void 0:n.email)&&(n==null?void 0:n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":return j0(e,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return q0(e,{email:this._email,oobCode:this._password});default:qt(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":return B0(e,{idToken:n,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return H0(e,{idToken:n,email:this._email,oobCode:this._password});default:qt(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Wr(t,e){return Ni(t,"POST","/v1/accounts:signInWithIdp",ki(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const z0="http://localhost";class yr extends Sl{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new yr(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):qt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=n,i=_l(n,["providerId","signInMethod"]);if(!r||!s)return null;const o=new yr(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Wr(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Wr(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Wr(e,n)}buildRequest(){const e={requestUri:z0,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Ai(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function W0(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function K0(t){const e=xs(Ms(t)).link,n=e?xs(Ms(e)).deep_link_id:null,r=xs(Ms(t)).deep_link_id;return(r?xs(Ms(r)).link:null)||r||n||e||t}class Cl{constructor(e){var n,r,s,i,o,a;const c=xs(Ms(e)),u=(n=c.apiKey)!==null&&n!==void 0?n:null,l=(r=c.oobCode)!==null&&r!==void 0?r:null,h=W0((s=c.mode)!==null&&s!==void 0?s:null);J(u&&l&&h,"argument-error"),this.apiKey=u,this.operation=h,this.code=l,this.continueUrl=(i=c.continueUrl)!==null&&i!==void 0?i:null,this.languageCode=(o=c.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=c.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=K0(e);try{return new Cl(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ps{constructor(){this.providerId=ps.PROVIDER_ID}static credential(e,n){return fi._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=Cl.parseLink(n);return J(r,"argument-error"),fi._fromEmailAndCode(e,r.code,r.tenantId)}}ps.PROVIDER_ID="password";ps.EMAIL_PASSWORD_SIGN_IN_METHOD="password";ps.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jm{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oi extends Jm{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nn extends Oi{constructor(){super("facebook.com")}static credential(e){return yr._fromParams({providerId:Nn.PROVIDER_ID,signInMethod:Nn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Nn.credentialFromTaggedObject(e)}static credentialFromError(e){return Nn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Nn.credential(e.oauthAccessToken)}catch{return null}}}Nn.FACEBOOK_SIGN_IN_METHOD="facebook.com";Nn.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class On extends Oi{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return yr._fromParams({providerId:On.PROVIDER_ID,signInMethod:On.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return On.credentialFromTaggedObject(e)}static credentialFromError(e){return On.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return On.credential(n,r)}catch{return null}}}On.GOOGLE_SIGN_IN_METHOD="google.com";On.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pn extends Oi{constructor(){super("github.com")}static credential(e){return yr._fromParams({providerId:Pn.PROVIDER_ID,signInMethod:Pn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Pn.credentialFromTaggedObject(e)}static credentialFromError(e){return Pn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Pn.credential(e.oauthAccessToken)}catch{return null}}}Pn.GITHUB_SIGN_IN_METHOD="github.com";Pn.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xn extends Oi{constructor(){super("twitter.com")}static credential(e,n){return yr._fromParams({providerId:xn.PROVIDER_ID,signInMethod:xn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return xn.credentialFromTaggedObject(e)}static credentialFromError(e){return xn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return xn.credential(n,r)}catch{return null}}}xn.TWITTER_SIGN_IN_METHOD="twitter.com";xn.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function G0(t,e){return Ni(t,"POST","/v1/accounts:signUp",ki(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vr{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await hr._fromIdTokenResponse(e,r,s),o=Mf(r);return new vr({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=Mf(r);return new vr({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function Mf(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lo extends rn{constructor(e,n,r,s){var i;super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,Lo.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new Lo(e,n,r,s)}}function Zm(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?Lo._fromErrorAndOperation(t,i,e,r):i})}async function X0(t,e,n=!1){const r=await li(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return vr._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Q0(t,e,n=!1){var r;const{auth:s}=t,i="reauthenticate";try{const o=await li(t,Zm(s,i,e,t),n);J(o.idToken,s,"internal-error");const a=Tl(o.idToken);J(a,s,"internal-error");const{sub:c}=a;return J(t.uid===c,s,"user-mismatch"),vr._forOperation(t,i,o)}catch(o){throw((r=o)===null||r===void 0?void 0:r.code)==="auth/user-not-found"&&qt(s,"user-mismatch"),o}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function eg(t,e,n=!1){const r="signIn",s=await Zm(t,r,e),i=await vr._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}async function Y0(t,e){return eg(Ca(t),e)}async function J0(t,e,n){const r=Ca(t),s=await G0(r,{returnSecureToken:!0,email:e,password:n}),i=await vr._fromIdTokenResponse(r,"signIn",s);return await r._updateCurrentUser(i.user),i}function Z0(t,e,n){return Y0($e(t),ps.credential(e,n))}function tg(t,e,n,r){return $e(t).onAuthStateChanged(e,n,r)}function eT(t){return $e(t).signOut()}const $o="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ng{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem($o,"1"),this.storage.removeItem($o),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tT(){const t=Je();return Il(t)||Sa(t)}const nT=1e3,rT=10;class rg extends ng{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=tT()&&U0(),this.fallbackToPolling=Qm(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,c)=>{this.notifyListeners(o,c)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);$0()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,rT):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},nT)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}rg.type="LOCAL";const sT=rg;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sg extends ng{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}sg.type="SESSION";const ig=sg;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function iT(t){return Promise.all(t.map(async e=>{try{const n=await e;return{fulfilled:!0,value:n}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Aa{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new Aa(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const a=Array.from(o).map(async u=>u(n.origin,i)),c=await iT(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:c})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Aa.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Al(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oT{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((a,c)=>{const u=Al("",20);s.port1.start();const l=setTimeout(()=>{c(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(h){const f=h;if(f.data.eventId===u)switch(f.data.status){case"ack":clearTimeout(l),i=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),a(f.data.response);break;default:clearTimeout(l),clearTimeout(i),c(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zt(){return window}function aT(t){Zt().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function og(){return typeof Zt().WorkerGlobalScope<"u"&&typeof Zt().importScripts=="function"}async function cT(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function uT(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function lT(){return og()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ag="firebaseLocalStorageDb",hT=1,Uo="firebaseLocalStorage",cg="fbase_key";class Pi{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Ra(t,e){return t.transaction([Uo],e?"readwrite":"readonly").objectStore(Uo)}function fT(){const t=indexedDB.deleteDatabase(ag);return new Pi(t).toPromise()}function du(){const t=indexedDB.open(ag,hT);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Uo,{keyPath:cg})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Uo)?e(r):(r.close(),await fT(),e(await du()))})})}async function Lf(t,e,n){const r=Ra(t,!0).put({[cg]:e,value:n});return new Pi(r).toPromise()}async function dT(t,e){const n=Ra(t,!1).get(e),r=await new Pi(n).toPromise();return r===void 0?null:r.value}function $f(t,e){const n=Ra(t,!0).delete(e);return new Pi(n).toPromise()}const pT=800,mT=3;class ug{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await du(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>mT)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return og()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Aa._getInstance(lT()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await cT(),!this.activeServiceWorker)return;this.sender=new oT(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);!r||((e=r[0])===null||e===void 0?void 0:e.fulfilled)&&((n=r[0])===null||n===void 0?void 0:n.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||uT()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await du();return await Lf(e,$o,"1"),await $f(e,$o),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Lf(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>dT(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>$f(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=Ra(s,!1).getAll();return new Pi(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),pT)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}ug.type="LOCAL";const gT=ug;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yT(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function vT(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=Jt("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",yT().appendChild(r)})}function wT(t){return`__${t}${Math.floor(Math.random()*1e6)}`}new Ri(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _T(t,e){return e?hn(e):(J(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rl extends Sl{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Wr(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Wr(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Wr(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function ET(t){return eg(t.auth,new Rl(t),t.bypassAuthState)}function bT(t){const{auth:e,user:n}=t;return J(n,e,"internal-error"),Q0(n,new Rl(t),t.bypassAuthState)}async function TT(t){const{auth:e,user:n}=t;return J(n,e,"internal-error"),X0(n,new Rl(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lg{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:a}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(c))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return ET;case"linkViaPopup":case"linkViaRedirect":return TT;case"reauthViaPopup":case"reauthViaRedirect":return bT;default:qt(this.auth,"internal-error")}}resolve(e){gn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){gn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const IT=new Ri(2e3,1e4);class Ur extends lg{constructor(e,n,r,s,i){super(e,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,Ur.currentPopupAction&&Ur.currentPopupAction.cancel(),Ur.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return J(e,this.auth,"internal-error"),e}async onExecution(){gn(this.filter.length===1,"Popup operations only handle one event");const e=Al();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Jt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Jt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Ur.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Jt(this.auth,"popup-closed-by-user"))},2e3);return}this.pollId=window.setTimeout(e,IT.get())};e()}}Ur.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ST="pendingRedirect",wo=new Map;class CT extends lg{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=wo.get(this.auth._key());if(!e){try{const r=await AT(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}wo.set(this.auth._key(),e)}return this.bypassAuthState||wo.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function AT(t,e){const n=DT(e),r=kT(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function RT(t,e){wo.set(t._key(),e)}function kT(t){return hn(t._redirectPersistence)}function DT(t){return vo(ST,t.config.apiKey,t.name)}async function NT(t,e,n=!1){const r=Ca(t),s=_T(r,e),o=await new CT(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const OT=10*60*1e3;class PT{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!xT(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!hg(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(Jt(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=OT&&this.cachedEventUids.clear(),this.cachedEventUids.has(Uf(e))}saveEventToCache(e){this.cachedEventUids.add(Uf(e)),this.lastProcessedEventTime=Date.now()}}function Uf(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function hg({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function xT(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return hg(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function MT(t,e={}){return Di(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const LT=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,$T=/^https?/;async function UT(t){if(t.config.emulator)return;const{authorizedDomains:e}=await MT(t);for(const n of e)try{if(FT(n))return}catch{}qt(t,"unauthorized-domain")}function FT(t){const e=fu(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!$T.test(n))return!1;if(LT.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const VT=new Ri(3e4,6e4);function Ff(){const t=Zt().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function BT(t){return new Promise((e,n)=>{var r,s,i;function o(){Ff(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Ff(),n(Jt(t,"network-request-failed"))},timeout:VT.get()})}if(!((s=(r=Zt().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((i=Zt().gapi)===null||i===void 0)&&i.load)o();else{const a=wT("iframefcb");return Zt()[a]=()=>{gapi.load?o():n(Jt(t,"network-request-failed"))},vT(`https://apis.google.com/js/api.js?onload=${a}`).catch(c=>n(c))}}).catch(e=>{throw _o=null,e})}let _o=null;function jT(t){return _o=_o||BT(t),_o}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qT=new Ri(5e3,15e3),HT="__/auth/iframe",zT="emulator/auth/iframe",WT={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},KT=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function GT(t){const e=t.config;J(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?bl(e,zT):`https://${t.config.authDomain}/${HT}`,r={apiKey:e.apiKey,appName:t.name,v:ds},s=KT.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${Ai(r).slice(1)}`}async function XT(t){const e=await jT(t),n=Zt().gapi;return J(n,t,"internal-error"),e.open({where:document.body,url:GT(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:WT,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=Jt(t,"network-request-failed"),a=Zt().setTimeout(()=>{i(o)},qT.get());function c(){Zt().clearTimeout(a),s(r)}r.ping(c).then(c,()=>{i(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const QT={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},YT=500,JT=600,ZT="_blank",eI="http://localhost";class Vf{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function tI(t,e,n,r=YT,s=JT){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const c=Object.assign(Object.assign({},QT),{width:r.toString(),height:s.toString(),top:i,left:o}),u=Je().toLowerCase();n&&(a=zm(u)?ZT:n),Hm(u)&&(e=e||eI,c.scrollbars="yes");const l=Object.entries(c).reduce((f,[p,d])=>`${f}${p}=${d},`,"");if(L0(u)&&a!=="_self")return nI(e||"",a),new Vf(null);const h=window.open(e||"",a,l);J(h,t,"popup-blocked");try{h.focus()}catch{}return new Vf(h)}function nI(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rI="__/auth/handler",sI="emulator/auth/handler";function Bf(t,e,n,r,s,i){J(t.config.authDomain,t,"auth-domain-config-required"),J(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:ds,eventId:s};if(e instanceof Jm){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",ob(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[c,u]of Object.entries(i||{}))o[c]=u}if(e instanceof Oi){const c=e.getScopes().filter(u=>u!=="");c.length>0&&(o.scopes=c.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const c of Object.keys(a))a[c]===void 0&&delete a[c];return`${iI(t)}?${Ai(a).slice(1)}`}function iI({config:t}){return t.emulator?bl(t,sI):`https://${t.authDomain}/${rI}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ec="webStorageSupport";class oI{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=ig,this._completeRedirectFn=NT,this._overrideRedirectResult=RT}async _openPopup(e,n,r,s){var i;gn((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=Bf(e,n,r,fu(),s);return tI(e,o,Al())}async _openRedirect(e,n,r,s){return await this._originValidation(e),aT(Bf(e,n,r,fu(),s)),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(gn(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await XT(e),r=new PT(e);return n.register("authEvent",s=>(J(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Ec,{type:Ec},s=>{var i;const o=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[Ec];o!==void 0&&n(!!o),qt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=UT(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Qm()||Il()||Sa()}}const aI=oI;var jf="@firebase/auth",qf="0.20.5";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cI{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{var s;e(((s=r)===null||s===void 0?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);!n||(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){J(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uI(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function lI(t){mr(new qn("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),{apiKey:i,authDomain:o}=r.options;return((a,c)=>{J(i&&!i.includes(":"),"invalid-api-key",{appName:a.name}),J(!(o!=null&&o.includes(":")),"argument-error",{appName:a.name});const u={apiKey:i,authDomain:o,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Ym(t)},l=new V0(a,c,u);return w0(l,n),l})(r,s)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),mr(new qn("auth-internal",e=>{const n=Ca(e.getProvider("auth").getImmediate());return(r=>new cI(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Yt(jf,qf,uI(t)),Yt(jf,qf,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hI(t=wl()){const e=Ia(t,"auth");return e.isInitialized()?e.getImmediate():v0(t,{popupRedirectResolver:aI,persistence:[gT,sT,ig]})}lI("Browser");var fI=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},$,kl=kl||{},Z=fI||self;function Fo(){}function pu(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function xi(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function dI(t){return Object.prototype.hasOwnProperty.call(t,bc)&&t[bc]||(t[bc]=++pI)}var bc="closure_uid_"+(1e9*Math.random()>>>0),pI=0;function mI(t,e,n){return t.call.apply(t.bind,arguments)}function gI(t,e,n){if(!t)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var s=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(s,r),t.apply(e,s)}}return function(){return t.apply(e,arguments)}}function rt(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?rt=mI:rt=gI,rt.apply(null,arguments)}function no(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var r=n.slice();return r.push.apply(r,arguments),t.apply(this,r)}}function at(t,e){function n(){}n.prototype=e.prototype,t.Z=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.Vb=function(r,s,i){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[s].apply(r,o)}}function Kn(){this.s=this.s,this.o=this.o}var yI=0;Kn.prototype.s=!1;Kn.prototype.na=function(){!this.s&&(this.s=!0,this.M(),yI!=0)&&dI(this)};Kn.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const fg=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1},dg=Array.prototype.forEach?function(t,e,n){Array.prototype.forEach.call(t,e,n)}:function(t,e,n){const r=t.length,s=typeof t=="string"?t.split(""):t;for(let i=0;i<r;i++)i in s&&e.call(n,s[i],i,t)};function vI(t){e:{var e=uS;const n=t.length,r=typeof t=="string"?t.split(""):t;for(let s=0;s<n;s++)if(s in r&&e.call(void 0,r[s],s,t)){e=s;break e}e=-1}return 0>e?null:typeof t=="string"?t.charAt(e):t[e]}function Hf(t){return Array.prototype.concat.apply([],arguments)}function Dl(t){const e=t.length;if(0<e){const n=Array(e);for(let r=0;r<e;r++)n[r]=t[r];return n}return[]}function Vo(t){return/^[\s\xa0]*$/.test(t)}var zf=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]};function mt(t,e){return t.indexOf(e)!=-1}function Tc(t,e){return t<e?-1:t>e?1:0}var gt;e:{var Wf=Z.navigator;if(Wf){var Kf=Wf.userAgent;if(Kf){gt=Kf;break e}}gt=""}function Nl(t,e,n){for(const r in t)e.call(n,t[r],r,t)}function pg(t){const e={};for(const n in t)e[n]=t[n];return e}var Gf="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function mg(t,e){let n,r;for(let s=1;s<arguments.length;s++){r=arguments[s];for(n in r)t[n]=r[n];for(let i=0;i<Gf.length;i++)n=Gf[i],Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}}function Ol(t){return Ol[" "](t),t}Ol[" "]=Fo;function wI(t){var e=bI;return Object.prototype.hasOwnProperty.call(e,9)?e[9]:e[9]=t(9)}var _I=mt(gt,"Opera"),Zr=mt(gt,"Trident")||mt(gt,"MSIE"),gg=mt(gt,"Edge"),mu=gg||Zr,yg=mt(gt,"Gecko")&&!(mt(gt.toLowerCase(),"webkit")&&!mt(gt,"Edge"))&&!(mt(gt,"Trident")||mt(gt,"MSIE"))&&!mt(gt,"Edge"),EI=mt(gt.toLowerCase(),"webkit")&&!mt(gt,"Edge");function vg(){var t=Z.document;return t?t.documentMode:void 0}var Bo;e:{var Ic="",Sc=function(){var t=gt;if(yg)return/rv:([^\);]+)(\)|;)/.exec(t);if(gg)return/Edge\/([\d\.]+)/.exec(t);if(Zr)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(EI)return/WebKit\/(\S+)/.exec(t);if(_I)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(Sc&&(Ic=Sc?Sc[1]:""),Zr){var Cc=vg();if(Cc!=null&&Cc>parseFloat(Ic)){Bo=String(Cc);break e}}Bo=Ic}var bI={};function TI(){return wI(function(){let t=0;const e=zf(String(Bo)).split("."),n=zf("9").split("."),r=Math.max(e.length,n.length);for(let o=0;t==0&&o<r;o++){var s=e[o]||"",i=n[o]||"";do{if(s=/(\d*)(\D*)(.*)/.exec(s)||["","","",""],i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],s[0].length==0&&i[0].length==0)break;t=Tc(s[1].length==0?0:parseInt(s[1],10),i[1].length==0?0:parseInt(i[1],10))||Tc(s[2].length==0,i[2].length==0)||Tc(s[2],i[2]),s=s[3],i=i[3]}while(t==0)}return 0<=t})}var gu;if(Z.document&&Zr){var Xf=vg();gu=Xf||parseInt(Bo,10)||void 0}else gu=void 0;var II=gu,SI=function(){if(!Z.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{Z.addEventListener("test",Fo,e),Z.removeEventListener("test",Fo,e)}catch{}return t}();function ut(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}ut.prototype.h=function(){this.defaultPrevented=!0};function di(t,e){if(ut.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,r=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(yg){e:{try{Ol(e.nodeName);var s=!0;break e}catch{}s=!1}s||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,r?(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:CI[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&di.Z.h.call(this)}}at(di,ut);var CI={2:"touch",3:"pen",4:"mouse"};di.prototype.h=function(){di.Z.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var Mi="closure_listenable_"+(1e6*Math.random()|0),AI=0;function RI(t,e,n,r,s){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!r,this.ia=s,this.key=++AI,this.ca=this.fa=!1}function ka(t){t.ca=!0,t.listener=null,t.proxy=null,t.src=null,t.ia=null}function Da(t){this.src=t,this.g={},this.h=0}Da.prototype.add=function(t,e,n,r,s){var i=t.toString();t=this.g[i],t||(t=this.g[i]=[],this.h++);var o=vu(t,e,r,s);return-1<o?(e=t[o],n||(e.fa=!1)):(e=new RI(e,this.src,i,!!r,s),e.fa=n,t.push(e)),e};function yu(t,e){var n=e.type;if(n in t.g){var r=t.g[n],s=fg(r,e),i;(i=0<=s)&&Array.prototype.splice.call(r,s,1),i&&(ka(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function vu(t,e,n,r){for(var s=0;s<t.length;++s){var i=t[s];if(!i.ca&&i.listener==e&&i.capture==!!n&&i.ia==r)return s}return-1}var Pl="closure_lm_"+(1e6*Math.random()|0),Ac={};function wg(t,e,n,r,s){if(r&&r.once)return Eg(t,e,n,r,s);if(Array.isArray(e)){for(var i=0;i<e.length;i++)wg(t,e[i],n,r,s);return null}return n=Ll(n),t&&t[Mi]?t.N(e,n,xi(r)?!!r.capture:!!r,s):_g(t,e,n,!1,r,s)}function _g(t,e,n,r,s,i){if(!e)throw Error("Invalid event type");var o=xi(s)?!!s.capture:!!s,a=Ml(t);if(a||(t[Pl]=a=new Da(t)),n=a.add(e,n,r,o,i),n.proxy)return n;if(r=kI(),n.proxy=r,r.src=t,r.listener=n,t.addEventListener)SI||(s=o),s===void 0&&(s=!1),t.addEventListener(e.toString(),r,s);else if(t.attachEvent)t.attachEvent(Tg(e.toString()),r);else if(t.addListener&&t.removeListener)t.addListener(r);else throw Error("addEventListener and attachEvent are unavailable.");return n}function kI(){function t(n){return e.call(t.src,t.listener,n)}var e=DI;return t}function Eg(t,e,n,r,s){if(Array.isArray(e)){for(var i=0;i<e.length;i++)Eg(t,e[i],n,r,s);return null}return n=Ll(n),t&&t[Mi]?t.O(e,n,xi(r)?!!r.capture:!!r,s):_g(t,e,n,!0,r,s)}function bg(t,e,n,r,s){if(Array.isArray(e))for(var i=0;i<e.length;i++)bg(t,e[i],n,r,s);else r=xi(r)?!!r.capture:!!r,n=Ll(n),t&&t[Mi]?(t=t.i,e=String(e).toString(),e in t.g&&(i=t.g[e],n=vu(i,n,r,s),-1<n&&(ka(i[n]),Array.prototype.splice.call(i,n,1),i.length==0&&(delete t.g[e],t.h--)))):t&&(t=Ml(t))&&(e=t.g[e.toString()],t=-1,e&&(t=vu(e,n,r,s)),(n=-1<t?e[t]:null)&&xl(n))}function xl(t){if(typeof t!="number"&&t&&!t.ca){var e=t.src;if(e&&e[Mi])yu(e.i,t);else{var n=t.type,r=t.proxy;e.removeEventListener?e.removeEventListener(n,r,t.capture):e.detachEvent?e.detachEvent(Tg(n),r):e.addListener&&e.removeListener&&e.removeListener(r),(n=Ml(e))?(yu(n,t),n.h==0&&(n.src=null,e[Pl]=null)):ka(t)}}}function Tg(t){return t in Ac?Ac[t]:Ac[t]="on"+t}function DI(t,e){if(t.ca)t=!0;else{e=new di(e,this);var n=t.listener,r=t.ia||t.src;t.fa&&xl(t),t=n.call(r,e)}return t}function Ml(t){return t=t[Pl],t instanceof Da?t:null}var Rc="__closure_events_fn_"+(1e9*Math.random()>>>0);function Ll(t){return typeof t=="function"?t:(t[Rc]||(t[Rc]=function(e){return t.handleEvent(e)}),t[Rc])}function Ze(){Kn.call(this),this.i=new Da(this),this.P=this,this.I=null}at(Ze,Kn);Ze.prototype[Mi]=!0;Ze.prototype.removeEventListener=function(t,e,n,r){bg(this,t,e,n,r)};function st(t,e){var n,r=t.I;if(r)for(n=[];r;r=r.I)n.push(r);if(t=t.P,r=e.type||e,typeof e=="string")e=new ut(e,t);else if(e instanceof ut)e.target=e.target||t;else{var s=e;e=new ut(r,t),mg(e,s)}if(s=!0,n)for(var i=n.length-1;0<=i;i--){var o=e.g=n[i];s=ro(o,r,!0,e)&&s}if(o=e.g=t,s=ro(o,r,!0,e)&&s,s=ro(o,r,!1,e)&&s,n)for(i=0;i<n.length;i++)o=e.g=n[i],s=ro(o,r,!1,e)&&s}Ze.prototype.M=function(){if(Ze.Z.M.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],r=0;r<n.length;r++)ka(n[r]);delete t.g[e],t.h--}}this.I=null};Ze.prototype.N=function(t,e,n,r){return this.i.add(String(t),e,!1,n,r)};Ze.prototype.O=function(t,e,n,r){return this.i.add(String(t),e,!0,n,r)};function ro(t,e,n,r){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var s=!0,i=0;i<e.length;++i){var o=e[i];if(o&&!o.ca&&o.capture==n){var a=o.listener,c=o.ia||o.src;o.fa&&yu(t.i,o),s=a.call(c,r)!==!1&&s}}return s&&!r.defaultPrevented}var $l=Z.JSON.stringify;function NI(){var t=Sg;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class OI{constructor(){this.h=this.g=null}add(e,n){const r=Ig.get();r.set(e,n),this.h?this.h.next=r:this.g=r,this.h=r}}var Ig=new class{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}(()=>new PI,t=>t.reset());class PI{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function xI(t){Z.setTimeout(()=>{throw t},0)}function Ul(t,e){wu||MI(),_u||(wu(),_u=!0),Sg.add(t,e)}var wu;function MI(){var t=Z.Promise.resolve(void 0);wu=function(){t.then(LI)}}var _u=!1,Sg=new OI;function LI(){for(var t;t=NI();){try{t.h.call(t.g)}catch(n){xI(n)}var e=Ig;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}_u=!1}function Na(t,e){Ze.call(this),this.h=t||1,this.g=e||Z,this.j=rt(this.kb,this),this.l=Date.now()}at(Na,Ze);$=Na.prototype;$.da=!1;$.S=null;$.kb=function(){if(this.da){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.S=this.g.setTimeout(this.j,this.h-t):(this.S&&(this.g.clearTimeout(this.S),this.S=null),st(this,"tick"),this.da&&(Fl(this),this.start()))}};$.start=function(){this.da=!0,this.S||(this.S=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function Fl(t){t.da=!1,t.S&&(t.g.clearTimeout(t.S),t.S=null)}$.M=function(){Na.Z.M.call(this),Fl(this),delete this.g};function Vl(t,e,n){if(typeof t=="function")n&&(t=rt(t,n));else if(t&&typeof t.handleEvent=="function")t=rt(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:Z.setTimeout(t,e||0)}function Cg(t){t.g=Vl(()=>{t.g=null,t.i&&(t.i=!1,Cg(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class $I extends Kn{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:Cg(this)}M(){super.M(),this.g&&(Z.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function pi(t){Kn.call(this),this.h=t,this.g={}}at(pi,Kn);var Qf=[];function Ag(t,e,n,r){Array.isArray(n)||(n&&(Qf[0]=n.toString()),n=Qf);for(var s=0;s<n.length;s++){var i=wg(e,n[s],r||t.handleEvent,!1,t.h||t);if(!i)break;t.g[i.key]=i}}function Rg(t){Nl(t.g,function(e,n){this.g.hasOwnProperty(n)&&xl(e)},t),t.g={}}pi.prototype.M=function(){pi.Z.M.call(this),Rg(this)};pi.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function Oa(){this.g=!0}Oa.prototype.Aa=function(){this.g=!1};function UI(t,e,n,r,s,i){t.info(function(){if(t.g)if(i)for(var o="",a=i.split("&"),c=0;c<a.length;c++){var u=a[c].split("=");if(1<u.length){var l=u[0];u=u[1];var h=l.split("_");o=2<=h.length&&h[1]=="type"?o+(l+"="+u+"&"):o+(l+"=redacted&")}}else o=null;else o=i;return"XMLHTTP REQ ("+r+") [attempt "+s+"]: "+e+`
`+n+`
`+o})}function FI(t,e,n,r,s,i,o){t.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+s+"]: "+e+`
`+n+`
`+i+" "+o})}function Fr(t,e,n,r){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+BI(t,n)+(r?" "+r:"")})}function VI(t,e){t.info(function(){return"TIMEOUT: "+e})}Oa.prototype.info=function(){};function BI(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var r=n[t];if(!(2>r.length)){var s=r[1];if(Array.isArray(s)&&!(1>s.length)){var i=s[0];if(i!="noop"&&i!="stop"&&i!="close")for(var o=1;o<s.length;o++)s[o]=""}}}}return $l(n)}catch{return e}}var Sr={},Yf=null;function Pa(){return Yf=Yf||new Ze}Sr.Ma="serverreachability";function kg(t){ut.call(this,Sr.Ma,t)}at(kg,ut);function mi(t){const e=Pa();st(e,new kg(e))}Sr.STAT_EVENT="statevent";function Dg(t,e){ut.call(this,Sr.STAT_EVENT,t),this.stat=e}at(Dg,ut);function yt(t){const e=Pa();st(e,new Dg(e,t))}Sr.Na="timingevent";function Ng(t,e){ut.call(this,Sr.Na,t),this.size=e}at(Ng,ut);function Li(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return Z.setTimeout(function(){t()},e)}var xa={NO_ERROR:0,lb:1,yb:2,xb:3,sb:4,wb:5,zb:6,Ja:7,TIMEOUT:8,Cb:9},Og={qb:"complete",Mb:"success",Ka:"error",Ja:"abort",Eb:"ready",Fb:"readystatechange",TIMEOUT:"timeout",Ab:"incrementaldata",Db:"progress",tb:"downloadprogress",Ub:"uploadprogress"};function Bl(){}Bl.prototype.h=null;function Jf(t){return t.h||(t.h=t.i())}function Pg(){}var $i={OPEN:"a",pb:"b",Ka:"c",Bb:"d"};function jl(){ut.call(this,"d")}at(jl,ut);function ql(){ut.call(this,"c")}at(ql,ut);var Eu;function Ma(){}at(Ma,Bl);Ma.prototype.g=function(){return new XMLHttpRequest};Ma.prototype.i=function(){return{}};Eu=new Ma;function Ui(t,e,n,r){this.l=t,this.j=e,this.m=n,this.X=r||1,this.V=new pi(this),this.P=jI,t=mu?125:void 0,this.W=new Na(t),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.Y=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.N=-1,this.I=!1,this.O=0,this.L=null,this.aa=this.J=this.$=this.U=!1,this.h=new xg}function xg(){this.i=null,this.g="",this.h=!1}var jI=45e3,bu={},jo={};$=Ui.prototype;$.setTimeout=function(t){this.P=t};function Tu(t,e,n){t.K=1,t.v=$a(yn(e)),t.s=n,t.U=!0,Mg(t,null)}function Mg(t,e){t.F=Date.now(),Fi(t),t.A=yn(t.v);var n=t.A,r=t.X;Array.isArray(r)||(r=[String(r)]),jg(n.h,"t",r),t.C=0,n=t.l.H,t.h=new xg,t.g=cy(t.l,n?e:null,!t.s),0<t.O&&(t.L=new $I(rt(t.Ia,t,t.g),t.O)),Ag(t.V,t.g,"readystatechange",t.gb),e=t.H?pg(t.H):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ea(t.A,t.u,t.s,e)):(t.u="GET",t.g.ea(t.A,t.u,null,e)),mi(),UI(t.j,t.u,t.A,t.m,t.X,t.s)}$.gb=function(t){t=t.target;const e=this.L;e&&fn(t)==3?e.l():this.Ia(t)};$.Ia=function(t){try{if(t==this.g)e:{const l=fn(this.g);var e=this.g.Da();const h=this.g.ba();if(!(3>l)&&(l!=3||mu||this.g&&(this.h.h||this.g.ga()||nd(this.g)))){this.I||l!=4||e==7||(e==8||0>=h?mi(3):mi(2)),La(this);var n=this.g.ba();this.N=n;t:if(Lg(this)){var r=nd(this.g);t="";var s=r.length,i=fn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){or(this),Ws(this);var o="";break t}this.h.i=new Z.TextDecoder}for(e=0;e<s;e++)this.h.h=!0,t+=this.h.i.decode(r[e],{stream:i&&e==s-1});r.splice(0,s),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.ga();if(this.i=n==200,FI(this.j,this.u,this.A,this.m,this.X,l,n),this.i){if(this.$&&!this.J){t:{if(this.g){var a,c=this.g;if((a=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!Vo(a)){var u=a;break t}}u=null}if(n=u)Fr(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,Iu(this,n);else{this.i=!1,this.o=3,yt(12),or(this),Ws(this);break e}}this.U?($g(this,l,o),mu&&this.i&&l==3&&(Ag(this.V,this.W,"tick",this.fb),this.W.start())):(Fr(this.j,this.m,o,null),Iu(this,o)),l==4&&or(this),this.i&&!this.I&&(l==4?sy(this.l,this):(this.i=!1,Fi(this)))}else n==400&&0<o.indexOf("Unknown SID")?(this.o=3,yt(12)):(this.o=0,yt(13)),or(this),Ws(this)}}}catch{}finally{}};function Lg(t){return t.g?t.u=="GET"&&t.K!=2&&t.l.Ba:!1}function $g(t,e,n){let r=!0,s;for(;!t.I&&t.C<n.length;)if(s=qI(t,n),s==jo){e==4&&(t.o=4,yt(14),r=!1),Fr(t.j,t.m,null,"[Incomplete Response]");break}else if(s==bu){t.o=4,yt(15),Fr(t.j,t.m,n,"[Invalid Chunk]"),r=!1;break}else Fr(t.j,t.m,s,null),Iu(t,s);Lg(t)&&s!=jo&&s!=bu&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,yt(16),r=!1),t.i=t.i&&r,r?0<n.length&&!t.aa&&(t.aa=!0,e=t.l,e.g==t&&e.$&&!e.L&&(e.h.info("Great, no buffering proxy detected. Bytes received: "+n.length),Jl(e),e.L=!0,yt(11))):(Fr(t.j,t.m,n,"[Invalid Chunked Response]"),or(t),Ws(t))}$.fb=function(){if(this.g){var t=fn(this.g),e=this.g.ga();this.C<e.length&&(La(this),$g(this,t,e),this.i&&t!=4&&Fi(this))}};function qI(t,e){var n=t.C,r=e.indexOf(`
`,n);return r==-1?jo:(n=Number(e.substring(n,r)),isNaN(n)?bu:(r+=1,r+n>e.length?jo:(e=e.substr(r,n),t.C=r+n,e)))}$.cancel=function(){this.I=!0,or(this)};function Fi(t){t.Y=Date.now()+t.P,Ug(t,t.P)}function Ug(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=Li(rt(t.eb,t),e)}function La(t){t.B&&(Z.clearTimeout(t.B),t.B=null)}$.eb=function(){this.B=null;const t=Date.now();0<=t-this.Y?(VI(this.j,this.A),this.K!=2&&(mi(),yt(17)),or(this),this.o=2,Ws(this)):Ug(this,this.Y-t)};function Ws(t){t.l.G==0||t.I||sy(t.l,t)}function or(t){La(t);var e=t.L;e&&typeof e.na=="function"&&e.na(),t.L=null,Fl(t.W),Rg(t.V),t.g&&(e=t.g,t.g=null,e.abort(),e.na())}function Iu(t,e){try{var n=t.l;if(n.G!=0&&(n.g==t||Su(n.i,t))){if(n.I=t.N,!t.J&&Su(n.i,t)&&n.G==3){try{var r=n.Ca.g.parse(e)}catch{r=null}if(Array.isArray(r)&&r.length==3){var s=r;if(s[0]==0){e:if(!n.u){if(n.g)if(n.g.F+3e3<t.F)Wo(n),Va(n);else break e;Yl(n),yt(18)}}else n.ta=s[1],0<n.ta-n.U&&37500>s[2]&&n.N&&n.A==0&&!n.v&&(n.v=Li(rt(n.ab,n),6e3));if(1>=zg(n.i)&&n.ka){try{n.ka()}catch{}n.ka=void 0}}else ar(n,11)}else if((t.J||n.g==t)&&Wo(n),!Vo(e))for(s=n.Ca.g.parse(e),e=0;e<s.length;e++){let u=s[e];if(n.U=u[0],u=u[1],n.G==2)if(u[0]=="c"){n.J=u[1],n.la=u[2];const l=u[3];l!=null&&(n.ma=l,n.h.info("VER="+n.ma));const h=u[4];h!=null&&(n.za=h,n.h.info("SVER="+n.za));const f=u[5];f!=null&&typeof f=="number"&&0<f&&(r=1.5*f,n.K=r,n.h.info("backChannelRequestTimeoutMs_="+r)),r=n;const p=t.g;if(p){const d=p.g?p.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(d){var i=r.i;!i.g&&(mt(d,"spdy")||mt(d,"quic")||mt(d,"h2"))&&(i.j=i.l,i.g=new Set,i.h&&(Wl(i,i.h),i.h=null))}if(r.D){const v=p.g?p.g.getResponseHeader("X-HTTP-Session-Id"):null;v&&(r.sa=v,Me(r.F,r.D,v))}}n.G=3,n.j&&n.j.xa(),n.$&&(n.O=Date.now()-t.F,n.h.info("Handshake RTT: "+n.O+"ms")),r=n;var o=t;if(r.oa=ay(r,r.H?r.la:null,r.W),o.J){Wg(r.i,o);var a=o,c=r.K;c&&a.setTimeout(c),a.B&&(La(a),Fi(a)),r.g=o}else ny(r);0<n.l.length&&Ba(n)}else u[0]!="stop"&&u[0]!="close"||ar(n,7);else n.G==3&&(u[0]=="stop"||u[0]=="close"?u[0]=="stop"?ar(n,7):Ql(n):u[0]!="noop"&&n.j&&n.j.wa(u),n.A=0)}}mi(4)}catch{}}function HI(t){if(t.R&&typeof t.R=="function")return t.R();if(typeof t=="string")return t.split("");if(pu(t)){for(var e=[],n=t.length,r=0;r<n;r++)e.push(t[r]);return e}e=[],n=0;for(r in t)e[n++]=t[r];return e}function Hl(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(pu(t)||typeof t=="string")dg(t,e,void 0);else{if(t.T&&typeof t.T=="function")var n=t.T();else if(t.R&&typeof t.R=="function")n=void 0;else if(pu(t)||typeof t=="string"){n=[];for(var r=t.length,s=0;s<r;s++)n.push(s)}else for(s in n=[],r=0,t)n[r++]=s;r=HI(t),s=r.length;for(var i=0;i<s;i++)e.call(void 0,r[i],n&&n[i],t)}}function ms(t,e){this.h={},this.g=[],this.i=0;var n=arguments.length;if(1<n){if(n%2)throw Error("Uneven number of arguments");for(var r=0;r<n;r+=2)this.set(arguments[r],arguments[r+1])}else if(t)if(t instanceof ms)for(n=t.T(),r=0;r<n.length;r++)this.set(n[r],t.get(n[r]));else for(r in t)this.set(r,t[r])}$=ms.prototype;$.R=function(){zl(this);for(var t=[],e=0;e<this.g.length;e++)t.push(this.h[this.g[e]]);return t};$.T=function(){return zl(this),this.g.concat()};function zl(t){if(t.i!=t.g.length){for(var e=0,n=0;e<t.g.length;){var r=t.g[e];wr(t.h,r)&&(t.g[n++]=r),e++}t.g.length=n}if(t.i!=t.g.length){var s={};for(n=e=0;e<t.g.length;)r=t.g[e],wr(s,r)||(t.g[n++]=r,s[r]=1),e++;t.g.length=n}}$.get=function(t,e){return wr(this.h,t)?this.h[t]:e};$.set=function(t,e){wr(this.h,t)||(this.i++,this.g.push(t)),this.h[t]=e};$.forEach=function(t,e){for(var n=this.T(),r=0;r<n.length;r++){var s=n[r],i=this.get(s);t.call(e,i,s,this)}};function wr(t,e){return Object.prototype.hasOwnProperty.call(t,e)}var Fg=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;function zI(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var r=t[n].indexOf("="),s=null;if(0<=r){var i=t[n].substring(0,r);s=t[n].substring(r+1)}else i=t[n];e(i,s?decodeURIComponent(s.replace(/\+/g," ")):"")}}}function _r(t,e){if(this.i=this.s=this.j="",this.m=null,this.o=this.l="",this.g=!1,t instanceof _r){this.g=e!==void 0?e:t.g,qo(this,t.j),this.s=t.s,Ho(this,t.i),zo(this,t.m),this.l=t.l,e=t.h;var n=new gi;n.i=e.i,e.g&&(n.g=new ms(e.g),n.h=e.h),Zf(this,n),this.o=t.o}else t&&(n=String(t).match(Fg))?(this.g=!!e,qo(this,n[1]||"",!0),this.s=Ks(n[2]||""),Ho(this,n[3]||"",!0),zo(this,n[4]),this.l=Ks(n[5]||"",!0),Zf(this,n[6]||"",!0),this.o=Ks(n[7]||"")):(this.g=!!e,this.h=new gi(null,this.g))}_r.prototype.toString=function(){var t=[],e=this.j;e&&t.push(Ls(e,ed,!0),":");var n=this.i;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(Ls(e,ed,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.i&&n.charAt(0)!="/"&&t.push("/"),t.push(Ls(n,n.charAt(0)=="/"?QI:XI,!0))),(n=this.h.toString())&&t.push("?",n),(n=this.o)&&t.push("#",Ls(n,JI)),t.join("")};function yn(t){return new _r(t)}function qo(t,e,n){t.j=n?Ks(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function Ho(t,e,n){t.i=n?Ks(e,!0):e}function zo(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function Zf(t,e,n){e instanceof gi?(t.h=e,ZI(t.h,t.g)):(n||(e=Ls(e,YI)),t.h=new gi(e,t.g))}function Me(t,e,n){t.h.set(e,n)}function $a(t){return Me(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function WI(t){return t instanceof _r?yn(t):new _r(t,void 0)}function KI(t,e,n,r){var s=new _r(null,void 0);return t&&qo(s,t),e&&Ho(s,e),n&&zo(s,n),r&&(s.l=r),s}function Ks(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function Ls(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,GI),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function GI(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var ed=/[#\/\?@]/g,XI=/[#\?:]/g,QI=/[#\?]/g,YI=/[#\?@]/g,JI=/#/g;function gi(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function Gn(t){t.g||(t.g=new ms,t.h=0,t.i&&zI(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}$=gi.prototype;$.add=function(t,e){Gn(this),this.i=null,t=gs(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function Vg(t,e){Gn(t),e=gs(t,e),wr(t.g.h,e)&&(t.i=null,t.h-=t.g.get(e).length,t=t.g,wr(t.h,e)&&(delete t.h[e],t.i--,t.g.length>2*t.i&&zl(t)))}function Bg(t,e){return Gn(t),e=gs(t,e),wr(t.g.h,e)}$.forEach=function(t,e){Gn(this),this.g.forEach(function(n,r){dg(n,function(s){t.call(e,s,r,this)},this)},this)};$.T=function(){Gn(this);for(var t=this.g.R(),e=this.g.T(),n=[],r=0;r<e.length;r++)for(var s=t[r],i=0;i<s.length;i++)n.push(e[r]);return n};$.R=function(t){Gn(this);var e=[];if(typeof t=="string")Bg(this,t)&&(e=Hf(e,this.g.get(gs(this,t))));else{t=this.g.R();for(var n=0;n<t.length;n++)e=Hf(e,t[n])}return e};$.set=function(t,e){return Gn(this),this.i=null,t=gs(this,t),Bg(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};$.get=function(t,e){return t?(t=this.R(t),0<t.length?String(t[0]):e):e};function jg(t,e,n){Vg(t,e),0<n.length&&(t.i=null,t.g.set(gs(t,e),Dl(n)),t.h+=n.length)}$.toString=function(){if(this.i)return this.i;if(!this.g)return"";for(var t=[],e=this.g.T(),n=0;n<e.length;n++){var r=e[n],s=encodeURIComponent(String(r));r=this.R(r);for(var i=0;i<r.length;i++){var o=s;r[i]!==""&&(o+="="+encodeURIComponent(String(r[i]))),t.push(o)}}return this.i=t.join("&")};function gs(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function ZI(t,e){e&&!t.j&&(Gn(t),t.i=null,t.g.forEach(function(n,r){var s=r.toLowerCase();r!=s&&(Vg(this,r),jg(this,s,n))},t)),t.j=e}var eS=class{constructor(t,e){this.h=t,this.g=e}};function qg(t){this.l=t||tS,Z.PerformanceNavigationTiming?(t=Z.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(Z.g&&Z.g.Ea&&Z.g.Ea()&&Z.g.Ea().Zb),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var tS=10;function Hg(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function zg(t){return t.h?1:t.g?t.g.size:0}function Su(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function Wl(t,e){t.g?t.g.add(e):t.h=e}function Wg(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}qg.prototype.cancel=function(){if(this.i=Kg(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function Kg(t){if(t.h!=null)return t.i.concat(t.h.D);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.D);return e}return Dl(t.i)}function Kl(){}Kl.prototype.stringify=function(t){return Z.JSON.stringify(t,void 0)};Kl.prototype.parse=function(t){return Z.JSON.parse(t,void 0)};function nS(){this.g=new Kl}function rS(t,e,n){const r=n||"";try{Hl(t,function(s,i){let o=s;xi(s)&&(o=$l(s)),e.push(r+i+"="+encodeURIComponent(o))})}catch(s){throw e.push(r+"type="+encodeURIComponent("_badmap")),s}}function sS(t,e){const n=new Oa;if(Z.Image){const r=new Image;r.onload=no(so,n,r,"TestLoadImage: loaded",!0,e),r.onerror=no(so,n,r,"TestLoadImage: error",!1,e),r.onabort=no(so,n,r,"TestLoadImage: abort",!1,e),r.ontimeout=no(so,n,r,"TestLoadImage: timeout",!1,e),Z.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=t}else e(!1)}function so(t,e,n,r,s){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,s(r)}catch{}}function Vi(t){this.l=t.$b||null,this.j=t.ib||!1}at(Vi,Bl);Vi.prototype.g=function(){return new Ua(this.l,this.j)};Vi.prototype.i=function(t){return function(){return t}}({});function Ua(t,e){Ze.call(this),this.D=t,this.u=e,this.m=void 0,this.readyState=Gl,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}at(Ua,Ze);var Gl=0;$=Ua.prototype;$.open=function(t,e){if(this.readyState!=Gl)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,yi(this)};$.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.D||Z).fetch(new Request(this.B,e)).then(this.Va.bind(this),this.ha.bind(this))};$.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted."),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Bi(this)),this.readyState=Gl};$.Va=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,yi(this)),this.g&&(this.readyState=3,yi(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ta.bind(this),this.ha.bind(this));else if(typeof Z.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;Gg(this)}else t.text().then(this.Ua.bind(this),this.ha.bind(this))};function Gg(t){t.j.read().then(t.Sa.bind(t)).catch(t.ha.bind(t))}$.Sa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?Bi(this):yi(this),this.readyState==3&&Gg(this)}};$.Ua=function(t){this.g&&(this.response=this.responseText=t,Bi(this))};$.Ta=function(t){this.g&&(this.response=t,Bi(this))};$.ha=function(){this.g&&Bi(this)};function Bi(t){t.readyState=4,t.l=null,t.j=null,t.A=null,yi(t)}$.setRequestHeader=function(t,e){this.v.append(t,e)};$.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};$.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function yi(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(Ua.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var iS=Z.JSON.parse;function He(t){Ze.call(this),this.headers=new ms,this.u=t||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=Xg,this.K=this.L=!1}at(He,Ze);var Xg="",oS=/^https?$/i,aS=["POST","PUT"];$=He.prototype;$.ea=function(t,e,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+t);e=e?e.toUpperCase():"GET",this.H=t,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():Eu.g(),this.C=this.u?Jf(this.u):Jf(Eu),this.g.onreadystatechange=rt(this.Fa,this);try{this.F=!0,this.g.open(e,String(t),!0),this.F=!1}catch(i){td(this,i);return}t=n||"";const s=new ms(this.headers);r&&Hl(r,function(i,o){s.set(o,i)}),r=vI(s.T()),n=Z.FormData&&t instanceof Z.FormData,!(0<=fg(aS,e))||r||n||s.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8"),s.forEach(function(i,o){this.g.setRequestHeader(o,i)},this),this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{Jg(this),0<this.B&&((this.K=cS(this.g))?(this.g.timeout=this.B,this.g.ontimeout=rt(this.pa,this)):this.A=Vl(this.pa,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(i){td(this,i)}};function cS(t){return Zr&&TI()&&typeof t.timeout=="number"&&t.ontimeout!==void 0}function uS(t){return t.toLowerCase()=="content-type"}$.pa=function(){typeof kl<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,st(this,"timeout"),this.abort(8))};function td(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,Qg(t),Fa(t)}function Qg(t){t.D||(t.D=!0,st(t,"complete"),st(t,"error"))}$.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,st(this,"complete"),st(this,"abort"),Fa(this))};$.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Fa(this,!0)),He.Z.M.call(this)};$.Fa=function(){this.s||(this.F||this.v||this.l?Yg(this):this.cb())};$.cb=function(){Yg(this)};function Yg(t){if(t.h&&typeof kl<"u"&&(!t.C[1]||fn(t)!=4||t.ba()!=2)){if(t.v&&fn(t)==4)Vl(t.Fa,0,t);else if(st(t,"readystatechange"),fn(t)==4){t.h=!1;try{const a=t.ba();e:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var r;if(r=a===0){var s=String(t.H).match(Fg)[1]||null;if(!s&&Z.self&&Z.self.location){var i=Z.self.location.protocol;s=i.substr(0,i.length-1)}r=!oS.test(s?s.toLowerCase():"")}n=r}if(n)st(t,"complete"),st(t,"success");else{t.m=6;try{var o=2<fn(t)?t.g.statusText:""}catch{o=""}t.j=o+" ["+t.ba()+"]",Qg(t)}}finally{Fa(t)}}}}function Fa(t,e){if(t.g){Jg(t);const n=t.g,r=t.C[0]?Fo:null;t.g=null,t.C=null,e||st(t,"ready");try{n.onreadystatechange=r}catch{}}}function Jg(t){t.g&&t.K&&(t.g.ontimeout=null),t.A&&(Z.clearTimeout(t.A),t.A=null)}function fn(t){return t.g?t.g.readyState:0}$.ba=function(){try{return 2<fn(this)?this.g.status:-1}catch{return-1}};$.ga=function(){try{return this.g?this.g.responseText:""}catch{return""}};$.Qa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),iS(e)}};function nd(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.J){case Xg:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}$.Da=function(){return this.m};$.La=function(){return typeof this.j=="string"?this.j:String(this.j)};function lS(t){let e="";return Nl(t,function(n,r){e+=r,e+=":",e+=n,e+=`\r
`}),e}function Xl(t,e,n){e:{for(r in n){var r=!1;break e}r=!0}r||(n=lS(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):Me(t,e,n))}function Cs(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function Zg(t){this.za=0,this.l=[],this.h=new Oa,this.la=this.oa=this.F=this.W=this.g=this.sa=this.D=this.aa=this.o=this.P=this.s=null,this.Za=this.V=0,this.Xa=Cs("failFast",!1,t),this.N=this.v=this.u=this.m=this.j=null,this.X=!0,this.I=this.ta=this.U=-1,this.Y=this.A=this.C=0,this.Pa=Cs("baseRetryDelayMs",5e3,t),this.$a=Cs("retryDelaySeedMs",1e4,t),this.Ya=Cs("forwardChannelMaxRetries",2,t),this.ra=Cs("forwardChannelRequestTimeoutMs",2e4,t),this.qa=t&&t.xmlHttpFactory||void 0,this.Ba=t&&t.Yb||!1,this.K=void 0,this.H=t&&t.supportsCrossDomainXhr||!1,this.J="",this.i=new qg(t&&t.concurrentRequestLimit),this.Ca=new nS,this.ja=t&&t.fastHandshake||!1,this.Ra=t&&t.Wb||!1,t&&t.Aa&&this.h.Aa(),t&&t.forceLongPolling&&(this.X=!1),this.$=!this.ja&&this.X&&t&&t.detectBufferingProxy||!1,this.ka=void 0,this.O=0,this.L=!1,this.B=null,this.Wa=!t||t.Xb!==!1}$=Zg.prototype;$.ma=8;$.G=1;function Ql(t){if(ey(t),t.G==3){var e=t.V++,n=yn(t.F);Me(n,"SID",t.J),Me(n,"RID",e),Me(n,"TYPE","terminate"),ji(t,n),e=new Ui(t,t.h,e,void 0),e.K=2,e.v=$a(yn(n)),n=!1,Z.navigator&&Z.navigator.sendBeacon&&(n=Z.navigator.sendBeacon(e.v.toString(),"")),!n&&Z.Image&&(new Image().src=e.v,n=!0),n||(e.g=cy(e.l,null),e.g.ea(e.v)),e.F=Date.now(),Fi(e)}oy(t)}$.hb=function(t){try{this.h.info("Origin Trials invoked: "+t)}catch{}};function Va(t){t.g&&(Jl(t),t.g.cancel(),t.g=null)}function ey(t){Va(t),t.u&&(Z.clearTimeout(t.u),t.u=null),Wo(t),t.i.cancel(),t.m&&(typeof t.m=="number"&&Z.clearTimeout(t.m),t.m=null)}function kc(t,e){t.l.push(new eS(t.Za++,e)),t.G==3&&Ba(t)}function Ba(t){Hg(t.i)||t.m||(t.m=!0,Ul(t.Ha,t),t.C=0)}function hS(t,e){return zg(t.i)>=t.i.j-(t.m?1:0)?!1:t.m?(t.l=e.D.concat(t.l),!0):t.G==1||t.G==2||t.C>=(t.Xa?0:t.Ya)?!1:(t.m=Li(rt(t.Ha,t,e),iy(t,t.C)),t.C++,!0)}$.Ha=function(t){if(this.m)if(this.m=null,this.G==1){if(!t){this.V=Math.floor(1e5*Math.random()),t=this.V++;const s=new Ui(this,this.h,t,void 0);let i=this.s;if(this.P&&(i?(i=pg(i),mg(i,this.P)):i=this.P),this.o===null&&(s.H=i),this.ja)e:{for(var e=0,n=0;n<this.l.length;n++){t:{var r=this.l[n];if("__data__"in r.g&&(r=r.g.__data__,typeof r=="string")){r=r.length;break t}r=void 0}if(r===void 0)break;if(e+=r,4096<e){e=n;break e}if(e===4096||n===this.l.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=ty(this,s,e),n=yn(this.F),Me(n,"RID",t),Me(n,"CVER",22),this.D&&Me(n,"X-HTTP-Session-Id",this.D),ji(this,n),this.o&&i&&Xl(n,this.o,i),Wl(this.i,s),this.Ra&&Me(n,"TYPE","init"),this.ja?(Me(n,"$req",e),Me(n,"SID","null"),s.$=!0,Tu(s,n,null)):Tu(s,n,e),this.G=2}}else this.G==3&&(t?rd(this,t):this.l.length==0||Hg(this.i)||rd(this))};function rd(t,e){var n;e?n=e.m:n=t.V++;const r=yn(t.F);Me(r,"SID",t.J),Me(r,"RID",n),Me(r,"AID",t.U),ji(t,r),t.o&&t.s&&Xl(r,t.o,t.s),n=new Ui(t,t.h,n,t.C+1),t.o===null&&(n.H=t.s),e&&(t.l=e.D.concat(t.l)),e=ty(t,n,1e3),n.setTimeout(Math.round(.5*t.ra)+Math.round(.5*t.ra*Math.random())),Wl(t.i,n),Tu(n,r,e)}function ji(t,e){t.j&&Hl({},function(n,r){Me(e,r,n)})}function ty(t,e,n){n=Math.min(t.l.length,n);var r=t.j?rt(t.j.Oa,t.j,t):null;e:{var s=t.l;let i=-1;for(;;){const o=["count="+n];i==-1?0<n?(i=s[0].h,o.push("ofs="+i)):i=0:o.push("ofs="+i);let a=!0;for(let c=0;c<n;c++){let u=s[c].h;const l=s[c].g;if(u-=i,0>u)i=Math.max(0,s[c].h-100),a=!1;else try{rS(l,o,"req"+u+"_")}catch{r&&r(l)}}if(a){r=o.join("&");break e}}}return t=t.l.splice(0,n),e.D=t,r}function ny(t){t.g||t.u||(t.Y=1,Ul(t.Ga,t),t.A=0)}function Yl(t){return t.g||t.u||3<=t.A?!1:(t.Y++,t.u=Li(rt(t.Ga,t),iy(t,t.A)),t.A++,!0)}$.Ga=function(){if(this.u=null,ry(this),this.$&&!(this.L||this.g==null||0>=this.O)){var t=2*this.O;this.h.info("BP detection timer enabled: "+t),this.B=Li(rt(this.bb,this),t)}};$.bb=function(){this.B&&(this.B=null,this.h.info("BP detection timeout reached."),this.h.info("Buffering proxy detected and switch to long-polling!"),this.N=!1,this.L=!0,yt(10),Va(this),ry(this))};function Jl(t){t.B!=null&&(Z.clearTimeout(t.B),t.B=null)}function ry(t){t.g=new Ui(t,t.h,"rpc",t.Y),t.o===null&&(t.g.H=t.s),t.g.O=0;var e=yn(t.oa);Me(e,"RID","rpc"),Me(e,"SID",t.J),Me(e,"CI",t.N?"0":"1"),Me(e,"AID",t.U),ji(t,e),Me(e,"TYPE","xmlhttp"),t.o&&t.s&&Xl(e,t.o,t.s),t.K&&t.g.setTimeout(t.K);var n=t.g;t=t.la,n.K=1,n.v=$a(yn(e)),n.s=null,n.U=!0,Mg(n,t)}$.ab=function(){this.v!=null&&(this.v=null,Va(this),Yl(this),yt(19))};function Wo(t){t.v!=null&&(Z.clearTimeout(t.v),t.v=null)}function sy(t,e){var n=null;if(t.g==e){Wo(t),Jl(t),t.g=null;var r=2}else if(Su(t.i,e))n=e.D,Wg(t.i,e),r=1;else return;if(t.I=e.N,t.G!=0){if(e.i)if(r==1){n=e.s?e.s.length:0,e=Date.now()-e.F;var s=t.C;r=Pa(),st(r,new Ng(r,n)),Ba(t)}else ny(t);else if(s=e.o,s==3||s==0&&0<t.I||!(r==1&&hS(t,e)||r==2&&Yl(t)))switch(n&&0<n.length&&(e=t.i,e.i=e.i.concat(n)),s){case 1:ar(t,5);break;case 4:ar(t,10);break;case 3:ar(t,6);break;default:ar(t,2)}}}function iy(t,e){let n=t.Pa+Math.floor(Math.random()*t.$a);return t.j||(n*=2),n*e}function ar(t,e){if(t.h.info("Error code "+e),e==2){var n=null;t.j&&(n=null);var r=rt(t.jb,t);n||(n=new _r("//www.google.com/images/cleardot.gif"),Z.location&&Z.location.protocol=="http"||qo(n,"https"),$a(n)),sS(n.toString(),r)}else yt(2);t.G=0,t.j&&t.j.va(e),oy(t),ey(t)}$.jb=function(t){t?(this.h.info("Successfully pinged google.com"),yt(2)):(this.h.info("Failed to ping google.com"),yt(1))};function oy(t){t.G=0,t.I=-1,t.j&&((Kg(t.i).length!=0||t.l.length!=0)&&(t.i.i.length=0,Dl(t.l),t.l.length=0),t.j.ua())}function ay(t,e,n){let r=WI(n);if(r.i!="")e&&Ho(r,e+"."+r.i),zo(r,r.m);else{const s=Z.location;r=KI(s.protocol,e?e+"."+s.hostname:s.hostname,+s.port,n)}return t.aa&&Nl(t.aa,function(s,i){Me(r,i,s)}),e=t.D,n=t.sa,e&&n&&Me(r,e,n),Me(r,"VER",t.ma),ji(t,r),r}function cy(t,e,n){if(e&&!t.H)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Ba&&!t.qa?new He(new Vi({ib:!0})):new He(t.qa),e.L=t.H,e}function uy(){}$=uy.prototype;$.xa=function(){};$.wa=function(){};$.va=function(){};$.ua=function(){};$.Oa=function(){};function Ko(){if(Zr&&!(10<=Number(II)))throw Error("Environmental error: no available transport.")}Ko.prototype.g=function(t,e){return new Rt(t,e)};function Rt(t,e){Ze.call(this),this.g=new Zg(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.ya&&(t?t["X-WebChannel-Client-Profile"]=e.ya:t={"X-WebChannel-Client-Profile":e.ya}),this.g.P=t,(t=e&&e.httpHeadersOverwriteParam)&&!Vo(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!Vo(e)&&(this.g.D=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new ys(this)}at(Rt,Ze);Rt.prototype.m=function(){this.g.j=this.j,this.A&&(this.g.H=!0);var t=this.g,e=this.l,n=this.h||void 0;t.Wa&&(t.h.info("Origin Trials enabled."),Ul(rt(t.hb,t,e))),yt(0),t.W=e,t.aa=n||{},t.N=t.X,t.F=ay(t,null,t.W),Ba(t)};Rt.prototype.close=function(){Ql(this.g)};Rt.prototype.u=function(t){if(typeof t=="string"){var e={};e.__data__=t,kc(this.g,e)}else this.v?(e={},e.__data__=$l(t),kc(this.g,e)):kc(this.g,t)};Rt.prototype.M=function(){this.g.j=null,delete this.j,Ql(this.g),delete this.g,Rt.Z.M.call(this)};function ly(t){jl.call(this);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}at(ly,jl);function hy(){ql.call(this),this.status=1}at(hy,ql);function ys(t){this.g=t}at(ys,uy);ys.prototype.xa=function(){st(this.g,"a")};ys.prototype.wa=function(t){st(this.g,new ly(t))};ys.prototype.va=function(t){st(this.g,new hy)};ys.prototype.ua=function(){st(this.g,"b")};Ko.prototype.createWebChannel=Ko.prototype.g;Rt.prototype.send=Rt.prototype.u;Rt.prototype.open=Rt.prototype.m;Rt.prototype.close=Rt.prototype.close;xa.NO_ERROR=0;xa.TIMEOUT=8;xa.HTTP_ERROR=6;Og.COMPLETE="complete";Pg.EventType=$i;$i.OPEN="a";$i.CLOSE="b";$i.ERROR="c";$i.MESSAGE="d";Ze.prototype.listen=Ze.prototype.N;He.prototype.listenOnce=He.prototype.O;He.prototype.getLastError=He.prototype.La;He.prototype.getLastErrorCode=He.prototype.Da;He.prototype.getStatus=He.prototype.ba;He.prototype.getResponseJson=He.prototype.Qa;He.prototype.getResponseText=He.prototype.ga;He.prototype.send=He.prototype.ea;var fS=function(){return new Ko},dS=function(){return Pa()},Dc=xa,pS=Og,mS=Sr,sd={rb:0,ub:1,vb:2,Ob:3,Tb:4,Qb:5,Rb:6,Pb:7,Nb:8,Sb:9,PROXY:10,NOPROXY:11,Lb:12,Hb:13,Ib:14,Gb:15,Jb:16,Kb:17,nb:18,mb:19,ob:20},gS=Vi,io=Pg,yS=He;const id="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _t{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}_t.UNAUTHENTICATED=new _t(null),_t.GOOGLE_CREDENTIALS=new _t("google-credentials-uid"),_t.FIRST_PARTY=new _t("first-party-uid"),_t.MOCK_USER=new _t("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let vs="9.9.2";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Er=new yl("@firebase/firestore");function od(){return Er.logLevel}function H(t,...e){if(Er.logLevel<=ge.DEBUG){const n=e.map(Zl);Er.debug(`Firestore (${vs}): ${t}`,...n)}}function vn(t,...e){if(Er.logLevel<=ge.ERROR){const n=e.map(Zl);Er.error(`Firestore (${vs}): ${t}`,...n)}}function ad(t,...e){if(Er.logLevel<=ge.WARN){const n=e.map(Zl);Er.warn(`Firestore (${vs}): ${t}`,...n)}}function Zl(t){if(typeof t=="string")return t;try{return e=t,JSON.stringify(e)}catch{return t}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function te(t="Unexpected state"){const e=`FIRESTORE (${vs}) INTERNAL ASSERTION FAILED: `+t;throw vn(e),new Error(e)}function Re(t,e){t||te()}function se(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const b={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class U extends rn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fn{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vS{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class wS{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(_t.UNAUTHENTICATED))}shutdown(){}}class _S{constructor(e){this.t=e,this.currentUser=_t.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let r=this.i;const s=c=>this.i!==r?(r=this.i,n(c)):Promise.resolve();let i=new Fn;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new Fn,e.enqueueRetryable(()=>s(this.currentUser))};const o=()=>{const c=i;e.enqueueRetryable(async()=>{await c.promise,await s(this.currentUser)})},a=c=>{H("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(c=>a(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?a(c):(H("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new Fn)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(H("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Re(typeof r.accessToken=="string"),new vS(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return Re(e===null||typeof e=="string"),new _t(e)}}class ES{constructor(e,n,r){this.type="FirstParty",this.user=_t.FIRST_PARTY,this.headers=new Map,this.headers.set("X-Goog-AuthUser",n);const s=e.auth.getAuthHeaderValueForFirstParty([]);s&&this.headers.set("Authorization",s),r&&this.headers.set("X-Goog-Iam-Authorization-Token",r)}}class bS{constructor(e,n,r){this.h=e,this.l=n,this.m=r}getToken(){return Promise.resolve(new ES(this.h,this.l,this.m))}start(e,n){e.enqueueRetryable(()=>n(_t.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class TS{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class IS{constructor(e){this.g=e,this.forceRefresh=!1,this.appCheck=null,this.p=null}start(e,n){const r=i=>{i.error!=null&&H("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.p;return this.p=i.token,H("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>r(i))};const s=i=>{H("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.appCheck.addTokenListener(this.o)};this.g.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.g.getImmediate({optional:!0});i?s(i):H("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(Re(typeof n.token=="string"),this.p=n.token,new TS(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function SS(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fy{static I(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const s=SS(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<n&&(r+=e.charAt(s[i]%e.length))}return r}}function ye(t,e){return t<e?-1:t>e?1:0}function es(t,e,n){return t.length===e.length&&t.every((r,s)=>n(r,e[s]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class je{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new U(b.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new U(b.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new U(b.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new U(b.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return je.fromMillis(Date.now())}static fromDate(e){return je.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new je(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?ye(this.nanoseconds,e.nanoseconds):ye(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ce{constructor(e){this.timestamp=e}static fromTimestamp(e){return new ce(e)}static min(){return new ce(new je(0,0))}static max(){return new ce(new je(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vi{constructor(e,n,r){n===void 0?n=0:n>e.length&&te(),r===void 0?r=e.length-n:r>e.length-n&&te(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return vi.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof vi?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let s=0;s<r;s++){const i=e.get(s),o=n.get(s);if(i<o)return-1;if(i>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class Ne extends vi{construct(e,n,r){return new Ne(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new U(b.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(s=>s.length>0))}return new Ne(n)}static emptyPath(){return new Ne([])}}const CS=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class ct extends vi{construct(e,n,r){return new ct(e,n,r)}static isValidIdentifier(e){return CS.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),ct.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new ct(["__name__"])}static fromServerFormat(e){const n=[];let r="",s=0;const i=()=>{if(r.length===0)throw new U(b.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;s<e.length;){const a=e[s];if(a==="\\"){if(s+1===e.length)throw new U(b.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[s+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new U(b.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=c,s+=2}else a==="`"?(o=!o,s++):a!=="."||o?(r+=a,s++):(i(),s++)}if(i(),o)throw new U(b.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new ct(n)}static emptyPath(){return new ct([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class z{constructor(e){this.path=e}static fromPath(e){return new z(Ne.fromString(e))}static fromName(e){return new z(Ne.fromString(e).popFirst(5))}static empty(){return new z(Ne.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Ne.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Ne.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new z(new Ne(e.slice()))}}function AS(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,s=ce.fromTimestamp(r===1e9?new je(n+1,0):new je(n,r));return new Hn(s,z.empty(),e)}function RS(t){return new Hn(t.readTime,t.key,-1)}class Hn{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new Hn(ce.min(),z.empty(),-1)}static max(){return new Hn(ce.max(),z.empty(),-1)}}function kS(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=z.comparator(t.documentKey,e.documentKey),n!==0?n:ye(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const DS="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class NS{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function qi(t){if(t.code!==b.FAILED_PRECONDITION||t.message!==DS)throw t;H("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class C{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&te(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new C((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(n,i).next(r,s)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof C?n:C.resolve(n)}catch(n){return C.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):C.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):C.reject(n)}static resolve(e){return new C((n,r)=>{n(e)})}static reject(e){return new C((n,r)=>{r(e)})}static waitFor(e){return new C((n,r)=>{let s=0,i=0,o=!1;e.forEach(a=>{++s,a.next(()=>{++i,o&&i===s&&n()},c=>r(c))}),o=!0,i===s&&n()})}static or(e){let n=C.resolve(!1);for(const r of e)n=n.next(s=>s?C.resolve(s):r());return n}static forEach(e,n){const r=[];return e.forEach((s,i)=>{r.push(n.call(this,s,i))}),this.waitFor(r)}static mapArray(e,n){return new C((r,s)=>{const i=e.length,o=new Array(i);let a=0;for(let c=0;c<i;c++){const u=c;n(e[u]).next(l=>{o[u]=l,++a,a===i&&r(o)},l=>s(l))}})}static doWhile(e,n){return new C((r,s)=>{const i=()=>{e()===!0?n().next(()=>{i()},s):r()};i()})}}function Hi(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eh{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.it(r),this.rt=r=>n.writeSequenceNumber(r))}it(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.rt&&this.rt(e),e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cd(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Cr(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function dy(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */eh.ot=-1;class Ge{constructor(e,n){this.comparator=e,this.root=n||tt.EMPTY}insert(e,n){return new Ge(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,tt.BLACK,null,null))}remove(e){return new Ge(this.comparator,this.root.remove(e,this.comparator).copy(null,null,tt.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return n+r.left.size;s<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new oo(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new oo(this.root,e,this.comparator,!1)}getReverseIterator(){return new oo(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new oo(this.root,e,this.comparator,!0)}}class oo{constructor(e,n,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?r(e.key,n):1,n&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class tt{constructor(e,n,r,s,i){this.key=e,this.value=n,this.color=r!=null?r:tt.RED,this.left=s!=null?s:tt.EMPTY,this.right=i!=null?i:tt.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,s,i){return new tt(e!=null?e:this.key,n!=null?n:this.value,r!=null?r:this.color,s!=null?s:this.left,i!=null?i:this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,n,r),null):i===0?s.copy(null,n,null,null,null):s.copy(null,null,null,null,s.right.insert(e,n,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return tt.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,s=this;if(n(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),n(e,s.key)===0){if(s.right.isEmpty())return tt.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,tt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,tt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw te();const e=this.left.check();if(e!==this.right.check())throw te();return e+(this.isRed()?0:1)}}tt.EMPTY=null,tt.RED=!0,tt.BLACK=!1;tt.EMPTY=new class{constructor(){this.size=0}get key(){throw te()}get value(){throw te()}get color(){throw te()}get left(){throw te()}get right(){throw te()}copy(t,e,n,r,s){return this}insert(t,e,n){return new tt(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class We{constructor(e){this.comparator=e,this.data=new Ge(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;n(s.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new ud(this.data.getIterator())}getIteratorFrom(e){return new ud(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof We)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new We(this.comparator);return n.data=e,n}}class ud{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mt{constructor(e){this.fields=e,e.sort(ct.comparator)}static empty(){return new Mt([])}unionWith(e){let n=new We(ct.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new Mt(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return es(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ot{constructor(e){this.binaryString=e}static fromBase64String(e){const n=atob(e);return new ot(n)}static fromUint8Array(e){const n=function(r){let s="";for(let i=0;i<r.length;++i)s+=String.fromCharCode(r[i]);return s}(e);return new ot(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const n=new Uint8Array(e.length);for(let r=0;r<e.length;r++)n[r]=e.charCodeAt(r);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return ye(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}ot.EMPTY_BYTE_STRING=new ot("");const OS=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function zn(t){if(Re(!!t),typeof t=="string"){let e=0;const n=OS.exec(t);if(Re(!!n),n[1]){let s=n[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Ve(t.seconds),nanos:Ve(t.nanos)}}function Ve(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function ts(t){return typeof t=="string"?ot.fromBase64String(t):ot.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function py(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function my(t){const e=t.mapValue.fields.__previous_value__;return py(e)?my(e):e}function wi(t){const e=zn(t.mapValue.fields.__local_write_time__.timestampValue);return new je(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PS{constructor(e,n,r,s,i,o,a,c){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.useFetchStreams=c}}class ns{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new ns("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof ns&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ja(t){return t==null}function Go(t){return t===0&&1/t==-1/0}function xS(t){return typeof t=="number"&&Number.isInteger(t)&&!Go(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ao={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function br(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?py(t)?4:MS(t)?9007199254740991:10:te()}function nn(t,e){if(t===e)return!0;const n=br(t);if(n!==br(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return wi(t).isEqual(wi(e));case 3:return function(r,s){if(typeof r.timestampValue=="string"&&typeof s.timestampValue=="string"&&r.timestampValue.length===s.timestampValue.length)return r.timestampValue===s.timestampValue;const i=zn(r.timestampValue),o=zn(s.timestampValue);return i.seconds===o.seconds&&i.nanos===o.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(r,s){return ts(r.bytesValue).isEqual(ts(s.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(r,s){return Ve(r.geoPointValue.latitude)===Ve(s.geoPointValue.latitude)&&Ve(r.geoPointValue.longitude)===Ve(s.geoPointValue.longitude)}(t,e);case 2:return function(r,s){if("integerValue"in r&&"integerValue"in s)return Ve(r.integerValue)===Ve(s.integerValue);if("doubleValue"in r&&"doubleValue"in s){const i=Ve(r.doubleValue),o=Ve(s.doubleValue);return i===o?Go(i)===Go(o):isNaN(i)&&isNaN(o)}return!1}(t,e);case 9:return es(t.arrayValue.values||[],e.arrayValue.values||[],nn);case 10:return function(r,s){const i=r.mapValue.fields||{},o=s.mapValue.fields||{};if(cd(i)!==cd(o))return!1;for(const a in i)if(i.hasOwnProperty(a)&&(o[a]===void 0||!nn(i[a],o[a])))return!1;return!0}(t,e);default:return te()}}function _i(t,e){return(t.values||[]).find(n=>nn(n,e))!==void 0}function rs(t,e){if(t===e)return 0;const n=br(t),r=br(e);if(n!==r)return ye(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return ye(t.booleanValue,e.booleanValue);case 2:return function(s,i){const o=Ve(s.integerValue||s.doubleValue),a=Ve(i.integerValue||i.doubleValue);return o<a?-1:o>a?1:o===a?0:isNaN(o)?isNaN(a)?0:-1:1}(t,e);case 3:return ld(t.timestampValue,e.timestampValue);case 4:return ld(wi(t),wi(e));case 5:return ye(t.stringValue,e.stringValue);case 6:return function(s,i){const o=ts(s),a=ts(i);return o.compareTo(a)}(t.bytesValue,e.bytesValue);case 7:return function(s,i){const o=s.split("/"),a=i.split("/");for(let c=0;c<o.length&&c<a.length;c++){const u=ye(o[c],a[c]);if(u!==0)return u}return ye(o.length,a.length)}(t.referenceValue,e.referenceValue);case 8:return function(s,i){const o=ye(Ve(s.latitude),Ve(i.latitude));return o!==0?o:ye(Ve(s.longitude),Ve(i.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(s,i){const o=s.values||[],a=i.values||[];for(let c=0;c<o.length&&c<a.length;++c){const u=rs(o[c],a[c]);if(u)return u}return ye(o.length,a.length)}(t.arrayValue,e.arrayValue);case 10:return function(s,i){if(s===ao.mapValue&&i===ao.mapValue)return 0;if(s===ao.mapValue)return 1;if(i===ao.mapValue)return-1;const o=s.fields||{},a=Object.keys(o),c=i.fields||{},u=Object.keys(c);a.sort(),u.sort();for(let l=0;l<a.length&&l<u.length;++l){const h=ye(a[l],u[l]);if(h!==0)return h;const f=rs(o[a[l]],c[u[l]]);if(f!==0)return f}return ye(a.length,u.length)}(t.mapValue,e.mapValue);default:throw te()}}function ld(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return ye(t,e);const n=zn(t),r=zn(e),s=ye(n.seconds,r.seconds);return s!==0?s:ye(n.nanos,r.nanos)}function Kr(t){return Cu(t)}function Cu(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(r){const s=zn(r);return`time(${s.seconds},${s.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?ts(t.bytesValue).toBase64():"referenceValue"in t?(n=t.referenceValue,z.fromName(n).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(r){let s="[",i=!0;for(const o of r.values||[])i?i=!1:s+=",",s+=Cu(o);return s+"]"}(t.arrayValue):"mapValue"in t?function(r){const s=Object.keys(r.fields||{}).sort();let i="{",o=!0;for(const a of s)o?o=!1:i+=",",i+=`${a}:${Cu(r.fields[a])}`;return i+"}"}(t.mapValue):te();var e,n}function hd(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function Au(t){return!!t&&"integerValue"in t}function th(t){return!!t&&"arrayValue"in t}function fd(t){return!!t&&"nullValue"in t}function dd(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Eo(t){return!!t&&"mapValue"in t}function Gs(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return Cr(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=Gs(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Gs(t.arrayValue.values[n]);return e}return Object.assign({},t)}function MS(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Et{constructor(e){this.value=e}static empty(){return new Et({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!Eo(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Gs(n)}setAll(e){let n=ct.emptyPath(),r={},s=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const c=this.getFieldsMap(n);this.applyChanges(c,r,s),r={},s=[],n=a.popLast()}o?r[a.lastSegment()]=Gs(o):s.push(a.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,r,s)}delete(e){const n=this.field(e.popLast());Eo(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return nn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=n.mapValue.fields[e.get(r)];Eo(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=s),n=s}return n.mapValue.fields}applyChanges(e,n,r){Cr(n,(s,i)=>e[s]=i);for(const s of r)delete e[s]}clone(){return new Et(Gs(this.value))}}function gy(t){const e=[];return Cr(t.fields,(n,r)=>{const s=new ct([n]);if(Eo(r)){const i=gy(r.mapValue).fields;if(i.length===0)e.push(s);else for(const o of i)e.push(s.child(o))}else e.push(s)}),new Mt(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nt{constructor(e,n,r,s,i,o){this.key=e,this.documentType=n,this.version=r,this.readTime=s,this.data=i,this.documentState=o}static newInvalidDocument(e){return new nt(e,0,ce.min(),ce.min(),Et.empty(),0)}static newFoundDocument(e,n,r){return new nt(e,1,n,ce.min(),r,0)}static newNoDocument(e,n){return new nt(e,2,n,ce.min(),Et.empty(),0)}static newUnknownDocument(e,n){return new nt(e,3,n,ce.min(),Et.empty(),2)}convertToFoundDocument(e,n){return this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Et.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Et.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=ce.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof nt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new nt(this.key,this.documentType,this.version,this.readTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LS{constructor(e,n=null,r=[],s=[],i=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=o,this.endAt=a,this.ut=null}}function pd(t,e=null,n=[],r=[],s=null,i=null,o=null){return new LS(t,e,n,r,s,i,o)}function nh(t){const e=se(t);if(e.ut===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>{return(s=r).field.canonicalString()+s.op.toString()+Kr(s.value);var s}).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),ja(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>Kr(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>Kr(r)).join(",")),e.ut=n}return e.ut}function $S(t){let e=t.path.canonicalString();return t.collectionGroup!==null&&(e+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(e+=`, filters: [${t.filters.map(n=>{return`${(r=n).field.canonicalString()} ${r.op} ${Kr(r.value)}`;var r}).join(", ")}]`),ja(t.limit)||(e+=", limit: "+t.limit),t.orderBy.length>0&&(e+=`, orderBy: [${t.orderBy.map(n=>function(r){return`${r.field.canonicalString()} (${r.dir})`}(n)).join(", ")}]`),t.startAt&&(e+=", startAt: ",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map(n=>Kr(n)).join(",")),t.endAt&&(e+=", endAt: ",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map(n=>Kr(n)).join(",")),`Target(${e})`}function rh(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let s=0;s<t.orderBy.length;s++)if(!zS(t.orderBy[s],e.orderBy[s]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let s=0;s<t.filters.length;s++)if(n=t.filters[s],r=e.filters[s],n.op!==r.op||!n.field.isEqual(r.field)||!nn(n.value,r.value))return!1;var n,r;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!gd(t.startAt,e.startAt)&&gd(t.endAt,e.endAt)}function Ru(t){return z.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}class vt extends class{}{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.ct(e,n,r):new US(e,n,r):n==="array-contains"?new BS(e,r):n==="in"?new jS(e,r):n==="not-in"?new qS(e,r):n==="array-contains-any"?new HS(e,r):new vt(e,n,r)}static ct(e,n,r){return n==="in"?new FS(e,r):new VS(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.at(rs(n,this.value)):n!==null&&br(this.value)===br(n)&&this.at(rs(n,this.value))}at(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return te()}}ht(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}}class US extends vt{constructor(e,n,r){super(e,n,r),this.key=z.fromName(r.referenceValue)}matches(e){const n=z.comparator(e.key,this.key);return this.at(n)}}class FS extends vt{constructor(e,n){super(e,"in",n),this.keys=yy("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class VS extends vt{constructor(e,n){super(e,"not-in",n),this.keys=yy("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function yy(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>z.fromName(r.referenceValue))}class BS extends vt{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return th(n)&&_i(n.arrayValue,this.value)}}class jS extends vt{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&_i(this.value.arrayValue,n)}}class qS extends vt{constructor(e,n){super(e,"not-in",n)}matches(e){if(_i(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!_i(this.value.arrayValue,n)}}class HS extends vt{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!th(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>_i(this.value.arrayValue,r))}}class Xo{constructor(e,n){this.position=e,this.inclusive=n}}class Gr{constructor(e,n="asc"){this.field=e,this.dir=n}}function zS(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}function md(t,e,n){let r=0;for(let s=0;s<t.position.length;s++){const i=e[s],o=t.position[s];if(i.field.isKeyField()?r=z.comparator(z.fromName(o.referenceValue),n.key):r=rs(o,n.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function gd(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!nn(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ws{constructor(e,n=null,r=[],s=[],i=null,o="F",a=null,c=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=o,this.startAt=a,this.endAt=c,this.lt=null,this.ft=null,this.startAt,this.endAt}}function WS(t,e,n,r,s,i,o,a){return new ws(t,e,n,r,s,i,o,a)}function qa(t){return new ws(t)}function yd(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function sh(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function ih(t){for(const e of t.filters)if(e.ht())return e.field;return null}function vy(t){return t.collectionGroup!==null}function Ei(t){const e=se(t);if(e.lt===null){e.lt=[];const n=ih(e),r=sh(e);if(n!==null&&r===null)n.isKeyField()||e.lt.push(new Gr(n)),e.lt.push(new Gr(ct.keyField(),"asc"));else{let s=!1;for(const i of e.explicitOrderBy)e.lt.push(i),i.field.isKeyField()&&(s=!0);if(!s){const i=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.lt.push(new Gr(ct.keyField(),i))}}}return e.lt}function wn(t){const e=se(t);if(!e.ft)if(e.limitType==="F")e.ft=pd(e.path,e.collectionGroup,Ei(e),e.filters,e.limit,e.startAt,e.endAt);else{const n=[];for(const i of Ei(e)){const o=i.dir==="desc"?"asc":"desc";n.push(new Gr(i.field,o))}const r=e.endAt?new Xo(e.endAt.position,e.endAt.inclusive):null,s=e.startAt?new Xo(e.startAt.position,e.startAt.inclusive):null;e.ft=pd(e.path,e.collectionGroup,n,e.filters,e.limit,r,s)}return e.ft}function ku(t,e,n){return new ws(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Ha(t,e){return rh(wn(t),wn(e))&&t.limitType===e.limitType}function wy(t){return`${nh(wn(t))}|lt:${t.limitType}`}function Du(t){return`Query(target=${$S(wn(t))}; limitType=${t.limitType})`}function oh(t,e){return e.isFoundDocument()&&function(n,r){const s=r.key.path;return n.collectionGroup!==null?r.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(s):z.isDocumentKey(n.path)?n.path.isEqual(s):n.path.isImmediateParentOf(s)}(t,e)&&function(n,r){for(const s of n.explicitOrderBy)if(!s.field.isKeyField()&&r.data.field(s.field)===null)return!1;return!0}(t,e)&&function(n,r){for(const s of n.filters)if(!s.matches(r))return!1;return!0}(t,e)&&function(n,r){return!(n.startAt&&!function(s,i,o){const a=md(s,i,o);return s.inclusive?a<=0:a<0}(n.startAt,Ei(n),r)||n.endAt&&!function(s,i,o){const a=md(s,i,o);return s.inclusive?a>=0:a>0}(n.endAt,Ei(n),r))}(t,e)}function KS(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function _y(t){return(e,n)=>{let r=!1;for(const s of Ei(t)){const i=GS(s,e,n);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function GS(t,e,n){const r=t.field.isKeyField()?z.comparator(e.key,n.key):function(s,i,o){const a=i.data.field(s),c=o.data.field(s);return a!==null&&c!==null?rs(a,c):te()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return te()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ey(t,e){if(t.dt){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Go(e)?"-0":e}}function by(t){return{integerValue:""+t}}function XS(t,e){return xS(e)?by(e):Ey(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class za{constructor(){this._=void 0}}function QS(t,e,n){return t instanceof Qo?function(r,s){const i={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:r.seconds,nanos:r.nanoseconds}}}};return s&&(i.fields.__previous_value__=s),{mapValue:i}}(n,e):t instanceof bi?Iy(t,e):t instanceof Ti?Sy(t,e):function(r,s){const i=Ty(r,s),o=vd(i)+vd(r._t);return Au(i)&&Au(r._t)?by(o):Ey(r.wt,o)}(t,e)}function YS(t,e,n){return t instanceof bi?Iy(t,e):t instanceof Ti?Sy(t,e):n}function Ty(t,e){return t instanceof Yo?Au(n=e)||function(r){return!!r&&"doubleValue"in r}(n)?e:{integerValue:0}:null;var n}class Qo extends za{}class bi extends za{constructor(e){super(),this.elements=e}}function Iy(t,e){const n=Cy(e);for(const r of t.elements)n.some(s=>nn(s,r))||n.push(r);return{arrayValue:{values:n}}}class Ti extends za{constructor(e){super(),this.elements=e}}function Sy(t,e){let n=Cy(e);for(const r of t.elements)n=n.filter(s=>!nn(s,r));return{arrayValue:{values:n}}}class Yo extends za{constructor(e,n){super(),this.wt=e,this._t=n}}function vd(t){return Ve(t.integerValue||t.doubleValue)}function Cy(t){return th(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function JS(t,e){return t.field.isEqual(e.field)&&function(n,r){return n instanceof bi&&r instanceof bi||n instanceof Ti&&r instanceof Ti?es(n.elements,r.elements,nn):n instanceof Yo&&r instanceof Yo?nn(n._t,r._t):n instanceof Qo&&r instanceof Qo}(t.transform,e.transform)}class ZS{constructor(e,n){this.version=e,this.transformResults=n}}class jt{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new jt}static exists(e){return new jt(void 0,e)}static updateTime(e){return new jt(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function bo(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Wa{}function Ay(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new ky(t.key,jt.none()):new zi(t.key,t.data,jt.none());{const n=t.data,r=Et.empty();let s=new We(ct.comparator);for(let i of e.fields)if(!s.has(i)){let o=n.field(i);o===null&&i.length>1&&(i=i.popLast(),o=n.field(i)),o===null?r.delete(i):r.set(i,o),s=s.add(i)}return new Xn(t.key,r,new Mt(s.toArray()),jt.none())}}function eC(t,e,n){t instanceof zi?function(r,s,i){const o=r.value.clone(),a=_d(r.fieldTransforms,s,i.transformResults);o.setAll(a),s.convertToFoundDocument(i.version,o).setHasCommittedMutations()}(t,e,n):t instanceof Xn?function(r,s,i){if(!bo(r.precondition,s))return void s.convertToUnknownDocument(i.version);const o=_d(r.fieldTransforms,s,i.transformResults),a=s.data;a.setAll(Ry(r)),a.setAll(o),s.convertToFoundDocument(i.version,a).setHasCommittedMutations()}(t,e,n):function(r,s,i){s.convertToNoDocument(i.version).setHasCommittedMutations()}(0,e,n)}function Xs(t,e,n,r){return t instanceof zi?function(s,i,o,a){if(!bo(s.precondition,i))return o;const c=s.value.clone(),u=Ed(s.fieldTransforms,a,i);return c.setAll(u),i.convertToFoundDocument(i.version,c).setHasLocalMutations(),null}(t,e,n,r):t instanceof Xn?function(s,i,o,a){if(!bo(s.precondition,i))return o;const c=Ed(s.fieldTransforms,a,i),u=i.data;return u.setAll(Ry(s)),u.setAll(c),i.convertToFoundDocument(i.version,u).setHasLocalMutations(),o===null?null:o.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(l=>l.field))}(t,e,n,r):function(s,i,o){return bo(s.precondition,i)?(i.convertToNoDocument(i.version).setHasLocalMutations(),null):o}(t,e,n)}function tC(t,e){let n=null;for(const r of t.fieldTransforms){const s=e.data.field(r.field),i=Ty(r.transform,s||null);i!=null&&(n===null&&(n=Et.empty()),n.set(r.field,i))}return n||null}function wd(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(n,r){return n===void 0&&r===void 0||!(!n||!r)&&es(n,r,(s,i)=>JS(s,i))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class zi extends Wa{constructor(e,n,r,s=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class Xn extends Wa{constructor(e,n,r,s,i=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function Ry(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function _d(t,e,n){const r=new Map;Re(t.length===n.length);for(let s=0;s<n.length;s++){const i=t[s],o=i.transform,a=e.data.field(i.field);r.set(i.field,YS(o,a,n[s]))}return r}function Ed(t,e,n){const r=new Map;for(const s of t){const i=s.transform,o=n.data.field(s.field);r.set(s.field,QS(i,o,e))}return r}class ky extends Wa{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class nC extends Wa{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rC{constructor(e){this.count=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Fe,he;function sC(t){switch(t){default:return te();case b.CANCELLED:case b.UNKNOWN:case b.DEADLINE_EXCEEDED:case b.RESOURCE_EXHAUSTED:case b.INTERNAL:case b.UNAVAILABLE:case b.UNAUTHENTICATED:return!1;case b.INVALID_ARGUMENT:case b.NOT_FOUND:case b.ALREADY_EXISTS:case b.PERMISSION_DENIED:case b.FAILED_PRECONDITION:case b.ABORTED:case b.OUT_OF_RANGE:case b.UNIMPLEMENTED:case b.DATA_LOSS:return!0}}function Dy(t){if(t===void 0)return vn("GRPC error has no .code"),b.UNKNOWN;switch(t){case Fe.OK:return b.OK;case Fe.CANCELLED:return b.CANCELLED;case Fe.UNKNOWN:return b.UNKNOWN;case Fe.DEADLINE_EXCEEDED:return b.DEADLINE_EXCEEDED;case Fe.RESOURCE_EXHAUSTED:return b.RESOURCE_EXHAUSTED;case Fe.INTERNAL:return b.INTERNAL;case Fe.UNAVAILABLE:return b.UNAVAILABLE;case Fe.UNAUTHENTICATED:return b.UNAUTHENTICATED;case Fe.INVALID_ARGUMENT:return b.INVALID_ARGUMENT;case Fe.NOT_FOUND:return b.NOT_FOUND;case Fe.ALREADY_EXISTS:return b.ALREADY_EXISTS;case Fe.PERMISSION_DENIED:return b.PERMISSION_DENIED;case Fe.FAILED_PRECONDITION:return b.FAILED_PRECONDITION;case Fe.ABORTED:return b.ABORTED;case Fe.OUT_OF_RANGE:return b.OUT_OF_RANGE;case Fe.UNIMPLEMENTED:return b.UNIMPLEMENTED;case Fe.DATA_LOSS:return b.DATA_LOSS;default:return te()}}(he=Fe||(Fe={}))[he.OK=0]="OK",he[he.CANCELLED=1]="CANCELLED",he[he.UNKNOWN=2]="UNKNOWN",he[he.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",he[he.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",he[he.NOT_FOUND=5]="NOT_FOUND",he[he.ALREADY_EXISTS=6]="ALREADY_EXISTS",he[he.PERMISSION_DENIED=7]="PERMISSION_DENIED",he[he.UNAUTHENTICATED=16]="UNAUTHENTICATED",he[he.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",he[he.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",he[he.ABORTED=10]="ABORTED",he[he.OUT_OF_RANGE=11]="OUT_OF_RANGE",he[he.UNIMPLEMENTED=12]="UNIMPLEMENTED",he[he.INTERNAL=13]="INTERNAL",he[he.UNAVAILABLE=14]="UNAVAILABLE",he[he.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _s{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,n]);s.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[n]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){Cr(this.inner,(n,r)=>{for(const[s,i]of r)e(s,i)})}isEmpty(){return dy(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iC=new Ge(z.comparator);function _n(){return iC}const Ny=new Ge(z.comparator);function $s(...t){let e=Ny;for(const n of t)e=e.insert(n.key,n);return e}function Oy(t){let e=Ny;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function cr(){return Qs()}function Py(){return Qs()}function Qs(){return new _s(t=>t.toString(),(t,e)=>t.isEqual(e))}const oC=new Ge(z.comparator),aC=new We(z.comparator);function le(...t){let e=aC;for(const n of t)e=e.add(n);return e}const cC=new We(ye);function xy(){return cC}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ka{constructor(e,n,r,s,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n){const r=new Map;return r.set(e,Wi.createSynthesizedTargetChangeForCurrentChange(e,n)),new Ka(ce.min(),r,xy(),_n(),le())}}class Wi{constructor(e,n,r,s,i){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n){return new Wi(ot.EMPTY_BYTE_STRING,n,le(),le(),le())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class To{constructor(e,n,r,s){this.gt=e,this.removedTargetIds=n,this.key=r,this.yt=s}}class My{constructor(e,n){this.targetId=e,this.It=n}}class Ly{constructor(e,n,r=ot.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=s}}class bd{constructor(){this.Tt=0,this.Et=Id(),this.At=ot.EMPTY_BYTE_STRING,this.Rt=!1,this.bt=!0}get current(){return this.Rt}get resumeToken(){return this.At}get Pt(){return this.Tt!==0}get vt(){return this.bt}Vt(e){e.approximateByteSize()>0&&(this.bt=!0,this.At=e)}St(){let e=le(),n=le(),r=le();return this.Et.forEach((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:n=n.add(s);break;case 1:r=r.add(s);break;default:te()}}),new Wi(this.At,this.Rt,e,n,r)}Dt(){this.bt=!1,this.Et=Id()}Ct(e,n){this.bt=!0,this.Et=this.Et.insert(e,n)}xt(e){this.bt=!0,this.Et=this.Et.remove(e)}Nt(){this.Tt+=1}kt(){this.Tt-=1}Mt(){this.bt=!0,this.Rt=!0}}class uC{constructor(e){this.Ot=e,this.Ft=new Map,this.$t=_n(),this.Bt=Td(),this.Lt=new We(ye)}Ut(e){for(const n of e.gt)e.yt&&e.yt.isFoundDocument()?this.qt(n,e.yt):this.Kt(n,e.key,e.yt);for(const n of e.removedTargetIds)this.Kt(n,e.key,e.yt)}Gt(e){this.forEachTarget(e,n=>{const r=this.Qt(n);switch(e.state){case 0:this.jt(n)&&r.Vt(e.resumeToken);break;case 1:r.kt(),r.Pt||r.Dt(),r.Vt(e.resumeToken);break;case 2:r.kt(),r.Pt||this.removeTarget(n);break;case 3:this.jt(n)&&(r.Mt(),r.Vt(e.resumeToken));break;case 4:this.jt(n)&&(this.Wt(n),r.Vt(e.resumeToken));break;default:te()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Ft.forEach((r,s)=>{this.jt(s)&&n(s)})}zt(e){const n=e.targetId,r=e.It.count,s=this.Ht(n);if(s){const i=s.target;if(Ru(i))if(r===0){const o=new z(i.path);this.Kt(n,o,nt.newNoDocument(o,ce.min()))}else Re(r===1);else this.Jt(n)!==r&&(this.Wt(n),this.Lt=this.Lt.add(n))}}Yt(e){const n=new Map;this.Ft.forEach((i,o)=>{const a=this.Ht(o);if(a){if(i.current&&Ru(a.target)){const c=new z(a.target.path);this.$t.get(c)!==null||this.Xt(o,c)||this.Kt(o,c,nt.newNoDocument(c,e))}i.vt&&(n.set(o,i.St()),i.Dt())}});let r=le();this.Bt.forEach((i,o)=>{let a=!0;o.forEachWhile(c=>{const u=this.Ht(c);return!u||u.purpose===2||(a=!1,!1)}),a&&(r=r.add(i))}),this.$t.forEach((i,o)=>o.setReadTime(e));const s=new Ka(e,n,this.Lt,this.$t,r);return this.$t=_n(),this.Bt=Td(),this.Lt=new We(ye),s}qt(e,n){if(!this.jt(e))return;const r=this.Xt(e,n.key)?2:0;this.Qt(e).Ct(n.key,r),this.$t=this.$t.insert(n.key,n),this.Bt=this.Bt.insert(n.key,this.Zt(n.key).add(e))}Kt(e,n,r){if(!this.jt(e))return;const s=this.Qt(e);this.Xt(e,n)?s.Ct(n,1):s.xt(n),this.Bt=this.Bt.insert(n,this.Zt(n).delete(e)),r&&(this.$t=this.$t.insert(n,r))}removeTarget(e){this.Ft.delete(e)}Jt(e){const n=this.Qt(e).St();return this.Ot.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Nt(e){this.Qt(e).Nt()}Qt(e){let n=this.Ft.get(e);return n||(n=new bd,this.Ft.set(e,n)),n}Zt(e){let n=this.Bt.get(e);return n||(n=new We(ye),this.Bt=this.Bt.insert(e,n)),n}jt(e){const n=this.Ht(e)!==null;return n||H("WatchChangeAggregator","Detected inactive target",e),n}Ht(e){const n=this.Ft.get(e);return n&&n.Pt?null:this.Ot.te(e)}Wt(e){this.Ft.set(e,new bd),this.Ot.getRemoteKeysForTarget(e).forEach(n=>{this.Kt(e,n,null)})}Xt(e,n){return this.Ot.getRemoteKeysForTarget(e).has(n)}}function Td(){return new Ge(z.comparator)}function Id(){return new Ge(z.comparator)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lC=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),hC=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))();class fC{constructor(e,n){this.databaseId=e,this.dt=n}}function Jo(t,e){return t.dt?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function $y(t,e){return t.dt?e.toBase64():e.toUint8Array()}function dC(t,e){return Jo(t,e.toTimestamp())}function pn(t){return Re(!!t),ce.fromTimestamp(function(e){const n=zn(e);return new je(n.seconds,n.nanos)}(t))}function ah(t,e){return function(n){return new Ne(["projects",n.projectId,"databases",n.database])}(t).child("documents").child(e).canonicalString()}function Uy(t){const e=Ne.fromString(t);return Re(By(e)),e}function Nu(t,e){return ah(t.databaseId,e.path)}function Nc(t,e){const n=Uy(e);if(n.get(1)!==t.databaseId.projectId)throw new U(b.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new U(b.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new z(Fy(n))}function Ou(t,e){return ah(t.databaseId,e)}function pC(t){const e=Uy(t);return e.length===4?Ne.emptyPath():Fy(e)}function Pu(t){return new Ne(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function Fy(t){return Re(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function Sd(t,e,n){return{name:Nu(t,e),fields:n.value.mapValue.fields}}function mC(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:te()}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=function(c,u){return c.dt?(Re(u===void 0||typeof u=="string"),ot.fromBase64String(u||"")):(Re(u===void 0||u instanceof Uint8Array),ot.fromUint8Array(u||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(c){const u=c.code===void 0?b.UNKNOWN:Dy(c.code);return new U(u,c.message||"")}(o);n=new Ly(r,s,i,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=Nc(t,r.document.name),i=pn(r.document.updateTime),o=new Et({mapValue:{fields:r.document.fields}}),a=nt.newFoundDocument(s,i,o),c=r.targetIds||[],u=r.removedTargetIds||[];n=new To(c,u,a.key,a)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=Nc(t,r.document),i=r.readTime?pn(r.readTime):ce.min(),o=nt.newNoDocument(s,i),a=r.removedTargetIds||[];n=new To([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=Nc(t,r.document),i=r.removedTargetIds||[];n=new To([],i,s,null)}else{if(!("filter"in e))return te();{e.filter;const r=e.filter;r.targetId;const s=r.count||0,i=new rC(s),o=r.targetId;n=new My(o,i)}}return n}function gC(t,e){let n;if(e instanceof zi)n={update:Sd(t,e.key,e.value)};else if(e instanceof ky)n={delete:Nu(t,e.key)};else if(e instanceof Xn)n={update:Sd(t,e.key,e.data),updateMask:CC(e.fieldMask)};else{if(!(e instanceof nC))return te();n={verify:Nu(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(s,i){const o=i.transform;if(o instanceof Qo)return{fieldPath:i.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(o instanceof bi)return{fieldPath:i.field.canonicalString(),appendMissingElements:{values:o.elements}};if(o instanceof Ti)return{fieldPath:i.field.canonicalString(),removeAllFromArray:{values:o.elements}};if(o instanceof Yo)return{fieldPath:i.field.canonicalString(),increment:o._t};throw te()}(0,r))),e.precondition.isNone||(n.currentDocument=function(r,s){return s.updateTime!==void 0?{updateTime:dC(r,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:te()}(t,e.precondition)),n}function yC(t,e){return t&&t.length>0?(Re(e!==void 0),t.map(n=>function(r,s){let i=r.updateTime?pn(r.updateTime):pn(s);return i.isEqual(ce.min())&&(i=pn(s)),new ZS(i,r.transformResults||[])}(n,e))):[]}function vC(t,e){return{documents:[Ou(t,e.path)]}}function wC(t,e){const n={structuredQuery:{}},r=e.path;e.collectionGroup!==null?(n.parent=Ou(t,r),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=Ou(t,r.popLast()),n.structuredQuery.from=[{collectionId:r.lastSegment()}]);const s=function(c){if(c.length===0)return;const u=c.map(l=>function(h){if(h.op==="=="){if(dd(h.value))return{unaryFilter:{field:Dr(h.field),op:"IS_NAN"}};if(fd(h.value))return{unaryFilter:{field:Dr(h.field),op:"IS_NULL"}}}else if(h.op==="!="){if(dd(h.value))return{unaryFilter:{field:Dr(h.field),op:"IS_NOT_NAN"}};if(fd(h.value))return{unaryFilter:{field:Dr(h.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Dr(h.field),op:TC(h.op),value:h.value}}}(l));return u.length===1?u[0]:{compositeFilter:{op:"AND",filters:u}}}(e.filters);s&&(n.structuredQuery.where=s);const i=function(c){if(c.length!==0)return c.map(u=>function(l){return{field:Dr(l.field),direction:bC(l.dir)}}(u))}(e.orderBy);i&&(n.structuredQuery.orderBy=i);const o=function(c,u){return c.dt||ja(u)?u:{value:u}}(t,e.limit);var a;return o!==null&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt={before:(a=e.startAt).inclusive,values:a.position}),e.endAt&&(n.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(e.endAt)),n}function _C(t){let e=pC(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let s=null;if(r>0){Re(r===1);const l=n.from[0];l.allDescendants?s=l.collectionId:e=e.child(l.collectionId)}let i=[];n.where&&(i=Vy(n.where));let o=[];n.orderBy&&(o=n.orderBy.map(l=>function(h){return new Gr(Vr(h.field),function(f){switch(f){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(h.direction))}(l)));let a=null;n.limit&&(a=function(l){let h;return h=typeof l=="object"?l.value:l,ja(h)?null:h}(n.limit));let c=null;n.startAt&&(c=function(l){const h=!!l.before,f=l.values||[];return new Xo(f,h)}(n.startAt));let u=null;return n.endAt&&(u=function(l){const h=!l.before,f=l.values||[];return new Xo(f,h)}(n.endAt)),WS(e,s,o,i,a,"F",c,u)}function EC(t,e){const n=function(r,s){switch(s){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return te()}}(0,e.purpose);return n==null?null:{"goog-listen-tags":n}}function Vy(t){return t?t.unaryFilter!==void 0?[SC(t)]:t.fieldFilter!==void 0?[IC(t)]:t.compositeFilter!==void 0?t.compositeFilter.filters.map(e=>Vy(e)).reduce((e,n)=>e.concat(n)):te():[]}function bC(t){return lC[t]}function TC(t){return hC[t]}function Dr(t){return{fieldPath:t.canonicalString()}}function Vr(t){return ct.fromServerFormat(t.fieldPath)}function IC(t){return vt.create(Vr(t.fieldFilter.field),function(e){switch(e){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return te()}}(t.fieldFilter.op),t.fieldFilter.value)}function SC(t){switch(t.unaryFilter.op){case"IS_NAN":const e=Vr(t.unaryFilter.field);return vt.create(e,"==",{doubleValue:NaN});case"IS_NULL":const n=Vr(t.unaryFilter.field);return vt.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const r=Vr(t.unaryFilter.field);return vt.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const s=Vr(t.unaryFilter.field);return vt.create(s,"!=",{nullValue:"NULL_VALUE"});default:return te()}}function CC(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function By(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AC{constructor(e,n,r,s){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&eC(i,e,r[s])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=Xs(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=Xs(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=Py();return this.mutations.forEach(s=>{const i=e.get(s.key),o=i.overlayedDocument;let a=this.applyToLocalView(o,i.mutatedFields);a=n.has(s.key)?null:a;const c=Ay(o,a);c!==null&&r.set(s.key,c),o.isValidDocument()||o.convertToNoDocument(ce.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),le())}isEqual(e){return this.batchId===e.batchId&&es(this.mutations,e.mutations,(n,r)=>wd(n,r))&&es(this.baseMutations,e.baseMutations,(n,r)=>wd(n,r))}}class ch{constructor(e,n,r,s){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=s}static from(e,n,r){Re(e.mutations.length===r.length);let s=oC;const i=e.mutations;for(let o=0;o<i.length;o++)s=s.insert(i[o].key,r[o].version);return new ch(e,n,r,s)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RC{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fr{constructor(e,n,r,s,i=ce.min(),o=ce.min(),a=ot.EMPTY_BYTE_STRING){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a}withSequenceNumber(e){return new fr(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(e,n){return new fr(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e)}withLastLimboFreeSnapshotVersion(e){return new fr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kC{constructor(e){this.ne=e}}function DC(t){const e=_C({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?ku(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NC{constructor(){this.ze=new OC}addToCollectionParentIndex(e,n){return this.ze.add(n),C.resolve()}getCollectionParents(e,n){return C.resolve(this.ze.getEntries(n))}addFieldIndex(e,n){return C.resolve()}deleteFieldIndex(e,n){return C.resolve()}getDocumentsMatchingTarget(e,n){return C.resolve(null)}getIndexType(e,n){return C.resolve(0)}getFieldIndexes(e,n){return C.resolve([])}getNextCollectionGroupToUpdate(e){return C.resolve(null)}getMinOffset(e,n){return C.resolve(Hn.min())}getMinOffsetFromCollectionGroup(e,n){return C.resolve(Hn.min())}updateCollectionGroup(e,n,r){return C.resolve()}updateIndexEntries(e,n){return C.resolve()}}class OC{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n]||new We(Ne.comparator),i=!s.has(r);return this.index[n]=s.add(r),i}has(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n];return s&&s.has(r)}getEntries(e){return(this.index[e]||new We(Ne.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ss{constructor(e){this.En=e}next(){return this.En+=2,this.En}static An(){return new ss(0)}static Rn(){return new ss(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PC{constructor(){this.changes=new _s(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,nt.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?C.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xC{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MC{constructor(e,n,r,s){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(s=>(r=s,this.getBaseDocument(e,n,r))).next(s=>(r!==null&&Xs(r.mutation,s,Mt.empty(),je.now()),s))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,le()).next(()=>r))}getLocalViewOfDocuments(e,n,r=le()){const s=cr();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,r).next(i=>{let o=$s();return i.forEach((a,c)=>{o=o.insert(a,c.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=cr();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,le()))}populateOverlays(e,n,r){const s=[];return r.forEach(i=>{n.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(e,s).next(i=>{i.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,r,s){let i=_n();const o=Qs(),a=Qs();return n.forEach((c,u)=>{const l=r.get(u.key);s.has(u.key)&&(l===void 0||l.mutation instanceof Xn)?i=i.insert(u.key,u):l!==void 0&&(o.set(u.key,l.mutation.getFieldMask()),Xs(l.mutation,u,l.mutation.getFieldMask(),je.now()))}),this.recalculateAndSaveOverlays(e,i).next(c=>(c.forEach((u,l)=>o.set(u,l)),n.forEach((u,l)=>{var h;return a.set(u,new xC(l,(h=o.get(u))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(e,n){const r=Qs();let s=new Ge((o,a)=>o-a),i=le();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(c=>{const u=n.get(c);if(u===null)return;let l=r.get(c)||Mt.empty();l=a.applyToLocalView(u,l),r.set(c,l);const h=(s.get(a.batchId)||le()).add(c);s=s.insert(a.batchId,h)})}).next(()=>{const o=[],a=s.getReverseIterator();for(;a.hasNext();){const c=a.getNext(),u=c.key,l=c.value,h=Py();l.forEach(f=>{if(!i.has(f)){const p=Ay(n.get(f),r.get(f));p!==null&&h.set(f,p),i=i.add(f)}}),o.push(this.documentOverlayCache.saveOverlays(e,u,h))}return C.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r){return function(s){return z.isDocumentKey(s.path)&&s.collectionGroup===null&&s.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):vy(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r):this.getDocumentsMatchingCollectionQuery(e,n,r)}getNextDocuments(e,n,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,s).next(i=>{const o=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,s-i.size):C.resolve(cr());let a=-1,c=i;return o.next(u=>C.forEach(u,(l,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),i.get(l)?C.resolve():this.getBaseDocument(e,l,h).next(f=>{c=c.insert(l,f)}))).next(()=>this.populateOverlays(e,u,i)).next(()=>this.computeViews(e,c,u,le())).next(l=>({batchId:a,changes:Oy(l)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new z(n)).next(r=>{let s=$s();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(e,n,r){const s=n.collectionGroup;let i=$s();return this.indexManager.getCollectionParents(e,s).next(o=>C.forEach(o,a=>{const c=function(u,l){return new ws(l,null,u.explicitOrderBy.slice(),u.filters.slice(),u.limit,u.limitType,u.startAt,u.endAt)}(n,a.child(s));return this.getDocumentsMatchingCollectionQuery(e,c,r).next(u=>{u.forEach((l,h)=>{i=i.insert(l,h)})})}).next(()=>i))}getDocumentsMatchingCollectionQuery(e,n,r){let s;return this.remoteDocumentCache.getAllFromCollection(e,n.path,r).next(i=>(s=i,this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId))).next(i=>{i.forEach((a,c)=>{const u=c.getKey();s.get(u)===null&&(s=s.insert(u,nt.newInvalidDocument(u)))});let o=$s();return s.forEach((a,c)=>{const u=i.get(a);u!==void 0&&Xs(u.mutation,c,Mt.empty(),je.now()),oh(n,c)&&(o=o.insert(a,c))}),o})}getBaseDocument(e,n,r){return r===null||r.mutation.type===1?this.remoteDocumentCache.getEntry(e,n):C.resolve(nt.newInvalidDocument(n))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LC{constructor(e){this.wt=e,this.Jn=new Map,this.Yn=new Map}getBundleMetadata(e,n){return C.resolve(this.Jn.get(n))}saveBundleMetadata(e,n){var r;return this.Jn.set(n.id,{id:(r=n).id,version:r.version,createTime:pn(r.createTime)}),C.resolve()}getNamedQuery(e,n){return C.resolve(this.Yn.get(n))}saveNamedQuery(e,n){return this.Yn.set(n.name,function(r){return{name:r.name,query:DC(r.bundledQuery),readTime:pn(r.readTime)}}(n)),C.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $C{constructor(){this.overlays=new Ge(z.comparator),this.Xn=new Map}getOverlay(e,n){return C.resolve(this.overlays.get(n))}getOverlays(e,n){const r=cr();return C.forEach(n,s=>this.getOverlay(e,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((s,i)=>{this.ie(e,n,i)}),C.resolve()}removeOverlaysForBatchId(e,n,r){const s=this.Xn.get(r);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.Xn.delete(r)),C.resolve()}getOverlaysForCollection(e,n,r){const s=cr(),i=n.length+1,o=new z(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const c=a.getNext().value,u=c.getKey();if(!n.isPrefixOf(u.path))break;u.path.length===i&&c.largestBatchId>r&&s.set(c.getKey(),c)}return C.resolve(s)}getOverlaysForCollectionGroup(e,n,r,s){let i=new Ge((u,l)=>u-l);const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===n&&u.largestBatchId>r){let l=i.get(u.largestBatchId);l===null&&(l=cr(),i=i.insert(u.largestBatchId,l)),l.set(u.getKey(),u)}}const a=cr(),c=i.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((u,l)=>a.set(u,l)),!(a.size()>=s)););return C.resolve(a)}ie(e,n,r){const s=this.overlays.get(r.key);if(s!==null){const o=this.Xn.get(s.largestBatchId).delete(r.key);this.Xn.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new RC(n,r));let i=this.Xn.get(n);i===void 0&&(i=le(),this.Xn.set(n,i)),this.Xn.set(n,i.add(r.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uh{constructor(){this.Zn=new We(Xe.ts),this.es=new We(Xe.ns)}isEmpty(){return this.Zn.isEmpty()}addReference(e,n){const r=new Xe(e,n);this.Zn=this.Zn.add(r),this.es=this.es.add(r)}ss(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.rs(new Xe(e,n))}os(e,n){e.forEach(r=>this.removeReference(r,n))}us(e){const n=new z(new Ne([])),r=new Xe(n,e),s=new Xe(n,e+1),i=[];return this.es.forEachInRange([r,s],o=>{this.rs(o),i.push(o.key)}),i}cs(){this.Zn.forEach(e=>this.rs(e))}rs(e){this.Zn=this.Zn.delete(e),this.es=this.es.delete(e)}hs(e){const n=new z(new Ne([])),r=new Xe(n,e),s=new Xe(n,e+1);let i=le();return this.es.forEachInRange([r,s],o=>{i=i.add(o.key)}),i}containsKey(e){const n=new Xe(e,0),r=this.Zn.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class Xe{constructor(e,n){this.key=e,this.ls=n}static ts(e,n){return z.comparator(e.key,n.key)||ye(e.ls,n.ls)}static ns(e,n){return ye(e.ls,n.ls)||z.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UC{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.fs=1,this.ds=new We(Xe.ts)}checkEmpty(e){return C.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,s){const i=this.fs;this.fs++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new AC(i,n,r,s);this.mutationQueue.push(o);for(const a of s)this.ds=this.ds.add(new Xe(a.key,i)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return C.resolve(o)}lookupMutationBatch(e,n){return C.resolve(this._s(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,s=this.ws(r),i=s<0?0:s;return C.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return C.resolve(this.mutationQueue.length===0?-1:this.fs-1)}getAllMutationBatches(e){return C.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new Xe(n,0),s=new Xe(n,Number.POSITIVE_INFINITY),i=[];return this.ds.forEachInRange([r,s],o=>{const a=this._s(o.ls);i.push(a)}),C.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new We(ye);return n.forEach(s=>{const i=new Xe(s,0),o=new Xe(s,Number.POSITIVE_INFINITY);this.ds.forEachInRange([i,o],a=>{r=r.add(a.ls)})}),C.resolve(this.gs(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,s=r.length+1;let i=r;z.isDocumentKey(i)||(i=i.child(""));const o=new Xe(new z(i),0);let a=new We(ye);return this.ds.forEachWhile(c=>{const u=c.key.path;return!!r.isPrefixOf(u)&&(u.length===s&&(a=a.add(c.ls)),!0)},o),C.resolve(this.gs(a))}gs(e){const n=[];return e.forEach(r=>{const s=this._s(r);s!==null&&n.push(s)}),n}removeMutationBatch(e,n){Re(this.ys(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.ds;return C.forEach(n.mutations,s=>{const i=new Xe(s.key,n.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.ds=r})}In(e){}containsKey(e,n){const r=new Xe(n,0),s=this.ds.firstAfterOrEqual(r);return C.resolve(n.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,C.resolve()}ys(e,n){return this.ws(e)}ws(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}_s(e){const n=this.ws(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FC{constructor(e){this.ps=e,this.docs=new Ge(z.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,s=this.docs.get(r),i=s?s.size:0,o=this.ps(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return C.resolve(r?r.document.mutableCopy():nt.newInvalidDocument(n))}getEntries(e,n){let r=_n();return n.forEach(s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():nt.newInvalidDocument(s))}),C.resolve(r)}getAllFromCollection(e,n,r){let s=_n();const i=new z(n.child("")),o=this.docs.getIteratorFrom(i);for(;o.hasNext();){const{key:a,value:{document:c}}=o.getNext();if(!n.isPrefixOf(a.path))break;a.path.length>n.length+1||kS(RS(c),r)<=0||(s=s.insert(c.key,c.mutableCopy()))}return C.resolve(s)}getAllFromCollectionGroup(e,n,r,s){te()}Is(e,n){return C.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new VC(this)}getSize(e){return C.resolve(this.size)}}class VC extends PC{constructor(e){super(),this.zn=e}applyChanges(e){const n=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?n.push(this.zn.addEntry(e,s)):this.zn.removeEntry(r)}),C.waitFor(n)}getFromCache(e,n){return this.zn.getEntry(e,n)}getAllFromCache(e,n){return this.zn.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BC{constructor(e){this.persistence=e,this.Ts=new _s(n=>nh(n),rh),this.lastRemoteSnapshotVersion=ce.min(),this.highestTargetId=0,this.Es=0,this.As=new uh,this.targetCount=0,this.Rs=ss.An()}forEachTarget(e,n){return this.Ts.forEach((r,s)=>n(s)),C.resolve()}getLastRemoteSnapshotVersion(e){return C.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return C.resolve(this.Es)}allocateTargetId(e){return this.highestTargetId=this.Rs.next(),C.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Es&&(this.Es=n),C.resolve()}vn(e){this.Ts.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.Rs=new ss(n),this.highestTargetId=n),e.sequenceNumber>this.Es&&(this.Es=e.sequenceNumber)}addTargetData(e,n){return this.vn(n),this.targetCount+=1,C.resolve()}updateTargetData(e,n){return this.vn(n),C.resolve()}removeTargetData(e,n){return this.Ts.delete(n.target),this.As.us(n.targetId),this.targetCount-=1,C.resolve()}removeTargets(e,n,r){let s=0;const i=[];return this.Ts.forEach((o,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.Ts.delete(o),i.push(this.removeMatchingKeysForTargetId(e,a.targetId)),s++)}),C.waitFor(i).next(()=>s)}getTargetCount(e){return C.resolve(this.targetCount)}getTargetData(e,n){const r=this.Ts.get(n)||null;return C.resolve(r)}addMatchingKeys(e,n,r){return this.As.ss(n,r),C.resolve()}removeMatchingKeys(e,n,r){this.As.os(n,r);const s=this.persistence.referenceDelegate,i=[];return s&&n.forEach(o=>{i.push(s.markPotentiallyOrphaned(e,o))}),C.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this.As.us(n),C.resolve()}getMatchingKeysForTargetId(e,n){const r=this.As.hs(n);return C.resolve(r)}containsKey(e,n){return C.resolve(this.As.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jC{constructor(e,n){this.bs={},this.overlays={},this.Ps=new eh(0),this.vs=!1,this.vs=!0,this.referenceDelegate=e(this),this.Vs=new BC(this),this.indexManager=new NC,this.remoteDocumentCache=function(r){return new FC(r)}(r=>this.referenceDelegate.Ss(r)),this.wt=new kC(n),this.Ds=new LC(this.wt)}start(){return Promise.resolve()}shutdown(){return this.vs=!1,Promise.resolve()}get started(){return this.vs}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new $C,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.bs[e.toKey()];return r||(r=new UC(n,this.referenceDelegate),this.bs[e.toKey()]=r),r}getTargetCache(){return this.Vs}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ds}runTransaction(e,n,r){H("MemoryPersistence","Starting transaction:",e);const s=new qC(this.Ps.next());return this.referenceDelegate.Cs(),r(s).next(i=>this.referenceDelegate.xs(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}Ns(e,n){return C.or(Object.values(this.bs).map(r=>()=>r.containsKey(e,n)))}}class qC extends NS{constructor(e){super(),this.currentSequenceNumber=e}}class lh{constructor(e){this.persistence=e,this.ks=new uh,this.Ms=null}static Os(e){return new lh(e)}get Fs(){if(this.Ms)return this.Ms;throw te()}addReference(e,n,r){return this.ks.addReference(r,n),this.Fs.delete(r.toString()),C.resolve()}removeReference(e,n,r){return this.ks.removeReference(r,n),this.Fs.add(r.toString()),C.resolve()}markPotentiallyOrphaned(e,n){return this.Fs.add(n.toString()),C.resolve()}removeTarget(e,n){this.ks.us(n.targetId).forEach(s=>this.Fs.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(s=>{s.forEach(i=>this.Fs.add(i.toString()))}).next(()=>r.removeTargetData(e,n))}Cs(){this.Ms=new Set}xs(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return C.forEach(this.Fs,r=>{const s=z.fromPath(r);return this.$s(e,s).next(i=>{i||n.removeEntry(s,ce.min())})}).next(()=>(this.Ms=null,n.apply(e)))}updateLimboDocument(e,n){return this.$s(e,n).next(r=>{r?this.Fs.delete(n.toString()):this.Fs.add(n.toString())})}Ss(e){return 0}$s(e,n){return C.or([()=>C.resolve(this.ks.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ns(e,n)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hh{constructor(e,n,r,s){this.targetId=e,this.fromCache=n,this.Pi=r,this.vi=s}static Vi(e,n){let r=le(),s=le();for(const i of n.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new hh(e,n.fromCache,r,s)}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HC{constructor(){this.Si=!1}initialize(e,n){this.Di=e,this.indexManager=n,this.Si=!0}getDocumentsMatchingQuery(e,n,r,s){return this.Ci(e,n).next(i=>i||this.xi(e,n,s,r)).next(i=>i||this.Ni(e,n))}Ci(e,n){if(yd(n))return C.resolve(null);let r=wn(n);return this.indexManager.getIndexType(e,r).next(s=>s===0?null:(n.limit!==null&&s===1&&(n=ku(n,null,"F"),r=wn(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(i=>{const o=le(...i);return this.Di.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,r).next(c=>{const u=this.ki(n,a);return this.Mi(n,u,o,c.readTime)?this.Ci(e,ku(n,null,"F")):this.Oi(e,u,n,c)}))})))}xi(e,n,r,s){return yd(n)||s.isEqual(ce.min())?this.Ni(e,n):this.Di.getDocuments(e,r).next(i=>{const o=this.ki(n,i);return this.Mi(n,o,r,s)?this.Ni(e,n):(od()<=ge.DEBUG&&H("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),Du(n)),this.Oi(e,o,n,AS(s,-1)))})}ki(e,n){let r=new We(_y(e));return n.forEach((s,i)=>{oh(e,i)&&(r=r.add(i))}),r}Mi(e,n,r,s){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const i=e.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}Ni(e,n){return od()<=ge.DEBUG&&H("QueryEngine","Using full collection scan to execute query:",Du(n)),this.Di.getDocumentsMatchingQuery(e,n,Hn.min())}Oi(e,n,r,s){return this.Di.getDocumentsMatchingQuery(e,r,s).next(i=>(n.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zC{constructor(e,n,r,s){this.persistence=e,this.Fi=n,this.wt=s,this.$i=new Ge(ye),this.Bi=new _s(i=>nh(i),rh),this.Li=new Map,this.Ui=e.getRemoteDocumentCache(),this.Vs=e.getTargetCache(),this.Ds=e.getBundleCache(),this.qi(r)}qi(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new MC(this.Ui,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Ui.setIndexManager(this.indexManager),this.Fi.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.$i))}}function WC(t,e,n,r){return new zC(t,e,n,r)}async function jy(t,e){const n=se(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let s;return n.mutationQueue.getAllMutationBatches(r).next(i=>(s=i,n.qi(e),n.mutationQueue.getAllMutationBatches(r))).next(i=>{const o=[],a=[];let c=le();for(const u of s){o.push(u.batchId);for(const l of u.mutations)c=c.add(l.key)}for(const u of i){a.push(u.batchId);for(const l of u.mutations)c=c.add(l.key)}return n.localDocuments.getDocuments(r,c).next(u=>({Ki:u,removedBatchIds:o,addedBatchIds:a}))})})}function KC(t,e){const n=se(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=e.batch.keys(),i=n.Ui.newChangeBuffer({trackRemovals:!0});return function(o,a,c,u){const l=c.batch,h=l.keys();let f=C.resolve();return h.forEach(p=>{f=f.next(()=>u.getEntry(a,p)).next(d=>{const v=c.docVersions.get(p);Re(v!==null),d.version.compareTo(v)<0&&(l.applyToRemoteDocument(d,c),d.isValidDocument()&&(d.setReadTime(c.commitVersion),u.addEntry(d)))})}),f.next(()=>o.mutationQueue.removeMutationBatch(a,l))}(n,r,e,i).next(()=>i.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(o){let a=le();for(let c=0;c<o.mutationResults.length;++c)o.mutationResults[c].transformResults.length>0&&(a=a.add(o.batch.mutations[c].key));return a}(e))).next(()=>n.localDocuments.getDocuments(r,s))})}function qy(t){const e=se(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Vs.getLastRemoteSnapshotVersion(n))}function GC(t,e){const n=se(t),r=e.snapshotVersion;let s=n.$i;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=n.Ui.newChangeBuffer({trackRemovals:!0});s=n.$i;const a=[];e.targetChanges.forEach((l,h)=>{const f=s.get(h);if(!f)return;a.push(n.Vs.removeMatchingKeys(i,l.removedDocuments,h).next(()=>n.Vs.addMatchingKeys(i,l.addedDocuments,h)));let p=f.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.has(h)?p=p.withResumeToken(ot.EMPTY_BYTE_STRING,ce.min()).withLastLimboFreeSnapshotVersion(ce.min()):l.resumeToken.approximateByteSize()>0&&(p=p.withResumeToken(l.resumeToken,r)),s=s.insert(h,p),function(d,v,y){return d.resumeToken.approximateByteSize()===0||v.snapshotVersion.toMicroseconds()-d.snapshotVersion.toMicroseconds()>=3e8?!0:y.addedDocuments.size+y.modifiedDocuments.size+y.removedDocuments.size>0}(f,p,l)&&a.push(n.Vs.updateTargetData(i,p))});let c=_n(),u=le();if(e.documentUpdates.forEach(l=>{e.resolvedLimboDocuments.has(l)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(i,l))}),a.push(XC(i,o,e.documentUpdates).next(l=>{c=l.Gi,u=l.Qi})),!r.isEqual(ce.min())){const l=n.Vs.getLastRemoteSnapshotVersion(i).next(h=>n.Vs.setTargetsMetadata(i,i.currentSequenceNumber,r));a.push(l)}return C.waitFor(a).next(()=>o.apply(i)).next(()=>n.localDocuments.getLocalViewOfDocuments(i,c,u)).next(()=>c)}).then(i=>(n.$i=s,i))}function XC(t,e,n){let r=le(),s=le();return n.forEach(i=>r=r.add(i)),e.getEntries(t,r).next(i=>{let o=_n();return n.forEach((a,c)=>{const u=i.get(a);c.isFoundDocument()!==u.isFoundDocument()&&(s=s.add(a)),c.isNoDocument()&&c.version.isEqual(ce.min())?(e.removeEntry(a,c.readTime),o=o.insert(a,c)):!u.isValidDocument()||c.version.compareTo(u.version)>0||c.version.compareTo(u.version)===0&&u.hasPendingWrites?(e.addEntry(c),o=o.insert(a,c)):H("LocalStore","Ignoring outdated watch update for ",a,". Current version:",u.version," Watch version:",c.version)}),{Gi:o,Qi:s}})}function QC(t,e){const n=se(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function YC(t,e){const n=se(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return n.Vs.getTargetData(r,e).next(i=>i?(s=i,C.resolve(s)):n.Vs.allocateTargetId(r).next(o=>(s=new fr(e,o,0,r.currentSequenceNumber),n.Vs.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=n.$i.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(n.$i=n.$i.insert(r.targetId,r),n.Bi.set(e,r.targetId)),r})}async function xu(t,e,n){const r=se(t),s=r.$i.get(e),i=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",i,o=>r.persistence.referenceDelegate.removeTarget(o,s))}catch(o){if(!Hi(o))throw o;H("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.$i=r.$i.remove(e),r.Bi.delete(s.target)}function Cd(t,e,n){const r=se(t);let s=ce.min(),i=le();return r.persistence.runTransaction("Execute query","readonly",o=>function(a,c,u){const l=se(a),h=l.Bi.get(u);return h!==void 0?C.resolve(l.$i.get(h)):l.Vs.getTargetData(c,u)}(r,o,wn(e)).next(a=>{if(a)return s=a.lastLimboFreeSnapshotVersion,r.Vs.getMatchingKeysForTargetId(o,a.targetId).next(c=>{i=c})}).next(()=>r.Fi.getDocumentsMatchingQuery(o,e,n?s:ce.min(),n?i:le())).next(a=>(JC(r,KS(e),a),{documents:a,ji:i})))}function JC(t,e,n){let r=ce.min();n.forEach((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)}),t.Li.set(e,r)}class Ad{constructor(){this.activeTargetIds=xy()}Xi(e){this.activeTargetIds=this.activeTargetIds.add(e)}Zi(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Yi(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class ZC{constructor(){this.Fr=new Ad,this.$r={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e){return this.Fr.Xi(e),this.$r[e]||"not-current"}updateQueryState(e,n,r){this.$r[e]=n}removeLocalQueryTarget(e){this.Fr.Zi(e)}isLocalQueryTarget(e){return this.Fr.activeTargetIds.has(e)}clearQueryState(e){delete this.$r[e]}getAllActiveQueryTargets(){return this.Fr.activeTargetIds}isActiveQueryTarget(e){return this.Fr.activeTargetIds.has(e)}start(){return this.Fr=new Ad,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eA{Br(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rd{constructor(){this.Lr=()=>this.Ur(),this.qr=()=>this.Kr(),this.Gr=[],this.Qr()}Br(e){this.Gr.push(e)}shutdown(){window.removeEventListener("online",this.Lr),window.removeEventListener("offline",this.qr)}Qr(){window.addEventListener("online",this.Lr),window.addEventListener("offline",this.qr)}Ur(){H("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.Gr)e(0)}Kr(){H("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.Gr)e(1)}static V(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tA={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nA{constructor(e){this.jr=e.jr,this.Wr=e.Wr}zr(e){this.Hr=e}Jr(e){this.Yr=e}onMessage(e){this.Xr=e}close(){this.Wr()}send(e){this.jr(e)}Zr(){this.Hr()}eo(e){this.Yr(e)}no(e){this.Xr(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rA extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http";this.so=n+"://"+e.host,this.io="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}ro(e,n,r,s,i){const o=this.oo(e,n);H("RestConnection","Sending: ",o,r);const a={};return this.uo(a,s,i),this.co(e,o,a,r).then(c=>(H("RestConnection","Received: ",c),c),c=>{throw ad("RestConnection",`${e} failed with error: `,c,"url: ",o,"request:",r),c})}ao(e,n,r,s,i,o){return this.ro(e,n,r,s,i)}uo(e,n,r){e["X-Goog-Api-Client"]="gl-js/ fire/"+vs,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((s,i)=>e[i]=s),r&&r.headers.forEach((s,i)=>e[i]=s)}oo(e,n){const r=tA[e];return`${this.so}/v1/${n}:${r}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams}co(e,n,r,s){return new Promise((i,o)=>{const a=new yS;a.listenOnce(pS.COMPLETE,()=>{try{switch(a.getLastErrorCode()){case Dc.NO_ERROR:const u=a.getResponseJson();H("Connection","XHR received:",JSON.stringify(u)),i(u);break;case Dc.TIMEOUT:H("Connection",'RPC "'+e+'" timed out'),o(new U(b.DEADLINE_EXCEEDED,"Request time out"));break;case Dc.HTTP_ERROR:const l=a.getStatus();if(H("Connection",'RPC "'+e+'" failed with status:',l,"response text:",a.getResponseText()),l>0){const h=a.getResponseJson().error;if(h&&h.status&&h.message){const f=function(p){const d=p.toLowerCase().replace(/_/g,"-");return Object.values(b).indexOf(d)>=0?d:b.UNKNOWN}(h.status);o(new U(f,h.message))}else o(new U(b.UNKNOWN,"Server responded with status "+a.getStatus()))}else o(new U(b.UNAVAILABLE,"Connection failed."));break;default:te()}}finally{H("Connection",'RPC "'+e+'" completed.')}});const c=JSON.stringify(s);a.send(n,"POST",c,r,15)})}ho(e,n,r){const s=[this.so,"/","google.firestore.v1.Firestore","/",e,"/channel"],i=fS(),o=dS(),a={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(a.xmlHttpFactory=new gS({})),this.uo(a.initMessageHeaders,n,r),Rm()||Dm()||ZE()||Nm()||eb()||km()||(a.httpHeadersOverwriteParam="$httpHeaders");const c=s.join("");H("Connection","Creating WebChannel: "+c,a);const u=i.createWebChannel(c,a);let l=!1,h=!1;const f=new nA({jr:d=>{h?H("Connection","Not sending because WebChannel is closed:",d):(l||(H("Connection","Opening WebChannel transport."),u.open(),l=!0),H("Connection","WebChannel sending:",d),u.send(d))},Wr:()=>u.close()}),p=(d,v,y)=>{d.listen(v,_=>{try{y(_)}catch(A){setTimeout(()=>{throw A},0)}})};return p(u,io.EventType.OPEN,()=>{h||H("Connection","WebChannel transport opened.")}),p(u,io.EventType.CLOSE,()=>{h||(h=!0,H("Connection","WebChannel transport closed"),f.eo())}),p(u,io.EventType.ERROR,d=>{h||(h=!0,ad("Connection","WebChannel transport errored:",d),f.eo(new U(b.UNAVAILABLE,"The operation could not be completed")))}),p(u,io.EventType.MESSAGE,d=>{var v;if(!h){const y=d.data[0];Re(!!y);const _=y,A=_.error||((v=_[0])===null||v===void 0?void 0:v.error);if(A){H("Connection","WebChannel received error:",A);const M=A.status;let O=function(ne){const G=Fe[ne];if(G!==void 0)return Dy(G)}(M),V=A.message;O===void 0&&(O=b.INTERNAL,V="Unknown error status: "+M+" with message "+A.message),h=!0,f.eo(new U(O,V)),u.close()}else H("Connection","WebChannel received:",y),f.no(y)}}),p(o,mS.STAT_EVENT,d=>{d.stat===sd.PROXY?H("Connection","Detected buffering proxy"):d.stat===sd.NOPROXY&&H("Connection","Detected no buffering proxy")}),setTimeout(()=>{f.Zr()},0),f}}function Oc(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ga(t){return new fC(t,!0)}class Hy{constructor(e,n,r=1e3,s=1.5,i=6e4){this.js=e,this.timerId=n,this.lo=r,this.fo=s,this._o=i,this.wo=0,this.mo=null,this.yo=Date.now(),this.reset()}reset(){this.wo=0}po(){this.wo=this._o}Io(e){this.cancel();const n=Math.floor(this.wo+this.To()),r=Math.max(0,Date.now()-this.yo),s=Math.max(0,n-r);s>0&&H("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.wo} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.mo=this.js.enqueueAfterDelay(this.timerId,s,()=>(this.yo=Date.now(),e())),this.wo*=this.fo,this.wo<this.lo&&(this.wo=this.lo),this.wo>this._o&&(this.wo=this._o)}Eo(){this.mo!==null&&(this.mo.skipDelay(),this.mo=null)}cancel(){this.mo!==null&&(this.mo.cancel(),this.mo=null)}To(){return(Math.random()-.5)*this.wo}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zy{constructor(e,n,r,s,i,o,a,c){this.js=e,this.Ao=r,this.Ro=s,this.bo=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=c,this.state=0,this.Po=0,this.vo=null,this.Vo=null,this.stream=null,this.So=new Hy(e,n)}Do(){return this.state===1||this.state===5||this.Co()}Co(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.xo()}async stop(){this.Do()&&await this.close(0)}No(){this.state=0,this.So.reset()}ko(){this.Co()&&this.vo===null&&(this.vo=this.js.enqueueAfterDelay(this.Ao,6e4,()=>this.Mo()))}Oo(e){this.Fo(),this.stream.send(e)}async Mo(){if(this.Co())return this.close(0)}Fo(){this.vo&&(this.vo.cancel(),this.vo=null)}$o(){this.Vo&&(this.Vo.cancel(),this.Vo=null)}async close(e,n){this.Fo(),this.$o(),this.So.cancel(),this.Po++,e!==4?this.So.reset():n&&n.code===b.RESOURCE_EXHAUSTED?(vn(n.toString()),vn("Using maximum backoff delay to prevent overloading the backend."),this.So.po()):n&&n.code===b.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.Bo(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Jr(n)}Bo(){}auth(){this.state=1;const e=this.Lo(this.Po),n=this.Po;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.Po===n&&this.Uo(r,s)},r=>{e(()=>{const s=new U(b.UNKNOWN,"Fetching auth token failed: "+r.message);return this.qo(s)})})}Uo(e,n){const r=this.Lo(this.Po);this.stream=this.Ko(e,n),this.stream.zr(()=>{r(()=>(this.state=2,this.Vo=this.js.enqueueAfterDelay(this.Ro,1e4,()=>(this.Co()&&(this.state=3),Promise.resolve())),this.listener.zr()))}),this.stream.Jr(s=>{r(()=>this.qo(s))}),this.stream.onMessage(s=>{r(()=>this.onMessage(s))})}xo(){this.state=5,this.So.Io(async()=>{this.state=0,this.start()})}qo(e){return H("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Lo(e){return n=>{this.js.enqueueAndForget(()=>this.Po===e?n():(H("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class sA extends zy{constructor(e,n,r,s,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,s,o),this.wt=i}Ko(e,n){return this.bo.ho("Listen",e,n)}onMessage(e){this.So.reset();const n=mC(this.wt,e),r=function(s){if(!("targetChange"in s))return ce.min();const i=s.targetChange;return i.targetIds&&i.targetIds.length?ce.min():i.readTime?pn(i.readTime):ce.min()}(e);return this.listener.Go(n,r)}Qo(e){const n={};n.database=Pu(this.wt),n.addTarget=function(s,i){let o;const a=i.target;return o=Ru(a)?{documents:vC(s,a)}:{query:wC(s,a)},o.targetId=i.targetId,i.resumeToken.approximateByteSize()>0?o.resumeToken=$y(s,i.resumeToken):i.snapshotVersion.compareTo(ce.min())>0&&(o.readTime=Jo(s,i.snapshotVersion.toTimestamp())),o}(this.wt,e);const r=EC(this.wt,e);r&&(n.labels=r),this.Oo(n)}jo(e){const n={};n.database=Pu(this.wt),n.removeTarget=e,this.Oo(n)}}class iA extends zy{constructor(e,n,r,s,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,s,o),this.wt=i,this.Wo=!1}get zo(){return this.Wo}start(){this.Wo=!1,this.lastStreamToken=void 0,super.start()}Bo(){this.Wo&&this.Ho([])}Ko(e,n){return this.bo.ho("Write",e,n)}onMessage(e){if(Re(!!e.streamToken),this.lastStreamToken=e.streamToken,this.Wo){this.So.reset();const n=yC(e.writeResults,e.commitTime),r=pn(e.commitTime);return this.listener.Jo(r,n)}return Re(!e.writeResults||e.writeResults.length===0),this.Wo=!0,this.listener.Yo()}Xo(){const e={};e.database=Pu(this.wt),this.Oo(e)}Ho(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>gC(this.wt,r))};this.Oo(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oA extends class{}{constructor(e,n,r,s){super(),this.authCredentials=e,this.appCheckCredentials=n,this.bo=r,this.wt=s,this.Zo=!1}tu(){if(this.Zo)throw new U(b.FAILED_PRECONDITION,"The client has already been terminated.")}ro(e,n,r){return this.tu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,i])=>this.bo.ro(e,n,r,s,i)).catch(s=>{throw s.name==="FirebaseError"?(s.code===b.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new U(b.UNKNOWN,s.toString())})}ao(e,n,r,s){return this.tu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.bo.ao(e,n,r,i,o,s)).catch(i=>{throw i.name==="FirebaseError"?(i.code===b.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new U(b.UNKNOWN,i.toString())})}terminate(){this.Zo=!0}}class aA{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.eu=0,this.nu=null,this.su=!0}iu(){this.eu===0&&(this.ru("Unknown"),this.nu=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.nu=null,this.ou("Backend didn't respond within 10 seconds."),this.ru("Offline"),Promise.resolve())))}uu(e){this.state==="Online"?this.ru("Unknown"):(this.eu++,this.eu>=1&&(this.cu(),this.ou(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ru("Offline")))}set(e){this.cu(),this.eu=0,e==="Online"&&(this.su=!1),this.ru(e)}ru(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}ou(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.su?(vn(n),this.su=!1):H("OnlineStateTracker",n)}cu(){this.nu!==null&&(this.nu.cancel(),this.nu=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cA{constructor(e,n,r,s,i){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.au=[],this.hu=new Map,this.lu=new Set,this.fu=[],this.du=i,this.du.Br(o=>{r.enqueueAndForget(async()=>{Ar(this)&&(H("RemoteStore","Restarting streams for network reachability change."),await async function(a){const c=se(a);c.lu.add(4),await Ki(c),c._u.set("Unknown"),c.lu.delete(4),await Xa(c)}(this))})}),this._u=new aA(r,s)}}async function Xa(t){if(Ar(t))for(const e of t.fu)await e(!0)}async function Ki(t){for(const e of t.fu)await e(!1)}function Wy(t,e){const n=se(t);n.hu.has(e.targetId)||(n.hu.set(e.targetId,e),ph(n)?dh(n):Es(n).Co()&&fh(n,e))}function Ky(t,e){const n=se(t),r=Es(n);n.hu.delete(e),r.Co()&&Gy(n,e),n.hu.size===0&&(r.Co()?r.ko():Ar(n)&&n._u.set("Unknown"))}function fh(t,e){t.wu.Nt(e.targetId),Es(t).Qo(e)}function Gy(t,e){t.wu.Nt(e),Es(t).jo(e)}function dh(t){t.wu=new uC({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),te:e=>t.hu.get(e)||null}),Es(t).start(),t._u.iu()}function ph(t){return Ar(t)&&!Es(t).Do()&&t.hu.size>0}function Ar(t){return se(t).lu.size===0}function Xy(t){t.wu=void 0}async function uA(t){t.hu.forEach((e,n)=>{fh(t,e)})}async function lA(t,e){Xy(t),ph(t)?(t._u.uu(e),dh(t)):t._u.set("Unknown")}async function hA(t,e,n){if(t._u.set("Online"),e instanceof Ly&&e.state===2&&e.cause)try{await async function(r,s){const i=s.cause;for(const o of s.targetIds)r.hu.has(o)&&(await r.remoteSyncer.rejectListen(o,i),r.hu.delete(o),r.wu.removeTarget(o))}(t,e)}catch(r){H("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Zo(t,r)}else if(e instanceof To?t.wu.Ut(e):e instanceof My?t.wu.zt(e):t.wu.Gt(e),!n.isEqual(ce.min()))try{const r=await qy(t.localStore);n.compareTo(r)>=0&&await function(s,i){const o=s.wu.Yt(i);return o.targetChanges.forEach((a,c)=>{if(a.resumeToken.approximateByteSize()>0){const u=s.hu.get(c);u&&s.hu.set(c,u.withResumeToken(a.resumeToken,i))}}),o.targetMismatches.forEach(a=>{const c=s.hu.get(a);if(!c)return;s.hu.set(a,c.withResumeToken(ot.EMPTY_BYTE_STRING,c.snapshotVersion)),Gy(s,a);const u=new fr(c.target,a,1,c.sequenceNumber);fh(s,u)}),s.remoteSyncer.applyRemoteEvent(o)}(t,n)}catch(r){H("RemoteStore","Failed to raise snapshot:",r),await Zo(t,r)}}async function Zo(t,e,n){if(!Hi(e))throw e;t.lu.add(1),await Ki(t),t._u.set("Offline"),n||(n=()=>qy(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{H("RemoteStore","Retrying IndexedDB access"),await n(),t.lu.delete(1),await Xa(t)})}function Qy(t,e){return e().catch(n=>Zo(t,n,e))}async function Qa(t){const e=se(t),n=Wn(e);let r=e.au.length>0?e.au[e.au.length-1].batchId:-1;for(;fA(e);)try{const s=await QC(e.localStore,r);if(s===null){e.au.length===0&&n.ko();break}r=s.batchId,dA(e,s)}catch(s){await Zo(e,s)}Yy(e)&&Jy(e)}function fA(t){return Ar(t)&&t.au.length<10}function dA(t,e){t.au.push(e);const n=Wn(t);n.Co()&&n.zo&&n.Ho(e.mutations)}function Yy(t){return Ar(t)&&!Wn(t).Do()&&t.au.length>0}function Jy(t){Wn(t).start()}async function pA(t){Wn(t).Xo()}async function mA(t){const e=Wn(t);for(const n of t.au)e.Ho(n.mutations)}async function gA(t,e,n){const r=t.au.shift(),s=ch.from(r,e,n);await Qy(t,()=>t.remoteSyncer.applySuccessfulWrite(s)),await Qa(t)}async function yA(t,e){e&&Wn(t).zo&&await async function(n,r){if(s=r.code,sC(s)&&s!==b.ABORTED){const i=n.au.shift();Wn(n).No(),await Qy(n,()=>n.remoteSyncer.rejectFailedWrite(i.batchId,r)),await Qa(n)}var s}(t,e),Yy(t)&&Jy(t)}async function kd(t,e){const n=se(t);n.asyncQueue.verifyOperationInProgress(),H("RemoteStore","RemoteStore received new credentials");const r=Ar(n);n.lu.add(3),await Ki(n),r&&n._u.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.lu.delete(3),await Xa(n)}async function vA(t,e){const n=se(t);e?(n.lu.delete(2),await Xa(n)):e||(n.lu.add(2),await Ki(n),n._u.set("Unknown"))}function Es(t){return t.mu||(t.mu=function(e,n,r){const s=se(e);return s.tu(),new sA(n,s.bo,s.authCredentials,s.appCheckCredentials,s.wt,r)}(t.datastore,t.asyncQueue,{zr:uA.bind(null,t),Jr:lA.bind(null,t),Go:hA.bind(null,t)}),t.fu.push(async e=>{e?(t.mu.No(),ph(t)?dh(t):t._u.set("Unknown")):(await t.mu.stop(),Xy(t))})),t.mu}function Wn(t){return t.gu||(t.gu=function(e,n,r){const s=se(e);return s.tu(),new iA(n,s.bo,s.authCredentials,s.appCheckCredentials,s.wt,r)}(t.datastore,t.asyncQueue,{zr:pA.bind(null,t),Jr:yA.bind(null,t),Yo:mA.bind(null,t),Jo:gA.bind(null,t)}),t.fu.push(async e=>{e?(t.gu.No(),await Qa(t)):(await t.gu.stop(),t.au.length>0&&(H("RemoteStore",`Stopping write stream with ${t.au.length} pending writes`),t.au=[]))})),t.gu}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mh{constructor(e,n,r,s,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new Fn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(e,n,r,s,i){const o=Date.now()+r,a=new mh(e,n,o,s,i);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new U(b.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function gh(t,e){if(vn("AsyncQueue",`${e}: ${t}`),Hi(t))return new U(b.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xr{constructor(e){this.comparator=e?(n,r)=>e(n,r)||z.comparator(n.key,r.key):(n,r)=>z.comparator(n.key,r.key),this.keyedMap=$s(),this.sortedSet=new Ge(this.comparator)}static emptySet(e){return new Xr(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Xr)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new Xr;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dd{constructor(){this.yu=new Ge(z.comparator)}track(e){const n=e.doc.key,r=this.yu.get(n);r?e.type!==0&&r.type===3?this.yu=this.yu.insert(n,e):e.type===3&&r.type!==1?this.yu=this.yu.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.yu=this.yu.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.yu=this.yu.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.yu=this.yu.remove(n):e.type===1&&r.type===2?this.yu=this.yu.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.yu=this.yu.insert(n,{type:2,doc:e.doc}):te():this.yu=this.yu.insert(n,e)}pu(){const e=[];return this.yu.inorderTraversal((n,r)=>{e.push(r)}),e}}class is{constructor(e,n,r,s,i,o,a,c){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=c}static fromInitialDocuments(e,n,r,s){const i=[];return n.forEach(o=>{i.push({type:0,doc:o})}),new is(e,n,Xr.emptySet(n),i,r,s,!0,!1)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Ha(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let s=0;s<n.length;s++)if(n[s].type!==r[s].type||!n[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wA{constructor(){this.Iu=void 0,this.listeners=[]}}class _A{constructor(){this.queries=new _s(e=>wy(e),Ha),this.onlineState="Unknown",this.Tu=new Set}}async function Zy(t,e){const n=se(t),r=e.query;let s=!1,i=n.queries.get(r);if(i||(s=!0,i=new wA),s)try{i.Iu=await n.onListen(r)}catch(o){const a=gh(o,`Initialization of query '${Du(e.query)}' failed`);return void e.onError(a)}n.queries.set(r,i),i.listeners.push(e),e.Eu(n.onlineState),i.Iu&&e.Au(i.Iu)&&yh(n)}async function ev(t,e){const n=se(t),r=e.query;let s=!1;const i=n.queries.get(r);if(i){const o=i.listeners.indexOf(e);o>=0&&(i.listeners.splice(o,1),s=i.listeners.length===0)}if(s)return n.queries.delete(r),n.onUnlisten(r)}function EA(t,e){const n=se(t);let r=!1;for(const s of e){const i=s.query,o=n.queries.get(i);if(o){for(const a of o.listeners)a.Au(s)&&(r=!0);o.Iu=s}}r&&yh(n)}function bA(t,e,n){const r=se(t),s=r.queries.get(e);if(s)for(const i of s.listeners)i.onError(n);r.queries.delete(e)}function yh(t){t.Tu.forEach(e=>{e.next()})}class tv{constructor(e,n,r){this.query=e,this.Ru=n,this.bu=!1,this.Pu=null,this.onlineState="Unknown",this.options=r||{}}Au(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new is(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0)}let n=!1;return this.bu?this.vu(e)&&(this.Ru.next(e),n=!0):this.Vu(e,this.onlineState)&&(this.Su(e),n=!0),this.Pu=e,n}onError(e){this.Ru.error(e)}Eu(e){this.onlineState=e;let n=!1;return this.Pu&&!this.bu&&this.Vu(this.Pu,e)&&(this.Su(this.Pu),n=!0),n}Vu(e,n){if(!e.fromCache)return!0;const r=n!=="Offline";return(!this.options.Du||!r)&&(!e.docs.isEmpty()||n==="Offline")}vu(e){if(e.docChanges.length>0)return!0;const n=this.Pu&&this.Pu.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}Su(e){e=is.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache),this.bu=!0,this.Ru.next(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nv{constructor(e){this.key=e}}class rv{constructor(e){this.key=e}}class TA{constructor(e,n){this.query=e,this.Fu=n,this.$u=null,this.current=!1,this.Bu=le(),this.mutatedKeys=le(),this.Lu=_y(e),this.Uu=new Xr(this.Lu)}get qu(){return this.Fu}Ku(e,n){const r=n?n.Gu:new Dd,s=n?n.Uu:this.Uu;let i=n?n.mutatedKeys:this.mutatedKeys,o=s,a=!1;const c=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,u=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((l,h)=>{const f=s.get(l),p=oh(this.query,h)?h:null,d=!!f&&this.mutatedKeys.has(f.key),v=!!p&&(p.hasLocalMutations||this.mutatedKeys.has(p.key)&&p.hasCommittedMutations);let y=!1;f&&p?f.data.isEqual(p.data)?d!==v&&(r.track({type:3,doc:p}),y=!0):this.Qu(f,p)||(r.track({type:2,doc:p}),y=!0,(c&&this.Lu(p,c)>0||u&&this.Lu(p,u)<0)&&(a=!0)):!f&&p?(r.track({type:0,doc:p}),y=!0):f&&!p&&(r.track({type:1,doc:f}),y=!0,(c||u)&&(a=!0)),y&&(p?(o=o.add(p),i=v?i.add(l):i.delete(l)):(o=o.delete(l),i=i.delete(l)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const l=this.query.limitType==="F"?o.last():o.first();o=o.delete(l.key),i=i.delete(l.key),r.track({type:1,doc:l})}return{Uu:o,Gu:r,Mi:a,mutatedKeys:i}}Qu(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r){const s=this.Uu;this.Uu=e.Uu,this.mutatedKeys=e.mutatedKeys;const i=e.Gu.pu();i.sort((u,l)=>function(h,f){const p=d=>{switch(d){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return te()}};return p(h)-p(f)}(u.type,l.type)||this.Lu(u.doc,l.doc)),this.ju(r);const o=n?this.Wu():[],a=this.Bu.size===0&&this.current?1:0,c=a!==this.$u;return this.$u=a,i.length!==0||c?{snapshot:new is(this.query,e.Uu,s,i,e.mutatedKeys,a===0,c,!1),zu:o}:{zu:o}}Eu(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Uu:this.Uu,Gu:new Dd,mutatedKeys:this.mutatedKeys,Mi:!1},!1)):{zu:[]}}Hu(e){return!this.Fu.has(e)&&!!this.Uu.has(e)&&!this.Uu.get(e).hasLocalMutations}ju(e){e&&(e.addedDocuments.forEach(n=>this.Fu=this.Fu.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Fu=this.Fu.delete(n)),this.current=e.current)}Wu(){if(!this.current)return[];const e=this.Bu;this.Bu=le(),this.Uu.forEach(r=>{this.Hu(r.key)&&(this.Bu=this.Bu.add(r.key))});const n=[];return e.forEach(r=>{this.Bu.has(r)||n.push(new rv(r))}),this.Bu.forEach(r=>{e.has(r)||n.push(new nv(r))}),n}Ju(e){this.Fu=e.ji,this.Bu=le();const n=this.Ku(e.documents);return this.applyChanges(n,!0)}Yu(){return is.fromInitialDocuments(this.query,this.Uu,this.mutatedKeys,this.$u===0)}}class IA{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class SA{constructor(e){this.key=e,this.Xu=!1}}class CA{constructor(e,n,r,s,i,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.Zu={},this.tc=new _s(a=>wy(a),Ha),this.ec=new Map,this.nc=new Set,this.sc=new Ge(z.comparator),this.ic=new Map,this.rc=new uh,this.oc={},this.uc=new Map,this.cc=ss.Rn(),this.onlineState="Unknown",this.ac=void 0}get isPrimaryClient(){return this.ac===!0}}async function AA(t,e){const n=$A(t);let r,s;const i=n.tc.get(e);if(i)r=i.targetId,n.sharedClientState.addLocalQueryTarget(r),s=i.view.Yu();else{const o=await YC(n.localStore,wn(e));n.isPrimaryClient&&Wy(n.remoteStore,o);const a=n.sharedClientState.addLocalQueryTarget(o.targetId);r=o.targetId,s=await RA(n,e,r,a==="current")}return s}async function RA(t,e,n,r){t.hc=(l,h,f)=>async function(p,d,v,y){let _=d.view.Ku(v);_.Mi&&(_=await Cd(p.localStore,d.query,!1).then(({documents:O})=>d.view.Ku(O,_)));const A=y&&y.targetChanges.get(d.targetId),M=d.view.applyChanges(_,p.isPrimaryClient,A);return Od(p,d.targetId,M.zu),M.snapshot}(t,l,h,f);const s=await Cd(t.localStore,e,!0),i=new TA(e,s.ji),o=i.Ku(s.documents),a=Wi.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline"),c=i.applyChanges(o,t.isPrimaryClient,a);Od(t,n,c.zu);const u=new IA(e,n,i);return t.tc.set(e,u),t.ec.has(n)?t.ec.get(n).push(e):t.ec.set(n,[e]),c.snapshot}async function kA(t,e){const n=se(t),r=n.tc.get(e),s=n.ec.get(r.targetId);if(s.length>1)return n.ec.set(r.targetId,s.filter(i=>!Ha(i,e))),void n.tc.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(r.targetId),n.sharedClientState.isActiveQueryTarget(r.targetId)||await xu(n.localStore,r.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(r.targetId),Ky(n.remoteStore,r.targetId),Mu(n,r.targetId)}).catch(qi)):(Mu(n,r.targetId),await xu(n.localStore,r.targetId,!0))}async function DA(t,e,n){const r=UA(t);try{const s=await function(i,o){const a=se(i),c=je.now(),u=o.reduce((f,p)=>f.add(p.key),le());let l,h;return a.persistence.runTransaction("Locally write mutations","readwrite",f=>{let p=_n(),d=le();return a.Ui.getEntries(f,u).next(v=>{p=v,p.forEach((y,_)=>{_.isValidDocument()||(d=d.add(y))})}).next(()=>a.localDocuments.getOverlayedDocuments(f,p)).next(v=>{l=v;const y=[];for(const _ of o){const A=tC(_,l.get(_.key).overlayedDocument);A!=null&&y.push(new Xn(_.key,A,gy(A.value.mapValue),jt.exists(!0)))}return a.mutationQueue.addMutationBatch(f,c,y,o)}).next(v=>{h=v;const y=v.applyToLocalDocumentSet(l,d);return a.documentOverlayCache.saveOverlays(f,v.batchId,y)})}).then(()=>({batchId:h.batchId,changes:Oy(l)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),function(i,o,a){let c=i.oc[i.currentUser.toKey()];c||(c=new Ge(ye)),c=c.insert(o,a),i.oc[i.currentUser.toKey()]=c}(r,s.batchId,n),await Gi(r,s.changes),await Qa(r.remoteStore)}catch(s){const i=gh(s,"Failed to persist write");n.reject(i)}}async function sv(t,e){const n=se(t);try{const r=await GC(n.localStore,e);e.targetChanges.forEach((s,i)=>{const o=n.ic.get(i);o&&(Re(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1),s.addedDocuments.size>0?o.Xu=!0:s.modifiedDocuments.size>0?Re(o.Xu):s.removedDocuments.size>0&&(Re(o.Xu),o.Xu=!1))}),await Gi(n,r,e)}catch(r){await qi(r)}}function Nd(t,e,n){const r=se(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const s=[];r.tc.forEach((i,o)=>{const a=o.view.Eu(e);a.snapshot&&s.push(a.snapshot)}),function(i,o){const a=se(i);a.onlineState=o;let c=!1;a.queries.forEach((u,l)=>{for(const h of l.listeners)h.Eu(o)&&(c=!0)}),c&&yh(a)}(r.eventManager,e),s.length&&r.Zu.Go(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function NA(t,e,n){const r=se(t);r.sharedClientState.updateQueryState(e,"rejected",n);const s=r.ic.get(e),i=s&&s.key;if(i){let o=new Ge(z.comparator);o=o.insert(i,nt.newNoDocument(i,ce.min()));const a=le().add(i),c=new Ka(ce.min(),new Map,new We(ye),o,a);await sv(r,c),r.sc=r.sc.remove(i),r.ic.delete(e),vh(r)}else await xu(r.localStore,e,!1).then(()=>Mu(r,e,n)).catch(qi)}async function OA(t,e){const n=se(t),r=e.batch.batchId;try{const s=await KC(n.localStore,e);ov(n,r,null),iv(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await Gi(n,s)}catch(s){await qi(s)}}async function PA(t,e,n){const r=se(t);try{const s=await function(i,o){const a=se(i);return a.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let u;return a.mutationQueue.lookupMutationBatch(c,o).next(l=>(Re(l!==null),u=l.keys(),a.mutationQueue.removeMutationBatch(c,l))).next(()=>a.mutationQueue.performConsistencyCheck(c)).next(()=>a.documentOverlayCache.removeOverlaysForBatchId(c,u,o)).next(()=>a.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(c,u)).next(()=>a.localDocuments.getDocuments(c,u))})}(r.localStore,e);ov(r,e,n),iv(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await Gi(r,s)}catch(s){await qi(s)}}function iv(t,e){(t.uc.get(e)||[]).forEach(n=>{n.resolve()}),t.uc.delete(e)}function ov(t,e,n){const r=se(t);let s=r.oc[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(n?i.reject(n):i.resolve(),s=s.remove(e)),r.oc[r.currentUser.toKey()]=s}}function Mu(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.ec.get(e))t.tc.delete(r),n&&t.Zu.lc(r,n);t.ec.delete(e),t.isPrimaryClient&&t.rc.us(e).forEach(r=>{t.rc.containsKey(r)||av(t,r)})}function av(t,e){t.nc.delete(e.path.canonicalString());const n=t.sc.get(e);n!==null&&(Ky(t.remoteStore,n),t.sc=t.sc.remove(e),t.ic.delete(n),vh(t))}function Od(t,e,n){for(const r of n)r instanceof nv?(t.rc.addReference(r.key,e),xA(t,r)):r instanceof rv?(H("SyncEngine","Document no longer in limbo: "+r.key),t.rc.removeReference(r.key,e),t.rc.containsKey(r.key)||av(t,r.key)):te()}function xA(t,e){const n=e.key,r=n.path.canonicalString();t.sc.get(n)||t.nc.has(r)||(H("SyncEngine","New document in limbo: "+n),t.nc.add(r),vh(t))}function vh(t){for(;t.nc.size>0&&t.sc.size<t.maxConcurrentLimboResolutions;){const e=t.nc.values().next().value;t.nc.delete(e);const n=new z(Ne.fromString(e)),r=t.cc.next();t.ic.set(r,new SA(n)),t.sc=t.sc.insert(n,r),Wy(t.remoteStore,new fr(wn(qa(n.path)),r,2,eh.ot))}}async function Gi(t,e,n){const r=se(t),s=[],i=[],o=[];r.tc.isEmpty()||(r.tc.forEach((a,c)=>{o.push(r.hc(c,e,n).then(u=>{if(u){r.isPrimaryClient&&r.sharedClientState.updateQueryState(c.targetId,u.fromCache?"not-current":"current"),s.push(u);const l=hh.Vi(c.targetId,u);i.push(l)}}))}),await Promise.all(o),r.Zu.Go(s),await async function(a,c){const u=se(a);try{await u.persistence.runTransaction("notifyLocalViewChanges","readwrite",l=>C.forEach(c,h=>C.forEach(h.Pi,f=>u.persistence.referenceDelegate.addReference(l,h.targetId,f)).next(()=>C.forEach(h.vi,f=>u.persistence.referenceDelegate.removeReference(l,h.targetId,f)))))}catch(l){if(!Hi(l))throw l;H("LocalStore","Failed to update sequence numbers: "+l)}for(const l of c){const h=l.targetId;if(!l.fromCache){const f=u.$i.get(h),p=f.snapshotVersion,d=f.withLastLimboFreeSnapshotVersion(p);u.$i=u.$i.insert(h,d)}}}(r.localStore,i))}async function MA(t,e){const n=se(t);if(!n.currentUser.isEqual(e)){H("SyncEngine","User change. New user:",e.toKey());const r=await jy(n.localStore,e);n.currentUser=e,function(s,i){s.uc.forEach(o=>{o.forEach(a=>{a.reject(new U(b.CANCELLED,i))})}),s.uc.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Gi(n,r.Ki)}}function LA(t,e){const n=se(t),r=n.ic.get(e);if(r&&r.Xu)return le().add(r.key);{let s=le();const i=n.ec.get(e);if(!i)return s;for(const o of i){const a=n.tc.get(o);s=s.unionWith(a.view.qu)}return s}}function $A(t){const e=se(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=sv.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=LA.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=NA.bind(null,e),e.Zu.Go=EA.bind(null,e.eventManager),e.Zu.lc=bA.bind(null,e.eventManager),e}function UA(t){const e=se(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=OA.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=PA.bind(null,e),e}class FA{constructor(){this.synchronizeTabs=!1}async initialize(e){this.wt=Ga(e.databaseInfo.databaseId),this.sharedClientState=this.dc(e),this.persistence=this._c(e),await this.persistence.start(),this.localStore=this.wc(e),this.gcScheduler=this.mc(e,this.localStore),this.indexBackfillerScheduler=this.gc(e,this.localStore)}mc(e,n){return null}gc(e,n){return null}wc(e){return WC(this.persistence,new HC,e.initialUser,this.wt)}_c(e){return new jC(lh.Os,this.wt)}dc(e){return new ZC}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class VA{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Nd(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=MA.bind(null,this.syncEngine),await vA(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new _A}createDatastore(e){const n=Ga(e.databaseInfo.databaseId),r=(s=e.databaseInfo,new rA(s));var s;return function(i,o,a,c){return new oA(i,o,a,c)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return n=this.localStore,r=this.datastore,s=e.asyncQueue,i=a=>Nd(this.syncEngine,a,0),o=Rd.V()?new Rd:new eA,new cA(n,r,s,i,o);var n,r,s,i,o}createSyncEngine(e,n){return function(r,s,i,o,a,c,u){const l=new CA(r,s,i,o,a,c);return u&&(l.ac=!0),l}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(e){const n=se(e);H("RemoteStore","RemoteStore shutting down."),n.lu.add(5),await Ki(n),n.du.shutdown(),n._u.set("Unknown")}(this.remoteStore)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cv{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Ic(this.observer.next,e)}error(e){this.observer.error?this.Ic(this.observer.error,e):vn("Uncaught Error in snapshot listener:",e)}Tc(){this.muted=!0}Ic(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BA{constructor(e,n,r,s){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=s,this.user=_t.UNAUTHENTICATED,this.clientId=fy.I(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async i=>{H("FirestoreClient","Received user=",i.uid),await this.authCredentialListener(i),this.user=i}),this.appCheckCredentials.start(r,i=>(H("FirestoreClient","Received new app check token=",i),this.appCheckCredentialListener(i,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new U(b.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Fn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=gh(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function jA(t,e){t.asyncQueue.verifyOperationInProgress(),H("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async s=>{r.isEqual(s)||(await jy(e.localStore,s),r=s)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t.offlineComponents=e}async function qA(t,e){t.asyncQueue.verifyOperationInProgress();const n=await HA(t);H("FirestoreClient","Initializing OnlineComponentProvider");const r=await t.getConfiguration();await e.initialize(n,r),t.setCredentialChangeListener(s=>kd(e.remoteStore,s)),t.setAppCheckTokenChangeListener((s,i)=>kd(e.remoteStore,i)),t.onlineComponents=e}async function HA(t){return t.offlineComponents||(H("FirestoreClient","Using default OfflineComponentProvider"),await jA(t,new FA)),t.offlineComponents}async function uv(t){return t.onlineComponents||(H("FirestoreClient","Using default OnlineComponentProvider"),await qA(t,new VA)),t.onlineComponents}function zA(t){return uv(t).then(e=>e.syncEngine)}async function Lu(t){const e=await uv(t),n=e.eventManager;return n.onListen=AA.bind(null,e.syncEngine),n.onUnlisten=kA.bind(null,e.syncEngine),n}function WA(t,e,n={}){const r=new Fn;return t.asyncQueue.enqueueAndForget(async()=>function(s,i,o,a,c){const u=new cv({next:h=>{i.enqueueAndForget(()=>ev(s,l));const f=h.docs.has(o);!f&&h.fromCache?c.reject(new U(b.UNAVAILABLE,"Failed to get document because the client is offline.")):f&&h.fromCache&&a&&a.source==="server"?c.reject(new U(b.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):c.resolve(h)},error:h=>c.reject(h)}),l=new tv(qa(o.path),u,{includeMetadataChanges:!0,Du:!0});return Zy(s,l)}(await Lu(t),t.asyncQueue,e,n,r)),r.promise}const Pd=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lv(t,e,n){if(!n)throw new U(b.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function KA(t,e,n,r){if(e===!0&&r===!0)throw new U(b.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function xd(t){if(!z.isDocumentKey(t))throw new U(b.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Md(t){if(z.isDocumentKey(t))throw new U(b.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Ya(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(n){return n.constructor?n.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":te()}function en(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new U(b.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Ya(t);throw new U(b.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ld{constructor(e){var n;if(e.host===void 0){if(e.ssl!==void 0)throw new U(b.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new U(b.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams,KA("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling)}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wh{constructor(e,n,r){this._authCredentials=n,this._appCheckCredentials=r,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Ld({}),this._settingsFrozen=!1,e instanceof ns?this._databaseId=e:(this._app=e,this._databaseId=function(s){if(!Object.prototype.hasOwnProperty.apply(s.options,["projectId"]))throw new U(b.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new ns(s.options.projectId)}(e))}get app(){if(!this._app)throw new U(b.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new U(b.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Ld(e),e.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new wS;switch(n.type){case"gapi":const r=n.client;return Re(!(typeof r!="object"||r===null||!r.auth||!r.auth.getAuthHeaderValueForFirstParty)),new bS(r,n.sessionIndex||"0",n.iamToken||null);case"provider":return n.client;default:throw new U(b.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const n=Pd.get(e);n&&(H("ComponentProvider","Removing Datastore"),Pd.delete(e),n.terminate())}(this),Promise.resolve()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lt{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Vn(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new lt(this.firestore,e,this._key)}}class bs{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new bs(this.firestore,e,this._query)}}class Vn extends bs{constructor(e,n,r){super(e,n,qa(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new lt(this.firestore,null,new z(e))}withConverter(e){return new Vn(this.firestore,e,this._path)}}function CO(t,e,...n){if(t=$e(t),lv("collection","path",e),t instanceof wh){const r=Ne.fromString(e,...n);return Md(r),new Vn(t,null,r)}{if(!(t instanceof lt||t instanceof Vn))throw new U(b.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Ne.fromString(e,...n));return Md(r),new Vn(t.firestore,null,r)}}function Us(t,e,...n){if(t=$e(t),arguments.length===1&&(e=fy.I()),lv("doc","path",e),t instanceof wh){const r=Ne.fromString(e,...n);return xd(r),new lt(t,null,new z(r))}{if(!(t instanceof lt||t instanceof Vn))throw new U(b.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Ne.fromString(e,...n));return xd(r),new lt(t.firestore,t instanceof Vn?t.converter:null,new z(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GA{constructor(){this.Mc=Promise.resolve(),this.Oc=[],this.Fc=!1,this.$c=[],this.Bc=null,this.Lc=!1,this.Uc=!1,this.qc=[],this.So=new Hy(this,"async_queue_retry"),this.Kc=()=>{const n=Oc();n&&H("AsyncQueue","Visibility state changed to "+n.visibilityState),this.So.Eo()};const e=Oc();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Kc)}get isShuttingDown(){return this.Fc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Gc(),this.Qc(e)}enterRestrictedMode(e){if(!this.Fc){this.Fc=!0,this.Uc=e||!1;const n=Oc();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Kc)}}enqueue(e){if(this.Gc(),this.Fc)return new Promise(()=>{});const n=new Fn;return this.Qc(()=>this.Fc&&this.Uc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Oc.push(e),this.jc()))}async jc(){if(this.Oc.length!==0){try{await this.Oc[0](),this.Oc.shift(),this.So.reset()}catch(e){if(!Hi(e))throw e;H("AsyncQueue","Operation failed with retryable error: "+e)}this.Oc.length>0&&this.So.Io(()=>this.jc())}}Qc(e){const n=this.Mc.then(()=>(this.Lc=!0,e().catch(r=>{this.Bc=r,this.Lc=!1;const s=function(i){let o=i.message||"";return i.stack&&(o=i.stack.includes(i.message)?i.stack:i.message+`
`+i.stack),o}(r);throw vn("INTERNAL UNHANDLED ERROR: ",s),r}).then(r=>(this.Lc=!1,r))));return this.Mc=n,n}enqueueAfterDelay(e,n,r){this.Gc(),this.qc.indexOf(e)>-1&&(n=0);const s=mh.createAndSchedule(this,e,n,r,i=>this.Wc(i));return this.$c.push(s),s}Gc(){this.Bc&&te()}verifyOperationInProgress(){}async zc(){let e;do e=this.Mc,await e;while(e!==this.Mc)}Hc(e){for(const n of this.$c)if(n.timerId===e)return!0;return!1}Jc(e){return this.zc().then(()=>{this.$c.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.$c)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.zc()})}Yc(e){this.qc.push(e)}Wc(e){const n=this.$c.indexOf(e);this.$c.splice(n,1)}}function $d(t){return function(e,n){if(typeof e!="object"||e===null)return!1;const r=e;for(const s of n)if(s in r&&typeof r[s]=="function")return!0;return!1}(t,["next","error","complete"])}class Tr extends wh{constructor(e,n,r){super(e,n,r),this.type="firestore",this._queue=new GA,this._persistenceKey="name"in e?e.name:"[DEFAULT]"}_terminate(){return this._firestoreClient||hv(this),this._firestoreClient.terminate()}}function XA(t=wl()){return Ia(t,"firestore").getImmediate()}function _h(t){return t._firestoreClient||hv(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function hv(t){var e;const n=t._freezeSettings(),r=function(s,i,o,a){return new PS(s,i,o,a.host,a.ssl,a.experimentalForceLongPolling,a.experimentalAutoDetectLongPolling,a.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,n);t._firestoreClient=new BA(t._authCredentials,t._appCheckCredentials,t._queue,r)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ja{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new U(b.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new ct(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class os{constructor(e){this._byteString=e}static fromBase64String(e){try{return new os(ot.fromBase64String(e))}catch(n){throw new U(b.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new os(ot.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Eh{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bh{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new U(b.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new U(b.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return ye(this._lat,e._lat)||ye(this._long,e._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const QA=/^__.*__$/;class YA{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new Xn(e,this.data,this.fieldMask,n,this.fieldTransforms):new zi(e,this.data,n,this.fieldTransforms)}}class fv{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new Xn(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function dv(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw te()}}class Th{constructor(e,n,r,s,i,o){this.settings=e,this.databaseId=n,this.wt=r,this.ignoreUndefinedProperties=s,i===void 0&&this.Xc(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Zc(){return this.settings.Zc}ta(e){return new Th(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.wt,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}ea(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.ta({path:r,na:!1});return s.sa(e),s}ia(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.ta({path:r,na:!1});return s.Xc(),s}ra(e){return this.ta({path:void 0,na:!0})}oa(e){return ea(e,this.settings.methodName,this.settings.ua||!1,this.path,this.settings.ca)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}Xc(){if(this.path)for(let e=0;e<this.path.length;e++)this.sa(this.path.get(e))}sa(e){if(e.length===0)throw this.oa("Document fields must not be empty");if(dv(this.Zc)&&QA.test(e))throw this.oa('Document fields cannot begin and end with "__"')}}class JA{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.wt=r||Ga(e)}aa(e,n,r,s=!1){return new Th({Zc:e,methodName:n,ca:r,path:ct.emptyPath(),na:!1,ua:s},this.databaseId,this.wt,this.ignoreUndefinedProperties)}}function Za(t){const e=t._freezeSettings(),n=Ga(t._databaseId);return new JA(t._databaseId,!!e.ignoreUndefinedProperties,n)}function pv(t,e,n,r,s,i={}){const o=t.aa(i.merge||i.mergeFields?2:0,e,n,s);Ih("Data must be an object, but it was:",o,r);const a=mv(r,o);let c,u;if(i.merge)c=new Mt(o.fieldMask),u=o.fieldTransforms;else if(i.mergeFields){const l=[];for(const h of i.mergeFields){const f=$u(e,h,n);if(!o.contains(f))throw new U(b.INVALID_ARGUMENT,`Field '${f}' is specified in your field mask but missing from your input data.`);yv(l,f)||l.push(f)}c=new Mt(l),u=o.fieldTransforms.filter(h=>c.covers(h.field))}else c=null,u=o.fieldTransforms;return new YA(new Et(a),c,u)}class ec extends Eh{_toFieldTransform(e){if(e.Zc!==2)throw e.Zc===1?e.oa(`${this._methodName}() can only appear at the top level of your update data`):e.oa(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof ec}}function ZA(t,e,n,r){const s=t.aa(1,e,n);Ih("Data must be an object, but it was:",s,r);const i=[],o=Et.empty();Cr(r,(c,u)=>{const l=Sh(e,c,n);u=$e(u);const h=s.ia(l);if(u instanceof ec)i.push(l);else{const f=Xi(u,h);f!=null&&(i.push(l),o.set(l,f))}});const a=new Mt(i);return new fv(o,a,s.fieldTransforms)}function eR(t,e,n,r,s,i){const o=t.aa(1,e,n),a=[$u(e,r,n)],c=[s];if(i.length%2!=0)throw new U(b.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let f=0;f<i.length;f+=2)a.push($u(e,i[f])),c.push(i[f+1]);const u=[],l=Et.empty();for(let f=a.length-1;f>=0;--f)if(!yv(u,a[f])){const p=a[f];let d=c[f];d=$e(d);const v=o.ia(p);if(d instanceof ec)u.push(p);else{const y=Xi(d,v);y!=null&&(u.push(p),l.set(p,y))}}const h=new Mt(u);return new fv(l,h,o.fieldTransforms)}function tR(t,e,n,r=!1){return Xi(n,t.aa(r?4:3,e))}function Xi(t,e){if(gv(t=$e(t)))return Ih("Unsupported field value:",e,t),mv(t,e);if(t instanceof Eh)return function(n,r){if(!dv(r.Zc))throw r.oa(`${n._methodName}() can only be used with update() and set()`);if(!r.path)throw r.oa(`${n._methodName}() is not currently supported inside arrays`);const s=n._toFieldTransform(r);s&&r.fieldTransforms.push(s)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.na&&e.Zc!==4)throw e.oa("Nested arrays are not supported");return function(n,r){const s=[];let i=0;for(const o of n){let a=Xi(o,r.ra(i));a==null&&(a={nullValue:"NULL_VALUE"}),s.push(a),i++}return{arrayValue:{values:s}}}(t,e)}return function(n,r){if((n=$e(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return XS(r.wt,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const s=je.fromDate(n);return{timestampValue:Jo(r.wt,s)}}if(n instanceof je){const s=new je(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:Jo(r.wt,s)}}if(n instanceof bh)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof os)return{bytesValue:$y(r.wt,n._byteString)};if(n instanceof lt){const s=r.databaseId,i=n.firestore._databaseId;if(!i.isEqual(s))throw r.oa(`Document reference is for database ${i.projectId}/${i.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:ah(n.firestore._databaseId||r.databaseId,n._key.path)}}throw r.oa(`Unsupported field value: ${Ya(n)}`)}(t,e)}function mv(t,e){const n={};return dy(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Cr(t,(r,s)=>{const i=Xi(s,e.ea(r));i!=null&&(n[r]=i)}),{mapValue:{fields:n}}}function gv(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof je||t instanceof bh||t instanceof os||t instanceof lt||t instanceof Eh)}function Ih(t,e,n){if(!gv(n)||!function(r){return typeof r=="object"&&r!==null&&(Object.getPrototypeOf(r)===Object.prototype||Object.getPrototypeOf(r)===null)}(n)){const r=Ya(n);throw r==="an object"?e.oa(t+" a custom object"):e.oa(t+" "+r)}}function $u(t,e,n){if((e=$e(e))instanceof Ja)return e._internalPath;if(typeof e=="string")return Sh(t,e);throw ea("Field path arguments must be of type string or ",t,!1,void 0,n)}const nR=new RegExp("[~\\*/\\[\\]]");function Sh(t,e,n){if(e.search(nR)>=0)throw ea(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Ja(...e.split("."))._internalPath}catch{throw ea(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function ea(t,e,n,r,s){const i=r&&!r.isEmpty(),o=s!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(i||o)&&(c+=" (found",i&&(c+=` in field ${r}`),o&&(c+=` in document ${s}`),c+=")"),new U(b.INVALID_ARGUMENT,a+t+c)}function yv(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vv{constructor(e,n,r,s,i){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new lt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new rR(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(tc("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class rR extends vv{data(){return super.data()}}function tc(t,e){return typeof e=="string"?Sh(t,e):e instanceof Ja?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fs{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class wv extends vv{constructor(e,n,r,s,i,o){super(e,n,r,s,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Io(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(tc("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class Io extends wv{data(e={}){return super.data(e)}}class sR{constructor(e,n,r,s){this._firestore=e,this._userDataWriter=n,this._snapshot=s,this.metadata=new Fs(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new Io(this._firestore,this._userDataWriter,r.key,r,new Fs(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new U(b.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(r,s){if(r._snapshot.oldDocs.isEmpty()){let i=0;return r._snapshot.docChanges.map(o=>({type:"added",doc:new Io(r._firestore,r._userDataWriter,o.doc.key,o.doc,new Fs(r._snapshot.mutatedKeys.has(o.doc.key),r._snapshot.fromCache),r.query.converter),oldIndex:-1,newIndex:i++}))}{let i=r._snapshot.oldDocs;return r._snapshot.docChanges.filter(o=>s||o.type!==3).map(o=>{const a=new Io(r._firestore,r._userDataWriter,o.doc.key,o.doc,new Fs(r._snapshot.mutatedKeys.has(o.doc.key),r._snapshot.fromCache),r.query.converter);let c=-1,u=-1;return o.type!==0&&(c=i.indexOf(o.doc.key),i=i.delete(o.doc.key)),o.type!==1&&(i=i.add(o.doc),u=i.indexOf(o.doc.key)),{type:iR(o.type),doc:a,oldIndex:c,newIndex:u}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function iR(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return te()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oR(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new U(b.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class _v{}function AO(t,...e){for(const n of e)t=n._apply(t);return t}class aR extends _v{constructor(e,n,r){super(),this.fa=e,this.da=n,this._a=r,this.type="where"}_apply(e){const n=Za(e.firestore),r=function(s,i,o,a,c,u,l){let h;if(c.isKeyField()){if(u==="array-contains"||u==="array-contains-any")throw new U(b.INVALID_ARGUMENT,`Invalid Query. You can't perform '${u}' queries on documentId().`);if(u==="in"||u==="not-in"){Fd(l,u);const p=[];for(const d of l)p.push(Ud(a,s,d));h={arrayValue:{values:p}}}else h=Ud(a,s,l)}else u!=="in"&&u!=="not-in"&&u!=="array-contains-any"||Fd(l,u),h=tR(o,i,l,u==="in"||u==="not-in");const f=vt.create(c,u,h);return function(p,d){if(d.ht()){const y=ih(p);if(y!==null&&!y.isEqual(d.field))throw new U(b.INVALID_ARGUMENT,`Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${y.toString()}' and '${d.field.toString()}'`);const _=sh(p);_!==null&&Ev(p,d.field,_)}const v=function(y,_){for(const A of y.filters)if(_.indexOf(A.op)>=0)return A.op;return null}(p,function(y){switch(y){case"!=":return["!=","not-in"];case"array-contains":return["array-contains","array-contains-any","not-in"];case"in":return["array-contains-any","in","not-in"];case"array-contains-any":return["array-contains","array-contains-any","in","not-in"];case"not-in":return["array-contains","array-contains-any","in","not-in","!="];default:return[]}}(d.op));if(v!==null)throw v===d.op?new U(b.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${d.op.toString()}' filter.`):new U(b.INVALID_ARGUMENT,`Invalid query. You cannot use '${d.op.toString()}' filters with '${v.toString()}' filters.`)}(s,f),f}(e._query,"where",n,e.firestore._databaseId,this.fa,this.da,this._a);return new bs(e.firestore,e.converter,function(s,i){const o=s.filters.concat([i]);return new ws(s.path,s.collectionGroup,s.explicitOrderBy.slice(),o,s.limit,s.limitType,s.startAt,s.endAt)}(e._query,r))}}function RO(t,e,n){const r=e,s=tc("where",t);return new aR(s,r,n)}class cR extends _v{constructor(e,n){super(),this.fa=e,this.wa=n,this.type="orderBy"}_apply(e){const n=function(r,s,i){if(r.startAt!==null)throw new U(b.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(r.endAt!==null)throw new U(b.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");const o=new Gr(s,i);return function(a,c){if(sh(a)===null){const u=ih(a);u!==null&&Ev(a,u,c.field)}}(r,o),o}(e._query,this.fa,this.wa);return new bs(e.firestore,e.converter,function(r,s){const i=r.explicitOrderBy.concat([s]);return new ws(r.path,r.collectionGroup,i,r.filters.slice(),r.limit,r.limitType,r.startAt,r.endAt)}(e._query,n))}}function kO(t,e="asc"){const n=e,r=tc("orderBy",t);return new cR(r,n)}function Ud(t,e,n){if(typeof(n=$e(n))=="string"){if(n==="")throw new U(b.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!vy(e)&&n.indexOf("/")!==-1)throw new U(b.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(Ne.fromString(n));if(!z.isDocumentKey(r))throw new U(b.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return hd(t,new z(r))}if(n instanceof lt)return hd(t,n._key);throw new U(b.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Ya(n)}.`)}function Fd(t,e){if(!Array.isArray(t)||t.length===0)throw new U(b.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`);if(t.length>10)throw new U(b.INVALID_ARGUMENT,`Invalid Query. '${e.toString()}' filters support a maximum of 10 elements in the value array.`)}function Ev(t,e,n){if(!n.isEqual(e))throw new U(b.INVALID_ARGUMENT,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${e.toString()}' and so you must also use '${e.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${n.toString()}' instead.`)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uR{convertValue(e,n="none"){switch(br(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Ve(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(ts(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw te()}}convertObject(e,n){const r={};return Cr(e.fields,(s,i)=>{r[s]=this.convertValue(i,n)}),r}convertGeoPoint(e){return new bh(Ve(e.latitude),Ve(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=my(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(wi(e));default:return null}}convertTimestamp(e){const n=zn(e);return new je(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=Ne.fromString(e);Re(By(r));const s=new ns(r.get(1),r.get(3)),i=new z(r.popFirst(5));return s.isEqual(n)||vn(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bv(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function DO(t){t=en(t,lt);const e=en(t.firestore,Tr);return WA(_h(e),t._key).then(n=>Iv(e,t,n))}class Tv extends uR{constructor(e){super(),this.firestore=e}convertBytes(e){return new os(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new lt(this.firestore,null,n)}}function lR(t,e,n){t=en(t,lt);const r=en(t.firestore,Tr),s=bv(t.converter,e,n);return Ch(r,[pv(Za(r),"setDoc",t._key,s,t.converter!==null,n).toMutation(t._key,jt.none())])}function Pc(t,e,n,...r){t=en(t,lt);const s=en(t.firestore,Tr),i=Za(s);let o;return o=typeof(e=$e(e))=="string"||e instanceof Ja?eR(i,"updateDoc",t._key,e,n,r):ZA(i,"updateDoc",t._key,e),Ch(s,[o.toMutation(t._key,jt.exists(!0))])}function NO(t,e){const n=en(t.firestore,Tr),r=Us(t),s=bv(t.converter,e);return Ch(n,[pv(Za(t.firestore),"addDoc",r._key,s,t.converter!==null,{}).toMutation(r._key,jt.exists(!1))]).then(()=>r)}function OO(t,...e){var n,r,s;t=$e(t);let i={includeMetadataChanges:!1},o=0;typeof e[o]!="object"||$d(e[o])||(i=e[o],o++);const a={includeMetadataChanges:i.includeMetadataChanges};if($d(e[o])){const h=e[o];e[o]=(n=h.next)===null||n===void 0?void 0:n.bind(h),e[o+1]=(r=h.error)===null||r===void 0?void 0:r.bind(h),e[o+2]=(s=h.complete)===null||s===void 0?void 0:s.bind(h)}let c,u,l;if(t instanceof lt)u=en(t.firestore,Tr),l=qa(t._key.path),c={next:h=>{e[o]&&e[o](Iv(u,t,h))},error:e[o+1],complete:e[o+2]};else{const h=en(t,bs);u=en(h.firestore,Tr),l=h._query;const f=new Tv(u);c={next:p=>{e[o]&&e[o](new sR(u,f,h,p))},error:e[o+1],complete:e[o+2]},oR(t._query)}return function(h,f,p,d){const v=new cv(d),y=new tv(f,v,p);return h.asyncQueue.enqueueAndForget(async()=>Zy(await Lu(h),y)),()=>{v.Tc(),h.asyncQueue.enqueueAndForget(async()=>ev(await Lu(h),y))}}(_h(u),l,a,c)}function Ch(t,e){return function(n,r){const s=new Fn;return n.asyncQueue.enqueueAndForget(async()=>DA(await zA(n),r,s)),s.promise}(_h(t),e)}function Iv(t,e,n){const r=n.docs.get(e._key),s=new Tv(t);return new wv(t,s,e._key,r,new Fs(n.hasPendingWrites,n.fromCache),e.converter)}(function(t,e=!0){(function(n){vs=n})(ds),mr(new qn("firestore",(n,{options:r})=>{const s=n.getProvider("app").getImmediate(),i=new Tr(s,new _S(n.getProvider("auth-internal")),new IS(n.getProvider("app-check-internal")));return r=Object.assign({useFetchStreams:e},r),i._setSettings(r),i},"PUBLIC")),Yt(id,"3.4.14",t),Yt(id,"3.4.14","esm2017")})();/*!
  * vue-router v4.1.5
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */const Mr=typeof window<"u";function hR(t){return t.__esModule||t[Symbol.toStringTag]==="Module"}const _e=Object.assign;function xc(t,e){const n={};for(const r in e){const s=e[r];n[r]=Ht(s)?s.map(t):t(s)}return n}const Ys=()=>{},Ht=Array.isArray,fR=/\/$/,dR=t=>t.replace(fR,"");function Mc(t,e,n="/"){let r,s={},i="",o="";const a=e.indexOf("#");let c=e.indexOf("?");return a<c&&a>=0&&(c=-1),c>-1&&(r=e.slice(0,c),i=e.slice(c+1,a>-1?a:e.length),s=t(i)),a>-1&&(r=r||e.slice(0,a),o=e.slice(a,e.length)),r=yR(r!=null?r:e,n),{fullPath:r+(i&&"?")+i+o,path:r,query:s,hash:o}}function pR(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function Vd(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function mR(t,e,n){const r=e.matched.length-1,s=n.matched.length-1;return r>-1&&r===s&&as(e.matched[r],n.matched[s])&&Sv(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function as(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function Sv(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!gR(t[n],e[n]))return!1;return!0}function gR(t,e){return Ht(t)?Bd(t,e):Ht(e)?Bd(e,t):t===e}function Bd(t,e){return Ht(e)?t.length===e.length&&t.every((n,r)=>n===e[r]):t.length===1&&t[0]===e}function yR(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),r=t.split("/");let s=n.length-1,i,o;for(i=0;i<r.length;i++)if(o=r[i],o!==".")if(o==="..")s>1&&s--;else break;return n.slice(0,s).join("/")+"/"+r.slice(i-(i===r.length?1:0)).join("/")}var Ii;(function(t){t.pop="pop",t.push="push"})(Ii||(Ii={}));var Js;(function(t){t.back="back",t.forward="forward",t.unknown=""})(Js||(Js={}));function vR(t){if(!t)if(Mr){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),dR(t)}const wR=/^[^#]+#/;function _R(t,e){return t.replace(wR,"#")+e}function ER(t,e){const n=document.documentElement.getBoundingClientRect(),r=t.getBoundingClientRect();return{behavior:e.behavior,left:r.left-n.left-(e.left||0),top:r.top-n.top-(e.top||0)}}const nc=()=>({left:window.pageXOffset,top:window.pageYOffset});function bR(t){let e;if("el"in t){const n=t.el,r=typeof n=="string"&&n.startsWith("#"),s=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;e=ER(s,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.pageXOffset,e.top!=null?e.top:window.pageYOffset)}function jd(t,e){return(history.state?history.state.position-e:-1)+t}const Uu=new Map;function TR(t,e){Uu.set(t,e)}function IR(t){const e=Uu.get(t);return Uu.delete(t),e}let SR=()=>location.protocol+"//"+location.host;function Cv(t,e){const{pathname:n,search:r,hash:s}=e,i=t.indexOf("#");if(i>-1){let a=s.includes(t.slice(i))?t.slice(i).length:1,c=s.slice(a);return c[0]!=="/"&&(c="/"+c),Vd(c,"")}return Vd(n,t)+r+s}function CR(t,e,n,r){let s=[],i=[],o=null;const a=({state:f})=>{const p=Cv(t,location),d=n.value,v=e.value;let y=0;if(f){if(n.value=p,e.value=f,o&&o===d){o=null;return}y=v?f.position-v.position:0}else r(p);s.forEach(_=>{_(n.value,d,{delta:y,type:Ii.pop,direction:y?y>0?Js.forward:Js.back:Js.unknown})})};function c(){o=n.value}function u(f){s.push(f);const p=()=>{const d=s.indexOf(f);d>-1&&s.splice(d,1)};return i.push(p),p}function l(){const{history:f}=window;!f.state||f.replaceState(_e({},f.state,{scroll:nc()}),"")}function h(){for(const f of i)f();i=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",l)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",l),{pauseListeners:c,listen:u,destroy:h}}function qd(t,e,n,r=!1,s=!1){return{back:t,current:e,forward:n,replaced:r,position:window.history.length,scroll:s?nc():null}}function AR(t){const{history:e,location:n}=window,r={value:Cv(t,n)},s={value:e.state};s.value||i(r.value,{back:null,current:r.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function i(c,u,l){const h=t.indexOf("#"),f=h>-1?(n.host&&document.querySelector("base")?t:t.slice(h))+c:SR()+t+c;try{e[l?"replaceState":"pushState"](u,"",f),s.value=u}catch(p){console.error(p),n[l?"replace":"assign"](f)}}function o(c,u){const l=_e({},e.state,qd(s.value.back,c,s.value.forward,!0),u,{position:s.value.position});i(c,l,!0),r.value=c}function a(c,u){const l=_e({},s.value,e.state,{forward:c,scroll:nc()});i(l.current,l,!0);const h=_e({},qd(r.value,c,null),{position:l.position+1},u);i(c,h,!1),r.value=c}return{location:r,state:s,push:a,replace:o}}function RR(t){t=vR(t);const e=AR(t),n=CR(t,e.state,e.location,e.replace);function r(i,o=!0){o||n.pauseListeners(),history.go(i)}const s=_e({location:"",base:t,go:r,createHref:_R.bind(null,t)},e,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>e.state.value}),s}function kR(t){return typeof t=="string"||t&&typeof t=="object"}function Av(t){return typeof t=="string"||typeof t=="symbol"}const Cn={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},Rv=Symbol("");var Hd;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(Hd||(Hd={}));function cs(t,e){return _e(new Error,{type:t,[Rv]:!0},e)}function sn(t,e){return t instanceof Error&&Rv in t&&(e==null||!!(t.type&e))}const zd="[^/]+?",DR={sensitive:!1,strict:!1,start:!0,end:!0},NR=/[.+*?^${}()[\]/\\]/g;function OR(t,e){const n=_e({},DR,e),r=[];let s=n.start?"^":"";const i=[];for(const u of t){const l=u.length?[]:[90];n.strict&&!u.length&&(s+="/");for(let h=0;h<u.length;h++){const f=u[h];let p=40+(n.sensitive?.25:0);if(f.type===0)h||(s+="/"),s+=f.value.replace(NR,"\\$&"),p+=40;else if(f.type===1){const{value:d,repeatable:v,optional:y,regexp:_}=f;i.push({name:d,repeatable:v,optional:y});const A=_||zd;if(A!==zd){p+=10;try{new RegExp(`(${A})`)}catch(O){throw new Error(`Invalid custom RegExp for param "${d}" (${A}): `+O.message)}}let M=v?`((?:${A})(?:/(?:${A}))*)`:`(${A})`;h||(M=y&&u.length<2?`(?:/${M})`:"/"+M),y&&(M+="?"),s+=M,p+=20,y&&(p+=-8),v&&(p+=-20),A===".*"&&(p+=-50)}l.push(p)}r.push(l)}if(n.strict&&n.end){const u=r.length-1;r[u][r[u].length-1]+=.7000000000000001}n.strict||(s+="/?"),n.end?s+="$":n.strict&&(s+="(?:/|$)");const o=new RegExp(s,n.sensitive?"":"i");function a(u){const l=u.match(o),h={};if(!l)return null;for(let f=1;f<l.length;f++){const p=l[f]||"",d=i[f-1];h[d.name]=p&&d.repeatable?p.split("/"):p}return h}function c(u){let l="",h=!1;for(const f of t){(!h||!l.endsWith("/"))&&(l+="/"),h=!1;for(const p of f)if(p.type===0)l+=p.value;else if(p.type===1){const{value:d,repeatable:v,optional:y}=p,_=d in u?u[d]:"";if(Ht(_)&&!v)throw new Error(`Provided param "${d}" is an array but it is not repeatable (* or + modifiers)`);const A=Ht(_)?_.join("/"):_;if(!A)if(y)f.length<2&&(l.endsWith("/")?l=l.slice(0,-1):h=!0);else throw new Error(`Missing required param "${d}"`);l+=A}}return l||"/"}return{re:o,score:r,keys:i,parse:a,stringify:c}}function PR(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=e[n]-t[n];if(r)return r;n++}return t.length<e.length?t.length===1&&t[0]===40+40?-1:1:t.length>e.length?e.length===1&&e[0]===40+40?1:-1:0}function xR(t,e){let n=0;const r=t.score,s=e.score;for(;n<r.length&&n<s.length;){const i=PR(r[n],s[n]);if(i)return i;n++}if(Math.abs(s.length-r.length)===1){if(Wd(r))return 1;if(Wd(s))return-1}return s.length-r.length}function Wd(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const MR={type:0,value:""},LR=/[a-zA-Z0-9_]/;function $R(t){if(!t)return[[]];if(t==="/")return[[MR]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(p){throw new Error(`ERR (${n})/"${u}": ${p}`)}let n=0,r=n;const s=[];let i;function o(){i&&s.push(i),i=[]}let a=0,c,u="",l="";function h(){!u||(n===0?i.push({type:0,value:u}):n===1||n===2||n===3?(i.length>1&&(c==="*"||c==="+")&&e(`A repeatable param (${u}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:u,regexp:l,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):e("Invalid state to consume buffer"),u="")}function f(){u+=c}for(;a<t.length;){if(c=t[a++],c==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:c==="/"?(u&&h(),o()):c===":"?(h(),n=1):f();break;case 4:f(),n=r;break;case 1:c==="("?n=2:LR.test(c)?f():(h(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--);break;case 2:c===")"?l[l.length-1]=="\\"?l=l.slice(0,-1)+c:n=3:l+=c;break;case 3:h(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--,l="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${u}"`),h(),o(),s}function UR(t,e,n){const r=OR($R(t.path),n),s=_e(r,{record:t,parent:e,children:[],alias:[]});return e&&!s.record.aliasOf==!e.record.aliasOf&&e.children.push(s),s}function FR(t,e){const n=[],r=new Map;e=Xd({strict:!1,end:!0,sensitive:!1},e);function s(l){return r.get(l)}function i(l,h,f){const p=!f,d=VR(l);d.aliasOf=f&&f.record;const v=Xd(e,l),y=[d];if("alias"in l){const M=typeof l.alias=="string"?[l.alias]:l.alias;for(const O of M)y.push(_e({},d,{components:f?f.record.components:d.components,path:O,aliasOf:f?f.record:d}))}let _,A;for(const M of y){const{path:O}=M;if(h&&O[0]!=="/"){const V=h.record.path,ne=V[V.length-1]==="/"?"":"/";M.path=h.record.path+(O&&ne+O)}if(_=UR(M,h,v),f?f.alias.push(_):(A=A||_,A!==_&&A.alias.push(_),p&&l.name&&!Gd(_)&&o(l.name)),d.children){const V=d.children;for(let ne=0;ne<V.length;ne++)i(V[ne],_,f&&f.children[ne])}f=f||_,c(_)}return A?()=>{o(A)}:Ys}function o(l){if(Av(l)){const h=r.get(l);h&&(r.delete(l),n.splice(n.indexOf(h),1),h.children.forEach(o),h.alias.forEach(o))}else{const h=n.indexOf(l);h>-1&&(n.splice(h,1),l.record.name&&r.delete(l.record.name),l.children.forEach(o),l.alias.forEach(o))}}function a(){return n}function c(l){let h=0;for(;h<n.length&&xR(l,n[h])>=0&&(l.record.path!==n[h].record.path||!kv(l,n[h]));)h++;n.splice(h,0,l),l.record.name&&!Gd(l)&&r.set(l.record.name,l)}function u(l,h){let f,p={},d,v;if("name"in l&&l.name){if(f=r.get(l.name),!f)throw cs(1,{location:l});v=f.record.name,p=_e(Kd(h.params,f.keys.filter(A=>!A.optional).map(A=>A.name)),l.params&&Kd(l.params,f.keys.map(A=>A.name))),d=f.stringify(p)}else if("path"in l)d=l.path,f=n.find(A=>A.re.test(d)),f&&(p=f.parse(d),v=f.record.name);else{if(f=h.name?r.get(h.name):n.find(A=>A.re.test(h.path)),!f)throw cs(1,{location:l,currentLocation:h});v=f.record.name,p=_e({},h.params,l.params),d=f.stringify(p)}const y=[];let _=f;for(;_;)y.unshift(_.record),_=_.parent;return{name:v,path:d,params:p,matched:y,meta:jR(y)}}return t.forEach(l=>i(l)),{addRoute:i,resolve:u,removeRoute:o,getRoutes:a,getRecordMatcher:s}}function Kd(t,e){const n={};for(const r of e)r in t&&(n[r]=t[r]);return n}function VR(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:BR(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}}}function BR(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const r in t.components)e[r]=typeof n=="boolean"?n:n[r];return e}function Gd(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function jR(t){return t.reduce((e,n)=>_e(e,n.meta),{})}function Xd(t,e){const n={};for(const r in t)n[r]=r in e?e[r]:t[r];return n}function kv(t,e){return e.children.some(n=>n===t||kv(t,n))}const Dv=/#/g,qR=/&/g,HR=/\//g,zR=/=/g,WR=/\?/g,Nv=/\+/g,KR=/%5B/g,GR=/%5D/g,Ov=/%5E/g,XR=/%60/g,Pv=/%7B/g,QR=/%7C/g,xv=/%7D/g,YR=/%20/g;function Ah(t){return encodeURI(""+t).replace(QR,"|").replace(KR,"[").replace(GR,"]")}function JR(t){return Ah(t).replace(Pv,"{").replace(xv,"}").replace(Ov,"^")}function Fu(t){return Ah(t).replace(Nv,"%2B").replace(YR,"+").replace(Dv,"%23").replace(qR,"%26").replace(XR,"`").replace(Pv,"{").replace(xv,"}").replace(Ov,"^")}function ZR(t){return Fu(t).replace(zR,"%3D")}function e1(t){return Ah(t).replace(Dv,"%23").replace(WR,"%3F")}function t1(t){return t==null?"":e1(t).replace(HR,"%2F")}function ta(t){try{return decodeURIComponent(""+t)}catch{}return""+t}function n1(t){const e={};if(t===""||t==="?")return e;const r=(t[0]==="?"?t.slice(1):t).split("&");for(let s=0;s<r.length;++s){const i=r[s].replace(Nv," "),o=i.indexOf("="),a=ta(o<0?i:i.slice(0,o)),c=o<0?null:ta(i.slice(o+1));if(a in e){let u=e[a];Ht(u)||(u=e[a]=[u]),u.push(c)}else e[a]=c}return e}function Qd(t){let e="";for(let n in t){const r=t[n];if(n=ZR(n),r==null){r!==void 0&&(e+=(e.length?"&":"")+n);continue}(Ht(r)?r.map(i=>i&&Fu(i)):[r&&Fu(r)]).forEach(i=>{i!==void 0&&(e+=(e.length?"&":"")+n,i!=null&&(e+="="+i))})}return e}function r1(t){const e={};for(const n in t){const r=t[n];r!==void 0&&(e[n]=Ht(r)?r.map(s=>s==null?null:""+s):r==null?r:""+r)}return e}const s1=Symbol(""),Yd=Symbol(""),rc=Symbol(""),Mv=Symbol(""),Vu=Symbol("");function As(){let t=[];function e(r){return t.push(r),()=>{const s=t.indexOf(r);s>-1&&t.splice(s,1)}}function n(){t=[]}return{add:e,list:()=>t,reset:n}}function kn(t,e,n,r,s){const i=r&&(r.enterCallbacks[s]=r.enterCallbacks[s]||[]);return()=>new Promise((o,a)=>{const c=h=>{h===!1?a(cs(4,{from:n,to:e})):h instanceof Error?a(h):kR(h)?a(cs(2,{from:e,to:h})):(i&&r.enterCallbacks[s]===i&&typeof h=="function"&&i.push(h),o())},u=t.call(r&&r.instances[s],e,n,c);let l=Promise.resolve(u);t.length<3&&(l=l.then(c)),l.catch(h=>a(h))})}function Lc(t,e,n,r){const s=[];for(const i of t)for(const o in i.components){let a=i.components[o];if(!(e!=="beforeRouteEnter"&&!i.instances[o]))if(i1(a)){const u=(a.__vccOpts||a)[e];u&&s.push(kn(u,n,r,i,o))}else{let c=a();s.push(()=>c.then(u=>{if(!u)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${i.path}"`));const l=hR(u)?u.default:u;i.components[o]=l;const f=(l.__vccOpts||l)[e];return f&&kn(f,n,r,i,o)()}))}}return s}function i1(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function Jd(t){const e=xt(rc),n=xt(Mv),r=oe(()=>e.resolve(j(t.to))),s=oe(()=>{const{matched:c}=r.value,{length:u}=c,l=c[u-1],h=n.matched;if(!l||!h.length)return-1;const f=h.findIndex(as.bind(null,l));if(f>-1)return f;const p=Zd(c[u-2]);return u>1&&Zd(l)===p&&h[h.length-1].path!==p?h.findIndex(as.bind(null,c[u-2])):f}),i=oe(()=>s.value>-1&&u1(n.params,r.value.params)),o=oe(()=>s.value>-1&&s.value===n.matched.length-1&&Sv(n.params,r.value.params));function a(c={}){return c1(c)?e[j(t.replace)?"replace":"push"](j(t.to)).catch(Ys):Promise.resolve()}return{route:r,href:oe(()=>r.value.href),isActive:i,isExactActive:o,navigate:a}}const o1=al({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Jd,setup(t,{slots:e}){const n=zt(Jd(t)),{options:r}=xt(rc),s=oe(()=>({[ep(t.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[ep(t.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=e.default&&e.default(n);return t.custom?i:ba("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},i)}}}),a1=o1;function c1(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function u1(t,e){for(const n in e){const r=e[n],s=t[n];if(typeof r=="string"){if(r!==s)return!1}else if(!Ht(s)||s.length!==r.length||r.some((i,o)=>i!==s[o]))return!1}return!0}function Zd(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const ep=(t,e,n)=>t!=null?t:e!=null?e:n,l1=al({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const r=xt(Vu),s=oe(()=>t.route||r.value),i=xt(Yd,0),o=oe(()=>{let u=j(i);const{matched:l}=s.value;let h;for(;(h=l[u])&&!h.components;)u++;return u}),a=oe(()=>s.value.matched[o.value]);Hr(Yd,oe(()=>o.value+1)),Hr(s1,a),Hr(Vu,s);const c=Oe();return Ct(()=>[c.value,a.value,t.name],([u,l,h],[f,p,d])=>{l&&(l.instances[h]=u,p&&p!==l&&u&&u===f&&(l.leaveGuards.size||(l.leaveGuards=p.leaveGuards),l.updateGuards.size||(l.updateGuards=p.updateGuards))),u&&l&&(!p||!as(l,p)||!f)&&(l.enterCallbacks[h]||[]).forEach(v=>v(u))},{flush:"post"}),()=>{const u=s.value,l=t.name,h=a.value,f=h&&h.components[l];if(!f)return tp(n.default,{Component:f,route:u});const p=h.props[l],d=p?p===!0?u.params:typeof p=="function"?p(u):p:null,y=ba(f,_e({},d,e,{onVnodeUnmounted:_=>{_.component.isUnmounted&&(h.instances[l]=null)},ref:c}));return tp(n.default,{Component:y,route:u})||y}}});function tp(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const h1=l1;function f1(t){const e=FR(t.routes,t),n=t.parseQuery||n1,r=t.stringifyQuery||Qd,s=t.history,i=As(),o=As(),a=As(),c=n_(Cn);let u=Cn;Mr&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const l=xc.bind(null,E=>""+E),h=xc.bind(null,t1),f=xc.bind(null,ta);function p(E,B){let N,q;return Av(E)?(N=e.getRecordMatcher(E),q=B):q=E,e.addRoute(q,N)}function d(E){const B=e.getRecordMatcher(E);B&&e.removeRoute(B)}function v(){return e.getRoutes().map(E=>E.record)}function y(E){return!!e.getRecordMatcher(E)}function _(E,B){if(B=_e({},B||c.value),typeof E=="string"){const re=Mc(n,E,B.path),m=e.resolve({path:re.path},B),g=s.createHref(re.fullPath);return _e(re,m,{params:f(m.params),hash:ta(re.hash),redirectedFrom:void 0,href:g})}let N;if("path"in E)N=_e({},E,{path:Mc(n,E.path,B.path).path});else{const re=_e({},E.params);for(const m in re)re[m]==null&&delete re[m];N=_e({},E,{params:h(E.params)}),B.params=h(B.params)}const q=e.resolve(N,B),we=E.hash||"";q.params=l(f(q.params));const Ae=pR(r,_e({},E,{hash:JR(we),path:q.path})),ae=s.createHref(Ae);return _e({fullPath:Ae,hash:we,query:r===Qd?r1(E.query):E.query||{}},q,{redirectedFrom:void 0,href:ae})}function A(E){return typeof E=="string"?Mc(n,E,c.value.path):_e({},E)}function M(E,B){if(u!==E)return cs(8,{from:B,to:E})}function O(E){return G(E)}function V(E){return O(_e(A(E),{replace:!0}))}function ne(E){const B=E.matched[E.matched.length-1];if(B&&B.redirect){const{redirect:N}=B;let q=typeof N=="function"?N(E):N;return typeof q=="string"&&(q=q.includes("?")||q.includes("#")?q=A(q):{path:q},q.params={}),_e({query:E.query,hash:E.hash,params:"path"in q?{}:E.params},q)}}function G(E,B){const N=u=_(E),q=c.value,we=E.state,Ae=E.force,ae=E.replace===!0,re=ne(N);if(re)return G(_e(A(re),{state:typeof re=="object"?_e({},we,re.state):we,force:Ae,replace:ae}),B||N);const m=N;m.redirectedFrom=B;let g;return!Ae&&mR(r,q,N)&&(g=cs(16,{to:m,from:q}),Te(q,q,!0,!1)),(g?Promise.resolve(g):Y(m,q)).catch(w=>sn(w)?sn(w,2)?w:ht(w):be(w,m,q)).then(w=>{if(w){if(sn(w,2))return G(_e({replace:ae},A(w.to),{state:typeof w.to=="object"?_e({},we,w.to.state):we,force:Ae}),B||m)}else w=Ee(m,q,!0,ae,we);return ue(m,q,w),w})}function x(E,B){const N=M(E,B);return N?Promise.reject(N):Promise.resolve()}function Y(E,B){let N;const[q,we,Ae]=d1(E,B);N=Lc(q.reverse(),"beforeRouteLeave",E,B);for(const re of q)re.leaveGuards.forEach(m=>{N.push(kn(m,E,B))});const ae=x.bind(null,E,B);return N.push(ae),Nr(N).then(()=>{N=[];for(const re of i.list())N.push(kn(re,E,B));return N.push(ae),Nr(N)}).then(()=>{N=Lc(we,"beforeRouteUpdate",E,B);for(const re of we)re.updateGuards.forEach(m=>{N.push(kn(m,E,B))});return N.push(ae),Nr(N)}).then(()=>{N=[];for(const re of E.matched)if(re.beforeEnter&&!B.matched.includes(re))if(Ht(re.beforeEnter))for(const m of re.beforeEnter)N.push(kn(m,E,B));else N.push(kn(re.beforeEnter,E,B));return N.push(ae),Nr(N)}).then(()=>(E.matched.forEach(re=>re.enterCallbacks={}),N=Lc(Ae,"beforeRouteEnter",E,B),N.push(ae),Nr(N))).then(()=>{N=[];for(const re of o.list())N.push(kn(re,E,B));return N.push(ae),Nr(N)}).catch(re=>sn(re,8)?re:Promise.reject(re))}function ue(E,B,N){for(const q of a.list())q(E,B,N)}function Ee(E,B,N,q,we){const Ae=M(E,B);if(Ae)return Ae;const ae=B===Cn,re=Mr?history.state:{};N&&(q||ae?s.replace(E.fullPath,_e({scroll:ae&&re&&re.scroll},we)):s.push(E.fullPath,we)),c.value=E,Te(E,B,N,ae),ht()}let L;function me(){L||(L=s.listen((E,B,N)=>{if(!Ts.listening)return;const q=_(E),we=ne(q);if(we){G(_e(we,{replace:!0}),q).catch(Ys);return}u=q;const Ae=c.value;Mr&&TR(jd(Ae.fullPath,N.delta),nc()),Y(q,Ae).catch(ae=>sn(ae,12)?ae:sn(ae,2)?(G(ae.to,q).then(re=>{sn(re,20)&&!N.delta&&N.type===Ii.pop&&s.go(-1,!1)}).catch(Ys),Promise.reject()):(N.delta&&s.go(-N.delta,!1),be(ae,q,Ae))).then(ae=>{ae=ae||Ee(q,Ae,!1),ae&&(N.delta&&!sn(ae,8)?s.go(-N.delta,!1):N.type===Ii.pop&&sn(ae,20)&&s.go(-1,!1)),ue(q,Ae,ae)}).catch(Ys)}))}let Pe=As(),xe=As(),ke;function be(E,B,N){ht(E);const q=xe.list();return q.length?q.forEach(we=>we(E,B,N)):console.error(E),Promise.reject(E)}function ve(){return ke&&c.value!==Cn?Promise.resolve():new Promise((E,B)=>{Pe.add([E,B])})}function ht(E){return ke||(ke=!E,me(),Pe.list().forEach(([B,N])=>E?N(E):B()),Pe.reset()),E}function Te(E,B,N,q){const{scrollBehavior:we}=t;if(!Mr||!we)return Promise.resolve();const Ae=!N&&IR(jd(E.fullPath,0))||(q||!N)&&history.state&&history.state.scroll||null;return si().then(()=>we(E,B,Ae)).then(ae=>ae&&bR(ae)).catch(ae=>be(ae,E,B))}const et=E=>s.go(E);let ze;const kt=new Set,Ts={currentRoute:c,listening:!0,addRoute:p,removeRoute:d,hasRoute:y,getRoutes:v,resolve:_,options:t,push:O,replace:V,go:et,back:()=>et(-1),forward:()=>et(1),beforeEach:i.add,beforeResolve:o.add,afterEach:a.add,onError:xe.add,isReady:ve,install(E){const B=this;E.component("RouterLink",a1),E.component("RouterView",h1),E.config.globalProperties.$router=B,Object.defineProperty(E.config.globalProperties,"$route",{enumerable:!0,get:()=>j(c)}),Mr&&!ze&&c.value===Cn&&(ze=!0,O(s.location).catch(we=>{}));const N={};for(const we in Cn)N[we]=oe(()=>c.value[we]);E.provide(rc,B),E.provide(Mv,zt(N)),E.provide(Vu,c);const q=E.unmount;kt.add(E),E.unmount=function(){kt.delete(E),kt.size<1&&(u=Cn,L&&L(),L=null,c.value=Cn,ze=!1,ke=!1),q()}}};return Ts}function Nr(t){return t.reduce((e,n)=>e.then(()=>n()),Promise.resolve())}function d1(t,e){const n=[],r=[],s=[],i=Math.max(e.matched.length,t.matched.length);for(let o=0;o<i;o++){const a=e.matched[o];a&&(t.matched.find(u=>as(u,a))?r.push(a):n.push(a));const c=t.matched[o];c&&(e.matched.find(u=>as(u,c))||s.push(c))}return[n,r,s]}function Zs(){return xt(rc)}var p1="firebase",m1="9.9.3";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Yt(p1,m1,"app");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lv="firebasestorage.googleapis.com",$v="storageBucket",g1=2*60*1e3,y1=10*60*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ue extends rn{constructor(e,n){super($c(e),`Firebase Storage: ${n} (${$c(e)})`),this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,Ue.prototype)}_codeEquals(e){return $c(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}function $c(t){return"storage/"+t}function Rh(){const t="An unknown error occurred, please check the error payload for server response.";return new Ue("unknown",t)}function v1(t){return new Ue("object-not-found","Object '"+t+"' does not exist.")}function w1(t){return new Ue("quota-exceeded","Quota for bucket '"+t+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function _1(){const t="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new Ue("unauthenticated",t)}function E1(){return new Ue("unauthorized-app","This app does not have permission to access Firebase Storage on this project.")}function b1(t){return new Ue("unauthorized","User does not have permission to access '"+t+"'.")}function T1(){return new Ue("retry-limit-exceeded","Max retry time for operation exceeded, please try again.")}function I1(){return new Ue("canceled","User canceled the upload/download.")}function S1(t){return new Ue("invalid-url","Invalid URL '"+t+"'.")}function C1(t){return new Ue("invalid-default-bucket","Invalid default bucket '"+t+"'.")}function A1(){return new Ue("no-default-bucket","No default bucket found. Did you set the '"+$v+"' property when initializing the app?")}function R1(){return new Ue("cannot-slice-blob","Cannot slice blob for upload. Please retry the upload.")}function k1(){return new Ue("no-download-url","The given file does not have any download URLs.")}function Bu(t){return new Ue("invalid-argument",t)}function Uv(){return new Ue("app-deleted","The Firebase app was deleted.")}function D1(t){return new Ue("invalid-root-operation","The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function ei(t,e){return new Ue("invalid-format","String does not match format '"+t+"': "+e)}function Rs(t){throw new Ue("internal-error","Internal error: "+t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class St{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let r;try{r=St.makeFromUrl(e,n)}catch{return new St(e,"")}if(r.path==="")return r;throw C1(e)}static makeFromUrl(e,n){let r=null;const s="([A-Za-z0-9.\\-_]+)";function i(O){O.path.charAt(O.path.length-1)==="/"&&(O.path_=O.path_.slice(0,-1))}const o="(/(.*))?$",a=new RegExp("^gs://"+s+o,"i"),c={bucket:1,path:3};function u(O){O.path_=decodeURIComponent(O.path)}const l="v[A-Za-z0-9_]+",h=n.replace(/[.]/g,"\\."),f="(/([^?#]*).*)?$",p=new RegExp(`^https?://${h}/${l}/b/${s}/o${f}`,"i"),d={bucket:1,path:3},v=n===Lv?"(?:storage.googleapis.com|storage.cloud.google.com)":n,y="([^?#]*)",_=new RegExp(`^https?://${v}/${s}/${y}`,"i"),M=[{regex:a,indices:c,postModify:i},{regex:p,indices:d,postModify:u},{regex:_,indices:{bucket:1,path:2},postModify:u}];for(let O=0;O<M.length;O++){const V=M[O],ne=V.regex.exec(e);if(ne){const G=ne[V.indices.bucket];let x=ne[V.indices.path];x||(x=""),r=new St(G,x),V.postModify(r);break}}if(r==null)throw S1(e);return r}}class N1{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function O1(t,e,n){let r=1,s=null,i=null,o=!1,a=0;function c(){return a===2}let u=!1;function l(...y){u||(u=!0,e.apply(null,y))}function h(y){s=setTimeout(()=>{s=null,t(p,c())},y)}function f(){i&&clearTimeout(i)}function p(y,..._){if(u){f();return}if(y){f(),l.call(null,y,..._);return}if(c()||o){f(),l.call(null,y,..._);return}r<64&&(r*=2);let M;a===1?(a=2,M=0):M=(r+Math.random())*1e3,h(M)}let d=!1;function v(y){d||(d=!0,f(),!u&&(s!==null?(y||(a=2),clearTimeout(s),h(0)):y||(a=1)))}return h(0),i=setTimeout(()=>{o=!0,v(!0)},n),v}function P1(t){t(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function x1(t){return t!==void 0}function M1(t){return typeof t=="object"&&!Array.isArray(t)}function kh(t){return typeof t=="string"||t instanceof String}function np(t){return Dh()&&t instanceof Blob}function Dh(){return typeof Blob<"u"}function rp(t,e,n,r){if(r<e)throw Bu(`Invalid value for '${t}'. Expected ${e} or greater.`);if(r>n)throw Bu(`Invalid value for '${t}'. Expected ${n} or less.`)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sc(t,e,n){let r=e;return n==null&&(r=`https://${e}`),`${n}://${r}/v0${t}`}function Fv(t){const e=encodeURIComponent;let n="?";for(const r in t)if(t.hasOwnProperty(r)){const s=e(r)+"="+e(t[r]);n=n+s+"&"}return n=n.slice(0,-1),n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var dr;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(dr||(dr={}));/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class L1{constructor(e,n,r,s,i,o,a,c,u,l,h){this.url_=e,this.method_=n,this.headers_=r,this.body_=s,this.successCodes_=i,this.additionalRetryCodes_=o,this.callback_=a,this.errorCallback_=c,this.timeout_=u,this.progressCallback_=l,this.connectionFactory_=h,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((f,p)=>{this.resolve_=f,this.reject_=p,this.start_()})}start_(){const e=(r,s)=>{if(s){r(!1,new co(!1,null,!0));return}const i=this.connectionFactory_();this.pendingConnection_=i;const o=a=>{const c=a.loaded,u=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(c,u)};this.progressCallback_!==null&&i.addUploadProgressListener(o),i.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&i.removeUploadProgressListener(o),this.pendingConnection_=null;const a=i.getErrorCode()===dr.NO_ERROR,c=i.getStatus();if(!a||this.isRetryStatusCode_(c)){const l=i.getErrorCode()===dr.ABORT;r(!1,new co(!1,null,l));return}const u=this.successCodes_.indexOf(c)!==-1;r(!0,new co(u,i))})},n=(r,s)=>{const i=this.resolve_,o=this.reject_,a=s.connection;if(s.wasSuccessCode)try{const c=this.callback_(a,a.getResponse());x1(c)?i(c):i()}catch(c){o(c)}else if(a!==null){const c=Rh();c.serverResponse=a.getErrorText(),this.errorCallback_?o(this.errorCallback_(a,c)):o(c)}else if(s.canceled){const c=this.appDelete_?Uv():I1();o(c)}else{const c=T1();o(c)}};this.canceled_?n(!1,new co(!1,null,!0)):this.backoffId_=O1(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&P1(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}isRetryStatusCode_(e){const n=e>=500&&e<600,s=[408,429].indexOf(e)!==-1,i=this.additionalRetryCodes_.indexOf(e)!==-1;return n||s||i}}class co{constructor(e,n,r){this.wasSuccessCode=e,this.connection=n,this.canceled=!!r}}function $1(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function U1(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e!=null?e:"AppManager")}function F1(t,e){e&&(t["X-Firebase-GMPID"]=e)}function V1(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function B1(t,e,n,r,s,i){const o=Fv(t.urlParams),a=t.url+o,c=Object.assign({},t.headers);return F1(c,e),$1(c,n),U1(c,i),V1(c,r),new L1(a,t.method,c,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,s)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function j1(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function q1(...t){const e=j1();if(e!==void 0){const n=new e;for(let r=0;r<t.length;r++)n.append(t[r]);return n.getBlob()}else{if(Dh())return new Blob(t);throw new Ue("unsupported-environment","This browser doesn't seem to support creating Blobs")}}function H1(t,e,n){return t.webkitSlice?t.webkitSlice(e,n):t.mozSlice?t.mozSlice(e,n):t.slice?t.slice(e,n):null}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function z1(t){return atob(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qt={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class Uc{constructor(e,n){this.data=e,this.contentType=n||null}}function W1(t,e){switch(t){case Qt.RAW:return new Uc(Vv(e));case Qt.BASE64:case Qt.BASE64URL:return new Uc(Bv(t,e));case Qt.DATA_URL:return new Uc(G1(e),X1(e))}throw Rh()}function Vv(t){const e=[];for(let n=0;n<t.length;n++){let r=t.charCodeAt(n);if(r<=127)e.push(r);else if(r<=2047)e.push(192|r>>6,128|r&63);else if((r&64512)===55296)if(!(n<t.length-1&&(t.charCodeAt(n+1)&64512)===56320))e.push(239,191,189);else{const i=r,o=t.charCodeAt(++n);r=65536|(i&1023)<<10|o&1023,e.push(240|r>>18,128|r>>12&63,128|r>>6&63,128|r&63)}else(r&64512)===56320?e.push(239,191,189):e.push(224|r>>12,128|r>>6&63,128|r&63)}return new Uint8Array(e)}function K1(t){let e;try{e=decodeURIComponent(t)}catch{throw ei(Qt.DATA_URL,"Malformed data URL.")}return Vv(e)}function Bv(t,e){switch(t){case Qt.BASE64:{const s=e.indexOf("-")!==-1,i=e.indexOf("_")!==-1;if(s||i)throw ei(t,"Invalid character '"+(s?"-":"_")+"' found: is it base64url encoded?");break}case Qt.BASE64URL:{const s=e.indexOf("+")!==-1,i=e.indexOf("/")!==-1;if(s||i)throw ei(t,"Invalid character '"+(s?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=z1(e)}catch{throw ei(t,"Invalid character found")}const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r}class jv{constructor(e){this.base64=!1,this.contentType=null;const n=e.match(/^data:([^,]+)?,/);if(n===null)throw ei(Qt.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const r=n[1]||null;r!=null&&(this.base64=Q1(r,";base64"),this.contentType=this.base64?r.substring(0,r.length-7):r),this.rest=e.substring(e.indexOf(",")+1)}}function G1(t){const e=new jv(t);return e.base64?Bv(Qt.BASE64,e.rest):K1(e.rest)}function X1(t){return new jv(t).contentType}function Q1(t,e){return t.length>=e.length?t.substring(t.length-e.length)===e:!1}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mn{constructor(e,n){let r=0,s="";np(e)?(this.data_=e,r=e.size,s=e.type):e instanceof ArrayBuffer?(n?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),r=this.data_.length):e instanceof Uint8Array&&(n?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),r=e.length),this.size_=r,this.type_=s}size(){return this.size_}type(){return this.type_}slice(e,n){if(np(this.data_)){const r=this.data_,s=H1(r,e,n);return s===null?null:new Mn(s)}else{const r=new Uint8Array(this.data_.buffer,e,n-e);return new Mn(r,!0)}}static getBlob(...e){if(Dh()){const n=e.map(r=>r instanceof Mn?r.data_:r);return new Mn(q1.apply(null,n))}else{const n=e.map(o=>kh(o)?W1(Qt.RAW,o).data:o.data_);let r=0;n.forEach(o=>{r+=o.byteLength});const s=new Uint8Array(r);let i=0;return n.forEach(o=>{for(let a=0;a<o.length;a++)s[i++]=o[a]}),new Mn(s,!0)}}uploadData(){return this.data_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qv(t){let e;try{e=JSON.parse(t)}catch{return null}return M1(e)?e:null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Y1(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function J1(t,e){const n=e.split("/").filter(r=>r.length>0).join("/");return t.length===0?n:t+"/"+n}function Hv(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Z1(t,e){return e}class ft{constructor(e,n,r,s){this.server=e,this.local=n||e,this.writable=!!r,this.xform=s||Z1}}let uo=null;function ek(t){return!kh(t)||t.length<2?t:Hv(t)}function zv(){if(uo)return uo;const t=[];t.push(new ft("bucket")),t.push(new ft("generation")),t.push(new ft("metageneration")),t.push(new ft("name","fullPath",!0));function e(i,o){return ek(o)}const n=new ft("name");n.xform=e,t.push(n);function r(i,o){return o!==void 0?Number(o):o}const s=new ft("size");return s.xform=r,t.push(s),t.push(new ft("timeCreated")),t.push(new ft("updated")),t.push(new ft("md5Hash",null,!0)),t.push(new ft("cacheControl",null,!0)),t.push(new ft("contentDisposition",null,!0)),t.push(new ft("contentEncoding",null,!0)),t.push(new ft("contentLanguage",null,!0)),t.push(new ft("contentType",null,!0)),t.push(new ft("metadata","customMetadata",!0)),uo=t,uo}function tk(t,e){function n(){const r=t.bucket,s=t.fullPath,i=new St(r,s);return e._makeStorageReference(i)}Object.defineProperty(t,"ref",{get:n})}function nk(t,e,n){const r={};r.type="file";const s=n.length;for(let i=0;i<s;i++){const o=n[i];r[o.local]=o.xform(r,e[o.server])}return tk(r,t),r}function Wv(t,e,n){const r=qv(e);return r===null?null:nk(t,r,n)}function rk(t,e,n,r){const s=qv(e);if(s===null||!kh(s.downloadTokens))return null;const i=s.downloadTokens;if(i.length===0)return null;const o=encodeURIComponent;return i.split(",").map(u=>{const l=t.bucket,h=t.fullPath,f="/b/"+o(l)+"/o/"+o(h),p=sc(f,n,r),d=Fv({alt:"media",token:u});return p+d})[0]}function sk(t,e){const n={},r=e.length;for(let s=0;s<r;s++){const i=e[s];i.writable&&(n[i.server]=t[i.local])}return JSON.stringify(n)}class Nh{constructor(e,n,r,s){this.url=e,this.method=n,this.handler=r,this.timeout=s,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kv(t){if(!t)throw Rh()}function ik(t,e){function n(r,s){const i=Wv(t,s,e);return Kv(i!==null),i}return n}function ok(t,e){function n(r,s){const i=Wv(t,s,e);return Kv(i!==null),rk(i,s,t.host,t._protocol)}return n}function Gv(t){function e(n,r){let s;return n.getStatus()===401?n.getErrorText().includes("Firebase App Check token is invalid")?s=E1():s=_1():n.getStatus()===402?s=w1(t.bucket):n.getStatus()===403?s=b1(t.path):s=r,s.serverResponse=r.serverResponse,s}return e}function Xv(t){const e=Gv(t);function n(r,s){let i=e(r,s);return r.getStatus()===404&&(i=v1(t.path)),i.serverResponse=s.serverResponse,i}return n}function ak(t,e,n){const r=e.fullServerUrl(),s=sc(r,t.host,t._protocol),i="GET",o=t.maxOperationRetryTime,a=new Nh(s,i,ok(t,n),o);return a.errorHandler=Xv(e),a}function ck(t,e){const n=e.fullServerUrl(),r=sc(n,t.host,t._protocol),s="DELETE",i=t.maxOperationRetryTime;function o(c,u){}const a=new Nh(r,s,o,i);return a.successCodes=[200,204],a.errorHandler=Xv(e),a}function uk(t,e){return t&&t.contentType||e&&e.type()||"application/octet-stream"}function lk(t,e,n){const r=Object.assign({},n);return r.fullPath=t.path,r.size=e.size(),r.contentType||(r.contentType=uk(null,e)),r}function hk(t,e,n,r,s){const i=e.bucketOnlyServerUrl(),o={"X-Goog-Upload-Protocol":"multipart"};function a(){let M="";for(let O=0;O<2;O++)M=M+Math.random().toString().slice(2);return M}const c=a();o["Content-Type"]="multipart/related; boundary="+c;const u=lk(e,r,s),l=sk(u,n),h="--"+c+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+l+`\r
--`+c+`\r
Content-Type: `+u.contentType+`\r
\r
`,f=`\r
--`+c+"--",p=Mn.getBlob(h,r,f);if(p===null)throw R1();const d={name:u.fullPath},v=sc(i,t.host,t._protocol),y="POST",_=t.maxUploadRetryTime,A=new Nh(v,y,ik(t,n),_);return A.urlParams=d,A.headers=o,A.body=p.uploadData(),A.errorHandler=Gv(e),A}class fk{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=dr.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=dr.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=dr.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,n,r,s){if(this.sent_)throw Rs("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(n,e,!0),s!==void 0)for(const i in s)s.hasOwnProperty(i)&&this.xhr_.setRequestHeader(i,s[i].toString());return r!==void 0?this.xhr_.send(r):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw Rs("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw Rs("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw Rs("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw Rs("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class dk extends fk{initXhr(){this.xhr_.responseType="text"}}function Oh(){return new dk}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ir{constructor(e,n){this._service=e,n instanceof St?this._location=n:this._location=St.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new Ir(e,n)}get root(){const e=new St(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return Hv(this._location.path)}get storage(){return this._service}get parent(){const e=Y1(this._location.path);if(e===null)return null;const n=new St(this._location.bucket,e);return new Ir(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw D1(e)}}function pk(t,e,n){t._throwIfRoot("uploadBytes");const r=hk(t.storage,t._location,zv(),new Mn(e,!0),n);return t.storage.makeRequestWithTokens(r,Oh).then(s=>({metadata:s,ref:t}))}function mk(t){t._throwIfRoot("getDownloadURL");const e=ak(t.storage,t._location,zv());return t.storage.makeRequestWithTokens(e,Oh).then(n=>{if(n===null)throw k1();return n})}function gk(t){t._throwIfRoot("deleteObject");const e=ck(t.storage,t._location);return t.storage.makeRequestWithTokens(e,Oh)}function yk(t,e){const n=J1(t._location.path,e),r=new St(t._location.bucket,n);return new Ir(t.storage,r)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vk(t){return/^[A-Za-z]+:\/\//.test(t)}function wk(t,e){return new Ir(t,e)}function Qv(t,e){if(t instanceof Ph){const n=t;if(n._bucket==null)throw A1();const r=new Ir(n,n._bucket);return e!=null?Qv(r,e):r}else return e!==void 0?yk(t,e):t}function _k(t,e){if(e&&vk(e)){if(t instanceof Ph)return wk(t,e);throw Bu("To use ref(service, url), the first argument must be a Storage instance.")}else return Qv(t,e)}function sp(t,e){const n=e==null?void 0:e[$v];return n==null?null:St.makeFromBucketSpec(n,t)}class Ph{constructor(e,n,r,s,i){this.app=e,this._authProvider=n,this._appCheckProvider=r,this._url=s,this._firebaseVersion=i,this._bucket=null,this._host=Lv,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=g1,this._maxUploadRetryTime=y1,this._requests=new Set,s!=null?this._bucket=St.makeFromBucketSpec(s,this._host):this._bucket=sp(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=St.makeFromBucketSpec(this._url,e):this._bucket=sp(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){rp("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){rp("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new Ir(this,e)}_makeRequest(e,n,r,s){if(this._deleted)return new N1(Uv());{const i=B1(e,this._appId,r,s,n,this._firebaseVersion);return this._requests.add(i),i.getPromise().then(()=>this._requests.delete(i),()=>this._requests.delete(i)),i}}async makeRequestWithTokens(e,n){const[r,s]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,r,s).getPromise()}}const ip="@firebase/storage",op="0.9.9";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yv="storage";function PO(t,e,n){return t=$e(t),pk(t,e,n)}function xO(t){return t=$e(t),mk(t)}function MO(t){return t=$e(t),gk(t)}function LO(t,e){return t=$e(t),_k(t,e)}function Ek(t=wl(),e){return t=$e(t),Ia(t,Yv).getImmediate({identifier:e})}function bk(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),r=t.getProvider("auth-internal"),s=t.getProvider("app-check-internal");return new Ph(n,r,s,e,ds)}function Tk(){mr(new qn(Yv,bk,"PUBLIC").setMultipleInstances(!0)),Yt(ip,op,""),Yt(ip,op,"esm2017")}Tk();const Ik={apiKey:"AIzaSyAXoMjidvObHiglzOE50M7tt4mms_SG318",authDomain:"chatapp-b8958.firebaseapp.com",projectId:"chatapp-b8958",storageBucket:"chatapp-b8958.appspot.com",messagingSenderId:"484438330865",appId:"1:484438330865:web:1fc437cf144f556f81c850"},xh=o0(Ik),Vs=hI(xh),lo=XA(xh),$O=Ek(xh),ic=GE({id:"auth",state:()=>({user:null,registerLoading:!1,loginLoading:!1,registerError:"",loginError:""}),actions:{async registerUser(t,e,n){const r=Zs();this.registerLoading=!0,this.registerError="";try{const s=await J0(Vs,e,n);await lR(Us(lo,"users",s.user.uid),{uid:s.user.uid,username:t,email:e,avatar:"",avatarPath:"",bio:"",createdAt:je.fromDate(new Date),online:!0}),this.user=s.user,this.registerLoading=!1,sessionStorage.setItem("userEmail",s.user.email);try{await r.push("/chat")}catch(i){console.error("Navigation error:",i)}}catch(s){this.registerError=s.message,this.registerLoading=!1,console.error("Registration error:",this.registerError)}},async loginUser(t,e){const n=Zs();this.loginLoading=!0,this.loginError="";try{const r=await Z0(Vs,t,e);await Pc(Us(lo,"users",r.user.uid),{online:!0}),this.user=r.user,this.loginLoading=!1,sessionStorage.setItem("userEmail",r.user.email);try{await n.push("/")}catch(s){console.error("Navigation error:",s)}}catch(r){this.loginError=r.message,this.loginLoading=!1,console.error("Login error:",this.loginError)}},async logOut(){var e;const t=Zs();try{(e=this.user)!=null&&e.uid&&await Pc(Us(lo,"users",this.user.uid),{online:!1}),await eT(Vs),this.user=null,sessionStorage.removeItem("userEmail");try{await t.push("/")}catch(n){console.error("Navigation error:",n)}}catch(n){console.error("Error logging out:",n)}},initUser(){tg(Vs,async t=>{t?(this.user=t,await Pc(Us(lo,"users",t.uid),{online:!0})):this.user=null})}}}),Sk={class:"w-full h-16 flex-between p-2"},Ck={class:"flex p-3"},Ak=["src"],Rk=X("h2",{class:"ml-6 flex items-center text-xl"},"Pace Chats",-1),Jv={__name:"Navbar",setup(t){const e=ic(),n=Oe("");return pa(()=>{n.value=e.userData}),(r,s)=>(pt(),Ut("div",null,[X("header",null,[X("nav",Sk,[X("div",Ck,[X("img",{src:j(gl),alt:"Logo",class:"w-10 h-10"},null,8,Ak),Rk])])])]))}};const kk=(t,e)=>{const n=t.__vccOpts||t;for(const[r,s]of e)n[r]=s;return n},Dk={class:"app-container"},Nk={key:0,class:"offline-banner"},Ok={__name:"App",setup(t){const e=ic(),n=Oe(""),r=Oe(navigator.onLine);pa(()=>{n.value=e.userData});const s=()=>{r.value=navigator.onLine};return ul(()=>(window.addEventListener("online",s),window.addEventListener("offline",s),window.addEventListener("beforeinstallprompt",i=>{i.preventDefault(),window.deferredPrompt=i}),()=>{window.removeEventListener("online",s),window.removeEventListener("offline",s)})),(i,o)=>{const a=Do("router-view"),c=Do("UpdatePrompt");return pt(),Ut("div",Dk,[r.value?un("",!0):(pt(),Ut("div",Nk," You are currently offline. Some features may be limited. ")),Ye(a,null,{default:oi(({Component:u})=>[Ye(ml,{name:"slide-fade",mode:"out-in"},{default:oi(()=>[(pt(),va(x_(u)))]),_:2},1024)]),_:1}),Ye(c)])}}},Pk=kk(Ok,[["__scopeId","data-v-2d661221"]]),xk="modulepreload",Mk=function(t){return"/chat/"+t},ap={},cp=function(e,n,r){return!n||n.length===0?e():Promise.all(n.map(s=>{if(s=Mk(s),s in ap)return;ap[s]=!0;const i=s.endsWith(".css"),o=i?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${s}"]${o}`))return;const a=document.createElement("link");if(a.rel=i?"stylesheet":xk,i||(a.as="script",a.crossOrigin=""),a.href=s,document.head.appendChild(a),i)return new Promise((c,u)=>{a.addEventListener("load",c),a.addEventListener("error",()=>u(new Error(`Unable to preload CSS for ${s}`)))})})).then(()=>e())};function up(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:[];return Object.keys(t).reduce((n,r)=>(e.includes(r)||(n[r]=j(t[r])),n),{})}function na(t){return typeof t=="function"}function Lk(t){return dn(t)||Qr(t)}function Zv(t,e,n){let r=t;const s=e.split(".");for(let i=0;i<s.length;i++){if(!r[s[i]])return n;r=r[s[i]]}return r}function Fc(t,e,n){return oe(()=>t.some(r=>Zv(e,r,{[n]:!1})[n]))}function lp(t,e,n){return oe(()=>t.reduce((r,s)=>{const i=Zv(e,s,{[n]:!1})[n]||[];return r.concat(i)},[]))}function ew(t,e,n,r){return t.call(r,j(e),j(n),r)}function tw(t){return t.$valid!==void 0?!t.$valid:!t}function $k(t,e,n,r,s,i,o){let{$lazy:a,$rewardEarly:c}=s,u=arguments.length>7&&arguments[7]!==void 0?arguments[7]:[],l=arguments.length>8?arguments[8]:void 0,h=arguments.length>9?arguments[9]:void 0,f=arguments.length>10?arguments[10]:void 0;const p=Oe(!!r.value),d=Oe(0);n.value=!1;const v=Ct([e,r].concat(u,f),()=>{if(a&&!r.value||c&&!h.value&&!n.value)return;let y;try{y=ew(t,e,l,o)}catch(_){y=Promise.reject(_)}d.value++,n.value=!!d.value,p.value=!1,Promise.resolve(y).then(_=>{d.value--,n.value=!!d.value,i.value=_,p.value=tw(_)}).catch(_=>{d.value--,n.value=!!d.value,i.value=_,p.value=!0})},{immediate:!0,deep:typeof e=="object"});return{$invalid:p,$unwatch:v}}function Uk(t,e,n,r,s,i,o,a){let{$lazy:c,$rewardEarly:u}=r;const l=()=>({}),h=oe(()=>{if(c&&!n.value||u&&!a.value)return!1;let f=!0;try{const p=ew(t,e,o,i);s.value=p,f=tw(p)}catch(p){s.value=p}return f});return{$unwatch:l,$invalid:h}}function Fk(t,e,n,r,s,i,o,a,c,u,l){const h=Oe(!1),f=t.$params||{},p=Oe(null);let d,v;t.$async?{$invalid:d,$unwatch:v}=$k(t.$validator,e,h,n,r,p,s,t.$watchTargets,c,u,l):{$invalid:d,$unwatch:v}=Uk(t.$validator,e,n,r,p,s,c,u);const y=t.$message;return{$message:na(y)?oe(()=>y(up({$pending:h,$invalid:d,$params:up(f),$model:e,$response:p,$validator:i,$propertyPath:a,$property:o}))):y||"",$params:f,$pending:h,$invalid:d,$response:p,$unwatch:v}}function Vk(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const e=j(t),n=Object.keys(e),r={},s={},i={};let o=null;return n.forEach(a=>{const c=e[a];switch(!0){case na(c.$validator):r[a]=c;break;case na(c):r[a]={$validator:c};break;case a==="$validationGroups":o=c;break;case a.startsWith("$"):i[a]=c;break;default:s[a]=c}}),{rules:r,nestedValidators:s,config:i,validationGroups:o}}function Bk(){}const jk="__root";function nw(t,e,n){if(n)return e?e(t()):t();try{var r=Promise.resolve(t());return e?r.then(e):r}catch(s){return Promise.reject(s)}}function qk(t,e){return nw(t,Bk,e)}function Hk(t,e){var n=t();return n&&n.then?n.then(e):e(n)}function zk(t){return function(){for(var e=[],n=0;n<arguments.length;n++)e[n]=arguments[n];try{return Promise.resolve(t.apply(this,e))}catch(r){return Promise.reject(r)}}}function Wk(t,e,n,r,s,i,o,a,c){const u=Object.keys(t),l=r.get(s,t),h=Oe(!1),f=Oe(!1),p=Oe(0);if(l){if(!l.$partial)return l;l.$unwatch(),h.value=l.$dirty.value}const d={$dirty:h,$path:s,$touch:()=>{h.value||(h.value=!0)},$reset:()=>{h.value&&(h.value=!1)},$commit:()=>{}};return u.length?(u.forEach(v=>{d[v]=Fk(t[v],e,d.$dirty,i,o,v,n,s,c,f,p)}),d.$externalResults=oe(()=>a.value?[].concat(a.value).map((v,y)=>({$propertyPath:s,$property:n,$validator:"$externalResults",$uid:`${s}-externalResult-${y}`,$message:v,$params:{},$response:null,$pending:!1})):[]),d.$invalid=oe(()=>{const v=u.some(y=>j(d[y].$invalid));return f.value=v,!!d.$externalResults.value.length||v}),d.$pending=oe(()=>u.some(v=>j(d[v].$pending))),d.$error=oe(()=>d.$dirty.value?d.$pending.value||d.$invalid.value:!1),d.$silentErrors=oe(()=>u.filter(v=>j(d[v].$invalid)).map(v=>{const y=d[v];return zt({$propertyPath:s,$property:n,$validator:v,$uid:`${s}-${v}`,$message:y.$message,$params:y.$params,$response:y.$response,$pending:y.$pending})}).concat(d.$externalResults.value)),d.$errors=oe(()=>d.$dirty.value?d.$silentErrors.value:[]),d.$unwatch=()=>u.forEach(v=>{d[v].$unwatch()}),d.$commit=()=>{f.value=!0,p.value=Date.now()},r.set(s,t,d),d):(l&&r.set(s,t,d),d)}function Kk(t,e,n,r,s,i,o){const a=Object.keys(t);return a.length?a.reduce((c,u)=>(c[u]=ju({validations:t[u],state:e,key:u,parentKey:n,resultsCache:r,globalConfig:s,instance:i,externalResults:o}),c),{}):{}}function Gk(t,e,n){const r=oe(()=>[e,n].filter(d=>d).reduce((d,v)=>d.concat(Object.values(j(v))),[])),s=oe({get(){return t.$dirty.value||(r.value.length?r.value.every(d=>d.$dirty):!1)},set(d){t.$dirty.value=d}}),i=oe(()=>{const d=j(t.$silentErrors)||[],v=r.value.filter(y=>(j(y).$silentErrors||[]).length).reduce((y,_)=>y.concat(..._.$silentErrors),[]);return d.concat(v)}),o=oe(()=>{const d=j(t.$errors)||[],v=r.value.filter(y=>(j(y).$errors||[]).length).reduce((y,_)=>y.concat(..._.$errors),[]);return d.concat(v)}),a=oe(()=>r.value.some(d=>d.$invalid)||j(t.$invalid)||!1),c=oe(()=>r.value.some(d=>j(d.$pending))||j(t.$pending)||!1),u=oe(()=>r.value.some(d=>d.$dirty)||r.value.some(d=>d.$anyDirty)||s.value),l=oe(()=>s.value?c.value||a.value:!1),h=()=>{t.$touch(),r.value.forEach(d=>{d.$touch()})},f=()=>{t.$commit(),r.value.forEach(d=>{d.$commit()})},p=()=>{t.$reset(),r.value.forEach(d=>{d.$reset()})};return r.value.length&&r.value.every(d=>d.$dirty)&&h(),{$dirty:s,$errors:o,$invalid:a,$anyDirty:u,$error:l,$pending:c,$touch:h,$reset:p,$silentErrors:i,$commit:f}}function ju(t){const e=zk(function(){return me(),Hk(function(){if(y.$rewardEarly)return ke(),qk(si)},function(){return nw(si,function(){return new Promise(Te=>{if(!L.value)return Te(!Y.value);const et=Ct(L,()=>{Te(!Y.value),et()})})})})});let{validations:n,state:r,key:s,parentKey:i,childResults:o,resultsCache:a,globalConfig:c={},instance:u,externalResults:l}=t;const h=i?`${i}.${s}`:s,{rules:f,nestedValidators:p,config:d,validationGroups:v}=Vk(n),y=Object.assign({},c,d),_=s?oe(()=>{const Te=j(r);return Te?j(Te[s]):void 0}):r,A=Object.assign({},j(l)||{}),M=oe(()=>{const Te=j(l);return s?Te?j(Te[s]):void 0:Te}),O=Wk(f,_,s,a,h,y,u,M,r),V=Kk(p,_,h,a,y,u,M),ne={};v&&Object.entries(v).forEach(Te=>{let[et,ze]=Te;ne[et]={$invalid:Fc(ze,V,"$invalid"),$error:Fc(ze,V,"$error"),$pending:Fc(ze,V,"$pending"),$errors:lp(ze,V,"$errors"),$silentErrors:lp(ze,V,"$silentErrors")}});const{$dirty:G,$errors:x,$invalid:Y,$anyDirty:ue,$error:Ee,$pending:L,$touch:me,$reset:Pe,$silentErrors:xe,$commit:ke}=Gk(O,V,o),be=s?oe({get:()=>j(_),set:Te=>{G.value=!0;const et=j(r),ze=j(l);ze&&(ze[s]=A[s]),Le(et[s])?et[s].value=Te:et[s]=Te}}):null;s&&y.$autoDirty&&Ct(_,()=>{G.value||me();const Te=j(l);Te&&(Te[s]=A[s])},{flush:"sync"});function ve(Te){return(o.value||{})[Te]}function ht(){Le(l)?l.value=A:Object.keys(A).length===0?Object.keys(l).forEach(Te=>{delete l[Te]}):Object.assign(l,A)}return zt(Object.assign({},O,{$model:be,$dirty:G,$error:Ee,$errors:x,$invalid:Y,$anyDirty:ue,$pending:L,$touch:me,$reset:Pe,$path:h||jk,$silentErrors:xe,$validate:e,$commit:ke},o&&{$getResultsForChild:ve,$clearExternalResults:ht,$validationGroups:ne},V))}class Xk{constructor(){this.storage=new Map}set(e,n,r){this.storage.set(e,{rules:n,result:r})}checkRulesValidity(e,n,r){const s=Object.keys(r),i=Object.keys(n);return i.length!==s.length||!i.every(a=>s.includes(a))?!1:i.every(a=>n[a].$params?Object.keys(n[a].$params).every(c=>j(r[a].$params[c])===j(n[a].$params[c])):!0)}get(e,n){const r=this.storage.get(e);if(!r)return;const{rules:s,result:i}=r,o=this.checkRulesValidity(e,n,s),a=i.$unwatch?i.$unwatch:()=>({});return o?i:{$dirty:i.$dirty,$partial:!0,$unwatch:a}}}const So={COLLECT_ALL:!0,COLLECT_NONE:!1},hp=Symbol("vuelidate#injectChildResults"),fp=Symbol("vuelidate#removeChildResults");function Qk(t){let{$scope:e,instance:n}=t;const r={},s=Oe([]),i=oe(()=>s.value.reduce((l,h)=>(l[h]=j(r[h]),l),{}));function o(l,h){let{$registerAs:f,$scope:p,$stopPropagation:d}=h;d||e===So.COLLECT_NONE||p===So.COLLECT_NONE||e!==So.COLLECT_ALL&&e!==p||(r[f]=l,s.value.push(f))}n.__vuelidateInjectInstances=[].concat(n.__vuelidateInjectInstances||[],o);function a(l){s.value=s.value.filter(h=>h!==l),delete r[l]}n.__vuelidateRemoveInstances=[].concat(n.__vuelidateRemoveInstances||[],a);const c=xt(hp,[]);Hr(hp,n.__vuelidateInjectInstances);const u=xt(fp,[]);return Hr(fp,n.__vuelidateRemoveInstances),{childResults:i,sendValidationResultsToParent:c,removeValidationResultsFromParent:u}}function rw(t){return new Proxy(t,{get(e,n){return typeof e[n]=="object"?rw(e[n]):oe(()=>e[n])}})}let dp=0;function sw(t,e){var n;let r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};arguments.length===1&&(r=t,t=void 0,e=void 0);let{$registerAs:s,$scope:i=So.COLLECT_ALL,$stopPropagation:o,$externalResults:a,currentVueInstance:c}=r;const u=c||((n=_a())===null||n===void 0?void 0:n.proxy),l=u?u.$options:{};s||(dp+=1,s=`_vuelidate_${dp}`);const h=Oe({}),f=new Xk,{childResults:p,sendValidationResultsToParent:d,removeValidationResultsFromParent:v}=u?Qk({$scope:i,instance:u}):{childResults:Oe({})};if(!t&&l.validations){const y=l.validations;e=Oe({}),cl(()=>{e.value=u,Ct(()=>na(y)?y.call(e.value,new rw(e.value)):y,_=>{h.value=ju({validations:_,state:e,childResults:p,resultsCache:f,globalConfig:r,instance:u,externalResults:a||u.vuelidateExternalResults})},{immediate:!0})}),r=l.validationsConfig||r}else{const y=Le(t)||Lk(t)?t:zt(t||{});Ct(y,_=>{h.value=ju({validations:_,state:e,childResults:p,resultsCache:f,globalConfig:r,instance:u!=null?u:{},externalResults:a})},{immediate:!0})}return u&&(d.forEach(y=>y(h,{$registerAs:s,$scope:i,$stopPropagation:o})),ya(()=>v.forEach(y=>y(s)))),oe(()=>Object.assign({},j(h.value),p.value))}function ra(t){return typeof t=="function"}function qu(t){return t!==null&&typeof t=="object"&&!Array.isArray(t)}function oc(t){return ra(t.$validator)?Object.assign({},t):{$validator:t}}function iw(t){return typeof t=="object"?t.$valid:t}function ow(t){return t.$validator||t}function Yk(t,e){if(!qu(t))throw new Error(`[@vuelidate/validators]: First parameter to "withParams" should be an object, provided ${typeof t}`);if(!qu(e)&&!ra(e))throw new Error("[@vuelidate/validators]: Validator must be a function or object with $validator parameter");const n=oc(e);return n.$params=Object.assign({},n.$params||{},t),n}function Jk(t,e){if(!ra(t)&&typeof j(t)!="string")throw new Error(`[@vuelidate/validators]: First parameter to "withMessage" should be string or a function returning a string, provided ${typeof t}`);if(!qu(e)&&!ra(e))throw new Error("[@vuelidate/validators]: Validator must be a function or object with $validator parameter");const n=oc(e);return n.$message=t,n}function Zk(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:[];const n=oc(t);return Object.assign({},n,{$async:!0,$watchTargets:e})}function eD(t){return{$validator(e){for(var n=arguments.length,r=new Array(n>1?n-1:0),s=1;s<n;s++)r[s-1]=arguments[s];return j(e).reduce((i,o,a)=>{const c=Object.entries(o).reduce((u,l)=>{let[h,f]=l;const p=t[h]||{},d=Object.entries(p).reduce((v,y)=>{let[_,A]=y;const O=ow(A).call(this,f,o,a,...r),V=iw(O);if(v.$data[_]=O,v.$data.$invalid=!V||!!v.$data.$invalid,v.$data.$error=v.$data.$invalid,!V){let ne=A.$message||"";const G=A.$params||{};typeof ne=="function"&&(ne=ne({$pending:!1,$invalid:!V,$params:G,$model:f,$response:O})),v.$errors.push({$property:h,$message:ne,$params:G,$response:O,$model:f,$pending:!1,$validator:_})}return{$valid:v.$valid&&V,$data:v.$data,$errors:v.$errors}},{$valid:!0,$data:{},$errors:[]});return u.$data[h]=d.$data,u.$errors[h]=d.$errors,{$valid:u.$valid&&d.$valid,$data:u.$data,$errors:u.$errors}},{$valid:!0,$data:{},$errors:{}});return{$valid:i.$valid&&c.$valid,$data:i.$data.concat(c.$data),$errors:i.$errors.concat(c.$errors)}},{$valid:!0,$data:[],$errors:[]})},$message:e=>{let{$response:n}=e;return n?n.$errors.map(r=>Object.values(r).map(s=>s.map(i=>i.$message)).reduce((s,i)=>s.concat(i),[])):[]}}}const ac=t=>{if(t=j(t),Array.isArray(t))return!!t.length;if(t==null)return!1;if(t===!1)return!0;if(t instanceof Date)return!isNaN(t.getTime());if(typeof t=="object"){for(let e in t)return!0;return!1}return!!String(t).length},aw=t=>(t=j(t),Array.isArray(t)?t.length:typeof t=="object"?Object.keys(t).length:String(t).length);function Qn(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return r=>(r=j(r),!ac(r)||e.every(s=>s.test(r)))}var Dn=Object.freeze({__proto__:null,withParams:Yk,withMessage:Jk,withAsync:Zk,forEach:eD,req:ac,len:aw,regex:Qn,unwrap:j,unwrapNormalizedValidator:ow,unwrapValidatorResponse:iw,normalizeValidatorObject:oc});Qn(/^[a-zA-Z]*$/);Qn(/^[a-zA-Z0-9]*$/);Qn(/^\d*(\.\d+)?$/);const tD=/^(?:[A-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[A-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9]{2,}(?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/i;var nD=Qn(tD),cw={$validator:nD,$message:"Value is not a valid email address",$params:{type:"email"}};function rD(t){return e=>!ac(e)||aw(e)>=j(t)}function uw(t){return{$validator:rD(t),$message:e=>{let{$params:n}=e;return`This field should be at least ${n.min} characters long`},$params:{min:t,type:"minLength"}}}function sD(t){return typeof t=="string"&&(t=t.trim()),ac(t)}var Br={$validator:sD,$message:"Value is required",$params:{type:"required"}};function iD(t){return e=>j(e)===j(t)}function oD(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"other";return{$validator:iD(t),$message:n=>`The value must be equal to the ${e} value`,$params:{equalTo:t,otherName:e,type:"sameAs"}}}const aD=/^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z0-9\u00a1-\uffff][a-z0-9\u00a1-\uffff_-]{0,62})?[a-z0-9\u00a1-\uffff]\.)+(?:[a-z\u00a1-\uffff]{2,}\.?))(?::\d{2,5})?(?:[/?#]\S*)?$/i;Qn(aD);Qn(/(^[0-9]*$)|(^-[0-9]+$)/);Qn(/^[-]?\d*(\.\d+)?$/);const cD={class:"grid-center h-[75vh]"},uD={class:"max-w-lg w-80 mt-4 md:w-70 md:mt-6"},lD=["onSubmit"],hD={class:"flex items-center justify-center m-4"},fD=["src"],dD=X("h2",{class:"text-xl pl-3"},"Pace Chats",-1),pD={class:"pb-3 sm:pb-4"},mD=X("label",{for:"email",class:"w-full text-black"},"Email",-1),gD={key:0,class:"error"},yD={class:"pb-2 sm:pb-3"},vD=X("label",{for:"password",class:"w-full text-black"},"Password",-1),wD={key:0,class:"error"},_D={class:"error"},ED={type:"submit",class:"form-btn"},bD={class:"py-5"},TD={class:"text-black"},ID=fs("Please "),SD={class:"text-green-500 hover:text-green-600 hover:font-bold cursor-pointer"},CD=fs("Register"),AD=fs(" with your Account for the first time "),RD={__name:"Login",setup(t){const e=zt({email:"",password:""}),n=Zs(),r=ic(),s=Oe(!1),i=Oe(""),o=Oe("");pa(()=>{i.value=r.userData,s.value=r.loginLoading,o.value=r.loginError,i.value&&n.push("/chat")});const a=oe(()=>({email:{required:Dn.withMessage("Email is required",Br),email:cw},password:{required:Dn.withMessage("Password is required",Br),minLength:uw(8)}})),c=sw(a,e),u=async()=>{await c.value.$validate()&&(await r.loginUser(e.email,e.password),r.user&&n.push("/"))};return(l,h)=>{const f=Do("router-link");return pt(),Ut(Nt,null,[i.value?un("",!0):(pt(),va(Jv,{key:0})),X("div",cD,[X("div",uD,[X("form",{onSubmit:_m(u,["prevent"]),class:"w-full shadow-md rounded-md py-4 px-6"},[X("div",hD,[X("img",{src:j(gl),alt:"Logo",class:"w-10 h-10"},null,8,fD),dD]),X("div",pD,[mD,Lr(X("input",{type:"email",placeholder:"yourname@pacewisdom.com",class:"form-input text-black","onUpdate:modelValue":h[0]||(h[0]=p=>e.email=p)},null,512),[[$r,e.email]]),j(c).email.$error?(pt(),Ut("p",gD,an(j(c).email.$errors[0].$message),1)):un("",!0)]),X("div",yD,[vD,Lr(X("input",{type:"password",placeholder:"Password",class:"form-input text-black","onUpdate:modelValue":h[1]||(h[1]=p=>e.password=p)},null,512),[[$r,e.password]]),j(c).password.$error?(pt(),Ut("p",wD,an(j(c).password.$errors[0].$message),1)):un("",!0)]),X("div",null,[X("p",_D,an(o.value),1)]),X("div",null,[X("button",ED,an(s.value?"Signing In...":"Sign In"),1)]),X("div",bD,[X("p",TD,[ID,X("span",SD,[Ye(f,{to:"/register"},{default:oi(()=>[CD]),_:1})]),AD])])],40,lD)])])],64)}}},kD={class:"grid-center h-[75vh]"},DD={class:"max-w-lg w-80 mt-4 md:w-70 md:mt-6"},ND={class:"flex items-center justify-center m-4"},OD=["src"],PD=X("h2",{class:"text-xl pl-3"},"Pace Chats",-1),xD={class:"pb-3 sm:pb-4"},MD=X("label",{for:"username",class:"form-label text-black"},"Username",-1),LD={key:0,class:"error"},$D={class:"pb-3 sm:pb-4"},UD=X("label",{for:"email",class:"form-label text-black"},"Email",-1),FD={key:0,class:"error"},VD={class:"pb-2 sm:pb-3"},BD=X("label",{for:"password",class:"form-label text-black"},"Password",-1),jD={key:0,class:"error"},qD={class:"pb-2 sm:pb-3"},HD=X("label",{for:"password",class:"form-label text-black"},"ConfirmPassword",-1),zD={key:0,class:"error"},WD={type:"submit",class:"form-btn"},KD={class:"py-5"},GD={class:"text-black"},XD=fs("Already Registered? "),QD={class:"text-green-500 hover:text-green-600 hover:font-bold cursor-pointer"},YD=fs("Login"),JD={__name:"Register",setup(t){const e=zt({email:"",username:"",password:"",confirmPassword:""}),n=Zs(),r=ic(),s=Oe(!1),i=Oe(""),o=Oe("");pa(()=>{i.value=r.userData,s.value=r.registerLoading,o.value=r.registerError,i.value&&n.push("/profile")});const a=h=>/^[a-zA-Z0-9._%+-]+@pacewisdom\.com$/.test(h),c=oe(()=>({email:{required:Dn.withMessage("Email is required",Br),email:Dn.withMessage("Invalid email format",cw),paceWisdomEmail:Dn.withMessage("Email Address must contain Company Domain",a)},username:{required:Dn.withMessage("Username is required",Br)},password:{required:Dn.withMessage("Password is required",Br),minLength:uw(8)},confirmPassword:{required:Dn.withMessage("Passwords do not match",Br),sameAs:oD(e.password)}})),u=sw(c,e),l=async()=>{await u.value.$validate()&&(await r.registerUser(e.username,e.email,e.password),r.user&&n.push("/profile"))};return(h,f)=>{const p=Do("router-link");return pt(),Ut(Nt,null,[i.value?un("",!0):(pt(),va(Jv,{key:0})),X("div",kD,[X("div",DD,[X("form",{onSubmit:f[4]||(f[4]=_m(d=>l(),["prevent"])),class:"w-full shadow-md rounded-md py-4 px-6"},[X("div",ND,[X("img",{src:j(gl),alt:"Logo",class:"w-10 h-10"},null,8,OD),PD]),X("div",xD,[MD,Lr(X("input",{type:"text",placeholder:"Username",class:"form-input text-black","onUpdate:modelValue":f[0]||(f[0]=d=>e.username=d)},null,512),[[$r,e.username]]),j(u).username.$error?(pt(),Ut("p",LD,an(j(u).username.$errors[0].$message),1)):un("",!0)]),X("div",$D,[UD,Lr(X("input",{type:"email",placeholder:"yourname@pacewisdom.com",class:"form-input text-black","onUpdate:modelValue":f[1]||(f[1]=d=>e.email=d)},null,512),[[$r,e.email]]),j(u).email.$error?(pt(),Ut("p",FD,an(j(u).email.$errors[0].$message),1)):un("",!0)]),X("div",VD,[BD,Lr(X("input",{type:"password",placeholder:"Password",class:"form-input text-black","onUpdate:modelValue":f[2]||(f[2]=d=>e.password=d)},null,512),[[$r,e.password]]),j(u).password.$error?(pt(),Ut("p",jD,an(j(u).password.$errors[0].$message),1)):un("",!0)]),X("div",qD,[HD,Lr(X("input",{type:"password",placeholder:"Password",class:"form-input text-black","onUpdate:modelValue":f[3]||(f[3]=d=>e.confirmPassword=d)},null,512),[[$r,e.confirmPassword]]),j(u).confirmPassword.$error?(pt(),Ut("p",zD,an(j(u).confirmPassword.$errors[0].$message),1)):un("",!0)]),X("div",null,[X("button",WD,an(s.value?"Signing Up...":"Sign Up"),1)]),X("div",KD,[X("p",GD,[XD,X("span",QD,[Ye(p,{to:"/"},{default:oi(()=>[YD]),_:1})])])])],32)])])],64)}}},ZD=[{path:"/",name:"chat",component:()=>cp(()=>import("./Chat.cc7ddfc9.js"),["assets/Chat.cc7ddfc9.js","assets/Chat.cc8da774.css","assets/Placeholder.9175119a.js"]),meta:{auth:!0}},{path:"/login",name:"login",component:RD,meta:{auth:!1}},{path:"/register",name:"register",component:JD,meta:{auth:!1}},{path:"/profile",name:"profile",component:()=>cp(()=>import("./Profile.bd6c78a4.js"),["assets/Profile.bd6c78a4.js","assets/Placeholder.9175119a.js"]),meta:{auth:!0}}],lw=f1({history:RR("/chat/"),routes:ZD}),eN=()=>new Promise((t,e)=>{const n=tg(Vs,r=>{n(),t(r)},e)});lw.beforeEach(async(t,e,n)=>{const r=await eN();t.matched.some(s=>s.meta.auth)?r?n():n("/login"):(t.path==="/login"||t.path==="/register")&&r?n("/chat"):n()});function tN(t){if(t===null||t===!0||t===!1)return NaN;var e=Number(t);return isNaN(e)?e:e<0?Math.ceil(e):Math.floor(e)}function bt(t,e){if(e.length<t)throw new TypeError(t+" argument"+(t>1?"s":"")+" required, but only "+e.length+" present")}function Be(t){bt(1,arguments);var e=Object.prototype.toString.call(t);return t instanceof Date||typeof t=="object"&&e==="[object Date]"?new Date(t.getTime()):typeof t=="number"||e==="[object Number]"?new Date(t):((typeof t=="string"||e==="[object String]")&&typeof console<"u"&&(console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://git.io/fjule"),console.warn(new Error().stack)),new Date(NaN))}function sa(t){var e=new Date(Date.UTC(t.getFullYear(),t.getMonth(),t.getDate(),t.getHours(),t.getMinutes(),t.getSeconds(),t.getMilliseconds()));return e.setUTCFullYear(t.getFullYear()),t.getTime()-e.getTime()}function ti(t,e){bt(2,arguments);var n=Be(t),r=Be(e),s=n.getTime()-r.getTime();return s<0?-1:s>0?1:s}var hw=6e4,fw=36e5;function nN(t,e){bt(2,arguments);var n=Be(t),r=Be(e),s=n.getFullYear()-r.getFullYear(),i=n.getMonth()-r.getMonth();return s*12+i}function rN(t,e){return bt(2,arguments),Be(t).getTime()-Be(e).getTime()}var pp={ceil:Math.ceil,round:Math.round,floor:Math.floor,trunc:function(t){return t<0?Math.ceil(t):Math.floor(t)}},sN="trunc";function iN(t){return t?pp[t]:pp[sN]}function oN(t){bt(1,arguments);var e=Be(t);return e.setHours(23,59,59,999),e}function aN(t){bt(1,arguments);var e=Be(t),n=e.getMonth();return e.setFullYear(e.getFullYear(),n+1,0),e.setHours(23,59,59,999),e}function cN(t){bt(1,arguments);var e=Be(t);return oN(e).getTime()===aN(e).getTime()}function uN(t,e){bt(2,arguments);var n=Be(t),r=Be(e),s=ti(n,r),i=Math.abs(nN(n,r)),o;if(i<1)o=0;else{n.getMonth()===1&&n.getDate()>27&&n.setDate(30),n.setMonth(n.getMonth()-s*i);var a=ti(n,r)===-s;cN(Be(t))&&i===1&&ti(t,r)===1&&(a=!1),o=s*(i-Number(a))}return o===0?0:o}function lN(t,e,n){bt(2,arguments);var r=rN(t,e)/1e3;return iN(n==null?void 0:n.roundingMethod)(r)}var hN={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}},fN=function(t,e,n){var r,s=hN[t];return typeof s=="string"?r=s:e===1?r=s.one:r=s.other.replace("{{count}}",e.toString()),n!=null&&n.addSuffix?n.comparison&&n.comparison>0?"in "+r:r+" ago":r},dN=fN;function Vc(t){return function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=e.width?String(e.width):t.defaultWidth,r=t.formats[n]||t.formats[t.defaultWidth];return r}}var pN={full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},mN={full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},gN={full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},yN={date:Vc({formats:pN,defaultWidth:"full"}),time:Vc({formats:mN,defaultWidth:"full"}),dateTime:Vc({formats:gN,defaultWidth:"full"})},vN=yN,wN={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"},_N=function(t,e,n,r){return wN[t]},EN=_N;function ks(t){return function(e,n){var r=n||{},s=r.context?String(r.context):"standalone",i;if(s==="formatting"&&t.formattingValues){var o=t.defaultFormattingWidth||t.defaultWidth,a=r.width?String(r.width):o;i=t.formattingValues[a]||t.formattingValues[o]}else{var c=t.defaultWidth,u=r.width?String(r.width):t.defaultWidth;i=t.values[u]||t.values[c]}var l=t.argumentCallback?t.argumentCallback(e):e;return i[l]}}var bN={narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},TN={narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},IN={narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},SN={narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},CN={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},AN={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},RN=function(t,e){var n=Number(t),r=n%100;if(r>20||r<10)switch(r%10){case 1:return n+"st";case 2:return n+"nd";case 3:return n+"rd"}return n+"th"},kN={ordinalNumber:RN,era:ks({values:bN,defaultWidth:"wide"}),quarter:ks({values:TN,defaultWidth:"wide",argumentCallback:function(t){return t-1}}),month:ks({values:IN,defaultWidth:"wide"}),day:ks({values:SN,defaultWidth:"wide"}),dayPeriod:ks({values:CN,defaultWidth:"wide",formattingValues:AN,defaultFormattingWidth:"wide"})},DN=kN;function Ds(t){return function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.width,s=r&&t.matchPatterns[r]||t.matchPatterns[t.defaultMatchWidth],i=e.match(s);if(!i)return null;var o=i[0],a=r&&t.parsePatterns[r]||t.parsePatterns[t.defaultParseWidth],c=Array.isArray(a)?ON(a,function(h){return h.test(o)}):NN(a,function(h){return h.test(o)}),u;u=t.valueCallback?t.valueCallback(c):c,u=n.valueCallback?n.valueCallback(u):u;var l=e.slice(o.length);return{value:u,rest:l}}}function NN(t,e){for(var n in t)if(t.hasOwnProperty(n)&&e(t[n]))return n}function ON(t,e){for(var n=0;n<t.length;n++)if(e(t[n]))return n}function PN(t){return function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=e.match(t.matchPattern);if(!r)return null;var s=r[0],i=e.match(t.parsePattern);if(!i)return null;var o=t.valueCallback?t.valueCallback(i[0]):i[0];o=n.valueCallback?n.valueCallback(o):o;var a=e.slice(s.length);return{value:o,rest:a}}}var xN=/^(\d+)(th|st|nd|rd)?/i,MN=/\d+/i,LN={narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},$N={any:[/^b/i,/^(a|c)/i]},UN={narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},FN={any:[/1/i,/2/i,/3/i,/4/i]},VN={narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},BN={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},jN={narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},qN={narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},HN={narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},zN={any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},WN={ordinalNumber:PN({matchPattern:xN,parsePattern:MN,valueCallback:function(t){return parseInt(t,10)}}),era:Ds({matchPatterns:LN,defaultMatchWidth:"wide",parsePatterns:$N,defaultParseWidth:"any"}),quarter:Ds({matchPatterns:UN,defaultMatchWidth:"wide",parsePatterns:FN,defaultParseWidth:"any",valueCallback:function(t){return t+1}}),month:Ds({matchPatterns:VN,defaultMatchWidth:"wide",parsePatterns:BN,defaultParseWidth:"any"}),day:Ds({matchPatterns:jN,defaultMatchWidth:"wide",parsePatterns:qN,defaultParseWidth:"any"}),dayPeriod:Ds({matchPatterns:HN,defaultMatchWidth:"any",parsePatterns:zN,defaultParseWidth:"any"})},KN=WN,GN={code:"en-US",formatDistance:dN,formatLong:vN,formatRelative:EN,localize:DN,match:KN,options:{weekStartsOn:0,firstWeekContainsDate:1}},dw=GN;function XN(t,e){if(t==null)throw new TypeError("assign requires that input parameter not be null or undefined");e=e||{};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t}function pw(t){return XN({},t)}var mp=1440,QN=2520,Bc=43200,YN=86400;function JN(t,e){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};bt(2,arguments);var r=n.locale||dw;if(!r.formatDistance)throw new RangeError("locale must contain formatDistance property");var s=ti(t,e);if(isNaN(s))throw new RangeError("Invalid time value");var i=pw(n);i.addSuffix=Boolean(n.addSuffix),i.comparison=s;var o,a;s>0?(o=Be(e),a=Be(t)):(o=Be(t),a=Be(e));var c=lN(a,o),u=(sa(a)-sa(o))/1e3,l=Math.round((c-u)/60),h;if(l<2)return n.includeSeconds?c<5?r.formatDistance("lessThanXSeconds",5,i):c<10?r.formatDistance("lessThanXSeconds",10,i):c<20?r.formatDistance("lessThanXSeconds",20,i):c<40?r.formatDistance("halfAMinute",null,i):c<60?r.formatDistance("lessThanXMinutes",1,i):r.formatDistance("xMinutes",1,i):l===0?r.formatDistance("lessThanXMinutes",1,i):r.formatDistance("xMinutes",l,i);if(l<45)return r.formatDistance("xMinutes",l,i);if(l<90)return r.formatDistance("aboutXHours",1,i);if(l<mp){var f=Math.round(l/60);return r.formatDistance("aboutXHours",f,i)}else{if(l<QN)return r.formatDistance("xDays",1,i);if(l<Bc){var p=Math.round(l/mp);return r.formatDistance("xDays",p,i)}else if(l<YN)return h=Math.round(l/Bc),r.formatDistance("aboutXMonths",h,i)}if(h=uN(a,o),h<12){var d=Math.round(l/Bc);return r.formatDistance("xMonths",d,i)}else{var v=h%12,y=Math.floor(h/12);return v<3?r.formatDistance("aboutXYears",y,i):v<9?r.formatDistance("overXYears",y,i):r.formatDistance("almostXYears",y+1,i)}}var gp=1e3*60,ia=60*24,yp=ia*30,vp=ia*365;function ZN(t,e){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};bt(2,arguments);var r=n.locale||dw;if(!r.formatDistance)throw new RangeError("locale must contain localize.formatDistance property");var s=ti(t,e);if(isNaN(s))throw new RangeError("Invalid time value");var i=pw(n);i.addSuffix=Boolean(n.addSuffix),i.comparison=s;var o,a;s>0?(o=Be(e),a=Be(t)):(o=Be(t),a=Be(e));var c=n.roundingMethod==null?"round":String(n.roundingMethod),u;if(c==="floor")u=Math.floor;else if(c==="ceil")u=Math.ceil;else if(c==="round")u=Math.round;else throw new RangeError("roundingMethod must be 'floor', 'ceil' or 'round'");var l=a.getTime()-o.getTime(),h=l/gp,f=sa(a)-sa(o),p=(l-f)/gp,d;if(n.unit==null?h<1?d="second":h<60?d="minute":h<ia?d="hour":p<yp?d="day":p<vp?d="month":d="year":d=String(n.unit),d==="second"){var v=u(l/1e3);return r.formatDistance("xSeconds",v,i)}else if(d==="minute"){var y=u(h);return r.formatDistance("xMinutes",y,i)}else if(d==="hour"){var _=u(h/60);return r.formatDistance("xHours",_,i)}else if(d==="day"){var A=u(p/ia);return r.formatDistance("xDays",A,i)}else if(d==="month"){var M=u(p/yp);return M===12&&n.unit!=="month"?r.formatDistance("xYears",1,i):r.formatDistance("xMonths",M,i)}else if(d==="year"){var O=u(p/vp);return r.formatDistance("xYears",O,i)}throw new RangeError("unit must be 'second', 'minute', 'hour', 'day', 'month' or 'year'")}function eO(t,e){return bt(1,arguments),JN(t,Date.now(),e)}function tO(t,e){return bt(1,arguments),ZN(t,Date.now(),e)}function nO(t,e){bt(1,arguments);var n=e||{},r=n.additionalDigits==null?2:tN(n.additionalDigits);if(r!==2&&r!==1&&r!==0)throw new RangeError("additionalDigits must be 0, 1 or 2");if(!(typeof t=="string"||Object.prototype.toString.call(t)==="[object String]"))return new Date(NaN);var s=oO(t),i;if(s.date){var o=aO(s.date,r);i=cO(o.restDateString,o.year)}if(!i||isNaN(i.getTime()))return new Date(NaN);var a=i.getTime(),c=0,u;if(s.time&&(c=uO(s.time),isNaN(c)))return new Date(NaN);if(s.timezone){if(u=lO(s.timezone),isNaN(u))return new Date(NaN)}else{var l=new Date(a+c),h=new Date(0);return h.setFullYear(l.getUTCFullYear(),l.getUTCMonth(),l.getUTCDate()),h.setHours(l.getUTCHours(),l.getUTCMinutes(),l.getUTCSeconds(),l.getUTCMilliseconds()),h}return new Date(a+c+u)}var ho={dateTimeDelimiter:/[T ]/,timeZoneDelimiter:/[Z ]/i,timezone:/([Z+-].*)$/},rO=/^-?(?:(\d{3})|(\d{2})(?:-?(\d{2}))?|W(\d{2})(?:-?(\d{1}))?|)$/,sO=/^(\d{2}(?:[.,]\d*)?)(?::?(\d{2}(?:[.,]\d*)?))?(?::?(\d{2}(?:[.,]\d*)?))?$/,iO=/^([+-])(\d{2})(?::?(\d{2}))?$/;function oO(t){var e={},n=t.split(ho.dateTimeDelimiter),r;if(n.length>2)return e;if(/:/.test(n[0])?r=n[0]:(e.date=n[0],r=n[1],ho.timeZoneDelimiter.test(e.date)&&(e.date=t.split(ho.timeZoneDelimiter)[0],r=t.substr(e.date.length,t.length))),r){var s=ho.timezone.exec(r);s?(e.time=r.replace(s[1],""),e.timezone=s[1]):e.time=r}return e}function aO(t,e){var n=new RegExp("^(?:(\\d{4}|[+-]\\d{"+(4+e)+"})|(\\d{2}|[+-]\\d{"+(2+e)+"})$)"),r=t.match(n);if(!r)return{year:NaN,restDateString:""};var s=r[1]?parseInt(r[1]):null,i=r[2]?parseInt(r[2]):null;return{year:i===null?s:i*100,restDateString:t.slice((r[1]||r[2]).length)}}function cO(t,e){if(e===null)return new Date(NaN);var n=t.match(rO);if(!n)return new Date(NaN);var r=!!n[4],s=Ns(n[1]),i=Ns(n[2])-1,o=Ns(n[3]),a=Ns(n[4]),c=Ns(n[5])-1;if(r)return mO(e,a,c)?hO(e,a,c):new Date(NaN);var u=new Date(0);return!dO(e,i,o)||!pO(e,s)?new Date(NaN):(u.setUTCFullYear(e,i,Math.max(s,o)),u)}function Ns(t){return t?parseInt(t):1}function uO(t){var e=t.match(sO);if(!e)return NaN;var n=jc(e[1]),r=jc(e[2]),s=jc(e[3]);return gO(n,r,s)?n*fw+r*hw+s*1e3:NaN}function jc(t){return t&&parseFloat(t.replace(",","."))||0}function lO(t){if(t==="Z")return 0;var e=t.match(iO);if(!e)return 0;var n=e[1]==="+"?-1:1,r=parseInt(e[2]),s=e[3]&&parseInt(e[3])||0;return yO(r,s)?n*(r*fw+s*hw):NaN}function hO(t,e,n){var r=new Date(0);r.setUTCFullYear(t,0,4);var s=r.getUTCDay()||7,i=(e-1)*7+n+1-s;return r.setUTCDate(r.getUTCDate()+i),r}var fO=[31,null,31,30,31,30,31,31,30,31,30,31];function mw(t){return t%400===0||t%4===0&&t%100!==0}function dO(t,e,n){return e>=0&&e<=11&&n>=1&&n<=(fO[e]||(mw(t)?29:28))}function pO(t,e){return e>=1&&e<=(mw(t)?366:365)}function mO(t,e,n){return e>=1&&e<=53&&n>=0&&n<=6}function gO(t,e,n){return t===24?e===0&&n===0:n>=0&&n<60&&e>=0&&e<60&&t>=0&&t<25}function yO(t,e){return e>=0&&e<=59}var vO=(t,e={},n)=>{var r,s;return typeof t=="string"&&(t=nO(t)),e.useStrict?tO(t,{addSuffix:(r=e.addSuffix)!=null?r:!0,locale:n,unit:e.unit,roundingMethod:e.roundingMethod}):eO(t,{includeSeconds:e.includeSeconds,addSuffix:(s=e.addSuffix)!=null?s:!0,locale:n})};const wO=(t={})=>{const e=t.name||"Timeago";return al({name:e,props:{datetime:{type:[String,Number,Date],required:!0},title:{type:[String,Boolean],required:!1,default:null},autoUpdate:{type:[Number,Boolean],required:!1,default:null},converter:{type:Function,required:!1,default:null},converterOptions:{type:Object,required:!1,default:null},locale:{type:Object,required:!1,default:null}},setup(n){const r=Oe();cl(()=>{a()}),ya(()=>{c()});const s=u=>(n.converter||vO)(u||n.datetime,n.converterOptions||t.converterOptions,n.locale||t.locale),i=Oe(s()),o=u=>{i.value=s(u)},a=()=>{if(n.autoUpdate){const u=n.autoUpdate===!0?60:n.autoUpdate;r.value=setInterval(()=>{o(n.datetime)},u*1e3)}},c=()=>{r.value&&(clearInterval(r.value),r.value=void 0)};return Ct(()=>n.autoUpdate,u=>{c(),u&&a()}),Ct(()=>[n.datetime,n.converter],()=>{o()}),Ct(()=>n.converterOptions,()=>{o()},{deep:!0}),{timeago:i,updateTimer:r}},render(){return ba("timeago",{attrs:{datetime:new Date(this.datetime).toISOString(),title:typeof this.title=="string"?this.title:this.title===!1?null:this.timeago}},[this.timeago])}})};var _O=(t,e)=>{if(t.config.globalProperties.$timeago)return;Number(t.version.split(".")[0])<3&&console.warn("[vue-timeago3] This plugin requires at least Vue version 3.0");const r=wO(e);t.component(r.name,r)};var EO=function(){return Boolean(window.location.hostname==="localhost"||window.location.hostname==="[::1]"||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/))},Hu;typeof window<"u"&&(typeof Promise<"u"?Hu=new Promise(function(t){return window.addEventListener("load",t)}):Hu={then:function(t){return window.addEventListener("load",t)}});function bO(t,e){e===void 0&&(e={});var n=e.registrationOptions;n===void 0&&(n={}),delete e.registrationOptions;var r=function(s){for(var i=[],o=arguments.length-1;o-- >0;)i[o]=arguments[o+1];e&&e[s]&&e[s].apply(e,i)};"serviceWorker"in navigator&&Hu.then(function(){EO()?(TO(t,r,n),navigator.serviceWorker.ready.then(function(s){r("ready",s)}).catch(function(s){return Si(r,s)})):(gw(t,r,n),navigator.serviceWorker.ready.then(function(s){r("ready",s)}).catch(function(s){return Si(r,s)}))})}function Si(t,e){navigator.onLine||t("offline"),t("error",e)}function gw(t,e,n){navigator.serviceWorker.register(t,n).then(function(r){if(e("registered",r),r.waiting){e("updated",r);return}r.onupdatefound=function(){e("updatefound",r);var s=r.installing;s.onstatechange=function(){s.state==="installed"&&(navigator.serviceWorker.controller?e("updated",r):e("cached",r))}}}).catch(function(r){return Si(e,r)})}function TO(t,e,n){fetch(t).then(function(r){r.status===404?(e("error",new Error("Service worker not found at "+t)),wp()):r.headers.get("content-type").indexOf("javascript")===-1?(e("error",new Error("Expected "+t+" to have javascript content-type, but received "+r.headers.get("content-type"))),wp()):gw(t,e,n)}).catch(function(r){return Si(e,r)})}function wp(){"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(t){t.unregister()}).catch(function(t){return Si(emit,t)})}bO("chat/service-worker.js",{ready(){console.log(`App is being served from cache by a service worker.
For more details, visit https://goo.gl/AFskqB`)},registered(){console.log("Service worker has been registered.")},cached(){console.log("Content has been cached for offline use.")},updatefound(){console.log("New content is downloading.")},updated(){console.log("New content is available; please refresh.")},offline(){console.log("No internet connection found. App is running in offline mode.")},error(t){console.error("Error during service worker registration:",t)}});const IO=qE(),cc=VE(Pk);cc.use(IO);cc.use(_O);cc.use(lw);cc.mount("#app");export{_m as A,LO as B,$O as C,PO as D,xO as E,Nt as F,NO as G,je as H,CO as I,lo as J,lR as K,Us as L,ic as M,Zs as N,Vs as O,AO as P,RO as Q,OO as R,DO as S,Pc as T,Jv as U,MO as V,kO as W,kk as _,X as a,ua as b,Ut as c,Ye as d,un as e,Oe as f,al as g,oe as h,xt as i,Ct as j,ul as k,ya as l,zt as m,Ku as n,pt as o,Up as p,Hr as q,Do as r,_a as s,an as t,j as u,SO as v,pa as w,Lr as x,$r as y,va as z};
