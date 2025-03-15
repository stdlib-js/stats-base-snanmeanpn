"use strict";var f=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var p=f(function(A,c){
var v=require('@stdlib/number-float64-base-to-float32/dist');function _(e,r,i,q){var t,a,n,o,s,u;if(e<=0)return NaN;if(e===1||i===0)return r[q];for(t=q,n=0,s=0,u=0;u<e;u++)a=r[t],a===a&&(n=v(n+a),s+=1),t+=i;if(s===0)return NaN;for(n=v(n/s),t=q,o=0,u=0;u<e;u++)a=r[t],a===a&&(o=v(o+v(a-n))),t+=i;return v(n+v(o/s))}c.exports=_
});var l=f(function(B,y){
var E=require('@stdlib/strided-base-stride2offset/dist'),F=p();function O(e,r,i){return F(e,r,i,E(e,i))}y.exports=O
});var x=f(function(C,j){
var T=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),d=l(),b=p();T(d,"ndarray",b);j.exports=d
});var g=require("path").join,h=require('@stdlib/utils-try-require/dist'),k=require('@stdlib/assert-is-error/dist'),w=x(),m,R=h(g(__dirname,"./native.js"));k(R)?m=w:m=R;module.exports=m;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
