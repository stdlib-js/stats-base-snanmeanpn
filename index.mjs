// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import r from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@v0.2.1-esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/number-float64-base-to-float32@v0.2.1-esm/index.mjs";function t(r,t,n){var a,f,i,o,s,u,d;if(r<=0)return NaN;if(1===r||0===n)return t[0];for(d=a=n<0?(1-r)*n:0,i=0,s=0,u=0;u<r;u++)(f=t[a])==f&&(i=e(i+f),s+=1),a+=n;if(0===s)return NaN;for(i=e(i/s),o=0,a=d,u=0;u<r;u++)(f=t[a])==f&&(o=e(o+e(f-i))),a+=n;return e(i+e(o/s))}function n(r,t,n,a){var f,i,o,s,u,d;if(r<=0)return NaN;if(1===r||0===n)return t[a];for(f=a,o=0,u=0,d=0;d<r;d++)(i=t[f])==i&&(o=e(o+i),u+=1),f+=n;if(0===u)return NaN;for(o=e(o/u),f=a,s=0,d=0;d<r;d++)(i=t[f])==i&&(s=e(s+e(i-o))),f+=n;return e(o+e(s/u))}r(t,"ndarray",n);export{t as default,n as ndarray};
//# sourceMappingURL=index.mjs.map