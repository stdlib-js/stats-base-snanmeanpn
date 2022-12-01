// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var t,e;t=this,e=function(){"use strict";var t,e="function"==typeof Object.defineProperty?Object.defineProperty:null,r=Object.defineProperty,o=Object.prototype,n=o.toString,a=o.__defineGetter__,l=o.__defineSetter__,u=o.__lookupGetter__,i=o.__lookupSetter__;t=function(){try{return e({},"x",{}),!0}catch(t){return!1}}()?r:function(t,e,r){var f,c,y,p;if("object"!=typeof t||null===t||"[object Array]"===n.call(t))throw new TypeError("invalid argument. First argument must be an object. Value: `"+t+"`.");if("object"!=typeof r||null===r||"[object Array]"===n.call(r))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+r+"`.");if((c="value"in r)&&(u.call(t,e)||i.call(t,e)?(f=t.__proto__,t.__proto__=o,delete t[e],t[e]=r.value,t.__proto__=f):t[e]=r.value),y="get"in r,p="set"in r,c&&(y||p))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return y&&a&&a.call(t,e,r.get),p&&l&&l.call(t,e,r.set),t};var f,c=t,y="function"==typeof Math.fround?Math.fround:null,p="function"==typeof Symbol&&"symbol"==typeof Symbol("foo"),b=Object.prototype.toString,d=Object.prototype.hasOwnProperty,_="function"==typeof Symbol?Symbol.toStringTag:"";f=p&&"symbol"==typeof Symbol.toStringTag?function(t){var e,r,o,n,a;if(null==t)return b.call(t);r=t[_],a=_,e=null!=(n=t)&&d.call(n,a);try{t[_]=void 0}catch(e){return b.call(t)}return o=b.call(t),e?t[_]=r:delete t[_],o}:function(t){return b.call(t)};var s,m=f,v="function"==typeof Float32Array,g=Number.POSITIVE_INFINITY,h="function"==typeof Float32Array?Float32Array:null,j="function"==typeof Float32Array?Float32Array:void 0;s=function(){var t,e,r;if("function"!=typeof h)return!1;try{e=new h([1,3.14,-3.14,5e40]),r=e,t=(v&&r instanceof Float32Array||"[object Float32Array]"===m(r))&&1===e[0]&&3.140000104904175===e[1]&&-3.140000104904175===e[2]&&e[3]===g}catch(e){t=!1}return t}()?j:function(){throw new Error("not implemented")};var w=new s(1),S="function"==typeof y?y:function(t){return w[0]=t,w[0]};function N(t,e,r){var o,n,a,l,u,i,f;if(t<=0)return NaN;if(1===t||0===r)return e[0];for(f=o=r<0?(1-t)*r:0,a=0,u=0,i=0;i<t;i++)(n=e[o])==n&&(a=S(a+n),u+=1),o+=r;if(0===u)return NaN;for(a=S(a/u),l=0,o=f,i=0;i<t;i++)(n=e[o])==n&&(l=S(l+S(n-a))),o+=r;return S(a+S(l/u))}return c(N,"ndarray",{configurable:!1,enumerable:!1,writable:!1,value:function(t,e,r,o){var n,a,l,u,i,f;if(t<=0)return NaN;if(1===t||0===r)return e[o];for(n=o,l=0,i=0,f=0;f<t;f++)(a=e[n])==a&&(l=S(l+a),i+=1),n+=r;if(0===i)return NaN;for(l=S(l/i),n=o,u=0,f=0;f<t;f++)(a=e[n])==a&&(u=S(u+S(a-l))),n+=r;return S(l+S(u/i))}}),N},"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(t="undefined"!=typeof globalThis?globalThis:t||self).snanmeanpn=e();
//# sourceMappingURL=index.js.map
