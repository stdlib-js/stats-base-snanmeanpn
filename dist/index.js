"use strict";var p=function(e,n){return function(){return n||e((n={exports:{}}).exports,n),n.exports}};var c=p(function(z,m){
var s=require('@stdlib/number-float64-base-to-float32/dist');function _(e,n,o){var i,a,r,v,u,t,f;if(e<=0)return NaN;if(e===1||o===0)return n[0];for(o<0?i=(1-e)*o:i=0,f=i,r=0,u=0,t=0;t<e;t++)a=n[i],a===a&&(r=s(r+a),u+=1),i+=o;if(u===0)return NaN;for(r=s(r/u),v=0,i=f,t=0;t<e;t++)a=n[i],a===a&&(v=s(v+s(a-r))),i+=o;return s(r+s(v/u))}m.exports=_
});var j=p(function(A,y){
var q=require('@stdlib/number-float64-base-to-float32/dist');function E(e,n,o,i){var a,r,v,u,t,f;if(e<=0)return NaN;if(e===1||o===0)return n[i];for(a=i,v=0,t=0,f=0;f<e;f++)r=n[a],r===r&&(v=q(v+r),t+=1),a+=o;if(t===0)return NaN;for(v=q(v/t),a=i,u=0,f=0;f<e;f++)r=n[a],r===r&&(u=q(u+q(r-v))),a+=o;return q(v+q(u/t))}y.exports=E
});var R=p(function(B,F){
var N=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),x=c(),O=j();N(x,"ndarray",O);F.exports=x
});var b=require("path").join,g=require('@stdlib/utils-try-require/dist'),h=require('@stdlib/assert-is-error/dist'),k=R(),l,T=g(b(__dirname,"./native.js"));h(T)?l=k:l=T;module.exports=l;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
