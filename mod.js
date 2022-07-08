// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var r="function"==typeof Object.defineProperty?Object.defineProperty:null;var t,e=Object.defineProperty,o=Object.prototype,n=o.toString,a=o.__defineGetter__,l=o.__defineSetter__,u=o.__lookupGetter__,i=o.__lookupSetter__;t=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?e:function(r,t,e){var f,c,y,p;if("object"!=typeof r||null===r||"[object Array]"===n.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof e||null===e||"[object Array]"===n.call(e))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+e+"`.");if((c="value"in e)&&(u.call(r,t)||i.call(r,t)?(f=r.__proto__,r.__proto__=o,delete r[t],r[t]=e.value,r.__proto__=f):r[t]=e.value),y="get"in e,p="set"in e,c&&(y||p))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return y&&a&&a.call(r,t,e.get),p&&l&&l.call(r,t,e.set),r};var f=t;var c="function"==typeof Math.fround?Math.fround:null;var y="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");var p=Object.prototype.toString;var _=Object.prototype.hasOwnProperty;var b,v="function"==typeof Symbol?Symbol.toStringTag:"";b=y&&"symbol"==typeof Symbol.toStringTag?function(r){var t,e,o,n,a;if(null==r)return p.call(r);e=r[v],a=v,t=null!=(n=r)&&_.call(n,a);try{r[v]=void 0}catch(t){return p.call(r)}return o=p.call(r),t?r[v]=e:delete r[v],o}:function(r){return p.call(r)};var d=b,m="function"==typeof Float32Array;var s=Number.POSITIVE_INFINITY,g="function"==typeof Float32Array?Float32Array:null;var j,w="function"==typeof Float32Array?Float32Array:void 0;j=function(){var r,t,e;if("function"!=typeof g)return!1;try{t=new g([1,3.14,-3.14,5e40]),e=t,r=(m&&e instanceof Float32Array||"[object Float32Array]"===d(e))&&1===t[0]&&3.140000104904175===t[1]&&-3.140000104904175===t[2]&&t[3]===s}catch(t){r=!1}return r}()?w:function(){throw new Error("not implemented")};var S=new j(1);var h="function"==typeof c?c:function(r){return S[0]=r,S[0]};function N(r,t,e){var o,n,a,l,u,i,f;if(r<=0)return NaN;if(1===r||0===e)return t[0];for(f=o=e<0?(1-r)*e:0,a=0,u=0,i=0;i<r;i++)(n=t[o])==n&&(a=h(a+n),u+=1),o+=e;if(0===u)return NaN;for(a=h(a/u),l=0,o=f,i=0;i<r;i++)(n=t[o])==n&&(l=h(l+h(n-a))),o+=e;return h(a+h(l/u))}function A(r,t,e,o){var n,a,l,u,i,f;if(r<=0)return NaN;if(1===r||0===e)return t[o];for(n=o,l=0,i=0,f=0;f<r;f++)(a=t[n])==a&&(l=h(l+a),i+=1),n+=e;if(0===i)return NaN;for(l=h(l/i),n=o,u=0,f=0;f<r;f++)(a=t[n])==a&&(u=h(u+h(a-l))),n+=e;return h(l+h(u/i))}f(N,"ndarray",{configurable:!1,enumerable:!1,writable:!1,value:A});export{N as default,A as ndarray};
//# sourceMappingURL=mod.js.map
