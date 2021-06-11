(function(){/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
var aa=function(a){var b=0;return function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}}},ba="function"==typeof Object.defineProperties?Object.defineProperty:function(a,b,c){if(a==Array.prototype||a==Object.prototype)return a;a[b]=c.value;return a},ca=function(a){a=["object"==typeof globalThis&&globalThis,a,"object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof global&&global];for(var b=0;b<a.length;++b){var c=a[b];if(c&&c.Math==Math)return c}throw Error("Cannot find global object");
},r=ca(this),da=function(a,b){if(b)a:{var c=r;a=a.split(".");for(var d=0;d<a.length-1;d++){var e=a[d];if(!(e in c))break a;c=c[e]}a=a[a.length-1];d=c[a];b=b(d);b!=d&&null!=b&&ba(c,a,{configurable:!0,writable:!0,value:b})}},ea=function(a){var b="undefined"!=typeof Symbol&&Symbol.iterator&&a[Symbol.iterator];return b?b.call(a):{next:aa(a)}},fa="function"==typeof Object.create?Object.create:function(a){var b=function(){};b.prototype=a;return new b},ha;
if("function"==typeof Object.setPrototypeOf)ha=Object.setPrototypeOf;else{var ia;a:{var ja={a:!0},ka={};try{ka.__proto__=ja;ia=ka.a;break a}catch(a){}ia=!1}ha=ia?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}var la=ha;
da("Promise",function(a){function b(){this.g=null}function c(f){return f instanceof e?f:new e(function(h){h(f)})}if(a)return a;b.prototype.h=function(f){if(null==this.g){this.g=[];var h=this;this.i(function(){h.l()})}this.g.push(f)};var d=r.setTimeout;b.prototype.i=function(f){d(f,0)};b.prototype.l=function(){for(;this.g&&this.g.length;){var f=this.g;this.g=[];for(var h=0;h<f.length;++h){var k=f[h];f[h]=null;try{k()}catch(l){this.j(l)}}}this.g=null};b.prototype.j=function(f){this.i(function(){throw f;
})};var e=function(f){this.h=0;this.i=void 0;this.g=[];this.u=!1;var h=this.j();try{f(h.resolve,h.reject)}catch(k){h.reject(k)}};e.prototype.j=function(){function f(l){return function(p){k||(k=!0,l.call(h,p))}}var h=this,k=!1;return{resolve:f(this.C),reject:f(this.l)}};e.prototype.C=function(f){if(f===this)this.l(new TypeError("A Promise cannot resolve to itself"));else if(f instanceof e)this.H(f);else{a:switch(typeof f){case "object":var h=null!=f;break a;case "function":h=!0;break a;default:h=!1}h?
this.B(f):this.m(f)}};e.prototype.B=function(f){var h=void 0;try{h=f.then}catch(k){this.l(k);return}"function"==typeof h?this.I(h,f):this.m(f)};e.prototype.l=function(f){this.v(2,f)};e.prototype.m=function(f){this.v(1,f)};e.prototype.v=function(f,h){if(0!=this.h)throw Error("Cannot settle("+f+", "+h+"): Promise already settled in state"+this.h);this.h=f;this.i=h;2===this.h&&this.G();this.A()};e.prototype.G=function(){var f=this;d(function(){if(f.F()){var h=r.console;"undefined"!==typeof h&&h.error(f.i)}},
1)};e.prototype.F=function(){if(this.u)return!1;var f=r.CustomEvent,h=r.Event,k=r.dispatchEvent;if("undefined"===typeof k)return!0;"function"===typeof f?f=new f("unhandledrejection",{cancelable:!0}):"function"===typeof h?f=new h("unhandledrejection",{cancelable:!0}):(f=r.document.createEvent("CustomEvent"),f.initCustomEvent("unhandledrejection",!1,!0,f));f.promise=this;f.reason=this.i;return k(f)};e.prototype.A=function(){if(null!=this.g){for(var f=0;f<this.g.length;++f)g.h(this.g[f]);this.g=null}};
var g=new b;e.prototype.H=function(f){var h=this.j();f.M(h.resolve,h.reject)};e.prototype.I=function(f,h){var k=this.j();try{f.call(h,k.resolve,k.reject)}catch(l){k.reject(l)}};e.prototype.then=function(f,h){function k(t,q){return"function"==typeof t?function(m){try{l(t(m))}catch(v){p(v)}}:q}var l,p,n=new e(function(t,q){l=t;p=q});this.M(k(f,l),k(h,p));return n};e.prototype.catch=function(f){return this.then(void 0,f)};e.prototype.M=function(f,h){function k(){switch(l.h){case 1:f(l.i);break;case 2:h(l.i);
break;default:throw Error("Unexpected state: "+l.h);}}var l=this;null==this.g?g.h(k):this.g.push(k);this.u=!0};e.resolve=c;e.reject=function(f){return new e(function(h,k){k(f)})};e.race=function(f){return new e(function(h,k){for(var l=ea(f),p=l.next();!p.done;p=l.next())c(p.value).M(h,k)})};e.all=function(f){var h=ea(f),k=h.next();return k.done?c([]):new e(function(l,p){function n(m){return function(v){t[m]=v;q--;0==q&&l(t)}}var t=[],q=0;do t.push(void 0),q++,c(k.value).M(n(t.length-1),p),k=h.next();
while(!k.done)})};return e});
var u=this||self,ma=function(a){var b=typeof a;return"object"==b&&null!=a||"function"==b},na=function(a,b){var c=Array.prototype.slice.call(arguments,1);return function(){var d=c.slice();d.push.apply(d,arguments);return a.apply(this,d)}},oa=function(a,b){function c(){}c.prototype=b.prototype;a.Aa=b.prototype;a.prototype=new c;a.prototype.constructor=a;a.Ha=function(d,e,g){for(var f=Array(arguments.length-2),h=2;h<arguments.length;h++)f[h-2]=arguments[h];return b.prototype[e].apply(d,f)}},pa=function(a){return a};function x(a){if(Error.captureStackTrace)Error.captureStackTrace(this,x);else{var b=Error().stack;b&&(this.stack=b)}a&&(this.message=String(a))}oa(x,Error);x.prototype.name="CustomError";var qa=function(a,b){a=a.split("%s");for(var c="",d=a.length-1,e=0;e<d;e++)c+=a[e]+(e<b.length?b[e]:"%s");x.call(this,c+a[d])};oa(qa,x);qa.prototype.name="AssertionError";var z=function(a,b){this.h=a===y&&b||"";this.j=ra};z.prototype.J=!0;z.prototype.g=function(){return this.h};var A=function(a){return a instanceof z&&a.constructor===z&&a.j===ra?a.h:"type_error:Const"},ra={},y={};var B=Array.prototype.forEach?function(a,b){Array.prototype.forEach.call(a,b,void 0)}:function(a,b){for(var c=a.length,d="string"===typeof a?a.split(""):a,e=0;e<c;e++)e in d&&b.call(void 0,d[e],e,a)},C=Array.prototype.map?function(a,b){return Array.prototype.map.call(a,b,void 0)}:function(a,b){for(var c=a.length,d=Array(c),e="string"===typeof a?a.split(""):a,g=0;g<c;g++)g in e&&(d[g]=b.call(void 0,e[g],g,a));return d},sa=Array.prototype.reduce?function(a,b,c){return Array.prototype.reduce.call(a,
b,c)}:function(a,b,c){var d=c;B(a,function(e,g){d=b.call(void 0,d,e,g,a)});return d},ta=Array.prototype.some?function(a,b){return Array.prototype.some.call(a,b,void 0)}:function(a,b){for(var c=a.length,d="string"===typeof a?a.split(""):a,e=0;e<c;e++)if(e in d&&b.call(void 0,d[e],e,a))return!0;return!1};function ua(a){for(var b=[],c=0;c<a;c++)b[c]="";return b};var va={area:!0,base:!0,br:!0,col:!0,command:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0};var D,wa=function(){if(void 0===D){var a=null,b=u.trustedTypes;if(b&&b.createPolicy){try{a=b.createPolicy("goog#html",{createHTML:pa,createScript:pa,createScriptURL:pa})}catch(c){u.console&&u.console.error(c.message)}D=a}else D=a}return D};var F=function(a,b){this.j=b===xa?a:""};F.prototype.J=!0;F.prototype.g=function(){return this.j.toString()};F.prototype.i=!0;F.prototype.h=function(){return 1};F.prototype.toString=function(){return this.j+""};
var ya=function(a){return a instanceof F&&a.constructor===F?a.j:"type_error:TrustedResourceUrl"},Ba=function(a){var b=A(new z(y,"https://cdn.ampproject.org/rtv/%{ampVersion}/amp4ads-host-v0.js"));if(!za.test(b))throw Error("Invalid TrustedResourceUrl format: "+b);var c=b.replace(Aa,function(d,e){if(!Object.prototype.hasOwnProperty.call(a,e))throw Error('Found marker, "'+e+'", in format string, "'+b+'", but no valid label mapping found in args: '+JSON.stringify(a));d=a[e];return d instanceof z?A(d):
encodeURIComponent(String(d))});return G(c)},Aa=/%{(\w+)}/g,za=/^((https:)?\/\/[0-9a-z.:[\]-]+\/|\/[^/\\]|[^:/\\%]+\/|[^:/\\%]*[?#]|about:blank#)/i,xa={},G=function(a){var b=wa();a=b?b.createScriptURL(a):a;return new F(a,xa)};var Ja=function(a){if(!Ca.test(a))return a;-1!=a.indexOf("&")&&(a=a.replace(Da,"&amp;"));-1!=a.indexOf("<")&&(a=a.replace(Ea,"&lt;"));-1!=a.indexOf(">")&&(a=a.replace(Fa,"&gt;"));-1!=a.indexOf('"')&&(a=a.replace(Ga,"&quot;"));-1!=a.indexOf("'")&&(a=a.replace(Ha,"&#39;"));-1!=a.indexOf("\x00")&&(a=a.replace(Ia,"&#0;"));return a},Da=/&/g,Ea=/</g,Fa=/>/g,Ga=/"/g,Ha=/'/g,Ia=/\x00/g,Ca=/[\x00&<>"']/;var I=function(a,b){this.j=b===H?a:""};I.prototype.J=!0;I.prototype.g=function(){return this.j.toString()};I.prototype.i=!0;I.prototype.h=function(){return 1};I.prototype.toString=function(){return this.j.toString()};
var Ka=function(a){return a instanceof I&&a.constructor===I?a.j:"type_error:SafeUrl"},La=/^(?:audio\/(?:3gpp2|3gpp|aac|L16|midi|mp3|mp4|mpeg|oga|ogg|opus|x-m4a|x-matroska|x-wav|wav|webm)|font\/\w+|image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp|x-icon)|video\/(?:mpeg|mp4|ogg|webm|quicktime|x-matroska))(?:;\w+=(?:\w+|"[\w;,= ]+"))*$/i,Ma=/^data:(.*);base64,[a-z0-9+\/]+=*$/i,Na=/^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i,Oa=function(a){if(a instanceof I)return a;a="object"==typeof a&&a.J?a.g():String(a);
if(Na.test(a))a=new I(a,H);else{a=String(a);a=a.replace(/(%0A|%0D)/g,"");var b=a.match(Ma);a=b&&La.test(b[1])?new I(a,H):null}return a},H={},Pa=new I("about:invalid#zClosurez",H);var J=function(a,b){this.h=b===Qa?a:""};J.prototype.J=!0;J.prototype.g=function(){return this.h};J.prototype.toString=function(){return this.h.toString()};
var Qa={},Ra=new J("",Qa),Ya=function(a){if(a instanceof I)return'url("'+Ka(a).replace(/</g,"%3c").replace(/[\\"]/g,"\\$&")+'")';if(a instanceof z)a=A(a);else{a=String(a);var b=a.replace(Sa,"$1").replace(Sa,"$1").replace(Ta,"url");if(Ua.test(b)){if(b=!Va.test(a)){for(var c=b=!0,d=0;d<a.length;d++){var e=a.charAt(d);"'"==e&&c?b=!b:'"'==e&&b&&(c=!c)}b=b&&c&&Wa(a)}a=b?Xa(a):"zClosurez"}else a="zClosurez"}if(/[{;}]/.test(a))throw new qa("Value does not allow [{;}], got: %s.",[a]);return a},Wa=function(a){for(var b=
!0,c=/^[-_a-zA-Z0-9]$/,d=0;d<a.length;d++){var e=a.charAt(d);if("]"==e){if(b)return!1;b=!0}else if("["==e){if(!b)return!1;b=!1}else if(!b&&!c.test(e))return!1}return b},Ua=/^[-,."'%_!# a-zA-Z0-9\[\]]+$/,Ta=/\b(url\([ \t\n]*)('[ -&(-\[\]-~]*'|"[ !#-\[\]-~]*"|[!#-&*-\[\]-~]*)([ \t\n]*\))/g,Sa=/\b(calc|cubic-bezier|fit-content|hsl|hsla|linear-gradient|matrix|minmax|repeat|rgb|rgba|(rotate|scale|translate)(X|Y|Z|3d)?)\([-+*/0-9a-z.%\[\], ]+\)/g,Va=/\/\*/,Xa=function(a){return a.replace(Ta,function(b,
c,d,e){var g="";d=d.replace(/^(['"])(.*)\1$/,function(f,h,k){g=h;return k});b=(Oa(d)||Pa).g();return c+g+b+g+e})};var K;a:{var Za=u.navigator;if(Za){var $a=Za.userAgent;if($a){K=$a;break a}}K=""};var L=function(a,b,c){this.j=c===ab?a:"";this.l=b};L.prototype.i=!0;L.prototype.h=function(){return this.l};L.prototype.J=!0;L.prototype.g=function(){return this.j.toString()};L.prototype.toString=function(){return this.j.toString()};
var M=function(a){return a instanceof L&&a.constructor===L?a.j:"type_error:SafeHtml"},bb=function(a){if(a instanceof L)return a;var b="object"==typeof a,c=null;b&&a.i&&(c=a.h());return N(Ja(b&&a.J?a.g():String(a)),c)},cb=/^[a-zA-Z0-9-]+$/,db={action:!0,cite:!0,data:!0,formaction:!0,href:!0,manifest:!0,poster:!0,src:!0},eb={APPLET:!0,BASE:!0,EMBED:!0,IFRAME:!0,LINK:!0,MATH:!0,META:!0,OBJECT:!0,SCRIPT:!0,STYLE:!0,SVG:!0,TEMPLATE:!0},gb=function(a){var b=bb(fb),c=b.h(),d=[],e=function(g){Array.isArray(g)?
B(g,e):(g=bb(g),d.push(M(g).toString()),g=g.h(),0==c?c=g:0!=g&&c!=g&&(c=null))};B(a,e);return N(d.join(M(b).toString()),c)},hb=function(a){return gb(Array.prototype.slice.call(arguments))},ab={},N=function(a,b){var c=wa();a=c?c.createHTML(a):a;return new L(a,b,ab)},fb=new L(u.trustedTypes&&u.trustedTypes.emptyHTML||"",0,ab);var ib=function(a){var b=!1,c;return function(){b||(c=a(),b=!0);return c}},jb=function(a){var b=a;return function(){if(b){var c=b;b=null;c()}}};var kb=function(a,b){var c=void 0===c?{}:c;this.error=a;this.context=b.context;this.msg=b.message||"";this.id=b.id||"jserror";this.meta=c};var lb=function(a,b,c){a.addEventListener&&a.addEventListener(b,c,!1)};var O=function(a){O[" "](a);return a};O[" "]=function(){};var mb=-1!=K.toLowerCase().indexOf("webkit")&&-1==K.indexOf("Edge");var nb=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;var P=function(a){try{var b;if(b=!!a&&null!=a.location.href)a:{try{O(a.foo);b=!0;break a}catch(c){}b=!1}return b}catch(c){return!1}},pb=function(a,b){b=b||u;for(var c=0;b&&40>c++&&!a(b);)b=ob(b)},ob=function(a){try{var b=a.parent;if(b&&b!=a)return b}catch(c){}return null},qb=function(a,b){var c=a.createElement("script");c.src=ya(b);var d;b=(c.ownerDocument&&c.ownerDocument.defaultView||window).document;(d=(b=null===(d=b.querySelector)||void 0===d?void 0:d.call(b,"script[nonce]"))?b.nonce||b.getAttribute("nonce")||
"":"")&&c.setAttribute("nonce",d);(a=a.getElementsByTagName("script")[0])&&a.parentNode&&a.parentNode.insertBefore(c,a)},rb=function(){if(!u.crypto)return Math.random();try{var a=new Uint32Array(1);u.crypto.getRandomValues(a);return a[0]/65536/65536}catch(b){return Math.random()}},Q=function(a,b){if(a)for(var c in a)Object.prototype.hasOwnProperty.call(a,c)&&b.call(void 0,a[c],c,a)},tb=ib(function(){return ta(["Google Web Preview","Mediapartners-Google","Google-Read-Aloud","Google-Adwords"],sb)||
1E-4>Math.random()}),ub=ib(function(){return sb("MSIE")}),sb=function(a){return-1!=K.indexOf(a)},vb=/https?:\/\/[^\/]+/,wb=function(a){return(a=vb.exec(a))&&a[0]||""},xb=/^([0-9.]+)px$/,yb=function(a){return(a=xb.exec(a))?+a[1]:null},zb=function(a){var b=u;a=void 0===a?!0:a;try{for(var c=null;c!=b;c=b,b=b.parent)switch(b.location.protocol){case "https:":return!0;case "file:":return a;case "http:":return!1}}catch(d){}return!0},Ab=function(a,b){try{return!(!a.frames||!a.frames[b])}catch(c){return!1}};var Bb=function(a,b){var c=void 0===c?!1:c;var d=a.ampInaboxIframes=a.ampInaboxIframes||[],e=function(){};b&&d.push(b);if(!a.ampInaboxInitialized){a.ampInaboxPendingMessages=a.ampInaboxPendingMessages||[];var g=function(f){if(a.ampInaboxInitialized)f=!0;else{var h,k="amp-ini-load"===f.data;a.ampInaboxPendingMessages&&!k&&(h=/^amp-(\d{15,20})?/.exec(f.data))&&(a.ampInaboxPendingMessages.push(f),f=h[1],a.ampInaboxInitialized||f&&!/^\d{15,20}$/.test(f)||a.document.querySelector('script[src$="amp4ads-host-v0.js"]')||
qb(a.document,f?Ba({ampVersion:f}):G(A(new z(y,"https://cdn.ampproject.org/amp4ads-host-v0.js")))));f=!1}f&&e()};c||d.google_amp_listener_added||(d.google_amp_listener_added=!0,lb(a,"message",g),e=function(){a.removeEventListener&&a.removeEventListener("message",g,!1)})}};var Cb=/^https?:\/\/(\w|-)+\.cdn\.ampproject\.(net|org)(\?|\/|$)/,Gb=function(a){a=a||Db();for(var b=new Eb(u.location.href,!1),c=null,d=a.length-1,e=d;0<=e;--e){var g=a[e];!c&&Cb.test(g.url)&&(c=g);if(g.url&&!g.R){b=g;break}}e=null;g=a.length&&a[d].url;0!=b.depth&&g&&(e=a[d]);return new Fb(b,e,c)},Db=function(){var a=u,b=[],c=null;do{var d=a;if(P(d)){var e=d.location.href;c=d.document&&d.document.referrer||null}else e=c,c=null;b.push(new Eb(e||""));try{a=d.parent}catch(g){a=null}}while(a&&d!=a);
d=0;for(a=b.length-1;d<=a;++d)b[d].depth=a-d;d=u;if(d.location&&d.location.ancestorOrigins&&d.location.ancestorOrigins.length==b.length-1)for(a=1;a<b.length;++a)e=b[a],e.url||(e.url=d.location.ancestorOrigins[a-1]||"",e.R=!0);return b},Fb=function(a,b,c){this.g=a;this.h=b;this.i=c},Eb=function(a,b){this.url=a;this.R=!!b;this.depth=null};var Hb=function(a){var b;if(b=u.navigator)b=u.navigator.userAgent,b=/Chrome/.test(b)&&!/Edge/.test(b)?!0:!1;b&&u.navigator.sendBeacon?u.navigator.sendBeacon(a):(u.google_image_requests||(u.google_image_requests=[]),b=u.document.createElement("img"),b.src=a,u.google_image_requests.push(b))};var Ib=function(a,b,c){this.l=c||4E3;this.i=a||"&";this.j=b||",$";this.h={};this.m=0;this.g=[]},Jb=function(a,b){var c={};c[a]=b;return[c]},Lb=function(a,b,c,d,e){var g=[];Q(a,function(f,h){(f=Kb(f,b,c,d,e))&&g.push(h+"="+f)});return g.join(b)},Kb=function(a,b,c,d,e){if(null==a)return"";b=b||"&";c=c||",$";"string"==typeof c&&(c=c.split(""));if(a instanceof Array){if(d=d||0,d<c.length){for(var g=[],f=0;f<a.length;f++)g.push(Kb(a[f],b,c,d+1,e));return g.join(c[d])}}else if("object"==typeof a)return e=
e||0,2>e?encodeURIComponent(Lb(a,b,c,d,e+1)):"...";return encodeURIComponent(String(a))},R=function(a,b,c){a.g.push(b);a.h[b]=c},S=function(a,b,c,d){a.g.push(b);a.h[b]=Jb(c,d)},Nb=function(a,b,c,d){b=b+"//"+c+d;var e=Mb(a)-d.length;if(0>e)return"";a.g.sort(function(p,n){return p-n});d=null;c="";for(var g=0;g<a.g.length;g++)for(var f=a.g[g],h=a.h[f],k=0;k<h.length;k++){if(!e){d=null==d?f:d;break}var l=Lb(h[k],a.i,a.j);if(l){l=c+l;if(e>=l.length){e-=l.length;b+=l;c=a.i;break}d=null==d?f:d}}a="";null!=
d&&(a=c+"trn="+d);return b+a},Mb=function(a){var b=1,c;for(c in a.h)b=c.length>b?c.length:b;return a.l-3-b-a.i.length-1};var Ob=function(a,b,c,d){if(Math.random()<(d||.01))try{if(c instanceof Ib)var e=c;else e=new Ib,Q(c,function(f,h){var k=e,l=k.m++;R(k,l,Jb(h,f))});var g=Nb(e,a.g,"pagead2.googlesyndication.com","/pagead/gen_204?id="+b+"&");g&&Hb(g)}catch(f){}};var Pb=!1,Qb=null,Rb=function(){this.h={};this.g={};for(var a=[],b=0,c=a.length;b<c;++b)this.g[a[b]]=""},Sb=function(a,b,c){""!=b&&(c?a.g.hasOwnProperty(c)&&(a.g[c]=b):a.h[b]=!0)},Tb=function(a){var b=[];Q(a.h,function(c,d){b.push(d)});Q(a.g,function(c){""!=c&&b.push(c)});return b};var Vb=function(){this.i=Ub;this.h=!0;this.j=this.g},Yb=function(a,b){var c=Wb;try{var d=a()}catch(f){a=c.h;try{a=c.j(529,new kb(f,{message:Xb(f)}),void 0,b)}catch(h){c.g(217,h)}if(a){var e,g;null==(e=window.console)||null==(g=e.error)||g.call(e,f)}else throw f;}return d};
Vb.prototype.g=function(a,b,c,d,e){e=e||"dcmads-err";try{var g=new Ib;S(g,1,"context",a);b.error&&b.meta&&b.id||(b=new kb(b,{message:Xb(b)}));b.msg&&S(g,2,"msg",b.msg.substring(0,512));var f=b.meta||{};if(d)try{d(f)}catch(m){}R(g,3,[f]);var h=Gb();h.h&&S(g,4,"top",h.h.url||"");var k={url:h.g.url||""};if(h.g.url){var l=h.g.url.match(nb),p=l[1],n=l[3],t=l[4];b="";p&&(b+=p+":");n&&(b+="//",b+=n,t&&(b+=":"+t));var q=b}else q="";R(g,5,[k,{url:q}]);Ob(this.i,e,g,c)}catch(m){try{Ob(this.i,e,{context:"ecmserr",
rctx:a,msg:Xb(m),url:h&&h.g.url},c)}catch(v){}}return this.h};var Xb=function(a){var b=a.toString();a.name&&-1==b.indexOf(a.name)&&(b+=": "+a.name);a.message&&-1==b.indexOf(a.message)&&(b+=": "+a.message);if(a.stack){a=a.stack;try{-1==a.indexOf(b)&&(a=b+"\n"+a);for(var c;a!=c;)c=a,a=a.replace(/((https?:\/..*\/)[^\/:]*:\d+(?:.|\n)*)\2/,"$1");b=a.replace(/\n */g,"\n")}catch(d){}}return b};var Zb=function(a,b,c){this.g=[];this.g[0]=c;this.g[1]=a;this.g[2]=b;this.h=this.g[3]=!1};var ac=function(){var a=G((zb()?"https:":"http:")+$b);u.google_osd_loaded||(qb(u.document,a),u.google_osd_loaded=!0)},bc=function(a,b){a&&lb(a,"load",b)},cc=function(){var a=u.google_osd_amcb;return"function"===typeof a?a:null},dc=G(A(new z(y,"https://www.googletagservices.com/activeview/js/current/osd.js")));var T=function(){this.h=0;this.g=[]};T.prototype.numBlocks=function(){return this.g.length};T.prototype.getOseId=function(){return this.h};T.prototype.getNewBlocks=function(a,b){ec(this,a);b&&(u.google_osd_amcb=a)};T.prototype.setup=function(a){this.h=a};T.prototype.registerAdBlock=function(a,b,c){var d=new Zb(a,b,c);cc()?d.g[3]=!0:bc(c,function(){d.g[3]=!0});this.g.push(d);ec(this);ac()};
var ec=function(a,b){if(b=b||cc())for(var c=0;c<a.g.length;++c){var d=a.g[c];d.h||(b.apply(void 0,d.g),d.h=!0)}},$b=ya(dc).toString().slice(6);G(A(new z(y,"https://pagead2.googlesyndication.com/pagead/osd.js")));var fc=function(a,b){this.g=a;this.depth=b},hc=function(a){a=a||Db();var b=Math.max(a.length-1,0),c=Gb(a);a=c.g;var d=c.h,e=c.i,g=[];c=function(h,k){return null==h?k:h};e&&g.push(new fc([e.url,e.R?2:0],c(e.depth,1)));d&&d!=e&&g.push(new fc([d.url,2],0));a.url&&a!=e&&g.push(new fc([a.url,0],c(a.depth,b)));var f=C(g,function(h,k){return g.slice(0,g.length-k)});!a.url||(e||d)&&a!=e||(d=wb(a.url))&&f.push([new fc([d,1],c(a.depth,b))]);f.push([]);return C(f,function(h){return gc(b,h)})},ic=function(a,
b){b=b||hc();return C(b,function(c){var d={};d[a]=c;return d})};function gc(a,b){var c=sa(b,function(e,g){return Math.max(e,g.depth)},-1),d=ua(c+2);d[0]=a;B(b,function(e){return d[e.depth+1]=e.g});return d}var jc=function(a){a=a||hc();return C(a,function(b){return Kb(b)})};var kc=function(a){void 0!==a.addtlConsent&&"string"!==typeof a.addtlConsent&&(a.addtlConsent=void 0);void 0!==a.gdprApplies&&"boolean"!==typeof a.gdprApplies&&(a.gdprApplies=void 0);return void 0!==a.tcString&&"string"!==typeof a.tcString||void 0!==a.listenerId&&"number"!==typeof a.listenerId?2:a.cmpStatus&&"error"!==a.cmpStatus?0:3},U=function(a,b){this.h=a;this.g=null;this.j={};this.m=0;this.l=void 0===b?500:b;this.i=null},V=function(){};U.prototype=fa(V.prototype);U.prototype.constructor=U;
if(la)la(U,V);else for(var W in V)if("prototype"!=W)if(Object.defineProperties){var lc=Object.getOwnPropertyDescriptor(V,W);lc&&Object.defineProperty(U,W,lc)}else U[W]=V[W];U.Aa=V.prototype;
var nc=function(a,b){var c={internalErrorState:0},d=jb(function(){return b(c)}),e=0;-1!==a.l&&(e=setTimeout(function(){c.tcString="tcunavailable";c.internalErrorState=1;d()},a.l));mc(a,"addEventListener",function(g,f){e&&(clearTimeout(e),e=0);f&&(c=g);c.internalErrorState=kc(c);0!=c.internalErrorState&&(c.tcString="tcunavailable");(g=0!=c.internalErrorState)||(g=c,!1===g.gdprApplies?g=!0:(void 0===g.internalErrorState&&(g.internalErrorState=kc(g)),g="error"===g.cmpStatus||0!==g.internalErrorState||
"loaded"===g.cmpStatus&&("tcloaded"===g.eventStatus||"useractioncomplete"===g.eventStatus)?!0:!1));g&&(mc(a,"removeEventListener",null,c.listenerId),d())})},oc=function(a){return new Promise(function(b){nc(a,b)})},mc=function(a,b,c,d){c||(c=function(){});if("function"===typeof a.h.__tcfapi)a=a.h.__tcfapi,a(b,2,c,d);else if(pc(a)){qc(a);var e=++a.m;a.j[e]=c;a.g&&(c={},a.g.postMessage((c.__tcfapiCall={command:b,version:2,callId:e,parameter:d},c),"*"))}else c({},!1)},pc=function(a){if(a.g)return a.g;
a:{var b=a.h;for(var c=0;50>c;++c){if(Ab(b,"__tcfapiLocator"))break a;if(!(b=ob(b)))break}b=null}a.g=b;return a.g},qc=function(a){a.i||(a.i=function(b){try{var c=("string"===typeof b.data?JSON.parse(b.data):b.data).__tcfapiReturn;a.j[c.callId](c.returnValue,c.success)}catch(d){}},lb(a.h,"message",a.i))};var rc;if(rc=mb){var X="IFRAME",sc=document;X=String(X);"application/xhtml+xml"===sc.contentType&&(X=X.toLowerCase());rc="srcdoc"in sc.createElement(X)}var tc=rc;var uc=zb(!1)?"https:":"http:",Ub,Wb;Ub=new function(){this.g=uc};Wb=new Vb;var vc=function(a){Wb.h=!1;throw Error(a);};var Y={1:{K:"40004000",D:"40004001"}},wc={K:"40004006",D:"40004007"};Y[4]=wc;var xc={K:"40004008",D:"40004009"};Y[5]=xc;Y[7]={K:"44724682",D:"44724683"};Y[9]={K:"44728098",D:"44728099"};Y[10]={K:"44730447",D:"44730448"};Y[11]={K:"44743160",D:"44743161"};var yc={Ga:1,Ca:4,Ba:6,Da:8,Ea:9,Fa:10},zc={1:1,4:4,5:4,7:6,9:8,10:9,11:10};var Ac=function(a,b,c){if(a=a.dcmads&&a.dcmads.expts&&a.dcmads.expts[c]){var d=Y[c],e=[],g=0;for(h in d)e[g++]=d[h];if((c=zc[c])?b.g.hasOwnProperty(c)&&""==b.g[c]:1){var f;if(null===Qb){Qb="";try{var h="";try{h=u.top.location.hash}catch(k){h=u.location.hash}h&&(Qb=(f=h.match(/\bdeid=([\d,]+)/))?f[1]:"")}catch(k){}}f=(f=Qb)?(f=f.match(new RegExp("\\b("+e.join("|")+")\\b")))?f[0]:null:null;if(f)a=f;else if(Pb)a=null;else b:{if(!ub()&&!tb()&&(f=Math.random(),f<a)){f=rb();a=e[Math.floor(f*e.length)];
break b}a=null}a&&Sb(b,a,c)}}};function Bc(a,b){if(b&&b.split){b=b.split(",");for(var c=0;c<b.length;++c){var d=b[c].split("|");1<d.length?Sb(a,d[1],d[0]):Sb(a,d[0])}}};var Cc=function(a){var b=this,c=3===a?"":"dc_";this.i={};var d=function(e){b.i[e]=!0;return e};this.l=d("addtl_consent");this.F=d(c+"adk");this.B=d("amp");this.appId=d(c+"msid");this.C=d(2===a?"chd":"tfcd");this.h=d("click");this.G=d("cesc");this.H=d("uach");this.I=d("cmpl");this.m=d("gcsr");this.L=d("crlt");this.O=d("xdt");this.P=d("mtfIFPath");this.U=d("dsmd");this.g=d("dcopt");this.V=d("deal_id");this.u=d("u_sd");this.W=d("mtfIFrameRequest");this.X=d("dv3_deal");this.Y=d(c+"eid");this.Z=d(c+"xid");
this.v=d("gdpr_consent");this.gdprApplies=d("gdpr");this.height=d("h");this.$=d("pc");this.aa=d("dcapp");this.ba=d("kw");this.ca=d("mtfLeft");this.da=d(1===a?c+"lat":"lat");this.ea=d("ltd");this.fa=d("msdk");this.ga=d("mtfBottomFloat");this.ha=d("mtfLeftFloat");this.ia=d("mtfRightFloat");this.T=d("mtfTopFloat");d("npa");this.A=d("nel");this.ja=d(c+"omid_p");this.ka=d("ord");d("osdl");this.la=d("osda");this.ma=d("output");this.na=d("pdid");this.oa=d("pdidtype");this.pa=d("prcl");this.qa=d(c+"ref");
this.ra=d(c+"rxp");this.sa=d(c+"rdid");this.ta=d("sttr");this.ua=d(c+"sdk_apis");this.size=d("sz");this.va=d(3===a?"insv":"dc_ver");this.wa=d("mtfTop");this.xa=d("url");this.j=d(c+"rfl");this.ya=d("tfua");this.za=d("u");this.width=d("w")};Cc.prototype.has=function(a){return!!this.i[a]};var Dc=/^data-d([bc]m|v3)-.+/i,Ec=/^https?%3A.+/i,Fc=/^N\d+\.[A-Za-z0-9._-]*[A-Za-z0-9_-]\.?\/B\d+\.\d+/,Gc=function(a,b){var c=b.attributes;a.g={};for(var d=0;d<c.length;d++){var e=c[d].name;if(Dc.test(e)){var g=e.toLowerCase();e=0==g.indexOf("data-dcm-param-")?"data-dcm-param-"+e.substring(15):g}else e=null;e&&(g=c[d].value,g=null!=g?g:"","data-dcm-click-tracker"==e&&(g=Ec.test(g)?decodeURIComponent(g):g),a.g[e]=g)}c=a.g["data-dcm-placement"];e=a.g["data-dbm-deal"];g=a.g["data-dv3-deal"];c||e||
g||vc("No placement or deal attribute set on ins tag");d=a.g["data-dcm-rendering-mode"];c?(a.h=1,(e=Fc.exec(c))||vc("Invalid placement: "+c),a.A=e[0]):g?(a.h=3,a.l=g):(a.h=2,a.l=e);a.i=new Cc(a.h);switch(d){case "iframe":a.u="iframe";break;case "script":a.u="script";break;default:a.u=2===a.h?"script":"iframe"}a.O=b;c=b.style;d={};try{d=(u.getComputedStyle?u.getComputedStyle(b,null):b.currentStyle)||{}}catch(f){}if(b=yb(c.width)||yb(d.width))a.width=Math.round(b);if(b=yb(c.height)||yb(d.height))a.height=
Math.round(b)};function Hc(a,b,c,d,e){try{for(var g=[],f,h=0;(f=c(a))&&a!=b&&100>++h;){for(var k=null,l=d(f),p=0,n=0;n<l.length;++n){if(l[n]==a){k=n-p;break}e(l[n])&&++p}if(null===k)return null;g.unshift(k);a=f}return g}catch(t){return null}}function Ic(a){return Hc(a,a.top,function(b){try{return b.parent}catch(c){return null}},function(b){return b.frames},function(){return!1})}
function Jc(a){return Hc(a,document.documentElement,function(b){return b.parentElement},function(b){return b.children},function(b){return 8==b.nodeType})};var Kc=/https?:\/\/d-\d+\.ampproject\.net/;function Lc(a){return"data-dcm-http-only"in a?"http:":"https:"}function Mc(a,b,c){for(var d=0;d<c.length;d++){var e=c[d];R(a,e.priority,Nc(b,e))}}function Nc(a,b){a=a[b.o];var c=b.N;if(null==a||!c&&0==a.length||null!=b.S&&a===b.S)return[];var d={};d[b.s]=null!=c?c:a;return[d]}function Oc(a,b,c){a=a[b];if(!a)return[];a=String(a).toLowerCase();b={};if("1"==a||"true"==a)b[c]="1";return b[c]?[b]:[]}
function Pc(a,b,c,d){var e,g=!1,f=0,h=a.__cmp?1:0;h|=a.__tcfapi?2:0;pb(function(t){Ab(t,"google_osd_static_frame")&&(f=t==a.top?2:1);Ab(t,"__cmpLocator")&&(h|=4);Ab(t,"__tcfapiLocator")&&(h|=8);if(!P(t))return!1;if(t.mraid)try{e=t.mraid.getVersion()}catch(q){}t.MRAID_ENV&&(e=t.MRAID_ENV.version||void 0,c.C=t.MRAID_ENV.sdk||void 0);t.omid_v1_present&&(g=!0);return!1},a);var k=[];if(e){var l=e.split(".")[0];"2"==l?k.push(5):"3"==l&&k.push(6);c.C&&S(b,43,d.fa,c.C)}g&&k.push(7);if(l=c.g["data-dcm-api-frameworks"]){l=
l.split?l.split(","):[l];for(var p=0;p<l.length;++p){var n=+l[p];0<n&&-1===k.indexOf(n)&&k.push(n)}}0<k.length&&S(b,41,d.ua,k);f&&S(b,48,d.la,f);h&&S(b,45,d.I,h)};var Qc=/^(?:https?:)?\/\/ad\.doubleclick\.net(?:\/ddm)?\/ad[ij]\/(N[^;]+)/,Rc=/(^| )dcmads( |$)/;O(function(){var a=(a=u.goog_osd_adp)&&"function"===typeof a.getOseId?a:null;return null==a?u.goog_osd_adp=new T:a});
function Sc(a,b){var c=a.document;Pb=!1;var d=new Rb;for(g in yc)d.g[yc[g]]="";try{Bc(d,a.dcmads&&a.dcmads.eids);var e=/.*#.*eids=([0-9,|]+)/.exec(a.location.href);e&&Bc(d,e[1])}catch(q){}Ac(a,d,1);Ac(a,d,5);Ac(a,d,9);b.B=d;b.L=!!a.dcmads.version.experiment;b.P=a.dcmads.startTime||0;b.version="75."+(a.dcmads.version.loader||"?");b.m=a.goog_ddm_ps;if(!Tc(b.m)){b.m={};var g=[u.top];d=[];e=0;for(var f;f=g[e++];){!P(f)||d.push(f);try{if(f.frames)for(var h=f.frames.length,k=0;k<h&&1024>g.length;++k)g.push(f.frames[k])}catch(q){}}for(h=
0;h<d.length;++h)if(g=d[h].goog_ddm_ps,Tc(g)){b.m.corr=g.corr;break}if(!Tc(b.m)){h="";for(d=0;10>d;++d)h+="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_.!*'()"[Math.floor(70*Math.random())];b.m.corr=h}a.goog_ddm_ps=b.m}if(!c.body){if(!cb.test("b"))throw Error("");if("B"in eb)throw Error("");h={style:{display:"none"}};d=null;g="";if(h)for(n in h)if(Object.prototype.hasOwnProperty.call(h,n)){if(!cb.test(n))throw Error("");f=h[n];if(null!=f){e=n;k=f;if(k instanceof z)k=A(k);else if("style"==
e.toLowerCase()){f=void 0;if(!ma(k))throw Error("");if(!(k instanceof J)){var l="";for(f in k)if(Object.prototype.hasOwnProperty.call(k,f)){if(!/^[-_a-zA-Z0-9]+$/.test(f))throw Error("Name allows only [-_a-zA-Z0-9], got: "+f);var p=k[f];null!=p&&(p=Array.isArray(p)?C(p,Ya).join(" "):Ya(p),l+=f+":"+p+";")}k=l?new J(l,Qa):Ra}k=k instanceof J&&k.constructor===J?k.h:"type_error:SafeStyle"}else{if(/^on/i.test(e))throw Error("");if(e.toLowerCase()in db)if(k instanceof F)k=ya(k).toString();else if(k instanceof
I)k=Ka(k);else if("string"===typeof k)k=(Oa(k)||Pa).g();else throw Error("");}k.J&&(k=k.g());e=e+'="'+Ja(String(k))+'"';g+=" "+e}}var n="<b"+g;g="_";null==g?g=[]:Array.isArray(g)||(g=[g]);!0===va.b?n+=">":(d=hb(g),n+=">"+M(d).toString()+"</b>",d=d.h());(h=h&&h.dir)&&(/^(ltr|rtl|auto)$/i.test(h)?d=0:d=null);n=N(n,d);c.write(M(n));c.body||vc("Body element does not exist")}c=c.getElementsByClassName?c.getElementsByClassName("dcmads"):c.getElementsByTagName("ins");for(n=0;n<c.length;n++)if(h=c[n],(h.getAttribute("data-dcm-placement")||
h.getAttribute("data-dbm-deal")||h.getAttribute("data-dv3-deal"))&&Rc.test(h.className)&&!h.getAttribute("data-dcm-processed")){var t=h;t.setAttribute("data-dcm-processed","y");break}t?Uc(a,t,b):vc("No ad ins element found")}function Tc(a){return ma(a)&&!!a.corr}function Vc(a,b,c){b.version?(c.rm=b.u||"",c.mode=b.h?b.h+"":"0",b.A?c.plcmt=b.A||"":b.l&&(c.deal=b.l||""),Wc(c,b)):(c.ver="75."+(a.dcmads.version.loader||"?"),c.rm="",c.mode="0")}
function Wc(a,b){a.ver=b.version;b.L&&(a.rxp=1);(b=b.B&&Tb(b.B))&&b.length&&(a.eids=b)}function Xc(a,b){if(!a)return null;a=a.split(b+"=");a=a[1]||a[0];return(new RegExp("\\${"+b+"(_[0-9]+)?}","i")).test(a)?null:a}
function Yc(a,b){var c=Xc(b.g["data-dcm-gdpr-consent"],"gdpr_consent");c&&(b.j=c,b.v="m");c=Xc(b.g["data-dcm-gdpr-applies"],"gdpr");/[01]/.test(c)&&(b.gdprApplies=c,b.v="m");if(c=Xc(b.g["data-dcm-additional-consent"],"addtl_consent"))b.F=c;if(b.j||null!=b.gdprApplies)return null;a=new U(a);return"function"===typeof a.h.__tcfapi||null!=pc(a)?a:null}
function Uc(a,b,c){Gc(c,b);Zc(a,c);var d=Yc(a,c);d?oc(d).then(function(e){null!=e.gdprApplies&&(c.gdprApplies=e.gdprApplies?"1":"0");c.j=e.tcString||null;"1"!==c.gdprApplies||c.j||(c.j="tcunavailable");c.F=e.addtlConsent||null;c.v="a";$c(a,b,c,!0)}).catch(function(e){Wb.g(672,e,void 0,na(Vc,a,c))}):$c(a,b,c)}
function $c(a,b,c,d){d=void 0===d?!1:d;c.H=a.dcmads.uach||null;P(a.top)&&/Chrome/.test(a.navigator.userAgent)&&(c.G=!0);var e=new Ib(1===c.h?";":void 0,void 0,15360);var g=c.i;var f=c.g;var h=c.i,k=f["data-dcm-click-tracker"];if(null==k)f=[];else{var l=f["data-dcm-landing-page-escapes"]||"";"0"!==l&&"1"!==l&&"2"!==l&&(l="");var p={};3===c.h?(p[h.h]=k,p[h.G]=l):p[h.h+l]=k;null!=f["data-dcm-reverse-click-tracker"]&&(p[h.g]="rcl");f=[p]}R(e,33,f);S(e,44,g.L,c.m.corr);f=c.g;h=[];for(var n in f)0==n.indexOf("data-dcm-param-")&&
h.push(n);if(0==h.length)f=[];else{n=[];h.sort();for(k=0;k<h.length;k++){if(0<n.length){l=void 0;p=n[0];var t={};for(l in p)t[l]=p[l];l=t}else l={};p=h[k];(t=encodeURIComponent(p.substring(15)))&&!c.i.has(t)&&(l[t]=f[p],n.unshift(l))}f=n}R(e,26,f);b:{c:{var q=void 0===q?u:q;f=q.context||q.AMP_CONTEXT_DATA;if(!f)try{f=q.parent.context||q.parent.AMP_CONTEXT_DATA}catch(dd){}try{if(f&&f.pageViewId&&f.canonicalUrl){var m=f;break c}}catch(dd){}m=null}if(m)m=!0;else{m=c.I;for(q=0;q<m.length;q++)if(Kc.test(m[q].url)){m=
!0;break b}m=!1}}m&&S(e,47,g.B,"1");m=P(a.top)?0:1;S(e,39,g.O,m);m=Tb(c.B);m.length&&S(e,4,g.Y,m);c.L&&S(e,3,g.ra,"1");S(e,2,g.va,c.version);(m=c.P)?(m=(new Date).getTime()-m,99999<m&&(m="M")):m="";S(e,49,g.ta,m);Pc(a,e,c,g);m=u.devicePixelRatio;(m="number"===typeof m?+m.toFixed(3):null)&&S(e,13,g.u,m);(m=c.g["data-dcm-ssaid"])?(q={},q[c.i.na]=m,q[c.i.oa]="ssaid",m=[q]):m=[];R(e,30,m);c.H&&S(e,35,g.H,c.H);1===c.h?S(e,5,"sz",c.width&&c.height?c.width+"x"+c.height:""):(S(e,1,g.ma,"iframe"==c.u?"html":
"js"),m={},m[g.width]=c.width,m[g.height]=c.height,R(e,5,[m]));m=g.F;f=c.O;q=Ic(a)||["?"];f=Jc(f)||["?"];q=q.join(",")+":"+f.join(",");f=q.length;if(0==f)q=0;else{h=305419896;for(n=0;n<f;n++)h^=(h<<5)+(h>>2)+q.charCodeAt(n)&4294967295;q=0<h?h:4294967296+h}S(e,31,m,q);m=u.navigator;m.connection&&m.connection.saveData&&S(e,42,g.U,"1");Mc(e,c.g,[{priority:38,o:"data-dcm-app-id",s:g.appId},{priority:37,o:"data-dcm-publisher-url",s:g.qa},{priority:25,o:"data-dcm-keywords",s:g.ba},{priority:29,o:"data-dcm-impression-exchange-id",
s:g.$},{priority:40,o:"data-dcm-omid-partner",s:g.ja,S:"[OMIDPARTNER]"}]);R(e,14,Oc(c.g,"data-dcm-underage",g.ya));R(e,15,Oc(c.g,"data-dcm-child-directed",g.C));R(e,23,Oc(c.g,"data-dcm-limited-ads",g.ea));if(2===c.h||"https:"==Lc(c.g))R(e,22,Oc(c.g,"data-dcm-limit-ad-tracking",g.da)),R(e,21,Nc(c.g,{o:"data-dcm-resettable-device-id",s:g.sa}));c.j&&S(e,16,g.v,c.j);null!=c.gdprApplies&&S(e,17,g.gdprApplies,c.gdprApplies);c.v&&S(e,46,g.m,c.v);c.F&&S(e,18,g.l,c.F);c.G&&S(e,20,g.A,"1");if(2===c.h){var v=
c.i;S(e,0,v.V,c.l);var w=Gb(c.I);S(e,36,v.xa,w.h?w.h.url:w.g.url)}else g=c.i,m=hc(c.I),1===c.h?R(e,36,ic(g.j,m)):(S(e,0,g.X,c.l),R(e,36,ic(g.j,jc(m)))),m=c.g,q="","data-dcm-http-only"in m&&(q+="h"),"data-dcm-https-only"in m&&(q+="s"),""==q&&(q="n"),S(e,50,g.pa,q),S(e,32,g.ka,("00000"+Math.floor(Math.random()*Math.pow(36,6)).toString(36)).slice(-6)),m=c.g,"data-dcm-multi-bottom-float"in m?(v=c.i.ga,w=m["data-dcm-multi-bottom-float"]):"data-dcm-multi-left-float"in m?(v=c.i.ha,w=m["data-dcm-multi-left-float"]):
"data-dcm-multi-right-float"in m?(v=c.i.ia,w=m["data-dcm-multi-right-float"]):"data-dcm-multi-top-float"in m&&(v=c.i.T,w=m["data-dcm-multi-top-float"]),v&&w&&(w=w.split?w.split(","):w,S(e,11,v,w)),Mc(e,c.g,[{priority:27,o:"data-dcm-anonymous-inventory",s:g.g,N:"anid"},{priority:8,o:"data-dcm-disable-iframe-breakout",s:g.W,N:"false"},{priority:7,o:"data-dcm-dart-iframe-path",s:g.P},{priority:24,o:"data-dcm-external-id",s:g.Z},{priority:34,o:"data-dcm-in-app",s:g.aa,N:"1"},{priority:6,o:"data-dcm-interstitial",
s:g.g,N:"1_ist"},{priority:9,o:"data-dcm-left-float",s:g.ca},{priority:10,o:"data-dcm-top-float",s:g.wa},{priority:28,o:"data-dcm-user-defined",s:g.za}]);2===c.h?e=Nb(e,"https:","bid.g.doubleclick.net","/xbbe/bid/xpub?"):(v=Lc(c.g),e=3===c.h?Nb(e,v,"ad.doubleclick.net","/dv3/ad?"):Nb(e,v,"ad.doubleclick.net","/ddm/"+("script"==c.u?"adj":"adi")+"/"+c.A+";"));v=e;if(1===c.h&&!Qc.test(v))throw Error("Invalid tag URL: "+v);e=a.document;if("script"==c.u)if(w=c.B,w=w.g.hasOwnProperty(4)?w.g[4]:"",v='<script src="'+
v+'">\x3c/script>',ad(a,c),w===wc.D||w===xc.D||d){var E=bd(e);b.appendChild(E);e=E;d="<body>"+v+"</body>";if(tc)e.srcdoc=d;else if(e=e.contentWindow)e=e.document,e.open("text/html","replace"),d=N(d,null),e.write(M(d)),e.close()}else 1<b.children.length||1==b.children.length&&"b"==b.children[0].tagName.toLowerCase()||(b.style.display="none"),d=N(v,null),e.write(M(d));else E=bd(e),E.src=v,ad(a,c,E),b.appendChild(E);E&&Bb(a,E);b.style.textDecoration="none";"iP"===(a.navigator&&a.navigator.platform||
"").substr(0,2)&&"Google Mobile Ads"===c.C&&(b.style.display="block",P(a.top)&&a.top.document&&a.top.document.body&&(a.top.document.body.style.margin="0"))}
function ad(a,b,c){if(b.G){b=a.top.document;b=void 0===b?window.document:b;if(b.head){var d=document.createElement("meta");b.head.appendChild(d);d.httpEquiv="origin-trial";d.content="AxL6oBxcpn5rQDPKSAs+d0oxNyJYq2/4esBUh3Yx5z8QfcLu+AU8iFCXYRcr/CEEfDnkxxLTsvXPJFQBxHfvkgMAAACBeyJvcmlnaW4iOiJodHRwczovL2dvb2dsZXRhZ3NlcnZpY2VzLmNvbTo0NDMiLCJmZWF0dXJlIjoiVHJ1c3RUb2tlbnMiLCJleHBpcnkiOjE2MjYyMjA3OTksImlzU3ViZG9tYWluIjp0cnVlLCJpc1RoaXJkUGFydHkiOnRydWV9"}c&&(a=a.navigator.userAgent,a=void 0===a?window.navigator.userAgent:
a,a=a.match(/Chrome\/([0-9]+)/),c.allow=a&&92>Number(a[1])?"conversion-measurement":"attribution-reporting")}}function bd(a){a=a.createElement("iframe");var b=a.style;b.width="100%";b.height="100%";b.border="0";b.margin="0";b.padding="0";a.marginWidth="0";a.marginHeight="0";a.scrolling="no";a.frameBorder="0";a.title="advertisement";return a}
function Zc(a,b){if(a.ReportingObserver){var c=function(e){e=ea(e);for(var g=e.next();!g.done;g=e.next()){var f=g.value;g=f.type;(f=f.body)&&"intervention"===g&&(g={t:g,rid:f.id,tm:b.h,inv:1===b.h?b.A:b.l,ln:f.lineNumber,cn:f.columnNumber,src:f.sourceFile,msg:f.message},Wc(g,b),Ob(Ub,"dcmror",g,.1))}},d=new a.ReportingObserver(c,{buffered:!0});d.observe();a.addEventListener("unload",function(){c(d.takeRecords());d.disconnect()})}};var Z=window;Z.dcmads=Z.dcmads||{};Z.dcmads.version=Z.dcmads.version||{};var cd=new function(){this.l=this.A=null;this.I=Db();this.H=this.C=this.F=this.v=this.j=this.gdprApplies=null;this.G=!1};(function(a){return function(b){for(var c=[],d=0;d<arguments.length;++d)c[d]=arguments[d];return Yb(function(){return Sc.apply(void 0,c)},a)}})(na(Vc,Z,cd))(Z,cd);}).call(this);
