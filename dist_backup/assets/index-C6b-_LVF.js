(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))s(l);new MutationObserver(l=>{for(const u of l)if(u.type==="childList")for(const d of u.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&s(d)}).observe(document,{childList:!0,subtree:!0});function n(l){const u={};return l.integrity&&(u.integrity=l.integrity),l.referrerPolicy&&(u.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?u.credentials="include":l.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function s(l){if(l.ep)return;l.ep=!0;const u=n(l);fetch(l.href,u)}})();var Lu={exports:{}},rs={},Mu={exports:{}},X={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var vp;function Ly(){if(vp)return X;vp=1;var i=Symbol.for("react.element"),e=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),u=Symbol.for("react.provider"),d=Symbol.for("react.context"),f=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),g=Symbol.for("react.memo"),E=Symbol.for("react.lazy"),y=Symbol.iterator;function C(S){return S===null||typeof S!="object"?null:(S=y&&S[y]||S["@@iterator"],typeof S=="function"?S:null)}var x={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},L=Object.assign,j={};function $(S,R,Y){this.props=S,this.context=R,this.refs=j,this.updater=Y||x}$.prototype.isReactComponent={},$.prototype.setState=function(S,R){if(typeof S!="object"&&typeof S!="function"&&S!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,S,R,"setState")},$.prototype.forceUpdate=function(S){this.updater.enqueueForceUpdate(this,S,"forceUpdate")};function Te(){}Te.prototype=$.prototype;function xe(S,R,Y){this.props=S,this.context=R,this.refs=j,this.updater=Y||x}var Ne=xe.prototype=new Te;Ne.constructor=xe,L(Ne,$.prototype),Ne.isPureReactComponent=!0;var Re=Array.isArray,nt=Object.prototype.hasOwnProperty,De={current:null},Be={key:!0,ref:!0,__self:!0,__source:!0};function rt(S,R,Y){var ee,re={},ie=null,he=null;if(R!=null)for(ee in R.ref!==void 0&&(he=R.ref),R.key!==void 0&&(ie=""+R.key),R)nt.call(R,ee)&&!Be.hasOwnProperty(ee)&&(re[ee]=R[ee]);var ae=arguments.length-2;if(ae===1)re.children=Y;else if(1<ae){for(var ve=Array(ae),pt=0;pt<ae;pt++)ve[pt]=arguments[pt+2];re.children=ve}if(S&&S.defaultProps)for(ee in ae=S.defaultProps,ae)re[ee]===void 0&&(re[ee]=ae[ee]);return{$$typeof:i,type:S,key:ie,ref:he,props:re,_owner:De.current}}function wt(S,R){return{$$typeof:i,type:S.type,key:R,ref:S.ref,props:S.props,_owner:S._owner}}function Rt(S){return typeof S=="object"&&S!==null&&S.$$typeof===i}function Yn(S){var R={"=":"=0",":":"=2"};return"$"+S.replace(/[=:]/g,function(Y){return R[Y]})}var Ht=/\/+/g;function ft(S,R){return typeof S=="object"&&S!==null&&S.key!=null?Yn(""+S.key):R.toString(36)}function Pt(S,R,Y,ee,re){var ie=typeof S;(ie==="undefined"||ie==="boolean")&&(S=null);var he=!1;if(S===null)he=!0;else switch(ie){case"string":case"number":he=!0;break;case"object":switch(S.$$typeof){case i:case e:he=!0}}if(he)return he=S,re=re(he),S=ee===""?"."+ft(he,0):ee,Re(re)?(Y="",S!=null&&(Y=S.replace(Ht,"$&/")+"/"),Pt(re,R,Y,"",function(pt){return pt})):re!=null&&(Rt(re)&&(re=wt(re,Y+(!re.key||he&&he.key===re.key?"":(""+re.key).replace(Ht,"$&/")+"/")+S)),R.push(re)),1;if(he=0,ee=ee===""?".":ee+":",Re(S))for(var ae=0;ae<S.length;ae++){ie=S[ae];var ve=ee+ft(ie,ae);he+=Pt(ie,R,Y,ve,re)}else if(ve=C(S),typeof ve=="function")for(S=ve.call(S),ae=0;!(ie=S.next()).done;)ie=ie.value,ve=ee+ft(ie,ae++),he+=Pt(ie,R,Y,ve,re);else if(ie==="object")throw R=String(S),Error("Objects are not valid as a React child (found: "+(R==="[object Object]"?"object with keys {"+Object.keys(S).join(", ")+"}":R)+"). If you meant to render a collection of children, use an array instead.");return he}function $t(S,R,Y){if(S==null)return S;var ee=[],re=0;return Pt(S,ee,"","",function(ie){return R.call(Y,ie,re++)}),ee}function it(S){if(S._status===-1){var R=S._result;R=R(),R.then(function(Y){(S._status===0||S._status===-1)&&(S._status=1,S._result=Y)},function(Y){(S._status===0||S._status===-1)&&(S._status=2,S._result=Y)}),S._status===-1&&(S._status=0,S._result=R)}if(S._status===1)return S._result.default;throw S._result}var Se={current:null},M={transition:null},G={ReactCurrentDispatcher:Se,ReactCurrentBatchConfig:M,ReactCurrentOwner:De};function U(){throw Error("act(...) is not supported in production builds of React.")}return X.Children={map:$t,forEach:function(S,R,Y){$t(S,function(){R.apply(this,arguments)},Y)},count:function(S){var R=0;return $t(S,function(){R++}),R},toArray:function(S){return $t(S,function(R){return R})||[]},only:function(S){if(!Rt(S))throw Error("React.Children.only expected to receive a single React element child.");return S}},X.Component=$,X.Fragment=n,X.Profiler=l,X.PureComponent=xe,X.StrictMode=s,X.Suspense=m,X.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=G,X.act=U,X.cloneElement=function(S,R,Y){if(S==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+S+".");var ee=L({},S.props),re=S.key,ie=S.ref,he=S._owner;if(R!=null){if(R.ref!==void 0&&(ie=R.ref,he=De.current),R.key!==void 0&&(re=""+R.key),S.type&&S.type.defaultProps)var ae=S.type.defaultProps;for(ve in R)nt.call(R,ve)&&!Be.hasOwnProperty(ve)&&(ee[ve]=R[ve]===void 0&&ae!==void 0?ae[ve]:R[ve])}var ve=arguments.length-2;if(ve===1)ee.children=Y;else if(1<ve){ae=Array(ve);for(var pt=0;pt<ve;pt++)ae[pt]=arguments[pt+2];ee.children=ae}return{$$typeof:i,type:S.type,key:re,ref:ie,props:ee,_owner:he}},X.createContext=function(S){return S={$$typeof:d,_currentValue:S,_currentValue2:S,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},S.Provider={$$typeof:u,_context:S},S.Consumer=S},X.createElement=rt,X.createFactory=function(S){var R=rt.bind(null,S);return R.type=S,R},X.createRef=function(){return{current:null}},X.forwardRef=function(S){return{$$typeof:f,render:S}},X.isValidElement=Rt,X.lazy=function(S){return{$$typeof:E,_payload:{_status:-1,_result:S},_init:it}},X.memo=function(S,R){return{$$typeof:g,type:S,compare:R===void 0?null:R}},X.startTransition=function(S){var R=M.transition;M.transition={};try{S()}finally{M.transition=R}},X.unstable_act=U,X.useCallback=function(S,R){return Se.current.useCallback(S,R)},X.useContext=function(S){return Se.current.useContext(S)},X.useDebugValue=function(){},X.useDeferredValue=function(S){return Se.current.useDeferredValue(S)},X.useEffect=function(S,R){return Se.current.useEffect(S,R)},X.useId=function(){return Se.current.useId()},X.useImperativeHandle=function(S,R,Y){return Se.current.useImperativeHandle(S,R,Y)},X.useInsertionEffect=function(S,R){return Se.current.useInsertionEffect(S,R)},X.useLayoutEffect=function(S,R){return Se.current.useLayoutEffect(S,R)},X.useMemo=function(S,R){return Se.current.useMemo(S,R)},X.useReducer=function(S,R,Y){return Se.current.useReducer(S,R,Y)},X.useRef=function(S){return Se.current.useRef(S)},X.useState=function(S){return Se.current.useState(S)},X.useSyncExternalStore=function(S,R,Y){return Se.current.useSyncExternalStore(S,R,Y)},X.useTransition=function(){return Se.current.useTransition()},X.version="18.3.1",X}var yp;function Cc(){return yp||(yp=1,Mu.exports=Ly()),Mu.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var wp;function My(){if(wp)return rs;wp=1;var i=Cc(),e=Symbol.for("react.element"),n=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,l=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,u={key:!0,ref:!0,__self:!0,__source:!0};function d(f,m,g){var E,y={},C=null,x=null;g!==void 0&&(C=""+g),m.key!==void 0&&(C=""+m.key),m.ref!==void 0&&(x=m.ref);for(E in m)s.call(m,E)&&!u.hasOwnProperty(E)&&(y[E]=m[E]);if(f&&f.defaultProps)for(E in m=f.defaultProps,m)y[E]===void 0&&(y[E]=m[E]);return{$$typeof:e,type:f,key:C,ref:x,props:y,_owner:l.current}}return rs.Fragment=n,rs.jsx=d,rs.jsxs=d,rs}var Ep;function by(){return Ep||(Ep=1,Lu.exports=My()),Lu.exports}var le=by(),un=Cc(),Ho={},bu={exports:{}},ct={},Fu={exports:{}},Uu={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Sp;function Fy(){return Sp||(Sp=1,function(i){function e(M,G){var U=M.length;M.push(G);e:for(;0<U;){var S=U-1>>>1,R=M[S];if(0<l(R,G))M[S]=G,M[U]=R,U=S;else break e}}function n(M){return M.length===0?null:M[0]}function s(M){if(M.length===0)return null;var G=M[0],U=M.pop();if(U!==G){M[0]=U;e:for(var S=0,R=M.length,Y=R>>>1;S<Y;){var ee=2*(S+1)-1,re=M[ee],ie=ee+1,he=M[ie];if(0>l(re,U))ie<R&&0>l(he,re)?(M[S]=he,M[ie]=U,S=ie):(M[S]=re,M[ee]=U,S=ee);else if(ie<R&&0>l(he,U))M[S]=he,M[ie]=U,S=ie;else break e}}return G}function l(M,G){var U=M.sortIndex-G.sortIndex;return U!==0?U:M.id-G.id}if(typeof performance=="object"&&typeof performance.now=="function"){var u=performance;i.unstable_now=function(){return u.now()}}else{var d=Date,f=d.now();i.unstable_now=function(){return d.now()-f}}var m=[],g=[],E=1,y=null,C=3,x=!1,L=!1,j=!1,$=typeof setTimeout=="function"?setTimeout:null,Te=typeof clearTimeout=="function"?clearTimeout:null,xe=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function Ne(M){for(var G=n(g);G!==null;){if(G.callback===null)s(g);else if(G.startTime<=M)s(g),G.sortIndex=G.expirationTime,e(m,G);else break;G=n(g)}}function Re(M){if(j=!1,Ne(M),!L)if(n(m)!==null)L=!0,it(nt);else{var G=n(g);G!==null&&Se(Re,G.startTime-M)}}function nt(M,G){L=!1,j&&(j=!1,Te(rt),rt=-1),x=!0;var U=C;try{for(Ne(G),y=n(m);y!==null&&(!(y.expirationTime>G)||M&&!Yn());){var S=y.callback;if(typeof S=="function"){y.callback=null,C=y.priorityLevel;var R=S(y.expirationTime<=G);G=i.unstable_now(),typeof R=="function"?y.callback=R:y===n(m)&&s(m),Ne(G)}else s(m);y=n(m)}if(y!==null)var Y=!0;else{var ee=n(g);ee!==null&&Se(Re,ee.startTime-G),Y=!1}return Y}finally{y=null,C=U,x=!1}}var De=!1,Be=null,rt=-1,wt=5,Rt=-1;function Yn(){return!(i.unstable_now()-Rt<wt)}function Ht(){if(Be!==null){var M=i.unstable_now();Rt=M;var G=!0;try{G=Be(!0,M)}finally{G?ft():(De=!1,Be=null)}}else De=!1}var ft;if(typeof xe=="function")ft=function(){xe(Ht)};else if(typeof MessageChannel<"u"){var Pt=new MessageChannel,$t=Pt.port2;Pt.port1.onmessage=Ht,ft=function(){$t.postMessage(null)}}else ft=function(){$(Ht,0)};function it(M){Be=M,De||(De=!0,ft())}function Se(M,G){rt=$(function(){M(i.unstable_now())},G)}i.unstable_IdlePriority=5,i.unstable_ImmediatePriority=1,i.unstable_LowPriority=4,i.unstable_NormalPriority=3,i.unstable_Profiling=null,i.unstable_UserBlockingPriority=2,i.unstable_cancelCallback=function(M){M.callback=null},i.unstable_continueExecution=function(){L||x||(L=!0,it(nt))},i.unstable_forceFrameRate=function(M){0>M||125<M?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):wt=0<M?Math.floor(1e3/M):5},i.unstable_getCurrentPriorityLevel=function(){return C},i.unstable_getFirstCallbackNode=function(){return n(m)},i.unstable_next=function(M){switch(C){case 1:case 2:case 3:var G=3;break;default:G=C}var U=C;C=G;try{return M()}finally{C=U}},i.unstable_pauseExecution=function(){},i.unstable_requestPaint=function(){},i.unstable_runWithPriority=function(M,G){switch(M){case 1:case 2:case 3:case 4:case 5:break;default:M=3}var U=C;C=M;try{return G()}finally{C=U}},i.unstable_scheduleCallback=function(M,G,U){var S=i.unstable_now();switch(typeof U=="object"&&U!==null?(U=U.delay,U=typeof U=="number"&&0<U?S+U:S):U=S,M){case 1:var R=-1;break;case 2:R=250;break;case 5:R=1073741823;break;case 4:R=1e4;break;default:R=5e3}return R=U+R,M={id:E++,callback:G,priorityLevel:M,startTime:U,expirationTime:R,sortIndex:-1},U>S?(M.sortIndex=U,e(g,M),n(m)===null&&M===n(g)&&(j?(Te(rt),rt=-1):j=!0,Se(Re,U-S))):(M.sortIndex=R,e(m,M),L||x||(L=!0,it(nt))),M},i.unstable_shouldYield=Yn,i.unstable_wrapCallback=function(M){var G=C;return function(){var U=C;C=G;try{return M.apply(this,arguments)}finally{C=U}}}}(Uu)),Uu}var Cp;function Uy(){return Cp||(Cp=1,Fu.exports=Fy()),Fu.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ip;function zy(){if(Ip)return ct;Ip=1;var i=Cc(),e=Uy();function n(t){for(var r="https://reactjs.org/docs/error-decoder.html?invariant="+t,o=1;o<arguments.length;o++)r+="&args[]="+encodeURIComponent(arguments[o]);return"Minified React error #"+t+"; visit "+r+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var s=new Set,l={};function u(t,r){d(t,r),d(t+"Capture",r)}function d(t,r){for(l[t]=r,t=0;t<r.length;t++)s.add(r[t])}var f=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),m=Object.prototype.hasOwnProperty,g=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,E={},y={};function C(t){return m.call(y,t)?!0:m.call(E,t)?!1:g.test(t)?y[t]=!0:(E[t]=!0,!1)}function x(t,r,o,a){if(o!==null&&o.type===0)return!1;switch(typeof r){case"function":case"symbol":return!0;case"boolean":return a?!1:o!==null?!o.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function L(t,r,o,a){if(r===null||typeof r>"u"||x(t,r,o,a))return!0;if(a)return!1;if(o!==null)switch(o.type){case 3:return!r;case 4:return r===!1;case 5:return isNaN(r);case 6:return isNaN(r)||1>r}return!1}function j(t,r,o,a,c,h,p){this.acceptsBooleans=r===2||r===3||r===4,this.attributeName=a,this.attributeNamespace=c,this.mustUseProperty=o,this.propertyName=t,this.type=r,this.sanitizeURL=h,this.removeEmptyString=p}var $={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){$[t]=new j(t,0,!1,t,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var r=t[0];$[r]=new j(r,1,!1,t[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(t){$[t]=new j(t,2,!1,t.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){$[t]=new j(t,2,!1,t,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){$[t]=new j(t,3,!1,t.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(t){$[t]=new j(t,3,!0,t,null,!1,!1)}),["capture","download"].forEach(function(t){$[t]=new j(t,4,!1,t,null,!1,!1)}),["cols","rows","size","span"].forEach(function(t){$[t]=new j(t,6,!1,t,null,!1,!1)}),["rowSpan","start"].forEach(function(t){$[t]=new j(t,5,!1,t.toLowerCase(),null,!1,!1)});var Te=/[\-:]([a-z])/g;function xe(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var r=t.replace(Te,xe);$[r]=new j(r,1,!1,t,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var r=t.replace(Te,xe);$[r]=new j(r,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(t){var r=t.replace(Te,xe);$[r]=new j(r,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(t){$[t]=new j(t,1,!1,t.toLowerCase(),null,!1,!1)}),$.xlinkHref=new j("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(t){$[t]=new j(t,1,!1,t.toLowerCase(),null,!0,!0)});function Ne(t,r,o,a){var c=$.hasOwnProperty(r)?$[r]:null;(c!==null?c.type!==0:a||!(2<r.length)||r[0]!=="o"&&r[0]!=="O"||r[1]!=="n"&&r[1]!=="N")&&(L(r,o,c,a)&&(o=null),a||c===null?C(r)&&(o===null?t.removeAttribute(r):t.setAttribute(r,""+o)):c.mustUseProperty?t[c.propertyName]=o===null?c.type===3?!1:"":o:(r=c.attributeName,a=c.attributeNamespace,o===null?t.removeAttribute(r):(c=c.type,o=c===3||c===4&&o===!0?"":""+o,a?t.setAttributeNS(a,r,o):t.setAttribute(r,o))))}var Re=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,nt=Symbol.for("react.element"),De=Symbol.for("react.portal"),Be=Symbol.for("react.fragment"),rt=Symbol.for("react.strict_mode"),wt=Symbol.for("react.profiler"),Rt=Symbol.for("react.provider"),Yn=Symbol.for("react.context"),Ht=Symbol.for("react.forward_ref"),ft=Symbol.for("react.suspense"),Pt=Symbol.for("react.suspense_list"),$t=Symbol.for("react.memo"),it=Symbol.for("react.lazy"),Se=Symbol.for("react.offscreen"),M=Symbol.iterator;function G(t){return t===null||typeof t!="object"?null:(t=M&&t[M]||t["@@iterator"],typeof t=="function"?t:null)}var U=Object.assign,S;function R(t){if(S===void 0)try{throw Error()}catch(o){var r=o.stack.trim().match(/\n( *(at )?)/);S=r&&r[1]||""}return`
`+S+t}var Y=!1;function ee(t,r){if(!t||Y)return"";Y=!0;var o=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(r)if(r=function(){throw Error()},Object.defineProperty(r.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(r,[])}catch(T){var a=T}Reflect.construct(t,[],r)}else{try{r.call()}catch(T){a=T}t.call(r.prototype)}else{try{throw Error()}catch(T){a=T}t()}}catch(T){if(T&&a&&typeof T.stack=="string"){for(var c=T.stack.split(`
`),h=a.stack.split(`
`),p=c.length-1,_=h.length-1;1<=p&&0<=_&&c[p]!==h[_];)_--;for(;1<=p&&0<=_;p--,_--)if(c[p]!==h[_]){if(p!==1||_!==1)do if(p--,_--,0>_||c[p]!==h[_]){var v=`
`+c[p].replace(" at new "," at ");return t.displayName&&v.includes("<anonymous>")&&(v=v.replace("<anonymous>",t.displayName)),v}while(1<=p&&0<=_);break}}}finally{Y=!1,Error.prepareStackTrace=o}return(t=t?t.displayName||t.name:"")?R(t):""}function re(t){switch(t.tag){case 5:return R(t.type);case 16:return R("Lazy");case 13:return R("Suspense");case 19:return R("SuspenseList");case 0:case 2:case 15:return t=ee(t.type,!1),t;case 11:return t=ee(t.type.render,!1),t;case 1:return t=ee(t.type,!0),t;default:return""}}function ie(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Be:return"Fragment";case De:return"Portal";case wt:return"Profiler";case rt:return"StrictMode";case ft:return"Suspense";case Pt:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case Yn:return(t.displayName||"Context")+".Consumer";case Rt:return(t._context.displayName||"Context")+".Provider";case Ht:var r=t.render;return t=t.displayName,t||(t=r.displayName||r.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case $t:return r=t.displayName||null,r!==null?r:ie(t.type)||"Memo";case it:r=t._payload,t=t._init;try{return ie(t(r))}catch{}}return null}function he(t){var r=t.type;switch(t.tag){case 24:return"Cache";case 9:return(r.displayName||"Context")+".Consumer";case 10:return(r._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=r.render,t=t.displayName||t.name||"",r.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return r;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ie(r);case 8:return r===rt?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof r=="function")return r.displayName||r.name||null;if(typeof r=="string")return r}return null}function ae(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function ve(t){var r=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(r==="checkbox"||r==="radio")}function pt(t){var r=ve(t)?"checked":"value",o=Object.getOwnPropertyDescriptor(t.constructor.prototype,r),a=""+t[r];if(!t.hasOwnProperty(r)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var c=o.get,h=o.set;return Object.defineProperty(t,r,{configurable:!0,get:function(){return c.call(this)},set:function(p){a=""+p,h.call(this,p)}}),Object.defineProperty(t,r,{enumerable:o.enumerable}),{getValue:function(){return a},setValue:function(p){a=""+p},stopTracking:function(){t._valueTracker=null,delete t[r]}}}}function Ds(t){t._valueTracker||(t._valueTracker=pt(t))}function Cd(t){if(!t)return!1;var r=t._valueTracker;if(!r)return!0;var o=r.getValue(),a="";return t&&(a=ve(t)?t.checked?"true":"false":t.value),t=a,t!==o?(r.setValue(t),!0):!1}function Ls(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function jl(t,r){var o=r.checked;return U({},r,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:o??t._wrapperState.initialChecked})}function Id(t,r){var o=r.defaultValue==null?"":r.defaultValue,a=r.checked!=null?r.checked:r.defaultChecked;o=ae(r.value!=null?r.value:o),t._wrapperState={initialChecked:a,initialValue:o,controlled:r.type==="checkbox"||r.type==="radio"?r.checked!=null:r.value!=null}}function kd(t,r){r=r.checked,r!=null&&Ne(t,"checked",r,!1)}function Vl(t,r){kd(t,r);var o=ae(r.value),a=r.type;if(o!=null)a==="number"?(o===0&&t.value===""||t.value!=o)&&(t.value=""+o):t.value!==""+o&&(t.value=""+o);else if(a==="submit"||a==="reset"){t.removeAttribute("value");return}r.hasOwnProperty("value")?Bl(t,r.type,o):r.hasOwnProperty("defaultValue")&&Bl(t,r.type,ae(r.defaultValue)),r.checked==null&&r.defaultChecked!=null&&(t.defaultChecked=!!r.defaultChecked)}function Td(t,r,o){if(r.hasOwnProperty("value")||r.hasOwnProperty("defaultValue")){var a=r.type;if(!(a!=="submit"&&a!=="reset"||r.value!==void 0&&r.value!==null))return;r=""+t._wrapperState.initialValue,o||r===t.value||(t.value=r),t.defaultValue=r}o=t.name,o!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,o!==""&&(t.name=o)}function Bl(t,r,o){(r!=="number"||Ls(t.ownerDocument)!==t)&&(o==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+o&&(t.defaultValue=""+o))}var vi=Array.isArray;function Ir(t,r,o,a){if(t=t.options,r){r={};for(var c=0;c<o.length;c++)r["$"+o[c]]=!0;for(o=0;o<t.length;o++)c=r.hasOwnProperty("$"+t[o].value),t[o].selected!==c&&(t[o].selected=c),c&&a&&(t[o].defaultSelected=!0)}else{for(o=""+ae(o),r=null,c=0;c<t.length;c++){if(t[c].value===o){t[c].selected=!0,a&&(t[c].defaultSelected=!0);return}r!==null||t[c].disabled||(r=t[c])}r!==null&&(r.selected=!0)}}function Hl(t,r){if(r.dangerouslySetInnerHTML!=null)throw Error(n(91));return U({},r,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Nd(t,r){var o=r.value;if(o==null){if(o=r.children,r=r.defaultValue,o!=null){if(r!=null)throw Error(n(92));if(vi(o)){if(1<o.length)throw Error(n(93));o=o[0]}r=o}r==null&&(r=""),o=r}t._wrapperState={initialValue:ae(o)}}function Rd(t,r){var o=ae(r.value),a=ae(r.defaultValue);o!=null&&(o=""+o,o!==t.value&&(t.value=o),r.defaultValue==null&&t.defaultValue!==o&&(t.defaultValue=o)),a!=null&&(t.defaultValue=""+a)}function Pd(t){var r=t.textContent;r===t._wrapperState.initialValue&&r!==""&&r!==null&&(t.value=r)}function Ad(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function $l(t,r){return t==null||t==="http://www.w3.org/1999/xhtml"?Ad(r):t==="http://www.w3.org/2000/svg"&&r==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Ms,xd=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(r,o,a,c){MSApp.execUnsafeLocalFunction(function(){return t(r,o,a,c)})}:t}(function(t,r){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=r;else{for(Ms=Ms||document.createElement("div"),Ms.innerHTML="<svg>"+r.valueOf().toString()+"</svg>",r=Ms.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;r.firstChild;)t.appendChild(r.firstChild)}});function yi(t,r){if(r){var o=t.firstChild;if(o&&o===t.lastChild&&o.nodeType===3){o.nodeValue=r;return}}t.textContent=r}var wi={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},U_=["Webkit","ms","Moz","O"];Object.keys(wi).forEach(function(t){U_.forEach(function(r){r=r+t.charAt(0).toUpperCase()+t.substring(1),wi[r]=wi[t]})});function Od(t,r,o){return r==null||typeof r=="boolean"||r===""?"":o||typeof r!="number"||r===0||wi.hasOwnProperty(t)&&wi[t]?(""+r).trim():r+"px"}function Dd(t,r){t=t.style;for(var o in r)if(r.hasOwnProperty(o)){var a=o.indexOf("--")===0,c=Od(o,r[o],a);o==="float"&&(o="cssFloat"),a?t.setProperty(o,c):t[o]=c}}var z_=U({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Gl(t,r){if(r){if(z_[t]&&(r.children!=null||r.dangerouslySetInnerHTML!=null))throw Error(n(137,t));if(r.dangerouslySetInnerHTML!=null){if(r.children!=null)throw Error(n(60));if(typeof r.dangerouslySetInnerHTML!="object"||!("__html"in r.dangerouslySetInnerHTML))throw Error(n(61))}if(r.style!=null&&typeof r.style!="object")throw Error(n(62))}}function Kl(t,r){if(t.indexOf("-")===-1)return typeof r.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ql=null;function Ql(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Yl=null,kr=null,Tr=null;function Ld(t){if(t=Vi(t)){if(typeof Yl!="function")throw Error(n(280));var r=t.stateNode;r&&(r=io(r),Yl(t.stateNode,t.type,r))}}function Md(t){kr?Tr?Tr.push(t):Tr=[t]:kr=t}function bd(){if(kr){var t=kr,r=Tr;if(Tr=kr=null,Ld(t),r)for(t=0;t<r.length;t++)Ld(r[t])}}function Fd(t,r){return t(r)}function Ud(){}var Xl=!1;function zd(t,r,o){if(Xl)return t(r,o);Xl=!0;try{return Fd(t,r,o)}finally{Xl=!1,(kr!==null||Tr!==null)&&(Ud(),bd())}}function Ei(t,r){var o=t.stateNode;if(o===null)return null;var a=io(o);if(a===null)return null;o=a[r];e:switch(r){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(a=!a.disabled)||(t=t.type,a=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!a;break e;default:t=!1}if(t)return null;if(o&&typeof o!="function")throw Error(n(231,r,typeof o));return o}var Jl=!1;if(f)try{var Si={};Object.defineProperty(Si,"passive",{get:function(){Jl=!0}}),window.addEventListener("test",Si,Si),window.removeEventListener("test",Si,Si)}catch{Jl=!1}function W_(t,r,o,a,c,h,p,_,v){var T=Array.prototype.slice.call(arguments,3);try{r.apply(o,T)}catch(P){this.onError(P)}}var Ci=!1,bs=null,Fs=!1,Zl=null,j_={onError:function(t){Ci=!0,bs=t}};function V_(t,r,o,a,c,h,p,_,v){Ci=!1,bs=null,W_.apply(j_,arguments)}function B_(t,r,o,a,c,h,p,_,v){if(V_.apply(this,arguments),Ci){if(Ci){var T=bs;Ci=!1,bs=null}else throw Error(n(198));Fs||(Fs=!0,Zl=T)}}function Xn(t){var r=t,o=t;if(t.alternate)for(;r.return;)r=r.return;else{t=r;do r=t,(r.flags&4098)!==0&&(o=r.return),t=r.return;while(t)}return r.tag===3?o:null}function Wd(t){if(t.tag===13){var r=t.memoizedState;if(r===null&&(t=t.alternate,t!==null&&(r=t.memoizedState)),r!==null)return r.dehydrated}return null}function jd(t){if(Xn(t)!==t)throw Error(n(188))}function H_(t){var r=t.alternate;if(!r){if(r=Xn(t),r===null)throw Error(n(188));return r!==t?null:t}for(var o=t,a=r;;){var c=o.return;if(c===null)break;var h=c.alternate;if(h===null){if(a=c.return,a!==null){o=a;continue}break}if(c.child===h.child){for(h=c.child;h;){if(h===o)return jd(c),t;if(h===a)return jd(c),r;h=h.sibling}throw Error(n(188))}if(o.return!==a.return)o=c,a=h;else{for(var p=!1,_=c.child;_;){if(_===o){p=!0,o=c,a=h;break}if(_===a){p=!0,a=c,o=h;break}_=_.sibling}if(!p){for(_=h.child;_;){if(_===o){p=!0,o=h,a=c;break}if(_===a){p=!0,a=h,o=c;break}_=_.sibling}if(!p)throw Error(n(189))}}if(o.alternate!==a)throw Error(n(190))}if(o.tag!==3)throw Error(n(188));return o.stateNode.current===o?t:r}function Vd(t){return t=H_(t),t!==null?Bd(t):null}function Bd(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var r=Bd(t);if(r!==null)return r;t=t.sibling}return null}var Hd=e.unstable_scheduleCallback,$d=e.unstable_cancelCallback,$_=e.unstable_shouldYield,G_=e.unstable_requestPaint,Pe=e.unstable_now,K_=e.unstable_getCurrentPriorityLevel,ea=e.unstable_ImmediatePriority,Gd=e.unstable_UserBlockingPriority,Us=e.unstable_NormalPriority,q_=e.unstable_LowPriority,Kd=e.unstable_IdlePriority,zs=null,Gt=null;function Q_(t){if(Gt&&typeof Gt.onCommitFiberRoot=="function")try{Gt.onCommitFiberRoot(zs,t,void 0,(t.current.flags&128)===128)}catch{}}var At=Math.clz32?Math.clz32:J_,Y_=Math.log,X_=Math.LN2;function J_(t){return t>>>=0,t===0?32:31-(Y_(t)/X_|0)|0}var Ws=64,js=4194304;function Ii(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Vs(t,r){var o=t.pendingLanes;if(o===0)return 0;var a=0,c=t.suspendedLanes,h=t.pingedLanes,p=o&268435455;if(p!==0){var _=p&~c;_!==0?a=Ii(_):(h&=p,h!==0&&(a=Ii(h)))}else p=o&~c,p!==0?a=Ii(p):h!==0&&(a=Ii(h));if(a===0)return 0;if(r!==0&&r!==a&&(r&c)===0&&(c=a&-a,h=r&-r,c>=h||c===16&&(h&4194240)!==0))return r;if((a&4)!==0&&(a|=o&16),r=t.entangledLanes,r!==0)for(t=t.entanglements,r&=a;0<r;)o=31-At(r),c=1<<o,a|=t[o],r&=~c;return a}function Z_(t,r){switch(t){case 1:case 2:case 4:return r+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return r+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function ev(t,r){for(var o=t.suspendedLanes,a=t.pingedLanes,c=t.expirationTimes,h=t.pendingLanes;0<h;){var p=31-At(h),_=1<<p,v=c[p];v===-1?((_&o)===0||(_&a)!==0)&&(c[p]=Z_(_,r)):v<=r&&(t.expiredLanes|=_),h&=~_}}function ta(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function qd(){var t=Ws;return Ws<<=1,(Ws&4194240)===0&&(Ws=64),t}function na(t){for(var r=[],o=0;31>o;o++)r.push(t);return r}function ki(t,r,o){t.pendingLanes|=r,r!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,r=31-At(r),t[r]=o}function tv(t,r){var o=t.pendingLanes&~r;t.pendingLanes=r,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=r,t.mutableReadLanes&=r,t.entangledLanes&=r,r=t.entanglements;var a=t.eventTimes;for(t=t.expirationTimes;0<o;){var c=31-At(o),h=1<<c;r[c]=0,a[c]=-1,t[c]=-1,o&=~h}}function ra(t,r){var o=t.entangledLanes|=r;for(t=t.entanglements;o;){var a=31-At(o),c=1<<a;c&r|t[a]&r&&(t[a]|=r),o&=~c}}var ue=0;function Qd(t){return t&=-t,1<t?4<t?(t&268435455)!==0?16:536870912:4:1}var Yd,ia,Xd,Jd,Zd,sa=!1,Bs=[],vn=null,yn=null,wn=null,Ti=new Map,Ni=new Map,En=[],nv="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function eh(t,r){switch(t){case"focusin":case"focusout":vn=null;break;case"dragenter":case"dragleave":yn=null;break;case"mouseover":case"mouseout":wn=null;break;case"pointerover":case"pointerout":Ti.delete(r.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ni.delete(r.pointerId)}}function Ri(t,r,o,a,c,h){return t===null||t.nativeEvent!==h?(t={blockedOn:r,domEventName:o,eventSystemFlags:a,nativeEvent:h,targetContainers:[c]},r!==null&&(r=Vi(r),r!==null&&ia(r)),t):(t.eventSystemFlags|=a,r=t.targetContainers,c!==null&&r.indexOf(c)===-1&&r.push(c),t)}function rv(t,r,o,a,c){switch(r){case"focusin":return vn=Ri(vn,t,r,o,a,c),!0;case"dragenter":return yn=Ri(yn,t,r,o,a,c),!0;case"mouseover":return wn=Ri(wn,t,r,o,a,c),!0;case"pointerover":var h=c.pointerId;return Ti.set(h,Ri(Ti.get(h)||null,t,r,o,a,c)),!0;case"gotpointercapture":return h=c.pointerId,Ni.set(h,Ri(Ni.get(h)||null,t,r,o,a,c)),!0}return!1}function th(t){var r=Jn(t.target);if(r!==null){var o=Xn(r);if(o!==null){if(r=o.tag,r===13){if(r=Wd(o),r!==null){t.blockedOn=r,Zd(t.priority,function(){Xd(o)});return}}else if(r===3&&o.stateNode.current.memoizedState.isDehydrated){t.blockedOn=o.tag===3?o.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Hs(t){if(t.blockedOn!==null)return!1;for(var r=t.targetContainers;0<r.length;){var o=la(t.domEventName,t.eventSystemFlags,r[0],t.nativeEvent);if(o===null){o=t.nativeEvent;var a=new o.constructor(o.type,o);ql=a,o.target.dispatchEvent(a),ql=null}else return r=Vi(o),r!==null&&ia(r),t.blockedOn=o,!1;r.shift()}return!0}function nh(t,r,o){Hs(t)&&o.delete(r)}function iv(){sa=!1,vn!==null&&Hs(vn)&&(vn=null),yn!==null&&Hs(yn)&&(yn=null),wn!==null&&Hs(wn)&&(wn=null),Ti.forEach(nh),Ni.forEach(nh)}function Pi(t,r){t.blockedOn===r&&(t.blockedOn=null,sa||(sa=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,iv)))}function Ai(t){function r(c){return Pi(c,t)}if(0<Bs.length){Pi(Bs[0],t);for(var o=1;o<Bs.length;o++){var a=Bs[o];a.blockedOn===t&&(a.blockedOn=null)}}for(vn!==null&&Pi(vn,t),yn!==null&&Pi(yn,t),wn!==null&&Pi(wn,t),Ti.forEach(r),Ni.forEach(r),o=0;o<En.length;o++)a=En[o],a.blockedOn===t&&(a.blockedOn=null);for(;0<En.length&&(o=En[0],o.blockedOn===null);)th(o),o.blockedOn===null&&En.shift()}var Nr=Re.ReactCurrentBatchConfig,$s=!0;function sv(t,r,o,a){var c=ue,h=Nr.transition;Nr.transition=null;try{ue=1,oa(t,r,o,a)}finally{ue=c,Nr.transition=h}}function ov(t,r,o,a){var c=ue,h=Nr.transition;Nr.transition=null;try{ue=4,oa(t,r,o,a)}finally{ue=c,Nr.transition=h}}function oa(t,r,o,a){if($s){var c=la(t,r,o,a);if(c===null)Ia(t,r,a,Gs,o),eh(t,a);else if(rv(c,t,r,o,a))a.stopPropagation();else if(eh(t,a),r&4&&-1<nv.indexOf(t)){for(;c!==null;){var h=Vi(c);if(h!==null&&Yd(h),h=la(t,r,o,a),h===null&&Ia(t,r,a,Gs,o),h===c)break;c=h}c!==null&&a.stopPropagation()}else Ia(t,r,a,null,o)}}var Gs=null;function la(t,r,o,a){if(Gs=null,t=Ql(a),t=Jn(t),t!==null)if(r=Xn(t),r===null)t=null;else if(o=r.tag,o===13){if(t=Wd(r),t!==null)return t;t=null}else if(o===3){if(r.stateNode.current.memoizedState.isDehydrated)return r.tag===3?r.stateNode.containerInfo:null;t=null}else r!==t&&(t=null);return Gs=t,null}function rh(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(K_()){case ea:return 1;case Gd:return 4;case Us:case q_:return 16;case Kd:return 536870912;default:return 16}default:return 16}}var Sn=null,aa=null,Ks=null;function ih(){if(Ks)return Ks;var t,r=aa,o=r.length,a,c="value"in Sn?Sn.value:Sn.textContent,h=c.length;for(t=0;t<o&&r[t]===c[t];t++);var p=o-t;for(a=1;a<=p&&r[o-a]===c[h-a];a++);return Ks=c.slice(t,1<a?1-a:void 0)}function qs(t){var r=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&r===13&&(t=13)):t=r,t===10&&(t=13),32<=t||t===13?t:0}function Qs(){return!0}function sh(){return!1}function mt(t){function r(o,a,c,h,p){this._reactName=o,this._targetInst=c,this.type=a,this.nativeEvent=h,this.target=p,this.currentTarget=null;for(var _ in t)t.hasOwnProperty(_)&&(o=t[_],this[_]=o?o(h):h[_]);return this.isDefaultPrevented=(h.defaultPrevented!=null?h.defaultPrevented:h.returnValue===!1)?Qs:sh,this.isPropagationStopped=sh,this}return U(r.prototype,{preventDefault:function(){this.defaultPrevented=!0;var o=this.nativeEvent;o&&(o.preventDefault?o.preventDefault():typeof o.returnValue!="unknown"&&(o.returnValue=!1),this.isDefaultPrevented=Qs)},stopPropagation:function(){var o=this.nativeEvent;o&&(o.stopPropagation?o.stopPropagation():typeof o.cancelBubble!="unknown"&&(o.cancelBubble=!0),this.isPropagationStopped=Qs)},persist:function(){},isPersistent:Qs}),r}var Rr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ua=mt(Rr),xi=U({},Rr,{view:0,detail:0}),lv=mt(xi),ca,da,Oi,Ys=U({},xi,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:fa,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Oi&&(Oi&&t.type==="mousemove"?(ca=t.screenX-Oi.screenX,da=t.screenY-Oi.screenY):da=ca=0,Oi=t),ca)},movementY:function(t){return"movementY"in t?t.movementY:da}}),oh=mt(Ys),av=U({},Ys,{dataTransfer:0}),uv=mt(av),cv=U({},xi,{relatedTarget:0}),ha=mt(cv),dv=U({},Rr,{animationName:0,elapsedTime:0,pseudoElement:0}),hv=mt(dv),fv=U({},Rr,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),pv=mt(fv),mv=U({},Rr,{data:0}),lh=mt(mv),gv={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},_v={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},vv={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function yv(t){var r=this.nativeEvent;return r.getModifierState?r.getModifierState(t):(t=vv[t])?!!r[t]:!1}function fa(){return yv}var wv=U({},xi,{key:function(t){if(t.key){var r=gv[t.key]||t.key;if(r!=="Unidentified")return r}return t.type==="keypress"?(t=qs(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?_v[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:fa,charCode:function(t){return t.type==="keypress"?qs(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?qs(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Ev=mt(wv),Sv=U({},Ys,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),ah=mt(Sv),Cv=U({},xi,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:fa}),Iv=mt(Cv),kv=U({},Rr,{propertyName:0,elapsedTime:0,pseudoElement:0}),Tv=mt(kv),Nv=U({},Ys,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Rv=mt(Nv),Pv=[9,13,27,32],pa=f&&"CompositionEvent"in window,Di=null;f&&"documentMode"in document&&(Di=document.documentMode);var Av=f&&"TextEvent"in window&&!Di,uh=f&&(!pa||Di&&8<Di&&11>=Di),ch=" ",dh=!1;function hh(t,r){switch(t){case"keyup":return Pv.indexOf(r.keyCode)!==-1;case"keydown":return r.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function fh(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Pr=!1;function xv(t,r){switch(t){case"compositionend":return fh(r);case"keypress":return r.which!==32?null:(dh=!0,ch);case"textInput":return t=r.data,t===ch&&dh?null:t;default:return null}}function Ov(t,r){if(Pr)return t==="compositionend"||!pa&&hh(t,r)?(t=ih(),Ks=aa=Sn=null,Pr=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(r.ctrlKey||r.altKey||r.metaKey)||r.ctrlKey&&r.altKey){if(r.char&&1<r.char.length)return r.char;if(r.which)return String.fromCharCode(r.which)}return null;case"compositionend":return uh&&r.locale!=="ko"?null:r.data;default:return null}}var Dv={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function ph(t){var r=t&&t.nodeName&&t.nodeName.toLowerCase();return r==="input"?!!Dv[t.type]:r==="textarea"}function mh(t,r,o,a){Md(a),r=to(r,"onChange"),0<r.length&&(o=new ua("onChange","change",null,o,a),t.push({event:o,listeners:r}))}var Li=null,Mi=null;function Lv(t){Dh(t,0)}function Xs(t){var r=Lr(t);if(Cd(r))return t}function Mv(t,r){if(t==="change")return r}var gh=!1;if(f){var ma;if(f){var ga="oninput"in document;if(!ga){var _h=document.createElement("div");_h.setAttribute("oninput","return;"),ga=typeof _h.oninput=="function"}ma=ga}else ma=!1;gh=ma&&(!document.documentMode||9<document.documentMode)}function vh(){Li&&(Li.detachEvent("onpropertychange",yh),Mi=Li=null)}function yh(t){if(t.propertyName==="value"&&Xs(Mi)){var r=[];mh(r,Mi,t,Ql(t)),zd(Lv,r)}}function bv(t,r,o){t==="focusin"?(vh(),Li=r,Mi=o,Li.attachEvent("onpropertychange",yh)):t==="focusout"&&vh()}function Fv(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Xs(Mi)}function Uv(t,r){if(t==="click")return Xs(r)}function zv(t,r){if(t==="input"||t==="change")return Xs(r)}function Wv(t,r){return t===r&&(t!==0||1/t===1/r)||t!==t&&r!==r}var xt=typeof Object.is=="function"?Object.is:Wv;function bi(t,r){if(xt(t,r))return!0;if(typeof t!="object"||t===null||typeof r!="object"||r===null)return!1;var o=Object.keys(t),a=Object.keys(r);if(o.length!==a.length)return!1;for(a=0;a<o.length;a++){var c=o[a];if(!m.call(r,c)||!xt(t[c],r[c]))return!1}return!0}function wh(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Eh(t,r){var o=wh(t);t=0;for(var a;o;){if(o.nodeType===3){if(a=t+o.textContent.length,t<=r&&a>=r)return{node:o,offset:r-t};t=a}e:{for(;o;){if(o.nextSibling){o=o.nextSibling;break e}o=o.parentNode}o=void 0}o=wh(o)}}function Sh(t,r){return t&&r?t===r?!0:t&&t.nodeType===3?!1:r&&r.nodeType===3?Sh(t,r.parentNode):"contains"in t?t.contains(r):t.compareDocumentPosition?!!(t.compareDocumentPosition(r)&16):!1:!1}function Ch(){for(var t=window,r=Ls();r instanceof t.HTMLIFrameElement;){try{var o=typeof r.contentWindow.location.href=="string"}catch{o=!1}if(o)t=r.contentWindow;else break;r=Ls(t.document)}return r}function _a(t){var r=t&&t.nodeName&&t.nodeName.toLowerCase();return r&&(r==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||r==="textarea"||t.contentEditable==="true")}function jv(t){var r=Ch(),o=t.focusedElem,a=t.selectionRange;if(r!==o&&o&&o.ownerDocument&&Sh(o.ownerDocument.documentElement,o)){if(a!==null&&_a(o)){if(r=a.start,t=a.end,t===void 0&&(t=r),"selectionStart"in o)o.selectionStart=r,o.selectionEnd=Math.min(t,o.value.length);else if(t=(r=o.ownerDocument||document)&&r.defaultView||window,t.getSelection){t=t.getSelection();var c=o.textContent.length,h=Math.min(a.start,c);a=a.end===void 0?h:Math.min(a.end,c),!t.extend&&h>a&&(c=a,a=h,h=c),c=Eh(o,h);var p=Eh(o,a);c&&p&&(t.rangeCount!==1||t.anchorNode!==c.node||t.anchorOffset!==c.offset||t.focusNode!==p.node||t.focusOffset!==p.offset)&&(r=r.createRange(),r.setStart(c.node,c.offset),t.removeAllRanges(),h>a?(t.addRange(r),t.extend(p.node,p.offset)):(r.setEnd(p.node,p.offset),t.addRange(r)))}}for(r=[],t=o;t=t.parentNode;)t.nodeType===1&&r.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof o.focus=="function"&&o.focus(),o=0;o<r.length;o++)t=r[o],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var Vv=f&&"documentMode"in document&&11>=document.documentMode,Ar=null,va=null,Fi=null,ya=!1;function Ih(t,r,o){var a=o.window===o?o.document:o.nodeType===9?o:o.ownerDocument;ya||Ar==null||Ar!==Ls(a)||(a=Ar,"selectionStart"in a&&_a(a)?a={start:a.selectionStart,end:a.selectionEnd}:(a=(a.ownerDocument&&a.ownerDocument.defaultView||window).getSelection(),a={anchorNode:a.anchorNode,anchorOffset:a.anchorOffset,focusNode:a.focusNode,focusOffset:a.focusOffset}),Fi&&bi(Fi,a)||(Fi=a,a=to(va,"onSelect"),0<a.length&&(r=new ua("onSelect","select",null,r,o),t.push({event:r,listeners:a}),r.target=Ar)))}function Js(t,r){var o={};return o[t.toLowerCase()]=r.toLowerCase(),o["Webkit"+t]="webkit"+r,o["Moz"+t]="moz"+r,o}var xr={animationend:Js("Animation","AnimationEnd"),animationiteration:Js("Animation","AnimationIteration"),animationstart:Js("Animation","AnimationStart"),transitionend:Js("Transition","TransitionEnd")},wa={},kh={};f&&(kh=document.createElement("div").style,"AnimationEvent"in window||(delete xr.animationend.animation,delete xr.animationiteration.animation,delete xr.animationstart.animation),"TransitionEvent"in window||delete xr.transitionend.transition);function Zs(t){if(wa[t])return wa[t];if(!xr[t])return t;var r=xr[t],o;for(o in r)if(r.hasOwnProperty(o)&&o in kh)return wa[t]=r[o];return t}var Th=Zs("animationend"),Nh=Zs("animationiteration"),Rh=Zs("animationstart"),Ph=Zs("transitionend"),Ah=new Map,xh="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Cn(t,r){Ah.set(t,r),u(r,[t])}for(var Ea=0;Ea<xh.length;Ea++){var Sa=xh[Ea],Bv=Sa.toLowerCase(),Hv=Sa[0].toUpperCase()+Sa.slice(1);Cn(Bv,"on"+Hv)}Cn(Th,"onAnimationEnd"),Cn(Nh,"onAnimationIteration"),Cn(Rh,"onAnimationStart"),Cn("dblclick","onDoubleClick"),Cn("focusin","onFocus"),Cn("focusout","onBlur"),Cn(Ph,"onTransitionEnd"),d("onMouseEnter",["mouseout","mouseover"]),d("onMouseLeave",["mouseout","mouseover"]),d("onPointerEnter",["pointerout","pointerover"]),d("onPointerLeave",["pointerout","pointerover"]),u("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),u("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),u("onBeforeInput",["compositionend","keypress","textInput","paste"]),u("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),u("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),u("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ui="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),$v=new Set("cancel close invalid load scroll toggle".split(" ").concat(Ui));function Oh(t,r,o){var a=t.type||"unknown-event";t.currentTarget=o,B_(a,r,void 0,t),t.currentTarget=null}function Dh(t,r){r=(r&4)!==0;for(var o=0;o<t.length;o++){var a=t[o],c=a.event;a=a.listeners;e:{var h=void 0;if(r)for(var p=a.length-1;0<=p;p--){var _=a[p],v=_.instance,T=_.currentTarget;if(_=_.listener,v!==h&&c.isPropagationStopped())break e;Oh(c,_,T),h=v}else for(p=0;p<a.length;p++){if(_=a[p],v=_.instance,T=_.currentTarget,_=_.listener,v!==h&&c.isPropagationStopped())break e;Oh(c,_,T),h=v}}}if(Fs)throw t=Zl,Fs=!1,Zl=null,t}function ge(t,r){var o=r[Aa];o===void 0&&(o=r[Aa]=new Set);var a=t+"__bubble";o.has(a)||(Lh(r,t,2,!1),o.add(a))}function Ca(t,r,o){var a=0;r&&(a|=4),Lh(o,t,a,r)}var eo="_reactListening"+Math.random().toString(36).slice(2);function zi(t){if(!t[eo]){t[eo]=!0,s.forEach(function(o){o!=="selectionchange"&&($v.has(o)||Ca(o,!1,t),Ca(o,!0,t))});var r=t.nodeType===9?t:t.ownerDocument;r===null||r[eo]||(r[eo]=!0,Ca("selectionchange",!1,r))}}function Lh(t,r,o,a){switch(rh(r)){case 1:var c=sv;break;case 4:c=ov;break;default:c=oa}o=c.bind(null,r,o,t),c=void 0,!Jl||r!=="touchstart"&&r!=="touchmove"&&r!=="wheel"||(c=!0),a?c!==void 0?t.addEventListener(r,o,{capture:!0,passive:c}):t.addEventListener(r,o,!0):c!==void 0?t.addEventListener(r,o,{passive:c}):t.addEventListener(r,o,!1)}function Ia(t,r,o,a,c){var h=a;if((r&1)===0&&(r&2)===0&&a!==null)e:for(;;){if(a===null)return;var p=a.tag;if(p===3||p===4){var _=a.stateNode.containerInfo;if(_===c||_.nodeType===8&&_.parentNode===c)break;if(p===4)for(p=a.return;p!==null;){var v=p.tag;if((v===3||v===4)&&(v=p.stateNode.containerInfo,v===c||v.nodeType===8&&v.parentNode===c))return;p=p.return}for(;_!==null;){if(p=Jn(_),p===null)return;if(v=p.tag,v===5||v===6){a=h=p;continue e}_=_.parentNode}}a=a.return}zd(function(){var T=h,P=Ql(o),A=[];e:{var N=Ah.get(t);if(N!==void 0){var b=ua,z=t;switch(t){case"keypress":if(qs(o)===0)break e;case"keydown":case"keyup":b=Ev;break;case"focusin":z="focus",b=ha;break;case"focusout":z="blur",b=ha;break;case"beforeblur":case"afterblur":b=ha;break;case"click":if(o.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":b=oh;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":b=uv;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":b=Iv;break;case Th:case Nh:case Rh:b=hv;break;case Ph:b=Tv;break;case"scroll":b=lv;break;case"wheel":b=Rv;break;case"copy":case"cut":case"paste":b=pv;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":b=ah}var W=(r&4)!==0,Ae=!W&&t==="scroll",I=W?N!==null?N+"Capture":null:N;W=[];for(var w=T,k;w!==null;){k=w;var O=k.stateNode;if(k.tag===5&&O!==null&&(k=O,I!==null&&(O=Ei(w,I),O!=null&&W.push(Wi(w,O,k)))),Ae)break;w=w.return}0<W.length&&(N=new b(N,z,null,o,P),A.push({event:N,listeners:W}))}}if((r&7)===0){e:{if(N=t==="mouseover"||t==="pointerover",b=t==="mouseout"||t==="pointerout",N&&o!==ql&&(z=o.relatedTarget||o.fromElement)&&(Jn(z)||z[en]))break e;if((b||N)&&(N=P.window===P?P:(N=P.ownerDocument)?N.defaultView||N.parentWindow:window,b?(z=o.relatedTarget||o.toElement,b=T,z=z?Jn(z):null,z!==null&&(Ae=Xn(z),z!==Ae||z.tag!==5&&z.tag!==6)&&(z=null)):(b=null,z=T),b!==z)){if(W=oh,O="onMouseLeave",I="onMouseEnter",w="mouse",(t==="pointerout"||t==="pointerover")&&(W=ah,O="onPointerLeave",I="onPointerEnter",w="pointer"),Ae=b==null?N:Lr(b),k=z==null?N:Lr(z),N=new W(O,w+"leave",b,o,P),N.target=Ae,N.relatedTarget=k,O=null,Jn(P)===T&&(W=new W(I,w+"enter",z,o,P),W.target=k,W.relatedTarget=Ae,O=W),Ae=O,b&&z)t:{for(W=b,I=z,w=0,k=W;k;k=Or(k))w++;for(k=0,O=I;O;O=Or(O))k++;for(;0<w-k;)W=Or(W),w--;for(;0<k-w;)I=Or(I),k--;for(;w--;){if(W===I||I!==null&&W===I.alternate)break t;W=Or(W),I=Or(I)}W=null}else W=null;b!==null&&Mh(A,N,b,W,!1),z!==null&&Ae!==null&&Mh(A,Ae,z,W,!0)}}e:{if(N=T?Lr(T):window,b=N.nodeName&&N.nodeName.toLowerCase(),b==="select"||b==="input"&&N.type==="file")var V=Mv;else if(ph(N))if(gh)V=zv;else{V=Fv;var B=bv}else(b=N.nodeName)&&b.toLowerCase()==="input"&&(N.type==="checkbox"||N.type==="radio")&&(V=Uv);if(V&&(V=V(t,T))){mh(A,V,o,P);break e}B&&B(t,N,T),t==="focusout"&&(B=N._wrapperState)&&B.controlled&&N.type==="number"&&Bl(N,"number",N.value)}switch(B=T?Lr(T):window,t){case"focusin":(ph(B)||B.contentEditable==="true")&&(Ar=B,va=T,Fi=null);break;case"focusout":Fi=va=Ar=null;break;case"mousedown":ya=!0;break;case"contextmenu":case"mouseup":case"dragend":ya=!1,Ih(A,o,P);break;case"selectionchange":if(Vv)break;case"keydown":case"keyup":Ih(A,o,P)}var H;if(pa)e:{switch(t){case"compositionstart":var q="onCompositionStart";break e;case"compositionend":q="onCompositionEnd";break e;case"compositionupdate":q="onCompositionUpdate";break e}q=void 0}else Pr?hh(t,o)&&(q="onCompositionEnd"):t==="keydown"&&o.keyCode===229&&(q="onCompositionStart");q&&(uh&&o.locale!=="ko"&&(Pr||q!=="onCompositionStart"?q==="onCompositionEnd"&&Pr&&(H=ih()):(Sn=P,aa="value"in Sn?Sn.value:Sn.textContent,Pr=!0)),B=to(T,q),0<B.length&&(q=new lh(q,t,null,o,P),A.push({event:q,listeners:B}),H?q.data=H:(H=fh(o),H!==null&&(q.data=H)))),(H=Av?xv(t,o):Ov(t,o))&&(T=to(T,"onBeforeInput"),0<T.length&&(P=new lh("onBeforeInput","beforeinput",null,o,P),A.push({event:P,listeners:T}),P.data=H))}Dh(A,r)})}function Wi(t,r,o){return{instance:t,listener:r,currentTarget:o}}function to(t,r){for(var o=r+"Capture",a=[];t!==null;){var c=t,h=c.stateNode;c.tag===5&&h!==null&&(c=h,h=Ei(t,o),h!=null&&a.unshift(Wi(t,h,c)),h=Ei(t,r),h!=null&&a.push(Wi(t,h,c))),t=t.return}return a}function Or(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Mh(t,r,o,a,c){for(var h=r._reactName,p=[];o!==null&&o!==a;){var _=o,v=_.alternate,T=_.stateNode;if(v!==null&&v===a)break;_.tag===5&&T!==null&&(_=T,c?(v=Ei(o,h),v!=null&&p.unshift(Wi(o,v,_))):c||(v=Ei(o,h),v!=null&&p.push(Wi(o,v,_)))),o=o.return}p.length!==0&&t.push({event:r,listeners:p})}var Gv=/\r\n?/g,Kv=/\u0000|\uFFFD/g;function bh(t){return(typeof t=="string"?t:""+t).replace(Gv,`
`).replace(Kv,"")}function no(t,r,o){if(r=bh(r),bh(t)!==r&&o)throw Error(n(425))}function ro(){}var ka=null,Ta=null;function Na(t,r){return t==="textarea"||t==="noscript"||typeof r.children=="string"||typeof r.children=="number"||typeof r.dangerouslySetInnerHTML=="object"&&r.dangerouslySetInnerHTML!==null&&r.dangerouslySetInnerHTML.__html!=null}var Ra=typeof setTimeout=="function"?setTimeout:void 0,qv=typeof clearTimeout=="function"?clearTimeout:void 0,Fh=typeof Promise=="function"?Promise:void 0,Qv=typeof queueMicrotask=="function"?queueMicrotask:typeof Fh<"u"?function(t){return Fh.resolve(null).then(t).catch(Yv)}:Ra;function Yv(t){setTimeout(function(){throw t})}function Pa(t,r){var o=r,a=0;do{var c=o.nextSibling;if(t.removeChild(o),c&&c.nodeType===8)if(o=c.data,o==="/$"){if(a===0){t.removeChild(c),Ai(r);return}a--}else o!=="$"&&o!=="$?"&&o!=="$!"||a++;o=c}while(o);Ai(r)}function In(t){for(;t!=null;t=t.nextSibling){var r=t.nodeType;if(r===1||r===3)break;if(r===8){if(r=t.data,r==="$"||r==="$!"||r==="$?")break;if(r==="/$")return null}}return t}function Uh(t){t=t.previousSibling;for(var r=0;t;){if(t.nodeType===8){var o=t.data;if(o==="$"||o==="$!"||o==="$?"){if(r===0)return t;r--}else o==="/$"&&r++}t=t.previousSibling}return null}var Dr=Math.random().toString(36).slice(2),Kt="__reactFiber$"+Dr,ji="__reactProps$"+Dr,en="__reactContainer$"+Dr,Aa="__reactEvents$"+Dr,Xv="__reactListeners$"+Dr,Jv="__reactHandles$"+Dr;function Jn(t){var r=t[Kt];if(r)return r;for(var o=t.parentNode;o;){if(r=o[en]||o[Kt]){if(o=r.alternate,r.child!==null||o!==null&&o.child!==null)for(t=Uh(t);t!==null;){if(o=t[Kt])return o;t=Uh(t)}return r}t=o,o=t.parentNode}return null}function Vi(t){return t=t[Kt]||t[en],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Lr(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(n(33))}function io(t){return t[ji]||null}var xa=[],Mr=-1;function kn(t){return{current:t}}function _e(t){0>Mr||(t.current=xa[Mr],xa[Mr]=null,Mr--)}function fe(t,r){Mr++,xa[Mr]=t.current,t.current=r}var Tn={},qe=kn(Tn),st=kn(!1),Zn=Tn;function br(t,r){var o=t.type.contextTypes;if(!o)return Tn;var a=t.stateNode;if(a&&a.__reactInternalMemoizedUnmaskedChildContext===r)return a.__reactInternalMemoizedMaskedChildContext;var c={},h;for(h in o)c[h]=r[h];return a&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=c),c}function ot(t){return t=t.childContextTypes,t!=null}function so(){_e(st),_e(qe)}function zh(t,r,o){if(qe.current!==Tn)throw Error(n(168));fe(qe,r),fe(st,o)}function Wh(t,r,o){var a=t.stateNode;if(r=r.childContextTypes,typeof a.getChildContext!="function")return o;a=a.getChildContext();for(var c in a)if(!(c in r))throw Error(n(108,he(t)||"Unknown",c));return U({},o,a)}function oo(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Tn,Zn=qe.current,fe(qe,t),fe(st,st.current),!0}function jh(t,r,o){var a=t.stateNode;if(!a)throw Error(n(169));o?(t=Wh(t,r,Zn),a.__reactInternalMemoizedMergedChildContext=t,_e(st),_e(qe),fe(qe,t)):_e(st),fe(st,o)}var tn=null,lo=!1,Oa=!1;function Vh(t){tn===null?tn=[t]:tn.push(t)}function Zv(t){lo=!0,Vh(t)}function Nn(){if(!Oa&&tn!==null){Oa=!0;var t=0,r=ue;try{var o=tn;for(ue=1;t<o.length;t++){var a=o[t];do a=a(!0);while(a!==null)}tn=null,lo=!1}catch(c){throw tn!==null&&(tn=tn.slice(t+1)),Hd(ea,Nn),c}finally{ue=r,Oa=!1}}return null}var Fr=[],Ur=0,ao=null,uo=0,Et=[],St=0,er=null,nn=1,rn="";function tr(t,r){Fr[Ur++]=uo,Fr[Ur++]=ao,ao=t,uo=r}function Bh(t,r,o){Et[St++]=nn,Et[St++]=rn,Et[St++]=er,er=t;var a=nn;t=rn;var c=32-At(a)-1;a&=~(1<<c),o+=1;var h=32-At(r)+c;if(30<h){var p=c-c%5;h=(a&(1<<p)-1).toString(32),a>>=p,c-=p,nn=1<<32-At(r)+c|o<<c|a,rn=h+t}else nn=1<<h|o<<c|a,rn=t}function Da(t){t.return!==null&&(tr(t,1),Bh(t,1,0))}function La(t){for(;t===ao;)ao=Fr[--Ur],Fr[Ur]=null,uo=Fr[--Ur],Fr[Ur]=null;for(;t===er;)er=Et[--St],Et[St]=null,rn=Et[--St],Et[St]=null,nn=Et[--St],Et[St]=null}var gt=null,_t=null,ye=!1,Ot=null;function Hh(t,r){var o=Tt(5,null,null,0);o.elementType="DELETED",o.stateNode=r,o.return=t,r=t.deletions,r===null?(t.deletions=[o],t.flags|=16):r.push(o)}function $h(t,r){switch(t.tag){case 5:var o=t.type;return r=r.nodeType!==1||o.toLowerCase()!==r.nodeName.toLowerCase()?null:r,r!==null?(t.stateNode=r,gt=t,_t=In(r.firstChild),!0):!1;case 6:return r=t.pendingProps===""||r.nodeType!==3?null:r,r!==null?(t.stateNode=r,gt=t,_t=null,!0):!1;case 13:return r=r.nodeType!==8?null:r,r!==null?(o=er!==null?{id:nn,overflow:rn}:null,t.memoizedState={dehydrated:r,treeContext:o,retryLane:1073741824},o=Tt(18,null,null,0),o.stateNode=r,o.return=t,t.child=o,gt=t,_t=null,!0):!1;default:return!1}}function Ma(t){return(t.mode&1)!==0&&(t.flags&128)===0}function ba(t){if(ye){var r=_t;if(r){var o=r;if(!$h(t,r)){if(Ma(t))throw Error(n(418));r=In(o.nextSibling);var a=gt;r&&$h(t,r)?Hh(a,o):(t.flags=t.flags&-4097|2,ye=!1,gt=t)}}else{if(Ma(t))throw Error(n(418));t.flags=t.flags&-4097|2,ye=!1,gt=t}}}function Gh(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;gt=t}function co(t){if(t!==gt)return!1;if(!ye)return Gh(t),ye=!0,!1;var r;if((r=t.tag!==3)&&!(r=t.tag!==5)&&(r=t.type,r=r!=="head"&&r!=="body"&&!Na(t.type,t.memoizedProps)),r&&(r=_t)){if(Ma(t))throw Kh(),Error(n(418));for(;r;)Hh(t,r),r=In(r.nextSibling)}if(Gh(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(n(317));e:{for(t=t.nextSibling,r=0;t;){if(t.nodeType===8){var o=t.data;if(o==="/$"){if(r===0){_t=In(t.nextSibling);break e}r--}else o!=="$"&&o!=="$!"&&o!=="$?"||r++}t=t.nextSibling}_t=null}}else _t=gt?In(t.stateNode.nextSibling):null;return!0}function Kh(){for(var t=_t;t;)t=In(t.nextSibling)}function zr(){_t=gt=null,ye=!1}function Fa(t){Ot===null?Ot=[t]:Ot.push(t)}var ey=Re.ReactCurrentBatchConfig;function Bi(t,r,o){if(t=o.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(o._owner){if(o=o._owner,o){if(o.tag!==1)throw Error(n(309));var a=o.stateNode}if(!a)throw Error(n(147,t));var c=a,h=""+t;return r!==null&&r.ref!==null&&typeof r.ref=="function"&&r.ref._stringRef===h?r.ref:(r=function(p){var _=c.refs;p===null?delete _[h]:_[h]=p},r._stringRef=h,r)}if(typeof t!="string")throw Error(n(284));if(!o._owner)throw Error(n(290,t))}return t}function ho(t,r){throw t=Object.prototype.toString.call(r),Error(n(31,t==="[object Object]"?"object with keys {"+Object.keys(r).join(", ")+"}":t))}function qh(t){var r=t._init;return r(t._payload)}function Qh(t){function r(I,w){if(t){var k=I.deletions;k===null?(I.deletions=[w],I.flags|=16):k.push(w)}}function o(I,w){if(!t)return null;for(;w!==null;)r(I,w),w=w.sibling;return null}function a(I,w){for(I=new Map;w!==null;)w.key!==null?I.set(w.key,w):I.set(w.index,w),w=w.sibling;return I}function c(I,w){return I=Mn(I,w),I.index=0,I.sibling=null,I}function h(I,w,k){return I.index=k,t?(k=I.alternate,k!==null?(k=k.index,k<w?(I.flags|=2,w):k):(I.flags|=2,w)):(I.flags|=1048576,w)}function p(I){return t&&I.alternate===null&&(I.flags|=2),I}function _(I,w,k,O){return w===null||w.tag!==6?(w=Ru(k,I.mode,O),w.return=I,w):(w=c(w,k),w.return=I,w)}function v(I,w,k,O){var V=k.type;return V===Be?P(I,w,k.props.children,O,k.key):w!==null&&(w.elementType===V||typeof V=="object"&&V!==null&&V.$$typeof===it&&qh(V)===w.type)?(O=c(w,k.props),O.ref=Bi(I,w,k),O.return=I,O):(O=bo(k.type,k.key,k.props,null,I.mode,O),O.ref=Bi(I,w,k),O.return=I,O)}function T(I,w,k,O){return w===null||w.tag!==4||w.stateNode.containerInfo!==k.containerInfo||w.stateNode.implementation!==k.implementation?(w=Pu(k,I.mode,O),w.return=I,w):(w=c(w,k.children||[]),w.return=I,w)}function P(I,w,k,O,V){return w===null||w.tag!==7?(w=ur(k,I.mode,O,V),w.return=I,w):(w=c(w,k),w.return=I,w)}function A(I,w,k){if(typeof w=="string"&&w!==""||typeof w=="number")return w=Ru(""+w,I.mode,k),w.return=I,w;if(typeof w=="object"&&w!==null){switch(w.$$typeof){case nt:return k=bo(w.type,w.key,w.props,null,I.mode,k),k.ref=Bi(I,null,w),k.return=I,k;case De:return w=Pu(w,I.mode,k),w.return=I,w;case it:var O=w._init;return A(I,O(w._payload),k)}if(vi(w)||G(w))return w=ur(w,I.mode,k,null),w.return=I,w;ho(I,w)}return null}function N(I,w,k,O){var V=w!==null?w.key:null;if(typeof k=="string"&&k!==""||typeof k=="number")return V!==null?null:_(I,w,""+k,O);if(typeof k=="object"&&k!==null){switch(k.$$typeof){case nt:return k.key===V?v(I,w,k,O):null;case De:return k.key===V?T(I,w,k,O):null;case it:return V=k._init,N(I,w,V(k._payload),O)}if(vi(k)||G(k))return V!==null?null:P(I,w,k,O,null);ho(I,k)}return null}function b(I,w,k,O,V){if(typeof O=="string"&&O!==""||typeof O=="number")return I=I.get(k)||null,_(w,I,""+O,V);if(typeof O=="object"&&O!==null){switch(O.$$typeof){case nt:return I=I.get(O.key===null?k:O.key)||null,v(w,I,O,V);case De:return I=I.get(O.key===null?k:O.key)||null,T(w,I,O,V);case it:var B=O._init;return b(I,w,k,B(O._payload),V)}if(vi(O)||G(O))return I=I.get(k)||null,P(w,I,O,V,null);ho(w,O)}return null}function z(I,w,k,O){for(var V=null,B=null,H=w,q=w=0,Ue=null;H!==null&&q<k.length;q++){H.index>q?(Ue=H,H=null):Ue=H.sibling;var se=N(I,H,k[q],O);if(se===null){H===null&&(H=Ue);break}t&&H&&se.alternate===null&&r(I,H),w=h(se,w,q),B===null?V=se:B.sibling=se,B=se,H=Ue}if(q===k.length)return o(I,H),ye&&tr(I,q),V;if(H===null){for(;q<k.length;q++)H=A(I,k[q],O),H!==null&&(w=h(H,w,q),B===null?V=H:B.sibling=H,B=H);return ye&&tr(I,q),V}for(H=a(I,H);q<k.length;q++)Ue=b(H,I,q,k[q],O),Ue!==null&&(t&&Ue.alternate!==null&&H.delete(Ue.key===null?q:Ue.key),w=h(Ue,w,q),B===null?V=Ue:B.sibling=Ue,B=Ue);return t&&H.forEach(function(bn){return r(I,bn)}),ye&&tr(I,q),V}function W(I,w,k,O){var V=G(k);if(typeof V!="function")throw Error(n(150));if(k=V.call(k),k==null)throw Error(n(151));for(var B=V=null,H=w,q=w=0,Ue=null,se=k.next();H!==null&&!se.done;q++,se=k.next()){H.index>q?(Ue=H,H=null):Ue=H.sibling;var bn=N(I,H,se.value,O);if(bn===null){H===null&&(H=Ue);break}t&&H&&bn.alternate===null&&r(I,H),w=h(bn,w,q),B===null?V=bn:B.sibling=bn,B=bn,H=Ue}if(se.done)return o(I,H),ye&&tr(I,q),V;if(H===null){for(;!se.done;q++,se=k.next())se=A(I,se.value,O),se!==null&&(w=h(se,w,q),B===null?V=se:B.sibling=se,B=se);return ye&&tr(I,q),V}for(H=a(I,H);!se.done;q++,se=k.next())se=b(H,I,q,se.value,O),se!==null&&(t&&se.alternate!==null&&H.delete(se.key===null?q:se.key),w=h(se,w,q),B===null?V=se:B.sibling=se,B=se);return t&&H.forEach(function(Dy){return r(I,Dy)}),ye&&tr(I,q),V}function Ae(I,w,k,O){if(typeof k=="object"&&k!==null&&k.type===Be&&k.key===null&&(k=k.props.children),typeof k=="object"&&k!==null){switch(k.$$typeof){case nt:e:{for(var V=k.key,B=w;B!==null;){if(B.key===V){if(V=k.type,V===Be){if(B.tag===7){o(I,B.sibling),w=c(B,k.props.children),w.return=I,I=w;break e}}else if(B.elementType===V||typeof V=="object"&&V!==null&&V.$$typeof===it&&qh(V)===B.type){o(I,B.sibling),w=c(B,k.props),w.ref=Bi(I,B,k),w.return=I,I=w;break e}o(I,B);break}else r(I,B);B=B.sibling}k.type===Be?(w=ur(k.props.children,I.mode,O,k.key),w.return=I,I=w):(O=bo(k.type,k.key,k.props,null,I.mode,O),O.ref=Bi(I,w,k),O.return=I,I=O)}return p(I);case De:e:{for(B=k.key;w!==null;){if(w.key===B)if(w.tag===4&&w.stateNode.containerInfo===k.containerInfo&&w.stateNode.implementation===k.implementation){o(I,w.sibling),w=c(w,k.children||[]),w.return=I,I=w;break e}else{o(I,w);break}else r(I,w);w=w.sibling}w=Pu(k,I.mode,O),w.return=I,I=w}return p(I);case it:return B=k._init,Ae(I,w,B(k._payload),O)}if(vi(k))return z(I,w,k,O);if(G(k))return W(I,w,k,O);ho(I,k)}return typeof k=="string"&&k!==""||typeof k=="number"?(k=""+k,w!==null&&w.tag===6?(o(I,w.sibling),w=c(w,k),w.return=I,I=w):(o(I,w),w=Ru(k,I.mode,O),w.return=I,I=w),p(I)):o(I,w)}return Ae}var Wr=Qh(!0),Yh=Qh(!1),fo=kn(null),po=null,jr=null,Ua=null;function za(){Ua=jr=po=null}function Wa(t){var r=fo.current;_e(fo),t._currentValue=r}function ja(t,r,o){for(;t!==null;){var a=t.alternate;if((t.childLanes&r)!==r?(t.childLanes|=r,a!==null&&(a.childLanes|=r)):a!==null&&(a.childLanes&r)!==r&&(a.childLanes|=r),t===o)break;t=t.return}}function Vr(t,r){po=t,Ua=jr=null,t=t.dependencies,t!==null&&t.firstContext!==null&&((t.lanes&r)!==0&&(lt=!0),t.firstContext=null)}function Ct(t){var r=t._currentValue;if(Ua!==t)if(t={context:t,memoizedValue:r,next:null},jr===null){if(po===null)throw Error(n(308));jr=t,po.dependencies={lanes:0,firstContext:t}}else jr=jr.next=t;return r}var nr=null;function Va(t){nr===null?nr=[t]:nr.push(t)}function Xh(t,r,o,a){var c=r.interleaved;return c===null?(o.next=o,Va(r)):(o.next=c.next,c.next=o),r.interleaved=o,sn(t,a)}function sn(t,r){t.lanes|=r;var o=t.alternate;for(o!==null&&(o.lanes|=r),o=t,t=t.return;t!==null;)t.childLanes|=r,o=t.alternate,o!==null&&(o.childLanes|=r),o=t,t=t.return;return o.tag===3?o.stateNode:null}var Rn=!1;function Ba(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Jh(t,r){t=t.updateQueue,r.updateQueue===t&&(r.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function on(t,r){return{eventTime:t,lane:r,tag:0,payload:null,callback:null,next:null}}function Pn(t,r,o){var a=t.updateQueue;if(a===null)return null;if(a=a.shared,(ne&2)!==0){var c=a.pending;return c===null?r.next=r:(r.next=c.next,c.next=r),a.pending=r,sn(t,o)}return c=a.interleaved,c===null?(r.next=r,Va(a)):(r.next=c.next,c.next=r),a.interleaved=r,sn(t,o)}function mo(t,r,o){if(r=r.updateQueue,r!==null&&(r=r.shared,(o&4194240)!==0)){var a=r.lanes;a&=t.pendingLanes,o|=a,r.lanes=o,ra(t,o)}}function Zh(t,r){var o=t.updateQueue,a=t.alternate;if(a!==null&&(a=a.updateQueue,o===a)){var c=null,h=null;if(o=o.firstBaseUpdate,o!==null){do{var p={eventTime:o.eventTime,lane:o.lane,tag:o.tag,payload:o.payload,callback:o.callback,next:null};h===null?c=h=p:h=h.next=p,o=o.next}while(o!==null);h===null?c=h=r:h=h.next=r}else c=h=r;o={baseState:a.baseState,firstBaseUpdate:c,lastBaseUpdate:h,shared:a.shared,effects:a.effects},t.updateQueue=o;return}t=o.lastBaseUpdate,t===null?o.firstBaseUpdate=r:t.next=r,o.lastBaseUpdate=r}function go(t,r,o,a){var c=t.updateQueue;Rn=!1;var h=c.firstBaseUpdate,p=c.lastBaseUpdate,_=c.shared.pending;if(_!==null){c.shared.pending=null;var v=_,T=v.next;v.next=null,p===null?h=T:p.next=T,p=v;var P=t.alternate;P!==null&&(P=P.updateQueue,_=P.lastBaseUpdate,_!==p&&(_===null?P.firstBaseUpdate=T:_.next=T,P.lastBaseUpdate=v))}if(h!==null){var A=c.baseState;p=0,P=T=v=null,_=h;do{var N=_.lane,b=_.eventTime;if((a&N)===N){P!==null&&(P=P.next={eventTime:b,lane:0,tag:_.tag,payload:_.payload,callback:_.callback,next:null});e:{var z=t,W=_;switch(N=r,b=o,W.tag){case 1:if(z=W.payload,typeof z=="function"){A=z.call(b,A,N);break e}A=z;break e;case 3:z.flags=z.flags&-65537|128;case 0:if(z=W.payload,N=typeof z=="function"?z.call(b,A,N):z,N==null)break e;A=U({},A,N);break e;case 2:Rn=!0}}_.callback!==null&&_.lane!==0&&(t.flags|=64,N=c.effects,N===null?c.effects=[_]:N.push(_))}else b={eventTime:b,lane:N,tag:_.tag,payload:_.payload,callback:_.callback,next:null},P===null?(T=P=b,v=A):P=P.next=b,p|=N;if(_=_.next,_===null){if(_=c.shared.pending,_===null)break;N=_,_=N.next,N.next=null,c.lastBaseUpdate=N,c.shared.pending=null}}while(!0);if(P===null&&(v=A),c.baseState=v,c.firstBaseUpdate=T,c.lastBaseUpdate=P,r=c.shared.interleaved,r!==null){c=r;do p|=c.lane,c=c.next;while(c!==r)}else h===null&&(c.shared.lanes=0);sr|=p,t.lanes=p,t.memoizedState=A}}function ef(t,r,o){if(t=r.effects,r.effects=null,t!==null)for(r=0;r<t.length;r++){var a=t[r],c=a.callback;if(c!==null){if(a.callback=null,a=o,typeof c!="function")throw Error(n(191,c));c.call(a)}}}var Hi={},qt=kn(Hi),$i=kn(Hi),Gi=kn(Hi);function rr(t){if(t===Hi)throw Error(n(174));return t}function Ha(t,r){switch(fe(Gi,r),fe($i,t),fe(qt,Hi),t=r.nodeType,t){case 9:case 11:r=(r=r.documentElement)?r.namespaceURI:$l(null,"");break;default:t=t===8?r.parentNode:r,r=t.namespaceURI||null,t=t.tagName,r=$l(r,t)}_e(qt),fe(qt,r)}function Br(){_e(qt),_e($i),_e(Gi)}function tf(t){rr(Gi.current);var r=rr(qt.current),o=$l(r,t.type);r!==o&&(fe($i,t),fe(qt,o))}function $a(t){$i.current===t&&(_e(qt),_e($i))}var we=kn(0);function _o(t){for(var r=t;r!==null;){if(r.tag===13){var o=r.memoizedState;if(o!==null&&(o=o.dehydrated,o===null||o.data==="$?"||o.data==="$!"))return r}else if(r.tag===19&&r.memoizedProps.revealOrder!==void 0){if((r.flags&128)!==0)return r}else if(r.child!==null){r.child.return=r,r=r.child;continue}if(r===t)break;for(;r.sibling===null;){if(r.return===null||r.return===t)return null;r=r.return}r.sibling.return=r.return,r=r.sibling}return null}var Ga=[];function Ka(){for(var t=0;t<Ga.length;t++)Ga[t]._workInProgressVersionPrimary=null;Ga.length=0}var vo=Re.ReactCurrentDispatcher,qa=Re.ReactCurrentBatchConfig,ir=0,Ee=null,Le=null,be=null,yo=!1,Ki=!1,qi=0,ty=0;function Qe(){throw Error(n(321))}function Qa(t,r){if(r===null)return!1;for(var o=0;o<r.length&&o<t.length;o++)if(!xt(t[o],r[o]))return!1;return!0}function Ya(t,r,o,a,c,h){if(ir=h,Ee=r,r.memoizedState=null,r.updateQueue=null,r.lanes=0,vo.current=t===null||t.memoizedState===null?sy:oy,t=o(a,c),Ki){h=0;do{if(Ki=!1,qi=0,25<=h)throw Error(n(301));h+=1,be=Le=null,r.updateQueue=null,vo.current=ly,t=o(a,c)}while(Ki)}if(vo.current=So,r=Le!==null&&Le.next!==null,ir=0,be=Le=Ee=null,yo=!1,r)throw Error(n(300));return t}function Xa(){var t=qi!==0;return qi=0,t}function Qt(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return be===null?Ee.memoizedState=be=t:be=be.next=t,be}function It(){if(Le===null){var t=Ee.alternate;t=t!==null?t.memoizedState:null}else t=Le.next;var r=be===null?Ee.memoizedState:be.next;if(r!==null)be=r,Le=t;else{if(t===null)throw Error(n(310));Le=t,t={memoizedState:Le.memoizedState,baseState:Le.baseState,baseQueue:Le.baseQueue,queue:Le.queue,next:null},be===null?Ee.memoizedState=be=t:be=be.next=t}return be}function Qi(t,r){return typeof r=="function"?r(t):r}function Ja(t){var r=It(),o=r.queue;if(o===null)throw Error(n(311));o.lastRenderedReducer=t;var a=Le,c=a.baseQueue,h=o.pending;if(h!==null){if(c!==null){var p=c.next;c.next=h.next,h.next=p}a.baseQueue=c=h,o.pending=null}if(c!==null){h=c.next,a=a.baseState;var _=p=null,v=null,T=h;do{var P=T.lane;if((ir&P)===P)v!==null&&(v=v.next={lane:0,action:T.action,hasEagerState:T.hasEagerState,eagerState:T.eagerState,next:null}),a=T.hasEagerState?T.eagerState:t(a,T.action);else{var A={lane:P,action:T.action,hasEagerState:T.hasEagerState,eagerState:T.eagerState,next:null};v===null?(_=v=A,p=a):v=v.next=A,Ee.lanes|=P,sr|=P}T=T.next}while(T!==null&&T!==h);v===null?p=a:v.next=_,xt(a,r.memoizedState)||(lt=!0),r.memoizedState=a,r.baseState=p,r.baseQueue=v,o.lastRenderedState=a}if(t=o.interleaved,t!==null){c=t;do h=c.lane,Ee.lanes|=h,sr|=h,c=c.next;while(c!==t)}else c===null&&(o.lanes=0);return[r.memoizedState,o.dispatch]}function Za(t){var r=It(),o=r.queue;if(o===null)throw Error(n(311));o.lastRenderedReducer=t;var a=o.dispatch,c=o.pending,h=r.memoizedState;if(c!==null){o.pending=null;var p=c=c.next;do h=t(h,p.action),p=p.next;while(p!==c);xt(h,r.memoizedState)||(lt=!0),r.memoizedState=h,r.baseQueue===null&&(r.baseState=h),o.lastRenderedState=h}return[h,a]}function nf(){}function rf(t,r){var o=Ee,a=It(),c=r(),h=!xt(a.memoizedState,c);if(h&&(a.memoizedState=c,lt=!0),a=a.queue,eu(lf.bind(null,o,a,t),[t]),a.getSnapshot!==r||h||be!==null&&be.memoizedState.tag&1){if(o.flags|=2048,Yi(9,of.bind(null,o,a,c,r),void 0,null),Fe===null)throw Error(n(349));(ir&30)!==0||sf(o,r,c)}return c}function sf(t,r,o){t.flags|=16384,t={getSnapshot:r,value:o},r=Ee.updateQueue,r===null?(r={lastEffect:null,stores:null},Ee.updateQueue=r,r.stores=[t]):(o=r.stores,o===null?r.stores=[t]:o.push(t))}function of(t,r,o,a){r.value=o,r.getSnapshot=a,af(r)&&uf(t)}function lf(t,r,o){return o(function(){af(r)&&uf(t)})}function af(t){var r=t.getSnapshot;t=t.value;try{var o=r();return!xt(t,o)}catch{return!0}}function uf(t){var r=sn(t,1);r!==null&&bt(r,t,1,-1)}function cf(t){var r=Qt();return typeof t=="function"&&(t=t()),r.memoizedState=r.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Qi,lastRenderedState:t},r.queue=t,t=t.dispatch=iy.bind(null,Ee,t),[r.memoizedState,t]}function Yi(t,r,o,a){return t={tag:t,create:r,destroy:o,deps:a,next:null},r=Ee.updateQueue,r===null?(r={lastEffect:null,stores:null},Ee.updateQueue=r,r.lastEffect=t.next=t):(o=r.lastEffect,o===null?r.lastEffect=t.next=t:(a=o.next,o.next=t,t.next=a,r.lastEffect=t)),t}function df(){return It().memoizedState}function wo(t,r,o,a){var c=Qt();Ee.flags|=t,c.memoizedState=Yi(1|r,o,void 0,a===void 0?null:a)}function Eo(t,r,o,a){var c=It();a=a===void 0?null:a;var h=void 0;if(Le!==null){var p=Le.memoizedState;if(h=p.destroy,a!==null&&Qa(a,p.deps)){c.memoizedState=Yi(r,o,h,a);return}}Ee.flags|=t,c.memoizedState=Yi(1|r,o,h,a)}function hf(t,r){return wo(8390656,8,t,r)}function eu(t,r){return Eo(2048,8,t,r)}function ff(t,r){return Eo(4,2,t,r)}function pf(t,r){return Eo(4,4,t,r)}function mf(t,r){if(typeof r=="function")return t=t(),r(t),function(){r(null)};if(r!=null)return t=t(),r.current=t,function(){r.current=null}}function gf(t,r,o){return o=o!=null?o.concat([t]):null,Eo(4,4,mf.bind(null,r,t),o)}function tu(){}function _f(t,r){var o=It();r=r===void 0?null:r;var a=o.memoizedState;return a!==null&&r!==null&&Qa(r,a[1])?a[0]:(o.memoizedState=[t,r],t)}function vf(t,r){var o=It();r=r===void 0?null:r;var a=o.memoizedState;return a!==null&&r!==null&&Qa(r,a[1])?a[0]:(t=t(),o.memoizedState=[t,r],t)}function yf(t,r,o){return(ir&21)===0?(t.baseState&&(t.baseState=!1,lt=!0),t.memoizedState=o):(xt(o,r)||(o=qd(),Ee.lanes|=o,sr|=o,t.baseState=!0),r)}function ny(t,r){var o=ue;ue=o!==0&&4>o?o:4,t(!0);var a=qa.transition;qa.transition={};try{t(!1),r()}finally{ue=o,qa.transition=a}}function wf(){return It().memoizedState}function ry(t,r,o){var a=Dn(t);if(o={lane:a,action:o,hasEagerState:!1,eagerState:null,next:null},Ef(t))Sf(r,o);else if(o=Xh(t,r,o,a),o!==null){var c=Ze();bt(o,t,a,c),Cf(o,r,a)}}function iy(t,r,o){var a=Dn(t),c={lane:a,action:o,hasEagerState:!1,eagerState:null,next:null};if(Ef(t))Sf(r,c);else{var h=t.alternate;if(t.lanes===0&&(h===null||h.lanes===0)&&(h=r.lastRenderedReducer,h!==null))try{var p=r.lastRenderedState,_=h(p,o);if(c.hasEagerState=!0,c.eagerState=_,xt(_,p)){var v=r.interleaved;v===null?(c.next=c,Va(r)):(c.next=v.next,v.next=c),r.interleaved=c;return}}catch{}finally{}o=Xh(t,r,c,a),o!==null&&(c=Ze(),bt(o,t,a,c),Cf(o,r,a))}}function Ef(t){var r=t.alternate;return t===Ee||r!==null&&r===Ee}function Sf(t,r){Ki=yo=!0;var o=t.pending;o===null?r.next=r:(r.next=o.next,o.next=r),t.pending=r}function Cf(t,r,o){if((o&4194240)!==0){var a=r.lanes;a&=t.pendingLanes,o|=a,r.lanes=o,ra(t,o)}}var So={readContext:Ct,useCallback:Qe,useContext:Qe,useEffect:Qe,useImperativeHandle:Qe,useInsertionEffect:Qe,useLayoutEffect:Qe,useMemo:Qe,useReducer:Qe,useRef:Qe,useState:Qe,useDebugValue:Qe,useDeferredValue:Qe,useTransition:Qe,useMutableSource:Qe,useSyncExternalStore:Qe,useId:Qe,unstable_isNewReconciler:!1},sy={readContext:Ct,useCallback:function(t,r){return Qt().memoizedState=[t,r===void 0?null:r],t},useContext:Ct,useEffect:hf,useImperativeHandle:function(t,r,o){return o=o!=null?o.concat([t]):null,wo(4194308,4,mf.bind(null,r,t),o)},useLayoutEffect:function(t,r){return wo(4194308,4,t,r)},useInsertionEffect:function(t,r){return wo(4,2,t,r)},useMemo:function(t,r){var o=Qt();return r=r===void 0?null:r,t=t(),o.memoizedState=[t,r],t},useReducer:function(t,r,o){var a=Qt();return r=o!==void 0?o(r):r,a.memoizedState=a.baseState=r,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:r},a.queue=t,t=t.dispatch=ry.bind(null,Ee,t),[a.memoizedState,t]},useRef:function(t){var r=Qt();return t={current:t},r.memoizedState=t},useState:cf,useDebugValue:tu,useDeferredValue:function(t){return Qt().memoizedState=t},useTransition:function(){var t=cf(!1),r=t[0];return t=ny.bind(null,t[1]),Qt().memoizedState=t,[r,t]},useMutableSource:function(){},useSyncExternalStore:function(t,r,o){var a=Ee,c=Qt();if(ye){if(o===void 0)throw Error(n(407));o=o()}else{if(o=r(),Fe===null)throw Error(n(349));(ir&30)!==0||sf(a,r,o)}c.memoizedState=o;var h={value:o,getSnapshot:r};return c.queue=h,hf(lf.bind(null,a,h,t),[t]),a.flags|=2048,Yi(9,of.bind(null,a,h,o,r),void 0,null),o},useId:function(){var t=Qt(),r=Fe.identifierPrefix;if(ye){var o=rn,a=nn;o=(a&~(1<<32-At(a)-1)).toString(32)+o,r=":"+r+"R"+o,o=qi++,0<o&&(r+="H"+o.toString(32)),r+=":"}else o=ty++,r=":"+r+"r"+o.toString(32)+":";return t.memoizedState=r},unstable_isNewReconciler:!1},oy={readContext:Ct,useCallback:_f,useContext:Ct,useEffect:eu,useImperativeHandle:gf,useInsertionEffect:ff,useLayoutEffect:pf,useMemo:vf,useReducer:Ja,useRef:df,useState:function(){return Ja(Qi)},useDebugValue:tu,useDeferredValue:function(t){var r=It();return yf(r,Le.memoizedState,t)},useTransition:function(){var t=Ja(Qi)[0],r=It().memoizedState;return[t,r]},useMutableSource:nf,useSyncExternalStore:rf,useId:wf,unstable_isNewReconciler:!1},ly={readContext:Ct,useCallback:_f,useContext:Ct,useEffect:eu,useImperativeHandle:gf,useInsertionEffect:ff,useLayoutEffect:pf,useMemo:vf,useReducer:Za,useRef:df,useState:function(){return Za(Qi)},useDebugValue:tu,useDeferredValue:function(t){var r=It();return Le===null?r.memoizedState=t:yf(r,Le.memoizedState,t)},useTransition:function(){var t=Za(Qi)[0],r=It().memoizedState;return[t,r]},useMutableSource:nf,useSyncExternalStore:rf,useId:wf,unstable_isNewReconciler:!1};function Dt(t,r){if(t&&t.defaultProps){r=U({},r),t=t.defaultProps;for(var o in t)r[o]===void 0&&(r[o]=t[o]);return r}return r}function nu(t,r,o,a){r=t.memoizedState,o=o(a,r),o=o==null?r:U({},r,o),t.memoizedState=o,t.lanes===0&&(t.updateQueue.baseState=o)}var Co={isMounted:function(t){return(t=t._reactInternals)?Xn(t)===t:!1},enqueueSetState:function(t,r,o){t=t._reactInternals;var a=Ze(),c=Dn(t),h=on(a,c);h.payload=r,o!=null&&(h.callback=o),r=Pn(t,h,c),r!==null&&(bt(r,t,c,a),mo(r,t,c))},enqueueReplaceState:function(t,r,o){t=t._reactInternals;var a=Ze(),c=Dn(t),h=on(a,c);h.tag=1,h.payload=r,o!=null&&(h.callback=o),r=Pn(t,h,c),r!==null&&(bt(r,t,c,a),mo(r,t,c))},enqueueForceUpdate:function(t,r){t=t._reactInternals;var o=Ze(),a=Dn(t),c=on(o,a);c.tag=2,r!=null&&(c.callback=r),r=Pn(t,c,a),r!==null&&(bt(r,t,a,o),mo(r,t,a))}};function If(t,r,o,a,c,h,p){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(a,h,p):r.prototype&&r.prototype.isPureReactComponent?!bi(o,a)||!bi(c,h):!0}function kf(t,r,o){var a=!1,c=Tn,h=r.contextType;return typeof h=="object"&&h!==null?h=Ct(h):(c=ot(r)?Zn:qe.current,a=r.contextTypes,h=(a=a!=null)?br(t,c):Tn),r=new r(o,h),t.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,r.updater=Co,t.stateNode=r,r._reactInternals=t,a&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=c,t.__reactInternalMemoizedMaskedChildContext=h),r}function Tf(t,r,o,a){t=r.state,typeof r.componentWillReceiveProps=="function"&&r.componentWillReceiveProps(o,a),typeof r.UNSAFE_componentWillReceiveProps=="function"&&r.UNSAFE_componentWillReceiveProps(o,a),r.state!==t&&Co.enqueueReplaceState(r,r.state,null)}function ru(t,r,o,a){var c=t.stateNode;c.props=o,c.state=t.memoizedState,c.refs={},Ba(t);var h=r.contextType;typeof h=="object"&&h!==null?c.context=Ct(h):(h=ot(r)?Zn:qe.current,c.context=br(t,h)),c.state=t.memoizedState,h=r.getDerivedStateFromProps,typeof h=="function"&&(nu(t,r,h,o),c.state=t.memoizedState),typeof r.getDerivedStateFromProps=="function"||typeof c.getSnapshotBeforeUpdate=="function"||typeof c.UNSAFE_componentWillMount!="function"&&typeof c.componentWillMount!="function"||(r=c.state,typeof c.componentWillMount=="function"&&c.componentWillMount(),typeof c.UNSAFE_componentWillMount=="function"&&c.UNSAFE_componentWillMount(),r!==c.state&&Co.enqueueReplaceState(c,c.state,null),go(t,o,c,a),c.state=t.memoizedState),typeof c.componentDidMount=="function"&&(t.flags|=4194308)}function Hr(t,r){try{var o="",a=r;do o+=re(a),a=a.return;while(a);var c=o}catch(h){c=`
Error generating stack: `+h.message+`
`+h.stack}return{value:t,source:r,stack:c,digest:null}}function iu(t,r,o){return{value:t,source:null,stack:o??null,digest:r??null}}function su(t,r){try{console.error(r.value)}catch(o){setTimeout(function(){throw o})}}var ay=typeof WeakMap=="function"?WeakMap:Map;function Nf(t,r,o){o=on(-1,o),o.tag=3,o.payload={element:null};var a=r.value;return o.callback=function(){Ao||(Ao=!0,wu=a),su(t,r)},o}function Rf(t,r,o){o=on(-1,o),o.tag=3;var a=t.type.getDerivedStateFromError;if(typeof a=="function"){var c=r.value;o.payload=function(){return a(c)},o.callback=function(){su(t,r)}}var h=t.stateNode;return h!==null&&typeof h.componentDidCatch=="function"&&(o.callback=function(){su(t,r),typeof a!="function"&&(xn===null?xn=new Set([this]):xn.add(this));var p=r.stack;this.componentDidCatch(r.value,{componentStack:p!==null?p:""})}),o}function Pf(t,r,o){var a=t.pingCache;if(a===null){a=t.pingCache=new ay;var c=new Set;a.set(r,c)}else c=a.get(r),c===void 0&&(c=new Set,a.set(r,c));c.has(o)||(c.add(o),t=Sy.bind(null,t,r,o),r.then(t,t))}function Af(t){do{var r;if((r=t.tag===13)&&(r=t.memoizedState,r=r!==null?r.dehydrated!==null:!0),r)return t;t=t.return}while(t!==null);return null}function xf(t,r,o,a,c){return(t.mode&1)===0?(t===r?t.flags|=65536:(t.flags|=128,o.flags|=131072,o.flags&=-52805,o.tag===1&&(o.alternate===null?o.tag=17:(r=on(-1,1),r.tag=2,Pn(o,r,1))),o.lanes|=1),t):(t.flags|=65536,t.lanes=c,t)}var uy=Re.ReactCurrentOwner,lt=!1;function Je(t,r,o,a){r.child=t===null?Yh(r,null,o,a):Wr(r,t.child,o,a)}function Of(t,r,o,a,c){o=o.render;var h=r.ref;return Vr(r,c),a=Ya(t,r,o,a,h,c),o=Xa(),t!==null&&!lt?(r.updateQueue=t.updateQueue,r.flags&=-2053,t.lanes&=~c,ln(t,r,c)):(ye&&o&&Da(r),r.flags|=1,Je(t,r,a,c),r.child)}function Df(t,r,o,a,c){if(t===null){var h=o.type;return typeof h=="function"&&!Nu(h)&&h.defaultProps===void 0&&o.compare===null&&o.defaultProps===void 0?(r.tag=15,r.type=h,Lf(t,r,h,a,c)):(t=bo(o.type,null,a,r,r.mode,c),t.ref=r.ref,t.return=r,r.child=t)}if(h=t.child,(t.lanes&c)===0){var p=h.memoizedProps;if(o=o.compare,o=o!==null?o:bi,o(p,a)&&t.ref===r.ref)return ln(t,r,c)}return r.flags|=1,t=Mn(h,a),t.ref=r.ref,t.return=r,r.child=t}function Lf(t,r,o,a,c){if(t!==null){var h=t.memoizedProps;if(bi(h,a)&&t.ref===r.ref)if(lt=!1,r.pendingProps=a=h,(t.lanes&c)!==0)(t.flags&131072)!==0&&(lt=!0);else return r.lanes=t.lanes,ln(t,r,c)}return ou(t,r,o,a,c)}function Mf(t,r,o){var a=r.pendingProps,c=a.children,h=t!==null?t.memoizedState:null;if(a.mode==="hidden")if((r.mode&1)===0)r.memoizedState={baseLanes:0,cachePool:null,transitions:null},fe(Gr,vt),vt|=o;else{if((o&1073741824)===0)return t=h!==null?h.baseLanes|o:o,r.lanes=r.childLanes=1073741824,r.memoizedState={baseLanes:t,cachePool:null,transitions:null},r.updateQueue=null,fe(Gr,vt),vt|=t,null;r.memoizedState={baseLanes:0,cachePool:null,transitions:null},a=h!==null?h.baseLanes:o,fe(Gr,vt),vt|=a}else h!==null?(a=h.baseLanes|o,r.memoizedState=null):a=o,fe(Gr,vt),vt|=a;return Je(t,r,c,o),r.child}function bf(t,r){var o=r.ref;(t===null&&o!==null||t!==null&&t.ref!==o)&&(r.flags|=512,r.flags|=2097152)}function ou(t,r,o,a,c){var h=ot(o)?Zn:qe.current;return h=br(r,h),Vr(r,c),o=Ya(t,r,o,a,h,c),a=Xa(),t!==null&&!lt?(r.updateQueue=t.updateQueue,r.flags&=-2053,t.lanes&=~c,ln(t,r,c)):(ye&&a&&Da(r),r.flags|=1,Je(t,r,o,c),r.child)}function Ff(t,r,o,a,c){if(ot(o)){var h=!0;oo(r)}else h=!1;if(Vr(r,c),r.stateNode===null)ko(t,r),kf(r,o,a),ru(r,o,a,c),a=!0;else if(t===null){var p=r.stateNode,_=r.memoizedProps;p.props=_;var v=p.context,T=o.contextType;typeof T=="object"&&T!==null?T=Ct(T):(T=ot(o)?Zn:qe.current,T=br(r,T));var P=o.getDerivedStateFromProps,A=typeof P=="function"||typeof p.getSnapshotBeforeUpdate=="function";A||typeof p.UNSAFE_componentWillReceiveProps!="function"&&typeof p.componentWillReceiveProps!="function"||(_!==a||v!==T)&&Tf(r,p,a,T),Rn=!1;var N=r.memoizedState;p.state=N,go(r,a,p,c),v=r.memoizedState,_!==a||N!==v||st.current||Rn?(typeof P=="function"&&(nu(r,o,P,a),v=r.memoizedState),(_=Rn||If(r,o,_,a,N,v,T))?(A||typeof p.UNSAFE_componentWillMount!="function"&&typeof p.componentWillMount!="function"||(typeof p.componentWillMount=="function"&&p.componentWillMount(),typeof p.UNSAFE_componentWillMount=="function"&&p.UNSAFE_componentWillMount()),typeof p.componentDidMount=="function"&&(r.flags|=4194308)):(typeof p.componentDidMount=="function"&&(r.flags|=4194308),r.memoizedProps=a,r.memoizedState=v),p.props=a,p.state=v,p.context=T,a=_):(typeof p.componentDidMount=="function"&&(r.flags|=4194308),a=!1)}else{p=r.stateNode,Jh(t,r),_=r.memoizedProps,T=r.type===r.elementType?_:Dt(r.type,_),p.props=T,A=r.pendingProps,N=p.context,v=o.contextType,typeof v=="object"&&v!==null?v=Ct(v):(v=ot(o)?Zn:qe.current,v=br(r,v));var b=o.getDerivedStateFromProps;(P=typeof b=="function"||typeof p.getSnapshotBeforeUpdate=="function")||typeof p.UNSAFE_componentWillReceiveProps!="function"&&typeof p.componentWillReceiveProps!="function"||(_!==A||N!==v)&&Tf(r,p,a,v),Rn=!1,N=r.memoizedState,p.state=N,go(r,a,p,c);var z=r.memoizedState;_!==A||N!==z||st.current||Rn?(typeof b=="function"&&(nu(r,o,b,a),z=r.memoizedState),(T=Rn||If(r,o,T,a,N,z,v)||!1)?(P||typeof p.UNSAFE_componentWillUpdate!="function"&&typeof p.componentWillUpdate!="function"||(typeof p.componentWillUpdate=="function"&&p.componentWillUpdate(a,z,v),typeof p.UNSAFE_componentWillUpdate=="function"&&p.UNSAFE_componentWillUpdate(a,z,v)),typeof p.componentDidUpdate=="function"&&(r.flags|=4),typeof p.getSnapshotBeforeUpdate=="function"&&(r.flags|=1024)):(typeof p.componentDidUpdate!="function"||_===t.memoizedProps&&N===t.memoizedState||(r.flags|=4),typeof p.getSnapshotBeforeUpdate!="function"||_===t.memoizedProps&&N===t.memoizedState||(r.flags|=1024),r.memoizedProps=a,r.memoizedState=z),p.props=a,p.state=z,p.context=v,a=T):(typeof p.componentDidUpdate!="function"||_===t.memoizedProps&&N===t.memoizedState||(r.flags|=4),typeof p.getSnapshotBeforeUpdate!="function"||_===t.memoizedProps&&N===t.memoizedState||(r.flags|=1024),a=!1)}return lu(t,r,o,a,h,c)}function lu(t,r,o,a,c,h){bf(t,r);var p=(r.flags&128)!==0;if(!a&&!p)return c&&jh(r,o,!1),ln(t,r,h);a=r.stateNode,uy.current=r;var _=p&&typeof o.getDerivedStateFromError!="function"?null:a.render();return r.flags|=1,t!==null&&p?(r.child=Wr(r,t.child,null,h),r.child=Wr(r,null,_,h)):Je(t,r,_,h),r.memoizedState=a.state,c&&jh(r,o,!0),r.child}function Uf(t){var r=t.stateNode;r.pendingContext?zh(t,r.pendingContext,r.pendingContext!==r.context):r.context&&zh(t,r.context,!1),Ha(t,r.containerInfo)}function zf(t,r,o,a,c){return zr(),Fa(c),r.flags|=256,Je(t,r,o,a),r.child}var au={dehydrated:null,treeContext:null,retryLane:0};function uu(t){return{baseLanes:t,cachePool:null,transitions:null}}function Wf(t,r,o){var a=r.pendingProps,c=we.current,h=!1,p=(r.flags&128)!==0,_;if((_=p)||(_=t!==null&&t.memoizedState===null?!1:(c&2)!==0),_?(h=!0,r.flags&=-129):(t===null||t.memoizedState!==null)&&(c|=1),fe(we,c&1),t===null)return ba(r),t=r.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?((r.mode&1)===0?r.lanes=1:t.data==="$!"?r.lanes=8:r.lanes=1073741824,null):(p=a.children,t=a.fallback,h?(a=r.mode,h=r.child,p={mode:"hidden",children:p},(a&1)===0&&h!==null?(h.childLanes=0,h.pendingProps=p):h=Fo(p,a,0,null),t=ur(t,a,o,null),h.return=r,t.return=r,h.sibling=t,r.child=h,r.child.memoizedState=uu(o),r.memoizedState=au,t):cu(r,p));if(c=t.memoizedState,c!==null&&(_=c.dehydrated,_!==null))return cy(t,r,p,a,_,c,o);if(h){h=a.fallback,p=r.mode,c=t.child,_=c.sibling;var v={mode:"hidden",children:a.children};return(p&1)===0&&r.child!==c?(a=r.child,a.childLanes=0,a.pendingProps=v,r.deletions=null):(a=Mn(c,v),a.subtreeFlags=c.subtreeFlags&14680064),_!==null?h=Mn(_,h):(h=ur(h,p,o,null),h.flags|=2),h.return=r,a.return=r,a.sibling=h,r.child=a,a=h,h=r.child,p=t.child.memoizedState,p=p===null?uu(o):{baseLanes:p.baseLanes|o,cachePool:null,transitions:p.transitions},h.memoizedState=p,h.childLanes=t.childLanes&~o,r.memoizedState=au,a}return h=t.child,t=h.sibling,a=Mn(h,{mode:"visible",children:a.children}),(r.mode&1)===0&&(a.lanes=o),a.return=r,a.sibling=null,t!==null&&(o=r.deletions,o===null?(r.deletions=[t],r.flags|=16):o.push(t)),r.child=a,r.memoizedState=null,a}function cu(t,r){return r=Fo({mode:"visible",children:r},t.mode,0,null),r.return=t,t.child=r}function Io(t,r,o,a){return a!==null&&Fa(a),Wr(r,t.child,null,o),t=cu(r,r.pendingProps.children),t.flags|=2,r.memoizedState=null,t}function cy(t,r,o,a,c,h,p){if(o)return r.flags&256?(r.flags&=-257,a=iu(Error(n(422))),Io(t,r,p,a)):r.memoizedState!==null?(r.child=t.child,r.flags|=128,null):(h=a.fallback,c=r.mode,a=Fo({mode:"visible",children:a.children},c,0,null),h=ur(h,c,p,null),h.flags|=2,a.return=r,h.return=r,a.sibling=h,r.child=a,(r.mode&1)!==0&&Wr(r,t.child,null,p),r.child.memoizedState=uu(p),r.memoizedState=au,h);if((r.mode&1)===0)return Io(t,r,p,null);if(c.data==="$!"){if(a=c.nextSibling&&c.nextSibling.dataset,a)var _=a.dgst;return a=_,h=Error(n(419)),a=iu(h,a,void 0),Io(t,r,p,a)}if(_=(p&t.childLanes)!==0,lt||_){if(a=Fe,a!==null){switch(p&-p){case 4:c=2;break;case 16:c=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:c=32;break;case 536870912:c=268435456;break;default:c=0}c=(c&(a.suspendedLanes|p))!==0?0:c,c!==0&&c!==h.retryLane&&(h.retryLane=c,sn(t,c),bt(a,t,c,-1))}return Tu(),a=iu(Error(n(421))),Io(t,r,p,a)}return c.data==="$?"?(r.flags|=128,r.child=t.child,r=Cy.bind(null,t),c._reactRetry=r,null):(t=h.treeContext,_t=In(c.nextSibling),gt=r,ye=!0,Ot=null,t!==null&&(Et[St++]=nn,Et[St++]=rn,Et[St++]=er,nn=t.id,rn=t.overflow,er=r),r=cu(r,a.children),r.flags|=4096,r)}function jf(t,r,o){t.lanes|=r;var a=t.alternate;a!==null&&(a.lanes|=r),ja(t.return,r,o)}function du(t,r,o,a,c){var h=t.memoizedState;h===null?t.memoizedState={isBackwards:r,rendering:null,renderingStartTime:0,last:a,tail:o,tailMode:c}:(h.isBackwards=r,h.rendering=null,h.renderingStartTime=0,h.last=a,h.tail=o,h.tailMode=c)}function Vf(t,r,o){var a=r.pendingProps,c=a.revealOrder,h=a.tail;if(Je(t,r,a.children,o),a=we.current,(a&2)!==0)a=a&1|2,r.flags|=128;else{if(t!==null&&(t.flags&128)!==0)e:for(t=r.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&jf(t,o,r);else if(t.tag===19)jf(t,o,r);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===r)break e;for(;t.sibling===null;){if(t.return===null||t.return===r)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}a&=1}if(fe(we,a),(r.mode&1)===0)r.memoizedState=null;else switch(c){case"forwards":for(o=r.child,c=null;o!==null;)t=o.alternate,t!==null&&_o(t)===null&&(c=o),o=o.sibling;o=c,o===null?(c=r.child,r.child=null):(c=o.sibling,o.sibling=null),du(r,!1,c,o,h);break;case"backwards":for(o=null,c=r.child,r.child=null;c!==null;){if(t=c.alternate,t!==null&&_o(t)===null){r.child=c;break}t=c.sibling,c.sibling=o,o=c,c=t}du(r,!0,o,null,h);break;case"together":du(r,!1,null,null,void 0);break;default:r.memoizedState=null}return r.child}function ko(t,r){(r.mode&1)===0&&t!==null&&(t.alternate=null,r.alternate=null,r.flags|=2)}function ln(t,r,o){if(t!==null&&(r.dependencies=t.dependencies),sr|=r.lanes,(o&r.childLanes)===0)return null;if(t!==null&&r.child!==t.child)throw Error(n(153));if(r.child!==null){for(t=r.child,o=Mn(t,t.pendingProps),r.child=o,o.return=r;t.sibling!==null;)t=t.sibling,o=o.sibling=Mn(t,t.pendingProps),o.return=r;o.sibling=null}return r.child}function dy(t,r,o){switch(r.tag){case 3:Uf(r),zr();break;case 5:tf(r);break;case 1:ot(r.type)&&oo(r);break;case 4:Ha(r,r.stateNode.containerInfo);break;case 10:var a=r.type._context,c=r.memoizedProps.value;fe(fo,a._currentValue),a._currentValue=c;break;case 13:if(a=r.memoizedState,a!==null)return a.dehydrated!==null?(fe(we,we.current&1),r.flags|=128,null):(o&r.child.childLanes)!==0?Wf(t,r,o):(fe(we,we.current&1),t=ln(t,r,o),t!==null?t.sibling:null);fe(we,we.current&1);break;case 19:if(a=(o&r.childLanes)!==0,(t.flags&128)!==0){if(a)return Vf(t,r,o);r.flags|=128}if(c=r.memoizedState,c!==null&&(c.rendering=null,c.tail=null,c.lastEffect=null),fe(we,we.current),a)break;return null;case 22:case 23:return r.lanes=0,Mf(t,r,o)}return ln(t,r,o)}var Bf,hu,Hf,$f;Bf=function(t,r){for(var o=r.child;o!==null;){if(o.tag===5||o.tag===6)t.appendChild(o.stateNode);else if(o.tag!==4&&o.child!==null){o.child.return=o,o=o.child;continue}if(o===r)break;for(;o.sibling===null;){if(o.return===null||o.return===r)return;o=o.return}o.sibling.return=o.return,o=o.sibling}},hu=function(){},Hf=function(t,r,o,a){var c=t.memoizedProps;if(c!==a){t=r.stateNode,rr(qt.current);var h=null;switch(o){case"input":c=jl(t,c),a=jl(t,a),h=[];break;case"select":c=U({},c,{value:void 0}),a=U({},a,{value:void 0}),h=[];break;case"textarea":c=Hl(t,c),a=Hl(t,a),h=[];break;default:typeof c.onClick!="function"&&typeof a.onClick=="function"&&(t.onclick=ro)}Gl(o,a);var p;o=null;for(T in c)if(!a.hasOwnProperty(T)&&c.hasOwnProperty(T)&&c[T]!=null)if(T==="style"){var _=c[T];for(p in _)_.hasOwnProperty(p)&&(o||(o={}),o[p]="")}else T!=="dangerouslySetInnerHTML"&&T!=="children"&&T!=="suppressContentEditableWarning"&&T!=="suppressHydrationWarning"&&T!=="autoFocus"&&(l.hasOwnProperty(T)?h||(h=[]):(h=h||[]).push(T,null));for(T in a){var v=a[T];if(_=c!=null?c[T]:void 0,a.hasOwnProperty(T)&&v!==_&&(v!=null||_!=null))if(T==="style")if(_){for(p in _)!_.hasOwnProperty(p)||v&&v.hasOwnProperty(p)||(o||(o={}),o[p]="");for(p in v)v.hasOwnProperty(p)&&_[p]!==v[p]&&(o||(o={}),o[p]=v[p])}else o||(h||(h=[]),h.push(T,o)),o=v;else T==="dangerouslySetInnerHTML"?(v=v?v.__html:void 0,_=_?_.__html:void 0,v!=null&&_!==v&&(h=h||[]).push(T,v)):T==="children"?typeof v!="string"&&typeof v!="number"||(h=h||[]).push(T,""+v):T!=="suppressContentEditableWarning"&&T!=="suppressHydrationWarning"&&(l.hasOwnProperty(T)?(v!=null&&T==="onScroll"&&ge("scroll",t),h||_===v||(h=[])):(h=h||[]).push(T,v))}o&&(h=h||[]).push("style",o);var T=h;(r.updateQueue=T)&&(r.flags|=4)}},$f=function(t,r,o,a){o!==a&&(r.flags|=4)};function Xi(t,r){if(!ye)switch(t.tailMode){case"hidden":r=t.tail;for(var o=null;r!==null;)r.alternate!==null&&(o=r),r=r.sibling;o===null?t.tail=null:o.sibling=null;break;case"collapsed":o=t.tail;for(var a=null;o!==null;)o.alternate!==null&&(a=o),o=o.sibling;a===null?r||t.tail===null?t.tail=null:t.tail.sibling=null:a.sibling=null}}function Ye(t){var r=t.alternate!==null&&t.alternate.child===t.child,o=0,a=0;if(r)for(var c=t.child;c!==null;)o|=c.lanes|c.childLanes,a|=c.subtreeFlags&14680064,a|=c.flags&14680064,c.return=t,c=c.sibling;else for(c=t.child;c!==null;)o|=c.lanes|c.childLanes,a|=c.subtreeFlags,a|=c.flags,c.return=t,c=c.sibling;return t.subtreeFlags|=a,t.childLanes=o,r}function hy(t,r,o){var a=r.pendingProps;switch(La(r),r.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ye(r),null;case 1:return ot(r.type)&&so(),Ye(r),null;case 3:return a=r.stateNode,Br(),_e(st),_e(qe),Ka(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(t===null||t.child===null)&&(co(r)?r.flags|=4:t===null||t.memoizedState.isDehydrated&&(r.flags&256)===0||(r.flags|=1024,Ot!==null&&(Cu(Ot),Ot=null))),hu(t,r),Ye(r),null;case 5:$a(r);var c=rr(Gi.current);if(o=r.type,t!==null&&r.stateNode!=null)Hf(t,r,o,a,c),t.ref!==r.ref&&(r.flags|=512,r.flags|=2097152);else{if(!a){if(r.stateNode===null)throw Error(n(166));return Ye(r),null}if(t=rr(qt.current),co(r)){a=r.stateNode,o=r.type;var h=r.memoizedProps;switch(a[Kt]=r,a[ji]=h,t=(r.mode&1)!==0,o){case"dialog":ge("cancel",a),ge("close",a);break;case"iframe":case"object":case"embed":ge("load",a);break;case"video":case"audio":for(c=0;c<Ui.length;c++)ge(Ui[c],a);break;case"source":ge("error",a);break;case"img":case"image":case"link":ge("error",a),ge("load",a);break;case"details":ge("toggle",a);break;case"input":Id(a,h),ge("invalid",a);break;case"select":a._wrapperState={wasMultiple:!!h.multiple},ge("invalid",a);break;case"textarea":Nd(a,h),ge("invalid",a)}Gl(o,h),c=null;for(var p in h)if(h.hasOwnProperty(p)){var _=h[p];p==="children"?typeof _=="string"?a.textContent!==_&&(h.suppressHydrationWarning!==!0&&no(a.textContent,_,t),c=["children",_]):typeof _=="number"&&a.textContent!==""+_&&(h.suppressHydrationWarning!==!0&&no(a.textContent,_,t),c=["children",""+_]):l.hasOwnProperty(p)&&_!=null&&p==="onScroll"&&ge("scroll",a)}switch(o){case"input":Ds(a),Td(a,h,!0);break;case"textarea":Ds(a),Pd(a);break;case"select":case"option":break;default:typeof h.onClick=="function"&&(a.onclick=ro)}a=c,r.updateQueue=a,a!==null&&(r.flags|=4)}else{p=c.nodeType===9?c:c.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=Ad(o)),t==="http://www.w3.org/1999/xhtml"?o==="script"?(t=p.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof a.is=="string"?t=p.createElement(o,{is:a.is}):(t=p.createElement(o),o==="select"&&(p=t,a.multiple?p.multiple=!0:a.size&&(p.size=a.size))):t=p.createElementNS(t,o),t[Kt]=r,t[ji]=a,Bf(t,r,!1,!1),r.stateNode=t;e:{switch(p=Kl(o,a),o){case"dialog":ge("cancel",t),ge("close",t),c=a;break;case"iframe":case"object":case"embed":ge("load",t),c=a;break;case"video":case"audio":for(c=0;c<Ui.length;c++)ge(Ui[c],t);c=a;break;case"source":ge("error",t),c=a;break;case"img":case"image":case"link":ge("error",t),ge("load",t),c=a;break;case"details":ge("toggle",t),c=a;break;case"input":Id(t,a),c=jl(t,a),ge("invalid",t);break;case"option":c=a;break;case"select":t._wrapperState={wasMultiple:!!a.multiple},c=U({},a,{value:void 0}),ge("invalid",t);break;case"textarea":Nd(t,a),c=Hl(t,a),ge("invalid",t);break;default:c=a}Gl(o,c),_=c;for(h in _)if(_.hasOwnProperty(h)){var v=_[h];h==="style"?Dd(t,v):h==="dangerouslySetInnerHTML"?(v=v?v.__html:void 0,v!=null&&xd(t,v)):h==="children"?typeof v=="string"?(o!=="textarea"||v!=="")&&yi(t,v):typeof v=="number"&&yi(t,""+v):h!=="suppressContentEditableWarning"&&h!=="suppressHydrationWarning"&&h!=="autoFocus"&&(l.hasOwnProperty(h)?v!=null&&h==="onScroll"&&ge("scroll",t):v!=null&&Ne(t,h,v,p))}switch(o){case"input":Ds(t),Td(t,a,!1);break;case"textarea":Ds(t),Pd(t);break;case"option":a.value!=null&&t.setAttribute("value",""+ae(a.value));break;case"select":t.multiple=!!a.multiple,h=a.value,h!=null?Ir(t,!!a.multiple,h,!1):a.defaultValue!=null&&Ir(t,!!a.multiple,a.defaultValue,!0);break;default:typeof c.onClick=="function"&&(t.onclick=ro)}switch(o){case"button":case"input":case"select":case"textarea":a=!!a.autoFocus;break e;case"img":a=!0;break e;default:a=!1}}a&&(r.flags|=4)}r.ref!==null&&(r.flags|=512,r.flags|=2097152)}return Ye(r),null;case 6:if(t&&r.stateNode!=null)$f(t,r,t.memoizedProps,a);else{if(typeof a!="string"&&r.stateNode===null)throw Error(n(166));if(o=rr(Gi.current),rr(qt.current),co(r)){if(a=r.stateNode,o=r.memoizedProps,a[Kt]=r,(h=a.nodeValue!==o)&&(t=gt,t!==null))switch(t.tag){case 3:no(a.nodeValue,o,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&no(a.nodeValue,o,(t.mode&1)!==0)}h&&(r.flags|=4)}else a=(o.nodeType===9?o:o.ownerDocument).createTextNode(a),a[Kt]=r,r.stateNode=a}return Ye(r),null;case 13:if(_e(we),a=r.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(ye&&_t!==null&&(r.mode&1)!==0&&(r.flags&128)===0)Kh(),zr(),r.flags|=98560,h=!1;else if(h=co(r),a!==null&&a.dehydrated!==null){if(t===null){if(!h)throw Error(n(318));if(h=r.memoizedState,h=h!==null?h.dehydrated:null,!h)throw Error(n(317));h[Kt]=r}else zr(),(r.flags&128)===0&&(r.memoizedState=null),r.flags|=4;Ye(r),h=!1}else Ot!==null&&(Cu(Ot),Ot=null),h=!0;if(!h)return r.flags&65536?r:null}return(r.flags&128)!==0?(r.lanes=o,r):(a=a!==null,a!==(t!==null&&t.memoizedState!==null)&&a&&(r.child.flags|=8192,(r.mode&1)!==0&&(t===null||(we.current&1)!==0?Me===0&&(Me=3):Tu())),r.updateQueue!==null&&(r.flags|=4),Ye(r),null);case 4:return Br(),hu(t,r),t===null&&zi(r.stateNode.containerInfo),Ye(r),null;case 10:return Wa(r.type._context),Ye(r),null;case 17:return ot(r.type)&&so(),Ye(r),null;case 19:if(_e(we),h=r.memoizedState,h===null)return Ye(r),null;if(a=(r.flags&128)!==0,p=h.rendering,p===null)if(a)Xi(h,!1);else{if(Me!==0||t!==null&&(t.flags&128)!==0)for(t=r.child;t!==null;){if(p=_o(t),p!==null){for(r.flags|=128,Xi(h,!1),a=p.updateQueue,a!==null&&(r.updateQueue=a,r.flags|=4),r.subtreeFlags=0,a=o,o=r.child;o!==null;)h=o,t=a,h.flags&=14680066,p=h.alternate,p===null?(h.childLanes=0,h.lanes=t,h.child=null,h.subtreeFlags=0,h.memoizedProps=null,h.memoizedState=null,h.updateQueue=null,h.dependencies=null,h.stateNode=null):(h.childLanes=p.childLanes,h.lanes=p.lanes,h.child=p.child,h.subtreeFlags=0,h.deletions=null,h.memoizedProps=p.memoizedProps,h.memoizedState=p.memoizedState,h.updateQueue=p.updateQueue,h.type=p.type,t=p.dependencies,h.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),o=o.sibling;return fe(we,we.current&1|2),r.child}t=t.sibling}h.tail!==null&&Pe()>Kr&&(r.flags|=128,a=!0,Xi(h,!1),r.lanes=4194304)}else{if(!a)if(t=_o(p),t!==null){if(r.flags|=128,a=!0,o=t.updateQueue,o!==null&&(r.updateQueue=o,r.flags|=4),Xi(h,!0),h.tail===null&&h.tailMode==="hidden"&&!p.alternate&&!ye)return Ye(r),null}else 2*Pe()-h.renderingStartTime>Kr&&o!==1073741824&&(r.flags|=128,a=!0,Xi(h,!1),r.lanes=4194304);h.isBackwards?(p.sibling=r.child,r.child=p):(o=h.last,o!==null?o.sibling=p:r.child=p,h.last=p)}return h.tail!==null?(r=h.tail,h.rendering=r,h.tail=r.sibling,h.renderingStartTime=Pe(),r.sibling=null,o=we.current,fe(we,a?o&1|2:o&1),r):(Ye(r),null);case 22:case 23:return ku(),a=r.memoizedState!==null,t!==null&&t.memoizedState!==null!==a&&(r.flags|=8192),a&&(r.mode&1)!==0?(vt&1073741824)!==0&&(Ye(r),r.subtreeFlags&6&&(r.flags|=8192)):Ye(r),null;case 24:return null;case 25:return null}throw Error(n(156,r.tag))}function fy(t,r){switch(La(r),r.tag){case 1:return ot(r.type)&&so(),t=r.flags,t&65536?(r.flags=t&-65537|128,r):null;case 3:return Br(),_e(st),_e(qe),Ka(),t=r.flags,(t&65536)!==0&&(t&128)===0?(r.flags=t&-65537|128,r):null;case 5:return $a(r),null;case 13:if(_e(we),t=r.memoizedState,t!==null&&t.dehydrated!==null){if(r.alternate===null)throw Error(n(340));zr()}return t=r.flags,t&65536?(r.flags=t&-65537|128,r):null;case 19:return _e(we),null;case 4:return Br(),null;case 10:return Wa(r.type._context),null;case 22:case 23:return ku(),null;case 24:return null;default:return null}}var To=!1,Xe=!1,py=typeof WeakSet=="function"?WeakSet:Set,F=null;function $r(t,r){var o=t.ref;if(o!==null)if(typeof o=="function")try{o(null)}catch(a){Ce(t,r,a)}else o.current=null}function fu(t,r,o){try{o()}catch(a){Ce(t,r,a)}}var Gf=!1;function my(t,r){if(ka=$s,t=Ch(),_a(t)){if("selectionStart"in t)var o={start:t.selectionStart,end:t.selectionEnd};else e:{o=(o=t.ownerDocument)&&o.defaultView||window;var a=o.getSelection&&o.getSelection();if(a&&a.rangeCount!==0){o=a.anchorNode;var c=a.anchorOffset,h=a.focusNode;a=a.focusOffset;try{o.nodeType,h.nodeType}catch{o=null;break e}var p=0,_=-1,v=-1,T=0,P=0,A=t,N=null;t:for(;;){for(var b;A!==o||c!==0&&A.nodeType!==3||(_=p+c),A!==h||a!==0&&A.nodeType!==3||(v=p+a),A.nodeType===3&&(p+=A.nodeValue.length),(b=A.firstChild)!==null;)N=A,A=b;for(;;){if(A===t)break t;if(N===o&&++T===c&&(_=p),N===h&&++P===a&&(v=p),(b=A.nextSibling)!==null)break;A=N,N=A.parentNode}A=b}o=_===-1||v===-1?null:{start:_,end:v}}else o=null}o=o||{start:0,end:0}}else o=null;for(Ta={focusedElem:t,selectionRange:o},$s=!1,F=r;F!==null;)if(r=F,t=r.child,(r.subtreeFlags&1028)!==0&&t!==null)t.return=r,F=t;else for(;F!==null;){r=F;try{var z=r.alternate;if((r.flags&1024)!==0)switch(r.tag){case 0:case 11:case 15:break;case 1:if(z!==null){var W=z.memoizedProps,Ae=z.memoizedState,I=r.stateNode,w=I.getSnapshotBeforeUpdate(r.elementType===r.type?W:Dt(r.type,W),Ae);I.__reactInternalSnapshotBeforeUpdate=w}break;case 3:var k=r.stateNode.containerInfo;k.nodeType===1?k.textContent="":k.nodeType===9&&k.documentElement&&k.removeChild(k.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(n(163))}}catch(O){Ce(r,r.return,O)}if(t=r.sibling,t!==null){t.return=r.return,F=t;break}F=r.return}return z=Gf,Gf=!1,z}function Ji(t,r,o){var a=r.updateQueue;if(a=a!==null?a.lastEffect:null,a!==null){var c=a=a.next;do{if((c.tag&t)===t){var h=c.destroy;c.destroy=void 0,h!==void 0&&fu(r,o,h)}c=c.next}while(c!==a)}}function No(t,r){if(r=r.updateQueue,r=r!==null?r.lastEffect:null,r!==null){var o=r=r.next;do{if((o.tag&t)===t){var a=o.create;o.destroy=a()}o=o.next}while(o!==r)}}function pu(t){var r=t.ref;if(r!==null){var o=t.stateNode;switch(t.tag){case 5:t=o;break;default:t=o}typeof r=="function"?r(t):r.current=t}}function Kf(t){var r=t.alternate;r!==null&&(t.alternate=null,Kf(r)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(r=t.stateNode,r!==null&&(delete r[Kt],delete r[ji],delete r[Aa],delete r[Xv],delete r[Jv])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function qf(t){return t.tag===5||t.tag===3||t.tag===4}function Qf(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||qf(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function mu(t,r,o){var a=t.tag;if(a===5||a===6)t=t.stateNode,r?o.nodeType===8?o.parentNode.insertBefore(t,r):o.insertBefore(t,r):(o.nodeType===8?(r=o.parentNode,r.insertBefore(t,o)):(r=o,r.appendChild(t)),o=o._reactRootContainer,o!=null||r.onclick!==null||(r.onclick=ro));else if(a!==4&&(t=t.child,t!==null))for(mu(t,r,o),t=t.sibling;t!==null;)mu(t,r,o),t=t.sibling}function gu(t,r,o){var a=t.tag;if(a===5||a===6)t=t.stateNode,r?o.insertBefore(t,r):o.appendChild(t);else if(a!==4&&(t=t.child,t!==null))for(gu(t,r,o),t=t.sibling;t!==null;)gu(t,r,o),t=t.sibling}var He=null,Lt=!1;function An(t,r,o){for(o=o.child;o!==null;)Yf(t,r,o),o=o.sibling}function Yf(t,r,o){if(Gt&&typeof Gt.onCommitFiberUnmount=="function")try{Gt.onCommitFiberUnmount(zs,o)}catch{}switch(o.tag){case 5:Xe||$r(o,r);case 6:var a=He,c=Lt;He=null,An(t,r,o),He=a,Lt=c,He!==null&&(Lt?(t=He,o=o.stateNode,t.nodeType===8?t.parentNode.removeChild(o):t.removeChild(o)):He.removeChild(o.stateNode));break;case 18:He!==null&&(Lt?(t=He,o=o.stateNode,t.nodeType===8?Pa(t.parentNode,o):t.nodeType===1&&Pa(t,o),Ai(t)):Pa(He,o.stateNode));break;case 4:a=He,c=Lt,He=o.stateNode.containerInfo,Lt=!0,An(t,r,o),He=a,Lt=c;break;case 0:case 11:case 14:case 15:if(!Xe&&(a=o.updateQueue,a!==null&&(a=a.lastEffect,a!==null))){c=a=a.next;do{var h=c,p=h.destroy;h=h.tag,p!==void 0&&((h&2)!==0||(h&4)!==0)&&fu(o,r,p),c=c.next}while(c!==a)}An(t,r,o);break;case 1:if(!Xe&&($r(o,r),a=o.stateNode,typeof a.componentWillUnmount=="function"))try{a.props=o.memoizedProps,a.state=o.memoizedState,a.componentWillUnmount()}catch(_){Ce(o,r,_)}An(t,r,o);break;case 21:An(t,r,o);break;case 22:o.mode&1?(Xe=(a=Xe)||o.memoizedState!==null,An(t,r,o),Xe=a):An(t,r,o);break;default:An(t,r,o)}}function Xf(t){var r=t.updateQueue;if(r!==null){t.updateQueue=null;var o=t.stateNode;o===null&&(o=t.stateNode=new py),r.forEach(function(a){var c=Iy.bind(null,t,a);o.has(a)||(o.add(a),a.then(c,c))})}}function Mt(t,r){var o=r.deletions;if(o!==null)for(var a=0;a<o.length;a++){var c=o[a];try{var h=t,p=r,_=p;e:for(;_!==null;){switch(_.tag){case 5:He=_.stateNode,Lt=!1;break e;case 3:He=_.stateNode.containerInfo,Lt=!0;break e;case 4:He=_.stateNode.containerInfo,Lt=!0;break e}_=_.return}if(He===null)throw Error(n(160));Yf(h,p,c),He=null,Lt=!1;var v=c.alternate;v!==null&&(v.return=null),c.return=null}catch(T){Ce(c,r,T)}}if(r.subtreeFlags&12854)for(r=r.child;r!==null;)Jf(r,t),r=r.sibling}function Jf(t,r){var o=t.alternate,a=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Mt(r,t),Yt(t),a&4){try{Ji(3,t,t.return),No(3,t)}catch(W){Ce(t,t.return,W)}try{Ji(5,t,t.return)}catch(W){Ce(t,t.return,W)}}break;case 1:Mt(r,t),Yt(t),a&512&&o!==null&&$r(o,o.return);break;case 5:if(Mt(r,t),Yt(t),a&512&&o!==null&&$r(o,o.return),t.flags&32){var c=t.stateNode;try{yi(c,"")}catch(W){Ce(t,t.return,W)}}if(a&4&&(c=t.stateNode,c!=null)){var h=t.memoizedProps,p=o!==null?o.memoizedProps:h,_=t.type,v=t.updateQueue;if(t.updateQueue=null,v!==null)try{_==="input"&&h.type==="radio"&&h.name!=null&&kd(c,h),Kl(_,p);var T=Kl(_,h);for(p=0;p<v.length;p+=2){var P=v[p],A=v[p+1];P==="style"?Dd(c,A):P==="dangerouslySetInnerHTML"?xd(c,A):P==="children"?yi(c,A):Ne(c,P,A,T)}switch(_){case"input":Vl(c,h);break;case"textarea":Rd(c,h);break;case"select":var N=c._wrapperState.wasMultiple;c._wrapperState.wasMultiple=!!h.multiple;var b=h.value;b!=null?Ir(c,!!h.multiple,b,!1):N!==!!h.multiple&&(h.defaultValue!=null?Ir(c,!!h.multiple,h.defaultValue,!0):Ir(c,!!h.multiple,h.multiple?[]:"",!1))}c[ji]=h}catch(W){Ce(t,t.return,W)}}break;case 6:if(Mt(r,t),Yt(t),a&4){if(t.stateNode===null)throw Error(n(162));c=t.stateNode,h=t.memoizedProps;try{c.nodeValue=h}catch(W){Ce(t,t.return,W)}}break;case 3:if(Mt(r,t),Yt(t),a&4&&o!==null&&o.memoizedState.isDehydrated)try{Ai(r.containerInfo)}catch(W){Ce(t,t.return,W)}break;case 4:Mt(r,t),Yt(t);break;case 13:Mt(r,t),Yt(t),c=t.child,c.flags&8192&&(h=c.memoizedState!==null,c.stateNode.isHidden=h,!h||c.alternate!==null&&c.alternate.memoizedState!==null||(yu=Pe())),a&4&&Xf(t);break;case 22:if(P=o!==null&&o.memoizedState!==null,t.mode&1?(Xe=(T=Xe)||P,Mt(r,t),Xe=T):Mt(r,t),Yt(t),a&8192){if(T=t.memoizedState!==null,(t.stateNode.isHidden=T)&&!P&&(t.mode&1)!==0)for(F=t,P=t.child;P!==null;){for(A=F=P;F!==null;){switch(N=F,b=N.child,N.tag){case 0:case 11:case 14:case 15:Ji(4,N,N.return);break;case 1:$r(N,N.return);var z=N.stateNode;if(typeof z.componentWillUnmount=="function"){a=N,o=N.return;try{r=a,z.props=r.memoizedProps,z.state=r.memoizedState,z.componentWillUnmount()}catch(W){Ce(a,o,W)}}break;case 5:$r(N,N.return);break;case 22:if(N.memoizedState!==null){tp(A);continue}}b!==null?(b.return=N,F=b):tp(A)}P=P.sibling}e:for(P=null,A=t;;){if(A.tag===5){if(P===null){P=A;try{c=A.stateNode,T?(h=c.style,typeof h.setProperty=="function"?h.setProperty("display","none","important"):h.display="none"):(_=A.stateNode,v=A.memoizedProps.style,p=v!=null&&v.hasOwnProperty("display")?v.display:null,_.style.display=Od("display",p))}catch(W){Ce(t,t.return,W)}}}else if(A.tag===6){if(P===null)try{A.stateNode.nodeValue=T?"":A.memoizedProps}catch(W){Ce(t,t.return,W)}}else if((A.tag!==22&&A.tag!==23||A.memoizedState===null||A===t)&&A.child!==null){A.child.return=A,A=A.child;continue}if(A===t)break e;for(;A.sibling===null;){if(A.return===null||A.return===t)break e;P===A&&(P=null),A=A.return}P===A&&(P=null),A.sibling.return=A.return,A=A.sibling}}break;case 19:Mt(r,t),Yt(t),a&4&&Xf(t);break;case 21:break;default:Mt(r,t),Yt(t)}}function Yt(t){var r=t.flags;if(r&2){try{e:{for(var o=t.return;o!==null;){if(qf(o)){var a=o;break e}o=o.return}throw Error(n(160))}switch(a.tag){case 5:var c=a.stateNode;a.flags&32&&(yi(c,""),a.flags&=-33);var h=Qf(t);gu(t,h,c);break;case 3:case 4:var p=a.stateNode.containerInfo,_=Qf(t);mu(t,_,p);break;default:throw Error(n(161))}}catch(v){Ce(t,t.return,v)}t.flags&=-3}r&4096&&(t.flags&=-4097)}function gy(t,r,o){F=t,Zf(t)}function Zf(t,r,o){for(var a=(t.mode&1)!==0;F!==null;){var c=F,h=c.child;if(c.tag===22&&a){var p=c.memoizedState!==null||To;if(!p){var _=c.alternate,v=_!==null&&_.memoizedState!==null||Xe;_=To;var T=Xe;if(To=p,(Xe=v)&&!T)for(F=c;F!==null;)p=F,v=p.child,p.tag===22&&p.memoizedState!==null?np(c):v!==null?(v.return=p,F=v):np(c);for(;h!==null;)F=h,Zf(h),h=h.sibling;F=c,To=_,Xe=T}ep(t)}else(c.subtreeFlags&8772)!==0&&h!==null?(h.return=c,F=h):ep(t)}}function ep(t){for(;F!==null;){var r=F;if((r.flags&8772)!==0){var o=r.alternate;try{if((r.flags&8772)!==0)switch(r.tag){case 0:case 11:case 15:Xe||No(5,r);break;case 1:var a=r.stateNode;if(r.flags&4&&!Xe)if(o===null)a.componentDidMount();else{var c=r.elementType===r.type?o.memoizedProps:Dt(r.type,o.memoizedProps);a.componentDidUpdate(c,o.memoizedState,a.__reactInternalSnapshotBeforeUpdate)}var h=r.updateQueue;h!==null&&ef(r,h,a);break;case 3:var p=r.updateQueue;if(p!==null){if(o=null,r.child!==null)switch(r.child.tag){case 5:o=r.child.stateNode;break;case 1:o=r.child.stateNode}ef(r,p,o)}break;case 5:var _=r.stateNode;if(o===null&&r.flags&4){o=_;var v=r.memoizedProps;switch(r.type){case"button":case"input":case"select":case"textarea":v.autoFocus&&o.focus();break;case"img":v.src&&(o.src=v.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(r.memoizedState===null){var T=r.alternate;if(T!==null){var P=T.memoizedState;if(P!==null){var A=P.dehydrated;A!==null&&Ai(A)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(n(163))}Xe||r.flags&512&&pu(r)}catch(N){Ce(r,r.return,N)}}if(r===t){F=null;break}if(o=r.sibling,o!==null){o.return=r.return,F=o;break}F=r.return}}function tp(t){for(;F!==null;){var r=F;if(r===t){F=null;break}var o=r.sibling;if(o!==null){o.return=r.return,F=o;break}F=r.return}}function np(t){for(;F!==null;){var r=F;try{switch(r.tag){case 0:case 11:case 15:var o=r.return;try{No(4,r)}catch(v){Ce(r,o,v)}break;case 1:var a=r.stateNode;if(typeof a.componentDidMount=="function"){var c=r.return;try{a.componentDidMount()}catch(v){Ce(r,c,v)}}var h=r.return;try{pu(r)}catch(v){Ce(r,h,v)}break;case 5:var p=r.return;try{pu(r)}catch(v){Ce(r,p,v)}}}catch(v){Ce(r,r.return,v)}if(r===t){F=null;break}var _=r.sibling;if(_!==null){_.return=r.return,F=_;break}F=r.return}}var _y=Math.ceil,Ro=Re.ReactCurrentDispatcher,_u=Re.ReactCurrentOwner,kt=Re.ReactCurrentBatchConfig,ne=0,Fe=null,Oe=null,$e=0,vt=0,Gr=kn(0),Me=0,Zi=null,sr=0,Po=0,vu=0,es=null,at=null,yu=0,Kr=1/0,an=null,Ao=!1,wu=null,xn=null,xo=!1,On=null,Oo=0,ts=0,Eu=null,Do=-1,Lo=0;function Ze(){return(ne&6)!==0?Pe():Do!==-1?Do:Do=Pe()}function Dn(t){return(t.mode&1)===0?1:(ne&2)!==0&&$e!==0?$e&-$e:ey.transition!==null?(Lo===0&&(Lo=qd()),Lo):(t=ue,t!==0||(t=window.event,t=t===void 0?16:rh(t.type)),t)}function bt(t,r,o,a){if(50<ts)throw ts=0,Eu=null,Error(n(185));ki(t,o,a),((ne&2)===0||t!==Fe)&&(t===Fe&&((ne&2)===0&&(Po|=o),Me===4&&Ln(t,$e)),ut(t,a),o===1&&ne===0&&(r.mode&1)===0&&(Kr=Pe()+500,lo&&Nn()))}function ut(t,r){var o=t.callbackNode;ev(t,r);var a=Vs(t,t===Fe?$e:0);if(a===0)o!==null&&$d(o),t.callbackNode=null,t.callbackPriority=0;else if(r=a&-a,t.callbackPriority!==r){if(o!=null&&$d(o),r===1)t.tag===0?Zv(ip.bind(null,t)):Vh(ip.bind(null,t)),Qv(function(){(ne&6)===0&&Nn()}),o=null;else{switch(Qd(a)){case 1:o=ea;break;case 4:o=Gd;break;case 16:o=Us;break;case 536870912:o=Kd;break;default:o=Us}o=hp(o,rp.bind(null,t))}t.callbackPriority=r,t.callbackNode=o}}function rp(t,r){if(Do=-1,Lo=0,(ne&6)!==0)throw Error(n(327));var o=t.callbackNode;if(qr()&&t.callbackNode!==o)return null;var a=Vs(t,t===Fe?$e:0);if(a===0)return null;if((a&30)!==0||(a&t.expiredLanes)!==0||r)r=Mo(t,a);else{r=a;var c=ne;ne|=2;var h=op();(Fe!==t||$e!==r)&&(an=null,Kr=Pe()+500,lr(t,r));do try{wy();break}catch(_){sp(t,_)}while(!0);za(),Ro.current=h,ne=c,Oe!==null?r=0:(Fe=null,$e=0,r=Me)}if(r!==0){if(r===2&&(c=ta(t),c!==0&&(a=c,r=Su(t,c))),r===1)throw o=Zi,lr(t,0),Ln(t,a),ut(t,Pe()),o;if(r===6)Ln(t,a);else{if(c=t.current.alternate,(a&30)===0&&!vy(c)&&(r=Mo(t,a),r===2&&(h=ta(t),h!==0&&(a=h,r=Su(t,h))),r===1))throw o=Zi,lr(t,0),Ln(t,a),ut(t,Pe()),o;switch(t.finishedWork=c,t.finishedLanes=a,r){case 0:case 1:throw Error(n(345));case 2:ar(t,at,an);break;case 3:if(Ln(t,a),(a&130023424)===a&&(r=yu+500-Pe(),10<r)){if(Vs(t,0)!==0)break;if(c=t.suspendedLanes,(c&a)!==a){Ze(),t.pingedLanes|=t.suspendedLanes&c;break}t.timeoutHandle=Ra(ar.bind(null,t,at,an),r);break}ar(t,at,an);break;case 4:if(Ln(t,a),(a&4194240)===a)break;for(r=t.eventTimes,c=-1;0<a;){var p=31-At(a);h=1<<p,p=r[p],p>c&&(c=p),a&=~h}if(a=c,a=Pe()-a,a=(120>a?120:480>a?480:1080>a?1080:1920>a?1920:3e3>a?3e3:4320>a?4320:1960*_y(a/1960))-a,10<a){t.timeoutHandle=Ra(ar.bind(null,t,at,an),a);break}ar(t,at,an);break;case 5:ar(t,at,an);break;default:throw Error(n(329))}}}return ut(t,Pe()),t.callbackNode===o?rp.bind(null,t):null}function Su(t,r){var o=es;return t.current.memoizedState.isDehydrated&&(lr(t,r).flags|=256),t=Mo(t,r),t!==2&&(r=at,at=o,r!==null&&Cu(r)),t}function Cu(t){at===null?at=t:at.push.apply(at,t)}function vy(t){for(var r=t;;){if(r.flags&16384){var o=r.updateQueue;if(o!==null&&(o=o.stores,o!==null))for(var a=0;a<o.length;a++){var c=o[a],h=c.getSnapshot;c=c.value;try{if(!xt(h(),c))return!1}catch{return!1}}}if(o=r.child,r.subtreeFlags&16384&&o!==null)o.return=r,r=o;else{if(r===t)break;for(;r.sibling===null;){if(r.return===null||r.return===t)return!0;r=r.return}r.sibling.return=r.return,r=r.sibling}}return!0}function Ln(t,r){for(r&=~vu,r&=~Po,t.suspendedLanes|=r,t.pingedLanes&=~r,t=t.expirationTimes;0<r;){var o=31-At(r),a=1<<o;t[o]=-1,r&=~a}}function ip(t){if((ne&6)!==0)throw Error(n(327));qr();var r=Vs(t,0);if((r&1)===0)return ut(t,Pe()),null;var o=Mo(t,r);if(t.tag!==0&&o===2){var a=ta(t);a!==0&&(r=a,o=Su(t,a))}if(o===1)throw o=Zi,lr(t,0),Ln(t,r),ut(t,Pe()),o;if(o===6)throw Error(n(345));return t.finishedWork=t.current.alternate,t.finishedLanes=r,ar(t,at,an),ut(t,Pe()),null}function Iu(t,r){var o=ne;ne|=1;try{return t(r)}finally{ne=o,ne===0&&(Kr=Pe()+500,lo&&Nn())}}function or(t){On!==null&&On.tag===0&&(ne&6)===0&&qr();var r=ne;ne|=1;var o=kt.transition,a=ue;try{if(kt.transition=null,ue=1,t)return t()}finally{ue=a,kt.transition=o,ne=r,(ne&6)===0&&Nn()}}function ku(){vt=Gr.current,_e(Gr)}function lr(t,r){t.finishedWork=null,t.finishedLanes=0;var o=t.timeoutHandle;if(o!==-1&&(t.timeoutHandle=-1,qv(o)),Oe!==null)for(o=Oe.return;o!==null;){var a=o;switch(La(a),a.tag){case 1:a=a.type.childContextTypes,a!=null&&so();break;case 3:Br(),_e(st),_e(qe),Ka();break;case 5:$a(a);break;case 4:Br();break;case 13:_e(we);break;case 19:_e(we);break;case 10:Wa(a.type._context);break;case 22:case 23:ku()}o=o.return}if(Fe=t,Oe=t=Mn(t.current,null),$e=vt=r,Me=0,Zi=null,vu=Po=sr=0,at=es=null,nr!==null){for(r=0;r<nr.length;r++)if(o=nr[r],a=o.interleaved,a!==null){o.interleaved=null;var c=a.next,h=o.pending;if(h!==null){var p=h.next;h.next=c,a.next=p}o.pending=a}nr=null}return t}function sp(t,r){do{var o=Oe;try{if(za(),vo.current=So,yo){for(var a=Ee.memoizedState;a!==null;){var c=a.queue;c!==null&&(c.pending=null),a=a.next}yo=!1}if(ir=0,be=Le=Ee=null,Ki=!1,qi=0,_u.current=null,o===null||o.return===null){Me=1,Zi=r,Oe=null;break}e:{var h=t,p=o.return,_=o,v=r;if(r=$e,_.flags|=32768,v!==null&&typeof v=="object"&&typeof v.then=="function"){var T=v,P=_,A=P.tag;if((P.mode&1)===0&&(A===0||A===11||A===15)){var N=P.alternate;N?(P.updateQueue=N.updateQueue,P.memoizedState=N.memoizedState,P.lanes=N.lanes):(P.updateQueue=null,P.memoizedState=null)}var b=Af(p);if(b!==null){b.flags&=-257,xf(b,p,_,h,r),b.mode&1&&Pf(h,T,r),r=b,v=T;var z=r.updateQueue;if(z===null){var W=new Set;W.add(v),r.updateQueue=W}else z.add(v);break e}else{if((r&1)===0){Pf(h,T,r),Tu();break e}v=Error(n(426))}}else if(ye&&_.mode&1){var Ae=Af(p);if(Ae!==null){(Ae.flags&65536)===0&&(Ae.flags|=256),xf(Ae,p,_,h,r),Fa(Hr(v,_));break e}}h=v=Hr(v,_),Me!==4&&(Me=2),es===null?es=[h]:es.push(h),h=p;do{switch(h.tag){case 3:h.flags|=65536,r&=-r,h.lanes|=r;var I=Nf(h,v,r);Zh(h,I);break e;case 1:_=v;var w=h.type,k=h.stateNode;if((h.flags&128)===0&&(typeof w.getDerivedStateFromError=="function"||k!==null&&typeof k.componentDidCatch=="function"&&(xn===null||!xn.has(k)))){h.flags|=65536,r&=-r,h.lanes|=r;var O=Rf(h,_,r);Zh(h,O);break e}}h=h.return}while(h!==null)}ap(o)}catch(V){r=V,Oe===o&&o!==null&&(Oe=o=o.return);continue}break}while(!0)}function op(){var t=Ro.current;return Ro.current=So,t===null?So:t}function Tu(){(Me===0||Me===3||Me===2)&&(Me=4),Fe===null||(sr&268435455)===0&&(Po&268435455)===0||Ln(Fe,$e)}function Mo(t,r){var o=ne;ne|=2;var a=op();(Fe!==t||$e!==r)&&(an=null,lr(t,r));do try{yy();break}catch(c){sp(t,c)}while(!0);if(za(),ne=o,Ro.current=a,Oe!==null)throw Error(n(261));return Fe=null,$e=0,Me}function yy(){for(;Oe!==null;)lp(Oe)}function wy(){for(;Oe!==null&&!$_();)lp(Oe)}function lp(t){var r=dp(t.alternate,t,vt);t.memoizedProps=t.pendingProps,r===null?ap(t):Oe=r,_u.current=null}function ap(t){var r=t;do{var o=r.alternate;if(t=r.return,(r.flags&32768)===0){if(o=hy(o,r,vt),o!==null){Oe=o;return}}else{if(o=fy(o,r),o!==null){o.flags&=32767,Oe=o;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Me=6,Oe=null;return}}if(r=r.sibling,r!==null){Oe=r;return}Oe=r=t}while(r!==null);Me===0&&(Me=5)}function ar(t,r,o){var a=ue,c=kt.transition;try{kt.transition=null,ue=1,Ey(t,r,o,a)}finally{kt.transition=c,ue=a}return null}function Ey(t,r,o,a){do qr();while(On!==null);if((ne&6)!==0)throw Error(n(327));o=t.finishedWork;var c=t.finishedLanes;if(o===null)return null;if(t.finishedWork=null,t.finishedLanes=0,o===t.current)throw Error(n(177));t.callbackNode=null,t.callbackPriority=0;var h=o.lanes|o.childLanes;if(tv(t,h),t===Fe&&(Oe=Fe=null,$e=0),(o.subtreeFlags&2064)===0&&(o.flags&2064)===0||xo||(xo=!0,hp(Us,function(){return qr(),null})),h=(o.flags&15990)!==0,(o.subtreeFlags&15990)!==0||h){h=kt.transition,kt.transition=null;var p=ue;ue=1;var _=ne;ne|=4,_u.current=null,my(t,o),Jf(o,t),jv(Ta),$s=!!ka,Ta=ka=null,t.current=o,gy(o),G_(),ne=_,ue=p,kt.transition=h}else t.current=o;if(xo&&(xo=!1,On=t,Oo=c),h=t.pendingLanes,h===0&&(xn=null),Q_(o.stateNode),ut(t,Pe()),r!==null)for(a=t.onRecoverableError,o=0;o<r.length;o++)c=r[o],a(c.value,{componentStack:c.stack,digest:c.digest});if(Ao)throw Ao=!1,t=wu,wu=null,t;return(Oo&1)!==0&&t.tag!==0&&qr(),h=t.pendingLanes,(h&1)!==0?t===Eu?ts++:(ts=0,Eu=t):ts=0,Nn(),null}function qr(){if(On!==null){var t=Qd(Oo),r=kt.transition,o=ue;try{if(kt.transition=null,ue=16>t?16:t,On===null)var a=!1;else{if(t=On,On=null,Oo=0,(ne&6)!==0)throw Error(n(331));var c=ne;for(ne|=4,F=t.current;F!==null;){var h=F,p=h.child;if((F.flags&16)!==0){var _=h.deletions;if(_!==null){for(var v=0;v<_.length;v++){var T=_[v];for(F=T;F!==null;){var P=F;switch(P.tag){case 0:case 11:case 15:Ji(8,P,h)}var A=P.child;if(A!==null)A.return=P,F=A;else for(;F!==null;){P=F;var N=P.sibling,b=P.return;if(Kf(P),P===T){F=null;break}if(N!==null){N.return=b,F=N;break}F=b}}}var z=h.alternate;if(z!==null){var W=z.child;if(W!==null){z.child=null;do{var Ae=W.sibling;W.sibling=null,W=Ae}while(W!==null)}}F=h}}if((h.subtreeFlags&2064)!==0&&p!==null)p.return=h,F=p;else e:for(;F!==null;){if(h=F,(h.flags&2048)!==0)switch(h.tag){case 0:case 11:case 15:Ji(9,h,h.return)}var I=h.sibling;if(I!==null){I.return=h.return,F=I;break e}F=h.return}}var w=t.current;for(F=w;F!==null;){p=F;var k=p.child;if((p.subtreeFlags&2064)!==0&&k!==null)k.return=p,F=k;else e:for(p=w;F!==null;){if(_=F,(_.flags&2048)!==0)try{switch(_.tag){case 0:case 11:case 15:No(9,_)}}catch(V){Ce(_,_.return,V)}if(_===p){F=null;break e}var O=_.sibling;if(O!==null){O.return=_.return,F=O;break e}F=_.return}}if(ne=c,Nn(),Gt&&typeof Gt.onPostCommitFiberRoot=="function")try{Gt.onPostCommitFiberRoot(zs,t)}catch{}a=!0}return a}finally{ue=o,kt.transition=r}}return!1}function up(t,r,o){r=Hr(o,r),r=Nf(t,r,1),t=Pn(t,r,1),r=Ze(),t!==null&&(ki(t,1,r),ut(t,r))}function Ce(t,r,o){if(t.tag===3)up(t,t,o);else for(;r!==null;){if(r.tag===3){up(r,t,o);break}else if(r.tag===1){var a=r.stateNode;if(typeof r.type.getDerivedStateFromError=="function"||typeof a.componentDidCatch=="function"&&(xn===null||!xn.has(a))){t=Hr(o,t),t=Rf(r,t,1),r=Pn(r,t,1),t=Ze(),r!==null&&(ki(r,1,t),ut(r,t));break}}r=r.return}}function Sy(t,r,o){var a=t.pingCache;a!==null&&a.delete(r),r=Ze(),t.pingedLanes|=t.suspendedLanes&o,Fe===t&&($e&o)===o&&(Me===4||Me===3&&($e&130023424)===$e&&500>Pe()-yu?lr(t,0):vu|=o),ut(t,r)}function cp(t,r){r===0&&((t.mode&1)===0?r=1:(r=js,js<<=1,(js&130023424)===0&&(js=4194304)));var o=Ze();t=sn(t,r),t!==null&&(ki(t,r,o),ut(t,o))}function Cy(t){var r=t.memoizedState,o=0;r!==null&&(o=r.retryLane),cp(t,o)}function Iy(t,r){var o=0;switch(t.tag){case 13:var a=t.stateNode,c=t.memoizedState;c!==null&&(o=c.retryLane);break;case 19:a=t.stateNode;break;default:throw Error(n(314))}a!==null&&a.delete(r),cp(t,o)}var dp;dp=function(t,r,o){if(t!==null)if(t.memoizedProps!==r.pendingProps||st.current)lt=!0;else{if((t.lanes&o)===0&&(r.flags&128)===0)return lt=!1,dy(t,r,o);lt=(t.flags&131072)!==0}else lt=!1,ye&&(r.flags&1048576)!==0&&Bh(r,uo,r.index);switch(r.lanes=0,r.tag){case 2:var a=r.type;ko(t,r),t=r.pendingProps;var c=br(r,qe.current);Vr(r,o),c=Ya(null,r,a,t,c,o);var h=Xa();return r.flags|=1,typeof c=="object"&&c!==null&&typeof c.render=="function"&&c.$$typeof===void 0?(r.tag=1,r.memoizedState=null,r.updateQueue=null,ot(a)?(h=!0,oo(r)):h=!1,r.memoizedState=c.state!==null&&c.state!==void 0?c.state:null,Ba(r),c.updater=Co,r.stateNode=c,c._reactInternals=r,ru(r,a,t,o),r=lu(null,r,a,!0,h,o)):(r.tag=0,ye&&h&&Da(r),Je(null,r,c,o),r=r.child),r;case 16:a=r.elementType;e:{switch(ko(t,r),t=r.pendingProps,c=a._init,a=c(a._payload),r.type=a,c=r.tag=Ty(a),t=Dt(a,t),c){case 0:r=ou(null,r,a,t,o);break e;case 1:r=Ff(null,r,a,t,o);break e;case 11:r=Of(null,r,a,t,o);break e;case 14:r=Df(null,r,a,Dt(a.type,t),o);break e}throw Error(n(306,a,""))}return r;case 0:return a=r.type,c=r.pendingProps,c=r.elementType===a?c:Dt(a,c),ou(t,r,a,c,o);case 1:return a=r.type,c=r.pendingProps,c=r.elementType===a?c:Dt(a,c),Ff(t,r,a,c,o);case 3:e:{if(Uf(r),t===null)throw Error(n(387));a=r.pendingProps,h=r.memoizedState,c=h.element,Jh(t,r),go(r,a,null,o);var p=r.memoizedState;if(a=p.element,h.isDehydrated)if(h={element:a,isDehydrated:!1,cache:p.cache,pendingSuspenseBoundaries:p.pendingSuspenseBoundaries,transitions:p.transitions},r.updateQueue.baseState=h,r.memoizedState=h,r.flags&256){c=Hr(Error(n(423)),r),r=zf(t,r,a,o,c);break e}else if(a!==c){c=Hr(Error(n(424)),r),r=zf(t,r,a,o,c);break e}else for(_t=In(r.stateNode.containerInfo.firstChild),gt=r,ye=!0,Ot=null,o=Yh(r,null,a,o),r.child=o;o;)o.flags=o.flags&-3|4096,o=o.sibling;else{if(zr(),a===c){r=ln(t,r,o);break e}Je(t,r,a,o)}r=r.child}return r;case 5:return tf(r),t===null&&ba(r),a=r.type,c=r.pendingProps,h=t!==null?t.memoizedProps:null,p=c.children,Na(a,c)?p=null:h!==null&&Na(a,h)&&(r.flags|=32),bf(t,r),Je(t,r,p,o),r.child;case 6:return t===null&&ba(r),null;case 13:return Wf(t,r,o);case 4:return Ha(r,r.stateNode.containerInfo),a=r.pendingProps,t===null?r.child=Wr(r,null,a,o):Je(t,r,a,o),r.child;case 11:return a=r.type,c=r.pendingProps,c=r.elementType===a?c:Dt(a,c),Of(t,r,a,c,o);case 7:return Je(t,r,r.pendingProps,o),r.child;case 8:return Je(t,r,r.pendingProps.children,o),r.child;case 12:return Je(t,r,r.pendingProps.children,o),r.child;case 10:e:{if(a=r.type._context,c=r.pendingProps,h=r.memoizedProps,p=c.value,fe(fo,a._currentValue),a._currentValue=p,h!==null)if(xt(h.value,p)){if(h.children===c.children&&!st.current){r=ln(t,r,o);break e}}else for(h=r.child,h!==null&&(h.return=r);h!==null;){var _=h.dependencies;if(_!==null){p=h.child;for(var v=_.firstContext;v!==null;){if(v.context===a){if(h.tag===1){v=on(-1,o&-o),v.tag=2;var T=h.updateQueue;if(T!==null){T=T.shared;var P=T.pending;P===null?v.next=v:(v.next=P.next,P.next=v),T.pending=v}}h.lanes|=o,v=h.alternate,v!==null&&(v.lanes|=o),ja(h.return,o,r),_.lanes|=o;break}v=v.next}}else if(h.tag===10)p=h.type===r.type?null:h.child;else if(h.tag===18){if(p=h.return,p===null)throw Error(n(341));p.lanes|=o,_=p.alternate,_!==null&&(_.lanes|=o),ja(p,o,r),p=h.sibling}else p=h.child;if(p!==null)p.return=h;else for(p=h;p!==null;){if(p===r){p=null;break}if(h=p.sibling,h!==null){h.return=p.return,p=h;break}p=p.return}h=p}Je(t,r,c.children,o),r=r.child}return r;case 9:return c=r.type,a=r.pendingProps.children,Vr(r,o),c=Ct(c),a=a(c),r.flags|=1,Je(t,r,a,o),r.child;case 14:return a=r.type,c=Dt(a,r.pendingProps),c=Dt(a.type,c),Df(t,r,a,c,o);case 15:return Lf(t,r,r.type,r.pendingProps,o);case 17:return a=r.type,c=r.pendingProps,c=r.elementType===a?c:Dt(a,c),ko(t,r),r.tag=1,ot(a)?(t=!0,oo(r)):t=!1,Vr(r,o),kf(r,a,c),ru(r,a,c,o),lu(null,r,a,!0,t,o);case 19:return Vf(t,r,o);case 22:return Mf(t,r,o)}throw Error(n(156,r.tag))};function hp(t,r){return Hd(t,r)}function ky(t,r,o,a){this.tag=t,this.key=o,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=r,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=a,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Tt(t,r,o,a){return new ky(t,r,o,a)}function Nu(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Ty(t){if(typeof t=="function")return Nu(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Ht)return 11;if(t===$t)return 14}return 2}function Mn(t,r){var o=t.alternate;return o===null?(o=Tt(t.tag,r,t.key,t.mode),o.elementType=t.elementType,o.type=t.type,o.stateNode=t.stateNode,o.alternate=t,t.alternate=o):(o.pendingProps=r,o.type=t.type,o.flags=0,o.subtreeFlags=0,o.deletions=null),o.flags=t.flags&14680064,o.childLanes=t.childLanes,o.lanes=t.lanes,o.child=t.child,o.memoizedProps=t.memoizedProps,o.memoizedState=t.memoizedState,o.updateQueue=t.updateQueue,r=t.dependencies,o.dependencies=r===null?null:{lanes:r.lanes,firstContext:r.firstContext},o.sibling=t.sibling,o.index=t.index,o.ref=t.ref,o}function bo(t,r,o,a,c,h){var p=2;if(a=t,typeof t=="function")Nu(t)&&(p=1);else if(typeof t=="string")p=5;else e:switch(t){case Be:return ur(o.children,c,h,r);case rt:p=8,c|=8;break;case wt:return t=Tt(12,o,r,c|2),t.elementType=wt,t.lanes=h,t;case ft:return t=Tt(13,o,r,c),t.elementType=ft,t.lanes=h,t;case Pt:return t=Tt(19,o,r,c),t.elementType=Pt,t.lanes=h,t;case Se:return Fo(o,c,h,r);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Rt:p=10;break e;case Yn:p=9;break e;case Ht:p=11;break e;case $t:p=14;break e;case it:p=16,a=null;break e}throw Error(n(130,t==null?t:typeof t,""))}return r=Tt(p,o,r,c),r.elementType=t,r.type=a,r.lanes=h,r}function ur(t,r,o,a){return t=Tt(7,t,a,r),t.lanes=o,t}function Fo(t,r,o,a){return t=Tt(22,t,a,r),t.elementType=Se,t.lanes=o,t.stateNode={isHidden:!1},t}function Ru(t,r,o){return t=Tt(6,t,null,r),t.lanes=o,t}function Pu(t,r,o){return r=Tt(4,t.children!==null?t.children:[],t.key,r),r.lanes=o,r.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},r}function Ny(t,r,o,a,c){this.tag=r,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=na(0),this.expirationTimes=na(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=na(0),this.identifierPrefix=a,this.onRecoverableError=c,this.mutableSourceEagerHydrationData=null}function Au(t,r,o,a,c,h,p,_,v){return t=new Ny(t,r,o,_,v),r===1?(r=1,h===!0&&(r|=8)):r=0,h=Tt(3,null,null,r),t.current=h,h.stateNode=t,h.memoizedState={element:a,isDehydrated:o,cache:null,transitions:null,pendingSuspenseBoundaries:null},Ba(h),t}function Ry(t,r,o){var a=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:De,key:a==null?null:""+a,children:t,containerInfo:r,implementation:o}}function fp(t){if(!t)return Tn;t=t._reactInternals;e:{if(Xn(t)!==t||t.tag!==1)throw Error(n(170));var r=t;do{switch(r.tag){case 3:r=r.stateNode.context;break e;case 1:if(ot(r.type)){r=r.stateNode.__reactInternalMemoizedMergedChildContext;break e}}r=r.return}while(r!==null);throw Error(n(171))}if(t.tag===1){var o=t.type;if(ot(o))return Wh(t,o,r)}return r}function pp(t,r,o,a,c,h,p,_,v){return t=Au(o,a,!0,t,c,h,p,_,v),t.context=fp(null),o=t.current,a=Ze(),c=Dn(o),h=on(a,c),h.callback=r??null,Pn(o,h,c),t.current.lanes=c,ki(t,c,a),ut(t,a),t}function Uo(t,r,o,a){var c=r.current,h=Ze(),p=Dn(c);return o=fp(o),r.context===null?r.context=o:r.pendingContext=o,r=on(h,p),r.payload={element:t},a=a===void 0?null:a,a!==null&&(r.callback=a),t=Pn(c,r,p),t!==null&&(bt(t,c,p,h),mo(t,c,p)),p}function zo(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function mp(t,r){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var o=t.retryLane;t.retryLane=o!==0&&o<r?o:r}}function xu(t,r){mp(t,r),(t=t.alternate)&&mp(t,r)}function Py(){return null}var gp=typeof reportError=="function"?reportError:function(t){console.error(t)};function Ou(t){this._internalRoot=t}Wo.prototype.render=Ou.prototype.render=function(t){var r=this._internalRoot;if(r===null)throw Error(n(409));Uo(t,r,null,null)},Wo.prototype.unmount=Ou.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var r=t.containerInfo;or(function(){Uo(null,t,null,null)}),r[en]=null}};function Wo(t){this._internalRoot=t}Wo.prototype.unstable_scheduleHydration=function(t){if(t){var r=Jd();t={blockedOn:null,target:t,priority:r};for(var o=0;o<En.length&&r!==0&&r<En[o].priority;o++);En.splice(o,0,t),o===0&&th(t)}};function Du(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function jo(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function _p(){}function Ay(t,r,o,a,c){if(c){if(typeof a=="function"){var h=a;a=function(){var T=zo(p);h.call(T)}}var p=pp(r,a,t,0,null,!1,!1,"",_p);return t._reactRootContainer=p,t[en]=p.current,zi(t.nodeType===8?t.parentNode:t),or(),p}for(;c=t.lastChild;)t.removeChild(c);if(typeof a=="function"){var _=a;a=function(){var T=zo(v);_.call(T)}}var v=Au(t,0,!1,null,null,!1,!1,"",_p);return t._reactRootContainer=v,t[en]=v.current,zi(t.nodeType===8?t.parentNode:t),or(function(){Uo(r,v,o,a)}),v}function Vo(t,r,o,a,c){var h=o._reactRootContainer;if(h){var p=h;if(typeof c=="function"){var _=c;c=function(){var v=zo(p);_.call(v)}}Uo(r,p,t,c)}else p=Ay(o,r,t,c,a);return zo(p)}Yd=function(t){switch(t.tag){case 3:var r=t.stateNode;if(r.current.memoizedState.isDehydrated){var o=Ii(r.pendingLanes);o!==0&&(ra(r,o|1),ut(r,Pe()),(ne&6)===0&&(Kr=Pe()+500,Nn()))}break;case 13:or(function(){var a=sn(t,1);if(a!==null){var c=Ze();bt(a,t,1,c)}}),xu(t,1)}},ia=function(t){if(t.tag===13){var r=sn(t,134217728);if(r!==null){var o=Ze();bt(r,t,134217728,o)}xu(t,134217728)}},Xd=function(t){if(t.tag===13){var r=Dn(t),o=sn(t,r);if(o!==null){var a=Ze();bt(o,t,r,a)}xu(t,r)}},Jd=function(){return ue},Zd=function(t,r){var o=ue;try{return ue=t,r()}finally{ue=o}},Yl=function(t,r,o){switch(r){case"input":if(Vl(t,o),r=o.name,o.type==="radio"&&r!=null){for(o=t;o.parentNode;)o=o.parentNode;for(o=o.querySelectorAll("input[name="+JSON.stringify(""+r)+'][type="radio"]'),r=0;r<o.length;r++){var a=o[r];if(a!==t&&a.form===t.form){var c=io(a);if(!c)throw Error(n(90));Cd(a),Vl(a,c)}}}break;case"textarea":Rd(t,o);break;case"select":r=o.value,r!=null&&Ir(t,!!o.multiple,r,!1)}},Fd=Iu,Ud=or;var xy={usingClientEntryPoint:!1,Events:[Vi,Lr,io,Md,bd,Iu]},ns={findFiberByHostInstance:Jn,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Oy={bundleType:ns.bundleType,version:ns.version,rendererPackageName:ns.rendererPackageName,rendererConfig:ns.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Re.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=Vd(t),t===null?null:t.stateNode},findFiberByHostInstance:ns.findFiberByHostInstance||Py,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Bo=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Bo.isDisabled&&Bo.supportsFiber)try{zs=Bo.inject(Oy),Gt=Bo}catch{}}return ct.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=xy,ct.createPortal=function(t,r){var o=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Du(r))throw Error(n(200));return Ry(t,r,null,o)},ct.createRoot=function(t,r){if(!Du(t))throw Error(n(299));var o=!1,a="",c=gp;return r!=null&&(r.unstable_strictMode===!0&&(o=!0),r.identifierPrefix!==void 0&&(a=r.identifierPrefix),r.onRecoverableError!==void 0&&(c=r.onRecoverableError)),r=Au(t,1,!1,null,null,o,!1,a,c),t[en]=r.current,zi(t.nodeType===8?t.parentNode:t),new Ou(r)},ct.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var r=t._reactInternals;if(r===void 0)throw typeof t.render=="function"?Error(n(188)):(t=Object.keys(t).join(","),Error(n(268,t)));return t=Vd(r),t=t===null?null:t.stateNode,t},ct.flushSync=function(t){return or(t)},ct.hydrate=function(t,r,o){if(!jo(r))throw Error(n(200));return Vo(null,t,r,!0,o)},ct.hydrateRoot=function(t,r,o){if(!Du(t))throw Error(n(405));var a=o!=null&&o.hydratedSources||null,c=!1,h="",p=gp;if(o!=null&&(o.unstable_strictMode===!0&&(c=!0),o.identifierPrefix!==void 0&&(h=o.identifierPrefix),o.onRecoverableError!==void 0&&(p=o.onRecoverableError)),r=pp(r,null,t,1,o??null,c,!1,h,p),t[en]=r.current,zi(t),a)for(t=0;t<a.length;t++)o=a[t],c=o._getVersion,c=c(o._source),r.mutableSourceEagerHydrationData==null?r.mutableSourceEagerHydrationData=[o,c]:r.mutableSourceEagerHydrationData.push(o,c);return new Wo(r)},ct.render=function(t,r,o){if(!jo(r))throw Error(n(200));return Vo(null,t,r,!1,o)},ct.unmountComponentAtNode=function(t){if(!jo(t))throw Error(n(40));return t._reactRootContainer?(or(function(){Vo(null,null,t,!1,function(){t._reactRootContainer=null,t[en]=null})}),!0):!1},ct.unstable_batchedUpdates=Iu,ct.unstable_renderSubtreeIntoContainer=function(t,r,o,a){if(!jo(o))throw Error(n(200));if(t==null||t._reactInternals===void 0)throw Error(n(38));return Vo(t,r,o,!1,a)},ct.version="18.3.1-next-f1338f8080-20240426",ct}var kp;function Wy(){if(kp)return bu.exports;kp=1;function i(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i)}catch(e){console.error(e)}}return i(),bu.exports=zy(),bu.exports}var Tp;function jy(){if(Tp)return Ho;Tp=1;var i=Wy();return Ho.createRoot=i.createRoot,Ho.hydrateRoot=i.hydrateRoot,Ho}var Vy=jy();const By=({handleSubmit:i,title:e,setTitle:n,comment:s,setComment:l,editingId:u,user:d})=>le.jsxs("form",{onSubmit:i,className:"space-y-2 mb-6",children:[le.jsx("input",{className:"border p-2 w-full",placeholder:"ゲームタイトル",value:e,onChange:f=>n(f.target.value)}),le.jsx("textarea",{className:"border p-2 w-full",placeholder:"感想を入力...",rows:"4",value:s,onChange:f=>l(f.target.value)}),le.jsx("button",{className:"bg-blue-500 text-white px-4 py-2 rounded",type:"submit",disabled:!d,children:u?"更新する":"投稿"})]}),Hy=()=>{};var Np={};/**
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
 */const Mm={NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
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
 */const D=function(i,e){if(!i)throw di(e)},di=function(i){return new Error("Firebase Database ("+Mm.SDK_VERSION+") INTERNAL ASSERT FAILED: "+i)};/**
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
 */const bm=function(i){const e=[];let n=0;for(let s=0;s<i.length;s++){let l=i.charCodeAt(s);l<128?e[n++]=l:l<2048?(e[n++]=l>>6|192,e[n++]=l&63|128):(l&64512)===55296&&s+1<i.length&&(i.charCodeAt(s+1)&64512)===56320?(l=65536+((l&1023)<<10)+(i.charCodeAt(++s)&1023),e[n++]=l>>18|240,e[n++]=l>>12&63|128,e[n++]=l>>6&63|128,e[n++]=l&63|128):(e[n++]=l>>12|224,e[n++]=l>>6&63|128,e[n++]=l&63|128)}return e},$y=function(i){const e=[];let n=0,s=0;for(;n<i.length;){const l=i[n++];if(l<128)e[s++]=String.fromCharCode(l);else if(l>191&&l<224){const u=i[n++];e[s++]=String.fromCharCode((l&31)<<6|u&63)}else if(l>239&&l<365){const u=i[n++],d=i[n++],f=i[n++],m=((l&7)<<18|(u&63)<<12|(d&63)<<6|f&63)-65536;e[s++]=String.fromCharCode(55296+(m>>10)),e[s++]=String.fromCharCode(56320+(m&1023))}else{const u=i[n++],d=i[n++];e[s++]=String.fromCharCode((l&15)<<12|(u&63)<<6|d&63)}}return e.join("")},Ic={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(i,e){if(!Array.isArray(i))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let l=0;l<i.length;l+=3){const u=i[l],d=l+1<i.length,f=d?i[l+1]:0,m=l+2<i.length,g=m?i[l+2]:0,E=u>>2,y=(u&3)<<4|f>>4;let C=(f&15)<<2|g>>6,x=g&63;m||(x=64,d||(C=64)),s.push(n[E],n[y],n[C],n[x])}return s.join("")},encodeString(i,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(i):this.encodeByteArray(bm(i),e)},decodeString(i,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(i):$y(this.decodeStringToByteArray(i,e))},decodeStringToByteArray(i,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let l=0;l<i.length;){const u=n[i.charAt(l++)],f=l<i.length?n[i.charAt(l)]:0;++l;const g=l<i.length?n[i.charAt(l)]:64;++l;const y=l<i.length?n[i.charAt(l)]:64;if(++l,u==null||f==null||g==null||y==null)throw new Gy;const C=u<<2|f>>4;if(s.push(C),g!==64){const x=f<<4&240|g>>2;if(s.push(x),y!==64){const L=g<<6&192|y;s.push(L)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let i=0;i<this.ENCODED_VALS.length;i++)this.byteToCharMap_[i]=this.ENCODED_VALS.charAt(i),this.charToByteMap_[this.byteToCharMap_[i]]=i,this.byteToCharMapWebSafe_[i]=this.ENCODED_VALS_WEBSAFE.charAt(i),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[i]]=i,i>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(i)]=i,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(i)]=i)}}};class Gy extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Fm=function(i){const e=bm(i);return Ic.encodeByteArray(e,!0)},tl=function(i){return Fm(i).replace(/\./g,"")},nl=function(i){try{return Ic.decodeString(i,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function Ky(i){return Um(void 0,i)}function Um(i,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:i===void 0&&(i={});break;case Array:i=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!qy(n)||(i[n]=Um(i[n],e[n]));return i}function qy(i){return i!=="__proto__"}/**
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
 */function Qy(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const Yy=()=>Qy().__FIREBASE_DEFAULTS__,Xy=()=>{if(typeof process>"u"||typeof Np>"u")return;const i=Np.__FIREBASE_DEFAULTS__;if(i)return JSON.parse(i)},Jy=()=>{if(typeof document>"u")return;let i;try{i=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=i&&nl(i[1]);return e&&JSON.parse(e)},kc=()=>{try{return Hy()||Yy()||Xy()||Jy()}catch(i){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${i}`);return}},zm=i=>{var e,n;return(n=(e=kc())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[i]},Zy=i=>{const e=zm(i);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),s]:[e.substring(0,n),s]},Wm=()=>{var i;return(i=kc())===null||i===void 0?void 0:i.config},jm=i=>{var e;return(e=kc())===null||e===void 0?void 0:e[`_${i}`]};/**
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
 */class Is{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,s))}}}/**
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
 */function ew(i,e){if(i.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},s=e||"demo-project",l=i.iat||0,u=i.sub||i.user_id;if(!u)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const d=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:l,exp:l+3600,auth_time:l,sub:u,user_id:u,firebase:{sign_in_provider:"custom",identities:{}}},i);return[tl(JSON.stringify(n)),tl(JSON.stringify(d)),""].join(".")}/**
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
 */function tt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Tc(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(tt())}function tw(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function nw(){const i=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof i=="object"&&i.id!==void 0}function Vm(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function rw(){const i=tt();return i.indexOf("MSIE ")>=0||i.indexOf("Trident/")>=0}function iw(){return Mm.NODE_ADMIN===!0}function sw(){try{return typeof indexedDB=="object"}catch{return!1}}function ow(){return new Promise((i,e)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",l=self.indexedDB.open(s);l.onsuccess=()=>{l.result.close(),n||self.indexedDB.deleteDatabase(s),i(!0)},l.onupgradeneeded=()=>{n=!1},l.onerror=()=>{var u;e(((u=l.error)===null||u===void 0?void 0:u.message)||"")}}catch(n){e(n)}})}/**
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
 */const lw="FirebaseError";class qn extends Error{constructor(e,n,s){super(n),this.code=e,this.customData=s,this.name=lw,Object.setPrototypeOf(this,qn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,ks.prototype.create)}}class ks{constructor(e,n,s){this.service=e,this.serviceName=n,this.errors=s}create(e,...n){const s=n[0]||{},l=`${this.service}/${e}`,u=this.errors[e],d=u?aw(u,s):"Error",f=`${this.serviceName}: ${d} (${l}).`;return new qn(l,f,s)}}function aw(i,e){return i.replace(uw,(n,s)=>{const l=e[s];return l!=null?String(l):`<${s}?>`})}const uw=/\{\$([^}]+)}/g;/**
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
 */function ps(i){return JSON.parse(i)}function Ve(i){return JSON.stringify(i)}/**
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
 */const Bm=function(i){let e={},n={},s={},l="";try{const u=i.split(".");e=ps(nl(u[0])||""),n=ps(nl(u[1])||""),l=u[2],s=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:s,signature:l}},cw=function(i){const e=Bm(i),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},dw=function(i){const e=Bm(i).claims;return typeof e=="object"&&e.admin===!0};/**
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
 */function Zt(i,e){return Object.prototype.hasOwnProperty.call(i,e)}function ri(i,e){if(Object.prototype.hasOwnProperty.call(i,e))return i[e]}function ec(i){for(const e in i)if(Object.prototype.hasOwnProperty.call(i,e))return!1;return!0}function rl(i,e,n){const s={};for(const l in i)Object.prototype.hasOwnProperty.call(i,l)&&(s[l]=e.call(n,i[l],l,i));return s}function mr(i,e){if(i===e)return!0;const n=Object.keys(i),s=Object.keys(e);for(const l of n){if(!s.includes(l))return!1;const u=i[l],d=e[l];if(Rp(u)&&Rp(d)){if(!mr(u,d))return!1}else if(u!==d)return!1}for(const l of s)if(!n.includes(l))return!1;return!0}function Rp(i){return i!==null&&typeof i=="object"}/**
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
 */function hi(i){const e=[];for(const[n,s]of Object.entries(i))Array.isArray(s)?s.forEach(l=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(l))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}/**
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
 */class hw{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const s=this.W_;if(typeof e=="string")for(let y=0;y<16;y++)s[y]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let y=0;y<16;y++)s[y]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let y=16;y<80;y++){const C=s[y-3]^s[y-8]^s[y-14]^s[y-16];s[y]=(C<<1|C>>>31)&4294967295}let l=this.chain_[0],u=this.chain_[1],d=this.chain_[2],f=this.chain_[3],m=this.chain_[4],g,E;for(let y=0;y<80;y++){y<40?y<20?(g=f^u&(d^f),E=1518500249):(g=u^d^f,E=1859775393):y<60?(g=u&d|f&(u|d),E=2400959708):(g=u^d^f,E=3395469782);const C=(l<<5|l>>>27)+g+m+E+s[y]&4294967295;m=f,f=d,d=(u<<30|u>>>2)&4294967295,u=l,l=C}this.chain_[0]=this.chain_[0]+l&4294967295,this.chain_[1]=this.chain_[1]+u&4294967295,this.chain_[2]=this.chain_[2]+d&4294967295,this.chain_[3]=this.chain_[3]+f&4294967295,this.chain_[4]=this.chain_[4]+m&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const s=n-this.blockSize;let l=0;const u=this.buf_;let d=this.inbuf_;for(;l<n;){if(d===0)for(;l<=s;)this.compress_(e,l),l+=this.blockSize;if(typeof e=="string"){for(;l<n;)if(u[d]=e.charCodeAt(l),++d,++l,d===this.blockSize){this.compress_(u),d=0;break}}else for(;l<n;)if(u[d]=e[l],++d,++l,d===this.blockSize){this.compress_(u),d=0;break}}this.inbuf_=d,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let l=this.blockSize-1;l>=56;l--)this.buf_[l]=n&255,n/=256;this.compress_(this.buf_);let s=0;for(let l=0;l<5;l++)for(let u=24;u>=0;u-=8)e[s]=this.chain_[l]>>u&255,++s;return e}}function fw(i,e){const n=new pw(i,e);return n.subscribe.bind(n)}class pw{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,s){let l;if(e===void 0&&n===void 0&&s===void 0)throw new Error("Missing Observer.");mw(e,["next","error","complete"])?l=e:l={next:e,error:n,complete:s},l.next===void 0&&(l.next=zu),l.error===void 0&&(l.error=zu),l.complete===void 0&&(l.complete=zu);const u=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?l.error(this.finalError):l.complete()}catch{}}),this.observers.push(l),u}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function mw(i,e){if(typeof i!="object"||i===null)return!1;for(const n of e)if(n in i&&typeof i[n]=="function")return!0;return!1}function zu(){}function Il(i,e){return`${i} failed: ${e} argument `}/**
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
 */const gw=function(i){const e=[];let n=0;for(let s=0;s<i.length;s++){let l=i.charCodeAt(s);if(l>=55296&&l<=56319){const u=l-55296;s++,D(s<i.length,"Surrogate pair missing trail surrogate.");const d=i.charCodeAt(s)-56320;l=65536+(u<<10)+d}l<128?e[n++]=l:l<2048?(e[n++]=l>>6|192,e[n++]=l&63|128):l<65536?(e[n++]=l>>12|224,e[n++]=l>>6&63|128,e[n++]=l&63|128):(e[n++]=l>>18|240,e[n++]=l>>12&63|128,e[n++]=l>>6&63|128,e[n++]=l&63|128)}return e},kl=function(i){let e=0;for(let n=0;n<i.length;n++){const s=i.charCodeAt(n);s<128?e++:s<2048?e+=2:s>=55296&&s<=56319?(e+=4,n++):e+=3}return e};/**
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
 */function yt(i){return i&&i._delegate?i._delegate:i}/**
 * @license
 * Copyright 2025 Google LLC
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
 */function Tl(i){return i.endsWith(".cloudworkstations.dev")}async function Hm(i){return(await fetch(i,{credentials:"include"})).ok}class gr{constructor(e,n,s){this.name=e,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const cr="[DEFAULT]";/**
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
 */class _w{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const s=new Is;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const l=this.getOrInitializeService({instanceIdentifier:n});l&&s.resolve(l)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),l=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(u){if(l)return null;throw u}else{if(l)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(yw(e))try{this.getOrInitializeService({instanceIdentifier:cr})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(n);try{const u=this.getOrInitializeService({instanceIdentifier:l});s.resolve(u)}catch{}}}}clearInstance(e=cr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=cr){return this.instances.has(e)}getOptions(e=cr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const l=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[u,d]of this.instancesDeferred.entries()){const f=this.normalizeInstanceIdentifier(u);s===f&&d.resolve(l)}return l}onInit(e,n){var s;const l=this.normalizeInstanceIdentifier(n),u=(s=this.onInitCallbacks.get(l))!==null&&s!==void 0?s:new Set;u.add(e),this.onInitCallbacks.set(l,u);const d=this.instances.get(l);return d&&e(d,l),()=>{u.delete(e)}}invokeOnInitCallbacks(e,n){const s=this.onInitCallbacks.get(n);if(s)for(const l of s)try{l(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:vw(e),options:n}),this.instances.set(e,s),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=cr){return this.component?this.component.multipleInstances?e:cr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function vw(i){return i===cr?void 0:i}function yw(i){return i.instantiationMode==="EAGER"}/**
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
 */class ww{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new _w(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var ce;(function(i){i[i.DEBUG=0]="DEBUG",i[i.VERBOSE=1]="VERBOSE",i[i.INFO=2]="INFO",i[i.WARN=3]="WARN",i[i.ERROR=4]="ERROR",i[i.SILENT=5]="SILENT"})(ce||(ce={}));const Ew={debug:ce.DEBUG,verbose:ce.VERBOSE,info:ce.INFO,warn:ce.WARN,error:ce.ERROR,silent:ce.SILENT},Sw=ce.INFO,Cw={[ce.DEBUG]:"log",[ce.VERBOSE]:"log",[ce.INFO]:"info",[ce.WARN]:"warn",[ce.ERROR]:"error"},Iw=(i,e,...n)=>{if(e<i.logLevel)return;const s=new Date().toISOString(),l=Cw[e];if(l)console[l](`[${s}]  ${i.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Nc{constructor(e){this.name=e,this._logLevel=Sw,this._logHandler=Iw,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ce))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Ew[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ce.DEBUG,...e),this._logHandler(this,ce.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ce.VERBOSE,...e),this._logHandler(this,ce.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ce.INFO,...e),this._logHandler(this,ce.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ce.WARN,...e),this._logHandler(this,ce.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ce.ERROR,...e),this._logHandler(this,ce.ERROR,...e)}}const kw=(i,e)=>e.some(n=>i instanceof n);let Pp,Ap;function Tw(){return Pp||(Pp=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Nw(){return Ap||(Ap=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const $m=new WeakMap,tc=new WeakMap,Gm=new WeakMap,Wu=new WeakMap,Rc=new WeakMap;function Rw(i){const e=new Promise((n,s)=>{const l=()=>{i.removeEventListener("success",u),i.removeEventListener("error",d)},u=()=>{n(Vn(i.result)),l()},d=()=>{s(i.error),l()};i.addEventListener("success",u),i.addEventListener("error",d)});return e.then(n=>{n instanceof IDBCursor&&$m.set(n,i)}).catch(()=>{}),Rc.set(e,i),e}function Pw(i){if(tc.has(i))return;const e=new Promise((n,s)=>{const l=()=>{i.removeEventListener("complete",u),i.removeEventListener("error",d),i.removeEventListener("abort",d)},u=()=>{n(),l()},d=()=>{s(i.error||new DOMException("AbortError","AbortError")),l()};i.addEventListener("complete",u),i.addEventListener("error",d),i.addEventListener("abort",d)});tc.set(i,e)}let nc={get(i,e,n){if(i instanceof IDBTransaction){if(e==="done")return tc.get(i);if(e==="objectStoreNames")return i.objectStoreNames||Gm.get(i);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Vn(i[e])},set(i,e,n){return i[e]=n,!0},has(i,e){return i instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in i}};function Aw(i){nc=i(nc)}function xw(i){return i===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const s=i.call(ju(this),e,...n);return Gm.set(s,e.sort?e.sort():[e]),Vn(s)}:Nw().includes(i)?function(...e){return i.apply(ju(this),e),Vn($m.get(this))}:function(...e){return Vn(i.apply(ju(this),e))}}function Ow(i){return typeof i=="function"?xw(i):(i instanceof IDBTransaction&&Pw(i),kw(i,Tw())?new Proxy(i,nc):i)}function Vn(i){if(i instanceof IDBRequest)return Rw(i);if(Wu.has(i))return Wu.get(i);const e=Ow(i);return e!==i&&(Wu.set(i,e),Rc.set(e,i)),e}const ju=i=>Rc.get(i);function Dw(i,e,{blocked:n,upgrade:s,blocking:l,terminated:u}={}){const d=indexedDB.open(i,e),f=Vn(d);return s&&d.addEventListener("upgradeneeded",m=>{s(Vn(d.result),m.oldVersion,m.newVersion,Vn(d.transaction),m)}),n&&d.addEventListener("blocked",m=>n(m.oldVersion,m.newVersion,m)),f.then(m=>{u&&m.addEventListener("close",()=>u()),l&&m.addEventListener("versionchange",g=>l(g.oldVersion,g.newVersion,g))}).catch(()=>{}),f}const Lw=["get","getKey","getAll","getAllKeys","count"],Mw=["put","add","delete","clear"],Vu=new Map;function xp(i,e){if(!(i instanceof IDBDatabase&&!(e in i)&&typeof e=="string"))return;if(Vu.get(e))return Vu.get(e);const n=e.replace(/FromIndex$/,""),s=e!==n,l=Mw.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(l||Lw.includes(n)))return;const u=async function(d,...f){const m=this.transaction(d,l?"readwrite":"readonly");let g=m.store;return s&&(g=g.index(f.shift())),(await Promise.all([g[n](...f),l&&m.done]))[0]};return Vu.set(e,u),u}Aw(i=>({...i,get:(e,n,s)=>xp(e,n)||i.get(e,n,s),has:(e,n)=>!!xp(e,n)||i.has(e,n)}));/**
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
 */class bw{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Fw(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function Fw(i){const e=i.getComponent();return(e==null?void 0:e.type)==="VERSION"}const rc="@firebase/app",Op="0.12.1";/**
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
 */const mn=new Nc("@firebase/app"),Uw="@firebase/app-compat",zw="@firebase/analytics-compat",Ww="@firebase/analytics",jw="@firebase/app-check-compat",Vw="@firebase/app-check",Bw="@firebase/auth",Hw="@firebase/auth-compat",$w="@firebase/database",Gw="@firebase/data-connect",Kw="@firebase/database-compat",qw="@firebase/functions",Qw="@firebase/functions-compat",Yw="@firebase/installations",Xw="@firebase/installations-compat",Jw="@firebase/messaging",Zw="@firebase/messaging-compat",eE="@firebase/performance",tE="@firebase/performance-compat",nE="@firebase/remote-config",rE="@firebase/remote-config-compat",iE="@firebase/storage",sE="@firebase/storage-compat",oE="@firebase/firestore",lE="@firebase/vertexai",aE="@firebase/firestore-compat",uE="firebase",cE="11.7.1";/**
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
 */const ic="[DEFAULT]",dE={[rc]:"fire-core",[Uw]:"fire-core-compat",[Ww]:"fire-analytics",[zw]:"fire-analytics-compat",[Vw]:"fire-app-check",[jw]:"fire-app-check-compat",[Bw]:"fire-auth",[Hw]:"fire-auth-compat",[$w]:"fire-rtdb",[Gw]:"fire-data-connect",[Kw]:"fire-rtdb-compat",[qw]:"fire-fn",[Qw]:"fire-fn-compat",[Yw]:"fire-iid",[Xw]:"fire-iid-compat",[Jw]:"fire-fcm",[Zw]:"fire-fcm-compat",[eE]:"fire-perf",[tE]:"fire-perf-compat",[nE]:"fire-rc",[rE]:"fire-rc-compat",[iE]:"fire-gcs",[sE]:"fire-gcs-compat",[oE]:"fire-fst",[aE]:"fire-fst-compat",[lE]:"fire-vertex","fire-js":"fire-js",[uE]:"fire-js-all"};/**
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
 */const il=new Map,hE=new Map,sc=new Map;function Dp(i,e){try{i.container.addComponent(e)}catch(n){mn.debug(`Component ${e.name} failed to register with FirebaseApp ${i.name}`,n)}}function ii(i){const e=i.name;if(sc.has(e))return mn.debug(`There were multiple attempts to register component ${e}.`),!1;sc.set(e,i);for(const n of il.values())Dp(n,i);for(const n of hE.values())Dp(n,i);return!0}function Pc(i,e){const n=i.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),i.container.getProvider(e)}function Ft(i){return i==null?!1:i.settings!==void 0}/**
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
 */const fE={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Bn=new ks("app","Firebase",fE);/**
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
 */class pE{constructor(e,n,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new gr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Bn.create("app-deleted",{appName:this._name})}}/**
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
 */const fi=cE;function Km(i,e={}){let n=i;typeof e!="object"&&(e={name:e});const s=Object.assign({name:ic,automaticDataCollectionEnabled:!1},e),l=s.name;if(typeof l!="string"||!l)throw Bn.create("bad-app-name",{appName:String(l)});if(n||(n=Wm()),!n)throw Bn.create("no-options");const u=il.get(l);if(u){if(mr(n,u.options)&&mr(s,u.config))return u;throw Bn.create("duplicate-app",{appName:l})}const d=new ww(l);for(const m of sc.values())d.addComponent(m);const f=new pE(n,s,d);return il.set(l,f),f}function qm(i=ic){const e=il.get(i);if(!e&&i===ic&&Wm())return Km();if(!e)throw Bn.create("no-app",{appName:i});return e}function Hn(i,e,n){var s;let l=(s=dE[i])!==null&&s!==void 0?s:i;n&&(l+=`-${n}`);const u=l.match(/\s|\//),d=e.match(/\s|\//);if(u||d){const f=[`Unable to register library "${l}" with version "${e}":`];u&&f.push(`library name "${l}" contains illegal characters (whitespace or "/")`),u&&d&&f.push("and"),d&&f.push(`version name "${e}" contains illegal characters (whitespace or "/")`),mn.warn(f.join(" "));return}ii(new gr(`${l}-version`,()=>({library:l,version:e}),"VERSION"))}/**
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
 */const mE="firebase-heartbeat-database",gE=1,ms="firebase-heartbeat-store";let Bu=null;function Qm(){return Bu||(Bu=Dw(mE,gE,{upgrade:(i,e)=>{switch(e){case 0:try{i.createObjectStore(ms)}catch(n){console.warn(n)}}}}).catch(i=>{throw Bn.create("idb-open",{originalErrorMessage:i.message})})),Bu}async function _E(i){try{const n=(await Qm()).transaction(ms),s=await n.objectStore(ms).get(Ym(i));return await n.done,s}catch(e){if(e instanceof qn)mn.warn(e.message);else{const n=Bn.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});mn.warn(n.message)}}}async function Lp(i,e){try{const s=(await Qm()).transaction(ms,"readwrite");await s.objectStore(ms).put(e,Ym(i)),await s.done}catch(n){if(n instanceof qn)mn.warn(n.message);else{const s=Bn.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});mn.warn(s.message)}}}function Ym(i){return`${i.name}!${i.options.appId}`}/**
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
 */const vE=1024,yE=30;class wE{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new SE(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){var e,n;try{const l=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),u=Mp();if(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===u||this._heartbeatsCache.heartbeats.some(d=>d.date===u))return;if(this._heartbeatsCache.heartbeats.push({date:u,agent:l}),this._heartbeatsCache.heartbeats.length>yE){const d=CE(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(d,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(s){mn.warn(s)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Mp(),{heartbeatsToSend:s,unsentEntries:l}=EE(this._heartbeatsCache.heartbeats),u=tl(JSON.stringify({version:2,heartbeats:s}));return this._heartbeatsCache.lastSentHeartbeatDate=n,l.length>0?(this._heartbeatsCache.heartbeats=l,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),u}catch(n){return mn.warn(n),""}}}function Mp(){return new Date().toISOString().substring(0,10)}function EE(i,e=vE){const n=[];let s=i.slice();for(const l of i){const u=n.find(d=>d.agent===l.agent);if(u){if(u.dates.push(l.date),bp(n)>e){u.dates.pop();break}}else if(n.push({agent:l.agent,dates:[l.date]}),bp(n)>e){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class SE{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return sw()?ow().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await _E(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const l=await this.read();return Lp(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:l.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const l=await this.read();return Lp(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:l.lastSentHeartbeatDate,heartbeats:[...l.heartbeats,...e.heartbeats]})}else return}}function bp(i){return tl(JSON.stringify({version:2,heartbeats:i})).length}function CE(i){if(i.length===0)return-1;let e=0,n=i[0].date;for(let s=1;s<i.length;s++)i[s].date<n&&(n=i[s].date,e=s);return e}/**
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
 */function IE(i){ii(new gr("platform-logger",e=>new bw(e),"PRIVATE")),ii(new gr("heartbeat",e=>new wE(e),"PRIVATE")),Hn(rc,Op,i),Hn(rc,Op,"esm2017"),Hn("fire-js","")}IE("");var kE="firebase",TE="11.7.1";/**
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
 */Hn(kE,TE,"app");function Ac(i,e){var n={};for(var s in i)Object.prototype.hasOwnProperty.call(i,s)&&e.indexOf(s)<0&&(n[s]=i[s]);if(i!=null&&typeof Object.getOwnPropertySymbols=="function")for(var l=0,s=Object.getOwnPropertySymbols(i);l<s.length;l++)e.indexOf(s[l])<0&&Object.prototype.propertyIsEnumerable.call(i,s[l])&&(n[s[l]]=i[s[l]]);return n}function Xm(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const NE=Xm,Jm=new ks("auth","Firebase",Xm());/**
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
 */const sl=new Nc("@firebase/auth");function RE(i,...e){sl.logLevel<=ce.WARN&&sl.warn(`Auth (${fi}): ${i}`,...e)}function Yo(i,...e){sl.logLevel<=ce.ERROR&&sl.error(`Auth (${fi}): ${i}`,...e)}/**
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
 */function Jt(i,...e){throw Oc(i,...e)}function jt(i,...e){return Oc(i,...e)}function xc(i,e,n){const s=Object.assign(Object.assign({},NE()),{[e]:n});return new ks("auth","Firebase",s).create(e,{appName:i.name})}function pr(i){return xc(i,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function PE(i,e,n){const s=n;if(!(e instanceof s))throw s.name!==e.constructor.name&&Jt(i,"argument-error"),xc(i,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Oc(i,...e){if(typeof i!="string"){const n=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=i.name),i._errorFactory.create(n,...s)}return Jm.create(i,...e)}function Q(i,e,...n){if(!i)throw Oc(e,...n)}function dn(i){const e="INTERNAL ASSERTION FAILED: "+i;throw Yo(e),new Error(e)}function gn(i,e){i||dn(e)}/**
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
 */function oc(){var i;return typeof self<"u"&&((i=self.location)===null||i===void 0?void 0:i.href)||""}function AE(){return Fp()==="http:"||Fp()==="https:"}function Fp(){var i;return typeof self<"u"&&((i=self.location)===null||i===void 0?void 0:i.protocol)||null}/**
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
 */function xE(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(AE()||nw()||"connection"in navigator)?navigator.onLine:!0}function OE(){if(typeof navigator>"u")return null;const i=navigator;return i.languages&&i.languages[0]||i.language||null}/**
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
 */class Ts{constructor(e,n){this.shortDelay=e,this.longDelay=n,gn(n>e,"Short delay should be less than long delay!"),this.isMobile=Tc()||Vm()}get(){return xE()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Dc(i,e){gn(i.emulator,"Emulator should always be set here");const{url:n}=i.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class Zm{static initialize(e,n,s){this.fetchImpl=e,n&&(this.headersImpl=n),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;dn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;dn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;dn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const DE={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const LE=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],ME=new Ts(3e4,6e4);function Lc(i,e){return i.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:i.tenantId}):e}async function pi(i,e,n,s,l={}){return eg(i,l,async()=>{let u={},d={};s&&(e==="GET"?d=s:u={body:JSON.stringify(s)});const f=hi(Object.assign({key:i.config.apiKey},d)).slice(1),m=await i._getAdditionalHeaders();m["Content-Type"]="application/json",i.languageCode&&(m["X-Firebase-Locale"]=i.languageCode);const g=Object.assign({method:e,headers:m},u);return tw()||(g.referrerPolicy="no-referrer"),i.emulatorConfig&&Tl(i.emulatorConfig.host)&&(g.credentials="include"),Zm.fetch()(await tg(i,i.config.apiHost,n,f),g)})}async function eg(i,e,n){i._canInitEmulator=!1;const s=Object.assign(Object.assign({},DE),e);try{const l=new FE(i),u=await Promise.race([n(),l.promise]);l.clearNetworkTimeout();const d=await u.json();if("needConfirmation"in d)throw $o(i,"account-exists-with-different-credential",d);if(u.ok&&!("errorMessage"in d))return d;{const f=u.ok?d.errorMessage:d.error.message,[m,g]=f.split(" : ");if(m==="FEDERATED_USER_ID_ALREADY_LINKED")throw $o(i,"credential-already-in-use",d);if(m==="EMAIL_EXISTS")throw $o(i,"email-already-in-use",d);if(m==="USER_DISABLED")throw $o(i,"user-disabled",d);const E=s[m]||m.toLowerCase().replace(/[_\s]+/g,"-");if(g)throw xc(i,E,g);Jt(i,E)}}catch(l){if(l instanceof qn)throw l;Jt(i,"network-request-failed",{message:String(l)})}}async function bE(i,e,n,s,l={}){const u=await pi(i,e,n,s,l);return"mfaPendingCredential"in u&&Jt(i,"multi-factor-auth-required",{_serverResponse:u}),u}async function tg(i,e,n,s){const l=`${e}${n}?${s}`,u=i,d=u.config.emulator?Dc(i.config,l):`${i.config.apiScheme}://${l}`;return LE.includes(n)&&(await u._persistenceManagerAvailable,u._getPersistenceType()==="COOKIE")?u._getPersistence()._getFinalTarget(d).toString():d}class FE{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,s)=>{this.timer=setTimeout(()=>s(jt(this.auth,"network-request-failed")),ME.get())})}}function $o(i,e,n){const s={appName:i.name};n.email&&(s.email=n.email),n.phoneNumber&&(s.phoneNumber=n.phoneNumber);const l=jt(i,e,s);return l.customData._tokenResponse=n,l}/**
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
 */async function UE(i,e){return pi(i,"POST","/v1/accounts:delete",e)}async function ol(i,e){return pi(i,"POST","/v1/accounts:lookup",e)}/**
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
 */function as(i){if(i)try{const e=new Date(Number(i));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function zE(i,e=!1){const n=yt(i),s=await n.getIdToken(e),l=Mc(s);Q(l&&l.exp&&l.auth_time&&l.iat,n.auth,"internal-error");const u=typeof l.firebase=="object"?l.firebase:void 0,d=u==null?void 0:u.sign_in_provider;return{claims:l,token:s,authTime:as(Hu(l.auth_time)),issuedAtTime:as(Hu(l.iat)),expirationTime:as(Hu(l.exp)),signInProvider:d||null,signInSecondFactor:(u==null?void 0:u.sign_in_second_factor)||null}}function Hu(i){return Number(i)*1e3}function Mc(i){const[e,n,s]=i.split(".");if(e===void 0||n===void 0||s===void 0)return Yo("JWT malformed, contained fewer than 3 sections"),null;try{const l=nl(n);return l?JSON.parse(l):(Yo("Failed to decode base64 JWT payload"),null)}catch(l){return Yo("Caught error parsing JWT payload as JSON",l==null?void 0:l.toString()),null}}function Up(i){const e=Mc(i);return Q(e,"internal-error"),Q(typeof e.exp<"u","internal-error"),Q(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function gs(i,e,n=!1){if(n)return e;try{return await e}catch(s){throw s instanceof qn&&WE(s)&&i.auth.currentUser===i&&await i.auth.signOut(),s}}function WE({code:i}){return i==="auth/user-disabled"||i==="auth/user-token-expired"}/**
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
 */class jE{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const s=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),s}else{this.errorBackoff=3e4;const l=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,l)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class lc{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=as(this.lastLoginAt),this.creationTime=as(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function ll(i){var e;const n=i.auth,s=await i.getIdToken(),l=await gs(i,ol(n,{idToken:s}));Q(l==null?void 0:l.users.length,n,"internal-error");const u=l.users[0];i._notifyReloadListener(u);const d=!((e=u.providerUserInfo)===null||e===void 0)&&e.length?ng(u.providerUserInfo):[],f=BE(i.providerData,d),m=i.isAnonymous,g=!(i.email&&u.passwordHash)&&!(f!=null&&f.length),E=m?g:!1,y={uid:u.localId,displayName:u.displayName||null,photoURL:u.photoUrl||null,email:u.email||null,emailVerified:u.emailVerified||!1,phoneNumber:u.phoneNumber||null,tenantId:u.tenantId||null,providerData:f,metadata:new lc(u.createdAt,u.lastLoginAt),isAnonymous:E};Object.assign(i,y)}async function VE(i){const e=yt(i);await ll(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function BE(i,e){return[...i.filter(s=>!e.some(l=>l.providerId===s.providerId)),...e]}function ng(i){return i.map(e=>{var{providerId:n}=e,s=Ac(e,["providerId"]);return{providerId:n,uid:s.rawId||"",displayName:s.displayName||null,email:s.email||null,phoneNumber:s.phoneNumber||null,photoURL:s.photoUrl||null}})}/**
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
 */async function HE(i,e){const n=await eg(i,{},async()=>{const s=hi({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:l,apiKey:u}=i.config,d=await tg(i,l,"/v1/token",`key=${u}`),f=await i._getAdditionalHeaders();return f["Content-Type"]="application/x-www-form-urlencoded",Zm.fetch()(d,{method:"POST",headers:f,body:s})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function $E(i,e){return pi(i,"POST","/v2/accounts:revokeToken",Lc(i,e))}/**
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
 */class Xr{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){Q(e.idToken,"internal-error"),Q(typeof e.idToken<"u","internal-error"),Q(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Up(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){Q(e.length!==0,"internal-error");const n=Up(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(Q(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:s,refreshToken:l,expiresIn:u}=await HE(e,n);this.updateTokensAndExpiration(s,l,Number(u))}updateTokensAndExpiration(e,n,s){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,n){const{refreshToken:s,accessToken:l,expirationTime:u}=n,d=new Xr;return s&&(Q(typeof s=="string","internal-error",{appName:e}),d.refreshToken=s),l&&(Q(typeof l=="string","internal-error",{appName:e}),d.accessToken=l),u&&(Q(typeof u=="number","internal-error",{appName:e}),d.expirationTime=u),d}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Xr,this.toJSON())}_performRefresh(){return dn("not implemented")}}/**
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
 */function Fn(i,e){Q(typeof i=="string"||typeof i>"u","internal-error",{appName:e})}class zt{constructor(e){var{uid:n,auth:s,stsTokenManager:l}=e,u=Ac(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new jE(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=s,this.stsTokenManager=l,this.accessToken=l.accessToken,this.displayName=u.displayName||null,this.email=u.email||null,this.emailVerified=u.emailVerified||!1,this.phoneNumber=u.phoneNumber||null,this.photoURL=u.photoURL||null,this.isAnonymous=u.isAnonymous||!1,this.tenantId=u.tenantId||null,this.providerData=u.providerData?[...u.providerData]:[],this.metadata=new lc(u.createdAt||void 0,u.lastLoginAt||void 0)}async getIdToken(e){const n=await gs(this,this.stsTokenManager.getToken(this.auth,e));return Q(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return zE(this,e)}reload(){return VE(this)}_assign(e){this!==e&&(Q(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new zt(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){Q(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),n&&await ll(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Ft(this.auth.app))return Promise.reject(pr(this.auth));const e=await this.getIdToken();return await gs(this,UE(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var s,l,u,d,f,m,g,E;const y=(s=n.displayName)!==null&&s!==void 0?s:void 0,C=(l=n.email)!==null&&l!==void 0?l:void 0,x=(u=n.phoneNumber)!==null&&u!==void 0?u:void 0,L=(d=n.photoURL)!==null&&d!==void 0?d:void 0,j=(f=n.tenantId)!==null&&f!==void 0?f:void 0,$=(m=n._redirectEventId)!==null&&m!==void 0?m:void 0,Te=(g=n.createdAt)!==null&&g!==void 0?g:void 0,xe=(E=n.lastLoginAt)!==null&&E!==void 0?E:void 0,{uid:Ne,emailVerified:Re,isAnonymous:nt,providerData:De,stsTokenManager:Be}=n;Q(Ne&&Be,e,"internal-error");const rt=Xr.fromJSON(this.name,Be);Q(typeof Ne=="string",e,"internal-error"),Fn(y,e.name),Fn(C,e.name),Q(typeof Re=="boolean",e,"internal-error"),Q(typeof nt=="boolean",e,"internal-error"),Fn(x,e.name),Fn(L,e.name),Fn(j,e.name),Fn($,e.name),Fn(Te,e.name),Fn(xe,e.name);const wt=new zt({uid:Ne,auth:e,email:C,emailVerified:Re,displayName:y,isAnonymous:nt,photoURL:L,phoneNumber:x,tenantId:j,stsTokenManager:rt,createdAt:Te,lastLoginAt:xe});return De&&Array.isArray(De)&&(wt.providerData=De.map(Rt=>Object.assign({},Rt))),$&&(wt._redirectEventId=$),wt}static async _fromIdTokenResponse(e,n,s=!1){const l=new Xr;l.updateFromServerResponse(n);const u=new zt({uid:n.localId,auth:e,stsTokenManager:l,isAnonymous:s});return await ll(u),u}static async _fromGetAccountInfoResponse(e,n,s){const l=n.users[0];Q(l.localId!==void 0,"internal-error");const u=l.providerUserInfo!==void 0?ng(l.providerUserInfo):[],d=!(l.email&&l.passwordHash)&&!(u!=null&&u.length),f=new Xr;f.updateFromIdToken(s);const m=new zt({uid:l.localId,auth:e,stsTokenManager:f,isAnonymous:d}),g={uid:l.localId,displayName:l.displayName||null,photoURL:l.photoUrl||null,email:l.email||null,emailVerified:l.emailVerified||!1,phoneNumber:l.phoneNumber||null,tenantId:l.tenantId||null,providerData:u,metadata:new lc(l.createdAt,l.lastLoginAt),isAnonymous:!(l.email&&l.passwordHash)&&!(u!=null&&u.length)};return Object.assign(m,g),m}}/**
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
 */const zp=new Map;function hn(i){gn(i instanceof Function,"Expected a class definition");let e=zp.get(i);return e?(gn(e instanceof i,"Instance stored in cache mismatched with class"),e):(e=new i,zp.set(i,e),e)}/**
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
 */class rg{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}rg.type="NONE";const Wp=rg;/**
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
 */function Xo(i,e,n){return`firebase:${i}:${e}:${n}`}class Jr{constructor(e,n,s){this.persistence=e,this.auth=n,this.userKey=s;const{config:l,name:u}=this.auth;this.fullUserKey=Xo(this.userKey,l.apiKey,u),this.fullPersistenceKey=Xo("persistence",l.apiKey,u),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const n=await ol(this.auth,{idToken:e}).catch(()=>{});return n?zt._fromGetAccountInfoResponse(this.auth,n,e):null}return zt._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,s="authUser"){if(!n.length)return new Jr(hn(Wp),e,s);const l=(await Promise.all(n.map(async g=>{if(await g._isAvailable())return g}))).filter(g=>g);let u=l[0]||hn(Wp);const d=Xo(s,e.config.apiKey,e.name);let f=null;for(const g of n)try{const E=await g._get(d);if(E){let y;if(typeof E=="string"){const C=await ol(e,{idToken:E}).catch(()=>{});if(!C)break;y=await zt._fromGetAccountInfoResponse(e,C,E)}else y=zt._fromJSON(e,E);g!==u&&(f=y),u=g;break}}catch{}const m=l.filter(g=>g._shouldAllowMigration);return!u._shouldAllowMigration||!m.length?new Jr(u,e,s):(u=m[0],f&&await u._set(d,f.toJSON()),await Promise.all(n.map(async g=>{if(g!==u)try{await g._remove(d)}catch{}})),new Jr(u,e,s))}}/**
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
 */function jp(i){const e=i.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(lg(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(ig(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(ug(e))return"Blackberry";if(cg(e))return"Webos";if(sg(e))return"Safari";if((e.includes("chrome/")||og(e))&&!e.includes("edge/"))return"Chrome";if(ag(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=i.match(n);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function ig(i=tt()){return/firefox\//i.test(i)}function sg(i=tt()){const e=i.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function og(i=tt()){return/crios\//i.test(i)}function lg(i=tt()){return/iemobile/i.test(i)}function ag(i=tt()){return/android/i.test(i)}function ug(i=tt()){return/blackberry/i.test(i)}function cg(i=tt()){return/webos/i.test(i)}function bc(i=tt()){return/iphone|ipad|ipod/i.test(i)||/macintosh/i.test(i)&&/mobile/i.test(i)}function GE(i=tt()){var e;return bc(i)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function KE(){return rw()&&document.documentMode===10}function dg(i=tt()){return bc(i)||ag(i)||cg(i)||ug(i)||/windows phone/i.test(i)||lg(i)}/**
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
 */function hg(i,e=[]){let n;switch(i){case"Browser":n=jp(tt());break;case"Worker":n=`${jp(tt())}-${i}`;break;default:n=i}const s=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${fi}/${s}`}/**
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
 */class qE{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const s=u=>new Promise((d,f)=>{try{const m=e(u);d(m)}catch(m){f(m)}});s.onAbort=n,this.queue.push(s);const l=this.queue.length-1;return()=>{this.queue[l]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const s of this.queue)await s(e),s.onAbort&&n.push(s.onAbort)}catch(s){n.reverse();for(const l of n)try{l()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s==null?void 0:s.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
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
 */async function QE(i,e={}){return pi(i,"GET","/v2/passwordPolicy",Lc(i,e))}/**
 * @license
 * Copyright 2023 Google LLC
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
 */const YE=6;class XE{constructor(e){var n,s,l,u;const d=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=d.minPasswordLength)!==null&&n!==void 0?n:YE,d.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=d.maxPasswordLength),d.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=d.containsLowercaseCharacter),d.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=d.containsUppercaseCharacter),d.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=d.containsNumericCharacter),d.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=d.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(l=(s=e.allowedNonAlphanumericCharacters)===null||s===void 0?void 0:s.join(""))!==null&&l!==void 0?l:"",this.forceUpgradeOnSignin=(u=e.forceUpgradeOnSignin)!==null&&u!==void 0?u:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,s,l,u,d,f;const m={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,m),this.validatePasswordCharacterOptions(e,m),m.isValid&&(m.isValid=(n=m.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),m.isValid&&(m.isValid=(s=m.meetsMaxPasswordLength)!==null&&s!==void 0?s:!0),m.isValid&&(m.isValid=(l=m.containsLowercaseLetter)!==null&&l!==void 0?l:!0),m.isValid&&(m.isValid=(u=m.containsUppercaseLetter)!==null&&u!==void 0?u:!0),m.isValid&&(m.isValid=(d=m.containsNumericCharacter)!==null&&d!==void 0?d:!0),m.isValid&&(m.isValid=(f=m.containsNonAlphanumericCharacter)!==null&&f!==void 0?f:!0),m}validatePasswordLengthOptions(e,n){const s=this.customStrengthOptions.minPasswordLength,l=this.customStrengthOptions.maxPasswordLength;s&&(n.meetsMinPasswordLength=e.length>=s),l&&(n.meetsMaxPasswordLength=e.length<=l)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let s;for(let l=0;l<e.length;l++)s=e.charAt(l),this.updatePasswordCharacterOptionsStatuses(n,s>="a"&&s<="z",s>="A"&&s<="Z",s>="0"&&s<="9",this.allowedNonAlphanumericCharacters.includes(s))}updatePasswordCharacterOptionsStatuses(e,n,s,l,u){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=s)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=l)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=u))}}/**
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
 */class JE{constructor(e,n,s,l){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=s,this.config=l,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Vp(this),this.idTokenSubscription=new Vp(this),this.beforeStateQueue=new qE(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Jm,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=l.sdkClientVersion,this._persistenceManagerAvailable=new Promise(u=>this._resolvePersistenceManagerAvailable=u)}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=hn(n)),this._initializationPromise=this.queue(async()=>{var s,l,u;if(!this._deleted&&(this.persistenceManager=await Jr.create(this,e),(s=this._resolvePersistenceManagerAvailable)===null||s===void 0||s.call(this),!this._deleted)){if(!((l=this._popupRedirectResolver)===null||l===void 0)&&l._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((u=this.currentUser)===null||u===void 0?void 0:u.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await ol(this,{idToken:e}),s=await zt._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(s)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(Ft(this.app)){const d=this.app.settings.authIdToken;return d?new Promise(f=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(d).then(f,f))}):this.directlySetCurrentUser(null)}const s=await this.assertedPersistence.getCurrentUser();let l=s,u=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const d=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,f=l==null?void 0:l._redirectEventId,m=await this.tryRedirectSignIn(e);(!d||d===f)&&(m!=null&&m.user)&&(l=m.user,u=!0)}if(!l)return this.directlySetCurrentUser(null);if(!l._redirectEventId){if(u)try{await this.beforeStateQueue.runMiddleware(l)}catch(d){l=s,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(d))}return l?this.reloadAndSetCurrentUserOrClear(l):this.directlySetCurrentUser(null)}return Q(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===l._redirectEventId?this.directlySetCurrentUser(l):this.reloadAndSetCurrentUserOrClear(l)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await ll(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=OE()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Ft(this.app))return Promise.reject(pr(this));const n=e?yt(e):null;return n&&Q(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&Q(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Ft(this.app)?Promise.reject(pr(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Ft(this.app)?Promise.reject(pr(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(hn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await QE(this),n=new XE(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new ks("auth","Firebase",e())}onAuthStateChanged(e,n,s){return this.registerStateListener(this.authStateSubscription,e,n,s)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,s){return this.registerStateListener(this.idTokenSubscription,e,n,s)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const s=this.onAuthStateChanged(()=>{s(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),s={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(s.tenantId=this.tenantId),await $E(this,s)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const s=await this.getOrInitRedirectPersistenceManager(n);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&hn(e)||this._popupRedirectResolver;Q(n,this,"argument-error"),this.redirectPersistenceManager=await Jr.create(this,[hn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,s;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((s=this.redirectUser)===null||s===void 0?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const s=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==s&&(this.lastNotifiedUid=s,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,s,l){if(this._deleted)return()=>{};const u=typeof n=="function"?n:n.next.bind(n);let d=!1;const f=this._isInitialized?Promise.resolve():this._initializationPromise;if(Q(f,this,"internal-error"),f.then(()=>{d||u(this.currentUser)}),typeof n=="function"){const m=e.addObserver(n,s,l);return()=>{d=!0,m()}}else{const m=e.addObserver(n);return()=>{d=!0,m()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return Q(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=hg(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const s=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());s&&(n["X-Firebase-Client"]=s);const l=await this._getAppCheckToken();return l&&(n["X-Firebase-AppCheck"]=l),n}async _getAppCheckToken(){var e;if(Ft(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&RE(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Nl(i){return yt(i)}class Vp{constructor(e){this.auth=e,this.observer=null,this.addObserver=fw(n=>this.observer=n)}get next(){return Q(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let Fc={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function ZE(i){Fc=i}function e0(i){return Fc.loadJS(i)}function t0(){return Fc.gapiScript}function n0(i){return`__${i}${Math.floor(Math.random()*1e6)}`}/**
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
 */function r0(i,e){const n=Pc(i,"auth");if(n.isInitialized()){const l=n.getImmediate(),u=n.getOptions();if(mr(u,e??{}))return l;Jt(l,"already-initialized")}return n.initialize({options:e})}function i0(i,e){const n=(e==null?void 0:e.persistence)||[],s=(Array.isArray(n)?n:[n]).map(hn);e!=null&&e.errorMap&&i._updateErrorMap(e.errorMap),i._initializeWithPersistence(s,e==null?void 0:e.popupRedirectResolver)}function s0(i,e,n){const s=Nl(i);Q(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const l=!1,u=fg(e),{host:d,port:f}=o0(e),m=f===null?"":`:${f}`,g={url:`${u}//${d}${m}/`},E=Object.freeze({host:d,port:f,protocol:u.replace(":",""),options:Object.freeze({disableWarnings:l})});if(!s._canInitEmulator){Q(s.config.emulator&&s.emulatorConfig,s,"emulator-config-failed"),Q(mr(g,s.config.emulator)&&mr(E,s.emulatorConfig),s,"emulator-config-failed");return}s.config.emulator=g,s.emulatorConfig=E,s.settings.appVerificationDisabledForTesting=!0,l0(),Tl(d)&&Hm(`${u}//${d}${m}`)}function fg(i){const e=i.indexOf(":");return e<0?"":i.substr(0,e+1)}function o0(i){const e=fg(i),n=/(\/\/)?([^?#/]+)/.exec(i.substr(e.length));if(!n)return{host:"",port:null};const s=n[2].split("@").pop()||"",l=/^(\[[^\]]+\])(:|$)/.exec(s);if(l){const u=l[1];return{host:u,port:Bp(s.substr(u.length+1))}}else{const[u,d]=s.split(":");return{host:u,port:Bp(d)}}}function Bp(i){if(!i)return null;const e=Number(i);return isNaN(e)?null:e}function l0(){function i(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",i):i())}/**
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
 */class pg{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return dn("not implemented")}_getIdTokenResponse(e){return dn("not implemented")}_linkToIdToken(e,n){return dn("not implemented")}_getReauthenticationResolver(e){return dn("not implemented")}}/**
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
 */async function Zr(i,e){return bE(i,"POST","/v1/accounts:signInWithIdp",Lc(i,e))}/**
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
 */const a0="http://localhost";class _r extends pg{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new _r(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Jt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:l}=n,u=Ac(n,["providerId","signInMethod"]);if(!s||!l)return null;const d=new _r(s,l);return d.idToken=u.idToken||void 0,d.accessToken=u.accessToken||void 0,d.secret=u.secret,d.nonce=u.nonce,d.pendingToken=u.pendingToken||null,d}_getIdTokenResponse(e){const n=this.buildRequest();return Zr(e,n)}_linkToIdToken(e,n){const s=this.buildRequest();return s.idToken=n,Zr(e,s)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Zr(e,n)}buildRequest(){const e={requestUri:a0,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=hi(n)}return e}}/**
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
 */class Uc{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Ns extends Uc{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class Un extends Ns{constructor(){super("facebook.com")}static credential(e){return _r._fromParams({providerId:Un.PROVIDER_ID,signInMethod:Un.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Un.credentialFromTaggedObject(e)}static credentialFromError(e){return Un.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Un.credential(e.oauthAccessToken)}catch{return null}}}Un.FACEBOOK_SIGN_IN_METHOD="facebook.com";Un.PROVIDER_ID="facebook.com";/**
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
 */class cn extends Ns{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return _r._fromParams({providerId:cn.PROVIDER_ID,signInMethod:cn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return cn.credentialFromTaggedObject(e)}static credentialFromError(e){return cn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:s}=e;if(!n&&!s)return null;try{return cn.credential(n,s)}catch{return null}}}cn.GOOGLE_SIGN_IN_METHOD="google.com";cn.PROVIDER_ID="google.com";/**
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
 */class zn extends Ns{constructor(){super("github.com")}static credential(e){return _r._fromParams({providerId:zn.PROVIDER_ID,signInMethod:zn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return zn.credentialFromTaggedObject(e)}static credentialFromError(e){return zn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return zn.credential(e.oauthAccessToken)}catch{return null}}}zn.GITHUB_SIGN_IN_METHOD="github.com";zn.PROVIDER_ID="github.com";/**
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
 */class Wn extends Ns{constructor(){super("twitter.com")}static credential(e,n){return _r._fromParams({providerId:Wn.PROVIDER_ID,signInMethod:Wn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Wn.credentialFromTaggedObject(e)}static credentialFromError(e){return Wn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:s}=e;if(!n||!s)return null;try{return Wn.credential(n,s)}catch{return null}}}Wn.TWITTER_SIGN_IN_METHOD="twitter.com";Wn.PROVIDER_ID="twitter.com";/**
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
 */class si{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,s,l=!1){const u=await zt._fromIdTokenResponse(e,s,l),d=Hp(s);return new si({user:u,providerId:d,_tokenResponse:s,operationType:n})}static async _forOperation(e,n,s){await e._updateTokensIfNecessary(s,!0);const l=Hp(s);return new si({user:e,providerId:l,_tokenResponse:s,operationType:n})}}function Hp(i){return i.providerId?i.providerId:"phoneNumber"in i?"phone":null}/**
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
 */class al extends qn{constructor(e,n,s,l){var u;super(n.code,n.message),this.operationType=s,this.user=l,Object.setPrototypeOf(this,al.prototype),this.customData={appName:e.name,tenantId:(u=e.tenantId)!==null&&u!==void 0?u:void 0,_serverResponse:n.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,n,s,l){return new al(e,n,s,l)}}function mg(i,e,n,s){return(e==="reauthenticate"?n._getReauthenticationResolver(i):n._getIdTokenResponse(i)).catch(u=>{throw u.code==="auth/multi-factor-auth-required"?al._fromErrorAndOperation(i,u,e,s):u})}async function u0(i,e,n=!1){const s=await gs(i,e._linkToIdToken(i.auth,await i.getIdToken()),n);return si._forOperation(i,"link",s)}/**
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
 */async function c0(i,e,n=!1){const{auth:s}=i;if(Ft(s.app))return Promise.reject(pr(s));const l="reauthenticate";try{const u=await gs(i,mg(s,l,e,i),n);Q(u.idToken,s,"internal-error");const d=Mc(u.idToken);Q(d,s,"internal-error");const{sub:f}=d;return Q(i.uid===f,s,"user-mismatch"),si._forOperation(i,l,u)}catch(u){throw(u==null?void 0:u.code)==="auth/user-not-found"&&Jt(s,"user-mismatch"),u}}/**
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
 */async function d0(i,e,n=!1){if(Ft(i.app))return Promise.reject(pr(i));const s="signIn",l=await mg(i,s,e),u=await si._fromIdTokenResponse(i,s,l);return n||await i._updateCurrentUser(u.user),u}function h0(i,e,n,s){return yt(i).onIdTokenChanged(e,n,s)}function f0(i,e,n){return yt(i).beforeAuthStateChanged(e,n)}function p0(i){return yt(i).signOut()}const ul="__sak";/**
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
 */class gg{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(ul,"1"),this.storage.removeItem(ul),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const m0=1e3,g0=10;class _g extends gg{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=dg(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const s=this.storage.getItem(n),l=this.localCache[n];s!==l&&e(n,l,s)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((d,f,m)=>{this.notifyListeners(d,m)});return}const s=e.key;n?this.detachListener():this.stopPolling();const l=()=>{const d=this.storage.getItem(s);!n&&this.localCache[s]===d||this.notifyListeners(s,d)},u=this.storage.getItem(s);KE()&&u!==e.newValue&&e.newValue!==e.oldValue?setTimeout(l,g0):l()}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const l of Array.from(s))l(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:s}),!0)})},m0)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}_g.type="LOCAL";const _0=_g;/**
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
 */class vg extends gg{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}vg.type="SESSION";const yg=vg;/**
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
 */function v0(i){return Promise.all(i.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class Rl{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(l=>l.isListeningto(e));if(n)return n;const s=new Rl(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:s,eventType:l,data:u}=n.data,d=this.handlersMap[l];if(!(d!=null&&d.size))return;n.ports[0].postMessage({status:"ack",eventId:s,eventType:l});const f=Array.from(d).map(async g=>g(n.origin,u)),m=await v0(f);n.ports[0].postMessage({status:"done",eventId:s,eventType:l,response:m})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Rl.receivers=[];/**
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
 */function zc(i="",e=10){let n="";for(let s=0;s<e;s++)n+=Math.floor(Math.random()*10);return i+n}/**
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
 */class y0{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,s=50){const l=typeof MessageChannel<"u"?new MessageChannel:null;if(!l)throw new Error("connection_unavailable");let u,d;return new Promise((f,m)=>{const g=zc("",20);l.port1.start();const E=setTimeout(()=>{m(new Error("unsupported_event"))},s);d={messageChannel:l,onMessage(y){const C=y;if(C.data.eventId===g)switch(C.data.status){case"ack":clearTimeout(E),u=setTimeout(()=>{m(new Error("timeout"))},3e3);break;case"done":clearTimeout(u),f(C.data.response);break;default:clearTimeout(E),clearTimeout(u),m(new Error("invalid_response"));break}}},this.handlers.add(d),l.port1.addEventListener("message",d.onMessage),this.target.postMessage({eventType:e,eventId:g,data:n},[l.port2])}).finally(()=>{d&&this.removeMessageHandler(d)})}}/**
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
 */function Xt(){return window}function w0(i){Xt().location.href=i}/**
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
 */function wg(){return typeof Xt().WorkerGlobalScope<"u"&&typeof Xt().importScripts=="function"}async function E0(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function S0(){var i;return((i=navigator==null?void 0:navigator.serviceWorker)===null||i===void 0?void 0:i.controller)||null}function C0(){return wg()?self:null}/**
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
 */const Eg="firebaseLocalStorageDb",I0=1,cl="firebaseLocalStorage",Sg="fbase_key";class Rs{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Pl(i,e){return i.transaction([cl],e?"readwrite":"readonly").objectStore(cl)}function k0(){const i=indexedDB.deleteDatabase(Eg);return new Rs(i).toPromise()}function ac(){const i=indexedDB.open(Eg,I0);return new Promise((e,n)=>{i.addEventListener("error",()=>{n(i.error)}),i.addEventListener("upgradeneeded",()=>{const s=i.result;try{s.createObjectStore(cl,{keyPath:Sg})}catch(l){n(l)}}),i.addEventListener("success",async()=>{const s=i.result;s.objectStoreNames.contains(cl)?e(s):(s.close(),await k0(),e(await ac()))})})}async function $p(i,e,n){const s=Pl(i,!0).put({[Sg]:e,value:n});return new Rs(s).toPromise()}async function T0(i,e){const n=Pl(i,!1).get(e),s=await new Rs(n).toPromise();return s===void 0?null:s.value}function Gp(i,e){const n=Pl(i,!0).delete(e);return new Rs(n).toPromise()}const N0=800,R0=3;class Cg{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await ac(),this.db)}async _withRetries(e){let n=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(n++>R0)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return wg()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Rl._getInstance(C0()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await E0(),!this.activeServiceWorker)return;this.sender=new y0(this.activeServiceWorker);const s=await this.sender._send("ping",{},800);s&&!((e=s[0])===null||e===void 0)&&e.fulfilled&&!((n=s[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||S0()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await ac();return await $p(e,ul,"1"),await Gp(e,ul),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(s=>$p(s,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(s=>T0(s,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Gp(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(l=>{const u=Pl(l,!1).getAll();return new Rs(u).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],s=new Set;if(e.length!==0)for(const{fbase_key:l,value:u}of e)s.add(l),JSON.stringify(this.localCache[l])!==JSON.stringify(u)&&(this.notifyListeners(l,u),n.push(l));for(const l of Object.keys(this.localCache))this.localCache[l]&&!s.has(l)&&(this.notifyListeners(l,null),n.push(l));return n}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const l of Array.from(s))l(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),N0)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Cg.type="LOCAL";const P0=Cg;new Ts(3e4,6e4);/**
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
 */function Ig(i,e){return e?hn(e):(Q(i._popupRedirectResolver,i,"argument-error"),i._popupRedirectResolver)}/**
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
 */class Wc extends pg{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Zr(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Zr(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Zr(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function A0(i){return d0(i.auth,new Wc(i),i.bypassAuthState)}function x0(i){const{auth:e,user:n}=i;return Q(n,e,"internal-error"),c0(n,new Wc(i),i.bypassAuthState)}async function O0(i){const{auth:e,user:n}=i;return Q(n,e,"internal-error"),u0(n,new Wc(i),i.bypassAuthState)}/**
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
 */class kg{constructor(e,n,s,l,u=!1){this.auth=e,this.resolver=s,this.user=l,this.bypassAuthState=u,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:s,postBody:l,tenantId:u,error:d,type:f}=e;if(d){this.reject(d);return}const m={auth:this.auth,requestUri:n,sessionId:s,tenantId:u||void 0,postBody:l||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(f)(m))}catch(g){this.reject(g)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return A0;case"linkViaPopup":case"linkViaRedirect":return O0;case"reauthViaPopup":case"reauthViaRedirect":return x0;default:Jt(this.auth,"internal-error")}}resolve(e){gn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){gn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const D0=new Ts(2e3,1e4);async function L0(i,e,n){if(Ft(i.app))return Promise.reject(jt(i,"operation-not-supported-in-this-environment"));const s=Nl(i);PE(i,e,Uc);const l=Ig(s,n);return new hr(s,"signInViaPopup",e,l).executeNotNull()}class hr extends kg{constructor(e,n,s,l,u){super(e,n,l,u),this.provider=s,this.authWindow=null,this.pollId=null,hr.currentPopupAction&&hr.currentPopupAction.cancel(),hr.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return Q(e,this.auth,"internal-error"),e}async onExecution(){gn(this.filter.length===1,"Popup operations only handle one event");const e=zc();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(jt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(jt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,hr.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,s;if(!((s=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||s===void 0)&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(jt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,D0.get())};e()}}hr.currentPopupAction=null;/**
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
 */const M0="pendingRedirect",Jo=new Map;class b0 extends kg{constructor(e,n,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,s),this.eventId=null}async execute(){let e=Jo.get(this.auth._key());if(!e){try{const s=await F0(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(n){e=()=>Promise.reject(n)}Jo.set(this.auth._key(),e)}return this.bypassAuthState||Jo.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function F0(i,e){const n=W0(e),s=z0(i);if(!await s._isAvailable())return!1;const l=await s._get(n)==="true";return await s._remove(n),l}function U0(i,e){Jo.set(i._key(),e)}function z0(i){return hn(i._redirectPersistence)}function W0(i){return Xo(M0,i.config.apiKey,i.name)}async function j0(i,e,n=!1){if(Ft(i.app))return Promise.reject(pr(i));const s=Nl(i),l=Ig(s,e),d=await new b0(s,l,n).execute();return d&&!n&&(delete d.user._redirectEventId,await s._persistUserIfCurrent(d.user),await s._setRedirectUser(null,e)),d}/**
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
 */const V0=10*60*1e3;class B0{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(n=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!H0(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var s;if(e.error&&!Tg(e)){const l=((s=e.error.code)===null||s===void 0?void 0:s.split("auth/")[1])||"internal-error";n.onError(jt(this.auth,l))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const s=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=V0&&this.cachedEventUids.clear(),this.cachedEventUids.has(Kp(e))}saveEventToCache(e){this.cachedEventUids.add(Kp(e)),this.lastProcessedEventTime=Date.now()}}function Kp(i){return[i.type,i.eventId,i.sessionId,i.tenantId].filter(e=>e).join("-")}function Tg({type:i,error:e}){return i==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function H0(i){switch(i.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Tg(i);default:return!1}}/**
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
 */async function $0(i,e={}){return pi(i,"GET","/v1/projects",e)}/**
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
 */const G0=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,K0=/^https?/;async function q0(i){if(i.config.emulator)return;const{authorizedDomains:e}=await $0(i);for(const n of e)try{if(Q0(n))return}catch{}Jt(i,"unauthorized-domain")}function Q0(i){const e=oc(),{protocol:n,hostname:s}=new URL(e);if(i.startsWith("chrome-extension://")){const d=new URL(i);return d.hostname===""&&s===""?n==="chrome-extension:"&&i.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&d.hostname===s}if(!K0.test(n))return!1;if(G0.test(i))return s===i;const l=i.replace(/\./g,"\\.");return new RegExp("^(.+\\."+l+"|"+l+")$","i").test(s)}/**
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
 */const Y0=new Ts(3e4,6e4);function qp(){const i=Xt().___jsl;if(i!=null&&i.H){for(const e of Object.keys(i.H))if(i.H[e].r=i.H[e].r||[],i.H[e].L=i.H[e].L||[],i.H[e].r=[...i.H[e].L],i.CP)for(let n=0;n<i.CP.length;n++)i.CP[n]=null}}function X0(i){return new Promise((e,n)=>{var s,l,u;function d(){qp(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{qp(),n(jt(i,"network-request-failed"))},timeout:Y0.get()})}if(!((l=(s=Xt().gapi)===null||s===void 0?void 0:s.iframes)===null||l===void 0)&&l.Iframe)e(gapi.iframes.getContext());else if(!((u=Xt().gapi)===null||u===void 0)&&u.load)d();else{const f=n0("iframefcb");return Xt()[f]=()=>{gapi.load?d():n(jt(i,"network-request-failed"))},e0(`${t0()}?onload=${f}`).catch(m=>n(m))}}).catch(e=>{throw Zo=null,e})}let Zo=null;function J0(i){return Zo=Zo||X0(i),Zo}/**
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
 */const Z0=new Ts(5e3,15e3),eS="__/auth/iframe",tS="emulator/auth/iframe",nS={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},rS=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function iS(i){const e=i.config;Q(e.authDomain,i,"auth-domain-config-required");const n=e.emulator?Dc(e,tS):`https://${i.config.authDomain}/${eS}`,s={apiKey:e.apiKey,appName:i.name,v:fi},l=rS.get(i.config.apiHost);l&&(s.eid=l);const u=i._getFrameworks();return u.length&&(s.fw=u.join(",")),`${n}?${hi(s).slice(1)}`}async function sS(i){const e=await J0(i),n=Xt().gapi;return Q(n,i,"internal-error"),e.open({where:document.body,url:iS(i),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:nS,dontclear:!0},s=>new Promise(async(l,u)=>{await s.restyle({setHideOnLeave:!1});const d=jt(i,"network-request-failed"),f=Xt().setTimeout(()=>{u(d)},Z0.get());function m(){Xt().clearTimeout(f),l(s)}s.ping(m).then(m,()=>{u(d)})}))}/**
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
 */const oS={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},lS=500,aS=600,uS="_blank",cS="http://localhost";class Qp{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function dS(i,e,n,s=lS,l=aS){const u=Math.max((window.screen.availHeight-l)/2,0).toString(),d=Math.max((window.screen.availWidth-s)/2,0).toString();let f="";const m=Object.assign(Object.assign({},oS),{width:s.toString(),height:l.toString(),top:u,left:d}),g=tt().toLowerCase();n&&(f=og(g)?uS:n),ig(g)&&(e=e||cS,m.scrollbars="yes");const E=Object.entries(m).reduce((C,[x,L])=>`${C}${x}=${L},`,"");if(GE(g)&&f!=="_self")return hS(e||"",f),new Qp(null);const y=window.open(e||"",f,E);Q(y,i,"popup-blocked");try{y.focus()}catch{}return new Qp(y)}function hS(i,e){const n=document.createElement("a");n.href=i,n.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(s)}/**
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
 */const fS="__/auth/handler",pS="emulator/auth/handler",mS=encodeURIComponent("fac");async function Yp(i,e,n,s,l,u){Q(i.config.authDomain,i,"auth-domain-config-required"),Q(i.config.apiKey,i,"invalid-api-key");const d={apiKey:i.config.apiKey,appName:i.name,authType:n,redirectUrl:s,v:fi,eventId:l};if(e instanceof Uc){e.setDefaultLanguage(i.languageCode),d.providerId=e.providerId||"",ec(e.getCustomParameters())||(d.customParameters=JSON.stringify(e.getCustomParameters()));for(const[E,y]of Object.entries({}))d[E]=y}if(e instanceof Ns){const E=e.getScopes().filter(y=>y!=="");E.length>0&&(d.scopes=E.join(","))}i.tenantId&&(d.tid=i.tenantId);const f=d;for(const E of Object.keys(f))f[E]===void 0&&delete f[E];const m=await i._getAppCheckToken(),g=m?`#${mS}=${encodeURIComponent(m)}`:"";return`${gS(i)}?${hi(f).slice(1)}${g}`}function gS({config:i}){return i.emulator?Dc(i,pS):`https://${i.authDomain}/${fS}`}/**
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
 */const $u="webStorageSupport";class _S{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=yg,this._completeRedirectFn=j0,this._overrideRedirectResult=U0}async _openPopup(e,n,s,l){var u;gn((u=this.eventManagers[e._key()])===null||u===void 0?void 0:u.manager,"_initialize() not called before _openPopup()");const d=await Yp(e,n,s,oc(),l);return dS(e,d,zc())}async _openRedirect(e,n,s,l){await this._originValidation(e);const u=await Yp(e,n,s,oc(),l);return w0(u),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:l,promise:u}=this.eventManagers[n];return l?Promise.resolve(l):(gn(u,"If manager is not set, promise should be"),u)}const s=this.initAndGetManager(e);return this.eventManagers[n]={promise:s},s.catch(()=>{delete this.eventManagers[n]}),s}async initAndGetManager(e){const n=await sS(e),s=new B0(e);return n.register("authEvent",l=>(Q(l==null?void 0:l.authEvent,e,"invalid-auth-event"),{status:s.onEvent(l.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=n,s}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send($u,{type:$u},l=>{var u;const d=(u=l==null?void 0:l[0])===null||u===void 0?void 0:u[$u];d!==void 0&&n(!!d),Jt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=q0(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return dg()||sg()||bc()}}const vS=_S;var Xp="@firebase/auth",Jp="1.10.2";/**
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
 */class yS{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(s=>{e((s==null?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){Q(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function wS(i){switch(i){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function ES(i){ii(new gr("auth",(e,{options:n})=>{const s=e.getProvider("app").getImmediate(),l=e.getProvider("heartbeat"),u=e.getProvider("app-check-internal"),{apiKey:d,authDomain:f}=s.options;Q(d&&!d.includes(":"),"invalid-api-key",{appName:s.name});const m={apiKey:d,authDomain:f,clientPlatform:i,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:hg(i)},g=new JE(s,l,u,m);return i0(g,n),g},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,s)=>{e.getProvider("auth-internal").initialize()})),ii(new gr("auth-internal",e=>{const n=Nl(e.getProvider("auth").getImmediate());return(s=>new yS(s))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Hn(Xp,Jp,wS(i)),Hn(Xp,Jp,"esm2017")}/**
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
 */const SS=5*60,CS=jm("authIdTokenMaxAge")||SS;let Zp=null;const IS=i=>async e=>{const n=e&&await e.getIdTokenResult(),s=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(s&&s>CS)return;const l=n==null?void 0:n.token;Zp!==l&&(Zp=l,await fetch(i,{method:l?"POST":"DELETE",headers:l?{Authorization:`Bearer ${l}`}:{}}))};function kS(i=qm()){const e=Pc(i,"auth");if(e.isInitialized())return e.getImmediate();const n=r0(i,{popupRedirectResolver:vS,persistence:[P0,_0,yg]}),s=jm("authTokenSyncURL");if(s&&typeof isSecureContext=="boolean"&&isSecureContext){const u=new URL(s,location.origin);if(location.origin===u.origin){const d=IS(u.toString());f0(n,d,()=>d(n.currentUser)),h0(n,f=>d(f))}}const l=zm("auth");return l&&s0(n,`http://${l}`),n}function TS(){var i,e;return(e=(i=document.getElementsByTagName("head"))===null||i===void 0?void 0:i[0])!==null&&e!==void 0?e:document}ZE({loadJS(i){return new Promise((e,n)=>{const s=document.createElement("script");s.setAttribute("src",i),s.onload=e,s.onerror=l=>{const u=jt("internal-error");u.customData=l,n(u)},s.type="text/javascript",s.charset="UTF-8",TS().appendChild(s)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});ES("Browser");var em={};const tm="@firebase/database",nm="1.0.15";/**
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
 */let Ng="";function NS(i){Ng=i}/**
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
 */class RS{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),Ve(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:ps(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
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
 */class PS{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return Zt(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
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
 */const Rg=function(i){try{if(typeof window<"u"&&typeof window[i]<"u"){const e=window[i];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new RS(e)}}catch{}return new PS},fr=Rg("localStorage"),AS=Rg("sessionStorage");/**
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
 */const ei=new Nc("@firebase/database"),xS=function(){let i=1;return function(){return i++}}(),Pg=function(i){const e=gw(i),n=new hw;n.update(e);const s=n.digest();return Ic.encodeByteArray(s)},Ps=function(...i){let e="";for(let n=0;n<i.length;n++){const s=i[n];Array.isArray(s)||s&&typeof s=="object"&&typeof s.length=="number"?e+=Ps.apply(null,s):typeof s=="object"?e+=Ve(s):e+=s,e+=" "}return e};let us=null,rm=!0;const OS=function(i,e){D(!0,"Can't turn on custom loggers persistently."),ei.logLevel=ce.VERBOSE,us=ei.log.bind(ei)},Ge=function(...i){if(rm===!0&&(rm=!1,us===null&&AS.get("logging_enabled")===!0&&OS()),us){const e=Ps.apply(null,i);us(e)}},As=function(i){return function(...e){Ge(i,...e)}},uc=function(...i){const e="FIREBASE INTERNAL ERROR: "+Ps(...i);ei.error(e)},_n=function(...i){const e=`FIREBASE FATAL ERROR: ${Ps(...i)}`;throw ei.error(e),new Error(e)},et=function(...i){const e="FIREBASE WARNING: "+Ps(...i);ei.warn(e)},DS=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&et("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},jc=function(i){return typeof i=="number"&&(i!==i||i===Number.POSITIVE_INFINITY||i===Number.NEGATIVE_INFINITY)},LS=function(i){if(document.readyState==="complete")i();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,i())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},oi="[MIN_NAME]",vr="[MAX_NAME]",Sr=function(i,e){if(i===e)return 0;if(i===oi||e===vr)return-1;if(e===oi||i===vr)return 1;{const n=im(i),s=im(e);return n!==null?s!==null?n-s===0?i.length-e.length:n-s:-1:s!==null?1:i<e?-1:1}},MS=function(i,e){return i===e?0:i<e?-1:1},is=function(i,e){if(e&&i in e)return e[i];throw new Error("Missing required key ("+i+") in object: "+Ve(e))},Vc=function(i){if(typeof i!="object"||i===null)return Ve(i);const e=[];for(const s in i)e.push(s);e.sort();let n="{";for(let s=0;s<e.length;s++)s!==0&&(n+=","),n+=Ve(e[s]),n+=":",n+=Vc(i[e[s]]);return n+="}",n},Ag=function(i,e){const n=i.length;if(n<=e)return[i];const s=[];for(let l=0;l<n;l+=e)l+e>n?s.push(i.substring(l,n)):s.push(i.substring(l,l+e));return s};function Ke(i,e){for(const n in i)i.hasOwnProperty(n)&&e(n,i[n])}const xg=function(i){D(!jc(i),"Invalid JSON number");const e=11,n=52,s=(1<<e-1)-1;let l,u,d,f,m;i===0?(u=0,d=0,l=1/i===-1/0?1:0):(l=i<0,i=Math.abs(i),i>=Math.pow(2,1-s)?(f=Math.min(Math.floor(Math.log(i)/Math.LN2),s),u=f+s,d=Math.round(i*Math.pow(2,n-f)-Math.pow(2,n))):(u=0,d=Math.round(i/Math.pow(2,1-s-n))));const g=[];for(m=n;m;m-=1)g.push(d%2?1:0),d=Math.floor(d/2);for(m=e;m;m-=1)g.push(u%2?1:0),u=Math.floor(u/2);g.push(l?1:0),g.reverse();const E=g.join("");let y="";for(m=0;m<64;m+=8){let C=parseInt(E.substr(m,8),2).toString(16);C.length===1&&(C="0"+C),y=y+C}return y.toLowerCase()},bS=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},FS=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function US(i,e){let n="Unknown Error";i==="too_big"?n="The data requested exceeds the maximum size that can be accessed with a single request.":i==="permission_denied"?n="Client doesn't have permission to access the desired data.":i==="unavailable"&&(n="The service is unavailable");const s=new Error(i+" at "+e._path.toString()+": "+n);return s.code=i.toUpperCase(),s}const zS=new RegExp("^-?(0*)\\d{1,10}$"),WS=-2147483648,jS=2147483647,im=function(i){if(zS.test(i)){const e=Number(i);if(e>=WS&&e<=jS)return e}return null},mi=function(i){try{i()}catch(e){setTimeout(()=>{const n=e.stack||"";throw et("Exception was thrown by user callback.",n),e},Math.floor(0))}},VS=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},cs=function(i,e){const n=setTimeout(i,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
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
 */class BS{constructor(e,n){this.appCheckProvider=n,this.appName=e.name,Ft(e)&&e.settings.appCheckToken&&(this.serverAppAppCheckToken=e.settings.appCheckToken),this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(s=>this.appCheck=s)}getToken(e){if(this.serverAppAppCheckToken){if(e)throw new Error("Attempted reuse of `FirebaseServerApp.appCheckToken` after previous usage failed.");return Promise.resolve({token:this.serverAppAppCheckToken})}return this.appCheck?this.appCheck.getToken(e):new Promise((n,s)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,s):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(s=>s.addTokenListener(e))}notifyForInvalidToken(){et(`Provided AppCheck credentials for the app named "${this.appName}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
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
 */class HS{constructor(e,n,s){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=s,this.auth_=null,this.auth_=s.getImmediate({optional:!0}),this.auth_||s.onInit(l=>this.auth_=l)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(Ge("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,s)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,s):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',et(e)}}class el{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}el.OWNER="owner";/**
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
 */const Bc="5",Og="v",Dg="s",Lg="r",Mg="f",bg=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,Fg="ls",Ug="p",cc="ac",zg="websocket",Wg="long_polling";/**
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
 */class jg{constructor(e,n,s,l,u=!1,d="",f=!1,m=!1,g=null){this.secure=n,this.namespace=s,this.webSocketOnly=l,this.nodeAdmin=u,this.persistenceKey=d,this.includeNamespaceInQueryParams=f,this.isUsingEmulator=m,this.emulatorOptions=g,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=fr.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&fr.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function $S(i){return i.host!==i.internalHost||i.isCustomHost()||i.includeNamespaceInQueryParams}function Vg(i,e,n){D(typeof e=="string","typeof type must == string"),D(typeof n=="object","typeof params must == object");let s;if(e===zg)s=(i.secure?"wss://":"ws://")+i.internalHost+"/.ws?";else if(e===Wg)s=(i.secure?"https://":"http://")+i.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);$S(i)&&(n.ns=i.namespace);const l=[];return Ke(n,(u,d)=>{l.push(u+"="+d)}),s+l.join("&")}/**
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
 */class GS{constructor(){this.counters_={}}incrementCounter(e,n=1){Zt(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return Ky(this.counters_)}}/**
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
 */const Gu={},Ku={};function Hc(i){const e=i.toString();return Gu[e]||(Gu[e]=new GS),Gu[e]}function KS(i,e){const n=i.toString();return Ku[n]||(Ku[n]=e()),Ku[n]}/**
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
 */class qS{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const s=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let l=0;l<s.length;++l)s[l]&&mi(()=>{this.onMessage_(s[l])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
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
 */const sm="start",QS="close",YS="pLPCommand",XS="pRTLPCB",Bg="id",Hg="pw",$g="ser",JS="cb",ZS="seg",eC="ts",tC="d",nC="dframe",Gg=1870,Kg=30,rC=Gg-Kg,iC=25e3,sC=3e4;class Yr{constructor(e,n,s,l,u,d,f){this.connId=e,this.repoInfo=n,this.applicationId=s,this.appCheckToken=l,this.authToken=u,this.transportSessionId=d,this.lastSessionId=f,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=As(e),this.stats_=Hc(n),this.urlFn=m=>(this.appCheckToken&&(m[cc]=this.appCheckToken),Vg(n,Wg,m))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new qS(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(sC)),LS(()=>{if(this.isClosed_)return;this.scriptTagHolder=new $c((...u)=>{const[d,f,m,g,E]=u;if(this.incrementIncomingBytes_(u),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,d===sm)this.id=f,this.password=m;else if(d===QS)f?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(f,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+d)},(...u)=>{const[d,f]=u;this.incrementIncomingBytes_(u),this.myPacketOrderer.handleResponse(d,f)},()=>{this.onClosed_()},this.urlFn);const s={};s[sm]="t",s[$g]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(s[JS]=this.scriptTagHolder.uniqueCallbackIdentifier),s[Og]=Bc,this.transportSessionId&&(s[Dg]=this.transportSessionId),this.lastSessionId&&(s[Fg]=this.lastSessionId),this.applicationId&&(s[Ug]=this.applicationId),this.appCheckToken&&(s[cc]=this.appCheckToken),typeof location<"u"&&location.hostname&&bg.test(location.hostname)&&(s[Lg]=Mg);const l=this.urlFn(s);this.log_("Connecting via long-poll to "+l),this.scriptTagHolder.addTag(l,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){Yr.forceAllow_=!0}static forceDisallow(){Yr.forceDisallow_=!0}static isAvailable(){return Yr.forceAllow_?!0:!Yr.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!bS()&&!FS()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=Ve(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const s=Fm(n),l=Ag(s,rC);for(let u=0;u<l.length;u++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,l.length,l[u]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const s={};s[nC]="t",s[Bg]=e,s[Hg]=n,this.myDisconnFrame.src=this.urlFn(s),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=Ve(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class $c{constructor(e,n,s,l){this.onDisconnect=s,this.urlFn=l,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=xS(),window[YS+this.uniqueCallbackIdentifier]=e,window[XS+this.uniqueCallbackIdentifier]=n,this.myIFrame=$c.createIFrame_();let u="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(u='<script>document.domain="'+document.domain+'";<\/script>');const d="<html><body>"+u+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(d),this.myIFrame.doc.close()}catch(f){Ge("frame writing exception"),f.stack&&Ge(f.stack),Ge(f)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||Ge("No IE domain setting required")}catch{const s=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+s+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[Bg]=this.myID,e[Hg]=this.myPW,e[$g]=this.currentSerial;let n=this.urlFn(e),s="",l=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+Kg+s.length<=Gg;){const d=this.pendingSegs.shift();s=s+"&"+ZS+l+"="+d.seg+"&"+eC+l+"="+d.ts+"&"+tC+l+"="+d.d,l++}return n=n+s,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,s){this.pendingSegs.push({seg:e,ts:n,d:s}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const s=()=>{this.outstandingRequests.delete(n),this.newRequest_()},l=setTimeout(s,Math.floor(iC)),u=()=>{clearTimeout(l),s()};this.addTag(e,u)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const s=this.myIFrame.doc.createElement("script");s.type="text/javascript",s.async=!0,s.src=e,s.onload=s.onreadystatechange=function(){const l=s.readyState;(!l||l==="loaded"||l==="complete")&&(s.onload=s.onreadystatechange=null,s.parentNode&&s.parentNode.removeChild(s),n())},s.onerror=()=>{Ge("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(s)}catch{}},Math.floor(1))}}/**
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
 */const oC=16384,lC=45e3;let dl=null;typeof MozWebSocket<"u"?dl=MozWebSocket:typeof WebSocket<"u"&&(dl=WebSocket);class Ut{constructor(e,n,s,l,u,d,f){this.connId=e,this.applicationId=s,this.appCheckToken=l,this.authToken=u,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=As(this.connId),this.stats_=Hc(n),this.connURL=Ut.connectionURL_(n,d,f,l,s),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,s,l,u){const d={};return d[Og]=Bc,typeof location<"u"&&location.hostname&&bg.test(location.hostname)&&(d[Lg]=Mg),n&&(d[Dg]=n),s&&(d[Fg]=s),l&&(d[cc]=l),u&&(d[Ug]=u),Vg(e,zg,d)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,fr.set("previous_websocket_failure",!0);try{let s;iw(),this.mySock=new dl(this.connURL,[],s)}catch(s){this.log_("Error instantiating WebSocket.");const l=s.message||s.data;l&&this.log_(l),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=s=>{this.handleIncomingFrame(s)},this.mySock.onerror=s=>{this.log_("WebSocket error.  Closing connection.");const l=s.message||s.data;l&&this.log_(l),this.onClosed_()}}start(){}static forceDisallow(){Ut.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,s=navigator.userAgent.match(n);s&&s.length>1&&parseFloat(s[1])<4.4&&(e=!0)}return!e&&dl!==null&&!Ut.forceDisallow_}static previouslyFailed(){return fr.isInMemoryStorage||fr.get("previous_websocket_failure")===!0}markConnectionHealthy(){fr.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const s=ps(n);this.onMessage(s)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(D(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const s=this.extractFrameCount_(n);s!==null&&this.appendFrame_(s)}}send(e){this.resetKeepAlive();const n=Ve(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const s=Ag(n,oC);s.length>1&&this.sendString_(String(s.length));for(let l=0;l<s.length;l++)this.sendString_(s[l])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(lC))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}Ut.responsesRequiredToBeHealthy=2;Ut.healthyTimeout=3e4;/**
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
 */class _s{static get ALL_TRANSPORTS(){return[Yr,Ut]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}constructor(e){this.initTransports_(e)}initTransports_(e){const n=Ut&&Ut.isAvailable();let s=n&&!Ut.previouslyFailed();if(e.webSocketOnly&&(n||et("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),s=!0),s)this.transports_=[Ut];else{const l=this.transports_=[];for(const u of _s.ALL_TRANSPORTS)u&&u.isAvailable()&&l.push(u);_s.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}_s.globalTransportInitialized_=!1;/**
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
 */const aC=6e4,uC=5e3,cC=10*1024,dC=100*1024,qu="t",om="d",hC="s",lm="r",fC="e",am="o",um="a",cm="n",dm="p",pC="h";class mC{constructor(e,n,s,l,u,d,f,m,g,E){this.id=e,this.repoInfo_=n,this.applicationId_=s,this.appCheckToken_=l,this.authToken_=u,this.onMessage_=d,this.onReady_=f,this.onDisconnect_=m,this.onKill_=g,this.lastSessionId=E,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=As("c:"+this.id+":"),this.transportManager_=new _s(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),s=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,s)},Math.floor(0));const l=e.healthyTimeout||0;l>0&&(this.healthyTimeout_=cs(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>dC?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>cC?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(l)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(qu in e){const n=e[qu];n===um?this.upgradeIfSecondaryHealthy_():n===lm?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===am&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=is("t",e),s=is("d",e);if(n==="c")this.onSecondaryControl_(s);else if(n==="d")this.pendingDataMessages.push(s);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:dm,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:um,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:cm,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=is("t",e),s=is("d",e);n==="c"?this.onControl_(s):n==="d"&&this.onDataMessage_(s)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=is(qu,e);if(om in e){const s=e[om];if(n===pC){const l=Object.assign({},s);this.repoInfo_.isUsingEmulator&&(l.h=this.repoInfo_.host),this.onHandshake_(l)}else if(n===cm){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let l=0;l<this.pendingDataMessages.length;++l)this.onDataMessage_(this.pendingDataMessages[l]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===hC?this.onConnectionShutdown_(s):n===lm?this.onReset_(s):n===fC?uc("Server Error: "+s):n===am?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):uc("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,s=e.v,l=e.h;this.sessionId=e.s,this.repoInfo_.host=l,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),Bc!==s&&et("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),s=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,s),cs(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(aC))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):cs(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(uC))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:dm,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(fr.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
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
 */class qg{put(e,n,s,l){}merge(e,n,s,l){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,s){}onDisconnectMerge(e,n,s){}onDisconnectCancel(e,n){}reportStats(e){}}/**
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
 */class Qg{constructor(e){this.allowedEvents_=e,this.listeners_={},D(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const s=[...this.listeners_[e]];for(let l=0;l<s.length;l++)s[l].callback.apply(s[l].context,n)}}on(e,n,s){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:s});const l=this.getInitialEvent(e);l&&n.apply(s,l)}off(e,n,s){this.validateEventType_(e);const l=this.listeners_[e]||[];for(let u=0;u<l.length;u++)if(l[u].callback===n&&(!s||s===l[u].context)){l.splice(u,1);return}}validateEventType_(e){D(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
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
 */class hl extends Qg{static getInstance(){return new hl}constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!Tc()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}getInitialEvent(e){return D(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
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
 */const hm=32,fm=768;class de{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let s=0;for(let l=0;l<this.pieces_.length;l++)this.pieces_[l].length>0&&(this.pieces_[s]=this.pieces_[l],s++);this.pieces_.length=s,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function oe(){return new de("")}function J(i){return i.pieceNum_>=i.pieces_.length?null:i.pieces_[i.pieceNum_]}function Gn(i){return i.pieces_.length-i.pieceNum_}function me(i){let e=i.pieceNum_;return e<i.pieces_.length&&e++,new de(i.pieces_,e)}function Gc(i){return i.pieceNum_<i.pieces_.length?i.pieces_[i.pieces_.length-1]:null}function gC(i){let e="";for(let n=i.pieceNum_;n<i.pieces_.length;n++)i.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(i.pieces_[n])));return e||"/"}function vs(i,e=0){return i.pieces_.slice(i.pieceNum_+e)}function Yg(i){if(i.pieceNum_>=i.pieces_.length)return null;const e=[];for(let n=i.pieceNum_;n<i.pieces_.length-1;n++)e.push(i.pieces_[n]);return new de(e,0)}function Ie(i,e){const n=[];for(let s=i.pieceNum_;s<i.pieces_.length;s++)n.push(i.pieces_[s]);if(e instanceof de)for(let s=e.pieceNum_;s<e.pieces_.length;s++)n.push(e.pieces_[s]);else{const s=e.split("/");for(let l=0;l<s.length;l++)s[l].length>0&&n.push(s[l])}return new de(n,0)}function te(i){return i.pieceNum_>=i.pieces_.length}function dt(i,e){const n=J(i),s=J(e);if(n===null)return e;if(n===s)return dt(me(i),me(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+i+")")}function _C(i,e){const n=vs(i,0),s=vs(e,0);for(let l=0;l<n.length&&l<s.length;l++){const u=Sr(n[l],s[l]);if(u!==0)return u}return n.length===s.length?0:n.length<s.length?-1:1}function Kc(i,e){if(Gn(i)!==Gn(e))return!1;for(let n=i.pieceNum_,s=e.pieceNum_;n<=i.pieces_.length;n++,s++)if(i.pieces_[n]!==e.pieces_[s])return!1;return!0}function Nt(i,e){let n=i.pieceNum_,s=e.pieceNum_;if(Gn(i)>Gn(e))return!1;for(;n<i.pieces_.length;){if(i.pieces_[n]!==e.pieces_[s])return!1;++n,++s}return!0}class vC{constructor(e,n){this.errorPrefix_=n,this.parts_=vs(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let s=0;s<this.parts_.length;s++)this.byteLength_+=kl(this.parts_[s]);Xg(this)}}function yC(i,e){i.parts_.length>0&&(i.byteLength_+=1),i.parts_.push(e),i.byteLength_+=kl(e),Xg(i)}function wC(i){const e=i.parts_.pop();i.byteLength_-=kl(e),i.parts_.length>0&&(i.byteLength_-=1)}function Xg(i){if(i.byteLength_>fm)throw new Error(i.errorPrefix_+"has a key path longer than "+fm+" bytes ("+i.byteLength_+").");if(i.parts_.length>hm)throw new Error(i.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+hm+") or object contains a cycle "+dr(i))}function dr(i){return i.parts_.length===0?"":"in property '"+i.parts_.join(".")+"'"}/**
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
 */class qc extends Qg{static getInstance(){return new qc}constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const s=!document[e];s!==this.visible_&&(this.visible_=s,this.trigger("visible",s))},!1)}getInitialEvent(e){return D(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
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
 */const ss=1e3,EC=60*5*1e3,pm=30*1e3,SC=1.3,CC=3e4,IC="server_kill",mm=3;class pn extends qg{constructor(e,n,s,l,u,d,f,m){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=s,this.onConnectStatus_=l,this.onServerInfoUpdate_=u,this.authTokenProvider_=d,this.appCheckTokenProvider_=f,this.authOverride_=m,this.id=pn.nextPersistentConnectionId_++,this.log_=As("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=ss,this.maxReconnectDelay_=EC,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,m)throw new Error("Auth override specified in options, but not supported on non Node.js platforms");qc.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&hl.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,s){const l=++this.requestNumber_,u={r:l,a:e,b:n};this.log_(Ve(u)),D(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(u),s&&(this.requestCBHash_[l]=s)}get(e){this.initConnection_();const n=new Is,l={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:d=>{const f=d.d;d.s==="ok"?n.resolve(f):n.reject(f)}};this.outstandingGets_.push(l),this.outstandingGetCount_++;const u=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(u),n.promise}listen(e,n,s,l){this.initConnection_();const u=e._queryIdentifier,d=e._path.toString();this.log_("Listen called for "+d+" "+u),this.listens.has(d)||this.listens.set(d,new Map),D(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),D(!this.listens.get(d).has(u),"listen() called twice for same path/queryId.");const f={onComplete:l,hashFn:n,query:e,tag:s};this.listens.get(d).set(u,f),this.connected_&&this.sendListen_(f)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,s=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(s)})}sendListen_(e){const n=e.query,s=n._path.toString(),l=n._queryIdentifier;this.log_("Listen on "+s+" for "+l);const u={p:s},d="q";e.tag&&(u.q=n._queryObject,u.t=e.tag),u.h=e.hashFn(),this.sendRequest(d,u,f=>{const m=f.d,g=f.s;pn.warnOnListenWarnings_(m,n),(this.listens.get(s)&&this.listens.get(s).get(l))===e&&(this.log_("listen response",f),g!=="ok"&&this.removeListen_(s,l),e.onComplete&&e.onComplete(g,m))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&Zt(e,"w")){const s=ri(e,"w");if(Array.isArray(s)&&~s.indexOf("no_index")){const l='".indexOn": "'+n._queryParams.getIndex().toString()+'"',u=n._path.toString();et(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${l} at ${u} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||dw(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=pm)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=cw(e)?"auth":"gauth",s={cred:e};this.authOverride_===null?s.noauth=!0:typeof this.authOverride_=="object"&&(s.authvar=this.authOverride_),this.sendRequest(n,s,l=>{const u=l.s,d=l.d||"error";this.authToken_===e&&(u==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(u,d))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,s=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,s)})}unlisten(e,n){const s=e._path.toString(),l=e._queryIdentifier;this.log_("Unlisten called for "+s+" "+l),D(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(s,l)&&this.connected_&&this.sendUnlisten_(s,l,e._queryObject,n)}sendUnlisten_(e,n,s,l){this.log_("Unlisten on "+e+" for "+n);const u={p:e},d="n";l&&(u.q=s,u.t=l),this.sendRequest(d,u)}onDisconnectPut(e,n,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:s})}onDisconnectMerge(e,n,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:s})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,s,l){const u={p:n,d:s};this.log_("onDisconnect "+e,u),this.sendRequest(e,u,d=>{l&&setTimeout(()=>{l(d.s,d.d)},Math.floor(0))})}put(e,n,s,l){this.putInternal("p",e,n,s,l)}merge(e,n,s,l){this.putInternal("m",e,n,s,l)}putInternal(e,n,s,l,u){this.initConnection_();const d={p:n,d:s};u!==void 0&&(d.h=u),this.outstandingPuts_.push({action:e,request:d,onComplete:l}),this.outstandingPutCount_++;const f=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(f):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,s=this.outstandingPuts_[e].request,l=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,s,u=>{this.log_(n+" response",u),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),l&&l(u.s,u.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,s=>{if(s.s!=="ok"){const u=s.d;this.log_("reportStats","Error sending stats: "+u)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+Ve(e));const n=e.r,s=this.requestCBHash_[n];s&&(delete this.requestCBHash_[n],s(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):uc("Unrecognized action received from server: "+Ve(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){D(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=ss,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=ss,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>CC&&(this.reconnectDelay_=ss),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=Math.max(0,new Date().getTime()-this.lastConnectionAttemptTime_);let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*SC)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),s=this.onRealtimeDisconnect_.bind(this),l=this.id+":"+pn.nextConnectionId_++,u=this.lastSessionId;let d=!1,f=null;const m=function(){f?f.close():(d=!0,s())},g=function(y){D(f,"sendRequest call when we're not connected not allowed."),f.sendRequest(y)};this.realtime_={close:m,sendRequest:g};const E=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[y,C]=await Promise.all([this.authTokenProvider_.getToken(E),this.appCheckTokenProvider_.getToken(E)]);d?Ge("getToken() completed but was canceled"):(Ge("getToken() completed. Creating connection."),this.authToken_=y&&y.accessToken,this.appCheckToken_=C&&C.token,f=new mC(l,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,s,x=>{et(x+" ("+this.repoInfo_.toString()+")"),this.interrupt(IC)},u))}catch(y){this.log_("Failed to get token: "+y),d||(this.repoInfo_.nodeAdmin&&et(y),m())}}}interrupt(e){Ge("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){Ge("Resuming connection for reason: "+e),delete this.interruptReasons_[e],ec(this.interruptReasons_)&&(this.reconnectDelay_=ss,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let s;n?s=n.map(u=>Vc(u)).join("$"):s="default";const l=this.removeListen_(e,s);l&&l.onComplete&&l.onComplete("permission_denied")}removeListen_(e,n){const s=new de(e).toString();let l;if(this.listens.has(s)){const u=this.listens.get(s);l=u.get(n),u.delete(n),u.size===0&&this.listens.delete(s)}else l=void 0;return l}onAuthRevoked_(e,n){Ge("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=mm&&(this.reconnectDelay_=pm,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){Ge("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=mm&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+Ng.replace(/\./g,"-")]=1,Tc()?e["framework.cordova"]=1:Vm()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=hl.getInstance().currentlyOnline();return ec(this.interruptReasons_)&&e}}pn.nextPersistentConnectionId_=0;pn.nextConnectionId_=0;/**
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
 */class Z{constructor(e,n){this.name=e,this.node=n}static Wrap(e,n){return new Z(e,n)}}/**
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
 */class Al{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const s=new Z(oi,e),l=new Z(oi,n);return this.compare(s,l)!==0}minPost(){return Z.MIN}}/**
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
 */let Go;class Jg extends Al{static get __EMPTY_NODE(){return Go}static set __EMPTY_NODE(e){Go=e}compare(e,n){return Sr(e.name,n.name)}isDefinedOn(e){throw di("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return Z.MIN}maxPost(){return new Z(vr,Go)}makePost(e,n){return D(typeof e=="string","KeyIndex indexValue must always be a string."),new Z(e,Go)}toString(){return".key"}}const ti=new Jg;/**
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
 */class Ko{constructor(e,n,s,l,u=null){this.isReverse_=l,this.resultGenerator_=u,this.nodeStack_=[];let d=1;for(;!e.isEmpty();)if(e=e,d=n?s(e.key,n):1,l&&(d*=-1),d<0)this.isReverse_?e=e.left:e=e.right;else if(d===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class We{constructor(e,n,s,l,u){this.key=e,this.value=n,this.color=s??We.RED,this.left=l??ht.EMPTY_NODE,this.right=u??ht.EMPTY_NODE}copy(e,n,s,l,u){return new We(e??this.key,n??this.value,s??this.color,l??this.left,u??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,s){let l=this;const u=s(e,l.key);return u<0?l=l.copy(null,null,null,l.left.insert(e,n,s),null):u===0?l=l.copy(null,n,null,null,null):l=l.copy(null,null,null,null,l.right.insert(e,n,s)),l.fixUp_()}removeMin_(){if(this.left.isEmpty())return ht.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let s,l;if(s=this,n(e,s.key)<0)!s.left.isEmpty()&&!s.left.isRed_()&&!s.left.left.isRed_()&&(s=s.moveRedLeft_()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed_()&&(s=s.rotateRight_()),!s.right.isEmpty()&&!s.right.isRed_()&&!s.right.left.isRed_()&&(s=s.moveRedRight_()),n(e,s.key)===0){if(s.right.isEmpty())return ht.EMPTY_NODE;l=s.right.min_(),s=s.copy(l.key,l.value,null,null,s.right.removeMin_())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,We.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,We.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}We.RED=!0;We.BLACK=!1;class kC{copy(e,n,s,l,u){return this}insert(e,n,s){return new We(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class ht{constructor(e,n=ht.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new ht(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,We.BLACK,null,null))}remove(e){return new ht(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,We.BLACK,null,null))}get(e){let n,s=this.root_;for(;!s.isEmpty();){if(n=this.comparator_(e,s.key),n===0)return s.value;n<0?s=s.left:n>0&&(s=s.right)}return null}getPredecessorKey(e){let n,s=this.root_,l=null;for(;!s.isEmpty();)if(n=this.comparator_(e,s.key),n===0){if(s.left.isEmpty())return l?l.key:null;for(s=s.left;!s.right.isEmpty();)s=s.right;return s.key}else n<0?s=s.left:n>0&&(l=s,s=s.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new Ko(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new Ko(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new Ko(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new Ko(this.root_,null,this.comparator_,!0,e)}}ht.EMPTY_NODE=new kC;/**
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
 */function TC(i,e){return Sr(i.name,e.name)}function Qc(i,e){return Sr(i,e)}/**
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
 */let dc;function NC(i){dc=i}const Zg=function(i){return typeof i=="number"?"number:"+xg(i):"string:"+i},e_=function(i){if(i.isLeafNode()){const e=i.val();D(typeof e=="string"||typeof e=="number"||typeof e=="object"&&Zt(e,".sv"),"Priority must be a string or number.")}else D(i===dc||i.isEmpty(),"priority of unexpected type.");D(i===dc||i.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
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
 */let gm;class ze{static set __childrenNodeConstructor(e){gm=e}static get __childrenNodeConstructor(){return gm}constructor(e,n=ze.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,D(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),e_(this.priorityNode_)}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new ze(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:ze.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return te(e)?this:J(e)===".priority"?this.priorityNode_:ze.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:ze.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const s=J(e);return s===null?n:n.isEmpty()&&s!==".priority"?this:(D(s!==".priority"||Gn(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(s,ze.__childrenNodeConstructor.EMPTY_NODE.updateChild(me(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+Zg(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=xg(this.value_):e+=this.value_,this.lazyHash_=Pg(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===ze.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof ze.__childrenNodeConstructor?-1:(D(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,s=typeof this.value_,l=ze.VALUE_TYPE_ORDER.indexOf(n),u=ze.VALUE_TYPE_ORDER.indexOf(s);return D(l>=0,"Unknown leaf type: "+n),D(u>=0,"Unknown leaf type: "+s),l===u?s==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:u-l}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}ze.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
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
 */let t_,n_;function RC(i){t_=i}function PC(i){n_=i}class AC extends Al{compare(e,n){const s=e.node.getPriority(),l=n.node.getPriority(),u=s.compareTo(l);return u===0?Sr(e.name,n.name):u}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return Z.MIN}maxPost(){return new Z(vr,new ze("[PRIORITY-POST]",n_))}makePost(e,n){const s=t_(e);return new Z(n,new ze("[PRIORITY-POST]",s))}toString(){return".priority"}}const ke=new AC;/**
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
 */const xC=Math.log(2);class OC{constructor(e){const n=u=>parseInt(Math.log(u)/xC,10),s=u=>parseInt(Array(u+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const l=s(this.count);this.bits_=e+1&l}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const fl=function(i,e,n,s){i.sort(e);const l=function(m,g){const E=g-m;let y,C;if(E===0)return null;if(E===1)return y=i[m],C=n?n(y):y,new We(C,y.node,We.BLACK,null,null);{const x=parseInt(E/2,10)+m,L=l(m,x),j=l(x+1,g);return y=i[x],C=n?n(y):y,new We(C,y.node,We.BLACK,L,j)}},u=function(m){let g=null,E=null,y=i.length;const C=function(L,j){const $=y-L,Te=y;y-=L;const xe=l($+1,Te),Ne=i[$],Re=n?n(Ne):Ne;x(new We(Re,Ne.node,j,null,xe))},x=function(L){g?(g.left=L,g=L):(E=L,g=L)};for(let L=0;L<m.count;++L){const j=m.nextBitIsOne(),$=Math.pow(2,m.count-(L+1));j?C($,We.BLACK):(C($,We.BLACK),C($,We.RED))}return E},d=new OC(i.length),f=u(d);return new ht(s||e,f)};/**
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
 */let Qu;const Qr={};class fn{static get Default(){return D(Qr&&ke,"ChildrenNode.ts has not been loaded"),Qu=Qu||new fn({".priority":Qr},{".priority":ke}),Qu}constructor(e,n){this.indexes_=e,this.indexSet_=n}get(e){const n=ri(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof ht?n:null}hasIndex(e){return Zt(this.indexSet_,e.toString())}addIndex(e,n){D(e!==ti,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const s=[];let l=!1;const u=n.getIterator(Z.Wrap);let d=u.getNext();for(;d;)l=l||e.isDefinedOn(d.node),s.push(d),d=u.getNext();let f;l?f=fl(s,e.getCompare()):f=Qr;const m=e.toString(),g=Object.assign({},this.indexSet_);g[m]=e;const E=Object.assign({},this.indexes_);return E[m]=f,new fn(E,g)}addToIndexes(e,n){const s=rl(this.indexes_,(l,u)=>{const d=ri(this.indexSet_,u);if(D(d,"Missing index implementation for "+u),l===Qr)if(d.isDefinedOn(e.node)){const f=[],m=n.getIterator(Z.Wrap);let g=m.getNext();for(;g;)g.name!==e.name&&f.push(g),g=m.getNext();return f.push(e),fl(f,d.getCompare())}else return Qr;else{const f=n.get(e.name);let m=l;return f&&(m=m.remove(new Z(e.name,f))),m.insert(e,e.node)}});return new fn(s,this.indexSet_)}removeFromIndexes(e,n){const s=rl(this.indexes_,l=>{if(l===Qr)return l;{const u=n.get(e.name);return u?l.remove(new Z(e.name,u)):l}});return new fn(s,this.indexSet_)}}/**
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
 */let os;class K{static get EMPTY_NODE(){return os||(os=new K(new ht(Qc),null,fn.Default))}constructor(e,n,s){this.children_=e,this.priorityNode_=n,this.indexMap_=s,this.lazyHash_=null,this.priorityNode_&&e_(this.priorityNode_),this.children_.isEmpty()&&D(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}isLeafNode(){return!1}getPriority(){return this.priorityNode_||os}updatePriority(e){return this.children_.isEmpty()?this:new K(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?os:n}}getChild(e){const n=J(e);return n===null?this:this.getImmediateChild(n).getChild(me(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(D(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const s=new Z(e,n);let l,u;n.isEmpty()?(l=this.children_.remove(e),u=this.indexMap_.removeFromIndexes(s,this.children_)):(l=this.children_.insert(e,n),u=this.indexMap_.addToIndexes(s,this.children_));const d=l.isEmpty()?os:this.priorityNode_;return new K(l,d,u)}}updateChild(e,n){const s=J(e);if(s===null)return n;{D(J(e)!==".priority"||Gn(e)===1,".priority must be the last token in a path");const l=this.getImmediateChild(s).updateChild(me(e),n);return this.updateImmediateChild(s,l)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let s=0,l=0,u=!0;if(this.forEachChild(ke,(d,f)=>{n[d]=f.val(e),s++,u&&K.INTEGER_REGEXP_.test(d)?l=Math.max(l,Number(d)):u=!1}),!e&&u&&l<2*s){const d=[];for(const f in n)d[f]=n[f];return d}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+Zg(this.getPriority().val())+":"),this.forEachChild(ke,(n,s)=>{const l=s.hash();l!==""&&(e+=":"+n+":"+l)}),this.lazyHash_=e===""?"":Pg(e)}return this.lazyHash_}getPredecessorChildName(e,n,s){const l=this.resolveIndex_(s);if(l){const u=l.getPredecessorKey(new Z(e,n));return u?u.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const s=n.minKey();return s&&s.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new Z(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const s=n.maxKey();return s&&s.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new Z(n,this.children_.get(n)):null}forEachChild(e,n){const s=this.resolveIndex_(e);return s?s.inorderTraversal(l=>n(l.name,l.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const s=this.resolveIndex_(n);if(s)return s.getIteratorFrom(e,l=>l);{const l=this.children_.getIteratorFrom(e.name,Z.Wrap);let u=l.peek();for(;u!=null&&n.compare(u,e)<0;)l.getNext(),u=l.peek();return l}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const s=this.resolveIndex_(n);if(s)return s.getReverseIteratorFrom(e,l=>l);{const l=this.children_.getReverseIteratorFrom(e.name,Z.Wrap);let u=l.peek();for(;u!=null&&n.compare(u,e)>0;)l.getNext(),u=l.peek();return l}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===xs?-1:0}withIndex(e){if(e===ti||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new K(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===ti||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const s=this.getIterator(ke),l=n.getIterator(ke);let u=s.getNext(),d=l.getNext();for(;u&&d;){if(u.name!==d.name||!u.node.equals(d.node))return!1;u=s.getNext(),d=l.getNext()}return u===null&&d===null}else return!1;else return!1}}resolveIndex_(e){return e===ti?null:this.indexMap_.get(e.toString())}}K.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class DC extends K{constructor(){super(new ht(Qc),K.EMPTY_NODE,fn.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return K.EMPTY_NODE}isEmpty(){return!1}}const xs=new DC;Object.defineProperties(Z,{MIN:{value:new Z(oi,K.EMPTY_NODE)},MAX:{value:new Z(vr,xs)}});Jg.__EMPTY_NODE=K.EMPTY_NODE;ze.__childrenNodeConstructor=K;NC(xs);PC(xs);/**
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
 */const LC=!0;function je(i,e=null){if(i===null)return K.EMPTY_NODE;if(typeof i=="object"&&".priority"in i&&(e=i[".priority"]),D(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof i=="object"&&".value"in i&&i[".value"]!==null&&(i=i[".value"]),typeof i!="object"||".sv"in i){const n=i;return new ze(n,je(e))}if(!(i instanceof Array)&&LC){const n=[];let s=!1;if(Ke(i,(d,f)=>{if(d.substring(0,1)!=="."){const m=je(f);m.isEmpty()||(s=s||!m.getPriority().isEmpty(),n.push(new Z(d,m)))}}),n.length===0)return K.EMPTY_NODE;const u=fl(n,TC,d=>d.name,Qc);if(s){const d=fl(n,ke.getCompare());return new K(u,je(e),new fn({".priority":d},{".priority":ke}))}else return new K(u,je(e),fn.Default)}else{let n=K.EMPTY_NODE;return Ke(i,(s,l)=>{if(Zt(i,s)&&s.substring(0,1)!=="."){const u=je(l);(u.isLeafNode()||!u.isEmpty())&&(n=n.updateImmediateChild(s,u))}}),n.updatePriority(je(e))}}RC(je);/**
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
 */class MC extends Al{constructor(e){super(),this.indexPath_=e,D(!te(e)&&J(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const s=this.extractChild(e.node),l=this.extractChild(n.node),u=s.compareTo(l);return u===0?Sr(e.name,n.name):u}makePost(e,n){const s=je(e),l=K.EMPTY_NODE.updateChild(this.indexPath_,s);return new Z(n,l)}maxPost(){const e=K.EMPTY_NODE.updateChild(this.indexPath_,xs);return new Z(vr,e)}toString(){return vs(this.indexPath_,0).join("/")}}/**
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
 */class bC extends Al{compare(e,n){const s=e.node.compareTo(n.node);return s===0?Sr(e.name,n.name):s}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return Z.MIN}maxPost(){return Z.MAX}makePost(e,n){const s=je(e);return new Z(n,s)}toString(){return".value"}}const FC=new bC;/**
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
 */function r_(i){return{type:"value",snapshotNode:i}}function li(i,e){return{type:"child_added",snapshotNode:e,childName:i}}function ys(i,e){return{type:"child_removed",snapshotNode:e,childName:i}}function ws(i,e,n){return{type:"child_changed",snapshotNode:e,childName:i,oldSnap:n}}function UC(i,e){return{type:"child_moved",snapshotNode:e,childName:i}}/**
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
 */class Yc{constructor(e){this.index_=e}updateChild(e,n,s,l,u,d){D(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const f=e.getImmediateChild(n);return f.getChild(l).equals(s.getChild(l))&&f.isEmpty()===s.isEmpty()||(d!=null&&(s.isEmpty()?e.hasChild(n)?d.trackChildChange(ys(n,f)):D(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):f.isEmpty()?d.trackChildChange(li(n,s)):d.trackChildChange(ws(n,s,f))),e.isLeafNode()&&s.isEmpty())?e:e.updateImmediateChild(n,s).withIndex(this.index_)}updateFullNode(e,n,s){return s!=null&&(e.isLeafNode()||e.forEachChild(ke,(l,u)=>{n.hasChild(l)||s.trackChildChange(ys(l,u))}),n.isLeafNode()||n.forEachChild(ke,(l,u)=>{if(e.hasChild(l)){const d=e.getImmediateChild(l);d.equals(u)||s.trackChildChange(ws(l,u,d))}else s.trackChildChange(li(l,u))})),n.withIndex(this.index_)}updatePriority(e,n){return e.isEmpty()?K.EMPTY_NODE:e.updatePriority(n)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
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
 */class Es{constructor(e){this.indexedFilter_=new Yc(e.getIndex()),this.index_=e.getIndex(),this.startPost_=Es.getStartPost_(e),this.endPost_=Es.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const n=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,s=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return n&&s}updateChild(e,n,s,l,u,d){return this.matches(new Z(n,s))||(s=K.EMPTY_NODE),this.indexedFilter_.updateChild(e,n,s,l,u,d)}updateFullNode(e,n,s){n.isLeafNode()&&(n=K.EMPTY_NODE);let l=n.withIndex(this.index_);l=l.updatePriority(K.EMPTY_NODE);const u=this;return n.forEachChild(ke,(d,f)=>{u.matches(new Z(d,f))||(l=l.updateImmediateChild(d,K.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,l,s)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const n=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),n)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const n=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),n)}else return e.getIndex().maxPost()}}/**
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
 */class zC{constructor(e){this.withinDirectionalStart=n=>this.reverse_?this.withinEndPost(n):this.withinStartPost(n),this.withinDirectionalEnd=n=>this.reverse_?this.withinStartPost(n):this.withinEndPost(n),this.withinStartPost=n=>{const s=this.index_.compare(this.rangedFilter_.getStartPost(),n);return this.startIsInclusive_?s<=0:s<0},this.withinEndPost=n=>{const s=this.index_.compare(n,this.rangedFilter_.getEndPost());return this.endIsInclusive_?s<=0:s<0},this.rangedFilter_=new Es(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,n,s,l,u,d){return this.rangedFilter_.matches(new Z(n,s))||(s=K.EMPTY_NODE),e.getImmediateChild(n).equals(s)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,n,s,l,u,d):this.fullLimitUpdateChild_(e,n,s,u,d)}updateFullNode(e,n,s){let l;if(n.isLeafNode()||n.isEmpty())l=K.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<n.numChildren()&&n.isIndexed(this.index_)){l=K.EMPTY_NODE.withIndex(this.index_);let u;this.reverse_?u=n.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):u=n.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let d=0;for(;u.hasNext()&&d<this.limit_;){const f=u.getNext();if(this.withinDirectionalStart(f))if(this.withinDirectionalEnd(f))l=l.updateImmediateChild(f.name,f.node),d++;else break;else continue}}else{l=n.withIndex(this.index_),l=l.updatePriority(K.EMPTY_NODE);let u;this.reverse_?u=l.getReverseIterator(this.index_):u=l.getIterator(this.index_);let d=0;for(;u.hasNext();){const f=u.getNext();d<this.limit_&&this.withinDirectionalStart(f)&&this.withinDirectionalEnd(f)?d++:l=l.updateImmediateChild(f.name,K.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,l,s)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,n,s,l,u){let d;if(this.reverse_){const y=this.index_.getCompare();d=(C,x)=>y(x,C)}else d=this.index_.getCompare();const f=e;D(f.numChildren()===this.limit_,"");const m=new Z(n,s),g=this.reverse_?f.getFirstChild(this.index_):f.getLastChild(this.index_),E=this.rangedFilter_.matches(m);if(f.hasChild(n)){const y=f.getImmediateChild(n);let C=l.getChildAfterChild(this.index_,g,this.reverse_);for(;C!=null&&(C.name===n||f.hasChild(C.name));)C=l.getChildAfterChild(this.index_,C,this.reverse_);const x=C==null?1:d(C,m);if(E&&!s.isEmpty()&&x>=0)return u!=null&&u.trackChildChange(ws(n,s,y)),f.updateImmediateChild(n,s);{u!=null&&u.trackChildChange(ys(n,y));const j=f.updateImmediateChild(n,K.EMPTY_NODE);return C!=null&&this.rangedFilter_.matches(C)?(u!=null&&u.trackChildChange(li(C.name,C.node)),j.updateImmediateChild(C.name,C.node)):j}}else return s.isEmpty()?e:E&&d(g,m)>=0?(u!=null&&(u.trackChildChange(ys(g.name,g.node)),u.trackChildChange(li(n,s))),f.updateImmediateChild(n,s).updateImmediateChild(g.name,K.EMPTY_NODE)):e}}/**
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
 */class Xc{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=ke}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return D(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return D(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:oi}hasEnd(){return this.endSet_}getIndexEndValue(){return D(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return D(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:vr}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return D(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===ke}copy(){const e=new Xc;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function WC(i){return i.loadsAllData()?new Yc(i.getIndex()):i.hasLimit()?new zC(i):new Es(i)}function _m(i){const e={};if(i.isDefault())return e;let n;if(i.index_===ke?n="$priority":i.index_===FC?n="$value":i.index_===ti?n="$key":(D(i.index_ instanceof MC,"Unrecognized index type!"),n=i.index_.toString()),e.orderBy=Ve(n),i.startSet_){const s=i.startAfterSet_?"startAfter":"startAt";e[s]=Ve(i.indexStartValue_),i.startNameSet_&&(e[s]+=","+Ve(i.indexStartName_))}if(i.endSet_){const s=i.endBeforeSet_?"endBefore":"endAt";e[s]=Ve(i.indexEndValue_),i.endNameSet_&&(e[s]+=","+Ve(i.indexEndName_))}return i.limitSet_&&(i.isViewFromLeft()?e.limitToFirst=i.limit_:e.limitToLast=i.limit_),e}function vm(i){const e={};if(i.startSet_&&(e.sp=i.indexStartValue_,i.startNameSet_&&(e.sn=i.indexStartName_),e.sin=!i.startAfterSet_),i.endSet_&&(e.ep=i.indexEndValue_,i.endNameSet_&&(e.en=i.indexEndName_),e.ein=!i.endBeforeSet_),i.limitSet_){e.l=i.limit_;let n=i.viewFrom_;n===""&&(i.isViewFromLeft()?n="l":n="r"),e.vf=n}return i.index_!==ke&&(e.i=i.index_.toString()),e}/**
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
 */class pl extends qg{reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(D(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}constructor(e,n,s,l){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=s,this.appCheckTokenProvider_=l,this.log_=As("p:rest:"),this.listens_={}}listen(e,n,s,l){const u=e._path.toString();this.log_("Listen called for "+u+" "+e._queryIdentifier);const d=pl.getListenId_(e,s),f={};this.listens_[d]=f;const m=_m(e._queryParams);this.restRequest_(u+".json",m,(g,E)=>{let y=E;if(g===404&&(y=null,g=null),g===null&&this.onDataUpdate_(u,y,!1,s),ri(this.listens_,d)===f){let C;g?g===401?C="permission_denied":C="rest_error:"+g:C="ok",l(C,null)}})}unlisten(e,n){const s=pl.getListenId_(e,n);delete this.listens_[s]}get(e){const n=_m(e._queryParams),s=e._path.toString(),l=new Is;return this.restRequest_(s+".json",n,(u,d)=>{let f=d;u===404&&(f=null,u=null),u===null?(this.onDataUpdate_(s,f,!1,null),l.resolve(f)):l.reject(new Error(f))}),l.promise}refreshAuthToken(e){}restRequest_(e,n={},s){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([l,u])=>{l&&l.accessToken&&(n.auth=l.accessToken),u&&u.token&&(n.ac=u.token);const d=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+hi(n);this.log_("Sending REST request for "+d);const f=new XMLHttpRequest;f.onreadystatechange=()=>{if(s&&f.readyState===4){this.log_("REST Response for "+d+" received. status:",f.status,"response:",f.responseText);let m=null;if(f.status>=200&&f.status<300){try{m=ps(f.responseText)}catch{et("Failed to parse JSON response for "+d+": "+f.responseText)}s(null,m)}else f.status!==401&&f.status!==404&&et("Got unsuccessful REST response for "+d+" Status: "+f.status),s(f.status);s=null}},f.open("GET",d,!0),f.send()})}}/**
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
 */class jC{constructor(){this.rootNode_=K.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
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
 */function ml(){return{value:null,children:new Map}}function i_(i,e,n){if(te(e))i.value=n,i.children.clear();else if(i.value!==null)i.value=i.value.updateChild(e,n);else{const s=J(e);i.children.has(s)||i.children.set(s,ml());const l=i.children.get(s);e=me(e),i_(l,e,n)}}function hc(i,e,n){i.value!==null?n(e,i.value):VC(i,(s,l)=>{const u=new de(e.toString()+"/"+s);hc(l,u,n)})}function VC(i,e){i.children.forEach((n,s)=>{e(s,n)})}/**
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
 */class BC{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&Ke(this.last_,(s,l)=>{n[s]=n[s]-l}),this.last_=e,n}}/**
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
 */const ym=10*1e3,HC=30*1e3,$C=5*60*1e3;class GC{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new BC(e);const s=ym+(HC-ym)*Math.random();cs(this.reportStats_.bind(this),Math.floor(s))}reportStats_(){const e=this.statsListener_.get(),n={};let s=!1;Ke(e,(l,u)=>{u>0&&Zt(this.statsToReport_,l)&&(n[l]=u,s=!0)}),s&&this.server_.reportStats(n),cs(this.reportStats_.bind(this),Math.floor(Math.random()*2*$C))}}/**
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
 */var Wt;(function(i){i[i.OVERWRITE=0]="OVERWRITE",i[i.MERGE=1]="MERGE",i[i.ACK_USER_WRITE=2]="ACK_USER_WRITE",i[i.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(Wt||(Wt={}));function Jc(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function Zc(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function ed(i){return{fromUser:!1,fromServer:!0,queryId:i,tagged:!0}}/**
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
 */class gl{constructor(e,n,s){this.path=e,this.affectedTree=n,this.revert=s,this.type=Wt.ACK_USER_WRITE,this.source=Jc()}operationForChild(e){if(te(this.path)){if(this.affectedTree.value!=null)return D(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new de(e));return new gl(oe(),n,this.revert)}}else return D(J(this.path)===e,"operationForChild called for unrelated child."),new gl(me(this.path),this.affectedTree,this.revert)}}/**
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
 */class Ss{constructor(e,n){this.source=e,this.path=n,this.type=Wt.LISTEN_COMPLETE}operationForChild(e){return te(this.path)?new Ss(this.source,oe()):new Ss(this.source,me(this.path))}}/**
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
 */class yr{constructor(e,n,s){this.source=e,this.path=n,this.snap=s,this.type=Wt.OVERWRITE}operationForChild(e){return te(this.path)?new yr(this.source,oe(),this.snap.getImmediateChild(e)):new yr(this.source,me(this.path),this.snap)}}/**
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
 */class ai{constructor(e,n,s){this.source=e,this.path=n,this.children=s,this.type=Wt.MERGE}operationForChild(e){if(te(this.path)){const n=this.children.subtree(new de(e));return n.isEmpty()?null:n.value?new yr(this.source,oe(),n.value):new ai(this.source,oe(),n)}else return D(J(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new ai(this.source,me(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
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
 */class wr{constructor(e,n,s){this.node_=e,this.fullyInitialized_=n,this.filtered_=s}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(te(e))return this.isFullyInitialized()&&!this.filtered_;const n=J(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
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
 */class KC{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function qC(i,e,n,s){const l=[],u=[];return e.forEach(d=>{d.type==="child_changed"&&i.index_.indexedValueChanged(d.oldSnap,d.snapshotNode)&&u.push(UC(d.childName,d.snapshotNode))}),ls(i,l,"child_removed",e,s,n),ls(i,l,"child_added",e,s,n),ls(i,l,"child_moved",u,s,n),ls(i,l,"child_changed",e,s,n),ls(i,l,"value",e,s,n),l}function ls(i,e,n,s,l,u){const d=s.filter(f=>f.type===n);d.sort((f,m)=>YC(i,f,m)),d.forEach(f=>{const m=QC(i,f,u);l.forEach(g=>{g.respondsTo(f.type)&&e.push(g.createEvent(m,i.query_))})})}function QC(i,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,i.index_)),e}function YC(i,e,n){if(e.childName==null||n.childName==null)throw di("Should only compare child_ events.");const s=new Z(e.childName,e.snapshotNode),l=new Z(n.childName,n.snapshotNode);return i.index_.compare(s,l)}/**
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
 */function xl(i,e){return{eventCache:i,serverCache:e}}function ds(i,e,n,s){return xl(new wr(e,n,s),i.serverCache)}function s_(i,e,n,s){return xl(i.eventCache,new wr(e,n,s))}function fc(i){return i.eventCache.isFullyInitialized()?i.eventCache.getNode():null}function Er(i){return i.serverCache.isFullyInitialized()?i.serverCache.getNode():null}/**
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
 */let Yu;const XC=()=>(Yu||(Yu=new ht(MS)),Yu);class pe{static fromObject(e){let n=new pe(null);return Ke(e,(s,l)=>{n=n.set(new de(s),l)}),n}constructor(e,n=XC()){this.value=e,this.children=n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:oe(),value:this.value};if(te(e))return null;{const s=J(e),l=this.children.get(s);if(l!==null){const u=l.findRootMostMatchingPathAndValue(me(e),n);return u!=null?{path:Ie(new de(s),u.path),value:u.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(te(e))return this;{const n=J(e),s=this.children.get(n);return s!==null?s.subtree(me(e)):new pe(null)}}set(e,n){if(te(e))return new pe(n,this.children);{const s=J(e),u=(this.children.get(s)||new pe(null)).set(me(e),n),d=this.children.insert(s,u);return new pe(this.value,d)}}remove(e){if(te(e))return this.children.isEmpty()?new pe(null):new pe(null,this.children);{const n=J(e),s=this.children.get(n);if(s){const l=s.remove(me(e));let u;return l.isEmpty()?u=this.children.remove(n):u=this.children.insert(n,l),this.value===null&&u.isEmpty()?new pe(null):new pe(this.value,u)}else return this}}get(e){if(te(e))return this.value;{const n=J(e),s=this.children.get(n);return s?s.get(me(e)):null}}setTree(e,n){if(te(e))return n;{const s=J(e),u=(this.children.get(s)||new pe(null)).setTree(me(e),n);let d;return u.isEmpty()?d=this.children.remove(s):d=this.children.insert(s,u),new pe(this.value,d)}}fold(e){return this.fold_(oe(),e)}fold_(e,n){const s={};return this.children.inorderTraversal((l,u)=>{s[l]=u.fold_(Ie(e,l),n)}),n(e,this.value,s)}findOnPath(e,n){return this.findOnPath_(e,oe(),n)}findOnPath_(e,n,s){const l=this.value?s(n,this.value):!1;if(l)return l;if(te(e))return null;{const u=J(e),d=this.children.get(u);return d?d.findOnPath_(me(e),Ie(n,u),s):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,oe(),n)}foreachOnPath_(e,n,s){if(te(e))return this;{this.value&&s(n,this.value);const l=J(e),u=this.children.get(l);return u?u.foreachOnPath_(me(e),Ie(n,l),s):new pe(null)}}foreach(e){this.foreach_(oe(),e)}foreach_(e,n){this.children.inorderTraversal((s,l)=>{l.foreach_(Ie(e,s),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,s)=>{s.value&&e(n,s.value)})}}/**
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
 */class Vt{constructor(e){this.writeTree_=e}static empty(){return new Vt(new pe(null))}}function hs(i,e,n){if(te(e))return new Vt(new pe(n));{const s=i.writeTree_.findRootMostValueAndPath(e);if(s!=null){const l=s.path;let u=s.value;const d=dt(l,e);return u=u.updateChild(d,n),new Vt(i.writeTree_.set(l,u))}else{const l=new pe(n),u=i.writeTree_.setTree(e,l);return new Vt(u)}}}function pc(i,e,n){let s=i;return Ke(n,(l,u)=>{s=hs(s,Ie(e,l),u)}),s}function wm(i,e){if(te(e))return Vt.empty();{const n=i.writeTree_.setTree(e,new pe(null));return new Vt(n)}}function mc(i,e){return Cr(i,e)!=null}function Cr(i,e){const n=i.writeTree_.findRootMostValueAndPath(e);return n!=null?i.writeTree_.get(n.path).getChild(dt(n.path,e)):null}function Em(i){const e=[],n=i.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(ke,(s,l)=>{e.push(new Z(s,l))}):i.writeTree_.children.inorderTraversal((s,l)=>{l.value!=null&&e.push(new Z(s,l.value))}),e}function $n(i,e){if(te(e))return i;{const n=Cr(i,e);return n!=null?new Vt(new pe(n)):new Vt(i.writeTree_.subtree(e))}}function gc(i){return i.writeTree_.isEmpty()}function ui(i,e){return o_(oe(),i.writeTree_,e)}function o_(i,e,n){if(e.value!=null)return n.updateChild(i,e.value);{let s=null;return e.children.inorderTraversal((l,u)=>{l===".priority"?(D(u.value!==null,"Priority writes must always be leaf nodes"),s=u.value):n=o_(Ie(i,l),u,n)}),!n.getChild(i).isEmpty()&&s!==null&&(n=n.updateChild(Ie(i,".priority"),s)),n}}/**
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
 */function td(i,e){return c_(e,i)}function JC(i,e,n,s,l){D(s>i.lastWriteId,"Stacking an older write on top of newer ones"),l===void 0&&(l=!0),i.allWrites.push({path:e,snap:n,writeId:s,visible:l}),l&&(i.visibleWrites=hs(i.visibleWrites,e,n)),i.lastWriteId=s}function ZC(i,e,n,s){D(s>i.lastWriteId,"Stacking an older merge on top of newer ones"),i.allWrites.push({path:e,children:n,writeId:s,visible:!0}),i.visibleWrites=pc(i.visibleWrites,e,n),i.lastWriteId=s}function eI(i,e){for(let n=0;n<i.allWrites.length;n++){const s=i.allWrites[n];if(s.writeId===e)return s}return null}function tI(i,e){const n=i.allWrites.findIndex(f=>f.writeId===e);D(n>=0,"removeWrite called with nonexistent writeId.");const s=i.allWrites[n];i.allWrites.splice(n,1);let l=s.visible,u=!1,d=i.allWrites.length-1;for(;l&&d>=0;){const f=i.allWrites[d];f.visible&&(d>=n&&nI(f,s.path)?l=!1:Nt(s.path,f.path)&&(u=!0)),d--}if(l){if(u)return rI(i),!0;if(s.snap)i.visibleWrites=wm(i.visibleWrites,s.path);else{const f=s.children;Ke(f,m=>{i.visibleWrites=wm(i.visibleWrites,Ie(s.path,m))})}return!0}else return!1}function nI(i,e){if(i.snap)return Nt(i.path,e);for(const n in i.children)if(i.children.hasOwnProperty(n)&&Nt(Ie(i.path,n),e))return!0;return!1}function rI(i){i.visibleWrites=l_(i.allWrites,iI,oe()),i.allWrites.length>0?i.lastWriteId=i.allWrites[i.allWrites.length-1].writeId:i.lastWriteId=-1}function iI(i){return i.visible}function l_(i,e,n){let s=Vt.empty();for(let l=0;l<i.length;++l){const u=i[l];if(e(u)){const d=u.path;let f;if(u.snap)Nt(n,d)?(f=dt(n,d),s=hs(s,f,u.snap)):Nt(d,n)&&(f=dt(d,n),s=hs(s,oe(),u.snap.getChild(f)));else if(u.children){if(Nt(n,d))f=dt(n,d),s=pc(s,f,u.children);else if(Nt(d,n))if(f=dt(d,n),te(f))s=pc(s,oe(),u.children);else{const m=ri(u.children,J(f));if(m){const g=m.getChild(me(f));s=hs(s,oe(),g)}}}else throw di("WriteRecord should have .snap or .children")}}return s}function a_(i,e,n,s,l){if(!s&&!l){const u=Cr(i.visibleWrites,e);if(u!=null)return u;{const d=$n(i.visibleWrites,e);if(gc(d))return n;if(n==null&&!mc(d,oe()))return null;{const f=n||K.EMPTY_NODE;return ui(d,f)}}}else{const u=$n(i.visibleWrites,e);if(!l&&gc(u))return n;if(!l&&n==null&&!mc(u,oe()))return null;{const d=function(g){return(g.visible||l)&&(!s||!~s.indexOf(g.writeId))&&(Nt(g.path,e)||Nt(e,g.path))},f=l_(i.allWrites,d,e),m=n||K.EMPTY_NODE;return ui(f,m)}}}function sI(i,e,n){let s=K.EMPTY_NODE;const l=Cr(i.visibleWrites,e);if(l)return l.isLeafNode()||l.forEachChild(ke,(u,d)=>{s=s.updateImmediateChild(u,d)}),s;if(n){const u=$n(i.visibleWrites,e);return n.forEachChild(ke,(d,f)=>{const m=ui($n(u,new de(d)),f);s=s.updateImmediateChild(d,m)}),Em(u).forEach(d=>{s=s.updateImmediateChild(d.name,d.node)}),s}else{const u=$n(i.visibleWrites,e);return Em(u).forEach(d=>{s=s.updateImmediateChild(d.name,d.node)}),s}}function oI(i,e,n,s,l){D(s||l,"Either existingEventSnap or existingServerSnap must exist");const u=Ie(e,n);if(mc(i.visibleWrites,u))return null;{const d=$n(i.visibleWrites,u);return gc(d)?l.getChild(n):ui(d,l.getChild(n))}}function lI(i,e,n,s){const l=Ie(e,n),u=Cr(i.visibleWrites,l);if(u!=null)return u;if(s.isCompleteForChild(n)){const d=$n(i.visibleWrites,l);return ui(d,s.getNode().getImmediateChild(n))}else return null}function aI(i,e){return Cr(i.visibleWrites,e)}function uI(i,e,n,s,l,u,d){let f;const m=$n(i.visibleWrites,e),g=Cr(m,oe());if(g!=null)f=g;else if(n!=null)f=ui(m,n);else return[];if(f=f.withIndex(d),!f.isEmpty()&&!f.isLeafNode()){const E=[],y=d.getCompare(),C=u?f.getReverseIteratorFrom(s,d):f.getIteratorFrom(s,d);let x=C.getNext();for(;x&&E.length<l;)y(x,s)!==0&&E.push(x),x=C.getNext();return E}else return[]}function cI(){return{visibleWrites:Vt.empty(),allWrites:[],lastWriteId:-1}}function _l(i,e,n,s){return a_(i.writeTree,i.treePath,e,n,s)}function nd(i,e){return sI(i.writeTree,i.treePath,e)}function Sm(i,e,n,s){return oI(i.writeTree,i.treePath,e,n,s)}function vl(i,e){return aI(i.writeTree,Ie(i.treePath,e))}function dI(i,e,n,s,l,u){return uI(i.writeTree,i.treePath,e,n,s,l,u)}function rd(i,e,n){return lI(i.writeTree,i.treePath,e,n)}function u_(i,e){return c_(Ie(i.treePath,e),i.writeTree)}function c_(i,e){return{treePath:i,writeTree:e}}/**
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
 */class hI{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,s=e.childName;D(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),D(s!==".priority","Only non-priority child changes can be tracked.");const l=this.changeMap.get(s);if(l){const u=l.type;if(n==="child_added"&&u==="child_removed")this.changeMap.set(s,ws(s,e.snapshotNode,l.snapshotNode));else if(n==="child_removed"&&u==="child_added")this.changeMap.delete(s);else if(n==="child_removed"&&u==="child_changed")this.changeMap.set(s,ys(s,l.oldSnap));else if(n==="child_changed"&&u==="child_added")this.changeMap.set(s,li(s,e.snapshotNode));else if(n==="child_changed"&&u==="child_changed")this.changeMap.set(s,ws(s,e.snapshotNode,l.oldSnap));else throw di("Illegal combination of changes: "+e+" occurred after "+l)}else this.changeMap.set(s,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
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
 */class fI{getCompleteChild(e){return null}getChildAfterChild(e,n,s){return null}}const d_=new fI;class id{constructor(e,n,s=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=s}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const s=this.optCompleteServerCache_!=null?new wr(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return rd(this.writes_,e,s)}}getChildAfterChild(e,n,s){const l=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:Er(this.viewCache_),u=dI(this.writes_,l,n,1,s,e);return u.length===0?null:u[0]}}/**
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
 */function pI(i){return{filter:i}}function mI(i,e){D(e.eventCache.getNode().isIndexed(i.filter.getIndex()),"Event snap not indexed"),D(e.serverCache.getNode().isIndexed(i.filter.getIndex()),"Server snap not indexed")}function gI(i,e,n,s,l){const u=new hI;let d,f;if(n.type===Wt.OVERWRITE){const g=n;g.source.fromUser?d=_c(i,e,g.path,g.snap,s,l,u):(D(g.source.fromServer,"Unknown source."),f=g.source.tagged||e.serverCache.isFiltered()&&!te(g.path),d=yl(i,e,g.path,g.snap,s,l,f,u))}else if(n.type===Wt.MERGE){const g=n;g.source.fromUser?d=vI(i,e,g.path,g.children,s,l,u):(D(g.source.fromServer,"Unknown source."),f=g.source.tagged||e.serverCache.isFiltered(),d=vc(i,e,g.path,g.children,s,l,f,u))}else if(n.type===Wt.ACK_USER_WRITE){const g=n;g.revert?d=EI(i,e,g.path,s,l,u):d=yI(i,e,g.path,g.affectedTree,s,l,u)}else if(n.type===Wt.LISTEN_COMPLETE)d=wI(i,e,n.path,s,u);else throw di("Unknown operation type: "+n.type);const m=u.getChanges();return _I(e,d,m),{viewCache:d,changes:m}}function _I(i,e,n){const s=e.eventCache;if(s.isFullyInitialized()){const l=s.getNode().isLeafNode()||s.getNode().isEmpty(),u=fc(i);(n.length>0||!i.eventCache.isFullyInitialized()||l&&!s.getNode().equals(u)||!s.getNode().getPriority().equals(u.getPriority()))&&n.push(r_(fc(e)))}}function h_(i,e,n,s,l,u){const d=e.eventCache;if(vl(s,n)!=null)return e;{let f,m;if(te(n))if(D(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const g=Er(e),E=g instanceof K?g:K.EMPTY_NODE,y=nd(s,E);f=i.filter.updateFullNode(e.eventCache.getNode(),y,u)}else{const g=_l(s,Er(e));f=i.filter.updateFullNode(e.eventCache.getNode(),g,u)}else{const g=J(n);if(g===".priority"){D(Gn(n)===1,"Can't have a priority with additional path components");const E=d.getNode();m=e.serverCache.getNode();const y=Sm(s,n,E,m);y!=null?f=i.filter.updatePriority(E,y):f=d.getNode()}else{const E=me(n);let y;if(d.isCompleteForChild(g)){m=e.serverCache.getNode();const C=Sm(s,n,d.getNode(),m);C!=null?y=d.getNode().getImmediateChild(g).updateChild(E,C):y=d.getNode().getImmediateChild(g)}else y=rd(s,g,e.serverCache);y!=null?f=i.filter.updateChild(d.getNode(),g,y,E,l,u):f=d.getNode()}}return ds(e,f,d.isFullyInitialized()||te(n),i.filter.filtersNodes())}}function yl(i,e,n,s,l,u,d,f){const m=e.serverCache;let g;const E=d?i.filter:i.filter.getIndexedFilter();if(te(n))g=E.updateFullNode(m.getNode(),s,null);else if(E.filtersNodes()&&!m.isFiltered()){const x=m.getNode().updateChild(n,s);g=E.updateFullNode(m.getNode(),x,null)}else{const x=J(n);if(!m.isCompleteForPath(n)&&Gn(n)>1)return e;const L=me(n),$=m.getNode().getImmediateChild(x).updateChild(L,s);x===".priority"?g=E.updatePriority(m.getNode(),$):g=E.updateChild(m.getNode(),x,$,L,d_,null)}const y=s_(e,g,m.isFullyInitialized()||te(n),E.filtersNodes()),C=new id(l,y,u);return h_(i,y,n,l,C,f)}function _c(i,e,n,s,l,u,d){const f=e.eventCache;let m,g;const E=new id(l,e,u);if(te(n))g=i.filter.updateFullNode(e.eventCache.getNode(),s,d),m=ds(e,g,!0,i.filter.filtersNodes());else{const y=J(n);if(y===".priority")g=i.filter.updatePriority(e.eventCache.getNode(),s),m=ds(e,g,f.isFullyInitialized(),f.isFiltered());else{const C=me(n),x=f.getNode().getImmediateChild(y);let L;if(te(C))L=s;else{const j=E.getCompleteChild(y);j!=null?Gc(C)===".priority"&&j.getChild(Yg(C)).isEmpty()?L=j:L=j.updateChild(C,s):L=K.EMPTY_NODE}if(x.equals(L))m=e;else{const j=i.filter.updateChild(f.getNode(),y,L,C,E,d);m=ds(e,j,f.isFullyInitialized(),i.filter.filtersNodes())}}}return m}function Cm(i,e){return i.eventCache.isCompleteForChild(e)}function vI(i,e,n,s,l,u,d){let f=e;return s.foreach((m,g)=>{const E=Ie(n,m);Cm(e,J(E))&&(f=_c(i,f,E,g,l,u,d))}),s.foreach((m,g)=>{const E=Ie(n,m);Cm(e,J(E))||(f=_c(i,f,E,g,l,u,d))}),f}function Im(i,e,n){return n.foreach((s,l)=>{e=e.updateChild(s,l)}),e}function vc(i,e,n,s,l,u,d,f){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let m=e,g;te(n)?g=s:g=new pe(null).setTree(n,s);const E=e.serverCache.getNode();return g.children.inorderTraversal((y,C)=>{if(E.hasChild(y)){const x=e.serverCache.getNode().getImmediateChild(y),L=Im(i,x,C);m=yl(i,m,new de(y),L,l,u,d,f)}}),g.children.inorderTraversal((y,C)=>{const x=!e.serverCache.isCompleteForChild(y)&&C.value===null;if(!E.hasChild(y)&&!x){const L=e.serverCache.getNode().getImmediateChild(y),j=Im(i,L,C);m=yl(i,m,new de(y),j,l,u,d,f)}}),m}function yI(i,e,n,s,l,u,d){if(vl(l,n)!=null)return e;const f=e.serverCache.isFiltered(),m=e.serverCache;if(s.value!=null){if(te(n)&&m.isFullyInitialized()||m.isCompleteForPath(n))return yl(i,e,n,m.getNode().getChild(n),l,u,f,d);if(te(n)){let g=new pe(null);return m.getNode().forEachChild(ti,(E,y)=>{g=g.set(new de(E),y)}),vc(i,e,n,g,l,u,f,d)}else return e}else{let g=new pe(null);return s.foreach((E,y)=>{const C=Ie(n,E);m.isCompleteForPath(C)&&(g=g.set(E,m.getNode().getChild(C)))}),vc(i,e,n,g,l,u,f,d)}}function wI(i,e,n,s,l){const u=e.serverCache,d=s_(e,u.getNode(),u.isFullyInitialized()||te(n),u.isFiltered());return h_(i,d,n,s,d_,l)}function EI(i,e,n,s,l,u){let d;if(vl(s,n)!=null)return e;{const f=new id(s,e,l),m=e.eventCache.getNode();let g;if(te(n)||J(n)===".priority"){let E;if(e.serverCache.isFullyInitialized())E=_l(s,Er(e));else{const y=e.serverCache.getNode();D(y instanceof K,"serverChildren would be complete if leaf node"),E=nd(s,y)}E=E,g=i.filter.updateFullNode(m,E,u)}else{const E=J(n);let y=rd(s,E,e.serverCache);y==null&&e.serverCache.isCompleteForChild(E)&&(y=m.getImmediateChild(E)),y!=null?g=i.filter.updateChild(m,E,y,me(n),f,u):e.eventCache.getNode().hasChild(E)?g=i.filter.updateChild(m,E,K.EMPTY_NODE,me(n),f,u):g=m,g.isEmpty()&&e.serverCache.isFullyInitialized()&&(d=_l(s,Er(e)),d.isLeafNode()&&(g=i.filter.updateFullNode(g,d,u)))}return d=e.serverCache.isFullyInitialized()||vl(s,oe())!=null,ds(e,g,d,i.filter.filtersNodes())}}/**
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
 */class SI{constructor(e,n){this.query_=e,this.eventRegistrations_=[];const s=this.query_._queryParams,l=new Yc(s.getIndex()),u=WC(s);this.processor_=pI(u);const d=n.serverCache,f=n.eventCache,m=l.updateFullNode(K.EMPTY_NODE,d.getNode(),null),g=u.updateFullNode(K.EMPTY_NODE,f.getNode(),null),E=new wr(m,d.isFullyInitialized(),l.filtersNodes()),y=new wr(g,f.isFullyInitialized(),u.filtersNodes());this.viewCache_=xl(y,E),this.eventGenerator_=new KC(this.query_)}get query(){return this.query_}}function CI(i){return i.viewCache_.serverCache.getNode()}function II(i,e){const n=Er(i.viewCache_);return n&&(i.query._queryParams.loadsAllData()||!te(e)&&!n.getImmediateChild(J(e)).isEmpty())?n.getChild(e):null}function km(i){return i.eventRegistrations_.length===0}function kI(i,e){i.eventRegistrations_.push(e)}function Tm(i,e,n){const s=[];if(n){D(e==null,"A cancel should cancel all event registrations.");const l=i.query._path;i.eventRegistrations_.forEach(u=>{const d=u.createCancelEvent(n,l);d&&s.push(d)})}if(e){let l=[];for(let u=0;u<i.eventRegistrations_.length;++u){const d=i.eventRegistrations_[u];if(!d.matches(e))l.push(d);else if(e.hasAnyCallback()){l=l.concat(i.eventRegistrations_.slice(u+1));break}}i.eventRegistrations_=l}else i.eventRegistrations_=[];return s}function Nm(i,e,n,s){e.type===Wt.MERGE&&e.source.queryId!==null&&(D(Er(i.viewCache_),"We should always have a full cache before handling merges"),D(fc(i.viewCache_),"Missing event cache, even though we have a server cache"));const l=i.viewCache_,u=gI(i.processor_,l,e,n,s);return mI(i.processor_,u.viewCache),D(u.viewCache.serverCache.isFullyInitialized()||!l.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),i.viewCache_=u.viewCache,f_(i,u.changes,u.viewCache.eventCache.getNode(),null)}function TI(i,e){const n=i.viewCache_.eventCache,s=[];return n.getNode().isLeafNode()||n.getNode().forEachChild(ke,(u,d)=>{s.push(li(u,d))}),n.isFullyInitialized()&&s.push(r_(n.getNode())),f_(i,s,n.getNode(),e)}function f_(i,e,n,s){const l=s?[s]:i.eventRegistrations_;return qC(i.eventGenerator_,e,n,l)}/**
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
 */let wl;class NI{constructor(){this.views=new Map}}function RI(i){D(!wl,"__referenceConstructor has already been defined"),wl=i}function PI(){return D(wl,"Reference.ts has not been loaded"),wl}function AI(i){return i.views.size===0}function sd(i,e,n,s){const l=e.source.queryId;if(l!==null){const u=i.views.get(l);return D(u!=null,"SyncTree gave us an op for an invalid query."),Nm(u,e,n,s)}else{let u=[];for(const d of i.views.values())u=u.concat(Nm(d,e,n,s));return u}}function xI(i,e,n,s,l){const u=e._queryIdentifier,d=i.views.get(u);if(!d){let f=_l(n,l?s:null),m=!1;f?m=!0:s instanceof K?(f=nd(n,s),m=!1):(f=K.EMPTY_NODE,m=!1);const g=xl(new wr(f,m,!1),new wr(s,l,!1));return new SI(e,g)}return d}function OI(i,e,n,s,l,u){const d=xI(i,e,s,l,u);return i.views.has(e._queryIdentifier)||i.views.set(e._queryIdentifier,d),kI(d,n),TI(d,n)}function DI(i,e,n,s){const l=e._queryIdentifier,u=[];let d=[];const f=Kn(i);if(l==="default")for(const[m,g]of i.views.entries())d=d.concat(Tm(g,n,s)),km(g)&&(i.views.delete(m),g.query._queryParams.loadsAllData()||u.push(g.query));else{const m=i.views.get(l);m&&(d=d.concat(Tm(m,n,s)),km(m)&&(i.views.delete(l),m.query._queryParams.loadsAllData()||u.push(m.query)))}return f&&!Kn(i)&&u.push(new(PI())(e._repo,e._path)),{removed:u,events:d}}function p_(i){const e=[];for(const n of i.views.values())n.query._queryParams.loadsAllData()||e.push(n);return e}function ni(i,e){let n=null;for(const s of i.views.values())n=n||II(s,e);return n}function m_(i,e){if(e._queryParams.loadsAllData())return Ol(i);{const s=e._queryIdentifier;return i.views.get(s)}}function g_(i,e){return m_(i,e)!=null}function Kn(i){return Ol(i)!=null}function Ol(i){for(const e of i.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
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
 */let El;function LI(i){D(!El,"__referenceConstructor has already been defined"),El=i}function MI(){return D(El,"Reference.ts has not been loaded"),El}let bI=1;class Rm{constructor(e){this.listenProvider_=e,this.syncPointTree_=new pe(null),this.pendingWriteTree_=cI(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function __(i,e,n,s,l){return JC(i.pendingWriteTree_,e,n,s,l),l?gi(i,new yr(Jc(),e,n)):[]}function FI(i,e,n,s){ZC(i.pendingWriteTree_,e,n,s);const l=pe.fromObject(n);return gi(i,new ai(Jc(),e,l))}function jn(i,e,n=!1){const s=eI(i.pendingWriteTree_,e);if(tI(i.pendingWriteTree_,e)){let u=new pe(null);return s.snap!=null?u=u.set(oe(),!0):Ke(s.children,d=>{u=u.set(new de(d),!0)}),gi(i,new gl(s.path,u,n))}else return[]}function Dl(i,e,n){return gi(i,new yr(Zc(),e,n))}function UI(i,e,n){const s=pe.fromObject(n);return gi(i,new ai(Zc(),e,s))}function zI(i,e){return gi(i,new Ss(Zc(),e))}function WI(i,e,n){const s=ld(i,n);if(s){const l=ad(s),u=l.path,d=l.queryId,f=dt(u,e),m=new Ss(ed(d),f);return ud(i,u,m)}else return[]}function yc(i,e,n,s,l=!1){const u=e._path,d=i.syncPointTree_.get(u);let f=[];if(d&&(e._queryIdentifier==="default"||g_(d,e))){const m=DI(d,e,n,s);AI(d)&&(i.syncPointTree_=i.syncPointTree_.remove(u));const g=m.removed;if(f=m.events,!l){const E=g.findIndex(C=>C._queryParams.loadsAllData())!==-1,y=i.syncPointTree_.findOnPath(u,(C,x)=>Kn(x));if(E&&!y){const C=i.syncPointTree_.subtree(u);if(!C.isEmpty()){const x=BI(C);for(let L=0;L<x.length;++L){const j=x[L],$=j.query,Te=w_(i,j);i.listenProvider_.startListening(fs($),Sl(i,$),Te.hashFn,Te.onComplete)}}}!y&&g.length>0&&!s&&(E?i.listenProvider_.stopListening(fs(e),null):g.forEach(C=>{const x=i.queryToTagMap.get(Ll(C));i.listenProvider_.stopListening(fs(C),x)}))}HI(i,g)}return f}function jI(i,e,n,s){const l=ld(i,s);if(l!=null){const u=ad(l),d=u.path,f=u.queryId,m=dt(d,e),g=new yr(ed(f),m,n);return ud(i,d,g)}else return[]}function VI(i,e,n,s){const l=ld(i,s);if(l){const u=ad(l),d=u.path,f=u.queryId,m=dt(d,e),g=pe.fromObject(n),E=new ai(ed(f),m,g);return ud(i,d,E)}else return[]}function Pm(i,e,n,s=!1){const l=e._path;let u=null,d=!1;i.syncPointTree_.foreachOnPath(l,(C,x)=>{const L=dt(C,l);u=u||ni(x,L),d=d||Kn(x)});let f=i.syncPointTree_.get(l);f?(d=d||Kn(f),u=u||ni(f,oe())):(f=new NI,i.syncPointTree_=i.syncPointTree_.set(l,f));let m;u!=null?m=!0:(m=!1,u=K.EMPTY_NODE,i.syncPointTree_.subtree(l).foreachChild((x,L)=>{const j=ni(L,oe());j&&(u=u.updateImmediateChild(x,j))}));const g=g_(f,e);if(!g&&!e._queryParams.loadsAllData()){const C=Ll(e);D(!i.queryToTagMap.has(C),"View does not exist, but we have a tag");const x=$I();i.queryToTagMap.set(C,x),i.tagToQueryMap.set(x,C)}const E=td(i.pendingWriteTree_,l);let y=OI(f,e,n,E,u,m);if(!g&&!d&&!s){const C=m_(f,e);y=y.concat(GI(i,e,C))}return y}function od(i,e,n){const l=i.pendingWriteTree_,u=i.syncPointTree_.findOnPath(e,(d,f)=>{const m=dt(d,e),g=ni(f,m);if(g)return g});return a_(l,e,u,n,!0)}function gi(i,e){return v_(e,i.syncPointTree_,null,td(i.pendingWriteTree_,oe()))}function v_(i,e,n,s){if(te(i.path))return y_(i,e,n,s);{const l=e.get(oe());n==null&&l!=null&&(n=ni(l,oe()));let u=[];const d=J(i.path),f=i.operationForChild(d),m=e.children.get(d);if(m&&f){const g=n?n.getImmediateChild(d):null,E=u_(s,d);u=u.concat(v_(f,m,g,E))}return l&&(u=u.concat(sd(l,i,s,n))),u}}function y_(i,e,n,s){const l=e.get(oe());n==null&&l!=null&&(n=ni(l,oe()));let u=[];return e.children.inorderTraversal((d,f)=>{const m=n?n.getImmediateChild(d):null,g=u_(s,d),E=i.operationForChild(d);E&&(u=u.concat(y_(E,f,m,g)))}),l&&(u=u.concat(sd(l,i,s,n))),u}function w_(i,e){const n=e.query,s=Sl(i,n);return{hashFn:()=>(CI(e)||K.EMPTY_NODE).hash(),onComplete:l=>{if(l==="ok")return s?WI(i,n._path,s):zI(i,n._path);{const u=US(l,n);return yc(i,n,null,u)}}}}function Sl(i,e){const n=Ll(e);return i.queryToTagMap.get(n)}function Ll(i){return i._path.toString()+"$"+i._queryIdentifier}function ld(i,e){return i.tagToQueryMap.get(e)}function ad(i){const e=i.indexOf("$");return D(e!==-1&&e<i.length-1,"Bad queryKey."),{queryId:i.substr(e+1),path:new de(i.substr(0,e))}}function ud(i,e,n){const s=i.syncPointTree_.get(e);D(s,"Missing sync point for query tag that we're tracking");const l=td(i.pendingWriteTree_,e);return sd(s,n,l,null)}function BI(i){return i.fold((e,n,s)=>{if(n&&Kn(n))return[Ol(n)];{let l=[];return n&&(l=p_(n)),Ke(s,(u,d)=>{l=l.concat(d)}),l}})}function fs(i){return i._queryParams.loadsAllData()&&!i._queryParams.isDefault()?new(MI())(i._repo,i._path):i}function HI(i,e){for(let n=0;n<e.length;++n){const s=e[n];if(!s._queryParams.loadsAllData()){const l=Ll(s),u=i.queryToTagMap.get(l);i.queryToTagMap.delete(l),i.tagToQueryMap.delete(u)}}}function $I(){return bI++}function GI(i,e,n){const s=e._path,l=Sl(i,e),u=w_(i,n),d=i.listenProvider_.startListening(fs(e),l,u.hashFn,u.onComplete),f=i.syncPointTree_.subtree(s);if(l)D(!Kn(f.value),"If we're adding a query, it shouldn't be shadowed");else{const m=f.fold((g,E,y)=>{if(!te(g)&&E&&Kn(E))return[Ol(E).query];{let C=[];return E&&(C=C.concat(p_(E).map(x=>x.query))),Ke(y,(x,L)=>{C=C.concat(L)}),C}});for(let g=0;g<m.length;++g){const E=m[g];i.listenProvider_.stopListening(fs(E),Sl(i,E))}}return d}/**
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
 */class cd{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new cd(n)}node(){return this.node_}}class dd{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=Ie(this.path_,e);return new dd(this.syncTree_,n)}node(){return od(this.syncTree_,this.path_)}}const KI=function(i){return i=i||{},i.timestamp=i.timestamp||new Date().getTime(),i},Am=function(i,e,n){if(!i||typeof i!="object")return i;if(D(".sv"in i,"Unexpected leaf node or priority contents"),typeof i[".sv"]=="string")return qI(i[".sv"],e,n);if(typeof i[".sv"]=="object")return QI(i[".sv"],e);D(!1,"Unexpected server value: "+JSON.stringify(i,null,2))},qI=function(i,e,n){switch(i){case"timestamp":return n.timestamp;default:D(!1,"Unexpected server value: "+i)}},QI=function(i,e,n){i.hasOwnProperty("increment")||D(!1,"Unexpected server value: "+JSON.stringify(i,null,2));const s=i.increment;typeof s!="number"&&D(!1,"Unexpected increment value: "+s);const l=e.node();if(D(l!==null&&typeof l<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!l.isLeafNode())return s;const d=l.getValue();return typeof d!="number"?s:d+s},E_=function(i,e,n,s){return hd(e,new dd(n,i),s)},S_=function(i,e,n){return hd(i,new cd(e),n)};function hd(i,e,n){const s=i.getPriority().val(),l=Am(s,e.getImmediateChild(".priority"),n);let u;if(i.isLeafNode()){const d=i,f=Am(d.getValue(),e,n);return f!==d.getValue()||l!==d.getPriority().val()?new ze(f,je(l)):i}else{const d=i;return u=d,l!==d.getPriority().val()&&(u=u.updatePriority(new ze(l))),d.forEachChild(ke,(f,m)=>{const g=hd(m,e.getImmediateChild(f),n);g!==m&&(u=u.updateImmediateChild(f,g))}),u}}/**
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
 */class fd{constructor(e="",n=null,s={children:{},childCount:0}){this.name=e,this.parent=n,this.node=s}}function pd(i,e){let n=e instanceof de?e:new de(e),s=i,l=J(n);for(;l!==null;){const u=ri(s.node.children,l)||{children:{},childCount:0};s=new fd(l,s,u),n=me(n),l=J(n)}return s}function _i(i){return i.node.value}function C_(i,e){i.node.value=e,wc(i)}function I_(i){return i.node.childCount>0}function YI(i){return _i(i)===void 0&&!I_(i)}function Ml(i,e){Ke(i.node.children,(n,s)=>{e(new fd(n,i,s))})}function k_(i,e,n,s){n&&e(i),Ml(i,l=>{k_(l,e,!0)})}function XI(i,e,n){let s=i.parent;for(;s!==null;){if(e(s))return!0;s=s.parent}return!1}function Os(i){return new de(i.parent===null?i.name:Os(i.parent)+"/"+i.name)}function wc(i){i.parent!==null&&JI(i.parent,i.name,i)}function JI(i,e,n){const s=YI(n),l=Zt(i.node.children,e);s&&l?(delete i.node.children[e],i.node.childCount--,wc(i)):!s&&!l&&(i.node.children[e]=n.node,i.node.childCount++,wc(i))}/**
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
 */const ZI=/[\[\].#$\/\u0000-\u001F\u007F]/,ek=/[\[\].#$\u0000-\u001F\u007F]/,Xu=10*1024*1024,md=function(i){return typeof i=="string"&&i.length!==0&&!ZI.test(i)},T_=function(i){return typeof i=="string"&&i.length!==0&&!ek.test(i)},tk=function(i){return i&&(i=i.replace(/^\/*\.info(\/|$)/,"/")),T_(i)},nk=function(i){return i===null||typeof i=="string"||typeof i=="number"&&!jc(i)||i&&typeof i=="object"&&Zt(i,".sv")},N_=function(i,e,n,s){s&&e===void 0||bl(Il(i,"value"),e,n)},bl=function(i,e,n){const s=n instanceof de?new vC(n,i):n;if(e===void 0)throw new Error(i+"contains undefined "+dr(s));if(typeof e=="function")throw new Error(i+"contains a function "+dr(s)+" with contents = "+e.toString());if(jc(e))throw new Error(i+"contains "+e.toString()+" "+dr(s));if(typeof e=="string"&&e.length>Xu/3&&kl(e)>Xu)throw new Error(i+"contains a string greater than "+Xu+" utf8 bytes "+dr(s)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let l=!1,u=!1;if(Ke(e,(d,f)=>{if(d===".value")l=!0;else if(d!==".priority"&&d!==".sv"&&(u=!0,!md(d)))throw new Error(i+" contains an invalid key ("+d+") "+dr(s)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);yC(s,d),bl(i,f,s),wC(s)}),l&&u)throw new Error(i+' contains ".value" child '+dr(s)+" in addition to actual children.")}},rk=function(i,e){let n,s;for(n=0;n<e.length;n++){s=e[n];const u=vs(s);for(let d=0;d<u.length;d++)if(!(u[d]===".priority"&&d===u.length-1)){if(!md(u[d]))throw new Error(i+"contains an invalid key ("+u[d]+") in path "+s.toString()+`. Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`)}}e.sort(_C);let l=null;for(n=0;n<e.length;n++){if(s=e[n],l!==null&&Nt(l,s))throw new Error(i+"contains a path "+l.toString()+" that is ancestor of another path "+s.toString());l=s}},ik=function(i,e,n,s){const l=Il(i,"values");if(!(e&&typeof e=="object")||Array.isArray(e))throw new Error(l+" must be an object containing the children to replace.");const u=[];Ke(e,(d,f)=>{const m=new de(d);if(bl(l,f,Ie(n,m)),Gc(m)===".priority"&&!nk(f))throw new Error(l+"contains an invalid value for '"+m.toString()+"', which must be a valid Firebase priority (a string, finite number, server value, or null).");u.push(m)}),rk(l,u)},R_=function(i,e,n,s){if(!T_(n))throw new Error(Il(i,e)+'was an invalid path = "'+n+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},sk=function(i,e,n,s){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),R_(i,e,n)},gd=function(i,e){if(J(e)===".info")throw new Error(i+" failed = Can't modify data under /.info/")},ok=function(i,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!md(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!tk(n))throw new Error(Il(i,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
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
 */class lk{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function Fl(i,e){let n=null;for(let s=0;s<e.length;s++){const l=e[s],u=l.getPath();n!==null&&!Kc(u,n.path)&&(i.eventLists_.push(n),n=null),n===null&&(n={events:[],path:u}),n.events.push(l)}n&&i.eventLists_.push(n)}function P_(i,e,n){Fl(i,n),A_(i,s=>Kc(s,e))}function Bt(i,e,n){Fl(i,n),A_(i,s=>Nt(s,e)||Nt(e,s))}function A_(i,e){i.recursionDepth_++;let n=!0;for(let s=0;s<i.eventLists_.length;s++){const l=i.eventLists_[s];if(l){const u=l.path;e(u)?(ak(i.eventLists_[s]),i.eventLists_[s]=null):n=!1}}n&&(i.eventLists_=[]),i.recursionDepth_--}function ak(i){for(let e=0;e<i.events.length;e++){const n=i.events[e];if(n!==null){i.events[e]=null;const s=n.getEventRunner();us&&Ge("event: "+n.toString()),mi(s)}}}/**
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
 */const uk="repo_interrupt",ck=25;class dk{constructor(e,n,s,l){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=s,this.appCheckProvider_=l,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new lk,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=ml(),this.transactionQueueTree_=new fd,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function hk(i,e,n){if(i.stats_=Hc(i.repoInfo_),i.forceRestClient_||VS())i.server_=new pl(i.repoInfo_,(s,l,u,d)=>{xm(i,s,l,u,d)},i.authTokenProvider_,i.appCheckProvider_),setTimeout(()=>Om(i,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{Ve(n)}catch(s){throw new Error("Invalid authOverride provided: "+s)}}i.persistentConnection_=new pn(i.repoInfo_,e,(s,l,u,d)=>{xm(i,s,l,u,d)},s=>{Om(i,s)},s=>{fk(i,s)},i.authTokenProvider_,i.appCheckProvider_,n),i.server_=i.persistentConnection_}i.authTokenProvider_.addTokenChangeListener(s=>{i.server_.refreshAuthToken(s)}),i.appCheckProvider_.addTokenChangeListener(s=>{i.server_.refreshAppCheckToken(s.token)}),i.statsReporter_=KS(i.repoInfo_,()=>new GC(i.stats_,i.server_)),i.infoData_=new jC,i.infoSyncTree_=new Rm({startListening:(s,l,u,d)=>{let f=[];const m=i.infoData_.getNode(s._path);return m.isEmpty()||(f=Dl(i.infoSyncTree_,s._path,m),setTimeout(()=>{d("ok")},0)),f},stopListening:()=>{}}),_d(i,"connected",!1),i.serverSyncTree_=new Rm({startListening:(s,l,u,d)=>(i.server_.listen(s,u,l,(f,m)=>{const g=d(f,m);Bt(i.eventQueue_,s._path,g)}),[]),stopListening:(s,l)=>{i.server_.unlisten(s,l)}})}function x_(i){const n=i.infoData_.getNode(new de(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function Ul(i){return KI({timestamp:x_(i)})}function xm(i,e,n,s,l){i.dataUpdateCount++;const u=new de(e);n=i.interceptServerDataCallback_?i.interceptServerDataCallback_(e,n):n;let d=[];if(l)if(s){const m=rl(n,g=>je(g));d=VI(i.serverSyncTree_,u,m,l)}else{const m=je(n);d=jI(i.serverSyncTree_,u,m,l)}else if(s){const m=rl(n,g=>je(g));d=UI(i.serverSyncTree_,u,m)}else{const m=je(n);d=Dl(i.serverSyncTree_,u,m)}let f=u;d.length>0&&(f=ci(i,u)),Bt(i.eventQueue_,f,d)}function Om(i,e){_d(i,"connected",e),e===!1&&gk(i)}function fk(i,e){Ke(e,(n,s)=>{_d(i,n,s)})}function _d(i,e,n){const s=new de("/.info/"+e),l=je(n);i.infoData_.updateSnapshot(s,l);const u=Dl(i.infoSyncTree_,s,l);Bt(i.eventQueue_,s,u)}function vd(i){return i.nextWriteId_++}function pk(i,e,n,s,l){zl(i,"set",{path:e.toString(),value:n,priority:s});const u=Ul(i),d=je(n,s),f=od(i.serverSyncTree_,e),m=S_(d,f,u),g=vd(i),E=__(i.serverSyncTree_,e,m,g,!0);Fl(i.eventQueue_,E),i.server_.put(e.toString(),d.val(!0),(C,x)=>{const L=C==="ok";L||et("set at "+e+" failed: "+C);const j=jn(i.serverSyncTree_,g,!L);Bt(i.eventQueue_,e,j),Ec(i,l,C,x)});const y=wd(i,e);ci(i,y),Bt(i.eventQueue_,y,[])}function mk(i,e,n,s){zl(i,"update",{path:e.toString(),value:n});let l=!0;const u=Ul(i),d={};if(Ke(n,(f,m)=>{l=!1,d[f]=E_(Ie(e,f),je(m),i.serverSyncTree_,u)}),l)Ge("update() called with empty data.  Don't do anything."),Ec(i,s,"ok",void 0);else{const f=vd(i),m=FI(i.serverSyncTree_,e,d,f);Fl(i.eventQueue_,m),i.server_.merge(e.toString(),n,(g,E)=>{const y=g==="ok";y||et("update at "+e+" failed: "+g);const C=jn(i.serverSyncTree_,f,!y),x=C.length>0?ci(i,e):e;Bt(i.eventQueue_,x,C),Ec(i,s,g,E)}),Ke(n,g=>{const E=wd(i,Ie(e,g));ci(i,E)}),Bt(i.eventQueue_,e,[])}}function gk(i){zl(i,"onDisconnectEvents");const e=Ul(i),n=ml();hc(i.onDisconnect_,oe(),(l,u)=>{const d=E_(l,u,i.serverSyncTree_,e);i_(n,l,d)});let s=[];hc(n,oe(),(l,u)=>{s=s.concat(Dl(i.serverSyncTree_,l,u));const d=wd(i,l);ci(i,d)}),i.onDisconnect_=ml(),Bt(i.eventQueue_,oe(),s)}function _k(i,e,n){let s;J(e._path)===".info"?s=Pm(i.infoSyncTree_,e,n):s=Pm(i.serverSyncTree_,e,n),P_(i.eventQueue_,e._path,s)}function vk(i,e,n){let s;J(e._path)===".info"?s=yc(i.infoSyncTree_,e,n):s=yc(i.serverSyncTree_,e,n),P_(i.eventQueue_,e._path,s)}function yk(i){i.persistentConnection_&&i.persistentConnection_.interrupt(uk)}function zl(i,...e){let n="";i.persistentConnection_&&(n=i.persistentConnection_.id+":"),Ge(n,...e)}function Ec(i,e,n,s){e&&mi(()=>{if(n==="ok")e(null);else{const l=(n||"error").toUpperCase();let u=l;s&&(u+=": "+s);const d=new Error(u);d.code=l,e(d)}})}function O_(i,e,n){return od(i.serverSyncTree_,e,n)||K.EMPTY_NODE}function yd(i,e=i.transactionQueueTree_){if(e||Wl(i,e),_i(e)){const n=L_(i,e);D(n.length>0,"Sending zero length transaction queue"),n.every(l=>l.status===0)&&wk(i,Os(e),n)}else I_(e)&&Ml(e,n=>{yd(i,n)})}function wk(i,e,n){const s=n.map(g=>g.currentWriteId),l=O_(i,e,s);let u=l;const d=l.hash();for(let g=0;g<n.length;g++){const E=n[g];D(E.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),E.status=1,E.retryCount++;const y=dt(e,E.path);u=u.updateChild(y,E.currentOutputSnapshotRaw)}const f=u.val(!0),m=e;i.server_.put(m.toString(),f,g=>{zl(i,"transaction put response",{path:m.toString(),status:g});let E=[];if(g==="ok"){const y=[];for(let C=0;C<n.length;C++)n[C].status=2,E=E.concat(jn(i.serverSyncTree_,n[C].currentWriteId)),n[C].onComplete&&y.push(()=>n[C].onComplete(null,!0,n[C].currentOutputSnapshotResolved)),n[C].unwatcher();Wl(i,pd(i.transactionQueueTree_,e)),yd(i,i.transactionQueueTree_),Bt(i.eventQueue_,e,E);for(let C=0;C<y.length;C++)mi(y[C])}else{if(g==="datastale")for(let y=0;y<n.length;y++)n[y].status===3?n[y].status=4:n[y].status=0;else{et("transaction at "+m.toString()+" failed: "+g);for(let y=0;y<n.length;y++)n[y].status=4,n[y].abortReason=g}ci(i,e)}},d)}function ci(i,e){const n=D_(i,e),s=Os(n),l=L_(i,n);return Ek(i,l,s),s}function Ek(i,e,n){if(e.length===0)return;const s=[];let l=[];const d=e.filter(f=>f.status===0).map(f=>f.currentWriteId);for(let f=0;f<e.length;f++){const m=e[f],g=dt(n,m.path);let E=!1,y;if(D(g!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),m.status===4)E=!0,y=m.abortReason,l=l.concat(jn(i.serverSyncTree_,m.currentWriteId,!0));else if(m.status===0)if(m.retryCount>=ck)E=!0,y="maxretry",l=l.concat(jn(i.serverSyncTree_,m.currentWriteId,!0));else{const C=O_(i,m.path,d);m.currentInputSnapshot=C;const x=e[f].update(C.val());if(x!==void 0){bl("transaction failed: Data returned ",x,m.path);let L=je(x);typeof x=="object"&&x!=null&&Zt(x,".priority")||(L=L.updatePriority(C.getPriority()));const $=m.currentWriteId,Te=Ul(i),xe=S_(L,C,Te);m.currentOutputSnapshotRaw=L,m.currentOutputSnapshotResolved=xe,m.currentWriteId=vd(i),d.splice(d.indexOf($),1),l=l.concat(__(i.serverSyncTree_,m.path,xe,m.currentWriteId,m.applyLocally)),l=l.concat(jn(i.serverSyncTree_,$,!0))}else E=!0,y="nodata",l=l.concat(jn(i.serverSyncTree_,m.currentWriteId,!0))}Bt(i.eventQueue_,n,l),l=[],E&&(e[f].status=2,function(C){setTimeout(C,Math.floor(0))}(e[f].unwatcher),e[f].onComplete&&(y==="nodata"?s.push(()=>e[f].onComplete(null,!1,e[f].currentInputSnapshot)):s.push(()=>e[f].onComplete(new Error(y),!1,null))))}Wl(i,i.transactionQueueTree_);for(let f=0;f<s.length;f++)mi(s[f]);yd(i,i.transactionQueueTree_)}function D_(i,e){let n,s=i.transactionQueueTree_;for(n=J(e);n!==null&&_i(s)===void 0;)s=pd(s,n),e=me(e),n=J(e);return s}function L_(i,e){const n=[];return M_(i,e,n),n.sort((s,l)=>s.order-l.order),n}function M_(i,e,n){const s=_i(e);if(s)for(let l=0;l<s.length;l++)n.push(s[l]);Ml(e,l=>{M_(i,l,n)})}function Wl(i,e){const n=_i(e);if(n){let s=0;for(let l=0;l<n.length;l++)n[l].status!==2&&(n[s]=n[l],s++);n.length=s,C_(e,n.length>0?n:void 0)}Ml(e,s=>{Wl(i,s)})}function wd(i,e){const n=Os(D_(i,e)),s=pd(i.transactionQueueTree_,e);return XI(s,l=>{Ju(i,l)}),Ju(i,s),k_(s,l=>{Ju(i,l)}),n}function Ju(i,e){const n=_i(e);if(n){const s=[];let l=[],u=-1;for(let d=0;d<n.length;d++)n[d].status===3||(n[d].status===1?(D(u===d-1,"All SENT items should be at beginning of queue."),u=d,n[d].status=3,n[d].abortReason="set"):(D(n[d].status===0,"Unexpected transaction status in abort"),n[d].unwatcher(),l=l.concat(jn(i.serverSyncTree_,n[d].currentWriteId,!0)),n[d].onComplete&&s.push(n[d].onComplete.bind(null,new Error("set"),!1,null))));u===-1?C_(e,void 0):n.length=u+1,Bt(i.eventQueue_,Os(e),l);for(let d=0;d<s.length;d++)mi(s[d])}}/**
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
 */function Sk(i){let e="";const n=i.split("/");for(let s=0;s<n.length;s++)if(n[s].length>0){let l=n[s];try{l=decodeURIComponent(l.replace(/\+/g," "))}catch{}e+="/"+l}return e}function Ck(i){const e={};i.charAt(0)==="?"&&(i=i.substring(1));for(const n of i.split("&")){if(n.length===0)continue;const s=n.split("=");s.length===2?e[decodeURIComponent(s[0])]=decodeURIComponent(s[1]):et(`Invalid query segment '${n}' in query '${i}'`)}return e}const Dm=function(i,e){const n=Ik(i),s=n.namespace;n.domain==="firebase.com"&&_n(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!s||s==="undefined")&&n.domain!=="localhost"&&_n("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||DS();const l=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new jg(n.host,n.secure,s,l,e,"",s!==n.subdomain),path:new de(n.pathString)}},Ik=function(i){let e="",n="",s="",l="",u="",d=!0,f="https",m=443;if(typeof i=="string"){let g=i.indexOf("//");g>=0&&(f=i.substring(0,g-1),i=i.substring(g+2));let E=i.indexOf("/");E===-1&&(E=i.length);let y=i.indexOf("?");y===-1&&(y=i.length),e=i.substring(0,Math.min(E,y)),E<y&&(l=Sk(i.substring(E,y)));const C=Ck(i.substring(Math.min(i.length,y)));g=e.indexOf(":"),g>=0?(d=f==="https"||f==="wss",m=parseInt(e.substring(g+1),10)):g=e.length;const x=e.slice(0,g);if(x.toLowerCase()==="localhost")n="localhost";else if(x.split(".").length<=2)n=x;else{const L=e.indexOf(".");s=e.substring(0,L).toLowerCase(),n=e.substring(L+1),u=s}"ns"in C&&(u=C.ns)}return{host:e,port:m,domain:n,subdomain:s,secure:d,scheme:f,pathString:l,namespace:u}};/**
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
 */const Lm="-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz",kk=function(){let i=0;const e=[];return function(n){const s=n===i;i=n;let l;const u=new Array(8);for(l=7;l>=0;l--)u[l]=Lm.charAt(n%64),n=Math.floor(n/64);D(n===0,"Cannot push at time == 0");let d=u.join("");if(s){for(l=11;l>=0&&e[l]===63;l--)e[l]=0;e[l]++}else for(l=0;l<12;l++)e[l]=Math.floor(Math.random()*64);for(l=0;l<12;l++)d+=Lm.charAt(e[l]);return D(d.length===20,"nextPushId: Length should be 20."),d}}();/**
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
 */class Tk{constructor(e,n,s,l){this.eventType=e,this.eventRegistration=n,this.snapshot=s,this.prevName=l}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+Ve(this.snapshot.exportVal())}}class Nk{constructor(e,n,s){this.eventRegistration=e,this.error=n,this.path=s}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
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
 */class Rk{constructor(e,n){this.snapshotCallback=e,this.cancelCallback=n}onValue(e,n){this.snapshotCallback.call(null,e,n)}onCancel(e){return D(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
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
 */class Ed{constructor(e,n,s,l){this._repo=e,this._path=n,this._queryParams=s,this._orderByCalled=l}get key(){return te(this._path)?null:Gc(this._path)}get ref(){return new Qn(this._repo,this._path)}get _queryIdentifier(){const e=vm(this._queryParams),n=Vc(e);return n==="{}"?"default":n}get _queryObject(){return vm(this._queryParams)}isEqual(e){if(e=yt(e),!(e instanceof Ed))return!1;const n=this._repo===e._repo,s=Kc(this._path,e._path),l=this._queryIdentifier===e._queryIdentifier;return n&&s&&l}toJSON(){return this.toString()}toString(){return this._repo.toString()+gC(this._path)}}class Qn extends Ed{constructor(e,n){super(e,n,new Xc,!1)}get parent(){const e=Yg(this._path);return e===null?null:new Qn(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class Cl{constructor(e,n,s){this._node=e,this.ref=n,this._index=s}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const n=new de(e),s=Cs(this.ref,e);return new Cl(this._node.getChild(n),s,ke)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(s,l)=>e(new Cl(l,Cs(this.ref,s),ke)))}hasChild(e){const n=new de(e);return!this._node.getChild(n).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function qo(i,e){return i=yt(i),i._checkNotDeleted("ref"),e!==void 0?Cs(i._root,e):i._root}function Cs(i,e){return i=yt(i),J(i._path)===null?sk("child","path",e):R_("child","path",e),new Qn(i._repo,Ie(i._path,e))}function Pk(i,e){i=yt(i),gd("push",i._path),N_("push",e,i._path,!0);const n=x_(i._repo),s=kk(n),l=Cs(i,s),u=Cs(i,s);let d;return e!=null?d=b_(u,e).then(()=>u):d=Promise.resolve(u),l.then=d.then.bind(d),l.catch=d.then.bind(d,void 0),l}function Ak(i){return gd("remove",i._path),b_(i,null)}function b_(i,e){i=yt(i),gd("set",i._path),N_("set",e,i._path,!1);const n=new Is;return pk(i._repo,i._path,e,null,n.wrapCallback(()=>{})),n.promise}function xk(i,e){ik("update",e,i._path);const n=new Is;return mk(i._repo,i._path,e,n.wrapCallback(()=>{})),n.promise}class Sd{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,n){const s=n._queryParams.getIndex();return new Tk("value",this,new Cl(e.snapshotNode,new Qn(n._repo,n._path),s))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new Nk(this,e,n):null}matches(e){return e instanceof Sd?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}function Ok(i,e,n,s,l){const u=new Rk(n,void 0),d=new Sd(u);return _k(i._repo,i,d),()=>vk(i._repo,i,d)}function Dk(i,e,n,s){return Ok(i,"value",e)}RI(Qn);LI(Qn);/**
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
 */const Lk="FIREBASE_DATABASE_EMULATOR_HOST",Sc={};let Mk=!1;function bk(i,e,n,s){const l=e.lastIndexOf(":"),u=e.substring(0,l),d=Tl(u);i.repoInfo_=new jg(e,d,i.repoInfo_.namespace,i.repoInfo_.webSocketOnly,i.repoInfo_.nodeAdmin,i.repoInfo_.persistenceKey,i.repoInfo_.includeNamespaceInQueryParams,!0,n),s&&(i.authTokenProvider_=s)}function Fk(i,e,n,s,l){let u=s||i.options.databaseURL;u===void 0&&(i.options.projectId||_n("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),Ge("Using default host for project ",i.options.projectId),u=`${i.options.projectId}-default-rtdb.firebaseio.com`);let d=Dm(u,l),f=d.repoInfo,m;typeof process<"u"&&em&&(m=em[Lk]),m?(u=`http://${m}?ns=${f.namespace}`,d=Dm(u,l),f=d.repoInfo):d.repoInfo.secure;const g=new HS(i.name,i.options,e);ok("Invalid Firebase Database URL",d),te(d.path)||_n("Database URL must point to the root of a Firebase Database (not including a child path).");const E=zk(f,i,g,new BS(i,n));return new Wk(E,i)}function Uk(i,e){const n=Sc[e];(!n||n[i.key]!==i)&&_n(`Database ${e}(${i.repoInfo_}) has already been deleted.`),yk(i),delete n[i.key]}function zk(i,e,n,s){let l=Sc[e.name];l||(l={},Sc[e.name]=l);let u=l[i.toURLString()];return u&&_n("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),u=new dk(i,Mk,n,s),l[i.toURLString()]=u,u}class Wk{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(hk(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new Qn(this._repo,oe())),this._rootInternal}_delete(){return this._rootInternal!==null&&(Uk(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&_n("Cannot call "+e+" on a deleted database.")}}function jk(i=qm(),e){const n=Pc(i,"database").getImmediate({identifier:e});if(!n._instanceStarted){const s=Zy("database");s&&Vk(n,...s)}return n}function Vk(i,e,n,s={}){i=yt(i),i._checkNotDeleted("useEmulator");const l=`${e}:${n}`,u=i._repoInternal;if(i._instanceStarted){if(l===i._repoInternal.repoInfo_.host&&mr(s,u.repoInfo_.emulatorOptions))return;_n("connectDatabaseEmulator() cannot initialize or alter the emulator configuration after the database instance has started.")}let d;if(u.repoInfo_.nodeAdmin)s.mockUserToken&&_n('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),d=new el(el.OWNER);else if(s.mockUserToken){const f=typeof s.mockUserToken=="string"?s.mockUserToken:ew(s.mockUserToken,i.app.options.projectId);d=new el(f)}Tl(e)&&Hm(e),bk(u,l,s,d)}/**
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
 */function Bk(i){NS(fi),ii(new gr("database",(e,{instanceIdentifier:n})=>{const s=e.getProvider("app").getImmediate(),l=e.getProvider("auth-internal"),u=e.getProvider("app-check-internal");return Fk(s,l,u,n)},"PUBLIC").setMultipleInstances(!0)),Hn(tm,nm,i),Hn(tm,nm,"esm2017")}pn.prototype.simpleListen=function(i,e){this.sendRequest("q",{p:i},e)};pn.prototype.echo=function(i,e){this.sendRequest("echo",{d:i},e)};Bk();const Hk={apiKey:"AIzaSyDJ8KGaRaEPv_fghl6XpHZOB20qHK_mf6w",authDomain:"gamenote-4beae.firebaseapp.com",databaseURL:"https://gamenote-4beae-default-rtdb.firebaseio.com/",projectId:"gamenote-4beae",storageBucket:"gamenote-4beae.firebasestorage.app",messagingSenderId:"829418398367",appId:"1:829418398367:web:3d6744c89926c2a33778aa",measurementId:"G-XL2EWYQX5C"},F_=Km(Hk),Zu=kS(F_),$k=new cn,Qo=jk(F_),Gk=({onAuthChange:i})=>{const[e,n]=un.useState(null);un.useEffect(()=>{const u=Zu.onAuthStateChanged(d=>{d?(n(d),i(d)):n(null)},[i]);return()=>{u()}},[i]);const s=async()=>{try{const u=await L0(Zu,$k);console.log("ログイン成功",u.user)}catch(u){console.error("ログインエラー",u)}},l=async()=>{try{await p0(Zu)}catch(u){console.error("ログアウトエラー:",u)}};return le.jsx("div",{children:e?le.jsxs("div",{children:[le.jsxs("p",{children:["ログインユーザー: ",e.displayName]}),le.jsx("button",{onClick:l,children:"ログアウト"})]}):le.jsxs("div",{children:[le.jsx("p",{children:"ログインしていません"}),le.jsx("button",{onClick:s,children:"ログイン"})]})})},Kk=({posts:i,handleEdit:e,handleDelete:n})=>le.jsx("div",{className:"space-y-4",children:i.map(s=>le.jsxs("div",{className:"border p-3 rounded relative",children:[le.jsx("h2",{className:"font-semibold",children:s.title}),le.jsx("p",{children:s.comment}),le.jsxs("p",{className:"text-sm text-gray-500 mt-1",children:["投稿日: ",s.timestamp]})," ",le.jsxs("div",{className:"mt-2 space-x-2",children:[le.jsx("button",{onClick:()=>e(s),className:"text-blue-500 text-sm hover:underline",children:"編集"}),le.jsx("button",{onClick:()=>n(s.id),className:"text-red-500 text-sm hover:underline",children:"削除"})]})]},s.id))}),qk=()=>{const[i,e]=un.useState(null),[n,s]=un.useState(""),[l,u]=un.useState(""),[d,f]=un.useState([]),[m,g]=un.useState(null);un.useEffect(()=>{const x=qo(Qo,"posts"),L=Dk(x,j=>{const $=j.val();if($){const Te=Object.entries($).map(([xe,Ne])=>({id:xe,...Ne}));f(Te.reverse())}else f([])});return()=>L()},[]);const E=async x=>{if(x.preventDefault(),!n||!l)return;const L=new Date().toLocaleString();if(m){const j=qo(Qo,`posts/${m}`);await xk(j,{title:n,comment:l,timestamp:L}),g(null)}else{const j={title:n,comment:l,timestamp:L,userId:i.uid,userName:i.displayName||i.email};await Pk(qo(Qo,"posts"),j)}s(""),u("")},y=async x=>{await Ak(qo(Qo,`posts/${x}`))},C=x=>{s(x.title),u(x.comment),g(x.id)};return le.jsxs("div",{className:"p-6 max-w-xl mx-auto",children:[le.jsx("h1",{className:"text-2xl font-bold mb-4",children:"🎮 GameNote"}),le.jsx("h2",{children:"ログイン画面"}),le.jsx(Gk,{onAuthChange:e}),i?le.jsxs(le.Fragment,{children:[le.jsx(By,{handleSubmit:E,title:n,setTitle:s,comment:l,setComment:u,editingId:m,user:i}),le.jsx(Kk,{posts:d,handleEdit:C,handleDelete:y})]}):le.jsx("p",{className:"text-center text-gray-600 mt-4",children:"投稿するはログインしてください"})]})};Vy.createRoot(document.getElementById("root")).render(le.jsx(un.StrictMode,{children:le.jsx(qk,{})}));
